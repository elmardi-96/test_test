<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\PTypeContrat;
use App\Form\PTypeContratType;
use App\Repository\PTypeContratRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/typecontrat")
 */
class PTypeContratController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }

    /**
     * 
     * @Route("/list", name="p_type_contrat_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(PTypeContrat::class);
        $pTypeContrats = $repository->findAll();
        $data = array();
        foreach ($pTypeContrats as $key => $pTypeContrat) {
            $id = $pTypeContrat->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pTypeContrat->getId() . "</a>";
            $nestedData[] = $pTypeContrat->getAbreviation();
            $nestedData[] = $pTypeContrat->getDesignation();
            if (($pTypeContrat->getActive()) == 1) {
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
        return new Response(json_encode($json_data));
    }

    /**
     * 
     * @Route("/{id}/edit", name="p_type_contrat_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PTypeContrat $pTypeContrat): Response
    {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_typecontrat', '_edit', false, $pTypeContrat);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PTypeContratType::class, $pTypeContrat);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pTypeContrat->getId()]]);
            }
            return $this->render('parametrage/p_type_contrat/form.html.twig', [
                'p_type_contrat' => $pTypeContrat,
                'form' => $form->createView(),
                'operations' => $operations


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * 
     * @Route("/", name="p_type_contrat_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        /* $breadcrumbs->prependRouteItem("Applications", "app");


        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Type contrat"); */
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_typecontrat', '_index', true);
        $pTypeContrats = $this->getDoctrine()
            ->getRepository(PTypeContrat::class)
            ->findAll();

        return $this->render('parametrage/p_type_contrat/index.html.twig', [
            'p_type_contrats' => $pTypeContrats,
            'operations' => $operations
        ]);
    }



    /**
     * 
     * @Route("/add", name="p_type_contrat_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_typecontrat', '_new', false);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pTypeContrat = new PTypeContrat();
            $pTypeContrat->setActive(1);
            $form = $this->createForm(PTypeContratType::class, $pTypeContrat);
            $form->handleRequest($request);



            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pTypeContrat);
                $entityManager->flush();
                /* $code = "UN" . substr('000000000' . (string) ltrim($pTypeContrat->getId()), -9);
                $pTypeContrat->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pTypeContrat->getId()]]);
            }

            return $this->render('parametrage/p_type_contrat/form.html.twig', [
                'p_type_contrat' => $pTypeContrat,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






    /**
     * 
     * @Route("/{id}/{token}/delete", name="p_type_contrat_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PTypeContrat $pTypeContrat, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_typecontrat', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pTypeContrat->getId(), $token)) {
                /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($pTypeContrat);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
