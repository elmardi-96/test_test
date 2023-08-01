<?php

namespace App\Controller\moduleTache;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\TaProjet; 
/**
 * @Route("tache/projet")
 */
class ProjetController extends AbstractController {

    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }

    /**
     * @Route("/", name="module_tache_projet_index")
     */
    public function index() {
  
        return $this->render('module_tache/projet/index.html.twig', [
            'projets'=> $this->getDoctrine()->getRepository(TaProjet::class)->findBy(['active'=>true])
        ]);
    }

  

}
