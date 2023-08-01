<?php

namespace App\Controller\parametrage;

use App\Entity\UnivPSalle;
use App\Service\AppService;
use App\Form\UnivPSalleType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/salle")
 */
class UnivPSalleController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
    
    /**
     * 
    * @Route("/list", name="univ_p_salle_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivPSalle::class);
    $UnivPSalles = $repository->findAll();
    $data = array();
    foreach ($UnivPSalles as $key => $UnivPSalle) {
        $id = $UnivPSalle->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivPSalle->getCode()."</a>";
        $nestedData[] = $UnivPSalle->getEtage() ? $UnivPSalle->getEtage()->getDesignation() : null;
        $nestedData[] = $UnivPSalle->getDesignation();
        $nestedData[] = $UnivPSalle->getAbreviation();
        $nestedData[] = $UnivPSalle->getXIP();
        $nestedData[] = $UnivPSalle->getEtatPC();
        $nestedData[] = $UnivPSalle->getAttente();
        $nestedData[] = $UnivPSalle->getGroupe();
        if (($UnivPSalle->getActive()) == 1) {
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
     * @Route("/", name="univ_p_salle_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_salle', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Salle"); */
        $UnivPSalles = $this->getDoctrine()
            ->getRepository(UnivPSalle::class)
            ->findAll();

        return $this->render('parametrage/univ_p_salle/index.html.twig', [
            'univ_p_salles' => $UnivPSalles,
            'operations' => $operations
        ]);
    }
    /**
     * 
     * @Route("/add", name="univ_p_salle_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_salle', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPSalle = new UnivPSalle();
            $UnivPSalle->setActive(true);
            $form = $this->createForm(UnivPSalleType::class, $UnivPSalle);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPSalle);
                $entityManager->flush();
                $code = "SAL" . substr('000000000' . (string) ltrim($UnivPSalle->getId()), -9);
                $UnivPSalle->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPSalle->getId()]]);
            }

            return $this->render('parametrage/univ_p_salle/form.html.twig', [
                'univ_p_salle' => $UnivPSalle,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_salle_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPSalle $UnivPSalle): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_salle', '_edit' , false,$UnivPSalle) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPSalleType::class, $UnivPSalle);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPSalle->getId()]]);
            }
            return $this->render('parametrage/univ_p_salle/form.html.twig', [
                'univ_p_salle' => $UnivPSalle,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_salle_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPSalle $UnivPSalle, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_salle', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPSalle->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPSalle);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
