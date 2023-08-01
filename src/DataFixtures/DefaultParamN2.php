<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class DefaultParamN2 extends Fixture implements FixtureGroupInterface {

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {

        /*
         * ****vider les tables DefaultParamN2
         */
        $tables = array('u_p_devise', 'p_unite', 'u_p_commandety', 'us_groupe', 'u_p_partenaire_ty',
            'u_p_partenaire', 'ufacture_type', 'udepot', 'u_x_banque', 'p_modepaiement', 'p_compte',
            'p_article_nature', 'uarticle', 'ucategory', 'u_articles_categories', 'p_poste',
            'up_piece', 'p_compte_banque', 'p_compte_banque_type', 'p_nomenclature_standard',
            'compagnie', 'p_forme', 'p_presentation', 'p_global_param', 'pglobal_param_det',
            'pmarche' ,'pmarche_sous' , 'u_p_projet' , 'pprojet_sous'   
        );

        $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');

        foreach ($tables as $key => $table) {
            $manager->getConnection()->exec('TRUNCATE table ' . $table);
        }



        /*
         * devise  
         */
        $u_p_devise = array(
            array('id' => '1', 'code' => 'MAD', 'taux' => '1', 'date_creation' => NULL, 'designation' => 'MAD', 'abreviation' => 'MAD', 'active' => '1'),
            array('id' => '2', 'code' => 'EUR', 'taux' => '10.5', 'date_creation' => NULL, 'designation' => 'EUR', 'abreviation' => 'EUR', 'active' => '1'),
            array('id' => '3', 'code' => 'USD', 'taux' => '9', 'date_creation' => NULL, 'designation' => 'USD', 'abreviation' => 'USD', 'active' => '1'),
            array('id' => '4', 'code' => 'Francs CFA', 'taux' => '1', 'date_creation' => NULL, 'designation' => 'Francs CFA', 'abreviation' => 'Francs CFA', 'active' => '1'),
            array('id' => '5', 'code' => 'GNF', 'taux' => '1', 'date_creation' => NULL, 'designation' => 'GNF', 'abreviation' => 'GNF', 'active' => '1')
        );


        foreach ($u_p_devise as $key => $value) {
            $manager->getConnection()->insert('u_p_devise', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }


        /*
         * unité  
         */

        $p_unite = array(
            array('id' => '1', 'code' => 'kg', 'designation' => 'kilo gramme', 'abreviation' => 'KG', 'type' => 'weight', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '2', 'code' => 'm', 'designation' => 'métre', 'abreviation' => 'M', 'type' => 'size', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '3', 'code' => 'l', 'designation' => 'litre', 'abreviation' => 'L', 'type' => 'volume', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '4', 'code' => 'km', 'designation' => 'kilo métre', 'abreviation' => 'KM', 'type' => 'size', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '5', 'code' => 'u', 'designation' => 'unité', 'abreviation' => 'U', 'type' => 'qty', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '6', 'code' => 'ml', 'designation' => 'ml', 'abreviation' => 'ML', 'type' => 'volume', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '7', 'code' => 'm3', 'designation' => 'm3', 'abreviation' => 'M3', 'type' => 'volume', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '8', 'code' => 'm2', 'designation' => 'm2', 'abreviation' => 'M2', 'type' => 'surface', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '9', 'code' => 'f', 'designation' => 'F', 'abreviation' => 'F', 'type' => NULL, 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '10', 'code' => 'e', 'designation' => 'e', 'abreviation' => 'E', 'type' => NULL, 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '11', 'code' => 'ens', 'designation' => 'ensemble', 'abreviation' => 'ENS', 'type' => 'qty', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '12', 'code' => 'gr', 'designation' => 'gramme', 'abreviation' => 'GR', 'type' => 'weight', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '13', 'code' => 't', 'designation' => 'tonne', 'abreviation' => 'T', 'type' => 'weight', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '14', 'code' => 'jrs', 'designation' => 'jours', 'abreviation' => 'JRS', 'type' => 'time', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '15', 'code' => 'oz', 'designation' => 'oz', 'abreviation' => 'OZ', 'type' => 'weight', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '16', 'code' => 'lb', 'designation' => 'lb', 'abreviation' => 'LB', 'type' => 'weight', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '17', 'code' => 'dm', 'designation' => 'décimètre', 'abreviation' => 'dm', 'type' => 'size', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '18', 'code' => 'cm', 'designation' => 'centimètre', 'abreviation' => 'CM', 'type' => 'size', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '19', 'code' => 'mm', 'designation' => 'millimètre', 'abreviation' => 'MM', 'type' => 'size', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '20', 'code' => 'ft', 'designation' => 'ft', 'abreviation' => 'FT', 'type' => 'size', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '21', 'code' => 'in', 'designation' => 'in', 'abreviation' => 'IN', 'type' => 'size', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '22', 'code' => 'dm2', 'designation' => 'décimètre carré', 'abreviation' => 'DM2', 'type' => 'surface', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '23', 'code' => 'cm2', 'designation' => 'centimètre carré', 'abreviation' => 'CM2', 'type' => 'surface', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '24', 'code' => 'mm2', 'designation' => 'millimètre carré', 'abreviation' => 'MM2', 'type' => 'surface', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '25', 'code' => 'ft2', 'designation' => 'ft2', 'abreviation' => 'FT2', 'type' => 'surface', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '26', 'code' => 'in2', 'designation' => 'in2', 'abreviation' => 'IN2', 'type' => 'surface', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '27', 'code' => 'dm3', 'designation' => 'décimètre cube', 'abreviation' => 'DM3', 'type' => 'volume', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '28', 'code' => 'cm3', 'designation' => 'centimètre cube', 'abreviation' => 'CM3', 'type' => 'volume', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '29', 'code' => 'mm3', 'designation' => 'millimètre cube', 'abreviation' => 'MM3', 'type' => 'volume', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '30', 'code' => 'ft3', 'designation' => 'ft3', 'abreviation' => 'FT3', 'type' => 'volume', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '31', 'code' => 'in3', 'designation' => 'in3', 'abreviation' => 'IN3', 'type' => 'volume', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '32', 'code' => 'piece', 'designation' => 'pièce', 'abreviation' => 'PIèCE', 'type' => 'qty', 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '33', 'code' => 'set', 'designation' => 'set', 'abreviation' => 'SET', 'type' => 'qty', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '34', 'code' => 's', 'designation' => 'seconde', 'abreviation' => 'S', 'type' => 'time', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '35', 'code' => 'min', 'designation' => 'minute', 'abreviation' => 'MIN', 'type' => 'time', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '36', 'code' => 'heure', 'designation' => 'heure', 'abreviation' => 'HEURE', 'type' => 'time', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '37', 'code' => 'semaine', 'designation' => 'semaine', 'abreviation' => 'SEMAINE', 'type' => 'time', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '38', 'code' => 'mois', 'designation' => 'mois', 'abreviation' => 'MOIS', 'type' => 'time', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '39', 'code' => 'annee', 'designation' => 'annee', 'abreviation' => 'ANNEE', 'type' => 'time', 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '40', 'code' => 'UN000000313', 'designation' => 'barres', 'abreviation' => 'barres', 'type' => NULL, 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '41', 'code' => 'UN000000314', 'designation' => 'rlx', 'abreviation' => 'rlx', 'type' => NULL, 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '42', 'code' => 'UN000000315', 'designation' => 'pa', 'abreviation' => 'pa', 'type' => NULL, 'typeDefault' => 'unite', 'active' => '1', 'old_sys' => NULL),
            array('id' => '104', 'code' => '1', 'designation' => '1', 'abreviation' => NULL, 'type' => NULL, 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '108', 'code' => 'I', 'designation' => 'I', 'abreviation' => NULL, 'type' => NULL, 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '110', 'code' => '0', 'designation' => '0', 'abreviation' => NULL, 'type' => NULL, 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL),
            array('id' => '190', 'code' => 'ETG', 'designation' => 'ETG', 'abreviation' => NULL, 'type' => NULL, 'typeDefault' => NULL, 'active' => '1', 'old_sys' => NULL)
        );



        foreach ($p_unite as $key => $value) {
            $manager->getConnection()->insert('p_unite', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }




        /*
         * type commande   
         */
        $u_p_commandety = array(
            array('id' => '1', 'code' => 'CMD', 'designation' => 'Commande', 'abreviation' => 'CMD', 'active' => NULL),
            array('id' => '2', 'code' => 'MR', 'designation' => 'Marché', 'abreviation' => 'Mr', 'active' => '1'),
            array('id' => '3', 'code' => 'AU', 'designation' => 'Autres', 'abreviation' => 'AU', 'active' => '1'),
            array('id' => '4', 'code' => 'INV', 'designation' => 'Investissement', 'abreviation' => 'INV', 'active' => '1'),
            array('id' => '5', 'code' => 'PRJ', 'designation' => 'Projet', 'abreviation' => 'PRJ', 'active' => '1')
        );


        foreach ($u_p_commandety as $key => $value) {
            $manager->getConnection()->insert('u_p_commandety', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        /* `u3s-erp-load`.`u_x_banque` */
        $u_x_banque = array(
            array('id' => '1', 'code' => 'ban00000001', 'abr' => 'AWB', 'designation' => 'Attijariwafa bank', 'active' => '1'),
            array('id' => '2', 'code' => 'ban00000002', 'abr' => 'BP', 'designation' => 'Banque populaire', 'active' => '1'),
            array('id' => '3', 'code' => 'ban00000003', 'abr' => 'BMCE', 'designation' => 'BMCE Bank', 'active' => '1'),
            array('id' => '4', 'code' => 'ban00000004', 'abr' => 'SG', 'designation' => 'Société générale', 'active' => '1'),
            array('id' => '5', 'code' => 'ban00000005', 'abr' => 'BMCI', 'designation' => 'BMCI', 'active' => '1'),
            array('id' => '6', 'code' => 'ban00000006', 'abr' => 'CA', 'designation' => 'Crédit agricole', 'active' => '1'),
            array('id' => '7', 'code' => 'ban00000007', 'abr' => 'CM', 'designation' => 'Crédit du Maroc', 'active' => '1'),
            array('id' => '8', 'code' => 'ban00000008', 'abr' => 'CIH', 'designation' => 'CIH Bank', 'active' => '1'),
            array('id' => '9', 'code' => 'ban00000009', 'abr' => 'ABB', 'designation' => 'Al Barid Bank', 'active' => '1'),
            array('id' => '10', 'code' => 'ban00000010', 'abr' => 'TGR', 'designation' => 'Trésorerie Générale du Royaume', 'active' => '1'),
            array('id' => '11', 'code' => 'ban00000011', 'abr' => 'BAM', 'designation' => 'Bank Al-Maghrib', 'active' => '1'),
            array('id' => '12', 'code' => 'ban00000012', 'abr' => 'UMB', 'designation' => 'UMB', 'active' => '1'),
            array('id' => '13', 'code' => 'ban00000013', 'abr' => 'BCM', 'designation' => 'Banque Commerciale du Maroc', 'active' => '1'),
            array('id' => '14', 'code' => 'ban00000014', 'abr' => 'Autre', 'designation' => 'Autre', 'active' => '1'),
            array('id' => '101', 'code' => 'ban0000101', 'abr' => 'AWB', 'designation' => 'Attijariwafa bank-old', 'active' => NULL, 'old_sys' => 1),
            array('id' => '102', 'code' => 'ban0000102', 'abr' => 'BP', 'designation' => 'Banque populaire du Maroc-old', 'active' => NULL, 'old_sys' => 1),
            array('id' => '103', 'code' => 'ban0000103', 'abr' => 'BMCE', 'designation' => 'Banque Marocaine du Commerce Extérieur-old', 'active' => 1, 'old_sys' => 1),
            array('id' => '104', 'code' => 'ban0000104', 'abr' => 'SGMB', 'designation' => 'Société générale Maroc-old', 'active' => NULL, 'old_sys' => 1),
            array('id' => '105', 'code' => 'ban0000105', 'abr' => 'BMCI', 'designation' => 'Banque Marocaine pour le Commerce et l\'Industrie-old', 'active' => NULL, 'old_sys' => 1),
            array('id' => '106', 'code' => 'ban0000106', 'abr' => 'CA', 'designation' => 'Crédit agricole du Maroc-old', 'active' => NULL, 'old_sys' => 1),
            array('id' => '107', 'code' => 'ban0000107', 'abr' => 'CM', 'designation' => 'Crédit du Maroc-old', 'active' => NULL, 'old_sys' => 1),
            array('id' => '108', 'code' => 'ban0000108', 'abr' => 'CIH', 'designation' => 'Crédit Immobilier et Hôtelier-old', 'active' => NULL, 'old_sys' => 1)
        );



        foreach ($u_x_banque as $key => $value) {
            $manager->getConnection()->insert('u_x_banque', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }



        /* `u3s-erp-load`.`p_modepaiement` */
        $p_modepaiement = array(
            array('id' => '1', 'code_mode' => 'mod00000001', 'designation' => 'Espèce', 'active' => '1', 'old_sys' => NULL),
            array('id' => '2', 'code_mode' => 'mod00000002', 'designation' => 'Chèque', 'active' => '1', 'old_sys' => NULL),
            array('id' => '3', 'code_mode' => 'mod00000003', 'designation' => 'Versement', 'active' => '1', 'old_sys' => NULL),
            array('id' => '4', 'code_mode' => 'mod00000004', 'designation' => 'MAD', 'active' => '1', 'old_sys' => NULL),
            array('id' => '5', 'code_mode' => 'mod00000005', 'designation' => 'L. Change', 'active' => '1', 'old_sys' => NULL),
            array('id' => '6', 'code_mode' => 'mod00000006', 'designation' => 'Virement', 'active' => '1', 'old_sys' => NULL),
            array('id' => '101', 'code_mode' => 'MP000001', 'designation' => 'Chèque-old', 'active' => NULL, 'old_sys' => NULL),
            array('id' => '102', 'code_mode' => 'MP000002', 'designation' => 'Espèce-old', 'active' => NULL, 'old_sys' => NULL),
            array('id' => '103', 'code_mode' => 'MP000003', 'designation' => 'Prélèvement-old', 'active' => NULL, 'old_sys' => NULL),
            array('id' => '104', 'code_mode' => 'MP000004', 'designation' => 'Virement-old', 'active' => NULL, 'old_sys' => NULL),
            array('id' => '105', 'code_mode' => 'MP000005', 'designation' => 'Lettre de change-old', 'active' => NULL, 'old_sys' => NULL)
        );


        foreach ($p_modepaiement as $key => $value) {
            $manager->getConnection()->insert('p_modepaiement', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }


        /* `hostji5_u3s-erp-v1`.`p_compte` */
        $p_compte = array(
            array('id' => '1', 'code' => 'CP000001', 'designation' => 'Transport', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '2', 'code' => 'CP000002', 'designation' => 'Achat', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '3', 'code' => 'CP000003', 'designation' => 'investissement', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '4', 'code' => 'CP000004', 'designation' => 'Main d\'œuvre', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '5', 'code' => 'CP000005', 'designation' => 'Divers', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '6', 'code' => 'CP000006', 'designation' => 'Avances', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '7', 'code' => 'CP000007', 'designation' => 'Salaire', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '8', 'code' => 'CP000008', 'designation' => 'Vente', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '9', 'code' => 'CP000009', 'designation' => 'Apport', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '13', 'code' => 'CP000010', 'designation' => 'Loyer', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '14', 'code' => 'CP000011', 'designation' => 'Alimentation', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '15', 'code' => 'CP000012', 'designation' => 'Régula', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '16', 'code' => 'CP000013', 'designation' => 'Déplacement', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '17', 'code' => 'CP000014', 'designation' => 'Heures supplémentaires', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '18', 'code' => 'CP000015', 'designation' => 'Prime rendement', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1'),
            array('id' => '21', 'code' => 'CP000016', 'designation' => 'Carburant', 'sens' => NULL, 'type' => NULL, 'code_compte_poste' => NULL, 'active' => '1')
        );

        foreach ($p_compte as $key => $value) {
            $manager->getConnection()->insert('p_compte', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }





        /*
         * groupe utilisateurs
         */
        $us_groupe = array(
            array('id' => '1', 'user_created' => NULL, 'user_updated' => NULL, 'designation' => 'groupe Employés', 'abreviation' => 'groupe Employés', 'description' => 'ce groupe il permet de gérer l\'accés de vos employés à l\'application', 'active' => '1', 'created' => NULL, 'updated' => NULL, 'code' => 'GRP0000001'),
            array('id' => '2', 'user_created' => NULL, 'user_updated' => NULL, 'designation' => 'groupe Département Informatique', 'abreviation' => 'groupe Département Informatique', 'description' => 'description du groupe 2', 'active' => '1', 'created' => NULL, 'updated' => NULL, 'code' => 'GRP0000002'),
        );

        foreach ($us_groupe as $key => $value) {
            $manager->getConnection()->insert('us_groupe', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }


        /*
         * type de partenaire 
         */
        $u_p_partenaire_ty = array(
            array('id' => '1', 'abreviation' => 'cl', 'designation' => 'client', 'active' => '1'),
            array('id' => '2', 'abreviation' => 'fourn', 'designation' => 'fournisseur', 'active' => '1')
        );

        foreach ($u_p_partenaire_ty as $key => $value) {
            $manager->getConnection()->insert('u_p_partenaire_ty', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }








        /* `u3s-erp-load`.`u_p_partenaire` */
        $u_p_partenaire = array(
            array('id' => '1', 'u_p_partenaire_ty_id' => '2', 'code' => 'FRS0000161', 'forme_juridique' => NULL, 'nom' => 'KC PROTECTION', 'prenom' => 'KC PROTECTION', 'societe' => 'KC PROTECTION', 'adresse' => NULL, 'pays' => 'MAROC', 'ville' => 'CASABLANCA', 'tel1' => NULL, 'tel2' => NULL, 'tel3' => NULL, 'fax1' => NULL, 'fax2' => NULL, 'mail1' => NULL, 'mail2' => NULL, 'rib' => NULL, 'banque' => NULL, 'active' => '1', 'iff' => 'iff', 'rc' => 'rc', 'ice' => 'ice', 'patente' => 'patente', 'taxable' => NULL, 'tva' => NULL, 'modepaiement_id' => NULL),
            array('id' => '2', 'u_p_partenaire_ty_id' => '2', 'code' => 'PAR000000163', 'forme_juridique' => NULL, 'nom' => 'SOLESTOR', 'prenom' => 'SOLESTOR', 'societe' => 'SOLESTOR', 'adresse' => 'N° 108, Zone Industrielle Sud-Ouest 20800', 'pays' => 'Maroc', 'ville' => 'Mohammedia', 'tel1' => '+212 523 32 32 95 / 96', 'tel2' => '+212 661 43 12 44', 'tel3' => NULL, 'fax1' => '+212 523 32 32 98', 'fax2' => NULL, 'mail1' => NULL, 'mail2' => NULL, 'rib' => NULL, 'banque' => NULL, 'active' => '1', 'iff' => '1680353', 'rc' => '132149', 'ice' => '000035923000079', 'patente' => '31990041', 'taxable' => NULL, 'tva' => NULL, 'modepaiement_id' => NULL),
            array('id' => '3', 'u_p_partenaire_ty_id' => '2', 'code' => 'PAR000000164', 'forme_juridique' => NULL, 'nom' => 'AHMED SCULPTEUR', 'prenom' => 'AHMED SCULPTEUR', 'societe' => 'AHMED SCULPTEUR', 'adresse' => NULL, 'pays' => 'MAROC', 'ville' => 'CASABLANCA', 'tel1' => NULL, 'tel2' => NULL, 'tel3' => NULL, 'fax1' => NULL, 'fax2' => NULL, 'mail1' => NULL, 'mail2' => NULL, 'rib' => NULL, 'banque' => NULL, 'active' => '1', 'iff' => NULL, 'rc' => NULL, 'ice' => NULL, 'patente' => NULL, 'taxable' => NULL, 'tva' => NULL, 'modepaiement_id' => NULL),
            array('id' => '4', 'u_p_partenaire_ty_id' => '1', 'code' => 'PAR000000165', 'forme_juridique' => NULL, 'nom' => 'RAYONNAGE', 'prenom' => 'RAYONNAGE', 'societe' => 'RAYONNAGE', 'adresse' => NULL, 'pays' => 'MAROC', 'ville' => 'CASABLANCA', 'tel1' => NULL, 'tel2' => NULL, 'tel3' => NULL, 'fax1' => NULL, 'fax2' => NULL, 'mail1' => NULL, 'mail2' => NULL, 'rib' => NULL, 'banque' => NULL, 'active' => '1', 'iff' => NULL, 'rc' => NULL, 'ice' => NULL, 'patente' => NULL, 'taxable' => NULL, 'tva' => NULL, 'modepaiement_id' => NULL),
            array('id' => '5', 'u_p_partenaire_ty_id' => '1', 'code' => 'PAR000000166', 'forme_juridique' => NULL, 'nom' => 'STE IMAN', 'prenom' => 'STE IMAN', 'societe' => 'STE IMAN', 'adresse' => NULL, 'pays' => 'MAROC', 'ville' => 'CASABLANCA', 'tel1' => NULL, 'tel2' => NULL, 'tel3' => NULL, 'fax1' => NULL, 'fax2' => NULL, 'mail1' => NULL, 'mail2' => NULL, 'rib' => NULL, 'banque' => NULL, 'active' => '1', 'iff' => NULL, 'rc' => NULL, 'ice' => NULL, 'patente' => NULL, 'taxable' => NULL, 'tva' => NULL, 'modepaiement_id' => NULL),
            array('id' => '6', 'u_p_partenaire_ty_id' => '1', 'code' => 'PAR000000167', 'forme_juridique' => NULL, 'nom' => 'SALON GRES', 'prenom' => 'SALON GRES', 'societe' => 'SALON GRES', 'adresse' => NULL, 'pays' => 'MAROC', 'ville' => 'CASABLANCA', 'tel1' => NULL, 'tel2' => NULL, 'tel3' => NULL, 'fax1' => NULL, 'fax2' => NULL, 'mail1' => NULL, 'mail2' => NULL, 'rib' => NULL, 'banque' => NULL, 'active' => '1', 'iff' => NULL, 'rc' => NULL, 'ice' => NULL, 'patente' => NULL, 'taxable' => NULL, 'tva' => NULL, 'modepaiement_id' => NULL),
        );

        foreach ($u_p_partenaire as $key => $value) {
            $manager->getConnection()->insert('u_p_partenaire', (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }





        /* `hostji5_u3s-erp-v1`.`ufacture_type` */
        $ufacture_type = array(
            array('id' => '1', 'code' => '_FAC', 'designation' => 'FACTURE'),
            array('id' => '2', 'code' => '_FACA', 'designation' => 'FACTURE AVOIR')
        );
        foreach ($ufacture_type as $key => $value) {
            $manager->getConnection()->insert("ufacture_type ", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }



        $udepot = array(
            array('id' => '1', 'user_created' => NULL, 'user_updated' => NULL, 'code' => 'DEP0000000001', 'titre' => 'dépot par défault', 'description' => 'Sunt vitae voluptas optio deserunt. Pariatur placeat est ab omnis laboriosam. Eligendi cum ut itaque nihil quia exercitationem illum. Fugiat explicabo nobis omnis et corporis quo.', 'adresse' => '3, rue de Samson
03 698 Boulangerboeuf', 'code_postal' => NULL, 'ville' => NULL, 'pays' => NULL, 'active' => '1', 'etat' => NULL, 'autre_information' => NULL, 'created' => '2020-05-11 14:59:51', 'updated' => NULL)
        );


        foreach ($udepot as $key => $value) {
            $manager->getConnection()->insert("udepot", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }






        $p_article_nature = array(
            array('id' => '1', 'code' => 'nat00000001', 'abreviation' => 'charge', 'designation' => 'charge', 'active' => '1'),
            array('id' => '2', 'code' => 'nat00000002', 'abreviation' => 'produit', 'designation' => 'produit', 'active' => '1'),
            array('id' => '3', 'code' => 'nat00000003', 'abreviation' => 'matière première', 'designation' => 'matière première', 'active' => '1'),
            array('id' => '4', 'code' => 'nat00000004', 'abreviation' => 'produit fini', 'designation' => 'produit fini', 'active' => '1'),
            array('id' => '5', 'code' => 'nat00000005', 'abreviation' => 'piéces de rechange', 'designation' => 'piéces de rechange', 'active' => '1'),
            array('id' => '6', 'code' => 'nat00000006', 'abreviation' => 'instrumentation médical', 'designation' => 'instrumentation médical', 'active' => '1'),
            array('id' => '7', 'code' => 'nat00000007', 'abreviation' => 'equip non medical', 'designation' => 'equip non medical', 'active' => '1'),
            array('id' => '8', 'code' => 'nat00000008', 'abreviation' => 'equip medical', 'designation' => 'equip medical', 'active' => '1'),
            array('id' => '9', 'code' => 'nat00000009', 'abreviation' => 'consommbale', 'designation' => 'consommbale', 'active' => '1'),
            array('id' => '10', 'code' => 'nat000000010', 'abreviation' => 'accessoires des équipements médical', 'designation' => 'accessoires des équipements médical', 'active' => '1'),
            array('id' => '11', 'code' => 'nat000000011', 'abreviation' => 'préstation de service(contrat et autre)', 'designation' => 'préstation de service(contrat et autre)', 'active' => '1')
        );


        foreach ($p_article_nature as $key => $value) {
            $manager->getConnection()->insert("p_article_nature", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }



        /* `u3s-erp-load`.`uarticle` */
      /*  $uarticle = array(
            array('id' => '1', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4141080230', 'titre' => 'CHEVILLE LAITON', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '1', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => '2020-08-14 12:20:05', 'gerer_en_stock' => null, 'verification_stock' => '1', 'code_barre' => NULL, 'mime_type' => NULL, 'image_name' => '5f36817532be5663691540.jpg', 'image_size' => '120146', 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '2', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4151140258', 'titre' => 'BANDE ARMEE 30 ML SEMIN', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '63', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => '2020-08-14 13:03:35', 'gerer_en_stock' => null, 'verification_stock' => '1', 'code_barre' => NULL, 'mime_type' => NULL, 'image_name' => '5f368ba7778c4779928335.jfif', 'image_size' => '22551', 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '3', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '1040083', 'titre' => 'JOINT CREUX EN Z 100*200*60  2800 BA13 STD COLLE', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '24', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => null, 'verification_stock' => NULL, 'code_barre' => NULL, 'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '4', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4151150263', 'titre' => 'ENDUIT CE 78 PRISE UNIVERSELLE SAC DE 25KG SEMIN', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '125', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => null, 'verification_stock' => NULL, 'code_barre' => NULL,  'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '5', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4141080238', 'titre' => 'CHEVILLE HOURDI BASCULES ET ROSACES (AVEC RONDELLES)', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '2', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => null, 'verification_stock' => NULL, 'code_barre' => NULL, 'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '6', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '3090830040', 'titre' => 'DALLE FP ISOTONE HYGIENE 600*600*6.5 MM KNAUF', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '127', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => null, 'verification_stock' => NULL, 'code_barre' => NULL,  'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '7', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4141040224', 'titre' => 'ECLISSE DE 45 SEMIN', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '2', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => '1', 'verification_stock' => NULL, 'code_barre' => NULL, 'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '8', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4131000080', 'titre' => 'FOURRURE F-47/17 DE 5.3 ML TECZONE', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '6', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => null, 'verification_stock' => NULL, 'code_barre' => NULL,  'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '9', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4141080234', 'titre' => 'CHEVILLE HOURDI CABA006 INDEX', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '2', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => null, 'verification_stock' => NULL, 'code_barre' => NULL,  'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '10', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4141090211', 'titre' => 'SUSPENTE (BRIDE) PIVOT (BRIDE DE FOURRURE)', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '2', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => null, 'verification_stock' => NULL, 'code_barre' => NULL,  'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
            array('id' => '11', 'depot_id' => '1', 'p_unite_poid_id' => NULL, 'p_unite_default_id' => '5', 'p_unite_lang_larg_haut_id' => NULL, 'p_unite_surface_id' => NULL, 'p_unite_volume_id' => NULL, 'nature_id' => NULL, 'user_created' => NULL, 'user_updated' => NULL, 'code' => '4141090211', 'titre' => 'Défault acompte', 'etat_vente' => '1', 'etat_achat' => '1', 'description' => NULL, 'url' => NULL, 'stock_base' => NULL, 'poid' => NULL, 'longeur' => NULL, 'largeur' => NULL, 'hauteur' => NULL, 'surface' => NULL, 'volume' => NULL, 'prix_vente' => NULL, 'prix_vente_min' => NULL, 'prix_achat' => '2', 'prix_achat_min' => NULL, 'code_comptable_vente' => NULL, 'code_comptable_vente_export' => NULL, 'code_comptable_achat' => NULL, 'active' => '1', 'autre_information' => NULL, 'created' => NULL, 'updated' => NULL, 'gerer_en_stock' => null, 'verification_stock' => NULL, 'code_barre' => NULL, 'mime_type' => NULL, 'image_name' => NULL, 'image_size' => NULL, 'tva' => '20', 'code_article_fournisseur' => NULL, 'description_detail' => NULL),
        );



        foreach ($uarticle as $key => $value) {
            $manager->getConnection()->insert("uarticle", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }
*/

        /* `category` */
        $ucategory = array(
            array('id' => '1', 'user_created' => NULL, 'user_updated' => NULL, 'active' => '1', 'code' => 'CAT0000000001', 'titre' => 'ACCESSOIRE REVETEMENT', 'abreviation' => 'ACCESSOIRE REVETEMENT', 'description' => NULL, 'created' => NULL, 'updated' => NULL),
            array('id' => '2', 'user_created' => NULL, 'user_updated' => NULL, 'active' => '1', 'code' => 'CAT0000000002', 'titre' => 'FAUX PLAFOND', 'abreviation' => 'FAUX PLAFOND', 'description' => NULL, 'created' => NULL, 'updated' => NULL),
            array('id' => '3', 'user_created' => NULL, 'user_updated' => NULL, 'active' => '1', 'code' => 'CAT0000000003', 'titre' => 'REVETEMENT SOL MOQUETTE', 'abreviation' => 'REVETEMENT SOL MOQUETTE', 'description' => NULL, 'created' => NULL, 'updated' => NULL),
            array('id' => '4', 'user_created' => NULL, 'user_updated' => NULL, 'active' => '1', 'code' => 'CAT0000000004', 'titre' => 'REVETEMENT SOL PVC', 'abreviation' => 'REVETEMENT SOL PVC', 'description' => NULL, 'created' => NULL, 'updated' => NULL),
            array('id' => '5', 'user_created' => '128', 'user_updated' => NULL, 'active' => NULL, 'code' => 'CAT-000000005/2020', 'titre' => 'BARRIERE', 'abreviation' => 'BARRIERE', 'description' => 'BARRIERE', 'created' => '2020-05-19 14:57:50', 'updated' => NULL),
            array('id' => '6', 'user_created' => NULL, 'user_updated' => '134', 'active' => '1', 'code' => 'CAT-000000006/2020', 'titre' => 'STORES ET PERGOLA', 'abreviation' => 'STORES ET PERGOLA', 'description' => NULL, 'created' => NULL, 'updated' => '2020-05-22 14:09:31'),
            array('id' => '7', 'user_created' => NULL, 'user_updated' => '134', 'active' => '1', 'code' => 'CAT-000000010/2020', 'titre' => 'PEINTURE', 'abreviation' => 'PEINTURE', 'description' => NULL, 'created' => NULL, 'updated' => '2020-05-22 14:09:11'),
            array('id' => '8', 'user_created' => '134', 'user_updated' => NULL, 'active' => '1', 'code' => 'CAT-000000011/2020', 'titre' => 'COLLE ET ADHÉSIFS', 'abreviation' => 'COLLE ET ADHÉSIFS', 'description' => NULL, 'created' => '2020-05-22 14:10:33', 'updated' => NULL),
        );




        foreach ($ucategory as $key => $value) {
            $manager->getConnection()->insert("ucategory", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }


        /* `articles categories` */

        $u_articles_categories = array(
            array('ucategory_id' => '1', 'uarticle_id' => '1'),
            array('ucategory_id' => '1', 'uarticle_id' => '2'),
            array('ucategory_id' => '1', 'uarticle_id' => '3'),
            array('ucategory_id' => '1', 'uarticle_id' => '4'),
            array('ucategory_id' => '1', 'uarticle_id' => '5'),
            array('ucategory_id' => '1', 'uarticle_id' => '6'),
            array('ucategory_id' => '1', 'uarticle_id' => '7'),
            array('ucategory_id' => '1', 'uarticle_id' => '8'),
            array('ucategory_id' => '1', 'uarticle_id' => '9'),
            array('ucategory_id' => '1', 'uarticle_id' => '10'),
            array('ucategory_id' => '2', 'uarticle_id' => '1'),
            array('ucategory_id' => '2', 'uarticle_id' => '2'),
            array('ucategory_id' => '2', 'uarticle_id' => '3'),
            array('ucategory_id' => '2', 'uarticle_id' => '4'),
        );

        foreach ($u_articles_categories as $key => $value) {
            $manager->getConnection()->insert("u_articles_categories", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }



        $p_poste = array(
            array('id' => '92', 'designation' => 'Directeur général', 'abreviation' => 'DG', 'description' => 'Directeur général', 'active' => '1', 'solde' => '60'),
            array('id' => '93', 'designation' => 'Digital Brand Manager', 'abreviation' => 'DBM', 'description' => 'Directeur général', 'active' => NULL, 'solde' => NULL),
            array('id' => '94', 'designation' => 'Responsable communication', 'abreviation' => 'Responsable communication', 'description' => 'Responsable communication', 'active' => NULL, 'solde' => NULL),
            array('id' => '95', 'designation' => 'Responsable marketing', 'abreviation' => 'Responsable marketing', 'description' => 'Responsable marketing', 'active' => NULL, 'solde' => NULL),
            array('id' => '96', 'designation' => 'Directeur des opérations', 'abreviation' => 'Directeur des opérations', 'description' => 'Directeur des opérations', 'active' => NULL, 'solde' => NULL),
            array('id' => '97', 'designation' => 'Directeur de site industriel', 'abreviation' => 'Directeur de site industriel', 'description' => 'Directeur de site industriel', 'active' => NULL, 'solde' => NULL),
            array('id' => '98', 'designation' => 'Secrétaire général', 'abreviation' => 'SG', 'description' => 'Secrétaire général', 'active' => NULL, 'solde' => NULL),
            array('id' => '99', 'designation' => 'Directeur administratif et financier', 'abreviation' => 'DF', 'description' => 'Directeur administratif et financier', 'active' => NULL, 'solde' => NULL),
            array('id' => '100', 'designation' => 'directeur du système d’information', 'abreviation' => 'DSI', 'description' => 'directeur du système d’information', 'active' => NULL, 'solde' => NULL),
            array('id' => '101', 'designation' => 'Chargé de communication', 'abreviation' => 'Chargé de communication', 'description' => 'Chargé de communication', 'active' => NULL, 'solde' => NULL),
            array('id' => '102', 'designation' => 'Employer', 'abreviation' => 'Employer', 'description' => 'Employer', 'active' => NULL, 'solde' => NULL),
            array('id' => '103', 'designation' => 'Enseignant', 'abreviation' => 'Enseignant', 'description' => 'Enseignant', 'active' => NULL, 'solde' => NULL),
            array('id' => '104', 'designation' => 'Etudiant', 'abreviation' => 'Etudiant', 'description' => 'Etudiant', 'active' => NULL, 'solde' => NULL)
        );
        foreach ($p_poste as $key => $value) {
            $manager->getConnection()->insert("p_poste", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }



        $up_piece = array(
            array('id' => '1', 'code' => 'FAF', 'active' => '1', 'is_charge' => '1', 'designation' => 'Facture fournisseur', 'sens' => '-1'),
            array('id' => '2', 'code' => 'ODE', 'active' => '1', 'is_charge' => '1', 'designation' => 'Ordre divers externe', 'sens' => '-1'),
            array('id' => '3', 'code' => 'ODI', 'active' => '1', 'is_charge' => '1', 'designation' => 'Ordre divers interne', 'sens' => '-1'),
            array('id' => '4', 'code' => 'ODP', 'active' => '1', 'is_charge' => '1', 'designation' => 'Ordre de paiement', 'sens' => '-1'),
            array('id' => '5', 'code' => 'FAC', 'active' => '1', 'is_charge' => '0', 'designation' => 'Facture client', 'sens' => '1'),
            array('id' => '6', 'code' => 'APP', 'active' => '1', 'is_charge' => '0', 'designation' => 'Apport', 'sens' => '1'),
            array('id' => '20', 'code' => 'FAC-A', 'active' => '1', 'is_charge' => '0', 'designation' => 'Facture \'acompte', 'sens' => '1'),
            array('id' => '21', 'code' => 'SLDI', 'active' => '1', 'is_charge' => '0', 'designation' => 'Solde Initiale', 'sens' => '1'),
            array('id' => '22', 'code' => 'ALI', 'active' => '1', 'is_charge' => '0', 'designation' => 'Alimentation de compte', 'sens' => '1'),
            array('id' => '23', 'code' => 'FAV', 'active' => '1', 'is_charge' => '0', 'designation' => 'Facture à voir', 'sens' => '1'),
            array('id' => '24', 'code' => 'ACF', 'active' => '1', 'is_charge' => '1', 'designation' => 'Facture d\'acompte', 'sens' => '-1'),
            array('id' => '25', 'code' => 'ACR', 'active' => '1', 'is_charge' => '0', 'designation' => 'Réception d\'acompte', 'sens' => '-1'),
            array('id' => '26', 'code' => 'FAV-C', 'active' => '1', 'is_charge' => '0', 'designation' => 'Facture avoir client', 'sens' => '-1'),
            array('id' => '27', 'code' => 'FAA-C', 'active' => '1', 'is_charge' => '0', 'designation' => 'Facture d\'annulation client', 'sens' => '-1')
        );


        foreach ($up_piece as $key => $value) {
            $manager->getConnection()->insert("up_piece", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        /* `hostji5_u3s-erp-v1`.`p_compte_banque` */
        $p_compte_banque = array(
            array('id' => '1', 'p_dossier_id' => '66', 'user_created' => NULL, 'user_updated' => NULL, 'code' => 'ban000000002', 'abreviation' => 'BCP TEST', 'designation' => 'BCP TEST', 'description' => 'BANQUE DE TEST', 'num_compte' => 'b123456', 'rib' => 'azert123456', 'code_iban' => 's123456', 'code_bic_swift' => 's123456', 'code_comptable' => 's123456', 'proprietaire' => 's123456', 'adress_agence' => 'azert', 'date_compte' => '2020-12-01', 'active' => '1', 'created' => NULL, 'updated' => NULL, 'solde_initial' => '12345'),
            array('id' => '2', 'p_dossier_id' => '66', 'user_created' => NULL, 'user_updated' => NULL, 'code' => 'ban000000003', 'abreviation' => 'CIH TEST', 'designation' => 'CIH TEST', 'description' => 'CIH NE', 'num_compte' => '123456789', 'rib' => 'rib123456789', 'code_iban' => 'azer123456789', 'code_bic_swift' => 'azer123456879', 'code_comptable' => 'az123456789', 'proprietaire' => '123456789z', 'adress_agence' => 'casablanca', 'date_compte' => '2020-12-01', 'active' => '1', 'created' => NULL, 'updated' => NULL, 'solde_initial' => '123456789')
        );

        foreach ($p_compte_banque as $key => $value) {
            $manager->getConnection()->insert("p_compte_banque ", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }



        /*  $us_parametrage = array(
          array('id' => '1', 'code' => NULL, 'prefix' => 'partenaire', 'route' => 'u_p_partenaire_index', 'active' => '1', 'titre' => 'Partenaire', 'icon' => 'fa-table', 'ordr' => '1'),
          array('id' => '2', 'code' => NULL, 'prefix' => 'devise', 'route' => 'u_p_devise_index', 'active' => '1', 'titre' => 'Devise', 'icon' => 'fa-table', 'ordr' => '2'),
          array('id' => '3', 'code' => NULL, 'prefix' => 'affaire', 'route' => 'u_p_affaire_index', 'active' => '1', 'titre' => 'Affaire', 'icon' => 'fa-table', 'ordr' => '3'),
          array('id' => '4', 'code' => NULL, 'prefix' => 'modepaiement', 'route' => 'p_modepaiement_index', 'active' => '1', 'titre' => 'Mode paiement', 'icon' => 'fa-table', 'ordr' => '4'),
          array('id' => '5', 'code' => NULL, 'prefix' => 'service', 'route' => 'u_p_service_index', 'active' => '1', 'titre' => 'Service ', 'icon' => 'fa-table', 'ordr' => '5'),
          array('id' => '6', 'code' => NULL, 'prefix' => 'marche', 'route' => 'p_marche_index', 'active' => '1', 'titre' => 'Marché', 'icon' => 'fa-table', 'ordr' => '6'),
          array('id' => '7', 'code' => NULL, 'prefix' => 'sousmarche', 'route' => 'p_marche_sous_index', 'active' => '1', 'titre' => 'Marché sous', 'icon' => 'fa-table', 'ordr' => '7'),
          array('id' => '8', 'code' => NULL, 'prefix' => 'naturearticle', 'route' => 'p_article_nature_index', 'active' => '1', 'titre' => 'Nature d\'article', 'icon' => 'fa-table', 'ordr' => '8'),
          array('id' => '9', 'code' => NULL, 'prefix' => 'unite', 'route' => 'p_unite_index', 'active' => '1', 'titre' => 'Unité ', 'icon' => 'fa-table', 'ordr' => '9'),
          array('id' => '10', 'code' => NULL, 'prefix' => 'banque', 'route' => 'u_x_banque_index', 'active' => '1', 'titre' => 'Banque ', 'icon' => 'fa-table', 'ordr' => '10'),
          array('id' => '11', 'code' => NULL, 'prefix' => 'projet', 'route' => 'p_projet_index', 'active' => '1', 'titre' => 'Projet', 'icon' => 'fa-table', 'ordr' => '11'),
          array('id' => '12', 'code' => NULL, 'prefix' => 'responsable', 'route' => 'u_p_responsable_index', 'active' => '1', 'titre' => 'Responsable ', 'icon' => 'fa-table', 'ordr' => '12'),
          array('id' => '13', 'code' => NULL, 'prefix' => 'piece', 'route' => 'up_piece_index', 'active' => '1', 'titre' => 'Piéce', 'icon' => 'fa-table', 'ordr' => '13'),
          array('id' => '14', 'code' => NULL, 'prefix' => 'sousprojet', 'route' => 'p_projet_sous_index', 'active' => '1', 'titre' => 'Projet sous', 'icon' => 'fa-table', 'ordr' => '14'),
          array('id' => '15', 'code' => NULL, 'prefix' => 'comptebanque', 'route' => 'p_compte_banque_index', 'active' => '1', 'titre' => 'Compte banque', 'icon' => 'fa-table', 'ordr' => '15'),
          array('id' => '16', 'code' => NULL, 'prefix' => 'ptransactiontype', 'route' => 'p_transaction_type_index', 'active' => '1', 'titre' => 'Transaction type', 'icon' => 'fa-table', 'ordr' => '16'),
          array('id' => '17', 'code' => NULL, 'prefix' => 'departement', 'route' => 'p_departement_index', 'active' => '1', 'titre' => 'Département', 'icon' => 'fa-table', 'ordr' => '17'),
          array('id' => '18', 'code' => NULL, 'prefix' => 'poste', 'route' => 'p_poste_index', 'active' => '1', 'titre' => 'Poste', 'icon' => 'fa-table', 'ordr' => '18'),
          array('id' => '19', 'code' => NULL, 'prefix' => 'situationfamiliale', 'route' => 'p_situation_familiale_index', 'active' => '1', 'titre' => 'Situation familiale', 'icon' => 'fa-table', 'ordr' => '19'),
          array('id' => '20', 'code' => NULL, 'prefix' => 'typecontrat', 'route' => 'p_type_contrat_index', 'active' => '1', 'titre' => 'Type contrat', 'icon' => 'fa-table', 'ordr' => '20'),
          array('id' => '21', 'code' => NULL, 'prefix' => 'typeconge', 'route' => 'p_type_conge_index', 'active' => '1', 'titre' => 'Type conge', 'icon' => 'fa-table', 'ordr' => '21'),
          array('id' => '22', 'code' => NULL, 'prefix' => 'nomenclaturestandard', 'route' => 'p_nomenclature_standard_index', 'active' => '1', 'titre' => 'Nomenclature standard', 'icon' => 'fa-table', 'ordr' => '22'),
          array('id' => '23', 'code' => NULL, 'prefix' => 'niveau1', 'route' => 'p_niveau_1_index', 'active' => '1', 'titre' => 'Niveau 1', 'icon' => 'fa-table', 'ordr' => '23'),
          array('id' => '24', 'code' => NULL, 'prefix' => 'niveau2', 'route' => 'p_niveau_2_index', 'active' => '1', 'titre' => 'Niveau 2', 'icon' => 'fa-table', 'ordr' => '24'),
          array('id' => '25', 'code' => NULL, 'prefix' => 'niveau3', 'route' => 'p_niveau_3_index', 'active' => '1', 'titre' => 'Niveau 3', 'icon' => 'fa-table', 'ordr' => '25'),
          array('id' => '26', 'code' => NULL, 'prefix' => 'niveau4', 'route' => 'p_niveau_4_index', 'active' => '1', 'titre' => 'Niveau 4', 'icon' => 'fa-table', 'ordr' => '26'),
          array('id' => '27', 'code' => NULL, 'prefix' => 'forme', 'route' => 'p_forme_index', 'active' => '1', 'titre' => 'Forme', 'icon' => 'fa-table', 'ordr' => '23'),
          array('id' => '28', 'code' => NULL, 'prefix' => 'presentation', 'route' => 'p_presentation_index', 'active' => '1', 'titre' => 'Présentation', 'icon' => 'fa-table', 'ordr' => '24'),
          array('id' => '29', 'code' => NULL, 'prefix' => 'forme', 'route' => 'p_forme_index', 'active' => '1', 'titre' => 'Forme', 'icon' => 'fa-table', 'ordr' => '23'),
          array('id' => '30', 'code' => NULL, 'prefix' => 'presentation', 'route' => 'p_presentation_index', 'active' => '1', 'titre' => 'Présentation', 'icon' => 'fa-table', 'ordr' => '24'),
          );






          foreach ($us_parametrage as $key => $value) {
          $manager->getConnection()->insert("us_parametrage", (array) $value);
          $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
          } */



        /**
         * Database `hostji5_u3s-erp-v1`
         */
        /* `hostji5_u3s-erp-v1`.`us_module_parametrage` */
        /*         $us_module_parametrage = array(
          array('us_parametrage_id' => '1', 'us_module_id' => '8'),
          array('us_parametrage_id' => '2', 'us_module_id' => '8'),
          array('us_parametrage_id' => '3', 'us_module_id' => '8'),
          array('us_parametrage_id' => '4', 'us_module_id' => '8'),
          array('us_parametrage_id' => '5', 'us_module_id' => '8'),
          array('us_parametrage_id' => '6', 'us_module_id' => '8'),
          array('us_parametrage_id' => '7', 'us_module_id' => '8'),
          array('us_parametrage_id' => '8', 'us_module_id' => '8'),
          array('us_parametrage_id' => '9', 'us_module_id' => '8'),
          array('us_parametrage_id' => '10', 'us_module_id' => '8'),
          array('us_parametrage_id' => '11', 'us_module_id' => '8'),
          array('us_parametrage_id' => '12', 'us_module_id' => '8'),
          array('us_parametrage_id' => '13', 'us_module_id' => '8'),
          array('us_parametrage_id' => '14', 'us_module_id' => '8'),
          array('us_parametrage_id' => '1', 'us_module_id' => '9'),
          array('us_parametrage_id' => '2', 'us_module_id' => '9'),
          array('us_parametrage_id' => '3', 'us_module_id' => '9'),
          array('us_parametrage_id' => '4', 'us_module_id' => '9'),
          array('us_parametrage_id' => '5', 'us_module_id' => '9'),
          array('us_parametrage_id' => '6', 'us_module_id' => '9'),
          array('us_parametrage_id' => '7', 'us_module_id' => '9'),
          array('us_parametrage_id' => '8', 'us_module_id' => '9'),
          array('us_parametrage_id' => '9', 'us_module_id' => '9'),
          array('us_parametrage_id' => '10', 'us_module_id' => '9'),
          array('us_parametrage_id' => '11', 'us_module_id' => '9'),
          array('us_parametrage_id' => '12', 'us_module_id' => '9'),
          array('us_parametrage_id' => '13', 'us_module_id' => '9'),
          array('us_parametrage_id' => '15', 'us_module_id' => '9'),
          array('us_parametrage_id' => '2', 'us_module_id' => '11'),
          array('us_parametrage_id' => '4', 'us_module_id' => '11'),
          array('us_parametrage_id' => '10', 'us_module_id' => '11'),
          array('us_parametrage_id' => '15', 'us_module_id' => '11'),
          array('us_parametrage_id' => '16', 'us_module_id' => '11'),
          array('us_parametrage_id' => '13', 'us_module_id' => '11'),
          array('us_parametrage_id' => '17', 'us_module_id' => '3'),
          array('us_parametrage_id' => '10', 'us_module_id' => '3'),
          array('us_parametrage_id' => '18', 'us_module_id' => '3'),
          array('us_parametrage_id' => '19', 'us_module_id' => '3'),
          array('us_parametrage_id' => '20', 'us_module_id' => '3'),
          array('us_parametrage_id' => '21', 'us_module_id' => '3'),
          array('us_parametrage_id' => '8', 'us_module_id' => '4'),
          array('us_parametrage_id' => '9', 'us_module_id' => '4'),
          array('us_parametrage_id' => '22', 'us_module_id' => '4'),
          array('us_parametrage_id' => '23', 'us_module_id' => '4'),
          array('us_parametrage_id' => '24', 'us_module_id' => '4'),
          array('us_parametrage_id' => '25', 'us_module_id' => '4'),
          array('us_parametrage_id' => '26', 'us_module_id' => '4'),
          array('us_parametrage_id' => '29', 'us_module_id' => '4'),
          array('us_parametrage_id' => '30', 'us_module_id' => '4'),
          );

          foreach ($us_module_parametrage as $key => $value) {
          $manager->getConnection()->insert("us_module_parametrage", (array) $value);
          $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
          } */






        $p_compte_banque_type = array(
            array('id' => '1', 'code' => 'CMPTB00000001', 'designation' => 'Compte bancaire ', 'abreviation' => 'Compte bancaire ', 'active' => '1'),
            array('id' => '2', 'code' => 'CMPTB00000002', 'designation' => 'Compte caisse', 'abreviation' => 'Compte caisse', 'active' => '1')
        );
        foreach ($p_compte_banque_type as $key => $value) {
            $manager->getConnection()->insert("p_compte_banque_type", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }




        /*         $p_transaction_type = array(
          array('id' => '1', 'code' => 'FAF', 'designation' => 'Facture Fournisseur', 'active' => '1'),
          array('id' => '5', 'code' => 'FAC', 'designation' => 'Facture client', 'active' => '1'),
          array('id' => '3', 'code' => 'CHA', 'designation' => 'Charge', 'active' => '1'),
          array('id' => '21', 'code' => 'SLDI', 'designation' => 'Solde initiale', 'active' => '1'),
          array('id' => '22', 'code' => 'ALI', 'designation' => 'Alimentation', 'active' => '1'),
          );


          foreach ($p_transaction_type as $key => $value) {
          $manager->getConnection()->insert("p_transaction_type", (array) $value);
          $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
          } */



        $p_nomenclature_standard = array(
            array('id' => '1', 'code' => 'NO000000001', 'abreviation' => 'ADOUCISSEUR', 'designation' => 'ADOUCISSEUR', 'active' => '1'),
            array('id' => '2', 'code' => 'NO000000002', 'abreviation' => 'BAC DE TREMPAGE', 'designation' => 'BAC DE TREMPAGE', 'active' => '1'),
            array('id' => '3', 'code' => 'NO000000003', 'abreviation' => 'BATTERIE', 'designation' => 'BATTERIE', 'active' => '1'),
            array('id' => '4', 'code' => 'NO000000004', 'abreviation' => 'BOCAL ASPIRATION 4L AUTO LAVABLE', 'designation' => 'BOCAL ASPIRATION 4L AUTO LAVABLE', 'active' => '1'),
            array('id' => '5', 'code' => 'NO000000005', 'abreviation' => 'BOCAL ASPIRATION 2L AUTO LAVABLE', 'designation' => 'BOCAL ASPIRATION 2L AUTO LAVABLE', 'active' => '1'),
            array('id' => '6', 'code' => 'NO000000006', 'abreviation' => 'BOCAL SECURITE', 'designation' => 'BOCAL SECURITE', 'active' => '1'),
            array('id' => '7', 'code' => 'NO000000007', 'abreviation' => 'BRASSARD ADULTE', 'designation' => 'BRASSARD ADULTE', 'active' => '1'),
            array('id' => '8', 'code' => 'NO000000008', 'abreviation' => 'BRASSARD GARROT ', 'designation' => 'BRASSARD GARROT ', 'active' => '1'),
            array('id' => '9', 'code' => 'NO000000009', 'abreviation' => 'BRASSARD OBESE', 'designation' => 'BRASSARD OBESE', 'active' => '1'),
            array('id' => '10', 'code' => 'NO0000000010', 'abreviation' => 'CABLE ADAPTATEUR POUR HUMIDIFICATEUR', 'designation' => 'CABLE ADAPTATEUR POUR HUMIDIFICATEUR', 'active' => '1'),
            array('id' => '11', 'code' => 'NO0000000011', 'abreviation' => 'CABLE DIATHERMIE ', 'designation' => 'CABLE DIATHERMIE ', 'active' => '1'),
            array('id' => '12', 'code' => 'NO0000000012', 'abreviation' => 'CABLE ECG 3 brin  ', 'designation' => 'CABLE ECG 3 brin  ', 'active' => '1'),
            array('id' => '13', 'code' => 'NO0000000013', 'abreviation' => 'CABLE ECG 5 brin', 'designation' => 'CABLE ECG 5 brin', 'active' => '1'),
            array('id' => '14', 'code' => 'NO0000000014', 'abreviation' => 'CABLE ECG BRINS (5X2) ', 'designation' => 'CABLE ECG BRINS (5X2) ', 'active' => '1'),
            array('id' => '15', 'code' => 'NO0000000015', 'abreviation' => 'CABLE FIO2 RESPIRATEUR ANESTHESIE', 'designation' => 'CABLE FIO2 RESPIRATEUR ANESTHESIE', 'active' => '1'),
            array('id' => '16', 'code' => 'NO0000000016', 'abreviation' => 'CAPTEUR DEBIT', 'designation' => 'CAPTEUR DEBIT', 'active' => '1'),
            array('id' => '17', 'code' => 'NO0000000017', 'abreviation' => 'CAPTEUR POUR CAPNOGRAPHE', 'designation' => 'CAPTEUR POUR CAPNOGRAPHE', 'active' => '1'),
            array('id' => '18', 'code' => 'NO0000000018', 'abreviation' => 'CAPTEUR SPO2', 'designation' => 'CAPTEUR SPO2', 'active' => '1'),
            array('id' => '19', 'code' => 'NO0000000019', 'abreviation' => 'CIRCUIT PATIENT COMPLET', 'designation' => 'CIRCUIT PATIENT COMPLET', 'active' => '1'),
            array('id' => '20', 'code' => 'NO0000000020', 'abreviation' => 'ENREGISTREUR MEDICAL NUMERIQUE', 'designation' => 'ENREGISTREUR MEDICAL NUMERIQUE', 'active' => '1'),
            array('id' => '21', 'code' => 'NO0000000021', 'abreviation' => 'ESCABEAU 2 MARCHES', 'designation' => 'ESCABEAU 2 MARCHES', 'active' => '1'),
            array('id' => '22', 'code' => 'NO0000000022', 'abreviation' => 'ESTRADE', 'designation' => 'ESTRADE', 'active' => '1'),
            array('id' => '23', 'code' => 'NO0000000023', 'abreviation' => 'FAUTEUIL POUR HEMODIALYSE', 'designation' => 'FAUTEUIL POUR HEMODIALYSE', 'active' => '1'),
            array('id' => '24', 'code' => 'NO0000000024', 'abreviation' => 'REANIMAT AVEC JEUX DE MASQUE ADULTE', 'designation' => 'REANIMAT AVEC JEUX DE MASQUE ADULTE', 'active' => '1'),
            array('id' => '25', 'code' => 'NO0000000025', 'abreviation' => 'REANIMAT AVEC JEU DE MASQUE P2DIATRIQUE', 'designation' => 'REANIMAT AVEC JEU DE MASQUE P2DIATRIQUE', 'active' => '1'),
            array('id' => '26', 'code' => 'NO0000000026', 'abreviation' => 'LAME N°2 POUR LARYNGOSCOPE', 'designation' => 'LAME N°2 POUR LARYNGOSCOPE', 'active' => '1'),
            array('id' => '27', 'code' => 'NO0000000027', 'abreviation' => 'LAME N°3 POUR LARYNGOSCOPE', 'designation' => 'LAME N°3 POUR LARYNGOSCOPE', 'active' => '1'),
            array('id' => '28', 'code' => 'NO0000000028', 'abreviation' => 'LAME N°4 POUR LARYNGOSCOPE', 'designation' => 'LAME N°4 POUR LARYNGOSCOPE', 'active' => '1'),
            array('id' => '29', 'code' => 'NO0000000029', 'abreviation' => 'LAME N°5 POUR LARYNGOSCOPE', 'designation' => 'LAME N°5 POUR LARYNGOSCOPE', 'active' => '1'),
            array('id' => '30', 'code' => 'NO0000000030', 'abreviation' => 'LAMPE EXAMEN RAIL MURAL', 'designation' => 'LAMPE EXAMEN RAIL MURAL', 'active' => '1'),
            array('id' => '31', 'code' => 'NO0000000031', 'abreviation' => 'TROUSSE DE LARYNGOSCOPE AVEC JEUX DE LAME', 'designation' => 'TROUSSE DE LARYNGOSCOPE AVEC JEUX DE LAME', 'active' => '1'),
            array('id' => '32', 'code' => 'NO0000000032', 'abreviation' => 'LUNETTE ANTI-X', 'designation' => 'LUNETTE ANTI-X', 'active' => '1'),
            array('id' => '33', 'code' => 'NO0000000033', 'abreviation' => 'Piéces de rechange', 'designation' => 'Piéces de rechange', 'active' => '1'),
            array('id' => '34', 'code' => 'NO0000000034', 'abreviation' => 'MATELAS A AIR ALTERNATING', 'designation' => 'MATELAS A AIR ALTERNATING', 'active' => '1'),
            array('id' => '35', 'code' => 'NO0000000035', 'abreviation' => 'PANIER GRILLAGE EN INOX', 'designation' => 'PANIER GRILLAGE EN INOX', 'active' => '1'),
            array('id' => '36', 'code' => 'NO0000000036', 'abreviation' => 'PESE BEBE ', 'designation' => 'PESE BEBE ', 'active' => '1'),
            array('id' => '37', 'code' => 'NO0000000037', 'abreviation' => 'REFRIGERATEUR ', 'designation' => 'REFRIGERATEUR ', 'active' => '1'),
            array('id' => '38', 'code' => 'NO0000000038', 'abreviation' => 'REGULATEUR VIDE ', 'designation' => 'REGULATEUR VIDE ', 'active' => '1'),
            array('id' => '39', 'code' => 'NO0000000039', 'abreviation' => 'SALLE TRAITEMENT POUR HYMODIALYSE', 'designation' => 'SALLE TRAITEMENT POUR HYMODIALYSE', 'active' => '1'),
            array('id' => '40', 'code' => 'NO0000000040', 'abreviation' => 'STETHOSCOPE', 'designation' => 'STETHOSCOPE', 'active' => '1'),
            array('id' => '41', 'code' => 'NO0000000041', 'abreviation' => 'SUPPORT POUE TABLIER', 'designation' => 'SUPPORT POUE TABLIER', 'active' => '1'),
            array('id' => '42', 'code' => 'NO0000000042', 'abreviation' => 'DETECTEUR VEINES', 'designation' => 'DETECTEUR VEINES', 'active' => '1'),
            array('id' => '43', 'code' => 'NO0000000043', 'abreviation' => 'TABLIER PLOMBE', 'designation' => 'TABLIER PLOMBE', 'active' => '1'),
            array('id' => '44', 'code' => 'NO0000000044', 'abreviation' => 'TABOURET AVEC DOSSIER ', 'designation' => 'TABOURET AVEC DOSSIER ', 'active' => '1'),
            array('id' => '45', 'code' => 'NO0000000045', 'abreviation' => 'TENSIOMETRE MANUELLE MOBILE', 'designation' => 'TENSIOMETRE MANUELLE MOBILE', 'active' => '1'),
            array('id' => '46', 'code' => 'NO0000000046', 'abreviation' => 'TESTEUR EAU DUR', 'designation' => 'TESTEUR EAU DUR', 'active' => '1'),
            array('id' => '47', 'code' => 'NO0000000047', 'abreviation' => 'THERMOMETRE MURAL', 'designation' => 'THERMOMETRE MURAL', 'active' => '1'),
            array('id' => '48', 'code' => 'NO0000000048', 'abreviation' => 'TOISE BEBE PLIABLE', 'designation' => 'TOISE BEBE PLIABLE', 'active' => '1'),
            array('id' => '49', 'code' => 'NO0000000049', 'abreviation' => 'TROUSSE TESTEUR CHLORE', 'designation' => 'TROUSSE TESTEUR CHLORE', 'active' => '1'),
            array('id' => '50', 'code' => 'NO0000000050', 'abreviation' => 'VIBROMASSEUR', 'designation' => 'VIBROMASSEUR', 'active' => '1'),
            array('id' => '51', 'code' => 'NO0000000051', 'abreviation' => 'COURROIE', 'designation' => 'COURROIE', 'active' => '1'),
            array('id' => '52', 'code' => 'NO0000000052', 'abreviation' => 'AGITATEUR MAGNETIQUE CHAUFFANT', 'designation' => 'AGITATEUR MAGNETIQUE CHAUFFANT', 'active' => '1'),
            array('id' => '53', 'code' => 'NO0000000053', 'abreviation' => 'AUTOMATE HEMOCULTUR', 'designation' => 'AUTOMATE HEMOCULTUR', 'active' => '1'),
            array('id' => '54', 'code' => 'NO0000000054', 'abreviation' => 'AUTOMATE D\'HEMOSTASE', 'designation' => 'AUTOMATE D\'HEMOSTASE', 'active' => '1'),
            array('id' => '55', 'code' => 'NO0000000055', 'abreviation' => 'AUTOMATE PCR', 'designation' => 'AUTOMATE PCR', 'active' => '1'),
            array('id' => '56', 'code' => 'NO0000000056', 'abreviation' => 'BAIN MARIE', 'designation' => 'BAIN MARIE', 'active' => '1'),
            array('id' => '57', 'code' => 'NO0000000057', 'abreviation' => 'BLANCE DE PRECISION', 'designation' => 'BLANCE DE PRECISION', 'active' => '1'),
            array('id' => '58', 'code' => 'NO0000000058', 'abreviation' => 'BARREAU D\'AGITATION', 'designation' => 'BARREAU D\'AGITATION', 'active' => '1'),
            array('id' => '59', 'code' => 'NO0000000059', 'abreviation' => 'CENTRIFUGEUSE REFRIGEREE', 'designation' => 'CENTRIFUGEUSE REFRIGEREE', 'active' => '1'),
            array('id' => '60', 'code' => 'NO0000000060', 'abreviation' => 'CLASSEUR POUR LAME', 'designation' => 'CLASSEUR POUR LAME', 'active' => '1'),
            array('id' => '61', 'code' => 'NO0000000061', 'abreviation' => 'CONGELATEUR SCIENTIFIC', 'designation' => 'CONGELATEUR SCIENTIFIC', 'active' => '1'),
            array('id' => '62', 'code' => 'NO0000000062', 'abreviation' => 'CYTOMETRE FLUX', 'designation' => 'CYTOMETRE FLUX', 'active' => '1'),
            array('id' => '63', 'code' => 'NO0000000063', 'abreviation' => 'MICROSCOPE BINOCULAIRE', 'designation' => 'MICROSCOPE BINOCULAIRE', 'active' => '1'),
            array('id' => '64', 'code' => 'NO0000000064', 'abreviation' => 'PLATEAU PR 20 LAMES', 'designation' => 'PLATEAU PR 20 LAMES', 'active' => '1'),
            array('id' => '65', 'code' => 'NO0000000065', 'abreviation' => 'POSTE SECURITE MICROBIOLOGIQUE', 'designation' => 'POSTE SECURITE MICROBIOLOGIQUE', 'active' => '1'),
            array('id' => '66', 'code' => 'NO0000000066', 'abreviation' => 'PRESSE PLASMA', 'designation' => 'PRESSE PLASMA', 'active' => '1'),
            array('id' => '67', 'code' => 'NO0000000067', 'abreviation' => 'SOUDEUSE CONNEXION STERILE', 'designation' => 'SOUDEUSE CONNEXION STERILE', 'active' => '1'),
            array('id' => '68', 'code' => 'NO0000000068', 'abreviation' => 'SOUDEUSE PORTABLE', 'designation' => 'SOUDEUSE PORTABLE', 'active' => '1'),
            array('id' => '69', 'code' => 'NO0000000069', 'abreviation' => 'STATION DE TRAITEMENT D\'EAU PPOUR LAB ', 'designation' => 'STATION DE TRAITEMENT D\'EAU PPOUR LAB ', 'active' => '1'),
            array('id' => '70', 'code' => 'NO0000000070', 'abreviation' => 'SYSTEME APHERESE', 'designation' => 'SYSTEME APHERESE', 'active' => '1'),
            array('id' => '71', 'code' => 'NO0000000071', 'abreviation' => 'CHARIOT A PANSEMENT', 'designation' => 'CHARIOT A PANSEMENT', 'active' => '1'),
            array('id' => '72', 'code' => 'NO0000000072', 'abreviation' => 'CHARIOT BRANCARD', 'designation' => 'CHARIOT BRANCARD', 'active' => '1'),
            array('id' => '73', 'code' => 'NO0000000073', 'abreviation' => 'CHARIOT URGENCE', 'designation' => 'CHARIOT URGENCE', 'active' => '1'),
            array('id' => '74', 'code' => 'NO0000000074', 'abreviation' => 'MOTEUR TRAUMATO', 'designation' => 'MOTEUR TRAUMATO', 'active' => '1'),
            array('id' => '75', 'code' => 'NO0000000075', 'abreviation' => 'PESE PERSONNE', 'designation' => 'PESE PERSONNE', 'active' => '1'),
            array('id' => '76', 'code' => 'NO0000000076', 'abreviation' => 'RESPIRATEUR ANESTHESIE', 'designation' => 'RESPIRATEUR ANESTHESIE', 'active' => '1'),
            array('id' => '77', 'code' => 'NO0000000077', 'abreviation' => 'RESPIRATEUR AVEC OPTION NOUVEAU NE', 'designation' => 'RESPIRATEUR AVEC OPTION NOUVEAU NE', 'active' => '1'),
            array('id' => '78', 'code' => 'NO0000000078', 'abreviation' => 'RESPIRATEUR REA', 'designation' => 'RESPIRATEUR REA', 'active' => '1'),
            array('id' => '79', 'code' => 'NO0000000079', 'abreviation' => 'RETINOGRAPHIE', 'designation' => 'RETINOGRAPHIE', 'active' => '1'),
            array('id' => '80', 'code' => 'NO0000000080', 'abreviation' => 'SALLE VASCULAIRE', 'designation' => 'SALLE VASCULAIRE', 'active' => '1'),
            array('id' => '81', 'code' => 'NO0000000081', 'abreviation' => 'SCIE A PLATRE ', 'designation' => 'SCIE A PLATRE ', 'active' => '1'),
            array('id' => '82', 'code' => 'NO0000000082', 'abreviation' => 'STATION PERFUSION', 'designation' => 'STATION PERFUSION', 'active' => '1'),
            array('id' => '83', 'code' => 'NO0000000083', 'abreviation' => 'STERILISATEUR A LA VAPEUR ', 'designation' => 'STERILISATEUR A LA VAPEUR ', 'active' => '1'),
            array('id' => '84', 'code' => 'NO0000000084', 'abreviation' => 'STERILISATEUR de bibron ', 'designation' => 'STERILISATEUR de bibron ', 'active' => '1'),
            array('id' => '85', 'code' => 'NO0000000085', 'abreviation' => 'STERILISATEUR A OXYDE D\'hytéléne ', 'designation' => 'STERILISATEUR A OXYDE D\'hytéléne ', 'active' => '1'),
            array('id' => '86', 'code' => 'NO0000000086', 'abreviation' => 'STIMULATEUR DOUBLE CHAMBRE EXTERNE', 'designation' => 'STIMULATEUR DOUBLE CHAMBRE EXTERNE', 'active' => '1'),
            array('id' => '87', 'code' => 'NO0000000087', 'abreviation' => 'STIMULATEUR EXTERNE SIMPLE CHAMBRE ', 'designation' => 'STIMULATEUR EXTERNE SIMPLE CHAMBRE ', 'active' => '1'),
            array('id' => '88', 'code' => 'NO0000000088', 'abreviation' => 'SYSTEME MANOMETRIE PH METRIE', 'designation' => 'SYSTEME MANOMETRIE PH METRIE', 'active' => '1'),
            array('id' => '89', 'code' => 'NO0000000089', 'abreviation' => 'SYSTEME VIDEO-CAPSULE', 'designation' => 'SYSTEME VIDEO-CAPSULE', 'active' => '1'),
            array('id' => '90', 'code' => 'NO0000000090', 'abreviation' => 'TABLE A INSTRUMENT', 'designation' => 'TABLE A INSTRUMENT', 'active' => '1'),
            array('id' => '91', 'code' => 'NO0000000091', 'abreviation' => 'TABLE ACCOUCHEMENT', 'designation' => 'TABLE ACCOUCHEMENT', 'active' => '1'),
            array('id' => '92', 'code' => 'NO0000000092', 'abreviation' => 'TABLE CHAUFFANTE', 'designation' => 'TABLE CHAUFFANTE', 'active' => '1'),
            array('id' => '93', 'code' => 'NO0000000093', 'abreviation' => 'TABLE D\'ACCOUCHEMENT ELECTRIQUE', 'designation' => 'TABLE D\'ACCOUCHEMENT ELECTRIQUE', 'active' => '1'),
            array('id' => '94', 'code' => 'NO0000000094', 'abreviation' => 'TABLE DE MACROSCOPIE', 'designation' => 'TABLE DE MACROSCOPIE', 'active' => '1'),
            array('id' => '95', 'code' => 'NO0000000095', 'abreviation' => 'TABLE DE REANIMATION NEONATALE', 'designation' => 'TABLE DE REANIMATION NEONATALE', 'active' => '1'),
            array('id' => '96', 'code' => 'NO0000000096', 'abreviation' => 'TABLE DE VIRTICALISATION ROBOTISE', 'designation' => 'TABLE DE VIRTICALISATION ROBOTISE', 'active' => '1'),
            array('id' => '97', 'code' => 'NO0000000097', 'abreviation' => 'TABLE  A INSTRUMENT', 'designation' => 'TABLE  A INSTRUMENT', 'active' => '1'),
            array('id' => '98', 'code' => 'NO0000000098', 'abreviation' => 'TABLE MAYO', 'designation' => 'TABLE MAYO', 'active' => '1'),
            array('id' => '99', 'code' => 'NO0000000099', 'abreviation' => 'TABLE OPERATION', 'designation' => 'TABLE OPERATION', 'active' => '1'),
            array('id' => '100', 'code' => 'NO00000000100', 'abreviation' => 'TABLE VERTICALISATION°', 'designation' => 'TABLE VERTICALISATION°', 'active' => '1'),
            array('id' => '101', 'code' => 'NO00000000101', 'abreviation' => 'TABOURET AVEC DOSSIE', 'designation' => 'TABOURET AVEC DOSSIE', 'active' => '1'),
            array('id' => '102', 'code' => 'NO00000000102', 'abreviation' => 'TABOURET SANS DOSSIER', 'designation' => 'TABOURET SANS DOSSIER', 'active' => '1'),
            array('id' => '103', 'code' => 'NO00000000103', 'abreviation' => 'TESTEUR ETANCHEITE ', 'designation' => 'TESTEUR ETANCHEITE ', 'active' => '1'),
            array('id' => '104', 'code' => 'NO00000000104', 'abreviation' => 'THERMOMETRE FRONTAL', 'designation' => 'THERMOMETRE FRONTAL', 'active' => '1'),
            array('id' => '105', 'code' => 'NO00000000105', 'abreviation' => 'THERMOMETRE HYGROMETRE', 'designation' => 'THERMOMETRE HYGROMETRE', 'active' => '1'),
            array('id' => '106', 'code' => 'NO00000000106', 'abreviation' => 'THERMOSOUDEUSE', 'designation' => 'THERMOSOUDEUSE', 'active' => '1'),
            array('id' => '107', 'code' => 'NO00000000107', 'abreviation' => 'TIRE LAIT ELECTRIQUE', 'designation' => 'TIRE LAIT ELECTRIQUE', 'active' => '1'),
            array('id' => '108', 'code' => 'NO00000000108', 'abreviation' => 'TONOMETRE A AIR PULSE', 'designation' => 'TONOMETRE A AIR PULSE', 'active' => '1'),
            array('id' => '109', 'code' => 'NO00000000109', 'abreviation' => 'UNITE CONSULTATION OPHTALMO', 'designation' => 'UNITE CONSULTATION OPHTALMO', 'active' => '1'),
            array('id' => '110', 'code' => 'NO00000000110', 'abreviation' => 'URETERO NEPHRO FIBROSCOP', 'designation' => 'URETERO NEPHRO FIBROSCOP', 'active' => '1'),
            array('id' => '111', 'code' => 'NO00000000111', 'abreviation' => 'VIDEO BRONCHOSCOPE ', 'designation' => 'VIDEO BRONCHOSCOPE ', 'active' => '1'),
            array('id' => '112', 'code' => 'NO00000000112', 'abreviation' => 'VIDEO COLONOSCOPE', 'designation' => 'VIDEO COLONOSCOPE', 'active' => '1'),
            array('id' => '113', 'code' => 'NO00000000113', 'abreviation' => 'VIDEO DUODENOSCOPE', 'designation' => 'VIDEO DUODENOSCOPE', 'active' => '1'),
            array('id' => '114', 'code' => 'NO00000000114', 'abreviation' => 'ECHO-ENDOSCOPE', 'designation' => 'ECHO-ENDOSCOPE', 'active' => '1'),
            array('id' => '115', 'code' => 'NO00000000115', 'abreviation' => 'ECHOGRAPHE CARDIO-VASCULAIRE', 'designation' => 'ECHOGRAPHE CARDIO-VASCULAIRE', 'active' => '1'),
            array('id' => '116', 'code' => 'NO00000000116', 'abreviation' => 'ECHOGRAPHE GENERAL', 'designation' => 'ECHOGRAPHE GENERAL', 'active' => '1'),
            array('id' => '117', 'code' => 'NO00000000117', 'abreviation' => 'SYSTÈME D\'IMAGERIE PAR RESONANCE MAGNETIQUE', 'designation' => 'SYSTÈME D\'IMAGERIE PAR RESONANCE MAGNETIQUE', 'active' => '1'),
            array('id' => '118', 'code' => 'NO00000000118', 'abreviation' => 'ONDULEUR', 'designation' => 'ONDULEUR', 'active' => '1'),
            array('id' => '119', 'code' => 'NO00000000119', 'abreviation' => 'OSTEODENSITOMETRI', 'designation' => 'OSTEODENSITOMETRI', 'active' => '1'),
            array('id' => '120', 'code' => 'NO00000000120', 'abreviation' => 'RADIO MOBILE', 'designation' => 'RADIO MOBILE', 'active' => '1'),
            array('id' => '121', 'code' => 'NO00000000121', 'abreviation' => 'SALLE RADIOGRAPHIE STANDARD DR', 'designation' => 'SALLE RADIOGRAPHIE STANDARD DR', 'active' => '1'),
            array('id' => '122', 'code' => 'NO00000000122', 'abreviation' => 'SYSTEME NUMERISATION CR', 'designation' => 'SYSTEME NUMERISATION CR', 'active' => '1'),
            array('id' => '123', 'code' => 'NO00000000123', 'abreviation' => 'CISEAU METZENBAUM', 'designation' => 'CISEAU METZENBAUM', 'active' => '1'),
            array('id' => '124', 'code' => 'NO00000000124', 'abreviation' => 'CUPULE ', 'designation' => 'CUPULE ', 'active' => '1'),
            array('id' => '125', 'code' => 'NO00000000125', 'abreviation' => 'LAME DE SCIE à platre', 'designation' => 'LAME DE SCIE à platre', 'active' => '1'),
            array('id' => '126', 'code' => 'NO00000000126', 'abreviation' => 'MECHE', 'designation' => 'MECHE', 'active' => '1'),
            array('id' => '127', 'code' => 'NO00000000127', 'abreviation' => 'PINCE VASCULAIR', 'designation' => 'PINCE VASCULAIR', 'active' => '1'),
            array('id' => '128', 'code' => 'NO00000000128', 'abreviation' => 'PINCETTE DISSEQUER', 'designation' => 'PINCETTE DISSEQUER', 'active' => '1')
        );


        foreach ($p_nomenclature_standard as $key => $value) {
            $manager->getConnection()->insert("p_nomenclature_standard", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }





        $compagnie = array(
            array('id' => '8', 'nom' => 'Société 1', 'description' => 'Notre présence dans les 5 continents nous efforce à maintenir un niveau de production et une qualité irréprochable.', 'logo' => NULL, 'capital' => '100000000', 'adresse' => '1 RUE DES TROIS FRERES - 75018 PARIS', 'tel1' => '06.61.22.22.22', 'tel2' => '06.61.22.22.23', 'fax' => '05.22.22.22.22', 'email1' => 'société1@gmail.com', 'email2' => 'société1-2@gmail.com', 'date_creation' => '2020-05-11', 'nombre_employe' => '600', 'abreviation' => 'abr', 'original_name' => NULL, 'mime_type' => NULL, 'image' => NULL, 'image_size' => NULL, 'updated_at' => NULL)
        );


        foreach ($compagnie as $key => $value) {
            $manager->getConnection()->insert("compagnie", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }





        $p_forme = array(
            array('id' => '1', 'code' => 'FRM0000000001', 'designation' => 'INJECTABLE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '2', 'code' => 'FRM0000000002', 'designation' => 'SOLUTION POUR PERFUSION ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '3', 'code' => 'FRM0000000003', 'designation' => 'COMPRIME', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '4', 'code' => 'FRM0000000004', 'designation' => 'POUDRE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '5', 'code' => 'FRM0000000005', 'designation' => 'SOLUTION', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '6', 'code' => 'FRM0000000006', 'designation' => 'SACHET', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '7', 'code' => 'FRM0000000007', 'designation' => 'GELULE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '8', 'code' => 'FRM0000000008', 'designation' => 'SPRAY', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '9', 'code' => 'FRM0000000009', 'designation' => 'GEL', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '10', 'code' => 'FRM00000000010', 'designation' => 'POMMADE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '11', 'code' => 'FRM00000000011', 'designation' => 'COLLYRE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '12', 'code' => 'FRM00000000012', 'designation' => 'POMMADE OPHTALMIQUE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '13', 'code' => 'FRM00000000013', 'designation' => 'LAIT ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '14', 'code' => 'FRM00000000014', 'designation' => 'SOLUTION RECTALE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '15', 'code' => 'FRM00000000015', 'designation' => 'COMPRIME EFFERVESCENT', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '16', 'code' => 'FRM00000000016', 'designation' => 'CREME', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '17', 'code' => 'FRM00000000017', 'designation' => 'SIROP', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '18', 'code' => 'FRM00000000018', 'designation' => 'PANSEMENTS MEDICAMENTEUX', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '19', 'code' => 'FRM00000000019', 'designation' => 'VACCIN', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '20', 'code' => 'FRM00000000020', 'designation' => 'SOLUTION BUVABLE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '21', 'code' => 'FRM00000000021', 'designation' => 'GOUTTES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '22', 'code' => 'FRM00000000022', 'designation' => 'SUPPOSITOIRE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '23', 'code' => 'FRM00000000023', 'designation' => 'POMMADE DERMIQUE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '24', 'code' => 'FRM00000000024', 'designation' => 'BAIN DE BOUCHE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '25', 'code' => 'FRM00000000025', 'designation' => 'SUSPENSION BUVABLE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '26', 'code' => 'FRM00000000026', 'designation' => 'GOUTTE BUVABLE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '27', 'code' => 'FRM00000000027', 'designation' => 'OVULE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '28', 'code' => 'FRM00000000028', 'designation' => 'STRADER', 'abreviation' => NULL, 'active' => '1')
        );




        foreach ($p_forme as $key => $value) {
            $manager->getConnection()->insert("p_forme", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }




        $p_presentation = array(
            array('id' => '1', 'code' => 'PRE0000000001', 'designation' => 'BOITE DE 1 FLACON', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '2', 'code' => 'PRE0000000002', 'designation' => 'BOITE DE 1 FLACON DE 100 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '3', 'code' => 'PRE0000000003', 'designation' => 'POCHE DE 500 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '4', 'code' => 'PRE0000000004', 'designation' => 'BOITE DE 30', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '5', 'code' => 'PRE0000000005', 'designation' => 'BOITE DE 10 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '6', 'code' => 'PRE0000000006', 'designation' => 'POCHE DE 100 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '7', 'code' => 'PRE0000000007', 'designation' => 'BOITE DE 6 SERINGUES PRE-REMPLIES ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '8', 'code' => 'PRE0000000008', 'designation' => 'CARTOUCHE DE 750 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '9', 'code' => 'PRE0000000009', 'designation' => 'BOITE DE 10 FLACONS', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '10', 'code' => 'PRE00000000010', 'designation' => 'BOITE DE 1 SACHET', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '11', 'code' => 'PRE00000000011', 'designation' => 'BOITE DE 5 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '12', 'code' => 'PRE00000000012', 'designation' => 'BOITE DE 6 SERINGUES PREREMPLIES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '13', 'code' => 'PRE00000000013', 'designation' => 'BOITE DE 2 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '14', 'code' => 'PRE00000000014', 'designation' => 'BOITE DE 1 FLACON DE 5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '15', 'code' => 'PRE00000000015', 'designation' => 'BOITE DE 120', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '16', 'code' => 'PRE00000000016', 'designation' => 'FLACON DE 125 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '17', 'code' => 'PRE00000000017', 'designation' => 'POCHE DE 250 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '18', 'code' => 'PRE00000000018', 'designation' => 'BOITE DE 20 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '19', 'code' => 'PRE00000000019', 'designation' => 'BOITE DE 5', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '20', 'code' => 'PRE00000000020', 'designation' => 'BOITE DE 1 FLACON DE 250ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '21', 'code' => 'PRE00000000021', 'designation' => 'BIDON DE 5L', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '22', 'code' => 'PRE00000000022', 'designation' => 'BOITE DE 70', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '23', 'code' => 'PRE00000000023', 'designation' => 'BOITE DE 01 INJECTION', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '24', 'code' => 'PRE00000000024', 'designation' => 'BOITE DE 10', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '25', 'code' => 'PRE00000000025', 'designation' => 'BOITE DE 12', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '26', 'code' => 'PRE00000000026', 'designation' => 'BOITE DE 28', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '27', 'code' => 'PRE00000000027', 'designation' => 'BOITE DE 1 FLACON - AMPOULE DE 4 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '28', 'code' => 'PRE00000000028', 'designation' => 'BOITE DE 5 AMPOULE DE 2 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '29', 'code' => 'PRE00000000029', 'designation' => 'BOITE DE 100', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '30', 'code' => 'PRE00000000030', 'designation' => 'FLACON DE 500 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '31', 'code' => 'PRE00000000031', 'designation' => 'SACHET DE 2L', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '32', 'code' => 'PRE00000000032', 'designation' => 'FLACON DE 60 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '33', 'code' => 'PRE00000000033', 'designation' => 'BOITE DE 100 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '34', 'code' => 'PRE00000000034', 'designation' => 'BOITE DE 03 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '35', 'code' => 'PRE00000000035', 'designation' => 'BOITE DE 4 SERINGUES PRE-REMPLIES ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '36', 'code' => 'PRE00000000036', 'designation' => 'BOITE DE 2 SERINGUES PREREMPLIES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '37', 'code' => 'PRE00000000037', 'designation' => 'BOITE DE 02 FLACON', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '38', 'code' => 'PRE00000000038', 'designation' => 'BOITE DE 6 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '39', 'code' => 'PRE00000000039', 'designation' => 'FLACON DE 100 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '40', 'code' => 'PRE00000000040', 'designation' => 'POCHE DE 1 L', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '41', 'code' => 'PRE00000000041', 'designation' => ' ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '42', 'code' => 'PRE00000000042', 'designation' => 'BOITE DE 90', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '43', 'code' => 'PRE00000000043', 'designation' => 'BOITE DE 5 CARTOUCHES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '44', 'code' => 'PRE00000000044', 'designation' => 'BOITE DE 100 AMPOULE DE 1 ML ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '45', 'code' => 'PRE00000000045', 'designation' => 'BOITE DE 06 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '46', 'code' => 'PRE00000000046', 'designation' => 'POCHE DE 3 L', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '47', 'code' => 'PRE00000000047', 'designation' => 'BOITE DE 20 FLACONS DE 2 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '48', 'code' => 'PRE00000000048', 'designation' => 'TUBE DE 30 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '49', 'code' => 'PRE00000000049', 'designation' => 'BOITE DE 56 ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '50', 'code' => 'PRE00000000050', 'designation' => 'FLACON DE 250 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '51', 'code' => 'PRE00000000051', 'designation' => 'BOITE DE 60', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '52', 'code' => 'PRE00000000052', 'designation' => 'FLACON DE 7,5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '53', 'code' => 'PRE00000000053', 'designation' => 'BOITE DE 50 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '54', 'code' => 'PRE00000000054', 'designation' => 'BOITE DE 40', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '55', 'code' => 'PRE00000000055', 'designation' => 'BOITE DE 1 FLACON DE 10 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '56', 'code' => 'PRE00000000056', 'designation' => 'BOITE DE 50 FLACONS DE 4 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '57', 'code' => 'PRE00000000057', 'designation' => 'BOITE DE 5 SERINGUES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '58', 'code' => 'PRE00000000058', 'designation' => 'BOITE DE 24', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '59', 'code' => 'PRE00000000059', 'designation' => 'BOITE DE 14', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '60', 'code' => 'PRE00000000060', 'designation' => 'BOITE DE 5 CARTOUCHE DE 3 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '61', 'code' => 'PRE00000000061', 'designation' => 'BOITE DE 20 FLACONS DE 4 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '62', 'code' => 'PRE00000000062', 'designation' => 'FLACON DE 5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '63', 'code' => 'PRE00000000063', 'designation' => 'BOITE DE 15', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '64', 'code' => 'PRE00000000064', 'designation' => 'FLACON DE 120 DOSES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '65', 'code' => 'PRE00000000065', 'designation' => 'TUBE DE 15 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '66', 'code' => 'PRE00000000066', 'designation' => 'BOITE DE 4', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '67', 'code' => 'PRE00000000067', 'designation' => 'TUBE DE 10 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '68', 'code' => 'PRE00000000068', 'designation' => 'POT DE 400 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '69', 'code' => 'PRE00000000069', 'designation' => 'FLACON DE 10 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '70', 'code' => 'PRE00000000070', 'designation' => 'FLACON DE 60 DOSES ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '71', 'code' => 'PRE00000000071', 'designation' => 'BOITE 6 MICROLAVEMENTS', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '72', 'code' => 'PRE00000000072', 'designation' => 'BOITE DE 04', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '73', 'code' => 'PRE00000000073', 'designation' => 'BOITE DE 20', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '74', 'code' => 'PRE00000000074', 'designation' => 'BOITE DE 16', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '75', 'code' => 'PRE00000000075', 'designation' => 'TUBE DE 93 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '76', 'code' => 'PRE00000000076', 'designation' => 'FLACON DE 10ML ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '77', 'code' => 'PRE00000000077', 'designation' => 'BOITE DE 15 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '78', 'code' => 'PRE00000000078', 'designation' => 'BOITE DE 05 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '79', 'code' => 'PRE00000000079', 'designation' => 'BOITE DE 12 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '80', 'code' => 'PRE00000000080', 'designation' => 'TUBE DE 5 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '81', 'code' => 'PRE00000000081', 'designation' => 'TUBE DE 40 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '82', 'code' => 'PRE00000000082', 'designation' => 'FLACON DE 150 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '83', 'code' => 'PRE00000000083', 'designation' => 'SACHET DE 10', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '84', 'code' => 'PRE00000000084', 'designation' => 'FLACON DE 200 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '85', 'code' => 'PRE00000000085', 'designation' => 'BOITE DE 10 FLACONS DE 5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '86', 'code' => 'PRE00000000086', 'designation' => 'TUBE DE 200 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '87', 'code' => 'PRE00000000087', 'designation' => 'BOITE 12 DOSE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '88', 'code' => 'PRE00000000088', 'designation' => 'BOITE DE 7', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '89', 'code' => 'PRE00000000089', 'designation' => 'TUBE DE 45 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '90', 'code' => 'PRE00000000090', 'designation' => 'FLACON DE 125 ML CARTON DE 12', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '91', 'code' => 'PRE00000000091', 'designation' => 'FLACON DE 130 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '92', 'code' => 'PRE00000000092', 'designation' => 'POT DE 10 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '93', 'code' => 'PRE00000000093', 'designation' => 'FLACON DE 260 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '94', 'code' => 'PRE00000000094', 'designation' => 'FLACON DE 30 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '95', 'code' => 'PRE00000000095', 'designation' => 'BOITE DE 18', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '96', 'code' => 'PRE00000000096', 'designation' => 'BOITE DE 8', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '97', 'code' => 'PRE00000000097', 'designation' => 'BOITE DE 12 INJECTIONS', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '98', 'code' => 'PRE00000000098', 'designation' => 'TUBE DE 60 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '99', 'code' => 'PRE00000000099', 'designation' => 'BOITE DE 06 FLACONS', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '100', 'code' => 'PRE000000000100', 'designation' => 'FLACON', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '101', 'code' => 'PRE000000000101', 'designation' => 'BOITE 10 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '102', 'code' => 'PRE000000000102', 'designation' => 'TUBE DE 50 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '103', 'code' => 'PRE000000000103', 'designation' => 'BOITE DE 32', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '104', 'code' => 'PRE000000000104', 'designation' => 'BOITE DE 50', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '105', 'code' => 'PRE000000000105', 'designation' => 'FLACON DE 120 PULVIRESATION', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '106', 'code' => 'PRE000000000106', 'designation' => 'BOITE DE 3', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '107', 'code' => 'PRE000000000107', 'designation' => 'BOITE DE 6 RECIPIENTS UNIDOSES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '108', 'code' => 'PRE000000000108', 'designation' => 'FLACON DE 3 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '109', 'code' => 'PRE000000000109', 'designation' => 'BOITE DE 84', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '110', 'code' => 'PRE000000000110', 'designation' => 'FLACON 130 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '111', 'code' => 'PRE000000000111', 'designation' => 'BOITE DE 25', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '112', 'code' => 'PRE000000000112', 'designation' => 'TUBE DE 3,5 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '113', 'code' => 'PRE000000000113', 'designation' => 'TUBE DE 3 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '114', 'code' => 'PRE000000000114', 'designation' => 'TUBE DE 100 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '115', 'code' => 'PRE000000000115', 'designation' => 'BOITE DE 4 AMPOULES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '116', 'code' => 'PRE000000000116', 'designation' => 'BOITE DE 08', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '117', 'code' => 'PRE000000000117', 'designation' => 'BOITE DE 2', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '118', 'code' => 'PRE000000000118', 'designation' => 'BOITE DE 1 FLACON DE 55 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '119', 'code' => 'PRE000000000119', 'designation' => 'BOITE DE 03', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '120', 'code' => 'PRE000000000120', 'designation' => 'FLACON DE 70 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '121', 'code' => 'PRE000000000121', 'designation' => 'BOITE DE 1 FLACON DE 15 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '122', 'code' => 'PRE000000000122', 'designation' => 'FLACON DE 120 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '123', 'code' => 'PRE000000000123', 'designation' => 'BOITE DE 180', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '124', 'code' => 'PRE000000000124', 'designation' => 'BOITE DE 80 ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '125', 'code' => 'PRE000000000125', 'designation' => 'TUBE DE 25 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '126', 'code' => 'PRE000000000126', 'designation' => 'BOITE DE 6', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '127', 'code' => 'PRE000000000127', 'designation' => 'BOITE DE 1 FLACON DE 0,5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '128', 'code' => 'PRE000000000128', 'designation' => 'FLACON DE 35 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '129', 'code' => 'PRE000000000129', 'designation' => 'TUBE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '130', 'code' => 'PRE000000000130', 'designation' => 'FLACON DE 300 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '131', 'code' => 'PRE000000000131', 'designation' => 'POT DE 454 G', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '132', 'code' => 'PRE000000000132', 'designation' => 'FLACON DE 90 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '133', 'code' => 'PRE000000000133', 'designation' => 'FLACON DE 20 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '134', 'code' => 'PRE000000000134', 'designation' => 'TUBE DE 400 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '135', 'code' => 'PRE000000000135', 'designation' => 'FLACON DE 2,5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '136', 'code' => 'PRE000000000136', 'designation' => 'TUBE DE 3 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '137', 'code' => 'PRE000000000137', 'designation' => 'FLACON DE 18 ML / 300 DOSES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '138', 'code' => 'PRE000000000138', 'designation' => 'FLACON DE 100 DOSES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '139', 'code' => 'PRE000000000139', 'designation' => 'BOITE DE 10 PATCH', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '140', 'code' => 'PRE000000000140', 'designation' => 'BOITE DE 20 RECIPIENTS UNIDOSE', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '141', 'code' => 'PRE000000000141', 'designation' => 'BOITE DE 1 SERINGUE PREREMPLIE DE 0,5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '142', 'code' => 'PRE000000000142', 'designation' => 'BOITE DE 10 AMPOULES DE 2 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '143', 'code' => 'PRE000000000143', 'designation' => 'BOITE DE 1 AMPOULE DE 1,5 ML ', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '144', 'code' => 'PRE000000000144', 'designation' => 'FLACON 2,5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '145', 'code' => 'PRE000000000145', 'designation' => 'FLACON DE 152,5 ML', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '146', 'code' => 'PRE000000000146', 'designation' => 'BOITE DE 2 SERINGUES', 'abreviation' => NULL, 'active' => '1'),
            array('id' => '147', 'code' => 'PRE000000000147', 'designation' => 'BOITE DE 05', 'abreviation' => NULL, 'active' => '1')
        );


        foreach ($p_presentation as $key => $value) {
            $manager->getConnection()->insert("p_presentation", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }


        /*
         * parametrage marche   
         */

        $pmarche = array(
            array('id' => '1', 'user_created_id' => null, 'user_updated_id' => null, 'designation' => 'MARCHE 1', 'description' => 'MARCHE 1 DESCRIPTION', 'created' => '2020-05-13 17:47:06', 'updated' => '2020-11-18 11:06:40', 'description_detail' => NULL, 'date_debut' => '2020-03-02', 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'MAR000000001', 'active' => '1', 'cloturer' => '0', 'facturer' => NULL, 'responsable_id' => NULL, 'code' => NULL),
            array('id' => '2', 'user_created_id' => null, 'user_updated_id' => null, 'designation' => 'MARCHE 2', 'description' => 'MARCHE 2 DESCRIPTION', 'created' => '2020-05-13 17:47:47', 'updated' => '2020-12-04 11:57:58', 'description_detail' => NULL, 'date_debut' => '2020-03-02', 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'MAR000000002', 'active' => '1', 'cloturer' => '0', 'facturer' => NULL, 'responsable_id' => NULL, 'code' => NULL),
            array('id' => '3', 'user_created_id' => null, 'user_updated_id' => null, 'designation' => 'MARCHE 3', 'description' => 'MARCHE 3 DESCRIPTION', 'created' => '2020-05-28 16:51:48', 'updated' => '2020-11-25 09:13:35', 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'MAR000000003', 'active' => '1', 'cloturer' => '0', 'facturer' => NULL, 'responsable_id' => NULL, 'code' => NULL)
        );

        foreach ($pmarche as $key => $value) {
            $manager->getConnection()->insert("pmarche", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        /*
         * parametrage sous marche   
         */

        $pmarche_sous = array(
            array('id' => '1', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'marche_id' => '1', 'designation' => 'MARCHE 1 SOUS-MARCHE 1', 'description' => 'MARCHE 1 SOUS-MARCHE 1', 'created' => NULL, 'updated' => NULL, 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'SMR000000001', 'active' => '1'),
            array('id' => '2', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'marche_id' => '1', 'designation' => 'MARCHE 1 SOUS-MARCHE 2', 'description' => 'MARCHE 1 SOUS-MARCHE 2', 'created' => NULL, 'updated' => NULL, 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'SMR000000002', 'active' => '1'),
            array('id' => '3', 'user_created_id' => NULL, 'user_updated_id' => NULL, 'marche_id' => '1', 'designation' => 'MARCHE 1 SOUS-MARCHE 3', 'description' => 'MARCHE 1 SOUS-MARCHE 3', 'created' => NULL, 'updated' => NULL, 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'SMR000000003', 'active' => '1')
        );

        foreach ($pmarche_sous as $key => $value) {
            $manager->getConnection()->insert("pmarche_sous", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }

        /*
         * parametrage projet    
         */

        $u_p_projet = array(
            array('id' => '1', 'user_created' => null, 'user_updated' => NULL, 'code' => 'PR-000000001', 'intitule' => 'PROJET 1', 'designation' => 'DESIGNATION PROJET 1', 'abreviation' => 'ABREVIATION PROJET 1', 'description' => NULL, 'active' => '1', 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'created' => '2021-03-23 10:03:34', 'updated' => NULL, 'cloturer' => '0', 'facturer' => '0', 'responsable_id' => NULL),
            array('id' => '2', 'user_created' => null, 'user_updated' => NULL, 'code' => 'PR-000000002', 'intitule' => 'PROJET 2', 'designation' => 'DESIGNATION PROJET 2', 'abreviation' => 'ABREVIATION PROJET 2', 'description' => NULL, 'active' => '1', 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'created' => '2021-03-19 14:17:32', 'updated' => '2021-03-19 14:20:53', 'cloturer' => '0', 'facturer' => '0', 'responsable_id' => NULL),
            array('id' => '3', 'user_created' => null, 'user_updated' => NULL, 'code' => 'PR-000000003', 'intitule' => 'PROJET 3', 'designation' => 'DESIGNATION PROJET 3', 'abreviation' => 'ABREVIATION PROJET 3', 'description' => NULL, 'active' => '1', 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'created' => '2021-03-03 10:08:41', 'updated' => NULL, 'cloturer' => '0', 'facturer' => '0', 'responsable_id' => NULL)
        );

        foreach ($u_p_projet as $key => $value) {
            $manager->getConnection()->insert("u_p_projet", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }




        $pprojet_sous = array(
            array('id' => '1', 'user_created_id' => null, 'user_updated_id' => NULL, 'projet_id' => '1', 'designation' => 'PROJET 1 SOUS PROJET 1', 'description' => NULL, 'created' => '2021-01-22 17:17:11', 'updated' => NULL, 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'SPR000000001', 'active' => '1'),
            array('id' => '2', 'user_created_id' => null, 'user_updated_id' => NULL, 'projet_id' => '1', 'designation' => 'PROJET 1 SOUS PROJET 2', 'description' => NULL, 'created' => '2021-01-22 17:17:11', 'updated' => NULL, 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'SPR000000002', 'active' => '1'),
            array('id' => '3', 'user_created_id' => null, 'user_updated_id' => NULL, 'projet_id' => '1', 'designation' => 'PROJET 1 SOUS PROJET 3', 'description' => NULL, 'created' => '2021-01-22 17:17:11', 'updated' => NULL, 'description_detail' => NULL, 'date_debut' => NULL, 'date_fin' => NULL, 'montant' => NULL, 'reference' => 'SPR000000003', 'active' => '1')
        );
        
        foreach ($pprojet_sous as $key => $value) {
            $manager->getConnection()->insert("pprojet_sous", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }
        




        /* `hostji5_u3s-erp-v2`.`p_global_param` */
        $p_global_param = array(
            array('id' => '1', 'active' => '1', 'designation' => 'Format papier', 'abreviation' => 'format papier', 'code' => '', 'prefix' => '_fp'),
            array('id' => '2', 'active' => '1', 'designation' => 'Format eTicket', 'abreviation' => 'Format eTicket', 'code' => '', 'prefix' => '_fe'),
            array('id' => '3', 'active' => '1', 'designation' => 'Format type', 'abreviation' => 'format type', 'code' => '', 'prefix' => '_ft'),
            array('id' => '4', 'active' => '1', 'designation' => 'SITUATION FAMILLIALE', 'abreviation' => 'SITUATION FAMILLIALE', 'code' => '', 'prefix' => '_sf'),
            array('id' => '5', 'active' => '1', 'designation' => 'TYPE DE CONTRAT ', 'abreviation' => 'TYPE DE CONTRAT ', 'code' => '', 'prefix' => '_tc'),
            array('id' => '6', 'active' => '1', 'designation' => 'FONT', 'abreviation' => 'Font', 'code' => '', 'prefix' => '_font'),
            array('id' => '7', 'active' => '1', 'designation' => 'theme 1', 'abreviation' => 'theme1', 'code' => 'theme_1', 'prefix' => '_th1'),
            array('id' => '8', 'active' => '1', 'designation' => 'theme 2', 'abreviation' => 'theme2', 'code' => 'theme_2', 'prefix' => '_th2'),
            array('id' => '9', 'active' => '1', 'designation' => 'theme 3', 'abreviation' => 'theme3', 'code' => 'theme_3', 'prefix' => '_th3'),
            array('id' => '10', 'active' => '1', 'designation' => 'theme 4', 'abreviation' => 'theme4', 'code' => 'theme_4', 'prefix' => '_th4'),
            array('id' => '11', 'active' => '1', 'designation' => 'theme 5', 'abreviation' => 'theme5', 'code' => 'theme_5', 'prefix' => '_th5'),
            array('id' => '12', 'active' => '1', 'designation' => 'Paie /cnss', 'abreviation' => 'Paie / cnss', 'code' => '', 'prefix' => '_paie'),
            array('id' => '13', 'active' => '1', 'designation' => 'Facture parvenue', 'abreviation' => 'FP', 'code' => '', 'prefix' => '_facP')
        );


        foreach ($p_global_param as $key => $value) {
            $manager->getConnection()->insert("p_global_param", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }





        $pglobal_param_det = array(
            array('id' => '1', 'cab_id' => '1', 'k' => 'A5', 'v' => 'Format A5', 'active' => '1'),
            array('id' => '2', 'cab_id' => '1', 'k' => 'A4', 'v' => 'Format A4', 'active' => '1'),
            array('id' => '3', 'cab_id' => '1', 'k' => 'A3', 'v' => 'Format A3', 'active' => '1'),
            array('id' => '4', 'cab_id' => '1', 'k' => 'A2', 'v' => 'Format A2', 'active' => '1'),
            array('id' => '5', 'cab_id' => '1', 'k' => 'A1', 'v' => 'Format A1', 'active' => '1'),
            array('id' => '6', 'cab_id' => '2', 'k' => '5', 'v' => '5 cm', 'active' => '1'),
            array('id' => '7', 'cab_id' => '2', 'k' => '10', 'v' => '10 cm', 'active' => '1'),
            array('id' => '8', 'cab_id' => '2', 'k' => '20', 'v' => '20 cm', 'active' => '1'),
            array('id' => '9', 'cab_id' => '2', 'k' => '30', 'v' => '30 cm', 'active' => '1'),
            array('id' => '10', 'cab_id' => '1', 'k' => 'A0', 'v' => 'Format A0', 'active' => '1'),
            array('id' => '11', 'cab_id' => '1', 'k' => 'A6', 'v' => 'Format A6', 'active' => '1'),
            array('id' => '12', 'cab_id' => '3', 'k' => 'paysage', 'v' => 'Paysage', 'active' => '1'),
            array('id' => '13', 'cab_id' => '3', 'k' => 'portrait', 'v' => 'Portrait', 'active' => '1'),
            array('id' => '14', 'cab_id' => '4', 'k' => 'célibataire', 'v' => 'célibataire', 'active' => '1'),
            array('id' => '15', 'cab_id' => '4', 'k' => 'Marié', 'v' => 'Marié', 'active' => '1'),
            array('id' => '16', 'cab_id' => '4', 'k' => 'Divorcé', 'v' => 'Divorcé', 'active' => '1'),
            array('id' => '17', 'cab_id' => '5', 'k' => 'CDI', 'v' => 'CDI', 'active' => '1'),
            array('id' => '18', 'cab_id' => '5', 'k' => 'CDD', 'v' => 'CDD', 'active' => '1'),
            array('id' => '19', 'cab_id' => '6', 'k' => 'brush script mt', 'v' => 'default', 'active' => '1'),
            array('id' => '20', 'cab_id' => '6', 'k' => 'dejavu serif', 'v' => '', 'active' => '1'),
            array('id' => '21', 'cab_id' => '6', 'k' => 'courierbold', 'v' => '', 'active' => '1'),
            array('id' => '22', 'cab_id' => '6', 'k' => 'sans-serif', 'v' => '', 'active' => '1'),
            array('id' => '23', 'cab_id' => '6', 'k' => 'times', 'v' => '', 'active' => '1'),
            array('id' => '24', 'cab_id' => '6', 'k' => 'times-roman', 'v' => '', 'active' => '1'),
            array('id' => '25', 'cab_id' => '6', 'k' => 'courier', 'v' => '', 'active' => '1'),
            array('id' => '26', 'cab_id' => '6', 'k' => 'helvetica', 'v' => '', 'active' => '1'),
            array('id' => '27', 'cab_id' => '6', 'k' => 'zapfdingbats', 'v' => '', 'active' => '1'),
            array('id' => '28', 'cab_id' => '6', 'k' => 'symbol', 'v' => '', 'active' => '1'),
            array('id' => '29', 'cab_id' => '6', 'k' => 'serif', 'v' => '', 'active' => '1'),
            array('id' => '30', 'cab_id' => '6', 'k' => 'monospace', 'v' => '', 'active' => '1'),
            array('id' => '31', 'cab_id' => '6', 'k' => 'fixed', 'v' => '', 'active' => '1'),
            array('id' => '32', 'cab_id' => '6', 'k' => 'dejavu sans', 'v' => '', 'active' => '1'),
            array('id' => '33', 'cab_id' => '6', 'k' => 'dejavu sans monos', 'v' => '', 'active' => '1'),
            array('id' => '34', 'cab_id' => '6', 'k' => 'dejavu serif', 'v' => '', 'active' => '1'),
            array('id' => '35', 'cab_id' => '6', 'k' => 'source sans pro', 'v' => '', 'active' => '1'),
            array('id' => '36', 'cab_id' => '6', 'k' => 'libre barcode 128', 'v' => '', 'active' => '1'),
            array('id' => '37', 'cab_id' => '6', 'k' => 'source code pro', 'v' => '', 'active' => '1'),
            array('id' => '38', 'cab_id' => '6', 'k' => 'roboto', 'v' => '', 'active' => '1'),
            array('id' => '39', 'cab_id' => '6', 'k' => 'open sans', 'v' => '', 'active' => '1'),
            array('id' => '40', 'cab_id' => '6', 'k' => 'courierbold', 'v' => '', 'active' => '1'),
            array('id' => '41', 'cab_id' => '6', 'k' => 'courierbold', 'v' => 'bold', 'active' => '1'),
            array('id' => '42', 'cab_id' => '7', 'k' => 'font', 'v' => 'brush script mt', 'active' => '1'),
            array('id' => '43', 'cab_id' => '7', 'k' => 'font_bold', 'v' => 'courierbold', 'active' => '1'),
            array('id' => '44', 'cab_id' => '8', 'k' => 'font', 'v' => 'brush script mt', 'active' => '1'),
            array('id' => '45', 'cab_id' => '8', 'k' => 'font_bold', 'v' => 'courierbold', 'active' => '1'),
            array('id' => '46', 'cab_id' => '9', 'k' => 'font', 'v' => 'brush script mt', 'active' => '1'),
            array('id' => '47', 'cab_id' => '9', 'k' => 'font_bold', 'v' => 'courierbold', 'active' => '1'),
            array('id' => '48', 'cab_id' => '10', 'k' => 'font', 'v' => 'brush script mt', 'active' => '1'),
            array('id' => '49', 'cab_id' => '10', 'k' => 'font_bold', 'v' => 'courierbold', 'active' => '1'),
            array('id' => '50', 'cab_id' => '11', 'k' => 'font', 'v' => 'brush script mt', 'active' => '1'),
            array('id' => '51', 'cab_id' => '11', 'k' => 'font_bold', 'v' => 'courierbold', 'active' => '1'),
            array('id' => '52', 'cab_id' => '12', 'k' => 'cnss', 'v' => 'cnss', 'active' => '1'),
            array('id' => '53', 'cab_id' => '12', 'k' => 'paie', 'v' => 'paie', 'active' => '1'),
            array('id' => '54', 'cab_id' => '13', 'k' => 'fp', 'v' => 'Facture parvenue', 'active' => '1'),
            array('id' => '55', 'cab_id' => '13', 'k' => 'fnp', 'v' => 'Facture non parvenue', 'active' => '1')
        );


        foreach ($pglobal_param_det as $key => $value) {
            $manager->getConnection()->insert("pglobal_param_det", (array) $value);
            $manager->getConnection()->exec('SET FOREIGN_KEY_CHECKS = 0;');
        }






        $manager->flush();
    }

    public static function getGroups(): array {
        return ['DefaultParamN2'];
    }

}
