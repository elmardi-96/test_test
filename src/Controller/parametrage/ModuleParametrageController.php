<?php

namespace App\Controller\parametrage;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use \App\Service\AppService;

/**
 * @Route("param")
 */
class ModuleParametrageController extends AbstractController {

   

    public function __construct(AppService $AppService) {
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_parametrage_ugouv_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(): Response {
        return $this->render('parametrage/index.html.twig',[]);
    }

    /**
     * @Route("/univ", name="module_parametrage_univ_index", options={"expose"=true}, methods={"GET"})
     */
    public function UnivIndex(): Response {
        return $this->render('parametrage/index_univ.html.twig',[]);
    }
}
