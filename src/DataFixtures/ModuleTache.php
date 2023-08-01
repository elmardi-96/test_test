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

class ModuleTache extends Fixture implements FixtureGroupInterface {

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {





        /* affecter le dossier par défaut pour ce module NB : pour chaque Module il faut créer un dossier par défault */

//        $dossierParDefault = new PDossier();
//        $dossierParDefault->setCode("DOS0000008");
//        $dossierParDefault->setNomDossier("dossier par défault tâche");
//        $dossierParDefault->setDescription("dossier par défault tâche");
//        $dossierParDefault->setTitre("dossier par défault tâche");
//        $dossierParDefault->setAbreviation("dossier tâche");
//        $dossierParDefault->setPrefix("_default_tache");
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
//        $module->setAbreviation('tâche');
//        $module->setTitre('Gestion des taches');
//        $module->setDescription('module permet de gérer les ressources, damande , incidents , bugs...');
//        $module->setActive(0);
//        $module->setPrefix('_tache');
//        $module->setImage('tache.png');
//        $module->setInfo('Gérez facilement vos tâches.');
//        $module->setRole('ROLE_TACHE');
//        $module->setRouteConfig('config_index');
//        $module->setType('standard édition');
//        $module->setTypeId(true);
//        $module->addModulesDossier($dossierParDefault);
//        $module->setRoute('module_tache_index');
//        $module->setOrd(8);
//        $manager->persist($module);
//
//
//
//
//
//
//
//
//        $tacheProjet = new UsSousModule();
//        $tacheProjet->setModule($module);
//        $tacheProjet->setTitre('Projets');
//        $tacheProjet->setAbreviation('Projets');
//        $tacheProjet->setActive(true);
//        $tacheProjet->setPrefix('_tache_projet');
//        $tacheProjet->setIcon('fa-folder-o');
//        $tacheProjet->setActiveLink('projet');
//        $tacheProjet->setRoute('module_tache_projet_index');
//        $tacheProjet->setLinkDirect(true);
//        $manager->persist($tacheProjet);
//
//
//        $operation = new UsOperation(); 
//        $operation->setTitre('Projets');
//        $operation->setPrefix('_index');
//        $operation->setRoute('module_tache_projet_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($tacheProjet);
//        $manager->persist($operation);  
//
//
//
//        $tachetache = new UsSousModule();
//        $tachetache->setModule($module);
//        $tachetache->setTitre('tâches');
//        $tachetache->setAbreviation('tâches');
//        $tachetache->setActive(true);
//        $tachetache->setPrefix('_tache_tache');
//        $tachetache->setIcon('fa-file-text-o');
//        $tachetache->setActiveLink('tache');
//        $manager->persist($tachetache);
//
//        $tachefilter = new UsSousModule();
//        $tachefilter->setModule($module);
//        $tachefilter->setTitre('filtre');
//        $tachefilter->setAbreviation('filtre');
//        $tachefilter->setActive(true);
//        $tachefilter->setPrefix('_tache_filtre');
//        $tachefilter->setIcon('fa-filter');
//        $tachefilter->setActiveLink('filtre');
//        $manager->persist($tachefilter);
//
//
//        $tacherapport = new UsSousModule();
//        $tacherapport->setModule($module);
//        $tacherapport->setTitre('rapport');
//        $tacherapport->setAbreviation('rapport');
//        $tacherapport->setActive(true);
//        $tacherapport->setPrefix('_tache_rapport');
//        $tacherapport->setIcon('fa fa-telegram');
//        $tacherapport->setActiveLink('filtres');
//        $manager->persist($tacherapport);


        $manager->flush();
    }

    public static function getGroups(): array {
        return ['ModuleGrs'];
    }

}
