<?php

namespace App\Controller\EcritureComptable;

use App\Controller\ApiController;
use App\Entity\TrTransaction;
use App\Entity\UaTFacturefrscab;
use App\Entity\UvFacturecab;
use App\Repository\UaTFacturefrscabRepository;
use \App\Service\AppService;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * @Route("ecriturecomptable/suivi" )
 */
class SuiviEcritureController extends AbstractController {

    
    public function __construct(Connection $connection, HttpClientInterface $client, SessionInterface $session, EntityManagerInterface $entityManager, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
        $this->entityManager = $entityManager;
        $this->connection = $connection;
        $this->client = $client;

    }

    /**
     * @Route("/", name="ecriture_comptable_suivi_index",   options = { "expose" = true }  , methods={"GET"})
     */

    public function ecriture_comptable_suivi_index(Connection $connection): Response 
    {  
        $em = $this->getDoctrine()->getManager();
        $operations = $this->appService->getOperations('_module_ecriturecomptable', '_suivi', '_workflow', true);
      
        // $factures = $em->getRepository(UaTFacturefrscab::class)->getFacturesWithBordreau();
        // dd($operations);
        return $this->render('module_ecriturecomptable/suivi/index.html.twig',[
            'operations' => $operations
        ]);
    }
  
 
     /**
      * @Route("/list", name="ecriture_comptable_suivi_list",   options = { "expose" = true }  , methods={"GET"})
      */
     
