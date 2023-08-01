<?php


namespace App\Controller\moduleUniv\honoraires;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivHAlbhon;
use App\Entity\UnivTPreinscription;
use App\Entity\UnivTReglement;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivAcAnnee; 
use App\Entity\UnivHHonens;
use App\Form\UnivHAlbhonType;
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
 * @Route("univ/honoraire/bordereaux")
 */
class UnivHAlbhonController extends AbstractController
{
    private $workflowRegistry;
    public function __construct(SessionInterface $session , Registry $workflowRegistry, AppService  $AppService) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->appService = $AppService;
    }

   

      




   

 
     /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="module_univ_h_albhon_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


     //   $dc = $this->session->get('dossierCourantUgouvVente');

    
     $entityManager = $this->getDoctrine()->getManager();
     $query = $entityManager->createQuery(
                     "SELECT brd.id , brd.code ,brd.active, brd.observation ,  brd.date   , eta.designation as etablissement , pro.designation as promotion  , frm.designation as formation
         FROM App\Entity\UnivHAlbhon brd 
       
         JOIN brd.promotion pro
        JOIN pro.formation frm
        JOIN frm.etablissement eta
       
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
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['promotion'];
            $nestedData[] = $value['observation'];
           
            $nestedData[] = $value['date'] ? $value['date']->format('d/m/Y') : null;
           
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
     * @Route("/", name="module_univ_h_albhon_index" ,  options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        



            $dc = $this->appService->getDossierCourant();
            $operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_reglement', true);
    
        return $this->render('module_univ/honoraire/bordereaux/index.html.twig', [
           
        ]);
    }

    /**
     * @Route("/new", name="module_univ_h_albhon_new", methods={"GET","POST"})
     */
    public function new(UnivAcEtablissementRepository $rep , Request $request , Breadcrumbs $breadcrumbs): Response
    { 
        
        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_add_bordereaux', true);

     
        $bordereaux = new UnivHAlbhon();
        $form = $this->createForm(UnivHAlbhonType::class, $bordereaux);
        $form->handleRequest($request);

     
       //dump($request->request->get('semaine'));
       //dump($request);
       // die;


     

       
         $em = $this->getDoctrine()->getManager();
               $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);
        if ($form->isSubmitted() && $form->isValid()) {

            if ($request->request->get('semaine')==0) {
                $this->addFlash('warning', 'veuillez renseigner une semaine.');
                return $this->render('module_univ/honoraire/bordereaux/new.html.twig', [
                    'bordereaux' => $bordereaux,
                    'form' => $form->createView(),
                    'etablissement'=>$etablissement
                   
                ]);
            }
           
     
       
           
       
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($bordereaux);
            $bordereaux->setUserCreated($this->getUser());
            $bordereaux->setActive(true);
            $bordereaux->setCreated(new \DateTime());
            $bordereaux->setSemaine($request->request->get('semaine'));
            
            $entityManager->flush();
            $code = $bordereaux->getPromotion()->getFormation()->getEtablissement()->getAbreviation()."-BRDH".substr('000000000' . (string) ltrim($bordereaux->getId()), -9) . "/" . date('Y');
            $bordereaux->setCode($code);
            $entityManager->persist($bordereaux);
            $entityManager->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            
            return $this->redirectToRoute('module_univ_h_albhon_show', ['id' => $bordereaux->getId()]);

       
           
          
        }

        return $this->render('module_univ/honoraire/bordereaux/new.html.twig', [
            'bordereaux' => $bordereaux,
            'form' => $form->createView(),
            'etablissement'=>$etablissement
           
        ]);
    }

    /**
     * @Route("/{id}/show",  options={"expose"=true}   ,  name="module_univ_h_albhon_show", methods={"GET"})
     */
    public function show(UnivHAlbhon $bordereaux, Breadcrumbs $breadcrumbs): Response
    {
      




         $dc = $this->appService->getDossierCourant();
         $operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_bordereau_show', [true,$bordereaux->getCode()]);
         
         

        return $this->render('module_univ/honoraire/bordereaux/show.html.twig', [
            'bordereaux' => $bordereaux,
            'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/edit", name="module_univ_h_albhon_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, UnivHAlbhon $bordereaux, Breadcrumbs $breadcrumbs): Response
    {  



        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_bordereau_edit', [true,$bordereaux->getCode()]);
        

        $form = $this->createForm(UnivHAlbhonType::class, $bordereaux);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();

        $etab=$bordereaux->getPromotion()->getFormation()->getEtablissement()->getId();
        $frm=$bordereaux->getPromotion()->getFormation()->getId();
        $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement($etab);
        $formation = $em->getRepository('App:UnivAcEtablissement')->GetFormation($etab, $frm);
      
        if ($form->isSubmitted() && $form->isValid()) {



            if ($request->request->get('semaine')==0) {
                $this->addFlash('warning', 'veuillez renseigner une semaine.');
              
        return $this->render('module_univ/honoraire/bordereaux/edit.html.twig', [
            'bordereaux' => $bordereaux,
            'form' => $form->createView(),
            'etablissement'=>$etablissement,
            'formation'=>$formation
         
        ]);
            }

            
           
                $bordereaux->setUserUpdated($this->getUser());
               
                $bordereaux->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                
              
                $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
                return $this->redirectToRoute('module_univ_h_albhon_index');
          
           
        }

        return $this->render('module_univ/honoraire/bordereaux/edit.html.twig', [
            'bordereaux' => $bordereaux,
            'form' => $form->createView(),
            'etablissement'=>$etablissement,
            'formation'=>$formation,
            'operations'=>$operations
         
        ]);
    }

   



  
 
  
    /**
     * 
     *
     * @Route("/{id}/honEns", options = { "expose" = true } , name="module_univ_h_albhon_list_honens")
     * 
     */
    public function ListHonEns(Connection $connection ,UnivHAlbhon $bordereaux) {
        $data = array();


       // $dc = $this->session->get('dossierCourantUgouvVente');


        $reglement = $connection->fetchAll("SELECT hon.id, emp.code as code_seance , gra.designation as grad_designation ,DATE_FORMAT(emp.start,'%d/%m/%Y')  as date,
        DATE_FORMAT(emp.start,'%H:%i') as heur_db, DATE_FORMAT(emp.heur_fin ,'%H:%i') as heur_fin ,hon.code ,hon.`brd_id`
        ,ens.nom , ens.prenom , hon.nbr_heure , hon.montant , hon.statut , emp.description , TIMESTAMPDIFF(MINUTE,  emp.heur_db , emp.heur_fin)/60 AS  nbr_heures , 
         etab.abreviation as abreviation_etablissement , frm.abreviation as abreviation_formation ,
            prm.designation as designation_promotion ,ann.designation as designation_annee ,   
            sem.designation as designation_semestre, modd.designation as designation_module ,
            ele.designation as designation_element  , nat.designation as designation_nature_epreuve ,
            nat.abreviation as abreviation_nature_epreuve 
        
        FROM `univ_h_honens` hon
        INNER JOIN univ_pl_emptime  emp  ON hon.`seance_id` = emp.id
        INNER JOIN univ_pr_programmation prog ON prog.id = emp.programmation_id
        INNER JOIN univ_ac_annee ann on ann.id=prog.annee_id
        INNER JOIN univ_ac_formation frm on frm.id=ann.formation_id
        INNER JOIN univ_ac_etablissement etab on etab.id=frm.etablissement_id
        INNER JOIN univ_ac_element ele on ele.id=prog.element_id
        INNER join univ_ac_module modd on modd.id=ele.module_id
        INNER JOIN univ_ac_semestre sem on sem.id=modd.semestre_id
        INNER JOIN univ_ac_promotion prm on prm.id=sem.promotion_id
        INNER JOIN univ_pr_nature_epreuve nat on nat.id=prog.nature_epreuve_id
        INNER JOIN univ_p_enseignant ens on ens.id=hon.`enseignant_id`
        INNER JOIN univ_p_grade gra on gra.id=ens.grade_id
        
        WHERE hon.statut='R' and ann.validation_academique = 'non' and hon.`brd_id` is null and  emp.semaine=".$bordereaux->getSemaine() ." and  prm.id=".$bordereaux->getPromotion()->getId()
        
        );
    
        foreach ($reglement as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
          //  $nestedData[] = ++$key;
            $nestedData[] ="<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['code_seance'];
           
         
            $nestedData[] = $value['date'];
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['grad_designation'];
            $nestedData[] = $value['nbr_heure'];
            $nestedData[] = $value['montant'];
            $nestedData[] = $value['abreviation_etablissement'];
            $nestedData[] = $value['abreviation_formation'];
            $nestedData[] = $value['designation_annee'];
            $nestedData[] = $value['designation_promotion'];
            $nestedData[] = $value['designation_semestre'];
            $nestedData[] = $value['designation_module'];
            $nestedData[] = $value['designation_element'];
            $nestedData[] = $value['abreviation_nature_epreuve'];
      
            $nestedData[] = $value['statut'];

          

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
     * 
     *
     * @Route("/{id}/honEns/delate", options = { "expose" = true } , name="module_univ_h_albhon_list_honens_delete")
     * 
     */
    public function ListHonEnsDelete(Connection $connection ,UnivHAlbhon $bordereaux) {
        $data = array();


      

        $reglement = $connection->fetchAll("SELECT hon.id, emp.code as code_seance , gra.designation as grad_designation ,DATE_FORMAT(emp.start,'%d/%m/%Y')  as date,
        DATE_FORMAT(emp.start,'%H:%i') as heur_db, DATE_FORMAT(emp.heur_fin ,'%H:%i') as heur_fin ,hon.code ,hon.`brd_id`
        ,ens.nom , ens.prenom , hon.nbr_heure , hon.montant , hon.statut , emp.description , TIMESTAMPDIFF(MINUTE,  emp.heur_db , emp.heur_fin)/60 AS  nbr_heures , 
         etab.abreviation as abreviation_etablissement , frm.abreviation as abreviation_formation ,
            prm.designation as designation_promotion ,ann.designation as designation_annee ,   
            sem.designation as designation_semestre, modd.designation as designation_module ,
            ele.designation as designation_element  , nat.designation as designation_nature_epreuve ,
            nat.abreviation as abreviation_nature_epreuve 
        
        FROM `univ_h_honens` hon
        INNER JOIN univ_pl_emptime  emp  ON hon.`seance_id` = emp.id
        INNER JOIN univ_pr_programmation prog ON prog.id = emp.programmation_id
        INNER JOIN univ_ac_annee ann on ann.id=prog.annee_id
        INNER JOIN univ_ac_formation frm on frm.id=ann.formation_id
        INNER JOIN univ_ac_etablissement etab on etab.id=frm.etablissement_id
        INNER JOIN univ_ac_element ele on ele.id=prog.element_id
        INNER join univ_ac_module modd on modd.id=ele.module_id
        INNER JOIN univ_ac_semestre sem on sem.id=modd.semestre_id
        INNER JOIN univ_ac_promotion prm on prm.id=sem.promotion_id
        INNER JOIN univ_pr_nature_epreuve nat on nat.id=prog.nature_epreuve_id
        INNER JOIN univ_p_enseignant ens on ens.id=hon.`enseignant_id`
        INNER JOIN univ_p_grade gra on gra.id=ens.grade_id
        
        WHERE hon.statut='R' and ann.validation_academique = 'non' and hon.`brd_id` is not null and prm.id=".$bordereaux->getPromotion()->getId()."
        "
        );
        /*
         *
         * 
         * 
         */

//dump($users);
//die;
        foreach ($reglement as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
          //  $nestedData[] = ++$key;
            $nestedData[] ="<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['code_seance'];
           
         
            $nestedData[] = $value['date'];
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['grad_designation'];
            $nestedData[] = $value['nbr_heure'];
            $nestedData[] = $value['montant'];
            $nestedData[] = $value['abreviation_etablissement'];
            $nestedData[] = $value['abreviation_formation'];
            $nestedData[] = $value['designation_annee'];
            $nestedData[] = $value['designation_promotion'];
            $nestedData[] = $value['designation_semestre'];
            $nestedData[] = $value['designation_module'];
            $nestedData[] = $value['designation_element'];
            $nestedData[] = $value['abreviation_nature_epreuve'];
            
            $nestedData[] = $value['statut'];

          

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
     * @Route("/{id}/ajouter/reglements/supprimer",  options={"expose"=true}   ,  name="module_univ_h_albhon_reglement_delete", methods={"GET"})
     */
    public function DeleteHons(UnivHAlbhon $bordereaux, Breadcrumbs $breadcrumbs): Response
    {
     

         

$dc = $this->appService->getDossierCourant();
$operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_bordereau_delR', [true,$bordereaux->getCode()]);



        return $this->render('module_univ/honoraire/bordereaux/index_del_reg.html.twig', [
            'bordereaux' => $bordereaux,
            'operations'=>$operations
        ]);
    }




      /**
     * @Route("/{id}/ajouter/reglements",  options={"expose"=true}   ,  name="module_univ_h_albhon_reglement_add", methods={"GET"})
     */
    public function AddHons(UnivHAlbhon $bordereaux, Breadcrumbs $breadcrumbs): Response
    {
     



$operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_bordereau_addR', [true,$bordereaux->getCode()]);


        return $this->render('module_univ/honoraire/bordereaux/index_add_reg.html.twig', [
            'bordereaux' => $bordereaux,
            'operations'=>$operations
        ]);
    }




      /**
     * @Route("/{id}/ajouter/reglement/insert", name="module_univ_h_albhon_reglement_ajouter", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function reglementAjouter(ValidatorInterface $validator, Request $request , UnivHAlbhon $bordereaux): Response {

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
                    $reglement = $this->getDoctrine()->getRepository(UnivHHonens::class)->find($value);
                    $reglement->setBrd($bordereaux);
                   
                }
                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
           
         
           
           
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
        
    }



       /**
     * @Route("/{id}/supprimer/reglement/insert", name="module_univ_h_albhon_reglement_supprimer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function reglementDelete(ValidatorInterface $validator, Request $request , UnivHAlbhon $bordereaux): Response {

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
                    $reglement = $this->getDoctrine()->getRepository(UnivHHonens::class)->find($value);
                    $reglement->setBrd(null);
                   
                }
                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
           
         
           
           
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
        
    }



    
      /**
     * @Route("/{id}/documents", name="module_univ_h_albhon_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(UnivHAlbhon $bordereaux, Breadcrumbs $breadcrumbs): Response {
    
       
    
      
        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_bordereau_doc', [true,$bordereaux->getCode()]);
        
          return $this->render('module_univ/honoraire/bordereaux/documents.html.twig', [
                    'bordereaux' => $bordereaux,
                    'operations'=>$operations
                    
        ]);
    }




    
  /**
     * @Route("/{id}/bordereaux_pdf", name="module_univ_h_albhon_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function bordereauxPDF(UnivHAlbhon $bordereaux) {

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

   


        

      


        $html = $this->renderView('module_univ/honoraire/bordereaux/pdf/pdf.html.twig', [
          
            'bordereaux' => $bordereaux,
           
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
     
        $dompdf->setPaper('A4', 'landscape');
        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("bordereaux_pdf.pdf", [
            "Attachment" => false
        ]);
    }




       /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="module_univ_h_albhon_apply_transitions")
     */
    public function applyTransition(Request $request , UnivHAlbhon $bordereaux ) {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($bordereaux);
        if ($workflow->can($bordereaux, $transition)) {
            try {
         
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


}
