<?php

namespace App\Controller\EcritureComptable;

use \App\Service\AppService;
use App\Entity\UvFacturecab;
use App\Entity\TrTransaction;
use App\Entity\UaTFacturefrscab;
use App\Controller\ApiController;
use App\Entity\EcritureCab;
use App\Entity\EcritureDet;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UaTFacturefrscabRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("ecriturecomptable/export" )
 */
class ExportController extends AbstractController {

    
    public function __construct(Connection $connection, HttpClientInterface $client, SessionInterface $session, EntityManagerInterface $entityManager, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
        $this->entityManager = $entityManager;
        $this->connection = $connection;
        $this->client = $client;

    }

    /**
     * @Route("/", name="ecriture_comptable_compta_export_index",   options = { "expose" = true }  , methods={"GET"})
     */

    public function ecriture_comptable_compta_export_index(Connection $connection,Breadcrumbs $breadcrumbs): Response 
    {  
        
        return $this->render('module_ecriturecomptable/export/index.html.twig');
    }
    /**
     * @Route("/export", name="ecriture_comptable_compta_export_export",   options = { "expose" = true }  , methods={"POST"})
     */
    
    public function ecriture_comptable_compta_export_export(Request $request, Connection $connection,Breadcrumbs $breadcrumbs, UaTFacturefrscabRepository $factureRepositroy): Response 
    {  
        ini_set('max_execution_time', '36000');
        // dd($request);
        $em = $this->getDoctrine()->getManager();
        $reader = new Reader();
        $reader->setReadDataOnly(true); 
        $reader->setReadEmptyCells(false);
        $spreadsheet = $reader->load($request->files->get('file'));
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        $api = new ApiController();

        unset($spreadSheetArys[0]);
        // dd($spreadSheetArys);
        $data = [];
        $count = 0;

        // $spreadsheet = new Spreadsheet(); 

        // $cabSheet = $spreadsheet->getActiveSheet(); 
        // $cabSheet->setTitle('cab'); 
        // $cabSheet->setCellValue('A1', 'Code');
        // $cabSheet->setCellValue('B1', 'Abrev');
        // $cabSheet->setCellValue('C1', 'Piece');
        // $cabSheet->setCellValue('D1', 'Source');
        // $cabSheet->setCellValue('E1', 'Observation');
        // $cabSheet->setCellValue('F1', 'Date Doc Asso');
        // $cabSheet->setCellValue('G1', 'Date creation');
        // $cabSheet->setCellValue('H1', 'Montant HT');
        // $cabSheet->setCellValue('I1', 'Reference');
        // $cabSheet->setCellValue('J1', 'Utilisateur');
        // $cabSheet->setCellValue('K1', 'cce');
        // $cabSheet->setCellValue('L1', 'Fournisseur/Client');
        // $cabSheet->setCellValue('M1', 'Tier Reference');
        // $cabCounter = 2;

        // $detSheet = $spreadsheet->createSheet();
        // $detSheet->setTitle('det');
        // $detSheet->setCellValue('A1', 'Code');
        // $detSheet->setCellValue('B1', 'Abrev');
        // $detSheet->setCellValue('C1', 'Piece');
        // $detSheet->setCellValue('D1', 'Freref');
        // $detSheet->setCellValue('E1', 'Designation');
        // $detSheet->setCellValue('F1', 'Libelle EC CP');
        // $detSheet->setCellValue('G1', 'PC');
        // $detSheet->setCellValue('H1', 'Nom');
        // $detSheet->setCellValue('I1', 'Lettrage adonix');
        // $detSheet->setCellValue('J1', 'Montant');
        // $detSheet->setCellValue('K1', 'Sens');
        // $detSheet->setCellValue('L1', 'Ligne');
        // $detCounter = 2;

        $logSheet = null;

        foreach ($spreadSheetArys as $key => $sheet) {
            $idPiece = $sheet[0];
            $factureFournisseur = $em->getRepository(UaTFacturefrscab::class)->findOneByCode($idPiece);
            $factureClient = $em->getRepository(UvFacturecab::class)->findOneByCode($idPiece);
            $transaction = $em->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $idPiece]);
            // dd($transaction, $idPiece);
            if($factureFournisseur) {

                $data = $api->api_output_faf($factureFournisseur->getId(),$this->connection, $this->entityManager, $this->client, false);
            } elseif($factureClient) {
               
                $data = $api->api_output_fac($factureClient->getId(),$this->connection, $this->entityManager, $this->client, false);
    
                
            } elseif($transaction) {
                if($transaction->getRegul() == 1) {
                    return new JsonResponse("id piece est une operation regularisation", 500);
                }
    
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
                    $data = $api->api_output_transfer_espece($transaction->getId(), $this->connection, $this->entityManager, $this->client, false);
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
            } else {
                // if(!$logSheet) {
                //     $logSheet = $spreadsheet->createSheet();
                //     $logSheet->setTitle('errors');
                //     $logCounter = 2;
                //     $logSheet->setCellValue('A1', 'Code');
                //     $logSheet->setCellValue('B1', 'Observation');
                // }
                // $logSheet->setCellValue('A'.$logCounter, $idPiece);
                // $logSheet->setCellValue('B'.$logCounter, "introuvable");
                // $logCounter++;

                continue;
            }
            if(!is_array($data)){
                // if(!$logSheet) {
                //     $logSheet = $spreadsheet->createSheet();
                //     $logSheet->setTitle('errors');
                //     $logCounter = 2;
                //     $logSheet->setCellValue('A1', 'Code');
                //     $logSheet->setCellValue('B1', 'Observation');
                // }
                // $logSheet->setCellValue('A'.$logCounter, $idPiece);
                // $logSheet->setCellValue('B'.$logCounter, $data->getContent());
                // $logCounter++;

                continue;
            }


