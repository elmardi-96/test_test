<?php

namespace App\Controller\ModuleRessourceHumaine;

use App\Entity\GrsPaie;
use App\Entity\PDossier;
use App\Entity\PGlobalParamDet;

use App\Entity\UGeneralOperation;
use App\Entity\UpPiece;
use App\Form\GrsPaieType;
use App\Form\GrsPaiedetType;

use App\Entity\GrsEmploye;
use App\Entity\GrsPaiedet;
use Doctrine\DBAL\Driver\Connection;




use Symfony\Component\Workflow\Registry;

use App\Repository\GrsSoldeCongeRepository;
use App\Repository\GrsGrilleCongeRepository;
use App\Repository\GrsPaieRepository;
use App\Service\AppService;
use DoctrineExtensions\Query\Mysql\Month;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Workflow\WorkflowInterface;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;

use Symfony\Component\Workflow\Exception\LogicException;

use Symfony\Component\Workflow\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("grs/cnss")
 */
class GrsPaieCnssController extends AbstractController
{


    private $workflowRegistry;

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, Registry $workflowRegistry, AppService  $AppService)
    {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }

    /**
     * @Route("/list", name="grs_cnss_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(GrsPaie::class);
        $dc = $this->appService->getDossierCourant();
        $type = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->findOneByK('cnss');
        $paies = $repository->findBy(['dossier'=>$dc,'active' => true , 'type'=>$type]);

        $data = array();
        foreach ($paies as $key => $paie) {
            $id = $paie->getId();
            $nestedData = array();
            $nestedData[] = $paie->getId();
            $nestedData[] = "<a class='cd_op'>" . $paie->getCode() . "</a>";
           
            $nestedData[] = $paie->getDescription();
            $nestedData[] = $paie->getDateOperation() ? $paie->getDateOperation()->format('d/m/Y') : null;
            $nestedData[] = $paie->getAnnee();
           
            $nestedData[] =$paie->getChoices();
             $nestedData[] =number_format($paie->getdetailMontant(), 2, ',', ' '); 
          
            $nestedData[] = implode(" ", array_keys($paie->getPositionActuel()));





            if (($paie->getActive()) == 1) {
                $nestedData[] = 'Active';
            } else {
                $nestedData[] = 'Désactivé';
            }

            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }



        $json_data = array(
            "data" => $data
        );

        //        dump(json_encode($json_data));
        //        die();
        return new Response(json_encode($json_data));
    }


    /**
     * @Route("/", name="grs_cnss_index", methods={"GET"},  options={"expose"=true}  ,  methods={"GET","POST"} )
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs, GrsSoldeCongeRepository $repo): Response
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        /*$mc = $this->session->get('moduleCourantGrs');
       $dc = $this->session->get('dossierCourantGrs');
       $modules = $this->session->get('modules');

       /* verifier le doit d'accés a cette opération * /

       $this->forward('App\Controller\SecurityController::getAccessOperation', [
           'module' => '_grs',
           'sousModule' => '_grs_cnss',
           'operation' => '_index',
           'dossier' => $dc->getPrefix()

       ]);*/

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_grs', '_grs_cnss', '_index', true);

        /* opérations autorisés pour cet utilisateur */
        /* $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_grs_cnss']['operations'];



       /* sous module courant * /
       $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_grs_cnss'];







      
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("RH(paie)", "grs_paie_index");
        $breadcrumbs->addItem("List");*/

        return $this->render('module_ressource_humaine/grs_paie_cnss/index.html.twig', ['operations' => $operations]);
    }




    /**
     * @Route("/new", name="grs_cnss_new", methods={"GET"},  options={"expose"=true}  ,  methods={"GET","POST"} )
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, GrsPaieRepository $rep,Connection $connection): Response
    {
        
        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_grs', '_grs_cnss', '_new', true);
        //dump($dc);die();

        /* informations modules dossiers Autorisés pour cet utilisateur */
        /* $mc = $this->session->get('moduleCourantGrs');
       $dc = $this->session->get('dossierCourantGrs');
       $modules = $this->session->get('modules');

       /* verifier le doit d'accés a cette opération * /

       $this->forward('App\Controller\SecurityController::getAccessOperation', [
           'module' => '_grs',
           'sousModule' => '_grs_cnss',
           'operation' => '_new',
           'dossier' => $dc->getPrefix()

       ]);*/

        /* opérations autorisés pour cet utilisateur */
        /* $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_grs_cnss']['operations'];*/



        /*$breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("RH(paie)", "grs_paie_index");
        $breadcrumbs->addItem("Ajouter");*/
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc->getId());
        $paie = new GrsPaie();
        $paie->setDateOperation(new \DateTime('now')); 
        $paie->setAnnee( date("Y"));
        $paie->setMois( date("m"));
        $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('ODP');
        $type = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->findOneByK('cnss');
        $paie->setType($type);
        $paie->setPiece($piece);
        $paie->setDescription("CNSS ". $dossier->getAbreviation() ." ". date('m') ."/". date('Y'));
        
        $paie->setActive(true);
        
        $paie->setDossier($dossier);
        
        
        
       
        $form = $this->createForm(GrsPaieType::class, $paie, ['dossier' => $dc]);
        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
      

            $entityManager = $this->getDoctrine()->getManager();

            $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('ODP');
            $paie->setPiece($piece);
            $paie->setPositionActuel(array('creer' => 1));
            
            $paie->setUserCreated($this->getUser());
            $paie->setCreated(new \DateTime());
            $paie->setCode($rep->GetLastCode($paie->getMois(),$paie->getAnnee(),'CNSS'));

            //$paie->setDossie($dc);
            //$paie->setDossier($dossier);
            $paie->setActive(true);
            $entityManager->persist($paie);

            

            $entityManager->flush();




            

   
         
            
         







            //$this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $paie->getId()]]);
        }



        return $this->render('module_ressource_humaine/grs_paie_cnss/new.html.twig', [
            'operations' => $operations,
            'paie' => $paie,
            'form' => $form->createView()
        ]);
    }


    /**
     * @Route("/{id}/edit", name="grs_cnss_edit", methods={"GET"},  options={"expose"=true}  ,  methods={"GET","POST"} )
     */
    public function edit(GrsPaie $paie, Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response
    {

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_grs', '_grs_cnss', '_edit', true);
        //dump($dc);die();

        /* informations modules dossiers Autorisés pour cet utilisateur */
        /* $mc = $this->session->get('moduleCourantGrs');
       $dc = $this->session->get('dossierCourantGrs');
       $modules = $this->session->get('modules');

       /* verifier le doit d'accés a cette opération * /

       $this->forward('App\Controller\SecurityController::getAccessOperation', [
           'module' => '_grs',
           'sousModule' => '_grs_cnss',
           'operation' => '_new',
           'dossier' => $dc->getPrefix()

       ]);*/

        /* opérations autorisés pour cet utilisateur */
        /* $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_grs_cnss']['operations'];*/



        /*$breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("RH(paie)", "grs_paie_index");
        $breadcrumbs->addItem("Ajouter");*/


        $form = $this->createForm(GrsPaieType::class, $paie, ['dossier' => $dc]);
        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            //$dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();
            $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('ODP');
            $paie->setPiece($piece);
            $paie->setUserUpdated($this->getUser());
            $paie->setUpdated(new \DateTime());
            $entityManager->persist($paie);




            $entityManager->flush();

        
          
          








          
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $paie->getId()]]);
        }



        return $this->render('module_ressource_humaine/grs_paie_cnss/edit.html.twig', [
            'operations' => $operations,
            'paie' => $paie,
            'form' => $form->createView()
        ]);
    }





    /**
     * @Route("/apply-transition/{id}", methods={"POST"}, options={"expose"=true} , name="grs_cnss_apply_transitions")
     */
    public function applyTransition(Request $request, GrsPaie $paie, \App\Repository\UGeneralOperationRepository $UGeneralOperationRepository)
    {
        //die('hr');

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($paie);
        if ($workflow->can($paie, $transition)) {
            //die("ddd");
            try {
                //$statut = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'module' => 'RCF', 'fonction' => 'ACHAT']);
                // dump($statut); die(); 
                //   $livraison->setStatut($statut);
                $paie->setUserUpdated($this->getUser());

                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a validé */

                if (in_array($transition, ['apres_creer_valider'])) {

                    //$facture->setPStatutgrv($PStatutgrv);
                    $paie->setDateValider(new \DateTime());
                    $paie->setUserValider($this->getUser());
                    $workflow->apply($paie, $transition);
                    $this->get('doctrine')->getManager()->flush();
    
                    return $this->json(['code' => 201, 'id' => $paie->getId(), 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
                }

                if (in_array($transition, ['apres_valider_generer'])) {
                   

                    $paie->setDateValider(new \DateTime());
                    $paie->setUserValider($this->getUser());
                    $entityManager = $this->getDoctrine()->getManager();
                   
                   
                    $uGeneralOperation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findOneBy(['paie'=>$paie]);
                   
                   
                    if( !$uGeneralOperation){
                        $uGeneralOperation = new UGeneralOperation();
                        $uGeneralOperation->setActive(true);
                      
                        $uGeneralOperation->setPiece($paie->getPiece());
                        $uGeneralOperation->setDate($paie->getDateOperation());
                      //  $uGeneralOperation->setEmploye($detail->getEmploye());
                        $uGeneralOperation->setDesignation($paie->getDescription());
                        $uGeneralOperation->setDossier($paie->getDossier());

                        $uGeneralOperation->setUserCreated($this->getUser());
                        $uGeneralOperation->setCreated(new \DateTime());

                        
                       
                        $uGeneralOperation->setPaie($paie);
                       
                  
                        $uGeneralOperation->setCode($UGeneralOperationRepository->GetLastCode($this->appService->getDossierCourant()));
                          
                    }else{

                        $uGeneralOperation->setPiece($paie->getPiece());
                        $uGeneralOperation->setDate($paie->getDateOperation());
                      //  $uGeneralOperation->setEmploye($detail->getEmploye());
                        $uGeneralOperation->setDesignation($paie->getDescription());
                        $uGeneralOperation->setDossier($paie->getDossier());



                    }


                    $montant=0;

                    foreach ( $paie->getDetails() as $key => $detail) {
                        $montant+=$detail->getMontant();
                       // $uGeneralOperation->setMontant();                 
                    }

                    $uGeneralOperation->setMontant($montant);
                    $entityManager->persist($uGeneralOperation);
                    $entityManager->flush();

                }


                if (in_array($transition, ['apres_valider_creer'])) {
                    //   $reglements= array();

                }





                $workflow->apply($paie, $transition);
                $this->get('doctrine')->getManager()->flush();

                return $this->json(['code' => 200, 'id' => $paie->getId(), 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * @Route("/{id}", name="grs_cnss_show",   options = { "expose" = true }, methods={"GET"})
     */
    public function show(GrsPaie $paie, Breadcrumbs $breadcrumbs): Response
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantGrs');
        // $dc = $this->session->get('dossierCourantGrs');
        // $modules = $this->session->get('modules');

        // /* verifier le doit d'accés a cette opération */

        // $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //     'module' => '_grs',
        //     'sousModule' => '_emp',
        //     'operation' => '_show',
        //     'dossier' => $dc->getPrefix()

        // ]);

        // /* opérations autorisés pour cet utilisateur */
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_emp']['operations'];



        // /* sous module courant */
        // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_emp'];


        // /* navigation  */
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_grs_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem($sousModule['titre'], "grs_employe_index");
        // $breadcrumbs->addItem($grsEmploye->getCode());

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_grs', '_grs_cnss', '_show', [true, $paie->getCode()]);

        return $this->render('module_ressource_humaine/grs_paie_cnss/show.html.twig', [
            'paie' => $paie,
            'operations' => $operations
        ]);
    }


        /**
     * @Route("/{id}/employers", name="grs_cnss_emp",   options = { "expose" = true },methods={"GET","POST"} )
     */
    public function Employers( Request $request,GrsPaie $paie, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response
    {
       
        $dc = $this->appService->getDossierCourant();

        $paiedet = new GrsPaiedet();

        $paiedet->setCab($paie);
        
        $a_date = '1-'.$paie->getMois().'-'.$paie->getAnnee();

        $paiedet->setDateDebut(new \DateTime($a_date)); 
        $paiedet->setDateFin(new \DateTime(date("t-m-Y", strtotime($a_date)))); 
      
       // $paie->setAnnee( date("Y"));
        //$paie->setMois( date("m"));
        
        $form = $this->createForm(GrsPaiedetType::class, $paiedet, ['dossier' => $dc , 'active'=>0]);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
           
           
        $GrsPaiedet = $this->getDoctrine()->getRepository(GrsPaiedet::class)->findOneBy(['employe'=> $paiedet->getEmploye() , 'cab'=> $paiedet->getCab()]);
            

            if( $GrsPaiedet){
       return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'L\'employé est deja mentionné.', 'data' => $paie->getId()]]);  
     //  return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 403);

            }

            $entityManager = $this->getDoctrine()->getManager();
                 $paiedet->setUserCreated($this->getUser());
        $paiedet->setCreated(new \DateTime());
            $entityManager->persist($paiedet);

            

            $entityManager->flush();




            

          
            
     
          

          
           // $paie->setActive(true);
            









            //$this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $paie->getId()]]);  

        }   

       // $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_grs', '_grs_cnss', '_employes', [true, $paie->getCode()]);

        return $this->render('module_ressource_humaine/grs_paie_cnss/employers.html.twig', [
            'paie' => $paie,
            'operations' => $operations,
            'form' => $form->createView()
        ]);
    }



          /**
     * @Route("/{id}/generer", name="grs_cnss_generer",   options = { "expose" = true },methods={"GET","POST"} )
     */
    public function generer( Request $request,GrsPaie $paie, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response
    {
       
        $dc = $this->appService->getDossierCourant();

     
        $operations = $this->appService->getOperations('_module_grs', '_grs_cnss', '_generer', [true, $paie->getCode()]);

        return $this->render('module_ressource_humaine/grs_paie_cnss/generer.html.twig', [
            'paie' => $paie,
            'operations' => $operations,
          
        ]);
    }


      /**
     * @Route("/{id}/employerslist", name="grs_cnss_employe_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function listEmploye(GrsPaie $paie , Connection $connection): Response
    {

        
        
$sql="
SELECT emp.id , emp.code, emp.nom , emp.prenom , emp.cin , emp.salaire_base FROM `grs_employe` emp


WHERE  emp.id not in ( select emp1.id from grs_paiedet det left join grs_paie cab on cab.id =det.cab_id left join  grs_employe emp1 on emp1.id=det.employe_id where  cab.annee=".$paie->getAnnee()." and cab.mois=".$paie->getMois()." )"
;





        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<a class='cd_op'>" . $value['code'] . "</a>";
            $nestedData[] =$value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['cin'];
            $nestedData[] = $value['salaire_base'];
           
            $nestedData[] ="<center><a class='add_emp'>" . "" . "<i class='fa fa-plus'></i></a></center>";
          
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }



        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }



       /**
     * @Route("/{id}/employerslist_detail", name="grs_cnss_detail_employe_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function listEmployePaieDetail(GrsPaie $paie): Response
    {

       
       
      
        $data = array();
       
        foreach ( $paie->getDetails() as $key => $detail) {
            $id = $detail->getId();
            $nestedData = array();
        


            $nestedData[] = "<a class='cd_op'>" . $detail->getEmploye()->getCode() . "</a>";
            $nestedData[] = $detail->getEmploye()->getNom()." ".$detail->getEmploye()->getPrenom();
            $nestedData[] = $detail->getDescription();
           
            $nestedData[] = $detail->getDateDebut() ? $detail->getDateDebut()->format('Y-m-d') :null;
            $nestedData[] = $detail->getDateFin() ? $detail->getDateFin()->format('Y-m-d') :null;
           
            $nestedData[] = $detail->getMontant() ? number_format($detail->getMontant(), 2, '.', '') : null;
            $nestedData[] ="<center><a class='del_emp'>" . "" . " <i class='fa fa-trash'></i></center>";
          
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }



        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }



      /**
     * @Route("/{id}/employersgenerer_detail", name="grs_cnss_detail_employe_list_generer",  options={"expose"=true} ,methods={"GET"})
     */
    public function listEmployePaieGenerer(GrsPaie $paie): Response
    {

       
       
      
        $data = array();
       
        foreach ( $paie->getDetails() as $key => $detail) {
            $id = $detail->getId();
            $nestedData = array();

          

           /* $operation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findOneBy(['paie'=>$paie, 'employe'=>$detail->getEmploye()]);
            $icon='';
            if($operation){
  
                $icon = "<i class='fa fa-check' title='générer' style='color:green;'></i> ";
            }else{
               $icon = "<i class='fa fa-close' title=' non générer' style='color:red;'></i>";
            }*/
            $nestedData[] = "<a class='cd_op'>" . $detail->getEmploye()->getCode() . "</a>";
            $nestedData[] = $detail->getEmploye()->getNom()." ".$detail->getEmploye()->getPrenom();
            $nestedData[] = $detail->getDescription();
           
            $nestedData[] = $detail->getDateDebut() ? $detail->getDateDebut()->format('Y-m-d') :null;
            $nestedData[] = $detail->getDateFin() ? $detail->getDateFin()->format('Y-m-d') :null;
            $nestedData[] = $detail->getMontant() ? number_format($detail->getMontant(), 2, '.', '') : null;
           
          //  $nestedData[] = $icon;
          
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }



        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }


    
       /**
     * @Route("/{id}/montant_employe", name="grs_cnss_montant_employe",  options={"expose"=true} ,methods={"GET"})
     */
    public function getEmployePaie(Request $request,GrsEmploye $emp ): Response
    {
        if ($request->isXmlHttpRequest()) {
        $employe = $this->getDoctrine()->getRepository(GrsEmploye::class)->find($emp);

      

if( $employe){
    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'montant' => $employe->getSalaireBase()]], 200);


}

    } else {
        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
    }
    }



       /**
     * @Route("/{id}/{emp}/delete_employe", name="grs_cnss_delete_employe",  options={"expose"=true} ,methods={"GET"})
     */
    public function DeleteEmployeCnss(Request $request,GrsPaie $paie , $emp): Response
    {
        if ($request->isXmlHttpRequest()) {

        $GrsPaiedet = $this->getDoctrine()->getRepository(GrsPaiedet::class)->findOneBy(['id'=>$emp , 'cab'=>$paie]);
     
        $operation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findOneBy(['paie'=>$paie]);

if($GrsPaiedet && !$operation){
    $entityManager = $this->getDoctrine()->getManager();
      
    $paie->removeDetail($GrsPaiedet);
    
            $entityManager->persist($GrsPaiedet);
            $entityManager->flush(); 
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué .']], 200);

}else{
    return $this->json(['code' => 403, 'message' => ['title' => 'attention', 'text' => 'impossible d\'effectuer cette suppression .']], 200);

}
 



    } else {
        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
    }
    }




   /**
     * @Route("{id}/{token}/delete", name="grs_cnss_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteDevisCab(Request $request, GrsPaie $paie, $token): Response {
        if ($this->isCsrfTokenValid('delete' . $paie->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($paie)) {


                    if ($paie->getOperations()) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'attention', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé).']], 200);
                    }
                
                    $entityManager->remove($paie);
                }
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'attention', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'attention', 'text' => 'Données Incorrect']]);
        }
    }    
}
