<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivXTypeBac;
use App\Form\UnivXTypeBacType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/bac")
 */
class UnivXTypeBacController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_x_type_bac_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivXTypeBac::class);
        $univXTypeBacs = $repository->findAll();
        $data = array();
        foreach ($univXTypeBacs as $key => $univXTypeBac) {
            $id = $univXTypeBac->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $univXTypeBac->getCode() . "</a>";
            $nestedData[] = $univXTypeBac->getDesignation();
            $nestedData[] = $univXTypeBac->getAbreviation();
            if (($univXTypeBac->getActive()) == 1) {
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
     * @Route("/", name="univ_x_type_bac_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_type_bac', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Type Bac"); */
        $univXTypeBacs = $this->getDoctrine()
            ->getRepository(UnivXTypeBac::class)
            ->findAll();

        return $this->render('parametrage/univ_x_type_bac/index.html.twig', [
            'univ_x_type_bacs' => $univXTypeBacs,
            'operations' => $operations
        ]);
    }



    /**
     * 
     * @Route("/add", name="univ_x_type_bac_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_type_bac', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivXTypeBac = new UnivXTypeBac();
            $UnivXTypeBac->setActive(true);
            $form = $this->createForm(UnivXTypeBacType::class, $UnivXTypeBac);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivXTypeBac);
                $entityManager->flush();
                $code = "T" . substr('000000000' . (string) ltrim($UnivXTypeBac->getId()), -9);
                $UnivXTypeBac->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivXTypeBac->getId()]]);
            }

            return $this->render('parametrage/univ_x_type_bac/form.html.twig', [
                'univ_x_type_bac' => $UnivXTypeBac,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_x_type_bac_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivXTypeBac $UnivXTypeBac): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_x_type_bac', '_edit' , false,$UnivXTypeBac) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivXTypeBacType::class, $UnivXTypeBac);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivXTypeBac->getId()]]);
            }
            return $this->render('parametrage/univ_x_type_bac/form.html.twig', [
                'univ_x_type_bac' => $UnivXTypeBac,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_x_type_bac_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivXTypeBac $UnivXTypeBac, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_type_bac', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivXTypeBac->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivXTypeBac);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
