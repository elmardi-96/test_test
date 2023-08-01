var Encore = require("@symfony/webpack-encore");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore

// directory where compiled assets will be stored
    .setOutputPath("public/build/")
    // public path used by the web server to access the output path
    .setPublicPath("/build")
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

/*
 *
 *   Fichier  Js Parent
 */
.addEntry("app", "./assets/js/app.js")

/*
 *
 *   Fichiers  Js Pour le paramétrage
 *
 */

.addEntry(
        "uppartenaire",
        "./assets/js/components/parametrage/uppartenaire.js"
    )
    .addEntry(
        "pmodepaiement",
        "./assets/js/components/parametrage/pmodepaiement.js"
    )
    .addEntry("pcompte", "./assets/js/components/parametrage/pcompte.js")
    //cb_fabrication.js
    .addEntry("cb_fabrication", "./assets/js/components/code_barre/cb_fabrication.js")

.addEntry("p_projet", "./assets/js/components/parametrage/pprojet.js")
    .addEntry("def_banque", "./assets/js/components/parametrage/def_banque.js")
    .addEntry(
        "p_marche_sous",
        "./assets/js/components/parametrage/p_marche_sous.js"
    )
    .addEntry(
        "p_projet_sous",
        "./assets/js/components/parametrage/p_projet_sous.js"
    )

.addEntry("p_marche", "./assets/js/components/parametrage/pmarche.js")


.addEntry(
        "grs_grille_conge",
        "./assets/js/components/parametrage/grs_grille_conge.js"
    )
    .addEntry(
        "grs_solde_conge",
        "./assets/js/components/parametrage/grs_solde_conge.js"
    )
    .addEntry(
        "us_operation",
        "./assets/js/components/parametrage/us_operation.js"
    )
    .addEntry(
        "us_sous_module",
        "./assets/js/components/parametrage/us_sous_module.js"
    )
    .addEntry("def_devise", "./assets/js/components/parametrage/def_devise.js")
    .addEntry(
        "def_modepaiement",
        "./assets/js/components/parametrage/def_modepaiement.js"
    )
    .addEntry(
        "p_type_conge",
        "./assets/js/components/parametrage/p_type_conge.js"
    )
    .addEntry(
        "def_partenaire",
        "./assets/js/components/parametrage/def_partenaire.js"
    )
    .addEntry(
        "def_partenaire_ty",
        "./assets/js/components/parametrage/def_partenaire_ty.js"
    )
    .addEntry("def_statut", "./assets/js/components/parametrage/def_statut.js")
    .addEntry("xbanque", "./assets/js/components/parametrage/xbanque.js")
    .addEntry("punite", "./assets/js/components/parametrage/punite.js")
    .addEntry("pdossier_organisation", "./assets/js/components/parametrage/pdossier_organisation.js")



.addEntry(
        "p_situation_familiale",
        "./assets/js/components/parametrage/p_situation_familiale.js"
    )
    .addEntry("p_forme", "./assets/js/components/parametrage/p_forme.js")
    .addEntry(
        "p_presentation",
        "./assets/js/components/parametrage/p_presentation.js"
    )
    .addEntry(
        "p_type_contrat",
        "./assets/js/components/parametrage/p_type_contrat.js"
    )
    .addEntry(
        "p_transaction_type",
        "./assets/js/components/parametrage/p_transaction_type.js"
    )
    .addEntry(
        "p_compte_banque",
        "./assets/js/components/parametrage/p_compte_banque.js"
    )
    .addEntry(
        "pcomptemasse",
        "./assets/js/components/parametrage/pcomptemasse.js"
    )
    .addEntry(
        "p_article_nature",
        "./assets/js/components/parametrage/p_article_nature.js"
    )
    //
    .addEntry(
        "p_article_niveau1",
        "./assets/js/components/parametrage/p_article_niveau1.js"
    )
    .addEntry(
        "p_article_niveau2",
        "./assets/js/components/parametrage/p_article_niveau2.js"
    )
    .addEntry(
        "p_article_niveau3",
        "./assets/js/components/parametrage/p_article_niveau3.js"
    )
    .addEntry(
        "p_article_niveau4",
        "./assets/js/components/parametrage/p_article_niveau4.js"
    )

