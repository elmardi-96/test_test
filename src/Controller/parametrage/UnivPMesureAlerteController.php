<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPMesureAlerte;
use App\Form\UnivPMesureAlerteType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/mesurealerte")
 */
class UnivPMesureAlerteController extends AbstractController
{
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
    /**
     * 
    * @Route("/list", name="univ_p_mesure_alerte_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivPMesureAlerte::class);
    $UnivPMesureAlertes = $repository->findAll();
    $data = array();
    foreach ($UnivPMesureAlertes as $key => $UnivPMesureAlerte) {
        $id = $UnivPMesureAlerte->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivPMesureAlerte->getCode()."</a>";
        $nestedData[] = $UnivPMesureAlerte->getDesignation();
        $nestedData[] = $UnivPMesureAlerte->getAbreviation();
        if (($UnivPMesureAlerte->getActive()) == 1) {
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
     * @Route("/", name="univ_p_mesure_alerte_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_mesure_alerte', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Mesure alerte"); */
        $UnivPMesureAlertes = $this->getDoctrine()
            ->getRepository(UnivPMesureAlerte::class)
            ->findAll();

        return $this->render('parametrage/univ_p_mesure_alerte/index.html.twig', [
            'univ_p_mesure_alertes' => $UnivPMesureAlertes,
            'operations' => $operations
        ]);
    }
    /**
     * 
     * @Route("/add", name="univ_p_mesure_alerte_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_mesure_alerte', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPMesureAlerte = new UnivPMesureAlerte();
            $UnivPMesureAlerte->setActive(true);
            $form = $this->createForm(UnivPMesureAlerteType::class, $UnivPMesureAlerte);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPMesureAlerte);
                $entityManager->flush();
                $code = "MES" . substr('000000000' . (string) ltrim($UnivPMesureAlerte->getId()), -9);
                $UnivPMesureAlerte->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPMesureAlerte->getId()]]);
            }

            return $this->render('parametrage/univ_p_mesure_alerte/form.html.twig', [
                'univ_p_mesure_alerte' => $UnivPMesureAlerte,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_mesure_alerte_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPMesureAlerte $UnivPMesureAlerte): Response
    {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_mesure_alerte', '_edit' , false,$UnivPMesureAlerte) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPMesureAlerteType::class, $UnivPMesureAlerte);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPMesureAlerte->getId()]]);
            }
            return $this->render('parametrage/univ_p_mesure_alerte/form.html.twig', [
                'univ_p_mesure_alerte' => $UnivPMesureAlerte,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_mesure_alerte_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPMesureAlerte $UnivPMesureAlerte, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_mesure_alerte', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPMesureAlerte->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPMesureAlerte);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
