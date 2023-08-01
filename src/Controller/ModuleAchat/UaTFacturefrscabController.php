<?php

namespace App\Controller\ModuleAchat;

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
use App\Entity\UFactureType;
use App\Entity\UPPartenaire;
use App\Entity\UvFacturecab;
use App\Entity\PCompteBanque;
use App\Entity\TrTransaction;
use App\Entity\UaTechniqueCab;
use App\Entity\UPPartenaireTy;
use App\Entity\UsersSignature;
use App\Entity\PGlobalParamDet;
use App\Entity\ConfPdfParameter;
use App\Entity\PTransactionType;
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTFacturefrsdet;
use App\Entity\Usersignaturedoc;
use App\Controller\ApiController;
use App\Entity\PCompteBanqueType;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\UGeneralOperation;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use App\Entity\Avance;
use App\Entity\UaTReglementfrscab;
use App\Form\UaTFacturefrscabType;
use App\Form\UaTFacturefrsdetType;
use Doctrine\ORM\EntityRepository;
use App\Form\UATCommandefrscabType;
use App\Form\UATCommandefrsdetType;
use App\Entity\ArticlePlanComptable;
use App\Entity\Gaccentry;
use App\Form\UaTLivraisonfrsdetType;
use App\Form\UaTReglementfrscabType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use App\Entity\UATCommandefrscabAcompte;
use Doctrine\ORM\EntityManagerInterface;
use Picqer\Barcode\BarcodeGeneratorHTML;
use Symfony\Component\Workflow\Registry;
use App\Repository\TrTransactionRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UaTFacturefrscabRepository;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UATCommandefrscabRepository;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UaTLivraisonfrscabRepository;
use App\Repository\UaTReglementfrscabRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Constraints\Count;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;

/**
 * @Route("/achat/facturefrs")
 */
class UaTFacturefrscabController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry,EntityManagerInterface $entityManager,Connection $connection, AppService $AppService, HttpClientInterface $client)
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
     * @Route("/list2", name="ua_t_facturefrscab_list2",options = { "expose" = true } )
     */
    public function List2(Request $request, Connection $connection)
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

            foreach ($columns as $key => $value) {
                if ($key > 0 and $value) {
                    $where .= 'OR ';
                }
                if ($value) {
                    $where .= " $value LIKE '%$search%' ";
                }
            }
            $condition = " and (" . $where . ")";
        }



        // dd($condition);
        $sql = "SELECT fac.`id` ,
fac.`code`, 
fac.old_sys,
DATE_FORMAT(fac.`dateDocAsso`,'%d/%m/%Y')  dateDocAsso , 
fac.`refDocAsso` ,
            fac.`observation`,
           frs.societe as fournisseur , 
            fac.`montant` ,
            fac.montant_reception,
            fac.montant_acompte,
            fac.mtremise,
            parvenue.v parv,
            tab.montantRegle ,
            tab.NbrReglements,
            
            fac.position_actuel,
            fac.statutsig as signature 
        FROM `ua_t_facturefrscab` fac
        left join u_general_operation op on op.facture_fournisseur_id = fac.id
        left join pglobal_param_det parvenue on fac.parvenue_id = parvenue.id
        left join `u_p_partenaire` frs on frs.id = fac.partenaire_id
        left join `up_piece` p on p.id = fac.piece_id
