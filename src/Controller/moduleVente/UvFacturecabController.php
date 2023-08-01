<?php

namespace App\Controller\moduleVente;

use App\Controller\ApiController;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\nuts;
use App\Entity\User;
use App\Entity\PPiece;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\ArticleOld;

use App\Entity\PStatutgrv;
use \App\Service\AppService;



use App\Entity\PGlobalParam;
use App\Entity\UPPartenaire;
use App\Entity\UvFacturecab;
use App\Entity\UvFacturedet;
use App\Entity\PCompteBanque;
use App\Entity\TrTransaction;
use App\Entity\UPPartenaireTy;
use App\Entity\UsersSignature;
use App\Entity\PGlobalParamDet;
use App\Entity\UvTReglementcab;
use App\Entity\ConfPdfParameter;
use App\Entity\PTransactionType;
use App\Entity\UaTFacturefrscab;
use App\Entity\Usersignaturedoc;
use App\Entity\DevisTechniqueCab;
use App\Entity\Gaccentry;
use App\Entity\PCompteBanqueType;
use App\Entity\UGeneralOperation;
use App\Form\UvTReglementcabType;
use App\Entity\TConditionpaiement;
use App\Entity\UaTReglementfrscab;
use Doctrine\ORM\EntityRepository;
use App\Form\TConditionpaiementType;
use App\Form\UaTReglementfrscabType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use Picqer\Barcode\BarcodeGeneratorHTML;
use Symfony\Component\Workflow\Registry;
use App\Repository\UvFacturecabRepository;
use App\Repository\TrTransactionRepository;

use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;



use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UaTReglementfrscabRepository;
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
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * @Route("vente/facturecab")
 */

class UvFacturecabController extends AbstractController
{

    public function __construct(SessionInterface $session, Registry $workflowRegistry, AppService  $AppService, EntityManagerInterface $entityManager,Connection $connection, HttpClientInterface $client)
    {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->appService = $AppService;
        $this->entityManager = $entityManager;
        $this->connection = $connection;
        $this->client = $client;
    }




    public function getHistorique($objet)
    {
        $data = array();
        $workflow = $this->workflowRegistry->get($objet);
        $repository = $this->getDoctrine()->getRepository(User::class);

        //  dump($objet->getHistorique());
        foreach (array_reverse($objet->getHistorique()) as $key => $value) {


            //            $created = $commande->getCreated()->format('d-m-y H:i:s');
            //            $now = date('d-m-y H:i:s');

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
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="uv_facturecab_list")
     * 
     */
    public function ListAction(Connection $connection)
    {
        $data = array();





        $users = $connection->fetchAll("SELECT cab.id ,cab.description,cab.position_actuel, cab.code,cab.code_proforma,cab.lieu,cab.objet,cab.date_proforma ,DATE_FORMAT(datefacture,'%d/%m/%Y') as datefacture,observation,part.nom as client ,part.societe, cab.montant ,mtremise,MtReg,refDocAsso,st.statut 
        FROM uv_facturecab cab 
        
        INNER JOIN p_dossier dos on dos.id = cab.p_dossier_id 
        LEFT JOIN (SELECT uv_facturecab_id, sens ,SUM(mtreglement) MtReg FROM ua_t_reglementfrs GROUP BY uv_facturecab_id , sens ) reg ON reg.uv_facturecab_id = cab.id  and reg.sens = -1
        LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
        LEFT JOIN u_p_partenaire part ON part.id = cab.`partenaire_client_id` where cab.active=1 and  dos.id=" . $this->appService->getDossierCourant()->getId() . " ORDER BY cab.id DESC ");




        foreach ($users as $key => $value) {
            $UvFacturecab = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($value['id']);
            $id = $value['id'];
            $nestedData = array();
            // $nestedData[] = ++$key;
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";

            $nestedData[] = "<a class='cd_op'>" . $value['code'] . "</a>";
            $nestedData[] = $value['datefacture'];
            //   $nestedData[] = $value['code'];

            $nestedData[] = $value['description'];
            $nestedData[] = $value['client'];
            // $nestedData[] = $value['societe'];
            //$nestedData[] = $value['client'];


            $nestedData[] = number_format($value['montant'], 2, ',', ' ');
            $nestedData[] = $value['mtremise'];
            $nestedData[] = number_format($value['MtReg'], 2, ',', ' ');
            $nestedData[] = $value['refDocAsso'];
            //  $nestedData[] = $value['statut'];
            $nestedData[] = $UvFacturecab->HasCommandeWithIcon()['reglement']['icon'];
            $nestedData[] = $value['position_actuel'] ? implode(" ", array_keys(json_decode($value['position_actuel'], true))) : 'null';



            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }



    /**
     * @Route("/list2", name="uv_t_facturefrscab_list2",  options={"expose"=true} ,methods={"GET"})
     */
    public function List(Request $request, Connection $connection)
    {
        $data = array();
        $totalRows = $sqlRequest = '';
        // dump($request->query); die(); 
        ////        //search global
        ////        dump($request->query->get('search')['value']);
        ////        //order
        //        dump($request->query->get('order'));
        //
        //
        //        dump($request->query->get('order')[0]['column']);
        //       
        //        //start
        //        dump($request->query->get('start'));
        //
        //        //lenght
        //        dump($request->query->get('length'));
        //        dump($request->query->get('order')[0]['column']); 
        //        dump($request->query->get('order')[0]['dir']);


        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {


            $columns[] = $value['name'];
            if (!empty($value['search']['value'])) {

                echo is_object(json_decode($value['search']['value']));

                if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                    $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                    $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                } else {
                    $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                }
            }
        }

        $where = $condition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            // dd($columns);
            foreach ($columns as $key => $value) {

                if ($value != "") {

                    if ($key > 0) {
                        $where .= 'OR ';
                    }
                    $where .= " $value LIKE '%$search%' ";
                }
            }
            $condition = " and (" . $where . ")";
        }




        $sql = "SELECT fac.id ,fac.code, fac.description,fac.code_proforma,fac.lieu,fac.objet,fac.date_proforma ,DATE_FORMAT(datefacture,'%d/%m/%Y') as datefacture, fac.observation, part.societe as client , fac.refDocAsso,
        det.prixHt ,fac.old_sys
        ,
        det.prixTva,
        det.prixRemise,
        det.prixTtc ,
       
        tab.montantRegle ,
        tab.NbrReglements,
        fac.statutsig as signature ,
        nbFacture.NbrOperations,
        fac.position_actuel
    FROM uv_facturecab fac
    left join (SELECT uv_facturecab_id facture_id, SUM(quantite * prixunitaire ) as prixHt , SUM((quantite * prixunitaire * IFNULL(tva,0)/100) * ( 1 - IFNULL(remise,0)/100)) as prixTva , SUM(quantite * prixunitaire*remise/100 ) as prixRemise , SUM(prixttc) prixTtc FROM `uv_facturedet` group  by uv_facturecab_id
order by uv_facturecab_id desc ) det on det.facture_id = fac.id
    INNER JOIN p_dossier dos on dos.id = fac.p_dossier_id
    LEFT JOIN u_p_partenaire part ON part.id = fac.`partenaire_client_id`
   
    left join `p_piece` p on p.id = fac.p_piece_id
    left join u_general_operation op on op.facture_client_id = fac.id
    -- left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id  
    left join `tr_transaction` tr  on  tr.operation_id = op.id
   
   
left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montantRegle from  u_general_operation op  
-- left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id  
left join `tr_transaction` tr  on  tr.operation_id = op.id
group by op.id  ) tab on tab.operation_id = op.id

left join (
select tr.id ,  count(*) NbrOperations
from  u_general_operation op  
-- inner join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id  
left join `tr_transaction` tr  on  tr.operation_id = op.id
group by tr.id )  nbFacture on nbFacture.id = tr.id
    where fac.active=1  and  dos.id=" . $this->appService->getDossierCourant()->getId()  . $condition . " " . $searchIndiv;

        $sql .= "group by fac.id";
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
        //  dump($sql);die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {

            if ($value['code_proforma'] != null) {
                $disabled = 'disabled';
            } else {
                $disabled = '';
            }

            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            $UvFacturecab = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($value['id']);
            $id = $value['id'];
            $nestedData = array();
            $str = '';
            if ($value['old_sys'] == 1) {
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='" . $value['id'] . "'></i>";
            }
            // $nestedData[] = ++$key;

            $nestedData[] = "<input type='checkbox' name='_action[]' class='action' value='$id' " . $disabled . ">";

            $nestedData[] = "<a class='cd_op'>" . $value['code'] . "</a> " . $str;
            $nestedData[] = $value['datefacture'];
            //   $nestedData[] = $value['code'];

            $nestedData[] = $value['description'];
            $nestedData[] = $value['client'];
            // $nestedData[] = $value['societe'];
            //$nestedData[] = $value['client'];

            $nestedData[] = $value['refDocAsso'];
            //  $nestedData[] = $value['statut'];
            $nestedData[] = number_format($value['prixHt'], 2, ',', ' ');
            $nestedData[] = number_format($value['prixTva'], 2, ',', ' ');
            $nestedData[] = number_format($value['prixRemise'], 2, ',', ' ');
            $nestedData[] = number_format($value['prixTtc'], 2, ',', ' ');
            $nestedData[] = number_format($value['montantRegle'], 2, ',', ' ');
            $nestedData[] = $value['NbrReglements'];
            //NbrOperations
            $nestedData[] = $value['NbrOperations'];
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

            foreach ($this->appService->getOperations('_module_vente', '_fa_cl', '_index', true) as $key1 => $value1) {
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
            if (in_array($value['position_actuel'], ['valider', 'generer'])) {
                unset($operations['_edit'], $operations['_delete'], $operations['_desactiver_facture'], $operations['_change_dossier']);
            }
            $array2 = array();
            // recuperer les positions acessible selon le workow 
            if (isset($operations['_workflow'])) {
                unset($operations['_workflow']);
                $obj = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($id);
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

        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/", name="uv_facturecab_index" , options={"expose"=true} ,  methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        /* informations modules dossiers Autorises pour cet utilisateur */
        //   $mc = $this->session->get('moduleCourantUgouvVente');
        //   $dc = $this->session->get('dossierCourantUgouvVente');
        //   $modules = $this->session->get('modules');
        //   
        //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //       'module' => '_ugouv_vente',
        //       'sousModule' => '_fa_cl',
        //       'operation' => '_index',
        //       'dossier'=>$dc->getPrefix()
        //       
        //   ]);
        //   /* operations autorises pour cet utilisateur */
        //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations'];
        //   
        //
        //
        //   /* sous module courant */
        //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl'];
        //
        //   /* navigation  */
        //   $breadcrumbs->prependRouteItem("Applications", "app");
        //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_facturecab_index");
        //   $breadcrumbs->addItem("liste");
        //
        //
        //
        //   $dossiers = $this->getDoctrine()->getRepository(PDossier::class)->findAll();
        //
        //   $statut = $this->getDoctrine()
        //           ->getRepository(PStatutgrv::class)
        //           ->findBy(['module' => 'FAF']);
        //   $type = $this->getDoctrine()
        //           ->getRepository(UPPartenaireTy::class)
        //           ->findOneBy(['abreviation' => 'cl']);
        //
        //
        //
        //   $upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);
        //
        //  $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_vente', '_fa_cl', '_index', true);

        return $this->render('module_vente/uv_facturecab/index.html.twig', [

            //  'dossiers' => $dossiers,
            'operations' => $operations,
            // 'u_p_partenaires' => $upPartenaires,
            //'statut' => $statut
        ]);
    }


    /**
     * @Route("/{id}/Paiement", name="uv_facturecab_Paiement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function payment(Request $request, UaTReglementfrscabRepository $rep, UvFacturecab $UvFacturecab, Breadcrumbs $breadcrumbs, $id): Response
    {
        /* informations modules dossiers Autorises pour cet utilisateur */
        //   $mc = $this->session->get('moduleCourantUgouvVente');
        //   $dc = $this->session->get('dossierCourantUgouvVente');
        //   $modules = $this->session->get('modules');
        //   
        //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_vente',
        //      'sousModule' => '_fa_cl',
        //      'operation' => '_paiement',
        //      'dossier'=>$dc->getPrefix()
        //      
        //  ]);
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations'];
        //  

        //   /* Verifier si cet utilisateur il peut acceder a cette operation */
        //   if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations']['_index'])) {
        //       return new Response("Operation non autorie", 403);
        //   }

        //   /* sous module courant */
        //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl'];


        //   /* operations autorises pour cet utilisateur */
        //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations'];


        //   /* navigation  */
        //   $breadcrumbs->prependRouteItem("Applications", "app");
        //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_facturecab_index");
        //   $breadcrumbs->addRouteItem($UvFacturecab->getCode(), "uv_facturecab_show", ['id' => $UvFacturecab->getId()]);
        //   $breadcrumbs->addItem("Paiement");


        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_vente', '_fa_cl', '_paiement', [true, $UvFacturecab->getCode()]);


        $reglement = new UvTReglementcab();
        $reglement->setDevise($UvFacturecab->getDevise());
        $form = $this->createForm(UvTReglementcabType::class, $reglement, array('dossier' => $dc));
        $form->handleRequest($request);


        //$mtht = $rep->GetMtHt($UaTFacturefrscab);
        $mtreg = 0;

        $treg = $this->getDoctrine()
            ->getRepository(UvTReglementcab::class)
            ->findBy(['factureClient' => $UvFacturecab]);

        if ($treg) {


            $mtreg = $rep->GetMregV($UvFacturecab);
            //dump($mtreg);
            //die;
        }



        return $this->render('module_vente/uv_facturecab/payement.html.twig', [
            'reglement' => $reglement,
            'form' => $form->createView(),

            'facture' => $UvFacturecab,
            'mttc' => $UvFacturecab->getMontant() - $UvFacturecab->getMtremise(),
            'mtreg' => $mtreg['MtReg'],

            'operations' => $operations
        ]);
    }


    /**
     * @Route("/{id}/documents", name="uv_facturecab_documents", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documents(Request $request, UvFacturecab $UvFacturecab, Breadcrumbs $breadcrumbs, $id): Response
    {
        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvVente');
        //  $dc = $this->session->get('dossierCourantUgouvVente');
        //  $modules = $this->session->get('modules');
        //  
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_ugouv_vente',
        //     'sousModule' => '_fa_cl',
        //     'operation' => '_documents',
        //     'dossier'=>$dc->getPrefix()
        //     
        // ]);
        // /* operations autorises pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations'];
        // 

        //  /* Verifier si cet utilisateur il peut acceder a cette operation */
        //  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations']['_index'])) {
        //      return new Response("Operation non autorie", 403);
        //  }

        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl'];


        // 

        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "uv_facturecab_index");
        //  $breadcrumbs->addRouteItem($UvFacturecab->getCode(), "uv_facturecab_show", ['id' => $UvFacturecab->getId()]);
        //  $breadcrumbs->addItem("Docs/Impression");


        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_vente', '_fa_cl', '_documents', [true, $UvFacturecab->getCode()]);