.addEntry(
        "p_nomenclature_standard",
        "./assets/js/components/parametrage/p_nomenclature_standard.js"
    )
    .addEntry(
        "pcompteposte",
        "./assets/js/components/parametrage/pcompteposte.js"
    )
    .addEntry(
        "pcompterubrique",
        "./assets/js/components/parametrage/pcompterubrique.js"
    )
    .addEntry("updevise", "./assets/js/components/parametrage/updevise.js")
    .addEntry("uppiece", "./assets/js/components/parametrage/uppiece.js")
    .addEntry("groupearticle", "./assets/js/components/parametrage/groupearticle.js")

.addEntry("p_poste", "./assets/js/components/parametrage/p_poste.js")
    .addEntry("pdossier", "./assets/js/components/parametrage/pdossier.js")
    .addEntry("usmodule", "./assets/js/components/parametrage/usmodule.js")
    .addEntry("pstatutgrv", "./assets/js/components/parametrage/pstatutgrv.js")
    .addEntry("upservice", "./assets/js/components/parametrage/upservice.js")
    .addEntry("upaffaire", "./assets/js/components/parametrage/upaffaire.js")
    .addEntry(
        "upresponsable",
        "./assets/js/components/parametrage/upresponsable.js"
    )

//configue_module
.addEntry("configue_module", "./assets/js/components/config/config-module.js")

/* .addEntry('jqueryTree', './assets/js/components/bower_components/jquery/dist/jquery.min.js')
         .addEntry('jqueryAngular', './assets/js/components/bower_components/jquery/dist/jquery.min.js')
         .addEntry('angularMin', './assets/js/components/bower_components/angular/angular.min.js')
         .addEntry('angularAnimate', './assets/js/components/bower_components/angular-animate/angular-animate.min.js')
         .addEntry('angularBusy', './assets/js/components/bower_components/angular-busy/dist/angular-busy.js')
         .addEntry('jstree', './assets/js/components/bower_components/jstree/dist/jstree.js')
         .addEntry('toaster', './assets/js/components/bower_components/AngularJS-Toaster/toaster.js')
         .addEntry('ngJsTree', './assets/js/components/bower_components/dist/ngJsTree.js')
         .addEntry('appTree', './assets/js/components/bower_components/app/app.js')
         .addEntry('treeCtrl', './assets/js/components/bower_components/app/treeCtrl.js')*/

.addEntry(
        "archive",
        "./assets/js/components/module_archive/archive/archive.js"
    )
    //.addEntry('appTree', './assets/js/components/module_archive/bower_components/app/app.js')
    .addEntry("projet", "./assets/js/components/module_archive/projet/projet.js")

.addEntry(
        "archiveV1",
        "./assets/js/components/module_archive_V1/archive/archive.js"
    )
    //.addEntry('appTree', './assets/js/components/module_archive/bower_components/app/app.js')
    .addEntry(
        "projetV1",
        "./assets/js/components/module_archive_V1/projet/projet.js"
    )
    /*
     *
     *   Fichiers  Js Pour le module Stock
     *
     *
     */
    .addEntry("uarticle", "./assets/js/components/parametrage/uarticle.js")
    .addEntry(
        "ucategoriearticle",
        "./assets/js/components/parametrage/ucategoriearticle.js"
    )
    .addEntry("udepot", "./assets/js/components/parametrage/udepot.js")
    .addEntry("test", "./assets/js/components/stock/test.js")
    .addEntry("demande", "./assets/js/components/demand_stock/demande.js")


/*
 *
 *   Fichiers  Js Pour le module achat
 *
 *
 */
