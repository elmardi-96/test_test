<?php

namespace App\Controller\ModuleAchat;

use DateTime;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\nuts;
use App\Entity\User;
use App\Entity\Avance;
use App\Entity\PPiece;
use App\Entity\PUnite;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\ArticleOld;
use App\Entity\PStatutgrv;
use App\Entity\UvDeviscab;
use App\Entity\UvDevisdet;
use \App\Service\AppService;

use App\Entity\UPPartenaire;
use App\Entity\PCompteBanque;
use App\Entity\PModepaiement;
use App\Entity\UaTechniqueCab;
use App\Entity\UsersSignature;
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;
use PhpOffice\PhpWord\PhpWord;
use App\Entity\PGlobalParamDet;
use App\Entity\UmouvementStock;
use App\Entity\ConfPdfParameter;
use App\Entity\UATFacturefrscab;
use App\Entity\UaTFacturefrsdet;
use App\Entity\Usersignaturedoc;
use PhpOffice\PhpWord\IOFactory;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\UGeneralOperation;
use App\Entity\UmouvementAntenne;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use Doctrine\ORM\EntityRepository;
use App\Form\UATCommandefrscabType;
use App\Form\UATCommandefrsdetType;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\UmouvementStockEncours;
use App\Repository\UarticleRepository;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\UATCommandefrscabAcompte;
use App\Entity\UATCommandefrscabFichier;
use App\Repository\UvDeviscabRepository;
use Picqer\Barcode\BarcodeGeneratorHTML;
use Symfony\Component\Workflow\Registry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use App\Repository\UvLivraisoncabRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use \App\Repository\UaTFacturefrscabRepository;
use App\Repository\UATCommandefrscabRepository;
use App\Repository\UGeneralOperationRepository;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Form\Type\VichFileType;
use App\Repository\UaTLivraisonfrscabRepository;
use App\Repository\UaTLivraisonfrsdetRepository;
use App\Repository\UaTReglementfrscabRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Repository\UATCommandefrscabAcompteRepository;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/achat/commandefrs")
 */
