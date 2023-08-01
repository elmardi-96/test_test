<?php

namespace App\Controller\moduleVente;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\nuts;
use App\Entity\User;
use App\Entity\PPiece;
use App\Entity\PUnite;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\ArticleOld;
use App\Entity\PStatutgrv;

use App\Entity\UvDeviscab;
// use App\Entity\UvDevisdet;
use App\Entity\UvDevisdet;

use \App\Service\AppService;
use App\Entity\UPPartenaire;
use App\Form\UvDeviscabType;


use App\Form\UvDevisdetType;
use App\Entity\UvChargedevis;
use App\Entity\UvCommandecab;
use App\Entity\UvCommandedet;



//use App\Entity\ConfPdfType;
//use App\Entity\FormatPapier;
//use App\Entity\UmouvementStock;
//use App\Entity\UmouvementStockEncours;
use App\Entity\UaTechniqueCab;
//use App\Entity\ConfPdfParameter;
use App\Entity\UaTechniqueDet;
use App\Entity\UPPartenaireTy;
use App\Entity\UsersSignature;
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;
use App\Form\UvChargedevisType;
use App\Entity\Usersignaturedoc;
use App\Form\UaTechniqueDetType;
use App\Entity\DevisTechniqueCab;
use App\Entity\DevisTechniqueDet;
use App\Entity\UATCommandefrscab;
//use Symfony\Component\Serializer\Serializer;
//use Symfony\Component\Serializer\Encoder\JsonEncoder;
//use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Entity\UATCommandefrsdet;
//use \App\Repository\UsModuleRepository;
//use App\Repository\PDossierRepository;
use App\Entity\UvDeviscabFichier;
use Doctrine\ORM\EntityRepository;
use App\Form\DevisTechniqueDetType;
use App\Entity\ArticlePlanComptable;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\UarticleRepository;

//uvDeviscabRepository
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Repository\UvDeviscabRepository;
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
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use App\Repository\TAchatdemandeinternecabRepository;
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
 * @Route("vente/deviscab")
 */