//  .addEntry(
//    "moduleachatcommandefsr",
//    "./assets/js/components/module_achat/moduleachatcommandefsr.js"
//  )
//  .addEntry(
//    "moduleachatlivraisonfrs",
//    "./assets/js/components/module_achat/moduleachatlivraisonefrs.js"
//  )
//  .addEntry(
//    "moduleachatfacturefrs",
//    "./assets/js/components/module_achat/moduleachatfacturefrs.js"
//  )
//  .addEntry(
//    "moduleachatreglement",
//    "./assets/js/components/module_achat/moduleachatreglement.js"
//  )
//        .addEntry('udepot', './assets/js/components/stock/udepot.js')

/*
 *
 *   Fichiers  Js Pour le module conge
 *
 *
 */
.addEntry(
        "grs_conge",
        "./assets/js/components/module_ressource_humaine/grs_conge.js"
    )
    .addEntry(
        "validation_conge",
        "./assets/js/components/module_ressource_humaine/validation_conge.js"
    )
    .addEntry(
        "affectation_conge",
        "./assets/js/components/module_ressource_humaine/affectation_conge.js"
    )
    .addEntry(
        "grs_employe",
        "./assets/js/components/module_ressource_humaine/grs_employe.js"
    )
    .addEntry(
        "grs_paie",
        "./assets/js/components/module_ressource_humaine/grs_paie.js"
    )
    .addEntry(
        "grs_paie_cnss",
        "./assets/js/components/module_ressource_humaine/grs_paie_cnss.js"
    )

.addEntry(
    "grs_note_interne",
    "./assets/js/components/module_ressource_humaine/grs_note_interne.js"
)

/***
 *
 * transfomation
 *
 */

.addEntry(
    "commande_transformation",
    "./assets/js/components/transformation/trcommande.js"
)

/*
 *
 *   Fichiers profil utilisateur
 *
 *
 */
.addEntry("profil", "./assets/js/components/user/profil.js")
.addEntry("signature", "./assets/js/components/signature/signature.js")


/*
 *
 *   module achat ugouv
 *
 *
 */

 .addEntry(
        "marche",
        "./assets/js/components/module_marche/marche.js"
    )

.addEntry(
        "tachatdemandeinternecab",
        "./assets/js/components/module_achat/tachatdemandeinternecab.js"
    )
    .addEntry("reporting", "./assets/js/components/module_achat/reporting.js")
    .addEntry("tr_reporting", "./assets/js/components/tresorerie/reporting.js")
    .addEntry("eci", "./assets/js/components/tresorerie/eci.js")
    .addEntry("gainPerte", "./assets/js/components/tresorerie/gainPerte.js")
    .addEntry("dashboard", "./assets/js/components/module_achat/dashboard.js")
    .addEntry(
        "dashboard_vente",
        "./assets/js/components/module_vente/dashboard.js"
    )
    .addEntry(
        "tcommandefrscab",
        "./assets/js/components/module_achat/tcommandefrscab.js"
    )
    .addEntry("reporting_client", "./assets/js/components/module_vente/reporting.js")
    .addEntry(
        "tfacturefrscab",
        "./assets/js/components/module_achat/tfacturefrscab.js"
    )
    //tfacturefrscabavoir
    .addEntry(
        "tfacturefrscabavoir",
        "./assets/js/components/module_achat/tfacturefrscabavoir.js"
    )
    //tfacturefrscabacompte
    .addEntry(
        "tfacturefrscabacompte",
        "./assets/js/components/module_achat/tfacturefrscabacompte.js"
    )
    .addEntry(
        "treglementfrscab",
        "./assets/js/components/module_achat/treglementfrscab.js"
    )
    .addEntry(
        "tlivraisonfrscab",
        "./assets/js/components/module_achat/tlivraisonfrscab.js"
    )

.addEntry("uvdevis", "./assets/js/components/uvdevis.js")
    .addEntry("uventedevis", "./assets/js/components/module_vente/devis.js")
    .addEntry("uventecommande", "./assets/js/components/module_vente/commande.js")
    .addEntry("commun", "./assets/js/components/commun.js")
    .addEntry("base2", "./assets/js/components/base2.js")
    .addEntry("us_groupe", "./assets/js/components/us_groupe.js")
    .addEntry("user", "./assets/js/components/user.js")
    .addEntry("config", "./assets/js/components/config.js")
    .addEntry("pdf", "./assets/js/components/pdf.js")

