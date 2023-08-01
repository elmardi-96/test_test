<?php

namespace App\Controller\ModuleTresorerie;

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
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



/**
 * @Route("Banque/alimentation" )
 */
class AlimentationController extends AbstractController {

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
     * @Route("/", name="tr_alimentation_index",   options = { "expose" = true }  , methods={"GET"})
     */
    public function index(Connection $connection,Breadcrumbs $breadcrumbs): Response {

      /* informations modules dossiers Autorises pour cet utilisateur */
      // $mc = $this->session->get('moduleCourantTresorerie');
      // $dc = $this->session->get('dossierCourantTresorerie');
      // $modules = $this->session->get('modules');
      // $this->forward('App\Controller\SecurityController::getAccessOperation', [
      //     'module' => '_tresorerie',
      //     'sousModule' => '_alimentation_caisse',
      //     'operation' => '_index',
      //     'dossier' => $dc->getPrefix()
      // ]);

      // /* Navigation */
      // $this->getBreadcrumbs('_alimentation_caisse', 'Liste');



      // /* sous module courant */
      // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse'];
      // /* operations autorises pour cet utilisateur */
      // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse']['operations'];

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
     * @Route("/traitment_excel", name="traitment_excel",   options = { "expose" = true }  , methods={"GET","POST"})
     */

    public function traitment_excel(Request $request) {

       
        //   $files = $request->request->get('files');
        //   var_dump($files);
         
        //  dd('ziko') ;

        dd($_FILES["operations"]["tmp_name"]);

        $articleFileName = $_FILES["operations"]["tmp_name"];
        if ($_FILES["file_reponses"]["size"] > 0) {
            $file_article = fopen($articleFileName, "r");
            $data_file_article = [];

            while (($column_file_article = fgetcsv($file_article, 10000, ";")) !== FALSE) {
                array_push($data_file_article, $column_file_article);
            }

            $ligne = ['Etablissement','Placement','Prêt'];

            for ($y = 0; $y < sizeof($data_file_article); $y++) {
                if ($y == 0) {
                    for($w=0;$w<=1;$w++){
                        if($data_file_article[$y][$w] != $ligne[$w]){
                            // return new JsonResponse('premiere ligne '.$ligne[$w].' incorect');
                            return new JsonResponse('le champ '.$ligne[$w].' de la premiere ligne est incorect');
                        }
                    }
                }else {
                   
                    $array = array();
                    $c = $y +1;
                    for($w=0;$w<=1;$w++){
                        if(empty($data_file_article[$y][$w])){
                            return new JsonResponse('le champ '.$ligne[$w].' de la ligne '. $c .' est vide');
                            // return $this->json(['code' => 200, 'message' => ['title' => 'err', 'text' => 'le champ '.$ligne[$w].' dans la ligne '. $c .' est vide', 'data' => 1]]);
                        }
                    }


                    $compte = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([ 'designation' => $data_file_article[$y][0] ]);

                    echo $compte->getId() . ' => ' . $data_file_article[$y][0] . '<br>';


                    // $UGeneralOperation = new UGeneralOperation();



                    // $UGeneralOperation->setMontant($data_file_article[$y][1]);
                    // $UGeneralOperation->setActive(true);
                    // $UGeneralOperation->setCreated(new \DateTime);
                    // $UGeneralOperation->setCompte($CompteSrc);
                    // $UGeneralOperation->setCompteDestinataire($CompteDestinataire);
                    // $UGeneralOperation->setPiece($piece);
                    // $UGeneralOperation->setUserCreated($this->getUser());
                    // $UGeneralOperation->setDossier($dossierChoisi);


                    // if($request_typePiece == "32"){
                    //     $SoldApres = $lastSoldApres + $montant_float;
                    // }else{
                    //     $SoldApres = $lastSoldApres - $montant_float;
                    // }

                   
                    // $UGeneralOperation->setSoldAvant($lastSoldApres);

                    // $UGeneralOperation->setSoldApres($SoldApres);


                    // $entityManager->persist($UGeneralOperation);





                   

                }
            }

        }else {
            return new JsonResponse('Veuillez choisir un fichier');
        }

        // dd($articles);


        return new JsonResponse('ok');
 
    }




    
    /**
     * @Route("/index", name="tr_alimentation_first_index",   options = { "expose" = true }  , methods={"GET"})
     */

    public function tr_alimentation_first_index(Connection $connection,Breadcrumbs $breadcrumbs): Response {

       
  
        $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_detail', true);

       
        $Depot_Retrait = self::requete($connection);

        // dd($action);

        $total_depot = 0;
        $total_retrait = 0;
        $total_sold_conso = 0;
        $sold_total = 0;

        $data = array();
        foreach ($Depot_Retrait as $key => $DR) {

            $total_depot += $DR['depot'];
            $total_retrait += $DR['retrait'];
            $total_sold_conso +=  $DR['depot'] - $DR['retrait'];
            $sold_total +=  $DR['montant_final'];
        

        
        }

        

        $total_treso = $sold_total + $total_sold_conso;

        $total_depot = number_format($total_depot,2,","," ");
        $total_retrait = number_format($total_retrait,2,","," ");
        $total_sold_conso =  number_format($total_sold_conso,2,","," ");
        $sold_total =  number_format($sold_total,2,","," ");

        
       
        return $this->render('tresorerie/tr_alimentation/first_index.html.twig',
                                    [
                                        'operations'       => $operations,
                                        'total_depot'      => $total_depot ,
                                        'total_retrait'    => $total_retrait ,
                                        'total_sold_conso' => $total_sold_conso,
                                        'sold_total'       => $sold_total,
                                        'total_treso'      => number_format($total_treso,2,","," "),
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
     * @Route("/get_infos_compte", name="get_infos_compte", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function get_infos_compte(Connection $connection,Request $request): Response {
        
        $data = [];

        $idCompte = $request->request->get('idCompte');
        $compte =   $this->getDoctrine()->getRepository(PCompteBanque::class)->find($idCompte);

        // dd($idCompte);

        $entityManager = $this->getDoctrine()->getManager();

        $T_Retrait = $connection->fetchColumn(" SELECT sum(montant)
                                                FROM   u_general_operation 
                                                WHERE piece_id = 33 and compte_destinataire_id =".$idCompte."
                                                GROUP BY piece_id"  );

        $T_Depot = $connection->fetchColumn("   SELECT sum(montant)
                                                FROM   u_general_operation
                                                WHERE piece_id = 32 and compte_id =".$idCompte."
                                                GROUP BY piece_id");  
        $sold_conso =  $T_Depot - $T_Retrait ;
           
        
        $data['T_Depot'] = $T_Depot;
        $data['T_Retrait'] = $T_Retrait;
        $data['sold_conso'] = $sold_conso;
        $data['compte'] = $compte->getDesignation();
        $data['montant_final'] = $compte->getMontantFinal();

        return $this->json($data);

    }
    

    /**
     * @Route("/get_compte_banque", name="get_compte_banque", options = { "expose" = true } , methods={"GET","POST"})
     */
    // public function get_compte_banque(Connection $connection,Request $request): Response {
        
    //     $data = [];

    //     $idDossier = $request->request->get('idDossier');

    //     $entityManager = $this->getDoctrine()->getManager();
    //     $Comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findByDossier($idDossier);
    //     $select = "<option>Veuillez choisir un dossier</option>";
    //     foreach ($Comptes as $cp){
    //        $select = $select . '<option value="'.$cp->getId().'"> '.$cp->getDesignation().'</option>' ;
    //     }

    //     $Comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findByDossier($idDossier);

    //     $entityManager = $this->getDoctrine()->getManager();

    //     $pieceSum = $connection->fetchAll(" SELECT sum(montant) as totalPiece, up_piece.designation
    //                                         FROM   u_general_operation 
    //                                         inner join up_piece on up_piece.id = u_general_operation.piece_id
    //                                         WHERE piece_id in (28,30,32,33)
    //                                         GROUP BY piece_id");
        
    //     $total_mt_final = $connection->fetchColumn(" SELECT sum(montant_final) FROM `p_compte_banque`");

    //     $T_Placement = 0 ;
    //     $T_Rachat = 0 ;
    //     $T_Depot = 0 ;
    //     $T_Retrait = 0 ; 
        
    //     // dd($pieceSum);
                                                
    //     foreach( $pieceSum as $ps ){

    //          if($ps['designation'] == 'PLACEMENT' ){
    //             $T_Placement = $ps['totalPiece'];
    //          }elseif($ps['designation'] == 'RACHAT' ){
    //             $T_Rachat = $ps['totalPiece'];
    //          }elseif($ps['designation'] == 'depôt' ){
    //             $T_Depot = $ps['totalPiece'];
    //          }elseif($ps['designation'] == 'retrait' ){
    //             $T_Retrait = $ps['totalPiece'];
    //          }

    //     }
       
        
    //     $sold_conso =  ($T_Depot - $T_Retrait) + ($T_Rachat - $T_Placement)  ;     
    //     $mt_placement = $T_Placement - $T_Rachat;


    //     $data['select'] = $select;
    //     $data['sold_conso'] = $sold_conso;
    //     $data['mt_placement'] = $mt_placement;
    //     $data['total_mt_final'] = $total_mt_final;

    //     // dd('ziko');
    //     // dd($T_Depot,$T_Retrait);

    //     return $this->json($data);

    // }


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
        $select = "<option>Veuillez choisir un dossier</option>";

        // dd($type);

        foreach ($Comptes as $cp){
            if($type ==  33){

                if( $cp->getType()->getId() != 5){
                        $select = $select . '<option value="'.$cp->getId().'"> '.$cp->getDesignation().'</option>' ;
                }

            }else{

                if( $cp->getType()->getId() == 4){
                        $select = $select . '<option value="'.$cp->getId().'"> '.$cp->getDesignation().'</option>' ;
                }
            }
           
           
        }

        $data['select'] = $select;

        return $this->json($data);



    }









    /**
     * @Route("/new", name="tr_alimentation_new", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function new(Connection $connection,Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, TrTransactionRepository $TrTransactionRepository ,UGeneralOperationRepository $operationRepository): Response {

        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantTresorerie');
        //  $dc = $this->session->get('dossierCourantTresorerie');
        //  $modules = $this->session->get('modules');
        //  /* les droits d'acces */
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_tresorerie',
        //      'sousModule' => '_alimentation_caisse',
        //      'operation' => '_new',
        //      'dossier' => $dc->getPrefix()
        //  ]);

        //  /* Navigation */
        //  $this->getBreadcrumbs('_alimentation_caisse', 'Ajouter');


        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse'];
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse']['operations'];

        
        $id = '';
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $compte = $this->getDoctrine()->getRepository(PCompteBanque::class)->find($id);
            $id = $compte->getDossier()->getId();
        }

        $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_new', true);

        // dd($id);
        $em = $this->getDoctrine()->getManager();

        $dc = $this->appService->getDossierCourant();

        $UGeneralOperation = new UGeneralOperation();
        $UGeneralOperation->setDateValider(new \DateTime('now'));

        $form = $this->createForm(UGeneralOperationType::class, $UGeneralOperation, array('dossier' => $dc))
    
        ->add('typeCompte', EntityType::class, [
            'mapped' => false,
            'class' => UpPiece::class,
            'query_builder' => function (EntityRepository $er) {
                return $er->createQueryBuilder('p')
                        ->where('p.id > 31')
                        ->andWhere('p.id < 34')
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

            // $CompteBanque = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([ 'numCompte' => '001240N000000019' ]);

            // if(!($CompteBanque)){
            //     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => ' Veuillez contacter l\'administrateur. ']]);
            // }

            $entityManager = $this->getDoctrine()->getManager();
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

            

            $dossierChoisi = $this->getDoctrine()->getRepository(PDossier::class)->find($request_dossier);
            // dd($dossierChoisi);
            $CompteBanque  = $this->getDoctrine()->getRepository(PCompteBanque::class)->find($request_compte);
            // dd($CompteBanque);
            // $piece = $this->getDoctrine()->getRepository(UpPiece::class)->find($request_typePiece);
            $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find($request_typePiece);
            $montant = $request->request->get('u_general_operation')['montant'];

            if (!($dossierChoisi) || !($CompteBanque)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le dossier et le Compte  ne doivent pas être vide .']]);
            }

            $CompteSrc = "";
            $CompteDestinataire = "";
            // dd($request_typePiece);
            $comptePhysique = $em->getRepository(PCompteBanque::class)->findOneBy([
                'dossier'=>$dossierChoisi, 
                'parent' => null,
                'type' => $em->getRepository(PCompteBanqueType::class)->find(5) //physique
            ]);
            $compteVirtuelle = $em->getRepository(PCompteBanque::class)->findOneBy([
                'dossier'=>$dossierChoisi, 
                'parent' => null,
                'type' => $em->getRepository(PCompteBanqueType::class)->find(4) //virtuelle
            ]);
            // dd($id);
            if($CompteBanque->getDossier()->getId() == 231){ // service banque
                $compteVirtuelle = $CompteBanque;
                $comptePhysique = $compteVirtuelle->getParent();
            }
            // dd($compteVirtuelle, $comptePhysique);
            $Client = $this->getDoctrine()->getRepository(PDossier::class)->find($request_dossier);
            $Fournisseur = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $request_dossier ]);
            if($request_typePiece == "32"){
                $CompteSrc = $comptePhysique;
                $CompteDestinataire = $compteVirtuelle;
            }else{
                $CompteSrc = $compteVirtuelle;
                $CompteDestinataire = $comptePhysique;
            }
            
            //dd($dossierChoisi->getId());
            // dd($dossierChoisi->getId() ,$Partenaire );
            
            $UGeneralOperation->setFournisseur($Fournisseur);
            $UGeneralOperation->setDossier($Client);
            $UGeneralOperation->setDossierTrt($dossierChoisi);
            $UGeneralOperation->setActive(true);
            $UGeneralOperation->setCreated(new \DateTime);
            $UGeneralOperation->setCompte($CompteSrc);
            $UGeneralOperation->setPCompte($CompteSrc);
            $UGeneralOperation->setSens(-1);
            $UGeneralOperation->setMontantFinal($UGeneralOperation->getSens() * $UGeneralOperation->getMontant());           

            // $UGeneralOperation->setPiece($piece);
            $UGeneralOperation->setPPiece($pPiece);
            $UGeneralOperation->setCode($operationRepository->GetLastCodeByPieceByDossier($Client, $pPiece->getId()));
            $UGeneralOperation->setUserCreated($this->getUser());

            // $lastSoldApres = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findOneBy['id' => 'desc'])->getsoldApres();


          

           


            $entityManager->persist($UGeneralOperation);

           
            // dd('amine');
            $entityManager->flush();

            $UGeneralOperationRegul = new UGeneralOperation();
            $UGeneralOperationRegul->setDateValider(new \DateTime('now'));
            $UGeneralOperationRegul->setActive(true);
            $UGeneralOperationRegul->setCreated(new \DateTime);
            $UGeneralOperationRegul->setFournisseur($UGeneralOperation->getFournisseur());
            $UGeneralOperationRegul->setClient($UGeneralOperation->getClient());
            $UGeneralOperationRegul->setDossierTrt($dossierChoisi);
            $UGeneralOperationRegul->setDossier($UGeneralOperation->getDossier());
            $UGeneralOperationRegul->setMontant($UGeneralOperation->getMontant());
            $UGeneralOperationRegul->setRegul(true);
            $UGeneralOperationRegul->setSens(1);
            $UGeneralOperationRegul->setPPiece($pPiece);
            $UGeneralOperationRegul->setCode($operationRepository->GetLastCodeByPieceByDossier($Client, $pPiece->getId()));
            $UGeneralOperationRegul->setUserCreated($this->getUser());
            $UGeneralOperationRegul->setCompteDestinataire($CompteDestinataire);
            $UGeneralOperationRegul->setPCompte($CompteDestinataire);
            $UGeneralOperationRegul->setParent($UGeneralOperation);
            $UGeneralOperationRegul->setMontantFinal($UGeneralOperationRegul->getSens() * $UGeneralOperationRegul->getMontant());           

           
            $entityManager->persist($UGeneralOperationRegul);

            $entityManager->flush();




            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
        }


        $pieceSum = $connection->fetchAll(" SELECT sum(montant) as totalPiece, up_piece.designation
        FROM   u_general_operation 
        inner join up_piece on up_piece.id = u_general_operation.piece_id
        WHERE piece_id in (28,30,32,33)
        GROUP BY piece_id");

        $total_mt_final = $connection->fetchColumn(" SELECT sum(montant_final) FROM `p_compte_banque`");

        $T_Placement = 0 ;
        $T_Rachat = 0 ;
        $T_Depot = 0 ;
        $T_Retrait = 0 ; 

        // dd($pieceSum);
                    
        foreach( $pieceSum as $ps ){

        if($ps['designation'] == 'PLACEMENT' ){
        $T_Placement = $ps['totalPiece'];
        }elseif($ps['designation'] == 'RACHAT' ){
        $T_Rachat = $ps['totalPiece'];
        }elseif($ps['designation'] == 'depôt' ){
        $T_Depot = $ps['totalPiece'];
        }elseif($ps['designation'] == 'retrait' ){
        $T_Retrait = $ps['totalPiece'];
        }

        }


        $sold_conso =  ($T_Depot - $T_Retrait) + ($T_Rachat - $T_Placement)  ;     
        $mt_placement = $T_Placement - $T_Rachat;
        
        $data['sold_conso'] = $sold_conso;
        $data['mt_placement'] = $mt_placement;
        $data['total_mt_final'] = $total_mt_final;


        // $compteBydossier = $this->getDoctrine()->getRepository(PCompteBanque::class)->findByDossier($id);
        $dossier = $this->getDoctrine()->getManager()->getRepository(PDossier::class)->find($id);
        // $compteBydossier = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy([
        //                                 'dossier' => $dossier,
        //                                 'type' => 4,
        //                             ]);

        // $compteBydossier = $this->getDoctrine()->getRepository(PCompteBanque::class)->findByDossier($dossier);
        // dd($compteBydossier);


        // dd($compteBydossier);

        // dd($compteBydossier);
        return $this->render('tresorerie/tr_alimentation/new.html.twig', [
                    'form' => $form->createView(),
                    'compte' => $compte,
                    'sold_conso' => $sold_conso,
                    'mt_placement' => $mt_placement,
                    'total_mt_final' => $total_mt_final,
                    // 'UGeneralOperation'=>$UGeneralOperation
        ]);
    }



    /**
     * @Route("/{id}/edit", name="tr_alimentation_edit", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function edit(Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, TrTransaction $TrTransaction , TrTransactionRepository $TrTransactionRepository): Response {
        
        /* informations modules dossiers Autorises pour cet utilisateur */
    //  $mc = $this->session->get('moduleCourantTresorerie');
    //  $dc = $this->session->get('dossierCourantTresorerie');
    //  $modules = $this->session->get('modules');
    //  /* les droits d'acces */
    //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
    //      'module' => '_tresorerie',
    //      'sousModule' => '_alimentation_caisse',
    //      'operation' => '_edit',
    //      'dossier' => $dc->getPrefix()
    //  ]);

    //  /* Navigation */
    //  $this->getBreadcrumbs('_alimentation_caisse', 'Modifier');


    //  /* sous module courant */
    //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse'];
    //  /* operations autorises pour cet utilisateur */
    //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse']['operations'];


    $dc=$this->appService->getDossierCourant();
    $operations = $this->appService->getOperations('_module_tresorerie', '_alimentation_caisse', '_edit', [true,$TrTransaction->getCode()]);


       

        $form = $this->createForm(TrTransactionType::class, $TrTransaction, array('dossier' => $dc));
        $compte = $this->getDoctrine()->getRepository(PCompteBanque::class)->find($TrTransaction->getCompte()->getId());

//dump($TrTransaction->getCompte());
//die;


        $form->get('source')->setData($compte);
        $form->get('destination')->setData($compte);
        $form->handleRequest($request);


        if ($form->isSubmitted()) {

            $entityManager = $this->getDoctrine()->getManager();
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);


          


            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }




            $type = $this->getDoctrine()->getRepository(PTransactionType::class)->findOneByCode('ALI');
            $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('ODI');

            $TrTransaction->setType($type);
            // $TrTransaction->setPiece($piece);
            $TrTransaction->setUserUpdated($this->getUser());
            $TrTransaction->setUpdated(new \DateTime);

         
            $this->getDoctrine()->getManager()->flush();



            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
        }

        return $this->render('tresorerie/tr_alimentation/edit.html.twig', [
                    'form' => $form->createView(),
                    'transaction'=>$TrTransaction,
                    'operations'=>$operations
        ]);
    }



      /**
     * @Route("/{id}/show", name="tr_alimentation_show", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function show(Request $request, TrTransaction $TrTransaction ): Response {
        
        /* informations modules dossiers Autorises pour cet utilisateur */
   //   $mc = $this->session->get('moduleCourantTresorerie');
   //   $dc = $this->session->get('dossierCourantTresorerie');
   //   $modules = $this->session->get('modules');
   //   /* les droits d'acces */
   //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
   //       'module' => '_tresorerie',
   //       'sousModule' => '_alimentation_caisse',
   //       'operation' => '_new',
   //       'dossier' => $dc->getPrefix()
   //   ]);

   //   /* Navigation */
   //   $this->getBreadcrumbs('_alimentation_caisse', 'Consulter');


   //   /* sous module courant */
   //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse'];
   //   /* operations autorises pour cet utilisateur */
   //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_alimentation_caisse']['operations'];



  // $dc=$this->appService->getDossierCourant();
   $operations = $this->appService->getOperations('_module_tresorerie', '_alimentation_caisse', '_show', [true,$TrTransaction->getCode()]);

       

      

        return $this->render('tresorerie/tr_alimentation/show.html.twig', [
                 
                    'transaction'=>$TrTransaction,
                    'operations'=>$operations
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
                          WHERE ug.piece in (32,33)
                        ");
        $UGeneralOperation = $query->getResult();

        $data = array();
        foreach ($UGeneralOperation as $key => $ug) {

            if($ug->getCompte() != null  &&  $ug->getCompteDestinataire() != null){
                $nestedData =  array();
                $nestedData[] = '';
                $nestedData[] = $ug->getCompte()->getDesignation();
                $nestedData[] = $ug->getCompteDestinataire()->getDesignation();
                $nestedData[] = $ug->getDateValider()->format('Y-m-d H:i:s');
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
     * @Route("/list_inde",options = { "expose" = true } , name="tr_alimentation_list_index")
     * 
     */
    public function tr_alimentation_list_index(Connection $connection) {

        // dd();

        $data = array();

        $dc = $this->appService->getDossierCourant();

        $Depot_Retrait = self::requete($connection);

        // $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_index', true);

        
        // dd($action);
        $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_new', true);


        $data = array();
        foreach ($Depot_Retrait as $key => $DR) {

            
                $action =  $this->renderView('tresorerie/tr_alimentation/actions.html.twig',[ 'operations' => $operations , 'id' => $DR['compte_id' ] ]);

                $nestedData =  array();
                $nestedData[] = '';
                $nestedData[] = $DR['description'];
                $nestedData[] = $DR['compte_description'];
                $nestedData[] = number_format($DR['montant_final'],2,","," ");
                // $nestedData[] = $DR['depot'];
                // $nestedData[] = $DR['retrait'];
                // $nestedData[] = $DR['depot'] - $DR['retrait']; 


                $sold_conso = ($DR['depot'] - $DR['retrait']) + ($DR['MT_dest'] - $DR['Mt_src']);
                $nestedData[] = number_format($DR['depot'],2,","," ");
                $nestedData[] = number_format($DR['retrait'],2,","," ");
                $nestedData[] = number_format($sold_conso,2,","," ");



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

        
                $Depot_Retrait = $connection->fetchAll("select retrait.*,depôt.*,src.*,dest.*,p_compte_banque.designation ,p_compte_banque.description as compte_description ,p_dossier.id as id_dossier, p_compte_banque.id as compte_id,  p_compte_banque.montant_final,p_dossier.abreviation ,p_dossier.description, p_compte_banque.type_id
                     
                                from  p_dossier
                inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
                                left join
                                    (SELECT p_dossier.id as is_dossier,u_general.piece_id ,sum(u_general.montant) as depot
                FROM `p_dossier`
                inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
                inner join u_general_operation as u_general on p_compte_banque.id = u_general.compte_id
                where u_general.piece_id in (32) and p_compte_banque.type_id = 4
                group by u_general.piece_id,p_dossier.id
                ) retrait on p_dossier.id = retrait.is_dossier  
                               
                                left join (SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq,  sum(u_general_destinataire.montant) as retrait
                                FROM `p_dossier`
                                inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
                                inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
                                where u_general_destinataire.piece_id in (33) and p_compte_banque.type_id = 4
                                group by u_general_destinataire.piece_id,p_dossier.id,p_compte_banque.designation) depôt on retrait.is_dossier=depôt.id
                               
                               
                                left join (SELECT p_dossier.id as s_dossier,u_general.piece_id ,  sum(u_general.montant) as Mt_src  
                FROM `p_dossier`
                inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
                inner join u_general_operation as u_general on p_compte_banque.id = u_general.compte_id
                where u_general.piece_id in (34) and p_compte_banque.type_id = 4 group by u_general.piece_id,p_dossier.id) src on src.s_dossier=p_dossier.id

                left join (SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq,  sum(u_general_destinataire.montant) as MT_dest
                FROM `p_dossier`
                inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
                                inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
                                where u_general_destinataire.piece_id in (34) and p_compte_banque.type_id = 4
                                group by u_general_destinataire.piece_id,p_dossier.id, p_compte_banque.designation) dest on dest.id=p_dossier.id
                                where p_compte_banque.type_id = 4  
                ORDER BY `id_dossier` ASC"  );


        return   $Depot_Retrait ;
    }



    /**
    * @Route("/excel_conso", name="excel_conso")
    */
    public function excel_conso(Request $request) {

           
           
        
            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            
                       $sheet->setCellValue('A1', 'Compte source');
                       $sheet->setCellValue('b1', 'Compte distination');
                       $sheet->setCellValue('c1', 'Date');
                       $sheet->setCellValue('d1', 'Type');
                       $sheet->setCellValue('e1', 'Montant');
                       $sheet->setCellValue('f1', 'Sold avant');
                       $sheet->setCellValue('g1', 'Sold apres'); 


            $data = array();

            $dc = $this->appService->getDossierCourant();

            $entityManager = $this->getDoctrine()->getManager();
            $query = $entityManager->createQuery(
                            " SELECT ug
                              FROM   App\Entity\UGeneralOperation ug 
                              WHERE ug.piece in (32,33)
                            ");
            $UGeneralOperation = $query->getResult();

             $i = 1;
            foreach ($UGeneralOperation as $key => $ug) {

                // if($ug->getCompte() != null  &&  $ug->getCompteDestinataire() != null){
                //     $nestedData =  array();
                //     $nestedData[] = '';
                //     $nestedData[] = $ug->getCompte()->getDesignation();
                //     $nestedData[] = $ug->getCompteDestinataire()->getDesignation();
                //     $nestedData[] = $ug->getDateValider()->format('Y-m-d H:i:s');
                //     $nestedData[] = $ug->getPiece()->getDesignation(); 
                //     // $nestedData[] = $ug->getMontant();
                //     // $nestedData[] = $ug->getSoldAvant();
                //     // $nestedData[] = $ug->getSoldApres();


                //     $Montant   = $ug->getMontant() ;
                //     $SoldAvant = $ug->getSoldAvant();
                //     $SoldApres = $ug->getSoldApres() ;

                //     $nestedData[] = number_format($Montant,2,","," ");
                //     $nestedData[] = number_format($SoldAvant,2,","," ");
                //     $nestedData[] = number_format($SoldApres,2,","," ");
                    
                //     $nestedData["DT_RowId"] = $ug->getId();
                //     $data[] = $nestedData;     
                // } 



               $i++;
               $sheet->setCellValue('A'.$i, $ug->getCompte()->getDesignation());
               $sheet->setCellValue('b'.$i, $ug->getCompteDestinataire()->getDesignation());
               $sheet->setCellValue('c'.$i, $ug->getDateValider()->format('Y-m-d H:i:s'));
               $sheet->setCellValue('d'.$i, $ug->getPiece()->getDesignation());
               $sheet->setCellValue('e'.$i, $ug->getMontant());
               $sheet->setCellValue('f'.$i, $ug->getSoldAvant());
               $sheet->setCellValue('g'.$i, $ug->getSoldApres()); 
                

                
            }

            
            // $i = 1;
            // foreach ($reclamations as $reclam){
            
            //         //   echo $reclam->('id_reclamation');
            //            $i++;
            //            $sheet->setCellValue('A'.$i, $reclam['id_reclamation']);
            //            $sheet->setCellValue('b'.$i, $reclam['objet']);
            //            $sheet->setCellValue('c'.$i, $reclam['message']);
            //            $sheet->setCellValue('d'.$i, $reclam['created']);
            //         if( !empty($reclam['id_reclamation_reponse'])){
            //            $sheet->setCellValue('e'.$i, 'traitée');
            //            $sheet->setCellValue('f'.$i, 'message_reponse');
            //         }else{
            //            $sheet->setCellValue('e'.$i, 'non');
            //            $sheet->setCellValue('f'.$i, 'NULL');
            //         }
            //            $sheet->setCellValue('g'.$i, $reclam['nom']); 
            //            $sheet->setCellValue('h'.$i, $reclam['prenom']); 
            //            $sheet->setCellValue('i'.$i, $reclam['etab']); 
            //            $sheet->setCellValue('j'.$i, $reclam['forma']);
            //            $sheet->setCellValue('k'.$i, $reclam['promo']);
            //            $sheet->setCellValue('l'.$i, $reclam['code_admission']);
            //            $sheet->setCellValue('m'.$i, $reclam['id_inscription']);
                            
            // }
            
    
            
            foreach(range('A','Z') as $columnID)
            {
                $sheet->getColumnDimension($columnID)->setAutoSize(true);
            }
    
            $filename = 'detail_conso.xlsx';
            $writer = new Xlsx($spreadsheet);
            $writer->save($filename);
    
            $content = file_get_contents($filename);
            header("Content-Disposition: attachment; filename=".$filename);
            unlink($filename);
            exit($content);
    
            return $this->redirectToRoute('tr_alimentation_index');
    }








}
