<?php

namespace App\Controller\moduleVente;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\nuts;
use App\Entity\User;
use App\Entity\PPiece;
//use App\Entity\UvDeviscab;
use App\Entity\PUnite;
use App\Entity\PDossier;

use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\ArticleOld;
use App\Entity\PStatutgrv;
//use App\Entity\UvDevisdet;
use \App\Service\AppService;
use App\Entity\UPPartenaire;
//use App\Form\UvDevisdetType;
//use App\Entity\ConfPdfType;
//use App\Entity\FormatPapier;
use App\Entity\UvChargedevis;
//use App\Entity\UmouvementStockEncours;
//use App\Entity\UvDeviscabFichier;
//use App\Entity\ConfPdfParameter;
use App\Entity\UvCommandecab;
use App\Entity\UPPartenaireTy;
use App\Entity\UsersSignature;
use App\Entity\UvCommandedet; 
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;
use App\Entity\PGlobalParamDet;
use App\Entity\UmouvementStock;
use App\form\UvChargedevisType;
use App\Form\UvCommandecabType;
use App\Form\UvCommandedetType;
use App\Entity\Usersignaturedoc;
//use Symfony\Component\Serializer\Serializer;
//use Symfony\Component\Serializer\Encoder\JsonEncoder;
//use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Entity\DevisTechniqueCab;
//use \App\Repository\UsModuleRepository;
//use App\Repository\PDossierRepository;

use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\UaTLivraisonfrscab;
//use App\Repository\UvDeviscabRepository;
use App\Entity\UaTLivraisonfrsdet;

use Doctrine\ORM\EntityRepository;
//uvDeviscabRepository
use App\Entity\UvCommandecabFichier;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\UarticleRepository;
use Picqer\Barcode\BarcodeGeneratorHTML;
use Symfony\Component\Workflow\Registry;
//UvChargedevis
use App\Repository\UvCommandecabRepository;
use App\Repository\UvLivraisoncabRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UATCommandefrscabRepository;
//use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Form\Type\VichFileType;
use App\Repository\UaTLivraisonfrscabRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("vente/commandecab")
 */
class UvCommandecabController extends AbstractController
{
    private $workflowRegistry;
    public function __construct(/* SessionInterface $session, */ Registry $workflowRegistry, AppService $AppService) {
        $this->workflowRegistry = $workflowRegistry;
        // $this->session = $session;
        $this->appService = $AppService;
    }

    public function getHistorique($objet) {
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
     * @Route("/list",options = { "expose" = true } , name="uv_commandecab_list")
     * 
     */
    public function ListAction(Connection $connection,Request $request)
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
                
                
                if (isset($value['name']) && $value['searchable'] == "true") {
                   //  dump($value);
                    $where .= " OR " . $value['name'] . " LIKE '%$search%' ";
                }


            }


            $condition = " and (" . substr($where, 3) . ")";
            
           // echo $condition ; die();
            //$havingCondition = " HAVING (1=1 OR (" . substr($having, 3) . "))"; 
        }

      

        $sql = "SELECT cab.id ,
        cab.code, 
        cab.old_sys,
        DATE_FORMAT(cab.datecommande,'%d/%m/%Y')  datecommande , 
        DATE_FORMAT(cab.datedevis,'%d/%m/%Y')  datedevis , 
        cab.depense , cab.budget,
         cab.observation,
         cl.societe  client,
         cab.description,
        cab.refDocAsso ,
        devis.id as dem_id,
        devis.code as dem_code,
         cab.position_actuel,
         cab.st_liv , cab.st_fac , cab.st_reg,
         st.couleur , st.statut,
         cab.statutsig as signature,
   
        SUM(det.quantite * det.prixunitaire ) ht  ,
        SUM( det.quantite * det.prixunitaire *  (IFNULL(det.remise,0)) /100) remise ,
        SUM(det.quantite * det.prixunitaire * (IFNULL(det.tva,0) /100   * ( 1 - IFNULL(det.remise,0)/100))) tva  ,  
        SUM(det.quantite * det.prixunitaire * (1+IFNULL(det.tva,0)/100) * (1-IFNULL(det.remise,0)/100)) ttc  

    FROM `uv_commandecab` cab
    left join `u_p_partenaire` cl on cl.id = cab.partenaire_client_id
    left join uv_commandedet det on det.uv_commandecab_id = cab.id
    left join uv_deviscab devis on devis.id = cab.uv_deviscab_id
    left join p_statutgrv st on  st.id = cab.p_statutgrv_id
    where 1= 1 and cab.active = 1 and  cab.p_dossier_id = " . $this->appService->getDossierCourant()->getId();

        $sql .= " GROUP BY cab.id";



        $sql2 = "SELECT * FROM (" . $sql . ") tab where 1=1  " . $condition;
        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();
        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";


     //    echo($sql2); die(); 
        



        foreach ($connection->fetchAll($sql2) as $key => $value) {
            $UvCommandecab = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($value['id']);
            $str = '';
            if($value['old_sys'] == 1){
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='".$value['id']."'></i>";
            }
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";
            $nestedData[] = "<a class='cd_op'>" . $value['code'] . "</a> ".$str;
            //
            $nestedData[] =  $value['datecommande'];
            $nestedData[] = $value['description'];
            $nestedData[] = $value['client'];

            $nestedData[] = number_format($value['ht'], 2, ',', ' ');
            $nestedData[] = number_format($value['tva'], 2, ',', ' ');
            $nestedData[] = number_format($value['ttc'], 2, ',', ' ');
            $nestedData[] = number_format($value['budget'], 2);
            $nestedData[] = number_format($value['depense'], 2);
            //$nestedData[] = "<span > <i class='fa fa-circle' style='color:" . $value['couleur'] . "'> </i> " . $value['statut'] . "</span>";
            
            $nestedData[] = $UvCommandecab->HasCommandeWithIcon()['livraison']['icon'];
            $nestedData[] = $UvCommandecab->HasCommandeWithIcon()['facture']['icon'];
            $nestedData[] = $UvCommandecab->HasCommandeWithIcon()['reglement']['icon'];
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
            $statut=$this->appService->getStatut($value['position_actuel']);
            $nestedData[] = $statut;


            $operations = array();

            foreach ($this->appService->getOperations('_module_vente', '_cmd_cl', '_index', true) as $key1 => $value1) {
                if ($value1['eachRow'] != null) {
                    $operations[$key1] = $value1;
                    $operations[$key1]['id_row'] = $id;
                    $operations[$key1]['id'] = $id;
                    if ($value1['route']!="" && $value1['routeWithParam']==true ){
                     $operations[$key1]['_route_link'] =   $this->generateUrl($value1['route'], ['id' => $id] ,UrlGenerator::ABSOLUTE_URL); 
                    }
                }
            }
            //echo $id; 
            //dump($operations); die(); 

            // trier les actions selon la position du wokrlow
            if (in_array($value['position_actuel'], ['valider', 'commander'])) {
                unset($operations['_edit'], $operations['_delete_demmande'], $operations['_desactiver_commande'], $operations['_change_dossier']);
            }
            $array2 = array();
            // recuperer les positions acessible selon le workow 
            if (isset($operations['_workflow'])) {
                unset($operations['_workflow']);
                $obj = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($id);
                $workflow = $this->workflowRegistry->get($obj);
                
                $transitions = $workflow->getEnabledTransitions($obj);


                foreach ($transitions as $key => $value) {
                    $array2[$key]['id'] = $id;
                    $array2[$key]['name'] = $value->getName();
                    $array2[$key]['titre'] = $workflow->getMetadataStore()->getMetadata('title', $value);
                    $array2[$key]['class'] = $workflow->getMetadataStore()->getMetadata('class', $value) .' '. $workflow->getMetadataStore()->getMetadata('function', $value);
                    $array2[$key]['icon'] = $workflow->getMetadataStore()->getMetadata('icon', $value);
                    $array2[$key]['color'] = $workflow->getMetadataStore()->getMetadata('color', $value);
                }
            }
            $nestedData[] = array_values(array_merge($operations, $array2));
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }



    /**
     * @Route("/", name="uv_commandecab_index",options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(/*Breadcrumbs $breadcrumbs*/): Response
    {
        /* informations modules dossiers Autorises pour cet utilisateur */
      // $mc = $this->session->get('moduleCourantUgouvVente');
      // $dc = $this->session->get('dossierCourantUgouvVente');
      // $modules = $this->session->get('modules');

      // $this->forward('App\Controller\SecurityController::getAccessOperation', [
      //     'module' => '_ugouv_vente',
      //     'sousModule' => '_de_cl',
      //     'operation' => '_index',
      //     'dossier' => $dc->getPrefix()

      // ]);
      // /* operations autorises pour cet utilisateur */
      // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations'];


      // /* sous module courant */
      // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];

      // /* navigation  */
      // $breadcrumbs->prependRouteItem("Applications", "app");
      // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
      // $breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");
      // $breadcrumbs->addItem("liste");
      $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_index', true);

      //  $dossiers = $this->getDoctrine()->getRepository(PDossier::class)->findAll();
      //  $commandes = $this->getDoctrine()->getRepository(UvCommandecab::class)->findAll();
      //  $type = $this->getDoctrine()
      //      ->getRepository(UPPartenaireTy::class)
      //      ->findOneBy(['abreviation' => 'cl']);
      //  $statut = $this->getDoctrine()
      //      ->getRepository(PStatutgrv::class)
      //      ->findBy(['module' => 'DV']);
      // 
      //  $upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);
        return $this->render('module_vente/uv_commandecab/index.html.twig', [
            //'uv_commandecabs' => $commandes,
         //   'dossiers' => $dossiers,
          //  'u_p_partenaires' => $upPartenaires,
            'operations' => $operations,
           // 'statut' => $statut
        ]);
    }

    /**
     * @Route("/new", name="uv_commandecab_new", methods={"GET","POST"} , options={"expose"=true})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs, UvCommandecabRepository $uvCommandecabRepository, ValidatorInterface $validator): Response
    {

    //    $mc = $this->session->get('moduleCourantUgouvVente');
    //    $dc = $this->session->get('dossierCourantUgouvVente');
    //    $modules = $this->session->get('modules');
//
//
//
    //    $this->forward('App\Controller\SecurityController::getAccessOperation', [
    //        'module' => '_ugouv_vente',
    //        'sousModule' => '_cmd_cl',
    //        'operation' => '_new',
    //        'dossier' => $dc->getPrefix()
//
    //    ]);
//
//
//
//
//
    //    /* sous module courant */
    //    $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];
