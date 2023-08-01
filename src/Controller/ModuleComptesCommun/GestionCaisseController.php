<?php

namespace App\Controller\ModuleComptesCommun;

use App\Entity\UpPiece;
use App\Entity\PDossier;
use \App\Service\AppService;
use App\Entity\UPPartenaire;
use App\Entity\PCompteBanque;
use App\Entity\UGeneralOperation;
use Doctrine\ORM\EntityRepository;
use App\Form\UGeneralOperationType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\TrTransactionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UGeneralOperationRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("compte/caisse" )
 */
class GestionCaisseController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;

    }

    /**
     * @Route("/", name="compte_caisse_index",   options = { "expose" = true }  , methods={"GET"})
     */

    public function compte_caisse_index(Connection $connection,Breadcrumbs $breadcrumbs): Response 
    {  
        $operations = $this->appService->getOperations('_module_gestioncomptecomun', '_gestion_caisse', '_detail', true);
        
        $dc = $this->appService->getDossierCourant();
        $entityManager = $this->getDoctrine()->getManager();
        $compteDossierCourantPhysique = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dc->getId(),2);
        $compteDossierCourantVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dc->getId(),4);

        $total_sold__virtuelle = number_format($compteDossierCourantVirtuelle->getMontantFinal(),2,","," ");
        $total_sold_conso =  number_format($compteDossierCourantPhysique->getMontantFinal(),2,","," ");
        $sold_total =  number_format($compteDossierCourantVirtuelle->getMontantFinal() + $compteDossierCourantPhysique->getMontantFinal(),2,","," ");
        return $this->render('module_gestion_comptes/gestion_caisse/index.html.twig',[
            'operations' => $operations,
            "total_sold__virtuelle" => $total_sold__virtuelle,
            "total_sold_conso" => $total_sold_conso,
            "sold_total" => $sold_total

        ]);
    }
    /**
     * 
     *
     * @Route("/list_index",options = { "expose" = true } , name="compte_caisse_list")
     * 
     */
    public function compte_caisse_list(Connection $connection) {

        // dd();

        $data = array();

        $dc = $this->appService->getDossierCourant();

        $Depot_Retrait = self::requete($connection);

        // $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_index', true);

        
        // dd($action);
        $operations = $this->appService->getOperations('_module_gestioncomptecomun', '_gestion_caisse', '_new', true);


        $data = array();
        foreach ($Depot_Retrait as $key => $DR) {

                $entityManager = $this->getDoctrine()->getManager();
                $compteDossierCourantPhysique = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($DR['id_dossier'],2);
                $compteDossierCourantVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($DR['id_dossier'],4);
                if($compteDossierCourantPhysique) {

                    $action =  $this->renderView('module_gestion_comptes/gestion_caisse/actions.html.twig',[ 'operations' => $operations , 'id' => $DR['id_dossier']]);
                    // if(!$compteDossierCourantPhysique){
                    //     dd($DR['id_dossier']);
                    // }
                    $nestedData =  array();
                    $nestedData[] = '';
                    $nestedData[] = $DR['description'];
                    $nestedData[] = $compteDossierCourantPhysique ? $compteDossierCourantPhysique->getDesignation() : "";
                    $nestedData[] = $compteDossierCourantPhysique ? $compteDossierCourantPhysique->getMontantFinal() : "";
                    $nestedData[] = $action;
    
    
                    $nestedData[] =  $action;
                    $nestedData["DT_RowId"] = $DR['id_dossier'];
                    $data[] = $nestedData;   
                }
                
            

            
        }

        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }


    public function requete (Connection $connection){

        
                $Depot_Retrait = $connection->fetchAll("select DISTINCT p_dossier.id as id_dossier,  p_dossier.abreviation ,p_dossier.description
                from  p_dossier
                inner join pcompte_banque_pdossier cd on cd.pdossier_id=p_dossier.id
                inner join p_compte_banque on cd.pcompte_banque_id = p_compte_banque.id
                ORDER BY `id_dossier` ASC"  );


        return   $Depot_Retrait ;
    }

    /**
     * @Route("/new/{dossier}", name="compte_caisse_new", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function new(PDossier $dossier, Connection $connection,Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, TrTransactionRepository $TrTransactionRepository ,UGeneralOperationRepository $operationRepository): Response {


        // $operations = $this->appService->getOperations('_module_gestioncomptecomun', '_gestion_caisse', '_new', true);

        $dc = $this->appService->getDossierCourant();
        $entityManager = $this->getDoctrine()->getManager();
        $compteBydossier = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossier->getId(),2);
        $compteDossierCourantPhysique = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dc->getId(),2);
        $compteDossierCourantVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dc->getId(),4);
        // $data = [
        //     'compte' => [
        //         'montantFinal' => $compteBydossier->getMontantFinal(),
        //         'id' => $compteBydossier->getId(),
        //         'designation' => $compteBydossier->getDesignation(),
        //     ],
        //     'dossier' => [
        //         'id' => $compteBydossier->getId(),
        //         'description' => $dossier->getDescription(),
        //     ],
        //     'compteDossierCourantVirtuelle' => [
        //         'montantFinal' => $compteDossierCourantVirtuelle->getMontantFinal(),
        //     ],
        //     'compteDossierCourantPhysique' => [
        //         'montantFinal' => $compteDossierCourantPhysique->getMontantFinal(),
        //         'id' => $compteDossierCourantPhysique->getId(),
        //         'designation' => $compteDossierCourantPhysique->getDesignation(),
        //     ],
        //     'montant_caisse_total' => $compteDossierCourantVirtuelle->getMontantFinal() + $compteDossierCourantPhysique->getMontantFinal()
        // ];
        $html =  $this->render('module_gestion_comptes/gestion_caisse/modal_new.html.twig', [
                'dossier' => $dossier,
                'compte' => $compteBydossier,
                'compteDossierCourantPhysique' => $compteDossierCourantPhysique,
                'compteDossierCourantVirtuelle' => $compteDossierCourantVirtuelle
        ])->getContent();
        return new JsonResponse($html);
    }
    
    /**
     * @Route("/store", name="compte_caisse_store", options = { "expose" = true } , methods={"GET","POST"})
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
        $compteBydossierCaisse = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossier->getId(),2);
        $compteBydossierVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dossier->getId(),4);
        $compteDossierCourantPhysique = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dc->getId(),2);
        $compteDossierCourantVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($dc->getId(),4);
        $operationToPhysique = new UGeneralOperation();
        $operationToPhysique->setClient($dossierCourant->getPartenaire());
        $operationToPhysique->setFournisseur($dossier->getPartenaire());
        $operationToPhysique->setDossier($dossierCourant);
        $operationToPhysique->setActive(true);
        $operationToPhysique->setCreated(new \DateTime);
        $operationToPhysique->setCompte($compteDossierCourantPhysique);
        $operationToPhysique->setCompteDestinataire($compteBydossierCaisse);
        $operationToPhysique->setMontant($montant);
        $operationToPhysique->setPiece(
            $entityManager->getRepository(UpPiece::class)->find(38) // mouvement caisse
        );
        $operationToPhysique->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCode("I")
        );
        $operationToPhysique->setUserCreated($this->getUser());
        $entityManager->persist($operationToPhysique);
        $entityManager->flush();


        $operationToVirtuelle = new UGeneralOperation();
        $operationToVirtuelle->setClient($dossier->getPartenaire());
        $operationToVirtuelle->setFournisseur($dossierCourant->getPartenaire());
        $operationToVirtuelle->setDossier($dossier);
        $operationToVirtuelle->setActive(true);
        $operationToVirtuelle->setCreated(new \DateTime);
        $operationToVirtuelle->setCompte($compteBydossierVirtuelle);
        $operationToVirtuelle->setCompteDestinataire($compteDossierCourantVirtuelle);
        $operationToVirtuelle->setMontant($montant);
        $operationToVirtuelle->setPiece(
            $entityManager->getRepository(UpPiece::class)->find(38) // mouvement caisse
        );
        $operationToVirtuelle->setCode(
            $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($dossier, "I")
        );
        $operationToVirtuelle->setUserCreated($this->getUser());


        $entityManager->persist($operationToVirtuelle);

        $entityManager->flush();
        $operationToVirtuelle->setParent($operationToPhysique);
        $operationToPhysique->setParent($operationToVirtuelle);
        $entityManager->flush();


        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);

    }








}
