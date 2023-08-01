<?php

namespace App\Controller\EcritureComptable;

use App\Controller\ApiController;
use App\Entity\EcritureCab;
use App\Entity\Gaccentry;
use App\Entity\Gaccentryd;
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
use PhpOffice\PhpSpreadsheet\Reader\Xlsx;

/**
 * @Route("ecriturecomptable/listeEcriture" )
 */
class ListeEcritureController extends AbstractController {

    
    public function __construct(Connection $connection, HttpClientInterface $client, SessionInterface $session, EntityManagerInterface $entityManager, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
        $this->entityManager = $entityManager;
        $this->connection = $connection;
        $this->client = $client;

    }

    // /**
    //  * @Route("/", name="ecriture_comptable_suivi_index",   options = { "expose" = true }  , methods={"GET"})
    //  */

      /**
     * @Route("/ecriture", name="ecriture_comptable_liste_index",   options = { "expose" = true }  , methods={"GET"})
     */


     public function ecriture_comptable_liste_index(Connection $connection,Breadcrumbs $breadcrumbs): Response 
     {  
         $operations = $this->appService->getOperations('_module_ecriturecomptable', '_operation', '_workflow', true);
         // dd($operations);
         return $this->render('module_ecriturecomptable/liste_ecriture/index.html.twig',[
             'operations' => $operations
         ]);
     }
  
 
     /**
      * @Route("/list", name="ecriture_comptable_ecriture_list",   options = { "expose" = true }  , methods={"GET"})
      */
     