//
//
//
    //    /* navigation  */
    //    $breadcrumbs->prependRouteItem("Applications", "app");
    //    $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
    //    $breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");
    //    $breadcrumbs->addItem("Nouveau");

        $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_new', true);
        $detail = new UvCommandedet();
        $form_det = $this->createForm(UvCommandedetType::class, $detail);
        $form_det->handleRequest($request);

        $uvCommandecab = new UvCommandecab();
        $uvCommandecab->setDateDevis(new \DateTime());
        $devise = $this->getDoctrine()->getRepository(UPDevise::class)->findOneByCode('MAD');

        $uvCommandecab->setDevise($devise);
       $dc= $this->appService->getDossierCourant();
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc->getId());

        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }


        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }
        //dump($marches);
        //die;

        $form = $this->createForm(UvCommandecabType::class, $uvCommandecab, array('dossier' => $dc, 'projets' => $projets, 'marches' => $marches));;
        $form->handleRequest($request);

        $UvCommandedet = new UvCommandedet();
        $errors = $validator->validate($UvCommandedet);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }

        return $this->render('module_vente/uv_commandecab/new.html.twig', [
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'commande' => $uvCommandecab,
            'errors_detail' => $error,
            'nameDetail' => 'uv_commandedet'
        ]);
    }

    /**
     * @Route("/insert", name="uv_commandecab_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insert(
        Request $request,
        ValidatorInterface $validator,
        UvCommandecabRepository $uvCommandecabRepository,
        UarticleRepository $UarticleRepository,



        Breadcrumbs $breadcrumbs
    ): Response {

        /* informations modules dossiers Autorises pour cet utilisateur */
      //  $mc = $this->session->get('moduleCourantUgouvVente');
      //  $dc = $this->session->get('dossierCourantUgouvVente');
      //  $modules = $this->session->get('modules');

