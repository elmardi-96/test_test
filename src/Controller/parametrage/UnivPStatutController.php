<?php

namespace App\Controller\parametrage;

use App\Entity\UnivPStatut;
use App\Service\AppService;
use App\Form\UnivPStatutType;
use App\Entity\UnivTPreinscription;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/statut")
 */
class UnivPStatutController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * 
     * @Route("/list", name="univ_p_statut_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivPStatut::class);
        $UnivPStatuts = $repository->findAll();
        $data = array();
        foreach ($UnivPStatuts as $key => $UnivPStatut) {
            $id = $UnivPStatut->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $UnivPStatut->getCode() . "</a>";
            $nestedData[] = $UnivPStatut->getDesignation();
            $nestedData[] = $UnivPStatut->getAbreviation();
            $nestedData[] = $UnivPStatut->getTable0();
            if (($UnivPStatut->getVisible()) == 1) {
                $nestedData[] = 'Oui';
            } else {
                $nestedData[] = 'Non';
            }
            if (($UnivPStatut->getVisibleAdmission()) == 1) {
                $nestedData[] = 'Oui';
            } else {
                $nestedData[] = 'Non';
            }
            $nestedData[] = $UnivPStatut->getNext();
            $nestedData[] = $UnivPStatut->getSousModule();
            if (($UnivPStatut->getActive()) == 1) {
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
     * @Route("/", name="univ_p_statut_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_statut', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Statut"); */
        $UnivPStatuts = $this->getDoctrine()
            ->getRepository(UnivPStatut::class)
            ->findAll();

        return $this->render('parametrage/univ_p_statut/index.html.twig', [
            'univ_p_statuts' => $UnivPStatuts,
            'operations' => $operations
        ]);
    }


    /**
     * 
     * @Route("/add", name="univ_p_statut_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_statut', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPStatut = new UnivPStatut();
            $UnivPStatut->setActive(true);
            $UnivPStatut->setVisible(false);
            $UnivPStatut->setVisibleAdmission(false);
            $form = $this->createForm(UnivPStatutType::class, $UnivPStatut);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPStatut);
                $entityManager->flush();
                $code = "ST" . substr('000000000' . (string) ltrim($UnivPStatut->getId()), -9);
                $UnivPStatut->setCode($code);
                $UnivPStatut->setUserCreated($this->getUser());
                $UnivPStatut->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPStatut->getId()]]);
            }

            return $this->render('parametrage/univ_p_statut/form.html.twig', [
                'univ_p_statut' => $UnivPStatut,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_statut_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPStatut $UnivPStatut): Response
    {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_statut', '_edit' , false,$UnivPStatut) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPStatutType::class, $UnivPStatut);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $UnivPStatut->setUserUpdated($this->getUser());
                $UnivPStatut->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPStatut->getId()]]);
            }
            return $this->render('parametrage/univ_p_statut/form.html.twig', [
                'univ_p_statut' => $UnivPStatut,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_statut_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPStatut $UnivPStatut, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_statut', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPStatut->getId(), $token)) {
                $preinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->findByStatutDeliberation($UnivPStatut);
                if (!empty($preinscription)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($UnivPStatut);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
