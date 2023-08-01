<?php

namespace App\Controller\parametrage;

use App\Entity\UnivXLangue;
use App\Service\AppService;
use App\Form\UnivXLangueType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/langue")
 */
class UnivXLangueController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_x_langue_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivXLangue::class);
        $univXLangues = $repository->findAll();
        $data = array();
        foreach ($univXLangues as $key => $univXLangue) {
            $id = $univXLangue->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $univXLangue->getCode() . "</a>";
            $nestedData[] = $univXLangue->getDesignation();
            $nestedData[] = $univXLangue->getAbreviation();
            if (($univXLangue->getActive()) == 1) {
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
     * @Route("/", name="univ_x_langue_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_langue', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Langue"); */
        $univXLangues = $this->getDoctrine()
            ->getRepository(UnivXLangue::class)
            ->findAll();

        return $this->render('parametrage/univ_x_langue/index.html.twig', [
            'univ_x_langues' => $univXLangues,
            'operations' => $operations
        ]);
    }

    /**
     * 
     * @Route("/add", name="univ_x_langue_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_langue', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivXLangue = new UnivXLangue();
            $UnivXLangue->setActive(true);
            $form = $this->createForm(UnivXLangueType::class, $UnivXLangue);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivXLangue);
                $entityManager->flush();
                $code = "lang" . substr('000000000' . (string) ltrim($UnivXLangue->getId()), -9);
                $UnivXLangue->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivXLangue->getId()]]);
            }

            return $this->render('parametrage/univ_x_langue/form.html.twig', [
                'univ_x_langue' => $UnivXLangue,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_x_langue_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivXLangue $UnivXLangue): Response
    {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_x_langue', '_edit' , false,$UnivXLangue) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivXLangueType::class, $UnivXLangue);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivXLangue->getId()]]);
            }
            return $this->render('parametrage/univ_x_langue/form.html.twig', [
                'univ_x_langue' => $UnivXLangue,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_x_langue_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivXLangue $UnivXLangue, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_langue', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivXLangue->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivXLangue);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
