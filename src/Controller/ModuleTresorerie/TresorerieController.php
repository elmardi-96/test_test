<?php


namespace App\Controller\ModuleTresorerie;

use App\Entity\TrCompte;
use App\Entity\TAchatdemandeinternecab ;
use App\Entity\UVDeviscab ;

use App\Entity\UATCommandefrscab ;


use App\Form\TrCompteType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

use \App\Repository\UsModuleRepository;
use App\Repository\PDossierRepository;
use \App\Service\AppService;
/**
 * @Route("tresorerie/")
 */
class TresorerieController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
    

    /**
     * @Route("/", name="tresorerie_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {


     
    
        $modules = $this->session->get('modules');
        $operations = $modules['_compte']['dossiers']['_default_compte']['sousModules']['_compte_bq']['operations'];





        $breadcrumbs->prependRouteItem("Applications", "app");
        
        
        $breadcrumbs->addRouteItem("Compte", "t_r_comptes_index");
        $breadcrumbs->addItem("Compte");
      

        return $this->render('tresorerie/tr_compte/index.html.twig',['operations'=>$operations]);
    }

  

   /**
     * @Route("module/{module_id}/dossier/{dossier_id}/home", name="dossier_courant_tresorerie", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function getdossiercourant(Request $request, UsModuleRepository $UsModuleRepository, PDossierRepository $PDossierRepository, $module_id, $dossier_id): Response {


        $module = $UsModuleRepository->find($module_id);
        $dossier = $PDossierRepository->find($dossier_id);
       
     
        $this->session->set('dossierCourantTresorerie', $dossier);
        $this->session->set('moduleCourantTresorerie', $module);



        return $this->render('tresorerie/index.html.twig', ['dossier' => $dossier]);
    }

    
}
