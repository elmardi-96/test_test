<?php

namespace App\Controller\ModuleTresorerie;

use App\Entity\PPiece;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use \App\Service\AppService;
use App\Entity\PGlobalParam;
use App\Entity\UPPartenaire;
use App\Entity\UvFacturecab;
use App\Entity\PCompteBanque;
use App\Entity\TrTransaction;
use Doctrine\DBAL\Connection;
use App\Entity\PGlobalParamDet;
use App\Controller\ApiController;
use App\Entity\PCompteBanqueType;
use App\Entity\UGeneralOperation;

use Doctrine\ORM\EntityManagerInterface;
use \App\Repository\TrTransactionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("tresorerie/eci" )
 */
class ECIController extends AbstractController {

    public function __construct(Connection $connection,  HttpClientInterface $client, EntityManagerInterface $entityManager, SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
        $this->entityManager = $entityManager;
        $this->connection = $connection;
        $this->client = $client;

    }

    /**
     * @Route("/", name="eci_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {


        $em = $this->getDoctrine()->getManager();
        
        // $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_index', true);
        $operations = $this->appService->getOperations('_module_tresorerie', '_eci', '_index', true);
        $partenaires = $em->getRepository(UPPartenaire::class)->findBy(array("active" => true));
        
        // $operations = $this->appService->getOperations('_module_tresorerie', '_eci', '_index', true);
        // $operations = null;
        return $this->render('tresorerie/eci/index.html.twig', [
            'operations' => $operations,
            'partenaires' => $partenaires
        ]);
    }
    
    /**
     * @Route("/list", name="eci_list", options={"expose"=true}, methods={"GET"})
     */
    public function list(Request $request, Connection $connection): Response {

        $data = array();
        $totalRows = $sqlRequest = '';


        $columns = [];
        $searchIndiv = "";

        foreach ($request->query->get('columns') as $key => $value) {
            
            if (!empty($value['name']) and $key > 0 ) {
                
                if($value['name']  == 'piece_designation'){
                    $columns[] = ' piece.designation';
                }else{
                    $columns[] = $value['name'];
                }
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
        }

        $where = $condition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($columns as $key => $value) {
                if ($key > 0) {
                    $where .= 'OR ';
                }
                $where .= " $value LIKE '%$search%' ";
            }
            $condition = " and (" . $where . ")";

            // dd($condition);
        }

        $client_filter = ' and cli.id =  9954 ' ;

        $client_request = $request->query->get('columns')[0]['search']['value'];

        if ($client_request ==  'tout') 
        {
            $client_filter  =  ' and cli.id != 9954 ' ;
        }

        // dd( $client_filter)

        $dc = $this->appService->getDossierCourant();

        $sql = "
        SELECT ope.id ,ope.code , piece.designation as piece_designation, cli.nom, fac.code as code_facture, ope.montant
        FROM u_general_operation ope
        left JOIN uv_facturecab fac on fac.id = ope.facture_client_id
        LEFT JOIN u_p_partenaire cli on cli.id = ope.client_id 
        LEFT JOIN p_piece piece on  piece.id = ope.p_piece_id
        where 1= 1 and ope.active=1  and piece.id = 37 and ope.parent_id is null  ". $client_filter  . " and ope.facture_client_id is null and ope.p_dossier_id = " 
        . $this->appService->getDossierCourant()->getId() . "" . $condition . " " . $searchIndiv;

        // dd( $sql);'

        // $sql .= "group by op.id";
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();
        

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";

        //echo $sql ; die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {

            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);

            $id = $value['id'];
            $nestedData = array();

            // $route='tr_operation_show';

            // if($value['piece']=='FAF' ||  $value['piece']=='DP'  ||  $value['piece']=='RT'  ||  $value['piece']=='PI' ){
            //     $route='tr_operation_show_achat';
            // } elseif($value['piece']=='FAC'){
            //     $route='tr_operation_show_vente';
                
            // }elseif($value['piece']=='PLA' || $value['piece']=='PRT' ||  $value['piece']=='RCH'){
            //     $route='tr_operation_show_mouvement';
            // }
            //     else{
            //         $route='tr_operation_show';
            // }
        
            // $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $id . "'>";
            // $url = "<a class='active-link' href='" . $this->generateUrl($route, ['id' => $value['id']]) . "'> " . $value['code'] . " </a>";
            // $nestedData[] = $url;


