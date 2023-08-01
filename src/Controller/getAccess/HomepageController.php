<?php

//            foreach ($modules as $key => $module) {
//
//                $ifHsModule = $UsGroupePermissionRepository->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'activeModule' => true]);
//                if ($hasAccess == true || $ifHsModule <> null) {
//
//                    $data[$module->getPrefix()]['id'] = $module->getId();
//                    $data[$module->getPrefix()]['titre'] = $module->getTitre();
//                    $data[$module->getPrefix()]['abreviation'] = $module->getAbreviation();
//                    $data[$module->getPrefix()]['description'] = $module->getDescription();
//                    $data[$module->getPrefix()]['route'] = $module->getRoute();
//                    $data[$module->getPrefix()]['routeWithParam'] = $module->getRouteWithParam();
//                    $data[$module->getPrefix()]['prefix'] = $module->getPrefix();
//                    $data[$module->getPrefix()]['image'] = $module->getImage();
//                    $data[$module->getPrefix()]['classCs'] = $module->getClassCs();
//                    $data[$module->getPrefix()]['idCs'] = $module->getIdCs();
//                    $data[$module->getPrefix()]['icon'] = $module->getIcon();
//                    $data[$module->getPrefix()]['info'] = $module->getInfo();
//                    $data[$module->getPrefix()]['Routeinfo'] = $module->getRouteInfo();
//                    $data[$module->getPrefix()]['config'] = $module->getConfig();
//                    $data[$module->getPrefix()]['routeConfig'] = $module->getRouteConfig();
//                    $data[$module->getPrefix()]['type'] = $module->getType();
//                    $data[$module->getPrefix()]['typeId'] = $module->getTypeId();
//                    $data[$module->getPrefix()]['active'] = $module->getActive();
//                    $data[$module->getPrefix()]['ord'] = $module->getOrd();
//                    $data[$module->getPrefix()]['routeParam'] = $module->getRouteParam();
//
//
//                    foreach ($module->getModulesDossiers() as $key2 => $dossier) {
//
//                        if ($dossier->getActive() == true) {
//
//                            $ifHasDossier = $UsGroupePermissionRepository->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'activeModule' => true, 'activeSousModule' => true]);
//                            //                     
//                            if ($hasAccess == true || $ifHasDossier <> null) {
//                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['id'] = $dossier->getId();
//                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['titre'] = $dossier->getTitre();
//                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['abreviation'] = $dossier->getAbreviation();
//                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['prefix'] = $dossier->getPrefix();
//                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['logo'] = $dossier->getLogo();
//                                
//                                foreach ($module->getSousModules() as $key3 => $sousModule) {
//                                    if ($sousModule->getActive() == true) {
//
//                                        $ifHasSousModule = $UsGroupePermissionRepository->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'sousModule' => $sousModule, 'activeModule' => true, 'activeSousModule' => true]);
//                                        if ($hasAccess == true || $ifHasSousModule <> null) {
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['id'] = $sousModule->getId();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['titre'] = $sousModule->getTitre();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['abreviation'] = $sousModule->getAbreviation();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['description'] = $sousModule->getDescription();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['prefix'] = $sousModule->getPrefix();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['classCs'] = $sousModule->getClassCs();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['idCs'] = $sousModule->getIdCs();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['image'] = $sousModule->getImage();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['icon'] = $sousModule->getIcon();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['route'] = $sousModule->getRoute();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['routeInfo'] = $sousModule->getRouteInfo();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['active'] = $sousModule->getActive();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['activeLink'] = $sousModule->getActiveLink();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['linkDirect'] = $sousModule->getlinkDirect();
//                                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['ordr'] = $sousModule->getOrdr();
//                                        }
//                                        foreach ($sousModule->getOperations() as $key3 => $operation) {
//                                            if ($operation->getActive() == true) {
//                                                $ifHasOperation = $UsGroupePermissionRepository->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'sousModule' => $sousModule, 'activeModule' => true, 'activeSousModule' => true, 'operation' => $operation]);
//
//                                                if ($hasAccess == true || $ifHasOperation <> null) {
//
//
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['id'] = $operation->getId();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['titre'] = $operation->getTitre();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['abreviation'] = $operation->getAbreviation();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['description'] = $operation->getDescription();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['prefix'] = $operation->getPrefix();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['classCs'] = $operation->getClassCs();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['idCs'] = $operation->getIdCs();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['image'] = $operation->getImage();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['icon'] = $operation->getIcon();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['route'] = $operation->getRoute();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['routeInfo'] = $operation->getRouteInfo();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['active'] = $operation->getActive();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['horizontale'] = $operation->getHorizontale();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['verticale'] = $operation->getVerticale();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['multiple'] = $operation->getMultiple();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['routeWithParam'] = $operation->getRouteWithParam();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['ordr'] = $operation->getOrdr();
//                                                    $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['parent'] = $operation->getParent();
//                                                }
//                                            }
//                                        }
//                                    }
//                                }
//                            }
//                        }
//                    }
//                }
//            }

