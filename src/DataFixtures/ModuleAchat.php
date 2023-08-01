<?php

namespace App\DataFixtures;
use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class ModuleAchat extends Fixture implements FixtureGroupInterface
{

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
//        
//        
//     
//        
//        
//        
//
//        /* affecter le dossier par défaut pour ce module NB : pour chaque Module il faut créer un dossier par défault */
//
//        $dossierParDefault = new PDossier();
//        $dossierParDefault->setCode("DOS0000004");
//        $dossierParDefault->setNomDossier("dossier par défault achat");
//        $dossierParDefault->setDescription("dossier par défault achat ");
//        $dossierParDefault->setTitre("dossier par défault achat ");
//        $dossierParDefault->setAbreviation("dossier achat");
//        $dossierParDefault->setPrefix("_default_achat");
//        $dossierParDefault->setActive(true);
//        $dossierParDefault->setUgouv(0);
//        $manager->persist($dossierParDefault);
//
//        
//        /*
//         * 
//         * 
//         * module achat version standard
//         * 
//         *
//         */
//
//
//        $module = new UsModule();
//        $module->setAbreviation('achat');
//        $module->setTitre('module achat');
//        $module->setDescription('module permet de gérer vos achats Bon de commande , fournisseurs , factures et réclamations ...');
//        $module->setActive(0);
//        //$module->setRoute('home');
//        $module->setPrefix('_achat');
//        $module->setImage('achat.png');
//        $module->setInfo('Gérez facilement vos fournisseurs et vos commandes d\'achat. Améliorez votre chaîne logistique & les performances de votre inventaire.');
//        $module->setRole('ROLE_ACHAT');
//        $module->setRouteConfig('config_index');
//        $module->setType('standard édition');
//        $module->setTypeId(true);
//        $module->addModulesDossier($dossierParDefault);
//        $module->setRoute('module_achat_index'); 
//        $module->setOrd(4);
//        $manager->persist($module);
//        
//        
//
//        
//        
//        /*
//         * 
//         *   
//         * opératinons tableau de bord 
//         * 
//         * 
//         * 
//         * */
//        
//        $tabeauBord = new UsSousModule();
//        $tabeauBord->setModule($module);
//        $tabeauBord->setTitre('tableau de bord');
//        $tabeauBord->setAbreviation('tableau de bord');
//        $tabeauBord->setActive(true);
//        $tabeauBord->setPrefix('_tb');
//        $tabeauBord->setIcon('fa-bar-chart-o');
//        $tabeauBord->setRoute('t_achatdemandeinternecab_dashboard');
//        $tabeauBord->setActiveLink('dashboard'); 
//        $manager->persist($tabeauBord);
//        
//        
//       
//        
//        
//        
//        
//        
//       
//
//        /**
//         *
//         *  Achat sous module achat 
//         *
//         * */
//        
//
//        /*mocule achat  sous modules */
//
//        $bcFournisseur = new UsSousModule();
//        $bcFournisseur->setModule($module);
//        $bcFournisseur->setTitre('bon commande fournisseur');
//        $bcFournisseur->setAbreviation('bon commande fournisseur');
//        $bcFournisseur->setActive(true);
//        $bcFournisseur->setPrefix('_bc_fr');
//        $bcFournisseur->setIcon('fa-handshake-o');
//        $bcFournisseur->setActiveLink('commandefrs'); 
//        $manager->persist($bcFournisseur);
//
//        $brFournisseur = new UsSousModule();
//        $brFournisseur->setModule($module);
//        $brFournisseur->setTitre('réception bc fournisseur');
//        $brFournisseur->setAbreviation('réception bc fournisseur');
//        $brFournisseur->setActive(true);
//        $brFournisseur->setPrefix('_br_fr');
//        $brFournisseur->setIcon('fa-handshake-o');
//        $brFournisseur->setActiveLink('livraisonfrs'); 
//        $manager->persist($brFournisseur);
//
//        $factureFournisseur = new UsSousModule();
//        $factureFournisseur->setModule($module);
//        $factureFournisseur->setTitre('factures fournisseur');
//        $factureFournisseur->setAbreviation('factures fournisseur');
//        $factureFournisseur->setActive(true);
//        $factureFournisseur->setPrefix('_fa_fr');
//        $factureFournisseur->setIcon('fa-handshake-o');
//        $factureFournisseur->setActiveLink('facturefrs'); 
//        $manager->persist($factureFournisseur);
//
//        $regFournisseur = new UsSousModule();
//        $regFournisseur->setModule($module);
//        $regFournisseur->setTitre('réglement fournisseur');
//        $regFournisseur->setAbreviation('réglement fournisseur');
//        $regFournisseur->setActive(true);
//        $regFournisseur->setPrefix('_re_fr');
//        $regFournisseur->setIcon('fa-handshake-o');
//        $regFournisseur->setActiveLink('reglementfrs'); 
//        $manager->persist($regFournisseur);
//
//        
//        
//        
//        
///*  opératinons tableau de bord */
//        $operation = new UsOperation();
//        $operation->setTitre('index');
//        $operation->setPrefix('_index');
//        $operation->setRoute('module_achat_dashboard');
//        $operation->setIcon('fa-bar-chart-o');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($tabeauBord);
//        $manager->persist($operation);
//
///*  opératinons commande fournisseur */
//
//        $operation = new UsOperation();
//        $operation->setTitre('ajouter');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('module_achat_commandefrs_new');
//        $operation->setPrefix('_new');
//        $operation->setHorizontale(true);
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('modifier');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setHorizontale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('module_achat_commandefrs_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//        
//     /*  opératinons réception bc fournisseur*/
//
//  
//
//     $operation = new UsOperation();
//     $operation->setTitre('modifier');
//     $operation->setPrefix('_edit');
//     $operation->setIcon('fa-pencil');
//     $operation->setHorizontale(true);
//     $operation->setActive(true);
//     $operation->setSousModule($brFournisseur);
//     $manager->persist($operation);
//
//     $operation = new UsOperation();
//     $operation->setTitre('liste');
//     $operation->setPrefix('_index');
//     $operation->setRoute('module_achat_livraisonfrs_index');
//     $operation->setIcon('fa-list');
//     $operation->setVerticale(true);
//     $operation->setActive(true);
//     $operation->setSousModule($brFournisseur);
//     $manager->persist($operation);   
//          
//     /*  opératinons facture Fournisseur*/
//
//  
//
//     $operation = new UsOperation();
//     $operation->setTitre('modifier');
//     $operation->setPrefix('_edit');
//     $operation->setIcon('fa-pencil');
//     $operation->setHorizontale(true);
//     $operation->setActive(true);
//     $operation->setSousModule($factureFournisseur);
//     $manager->persist($operation);
//
//     $operation = new UsOperation();
//     $operation->setTitre('liste');
//     $operation->setPrefix('_index');
//     $operation->setRoute('module_achat_facturefrs_index');
//     $operation->setIcon('fa-list');
//     $operation->setVerticale(true);
//     $operation->setActive(true);
//     $operation->setSousModule($factureFournisseur);
//     $manager->persist($operation); 
//      /*  opératinons Réglement facture */
//     $operation = new UsOperation();
//     $operation->setTitre('liste');
//     $operation->setPrefix('_index');
//     $operation->setRoute('module_achat_reglement_index');
//     $operation->setIcon('fa-list');
//     $operation->setVerticale(true);
//     $operation->setActive(true);
//     $operation->setSousModule($regFournisseur);
//     $manager->persist($operation); 
//
//        
//
//           
//
//
//
//        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['UgouvAchat'];
    }

}
