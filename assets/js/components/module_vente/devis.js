const routes = require("../../../../public/js/fos_js_routes.json");
import Routing from "../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";
Routing.setRoutingData(routes);
//plugins/steps/jquery.steps.css
require("../../../../assets/js/plugins/steps/jquery.steps.css");
require("../../../../assets/js/plugins/steps/jquery.steps.min.js");
require("../../../../assets/js/plugins/validate/jquery.validate.min.js");
import { ShowFormErrors } from "../../ManagementErrors/index.js";
import * as Ladda from "ladda";
import * as CustomSearchDatatable from "../../ManagementSearchDatatable/customSearch.js";
import { deleteCab } from "../../functions/delete.js";
function create_custom_dropdowns(element, att) {
  $.fn.select2.amd.define("select2/i18n/fr", [], function () {
    // Russian
    return {
      errorLoading: function () {
        return "test";
      },
      inputTooLong: function (args) {
        var overChars = args.input.length - args.maximum;
        var message = "Пожалуйста, удалите " + overChars + " символ";
        if (overChars >= 2 && overChars <= 4) {
          message += "а";
        } else if (overChars >= 5) {
          message += "ов";
        }
        return message;
      },
      inputTooShort: function (args) {
        var remainingChars = args.minimum - args.input.length;

        var message =
          "Tapez " +
          remainingChars +
          " caractère ou plus pour faire des recherches";

        return message;
      },
      loadingMore: function () {
        return "test";
      },
      maximumSelected: function (args) {
        var message = "Вы можете выбрать " + args.maximum + " элемент";

        if (args.maximum >= 2 && args.maximum <= 4) {
          message += "а";
        } else if (args.maximum >= 5) {
          message += "ов";
        }

        return message;
      },
      noResults: function () {
        return "aucun resultat trouve";
      },
      searching: function () {
        return "Rechercher…";
      },
    };
  });
  window.element = element;
  window.att = "current_select_" + att;
  if (window.element.attr("data-entity")) {
    $.ajax({
      type: "GET",
      url: Routing.generate("t_achatdemandeinternecab_find_article_term", {
        selected: att,
        entity: window.element.attr("data-entity"),
        column: window.element.attr("data-column"),
      }),
    }).then(function (data) {
      console.log(data);
      window.element
        .prepend('<option selected=""></option>')
        .select2({
          //allowClear: true,
          language: "fr",
          data: data.results,
          minimumResultsForSearch: -1,
          dropdownCssClass: window.att,
        })
        .val(att)
        .trigger("change");
      $(".load-er").fadeOut(70).remove();
      $(".det_for").fadeIn(70);
    });
  } else {
    // toastr.warning('impossible de charger l\'entiter', 'Erreur', {timeOut: 4000})
  }
  //apply to select2
  window.element.on("select2:open", function (e) {
    console.log($(this));

    window.element = $(this);

    //alert()
    $(".ttp").remove();
    $(" .select2-search--hide").after(
      '<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>'
    );
    $(".tt").typeWatch({
      highlight: false,
      wait: 100,
      captureLength: 2,
      callback: function (valuennn, e) {
        console.log(e);
        $(".select2-results__option").hide();
        $(".select2-results").prepend(
          '<p class="select2-results__option">Rechercher…</p>'
        );

        window.search = valuennn;
        //alert((valuennn))
        if (window.element.attr("data-entity")) {
          $.ajax({
            dataType: "json",
            url: Routing.generate(
              "t_achatdemandeinternecab_find_article_term",
              {
                term: valuennn,
                selected: att,
                entity: window.element.attr("data-entity"),
                column: window.element.attr("data-column"),
              }
            ),
            success: function (result, textStatus, errorThrown) {
              if (valuennn == $(".tt").val()) {
                window.element
                  .empty()
                  .prepend('<option selected=""></option>')
                  .select2({
                    language: "fr",
                    //allowClear: true,
                    minimumResultsForSearch: -1,
                    data: result.results,
                  })
                  .val(att)
                  .trigger("change");
                window.element.select2("open");
                // $(".tt").trigger("focus");
                document.querySelector('.tt').focus();

                //alert(this.value)
                //alert(valuennn)
                // alert('test')
                $(".tt").val(window.search);
              }
            },
          });
        } else {
          toastr.warning("impossible de charger l'entiter", "Erreur", {
            timeOut: 4000,
          });
        }
      },
    });
  });

  window.element.on("select2:select", function (e) {
    //alert()
    var data = e.params.data;
    $(".prixunitaire").val(data.prixAchat);
    $(".tva").val(data.tva);
    $(".remise").val(data.remise);

    
    $(".select2_unite").val(data.unite).trigger("change");
  });

  $("body").on("click", ".select2-container", function () {
    $(".tt").trigger("focus");
  });
}
const Swal = require("sweetalert2");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle",
  },
  buttonsStyling: false,
});

var iceTierValide = false;
var idDevisTiers="";
var idTiers="";
$("body").on("click", ".btn-maj-ice", function (e) {
  var button = $(".btn-maj-ice");
  button.prop("disabled", true)
  $(".error-custom").hide();
  $(".error-custom").html('');
  var ice_tiers = $("#ice-tiers").val();
  var nom_tiers = $("#nom-tiers").val();
  var tel_tiers = $("#tel-tiers").val();
  if (ice_tiers && /^\d+$/.test(ice_tiers) && ice_tiers.length==15 && idTiers&& nom_tiers && tel_tiers) {
      $.ajax({
          type: "POST",
          url: Routing.generate("mise_a_jour_ice_devis", {
              id: idTiers, ice: ice_tiers
          }),
          data: {
            nom_tiers: nom_tiers,
            tel_tiers: tel_tiers,
          },
          success: function (result) {
              iceTierValide = true;
              idTiers="";
              button.prop("disabled", false)
              $("#create_devis").trigger('click');
              $("#ModalAddICE").modal("hide");
              
          },
      });
  } else {
      if(!ice_tiers){
        $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i>Veuillez remplir ce champ.");
        $(".ice_tiers").show();
        // toastr.warning("Veuillez remplir le champ ICE ", "warning", {timeOut: 4000}); 
      }
      else if(! /^\d+$/.test(ice_tiers) ){
          $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i>Veuillez saisir des chiffres.");
          $(".ice_tiers").show();
          // toastr.warning("Veuillez saisir des chiffres ", "warning", {timeOut: 4000}); 
      }
      else if(ice_tiers.length!=15){
          $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i> ICE incorrect, vérifier l'ICE saisi</b>.");
          $(".ice_tiers").show();
          // toastr.warning("le champ ICE doit contenir <b>15 chiffres</b> ", "warning", {timeOut: 4000}); 
      }
      else if(!nom_tiers){
      $(".nom_tiers").html("<i class='fas fa-exclamation-triangle'></i> Veuillez remplir ce champ.");
      $(".nom_tiers").show();
      // toastr.warning("Veuillez remplir le champ Nom ", "warning", {timeOut: 4000}); 
      }
      else if(!tel_tiers){
      $(".tel_tiers").html("<i class='fas fa-exclamation-triangle'></i> Veuillez remplir ce champ.");
      $(".tel_tiers").show();
      // toastr.warning("Veuillez remplir le champ Tel ", "warning", {timeOut: 4000}); 
      }
    button.prop("disabled", false) 
  }
  e.preventDefault();
});

$("#create_devis").click(function (e) {
  var form_name = $(".form").attr("name");
  $(".error-custom").hide();
  $(".error-custom").html('');
  if(!iceTierValide){
    // idDevisTiers =dta.get("_id");
    idTiers = $('#uv_deviscab_client').val();
    if(!idTiers){
        toastr.warning("Veuillez choisir le Client ", "warning", {timeOut: 4000});    
        $("#create_devis").removeClass( "disabled" );
    }
    $.ajax({
        type: "POST",
        url: Routing.generate("checkIceDevis", {
            id: idTiers, 
        }),
        success: function (result) {
            if(result=='empty'){
              var tiers = $("#uv_deviscab_client option:selected").text();
                $("#ModalAddICE #nom_tiers").html(tiers);
                $('#ModalAddICE input').val('');
                $("#ModalAddICE").modal("show");
            }else{
                iceTierValide = true;
                idTiers="";
                $("#create_devis").trigger('click');
            }
            
        },
    });
    return;
  }
//var params = $('.form').serializeArray();
  // var dta = new FormData($("#t_achatdemandeinternecab")[0]);
  $("#create_devis").addClass( "disabled" );

  var formData = new FormData();
  var params = $('.form').serializeArray();

  $.each(params, function (i, val) {
      formData.append(val.name, val.value);
      //  console.log(val.name);

  });

  const data = JSON.stringify(formDataDetail)
  formData.append('detail', data);

  const articles = JSON.stringify(allArticles);
  formData.append('allArticles', articles);



  var selector = $(".form");
  var l = Ladda.create(document.querySelector(".my-button"));
  l.start();
  $.ajax({
      type: "POST",
      url: Routing.generate("uv_deviscab_insert"),
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
          // l.stop();
          $(".errors-list").remove();
          if (result.customErrors) {
              $.each(result.customErrors, function (i, value) {
                  $(".form #" + i).after(
                          "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                          value +
                          "</span></span></span>"
                          );
              });

              // $('#'+)
          } else if (result.errors) {
              //dump(result.errors);
            ShowFormErrors(selector, form_name, result.errors);
            $("#create_devis").removeClass( "disabled" );
            
          } else if (result.empty) {
              toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
              });
              $("#create_devis").removeClass( "disabled" );
              
          } else if (result.dossierEmpty) {
            toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000,
            });
            $("#create_devis").removeClass( "disabled" );
            
          }else if (result.data) {
              // alert(result.data.id);
              toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
              });
              var url = Routing.generate("uv_deviscab_show", {
                  id: result.data.id,
              });
              window.location.href = url;
          }
      },
      error: function (jqXHR, textStatus, errorThrown) {
          l.stop();
          toastr.error("Erreur", errorThrown, {timeOut: 4000});
          $("#create_devis").removeClass( "disabled" );
      },
  });
  e.preventDefault();
});





