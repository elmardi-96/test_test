<?php

namespace App\Controller\EcritureComptable;

use App\Controller\ApiController;
use App\Entity\TrTransaction;
use App\Entity\UaTFacturefrscab;
use App\Entity\UvFacturecab;
use App\Entity\Gaccentry;
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
 * @Route("ecriturecomptable/operation" )
 */
class OperationController extends AbstractController {

    
        public function __construct(Connection $connection, HttpClientInterface $client, SessionInterface $session, EntityManagerInterface $entityManager, Breadcrumbs $breadcrumbs, AppService  $AppService) {
            $this->session = $session;
            $this->breadcrumbs = $breadcrumbs;
            $this->appService = $AppService;
            $this->entityManager = $entityManager;
            $this->connection = $connection;
            $this->client = $client;

        }
 
    /**
     * @Route("/", name="ecriture_comptable_operation_index",   options = { "expose" = true }  , methods={"GET"})
     */

    public function ecriture_comptable_operation_index(Connection $connection,Breadcrumbs $breadcrumbs): Response 
    {  
        $operations = $this->appService->getOperations('_module_ecriturecomptable', '_operation', '_workflow', true);
        // dd($operations);
        return $this->render('module_ecriturecomptable/operation/index.html.twig',[
            'operations' => $operations
        ]);
    }
    /**
     * @Route("/getecriturecomptable/information/{idPiece}/{type}", name="ecriture_comptable_operation_getecriturecomptable",   options = { "expose" = true }  , methods={"GET"})
     */

