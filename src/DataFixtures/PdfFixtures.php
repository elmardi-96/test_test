<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\ConfPdfParameter;
use App\Entity\FormatPapier;
use App\Entity\ConfPdfType;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class PdfFixtures extends Fixture  implements FixtureGroupInterface {

    public function load(ObjectManager $manager) {



        /*         * ****** add config pdf */

        $format = new FormatPapier();
        $format->setAbriviation('A0');
        $format->setItem('A0');
        $format->setValeur('Format A0');
        $format->setNomTable('format');
        $manager->persist($format);

        $format = new FormatPapier();
        $format->setAbriviation('A1');
        $format->setItem('A1');
        $format->setValeur('Format A1');
        $format->setNomTable('format');
        $manager->persist($format);


        $format = new FormatPapier();
        $format->setAbriviation('A2');
        $format->setItem('A2');
        $format->setValeur('Format A2');
        $format->setNomTable('format');
        $manager->persist($format);


        $format = new FormatPapier();
        $format->setAbriviation('A3');
        $format->setItem('A3');
        $format->setValeur('Format A3');
        $format->setNomTable('format');
        $manager->persist($format);


        $format = new FormatPapier();
        $format->setAbriviation('A4');
        $format->setItem('A4');
        $format->setValeur('Format A4');
        $format->setNomTable('format');
        $manager->persist($format);


        $format = new FormatPapier();
        $format->setAbriviation('A5');
        $format->setItem('A5');
        $format->setValeur('Format A5');
        $format->setNomTable('format');
        $manager->persist($format);


        $format = new FormatPapier();
        $format->setAbriviation('A6');
        $format->setItem('A6');
        $format->setValeur('Format A6');
        $format->setNomTable('format');
        $manager->persist($format);

        $format = new FormatPapier();
        $format->setAbriviation('left');
        $format->setItem('left');
        $format->setValeur('left');
        $format->setNomTable('position');
        $manager->persist($format);

        $format = new FormatPapier();
        $format->setAbriviation('center');
        $format->setItem('center');
        $format->setValeur('center');
        $format->setNomTable('position');
        $manager->persist($format);

        $format = new FormatPapier();
        $format->setAbriviation('right');
        $format->setItem('right');
        $format->setValeur('right');
        $format->setNomTable('position');
        $manager->persist($format);



        $type = new ConfPdfType();
        $type->setAbriviation('format_papiers_type');
        $type->setDescription('Format Papiers');
        $manager->persist($type);

        $type1 = new ConfPdfType();
        $type1->setAbriviation('regles_fabrication');
        $type1->setDescription('Règles de fabrication des zones adresses');
        $manager->persist($type1);


        $type2 = new ConfPdfType();
        $type2->setAbriviation('autre');
        $type2->setDescription('autre');
        $manager->persist($type2);




        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('format_papier');
        $para->setParametre('Format Papiers');
        $para->setValeur('A4');
        $para->setValeurType('select');
        $para->setNomTable('format');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('position_logo');
        $para->setParametre('Position Logo');
        $para->setValeur('left');
        $para->setValeurType('select');
        $para->setNomTable('position');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('marge_L');
        $para->setParametre('Marge gauche sur les PDF');
        $para->setValeur('10');
        $para->setValeurType('number');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('marge_R');
        $para->setParametre('Marge droite sur les PDF');
        $para->setValeur('10');
        $para->setValeurType('number');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('marge_T');
        $para->setParametre('Marge haute sur les PDF');
        $para->setValeur('10');
        $para->setValeurType('number');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('marge_B');
        $para->setParametre('Marge bas sur les PDF');
        $para->setValeur('10');
        $para->setValeurType('number');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type2);
        $para->setAbriviation('cacher_tva');
        $para->setParametre('cacher le numéro de TVA intracommunantaire dans les adresse sur les documents ');
        $para->setValeur('checked');
        $para->setValeurType('checkbox');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('RC');
        $para->setParametre('Afficher L\'identifant Professionnel dans les adresses sur les documents - Id.Prof 1 (R.C) ');
        $para->setValeur('checked');
        $para->setValeurType('checkbox');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('patente');
        $para->setParametre('Afficher l\'identifiant professionnel dans les adresses sur les documents - Id.Pof.2 (Patente)');
        $para->setValeur('checked');
        $para->setValeurType('checkbox');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type);
        $para->setAbriviation('cnss');
        $para->setParametre('Afficher l\'identifiant professionnel dans les adresses sur les documents - Id.Prof.4 (C.N.S.S)');
        $para->setValeur('checked');
        $para->setValeurType('checkbox');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type2);
        $para->setAbriviation('cacher_description_produit');
        $para->setParametre('Cacher la description des produits');
        $para->setValeur('checked');
        $para->setValeurType('checkbox');
        $para->setNomTable('');
        $manager->persist($para);


        $para = new ConfPdfParameter();
        $para->setConfPdfType($type2);
        $para->setAbriviation('cacher_reference_produit');
        $para->setParametre('Cacher la référence des produits');
        $para->setValeur('checked');
        $para->setValeurType('checkbox');
        $para->setNomTable('');
        $manager->persist($para);

        $para = new ConfPdfParameter();
        $para->setConfPdfType($type2);
        $para->setAbriviation('ajouter_info_pied_page');
        $para->setParametre('Ajout de plus d\'information dans le pied de page de vos documents PDF , comme l\'adresse de Votre Société ou le nom du directeur (pour compléter les identifiants professionnels , le capital de la société et le numéro de TVA intracommunautaire ) ');
        $para->setValeur('checked');
        $para->setValeurType('checkbox');
        $para->setNomTable('');
        $manager->persist($para);

        $manager->flush(); 
    }

    public static function getGroups(): array {
        return ['PdfFixtures'];
    }

}
