<?php

namespace App\Controller\parametrage;

use App\Entity\PDirection;
use App\Form\PDirectionType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/p/direction")
 */
class PDirectionController extends AbstractController
{
    /**
     * @Route("/", name="p_direction_index", methods={"GET"})
     */
    public function index(): Response
    {
        $pDirections = $this->getDoctrine()
            ->getRepository(PDirection::class)
            ->findAll();

        return $this->render('p_direction/index.html.twig', [
            'p_directions' => $pDirections,
        ]);
    }

    /**
     * @Route("/new", name="p_direction_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $pDirection = new PDirection();
        $form = $this->createForm(PDirectionType::class, $pDirection);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pDirection);
            $entityManager->flush();

            return $this->redirectToRoute('p_direction_index');
        }

        return $this->render('p_direction/new.html.twig', [
            'p_direction' => $pDirection,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="p_direction_show", methods={"GET"})
     */
    public function show(PDirection $pDirection): Response
    {
        return $this->render('p_direction/show.html.twig', [
            'p_direction' => $pDirection,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="p_direction_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, PDirection $pDirection): Response
    {
        $form = $this->createForm(PDirectionType::class, $pDirection);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('p_direction_index');
        }

        return $this->render('p_direction/edit.html.twig', [
            'p_direction' => $pDirection,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="p_direction_delete", methods={"DELETE"})
     */
    public function delete(Request $request, PDirection $pDirection): Response
    {
        if ($this->isCsrfTokenValid('delete'.$pDirection->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pDirection);
            $entityManager->flush();
        }

        return $this->redirectToRoute('p_direction_index');
    }
}
