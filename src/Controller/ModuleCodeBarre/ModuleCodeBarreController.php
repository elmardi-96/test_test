<?php

namespace App\Controller\ModuleCodeBarre;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use \App\Service\AppService;

/**
 * @Route("codeBarre")
 */
class ModuleCodeBarreController extends AbstractController {
    public function __construct(AppService $AppService) {
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_qr_index",methods={"GET"})
     */
    public function index(): Response {
        return $this->render('module_codeBarre/index.html.twig',[]);
    }

}