$dc=$this->appService->getDossierCourant();

        $details = new UvCommandedet();
        $form_det = $this->createForm(UvCommandedetType::class, $details);
        $form_det->handleRequest($request);

        $commande = new UvCommandecab();

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }


        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }


        $form = $this->createForm(UvCommandecabType::class, $commande, array('dossier' => $dc, 'projets' => $projets, 'marches' => $marches));





        $form->handleRequest($request);

        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {

            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            //echo $detail = json_decode($form->get('detail')->getData());


            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            } else {

                /*
                 * varifier si il y'a au moins un article saisie
                 * (json_decode) decoder le tables des articles
                 */
                $detail = json_decode($request->request->get('detail'));
                // $dateDevis = json_decode($form->get('dateDevis')->getData());
               // dump( $detail);die();
                if ($commande->getType()) {
                    if ($commande->getType()->getCode() == 'PRJ' and empty($commande->getProjet())) {
                        return $this->json(['empty' => $commande, 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un projet pour effectuer cette operation.']]);
                    }
                    if ($commande->getType()->getCode() == 'MR' and empty($commande->getMarche())) {
                        return $this->json(['empty' => $commande, 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un marche pour effectuer cette operation.']]);
                    }
                }
  
                if (empty($detail)) {
                    return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner un article au moins pour effectuer cette operation.']]);
                }

               // dump($commande->getType());
                //die(1);

                $entityManager = $this->getDoctrine()->getManager();
                foreach ($detail as $key => $value) {
                    $uvCommandedet = new uvCommandedet();

                    //$PUnite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->unite->id);
                    // $Uarticle = $this->getDoctrine()->getRepository(Uarticle::class)->find($UarticleRepository->find($value->id));
                    $uvCommandedet->setArticle($UarticleRepository->find($value->articleId));
                    if ($value->uniteId != "") {
                        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->uniteId);
                        $uvCommandedet->setUnite($unite);
                    }

                    $uvCommandedet->setObservation($value->observation);
                    $uvCommandedet->setTva($value->tva);
                    $uvCommandedet->setPrixunitaire($value->prixunitaire);
                    $uvCommandedet->setQuantite($value->quantite);
                    $uvCommandedet->setPrixttc($value->prixttc);
                    $uvCommandedet->setCab($commande);
                    $uvCommandedet->setRemise($value->remise);
                    $entityManager->persist($uvCommandedet);
                }
                $commande->setDateDevis($form->get('dateDevis')->getData());
                $commande->setMtRemise($form->get('mtRemise')->getData());
                $commande->setObservation($form->get('observation')->getData());

                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                $commande->setDossier($dossier);
                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'cr_dv_cl']);
                // dump($PStatutgrv); die(); 
                $commande->setStatut($PStatutgrv);
                $commande->setDateDocAsso($commande->getDatecommande());
                $commande->setRefDocAsso($commande->getRefcommande());
                $commande->setActive(true);
                $commande->setUserCreated($this->getUser());
                $cat=null;

                if($commande->getClient()->getCategorie()->getK()=='externe'){
                    $cat='E';
        
                }elseif($commande->getClient()->getCategorie()->getK()=='interne'){
                    $cat='I';
                }
                $commande->setCode($uvCommandecabRepository->GetLastCode($cat));
                $commande->setUserCreated($this->getUser());
                $commande->setPositionActuel('creer');
                $entityManager->persist($commande);
                /*  
                 * Enregistrer les informations
                 */
                $entityManager->flush();



               
                return $this->json([
                    'data' => array('id' => $commande->getId()),
                    'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
                ]);
            }
        }
    }

    /**
     * @Route("/{id}/edit", name="uv_commandecab_edit", options = { "expose" = true }, methods={"GET","POST"})
     */
    public function edit(Request $request, UvCommandecab $commande, Breadcrumbs $breadcrumbs, $id, ValidatorInterface $validator): Response
    {
      //$mc = $this->session->get('moduleCourantUgouvVente');
      //$dc = $this->session->get('dossierCourantUgouvVente');
      //$modules = $this->session->get('modules');



      //$this->forward('App\Controller\SecurityController::getAccessOperation', [
      //    'module' => '_ugouv_vente',
      //    'sousModule' => '_cmd_cl',
      //    'operation' => '_edit',
      //    'dossier' => $dc->getPrefix()

      //]);
      ///* operations autorises pour cet utilisateur */
      //$operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations'];




      ///* sous module courant */
      //$sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];



      ///* navigation  */
      //$breadcrumbs->prependRouteItem("Applications", "app");
      //$breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
      //$breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");
      //$breadcrumbs->addRouteItem($commande->getCode(), "uv_commandecab_show", ['id' => $commande->getId()]);
      //$breadcrumbs->addItem('Modifier');
        
        
        $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_edit', [true, $commande->getCode()]);



        $session = new Session();
        $detail = new UvCommandedet();
        $form_det = $this->createForm(UvCommandedetType::class, $detail);
        $form_det->handleRequest($request);
      
      
        $dc=$this->appService->getDossierCourant();


        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }


        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }


        $form = $this->createForm(UvCommandecabType::class, $commande, array('dossier' => $dc, 'projets' => $projets, 'marches' => $marches));








        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('uv_deviscab_index');
        }

        $UvCommandedet = new UvCommandedet();
        $errors = $validator->validate($UvCommandedet);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }

        return $this->render('module_vente/uv_commandecab/edit.html.twig', [
            'commande' => $commande,
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'operations' => $operations,
            'errors_detail' => $error,
            'nameDetail' => 'uv_commandedet'
        ]);
    }



    /**
     * @Route("/new/devis/detail", name="uv_commandecab_detail", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function DetCommandeadd(ValidatorInterface $validator, Request $request): Response
    {

        /*
         * Ajouter une expression de besoin details (articles) 
         * En utilisant Ajax au niveau de validation 
         */

        /*
         * La creation du formulaire 
         */
        $detail = new UvCommandedet();
        $form = $this->createForm(UvCommandedetType::class, $detail);
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
           
            $Uarticle = $this->getDoctrine()->getRepository(Uarticle::class)->find($form->get('article')->getData()->getId());
         
            $detail->setArticle($Uarticle);
            $tva = ($detail->getTva() / 100) + 1;
            
            $detail->setPrixttc($detail->getPrixTTcAvecRemise());
          
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();
         
            if ($detail->getRemise() == null) {
                $detail->setRemise(0);
            }

            $detail = array(
                'id' => $detail->getArticle()->getId(),

                'titre' => $detail->getArticle()->getTitre(),
                'code' => $detail->getArticle()->getCode(),
                'observation' => $detail->getObservation(),
                'unite' => $detail->getUnite() ? $detail->getUnite()->getAbreviation() : "",
                'unite_id' => $detail->getUnite() ? $detail->getUnite()->getId() : "",
                'quantite' => $detail->getQuantite(),
                'prixunitaire' => $detail->getPrixunitaire(),
                'prixttc' => $detail->getPrixttc(),
                'tva' => $detail->getTva(),
                'montantRemise' => $detail->getPrixRemise(),
                'remise' => $detail->getRemise()
            );


            return $this->json([
                'data' => $detail,
                'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);

            /* return $this->json(['data' => $data,
              'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]); */
        }
    }

    /**
     * @Route("/{id}/insert/detail", name="uv_commandedet_insert", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function CommandeCabsave(ValidatorInterface $validator, Request $request, $id,UarticleRepository $UarticleRepository): Response
    {

        $detail = json_decode($request->request->get('detail'))[0];
                    
                    if(isset($detail->id)){
                        $UvCommandedet = $this->getDoctrine()->getRepository(UvCommandedet::class)->find((int)$detail->id);  
                    }else{
                        $UvCommandedet = new UvCommandedet();
                    }
                    $UvCommandedet->setCab($this->getDoctrine()->getRepository(UvCommandecab::class)->find($id));
                    


                    //dump($detail);
                    //dump($tAchatdemandeinternedet);die();
                    $UvCommandedet->setArticle($UarticleRepository->find($detail->articleId));

                    if ($detail->uniteId != "") {
                        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail->uniteId);
                        $UvCommandedet->setUnite($unite);
                    }
                    //                    $tAchatdemandeinternedet->setCategorie($uarticle->getCatArticle());
                    //                    $tAchatdemandeinternedet->setArticle($uarticle);
                    // $tAchatdemandeinternedet->setUnite($value->unite);
                    $UvCommandedet->setPrixunitaire($detail->prixunitaire);

                    $UvCommandedet->setQuantite($detail->quantite);

                    $UvCommandedet->setRemise($detail->remise ? $detail->remise : 0);
                    $UvCommandedet->setTva($detail->tva);
                    $UvCommandedet->setObservation($detail->observation);
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->persist($UvCommandedet);
            $entityManager->flush();

            return $this->json([
                'data' => "saved",
                'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);
        
    }

    /**
     * @Route("/{id}/update", name="uv_commandecab_update", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, UvCommandecab $commande): Response
    {


       // /* informations modules dossiers Autorises pour cet utilisateur */
       // $mc = $this->session->get('moduleCourantUgouvVente');
       // $dc = $this->session->get('dossierCourantUgouvVente');
       // $modules = $this->session->get('modules');
       $dc=$this->appService->getDossierCourant();



        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }


        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }


        $form = $this->createForm(UvCommandecabType::class, $commande, array('dossier' => $dc, 'projets' => $projets, 'marches' => $marches));


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

        if ($commande->getType()) {
            if ($commande->getType()->getCode() == 'PRJ' and empty($commande->getProjet())) {
                return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un projet pour effectuer cette operation.']]);
            }
            if ($commande->getType()->getCode() == 'MR' and empty($commande->getMarche())) {
                return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un marche pour effectuer cette operation.']]);
            }
        }

        $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'cr_dv_cl']);

        $commande->setStatut($PStatutgrv);

        $commande->setUserCreated($this->getUser());

        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/show", name="uv_commandecab_show" , options={"expose"=true}   , methods={"GET"})
     */
    public function show(UvCommandecab $commande, Breadcrumbs $breadcrumbs, $id): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */


     //  $mc = $this->session->get('moduleCourantUgouvVente');
     //  $dc = $this->session->get('dossierCourantUgouvVente');
     //  $modules = $this->session->get('modules');

     //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //      'module' => '_ugouv_vente',
     //      'sousModule' => '_cmd_cl',
     //      'operation' => '_show',
     //      'dossier' => $dc->getPrefix()

     //  ]);
     //  /* operations autorises pour cet utilisateur */
     //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations'];




     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];


     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_index");
      //  $breadcrumbs->addItem($commande->getCode());
      $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_show', [true,$commande->getCode()]);

        $detail = $this->getDoctrine()
            ->getRepository(UvCommandedet::class)
            ->findBy(['cab' => $commande]);


        $valider = 'No';
        if (isset($commande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        } elseif (isset($commande->getPositionActuel()['commander'])) {
            $valider = 'commander';
        }


        return $this->render('module_vente/uv_commandecab/show.html.twig', [
            'commande' => $commande,
            'detail'   => $detail,
            'valider' => $valider,
            'operations' => $operations
        ]);
    }



        /**
     * @Route("/{id}/documents", name="uv_commandecab_documents" , options={"expose"=true}   , methods={"GET"})
     */
    public function documents(UvCommandecab $commande, Breadcrumbs $breadcrumbs, $id): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */


     // $mc = $this->session->get('moduleCourantUgouvVente');
     // $dc = $this->session->get('dossierCourantUgouvVente');
     // $modules = $this->session->get('modules');

     // $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //     'module' => '_ugouv_vente',
     //     'sousModule' => '_cmd_cl',
     //     'operation' => '_documents',
     //     'dossier' => $dc->getPrefix()

     // ]);
     // /* operations autorises pour cet utilisateur */
     // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations'];




     // /* sous module courant */
     // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];


     // /* navigation  */
     // $breadcrumbs->prependRouteItem("Applications", "app");
     // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
     // $breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");
     // $breadcrumbs->addRouteItem($commande->getCode(), "uv_commandecab_show", ['id' => $commande->getId()]);
     // $breadcrumbs->addItem('Docs/Impression');

     $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_documents', [true, $commande->getCode()]);


      


        return $this->render('module_vente/uv_commandecab/documents.html.twig', [
            'commande' => $commande,
            'operations' => $operations
        ]);
    }






    /**
     * @Route("{id}/{token}/delete", name="uv_commandecab_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deletecommandeCab(Request $request, UvCommandecab $commande, $token): Response
    {
        if ($this->isCsrfTokenValid('delete' . $commande->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($commande)) {


                    if (count($commande->getLivraison()) > 0) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 200);
                    }
                    if (count($commande->getFichiers()) > 0) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 200);
                    }
                    $commande->setIsdeleted(true);
                 //   $entityManager->remove($commande);

                    // dump();
                    //die;



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
     * @Route("{id}/{token}/delete2", name="uv_commandecab_delete2",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deletecommandeCab2(Request $request, UvCommandecab $commande, $token): Response
    {
        
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($commande)) {


                    if (count($commande->getLivraison()) > 0) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 200);
                    }
                    if (count($commande->getFichiers()) > 0) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 200);
                    }
                    $commande->setIsdeleted(true);
                 //   $entityManager->remove($commande);

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
     * @Route("/{id}/statut", name="uv_commandecab_statut", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statut(ValidatorInterface $validator, Request $request, UvCommandecab $commande): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder($commande)
                ->add('statut', EntityType::class, [
                    'class' => PStatutgrv::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                            ->where("a.module = 'DV'")
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

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            }
            return $this->render('module_vente/uv_commandecab/statut.html.twig', [
                'commande' => $commande,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/archiver", name="uv_commandecab_archive", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function Archive(Request $request, UvCommandecab $commande): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            if ($commande->getStatut()->getAbreviation() == 'cmd_dv_cl') {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'archiver une demande dèja traite.']], 403);
            }


            $commande->setActive(false);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'archivage  a ete bien effectue .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/generer", name="uv_commandecab_generer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function generer(ValidatorInterface $validator, Request $request, UvLivraisoncabRepository $UvLivraisoncabRepository, UvCommandecab $commande): Response
    {

        //dump($tAchatdemandeinternecab->getDossier()); die(); 

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder($commande)
                ->add('dateLivprv', DateType::class, ['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
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


                $em = $this->getDoctrine()->getManager();
                $UvLivraisoncab = new UvLivraisoncab();


                //dump($request->request->get('form')); 
                $commande->setStLiv('L');
                $cat=null;

                if(in_array($commande->getClient()->getCategorie()->getK(), ['externe', 'externe es'])){
                    $cat='E';
                    $ppiceliv = $em->getRepository(PPiece::class)->find(63);

        
                }elseif($commande->getClient()->getCategorie()->getK()=='interne'){
                    $cat='I';
                    $ppiceliv = $em->getRepository(PPiece::class)->find(64);

                }
                $UvLivraisoncab->setCode($UvLivraisoncabRepository->GetLastCode($cat));
                $UvLivraisoncab->setActive(true);
                $UvLivraisoncab->setPPiece($ppiceliv);
                $UvLivraisoncab->setDatelivraison(new \DateTime($request->request->get('form')['dateLivprv']));
                $UvLivraisoncab->setResponsable($commande->getResponsable());
                $UvLivraisoncab->setRemise($commande->getRemise());
                $UvLivraisoncab->setMtremise($commande->getMtremise());
                $UvLivraisoncab->setDossier($commande->getDossier());
                $UvLivraisoncab->setCompteMasse($commande->getCompteMasse());
                $UvLivraisoncab->setCompteRubrique($commande->getCompteRubrique());
                $UvLivraisoncab->setComptePoste($commande->getComptePoste());
                $UvLivraisoncab->setCompte($commande->getCompte());
                $UvLivraisoncab->setDepense($commande->getDepense());
                $UvLivraisoncab->setClient($commande->getClient());
                $UvLivraisoncab->setDevis($commande);
                $UvLivraisoncab->setUserCreated($this->getUser());
                $UvLivraisoncab->setPositionActuel('creer');
                //$UvLivraisoncab->setPourCompte($UvDeviscab->getPourCompte());
                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'LVR', 'abreviation' => 'cr_lvr_cl']);
                $UvLivraisoncab->setStatut($PStatutgrv);
                $em->persist($UvLivraisoncab);


                foreach ($commande->getDetails() as $key => $value) {
                    $UvLivraisondet = new UvLivraisondet();
                    $UvLivraisondet->setCab($UvLivraisoncab);
                    $UvLivraisondet->setArticle($value->getArticle());
                    $UvLivraisondet->setQuantite($value->getQuantite());
                    $UvLivraisondet->setPrixunitaire($value->getPrixunitaire());
                    $UvLivraisondet->setPrixttc($value->getPrixttc());
                    $UvLivraisondet->setTva($value->getTva());
                    $UvLivraisondet->setRemise($value->remise);
                    $UvLivraisondet->setObservation($value->getObservation());

                    $em->persist($UvLivraisondet);
                }
                $em->flush();

                // dump($commande); die();   
                //  $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            }
            return $this->render('module_vente/uv_commandecab/generer.html.twig', [
                'commande' => $commande,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/commande", name="uv_commandecab_commande", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function commande(ValidatorInterface $validator, Breadcrumbs $breadcrumbs, Request $request, UvCommandecab $commande): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
     //   $mc = $this->session->get('moduleCourantUgouvVente');
     //   $dc = $this->session->get('dossierCourantUgouvVente');
     //   $modules = $this->session->get('modules');
//
     //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //       'module' => '_ugouv_vente',
     //       'sousModule' => '_cmd_cl',
     //       'operation' => '_commande',
     //       'dossier' => $dc->getPrefix()
//
     //   ]);
     //   /* operations autorises pour cet utilisateur */
     //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations'];






        $valider = 'No';
        if (isset($commande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        } elseif (isset($commande->getPositionActuel()['commander'])) {
            $valider = 'commander';
        } else {
            //return new Response("Operation non autorie", 403);
        }



        $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_commande', [true, $commande->getCode()]);



   //   /* sous module courant */
   //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];



   //   /* navigation  */
   //   $breadcrumbs->prependRouteItem("Applications", "app");
   //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
   //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");
   //   $breadcrumbs->addRouteItem($commande->getCode(), "uv_commandecab_show", ['id' => $commande->getId()]);
   //   $breadcrumbs->addItem("Commande");

        //dump($tAchatdemandeinternecab->getDossier()); die();

        /**
         * verifier s'il s'ajit de ajax request
         */
        //new \DateTime($request->request->get('form')['dateDemande'])

        $form = $this->createFormBuilder($commande)
            ->add('datecommande', DateType::class, ['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->add('refcommande', TextType::class, ['mapped' => false, 'constraints' => [new NotBlank()]])
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


            $em = $this->getDoctrine()->getManager();


            //dump($request->request->get('form')); 
            $commande->setRefcommande($request->request->get('form')['refcommande']);
            $commande->setDatecommande(new \DateTime($request->request->get('form')['datecommande']));

            $em->flush();

            // dump($commande); die();   
            //  $this->getDoctrine()->getManager()->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }

        return $this->render('module_vente/uv_commandecab/commande.html.twig', [
            'commande' => $commande,
            'form' => $form->createView(),
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/document/pdf", name="uv_commandecab_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function devisPdf(UvCommandecab $commande, Breadcrumbs $breadcrumbs, $id)
    {
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($commande->getCode(), $generator::TYPE_CODE_128,1,30);
       

        $repository = $this->getDoctrine()->getRepository(UvCommandedet::class);
        $details = $repository->findBy(['cab' => $commande->getId()]);
        //dump($TAchatdemandeinternedet);
        //dump($tAchatdemandeinternecab);
        //die();
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



        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $commande->getDossier()->getLogo()) && $commande->getDossier()->getLogo() != null ? $urlFichierVente . $commande->getDossier()->getLogo() : "img/default/default-logo.png";


            $prixTotHT = 0;
            $prixTotNet = 0;
            $TotTva = 0;
            $baseTVA = 0;


            $total = 0;
            foreach ($commande->getDetails() as  $detail) {
                
            
                $total += $detail->getPrixunitaire();
                
                $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
                $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * ( 1 + ( $detail->getTva())/100 ));
            }
            $TotTva = $prixTotNet - $prixTotHT;
            $net = $prixTotNet - $commande->getRemise();
            // if ($net > 0) {
            //     $devis = $net;
            // } else {
            //     $devis = ($net * -1);
            // }
    

            // $obj = new nuts($devis, "MAD");
            // $nb = $obj->getFormated(" ", ",");
            // $text = $obj->convert("fr-FR");
            $moins = 'moins ';

            if ($net > 0) {
                $montantfinal =  $net;
                $obj = new nuts($montantfinal, "MAD");
                $nb = $obj->getFormated(" ", ",");
            $text  = $obj->convert("fr-FR");
    
            } else {
                $montantfinal =   $net  * -1;
                $obj = new nuts($montantfinal,"MAD");
                $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
    
            }
   
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $commande, 'postion' => 1, 'tableName' => 10]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $commande, 'postion' => 2, 'tableName' => 10]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $commande, 'postion' => 3, 'tableName' => 10]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $commande, 'postion' => 4, 'tableName' => 10]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $html = $this->renderView('module_vente/uv_commandecab/pdf/document.html.twig', [

            'cab' => $commande,
            'image' => $image,
            'text' => $text,
            "signature1" => $signature1,
            "signature2" => $signature2, 
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode

        ]);
        ob_get_clean();

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'

        $dompdf->setPaper("A4", 'portrait');
        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("commande.pdf", [
            "Attachment" => false
        ]);
    }


    /**
     * @Route("/{id}/document2/pdf", name="uv_commandecab2_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function commandeDtPdf2(UvCommandecab $commande, Breadcrumbs $breadcrumbs, $id)
    {
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($commande->getCode(), $generator::TYPE_CODE_128,1,30);
       

        $repository = $this->getDoctrine()->getRepository(UvCommandedet::class);
        $details = $repository->findBy(['cab' => $commande->getId()]);
        //dump($TAchatdemandeinternedet);
        //dump($tAchatdemandeinternecab);
        //die();
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



        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $commande->getDossier()->getLogo()) && $commande->getDossier()->getLogo() != null ? $urlFichierVente . $commande->getDossier()->getLogo() : "img/default/default-logo.png";


            $prixTotHT = 0;
            $prixTotNet = 0;
            $TotTva = 0;
            $baseTVA = 0;


            $total = 0;
            foreach ($commande->getDetails() as  $detail) {
                
            
                $total += $detail->getPrixunitaire();
                
                $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
                $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * ( 1 + ( $detail->getTva())/100 ));
            }
            $TotTva = $prixTotNet - $prixTotHT;
            $net = $prixTotNet - $commande->getRemise();
            // if ($net > 0) {
            //     $devis = $net;
            // } else {
            //     $devis = ($net * -1);
            // }
    
            // $obj = new nuts($devis, "MAD");
            // $nb = $obj->getFormated(" ", ",");
            // $text = $obj->convert("fr-FR");
            $moins = 'moins ';

            if ($net > 0) {
                $montantfinal =  $net;
                $obj = new nuts($montantfinal, "MAD");
                $nb = $obj->getFormated(" ", ",");
            $text  = $obj->convert("fr-FR");
    
            } else {
                $montantfinal =   $net  * -1;
                $obj = new nuts($montantfinal,"MAD");
                $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
    
            }


            $UvTechniqueCab = $this->getDoctrine()->getRepository(DevisTechniqueCab::class)->findAll();
            $uvdevis =  $commande->getDevis();
            
            $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $commande, 'postion' => 1, 'tableName' => 10]);
            $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $commande, 'postion' => 2, 'tableName' => 10]);
            $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $commande, 'postion' => 3, 'tableName' => 10]);
            $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $commande, 'postion' => 4, 'tableName' => 10]);
            
            $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
            $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
            $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
            $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $html = $this->renderView('module_vente/uv_commandecab/pdf/document2.html.twig', [

            'cab' => $commande,
            'image' => $image,
            'text' => $text,
            'uvdev' => $uvdevis,
            'UvTechniqueCab'=> $UvTechniqueCab,
            "signature1" => $signature1,
            "signature2" => $signature2, 
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,

        ]);
        ob_get_clean();

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'

        $dompdf->setPaper("A4", 'portrait');
        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("commande.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/edit/detail", name="uv_commandedet_edit_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function editDetail(Request $request, UvCommandedet $detail): Response
    {
        // $UvDevisdet = new UvDevisdet();
        $form_det = $this->createForm(UvCommandedetType::class, $detail);
        $form_det->handleRequest($request);

        return $this->render('module_vente/uv_commandecab/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'uv_commandedet' => $detail,
        ]);
    }

    /**
     * @Route("{id}/{token}/delete/detail", name="uv_commandedet_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function deleteDetail(Request $request, UvCommandedet $detail, $token): Response
    {

        if ($this->isCsrfTokenValid('delete' . $detail->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($detail);
            $entityManager->flush();

            return $this->json([
                'data' => "deleted",
                'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }

    /**
     * @Route("/{id}/update/detail", name="uv_commandedet_update_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updateDetail(ValidatorInterface $validator, Request $request, UvCommandedet $detail): Response
    {

        $form_det = $this->createForm(UvCommandedetType::class, $detail);

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




        $detail->setPrixttc($detail->getPrixTTcAvecRemise());


        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/charges", name="uv_commande_charges", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function charges(ValidatorInterface $validator, Request $request, Breadcrumbs $breadcrumbs, UvCommandecab $commande, $id): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
     //   $mc = $this->session->get('moduleCourantUgouvVente');
     //   $dc = $this->session->get('dossierCourantUgouvVente');
     //   $modules = $this->session->get('modules');
//
     //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //       'module' => '_ugouv_vente',
     //       'sousModule' => '_cmd_cl',
     //       'operation' => '_charges',
     //       'dossier' => $dc->getPrefix()
//
     //   ]);
     //   /* operations autorises pour cet utilisateur */
     //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations'];
