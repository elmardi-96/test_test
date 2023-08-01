<?php


namespace App\Controller\moduleUniv\bordereaux;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivTBrdpaiement;
use App\Entity\UnivTPreinscription;
use App\Entity\UnivTReglement;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivAcAnnee; 
use App\Form\UnivTBrdpaiementType;
use App\Repository\UnivTPreinscriptionGrilleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UnivAcEtablissementRepository;
use Doctrine\DBAL\Driver\Connection;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\UnivPStatut ;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use \App\Service\AppService;

/**
 * @Route("/univ/facturation/bordereaux")
 */
class UnivTBrdpaiementController extends AbstractController
{
    private $workflowRegistry;
    public function __construct(SessionInterface $session , Registry $workflowRegistry, AppService  $AppService) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->appService = $AppService;
    }

     /**
      * 
      * @Route("/reglements", name="module_univ_bordereaux_regindex", methods={"GET","POST"}, options={"expose"=true})
      */
    public function reglementAc( Breadcrumbs $breadcrumbs): Response {
    
      
 

           
        $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_reglement', true);
     
       
       
         // return $this->render('module_univ/bordereaux/index_reglements.html.twig',[]);
          return $this->render('module_univ/bordereaux/index_reglements.html.twig', ['operations'=>$operations
           
            ]);
    }

     /**
     *  @Route("/list_reglement_normale", options = { "expose" = true } , name="module_univ_bordereaux_list_reglement_normal")
     */
    public function ListReglements(Connection $connection) {
        $data = array();


   
    
     $entityManager = $this->getDoctrine()->getManager();
     $query = $entityManager->createQuery(
                     "SELECT reg.id , reg.code ,etu.nom ,ope.id as op_id , brd.id as brd_id,etu.prenom, brd.code as code_brd,reg.montant ,ope.code as code_operation , reg.remise, reg.dateReglement as date_reg  , reg.dateEcheance as date_echeance , etab.designation as etablissement , mod.designation as modalite
         FROM App\Entity\UnivTReglement reg 
       
        
         LEFT JOIN reg.modalite mod
         LEFT JOIN reg.brd brd
         JOIN reg.cab ope
         JOIN ope.preinscription pre
         JOIN pre.etudiant etu
         JOIN pre.formation frm
         JOIN frm.etablissement etab
         WHERE 1=1
         GROUP BY reg.id
         ORDER BY reg.id DESC"
             );
            
            
     $reglements = $query->getResult();
    

        foreach ($reglements as $key => $value) {
          //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            //
          //  $nestedData[] = $value['code'];
            $nestedData[] = "<a class='cd_op'>".$value['code']."</a>";
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];

            $url = null;
            if (isset($value['op_id'])) {
               
                $url = "<a href='" . $this->generateUrl('module_univ_facturation_show', ['id' => $value['op_id']]) . "'> " . $value['code_operation'] . " </a>";
            }

            $nestedData[] = $url;





           
            $nestedData[] = $value['date_reg'] ? $value['date_reg']->format('d/m/Y') : null;
            $nestedData[] = number_format($value['montant'],2);
            $nestedData[] = $value['date_echeance'] ? $value['date_echeance']->format('d/m/Y') : null;
            
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['modalite'];
            
           // $nestedData[] = $value['code_brd'];

            $url = null;
            if (isset($value['brd_id'])) {
               
                $url = "<a href='" . $this->generateUrl('univ_t_bordereaux_show', ['id' => $value['brd_id']]) . "'> " . $value['code_brd'] . " </a>";
            }

            $nestedData[] = $url;


         
            
            
          

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    } 




   /**
     * @Route("/reglements/{id}/show",  options={"expose"=true}   ,  name="univ_t_bordereaux_show_reglement", methods={"GET"})
     */
    public function showReglement(UnivTReglement $reglement, Breadcrumbs $breadcrumbs): Response
    {
    
 
         $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_reglement_show', [true, $reglement->getCode()]);
     
        
        return $this->render('module_univ/bordereaux/show_reglement.html.twig', [
            'reglement' => $reglement,
            'operations'=>$operations
        ]);
    }

 
     /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="module_univ_bordereaux_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


  

    
     $entityManager = $this->getDoctrine()->getManager();
     $query = $entityManager->createQuery(
                     "SELECT brd.id , brd.code ,brd.active, brd.description , brd.montant, brd.date  , mod.designation as modalite , eta.designation as etablissement
         FROM App\Entity\UnivTBrdpaiement brd 
       
         JOIN brd.etablissement eta
         JOIN brd.modalite mod
       
         WHERE 1=1
         GROUP BY brd.id
         ORDER BY brd.id DESC"
             );
            
            
     $bordereaux = $query->getResult();
    

        foreach ($bordereaux as $key => $value) {
          //  dump((array)$value['position_actuel']);
            //die; 
          
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            //
            $nestedData[] = "<a class='cd_op'>".$value['code']."</a>";
            $nestedData[] = $value['description'];
            $nestedData[] = number_format($value['montant'],2);
            $nestedData[] = $value['date'] ? $value['date']->format('d/m/Y') : null;
            
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['modalite'];
           if($value['active']==1){
            $nestedData[] = "OUI";
           }else{
            $nestedData[] = "NON";
           }
            
          
          

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }



    /**
     * @Route("/", name="univ_t_bordereaux_index" ,  options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {


            

 
           
   
              
            $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_bordereaux', true);
           
        return $this->render('module_univ/bordereaux/index.html.twig', [
           
        ]);
    }

    /**
     * @Route("/new", name="univ_t_bordereaux_new", methods={"GET","POST"})
     */
    public function new(UnivAcEtablissementRepository $rep , Request $request , Breadcrumbs $breadcrumbs): Response
    {
     
     

       
 
          
  
             
           $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_add_brd', true);
          

        $bordereaux = new UnivTBrdpaiement();
        $form = $this->createForm(UnivTBrdpaiementType::class, $bordereaux);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
      
        if ($form->isSubmitted() && $form->isValid()) {
           
      
     
       
           
       
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($bordereaux);
            $bordereaux->setUserCreated($this->getUser());
            $bordereaux->setActive(true);
            $bordereaux->setCreated(new \DateTime());
            $bordereaux->setPositionActuel(array('creer' => 1));
            $entityManager->flush();
            $code = $bordereaux->getEtablissement()->getAbreviation()."-BRD".substr('000000000' . (string) ltrim($bordereaux->getId()), -9) . "/" . date('Y');
            $bordereaux->setCode($code);
            $entityManager->persist($bordereaux);
            $entityManager->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            
            return $this->redirectToRoute('univ_t_bordereaux_show', ['id' => $bordereaux->getId()]);

       
           
          
        }

        return $this->render('module_univ/bordereaux/new.html.twig', [
            'bordereaux' => $bordereaux,
            'form' => $form->createView(),
            'operations'=>$operations
           
        ]);
    }

    /**
     * @Route("/{id}/show",  options={"expose"=true}   ,  name="univ_t_bordereaux_show", methods={"GET"})
     */
    public function show(UnivTBrdpaiement $bordereaux, Breadcrumbs $breadcrumbs): Response
    {
    

      
         $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_bordereaux_show', [true, $bordereaux->getCode()]);

        
        return $this->render('module_univ/bordereaux/show.html.twig', [
            'bordereaux' => $bordereaux,
            'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/edit", name="univ_t_bordereaux_edit", methods={"GET","POST"})
     */
    public function edit(UnivAcEtablissementRepository $rep ,Request $request, UnivTBrdpaiement $bordereaux, Breadcrumbs $breadcrumbs): Response
    {   
      


 
        $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_bordereaux_edit', [true, $bordereaux->getCode()]);

          
     


        $form = $this->createForm(UnivTBrdpaiementType::class, $bordereaux);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
       // $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);
        if ($form->isSubmitted() && $form->isValid()) {

            
           
                $bordereaux->setUserUpdated($this->getUser());
               
                $bordereaux->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                
              
                $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
                return $this->redirectToRoute('univ_t_bordereaux_index');
          
           
        }

        return $this->render('module_univ/bordereaux/edit.html.twig', [
            'bordereaux' => $bordereaux,
            'form' => $form->createView(),
            'operations'=>$operations
         
        ]);
    }

   


   



  /**
     * 
     *
     * @Route("/{id}/list_reglement",options = { "expose" = true } , name="module_univ_bordereaux_list_reglement")
     * 
     */
    public function ActionListReglementEtab(Connection $connection , UnivTBrdpaiement $bordereaux ) {
        $data = array();


     //   $dc = $this->session->get('dossierCourantUgouvVente');
$id=$bordereaux->getEtablissement()->getId();
$type=$bordereaux->getModalite()->getId();
     $entityManager = $this->getDoctrine()->getManager();
     $query = $entityManager->createQuery(
                     "SELECT reg.id , reg.code ,reg.remise,reg.reference, bq.designation as banque,ope.code as code_facture, etu.nom , etu.prenom, reg.montant , reg.remise, reg.dateReglement as date_reg  , reg.dateEcheance as date_echeance , etab.designation as etablissement , mod.designation as modalite
                     FROM App\Entity\UnivTReglement reg 
                   
                    
                    JOIN reg.modalite mod
                     LEFT JOIN reg.brd bord
                     JOIN reg.cab ope
                     JOIN ope.preinscription pre
                     JOIN pre.etudiant etu
                     JOIN pre.formation frm
                     JOIN frm.etablissement etab
                     LEFT join reg.banque bq
         WHERE etab.id=$id and reg.brd is null and mod.id=$type
         GROUP BY reg.id
         ORDER BY reg.id DESC"
             );
            
            
     $bordereaux = $query->getResult();
    

        foreach ($bordereaux as $key => $value) {
          //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            //
            $nestedData[] = $value['code'];
            $nestedData[] = $value['code_facture'];
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['date_reg'] ? $value['date_reg']->format('d/m/Y') : null;
            $nestedData[] = number_format($value['montant'],2);
            $nestedData[] = number_format($value['remise'],2);
            $nestedData[] = $value['date_echeance'] ? $value['date_echeance']->format('d/m/Y') : null;
          //  $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['reference'];
            $nestedData[] = $value['modalite'];
            $nestedData[] = $value['banque'];
            
          
          

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }



    /**
     * @Route("/{id}/ajouter/reglements",  options={"expose"=true}   ,  name="univ_t_bordereaux_reglement_add", methods={"GET"})
     */
    public function AddReglements(UnivTBrdpaiement $bordereaux, Breadcrumbs $breadcrumbs): Response
    {
      
 
         $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_bordereaux_add_reg', [true, $bordereaux->getCode()]);
 
           
         
 
        return $this->render('module_univ/bordereaux/index_add_reg.html.twig', [
            'bordereaux' => $bordereaux,
            'operations'=>$operations
        ]);
    }





  /**
     * @Route("/{id}/ajouter/reglement/insert", name="univ_t_bordereaux_reglement_ajouter", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function reglementAjouter(ValidatorInterface $validator, Request $request , UnivTBrdpaiement $bordereaux): Response {

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
         
            $reglements=$request->request->get('_array_ids');
        //    dump($request->request->get('_array_ids'));
         //   die;
            
                if (empty($reglements)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Réglement STP !!.']], 403);
                }
              
                foreach ($reglements as $key => $value) {
                    $reglement = $this->getDoctrine()->getRepository(UnivTReglement::class)->find($value);
                    $reglement->setBrd($bordereaux);
                   
                }
                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
           
         
           
           
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
        
    }    





     /**
     * @Route("/{id}/supprimer/reglement",  options={"expose"=true}   ,  name="univ_t_bordereaux_reglement_delate", methods={"GET"})
     */
    public function SuppReglements(UnivTBrdpaiement $bordereaux, Breadcrumbs $breadcrumbs): Response
    {

 
         $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_bordereaux_del_reg', [true, $bordereaux->getCode()]);
 
     
           
         
 
        return $this->render('module_univ/bordereaux/index_del_reg.html.twig', [
            'bordereaux' => $bordereaux,
            'operations'=>$operations
        ]);
    }





  /**
     * @Route("/{id}/supprimerr/reglements/insert", name="univ_t_bordereaux_reglement_supprimer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function reglementSupprimer(ValidatorInterface $validator, Request $request , UnivTBrdpaiement $bordereaux): Response {

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
         
            $reglements=$request->request->get('_array_ids');
        //    dump($request->request->get('_array_ids'));
         //   die;
            
                if (empty($reglements)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Réglement STP !!.']], 403);
                }
              
                foreach ($reglements as $key => $value) {
                    $reglement = $this->getDoctrine()->getRepository(UnivTReglement::class)->find($value);
                    $reglement->setBrd(null);
                   
                }
                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
           
         
           
           
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
        
    }



      /**
     * 
     *
     * @Route("/{id}/list_reglement_delete",options = { "expose" = true } , name="module_univ_bordereaux_list_reglement_delete")
     * 
     */
    public function DeleteListReglementAction(Connection $connection , UnivTBrdpaiement $bordereaux ) {
        $data = array();


     //   $dc = $this->session->get('dossierCourantUgouvVente');
$id=$bordereaux->getId();
$type=$bordereaux->getModalite()->getId();
     $entityManager = $this->getDoctrine()->getManager();
     $query = $entityManager->createQuery(
                     "SELECT reg.id , reg.code ,reg.remise,reg.reference, bq.designation as banque,ope.code as code_facture, etu.nom , etu.prenom, reg.montant , reg.remise, reg.dateReglement as date_reg  , reg.dateEcheance as date_echeance , etab.designation as etablissement , mod.designation as modalite
         FROM App\Entity\UnivTReglement reg 
       
        
         LEFT JOIN reg.modalite mod
        JOIN reg.brd bord
         JOIN reg.cab ope
         JOIN ope.preinscription pre
         JOIN pre.etudiant etu
         JOIN pre.formation frm
         JOIN frm.etablissement etab
         LEFT join reg.banque bq
         WHERE bord.id=$id and mod.id=$type
         GROUP BY reg.id
         ORDER BY reg.id DESC"
             );
            
            
     $bordereaux = $query->getResult();
    

        foreach ($bordereaux as $key => $value) {
          //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            //
            $nestedData[] = $value['code'];
            $nestedData[] = $value['code_facture'];
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['date_reg'] ? $value['date_reg']->format('d/m/Y') : null;
            $nestedData[] = number_format($value['montant'],2);
            $nestedData[] = number_format($value['remise'],2);
            $nestedData[] = $value['date_echeance'] ? $value['date_echeance']->format('d/m/Y') : null;
          //  $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['reference'];
            $nestedData[] = $value['modalite'];
            $nestedData[] = $value['banque'];
          
            
          
          

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }




      /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="module_univ_bordereaux_apply_transitions")
     */
    public function applyTransition(Request $request , UnivTBrdpaiement $bordereaux ) {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($bordereaux);
        if ($workflow->can($bordereaux, $transition)) {
            try {
               // $statut = $this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'sousModule' => $request->request->get('sous_module')]);
                // dump($statut); die(); 
             //   $commande->setStatut($statut);
                $bordereaux->setUserUpdated($this->getUser());
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a encours */
                if (in_array($transition, ['apres_creer_encours'])) {
                  
               
                  
                    $bordereaux->setUserEncours($this->getUser());
                    $bordereaux->setDateEncours(new \DateTime());
                }

     




              


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a validé */
              
                if (in_array($transition, ['apres_encours_valider'])) {
                  
                    $bordereaux->setDateValider(new \DateTime());
                    $bordereaux->setUserValider($this->getUser());
                }
             

                $workflow->apply($bordereaux, $transition);
                $this->get('doctrine')->getManager()->flush();
               
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            } catch (LogicException $exception) {
                
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    } 
    
    



      /**
     * @Route("/{id}/documents", name="module_univ_bordereaux_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(UnivTBrdpaiement $bordereaux, Breadcrumbs $breadcrumbs): Response {
      
 
        $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_bordereaux_doc', [true, $bordereaux->getCode()]);

    
          
        
          return $this->render('module_univ/bordereaux/documents.html.twig', [
                    'bordereaux' => $bordereaux,
                    'operations'=>$operations
                    
        ]);
    }






  /**
     * @Route("/{id}/bordereaux_pdf", name="module_univ_bordereaux_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function bordereauxPDF(UnivTBrdpaiement $bordereaux) {

        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }


$tot=0;
        foreach ($bordereaux->getUnivTReglements() as $key => $value) {
           $tot += $value->getMontant();
        
        }
        

        $formatter = \NumberFormatter::create('fr_FR', \NumberFormatter::SPELLOUT);
        $formatter->setAttribute(\NumberFormatter::DECIMAL, 2);
        $formatter->setAttribute(\NumberFormatter::ROUNDING_MODE, \NumberFormatter::ROUND_HALFUP);
        $number = $formatter->format($tot);


        $html = $this->renderView('module_univ/bordereaux/pdf/pdf.html.twig', [
            'parametre' => $parametre,
            'bordereaux' => $bordereaux,
            'totalNet'=>$number
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
       // $dompdf->setPaper($format, 'portrait');
        $dompdf->setPaper('A4', 'landscape');
        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("bordereaux_pdf.pdf", [
            "Attachment" => false
        ]);
    }
    
    
 
  




}
