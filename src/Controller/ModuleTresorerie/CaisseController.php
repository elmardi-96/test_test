<?php

namespace App\Controller\ModuleTresorerie;

use App\Entity\UpPiece;
use App\Entity\PDossier;
use \App\Service\AppService;
use App\Entity\UPPartenaire;
use App\Entity\PCompteBanque;
use App\Entity\TrTransaction;
use App\Form\TrTransactionType;
use App\Entity\PTransactionType;
use App\Entity\UGeneralOperation;
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
use Symfony\Component\HttpFoundation\ResponseHeaderBag;


use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



/**
 * @Route("Banque/caisse" )
 */
class CaisseController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;

    }

    /**
     * @Route("/dc", name="dc",   options = { "expose" = true }  , methods={"GET","POST"})
     */

    public function dc(Request $request) {


        
        $PCompteBanque = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneByDossier(1);

        foreach ($PCompteBanque->getDossierC() as $key => $C ){
            echo $C->getId() . '</br>';
        }
        die();

        // dd( $PCompteBanque->getDossierC()->getDescription() );

       
        // $PDossier = $this->getDoctrine()->getRepository(PDossier::class)->find(1);

        // foreach ($PDossier->getPCompteBanques() as $key => $P ){
        //     echo $P->getDesignation() . '</br>';
        // }
        // die();



        // $CompteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)->find(1);

        // foreach ($CompteBnaque->getDossierC() as $key => $C ){
        //     echo $C->getDescription() . '</br>';
        // }
        // die();
    }



    /**
     * @Route("/", name="tr_caisse_index",   options = { "expose" = true }  , methods={"GET"})
     */
    public function index(Connection $connection,Breadcrumbs $breadcrumbs): Response {

    //   /* informations modules dossiers Autorises pour cet utilisateur */
    //   // $mc = $this->session->get('moduleCourantTresorerie');
    //   // $dc = $this->session->get('dossierCourantTresorerie');
    //   // $modules = $this->session->get('modules');
    //   // $this->forward('App\Controller\SecurityController::getAccessOperation', [
    //   //     'module' => '_tresorerie',
    //   //     'sousModule' => '_alimentation_caisse',
    //   //     'operation' => '_index',
    //   //     'dossier' => $dc->getPrefix()
    //   // ]);

    //   // /* Navigation */
    //   // $this->getBreadcrumbs('_alimentation_caisse', 'Liste');



    //   // /* sous module courant */
    //   // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse'];
    //   // /* operations autorises pour cet utilisateur */
    //   // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse']['operations'];

      $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_index', true);
      
      
      $sum = $connection->fetchAll("SELECT sum(sold_avant) as s_avant, sum(sold_apres) as s_apres , sum(montant) as mt
                                    FROM `u_general_operation` 
                                    where piece_id in (32,33)
                                    group by  piece_id" );  
        
        $sold_avant = 0 ;
        $sold_apres = 0;
        $montant = 0;
        
        foreach($sum as $s){
             
            $sold_avant +=  $s['s_avant'];
            $sold_apres +=  $s['s_apres'];
            $montant    +=  $s['mt'];

        }

        $sold_avant =  number_format( $sold_avant,2,","," ");
        $sold_apres =  number_format($sold_apres,2,","," ");
        $montant    =  number_format($montant,2,","," ");
     
      return $this->render('tresorerie/tr_alimentation/index.html.twig',
                                  [
                                    'operations' => $operations,
                                    'sold_avant' => $sold_avant  ,
                                    'sold_apres'  => $sold_apres,
                                    'montant' => $montant ,
                                  ]
                          );



    }





    
    /**
     * @Route("/index", name="tr_caisse_first_index",   options = { "expose" = true }  , methods={"GET"})
     */

    public function tr_alimentation_first_index(Connection $connection,Breadcrumbs $breadcrumbs): Response {

       
  
        $operations = $this->appService->getOperations('_module_Banque', '_gestion_caisse', '_detail', true);

       
        // $Depot_Retrait = self::requete($connection);

        // // dd($action);

        // $total_depot = 0;
        // $total_retrait = 0;
        // $total_sold_conso = 0;
        // $sold_total = 0;

        // $data = array();
        // foreach ($Depot_Retrait as $key => $DR) {

        //     $total_depot += $DR['depot'];
        //     $total_retrait += $DR['retrait'];
        //     $total_sold_conso +=  $DR['depot'] - $DR['retrait'];
        //     $sold_total +=  $DR['montant_final'];
        

        
        // }

        

        // $total_treso = $sold_total + $total_sold_conso;

        // $total_depot = number_format($total_depot,2,","," ");
        // $total_retrait = number_format($total_retrait,2,","," ");
        // $total_sold_conso =  number_format($total_sold_conso,2,","," ");
        // $sold_total =  number_format($sold_total,2,","," ");

        
       
        return $this->render('tresorerie/caisse/first_index.html.twig',
                                    [
                                        'operations'       => $operations,
                                        // 'total_depot'      => $total_depot ,
                                        // 'total_retrait'    => $total_retrait ,
                                        // 'total_sold_conso' => $total_sold_conso,
                                        // 'sold_total'       => $sold_total,
                                        // 'total_treso'      => $total_treso,
                                    ]
                            );
  
  
  
      }


      



    public function getBreadcrumbs($sousModule, $lastItem) {
        $breadcrumbs = $this->breadcrumbs;
        $mc = $this->session->get('moduleCourantTresorerie');
        $dc = $this->session->get('dossierCourantTresorerie');
        $modules = $this->session->get('modules');
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_tresorerie_dossiers_by_module", ['id' => $mc->getId()]);
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules'][$sousModule];
        $breadcrumbs->addRouteItem($sousModule['titre'], $sousModule['route']);
        $breadcrumbs->addItem($lastItem);
    }
    



    




    /**
     * @Route("/getBnaque", name="getBnaque", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function getBnaque(Request $request,Connection $connection) 
    {
            
        $data = [];

        $idDossier = $request->request->get('idDossier');
        $type = $request->request->get('type');
        


        $entityManager = $this->getDoctrine()->getManager();

        // $Comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneByDossierC($idDossier);
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($idDossier);
        $Comptes = $dossier->getPCompteBanques();
        $select = "<option>Veuillez choisir un compte</option>";

        // dd($type);

        foreach ($Comptes as $cp){
            // if($type ==  33){

            //     if( $cp->getType()->getId() != 5){
            //             $select = $select . '<option value="'.$cp->getId().'"> '.$cp->getDesignation().'</option>' ;
            //     }

            // }else{

                if( $cp->getType()->getId() == 4){
                        $select = $select . '<option value="'.$cp->getId().'"> '.$cp->getDesignation().'</option>' ;
                }
            // }
           
           
        }

        $data['select'] = $select;

        return $this->json($data);



    }









    /**
     * @Route("/new", name="tr_caisse_new", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function new(Connection $connection,Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, TrTransactionRepository $TrTransactionRepository ,UGeneralOperationRepository $operationRepository): Response {

        
        $id = '';
        if(isset($_GET['id'])){
            $id = $_GET['id'];
        }

        $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_new', true);

        // dd($id);

        $dc = $this->appService->getDossierCourant();

        $UGeneralOperation = new UGeneralOperation();
        $UGeneralOperation->setDateValider(new \DateTime('now'));

        $form = $this->createForm(UGeneralOperationType::class, $UGeneralOperation, array('dossier' => $dc))
    
        ->add('typeCompte', EntityType::class, [
            'mapped' => false,
            'class' => UpPiece::class,
            'query_builder' => function (EntityRepository $er) {
                return $er->createQueryBuilder('p')
                        ->where('p.id >= 35')
                        ->andWhere('p.id <= 36')
                        ->andwhere('p.active=1 ')
                        ->orderBy('p.designation', 'ASC');
            },
            'choice_label' => 'designation',
            'constraints' => [
                new NotBlank(),
            ],
        ])
        ->add('compteIntern', EntityType::class, [
            'mapped' => false,
            'class' => PDossier::class,
            'query_builder' => function (EntityRepository $er) use ($id) {
                return $er->createQueryBuilder('p')
                        ->where('p.active=1 ')
                        ->where('p.id= :id_dossier')
                        ->setParameter('id_dossier', $id)
                        ->orderBy('p.description', 'ASC');
            },
            'choice_label' => 'description',
            'constraints' => [
                new NotBlank(),
            ],
        ]);
       
        $form->handleRequest($request);


        if ($form->isSubmitted()) {

            $request_dossier = $request->request->get('u_general_operation')['compteIntern'];
            $request_compte  = $request->request->get('compteBanque');
            $request_typePiece =  $request->request->get('u_general_operation')['typeCompte'];
            $montant =  $request->request->get('u_general_operation')['montant'];
            

            //$CompteBanque = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([ 'numCompte' => '001240N000000019' ]);
            $ComptePhysique = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneByDossierAndType($request_dossier,5);
            
            // dd($ComptePhysique);
            if(!($ComptePhysique)){
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => ' Veuillez contacter l\'administrateur. ']]);
            }
            $entityManager = $this->getDoctrine()->getManager();


            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $dossierChoisi = $this->getDoctrine()->getRepository(PDossier::class)->find($request_dossier);
            $CompteBanque  = $this->getDoctrine()->getRepository(PCompteBanque::class)->find($request_compte);
            $piece = $this->getDoctrine()->getRepository(UpPiece::class)->find($request_typePiece);

            if (!($dossierChoisi) || !($CompteBanque)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le dossier et le Compte  ne doivent pas être vide .']]);
            }

            $CompteSrc = "";
            $CompteDestinataire = "";

            if($request_typePiece == "36"){

                $CompteSrc = $this->getDoctrine()->getRepository(PCompteBanque::class)->find($request_compte);
                $CompteDestinataire = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneByDossierAndType($request_dossier,5);

                $montant_source  = $CompteSrc->getMontantFinal() - $montant;
                $CompteSrc->setMontantFinal($montant_source);
                $CompteSrc->setDateMf(new \DateTime('now'));

                $montant_destinataire  = $CompteDestinataire->getMontantFinal() + $montant;
                $CompteDestinataire->setMontantFinal($montant_destinataire);
                $CompteDestinataire->setDateMf(new \DateTime('now'));


                $entityManager->persist($CompteSrc);
                $entityManager->persist($CompteDestinataire);



            }else{

                $CompteDestinataire = $this->getDoctrine()->getRepository(PCompteBanque::class)->find($request_compte);
                $CompteSrc = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneByDossierAndType($request_dossier,5); 

                $montant_source  = $CompteSrc->getMontantFinal() - $montant;
                $CompteSrc->setMontantFinal($montant_source);
                $CompteSrc->setDateMf(new \DateTime('now'));

                $montant_destinataire  = $CompteDestinataire->getMontantFinal() + $montant;
                $CompteDestinataire->setMontantFinal($montant_destinataire);
                $CompteDestinataire->setDateMf(new \DateTime('now'));

                $entityManager->persist($CompteSrc);
                $entityManager->persist($CompteDestinataire);
            }



            $Fournisseur = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $request_dossier ]);
            $Client = $this->getDoctrine()->getRepository(PDossier::class)->find($request_dossier);

            $UGeneralOperation->setFournisseur($Fournisseur );
            $UGeneralOperation->setDossier($Client);


            $UGeneralOperation->setActive(true);
            $UGeneralOperation->setCreated(new \DateTime);
            $UGeneralOperation->setCompte($CompteSrc);
            $UGeneralOperation->setCompteDestinataire($CompteDestinataire);
            $UGeneralOperation->setPiece($piece);
            $UGeneralOperation->setCode($operationRepository->GetLastCodeByPiece($piece->getId()));
            $UGeneralOperation->setUserCreated($this->getUser());

            // $lastSoldApres = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findOneBy['id' => 'desc'])->getsoldApres();


            // $lastSoldApres = $connection->fetchColumn(" SELECT sold_apres
            //                                             FROM   u_general_operation 
            //                                             WHERE piece_id in (32,33,28,30) 
            //                                             order by id desc"  );
            // $SoldApres = 0;

            // $montant_float = str_replace(',', '.', $montant);


            // if($request_typePiece == "32"){
            //     $SoldApres = $lastSoldApres + $montant_float;
            // }else{
            //     $SoldApres = $lastSoldApres - $montant_float;
            // }

            
            // $UGeneralOperation->setSoldAvant($lastSoldApres);
            // $UGeneralOperation->setSoldApres($SoldApres);


            $entityManager->persist($UGeneralOperation);

           
            $entityManager->flush();




            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
        }


        $compteBydossier = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneByDossierAndType($id,2);

        return $this->render('tresorerie/caisse/new.html.twig', [
                    'form' => $form->createView(),
                    'compte' => $compteBydossier
        ]);
    }




    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="tr_alimentation_list")
     * 
     */
    public function ListClients(Connection $connection) {

        $data = array();

        $dc = $this->appService->getDossierCourant();

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
                        " SELECT ug
                          FROM   App\Entity\UGeneralOperation ug 
                          WHERE ug.piece in (32,33) uv.active = 1
                        ");
        $UGeneralOperation = $query->getResult();

        $data = array();
        foreach ($UGeneralOperation as $key => $ug) {

            if($ug->getCompte() != null  &&  $ug->getCompteDestinataire() != null){
                $nestedData =  array();
                $nestedData[] = '';
                $nestedData[] = $ug->getCompte()->getDesignation();
                $nestedData[] = $ug->getCompteDestinataire()->getDesignation();
                $nestedData[] = $ug->getDateValider() ? $ug->getDateValider()->format('Y-m-d H:i:s') : "";
                $nestedData[] = $ug->getPiece()->getDesignation(); 
                // $nestedData[] = $ug->getMontant();
                // $nestedData[] = $ug->getSoldAvant();
                // $nestedData[] = $ug->getSoldApres();


                $Montant   = $ug->getMontant() ;
                $SoldAvant = $ug->getSoldAvant();
                $SoldApres = $ug->getSoldApres() ;

                $nestedData[] = number_format($Montant,2,","," ");
                $nestedData[] = number_format($SoldAvant,2,","," ");
                $nestedData[] = number_format($SoldApres,2,","," ");
                
                $nestedData["DT_RowId"] = $ug->getId();
                $data[] = $nestedData;     
            } 
            

            
        }

        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }


    /**
     * 
     *
     * @Route("/list_index",options = { "expose" = true } , name="tr_caisse_list_index")
     * 
     */
    public function tr_caisse_list_index(Connection $connection) {

        // dd();

        $data = array();

        $dc = $this->appService->getDossierCourant();

        $Depot_Retrait = self::requete($connection);

        // $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_index', true);

        
        // dd($action);
        $operations = $this->appService->getOperations('_module_Banque', '_gestion_caisse', '_new', true);


        $data = array();
        foreach ($Depot_Retrait as $key => $DR) {

            
                $action =  $this->renderView('tresorerie/caisse/actions.html.twig',[ 'operations' => $operations , 'id' => $DR['id_dossier' ] ]);

                $nestedData =  array();
                $nestedData[] = '';
                $nestedData[] = $DR['description'];
                $nestedData[] = $DR['designation'];
                $nestedData[] = $DR['ALIMENTATION'];
                $nestedData[] = $DR['RETOUR'];
                $nestedData[] = $action;


                $nestedData[] =  $action;
                $nestedData["DT_RowId"] = $DR['id'];
                $data[] = $nestedData;   
                
            

            
        }

        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }


    public function requete (Connection $connection){

        
                $Depot_Retrait = $connection->fetchAll("select p_compte_banque.designation ,p_dossier.id as id_dossier,   p_compte_banque.montant_final,p_dossier.abreviation ,p_dossier.description, p_compte_banque.type_id,RETOUR.*,ALIMENTATION.*
                    from  p_dossier
                    inner join pcompte_banque_pdossier cd on cd.pdossier_id=p_dossier.id
                    inner join p_compte_banque on cd.pcompte_banque_id = p_compte_banque.id
                    left join
                    (SELECT p_dossier.id as is_dossier,u_general.piece_id ,sum(u_general.montant) as RETOUR
                        FROM `p_dossier`
                        inner join pcompte_banque_pdossier cd on cd.pdossier_id=p_dossier.id
                        inner join p_compte_banque on cd.pcompte_banque_id = p_compte_banque.id
                        inner join u_general_operation as u_general on p_compte_banque.id = u_general.compte_id
                        where u_general.piece_id in (36) and p_compte_banque.type_id = 2
                        group by u_general.piece_id,p_dossier.id
                    ) RETOUR on p_dossier.id = RETOUR.is_dossier  
               
                     left join 
                     (
                        SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq,   sum(u_general_destinataire.montant) as ALIMENTATION
                        FROM `p_dossier`
                        inner join pcompte_banque_pdossier cd on cd.pdossier_id=p_dossier.id
                        inner join p_compte_banque on cd.pcompte_banque_id = p_compte_banque.id
                        inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
                        where u_general_destinataire.piece_id in (35) and p_compte_banque.type_id = 2
                        group by u_general_destinataire.piece_id,p_dossier.id,p_compte_banque.designation
                    ) ALIMENTATION on RETOUR.is_dossier=ALIMENTATION.id                      
                    where p_compte_banque.type_id = 2
                    ORDER BY `id_dossier` ASC"  );


        return   $Depot_Retrait ;
    }





    /**
     * 
     *
     * @Route("/export/depot/retrait",options = { "expose" = true } , name="tr_caisse_list_export_depot_retrait")
     * 
     */
    public function tr_caisse_list_export_depot_retrait(Connection $connection) {

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'dossier id');
        $sheet->setCellValue('B1', 'dossier');
        $sheet->setCellValue('C1', 'compte id');
        $sheet->setCellValue('D1', 'num compte');
        $sheet->setCellValue('E1', 'compte');
        $sheet->setCellValue('F1', 'rib');
        $sheet->setCellValue('G1', 'Depot');
        $sheet->setCellValue('H1', 'Retrait');
        $sheet->setCellValue('I1', 'Solde');

        $dossiers = $connection->fetchAll("SELECT p_dossier.id, p_compte_banque.description as cmpt_bnq, p_compte_banque.id as cmpt_id, p_compte_banque.num_compte, p_compte_banque.rib
        FROM `p_dossier`
        inner join p_compte_banque on p_dossier.id = p_compte_banque.dossier_id
        where p_compte_banque.type_id = 4 ");
        $i = 2;
        // dd($dossiers);
        foreach($dossiers as $dossier) {
            // if($dossier['cmpt_id'] != 24) {
            //     continue;
            // }
            // partie retrait
            $montantRetrait = 0;

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.id = ".$dossier['cmpt_id']." and   (u_general_destinataire.p_piece_id in (33) or u_general_destinataire.piece_id in (33)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_dossier.id = ".$dossier['id']);

            foreach ($operations as $key => $operation) {
                $montantRetrait += $operation['montant'];
            }
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (33) or u_general_destinataire.piece_id in (33)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_dossier.id = ".$dossier['id']);

            foreach ($operations as $key => $operation) {
                $montantRetrait += $operation['montant'];
            }
            

            // partie depot
            $montantDepot = 0;
            
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where  p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (32) or u_general_destinataire.piece_id in (32)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");

            foreach ($operations as $key => $operation) {
                $montantDepot += $operation['montant'];
            }
            // dd($operations);

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where  p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (32) or u_general_destinataire.piece_id in (32)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");

            foreach ($operations as $key => $operation) {
                $montantDepot += $operation['montant'];
            }
            

            $sheet->setCellValue('A'.$i, $dossier['id']);
            $sheet->setCellValue('B'.$i, 'dossier');
            $sheet->setCellValue('C'.$i, $dossier['cmpt_id']);
            $sheet->setCellValue('D'.$i, $dossier['num_compte']);
            $sheet->setCellValue('E'.$i, $dossier['cmpt_bnq']);
            $sheet->setCellValue('F'.$i, $dossier['rib']);
            $sheet->setCellValue('G'.$i, $montantDepot);
            $sheet->setCellValue('H'.$i, $montantRetrait);
            $sheet->setCellValue('I'.$i, $montantDepot - $montantRetrait);


            $i++;

        }
        

        $writer = new Xlsx($spreadsheet);
        $fileName = 'depot_retrait.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    /**
     * 
     *
     * @Route("/export/placement/rachat",options = { "expose" = true } , name="tr_caisse_list_export_placement_rachat")
     * 
     */
    public function tr_caisse_list_export_placement_rachat(Connection $connection) {

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'dossier id');
        $sheet->setCellValue('B1', 'dossier');
        $sheet->setCellValue('C1', 'compte id');
        $sheet->setCellValue('D1', 'num compte');
        $sheet->setCellValue('E1', 'compte');
        $sheet->setCellValue('F1', 'rib');
        $sheet->setCellValue('G1', 'Rachat');
        $sheet->setCellValue('H1', 'Placement');
        $sheet->setCellValue('I1', 'Solde');

        $dossiers = $connection->fetchAll("SELECT p_dossier.id, p_compte_banque.description as cmpt_bnq, p_compte_banque.id as cmpt_id, p_compte_banque.num_compte, p_compte_banque.rib
        FROM `p_dossier`
        inner join p_compte_banque on p_dossier.id = p_compte_banque.dossier_id
        where p_compte_banque.type_id = 4 ");
        $i = 2;
        // dd($dossiers);
        foreach($dossiers as $dossier) {
           
            $montantRetrait = 0;

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.id = ".$dossier['cmpt_id']." and   (u_general_destinataire.p_piece_id in (28) or u_general_destinataire.piece_id in (28)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_dossier.id = ".$dossier['id']);

            foreach ($operations as $key => $operation) {
                $montantRetrait += $operation['montant'];
            }
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (28) or u_general_destinataire.piece_id in (28)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_dossier.id = ".$dossier['id']);

            foreach ($operations as $key => $operation) {
                $montantRetrait += $operation['montant'];
            }
            




            
            
            $montantDepot = 0;
            
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where  p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (30) or u_general_destinataire.piece_id in (30)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");

            foreach ($operations as $key => $operation) {
                $montantDepot += $operation['montant'];
            }
            // dd($operations);

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where  p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (30) or u_general_destinataire.piece_id in (30)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");

            foreach ($operations as $key => $operation) {
                $montantDepot += $operation['montant'];
            }
            
            if($montantDepot != 0 and $montantRetrait != 0) {
                $sheet->setCellValue('A'.$i, $dossier['id']);
                $sheet->setCellValue('B'.$i, 'dossier');
                $sheet->setCellValue('C'.$i, $dossier['cmpt_id']);
                $sheet->setCellValue('D'.$i, $dossier['num_compte']);
                $sheet->setCellValue('E'.$i, $dossier['cmpt_bnq']);
                $sheet->setCellValue('F'.$i, $dossier['rib']);
                $sheet->setCellValue('G'.$i, $montantDepot);
                $sheet->setCellValue('H'.$i, $montantRetrait);
                $sheet->setCellValue('I'.$i, $montantRetrait - $montantDepot);
    
    
                $i++;
            }

        }
        

        $writer = new Xlsx($spreadsheet);
        $fileName = 'plac_rachat.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    /**
     * 
     *
     * @Route("/export",options = { "expose" = true } , name="tr_caisse_list_export")
     * 
     */
    public function tr_caisse_list_export(Connection $connection) {

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'dossier id');
        $sheet->setCellValue('B1', 'dossier');
        $sheet->setCellValue('C1', 'compte id');
        $sheet->setCellValue('D1', 'num compte');
        $sheet->setCellValue('E1', 'compte');
        $sheet->setCellValue('F1', 'rib');
        $sheet->setCellValue('G1', 'PREPAIEMENT INTRA SRC');
        $sheet->setCellValue('H1', 'PREPAIEMENT INTRA DEST');
        $sheet->setCellValue('I1', 'EDRA SRC');
        $sheet->setCellValue('J1', 'EDRA DEST');
        $sheet->setCellValue('K1', 'TRNI SRC');
        $sheet->setCellValue('L1', 'TRNI DEST');

        $dossiers = $connection->fetchAll("SELECT p_dossier.id, p_compte_banque.description as cmpt_bnq, p_compte_banque.id as cmpt_id, p_compte_banque.num_compte, p_compte_banque.rib
        FROM `p_dossier`
        inner join p_compte_banque on p_dossier.id = p_compte_banque.dossier_id
        where p_compte_banque.type_id = 4 ");
        $i = 2;
        // dd($dossiers);
        foreach($dossiers as $dossier) {
            // if($dossier['cmpt_id'] != 82) {
            //     continue;
            // }
            // partie retrait
            $montatPlus = 0;

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id, p_compte_banque.id as compte_id, p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.id = ".$dossier['cmpt_id']." and   (u_general_destinataire.p_piece_id in (34)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");
           
            foreach ($operations as $key => $operation) {
                $montatPlus += $operation['montant'];
            }

            $montatMoins = 0;
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (34)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");
//  dd($operations);
            foreach ($operations as $key => $operation) {
                $montatMoins += $operation['montant'];
            }
            $montatPlusEdra = 0;

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id, p_compte_banque.id as compte_id, p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.id = ".$dossier['cmpt_id']." and   (u_general_destinataire.p_piece_id in (52)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");
           
            foreach ($operations as $key => $operation) {
                $montatPlusEdra += $operation['montant'];
            }

            $montatMoinsEdra = 0;
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (52)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");

            foreach ($operations as $key => $operation) {
                $montatMoinsEdra += $operation['montant'];
            }
            $montatPlusTR = 0;

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id, p_compte_banque.id as compte_id, p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.id = ".$dossier['cmpt_id']." and   (u_general_destinataire.p_piece_id in (50)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");
           
            foreach ($operations as $key => $operation) {
                $montatPlusTR += $operation['montant'];
            }

            $montatMoinsTR = 0;
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.id = ".$dossier['cmpt_id']."  and  (u_general_destinataire.p_piece_id in (50)) and u_general_destinataire.executer=1 and u_general_destinataire.active=1");

            foreach ($operations as $key => $operation) {
                $montatMoinsTR += $operation['montant'];
            }
            
            
            $sheet->setCellValue('A'.$i, $dossier['id']);
            $sheet->setCellValue('B'.$i, 'dossier');
            $sheet->setCellValue('C'.$i, $dossier['cmpt_id']);
            $sheet->setCellValue('D'.$i, $dossier['num_compte']);
            $sheet->setCellValue('E'.$i, $dossier['cmpt_bnq']);
            $sheet->setCellValue('F'.$i, $dossier['rib']);
            $sheet->setCellValue('G'.$i, $montatMoins);
            $sheet->setCellValue('H'.$i, $montatPlus);
            $sheet->setCellValue('I'.$i, $montatMoinsEdra);
            $sheet->setCellValue('J'.$i, $montatPlusEdra);
            $sheet->setCellValue('K'.$i, $montatMoinsTR);
            $sheet->setCellValue('L'.$i, $montatPlusTR);


            $i++;

        }
        

        $writer = new Xlsx($spreadsheet);
        $fileName = 'statistique.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    /**
     * 
     *
     * @Route("/exporta",options = { "expose" = true } , name="tr_caisse_list_exporta")
     * 
     */
    public function tr_caisse_list_exporta(Connection $connection) {

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'dossier id');
        $sheet->setCellValue('B1', 'dossier');
        $sheet->setCellValue('C1', 'compte id');
        $sheet->setCellValue('D1', 'compte');
        $sheet->setCellValue('E1', 'retrait');
        $sheet->setCellValue('F1', 'depôt');
        $sheet->setCellValue('G1', 'total');

        $dossiers = $connection->fetchAll("SELECT p_dossier.id, p_compte_banque.description as cmpt_bnq, p_compte_banque.id as cmpt_id, p_compte_banque.rib
        FROM `p_dossier`
        inner join p_compte_banque on p_dossier.id = p_compte_banque.dossier_id
        where p_compte_banque.type_id = 4 ");
        $i = 2;
        // dd($dossiers);
        foreach($dossiers as $dossier) {
            if($dossier['id'] == 231) {
                continue;
            }
            // partie retrait
            $montantRetrait = 0;

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.type_id in (4, 5) and u_general_destinataire.piece_id in (33) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_dossier.id = ".$dossier['id']);

            foreach ($operations as $key => $operation) {
                $montantRetrait += $operation['montant'];
            }
            




            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.type_id = 4 and u_general_destinataire.piece_id in (34, 38, 37, 28) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_dossier.id = ".$dossier['id']);

            foreach ($operations as $key => $operation) {
                $montantRetrait += $operation['montant'];
            }

            // partie depot
            $montantDepot = 0;
            
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.type_id in (4,5) and u_general_destinataire.piece_id in (32) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_dossier.id = ".$dossier['id']);

            foreach ($operations as $key => $operation) {
                $montantDepot += $operation['montant'];
            }
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.type_id = 4 and u_general_destinataire.piece_id in (34, 38, 37, 30) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_dossier.id = ".$dossier['id']);

            foreach ($operations as $key => $operation) {
                if($operation['piece_id'] == 37 and $operation['montant'] >= 0) {
                    $montantDepot += $operation['montant'];
                } elseif($operation['piece_id'] == 37 and $operation['montant'] < 0) {
                    $montantRetrait += ($operation['montant'] * -1);
                } else {
                    $montantDepot += $operation['montant'];
                }
            }

            $sheet->setCellValue('A'.$i, $dossier['id']);
            $sheet->setCellValue('B'.$i, 'dossier');
            $sheet->setCellValue('C'.$i, $dossier['cmpt_id']);
            $sheet->setCellValue('D'.$i, $dossier['cmpt_bnq']);
            $sheet->setCellValue('E'.$i, $dossier['rib']);
            $sheet->setCellValue('F'.$i, $montantRetrait);
            $sheet->setCellValue('G'.$i, $montantDepot);
            $sheet->setCellValue('H'.$i, $montantDepot - $montantRetrait);


            $i++;

        }
        $dossiers = $connection->fetchAll("SELECT p_dossier.id, p_compte_banque.description as cmpt_bnq, p_compte_banque.id as cmpt_id, p_compte_banque.rib
        FROM `p_dossier`
        inner join p_compte_banque on p_dossier.id = p_compte_banque.dossier_id
        where p_compte_banque.type_id = 4 and p_dossier.id = 231 ");
        // dd($dossiers);
        foreach($dossiers as $dossier) {
            $montantRetrait = 0;

            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.type_id in (4, 5) and u_general_destinataire.piece_id in (33) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_compte_banque.id = ".$dossier['cmpt_id']);

            foreach ($operations as $key => $operation) {
                $montantRetrait += $operation['montant'];
            }
            




            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.type_id = 4 and u_general_destinataire.piece_id in (34, 38, 37, 28) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_compte_banque.id = ".$dossier['cmpt_id']);

            foreach ($operations as $key => $operation) {
                $montantRetrait += $operation['montant'];
            }

            // partie depot
            $montantDepot = 0;
            
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_id
            where p_compte_banque.type_id in (4,5) and u_general_destinataire.piece_id in (32) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_compte_banque.id = ".$dossier['cmpt_id']);

            foreach ($operations as $key => $operation) {
                $montantDepot += $operation['montant'];
            }
            $operations = $connection->fetchAll("SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq, u_general_destinataire.montant
            FROM `p_dossier`
            inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
            left join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
            where p_compte_banque.type_id = 4 and u_general_destinataire.piece_id in (34, 38, 37, 30) and u_general_destinataire.executer=1 and u_general_destinataire.active=1 and p_compte_banque.id = ".$dossier['cmpt_id']);

            foreach ($operations as $key => $operation) {
                if($operation['piece_id'] == 37 and $operation['montant'] >= 0) {
                    $montantDepot += $operation['montant'];
                } elseif($operation['piece_id'] == 37 and $operation['montant'] < 0) {
                    $montantRetrait += ($operation['montant'] * -1);
                } else {
                    $montantDepot += $operation['montant'];
                }
            }

            $sheet->setCellValue('A'.$i, $dossier['id']);
            $sheet->setCellValue('B'.$i, 'dossier');
            $sheet->setCellValue('C'.$i, $dossier['cmpt_id']);
            $sheet->setCellValue('D'.$i, $dossier['cmpt_bnq']);
            $sheet->setCellValue('E'.$i, $dossier['rib']);
            $sheet->setCellValue('F'.$i, $montantRetrait);
            $sheet->setCellValue('G'.$i, $montantDepot);
            $sheet->setCellValue('H'.$i, $montantDepot - $montantRetrait);


            $i++;
        }

        $writer = new Xlsx($spreadsheet);
        $fileName = 'comptes.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }




}
