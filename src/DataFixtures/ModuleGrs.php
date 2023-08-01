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

class ModuleGrs extends Fixture implements FixtureGroupInterface {

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {





        /* affecter le dossier par défaut pour ce module NB : pour chaque Module il faut créer un dossier par défault */

//        $dossierParDefault = new PDossier();
//        $dossierParDefault->setCode("DOS0000006");
//        $dossierParDefault->setNomDossier("dossier par défault grs");
//        $dossierParDefault->setDescription("dossier par défault grs ");
//        $dossierParDefault->setTitre("dossier par défault grs ");
//        $dossierParDefault->setAbreviation("dossier grs");
//        $dossierParDefault->setPrefix("_default_grs");
//        $dossierParDefault->setActive(true);
//        $dossierParDefault->setUgouv(0);
//        $manager->persist($dossierParDefault);


        /*
         * 
         * 
         * module grs version standard
         * 
         *
         */


//        $module = new UsModule();
//        $module->setAbreviation('congé');
//        $module->setTitre('Gestion Ressource Humaines');
//        $module->setDescription('module permet de gérer les Ressource Humaines, damande/validation des congé...');
//        $module->setActive(0);
//        //$module->setRoute('home');
//        $module->setPrefix('_grs');
//        $module->setImage('icon32.png');
//        $module->setInfo('Gérez facilement congé.');
//        $module->setRole('ROLE_CONGE');
//        $module->setRouteConfig('config_index');
//        $module->setType('standard édition');
//        $module->setTypeId(true);
//        $module->addModulesDossier($dossierParDefault);
//        $module->setRoute('module_grs_index');
//        $module->setOrd(6);
//        $manager->persist($module);




//        $grsConge = new UsSousModule();
//        $grsConge->setModule($module);
//        $grsConge->setTitre('Demande congé');
//        $grsConge->setAbreviation('Demande congé');
//        $grsConge->setActive(true);
//        $grsConge->setPrefix('_grs_cng');
//        $grsConge->setIcon('fa-handshake-o');
//        $grsConge->setActiveLink('grscng');
//        $manager->persist($grsConge);
//
//        $vldConge = new UsSousModule();
//        $vldConge->setModule($module);
//        $vldConge->setTitre('Validation congé');
//        $vldConge->setAbreviation('Validation congé');
//        $vldConge->setActive(true);
//        $vldConge->setPrefix('_vld_cng');
//        $vldConge->setIcon('fa-handshake-o');
//        $vldConge->setActiveLink('grscng');
//        $manager->persist($vldConge);
//
//        $affConge = new UsSousModule();
//        $affConge->setModule($module);
//        $affConge->setTitre('Affectation congé');
//        $affConge->setAbreviation('Affectation congé');
//        $affConge->setActive(true);
//        $affConge->setPrefix('_aff_cng');
//        $affConge->setIcon('fa-handshake-o');
//        $affConge->setActiveLink('grscng');
//        $manager->persist($affConge);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Nouveau');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('module_grs_demande_conge_new');
//        $operation->setPrefix('_new');
//        $operation->setHorizontale(true);
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($grsConge);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('modifier');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setHorizontale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($grsConge);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('module_grs_demande_conge_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($grsConge);
//        $manager->persist($operation);
//
//        
//     
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('module_grs_validation_conge_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($vldConge);
//        $manager->persist($operation);
//        
//        $operation = new UsOperation();
//        $operation->setTitre('calendrier');
//        $operation->setPrefix('_calendar');
//        $operation->setRoute('module_grs_validation_conge_calendar');
//        $operation->setIcon('fa-calendar');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($vldConge);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('module_grs_affectation_conge_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($affConge);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Nouveau');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('module_grs_affectation_conge_new');
//        $operation->setPrefix('_new');
//        $operation->setHorizontale(true);
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($affConge);
//        $manager->persist($operation);


        $manager->flush();
    }

    public static function getGroups(): array {
        return ['ModuleGrs'];
    }

}
