<?php

namespace App\DataFixtures;

use App\Entity\ArcProjet;
use App\Entity\ArcTree;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Faker;


class ModuleProjet extends Fixture implements FixtureGroupInterface {

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


        /* affecter le dossier par défaut pour ce module NB : pour chaque Module il faut créer un dossier par défault */

       /* $ArcProjet = new ArcProjet();
        $ArcProjet->setIntitule("Défault");
        $ArcProjet->setDescription("Projet par Défault ");
        $ArcProjet->setDescription("Projet par Défault");
        $ArcProjet->setAbreviation("Projet par Défault");
        $ArcProjet->setEstimationFinanciere("5000");
        $manager->persist($ArcProjet);
        $ArcTree = new ArcTree();
        //$ArcTree->setUserCreated($this->getUser());
        $ArcTree->setTreeId("ajson1");
        $ArcTree->setParent("#");
        $ArcTree->setText("root");
        //
        $ArcTree->setIcon("glyphicon glyphicon-folder-open");
        //$tree->setText("glyphicon glyphicon-folder-open");
        $ArcTree->setUser("");
        $ArcTree->setType("Dossier");
        $ArcTree->setStatus(true);
        $ArcTree->setProjet($ArcProjet);
        $manager->persist($ArcTree);
        $manager->flush();*/

    }

    public static function getGroups(): array {
        return ['ModuleProjet'];
    }

}