var array_detail = [];
var errors_details = [];
var formDataDetail = [];
var nameDetail = "";
var editColumn = null;
var editArticleColumn = null;
document.addEventListener('DOMContentLoaded', function () {
  errors_details = jQuery.parseJSON($('.errors_details').attr('errors'));
  nameDetail = $('.errors_details').attr('name');
  $('.errors_details').remove();

  // or with jQuery
  //var isAuthenticated = $('.js-user-rating').data('isAuthenticated');
});

function getHt(row) {
  return row.quantite * row.prixunitaire;
}
function getTva(row) {
  var prixTva = (getHt(row) * row.tva) / 100;

  prixTva = prixTva - ((prixTva * row.remise) / 100);

  return prixTva;
}
function getRemise(row) {
  return ((getHt(row)) * (row.remise) / 100);
}
function getPrixTTc(row) {
  return row.prixttc = getHt(row) + getTva(row) - getRemise(row);
}


// ---------------------------

  // alert('test');

  const articles = JSON.stringify(allArticles);

  // -----------

var allArticles = [];
var AricleSelected = "";
var action = "ajouter";


function remplirTable() {

    var tr = "";
    allArticles.some(function(element, index, _arr) {


        var Prix_Qte = parseFloat(element.prixUntaire) * parseFloat(element.qte);
        var Prix_Tva = parseFloat(element.prixUntaire) * parseFloat(element.tva);
        var Prix_Remise = parseFloat(element.prixUntaire) * parseFloat(element.remise);

        var Montant = Prix_Qte + Prix_Tva - Prix_Remise;

        if (element.AricleSelected === AricleSelected) {
            tr = tr + '<tr style="d-flex align-items-center"  id="tr_actions_' + index + '">' +
                '<td class="article">' + element.article + '</td>' +
                '<td class="qte">' + element.qte + '</td>' +
                '<td class="prixUntaire">' + element.prixUntaire + '</td>' +
                '<td class="tva">' + element.tva + '</td>' +
                '<td class="remise">' + element.remise + '</td>' +
                '<td class="montant text-center">' + Montant + '</td>' +
                '<td style="width: 11% ;" class="text-center ua_technique" >' +
                '<a class="btn btn-white btn-xs upper  ua_edit"   id="' + index + '"><i class="fa fa-edit text-primary "></i></a> ' +
                '<a class="btn btn-white btn-xs upper  ua_suppimer_ligne" id="' + index + '"><i class="fa fa-trash text-danger "></i></a> </td>' +
                '</tr>';
        }

    });

    $(".waves-ripple").remove();
    var formTr = $('tbody > #ua_technique_form').html();
    $('#ua_technique_table > tbody').html(tr);
    $('#ua_technique_table > tbody').append('<tr id="ua_technique_form">' + formTr + '</tr>');
    console.log( tr);


}


$("body").on("click", ".ua_technique > .add_form_ua", function(e) {



    verifierForm();
    if (verifierForm() != "") {
        return false;
    }


    if (action == "ajouter") {
        var Article = {};
        Article['article'] = $('#devis_technique_det_article').val();
        Article['qte'] = $('#devis_technique_det_qte').val();
        Article['prixUntaire'] = $('#devis_technique_det_prixUntaire').val();
        Article['tva'] = $('#devis_technique_det_tva').val();
        Article['remise'] = $('#devis_technique_det_remise').val();
        Article['AricleSelected'] = AricleSelected;
        allArticles.push(Article);

    } else {

        allArticles[action].article = $('#devis_technique_det_article').val();
        allArticles[action].qte = $('#devis_technique_det_qte').val();
        allArticles[action].prixUntaire = $('#devis_technique_det_prixUntaire').val();
        allArticles[action].tva = $('#devis_technique_det_tva').val();
        allArticles[action].remise = $('#devis_technique_det_remise').val();
        action = "ajouter";
    }


    remplirTable();
    $('.ua_confirmer_annuler').fadeIn();
    $('.fermer_ua_technique_det').fadeOut();

});

$("body").on('click', '.ua_supprimer_article', function() {
    for (var i = 0; i < allArticles.length; i++) {
        if (allArticles[i].AricleSelected === AricleSelected) {
            allArticles.splice(i, 1);
            i--;
        }
    }
    remplirTable();
    $('.ua_confirmer_annuler').fadeOut();
    $('.fermer_ua_technique_det').fadeIn();

});

$("body").on('click', '.ua_confirmer', function() {
    // $('.ua_success').fadeIn();
    // setTimeout(function () {
    //     $('.ua_success').fadeOut();
    // }, 3000); 
    toastr.success('vous avez bien confirmé', 'Confirmation', {
        timeOut: 4000,
    });
    $("#ModalDocume").modal("hide");
    $('.fermer_ua_technique_det').fadeOut();

});


$("body").on('click', '.ua_edit', function() {

    action = $(this).attr('id');
    remplirTable();
    var idLine = $(this).attr('id');
    var Article = allArticles[idLine];

    $('#devis_technique_det_article').val(Article.article);
    $('#devis_technique_det_qte').val(Article.qte);
    $('#devis_technique_det_prixUntaire').val(Article.prixUntaire);
    $('#devis_technique_det_tva').val(Article.tva);
    $('#devis_technique_det_remise').val(Article.remise);

    var formTr = $('tbody > #ua_technique_form').get();
    $('#tr_actions_' + idLine).before(formTr);
    $('#tr_actions_' + idLine).remove();
});


$("body").on('click', '.ua_suppimer_ligne', function() {
    var idLine = $(this).attr('id');
    allArticles.some(function(element, index, _arr) {
        if (index == idLine) {
            allArticles.splice(index, 1);
        }
    });
    remplirTable();
});

function verifierForm() {
    var message = "";
    $("#ua_technique_form input").each(function() {
        var element = $(this);
        if (element.val() == "") {
            message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs " + $(this).attr('class').split(' ').pop() + "<br>";
            $('.ua_alert_danger').html(message);
        }
    });

    if (message == "") {
        $("#ua_technique_form input").each(function() {

            var element = $(this);
            if (element.attr('id') != 'devis_technique_det_article') {
                var val = element.val();
                var floatValues = /[+-]?([0-9]*[.])?[0-9]+/;
                console.log(val.match(floatValues));
                if (val.match(floatValues) && !isNaN(val)) {} else {
                    message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " + $(this).attr('class').split(' ').pop() + "<br>";
                    $('.ua_alert_danger').html(message);

                }
            }
        });
    }


    if (message != "") {
        $('.ua_alert_danger').fadeIn();
    } else {
        $('.ua_alert_danger').fadeOut();
    }
    return message;
}

$("body").on('click', '.importer_canvas', function() {
    $('#ua_import_modal').modal('show');
});
$("body").on('click', '.fermer_ua_import_modal', function() {
    $('#ua_import_modal').modal('hide');
});

$('#file').on('change', function() {
    console.log($(this).val());
    var value = $(this).val().split(".");
    var extention = value[value.length - 1];
    if (extention != 'xlsx') {
        toastr.warning("veuillez choisir un fichier xlsx", "warning ", { timeOut: 4000 });
    }
});

// alert('ziko');

$('#ua_import_form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: Routing.generate("import_ua_det"),
        method: "POST",
        data: new FormData(this),
        dataType: 'json',
        contentType: false,
        cache: false,
        processData: false,
        success: function(result) {
            // console.log(result);
            if (result.hasOwnProperty('message')) {
                if (result.message.title === "err") {
                    toastr.warning("Warning", result.message.text, { timeOut: 4000 });
                }
            } else {
                result.some(function(element, index, _arr) {
                  var Article = {};
                  console.log(element);
                  Article['article'] = element.article;
                  Article['qte'] = element.qte;
                  Article['prixUntaire'] = element.prixUntaire;
                  Article['tva'] = element.tva;
                  Article['remise'] = element.remise;
                  Article['AricleSelected'] = AricleSelected;
                  console.log(Article);
                  allArticles.push(Article);
                  remplirTable();
                });
                $('#ua_import_modal').modal('hide');

            }
            $('#file').val('');

        }

    });
});


function verifierFloat() {

    // var message = "";
    // $("#ua_technique_form input").each(function() {
    //     var element = $(this);
    //     if (element.attr('id') != 'devis_technique_det_article'){
    //         if(isNaN(parseFloat(element.val()))  ){
    //             message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " +$(this).attr('class').split(' ').pop() + "<br>";
    //             $('.ua_alert_danger').html(message);
    //         }
    //     }

    // });
    // $("#ua_technique_form input").each(function() {
    //     var element = $(this);
    //     if (element.attr('id') != 'devis_technique_det_article'){
    //         var val = element.val();
    //         console.log(element.val());
    //         var floatValues =  /[+-]?([0-9]*[.])?[0-9]+/;
    //         if (val.match(floatValues) && !isNaN(val)) {
    //         }else{
    //             message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " +$(this).attr('class').split(' ').pop() + "<br>";
    //             $('.ua_alert_danger').html(message);

    //         }
    //     }

    // });



    // if(message != ""){
    //     $('.ua_alert_danger').fadeIn();
    // }else{
    //     $('.ua_alert_danger').fadeOut();
    // }
    //  return message;
}