class UvDeviscabController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry, AppService $AppService)
    {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
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
     * @Route("/list", name="uv_deviscab_list",options = { "expose" = true } )
     */
    public function ListAction(Request $request, Connection $connection)
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


                if (isset($value['name']) && !empty($value['name']) && $value['searchable'] == "true") {
                    //  dump($value);
                    $where .= " OR " . $value['name'] . " LIKE '%$search%' ";
                }
            }


            $condition = " and (" . substr($where, 3) . ")";

            // echo $condition ; die();
            //$havingCondition = " HAVING (1=1 OR (" . substr($having, 3) . "))"; 
        }




        $sql = "SELECT  cab.id ,cab.old_sys,cab.position_actuel,  cab.code ,cab.description , 
          DATE_FORMAT(cab.datecommande,'%d/%m/%Y') datecommande ,cab.depense , cab.budget,cab.statutsig as signature ,
           DATE_FORMAT(cab.datedevis,'%d/%m/%Y') datedevis , cab.observation , cl.societe  client ,
            st.couleur , st.statut , cab.st_liv , cab.st_fac , cab.st_reg ,achat.code achat,
    
        SUM(det.quantite * det.prixunitaire ) MtHt  ,
        SUM( det.quantite * det.prixunitaire *  (IFNULL(det.remise,0)) /100) remise ,
        SUM(det.quantite * det.prixunitaire * (IFNULL(det.tva,0) /100   * ( 1 - IFNULL(det.remise,0)/100))) MtTva  ,  
        SUM(det.quantite * det.prixunitaire * (1+IFNULL(det.tva,0)/100) * (1-IFNULL(det.remise,0)/100)) MtTot 


            FROM uv_deviscab cab 
          
            left join uv_devisdet det on det.uv_deviscab_id = cab.id
            left JOIN t_achatdemandeinternecab achat on achat.id = cab.demande_id

          
            inner join `u_p_partenaire` cl on cl.id = cab.partenaire_client_id
          
            
            left join p_statutgrv st on st.id = cab.p_statutgrv_id 

           
            where 1= 1 and cab.active = 1 and  cab.p_dossier_id = " . $this->appService->getDossierCourant()->getId();

        $sql .= " GROUP BY cab.id";



        $sql2 = "SELECT * FROM (" . $sql . ") tab where 1=1  " . $condition;
        // dd($sql2);
        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();
        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";


        // echo($sql2); die(); 


        // dump($columns[$request->query->get('order')[0]['column']]['name']); die();



        $data = array();
        foreach ($connection->fetchAll($sql2) as $key => $value) {

            $str = '';
            if ($value['old_sys'] == 1) {
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='" . $value['id'] . "'></i>";
            }
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";
            $url = "<a class='active-link' href='" . $this->generateUrl('uv_deviscab_show', ['id' => $value['id']]) . "'> " . $value['code'] . " </a> " . $str;
            $nestedData[] = $url;
            $nestedData[] = $value['datedevis'];
            $nestedData[] = $value['description'];
            $nestedData[] = $value['achat'];
            $nestedData[] = $value['client'];

            $nestedData[] = number_format($value['MtHt'], 2);
            $nestedData[] = number_format($value['MtTva'], 2);
            $nestedData[] = number_format($value['MtTot'], 2);
            $nestedData[] = number_format($value['budget'], 2);
            $nestedData[] = number_format($value['depense'], 2);
            $UvDeviscab = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($id);
            $nestedData[] = $UvDeviscab->HasCommandeWithIcon()['commande']['icon'];
            $nestedData[] = $UvDeviscab->HasCommandeWithIcon()['livraison']['icon'];
            $nestedData[] = $UvDeviscab->HasCommandeWithIcon()['facture']['icon'];
            $nestedData[] = $UvDeviscab->HasCommandeWithIcon()['reglement']['icon'];
            //    $nestedData[] = $value['positionActuel'] ? implode(" ", array_keys($value['positionActuel'])) : 'null';
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

            //recuperer l'enseble des actions pour cet utilisateur 

            //    dd($this->appService->getOperations('_module_vente', '_de_cl', '_index', true));
            foreach ($this->appService->getOperations('_module_vente', '_de_cl', '_index', true) as $key1 => $value1) {
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
            // dump($operations); die(); 

            // trier les actions selon la position du wokrlow
            if (in_array($value['position_actuel'], ['valider', 'commander'])) {
                unset($operations['_edit'], $operations['_annuler'], $operations['_delete'], $operations['_desactiver'], $operations['_change_dossier']);
            }
            unset($operations['_fusionnement']);
            $array2 = array();

            // recuperer les positions acessible selon le workow 
            if (isset($operations['_workflow'])) {
                unset($operations['_workflow']);
                $obj = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($id);
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


        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );
        $json = json_encode($json_data);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \RuntimeException(json_last_error_msg());
        }

        return new Response(json_encode($json_data));
    }




    //    /**
    //     * @Route("/module/{module_id}/dossier/{dossier_id}/home", name="dossier_courant_vente", methods={"GET","POST"} , options={"expose"=true} )
    //     */
    //    public function getdossiercourantVente(Request $request, UsModuleRepository $UsModuleRepository, PDossierRepository $PDossierRepository, $module_id, $dossier_id): Response {
    //        $module = $UsModuleRepository->find($module_id);
    //        $dossier = $PDossierRepository->find($dossier_id);
    //        $this->session->set('dossierCourantUgouvVente', $dossier);
    //        $this->session->set('moduleCourantUgouvVente', $module);
    //
    //        return $this->render('ugouv/vente/index.html.twig');
    //    }

    /**
     * @Route("/", name="uv_deviscab_index",options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(/* Breadcrumbs $breadcrumbs */): Response
    {


        $operations = $this->appService->getOperations('_module_vente', '_de_cl', '_index', true);
        return $this->render('module_vente/uv_deviscab/index.html.twig', [
            //                    'uv_deviscabs' => $uvDeviscabs,
            //                    'dossiers' => $dossiers,
            //                    'u_p_partenaires' => $upPartenaires,
            //                    'statut' => $statut,
            'operations' => $operations,
        ]);
    }

    /**
     * @Route("/new", name="uv_deviscab_new", methods={"GET","POST"} , options={"expose"=true})
     */
    public function new(Request $request, ValidatorInterface $validator/* , Breadcrumbs $breadcrumbs, UvDeviscabRepository $uvDeviscabRepository, ValidatorInterface $validator */): Response
    {

        //        $mc = $this->session->get('moduleCourantUgouvVente');
        //        $dc = $this->session->get('dossierCourantUgouvVente');
        //        $modules = $this->session->get('modules');
        //
        //
        //
        //        $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //            'module' => '_ugouv_vente',
        //            'sousModule' => '_de_cl',
        //            'operation' => '_new',
        //            'dossier' => $dc->getPrefix()
        //        ]);
        //
        //
        //
        //
        //
        //        /* sous module courant */
        //        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];
        //
        //
        //
        //        /* navigation  */
        //        $breadcrumbs->prependRouteItem("Applications", "app");
        //        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //        $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_index");
        //        $breadcrumbs->addItem("Nouveau");




        $operations = $this->appService->getOperations('_module_vente', '_de_cl', '_new', true);
        $UvDevisdet = new UvDevisdet();
        $form_det = $this->createForm(UvDevisdetType::class, $UvDevisdet);
        $form_det->handleRequest($request);

        $uvDeviscab = new UvDeviscab();
        $uvDeviscab->setDateDevis(new \DateTime());
        $devise = $this->getDoctrine()->getRepository(UPDevise::class)->findOneByCode('MAD');

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant()->getId());
        $checkIfIsImage = $this->getDoctrine()->getManager()->getRepository(PDossier::class)->findBy(['image' => $dossier->getId()]);
        $uvDeviscab->setDossier($dossier);
        $uvDeviscab->setDevise($devise);


        $projets = $marches = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }
        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }



        $form = $this->createForm(UvDeviscabType::class, $uvDeviscab, array('dossier' => $dossier, 'projets' => $projets, 'marches' => $marches, 'checkIfIsImage' => $checkIfIsImage));


        $DevisTechniqueDet = new DevisTechniqueDet();
        $form_technique_det = $this->createForm(DevisTechniqueDetType::class, $DevisTechniqueDet);


        // $form = $this->createForm(UvDeviscabType::class, $uvDeviscab, array('projets' => $projets, 'marches' => $marches));
        $form->handleRequest($request);

        $errors = $validator->validate($uvDeviscab);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }


        return $this->render('module_vente/uv_deviscab/new.html.twig', [
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'devis' => $uvDeviscab,
            'errors_detail' => $error,
            'nameDetail' => 'uv_devisdet',
            'form_technique_det' => $form_technique_det->createView()
        ]);
    }

    /**
     * @Route("/insert", name="uv_deviscab_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insert(
        Request $request,
        ValidatorInterface $validator,
        UvDeviscabRepository $uvDeviscabRepository,
        UarticleRepository $UarticleRepository,
        TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository
    ): Response {

        /* informations modules dossiers Autorises pour cet utilisateur */
        //        $mc = $this->session->get('moduleCourantUgouvVente');
        //        $dc = $this->session->get('dossierCourantUgouvVente');
        //        $modules = $this->session->get('modules');
        //
        //
        //
        $UvDevisdet = new UvDevisdet();
        $form_det = $this->createForm(UvDevisdetType::class, $UvDevisdet);
        $form_det->handleRequest($request);



        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant()->getId());
        //
        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {

            $projets[] = $value->getId();
        }

        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {

            $marches[] = $value->getId();
        }

        $uvDeviscab = new UvDeviscab();

        $uvDeviscab->setDossier($dossier);
        $checkIfIsImage = $this->getDoctrine()->getManager()->getRepository(PDossier::class)->findBy(['image' => $dossier->getId()]);

        //$form = $this->createForm(UvDeviscabType::class, $uvDeviscab, array());
        $form = $this->createForm(UvDeviscabType::class, $uvDeviscab, array('dossier' => $dossier, 'projets' => $projets, 'marches' => $marches, 'checkIfIsImage' => $checkIfIsImage));


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
                if ($uvDeviscab->getType()) {
                    if ($uvDeviscab->getType()->getCode() == 'PRJ' and empty($uvDeviscab->getProjet())) {
                        return $this->json(['empty' => $uvDeviscab, 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un projet pour effectuer cette operation.']]);
                    }
                    if ($uvDeviscab->getType()->getCode() == 'MR' and empty($uvDeviscab->getMarche())) {
                        return $this->json(['empty' => $uvDeviscab, 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un marche pour effectuer cette operation.']]);
                    }
                }
                /* if (empty($detail)) {
                    return $this->json(['empty' => $uvDeviscab, 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner un article au moins pour effectuer cette operation.']]);
                }*/

                if (empty($uvDeviscab->getClient()->getDossier()) && in_array($uvDeviscab->getClient()->getCategorie()->getK(), ['interne', 'externe es'])) {
                    return $this->json(['dossierEmpty' => 1, 'message' => ['title' => 'warning', 'text' => 'Le Fournisseur n\'est lié à aucun dossier.']]);
                }

                $allArticles = json_decode($request->request->get('allArticles'));

                $entityManager = $this->getDoctrine()->getManager();
                foreach ($detail as $key => $value) {
                    $uvDevisdet = new uvDevisdet();
                    $uvDevisdet->setArticle($UarticleRepository->find($value->articleId));
                    if ($value->uniteId != "") {
                        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->uniteId);
                        $uvDevisdet->setUnite($unite);
                    }


                    $uvDevisdet->setObservation($value->observation);
                    $uvDevisdet->setTva($value->tva);
                    $uvDevisdet->setPrixunitaire($value->prixunitaire);
                    $uvDevisdet->setQuantite($value->quantite);
                    // $articlePlanComptable = $entityManager->getRepository(ArticlePlanComptable::class)->findOneBy(['planComptable' => $dossier->getPlanComptable(), 'article' => $UarticleRepository->find($value->articleId)]);
                    // $uvDevisdet->setPlanComptableVente($articlePlanComptable ? $articlePlanComptable->getVente() : null);

                    $uvDevisdet->setCab($uvDeviscab);
                    $uvDevisdet->setRemise($value->remise);
                    $entityManager->persist($uvDevisdet);



                    $DevisTechniqueCab = new DevisTechniqueCab();
                    $DevisTechniqueCab->setDevisdet($uvDevisdet);
                    $DevisTechniqueCab->setReference('test');
                    $entityManager->persist($DevisTechniqueCab);

                    foreach ($allArticles  as $key => $article) {
                        if ($article->AricleSelected ==  $value->articleId) {
                            $DevisTechniqueDet = new DevisTechniqueDet();
                            $DevisTechniqueDet->setQte($article->qte);
                            $DevisTechniqueDet->setPrixUntaire($article->prixUntaire);
                            $DevisTechniqueDet->setTva($article->tva);
                            $DevisTechniqueDet->setRemise($article->remise);
                            $DevisTechniqueDet->setArticle($article->article);
                            $DevisTechniqueDet->setDevisTechniqueCab($DevisTechniqueCab);
                            $entityManager->persist($DevisTechniqueDet);
                        }
                    }
                }
                $uvDeviscab->setDateDevis($form->get('dateDevis')->getData());
                $uvDeviscab->setMtRemise($form->get('mtRemise')->getData());
                $uvDeviscab->setObservation($form->get('observation')->getData());
                $uvDeviscab->setActive(true);
                $uvDeviscab->setUserCreated($this->getUser());
                $cat = null;

                if (in_array($uvDeviscab->getClient()->getCategorie()->getK(), ['externe', 'externe es'])) {
                    $cat = 'E';
                    $ppiceachat = $entityManager->getRepository(PPiece::class)->find(54);

                    $ppiceiddev = $entityManager->getRepository(PPiece::class)->find(60);
                } elseif ($uvDeviscab->getClient()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                    $ppiceachat = $entityManager->getRepository(PPiece::class)->find(53);

                    $ppiceiddev = $entityManager->getRepository(PPiece::class)->find(59);
                }
                // $ppiceiddev = $entityManager->getRepository(PPiece::class)->find(59);


                $uvDeviscab->setCode($uvDeviscabRepository->GetLastCode($dossier, $cat));
                $uvDeviscab->setDossier($dossier);
                $uvDeviscab->setPPiece($ppiceiddev);

                $uvDeviscab->setUserCreated($this->getUser());
                $uvDeviscab->setPositionActuel('creer');
                $entityManager->persist($uvDeviscab);

                if (in_array($uvDeviscab->getClient()->getCategorie()->getK(), ['interne', 'externe es'])) {

                    $dossierFournisseur = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant()->getId());
                    $founisseur = $dossierFournisseur->getPartenaire();

                    // dd($founisseur);
                    // if($founisseur == null)
                    // {
                    //     return $this->json(['empty' => $uvDeviscab, 'message' => ['title' => 'warning', 'Le client n\'est lié à aucun dossier']]);

                    // }


                    $tAchatdemandeinternecab = new TAchatdemandeinternecab();
                    $dossierClient =  $uvDeviscab->getClient()->getDossier() ? $uvDeviscab->getClient()->getDossier() : null;

                    $tAchatdemandeinternecab->setDateDemande($uvDeviscab->getDateDevis());
                    $tAchatdemandeinternecab->setCode($TAchatdemandeinternecabRepository->GetLastCode2($dossierClient, $cat));
                    $tAchatdemandeinternecab->setDossier($dossierClient);
                    

                    if($uvDeviscab->getClient()->getCategorie()->getK() == "interne") {
                        $ppiceiddev = $entityManager->getRepository(PPiece::class)->find(53);
                    } else {
                        $ppiceiddev = $entityManager->getRepository(PPiece::class)->find(54);
                    }
                    $tAchatdemandeinternecab->setPPiece($ppiceiddev);

                    
                    $tAchatdemandeinternecab->setActive(true);
                    $tAchatdemandeinternecab->setDescription($uvDeviscab->getDescription());
                    $tAchatdemandeinternecab->setFournisseur($founisseur);
                    $tAchatdemandeinternecab->setUserCreated($this->getUser());
                    $tAchatdemandeinternecab->setPositionActuel('creer');
                    $tAchatdemandeinternecab->setDevis($uvDeviscab);
                    $tAchatdemandeinternecab->setDevise($uvDeviscab->getDevise());
                    $entityManager->persist($tAchatdemandeinternecab);
                    $uvDeviscab->setDemande($tAchatdemandeinternecab);
                    $entityManager->persist($uvDeviscab);
                    foreach ($detail as $key => $value) {
                        $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                        $tAchatdemandeinternedet->setArticle($UarticleRepository->find($value->articleId));
                        if ($value->uniteId != "") {
                            $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->uniteId);
                            $tAchatdemandeinternedet->setUnite($unite);
                        }


                        $tAchatdemandeinternedet->setObservation($value->observation);
                        $tAchatdemandeinternedet->setTva($value->tva);
                        $tAchatdemandeinternedet->setPrixunitaire($value->prixunitaire);
                        $tAchatdemandeinternedet->setQuantite($value->quantite);
                        $tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
                        $tAchatdemandeinternedet->setRemise($value->remise);
                        $entityManager->persist($tAchatdemandeinternedet);
                    }
                }




                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();
                return $this->json([
                    'data' => array('id' => $uvDeviscab->getId()),
                    'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
                ]);
            }
        }
    }

    /**
     * @Route("/{id}/edit", name="uv_deviscab_edit", options = { "expose" = true }, methods={"GET","POST"})
     */
    public function edit(Request $request, UvDeviscab $uvDeviscab, Breadcrumbs $breadcrumbs, $id, ValidatorInterface $validator): Response
    {


        $uveviscab = new UvDeviscab();
        $errors = $validator->validate($uveviscab);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }

        $operations = $this->appService->getOperations('_module_vente', '_de_cl', '_edit', [true, $uvDeviscab->getCode()]);
        // $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant()->getId());

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant()->getId());
        $projets = $marches = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }
        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }

        $session = new Session();
        $UvDevisdet = new UvDevisdet();

        $form_det = $this->createForm(UvDevisdetType::class, $UvDevisdet);
        $form_det->handleRequest($request);
        //        $dc = $this->session->get('dossierCourantUgouvVente');
        //        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
        //        $projets = array();
        //        foreach ($dossier->getProjets() as $key => $value) {
        //            $projets[] = $value->getId();
        //        }
        //        
        //        $marches = array();
        //        foreach ($dossier->getMarches() as $key => $value) {
        //            $marches[] = $value->getId();
        //        }
        $form = $this->createForm(UvDeviscabType::class, $uvDeviscab, array('dossier' => $dossier, 'projets' => $projets, 'marches' => $marches));
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {
            $uvDeviscab->setDossier($dossier);
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('uv_deviscab_index');
        }
        // dd($uvDeviscab);

        return $this->render('module_vente/uv_deviscab/edit.html.twig', [
            'devis' => $uvDeviscab,
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'operations' => $operations,
            'errors_detail' => $error,
            'nameDetail' => 'uv_devisdet'
        ]);
    }

    /**
     * @Route("/new/devis/detail", name="uv_deviscab_detail", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function DetDevisadd(ValidatorInterface $validator, Request $request): Response
    {

        /*
         * Ajouter une expression de besoin details (articles) 
         * En utilisant Ajax au niveau de validation 
         */

        /*
         * La creation du formulaire 
         */
        $UvDevisdet = new UvDevisdet();
        $form = $this->createForm(UvDevisdetType::class, $UvDevisdet);
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

            $UvDevisdet->setArticle($Uarticle);
            $tva = ($UvDevisdet->getTva() / 100) + 1;
            $UvDevisdet->setPrixttc($UvDevisdet->getPrixTTcAvecRemise());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();
            if ($UvDevisdet->getRemise() == null) {
                $UvDevisdet->setRemise(0);
            }

            $UvDevisdet = array(
                'id' => $UvDevisdet->getArticle()->getId(),
                'titre' => $UvDevisdet->getArticle()->getTitre(),
                'code' => $UvDevisdet->getArticle()->getCode(),
                'observation' => $UvDevisdet->getObservation(),
                'unite' => $UvDevisdet->getUnite() ? $UvDevisdet->getUnite()->getAbreviation() : "",
                'unite_id' => $UvDevisdet->getUnite() ? $UvDevisdet->getUnite()->getId() : "",
                'quantite' => $UvDevisdet->getQuantite(),
                'prixunitaire' => $UvDevisdet->getPrixunitaire(),
                'prixttc' => $UvDevisdet->getPrixttc(),
                'tva' => $UvDevisdet->getTva(),
                'montantRemise' => $UvDevisdet->getPrixRemise(),
                'remise' => $UvDevisdet->getRemise()
            );


            return $this->json([
                'data' => $UvDevisdet,
                'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);
        }
    }

    /**
     * @Route("/{id}/insert/detail", name="uv_devisdet_insert", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function DevisCabsave(ValidatorInterface $validator, Request $request, $id, UarticleRepository $UarticleRepository): Response
    {

        /*
         * La creation du formulaire
         */
        $detail = json_decode($request->request->get('detail'))[0];
        $devvis =  $this->getDoctrine()->getRepository(UvDeviscab::class)->find($id);
        if (isset($detail->id)) {
            // dd("amine");
            $UvDevisdet = $this->getDoctrine()->getRepository(UvDevisdet::class)->find((int)$detail->id);

            // dd($devvis->getDemande());
            if ($devvis->getDemande()) {
                $achatdet = $this->getDoctrine()->getRepository(TAchatdemandeinternedet::class)->findOneBy(['cab' => $devvis->getDemande(), 'article' => $UarticleRepository->find($detail->articleId)]);
            }
        } else {
            $UvDevisdet = new UvDevisdet();
            if ($devvis->getDemande()) {
                $achatdet = new TAchatdemandeinternedet();
            }
        }
        // dd($achatdet);
        //detail demande 


        if ($devvis->getDemande()) {
            $achatdet->setCab($devvis->getDemande());
            $achatdet->setArticle($UarticleRepository->find($detail->articleId));

            if ($detail->uniteId != "") {
                $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail->uniteId);
                $achatdet->setUnite($unite);
            }
            //                    $tAchatdemandeinternedet->setCategorie($uarticle->getCatArticle());
            //                    $tAchatdemandeinternedet->setArticle($uarticle);
            // $tAchatdemandeinternedet->setUnite($value->unite);
            $achatdet->setPrixunitaire($detail->prixunitaire);

            $achatdet->setQuantite($detail->quantite);

            $achatdet->setRemise($detail->remise ? $detail->remise : null);
            $achatdet->setTva($detail->tva);
            $achatdet->setObservation($detail->observation);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($achatdet);

            $entityManager->flush();
        }





        $UvDevisdet->setCab($this->getDoctrine()->getRepository(UvDeviscab::class)->find($id));



        //dump($detail);
        //dump($tAchatdemandeinternedet);die();
        $UvDevisdet->setArticle($UarticleRepository->find($detail->articleId));

        if ($detail->uniteId != "") {
            $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail->uniteId);
            $UvDevisdet->setUnite($unite);
        }
        //                    $tAchatdemandeinternedet->setCategorie($uarticle->getCatArticle());
        //                    $tAchatdemandeinternedet->setArticle($uarticle);
        // $tAchatdemandeinternedet->setUnite($value->unite);
        $UvDevisdet->setPrixunitaire($detail->prixunitaire);

        $UvDevisdet->setQuantite($detail->quantite);

        $UvDevisdet->setRemise($detail->remise ? $detail->remise : null);
        $UvDevisdet->setTva($detail->tva);
        $UvDevisdet->setObservation($detail->observation);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($UvDevisdet);

        $entityManager->flush();

        return $this->json([
            'data' => "saved",
            'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/update", name="uv_deviscab_update", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, UvDeviscab $UvDeviscab): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantUgouvVente');
        // $dc = $this->session->get('dossierCourantUgouvVente');
        // $modules = $this->session->get('modules');
        $dc = $this->appService->getDossierCourant();





        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }

        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }


        $form = $this->createForm(UvDeviscabType::class, $UvDeviscab, array('dossier' => $dc, 'projets' => $projets, 'marches' => $marches));


        $form->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form);
        //$errors = $validator->validate($form, null, ['devis']);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */

        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }

        if ($UvDeviscab->getType()) {
            if ($UvDeviscab->getType()->getCode() == 'PRJ' and empty($UvDeviscab->getProjet())) {
                return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un projet pour effectuer cette operation.']]);
            }
            if ($UvDeviscab->getType()->getCode() == 'MR' and empty($UvDeviscab->getMarche())) {
                return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un marche pour effectuer cette operation.']]);
            }
        }

        $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'cr_dv_cl']);

        $UvDeviscab->setDossier($dossier);
        $UvDeviscab->setStatut($PStatutgrv);
        $UvDeviscab->setUserCreated($this->getUser());
        $this->getDoctrine()->getManager()->flush();
        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/show", name="uv_deviscab_show" , options={"expose"=true}   , methods={"GET"})
     */
    public function show(UvDeviscab $UvDeviscab, Breadcrumbs $breadcrumbs, $id): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */


        //        $mc = $this->session->get('moduleCourantUgouvVente');
        //        $dc = $this->session->get('dossierCourantUgouvVente');
        //        $modules = $this->session->get('modules');
        //
        //        $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //            'module' => '_ugouv_vente',
        //            'sousModule' => '_de_cl',
        //            'operation' => '_show',
        //            'dossier' => $dc->getPrefix()
        //        ]);
        //        /* operations autorises pour cet utilisateur */
        //        $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations'];
        //
        //
        //
        //
        //        /* sous module courant */
        //        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];
        //
        //
        //        /* navigation  */
        //        $breadcrumbs->prependRouteItem("Applications", "app");
        //        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //        $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_index");
        //        $breadcrumbs->addItem($UvDeviscab->getCode());


        $operations = $this->appService->getOperations('_module_vente', '_de_cl', '_show', [true, $UvDeviscab->getCode()]);






        return $this->render('module_vente/uv_deviscab/show.html.twig', [
            'devis' => $UvDeviscab,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/documents", name="uv_deviscab_documents" , options={"expose"=true}   , methods={"GET"})
     */
    public function documents(UvDeviscab $UvDeviscab): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */


        //        $mc = $this->session->get('moduleCourantUgouvVente');
        //        $dc = $this->session->get('dossierCourantUgouvVente');
        //        $modules = $this->session->get('modules');
        //
        //        $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //            'module' => '_ugouv_vente',
        //            'sousModule' => '_de_cl',
        //            'operation' => '_documents',
        //            'dossier' => $dc->getPrefix()
        //        ]);
        //        /* operations autorises pour cet utilisateur */
        //        $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations'];
        //        /* sous module courant */
        //        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];
        //        /* navigation  */
        //        $breadcrumbs->prependRouteItem("Applications", "app");
        //        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //        $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_index");
        //        $breadcrumbs->addRouteItem($UvDeviscab->getCode(), "uv_deviscab_show", ['id' => $UvDeviscab->getId()]);
        //        $breadcrumbs->addItem('Docs/Impression');


        $operations = $this->appService->getOperations('_module_vente', '_de_cl', '_documents', [true, $UvDeviscab->getCode()]);
        return $this->render('module_vente/uv_deviscab/documents.html.twig', [
            'devis' => $UvDeviscab,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/delete", name="uv_deviscab_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteDevisCab(Request $request, UvDeviscabRepository $UvDeviscabRepository): Response
    {
        if ($request->isXmlHttpRequest()) {
            try {
                $entityManager = $this->getDoctrine()->getManager();

                $deviscabs = $UvDeviscabRepository->findBy(['id' => $request->request->get('_array_ids')]);
                if (!empty($deviscabs)) {
                    foreach ($deviscabs as $key => $deviscab) {

                        if (count($deviscab->getCommandes()) > 0) {

                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 200);
                        }

                        if (count($deviscab->getFichiers()) > 0) {

                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 200);
                        }
                    }
                    foreach ($deviscabs as $key => $deviscab) {
                        $deviscab->setIsdeleted(true);

                        // $entityManager->remove($deviscab);
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









    //    /**
    //     * @Route("/{id}/statut", name="uv_deviscab_statut", options={"expose"=true} ,  methods={"GET","POST"})
    //     */
    //    public function statut(ValidatorInterface $validator, Request $request, UvDeviscab $UvDeviscab): Response {
    //
    //        /**
    //         * verifier s'il s'ajit de ajax request
    //         */
    //        if ($request->isXmlHttpRequest()) {
    //            $form = $this->createFormBuilder($UvDeviscab)
    //                    ->add('statut', EntityType::class, [
    //                        'class' => PStatutgrv::class,
    //                        'query_builder' => function (EntityRepository $er) {
    //                            return $er->createQueryBuilder('a')
    //                            ->where("a.module = 'DV'")
    //                            ->orderBy('a.statut', 'ASC');
    //                        },
    //                        'choice_label' => 'statut',
    //                        'placeholder' => 'Choix statut ',
    //                    ])
    //                    ->getForm();
    //            $form->handleRequest($request);
    //
    //            if ($form->isSubmitted()) {
    //                $errors = $validator->validate($form);
    //
    //                /*
    //                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
    //                 */
    //                if (count($errors) > 0) {
    //                    return $this->json(['errors' => $errors]);
    //                }
    //
    //                $this->getDoctrine()->getManager()->flush();
    //
    //                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
    //            }
    //            return $this->render('module_vente/uv_deviscab/statut.html.twig', [
    //                        'uv_deviscab' => $UvDeviscab,
    //                        'form' => $form->createView(),
    //            ]);
    //        } else {
    //            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
    //        }
    //    }

    //    /**
    //     * @Route("/{id}/archiver", name="uv_deviscab_archive", options={"expose"=true} ,  methods={"GET","POST"})
    //     */
    //    public function Archive(Request $request, UvDeviscab $UvDeviscab): Response {
    //
    //        /**
    //         * verifier s'il s'ajit de ajax request
    //         */
    //        if ($request->isXmlHttpRequest()) {
    //
    //            if ($UvDeviscab->getStatut()->getAbreviation() == 'cmd_dv_cl') {
    //                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'archiver une demande dèja traite.']], 403);
    //            }
    //
    //
    //            $UvDeviscab->setActive(false);
    //            $this->getDoctrine()->getManager()->flush();
    //            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'archivage  a ete bien effectue .']], 200);
    //        } else {
    //            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
    //        }
    //    }
    //
    //    /**
    //     * @Route("/{id}/generer", name="uv_deviscab_generer", options={"expose"=true} ,  methods={"GET","POST"})
    //     */
    //    public function generer(ValidatorInterface $validator, Request $request, UvLivraisoncabRepository $UvLivraisoncabRepository, UvDeviscab $UvDeviscab): Response {
    //        /**
    //         * verifier s'il s'ajit de ajax request
    //         */
    //        if ($request->isXmlHttpRequest()) {
    //            $form = $this->createFormBuilder($UvDeviscab)
    //                    ->add('dateLivprv', DateType::class, ['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
    //                    ->getForm();
    //            $form->handleRequest($request);
    //
    //            if ($form->isSubmitted()) {
    //                $errors = $validator->validate($form);
    //                /*
    //                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
    //                 */
    //                if (count($errors) > 0) {
    //                    return $this->json(['errors' => $errors]);
    //                }
    //                $em = $this->getDoctrine()->getManager();
    //                $UvLivraisoncab = new UvLivraisoncab();
    //                //dump($request->request->get('form')); 
    //                $UvDeviscab->setStLiv('L');
    //                $UvLivraisoncab->setCode($UvLivraisoncabRepository->GetLastCode());
    //                $UvLivraisoncab->setActive(true);
    //                $UvLivraisoncab->setDatelivraison(new \DateTime($request->request->get('form')['dateLivprv']));
    //                $UvLivraisoncab->setResponsable($UvDeviscab->getResponsable());
    //                $UvLivraisoncab->setRemise($UvDeviscab->getRemise());
    //                $UvLivraisoncab->setMtremise($UvDeviscab->getMtremise());
    //                $UvLivraisoncab->setDossier($UvDeviscab->getDossier());
    //                $UvLivraisoncab->setCompteMasse($UvDeviscab->getCompteMasse());
    //                $UvLivraisoncab->setCompteRubrique($UvDeviscab->getCompteRubrique());
    //                $UvLivraisoncab->setComptePoste($UvDeviscab->getComptePoste());
    //                $UvLivraisoncab->setCompte($UvDeviscab->getCompte());
    //                $UvLivraisoncab->setDepense($UvDeviscab->getDepense());
    //                $UvLivraisoncab->setClient($UvDeviscab->getClient());
    //                $UvLivraisoncab->setDevis($UvDeviscab);
    //                $UvLivraisoncab->setUserCreated($this->getUser());
    //                $UvLivraisoncab->setPositionActuel(array('creer' => 1));
    //                //$UvLivraisoncab->setPourCompte($UvDeviscab->getPourCompte());
    //               // $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'LVR', 'abreviation' => 'cr_lvr_cl']);
    //                $UvLivraisoncab->setStatut($PStatutgrv);
    //                $em->persist($UvLivraisoncab);
    //                foreach ($UvDeviscab->getDetails() as $key => $value) {
    //                    $UvLivraisondet = new UvLivraisondet();
    //                    $UvLivraisondet->setCab($UvLivraisoncab);
    //                    $UvLivraisondet->setArticle($value->getArticle());
    //                    $UvLivraisondet->setQuantite($value->getQuantite());
    //                    $UvLivraisondet->setPrixunitaire($value->getPrixunitaire());
    //                    $UvLivraisondet->setPrixttc($value->getPrixttc());
    //                    $UvLivraisondet->setTva($value->getTva());
    //                    $UvLivraisondet->setRemise($value->remise);
    //                    $UvLivraisondet->setObservation($value->getObservation());
    //
    //                    $em->persist($UvLivraisondet);
    //                }
    //                $em->flush();
    //                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
    //            }
    //            return $this->render('module_vente/uv_deviscab/generer.html.twig', [
    //                        'uv_deviscab' => $UvDeviscab,
    //                        'form' => $form->createView(),
    //            ]);
    //        } else {
    //            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
    //        }
    //    }

    /**
     * @Route("/{id}/tiersDevis", name="checkIceDevis", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function uv_deviscab_commande($id)
    {
        $ice="";
        $em = $this->getDoctrine()->getManager();
        $UPPartenaire = $em->getRepository(UPPartenaire::class)->find($id);
        $ice= $UPPartenaire->getIceO();
       
        if($ice){
            return $this->json('ok');
        }else{
            return $this->json('empty');  
        }
        // $ice="";
        // $em = $this->getDoctrine()->getManager();
        // $devisCab = $em->getRepository(UvDeviscab::class)->find($id);
        // $ice= $devisCab->getClient()->getIceO();
       
        // if($ice){
        //     return $this->json('ok');
        // }else{
        //     return $this->json(['check' => 'empty', 'tiers' =>$devisCab->getClient()->getNom(), 'idTiers'=>$devisCab->getClient()->getId()]);  
        // }
        
    }
    /**
     * @Route("/{id}/{ice}/ice/devis", name="mise_a_jour_ice_devis", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function AddICE($id, $ice ,Request $request)
    {
        $nom_tiers= $request->request->get('nom_tiers'); 
        $tel_tiers= $request->request->get('tel_tiers'); 
        $em = $this->getDoctrine()->getManager();
        $UPPartenaire = $em->getRepository(UPPartenaire::class)->find($id);
        $UPPartenaire->setIceO($ice);
        $UPPartenaire->setDateMsj( date_create('now'));
        $UPPartenaire->setUserMsj($this->getUser());
        $UPPartenaire->SetNomContact($nom_tiers);
        $UPPartenaire->setTelContact($tel_tiers);

        $em->persist($UPPartenaire);
        $em->flush();
        return $this->json('ok');
    }

    /**
     * @Route("/{id}/commande", name="uv_deviscab_commande", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function commande(ValidatorInterface $validator, Breadcrumbs $breadcrumbs, Request $request, UvDeviscab $UvDeviscab, UATCommandefrscabRepository $UATCommandefrscabRepository, UvCommandecabRepository $rep): Response
    {







        $form = $this->createFormBuilder($UvDeviscab)
            ->add('datedocasso', DateType::class, ['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->add('refdocasso', TextType::class, ['mapped' => false, 'constraints' => [new NotBlank()]])
            ->add('datecommande', DateType::class, ['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if($UvDeviscab->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
                return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
            }
    

            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $em = $this->getDoctrine()->getManager();
            $commande = new UvCommandecab();
            $commande->setDevis($UvDeviscab);
            $commande->setDatedocasso(new \DateTime($request->request->get('form')['datedocasso']));
            $commande->setRefdocasso($request->request->get('form')['refdocasso']);
            $commande->setDateCommande(new \DateTime($request->request->get('form')['datecommande']));
            $commande->setDescription($UvDeviscab->getDescription());

            $commande->setDossier($UvDeviscab->getDossier());
            $commande->setClient($UvDeviscab->getClient());
            $commande->setRemise($UvDeviscab->getRemise());
            $commande->setObservation($UvDeviscab->getObservation());
            $commande->setCompte($UvDeviscab->getCompte());
            $commande->setProjet($UvDeviscab->getProjet());
            $commande->setSousprojet($UvDeviscab->getSousprojet());
            $commande->setMarche($UvDeviscab->getMarche());
            $commande->setMarchesous($UvDeviscab->getMarchesous());
            $commande->setRemise($UvDeviscab->getRemise());
            $commande->setDateremise($UvDeviscab->getDateremise());
            $commande->setMtremise($UvDeviscab->getMtremise());
            $commande->setDevise($UvDeviscab->getDevise());
            $commande->setCompteMasse($UvDeviscab->getCompteMasse());
            $commande->setCompteRubrique($UvDeviscab->getCompteRubrique());
            $commande->setComptePoste($UvDeviscab->getComptePoste());
            $commande->setCompte($UvDeviscab->getCompte());
            $commande->setUserCreated($this->getUser());
            $cat = null;

            if (in_array($UvDeviscab->getClient()->getCategorie()->getK(), ['externe', 'externe es']) or ($UvDeviscab->getDossier()->getIsEntreprise() == 1 and $UvDeviscab->getClient()->getCategorie()->getK() == "interne")) {
                $cat = 'E';
                $ppicecod = $em->getRepository(PPiece::class)->find(62);
            } elseif ($UvDeviscab->getClient()->getCategorie()->getK() == 'interne') {
                $cat = 'I';
                $ppicecod = $em->getRepository(PPiece::class)->find(61);
            }
            $commande->setPPiece($ppicecod);

            
            $commande->setCode($rep->GetLastCode($cat));
            //   $commande->setPositionActuel('creer');
            $commande->setActive(true);
            $em->persist($commande);
            foreach ($UvDeviscab->getDetails() as $key => $devisDetail) {
                $commandeDetail = new UvCommandedet();
                $commandeDetail->setArticle($devisDetail->getArticle());
                $commandeDetail->setQuantite($devisDetail->getQuantite());

                
                $commandeDetail->setTva($devisDetail->getTva());
                $commandeDetail->setObservation($devisDetail->getObservation());
                $commandeDetail->setPrixunitaire($devisDetail->getPrixunitaire());
                $commandeDetail->setUnite($devisDetail->getUnite());
                $commandeDetail->setRemise($devisDetail->getRemise());
                $commandeDetail->setPrixttc($commandeDetail->getPrixTTcAvecRemise());

                $commandeDetail->setCab($commande);
                $em->persist($commandeDetail);
            }


            if (in_array($UvDeviscab->getClient()->getCategorie()->getK(), ['interne', 'externe es', 'externe'])) {

                $demande = null;

                $commandefrs = new UATCommandefrscab();
                if($commande->getDevis()->getDemande()) {
                
                    if ($commande->getDevis()->getDemande()->getPositionActuel() == 'creer') {
                        // return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                        return new JsonResponse(['notvalide' => 1, 'message' => ['title' => 'warning', 'text' => 'Impossible de générer un devis avant la validation de la demande dachat .']]);
                    }



                    $dossierClient =  $UvDeviscab->getClient()->getDossier() ? $UvDeviscab->getClient()->getDossier() : null;

                    $dossierFournisseur = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant()->getId());
                    $founisseur = $dossierFournisseur->getPartenaire();
                    $devise = 1;
                    // $commandefrs->setCode($UATCommandefrscabRepository->GetLastCode2($dossierClient, $cat));
                    $commandefrs->setActive(true);
                    $commandefrs->setDatecommande(new \DateTime($request->request->get('form')['datecommande']));
                    $commandefrs->setRefdocasso($commande->getCode());
                    $now = date_create('now');
                    $commandefrs->setDatelivprv($now);
                    $commandefrs->setFournisseur($UvDeviscab->getDemande()->getFournisseur());
                    if($UvDeviscab->getClient()->getCategorie()->getK() == "interne" and $UvDeviscab->getDossier()->getIsEntreprise() == 0) {
                        $picecommand = $em->getRepository(PPiece::class)->find(55);
                    } else {
                        $picecommand = $em->getRepository(PPiece::class)->find(56);
                    }

                    $commandefrs->setPPiece($picecommand);
                    $commandefrs->setReferenceBci($demande);
                    $commandefrs->setObservation($UvDeviscab->getDescription());
                    $commandefrs->setDossier($dossierClient);
                    $commandefrs->setCompteMasse($UvDeviscab->getCompteMasse());
                    $commandefrs->setCompteRubrique($UvDeviscab->getCompteRubrique());
                    $commandefrs->setComptePoste($UvDeviscab->getComptePoste());
                    $commandefrs->setCompte($UvDeviscab->getCompte());
                    $commandefrs->setDevise($UvDeviscab->getDevise());
                    $commandefrs->setRemise($UvDeviscab->getRemise());
                    $commandefrs->setCreated($now);
                    $commandefrs->setUserCreated($this->getUser());
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'cr_bcf']);
                    $commandefrs->setPositionActuel('creer');
                    $commandefrs->setStatut($PStatutgrv);
                    $commandefrs->setReferenceBci($UvDeviscab->getDemande());
                    //dd($UvDeviscab);
                    $em->persist($commandefrs);

                    foreach ($UvDeviscab->getDetails() as $key => $value) {
                        $commandeDetail = new UATCommandefrsdet();
                        $commandeDetail->setCab($commandefrs);
                        $commandeDetail->setArticle($value->getArticle());
                        $commandeDetail->setQuantite($value->getQuantite());
                        $commandeDetail->setUnite($value->getUnite());
                        $commandeDetail->setPrixunitaire($value->getPrixunitaire());
                        //$commandeDetail->setPrixttc($value->getPrixttc());
                        $commandeDetail->setRemise($value->getRemise());
                        $commandeDetail->setTva($value->getTva());
                        $commandeDetail->setObservation($value->getObservation());
                        $em->persist($commandeDetail);
                    }

                    $commande->setRefdocasso($commandefrs->getCode());
                    $em->persist($commande);

                    $commande->getDevis()->getDemande()->setPositionActuel("commander");
                    $em->flush();
                    $em->refresh($commandefrs);
                }
                
                
            }

            // $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DA', 'abreviation' => 'tr']);
            // $demande->setStatut($PStatutgrv);
            // $demande->setPositionActuel('commander');


        



            $workflow = $this->workflowRegistry->get($UvDeviscab);

            $workflow->apply($UvDeviscab, 'apres_valider_commander');
            $this->get('doctrine')->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }

        return $this->render('module_vente/uv_deviscab/commande.html.twig', [
            'devis' => $UvDeviscab,
            'form' => $form->createView(),


        ]);
    }

    /**
     * @Route("/{id}/document/pdf", name="uv_deviscab_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function devisPdf(UvDeviscab $UvDeviscab, Breadcrumbs $breadcrumbs, $id)
    {
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($UvDeviscab->getCode(), $generator::TYPE_CODE_128,1,30);
       
        $repository = $this->getDoctrine()->getRepository(UvDevisdet::class);
        $UvDevisdet = $repository->findBy(['cab' => $UvDeviscab->getId()]);
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
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvDeviscab->getDossier()->getLogo()) && $UvDeviscab->getDossier()->getLogo() != null ? $urlFichierVente . $UvDeviscab->getDossier()->getLogo() : "img/default/default-logo.png";

        $prixTotHT = 0;
        $prixTotNet = 0;
        $TotTva = 0;
        $baseTVA = 0;



        $total = 0;
        foreach ($UvDeviscab->getDetails() as  $detail) {


            $total += $detail->getPrixunitaire();

            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + ($detail->getTva()) / 100));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $net = $prixTotNet - $UvDeviscab->getRemise();
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
           
            
            $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvDeviscab, 'postion' => 1, 'tableName' => 9]);
            $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvDeviscab, 'postion' => 2, 'tableName' => 9]);
            $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvDeviscab, 'postion' => 3, 'tableName' => 9]);
            $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvDeviscab, 'postion' => 4, 'tableName' => 9]);
            
            $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
            $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
            $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
            $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $html = $this->renderView('module_vente/uv_deviscab/pdf/document.html.twig', [
            'cab' => $UvDeviscab,
            'image' => $image,
            'text' => $text,
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
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }


    /**
     * @Route("/{id}/document2/pdf", name="uv_deviscab2_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function devisPdf2(UvDeviscab $UvDeviscab, Breadcrumbs $breadcrumbs, $id)
    {
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($UvDeviscab->getCode(), $generator::TYPE_CODE_128,1,30);
       

        $repository = $this->getDoctrine()->getRepository(UvDevisdet::class);
        $UvDevisdet = $repository->findBy(['cab' => $UvDeviscab->getId()]);
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
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvDeviscab->getDossier()->getLogo()) && $UvDeviscab->getDossier()->getLogo() != null ? $urlFichierVente . $UvDeviscab->getDossier()->getLogo() : "img/default/default-logo.png";

        $prixTotHT = 0;
        $prixTotNet = 0;
        $TotTva = 0;
        $baseTVA = 0;



        $total = 0;
        foreach ($UvDeviscab->getDetails() as  $detail) {


            $total += $detail->getPrixunitaire();

            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + ($detail->getTva()) / 100));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $net = $prixTotNet - $UvDeviscab->getRemise();
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


        $devistechnique = $this->getDoctrine()->getRepository(DevisTechniqueCab::class)->findAll();
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvDeviscab, 'postion' => 1, 'tableName' => 9]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvDeviscab, 'postion' => 2, 'tableName' => 9]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvDeviscab, 'postion' => 3, 'tableName' => 9]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvDeviscab, 'postion' => 4, 'tableName' => 9]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $html = $this->renderView('module_vente/uv_deviscab/pdf/document2.html.twig', [
            'cab' => $UvDeviscab,
            'image' => $image,
            'text' => $text,
            'devistechnique' => $devistechnique,
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
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }



    /**
     * @Route("/{id}/edit/detail", name="uv_devisdet_edit_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function editDetail(Request $request, UvDevisdet $UvDevisdet): Response
    {
        // $UvDevisdet = new UvDevisdet();
        $form_det = $this->createForm(UvDevisdetType::class, $UvDevisdet);
        $form_det->handleRequest($request);

        return $this->render('module_vente/uv_deviscab/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'uv_devisdet' => $UvDevisdet,
        ]);
    }

    /**
     * @Route("{id}/{token}/delete/detail", name="uv_devisdet_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function deleteDetail(Request $request, UvDevisdet $UvDevisdet, $token): Response
    {

        if ($this->isCsrfTokenValid('delete' . $UvDevisdet->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            if ($UvDevisdet->getCab()->getDemande()) {

                $achatdet = $this->getDoctrine()->getRepository(TAchatdemandeinternedet::class)->findOneBy(['cab' => $UvDevisdet->getCab()->getDemande(), 'article' => $UvDevisdet->getArticle()]);
                $entityManager->remove($achatdet);
            }


            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UvDevisdet);
            $entityManager->flush();

            return $this->json([
                'data' => "deleted",
                'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }

    /**
     * @Route("/{id}/update/detail", name="uv_devisdet_update_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updateDetail(ValidatorInterface $validator, Request $request, UvDevisdet $UvDevisdet): Response
    {

        $form_det = $this->createForm(UvDevisdetType::class, $UvDevisdet);

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
        // $UvDevisdet->setPrixttc($UvDevisdet->getPrixTTcAvecRemise());
        $this->getDoctrine()->getManager()->flush();
        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/charges", name="uv_devis_charges", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function charges(ValidatorInterface $validator, Request $request, Breadcrumbs $breadcrumbs, UvDeviscab $UvDeviscab, $id): Response
    {
        //        /* informations modules dossiers Autorises pour cet utilisateur */
        //        $mc = $this->session->get('moduleCourantUgouvVente');
        //        $dc = $this->session->get('dossierCourantUgouvVente');
        //        $modules = $this->session->get('modules');
        //
        //        $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //            'module' => '_ugouv_vente',
        //            'sousModule' => '_de_cl',
        //            'operation' => '_charges',
        //            'dossier' => $dc->getPrefix()
        //        ]);
        //        /* operations autorises pour cet utilisateur */
        //        $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations'];
        //
        //        /* sous module courant */
        //        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];
        //
        //
        //
        //        /* navigation  */
        //        $breadcrumbs->prependRouteItem("Applications", "app");
        //        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //        $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_index");
        //        $breadcrumbs->addRouteItem($UvDeviscab->getCode(), "uv_deviscab_show", ['id' => $UvDeviscab->getId()]);
        //        $breadcrumbs->addItem("Charges");
        $operations = $this->appService->getOperations('_module_vente', '_de_cl', '_charges', [true, $UvDeviscab->getCode()]);
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
        if (isset($UvDeviscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        } elseif (isset($UvDeviscab->getPositionActuel()['commander'])) {
            $valider = 'commander';
        }
        return $this->render('module_vente/uv_deviscab/charges.html.twig', [
            'uv_chargedevis' => $UvChargedevisAll,
            'form' => $form->createView(),
            'devis' => $UvDeviscab,
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("{id}/{token}/delete/charges", name="uv_chargedevis_delete", options={"expose"=true}, methods={"DELETE"})
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
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="uv_devis_apply_transitions")
     */
    public function applyTransition(Request $request, UvDeviscab $devis)
    {
        if($devis->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
            return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
        }

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($devis);
        if ($workflow->can($devis, $transition)) {
            try {
                $devis->setUserUpdated($this->getUser());
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a encours */
                if (in_array($transition, ['apres_creer_encours'])) {
                    $devis->setUserEncours($this->getUser());
                    $devis->setDateEncours(new \DateTime());
                }



                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a creer */
                if (in_array($transition, ['apres_annuler_creer', 'apres_archiver_creer', 'apres_encours_creer'])) {
                    $devis->setUserCreated($this->getUser());
                    $devis->setCreated(new \DateTime());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a annule */
                if (in_array($transition, ['apres_creer_annuler'])) {
                    $commandes = array();
                    if (count($devis->getCommandes()) > 0) {
                        foreach ($devis->getCommandes() as $key => $value) {
                            $url = $this->generateUrl('uv_commandecab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }
                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de passer a l'etat encours , 
                                                   ce devis client dispose deja une commande  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer cette commande"
                        ]]);
                    }
                    //                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'an_dv_cl']);
                    //                    $devis->setStatut($PStatutgrv);
                    $devis->setDateAnnuler(new \DateTime());
                    $devis->setUserAnnuler($this->getUser());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a archive */
                if (in_array($transition, ['apres_annuler_archiver'])) {
                    //  $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'an_bcf'])
                    $devis->setActive(0);
                    $devis->setDateArchiver(new \DateTime());
                    $devis->setUserArchiver($this->getUser());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a valide */
                $valide = 0;
                if (in_array($transition, ['apres_encours_valider'])) {
                    $valide = 1;
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'ge_dv_cl']);

                    $devis->setStatut($PStatutgrv);
                    $devis->setDateValider(new \DateTime());
                    $devis->setUserValider($this->getUser());
                }
                if (in_array($transition, ['apres_valider_commander'])) {
                    $valide = 2;
                    $devis->setDateCommander(new \DateTime());
                    $devis->setUserCommander($this->getUser());
                }



                if (in_array($transition, ['apres_valider_encours_annuler'])) {
                    $commandes = array();
                    if (count($devis->getCommandes()) > 0) {
                        foreach ($devis->getCommandes() as $key => $value) {

                            $url = $this->generateUrl('uv_commandecab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }




                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de passer a l'etat encours , 
                                                   ce devis client dispose deja une commande  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer cette commande"
                        ]]);
                    }
                }


                if (in_array($transition, ['apres_commander_valider'])) {
                    $commandes = array();
                    if (count($devis->getCommandes()) > 0) {
                        foreach ($devis->getCommandes() as $key => $value) {

                            $url = $this->generateUrl('uv_commandecab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }




                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible d'annuler la commande , 
                                                   ce devis client dispose deja de(s) commande(s)  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer cette(s) commande(s) "
                        ]]);
                    }
                }





                $workflow->apply($devis, $transition);
                $this->get('doctrine')->getManager()->flush();
                if ($valide == 1) {
                    return $this->json(['code' => 201, 'id' => $devis->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                }
                if ($valide == 2) {
                    return $this->json(['code' => 202, 'id' => $devis->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                }
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    //    /**
    //
    //     * @Route("/{id}/show/articles", name="uv_devis_articles_show", options={"expose"=true}, methods={"GET"})
    //
    //     */
    //    public function showArticles(Request $request, Breadcrumbs $breadcrumbs, UvDeviscab $devis): Response {
    //
    //
    //        /* informations modules dossiers Autorises pour cet utilisateur */
    //
    //
    //        $mc = $this->session->get('moduleCourantUgouvVente');
    //        $dc = $this->session->get('dossierCourantUgouvVente');
    //        $modules = $this->session->get('modules');
    //
    //        /* Verifier si cet utilisateur il peut acceder a cette operation */
    //        if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations']['_show'])) {
    //            return new Response("Operation non autorie", 403);
    //        }
    //
    //
    //        /* sous module courant */
    //        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];
    //
    //        /* navigation  */
    //        $breadcrumbs->prependRouteItem("Applications", "app");
    //        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
    //        $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_index");
    //
    //        $breadcrumbs->addRouteItem($devis->getCode(), "uv_deviscab_show", ['id' => $devis->getId()]);
    //        $breadcrumbs->addItem('Articles');
    //
    //        $valider = 'No';
    //        if (isset($devis->getPositionActuel()['valider'])) {
    //            $valider = 'valider';
    //        } elseif (isset($devis->getPositionActuel()['commander'])) {
    //            $valider = 'commander';
    //        }
    //        return $this->render('module_vente/uv_deviscab/show_articles.html.twig', [
    //                    'devis' => $devis,
    //                    'valider' => $valider
    //        ]);
    //    }

    /**

     * @Route("/{id}/show/suivi", name="uv_devis_suivi_show", options={"expose"=true}, methods={"GET"})

     */
    public function showsuivi(Request $request, Breadcrumbs $breadcrumbs, UvDeviscab $devis): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */


        //        $mc = $this->session->get('moduleCourantUgouvVente');
        //        $dc = $this->session->get('dossierCourantUgouvVente');
        //        $modules = $this->session->get('modules');
        //
        //
        //
        //        $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //            'module' => '_ugouv_vente',
        //            'sousModule' => '_de_cl',
        //            'operation' => '_suivi',
        //            'dossier' => $dc->getPrefix()
        //        ]);
        //        /* operations autorises pour cet utilisateur */
        //        $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations'];
        //
        //        /* Verifier si cet utilisateur il peut acceder a cette operation */
        //        if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations']['_show'])) {
        //            return new Response("Operation non autorie", 403);
        //        }
        //
        //
        //        /* sous module courant */
        //        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];
        //
        //        /* navigation  */
        //        $breadcrumbs->prependRouteItem("Applications", "app");
        //        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //        $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_index");
        //
        //        $breadcrumbs->addRouteItem($devis->getCode(), "uv_deviscab_show", ['id' => $devis->getId()]);
        //        $breadcrumbs->addItem('Suivi des operations');


        $operations = $this->appService->getOperations('_module_vente', '_de_cl', '_suivi', [true, $devis->getCode()]);


        $valider = 'No';
        if (isset($devis->getPositionActuel()['valider'])) {
            $valider = 'valider';
        } elseif (isset($devis->getPositionActuel()['commander'])) {
            $valider = 'commander';
        }

        return $this->render('module_vente/uv_deviscab/show_suivi.html.twig', [
            'devis' => $devis,
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**

     * @Route("/{id}/show/historique", name="uv_devis_show_historique", options={"expose"=true}, methods={"GET"})

     */
    public function showhistorique(Request $request, UvDeviscab $devis): Response
    {

        return $this->render('module_vente/uv_deviscab/show_historique.html.twig', [
            'devis' => $devis,
            'historiques' => '', //$this->getHistorique($devis)
        ]);
    }

    /**
     * @Route("/{id}/fichier", name="uv_devis_fichiers", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fichier(ValidatorInterface $validator, Request $request, UvDeviscab $devis): Response
    {






        /**
         * verifier s'il s'ajit de ajax request
         */
        $fichier = new UvDeviscabFichier();
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
            $fichier->setDevis($devis);
            $fichier->setOriginalName($fichier->getImageFile()->getClientOriginalName());
            $fichier->setMimeType($fichier->getImageFile()->getClientMimeType());
            $entityManager->persist($fichier);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }




        return $this->render('module_vente/uv_deviscab/fichiers.html.twig', [
            'devis' => $devis,
            'form' => $form->createView(),

        ]);
    }

    /**
     * @Route("/{id}/deletefichier", name="uv_devis_fichiers_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteFichier(Request $request, $id): Response
    {
        if ($request->isXmlHttpRequest()) {
            $entityManager = $this->getDoctrine()->getManager();
            $fichier = $this->getDoctrine()->getRepository(UvDeviscabFichier::class)->find($id);
            $entityManager->remove($fichier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("/{id}/livraison/", name="uv_devis_livraison_show", options={"expose"=true}, methods={"GET"})
     */
    public function showLivraison(Request $request, UATCommandefrscabRepository $rep, Breadcrumbs $breadcrumbs, UvDeviscab $devis): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */

        //
        //        $mc = $this->session->get('moduleCourantUgouvVente');
        //        $dc = $this->session->get('dossierCourantUgouvVente');
        //        $modules = $this->session->get('modules');
        //
        //
        //
        //        $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //            'module' => '_ugouv_vente',
        //            'sousModule' => '_de_cl',
        //            'operation' => '_livraisons',
        //            'dossier' => $dc->getPrefix()
        //        ]);
        //        /* operations autorises pour cet utilisateur */
        //        $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations'];
        //
        //
        //
        //
        //        /* sous module courant */
        //        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];
        //
        //        /* navigation  */
        //        $breadcrumbs->prependRouteItem("Applications", "app");
        //        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //        $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_index");
        //
        //        $breadcrumbs->addRouteItem($devis->getCode(), "uv_deviscab_show", ['id' => $devis->getId()]);
        //        $breadcrumbs->addItem('Livraison');


        $operations = $this->appService->getOperations('_module_vente', '_de_cl', '_livraisons', [true, $devis->getCode()]);



        $array_data = array();
        $prixHtReste = 0;
        $prixTotalTtcReste = 0;
        $prixRemiseReste = 0;
        $prixTvaReste = 0;

        foreach ($devis->getDetails() as $key => $detailsDevis) {


            $array_data[$key]['id'] = $detailsDevis->getArticle()->getId();
            $array_data[$key]['titre'] = $detailsDevis->getArticle()->getTitre();
            if ($detailsDevis->getArticle()->getGererEnStock() == true) {
                $array_data[$key]['gerer'] = 'Oui';
            } else {
                $array_data[$key]['gerer'] = 'Non';
            }
            $somme = 0;
            //    dump($detailsDevis->getArticle()->getUmouvementStocks());
            //  die;
            foreach ($detailsDevis->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
                //   dump($detailsDevis->getArticle());
                if ($mouv->getDossier()->getId() == $dc->getId()) {
                    $somme += $mouv->getQuantite() * $mouv->getAjoSup();
                }
            }
            $array_data[$key]['code'] = $detailsDevis->getArticle()->getCode();
            $array_data[$key]['somme'] = $somme;

            $array_data[$key]['prixUnitaire'] = $detailsDevis->getPrixUnitaire();
            $array_data[$key]['tva'] = $detailsDevis->getTva();
            $array_data[$key]['quantite'] = $detailsDevis->getQuantite();
            $array_data[$key]['remise'] = $detailsDevis->getRemise();

            $quantiteLivre = 0;
            foreach ($devis->getLivraison() as $key2 => $livraison) {
                foreach ($livraison->getDetails() as $key3 => $detailsLivraison) {
                    if ($detailsLivraison->getArticle()->getId() == $detailsDevis->getArticle()->getId()) {
                        $quantiteLivre += $detailsLivraison->getQuantite();
                    }
                }
            }

            $array_data[$key]['quantiteEncoursVente'] = $rep->QuantiteEncoursVente($detailsDevis->getArticle()->getId(), $dc->getId())['nb'];
            $array_data[$key]['quantiteEncoursAchat'] = $rep->QuantiteEncoursAchat($detailsDevis->getArticle()->getId(), $dc->getId())['nb'];


            $array_data[$key]['quantiteLivre'] = $quantiteLivre;
            $reste = $detailsDevis->getQuantite() - $quantiteLivre;
            $array_data[$key]['reste'] = $reste;

            $UvDevisdet = new UvDevisdet();
            $UvDevisdet->setQuantite($reste);
            $UvDevisdet->setPrixUnitaire($detailsDevis->getPrixUnitaire());
            $UvDevisdet->setTva($detailsDevis->getTva());
            $UvDevisdet->setRemise($detailsDevis->getRemise());
            $prixHtReste = $prixHtReste + $UvDevisdet->getPrixHt();
            $prixTvaReste = $prixTvaReste + $UvDevisdet->getPrixTva();
            $prixRemiseReste = $prixRemiseReste + $UvDevisdet->getPrixRemise();
            $prixTotalTtcReste = $prixTotalTtcReste + $UvDevisdet->getTotalPrixTtc();
        }
        //  die;

        $data = serialize($array_data);
        $dataSerialize = htmlentities($data);






        return $this->render('module_vente/uv_deviscab/show_livraison.html.twig', [
            'devis' => $devis,
            'data' => $array_data,
            'dataSerialize' => $dataSerialize,
            'operations' => $operations,
            'prixHtReste' => number_format((float) $prixHtReste, 2) . ' ' . $devis->getDevise()->getDesignation(),
            'prixTvaReste' => number_format((float) $prixTvaReste, 2) . ' ' . $devis->getDevise()->getDesignation(),
            'prixRemiseReste' => $prixRemiseReste != 0 ? number_format((float) $prixRemiseReste, 2) . ' ' . $devis->getDevise()->getDesignation() : null,
            'prixTotalTtcReste' => number_format((float) $prixTotalTtcReste, 2) . ' ' . $devis->getDevise()->getDesignation()
            //   'valider'=>$valider
        ]);
    }

    /**
     * @Route("/generer/pdf/verifier", name="uv_devis_pdf_generer_verifier", options={"expose"=true} , methods={"GET","POST"})
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
     * @Route("/{id}/{type}/generer/insert", name="uv_devis_generer_insert", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function genererInsert(Request $request, UvDeviscab $devis, $type, UvLivraisoncabRepository $UvLivraisoncabRepository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();



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
        $livraisonCab->setDevis($devis);
        $livraisonCab->setDatedocasso(new \DateTime($request->request->get('dateDocAsso')));
        $livraisonCab->setRefdocasso($request->request->get('refDocAsso'));
        $livraisonCab->setDescription($request->request->get('description'));
        // $livraisonCab->setRefdocasso($devis->getRefCommande());
        $livraisonCab->setDossier($devis->getDossier());
        // $livraisonCab->setDevise($devis->getDevise());
        $livraisonCab->setDatelivraison($devis->getDatecommande());
        $livraisonCab->setClient($devis->getClient());
        $livraisonCab->setRemise($devis->getRemise());
        $livraisonCab->setObservation($devis->getObservation());


        // $livraisonCab->setReferenceBci($uatCommandefrscab->getReferenceBci());
        $livraisonCab->setCompte($devis->getCompte());
        $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'LVR', 'abreviation' => 'cr_lvr_cl']);
        $livraisonCab->setStatut($PStatutgrv);

        $livraisonCab->setRemise($devis->getRemise());
        $livraisonCab->setDateremise($devis->getDateremise());
        $livraisonCab->setMtremise($devis->getMtremise());
        $livraisonCab->setDevise($devis->getDevise());
        $livraisonCab->setCompteMasse($devis->getCompteMasse());
        $livraisonCab->setCompteRubrique($devis->getCompteRubrique());
        $livraisonCab->setComptePoste($devis->getComptePoste());
        $livraisonCab->setCompte($devis->getCompte());
        $livraisonCab->setUserCreated($this->getUser());
        $cat = null;

        if ($devis->getClient()->getCategorie()->getK() == 'externe') {
            $cat = 'E';
        } elseif ($devis->getClient()->getCategorie()->getK() == 'interne') {
            $cat = 'I';
        }
        $livraisonCab->setCode($UvLivraisoncabRepository->GetLastCode($cat));
        $livraisonCab->setPositionActuel(array('creer' => 1));
        $livraisonCab->setActive(true);
        $entityManager->persist($livraisonCab);

        /* changer le statut au niveau de la table commande */
        $devis->setStLiv('L');
        $entityManager->persist($devis);
        // $entityManager->flush();
        $dc = $this->session->get('dossierCourantUgouvVente');
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->findOneBy(['id' => $dc->getId()]);
        foreach ($devis->getDetails() as $key => $devisDetail) {

            $resteQuantite = $reste[$devisDetail->getArticle()->getId()];

            $somme = 0;
            //    dump($detailsDevis->getArticle()->getUmouvementStocks());
            //  die;
            foreach ($devisDetail->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
                //   dump($detailsDevis->getArticle());
                if ($mouv->getDossier()->getId() == $dc->getId()) {
                    $somme += $mouv->getQuantite() * $mouv->getAjoSup();
                }
            }
            if ($devisDetail->getArticle()->getGererEnStock() == true) {

                if ($somme == 0 && $resteQuantite != 0) {
                    return $this->json(['empty' => 'ex', 'message' => ['title' => 'warning', 'text' => 'le stock pour l\'article' . $devisDetail->getArticle()->getCode() . '  est vide.']]);
                } elseif ($somme < $resteQuantite) {
                    return $this->json(['empty' => 'ex', 'message' => ['title' => 'warning', 'text' => 'la quantite saisie l\'article ' . $devisDetail->getArticle()->getCode() . ' est superieure a la quantite en stock.']]);
                }
            }





            if ($resteQuantite > 0) {
                $livraisonDet = new UvLivraisondet();
                $livraisonDet->setArticle($devisDetail->getArticle());
                $livraisonDet->setQuantite(intval($resteQuantite));
                $livraisonDet->setTva($devisDetail->getTva());
                $livraisonDet->setObservation($devisDetail->getObservation());
                $livraisonDet->setPrixunitaire($devisDetail->getPrixunitaire());
                $livraisonDet->setUnite($devisDetail->getUnite());


                $livraisonDet->setRemise($devisDetail->getRemise());
                $livraisonDet->setPrixttc($livraisonDet->getPrixTTcAvecRemise());

                $livraisonDet->setCab($livraisonCab);
                $livraisonArr[] = $livraisonDet;
                $entityManager->persist($livraisonDet);
            }
        }

        if ($type == "verifier") {
            $this->session->set('pdflivraisonCab', $livraisonCab);
            $this->session->set('pdflivraisonDet', $livraisonArr);
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La verification a ete bien effectue .']], 200);
        }



        $entityManager->flush();

        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La generation a ete bien effectue .']], 200);


        return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
    }



    /**
     * @Route("/fusionnement", name="uv_devis_generer_fusionnement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function Fusionnement(ValidatorInterface $validator, Request $request, UvDeviscabRepository $uvDeviscabRepository): Response
    {

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {




            $exist_commande_errors = $devis_valide_errors = null;
            foreach ($request->request->get('_array_ids') as $key => $value) {

                $devisCompare = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($request->request->get('_array_ids')[0]);
                $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($value);



                if (count($devis->getCommandes()) > 0) {
                    $exist_commande_errors .= $devis->getCode() . "<br/>";
                }
                if ($devisCompare->getClient() != $devis->getClient()) {
                    $devis_valide_errors .= $devis->getClient()->getSociete() . "<br/>";
                }
            }
            if (!empty($devis_valide_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas fusionner plusieurs devis de different client , Client(s) : <br/>' . $devisCompare->getClient()->getSociete() . '<br/>' . $devis_valide_errors]], 200);
            }

            if (!empty($exist_commande_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas fusionner ces devis , Commande(s) : <br/>' . $exist_commande_errors . 'dèja commande(s) .']], 200);
            }


            $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($request->request->get('_array_ids')[0]);

            $devisFus = new UvDeviscab();



            $em = $this->getDoctrine()->getManager();

            //$devisFus->setDatedocasso($devis->getDatedocasso());
            //$devisFus->setRefdocasso($devis->getRefdocasso());
            $devisFus->setDateCommande($devis->getDateCommande());
            $devisFus->setDescription($devis->getDescription());
            $devisFus->setDateDevis($devis->getDateDevis());


            $devisFus->setDossier($devis->getDossier());
            $devisFus->setClient($devis->getClient());
            $devisFus->setRemise($devis->getRemise());
            $devisFus->setObservation($devis->getObservation());
            $devisFus->setCompte($devis->getCompte());
            $devisFus->setProjet($devis->getProjet());
            $devisFus->setSousprojet($devis->getSousprojet());
            $devisFus->setMarche($devis->getMarche());
            $devisFus->setMarchesous($devis->getMarchesous());
            $devisFus->setRemise($devis->getRemise());
            $devisFus->setDateremise($devis->getDateremise());
            $devisFus->setMtremise($devis->getMtremise());
            $devisFus->setDevise($devis->getDevise());
            $devisFus->setCompteMasse($devis->getCompteMasse());
            $devisFus->setCompteRubrique($devis->getCompteRubrique());
            $devisFus->setComptePoste($devis->getComptePoste());
            $devisFus->setCompte($devis->getCompte());
            $devisFus->setUserCreated($this->getUser());

            $cat = null;

            if ($devis->getClient()->getCategorie()->getK() == 'externe') {
                $cat = 'E';
                $ppiceiddev = $em->getRepository(PPiece::class)->find(60);
            } elseif ($devis->getClient()->getCategorie()->getK() == 'interne') {
                $cat = 'I';
                $ppiceiddev = $em->getRepository(PPiece::class)->find(59);
            }
            $devisFus->setCode($uvDeviscabRepository->GetLastCode($this->appService->getDossierCourant(), $cat));
            $devisFus->setPositionActuel('creer');
            $devisFus->setPPiece($ppiceiddev);
            $devisFus->setActive(true);

            $em->persist($devisFus);
            $em->flush();

            foreach ($request->request->get('_array_ids') as $key => $value1) {
                $deviscab = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($value1);
                if ($key == 0) {
                    foreach ($deviscab->getDetails() as $key => $value) {

                        $UvDevisdet = new UvDevisdet();
                        $UvDevisdet->setArticle($value->getArticle());
                        $UvDevisdet->setQuantite($value->getQuantite());
                        $UvDevisdet->setTva($value->getTva());

                        $UvDevisdet->setObservation($value->getObservation());
                        $UvDevisdet->setPrixunitaire($value->getPrixunitaire());
                        $UvDevisdet->setUnite($value->getUnite());
                        $UvDevisdet->setRemise($value->getRemise());
                        //  $UvDevisdet->setPrixttc($UvDevisdet->getPrixTTcAvecRemise());

                        $UvDevisdet->setCab($devisFus);

                        $em->persist($UvDevisdet);
                        $em->flush();
                    }
                } else {
                    foreach ($deviscab->getDetails() as $key => $value) {
                        $detail = $this->getDoctrine()->getRepository(UvDevisdet::class)->findOneBy(['article' => $value->getArticle(), 'cab' => $devisFus]);


                        if ($detail) {
                            //   dump($detail);
                            // dump($value->getPrixunitaire());
                            //die;
                            if ($detail->getPrixunitaire() > $value->getPrixunitaire()) {
                                $detail->setQuantite($value->getQuantite() + $detail->getQuantite());
                                $detail->setPrixttc($detail->getPrixTTcAvecRemise());
                            } else {
                                $detail->setPrixunitaire($value->getPrixunitaire());
                                $detail->setTva($value->getTva());
                                $detail->setRemise($value->getRemise());
                                $detail->setQuantite($value->getQuantite() + $detail->getQuantite());
                                //   $detail->setPrixttc($detail->getPrixTTcAvecRemise());
                            }
                        } else {
                            $UvDevisdet = new UvDevisdet();
                            $UvDevisdet->setArticle($value->getArticle());
                            $UvDevisdet->setQuantite($value->getQuantite());
                            $UvDevisdet->setTva($value->getTva());
                            $UvDevisdet->setRemise($value->getRemise());

                            $UvDevisdet->setObservation($value->getObservation());
                            $UvDevisdet->setPrixunitaire($value->getPrixunitaire());
                            $UvDevisdet->setUnite($value->getUnite());

                            //  $UvDevisdet->setPrixttc($UvDevisdet->getPrixTTcAvecRemise());

                            $UvDevisdet->setCab($devisFus);

                            $em->persist($UvDevisdet);
                        }
                    }
                }

                $deviscab->setParentId($devisFus);

                $deviscab->setActive(false);
            }
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'Le fusionnement  a ete bien effectue .']], 200);





            //dump($devisFus->getCode());
            //die;

        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }


    /**
     * @Route("/desactiver", name="uv_devis_desactiver", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function DesactiverDevis(ValidatorInterface $validator, Request $request): Response
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







            $id =  $request->request->get('_array_ids');
            $entityManager = $this->getDoctrine()->getManager();
            // dump( $id );
            //die;
            foreach ($id as $key => $value) {
                $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($value);

                if (count($devis->getCommandes()) > 0) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le devis ' . $devis->getCode() . ' contient deja une commande .']], 200);
                }
            }
            foreach ($id as $key => $value) {
                $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($value);

                if (count($devis->getCommandes()) > 0) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le devis ' . $devis->getCode() . ' contient deja une commande .']], 200);
                }

                $devis->setActive(false);
                $entityManager->persist($devis);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La desactivation a ete bien effectue  .'], 'data' => "bien"], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }
    /**
     * @Route("/annuler", name="uv_devis_annuler", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function AnnulerDevis(ValidatorInterface $validator, Request $request): Response
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







            $id =  $request->request->get('_array_ids');
            $entityManager = $this->getDoctrine()->getManager();
            // dump( $id );
            //die;
            foreach ($id as $key => $value) {
                $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($value);

                if (count($devis->getCommandes()) > 0) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le devis ' . $devis->getCode() . ' contient deja une commande .']], 200);
                }
            }
            foreach ($id as $key => $value) {
                $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($value);

                if (count($devis->getCommandes()) > 0) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le devis ' . $devis->getCode() . ' contient deja une commande .']], 200);
                }

                $devis->setActive(false);
                $devis->setDateAnnuler(new \DateTime('now'));
                $devis->setUserAnnuler($this->getUser());
                $devis->setPositionActuel("annuler");
                $entityManager->persist($devis);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => "L'annulation a ete bien effectue."], 'data' => "bien"], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }



    /**
     * @Route("multiple/duppliqer", name="uv_devis_multiple_duppliquer", options={"expose"=true}, methods={"POST"})
     */
    public function MultipleDuppliquer(Request $request, UvDeviscabRepository $UvDeviscabRepository): Response
    {

        if ($request->isXmlHttpRequest()) {
            /**
             * Recuperer les informations du statut , si la demande interne leur statut est traite alors on peut pas supprimer cette demande
             */
            /**
             * verifier si un element du tableau a supprimer leurs satatut est traite
             */
            $UvDeviscabs = $UvDeviscabRepository->findBy(['id' => $request->request->get('_array_ids')]);
            //  dump( $request->request->get('_array_ids'));
            //  die;
            $entityManager = $this->getDoctrine()->getManager();
            if (!empty($UvDeviscabs)) {



                foreach ($UvDeviscabs as $key => $UvDeviscab) {
                    $devis = new UvDeviscab();

                    $cat = null;

                    if ($UvDeviscab->getClient()->getCategorie()->getK() == 'externe') {
                        $cat = 'E';
                        $ppiceiddev = $entityManager->getRepository(PPiece::class)->find(60);

                        
                    } elseif ($UvDeviscab->getClient()->getCategorie()->getK() == 'interne') {
                        $cat = 'I';
                        $ppiceiddev = $entityManager->getRepository(PPiece::class)->find(59);

                    }

                    $devis->setCode($UvDeviscabRepository->GetLastCode($UvDeviscab->getDossier(), $cat));



                    $devis->setDescription($UvDeviscab->getDescription());
                    $devis->setPPiece($ppiceiddev);
                    $devis->setDateDevis($UvDeviscab->getDateDevis());
                    $devis->setRemise($UvDeviscab->getRemise());
                    $devis->setDateRemise($UvDeviscab->getDateRemise());
                    $devis->setMtRemise($UvDeviscab->getMtRemise());


                    $devis->setBudget($UvDeviscab->getBudget());
                    $devis->setType($UvDeviscab->getType());
                    $devis->setDepense($UvDeviscab->getDepense());
                    $devis->setObservation($UvDeviscab->getObservation());
                    $devis->setProjet($UvDeviscab->getProjet());
                    $devis->setSousprojet($UvDeviscab->getSousprojet());


                    $devis->setNature($UvDeviscab->getNature());
                    $devis->setRefCommande($UvDeviscab->getRefCommande());
                    $devis->setDateCommande($UvDeviscab->getDateCommande());
                    $devis->setStatut($UvDeviscab->getStatut());
                    $devis->setStLiv($UvDeviscab->getStLiv());
                    $devis->setStFac($UvDeviscab->getStFac());
                    $devis->setStReg($UvDeviscab->getStReg());






                    $devis->setClient($UvDeviscab->getClient());
                    $devis->setDossier($UvDeviscab->getDossier());
                    $devis->setCompte($UvDeviscab->getCompte());
                    $devis->setActive(TRUE);
                    $devis->setDevise($UvDeviscab->getDevise());
                    $devis->setMarche($UvDeviscab->getMarche());
                    $devis->setMarchesous($UvDeviscab->getMarchesous());



                    $devis->setBudjet($UvDeviscab->getBudjet());
                    $devis->setOldSys($UvDeviscab->getOldSys());
                    $devis->setRemisFA($UvDeviscab->getRemisFA());
                    $devis->setDateRemisFA($UvDeviscab->getDateRemisFA());
                    $devis->setCodePieceTrsft($UvDeviscab->getCodePieceTrsft());
                    $devis->setInit($UvDeviscab->getInit());
                    $devis->setDateLivraisonPrevue($UvDeviscab->getDateLivraisonPrevue());
                    $devis->setModePaiement($UvDeviscab->getModePaiement());
                    $devis->setConditionReglement($UvDeviscab->getConditionReglement());
                    $devis->setNotePublic($UvDeviscab->getNotePublic());
                    $devis->setNotePrive($UvDeviscab->getNotePrive());





                    foreach ($UvDeviscab->getDetails() as $key2 => $detail) {



                        $UvDevisdet = new UvDevisdet();


                        $UvDevisdet->setArticle($detail->getArticle());


                        $UvDevisdet->setUnite($detail->getUnite());

                        $UvDevisdet->setPrixunitaire($detail->getPrixunitaire());

                        $UvDevisdet->setQuantite($detail->getQuantite());

                        $UvDevisdet->setRemise($detail->getRemise());
                        $UvDevisdet->setTva($detail->getTva());
                        $UvDevisdet->setObservation($detail->getObservation());
                        $UvDevisdet->setCab($devis);
                        $entityManager->persist($UvDevisdet);
                    }



                    $entityManager->persist($devis);
                    $entityManager->flush();
                }











                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La duplication a ete bien effectue.']], 200);
            } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
            }
        }
    }




    /**
     * @Route("/{id}/document/old_sys", name="uv_devis_document_old_sys", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(UvDeviscab $UvDeviscab, Breadcrumbs $breadcrumbs)
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
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $UvDeviscab->getDossier()->getLogo()) && $UvDeviscab->getDossier()->getLogo() != null ? $urlFichierAchat . $UvDeviscab->getDossier()->getLogo() : "img/default/default-logo.png";



        $prixTotHT = 0;
        $prixTotNet = 0;
        $TotTva = 0;
        $baseTVA = 0;

        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src' => '_vente_devis', 'code' => $UvDeviscab->getCode()]);

        $total = 0;
        foreach ($articleold  as  $detail) {


            $total += $detail->getPrixunitaire();

            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + ($detail->getTva()) / 100));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $net = $prixTotNet - $UvDeviscab->getRemise();

        $moins = 'moins ';

        if ($net > 0) {
            $montantfinal =  $net;
            $obj = new nuts($prixTotNet, "MAD");
            $nb = $obj->getFormated(" ", ",");
        $text  = $obj->convert("fr-FR");

        } else {
            $montantfinal =   $net  * -1;
            $obj = new nuts($prixTotNet,"MAD");
            $nb = $obj->getFormated(" ", ",");
        $text  = $moins . $obj->convert("fr-FR");

        }

        // $obj = new nuts($prixTotNet, "MAD");
        // $nb = $obj->getFormated(" ", ",");
        // $text = $obj->convert("fr-FR");
        $html = $this->renderView('module_vente/uv_deviscab/pdf/document_old_sys.html.twig', [
            'image' => $image,
            'cab' => $UvDeviscab,
            'details' => $articleold,
            'text' => $text
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
     * @Route("/edit/detail/new", name="uv_devis_edit_detail_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function newDetail(Request $request, UarticleRepository $UarticleRepository): Response
    {

        $detail = $request->request->get('detail');

        $UvDevisdet = new UvDevisdet();
        $UvDevisdet->setArticle($UarticleRepository->find($detail['articleId']));
        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail['uniteId']);
        $UvDevisdet->setUnite($unite);
        $UvDevisdet->setPrixunitaire($detail['prixunitaire']);
        $UvDevisdet->setQuantite($detail['quantite']);
        $UvDevisdet->setRemise($detail['remise'] ? $detail['remise'] : null);
        $UvDevisdet->setTva($detail['tva']);
        $UvDevisdet->setObservation($detail['observation']);
        //dump($TAchatdemandeinternedet);die();
        $form_det = $this->createForm(UvDevisdetType::class, $UvDevisdet);
        $form_det->handleRequest($request);

        return $this->render('module_vente/uv_deviscab/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'tAchatdemandeinternedet' => $UvDevisdet,
        ]);
    }
}
