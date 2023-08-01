<?php

namespace App\Controller\parametrage;

use App\Entity\UnivPGrade;
use App\Service\AppService;
use App\Form\UnivPGradeType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/grade")
 */
class UnivPGradeController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
    /**
     * 
    * @Route("/list", name="univ_p_grade_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivPGrade::class);
    $UnivPGrades = $repository->findAll();
    $data = array();
    foreach ($UnivPGrades as $key => $UnivPGrade) {
        $id = $UnivPGrade->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivPGrade->getCode()."</a>";
        $nestedData[] = $UnivPGrade->getDesignation();
        $nestedData[] = $UnivPGrade->getAbreviation();
        if (($UnivPGrade->getActive()) == 1) {
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
     * @Route("/", name="univ_p_grade_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_grade', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Grade"); */
        $UnivPGrades = $this->getDoctrine()
            ->getRepository(UnivPGrade::class)
            ->findAll();

        return $this->render('parametrage/univ_p_grade/index.html.twig', [
            'univ_p_grades' => $UnivPGrades,
            'operations' => $operations
        ]);
    }
    /**
     * 
     * @Route("/add", name="univ_p_grade_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_grade', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPGrade = new UnivPGrade();
            $UnivPGrade->setActive(true);
            $form = $this->createForm(UnivPGradeType::class, $UnivPGrade);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPGrade);
                $entityManager->flush();
                $code = "GRD" . substr('000000000' . (string) ltrim($UnivPGrade->getId()), -9);
                $UnivPGrade->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPGrade->getId()]]);
            }

            return $this->render('parametrage/univ_p_grade/form.html.twig', [
                'univ_p_grade' => $UnivPGrade,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_grade_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPGrade $UnivPGrade): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_grade', '_edit' , false,$UnivPGrade) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPGradeType::class, $UnivPGrade);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPGrade->getId()]]);
            }
            return $this->render('parametrage/univ_p_grade/form.html.twig', [
                'univ_p_grade' => $UnivPGrade,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_grade_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPGrade $UnivPGrade, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_grade', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPGrade->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPGrade);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