            if(count($data) > 0) {
                foreach ($data as $key => $operation) {
                    $cab = $em->getRepository(EcritureCab::class)->findOneBy(['piece' => $operation['code']]);
                    if(!$cab) {
                        $cab = new EcritureCab();
                        $cab->setCode($operation['p_piece_code']);
                        $cab->setAbrev($operation['p_piece_abreviation']);
                        $cab->setPiece($operation['code']);
                        if(array_key_exists('source', $operation)) {
                            $cab->setSource($operation['source']);
                        }
                        if(array_key_exists('tiers_ref', $operation)) {
                            $cab->setTier($operation['tiers_ref']);
                        }
                        if(array_key_exists('nom', $operation)) {
                            $cab->setPartenaire($operation['nom']);
                        }
                        $cab->setObservation($operation['observation_operation']);
                        $cab->setDateDocAsso($operation['date_operation']);
                        $cab->setDateCreation($operation['user_date']);
                        $cab->setMontantHt($operation['montantHt']);
                        $cab->setReference($operation['ref_doc_asso']);
                        $cab->setUtilisateur($operation['user_name']);
                        $cab->setCce($operation['cce_0']);

                        $em->persist($cab);

                        $i = 1;
                        foreach ($operation['details'] as $key => $detail) {
                            if($detail['montant'] != 0) {
                                $det = new EcritureDet();
                                $det->setCode($operation['p_piece_code']);
                                $det->setAbrev($operation['p_piece_abreviation']);
                                $det->setPiece($operation['code']);
                                if(array_key_exists('fre_ref', $detail)) {
                                    $det->setFreref($detail['fre_ref']);
                                }
                                if(array_key_exists('observation', $detail)) {
                                    $det->setDesignation($detail['observation']);
                                }
                                if(array_key_exists('nom', $detail)) {
                                    $det->setNom($detail['nom']);
                                }
                                if(array_key_exists('lettrage_adonix', $detail)) {
                                    $det->setLettrageAdonix($detail['lettrage_adonix']);
                                }
                                $det->setLibelleEcCp($detail['cp_fcz']);
                                $det->setPc($detail['planComptable']);
                                $det->setMontant($detail['montant']);
                                $det->setSens($detail['sens']);
                                $det->setLigne($i);

                                $em->persist($det);

                                
                                $i++;
                            }
                        }


                        $em->flush();

                        
                    }
                   
                   
                }
            } else {
               

                continue;
            }
       
            
        }
    

        return new Response('ok');

        
    }
 
    
   
    
    
    
    
    
    


}
