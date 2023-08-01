<?php

namespace App\Controller\ModuleTresorerie;



use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;



/**
 * @Route("comptes")
 */
class CompteDefaultController extends Controller {


    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }
   
    /**
     * @Route("/", name="module_compte_index",  options={"expose"=true} ,methods={"GET"})
     */
    public function index(): Response {
  
        return $this->render('tresorerie/index.html.twig', [
                 
        ]);
    }
    
    
    
 

}
