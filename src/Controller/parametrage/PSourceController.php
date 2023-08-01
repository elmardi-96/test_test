<?php

namespace App\Controller\parametrage;

use App\Entity\PSource;
use App\Form\PSourceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/p/source")
 */
class PSourceController extends AbstractController
{
    /**
     * @Route("/", name="p_source_index", methods={"GET"})
     */
    public function index(): Response
    {
        $pSources = $this->getDoctrine()
            ->getRepository(PSource::class)
            ->findAll();

        return $this->render('p_source/index.html.twig', [
            'p_sources' => $pSources,
        ]);
    }

    /**
     * @Route("/new", name="p_source_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $pSource = new PSource();
        $form = $this->createForm(PSourceType::class, $pSource);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pSource);
            $entityManager->flush();

            return $this->redirectToRoute('p_source_index');
        }

        return $this->render('p_source/new.html.twig', [
            'p_source' => $pSource,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="p_source_show", methods={"GET"})
     */
    public function show(PSource $pSource): Response
    {
        return $this->render('p_source/show.html.twig', [
            'p_source' => $pSource,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="p_source_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, PSource $pSource): Response
    {
        $form = $this->createForm(PSourceType::class, $pSource);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('p_source_index');
        }

        return $this->render('p_source/edit.html.twig', [
            'p_source' => $pSource,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="p_source_delete", methods={"DELETE"})
     */
    public function delete(Request $request, PSource $pSource): Response
    {
        if ($this->isCsrfTokenValid('delete'.$pSource->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pSource);
            $entityManager->flush();
        }

        return $this->redirectToRoute('p_source_index');
    }
}
