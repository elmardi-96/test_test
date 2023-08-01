<?php

namespace App\Controller\parametrage;

use App\Entity\PResponsable;
use App\Form\PResponsableType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/p/responsable")
 */
class PResponsableController extends AbstractController
{
    /**
     * @Route("/", name="p_responsable_index", methods={"GET"})
     */
    public function index(): Response
    {
        $pResponsables = $this->getDoctrine()
            ->getRepository(PResponsable::class)
            ->findAll();

        return $this->render('p_responsable/index.html.twig', [
            'p_responsables' => $pResponsables,
        ]);
    }

    /**
     * @Route("/new", name="p_responsable_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $pResponsable = new PResponsable();
        $form = $this->createForm(PResponsableType::class, $pResponsable);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pResponsable);
            $entityManager->flush();

            return $this->redirectToRoute('p_responsable_index');
        }

        return $this->render('p_responsable/new.html.twig', [
            'p_responsable' => $pResponsable,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="p_responsable_show", methods={"GET"})
     */
    public function show(PResponsable $pResponsable): Response
    {
        return $this->render('p_responsable/show.html.twig', [
            'p_responsable' => $pResponsable,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="p_responsable_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, PResponsable $pResponsable): Response
    {
        $form = $this->createForm(PResponsableType::class, $pResponsable);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('p_responsable_index');
        }

        return $this->render('p_responsable/edit.html.twig', [
            'p_responsable' => $pResponsable,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="p_responsable_delete", methods={"DELETE"})
     */
    public function delete(Request $request, PResponsable $pResponsable): Response
    {
        if ($this->isCsrfTokenValid('delete'.$pResponsable->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pResponsable);
            $entityManager->flush();
        }

        return $this->redirectToRoute('p_responsable_index');
    }
}