var articlesDet = [];

// -----------


// ---------------------------

$(".new").on("click", ".detail_form", function (e) {


  // alert("najim");

    var test = false;

    //alert();
    AricleSelected = $('#' + nameDetail + '_article').select2('data')[0].id;
    var unite = $('#select2-uv_devisdet_unite-container').attr('title');
    if(AricleSelected == ""){
      toastr.error("Veuillez selectionner un article", "Error", {
        timeOut: 4000,
    });
    return
    }



  
      $('.error-class-tab').remove();
      var flag = 0;
      
      for (let index = 0; index < formDataDetail.length; index++) {
          if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id && editArticleColumn != formDataDetail[index].articleId ) {
              // return $('#' + nameDetail + '_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
              toastr.error("Ce article est deja existe", "Error", {
                timeOut: 4000,
            });
            return
            }
  
      }
      for (let index = 0; index < errors_details.length; index++) {
          var name = nameDetail + '[' + errors_details[index].property + ']';
          var value = $('[name="' + nameDetail + '[' + errors_details[index].property + ']' + '"]').val();
  
          if (errors_details[index].cause == null && value == '') {
              flag = 1;
              $('[name="' + name + '"]').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[index].message + "</span></span></span>"));
          }
      }
      if (flag == 1) {
          return false;
      }


    if (unite == 'E') {
        $("#ModalDocume").modal("show");
        $('.ua_confirmer_annuler').fadeOut();
        articlesDet.push(AricleSelected);
        remplirTable();
    } else {
        articlesDet.some(function(element, index, _arr) {
            if (element == AricleSelected) {
                $("#ModalDocume").modal("show");
                $('.ua_confirmer_annuler').fadeOut();
            }
        });
        remplirTable();
    }

    allArticles.some(function(element, index, _arr) {
        if (element.AricleSelected == AricleSelected) {
            $('.ua_confirmer_annuler').fadeIn();
        }
    });



      var row = {
          quantite: $('#' + nameDetail + '_quantite').val(),
          prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
          tva: $('#' + nameDetail + '_tva').val(),
          remise: $('#' + nameDetail + '_remise').val(),
      }
      if(editColumn != null){
          formDataDetail[editColumn] = {
              articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
              titre: $('#' + nameDetail + '_article').select2('data')[0].text,
              code: $('#' + nameDetail + '_article').select2('data')[0].code ? $('#' + nameDetail + '_article').select2('data')[0].code : code ,
              unite: $('#' + nameDetail + '_unite').select2('data')[0].text,
              uniteId: $('#' + nameDetail + '_unite').select2('data')[0].id,
              quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
              prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
              tva: parseFloat($('#' + nameDetail + '_tva').val()),
              remise: parseFloat($('#' + nameDetail + '_remise').val()),
              observation: $('#' + nameDetail + '_observation').val(),
              montantRemise: getRemise(row),
              prixttc: getPrixTTc(row),
          };
      }else{
          formDataDetail.push({
              articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
              titre: $('#' + nameDetail + '_article').select2('data')[0].text,
              code: $('#' + nameDetail + '_article').select2('data')[0].code ? $('#' + nameDetail + '_article').select2('data')[0].code : code,
              unite: $('#' + nameDetail + '_unite').select2('data')[0].text,
              uniteId: $('#' + nameDetail + '_unite').select2('data')[0].id,
              quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
              prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
              tva: parseFloat($('#' + nameDetail + '_tva').val()),
              remise: parseFloat($('#' + nameDetail + '_remise').val()),
              observation: $('#' + nameDetail + '_observation').val(),
              montantRemise: getRemise(row),
              prixttc: getPrixTTc(row),
          })
      }
      
      var lineNo = 1;
      var cl = "";
      $(".det_for")
              .hide()
              .after(
                      '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
                      );
  
      create_custom_dropdowns($(".articles"), "");
      $(".table-detail + table ").removeClass('remove');
      $('.table-detail tbody').html('');
      $.each(formDataDetail, function (i, value) {
          if(lineNo%2 == 0){
              cl = "impair";
            }else{
              cl = "pair"
            }
            var tva = value.tva + " %";
            var remise = value.remise + " %";
            var observation = value.observation;
            if (value.tva == null) {
                tva = "-";
            }
          
            if (value.observation != "") {
                observation = "<tr class="+cl+"><td></td><td colspan='9'><b>Informations complementaires : </b>"+observation+"</td></tr>";
            }
            //add
          //categorie
          var my_row =
                  " <tr class="+cl+"><td>" +
                  (i + 1) +
                  "</td><td>" +
                  value.code +
                  " - " +
                  value.titre +
                  "</td><td style='text-align:center'>" +
                  value.unite +
                  "</td><td style='text-align:center' >" +
                  value.quantite +
                  "</td> <td style='text-align:center'>" +
                  value.prixunitaire.toFixed(2) +
                  "</td><td style='text-align:center'>" +
                  tva +
                  "</td><td style='text-align:center'>" +
                  remise +
                  "</td><td style='text-align:center'>" +
                  value.montantRemise.toFixed(2) +
                  "</td><td style='text-align:center'>" +
                  value.prixttc.toFixed(2) +
                  "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" +
                  i +
                  "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" +
                  i +
                  "><i class='fa fa-edit text-primary'></i></a></td></tr>"+observation;
          $(".new .table-detail > tbody").append(my_row);
          lineNo++;
      });
  
      
   
      $("#create_devis").removeClass( "disabled" );
    
     
      $('.det_for input,.det_for select,.det_for textarea').val(null).trigger('change');
      
      editColumn = null;
      editArticleColumn = null;
  
      //toastr.warning("Cet article existe deja ", "warning ", {timeOut: 4000});
  
  
      e.preventDefault();
});

$(".new").on("click", ".edit_element", function (e) {
  editColumn = $(this).attr('id');
  editArticleColumn = formDataDetail[$(this).attr('id')]['articleId'];
  
  var cl = "";
  var lineNo = 1;
  $('.table-detail tbody').html('');
  $.each(formDataDetail, function (i, value) {
      if(lineNo%2 == 0){
          cl = "impair";
        }else{
          cl = "pair"
        }
        var tva = value.tva + " %";
        var remise = value.remise + " %";
        var observation = value.observation;
        if (value.tva == null) {
            tva = "-";
        }
        if (value.observation != "") {
            observation = "<tr class="+cl+"><td></td><td colspan='9'><b>Informations complementaires : </b>"+observation+"</td></tr>";
        }
      //categorie
      var my_row =
              " <tr class="+cl+"><td>" +
              (i + 1) +
              "</td><td>" +
              value.code +
              " - " +
              value.titre +
              "</td><td style='text-align:center'>" +
              value.unite +
              "</td><td style='text-align:center'>" +
              value.quantite +
              "</td> <td style='text-align:center'>" +
              value.prixunitaire.toFixed(2) +
              "</td><td style='text-align:center'>" +
              tva +
              "</td><td style='text-align:center'>" +
              remise +
              "</td><td style='text-align:center'>" +
              value.montantRemise.toFixed(2) +
              "</td><td style='text-align:center'>" +
              value.prixttc.toFixed(2) +
              "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" +
              i +
              "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" +
              i +
              "><i class='fa fa-edit text-primary'></i></a></td></tr>"+observation;
      $(".new .table-detail > tbody").append(my_row);
      lineNo++;
  });


  var id = $(this).attr('id');
  var row_index = $(this).attr('id');
  var col_index = $(this).index();
  $.ajax({
      type: "POST",
      data:{
          detail:formDataDetail[$(this).attr('id')]
      },
      url: Routing.generate("uv_devis_edit_detail_new", {id: id}),
      success: function (result) {
          // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
          $(".table-detail > tbody  > tr")
                  .eq(row_index)
                  .addClass("table-tr-style")
                  .html("<td colspan='10'>" + result + "</td>");
          $($(".table-detail > tbody  > tr").eq(row_index))
                  .find(".det_for")
                  .hide()
                  .after(
                          '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
                          );
          create_custom_dropdowns(
                  $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"),
                  $($(".table-detail > tbody  > tr").eq(row_index))
                  .find(".articles")
                  .attr("if-selected")
                  );
          //$(".load-er").fadeOut().remove();
          // $('.det_for').fadeIn(200)
          $(".bod").empty();
          $(".spr").fadeIn();

          

          $.ajax({
              type: "POST",
              url: Routing.generate("t_achatdemandeinternecab_find_article"),
              processData: false,
              contentType: false,
              success: function (result, textStatus, errorThrown) {
                  $(".bod").html(result).hide();
                  KTDatatablesSearchOptionsAdvancedSearch.init();
                  setTimeout(function () {
                      $(".spr").hide();
                      $(".bod").fadeIn();
                  }, 600);
              },
          });
          $(".table-detail + table ").addClass('remove');
          
          return true;
          //    alert(row_index);
          //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
          //            console.log(result)
      },
  });

  e.preventDefault();
});