     public function ecriture_comptable_ecriture_list(Request $request, Connection $connection): Response 
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
            if($request->query->get('columns')[12]['search']['value'] == "nonvalider") {
                
                $sql = "SELECT   cab.id as id, cab.typ as p_piece_code, cab.num as code ,cab.desvcr as observation_operation, cab.jou as 'journal' , cab.duddat as 'date' , dossier.titre as dossier, cab.fcz_montant_initial as montant, cab.fcz_id_doc1asso as ref_doc_asso,cab.fcz_description_tier_piece as description_tier, cab.fcz_id_tier_piece as tiers_ref
                FROM `gaccentry` cab left join p_dossier dossier on cab.xdossier =dossier.id
                
               where  cab.fcz_flag1 !=1   " . $condition . " " . $searchIndiv;
            } else {
                $sql = "SELECT   cab.id as id, cab.typ as p_piece_code, cab.num as code ,cab.desvcr as observation_operation, cab.jou as 'journal' , cab.duddat as 'date' , dossier.titre as dossier, cab.fcz_montant_initial as montant, cab.fcz_id_doc1asso as ref_doc_asso,cab.fcz_description_tier_piece as description_tier, cab.fcz_id_tier_piece as tiers_ref
                FROM `gaccentry` cab left join p_dossier dossier on cab.xdossier =dossier.id
                
               where  cab.fcz_flag1 =1   " . $condition . " " . $searchIndiv;
            }
        } else {
            $sql = "SELECT   cab.id as id, cab.typ as p_piece_code, cab.num as code ,cab.desvcr as observation_operation, cab.jou as 'journal' , cab.duddat as 'date' , dossier.titre as dossier, cab.fcz_montant_initial as montant, cab.fcz_id_doc1asso as ref_doc_asso,cab.fcz_description_tier_piece as description_tier, cab.fcz_id_tier_piece as tiers_ref
                FROM `gaccentry` cab left join p_dossier dossier on cab.xdossier =dossier.id
                
               where  cab.fcz_flag1 =1   " . $condition . " " . $searchIndiv;
        }

       
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();
        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
        // echo($sql);die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {
            $nestedData = array();
            $id = $value['id']; 
            if($request->query->get('columns')[12]['search']['value'] == "nonvalider") {
                $nestedData[] =  '<input type="checkbox" name="check_ecriture" class="check" data-id=' . $value['id'] . ' id=' . $value['id'] . ' >';
            }else{
                $nestedData[] =  $value['id'];
            }
            $nestedData[] =  $value['p_piece_code'];
            $nestedData[] =  $value['code'];
            $nestedData[] =  $value['dossier'];
            $nestedData[] =  $value['date'];
            $nestedData[] =  $value['observation_operation'];
            $nestedData[] =  $value['journal'];
            $nestedData[] =  number_format($value['montant'], 2, ',', ' ');
            $nestedData[] =  $value['ref_doc_asso'] ;
            $nestedData[] =  $value['description_tier'];
            $nestedData[] =  $value['tiers_ref'];
            $nestedData[] = '';
            
            $nestedData[] = $id;
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
     * @Route("/import_ecriture_comp", name="import_ecriture_comp", options={"expose"=true} , methods={"GET", "POST"})
     */
    public function import_ecriture_comp(Request $request, EntityManagerInterface $entityManager)
    {

        // dd($request);
        $file = $request->files->get('file_ecritures');
        // dd($file);
        if (!$file) {
            return new JsonResponse('Prière d\'importer le fichier', 500);
        }
        if ($file->guessExtension() !== 'xlsx') {
            return new JsonResponse('Prière d\'importer un fichier xlsx', 500);
        }
        $reader = new Xlsx();
        $spreadsheet = $reader->load($file);
        $cob = $spreadsheet->getSheet(0);
        $det = $spreadsheet->getSheet(1);
       
        $capSpreadSheetArys = $cob->toArray();
        $detSpreadSheetArys = $det->toArray();
        unset($capSpreadSheetArys[0]);
        unset($detSpreadSheetArys[0]);

        $sheetCount = count($capSpreadSheetArys);
        // $articles = [];

        foreach ($capSpreadSheetArys as $key => $cab_sheet) {


            $cab = new Gaccentry();
            $cab->setTyp($cab_sheet[1]);
           
            $cab->setNum($cab_sheet[2]);
            
            $cab->setCpy($cab_sheet[3]);
            $cab->setFcy($cab_sheet[3]);
            $cab->setJou(trim($cab_sheet[4]));
            
            if($cab_sheet[5]){
                $cab->setAccdat(new \DateTime($cab_sheet[5]));
                $cab->setDuddat(new \DateTime($cab_sheet[5]));
                $cab->setRatdat(new \DateTime($cab_sheet[5]));
            }
            $cab->setCur('MAD');
            $cab->setCurled('MAD');
            $cab->setDesvcr($cab_sheet[6]);
            
            $cab->setFcy1($cab_sheet[7]); 
            $cab->setCpy1($cab_sheet[8]);
            $cab->setRef($cab_sheet[8]);
            $cab->setBprvcr($cab_sheet[2]);
            $cab->setXdossier($cab_sheet[9]);
            $cab->setFczDescriptionSysteme("ugouv");
            $cab->setFczIdSite($cab_sheet[9]);
            $cab->setFczDescriptionSite($cab_sheet[10]);
            $cab->setFczMontantInitial(number_format(floatval($cab_sheet[11]),2,".",""));
            $cab->setFczMontantNet(number_format(floatval($cab_sheet[11]),2,".",""));    
            if(strlen($cab_sheet[12]) <= 255) {
                $cab->setFczIdDoc1Asso($cab_sheet[12]);
            }
            $cab->setTyp1($cab_sheet[13]);            
            $cab->setFczDateInterfCp(new \DateTime());    
            $cab->setFczDescriptionTierPiece($cab_sheet[14]);        
            $cab->setFczEcRef($cab_sheet[15]);        
        
            $cab->setFczIdTierPiece($cab_sheet[16]);         
            $cab->setFczUserNameCp($this->getUser()->getId());
            $cab->setFczIdTierPiece($cab_sheet[16]);     
            $cab->setFczFlag1(0);
            $entityManager->persist($cab);
            
            $i = 1;
            
            
            foreach ($detSpreadSheetArys as $key => $det_sheet) {
                // dd($key);
               
                if( $det_sheet[0] == $cab_sheet[0] and $det_sheet[8] != 0) {
                    $det = new Gaccentryd();
                    $det->setTypUg($det_sheet[1]);
                    $det->setNum($det_sheet[2]);
                    $det->setLin($i);
                    if($cab_sheet[5]){
                        $det->setAccdat(new \DateTime($cab_sheet[5]));
                    }
    
                    $det->setCpy($cab_sheet[3]);
                    $det->setFcylin($cab_sheet[3]);
                    $det->setAcc($det_sheet[3]);
                    $det->setBpr($det_sheet[4]);                    
                    $det->setCur('MAD');
                    $det->setFreref($det_sheet[5]);
                    $det->setFreref0($det_sheet[6]);
                    $det->setTyp0($cab_sheet[13]);
                    $det->setSns($det_sheet[7]);
                    $det->setAmtcur(number_format(floatval($det_sheet[8]),2,".",""));
                    $det->setDes($det_sheet[9]);
                    $det->setCce0($cab_sheet[8]);
                    $det->setFcy0($cab_sheet[7]);
                    $det->setFczAccLibelle($det_sheet[10]);
                    $det->setEcritureCab($cab);
                   
                    $entityManager->persist($det);
                   
                    $i++;
                }
            }
            $entityManager->flush();      
           
        }

        // return new JsonResponse($articles);

        
        return new JsonResponse("Bien enregistre");
    }
     
 /**
     * @Route("/valedation_ecriture_comptable", name="valedation_ecriture_comptable", options={"expose"=true} , methods={"GET", "POST"})
     */
    public function valedation_ecriture_comptable(Request $request, EntityManagerInterface $entityManager)
    {
        $ecritures = json_decode($request->request->get('ecri_selecteds'));
        if (empty($ecritures)) {
            return new JsonResponse('empty');
        }
        foreach ($ecritures as $ecriture) {
            $cab = $this->getDoctrine()->getRepository(Gaccentry::class)->find($ecriture);
            if($cab){
                $cab->setFczFlag1(1);
            }
        }
        $entityManager->flush();   
        return new JsonResponse('Bien valider');
    }

}
