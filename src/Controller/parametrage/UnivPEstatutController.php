<?php


namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPEstatut;
use App\Form\UnivPEstatutType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/estatut")
 */
class UnivPEstatutController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
    * 
    * @Route("/list", name="univ_p_estatut_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
       $repository = $this->getDoctrine()->getRepository(UnivPEstatut::class);
       $UnivPEstatuts = $repository->findAll();
       $data = array();
       foreach ($UnivPEstatuts as $key => $UnivPEstatut) {
           $id = $UnivPEstatut->getId();
           $nestedData = array();
           $nestedData[] = ++$key;
           $nestedData[] = "<a class='cd_op'>".$UnivPEstatut->getCode()."</a>";
           $nestedData[] = $UnivPEstatut->getDesignation();
           $nestedData[] = $UnivPEstatut->getAbreviation();
           $nestedData[] = $UnivPEstatut->getType();
           if (($UnivPEstatut->getDefinitif()) == 1) {
               $nestedData[] = 'Oui';
           } else {
               $nestedData[] = 'Non';
           }
           if (($UnivPEstatut->getActive()) == 1) {
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
    * 
    * @Route("/", name="univ_p_estatut_index", options={"expose"=true} , methods={"GET"})
    */
   public function index(Breadcrumbs $breadcrumbs): Response
   {
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_estatut', '_index' , true) ; 

       /* $breadcrumbs->prependRouteItem("Applications", "app");
       $breadcrumbs->addRouteItem("Configration", "config_index");
       $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
       $breadcrumbs->addItem("Statut"); */
       $UnivPEstatuts = $this->getDoctrine()
           ->getRepository(UnivPEstatut::class)
           ->findAll();

       return $this->render('parametrage/univ_p_estatut/index.html.twig', [
           'univ_p_estatuts' => $UnivPEstatuts,
           'operations' => $operations
       ]);
   }
   /**
    * 
    * @Route("/add", name="univ_p_estatut_add", options={"expose"=true} ,  methods={"GET","POST"})
    */
   public function add(ValidatorInterface $validator, Request $request): Response
   {
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_estatut', '_new' , false) ; 


       /**
        * vérifier s'il s'ajit de ajax request
        */
       if ($request->isXmlHttpRequest()) {
           $UnivPEstatut = new UnivPEstatut();
           $UnivPEstatut->setActive(true);
           $UnivPEstatut->setDefinitif(true);
           $form = $this->createForm(UnivPEstatutType::class, $UnivPEstatut);
           $form->handleRequest($request);


           if ($form->isSubmitted()) {
               $errors = $validator->validate($form);
               if (count($errors) > 0) {
                   return $this->json(['errors' => $errors]);
               }

               $entityManager = $this->getDoctrine()->getManager();
               $entityManager->persist($UnivPEstatut);
               $entityManager->flush();
               $code = "ST" . substr('000000000' . (string) ltrim($UnivPEstatut->getId()), -9);
               $UnivPEstatut->setCode($code);
               $this->getDoctrine()->getManager()->flush();
               return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPEstatut->getId()]]);
           }

           return $this->render('parametrage/univ_p_estatut/form.html.twig', [
               'univ_p_estatut' => $UnivPEstatut,
               'form' => $form->createView(),

           ]);
       } else {
           return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
       }
   }



   /**
    * 
    * @Route("/{id}/edit", name="univ_p_estatut_edit", options={"expose"=true} ,  methods={"GET","POST"})
    */
   public function edit(ValidatorInterface $validator, Request $request, UnivPEstatut $UnivPEstatut): Response
   {

    $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_estatut', '_edit' , false,$UnivPEstatut) ; 

       /**
        * vérifier s'il s'ajit de ajax request
        */
       if ($request->isXmlHttpRequest()) {

           $form = $this->createForm(UnivPEstatutType::class, $UnivPEstatut);
           $form->handleRequest($request);

           if ($form->isSubmitted()) {
               $errors = $validator->validate($form);
               if (count($errors) > 0) {
                   return $this->json(['errors' => $errors]);
               }
               $this->getDoctrine()->getManager()->flush();
               return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPEstatut->getId()]]);
           }
           return $this->render('parametrage/univ_p_estatut/form.html.twig', [
               'univ_p_estatut' => $UnivPEstatut,
               'form' => $form->createView(),
               'operations' => $operations

           ]);
       } else {
           return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
       }
   }


   /**
    * 
    * @Route("/{id}/{token}/delete", name="univ_p_estatut_delete", options={"expose"=true} ,  methods={"DELETE"})
    */
   public function delete(Request $request, UnivPEstatut $UnivPEstatut, $token): Response
   {
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_estatut', '_delete' , false) ; 

       if ($request->isXmlHttpRequest()) {
           if ($this->isCsrfTokenValid('delete' . $UnivPEstatut->getId(), $token)) {
               $entityManager = $this->getDoctrine()->getManager();
               $entityManager->remove($UnivPEstatut);
               $entityManager->flush();
               return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
           }
       } else {
           return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
       }
   }
}