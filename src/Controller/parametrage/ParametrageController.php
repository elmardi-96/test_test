<?php

namespace App\Controller\parametrage;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\Session;
use App\Entity\UsModule;
use App\Entity\PDossier;

use Symfony\Component\HttpFoundation\Session\SessionInterface;



/**
 * @Route("/admin")
 */
class ParametrageController extends AbstractController
{

    public function __construct(SessionInterface $session)
    {

        $this->session = $session;
    }
    /**
     * @Route("/", name="parametrage_index", methods={"GET"})
     */
    public function parametrageList(Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addItem("Paramétrage");
        return $this->render('parametrage/index.html.twig');
    }
    /**
     * @Route("/ugouv", name="parametrage_ugouv", methods={"GET"})
     */
    public function parametrageUgouv(Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addItem("Ugouv");
        return $this->render('parametrage/ugouv.html.twig');
    }



    /**
     * @Route("/univ/param", name="parametrage_admin_univ", methods={"GET"})
     */
    public function parametrageUnivAdmin(Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage ", "parametrage_admin_univ");

        $breadcrumbs->addItem("Univ");
        return $this->render('parametrage/univ_config_index.html.twig');
    }

    /**
     * @Route("/admin/param/{id}/module/{dos}", name="parametrage_by_module", methods={"GET"})
     */
    public function parametrageUgouvAdmin(Breadcrumbs $breadcrumbs, UsModule $module, $dos): Response
    {
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dos);

        $this->session->set('dossierParametrage', $dossier);
        $this->session->set('moduleParametrage', $module);

        return $this->redirectToRoute('parametrage_admin_index');
    }

    /**
     * @Route("/param", name="parametrage_admin_index", methods={"GET"})
     */
    public function parametrageAdminIndex(Breadcrumbs $breadcrumbs): Response
    {


        $module = $this->getDoctrine()->getRepository(UsModule::class)->findOneByPrefix($this->session->get('moduleParametrage')->getPrefix());
        $this->session->set('moduleParametrage', $module);


        //  dump($this->session->get('moduleParametrage'));
        // die;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage ", "parametrage_admin_index");

        $breadcrumbs->addItem("Index");
        return $this->render('parametrage/ugouv_config_index.html.twig');
    }



    /**
     * @Route("/AppConfig", name="parametrage_appconfig", methods={"GET"})
     */
    public function parametrageAppConfig(Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addItem("App Config");
        return $this->render('parametrage/appconfig.html.twig');
    }
}
