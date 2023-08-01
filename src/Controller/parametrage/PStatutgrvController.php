<?php

namespace App\Controller\parametrage;

use App\Entity\PStatutgrv;
use App\Form\PStatutgrvType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PStatutgrvRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/config/statutgrv")
 */
class PStatutgrvController extends AbstractController
{
     /**
     * @Route("/list", name="p_statutgrv_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(Connection $connection, Request $request): Response {

        $repository = $this->getDoctrine()->getRepository(PStatutgrv::class);
        $pStatutgrvs = $repository->findAll();
        $data = array();
        foreach ($pStatutgrvs as $key => $pStatutgrv) {
            $id = $pStatutgrv->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pStatutgrv->getId() . "</a>"; 
            $nestedData[] = $pStatutgrv->getModule();
            $nestedData[] = $pStatutgrv->getFonction();
            $nestedData[] = $pStatutgrv->getStatut();
            $nestedData[] = $pStatutgrv->getAffectable();
            $nestedData[] = $pStatutgrv->getNext();
            $nestedData[] = $pStatutgrv->getDefaulte();
            $nestedData[] = $pStatutgrv->getTotal();
            $nestedData[] = $pStatutgrv->getPartiel();
            $nestedData[] = $pStatutgrv->getCouleur();
            if (($pStatutgrv->getActive()) == 1) {
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
     * @Route("/", name="p_statutgrv_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addItem("Statutgrv");
        $pStatutgrvs = $this->getDoctrine()
                ->getRepository(PStatutgrv::class)
                ->findAll();

        return $this->render('parametrage/p_statutgrv/index.html.twig', [
                    'p_statutgrvs' => $pStatutgrvs,
        ]);
    }

    /**
     * @Route("/new", name="p_statutgrv_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Statutgrv", "p_statutgrv_index");
        $breadcrumbs->addItem("Ajouter");
        $pStatutgrv = new PStatutgrv();
        $pStatutgrv->setActive(1);
        $form = $this->createForm(PStatutgrvType::class, $pStatutgrv);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pStatutgrv);
            $entityManager->flush();
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_statutgrv_index');
        }

        return $this->render('parametrage/p_statutgrv/new.html.twig', [
                    'p_statutgrv' => $pStatutgrv,
                    'form' => $form->createView(),
        ]);
    }

 

    /**
     * @Route("/{id}/edit", name="p_statutgrv_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, PStatutgrv $pStatutgrv, Breadcrumbs $breadcrumbs, $id): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Statutgrv", "p_statutgrv_index");
        $breadcrumbs->addItem($pStatutgrv->getId());
        $form = $this->createForm(PStatutgrvType::class, $pStatutgrv);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_statutgrv_index');
        }

        return $this->render('parametrage/p_statutgrv/edit.html.twig', [
                    'p_statutgrv' => $pStatutgrv,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="p_statutgrv_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PStatutgrv $pStatutgrv): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pStatutgrv);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 

}
