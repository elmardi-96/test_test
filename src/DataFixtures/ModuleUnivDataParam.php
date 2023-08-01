<?php

namespace App\DataFixtures;

use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use App\Entity\Uarticle;
use App\Entity\UnivPStatut;
use App\Entity\UnivPMatiere;
//UnivPSituation
use App\Entity\UnivPSituation;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Faker;
use Doctrine\DBAL\Driver\Connection;

class ModuleUnivDataParam extends Fixture implements FixtureGroupInterface {

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {
        $faker = Faker\Factory::create('fr_FR');






        /* `gu005`.`x_academie` */
        $x_academie = array(
            array('id' => '1', 'code' => 'aca00000001', 'designation' => 'Chaouia-ouardigha', 'abreviation' => 'CHOUA', 'active' => NULL),
            array('id' => '2', 'code' => 'aca00000002', 'designation' => 'Doukkala-Abda', 'abreviation' => '', 'active' => NULL),
            array('id' => '3', 'code' => 'aca00000003', 'designation' => 'Fès-Boulmane ', 'abreviation' => '', 'active' => NULL),
            array('id' => '4', 'code' => 'aca00000004', 'designation' => 'Gharb-chrarda-beni hssen', 'abreviation' => '', 'active' => NULL),
            array('id' => '5', 'code' => 'aca00000005', 'designation' => 'Grand Casablanca', 'abreviation' => '', 'active' => NULL),
            array('id' => '6', 'code' => 'aca00000006', 'designation' => 'Guelmim-Es smara', 'abreviation' => '', 'active' => NULL),
            array('id' => '7', 'code' => 'aca00000007', 'designation' => 'Laâyoune- Boujdour-Sakia Elhamraa', 'abreviation' => '', 'active' => NULL),
            array('id' => '8', 'code' => 'aca00000008', 'designation' => 'L\'Oriental', 'abreviation' => '', 'active' => NULL),
            array('id' => '9', 'code' => 'aca00000009', 'designation' => 'Marrakech-Tansift-Alhaouz', 'abreviation' => '', 'active' => NULL),
            array('id' => '10', 'code' => 'aca00000010', 'designation' => 'Meknes-Tafilalt', 'abreviation' => '', 'active' => NULL),
            array('id' => '11', 'code' => 'aca00000011', 'designation' => 'Oued Eddhab-Lagouira', 'abreviation' => '', 'active' => NULL),
            array('id' => '12', 'code' => 'aca00000012', 'designation' => 'Rabat-Salé-Zemmour-Zaër', 'abreviation' => '', 'active' => NULL),
            array('id' => '13', 'code' => 'aca00000013', 'designation' => 'Souss-Massa-Dra', 'abreviation' => '', 'active' => NULL),
            array('id' => '14', 'code' => 'aca00000014', 'designation' => 'Tadla-Azilal', 'abreviation' => '', 'active' => NULL),
            array('id' => '15', 'code' => 'aca00000015', 'designation' => 'Tanger-Tetouan', 'abreviation' => '', 'active' => NULL),
            array('id' => '16', 'code' => 'aca00000016', 'designation' => 'Taza-El Houceima-Taounate', 'abreviation' => '', 'active' => NULL),
            array('id' => '17', 'code' => 'aca00000017', 'designation' => 'Mission Française', 'abreviation' => '', 'active' => NULL),
            array('id' => '18', 'code' => 'aca00000018', 'designation' => 'Mission Espagnole', 'abreviation' => '', 'active' => NULL),
            array('id' => '21', 'code' => 'aca00000021', 'designation' => 'Ecole Américaine', 'abreviation' => 'mourad', 'active' => NULL),
            array('id' => '22', 'code' => 'aca00000022', 'designation' => 'Autres', 'abreviation' => 'Autres', 'active' => NULL)
        );


        foreach ($x_academie as $key => $value) {
            $manager->getConnection()->insert("univ_x_academie", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        /* `gu005`.`x_banque` */
        $x_banque = array(
            array('id' => '1', 'code' => 'ban00000001', 'abreviation' => 'AWB', 'designation' => 'Attijariwafa bank', 'active' => '1'),
            array('id' => '2', 'code' => 'ban00000002', 'abreviation' => 'BP', 'designation' => 'Banque populaire', 'active' => '1'),
            array('id' => '3', 'code' => 'ban00000003', 'abreviation' => 'BMCE', 'designation' => 'BMCE Bank', 'active' => '1'),
            array('id' => '4', 'code' => 'ban00000004', 'abreviation' => 'SG', 'designation' => 'Société générale', 'active' => '1'),
            array('id' => '5', 'code' => 'ban00000005', 'abreviation' => 'BMCI', 'designation' => 'BMCI', 'active' => '1'),
            array('id' => '6', 'code' => 'ban00000006', 'abreviation' => 'CA', 'designation' => 'Crédit agricole', 'active' => '1'),
            array('id' => '7', 'code' => 'ban00000007', 'abreviation' => 'CM', 'designation' => 'Crédit du Maroc', 'active' => '1'),
            array('id' => '8', 'code' => 'ban00000008', 'abreviation' => 'CIH', 'designation' => 'CIH Bank', 'active' => '1'),
            array('id' => '9', 'code' => 'ban00000009', 'abreviation' => 'ABB', 'designation' => 'Al Barid Bank', 'active' => '1'),
            array('id' => '10', 'code' => 'ban00000010', 'abreviation' => 'TGR', 'designation' => 'Trésorerie Générale du Royaume', 'active' => '1'),
            array('id' => '11', 'code' => 'ban00000011', 'abreviation' => 'BAM', 'designation' => 'Bank Al-Maghrib', 'active' => '1'),
            array('id' => '12', 'code' => 'ban00000012', 'abreviation' => 'UMB', 'designation' => 'UMB', 'active' => '1'),
            array('id' => '13', 'code' => 'ban00000013', 'abreviation' => 'BCM', 'designation' => 'Banque Commerciale du Maroc', 'active' => '1'),
            array('id' => '14', 'code' => 'ban00000014', 'abreviation' => 'Autre', 'designation' => 'Autre', 'active' => '1')
        );

        foreach ($x_banque as $key => $value) {
            $manager->getConnection()->insert("univ_x_banque", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        /* `gu005`.`x_modalites` */
        $x_modalites = array(
            array('id' => '1', 'code' => 'mod00000001', 'designation' => 'Espèce', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '2', 'code' => 'mod00000002', 'designation' => 'Chèque', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '3', 'code' => 'mod00000003', 'designation' => 'Versement', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '4', 'code' => 'mod00000004', 'designation' => 'MAD', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '5', 'code' => 'mod00000005', 'designation' => 'L. Change', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '6', 'code' => 'mod00000006', 'designation' => 'Virement', 'abreviation' => NULL, 'active' => '1')
        );

        foreach ($x_modalites as $key => $value) {
            $manager->getConnection()->insert("univ_x_modalite", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        /* `gu005`.`x_langues` */
        $x_langues = array(
            array('id' => '1', 'code' => 'lang00000001', 'designation' => 'Arabe', 'abreviation' => 'AR', 'active' => '1'),
            array('id' => '2', 'code' => 'lang00000002', 'designation' => 'Français', 'abreviation' => 'FR', 'active' => '1'),
            array('id' => '3', 'code' => 'lang00000003', 'designation' => 'Anglais', 'abreviation' => 'ANG', 'active' => '1'),
            array('id' => '4', 'code' => 'lang00000005', 'designation' => 'Espagnol', 'abreviation' => 'ESP', 'active' => '1')
        );

        foreach ($x_langues as $key => $value) {
            $manager->getConnection()->insert("univ_x_langue", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }



        /* `gu005`.`x_type_bac` */
        $x_type_bac = array(
            array('id' => '1', 'code' => 'T000001', 'designation' => 'Public', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '2', 'code' => 'T000002', 'designation' => 'Privé', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '3', 'code' => 'T000003', 'designation' => 'Mission', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '4', 'code' => 'T000004', 'designation' => 'semi privé', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '5', 'code' => 'T000005', 'designation' => 'Français', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '6', 'code' => 'T000006', 'designation' => 'Etranger', 'abreviation' => NULL, 'active' => '1')
        );

        foreach ($x_type_bac as $key => $value) {
            $manager->getConnection()->insert("univ_x_type_bac", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        /* `gu005`.`x_serie_bac` */
        $x_serie_bac = array(
            array('id' => '1', 'code' => '1', 'designation' => 'Sciences de la Vie et de la Terre', 'abreviation' => 'SVT', 'active' => '1'),
            array('id' => '2', 'code' => '2', 'designation' => 'Sciences Physiques', 'abreviation' => 'PC', 'active' => '1'),
            array('id' => '3', 'code' => '3', 'designation' => 'Sciences Mathématiques A ou B', 'abreviation' => 'SMA', 'active' => '1'),
            array('id' => '4', 'code' => '4', 'designation' => 'Sciences Agronomiques', 'abreviation' => 'SA', 'active' => '1'),
            array('id' => '5', 'code' => '5', 'designation' => 'Sciences et Technologie', 'abreviation' => 'ST', 'active' => '1'),
            array('id' => '6', 'code' => '6', 'designation' => 'Sciences Internationale', 'abreviation' => 'SI', 'active' => '1'),
            array('id' => '7', 'code' => '7', 'designation' => 'Sciences Expérimentales', 'abreviation' => 'SX', 'active' => '1'),
            array('id' => '8', 'code' => '8', 'designation' => 'Biologie/Chimie', 'abreviation' => 'BC', 'active' => '1'),
            array('id' => '9', 'code' => '9', 'designation' => 'Sciences Technique', 'abreviation' => 'ST', 'active' => '1')
        );

        foreach ($x_serie_bac as $key => $value) {
            $manager->getConnection()->insert("univ_x_serie_bac", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }



        /* `gu005`.`x_filiere` */
        $x_filiere = array(
            array('id' => '1', 'code' => 'SVT', 'abreviation' => 'SVT', 'designation' => 'Sciences de la Vie et de la Terre', 'active' => '1'),
            array('id' => '2', 'code' => 'SP', 'abreviation' => 'SP', 'designation' => 'Sciences Physiques', 'active' => '1'),
            array('id' => '4', 'code' => 'SM', 'abreviation' => 'SM', 'designation' => 'Sciences Mathématiques A ou B', 'active' => '1'),
            array('id' => '5', 'code' => 'SA', 'abreviation' => 'SA', 'designation' => 'Sciences Agronomiques', 'active' => '1'),
            array('id' => '6', 'code' => 'LM', 'abreviation' => 'LM', 'designation' => 'Lettres Modernes', 'active' => '1'),
            array('id' => '7', 'code' => 'STT', 'abreviation' => 'STT', 'designation' => 'Sciences et Technologie', 'active' => '1'),
            array('id' => '8', 'code' => 'A', 'abreviation' => 'A', 'designation' => 'Autres', 'active' => '1'),
            array('id' => '9', 'code' => 'SE', 'abreviation' => 'SE', 'designation' => 'Sciences Expérimentales', 'active' => '1'),
            array('id' => '10', 'code' => 'SI', 'abreviation' => 'SI', 'designation' => 'Sciences Internationale', 'active' => '1'),
            array('id' => '11', 'code' => 'BC', 'abreviation' => 'BC', 'designation' => 'Biologie/Chimie', 'active' => '1'),
            array('id' => '12', 'code' => 'ST', 'abreviation' => 'ST', 'designation' => 'Sciences Technique', 'active' => '1')
        );

        foreach ($x_filiere as $key => $value) {
            $manager->getConnection()->insert("univ_x_filiere", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }


        $UnivPSituation = array(
            array('id' => '1', 'abreviation' => 'M', 'designation' => 'Marié'),
            array('id' => '2', 'abreviation' => 'C', 'designation' => 'Célibataire'),
            array('id' => '4', 'abreviation' => 'V', 'designation' => 'Veuf'),
            array('id' => '5','abreviation' => 'D', 'designation' => 'Divorcé')
        );

        foreach ($UnivPSituation as $key => $value) {
            $manager->getConnection()->insert("univ_p_situation", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        $manager->flush();

    }

    public static function getGroups(): array {
        return ['ModuleUnivDataParam'];
    }

}