     public function ecriture_comptable_suivi_list(Request $request, Connection $connection): Response 
     {  
        $data = array();
        $idDossier=$this->appService->getDossierCourant()->getId();
        // dd($request->query->get('columns'));
        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {
            // dump($value['searchable'] == "true");
            if($value['searchable']== "true") {
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
            }else{
                $columns[]=null;
            }

        }
        // dd($columns);
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
        // dd($request->query->get('columns')[2]);
        if($request->query->get('columns')[12]['search']['value'] != "") {
            if($request->query->get('columns')[12]['search']['value'] == "0") {
                // ua_t_facturefrscab
                $sql = "SELECT  * from (
                    select facFrs.id as id, facFrs.code as code, prt.nom as partenaire, dos.description as dossier, facFrs.datefacture as 'date' ,  CONCAT(dos.cce_0, ' ',p_piece.code, ' ', facFrs.refDocAsso, ' ', prt.nom) as observation_operation,facFrs.code_brd as brd,tab.montant as montant ,facFrs.user_precomptabiliser as precomptabliser, facFrs.output_valider as valide,
                    facFrs.flag_rejeter as rejeter, facFrs.observation_rejeter as motif
                    FROM `ua_t_facturefrscab` facFrs 
                    left join u_p_partenaire prt on facFrs.partenaire_id= prt.id
                    left join p_dossier dos on facFrs.dossier_id = dos.id
                    left join p_piece on p_piece.id = facFrs.p_piece_id
                    left join u_general_operation op on op.facture_fournisseur_id = facFrs.id
                    left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montant from  u_general_operation op  
                    left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
                    left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
                    group by op.id) tab on tab.operation_id = op.id
                   where  facFrs.code is not null and facFrs.active=1  and (facFrs.code_brd is not null or facFrs.flag_remise=1)  
                   ) piece where 1 = 1 and piece.code is not null " . $condition . " " . $searchIndiv;
            } 
            elseif($request->query->get('columns')[12]['search']['value'] == "1") {
                 // uv_facturecab 
                
                 $sql = "SELECT  * from (
                    select fac.id as id, fac.code as code, prt.nom as partenaire, dos.description as dossier, fac.datefacture as 'date',CONCAT(dos.cce_0, ' ',p_piece.code, ' ', fac.refDocAsso, ' ', prt.nom) as observation_operation ,'' as brd, reg.MtReg as montant , fac.user_precomptabiliser as precomptabliser, fac.output_valider as valide,
                    fac.flag_rejeter as rejeter, fac.observation_rejeter as motif
                    FROM `uv_facturecab` fac
                    left join u_p_partenaire prt on fac.partenaire_client_id= prt.id
                    left join p_dossier dos on fac.p_dossier_id = dos.id
                    left join p_piece on p_piece.id = fac.p_piece_id
                    LEFT JOIN (SELECT uv_facturecab_id, sens ,SUM(mtreglement) MtReg FROM ua_t_reglementfrs GROUP BY uv_facturecab_id , sens ) reg ON reg.uv_facturecab_id = fac.id  and reg.sens = -1
                   where  fac.code is not null and fac.active=1  and fac.flag_remise=1
                   ) piece where 1 = 1 and piece.code is not null  " . $condition . " " . $searchIndiv;
            } else {
                 // tr_transaction 
                 $sql = "SELECT  * from (
                    select trs.id as id, trs.code_bq as code, ''as partenaire, dos.description as dossier, trs.date_acquise as 'date' , CONCAT(dos.cce_0, ' ',pmdp.designation, ' ', CASE WHEN ua_t_facturefrscab.code is not null THEN ua_t_facturefrscab.code WHEN uv_facturecab.code is not null THEN uv_facturecab.code ELSE '' END, ' ', CASE WHEN trs.date_acquise is not null THEN trs.date_acquise ELSE '' END) AS observation_operation, '' as brd , SUM(trs.montant) as montant, trs.user_precomptabiliser as precomptabliser, trs.output_valider as valide,
                    trs.flag_rejeter as rejeter, trs.observation_rejeter as motif
                    FROM `tr_transaction` trs
                    left join p_dossier dos on trs.p_dossier_id = dos.id
                    left join p_modepaiement pmdp on pmdp.id = trs.p_modepaiement_id
                    inner join u_general_operation on u_general_operation.id = trs.operation_id
                    left join ua_t_facturefrscab on ua_t_facturefrscab.id = u_general_operation.facture_fournisseur_id
                    left join uv_facturecab on uv_facturecab.id = u_general_operation.facture_client_id
                   where  trs.code is not null and trs.active=1 and trs.flag_remise=1 and trs.regul is null group by code
                   ) piece where 1 = 1 and piece.code is not null  " . $condition . " " . $searchIndiv;

            }
        } else {
            $sql = "SELECT  * from (
                select facFrs.id as id, facFrs.code as code, prt.nom as partenaire, dos.description as dossier, facFrs.datefacture as 'date' ,  CONCAT(dos.cce_0, ' ',p_piece.code, ' ', facFrs.refDocAsso, ' ', prt.nom) as observation_operation,facFrs.code_brd as brd,tab.montant as montant ,facFrs.user_precomptabiliser as precomptabliser, facFrs.output_valider as valide,
                facFrs.flag_rejeter as rejeter, facFrs.observation_rejeter as motif
                FROM `ua_t_facturefrscab` facFrs 
                left join u_p_partenaire prt on facFrs.partenaire_id= prt.id
                left join p_dossier dos on facFrs.dossier_id = dos.id
                left join p_piece on p_piece.id = facFrs.p_piece_id
                left join u_general_operation op on op.facture_fournisseur_id = facFrs.id
                left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montant from  u_general_operation op  
                left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
                left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
                group by op.id) tab on tab.operation_id = op.id
               where  facFrs.code is not null and facFrs.active=1  and (facFrs.code_brd is not null or facFrs.flag_remise=1)  
               ) piece where 1 = 1 and piece.code is not null " . $condition . " " . $searchIndiv;
        }

        // dd($condition);
       
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();
        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
        // echo($sql);die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {
            $nestedData = array();
            $id = $value['id'];
            $nestedData[] =  $id;
            $nestedData[] =  $value['code'];
            $nestedData[] =  $value['partenaire'];
            $nestedData[] =  $value['dossier']? mb_substr($value['dossier'], 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['dossier'] . '"> ' . '&nbsp;...&nbsp;' . '</span>': null;
            $nestedData[] =  $value['date'];
            $nestedData[] =  $value['observation_operation']? mb_substr($value['observation_operation'], 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['observation_operation'] . '"> ' . '&nbsp;...&nbsp;' . '</span>': null;
            $nestedData[] =  $value['brd'];
            $nestedData[] =  number_format($value['montant'], 2, ',', ' ');
            $nestedData[] =  $value['precomptabliser'] ? '<i class="fa fa-check-square-o"></i>' : '<i class="fa fa-square-o"></i>';
            $nestedData[] =  $value['valide']==1 ? '<i class="fa fa-check-square-o"></i>' : '<i class="fa fa-square-o"></i>';
            $nestedData[] =  $value['rejeter']==1 ? '<i class="fa fa-check-square-o"></i>' : '<i class="fa fa-square-o"></i>';
            $nestedData[] = $value['motif']? mb_substr($value['motif'], 0, 25) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['motif'] . '"> ' . '&nbsp;...&nbsp; ' . '</span>': null;
            $nestedData[] =  $value['id'];
            
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
    
     

}
