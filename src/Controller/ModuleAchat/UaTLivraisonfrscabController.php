<?php

namespace App\Controller\ModuleAchat;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\PPiece;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\ArticleOld;
use App\Entity\PStatutgrv;
use \App\Service\AppService;
use App\Entity\UFactureType;
use App\Entity\UPPartenaire;
use App\Entity\UvFacturecab;
use App\Entity\UvFacturedet;
use App\Entity\UPPartenaireTy;
use App\Entity\UsersSignature;
use App\Entity\UmouvementStock;
use App\Entity\ConfPdfParameter;
use App\Entity\UaTFacturefrsdet;
use App\Entity\Usersignaturedoc;
use \App\Entity\UaTFacturefrscab;
use App\Controller\ApiController;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use Doctrine\ORM\EntityRepository;
use \App\Entity\UaTFacturefrscabRef;
use App\Entity\ArticlePlanComptable;
use App\Form\UaTLivraisonfrscabType;
use App\Form\UaTLivraisonfrsdetType;
use Doctrine\DBAL\Driver\Connection;
use Picqer\Barcode\BarcodeGeneratorHTML;
use Symfony\Component\Workflow\Registry;
use \App\Entity\UATCommandefrscabAcompte;
use App\Repository\UvFacturecabRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Serializer;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use \App\Repository\UaTFacturefrscabRepository;
use Symfony\Component\Routing\Annotation\Route;
use \App\Repository\UaTLivraisonfrscabRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Positive;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;

use Symfony\Component\HttpFoundation\Session\SessionInterface;


use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/achat/livraisonfrs")
 */
