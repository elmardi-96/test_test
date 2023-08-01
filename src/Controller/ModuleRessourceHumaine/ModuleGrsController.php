<?php

namespace App\Controller\ModuleRessourceHumaine;

use App\Repository\PDossierRepository;
use App\Repository\UsModuleRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("grs")
 */
class ModuleGrsController extends AbstractController {

    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }

    /**
     * @Route("/", name="module_grs_index")
     */
    public function index() {
        return $this->render('module_ressource_humaine/index.html.twig', [
        ]);
    }

  
   /**
     * @Route("/module/{module_id}/dossier/{dossier_id}/home", name="dossier_courant_grs", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function getdossiercourant( UsModuleRepository $UsModuleRepository, PDossierRepository $PDossierRepository, $module_id, $dossier_id): Response {


        $module = $UsModuleRepository->find($module_id);
        $dossier = $PDossierRepository->find($dossier_id);
       
        
        $this->session->set('dossierCourantGrs', $dossier);
        $this->session->set('moduleCourantGrs', $module);



        return $this->render('module_ressource_humaine/index.html.twig', ['dossier' => $dossier]);
    }

}
