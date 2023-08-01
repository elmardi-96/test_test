<?php

namespace App\DataFixtures;

use App\Entity\UsModule;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use App\Entity\PMarche;
use App\Entity\Uarticle;
use App\Entity\UsParametrage;
//
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Faker;

class UgouvAchat extends Fixture implements FixtureGroupInterface {

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {

        $faker = Faker\Factory::create('fr_FR');


//        for ($i = 0; $i < 1000; $i++) {
//            $Uarticle = new Uarticle();
//            $Uarticle->setCode("CODE-000000" . $i);
//            $Uarticle->setTitre($faker->name);
//            $Uarticle->setDescription($faker->text);
//            $manager->persist($Uarticle);
//        }
//
//        $manager->flush();


        /**
         *
         * Modules Ugouv
         *
         * ** */
//        $moduleAchatUgouv = new UsModule();
//        $moduleAchatUgouv->setAbreviation('achat ugouv');
//        $moduleAchatUgouv->setTitre('module achat ugouv');
//        $moduleAchatUgouv->setDescription('module permet de gérer vos achats Bon de commande , fournisseurs , factures et réclamations ...');
//        $moduleAchatUgouv->setActive(true);
//        $moduleAchatUgouv->setRouteWithParam(true);
//        $moduleAchatUgouv->setPrefix('_ugouv_achat');
//        $moduleAchatUgouv->setImage('ugouv_achat.png');
//        $moduleAchatUgouv->setInfo('Gérez facilement vos fournisseurs et vos commandes d\'achat. Améliorez votre chaîne logistique & les performances de votre inventaire.');
//        $moduleAchatUgouv->setRole('ROLE_UGOUV_ACHAT');
//        $moduleAchatUgouv->setRouteConfig('config_index');
//        $moduleAchatUgouv->setType('spécifique');
//        $moduleAchatUgouv->setRoute('_ugouv_achat_dossiers_by_module');
//        $moduleAchatUgouv->setOrd(1);
//
//        $moduleAchatUgouv->setTypeId(2);
//        $moduleAchatUgouv->addModulesDossier($this->getReference(DefaultParam::Dossier1));
//        $moduleAchatUgouv->addModulesDossier($this->getReference(DefaultParam::Dossier2));
//        $moduleAchatUgouv->addModulesDossier($this->getReference(DefaultParam::Dossier3));
//        $manager->persist($moduleAchatUgouv);









        /**
         *
         *  Achat sous module achat ugouv
         *
         * */
//        $tabeauBord = new UsSousModule();
//        $tabeauBord->setModule($moduleAchatUgouv);
//        $tabeauBord->setTitre('tableau de bord');
//        $tabeauBord->setAbreviation('tableau de bord');
//        $tabeauBord->setActive(true);
//        $tabeauBord->setPrefix('_tb');
//        $tabeauBord->setIcon('fa-bar-chart-o');
//        $tabeauBord->setRoute('t_achatdemandeinternecab_dashboard');
//        $tabeauBord->setActiveLink('dashboard');
//        $manager->persist($tabeauBord);
//
//        $expressionBesoin = new UsSousModule();
//        $expressionBesoin->setModule($moduleAchatUgouv);
//        $expressionBesoin->setTitre('expression besoin');
//        $expressionBesoin->setAbreviation('expression besoin');
//        $expressionBesoin->setActive(true);
//        $expressionBesoin->setPrefix('_ex_be');
//        $expressionBesoin->setIcon('fa-handshake-o');
//        $expressionBesoin->setActiveLink('achatdemandeinterne');
//
//        $manager->persist($expressionBesoin);
//
//        $bcFournisseur = new UsSousModule();
//        $bcFournisseur->setModule($moduleAchatUgouv);
//        $bcFournisseur->setTitre('bon commande fournisseur');
//        $bcFournisseur->setAbreviation('bon commande fournisseur');
//        $bcFournisseur->setActive(true);
//        $bcFournisseur->setPrefix('_bc_fr');
//        $bcFournisseur->setIcon('fa-list-alt');
//        $bcFournisseur->setActiveLink('commandefrs');
//        $manager->persist($bcFournisseur);
//
//        $brFournisseur = new UsSousModule();
//        $brFournisseur->setModule($moduleAchatUgouv);
//        $brFournisseur->setTitre('réception bc fournisseur');
//        $brFournisseur->setAbreviation('réception bc fournisseur');
//        $brFournisseur->setActive(true);
//        $brFournisseur->setPrefix('_br_fr');
//        $brFournisseur->setIcon('fa-check-square-o');
//        $brFournisseur->setActiveLink('livraisonfrs');
//        $manager->persist($brFournisseur);
//
//        $factureFournisseur = new UsSousModule();
//        $factureFournisseur->setModule($moduleAchatUgouv);
//        $factureFournisseur->setTitre('facture fournisseur');
//        $factureFournisseur->setAbreviation('facture fournisseur');
//        $factureFournisseur->setActive(true);
//        $factureFournisseur->setPrefix('_fa_fr');
//        $factureFournisseur->setIcon('fa-file-text-o');
//        $factureFournisseur->setActiveLink('facturefrs');
//        $manager->persist($factureFournisseur);
//
//        $regFournisseur = new UsSousModule();
//        $regFournisseur->setModule($moduleAchatUgouv);
//        $regFournisseur->setTitre('réglement  fournisseur');
//        $regFournisseur->setAbreviation('réglement fournisseur');
//        $regFournisseur->setActive(true);
//        $regFournisseur->setPrefix('_re_fr');
//        $regFournisseur->setIcon('fa-credit-card');
//        $regFournisseur->setActiveLink('reglementfrs');
//        $manager->persist($regFournisseur);
//
//        $report = new UsSousModule();
//        $report->setModule($moduleAchatUgouv);
//        $report->setTitre('reporting');
//        $report->setAbreviation('reporting');
//        $report->setActive(true);
//        $report->setPrefix('_rep');
//        $report->setIcon('fa-file-excel-o');
//        $report->setActiveLink('reporting');
//
//        $manager->persist($report);


        /*  opératinons tableau de bord */
//        $operation = new UsOperation();
//        $operation->setTitre('index');
//        $operation->setPrefix('_index');
//        $operation->setRoute('t_achatdemandeinternecab_dashboard');
//        $operation->setIcon('fa-bar-chart-o');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($tabeauBord);
//        $manager->persist($operation);

        /*  opératinons expression besoin */

//        $operation = new UsOperation();
//        $operation->setTitre('ajouter');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('t_achatdemandeinternecab_new');
//        $operation->setPrefix('_new');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('t_achatdemandeinternecab_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Workflow');
//        $operation->setType('Workflow');
//        $operation->setIdCs('_workflow');
//        $operation->setIcon('');
//        $operation->setPrefix('_workflow');
//        $operation->setActive(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Modifier');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('t_achatdemandeinternecab_edit');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('_delete_demmande ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete_demmande');
//        $operation->setActive(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Docs/Impression');
//        $operation->setPrefix('_documents');
//        $operation->setIcon('fa-file-text');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(3);
//        $operation->setActive(true);
//        $operation->setRoute('t_achatdemandeinternecab_documents');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Commande');
//        $operation->setPrefix('_commande');
//        $operation->setIcon('fa-level-down');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(4);
//        $operation->setActive(true);
//        $operation->setRoute('t_achatdemandeinternecab_apply_generer');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Fichiers');
//        $operation->setPrefix('_fichiers');
//        $operation->setIcon('fa-files-o');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(5);
//        $operation->setActive(true);
//        $operation->setRoute('t_achatdemandeinternecab_fichiers');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Suivi des opérations');
//        $operation->setPrefix('_suivi');
//        $operation->setIcon('fa-desktop');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(6);
//        $operation->setActive(true);
//        $operation->setRoute('t_achatdemandeinternecab_suivi_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('t_achatdemandeinternecab_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($expressionBesoin);
//        $manager->persist($operation);
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
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('index');
//        $operation->setType('index');
//        $operation->setIcon('fa-list');
//        $operation->setRoute('reporting_index');
//        $operation->setPrefix('_index');
//        $operation->setHorizontale(true);
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($report);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('synthèse/Montant');
//        $operation->setType('projet');
//        $operation->setIcon('fa-list');
//        $operation->setRoute('reporting_projet');
//        $operation->setPrefix('_reporting_projet');
//        $operation->setHorizontale(true);
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($report);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('synthèse/Reference');
//        $operation->setType('reference');
//        $operation->setIcon('fa-list');
//        $operation->setRoute('reporting_reference');
//        $operation->setPrefix('_reporting_reference');
//        $operation->setHorizontale(true);
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($report);
//        $manager->persist($operation);









        /*  opératinons bon de commande fournisseur */

//        $operation = new UsOperation();
//        $operation->setTitre('ajouter');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('ua_t_commandefrscab_new');
//        $operation->setPrefix('_new');
//
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('t_commandefrscab_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Workflow');
//        $operation->setType('Workflow');
//        $operation->setIdCs('_workflow');
//        $operation->setIcon('');
//        $operation->setPrefix('_workflow');
//        $operation->setActive(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Modifier');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('t_commandefrscab_edit');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('_delete_demmande ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete_commande');
//        $operation->setActive(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Docs/Impression');
//        $operation->setPrefix('_documents');
//        $operation->setIcon('fa-file-text');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(3);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_commandefrscab_documents');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Réceptions');
//        $operation->setPrefix('_receptions');
//        $operation->setIcon('fa-check-square-o');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(4);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_commandefrscab_livraison_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Acompte');
//        $operation->setPrefix('_acompte');
//        $operation->setIcon('fa-money');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(5);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_commandefrscab_acompte');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Fichiers');
//        $operation->setPrefix('_fichiers');
//        $operation->setIcon('fa-files-o');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(6);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_commandefrscab_fichiers');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Suivi des opérations');
//        $operation->setPrefix('_suivi');
//        $operation->setIcon('fa-desktop');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(7);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_commandefrscab_suivi_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('ua_t_commandefrscab_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($bcFournisseur);
//        $manager->persist($operation);






















        /*  opératinons bon de reception  fournisseur */


//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('ua_t_livraisonfrscab_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($brFournisseur);
//        $manager->persist($operation);
//
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_livraisonfrscab_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($brFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Facture');
//        $operation->setPrefix('_facture');
//        $operation->setIcon('fa-level-down');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_livraisonfrscab_generer_facture');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($brFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Docs/Impression');
//        $operation->setPrefix('_documents');
//        $operation->setIcon('fa-file-text');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(3);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_livraisonfrscab_document');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($brFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Workflow');
//        $operation->setType('Workflow');
//        $operation->setIdCs('_workflow');
//        $operation->setIcon('');
//        $operation->setPrefix('_workflow');
//        $operation->setActive(true);
//        $operation->setSousModule($brFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('_delete_livraison ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete_livraison');
//        $operation->setActive(true);
//        $operation->setSousModule($brFournisseur);
//        $manager->persist($operation);
//
//
//        /*  opératinons facture  fournisseur */
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('ua_t_facture_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($factureFournisseur);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_facturefrscab_consulte');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureFournisseur);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Suivi des opérations');
//        $operation->setPrefix('_suivi');
//        $operation->setIcon('fa-desktop');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_facture_suivi_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Docs/Impression');
//        $operation->setPrefix('_document');
//        $operation->setIcon('fa-file-pdf-o');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(3);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_facturefrscab_document');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Paiement');
//        $operation->setPrefix('_paiement');
//        $operation->setIcon('fa-money');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(4);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_facturefrscab_Paiement');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureFournisseur);
//        $manager->persist($operation);
//
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Avoir');
//        $operation->setPrefix('_avoir');
//        $operation->setIcon('fa-reply');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(5);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_facturefrscab_avoir');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Workflow');
//        $operation->setType('Workflow');
//        $operation->setIdCs('_workflow');
//        $operation->setIcon('');
//        $operation->setPrefix('_workflow');
//        $operation->setActive(true);
//        $operation->setSousModule($factureFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('_delete_facture ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete_facture');
//        $operation->setActive(true);
//        $operation->setSousModule($factureFournisseur);
//        $manager->persist($operation);
//
//        /*  opératinons réglement  fournisseur */
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('ua_t_reglement_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($regFournisseur);
//        $manager->persist($operation);
//
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_reglement_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($regFournisseur);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Condition');
//        $operation->setPrefix('_condition');
//        $operation->setIcon('fa-exclamation-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_reglement_condition');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($regFournisseur);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre(' Docs/Impression');
//        $operation->setPrefix('_document');
//        $operation->setIcon('fa-file-pdf-o');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(3);
//        $operation->setActive(true);
//        $operation->setRoute('ua_t_reglement_document');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($regFournisseur);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('_delete_reglement ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete_reglement');
//        $operation->setActive(true);
//        $operation->setSousModule($regFournisseur);
//        $manager->persist($operation);





       
        /* add parametrage */




//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre('Partenaire');
//        $parametrage->setPrefix('partenaire');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('u_p_partenaire_index');
//        $parametrage->setActive(true);
//        $parametrage->setOrdr(1);
//
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre('Devise');
//        $parametrage->setPrefix('devise');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('u_p_devise_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(2);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre('Affaire');
//        $parametrage->setPrefix('affaire');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('u_p_affaire_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(3);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre('Mode paiement');
//        $parametrage->setPrefix('modepaiement');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('p_modepaiement_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(4);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre('Service ');
//        $parametrage->setPrefix('service');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('u_p_service_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(5);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre('Marché');
//        $parametrage->setPrefix('marche');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('p_marche_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(6);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre('Marché sous');
//        $parametrage->setPrefix('sousmarche');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('p_marche_sous_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(7);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre("Nature d'article");
//        $parametrage->setPrefix('uarticle_nature');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('uarticle_nature_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(8);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre("Unité ");
//        $parametrage->setPrefix('unite');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('p_unite_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(9);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre("Banque ");
//        $parametrage->setPrefix('banque');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('u_x_banque_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(10);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre("Projet");
//        $parametrage->setPrefix('projet');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('p_projet_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(11);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre("Responsable ");
//        $parametrage->setPrefix('responsable');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('u_p_responsable_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(12);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);
//
//
//
//        $parametrage = new UsParametrage();
//
//        $parametrage->setTitre("Piéce");
//        $parametrage->setPrefix('piece');
//        $parametrage->setIcon('fa-table');
//        $parametrage->setRoute('up_piece_index');
//        $parametrage->setActive(true);
//
//        $parametrage->setOrdr(13);
//        $parametrage->addModule($moduleAchatUgouv);
//        $manager->persist($parametrage);

     



        $manager->flush();
    }

    public static function getGroups(): array {
        return ['UgouvAchat'];
    }

}
