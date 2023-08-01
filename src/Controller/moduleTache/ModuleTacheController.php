<?php

namespace App\Controller\moduleTache;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * @Route("tache")
 */
class ModuleTacheController extends AbstractController {

    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }

    /**
     * @Route("/", name="module_tache_index")
     */
    public function index() {
        return $this->render('module_tache/index.html.twig', [
        ]);
    }

  

}