$(".new").on("click", ".delete_element", function (e) {
  var lineNo = 1;
  var cl = "";
  formDataDetail.splice($(this).attr("id"), 1)
  $(".new .table-detail > tbody tr").remove();
  if(formDataDetail.length<1){   $("#create_devis").last().addClass( "disabled" );}

  $(".new .table-detail > tbody tr").remove();
  $.each(formDataDetail, function (i, value) {
    if(lineNo%2 == 0){
      cl = "impair";
    }else{
      cl = "pair"
    }
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
    if (value.tva == null) {
        tva = "-";
    }
    if (value.observation != "") {
        observation = "<tr class="+cl+"><td></td><td colspan='9'><b>Informations complementaires : </b>"+observation+"</td></tr>";
    }
    var my_row =
            " <tr class="+cl+"><td>" +
            (i + 1) +
            "</td><td>" +
            value.code +
            " - " +
            value.titre +
            "</td><td style='text-align:center'>" +
            value.unite +
            "</td><td>" +
            value.quantite +
            "</td> <td>" +
            value.prixunitaire.toFixed(2) +
            "</td><td>" +
            tva +
            "</td><td>" +
            remise +
            "</td><td>" +
            value.montantRemise.toFixed(2) +
            "</td><td>" +
            value.prixttc.toFixed(2) +
            "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" +
            i +
            "><i class='fa fa-trash text-danger'></i></a></td></tr>"+observation;
    $(".new .table-detail>tbody").append(my_row);
    lineNo++;
});
});



$(".new-article-btn").click(function (e) {
  $(".remove-item-edit-add").removeClass('remove-item-edit-add');
  $(this).hide();
  e.preventDefault();
});

$(".new , .edit").on("change", ".compteMasse", function (e) {
  var $form = $(this).closest("form");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  console.log(data);
  //alert($form.attr('action'));
  console.log($form.attr("method"));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      // console.log(html);
      $(".compteRubrique").replaceWith($(html).find(".compteRubrique"));
      $(".sel2").select2();
      $(".compteRubrique").parent().find(".select2").not(":first").remove();
      $(".comptePoste").parent().find(".select2").not(":first").remove();
      $(".compte").parent().find(".select2").not(":first").remove();
    },
  });
  e.preventDefault();
});

$(".new , .edit").on("change", ".compteRubrique", function () {
  var $form = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      console.log(html);
      $(".comptePoste").replaceWith($(html).find(".comptePoste"));
      $(".sel2").select2();
      $(".comptePoste").parent().find(".select2").not(":first").remove();
      $(".compte").parent().find(".select2").not(":first").remove();
    },
  });
});

$(".new , .edit").on("change", ".comptePoste", function () {
  var $form = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
  data[$(".compteRubrique").attr("name")] = $(".compteRubrique").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      console.log(html);
      $(".compte").replaceWith($(html).find(".compte"));
      $(".sel2").select2();
      $(".compte").parent().find(".select2").not(":first").remove();
    },
  });
});




var table = $("#grid").DataTable({
  ajax: {
      url: Routing.generate("uv_deviscab_list"), // json datasource
      type: "get",
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  pageLength: 15,
  order: [[0, "desc"]],
  // scrollX: true,
  columns: [
    







      { orderable: false, width: "3%",name: 'tab.id' },
      { orderable: true, width: "10%" ,name: 'tab.code'},
      { orderable: true, width: "10%", name: 'tab.datedevis' },
      { orderable: true, width: "15%" ,name: 'tab.description' },
      { orderable: true, width: "15%" ,name: 'achat' },
      { orderable: true, width: "20%", name: 'tab.client' },
      { orderable: true, width: "15%"  ,name: 'tab.MtHt'/*, "targets": [4, 5]*/ },
      { orderable: true, width: "20%",name: 'tab.MtTva' },
      { orderable: true, width: "10%",name: 'tab.MtTot' },
      { orderable: true, width: "10%",name: 'tab.budget' },
      { width: "8%", orderable: true ,name: 'tab.depense'},
      { orderable: true, className: "cmd" },
      { orderable: false, className: "br" },
      { orderable: false, className: "fac" },
      { orderable: false, className: "rg"},
      { width: "8%", orderable: true, searchable: false },
      { width: "8%", orderable: true ,name: 'tab.position_actuel' },
      {orderable: true, searchable: false ,width: "5%"},
  ],
 columnDefs: [
    {searchable: false,
        targets: 17,
        render: function (t, a, l, s) {
            var data = "";
            t.forEach(element => {
                let link = "" ; 
                if (element._route_link){
                   link = "href='" + element._route_link + "'";   
                }
                data = data + "<li><a "+link+"  data-transition='" + element.name + "' data-id='" + element.id + "' data-title='" + element.titre + "' class='dropdown-item  " + element.class + " " + element.idCs + "' ><i class='fa " + element.icon + "' ></i> " + element.titre + "</a></li>"
            })

            return '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' + data + ' </ul> </div> \t</div>\t';

        }
    }
],

  dom: '<"html5buttons btn-group"f>lTgtip',
  buttons: [
      "columnsToggle",
      {
          text: "Restaurer",
          className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
          action: function (e, dt, node, config) {
              table.state.clear();
              window.location.reload();
          },
      },
      {
          extend: "excel",
          exportOptions: {
              columns: ":visible",
              rows: ":visible",
              format: {
                  body: function (data, row, column, node) {
                      data = $('<p>' + data + '</p>').text();
                      return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
                  }
              }
          },
      }
  ],
  language: {
      url: Routing.generate("datatables_langue"),
      processing: true,
  },
  //fixedHeader: true,
});

table.on("init.dt", function (e, settings) {
  let api = new $.fn.dataTable.Api(settings);
  let st = api.state.loaded();
  let data = api.data();

  //console.log(st);
  //if (st != null) {
  //    $.each(st.columns, function (key, value) {
  //        if (value.search.search != "") {
  //            $('.remove-filter').show();
  //            return false;
  //        }
  //    });
  //}

  CustomSearchDatatable.CustomSearchText(api, [], []);
 // CustomSearchDatatable.CustomSearchDate(api, [2], []);
//  CustomSearchDatatable.CustomSearchSelect(api, [4, 14], []);
  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/*column 1 de datatble search*/

$(".remove-filter").click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});

$(".action_head").click(function () {
  console.log($(".action").filter(":checked").length);
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});



$("#grid tbody").on("click", "tr", function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    table.$("tr.selected").removeClass("selected");
    $(this).addClass("selected");
  }
});

$("#_edit").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = Routing.generate("uv_deviscab_edit", { id: id });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$(".edit").on("submit", ".detail_form_add_article", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = dta.get("_id_cab");
  var selector = $(this);
  // alert(id);
  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: Routing.generate("uv_devisdet_insert", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        $(".errors-list").remove();
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        location.reload();
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
  });

  e.preventDefault();
});

$(".edit").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.activeElement);

  // Start loading
  l.start();

  $.ajax({
    type: "POST",
    url: Routing.generate("uv_deviscab_update", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      l.stop();
      $(".errors-list").remove();
      if (result.errors) {
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".form #" + form_name + "_" + columnName[1]).after(
            "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
              val.title +
              "</span></span></span>"
          );
        });
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
  });
  e.preventDefault();
});

$("#_show").click(function (e) {
  var id = table.row(".selected").id();

  if (id) {
    var url = Routing.generate("uv_deviscab_show", { id: id });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});



$("#_statut").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("uv_deviscab_statut", { id: id }),
      success: function (result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      },
    });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$(".actions").on("click", ".close-me", function (e) {
  //$('.close-me').click(function (e){
  $(".actions").removeClass("sidebar-open");
  e.preventDefault();
});

$(".actions").on("submit", ".form_statut", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("uv_deviscab_statut", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result, textStatus, errorThrown) {
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          $(".errors-list").remove();
          jQuery.each(result.errors.violations, function (i, val) {
            var column = val.propertyPath;
            var columnName = column.split(".");
            // console.log(columnName[1]);
            $(".form_statut #" + form_name + "_" + columnName[1]).after(
              "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
                val.title +
                "</span></span></span>"
            );
          });
        } else if (result.code == 200) {
          table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
          $(".actions").empty().removeClass("sidebar-open");
          // location.reload();
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, { timeOut: 4000 });
      },
    });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("#_generer").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("uv_deviscab_generer", { id: id }),
      success: function (result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      },
    });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$(".actions").on("submit", ".form_generer", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("uv_deviscab_generer", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result, textStatus, errorThrown) {
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          $(".errors_list").html("");
          jQuery.each(result.errors.violations, function (i, val) {
            //                        var column = val.propertyPath;
            //                        var columnName = column.split(/[[],]/);
            //
            //                        console.log(columnName);
            var x = val.propertyPath;
            var separators = ["\\]", "\\["];
            var arr = x.split(new RegExp(separators.join("|")));
            var columnName = arr[1];
            $(".errors_list").append(
              "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" +
                columnName +
                "</span> <span class='form-error-message'> " +
                val.title +
                "</span></span></span>"
            );
          });

          //                    console.log(result.errors);
          //                    $('.errors-list').remove();
          //                    jQuery.each(result.errors.violations, function (i, val) {
          //                        var column = val.propertyPath;
          //                        var columnName = column.split('.');
          //                        // console.log(columnName[1]);
          //                        $(".form_generer #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
          //                    });
        } else if (result.code == 200) {
          table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
          $(".actions").empty().removeClass("sidebar-open");
          // location.reload();
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, { timeOut: 4000 });
      },
    });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("#_archiver").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment Archiver cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: "POST",
            url: Routing.generate("uv_deviscab_archive", { id: id }),
            success: function (result) {
              if (result.code == 200) {
                table.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                $(".actions").empty().removeClass("sidebar-open");
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
        }
      });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});


