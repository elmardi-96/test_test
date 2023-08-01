<?php

namespace App\Controller\parametrage;

use App\Entity\Compagnie;
use App\Form\Compagnie1Type;
use Gedmo\Sluggable\Util\Urlizer;
use App\Repository\CompagnieRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/societe")
 */
class CompagnieController extends AbstractController
{
    /**
     * @Route("/", name="compagnie_index", methods={"GET"})
     */
    public function index(CompagnieRepository $compagnieRepository): Response
    {
        return $this->render('compagnie/index.html.twig', [
            'compagnies' => $compagnieRepository->findAll(),
        ]);
    }

    /**
     * @Route("/config", name="compagnie_new", methods={"GET","POST"})
     */
    public function new(Request $request,Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Entreprise", "compagnie_index");
        $breadcrumbs->addItem('Compagnie');
        $compagnie = $this->getDoctrine()->getRepository(compagnie::class)->findOneBy(['abreviation' => 'abr']);
        $form = $this->createForm(Compagnie1Type::class, $compagnie);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('compagnie_new');
        }

        return $this->render('compagnie/edit.html.twig', [
            'compagnie' => $compagnie,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="compagnie_show", methods={"GET"})
     */
    public function show(Compagnie $compagnie): Response
    {
        return $this->render('compagnie/show.html.twig', [
            'compagnie' => $compagnie,
        ]);
    }

            /**
             * @Route("/{id}/edit", name="compagnie_edit", options={"expose"=true}, methods={"GET","POST"})
             */
            public function edit(Request $request,  compagnie $compagnie,Breadcrumbs $breadcrumbs ,$id): Response
            {
                $breadcrumbs->prependRouteItem("Applications", "app");
                $breadcrumbs->addRouteItem("Configration", "config_index");
                $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
                $breadcrumbs->addRouteItem("Entreprise", "compagnie_index");
                $breadcrumbs->addItem('Modifier');
                $compagnie = $this->getDoctrine()->getRepository(compagnie::class)->find($id);
                $form = $this->createForm(Compagnie1Type::class, $compagnie);
                $form->handleRequest($request);
                
                if ($form->isSubmitted() && $form->isValid()) {
                    $this->getDoctrine()->getManager()->flush();
                    $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
                    return $this->redirectToRoute('compagnie_edit', [
                        'id' => $id,
                    ]);
                }
        
                return $this->render('compagnie/edit.html.twig', [
                    'compagnie' => $compagnie,
                    'form' => $form->createView(),
                ]);
            }
   

    /**
     * @Route("/{id}", name="compagnie_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Compagnie $compagnie): Response
    {
        if ($this->isCsrfTokenValid('delete'.$compagnie->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($compagnie);
            $entityManager->flush();
        }

        return $this->redirectToRoute('compagnie_index');
    }
}
