<?php

namespace App\Controller\parametrage;

use App\Entity\PCompterubrique;
use App\Form\PCompterubriqueType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/config/compterubrique")
 */
class PCompterubriqueController extends AbstractController {

    
    /**
     * @Route("/list", name="p_compterubrique_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PCompterubrique::class);
        $pCompterubriques = $repository->findAll();
        $data = array();
        foreach ($pCompterubriques as $key => $pCompterubrique) {
            $id = $pCompterubrique->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pCompterubrique->getCode() . "</a>";
            $nestedData[] = $pCompterubrique->getDesignation();
            $nestedData[] = $pCompterubrique->getType();
            $nestedData[] = $pCompterubrique->getDossier() ? $pCompterubrique->getDossier()->getNomDossier() : null;
            $nestedData[] = $pCompterubrique->getCompteMasse() ? $pCompterubrique->getCompteMasse()->getDesignation() : null;
            $nestedData[] = $pCompterubrique->getSens();
            if (($pCompterubrique->getActive()) == 1) {
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
     * @Route("/", name="p_compterubrique_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addItem("Compterubrique");
        $pCompterubriques = $this->getDoctrine()
                ->getRepository(PCompterubrique::class)
                ->findAll();

        return $this->render('parametrage/p_compterubrique/index.html.twig', [
                    'p_compterubriques' => $pCompterubriques,
        ]);
    }

    /**
     * @Route("/new", name="p_compterubrique_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Compterubrique", "p_compterubrique_index");
        $breadcrumbs->addItem("Ajouter");
        $pCompterubrique = new PCompterubrique();
        $pCompterubrique->setActive(1);
        $form = $this->createForm(PCompterubriqueType::class, $pCompterubrique);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pCompterubrique);
            $entityManager->flush();
            $code = "CM" . substr('000000000' . (string) ltrim($pCompterubrique->getId()), -9);
            $pCompterubrique->setReference($code);
            $pCompterubrique->setUserCreated($this->getUser());
            $pCompterubrique->setCreated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_compterubrique_index');
        }

        return $this->render('parametrage/p_compterubrique/new.html.twig', [
                    'p_compterubrique' => $pCompterubrique,
                    'form' => $form->createView(),
        ]);
    }

 

    /**
     * @Route("/{id}/edit", name="p_compterubrique_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, PCompterubrique $pCompterubrique, Breadcrumbs $breadcrumbs, $id): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Compterubrique", "p_compterubrique_index");
        $breadcrumbs->addItem($pCompterubrique->getCode());
        $form = $this->createForm(PCompterubriqueType::class, $pCompterubrique);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $pCompterubrique->setUserUpdated($this->getUser());
            $pCompterubrique->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_compterubrique_index');
        }

        return $this->render('parametrage/p_compterubrique/edit.html.twig', [
                    'p_compterubrique' => $pCompterubrique,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="p_compterubrique_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PCompterubrique $pCompterubrique): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pCompterubrique);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }





}
