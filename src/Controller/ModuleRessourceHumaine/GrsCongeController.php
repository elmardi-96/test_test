<?php

namespace App\Controller\ModuleRessourceHumaine;

use App\Entity\GrsConge;
use App\Form\GrsCongeType;
use App\Repository\GrsCongeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/grs/conge")
 */
class GrsCongeController extends AbstractController
{
    /**
     * @Route("/", name="grs_conge_index", methods={"GET"})
     */
    public function index(GrsCongeRepository $grsCongeRepository): Response
    {
        return $this->render('grs_conge/index.html.twig', [
            'grs_conges' => $grsCongeRepository->findAll(),
        ]);
    }

}
