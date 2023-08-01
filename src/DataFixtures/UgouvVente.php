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
use App\Entity\UsParametrage;

use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class UgouvVente extends Fixture implements FixtureGroupInterface {

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
//        $moduleVenteUgouv = new UsModule();
//        $moduleVenteUgouv->setAbreviation('vente');
//        $moduleVenteUgouv->setTitre('module vente ugouv');
//        $moduleVenteUgouv->setDescription('module permet de gérer vos ventes devis ,  factures et réclamations ...');
//        $moduleVenteUgouv->setActive(true);
//        $moduleVenteUgouv->setRoute('_ugouv_vente_dossiers_by_module');
//        $moduleVenteUgouv->setRouteWithParam(true);
//        $moduleVenteUgouv->setPrefix('_ugouv_vente');
//        $moduleVenteUgouv->setImage('ugouv_vente.png');
//        $moduleVenteUgouv->setInfo('Logiciel de devis en ligne Envoyez des devis professionnels avec Signature et paiement.');
//        $moduleVenteUgouv->setRole('ROLE_UGOUV_VENTE');
//        $moduleVenteUgouv->setRouteConfig('config_index');
//        $moduleVenteUgouv->setType('spécifique');
//        $moduleVenteUgouv->setTypeId(2);
//        $moduleVenteUgouv->setOrd(2);
//
//        
//        
//        $moduleVenteUgouv->addModulesDossier($this->getReference(DefaultParam::Dossier1)); 
//        $moduleVenteUgouv->addModulesDossier($this->getReference(DefaultParam::Dossier2));
//        $moduleVenteUgouv->addModulesDossier($this->getReference(DefaultParam::Dossier3));
//        $manager->persist($moduleVenteUgouv);




/* end parametrage */ 

     

//$parametrage = new UsParametrage();
//
//$parametrage->setTitre('Partenaire');
//$parametrage->setPrefix('partenaire');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('u_p_partenaire_index');
//$parametrage->setActive(true); 
//$parametrage->setOrdr(1); 
//
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);


///////////////////////////////////////////////




//$parametrage = new UsParametrage();
//
//$parametrage->setTitre('Devise');
//$parametrage->setPrefix('devise');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('u_p_devise_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(2); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre('Affaire');
//$parametrage->setPrefix('affaire');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('u_p_affaire_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(3); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre('Mode paiement');
//$parametrage->setPrefix('modepaiement');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('p_modepaiement_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(4); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre('Service ');
//$parametrage->setPrefix('service');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('u_p_service_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(5); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre('Marché');
//$parametrage->setPrefix('marche');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('p_marche_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(6); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre('Marché sous');
//$parametrage->setPrefix('sousmarche');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('p_marche_sous_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(7); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre("Nature d'article");
//$parametrage->setPrefix('uarticle_nature');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('uarticle_nature_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(8); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre("Unité ");
//$parametrage->setPrefix('unite');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('p_unite_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(9); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre("Banque ");
//$parametrage->setPrefix('banque');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('u_x_banque_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(10); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre("Projet");
//$parametrage->setPrefix('projet');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('p_projet_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(11); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre("Responsable ");
//$parametrage->setPrefix('responsable');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('u_p_responsable_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(12); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);
//
//
//
//$parametrage = new UsParametrage();
//
//$parametrage->setTitre("Piéce");
//$parametrage->setPrefix('piece');
//$parametrage->setIcon('fa-table');
//$parametrage->setRoute('up_piece_index');
//$parametrage->setActive(true); 
//
//$parametrage->setOrdr(13); 
//$parametrage->addModule($moduleVenteUgouv);
//$manager->persist($parametrage);





        /**
         * 
         *  Achat sous ventre achat ugouv 
         *
         * */
