<?php

namespace App\Controller\parametrage;

use App\Entity\PCompte;
use App\Form\PCompteType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/config/compte")
 */
class PCompteController extends AbstractController
{
    /**
     * @Route("/list", name="p_compte_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PCompte::class);
        $pComptes = $repository->findAll();
        $data = array();
        foreach ($pComptes as $key => $pCompte) {
            $id = $pCompte->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pCompte->getCode() . "</a>";
            $nestedData[] = $pCompte->getDesignation();
            $nestedData[] = $pCompte->getComptePoste() ? $pCompte->getComptePoste()->getDesignation() : null;
            $nestedData[] = $pCompte->getSens();
            $nestedData[] = $pCompte->getType();
            $nestedData[] = $pCompte->getCodeComptePoste();
            if (($pCompte->getActive()) == 1) {
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
     * @Route("/", name="p_compte_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addItem("Compte");
        $pComptes = $this->getDoctrine()
                ->getRepository(PCompte::class)
                ->findAll();

        return $this->render('parametrage/p_compte/index.html.twig', [
                    'p_comptes' => $pComptes,
        ]);
    }

    /**
     * @Route("/new", name="p_compte_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Compte", "p_compte_index");
        $breadcrumbs->addItem("Ajouter");
        $pCompte = new PCompte();
        $pCompte->setActive(1);
        $form = $this->createForm(PCompteType::class, $pCompte);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pCompte);
            $entityManager->flush();
            $code = "Compte" . substr('000000000' . (string) ltrim($pCompte->getId()), -9);
            $pCompte->setReference($code);
            $pCompte->setUserCreated($this->getUser());
            $pCompte->setCreated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_compte_index');
        }

        return $this->render('parametrage/p_compte/new.html.twig', [
                    'p_compte' => $pCompte,
                    'form' => $form->createView(),
        ]);
    }

 

    /**
     * @Route("/{id}/edit", name="p_compte_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, PCompte $pCompte, Breadcrumbs $breadcrumbs, $id): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Compte", "p_compte_index");
        $breadcrumbs->addItem($pCompte->getCode());
        $form = $this->createForm(PCompteType::class, $pCompte);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $pCompte->setUserUpdated($this->getUser());
            $pCompte->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_compte_index');
        }

        return $this->render('parametrage/p_compte/edit.html.twig', [
                    'p_compte' => $pCompte,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="p_compte_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PCompte $pCompte): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pCompte);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