            $nestedData[] = $value['id'];
            $nestedData[] = $value['code'];
            $nestedData[] = $value['piece_designation']; 
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['code_facture'];
            $nestedData[] = number_format( $value['montant'] , 2); 
            $nestedData[] = $this->renderView('tresorerie/eci/actions.html.twig', ['id' => $id]);
            $nestedData[] = $this->renderView('tresorerie/eci/action_lettrage.html.twig', ['id' => $id]);



            // $nestedData[] = "<center><a title='lettrage' data-modal='lettrage' data-id='$id' class='info_lettrage'> " . "" . " <i class='fa fa-plus'></i></center>";
            
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
     * @Route("/new", name="eci_new", options={"expose"=true}, methods={"POST"})
     */
    public function new(Request $request): Response {
        
        if($request->get('client') == "") {
            return new JsonResponse("Veuillez remplir le client", 500);
        }

        $entityManager = $this->getDoctrine()->getManager();
        $dc = $this->appService->getDossierCourant();
        $operation = new UGeneralOperation();
        $operation->setDate(new \DateTime());
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
       
        $operation->setCode($entityManager->getRepository(UGeneralOperation::class)->GetLastCodeEci(null,$dossier, "ENNI"));
        $operation->setDossier($dossier);
        $operation->setDesignation($request->get('observation'));
        // $operation->setFournisseur($dossier->getPartenaire());
        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 5 compte physique
        $operation->setCompteDestinataire(
            // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossier->getId(), $typeCompte)
            $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossier,'type' => $typeCompte])
        );
        $operation->setPCompte($operation->getCompteDestinataire());

        // $operation->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'ENNI'])
        // );
        $operation->setSens(1);
        $operation->setActive(true);
        $operation->setPPiece($entityManager->getRepository(PPiece::class)->find(37));
        $operation->setDateEncaissement(new \DateTime($request->get('encaissement')));

        $operation->setClient(
            $entityManager->getRepository(UPPartenaire::class)->find($request->get('client'))
        );

        $operation->setMontant($request->get('montant'));
        $operation->setMontantFinal($operation->getSens() * $operation->getMontant());

        $operation->setUserCreated($this->getUser());
        $operation->setCreated(new \DateTime());

        $entityManager->persist($operation);
        $entityManager->flush();

        return new JsonResponse("bien enregistre");
    }


    



    /**
     * @Route("/eci_maj_client", name="eci_maj_client", options={"expose"=true}, methods={"POST"})
     */
    public function eci_maj_client(Request $request): Response {



        $entityManager = $this->getDoctrine()->getManager();
        // dd($request->request);

        $client         = $request->request->get('client');
        $ope_id         = $request->request->get('id');

        
        $message = ''; 

        if($client == ''){
             $message .=  'veuillez remplir le champ  client';
              return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => $message]], 200);       
        }
        // dd('amine');
        $api = new ApiController();
        
        
        $client = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneById($client);
 
        $UGeneralOperation     = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findOneById($ope_id );
        $UGeneralOperation->setClient($client);
        if($UGeneralOperation->getTransactions()) {
            foreach($UGeneralOperation->getTransactions() as $tr) {
                $tr->setClient($client);
            }
        }
        $entityManager->persist($UGeneralOperation);
        $data = $api->api_output_eci($UGeneralOperation->getTransactions()[0]->getId(),$this->connection, $this->entityManager, $this->client, false, $client->getId());
        $response = $this->client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            'verify_peer' => false, 
            'verify_host' => false,
            'body' => [
                'data' => $data
            ]
        ]);

        if($response->getContent() == "done") {
            // dd($data[0]);
            $api->insertIntoEcriture($data[0], $this->entityManager);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']], 200);
        }
        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Error!']], 200);       




    }


    /**
     * @Route("/details", name="eci_details_facture", options={"expose"=true}, methods={"POST"})
     */
    public function eciDetailsFacture(Request $request): Response {
        $entityManager = $this->getDoctrine()->getManager();
        $eci = $entityManager->getRepository(UGeneralOperation::class)->find($request->get('id'));
        $montant = $eci->getMontant();

        // dd($montant);
        $operations = $eci->getOperations();
        $data = [];
        if(count($operations) > 0) {
            foreach ($operations as $operation) {
                array_push($data, [
                    "client" => $operation->getClient()->getNom(),
                    "montant" => $operation->getMontant(),
                    "code" => $operation->getCode()
                ]);
            }
        }
        return new JsonResponse(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .'], 'data' =>[
            'montant' => $montant,
            'operations' => $data
        ]]);
    }
    /**
     * @Route("/eci_check_facture", name="eci_check_facture", options={"expose"=true}, methods={"POST"})
     */
    public function eciCheckFacture(Request $request): Response {
        $entityManager = $this->getDoctrine()->getManager();
        // $piece = $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'FAC']);
        $operation = $entityManager->getRepository(UvFacturecab::class)->findOneBy(['code' => trim($request->get('code'))]);

        // if($operation->getOperation())
        // {
        //     return new JsonResponse("cette facture a déja une operation", 500);
        // }

        $response = false;
        $data = [];
        // dd($facture);
        if($operation) {
            $data = [
                "client" => $operation->getClient()->getNom(),
                "montant" => $operation->getMontant(),
                "code" => $operation->getCode()
            ];
        }
        return new JsonResponse(['response' => $response, "data" => $data]);
    }
    /**
     * @Route("/eci_lettrage_persist", name="eci_lettrage_persist", options={"expose"=true}, methods={"POST"})
     */
    public function eciLettragePersist(Request $request, TrTransactionRepository $TrTransactionRepository): Response {
        
        $entityManager = $this->getDoctrine()->getManager();
        $factures = json_decode($request->get('operations'));
        // dd($request->get('operations'));
        $dc = $this->appService->getDossierCourant();
        $operation_selected = $entityManager->getRepository(UGeneralOperation::class)->find($request->get('id'));
        $operation_selected->setParent($operation_selected);
        $fournisseur = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneBy( ['dossier' => $dc->getId()] );
        // dd($operations);

        $montant_total = 0;
        $compte = null;
        $codeBQ_generer = false;
        $GetLastCode = null;
        


        foreach ($factures as $key => $facture) {

            $factureExist = $entityManager->getRepository(UvFacturecab::class)->findOneBy(["code" => $facture]);

            if($codeBQ_generer ==  false)
            {
                $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($operation_selected->getDossier(), "VIR", "E");
                $codeBQ_generer = true;
            }


            if($factureExist){

                $montant_total +=  $factureExist->getMontant();
                $compte = $entityManager->getRepository(PCompteBanque::class)->findOneBy( ['dossier' => $factureExist->getDossier(),  'type' => 5] );

                // --- enni --

                // dd($factureExist->getPPiece()->getId() , $factureExist->getPPiece()->getCode() , $factureExist->getPPiece()->getDesignation() );

                $ppiece_id = $factureExist->getPPiece()->getId();

                $newOperationEnni = new UGeneralOperation();
                $newOperationEnni->setFactureClient($factureExist);
                $newOperationEnni->setDate(new \DateTime());
                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                $newOperationEnni->setDossier($factureExist->getDossier());
                $newOperationEnni->setFournisseur($fournisseur);
                $newOperationEnni->setCompteDestinataire($compte);
                $newOperationEnni->setPCompte($compte);

                if($ppiece_id  == 6){
                    $newOperationEnni->setPPiece($entityManager->getRepository(PPiece::class)->findOneBy(['id' => 34]));       
                }elseif($ppiece_id  == 5){
                    $newOperationEnni->setPPiece($entityManager->getRepository(PPiece::class)->findOneBy(['id' => 35]));       
                }else{
                    return new JsonResponse("piece erronée", 500);
                }

                $newOperationEnni->setActive(true);
                $newOperationEnni->setSens(1);
                $newOperationEnni->setDateEncaissement($operation_selected->getDateEncaissement());
                $newOperationEnni->setClient($factureExist->getClient());
                $newOperationEnni->setMontant($factureExist->getMontant());
                $newOperationEnni->setMontantFinal( $newOperationEnni->getSens() * $newOperationEnni->getMontant());
                $newOperationEnni->setUserCreated($this->getUser());
                $newOperationEnni->setCreated(new \DateTime());
                $newOperationEnni->setParent($operation_selected);
                $newOperationEnni->setExecuter(1);
                $newOperationEnni->setPositionActuel('vente_generer');

                $entityManager->persist($newOperationEnni);

                // --- transaction enni ---

                // if($newOperationEnni->getPPiece()->getId() == 34) {
                //         $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                // } else if($newOperationEnni->getPPiece()->getId() == 35) {
                //         $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
                // }else{
                //     return new JsonResponse("piece erronée", 500);
                // }


                $transactionRegulEnni = new TrTransaction();
                $transactionRegulEnni->setMontant($newOperationEnni->getMontant());
                
                if($newOperationEnni->getPPiece()->getId() == 34) {
                       $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                } else if($newOperationEnni->getPPiece()->getId() == 35) {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
                }else{
                    return new JsonResponse("piece erronée", 500);
                }
                $transactionRegulEnni->setPPiece($codePP);
                $transactionRegulEnni->setDate(new \DateTime('now'));
                $transactionRegulEnni->setDateDocAsso($newOperationEnni->getDateDocAsso());
                $transactionRegulEnni->setRefDocAsso($newOperationEnni->getRefDocAsso());
                $transactionRegulEnni->setDossier($newOperationEnni->getDossier());
                $transactionRegulEnni->setUserCreated($this->getUser());
                $transactionRegulEnni->setCode($TrTransactionRepository->GetLastCodeByDossier($newOperationEnni->getDossier(), "I",$newOperationEnni->getPPiece()->getCode()));
                $transactionRegulEnni->setPPieceDpm($codePP);
                $transactionRegulEnni->setMontantTransaction($transactionRegulEnni->getMontant());

                $transactionRegulEnni->setFournisseur($newOperationEnni->getFournisseur());
                $transactionRegulEnni->setClient($newOperationEnni->getClient());
                $transactionRegulEnni->setActive(1);
                $transactionRegulEnni->setIsValider(0);
                $transactionRegulEnni->setEmploye($newOperationEnni->getEmploye());
                $transactionRegulEnni->setPaie($newOperationEnni->getPaie());
                $transactionRegulEnni->setOperation($newOperationEnni);
                $transactionRegulEnni->setRegul($newOperationEnni->getRegul());
                $transactionRegulEnni->setSens($newOperationEnni->getSens());
                $transactionRegulEnni->setExecuter(1);
                $transactionRegulEnni->setCodeBq($GetLastCode);
                $transactionRegulEnni->setObservationBq($operation_selected->getCode());
                $transactionRegulEnni->setMontantFinal($transactionRegulEnni->getSens() * $transactionRegulEnni->getMontant());


                $entityManager->persist($transactionRegulEnni);

                // --- transaction enni ---

                $entityManager->flush();

            }
        }


        // ---reci ---
        
        //    dd($factureExist->getOperation());

        $newOperation = new UGeneralOperation();
        
        // $newOperation->setFactureClient($factureExist);
        $newOperation->setDate(new \DateTime());
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
        $newOperation->setDossier($factureExist->getDossier());
        $newOperation->setFournisseur($fournisseur);
        $newOperation->setCompteDestinataire($compte);
        $newOperation->setPCompte($compte);
        $newOperation->setPPiece($entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'RECI']));
        $newOperation->setActive(true);
        $newOperation->setSens(-1);
        $newOperation->setDateEncaissement($operation_selected->getDateEncaissement());
        // $newOperation->setClient($factureExist->getClient());
        $newOperation->setMontant("-" . $montant_total);
        $newOperation->setMontantFinal( $newOperation->getSens() * $newOperation->getMontant());
        $newOperation->setUserCreated($this->getUser());
        $newOperation->setCreated(new \DateTime());
        $newOperation->setParent($operation_selected);
        $newOperation->setExecuter(1);

        $entityManager->persist($newOperation);

        // --- transaction reci ---

        $ppiece_reci = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

        $transactionRegul = new TrTransaction();
        $transactionRegul->setMontant($newOperation->getMontant());
        $transactionRegul->setPPiece($ppiece_reci);
        $transactionRegul->setDate(new \DateTime('now'));
        $transactionRegul->setDateDocAsso($newOperation->getDateDocAsso());
        $transactionRegul->setRefDocAsso($newOperation->getRefDocAsso());
        $transactionRegul->setDossier($newOperation->getDossier());
        $transactionRegul->setUserCreated($this->getUser());
        $transactionRegul->setCode($TrTransactionRepository->GetLastCodeByDossier($newOperation->getDossier(), "I",$newOperation->getPPiece()->getCode()));
        $transactionRegul->setPPieceDpm($ppiece_reci);
        $transactionRegul->setMontantTransaction($transactionRegul->getMontant());

        $transactionRegul->setFournisseur($newOperation->getFournisseur());
        $transactionRegul->setClient($newOperation->getClient());
        $transactionRegul->setActive(1);
        $transactionRegul->setIsValider(0);
        $transactionRegul->setEmploye($newOperation->getEmploye());
        $transactionRegul->setPaie($newOperation->getPaie());
        $transactionRegul->setOperation($newOperation);
        $transactionRegul->setRegul($newOperation->getRegul());
        $transactionRegul->setSens($newOperation->getSens());
        $transactionRegul->setExecuter(1);
        $transactionRegul->setCodeBq($GetLastCode);
        $transactionRegul->setObservationBq($operation_selected->getCode());
        $transactionRegul->setMontantFinal($transactionRegul->getSens() * $transactionRegul->getMontant());

        $entityManager->persist($transactionRegul);


        // --- reci ---

        $entityManager->flush();
        
        return new JsonResponse("bien enregistre");

    }


    /**
     * @Route("/eci_transfer", name="eci_transfer", options={"expose"=true}, methods={"POST"})
     */
    public function eciTransfer(Request $request): Response {

        
        $entityManager = $this->getDoctrine()->getManager();

        $arrayIds = json_decode($request->get('arrayIds'));

        $dc = $this->appService->getDossierCourant();
        $dossierCourant = $entityManager->getRepository(PDossier::class)->find($dc->getId());

        $dossierDesitinataire = $entityManager->getRepository(PDossier::class)->find($request->get('dossier_transfer'));

        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 4 compte virtuelle
       
        foreach ($arrayIds as $id) {
            $eci = $entityManager->getRepository(UGeneralOperation::class)->find($id);

            $eciDossierDesitinataire = new UGeneralOperation();
            $eciDossierDesitinataire->setDate(new \DateTime());
            if($dossierDesitinataire->getPartenaire()->getCategorie()->getK() == "interne") {
                $cat = "I";
            } else {
                $cat = "E";
            }
            $eciDossierDesitinataire->setCode($entityManager->getRepository(UGeneralOperation::class)->GetLastCodeEci($cat, $dossierCourant , "TRNE"));
            $eciDossierDesitinataire->setDossier($eci->getDossier());
            $eciDossierDesitinataire->setParent($eci);
            $eciDossierDesitinataire->setFournisseur($dossierDesitinataire->getPartenaire());
            // $eciDossierDesitinataire->setCompteDestinataire(
            //     // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossierDesitinataire->getId(), $typeCompte)
            //     $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossierDesitinataire, 'type' => $typeCompte])

            // );
            $eciDossierDesitinataire->setCompte(
                // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossierDesitinataire->getId(), $typeCompte)
                $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossierCourant, 'type' => $typeCompte])

            );
            $eciDossierDesitinataire->setPCompte($eciDossierDesitinataire->getCompte());

            // $eciDossierDesitinataire->setPiece(
            //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'TR'])
            // );
            $eciDossierDesitinataire->setPPiece(
                $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'TRSF'])
            );
            $eciDossierDesitinataire->setActive(true);
            $eciDossierDesitinataire->setSens(-1);
            $eciDossierDesitinataire->setDesignation($eci->getDesignation());
            $eciDossierDesitinataire->setDateEncaissement($eci->getDateEncaissement());
            $eciDossierDesitinataire->setMontant($eci->getMontant());
            $eciDossierDesitinataire->setMontantFinal($eciDossierDesitinataire->getSens() * $eciDossierDesitinataire->getMontant());

            $eciDossierDesitinataire->setUserCreated($this->getUser());
            $eciDossierDesitinataire->setCreated(new \DateTime());
            
            $entityManager->persist($eciDossierDesitinataire);

            $eciDossierDesitinataireRegul = new UGeneralOperation();
            $eciDossierDesitinataireRegul->setDate(new \DateTime());
            $eciDossierDesitinataireRegul->setCode($entityManager->getRepository(UGeneralOperation::class)->GetLastCodeEci($cat, $dossierDesitinataire , "TRNE"));
            $eciDossierDesitinataireRegul->setDossier($dossierDesitinataire);
            $eciDossierDesitinataireRegul->setClient($dossierCourant->getPartenaire());
            $eciDossierDesitinataireRegul->setCompteDestinataire(
                // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossierDesitinataire->getId(), $typeCompte)
                $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossierDesitinataire, 'type' => $typeCompte])

            );
            $eciDossierDesitinataireRegul->setPCompte($eciDossierDesitinataireRegul->getCompteDestinataire());

            // $eciDossierDesitinataireRegul->setCompte(
            //     // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossierDesitinataire->getId(), $typeCompte)
            //     $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossierCourant, 'type' => $typeCompte])

            // );
            // $eciDossierDesitinataireRegul->setPiece(
            //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'TR'])
            // );
            $eciDossierDesitinataireRegul->setPPiece(
                $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'TRSF'])
            );
            $eciDossierDesitinataireRegul->setSens(1);

            $eciDossierDesitinataireRegul->setActive(true);
            $eciDossierDesitinataireRegul->setDesignation($eci->getDesignation());
            $eciDossierDesitinataireRegul->setDateEncaissement($eci->getDateEncaissement());
            $eciDossierDesitinataireRegul->setMontant($eci->getMontant());
            $eciDossierDesitinataireRegul->setMontantFinal($eciDossierDesitinataireRegul->getSens() * $eciDossierDesitinataireRegul->getMontant());

            $eciDossierDesitinataireRegul->setUserCreated($this->getUser());
            $eciDossierDesitinataireRegul->setRegul(true);
            $eciDossierDesitinataireRegul->setCreated(new \DateTime());
            
            $entityManager->persist($eciDossierDesitinataireRegul);
            $entityManager->flush();

            $eciDossierDesitinataireRegul->setParent($eciDossierDesitinataire);

            $entityManager->flush();

            
        }

        
        return new JsonResponse("bien enregistre");
    }
    /**
     * @Route("/eci_transfer_interne", name="eci_transfer_interne", options={"expose"=true}, methods={"POST"})
     */
    public function eci_transfer_interne(Request $request): Response {
        $entityManager = $this->getDoctrine()->getManager();

        $arrayIds = json_decode($request->get('arrayIds'));

        $dc = $this->appService->getDossierCourant();
        $dossierCourant = $entityManager->getRepository(PDossier::class)->find($dc->getId());

        $dossierDesitinataire = $entityManager->getRepository(PDossier::class)->find($request->get('dossier_transfer'));

        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte virtuelle
       
        foreach ($arrayIds as $id) {
            $eci = $entityManager->getRepository(UGeneralOperation::class)->find($id);

            
            $eci->setCode($entityManager->getRepository(UGeneralOperation::class)->GetLastCodeEci(null, $dossierCourant , "TRNI"));
            // $eciDossierDesitinataire->setDossier($eci->getDossier());
            $eci->setFournisseur($dossierDesitinataire->getPartenaire());
            $eci->setCompteDestinataire(null);
            $eci->setClient(null);
            $eci->setCompte(
                $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossierCourant, 'type' => $typeCompte])
            );
            $eci->setSens(-1);
            $eci->setMontantFinal($eci->getSens() * $eci->getMontant());
            $eci->setPCompte($eci->getCompte());

            // $eci->setPiece(
            //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'TRI'])
            // );
            $eci->setPPiece(
                $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'TRNI'])
            );
            


            $eciDossierDesitinataireRegul = new UGeneralOperation();
            $eciDossierDesitinataireRegul->setDate(new \DateTime());
            $eciDossierDesitinataireRegul->setCode($entityManager->getRepository(UGeneralOperation::class)->GetLastCodeEci(null, $dossierDesitinataire , "TRNI"));
            $eciDossierDesitinataireRegul->setDossier($dossierDesitinataire);
            $eciDossierDesitinataireRegul->setClient($dossierCourant->getPartenaire());
            $eciDossierDesitinataireRegul->setCompteDestinataire(
                $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossierDesitinataire, 'type' => $typeCompte])
            );
            $eciDossierDesitinataireRegul->setPCompte($eciDossierDesitinataireRegul->getCompteDestinataire());

            $eciDossierDesitinataireRegul->setSens(1);

          
           
            $eciDossierDesitinataireRegul->setPPiece(
                $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'TRNI'])
            );
            $eciDossierDesitinataireRegul->setActive(true);
            $eciDossierDesitinataireRegul->setDesignation($eci->getDesignation());
            $eciDossierDesitinataireRegul->setDateEncaissement($eci->getDateEncaissement());
            $eciDossierDesitinataireRegul->setMontant($eci->getMontant());
            $eciDossierDesitinataireRegul->setMontantFinal($eciDossierDesitinataireRegul->getSens() * $eciDossierDesitinataireRegul->getMontant());

            $eciDossierDesitinataireRegul->setUserCreated($this->getUser());
            $eciDossierDesitinataireRegul->setRegul(true);
            $eciDossierDesitinataireRegul->setCreated(new \DateTime());
            
            $entityManager->persist($eciDossierDesitinataireRegul);
            
            $eciDossierDesitinataireRegul->setParent($eci);
            
        }

        $entityManager->flush();
        
        return new JsonResponse("bien enregistre");
    }

}