//        $tabeauBord = new UsSousModule();
//        $tabeauBord->setModule($moduleVenteUgouv);
//        $tabeauBord->setTitre('tableau bord');
//        $tabeauBord->setAbreviation('tableau bord');
//        $tabeauBord->setActive(true);
//        $tabeauBord->setPrefix('_tb_cl');
//        $tabeauBord->setIcon('fa-bar-chart-o');
//        $manager->persist($tabeauBord);
//
//
//        $devisclient = new UsSousModule();
//        $devisclient->setModule($moduleVenteUgouv);
//        $devisclient->setTitre('devis client');
//        $devisclient->setAbreviation('devis client');
//        $devisclient->setActive(true);
//        $devisclient->setPrefix('_de_cl');
//        $devisclient->setIcon('fa-clipboard');
//        $manager->persist($devisclient);
//
//
//        $livraisonclient = new UsSousModule();
//        $livraisonclient->setModule($moduleVenteUgouv);
//        $livraisonclient->setTitre('livraison client');
//        $livraisonclient->setAbreviation('livraison client');
//        $livraisonclient->setActive(true);
//        $livraisonclient->setPrefix('_lv_cl');
//        $livraisonclient->setIcon('fa-truck');
//        $manager->persist($livraisonclient);
//
//
//
//        $factureClient = new UsSousModule();
//        $factureClient->setModule($moduleVenteUgouv);
//        $factureClient->setTitre('factures client');
//        $factureClient->setAbreviation('factures client');
//        $factureClient->setActive(true);
//        $factureClient->setPrefix('_fa_cl');
//        $factureClient->setIcon('fa-file-text-o');
//        $manager->persist($factureClient);
//
//
//        $reglementClient = new UsSousModule();
//        $reglementClient->setModule($moduleVenteUgouv);
//        $reglementClient->setTitre('réglement factures');
//        $reglementClient->setAbreviation('réglement factures');
//        $reglementClient->setActive(true);
//        $reglementClient->setPrefix('_re_cl');
//        $reglementClient->setIcon('fa-money');
//        $manager->persist($reglementClient);
//
//
//        $report = new UsSousModule();
//        $report->setModule($moduleVenteUgouv);
//        $report->setTitre('reporting');
//        $report->setAbreviation('reporting');
//        $report->setActive(true);
//        $report->setPrefix('_v_rep');
//        $report->setIcon('fa-file-excel-o');
//        $manager->persist($report);




        /*
         * 
         * operations tableau de bord
         *  
         * */

//        $operation = new UsOperation();
//        $operation->setTitre('index');
//        $operation->setPrefix('_index');
//        $operation->setRoute('uv_deviscab_dashboard');
//        $operation->setIcon('fa-bar-chart-o');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($tabeauBord);
//        $manager->persist($operation);

        /**
         * 
         * ************opérations Devis Client 
         * 
         * 
         */
      



//        $operation = new UsOperation();
//        $operation->setTitre('ajouter');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('uv_deviscab_new');
//        $operation->setPrefix('_new');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('uv_deviscab_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Modifier (devis )');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('uv_deviscab_edit');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Workflow');
//        $operation->setType('Workflow');
//        $operation->setIdCs('_workflow');
//        $operation->setIcon('');
//        $operation->setPrefix('_workflow');
//        $operation->setActive(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('_delete ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete');
//        $operation->setActive(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Imprimer');
//        $operation->setType('Imprimer');
//        $operation->setIdCs('_imprimer ');
//        $operation->setIcon('fa-print');
//        $operation->setPrefix('_imprimer');
//        $operation->setActive(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Suivi des opérations');
//        $operation->setPrefix('_suivi');
//        $operation->setIcon('fa-desktop');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(3);
//        $operation->setActive(true);
//        $operation->setRoute('uv_devis_suivi_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Fichiers');
//        $operation->setPrefix('_fichiers');
//        $operation->setIcon('fa-files-o');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(4);
//        $operation->setActive(true);
//        $operation->setRoute('uv_devis_fichiers');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Charges');
//        $operation->setPrefix('_charges');
//        $operation->setIcon('fa-credit-card');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(5);
//        $operation->setActive(true);
//        $operation->setRoute('uv_devis_charges');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);




//        $operation = new UsOperation();
//        $operation->setTitre('Livraisons');
//        $operation->setPrefix('_livraisons');
//        $operation->setIcon('fa-check-square-o');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(7);
//        $operation->setActive(true);
//        $operation->setRoute('uv_devis_livraison_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);




