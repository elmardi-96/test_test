<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191216104344 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE p_dossier ADD icon VARCHAR(255) DEFAULT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3A88095886B470F8 ON p_dossier (abreviation)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3A88095893B1868E ON p_dossier (prefix)');
        $this->addSql('ALTER TABLE p_compte ADD CONSTRAINT FK_62DB24641E1B500C FOREIGN KEY (p_compte_poste_id) REFERENCES p_compteposte (id)');
        $this->addSql('ALTER TABLE p_comptemasse ADD CONSTRAINT FK_DE92877C364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE p_compteposte ADD CONSTRAINT FK_E97C35BBAD1B4C73 FOREIGN KEY (p_compte_rubrique_id) REFERENCES p_compterubrique (id)');
        $this->addSql('ALTER TABLE p_compterubrique ADD CONSTRAINT FK_7BFC72731BBAD3BB FOREIGN KEY (p_compte_masse_id) REFERENCES p_comptemasse (id)');
        $this->addSql('ALTER TABLE p_liens ADD CONSTRAINT FK_EA5EF8D6325BF1B4 FOREIGN KEY (gestion_id_id) REFERENCES p_gestion (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69BA0FAFE9 FOREIGN KEY (p_service_id) REFERENCES p_service (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69423087A6 FOREIGN KEY (u_p_devise_id) REFERENCES u_p_devise (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69264BA3C7 FOREIGN KEY (p_statutgrv_id) REFERENCES p_statutgrv (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69A4D7DA25 FOREIGN KEY (t_affaire_id) REFERENCES u_p_affaire (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D691BBAD3BB FOREIGN KEY (p_compte_masse_id) REFERENCES p_comptemasse (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69AD1B4C73 FOREIGN KEY (p_compte_rubrique_id) REFERENCES p_compterubrique (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D691E1B500C FOREIGN KEY (p_compte_poste_id) REFERENCES p_compteposte (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69C9764C54 FOREIGN KEY (p_compte_id) REFERENCES p_compte (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D694AA1C608 FOREIGN KEY (pour_compte) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D698D97FA13 FOREIGN KEY (partenaire_client_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D695BDE0EF9 FOREIGN KEY (partenaire_fournisseur_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D69EA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D699E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab ADD CONSTRAINT FK_3D682D696838A35B FOREIGN KEY (devis_client_id) REFERENCES uv_deviscab (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternedet ADD CONSTRAINT FK_A89F4BB942048627 FOREIGN KEY (t_achatdemandeinternecab_id) REFERENCES t_achatdemandeinternecab (id)');
        $this->addSql('ALTER TABLE t_achatdemandeinternedet ADD CONSTRAINT FK_A89F4BB9BD64F783 FOREIGN KEY (u_article_id) REFERENCES uarticle (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875264BA3C7 FOREIGN KEY (p_statutgrv_id) REFERENCES p_statutgrv (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD118754AA1C608 FOREIGN KEY (pour_compte) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD118751BBAD3BB FOREIGN KEY (p_compte_masse_id) REFERENCES p_comptemasse (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875AD1B4C73 FOREIGN KEY (p_compte_rubrique_id) REFERENCES p_compterubrique (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD118751E1B500C FOREIGN KEY (p_compte_poste_id) REFERENCES p_compteposte (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875C9764C54 FOREIGN KEY (p_compte_id) REFERENCES p_compte (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875CFF77A22 FOREIGN KEY (p_devise_id) REFERENCES u_p_devise (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875FF2F8CF5 FOREIGN KEY (u_p_partenaire_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875E82317C0 FOREIGN KEY (reference_bci_id) REFERENCES t_achatdemandeinternecab (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD11875EA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrscab ADD CONSTRAINT FK_ABD118759E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrsdet ADD CONSTRAINT FK_3E267EA5BD64F783 FOREIGN KEY (u_article_id) REFERENCES uarticle (id)');
        $this->addSql('ALTER TABLE ua_t_commandefrsdet ADD CONSTRAINT FK_3E267EA547B4153B FOREIGN KEY (ua_t_commandefrscab_id) REFERENCES ua_t_commandefrscab (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE u_p_affaire ADD CONSTRAINT FK_D11B77B6E3D54947 FOREIGN KEY (id_dossier) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE u_p_partenaire ADD CONSTRAINT FK_8FF425B8D3AA429B FOREIGN KEY (u_p_partenaire_ty_id) REFERENCES u_p_partenaire_ty (id)');
        $this->addSql('ALTER TABLE p_service ADD CONSTRAINT FK_E65D73BD364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E98DE13AC FOREIGN KEY (partenaire_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E611C0C56 FOREIGN KEY (dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E264BA3C7 FOREIGN KEY (p_statutgrv_id) REFERENCES p_statutgrv (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E864310E5 FOREIGN KEY (pourcompte_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352EEA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E9E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E1BBAD3BB FOREIGN KEY (p_compte_masse_id) REFERENCES p_comptemasse (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352EAD1B4C73 FOREIGN KEY (p_compte_rubrique_id) REFERENCES p_compterubrique (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E1E1B500C FOREIGN KEY (p_compte_poste_id) REFERENCES p_compteposte (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352EC9764C54 FOREIGN KEY (p_compte_id) REFERENCES p_compte (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352ECFF77A22 FOREIGN KEY (p_devise_id) REFERENCES u_p_devise (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrscab ADD CONSTRAINT FK_1282352E8E54FB25 FOREIGN KEY (livraison_id) REFERENCES ua_t_livraisonfrscab (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787EC364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787ECCFF77A22 FOREIGN KEY (p_devise_id) REFERENCES u_p_devise (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787ECFF2F8CF5 FOREIGN KEY (u_p_partenaire_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787EC264BA3C7 FOREIGN KEY (p_statutgrv_id) REFERENCES p_statutgrv (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787EC4AA1C608 FOREIGN KEY (pour_compte) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787ECEA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787EC9E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787EC1BBAD3BB FOREIGN KEY (p_compte_masse_id) REFERENCES p_comptemasse (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787ECAD1B4C73 FOREIGN KEY (p_compte_rubrique_id) REFERENCES p_compterubrique (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787EC1E1B500C FOREIGN KEY (p_compte_poste_id) REFERENCES p_compteposte (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787ECC9764C54 FOREIGN KEY (p_compte_id) REFERENCES p_compte (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab ADD CONSTRAINT FK_85B787EC47B4153B FOREIGN KEY (ua_t_commandefrscab_id) REFERENCES ua_t_commandefrscab (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrsdet ADD CONSTRAINT FK_1040E13CBD64F783 FOREIGN KEY (u_article_id) REFERENCES uarticle (id)');
        $this->addSql('ALTER TABLE ua_t_livraisonfrsdet ADD CONSTRAINT FK_1040E13CE77EC4D2 FOREIGN KEY (ua_t_livraisonfrscab_id) REFERENCES ua_t_livraisonfrscab (id)');
        $this->addSql('ALTER TABLE ua_t_reglementfrs ADD user_created INT DEFAULT NULL, ADD user_updated INT DEFAULT NULL, ADD active TINYINT(1) DEFAULT NULL, ADD created DATETIME DEFAULT NULL, ADD updated DATETIME DEFAULT NULL, CHANGE codereglement codereglemnt VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE ua_t_reglementfrs ADD CONSTRAINT FK_D93911DD364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE ua_t_reglementfrs ADD CONSTRAINT FK_D93911DD7F2DEE08 FOREIGN KEY (facture_id) REFERENCES ua_t_facturefrscab (id)');
        $this->addSql('ALTER TABLE ua_t_reglementfrs ADD CONSTRAINT FK_D93911DDEA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ua_t_reglementfrs ADD CONSTRAINT FK_D93911DD9E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_D93911DDEA30A9B2 ON ua_t_reglementfrs (user_created)');
        $this->addSql('CREATE INDEX IDX_D93911DD9E9688FD ON ua_t_reglementfrs (user_updated)');
        $this->addSql('ALTER TABLE us_groupe ADD CONSTRAINT FK_1E04B09BEA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE us_groupe ADD CONSTRAINT FK_1E04B09B9E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64974AFF89E FOREIGN KEY (us_groupe_id) REFERENCES us_groupe (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649EA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6499E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE uv_deviscab ADD CONSTRAINT FK_9A79225F364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE uv_deviscab ADD CONSTRAINT FK_9A79225F19EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
        $this->addSql('ALTER TABLE uv_deviscab ADD CONSTRAINT FK_9A79225FF2C56620 FOREIGN KEY (compte_id) REFERENCES p_compte (id)');
        $this->addSql('ALTER TABLE uv_deviscab ADD CONSTRAINT FK_9A79225F278140CC FOREIGN KEY (compte_masse_id) REFERENCES p_comptemasse (id)');
        $this->addSql('ALTER TABLE uv_deviscab ADD CONSTRAINT FK_9A79225F17C20267 FOREIGN KEY (compte_rubrique_id) REFERENCES p_compterubrique (id)');
        $this->addSql('ALTER TABLE uv_deviscab ADD CONSTRAINT FK_9A79225F2220C37B FOREIGN KEY (compte_poste_id) REFERENCES p_compteposte (id)');
        $this->addSql('ALTER TABLE uv_devisdet ADD CONSTRAINT FK_F8E448F8FCA239F FOREIGN KEY (uv_deviscab_id) REFERENCES uv_deviscab (id)');
        $this->addSql('ALTER TABLE uv_devisdet ADD CONSTRAINT FK_F8E448FEC4A74AB FOREIGN KEY (unite_id) REFERENCES p_unite (id)');
        $this->addSql('ALTER TABLE uv_devisdet ADD CONSTRAINT FK_F8E448F7294869C FOREIGN KEY (article_id) REFERENCES uarticle (id)');
        $this->addSql('ALTER TABLE uarticle ADD CONSTRAINT FK_1EC491858510D4DE FOREIGN KEY (depot_id) REFERENCES udepot (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrsdet ADD CONSTRAINT FK_877553FEBD64F783 FOREIGN KEY (u_article_id) REFERENCES uarticle (id)');
        $this->addSql('ALTER TABLE ua_t_facturefrsdet ADD CONSTRAINT FK_877553FE2152F3E3 FOREIGN KEY (t_facturefrscab_id) REFERENCES ua_t_facturefrscab (id)');
        $this->addSql('ALTER TABLE us_groupe_permission ADD CONSTRAINT FK_C31FEDEE74AFF89E FOREIGN KEY (us_groupe_id) REFERENCES us_groupe (id)');
        $this->addSql('ALTER TABLE us_groupe_permission ADD CONSTRAINT FK_C31FEDEEA1287883 FOREIGN KEY (us_module_id) REFERENCES us_module (id)');
        $this->addSql('ALTER TABLE us_groupe_permission ADD CONSTRAINT FK_C31FEDEE364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE us_groupe_permission ADD CONSTRAINT FK_C31FEDEE103AD41F FOREIGN KEY (us_sous_module_id) REFERENCES us_sous_module (id)');
        $this->addSql('ALTER TABLE us_groupe_permission ADD CONSTRAINT FK_C31FEDEE6585E0F6 FOREIGN KEY (us_operation_id) REFERENCES us_operation (id)');
        $this->addSql('ALTER TABLE us_operation ADD CONSTRAINT FK_176B6B7FEA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE us_operation ADD CONSTRAINT FK_176B6B7F9E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE us_operation ADD CONSTRAINT FK_176B6B7F103AD41F FOREIGN KEY (us_sous_module_id) REFERENCES us_sous_module (id)');
        $this->addSql('ALTER TABLE us_sous_module ADD CONSTRAINT FK_411A14EBEA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('ALTER TABLE us_sous_module ADD CONSTRAINT FK_411A14EB9E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE us_sous_module ADD CONSTRAINT FK_411A14EBA1287883 FOREIGN KEY (us_module_id) REFERENCES us_module (id)');
        $this->addSql('ALTER TABLE uv_livraisoncab ADD CONSTRAINT FK_271573F48FCA239F FOREIGN KEY (uv_deviscab_id) REFERENCES uv_deviscab (id)');
        $this->addSql('ALTER TABLE v_deviscab ADD CONSTRAINT FK_9D01057422584355 FOREIGN KEY (p_client_id) REFERENCES u_p_partenaire (id)');
        $this->addSql('ALTER TABLE v_deviscab ADD CONSTRAINT FK_9D010574364F0A59 FOREIGN KEY (p_dossier_id) REFERENCES p_dossier (id)');
        $this->addSql('ALTER TABLE v_devisdet ADD CONSTRAINT FK_8F663A43FC9C1F2 FOREIGN KEY (v_deviscab_id) REFERENCES v_deviscab (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE p_compte DROP FOREIGN KEY FK_62DB24641E1B500C');
        $this->addSql('ALTER TABLE p_comptemasse DROP FOREIGN KEY FK_DE92877C364F0A59');
        $this->addSql('ALTER TABLE p_compteposte DROP FOREIGN KEY FK_E97C35BBAD1B4C73');
        $this->addSql('ALTER TABLE p_compterubrique DROP FOREIGN KEY FK_7BFC72731BBAD3BB');
        $this->addSql('DROP INDEX UNIQ_3A88095886B470F8 ON p_dossier');
        $this->addSql('DROP INDEX UNIQ_3A88095893B1868E ON p_dossier');
        $this->addSql('ALTER TABLE p_dossier DROP icon');
        $this->addSql('ALTER TABLE p_liens DROP FOREIGN KEY FK_EA5EF8D6325BF1B4');
        $this->addSql('ALTER TABLE p_service DROP FOREIGN KEY FK_E65D73BD364F0A59');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69BA0FAFE9');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69364F0A59');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69423087A6');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69264BA3C7');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69A4D7DA25');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D691BBAD3BB');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69AD1B4C73');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D691E1B500C');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69C9764C54');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D694AA1C608');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D698D97FA13');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D695BDE0EF9');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D69EA30A9B2');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D699E9688FD');
        $this->addSql('ALTER TABLE t_achatdemandeinternecab DROP FOREIGN KEY FK_3D682D696838A35B');
        $this->addSql('ALTER TABLE t_achatdemandeinternedet DROP FOREIGN KEY FK_A89F4BB942048627');
        $this->addSql('ALTER TABLE t_achatdemandeinternedet DROP FOREIGN KEY FK_A89F4BB9BD64F783');
        $this->addSql('ALTER TABLE u_p_affaire DROP FOREIGN KEY FK_D11B77B6E3D54947');
        $this->addSql('ALTER TABLE u_p_partenaire DROP FOREIGN KEY FK_8FF425B8D3AA429B');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875264BA3C7');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD118754AA1C608');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD118751BBAD3BB');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875AD1B4C73');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD118751E1B500C');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875C9764C54');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875CFF77A22');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875FF2F8CF5');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875364F0A59');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875E82317C0');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD11875EA30A9B2');
        $this->addSql('ALTER TABLE ua_t_commandefrscab DROP FOREIGN KEY FK_ABD118759E9688FD');
        $this->addSql('ALTER TABLE ua_t_commandefrsdet DROP FOREIGN KEY FK_3E267EA5BD64F783');
        $this->addSql('ALTER TABLE ua_t_commandefrsdet DROP FOREIGN KEY FK_3E267EA547B4153B');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E98DE13AC');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E611C0C56');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E264BA3C7');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E864310E5');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352EEA30A9B2');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E9E9688FD');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E1BBAD3BB');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352EAD1B4C73');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E1E1B500C');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352EC9764C54');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352ECFF77A22');
        $this->addSql('ALTER TABLE ua_t_facturefrscab DROP FOREIGN KEY FK_1282352E8E54FB25');
        $this->addSql('ALTER TABLE ua_t_facturefrsdet DROP FOREIGN KEY FK_877553FEBD64F783');
        $this->addSql('ALTER TABLE ua_t_facturefrsdet DROP FOREIGN KEY FK_877553FE2152F3E3');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787EC364F0A59');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787ECCFF77A22');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787ECFF2F8CF5');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787EC264BA3C7');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787EC4AA1C608');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787ECEA30A9B2');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787EC9E9688FD');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787EC1BBAD3BB');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787ECAD1B4C73');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787EC1E1B500C');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787ECC9764C54');
        $this->addSql('ALTER TABLE ua_t_livraisonfrscab DROP FOREIGN KEY FK_85B787EC47B4153B');
        $this->addSql('ALTER TABLE ua_t_livraisonfrsdet DROP FOREIGN KEY FK_1040E13CBD64F783');
        $this->addSql('ALTER TABLE ua_t_livraisonfrsdet DROP FOREIGN KEY FK_1040E13CE77EC4D2');
        $this->addSql('ALTER TABLE ua_t_reglementfrs DROP FOREIGN KEY FK_D93911DD364F0A59');
        $this->addSql('ALTER TABLE ua_t_reglementfrs DROP FOREIGN KEY FK_D93911DD7F2DEE08');
        $this->addSql('ALTER TABLE ua_t_reglementfrs DROP FOREIGN KEY FK_D93911DDEA30A9B2');
        $this->addSql('ALTER TABLE ua_t_reglementfrs DROP FOREIGN KEY FK_D93911DD9E9688FD');
        $this->addSql('DROP INDEX IDX_D93911DDEA30A9B2 ON ua_t_reglementfrs');
        $this->addSql('DROP INDEX IDX_D93911DD9E9688FD ON ua_t_reglementfrs');
        $this->addSql('ALTER TABLE ua_t_reglementfrs DROP user_created, DROP user_updated, DROP active, DROP created, DROP updated, CHANGE codereglemnt codereglement VARCHAR(100) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE uarticle DROP FOREIGN KEY FK_1EC491858510D4DE');
        $this->addSql('ALTER TABLE us_groupe DROP FOREIGN KEY FK_1E04B09BEA30A9B2');
        $this->addSql('ALTER TABLE us_groupe DROP FOREIGN KEY FK_1E04B09B9E9688FD');
        $this->addSql('ALTER TABLE us_groupe_permission DROP FOREIGN KEY FK_C31FEDEE74AFF89E');
        $this->addSql('ALTER TABLE us_groupe_permission DROP FOREIGN KEY FK_C31FEDEEA1287883');
        $this->addSql('ALTER TABLE us_groupe_permission DROP FOREIGN KEY FK_C31FEDEE364F0A59');
        $this->addSql('ALTER TABLE us_groupe_permission DROP FOREIGN KEY FK_C31FEDEE103AD41F');
        $this->addSql('ALTER TABLE us_groupe_permission DROP FOREIGN KEY FK_C31FEDEE6585E0F6');
        $this->addSql('ALTER TABLE us_operation DROP FOREIGN KEY FK_176B6B7FEA30A9B2');
        $this->addSql('ALTER TABLE us_operation DROP FOREIGN KEY FK_176B6B7F9E9688FD');
        $this->addSql('ALTER TABLE us_operation DROP FOREIGN KEY FK_176B6B7F103AD41F');
        $this->addSql('ALTER TABLE us_sous_module DROP FOREIGN KEY FK_411A14EBEA30A9B2');
        $this->addSql('ALTER TABLE us_sous_module DROP FOREIGN KEY FK_411A14EB9E9688FD');
        $this->addSql('ALTER TABLE us_sous_module DROP FOREIGN KEY FK_411A14EBA1287883');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64974AFF89E');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649EA30A9B2');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6499E9688FD');
        $this->addSql('ALTER TABLE uv_deviscab DROP FOREIGN KEY FK_9A79225F364F0A59');
        $this->addSql('ALTER TABLE uv_deviscab DROP FOREIGN KEY FK_9A79225F19EB6921');
        $this->addSql('ALTER TABLE uv_deviscab DROP FOREIGN KEY FK_9A79225FF2C56620');
        $this->addSql('ALTER TABLE uv_deviscab DROP FOREIGN KEY FK_9A79225F278140CC');
        $this->addSql('ALTER TABLE uv_deviscab DROP FOREIGN KEY FK_9A79225F17C20267');
        $this->addSql('ALTER TABLE uv_deviscab DROP FOREIGN KEY FK_9A79225F2220C37B');
        $this->addSql('ALTER TABLE uv_devisdet DROP FOREIGN KEY FK_F8E448F8FCA239F');
        $this->addSql('ALTER TABLE uv_devisdet DROP FOREIGN KEY FK_F8E448FEC4A74AB');
        $this->addSql('ALTER TABLE uv_devisdet DROP FOREIGN KEY FK_F8E448F7294869C');
        $this->addSql('ALTER TABLE uv_livraisoncab DROP FOREIGN KEY FK_271573F48FCA239F');
        $this->addSql('ALTER TABLE v_deviscab DROP FOREIGN KEY FK_9D01057422584355');
        $this->addSql('ALTER TABLE v_deviscab DROP FOREIGN KEY FK_9D010574364F0A59');
        $this->addSql('ALTER TABLE v_devisdet DROP FOREIGN KEY FK_8F663A43FC9C1F2');
    }
}