class UaTLivraisonfrscabController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry, AppService  $AppService)
    {
        $this->workflowRegistry = $workflowRegistry;
        //$this->session = $session;
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
     * @Route("/list", name="ua_t_livraisonfrscab_list",  options={"expose"=true} ,methods={"GET"})
     */
    function list(Connection $connection, Request $request): Response
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

        


        $sql = "SELECT 
        cab.id,cab.code ,
        cab.old_sys,
        cab.refDocAsso,FORMAT(cab.dateDocAsso,'%d/%m/%Y') as dateDocAsso ,cab.observation,part.nom AS fournisseur ,part.societe,DATE_FORMAT(cab.datelivraison,'%d/%m/%Y') datelivraison ,cab.mtremise,st.statut ,
        st.couleur as couleur , commande.code as code_commande  , facture.code as code_facture , commande.id as id_commande  , facture.id as id_facture,
        cab.description,
        cab.position_actuel,
        cab.statutsig as signature ,
        SUM(det.quantite * det.prixunitaire ) ht  ,
     SUM( det.quantite * det.prixunitaire *  (IFNULL(det.remise,0)) /100) remise ,
     SUM(det.quantite * det.prixunitaire * (IFNULL(det.tva,0) /100   * ( 1 - IFNULL(det.remise,0)/100))) tva  ,  
     SUM(det.quantite * det.prixunitaire * (1+IFNULL(det.tva,0)/100) * (1-IFNULL(det.remise,0)/100)) ttc ,
         case when facture.code is not null then 'FA' else 'NFA' end 
     FROM   ua_t_livraisonfrscab cab 
     INNER JOIN ua_t_livraisonfrsdet det ON cab.id = det.ua_t_livraisonfrscab_id 
 
     LEFT JOIN u_p_partenaire part ON part.id = cab.u_p_partenaire_id 
     LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
     LEFT JOIN ua_t_commandefrscab commande on commande.id = cab.ua_t_commandefrscab_id
    LEFT JOIN ua_t_facturefrscab facture  on facture.id = cab.ua_t_facturefrscab_id
    where 1= 1 and cab.active = 1 and  cab.p_dossier_id = " . $this->appService->getDossierCourant()->getId();

        $sql .= " GROUP BY cab.id";



        $sql2 = "SELECT * FROM (" . $sql . ") tab where 1=1  " . $condition;
        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();
        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";


     //    echo($sql2); die(); 
        





        foreach ($connection->fetchAll($sql2) as $key => $value) {
            $UaTLivraisonfrscab = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value['id']);
            //dump($UaTLivraisonfrscab->HasCommandeWithIcon());
            //die();
            $str = '';
            if($value['old_sys'] == 1){
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='".$value['id']."'></i>";
            }
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";
            $url = "<span  cursor:pointer' class='hint--right' aria-label='".$value['code']."'><a href='" . $this->generateUrl('ua_t_livraisonfrscab_show', ['id' => $value['id']]) . "'> " . $value['code'] . " </a> </span> ".$str;
            $nestedData[] = $url;

            $nestedData[] = $value['datelivraison'] ;


            $refDocAsso = $value['refDocAsso'];

            if(strlen($refDocAsso) >= 12)
            {
                $nestedData[] = mb_substr($refDocAsso,0,12).'<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="'.$value['refDocAsso'].'"> '. '&nbsp;...' .'</span>';
            }
            else {
                $nestedData[] =  $refDocAsso;
            }

            $description = $value['description'];
            
            if(strlen($description) >= 12)
            {
                $nestedData[] = mb_substr($description,0,10).'<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="'.$value['description'].'"> '. '&nbsp;...' .'</span>';
            }
            else {
                $nestedData[] =  $description;
            }

            $societe = $value['societe'];

            if(strlen($societe) >= 12)
            {
                $nestedData[] = mb_substr($societe,0,12).'<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="'.$value['societe'].'"> '. '&nbsp;...' .'</span>';
            }
            else {
                $nestedData[] =  $societe;
            }

            $nestedData[] = number_format($value['ht'], 2, ',', ' ');
            $nestedData[] = number_format($value['tva'], 2, ',', ' ');
            $nestedData[] = number_format($value['ttc'], 2, ',', ' ');
            $url = null;
            if (isset($value['id_commande'])) {
                $url = $value['id_commande'];
                $url = "<a href='" . $this->generateUrl('t_commandefrscab_show', ['id' => $value['id_commande']]) . "'> " . $value['code_commande'] . " </a>";
            }

            $nestedData[] = "<span  cursor:pointer' class='hint--right' aria-label='".$value['code_commande']."'>".$url."</span>";

            $url2 = null;
            if (isset($value['id_facture'])) {
                $url2 = $value['id_facture'];
                $url2 = "<a href='" . $this->generateUrl('ua_t_facturefrscab_consulte', ['id' => $value['id_facture']]) . "'> " . $value['code_facture'] . " </a>";
            }

            $nestedData[] =  "<span  cursor:pointer' class='hint--left' aria-label='".$value['code_facture']."'>".$url2."</span>";


            //$nestedData[] = $UaTLivraisonfrscab->HasCommandeWithIcon()['livraison']['icon'];
            $nestedData[] = $UaTLivraisonfrscab->HasCommandeWithIcon()['facture']['icon'];
            $nestedData[] = $UaTLivraisonfrscab->HasCommandeWithIcon()['reglement']['icon'];
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
            //            $nestedData[] = $value['stFac'];
            //            $nestedData[] = $value['stReg'];

            $operations = array();

            foreach ($this->appService->getOperations('_module_achat', '_br_fr', '_index', true) as $key1 => $value1) {
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
            if (in_array($value['position_actuel'], ['valider', 'generer'])) {
                unset($operations['_edit'], $operations['_delete_livraison'], $operations['_desactiver_livraison'], $operations['_change_dossier']);
            }
            if (!in_array($value['position_actuel'], ['valider', 'commander'])) {
                unset($operations['_genener_factures']);
            }
            $array2 = array();
            // recuperer les positions acessible selon le workow 
            if (isset($operations['_workflow'])) {
                unset($operations['_workflow']);
                $obj = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($id);
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
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }
        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data,
        );
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/", name="ua_t_livraisonfrscab_index",options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {

    //  /* informations modules dossiers Autorises pour cet utilisateur */
    //  $mc = $this->session->get('moduleCourantUgouvAchat');
    //  $dc = $this->session->get('dossierCourantUgouvAchat');
    //  $modules = $this->session->get('modules');



    //  /* verifier le doit d'acces a cette operation */

    //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
    //      'module' => '_ugouv_achat',
    //      'sousModule' => '_br_fr',
    //      'operation' => '_index',
    //      'dossier' => $dc->getPrefix()

    //  ]);

    //  /* operations autorises pour cet utilisateur */
    //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr']['operations'];



    //  /* sous module courant */
    //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr'];


    //  /* navigation  */
    //  $breadcrumbs->prependRouteItem("Applications", "app");
    //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
    //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_livraisonfrscab_index");
    //  $breadcrumbs->addItem("liste");

    $dc =$this->appService->getDossierCourant();
    $operations = $this->appService->getOperations('_module_achat', '_br_fr', '_index' , true) ; 
 

//        $type = $this->getDoctrine()->getRepository(UPPartenaireTy::class)->findOneBy(['abreviation' => 'fourn']);
//        $partenaire = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);
//        $statut = $this->getDoctrine() ->getRepository(PStatutgrv::class)->findBy(['module' => 'RCF']);
//        $tCommandefrscabs = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findAll();

        return $this->render('module_achat/t_livraisonfrscab/index.html.twig', [
//            't_commandefrscabs' => $tCommandefrscabs,
//            'partenaires' => $partenaire,
            'operations' => $operations,
            
        ]);
    }

    /**
     * @Route("/{id}/consulte", name="ua_t_livraisonfrscab_consulte", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function consulte(Request $request, UaTLivraisonfrscab $UaTLivraisonfrscab, Breadcrumbs $breadcrumbs, $id): Response
    {


     //  /* informations modules dossiers Autorises pour cet utilisateur */
     //  $mc = $this->session->get('moduleCourantUgouvAchat');
     //  $dc = $this->session->get('dossierCourantUgouvAchat');
     //  $modules = $this->session->get('modules');

     //  /* Verifier si cet utilisateur il peut acceder a cette operation */
     //  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr']['operations']['_show'])) {
     //      return new Response("Operation non autorie", 403);
     //  }


     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr'];

     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_livraisonfrscab_index");
     //  $breadcrumbs->addItem($UaTLivraisonfrscab->getCode());



        //        $breadcrumbs->prependRouteItem("Applications", "app");
        //        $breadcrumbs->addRouteItem("Bon commandee fournisseur", "ua_t_livraisonfrscab_index");
        //        $breadcrumbs->addRouteItem("Consulter", "ua_t_livraisonfrscab_consulte", [
        //            'id' => $id,
        //        ]);

        $dc =$this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_br_fr', '_show' , [true,$UaTLivraisonfrscab->getCode()]) ; 
     
        return $this->render('module_achat/t_livraisonfrscab/show.html.twig', [
            'livraison' => $UaTLivraisonfrscab,
            'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/statut", name="ua_t_livraisonfrscab_statut", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statut(ValidatorInterface $validator, Request $request, UaTLivraisonfrscab $UaTLivraisonfrscab): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        //  if ($request->isXmlHttpRequest()) {
        /* if($UaTFacturefrscab->getPStatutgrv()->getAbreviation()=='an_faf')
          {
          return $this->json(['empty' => 'ss', 'message' => ['title' => 'warning', 'text' => 'La facture est deja Annuler']]);

          } */
        $form = $this->createFormBuilder($UaTLivraisonfrscab)
            ->add('statut', EntityType::class, [
                'class' => PStatutgrv::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where("a.module = 'RCF' ")
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
        return $this->render('module_achat/t_livraisonfrscab/statut.html.twig', [
            'UaTLivraisonfrscab' => $UaTLivraisonfrscab,
            'form' => $form->createView(),
        ]);
        /* } else {
          return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
          } */
    }

    /**
     * @Route("/{id}/pdf", name="pdf_show_livraisonfrscab", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfShow(Breadcrumbs $breadcrumbs, UaTLivraisonfrscab $UaTLivraisonfrscab, $id)
    {  //dump($UaTFacturefrscab);
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
        //  dump($UaTFacturefrsdet);
        //die();
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }



        //dump($number);
        //die();
        $html = $this->renderView(
            'module_achat/t_livraisonfrscab/pdf/mypdf.html.twig',
            [
                'parametre' => $parametre,
                'livraison' => $UaTLivraisonfrscab,
            ]
        );

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("facture.pdf", [
            "Attachment" => false
        ]);
    }



    /**
     * @Route("/{id}/edit", name="ua_t_livraisonfrscab_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Request $request, UaTLivraisonfrscab $UaTLivraisonfrscab, Breadcrumbs $breadcrumbs, $id): Response
    {


     //  /* informations modules dossiers Autorises pour cet utilisateur */
     //  $mc = $this->session->get('moduleCourantUgouvAchat');
     //  $dc = $this->session->get('dossierCourantUgouvAchat');
     //  $modules = $this->session->get('modules');

     //  /* Verifier si cet utilisateur il peut acceder a cette operation */
     //  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr']['operations']['_edit'])) {
     //      return new Response("Operation non autorie", 403);
     //  }


     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr'];



     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_livraisonfrscab_index");
     //  $breadcrumbs->addItem($UaTLivraisonfrscab->getCode());


     $dc =$this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_achat', '_br_fr', '_edit' , true) ; 
  
        $session = new Session();
        $form = $this->createForm(UaTLivraisonfrscabType::class, $UaTLivraisonfrscab, array('dossier' => $dc));
        $form->handleRequest($request);

        $UaTLivraisonfrsdet = new UaTLivraisonfrsdet();
        $form_det = $this->createForm(UaTLivraisonfrsdetType::class, $UaTLivraisonfrsdet);
        $form_det->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $UaTLivraisonfrscab->setUpdated(new \DateTime);
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('ua_t_livraisonfrscab_index');
        }

        return $this->render('module_achat/t_livraisonfrscab/edit.html.twig', [
            't_livraisonfrscab' => $UaTLivraisonfrscab,
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/show", name="ua_t_livraisonfrscab_show", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function show(Request $request, UaTLivraisonfrscab $UaTLivraisonfrscab, Breadcrumbs $breadcrumbs, $id): Response
    {

        $dc =$this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_br_fr', '_show' ,   [true,$UaTLivraisonfrscab->getCode()]) ; 


        $valider = 'No';
        if (isset($UaTLivraisonfrscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }


        $totalArticles = $UaTLivraisonfrscab->getArrayTotalArticleByLivraison($UaTLivraisonfrscab);
        //dump($totalArticles);die();


        return $this->render('module_achat/t_livraisonfrscab/show.html.twig', [
            'livraison' => $UaTLivraisonfrscab,
            'valider' => $valider,
            'operations' => $operations,
            "ht" => $totalArticles['prixHt'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
        ]);
    }
    /**
     * @Route("/{id}/annuler", name="ua_t_livraisonfrscab_annuler", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function ua_t_livraisonfrscab_annuler(Request $request, UaTLivraisonfrscab $UaTLivraisonfrscab, Breadcrumbs $breadcrumbs, $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $UaTLivraisonfrscab->getCommande()->setPositionActuel("valider");
        $UaTLivraisonfrscab->setCommandefrsInit($UaTLivraisonfrscab->getCommande()->getId());
        $UaTLivraisonfrscab->setCommande(null);
        $UaTLivraisonfrscab->setDateAnnuler(new \DateTime("now"));
        $UaTLivraisonfrscab->setUserAnnuler($this->getUser());
        $UaTLivraisonfrscab->setActive(0);
        $UaTLivraisonfrscab->setPositionActuel("Annuler");
        
        $em->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'annullation a ete bien effectue .']], 200);

    }

    /**
     * @Route("/{id}/documents", name="ua_t_livraisonfrscab_document", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(Breadcrumbs $breadcrumbs, UaTLivraisonfrscab $livraison): Response
    {

     //  $mc = $this->session->get('moduleCourantUgouvAchat');
     //  $dc = $this->session->get('dossierCourantUgouvAchat');
     //  $modules = $this->session->get('modules');


     //  /* verifier le doit d'acces a cette operation */

     //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //      'module' => '_ugouv_achat',
     //      'sousModule' => '_br_fr',
     //      'operation' => '_documents',
     //      'dossier' => $dc->getPrefix()

     //  ]);

     //  /* operations autorises pour cet utilisateur */
     //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr']['operations'];




     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr'];



     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_livraisonfrscab_index");

     //  $breadcrumbs->addRouteItem($livraison->getCode(), "ua_t_livraisonfrscab_show", ['id' => $livraison->getId()]);

     //  $breadcrumbs->addItem('Docs/Impression');

    // $dc =$this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_achat', '_br_fr', '_documents' , [true,$livraison->getCode()]) ; 
     
        return $this->render('module_achat/t_livraisonfrscab/documents.html.twig', [
            'livraison' => $livraison,
            'operations' => $operations
        ]);
    }

    /**

     * @Route("/{id}/show/articles", name="ua_t_livraisonfrscab_articles_show", options={"expose"=true}, methods={"GET"})

     */
    public function showArticles(Request $request, Breadcrumbs $breadcrumbs, UaTLivraisonfrscab $livraison): Response
    {
     //  /* informations modules dossiers Autorises pour cet utilisateur */
     //  $mc = $this->session->get('moduleCourantUgouvAchat');
     //  $dc = $this->session->get('dossierCourantUgouvAchat');
     //  $modules = $this->session->get('modules');

     //  /* Verifier si cet utilisateur il peut acceder a cette operation */
     //  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr']['operations']['_edit'])) {
     //      //  return new Response("Operation non autorie", 403);
     //  }


     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_br_fr'];



     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_livraisonfrscab_index");

     //  $breadcrumbs->addRouteItem($livraison->getCode(), "ua_t_livraisonfrscab_show", ['id' => $livraison->getId()]);
     //  $breadcrumbs->addItem('Article');
  //   $dc =$this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_achat', '_br_fr', '_documents' , true) ; 
     

        $valider = 'No';
        if (isset($livraison->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }
        return $this->render('module_achat/t_livraisonfrscab/show_articles.html.twig', [
            'livraison' => $livraison,
            'valider' => $valider,
            'operations'=>$operations
        ]);
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"}, options={"expose"=true} , name="ua_t_livraisonfrscab_apply_transitions")
     */
    public function applyTransition(Request $request, UaTLivraisonfrscab $livraison)
    {
        //die('hr');

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($livraison);
        //dump($transition);die();
        if($transition){
            if ($workflow->can($livraison, $transition)) {
                try {
                    $statut = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'module' => 'RCF', 'fonction' => 'ACHAT']);
                    $livraison->setUserUpdated($this->getUser());
    
                    /* enregistrer les informations de l'utilisateur qui change le statut de workflow a valide */
                    $valide = 0;
                    if (in_array($transition, ['apres_creer_valider'])) {
                        $valide = 1;
                        $livraison->setDateValider(new \DateTime());
                        $livraison->setUserValider($this->getUser());
                        
                        $demande = $livraison->getCommande()->getReferenceBci();
                        if(count($demande->getCabs()) > 0) {
                            foreach ($demande->getCabs() as $key => $cab) {
                                foreach ($cab->getCommandes() as $key => $commande) {
                                    foreach ($commande->getLivraisons() as $key => $livraisonInter) {
                                        if($livraisonInter->getPositionActuel() == "creer") {
                                            $livraisonInter->setDateValider(new \DateTime());
                                            $livraisonInter->setUserValider($this->getUser());
                                        }
                                    }
                                }
                            }
                            $commandes = $cab->getDevis()->getCommandes();
                            foreach ($commandes as $key => $commande) {
                                foreach ($commande->getLivraison() as $key => $livraisonInter) {
                                    if($livraisonInter->getPositionActuel() == "creer") {
                                        $livraisonInter->setDateValider(new \DateTime());
                                        $livraisonInter->setUserValider($this->getUser());
                                    }
                                }
                            }
                        }
                    }
    
    
                    if (in_array($transition, ['apres_generer_valider'])) {
                        $factures = array();
                        if ($livraison->getFacture()) {
    
    
                            $url = $this->generateUrl('ua_t_facturefrscab_consulte', [
                                'id' => $livraison->getFacture()->getId(),
                            ]);
    
                            return $this->json(['code' => 403, 'message' => [
                                'title' => 'warning',
                                'text' => "Impossible de passer a l'etat annule, 
                                           cette Reception Bc Fournisseur  dispose deja d'une facture .
                                           <br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $livraison->getFacture()->getCode() . "</a>
                                           <br/>NB : pour effectuer cette operation veuillez supprimer cette facture "
                            ]]);
                        }
                    }
    
    
                    if (in_array($transition, ['apres_valider_creer'])) {
                        $factures = array();
                        if ($livraison->getFacture()) {
    
    
                            $url = $this->generateUrl('ua_t_facturefrscab_consulte', [
                                'id' => $livraison->getFacture()->getId(),
                            ]);
    
                            return $this->json(['code' => 403, 'message' => [
                                'title' => 'warning',
                                'text' => "Impossible de passer a l'etat creer, 
                                           cette Reception Bc Fournisseur  dispose deja d'une facture .
                                           <br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $livraison->getFacture()->getCode() . "</a>
                                           <br/>NB : pour effectuer cette operation veuillez supprimer cette facture "
                            ]]);
                        }
                    }
    
    
                    $workflow->apply($livraison, $transition);
                    
                    $demande = $livraison->getCommande()->getReferenceBci();
                    if(count($demande->getCabs()) > 0) {
                        foreach ($demande->getCabs() as $key => $cab) {
                            foreach ($cab->getCommandes() as $key => $commande) {
                                foreach ($commande->getLivraisons() as $key => $livraisonInter) {
                                    if($livraisonInter->getPositionActuel() == "creer") {
                                        $workflow->apply($livraisonInter, $transition);
                                    }
                                }
                            }
                        }
                        $commandes = $cab->getDevis()->getCommandes();
                        foreach ($commandes as $key => $commande) {
                            foreach ($commande->getLivraison() as $key => $livraisonInter) {
                                if($livraisonInter->getPositionActuel() == "creer") {
                                    $workflow->apply($livraisonInter, $transition);
                                }
                            }
                        }
                    }
                    $this->get('doctrine')->getManager()->flush();
    
                    if ($valide == 1) {
                        return $this->json(['code' => 201, 'id' => $livraison->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                    }
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                } catch (LogicException $exception) {
                }
            } else {
                //return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
            }

        }
        
    }

    /**
     * @Route("/{id}/update", name="ua_t_livraisonfrscab_update", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, UaTLivraisonfrscab $UaTLivraisonfrscab): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
       // $mc = $this->session->get('moduleCourantUgouvAchat');
       // $dc = $this->session->get('dossierCourantUgouvAchat');
       // $modules = $this->session->get('modules');

        $dc =$this->appService->getDossierCourant();
    


        $form = $this->createForm(UaTLivraisonfrscabType::class, $UaTLivraisonfrscab, array('dossier' => $dc));
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

        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/update/detail", name="ua_t_livraisonfrscab_update_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updateDetail(ValidatorInterface $validator, Request $request, UaTLivraisonfrsdet $UaTLivraisonfrsdet): Response
    {

        $form_det = $this->createForm(UaTLivraisonfrsdetType::class, $UaTLivraisonfrsdet);

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


        $tva = ($UaTLivraisonfrsdet->getTva() / 100) + 1;
       

        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("{id}/{token}/delete/detail", name="ua_t_livraisonfrscab_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function deleteDetail(Request $request, UaTLivraisonfrsdet $UaTLivraisonfrsdet, $token): Response
    {

        if ($this->isCsrfTokenValid('delete' . $UaTLivraisonfrsdet->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UaTLivraisonfrsdet);
            $entityManager->flush();

            return $this->json([
                'data' => "deleted",
                'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }

    /**
     * @Route("/{id}/edit/detail", name="ua_t_livraisonfrscab_edit_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function editDetail(Request $request, UaTLivraisonfrsdet $UaTLivraisonfrsdet): Response
    {
        $TAchatdemandeinternedet = new UaTLivraisonfrsdet();
        $form_det = $this->createForm(UaTLivraisonfrsdetType::class, $UaTLivraisonfrsdet);
        $form_det->handleRequest($request);

        return $this->render('module_achat/t_livraisonfrscab/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'tLivraisonfrsdet' => $UaTLivraisonfrsdet,
        ]);
    }

    /**
     * @Route("/{id}/insert/detail", name="ua_t_livraisonfrscab_insert", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function Detsave(ValidatorInterface $validator, Request $request, $id): Response
    {

        /*
         * La creation du formulaire
         */
        $UaTLivraisonfrsdet = new UaTLivraisonfrsdet();
        $form = $this->createForm(UaTLivraisonfrsdetType::class, $UaTLivraisonfrsdet);
        $form->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors]);
        } else {
            /*
             * Retourner l'objet saisie avec le calcule de tva
             */
            $tva = ($UaTLivraisonfrsdet->getTva() / 100) + 1;
            
            /*
             * Recherche dans la table tAchatdemandeinternecab  pour definir tAchatdemandeinternecab_id
             */

            $UaTLivraisonfrscab = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($id);
            $UaTLivraisonfrsdet->setCab($UaTLivraisonfrscab);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($UaTLivraisonfrsdet);
            $entityManager->flush();

            return $this->json([
                'data' => "saved",
                'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);
        }
    }

    /**
     * @Route("/{id}/genererfacture", name="ua_t_livraisonfrscab_generer_facture", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function GenererFacture($id = 0, Breadcrumbs $breadcrumbs,  UvFacturecabRepository $UvFacturecabRepository,  ValidatorInterface $validator, Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository,HttpClientInterface $client, Connection $connection): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        
      $dc =$this->appService->getDossierCourant();
      
      $DataBreadcurumb = true; 
        if ($id > 0) {
            $livraison = $this->getDoctrine()->getRepository(\App\Entity\UaTLivraisonfrscab::class)->find($id);
            $traitAcompte = $livraison->getCommande()->checkAcompteAndLivraison();
            $DataBreadcurumb=[true,$livraison->getCode()];   
        }
        
       
        $operations = $this->appService->getOperations('_module_achat', '_br_fr', '_facture' , $DataBreadcurumb) ; 
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);


        $facture = new UaTFacturefrscab();
        $form = $this->createFormBuilder($facture)
            ->add('refDocAsso', TextType::class, ['data' => 'REF', 'constraints' => [new NotBlank()]])
            ->add('dateFacture', DateType::class, ['data' => new \DateTime('now'), 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->add('dateDocAsso', DateType::class, ['data' => new \DateTime('now'), 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->add('mtremise', \Symfony\Component\Form\Extension\Core\Type\NumberType::class, ['constraints' => [new Positive()]])
            ->add('ids', HiddenType::class, [
                'data' => $serializer->serialize($request->request->get('_array_ids'), 'json'),
                'mapped' => false
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

            if (empty($request->request->get('form')['dateDocAsso'])) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner une Date Facture.']], 200);
            }
            if (empty(json_decode($request->request->get('form')['ids']))) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner une livraison au moins.']], 200);
            }
            //dump($request->request->get('form')['ids'][]);die();
            $livraison_valide_errors = $fournisseur_errors = $commande_errors = $exist_fature_errors = null;



            foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                $livraison = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value);
                if($livraison->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
                }
                $traitAcompte = $livraison->getCommande()->checkAcompteAndLivraison();
                $montantAcompte = 0;
                if(( number_format( $traitAcompte['montantTotalCommande'] ,2,".","") -  number_format( $traitAcompte['montantTotalLivraisons'] ,2,".","") < $traitAcompte['montantAcompte'])&&($id != -1)){
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'Il est impossible d\'effectuer la facture sans utiliser le montant d\'acompte .']], 200);  
                }
                //die('ok');

                if (!$livraison->getPositionActuel() == 'valider') {
                    $livraison_valide_errors .= $livraison->getCode() . "<br/>";
                   
                }

               //  die();
                $fournisseur = null;


                /*if (count($livraison->getFacture()) > 0) {
                    $exist_fature_errors .= $livraison->getCode() . "<br/>";
                }*/

                $fournisseur_errors[] = $livraison->getFournisseur()->getId();
                $commande_errors[] = $livraison->getCommande()->getId();
                $fournisseur = $livraison->getFournisseur();
            }
        
            // if($livraison->getFournisseur()->getCategorie()->getK()=='interne'){

            //     return new JsonResponse(['code' => 403, 'message' => ['title' => 'Cette Facture sera générée automatiquement par le vendeur']], 403);

            // }

            if(!empty($livraison->getFournisseur())){
            
                if($livraison->getCommande()->getReferenceBci()->getDevis())
                {

                    return new JsonResponse(['code' => 403, 'message' => ['title' => 'warning' ,'text' => 'Cette Facture sera générée automatiquement par le vendeur']], 200);

        
                }
            }

            if (!empty($livraison_valide_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer cette facture , livraison(s) : <br/>' . $livraison_valide_errors . 'n\'est pas encore valide.']], 200);
            }


            if (!empty($exist_fature_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer cette facture , livraison(s) : <br/>' . $exist_fature_errors . 'dèja facture(s) .']], 200);
            }

            if (count(array_unique($commande_errors)) <> 1) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer une facture pour  differents commandes. ']], 200);
            }

            if (count(array_unique($fournisseur_errors)) <> 1) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer une facture pour  differents fournisseurs. ']], 200);
            }


            $em = $this->getDoctrine()->getManager();
            
            $factureFournisseur = null;
            $UvFacturecab = null;

            $facture = new UaTFacturefrscab();

            $cat=null;
            
            if(in_array($fournisseur->getCategorie()->getK(), ['externe' , 'externe es'])){
                $cat='E';
                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(1);
                $pPieceAvoir = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "AFFE","active"=>1]);
                
            }elseif($fournisseur->getCategorie()->getK()=='interne'){
                $cat='I';
                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(40);
                $pPieceAvoir = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "AFFI","active"=>1]);
            }
            // dd($livraison->getProjet());
            $facture->setDesignationPiece($pPiece->getDesignation());

            $facture->setCode($UaTFacturefrscabRepository->GetLastCode($pPiece,$cat));
            $facture->setRefdocasso($request->request->get('form')['refDocAsso']);
            $facture->setDatedocasso(new \DateTime($request->request->get('form')['dateDocAsso']));
            $facture->setDatefacture(new \DateTime($request->request->get('form')['dateFacture']));
            $facture->setObservation($livraison->getDescription());
            $facture->setUserCreated($this->getUser());
            $facture->setPStatutgrv($this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'cr_faf']));
            $facture->setPositionActuel('creer');
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $facture->setDossier($dossier);
            $facture->setActive(true);
            $facture->setFournisseur($fournisseur);
            $type = $this->getDoctrine()->getRepository(UFactureType::class)->find(1);
            $facture->setFactureType($type);
            $facture->setProjet($livraison->getProjet());
            
           
 
            $montant_facture = 0;
            $montantAcompte = null;
            $remise = $mremise = 0;
            foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                $livraison = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value);
               /* $acomptes = $this->getDoctrine()->getRepository(\App\Entity\UATCommandefrscabAcompte::class)->findByCommande($livraison->getCommande()->getId());

                foreach ($acomptes as $key => $acompte) {
                    $acompte->setFacture($facture);
                }
                //$acompte->setFacture($facture);
                $montantAcompte += $livraison->getMontantAcompte();*/

                $facture->addLivraisons($livraison);

                /*foreach ($livraison->getDetails() as $key => $value) {
                    $montant_facture += $value->getPrixttc();
                }*/
                $totalLivraisonArticles = $livraison->getArrayTotalArticleByLivraison($livraison);

                $montant_facture += $totalLivraisonArticles['totalTtcSansDevis'];
                $remise = $totalLivraisonArticles['remise'];
                $mremise += $totalLivraisonArticles['mremise'];
                $devise = $livraison->getDevise();
            }
            $acompte= null ;
            if($montant_facture < 0 and !$request->request->get('facture_avoir')) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le montant est inferieur de 0 veuillez cocher <b>Facture avoir</b>']], 200);
            }
            if (isset($traitAcompte['idAcompte'])){
            $acompte = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($traitAcompte['idAcompte']);
            $acompte->setParent($facture);
            $em->persist($acompte);
            }