$("body").on("submit", ".form_commande", function (e) {
  // alert();
  var dta = new FormData(this);
  e.preventDefault();
  

  var form_name = $(this).attr("name");
  // var id = table.row('.selected').id();
  //var id = $("#test").data("devisId");
  var id = dta.get("_id");
  var l = Ladda.create(document.querySelector(".my-button2"));
  l.start();
  //    alert(id);
  if (id) {
    $.ajax({
      type: "POST",
      url: Routing.generate("uv_deviscab_commande", { id: id }),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result, textStatus, errorThrown) {
        l.stop();
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          ShowFormErrors(selector, form_name, result.errors);
        } else if (result.code == 200) {
          // table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });

        
          $(".actions").empty().removeClass("sidebar-open");
          location.reload();
        }
        if (result.notvalide) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000,
          });
        }
        if (result.code == 404) {
          toastr.warning(result.message.text, result.message.title, {
              timeOut: 4000,
          });
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        l.stop();
        toastr.error("Erreur", errorThrown, { timeOut: 4000 });
      },
    });
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }

  e.preventDefault();
});

$("#_imprimer").click(function (e) {
  //  var id = table.row('.selected').id();
  var id = $("#test").data("devisId");
  if (id) {
    var url = Routing.generate("uv_deviscab_pdf", { id: id });
    //   window.location.href = url;
    window.open(url, "_blank");
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
 
});


$(".edit").on("click", ".detail_edit", function (e) {
  //alert($(this).attr('id'))
  var id = $(this).attr('id');
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  $.ajax({
      type: "POST",
      url: Routing.generate("uv_devisdet_edit_detail", {id: id}),
      success: function (result) {
          // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
          $(".table-detail > tbody  > tr")
                  .eq(row_index)
                  .addClass("table-tr-style")
                  .html("<td colspan='10'>" + result + "</td>");
          $($(".table-detail > tbody  > tr").eq(row_index))
                  .find(".det_for")
                  .hide()
                  .after(
                          '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
                          );
          create_custom_dropdowns(
                  $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"),
                  $($(".table-detail > tbody  > tr").eq(row_index))
                  .find(".articles")
                  .attr("if-selected")
                  );
          //$(".load-er").fadeOut().remove();
          // $('.det_for').fadeIn(200)
          $(".bod").empty();
          $(".spr").fadeIn();

          $.ajax({
              type: "POST",
              url: Routing.generate("t_achatdemandeinternecab_find_article"),
              processData: false,
              contentType: false,
              success: function (result, textStatus, errorThrown) {
                  $(".bod").html(result).hide();
                  KTDatatablesSearchOptionsAdvancedSearch.init();
                  setTimeout(function () {
                      $(".spr").hide();
                      $(".bod").fadeIn();
                  }, 600);
              },
          });
          return true;
          //    alert(row_index);
          //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
          //            console.log(result)
      },
  });

  e.preventDefault();
});


$(".edit").on("click", ".detail_form", function (e) {

 $('.error-class-tab').remove();
 var id = $("#_id").val();
 
 var flag = 0;
 for (let index = 0; index < formDataDetail.length; index++) {
     if(formDataDetail[index].articleId == $('#'+nameDetail+'_article').select2('data')[0].id){
        //  return $('#'+nameDetail+'_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
        toastr.error("Ce article est deja existe ", "Error", {
          timeOut: 4000,
      });
      return
      }

     
     
 }
 if(($('.edit-detail[article="'+$('#'+nameDetail+'_article').select2('data')[0].id+'"]').attr('article') == $('#'+nameDetail+'_article').select2('data')[0].id) && ($(this).parents('.edit-detail').attr('article') != $('#'+nameDetail+'_article').select2('data')[0].id)){
    //  return $('#'+nameDetail+'_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
    toastr.error("Ce article est deja existe", "Error", {
      timeOut: 4000,
  });
  return
  }
 for (let index = 0; index < errors_details.length; index++) {
     var name = nameDetail+'['+errors_details[index].property+']';
     var value = $('[name="'+nameDetail+'['+errors_details[index].property+']'+'"]').val();

     if(errors_details[index].cause == null && value == '' ){
         flag = 1;
         $('[name="'+name+'"]').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[index].message + "</span></span></span>"));
     }
 }
 if(flag == 1){
     return false;
 }
 var row = {
     quantite:$('#'+nameDetail+'_quantite').val(),
     prixunitaire:parseFloat($('#'+nameDetail+'_prixunitaire').val()),
     tva:$('#'+nameDetail+'_tva').val(),
     remise:$('#'+nameDetail+'_remise').val(),
 }
 formDataDetail = [];
 if($('#'+nameDetail+'_article').select2('data')[0].id == "") {
    toastr.error('entrer tous les choix', {
      timeOut: 4000,
  });
  return;
}
// console.log($('#'+nameDetail+'_article').select2('data')[0].id)
 formDataDetail.push({
     id:$(this).parents('.edit-detail').attr('id'),
     articleId:$('#'+nameDetail+'_article').select2('data')[0].id,
     titre:$('#'+nameDetail+'_article').select2('data')[0].text,
     code:$('#'+nameDetail+'_article').select2('data')[0].code,
     unite:$('#'+nameDetail+'_unite').select2('data')[0].text,
     uniteId:$('#'+nameDetail+'_unite').select2('data')[0].id,
     quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
     prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
     tva: parseFloat($('#' + nameDetail + '_tva').val()),
     remise: parseFloat($('#' + nameDetail + '_remise').val()),
     observation: $('#' + nameDetail + '_observation').val(),
     montantRemise:getRemise(row),
     prixttc:getPrixTTc(row),
 });
 var formData = new FormData();
 const data = JSON.stringify(formDataDetail)
 formData.append('detail',data);

 $.ajax({
     type: "POST",
     url: Routing.generate("uv_devisdet_insert", {id: id}),
     data: formData,
     processData: false,
     contentType: false,
     success: function (result) {
         //  console.log(result);
         if (result.errors) {
             l.stop();
             ShowFormErrors(selector, form_name, result.errors);
             /*  $('.errors-list').remove();
              jQuery.each(result.errors.violations, function (i, val) {
              var column = val.propertyPath;
              var columnName = column.split('.');
              console.log(columnName[1]);
              $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
              });*/
         } else if (result.data) {
             //l.stop();
             toastr.success(result.message.text, result.message.title, {
                 timeOut: 4000,
             });
             location.reload();
         } else if (result.empty) {
             l.stop();
             toastr.warning(result.message.text, result.message.title, {
                 timeOut: 4000,
             });
         }
     },
 });
 

     //toastr.warning("Cet article existe deja ", "warning ", {timeOut: 4000});

 
 e.preventDefault();
});

$(".edit").on("submit", ".detail_form_delete", function (e) {
 // alert();
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var token = dta.get("_token");
  //    var id = $("input[name=_id]").val();
  //    var token = $("input[name=_token]").val();
  swalWithBootstrapButtons
    .fire({
      showClass: {
        popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    })
    .then((result) => {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: Routing.generate("uv_devisdet_delete", { id: id, token: token }),
          data: dta,
          processData: false,
          contentType: false,
          success: function (result) {
            //   console.log(result);
            if (result.data == "deleted") {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              // selector.parent().parent().hide();
              // swal(result.message.title, result.message.text, result.message.success);
              location.reload();
            } else if ((result.data = "error")) {
              toastr.error(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              //swal(result.message.title, result.message.text, result.message.error);
            }
          },
        });
      }
    });

  e.preventDefault();
});


$("#_charges").click(function (e) {
  // var id = table.row('.selected').id();
  var id = $("#test").data("devisId");
  if (id) {
    var url = Routing.generate("uv_devis_charges", { id: id });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning(
      "Veuillez Renseigner une ligne pour effectuer cette operation",
      "warning",
      { timeOut: 4000 }
    );
  }
  e.preventDefault();
});

$(".charge").on("submit", ".charge_save", function (e) {
  // alert();
  var dta = new FormData(this);

  // console.log(dta);
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  var selector = $(this);
  var l = Ladda.create(document.querySelector(".my-button2"));
  l.start();
  $.ajax({
    type: "POST",
    url: Routing.generate("uv_devis_charges", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      l.stop();
      if (result.errors) {
        ShowFormErrors(selector, form_name, result.errors);
      } else if (result.code == 200) {
        table.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        //$(".actions").empty().removeClass('sidebar-open');
        location.reload();
      }
    },
  });
  e.preventDefault();
});

$(".charge_form_delete").submit(function (e) {
  //alert();
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var token = dta.get("_token");
  //    var id = $("input[name=_id]").val();
  //    var token = $("input[name=_token]").val();
  swalWithBootstrapButtons
    .fire({
      showClass: {
        popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
    })
    .then((result) => {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: Routing.generate("uv_chargedevis_delete", {
            id: id,
            token: token,
          }),
          data: dta,
          processData: false,
          contentType: false,
          success: function (result) {
            //   console.log(result);
            if (result.data == "deleted") {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              // selector.parent().parent().hide();
              // swal(result.message.title, result.message.text, result.message.success);
              location.reload();
            } else if ((result.data = "error")) {
              toastr.error(result.message.text, result.message.title, {
                timeOut: 4000,
              });
              //swal(result.message.title, result.message.text, result.message.error);
            }
          },
        });
      }
    });

  e.preventDefault();
});

