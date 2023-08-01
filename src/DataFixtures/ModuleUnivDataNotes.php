<?php

namespace App\DataFixtures;

use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use App\Entity\Uarticle;
use App\Entity\UnivPStatut;
use App\Entity\UnivPMatiere;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Faker;
use Doctrine\DBAL\Driver\Connection;

class ModuleUnivDataNotes extends Fixture implements FixtureGroupInterface {

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {
        $faker = Faker\Factory::create('fr_FR');


        /* `gu005`.`p_estatut` */
        $p_estatut = array(
            array('id' => '1', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00001', 'designation' => 'ELIMINATOIRE', 'abreviation' => 'ELM', 'definitif' => '1', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '2', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00002', 'designation' => 'NON VALIDE', 'abreviation' => 'NV', 'definitif' => '1', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '3', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00003', 'designation' => 'VALIDE', 'abreviation' => 'VLD', 'definitif' => '1', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '4', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00004', 'designation' => 'ACQUIS PAR COMPENSATION', 'abreviation' => 'APC', 'definitif' => '1', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '5', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00005', 'designation' => 'A RATTRAPER', 'abreviation' => 'RTR', 'definitif' => '0', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '6', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00006', 'designation' => 'VALIDE AVEC RACHAT', 'abreviation' => 'VR', 'definitif' => '1', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '7', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00007', 'designation' => 'COMPENSE', 'abreviation' => 'CMP', 'definitif' => '1', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '8', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00008', 'designation' => 'ATTENTE DELIBERATION SEPTEMBRE', 'abreviation' => 'ADS', 'definitif' => '1', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '9', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00009', 'designation' => 'ACQUIS PAR VALIDATION', 'abreviation' => 'APV', 'definitif' => '1', 'type' => 'H', 'active' => '0', 'created' => NULL, 'updated' => NULL),
            array('id' => '10', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00010', 'designation' => 'ELT-MODULE NON STATUE', 'abreviation' => 'EM N ST', 'definitif' => '0', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '11', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00011', 'designation' => 'ELT-MODULE 1ERE SESSION BLOQUEE', 'abreviation' => 'EM S1 BL', 'definitif' => '0', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '12', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00012', 'designation' => 'ELT-MODULE ELIMINATOIRE A RATTRAPER', 'abreviation' => 'EM ELM R', 'definitif' => '0', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '13', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00013', 'designation' => 'ELT-MODULE NON VALIDE A RATTRAPER', 'abreviation' => 'EM NV R', 'definitif' => '0', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '15', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00015', 'designation' => 'ELT-MODULE VALIDE', 'abreviation' => 'EM V', 'definitif' => '0', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '16', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00016', 'designation' => 'ELT-MODULE ELIMINATOIRE DEFINITIF', 'abreviation' => 'EM ELM D', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '17', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00017', 'designation' => 'ELT-MODULE NON ACQUIS  PAR RACHAT', 'abreviation' => 'EM NA RAC', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '18', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00018', 'designation' => 'ELT-MODULE NON ACQUIS', 'abreviation' => 'EM NA', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '19', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00019', 'designation' => 'ELT-MODULE ACQUIS PAR COMPENSATION', 'abreviation' => 'EM A COMP', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '20', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00020', 'designation' => 'ELT-MODULE ACQUIS PAR RACHAT', 'abreviation' => 'EM A RAC', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '21', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00021', 'designation' => 'ELT-MODULE ACQUIS ', 'abreviation' => 'EM A', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '22', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00022', 'designation' => 'ELT-MODULE 2EME SESSION BLOQUEE', 'abreviation' => 'EM S2 BL', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '23', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00023', 'designation' => 'MODULE NON STATUE', 'abreviation' => 'M N ST', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '24', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00024', 'designation' => 'MODULE 1ERE SESSION BLOQUEE', 'abreviation' => 'M S1 BL', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '25', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00025', 'designation' => 'MODULE ELIMINATOIRE A RATTRAPER', 'abreviation' => 'M ELM R', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '26', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00026', 'designation' => 'MODULE NON VALIDE A RATTRAPER', 'abreviation' => 'M NV R', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '27', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00027', 'designation' => 'MODULE VALIDE PAR COMPENSATION DES ELEMENTS', 'abreviation' => 'M V CP', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '28', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00028', 'designation' => 'MODULE VALIDE', 'abreviation' => 'M V', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '29', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00029', 'designation' => 'MODULE ELIMINATOIRE DEFINITIF', 'abreviation' => 'M ELM D', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '30', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00030', 'designation' => 'MODULE NON ACQUIS APRES RACHAT', 'abreviation' => 'M NA RAC', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '31', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00031', 'designation' => 'MODULE NON ACQUIS', 'abreviation' => 'M NA', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '32', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00032', 'designation' => 'MODULE ACQUIS PAR COMPENSATION DES ELEMENTS', 'abreviation' => 'M A CP', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '33', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00033', 'designation' => 'MODULE ACQUIS APRES RACHAT', 'abreviation' => 'M A RAC', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '34', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00034', 'designation' => 'MODULE ACQUIS ', 'abreviation' => 'M A', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '35', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00035', 'designation' => 'MODULE 2EME SESSION BLOQUE', 'abreviation' => 'M S2 BL', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '36', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00036', 'designation' => 'SEMESTRE ACQUIS', 'abreviation' => 'S A', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '37', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00037', 'designation' => 'SEMESTRE ACQUIS PAR COMPENSATION', 'abreviation' => 'S A CP', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '38', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00038', 'designation' => 'SEMESTRE ACQUIS APRES RACHAT', 'abreviation' => 'S A RAC', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '39', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00039', 'designation' => 'SEMESTRE NON ACQUIS', 'abreviation' => 'S NA', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '40', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00040', 'designation' => 'SEMESTRE BLOQUE', 'abreviation' => 'S BL', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '41', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00041', 'designation' => 'ANNEE ACQUISE', 'abreviation' => 'A A', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '42', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00042', 'designation' => 'ANNEE ACQUISE PAR COMPENSATION', 'abreviation' => 'A A CP', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '43', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00043', 'designation' => 'ANNEE ACQUISE PAR RACHAT', 'abreviation' => 'A A RAC', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '44', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00044', 'designation' => 'ANNEE NON ACQUISE AJOURNEMENT', 'abreviation' => 'A NA AJ', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '45', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00045', 'designation' => 'ANNEE NON ACQUISE EXCLUSION', 'abreviation' => 'A NA EX', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '46', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00046', 'designation' => 'ANNEE BLOQUEE', 'abreviation' => 'A BL', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '47', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00047', 'designation' => 'FORMATION ACQUISE PAR COMPENSATION', 'abreviation' => 'F A CP', 'definitif' => '1', 'type' => 'F', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '48', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00048', 'designation' => 'FORMATION ACQUISE PAR RACHAT', 'abreviation' => 'F A RAC', 'definitif' => '1', 'type' => 'F', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '49', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00049', 'designation' => 'FORMATION NON ACQUISE AJOURNEMENT', 'abreviation' => 'F NA AJ', 'definitif' => '1', 'type' => 'F', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '50', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00050', 'designation' => 'FORMATION NON ACQUISE EXCLUSION', 'abreviation' => 'F NA EX', 'definitif' => '1', 'type' => 'F', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '51', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00051', 'designation' => 'FORMATION BLOQUEE', 'abreviation' => 'F BL', 'definitif' => '1', 'type' => 'F', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '52', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00052', 'designation' => 'ELT-MODULE CAPITALISE', 'abreviation' => 'EM CAP', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '53', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00053', 'designation' => 'MODULE CAPITALISE', 'abreviation' => 'M CAP', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '54', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00054', 'designation' => 'ELT-MODULE ACQUIS APRES RATTRAPAGE', 'abreviation' => 'EM A AR', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '55', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00055', 'designation' => 'MODULE ACQUIS APRES RATTRAPAGE', 'abreviation' => 'M A AR', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '56', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00056', 'designation' => 'SEMESTRE ACQUIS APRES RATTRAPAGE', 'abreviation' => 'S A AR', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '57', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00057', 'designation' => 'SEMESTRE NON ACQUIS ELIMINATOIRE', 'abreviation' => 'S NA ELM', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '58', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00058', 'designation' => 'SEMESTRE ACQUIS APRES CREDIT', 'abreviation' => 'S A AP CRD', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '59', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00059', 'designation' => 'ANNEE ACQUISE APRES CREDIT', 'abreviation' => 'S A AP CRD', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '60', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00060', 'designation' => 'ELT-MODULE ACQUIS APRES CREDIT', 'abreviation' => 'EM A CRD', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '61', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00061', 'designation' => 'MODULE ACQUIS APRES CREDIT', 'abreviation' => 'M A CRD', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '62', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00062', 'designation' => 'ELT-MODULE NON ACQUIS AVEC CREDIT', 'abreviation' => 'EM NA CRD', 'definitif' => '1', 'type' => 'E', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '63', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00063', 'designation' => 'MODULE NON ACQUIS AVEC CREDIT', 'abreviation' => 'M NA CRD', 'definitif' => '1', 'type' => 'M', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '64', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00064', 'designation' => 'ANNEE ACQUISE AVEC CREDIT', 'abreviation' => 'A A AV CRD', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '65', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00065', 'designation' => 'SEMESTRE ACQUIS AVEC CREDIT', 'abreviation' => 'S A AV CRD', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '66', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00066', 'designation' => 'FORMATION ACQUISE', 'abreviation' => 'F A', 'definitif' => '1', 'type' => 'F', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '67', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00067', 'designation' => 'EN ATTENTE DE RATTRAPAGE', 'abreviation' => 'ATT RAT', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '68', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00068', 'designation' => 'SEMESTRE NON VALIDE A RATTRAPER', 'abreviation' => 'S NA RAT', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '69', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00069', 'designation' => 'SEMESTRE ELIMINATOIRE A RATTRAPER', 'abreviation' => 'S ELM RAT', 'definitif' => '1', 'type' => 'S', 'active' => '1', 'created' => NULL, 'updated' => NULL),
            array('id' => '70', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'code' => 'ST00070', 'designation' => 'ANNEE ACQUISE APRES RATTRAPAGE', 'abreviation' => 'A A AR', 'definitif' => '1', 'type' => 'A', 'active' => '1', 'created' => NULL, 'updated' => NULL)
        );


        foreach ($p_estatut as $key => $value) {
            $manager->getConnection()->insert("univ_p_estatut", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }
        
        
        
        
        
        
        
        
        

        $manager->flush();
    }

    public static function getGroups(): array {
        return ['ModuleUnivDataNotes'];
    }

}
