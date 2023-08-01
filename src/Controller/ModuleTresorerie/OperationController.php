<?php


namespace App\Controller\ModuleTresorerie;

use App\Entity\TrCharge;
use App\Entity\TAchatdemandeinternecab ;
use App\Entity\UVDeviscab ;
use App\Entity\PDossier;
use App\Entity\UATCommandefrscab ;
use App\Entity\TrTransaction ;
use App\Entity\PTransactionType;
use App\Repository\TrTransactionRepository;
use App\Entity\UpPiece;
use App\Entity\UaTReglementfrscab;
use App\Form\TrCompteType;
use App\Form\TrChargeType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use \App\Service\AppService;



/**
 * @Route("tresorerie/operation/old")
 */
class OperationController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }
    
 

      /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="operation_fournisseur_list")
     * 
     */
    public function ListFournisseur(Connection $connection) {
     
        /*dossier courant*/
        $dc = $this->appService->getDossierCourant();

   $entityManager = $this->getDoctrine()->getManager();
          $query = $entityManager->createQuery(
              "SELECT cab.id ,cab.code , cab.datereglement , cab.numcheque ,frn.societe ,fac.id as id_facture , cab.dateecheance ,  fac.datedocasso  as datedocasso ,  fac.code as code_facture  ,  mdp.designation as modepaiement  , bnq.designation as banque ,  cab.mtreglement 
              FROM App\Entity\UaTReglementfrscab cab 
              INNER JOIN cab.factureFournisseur fac
              LEFT JOIN fac.fournisseur frn
              LEFT JOIN cab.modepaiement mdp
              LEFT JOIN cab.banque bnq
              WHERE cab.dossier = :dossier and cab.active=true and (cab.chargeValider is  null or cab.chargeValider=false)
              ORDER BY cab.id DESC"
                  )->setParameter('dossier', $dc->getId());
          $reglements = $query->getResult();
  
       
   $data = array();
        foreach ($reglements as $key => $value) {
            $id=$value['id'];
            $nestedData = array();
           
            $nestedData[] = "<input type='checkbox' name='_action[]' class='action' value='$id'>";

          //  $url = "<a href='" . $this->generateUrl('ua_t_reglement_show', ['id' => $value['id']]) . "'> " . $value['code']. " </a>";
            $nestedData[] =$value['code'];
            $nestedData[] = $value['code_facture']; 
            $nestedData[] = $value['societe'];
            $nestedData[] = $value['datereglement'] ? $value['datereglement']->format('d/m/Y'): null ;
            $nestedData[] =number_format( $value['mtreglement'] , 2); 
            $nestedData[] = $value['modepaiement'];
            $nestedData[] = $value['banque'];  
           
         
  
           
           // $nestedData[] = $value['code_facture'];
          
            $nestedData[] = $value['datedocasso'] ? $value['datedocasso']->format('d/m/Y'): null ;
            $nestedData[] = $value['numcheque'];
            $nestedData[] = $value['dateecheance'] ? $value['dateecheance']->format('d/m/Y'): null ;
          
          
            
  
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }
  
        $json_data = array(
            "data" => $data
        );
       
  
        return new Response(json_encode($json_data));
    }




   /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="operation_client_list")
     * 
     */
    public function ListClients(Connection $connection) {
        $data = array();





        $users = $connection->fetchAll("SELECT cab.code as code_facture,cab.id as id_facture , reg.id, reg.code as codere,DATE_FORMAT(datereglement,'%d/%m/%Y') as datereglement,bq.designation as banque ,mp.designation as modepaiement,numcheque ,cab.code ,DATE_FORMAT(datefacture,'%d/%m/%Y') as datefacture,observation,part.nom as client ,part.societe, cab.montant,mtremise,reg.mtreglement,refDocAsso,st.statut 
        FROM uv_facturecab cab 
       
        INNER JOIN p_dossier dos on dos.id = cab.p_dossier_id 
        INNER JOIN ua_t_reglementfrs reg ON reg.uv_facturecab_id = cab.id
        LEFT JOIN p_modepaiement mp on mp.id=reg.modepaiement_id
        LEFT JOIN u_x_banque bq ON bq.id = reg.x_banque_id
          LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
        LEFT JOIN u_p_partenaire part ON part.id = cab.partenaire_client_id
        WHERE reg.sens = -1  and  dos.id=".$this->appService->getDossierCourant()->getId()." ORDER BY cab.id DESC "

        );
       
        												


        foreach ($users as $key => $value) {
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='$id'>";

           
            $nestedData[] = "<a class='cd_op'>".$value['codere']."</a>";
            $nestedData[] = $value['datereglement'];
           
            $nestedData[] = $value['client'];
            
      

            $nestedData[] = $value['code_facture'] ;
            $nestedData[] = $value['datefacture'];
            $nestedData[] = $value['observation'];
            $nestedData[] = number_format($value['mtreglement'], 2, ',', ' ');
           
           
          
            $nestedData[] = number_format($value['montant'], 2, ',', ' ');
           
            $nestedData[] = $value['modepaiement'];
            $nestedData[] = $value['banque'];
            $nestedData[] = $value['numcheque'];
        



            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }




    /**
     * @Route("/fournisseur", name="operation_fournisseur_index", options={"expose"=true}, methods={"GET"})
     */
    public function indexFournisseur(Breadcrumbs $breadcrumbs): Response {

           //  $TAchatdemandeinternecabRepository->GetLastCode(); 
    //  /* informations modules dossiers Autorisés pour cet utilisateur */
    //  $mc = $this->session->get('moduleCourantTresorerie');
    //  $dc = $this->session->get('dossierCourantTresorerie');
    //  $modules = $this->session->get('modules');
    //  /* opérations autorisés pour cet utilisateur */
    // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_operation_cl_frs']['operations'];

    //  //dump( );
    //  //die;
    //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
    //      'module' => '_tresorerie',
    //      'sousModule' => '_operation_cl_frs',
    //      'operation' => '_index_frs',
    //      'dossier' => $dc->getPrefix()

    //  ]);

    //  $this->getBreadcrumbs('_operation_cl_frs', 'Liste');

    $operations = $this->appService->getOperations('_module_tresorerie', '_operation_cl_frs', '_index_frs', true);


      
      

        return $this->render('tresorerie/operation/index_fournisseur.html.twig',['operations'=>$operations]);
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
     * @Route("/client", name="operation_client_index", options={"expose"=true}, methods={"GET"})
     */
    public function indexClient(Breadcrumbs $breadcrumbs): Response {

        //  $TAchatdemandeinternecabRepository->GetLastCode(); 
//     /* informations modules dossiers Autorisés pour cet utilisateur */
//     $mc = $this->session->get('moduleCourantTresorerie');
//     $dc = $this->session->get('dossierCourantTresorerie');
//     $modules = $this->session->get('modules');
//
//     //dump( );
//     //die;
//     $this->forward('App\Controller\SecurityController::getAccessOperation', [
//         'module' => '_tresorerie',
//         'sousModule' => '_operation_cl_frs',
//         'operation' => '_index_client',
//         'dossier' => $dc->getPrefix()
//
//     ]);
///* opérations autorisés pour cet utilisateur */
//   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_operation_cl_frs']['operations'];
//
//
//     /* sous module courant */
//     $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_operation_cl_frs'];
//
//
//
//
//     $breadcrumbs->prependRouteItem("Applications", "app");
//     
//    
//     $breadcrumbs->addRouteItem("tresorerie", "dossier_courant_tresorerie", ['module_id' =>$mc->getId() ,'dossier_id' => $dc->getId() ]);
//
//     $breadcrumbs->addItem("Opération Client");
   
$operations = $this->appService->getOperations('_module_transaction', '_operation_cl_frs', '_index_client', true);

     return $this->render('tresorerie/operation/index_client.html.twig',['operations'=>$operations]);
 }

     /**
     * @Route("/valider_operation_fournisseur_multiple", name="operation_fournisseur_valider_multiple", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function Valider_fournisseur(ValidatorInterface $validator,Request $request ,TrTransactionRepository $TrTransactionRepository): Response {
        
      
      
      
       

       
      


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            
           // $mc = $this->session->get('moduleCourantTresorerie');
            $dc = $this->appService->getDossierCourant();

            $res= $request->request->get('_action');
            $fournisseur=0;
//dump($res);
//die;
            if(count($res)>0 ){
                $reglement=$this->getDoctrine()->getRepository(UaTReglementfrscab::class)->find(['id'=>$res[0]]);
                $fournisseur=$reglement->getFactureFournisseur()->getFournisseur()->getId();
            }
                 /* Mouvement stock  */
                 for($i=0;$i<count($res);$i++){
                    $reglement=$this->getDoctrine()->getRepository(UaTReglementfrscab::class)->find(['id'=>$res[$i]]);
                    if($fournisseur!=$reglement->getFactureFournisseur()->getFournisseur()->getId()){

                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de générer une charge pour différents fournisseurs .']]);

                      //  dump('frn false');
                       // die;
                    }
                   
                 }
                 $montant=0;
                    for($i=0;$i<count($res);$i++){
                
                        $reglement=$this->getDoctrine()->getRepository(UaTReglementfrscab::class)->find(['id'=>$res[$i]]);
                        $montant+=$reglement->getMtreglement();
                        
                }
                
                $charge = new TrCharge();
                $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('FAF');
                $charge->setPiece($piece);
                $charge->setMontant($montant);
                $charge->setDate(new \DateTime('now'));
                $reglement=$this->getDoctrine()->getRepository(UaTReglementfrscab::class)->find(['id'=>$res[0]]);
                $charge->setFournisseur($reglement->getFactureFournisseur()->getFournisseur());
              //  $charge->setDateDocAsso(new \DateTime('now'));

             //   $charge->setDateEcheance(new \DateTime('now'));
                
             

                $form = $this->createForm(TrChargeType::class, $charge , array('dossier' => $dc));
                     $form->handleRequest($request);
                     
                      
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $reglement=$this->getDoctrine()->getRepository(UaTReglementfrscab::class)->find(['id'=>$res[0]]);
                $charge->setFournisseur($reglement->getFactureFournisseur()->getFournisseur());
                $charge->setCreated(new \DateTime);
                $charge->setActive(true);
    
                $charge->setUserCreated($this->getUser());
                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                $charge->setDossier($dossier);
               
                $charge->setCreated(new \DateTime());
                $type = $this->getDoctrine()->getRepository(PTransactionType::class)->findOneByCode('FAF');
    
                
                    $transaction= new TrTransaction();
                    $transaction->setCompte($charge->getCompte());
                        
                    $transaction->setDesignation($charge->getDesignation());
                    $transaction->setAutreInformation($charge->getAutreInformation());
                    $transaction->setMontant($charge->getMontant()*-1);
                    $transaction->setModepaiement($charge->getModepaiement());
                    $transaction->setDate($charge->getDate());
                    $transaction->setPiece($charge->getPiece());
                    $transaction->setDossier($dossier);
                    $transaction->setType($type);
                    $transaction->setRefDocAsso($charge->getRefDocAsso());
                    $transaction->setCode($TrTransactionRepository->GetLastCode($dc));
                      
                    $entityManager->persist($charge);
                    $entityManager->flush();
                    $entityManager->persist($transaction);
                    $entityManager->flush();
                   

                $code = "CHAR" . substr('000000000' . (string) ltrim($charge->getId()), -9);
                $charge->setCode($code);
                for($i=0;$i<count($res);$i++){
                
                    $reglement=$this->getDoctrine()->getRepository(UaTReglementfrscab::class)->find(['id'=>$res[$i]]);
                    $charge->addReglement($reglement);
                    $reglement->setChargeValider(true);
            }
           
                $charge->setCode($code);
                $charge->setTransaction($transaction);
               
               // $transaction->setType($TYPE);

                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $charge->getId()]]);
            }
                return $this->render('tresorerie/operation/form.html.twig', [
                    'ids' => $res,
                     'form' => $form->createView(),
                            
                            
                                ]
                );

          //  return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La validation  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
}