left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montantRegle from  u_general_operation op  
left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
group by op.id) tab on tab.operation_id = op.id
where 1= 1 and fac.active=1 and  fac.dossier_id = " . $this->appService->getDossierCourant()->getId() . "" . $condition . " " . $searchIndiv;

        $sql .= " GROUP by fac.id";
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
        // echo($sql);die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {
            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            $str = '';
            if ($value['old_sys'] == 1) {
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='" . $value['id'] . "'></i>";
            }
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $id . "'>";
            $url = "<a class='active-link' href='" . $this->generateUrl('ua_t_facturefrscab_consulte', ['id' => $value['id']]) . "'> " . substr($value['code'], -14) . " </a>" . $str;
            $nestedData[] = "<span  cursor:pointer' class='hint--right' aria-label='" . $value['code'] . "'>" . $url . "</span>";
            $nestedData[] = $value['dateDocAsso'];
            $refDocAsso = $value['refDocAsso'];
            if (strlen($refDocAsso) >= 12) {
                $nestedData[] = mb_substr($refDocAsso, 0, 12) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['refDocAsso'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $refDocAsso;
            }
            $observation = $value['observation'];
            if (strlen($observation) >= 14) {
                $nestedData[] = mb_substr($observation, 0, 10) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['observation'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $observation;
            }
            $fournisseur = $value['fournisseur'];
            if (strlen($fournisseur) >= 14) {
                $nestedData[] = mb_substr($fournisseur, 0, 14) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['fournisseur'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] = $fournisseur;
            }
            $nestedData[] = number_format($value['montant_acompte'], 2, ',', ' ');
            $nestedData[] = number_format($value['mtremise'], 2, ',', ' ');
            $nestedData[] = number_format($value['montant_reception'], 2, ',', ' ');
            $nestedData[] = number_format($value['montant'], 2, ',', ' ');

            $nestedData[] = number_format($value['montantRegle'], 2, ',', ' ');
            $nestedData[] = $value['NbrReglements'];
            $nestedData[] = $value['parv'];
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

            foreach ($this->appService->getOperations('_module_achat', '_fa_fr', '_index', true) as $key1 => $value1) {
                if ($value1['eachRow'] != null) {
                    // dd($value1);
                    $operations[$key1] = $value1;
                    $operations[$key1]['id_row'] = $id;
                    $operations[$key1]['id'] = $id;
                    if ($value1['route'] != "" && $value1['routeWithParam'] == true) {
                        $operations[$key1]['_route_link'] =   $this->generateUrl($value1['route'], ['id' => $id], UrlGenerator::ABSOLUTE_URL);
                    }
                }
            }
            //echo $id; 
            //  dump($operations); die(); 

            // trier les actions selon la position du wokrlow
            if (in_array($value['position_actuel'], ['valider'])) {
                unset($operations['_delete_facture'], $operations['_desactiver_facture'], $operations['_change_dossier']);
            }
            $array2 = array();
            // recuperer les positions acessible selon le workow 
            if (isset($operations['_workflow'])) {
                unset($operations['_workflow']);
                $obj = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($id);
                $workflow = $this->workflowRegistry->get($obj);
                $transitions = $workflow->getEnabledTransitions($obj);


                foreach ($transitions as $key => $value) {
                    $array2[$key]['name'] = $value->getName();
                    $array2[$key]['id'] = $id;
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
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="ua_t_facturefrscab_list")
     * 
     */
    public function ListAction(Connection $connection)
    {
        /**
         * recuperer la valeur de statut s'il existe
         *
         * */
        //   $dc = $this->session->get('dossierCourantUgouvAchat');
        $dc = $this->appService->getDossierCourant();


        //        $users = $connection->fetchAll("
        //        SELECT cab.id,cab.observation ,cab.refDocAsso as reference, clt.nom as client ,cab.mtremise , clt.id AS idClt, cab.datefacture as datefacture ,st.statut,cab.refDocAsso,MtHt, MtTtc,MtReg
        //        FROM ua_t_facturefrscab cab 
        //        INNER JOIN (SELECT t_facturefrscab_id, SUM(quantite*prixunitaire) MtHt,SUM(prixttc) MtTtc FROM ua_t_facturefrsdet GROUP BY t_facturefrscab_id) det ON cab.id = det.t_facturefrscab_id 
        //        LEFT JOIN u_p_partenaire clt ON clt.id = cab.partenaire_id 
        //        LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
        //        /*LEFT JOIN (SELECT codefacture,SUM(mtreglement) MtReg FROM ua_t_reglementfrs GROUP BY codefacture) reg ON reg.codefacture = cab.codefacture */
        //
        //        LEFT JOIN (SELECT ua_t_facturefrscab_id, sens ,  SUM(mtreglement) MtReg FROM ua_t_reglementfrs GROUP BY ua_t_facturefrscab_id , sens ) reg ON reg.ua_t_facturefrscab_id = cab.id and reg.sens = -1 
        //        INNER JOIN p_dossier dos on dos.id = cab.dossier_id WHERE dos.id=" . $this->session->get('dossierCourantUgouvAchat')->getId() . "  ORDER BY cab.id DESC "
        //        );
        //and cab.factureParentId is null

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT 
            cab.id ,cab.code ,cab.positionActuel, cab.refdocasso , cab.datedocasso , pe.designation as pie,pe.code as pieCode, cab.observation ,cab.datefacture  , cab.mtremise ,  frn.societe  , st.statut ,
             SUM (reg.mtreglement) MtReg , cab.montant as MtTtc , cab.montantAcompte montantAcompte , cab.montantReception montantReception, cab.stReg
            FROM App\Entity\UaTFacturefrscab cab                         
            LEFT JOIN cab.fournisseur frn
            LEFT JOIN cab.pStatutgrv st
            LEFT JOIN cab.tReglementfrs reg
            LEFT JOIN cab.piece pe
            WHERE cab.dossier = :dossier and cab.active=true and pe.code = 'FAF'
            GROUP BY cab.id 
            
            ORDER BY cab.id DESC "
        )->setParameter('dossier', $dc);
        $factures = $query->getResult();


        $data = array();
        foreach ($factures as $key => $value) {
            $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $id . "'>";
            $url = "<a href='" . $this->generateUrl('ua_t_facturefrscab_consulte', ['id' => $value['id']]) . "'> " . $value['code'] . " </a>";


            $nestedData[] = $url;
            $nestedData[] = $value['datedocasso'] ? $value['datedocasso']->format('d/m/Y') : null;
            $nestedData[] = $value['refdocasso'];
            $nestedData[] = $value['observation'];
            $nestedData[] = $value['societe'];
            $nestedData[] = $value['pie'];
            //$nestedData[] = $value['client'];
            $nestedData[] = number_format($value['MtTtc'], 2, ',', ' ');
            $nestedData[] = number_format($value['montantReception'], 2, ',', ' ');
            $nestedData[] = number_format($value['montantAcompte'], 2, ',', ' ');
            $nestedData[] = number_format($value['mtremise'], 2, ',', ' ');
            $nestedData[] = number_format($value['MtReg'], 2, ',', ' ');
            // $nestedData[] = $value['statut'];
            $nestedData[] = $UaTFacturefrscab->HasCommandeWithIcon()['reglement']['icon'];
            $nestedData[] = implode(" ", array_keys($value['positionActuel']));
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    /**
     * 
     *
     * @Route("/avoir/list",options = { "expose" = true } , name="ua_t_facturefrscab_avoir_list")
     * 
     */
    public function ListAvoir(Connection $connection)
    {
        /**
         * recuperer la valeur de statut s'il existe
         *
         * */
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        $dc = $this->appService->getDossierCourant();


        //        $users = $connection->fetchAll("
        //        SELECT cab.id,cab.observation ,cab.refDocAsso as reference, clt.nom as client ,cab.mtremise , clt.id AS idClt, cab.datefacture as datefacture ,st.statut,cab.refDocAsso,MtHt, MtTtc,MtReg
        //        FROM ua_t_facturefrscab cab 
        //        INNER JOIN (SELECT t_facturefrscab_id, SUM(quantite*prixunitaire) MtHt,SUM(prixttc) MtTtc FROM ua_t_facturefrsdet GROUP BY t_facturefrscab_id) det ON cab.id = det.t_facturefrscab_id 
        //        LEFT JOIN u_p_partenaire clt ON clt.id = cab.partenaire_id 
        //        LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
        //        /*LEFT JOIN (SELECT codefacture,SUM(mtreglement) MtReg FROM ua_t_reglementfrs GROUP BY codefacture) reg ON reg.codefacture = cab.codefacture */
        //
        //        LEFT JOIN (SELECT ua_t_facturefrscab_id, sens ,  SUM(mtreglement) MtReg FROM ua_t_reglementfrs GROUP BY ua_t_facturefrscab_id , sens ) reg ON reg.ua_t_facturefrscab_id = cab.id and reg.sens = -1 
        //        INNER JOIN p_dossier dos on dos.id = cab.dossier_id WHERE dos.id=" . $this->session->get('dossierCourantUgouvAchat')->getId() . "  ORDER BY cab.id DESC "
        //        );
        // _FACA

        /*  $factureType = $this->getDoctrine()
          ->getRepository(UFactureType::class)
          ->findBy(['code' => '_FACA']); */

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT 
            cab.id ,cab.code ,cab.positionActuel, cab.refdocasso , cab.datedocasso , pe.designation as pie,pe.code as pieCode,  cab.observation ,cab.datefacture  , cab.mtremise ,  frn.societe  , st.statut ,
             SUM (reg.mtreglement) MtReg , cab.montant as MtTtc , cab.montantAcompte montantAcompte , cab.montantReception montantReception, cab.stReg
            FROM App\Entity\UaTFacturefrscab cab                         
            LEFT JOIN cab.fournisseur frn
            LEFT JOIN cab.pStatutgrv st
            LEFT JOIN cab.tReglementfrs reg
            LEFT JOIN cab.piece pe
            WHERE cab.dossier = :dossier and cab.active=true and pe.active = 1 and pe.code = 'FAV'
            GROUP BY cab.id 
            
            ORDER BY cab.id DESC "
        )->setParameter('dossier', $dc->getId());
        //->setParameter('factureTypeId', $factureType);
        $factures = $query->getResult();


        $data = array();
        foreach ($factures as $key => $value) {
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";


            $url = "<a class='active-link' href='" . $this->generateUrl('ua_t_facturefrscab_consulte_avoir', ['id' => $value['id']]) . "'> " . $value['code'] . " </a>";
            $nestedData[] = $url;
            $nestedData[] = $value['datedocasso'] ? $value['datedocasso']->format('d/m/Y') : null;
            $nestedData[] = $value['refdocasso'];
            $nestedData[] = $value['observation'];
            $nestedData[] = $value['societe'];
            $nestedData[] = $value['pie'];
            //$nestedData[] = $value['client'];
            $nestedData[] = number_format($value['MtTtc'], 2, ',', ' ');
            $nestedData[] = number_format($value['montantReception'], 2, ',', ' ');
            $nestedData[] = number_format($value['montantAcompte'], 2, ',', ' ');
            $nestedData[] = number_format($value['mtremise'], 2, ',', ' ');
            $nestedData[] = number_format($value['MtReg'], 2, ',', ' ');
            // $nestedData[] = $value['statut'];
            $nestedData[] = implode(" ", array_keys($value['positionActuel']));
            $nestedData[] = $value['stReg'];
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    /**
     * 
     *
     * @Route("/acompte/list",options = { "expose" = true } , name="ua_t_facturefrscab_acompte_list")
     * 
     */
    public function ListAcompte(Connection $connection)
    {
        /**
         * recuperer la valeur de statut s'il existe
         *
         * */
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        $dc = $this->appService->getDossierCourant();


        //        $users = $connection->fetchAll("
        //        SELECT cab.id,cab.observation ,cab.refDocAsso as reference, clt.nom as client ,cab.mtremise , clt.id AS idClt, cab.datefacture as datefacture ,st.statut,cab.refDocAsso,MtHt, MtTtc,MtReg
        //        FROM ua_t_facturefrscab cab 
        //        INNER JOIN (SELECT t_facturefrscab_id, SUM(quantite*prixunitaire) MtHt,SUM(prixttc) MtTtc FROM ua_t_facturefrsdet GROUP BY t_facturefrscab_id) det ON cab.id = det.t_facturefrscab_id 
        //        LEFT JOIN u_p_partenaire clt ON clt.id = cab.partenaire_id 
        //        LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
        //        /*LEFT JOIN (SELECT codefacture,SUM(mtreglement) MtReg FROM ua_t_reglementfrs GROUP BY codefacture) reg ON reg.codefacture = cab.codefacture */
        //
        //        LEFT JOIN (SELECT ua_t_facturefrscab_id, sens ,  SUM(mtreglement) MtReg FROM ua_t_reglementfrs GROUP BY ua_t_facturefrscab_id , sens ) reg ON reg.ua_t_facturefrscab_id = cab.id and reg.sens = -1 
        //        INNER JOIN p_dossier dos on dos.id = cab.dossier_id WHERE dos.id=" . $this->session->get('dossierCourantUgouvAchat')->getId() . "  ORDER BY cab.id DESC "
        //        );
        // _FACA

        /*  $factureType = $this->getDoctrine()
          ->getRepository(UFactureType::class)
          ->findBy(['code' => '_FACA']); */

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT 
            cab.id ,cab.code ,cab.positionActuel, cab.refdocasso , cab.datedocasso , pe.designation as pie,pe.code as pieCode,  cab.observation ,cab.datefacture  , cab.mtremise ,  frn.societe  , st.statut ,
             SUM (reg.mtreglement) MtReg , cab.montant as MtTtc , cab.montantAcompte montantAcompte , cab.montantReception montantReception, cab.stReg
            FROM App\Entity\UaTFacturefrscab cab                         
            LEFT JOIN cab.fournisseur frn
            LEFT JOIN cab.pStatutgrv st
            LEFT JOIN cab.tReglementfrs reg
            LEFT JOIN cab.piece pe
            WHERE cab.dossier = :dossier and cab.active=true and pe.active = 1 and pe.code = 'ACF'
            GROUP BY cab.id
            
            ORDER BY cab.id DESC "
        )->setParameter('dossier', $dc->getId());
        //->setParameter('factureTypeId', $factureType);
        $factures = $query->getResult();


        $data = array();
        foreach ($factures as $key => $value) {
            $id = $value['id'];
            $nestedData = array();
            // $nestedData[] = ++$key;
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";
            $url = "<a class='active-link' href='" . $this->generateUrl('ua_t_facturefrscab_consulte_acompte', ['id' => $value['id']]) . "'> " . $value['code'] . " </a>";
            $nestedData[] = $url;
            $nestedData[] = $value['datedocasso'] ? $value['datedocasso']->format('d/m/Y') : null;
            $nestedData[] = $value['refdocasso'];
            $nestedData[] = $value['observation'];
            $nestedData[] = $value['societe'];
            $nestedData[] = $value['pie'];
            //$nestedData[] = $value['client'];
            $nestedData[] = number_format($value['MtTtc'], 2, ',', ' ');
            $nestedData[] = number_format($value['montantReception'], 2, ',', ' ');
            $nestedData[] = number_format($value['montantAcompte'], 2, ',', ' ');
            $nestedData[] = number_format($value['mtremise'], 2, ',', ' ');
            $nestedData[] = number_format($value['MtReg'], 2, ',', ' ');
            // $nestedData[] = $value['statut'];
            $nestedData[] = implode(" ", array_keys($value['positionActuel']));
            $nestedData[] = $value['stReg'];
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/", name="ua_t_facture_index" ,options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        
    

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr', '_index', true);



        $statut = $this->getDoctrine()
            ->getRepository(PStatutgrv::class)
            ->findBy(['module' => 'FAF']);
        $type = $this->getDoctrine()
            ->getRepository(UPPartenaireTy::class)
            ->findOneBy(['abreviation' => 'fourn']);
        //dump($type);
        //die();

        //$tCommandefrscabs = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findAll();
        //$upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);
        return $this->render('module_achat/t_facturefrscab/index.html.twig', [
            //            't_commandefrscabs' => $tCommandefrscabs,
            //            'u_p_partenaires' => $upPartenaires,
            //            'statut' => $statut,
            'operations' => $operations,

        ]);
    }
    /**
     * @Route("/ua_t_facturefrscab_info_ref/{id}", name="ua_t_facturefrscab_info_ref" ,options={"expose"=true} , methods={"GET"})
     */
    public function ua_t_facturefrscab_info_ref(UaTFacturefrscab $id): Response
    {
       
        return new JsonResponse([
            'ref_doc' => $id->getRefdocasso(),
            'date_ref' => date_format($id->getDatedocasso() ? $id->getDatedocasso() : new \DateTime('now'), 'Y-m-d'),
            'date_valide' => date_format($id->getDatefacture() ? $id->getDatefacture() : new \DateTime('now'), 'Y-m-d'),
        ]);
    }
    /**
     * @Route("/ua_t_facturefrscab_set_info_ref/{id}", name="ua_t_facturefrscab_set_info_ref" ,options={"expose"=true} , methods={"POST"})
     */
    public function ua_t_facturefrscab_set_info_ref(Request $request,UaTFacturefrscab $id): Response
    {
        $api = new ApiController();
        if ($id->getOutputValider() == 1) {
            return new JsonResponse('piece déja valider',500,[],JSON_UNESCAPED_UNICODE);
        }
        $id->setRefdocasso($request->get('document_ref'));
        $id->setDatedocasso(new \DateTime($request->get('date_document')));
        $id->setDatefacture(new \DateTime($request->get('date_valider')));

        $this->getDoctrine()->getManager()->flush();

        $data = $api->api_output_faf($id->getId(),$this->connection, $this->entityManager, $this->client, false);

        $api->api_output_facture_fournisseur_update_date($data, $this->client);
        $em = $this->getDoctrine()->getManager();

            $factures = $data;
            
            
            foreach ($factures as $key => $facture) {
                $cab = $em->getRepository(Gaccentry::class)->findOneBy(['num' => $facture['code']]);
                if($cab) {
                
                    if(array_key_exists('observation_operation', $facture)){
                        $cab->setDesvcr($facture['observation_operation']);
                    }
                    if(array_key_exists('date_operation', $facture)){
                        $cab->setAccdat(new \DateTime($facture['date_operation']));
                        $cab->setDuddat(new \DateTime($facture['date_operation']));
                        $cab->setRatdat(new \DateTime($facture['date_operation']));
                    }
                    if(array_key_exists('ref_doc_asso', $facture)){
                        if(strlen($facture['ref_doc_asso']) <= 255) {
                            $cab->setFczIdDoc1Asso($facture['ref_doc_asso']);
                        }
                    }

                    foreach ( $cab->getGaccentryds() as $key => $det) {
                        if(array_key_exists('date_operation', $facture)){
                            $det->setAccdat(new \DateTime($facture['date_operation']));
                        }
                    }
                }
                
            }
            $em->flush();
        return new JsonResponse(1);
    }

    /**
     * @Route("/avoir", name="ua_t_facture_avoir_index" ,options={"expose"=true} , methods={"GET"})
     */
    public function indexAvoir(Breadcrumbs $breadcrumbs): Response
    {
        //  $TAchatdemandeinternecabRepository->GetLastCode(); 
        // /* informations modules dossiers Autorises pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantUgouvAchat');
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        // $modules = $this->session->get('modules');

        /* verifier le doit d'acces a cette operation */

        // $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_ugouv_achat',
        //     'sousModule' => '_fa_fr',
        //     'operation' => '_index',
        //     'dossier' => $dc->getPrefix()
        // ]);
        // /* operations autorises pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr']['operations'];
        // /* sous module courant */
        // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr'];
        // //dump($sousModule); die(); 
        // /* navigation  */
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_facture_index");
        // $breadcrumbs->addItem("liste");


        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_av', '_index', true);


        //        $statut = $this->getDoctrine()
        //            ->getRepository(PStatutgrv::class)
        //            ->findBy(['module' => 'FAF']);
        //        $type = $this->getDoctrine()
        //            ->getRepository(UPPartenaireTy::class)
        //            ->findOneBy(['abreviation' => 'fourn']);
        //dump($type);
        //die();

        //        $tCommandefrscabs = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findAll();
        //        $upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);


        return $this->render('module_achat/t_facturefrscab/avoir/index.html.twig', [
            //            't_commandefrscabs' => $tCommandefrscabs,
            //            'u_p_partenaires' => $upPartenaires,
            //           
            //            'statut' => $statut,
            'operations' => $operations,
        ]);
    }

    /**
     * @Route("/acompte", name="ua_t_facture_acompte_index" ,options={"expose"=true} , methods={"GET"})
     */
    public function indexAcompte(Breadcrumbs $breadcrumbs): Response
    {



        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_ac', '_index', true);


        $statut = $this->getDoctrine()
            ->getRepository(PStatutgrv::class)
            ->findBy(['module' => 'FAF']);
        $type = $this->getDoctrine()
            ->getRepository(UPPartenaireTy::class)
            ->findOneBy(['abreviation' => 'fourn']);
        //dump($type);
        //die();

        //        $tCommandefrscabs = $this->getDoctrine() ->getRepository(UATCommandefrscab::class)->findAll();
        //        $upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);


        return $this->render('module_achat/t_facturefrscab/acompte/index.html.twig', [
            //            't_commandefrscabs' => $tCommandefrscabs,
            //            'u_p_partenaires' => $upPartenaires,
            'operations' => $operations,
            //            'statut' => $statut
        ]);
    }














    /**
     * @Route("/newRegelement/id", name="reglementfrs_new", methods={"GET","POST"})
     */
    public function new(Request $request, UaTFacturefrscab $UaTFacturefrscab): Response
    {
        //  /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');

        $dc = $this->appService->getDossierCourant();


        $tReglementfr = new UaTReglementfrscab();

        $form = $this->createForm(UaTReglementfrscabType::class, $tReglementfr, array('dossier' => $dc));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($tReglementfr);
            $entityManager->flush();

            return $this->redirectToRoute('t_reglementfrs_index');
        }

        return $this->render('t_reglementfrs/new.html.twig', [
            't_reglementfr' => $tReglementfr,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/avoir/new", name="uatfacturecab_avoir_new", methods={"GET","POST"})
     */
    public function newAvoir(Request $request, UaTFacturefrscab $UaTFacturefrscab): Response
    {
        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');

        $dc = $this->appService->getDossierCourant();


        $tReglementfr = new UaTReglementfrscab();

        $form = $this->createForm(UaTReglementfrscabType::class, $tReglementfr, array('dossier' => $dc));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($tReglementfr);
            $entityManager->flush();

            return $this->redirectToRoute('t_reglementfrs_index');
        }

        return $this->render('t_reglementfrs/new.html.twig', [
            't_reglementfr' => $tReglementfr,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/addAvoirPopup", name="t_uatfacture_add_avoir_popup", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function avoirPopup(ValidatorInterface $validator, Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $factureTypee = $this->getDoctrine()->getRepository(UFactureType::class)->findOneBy(['code' => "_FACA"]);
            $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => "FAF", "active" => 1]);
            $dc = $this->appService->getDossierCourant();
            $form = $this->createFormBuilder()
                ->add('UaTFacturefrscab', EntityType::class, [
                    'class' => UaTFacturefrscab::class,
                    'query_builder' => function (EntityRepository $er) use ($dc, $piece) {
                        //$dc = $this->appService->getDossierCourant();
                        return $er->createQueryBuilder('a')
                            ->where("a.parent IS NULL and a.piece = :piece and a.dossier = :dossier ")
                            //->where("")
                            ->setParameter('dossier', $dc)
                            ->setParameter('piece', $piece);
                    },
                    'placeholder' => 'Choix facture',
                    'choice_label' => 'code',
                    'constraints' => [
                        new NotBlank()
                    ]
                ])
                ->add('detail', ChoiceType::class, [
                    'choices' => [
                        'OUI' => true,
                        'NON' => false,


                    ],
                    'expanded' => true,
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
                //dump($form->getData()['UaTFacturefrscab']);die();

                $UaTFacturefrscab = $form->getData()['UaTFacturefrscab'];

                $detail = $form->getData()['detail'];
                //dump($detail);
                //die;


                $entityManager = $this->getDoctrine()->getManager();
                $dossier = $this->appService->getDossierCourant();

                //dump($factureTypee);die();
                //$UaTFacturefrscab->setId(null);
                $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => "FAV", "active" => 1]);
                $facture = new UaTFacturefrscab();
                $facture->setCode($UaTFacturefrscabRepository->GetLastCode($piece, $dossier));
                $facture->setRefdocasso($UaTFacturefrscab->getRefdocasso());
                $facture->setDatedocasso($UaTFacturefrscab->getDatedocasso());
                $facture->setPiece($piece);

                $facture->setUserCreated($this->getUser());
                //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());

                $facture->setPositionActuel(array('creer' => 1));
                $facture->setDossier($UaTFacturefrscab->getDossier());
                $facture->setDevise($UaTFacturefrscab->getDevise());
                $facture->setActive(true);
                $facture->setFournisseur($UaTFacturefrscab->getFournisseur());
                $facture->setHistorique(null);

                $facture->setParent($UaTFacturefrscab);
                $facture->setFactureType($factureTypee);

                //  detail

                $dossierPlanComptable = $UaTFacturefrscab->getDossier()->getPlanComptable();
                if ($detail == true) {


                    foreach ($UaTFacturefrscab->getDetails() as $key => $value) {

                        $codeComtableAchat = $entityManager->getRepository(ArticlePlanComptable::class)->findOneBy(['article' => $liv->getArticle(), 'planComptable' => $dossierPlanComptable]);

                        $detailAv = new UaTFacturefrsdet();

                        $detailAv->setCab($facture);
                        $detailAv->setArticle($value->getArticle());
                        $detailAv->setQuantite($value->getQuantite());
                        $detailAv->setUnite($value->getUnite());
                        $detailAv->setPrixunitaire($value->getPrixunitaire());
                        if($codeComtableAchat) {
                            $detailAv->setPlanComptableAchat($codeComtableAchat->getAchat());
                        }

                        $detailAv->setRemise($value->getRemise());
                        $detailAv->setTva($value->getTva());
                        $detailAv->setObservation($value->getObservation());

                        $entityManager->persist($detailAv);
                    }
                }

                $entityManager->persist($facture);
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .'], 'data' => $UaTFacturefrscab->getId()], 200);
            }
            return $this->render('module_achat/t_facturefrscab/avoir/avoir.popup.html.twig', [
                //'UaTFacturefrscab' => $UaTFacturefrscab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/acompte/{id}/new", name="ua_t_commandefrscab_acompte_new",   options={"expose"=true}  , methods={"GET","POST"})
     */
    public function acompteNew(ValidatorInterface $validator, UaTFacturefrscabRepository $UaTFacturefrscabRepository, UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository, Request $request, Breadcrumbs $breadcrumbs, $id = 0, UATCommandefrscab $uatCommandefrscab = null): Response
    {

        //$operations = $this->appService->getOperations('_module_achat', '_bc_fr', '_acompte_new', true);
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_ac', '_edit', true);

        //$pieceL = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => "ACR","active"=>1]);
        $dc = $this->appService->getDossierCourant();
        $form = $this->createFormBuilder()
            ->add('UATCommandefrscab', EntityType::class, [
                'class' => UATCommandefrscab::class,
                'query_builder' => function (EntityRepository $er) use ($dc) {
                    //$dc = $this->appService->getDossierCourant();
                    return $er->createQueryBuilder('a')
                        ->where("a.dossier = :dossier ")
                        //->where("")
                        //->setParameter('piece', null)
                        ->setParameter('dossier', $dc);
                    // ->setParameter('piece', $pieceL);
                },
                'placeholder' => 'Choix commande',
                'choice_label' => 'code',
                'choice_attr' => function (?UATCommandefrscab $commande) use ($uatCommandefrscab) {
                    return $uatCommandefrscab != null && $commande->getId() == $uatCommandefrscab->getId() ? ['selected' => "selected"] : [];
                },
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('date', DateType::class, [
                // renders it as a single text box
                'widget' => 'single_text',
            ])
            ->add('designation', TextType::class)
            ->add('montant')
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
            //dump($form->getData()['UaTFacturefrscab']);die();

            $UATCommandefrscab = $form->getData()['UATCommandefrscab'];

            //dump($UATCommandefrscab->checkIfHasLivraisonsAndAcompte());die();
            // dump($UATCommandefrscab->getLivraisons());die();

            if ($UATCommandefrscab->checkIfHasLivraisonsAndAcompte()['livraison'] == true) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous pouvez pas ajouter un acompte qui contient des livraisons']], 200);
            }

            if ($UATCommandefrscab->checkIfHasLivraisonsAndAcompte()['acompte'] == true) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Ce acompte deja exist']], 200);
            }

            $total = filter_var($UATCommandefrscab->getArrayTotalArticleByCommande()['totalTtcSansDevisA'], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
            function floatvalue($val)
            {
                $val = str_replace(",", ".", $val);
                $val = preg_replace('/\.(?=.*\.)/', '', $val);
                return floatval($val);
            }
            //echo $total - floatvalue($form->getData()['montant']);echo "<br/>";
            //echo  $form->getData()['montant'];
            //die();
            if ($total < $form->getData()['montant']) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'ajouter un montant d\'acompte superieur au montant du commande']]);
            }


            $entityManager = $this->getDoctrine()->getManager();

            //dump($factureTypee);die();
            //$UaTFacturefrscab->setId(null);
            //11
            //dump($UATCommandefrscab);die();
            $commande = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($UATCommandefrscab->getId());
            $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => "ACF", "active" => 1]);
            $pieceL = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => "ACR", "active" => 1]);
            //ACR
            $article = $this->getDoctrine()->getRepository(Uarticle::class)->findOneBy(['code' => "_acompte_achat"]);
            $facture = new UaTFacturefrscab();
            $factureDet = new UaTFacturefrsdet();
            $factureDet->setQuantite(1);


            $factureDet->setPrixunitaire($form->getData()['montant']);
            $factureDet->setArticle($article);
            $facture->addDetail($factureDet);
            $facture->setCode($UaTFacturefrscabRepository->GetLastCode($piece));
            $facture->setRefdocasso($UATCommandefrscab->getRefdocasso());
            $facture->setDatedocasso($UATCommandefrscab->getDatedocasso());
            $facture->setDatefacture($form->getData()['date']);
            $facture->setPiece($piece);
            $facture->setUserCreated($this->getUser());
            $facture->setPositionActuel(array('creer' => 1));
            $facture->setDossier($UATCommandefrscab->getDossier());
            $facture->setDevise($UATCommandefrscab->getDevise());
            $facture->setActive(true);
            $facture->setFournisseur($UATCommandefrscab->getFournisseur());
            $facture->setHistorique(null);
            $facture->setMontant($form->getData()['montant']);

            $livraison = new UaTLivraisonfrscab();
            $livraisonDet = new UaTLivraisonfrsdet();
            $livraisonDet->setQuantite(1);

            $livraisonDet->setPrixunitaire($form->getData()['montant']);
            $livraison->setFacture($facture);
            $livraisonDet->setArticle($article);
            $livraison->addDetail($livraisonDet);
            $livraison->setCode($UaTLivraisonfrscabRepository->GetLastCode());
            $livraison->setRefdocasso($UATCommandefrscab->getRefdocasso());
            $livraison->setCommande($commande);
            $livraison->setPiece($pieceL);
            $livraison->setDatedocasso($UATCommandefrscab->getDatedocasso());
            $livraison->setUserCreated($this->getUser());
            $livraison->setPositionActuel(array('creer' => 1));
            $livraison->setDossier($UATCommandefrscab->getDossier());
            $livraison->setDevise($UATCommandefrscab->getDevise());
            $livraison->setActive(true);
            $livraison->setFournisseur($UATCommandefrscab->getFournisseur());
            //$livraison->setHistorique(null);




            $entityManager->persist($factureDet);
            $entityManager->persist($facture);

            $entityManager->persist($livraisonDet);
            $entityManager->persist($livraison);

            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .'], 'data' => $facture->getId()], 200);
        }





        return $this->render('module_achat/t_commandefrscab/acompte/new.html.twig', [
            'facture' => new UaTFacturefrscab(),
            'form' => $form->createView(),
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/addAcomptePopup", name="t_uatfacture_add_acompte_popup", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function acomptePopup(ValidatorInterface $validator, UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository, Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            //$factureTypee = $this->getDoctrine()->getRepository(UFactureType::class)->findOneBy(['code' => "_FACA"]);
            $dc = $this->appService->getDossierCourant();
            //$piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => "FAF","active"=>1]);
            $form = $this->createFormBuilder()
                ->add('UATCommandefrscab', EntityType::class, [
                    'class' => UATCommandefrscab::class,
                    'query_builder' => function (EntityRepository $er) use ($dc) {

                        return $er->createQueryBuilder('a')
                            ->where("a.dossier = :dossier")
                            //->where("")
                            //->setParameter('piece', $piece)
                            ->setParameter('dossier', $dc);
                    },
                    'placeholder' => 'Choix commande',
                    'choice_label' => 'code',
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


                $UATCommandefrscab = $form->getData()['UATCommandefrscab'];

                //dump($UATCommandefrscab->checkIfHasLivraisonsAndAcompte());die();
                // dump($UATCommandefrscab->getLivraisons());die();

                if ($UATCommandefrscab->checkIfHasLivraisonsAndAcompte()['livraison'] == true) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous pouvez pas ajouter un acompte qui contient des livraisons']], 200);
                }

                if ($UATCommandefrscab->checkIfHasLivraisonsAndAcompte()['acompte'] == true) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Ce acompte deja exist']], 200);
                }


                $entityManager = $this->getDoctrine()->getManager();

                //dump($factureTypee);die();
                //$UaTFacturefrscab->setId(null);
                //11
                //dump($UATCommandefrscab);die();
                $commande = $this->getDoctrine()->getRepository(UATCommandefrscab::class)->find($UATCommandefrscab->getId());
                $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => "ACF", "active" => 1]);
                $pieceL = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => "ACR", "active" => 1]);
                //ACR
                $article = $this->getDoctrine()->getRepository(Uarticle::class)->findOneBy(['code' => "_acompte_achat"]);
                $facture = new UaTFacturefrscab();
                $factureDet = new UaTFacturefrsdet();
                $factureDet->setQuantite(1);
                $factureDet->setArticle($article);
                $facture->addDetail($factureDet);
                $facture->setCode($UaTFacturefrscabRepository->GetLastCode($piece));
                $facture->setRefdocasso($UATCommandefrscab->getRefdocasso());
                $facture->setDatedocasso($UATCommandefrscab->getDatedocasso());
                $facture->setPiece($piece);
                $facture->setUserCreated($this->getUser());
                $facture->setPositionActuel(array('creer' => 1));
                $facture->setDossier($UATCommandefrscab->getDossier());
                $facture->setDevise($UATCommandefrscab->getDevise());
                $facture->setActive(true);
                $facture->setFournisseur($UATCommandefrscab->getFournisseur());
                $facture->setHistorique(null);

                $livraison = new UaTLivraisonfrscab();
                $livraisonDet = new UaTLivraisonfrsdet();
                $livraisonDet->setQuantite(1);
                $livraison->setFacture($facture);
                $livraisonDet->setArticle($article);
                $livraison->addDetail($livraisonDet);
                $livraison->setCode($UaTLivraisonfrscabRepository->GetLastCode());
                $livraison->setRefdocasso($UATCommandefrscab->getRefdocasso());
                $livraison->setCommande($commande);
                $livraison->setPiece($pieceL);
                $livraison->setDatedocasso($UATCommandefrscab->getDatedocasso());
                $livraison->setUserCreated($this->getUser());
                $livraison->setPositionActuel(array('creer' => 1));
                $livraison->setDossier($UATCommandefrscab->getDossier());
                $livraison->setDevise($UATCommandefrscab->getDevise());
                $livraison->setActive(true);
                $livraison->setFournisseur($UATCommandefrscab->getFournisseur());
                //$livraison->setHistorique(null);




                $entityManager->persist($factureDet);
                $entityManager->persist($facture);

                $entityManager->persist($livraisonDet);
                $entityManager->persist($livraison);

                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .'], 'data' => $facture->getId()], 200);
            }
            return $this->render('module_achat/t_facturefrscab/acompte/acompte.popup.html.twig', [
                //'UaTFacturefrscab' => $UaTFacturefrscab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/annule", name="ua_t_facture_annule", methods={"GET"})
     */
    public function annule(): Response
    {
        // $tCommandefrscabs = $this->getDoctrine() ->getRepository(UATCommandefrscab::class)->findAll();

        return $this->render('module_achat/t_facturefrscab/index.html.twig', [
            //  't_commandefrscabs' => $tCommandefrscabs,
        ]);
    }

    /**
     * @Route("/{id}/Paiement", name="ua_t_facturefrscab_Paiement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function payment(Request $request, UaTReglementfrscabRepository $rep, UaTFacturefrscab $UaTFacturefrscab, Breadcrumbs $breadcrumbs, $id): Response
    {
        // var_dump($UaTFacturefrscab);
        //die;

        /* informations modules dossiers Autorises pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantUgouvAchat');
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        // $modules = $this->session->get('modules');


        /* verifier le doit d'acces a cette operation */

        // $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_ugouv_achat',
        //     'sousModule' => '_fa_fr',
        //     'operation' => '_paiement',
        //     'dossier' => $dc->getPrefix()
        // ]);
        // /* operations autorises pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr']['operations'];
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem("Factures Fournisseur", "ua_t_facture_index");
        // $breadcrumbs->addRouteItem($UaTFacturefrscab->getCode(), "ua_t_facturefrscab_consulte", ['id' => $UaTFacturefrscab->getId()]);
        // $breadcrumbs->addRouteItem("Paiement", "ua_t_facturefrscab_Paiement", [
        //     'id' => $id,
        // ]);

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr', '_paiement', true);


        $tReglementfr = new UaTReglementfrscab();
        if (!empty($UaTFacturefrscab->getFournisseur()->getModepaiement())) {
            $tReglementfr->setModepaiement($UaTFacturefrscab->getFournisseur()->getModepaiement());
        }

        if (empty($tReglementfr->getDevise())) {
            $tReglementfr->setDevise($UaTFacturefrscab->getDevise());
        }
        $form = $this->createForm(UaTReglementfrscabType::class, $tReglementfr, array('dossier' => $dc));

        $form->handleRequest($request);


        //$mtht = $rep->GetMtHt($UaTFacturefrscab);
        $mtreg = 0;

        $treg = $this->getDoctrine()
            ->getRepository(UaTReglementfrscab::class)
            ->findBy(['factureFournisseur' => $UaTFacturefrscab]);
        if ($treg) {
            $mtreg = $rep->GetMreg($UaTFacturefrscab);
        }

        //  $mttc = $rep->GetMtTtc($UaTFacturefrscab);
        $valider = 'No';
        if (isset($UaTFacturefrscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }
        //dump($treg);die();

        return $this->render('module_achat/t_facturefrscab/payement.html.twig', [
            't_reglementfr' => $tReglementfr,
            'form' => $form->createView(),
            't_reglementfrs' => $treg,
            'facture' => $UaTFacturefrscab,
            'mttc' => $UaTFacturefrscab->getMontant(),
            'mtreg' => $mtreg['MtReg'],
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/show", name="ua_t_facturefrscab_consulte", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function consulte(Request $request, UaTReglementfrscabRepository $rep, UaTFacturefrscab $UaTFacturefrscab, Breadcrumbs $breadcrumbs, $id): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        //
        //
        //  /* verifier le doit d'acces a cette operation */
        //
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_fa_fr',
        //      'operation' => '_avoir_show',
        //      'dossier' => $dc->getPrefix()
        //
        //  ]);
        //
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr']['operations'];
        //
        //
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem("Factures Fournisseur", "ua_t_facture_index");
        //  $breadcrumbs->addRouteItem($UaTFacturefrscab->getCode(), "ua_t_facturefrscab_consulte", ['id' => $id]);

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr', '_show', [true, $UaTFacturefrscab->getCode()]);

        // $mtht = $rep->GetMtTtc($UaTFacturefrscab);
        // dump($mtht);
        //die();
        $treg = $this->getDoctrine()
            ->getRepository(UaTReglementfrscab::class)
            ->findOneBy(['factureFournisseur' => $UaTFacturefrscab]);



        /*  $detail = $this->getDoctrine()
          ->getRepository(UaTFacturefrsdet::class)
          ->findBy(['idFaccab' => $UaTFacturefrscab]); */


        $valider = 'No';
        if (isset($UaTFacturefrscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }

        //  $totalFacturesArticles = $UaTFacturefrscab->getArrayTotalArticleByFacture($UaTFacturefrscab);


        $totalLivraison = array();
        $totalavoir = array();

        /*  foreach ($UaTFacturefrscab->getLivraisons() as $key => $value) {
            # code...
            $totalLivraison[$key] = $value->getArrayTotalArticleByLivraison($value);
        }*/

        /* $avoir = $this->getDoctrine()
            ->getRepository(UaTFacturefrscab::class)
            ->findBy(['parent' => $UaTFacturefrscab]);

        foreach ($avoir as $key => $value) {
            # code...
            $totalavoir[$key] = $value->getArrayTotalArticleByFacture($value);
        }*/

        return $this->render('module_achat/t_facturefrscab/show.html.twig', [
            'facture' => $UaTFacturefrscab,

            'valider' => $valider,
            'operations' => $operations,

        ]);
    }

    /**
     * @Route("/{id}/avoir/show", name="ua_t_facturefrscab_consulte_avoir", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function consulteAvoir(Request $request, UaTReglementfrscabRepository $rep, UaTFacturefrscab $UaTFacturefrscab, Breadcrumbs $breadcrumbs, $id): Response
    {



        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_av', '_show', true);

        // $mtht = $rep->GetMtTtc($UaTFacturefrscab);
        // dump($mtht);
        //die();
        $treg = $this->getDoctrine()
            ->getRepository(UaTReglementfrscab::class)
            ->findBy(['factureFournisseur' => $UaTFacturefrscab]);



        /*  $detail = $this->getDoctrine()
          ->getRepository(UaTFacturefrsdet::class)
          ->findBy(['idFaccab' => $UaTFacturefrscab]); */


        $valider = 'No';
        if (isset($UaTFacturefrscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }

        $totalFacturesArticles = $UaTFacturefrscab->getArrayTotalArticleByFacture($UaTFacturefrscab);


        $totalLivraison = array();

        foreach ($UaTFacturefrscab->getLivraisons() as $key => $value) {
            # code...
            $totalLivraison[$key] = $value->getArrayTotalArticleByLivraison($value);
        }
        $totalArticles = $UaTFacturefrscab->getArrayTotalArticleByFacture($UaTFacturefrscab);



        return $this->render('module_achat/t_facturefrscab/avoir/show.html.twig', [
            'facture' => $UaTFacturefrscab,
            't_reglementfrs' => $treg,
            //'facturedet' => $detail,
            'mttc' => $UaTFacturefrscab->getMontant() - $UaTFacturefrscab->getMtremise(),
            'valider' => $valider,
            'operations' => $operations,
            'totalLivraison' => $totalLivraison,
            "ht" => $totalArticles['prixHt'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc']
        ]);
    }

    /**
     * @Route("/{id}/acompte/show", name="ua_t_facturefrscab_consulte_acompte", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function consulteAcompte(Request $request, UaTReglementfrscabRepository $rep, UaTFacturefrscab $UaTFacturefrscab, $id): Response
    {



        $dc = $this->appService->getDossierCourant();

        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_ac', '_show', true);


        $treg = $this->getDoctrine()
            ->getRepository(UaTReglementfrscab::class)
            ->findBy(['factureFournisseur' => $UaTFacturefrscab]);




        $valider = 'No';
        if (isset($UaTFacturefrscab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }

        $totalFacturesArticles = $UaTFacturefrscab->getArrayTotalArticleByFacture($UaTFacturefrscab);


        $totalLivraison = array();

        foreach ($UaTFacturefrscab->getLivraisons() as $key => $value) {
            # code...
            $totalLivraison[$key] = $value->getArrayTotalArticleByLivraison($value);
        }
        $totalArticles = $UaTFacturefrscab->getArrayTotalArticleByFacture($UaTFacturefrscab);



        return $this->render('module_achat/t_facturefrscab/acompte/show.html.twig', [
            'facture' => $UaTFacturefrscab,
            't_reglementfrs' => $treg,
            //'facturedet' => $detail,
            'mttc' => $UaTFacturefrscab->getMontant() - $UaTFacturefrscab->getMtremise(),
            'valider' => $valider,
            'operations' => $operations,
            'totalLivraison' => $totalLivraison,
            "ht" => $totalArticles['prixHt'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc']
        ]);
    }

    /**
     * @Route("/{id}/documents", name="ua_t_facturefrscab_document", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(Breadcrumbs $breadcrumbs, UaTFacturefrscab $UaTFacturefrscab): Response
    {
        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        //  /* verifier le doit d'acces a cette operation */
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_fa_fr',
        //      'operation' => '_document',
        //      'dossier' => $dc->getPrefix()
        //  ]);
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr']['operations'];
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem("Factures Fournisseur", "ua_t_facture_index");
        //  $breadcrumbs->addRouteItem($UaTFacturefrscab->getCode(), "ua_t_facturefrscab_consulte", ['id' => $UaTFacturefrscab->getId()]);
        //  $breadcrumbs->addItem('Docs/Impression');

        $operations = $this->appService->getOperations('_module_achat', '_fa_fr', '_document', [true, $UaTFacturefrscab->getCode()]);


        return $this->render('module_achat/t_facturefrscab/documents.html.twig', [
            'facture' => $UaTFacturefrscab,
            'operations' => $operations
        ]);
    }
    /**
     * @Route("/{id}/annuler", name="ua_t_facturefrscab_annuler", methods={"GET","POST"}, options={"expose"=true})
     */
    public function ua_t_facturefrscab_annuler(UaTFacturefrscab $UaTFacturefrscab, UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {
        // dd($UaTFacturefrscab);
        $em = $this->getDoctrine()->getManager();
        $factureMinus = new UaTFacturefrscab();
        $factureMinus->setDossier($UaTFacturefrscab->getDossier());
        $factureMinus->setDevise($UaTFacturefrscab->getDevise());
        $factureMinus->setFournisseur($UaTFacturefrscab->getFournisseur());
        $factureMinus->setUserCreated($this->getUser());
        if ($UaTFacturefrscab->getFournisseur()->getCategorie()->getK() == 'externe') {
            $pPiece = $em->getRepository(PPiece::class)->find(3);
        } elseif ($UaTFacturefrscab->getFournisseur()->getCategorie()->getK() == 'interne') {
            $pPiece = $em->getRepository(PPiece::class)->find(2);
        }
        $factureMinus->setPPiece($pPiece);
        // $factureMinus->setCode($UaTFacturefrscabRepository->GetLastCode($UaTFacturefrscab->getPiece(), $cat));
        $factureMinus->setObservation($UaTFacturefrscab->getObservation());
        $factureMinus->setRefdocasso($UaTFacturefrscab->getRefdocasso());
        $factureMinus->setCreated(new \DateTime("now"));
        $factureMinus->setStReg($UaTFacturefrscab->getStReg());
        $factureMinus->setPositionActuel($UaTFacturefrscab->getPositionActuel());
        $factureMinus->setDateecheance($UaTFacturefrscab->getDateecheance());
        $factureMinus->setDateecheance($UaTFacturefrscab->getDateecheance());
        $factureMinus->setAutreInformation($UaTFacturefrscab->getId());
        $factureMinus->setActive(0);
        $factureMinus->setMontant($UaTFacturefrscab->getMontant() * -1);
        $factureMinus->setPositionActuel("Annuler");
        $em->persist($factureMinus);
        $em->flush();

        foreach ($UaTFacturefrscab->getLivraisons() as $key => $livraison) {
            $livraison->setFacture(null);
            $livraison->setPositionActuel("valider");
            $UaTFacturefrscab->setLivraisonfrs($livraison->getId());
        }
        foreach ($UaTFacturefrscab->getDetails() as $key => $detail) {
            $factureMinusDetails = new UaTFacturefrsdet();
            $factureMinusDetails->setArticle($detail->getArticle());
            $factureMinusDetails->setUnite($detail->getUnite());
            $factureMinusDetails->setQuantite($detail->getQuantite());
            $factureMinusDetails->setPrixunitaire("-" . $detail->getPrixunitaire());
            $factureMinusDetails->setCab($factureMinus);

            $em->persist($factureMinusDetails);
        }
        $UaTFacturefrscab->setActive(0);
        $UaTFacturefrscab->setPositionActuel("Annuler");
        $UaTFacturefrscab->setDateAnnuler(new \DateTime("now"));
        $em->flush();

        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'annullation a ete bien effectue .']], 200);
    }

    /**
     * @Route("/{id}/avoir", name="ua_t_facturefrscab_avoir", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Avoir(Breadcrumbs $breadcrumbs, UaTFacturefrscab $UaTFacturefrscab, UATCommandefrscabRepository $rep): Response
    {
        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        //  /* verifier le doit d'acces a cette operation */
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_fa_fr',
        //      'operation' => '_avoir',
        //      'dossier' => $dc->getPrefix()
        //  ]);
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr']['operations'];
        //  /* Verifier si cet utilisateur il peut acceder a cette operation */
        //  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations']['_new'])) {
        //      return new Response("Operation non autorie", 403);
        //  }
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem("Factures Fournisseur", "ua_t_facture_index");
        //  $breadcrumbs->addRouteItem($UaTFacturefrscab->getCode(), "ua_t_facturefrscab_consulte", ['id' => $UaTFacturefrscab->getId()]);
        //  $breadcrumbs->addItem('Avoir');

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_av', '_avoir', true);

        $avoir = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->findBy(['factureParentId' => $UaTFacturefrscab->getId()]);
        //dump($avoir);
        //die;

        $array_data = array();
        //  $UaTFacturefrscab;

        foreach ($UaTFacturefrscab->getLivraisons() as $key => $livraison) {
            foreach ($livraison->getDetails() as $key => $detailslivraison) {
                $quantiteA = 0;
                foreach ($avoir as $key => $facture) {

                    foreach ($facture->getFactureLivraisons() as $key => $avoirL) {
                        foreach ($avoirL->getDetails() as $key => $detaila) {
                            if ($detailslivraison->getArticle()->getId() == $detaila->getArticle()->getId()) {
                                $quantiteA = $quantiteA + $detaila->getQuantite();
                            }
                        }
                    }
                }
                // dump($array_data[$detailslivraison->getArticle()->getId().$detailslivraison->getId()]['id'])
                if (isset($array_data[$detailslivraison->getArticle()->getId()]['id'])) {



                    $array_data[$detailslivraison->getArticle()->getId()]['quantiteAvoir'] = $quantiteA;


                    $array_data[$detailslivraison->getArticle()->getId()]['id'] = $detailslivraison->getArticle()->getId();
                    $array_data[$detailslivraison->getArticle()->getId()]['titre'] = $detailslivraison->getArticle()->getTitre();

                    $array_data[$detailslivraison->getArticle()->getId()]['prixUnitaire'] = $detailslivraison->getPrixUnitaire();
                    $array_data[$detailslivraison->getArticle()->getId()]['tva'] = $detailslivraison->getTva();
                    $array_data[$detailslivraison->getArticle()->getId()]['quantite'] = $array_data[$detailslivraison->getArticle()->getId()]['quantite'] + $detailslivraison->getQuantite();



                    if ($detailslivraison->getArticle()->getGererEnStock() == 1) {
                        $array_data[$detailslivraison->getArticle()->getId()]['gerer'] = 'Oui';
                    } else {
                        $array_data[$detailslivraison->getArticle()->getId()]['gerer'] = 'Non';
                    }

                    $somme = 0;
                    foreach ($detailslivraison->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
                        if ($mouv->getDossier()->getId() == $dc->getId()) {
                            $somme += $mouv->getQuantite() * $mouv->getAjoSup();
                        }
                    }



                    $array_data[$detailslivraison->getArticle()->getId()]['quantiteEncoursVente'] = $rep->QuantiteEncoursVente($detailslivraison->getArticle()->getId(), $dc->getId())['nb'];
                    $array_data[$detailslivraison->getArticle()->getId()]['quantiteEncoursAchat'] = $rep->QuantiteEncoursAchat($detailslivraison->getArticle()->getId(), $dc->getId())['nb'];

                    $array_data[$detailslivraison->getArticle()->getId()]['code'] = $detailslivraison->getArticle()->getCode();
                    $array_data[$detailslivraison->getArticle()->getId()]['somme'] = $somme;


                    //    $array_data[$detailslivraison->getArticle()->getId()]['quantiteLivre'] = $detailslivraison->getQuantite();
                    $reste = $array_data[$detailslivraison->getArticle()->getId()]['quantite'];
                    $tva = $tva = ($detailslivraison->getTva() / 100) + 1;
                    $array_data[$detailslivraison->getArticle()->getId()]['reste'] = $reste;
                    $array_data[$detailslivraison->getArticle()->getId()]['prixTtcReste'] = $reste * $detailslivraison->getPrixUnitaire() * $tva;
                } else {
                    $array_data[$detailslivraison->getArticle()->getId()]['quantiteAvoir'] = $quantiteA;
                    $array_data[$detailslivraison->getArticle()->getId()]['id'] = $detailslivraison->getArticle()->getId();
                    $array_data[$detailslivraison->getArticle()->getId()]['titre'] = $detailslivraison->getArticle()->getTitre();

                    $array_data[$detailslivraison->getArticle()->getId()]['prixUnitaire'] = $detailslivraison->getPrixUnitaire();
                    $array_data[$detailslivraison->getArticle()->getId()]['tva'] = $detailslivraison->getTva();
                    $array_data[$detailslivraison->getArticle()->getId()]['quantite'] = $detailslivraison->getQuantite();



                    if ($detailslivraison->getArticle()->getGererEnStock() == 1) {
                        $array_data[$detailslivraison->getArticle()->getId()]['gerer'] = 'Oui';
                    } else {
                        $array_data[$detailslivraison->getArticle()->getId()]['gerer'] = 'Non';
                    }

                    $somme = 0;
                    foreach ($detailslivraison->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
                        if ($mouv->getDossier()->getId() == $dc->getId()) {
                            $somme += $mouv->getQuantite() * $mouv->getAjoSup();
                        }
                    }



                    $array_data[$detailslivraison->getArticle()->getId()]['quantiteEncoursVente'] = $rep->QuantiteEncoursVente($detailslivraison->getArticle()->getId(), $dc->getId())['nb'];
                    $array_data[$detailslivraison->getArticle()->getId()]['quantiteEncoursAchat'] = $rep->QuantiteEncoursAchat($detailslivraison->getArticle()->getId(), $dc->getId())['nb'];

                    $array_data[$detailslivraison->getArticle()->getId()]['code'] = $detailslivraison->getArticle()->getCode();
                    $array_data[$detailslivraison->getArticle()->getId()]['somme'] = $somme;


                    //  $array_data[$detailslivraison->getArticle()->getId()]['quantiteLivre'] = $detailslivraison->getQuantite();
                    $reste = $array_data[$detailslivraison->getArticle()->getId()]['quantite'];
                    $tva = $tva = ($detailslivraison->getTva() / 100) + 1;
                    $array_data[$detailslivraison->getArticle()->getId()]['reste'] = $reste;
                    $array_data[$detailslivraison->getArticle()->getId()]['prixTtcReste'] = $reste * $detailslivraison->getPrixUnitaire() * $tva;
                }
            }
        }

        $data = serialize($array_data);
        $dataSerialize = htmlentities($data);
        //    dump($dataSerialize);
        //  dump($data);
        //   die;

        return $this->render('module_achat/t_facturefrscab/avoir.html.twig', [
            'facture' => $UaTFacturefrscab,
            'data' => $array_data,
            'dataSerialize' => $dataSerialize,
            'avoir' => $avoir,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/generer/insert", name="ua_t_facturefrscab_avoir_insert", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function avoirInsert(Request $request, UaTFacturefrscab $UaTFacturefrscab, UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository, UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {

        $entityManager = $this->getDoctrine()->getManager();



        $reste = $request->request->get('reste');
        //    dump($request->request);
        //   die;




        $errors = array();
        $data = json_decode(($request->request->get('dataSerialize')), true);


        foreach ($reste as $key => $res) {
            $data[$key]['aLivrer'] = $res;
        }






        $count = 0;
        $count2 = 0;
        $count3 = 0;

        foreach ($data as $key => $article) {

            $id = $article['prixUnitaire'];
            $restAvoir = $article['reste'] + $article['quantiteAvoir'];
            if ($restAvoir != 0) {
                if (((int) $article['aLivrer'] + $article['quantiteAvoir'] + $article['reste']) < 0 && $restAvoir != 0) {
                    $errors[] = "la quantite de l'article :(" . $article['titre'] . ") saisie est de " . $article['aLivrer'] . " la quantite reste a avoir c'est : -" . $restAvoir;
                }
                if ($article['aLivrer'] > 0) {
                    $errors[] = "La quantite de l'article :(" . $article['titre'] . ") saisie est de: " . $article['aLivrer'] . " est invalide veuillez donnez une quantite inferieur ou egale a zero";
                }
                if ($article['reste'] > 0 && $article['aLivrer'] == 0) {
                    $count2++;
                }
                if ($article['reste'] > 0 && $article['aLivrer'] < 0) {
                    $count3++;
                }
            } else {
                $count++;
            }
        }




        if (count($data) == $count) {
            $errors[] = "Aucune quanite dispobile a avoir.";
        } elseif (count($data) == $count2 || ($count3 == 0 && count($errors) == 0)) {


            $errors[] = "Veuillez saisie au moins un article";
        }



        if (count($errors) > 0) {

            return $this->json(['errors' => $errors]);
        }



        $liv = 0;
        $livraisonCab = new UaTLivraisonfrscab();
        $montant = 0;
        foreach ($UaTFacturefrscab->getFactureLivraisons() as $key => $livraison) {
            if ($liv == 0) {


                $livraisonCab->setCommande($livraison->getCommande());
                $livraisonCab->setDatedocasso($livraison->getDatedocasso());
                $livraisonCab->setRefdocasso($livraison->getRefdocasso());
                $livraisonCab->setDossier($livraison->getDossier());
                $livraisonCab->setDevise($livraison->getDevise());
                $livraisonCab->setDatelivraison($livraison->getDatelivraison());
                $livraisonCab->setFournisseur($livraison->getFournisseur());
                $livraisonCab->setRemise($livraison->getRemise());
                $livraisonCab->setObservation($livraison->getObservation());
                $livraisonCab->setFrs1($livraison->getFrs1());
                $livraisonCab->setMtfrs1($livraison->getMtfrs1());
                $livraisonCab->setFrs2($livraison->getFrs2());
                $livraisonCab->setMtfrs2($livraison->getMtfrs2());
                $livraisonCab->setPourCompte($livraison->getPourCompte());
                //  $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'RCF', 'abreviation' => 'lvr_prt_rcf']);
                //   $livraisonCab->setStatut($PStatutgrv);
                $livraisonCab->setFrs1($livraison->getFrs1());
                $livraisonCab->setMtfrs1($livraison->getMtfrs1());
                $livraisonCab->setFrs2($livraison->getFrs2());
                $livraisonCab->setMtfrs2($livraison->getMtfrs2());
                $livraisonCab->setRemise($livraison->getRemise());
                $livraisonCab->setDateremise($livraison->getDateremise());
                $livraisonCab->setMtremise($livraison->getMtremise());

                $livraisonCab->setCompteMasse($livraison->getCompteMasse());
                $livraisonCab->setCompteRubrique($livraison->getCompteRubrique());
                $livraisonCab->setComptePoste($livraison->getComptePoste());
                $livraisonCab->setCompte($livraison->getCompte());
                $livraisonCab->setUserCreated($this->getUser());
                $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeAvoir());
                //  $livraisonCab->setPositionActuel(array('creer' => 1));
                $livraisonCab->setActive(true);
                $livraisonCab->setIsAvoir(true);


                $entityManager->persist($livraisonCab);

                $liv = 1;
            }

            foreach ($livraison->getDetails() as $key => $detailslivraison) {
                $resteQuantite = $data[$detailslivraison->getArticle()->getId()]['aLivrer'];
                if ($resteQuantite < 0) {
                    $livraisonDet = new UaTLivraisonfrsdet();
                    $livraisonDet->setArticle($detailslivraison->getArticle());
                    $livraisonDet->setQuantite(floatval($resteQuantite));
                    $livraisonDet->setTva($detailslivraison->getTva());
                    $livraisonDet->setObservation($detailslivraison->getObservation());
                    $livraisonDet->setPrixunitaire($detailslivraison->getPrixunitaire());
                    $tva = ($detailslivraison->getTva() / 100) + 1;
                    $montant += $detailslivraison->getPrixunitaire() * $resteQuantite * $tva;

                    $livraisonDet->setCab($livraisonCab);
                    $entityManager->persist($livraisonDet);
                    $data[$detailslivraison->getArticle()->getId()]['aLivrer'] = 0;
                }
            }
        }



        $facture = new UaTFacturefrscab();
        $facture->setCode($UaTFacturefrscabRepository->GetLastCodeAvoir());
        $facture->setRefdocasso($UaTFacturefrscab->getRefdocasso());
        $facture->setDatedocasso($UaTFacturefrscab->getDatedocasso());

        $facture->setUserCreated($this->getUser());
        $facture->setPStatutgrv($this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'cr_faf']));

        $facture->setPositionActuel(array('creer' => 1));

        $dc = $this->appService->getDossierCourant();


        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
        $facture->setDossier($dossier);
        $facture->setActive(true);
        $facture->setFournisseur($UaTFacturefrscab->getFournisseur());
        $type = $this->getDoctrine()->getRepository(UFactureType::class)->find(2);
        $facture->setFactureType($type);
        //   $facture->setMontantAcompte($UaTFacturefrscab->getMontantAcompte());
        // $facture->setMontantReception($UaTFacturefrscab->getMontantReception());
        $facture->setMontant($montant);
        $facture->setFactureParentId($UaTFacturefrscab->getId());
        $facture->addFactureLivraison($livraisonCab);

        $entityManager->persist($facture);






        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La generation a ete bien effectue .']], 200);
    }

    /**
     * @Route("/{id}/insert", name="ua_t_facture_insert" ,  options ={ "expose"= true }  ,  methods={"GET","POST"})
     */
    public function insert(Request $request, UaTFacturefrscab $UaTFacturefrscab, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, UaTReglementfrscabRepository $rep, TrTransactionRepository $TrTransactionRepository, $id): Response
    {
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        $dc = $this->appService->getDossierCourant();


        //die('rrr');

        $tReglementfr = new UaTReglementfrscab();

        $form = $this->createForm(UaTReglementfrscabType::class, $tReglementfr, array('dossier' => $dc));

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
                    ->getRepository(UaTReglementfrscab::class)
                    ->findBy(["factureFournisseur" => $UaTFacturefrscab]);
                if ($U) {

                    $mtreg = $rep->GetMreg($UaTFacturefrscab);
                }
                //                if ($tReglementfr->getMtreglement() < 1) {
                //                    return $this->json(['empty' => $tReglementfr, 'message' => ['title' => 'warning', 'text' => 'le solde doit etre positif !']]);
                //                }
                //                
                //                
                //                if (abs($UaTFacturefrscab->getMontant() - $UaTFacturefrscab->getMtremise()) == $mtreg["MtReg"]) {
                //                    return $this->json(['empty' => $tReglementfr, 'message' => ['title' => 'warning', 'text' => 'la facture est deja paye !']]);
                //                }
                //                
                //
                //
                //                if (abs($UaTFacturefrscab->getMontant() - $UaTFacturefrscab->getMtremise()) - abs($tReglementfr->getMtreglement() + $mtreg["MtReg"]) <= -0.1) {
                //                    return $this->json(['empty' => $tReglementfr, 'message' => ['title' => 'warning', 'text' => 'le montant saisi est superieur au solde de la facture!']]);
                //                }
                $entityManager = $this->getDoctrine()->getManager();

                /*
                 * fait une select by sur le dossier pour setter le dossier
                 */

                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($UaTFacturefrscab->getDossier());
                $tReglementfr->setDossier($dossier);
                $tReglementfr->setFactureFournisseur($UaTFacturefrscab);
                $code = $rep->GetLastCode();
                $tReglementfr->setCode($code);
                $tReglementfr->setActive(1);
                $now = date_create('now');
                $tReglementfr->setCreated($now);
                $tReglementfr->setUserCreated($this->getUser());



                /*
                 * Enregistrer les informations
                 */

                $transaction = new TrTransaction();
                $transaction->setCompte($tReglementfr->getCompte());
                $transaction->setRefDocAsso($tReglementfr->getRefdocasso());

                //dump($tReglementfr->getDatedocasso());
                $transaction->setDatedocasso($tReglementfr->getDatedocasso());

                // dump($transaction->getDatedocasso());  die(); 
                $transaction->setMontant($tReglementfr->getMtreglement() * (-1));
                $transaction->setModepaiement($tReglementfr->getModepaiement());
                $transaction->setDate($tReglementfr->getDatereglement());
                $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('FAF');
                $type = $this->getDoctrine()->getRepository(PTransactionType::class)->findOneByCode('FAF');


                $transaction->setPiece($piece);
                $transaction->setDossier($dossier);
                $transaction->setType($type);
                $transaction->setActive(true);
                $transaction->setCode($code);
                $transaction->setDesignation($tReglementfr->getObservation());
                $transaction->setUserCreated($this->getUser());
                $transaction->setCreated(new \DateTime());

                $tReglementfr->setTransaction($transaction);
                $entityManager->persist($transaction);
                $entityManager->persist($tReglementfr);



                $entityManager->flush();
                return $this->json(['data' => "data", 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
            }
        }
    }

    /**
     * @Route("/{id}/pdf", name="pdf_show_facture", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfShow(Breadcrumbs $breadcrumbs, UaTFacturefrscab $UaTFacturefrscab, UaTReglementfrscabRepository $rep, $id)
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
        /*  $UaTFacturefrsdet = $this->getDoctrine()
          ->getRepository(UaTFacturefrsdet::class)
          ->findBy(["idFaccab" => $UaTFacturefrscab]); */
        //  dump($UaTFacturefrsdet);
        //die();
        $totalArticles = $UaTFacturefrscab->getArrayTotalArticleByFacture($UaTFacturefrscab);
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }

        //  $mtht = $rep->GetMtHt($UaTFacturefrscab);
        //  $tot = $rep->GettotNet($UaTFacturefrscab);
        $netPaye = ($UaTFacturefrscab->getMontant()) - ($UaTFacturefrscab->getMtremise());

        $formatter = \NumberFormatter::create('fr_FR', \NumberFormatter::SPELLOUT);
        $formatter->setAttribute(\NumberFormatter::DECIMAL, 2);
        $formatter->setAttribute(\NumberFormatter::ROUNDING_MODE, \NumberFormatter::ROUND_HALFUP);
        $number = $formatter->format($netPaye);
        //dump($number);
        //die();
        $html = $this->renderView(
            'module_achat/t_facturefrscab/pdf/mypdf.html.twig',
            [
                'parametre' => $parametre,
                'facture' => $UaTFacturefrscab,
                // 'facturedet' => $UaTFacturefrsdet,
                'totalNet' => $number,
                "ht" => $totalArticles['prixHt'],
                "ttc" => $totalArticles['prixTtc'],
                "totalTva" => $totalArticles['prixTva'],
                "totalRemise" => $totalArticles['prixRemise'],
                "totalTtc" => $totalArticles['totalTtc'],
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
     * @Route("/{id}/statut", name="ua_t_facture_statut", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statut(ValidatorInterface $validator, Request $request, UaTFacturefrscab $UaTFacturefrscab): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        //  if ($request->isXmlHttpRequest()) {
        /* if($UaTFacturefrscab->getPStatutgrv()->getAbreviation()=='an_faf')
          {
          return $this->json(['empty' => 'ss', 'message' => ['title' => 'warning', 'text' => 'La facture est deja Annuler']]);

          } */
        $form = $this->createFormBuilder($UaTFacturefrscab)
            ->add('pStatutgrv', EntityType::class, [
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

            if ($UaTFacturefrscab->getPStatutgrv()->getAbreviation() == 'an_faf') {
                $em = $this->getDoctrine()->getManager();
                $UaTFacturefrsdet = $this->getDoctrine()
                    ->getRepository(UaTFacturefrsdet::class)
                    ->findBy(["idFaccab" => $UaTFacturefrscab]);
                foreach ($UaTFacturefrsdet as $det) {
                    $det->setPrixttc($det->getPrixttc() * -1);
                    $em->persist($det);
                    $em->flush();
                }
            }
            $this->getDoctrine()->getManager()->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }
        return $this->render('module_achat/t_facturefrscab/statut.html.twig', [
            'UaTFacturefrscab' => $UaTFacturefrscab,
            'form' => $form->createView(),
        ]);
        /* } else {
          return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
          } */
    }

    /**

     * @Route("/{id}/show/articles", name="ua_t_facture_articles_show", options={"expose"=true}, methods={"GET"})

     */
    public function showArticles(Request $request, Breadcrumbs $breadcrumbs, UaTFacturefrscab $facture): Response
    {
        /* navigation  */
        /*  $breadcrumbs->prependRouteItem("Applications", "app");
          $breadcrumbs->addRouteItem($this->session->get('modules')['_achat']['abreviation'], "module_achat_index");
          $breadcrumbs->addRouteItem($this->session->get('modules')['_achat']['dossiers']['_default_achat']['sousModules']['_ex_be']['titre'], "t_achatdemandeinternecab_index");
          $breadcrumbs->addRouteItem($demande->getCode(), "t_achatdemandeinternecab_show", ["id" => $demande->getId()]);
          $breadcrumbs->addItem('Articles'); */

        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr'];
        //
        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_facture_index");
        //  $breadcrumbs->addRouteItem($facture->getCode(), "ua_t_facturefrscab_consulte", ['id' => $facture->getId()]);
        //  $breadcrumbs->addItem('Articles');
        //  $operations = $this->appService->getOperations('_module_achat', '_fa_fr', '_avoir' , true) ; 

        $valider = 'No';
        if (isset($facture->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }
        return $this->render('module_achat/t_facturefrscab/show_articles.html.twig', [
            'facture' => $facture,
            'valider' => $valider
        ]);
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"}, options={"expose"=true} , name="ua_t_facturefrscab_apply_transitions")
     */
    public function applyTransition(Request $request, UaTFacturefrscab $facture, \App\Repository\UGeneralOperationRepository $UGeneralOperationRepository)
    {
        //die('hr');
        $api = new ApiController();
        $Ecriture = $this->getDoctrine()->getManager()->getRepository(Gaccentry::class)->findOneBy(['num' => $facture->getCode() ]);
        if(!$Ecriture){
            $facture->setUserInjecter($this->getUser()->getId());
            $data = $api->api_output_faf($facture->getId(),$this->connection,$this->entityManager, $this->client);
            if($data->getContent()== "done") {
                $this->getDoctrine()->getManager()->flush();
            }
        }
        if($facture->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
            return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
        }
        $transition = $request->request->get('transition');
        // dd($transition);
        $workflow = $this->workflowRegistry->get($facture);
        if ($workflow->can($facture, $transition)) {
            try {
                $statut = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'module' => 'RCF', 'fonction' => 'ACHAT']);
                // dump($statut); die(); 
                //   $livraison->setStatut($statut);
                $facture->setUserUpdated($this->getUser());

                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a valide */
 
                if (in_array($transition, ['apres_creer_valider'])) {
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'tr_faf']);
                    $facture->setPStatutgrv($PStatutgrv);
                    $facture->setDateValider(new \DateTime());
                    $facture->setUserValider($this->getUser());

                    // if demande achat has children
                    foreach ($facture->getLivraisons() as $key => $livraison) {
                        $demande = $livraison->getCommande()->getReferenceBci();
                        if (count($demande->getCabs()) > 0) {
                            foreach ($demande->getCabs() as $key => $cab) {
                                foreach ($cab->getCommandes() as $key => $commande) {
                                    foreach ($commande->getLivraisons() as $key => $livraisonInter) {
                                        if ($livraisonInter->getFacture()->getPositionActuel() == "creer") {
                                            $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'tr_faf']);
                                            $livraisonInter->getFacture()->setPStatutgrv($PStatutgrv);
                                            $livraisonInter->getFacture()->setDateValider(new \DateTime());
                                            $livraisonInter->getFacture()->setUserValider($this->getUser());
                                        }
                                    }
                                }
                            }
                            $commandes = $cab->getDevis()->getCommandes();
                            foreach ($commandes as $key => $commande) {
                                foreach ($commande->getLivraison() as $key => $livraisonInter) {
                                    if ($livraisonInter->getFacture()->getPositionActuel() == "creer") {
                                        $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAC', 'abreviation' => 'tr_fac']);
                                        $valide = 1;
                                        $livraisonInter->getFacture()->setStatut($PStatutgrv);
                                        $livraisonInter->getFacture()->setDateValider(new \DateTime());
                                        $livraisonInter->getFacture()->setUserValider($this->getUser());
                                    }
                                }
                            }
                        }
                    }
                }

                if (in_array($transition, ['apres_valider_generer'])) {
                    //die("ddd");
                    if ($facture->getParvenue() == null) {
                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de generer cette facture ,<br> NB :  Veuillez renseigner si la facture parvenue ou non"
                        ]]);
                    }
                    $entityManager = $this->getDoctrine()->getManager();

                    $factureVente = $entityManager->getRepository(UvFacturecab::class)->findOneBy(['code' => $facture->getRefdocasso()]);
                    if($factureVente and $factureVente->getPositionActuel() == "creer") {
                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de generer cette facture ,<br> NB :  Veuillez valider la facture client! "
                        ]]);
                    }
                    $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'tr_faf']);
                    $facture->setPStatutgrv($PStatutgrv);
                    $facture->setDateValider(new \DateTime());
                    $facture->setUserValider($this->getUser());
                    $montantFacture = 0;
                    $montantAvance =0;
                    if($facture->getLivraisons()){
                        foreach ($facture->getLivraisons() as $livraison) {
                            if($livraison->getCommande() ){
                                $Avances = $this->getDoctrine()->getRepository(Avance::class)->findBy(['commande' => $livraison->getCommande()->getId()]);
                                foreach ($Avances as $Avance) {
                                    $montantAvance = $montantAvance + $Avance->getMontant();
                                }
                            }
                        }
                    }
                    $montantFacture= floatval($facture->getMontant()) -  $montantAvance;
                    // dd($montantFacture);
                    $uaTechniqueCabs = $entityManager->getRepository(UaTechniqueCab::class)->findUaTechniqueArticleEnsemble($facture);

                    $uGeneralOperation = new UGeneralOperation();
                    $uGeneralOperation->setParvenue($facture->getParvenue());
                    $uGeneralOperation->setAutreInformation($facture->getObservation());
                    $uGeneralOperation->setActive(true);
                    $uGeneralOperation->setSens(-1);
                    $uGeneralOperation->setFactureFournisseur($facture);
                    $uGeneralOperation->setFournisseur($facture->getFournisseur());
                    $uGeneralOperation->setUppartenaire($facture->getFournisseur());
                    

                    $uGeneralOperation->setRefDocAsso($facture->getRefdocasso());
                    $uGeneralOperation->setDateDocAsso($facture->getDatedocasso());
                    $uGeneralOperation->setNumCheque($facture->getNumcheque());
                    $uGeneralOperation->setDate($facture->getDatefacture());
                    $uGeneralOperation->setDossier($facture->getDossier());
                    $uGeneralOperation->setUserUpdated($this->getUser());
                    $uGeneralOperation->setMontant($montantFacture);
                    $uGeneralOperation->setMontantFinal($montantFacture * $uGeneralOperation->getSens());

                    if($facture->getPPiece()->getId() == 40 or $facture->getPPiece()->getId() == 34) {
                        $piece = $entityManager->getRepository(PPiece::class)->find(34);
                    }else {
                        $piece = $entityManager->getRepository(PPiece::class)->find(35);
                    }
                    $uGeneralOperation->setPPiece($piece);

                    $cat = null;
                    if (in_array($uGeneralOperation->getFournisseur()->getCategorie()->getK(), ['externe', 'externe es']) or ($uGeneralOperation->getDossier()->getIsEntreprise() == 1 and $uGeneralOperation->getFournisseur()->getCategorie()->getK() == "interne")) {
                        $cat = 'E';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 4 compte intra
                    } elseif ($uGeneralOperation->getFournisseur()->getCategorie()->getK() == 'interne') {
                        $cat = 'I';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte intra
                    }
                    $uGeneralOperation->setCompte(
                        $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                            'dossier' => $facture->getDossier(),
                            'type' => $typeCompte
                        ])
                    );
                    $uGeneralOperation->setPCompte($uGeneralOperation->getCompte());
                    
                    // if ($uGeneralOperation->getFournisseur()->getCategorie()->getK() == 'interne') {
                    //     $uGeneralOperation->setCompteDestinataire(
                    //         $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                    //             'dossier' => $facture->getFournisseur()->getDossier(),
                    //             'type' => $typeCompte
                    //         ])
                    //     );
                    // }

                    //$uGeneralOperation->setCode($UGeneralOperationRepository->GetLastCode($cat));
                    
                    // $uGeneralOperation->setCode($UGeneralOperationRepository->GetLastCodeByDossier($facture->getDossier(), $cat, "OPRD"));
                    $entityManager->persist($uGeneralOperation);
                    $entityManager->flush();
                    if ($uaTechniqueCabs) {
                        foreach ($uaTechniqueCabs as $uaTechniqueCab) {
                            $uaTechniqueCab->setUGeneralOperation($uGeneralOperation);
                        }
                    }
                    $uGeneralOperation->setCode_demande_paiement($UGeneralOperationRepository->GetLastCodeDpByDossier($facture->getDossier(), $cat));
                    
                    //generer operation partie Vente

                    if($factureVente and $factureVente->getPositionActuel() == "valider") {
                        if (in_array($uGeneralOperation->getFournisseur()->getCategorie()->getK(), ['externe',  'externe es']) or ($uGeneralOperation->getDossier()->getIsEntreprise() == 1 and $uGeneralOperation->getFournisseur()->getCategorie()->getK() == "interne")) {
                            $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 5 compte phisique
                            $pPiece = $entityManager->getRepository(PPiece::class)->find(35);
                            $cat = 'E';
                        } elseif ($uGeneralOperation->getFournisseur()->getCategorie()->getK() == 'interne') {
                            $cat = 'I';
                            $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte virtuelle
                            $pPiece = $entityManager->getRepository(PPiece::class)->find(34);
                        }

                        $uGeneralOperationVente = new UGeneralOperation();
                        $uGeneralOperationVente->setActive(true);
                        $uGeneralOperationVente->setFactureClient($factureVente);
                        $uGeneralOperationVente->setSens(1);
                        $uGeneralOperationVente->setClient($factureVente->getClient());
                        $uGeneralOperationVente->setUppartenaire($facture->getFournisseur());

                      
                        

                        $uGeneralOperationVente->setPPiece($pPiece);
                        // $uGeneralOperationVente->setPPiece($factureVente->getPPiece());
                        // $uGeneralOperationVente->setFournisseur($facture->getFournisseur());
                        $uGeneralOperationVente->setRefDocAsso($factureVente->getRefdocasso());
                        $uGeneralOperationVente->setDateDocAsso($factureVente->getDatedocasso());
    
                        //$uGeneralOperation->setNumCheque($facture->getNumcheque());
                        $uGeneralOperationVente->setDate($factureVente->getDatefacture());
                        $uGeneralOperationVente->setDossier($factureVente->getDossier());
                        $uGeneralOperationVente->setUserUpdated($this->getUser());
                        $uGeneralOperationVente->setMontant($factureVente->getMontant());
                        $uGeneralOperationVente->setMontantFinal($factureVente->getMontant() * $uGeneralOperationVente->getSens());
                        //                    $uGeneralOperation->setSens(-1);
                        //                    if($facture->getPiece()->getCode() == "FAV"){
                        //                       $uGeneralOperation->setSens(1);
                        //                    }
                        $cat = null;
    
                        
                        $uGeneralOperationVente->setCompteDestinataire(
                            $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                                'dossier' => $factureVente->getDossier(),
                                'type' => $typeCompte
                            ])
                        );
                        $uGeneralOperationVente->setPCompte($uGeneralOperationVente->getCompteDestinataire());

                        // $uGeneralOperation->setCompteDestinataire(
                        //     $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossier->getId(), $typeCompte)
                        // );
    
                        // $uGeneralOperationVente->setCode($UGeneralOperationRepository->GetLastCodeByDossier($factureVente->getDossier(), $cat, "OPRE"));
                        $entityManager->persist($uGeneralOperationVente);

                        $uGeneralOperation->setParent($uGeneralOperationVente);
                        $uGeneralOperationVente->setParent($uGeneralOperation);

                        $workflow->apply($factureVente, $transition);

                        
                    }
                    


                    // end geenrer operation partie Vente

                    foreach ($facture->getLivraisons() as $key => $livraison) {
                        $demande = $livraison->getCommande()->getReferenceBci();
                        if (count($demande->getCabs()) > 0) {
                            foreach ($demande->getCabs() as $key => $cab) {
                                foreach ($cab->getCommandes() as $key => $commande) {
                                    foreach ($commande->getLivraisons() as $key => $livraisonInter) {
                                        if ($livraisonInter->getFacture()->getPositionActuel() == "valider") {
                                            $factureIntrat = $livraisonInter->getFacture();
                                            $uaTechniqueCabs = $entityManager->getRepository(UaTechniqueCab::class)->findUaTechniqueArticleEnsemble($livraisonInter->getFacture());
                                            $uGeneralOperationIntrat = new UGeneralOperation();
                                            $uGeneralOperationIntrat->setParvenue($factureIntrat->getParvenue());
                                            $uGeneralOperationIntrat->setAutreInformation($factureIntrat->getObservation());
                                            $uGeneralOperationIntrat->setActive(true);
                                            $uGeneralOperationIntrat->setSens(-1);
                                            $uGeneralOperationIntrat->setFactureFournisseur($factureIntrat);
                                            $uGeneralOperationIntrat->setFournisseur($factureIntrat->getFournisseur());
                                             $uGeneralOperationIntrat->setUppartenaire($facture->getFournisseur());
                                            
                                            $piece = $entityManager->getRepository(PPiece::class)->find(34);

                                            $uGeneralOperationIntrat->setPPiece($piece);

                                            $uGeneralOperationIntrat->setRefDocAsso($factureIntrat->getRefdocasso());
                                            $uGeneralOperationIntrat->setDateDocAsso($factureIntrat->getDatedocasso());
                                            $uGeneralOperationIntrat->setNumCheque($factureIntrat->getNumcheque());
                                            $uGeneralOperationIntrat->setDate($factureIntrat->getDatefacture());
                                            $uGeneralOperationIntrat->setDossier($factureIntrat->getDossier());
                                            $uGeneralOperationIntrat->setUserUpdated($this->getUser());
                                            // $uGeneralOperationIntrat->setRegul(true);
                                            $uGeneralOperationIntrat->setMontant($factureIntrat->getMontant());
                                            $uGeneralOperationIntrat->setMontantFinal($uGeneralOperationIntrat->getMontant() * $uGeneralOperationIntrat->getSens());
                                            $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte intra

                                            $uGeneralOperationIntrat->setCompte(
                                                // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($factureIntrat->getDossier()->getId(), $typeCompte)
                                                $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $factureIntrat->getDossier(), 'type' => $typeCompte])
                                            );
                                            $uGeneralOperationIntrat->setPCompte($uGeneralOperationIntrat->getCompte());
                                            
                                            // if ($uGeneralOperation->getFournisseur()->getCategorie()->getK() == 'interne') {
                                            // $uGeneralOperationIntrat->setCompteDestinataire(
                                            //     // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($factureIntrat->getFournisseur()->getDossier()->getId(), $typeCompte)
                                            //     $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $factureIntrat->getFournisseur()->getDossier(), 'type' => $typeCompte])
                                            // );
                                            // $uGeneralOperationIntrat->setCode($UGeneralOperationRepository->GetLastCodeByDossier($factureIntrat->getDossier(), "I", "OPRD"));

                                            $entityManager->persist($uGeneralOperationIntrat);
                                            // $entityManager->flush();
                                            if ($uaTechniqueCabs) {
                                                foreach ($uaTechniqueCabs as $uaTechniqueCab) {
                                                    $uaTechniqueCab->setUGeneralOperation($uGeneralOperationIntrat);
                                                }
                                            }
                                            $uGeneralOperationIntrat->setCode_demande_paiement($UGeneralOperationRepository->GetLastCodeDpByDossier($factureIntrat->getDossier(), "I"));
                                            // $uGeneralOperation->addOperation($uGeneralOperationIntrat);
                                            $uGeneralOperationIntrat->setParent($uGeneralOperation);
                                        }
                                    }
                                }
                            }
                            $commandes = $cab->getDevis()->getCommandes();
                            foreach ($commandes as $key => $commande) {
                                foreach ($commande->getLivraison() as $key => $livraisonInter) {
                                    if ($livraisonInter->getFacture()->getPositionActuel() == "valider") {
                                        $factureIntrat = $livraisonInter->getFacture();
                                        $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => 'FAC']);

                                        $uGeneralOperationIntrat = new UGeneralOperation();
                                        $uGeneralOperationIntrat->setActive(true);
                                        $uGeneralOperationIntrat->setFactureClient($factureIntrat);
                                        $uGeneralOperationIntrat->setClient($factureIntrat->getClient());
                                        $uGeneralOperationIntrat->setUppartenaire($facture->getFournisseur());

                                        $uGeneralOperationIntrat->setSens(1);
                                        $piece = $entityManager->getRepository(PPiece::class)->find(34);

                                        $uGeneralOperationIntrat->setPPiece($piece);
                                        // $uGeneralOperationIntrat->setFournisseur($factureIntrat->getClient());
                                        $uGeneralOperationIntrat->setRefDocAsso($facture->getRefdocasso());
                                        $uGeneralOperationIntrat->setDateDocAsso($facture->getDatedocasso());
                                        // $uGeneralOperationIntrat->setRegul(true);
                                        //$uGeneralOperation->setNumCheque($facture->getNumcheque());
                                        $uGeneralOperationIntrat->setDate($facture->getDatefacture());
                                        $uGeneralOperationIntrat->setDossier($facture->getDossier());
                                        $uGeneralOperationIntrat->setUserUpdated($this->getUser());
                                        $uGeneralOperationIntrat->setMontant($facture->getMontant());
                                        $uGeneralOperationIntrat->setMontantFinal($uGeneralOperationIntrat->getMontant() * $uGeneralOperationIntrat->getSens());

                                        $uGeneralOperationIntrat->setCompteDestinataire(
                                            $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $facture->getDossier(), 'type' => $typeCompte])

                                            // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($facture->getDossier()->getId(), $typeCompte)
                                        );
                                        $uGeneralOperationIntrat->setPCompte($uGeneralOperationIntrat->getCompteDestinataire());


                                        $entityManager->persist($uGeneralOperationIntrat);
                                        $entityManager->flush();
                                        // $uGeneralOperationIntrat->setCode($UGeneralOperationRepository->GetLastCodeByDossier($facture->getDossier(), "I", "OPRE"));
                                        $uGeneralOperationIntrat->setParent($uGeneralOperation);
                                    }
                                }
                            }
                        }
                    }
                }


                if (in_array($transition, ['apres_valider_creer'])) {
                    //   $reglements= array();
                    if (count($facture->getTReglementfrs()) > 0) {
                        foreach ($facture->getTReglementfrs() as $key => $value) {

                            $url = $this->generateUrl('ua_t_reglement_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }




                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de passer a l'etat creer , 
                                                   cette facture fournisseur dispose deja de(s) reglement(s)  ,
                                        
                                       " . implode(',', $receptions) . "
                                       <br/>NB : pour effectuer cette operation veuillez supprimer ce(s) reglement(s) "
                        ]]);
                    }
                }


                if (in_array($transition, ['apres_creer_annuler'])) {
                    $genereoperation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findOneBy(['factureFournisseur' => $facture]);
                    //dump($genereoperation);die();
                    if (($genereoperation)) {
                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible d'annuler  cette facture contient une operation, <br> NB : pour annuler la generation if faut tout d'abord supprimer cette operation ( " . $genereoperation->getCode() . " )."
                        ]]);
                    }
                }


                if (in_array($transition, ['apres_generer_valider'])) {
                    $genereoperation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findOneBy(['factureFournisseur' => $facture]);
                    //dump($genereoperation);die();
                    if (($genereoperation)) {
                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible d'annuler la generation cette facture contient une operation, <br> NB : pour annuler la generation if faut tout d'abord supprimer cette operation ( " . $genereoperation->getCode() . " )."
                        ]]);
                    }
                }


                $workflow->apply($facture, $transition);

                foreach ($facture->getLivraisons() as $key => $livraison) {
                    $demande = $livraison->getCommande()->getReferenceBci();
                    if (count($demande->getCabs()) > 0) {
                        foreach ($demande->getCabs() as $key => $cab) {
                            foreach ($cab->getCommandes() as $key => $commande) {
                                foreach ($commande->getLivraisons() as $key => $livraisonInter) {
                                    if (($livraisonInter->getFacture()->getPositionActuel() == "creer" and $transition == "apres_creer_valider") or ($livraisonInter->getFacture()->getPositionActuel() == "valider" and $transition == "apres_valider_generer")) {
                                        $workflow->apply($livraisonInter->getFacture(), $transition);
                                    }
                                }
                            }
                        }
                        $commandes = $cab->getDevis()->getCommandes();
                        foreach ($commandes as $key => $commande) {
                            foreach ($commande->getLivraison() as $key => $livraisonInter) {
                                if (($livraisonInter->getFacture()->getPositionActuel() == "creer" and $transition == "apres_creer_valider") or ($livraisonInter->getFacture()->getPositionActuel() == "valider" and $transition == "apres_valider_generer")) {
                                    $workflow->apply($livraisonInter->getFacture(), $transition);
                                }
                            }
                        }
                    }
                }
                $this->get('doctrine')->getManager()->flush();

                return $this->json(['code' => 200, 'id' => $facture->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**

     * @Route("/{id}/show/suivi", name="ua_t_facture_suivi_show", options={"expose"=true}, methods={"GET"})

     */
    public function showsuivi(Request $request, Breadcrumbs $breadcrumbs, UaTFacturefrscab $facture): Response
    {


        //   $mc = $this->session->get('moduleCourantUgouvAchat');
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        //  /* verifier le doit d'acces a cette operation */
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_fa_fr',
        //      'operation' => '_suivi',
        //      'dossier' => $dc->getPrefix()
        //  ]);
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr']['operations'];
        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr'];
        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_facture_index");
        //  //$breadcrumbs->addItem($facture->getCode());
        //  $breadcrumbs->addRouteItem($facture->getCode(), "ua_t_facturefrscab_consulte", ['id' => $facture->getId()]);
        //  $breadcrumbs->addItem('Suivi des operations');


        $operations = $this->appService->getOperations('_module_achat', '_fa_fr', '_suivi', [true, $facture->getCode()]);


        $valider = 'No';
        if (isset($facture->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }

        return $this->render('module_achat/t_facturefrscab/show_suivi.html.twig', [
            'facture' => $facture,
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**

     * @Route("/{id}/show/historique", name="ua_t_commandefrscab_show_historique2", options={"expose"=true}, methods={"GET"})

     */
    public function showhistorique(Request $request, UaTFacturefrscab $facture): Response
    {

        return $this->render('module_achat/t_facturefrscab/show_historique.html.twig', [
            'facture' => $facture,
            'historiques' => '' //$this->getHistorique($facture)
        ]);
    }

    /**
     * @Route("/{id}/document/pdf", name="t_UaTFacturefrscab_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function facturepdf(UaTFacturefrscab $UaTFacturefrscab)
    {
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($UaTFacturefrscab->getCode(), $generator::TYPE_CODE_128,1,30);
        // dd('amine');
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

        /* foreach ($UaTFacturefrscab->getFactureLivraisons() as $key => $value) {
          # code...
          dump($value->getDetails());die();
          }
          */
        // dump($UaTFacturefrscab);
        // die();
        //dump($UaTFacturefrscab);die();

        $totalFactureArticles = $UaTFacturefrscab->getArrayTotalArticleByFacture($UaTFacturefrscab);
        $tvaRetenu = $totalFactureArticles['prixTvaSansDevise'] * $UaTFacturefrscab->getRemise() / 100;
        $devise = $UaTFacturefrscab->getdevise()->getCode();

        // dd($devise);
        // $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise->getCode());
        //ach
        // $obj = new nuts($totalFactureArticles['totalTtc'], $devise);
        // // dump($UaTFacturefrscab);die();
        // // $obj = new nuts($totalFactureArticles['prixTtc'], "MAD");
        // $nb = $obj->getFormated(" ", ",");
        // $text = $obj->convert("fr-FR");
        $moins = 'moins ';

        // if ($totalFactureArticles['totalTtcSansDevis'] > 0) {
        //     $tot = $totalFactureArticles['totalTtcSansDevis'];
        //     $obj = new nuts($tot, "MAD");
        //     $nb = $obj->getFormated(" ", ",");
        //     $text = $obj->convert("fr-FR");
        // } else {
        //     // dd($totalArticles['totalTtcSansDevis']);
        //     $tot = $totalFactureArticles['totalTtcSansDevis'] * -1;

        //     $obj = new nuts($tot, "MAD");
        //     $nb = $obj->getFormated(" ", ",");
        //     $text  = $moins . $obj->convert("fr-FR");
        // }

        $devise =  $UaTFacturefrscab->getDevise()->getCode();
        if ($totalFactureArticles['totalTtcSansDevis'] > 0) {
            $tot = $totalFactureArticles['totalTtcSansDevis'];
        } else {
            // dd($totalArticles['totalTtcSansDevis']);
            $tot = $totalFactureArticles['totalTtcSansDevis'] * -1;
        }
        
        if ($UaTFacturefrscab->getPPiece()->getId() != 71) {
            $obj = new nuts($tot, $devise );
            $nb = $obj->getFormated(" ", ",");
            $text = $obj->convert("fr-FR");
        }else {
            $obj = new nuts($UaTFacturefrscab->getMontant(), $devise );
            $nb = $obj->getFormated(" ", ",");
            $text = $obj->convert("fr-FR");
        }
           


        $acompte = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->findOneBy(['parent' => $UaTFacturefrscab]);
        //dump($acompte);die();
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $UaTFacturefrscab->getDossier()->getLogo()) && $UaTFacturefrscab->getDossier()->getLogo() != null ? $urlFichierAchat . $UaTFacturefrscab->getDossier()->getLogo() : "img/default/default-logo.png";
        
        // --------------------      Singnature fature   -------------------------------------------------------------------------//
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UaTFacturefrscab, 'postion' => 1, 'tableName' => 7]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UaTFacturefrscab, 'postion' => 2, 'tableName' => 7]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UaTFacturefrscab, 'postion' => 3, 'tableName' => 7]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UaTFacturefrscab, 'postion' => 4, 'tableName' => 7]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $html = $this->renderView('module_achat/t_facturefrscab/pdf/document.html.twig', [
            'image' => $image,
            'cab' => $UaTFacturefrscab,
            "ht" => $totalFactureArticles['prixHt'],
            "ttc" => $totalFactureArticles['prixTtc'],
            "Tva" => $totalFactureArticles['prixTvaSansDevise'] - $tvaRetenu,
            "totalTva" => $totalFactureArticles['prixTva'],
            "totalRemise" => $totalFactureArticles['prixRemise'],
            "totalTtc" => $totalFactureArticles['prixTtc'],
            "totalTtcSansDevise" => $totalFactureArticles['totalTtcSansDevis'],
            "acompte" => $acompte,
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

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // $canvas = $dompdf->get_canvas();
        // $canvas->page_text(535, 760, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("facture.pdf", [
            "Attachment" => false
        ]);
    }



      /**
     * @Route("/{id}/test/document/pdf", name="test_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function test_document_pdf(UaTFacturefrscab $UaTFacturefrscab)
    {

        // dd('amine');
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




        $image ='/images/parametrage/dossiers/5.png';

        $html = $this->renderView('module_achat/t_facturefrscab/pdf/test_document.html.twig', [
            'image' => $image,
        ]);

        ob_get_clean();


        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // $canvas = $dompdf->get_canvas();
        // $canvas->page_text(535, 760, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("facture.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/avoir/pdf", name="t_UaTFacturefrscab_document_avoir_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function Avoirpdf(UaTFacturefrscab $UaTFacturefrscab)
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
        $UaTLivraisonfrscab = new UaTLivraisonfrscab();
        foreach ($UaTFacturefrscab->getLivraisons() as $det) {
            $UaTLivraisonfrscab = $det;
        }
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $UaTLivraisonfrscab->getDossier()->getLogo()) && $UaTLivraisonfrscab->getDossier()->getLogo() != null ? $urlFichierAchat . $UaTLivraisonfrscab->getDossier()->getLogo() : "img/default/default-logo.png";
        $html = $this->renderView('module_achat/t_facturefrscab/pdf/avoir.html.twig', [
            'image' => $image,
            'cab' => $UaTLivraisonfrscab,
            'fac' => $UaTFacturefrscab
        ]);

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
        $dompdf->stream("Avoir.pdf", [
            "Attachment" => false
        ]);
    }






    /**
     * @Route("/multiple/delete", name="t_UaTFacturefrscab_delete_multiple_facture",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteMultipleFacture(Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {   //  dump(  $request->request->get('_array_ids') );
        //die;

        if ($request->isXmlHttpRequest()) {
            try {


                //   dump(  $request->request->get('_array_ids') );
                // die;

                $entityManager = $this->getDoctrine()->getManager();

                $UaTFacturefrscabs = $UaTFacturefrscabRepository->findBy(['id' => $request->request->get('_array_ids')]);

                //   
                if (!empty($UaTFacturefrscabs)) {


                    foreach ($UaTFacturefrscabs as $key => $UaTFacturefrscab) {



                        $reglements = $UaTFacturefrscab->getTReglementfrs();

                        if (count($reglements) == 0) {
                        } else {
                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "impossible de supprimer une facture lie a un reglement .
                        
                        
                        "   . "<br/>Reference : " . $UaTFacturefrscab->getCode() . ""]], 200);
                        }
                    }


                    foreach ($UaTFacturefrscabs as $key => $UaTFacturefrscab) {



                        $reglements = $UaTFacturefrscab->getTReglementfrs();

                        if (count($reglements) == 0) {
                            $UaTFacturefrscab->setIsdeleted(true);
                            // $entityManager->remove($UaTFacturefrscab);
                        } else {
                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'impossible de supprimer une facture lie a un reglement .']], 200);
                        }

                        $acomptes = $this->getDoctrine()->getRepository(UATCommandefrscabAcompte::class)->findBy(['facture' => $UaTFacturefrscab]);
                        foreach ($acomptes as $key => $value) {
                            $value->setFacture(null);
                            $entityManager->persist($value);
                        }

                        foreach ($UaTFacturefrscab->getLivraisons() as $key => $livraison) {
                            $livraison->setFacture(null);
                            $entityManager->persist($livraison);
                        }
                    }










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
     * @Route("/{id}/avoir/edit", name="t_UaTFacturefrscab_update_avoir", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UaTFacturefrscab $UaTFacturefrscab, Breadcrumbs $breadcrumbs, $id): Response
    {

        $m = $UaTFacturefrscab->getArrayTotalArticleByFacture($UaTFacturefrscab);
        $UaTFacturefrscab->setMontant($m['totalTtcSansDevis']);
        //dump($m);die();

        // $mc = $this->session->get('moduleCourantUgouvAchat');
        // $dc = $this->session->get('dossierCourantUgouvAchat');
        // $modules = $this->session->get('modules');


        /* verifier le doit d'acces a cette operation */

        // $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_ugouv_achat',
        //     'sousModule' => '_fa_fr',
        //     'operation' => '_avoir_edit',
        //     'dossier' => $dc->getPrefix()
        // ]);
        // /* operations autorises pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr']['operations'];
        // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_fa_fr'];
        // /* navigation  */
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");
        // $breadcrumbs->addRouteItem($UaTFacturefrscab->getCode(), "t_achatdemandeinternecab_show", ['id' => $UaTFacturefrscab->getId()]);
        // $breadcrumbs->addItem('Modifier');
        //   $transition = $request->request->get('transition');

        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_av', '_edit', true);

        $UaTFacturefrsdet = new UaTFacturefrsdet();
        $form_det = $this->createForm(UaTFacturefrsdetType::class, $UaTFacturefrsdet);

        $form_det->handleRequest($request);

        $form = $this->createForm(UaTFacturefrscabType::class, $UaTFacturefrscab);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {

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

            $entityManager = $this->getDoctrine()->getManager();

            //dump($form->getData()->getMontant());die();

            $mnt = $form->getData()->getMontant();



            $UaTLivraisonfrscab = $this->getDoctrine()
                ->getRepository(UaTLivraisonfrscab::class)
                ->findOneBy(['facture' => $UaTFacturefrscab->getParent()]);

            $total = filter_var($UaTLivraisonfrscab->getCommande()->getArrayTotalArticleByCommande()['totalTtcSansDevisA'], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
            if ($total < $mnt) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'ajouter un montant d\'acompte superieur au montant du commande']]);
            }
            //dump($UaTLivraisonfrscab->getCommande()->getArrayTotalArticleByCommande($commande)['totalTtcSansDevis']);dump($UaTLivraisonfrscab->getCommande()->getId());die();
            //$entityManager->persist($factureAvoirCab);
            $entityManager->flush();
            return $this->json(['data' => "data", 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
        }

        return $this->render('module_achat/t_facturefrscab/avoir/edit.html.twig', [
            'facture' => $UaTFacturefrscab,
            'operations' => $operations,
            'form' => $form->createView(),
            'form_det' => $form_det->createView()
        ]);
    }

    /**
     * @Route("/{id}/acompte/edit", name="t_UaTFacturefrscab_update_acompte", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function acompte(ValidatorInterface $validator, Request $request, UaTFacturefrscab $UaTFacturefrscab, Breadcrumbs $breadcrumbs, $id): Response
    {



        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_ac', '_edit', true);
        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);

        $form = $this->createForm(UaTFacturefrscabType::class, $UaTFacturefrscab)->add('parvenue', EntityType::class, [
            'class' => PGlobalParamDet::class,
            'query_builder' => function (EntityRepository $er) use ($PGlobalParam) {
                return $er->createQueryBuilder('a')
                    ->where('a.cab = :type')
                    ->setParameter('type', $PGlobalParam)
                    ->orderBy('a.id', 'ASC');
            },
            'choice_label' => 'v',
            'data' => $UaTFacturefrscab->getParvenue(),
            'constraints' => [new NotBlank()]
        ])
            ->add('refDocAsso', TextType::class, ['data' => $UaTFacturefrscab->getRefdocasso(), 'constraints' => [new NotBlank()]])
            ->add('dateDocAsso', DateType::class, ['data' => $UaTFacturefrscab->getDatedocasso(), 'widget' => 'single_text', 'constraints' => [new NotBlank()]]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {

            /*
             * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
             */
            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             * 
             * 
             */




            $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('ua_t_facturefrscab')['parvenue']);
            //dump();die();
            if ($PGlobalParamDet->getK() == "fp") {
                if (count($errors) > 0) {
                    $errorsString = (string) $errors;
                    return $this->json(['errors' => $errors]);
                }

                $date = new \DateTime($request->request->get('ua_t_facturefrscab')['dateDocAsso']);
                $UaTFacturefrscab->setParvenue($PGlobalParamDet);
                $UaTFacturefrscab->setObservation($request->request->get('ua_t_facturefrscab')['observation']);
                $UaTFacturefrscab->setRefdocasso($request->request->get('ua_t_facturefrscab')['refDocAsso']);
                $UaTFacturefrscab->setDatedocasso($date);
            } else {
                $UaTFacturefrscab->setRefdocasso(null);
                $UaTFacturefrscab->setDatedocasso(null);
                $UaTFacturefrscab->setParvenue($PGlobalParamDet);
                $UaTFacturefrscab->setObservation($request->request->get('ua_t_facturefrscab')['observation']);
            }

            $entityManager = $this->getDoctrine()->getManager();

            //dump($form->getData()->getMontant());die();

            $mnt = $form->getData()->getMontant();

            $UaTFacturefrsdet = $this->getDoctrine()
                ->getRepository(UaTFacturefrsdet::class)
                ->findOneBy(['cab' => $UaTFacturefrscab]);

            $UaTLivraisonfrscab = $this->getDoctrine()
                ->getRepository(UaTLivraisonfrscab::class)
                ->findOneBy(['facture' => $UaTFacturefrscab]);

            $UaTLivraisonfrsdet = $this->getDoctrine()
                ->getRepository(UaTLivraisonfrsdet::class)
                ->findOneBy(['cab' => $UaTLivraisonfrscab]);
            $commande = $this->getDoctrine()
                ->getRepository(UATCommandefrscab::class)
                ->findOneBy(['id' => $UaTLivraisonfrscab->getCommande()->getId()]);
            $total = filter_var($UaTLivraisonfrscab->getCommande()->getArrayTotalArticleByCommande()['totalTtcSansDevis'], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
            if ($total < $mnt) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'ajouter un montant d\'acompte superieur au montant du commande']]);
            }
            //dump($UaTLivraisonfrscab->getCommande()->getArrayTotalArticleByCommande($commande)['totalTtcSansDevis']);dump($UaTLivraisonfrscab->getCommande()->getId());die();
            $UaTFacturefrsdet->setPrixttc($mnt);

            $UaTLivraisonfrsdet->setPrixunitaire($mnt);
            $UaTFacturefrsdet->setPrixunitaire($mnt);
            $entityManager->persist($UaTFacturefrsdet);
            $entityManager->persist($UaTLivraisonfrsdet);



            $entityManager->flush();
            return $this->json(['data' => "data", 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
        }

        return $this->render('module_achat/t_facturefrscab/acompte/edit.html.twig', [
            'facture' => $UaTFacturefrscab,
            'operations' => $operations,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/{id}/insert/detail", name="t_factureavoir_insert", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function Detsave(ValidatorInterface $validator, Request $request, $id): Response
    {

        /*
         * La creation du formulaire
         */
        $factureCab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($id);
        $UaTFacturefrsdet = new UaTFacturefrsdet();
        $UaTFacturefrsdet->setCab($factureCab);
        $form = $this->createForm(UaTFacturefrsdetType::class, $UaTFacturefrsdet);
        $form->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form);
        //        $tAchatdemandeinternecab = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($id);
        //        $resu = $this->getDoctrine()->getRepository(TAchatdemandeinternedet::class)->findOneBy(['article' => $tAchatdemandeinternedet->getArticle(), 'cab' =>  $tAchatdemandeinternecab ]);


        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors]);
        } else {

            //            if(!empty($resu)){
            //            //    die('deja');
            //                return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'Cet Article existe deja .']]);
            //            
            //            
            //            }


            /*
             * Retourner l'objet saisie avec le calcule de tva
             */
            $tva = ($UaTFacturefrsdet->getTva() / 100) + 1;

            /*
             * Recherche dans la table tAchatdemandeinternecab  pour definir tAchatdemandeinternecab_id
             */

            //            $tAchatdemandeinternecab = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($id);
            //$tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
            
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($UaTFacturefrsdet);
            $entityManager->flush();
            $total = $factureCab->getArrayTotalArticleByFacture($factureCab);
            $factureCab->setMontant($total['totalTtcSansDevis']);
            $dossierPlanComptable = $factureCab->getDossier()->getPlanComptable();
            $codeComtableAchat = $entityManager->getRepository(ArticlePlanComptable::class)->findOneBy(['article' => $UaTFacturefrsdet->getArticle(), 'planComptable' => $dossierPlanComptable]);
            if($codeComtableAchat) {
                $UaTFacturefrsdet->setPlanComptableAchat($codeComtableAchat->getAchat());
            }
            $entityManager->persist($factureCab);
            $entityManager->flush();

            return $this->json([
                'data' => "saved",
                'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);
        }
    }

    /**
     * @Route("/acompte", name="ua_t_facture_acompte_new", options={"expose"=true} ,  methods={"POST"})
     */
    public function acompteChoix(ValidatorInterface $validator, Request $request): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        //  if ($request->isXmlHttpRequest()) {
        /* if($UaTFacturefrscab->getPStatutgrv()->getAbreviation()=='an_faf')
          {
          return $this->json(['empty' => 'ss', 'message' => ['title' => 'warning', 'text' => 'La facture est deja Annuler']]);

          } */

        $UaTFacturefrscab = new UaTFacturefrscab();
        $form = $this->createFormBuilder($UaTFacturefrscab)
            ->add('commande', EntityType::class, [
                'class' => UATCommandefrscab::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where("a.active = true")
                        ->orderBy('a.statut', 'ASC');
                },
                'choice_label' => 'code',
                'placeholder' => 'Choix commande',
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

            if ($UaTFacturefrscab->getPStatutgrv()->getAbreviation() == 'an_faf') {
                $em = $this->getDoctrine()->getManager();
                $UaTFacturefrsdet = $this->getDoctrine()
                    ->getRepository(UaTFacturefrsdet::class)
                    ->findBy(["idFaccab" => $UaTFacturefrscab]);
                foreach ($UaTFacturefrsdet as $det) {
                    $det->setPrixttc($det->getPrixttc() * -1);
                    $em->persist($det);
                    $em->flush();
                }
            }
            $this->getDoctrine()->getManager()->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }
        return $this->render('module_achat/t_facturefrscab/acompte.html.twig', [
            //            'UaTFacturefrscab' => $UaTFacturefrscab,
            'form' => $form->createView(),
        ]);
        /* } else {
          return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
          } */
    }

    /**
     * @Route("/changeDossierFacturePopup", name="change_dossier_facture_popup", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function changerDossierFacturePopup(ValidatorInterface $validator, Request $request): Response
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
                    $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value);

                    if (count($UaTFacturefrscab->getLivraisons()) > 0) {
                        foreach ($UaTFacturefrscab->getLivraisons() as $key => $liv) {
                            $liv->setDossier($form->getData()['dossier']);
                            if ($liv->getCommande()) {
                                $liv->getCommande()->setDossier($form->getData()['dossier']);
                                if ($liv->getCommande()->getReferenceBci()) {
                                    $liv->getCommande()->getReferenceBci()->setDossier($form->getData()['dossier']);
                                }
                            }
                            $entityManager->persist($liv);
                        }
                    }



                    $UaTFacturefrscab->setDossier($form->getData()['dossier']);
                    $entityManager->persist($UaTFacturefrscab);
                }

                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'Le dossier a ete bien change .'], 'data' => "bien"], 200);
            }
            return $this->render('module_achat/t_facturefrscab/change.dossier.popup.html.twig', [
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    //ua_t_facturefrscab_generer

    /**
     * @Route("/{id}/genererFacture", name="ua_t_facturefrscab_generer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function genererFacture(ValidatorInterface $validator, Request $request, UaTFacturefrscab $UaTFacturefrscab): Response
    {
        if ($request->isXmlHttpRequest()) {
            $dc = $this->appService->getDossierCourant();
            $operations = $this->appService->getOperations('_module_achat', '_fa_fr', '_generer', [true, $UaTFacturefrscab->getCode()]);

            $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);
            //dump($PGlobalParam);die();
            //$PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->findOneBy(['cab'=>$PGlobalParam]);
            $form = $this->createFormBuilder()
                ->add('id', HiddenType::class, ['data' => $UaTFacturefrscab->getId()])
                ->add('parvenue', EntityType::class, [
                    'class' => PGlobalParamDet::class,
                    'query_builder' => function (EntityRepository $er) use ($PGlobalParam) {
                        return $er->createQueryBuilder('a')
                            ->where('a.cab = :type')
                            ->setParameter('type', $PGlobalParam)
                            ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'v',
                    'data' => $UaTFacturefrscab->getParvenue(),
                    'constraints' => [new NotBlank()]
                ])
                ->add('refDocAsso', TextType::class, ['data' => $UaTFacturefrscab->getRefdocasso(), 'constraints' => [new NotBlank()]])
                ->add('dateDocAsso', DateType::class, ['data' => $UaTFacturefrscab->getDatedocasso(), 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
                ->add('autre', TextareaType::class, ['data' => $UaTFacturefrscab->getObservation()])
                ->getForm();
            $form->handleRequest($request);


            if ($form->isSubmitted()) {

                if($UaTFacturefrscab->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
                }

                $entityManager = $this->getDoctrine()->getManager();

                $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('form')['parvenue']);
                //  dump( $PGlobalParamDet);die();
                if ($PGlobalParamDet->getK() == "fp") {
                    $errors = $validator->validate($form);

                    /*
                * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                */
                    if (count($errors) > 0) {
                        return $this->json(['errors' => $errors]);
                    }
                    $date = new \DateTime($request->request->get('form')['dateDocAsso']);
                    $UaTFacturefrscab->setParvenue($PGlobalParamDet);
                    $UaTFacturefrscab->setObservation($request->request->get('form')['autre']);
                    $UaTFacturefrscab->setRefdocasso($request->request->get('form')['refDocAsso']);
                    $UaTFacturefrscab->setDatedocasso($date);
                } else {
                    $UaTFacturefrscab->setRefdocasso(null);
                    $UaTFacturefrscab->setDatedocasso(null);
                    $UaTFacturefrscab->setParvenue($PGlobalParamDet);
                    $UaTFacturefrscab->setObservation($request->request->get('form')['autre']);
                }

                $entityManager->persist($UaTFacturefrscab);
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .'], 'data' => "bien"], 200);
            }

            return $this->render('module_achat/t_facturefrscab/generer.html.twig', [
                'facture' => $UaTFacturefrscab,
                'form' => $form->createView(),
                'operations' => $operations,
            ]);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    //ua_t_facturefrscab_avoir_generer
    /**
     * @Route("/{id}/avoir/genererFacture", name="ua_t_facturefrscab_avoir_generer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function genererAvoirFacture(ValidatorInterface $validator, Request $request, UaTFacturefrscab $UaTFacturefrscab): Response
    {

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_fa_fr_av', '_generer', [true, $UaTFacturefrscab->getCode()]);

        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);
        //dump($PGlobalParam);die();
        //$PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->findOneBy(['cab'=>$PGlobalParam]);
        $form = $this->createFormBuilder()
            ->add('id', HiddenType::class, ['data' => $UaTFacturefrscab->getId()])
            ->add('parvenue', EntityType::class, [
                'class' => PGlobalParamDet::class,
                'query_builder' => function (EntityRepository $er) use ($PGlobalParam) {
                    return $er->createQueryBuilder('a')
                        ->where('a.cab = :type')
                        ->setParameter('type', $PGlobalParam)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'v',
                'data' => $UaTFacturefrscab->getParvenue(),
                'constraints' => [new NotBlank()]
            ])
            ->add('refDocAsso', TextType::class, ['data' => $UaTFacturefrscab->getRefdocasso(), 'constraints' => [new NotBlank()]])
            ->add('dateDocAsso', DateType::class, ['data' => $UaTFacturefrscab->getDatedocasso(), 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->add('autre', TextareaType::class, ['data' => $UaTFacturefrscab->getObservation()])
            ->getForm();
        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            $entityManager = $this->getDoctrine()->getManager();

            $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('form')['parvenue']);
            //dump();die();
            if ($PGlobalParamDet->getK() == "fp") {
                $errors = $validator->validate($form);
                /*
                * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $date = new \DateTime($request->request->get('form')['dateDocAsso']);
                $UaTFacturefrscab->setParvenue($PGlobalParamDet);
                $UaTFacturefrscab->setObservation($request->request->get('form')['autre']);
                $UaTFacturefrscab->setRefdocasso($request->request->get('form')['refDocAsso']);
                $UaTFacturefrscab->setDatedocasso($date);
            } else {
                $UaTFacturefrscab->setRefdocasso(null);
                $UaTFacturefrscab->setDatedocasso(null);
                $UaTFacturefrscab->setParvenue($PGlobalParamDet);
                $UaTFacturefrscab->setObservation($request->request->get('form')['autre']);
            }

            $entityManager->persist($UaTFacturefrscab);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .'], 'data' => "bien"], 200);
        }

        return $this->render('module_achat/t_facturefrscab/avoir/generer.html.twig', [
            'facture' => $UaTFacturefrscab,
            'form' => $form->createView(),
            'operations' => $operations,
        ]);
    }


    /**
     * @Route("/desactiver", name="ua_t_facturefrscab_desactiver", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function DesactiverFacture(ValidatorInterface $validator, Request $request): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {









            $id =  $request->request->get('_array_ids');
            $entityManager = $this->getDoctrine()->getManager();
            // dump( $id );
            //die;
            foreach ($id as $key => $value) {
                $facture = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value);

                if ($facture->getOperation()) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La facture ' . $facture->getCode() . ' contient deja des operations .']], 200);
                }
            }
            foreach ($id as $key => $value) {
                $facture = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value);

                if ($facture->getOperation() > 0) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La facture ' . $facture->getCode() . ' contient deja des operations .']], 200);
                }

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
     * @Route("/{id}/avoir/edit/detail", name="ua_t_facturefrscab_edit_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function editDetail(Request $request, UaTFacturefrsdet $UaTFacturefrsdet): Response
    {
        // $UATCommandefrsdet = new UATCommandefrsdet();
        $form_det = $this->createForm(UaTFacturefrsdetType::class, $UaTFacturefrsdet);
        $form_det->handleRequest($request);

        return $this->render('module_achat/t_facturefrscab/avoir/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'UaTFacturefrsdet' => $UaTFacturefrsdet,
        ]);
    }



    /**
     * @Route("/{id}/avoir/update/detail", name="ua_t_facturefrscab_update_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updateAvoirDetail(ValidatorInterface $validator, Request $request, UaTFacturefrsdet $UaTFacturefrsdet): Response
    {

        $form_det = $this->createForm(UaTFacturefrsdetType::class, $UaTFacturefrsdet);
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


        $tva = ($UaTFacturefrsdet->getTva() / 100) + 1;


        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }



    /**
     * @Route("{id}/{token}/avoir/delete/detail", name="ua_t_facturefrscab_avoir_article_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function deleteDetail(Request $request, UaTFacturefrsdet $UaTFacturefrsdet, $token): Response
    {

        if ($this->isCsrfTokenValid('delete' . $UaTFacturefrsdet->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UaTFacturefrsdet);
            $entityManager->flush();

            return $this->json([
                'data' => "deleted",
                'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }




    /**
     * @Route("/{id}/document/old_sys", name="ua_t_facturefrscab_document_old_sys", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(UaTFacturefrscab $obj, Breadcrumbs $breadcrumbs)
    {
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($obj->getCode(), $generator::TYPE_CODE_128,1,30);


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

        $totalArticles = $obj->getArrayTotalArticleByFacture($obj);
        $tvaRetenu = $totalArticles['prixTvaSansDevise'] * $obj->getRemise() / 100;


        //dump($totalArticles);
        //die();

        $articleold = $this->getDoctrine()->getRepository(ArticleOld::class)->findBy(['src' => '_ach_facture', 'code' => $obj->getCode()]);
        $devise = $obj->getdevise()->getCode();

        $object = new nuts($totalArticles['totalTtc'], $devise);
        $nb = $object->getFormated(" ", ",");
        $text = $object->convert("fr-FR");

        $html = $this->renderView('module_achat/t_facturefrscab/pdf/document_old_sys.html.twig', [
            'image' => $image,
            'cab' => $obj,
            'sans' => 0,
            'details' => $articleold,
            "ht" => $totalArticles['prixHt'],
            "ttc" => $totalArticles['prixTtc'],
            "Tva" => $totalArticles['prixTvaSansDevise'] - $tvaRetenu,
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['prixTtc'],
            "totalTtcSansDevise" => $totalArticles['totalTtcSansDevis'],
            "ttcTxt" => $text,
            "barcode" => $barcode,
        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        // $customPaper = [0, 0, 750, 1000];
        // $dompdf->setPaper($customPaper);
        $dompdf->render();
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }
    /**
     * @Route("/Generer_bordereaux", name="t_facturefrscab_bordereaux", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function generer_bordereaux(ValidatorInterface $validator, Request $request,UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {
        //---------------------------
        $factures = json_decode($request->request->get('bordereaux'));
      
       
        if ($factures) {
            $GetLastCode = $UaTFacturefrscabRepository->GetLastCodeBRD();
            // dd($GetLastCode);
            foreach($factures as $key => $facture ){
                $uaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->findOneBy(['id' => $facture]);
                $uaTFacturefrscab->setCodeBrd($GetLastCode);
            }
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'success', 'text' => 'Le bordereau a été générer']]);
        }

        return $this->render('module_achat/t_facturefrscab/valider.html.twig');
        
    }
    /**
     * @Route("/t_facturefrscab_get_code", name="t_facturefrscab_get_code", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function t_facturefrscab_get_code(Request $request): Response
    {
        $code= $request->request->get('codef'); 
        $dossier = $this->appService->getDossierCourant()->getId();
        $codefac = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->findOneBy(['code' => $code,'dossier' => $dossier ]);
        if(!$codefac) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "Ce code n'exist pas"]]);

        }else if($codefac->getCodeBrd()) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'le bordereau déja générer']]);
        }
        else{
            return new JsonResponse([
                'id' => $codefac->getId(), 
                'code' => $codefac->getCode(), 
            ]);
        }
        
    }
}
