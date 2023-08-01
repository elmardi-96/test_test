<?php

namespace App\Controller\ModuleTresorerie;

use App\Controller\ApiController;
use App\Entity\PPiece;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use \App\Service\AppService;
use App\Entity\UPPartenaire;
use App\Entity\PCompteBanque;
use App\Entity\TrTransaction;
use App\Form\TrTransactionType;
use App\Entity\PTransactionType;
use App\Entity\PCompteBanqueType;
use App\Entity\UaTFacturefrscab;
use App\Entity\UGeneralOperation;
use App\Entity\UPDevise;
use Doctrine\ORM\EntityRepository;
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
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Doctrine\ORM\EntityManagerInterface;


/**
 * @Route("GainPerte/charge")
 */
class GainPerteController extends AbstractController {

    public function __construct(Connection $connection, HttpClientInterface $client, SessionInterface $session, EntityManagerInterface $entityManager, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
        $this->entityManager = $entityManager;
        $this->connection = $connection;
        $this->client = $client;

    }

    /**
     * @Route("/", name="gain_perte_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(): Response {


        $em = $this->getDoctrine()->getManager();
        
        // $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_index', true);
   
        
        // $operations = $this->appService->getOperations('_module_tresorerie', '_eci', '_index', true);
        // $operations = null;
        return $this->render('tresorerie/gain_perte/index.html.twig', [
           
        ]);
    }

    /**
     * @Route("/devise/{code_o_paiment}", name="gain_perte_devise", options={"expose"=true}, methods={"GET"})
     */
    public function get_devise($code_o_paiment) {


        $em = $this->getDoctrine()->getManager();
        
        $transaction = $em->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_o_paiment, 'active' => 1 ]);
   
        if(!$transaction){
            return new JsonResponse("ce code <b>' ".$code_o_paiment." '</b> n'existe pas",500,[],JSON_UNESCAPED_UNICODE);
        }else{
            if($transaction->getModepaiement()->getId()!=11){
                return new JsonResponse("ce ordre de paiment c'est pas devise",500,[],JSON_UNESCAPED_UNICODE);
            }
            else if($transaction->getMontantReleve()){
                return new JsonResponse("déja généré. ",500,[],JSON_UNESCAPED_UNICODE);
            }
            else{
                $html = $this->renderView('tresorerie/gain_perte/action.html.twig', [
                    "transaction" => $transaction
                 ]);
                 $data =array('id'=>$transaction->getId(), 'montant'=>$transaction->getMontantMad());
         
                 return new JsonResponse(['html' => $html, 'data'=>$data]);
            }
            
        }
      
        
    }

    /**
     * @Route("/enregistrer", name="enregistrer_gain_perte_devise", options={"expose"=true})
     */
    public function enregistrer_devise(Request $request) {

        $api = new ApiController();
        $idTransaction = $request->request->get('id_transaction');
        $mtReleve = $request->request->get('mt_relve');
        $em = $this->getDoctrine()->getManager();
        $data=[];
        $transaction = $em->getRepository(TrTransaction::class)->find($idTransaction);
        $devise = $em->getRepository(UPDevise::class)->find(1);
        $sens = $transaction->getSens();
        $transaction->setMontantReleve($mtReleve * $sens);

        array_push($data, ['code' => $transaction->getCodeBq()]);
        $montant= $transaction->getMontantMad() - $mtReleve;
        $transaction->setEcart($montant);

        $factureFournisseur= $transaction->getOperation()->getFactureFournisseur();
        $factureFournisseur->setMontantReleve($mtReleve);
        $factureFournisseur->setEcart($montant);
        $factureFournisseur->setCodeFafGpc($factureFournisseur->getCode()."-GPC");
        $transaction->setCodeFafGpc($factureFournisseur->getCode()."-GPC");

        // $factureFrsCab = new UaTFacturefrscab();
        // $now = date_create('now');
        // $factureFrsCab->setDatedocasso($now);
        // $factureFrsCab->setObservation($factureFournisseur->getObservation());
        // $factureFrsCab->setDatefacture($now);
        // $factureFrsCab->setUserCreated($this->getUser());
        // $factureFrsCab->setPStatutgrv($factureFournisseur->getPStatutgrv());
        // $factureFrsCab->setPositionActuel('generer');
        // $factureFrsCab->setDossier($factureFournisseur->getDossier());
        // $factureFrsCab->setActive(true);
    
        // $factureFrsCab->setPPiece($factureFournisseur->getPPiece());
        // $factureFrsCab->setFournisseur($factureFournisseur->getFournisseur());
        // // $type = $this->getDoctrine()->getRepository(UFactureType::class)->find(1);
        // // $factureFrsCab->setFactureType($type);
        // $factureFrsCab->setDevise($devise);
        // $factureFrsCab->setRefdocasso($factureFournisseur->getId());
        // // $factureFrsCab->setRemise($UvFacturecab->getRemise());
        // $factureFrsCab->setMontant($montant*(-1));
        // if($montant>0){
        //     $factureFrsCab->setAvoir(1);  
        // }

        // $factureFrsCab->setUserCreated($this->getUser());
        // $em->persist($factureFrsCab); 
        
        $Operations = $transaction->getOperation()->getOperations();

        if($Operations){
            foreach ($Operations as $Operation) {
                foreach ($Operation->getTransactions() as $trans) {
                    array_push($data, ['code' => $trans->getCodeBq()]);

                    $trans->setMontant($mtReleve);
                    
                    if($trans->getMontantFinal()==0){
                        $trans->setMontantReleve(0);
                        
                    }else{
                        $trans->setMontantReleve($mtReleve * $trans->getSens());
                        $trans->setMontantFinal($mtReleve * $trans->getSens());
                    } 

                }
                $Operation->setMontant($mtReleve);
                if($Operation->getMontantFinal()!=0){
                    $Operation->setMontantFinal($mtReleve * $Operation->getSens());
                }
                
            }
        }   
        
        // $response = $api->api_gain_perte($data,$this->connection, $this->entityManager, $this->client);
        $response= $api->api_output_gainPerte($transaction->getId(), $mtReleve, $this->connection,$this->entityManager, $this->client);
       
        if($response->getContent()== "done"){
            $em->flush();
            return new JsonResponse('ok');
        }
        return new JsonResponse("error on OutPut",500,[],JSON_UNESCAPED_UNICODE);
        
      
        
    }





}
