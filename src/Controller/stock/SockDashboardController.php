<?php

namespace App\Controller\stock;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use \App\Service\AppService;

/**
 * @Route("ustock/dashboard")
 */
class SockDashboardController extends AbstractController {

    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="stock_produit_dashboard", methods={"GET","POST"})
     */
    public function StockProduitdashboard(Request $request, Breadcrumbs $breadcrumbs): Response {


        /* informations modules dossiers Autorisés pour cet utilisateur */
       /* $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');

        /* Vérifier si cet utilisateur il peut accéder a cette opération */
      /*  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_tb']['operations']['_index'])) {
            return new Response("Opération non autorié", 403);
        }*/

        /* sous module courant */
      //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_tb'];


      //  $operations = $this->appService->getOperations('_module_stock', '_tb', '_index', true);

        /* navigation  */
       /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_dashboard");
        $breadcrumbs->addItem("index");*/

        return $this->render('ugouv/achat/dashboard/dashboard.html.twig');
    }

 

}
