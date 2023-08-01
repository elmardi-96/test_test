<?php

namespace App\Controller\moduleUniv;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;

/**
 * @Route("univ/dashboard")
 */
class UnivDashboardController extends AbstractController {

    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }

    /**
     * @Route("/", name="module_univ_dashboard", methods={"GET","POST"})
     */
    public function dashboard(Request $request, Breadcrumbs $breadcrumbs): Response {

//
//        /* informations modules dossiers Autorisés pour cet utilisateur */
//        $mc = $this->session->get('moduleCourantUgouvAchat');
//        $dc = $this->session->get('dossierCourantUgouvAchat');
//        $modules = $this->session->get('modules');
//
//        /* Vérifier si cet utilisateur il peut accéder a cette opération */
//        if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_tb']['operations']['_index'])) {
//            return new Response("Opération non autorié", 403);
//        }
//
//
//        /* sous module courant */
//        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_tb'];
//
//
//
//        /* navigation  */
//        $breadcrumbs->prependRouteItem("Applications", "app");
//        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
//        $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_dashboard");
//        $breadcrumbs->addItem("index");

        return $this->render('ugouv/achat/dashboard/dashboard.html.twig');
    }

 

}
