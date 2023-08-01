<?php

namespace App\Controller\moduleVente;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use \App\Service\AppService;

/**
 * @Route("vente")
 */
class ModuleVenteController extends AbstractController {

   

    public function __construct(AppService $AppService) {
        $this->appService = $AppService;
    }

    /**

     * @Route("/", name="module_vente_index", options={"expose"=true}, methods={"GET"})

     */
    public function index(): Response {
        return $this->render('module_vente/index.html.twig',[]);
    }

}
