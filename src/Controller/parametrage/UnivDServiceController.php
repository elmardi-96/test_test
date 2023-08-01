<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivDService;
use App\Form\UnivDServiceType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/univservice")
 */
class UnivDServiceController extends AbstractController
{
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
    /**
     * 
    * @Route("/list", name="univ_d_service_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivDService::class);
    $UnivDServices = $repository->findAll();
    $data = array();
    foreach ($UnivDServices as $key => $UnivDService) {
        $id = $UnivDService->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivDService->getCode()."</a>";
        $nestedData[] = $UnivDService->getDesignation();
        $nestedData[] = $UnivDService->getAbreviation();
        if (($UnivDService->getActive()) == 1) {
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
     * @Route("/", name="univ_d_service_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {        
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_d_service', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Service"); */
        $UnivDServices = $this->getDoctrine()
            ->getRepository(UnivDService::class)
            ->findAll();

        return $this->render('parametrage/univ_d_service/index.html.twig', [
            'univ_d_services' => $UnivDServices,
            'operations' => $operations
        ]);
    }
    /**
     * 
     * @Route("/add", name="univ_d_service_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_d_service', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivDService = new UnivDService();
            $UnivDService->setActive(true);
            $form = $this->createForm(UnivDServiceType::class, $UnivDService);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivDService);
                $entityManager->flush();
                $code = "SER" . substr('000000000' . (string) ltrim($UnivDService->getId()), -9);
                $UnivDService->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivDService->getId()]]);
            }

            return $this->render('parametrage/univ_d_service/form.html.twig', [
                'univ_d_service' => $UnivDService,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_d_service_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivDService $UnivDService): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_d_service', '_edit' , false,$UnivDService) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivDServiceType::class, $UnivDService);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivDService->getId()]]);
            }
            return $this->render('parametrage/univ_d_service/form.html.twig', [
                'univ_d_service' => $UnivDService,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_d_service_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivDService $UnivDService, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_d_service', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivDService->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivDService);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
