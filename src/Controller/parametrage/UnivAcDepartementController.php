<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivAcDepartement;
use App\Form\UnivAcDepartementType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/acdepartement")
 */
class UnivAcDepartementController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_ac_departement_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivAcDepartement::class);
        $univAcDepartements = $repository->findAll();
        $data = array();
        foreach ($univAcDepartements as $key => $univAcDepartement) {
            $id = $univAcDepartement->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $univAcDepartement->getCode() . "</a>";
            $nestedData[] = $univAcDepartement->getEtablissement() ? $univAcDepartement->getEtablissement()->getDesignation() : null;
            $nestedData[] = $univAcDepartement->getDesignation();
            $nestedData[] = $univAcDepartement->getAbreviation();
            if (($univAcDepartement->getActive()) == 1) {
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
     * @Route("/", name="univ_ac_departement_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_departement', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Département"); */
        $univAcDepartements = $this->getDoctrine()
            ->getRepository(UnivAcDepartement::class)
            ->findAll();

        return $this->render('parametrage/univ_ac_departement/index.html.twig', [
            'univ_ac_departements' => $univAcDepartements,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/add", name="univ_ac_departement_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_departement', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivAcDepartement = new UnivAcDepartement();
            $UnivAcDepartement->setActive(true);
            $form = $this->createForm(UnivAcDepartementType::class, $UnivAcDepartement);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivAcDepartement);
                $entityManager->flush();
                $code = "DEP" . substr('000000000' . (string) ltrim($UnivAcDepartement->getId()), -9);
                $UnivAcDepartement->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivAcDepartement->getId()]]);
            }

            return $this->render('parametrage/univ_ac_departement/form.html.twig', [
                'univ_ac_departement' => $UnivAcDepartement,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_ac_departement_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivAcDepartement $UnivAcDepartement): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_ac_departement', '_edit' , false,$UnivAcDepartement) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivAcDepartementType::class, $UnivAcDepartement);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivAcDepartement->getId()]]);
            }
            return $this->render('parametrage/univ_ac_departement/form.html.twig', [
                'univ_ac_departement' => $UnivAcDepartement,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_ac_departement_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivAcDepartement $UnivAcDepartement, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_departement', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivAcDepartement->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivAcDepartement);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
