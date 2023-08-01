<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\User;
use App\Entity\DefDevise;
use App\Entity\DefPartenaireTy;
use App\Entity\DefPartenaire;
use App\Entity\PUnite;
use App\Entity\PCompte;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\UsGroupe;
use App\Entity\UsModule;
use App\Entity\UserPoste;
use \App\Entity\UPAffaire;
use \App\Entity\UPService;
use App\Entity\PStatutgrv;
use App\Entity\ConfPdfType;
use App\Entity\FormatPapier;
use App\Entity\PComptemasse;
use App\Entity\PCompteposte;
use App\Entity\UPPartenaire;
use App\Entity\UarticleNature;
use App\Entity\UPPartenaireTy;
use App\Entity\PCompterubrique;
use App\Entity\ConfPdfParameter;
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTFacturefrsdet;
use App\Entity\DefStatut;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\DefModepaiement;
use App\Entity\DefTypeConge ; 

class DefaultParam extends Fixture implements FixtureGroupInterface {

    public const Dossier1 = '1';
    public const Dossier2 = '2';
    public const Dossier3 = '3';
    public const Frs1 = 'frs1';

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager) {


        $faker = Faker\Factory::create('fr_FR');



        /* Insertion des utilisateurs */
        $user1 = new User();
        $user1->setUsername('user1');
        $user1->setEmail('user1@mail.com');
        $user1->setNom('nom user1');
        $user1->setPrenom('prenom user 1');
       // $user1->setRoles(['ROLE_ACHAT']);
        $password = $this->encoder->encodePassword($user1, '123456');
        $user1->setPassword($password);
        $manager->persist($user1);

        $user2 = new User();
        $user2->setUsername('user2');
        $user2->setEmail('user2@mail.com');
        $user2->setNom('nom user2');
        $user2->setPrenom('prenom user 2');
        $user2->setRoles(['ROLE_VENTE']);
        $password = $this->encoder->encodePassword($user2, '123456');
        $user2->setPassword($password);
        $manager->persist($user2);


        $user1 = new User();
        $user1->setUsername('superuser');
        $user1->setEmail($faker->email);
        $user1->setNom($faker->lastName);
        $user1->setPrenom($faker->firstName);
        $user1->setRoles(['ROLE_SUPER_USER']);
        $password = $this->encoder->encodePassword($user1, '123456');
        $user1->setPassword($password);
        $manager->persist($user1);

        $admin = new User();
        $admin->setUsername('admin');
        $admin->setEmail('admin@mail.com');
        $admin->setNom('nom admin');
        $admin->setPrenom('prenom admin');
        $admin->setRoles(['ROLE_ADMIN']);
        $password = $this->encoder->encodePassword($admin, '123456');
        $admin->setPassword($password);
        $manager->persist($admin);

        $superadmin = new User();
        $superadmin->setUsername('superadmin');
        $superadmin->setEmail('superadmin@mail.com');
        $superadmin->setNom('nom superadmin');
        $superadmin->setPrenom('prenom superadmin');
        $superadmin->setRoles(['ROLE_SUPER_ADMIN']);
        $password = $this->encoder->encodePassword($superadmin, '123456');
        $superadmin->setPassword($password);
        $manager->persist($superadmin);



        for ($index = 1; $index <= 10; $index++) {

            /* Insertion des utilisateurs */
            $user = new User();
            $user->setUsername($faker->userName);
            $user->setEmail($faker->email);
            $user->setNom($faker->lastName);
            $user->setPrenom($faker->firstName);
            //$user->setRoles(['ROLE_USER']);
            $password = $this->encoder->encodePassword($user, '123456');
            $user->setPassword($password);
            $manager->persist($user);
        }




        /**
         *
         *  Achat dossiers
         *
         * */
        $dossier1 = new PDossier();
        $dossier1->setNomDossier("HOPITAL MULTIDISCIPLINAIRE KHOURIBGA");
        $dossier1->setDescription("HOPITAL MULTIDISCIPLINAIRE KHOURIBGA");
        $dossier1->setTitre("HOPITAL MULTIDISCIPLINAIRE KHOURIBGA");
        $dossier1->setAbreviation("HMK");
        $dossier1->setPrefix("_hmk");
        $dossier1->setActive(true);
        $manager->persist($dossier1);

        $dossier2 = new PDossier();
        $dossier2->setNomDossier("HOPITAL MULTIDISCIPLINAIRE YOUSSOUFIA");
        $dossier2->setDescription("HOPITAL MULTIDISCIPLINAIRE YOUSSOUFIA");
        $dossier2->setTitre("HOPITAL MULTIDISCIPLINAIRE YOUSSOUFIA");
        $dossier2->setAbreviation("HMY");
        $dossier2->setPrefix("_hmy");
        $dossier2->setActive(true);
        $manager->persist($dossier2);

        $dossier3 = new PDossier();
        $dossier3->setNomDossier("HOPITAL MULTIDISCIPLINAIRE BENGUERIR");
        $dossier3->setDescription("HOPITAL MULTIDISCIPLINAIRE BENGUERIR");
        $dossier3->setTitre("HOPITAL MULTIDISCIPLINAIRE BENGUERIR");

        $dossier3->setAbreviation("HMB");
        $dossier3->setPrefix("_hmb");
        $dossier3->setActive(true);
        $manager->persist($dossier3);

        /*
         *
         * Status Module Achat ugouv DA
         *
         */

        $statut = new PStatutgrv();
        $statut->setStatut("crée");
        $statut->setActive(true);
        $statut->setCouleur("#d1dade");
        $statut->setAbreviation("cr");
        $statut->setModule("DA");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("en cours");
        $statut->setCouleur("#ffbd75");
        $statut->setModule("DA");
        $statut->setFonction("ACHAT");
        $statut->setAbreviation("en");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("traité");
        $statut->setCouleur("#1ab394");
        $statut->setAbreviation("tr");
        $statut->setModule("DA");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("annulé");
        $statut->setCouleur("#ff0e00");
        $statut->setAbreviation("an");
        $statut->setModule("DA");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("stf stock");
        $statut->setCouleur("#f46a6a");
        $statut->setAbreviation("stf");
        $statut->setModule("DA");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);



        /* BCF  */


        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("crée");
        $statut->setCouleur("#d1dade");
        $statut->setAbreviation("cr_bcf");
        $statut->setModule("BCF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("en cours");
        $statut->setCouleur("#ffbd75");
        $statut->setModule("BCF");
        $statut->setFonction("ACHAT");
        $statut->setAbreviation("en_bcf");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("traité");
        $statut->setCouleur("#1ab394");
        $statut->setAbreviation("tr_bcf");
        $statut->setModule("BCF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("annulé");
        $statut->setCouleur("#ff0e00");
        $statut->setAbreviation("an_bcf");
        $statut->setModule("BCF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);


        /* RCF  */


        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("lvr prt");
        $statut->setCouleur("#d1dade");
        $statut->setAbreviation("lvr_prt_rcf");
        $statut->setModule("RCF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("lvr def");
        $statut->setCouleur("#c9bdd8");
        $statut->setModule("RCF");
        $statut->setFonction("ACHAT");
        $statut->setAbreviation("lvr_def_rcf");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("annulé");
        $statut->setCouleur("#ff0e00");
        $statut->setAbreviation("lvr_an_rcf");
        $statut->setModule("RCF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("traité");
        $statut->setCouleur("#1ab394");
        $statut->setAbreviation("lvr_tr");
        $statut->setModule("RCF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);



        /* FAF */


        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("créer");
        $statut->setCouleur("#d1dade");
        $statut->setAbreviation("cr_faf");
        $statut->setModule("FAF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("rg prt");
        $statut->setCouleur("#ffbd75");
        $statut->setModule("FAF");
        $statut->setFonction("ACHAT");
        $statut->setAbreviation("rg_prt_faf");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("rg def ");
        $statut->setCouleur("#1ab394");
        $statut->setAbreviation("rg_def_faf");
        $statut->setModule("FAF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("annulé");
        $statut->setCouleur("#ff0e00");
        $statut->setAbreviation("an_faf");
        $statut->setModule("FAF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);

        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("traité");
        $statut->setCouleur("#1ab394");
        $statut->setAbreviation("tr_faf");
        $statut->setModule("FAF");
        $statut->setFonction("ACHAT");
        $manager->persist($statut);



        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("créer");
        $statut->setCouleur("#d1dade");
        $statut->setAbreviation("cr_dv_cl");
        $statut->setModule("DV");
        $statut->setFonction("VENTE");
        $manager->persist($statut);


        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("annulé");
        $statut->setCouleur("#ff0e00");
        $statut->setAbreviation("an_dv_cl");
        $statut->setModule("DV");
        $statut->setFonction("VENTE");
        $manager->persist($statut);


        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("commandée");
        $statut->setCouleur("#fced20");
        $statut->setAbreviation("cmd_dv_cl");
        $statut->setModule("DV");
        $statut->setFonction("VENTE");
        $manager->persist($statut);


        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("créer");
        $statut->setCouleur("#d1dade");
        $statut->setAbreviation("cr_lvr_cl");
        $statut->setModule("LVR");
        $statut->setFonction("VENTE");
        $manager->persist($statut);


        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("créer");
        $statut->setCouleur("#d1dade");
        $statut->setAbreviation("cr_fac_cl");
        $statut->setModule("FAC");
        $statut->setFonction("VENTE");
        $manager->persist($statut);



        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("annulé");
        $statut->setCouleur("#ff0e00");
        $statut->setAbreviation("an_fac_cl");
        $statut->setModule("FAC");
        $statut->setFonction("VENTE");
        $manager->persist($statut);



        $statut = new PStatutgrv();
        $statut->setActive(true);
        $statut->setStatut("annulé");
        $statut->setCouleur("#ff0e00");
        $statut->setAbreviation("an_lvr_cl");
        $statut->setModule("LVR");
        $statut->setFonction("VENTE");
        $manager->persist($statut);



        /*
         *
         * groupe utilisateurs
         *
         */

        $groupe = new UsGroupe();
        $groupe->setAbreviation("groupe 1");
        $groupe->setDesignation("groupe 1");
        $groupe->setDescription("description du groupe 1");
        $groupe->setActive(true);
        $manager->persist($groupe);

        $groupe = new UsGroupe();
        $groupe->setAbreviation("groupe 2");
        $groupe->setDesignation("groupe 2");
        $groupe->setDescription("description du groupe 2");
        $groupe->setActive(true);
        $manager->persist($groupe);

        $groupe = new UsGroupe();
        $groupe->setAbreviation("groupe 3");
        $groupe->setDesignation("groupe 3");
        $groupe->setDescription("description du groupe 3");
        $groupe->setActive(true);
        $manager->persist($groupe);

        /*         * données de teste t_commande */

//        for ($i = 1; $i <= 20; $i++) {
//            $obj = new TAchatdemandeinternecab();
//            $obj->setDescription($faker->word);
//            $obj->setDateDemande($faker->dateTimeThisCentury($max = 'now', $timezone = null));
//            $obj->setDossier($dossier1);
//            $obj->setStatut($statut1);
//            $obj->setActive(true);
//
//            $manager->persist($obj);
//
//            $det = new TAchatdemandeinternedet();
//            //$det->setArticle($this->getReference(UgouvStock::article1));
//            $det->setQuantite(1);
//            $det->setTva(20);
//            $det->setObservation($faker->word);
//            $det->setCab($obj);
//            $manager->persist($det);
//
//
//            $det = new TAchatdemandeinternedet();
//            //$det->setArticle($this->getReference(UgouvStock::article2));
//            $det->setQuantite(1);
//            $det->setTva(20);
//            $det->setObservation($faker->word);
//            $det->setCab($obj);
//            $manager->persist($det);
//        }



















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














        /* UPAffaire */


        $affaire = new UPAffaire();
        $affaire->setDesignation($faker->word);
        $affaire->setActive(true);
        $affaire->setDossier($dossier1);
        $manager->persist($affaire);


        $affaire = new UPAffaire();
        $affaire->setDesignation($faker->word);
        $affaire->setActive(true);
        $affaire->setDossier($dossier1);
        $manager->persist($affaire);


        $affaire = new UPAffaire();
        $affaire->setDesignation($faker->word);
        $affaire->setActive(true);
        $affaire->setDossier($dossier1);
        $manager->persist($affaire);



        $service = new UPService();
        $ser = $faker->word;
        $service->setService($ser);
        $service->setAbreviation($ser);
        $service->setActive(true);
        $service->setDossier($dossier1);
        $manager->persist($service);


        $service = new UPService();
        $ser = $faker->word;
        $service->setService($ser);
        $service->setAbreviation($ser);
        $service->setActive(true);
        $service->setDossier($dossier1);
        $manager->persist($service);





        /* param"trage des comptes masse rubrrique poste */




        $compteMasse1 = new PComptemasse();
        $compteMasse1->setDossier($dossier1);
        $compteMasse1->setDesignation('Compte Masse 1');
        $compteMasse1->setSens(-1);
        $compteMasse1->setActive(true);
        $manager->persist($compteMasse1);


        $compteMasse2 = new PComptemasse();
        $compteMasse2->setDossier($dossier1);
        $compteMasse2->setDesignation('Compte Masse 2');
        $compteMasse2->setSens(-1);
        $compteMasse2->setActive(true);
        $manager->persist($compteMasse2);



        $compteRubrique1 = new PCompterubrique();
        $compteRubrique1->setCompteMasse($compteMasse1);
        $compteRubrique1->setDesignation('Compte rubrique  1 +compte masse  1');
        $compteRubrique1->setSens(-1);
        $compteRubrique1->setActive(true);
        $manager->persist($compteRubrique1);


        $compteRubrique2 = new PCompterubrique();
        $compteRubrique2->setCompteMasse($compteMasse1);
        $compteRubrique2->setDesignation('Compte rubrique  2 +compte masse  1');
        $compteRubrique2->setSens(-1);
        $compteRubrique2->setActive(true);
        $manager->persist($compteRubrique2);


        $comptePoste = new PCompteposte();
        $comptePoste->setCompteRubrique($compteRubrique1);
        $comptePoste->setDesignation('compte poset 1 Compte rubrique  1 + compte masse  1');
        $comptePoste->setSens(-1);
        $comptePoste->setActive(true);
        $manager->persist($comptePoste);


        $compte = new PCompte();
        $compte->setComptePoste($comptePoste);
        $compte->setDesignation('compte compte poset 1 Compte rubrique  1 + compte masse  1');
        $compte->setSens(-1);
        $compte->setActive(true);
        $manager->persist($compte);






        /* partenaire */



        $partenaireClientType = new UPPartenaireTy();
        $partenaireClientType->setAbreviation('cl');
        $partenaireClientType->setDesignation('client');
        $partenaireClientType->setActive('true');
        $manager->persist($partenaireClientType);

        $partenaireFournisseurType = new UPPartenaireTy();
        $partenaireFournisseurType->setAbreviation('fourn');
        $partenaireFournisseurType->setDesignation('fournisseur');
        $partenaireFournisseurType->setActive('true');
        $manager->persist($partenaireFournisseurType);


        $client = new UPPartenaire();
        $client->setType($partenaireClientType);
        $client->setActive(true);
        $client->setSociete('soc client 1');
        $client->setNom('Nom client 1');
        $client->setPrenom('préNom client 1');
        $client->setSociete('société client 1');
        $manager->persist($client);

        $client = new UPPartenaire();
        $client->setType($partenaireClientType);
        $client->setActive(true);

        $client->setNom('Nom client 2');
        $client->setPrenom('préNom client 2');
        $client->setSociete('société client 2');
        $manager->persist($client);


        $fournisseur = new UPPartenaire();
        $fournisseur->setType($partenaireFournisseurType);
        $fournisseur->setActive(true);
        $fournisseur->setNom('Nom fournisseur 1');
        $fournisseur->setPrenom('prenom fournisseur 1');
        $fournisseur->setSociete('société fournisseur 1');
        $manager->persist($fournisseur);


        $fournisseur = new UPPartenaire();
        $fournisseur->setType($partenaireFournisseurType);
        $fournisseur->setActive(true);
        $fournisseur->setNom('Nom fournisseur 2');
        $fournisseur->setPrenom('prenom fournisseur 2');
        $fournisseur->setSociete('société fournisseur 2');
        $manager->persist($fournisseur);




        $par = new UPPartenaire();
        $par->setType($partenaireClientType);
        $par->setFormeJuridique("jur");
        $par->setNom("kamal");
        $par->setPrenom("simo");
        $par->setAdresse("Casablanca");
        $par->setSociete("societé");
        $par->setPays("Maroc");
        $par->setActive(true);
        $manager->persist($par);



        /* partenaire  Standard */



        $partenaireClientTypee = new DefPartenaireTy();
        $partenaireClientTypee->setAbreviation('cl');
        $partenaireClientTypee->setDesignation('client');
        $partenaireClientTypee->setActive('true');
        $manager->persist($partenaireClientTypee);

        $partenaireFournisseurTypee = new DefPartenaireTy();
        $partenaireFournisseurTypee->setAbreviation('fourn');
        $partenaireFournisseurTypee->setDesignation('fournisseur');
        $partenaireFournisseurTypee->setActive('true');
        $manager->persist($partenaireFournisseurTypee);


        $client1 = new DefPartenaire();
        $client1->setType($partenaireClientTypee);
        $client1->setActive(true);
        $client1->setSociete('soc client 1');
        $client1->setNom('Nom client 1');
        $client1->setPrenom('préNom client 1');
        $client1->setSociete('société client 1');
        $manager->persist($client1);

        $client2 = new DefPartenaire();
        $client2->setType($partenaireClientTypee);
        $client2->setActive(true);

        $client2->setNom('Nom client 2');
        $client2->setPrenom('préNom client 2');
        $client2->setSociete('société client 2');
        $manager->persist($client2);


        $fournisseur1 = new DefPartenaire();
        $fournisseur1->setType($partenaireFournisseurTypee);
        $fournisseur1->setActive(true);
        $fournisseur1->setNom('Nom fournisseur 1');
        $fournisseur1->setPrenom('prenom fournisseur 1');
        $fournisseur1->setSociete('société fournisseur 1');
        $manager->persist($fournisseur1);


        $fournisseur2 = new DefPartenaire();
        $fournisseur2->setType($partenaireFournisseurTypee);
        $fournisseur2->setActive(true);
        $fournisseur2->setNom('Nom fournisseur 2');
        $fournisseur2->setPrenom('prenom fournisseur 2');
        $fournisseur2->setSociete('société fournisseur 2');
        $manager->persist($fournisseur2);




        /*     $par1 = new DefPartenaire();
          $par1->setType($partenaireClientTypee);
          //  $par->setFormeJuridique("jur");
          $par1->setNom("kamal");
          $par1->setPrenom("simo");
          $par1->setAdresse("Casablanca");
          $par1->setSociete("societé");
          $par1->setPays("Maroc");
          $par1->setActive(true);
          $manager->persist($par1); */

        /* paramétrage devise */

        $devise = new UPDevise();
        $devise->setActive(true);
        $devise->setDesignation('MAD');
        $devise->setCode('MAD');
        $devise->setAbreviation('MAD');
        $devise->setTaux(1);
        $manager->persist($devise);



        $devise = new UPDevise();
        $devise->setActive(true);
        $devise->setDesignation('EUR');
        $devise->setCode('EUR');
        $devise->setAbreviation('EUR');
        $devise->setTaux(10.5);
        $manager->persist($devise);


        $devise = new UPDevise();
        $devise->setActive(true);
        $devise->setDesignation('USD');
        $devise->setCode('USD');
        $devise->setAbreviation('USD');
        $devise->setTaux(9);
        $manager->persist($devise);


        $devise = new UPDevise();
        $devise->setActive(true);
        $devise->setDesignation('Francs CFA');
        $devise->setCode('Francs CFA');
        $devise->setAbreviation('Francs CFA');
        $devise->setTaux(1);
        $manager->persist($devise);


        $devise = new UPDevise();
        $devise->setActive(true);
        $devise->setDesignation('GNF');
        $devise->setCode('GNF');
        $devise->setAbreviation('GNF');
        $devise->setTaux(1);
        $manager->persist($devise);

        /* paramétrage DefDevise  Module standard */

        $devise = new DefDevise();
        $devise->setActive(true);
        $devise->setTitre('MAD');
        $devise->setAbreviation('MAD');
        $devise->setTaux(1);
        $manager->persist($devise);



        $devise = new DefDevise();
        $devise->setActive(true);
        $devise->setTitre('EUR');
        $devise->setAbreviation('EUR');
        $devise->setTaux(10.5);
        $manager->persist($devise);


        $devise = new DefDevise();
        $devise->setActive(true);
        $devise->setTitre('USD');
        $devise->setAbreviation('USD');
        $devise->setTaux(9);
        $manager->persist($devise);


        $devise = new DefDevise();
        $devise->setActive(true);
        $devise->setTitre('Francs CFA');
        $devise->setAbreviation('Francs CFA');
        $devise->setTaux(1);
        $manager->persist($devise);


        $devise = new DefDevise();
        $devise->setActive(true);
        $devise->setTitre('GNF');
        $devise->setAbreviation('GNF');
        $devise->setTaux(1);
        $manager->persist($devise);


        /* paramétrage unite */

        $unite = new PUnite();
        $unite->setCode('kg');
        $unite->setAbreviation('KG');
        $unite->setDesignation('kilo gramme');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('weight');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('m');
        $unite->setAbreviation('M');
        $unite->setDesignation('métre');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('size');
        $manager->persist($unite);




        $unite = new PUnite();
        $unite->setCode('l');
        $unite->setAbreviation('L');
        $unite->setDesignation('litre');
        $unite->setActive(true);
        $unite->setType('volume');
        $unite->setTypeDefault('unite');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('km');
        $unite->setAbreviation('KM');
        $unite->setDesignation('kilo métre');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('size');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('u');
        $unite->setAbreviation('U');
        $unite->setDesignation('unité');
        $unite->setActive(true);
        $unite->setType('qty');
        $unite->setTypeDefault('unite');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('ml');
        $unite->setAbreviation('ML');
        $unite->setDesignation('ml');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('volume');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('m3');
        $unite->setAbreviation('M3');
        $unite->setDesignation('m3');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('volume');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('m2');
        $unite->setAbreviation('M2');
        $unite->setDesignation('m2');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('surface');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('f');
        $unite->setAbreviation('F');
        $unite->setDesignation('F');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('e');
        $unite->setAbreviation('E');
        $unite->setDesignation('e');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('ens');
        $unite->setAbreviation('ENS');
        $unite->setDesignation('ensemble');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('qty');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('gr');
        $unite->setAbreviation('GR');
        $unite->setDesignation('gramme');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('weight');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('t');
        $unite->setAbreviation('T');
        $unite->setDesignation('tonne');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('weight');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('jrs');
        $unite->setAbreviation('JRS');
        $unite->setDesignation('jours');
        $unite->setActive(true);
        $unite->setTypeDefault('unite');
        $unite->setType('time');
        $manager->persist($unite);





        $unite = new PUnite();
        $unite->setCode('oz');
        $unite->setAbreviation('OZ');
        $unite->setDesignation('oz');
        $unite->setActive(true);
        $unite->setType('weight');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('lb');
        $unite->setAbreviation('LB');
        $unite->setDesignation('lb');
        $unite->setActive(true);
        $unite->setType('weight');
        $manager->persist($unite);






        $unite = new PUnite();
        $unite->setCode('dm');
        $unite->setAbreviation('dm');
        $unite->setDesignation('décimètre');
        $unite->setActive(true);
        $unite->setType('size');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('cm');
        $unite->setAbreviation('CM');
        $unite->setDesignation('centimètre');
        $unite->setActive(true);
        $unite->setType('size');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('mm');
        $unite->setAbreviation('MM');
        $unite->setDesignation('millimètre');
        $unite->setActive(true);
        $unite->setType('size');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('ft');
        $unite->setAbreviation('FT');
        $unite->setDesignation('ft');
        $unite->setActive(true);
        $unite->setType('size');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('in');
        $unite->setAbreviation('IN');
        $unite->setDesignation('in');
        $unite->setActive(true);
        $unite->setType('size');
        $manager->persist($unite);





        $unite = new PUnite();
        $unite->setCode('dm2');
        $unite->setAbreviation('DM2');
        $unite->setDesignation('décimètre carré');
        $unite->setActive(true);
        $unite->setType('surface');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('cm2');
        $unite->setAbreviation('CM2');
        $unite->setDesignation('centimètre carré');
        $unite->setActive(true);
        $unite->setType('surface');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('mm2');
        $unite->setAbreviation('MM2');
        $unite->setDesignation('millimètre carré');
        $unite->setActive(true);
        $unite->setType('surface');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('ft2');
        $unite->setAbreviation('FT2');
        $unite->setDesignation('ft2');
        $unite->setActive(true);
        $unite->setType('surface');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('in2');
        $unite->setAbreviation('IN2');
        $unite->setDesignation('in2');
        $unite->setActive(true);
        $unite->setType('surface');
        $manager->persist($unite);



        $unite = new PUnite();
        $unite->setCode('dm3');
        $unite->setAbreviation('DM3');
        $unite->setDesignation('décimètre cube');
        $unite->setActive(true);
        $unite->setType('volume');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('cm3');
        $unite->setAbreviation('CM3');
        $unite->setDesignation('centimètre cube');
        $unite->setActive(true);
        $unite->setType('volume');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('mm3');
        $unite->setAbreviation('MM3');
        $unite->setDesignation('millimètre cube');
        $unite->setActive(true);
        $unite->setType('volume');
        $manager->persist($unite);




        $unite = new PUnite();
        $unite->setCode('ft3');
        $unite->setAbreviation('FT3');
        $unite->setDesignation('ft3');
        $unite->setActive(true);
        $unite->setType('volume');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('in3');
        $unite->setAbreviation('IN3');
        $unite->setDesignation('in3');
        $unite->setActive(true);
        $unite->setType('volume');
        $manager->persist($unite);




        $unite = new PUnite();
        $unite->setCode('piece');
        $unite->setAbreviation('PIECE');
        $unite->setDesignation('pièce');
        $unite->setActive(true);
        $unite->setType('qty');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('set');
        $unite->setAbreviation('SET');
        $unite->setDesignation('set');
        $unite->setActive(true);
        $unite->setType('qty');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('s');
        $unite->setAbreviation('S');
        $unite->setDesignation('seconde');
        $unite->setActive(true);
        $unite->setType('time');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('min');
        $unite->setAbreviation('MIN');
        $unite->setDesignation('minute');
        $unite->setActive(true);
        $unite->setType('time');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('heure');
        $unite->setAbreviation('HEURE');
        $unite->setDesignation('heure');
        $unite->setActive(true);
        $unite->setType('time');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('semaine');
        $unite->setAbreviation('SEMAINE');
        $unite->setDesignation('semaine');
        $unite->setActive(true);
        $unite->setType('time');
        $manager->persist($unite);


        $unite = new PUnite();
        $unite->setCode('mois');
        $unite->setAbreviation('MOIS');
        $unite->setDesignation('mois');
        $unite->setActive(true);
        $unite->setType('time');
        $manager->persist($unite);

        $unite = new PUnite();
        $unite->setCode('annee');
        $unite->setAbreviation('ANNEE');
        $unite->setDesignation('annee');
        $unite->setActive(true);
        $unite->setType('time');
        $manager->persist($unite);



        /* Nature Article */


        $natureUnite = new UarticleNature();
        $natureUnite->setDesignation('charge');
        $natureUnite->setAbreviation('charge');
        $natureUnite->setActive(true);
        $manager->persist($natureUnite);


        $natureUnite = new UarticleNature();
        $natureUnite->setDesignation('produit');
        $natureUnite->setAbreviation('produit');
        $natureUnite->setActive(true);
        $manager->persist($natureUnite);



        $natureUnite = new UarticleNature();
        $natureUnite->setDesignation('matière première');
        $natureUnite->setAbreviation('matière première');
        $natureUnite->setActive(true);
        $manager->persist($natureUnite);



        $natureUnite = new UarticleNature();
        $natureUnite->setDesignation('produit fini');
        $natureUnite->setAbreviation('produit fini');
        $natureUnite->setActive(true);
        $manager->persist($natureUnite);


        /* poste User */

        $poste = new UserPoste();

        $poste->setAbreviation("DG");
        $poste->setDesignation("Directeur général");
        $poste->setDescription("Directeur général");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("DBM");
        $poste->setDesignation("Digital Brand Manager");
        $poste->setDescription("Directeur général");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("Responsable communication");
        $poste->setDesignation("Responsable communication");
        $poste->setDescription("Responsable communication");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("Responsable marketing");
        $poste->setDesignation("Responsable marketing");
        $poste->setDescription("Responsable marketing");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("Directeur des opérations");
        $poste->setDesignation("Directeur des opérations");
        $poste->setDescription("Directeur des opérations");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("Directeur de site industriel");
        $poste->setDesignation("Directeur de site industriel");
        $poste->setDescription("Directeur de site industriel");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("SG");
        $poste->setDesignation("Secrétaire général");
        $poste->setDescription("Secrétaire général");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("DF");
        $poste->setDesignation("Directeur administratif et financier");
        $poste->setDescription("Directeur administratif et financier");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("DSI");
        $poste->setDesignation("directeur du système d’information");
        $poste->setDescription("directeur du système d’information");
        $manager->persist($poste);

        $poste = new UserPoste();
        $poste->setAbreviation("Chargé de communication");
        $poste->setDesignation("Chargé de communication");
        $poste->setDescription("Chargé de communication");
        $manager->persist($poste);


        $poste = new UserPoste();
        $poste->setAbreviation("Employer");
        $poste->setDesignation("Employer");
        $poste->setDescription("Employer");
        $manager->persist($poste);


        $poste = new UserPoste();
        $poste->setAbreviation("Enseignant");
        $poste->setDesignation("Enseignant");
        $poste->setDescription("Enseignant");
        $manager->persist($poste);


        $poste = new UserPoste();
        $poste->setAbreviation("Etudiant");
        $poste->setDesignation("Etudiant");
        $poste->setDescription("Etudiant");
        $manager->persist($poste);

        /* UPPiece */
        $piece = new UpPiece();
        $piece->setCode("FAC");
        $piece->setModule("VENTE");
        $piece->setFonction("VENTE");
        $manager->persist($piece);

        $piece = new UpPiece();
        $piece->setCode("FAF");
        $piece->setModule("ACHAT");
        $piece->setFonction("ACHAT");
        $manager->persist($piece);

        $piece = new UpPiece();
        $piece->setCode("FAC");
        $piece->setModule("GLOBAL");
        $piece->setFonction("GLOBAL");
        $manager->persist($piece);




        /* DefModePaiement */
        $modePaiement = new DefModepaiement();
        $modePaiement->setTitre("Espèce");
         $modePaiement->setActive(true);
        $modePaiement->setAbreviation("ESP");
        $manager->persist($modePaiement);

        $modePaiement = new DefModepaiement();
        $modePaiement->setTitre("Virement");
        $modePaiement->setActive(true);
        $modePaiement->setAbreviation("VIR");
        $manager->persist($modePaiement);
        
        $modePaiement = new DefModepaiement();
        $modePaiement->setTitre("Chèque");
        $modePaiement->setActive(true);
        $modePaiement->setAbreviation("CHQ");
        $manager->persist($modePaiement);








        /*
         *
         * Status Module Achat  Standard
         *
         */

        /*         * **********bon de commande fournisseur (_bc_fr)******************** */
        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("archivé");
        $statutDef->setCoulleur("#676a6c");
        $statutDef->setAbreviation("arch");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_bc_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de commande fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("annulé");
        $statutDef->setCoulleur("#ff0e00");
        $statutDef->setAbreviation("an");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_bc_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de commande fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setTitre("crée");
        $statutDef->setActive(true);
        $statutDef->setCoulleur("#d1dade");
        $statutDef->setAbreviation("cr");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_bc_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de commande fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("en cours");
        $statutDef->setCoulleur("#ffbd75");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_bc_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de commande fournisseur ");
        $statutDef->setAbreviation("en");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("validé");
        $statutDef->setCoulleur("#1ab394");
        $statutDef->setAbreviation("val");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_bc_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de commande fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("généré");
        $statutDef->setCoulleur("#676a6c");
        $statutDef->setAbreviation("gnr");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_bc_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de commande fournisseur ");
        $manager->persist($statutDef);






        /*         * **********bon de reception fournisseur (_br_fr)******************** */
        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("archivé");
        $statutDef->setCoulleur("#676a6c");
        $statutDef->setAbreviation("arch");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_br_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de reception fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("annulé");
        $statutDef->setCoulleur("#ff0e00");
        $statutDef->setAbreviation("an");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_br_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de reception fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setTitre("crée");
        $statutDef->setActive(true);
        $statutDef->setCoulleur("#d1dade");
        $statutDef->setAbreviation("cr");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_br_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de reception fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("en cours");
        $statutDef->setCoulleur("#ffbd75");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_br_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de reception fournisseur ");
        $statutDef->setAbreviation("en");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("validé");
        $statutDef->setCoulleur("#1ab394");
        $statutDef->setAbreviation("val");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_br_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de reception fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("généré");
        $statutDef->setCoulleur("#676a6c");
        $statutDef->setAbreviation("gnr");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_br_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module bon de reception fournisseur ");
        $manager->persist($statutDef);






        /*         * **********facture  fournisseur (_fa_fr)******************** */
        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("archivé");
        $statutDef->setCoulleur("#676a6c");
        $statutDef->setAbreviation("arch");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_fa_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module factures fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("annulé");
        $statutDef->setCoulleur("#ff0e00");
        $statutDef->setAbreviation("an");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_fa_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module factures fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setTitre("crée");
        $statutDef->setActive(true);
        $statutDef->setCoulleur("#d1dade");
        $statutDef->setAbreviation("cr");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_fa_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module factures fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("en cours");
        $statutDef->setCoulleur("#ffbd75");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_fa_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module factures fournisseur ");
        $statutDef->setAbreviation("en");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("validé");
        $statutDef->setCoulleur("#1ab394");
        $statutDef->setAbreviation("val");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_fa_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module factures fournisseur ");
        $manager->persist($statutDef);

        $statutDef = new DefStatut();
        $statutDef->setActive(true);
        $statutDef->setTitre("généré");
        $statutDef->setCoulleur("#676a6c");
        $statutDef->setAbreviation("gnr");
        $statutDef->setModule("_achat");
        $statutDef->setSousModule("_fa_fr");
        $statutDef->setDescription("statut utilisé dans le module achat version standard sous module factures fournisseur ");
        $manager->persist($statutDef);



          
     /***********type congé******************** */

        $typeconge = new DefTypeConge(); 
        $typeconge->setActive(true); 
        $typeconge->setTitre('congé annuel'); 
        $typeconge->setAbreviation('congé annuel'); 
        $typeconge->setDescription("Annuellement, chaque salarié a le droit de bénéficier de 5 semaines de congés payés, sans compter les jours fériés et les ponts que l'employeur accorde à l’ensemble des employés (selon différentes formules, et en respectant la loi et les plannings de l'entreprise). Ce droit est ouvert quel que soit l'emploi occupé, la qualification de la personne, ses horaires de travail (temps plein ou partiel)."); 
        $manager->persist($typeconge);
        
        
        $typeconge = new DefTypeConge(); 
        $typeconge->setActive(true); 
        $typeconge->setTitre('congé maladie'); 
        $typeconge->setAbreviation('congé maladie'); 
        $typeconge->setDescription("En cas de maladie attestée par un certificat médical, les employés (quelque soient leurs situation stagiaires, temporaires ou titulaires) ont le droit d’avoir un congé de maladie « ordinaire ». Le certificat médical ou l’avis d’arrêt de travail doit être adressé à l’employeur dans les  premières 48h d’absence.
                                    Le congé de longue durée (CLD) est recommandé, après avis du comité médical, quand le fonctionnaire est atteint de certaines pathologies. Il peut durer entre 5 et 8 ans au maximum."); 
        $manager->persist($typeconge);

        $this->addReference(self::Dossier1, $dossier1);
        $this->addReference(self::Dossier2, $dossier2);
        $this->addReference(self::Dossier3, $dossier3);
        $this->addReference(self::Frs1, $fournisseur);


        $manager->flush();
    }

    public static function getGroups(): array {
        return ['DefaultParam'];
    }

}