//            dump($facture);
//            die('ici');

            $avoir = $request->request->get('facture_avoir');
            
            $montant = $montant_facture - $traitAcompte['montantAcompte'];
            $traitAcompt = $traitAcompte['montantAcompte'];
            if($montant > 0 and $avoir == 'fa'){
                $montant *= -1;
                $montant_facture *= -1;
                $traitAcompt *= -1;
            }
        //By Najim
        // Get the values of the ACHAT_PAR_SUBVENTION checkbox and the partners dropdown from the request
            $ACHAT_PAR_SUBVENTION = $request->request->get('ACHAT_PAR_SUBVENTION');
            $partners = $request->request->get('partners');

            if($ACHAT_PAR_SUBVENTION){
                 // If the ACHAT_PAR_SUBVENTION checkbox is checked but no partner is selected, return an error message
            if($ACHAT_PAR_SUBVENTION and $partners ==''){
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'veuillez sélectionner le fournisseur ']], 200);
            } else {
                // If a partner is selected, retrieve it from the database using the partner ID
                $partner = $this->getDoctrine()->getRepository(UPPartenaire::class)->find($partners);
                
                // Set the ACHAT_PAR_SUBVENTION flag to true and associate the selected partner with the invoice
                $facture->setAchatParSubvention(1);
                $facture->setpartenaireSubvention($partner);
            }
            }
           
            

            $facture->setPPiece($pPiece);
            $facture->setDevise($devise);
            $facture->setMontantAcompte($traitAcompt);
            $facture->setMtremise($mremise);
            $facture->setRemise($remise);

            $mt_mad =intval($request->request->get('montant_mad'));

          if ($devise->getId() != 1) {
                if ($mt_mad == 0) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Entree montant MAD ']], 200);
                }
            }
            
            $facture->setmtMad($mt_mad);
            $facture->setMontantReception($montant_facture);
            $facture->setMontant($montant);
            if ($avoir == 'fa') {
                $facture->setAvoir(true);
                $facture->setPPiece($pPieceAvoir);
                $facture->setDesignationPiece($pPieceAvoir->getDesignation());

                $facture->setCode($UaTFacturefrscabRepository->GetLastCode($pPiece,$cat, 1));
            }
            
            $em->persist($facture);
            
            //$entityManager = $this->getDoctrine()->getManager();
            $dossierPlanComptable = $dossier->getPlanComptable();
            $codeComptableIntrouvable = 0;
            foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                $livraison = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value);
                foreach ($livraison->getDetails() as $key => $liv) {
                    $prix = $liv->getPrixunitaire();
                    if($prix > 0 and $avoir == 'fa'){
                        $prix *= -1;
                      
                    }
                    $categorie = $liv->getArticle()->getNiveau()->getParent()->getParent();
                    $codeComtableAchat = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptable]);
                    
                   
                    $livraisonDet = new UaTFacturefrsdet();
                    $livraisonDet->setArticle($liv->getArticle());
                    $livraisonDet->setQuantite($liv->getQuantite());
                    $livraisonDet->setTva($liv->getTva() ? $liv->getTva() : 0);
                    $livraisonDet->setObservation($liv->getObservation());
                    $livraisonDet->setRemise($liv->getRemise() ? $liv->getRemise() : 0);
                    $livraisonDet->setPrixunitaire($prix);
                    if(!$codeComtableAchat) {
                        $codeComptableIntrouvable = 1;
                    } else {
                        $livraisonDet->setPlanComptableAchat($codeComtableAchat->getAchat());
                    }
                    // if($codeComtableAchat) {
                    //     $livraisonDet->setPlanComptableAchat($codeComtableAchat->getAchat());
                    // }
                    $livraisonDet->setUnite($liv->getUnite());
                  
                    $livraisonDet->setCab($facture);
                   
                    $em->persist($livraisonDet);
                    
                   
                }
               
                $livraison->setPositionActuel('generer');
                $em->persist($livraison);
            }

            // die;
            // dd($livraison->getFacture());
            foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                $livraison = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value);
                $demande = $livraison->getCommande()->getReferenceBci();
                if(count($demande->getCabs()) > 0) {
                    foreach ($demande->getCabs() as $key => $cab) {
                        foreach ($cab->getCommandes() as $key => $commande) {
                            foreach ($commande->getLivraisons() as $key => $livraisonInter) {
                                if($livraisonInter->getPositionActuel() == "valider") {
                                    $factureFournisseur = new UaTFacturefrscab();
                                    $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(40);
                                    $factureFournisseur->setDesignationPiece($pPiece->getDesignation());

                                    $factureFournisseur->setCode($UaTFacturefrscabRepository->GetLastCodeDossier($livraisonInter->getDossier(),$pPiece,"I"));
                                    $factureFournisseur->setRefdocasso($request->request->get('form')['refDocAsso']);
                                    $factureFournisseur->setDatedocasso(new \DateTime($request->request->get('form')['dateDocAsso']));
                                    $factureFournisseur->setDatefacture(new \DateTime($request->request->get('form')['dateFacture']));
                                    $factureFournisseur->setObservation($livraisonInter->getDescription());
                                    $factureFournisseur->setUserCreated($this->getUser());
                                    $factureFournisseur->setPStatutgrv($this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'cr_faf']));
                                    $factureFournisseur->setPositionActuel('creer');
                                    $factureFournisseur->setDossier($livraisonInter->getDossier());
                                    $factureFournisseur->setActive(true);
                                    $factureFournisseur->setFournisseur($livraisonInter->getFournisseur());
                                    $type = $this->getDoctrine()->getRepository(UFactureType::class)->find(1);
                                    $factureFournisseur->setFactureType($type);
                                    $factureFournisseur->setPPiece($pPiece);
                                    $factureFournisseur->setDevise($devise);
                                    $factureFournisseur->setMontantAcompte($traitAcompte['montantAcompte']);
                                    $factureFournisseur->setMtremise($mremise);
                                    $factureFournisseur->setRemise($remise);
                                    $factureFournisseur->setMontantReception($montant_facture);
                                 
                                    $factureFournisseur->setMontant($montant_facture - $traitAcompte['montantAcompte']);
                                    $factureFournisseur->addLivraisons($livraisonInter);
                                    $em->persist($factureFournisseur);
                                    // $em->flush();

                                    $dossierPlanComptable = $livraisonInter->getDossier()->getPlanComptable();

                                    foreach ($livraisonInter->getDetails() as $key => $liv) {
                                        
                                        // $codeComtableAchat = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['article' => $liv->getArticle(), 'planComptable' => $dossierPlanComptable]);
                                        $categorie = $liv->getArticle()->getNiveau()->getParent()->getParent();
                                        $codeComtableAchat = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptable]);
                                        // dump($prix);
                   
                                        $livraisonDet = new UaTFacturefrsdet();
                                        $livraisonDet->setArticle($liv->getArticle());
                                        $livraisonDet->setQuantite($liv->getQuantite());
                                        $livraisonDet->setTva($liv->getTva() ? $liv->getTva() : 0);
                                        $livraisonDet->setObservation($liv->getObservation());
                                        $livraisonDet->setRemise($liv->getRemise() ? $liv->getRemise() : 0);
                                        $livraisonDet->setPrixunitaire($liv->getPrixunitaire());
                                        if(!$codeComtableAchat) {
                                            $codeComptableIntrouvable = 1;
                                        } else {
                                            $livraisonDet->setPlanComptableAchat($codeComtableAchat->getAchat());
                                        }
                                        // if($codeComtableAchat) {
                                        //     $livraisonDet->setPlanComptableAchat($codeComtableAchat->getAchat());
                                        // }
                                        $livraisonDet->setUnite($liv->getUnite());
                                        $livraisonDet->setCab($factureFournisseur);
                                    
                                        $em->persist($livraisonDet);
                                    }
                                    $livraison->setPositionActuel('generer');
                                }
                            }
                        }
                    }
                    $commandes = $cab->getDevis()->getCommandes();
                    foreach ($commandes as $key => $commande) {
                        foreach ($commande->getLivraison() as $key => $livraisonInter) {
                            if($livraisonInter->getPositionActuel() == "valider") {
                                $UvFacturecab = new UvFacturecab();
                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(6);
                                $UvFacturecab->setPPiece($pPiece);                            
                                $UvFacturecab->setCode($UvFacturecabRepository->GetLastCodeDossier($livraisonInter->getDossier(),"I"));
                                $UvFacturecab->setActive(true);
                                $UvFacturecab->setDescription($livraisonInter->getdescription());
                                $UvFacturecab->setObservation($livraisonInter->getObservation());
                                $UvFacturecab->setResponsable($livraisonInter->getResponsable());
                                $UvFacturecab->setRemise($livraisonInter->getRemise());
                                $UvFacturecab->setMtremise($livraisonInter->getMtremise());
                                $UvFacturecab->setDossier($livraisonInter->getDossier());
                                $UvFacturecab->setCompteMasse($livraisonInter->getCompteMasse());
                                $UvFacturecab->setCompteRubrique($livraisonInter->getCompteRubrique());
                                $UvFacturecab->setComptePoste($livraisonInter->getComptePoste());
                                $UvFacturecab->setCompte($livraisonInter->getCompte());
                                $UvFacturecab->setDevise($livraisonInter->getDevise());
                                $UvFacturecab->setDepense($livraisonInter->getDepense());
                                $UvFacturecab->setMontant($montant_facture - $traitAcompte['montantAcompte']);
                                $UvFacturecab->setClient($livraisonInter->getClient());
                                $UvFacturecab->setDatefacture(new \DateTime($request->request->get('form')['dateFacture']));
                                $now = date_create('now');
                                $UvFacturecab->setCreated($now);
                                $UvFacturecab->setUserCreated($this->getUser());
                            //  $UvFacturecab->setPositionActuel('creer');
                                //$UvLivraisoncab->setPourCompte($UvDeviscab->getPourCompte());
                                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAC', 'abreviation' => 'cr_fac_cl']);
                                $UvFacturecab->setStatut($PStatutgrv);
                                $em->persist($UvFacturecab);
                                // $em->flush();
                            

                                $montant_facture =0;
                                foreach ($livraisonInter->getDetails() as $key => $value) {

                                    $categorie = $value->getArticle()->getNiveau()->getParent()->getParent();
                                    $codeComtableVente = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptable]);
                                        // dump($prix);
                                    $facturedet = new UvFacturedet();
                                    $facturedet->setArticle($value->getArticle());
                                    $facturedet->setQuantite($value->getQuantite());
                                    $facturedet->setTva($value->getTva() ? $value->getTva() : 0);
                                
                                    $facturedet->setObservation($value->getObservation());
                                    $facturedet->setPrixunitaire($value->getPrixunitaire());
                                    $facturedet->setUnite($value->getUnite());
                                    $facturedet->setRemise($value->getRemise() ? $value->getRemise() : 0 );
                                    $facturedet->setPrixttc($facturedet->getPrixTTcAvecRemise());

                                    if(!$codeComtableVente) {
                                        $codeComptableIntrouvable = 1;
                                    } else {
                                        $facturedet->setPlanComptableVente($codeComtableVente->getVente());
                                    }
                                    
                                    $facturedet->setCab($UvFacturecab);
                                
                                    $em->persist($facturedet);
                                    //dump($value);die();     
                                    $montant_facture += $facturedet->getPrixttc();
                                }
                            
                                $livraisonInter->setFacture($UvFacturecab);
                                $UvFacturecab->setMontant($montant_facture);

                                $livraisonInter->setPositionActuel('generer');
                            
                                

                                
                            }
                        }
                    }
                }
            }
            $em->flush();
           
  


            
            
            $api = new ApiController();

            $id_facture = $facture->getId();
            $var = $api->api_output_faf( $id_facture , $connection ,  $entityManager , $client);
           
            // $api = new ApiController();
            // $api->api_output_faf();
            // $facture; 
            
            $id_factureFournisseur = '';

            if($factureFournisseur) {

                // ApiController::api_output_faf($id_factureFournisseur , $connection ,  $entityManager , $client) //$factureFournisseur;
                $id_factureFournisseur = $factureFournisseur->getId();
                $api->api_output_faf($id_factureFournisseur , $connection ,  $entityManager , $client);   
            }


            if($UvFacturecab){
                $id_UvFacturecab = $UvFacturecab->getId();
                $api->api_output_fac($id_UvFacturecab , $connection ,  $entityManager , $client) ;//$UvFacturecab ;
            }
               

            // dd('test',$id_facture,$id_factureFournisseur,$UvFacturecab);





            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'codeComptableIntrouvable' => $codeComptableIntrouvable]], 200);
        }
        $repository = $entityManager->getRepository(UPPartenaire::class);
        $queryBuilder = $repository->createQueryBuilder('a');
        
        $queryBuilder
            ->innerJoin('a.typePartenaire', 't')
            ->innerJoin('a.categorie', 'c')
            ->where('a.active = 1')
            ->andWhere('(c.k = :type3 or c.k = :type4 )  and (t.k = :type or t.k = :type2 )')
            ->setParameter('type', 'fournisseur')
            ->setParameter('type2', 'client et fournisseur')
            ->setParameter('type3', 'externe')
            ->setParameter('type4', 'interne')
            ->orderBy('a.societe', 'ASC');
        
        $results = $queryBuilder->getQuery()->getResult();
        

        if ($id > 0) {




            return $this->render('module_achat/t_livraisonfrscab/generer.html.twig', [
                'livraison' => $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($id),
                'form' => $form->createView(),
                'operations' => $operations,
                'traitAcompte' => $traitAcompte,
                'results' =>$results
            ]);
        } else {
            $livraison_valide_errors = $fournisseur_errors = $commande_errors = $exist_fature_errors = null;


            $montant = 0;
            $remise = 0;
            foreach ($request->request->get('_array_ids') as $key => $value) {
                $livraison = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value);

                if (!$livraison->getPositionActuel()=='valider') {
                    $livraison_valide_errors .= $livraison->getCode() . "<br/>";
                } else {
                    foreach ($livraison->getDetails() as $key => $detail) {
                        $montant = $montant + $detail->getPrixttc();
                        $remise = $remise + $detail->getPrixRemise();
                    }
                }
                

                //dump(); die();
                $fournisseur = null;


                if ($livraison->getFacture()) {
                    $exist_fature_errors .= $livraison->getCode() . "<br/>";
                }

                $fournisseur_errors[] = $livraison->getFournisseur()->getId();
                $commande_errors[] = $livraison->getCommande()->getId();
                $fournisseur = $livraison->getFournisseur();
            }
            if (!empty($livraison_valide_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer cette facture , livraison(s) : <br/>' . $livraison_valide_errors . 'n\'est pas encore valide.']], 200);
            }


            if (!empty($exist_fature_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer cette facture , livraison(s) : <br/>' . $exist_fature_errors . 'dèja facture(s) .']], 200);
            }

            if (count(array_unique($commande_errors)) <> 1) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer une facture pour  differents commandes. ']], 200);
            }

            if (count(array_unique($fournisseur_errors)) <> 1) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer une facture pour  differents fournisseurs. ']], 200);
            }
            return $this->render('module_achat/t_livraisonfrscab/facture.html.twig', [
                'form' => $form->createView(),
                'operations' => $operations,
                'montant' => $montant,
                'remise' => $remise
            ]);
        }
    }




     /**
     * @Route("/test/ziko/{id}", name="test_ziko", options={"expose"=true}   , methods={"GET"})
     */
    public function test_ziko($id,Connection $connection,HttpClientInterface $client)
    {       


            $entityManager = $this->getDoctrine()->getManager();


            $api = new ApiController();
            $var = $api->api_output_faf( $id , $connection ,  $entityManager , $client);

            // return new Response($response->getContent(false)); 

            return new Response($var);

    }



    /**
     * @Route("/{id}/document/pdf", name="t_UaTLivraisonfrscab_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function livraisonpdf(UaTLivraisonfrscab $UaTLivraisonfrscab)
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
       
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UaTLivraisonfrscab, 'postion' => 1, 'tableName' => 5]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UaTLivraisonfrscab, 'postion' => 2, 'tableName' => 5]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UaTLivraisonfrscab, 'postion' => 3, 'tableName' => 5]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UaTLivraisonfrscab, 'postion' => 4, 'tableName' => 5]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $UaTLivraisonfrscab->getDossier()->getLogo()) && $UaTLivraisonfrscab->getDossier()->getLogo() != null ? $urlFichierAchat . $UaTLivraisonfrscab->getDossier()->getLogo() : "img/default/default-logo.png";
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($UaTLivraisonfrscab->getCode(), $generator::TYPE_CODE_128,1,30);
        //"barcode" => $barcode,
        $html = $this->renderView('module_achat/t_livraisonfrscab/pdf/document.html.twig', [
            'image' => $image,
            'cab' => $UaTLivraisonfrscab,
            "signature1" => $signature1,
            "signature2" => $signature2, 
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,
           
        ]);

    //     dump($UaTLivraisonfrscab);
    //    die();

        ob_get_clean();

        //        $html = $this->renderView('ugouv/achat/t_commandefrscab/pdf/document.html.twig', [
        // 
        //            'cab' => $uatCommandefrscab,
        //         
        //        ]);
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Reception.pdf", [
            "Attachment" => false
        ]);
    }

     /**
     * @Route("/{id}/document2/pdf", name="t_UaTLivraisonfrscab_document2_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function livraisonpdf2(UaTLivraisonfrscab $UaTLivraisonfrscab)
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
        $uaTechniqueCab = $this->getDoctrine()->getRepository(UaTechniqueCab::class)->findAll();
        $tAchatdemandeinternecab =  $UaTLivraisonfrscab->getCommande()->getReferenceBci();


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $UaTLivraisonfrscab->getDossier()->getLogo()) && $UaTLivraisonfrscab->getDossier()->getLogo() != null ? $urlFichierAchat . $UaTLivraisonfrscab->getDossier()->getLogo() : "img/default/default-logo.png";
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($UaTLivraisonfrscab->getCode(), $generator::TYPE_CODE_128,1,30);
        //"barcode" => $barcode,
        $html = $this->renderView('module_achat/t_livraisonfrscab/pdf/document2.html.twig', [
            'image' => $image,
            'cab' => $UaTLivraisonfrscab,
            'CabAchat' => $tAchatdemandeinternecab,
            'UAdt' => $uaTechniqueCab,
            "barcode" => $barcode,
        ]);

    //     dump($UaTLivraisonfrscab);
    //    die();

        ob_get_clean();

        //        $html = $this->renderView('ugouv/achat/t_commandefrscab/pdf/document.html.twig', [
        // 
        //            'cab' => $uatCommandefrscab,
        //         
        //        ]);
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Reception.pdf", [
            "Attachment" => false
        ]);
    }





    



    /**
     * @Route("multiple/delete", name="t_UaTLivraisonfrscab_delete_livraison", options={"expose"=true}, methods={"DELETE"})
     */
    public function MultipleDelete(Request $request, UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository): Response {

        if ($request->isXmlHttpRequest()) {
            /**
             * Recuperer les informations du statut , si la demande interne leur statut est traite alors on peut pas supprimer cette demande
             */
            /**
             * verifier si un element du tableau a supprimer leurs satatut est traite
             */
            $entityManager = $this->getDoctrine()->getManager();

       

            $livraisons = $UaTLivraisonfrscabRepository->findBy(['id' => $request->request->get('_array_ids')]);
          //    dump( $livraisons);die;
          
            if ($livraisons) {

                foreach ($livraisons as $key => $livraison) {
                    if ($livraison->getPositionActuel() != 'creer') {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "Impossible de supprimer une livraison dèja VALIDER.
                    
                    <br/>Reference : " . $livraison->getCode() . "
                    "]], 403);
                    }
                    if ($livraison->getFacture()) {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'impossible de supprimer une livraison lie a une facture .']], 403);
                    } 

                    



                }
                
            }

            /**
             * recuperer les valeurs a supprimer
             */

            
            $livraisons = $UaTLivraisonfrscabRepository->findBy(['id' => $request->request->get('_array_ids')]); 
            if (!empty($livraisons)) {
              
                foreach ($livraisons as $key => $livraison) {
                    $acomptes = $this->getDoctrine()->getRepository(UATCommandefrscabAcompte::class)->findBy(['reception' => $livraison]);
                    foreach ($acomptes as $key => $value) {
                        $value->setReception(null);
                        $entityManager->persist($value);
                    }
    
                    $mouvement = $this->getDoctrine()->getRepository(UmouvementStock::class)->findBy(['sourceId' => $livraison->getId(), 'source' => 'UAL']);
    
                    foreach ($mouvement as $key1 => $value1) {
                        $entityManager->remove($value1);
                    }

                    $livraison->setIsdeleted(true);
                  //  $entityManager->remove($livraison);
                }
           
            }

           

            $entityManager->flush();
          //  dump( $livraisons);die;
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }



    /**
     * @Route("/changeDossierLivraisonPopup", name="change_dossier_livraison_popup", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function changerDossierLivraisonPopup(ValidatorInterface $validator, Request $request): Response
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
            //dump($id);die();
            $form = $this->createFormBuilder()
                ->add('dossier', EntityType::class, [
                    'class' => PDossier::class,
                    'query_builder' => function (EntityRepository $er) use($id) {
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
                
                $id = explode(",",$request->request->get("data"));
                $entityManager = $this->getDoctrine()->getManager();
                foreach ($id as $key => $value) {
                    $UaTLivraisonfrscab = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value);
                    
                    if($UaTLivraisonfrscab->getFacture()){
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La reception '.$UaTLivraisonfrscab->getCode() .' contient deja une facture .']], 200);
                    }
                    if($UaTLivraisonfrscab->getCommande()){
                        $UaTLivraisonfrscab->getCommande()->setDossier($form->getData()['dossier']); 
                        if($UaTLivraisonfrscab->getCommande()->getReferenceBci()){
                            $UaTLivraisonfrscab->getCommande()->getReferenceBci()->setDossier($form->getData()['dossier']); 
                        }
                    }
                    
                    
                    $UaTLivraisonfrscab->setDossier($form->getData()['dossier']);
                    $entityManager->persist($UaTLivraisonfrscab);
                }
                
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'Le dossier a ete bien change .'], 'data' => "bien"], 200);
            }
            return $this->render('module_achat/t_livraisonfrscab/change.dossier.popup.html.twig', [
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }




    
      /**
     * @Route("/desactiver", name="t_UaTLivraisonfrscab_desactiver", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function DesactiverLivraison(ValidatorInterface $validator, Request $request): Response
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
                    $livraison = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value);
             
                    if($livraison->getFacture()){
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La livraison '.$livraison->getCode() .' contient deja une facture .']], 200);
                    }
               
                }
                foreach ($id as $key => $value) {
                    $livraison = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value);
             
                    if($livraison->getFacture()){
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le livraison '.$livraison->getCode() .' contient deja une facture .']], 200);
                    }
                    
                    $livraison->setActive(false);
                    $entityManager->persist($livraison);
                }
                
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La desactivation a ete bien effectue  .'], 'data' => "bien"], 200);
          
         
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }



    /**
     * @Route("/{id}/document/old_sys", name="ua_t_livraison_document_old_sys", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(UaTLivraisonfrscab $obj, Breadcrumbs $breadcrumbs) {



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
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $obj->getDossier()->getLogo()) && $obj->getDossier()->getLogo() != null ? $urlFichierAchat . $obj->getDossier()->getLogo() : "img/default/default-logo.png";

        $totalArticles = $obj->getArrayTotalArticleByLivraison($obj);

        //dump($totalArticles);
        //die();

        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src'=>'_ach_livraison','code'=>$obj->getCode()]);

        $html = $this->renderView('module_achat/t_livraisonfrscab/pdf/document_old_sys.html.twig', [
            'image' => $image,
            'cab' => $obj,
            'sans' => 0,
            "ht" => $totalArticles['prixHt'],
            "ttcc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
            'details'=>$articleold
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
     * @Route("/find_commandeFrs_faf", name="find_commandeFrs_faf", options={"expose"=true}, methods={"GET","POST"})
     */
    public function find_commandeFrs_faf(Request $request): Response
    {
        // Initialize variables
        $totalAmount = 0;
        $code = $request->request->get('code_commande_frs');
        
        // Get the commandefrs object based on the code
        $Commandefrs = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findOneBy(['code' => $code]);
        
        // Get the corresponding livraisons objects based on the commandefrs object
        $Livraisons = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->findBy(['commande' => $Commandefrs]);
        
        $livraisonsArray = [];
        
        // Loop through each livraison object
        foreach ($Livraisons as $livr) {
            // Get the livraison detail objects based on the livraison object
            $Livraisondet = $this->getDoctrine()->getRepository(UaTLivraisonfrsdet::class)->findBy(['cab' => $livr]);     
            
            $totalAmount = 0; 
            
            // Loop through each livraison detail object
            foreach ($Livraisondet as $livraison) {
                // Calculate the total amount for each livraison detail object
                $quantity = $livraison->getQuantite();
                $unitPrice = $livraison->getPrixunitaire();
                $discountRate = $livraison->getRemise(); // in percent
                $taxRate = $livraison->getTva(); // in percent

                $discountAmount = $unitPrice * $discountRate / 100;
                $discountedPrice = $unitPrice - $discountAmount;
                $taxAmount = $discountedPrice * $taxRate / 100;
                $totalAmount += ($discountedPrice + $taxAmount) * $quantity; // add up the total amount for each object
            }

            // Add the livraison data to the array
            $livraisonsArray[] = [
                'id' => $livraison->getId(),
                'code' => $livr->getCode(),
                'total' => $totalAmount, // use the accumulated total amount
            ];
        }
        
        // Return the livraisons array as a JSON response
        return new JsonResponse(['livraisons' => $livraisonsArray]);  
    }

        /**
         * @Route("/handle_form_faf_globale", name="handle_form_faf_globale", options={"expose"=true} ,  methods={"GET","POST"})
         */
        public function handle_form_faf_globale(Request $request): Response
        {
            $em = $this->getDoctrine()->getManager();

            $codeCommandeFrs = $request->request->get('code_commande_frs');
            $dateFacture = $request->request->get('dateFacture');
            $refDocAsso = $request->request->get('refDocAsso');
            $dateDocAsso = $request->request->get('dateDocAsso');
            $Observation = $request->request->get('Observation');

            
                $currentYear = date('Y');
                $yearFacture = date('Y', strtotime($dateFacture));

                if ($yearFacture != $currentYear) {
                    // Return an error indicating that the year is not the current year
                    return $this->json(['code' => 501, 'message' => ['title' => 'warnignx', 'text' => 'L\'année de la facture n\'est pas l\'année en cours.']], 200);
                } 
            
            
            // Find the order by its code
            $Commandefrs = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findOneBy(['code' => $codeCommandeFrs]);
            // Find all the deliveries related to the order
            $Livraisons = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->findBy(['commande' => $Commandefrs]);
            
            foreach ($Livraisons as $Livraison) {
                if($Livraison->getFacture() or $Livraison->getPositionActuel() =='generer'){
                    return $this->json(['code' => 500, 'message' => ['title' => 'warnignx', 'text' => 'facture a déjà été générée...']], 200);

                }
            }  
                
                // Initialize an array to store the quantities for each article
            $quantities = [];

            $devise = $Commandefrs->getDevise();
                    
            
            
                $facture = new UaTFacturefrscab();
                if(in_array($Commandefrs->getFournisseur()->getCategorie()->getK(), ['externe' , 'externe es'])){
                    $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(1);            
                }elseif($Commandefrs->getFournisseur()->getCategorie()->getK()=='interne'){
                    $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(40);
                }
                $facture->setRefdocasso($refDocAsso);
                $facture->setDesignationPiece($pPiece->getDesignation());
                $facture->setDatedocasso(new \DateTime($dateDocAsso ));
                $facture->setDatefacture(new \DateTime($dateFacture));
                $facture->setObservation($Observation);
                $facture->setUserCreated($this->getUser());
                $facture->setPStatutgrv($this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'cr_faf']));
                $facture->setPositionActuel('creer');
                $facture->setDossier($Commandefrs->getDossier());
                $facture->setActive(true);
                $facture->setFournisseur($Commandefrs->getFournisseur());
                $type = $this->getDoctrine()->getRepository(UFactureType::class)->find(1);
                $facture->setFactureType($type);
                $facture->setPPiece($pPiece);
                $facture->setDevise($devise);
            $items = array();    
            
            foreach ($Livraisons as $livraison) {
                // Find all the details for the current delivery
                $Livraisondetiles = $this->getDoctrine()->getRepository(UaTLivraisonfrsdet::class)->findBy(['cab' => $livraison]);
            
                foreach ($Livraisondetiles as $livraisonetail) {
                    
                    $article = $livraisonetail->getArticle()->getId();
                    $articleobj = $livraisonetail->getArticle();
                    $prix = $livraisonetail->getPrixunitaire();
                    $tva = $livraisonetail->getTva();
                    $remise = $livraisonetail->getRemise();
                    $quantity = $livraisonetail->getQuantite();
                    $Unite = $livraisonetail->getArticle()->getDefaultUnite();
                    $dossierPlanComptable =$Commandefrs->getDossier()->getPlanComptable();
                    $categorie = $livraisonetail->getArticle()->getNiveau()->getParent()->getParent();
                    $codeComtableAchat = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptable])->getAchat();
                    $check = false;
                    $keey = "";
                    foreach ($items as $key => $item) {
                        if ($item['article'] == $article) {
                            $quantity = $item['quantity'] + $quantity;
                            $check = true;
                            $keey = $key;
                        }
                    }
                    // Add the item to the array
                    if (!$check) {
                        $item = array(
                            'article' => $article,
                            'quantity' => $quantity, // Use $quantities array to get the total quantity
                            'Unite' => $Unite,
                            'articleobj' => $articleobj,
                            'codeComtableAchat'=>$codeComtableAchat,
                            'prix'=>$prix,
                            'tva'=>$tva,
                            'remise'=>$remise,
                        );
                        array_push($items, $item);  
                    }else {
                        $items[$keey]['quantity'] = $quantity;
                    }
                    
                }
                
                }
                
                // dd($items);
                $totalPrice = 0;

                foreach ($items as $item) { 
                    $Facturefrsdet = new UaTFacturefrsdet(); // create a new instance of UaTFacturefrsdet
                    $Facturefrsdet->setArticle($item['articleobj']);
                    $Facturefrsdet->setQuantite($item['quantity']);
                    $Facturefrsdet->setTva($item['tva']);
                    $Facturefrsdet->setRemise($item['remise'] ? $item['remise'] : 0 );
                    $Facturefrsdet->setPrixunitaire($item['prix']);
                        if (!$item['codeComtableAchat']) {
                            $codeComptableIntrouvable = 1;
                        } else {
                            $Facturefrsdet->setPlanComptableAchat($item['codeComtableAchat']);
                        }
                    $Facturefrsdet->setUnite($item['Unite']);
                    $Facturefrsdet->setCab($facture);
                        // update the total price
                    $totalPrice += ($item['prix'] - $item['remise']) * $item['quantity'] * (1 + $item['tva']/100);
                    $em->persist($Facturefrsdet);
                }
                
            
                $facture->setMontant($totalPrice);
                foreach ($Livraisons as $Livraison) {
                    $Livraison->setFacture($facture);
                    $Livraison->setPositionActuel("generer");
                    $em->persist($Livraison);
                }
        
        $Commandefrs->setPositionActuel("livrer");
        $em->persist($Commandefrs);
        $em->persist($facture);
        $em->flush();
    
        return $this->json(['code' => 200, 'message' => ['title' => 'Success', 'text' => 'L\'enregistrement a ete bien effectue']], 200);
        }
}