$("body").on("submit", "._fichiers", function (e) {
  //  alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  var id = dta.get("_id");
  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: Routing.generate("uv_devis_fichiers", { id: id }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      if (result.errors) {
        //console.log(result.errors);
        ShowFormErrors(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000,
        });
        location.reload();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

$("._delete_fichier").click(function (e) {
  var id = $(this).attr("id");

  if (id) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment supprimer cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: "DELETE",
            url: Routing.generate("uv_devis_fichiers_delete", { id: id }),
            success: function (result) {
              // console.log(result);
              if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                location.reload();
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
        }
      });
  } else {
    toastr.warning("Impossible d'effectuer cette operation", "warning", {
      timeOut: 4000,
    });
  }
  e.preventDefault();
});

$("body").on("click", ".uv_devis_apply_transitions", function (e) {
 
  /*var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    var title = dta.get('title');*/

  var dta = new FormData();
  var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");

  dta.append("id", id);
  dta.append("title", title);
  dta.append("transition", transition);

  //alert(transition);
 //alert(id);
  if(transition == "apres_valider_commander"){
    $.ajax({
        type: "POST",
        url: Routing.generate("uv_deviscab_commande", {
            id: id,
        }),
        success: function (result) {


            $(".bod").html(result).hide();
         
         
            



            $("#MyModal").modal("show");
        
            setTimeout(function () {
                $(".spr").hide();
                $(".bod").fadeIn();
            }, 600);
        },
    });

}else if (id) {
    swalWithBootstrapButtons
      .fire({
        showClass: {
          popup: "animatedSwal flipInX faster",
        },
        position: "top",
        title: "Confirmation ?",
        text:
          "Voulez vous vraiment passer a l'etat '" +
          title +
          "' pour cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui !",
        cancelButtonText: "<i class='fa fa-times'></i> Non !",
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            type: "POST",
            data: dta,
            processData: false,
            contentType: false,
            url: Routing.generate("uv_devis_apply_transitions", { id: id }),
            success: function (result) {
              
              console.log(result);
              if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                location.reload();
              }
              if (result.code == 201) {
                // alert(result.valider);
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                var url = Routing.generate("uv_deviscab_commande", {
                  id: result.id,
                });
                window.location.href = url;
              }
              if (result.code == 202) {
                // alert(result.valider);
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
                var url = Routing.generate("uv_deviscab_commande", {
                  id: result.id,
                });
                window.location.href = url;
              }

              if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
                });
              }
              if (result.code == 404) {
                toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              toastr.warning(
                jqXHR.responseJSON.message.text,
                jqXHR.responseJSON.message.title,
                { timeOut: 4000 }
              );
            },
          });
        }
      });
  } else {
    toastr.warning("Commande non renseigne ", "warning", { timeOut: 4000 });
  }
  e.preventDefault();
});

$("._generer_form").submit(function (e) {
  //alert();
  var dta = new FormData(this);
  var id = $("input[name=_id]").val();
  var type = $(document.activeElement).attr("name");
  //alert();
  // Create a new instance of ladda for the specified button $(document.activeElement).attr('class').split(' ').pop();
  var l = Ladda.create(document.querySelector("." + type));
  //alert($(document.activeElement).attr('class').split(' ').pop());
  // Start loading
  l.start();

  $.ajax({
    type: "POST",
    url: Routing.generate("uv_devis_generer_insert", { id: id, type: type }),
    data: dta,
    processData: false,
    contentType: false,
    success: function (result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        console.log(result.errors);
        l.stop();
        $.each(result.errors, function (key, value) {
          toastrWidtoutProgress.warning(value, "warning");
        });
      } else if (result.code == 200) {
        l.stop();
        if (type != "verifier") {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000,
          });
          location.reload();
        } else {
          $(".verifier")
            .removeClass("ladda-button")
            .attr("disabled", "disabled");
          $("#disable").prop("disabled", false);

          window.open(
            Routing.generate("uv_devis_pdf_generer_verifier"),
            "_blank"
          );
        }
        //window.document.location = Routing.generate('uv_devis_pdf_generer_insert');
        //location.reload();
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000,
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, { timeOut: 4000 });
    },
  });
  e.preventDefault();
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = Routing.generate("uv_deviscab_show", {
    id: $(this).closest("tr").attr("id"),
  });
  window.location.href = url;
});

$(".wizard-big")
  .steps({
    bodyTag: "fieldset",
    onStepChanging: function (event, currentIndex, newIndex) {
      // Always allow going backward even if the current step contains invalid fields!
      if (currentIndex > newIndex) {
        return true;
      }

      // Forbid suppressing "Warning" step if the user is to young
      if (newIndex === 3 && Number($("#age").val()) < 18) {
        return false;
      }

      var form = $(this);

      // Clean up if user went backward before
      if (currentIndex < newIndex) {
        // To remove error styles
        $(".body:eq(" + newIndex + ") label.error", form).remove();
        $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
      }

      // Disable validation on fields that are disabled or hidden.
      form.validate().settings.ignore = ":disabled,:hidden";

      // Start validation; Prevent going forward if false
      return form.valid();
    },
    onStepChanged: function (event, currentIndex, priorIndex) {
      // Suppress (skip) "Warning" step if the user is old enough.
      if (currentIndex === 2 && Number($("#age").val()) >= 18) {
        $(this).steps("next");
      }

      // Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
      if (currentIndex === 2 && priorIndex === 3) {
        $(this).steps("previous");
      }
    },
    onFinishing: function (event, currentIndex) {
      var form = $(this);

      // Disable validation on fields that are disabled.
      // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
      form.validate().settings.ignore = ":disabled";

      // Start validation; Prevent form submission if false
      return form.valid();
    },
    onFinished: function (event, currentIndex) {
      var form = $(this);

      // Submit form input
      form.submit();
    },
  })
  .validate({
    errorPlacement: function (error, element) {
      element.before(error);
    },
    rules: {
      confirm: {
        equalTo: "#password",
      },
    },
  });
var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
});

var tableShow = $("#datatable-show").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  columns: [
    { width: "5%" },
    { width: "10%" },
    { width: "35%" },
    { width: "20%" },
    { width: "5%" },
    { width: "5%" },
    { width: "5%" },
    { width: "5%" },
  ],
  footerCallback: function (row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function (i) {
      return typeof i === "string"
        ? i.replace(/[\$,]/g, "") * 1
        : typeof i === "number"
        ? i
        : 0;
    };

    // Total over all pages
    total = api
      .column(7)
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Total over this page
    pageTotal = api
      .column(7, { page: "current" })
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Update footer
    $(api.column(1).footer()).html(
      "Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2)
    );
  },
});

//var tableShow3 = $("#datatable-show3").DataTable({ paging: false });

var tableShow3 = $(".datatable-show3").DataTable({
  lengthMenu: [
    [10, 15, 25, 50, 100, 200],
    [10, 15, 25, 50, 100, 200],
  ],
  deferRender: true,
  pageLength: 15,
  scrollX: true,
  columns: [
    { width: "5%", orderable: true, searchable: true, targets: [0] },
    { width: "5%", orderable: true },
    { width: "10%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true },
    { width: "5%", orderable: true /*, visible: true*/ },
  ],
  paging: false,

  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: [
    "columnsToggle",
    {
      text: "Restaurer",
      className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
      action: function (e, dt, node, config) {
        table2.state.clear();
        window.location.reload();
      },
    },
  ],
  language: {
    url: Routing.generate("datatables_langue"),
    processing: true,
  },
  //fixedHeader: true,
});

var tableShow4 = $(".datatable-show4").DataTable({ paging: false });

var tableShow = $("#datatable-show9").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  footerCallback: function (row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function (i) {
      return typeof i === "string"
        ? i.replace(/[\$,]/g, "") * 1
        : typeof i === "number"
        ? i
        : 0;
    };

    // Total over all pages
    total = api
      .column(5)
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Total over this page
    pageTotal = api
      .column(5, { page: "current" })
      .data()
      .reduce(function (a, b) {
        return intVal(a) + intVal(b);
      }, 0);

    // Update footer
    $(api.column(1).footer()).html(
      "Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2)
    );
  },
});

$(document).ready(function () {
  $(".det_for")
    .hide()
    .after(
      '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
    );
  create_custom_dropdowns($(".articles"), "");
});

("use strict");
var KTDatatablesSearchOptionsAdvancedSearch = (function () {
  $.fn.dataTable.Api.register("column().title()", function () {
    return $(this.header()).text().trim();
  });
  return {
    init: function () {
      var t;
      (t = $("#kt_table_1").DataTable({
        
      
      ajax: {
          url: Routing.generate("t_achatdemandeinternecab_find_article_table"), // json datasource
          type: "get",
          "data": {
            "vente": true
          },
      },
      deferRender: true,
      serverSide: true,
      lengthMenu: [
        [10, 15, 25, 50, 100, 200],
        [10, 15, 25, 50, 100, 200],
    ],
    pageLength: 25,
      dom: 'f<"html5buttons btn-group"B>lTgtip',
      columns: [
          {orderable: true, name: 'art.id', width: "5%"},
          {orderable: true, name: 'art.code'},
          {orderable: true, name: 'art.titre'},
          {orderable: true, name: 'tab.abreviation'},
          {orderable: true, name: 'n1.designation'},
          {orderable: true, name: 'n2.designation'},
          {orderable: true, name: 'n3.designation'},
          {orderable: true, name: 'n4.designation'},
      ],
      'createdRow': function( row, data, dataIndex ) {
          console.log(data)
          
          $(row).attr('text', data[2]);
          $(row).attr('pu', data[8]);
          $(row).attr('tva', data[9]);
          $(row).attr('unite', data[10]);

          $(row).attr('code', data[11]);
          $(row).attr('remise', data[12]);
      },
        buttons: [
          "columnsToggle",
          {
            text: "Restaurer",
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function (e, dt, node, config) {
              table.state.clear();
              window.location.reload();
            },
          },
        ],
        language: {
          url: Routing.generate("datatables_langue"),
          processing: true,
        },
        //fixedHeader: true,
        bInfo: false,
      })),
        t.on("init.dt", function (e, settings) {
          let api = new $.fn.dataTable.Api(settings);
          let st = api.state.loaded();
          let data = api.data();

          //console.log(st);
          //if (st != null) {
          //    $.each(st.columns, function (key, value) {
          //        if (value.search.search != "") {
          //            $('.remove-filter').show();
          //            return false;
          //        }
          //    });
          //}

          CustomSearchDatatable.CustomSearchText(api, [0, 1, 3,2, 4, 5, 6, 7], []);
        });
    },
  };
})();
$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
  sNext: '<i class="fa fa-chevron-right" ></i>',
  sPrevious: '<i class="fa fa-chevron-left" ></i>',
});

