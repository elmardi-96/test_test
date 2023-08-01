<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\User;
use App\Entity\UsModule;
use App\Entity\UsSousModule;
use App\Entity\UsOperation;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\PDossier;
use App\Entity\PStatutgrv;
use App\Entity\UsGroupe;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class ModuleTransformation extends Fixture implements FixtureGroupInterface {

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {



        /**
         * 
         * Module Ugouv Vente
         * 
         * 
         * */
//        $moduleTransformation = new UsModule();
//        $moduleTransformation->setAbreviation('Transformation');
//        $moduleTransformation->setTitre('Affectation & Transformation');
//        $moduleTransformation->setDescription('module permet de gérer vos Transformation et affectation  ...');
//        $moduleTransformation->setActive(false);
//        $moduleTransformation->setRoute('_transformation_affectation_dossiers_by_module');
//        $moduleTransformation->setRouteWithParam(true);
//        $moduleTransformation->setPrefix('_transformation_affectation');
//        $moduleTransformation->setImage('ugouv_vente.png');
//        $moduleTransformation->setInfo('module permet de gérer vos Transformation et affectation .');
//        $moduleTransformation->setRole('ROLE_TRANSFORMATION_AFFECTATION');
//        $moduleTransformation->setRouteConfig('config_index');
//        $moduleTransformation->setType('standard édition');
//        $moduleTransformation->setTypeId(8);
//        $moduleTransformation->setOrd(8);
//
//        
//        
//        $moduleTransformation->addModulesDossier($this->getReference(DefaultParam::Dossier1)); 
//        $moduleTransformation->addModulesDossier($this->getReference(DefaultParam::Dossier2));
//        $moduleTransformation->addModulesDossier($this->getReference(DefaultParam::Dossier3));
//        $manager->persist($moduleTransformation);
//
//
//
//        /**
//         * 
//         *  Achat sous ventre achat ugouv 
//         *
//         * */
//        $tabeauBord = new UsSousModule();
//        $tabeauBord->setModule($moduleTransformation);
//        $tabeauBord->setTitre('tableau bord');
//        $tabeauBord->setAbreviation('tableau bord');
//        $tabeauBord->setActive(true);
//        $tabeauBord->setPrefix('_tb_cl');
//        $tabeauBord->setIcon('fa-bar-chart-o');
//        $manager->persist($tabeauBord);
//
//
//        
//
//        $Commande = new UsSousModule();
//        $Commande->setModule($moduleTransformation);
//        $Commande->setTitre('Commande');
//        $Commande->setAbreviation('Commande');
//        $Commande->setActive(true);
//        $Commande->setPrefix('_tr_com');
//        $Commande->setIcon('fa-handshake-o');
//        $Commande->setActiveLink('commande'); 
//
//        $manager->persist($Commande);
//
//
//        
//        $operation = new UsOperation();
//        $operation->setTitre('ajouter');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('t_transformation_new');
//        $operation->setPrefix('_new');
//        $operation->setHorizontale(true);
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($Commande);
//        $manager->persist($operation);
//
//
//        
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('t_transformationt_commande_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($Commande);
//        $manager->persist($operation);
//
//        $manager->flush();
    }

    public static function getGroups(): array {
        return ['UgouvVente'];
    }

}
