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

use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class UgouvTresorerie extends Fixture implements FixtureGroupInterface {

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {

//        $dossierParDefault = new PDossier();
//        $dossierParDefault->setCode("DOSC0000001");
//        $dossierParDefault->setNomDossier("dossier par défault compte ");
//        $dossierParDefault->setDescription("dossier par défault compte ");
//        $dossierParDefault->setTitre("dossier par défault compte ");
//        $dossierParDefault->setAbreviation("dossier ugouv compte");
//        $dossierParDefault->setPrefix("_default_compte");
//        $dossierParDefault->setActive(true);
//        $manager->persist($dossierParDefault);

        /**
         * 
         * Module Ugouv Vente
         * 
         * 
         * */
//        $moduleCompteUgouv = new UsModule();
//        $moduleCompteUgouv->setAbreviation('Trésorerie');
//        $moduleCompteUgouv->setTitre('module Trésorerie ugouv');
//        $moduleCompteUgouv->setDescription('module permet de gérer vos Trésoreries ,  comptes et caisses ...');
//        $moduleCompteUgouv->setActive(true);
//        $moduleCompteUgouv->setRoute('module_compte_index');
//       
//        $moduleCompteUgouv->setRouteWithParam(false);
//        $moduleCompteUgouv->setPrefix('_compte');
//        $moduleCompteUgouv->setImage('ugouv_compte.png');
//        $moduleCompteUgouv->setInfo('Logiciel de compte en ligne Envoyez des compte professionnels avec Signature et paiement.');
//        $moduleCompteUgouv->setRole('ROLE_UGOUV_COMPTE');
//        $moduleCompteUgouv->setRouteConfig('config_index');
//        $moduleCompteUgouv->setType('spécifique');
//        $moduleCompteUgouv->addModulesDossier($dossierParDefault);
//        $moduleCompteUgouv->setTypeId(3);
//        $moduleCompteUgouv->setOrd(3);

        
        
    
        $manager->persist($moduleCompteUgouv);



        /**
         * 
         *  Achat sous ventre achat ugouv 
         *
         * */
//        $tabeauBord = new UsSousModule();
//        $tabeauBord->setModule($moduleCompteUgouv);
//        $tabeauBord->setTitre('tableau bord');
//        $tabeauBord->setAbreviation('tableau bord');
//        $tabeauBord->setActive(true);
//        $tabeauBord->setPrefix('_compte_tb');
//        $tabeauBord->setIcon('fa-bar-chart-o');
//        $manager->persist($tabeauBord);
//
//        $compte = new UsSousModule();
//        $compte->setModule($moduleCompteUgouv);
//        $compte->setTitre('Compte (banquaire)');
//        $compte->setAbreviation('Compte (banquaire)');
//        $compte->setActive(true);
//        $compte->setPrefix('_compte_bq');
//        $compte->setIcon('fa-clipboard');
//        $manager->persist($compte);
//  
//        $operation = new UsOperation();
//        $operation->setTitre('ajouter');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('t_r_comptes_new');
//        $operation->setPrefix('_new');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($compte);
//        $manager->persist($operation);
//        
//
//
//        
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setType('liste');
//        $operation->setRoute('t_r_comptes_index');
//        $operation->setPrefix('_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($compte);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('t_r_comptes_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($compte);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Modifier (Compte )');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('t_r_comptes_edit');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($compte);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('btn-wrf btn-danger btn-outline  _delete ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete');
//        $operation->setActive(true);
//        $operation->setSousModule($compte);
//        $manager->persist($operation);
//    
//
//        $charge = new UsSousModule();
//        $charge->setModule($moduleCompteUgouv);
//        $charge->setTitre('Charge');
//        $charge->setAbreviation('Charge');
//        $charge->setActive(true);
//        $charge->setPrefix('_charge_bq');
//        $charge->setIcon('fa-clipboard');
//        $manager->persist($charge);
//
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setType('liste');
//        $operation->setRoute('tr_charge_index');
//        $operation->setPrefix('_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($charge);
//        $manager->persist($operation);

        $manager->flush();
    }

    public static function getGroups(): array {
        return ['UgouvCompte'];
    }

}