namespace App\Controller\getAccess;

//require 'vendor/autoload.php';
use App\Entity\PDossier;
use App\Entity\PGlobalParam;
use App\Entity\UsModule;
use App\Entity\UATCommandefrscab;
use App\Entity\TAchatdemandeinternecab;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\UsModuleRepository;
use App\Repository\UsSousModuleRepository;
use App\Repository\UsOperationRepository;
use App\Repository\UsGroupePermissionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use App\Repository\PDossierRepository;
use App\Repository\PDossierOrganisationRepository;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Security;

class HomepageController extends Controller {

    private $requestStack;

    public function __construct(SessionInterface $session , RequestStack $requestStack , UsGroupePermissionRepository $permision ,
    PDossierRepository $repDossier,
    PDossierOrganisationRepository $organisation) {
        $this->session = $session;
        $this->requestStack = $requestStack;
     
        $this->permision = $permision;
        $this->repDossier = $repDossier;
        $this->organisation = $organisation;
        
    }

    /**
     * @Route("/getaccess",name="getaccess")
     */
    public function getaccess() {

        $this->getDossierAccess();
        if ($this->isGranted('ROLE_ADMIN')) {
            //   return $this->redirectToRoute('config_index');
            return $this->redirectToRoute('app');
        } elseif ($this->isGranted('ROLE_SUPER_USER') or $this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('app');
        }

        return new Response('Bonjour ' . $this->getUser());
    }



    
    public function getDossierAccess() {

      //  dump($this->getUser());die();
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $hasAccess = $this->isGranted('ROLE_SUPER_USER');

     

        $data = array();

        //$modules = $UsModuleRepository->findBy(['active' => true], ['ord' => 'ASC']);
     

        $organisations =  $this->organisation->findBy(['active' => true]);


     //   dump($organisations);die();
        if ($this->getUser()->getIsActive() == true) {
            $dos=0;

            foreach ($organisations as $key => $organisation) {
                $dossiers =  $this->repDossier->findBy(['active' => true, 'organisation'=>$organisation, 'parentId'=>null]);

               
             



            foreach ($dossiers as $key => $dossier) {
               
                $ifHasDossier = $this->permision->findBy(['groupe' => $this->getUser()->getGroupe(), 'dossier' => $dossier, 'activeModule' => true]);

                if ($hasAccess == true || $ifHasDossier <> null) {

                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['id'] = $dossier->getId();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['titre'] = $dossier->getTitre();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['abreviation'] = $dossier->getAbreviation();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['ordr'] = $dossier->getOrdr();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['prefix'] = $dossier->getPrefix();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['logo'] = $dossier->getLogo();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['description'] = $dossier->getDescription();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['organisation'] =$dossier->getOrganisation() ? $dossier->getOrganisation()->getId() :null;
                 
                 
         
                    $dos=1;

                    $dossierrs =  $this->repDossier->findBy(['active' => true, 'parentId'=> $dossier->getId()]);

                    foreach ($dossierrs as $key => $doss) {
                        $ifHasDossier = $this->permision->findBy(['groupe' => $this->getUser()->getGroupe(), 'dossier' => $doss, 'activeModule' => true]);
                      
                      
                        if ($hasAccess == true || $ifHasDossier <> null) {


                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousdossiers'][$doss->getPrefix()]['id'] = $doss->getId();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousdossiers'][$doss->getPrefix()]['titre'] = $doss->getTitre();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousdossiers'][$doss->getPrefix()]['abreviation'] = $doss->getAbreviation();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousdossiers'][$doss->getPrefix()]['ordr'] = $doss->getOrdr();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousdossiers'][$doss->getPrefix()]['prefix'] = $doss->getPrefix();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousdossiers'][$doss->getPrefix()]['logo'] = $doss->getLogo();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousdossiers'][$doss->getPrefix()]['description'] = $doss->getDescription();
                    $data[$organisation->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousdossiers'][$doss->getPrefix()]['organisation'] =$doss->getOrganisation() ? $doss->getOrganisation()->getId() :null;
                 
                // dump(1);die;



                        }


                    }    


             
                }
            }


          





            if($dos==1){
                $data[$organisation->getPrefix()]['id'] = $organisation->getId();
                $data[$organisation->getPrefix()]['designation'] = $organisation->getDesignation();
                $data[$organisation->getPrefix()]['abreviation'] = $organisation->getAbreviation();
                $data[$organisation->getPrefix()]['ordr'] = $organisation->getOrdr();
            }

           
        }
        }

      //  dump($data); die();
       

        $this->session->set('organisations', $data);
       

        return 1;
    }



    public function getaccessByDossier(PDossier $dossier  ) {

        //dump($this->getUser());die();
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $hasAccess = $this->isGranted('ROLE_SUPER_USER');

     
     
        $data = array();

        //$modules = $UsModuleRepository->findBy(['active' => true], ['ord' => 'ASC']);
       // $dossiers = $PDossierRepository->findBy(['active' => true]);
        if ($this->getUser()->getIsActive() == true) {


         
                $ifHasDossier = $this->permision->findBy(['groupe' => $this->getUser()->getGroupe(), 'dossier' => $dossier, 'activeModule' => true]);

                if ($hasAccess == true || $ifHasDossier <> null) {


                    $data[$dossier->getPrefix()]['id'] = $dossier->getId();
                    $data[$dossier->getPrefix()]['titre'] = $dossier->getTitre();
                    $data[$dossier->getPrefix()]['abreviation'] = $dossier->getAbreviation();
                    $data[$dossier->getPrefix()]['ordr'] = $dossier->getOrdr();
                    $data[$dossier->getPrefix()]['prefix'] = $dossier->getPrefix();
                    $data[$dossier->getPrefix()]['logo'] = $dossier->getLogo();
                    $data[$dossier->getPrefix()]['description'] = $dossier->getDescription();





                    foreach ($dossier->getModulesDossiers() as $key2 => $module) {

                        if ($module->getActive() == true) {

                            $ifHasModule = $this->permision->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'activeModule' => true, 'activeSousModule' => true]);
                            //                     
                            if ($hasAccess == true || $ifHasModule <> null) {
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['id'] = $module->getId();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['solution_id'] = $module->getSolution()->getId();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['solution_titre'] = $module->getSolution()->getTitre();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['solution_abreviation'] = $module->getSolution()->getAbreviation();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['solution_prefix'] = $module->getSolution()->getPrefix();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['titre'] = $module->getTitre();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['abreviation'] = $module->getAbreviation();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['prefix'] = $module->getPrefix();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['description'] = $module->getDescription();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['route'] = $module->getRoute();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['routeWithParam'] = $module->getRouteWithParam();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['image'] = $module->getImage();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['classCs'] = $module->getClassCs();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['idCs'] = $module->getIdCs();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['icon'] = $module->getIcon();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['info'] = $module->getInfo();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['Routeinfo'] = $module->getRouteinfo();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['config'] = $module->getConfig();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['routeConfig'] = $module->getrouteConfig();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['type'] = $module->getType();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['typeId'] = $module->getTypeId();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['active'] = $module->getActive();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['ord'] = $module->getOrd();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['routeParam'] = $module->getRouteParam();
                                $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['activeLink'] = $module->getActiveLink();

                                $data[$dossier->getPrefix()]['solutions'][$module->getSolution()->getPrefix()]['id'] = $module->getSolution()->getId();
                                $data[$dossier->getPrefix()]['solutions'][$module->getSolution()->getPrefix()]['titre'] = $module->getSolution()->getTitre();
                                $data[$dossier->getPrefix()]['solutions'][$module->getSolution()->getPrefix()]['prefix'] = $module->getSolution()->getPrefix();
                                $data[$dossier->getPrefix()]['solutions'][$module->getSolution()->getPrefix()]['route'] = $module->getSolution()->getRoute();



                                foreach ($module->getSousModules() as $key3 => $sousModule) {
                                    if ($sousModule->getActive() == true) {

                                        $ifHasSousModule = $this->permision->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'sousModule' => $sousModule, 'activeModule' => true, 'activeSousModule' => true]);
                                        if ($hasAccess == true || $ifHasSousModule <> null) {
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['id'] = $sousModule->getId();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['titre'] = $sousModule->getTitre();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['abreviation'] = $sousModule->getAbreviation();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['description'] = $sousModule->getDescription();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['prefix'] = $sousModule->getPrefix();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['classCs'] = $sousModule->getClassCs();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['idCs'] = $sousModule->getIdCs();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['image'] = $sousModule->getImage();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['icon'] = $sousModule->getIcon();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['route'] = $sousModule->getRoute();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['routeInfo'] = $sousModule->getRouteInfo();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['active'] = $sousModule->getActive();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['activeLink'] = $sousModule->getActiveLink();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['linkDirect'] = $sousModule->getlinkDirect();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['ordr'] = $sousModule->getOrdr();
                                            $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['theme'] = $sousModule->getTheme();
                                        }
                                        foreach ($sousModule->getOperations() as $key3 => $operation) {
                                            if ($operation->getActive() == true) {
                                                $ifHasOperation = $this->permision->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'sousModule' => $sousModule, 'activeModule' => true, 'activeSousModule' => true, 'operation' => $operation]);

                                                if ($hasAccess == true || $ifHasOperation <> null) {
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['id'] = $operation->getId();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['titre'] = $operation->getTitre();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['abreviation'] = $operation->getAbreviation();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['description'] = $operation->getDescription();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['prefix'] = $operation->getPrefix();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['classCs'] = $operation->getClassCs();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['idCs'] = $operation->getIdCs();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['image'] = $operation->getImage();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['icon'] = $operation->getIcon();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['route'] = $operation->getRoute();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['routeInfo'] = $operation->getRouteInfo();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['active'] = $operation->getActive();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['horizontale'] = $operation->getHorizontale();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['verticale'] = $operation->getVerticale();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['multiple'] = $operation->getMultiple();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['routeWithParam'] = $operation->getRouteWithParam();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['ordr'] = $operation->getOrdr();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['parent'] = $operation->getParent();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['isIndex'] = $operation->getIsIndex();
                                                    $data[$dossier->getPrefix()]['modules'][$module->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['eachRow'] = $operation->getEachRow();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            
        }

//        dump($data);
//        die();

        $this->session->set('dossiers', $data);
     

        return 1;
    }

    /**
     * @Route("/app/{id}",name="app" ,options={"expose"=true})
     */
    public function App(Request $request, $id = null) {


       
   //     $request=  $this->requestStack->getCurrentRequest();
//dump($request->hasSession());die();

//$organisations =  $this->organisation->findBy(['active' => true]);
        if ($id != null) {



            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($id);
            if (isset($dossier)) {
                
                $session = new Session();
                $session->set('dossierCourant', $dossier);
                if ($dossier->getAbreviation() == "A2MF") {
                    //PGlobalParam
                    $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th1']);
                } else if ($dossier->getAbreviation() == "SMCO") {
                    //PGlobalParam
                    $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th2']);
                } else if ($dossier->getAbreviation() == "DU3S") {
                    //PGlobalParam
                    $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th3']);
                } else if ($dossier->getAbreviation() == "MTRS") {
                    //PGlobalParam
                    $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th4']);
                } else if ($dossier->getAbreviation() == "PDMF") {
                    //PGlobalParam
                    $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th5']);
                } else {
                    $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th1']);
                }

//                dump($this->session->get('dossiers'));
//                die();
              /*  foreach ($this->session->get('dossiers') as $key => $value) {
                    if (isset($value['modules'])) {
                        foreach ($value['modules'] as $key2 => $value2) {
                            foreach ($value2['sousModules'] as $key3 => $value3) {
                                // dump($value3['theme']);
                                $_SESSION['_sf2_attributes']['dossiers'][$key]['modules'][$key2]['sousModules'][$key3]['theme'] = $par;
                            }
                        }
                    }
                }*/
                $this->getaccessByDossier($dossier);
                return $this->redirectToRoute('defaultUgouv');
            }
        }else{
        //    dump( $this->getDossierAccess());
                          // die();
            $this->getDossierAccess();
        }


        
        return $this->render('app/index.html.twig');
    }

    /**
     * @Route("/solutions",name="solutions" ,options={"expose"=true})
     */
    public function Solutions(Request $request) {
        return $this->render('app/solutions.html.twig');
    }


  

    /**
     * @Route("/ugouv",name="defaultUgouv" ,options={"expose"=true})
     */
    public function DefaultUgouv(Request $request) {
        return $this->render('ugouv/index.html.twig');
    }

    /**
     * @Route("/univ",name="defaultUniv" ,options={"expose"=true})
     */
    public function DefaultIniv(Request $request) {
        return $this->render('univ/index.html.twig');
    }

    /**
     * @Route("/setdossiercourant/{id}", options={"expose"=true},name="set_dossier_courant" , methods={"POST"})
     */
    public function SetDossierCourant($id) {
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($id);
        if ($dossier->getAbreviation() == "A2MF") {
            //PGlobalParam
            $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th1']);
        }
        elseif ($dossier->getAbreviation() == "SMCO") {
            //PGlobalParam
            $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th2']);
        }
        elseif ($dossier->getAbreviation() == "DU3S") {
            //PGlobalParam
            $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th3']);
        }
        elseif ($dossier->getAbreviation() == "MTRS") {
            //PGlobalParam
            $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th4']);
        }
        elseif ($dossier->getAbreviation() == "PDMF") {
            //PGlobalParam
            $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th5']);
        }
        elseif ($dossier->getAbreviation() == "DEF") {
            //PGlobalParam
            $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th4']);
        }
        elseif ($dossier->getAbreviation() == "DTST") {
            //PGlobalParam
            $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th5']);
        }else{
            $par = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_th5']);
        }
        $session = new Session();
        $session->set('dossierCourant', $dossier);
        //dump($this->session->get('dossiers'));
        foreach ($this->session->get('dossiers') as $key => $value) {
            // dump($value['modules']);
            foreach ($value['modules'] as $key2 => $value2) {
                # code...
                foreach ($value2['sousModules'] as $key3 => $value3) {
                    // dump($value3['theme']);
                    $_SESSION['_sf2_attributes']['dossiers'][$key]['modules'][$key2]['sousModules'][$key3]['theme'] = $par;
                }
            }
        }
        //dump($this->session->get('dossiers'));die();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification du dossier a été bien effectué .\n Dossier Courant : (' . $dossier->getAbreviation() . ')']], 200);
    }

//    /**
//     * @Route("/ugouv/{id}/dossier",name="home")
//     */
//    public function index(Request $request, $module) {
//        $sql = 'select * from p_dossier';
//        $conn = $this->getDoctrine()->getEntityManager()->getConnection();
//        $stmt = $conn->prepare($sql);
//        $stmt->execute();
//        $dossier = $stmt->fetchAll();
//
//        $form = $this->createFormBuilder()
//                ->add('nomDossier', EntityType::class, [
//                    'class' => PDossier::class,
//                    'choice_label' => 'nomDossier',
//                    'attr' => ['class' => 'dossier'],
//                    'placeholder' => 'Choix dossier ',
//                ])
//                ->getForm();
//        $form->handleRequest($request);
//        return $this->render('home/index.html.twig', [
//                    'form' => $form->createView(),
//                    'dossier' => $dossier,
//                    'module' => $module
//        ]);
//    }
//    /**
//     * @Route("/refresh/{id}",name="refresh" , options={"expose"=true} , methods={"GET"})
//     */
//    public function refresh($id, Request $request) {
//        if ($id == 'empty') {
//            $sql = 'select * from p_dossier';
//        } else {
//            $sql = 'select * from p_dossier where nom_dossier like "%' . $id . '%"';
//        }
//        $conn = $this->getDoctrine()->getEntityManager()->getConnection();
//        $stmt = $conn->prepare($sql);
//        $stmt->execute();
//        $res = $stmt->fetchAll();
//
//        return $this->render('home/refresh.html.twig', array('allDossier' => $res));
//    }
//    /**
//     * @Route("/t_achatdemandeinternecab",name="achat")
//     */
//    public function t_achatdemandeinternecab() {
//        $t_achatdemandeinternecabs = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::Class)->findAll();
//        return $this->render('etudiant/t_achatdemandeinternecab.html.twig', array('t_achatdemandeinternecabs' => $t_achatdemandeinternecabs));
//    }
//
//    /**
//     * @Route("/t_commandefrscab",name="cmd")
//     */
//    public function t_commandefrscab() {
//        $t_commandefrscabs = $this->getDoctrine()->getRepository(TCommandefrscab::Class)->findAll();
//        return $this->render('etudiant/t_commandefrscab.html.twig', array('t_commandefrscabs' => $t_commandefrscabs));
//    }
//
//    /**
//     * @Route("/ugouv/achat/module/{id}/dossiers",name="_ugouv_achat_dossiers_by_module")
//     */
//    public function ugouvAchatDossiers(Request $request, UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository, UsModule $usModule) {
//        return $this->render('ugouv/achat/dossier/index.html.twig', [
//                    'module' => $usModule,
//        ]);
//    }
//
//    /**
//     * @Route("/tresorerie/module/{id}/dossiers",name="_tresorerie_dossiers_by_module")
//     */
//    public function tresorerieDossiers(Request $request, UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository, UsModule $usModule) {
//        return $this->render('tresorerie/dossier/index.html.twig', [
//                    'module' => $usModule,
//        ]);
//    }
//
//    /**
//     * @Route("/grs/module/{id}/dossiers",name="_grs_dossiers_by_module")
//     */
//    public function GrsDossiers(Request $request, UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository, UsModule $usModule) {
//        return $this->render('module_ressource_humaine/dossier/index.html.twig', [
//                    'module' => $usModule,
//        ]);
//    }
//
//    /**
//     * @Route("/ugouv/transformation/module/{id}/dossiers",name="_transformation_affectation_dossiers_by_module")
//     */
//    public function ugouvTransformationDossiers(Request $request, UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository, UsModule $usModule) {
//        return $this->render('transformation/dossier/index.html.twig', [
//                    'module' => $usModule,
//        ]);
//    }
//
//    /**
//     * @Route("/ugouv/vente/module/{id}/dossiers",name="_ugouv_vente_dossiers_by_module")
//     */
//    public function ugouvVenteDossiers(Request $request, UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository, UsModule $usModule) {
//        return $this->render('ugouv/vente/dossier/index.html.twig', [
//                    'module' => $usModule,
//        ]);
//    }
//
//    /**
//     * @Route("/stock/module/{id}/dossiers",name="stock_dossiers_by_module")
//     */
//    public function StockDossiers(Request $request, UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository, UsModule $usModule) {
//        return $this->render('stock/dossier/index.html.twig', [
//                    'module' => $usModule,
//        ]);
//    }
//
//    /**
//     * @Route("/phpofficeExporter",name="phpofficeExporter" ,options={"expose"=true})
//     */
//    public function phpofficeExporter(Request $request) {
//
//        $spreadsheet = new Spreadsheet();
//
//        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
//        $sheet = $spreadsheet->getActiveSheet();
//        $sheet->setCellValue('A1', 'Hello World !');
//        $sheet->setTitle("My First Worksheet");
//
//        // Create your Office 2007 Excel (XLSX Format)
//        $writer = new Xlsx($spreadsheet);
//
//        // Create a Temporary file in the system
//        $fileName = 'my_first_excel_symfony4.xlsx';
//        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
//
//        // Create the excel file in the tmp directory of the system
//        $writer->save($temp_file);
//
//        // Return the excel file as an attachment
//        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
//    }
//
//    /**
//     * @Route("/phpofficeImporter",name="phpofficeImporter" ,options={"expose"=true})
//     */
//    public function phpofficeImporter(Request $request) {
//        //$this->get('kernel')->getProjectDir() . '/public'
//        $filename = $this->get('kernel')->getProjectDir() . '/public/my_first_excel_symfony4.xlsx';
//        if (!file_exists($filename)) {
//            throw new \Exception('File does not exist');
//        }
//
//        $spreadsheet = readFile($filename);
//        $s = new Spreadsheet();
//        $data = $s->createDataFromSpreadsheet($spreadsheet);
//
//        dump($data);
//        die();
//    }
//
//    /**
//     * @Route("phpofficeDocx",name="phpofficeDocx")
//     */
//    public function phpofficeDocx(Request $request) {
//
//        $phpWord = new PhpWord();
//
//        /* Note: any element you append to a document must reside inside of a Section. */
//
//        // Adding an empty Section to the document...
//        $section = $phpWord->addSection();
//        // Adding Text element to the Section having font styled by default...
//        $section->addText(
//                '"Learn from yesterday, live for today, hope for tomorrow. '
//                . 'The important thing is not to stop questioning." '
//                . '(Albert Einstein)'
//        );
//
//        \PhpOffice\PhpWord\Shared\Html::addHtml($section, '<b>sss</b> <strong style="color:red">dfdf</strong>');
//        // Saving the document as OOXML file...
//        $objWriter = IOFactory::createWriter($phpWord, 'Word2007');
//
//        // Create a temporal file in the system
//        $fileName = 'hello_world_download_file.docx';
//        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
//
//        // Write in the temporal filepath
//        $objWriter->save($temp_file);
//
//        // Send the temporal file as response (as an attachment)
//        $response = new BinaryFileResponse($temp_file);
//        $response->setContentDisposition(
//                ResponseHeaderBag::DISPOSITION_ATTACHMENT,
//                $fileName
//        );
//
//        return $response;
//    }
}
