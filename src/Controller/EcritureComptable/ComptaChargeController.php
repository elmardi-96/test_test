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
 * @Route("ecriturecomptable/charge" )
 */
class ComptaChargeController extends AbstractController {

    
    public function __construct(Connection $connection, HttpClientInterface $client, SessionInterface $session, EntityManagerInterface $entityManager, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
        $this->entityManager = $entityManager;
        $this->connection = $connection;
        $this->client = $client;

    }

    /**
     * @Route("/", name="ecriture_comptable_compta_charge_index",   options = { "expose" = true }  , methods={"GET"})
     */

    public function ecriture_comptable_compta_charge_index(Connection $connection,Breadcrumbs $breadcrumbs): Response 
    {  
        $em = $this->getDoctrine()->getManager();
        $operations = $this->appService->getOperations('_module_ecriturecomptable', '_charge', '_workflow', true);

        // $factures = $em->getRepository(UaTFacturefrscab::class)->getFacturesWithBordreau();
        // dd($operations);
        return $this->render('module_ecriturecomptable/charge/index.html.twig',[
            'operations' => $operations
        ]);
    }
    /**
     * @Route("/list", name="ecriture_comptable_compta_charge_list",   options = { "expose" = true }  , methods={"GET"})
     */
    
    public function ecriture_comptable_compta_charge_list(Request $request, Connection $connection,Breadcrumbs $breadcrumbs, UaTFacturefrscabRepository $factureRepositroy): Response 
    {  
        $em = $this->getDoctrine()->getManager();


        $data = array();
        
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
            } else {
                $columns[] = null;
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
           where facFrs.compta_charge = 0 and facFrs.code_brd is not NULL
           ) piece where 1 = 1 " . $condition . " " . $searchIndiv;
        

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
            $nestedData[] =  $value['dossier']? mb_substr($value['dossier'], 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right hint--large" aria-label="' . $value['dossier'] . '"> ' . '&nbsp;...&nbsp;' . '</span>': '';
            $nestedData[] =  $value['date'];
            $nestedData[] =  $value['observation_operation']? mb_substr($value['observation_operation'], 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right hint--large" aria-label="' . $value['observation_operation'] . '"> ' . '&nbsp;...&nbsp;' . '</span>': '';
            $nestedData[] =  $value['brd'];
            $nestedData[] =  number_format($value['montant'], 2, ',', ' ');
            $nestedData[] =  $value['precomptabliser'] ? '<i class="fa fa-check-square-o"></i>' : '<i class="fa fa-square-o"></i>';
            $nestedData[] =  $value['valide']==1 ? '<i class="fa fa-check-square-o"></i>' : '<i class="fa fa-square-o"></i>';
            $nestedData[] =  $value['rejeter']==1 ? '<i class="fa fa-check-square-o"></i>' : '<i class="fa fa-square-o"></i>';
            $nestedData[] = $value['motif']? mb_substr($value['motif'], 0, 25) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right hint--large" aria-label="' . $value['motif'] . '"> ' . '&nbsp;...&nbsp; ' . '</span>': '';
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
 
    
    /**
     * @Route("/ecriture_comptable_charge_flag_facture/{idPiece}", name="ecriture_comptable_charge_flag_facture",   options = { "expose" = true })
     */

    public function ecriture_comptable_charge_flag_facture($idPiece): Response 
    {  
        $factureFournisseur = $this->entityManager->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
        $factureFournisseur->setComptaCharge(1);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse(1);
    }
    
    
    
    
    
    


}