    public function ecriture_comptable_operation_getecriturecomptable($idPiece, $type): Response 
    {  
        // dd($typePiece, $idPiece);
        
        $api = new ApiController();
        $chequeImpaye = $this->entityManager->getRepository(TrTransaction::class)->findOneBy(['codeImpaye' => $idPiece]);
        
        $factureFournisseur = $this->entityManager->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
        if($type == "faf") {
            if(!$factureFournisseur) {
                return new JsonResponse("id piece introuvable!", 500);
            }
            elseif(!$factureFournisseur->getCodeBrd()) {
                return new JsonResponse('Facture sans bordreau !', 500);
            } elseif($factureFournisseur->getComptaCharge() == 1) {
                return new JsonResponse('Facture deja traite!', 500);
            }
        }
        $factureClient = $this->entityManager->getRepository(UvFacturecab::class)->findOneByCode($idPiece);
        $transaction = $this->entityManager->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $idPiece]);
        
        if($type == "generale") {
            // dd($factureClient, $transaction);
            if(!$factureClient and !$transaction) {
                return new JsonResponse("id piece introuvable!", 500);
            }
        }
        // dd($typePiece);
        if($chequeImpaye) {
            
           
            $data = $api->api_output_cheque_impaye($chequeImpaye->getCodeImpaye(),$this->entityManager, $this->client, $this->connection, false);
            
        }
        elseif($factureFournisseur) {
            $arrayOfNums = [$idPiece];
            // $response = $this->client->request('POST', "http://52.213.254.104/api/output/gacentry/data", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $arrayOfNums
            //     ]
            // ]);
            // $data = $response->toArray();
            $data = [];
            // dd(count($data), count($arrayOfNums));

            if(count($data) > 0) {
                if(count($data) != count($arrayOfNums)) {
                    return new JsonResponse("Veuillez contacter l'administrateur!", 500);
                }
            } else {
                $data = $api->api_output_faf($factureFournisseur->getId(),$this->connection, $this->entityManager, $this->client, false);
            }

            // dd($data);
            
        } elseif($factureClient) {
            $arrayOfNums = [$idPiece];
            // $response = $this->client->request('POST', "http://52.213.254.104/api/output/gacentry/data", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $arrayOfNums
            //     ]
            // ]);
            // $data = $response->toArray();
            $data = [];
            // dd(count($data), count($arrayOfNums));

            if(count($data) > 0) {
                if(count($data) != count($arrayOfNums)) {
                    return new JsonResponse("Veuillez contacter l'administrateur!", 500);
                }
            } else {
                $data = $api->api_output_fac($factureClient->getId(),$this->connection, $this->entityManager, $this->client, false);
            }
            
        } elseif($transaction) {
            if($transaction->getRegul() == 1) {
                return new JsonResponse("id piece est une operation regularisation", 500);
            }

            // check if data is already inserted in output.
            $arrayOfNums = [$transaction->getCodeBq()];
            if(count($transaction->getOperation()->getOperations()) > 0) {
                foreach ($transaction->getOperation()->getOperations() as $key => $childOperation) {
                    foreach ($childOperation->getTransactions() as $key => $tr) {
                        if($tr->getRegul() == 1) {
                            array_push($arrayOfNums, $tr->getCodeBq());
                        }
                    }
                }
            }
            $arrayOfNums = array_unique($arrayOfNums);

            $response = $this->client->request('POST', "http://52.213.254.104/api/output/gacentry/data", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' => [
                    'data' => $arrayOfNums
                ]
            ]);
            $data = $response->toArray();
            $data = [];
            // dd(count($data), count($arrayOfNums));

            if(count($data) > 0) {
                if(count($data) != count($arrayOfNums)) {
                    return new JsonResponse("Veuillez contacter l'administrateur!", 500);
                }
            } else {
                if($transaction->getOperation()->getPPiece()->getId() == 67 and !in_array($transaction->getModePaiement()->getId(), [9, 10, 11, 12])) {
                    $data = $api->api_output_rembourssement($transaction->getCodeBq(), $this->entityManager, $this->client, $this->connection, false);
                }elseif($transaction->getOperation()->getPPiece()->getId() == 28) {
                    $data = $api->api_output_placement($transaction->getId(), $this->connection, $this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 30) {
                    $data = $api->api_output_rachat($transaction->getId(), $this->connection, $this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 33) {
                    $data = $api->api_output_retrait($transaction->getId(), $this->connection, $this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 32) {
                    $data = $api->api_output_depot($transaction->getId(), $this->connection, $this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 37) {
                    $data = $api->api_output_eci($transaction->getId(), $this->connection, $this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 39) {
                    $data = $api->api_output_reci($transaction->getId(), $this->connection, $this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 51) {
                    $data = $api->api_output_avance($transaction->getId(), $this->connection, $this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 50) {
                    $data = $api->api_output_transfer_interne($transaction->getId(), $this->connection,$this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 47) {
                    $data = $api->api_output_transfer_externe($transaction->getId(), $this->connection,$this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 48) {
                    $data = $api->api_output_transfer_espece($transaction->getId(),$this->connection, $this->entityManager, $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 49) {
                    $data = $api->api_output_alimentation($transaction->getId(), $this->connection,$this->entityManager,  $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 68) {
                    $data = $api->api_output_gain($transaction->getId(), $this->connection,$this->entityManager,  $this->client, false);
                } elseif($transaction->getOperation()->getPPiece()->getId() == 69) {
                    $data = $api->api_output_perte($transaction->getId(), $this->connection,$this->entityManager,  $this->client, false);
                } elseif(
                    in_array($transaction->getOperation()->getPPiece()->getId(), [38, 44, 45, 46]) or 
                    in_array($transaction->getModePaiement()->getId(), [9, 10, 11, 12])
                    
                ) {
                    $data = $api->api_output_payement_indirect($transaction->getId(), $this->connection,$this->entityManager, $this->client, false);
                } else {
                    $data = $api->api_output_transaction($transaction->getCodeBq(),$this->entityManager, $this->client, $this->connection, false);
                }
            }
            
            
        } else {
            return new JsonResponse("id piece introuvable!", 500);
        }
        // dd($data); 
        if($type == 1) {
            return new JsonResponse($data);
        }
        if($data instanceof JsonResponse) {
            return new JsonResponse($data->getContent(), $data->getStatusCode(), [] , JSON_UNESCAPED_UNICODE);
        }
        $html = $this->renderView('module_ecriturecomptable/operation/table.html.twig', [
            'data' => $data
        ]);
        return new JsonResponse($html);
    }
    /**
     * @Route("/getecriturecomptable/send/{idPiece}", name="ecriture_comptable_operation_getecriturecomptable_send",   options = { "expose" = true }  , methods={"GET"})
     */

    public function ecriture_comptable_operation_getecriturecomptable_send($idPiece): Response 
    {  
        // dd($typePiece, $idPiece);
        $api = new ApiController();
        $chequeImpaye = $this->entityManager->getRepository(TrTransaction::class)->findOneBy(['codeImpaye' => $idPiece]);
        $factureFournisseur = $this->entityManager->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
        $factureClient = $this->entityManager->getRepository(UvFacturecab::class)->findOneByCode($idPiece);
        $transaction = $this->entityManager->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $idPiece]);
        if($chequeImpaye) {
            $transaction->setFlagInjecter(1);
            $transaction->setUserInjecter($this->getUser()->getId());

            $data = $api->api_output_cheque_impaye($chequeImpaye->getCodeImpaye(),$this->entityManager, $this->client, $this->connection);
            
        } elseif($factureFournisseur) {
            // if($factureFournisseur->getFlagRemise() != 1) {
            //     return new JsonResponse("Piece no remis par DBR", 500); 
            // }
            $factureFournisseur->setFlagInjecter(1);
            $factureFournisseur->setUserInjecter($this->getUser()->getId());
            $data = $api->api_output_faf($factureFournisseur->getId(),$this->connection,$this->entityManager, $this->client);
        } elseif($factureClient) {
            // if($factureClient->getFlagRemise() != 1) {
            //     return new JsonResponse("Piece no remis par DBR", 500); 
            // }
            $factureClient->setFlagInjecter(1);
            $factureClient->setUserInjecter($this->getUser()->getId());
            $data = $api->api_output_fac($factureClient->getId(),$this->connection,$this->entityManager, $this->client);

        } elseif($transaction) {
            // if($transaction->getModepaiement()){
            //     if($transaction->getModepaiement()->getId()==11 and !$transaction->getMontantReleve()){
            //         return new JsonResponse('Montant releve non saisi!',500,[],JSON_UNESCAPED_UNICODE);
            //     }
            // }
            if($transaction->getRegul() == 1) {
                return new JsonResponse("id piece est une operation regularisation", 500);
            }
            // if($transaction->getFlagRemise() != 1) {
            //     return new JsonResponse("Piece no remis par DBR", 500); 
            // }
            $transaction->setFlagInjecter(1);
            $transaction->setUserInjecter($this->getUser()->getId());

            
            if($transaction->getOperation()->getPPiece()->getId() == 67 and !in_array($transaction->getModePaiement()->getId(), [9, 10, 11, 12])) {
                $data = $api->api_output_rembourssement($transaction->getCodeBq(), $this->entityManager, $this->client, $this->connection);
            }elseif($transaction->getOperation()->getPPiece()->getId() == 28) {
                $data = $api->api_output_placement($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 30) {
                $data = $api->api_output_rachat($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 33) {
                $data = $api->api_output_retrait($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 32) {
                $data = $api->api_output_depot($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 37) {
                $data = $api->api_output_eci($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 39) {
                $data = $api->api_output_reci($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 51) {
                $data = $api->api_output_avance($transaction->getId(), $this->connection, $this->entityManager, $this->client);
            } elseif($transaction->getOperation()->getPPiece()->getId() == 50) {
                $data = $api->api_output_transfer_interne($transaction->getId(),$this->connection,$this->entityManager, $this->client);
            } elseif($transaction->getOperation()->getPPiece()->getId() == 47) {
                $data = $api->api_output_transfer_externe($transaction->getId(), $this->connection,$this->entityManager, $this->client);
            } elseif($transaction->getOperation()->getPPiece()->getId() == 48) {
                $data = $api->api_output_transfer_espece($transaction->getId(), $this->connection, $this->entityManager, $this->client);
            } elseif($transaction->getOperation()->getPPiece()->getId() == 49) {
                $data = $api->api_output_alimentation($transaction->getId(), $this->connection,$this->entityManager,  $this->client);
            } elseif(
                in_array($transaction->getOperation()->getPPiece()->getId(), [38, 44, 45, 46]) or 
                in_array($transaction->getModePaiement()->getId(), [9, 10, 11, 12])
            ) {
                $data = $api->api_output_payement_indirect($transaction->getId(), $this->connection,$this->entityManager, $this->client);
            } else {
                $data = $api->api_output_transaction($transaction->getCodeBq(),$this->entityManager, $this->client, $this->connection);
            }
        } else {
            return new JsonResponse("id piece introuvable!", 500);
        }
       
        if($data->getContent()== "done") {
            $this->getDoctrine()->getManager()->flush();
            return new JsonResponse('Bien enregistre', 200);
            
        } else if($data->getContent()== "exist") {
            return new JsonResponse("Pièce déjà existe!", 500,[],JSON_UNESCAPED_UNICODE);
        }else {
            return new JsonResponse($data->getContent(), 500,[],JSON_UNESCAPED_UNICODE);
        }
    }
    /**
     * @Route("/getecriturecomptable/valider/{idPiece}", name="ecriture_comptable_operation_getecriturecomptable_valider",   options = { "expose" = true }  , methods={"GET"})
     */

    public function ecriture_comptable_operation_getecriturecomptable_valider($idPiece): Response 
    {  
        
        $chequeImpayes = $this->entityManager->getRepository(TrTransaction::class)->findBy(['codeImpaye' => $idPiece]);
        $factureFournisseur = $this->entityManager->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
        $factureClient = $this->entityManager->getRepository(UvFacturecab::class)->findOneByCode($idPiece);
        $transactions = $this->entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $idPiece]);

        // dd($factureFournisseur, $factureClient  ,  $transaction ); 

        // dd($factureFournisseur);
        
        $api = new ApiController();

        if(count($chequeImpayes) > 0){
            $transactions = $chequeImpayes;
        }
        if($factureFournisseur) {
        
            $code = $factureFournisseur->getCode();
            
            $response = $api->api_output_operation_valider_check($code, $this->client);
            if($response->getContent() == '1'){
                return new JsonResponse("cette facture est deja valide", 500);
            }
            // $Ecriture = $this->entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $code ]);
            // if($Ecriture->getFczFlag5() == 1){
            //     return new JsonResponse("cette facture est deja valide", 500);
            // }
           
            $factureFournisseur->setOutputValider(1);
            $factureFournisseur->setDateFlagOutput(new \DateTime("now"));
            $factureFournisseur->setUserValide($this->getUser()->getId());

            // update
            
        } elseif($factureClient) {
            $code = $factureClient->getCode();

            $response = $api->api_output_operation_valider_check($code, $this->client);

            if($response->getContent() == '1'){
                return new JsonResponse("cette facture est deja validee", 500);
            }
         
            // $Ecriture = $this->entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $code ]);
            // if($Ecriture->getFczFlag1() == 1){
            //     return new JsonResponse("cette facture est deja valide", 500);
            // }

            $factureClient->setOutputValider(1);
            $factureClient->setDateFlagOutput(new \DateTime("now"));
            $factureClient->setUserValide($this->getUser()->getId());
            
            // update

        } elseif(count($transactions) > 0) {
            $code = $idPiece;
            foreach ($transactions as $key => $transaction) {
                if($transaction->getOperation()->getPPiece()->getId() == 30 and $transaction->getOperation()->getQuantite() == null) // rahcat
                {
                    return new JsonResponse('Manque de quantite!',500,[],JSON_UNESCAPED_UNICODE);
                }
                if($transaction->getModepaiement()){
                    if($transaction->getModepaiement()->getId()==11 and !$transaction->getMontantReleve()){
                        return new JsonResponse('Montant releve non saisi!',500,[],JSON_UNESCAPED_UNICODE);
                    }
                }
                if($transaction->getRegul() == 1) {
                    // return new JsonResponse("id piece est une operation regularisation", 500);
                    continue;
                }
                if(!$transaction->getDateAcquise()){
                        return new JsonResponse("Voir avec dbr pour mise a jour de la date d'accuse!",500,[],JSON_UNESCAPED_UNICODE);
                }
                if($key==0){
                    $response = $api->api_output_operation_valider_check($code, $this->client);
                    
                    if($response->getContent() == '1'){
                        return new JsonResponse("cette transaction est deja valide", 500);
                    }  
                    // $Ecriture = $this->entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $code ]);
                    // if($Ecriture->getFczFlag1() == 1){
                    //     return new JsonResponse("cette facture est deja valide", 500);
                    // }
                }
                // if($transaction->getFlagRemise() != 1) {
                //     return new JsonResponse("Piece no remis par DBR", 500); 
                // } 

                $transaction->setOutputValider(1);
                $transaction->setDateFlagOutput(new \DateTime("now"));
                $transaction->setUserValide($this->getUser()->getId());

                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $childOperation) {
                        foreach ($childOperation->getTransactions() as $key => $tr) {
                            $tr->setOutputValider(1);
                            $tr->setDateFlagOutput(new \DateTime("now"));
                            $tr->setUserValide($this->getUser()->getId());
                            if($tr->getCodeBq() != $code) {
                                $api->api_output_operation_valider($tr->getCodeBq(), $this->client);
                            }
                        }
                    }
                }
                
            }
            // update


        } else {
            return new JsonResponse("id piece introuvable!", 500);
        }

        $operation = $this->entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $code]);
        if(!$operation) {
            return new JsonResponse("Pièce introuvable!", 500,[],JSON_UNESCAPED_UNICODE);
        }
        $operation->setFczFlag5(1);
        $operation->setUpddat0(new \DateTime("now"));

        foreach ( $operation->getEcritureDets() as $key => $gcd) {
             $gcd->setUpddattim0(new \DateTime("now"));
        }

        // $this->getDoctrine()->getManager()->flush();
        // return new JsonResponse('Bien enregistre', 200);

       
       
        $response = $api->api_output_operation_valider($code, $this->client);

        if($response->getContent() == "done") {
            // $response = $this->ecriture_comptable_operation_getecriturecomptable_update($code);
            // if($response == "done") {
                $this->getDoctrine()->getManager()->flush();
                return new JsonResponse('Bien enregistre', 200);
            // } else {
            //     return new JsonResponse("Something went wrong!", 500);
                
            // }
        } else if($response->getContent() == "exist") {
            return new JsonResponse("Pièce déjà existe!", 500,[],JSON_UNESCAPED_UNICODE);
        }else {
            return new JsonResponse("Pièce introuvable!", 500,[],JSON_UNESCAPED_UNICODE);
        }
       
    }
    /**
     * @Route("/getecriturecomptable/banque/{idPiece}", name="ecriture_comptable_operation_getecriturecomptable_remise_banque",   options = { "expose" = true }  , methods={"GET"})
     */

    public function ecriture_comptable_operation_getecriturecomptable_remise_banque($idPiece): Response 
    {  
        $chequeImpayes = $this->entityManager->getRepository(TrTransaction::class)->findBy(['codeImpaye' => $idPiece]);
        $factureFournisseur = $this->entityManager->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
        $factureClient = $this->entityManager->getRepository(UvFacturecab::class)->findOneByCode($idPiece);
        $transactions = $this->entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $idPiece]);

        // dd($factureFournisseur, $factureClient  ,  $transaction ); 
        if(count($chequeImpayes) > 0){
            $transactions = $chequeImpayes;
        }
        if($factureFournisseur) {

            if($factureFournisseur->getOutputValider() == 1){
                return new JsonResponse("cette facture est deja valide", 500);
            }
            // dd($factureFournisseur);
            $factureFournisseur->setFlagRemise(1);
            $factureFournisseur->setDateFlagRemise(new \DateTime("now"));
            $factureFournisseur->setUserRemise($this->getUser()->getId());

            
        } elseif($factureClient) {

            if($factureClient->getOutputValider() == 1){
                return new JsonResponse("cette facture est deja validee", 500);
            }
            $factureClient->setFlagRemise(1);
            $factureClient->setDateFlagRemise(new \DateTime("now"));
            $factureClient->setUserRemise($this->getUser()->getId());


        } elseif(count($transactions) > 0) {

            foreach ($transactions as $key => $transaction) {
                // if($transaction->getModepaiement()->getId()==11 and !$transaction->getMontantRelvel()){
                //     return new JsonResponse('Montant releve non saisi!',500,[],JSON_UNESCAPED_UNICODE);
                // }
                if($transaction->getRegul() == 1) {
                    continue;
                    // return new JsonResponse("id piece est une operation regularisation", 500);
                }
                
                if($transaction->getOutputValider() == 1){
                    continue;
                    // return new JsonResponse("cette transaction est deja valide h:i:sa", 500);
                }  

                $transaction->setFlagRemise(1);
                $transaction->setUserRemise($this->getUser()->getId());
                
                $transaction->setDateFlagRemise(new \DateTime("now"));
                
                $operation = $transaction->getOperation();
                if($operation->getFactureFournisseur() or $operation->getFactureClient()) {
                    if($operation->getFactureFournisseur()) {
                        if($operation->getFactureFournisseur()->getFlagRemise() == null) {
                            $operation->getFactureFournisseur()->setFlagRemise(1);
                            $operation->getFactureFournisseur()->setDateFlagRemise(new \DateTime("now"));
                            $operation->getFactureFournisseur()->setUserRemise($this->getUser()->getId());
                        }
                    } else {
                        if($operation->getFactureClient()->getFlagRemise() == null) {
                            $operation->getFactureClient()->setFlagRemise(1);
                            $operation->getFactureClient()->setDateFlagRemise(new \DateTime("now"));
                            $operation->getFactureClient()->setUserRemise($this->getUser()->getId());
                        }
                    }
                }
                
            }

        } else {
            return new JsonResponse("id piece introuvable!", 500);
        }

    

        $this->getDoctrine()->getManager()->flush();
        // dd('test');

       
        return new JsonResponse('Bien enregistre', 200);
       
    }



    /**
     * @Route("/getecriturecomptable/rejeter/{idPiece}", name="ecriture_comptable_operation_getecriturecomptable_rejeter",   options = { "expose" = true }  , methods={"POST"})
     */

    public function ecriture_comptable_operation_getecriturecomptable_rejeter($idPiece, Request $request): Response 
    {  
        $api = new ApiController();
        // dd($typePiece, $idPiece);
        // dd($request);
        $chequeImpayes = $this->entityManager->getRepository(TrTransaction::class)->findBy(['codeImpaye' => $idPiece]);
        $factureFournisseur = $this->entityManager->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
        $factureClient = $this->entityManager->getRepository(UvFacturecab::class)->findOneByCode($idPiece);
        $transactions = $this->entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $idPiece]);

        if(count($chequeImpayes) > 0){
            $transactions = $chequeImpayes;
        }
        if($factureFournisseur) {

            if($factureFournisseur->getOutputValider() == 1){
                return new JsonResponse("cette facture est deja valide", 500);
            }
            // if($factureFournisseur->getFlagRemise() != 1) {
            //     return new JsonResponse("Piece no remis par DBR", 500); 
            // } 

            
            $factureFournisseur->setFlagRejeter(1);
            $factureFournisseur->setUserRejeter($this->getUser()->getId());
            $factureFournisseur->setObservationRejeter($request->get('observation_rejeter'));
            $factureFournisseur->setDateFlagOutput(new \DateTime("now"));

            $code = $factureFournisseur->getCode();
            
        } elseif($factureClient) {

            if($factureClient->getOutputValider() == 1){
                return new JsonResponse("cette facture est deja validee", 500);
            }

            // if($factureClient->getFlagRemise() != 1) {
            //     return new JsonResponse("Piece no remis par DBR", 500); 
            // } 
           
            $factureClient->setFlagRejeter(1);
            $factureClient->setUserRejeter($this->getUser()->getId());
            $factureClient->setObservationRejeter($request->get('observation_rejeter'));
            $factureClient->setDateFlagOutput(new \DateTime("now"));

            $code = $factureClient->getCode();

            
        } elseif(count($transactions) > 0) {
            foreach ($transactions as $key => $transaction) {
                if($transaction->getOutputValider() == 1){
                    return new JsonResponse("cette transaction est deja valide", 500);
                }   
    
                // if($transaction->getFlagRemise() != 1) {
                //     return new JsonResponse("Piece no remis par DBR", 500); 
                // }

    
                $transaction->setFlagRejeter(1);
                $transaction->setUserRejeter($this->getUser()->getId());
                $transaction->setObservationRejeter($request->get('observation_rejeter'));
                $transaction->setDateFlagOutput(new \DateTime("now"));

                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $childOperation) {
                        foreach ($childOperation->getTransactions() as $key => $tr) {
                            $tr->setFlagRejeter(1);
                            $tr->setUserRejeter($this->getUser()->getId());
                            $tr->setObservationRejeter($request->get('observation_rejeter'));
                            $tr->setDateFlagOutput(new \DateTime("now"));

                            $api->api_output_operation_rejeter($tr->getCodeBq(), $this->client);
                        }
                    }
                }
    
                $code = $idPiece;
            }

        } else {
            return new JsonResponse("id piece introuvable!", 500);
        }

        

        // dd('done');

        $operation = $this->entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $code, 'fczFlag5'=>[0,10]]);
        if(!$operation) {
            return new Response("Operation not found!");
        }
        $operation->setFczFlag5(2);
        $operation->setUpddat0(new \DateTime("now"));

        foreach ( $operation->getEcritureDets() as $key => $gcd) {
            $gcd->setUpddattim0(new \DateTime("now"));
        }

        $this->getDoctrine()->getManager()->flush();

        // $this->getDoctrine()->getManager()->flush();
        $api->api_output_operation_rejeter($code, $this->client);


        
        return new JsonResponse('Bien enregistre', 200);
      
       
    }



    /**
     * @Route("/getecriturecomptable/precomptabiliser/{idPiece}", name="ecriture_comptable_operation_getecriturecomptable_precomptabiliser",   options = { "expose" = true }  , methods={"GET"})
    */

    public function ecriture_comptable_operation_getecriturecomptable_precomptabiliser($idPiece): Response 
    {  
        $api = new ApiController();

        $chequeImpayes = $this->entityManager->getRepository(TrTransaction::class)->findBy(['codeImpaye' => $idPiece]);
        $factureFournisseur = $this->entityManager->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
        $factureClient = $this->entityManager->getRepository(UvFacturecab::class)->findOneByCode($idPiece);
        $transactions = $this->entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $idPiece]);
        $checkIfImpaye = false;
        if(count($chequeImpayes) > 0){
            $checkIfImpaye = true;
            $transactions = $chequeImpayes;
        }

        if($factureFournisseur) {

            if($factureFournisseur->getOutputValider() == 1){
                return new JsonResponse("cette facture est deja valide", 500);
            }
            // if($factureFournisseur->getFlagRemise() != 1) {
            //     return new JsonResponse("Piece no remis par DBR", 500); 
            // }
            
            $code = $factureFournisseur->getCode();
            $factureFournisseur->setDateFlagOutput(new \DateTime("now"));
            $factureFournisseur->setUserPrecomptabiliser($this->getUser()->getId());

        } elseif($factureClient) {

        if($factureClient->getOutputValider() == 1){
            return new JsonResponse("cette facture est deja validee", 500);
        }
        // if($factureClient->getFlagRemise() != 1) {
        //     return new JsonResponse("Piece no remis par DBR", 500); 
        // }
        

        $code = $factureClient->getCode();
        $factureClient->setDateFlagOutput(new \DateTime("now"));
        $factureClient->setUserPrecomptabiliser($this->getUser()->getId());


        } elseif(count($transactions) > 0) {
            foreach ($transactions as $key => $transaction) {
                // if($transaction->getModepaiement()){
                //     if($transaction->getModepaiement()->getId()==11 and !$transaction->getMontantReleve()){
                //         return new JsonResponse('Montant releve non saisi!',500,[],JSON_UNESCAPED_UNICODE);
                //     }
                // }
                if($transaction->getRegul() == 1) {
                    // return new JsonResponse("id piece est une operation regularisation", 500);
                    continue;
                } 
    
                if($transaction->getOutputValider() == 1){
                    return new JsonResponse("cette transaction est deja valide", 500);
                }   
                // if($transaction->getFlagRemise() != 1) {
                //     return new JsonResponse("Piece no remis par DBR", 500); 
                // }
               
                
                $transaction->setDateFlagOutput(new \DateTime("now"));
                $transaction->setUserPrecomptabiliser($this->getUser()->getId());

                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $childOperation) {
                        foreach ($childOperation->getTransactions() as $key => $tr) {
                            if($tr->getCodeBq()!=$idPiece){
                                $tr->setDateFlagOutput(new \DateTime("now"));
                                $tr->setUserPrecomptabiliser($this->getUser()->getId());

                                $api->api_output_operation_precomptabiliser($tr->getCodeBq(), $this->client);

                                $operation =$this->getDoctrine()->getManager()->getRepository(Gaccentry::class)->findOneBy(['num' =>$tr->getCodeBq() , 'fczFlag5'=>[0] ]);

                                if($operation) {
                                    $operation->setFczFlag5(10);
                                    $operation->setUpddat0(new \DateTime("now"));

                                    foreach ( $operation->getEcritureDets() as $key => $gcd) {
                                        $gcd->setUpddattim0(new \DateTime("now"));
               
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }

            $code = $idPiece;



        } else {
            return new JsonResponse("id piece introuvable!", 500);
        }

        $response = $api->api_output_operation_precomptabiliser($code, $this->client);

            $operation =$this->getDoctrine()->getManager()->getRepository(Gaccentry::class)->findOneBy(['num' => $code, 'fczFlag5'=>[0] ]);

            if($operation) {
                $operation->setFczFlag5(10);
                $operation->setUpddat0(new \DateTime("now"));

                foreach ( $operation->getEcritureDets() as $key => $gcd) {
                    $gcd->setUpddattim0(new \DateTime("now"));
                }
            }
            // $this->getDoctrine()->getManager()->flush();
            // return new JsonResponse('Bien enregistre', 200);
 
        
 
        if($response->getContent() == "done") {
            $this->getDoctrine()->getManager()->flush();
            return new JsonResponse('Bien enregistre', 200);
        } else if($response->getContent() == '10'){
            return new JsonResponse("Cette pièce est deja precomptabiliser!",500,[],JSON_UNESCAPED_UNICODE);
        }
        else {
            return new JsonResponse("Pièce introuvable!", 500);
        }

    
    }


    /**
     * @Route("/getecriturecomptable/update/{idPiece}", name="ecriture_comptable_operation_getecriturecomptable_update",   options = { "expose" = true }  , methods={"GET"})
     */

     public function ecriture_comptable_operation_getecriturecomptable_update($idPiece) 
     {  
         // dd($typePiece, $idPiece);
        $api = new ApiController();
        
        $chequeImpaye = $this->entityManager->getRepository(TrTransaction::class)->findOneBy(['codeImpaye' => $idPiece]);
        $factureFournisseur = $this->entityManager->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
        $factureClient = $this->entityManager->getRepository(UvFacturecab::class)->findOneByCode($idPiece);
        $transaction = $this->entityManager->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $idPiece]);
       
        if($chequeImpaye) {
            $data = $api->api_output_cheque_impaye($chequeImpaye->getCodeImpaye(),$this->entityManager, $this->client, $this->connection);
            
        }
        elseif ($factureFournisseur) {
            $data = $api->api_output_faf($factureFournisseur->getId(),$this->connection,$this->entityManager, $this->client);
            
        } elseif($factureClient) {
            $data = $api->api_output_fac($factureClient->getId(), $this->connection,$this->entityManager, $this->client);

        } elseif($transaction) { 
             
            if($transaction->getOperation()->getPPiece()->getId() == 67 and !in_array($transaction->getModePaiement()->getId(), [9, 10, 11, 12])) {
                $data = $api->api_output_rembourssement($transaction->getCodeBq(), $this->entityManager, $this->client, $this->connection);
            }elseif($transaction->getOperation()->getPPiece()->getId() == 28) {
                $data = $api->api_output_placement($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 30) {
                $data = $api->api_output_rachat($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 33) {
                $data = $api->api_output_retrait($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 32) {
                $data = $api->api_output_depot($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 37) {
                $data = $api->api_output_eci($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 39) {
                $data = $api->api_output_reci($transaction->getId(), $this->connection, $this->entityManager, $this->client );
            } elseif($transaction->getOperation()->getPPiece()->getId() == 51) {
                $data = $api->api_output_avance($transaction->getId(), $this->connection, $this->entityManager, $this->client);
            } elseif($transaction->getOperation()->getPPiece()->getId() == 50) {
                $data = $api->api_output_transfer_interne($transaction->getId(), $this->connection,$this->entityManager, $this->client);
            } elseif($transaction->getOperation()->getPPiece()->getId() == 47) {
                $data = $api->api_output_transfer_externe($transaction->getId(), $this->connection,$this->entityManager, $this->client);
            } elseif($transaction->getOperation()->getPPiece()->getId() == 48) {
                $data = $api->api_output_transfer_espece($transaction->getId(), $this->connection, $this->entityManager, $this->client);
            } elseif($transaction->getOperation()->getPPiece()->getId() == 49) {
                $data = $api->api_output_alimentation($transaction->getId(), $this->connection,$this->entityManager,  $this->client);
            } elseif(
                in_array($transaction->getOperation()->getPPiece()->getId(), [38, 44, 45, 46]) or 
                in_array($transaction->getModePaiement()->getId(), [9, 10, 11, 12])
            ) {
                $data = $api->api_output_payement_indirect($transaction->getId(), $this->connection,$this->entityManager, $this->client);
            } else {
                $data = $api->api_output_transaction($transaction->getCodeBq(),$this->entityManager, $this->client, $this->connection);
            }
        } else {
            return "piece introuvable";
        }

        if(json_decode($data->getContent()) == "done" or $data->getContent() == "done") {
            return "done" ;
        }
    }
    
  






}
