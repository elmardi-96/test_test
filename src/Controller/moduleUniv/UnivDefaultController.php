<?php

namespace App\Controller\moduleUniv;


use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("univ")
 */
class UnivDefaultController extends AbstractController {



   
    /**
     * @Route("/", name="module_univ_index",  options={"expose"=true} ,methods={"GET"})
     */
    public function index(): Response {

        return $this->render('module_univ/index.html.twig', [
                 
        ]);
    }
    
    
    
 

}