.addEntry("erpclient", "./assets/js/components/erp_client/erp_client.js")


.addEntry(
        "Vtfacturefrscab",
        "./assets/js/components/module_vente/Vtfacturefrscab.js"
    )
    .addEntry(
        "treglementfrscabVente",
        "./assets/js/components/module_vente/treglementfrscabVente.js"
    )
    .addEntry(
        "livraisoncab",
        "./assets/js/components/module_vente/livraisoncab.js"
    )

.addEntry("alimentation", "./assets/js/components/tresorerie/alimentation.js")
.addEntry("ecriturecomptable_operation", "./assets/js/components/ecriture_comptable/operation.js")
.addEntry("ecriturecomptable_export", "./assets/js/components/ecriture_comptable/export.js")
.addEntry("ecriturecomptable_charge", "./assets/js/components/ecriture_comptable/charge.js")

.addEntry("ecriturecomptable_generale", "./assets/js/components/ecriture_comptable/generale.js")

.addEntry("ecriturecomptable_suivi", "./assets/js/components/ecriture_comptable/suivi.js")
.addEntry("ecriturecomptable_liste_ecriture", "./assets/js/components/ecriture_comptable/liste_ecriture.js")

.addEntry("compte", "./assets/js/components/tresorerie/compte.js")
.addEntry("treso", "./assets/js/components/tresorerie/treso.js")
.addEntry("caisse", "./assets/js/components/tresorerie/caisse.js")
.addEntry("gestionCaisse", "./assets/js/components/module_gestion_commun/gestion_caisse.js")
.addEntry("alimentationCaisse", "./assets/js/components/module_gestion_caisse/alimentation.js")
.addEntry("gestionCarte", "./assets/js/components/module_gestion_commun/gestion_carte.js")
.addEntry("operation", "./assets/js/components/tresorerie/operation.js")

.addEntry("charge", "./assets/js/components/tresorerie/charge.js")
    .addEntry("virement", "./assets/js/components/tresorerie/virement.js")
    .addEntry("transaction", "./assets/js/components/tresorerie/transaction.js")
    .addEntry("general_operation", "./assets/js/components/tresorerie/general_operation.js")
    .addEntry("compte_consolides", "./assets/js/components/tresorerie/compte_consolides.js")
    .addEntry("p_departement", "./assets/js/components/parametrage/p_departement.js")
    .addEntry("proforma", "./assets/js/components/module_vente/proforma.js")

/*
 *
 *   module univ
 *
 *
 */


