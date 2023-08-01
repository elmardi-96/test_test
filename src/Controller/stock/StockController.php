<?php

namespace App\Controller\stock;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use \App\Repository\UsModuleRepository;
use App\Repository\PDossierRepository;
/**
 * @Route("stock")
 */
class StockController extends AbstractController {

    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }

     /**
     * @Route("/module/{module_id}/dossier/{dossier_id}/home", name="dossier_courant_devis", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function getdossiercourant(Request $request, UsModuleRepository $UsModuleRepository, PDossierRepository $PDossierRepository, $module_id, $dossier_id): Response {


        $module = $UsModuleRepository->find($module_id);
        $dossier = $PDossierRepository->find($dossier_id);

        $this->session->set('dossierCourantStock', $dossier);
        $this->session->set('moduleCourantStock', $module);



        return $this->render('stock/index.html.twig', [
            'controller_name' => 'UarticleController',
]);
    }


    // /**
    //  * @Route("/", name="stock_index")
    //  */
    // public function index() {

    //     //  dump($this->session->get('modules')['_stock']['dossiers']['_default_stock']); die(); 
    //     return $this->render('stock/index.html.twig', [
    //                 'controller_name' => 'UarticleController',
    //     ]);
    // }

  

}
