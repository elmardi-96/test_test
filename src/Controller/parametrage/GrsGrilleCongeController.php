<?php

namespace App\Controller\parametrage;

use App\Entity\GrsSoldeConge;
use App\Entity\GrsGrilleConge;
use App\Form\GrsGrilleCongeType;
use App\Repository\GrsGrilleCongeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/config/grs/grille/conge")
 */
class GrsGrilleCongeController extends AbstractController
{
    
    /**
     * @Route("/list", name="grs_grille_conge_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(GrsGrilleConge::class);
        $grsGrilleConges = $repository->findAll();
        $data = array();
        foreach ($grsGrilleConges as $key => $grsGrilleConge) {
            $id = $grsGrilleConge->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $grsGrilleConge->getId() . "</a>";
            $nestedData[] = $grsGrilleConge->getDuree();
            $nestedData[] = $grsGrilleConge->getPoste() ? $grsGrilleConge->getPoste()->getDesignation() : null;
            $nestedData[] = $grsGrilleConge->getType() ? $grsGrilleConge->getType()->getTitre() : null;
            $nestedData[] = $grsGrilleConge->getDescription();
            if (($grsGrilleConge->getActive()) == 1) {
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
     * @Route("/", name="grs_grille_conge_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addItem("GrsGrilleConge");
        $grsGrilleConges = $this->getDoctrine()
                ->getRepository(GrsGrilleConge::class)
                ->findAll();

        return $this->render('parametrage/grs_grille_conge/index.html.twig', [
                    'grs_grille_conges' => $grsGrilleConges,
        ]);
    }

    /**
     * @Route("/new", name="grs_grille_conge_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("GrsGrilleConge", "grs_grille_conge_index");
        $breadcrumbs->addItem("Ajouter");
        $grsGrilleConge = new GrsGrilleConge();
        $grsGrilleConge->setActive(1);
        $form = $this->createForm(GrsGrilleCongeType::class, $grsGrilleConge);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($grsGrilleConge);
            $entityManager->flush();
            $grsGrilleConge->setUserCreated($this->getUser());
            $grsGrilleConge->setCreated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('grs_grille_conge_index');
        }

        return $this->render('parametrage/grs_grille_conge/new.html.twig', [
                    'grs_grille_conge' => $grsGrilleConge,
                    'form' => $form->createView(),
        ]);
    }

 

    /**
     * @Route("/{id}/edit", name="grs_grille_conge_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, GrsGrilleConge $grsGrilleConge, Breadcrumbs $breadcrumbs, $id): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("GrsGrilleConge", "grs_grille_conge_index");
        $breadcrumbs->addItem($grsGrilleConge->getId());
        $form = $this->createForm(GrsGrilleCongeType::class, $grsGrilleConge);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $grsGrilleConge->setUserUpdated($this->getUser());
            $grsGrilleConge->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('grs_grille_conge_index');
        }

        return $this->render('parametrage/grs_grille_conge/edit.html.twig', [
                    'grs_grille_conge' => $grsGrilleConge,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="grs_grille_conge_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, GrsGrilleConge $grsGrilleConge): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($grsGrilleConge);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 

    
}