/*
  .addEntry(
    "univ_etudiant",
    "./assets/js/components/module_univ/etudiant/etudiant.js"
  )
  .addEntry(
    "univ_concours",
    "./assets/js/components/module_univ/concours/concours.js"
  )
  .addEntry(
    "univ_p_concours",
    "./assets/js/components/module_univ/concours/p_concours.js"
  )
  .addEntry(
    "univ_preinscription",
    "./assets/js/components/module_univ/preinscription/preinscription.js"
  )
  .addEntry(
    "univ_admission",
    "./assets/js/components/module_univ/admission/admission.js"
  )
  .addEntry(
    "univ_inscription",
    "./assets/js/components/module_univ/inscription/inscription.js"
  )
  .addEntry(
    "univ_programmation",
    "./assets/js/components/module_univ/programmation/programmation.js"
  )
  .addEntry(
    "univ_planning",
    "./assets/js/components/module_univ/planning/planning.js"
  )
  .addEntry(
    "univ_groupe",
    "./assets/js/components/module_univ/groupe/groupe.js"
  )
  .addEntry(
    "univ_facturation",
    "./assets/js/components/module_univ/facturation/facturation.js"
  )
  .addEntry(
    "univ_impression",
    "./assets/js/components/module_univ/impression/impression.js"
  )
  .addEntry(
    "univ_bordereaux",
    "./assets/js/components/module_univ/bordereaux/bordereaux.js"
  )

  .addEntry(
    "univ_preinscription_grille",
    "./assets/js/components/module_univ/preinscriptionGrille/preinscription_grille.js"
  )
  .addEntry(
    "univ_anonymat",
    "./assets/js/components/module_univ/anonymat/anonymat.js"
  )
  .addEntry(
    "univ_honoraire_bordereaux",
    "./assets/js/components/module_univ/honoraire/hbordereaux.js"
  )
  .addEntry(
    "univ_honoraire",
    "./assets/js/components/module_univ/honoraire/honoraire.js"
  )

  .addEntry(
    "univ_epreuve",
    "./assets/js/components/module_univ/evaluation/epreuve.js"
  )
  .addEntry(
    "univ_epreuve_moyenne",
    "./assets/js/components/module_univ/evaluation/epreuve_moyenne.js"
  )
  .addEntry(
    "univ_module_moyenne",
    "./assets/js/components/module_univ/evaluation/module_moyenne.js"
  )
  .addEntry(
    "univ_annee_moyenne",
    "./assets/js/components/module_univ/evaluation/annee_moyenne.js"
  )
  .addEntry(
    "univ_semestre_moyenne",
    "./assets/js/components/module_univ/evaluation/semestre_moyenne.js"
  )
  .addEntry(
    "univ_element_moyenne",
    "./assets/js/components/module_univ/evaluation/element_moyenne.js"
  )
  .addEntry(
    "univ_epreuve_datatable",
    "./assets/js/components/module_univ/evaluation/datatable.js"
  )
  .addEntry(
    "univ_data_select",
    "./assets/js/components/module_univ/data_select/data_select.js"
  )


   
  
  .addEntry(
    "univ_p_matiere",
    "./assets/js/components/parametrage/univ_p_matiere.js"
  )
  .addEntry(
    "univ_p_couleur",
    "./assets/js/components/parametrage/univ_p_couleur.js"
  )
  .addEntry(
    "univ_ac_etablissement",
    "./assets/js/components/parametrage/univ_ac_etablissement.js"
  )
  .addEntry(
    "univ_x_modalite",
    "./assets/js/components/parametrage/univ_x_modalite.js"
  )
  .addEntry(
    "univ_x_academie",
    "./assets/js/components/parametrage/univ_x_academie.js"
  )
 
 
  .addEntry(
    "univ_p_document",
    "./assets/js/components/parametrage/univ_p_document.js"
  )
 
  .addEntry(
    "univ_p_enseignant",
    "./assets/js/components/parametrage/univ_p_enseignant.js"
  )
  .addEntry(
    "univ_p_estatut",
    "./assets/js/components/parametrage/univ_p_estatut.js"
  )
  .addEntry(
    "univ_p_organisme",
    "./assets/js/components/parametrage/univ_p_organisme.js"
  )
  .addEntry(
    "univ_p_signataire",
    "./assets/js/components/parametrage/univ_p_signataire.js"
  )
  .addEntry(
    "univ_p_statut",
    "./assets/js/components/parametrage/univ_p_statut.js"
  )
  .addEntry(
    "univ_p_salle",
    "./assets/js/components/parametrage/univ_p_salle.js"
  )
  .addEntry(
    "univ_d_service",
    "./assets/js/components/parametrage/univ_d_service.js"
  )
  .addEntry(
    "univ_pr_nature_epreuve",
    "./assets/js/components/parametrage/univ_pr_nature_epreuve.js"
  )
  .addEntry(
    "univ_p_charge_facture",
    "./assets/js/components/parametrage/univ_p_charge_facture.js"
  )
  .addEntry(
    "univ_p_statut_epreuve",
    "./assets/js/components/parametrage/univ_p_statut_epreuve.js"
  )
  .addEntry(
    "univ_p_type_element",
    "./assets/js/components/parametrage/univ_p_type_element.js"
  )
  .addEntry(
    "univ_p_ville",
    "./assets/js/components/parametrage/univ_p_ville.js"
  )
  .addEntry(
    "univ_x_banque",
    "./assets/js/components/parametrage/univ_x_banque.js"
  )
  .addEntry(
    "univ_x_serie_bac",
    "./assets/js/components/parametrage/univ_x_serie_bac.js"
  )
  .addEntry(
    "univ_p_grade",
    "./assets/js/components/parametrage/univ_p_grade.js"
  )
  .addEntry(
    "univ_p_diplome",
    "./assets/js/components/parametrage/univ_p_diplome.js"
  )
  .addEntry(
    "univ_p_document_attribution",
    "./assets/js/components/parametrage/univ_p_document_attribution.js"
  )
  .addEntry(
    "univ_p_mesure_alerte",
    "./assets/js/components/parametrage/univ_p_mesure_alerte.js"
  )
  .addEntry(
    "univ_p_situation",
    "./assets/js/components/parametrage/univ_p_situation.js"
  )
  .addEntry(
    "univ_p_nature_alerte",
    "./assets/js/components/parametrage/univ_p_nature_alerte.js"
  )
  .addEntry(
    "univ_p_frais_categorie",
    "./assets/js/components/parametrage/univ_p_frais_categorie.js"
  )
  .addEntry(
    "univ_p_etage",
    "./assets/js/components/parametrage/univ_p_etage.js"
  )
  .addEntry(
    "univ_p_frais",
    "./assets/js/components/parametrage/univ_p_frais.js"
  )
  .addEntry(
    "univ_p_delai_paiement",
    "./assets/js/components/parametrage/univ_p_delai_paiement.js"
  )
  .addEntry(
    "univ_p_enseignant_grille",
    "./assets/js/components/parametrage/univ_p_enseignant_grille.js"
  )
  .addEntry(
    "univ_ac_module",
    "./assets/js/components/parametrage/univ_ac_module.js"
  )
  .addEntry(
    "univ_ac_element",
    "./assets/js/components/parametrage/univ_ac_element.js"
  )
  .addEntry(
    "univ_p_batiment",
    "./assets/js/components/parametrage/univ_p_batiment.js"
  )
  .addEntry(
    "univ_p_direction",
    "./assets/js/components/parametrage/univ_p_direction.js"
  )
  .addEntry(
    "univ_ac_formation",
    "./assets/js/components/parametrage/univ_ac_formation.js"
  )
  .addEntry(
    "univ_x_langue",
    "./assets/js/components/parametrage/univ_x_langue.js"
  )
  .addEntry(
    "univ_x_filiere",
    "./assets/js/components/parametrage/univ_x_filiere.js"
  )
  .addEntry(
    "univ_x_type_bac",
    "./assets/js/components/parametrage/univ_x_type_bac.js"
  )
  .addEntry(
    "univ_nature_demande",
    "./assets/js/components/parametrage/univ_nature_demande.js"
  )
 
  .addEntry(
    "univ_ac_departement",
    "./assets/js/components/parametrage/univ_ac_departement.js"
  )
  .addEntry(
    "univ_ac_promotion",
    "./assets/js/components/parametrage/univ_ac_promotion.js"
  )
  .addEntry(
    "univ_ac_semestre",
    "./assets/js/components/parametrage/univ_ac_semestre.js"
  )
  .addEntry(
    "univ_ac_annee",
    "./assets/js/components/parametrage/univ_ac_annee.js"
  )

  */



//.addEntry('page1', './assets/js/page1.js')

// When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
.splitEntryChunks()

// will require an extra script tag for runtime.js
// but, you probably want this, unless you're building a single-page app
.enableSingleRuntimeChunk()

/*
 * FEATURE CONFIG
 *
 * Enable & configure other features below. For a full
 * list of features, see:
 * https://symfony.com/doc/current/frontend.html#adding-more-features
 */
.cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

// enables @babel/preset-env polyfills
.configureBabel(() => {}, {
    useBuiltIns: "usage",
    corejs: 3,
})

// enables Sass/SCSS support
//.enableSassLoader()

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
//.enableIntegrityHashes(Encore.isProduction())

// uncomment if you're having problems with a jQuery plugin
.autoProvidejQuery();

// uncomment if you use API Platform Admin (composer req api-admin)
//.enableReactPreset()
//.addEntry('admin', './assets/js/admin.js')

module.exports = Encore.getWebpackConfig();