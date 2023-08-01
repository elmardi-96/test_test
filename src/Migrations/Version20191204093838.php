<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191204093838 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE t_commandefrscab DROP FOREIGN KEY FK_5F2A072E37BAF30E');
        $this->addSql('ALTER TABLE t_livraisonfrscab DROP FOREIGN KEY FK_79FAF48F22584355');
        $this->addSql('ALTER TABLE u_a_t_commandefrscab DROP FOREIGN KEY FK_C1D5ACD037BAF30E');
        $this->addSql('ALTER TABLE puser_groupe DROP FOREIGN KEY FK_55F3616B9D86650F');
        $this->addSql('ALTER TABLE puser_groupe DROP FOREIGN KEY FK_55F3616B2AE95007');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69A4D7DA25');
        $this->addSql('ALTER TABLE t_commandefrsdet DROP FOREIGN KEY FK_CADD61FEC068F194');
        $this->addSql('ALTER TABLE t_facturefrsdet DROP FOREIGN KEY FK_A8DF59E82152F3E3');
        $this->addSql('ALTER TABLE t_livraisonfrscab DROP FOREIGN KEY FK_79FAF48FC068F194');
        $this->addSql('ALTER TABLE t_livraisonfrsdet DROP FOREIGN KEY FK_EC0D925FC068F194');
        $this->addSql('ALTER TABLE u_a_t_commandefrsdet DROP FOREIGN KEY FK_5422CA001FC3257F');
        $this->addSql('DROP TABLE compagne');
        $this->addSql('DROP TABLE p_partenaire');
        $this->addSql('DROP TABLE p_user');
        $this->addSql('DROP TABLE p_user_action');
        $this->addSql('DROP TABLE pgroupe');
        $this->addSql('DROP TABLE puser_groupe');
        $this->addSql('DROP TABLE t_affaire');
        $this->addSql('DROP TABLE t_commandefrscab');
        $this->addSql('DROP TABLE t_commandefrsdet');
        $this->addSql('DROP TABLE t_facturefrscab');
        $this->addSql('DROP TABLE t_facturefrsdet');
        $this->addSql('DROP TABLE t_livraisonfrscab');
        $this->addSql('DROP TABLE t_livraisonfrsdet');
        $this->addSql('DROP TABLE u_a_t_commandefrscab');
        $this->addSql('DROP TABLE u_a_t_commandefrsdet');
        $this->addSql('DROP INDEX code_compte ON p_compte');
        $this->addSql('ALTER TABLE p_compte ADD active TINYINT(1) DEFAULT NULL, CHANGE sens sens VARCHAR(100) DEFAULT NULL, CHANGE type type VARCHAR(100) DEFAULT NULL, CHANGE code_compte_poste code_compte_poste VARCHAR(255) DEFAULT NULL, CHANGE code_compte code VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE p_comptemasse DROP FOREIGN KEY FK_DE92877CE3D54947');
        $this->addSql('DROP INDEX code_compte ON p_comptemasse');
        $this->addSql('DROP INDEX IDX_DE92877CE3D54947 ON p_comptemasse');
        $this->addSql('ALTER TABLE p_comptemasse CHANGE sens sens DOUBLE PRECISION DEFAULT NULL, CHANGE active active TINYINT(1) DEFAULT NULL, CHANGE id_dossier p_dossier_id INT DEFAULT NULL, CHANGE code_compte code VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE p_comptemasse ADD CONSTRAINT FK_DE92877C364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('CREATE INDEX IDX_DE92877C364F0A59 ON p_comptemasse (p_dossier_id)');
        $this->addSql('DROP INDEX code_compte ON p_compteposte');
        $this->addSql('ALTER TABLE p_compteposte ADD active TINYINT(1) DEFAULT NULL, CHANGE code_compte code VARCHAR(100) DEFAULT NULL');
        $this->addSql('DROP INDEX code_compte ON p_compterubrique');
        $this->addSql('ALTER TABLE p_compterubrique ADD active TINYINT(1) DEFAULT NULL, CHANGE sens sens DOUBLE PRECISION DEFAULT NULL, CHANGE code_compte code VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE p_dossier ADD prefix VARCHAR(100) NOT NULL, ADD titre VARCHAR(255) DEFAULT NULL, CHANGE abr abreviation VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69369ECA32');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69FF2F8CF5');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69A4D7DA25');
        $this->addSql('DROP INDEX IDX_3D682D69369ECA32 ON t_achatdemandeinternecab');
        $this->addSql('DROP INDEX IDX_3D682D69FF2F8CF5 ON t_achatdemandeinternecab');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD pour_compte INT DEFAULT NULL, ADD partenaire_client_id INT DEFAULT NULL, ADD partenaire_fournisseur_id INT DEFAULT NULL, ADD devis_client_id INT DEFAULT NULL, DROP fournisseur, DROP u_p_partenaire_id, DROP pourcompte, DROP compteclient');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D694AA1C608 FOREIGN KEY (pour_compte) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D698D97FA13 FOREIGN KEY (partenaire_client_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D695BDE0EF9 FOREIGN KEY (partenaire_fournisseur_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D696838A35B FOREIGN KEY (devis_client_id) REFERENCES uv_deviscab (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69A4D7DA25 FOREIGN KEY (t_affaire_id) REFERENCES u_p_affaire (id)');
        $this->addSql('CREATE INDEX IDX_3D682D694AA1C608 ON t_achatdemandeinternecab (pour_compte)');
        $this->addSql('CREATE INDEX IDX_3D682D698D97FA13 ON t_achatdemandeinternecab (partenaire_client_id)');
        $this->addSql('CREATE INDEX IDX_3D682D695BDE0EF9 ON t_achatdemandeinternecab (partenaire_fournisseur_id)');
        $this->addSql('CREATE INDEX IDX_3D682D696838A35B ON t_achatdemandeinternecab (devis_client_id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternedet ADD u_article_id INT DEFAULT NULL, DROP article');
        $this->addSql('ALTER TABLE t_achatdemandeinternedet ADD CONSTRAINT FK_A89F4BB9BD64F783 FOREIGN KEY (u_article_id) REFERENCES uarticle (id)');
        $this->addSql('CREATE INDEX IDX_A89F4BB9BD64F783 ON t_achatdemandeinternedet (u_article_id)');
        $this->addSql('ALTER TABLE t_reglementfrs ADD facture_id INT DEFAULT NULL, CHANGE codereglemnt codereglemnt VARCHAR(100) DEFAULT NULL, CHANGE type type VARCHAR(4) DEFAULT \'FAF\', CHANGE datereglement datereglement DATE NOT NULL, CHANGE code_facture code_facture VARCHAR(100) DEFAULT NULL, CHANGE dateoperation dateoperation DATETIME DEFAULT CURRENT_TIMESTAMP');
        $this->addSql('ALTER TABLE t_reglementfrs ADD CONSTRAINT FK_1C4F80E17F2DEE08 FOREIGN KEY (facture_id) REFERENCES ua_t_facturefrscab (id)');
        $this->addSql('CREATE INDEX IDX_1C4F80E17F2DEE08 ON t_reglementfrs (facture_id)');
        $this->addSql('ALTER TABLE uarticle ADD active TINYINT(1) DEFAULT NULL, CHANGE libelle titre VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD p_compte_masse_id INT DEFAULT NULL, ADD p_compte_rubrique_id INT DEFAULT NULL, ADD p_compte_poste_id INT DEFAULT NULL, CHANGE ismultiple ismultiple SMALLINT UNSIGNED DEFAULT NULL, CHANGE cdc cdc TINYINT(1) DEFAULT NULL, CHANGE cdv cdv TINYINT(1) DEFAULT NULL, CHANGE bec bec TINYINT(1) DEFAULT NULL, CHANGE bev bev TINYINT(1) DEFAULT NULL, CHANGE codecommande code VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD118751BBAD3BB FOREIGN KEY (p_compte_masse_id) REFERENCES p_comptemasse (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875AD1B4C73 FOREIGN KEY (p_compte_rubrique_id) REFERENCES p_compterubrique (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD118751E1B500C FOREIGN KEY (p_compte_poste_id) REFERENCES p_compteposte (id)');
        $this->addSql('CREATE INDEX IDX_ABD118751BBAD3BB ON ua_t_commandefrscab (p_compte_masse_id)');
        $this->addSql('CREATE INDEX IDX_ABD11875AD1B4C73 ON ua_t_commandefrscab (p_compte_rubrique_id)');
        $this->addSql('CREATE INDEX IDX_ABD118751E1B500C ON ua_t_commandefrscab (p_compte_poste_id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD partenaire_id INT DEFAULT NULL, ADD dossier_id INT DEFAULT NULL, ADD p_statutgrv_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E98DE13AC FOREIGN KEY (partenaire_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E611C0C56 FOREIGN KEY (dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E264BA3C7 FOREIGN KEY (p_statutgrv_id) REFERENCES p_statutgrv (id)');
        $this->addSql('CREATE INDEX IDX_1282352E98DE13AC ON ua_t_facturefrscab (partenaire_id)');
        $this->addSql('CREATE INDEX IDX_1282352E611C0C56 ON ua_t_facturefrscab (dossier_id)');
        $this->addSql('CREATE INDEX IDX_1282352E264BA3C7 ON ua_t_facturefrscab (p_statutgrv_id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787EC920C4E9B');
        $this->addSql('DROP INDEX IDX_85B787EC920C4E9B ON ua_t_livraisonfrscab');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP id_poste, CHANGE dateoperation dateoperation DATETIME DEFAULT NULL, CHANGE ismultiple ismultiple SMALLINT UNSIGNED DEFAULT NULL');
        $this->addSql('ALTER TABLE udepot CHANGE nom titre VARCHAR(255) DEFAULT NULL');
        $this->addSql('DROP INDEX code_partenaire ON u_p_partenaire');
        $this->addSql('ALTER TABLE u_p_partenaire ADD u_p_partenaire_ty_id INT DEFAULT NULL, ADD code VARCHAR(100) DEFAULT NULL, ADD active TINYINT(1) DEFAULT NULL, DROP code_partenaire, DROP type');
        $this->addSql('ALTER TABLE u_p_partenaire ADD CONSTRAINT FK_8FF425B8D3AA429B FOREIGN KEY (u_p_partenaire_ty_id) REFERENCES u_p_partenaire_ty (id)');
        $this->addSql('CREATE INDEX IDX_8FF425B8D3AA429B ON u_p_partenaire (u_p_partenaire_ty_id)');
        $this->addSql('ALTER TABLE p_service ADD active TINYINT(1) DEFAULT NULL, CHANGE datecreation datecreation DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD username VARCHAR(150) NOT NULL, DROP login');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649F85E0677 ON user (username)');
        $this->addSql('ALTER TABLE uv_deviscab CHANGE id_dossier p_dossier_id INT DEFAULT NULL, CHANGE codedevis code VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE uv_deviscab ADD CONSTRAINT FK_9A79225F364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('CREATE INDEX IDX_9A79225F364F0A59 ON uv_deviscab (p_dossier_id)');
        $this->addSql('ALTER TABLE uv_devisdet ADD article_id INT NOT NULL, DROP article');
        $this->addSql('ALTER TABLE uv_devisdet ADD CONSTRAINT FK_F8E448F7294869C FOREIGN KEY (article_id) REFERENCES uarticle (id)');
        $this->addSql('CREATE INDEX IDX_F8E448F7294869C ON uv_devisdet (article_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE compagne (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, description VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, logo VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, capital VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, adresse VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, tel VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, email VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE p_partenaire (id INT AUTO_INCREMENT NOT NULL, code_partenaire VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, forme_juridique VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, type VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, nom VARCHAR(150) DEFAULT NULL COLLATE utf8mb4_unicode_ci, prenom VARCHAR(150) DEFAULT NULL COLLATE utf8mb4_unicode_ci, societe VARCHAR(150) DEFAULT NULL COLLATE utf8mb4_unicode_ci, adresse TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, pays VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, ville VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, tel1 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, tel2 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, tel3 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, fax1 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, fax2 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, mail1 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, mail2 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, rib VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, banque VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, UNIQUE INDEX code_partenaire (code_partenaire), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE p_user (id INT AUTO_INCREMENT NOT NULL, type TINYINT(1) NOT NULL, login VARCHAR(150) DEFAULT NULL COLLATE utf8mb4_unicode_ci, password VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, nom VARCHAR(150) DEFAULT NULL COLLATE utf8mb4_unicode_ci, prenom VARCHAR(150) DEFAULT NULL COLLATE utf8mb4_unicode_ci, enseignant SMALLINT UNSIGNED DEFAULT NULL, roles LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci COMMENT \'(DC2Type:array)\', is_active TINYINT(1) NOT NULL, theme VARCHAR(150) NOT NULL COLLATE utf8mb4_unicode_ci, UNIQUE INDEX login (login), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE p_user_action (id INT AUTO_INCREMENT NOT NULL, code_action VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, login VARCHAR(150) DEFAULT NULL COLLATE utf8mb4_unicode_ci, code_dossier INT DEFAULT NULL, INDEX code_action (code_action), INDEX login (login), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE pgroupe (id INT AUTO_INCREMENT NOT NULL, designation VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, abreviation VARCHAR(50) DEFAULT NULL COLLATE utf8mb4_unicode_ci, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE puser_groupe (id INT AUTO_INCREMENT NOT NULL, user_id_id INT DEFAULT NULL, groupe_id_id INT DEFAULT NULL, INDEX IDX_55F3616B2AE95007 (groupe_id_id), INDEX IDX_55F3616B9D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE t_affaire (id INT AUTO_INCREMENT NOT NULL, id_dossier INT DEFAULT NULL, code VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, designation VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, active TINYINT(1) NOT NULL, INDEX IDX_C613A08CE3D54947 (id_dossier), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE t_commandefrscab (id INT AUTO_INCREMENT NOT NULL, p_compte_id INT DEFAULT NULL, p_dossier_id INT DEFAULT NULL, p_devise_id INT DEFAULT NULL, p_partenaire_id INT DEFAULT NULL, p_statutgrv_id INT DEFAULT NULL, codecommande VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, datecommande DATE DEFAULT NULL, refDocAsso VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, responsable VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, remise DOUBLE PRECISION DEFAULT NULL, dateremise DATE DEFAULT NULL, mtremise DOUBLE PRECISION DEFAULT NULL, observation TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, dateoperation DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, utilisateur VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, statut VARCHAR(100) DEFAULT \'CMD\' COLLATE utf8mb4_unicode_ci, ismultiple SMALLINT UNSIGNED NOT NULL, dateDocAsso DATE DEFAULT NULL, frs1 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, frs2 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, mtfrs1 DOUBLE PRECISION DEFAULT NULL, mtfrs2 DOUBLE PRECISION DEFAULT NULL, pourcompte SMALLINT UNSIGNED DEFAULT NULL, reference_bci VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, dateLivprv DATE DEFAULT NULL, donttva DOUBLE PRECISION DEFAULT NULL, cdc INT NOT NULL, cdv INT NOT NULL, bec INT NOT NULL, bev INT NOT NULL, st_liv VARCHAR(10) DEFAULT \'NL\' COLLATE utf8mb4_unicode_ci, st_fac VARCHAR(10) DEFAULT \'NF\' COLLATE utf8mb4_unicode_ci, st_reg VARCHAR(10) DEFAULT \'NR\' COLLATE utf8mb4_unicode_ci, INDEX IDX_5F2A072E364F0A59 (p_dossier_id), INDEX IDX_5F2A072E37BAF30E (p_partenaire_id), INDEX IDX_5F2A072ECFF77A22 (p_devise_id), INDEX IDX_5F2A072E264BA3C7 (p_statutgrv_id), INDEX IDX_5F2A072EC9764C54 (p_compte_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE t_commandefrsdet (id INT AUTO_INCREMENT NOT NULL, t_commandefrscab_id INT DEFAULT NULL, article LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, unite VARCHAR(10) DEFAULT NULL COLLATE utf8mb4_unicode_ci, quantite DOUBLE PRECISION DEFAULT NULL, prixunitaire DOUBLE PRECISION DEFAULT NULL, tva DOUBLE PRECISION DEFAULT NULL, prixttc DOUBLE PRECISION DEFAULT NULL, dateoperation DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, INDEX IDX_CADD61FEC068F194 (t_commandefrscab_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE t_facturefrscab (id INT AUTO_INCREMENT NOT NULL, codefacture VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, codebl VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, id_client VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, datefacture DATE DEFAULT NULL, remise VARCHAR(2) DEFAULT NULL COLLATE utf8mb4_unicode_ci, dateremise DATE DEFAULT NULL, mtremise DOUBLE PRECISION DEFAULT NULL, observation TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, responsable VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, dateoperation DATE DEFAULT NULL, utilisateur VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, statut VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, id_statut SMALLINT UNSIGNED NOT NULL, pourcompte SMALLINT UNSIGNED DEFAULT NULL, devise VARCHAR(10) DEFAULT \'MAD\' NOT NULL COLLATE utf8mb4_unicode_ci, refDocAsso VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, dateDocAsso DATE DEFAULT NULL, frs1 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, frs2 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, mtfrs1 DOUBLE PRECISION DEFAULT NULL, mtfrs2 DOUBLE PRECISION DEFAULT NULL, id_compte VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, id_dossier INT NOT NULL, reference_bci VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, INDEX codebl (codebl), INDEX id_dossier (id_dossier), INDEX id_compte (id_compte), UNIQUE INDEX codefacture (codefacture), INDEX id_statut (id_statut), INDEX id_client (id_client), INDEX devise (devise), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE t_facturefrsdet (id INT AUTO_INCREMENT NOT NULL, t_facturefrscab_id INT DEFAULT NULL, p_statutgrv INT DEFAULT NULL, article LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, unite VARCHAR(10) DEFAULT NULL COLLATE utf8mb4_unicode_ci, quantite DOUBLE PRECISION DEFAULT NULL, prixunitaire DOUBLE PRECISION DEFAULT NULL, tva DOUBLE PRECISION DEFAULT NULL, prixttc DOUBLE PRECISION DEFAULT NULL, dateoperation INT DEFAULT NULL, INDEX IDX_A8DF59E8BD641C8A (p_statutgrv), INDEX IDX_A8DF59E82152F3E3 (t_facturefrscab_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE t_livraisonfrscab (id INT AUTO_INCREMENT NOT NULL, p_dossier_id INT DEFAULT NULL, id_poste VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, p_devise_id INT DEFAULT NULL, t_commandefrscab_id INT DEFAULT NULL, p_client_id INT DEFAULT NULL, p_statutgrv_id INT DEFAULT NULL, codelivraison VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, refDocAsso VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, responsable VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, datelivraison DATE DEFAULT NULL, remise DOUBLE PRECISION DEFAULT NULL, dateremise DATE DEFAULT NULL, mtremise DOUBLE PRECISION DEFAULT NULL, observation TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, dateoperation DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, utilisateur VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, statut VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, ismultiple SMALLINT UNSIGNED NOT NULL, dateDocAsso DATE DEFAULT NULL, frs1 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, frs2 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, mtfrs1 DOUBLE PRECISION DEFAULT NULL, mtfrs2 DOUBLE PRECISION DEFAULT NULL, pourcompte SMALLINT UNSIGNED DEFAULT NULL, reference_bci VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, INDEX IDX_79FAF48F920C4E9B (id_poste), INDEX IDX_79FAF48FCFF77A22 (p_devise_id), INDEX IDX_79FAF48F264BA3C7 (p_statutgrv_id), INDEX IDX_79FAF48F364F0A59 (p_dossier_id), INDEX IDX_79FAF48FC068F194 (t_commandefrscab_id), INDEX IDX_79FAF48F22584355 (p_client_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE t_livraisonfrsdet (id INT AUTO_INCREMENT NOT NULL, t_commandefrscab_id INT DEFAULT NULL, article LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, unite VARCHAR(10) DEFAULT NULL COLLATE utf8mb4_unicode_ci, quantite DOUBLE PRECISION DEFAULT NULL, prixunitaire DOUBLE PRECISION DEFAULT NULL, tva DOUBLE PRECISION DEFAULT NULL, prixttc DOUBLE PRECISION DEFAULT NULL, dateoperation DATE DEFAULT NULL, INDEX IDX_EC0D925FC068F194 (t_commandefrscab_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE u_a_t_commandefrscab (id INT AUTO_INCREMENT NOT NULL, p_compte_id INT DEFAULT NULL, p_devise_id INT DEFAULT NULL, p_partenaire_id INT DEFAULT NULL, p_dossier_id INT DEFAULT NULL, p_statutgrv_id INT DEFAULT NULL, reference_bci_id INT DEFAULT NULL, codecommande VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, datecommande DATE DEFAULT NULL, refDocAsso VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, responsable VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, remise DOUBLE PRECISION DEFAULT NULL, dateremise DATE DEFAULT NULL, mtremise DOUBLE PRECISION DEFAULT NULL, observation TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, dateoperation DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, utilisateur VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, statut VARCHAR(100) DEFAULT \'CMD\' COLLATE utf8mb4_unicode_ci, ismultiple SMALLINT UNSIGNED NOT NULL, dateDocAsso DATE DEFAULT NULL, frs1 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, frs2 VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, mtfrs1 DOUBLE PRECISION DEFAULT NULL, mtfrs2 DOUBLE PRECISION DEFAULT NULL, pourcompte SMALLINT UNSIGNED DEFAULT NULL, dateLivprv DATE DEFAULT NULL, donttva DOUBLE PRECISION DEFAULT NULL, cdc INT NOT NULL, cdv INT NOT NULL, bec INT NOT NULL, bev INT NOT NULL, st_liv VARCHAR(10) DEFAULT \'NL\' COLLATE utf8mb4_unicode_ci, st_fac VARCHAR(10) DEFAULT \'NF\' COLLATE utf8mb4_unicode_ci, st_reg VARCHAR(10) DEFAULT \'NR\' COLLATE utf8mb4_unicode_ci, INDEX IDX_C1D5ACD0CFF77A22 (p_devise_id), INDEX IDX_C1D5ACD0364F0A59 (p_dossier_id), INDEX IDX_C1D5ACD0E82317C0 (reference_bci_id), INDEX IDX_C1D5ACD0C9764C54 (p_compte_id), INDEX IDX_C1D5ACD037BAF30E (p_partenaire_id), INDEX IDX_C1D5ACD0264BA3C7 (p_statutgrv_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE u_a_t_commandefrsdet (id INT AUTO_INCREMENT NOT NULL, u_a_t_commandefrscab_id INT DEFAULT NULL, article LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, unite VARCHAR(10) DEFAULT NULL COLLATE utf8mb4_unicode_ci, quantite DOUBLE PRECISION DEFAULT NULL, prixunitaire DOUBLE PRECISION DEFAULT NULL, tva DOUBLE PRECISION DEFAULT NULL, prixttc DOUBLE PRECISION DEFAULT NULL, dateoperation DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, INDEX IDX_5422CA001FC3257F (u_a_t_commandefrscab_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE puser_groupe ADD CONSTRAINT FK_55F3616B2AE95007 FOREIGN KEY (groupe_id_id) REFERENCES pgroupe (id)');
        $this->addSql('ALTER TABLE puser_groupe ADD CONSTRAINT FK_55F3616B9D86650F FOREIGN KEY (user_id_id) REFERENCES p_user (id)');
        $this->addSql('ALTER TABLE t_affaire ADD CONSTRAINT FK_C613A08CE3D54947 FOREIGN KEY (id_dossier) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE t_commandefrscab ADD CONSTRAINT FK_5F2A072E264BA3C7 FOREIGN KEY (p_statutgrv_id) REFERENCES p_statutgrv (id)');
        $this->addSql('ALTER TABLE t_commandefrscab ADD CONSTRAINT FK_5F2A072E364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE t_commandefrscab ADD CONSTRAINT FK_5F2A072E37BAF30E FOREIGN KEY (p_partenaire_id) REFERENCES p_partenaire (id)');
        $this->addSql('ALTER TABLE t_commandefrscab ADD CONSTRAINT FK_5F2A072EC9764C54 FOREIGN KEY (p_compte_id) REFERENCES p_compte (id)');
        $this->addSql('ALTER TABLE t_commandefrscab ADD CONSTRAINT FK_5F2A072ECFF77A22 FOREIGN KEY (p_devise_id) REFERENCES p_devise (id)');
        $this->addSql('ALTER TABLE t_commandefrsdet ADD CONSTRAINT FK_CADD61FEC068F194 FOREIGN KEY (t_commandefrscab_id) REFERENCES t_commandefrscab (id)');
        $this->addSql('ALTER TABLE t_facturefrsdet ADD CONSTRAINT FK_A8DF59E82152F3E3 FOREIGN KEY (t_facturefrscab_id) REFERENCES t_facturefrscab (id)');
        $this->addSql('ALTER TABLE t_facturefrsdet ADD CONSTRAINT FK_A8DF59E8BD641C8A FOREIGN KEY (p_statutgrv) REFERENCES p_statutgrv (id)');
        $this->addSql('ALTER TABLE t_livraisonfrscab ADD CONSTRAINT FK_79FAF48F22584355 FOREIGN KEY (p_client_id) REFERENCES p_partenaire (id)');
        $this->addSql('ALTER TABLE t_livraisonfrscab ADD CONSTRAINT FK_79FAF48F264BA3C7 FOREIGN KEY (p_statutgrv_id) REFERENCES p_statutgrv (id)');
        $this->addSql('ALTER TABLE t_livraisonfrscab ADD CONSTRAINT FK_79FAF48F364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE t_livraisonfrscab ADD CONSTRAINT FK_79FAF48F920C4E9B FOREIGN KEY (id_poste) REFERENCES p_compte (code_compte)');
        $this->addSql('ALTER TABLE t_livraisonfrscab ADD CONSTRAINT FK_79FAF48FC068F194 FOREIGN KEY (t_commandefrscab_id) REFERENCES u_a_t_commandefrscab (id)');
        $this->addSql('ALTER TABLE t_livraisonfrscab ADD CONSTRAINT FK_79FAF48FCFF77A22 FOREIGN KEY (p_devise_id) REFERENCES p_devise (id)');
        $this->addSql('ALTER TABLE t_livraisonfrsdet ADD CONSTRAINT FK_EC0D925FC068F194 FOREIGN KEY (t_commandefrscab_id) REFERENCES u_a_t_commandefrscab (id)');
        $this->addSql('ALTER TABLE u_a_t_commandefrscab ADD CONSTRAINT FK_C1D5ACD0264BA3C7 FOREIGN KEY (p_statutgrv_id) REFERENCES p_statutgrv (id)');
        $this->addSql('ALTER TABLE u_a_t_commandefrscab ADD CONSTRAINT FK_C1D5ACD0364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE u_a_t_commandefrscab ADD CONSTRAINT FK_C1D5ACD037BAF30E FOREIGN KEY (p_partenaire_id) REFERENCES p_partenaire (id)');
        $this->addSql('ALTER TABLE u_a_t_commandefrscab ADD CONSTRAINT FK_C1D5ACD0C9764C54 FOREIGN KEY (p_compte_id) REFERENCES p_compte (id)');
        $this->addSql('ALTER TABLE u_a_t_commandefrscab ADD CONSTRAINT FK_C1D5ACD0CFF77A22 FOREIGN KEY (p_devise_id) REFERENCES p_devise (id)');
        $this->addSql('ALTER TABLE u_a_t_commandefrscab ADD CONSTRAINT FK_C1D5ACD0E82317C0 FOREIGN KEY (reference_bci_id) REFERENCES t_achatdemandeinternecab (id)');
        $this->addSql('ALTER TABLE u_a_t_commandefrsdet ADD CONSTRAINT FK_5422CA001FC3257F FOREIGN KEY (u_a_t_commandefrscab_id) REFERENCES u_a_t_commandefrscab (id)');
        $this->addSql('ALTER TABLE p_compte DROP active, CHANGE sens sens VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE type type VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE code_compte_poste code_compte_poste VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE code code_compte VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('CREATE UNIQUE INDEX code_compte ON p_compte (code_compte)');
        $this->addSql('ALTER TABLE p_comptemasse DROP FOREIGN KEY FK_DE92877C364F0A59');
        $this->addSql('DROP INDEX IDX_DE92877C364F0A59 ON p_comptemasse');
        $this->addSql('ALTER TABLE p_comptemasse CHANGE sens sens VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, CHANGE active active SMALLINT DEFAULT 1 NOT NULL, CHANGE p_dossier_id id_dossier INT DEFAULT NULL, CHANGE code code_compte VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE p_comptemasse ADD CONSTRAINT FK_DE92877CE3D54947 FOREIGN KEY (id_dossier) REFERENCES p_dossier (id)');
        $this->addSql('CREATE UNIQUE INDEX code_compte ON p_comptemasse (code_compte, id_dossier)');
        $this->addSql('CREATE INDEX IDX_DE92877CE3D54947 ON p_comptemasse (id_dossier)');
        $this->addSql('ALTER TABLE p_compteposte DROP active, CHANGE code code_compte VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('CREATE UNIQUE INDEX code_compte ON p_compteposte (code_compte)');
        $this->addSql('ALTER TABLE p_compterubrique DROP active, CHANGE sens sens VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, CHANGE code code_compte VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('CREATE UNIQUE INDEX code_compte ON p_compterubrique (code_compte)');
        $this->addSql('ALTER TABLE p_dossier DROP prefix, DROP titre, CHANGE abreviation abr VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE p_service DROP active, CHANGE datecreation datecreation DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D694AA1C608');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D698D97FA13');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D695BDE0EF9');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D696838A35B');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69A4D7DA25');
        $this->addSql('DROP INDEX IDX_3D682D694AA1C608 ON t_achatdemandeinternecab');
        $this->addSql('DROP INDEX IDX_3D682D698D97FA13 ON t_achatdemandeinternecab');
        $this->addSql('DROP INDEX IDX_3D682D695BDE0EF9 ON t_achatdemandeinternecab');
        $this->addSql('DROP INDEX IDX_3D682D696838A35B ON t_achatdemandeinternecab');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD fournisseur INT DEFAULT NULL, ADD u_p_partenaire_id INT DEFAULT NULL, ADD pourcompte SMALLINT UNSIGNED DEFAULT NULL, ADD compteclient VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, DROP pour_compte, DROP partenaire_client_id, DROP partenaire_fournisseur_id, DROP devis_client_id');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69369ECA32 FOREIGN KEY (fournisseur) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69FF2F8CF5 FOREIGN KEY (u_p_partenaire_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69A4D7DA25 FOREIGN KEY (t_affaire_id) REFERENCES t_affaire (id)');
        $this->addSql('CREATE INDEX IDX_3D682D69369ECA32 ON t_achatdemandeinternecab (fournisseur)');
        $this->addSql('CREATE INDEX IDX_3D682D69FF2F8CF5 ON t_achatdemandeinternecab (u_p_partenaire_id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternedet DROP FOREIGN KEY FK_A89F4BB9BD64F783');
        $this->addSql('DROP INDEX IDX_A89F4BB9BD64F783 ON t_achatdemandeinternedet');
        $this->addSql('ALTER TABLE t_achatdemandeinternedet ADD article TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, DROP u_article_id');
        $this->addSql('ALTER TABLE t_reglementfrs DROP FOREIGN KEY FK_1C4F80E17F2DEE08');
        $this->addSql('DROP INDEX IDX_1C4F80E17F2DEE08 ON t_reglementfrs');
        $this->addSql('ALTER TABLE t_reglementfrs DROP facture_id, CHANGE codereglemnt codereglemnt VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE type type VARCHAR(4) DEFAULT \'FAF\' NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE datereglement datereglement DATE DEFAULT NULL, CHANGE code_facture code_facture VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE dateoperation dateoperation DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL');
        $this->addSql('ALTER TABLE u_p_partenaire DROP FOREIGN KEY FK_8FF425B8D3AA429B');
        $this->addSql('DROP INDEX IDX_8FF425B8D3AA429B ON u_p_partenaire');
        $this->addSql('ALTER TABLE u_p_partenaire ADD type VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, DROP u_p_partenaire_ty_id, DROP active, CHANGE code code_partenaire VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('CREATE UNIQUE INDEX code_partenaire ON u_p_partenaire (code_partenaire)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD118751BBAD3BB');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875AD1B4C73');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD118751E1B500C');
        $this->addSql('DROP INDEX IDX_ABD118751BBAD3BB ON ua_t_commandefrscab');
        $this->addSql('DROP INDEX IDX_ABD11875AD1B4C73 ON ua_t_commandefrscab');
        $this->addSql('DROP INDEX IDX_ABD118751E1B500C ON ua_t_commandefrscab');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP p_compte_masse_id, DROP p_compte_rubrique_id, DROP p_compte_poste_id, CHANGE ismultiple ismultiple SMALLINT UNSIGNED NOT NULL, CHANGE cdc cdc TINYINT(1) NOT NULL, CHANGE cdv cdv TINYINT(1) NOT NULL, CHANGE bec bec TINYINT(1) NOT NULL, CHANGE bev bev TINYINT(1) NOT NULL, CHANGE code codecommande VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E98DE13AC');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E611C0C56');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E264BA3C7');
        $this->addSql('DROP INDEX IDX_1282352E98DE13AC ON ua_t_facturefrscab');
        $this->addSql('DROP INDEX IDX_1282352E611C0C56 ON ua_t_facturefrscab');
        $this->addSql('DROP INDEX IDX_1282352E264BA3C7 ON ua_t_facturefrscab');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP partenaire_id, DROP dossier_id, DROP p_statutgrv_id');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD id_poste VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci, CHANGE dateoperation dateoperation DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, CHANGE ismultiple ismultiple SMALLINT UNSIGNED NOT NULL');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787EC920C4E9B FOREIGN KEY (id_poste) REFERENCES p_compte (code_compte)');
        $this->addSql('CREATE INDEX IDX_85B787EC920C4E9B ON ua_t_livraisonfrscab (id_poste)');
        $this->addSql('ALTER TABLE uarticle DROP active, CHANGE titre libelle VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE udepot CHANGE titre nom VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('DROP INDEX UNIQ_8D93D649F85E0677 ON user');
        $this->addSql('ALTER TABLE user ADD login VARCHAR(150) DEFAULT NULL COLLATE utf8mb4_unicode_ci, DROP username');
        $this->addSql('ALTER TABLE uv_deviscab DROP FOREIGN KEY FK_9A79225F364F0A59');
        $this->addSql('DROP INDEX IDX_9A79225F364F0A59 ON uv_deviscab');
        $this->addSql('ALTER TABLE uv_deviscab CHANGE p_dossier_id id_dossier INT DEFAULT NULL, CHANGE code codedevis VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE uv_devisdet DROP FOREIGN KEY FK_F8E448F7294869C');
        $this->addSql('DROP INDEX IDX_F8E448F7294869C ON uv_devisdet');
        $this->addSql('ALTER TABLE uv_devisdet ADD article VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, DROP article_id');
    }
}
