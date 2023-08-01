<?php

namespace App\Controller\ModuleTresorerie;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use \App\Service\AppService;

/**
 * @Route("tresorerie")
 */
class ModuleTresorerieController extends AbstractController {

    public function __construct(AppService $AppService) {
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_tresorerie_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(): Response {
        return $this->render('tresorerie/index.html.twig', []);
    }

}