$(".modalActivate").click(function () {
  $(".bod").empty();
  $(".spr").fadeIn();
  $.ajax({
    type: "POST",
    url: Routing.generate("t_achatdemandeinternecab_find_article"),
    processData: false,
    contentType: false,
    success: function (result, textStatus, errorThrown) {
      $(".bod").html(result).hide();
      
      KTDatatablesSearchOptionsAdvancedSearch.init();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    },
  });
});


var code = null;

$("body").on("click", "#kt_table_1 tbody tr", function () {
  //alert($(this).parent().parent().attr("unite"))
  code = $(this).attr("code");
  if (
          window.element.find(
                  "option[value='" + $(this).attr("id") + "']"
                  ).length
          ) {
      window.element.val($(this).attr("id")).trigger("change");
      $(".prixunitaire").val($(this).attr("pu"));

      $(".tva").val($(this).attr("tva"));
      $(".remise").val($(this).attr("remise"));
      $(".select2_unite").val($(this).attr("unite")).trigger("change");
      $("#exampleModalPreview").modal("hide");
      
  } else {
      // Create a DOM Option and pre-select by default
      var newOption = new Option(
              $(this).attr("text"),
              $(this).attr("id"),
              true,
              true
              );
      // Append it to the select
      window.element.append(newOption).trigger("change");
      $(".prixunitaire").val($(this).attr("pu"));
      $(".tva").val($(this).attr("tva"));
      $(".select2_unite").val($(this).attr("unite")).trigger("change");
      $(".remise").val($(this).attr("remise"));
      $("#exampleModalPreview").modal("hide");
  }
});

function getSubSelect(myclass, myboolean, mycontent) {
  //console.log(mycontent)
  if (myboolean) {
    $(myclass).prop("disabled", false);
  } else {
    $(myclass).prop("disabled", true);
    $(myclass)
      .parent()
      .find(".select2 .select2-selection__arrow")
      .html('<i class="i-load fa fa-refresh"></i>');
  }
  if (mycontent) {
    var array = myclass.split(",");
    for (var i = 0, l = array.length; i < l; i++) {
      //console.log($(mycontent).find(array[i]));
      $(array[i]).replaceWith($(mycontent).find(array[i]));
    }
  }
}

$(".type_commande").on("change", function (e) {
  if ($(this).attr("data-type") == "PRJ" || $(this).val() == 5) {
    $(".pr").toggleClass("none");
  } else {
    $(".pr").addClass("none");
  }
});

$(".form").on("change", ".type_commande", function (e) {
  var type = $("option:selected", this).attr("data-type");

  console.log(type);

  $(".bloc_choix").css("display", "none");

  if (type == "CMD") {
    $(".bloc_reference_devis_client").css("display", "block");
  } else if (type == "MR") {
    $(".bloc_marche").css("display", "block");
  }
  else if (type == "PRJ") {
    $(".bloc_projet").css("display", "block");
  }
});

$(".new , .edit").on("change", ".marches", function (e) {
  var $form = $(this).closest("form");
  getSubSelect(".sousmarche", false, "");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  //  console.log(data);
  //alert($form.attr('action'));
  //  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      //console.log(html);
      getSubSelect(".sousmarche", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    },
  });
  e.preventDefault();
});


$(".new , .edit").on("change", ".projet", function (e) {
  var $form = $(this).closest("form");
  getSubSelect(".sousprojet", false, "");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  //  console.log(data);
  //alert($form.attr('action'));
  //  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function (html) {
      //console.log(html);
      getSubSelect(".sousprojet", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    },
  });
  e.preventDefault();
});



$('body').on('change', '._multiple_actions', function () {
  var _array_ids = [];


  $.each($("input[name=_action]:checked"), function () {
      _array_ids.push($(this).val());
  });


  if ($(this).val() == '_fusionnement' && _array_ids != null) {


        //alert(_array_ids);

     

     




      swalWithBootstrapButtons.fire({
        showClass: {
            popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment fusionner ces enregistrements ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui !",
        cancelButtonText: "<i class='fa fa-times'></i> Non !",
    }).then((result) => {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: Routing.generate('uv_devis_generer_fusionnement'),
            data: { _array_ids },
            success: function (result) {
                if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, { timeOut: 4000 })
                }
                else if (result.code == 200) {
                 
                  toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
                 
                    table.ajax.reload();
              }
              
                // $(".action ,.scolumn_0").prop('checked', false);
            }
        });
        }
    });


  }

if ($(this).val() =="_desactiver" && _array_ids != null) {
   swalWithBootstrapButtons
   .fire({
     showClass: {
       popup: "animatedSwal flipInX faster",
     },
     position: "top",
     title: "Confirmation ?",
     text: "Voulez vous vraiment desactiver cette liste ?",
     type: "warning",
     showCancelButton: true,
     showCloseButton: true,
     confirmButtonText: "<i class='fa fa-archive'></i> Oui, Desactiver!",
     cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
   })
   .then((result) => {
     if (result.value) {
       $.ajax({
         type: "POST",
         url: Routing.generate('uv_devis_desactiver'),
         data: {_array_ids},
         success: function (result) {
           if (result.errors) {
             ShowFormErrors(selector, form_name, result.errors);
           } else if (result.code == 403) {
             toastr.warning(result.message.text, result.message.title, {
               timeOut: 4000,
             });
           } else if (result.data) {
             toastr.success(result.message.text, result.message.title, {
               timeOut: 4000,
             });
             table.ajax.reload();
           }
         },
     });
       $("._multiple_actions").val("");
     }
   });
   

}

if ($(this).val() =="_duppliquer" && _array_ids != null) {
  // alert();
   swalWithBootstrapButtons
   .fire({
     showClass: {
       popup: "animatedSwal flipInX faster",
     },
     position: "top",
     title: "Confirmation ?",
     text: "Voulez vous vraiment Duppliquer ce devis ?",
     type: "warning",
     showCancelButton: true,
     showCloseButton: true,
     confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
     cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
   })
   .then((result) => {
     if (result.value) {
       $.ajax({
         type: "POST",
         url: Routing.generate('uv_devis_multiple_duppliquer'),
         data: {_array_ids},
         success: function (result) {
           if (result.errors) {
             ShowFormErrors(selector, form_name, result.errors);
        
           } 
           
           if (result.code == 200) {
               
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000,
          });
            table.ajax.reload();

         


        }else if (result.code == 403) {
             toastr.warning(result.message.text, result.message.title, {
               timeOut: 4000,
             });
           }
         },
     });
       $("._multiple_actions").val("");
     }
   });
   

}

});





$("#_desactiver").click(function (e) {

 

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));




if(_array_ids){


  swalWithBootstrapButtons
  .fire({
      showClass: {
          popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver ce devis  ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
  })
  .then((result) => {
      if (result.value) {
          $.ajax({
              type: "POST",
              url: Routing.generate("uv_devis_desactiver"),
              data: {_array_ids},
              success: function (result) {
                  // console.log(result);
                  if (result.errors) {
                    ShowFormErrors(selector, form_name, result.errors);
                  } else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {
                      timeOut: 4000,
                    });
                  } else if (result.data) {
                    toastr.success(result.message.text, result.message.title, {
                      timeOut: 4000,
                    });
                    table.ajax.reload();
                  }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                          jqXHR.responseJSON.message.text,
                          jqXHR.responseJSON.message.title,
                          {timeOut: 4000}
                  );
              },
          });
         
      }
  });

}


     

  e.preventDefault();
});




