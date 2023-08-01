<?php


namespace App\Controller\moduleUniv\honoraires;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivHAlbhon;
use App\Entity\UnivHHonens;
use App\Entity\UnivTReglement;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivAcAnnee; 
use Symfony\Component\Form\Extension\Core\Type\DateType;
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
use Symfony\Component\Validator\Constraints\NotBlank;
use \App\Service\AppService;

/**
 * @Route("univ/honoraire/Gestion")
 */
class UnivHHonensController extends AbstractController
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
     * @Route("/list",options = { "expose" = true } , name="module_univ_h_honens_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


     //   $dc = $this->session->get('dossierCourantUgouvVente');

    
     $entityManager = $this->getDoctrine()->getManager();
     $query = $entityManager->createQuery(
                     "SELECT hon.id , hon.code ,hon.active, hon.montant ,  hon.dateAnnulation   , hon.dateReglement  , hon.nbrHeure , hon.montant , ens.nom , 
                     ens.prenom , ann.designation as annee , frm.abreviation as formation , prm.designation as promotion , etab.abreviation as etablissement,
                     mdl.designation as module ,sem.designation as semestre, ele.designation as element , hon.statut as statut , gr.designation as grade , sc.code as seance
         FROM App\Entity\UnivHHonens hon
       
         JOIN hon.enseignant ens
         JOIN ens.grade gr
       JOIN hon.seance sc
       JOIN sc.programmation prog
       JOIN prog.element ele 
       JOIN ele.module mdl
       JOIN mdl.semestre sem
       JOIN sem.promotion prm
       JOIN prm.formation frm
       JOIN frm.etablissement etab
       JOIN prog.annee ann
       
         WHERE 1=1 
         GROUP BY hon.id
         ORDER BY hon.id DESC"
             );
            
            
     $reglements = $query->getResult();
 
   
        foreach ($reglements as $key => $value) {
        
          //  ORD	CHECK	COURS	D.HEURE	NOM	PRENOM	GRD	N.HEURE	MONTANT	ETB	FRM	ANNEE	PRM	SEM	MDL	ELE	ST
            $id = $value['id'];
            $nestedData = array();

           
            $st=null;
            $check=null;
            
            if($value['statut']=='A'){
                $st =" <span><i class='fa fa-circle' style='color:#ff0e00'></i></span>"."   " ;
                $check='disabled';
               }elseif($value['statut']=='R'){
                $st =" <span><i class='fa fa-circle' style='color:#1ab394'></i></span>"."   " ;
                $check='disabled';
               }elseif($value['statut']=='E'){
                $st =" <span><i class='fa fa-circle' style='color:#d1dade'></i></span>"."   ";
               }

            $nestedData[] = $st."<input type='checkbox' $check class='action$check' name='_action' value='$id'>";
            //
            $nestedData[] = "<a class='cd_op'>".$value['code']."</a>";


            $nestedData[] = $value['seance'];
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['grade'];
            $nestedData[] = $value['nbrHeure'];
            $nestedData[] = number_format($value['montant'], 2, ',', ' ');




            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['annee'];

            $nestedData[] = $value['promotion'];
            $nestedData[] = $value['semestre'];
            $nestedData[] = $value['module'];
            $nestedData[] = $value['element'];
           
           
        
           
           if($value['statut']=='A'){
            $nestedData[] = "Annuler";
           }elseif($value['statut']=='R'){
            $nestedData[] = "Réglé";
           }else{
            $nestedData[] ='Crée';
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
     * @Route("/", name="module_univ_h_honens_index" ,  options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {

/*
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_honoraire',
            'operation' => '_seance',
            'dossier'=>'_default_univ'
        ]);*/


            /* navigation  */
          /*  $breadcrumbs->prependRouteItem("Applications", "app");
            $breadcrumbs->addRouteItem($this->session->get('modules')['_univ']['abreviation'], "module_univ_index");
            $breadcrumbs->addRouteItem("Gestion des honoraires", "module_univ_h_honens_index");
            $breadcrumbs->addItem("Liste");*/


            $dc = $this->appService->getDossierCourant();
            $operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_seance', true);
    
    
        return $this->render('module_univ/honoraire/honoraires/index.html.twig', [
           
        ]);
    }




     /**
     * @Route("/{id}/show",  options={"expose"=true}   ,  name="module_univ_h_honens_show", methods={"GET"})
     */
    public function show(UnivHHonens $honens, Breadcrumbs $breadcrumbs): Response
    {
       /* $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_honoraire',
            'operation' => '_honoraire_show',
            'dossier'=>'_default_univ'
        ]);*/

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_honoraire_show', [true,$honens->getCode()]);
        

     //   $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
      //  $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_honoraire']['operations'];


         /* navigation  */
     /*    $breadcrumbs->prependRouteItem("Applications", "app");
         $breadcrumbs->addRouteItem($this->session->get('modules')['_univ']['abreviation'], "module_univ_index");
         $breadcrumbs->addRouteItem("Gestion des honoraires", "module_univ_h_honens_index");
      
         $breadcrumbs->addItem($honens->getCode());  
         $breadcrumbs->addItem('Consulter');*/
        return $this->render('module_univ/honoraire/honoraires/show.html.twig', [
            'honens' => $honens,
            'operations'=>$operations
        ]);
    }
      



 /**
     * @Route("/reglement", name="module_univ_h_albhon_reglement", options={"expose"=true} , methods={"GET","POST"})
     */
    public function dateReglement(Request $request, ValidatorInterface $validator): Response
    {

 
   
        if ($request->isXmlHttpRequest()) {
            $entityManager = $this->getDoctrine()->getManager();
        $honens = new UnivHHonens();
       
        $hhonens=$request->request->get('_array_ids');
        // dump($hhonens);
          //die;
       
        $form = $this->createFormBuilder($honens)
           
        ->add('dateReglement', DateType::class, ['widget' => 'single_text',  'constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            $ids=$request->request->get('id');
           //  dump($ids);
          //die;
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            foreach ($ids as $key => $value) {
                $reglement = $this->getDoctrine()->getRepository(UnivHHonens::class)->find($value);
                $reglement->setDateReglement($honens->getDateReglement());
                $reglement->setStatut('R');
                $entityManager->persist($reglement);
               
            }



            
           
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 200);
        }
        return $this->render('module_univ/honoraire/honoraires/popup_reglement.html.twig', ['form' => $form->createView() ,'hhonens'=>$hhonens ]);
    }
   
}






/**
     * @Route("/Annuler_reglement", name="module_univ_h_albhon_annuler_reglement", options={"expose"=true} , methods={"GET","POST"})
     */
    public function AnnulerReglement(Request $request, ValidatorInterface $validator): Response
    {


        if ($request->isXmlHttpRequest()) {
            $entityManager = $this->getDoctrine()->getManager();
        $honens = new UnivHHonens();
       
        $hhonens=$request->request->get('_array_ids');
        // dump($hhonens);
          //die;
       
        $form = $this->createFormBuilder($honens)
           
        ->add('dateAnnulation', DateType::class, ['widget' => 'single_text',  'constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            $ids=$request->request->get('id');
           //  dump($ids);
          //die;
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            foreach ($ids as $key => $value) {
                $reglement = $this->getDoctrine()->getRepository(UnivHHonens::class)->find($value);
                $reglement->setDateAnnulation($honens->getDateAnnulation());
                $reglement->setStatut('A');
                $entityManager->persist($reglement);
               
            }



            
           
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 200);
        }
        return $this->render('module_univ/honoraire/honoraires/popup_annuler.html.twig', ['form' => $form->createView() ,'hhonens'=>$hhonens ]);
    }
   
}

}