class UATCommandefrscabController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(/* SessionInterface $session, */Registry $workflowRegistry, AppService $AppService)
    {
        $this->workflowRegistry = $workflowRegistry;
        // $this->session = $session;
        $this->appService = $AppService;
    }

    public function getHistorique($objet)
    {
        $data = array();
        $workflow = $this->workflowRegistry->get($objet);
        $repository = $this->getDoctrine()->getRepository(User::class);
        foreach (array_reverse($objet->getHistorique()) as $key => $value) {
            $interval = date_diff(new \DateTime($value['time']), new \DateTime());
            if ($interval->format('%m') > 0) {
                $ago = $interval->format('%m') . ' Mois et ' . $interval->format('%d') . ' Jour (s)';
            } else if ($interval->format('%d') > 0) {
                $ago = $interval->format('%d') . ' Jours et ' . $interval->format('%h' . ' Heure (s)');
            } else if ($interval->format('%h') > 0) {
                $ago = $interval->format('il y a %h' . ' Heure (s)');
            } else if ($interval->format('%i') > 0) {
                $ago = $interval->format('il y a %i' . ' Minute (s)');
            } else {
                $ago = $interval->format('il y a %s' . ' Second (s)');
            }
            $data[$key]['date'] = $ago;
            $data[$key]['time'] = $value['time'];
            $data[$key]['user_nom'] = $value['user_nom'];
            $data[$key]['user_prenom'] = $value['user_prenom'];
            $data[$key]['user_username'] = $value['user_username'];
            $data[$key]['user_id'] = $value['user_id'];
            $data[$key]['current_place'] = $value['current_place'];

            //            foreach ($value['current_place'] as $key2 => $value2) {
            //                $data[$key]['metadata'] = $workflow->getMetadataStore()->getPlaceMetadata($key2);
            //            }
            foreach ($value['current_place'] as $key2 => $value2) {
                $data[$key]['metadata'] = $workflow->getMetadataStore()->getPlaceMetadata($key2);
            }
            $data[$key]['image'] = 'profil.png';
            $user = $repository->find($data[$key]['user_id']);
            if ($user->getImageName() <> "") {
                $data[$key]['image'] = $user->getImageName();
            }
        }

        return $data;
    }
    /**
     * 
     *
     * @Route("/list",options = { "expose" = true }, methods={"GET","POST"} , name="commandefrscab_list")
     * 
     */
    public function list(Connection $connection, Request $request, UATCommandefrscabRepository $UATCommandefrscabRepository): Response
    {


        $data = array();
        $totalRows = $sqlRequest = '';



        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {

            //dump($value);

            $columns[] = $value['name'];
            if (!empty($value['search']['value'])) {

                //echo is_object(json_decode($value['search']['value']));

                if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                    $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                    $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                } else {
                    $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                }
            }
        }

        $where = $having = $condition = $havingCondition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($request->query->get('columns') as $key => $value) {


                if (isset($value['name']) && $value['searchable'] == "true" && !empty($value['name'])) {
                    //  dump($value);
                    $where .= " OR " . $value['name'] . " LIKE '%$search%' ";
                }
            }


            $condition = " and (" . substr($where, 3) . ")";

            // echo $condition ; die();
            //$havingCondition = " HAVING (1=1 OR (" . substr($having, 3) . "))"; 
        }




        $sql = "SELECT cab.id ,
        cab.old_sys,
        cab.code, 
        DATE_FORMAT(cab.datecommande,'%d/%m/%Y')  datecommande , 
        cab.refDocAsso ,
        cab.observation,
        frs.societe as fournisseur , 
         achat.id as dem_id,
         achat.code as dem_code,
         cab.position_actuel,
         cab.statutsig as signature ,
        (case  when cab.cdc = true then 'fa-check-square-o' else 'fa-square-o'  end) as cdc , 
        (case when cab.cdv = true then 'fa-check-square-o' else 'fa-square-o' end) as cdv, 
        (case when cab.bec = true then 'fa-check-square-o' else 'fa-square-o' end) as bec , 
        (case when cab.bev = true then 'fa-check-square-o' else 'fa-square-o' end) as bev ,
   
        SUM(det.quantite * det.prixunitaire ) ht  ,
        SUM( det.quantite * det.prixunitaire *  (IFNULL(det.remise,0)) /100) remise ,
        SUM(det.quantite * det.prixunitaire * (IFNULL(det.tva,0) /100   * ( 1 - IFNULL(det.remise,0)/100))) tva  ,  
        SUM(det.quantite * det.prixunitaire * (1+IFNULL(det.tva,0)/100) * (1-IFNULL(det.remise,0)/100)) ttc  

    FROM `ua_t_commandefrscab` cab
    left join `u_p_partenaire` frs on frs.id = cab.u_p_partenaire_id
    left join ua_t_commandefrsdet det on det.ua_t_commandefrscab_id = cab.id
    left join t_achatdemandeinternecab achat on achat.id = cab.reference_bci_id
    where 1= 1 and cab.active = 1 and  cab.p_dossier_id = " . $this->appService->getDossierCourant()->getId();

        $sql .= " GROUP BY cab.id";



        $sql2 = "SELECT * FROM (" . $sql . ") tab where 1=1  " . $condition;
        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();
        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";


        //    echo($sql2); die(); 


        // dump($columns[$request->query->get('order')[0]['column']]['name']); die();



        $data = array();



        foreach ($connection->fetchAll($sql2) as $key => $value) {


            //$ExistLivFacReg =$UATCommandefrscabRepository->ExistLivFacReg($commande['id']); 
            $UATCommandefrscab = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value['id']);
            // t_commandefrscab_show
            $id = $value['id'];
            $nestedData = array();
            $str = '';
            if ($value['old_sys'] == 1) {
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='" . $value['id'] . "'></i>";
            }
            // data-reference = '".$value ['refDocAsso']."'
            $nestedData[] = "<input type='checkbox' name='_action' class='action'  value='" . $value['id'] . "'>";
            $url = "<a href='" . $this->generateUrl('t_commandefrscab_show', ['id' => $value['id']]) . "'> " . $value['code'] . " </a>" . $str;
            $nestedData[] = "<span  cursor:pointer' class='hint--right' aria-label='" . $value['code'] . "'>" . $url . "</span>";
            $nestedData[] = $value['datecommande'];
            $refDocAsso = $value['refDocAsso'];
            if (strlen($refDocAsso) >= 12) {
                $nestedData[] = mb_substr($refDocAsso, 0, 12) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['refDocAsso'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $refDocAsso;
            }
            $observation = $value['observation'];
            if (strlen($observation) >= 12) {
                $nestedData[] = mb_substr($observation, 0, 10) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['observation'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $observation;
            }
            $fournisseur = $value['fournisseur'];
            if (strlen($fournisseur) > 15) {
                $nestedData[] = mb_substr($fournisseur, 0, 15) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['fournisseur'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $fournisseur;
            }
            $nestedData[] = number_format($value['ht'], 2, ',', ' ');
            $nestedData[] = number_format($value['tva'], 2, ',', ' ');
            $nestedData[] = number_format($value['ttc'], 2, ',', ' ');
            $url = null;
            if (!empty($commande['dem_id'])) {
                $url = "<a href='" . $this->generateUrl('t_achatdemandeinternecab_show', ['id' => $value['dem_id']]) . "'> " . $value['dem_code'] . " </a>";
            }

            $nestedData[] = $url;


            /* $nestedData[] = "<i class='fa " . $commande['cdc'] . "'></i>";
            $nestedData[] = "<i class='fa " . $commande['cdv'] . "'></i>";
            $nestedData[] = /* $ExistLivFacReg['exist_livraison'] > 0 ? 'LD' : 'NL' * / $commande['stLiv'];
            $nestedData[] = /* $ExistLivFacReg['exist_facture'] > 0 ?  'FD': 'NF' * / $commande['stFac'];
            $nestedData[] = "<i class='fa " . $commande['bec'] . "'></i>";
            $nestedData[] = "<i class='fa " . $commande['bev'] . "'></i>";
            $nestedData[] = /* $ExistLivFacReg['exist_reglement'] > 0 ? 'RD' : 'NR' * / $commande['stReg'];*/


            $nestedData[] = $UATCommandefrscab->HasCommandeWithIcon()['livraison']['icon'];
            $nestedData[] = $UATCommandefrscab->HasCommandeWithIcon()['facture']['icon'];
            $nestedData[] = $UATCommandefrscab->HasCommandeWithIcon()['reglement']['icon'];
            $sign = $value['signature'];
            if ($sign == 0) {
                $signature ="Non signé" ;
           }else if ($sign == 1) {
            $signature ="Signé " ;
            }else if ($sign == 2) {
                $signature ="antérieur" ;
            }else {
                $signature ="NULL" ;
            }
            $nestedData[] =  $signature ;
            $statut = $this->appService->getStatut($value['position_actuel']);
            $nestedData[] = $statut;


            $operations = array();

            foreach ($this->appService->getOperations('_module_achat', '_bc_fr', '_index', true) as $key1 => $value1) {
                if ($value1['eachRow'] != null) {
                    $operations[$key1] = $value1;
                    $operations[$key1]['id_row'] = $id;
                    $operations[$key1]['id'] = $id;
                    if ($value1['route'] != "" && $value1['routeWithParam'] == true) {
                        $operations[$key1]['_route_link'] =   $this->generateUrl($value1['route'], ['id' => $id], UrlGenerator::ABSOLUTE_URL);
                    }
                }
            }
            //echo $id; 
            //dump($operations); die(); 

            // trier les actions selon la position du wokrlow
            if (in_array($value['position_actuel'], ['valider', 'commander'])) {
                unset($operations['_edit'], $operations['_delete_commande'], $operations['_desactiver_commande'], $operations['_change_dossier']);
            }
            
            
            $array2 = array();
            // recuperer les positions acessible selon le workow 
            if (isset($operations['_workflow'])) {
                unset($operations['_workflow']);
                $obj = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($id);
                $workflow = $this->workflowRegistry->get($obj);

                $transitions = $workflow->getEnabledTransitions($obj);


                foreach ($transitions as $key => $value) {
                    $array2[$key]['id'] = $id;
                    $array2[$key]['name'] = $value->getName();
                    $array2[$key]['titre'] = $workflow->getMetadataStore()->getMetadata('title', $value);
                    $array2[$key]['class'] = $workflow->getMetadataStore()->getMetadata('class', $value) . ' ' . $workflow->getMetadataStore()->getMetadata('function', $value);
                    $array2[$key]['icon'] = $workflow->getMetadataStore()->getMetadata('icon', $value);
                    $array2[$key]['color'] = $workflow->getMetadataStore()->getMetadata('color', $value);
                }
            }
            $nestedData[] = array_values(array_merge($operations, $array2));
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        // dd($data);
        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/{id}/upload", name="ua_t_commandefrscab_upload", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function Upload(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UATCommandefrscab $uatCommandefrscab): Response
    {

        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_fichiers', [true, $uatCommandefrscab->getCode()]);

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $fichier = new UATCommandefrscabFichier();
            $form = $this->createFormBuilder($fichier)
                ->add('imageFile', VichFileType::class, ['constraints' => [new NotBlank()]])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();

                $fichier->setUserCreated($this->getUser());
                $fichier->setComande($uatCommandefrscab);
                $fichier->setOriginalName($fichier->getImageFile()->getClientOriginalName());
                $fichier->setMimeType($fichier->getImageFile()->getClientMimeType());
                $entityManager->persist($fichier);
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue.']], 200);
            }

            $valider = 'No';
            if (isset($uatCommandefrscab->getPositionActuel()['valider'])) {
                $valider = 'valider';
            }
            return $this->render('module_achat/t_commandefrscab/upload.html.twig', [
                'commande' => $uatCommandefrscab,
                'form' => $form->createView(),
                'valider' => $valider,
                'operations' => $operations
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }
    /**
     * @Route("/", name="ua_t_commandefrscab_index",   options={"expose"=true}  , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        // /* informations modules dossiers Autorises pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantUgouvAchat');
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        // $modules = $this->session->get('modules');


        // /* verifier le doit d'acces a cette operation */

        // $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_ugouv_achat',
        //     'sousModule' => '_bc_fr',
        //     'operation' => '_index',
        //     'dossier' => $dc->getPrefix()

        // ]);




        // /* sous module courant */
        // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];



        // /* navigation  */
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        // $breadcrumbs->addItem("liste");

        // /* operations autorises pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];


        //  $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_index', true);

        //$uatCommandefrscabs = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findAll();
        // $upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findAll();
        return $this->render('module_achat/t_commandefrscab/index.html.twig', [
            // 'ua_t_commandefrscabs' => $uatCommandefrscabs,
            //  'u_p_partenaires' => $upPartenaires,
            'operations' => $operations
        ]);
    }

    //ua_t_commandefrscab_acompte

    /**
     * @Route("/{id}/acompte", name="ua_t_commandefrscab_acompte",   options={"expose"=true}  , methods={"GET","POST"})
     */
    public function acompte(Request $request, Breadcrumbs $breadcrumbs, UATCommandefrscab $uatCommandefrscab): Response
    {

        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_reception_acompte',  [true, $uatCommandefrscab->getCode()]);


        //  dump($uatCommandefrscab->checkAcompteAndLivraison()['acompteRef']);die();

        return $this->render('module_achat/t_commandefrscab/acompte.html.twig', [
            'commande' => $uatCommandefrscab,
            'acompte' =>  $uatCommandefrscab->checkAcompteAndLivraison(),
            'operations' => $operations
        ]);
    }



    /**
     * @Route("/new", name="ua_t_commandefrscab_new",   options={"expose"=true}  , methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response
    {

        //  /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');

        //  /* verifier le doit d'acces a cette operation */

        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_bc_fr',
        //      'operation' => '_new',
        //      'dossier' => $dc->getPrefix()

        //  ]);

        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];




        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];



        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        //  $breadcrumbs->addItem("Nouveau");

        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];


        //  $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_new', true);


        $TCommandefrsdet = new UATCommandefrsdet();
        $form_det = $this->createForm(UATCommandefrsdetType::class, $TCommandefrsdet);
        $form_det->handleRequest($request);

        $uatCommandefrscab = new UATCommandefrscab();
        $devise = $this->getDoctrine()->getRepository(UPDevise::class)->findOneByCode('MAD');
        $uatCommandefrscab->setDevise($devise);
        $form = $this->createForm(UATCommandefrscabType::class, $uatCommandefrscab, array('dossier' => $this->appService->getDossierCourant()));
        $form->handleRequest($request);


        $UATCommandefrsdet = new UATCommandefrsdet();
        $errors = $validator->validate($UATCommandefrsdet);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }




        return $this->render('module_achat/t_commandefrscab/new.html.twig', [
            'commande' => $uatCommandefrscab,
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'operations' => $operations,
            'errors_detail' => $error,
            'nameDetail' => 'uat_commandefrsdet'
        ]);
    }

    /**
     * @Route("/insert", name="ua_t_commandefrscab_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insert(
        Request $request,
        ValidatorInterface $validator,
        UATCommandefrscabRepository $UATCommandefrscabRepository,
        UarticleRepository $UarticleRepository,
        Breadcrumbs $breadcrumbs
    ): Response {

        /* informations modules dossiers Autorises pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantUgouvAchat');
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        // $modules = $this->session->get('modules');


        $dc = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());



        $TCommandefrsdet = new UATCommandefrsdet();
        $form_det = $this->createForm(UATCommandefrsdetType::class, $TCommandefrsdet);
        $form_det->handleRequest($request);

        $uatCommandefrscab = new UATCommandefrscab();
        $form = $this->createForm(UATCommandefrscabType::class, $uatCommandefrscab, array('dossier' => $this->appService->getDossierCourant()));
        $form->handleRequest($request);


        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
        if ($form->isSubmitted()) {

            /*
             * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
             */
            $errors = $validator->validate($form);

            // dump($errors); die();
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            } else {

                /*
                 * varifier si il y'a au moins un article saisie
                 * (json_decode) decoder le tables des articles
                 */
                foreach ($form->getData()->getDetails() as $key => $value) {
                    # code...
                    // dump($value);
                }
                //dump($form->get('detail'));die();

                $detail = json_decode($request->request->get('detail'));

                /*
                 * fait une boucle sur la liste des articles et setter les donnees de detail
                 */
                $entityManager = $this->getDoctrine()->getManager();
                foreach ($detail as $key => $value) {
                    $TCommandefrsdet = new UATCommandefrsdet();


                    //                   $article = $UarticleRepository->find($value->article->id); 
                    //                     dump($article); die();
                    if ($value->uniteId != "") {
                        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->uniteId);
                        $TCommandefrsdet->setUnite($unite);
                    }
                    $TCommandefrsdet->setArticle($UarticleRepository->find($value->articleId));
                    // $tAchatdemandeinternedet->setUnite($value->unite);
                    $TCommandefrsdet->setPrixunitaire($value->prixunitaire);
                    $TCommandefrsdet->setObservation($value->observation);
                    $TCommandefrsdet->setQuantite($value->quantite);
                    $TCommandefrsdet->setRemise($value->remise);

                    $TCommandefrsdet->setTva($value->tva);
                    //$TCommandefrsdet->setObservation($value->observation);
                    $TCommandefrsdet->setCab($uatCommandefrscab);
                    $entityManager->persist($TCommandefrsdet);
                }
                /*
                 * fait une select by sur le dossier pour setter le dossier
                 */

                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                $uatCommandefrscab->setDossier($dossier);
                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'cr_bcf']);
                $uatCommandefrscab->setStatut($PStatutgrv);

                $uatCommandefrscab->setActive(true);
                $uatCommandefrscab->setUserCreated($this->getUser());
                $uatCommandefrscab->setPositionActuel('creer');
                if ($uatCommandefrscab->getFournisseur()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($uatCommandefrscab->getFournisseur()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
                $uatCommandefrscab->setCode($UATCommandefrscabRepository->GetLastCode($cat));

                $entityManager->persist($uatCommandefrscab);
                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();
                /*
                  $encoder = new JsonEncoder();
                  $normalizer = new ObjectNormalizer();
                  $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
                  return $object->getId();
                  });
                  $serializer = new Serializer(array($normalizer), array($encoder));


                  $response = new Response($serializer->serialize(['data' => $uatCommandefrscab,
                  'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']], 'json'));
                  $response->headers->set('Content-Type', 'application/json');
                  return $response; */

                return $this->json([
                    'data' => array('id' => $uatCommandefrscab->getId()),
                    'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
                ]);
                //  return $this->json(['data' => $uatCommandefrscab, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
            }
        }
    }

    /**
     * @Route("/new/detail", name="ua_t_commandefrsdet_new", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function Detadd(ValidatorInterface $validator, Request $request): Response
    {


        /*
         * Ajouter une expression de besoin details (articles)
         * En utilisant Ajax au niveau de validation
         */

        /*
         * La creation du formulaire
         */
        $UATCommandefrsdet = new UATCommandefrsdet();


        $form = $this->createForm(UATCommandefrsdetType::class, $UATCommandefrsdet);
        $form->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form);


        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        } else {




            /*
             * Retourner l'objet saisie avec le calcule de tva
             */

            //  dump($tAchatdemandeinternedet->getTva()); die(); 
            if ($UATCommandefrsdet->getRemise() == null) {
                $UATCommandefrsdet->setRemise(0);
            }
            if ($UATCommandefrsdet->getTva() == null) {
                $tva = 1;
            } else {
                $tva = ($UATCommandefrsdet->getTva() / 100) + 1;
            }






            //            $encoder = new JsonEncoder();
            //            $normalizer = new ObjectNormalizer();
            //            $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
            //                return $object->getId();
            //            });
            //            $serializer = new Serializer(array($normalizer), array($encoder));
            //
            //
            //            $response = new Response($serializer->serialize(['data' => $UATCommandefrsdet,
            //                        'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']], 'json'));
            //            $response->headers->set('Content-Type', 'application/json');
            //            return $response;
            //            return $this->json(['data' => $UATCommandefrsdet,
            //                        'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);



            $detail = array(
                'id' => $UATCommandefrsdet->getArticle()->getId(),
                'titre' => $UATCommandefrsdet->getArticle()->getTitre(),
                'code' => $UATCommandefrsdet->getArticle()->getCode(),
                'unite' => $UATCommandefrsdet->getUnite() ? $UATCommandefrsdet->getUnite()->getAbreviation() : "",
                'unite_id' => $UATCommandefrsdet->getUnite() ? $UATCommandefrsdet->getUnite()->getId() : "",
                'observation' => $UATCommandefrsdet->getObservation(),
                'observation' => $UATCommandefrsdet->getObservation(),
                'quantite' => $UATCommandefrsdet->getQuantite(),
                'prixunitaire' => $UATCommandefrsdet->getPrixunitaire(),
                'prixttc' => $UATCommandefrsdet->getPrixttc(),
                'tva' => $UATCommandefrsdet->getTva(),
                'montantRemise' => $UATCommandefrsdet->getPrixRemise(),
                'remise' => $UATCommandefrsdet->getRemise()
            );

            return $this->json([
                'data' => $detail,
                'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);
        }
    }

    /**
     * @Route("/{id}/statut", name="ua_t_commandefrscab_statut", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statut(ValidatorInterface $validator, Request $request, UATCommandefrscab $uatCommandefrscab): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder($uatCommandefrscab)
                ->add('statut', EntityType::class, [
                    'class' => PStatutgrv::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                            ->where("a.module = 'BCF'")
                            ->orderBy('a.statut', 'ASC');
                    },
                    'choice_label' => 'statut',
                    'placeholder' => 'Choix statut ',
                ])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);

                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue2 .']], 200);
            }
            return $this->render('ugouv/achat/t_commandefrscab/statut.html.twig', [
                'ua_t_commandefrscab' => $uatCommandefrscab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }


    /**
     * @Route("/{id}/type", name="ua_t_commandefrscab_type_show", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function typecommande(ValidatorInterface $validator, Request $request, UATCommandefrscab $uatCommandefrscab): Response
    {
        
        /**
         * verifier s'il s'ajit de ajax request
         */
        $em = $this->getDoctrine()->getManager();
        if ($request->isXmlHttpRequest()) {
            // dd($request);
            $form = $this->createFormBuilder($uatCommandefrscab)

                ->add('type', EntityType::class, [
                    'class' => PGlobalParamDet::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                            ->innerJoin('a.cab', 't')

                            ->where('t.prefix = :type')
                            ->setParameter('type', 't_cmd')
                            ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'v',
                    'placeholder' => 'Choix type',
                    'constraints' => [
                        new NotBlank(),
                    ],
                ])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                
                if($uatCommandefrscab->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
                }

                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                        $uatCommandefrscab->setPositionActuel('valider');


                $demande = $uatCommandefrscab->getReferenceBci();
                if(count($demande->getCabs()) > 0) {
                    foreach ($demande->getCabs() as $key => $cab) {
                        foreach ($cab->getCommandes() as $key => $commande) {
                            if($commande->getPositionActuel() == "creer") {
                                $commande->setPositionActuel('valider');
                                $commande->setType(
                                    $em->getRepository(PGlobalParamDet::class)->find($request->request->get('form')['type'])
                                );
                            }
                        }
                        foreach ($cab->getDevis()->getCommandes() as $key => $commande) {
                            if($commande->getPositionActuel() == "creer") {
                                $commande->setPositionActuel('valider');
                                $commande->setTypecmd(
                                    $em->getRepository(PGlobalParamDet::class)->find($request->request->get('form')['type'])
                                );
                            }
                        }
                    }
                }

                $em->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue2 .']], 200);
            }
            return $this->render('module_achat/t_commandefrscab/type.html.twig', [
                'ua_t_commandefrscab' => $uatCommandefrscab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/check", name="ua_t_commandefrscab_check", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function check(ValidatorInterface $validator, Request $request, UATCommandefrscab $uatCommandefrscab): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder($uatCommandefrscab)
                ->add('cdc', CheckboxType::class, [
                    'label' => 'CDC',
                    'required' => false,
                ])
                ->add('cdv', CheckboxType::class, [
                    'label' => 'CDV',
                    'required' => false,
                ])
                ->add('bec', CheckboxType::class, [
                    'label' => 'BEC',
                    'required' => false,
                ])
                ->add('bev', CheckboxType::class, [
                    'label' => 'BEV',
                    'required' => false,
                ])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);

                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue2 .']], 200);
            }
            return $this->render('ugouv/achat/t_commandefrscab/check.html.twig', [
                'ua_t_commandefrscab' => $uatCommandefrscab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/pdfShow", name="vpdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfShow(UATCommandefrscab $uatCommandefrscab)
    {

        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $repository = $this->getDoctrine()->getRepository(UATCommandefrsdet::class);
        $uatCommandefrsdets = $repository->findBy(['cab' => $uatCommandefrscab->getId()]);
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
        $html = $this->renderView('ugouv/achat/t_commandefrscab/pdf/mypdf.html.twig', [
            'parametre' => $parametre,
            'ua_t_commandefrscab' => $uatCommandefrscab,
            'ua_t_commandefrsdets' => $uatCommandefrsdets
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/show", name="t_commandefrscab_show" , options={"expose"=true}   , methods={"GET"})
     */
    public function show(UATCommandefrscab $uatCommandefrscab, Breadcrumbs $breadcrumbs, $id): Response
    {



        // /* informations modules dossiers Autorises pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantUgouvAchat');
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        // $modules = $this->session->get('modules');

        // /* verifier le doit d'acces a cette operation */

        // $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_ugouv_achat',
        //     'sousModule' => '_bc_fr',
        //     'operation' => '_show',
        //     'dossier' => $dc->getPrefix()

        // ]);

        // /* operations autorises pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];



        // /* sous module courant */
        // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];


        // /* navigation  */
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        // $breadcrumbs->addItem($uatCommandefrscab->getCode());

        //  $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_show', [true, $uatCommandefrscab->getCode()]);
        // dd($operations);
        $valider = 'No';
        if (isset($uatCommandefrscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }

        $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['dossier' => $uatCommandefrscab->getDossier()]);
        $modePaiements = $this->getDoctrine()->getRepository(PModepaiement::class)->findAll();
        $totalArticles = $uatCommandefrscab->getArrayTotalArticleByCommande($uatCommandefrscab);
        return $this->render('module_achat/t_commandefrscab/show.html.twig', [
            'commandefrscab' => $uatCommandefrscab,
            'commande' => $uatCommandefrscab,
            'valider' => $valider,
            'comptes' => $comptes,
            'modePaiements' => $modePaiements,
            'operations' => $operations,
            "ht" => $totalArticles['prixHt'],
            "ttc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
        ]);
    }



    /**
     * @Route("/{id}/personalise", name="t_commandefrscab_personalise" , options={"expose"=true}   , methods={"GET"})
     */
    public function personalise(UATCommandefrscab $uatCommandefrscab, Breadcrumbs $breadcrumbs, $id): Response
    {



        /* informations modules dossiers Autorises pour cet utilisateur */
        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');

        /* verifier le doit d'acces a cette operation */

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_ugouv_achat',
            'sousModule' => '_bc_fr',
            'operation' => '_show',
            'dossier' => $dc->getPrefix()

        ]);

        /* operations autorises pour cet utilisateur */
        $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];



        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];


        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        $breadcrumbs->addRouteItem($uatCommandefrscab->getCode(), "t_commandefrscab_show", ['id' => $uatCommandefrscab->getId()]);

        $breadcrumbs->addItem('Personalise');

        // $work = json_decode($uatCommandefrscab->getPositionActuel());
        $valider = 'No';
        if (isset($uatCommandefrscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }


        $totalArticles = $uatCommandefrscab->getArrayTotalArticleByCommande($uatCommandefrscab);



        return $this->render('ugouv/achat/t_commandefrscab/show.html.twig', [
            'commandefrscab' => $uatCommandefrscab,
            'commande' => $uatCommandefrscab,
            'valider' => $valider,
            'operations' => $operations,
            "ht" => $totalArticles['prixHt'],
            "ttc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
        ]);
    }

    /**
     * @Route("/statuts" ,name="t_commandefrscab_statuts" , options = { "expose" = true } , methods={"GET","POST"})
     */
    public function statuts(Request $request): Response
    {
        //  $json_data = array('data' => "bien");
        //return new Response(json_encode($json_data));
        $json_data = array('data' => 'gffdg');
        $tcommandcab = $this->getDoctrine()
            ->getRepository(UATCommandefrscab::class)
            ->find($request->get('idcommande'));
        $name = $request->get('name');
        $chek;;
        if ($request->get('checked') == 'true') {
            $chek = 1;
        } else {
            $chek = 0;
        }
        switch ($name) {
            case "bec":
                $tcommandcab->setBec($chek);
                break;
            case "bev":
                $tcommandcab->setBev($chek);
                break;
            case "cdc":
                $tcommandcab->setCdc($chek);
                break;
            case "cdv":
                $tcommandcab->setCdv($chek);
        }
        $this->getDoctrine()->getManager()->flush();
        $json_data = array('data' => "bien");
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/{id}", name="t_commandefrscab_delete1", methods={"DELETE"})
     */
    public function delete(Request $request, UATCommandefrscab $uatCommandefrscab): Response
    {
        if ($this->isCsrfTokenValid('delete' . $uatCommandefrscab->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($uatCommandefrscab);
            $entityManager->flush();
        }

        return $this->redirectToRoute('ua_t_commandefrscab_index');
    }

    /**
     * @Route("/{id}/generer", name="ua_t_commandefrscab_apply_generer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function generer(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UATCommandefrscab $uatCommandefrscab): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */
        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');

        /* Verifier si cet utilisateur il peut acceder a cette operation */
        if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations']['_generer'])) {
            return new Response("Operation non autorie", 403);
        }


        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];


        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        $breadcrumbs->addRouteItem($uatCommandefrscab->getCode(), "t_commandefrscab_show", ['id' => $uatCommandefrscab->getId()]);
        $breadcrumbs->addItem("generer");
        // dump($uatCommandefrscab->getLivraisons());
        $array_data = array();

        foreach ($uatCommandefrscab->getDetails() as $key => $detailsCommande) {
            $array_data[$key]['id'] = $detailsCommande->getArticle()->getId();
            $array_data[$key]['titre'] = $detailsCommande->getArticle()->getTitre();

            $array_data[$key]['prixUnitaire'] = $detailsCommande->getPrixUnitaire();
            $array_data[$key]['tva'] = $detailsCommande->getTva();
            $array_data[$key]['quantite'] = $detailsCommande->getQuantite();

            $quantiteLivre = 0;
            foreach ($uatCommandefrscab->getLivraisons() as $key2 => $livraison) {
                foreach ($livraison->getDetails() as $key3 => $detailsLivraison) {
                    if ($detailsLivraison->getArticle()->getId() == $detailsCommande->getArticle()->getId()) {
                        $quantiteLivre += $detailsLivraison->getQuantite();
                    }
                }
            }


            $array_data[$key]['quantiteLivre'] = $quantiteLivre;
            $array_data[$key]['reste'] = $detailsCommande->getQuantite() - $quantiteLivre;
        }

        $data = serialize($array_data);
        $dataSerialize = htmlentities($data);
        return $this->render('ugouv/achat/t_commandefrscab/generer.html.twig', [
            'commande' => $uatCommandefrscab,
            'data' => $array_data,
            'dataSerialize' => $dataSerialize,
        ]);
    }

    /**

     * @Route("/{id}/livraison/", name="ua_t_commandefrscab_livraison_show", options={"expose"=true}, methods={"GET","POST"})

     */
    public function showLivraison(Request $request, UATCommandefrscabAcompteRepository $UATCommandefrscabAcompteRepository, UATCommandefrscabRepository $rep, Breadcrumbs $breadcrumbs, UATCommandefrscab $commande): Response
    {





        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_receptions', [true, $commande->getCode()]);






        $totalLivraison = array();

        foreach ($commande->getLivraisons() as $key => $value) {
            # code...
            if ($value->getActive() == true) {
                $totalLivraison[$key] = $value->getArrayTotalArticleByLivraison($value);
            }
        }




        //  dump($commande->getType());
        // die();
        $commande->getDevise() ? $designation = $commande->getDevise()->getDesignation() : $designation = null;

        $data = $this->appService->getRestCommandeAchat($rep, $commande);

        if ($commande->getType()) {

            return $this->render('module_achat/t_commandefrscab/show_livraison.html.twig', [
                'commande' => $commande,
                'data' => $data['array_data'],
                'dataSerialize' => $data['dataSerialize'],

                'acomptesSansFacture' => $rep->CheckAcompte($commande->getId()),
                'operations' => $operations,
                'totalLivraison' => $totalLivraison,
                'prixHtReste' =>  $data['prixHtReste'],
                'prixTvaReste' =>  $data['prixTvaReste'],
                'prixRemiseReste' =>   $data['prixRemiseReste'],
                'prixTotalTtcReste' =>  $data['prixTotalTtcReste']


            ]);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "le type du commande n'est pas montionné."]], 403);
        }
    }

    /**
     * @Route("/{id}/generer/insert", name="ua_t_commandefrscab_generer_insert", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function genererInsert(Request $request, UATCommandefrscab $uatCommandefrscab,UvLivraisoncabRepository $UvLivraisoncabRepository, UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository): Response
    {

        if($uatCommandefrscab->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
            return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
        }
        if (!empty($uatCommandefrscab->getFournisseur())) {

            if ($uatCommandefrscab->getReferenceBci()->getDevis()) {
                $errors[] = "Cette Livraison sera générée automatiquement par le vendeur";
                return $this->json(['errors' => $errors]);
            }
        }
        
    

        // dd($uatCommandefrscab);

        //        dump($request->request);
        //        die;
        $entityManager = $this->getDoctrine()->getManager();
        if (in_array($uatCommandefrscab->getFournisseur()->getCategorie()->getK(), ['externe' , 'externe es'])) {
            // dd('amine');
            $piceliv = $entityManager->getRepository(PPiece::class)->find(57);
        } elseif ($uatCommandefrscab->getFournisseur()->getCategorie()->getK() == 'interne') {
            $piceliv = $entityManager->getRepository(PPiece::class)->find(58);
        }
        // dd($piceliv);
// dd($uatCommandefrscab->getFournisseur()->getCategorie()->getK(),'lab');


        $reste = $request->request->get('reste');
        $acomptes = array();
        $montantAcompte = null;
        if (!empty($request->request->get('acomptes'))) {
            $acomptes = $request->request->get('acomptes');
            $montantAcompte = array_sum($acomptes);
        }
        $montantReception = $request->request->get('montantReception');
        //dump($montantReception);
        //die;
        $tp = $uatCommandefrscab->getType() ? $uatCommandefrscab->getType()->getV() : null;
        $errors = array();
        $data = json_decode(($request->request->get('dataSerialize')), true);







        if (empty($request->request->get('refDocAsso')) || empty($request->request->get('dateDocAsso'))) {
            $errors[] = "Veuillez remplir tous les champs obligatoires";
            return $this->json(['errors' => $errors]);
        }



        if (isset($reste)) {
            foreach ($reste as $key => $res) {
                $data[$key]['aLivrer'] = $res;
            }
        } else {
            $errors[] = "Impossible de generer une reception sans mentionner le reste ";
            return $this->json(['errors' => $errors]);
        }

        $count = 0;
        $count2 = 0;
        $count3 = 0;


        foreach ($data as $key => $article) {

            $id = $article['prixUnitaire'];
            if ($article['aLivrer'] > $article['reste']) {
                $errors[] = "la quantite de l'article :(" . $article['titre'] . ") saisie est de " . $article['aLivrer'] . " la quantite reste a livre c'est : " . $article['reste'];
            }
            if ($article['aLivrer'] < 0) {
                $errors[] = "La quantite de l'article :(" . $article['titre'] . ") saisie est de: " . $article['aLivrer'] . " est invalide veuillez donnez une quantite superieur ou egale a zero";
            }
            if ($article['reste'] == 0) {
                $count++;
            }
            if ($article['reste'] > 0 && $article['aLivrer'] == 0) {
                $count2++;
            }
            if ($article['reste'] > 0 && $article['aLivrer'] > 0) {
                $count3++;
            }
        }

        if ($montantReception < $montantAcompte) {
            $errors[] = "Impossible de generer une reception avec un montant inferieur au montant d'acompte <br/> NB : montant acompte : " . $montantAcompte . "<br/> Montant reception : " . $montantReception;
        }



        if (count($data) == $count2 || ($count3 == 0 && count($errors) == 0)) {
            $errors[] = "Veuillez saisie au moins un article";
        }

        if (count($data) == $count) {
            $errors[] = "Aucune quanite dispobile a livre.";
        }






        if (count($errors) > 0) {
            return $this->json(['errors' => $errors]);
        }


// dd($uatCommandefrscab->getProjet());
        $livraisonCab = new UaTLivraisonfrscab();
        $livraisonCab->setCommande($uatCommandefrscab);
        $livraisonCab->setDatedocasso(new \DateTime($request->request->get('dateDocAsso')));
        $livraisonCab->setRefdocasso($request->request->get('refDocAsso'));
        $livraisonCab->setDescription($uatCommandefrscab->getObservation());
        $livraisonCab->setDossier($uatCommandefrscab->getDossier());
        $livraisonCab->setDevise($uatCommandefrscab->getDevise());
        $livraisonCab->setDatelivraison($uatCommandefrscab->getDatecommande());
        $livraisonCab->setFournisseur($uatCommandefrscab->getFournisseur());
        $livraisonCab->setRemise($uatCommandefrscab->getRemise());
        $livraisonCab->setObservation($request->request->get('description'));
        $livraisonCab->setFrs1($uatCommandefrscab->getFrs1());
        $livraisonCab->setMtfrs1($uatCommandefrscab->getMtfrs1());
        $livraisonCab->setFrs2($uatCommandefrscab->getFrs2());
        $livraisonCab->setMtfrs2($uatCommandefrscab->getMtfrs2());
        $livraisonCab->setPourCompte($uatCommandefrscab->getPourCompte());
        $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'RCF', 'abreviation' => 'lvr_prt_rcf']);
        $livraisonCab->setStatut($PStatutgrv);
        $livraisonCab->setFrs1($uatCommandefrscab->getFrs1());
        $livraisonCab->setMtfrs1($uatCommandefrscab->getMtfrs1());
        $livraisonCab->setFrs2($uatCommandefrscab->getFrs2());
        $livraisonCab->setMtfrs2($uatCommandefrscab->getMtfrs2());
        $livraisonCab->setRemise($uatCommandefrscab->getRemise());
        $livraisonCab->setDateremise($uatCommandefrscab->getDateremise());
        $livraisonCab->setMtremise($uatCommandefrscab->getMtremise());

        $livraisonCab->setCompteMasse($uatCommandefrscab->getCompteMasse());
        $livraisonCab->setCompteRubrique($uatCommandefrscab->getCompteRubrique());
        $livraisonCab->setComptePoste($uatCommandefrscab->getComptePoste());
        $livraisonCab->setCompte($uatCommandefrscab->getCompte());
        $livraisonCab->setProjet($uatCommandefrscab->getProjet());
        
        // $commande->setProjet($demande->getProjet());

        
        $livraisonCab->setUserCreated($this->getUser());

        if (in_array($uatCommandefrscab->getFournisseur()->getCategorie()->getK(), ['externe' , 'externe es'])) {
            $cat = 'E';
            $piceliv = $entityManager->getRepository(PPiece::class)->find(57);
// dd($piceliv);
        } elseif ($uatCommandefrscab->getFournisseur()->getCategorie()->getK() == 'interne') {
            $cat = 'I';
            $piceliv = $entityManager->getRepository(PPiece::class)->find(58);

        }
        // dd($piceliv->getId(),'simo');


        $livraisonCab->setPpiece($piceliv);
    
        $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCode($cat));
        $livraisonCab->setPositionActuel('creer');
        $livraisonCab->setIsAvoir(false);
        $livraisonCab->setActive(true);
        $livraisonCab->setMontantAcompte($montantAcompte);
        
        $entityManager->persist($livraisonCab);
        
        // dd( $livraisonCab);
        /* changer le statut au niveau de la table commande */
        $uatCommandefrscab->setStLiv('LD');
        $entityManager->persist($uatCommandefrscab);
        $entityManager->flush();
        
        // $test = $entityManager->getRepository(UaTLivraisonfrscab::class)->find($livraisonCab->getId());
        
        // dd($test);
        
        

        $dc = $this->appService->getDossierCourant();

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->findOneBy(['id' => $dc->getId()]);
        foreach ($uatCommandefrscab->getDetails() as $key => $commandeDetail) {
            $somme = 0;





            $resteQuantite = $data[$commandeDetail->getArticle()->getId()]['aLivrer'];


            if ($resteQuantite > 0) {
                $livraisonDet = new UaTLivraisonfrsdet();
                $livraisonDet->setArticle($commandeDetail->getArticle());
                $livraisonDet->setUnite($commandeDetail->getUnite());
                $livraisonDet->setQuantite(floatval($resteQuantite));
                $livraisonDet->setTva($commandeDetail->getTva());
                $livraisonDet->setObservation($commandeDetail->getObservation());
                $livraisonDet->setRemise($commandeDetail->getRemise());
                $livraisonDet->setPrixunitaire($commandeDetail->getPrixunitaire());
                $tva = ($commandeDetail->getTva() / 100) + 1;

                $livraisonDet->setCab($livraisonCab);
                $entityManager->persist($livraisonDet);



                // if ($livraisonDet->getArticle()->getGererEnStock()) {

                //     /* Mouvement stock  */
                //     $movementS = new UmouvementStock();
                //     $movementS->setArticle($livraisonDet->getArticle());
                //     $movementS->setDepot($livraisonDet->getArticle()->getDepot());
                //     $movementS->setUserCreated($this->getUser());
                //     $movementS->setPrixttc($livraisonDet->getPrixttc());
                //     $movementS->setPrixunitaire($livraisonDet->getPrixunitaire());
                //     $movementS->setRemise($livraiso nDet->getRemise());
                //     $movementS->setQuantite($livraisonDet->getQuantite());
                //     $movementS->setTva($livraisonDet->getTva());
                //     $now = date_create('now');

                //     $movementS->setCreated($now);
                //     $movementS->setDescription($livraisonDet->getObservation());
                //     //   $movementS->setCodeInventaire('code inventaire');
                //     $movementS->setSource('UAL');
                //     $movementS->setSourceId($livraisonDet->getCab()->getId());
                //     $movementS->setsourceCode($livraisonDet->getCab()->getCode());
                //     $movementS->setSourceAbreviation($livraisonDet->getCab()->getRefdocasso());
                //     $movementS->setDossier($dossier);

                //     $movementS->setAjoSup('1');
                //     $entityManager->persist($movementS);

                //     $antenne = $entityManager->getRepository('App:Uantenne')->findOneBy(
                //         array(
                //             'depot' => $livraisonDet->getArticle()->getDepot()->getId(),
                //             'defaut' => true
                //         )
                //     );
                //     $mouvementAntenne = new UmouvementAntenne();
                //     $mouvementAntenne->setArticle($livraisonDet->getArticle());
                //     $mouvementAntenne->setAntenne($antenne);
                //     $mouvementAntenne->setTypeMouvement($entityManager->getRepository('App:UmouvementType')->find(1));
                //     $mouvementAntenne->setAjoSup($livraisonDet->getQuantite());
                //     $mouvementAntenne->setUserCreated($this->getUser());
                //     $mouvementAntenne->setCreated(new \DateTime('now'));
                //     $entityManager->persist($mouvementAntenne);
                //     //     $movementS->setPrixttc($livraisonDet->getPrixttc());
                //     //     $movementS->setPrixunitaire($livraisonDet->getPrixunitaire());
                //     //     $movementS->setRemise($livraisonDet->getRemise());
                //     //     $movementS->setQuantite($livraisonDet->getQuantite());
                //     //     $movementS->setTva($livraisonDet->getTva());
                //     //     $now = date_create('now');

                //     //     $movementS->setCreated($now);
                //     //     $movementS->setDescription($livraisonDet->getObservation());
                //     //  //   $movementS->setCodeInventaire('code inventaire');
                //     //     $movementS->setSource('UAL');
                //     //     $movementS->setSourceId($livraisonDet->getCab()->getId());
                //     //     $movementS->setsourceCode($livraisonDet->getCab()->getCode());
                //     //     $movementS->setSourceAbreviation( $livraisonDet->getCab()->getRefdocasso());
                //     //     $movementS->setDossier($dossier);

                //     //     $movementS->setAjoSup('1');
                // }
            }
        }

        foreach ($acomptes as $key => $acompte) {
            $acompte = $this->getDoctrine()->getRepository(UATCommandefrscabAcompte::class)->find($key);

            //dump($acompte); die(); 
            $acompte->setReception($livraisonCab);
            $entityManager->persist($acompte);
        }


        if ($tp == 'COMMANDE') {
            $uatCommandefrscab->setPositionActuel('livrer');
        }




        $entityManager->persist($uatCommandefrscab);
        
        $demande = $uatCommandefrscab->getReferenceBci();
        if(count($demande->getCabs()) > 0) {
            foreach ($demande->getCabs() as $key => $cab) {
                foreach ($cab->getCommandes() as $key => $commande) {
                    if($commande->getPositionActuel() == "valider") {
                        $uatCommandefrscab = $commande;
                        $livraisonCab = new UaTLivraisonfrscab();
                        $livraisonCab->setCommande($uatCommandefrscab);
                        $livraisonCab->setDatedocasso(new \DateTime($request->request->get('dateDocAsso')));
                        $livraisonCab->setRefdocasso($request->request->get('refDocAsso'));
                        $livraisonCab->setDescription($uatCommandefrscab->getObservation());
                        $livraisonCab->setDossier($uatCommandefrscab->getDossier());
                        $livraisonCab->setPPiece($piceliv);
                        $livraisonCab->setDevise($uatCommandefrscab->getDevise());
                        $livraisonCab->setDatelivraison($uatCommandefrscab->getDatecommande());
                        $livraisonCab->setFournisseur($uatCommandefrscab->getFournisseur());
                        $livraisonCab->setRemise($uatCommandefrscab->getRemise());
                        $livraisonCab->setObservation($request->request->get('description'));
                        $livraisonCab->setFrs1($uatCommandefrscab->getFrs1());
                        $livraisonCab->setMtfrs1($uatCommandefrscab->getMtfrs1());
                        $livraisonCab->setFrs2($uatCommandefrscab->getFrs2());
                        $livraisonCab->setMtfrs2($uatCommandefrscab->getMtfrs2());
                        $livraisonCab->setPourCompte($uatCommandefrscab->getPourCompte());
                        $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'RCF', 'abreviation' => 'lvr_prt_rcf']);
                        $livraisonCab->setStatut($PStatutgrv);
                        $livraisonCab->setFrs1($uatCommandefrscab->getFrs1());
                        $livraisonCab->setMtfrs1($uatCommandefrscab->getMtfrs1());
                        $livraisonCab->setFrs2($uatCommandefrscab->getFrs2());
                        $livraisonCab->setMtfrs2($uatCommandefrscab->getMtfrs2());
                        $livraisonCab->setRemise($uatCommandefrscab->getRemise());
                        $livraisonCab->setDateremise($uatCommandefrscab->getDateremise());
                        $livraisonCab->setMtremise($uatCommandefrscab->getMtremise());

                        $livraisonCab->setCompteMasse($uatCommandefrscab->getCompteMasse());
                        $livraisonCab->setCompteRubrique($uatCommandefrscab->getCompteRubrique());
                        $livraisonCab->setComptePoste($uatCommandefrscab->getComptePoste());
                        $livraisonCab->setCompte($uatCommandefrscab->getCompte());
                        $livraisonCab->setUserCreated($this->getUser());

                        $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeDossier($uatCommandefrscab->getDossier(), "I"));
                        $livraisonCab->setPPiece($piceliv);
                        // dd($piceliv);

                        $livraisonCab->setPositionActuel('creer');
                        $livraisonCab->setIsAvoir(false);
                        $livraisonCab->setActive(true);
                        $livraisonCab->setMontantAcompte($montantAcompte);

                        $entityManager->persist($livraisonCab);

                        /* changer le statut au niveau de la table commande */
                        $entityManager->persist($livraisonCab);
                        $uatCommandefrscab->setStLiv('LD');
                        // $uatCommandefrscab->setPositionActuel('livrer');
                        if ($tp == 'COMMANDE') {
                            $uatCommandefrscab->setPositionActuel('livrer');
                        }
                        $entityManager->flush();
                        foreach ($uatCommandefrscab->getDetails() as $key => $commandeDetail) {   
                            $resteQuantite = $data[$commandeDetail->getArticle()->getId()]['aLivrer'];            
                            if ($resteQuantite > 0) {
                                $livraisonDet = new UaTLivraisonfrsdet();
                                $livraisonDet->setArticle($commandeDetail->getArticle());
                                $livraisonDet->setUnite($commandeDetail->getUnite());
                                $livraisonDet->setQuantite(floatval($resteQuantite));
                                $livraisonDet->setTva($commandeDetail->getTva());
                                $livraisonDet->setObservation($commandeDetail->getObservation());
                                $livraisonDet->setRemise($commandeDetail->getRemise());
                                $livraisonDet->setPrixunitaire($commandeDetail->getPrixunitaire());
                                $tva = ($commandeDetail->getTva() / 100) + 1;
                
                                $livraisonDet->setCab($livraisonCab);
                                $entityManager->persist($livraisonDet);
                            }
                        }
                    }
                }
                foreach ($cab->getDevis()->getCommandes() as $key => $commande) {
                    if($commande->getPositionActuel() == "valider") {
                        // dd($commande->getPositionActuel());
                        $livraisonCab = new UvLivraisoncab();
                        //dump($request->request->get('form')); 
                        $commande->setStLiv('L');
                        $livraisonCab->setCode($UvLivraisoncabRepository->GetLastCodeDossier($commande->getDossier(), "I"));
                        $livraisonCab->setCommande($commande);
                        $livraisonCab->setDatedocasso(new \DateTime($request->request->get('dateDocAsso')));
                        $livraisonCab->setRefdocasso($request->request->get('refDocAsso'));
                        
                        $livraisonCab->setDescription($request->request->get('description'));
                        // $livraisonCab->setRefdocasso($devis->getRefCommande());
                        $livraisonCab->setDossier($commande->getDossier());
                        // $livraisonCab->setDevise($devis->getDevise());
                        $livraisonCab->setDatelivraison($commande->getDatecommande());
                        $livraisonCab->setClient($commande->getClient());
                        $livraisonCab->setRemise($commande->getRemise());
                        $livraisonCab->setObservation($commande->getObservation());


                        // $livraisonCab->setReferenceBci($uatCommandefrscab->getReferenceBci());
                        $livraisonCab->setCompte($commande->getCompte());
                        $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'LVR', 'abreviation' => 'cr_lvr_cl']);
                        $livraisonCab->setStatut($PStatutgrv);

                        $livraisonCab->setRemise($commande->getRemise());
                        $livraisonCab->setDateremise($commande->getDateremise());
                        $livraisonCab->setMtremise($commande->getMtremise());
                        $livraisonCab->setDevise($commande->getDevise());
                        $livraisonCab->setCompteMasse($commande->getCompteMasse());
                        $livraisonCab->setCompteRubrique($commande->getCompteRubrique());
                        $livraisonCab->setComptePoste($commande->getComptePoste());
                        $livraisonCab->setCompte($commande->getCompte());
                        $livraisonCab->setUserCreated($this->getUser());
                        $livraisonCab->setActive(1);
                        $entityManager->persist($livraisonCab);
                        $entityManager->flush();

                        

                        // dd($commande->getDetails());
                        foreach ($commande->getDetails() as $key => $value) {
                            $resteQuantite = $data[$value->getArticle()->getId()]['aLivrer'];    
                            if ($resteQuantite > 0) {
                                $livraisonDet = new UvLivraisondet();
                                $livraisonDet->setArticle($value->getArticle());
                                $livraisonDet->setQuantite(floatval($resteQuantite));
                                $livraisonDet->setTva($value->getTva());
                                $livraisonDet->setObservation($value->getObservation());
                                $livraisonDet->setPrixunitaire($value->getPrixunitaire());
                                $livraisonDet->setUnite($value->getUnite());
                                $livraisonDet->setRemise($value->getRemise());
                                $livraisonDet->setCab($livraisonCab);

                                $entityManager->persist($livraisonDet);
                            }
                        }
                        if ($tp == 'COMMANDE') {
                            $commande->setPositionActuel('livrer');
                            
                        }
                    }
                }
            }
        }



        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La generation a ete bien effectue .']], 200);
    }

    /**
     * @Route("/{id}/delete", name="t_commandefrscab_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function commandefrscabDelete(Request $request, UATCommandefrscab $UATCommandefrscab): Response
    {
        //  if ($this->isCsrfTokenValid('delete' . $tAchatdemandeinternecab->getId(), $request->request->get('_token'))) {

        if ($request->isXmlHttpRequest()) {

            if ($UATCommandefrscab->getStatut()->getAbreviation() == 'tr_bcf') {

                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une demande dèja traite.']], 403);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $UATCommandefrscab->setIsdeleted(true);
            //   $entityManager->remove($UATCommandefrscab);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("/{id}/archiver", name="t_commandefrscab_archive", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function commandefrscabArchive(Request $request, UATCommandefrscab $UATCommandefrscab): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            if ($UATCommandefrscab->getStatut()->getAbreviation() == 'tr') {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'archiver une demande dèja traite.']], 403);
            }


            $UATCommandefrscab->setActive(false);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'archivage  a ete bien effectue .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/edit", name="t_commandefrscab_edit" ,  options={"expose"=true}  , methods={"GET","POST"})
     */
    public function edit(Request $request, UATCommandefrscab $uatCommandefrscab, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response
    {


        $UATCommandefrsdet = new UATCommandefrsdet();
        $errors = $validator->validate($UATCommandefrsdet);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }



        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');

        //  /* verifier le doit d'acces a cette operation */

        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_bc_fr',
        //      'operation' => '_edit',
        //      'dossier' => $dc->getPrefix()

        //  ]);

        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];



        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];



        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        //  $breadcrumbs->addRouteItem($uatCommandefrscab->getCode(), "t_commandefrscab_show", ['id' => $uatCommandefrscab->getId()]);
        //  $breadcrumbs->addItem('Modifier');

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_edit', [true, $uatCommandefrscab->getCode()]);

        $valider = 'No';
        if (isset($uatCommandefrscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }
        if ($valider == 'No') {
            $form = $this->createForm(UATCommandefrscabType::class, $uatCommandefrscab, array('dossier' => $dc));
            $form->handleRequest($request);

            $UATCommandefrsdet = new UATCommandefrsdet();
            $form_det = $this->createForm(UATCommandefrsdetType::class, $UATCommandefrsdet);
            $form_det->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $uatCommandefrscab->setUpdated(new \DateTime);
                $uatCommandefrscab->setFlag(2);
                $this->getDoctrine()->getManager()->flush();
                return $this->redirectToRoute('ua_t_commandefrscab_index');
            }

            return $this->render('module_achat/t_commandefrscab/edit.html.twig', [
                'commande' => $uatCommandefrscab,
                'form' => $form->createView(),
                'form_det' => $form_det->createView(),
                'operations' => $operations,
                'errors_detail' => $error,
                'nameDetail' => 'uat_commandefrsdet'
            ]);
            // return $this->render('page_error.html.twig');
        } else {
            $form = $this->createForm(UATCommandefrscabType::class, $uatCommandefrscab, array('dossier' => $dc));
            $form->handleRequest($request);

            $UATCommandefrsdet = new UATCommandefrsdet();
            $form_det = $this->createForm(UATCommandefrsdetType::class, $UATCommandefrsdet);
            $form_det->handleRequest($request);

            return $this->render('module_achat/t_commandefrscab/edit.html.twig', [
                'commande' => $uatCommandefrscab,
                'form' => $form->createView(),
                'form_det' => $form_det->createView(),
                'operations' => $operations,
                'errors_detail' => $error,
                'nameDetail' => 'uat_commandefrsdet'
            ]);
            //return new Response("Operation non autorie", 403);
            // return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/update", name="ua_t_commandefrscab_update", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, UATCommandefrscab $uatCommandefrscab): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());




        $form = $this->createForm(UATCommandefrscabType::class, $uatCommandefrscab, array('dossier' => $dossier));
        $form->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */

        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }
        if($uatCommandefrscab->getFlag() == 1) {
            $uatCommandefrscab->setFlag(2); // thats mean this commande get modified
        }

        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/insert/detail", name="ua_t_commandefrsdet_insert", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function Detsave(ValidatorInterface $validator, Request $request, $id, UarticleRepository $UarticleRepository): Response
    {

        /*
         * La creation du formulaire
         */
        $detail = json_decode($request->request->get('detail'))[0];

        if (isset($detail->id)) {
            $UATCommandefrsdet = $this->getDoctrine()->getRepository(UATCommandefrsdet::class)->find((int)$detail->id);
        } else {
            $UATCommandefrsdet = new UATCommandefrsdet();
        }
        $UATCommandefrsdet->setCab($this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($id));



        //dump($detail);
        //dump($tAchatdemandeinternedet);die();
        $UATCommandefrsdet->setArticle($UarticleRepository->find($detail->articleId));

        if ($detail->uniteId != "") {
            $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail->uniteId);
            $UATCommandefrsdet->setUnite($unite);
        }
        //                    $tAchatdemandeinternedet->setCategorie($uarticle->getCatArticle());
        //                    $tAchatdemandeinternedet->setArticle($uarticle);
        // $tAchatdemandeinternedet->setUnite($value->unite);
        $UATCommandefrsdet->setPrixunitaire($detail->prixunitaire);

        $UATCommandefrsdet->setQuantite($detail->quantite);

        $UATCommandefrsdet->setRemise($detail->remise ? $detail->remise : null);
        $UATCommandefrsdet->setTva($detail->tva);
        $UATCommandefrsdet->setObservation($detail->observation);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($UATCommandefrsdet);
        $entityManager->flush();

        return $this->json([
            'data' => "saved",
            'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
        ]);
    }

    /**
     * @Route("{id}/{token}/delete/detail", name="ua_t_commandefrsdet_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function deleteDetail(Request $request, UATCommandefrsdet $UATCommandefrsdet, $token): Response
    {

        if ($this->isCsrfTokenValid('delete' . $UATCommandefrsdet->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UATCommandefrsdet);
            $entityManager->flush();

            return $this->json([
                'data' => "deleted",
                'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }

    /**
     * @Route("/{id}/edit/detail", name="ua_t_commandefrsdet_edit_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function editDetail(Request $request, UATCommandefrsdet $UATCommandefrsdet): Response
    {
        // $UATCommandefrsdet = new UATCommandefrsdet();
        $form_det = $this->createForm(UATCommandefrsdetType::class, $UATCommandefrsdet);
        $form_det->handleRequest($request);

        return $this->render('module_achat/t_commandefrscab/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'UATCommandefrsdet' => $UATCommandefrsdet,
        ]);
    }

    /**
     * @Route("/{id}/update/detail", name="ua_t_commandefrsdet_update_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updateDetail(ValidatorInterface $validator, Request $request, UATCommandefrsdet $UATCommandefrsdet): Response
    {

        $form_det = $this->createForm(UATCommandefrsdetType::class, $UATCommandefrsdet);
        $form_det->handleRequest($request);
        //dump($form_det); die(); 

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form_det);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }


        $tva = ($UATCommandefrsdet->getTva() / 100) + 1;

        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/phpofficeExporter",name="phpofficeExporter" ,options={"expose"=true})
     */
    public function phpofficeExporter(ValidatorInterface $validator, Request $request, Connection $connection)
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        //dump($dc->getNomdossier());die();
        //$d = new \DateTime('now');
        $form = $this->createFormBuilder()
            ->add('dateDebut', DateType::class, ['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->add('dateFin', DateType::class, ['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            //die('ok');
            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $debut = $form->get('dateDebut')->getData();
            $fin = $form->get('dateFin')->getData();

            $dc = $this->session->get('dossierCourantUgouvAchat');
            $UATCommandefrscab = $connection->fetchAll("SELECT cab.id,cab.code,cab.refDocAsso,st.id 
                as statut_id,cab.dateDocAsso,cab.observation,part.nom 
                AS client,part.societe,cab.datecommande,cab.remise , 
                cab.mtremise,st.statut,st.couleur,MtTot, MtHt,MtTva, cab.st_liv 
                AS livraison, st_fac AS facturation,st_reg 
                AS Reglement,cdc , cdv , bec , bev 
                FROM ua_t_commandefrscab cab INNER JOIN
                (SELECT ua_t_commandefrscab_id ,SUM(quantite*prixunitaire) MtHt,
                SUM(quantite*prixunitaire*((tva/100))) MtTva ,
                SUM(quantite*prixunitaire*(1+(tva/100))) MtTot 
                FROM ua_t_commandefrsdet GROUP BY ua_t_commandefrscab_id ) det ON cab.id = ua_t_commandefrscab_id
                LEFT JOIN u_p_partenaire part ON part.id = cab.u_p_partenaire_id 
                LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
                WHERE cab.p_dossier_id = " . $dc->getId() . " and cab.datecommande BETWEEN  '" . $debut->format('Y-m-d') . "' and '" . $fin->format('Y-m-d') . "' ORDER BY cab.id DESC");

            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            $sheet->setCellValue('A7', 'Id');
            $sheet->setCellValue('B7', 'Code CMD');
            $sheet->setCellValue('C7', 'Date');
            $sheet->setCellValue('D7', 'Reference');
            $sheet->setCellValue('E7', 'Description');
            $sheet->setCellValue('F7', 'Fournisseur');
            $sheet->setCellValue('G7', 'Mt.Ht');
            $sheet->setCellValue('H7', 'Mt.Tva');
            $sheet->setCellValue('I7', 'Mt.Cmd');
            $sheet->setCellValue('J7', 'Statut');
            $sheet->setCellValue('K7', 'CDC');
            $sheet->setCellValue('L7', 'CDV');
            $sheet->setCellValue('M7', 'BR');
            $sheet->setCellValue('N7', 'FA');
            $sheet->setCellValue('O7', 'BEC');
            $sheet->setCellValue('P7', 'BEV');
            $sheet->setCellValue('Q7', 'RG');
            $sheet->setCellValue('R7', 'Affaire');

            $a = 8;
            $k = 1;
            foreach ($UATCommandefrscab as $key => $value) {
                # code...
                //dump($value);die();

                $sheet->setCellValue('A' . $a, $k);
                $sheet->setCellValue('B' . $a, $value['code']);
                $sheet->setCellValue('C' . $a, $value['datecommande']);
                $sheet->setCellValue('D' . $a, $value['refDocAsso']);
                $sheet->setCellValue('E' . $a, $value['observation']);
                $sheet->setCellValue('F' . $a, $value['societe']);
                $sheet->setCellValue('G' . $a, $value['MtHt']);
                $sheet->setCellValue('H' . $a, $value['MtTva']);
                $sheet->setCellValue('I' . $a, $value['MtTot']);
                $sheet->setCellValue('J' . $a, $value['statut']);
                $sheet->setCellValue('K' . $a, $value['cdc']);
                $sheet->setCellValue('L' . $a, $value['cdv']);
                $sheet->setCellValue('M' . $a, $value['livraison']);
                $sheet->setCellValue('N' . $a, $value['facturation']);
                $sheet->setCellValue('O' . $a, $value['bec']);
                $sheet->setCellValue('P' . $a, $value['bev']);
                $sheet->setCellValue('Q' . $a, $value['Reglement']);
                $sheet->setCellValue('R' . $a, 'Affaire');
                $a = $a + 1;
                $k = $k + 1;
            }

            $sheet->setCellValue('B1', '- Nom Modules : ');
            $sheet->setCellValue('C1', $mc->getTitre());
            $sheet->setCellValue('B2', '- Dossier : ');
            $sheet->setCellValue('C2', $dc->getNomdossier());
            $sheet->setCellValue('B3', '- Date d\'export : ');
            $sheet->setCellValue('C3', date('Y-m-d h:i'));
            $sheet->setCellValue('B4', '- Date debut : ');
            $sheet->setCellValue('C4', $debut->format('Y-m-d h:i'));
            $sheet->setCellValue('B5', '- Date fin : ');
            $sheet->setCellValue('C5', $fin->format('Y-m-d h:i'));
            $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(16);
            //$spreadsheet->getActiveSheet()->getColumnDimension('C')->setAutoSize(true);
            $styleB1 = $sheet->getStyle('B1');
            $styleFont = $styleB1->getFont();
            $styleFont->setBold(true);
            $styleB2 = $sheet->getStyle('B2');
            $styleFont = $styleB2->getFont();
            $styleFont->setBold(true);

            $styleB3 = $sheet->getStyle('B3');
            $styleFont = $styleB3->getFont();
            $styleFont->setBold(true);

            $styleB4 = $sheet->getStyle('B4');
            $styleFont = $styleB4->getFont();
            $styleFont->setBold(true);


            $styleB5 = $sheet->getStyle('B5');
            $styleFont = $styleB5->getFont();
            $styleFont->setBold(true);
            //$styleFont->setSize(12);
            $sheet->setTitle("My First Worksheet");
            $drawing = new \PhpOffice\PhpSpreadsheet\Worksheet\HeaderFooterDrawing();
            $drawing->setName('PhpSpreadsheet logo');
            $drawing->setPath('../public/img/Logo_UIASS.png');
            $drawing->setHeight(70);
            $drawing->setCoordinates('G1');
            $drawing->setOffsetX(5);
            //$drawing->setRotation(25);
            $drawing->setWorksheet($spreadsheet->getActiveSheet());
            $spreadsheet->getActiveSheet()->getHeaderFooter()->addImage($drawing, \PhpOffice\PhpSpreadsheet\Worksheet\HeaderFooter::IMAGE_HEADER_RIGHT);
            // Create your Office 2007 Excel (XLSX Format)
            $writer = new Xlsx($spreadsheet);

            // Create a Temporary file in the system
            $fileName = 'commande.xlsx';
            $temp_file = tempnam(sys_get_temp_dir(), $fileName);

            // Create the excel file in the tmp directory of the system
            $writer->save($temp_file);

            // Return the excel file as an attachment
            return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
        }
        return $this->render('ugouv/achat/t_commandefrscab/exporter.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="ua_t_commandefrscab_apply_transitions")
     */
    public function applyTransition(Request $request, UATCommandefrscab $commande)
    {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($commande);
        //  dump($transition);die();
        if ($workflow->can($commande, $transition)) {
            try {
                // $statut = $this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'sousModule' => $request->request->get('sous_module')]);
                // dump($statut); die(); 
                //   $commande->setStatut($statut);
                $commande->setUserUpdated($this->getUser());
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a encours */
                if (in_array($transition, ['apres_creer_encours', 'apres_valider_annuler'])) {
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'en_bcf']);

                    $commande->setStatut($PStatutgrv);
                    $commande->setUserEncours($this->getUser());
                    $commande->setDateEncours(new \DateTime());
                }

                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a creer */
                if (in_array($transition, ['apres_annuler_creer', 'apres_archiver_creer', 'apres_encours_creer'])) {
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'cr_bcf']);

                    $commande->setStatut($PStatutgrv);

                    $commande->setUserCreated($this->getUser());
                    $commande->setCreated(new \DateTime());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a annule */
                if (in_array($transition, ['apres_valider_creer'])) {

                    $commandes = array();
                    if (count($commande->getLivraisons()) > 0) {
                        foreach ($commande->getLivraisons() as $key => $value) {

                            $url = $this->generateUrl('ua_t_livraisonfrscab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }
                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de devalider , ce bon de commande fournisseur dispose deja de(s) reception(s)  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer ce(s) bon de(s) reception(s) "
                        ]]);
                    }
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'an_bcf']);
                    $commande->setStatut($PStatutgrv);
                    $commande->setDateAnnuler(new \DateTime());
                    $commande->setUserAnnuler($this->getUser());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a archive */
                if (in_array($transition, ['apres_annuler_archiver'])) {
                    //  $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'an_bcf']);

                    $commande->setActive(0);
                    $commande->setDateArchiver(new \DateTime());
                    $commande->setUserArchiver($this->getUser());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a valide */
                $valide = 0;
                if (in_array($transition, ['apres_encours_valider'])) {
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'va_bcf']);
                    $valide = 1;
                    $commande->setStatut($PStatutgrv);
                    $commande->setDateValider(new \DateTime());
                    $commande->setUserValider($this->getUser());
                }


                if ($valide == 1) {
                    $workflow->apply($commande, $transition);
                    $this->get('doctrine')->getManager()->flush();
                    return $this->json(['code' => 201, 'id' => $commande->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                }

                if (in_array($transition, ['apres_valider_encours'])) {
                    $commandes = array();
                    if (count($commande->getLivraisons()) > 0) {
                        foreach ($commande->getLivraisons() as $key => $value) {

                            $url = $this->generateUrl('ua_t_livraisonfrscab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }




                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de passer a l'etat encours , 
                                                   ce bon de commande fournisseur dispose deja de(s) reception(s)  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer ce(s) bon de(s) reception(s) "
                        ]]);
                    }
                }

                /*  if (in_array($transition, ['apres_creer_valider'])) {
                 
                    if (!$commande->getType()) {
                    




                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "vous devez mentionner le type de commande pour effectuer cette opération
                                        
                                       " 
                        ]]);
                    }
                }*/

                $workflow->apply($commande, $transition);
                $this->get('doctrine')->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**

     * @Route("/{id}/show/articles", name="ua_t_commandefrscab_articles_show", options={"expose"=true}, methods={"GET"})

     */
    public function showArticles(Request $request, Breadcrumbs $breadcrumbs, UATCommandefrscab $commande): Response
    {
        /* navigation  */
        /*  $breadcrumbs->prependRouteItem("Applications", "app");
          $breadcrumbs->addRouteItem($this->session->get('modules')['_achat']['abreviation'], "module_achat_index");
          $breadcrumbs->addRouteItem($this->session->get('modules')['_achat']['dossiers']['_default_achat']['sousModules']['_ex_be']['titre'], "t_achatdemandeinternecab_index");
          $breadcrumbs->addRouteItem($demande->getCode(), "t_achatdemandeinternecab_show", ["id" => $demande->getId()]);
          $breadcrumbs->addItem('Articles'); */

        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];

        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        $breadcrumbs->addRouteItem($commande->getCode(), "t_commandefrscab_show", ['id' => $commande->getId()]);
        $breadcrumbs->addItem('Article');

        $valider = 'No';
        if (isset($commande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }
        return $this->render('ugouv/achat/t_commandefrscab/show_articles.html.twig', [
            'commande' => $commande,
            'valider' => $valider
        ]);
    }

    /**
     * @Route("/{id}/show/historique", name="ua_t_commandefrscab_show_historique", options={"expose"=true}, methods={"GET"})
     */
    public function showhistorique(Request $request, UATCommandefrscab $commande): Response
    {

        return $this->render('module_achat/t_commandefrscab/show_historique.html.twig', [
            'commande' => $commande,
            'historiques' => $this->getHistorique($commande)
        ]);
    }

    /**
     * @Route("/{id}/fichier", name="ua_t_commandefrscab_fichiers", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fichier(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UATCommandefrscab $commande): Response
    {

        // $mc = $this->session->get('moduleCourantUgouvAchat');
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        // $modules = $this->session->get('modules');


        // /* verifier le doit d'acces a cette operation */

        // $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_ugouv_achat',
        //     'sousModule' => '_bc_fr',
        //     'operation' => '_fichiers',
        //     'dossier' => $dc->getPrefix()

        // ]);

        // /* operations autorises pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];



        // /* sous module courant */
        // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];

        // /* navigation  */
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        // $breadcrumbs->addRouteItem($commande->getCode(), "t_commandefrscab_show", ['id' => $commande->getId()]);

        // $breadcrumbs->addItem('Fichiers');
        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_fichiers',  [true, $commande->getCode()]);


        /**
         * verifier s'il s'ajit de ajax request
         */
        $fichier = new UATCommandefrscabFichier();
        $form = $this->createFormBuilder($fichier)
            ->add('imageFile', VichFileType::class, ['constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $entityManager = $this->getDoctrine()->getManager();

            $fichier->setUserCreated($this->getUser());
            $fichier->setComande($commande);
            $fichier->setOriginalName($fichier->getImageFile()->getClientOriginalName());
            $fichier->setMimeType($fichier->getImageFile()->getClientMimeType());
            $entityManager->persist($fichier);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }


        $valider = 'No';
        if (isset($commande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }

        return $this->render('module_achat/t_commandefrscab/fichiers.html.twig', [
            'commande' => $commande,
            'form' => $form->createView(),
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/show/suivi", name="ua_t_commandefrscab_suivi_show", options={"expose"=true},  methods={"GET","POST"})
     */
    public function showsuivi1(Request $request, Breadcrumbs $breadcrumbs, UATCommandefrscab $commande): Response
    {


        //   $mc = $this->session->get('moduleCourantUgouvAchat');
        //   $dc = $this->session->get('dossierCourantUgouvAchat');
        //   $modules = $this->session->get('modules');

        //   /* verifier le doit d'acces a cette operation */

        //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //       'module' => '_ugouv_achat',
        //       'sousModule' => '_bc_fr',
        //       'operation' => '_suivi',
        //       'dossier' => $dc->getPrefix()

        //   ]);

        //   /* operations autorises pour cet utilisateur */
        //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];



        //   /* sous module courant */
        //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];

        //   /* navigation  */
        //   $breadcrumbs->prependRouteItem("Applications", "app");
        //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //   $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        //   $breadcrumbs->addRouteItem($commande->getCode(), "t_commandefrscab_show", ['id' => $commande->getId()]);
        //   $breadcrumbs->addItem('Suivi des operations');
        // $dc =$this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_fichiers', [true, $commande->getCode()]);


        $valider = 'No';
        if (isset($commande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }

        return $this->render('module_achat/t_commandefrscab/show_suivi.html.twig', [
            'commande' => $commande,
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/deletefichier", name="ua_t_commandefrscab_fichiers_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteFichier(Request $request, $id): Response
    {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $fichier = $this->getDoctrine()->getRepository(UATCommandefrscabFichier::class)->find($id);

            $entityManager->remove($fichier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**

     * @Route("/{id}/facture/", name="ua_t_commandefrscab_facture_show", options={"expose"=true},methods={"GET","POST"})

     */
    public function showFacture(ValidatorInterface $validator, Request $request, Breadcrumbs $breadcrumbs, UATCommandefrscab $commande, UaTReglementfrscabRepository $rep, UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {
        /* navigation  */
        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];

        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        $breadcrumbs->addItem($commande->getCode());
        $breadcrumbs->addItem('Facture');

        //   $livraison = $this->getDoctrine()->getRepository(UATLivraisonfrscab::class)->findOneBy(['commande' => $commande]);
        // $facture = $this->getDoctrine()->getRepository(UATFacturefrscab::class)->findOneBy(['livraison' => $livraison]);
        //   $mttc = $rep->GetMtTtc($facture);
        $facture = new UaTFacturefrscab();
        $form = $this->createFormBuilder($facture)
            //                    ->add('fournisseur', EntityType::class, [
            //                        'class' => UPPartenaire::class,
            //                        'query_builder' => function (EntityRepository $er) {
            //                            return $er->createQueryBuilder('a')
            //                                    ->innerJoin('a.type', 't')
            //                                    ->where('t.abreviation = :type')
            //                                    ->setParameter('type', 'fourn')
            //                                    ->orderBy('a.societe', 'ASC');
            //                        },
            //                        'choice_label' => 'societe',
            //                        'placeholder' => 'Choix fournisseur',
            //                        'constraints' => [new NotBlank()]
            //                    ])
            ->add('refDocAsso', TextType::class, ['mapped' => false, 'constraints' => [new NotBlank()]])
            ->add('dateDocAsso', DateType::class, ['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->add('livraisonFacture', EntityType::class, [
                'class' => UaTLivraisonfrscab::class,
                //'constraints' => [new NotBlank()],
                'query_builder' => function (EntityRepository $er) use ($commande) {
                    return $er->createQueryBuilder('a')
                        ->where("a.commande=:com ")
                        ->setParameter('com', $commande)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'refDocAsso',
                'placeholder' => 'Choix Livraison',
                'multiple' => true,
            ])
            ->getForm();
        $form->handleRequest($request);



        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }


            if (isset($request->request->get('form')['livraisonFacture']) == false) {

                //  return $this->json(['code' => 403, 'errors' => 'non autorise '], 403); 
                return $this->json(['code' => 403, 'message' => ['title' => 'Validation Failed', 'text' => 'veuillez ch ..']], 403);
                // die;
            }
            $em = $this->getDoctrine()->getManager();
            $facture = new UaTFacturefrscab();


            $UaTLivraisonfrscab = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->findOneBy(['id' => $request->request->get('form')['livraisonFacture'][0]]);

            //  dump($UaTFacturefrscabRepository->GetLastCode());
            //  die;
            $facture->setCode($UaTFacturefrscabRepository->GetLastCode());

            $facture->setRefdocasso($request->request->get('form')['refDocAsso']);
            $facture->setDatedocasso(new \DateTime($request->request->get('form')['dateDocAsso']));
            $facture->setReferenceBci($UaTLivraisonfrscab->getReferenceBci());
            $facture->setObservation($UaTLivraisonfrscab->getObservation());
            $facture->setDossier($UaTLivraisonfrscab->getDossier());
            $facture->setCompteMasse($UaTLivraisonfrscab->getCompteMasse());
            $facture->setCompteRubrique($UaTLivraisonfrscab->getCompteRubrique());
            $facture->setComptePoste($UaTLivraisonfrscab->getComptePoste());
            $facture->setCompte($UaTLivraisonfrscab->getCompte());
            $facture->setFournisseur($UaTLivraisonfrscab->getFournisseur());
            $facture->setDevise($UaTLivraisonfrscab->getDevise());
            $facture->setPourCompte($UaTLivraisonfrscab->getPourCompte());

            $facture->setFrs1($UaTLivraisonfrscab->getFrs1());
            $facture->setMtfrs1($UaTLivraisonfrscab->getMtfrs1());
            $facture->setFrs2($UaTLivraisonfrscab->getFrs2());
            $facture->setMtfrs2($UaTLivraisonfrscab->getMtfrs2());
            $facture->setRemise($UaTLivraisonfrscab->getRemise());
            $facture->setDateremise($UaTLivraisonfrscab->getDateremise());
            $facture->setMtremise($UaTLivraisonfrscab->getMtremise());
            $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'cr_faf']);
            $facture->setPStatutgrv($PStatutgrv);
            $facture->setUserCreated($this->getUser());
            $facture->setActive(true);





            for ($i = 0; count($request->request->get('form')['livraisonFacture']) > $i; $i++) {
                $UaTLivraisonfrscab1 = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->findOneBy(['id' => $request->request->get('form')['livraisonFacture'][$i]]);
                $facture->addLivraisonFacture($UaTLivraisonfrscab1);
                /* changement le statut de facture de la table commande */
                $UaTLivraisonfrscab1->getCommande()->setStFac('FD');
                $UaTLivraisonfrscab1->setStFac('FD');
                $em->persist($UaTLivraisonfrscab1);

                $em->persist($facture);
                $em->flush();
                foreach ($UaTLivraisonfrscab1->getDetails() as $key => $value) {
                    $factureDetail = new UaTFacturefrsdet();
                    $detail = $this->getDoctrine()->getRepository(UaTFacturefrsdet::class)->findOneBy(['article' => $value->getArticle(), 'idFaccab' => $facture]);
                    if ($detail) {


                        $detail->setQuantite($value->getQuantite() + $detail->getQuantite());


                        $em->persist($detail);
                        $em->flush();
                    } else {
                        $factureDetail->setIdFaccab($facture);
                        $factureDetail->setArticle($value->getArticle());
                        $factureDetail->setQuantite($value->getQuantite());
                        $factureDetail->setPrixunitaire($value->getPrixunitaire());

                        $factureDetail->setTva($value->getTva());
                        $factureDetail->setObservation($value->getObservation());
                        $em->persist($factureDetail);
                        $em->flush();
                    }
                }
            }








            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }

        return $this->render('ugouv/achat/t_commandefrscab/show_facture.html.twig', [
            'commande' => $commande,
            'form' => $form->createView(),
            // 'mttc' => $mttc["MtTtc"] - $facture->getMtremise(),
        ]);
    }

    /**
     * @Route("/{id}/documents", name="ua_t_commandefrscab_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(Breadcrumbs $breadcrumbs, UATCommandefrscab $commande): Response
    {
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');


        //  /* verifier le doit d'acces a cette operation */

        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_bc_fr',
        //      'operation' => '_documents',
        //      'dossier' => $dc->getPrefix()

        //  ]);

        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr']['operations'];

        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_bc_fr'];

        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_commandefrscab_index");
        //  $breadcrumbs->addRouteItem($commande->getCode(), "t_commandefrscab_show", ['id' => $commande->getId()]);

        //  $breadcrumbs->addItem('Docs/Impression');

        //  $dc =$this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_documents',  [true, $commande->getCode()]);

        return $this->render('module_achat/t_commandefrscab/documents.html.twig', [
            'commande' => $commande,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/document/pdf", name="t_commandefrscab_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function commandepdf(UATCommandefrscab $uatCommandefrscab)
    {

        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);
        
     
        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);



        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $uatCommandefrscab->getDossier()->getLogo()) && $uatCommandefrscab->getDossier()->getLogo() != null ? $urlFichierAchat . $uatCommandefrscab->getDossier()->getLogo() : "img/default/default-logo.png";

        $totalArticles = $uatCommandefrscab->getArrayTotalArticleByCommande($uatCommandefrscab);

        $devise = $uatCommandefrscab->getdevise()->getCode();

        // dd($devise);
        // $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise->getCode());

        // $obj = new nuts($totalArticles['totalTtc'], $devise);
        // $nb = $obj->getFormated(" ", ",");
        // $text = $obj->convert("fr-FR");
        $moins = 'moins ';

        if ($totalArticles['totalTtcSansDevis'] > 0) {
            $tot = $totalArticles['totalTtcSansDevis'];
            $obj = new nuts($tot, $devise);
            $nb = $obj->getFormated(" ", ",");
            $text = $obj->convert("fr-FR");
        } else {
            // dd($totalArticles['totalTtcSansDevis']);
            $tot = $totalArticles['totalTtcSansDevis'] * -1;

            $obj = new nuts($tot, $devise);
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }
       
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $uatCommandefrscab, 'postion' => 1, 'tableName' => 3]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $uatCommandefrscab, 'postion' => 2, 'tableName' => 3]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $uatCommandefrscab, 'postion' => 3, 'tableName' => 3]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $uatCommandefrscab, 'postion' => 4, 'tableName' => 3]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($uatCommandefrscab->getCode(), $generator::TYPE_CODE_128,1,30);
        //"barcode" => $barcode,
        $html = $this->renderView('module_achat/t_commandefrscab/pdf/document.html.twig', [
            'image' => $image,
            'cab' => $uatCommandefrscab,
            "ht" => $totalArticles['prixHt'],
            "ttc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
            "ttcTxt" => $text,
            "signature1" => $signature1,
            "signature2" => $signature2, 
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,
            
        ]);

        ob_get_clean();

        //        $html = $this->renderView('ugouv/achat/t_commandefrscab/pdf/document.html.twig', [
        // 
        //            'cab' => $uatCommandefrscab,
        //         
        //        ]);
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);
        $date = new DateTime('now');

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');
        $font = $dompdf->getFontMetrics()->get_font("Courier");

        // Render the HTML as PDF
        $dompdf->render();
        $dompdf->getCanvas()->page_text(562, 820, "{PAGE_NUM} of {PAGE_COUNT}", $font, 6, array(0.565, 0.565, 0.565));
        $dompdf->getCanvas()->page_text(10, 820, $date->format('d/m/y'), $font, 6, array(0.565, 0.565, 0.565));

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Bon de commande.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/document2/pdf", name="t_commandefrscab_document2_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function commande2pdf(UATCommandefrscab $uatCommandefrscab)
    {

        $em = $this->getDoctrine()->getManager()->getConnection();
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);



        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $uatCommandefrscab->getDossier()->getLogo()) && $uatCommandefrscab->getDossier()->getLogo() != null ? $urlFichierAchat . $uatCommandefrscab->getDossier()->getLogo() : "img/default/default-logo.png";

        $totalArticles = $uatCommandefrscab->getArrayTotalArticleByCommande($uatCommandefrscab);

        //    dump($uatCommandefrscab);
        //     die();


        // $floatNumber = number_format($totalArticles['totalTtc'], 2, ',', ' ');
        $totalArticles = $uatCommandefrscab->getArrayTotalArticleByCommande($uatCommandefrscab);

        $devise = $uatCommandefrscab->getdevise()->getCode();

        // dd($devise);
        // $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise->getCode());

        // $obj = new nuts($totalArticles['totalTtc'], $devise);
        // $nb = $obj->getFormated(" ", ",");
        // $text = $obj->convert("fr-FR");
        $moins = 'moins ';

        if ($totalArticles['totalTtcSansDevis'] > 0) {
            $tot = $totalArticles['totalTtcSansDevis'];
            $obj = new nuts($tot, $devise);
            $nb = $obj->getFormated(" ", ",");
            $text = $obj->convert("fr-FR");
        } else {
            // dd($totalArticles['totalTtcSansDevis']);
            $tot = $totalArticles['totalTtcSansDevis'] * -1;

            $obj = new nuts($tot, $devise);
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }
        $uaTechniqueCab = $this->getDoctrine()->getRepository(UaTechniqueCab::class)->findAll();
        $tAchatdemandeinternecab =  $uatCommandefrscab->getReferenceBci();
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $uatCommandefrscab, 'postion' => 1, 'tableName' => 3]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $uatCommandefrscab, 'postion' => 2, 'tableName' => 3]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $uatCommandefrscab, 'postion' => 3, 'tableName' => 3]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $uatCommandefrscab, 'postion' => 4, 'tableName' => 3]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($uatCommandefrscab->getCode(), $generator::TYPE_CODE_128,1,30);
        //"barcode" => $barcode,
        //dd($uatCommandefrscab);
        $html = $this->renderView('module_achat/t_commandefrscab/pdf/document2.html.twig', [
            'image' => $image,
            'cab' => $uatCommandefrscab,
            'CabAchat' =>  $tAchatdemandeinternecab,
            "ht" => $totalArticles['prixHt'],
            "ttc" => $totalArticles['prixTtc'],
            "UAdt" => $uaTechniqueCab,
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
            "ttcTxt" => $text,
            "signature1" => $signature1,
            "signature2" => $signature2, 
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,
        ]);

        ob_get_clean();

        //        $html = $this->renderView('ugouv/achat/t_commandefrscab/pdf/document.html.twig', [
        // 
        //            'cab' => $uatCommandefrscab,
        //         
        //        ]);
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);
        $date = new DateTime('now');

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');
        $font = $dompdf->getFontMetrics()->get_font("Courier");

        // Render the HTML as PDF
        $dompdf->render();
        $dompdf->getCanvas()->page_text(562, 820, "{PAGE_NUM} of {PAGE_COUNT}", $font, 6, array(0.565, 0.565, 0.565));
        $dompdf->getCanvas()->page_text(10, 820, $date->format('d/m/y'), $font, 6, array(0.565, 0.565, 0.565));

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Bon de commande.pdf", [
            "Attachment" => false
        ]);
    }


    /**
     * @Route("{id}/{token}/delete", name="ua_t_commandefrscab_delete_acompte",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteAcompte(Request $request, UATCommandefrscabAcompte $acompte, $token): Response
    {
        if ($this->isCsrfTokenValid('delete' . $acompte->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();


                if (!empty($acompte)) {
                    if (empty($acompte->getFacture()) && empty($acompte->getReception())) {
                        $entityManager->remove($acompte);
                    } else {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'impossible de supprimer un acompte lie a une facture ou une livraison.']], 200);
                    }
                }
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Donnees Incorrect']]);
        }
    }




    /**
     * @Route("/{id}/{token}/commande/delete", name="ua_t_commandefrscab_delete_commande",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteCommande(Request $request, UATCommandefrscab $commande, $token): Response
    {

        try {
            $entityManager = $this->getDoctrine()->getManager();
            //   
            if (!empty($commande)) {


                if (count($commande->getLivraisons()) > 0) {

                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une commande lie avec un bon de Reception.']], 403);
                }

                $entityManager->remove($commande);

                // dump();
                //die;



            }
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } catch (ForeignKeyConstraintViolationException $e) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise)']]);
        }
    }





    /**
     * @Route("/changeDossierPopup", name="change_dossier_popup", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function changerDossierPopup(ValidatorInterface $validator, Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $dossiers = $this->appService->getDossiers();

            //
            foreach ($dossiers as $val) {
                $id[] = $val['id'];
            }
            //dump($id);die();
            $form = $this->createFormBuilder()
                ->add('dossier', EntityType::class, [
                    'class' => PDossier::class,
                    'query_builder' => function (EntityRepository $er) use ($id) {
                        //$dc = $this->appService->getDossierCourant();
                        return $er->createQueryBuilder('a')
                            ->where("a.id IN (:dossier) and a.active = 1")
                            //->where("")
                            //->setParameter('piece', $piece)
                            ->setParameter('dossier', $id);
                    },
                    'placeholder' => 'Choix dossier',
                    'choice_label' => 'abreviation',
                    'constraints' => [
                        new NotBlank()
                    ]
                ])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $id = explode(",", $request->request->get("data"));
                $entityManager = $this->getDoctrine()->getManager();
                foreach ($id as $key => $value) {
                    $UATCommandefrscab = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value);
                    if (count($UATCommandefrscab->getLivraisons()) > 0) {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La commande ' . $UATCommandefrscab->getCode() . ' contient deja une reception (s).']], 200);
                    }
                    if ($UATCommandefrscab->getReferenceBci()) {
                        $UATCommandefrscab->getReferenceBci()->setDossier($form->getData()['dossier']);
                    }


                    $UATCommandefrscab->setDossier($form->getData()['dossier']);
                    $entityManager->persist($UATCommandefrscab);
                }

                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'Le dossier a ete bien change .'], 'data' => "bien"], 200);
            }
            return $this->render('module_achat/t_commandefrscab/change.dossier.popup.html.twig', [
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }


    /**
     * @Route("/commandedeletecab/delete/hgh", name="ua_t_commandefrscab_commande_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteCabCommande(Request $request, UATCommandefrscabRepository $UATCommandefrscabRepository): Response
    {
        // dump(1);die;
        if ($request->isXmlHttpRequest()) {
            try {
                $entityManager = $this->getDoctrine()->getManager();

                $UATCommandefrscabS = $UATCommandefrscabRepository->findBy(['id' => $request->request->get('_array_ids')]);
                if (!empty($UATCommandefrscabS)) {
                    foreach ($UATCommandefrscabS as $key => $commande) {

                        if (count($commande->getLivraisons()) > 0) {

                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une commande lie avec un bon de Reception.']], 403);
                        }

                        if (count($commande->getFichiers()) > 0) {

                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 200);
                        }
                    }
                    foreach ($UATCommandefrscabS as $key => $commande) {
                        $commande->setIsdeleted(true);
                        // $entityManager->remove($commande);
                    }
                }
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']]);
        }
    }


    /**
     * @Route("/desactiver", name="ua_t_commandefrscab_desactiver", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function DesactiverCommande(ValidatorInterface $validator, Request $request): Response
    {

        //dump($request->request->get('_array_ids'));die();
        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $dossiers = $this->appService->getDossiers();

            //
            foreach ($dossiers as $val) {
                $id[] = $val['id'];
            }







            $id =  $request->request->get('_array_ids');
            $entityManager = $this->getDoctrine()->getManager();
            // dump( $id );
            //die;
            foreach ($id as $key => $value) {
                $commande = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value);

                if (count($commande->getLivraisons()) > 0) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La commande ' . $commande->getCode() . ' contient deja une livraison .']], 200);
                }
            }
            foreach ($id as $key => $value) {
                $commande = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value);

                if (count($commande->getLivraisons()) > 0) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le pre-commande ' . $commande->getCode() . ' contient deja une commande .']], 200);
                }

                $commande->setActive(false);
                $commande->setFlag(4);
                $entityManager->persist($commande);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La desactivation a ete bien effectue  .'], 'data' => "bien"], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }




    /**
     * @Route("/cloturer", name="ua_t_commandefrscab_cloturer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function cloturerCommande(ValidatorInterface $validator, Request $request): Response
    {

        //dump($request->request->get('_array_ids'));die();
        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $dossiers = $this->appService->getDossiers();

            //
            foreach ($dossiers as $val) {
                $id[] = $val['id'];
            }







            $id =  $request->request->get('_array_ids');
            $entityManager = $this->getDoctrine()->getManager();
            // dump( $id );
            //die;

            foreach ($id as $key => $value) {
                $commande = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value);



                $commande->setPositionActuel('cloturer');
                $entityManager->persist($commande);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La desactivation a ete bien effectue  .'], 'data' => "bien"], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/avance", name="ua_t_commandefrscab_avance", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function avanceCommande(ValidatorInterface $validator, Request $request, UGeneralOperationRepository $UGeneralOperationRepository): Response
    {

        // dd($request);
        if(empty($request->get('avance_compte'))  or empty($request->get('montant_avance'))) {
            return $this->json(['code' => 403, 'errors' => 'Veuillez remplir tout les champs '], 403);
        }
        $entityManager = $this->getDoctrine()->getManager();

        $commande = $entityManager->getRepository(UATCommandefrscab::class)->find($request->get('id'));
        $piece = $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'AV']);
        $avance = new Avance();
        $avance->setCommande($commande->getId());
        $avance->setMontant($request->get('montant_avance'));
        $avance->setType('achat');
        $entityManager->persist($avance);

        $opration = new UGeneralOperation();
        $opration->setActive(true);
        $opration->setAvance($avance);
        $opration->setFournisseur($commande->getFournisseur());
        // $opration->getClient($commande->getClient());
       
        $opration->setPPiece(
            $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'AVNC'])
        );
        $opration->setDossier($commande->getDossier());
        $opration->setUserCreated($this->getUser());
        $opration->setMontant($request->get('montant_avance'));
        $opration->setCompte(
            $entityManager->getRepository(PCompteBanque::class)->find($request->get('avance_compte'))
        );
        $opration->setPCompte($opration->getCompte());
        $opration->setSens(-1);
        $opration->setMontantFinal($opration->getSens() * $opration->getMontant());
        $opration->setCode($UGeneralOperationRepository->GetLastCodeByPieceByDossier($commande->getDossier(), $piece->getId()));
        $entityManager->persist($opration);

        $entityManager->flush();

        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'Bien enregistre  .'], 'data' => "bien"], 200);
        
    }








    /**
     * @Route("/{id}/document/old_sys", name="ua_t_commandefrscab_document_old_sys", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(UATCommandefrscab $cab, Breadcrumbs $breadcrumbs)
    {



        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $cab->getDossier()->getLogo()) && $cab->getDossier()->getLogo() != null ? $urlFichierAchat . $cab->getDossier()->getLogo() : "img/default/default-logo.png";

        $totalArticles = $cab->getArrayTotalArticleByCommande($cab);

        //dump($totalArticles);
        //die();

        $articleold = $this->getDoctrine()->getRepository(ArticleOld::class)->findBy(['src' => '_ach_commande', 'code' => $cab->getCode()]);
        // $obj = new nuts($totalArticles['totalTtc'], "MAD");
        // $nb = $obj->getFormated(" ", ",");
        // $text = $obj->convert("fr-FR");
        // $object = new nuts($totalArticles['totalTtc'], "MAD");
        // $nb = $object->getFormated(" ", ",");
        // $text = $object->convert("fr-FR");
        $moins = 'moins ';

        if ($totalArticles['totalTtcSansDevis'] > 0) {
            $tot = $totalArticles['totalTtcSansDevis'];
            $obj = new nuts($tot,  "MAD");
            $nb = $obj->getFormated(" ", ",");
            $text = $obj->convert("fr-FR");
        } else {
            // dd($totalArticles['totalTtcSansDevis']);
            $tot = $totalArticles['totalTtcSansDevis'] * -1;

            $obj = new nuts($tot,  "MAD");
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }

        $html = $this->renderView('module_achat/t_commandefrscab/pdf/document_old_sys.html.twig', [
            'image' => $image,
            'cab' => $cab,
            'sans' => 0,
            "ht" => $totalArticles['prixHt'],
            "ttcc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
            'details' => $articleold,
            'totaltext' => $text
        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }



    /**
     * @Route("/edit/detail/new", name="ua_t_commandefrscab_edit_detail_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function newDetail(Request $request, UarticleRepository $UarticleRepository): Response
    {

        $detail = $request->request->get('detail');

        $UATCommandefrsdet = new UATCommandefrsdet();
        $UATCommandefrsdet->setArticle($UarticleRepository->find($detail['articleId']));
        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail['uniteId']);
        $UATCommandefrsdet->setUnite($unite);
        $UATCommandefrsdet->setPrixunitaire($detail['prixunitaire']);
        $UATCommandefrsdet->setQuantite($detail['quantite']);
        $UATCommandefrsdet->setRemise($detail['remise'] ? $detail['remise'] : null);
        $UATCommandefrsdet->setTva($detail['tva']);
        $UATCommandefrsdet->setObservation($detail['observation']);
        //dump($TAchatdemandeinternedet);die();
        $form_det = $this->createForm(UATCommandefrsdetType::class, $UATCommandefrsdet);
        $form_det->handleRequest($request);

        return $this->render('module_achat/t_commandefrscab/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'tAchatdemandeinternedet' => $UATCommandefrsdet,
        ]);
    }



    /**
     * @Route("/fusionnementcmd", name="commande_generer_fusionnement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function Fusionnement(ValidatorInterface $validator, Request $request, UATCommandefrscabRepository $UATCommandefrscabRepository): Response
    {

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {




            $exist_commande_errors = $commande_valide_errors = null;
            foreach ($request->request->get('_array_ids') as $key => $value) {
                $CommandeCompare = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($request->request->get('_array_ids')[0]);

                $commande = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value);

                if (count($commande->getLivraisons()) > 0) {
                    $exist_commande_errors .= $commande->getCode() . "<br/>";
                }
                if ($CommandeCompare->getFournisseur() != $commande->getFournisseur()) {
                    $commande_valide_errors .= $commande->getFournisseur()->getNom() . "<br/>";
                }
            }
            if (!empty($commande_valide_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas fusionner plusieurs Bon Commande de different Fournisseur , Fournisseur(s) : <br/>' . $CommandeCompare->getFournisseur()->getSociete() . '<br/>' . $commande_valide_errors]], 200);
            }

            if (!empty($exist_commande_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas fusionner ces Bon Commande , Commande(s) : <br/>' . $exist_commande_errors . 'dèja commande(s) .']], 200);
            }

            $commande = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($request->request->get('_array_ids')[0]);

            $commandeFus = new UATCommandefrscab();

            // dd($commandeFus);

            $em = $this->getDoctrine()->getManager();

            //$devisFus->setDatedocasso($devis->getDatedocasso());
            //$devisFus->setRefdocasso($devis->getRefdocasso());
            $commandeFus->setDateCommande($commande->getDateCommande());
            $commandeFus->setObservation($commande->getObservation());
            $commandeFus->setDatecommande($commande->getDatecommande());
            $commandeFus->setRefdocasso($commande->getRefdocasso());
            $commandeFus->setReferenceBci($commande->getReferenceBci());
            $commandeFus->setDossier($commande->getDossier());
            $commandeFus->setFournisseur($commande->getFournisseur());
            $commandeFus->setRemise($commande->getRemise());
            $commandeFus->setCompte($commande->getCompte());
            $commandeFus->setRemise($commande->getRemise());
            $commandeFus->setDateremise($commande->getDateremise());
            $commandeFus->setMtremise($commande->getMtremise());
            $commandeFus->setDevise($commande->getDevise());

            $commandeFus->setCompteMasse($commande->getCompteMasse());
            $commandeFus->setCompteRubrique($commande->getCompteRubrique());
            $commandeFus->setComptePoste($commande->getComptePoste());
            $commandeFus->setCompte($commande->getCompte());

            $commandeFus->setUserCreated($this->getUser());

            $cat = null;

            // if($commande->getFournisseur()->getCategorie()->getK()=='externe'){
            //     $cat='E';

            // }elseif($commande->getFournisseur()->getCategorie()->getK()=='interne'){
            //     $cat='I';
            // }
            $commandeFus->setCode($UATCommandefrscabRepository->GetLastCode($cat));
            $commandeFus->setPositionActuel('creer');
            $commandeFus->setActive(true);

            $em->persist($commandeFus);
            $em->flush();

            foreach ($request->request->get('_array_ids') as $key => $value1) {
                $Commandecab = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value1);
                if ($key == 0) {
                    foreach ($Commandecab->getDetails() as $key => $value) {

                        $commandeDetail = new UATCommandefrsdet();
                        $commandeDetail->setArticle($value->getArticle());
                        $commandeDetail->setQuantite($value->getQuantite());
                        $commandeDetail->setTva($value->getTva());

                        $commandeDetail->setObservation($value->getObservation());
                        $commandeDetail->setPrixunitaire($value->getPrixunitaire());
                        $commandeDetail->setUnite($value->getUnite());
                        $commandeDetail->setRemise($value->getRemise());
                        //  $UvDevisdet->setPrixttc($UvDevisdet->getPrixTTcAvecRemise());

                        $commandeDetail->setCab($commandeFus);

                        $em->persist($commandeDetail);
                        $em->flush();
                    }
                } else {
                    foreach ($Commandecab->getDetails() as $key => $value) {
                        $detail = $this->getDoctrine()->getRepository(UATCommandefrsdet::class)->findOneBy(['article' => $value->getArticle(), 'cab' => $commandeFus]);


                        if ($detail) {
                            //   dump($detail);
                            // dump($value->getPrixunitaire());
                            //die;
                            if ($detail->getPrixunitaire() > $value->getPrixunitaire()) {
                                $detail->setQuantite($value->getQuantite() + $detail->getQuantite());
                                // $detail->setPrixttc($detail->getPrixTTcAvecRemise());

                            } else {
                                $detail->setPrixunitaire($value->getPrixunitaire());
                                $detail->setTva($value->getTva());
                                $detail->setRemise($value->getRemise());
                                $detail->setQuantite($value->getQuantite() + $detail->getQuantite());
                                //   $detail->setPrixttc($detail->getPrixTTcAvecRemise());
                            }
                        } else {
                            $commandeDetail = new UATCommandefrsdet();
                            $commandeDetail->setArticle($value->getArticle());
                            $commandeDetail->setQuantite($value->getQuantite());
                            $commandeDetail->setTva($value->getTva());
                            $commandeDetail->setRemise($value->getRemise());

                            $commandeDetail->setObservation($value->getObservation());
                            $commandeDetail->setPrixunitaire($value->getPrixunitaire());
                            $commandeDetail->setUnite($value->getUnite());

                            //  $UvDevisdet->setPrixttc($UvDevisdet->getPrixTTcAvecRemise());

                            $commandeDetail->setCab($commandeFus);

                            $em->persist($commandeDetail);
                        }
                    }
                }

                $Commandecab->setParentId($commandeFus);

                $Commandecab->setActive(false);
            }
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'Le fusionnement  a ete bien effectue .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }
}
