<?php

namespace App\Controller\parametrage;

use App\Entity\PGrade;
use App\Form\PGradeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/p/grade")
 */
class PGradeController extends AbstractController
{
    /**
     * @Route("/", name="p_grade_index", methods={"GET"})
     */
    public function index(): Response
    {
        $pGrades = $this->getDoctrine()
            ->getRepository(PGrade::class)
            ->findAll();

        return $this->render('p_grade/index.html.twig', [
            'p_grades' => $pGrades,
        ]);
    }

    /**
     * @Route("/new", name="p_grade_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $pGrade = new PGrade();
        $form = $this->createForm(PGradeType::class, $pGrade);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pGrade);
            $entityManager->flush();

            return $this->redirectToRoute('p_grade_index');
        }

        return $this->render('p_grade/new.html.twig', [
            'p_grade' => $pGrade,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="p_grade_show", methods={"GET"})
     */
    public function show(PGrade $pGrade): Response
    {
        return $this->render('p_grade/show.html.twig', [
            'p_grade' => $pGrade,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="p_grade_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, PGrade $pGrade): Response
    {
        $form = $this->createForm(PGradeType::class, $pGrade);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('p_grade_index');
        }

        return $this->render('p_grade/edit.html.twig', [
            'p_grade' => $pGrade,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="p_grade_delete", methods={"DELETE"})
     */
    public function delete(Request $request, PGrade $pGrade): Response
    {
        if ($this->isCsrfTokenValid('delete'.$pGrade->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pGrade);
            $entityManager->flush();
        }

        return $this->redirectToRoute('p_grade_index');
    }
}
