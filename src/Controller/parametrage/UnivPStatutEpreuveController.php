<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPStatutEpreuve;
use App\Form\UnivPStatutEpreuveType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UnivPStatutEpreuveRepository;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/statutepreuve")
 */
class UnivPStatutEpreuveController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_p_statut_epreuve_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivPStatutEpreuve::class);
        $UnivPStatutEpreuves = $repository->findAll();
        $data = array();
        foreach ($UnivPStatutEpreuves as $key => $UnivPStatutEpreuve) {
            $id = $UnivPStatutEpreuve->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $UnivPStatutEpreuve->getCode() . "</a>";
            $nestedData[] = $UnivPStatutEpreuve->getDesignation();
            $nestedData[] = $UnivPStatutEpreuve->getAbreviation();
            if (($UnivPStatutEpreuve->getActive()) == 1) {
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
     * @Route("/", name="univ_p_statut_epreuve_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_statut_epreuve', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Statut epreuve"); */
        $univPCouleurs = $this->getDoctrine()
            ->getRepository(UnivPStatutEpreuve::class)
            ->findAll();

        return $this->render('parametrage/univ_p_statut_epreuve/index.html.twig', [
            'univ_p_statut_epreuves' => $univPCouleurs,
            'operations' => $operations
        ]);
    }



    /**
     * 
     * @Route("/add", name="univ_p_statut_epreuve_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_statut_epreuve', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPStatutEpreuve = new UnivPStatutEpreuve();
            $UnivPStatutEpreuve->setActive(true);
            $form = $this->createForm(UnivPStatutEpreuveType::class, $UnivPStatutEpreuve);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPStatutEpreuve);
                $entityManager->flush();
                $code = "ST" . substr('000000000' . (string) ltrim($UnivPStatutEpreuve->getId()), -9);
                $UnivPStatutEpreuve->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPStatutEpreuve->getId()]]);
            }

            return $this->render('parametrage/univ_p_statut_epreuve/form.html.twig', [
                'univ_p_statut_epreuve' => $UnivPStatutEpreuve,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_statut_epreuve_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPStatutEpreuve $UnivPStatutEpreuve): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_statut_epreuve', '_edit' , false,$UnivPStatutEpreuve) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPStatutEpreuveType::class, $UnivPStatutEpreuve);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPStatutEpreuve->getId()]]);
            }
            return $this->render('parametrage/univ_p_statut_epreuve/form.html.twig', [
                'univ_p_statut_epreuve' => $UnivPStatutEpreuve,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_statut_epreuve_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPStatutEpreuve $UnivPStatutEpreuve, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_statut_epreuve', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPStatutEpreuve->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPStatutEpreuve);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