        return $this->render('module_vente/uv_facturecab/documents.html.twig', [
            'facture' => $UvFacturecab,
            'operations' => $operations
        ]);
    }



    /**
     * @Route("/{id}/insert", name="uv_facturecab_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insert(Request $request, UvFacturecab $UvFacturecab, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, UaTReglementfrscabRepository $rep, TrTransactionRepository $TrTransactionRepository, $id): Response
    {

        $session = new Session();


        // $mc = $this->session->get('moduleCourantUgouvVente');
        // $dc = $this->session->get('dossierCourantUgouvVente');
        $dc = $this->appService->getDossierCourant();



        $reglement = new UvTReglementcab();
        $form = $this->createForm(UvTReglementcabType::class, $reglement, array('dossier' => $dc));
        $form->handleRequest($request);
        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {

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

                $mtreg = 0;
                $U = $this->getDoctrine()

                    ->getRepository(UvTReglementcab::class)
                    ->findBy(["factureClient" => $UvFacturecab]);
                if ($U) {

                    $mtreg = $rep->GetMregV($UvFacturecab);
                }
                //  $mttc = $rep->GetMtTtcV($UvFacturecab);
                //  $mtht = $rep->GetMtHtV($UvFacturecab);

                // var_dump($mtreg);
                //die();
                /*
                 * verifier  MtTtc 
                 * 
                 */
                if (abs($UvFacturecab->getMontant()) == $mtreg["MtReg"]) {
                    return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'la facture est deja paye !']]);
                }
                if ($reglement->getMtreglement() < 1) {
                    return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'le solde doit etre positif !']]);
                }


                if (abs($UvFacturecab->getMontant()) - abs($reglement->getMtreglement() + $mtreg["MtReg"]) <= -0.1) {
                    return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'le montant saisi est superieur au solde de la facture!']]);
                }


                $entityManager = $this->getDoctrine()->getManager();

                /*
                 * fait une select by sur le dossier pour setter le dossier
                 */

                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($UvFacturecab->getDossier());
                $reglement->setDossier($dossier);


                $reglement->setFactureClient($UvFacturecab);
                // die;
                $code = $rep->GetLastCodeVente();
                $reglement->setCode($code);
                // dump($this->getUser());
                //die;
                $now = date_create('now');
                $reglement->setCreated($now);
                $reglement->setSens(-1);
                $reglement->setUserCreated($this->getUser());
                $entityManager->persist($reglement);


                $transaction = new TrTransaction();
                $transaction->setCompte($reglement->getCompte());
                $transaction->setRefDocAsso($UvFacturecab->getCode());
                $transaction->setMontant($reglement->getMtreglement());
                $transaction->setModepaiement($reglement->getModepaiement());
                $transaction->setDate($reglement->getDatereglement());

                $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('FAC');
                $type = $this->getDoctrine()->getRepository(PTransactionType::class)->findOneByCode('FAC');


                $transaction->setPiece($piece);
                $transaction->setDossier($dossier);
                $transaction->setType($type);
                $transaction->setActive(true);
                $transaction->setCode($reglement->getCode());
                $transaction->setUserCreated($this->getUser());
                $transaction->setCreated(new \DateTime());


                $entityManager->persist($transaction);
                $entityManager->flush();

                $reglement->setTransaction($transaction);


                $this->getDoctrine()->getManager()->flush();
                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();
                return $this->json(['data' => "data", 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
            }
        }
    }



    /**
     * @Route("/{id}/statut", name="uv_facturecab_statut", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statut(ValidatorInterface $validator, Request $request, UvFacturecab $UvFacturecab): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        //  if ($request->isXmlHttpRequest()) {
        /* if($UaTFacturefrscab->getPStatutgrv()->getAbreviation()=='an_faf')
          {
          return $this->json(['empty' => 'ss', 'message' => ['title' => 'warning', 'text' => 'La facture est deja Annuler']]);

          } */
        $form = $this->createFormBuilder($UvFacturecab)
            ->add('statut', EntityType::class, [
                'class' => PStatutgrv::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where("a.module = 'FAF' and a.abreviation!='cr_faf'")
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

            if ($UvFacturecab->getStatut()->getAbreviation() == 'an_faf') {
                $em = $this->getDoctrine()->getManager();
                $UvFacturedet = $this->getDoctrine()
                    ->getRepository(UvFacturedet::class)
                    ->findBy(["cab" => $UvFacturecab]);
                foreach ($UvFacturedet as $det) {
                    $det->setPrixttc($det->getPrixttc() * -1);
                    $em->persist($det);
                    $em->flush();
                }
            }
            $this->getDoctrine()->getManager()->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }
        return $this->render('module_vente/uv_facturecab/statut.html.twig', [
            'UvFacturecab' => $UvFacturecab,
            'form' => $form->createView(),
        ]);
        /* } else {
          return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
          } */
    }


    /**
     * @Route("/{id}/show", name="uv_facturecab_show", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function consulte(Request $request, UaTReglementfrscabRepository $rep, UvFacturecab $UvFacturecab, Breadcrumbs $breadcrumbs, $id): Response
    {

        $treg = $this->getDoctrine()
            ->getRepository(UaTReglementfrscab::class)
            ->findBy(['factureClient' => $UvFacturecab]);

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_vente', '_fa_cl', '_show', [true, $UvFacturecab->getCode()]);

        // dd($UvFacturecab->getLivraisons()[0]->getCommande());

        return $this->render('module_vente/uv_facturecab/show.html.twig', [
            //    'valider'=>$valider,
            'facture' => $UvFacturecab,
            't_reglementfrs' => $treg,
            //'facturedet'=> $detail,
            'mttc' => $UvFacturecab->getMontant() - $UvFacturecab->getMtremise(),
            'operations' => $operations,
            'dc' => $dc

        ]);
    }
    /**
     * @Route("/{id}/annuler", name="uv_facturecab_annuler", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function uv_facturecab_annuler(Request $request, UvFacturecab $UvFacturecab, UvFacturecabRepository $UvFacturecabRepository): Response
    {

        // dd($UvFacturecab);
        $em = $this->getDoctrine()->getManager();
        $factureMinus = new UvFacturecab();
        $factureMinus->setType($UvFacturecab->getType());
        $factureMinus->setDossier($UvFacturecab->getDossier());
        $factureMinus->setClient($UvFacturecab->getClient());
        $factureMinus->setUserCreated($this->getUser());
        $factureMinus->setDevise($UvFacturecab->getDevise());
        if ($UvFacturecab->getClient()->getCategorie()->getK() == 'externe') {
            $cat = 'E';
        } elseif ($UvFacturecab->getClient()->getCategorie()->getK() == 'interne') {
            $cat = 'I';
        }
        $factureMinus->setCode($UvFacturecabRepository->GetLastCode($cat));
        $factureMinus->setObservation($UvFacturecab->getObservation());
        $factureMinus->setDatedocasso($UvFacturecab->getDatedocasso());
        $factureMinus->setRefdocasso($UvFacturecab->getRefdocasso());
        $factureMinus->setCreated(new \DateTime("now"));
        $factureMinus->setPositionActuel("creer");
        $factureMinus->setMontant("-" . $UvFacturecab->getMontant());
        $factureMinus->setDescription($UvFacturecab->getDescription());
        $factureMinus->setActive(0);
        $factureMinus->setIdFactureOld($UvFacturecab->getId());

        $em->persist($factureMinus);
        $em->flush();

        foreach ($UvFacturecab->getLivraisons() as $key => $livraison) {
            $livraison->setFacture(null);
            $livraison->setPositionActuel("valider");
            $UvFacturecab->setLivraisoncli($livraison->getId());
        }
        foreach ($UvFacturecab->getDetails() as $key => $detail) {
            $factureMinusDetails = new UvFacturedet();
            $factureMinusDetails->setArticle($detail->getArticle());
            $factureMinusDetails->setUnite($detail->getUnite());
            $factureMinusDetails->setQuantite($detail->getQuantite());
            $factureMinusDetails->setPrixunitaire("-" . $detail->getPrixunitaire());
            $factureMinusDetails->setCab($factureMinus);

            $em->persist($factureMinusDetails);
        }
        $UvFacturecab->setActive(0);
        $UvFacturecab->setPositionActuel("Annuler");
        $UvFacturecab->setDateAnnuler(new \DateTime("now"));
        $em->flush();

        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'annullation a ete bien effectue .']], 200);
    }







    /**
     * @Route("/{id}/document/pdf", name="pdf_show_uv_facturecab", options={"expose"=true}   , methods={"GET"})
     */
    public function facturepdf(Breadcrumbs $breadcrumbs, UvFacturecab $UvFacturecab, UaTReglementfrscabRepository $rep, $id)
    {  //dump($UaTFacturefrscab);
        //die();
        
        $dc = $this->appService->getDossierCourant();
        //dump($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());die();
        $theme  = $this->getDoctrine()
            ->getRepository(PGlobalParam::class)
            ->find($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());
        $font = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font']);
        $fontBold = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font_bold']);
        //dump($theme);die();
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', false);
        $pdfOptions->set('isHtml5ParserEnabled', false);

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
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvFacturecab->getDossier()->getLogo()) && $UvFacturecab->getDossier()->getLogo() != null ? $urlFichierVente . $UvFacturecab->getDossier()->getLogo() : "img/default/default-logo.png";
        $totalArticles = $UvFacturecab->getArrayTotalArticleByFacture($UvFacturecab);

        //       dump($totalArticles); die();
        //        dump($totalArticles['prixTvaSansDevise']); 
        //       dump($UvFacturecab->getRemise()); 
        //dump($image);die();
        $tvaRetenu = $totalArticles['prixTvaSansDevise'] * $UvFacturecab->getRemise() / 100;

        //        dump($totalArticles['prixTvaSansDevise']-$retenu);
        //        die();



        //dump($font->getV());die();
        $html = $this->renderView(
            'module_pdf/' . $theme->getAbreviation() . '/index.html.twig',
            [
                "Tva" => $totalArticles['prixTvaSansDevise'] - $tvaRetenu,
                'cab' => $UvFacturecab,
                'image' => $image,
                'theme' => $theme,
                'font' => $font->getV(),
                'font_bold' => $fontBold->getV(),



            ]
        );
        //echo($html);die();
        ob_get_clean();

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');


        // Render the HTML as PDF
        $dompdf->render();

        // $canvas = $dompdf->getCanvas();
        //$c = $canvas->get_page_count();
        $canvas = $dompdf->get_canvas();
        if ($UvFacturecab->getDossier()->getAbreviation() == "A2MF") {
            $canvas->page_text(540, 820, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));
        } else {
            $canvas->page_text(515, 762, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));
        }
        //dump($UvFacturecab->getDossier()->getAbreviation());die();


        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("facture.pdf", [
            "Attachment" => false
        ]);
    }






    /**
     * @Route("/{id}/condition",options = { "expose" = true } , name="uv_facturecab_condition", methods={"GET","POST"})
     */
    public function condition(Request $request, UvFacturecab $UvFacturecab, Breadcrumbs $breadcrumbs): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvVente');
        //  $dc = $this->session->get('dossierCourantUgouvVente');
        //  $modules = $this->session->get('modules');
        //  
        // 
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_ugouv_vente',
        //     'sousModule' => '_fa_cl',
        //     'operation' => '_condition',
        //     'dossier'=>$dc->getPrefix()
        //     
        // ]);
        // /* operations autorises pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations'];
        // 
        //  /* Verifier si cet utilisateur il peut acceder a cette operation */
        //  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations']['_index'])) {
        //      return new Response("Operation non autorie", 403);
        //  }

        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl'];


        //

        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "uv_facturecab_index");
        //  $breadcrumbs->addItem("Consulter");

        //$dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_vente', '_fa_cl', '_condition', [true, $UvFacturecab->getCode()]);

        $conditions = $this->getDoctrine()
            ->getRepository(TConditionpaiement::class)
            ->findBy(["facture" => $UvFacturecab]);

        $conditionpaiement = new TConditionpaiement();
        $form = $this->createForm(TConditionpaiementType::class, $conditionpaiement);
        $form->handleRequest($request);


        $valider = 'No';
        if (isset($UvFacturecab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }


        return $this->render('module_vente/uv_facturecab/condition.html.twig', [
            'facture' => $UvFacturecab,
            'conditions' => $conditions,
            'form' => $form->createView(),
            'operations' => $operations,
            'valider' => $valider



        ]);
    }



    /**
     * @Route("/{id}/insertcondition", name="uv_facturecab_condition_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insertCondition(Request $request, UvFacturecab $UvFacturecab, ValidatorInterface $validator, Breadcrumbs $breadcrumbs): Response
    {

        $session = new Session();




        $conditionpaiement = new TConditionpaiement();
        $form = $this->createForm(TConditionpaiementType::class, $conditionpaiement);
        $form->handleRequest($request);


        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {

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


                $entityManager = $this->getDoctrine()->getManager();
                $conditionpaiement->setFacture($UvFacturecab);
                $now = date_create('now');

                $conditionpaiement->setDateCreation($now);
                /*
                 * Enregistrer les informations
                 */
                $entityManager->persist($conditionpaiement);
                $entityManager->flush();
                // dump( $conditionpaiement);
                //die;
                return $this->json(['data' => "data", 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
            }
        }
    }


    /**
     * @Route("/{id}/deletecondition", name="uv_facturecab_condition_delete" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function DeleteCondition(Request $request, TConditionpaiement $TConditionpaiement): Response
    {

        if (empty($TConditionpaiement) == false) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($TConditionpaiement);
            $entityManager->flush();

            return $this->json([
                'data' => "deleted",
                'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }



    /**
     * @Route("/{id}/archiver", name="uv_facturecab_archiver" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function Archiver(Request $request, UvFacturecab $UvFacturecab): Response
    {

        if (empty($UvFacturecab) == false) {
            $entityManager = $this->getDoctrine()->getManager();
            $UvFacturecab->setActive(0);
            $entityManager->persist($UvFacturecab);
            $entityManager->flush();
            return $this->json([
                'data' => "Succes",
                'message' => ['title' => 'Succes', 'text' => 'l\'archivage a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de l\'archivage .', 'type' => 'error']]);
    }


    /**
     * @Route("{id}/{token}/delete", name="uv_facturecab_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteFactureCab(Request $request, UvFacturecab $UvFacturecab, $token): Response
    {
        if ($this->isCsrfTokenValid('delete' . $UvFacturecab->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($UvFacturecab)) {




                    if (count($UvFacturecab->getReglements()) > 0) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 403);
                    }
                    foreach ($UvFacturecab->getLivraisons() as $key => $livraison) {
                        $livraison->setFacture(Null);
                        $entityManager->persist($livraison);
                    }
                    $entityManager->flush();
                    $UvFacturecab->setIsdeleted(true);
                    // $entityManager->remove($UvFacturecab);

                    //  dump('ddddd');
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
     * @Route("/delete", name="uv_facturecab_delete_multiple",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deletefacturemultiple(Request $request, UvFacturecabRepository $UvFacturecabRepository): Response
    {
        if ($request->isXmlHttpRequest()) {
            try {
                $entityManager = $this->getDoctrine()->getManager();

                $UvFacturecabs = $UvFacturecabRepository->findBy(['id' => $request->request->get('_array_ids')]);
                if (!empty($UvFacturecabs)) {
                    foreach ($UvFacturecabs as $key => $UvFacturecab) {

                        if (count($UvFacturecab->getReglements()) > 0) {

                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 403);
                        }
                    }
                    foreach ($UvFacturecabs as $key => $UvFacturecab) {

                        foreach ($UvFacturecab->getLivraisons() as $key => $livraison) {
                            $livraison->setFacture(Null);
                            $entityManager->persist($livraison);
                        }
                        $entityManager->flush();
                        $UvFacturecab->setIsdeleted(true);
                        // $entityManager->remove($UvFacturecab);
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
     * @Route("/apply-transition/{id}", methods={"POST"}, options={"expose"=true} , name="uv_facturecab_apply_transitions")
     */
    public function applyTransition(Request $request, UvFacturecab $facture, \App\Repository\UGeneralOperationRepository $UGeneralOperationRepository)
    {
        $api = new ApiController();
        $Ecriture = $this->getDoctrine()->getManager()->getRepository(Gaccentry::class)->findOneBy(['num' => $facture->getCode() ]);
        if(!$Ecriture){
            $facture->setUserInjecter($this->getUser()->getId());
            $data = $api->api_output_fac($facture->getId(),$this->connection,$this->entityManager, $this->client);
            if($data->getContent()== "done") {
                $this->getDoctrine()->getManager()->flush();
            }
        }
        //die('hr');
        if($facture->getDossier()->getId() != $this->appService->getDossierCourant()->getId() ){
            return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
        }
        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($facture);
        if ($workflow->can($facture, $transition)) {
            try {
                //  $statut = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'module' => 'RCF', 'fonction' => 'ACHAT']);
                // dump($statut); die(); 
                //   $livraison->setStatut($statut);
                $facture->setUserUpdated($this->getUser());
                $valide = 0;
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a valide */
                if (in_array($transition, ['apres_creer_valider'])) {
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAC', 'abreviation' => 'tr_fac']);
                    $valide = 1;
                    $facture->setStatut($PStatutgrv);

                    $facture->setDateValider(new \DateTime());
                    $facture->setUserValider($this->getUser());
                }

                if (in_array($transition, ['apres_generer_valider'])) {
                    //   $reglements= array();
                    if (!empty($facture->getOperation())) {

                        $url = $this->generateUrl('tr_operation_show', [
                            'id' => $facture->getOperation()->getId(),
                        ]);
                        $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $facture->getOperation()->getCode() . "</a>";

                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible d'annuler la generation , 
                                                      cette facture Client dispose deja de(s) operation(s)  ,
                                           
                                          " . implode(',', $receptions) . "
                                          <br/>NB : pour effectuer cette operation veuillez supprimer ce(s) operation(s) "
                        ]]);
                    }
                }

                if (in_array($transition, ['apres_valider_generer'])) {
                    $entityManager = $this->getDoctrine()->getManager();

                    $factureAchat = $entityManager->getRepository(UaTFacturefrscab::class)->findOneBy(['refdocasso' => $facture->getCode()]);
                    if($factureAchat and $factureAchat->getPositionActuel() == "creer") {
                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de generer cette facture ,<br> NB :  Veuillez valider la facture fournisseur! "
                        ]]);
                    }
                    //die("ddd");
                    // $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => 'FAC']);
                    //$facture->setPStatutgrv($PStatutgrv);
                    $facture->setDateValider(new \DateTime());
                    $facture->setUserValider($this->getUser());
                    $entityManager = $this->getDoctrine()->getManager();
                    $dc = $this->appService->getDossierCourant();
                    $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                    $uGeneralOperation = new UGeneralOperation();
                    $uGeneralOperation->setActive(true);
                    $uGeneralOperation->setSens(1);
                    $uGeneralOperation->setFactureClient($facture);
                    $uGeneralOperation->setClient($facture->getClient());
                    $uGeneralOperation->setUppartenaire($facture->getClient());

                    if($facture->getPPiece()->getId() == 5) {
                        $uGeneralOperation->setPPiece($entityManager->getRepository(PPiece::class)->find(35));
                    } else {
                        $uGeneralOperation->setPPiece($entityManager->getRepository(PPiece::class)->find(34));
                    }
                    $uGeneralOperation->setFournisseur($dossier->getPartenaire());
                    $uGeneralOperation->setRefDocAsso($facture->getRefdocasso());
                    $uGeneralOperation->setDateDocAsso($facture->getDatedocasso());
                    $uGeneralOperation->setMontantFinal($facture->getMontant() * $uGeneralOperation->getSens());

                    //$uGeneralOperation->setNumCheque($facture->getNumcheque());
                    $uGeneralOperation->setDate($facture->getDatefacture());
                    $uGeneralOperation->setDossier($facture->getDossier());
                    $uGeneralOperation->setUserUpdated($this->getUser());
                    $uGeneralOperation->setMontant($facture->getMontant());
                    //                    $uGeneralOperation->setSens(-1);
                    //                    if($facture->getPiece()->getCode() == "FAV"){
                    //                       $uGeneralOperation->setSens(1);
                    //                    }
                    $cat = null;

                    if (in_array($uGeneralOperation->getClient()->getCategorie()->getK(), ['externe',  'externe es'])) {
                        $cat = 'E';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 5 compte phisique
                    } elseif ($uGeneralOperation->getClient()->getCategorie()->getK() == 'interne') {
                        $cat = 'I';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte virtuelle
                    }
                    if ($facture->getAvoir() == 1) {
              
                        $uGeneralOperation->setCompte(
                            $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                                'dossier' => $dossier,
                                'type' => $typeCompte
                            ])
                        );
                    }else{
                        $uGeneralOperation->setCompteDestinataire(
                            $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                                'dossier' => $dossier,
                                'type' => $typeCompte
                            ])
                        );
                        
                    
                    }
                    // $uGeneralOperation->setCompteDestinataire(
                    //     $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                    //         'dossier' => $dossier,
                    //         'type' => $typeCompte
                    //     ])
                    // );
                    $uGeneralOperation->setPCompte($uGeneralOperation->getCompteDestinataire());

                    // $uGeneralOperation->setCompteDestinataire(
                    //     $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossier->getId(), $typeCompte)
                    // );

                    $entityManager->persist($uGeneralOperation);
                    // $entityManager->flush();

                    // $uGeneralOperation->setCode($UGeneralOperationRepository->GetLastCode($cat, "OPRE"));
                    //generer operation partie Vente

                    if($factureAchat and $factureAchat->getPositionActuel() == "valider") {
                        if (in_array($uGeneralOperation->getClient()->getCategorie()->getK(), ['externe',  'externe es'])) {
                            $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 5 compte phisique
                            $pPiece = $entityManager->getRepository(PPiece::class)->find(35);
                        } elseif ($uGeneralOperation->getClient()->getCategorie()->getK() == 'interne') {
                            $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte virtuelle
                            $pPiece = $entityManager->getRepository(PPiece::class)->find(34);
                        }

                        $uGeneralOperationAchat = new UGeneralOperation();
                        $uGeneralOperationAchat->setParvenue($factureAchat->getParvenue());
                        $uGeneralOperationAchat->setAutreInformation($factureAchat->getObservation());
                        $uGeneralOperationAchat->setActive(true);
                        $uGeneralOperationAchat->setSens(-1);
                        $uGeneralOperationAchat->setFactureFournisseur($factureAchat);
                        $uGeneralOperationAchat->setFournisseur($factureAchat->getFournisseur());
                        $uGeneralOperationAchat->setUppartenaire($factureAchat->getFournisseur());

                        $uGeneralOperationAchat->setRefDocAsso($factureAchat->getRefdocasso());
                        $uGeneralOperationAchat->setDateDocAsso($factureAchat->getDatedocasso());
                        $uGeneralOperationAchat->setNumCheque($factureAchat->getNumcheque());
                        $uGeneralOperationAchat->setDate($factureAchat->getDatefacture());
                        $uGeneralOperationAchat->setDossier($factureAchat->getDossier());
                        $uGeneralOperationAchat->setUserUpdated($this->getUser());
                        $uGeneralOperationAchat->setMontant($factureAchat->getMontant());

    
                        //$uGeneralOperation->setNumCheque($facture->getNumcheque());
                        $uGeneralOperationAchat->setDate($factureAchat->getDatefacture());
                        $uGeneralOperationAchat->setDossier($factureAchat->getDossier());
                        $uGeneralOperationAchat->setUserUpdated($this->getUser());
                        $uGeneralOperationAchat->setMontant($factureAchat->getMontant());
                        $uGeneralOperationAchat->setMontantFinal($factureAchat->getMontant() * $uGeneralOperationAchat->getSens());
                        $uGeneralOperationAchat->setPPiece(
                            $pPiece
                        );
                        // $pieceDesignation = "PINT";
                        //                    $uGeneralOperation->setSens(-1);
                        //                    if($facture->getPiece()->getCode() == "FAV"){
                        //                       $uGeneralOperation->setSens(1);
                        //                    }
                        

                        $uGeneralOperationAchat->setCompte(
                            $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                                'dossier' => $factureAchat->getDossier(),
                                'type' => $typeCompte
                            ])
                        );
                           
                        // $uGeneralOperationAchat->setCompteDestinataire(
                        //     $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                        //         'dossier' => $factureAchat->getFournisseur()->getDossier(),
                        //         'type' => $typeCompte
                        //     ])
                        // );
                        $uGeneralOperationAchat->setPCompte($uGeneralOperationAchat->getCompte());
                        // $uGeneralOperation->setCompteDestinataire(
                        //     $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossier->getId(), $typeCompte)
                        // );
    
                        $uGeneralOperationAchat->setCode($UGeneralOperationRepository->GetLastCodeByDossier($factureAchat->getDossier(), "I", "OPRD"));
                        $entityManager->persist($uGeneralOperationAchat);
                        
                        $uGeneralOperation->setParent($uGeneralOperationAchat);
                        $uGeneralOperationAchat->setParent($uGeneralOperation);
                        $workflow->apply($factureAchat, $transition);
                    }
                }


                $workflow->apply($facture, $transition);
                $this->get('doctrine')->getManager()->flush();
                if ($valide == 1) {
                    return $this->json(['code' => 200, 'id' => $facture->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                }
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }


    /**

     * @Route("/{id}/show/articles", name="uv_facturecab_articles_show", options={"expose"=true}, methods={"GET"})

     */
    public function showArticles(Request $request, Breadcrumbs $breadcrumbs, UvFacturecab $facture): Response
    {
        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvVente');
        //  $dc = $this->session->get('dossierCourantUgouvVente');
        //  $modules = $this->session->get('modules');





        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl'];




        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "uv_facturecab_index");
        $breadcrumbs->addRouteItem($facture->getCode(), "uv_facturecab_show", ['id' => $facture->getId()]);

        $breadcrumbs->addItem('Articles');



        $valider = 'No';
        if (isset($facture->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }
        return $this->render('module_vente/uv_facturecab/show_articles.html.twig', [
            'facture' => $facture,
            'valider' => $valider
        ]);
    }



    /**

     * @Route("/{id}/show/suivi", name="uv_facturecab_suivi_show", options={"expose"=true}, methods={"GET"})

     */
    public function showsuivi(Request $request, Breadcrumbs $breadcrumbs, UvFacturecab $facture): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantUgouvVente');
        // $dc = $this->session->get('dossierCourantUgouvVente');
        // $modules = $this->session->get('modules');
        // 
        // $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //    'module' => '_ugouv_vente',
        //    'sousModule' => '_fa_cl',
        //    'operation' => '_suivi',
        //    'dossier'=>$dc->getPrefix()
        //    
        //]);
        ///* operations autorises pour cet utilisateur */
        //$operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl']['operations'];
        //

        //

        // /* sous module courant */
        // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_cl'];




        // /* navigation  */
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem($sousModule['titre'], "uv_facturecab_index");
        // $breadcrumbs->addRouteItem($facture->getCode(), "uv_facturecab_show", ['id' => $facture->getId()]);
        //       $breadcrumbs->addItem('Suivi des operations');
        //$dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_vente', '_fa_cl', '_suivi', [true, $facture->getCode()]);


        //  $valider='No';
        //  if(isset($facture->getPositionActuel()['valider']))
        //  {
        //      $valider='valider';
        //     
        //  }

        return $this->render('module_vente/uv_facturecab/show_suivi.html.twig', [
            'facture' => $facture,
            //   'valider'=>$valider,
            'operations' => $operations
        ]);
    }


    /**

     * @Route("/{id}/show/historique", name="uv_facture_show_historique", options={"expose"=true}, methods={"GET"})

     */
    public function showhistorique(Request $request, UvFacturecab $facture): Response
    {

        return $this->render('module_vente/uv_facturecab/show_historique.html.twig', [
            'facture' => $facture,
            'historiques' => $this->getHistorique($facture)
        ]);
    }



    /**
     * @Route("/{id}/dynamiqueform", name="t_facture_document_dynamique_form", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueForm(ValidatorInterface $validator, Request $request, UvFacturecab $UvFacturecab): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder()
                ->setAction($this->generateUrl('t_facture_document_dynamique_pdf'))
                ->setMethod('GET')
                ->add('id', HiddenType::class, ['data' => $UvFacturecab->getId()])
                ->add('tva', CheckboxType::class, ['data' => true])
                ->add('code', CheckboxType::class, ['data' => false])
                ->add('ordre', CheckboxType::class, ['data' => true])
                ->add('titre', CheckboxType::class, ['data' => true])
                ->add('unite', CheckboxType::class, ['data' => true])
                ->add('remise', CheckboxType::class, ['data' => false])
                ->add('quantite', CheckboxType::class, ['data' => true])
                ->add('prixunitaire', CheckboxType::class, ['data' => true])
                ->add('prixttc', CheckboxType::class, ['data' => true])
                ->add('descriptionDetail', CheckboxType::class, ['data' => false])
                ->add('imageName', CheckboxType::class, ['data' => false])
                //entete
                ->add('entete', CheckboxType::class, ['data' => true])
                ->add('groupeArticle', CheckboxType::class, ['data' => true])

                ->getForm();
            $form->handleRequest($request);
            return $this->render('module_vente/uv_facturecab/dynamique_form.html.twig', [
                'uv_facturecab' => $UvFacturecab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/dynamiquepdf", name="t_facture_document_dynamique_pdf", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function dynamiquedocumentform(Request $request)
    {


        $pdfOptions = new Options();
        //$pdfOptions->set('isRemoteEnabled', true);
        //$pdfOptions->set('isHtml5ParserEnabled', true);
        //$pdfOptions->set('defaultFont', 'brush script mt');

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        $dompdf->set_option('defaultMediaType', 'all');
        $dompdf->set_option('isFontSubsettingEnabled', true);
        $pdfOptions->set("isPhpEnabled", true);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        //$dompdf->set_option('isFontSubsettingEnabled', true);
        $dompdf->setHttpContext($contxt);
        //dump($tAchatdemandeinternecab->getDossier()->getLogo());

        // the same call as in my previous example

        $UvFacturecab = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($request->query->get('form')['id']);


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvFacturecab->getDossier()->getLogo()) && $UvFacturecab->getDossier()->getLogo() != null ? $urlFichierVente . $UvFacturecab->getDossier()->getLogo() : "img/default/default-logo.png";

        /*foreach ($UvFacturecab->getDetails() as $key => $value) {
            # code...
            dump($value);
        }        
        die();*/
        $totalArticles = $UvFacturecab->getArrayTotalArticleByFacture($UvFacturecab);

        //       dump($totalArticles); die();
        //        dump($totalArticles['prixTvaSansDevise']); 
        //       dump($UvFacturecab->getRemise()); 
        $tvaRetenu = $totalArticles['prixTvaSansDevise'] * $UvFacturecab->getRemise() / 100;

        //        dump($totalArticles['prixTvaSansDevise']-$retenu);
        //        die();





        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT 
           det
            FROM App\Entity\UvFacturedet det                         
            LEFT JOIN det.cab fac
            LEFT JOIN det.article art
            LEFT JOIN art.groupeArticle gr
            WHERE fac.id = :facture 
            
            
            ORDER BY gr.id DESC "
        )->setParameter('facture', $UvFacturecab->getId());
        $details = $query->getResult();


        //  $details=$UvFacturecab->getDetails();
        // dump( $details);
        //  die;

        $html = $this->renderView('module_vente/uv_facturecab/pdf/document_dynamique.html.twig', [
            'UvFacturecab' => $UvFacturecab,
            "Tva" => $totalArticles['prixTvaSansDevise'] - $tvaRetenu,
            'cab' => $UvFacturecab,
            'details' => $details,
            'image' => $image,
            'sans' => '',
            "ht" => $totalArticles['prixHtSansDevise'] - $tvaRetenu,
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],

        ]);
        ob_get_clean();
        //         $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //


        /*  function injectPageCount(Dompdf $dompdf): void
        {
            /** @var CPDF $canvas * /
            $canvas = $dompdf->getCanvas();
            $pdf = $canvas->get_cpdf();
            dump($pdf);die();
    
            foreach ($pdf->objects as &$o) {
                //dump($o);
                if ($o['t'] === 'contents') {
                    $o['c'] = str_replace('DOMPDF_PAGE', $canvas->get_page_count(), $o['c']);
                }
            }
            //die();
        }*/

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        //dump($dompdf->getCanvas()->get_dompdf()->getDom());die();
        $dompdf->render();
        $canvas = $dompdf->getCanvas();
        //$c = $canvas->get_page_count();
        $canvas = $dompdf->get_canvas();
        $canvas->page_text(515, 792, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));
        //$canvas->page_text(5, 5, "Page {PAGE_NUM} of {PAGE_COUNT}", $this->config->get('dompdf.defines.DOMPDF_DEFAULT_FONT'), 8, array(0, 0, 0));
        //injectPageCount($dompdf);
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }




    /**
     * @Route("/desactiver", name="uv_facture_desactiver", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function DesactiverFacture(ValidatorInterface $validator, Request $request): Response
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

                $facture = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($value);
                $position = $facture->getPositionActuel();

                if ($position == "valider") {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de desactive une facture valide </br> ' . $facture->getCode() . ' ']], 200);
                }
            }
            foreach ($id as $key => $value) {
                $facture = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($value);


                $facture->setActive(false);
                $entityManager->persist($facture);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La desactivation a ete bien effectue  .'], 'data' => "bien"], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }





    /**
     * @Route("/{id}/genererFacture", name="uv_facturefrscab_generer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function genererFacture(ValidatorInterface $validator, Request $request, UvFacturecab $UvFacturecab): Response
    {
        if ($request->isXmlHttpRequest()) {
            $dc = $this->appService->getDossierCourant();
            $operations = $this->appService->getOperations('_module_vente', '_fa_cl', '_generer', [true, $UvFacturecab->getCode()]);

            $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);
            //dump($PGlobalParam);die();
            //$PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->findOneBy(['cab'=>$PGlobalParam]);
            $form = $this->createFormBuilder()
                ->add('id', HiddenType::class, ['data' => $UvFacturecab->getId()])
                // ->add('parvenue', EntityType::class, [
                //     'class' => PGlobalParamDet::class,
                //     'query_builder' => function (EntityRepository $er) use ($PGlobalParam) {
                //         return $er->createQueryBuilder('a')
                //             ->where('a.cab = :type')
                //             ->setParameter('type', $PGlobalParam)
                //             ->orderBy('a.id', 'ASC');
                //     },
                //     'choice_label' => 'v',
                //     'data' => $UvFacturecab->getParvenue(),
                //     'constraints' => [new NotBlank()]
                // ])
                ->add('refDocAsso', TextType::class, ['data' => $UvFacturecab->getRefdocasso(), 'constraints' => [new NotBlank()]])
                ->add('dateDocAsso', DateType::class, ['data' => $UvFacturecab->getDatedocasso(), 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
                ->add('autre', TextareaType::class, ['data' => $UvFacturecab->getObservation()])
                ->getForm();
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                if($UvFacturecab->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
                }
                $entityManager = $this->getDoctrine()->getManager();

                $date = new \DateTime($request->request->get('form')['dateDocAsso']);
                /*$UvFacturecab->setParvenue($PGlobalParamDet);*/
                $UvFacturecab->setObservation($request->request->get('form')['autre']);
                $UvFacturecab->setRefdocasso($request->request->get('form')['refDocAsso']);
                $UvFacturecab->setDatedocasso($date);

                $entityManager->persist($UvFacturecab);
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .'], 'data' => "bien"], 200);
            }

            return $this->render('module_vente/uv_facturecab/generer.html.twig', [
                'facture' => $UvFacturecab,
                'form' => $form->createView(),
                'operations' => $operations,
            ]);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }



    /**
     * @Route("/{id}/document/old_sys", name="pdf_show_uv_facturecab_old_sys", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(UvFacturecab $UvFacturecab, UaTReglementfrscabRepository $rep, $id)
    {  
        
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($UvFacturecab->getCode(), $generator::TYPE_CODE_128,1,30);
        //dump($UaTFacturefrscab);
        //die();
        // $dc = $this->appService->getDossierCourant();
        //dump($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());die();
        $theme  = $this->getDoctrine()
            ->getRepository(PGlobalParam::class)
            ->find($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());
        $font = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font']);
        $fontBold = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font_bold']);
        //dump($theme);die();
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', false);
        $pdfOptions->set('isHtml5ParserEnabled', false);

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
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvFacturecab->getDossier()->getLogo()) && $UvFacturecab->getDossier()->getLogo() != null ? $urlFichierVente . $UvFacturecab->getDossier()->getLogo() : "img/default/default-logo.png";
        $totalArticles = $UvFacturecab->getArrayTotalArticleByFacture($UvFacturecab);

        //       dump($totalArticles); die();
        //        dump($totalArticles['prixTvaSansDevise']); 
        //       dump($UvFacturecab->getRemise()); 
        //dump($image);die();
        $tvaRetenu = $totalArticles['prixTvaSansDevise'] * $UvFacturecab->getRemise() / 100;

        //        dump($totalArticles['prixTvaSansDevise']-$retenu);
        //        die();


        $dossier = $UvFacturecab->getDossier()->getId();

        $titre = "NOTE DE DEBIT";

        // if ($datacab['id_partenaire'] == '544' or $datacab['id_partenaire'] == '723'  or $datacab['id_partenaire'] == '1704') {
        //     $titre = "FACTURE";
        // }

        if ($dossier == '10' || $dossier == '56' || $dossier == "198" ||$dossier == '86' || $dossier == '71' || $dossier == '199') {
            $titre = "FACTURE";
        }
    
        $prixTotHT = 0;
        $prixTotNet = 0;
        $TotTva = 0;
        $baseTVA = 0;


        $total = 0;
        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src' => '_vente_lfacture', 'code' => $UvFacturecab->getCode()]);

        $datailss = $articleold;

        if ($UvFacturecab->getOldSys() == 1) {

            $datailss = $articleold;
        } else {
            $datailss = $UvFacturecab->getDetails();
        }

        foreach ($datailss as  $detail) {

            $total += $detail->getPrixunitaire();

            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + ($detail->getTva()) / 100));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $net = $prixTotNet - $UvFacturecab->getRemise();

        // if ($prixTotNet > 0) {
        //     $net = $prixTotNet - $UvFacturecab->getRemise();
        // } else {
        //     $net = ($prixTotNet - $UvFacturecab->getRemise())  * -1;
        // }

        // $obj = new nuts($net, "MAD");
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
            $obj = new nuts($montantfinal, "MAD");
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }
       
        
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvFacturecab, 'postion' => 1, 'tableName' => 15]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvFacturecab, 'postion' => 2, 'tableName' => 15]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvFacturecab, 'postion' => 3, 'tableName' => 15]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvFacturecab, 'postion' => 4, 'tableName' => 15]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        //dump($font->getV());die();
        $html = $this->renderView(
            "module_vente/uv_facturecab/pdf/document.html.twig",
            [
                "Tva" => $totalArticles['prixTvaSansDevise'] - $tvaRetenu,
                'cab' => $UvFacturecab,
                'image' => $image,
                'theme' => $theme,
                'font' => $font->getV(),
                'font_bold' => $fontBold->getV(),
                'details' => $articleold,
                "signature1" => $signature1,
                "signature2" => $signature2, 
                "signature3" => $signature3,
                "signature4" => $signature4,
                'text' => $text,
                'titre' => $titre,
                "barcode" => $barcode,


            ]
        );
        //echo($html);die();
        ob_get_clean();

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');


        // Render the HTML as PDF
        $dompdf->render();

        // $canvas = $dompdf->getCanvas();
        //$c = $canvas->get_page_count();
        // $canvas = $dompdf->get_canvas();
        // if($UvFacturecab->getDossier()->getAbreviation() == "A2MF"){
        //     $canvas->page_text(540, 820, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));
        // }else{
        //     $canvas->page_text(515, 762, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));
        // }
        // //dump($UvFacturecab->getDossier()->getAbreviation());die();


        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("facture.pdf", [
            "Attachment" => false
        ]);
    }
    /**
     * @Route("/{id}/document/technique/old_sys", name="pdf_show_uv_facturecab_old_sys_2", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf2(UvFacturecab $UvFacturecab, UaTReglementfrscabRepository $rep, $id)
    {  //dump($UaTFacturefrscab);
        //die();
        // $dc = $this->appService->getDossierCourant();
        // dump($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());die();
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($UvFacturecab->getCode(), $generator::TYPE_CODE_128,1,30);

        $theme  = $this->getDoctrine()
            ->getRepository(PGlobalParam::class)
            ->find($this->session->get('dossierCourant') ? $this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId() : 7);
        $font = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font']);
        $fontBold = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font_bold']);
        //dump($theme);die();
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', false);
        $pdfOptions->set('isHtml5ParserEnabled', false);

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
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvFacturecab->getDossier()->getLogo()) && $UvFacturecab->getDossier()->getLogo() != null ? $urlFichierVente . $UvFacturecab->getDossier()->getLogo() : "img/default/default-logo.png";
        $totalArticles = $UvFacturecab->getArrayTotalArticleByFacture($UvFacturecab);

        //       dump($totalArticles); die();
        //        dump($totalArticles['prixTvaSansDevise']); 
        //       dump($UvFacturecab->getRemise()); 
        //dump($image);die();
        $tvaRetenu = $totalArticles['prixTvaSansDevise'] * $UvFacturecab->getRemise() / 100;

        //        dump($totalArticles['prixTvaSansDevise']-$retenu);
        //        die();


        $dossier = $UvFacturecab->getDossier()->getId();

        $titre = "NOTE DE DEBIT";

        // if ($datacab['id_partenaire'] == '544' or $datacab['id_partenaire'] == '723'  or $datacab['id_partenaire'] == '1704') {
        //     $titre = "FACTURE";
        // }

  
        if ($dossier == '10' || $dossier == '56'||$dossier == '86' || $dossier == '71' || $dossier == '16'|| $dossier == '199') {
            $titre = "FACTURE";
        }
        $prixTotHT = 0;
        $prixTotNet = 0;
        $TotTva = 0;
        $baseTVA = 0;


        $total = 0;
        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src' => '_vente_lfacture', 'code' => $UvFacturecab->getCode()]);

        $datailss = $articleold;

        if ($UvFacturecab->getOldSys() == 1) {

            $datailss = $articleold;
        } else {
            $datailss = $UvFacturecab->getDetails();
        }

        foreach ($datailss as  $detail) {

            $total += $detail->getPrixunitaire();

            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + ($detail->getTva()) / 100));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $net = $prixTotNet - $UvFacturecab->getRemise();

        // if ($prixTotNet > 0) {
        //     $net = $prixTotNet - $UvFacturecab->getRemise();
        // } else {
        //     $net = ($prixTotNet - $UvFacturecab->getRemise()) * -1;
        // }

        // $obj = new nuts($net, "MAD");
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
            $obj = new nuts($montantfinal, "MAD");
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }

  
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvFacturecab, 'postion' => 1, 'tableName' => 15]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvFacturecab, 'postion' => 2, 'tableName' => 15]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvFacturecab, 'postion' => 3, 'tableName' => 15]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvFacturecab, 'postion' => 4, 'tableName' => 15]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $html = $this->renderView(
            "module_vente/uv_facturecab/pdf/document2.html.twig",
            [
                "Tva" => $totalArticles['prixTvaSansDevise'] - $tvaRetenu,
                'cab' => $UvFacturecab,
                'image' => $image,
                'theme' => $theme,
                'font' => $font->getV(),
                'font_bold' => $fontBold->getV(),
                'details' => $articleold,
                'text' => $text,
                'titre' => $titre,
                "signature1" => $signature1,
                "signature2" => $signature2, 
                "signature3" => $signature3,
                "signature4" => $signature4,
                "barcode" => $barcode,



            ]
        );
        // echo($html);die();
        ob_get_clean();

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');


        // Render the HTML as PDF
        $dompdf->render();

        // $canvas = $dompdf->getCanvas();
        //$c = $canvas->get_page_count();
        // $canvas = $dompdf->get_canvas();
        // if($UvFacturecab->getDossier()->getAbreviation() == "A2MF"){
        //     $canvas->page_text(540, 820, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));
        // }else{
        //     $canvas->page_text(515, 762, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));
        // }
        // //dump($UvFacturecab->getDossier()->getAbreviation());die();


        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("facture.pdf", [
            "Attachment" => false
        ]);
    }



    /**
     * @Route("/{id}/documentHT/old_sys", name="uv_facturecab_HT_documents", options={"expose"=true}   , methods={"GET"})
     */
    public function documentHTpdf(Connection $connection, Breadcrumbs $breadcrumbs, UvFacturecab $UvFacturecab, UaTReglementfrscabRepository $rep, $id)
    {  //dump($UaTFacturefrscab);
        //die();
        $dc = $this->appService->getDossierCourant();
        $FOND = $connection->fetchAll("SELECT societe FROM `u_p_partenaire` WHERE id = 543");
        // dd($FOND);
        //dump($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());die();
        $theme  = $this->getDoctrine()
            ->getRepository(PGlobalParam::class)
            ->find($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());
        $font = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font']);
        $fontBold = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font_bold']);
        //dump($theme);die();
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', false);
        $pdfOptions->set('isHtml5ParserEnabled', false);

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
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvFacturecab->getDossier()->getLogo()) && $UvFacturecab->getDossier()->getLogo() != null ? $urlFichierVente . $UvFacturecab->getDossier()->getLogo() : "img/default/default-logo.png";
        $totalArticles = $UvFacturecab->getArrayTotalArticleByFacture($UvFacturecab);

        $tvaRetenu = $totalArticles['prixTvaSansDevise'] * $UvFacturecab->getRemise() / 100;

        $prixTotHT = 0;
        $prixTotNet = 0;
        $TotTva = 0;
        $baseTVA = 0;


        $total = 0;
        foreach ($UvFacturecab->getDetails() as  $detail) {


            $total += $detail->getPrixunitaire();

            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + ($detail->getTva()) / 100));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $net = $prixTotNet - $UvFacturecab->getRemise();

        $dossier = $UvFacturecab->getDossier()->getId();
        //   $Ice = $UvFacturecab->getDossier()->getIce();
        //   $Iff = $UvFacturecab->getDossier()->getIff();
        //   $Rc = $UvFacturecab->getDossier()->getRc();

        $titre = "FACTURE";

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
            $obj = new nuts($montantfinal, "MAD");
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }


        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src' => '_vente_facture', 'code' => $UvFacturecab->getCode()]);
        //dump($font->getV());die();8
        // dd($UvFacturecab->getClient());
        $html = $this->renderView(
            "module_vente/uv_facturecab/pdf/documentHT.html.twig",
            [
                "Tva" => $totalArticles['prixTvaSansDevise'] - $tvaRetenu,
                'cab' => $UvFacturecab,
                'image' => $image,
                'theme' => $theme,
                'font' => $font->getV(),
                'font_bold' => $fontBold->getV(),
                'details' => $articleold,
                'text' => $text,
                'titre' => $titre,
                'dossier' => $dossier,
                'FOND' => $FOND,
                'sites' => $dc



            ]
        );
        //echo($html);die();
        ob_get_clean();

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');


        // Render the HTML as PDF
        $dompdf->render();
        $dompdf->stream("facture.pdf", [
            "Attachment" => false
        ]);
    }



    /**
     * @Route("/{id}/documentTTC/old_sys", name="uv_facturecab_TTC_documents", options={"expose"=true}   , methods={"GET"})
     */
    public function documentTTCpdf(connection $connection, Breadcrumbs $breadcrumbs, UvFacturecab $UvFacturecab, UaTReglementfrscabRepository $rep, $id)
    {  //dump($UaTFacturefrscab);
        //die();
        $dc = $this->appService->getDossierCourant();
        $FOND = $connection->fetchAll("SELECT societe FROM `u_p_partenaire` WHERE id = 543");
        // dd($FOND);
        //dump($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());die();
        $theme  = $this->getDoctrine()
            ->getRepository(PGlobalParam::class)
            ->find($this->appService->getSousModule('_module_vente', '_fa_cl')['theme']->getId());
        $font = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font']);
        $fontBold = $this->getDoctrine()
            ->getRepository(PGlobalParamDet::class)
            ->findOneBy(['cab' => $theme->getId(), 'k' => 'font_bold']);
        //dump($theme);die();
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', false);
        $pdfOptions->set('isHtml5ParserEnabled', false);

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
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvFacturecab->getDossier()->getLogo()) && $UvFacturecab->getDossier()->getLogo() != null ? $urlFichierVente . $UvFacturecab->getDossier()->getLogo() : "img/default/default-logo.png";
        $totalArticles = $UvFacturecab->getArrayTotalArticleByFacture($UvFacturecab);

        $tvaRetenu = $totalArticles['prixTvaSansDevise'] * $UvFacturecab->getRemise() / 100;

        $prixTotHT = 0;
        $prixTotNet = 0;
        $TotTva = 0;
        $baseTVA = 0;


        $total = 0;
        foreach ($UvFacturecab->getDetails() as  $detail) {


            $total += $detail->getPrixunitaire();

            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + ($detail->getTva()) / 100));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $net = $prixTotNet - $UvFacturecab->getRemise();

        $dossier = $UvFacturecab->getDossier()->getId();
        //   $Ice = $UvFacturecab->getDossier()->getIce();
        //   $Iff = $UvFacturecab->getDossier()->getIff();
        //   $Rc = $UvFacturecab->getDossier()->getRc();

        $titre = "FACTURE";


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
            $obj = new nuts($montantfinal, "MAD");
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }


        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src' => '_vente_facture', 'code' => $UvFacturecab->getCode()]);
        //dump($font->getV());die();8
        // dd($UvFacturecab->getClient());
        $html = $this->renderView(
            "module_vente/uv_facturecab/pdf/documentTTC.html.twig",
            [
                "Tva" => $totalArticles['prixTvaSansDevise'] - $tvaRetenu,
                'cab' => $UvFacturecab,
                'image' => $image,
                'theme' => $theme,
                'font' => $font->getV(),
                'font_bold' => $fontBold->getV(),
                'details' => $articleold,
                'text' => $text,
                'titre' => $titre,
                'dossier' => $dossier,
                'FOND' => $FOND,
                'sites' => $dc



            ]
        );
        //echo($html);die();
        ob_get_clean();

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');


        // Render the HTML as PDF
        $dompdf->render();
        $dompdf->stream("facture.pdf", [
            "Attachment" => false
        ]);
    }




    /**
     * @Route("/Generer_transaction", name="vt_facture_generer_multiple", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function generer_proforma(ValidatorInterface $validator, Request $request, UvFacturecabRepository $UvFacturecabRepository): Response
    {
        //---------------------------


        $UvFacturecab = new UvFacturecab();


        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);



        $form = $this->createFormBuilder($UvFacturecab)


            ->add('Objet', TextType::class, ['constraints' => [new NotBlank()]])
            ->add('Lieu', TextType::class, ['constraints' => [new NotBlank()]])
            ->add('ids', HiddenType::class, [
                'mapped' => false,
                'data' => $serializer->serialize($request->request->get('_action'), 'json'),
            ])

            ->getForm();

        $form->handleRequest($request);

        // $res = $request->request->get('_action');




        if ($form->isSubmitted()) {

            $errors = $validator->validate($form);

            if ($form->get("Objet")->getData() != null) {


                $ids =    json_decode($request->request->get('form')['ids']);

                for ($i = 0; $i < count($ids); $i++) {

                    $transaction = $this->getDoctrine()->getRepository(UvFacturecab::class)->find(['id' => $ids[$i]]);

                    $GetLastCode = $UvFacturecabRepository->GetLastCode2();
                    $transaction->setCodeProforma($GetLastCode);
                    $transaction->setDateProforma(new \DateTime());
                    $transaction->setObjet($form->get("Objet")->getData());
                    $transaction->setLieu($form->get("Lieu")->getData());
                }


                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => 1]]);
            } else {
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
            }


            //  dump(   $form->get("refBanque")->getData());
            //  dump( $form->get("ids")->getData());die;

        }

        return $this->render('module_vente/uv_facturecab/genererpro.html.twig', [
            'form' => $form->createView(),
        ]);
    }



    public function getDevisTechnique($factureId, $articleId)
    {
        $factureId = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($factureId);
        $articleId = $this->getDoctrine()->getRepository(Uarticle::class)->find($articleId);
        $detail1 = $this->getDoctrine()->getRepository(DevisTechniqueCab::class)->findTehniquebyFacture($factureId, $articleId);
        $html = "";
        // dump($detail1);
        if (!$detail1) {
            return new Response("");
        }
        foreach ($detail1->getDevisTechniqueDets() as $key => $detTechnique) {
            $html .= '
                <tr>
                    <td style="width: 5%;text-transform: uppercase ;padding: 3px;font-size: 9px;text-align: left;"></td>
                    <td style="width: 10%;text-transform: uppercase ;padding: 3px;font-size: 9px;text-align: left;"></td>
                    <td style="width: 50%;text-transform: uppercase ;padding: 3px;font-size: 9px;text-align: left;padding-left: 2em;word-wrap: break-word">' . $detTechnique->getArticle() . '</td>
                    <td style="width: 5%;text-transform: uppercase ;padding: 3px;font-size: 9px;text-align: center;"></td>
                    <td style="width: 5%;text-transform: uppercase ;padding: 3px;font-size: 9px;text-align: center;">' . $detTechnique->getQte() . '</td>
                    <td style="width: 5%;text-transform: uppercase ;padding: 3px;font-size: 9px;text-align: right;">' . $detTechnique->getTva() . '</td>
                    <td style="width: 10%;text-transform: uppercase ;padding: 3px;font-size: 9px;text-align: right;">' . number_format($detTechnique->getPrixUntaire(), 2, ',', ' ') . '</td>


                </tr>';
        }
        
        return new Response($html);
    }

     /**
     * @Route("/uv_facturecab_info_ref/{id}", name="uv_facturecab_info_ref" ,options={"expose"=true} , methods={"GET"})
     */
    public function uv_facturecab_info_ref(UvFacturecab $id): Response
    {
       
        return new JsonResponse([
            'ref_doc' => $id->getRefdocasso(),
            'date_ref' => date_format($id->getDatedocasso() ? $id->getDatedocasso() : new \DateTime("now"), 'Y-m-d'),
            'date_valide' => date_format($id->getDatefacture() ? $id->getDatefacture() : new \DateTime("now") , 'Y-m-d'),
        ]);
    }
    /**
     * @Route("/uv_facturecab_set_info_ref/{id}", name="uv_facturecab_set_info_ref" ,options={"expose"=true} , methods={"POST"})
     */
    public function uv_facturecab_set_info_ref(Request $request,UvFacturecab $id): Response
    {

        $id->setRefdocasso($request->get('document_ref'));
        $id->setDatedocasso(new \DateTime($request->get('date_document')));
        $id->setDatefacture(new \DateTime($request->get('date_valider')));

        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse(1);
    }
}