//
//
     //   /* sous module courant */
     //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];
//
//
//
     //   /* navigation  */
     //   $breadcrumbs->prependRouteItem("Applications", "app");
     //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
     //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");
     //   $breadcrumbs->addRouteItem($commande->getCode(), "uv_commandecab_show", ['id' => $commande->getId()]);
     //   $breadcrumbs->addItem("Charges");


     $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_charges', [true, $commande->getCode()]);


        $UvChargedevis = new UvChargedevis();
        $form = $this->createForm(UvChargedevisType::class, $UvChargedevis);
        $form->handleRequest($request);
        $UvChargedevisAll = $this->getDoctrine()->getRepository(UvChargedevis::class)->findAll();


        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }


            $em = $this->getDoctrine()->getManager();

            $em->persist($UvChargedevis);

            $em->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            // dump($commande); die();   
            //  $this->getDoctrine()->getManager()->flush();
        }


        $valider = 'No';
        if (isset($commande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        } elseif (isset($commande->getPositionActuel()['commander'])) {
            $valider = 'commander';
        }
        return $this->render('module_vente/uv_commandecab/charges.html.twig', [
            'uv_chargedevis' => $UvChargedevisAll,
            'form' => $form->createView(),
            'commande' => $commande,
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("{id}/{token}/delete/charges", name="uv_chargecommande_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function deleteCharges(Request $request, UvChargedevis $UvChargedevis, $token): Response
    {

        if ($this->isCsrfTokenValid('delete' . $UvChargedevis->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UvChargedevis);
            $entityManager->flush();

            return $this->json([
                'data' => "deleted",
                'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }




    /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="uv_commande_apply_transitions")
     */
    public function applyTransition(Request $request, UvCommandecab $commande)
    {

        if($commande->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
            return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
        }
        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($commande);
        if ($workflow->can($commande, $transition)) {
            try {
                // $statut = $this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'sousModule' => $request->request->get('sous_module')]);
                // dump($statut); die(); 
                //   $commande->setStatut($statut);
                $commande->setUserUpdated($this->getUser());
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a encours */
                if (in_array($transition, ['apres_creer_encours', 'apres_valider_annuler'])) {
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'en_dv_cl']);

                    $commande->setStatut($PStatutgrv);
                    $commande->setUserEncours($this->getUser());
                    $commande->setDateEncours(new \DateTime());
                }



                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a creer */
                if (in_array($transition, ['apres_annuler_creer', 'apres_archiver_creer', 'apres_encours_creer'])) {
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'cr_dv_cl']);

                    $commande->setStatut($PStatutgrv);

                    $commande->setUserCreated($this->getUser());
                    $commande->setCreated(new \DateTime());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a annule */
                if (in_array($transition, ['apres_valider_creer'])) {
                    $commandes = array();
                    if (count($commande->getLivraison()) > 0) {
                        foreach ($commande->getLivraison() as $key => $value) {

                            $url = $this->generateUrl('uv_livraisoncab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }
                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de devalider cette Commande,  il dispose deja de(s) reception(s)  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer ce(s) bon de(s) reception(s) "
                        ]]);
                    }
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
                    $valide = 1;
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'ge_dv_cl']);

                    $commande->setStatut($PStatutgrv);
                    $commande->setDateValider(new \DateTime());
                    $commande->setUserValider($this->getUser());
                }
                if (in_array($transition, ['apres_valider_commander'])) {
                    $valide = 2;
                    $commande->setDateCommander(new \DateTime());
                    $commande->setUserCommander($this->getUser());
                }



                if (in_array($transition, ['apres_valider_encours_annuler'])) {
                    $commandes = array();
                    if (count($commande->getLivraison()) > 0) {
                        foreach ($commande->getLivraison() as $key => $value) {

                            $url = $this->generateUrl('uv_livraisoncab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }




                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de passer a l'etat encours , 
                                                   cette Commande  dispose deja de(s) reception(s)  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer ce(s) bon de(s) reception(s) "
                        ]]);
                    }
                }


                if (in_array($transition, ['apres_commander_valider_annuler'])) {
                    $commandes = array();
                    if (count($commande->getLivraison()) > 0) {
                        foreach ($commande->getLivraison() as $key => $value) {

                            $url = $this->generateUrl('uv_livraisoncab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }




                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de passer a l'etat valider , 
                                                   cette Commande  dispose deja de(s) reception(s)  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer ce(s) bon de(s) reception(s) "
                        ]]);
                    }
                }





                $workflow->apply($commande, $transition);
                $this->get('doctrine')->getManager()->flush();
                if ($valide == 1) {
                    return $this->json(['code' => 201, 'id' => $commande->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                }
                if ($valide == 2) {
                    return $this->json(['code' => 202, 'id' => $commande->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                }
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }


    /**

     * @Route("/{id}/show/articles", name="uv_commande_articles_show", options={"expose"=true}, methods={"GET"})

     */
    public function showArticles(Request $request, Breadcrumbs $breadcrumbs, UvCommandecab $commande): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */


     //   $mc = $this->session->get('moduleCourantUgouvVente');
     //   $dc = $this->session->get('dossierCourantUgouvVente');
     //   $modules = $this->session->get('modules');
//
     //   /* Verifier si cet utilisateur il peut acceder a cette operation */
     //   if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations']['_show'])) {
     //       return new Response("Operation non autorie", 403);
     //   }
//
//
     //   /* sous module courant */
     //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];
//
     //   /* navigation  */
     //   $breadcrumbs->prependRouteItem("Applications", "app");
     //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
     //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");
//
     //   $breadcrumbs->addRouteItem($commande->getCode(), "uv_commandecab_show", ['id' => $commande->getId()]);
     //   $breadcrumbs->addItem('Articles');

     $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_show', [true, $commande->getCode()]);

        $valider = 'No';
        if (isset($commande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        } elseif (isset($commande->getPositionActuel()['commander'])) {
            $valider = 'commander';
        }

        return $this->render('module_vente/uv_commandecab/show_articles.html.twig', [
            'commande' => $commande,
            'valider' => $valider
        ]);
    }



    /**

     * @Route("/{id}/show/suivi", name="uv_commande_suivi_show", options={"expose"=true}, methods={"GET"})

     */
    public function showsuivi(Request $request, Breadcrumbs $breadcrumbs, UvCommandecab $commande): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */


   //   $mc = $this->session->get('moduleCourantUgouvVente');
   //   $dc = $this->session->get('dossierCourantUgouvVente');
   //   $modules = $this->session->get('modules');



   //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
   //       'module' => '_ugouv_vente',
   //       'sousModule' => '_cmd_cl',
   //       'operation' => '_suivi',
   //       'dossier' => $dc->getPrefix()

   //   ]);
   //   /* operations autorises pour cet utilisateur */
   //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations'];

   //   /* Verifier si cet utilisateur il peut acceder a cette operation */
   //   if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations']['_show'])) {
   //       return new Response("Operation non autorie", 403);
   //   }


   //   /* sous module courant */
   //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];

   //   /* navigation  */
   //   $breadcrumbs->prependRouteItem("Applications", "app");
   //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
   //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");

   //   $breadcrumbs->addRouteItem($commande->getCode(), "uv_commandecab_show", ['id' => $commande->getId()]);
   //   $breadcrumbs->addItem('Suivi des operations');


     //   $valider = 'No';
     //   if (isset($commande->getPositionActuel()['valider'])) {
     //       $valider = 'valider';
     //   } elseif (isset($commande->getPositionActuel()['commander'])) {
     //       $valider = 'commander';
     //   }
     $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_suivi', [true, $commande->getCode()]);

        return $this->render('module_vente/uv_commandecab/show_suivi.html.twig', [
            'commande' => $commande,
           // 'valider' => $valider,
            'operations' => $operations
        ]);
    }



    /**

     * @Route("/{id}/show/historique", name="uv_commande_show_historique", options={"expose"=true}, methods={"GET"})

     */
    public function showhistorique(UvCommandecab $commande): Response
    {
        //dump($this->getHistorique($commande));
       // die;

        return $this->render('module_vente/uv_commandecab/show_historique.html.twig', [
            'commande' => $commande,
            'historiques' => $this->getHistorique($commande)
        ]);
    }






    /**
     * @Route("/{id}/fichier", name="uv_commande_fichiers", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fichier(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UvCommandecab $commande): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */


   //   $mc = $this->session->get('moduleCourantUgouvVente');
   //   $dc = $this->session->get('dossierCourantUgouvVente');
   //   $modules = $this->session->get('modules');

   //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
   //       'module' => '_ugouv_vente',
   //       'sousModule' => '_cmd_cl',
   //       'operation' => '_fichiers',
   //       'dossier' => $dc->getPrefix()

   //   ]);
   //   /* operations autorises pour cet utilisateur */
   //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl']['operations'];





   //   /* sous module courant */
   //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_cmd_cl'];

   //   /* navigation  */
   //   $breadcrumbs->prependRouteItem("Applications", "app");
   //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
   //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_commandecab_index");

   //   $breadcrumbs->addRouteItem($commande->getCode(), "uv_commandecab_show", ['id' => $commande->getId()]);
   //   $breadcrumbs->addItem('Fichiers');
   $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_fichiers', [true, $commande->getCode()]);

        /**
         * verifier s'il s'ajit de ajax request
         */
        $fichier = new UvCommandecabFichier();
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
            $fichier->setCommande($commande);
            $fichier->setOriginalName($fichier->getImageFile()->getClientOriginalName());
            $fichier->setMimeType($fichier->getImageFile()->getClientMimeType());
            $entityManager->persist($fichier);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }


 

        return $this->render('module_vente/uv_commandecab/fichiers.html.twig', [
            'commande' => $commande,
            'form' => $form->createView(),
        
            'operations' => $operations
        ]);
    }



    /**
     * @Route("/{id}/deletefichier", name="uv_commande_fichiers_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteFichier(Request $request, $id): Response
    {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $fichier = $this->getDoctrine()->getRepository(UvCommandecabFichier::class)->find($id);

            $entityManager->remove($fichier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }



    /**

     * @Route("/{id}/livraison/", name="uv_commande_livraison_show", options={"expose"=true}, methods={"GET","POST"})

     */
    public function showLivraison(Request $request, UATCommandefrscabRepository $rep, Breadcrumbs $breadcrumbs, UvCommandecab $commande): Response
    {



     $dc=$this->appService->getDossierCourant();
  
     
     $operations = $this->appService->getOperations('_module_vente', '_cmd_cl', '_livraisons', [true, $commande->getCode()]);


   
      
        //  die;

      //  $data = serialize($array_data);
       // $dataSerialize = htmlentities($data);
       $data=$this->appService->getRestCommandeVente($rep, $commande);

      

        return $this->render('module_vente/uv_commandecab/show_livraison.html.twig', [
            'commande' => $commande,
            'data' =>$data['array_data'] ,
            'dataSerialize' => $data['dataSerialize'],
            'operations' => $operations,
            'prixHtReste' =>$data['prixHtReste'],
            'prixTvaReste' => $data['prixTvaReste'],
            'prixRemiseReste' =>  $data['prixRemiseReste'],
            'prixTotalTtcReste' => $data['prixTotalTtcReste']
            //   'valider'=>$valider
        ]);
    }

    /**
     * @Route("/generer/pdf/verifier", name="uv_commande_pdf_generer_verifier", options={"expose"=true} , methods={"GET","POST"})
     */
    public function pdfGenerer()
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
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $this->session->get('pdflivraisonCab')->getDossier()->getLogo()) && $this->session->get('pdflivraisonCab')->getDossier()->getLogo() != null ? $urlFichierVente . $this->session->get('pdflivraisonCab')->getDossier()->getLogo() : "img/default/default-logo.png";
        $cl = $this->getDoctrine()->getRepository(UPPartenaire::class)->find($this->session->get('pdflivraisonCab')->getClient()->getId());


        $html = $this->renderView('module_vente/uv_deviscab/pdf/livraison.html.twig', [
            'image' => $image,
            'cab' => $this->session->get('pdflivraisonCab'),
            'details' => $this->session->get('pdflivraisonDet'),
            'client' => $cl
        ]);

        ob_get_clean();
        //dump($this->session->get('pdflivraisonCab'));
        // echo $html;die();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
        //die("ok");
    }

    /**
     * @Route("/{id}/{type}/generer/insert", name="uv_commande_generer_insert", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function genererInsert(Request $request, UvCommandecab $commande, $type, UvLivraisoncabRepository $UvLivraisoncabRepository,UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository): Response
    {
  
        if($commande->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
            return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
        }

       // $mc = $this->session->get('moduleCourantUgouvVente');
       // $dc = $this->session->get('dossierCourantUgouvVente');
       $dc=$this->appService->getDossierCourant();

  
        $entityManager = $this->getDoctrine()->getManager();


        $tp=$commande->getTypecmd() ? $commande->getTypecmd()->getV():null;

        $reste = $request->request->get('reste');
        $errors = array();
        $data = json_decode(($request->request->get('dataSerialize')));


        if (empty($request->request->get('refDocAsso')) || empty($request->request->get('dateDocAsso'))) {
            $errors[] = "Veuillez remplir tous les champs obligatoires";
            return $this->json(['errors' => $errors]);
        }


        $count = 0;
        $count2 = 0;
        $count3 = 0;
        foreach ($data as $key => $article) {
            $id = $article->id;
            if (isset($reste["$id"])) {
                if ($reste["$id"] > $article->reste) {
                    $errors[] = "la quantite de l'article :(" . $article->titre . ") saisie est de " . $reste[$id] . " la quantite reste a livre c'est : " . $article->reste;
                }
                if ($reste[$id] < 0) {
                    $errors[] = "La quantite de l'article :(" . $article->titre . ") saisie est de: " . $reste[$id] . " est invalide veuillez donnez une quantite superieur ou egale a zero";
                }
                if ($article->reste == 0) {
                    $count++;
                }
                if ($article->reste > 0 && $reste[$id] == 0) {
                    $count2++;
                }
                if ($article->reste > 0 && $reste[$id] > 0) {
                    $count3++;
                }
            }
        }

        //  dump($count2);
        //die;


        if (count($reste) == $count2 || ($count3 == 0 && count($errors) == 0)) {
            $errors[] = "Veuillez saisie au moins un article";
        }

        if (count($reste) == $count) {
            $errors[] = "Aucune quanite dispobile a livre.";
        }




        if (count($errors) > 0) {
            return $this->json(['errors' => $errors]);
        }

        $livraisonArr = array();
        $livraisonCab = new UvLivraisoncab();
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

        $cat=null;

        if(in_array($commande->getClient()->getCategorie()->getK(), ['externe', 'externe es']) or ($commande->getDossier()->getIsEntreprise() == 1 and $commande->getClient()->getCategorie()->getK() == "interne")){
            $cat='E';
            $ppiceliv = $entityManager->getRepository(PPiece::class)->find(63);


        }elseif($commande->getClient()->getCategorie()->getK()=='interne'){
            $cat='I';
            $ppiceliv = $entityManager->getRepository(PPiece::class)->find(64);

        }
        $livraisonCab->setCode($UvLivraisoncabRepository->GetLastCode($cat));
        
        $livraisonCab->setPPiece($ppiceliv);
        $livraisonCab->setPositionActuel('creer');
        $livraisonCab->setActive(true);
        $entityManager->persist($livraisonCab);

        /*changer le statut au niveau de la table commande*/
        $commande->setStLiv('L');
        $entityManager->persist($commande);
        // $entityManager->flush();
        // $entityManager->flush();
     //   $dc = $this->session->get('dossierCourantUgouvVente');
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->findOneBy(['id' => $dc->getId()]);
        foreach ($commande->getDetails() as $key => $commandeDetail) {

            $resteQuantite = $reste[$commandeDetail->getArticle()->getId()];

            $somme = 0;
            //    dump($detailsDevis->getArticle()->getUmouvementStocks());
            //  die;
            foreach ($commandeDetail->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
                //   dump($detailsDevis->getArticle());
                if ($mouv->getDossier()->getId() == $dc->getId()) {
                    $somme += $mouv->getQuantite() * $mouv->getAjoSup();
                }
            }
            if ($commandeDetail->getArticle()->getGererEnStock() == true && $commandeDetail->getArticle()->getVerificationStock() == true) {

                if ($somme == 0 && $resteQuantite != 0) {
                    return $this->json(['empty' => 'ex', 'message' => ['title' => 'warning', 'text' => 'le stock pour l\'article' . $commandeDetail->getArticle()->getCode() . '  est vide.']]);
                } elseif ($somme < $resteQuantite) {
                    return $this->json(['empty' => 'ex', 'message' => ['title' => 'warning', 'text' => 'la quantite saisie l\'article ' . $commandeDetail->getArticle()->getCode() . ' est superieure a la quantite en stock.']]);
                }
            }



            if ($resteQuantite > 0) {
                $livraisonDet = new UvLivraisondet();
                $livraisonDet->setArticle($commandeDetail->getArticle());
                $livraisonDet->setQuantite(floatval($resteQuantite));
                $livraisonDet->setTva($commandeDetail->getTva());
                $livraisonDet->setObservation($commandeDetail->getObservation());
                $livraisonDet->setPrixunitaire($commandeDetail->getPrixunitaire());
                $livraisonDet->setUnite($commandeDetail->getUnite());


                $livraisonDet->setRemise($commandeDetail->getRemise());
                

                $livraisonDet->setCab($livraisonCab);
                $livraisonArr[] = $livraisonDet;
                $entityManager->persist($livraisonDet);

               // dump($livraisonDet->getArticle()->getGererEnStock());die;
    if($livraisonDet->getArticle()->getGererEnStock()){
           /* Mouvement stock  */
           $movementS= new UmouvementStock();
           $movementS->setArticle($livraisonDet->getArticle());
           $movementS->setDepot($livraisonDet->getArticle()->getDepot());
           $movementS->setUserCreated($this->getUser());
           $movementS->setPrixttc($livraisonDet->getPrixTtc());
           $movementS->setPrixunitaire($livraisonDet->getPrixunitaire());
           $movementS->setRemise($livraisonDet->getRemise());
           $movementS->setQuantite($livraisonDet->getQuantite());
           $movementS->setTva($livraisonDet->getTva());

           $now = date_create('now');
          
           $movementS->setCreated($now);
           $movementS->setDescription($livraisonDet->getObservation());
        //   $movementS->setCodeInventaire('code inventaire');
           $movementS->setSource('UVL');
           $movementS->setSourceId($livraisonDet->getCab()->getId());
           $movementS->setsourceCode($livraisonDet->getCab()->getCode());
           $movementS->setSourceAbreviation( $livraisonDet->getCab()->getRefdocasso());
           $movementS->setDossier($dossier);
          
           $movementS->setAjoSup('-1');
           $entityManager->persist($movementS);

    }

            }
        }

        if ($type == "verifier") {
            $this->session->set('pdflivraisonCab', $livraisonCab);
            $this->session->set('pdflivraisonDet', $livraisonArr);
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La verification a ete bien effectue .']], 200);
        }



        
      

        if($tp=='COMMANDE'){
          
            $commande->setPositionActuel('livrer');
        
        }
        
        $entityManager->persist($commande);

        if(in_array($livraisonCab->getClient()->getCategorie()->getK(), ['interne', 'externe es', 'externe'])){
            if($livraisonCab->getCommande()->getDevis()->getDemande()) {

                if($livraisonCab->getCommande()->getDevis()->getDemande()->getCommandes()[0]->getPositionActuel() == 'creer')
                {
                    // return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                    return new JsonResponse(['notvalide' => 1, 'message' => ['title' => 'warning', 'text' => 'Impossible de générer un Livraison avant la validation de la Commande dachat .']]);
    
                }
        
                
                $founisseur = $livraisonCab->getCommande()->getDevis()->getDemande()->getCommandes()[0]->getFournisseur();
            
                
                $livraisonFrsCab = new UaTLivraisonfrscab();
                $dossierClient=  $livraisonCab->getClient()->getDossier() ? $livraisonCab->getClient()->getDossier() :null;
        
                
                // $livraisonCab->setCommande($commande); commande frs
                $livraisonFrsCab->setCode($UaTLivraisonfrscabRepository->GetLastCode2($dossierClient, $cat));
        
                $livraisonFrsCab->setDatedocasso($livraisonCab->getDatedocasso());
                $livraisonFrsCab->setRefdocasso($livraisonCab->getCode());
                $livraisonFrsCab->setDescription($livraisonCab->getDescription());
                $livraisonFrsCab->setDossier($dossierClient);
                $livraisonFrsCab->setDevise($livraisonCab->getDevise());
                $livraisonFrsCab->setDatelivraison($commande->getDatecommande());
                $livraisonFrsCab->setFournisseur($founisseur);
                $livraisonFrsCab->setRemise($livraisonCab->getRemise());
                $livraisonFrsCab->setObservation($livraisonCab->getDescription());
                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'RCF', 'abreviation' => 'lvr_prt_rcf']);
                $livraisonFrsCab->setStatut($PStatutgrv);
                if($livraisonCab->getClient()->getCategorie()->getK() == "interne" and $livraisonCab->getDossier()->getIsEntreprise() == 0) {
                    $picecmd = $entityManager->getRepository(PPiece::class)->find(58);
                } else {
                    $picecmd = $entityManager->getRepository(PPiece::class)->find(57);
                }
                $livraisonFrsCab->setPPiece($picecmd);
                
                
                
                $livraisonFrsCab->setRemise($livraisonCab->getRemise());
                $livraisonFrsCab->setDateremise($livraisonCab->getDateremise());
                $livraisonFrsCab->setMtremise($livraisonCab->getMtremise());
                $livraisonFrsCab->setCompteMasse($livraisonCab->getCompteMasse());
                $livraisonFrsCab->setCompteRubrique($livraisonCab->getCompteRubrique());
                $livraisonFrsCab->setComptePoste($livraisonCab->getComptePoste());
                $livraisonFrsCab->setCompte($livraisonCab->getCompte());
                $livraisonFrsCab->setUserCreated($this->getUser());
                $livraisonFrsCab->setActive(true);
                $livraisonFrsCab->setCommande($livraisonCab->getCommande()->getDevis()->getDemande()->getCommandes()[0]);
                if($tp=='COMMANDE'){          
                    $livraisonCab->getCommande()->getDevis()->getDemande()->getCommandes()[0]->setPositionActuel("livrer");        
                }
        
                $entityManager->persist($livraisonFrsCab);
        
        // dd($livraisonDet);
        
        
                    foreach ($commande->getDetails() as $key => $commandeDetail) {
        
                        $resteQuantite = $reste[$commandeDetail->getArticle()->getId()];
            
                        $somme = 0;
                        //    dump($detailsDevis->getArticle()->getUmouvementStocks());
                        //  die;
                        foreach ($commandeDetail->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
                            //   dump($detailsDevis->getArticle());
                            if ($mouv->getDossier()->getId() == $dc->getId()) {
                                $somme += $mouv->getQuantite() * $mouv->getAjoSup();
                            }
                        }
                        if ($commandeDetail->getArticle()->getGererEnStock() == true && $commandeDetail->getArticle()->getVerificationStock() == true) {
            
                            if ($somme == 0 && $resteQuantite != 0) {
                                return $this->json(['empty' => 'ex', 'message' => ['title' => 'warning', 'text' => 'le stock pour l\'article' . $commandeDetail->getArticle()->getCode() . '  est vide.']]);
                            } elseif ($somme < $resteQuantite) {
                                return $this->json(['empty' => 'ex', 'message' => ['title' => 'warning', 'text' => 'la quantite saisie l\'article ' . $commandeDetail->getArticle()->getCode() . ' est superieure a la quantite en stock.']]);
                            }
                        }
            
            
            
                        if ($resteQuantite > 0) {
                            $livraisonDet = new UaTLivraisonfrsdet();
                            $livraisonDet->setArticle($commandeDetail->getArticle());
                            $livraisonDet->setQuantite(floatval($resteQuantite));
                            $livraisonDet->setTva($commandeDetail->getTva());
                            $livraisonDet->setObservation($commandeDetail->getObservation());
                            $livraisonDet->setPrixunitaire($commandeDetail->getPrixunitaire());
                            $livraisonDet->setUnite($commandeDetail->getUnite());
            
            
                            $livraisonDet->setRemise($commandeDetail->getRemise());
                            
            
                            $livraisonDet->setCab($livraisonFrsCab);
                            $livraisonArr[] = $livraisonDet;
                            $entityManager->persist($livraisonDet);
        
            
                        }
                    
                }
        
                $livraisonCab->setRefdocasso($livraisonFrsCab->getCode());
                $entityManager->persist($livraisonCab);
        
                }
            }


        
        $entityManager->flush();
        $entityManager->refresh($livraisonFrsCab);
        $livraisonCab->setRefdocasso($livraisonFrsCab->getCode());
        $entityManager->flush();

        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La generation a ete bien effectue .']], 200);


      
    }




       /**
     * @Route("/desactiver", name="uv_commande__desactiver", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function DesactiverPrecommande(ValidatorInterface $validator, Request $request): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $dossiers = $this->appService->getDossiers();
            
            //
            foreach($dossiers as $val){
                $id[] = $val['id'];
            }
          
       

         
          
         
                
                $id =  $request->request->get('_array_ids');
                $entityManager = $this->getDoctrine()->getManager();
               // dump( $id );
                //die;
                foreach ($id as $key => $value) {
                    $commande = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($value);
             
                    if(count($commande->getLivraison()) > 0){
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La commande '.$commande->getCode() .' contient deja une livraison .']], 200);
                    }
                    
                }
                foreach ($id as $key => $value) {
                    $commande = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($value);
             
                    if(count($commande->getLivraison()) > 0){
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La commande '.$commande->getCode() .' contient deja une livraison .']], 200);
                    }
                    
                    $commande->setActive(false);
                    $entityManager->persist($commande);
                }
                
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La desactivation a ete bien effectue .'], 'data' => "bien"], 200);
          
         
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }




    
        /**
     * @Route("/{id}/type", name="uv_commandecab_type_show", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function typecommande(ValidatorInterface $validator, Request $request, UvCommandecab $commande): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder($commande)
       


            ->add('typecmd', EntityType::class, [
                'class' => PGlobalParamDet::class,
                'query_builder' => function (EntityRepository $er)  {
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

                if($commande->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
                }

                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $commande->setPositionActuel('valider');

                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            }
            return $this->render('module_vente/uv_commandecab/type.html.twig', [
                'commande' => $commande,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }




    /**
     * @Route("/{id}/document/old_sys", name="uv_commandecab_old_sys", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(UvCommandecab $commande, Breadcrumbs $breadcrumbs, $id)
    {

        $repository = $this->getDoctrine()->getRepository(UvCommandedet::class);
        $details = $repository->findBy(['cab' => $commande->getId()]);
        //dump($TAchatdemandeinternedet);
        //dump($tAchatdemandeinternecab);
        //die();
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



        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $commande->getDossier()->getLogo()) && $commande->getDossier()->getLogo() != null ? $urlFichierVente . $commande->getDossier()->getLogo() : "img/default/default-logo.png";
        


        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src'=>'_vente_devis','code'=>$commande->getCode()]);

        $prixTotHT = 0;
        $prixTotNet = 0;
        $TotTva = 0;
        $baseTVA = 0;


        $total = 0;
        foreach ($articleold as  $detail) {
            
        
            $total += $detail->getPrixunitaire();
            
            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * ( 1 + ( $detail->getTva())/100 ));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $net = $prixTotNet - $commande->getRemise();
        // if ($net > 0) {
        //     $devis = $net;
        // } else {
        //     $devis = ($net * -1);
        // }

        // $obj = new nuts($devis, "MAD");
        // $nb = $obj->getFormated(" ", ",");
        // $text = $obj->convert("fr-FR");
        $moins = 'moins ';

            if ($net > 0) {
                $montantfinal =  $net;
                $obj = new nuts($montantfinal, "MAD");
                $nb = $obj->getFormated(" ", ",");
            $text  = $obj->convert("fr-FR");
    
            } else {
                $montantfinal =   $net  * -1;
                $obj = new nuts($montantfinal,"MAD");
                $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
    
            }


        $html = $this->renderView('module_vente/uv_commandecab/pdf/document_old_sys.html.twig', [

            'cab' => $commande,
            'image' => $image,
            'details'=>$articleold,
            'text' => $text

        ]);
        ob_get_clean();

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'

        $dompdf->setPaper("A4", 'portrait');
        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("commande.pdf", [
            "Attachment" => false
        ]);
    }



    /**
     * @Route("/edit/detail/new", name="uv_commandecab_edit_detail_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function newDetail(Request $request,UarticleRepository $UarticleRepository): Response {
        
        $detail = $request->request->get('detail');
        
        $UvCommandedet = new UvCommandedet();
        $UvCommandedet->setArticle($UarticleRepository->find($detail['articleId']));
        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail['uniteId']);
        $UvCommandedet->setUnite($unite);
        $UvCommandedet->setPrixunitaire($detail['prixunitaire']);                
        $UvCommandedet->setQuantite($detail['quantite']);
        $UvCommandedet->setRemise($detail['remise'] ? $detail['remise'] : 0);
        $UvCommandedet->setTva($detail['tva']);
        $UvCommandedet->setObservation($detail['observation']);
        //dump($TAchatdemandeinternedet);die();
        $form_det = $this->createForm(UvCommandedetType::class, $UvCommandedet);
        $form_det->handleRequest($request);

        return $this->render('module_vente/uv_commandecab/_form_detail.html.twig', [
                    'form_det' => $form_det->createView(),
                    'tAchatdemandeinternedet' => $UvCommandedet,
        ]);
    }
      /**
     * @Route("/fusionnementuvcmd", name="uvcommande_generer_fusionnement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function UvFusionnement(ValidatorInterface $validator, Request $request ,UATCommandefrscabRepository $UATCommandefrscabRepository ,UvCommandecabRepository $UvCommandecabRepository): Response {

             $encoders = [new XmlEncoder(), new JsonEncoder()];
             $normalizers = [new ObjectNormalizer()];
             $serializer = new Serializer($normalizers, $encoders);
     
             if ($request->isXmlHttpRequest()) {
               
                 $exist_commande_errors = $commande_valide_errors = null;
                 foreach ($request->request->get('_array_ids') as $key => $value) {
                     $CommandeCompare = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($request->request->get('_array_ids')[0]);
                     
                     $commande = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($value);
                     
                  
                     if (count($commande->getLivraison())>0) {
                         $exist_commande_errors .= $commande->getCode() . "<br/>";
                     }
                     if ($CommandeCompare->getClient()!=$commande->getClient()) {
                         $commande_valide_errors .= $commande->getClient()->getNom() . "<br/>";
                     }
                     
                 }
                 if (!empty($commande_valide_errors)) {
                     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas fusionner plusieurs Commandes clients de different Client , Client(s) : <br/>' .$CommandeCompare->getClient()->getSociete().'<br/>'. $commande_valide_errors  ]], 200);
                 }
     
                 if (!empty($exist_commande_errors)) {
                     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas fusionner ces Commandes clients , Commande(s) : <br/>' . $exist_commande_errors . 'dèja commande(s) .']], 200);
                 }
     
                 $commande = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($request->request->get('_array_ids')[0]);
     
     $commandeFus = new UvCommandecab();
     
     $em = $this->getDoctrine()->getManager();
     
     //$devisFus->setDatedocasso($devis->getDatedocasso());
     //$devisFus->setRefdocasso($devis->getRefdocasso());
     $commandeFus->setDateCommande($commande->getDateCommande());
     $commandeFus->setObservation($commande->getObservation());
     $commandeFus->setDateCommande($commande->getDatecommande());
     $commandeFus->setRefdocasso($commande->getRefdocasso());
     //$commandeFus->setReferenceBci($commande->getReferenceBci());
     $commandeFus->setDossier($commande->getDossier());
     $commandeFus->setClient($commande->getClient());
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
     
     $cat=null;

     $commandeFus->setCode($UvCommandecabRepository->GetLastCode($cat));
     $commandeFus->setPositionActuel('creer');
     $commandeFus->setActive(true);
     
     
     

     $em->persist($commandeFus);
     $em->flush();
     
     foreach ($request->request->get('_array_ids') as $key => $value1) {
         $Commandecab = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($value1);
     if($key==0){
         foreach ($Commandecab->getDetails() as $key => $value) {
         
             $commandeDetail = new UvCommandedet();
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
     
     }else{
     foreach ($Commandecab->getDetails() as $key => $value) {
         $detail = $this->getDoctrine()->getRepository(UvCommandedet::class)->findOneBy(['article' => $value->getArticle(),'cab'=>$commandeFus]);
     
        
         if($detail){
          //   dump($detail);
            // dump($value->getPrixunitaire());
             //die;
            if($detail->getPrixunitaire()>$value->getPrixunitaire()) {
             $detail->setQuantite($value->getQuantite()+$detail->getQuantite());
             // $detail->setPrixttc($detail->getPrixTTcAvecRemise());
     
            }else{
             $detail->setPrixunitaire($value->getPrixunitaire());
             $detail->setTva($value->getTva());
             $detail->setRemise($value->getRemise());
             $detail->setQuantite($value->getQuantite()+$detail->getQuantite());
          //   $detail->setPrixttc($detail->getPrixTTcAvecRemise());
            }
     
         }else{
             $commandeDetail = new UvCommandedet();
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
     $cmdref_id = [];
     foreach ($request->request->get('_array_ids') as $key => $value) {
         $commande1 = $this->getDoctrine()->getRepository(UvCommandecab::class)->find($value);
        //  $commande1->getCode()
         $commande2 = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findOneBy(['refdocasso'=>$commande1->getCode()]);
        //  dd($commande1->getCode(),$commande2->getRefdocasso());
         if (!empty($commande2)) {
             array_push($cmdref_id , $commande2->getId());
         }
      }
    //   dd($cmdref_id);
     $exist_commande_errors = $commande_valide_errors = null;
            foreach ( $cmdref_id as $key => $value) {
                $CommandeCompare1 = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($cmdref_id[0]);
                
                $commande1 = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value);
                
                if (count($commande1->getLivraisons())>0) {
                    $exist_commande_errors .= $commande1->getCode() . "<br/>";
                }
                if ($CommandeCompare1->getFournisseur()!=$commande1->getFournisseur()) {
                    $commande_valide_errors .= $commande1->getFournisseur()->getNom() . "<br/>";
                }

            }
            if (!empty($commande_valide_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas fusionner plusieurs Bon Commande de different Fournisseur , Fournisseur(s) : <br/>' .$CommandeCompare->getFournisseur()->getSociete().'<br/>'. $commande_valide_errors  ]], 200);
            }

            if (!empty($exist_commande_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas fusionner ces Bon Commande , Commande(s) : <br/>' . $exist_commande_errors . 'dèja commande(s) .']], 200);
            }
            $commande = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($cmdref_id[0]);

  $commandeFus1 = new UATCommandefrscab();
  
  // dd($commandeFus);
  
  $em = $this->getDoctrine()->getManager();
  
  //$devisFus->setDatedocasso($devis->getDatedocasso());
  //$devisFus->setRefdocasso($devis->getRefdocasso());
  $commandeFus1->setDateCommande($commande1->getDateCommande());
  $commandeFus1->setObservation($commande1->getObservation());
  $commandeFus1->setDatecommande($commande1->getDatecommande());
  $commandeFus1->setRefdocasso($commande1->getRefdocasso());
  $commandeFus1->setReferenceBci($commande1->getReferenceBci());
  $commandeFus1->setDossier($commande1->getDossier());
  $commandeFus1->setFournisseur($commande1->getFournisseur());
  $commandeFus1->setRemise($commande1->getRemise());
  $commandeFus1->setCompte($commande1->getCompte());
  $commandeFus1->setRemise($commande1->getRemise());
  $commandeFus1->setDateremise($commande1->getDateremise());
  $commandeFus1->setMtremise($commande1->getMtremise());
  $commandeFus1->setDevise($commande1->getDevise());
  
  $ppice = $em->getRepository(PPiece::class)->find(55);
  $commandeFus1->setPPiece($ppice);
  
  $commandeFus1->setCompteMasse($commande1->getCompteMasse());
  $commandeFus1->setCompteRubrique($commande1->getCompteRubrique());
  $commandeFus1->setComptePoste($commande1->getComptePoste());
  $commandeFus1->setCompte($commande1->getCompte());
  
  $commandeFus1->setUserCreated($this->getUser());
  
  $cat=null;
  
  // if($commande->getFournisseur()->getCategorie()->getK()=='externe'){
  //     $cat='E';
  
  // }elseif($commande->getFournisseur()->getCategorie()->getK()=='interne'){
  //     $cat='I';
  // }
  $commandeFus1->setCode($UATCommandefrscabRepository->GetLastCode($cat));
  $commandeFus1->setPositionActuel('creer');
  $commandeFus1->setActive(true);
  
  $em->persist($commandeFus1);
  $em->flush();
  
  foreach ($cmdref_id as $key => $value1) {
      $Commandecab1 = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($value1);
  if($key==0){
      foreach ($Commandecab1->getDetails() as $key => $value2) {
      
          $commandeDetail1 = new UATCommandefrsdet();
          $commandeDetail1->setArticle($value2->getArticle());
          $commandeDetail1->setQuantite($value2->getQuantite());
          $commandeDetail1->setTva($value2->getTva());
         
          $commandeDetail1->setObservation($value2->getObservation());
          $commandeDetail1->setPrixunitaire($value2->getPrixunitaire());
          $commandeDetail1->setUnite($value2->getUnite());
          $commandeDetail1->setRemise($value2->getRemise());
        //  $UvDevisdet->setPrixttc($UvDevisdet->getPrixTTcAvecRemise());
          
          $commandeDetail1->setCab($commandeFus1);
         
          $em->persist($commandeDetail1);
          $em->flush();
         
      }
  
  }else{
  foreach ($Commandecab1->getDetails() as $key => $value) {
      $detail1 = $this->getDoctrine()->getRepository(UATCommandefrsdet::class)->findOneBy(['article' => $value->getArticle(),'cab'=>$commandeFus]);
  
     
      if($detail1){
       //   dump($detail);
         // dump($value->getPrixunitaire());
          //die;
         if($detail1->getPrixunitaire()>$value->getPrixunitaire()) {
          $detail1->setQuantite($value->getQuantite()+$detail1->getQuantite());
          // $detail->setPrixttc($detail->getPrixTTcAvecRemise());
  
         }else{
          $detail1->setPrixunitaire($value->getPrixunitaire());
          $detail1->setTva($value->getTva());
          $detail1->setRemise($value->getRemise());
          $detail1->setQuantite($value->getQuantite()+$detail1->getQuantite());
       //   $detail->setPrixttc($detail->getPrixTTcAvecRemise());
         }
  
      }else{
          $commandeDetail1 = new UATCommandefrsdet();
          $commandeDetail1->setArticle($value->getArticle());
          $commandeDetail1->setQuantite($value->getQuantite());
          $commandeDetail1->setTva($value->getTva());
          $commandeDetail1->setRemise($value->getRemise());
          
          $commandeDetail1->setObservation($value->getObservation());
          $commandeDetail1->setPrixunitaire($value->getPrixunitaire());
          $commandeDetail1->setUnite($value->getUnite());
         
        //  $UvDevisdet->setPrixttc($UvDevisdet->getPrixTTcAvecRemise());
          
          $commandeDetail1->setCab($commandeFus1);
         
          $em->persist($commandeDetail1);
  
      }
  }
  }
     
  $Commandecab1->setParentId($commandeFus1);
  
  $Commandecab1->setActive(false);
  
  
  }
  

     $this->getDoctrine()->getManager()->flush();
     return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'Le fusionnement  a ete bien effectue .']], 200);
     
                
             } else {
                 return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
             }
         } 

         

    

}
