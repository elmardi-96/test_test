<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;

class SecurityController extends AbstractController
{

    public function __construct(SessionInterface $session)

    {
        $this->session = $session;
    }

    /**
     * @Route("/", name="login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // die('here');
        if ($this->getUser()) {
            return $this->redirectToRoute('dashboards');
        }
        
        // get the login error if there is one  
        //getaccess

        $error = $authenticationUtils->getLastAuthenticationError();

        //   die('here'); 
        // $lastUsername = $authenticationUtils->getLastUsername();
        $lastUsername = null;


        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

    public function getAccessOperation($module, $sousModule, $operation, $dossier)
    {

        //echo $this->renderView('module_univ/error/error.html.twig');die();
        //dump($module);die();
        // dump($value['breadcrumb'][$key]['module']);
        // die('hello world');
        /* foreach ($brec['breadcrumb'] as $key => $value) {
            //dump($value['module']);
            //dump($value['route']);
           // dump($value['breadcrumb'][$key]['module']);
           
        }
       // die('hello world');
       
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Etudiant", "module_univ_etudiant_index");
        $breadcrumbs->addRouteItem($etudiant->getCode(), "module_univ_etudiant_show", ['id' => $etudiant->getId()]);
        $breadcrumbs->addItem('Modifier');*/
        // _default_univ
        //$dc = $this->session->get('dossier');
        // dump( $this->session->get('modules')[$module]['dossiers'][$dossier]); 
        //    die;
        //   $session->set('dossier', $dossier);
        //die($this->session->get('modules')[$module]['dossiers'][$dossier]['sousModules'][$sousModule]['operations'][$operation]);



        //   dump($this->getUser());
        //die;
        if (!isset($this->session->get('modules')[$module]['dossiers'][$dossier]['sousModules'][$sousModule]['operations'][$operation])) {
            //die('vous n\'avez pas le droit d\'accéder à cette opération');
            //return $this->render('module_univ/error/error.html.twig');
            //return $this->renderView('module_univ/error/error.html.twig');
            echo $this->renderView('module_univ/error/error.html.twig');
            die();
        }
        return new Response('');
    }

    public function getAccessOperationReturnResultat($module, $sousModule, $operation, $dossier)
    {
        if (!isset($this->session->get('modules')[$module]['dossiers'][$dossier]['sousModules'][$sousModule]['operations'][$operation])) {
            return false;
        }
        return new Response('');
    }
}
