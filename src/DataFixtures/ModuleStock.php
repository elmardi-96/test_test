<?php

namespace App\DataFixtures;

use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use App\Entity\Uarticle;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Faker;
use App\Entity\Ucategory ; 


class ModuleStock extends Fixture implements FixtureGroupInterface {

    public const Article1 = '5';
    public const Article2 = '6';

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {
        $faker = Faker\Factory::create('fr_FR');



        /*
         * 
         * 
         * Module stock
         * 
         *
         */





//        $dossierParDefaultProjet = new PDossier();
//        $dossierParDefaultProjet->setCode("DOS0000007");
//        $dossierParDefaultProjet->setNomDossier("dossier par défault projet");
//        $dossierParDefaultProjet->setDescription("dossier par défault projet ");
//        $dossierParDefaultProjet->setTitre("dossier par défault projet ");
//        $dossierParDefaultProjet->setAbreviation("dossier projet");
//        $dossierParDefaultProjet->setPrefix("_default_projet");
//        $dossierParDefaultProjet->setActive(true);
//        $dossierParDefaultProjet->setUgouv(0);
//        $manager->persist($dossierParDefaultProjet);




//        $moduleStock = new UsModule();
//        $moduleStock->setAbreviation('stock');
//        $moduleStock->setTitre('module stock');
//        $moduleStock->setDescription('module permet de gérer votre stock , inventaire , La gestion d\'entrepôt moderne et simple.');
//        $moduleStock->setActive(true);
//        $moduleStock->setRoute('stock_dossiers_by_module');
//        $moduleStock->setRouteWithParam(true);
//        $moduleStock->setPrefix('_stock');
//        $moduleStock->setImage('stock.png');
//        $moduleStock->setInfo('Optimisez votre inventaire La gestion d\'entrepôt moderne et simple.');
//        $moduleStock->setRole('ROLE_STOCK');
//        $moduleStock->setRouteConfig('config_index');
//        $moduleStock->setType('standard édition');
//        $moduleStock->setTypeId(1);
//        $moduleStock->addModulesDossier($this->getReference(DefaultParam::Dossier1)); 
//        $moduleStock->addModulesDossier($this->getReference(DefaultParam::Dossier2)); 
//        $moduleStock->addModulesDossier($this->getReference(DefaultParam::Dossier3));
//        $moduleStock->setOrd(3);
//        $manager->persist($moduleStock);


        




        /**
         *
         *  sous module stock 
         *
         * */
//        $tabeauBord = new UsSousModule();
//        $tabeauBord->setModule($moduleStock);
//        $tabeauBord->setTitre('tableau de bord');
//        $tabeauBord->setAbreviation('tableau de bord');
//        $tabeauBord->setActive(true);
//        $tabeauBord->setPrefix('_tb');
//        $tabeauBord->setIcon('fa-bar-chart-o');
//        $tabeauBord->setActiveLink('dashboard');
//        $manager->persist($tabeauBord);
//
//
//
//        $categorie = new UsSousModule();
//        $categorie->setModule($moduleStock);
//        $categorie->setTitre('Catégorie');
//        $categorie->setAbreviation('Catégorie');
//        $categorie->setActive(true);
//        $categorie->setPrefix('_stock_cat');
//        $categorie->setIcon('fa-cubes');
//        $categorie->setActiveLink('categorie');
//        $manager->persist($categorie);
//
//
//
//        $produit = new UsSousModule();
//        $produit->setModule($moduleStock);
//        $produit->setTitre('Produit');
//        $produit->setAbreviation('Produit');
//        $produit->setActive(true);
//        $produit->setPrefix('_stock_pr');
//        $produit->setIcon('fa-cubes');
//        $produit->setActiveLink('produit');
//        $manager->persist($produit);
//
//        $depot = new UsSousModule();
//        $depot->setModule($moduleStock);
//        $depot->setTitre('dépôt');
//        $depot->setAbreviation('dépôt');
//        $depot->setActive(true);
//        $depot->setPrefix('_stock_de');
//        $depot->setIcon('fa-cubes');
//        $depot->setActiveLink('depot');
//        $manager->persist($depot);




        /*
         * 
         *   
         * opératinons tableau de bord 
         * 
         * 
         * 
         * */
//        $operation = new UsOperation();
//        $operation->setTitre('index');
//        $operation->setPrefix('_index');
//        $operation->setRoute('stock_produit_dashboard');
//        $operation->setIcon('fa-bar-chart-o');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($tabeauBord);
//        $manager->persist($operation);



        /**
         *
         *  operation sous module produit 
         *
         *
         */
//        $operation = new UsOperation();
//        $operation->setTitre('ajouter');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('stock_produit_new');
//        $operation->setPrefix('_new');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($produit);
//        $manager->persist($operation);
//
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('catégorie');
//        $operation->setType('catégorie');
//        $operation->setIdCs('new_categorie_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('stock_categorie_new');
//        $operation->setPrefix('_new_categorie');
//
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($categorie);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('stock_categorie_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($categorie);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('information');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-eye');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setRoute('u_categorie_show');
//        $operation->setSousModule($categorie);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('modifier');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setRoute('stock_category_edit');
//        $operation->setSousModule($categorie);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('suprimer');
//        $operation->setPrefix('_delete_categorie');
//        $operation->setIcon('fa-trash');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setMultiple(true);
//        $operation->setSousModule($categorie);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('consulter');
//        $operation->setRoute('u_article_show');
//        $operation->setPrefix('_show');
//        $operation->setIcon('fa-eye');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setSousModule($produit);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('modifier');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setRoute('stock_produit_edit');
//        $operation->setHorizontale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($produit);
//        $manager->persist($operation);
//
//
//        
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('stock_produit_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($produit);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('suprimer');
//        $operation->setPrefix('_delete_produit');
//        $operation->setIcon('fa-trash');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setMultiple(true);
//        $operation->setSousModule($produit);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('imprimer');
//        $operation->setPrefix('_imprimer_produit');
//        $operation->setIcon('fa-print');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setMultiple(true);
//        $operation->setSousModule($produit);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('archiver');
//        $operation->setPrefix('_archiver_produit');
//        $operation->setIcon('fa-archive');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setMultiple(true);
//        $operation->setSousModule($produit);
//        $manager->persist($operation);





        /**
         *
         *  operation sous module depot 
         *
         *
         */
//        $operation = new UsOperation();
//        $operation->setTitre('ajouter');
//        $operation->setType('ajouter');
//        $operation->setIdCs('new_action');
//        $operation->setIcon('fa-plus');
//        $operation->setRoute('stock_depot_new');
//        $operation->setPrefix('_new');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('consulter');
//        $operation->setPrefix('_show');
//        $operation->setRoute('u_depot_show');
//        $operation->setIcon('fa-eye');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('modifier');
//        $operation->setPrefix('_edit');
//        $operation->setIcon('fa-pencil');
//        $operation->setRoute('stock_depot_edit');
//        $operation->setHorizontale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//        
//
//        $operation = new UsOperation();
//        $operation->setTitre('liste');
//        $operation->setPrefix('_index');
//        $operation->setRoute('stock_depot_index');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('mouvements');
//        $operation->setPrefix('_mouvement');
//        $operation->setRoute('stock_depot_mouvementstock');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//       
//        
//        
//        $operation = new UsOperation();
//        $operation->setTitre('Transfert stock');
//        $operation->setPrefix('_transfert');
//        $operation->setRoute('stock_depot_trensfert');
//        $operation->setIcon('fa-list');
//        $operation->setVerticale(true);
//        $operation->setActive(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('suprimer');
//        $operation->setPrefix('_delete');
//        $operation->setIcon('fa-trash');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setMultiple(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//
//
//        $operation = new UsOperation();
//        $operation->setTitre('imprimer');
//        $operation->setPrefix('_imprimer');
//        $operation->setIcon('fa-print');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setMultiple(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//        $operation = new UsOperation();
//        $operation->setTitre('archiver');
//        $operation->setPrefix('_archiver');
//        $operation->setIcon('fa-archive');
//        $operation->setActive(true);
//        $operation->setHorizontale(true);
//        $operation->setMultiple(true);
//        $operation->setSousModule($depot);
//        $manager->persist($operation);
//
//
//
//
//
//        $depot = new \App\Entity\Udepot();
//        $depot->setTitre("dépot par défault");
//        $depot->setAdresse($faker->address);
//        $depot->setCode("DEP0000000001");
//        $depot->setDescription($faker->text);
//        $depot->setActive(true);
//        $manager->persist($depot);
//
//
//     
//        $category = new Ucategory();
//        $category->setActive(true);
//        $category->setCode('CAT0000001/2020');
//        $category->setTitre('PHARMACIE');
//        $manager->persist($category);
//
//        $category = new Ucategory();
//        $category->setActive(true);
//        $category->setCode('CAT0000002/2020');
//        $category->setTitre('SCIENCE');
//        $manager->persist($category);
//
//        $artcile2 = new Uarticle();
//
//        $artcile2->setActive(true);
//        $artcile2->setCode('PR00125');
//        $artcile2->setTitre('DOLIPRANE');
//        
//        
//        $artcile2->setEtatAchat(true);
//        $artcile2->setEtatVente(true);
//        $artcile2->setVerificationStock(true);
//        $artcile2->setDescription(null);
//        $artcile2->setDepot($depot);
//        $artcile2->setGererEnStock(true);
//        
//        $manager->persist($artcile2);
//
//        $artcile3 = new Uarticle();
//
//        $artcile3->setActive(true);
//        $artcile3->setCode('PR00130');
//        $artcile3->setTitre('PARACETAMOLE');
//        
//        
//        $artcile3->setEtatAchat(true);
//        $artcile3->setEtatVente(true);
//        $artcile3->setVerificationStock(false);
//        $artcile3->setDescription(null);
//        $artcile3->setDepot($depot);
//        $artcile3->setGererEnStock(true);
//        
//        $manager->persist($artcile3);
//
//        $artcile4 = new Uarticle();
//       
//        $artcile4->setActive(true);
//        $artcile4->setCode('PR00140');
//        $artcile4->setTitre('ANDOLE');
//        
//        
//        $artcile4->setEtatAchat(true);
//        $artcile4->setEtatVente(true);
//        $artcile4->setVerificationStock(true);
//        $artcile4->setDescription(null);
//        $artcile4->setDepot($depot);
//        $artcile4->setGererEnStock(false);
//        $manager->persist($artcile4);
//
//        $manager->flush();
    }

    public static function getGroups(): array {
        return ['ModuleStock'];
    }

}