$("body").on("click", "._desactiver_devis", function (e) {


  //alert();

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));

  if (_array_ids) {


      swalWithBootstrapButtons
              .fire({
                  showClass: {
                      popup: "animatedSwal flipInX faster",
                  },
                  position: "top",
                  title: "Confirmation ?",
                  text: "Voulez vous vraiment desactiver cette liste ?",
                  type: "warning",
                  showCancelButton: true,
                  showCloseButton: true,
                  confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
                  cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
              })
              .then((result) => {
                  if (result.value) {
                      $.ajax({
                          type: "POST",
                          url: Routing.generate("uv_devis_desactiver"),
                          data: {_array_ids},
                          success: function (result) {
                              // console.log(result);
                              if (result.errors) {
                                ShowFormErrors(selector, form_name, result.errors);
                              } else if (result.code == 403) {
                                toastr.warning(result.message.text, result.message.title, {
                                  timeOut: 4000,
                                });
                              } else if (result.data) {
                                toastr.success(result.message.text, result.message.title, {
                                  timeOut: 4000,
                                });
                                table.ajax.reload();
                              }
                          },
                          error: function (jqXHR, textStatus, errorThrown) {
                              toastr.warning(
                                      jqXHR.responseJSON.message.text,
                                      jqXHR.responseJSON.message.title,
                                      {timeOut: 4000}
                              );
                          },
                      });

                  }
              });

  }





});
$("body").on("click", "._annuler_devis", function (e) {


  //alert();

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));

  if (_array_ids) {


      swalWithBootstrapButtons
              .fire({
                  showClass: {
                      popup: "animatedSwal flipInX faster",
                  },
                  position: "top",
                  title: "Confirmation ?",
                  text: "Voulez vous vraiment desactiver cette liste ?",
                  type: "warning",
                  showCancelButton: true,
                  showCloseButton: true,
                  confirmButtonText: "<i class='fa fa-ban'></i> Oui, Annuler!",
                  cancelButtonText: "<i class='fa fa-times'></i> No!",
              })
              .then((result) => {
                  if (result.value) {
                      $.ajax({
                          type: "POST",
                          url: Routing.generate("uv_devis_annuler"),
                          data: {_array_ids},
                          success: function (result) {
                              // console.log(result);
                              if (result.errors) {
                                ShowFormErrors(selector, form_name, result.errors);
                              } else if (result.code == 403) {
                                toastr.warning(result.message.text, result.message.title, {
                                  timeOut: 4000,
                                });
                              } else if (result.data) {
                                toastr.success(result.message.text, result.message.title, {
                                  timeOut: 4000,
                                });
                                table.ajax.reload();
                              }
                          },
                          error: function (jqXHR, textStatus, errorThrown) {
                              toastr.warning(
                                      jqXHR.responseJSON.message.text,
                                      jqXHR.responseJSON.message.title,
                                      {timeOut: 4000}
                              );
                          },
                      });

                  }
              });

  }





});





$("#_delete").click(function (e) {

 

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));

if(_array_ids){


  swalWithBootstrapButtons
  .fire({
      showClass: {
          popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
  })
  .then((result) => {
      if (result.value) {
          $.ajax({
              type: "DELETE",
              url: Routing.generate("uv_deviscab_delete"),
              data: {_array_ids},
              success: function (result) {
                  // console.log(result);
                  if (result.code == 200) {
                   
                     // $('#grid').DataTable().ajax.reload();
                      toastr.success(result.message.text, result.message.title, {
                          timeOut: 4000,
                      });
                      var url=Routing.generate("uv_deviscab_index");
                      window.location.href = url;
                     
                  }
                  else if (result.code == 403) {
                    toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                          jqXHR.responseJSON.message.text,
                          jqXHR.responseJSON.message.title,
                          {timeOut: 4000}
                  );
              },
          });
         
      }
  });

}

     

  e.preventDefault();
});


$("body").on("click", "._delete_devis", function (e) {


  //alert();

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));

  if (_array_ids) {


      swalWithBootstrapButtons
              .fire({
                  showClass: {
                      popup: "animatedSwal flipInX faster",
                  },
                  position: "top",
                  title: "Confirmation ?",
                  text: "Voulez vous vraiment supprimer cette liste ?",
                  type: "warning",
                  showCancelButton: true,
                  showCloseButton: true,
                  confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
                  cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
              })
              .then((result) => {
                  if (result.value) {
                      $.ajax({
                          type: "DELETE",
                          url: Routing.generate("uv_deviscab_delete"),
                          data: {_array_ids},
                          success: function (result) {
                              // console.log(result);
                              if (result.code == 200) {

                                  $('#grid').DataTable().ajax.reload();
                                  toastr.success(result.message.text, result.message.title, {
                                      timeOut: 4000,
                                  });


                              }
                              else if (result.code == 403) {
                                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
                            }
                          },
                          error: function (jqXHR, textStatus, errorThrown) {
                              toastr.warning(
                                      jqXHR.responseJSON.message.text,
                                      jqXHR.responseJSON.message.title,
                                      {timeOut: 4000}
                              );
                          },
                      });

                  }
              });

  }





});



$("body").on("click", "._duppliquer_devis", function (e) {


 

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));
 // alert(_array_ids);
  if (_array_ids) {


      swalWithBootstrapButtons
              .fire({
                  showClass: {
                      popup: "animatedSwal flipInX faster",
                  },
                  position: "top",
                  title: "Confirmation ?",
                  text: "Voulez vous vraiment Duppliquer cette liste ?",
                  type: "warning",
                  showCancelButton: true,
                  showCloseButton: true,
                  confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
                  cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
              })
              .then((result) => {
                  if (result.value) {
                      $.ajax({
                          type: "POST",
                          url: Routing.generate("uv_devis_multiple_duppliquer"),
                          data: {_array_ids},
                          success: function (result) {
                              // console.log(result);
                              if (result.code == 200) {

                                  table.ajax.reload();

                                  toastr.success(result.message.text, result.message.title, {
                                      timeOut: 4000,
                                  });


                              }
                          },
                          error: function (jqXHR, textStatus, errorThrown) {
                              toastr.warning(
                                      jqXHR.responseJSON.message.text,
                                      jqXHR.responseJSON.message.title,
                                      {timeOut: 4000}
                              );
                          },
                      });

                  }
              });

  }





});

$("#_duppliquer").click(function (e) {


 

  var _array_ids = [];

  _array_ids.push($(this).attr("data-id"));
 //alert(_array_ids);
if(_array_ids){


  swalWithBootstrapButtons
  .fire({
      showClass: {
          popup: "animatedSwal flipInX faster",
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment Duppliquer ce devis ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
  })
  .then((result) => {
      if (result.value) {
          $.ajax({
              type: "POST",
              url: Routing.generate("uv_devis_multiple_duppliquer"),
              data: {_array_ids},
              success: function (result) {
                  // console.log(result);
                  if (result.code == 200) {
                   
                 
                     
                      toastr.success(result.message.text, result.message.title, {
                          timeOut: 4000,
                      });
                      
                     
                  }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                  toastr.warning(
                          jqXHR.responseJSON.message.text,
                          jqXHR.responseJSON.message.title,
                          {timeOut: 4000}
                  );
              },
          });
         
      }
  });

}

     



});

$(".ajout").click(function (e)  {
  $.ajax({
    type: "POST",
    url: Routing.generate("uv_devis_fichiers", {
      id: $(this).closest("a").attr("id"),
    }),
    success: function (result) {
      $(".bod1").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true,
      });
      $("#ModalDocumentDynamique").modal("show");
      $("select.select2").select2();
      setTimeout(function () {
        $(".spr1").hide();
        $(".bod1").fadeIn();
      }, 600);
    },
  });
});

$("body").on("submit", "._upload", function (e) {
  //   alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");

  var l = Ladda.create(document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
      type: "POST",
      url: Routing.generate("uv_devis_fichiers", {id: id}),
      data: dta,
      processData: false,
      contentType: false,
      success: function (result) {
          if (result.errors) {
              l.stop();
              //console.log(result.errors);
              ShowFormErrors(selector, form_name, result.errors);
          }
          if (result.code == 200) {
            l.stop();
              toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000,
              });
             
              location.reload();
          } else if (result.code == 403) {
            l.stop();
              toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000,
              });
          }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        l.stop();
          toastr.error("Erreur", errorThrown, {timeOut: 4000});
      },
  });
  e.preventDefault();
});

$("body").on("click", ".scolumn_0", function () {
  $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
  //    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});
$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true,
});

$('.edit').on('click','.detail_form_delete',function(e){

  var id = $(this).attr('id');
  var token = $(this).attr('value');

  swalWithBootstrapButtons
          .fire({
              showClass: {
                  popup: "animatedSwal flipInX faster",
              },
              position: "top",
              title: "Confirmation ?",
              text: "Voulez vous vraiment supprimer cette liste ?",
              type: "warning",
              showCancelButton: true,
              showCloseButton: true,
              confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
              cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
          })
          .then((result) => {
              if (result.value) {
                  $.ajax({
                      type: "DELETE",
                      url: Routing.generate("uv_devisdet_delete", {
                          id: id,
                          token: token,
                      }),
                      data: {},
                      processData: false,
                      contentType: false,
                      success: function (result) {
                          //   console.log(result);
                          if (result.data == "deleted") {
                              $('.edit-detail[id="'+$(this).attr('id')+'"]').remove();
                              toastr.success(result.message.text, result.message.title, {
                                  timeOut: 4000,
                              });
                              // selector.parent().parent().hide();
                              // swal(result.message.title, result.message.text, result.message.success);
                              location.reload();
                          } else if ((result.data = "error")) {
                              toastr.error(result.message.text, result.message.title, {
                                  timeOut: 4000,
                              });
                              //swal(result.message.title, result.message.text, result.message.error);
                          }
                      },
                  });
              }
          });

  e.preventDefault();
  //formDataDetailEditRemove.push({id: $(this).attr('id'),token:$(this).attr('value')});
  
  //console.log(formDataDetailEditRemove);
})



$('body').on('click','.pdf_by_code',function(e){
  window.open(Routing.generate("uv_devis_document_old_sys", {
      id: $(this).attr('data-id')
  }), '_blank');
})
$('body').on('click', '.imprime_document', function(e) {
  e.preventDefault();
  if($(this).attr("data-valide") == 0)  {
      toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {timeOut: 4000})
      return
  }
  window.open($(this).attr('href'), '_blank');
});


