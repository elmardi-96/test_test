<?php

namespace App\Controller\GestionCaisses;

use App\Entity\PPiece;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use \App\Service\AppService;
use App\Entity\UPPartenaire;
use App\Entity\PCompteBanque;
use App\Entity\PCompteBanqueType;
use App\Entity\UGeneralOperation;
use Doctrine\ORM\EntityRepository;
use App\Entity\PCompteBanqueCaisse;
use App\Form\UGeneralOperationType;
use Doctrine\DBAL\Driver\Connection;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use App\Repository\TrTransactionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UGeneralOperationRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("caisse/alimentation" )
 */
class AlimentationCaisseController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;

    }

    /**
     * @Route("/", name="caisse_alimentation_index",   options = { "expose" = true }  , methods={"GET"})
     */

    public function caisse_alimentation_index(Connection $connection,Breadcrumbs $breadcrumbs): Response 
    {  
        $operations = $this->appService->getOperations('_module_gestioncomptecomun', '_gestion_caisse', '_detail', true);
        
        $dc = $this->appService->getDossierCourant();
        $entityManager = $this->getDoctrine()->getManager();
        // $compteDossierCourantPhysique = $entityManager->getRepository(PCompteBanqueCaisse::class)->findOneBy(['dossier' => $dc->getId()]);
        // $compteDossierCourantVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dc->getId(),4);
        $compteDossierCourantPhysique = $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dc->getId(), 'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(2)]);

        // $total_sold__virtuelle = number_format($compteDossierCourantVirtuelle->getMontantFinal(),2,","," ");
        // $total_sold_conso =  number_format($compteDossierCourantPhysique->getMontantFinal(),2,","," ");
        $sold_total =  number_format($compteDossierCourantPhysique->getMontantFinal(),2,","," ");
        return $this->render('module_gestion_caisse/alimentation/index.html.twig',[
            'operations' => $operations,
            // "total_sold__virtuelle" => $total_sold__virtuelle,
            // "compteDossierCourantPhysique" => $compteDossierCourantPhysique,
            "sold_total" => $sold_total

        ]);
    }
    /**
     * 
     *
     * @Route("/caisse_alimentation_index_list",options = { "expose" = true } , name="caisse_alimentation_index_list")
     * 
     */
    public function caisse_alimentation_index_list(Connection $connection) {

        // dd();

        $data = array();

        $dc = $this->appService->getDossierCourant();

        $caisses = self::requete($connection);

        // $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_index', true);

        
        // dd($action);
        $operations = $this->appService->getOperations('_module_gestioncomptecomun', '_gestion_caisse', '_new', true);


        $data = array();
        foreach ($caisses as $key => $DR) {

                $entityManager = $this->getDoctrine()->getManager();
                // if($compteDossierCourantPhysique) {

                    $action =  $this->renderView('module_gestion_caisse/alimentation/actions.html.twig',[ 'operations' => $operations , 'id' => $DR['id_dossier'], 'cmpt_id' => $DR['cmpt_id']]);
                    // if(!$compteDossierCourantPhysique){
                    //     dd($DR['id_dossier']);
                    // }
                    $nestedData =  array();
                    $nestedData[] = '';
                    $nestedData[] = $DR['description'];
                    $nestedData[] = $DR['designation'];
                    $nestedData[] = $DR['montant_final'];
                    $nestedData[] = $action;
    
    
                    $nestedData[] =  $action;
                    $nestedData["DT_RowId"] = $DR['id_dossier'];
                    $data[] = $nestedData;   
                // }
                
            

            
        }

        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }


    public function requete (Connection $connection){

        
                $Depot_Retrait = $connection->fetchAll("select DISTINCT p_dossier.id as id_dossier,p_compte_banque_caisse.id as cmpt_id, p_compte_banque_caisse.designation, p_compte_banque_caisse.montant_final,  p_dossier.abreviation ,p_dossier.description
                from  p_dossier
                inner join p_compte_banque_caisse on p_compte_banque_caisse.dossier_id = p_dossier.id
                ORDER BY `id_dossier` ASC"  );


        return   $Depot_Retrait ;
    }

    /**
     * @Route("/new/{dossier}", name="caisse_alimentation_new", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function new(PDossier $dossier, Connection $connection,Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, TrTransactionRepository $TrTransactionRepository ,UGeneralOperationRepository $operationRepository): Response {


        // $operations = $this->appService->getOperations('_module_gestioncomptecomun', '_gestion_caisse', '_new', true);
        $dc = $this->appService->getDossierCourant();
        $entityManager = $this->getDoctrine()->getManager();
        $compte = $entityManager->getRepository(PCompteBanqueCaisse::class)->findOneBy(['dossier' => $dossier]);
        $compteDossierCourantPhysique = $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dc->getId(), 'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(2)]);
        $compteDossierCourantVirtuelle = $compteDossierCourantPhysique->getComptes()[0];
        
        $html =  $this->render('module_gestion_caisse/alimentation/modal_new.html.twig', [
                'dossier' => $dossier,
                'compte' => $compte,
                'compteDossierCourantPhysique' => $compteDossierCourantPhysique,
                'compteDossierCourantVirtuelle' => $compteDossierCourantVirtuelle,
        ])->getContent();
        return new JsonResponse($html);
    }
    /**
     * @Route("/transfer/{dossier}", name="caisse_alimentation_transfer", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function transfer(PDossier $dossier, Connection $connection,Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, TrTransactionRepository $TrTransactionRepository ,UGeneralOperationRepository $operationRepository): Response {

        // dd($dossier);
        $entityManager = $this->getDoctrine()->getManager();
        $comptes = $entityManager->getRepository(PCompteBanqueCaisse::class)->findBy(['active' => true]);
       
        $html =  $this->render('module_gestion_caisse/alimentation/modal_transfer.html.twig', [
                'comptes' => $comptes,
                'dossier' => $dossier
        ])->getContent();
        return new JsonResponse($html);
    }
    
    /**
     * @Route("/store", name="caisse_alimentation_store", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function store(Request $request): Response {

        // dd($request);
        $entityManager = $this->getDoctrine()->getManager();
        $site = $request->get('site');
        $dossier = $entityManager->getRepository(PDossier::class)->find($site);
        $dc = $this->appService->getDossierCourant();
        $dossierCourant = $entityManager->getRepository(PDossier::class)->find($dc->getId());
        $montant = $request->get('montant');
        if($montant == "") {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez remplir le montant.']]);
        }
        $compteBydossierCaisse = $entityManager->getRepository(PCompteBanqueCaisse::class)->findOneBy(['dossier' => $dossier]);
        $compteBydossierVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossier->getId(), 'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(4)]);
        $compteDossierCourantPhysique = $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dc->getId(), 'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(2)]);
        $compteDossierCourantVirtuelle = $compteDossierCourantPhysique->getComptes()[0];
        $operationToPhysique = new UGeneralOperation();
        // $operationToPhysique->setClient($dossier->getPartenaire());
        $operationToPhysique->setFournisseur($dossier->getPartenaire());
        $operationToPhysique->setDossier($dossierCourant);
        $operationToPhysique->setActive(true);
        $operationToPhysique->setCreated(new \DateTime);
        $operationToPhysique->setSens(-1);
        $operationToPhysique->setDesignation($request->get('observation'));
        $operationToPhysique->setAutreInformation($request->get('observation'));
        $operationToPhysique->setCompte($compteDossierCourantPhysique);
        $operationToPhysique->setPCompte($compteDossierCourantPhysique);
        // $operationToPhysique->setCompteDestinataireCaisse($compteBydossierCaisse);
        $operationToPhysique->setMontant($montant);
        $operationToPhysique->setMontantFinal($operationToPhysique->getSens() * $operationToPhysique->getMontant());           

        // $operationToPhysique->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'AC']) // mouvement caisse
        // );
        $operationToPhysique->setPPiece(
            $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'ALMN']) // mouvement caisse
        );
        $operationToPhysique->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($dossierCourant, "I", "OPRD")
        );
        $operationToPhysique->setUserCreated($this->getUser());
        $entityManager->persist($operationToPhysique);

        $operationToPhysiqueDestinataire = new UGeneralOperation();
        $operationToPhysiqueDestinataire->setClient($dossierCourant->getPartenaire());
        // $operationToPhysiqueDestinataire->setFournisseur($dossierCourant->getPartenaire());
        $operationToPhysiqueDestinataire->setDossier($dossier);
        $operationToPhysiqueDestinataire->setActive(true);
        $operationToPhysiqueDestinataire->setDesignation($request->get('observation'));
        $operationToPhysiqueDestinataire->setAutreInformation($request->get('observation'));
        $operationToPhysiqueDestinataire->setCreated(new \DateTime);
        // $operationToPhysiqueDestinataire->setCompte($compteDossierCourantPhysique);
        $operationToPhysiqueDestinataire->setSens(1);

        $operationToPhysiqueDestinataire->setCompteDestinataireCaisse($compteBydossierCaisse);
        $operationToPhysiqueDestinataire->setPCompteCaisse($operationToPhysiqueDestinataire->getCompteDestinataireCaisse());

        $operationToPhysiqueDestinataire->setMontant($montant);
        $operationToPhysiqueDestinataire->setMontantFinal($operationToPhysiqueDestinataire->getSens() * $operationToPhysiqueDestinataire->getMontant());           

        $operationToPhysiqueDestinataire->setRegul(true);
        // $operationToPhysiqueDestinataire->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'AC']) // mouvement caisse
        // );
        $operationToPhysiqueDestinataire->setPPiece(
            $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'ALMN']) // mouvement caisse
        );
        $operationToPhysiqueDestinataire->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($dossier, "I","OPRE")
        );
        $operationToPhysiqueDestinataire->setUserCreated($this->getUser());
        $entityManager->persist($operationToPhysiqueDestinataire);

        $entityManager->flush();

        $operationToVirtuelle = new UGeneralOperation();
        $operationToVirtuelle->setClient($dossier->getPartenaire());
        $operationToVirtuelle->setFournisseur($dossierCourant->getPartenaire());
        $operationToVirtuelle->setDossier($dossier);
        $operationToVirtuelle->setActive(true);
        $operationToVirtuelle->setSens(-1);

        $operationToVirtuelle->setCreated(new \DateTime);
        $operationToVirtuelle->setCompte($compteBydossierVirtuelle);
        $operationToVirtuelle->setPCompte($compteBydossierVirtuelle);
        $operationToVirtuelle->setDesignation($request->get('observation'));
        $operationToVirtuelle->setAutreInformation($request->get('observation'));

        // $operationToVirtuelle->setCompteDestinataire($compteDossierCourantVirtuelle);
        $operationToVirtuelle->setMontant($montant);
        $operationToVirtuelle->setMontantFinal($operationToVirtuelle->getSens() * $operationToVirtuelle->getMontant());           

        // $operationToVirtuelle->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->find(52) // 
        // );
        $operationToVirtuelle->setPPiece(
            $entityManager->getRepository(PPiece::class)->find(52) // 
        );
        $operationToVirtuelle->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($dossier, "I", "OPRD")
        );
        $operationToVirtuelle->setUserCreated($this->getUser());
        $operationToVirtuelle->setRegul(true);

        $entityManager->persist($operationToVirtuelle);

        $operationToVirtuelleRegul = new UGeneralOperation();
        $operationToVirtuelleRegul->setClient($dossier->getPartenaire());
        $operationToVirtuelleRegul->setFournisseur($dossierCourant->getPartenaire());
        $operationToVirtuelleRegul->setDossier($dossierCourant);
        $operationToVirtuelleRegul->setActive(true);
        $operationToVirtuelleRegul->setSens(1);
        $operationToVirtuelleRegul->setCreated(new \DateTime);
        // $operationToVirtuelleRegul->setCompte($compteBydossierVirtuelle);
        $operationToVirtuelleRegul->setCompteDestinataire($compteDossierCourantVirtuelle);
        $operationToVirtuelleRegul->setPCompte($compteDossierCourantVirtuelle);
        $operationToVirtuelleRegul->setDesignation($request->get('observation'));
        $operationToVirtuelleRegul->setAutreInformation($request->get('observation'));

        $operationToVirtuelleRegul->setMontant($montant);
        $operationToVirtuelleRegul->setMontantFinal($operationToVirtuelleRegul->getSens() * $operationToVirtuelleRegul->getMontant());           

        $operationToVirtuelleRegul->setRegul(true);

        // $operationToVirtuelleRegul->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->find(52) // 
        // );
        $operationToVirtuelleRegul->setPPiece(
            $entityManager->getRepository(PPiece::class)->find(52) // 
        );
        $operationToVirtuelleRegul->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($dossierCourant, "I", "OPRE")
        );
        $operationToVirtuelleRegul->setUserCreated($this->getUser());
        $entityManager->persist($operationToVirtuelleRegul);

        
        $operationToVirtuelle->setParent($operationToPhysique);
        $operationToVirtuelleRegul->setParent($operationToPhysique);
        $operationToPhysiqueDestinataire->setParent($operationToPhysique);
        $entityManager->flush();


        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);

    }
    /**
     * @Route("/store_transfer", name="caisse_alimentation_store_transfer", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function store_transfer(Request $request): Response {

        // dd($request);
        $entityManager = $this->getDoctrine()->getManager();
        $site = $request->get('site');
        // dd($request);
        $siteSelectionne = $request->get('siteselectione');
        $dossier = $entityManager->getRepository(PDossier::class)->find($site);
        $siteSelectionne = $entityManager->getRepository(PDossier::class)->find($siteSelectionne);
        $montant = $request->get('montant');
        $observation = $request->get('observation');
        if($montant == "") {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez remplir le montant.']]);
        }
        $compteBydossierEspece = $entityManager->getRepository(PCompteBanqueCaisse::class)->findOneBy(['dossier' => $site]);
        if ($site == 231) {
            $compteBydossierVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneBy(['parent'=> 488 ]);
        }else{
            $compteBydossierVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $site, 'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(4)]);
        }
        $compteDossierCourantEspece = $entityManager->getRepository(PCompteBanqueCaisse::class)->findOneBy(['dossier' => $siteSelectionne]);

       
        if ($siteSelectionne->getId() == 231) {
            $compteDossierCourantVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneBy(['parent'=> 488 ]);
        }else{
            $compteDossierCourantVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $siteSelectionne, 'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(4)]);
        }
        $operationToPhysique = new UGeneralOperation();
        // $operationToPhysique->setClient($siteSelectionne->getPartenaire());
        $operationToPhysique->setFournisseur($dossier->getPartenaire());
        $operationToPhysique->setDossier($siteSelectionne);
        $operationToPhysique->setActive(true);
        $operationToPhysique->setCreated(new \DateTime);
        $operationToPhysique->setCompteCaisse($compteDossierCourantEspece);
        $operationToPhysique->setPCompteCaisse($compteDossierCourantEspece);
        $operationToPhysique->setSens(-1);

        // $operationToPhysique->setCompteDestinataireCaisse($compteBydossierEspece);
        $operationToPhysique->setAutreInformation($observation);
        $operationToPhysique->setMontant($montant);
        $operationToPhysique->setMontantFinal($operationToPhysique->getSens() * $operationToPhysique->getMontant());           


        // $operationToPhysique->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'TRE']) // transfer
        // );
        $operationToPhysique->setPPiece(
            $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'TRSE']) // transfer
        );
        $operationToPhysique->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($siteSelectionne, "I", "OPRD")
        );
        $operationToPhysique->setUserCreated($this->getUser());
        $entityManager->persist($operationToPhysique);

        $operationToPhysiqueRegul = new UGeneralOperation();
        $operationToPhysiqueRegul->setClient($siteSelectionne->getPartenaire());
        $operationToPhysiqueRegul->setRegul(true);
        $operationToPhysiqueRegul->setSens(1);
        $operationToPhysiqueRegul->setDossier($dossier);
        $operationToPhysiqueRegul->setActive(true);
        $operationToPhysiqueRegul->setCreated(new \DateTime);
        // $operationToPhysique->setCompteCaisse($compteDossierCourantEspece);
        $operationToPhysiqueRegul->setCompteDestinataireCaisse($compteBydossierEspece);
        $operationToPhysiqueRegul->setPCompteCaisse($compteBydossierEspece);
        $operationToPhysiqueRegul->setAutreInformation($observation);
        $operationToPhysiqueRegul->setMontant($montant);
        $operationToPhysiqueRegul->setMontantFinal($operationToPhysiqueRegul->getSens() * $operationToPhysiqueRegul->getMontant());           


        // $operationToPhysiqueRegul->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'TRE']) // transfer
        // );
        $operationToPhysiqueRegul->setPPiece(
            $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'TRSE']) // transfer
        );
        $operationToPhysiqueRegul->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($dossier, "I", "OPRE")
        );
        $operationToPhysiqueRegul->setUserCreated($this->getUser());
        $entityManager->persist($operationToPhysiqueRegul);
        $entityManager->flush();

        $operationToVirtuelle = new UGeneralOperation();
        // $operationToVirtuelle->setClient($dossier->getPartenaire());
        $operationToVirtuelle->setFournisseur($siteSelectionne->getPartenaire());
        $operationToVirtuelle->setDossier($dossier);
        $operationToVirtuelle->setActive(true);
        $operationToVirtuelle->setSens(-1);

        $operationToVirtuelle->setCreated(new \DateTime);
        $operationToVirtuelle->setCompte($compteBydossierVirtuelle);
        $operationToVirtuelle->setPCompte($compteBydossierVirtuelle);
        // $operationToVirtuelle->setCompteDestinataire($compteDossierCourantVirtuelle);
        $operationToVirtuelle->setAutreInformation($observation);
        $operationToVirtuelle->setMontant($montant);
        $operationToVirtuelle->setMontantFinal($operationToVirtuelle->getSens() * $operationToVirtuelle->getMontant());           

        // $operationToVirtuelle->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->find(52) // 
        // );
        $operationToVirtuelle->setPPiece(
            $entityManager->getRepository(PPiece::class)->find(52) // 
        );
        $operationToVirtuelle->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($dossier, "I", "OPRD")
        );
        $operationToVirtuelle->setUserCreated($this->getUser());
        $operationToVirtuelle->setRegul(true);
        $entityManager->persist($operationToVirtuelle);

        $operationToVirtuelleRegul = new UGeneralOperation();
        $operationToVirtuelleRegul->setClient($dossier->getPartenaire());
        // $operationToVirtuelleRegul->setFournisseur($siteSelectionne->getPartenaire());
        $operationToVirtuelleRegul->setDossier($siteSelectionne);
        $operationToVirtuelleRegul->setActive(true);
        $operationToVirtuelleRegul->setCreated(new \DateTime);
        // $operationToVirtuelleRegul->setCompte($compteBydossierVirtuelle);
        $operationToVirtuelleRegul->setSens(1);

        $operationToVirtuelleRegul->setCompteDestinataire($compteDossierCourantVirtuelle);
        $operationToVirtuelleRegul->setPCompte($compteDossierCourantVirtuelle);
        $operationToVirtuelleRegul->setAutreInformation($observation);
        $operationToVirtuelleRegul->setMontant($montant);
        $operationToVirtuelleRegul->setMontantFinal($operationToVirtuelleRegul->getSens() * $operationToVirtuelleRegul->getMontant());           

        // $operationToVirtuelleRegul->setPiece(
        //     $entityManager->getRepository(UpPiece::class)->find(52) // 
        // );
        $operationToVirtuelleRegul->setPPiece(
            $entityManager->getRepository(PPiece::class)->find(52) // 
        );
        $operationToVirtuelleRegul->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($siteSelectionne, "I", "OPRE")
        );
        $operationToVirtuelleRegul->setUserCreated($this->getUser());
        $operationToVirtuelleRegul->setRegul(true);
        $entityManager->persist($operationToVirtuelleRegul);

        $operationToVirtuelle->setParent($operationToPhysique);
        $operationToVirtuelleRegul->setParent($operationToPhysique);
        $operationToPhysiqueRegul->setParent($operationToPhysique);
        $entityManager->flush();


        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);

    }
    /**
     * @Route("/export/{compte}", name="caisse_alimentation_export", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function caisse_alimentation_export($compte, Connection $connection): Response {

        // dd($request);
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'code');
        $sheet->setCellValue('B1', 'dossier');
        $sheet->setCellValue('C1', 'compte id');
        $sheet->setCellValue('D1', 'compte');
        // $sheet->setCellValue('E1', 'rib');
        $sheet->setCellValue('E1', 'Montant');
        $Retrait = $connection->fetchAll("SELECT p_dossier.id,tr_transaction.code_bq, p_dossier.description, u_general_destinataire.piece_id , p_compte_banque_caisse.designation as cmpt_bnq, p_compte_banque_caisse.id as cmpt_id, u_general_destinataire.montant
        FROM `p_dossier`
        inner join p_compte_banque_caisse on p_compte_banque_caisse.dossier_id = p_dossier.id
        left join u_general_operation as u_general_destinataire on  p_compte_banque_caisse.id = u_general_destinataire.compte_destinataire_caisse_id
        left join tr_transaction on  tr_transaction.operation_id = u_general_destinataire.id
        where u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_compte_banque_caisse.id =".$compte);
       
        $Depot = $connection->fetchAll("SELECT p_dossier.id,tr_transaction.code_bq,u_general_destinataire.piece_id ,p_dossier.description, p_compte_banque_caisse.designation as cmpt_bnq, p_compte_banque_caisse.id as cmpt_id, u_general_destinataire.montant
        FROM `p_dossier`
        inner join p_compte_banque_caisse on p_compte_banque_caisse.dossier_id = p_dossier.id
        left join u_general_operation as u_general_destinataire on  p_compte_banque_caisse.id = u_general_destinataire.compte_caisse_id
        left join tr_transaction on  tr_transaction.operation_id = u_general_destinataire.id
        where u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_compte_banque_caisse.id =".$compte);
       
        $i = 2;
        // dd($dossiers);
        foreach($Retrait as $dossier) {
            $sheet->setCellValue('A'.$i, $dossier['code_bq']);
            $sheet->setCellValue('B'.$i, $dossier['description']);
            $sheet->setCellValue('C'.$i, $dossier['cmpt_id']);
            $sheet->setCellValue('D'.$i, $dossier['cmpt_bnq']);
            // $sheet->setCellValue(''.$i, $dossier['rib']);
            $sheet->setCellValue('E'.$i, $dossier['montant']);

            $i++;
        }
        foreach($Depot as $dossier) {
            $sheet->setCellValue('A'.$i, $dossier['code_bq']);
            $sheet->setCellValue('B'.$i, $dossier['description']);
            $sheet->setCellValue('C'.$i, $dossier['cmpt_id']);
            $sheet->setCellValue('D'.$i, $dossier['cmpt_bnq']);
            // $sheet->setCellValue('E'.$i, $dossier['rib']);
            $sheet->setCellValue('E'.$i,"-".$dossier['montant']);

            $i++;
        }
        
        $writer = new Xlsx($spreadsheet);
        $fileName = 'comptes.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
      
    }








}
