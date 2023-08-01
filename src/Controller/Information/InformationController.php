<?php

namespace App\Controller\Information;

use App\Form\InformationType;
use App\Entity\Info;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


/**
 * @Route("information")
 */
class InformationController extends AbstractController
{
    /**
     * @Route("/", name="information")
     */
    public function index(Request $request)
    {
        $informations = $this->getDoctrine()->getRepository(Info::class)->findAll();
        $info = new Info();
        $form = $this->createForm(InformationType::class, $info);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($info);
            $entityManager->flush();
            return $this->redirectToRoute('information');
        }
        
        return $this->render('information/index.html.twig', [
            'form' => $form->createView(),
            'informations' => $informations
        ]);
    }
}