//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setType('liste');
//        $operation->setRoute('uv_deviscab_index');
//        $operation->setPrefix('_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($devisclient);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('index');
//        $operation->setType('index');
//        $operation->setIcon('fa-list');
//        $operation->setRoute('vreporting_index');
//        $operation->setPrefix('_index');
//        $operation->setHorizontale(true);
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($report);
//        $manager->persist($operation);





        /**
         * 
         * ************opérations livraison Client 
         * 
         * 
         */
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setType('liste');
//        $operation->setRoute('uv_livraisoncab_index');
//        $operation->setPrefix('_index');
//        $operation->setIcon('fa-list'); 
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($livraisonclient);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Workflow');
//        $operation->setType('Workflow');
//        $operation->setIdCs('_workflow');
//        $operation->setIcon('');
//        $operation->setPrefix('_workflow');
//        $operation->setActive(true);
//        $operation->setSousModule($livraisonclient);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('btn-wrf btn-danger btn-outline  _delete ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete');
//        $operation->setActive(true);
//        $operation->setSousModule($livraisonclient);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Archiver');
//        $operation->setType('Archiver');
//        $operation->setIdCs('btn-wrf btn-outline  _archiver ');
//        $operation->setIcon('fa-archive');
//        $operation->setPrefix('_archiver');
//        $operation->setActive(true);
//        $operation->setSousModule($livraisonclient);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Imprimer');
//        $operation->setType('Imprimer');
//        $operation->setIdCs('_imprimer ');
//        $operation->setIcon('fa-print');
//        $operation->setPrefix('_imprimer');
//        $operation->setActive(true);
//        $operation->setSousModule($livraisonclient);
//        $manager->persist($operation);
//      
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('uv_livraisoncab_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($livraisonclient);
//        $manager->persist($operation);
//
//
//
//          
//        $operation = new UsOperation();
//        $operation->setTitre('Facture');
//        $operation->setPrefix('_facture');
//        $operation->setIcon('fa-level-down');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('uv_livraisoncab_generer');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($livraisonclient);
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
//    
//
//







        /**
         * 
         * ************opérations facture Client 
         * 
         * 
         */
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setType('liste');
//        $operation->setRoute('uv_facturecab_index');
//        $operation->setPrefix('_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($factureClient);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Informations');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-info-circle');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(1);
//        $operation->setActive(true);
//        $operation->setRoute('uv_facturecab_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureClient);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Workflow');
//        $operation->setType('Workflow');
//        $operation->setIdCs('_workflow');
//        $operation->setIcon('');
//        $operation->setPrefix('_workflow');
//        $operation->setActive(true);
//        $operation->setSousModule($factureClient);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('Imprimer');
//        $operation->setType('Imprimer');
//        $operation->setIdCs('_imprimer ');
//        $operation->setIcon('fa-print');
//        $operation->setPrefix('_imprimer');
//        $operation->setActive(true);
//        $operation->setSousModule($factureClient);
//        $manager->persist($operation);
//
//
//        
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Supprimer');
//        $operation->setType('Supprimer');
//        $operation->setIdCs('btn-wrf btn-danger btn-outline  _delete ');
//        $operation->setIcon('fa-trash');
//        $operation->setPrefix('_delete');
//        $operation->setActive(true);
//        $operation->setSousModule($factureClient);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Suivi des opérations');
//        $operation->setPrefix('_suivi');
//        $operation->setIcon('fa-desktop');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(2);
//        $operation->setActive(true);
//        $operation->setRoute('uv_facturecab_suivi_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureClient);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Condition ');
//        $operation->setPrefix('_condition');
//        $operation->setIcon('fa-file-pdf-o');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(3);
//        $operation->setActive(true);
//        $operation->setRoute('uv_facturecab_condition');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureClient);
//        $manager->persist($operation);
//
//
//
//        
//        $operation = new UsOperation();
//        $operation->setTitre('Paiement');
//        $operation->setPrefix('_paiement');
//        $operation->setIcon('fa-money');
//        $operation->setHorizontale(true);
//        $operation->setOrdr(4);
//        $operation->setActive(true);
//        $operation->setRoute('uv_facturecab_Paiement');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($factureClient);
//        $manager->persist($operation);


        
        
          /**
         * 
         * ************opérations réglements Client 
         * 
         * 
         */
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setType('liste');
//        $operation->setRoute('uv_reglementcab_index');
//        $operation->setPrefix('_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($reglementClient);
//        $manager->persist($operation);
//
//
//
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
//        $operation->setRoute('uv_reglementcab_show');
//        $operation->setRouteWithParam(true);
//        $operation->setSousModule($reglementClient);
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
//        $operation->setSousModule($reglementClient);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('Imprimer');
//        $operation->setType('Imprimer');
//        $operation->setIdCs('_imprimer ');
//        $operation->setIcon('fa-print');
//        $operation->setPrefix('_imprimer');
//        $operation->setActive(true);
//        $operation->setSousModule($reglementClient);
//        $manager->persist($operation);
//        




        $manager->flush();
    }

    public static function getGroups(): array {
        return ['UgouvVente'];
    }

}
