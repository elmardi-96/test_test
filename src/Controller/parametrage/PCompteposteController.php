<?php

namespace App\Controller\parametrage;

use App\Entity\PCompteposte;
use App\Form\PCompteposteType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/config/compteposte")
 */
class PCompteposteController extends AbstractController {

    
    /**
     * @Route("/list", name="p_compte_poste_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PCompteposte::class);
        $pComptepostes = $repository->findAll();
        $data = array();
        foreach ($pComptepostes as $key => $pCompteposte) {
            $id = $pCompteposte->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pCompteposte->getCode() . "</a>";
            $nestedData[] = $pCompteposte->getDesignation();
            $nestedData[] = $pCompteposte->getCompteMasse() ? $pCompteposte->getCompteMasse()->getDesignation() : null;
            $nestedData[] = $pCompteposte->getSens();
            $nestedData[] = $pCompteposte->getType();
            $nestedData[] = $pCompteposte->getCodeCompteRubrique();
            if (($pCompteposte->getActive()) == 1) {
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
     * @Route("/", name="p_compte_poste_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addItem("Compteposte");
        $pComptepostes = $this->getDoctrine()
                ->getRepository(PCompteposte::class)
                ->findAll();

        return $this->render('parametrage/p_compteposte/index.html.twig', [
                    'p_compte_postes' => $pComptepostes,
        ]);
    }

    /**
     * @Route("/new", name="p_compte_poste_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Compteposte", "p_compte_poste_index");
        $breadcrumbs->addItem("Ajouter");
        $pCompteposte = new PCompteposte();
        $pCompteposte->setActive(1);
        $form = $this->createForm(PCompteposteType::class, $pCompteposte);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pCompteposte);
            $entityManager->flush();
            $code = "CP" . substr('000000000' . (string) ltrim($pCompteposte->getId()), -9);
            $pCompteposte->setReference($code);
            $pCompteposte->setUserCreated($this->getUser());
            $pCompteposte->setCreated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_compte_poste_index');
        }

        return $this->render('parametrage/p_compteposte/new.html.twig', [
                    'p_compte_poste' => $pCompteposte,
                    'form' => $form->createView(),
        ]);
    }

 

    /**
     * @Route("/{id}/edit", name="p_compte_poste_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, PCompteposte $pCompteposte, Breadcrumbs $breadcrumbs, $id): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Compteposte", "p_compte_poste_index");
        $breadcrumbs->addItem($pCompteposte->getCode());
        $form = $this->createForm(PCompteposteType::class, $pCompteposte);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $pCompteposte->setUserUpdated($this->getUser());
            $pCompteposte->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_compte_poste_index');
        }

        return $this->render('parametrage/p_compteposte/edit.html.twig', [
                    'p_compte_poste' => $pCompteposte,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="p_compte_poste_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PCompteposte $pCompteposte): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pCompteposte);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


}
