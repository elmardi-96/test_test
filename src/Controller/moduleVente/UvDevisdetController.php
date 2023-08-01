<?php

namespace App\Controller\moduleVente; 

use App\Entity\UvDevisdet;
use App\Form\UvDevisdetType;
use App\Repository\UvDevisdetRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/uv/devisdet")
 */
class UvDevisdetController extends AbstractController
{
    /**
     * @Route("/", name="uv_devisdet_index", methods={"GET"})
     */
    public function index(UvDevisdetRepository $uvDevisdetRepository): Response
    {
        return $this->render('uv_devisdet/index.html.twig', [
            'uv_devisdets' => $uvDevisdetRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="uv_devisdet_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $uvDevisdet = new UvDevisdet();
        $form = $this->createForm(UvDevisdetType::class, $uvDevisdet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($uvDevisdet);
            $entityManager->flush();

            return $this->redirectToRoute('uv_devisdet_index');
        }

        return $this->render('uv_devisdet/new.html.twig', [
            'uv_devisdet' => $uvDevisdet,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="uv_devisdet_show", methods={"GET"})
     */
    public function show(UvDevisdet $uvDevisdet): Response
    {
        return $this->render('uv_devisdet/show.html.twig', [
            'uv_devisdet' => $uvDevisdet,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="uv_devisdet_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, UvDevisdet $uvDevisdet): Response
    {
        $form = $this->createForm(UvDevisdetType::class, $uvDevisdet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('uv_devisdet_index');
        }

        return $this->render('uv_devisdet/edit.html.twig', [
            'uv_devisdet' => $uvDevisdet,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="uv_devisdet_delete2", methods={"DELETE"})
     */
    public function delete(Request $request, UvDevisdet $uvDevisdet): Response
    {
        if ($this->isCsrfTokenValid('delete'.$uvDevisdet->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($uvDevisdet);
            $entityManager->flush();
        }

        return $this->redirectToRoute('uv_devisdet_index');
    }
}
