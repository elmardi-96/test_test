<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/member") */
class MemberController extends Controller {

    /**
     * @Route("/")
     */
    public function index() {
        return $this->render('etudiant/index.html.twig', ['mainNavMember'=>true, 'title'=>'Espace Membre']);
    }

}