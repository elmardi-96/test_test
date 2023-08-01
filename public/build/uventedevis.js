(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uventedevis"],{

/***/ "./assets/js/components/module_vente/devis.js":
/*!****************************************************!*\
  !*** ./assets/js/components/module_vente/devis.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");






















var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.setRoutingData(routes);
//plugins/steps/jquery.steps.css
__webpack_require__(/*! ../../../../assets/js/plugins/steps/jquery.steps.css */ "./assets/js/plugins/steps/jquery.steps.css");
__webpack_require__(/*! ../../../../assets/js/plugins/steps/jquery.steps.min.js */ "./assets/js/plugins/steps/jquery.steps.min.js");
__webpack_require__(/*! ../../../../assets/js/plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




function create_custom_dropdowns(element, att) {
  $.fn.select2.amd.define("select2/i18n/fr", [], function () {
    // Russian
    return {
      errorLoading: function errorLoading() {
        return "test";
      },
      inputTooLong: function inputTooLong(args) {
        var overChars = args.input.length - args.maximum;
        var message = "Пожалуйста, удалите " + overChars + " символ";
        if (overChars >= 2 && overChars <= 4) {
          message += "а";
        } else if (overChars >= 5) {
          message += "ов";
        }
        return message;
      },
      inputTooShort: function inputTooShort(args) {
        var remainingChars = args.minimum - args.input.length;
        var message = "Tapez " + remainingChars + " caractère ou plus pour faire des recherches";
        return message;
      },
      loadingMore: function loadingMore() {
        return "test";
      },
      maximumSelected: function maximumSelected(args) {
        var message = "Вы можете выбрать " + args.maximum + " элемент";
        if (args.maximum >= 2 && args.maximum <= 4) {
          message += "а";
        } else if (args.maximum >= 5) {
          message += "ов";
        }
        return message;
      },
      noResults: function noResults() {
        return "aucun resultat trouve";
      },
      searching: function searching() {
        return "Rechercher…";
      }
    };
  });
  window.element = element;
  window.att = "current_select_" + att;
  if (window.element.attr("data-entity")) {
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("t_achatdemandeinternecab_find_article_term", {
        selected: att,
        entity: window.element.attr("data-entity"),
        column: window.element.attr("data-column")
      })
    }).then(function (data) {
      console.log(data);
      window.element.prepend('<option selected=""></option>').select2({
        //allowClear: true,
        language: "fr",
        data: data.results,
        minimumResultsForSearch: -1,
        dropdownCssClass: window.att
      }).val(att).trigger("change");
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
    $(" .select2-search--hide").after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
    $(".tt").typeWatch({
      highlight: false,
      wait: 100,
      captureLength: 2,
      callback: function callback(valuennn, e) {
        console.log(e);
        $(".select2-results__option").hide();
        $(".select2-results").prepend('<p class="select2-results__option">Rechercher…</p>');
        window.search = valuennn;
        //alert((valuennn))
        if (window.element.attr("data-entity")) {
          $.ajax({
            dataType: "json",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("t_achatdemandeinternecab_find_article_term", {
              term: valuennn,
              selected: att,
              entity: window.element.attr("data-entity"),
              column: window.element.attr("data-column")
            }),
            success: function success(result, textStatus, errorThrown) {
              if (valuennn == $(".tt").val()) {
                window.element.empty().prepend('<option selected=""></option>').select2({
                  language: "fr",
                  //allowClear: true,
                  minimumResultsForSearch: -1,
                  data: result.results
                }).val(att).trigger("change");
                window.element.select2("open");
                // $(".tt").trigger("focus");
                document.querySelector('.tt').focus();

                //alert(this.value)
                //alert(valuennn)
                // alert('test')
                $(".tt").val(window.search);
              }
            }
          });
        } else {
          toastr.warning("impossible de charger l'entiter", "Erreur", {
            timeOut: 4000
          });
        }
      }
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
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});
var iceTierValide = false;
var idDevisTiers = "";
var idTiers = "";
$("body").on("click", ".btn-maj-ice", function (e) {
  var button = $(".btn-maj-ice");
  button.prop("disabled", true);
  $(".error-custom").hide();
  $(".error-custom").html('');
  var ice_tiers = $("#ice-tiers").val();
  var nom_tiers = $("#nom-tiers").val();
  var tel_tiers = $("#tel-tiers").val();
  if (ice_tiers && /^\d+$/.test(ice_tiers) && ice_tiers.length == 15 && idTiers && nom_tiers && tel_tiers) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("mise_a_jour_ice_devis", {
        id: idTiers,
        ice: ice_tiers
      }),
      data: {
        nom_tiers: nom_tiers,
        tel_tiers: tel_tiers
      },
      success: function success(result) {
        iceTierValide = true;
        idTiers = "";
        button.prop("disabled", false);
        $("#create_devis").trigger('click');
        $("#ModalAddICE").modal("hide");
      }
    });
  } else {
    if (!ice_tiers) {
      $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i>Veuillez remplir ce champ.");
      $(".ice_tiers").show();
      // toastr.warning("Veuillez remplir le champ ICE ", "warning", {timeOut: 4000}); 
    } else if (!/^\d+$/.test(ice_tiers)) {
      $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i>Veuillez saisir des chiffres.");
      $(".ice_tiers").show();
      // toastr.warning("Veuillez saisir des chiffres ", "warning", {timeOut: 4000}); 
    } else if (ice_tiers.length != 15) {
      $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i> ICE incorrect, vérifier l'ICE saisi</b>.");
      $(".ice_tiers").show();
      // toastr.warning("le champ ICE doit contenir <b>15 chiffres</b> ", "warning", {timeOut: 4000}); 
    } else if (!nom_tiers) {
      $(".nom_tiers").html("<i class='fas fa-exclamation-triangle'></i> Veuillez remplir ce champ.");
      $(".nom_tiers").show();
      // toastr.warning("Veuillez remplir le champ Nom ", "warning", {timeOut: 4000}); 
    } else if (!tel_tiers) {
      $(".tel_tiers").html("<i class='fas fa-exclamation-triangle'></i> Veuillez remplir ce champ.");
      $(".tel_tiers").show();
      // toastr.warning("Veuillez remplir le champ Tel ", "warning", {timeOut: 4000}); 
    }

    button.prop("disabled", false);
  }
  e.preventDefault();
});
$("#create_devis").click(function (e) {
  var form_name = $(".form").attr("name");
  $(".error-custom").hide();
  $(".error-custom").html('');
  if (!iceTierValide) {
    // idDevisTiers =dta.get("_id");
    idTiers = $('#uv_deviscab_client').val();
    if (!idTiers) {
      toastr.warning("Veuillez choisir le Client ", "warning", {
        timeOut: 4000
      });
      $("#create_devis").removeClass("disabled");
    }
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("checkIceDevis", {
        id: idTiers
      }),
      success: function success(result) {
        if (result == 'empty') {
          var tiers = $("#uv_deviscab_client option:selected").text();
          $("#ModalAddICE #nom_tiers").html(tiers);
          $('#ModalAddICE input').val('');
          $("#ModalAddICE").modal("show");
        } else {
          iceTierValide = true;
          idTiers = "";
          $("#create_devis").trigger('click');
        }
      }
    });
    return;
  }
  //var params = $('.form').serializeArray();
  // var dta = new FormData($("#t_achatdemandeinternecab")[0]);
  $("#create_devis").addClass("disabled");
  var formData = new FormData();
  var params = $('.form').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
    //  console.log(val.name);
  });

  var data = JSON.stringify(formDataDetail);
  formData.append('detail', data);
  var articles = JSON.stringify(allArticles);
  formData.append('allArticles', articles);
  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_24__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_insert"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      // l.stop();
      $(".errors-list").remove();
      if (result.customErrors) {
        $.each(result.customErrors, function (i, value) {
          $(".form #" + i).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + value + "</span></span></span>");
        });

        // $('#'+)
      } else if (result.errors) {
        //dump(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
        $("#create_devis").removeClass("disabled");
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $("#create_devis").removeClass("disabled");
      } else if (result.dossierEmpty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $("#create_devis").removeClass("disabled");
      } else if (result.data) {
        // alert(result.data.id);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_show", {
          id: result.data.id
        });
        window.location.href = url;
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      $("#create_devis").removeClass("disabled");
    }
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
  var prixTva = getHt(row) * row.tva / 100;
  prixTva = prixTva - prixTva * row.remise / 100;
  return prixTva;
}
function getRemise(row) {
  return getHt(row) * row.remise / 100;
}
function getPrixTTc(row) {
  return row.prixttc = getHt(row) + getTva(row) - getRemise(row);
}

// ---------------------------

// alert('test');

var articles = JSON.stringify(allArticles);

// -----------

var allArticles = [];
var AricleSelected = "";
var action = "ajouter";
function remplirTable() {
  var tr = "";
  allArticles.some(function (element, index, _arr) {
    var Prix_Qte = parseFloat(element.prixUntaire) * parseFloat(element.qte);
    var Prix_Tva = parseFloat(element.prixUntaire) * parseFloat(element.tva);
    var Prix_Remise = parseFloat(element.prixUntaire) * parseFloat(element.remise);
    var Montant = Prix_Qte + Prix_Tva - Prix_Remise;
    if (element.AricleSelected === AricleSelected) {
      tr = tr + '<tr style="d-flex align-items-center"  id="tr_actions_' + index + '">' + '<td class="article">' + element.article + '</td>' + '<td class="qte">' + element.qte + '</td>' + '<td class="prixUntaire">' + element.prixUntaire + '</td>' + '<td class="tva">' + element.tva + '</td>' + '<td class="remise">' + element.remise + '</td>' + '<td class="montant text-center">' + Montant + '</td>' + '<td style="width: 11% ;" class="text-center ua_technique" >' + '<a class="btn btn-white btn-xs upper  ua_edit"   id="' + index + '"><i class="fa fa-edit text-primary "></i></a> ' + '<a class="btn btn-white btn-xs upper  ua_suppimer_ligne" id="' + index + '"><i class="fa fa-trash text-danger "></i></a> </td>' + '</tr>';
    }
  });
  $(".waves-ripple").remove();
  var formTr = $('tbody > #ua_technique_form').html();
  $('#ua_technique_table > tbody').html(tr);
  $('#ua_technique_table > tbody').append('<tr id="ua_technique_form">' + formTr + '</tr>');
  console.log(tr);
}
$("body").on("click", ".ua_technique > .add_form_ua", function (e) {
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
$("body").on('click', '.ua_supprimer_article', function () {
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
$("body").on('click', '.ua_confirmer', function () {
  // $('.ua_success').fadeIn();
  // setTimeout(function () {
  //     $('.ua_success').fadeOut();
  // }, 3000); 
  toastr.success('vous avez bien confirmé', 'Confirmation', {
    timeOut: 4000
  });
  $("#ModalDocume").modal("hide");
  $('.fermer_ua_technique_det').fadeOut();
});
$("body").on('click', '.ua_edit', function () {
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
$("body").on('click', '.ua_suppimer_ligne', function () {
  var idLine = $(this).attr('id');
  allArticles.some(function (element, index, _arr) {
    if (index == idLine) {
      allArticles.splice(index, 1);
    }
  });
  remplirTable();
});
function verifierForm() {
  var message = "";
  $("#ua_technique_form input").each(function () {
    var element = $(this);
    if (element.val() == "") {
      message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs " + $(this).attr('class').split(' ').pop() + "<br>";
      $('.ua_alert_danger').html(message);
    }
  });
  if (message == "") {
    $("#ua_technique_form input").each(function () {
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
$("body").on('click', '.importer_canvas', function () {
  $('#ua_import_modal').modal('show');
});
$("body").on('click', '.fermer_ua_import_modal', function () {
  $('#ua_import_modal').modal('hide');
});
$('#file').on('change', function () {
  console.log($(this).val());
  var value = $(this).val().split(".");
  var extention = value[value.length - 1];
  if (extention != 'xlsx') {
    toastr.warning("veuillez choisir un fichier xlsx", "warning ", {
      timeOut: 4000
    });
  }
});

// alert('ziko');

$('#ua_import_form').on('submit', function (event) {
  event.preventDefault();
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("import_ua_det"),
    method: "POST",
    data: new FormData(this),
    dataType: 'json',
    contentType: false,
    cache: false,
    processData: false,
    success: function success(result) {
      // console.log(result);
      if (result.hasOwnProperty('message')) {
        if (result.message.title === "err") {
          toastr.warning("Warning", result.message.text, {
            timeOut: 4000
          });
        }
      } else {
        result.some(function (element, index, _arr) {
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
  if (AricleSelected == "") {
    toastr.error("Veuillez selectionner un article", "Error", {
      timeOut: 4000
    });
    return;
  }
  $('.error-class-tab').remove();
  var flag = 0;
  for (var index = 0; index < formDataDetail.length; index++) {
    if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id && editArticleColumn != formDataDetail[index].articleId) {
      // return $('#' + nameDetail + '_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
      toastr.error("Ce article est deja existe", "Error", {
        timeOut: 4000
      });
      return;
    }
  }
  for (var _index = 0; _index < errors_details.length; _index++) {
    var name = nameDetail + '[' + errors_details[_index].property + ']';
    var value = $('[name="' + nameDetail + '[' + errors_details[_index].property + ']' + '"]').val();
    if (errors_details[_index].cause == null && value == '') {
      flag = 1;
      $('[name="' + name + '"]').parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[_index].message + "</span></span></span>");
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
    articlesDet.some(function (element, index, _arr) {
      if (element == AricleSelected) {
        $("#ModalDocume").modal("show");
        $('.ua_confirmer_annuler').fadeOut();
      }
    });
    remplirTable();
  }
  allArticles.some(function (element, index, _arr) {
    if (element.AricleSelected == AricleSelected) {
      $('.ua_confirmer_annuler').fadeIn();
    }
  });
  var row = {
    quantite: $('#' + nameDetail + '_quantite').val(),
    prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
    tva: $('#' + nameDetail + '_tva').val(),
    remise: $('#' + nameDetail + '_remise').val()
  };
  if (editColumn != null) {
    formDataDetail[editColumn] = {
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
      prixttc: getPrixTTc(row)
    };
  } else {
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
      prixttc: getPrixTTc(row)
    });
  }
  var lineNo = 1;
  var cl = "";
  $(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
  create_custom_dropdowns($(".articles"), "");
  $(".table-detail + table ").removeClass('remove');
  $('.table-detail tbody').html('');
  $.each(formDataDetail, function (i, value) {
    if (lineNo % 2 == 0) {
      cl = "impair";
    } else {
      cl = "pair";
    }
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation != "") {
      observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
    }
    //add
    //categorie
    var my_row = " <tr class=" + cl + "><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td style='text-align:center'>" + value.unite + "</td><td style='text-align:center' >" + value.quantite + "</td> <td style='text-align:center'>" + value.prixunitaire.toFixed(2) + "</td><td style='text-align:center'>" + tva + "</td><td style='text-align:center'>" + remise + "</td><td style='text-align:center'>" + value.montantRemise.toFixed(2) + "</td><td style='text-align:center'>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" + i + "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
    $(".new .table-detail > tbody").append(my_row);
    lineNo++;
  });
  $("#create_devis").removeClass("disabled");
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
    if (lineNo % 2 == 0) {
      cl = "impair";
    } else {
      cl = "pair";
    }
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation != "") {
      observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
    }
    //categorie
    var my_row = " <tr class=" + cl + "><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td style='text-align:center'>" + value.unite + "</td><td style='text-align:center'>" + value.quantite + "</td> <td style='text-align:center'>" + value.prixunitaire.toFixed(2) + "</td><td style='text-align:center'>" + tva + "</td><td style='text-align:center'>" + remise + "</td><td style='text-align:center'>" + value.montantRemise.toFixed(2) + "</td><td style='text-align:center'>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" + i + "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
    $(".new .table-detail > tbody").append(my_row);
    lineNo++;
  });
  var id = $(this).attr('id');
  var row_index = $(this).attr('id');
  var col_index = $(this).index();
  $.ajax({
    type: "POST",
    data: {
      detail: formDataDetail[$(this).attr('id')]
    },
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_edit_detail_new", {
      id: id
    }),
    success: function success(result) {
      // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
      $(".table-detail > tbody  > tr").eq(row_index).addClass("table-tr-style").html("<td colspan='10'>" + result + "</td>");
      $($(".table-detail > tbody  > tr").eq(row_index)).find(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
      create_custom_dropdowns($($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"), $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles").attr("if-selected"));
      //$(".load-er").fadeOut().remove();
      // $('.det_for').fadeIn(200)
      $(".bod").empty();
      $(".spr").fadeIn();
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("t_achatdemandeinternecab_find_article"),
        processData: false,
        contentType: false,
        success: function success(result, textStatus, errorThrown) {
          $(".bod").html(result).hide();
          KTDatatablesSearchOptionsAdvancedSearch.init();
          setTimeout(function () {
            $(".spr").hide();
            $(".bod").fadeIn();
          }, 600);
        }
      });
      $(".table-detail + table ").addClass('remove');
      return true;
      //    alert(row_index);
      //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
      //            console.log(result)
    }
  });

  e.preventDefault();
});
$(".new").on("click", ".delete_element", function (e) {
  var lineNo = 1;
  var cl = "";
  formDataDetail.splice($(this).attr("id"), 1);
  $(".new .table-detail > tbody tr").remove();
  if (formDataDetail.length < 1) {
    $("#create_devis").last().addClass("disabled");
  }
  $(".new .table-detail > tbody tr").remove();
  $.each(formDataDetail, function (i, value) {
    if (lineNo % 2 == 0) {
      cl = "impair";
    } else {
      cl = "pair";
    }
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation != "") {
      observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
    }
    var my_row = " <tr class=" + cl + "><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td style='text-align:center'>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + remise + "</td><td>" + value.montantRemise.toFixed(2) + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a></td></tr>" + observation;
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
    success: function success(html) {
      // console.log(html);
      $(".compteRubrique").replaceWith($(html).find(".compteRubrique"));
      $(".sel2").select2();
      $(".compteRubrique").parent().find(".select2").not(":first").remove();
      $(".comptePoste").parent().find(".select2").not(":first").remove();
      $(".compte").parent().find(".select2").not(":first").remove();
    }
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
    success: function success(html) {
      console.log(html);
      $(".comptePoste").replaceWith($(html).find(".comptePoste"));
      $(".sel2").select2();
      $(".comptePoste").parent().find(".select2").not(":first").remove();
      $(".compte").parent().find(".select2").not(":first").remove();
    }
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
    success: function success(html) {
      console.log(html);
      $(".compte").replaceWith($(html).find(".compte"));
      $(".sel2").select2();
      $(".compte").parent().find(".select2").not(":first").remove();
    }
  });
});
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "desc"]],
  // scrollX: true,
  columns: [{
    orderable: false,
    width: "3%",
    name: 'tab.id'
  }, {
    orderable: true,
    width: "10%",
    name: 'tab.code'
  }, {
    orderable: true,
    width: "10%",
    name: 'tab.datedevis'
  }, {
    orderable: true,
    width: "15%",
    name: 'tab.description'
  }, {
    orderable: true,
    width: "15%",
    name: 'achat'
  }, {
    orderable: true,
    width: "20%",
    name: 'tab.client'
  }, {
    orderable: true,
    width: "15%",
    name: 'tab.MtHt' /*, "targets": [4, 5]*/
  }, {
    orderable: true,
    width: "20%",
    name: 'tab.MtTva'
  }, {
    orderable: true,
    width: "10%",
    name: 'tab.MtTot'
  }, {
    orderable: true,
    width: "10%",
    name: 'tab.budget'
  }, {
    width: "8%",
    orderable: true,
    name: 'tab.depense'
  }, {
    orderable: true,
    className: "cmd"
  }, {
    orderable: false,
    className: "br"
  }, {
    orderable: false,
    className: "fac"
  }, {
    orderable: false,
    className: "rg"
  }, {
    width: "8%",
    orderable: true,
    searchable: false
  }, {
    width: "8%",
    orderable: true,
    name: 'tab.position_actuel'
  }, {
    orderable: true,
    searchable: false,
    width: "5%"
  }],
  columnDefs: [{
    searchable: false,
    targets: 17,
    render: function render(t, a, l, s) {
      var data = "";
      t.forEach(function (element) {
        var link = "";
        if (element._route_link) {
          link = "href='" + element._route_link + "'";
        }
        data = data + "<li><a " + link + "  data-transition='" + element.name + "' data-id='" + element.id + "' data-title='" + element.titre + "' class='dropdown-item  " + element["class"] + " " + element.idCs + "' ><i class='fa " + element.icon + "' ></i> " + element.titre + "</a></li>";
      });
      return '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' + data + ' </ul> </div> \t</div>\t';
    }
  }],
  dom: '<"html5buttons btn-group"f>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }, {
    extend: "excel",
    exportOptions: {
      columns: ":visible",
      rows: ":visible",
      format: {
        body: function body(data, row, column, node) {
          data = $('<p>' + data + '</p>').text();
          return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
        }
      }
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("datatables_langue"),
    processing: true
  }
  //fixedHeader: true,
});

table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();

  //console.log(st);
  //if (st != null) {
  //    $.each(st.columns, function (key, value) {
  //        if (value.search.search != "") {
  //            $('.remove-filter').show();
  //            return false;
  //        }
  //    });
  //}

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__["CustomSearchText"](api, [], []);
  // CustomSearchDatatable.CustomSearchDate(api, [2], []);
  //  CustomSearchDatatable.CustomSearchSelect(api, [4, 14], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__["CustomSearchCheckbox"](api, [0], []);
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
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_edit", {
      id: id
    });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_24__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devisdet_insert", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        $(".errors-list").remove();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});
$(".edit").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_24__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_update", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      $(".errors-list").remove();
      if (result.errors) {
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".form #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});
$("#_show").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_show", {
      id: id
    });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#_statut").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_statut", {
        id: id
      }),
      success: function success(result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_statut", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          $(".errors-list").remove();
          jQuery.each(result.errors.violations, function (i, val) {
            var column = val.propertyPath;
            var columnName = column.split(".");
            // console.log(columnName[1]);
            $(".form_statut #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
          });
        } else if (result.code == 200) {
          table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          $(".actions").empty().removeClass("sidebar-open");
          // location.reload();
        }
      },

      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, {
          timeOut: 4000
        });
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#_generer").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_generer", {
        id: id
      }),
      success: function success(result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_generer", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
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
            $(".errors_list").append("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>");
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
            timeOut: 4000
          });
          $(".actions").empty().removeClass("sidebar-open");
          // location.reload();
        }
      },

      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, {
          timeOut: 4000
        });
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#_archiver").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment Archiver cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_archive", {
            id: id
          }),
          success: function success(result) {
            if (result.code == 200) {
              table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              $(".actions").empty().removeClass("sidebar-open");
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_24__["create"](document.querySelector(".my-button2"));
  l.start();
  //    alert(id);
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_commande", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
        l.stop();
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
        } else if (result.code == 200) {
          // table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          $(".actions").empty().removeClass("sidebar-open");
          location.reload();
        }
        if (result.notvalide) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        }
        if (result.code == 404) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        l.stop();
        toastr.error("Erreur", errorThrown, {
          timeOut: 4000
        });
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#_imprimer").click(function (e) {
  //  var id = table.row('.selected').id();
  var id = $("#test").data("devisId");
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_pdf", {
      id: id
    });
    //   window.location.href = url;
    window.open(url, "_blank");
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
});
$(".edit").on("click", ".detail_edit", function (e) {
  //alert($(this).attr('id'))
  var id = $(this).attr('id');
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devisdet_edit_detail", {
      id: id
    }),
    success: function success(result) {
      // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
      $(".table-detail > tbody  > tr").eq(row_index).addClass("table-tr-style").html("<td colspan='10'>" + result + "</td>");
      $($(".table-detail > tbody  > tr").eq(row_index)).find(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
      create_custom_dropdowns($($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"), $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles").attr("if-selected"));
      //$(".load-er").fadeOut().remove();
      // $('.det_for').fadeIn(200)
      $(".bod").empty();
      $(".spr").fadeIn();
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("t_achatdemandeinternecab_find_article"),
        processData: false,
        contentType: false,
        success: function success(result, textStatus, errorThrown) {
          $(".bod").html(result).hide();
          KTDatatablesSearchOptionsAdvancedSearch.init();
          setTimeout(function () {
            $(".spr").hide();
            $(".bod").fadeIn();
          }, 600);
        }
      });
      return true;
      //    alert(row_index);
      //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
      //            console.log(result)
    }
  });

  e.preventDefault();
});
$(".edit").on("click", ".detail_form", function (e) {
  $('.error-class-tab').remove();
  var id = $("#_id").val();
  var flag = 0;
  for (var index = 0; index < formDataDetail.length; index++) {
    if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id) {
      //  return $('#'+nameDetail+'_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
      toastr.error("Ce article est deja existe ", "Error", {
        timeOut: 4000
      });
      return;
    }
  }
  if ($('.edit-detail[article="' + $('#' + nameDetail + '_article').select2('data')[0].id + '"]').attr('article') == $('#' + nameDetail + '_article').select2('data')[0].id && $(this).parents('.edit-detail').attr('article') != $('#' + nameDetail + '_article').select2('data')[0].id) {
    //  return $('#'+nameDetail+'_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
    toastr.error("Ce article est deja existe", "Error", {
      timeOut: 4000
    });
    return;
  }
  for (var _index2 = 0; _index2 < errors_details.length; _index2++) {
    var name = nameDetail + '[' + errors_details[_index2].property + ']';
    var value = $('[name="' + nameDetail + '[' + errors_details[_index2].property + ']' + '"]').val();
    if (errors_details[_index2].cause == null && value == '') {
      flag = 1;
      $('[name="' + name + '"]').parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[_index2].message + "</span></span></span>");
    }
  }
  if (flag == 1) {
    return false;
  }
  var row = {
    quantite: $('#' + nameDetail + '_quantite').val(),
    prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
    tva: $('#' + nameDetail + '_tva').val(),
    remise: $('#' + nameDetail + '_remise').val()
  };
  formDataDetail = [];
  if ($('#' + nameDetail + '_article').select2('data')[0].id == "") {
    toastr.error('entrer tous les choix', {
      timeOut: 4000
    });
    return;
  }
  // console.log($('#'+nameDetail+'_article').select2('data')[0].id)
  formDataDetail.push({
    id: $(this).parents('.edit-detail').attr('id'),
    articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
    titre: $('#' + nameDetail + '_article').select2('data')[0].text,
    code: $('#' + nameDetail + '_article').select2('data')[0].code,
    unite: $('#' + nameDetail + '_unite').select2('data')[0].text,
    uniteId: $('#' + nameDetail + '_unite').select2('data')[0].id,
    quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
    prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
    tva: parseFloat($('#' + nameDetail + '_tva').val()),
    remise: parseFloat($('#' + nameDetail + '_remise').val()),
    observation: $('#' + nameDetail + '_observation').val(),
    montantRemise: getRemise(row),
    prixttc: getPrixTTc(row)
  });
  var formData = new FormData();
  var data = JSON.stringify(formDataDetail);
  formData.append('detail', data);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devisdet_insert", {
      id: id
    }),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      //  console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
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
          timeOut: 4000
        });
        location.reload();
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
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
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: "animatedSwal flipInX faster"
    },
    position: "top",
    title: "Confirmation ?",
    text: "Voulez vous vraiment supprimer cette liste ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        type: "DELETE",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devisdet_delete", {
          id: id,
          token: token
        }),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          //   console.log(result);
          if (result.data == "deleted") {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            // selector.parent().parent().hide();
            // swal(result.message.title, result.message.text, result.message.success);
            location.reload();
          } else if (result.data = "error") {
            toastr.error(result.message.text, result.message.title, {
              timeOut: 4000
            });
            //swal(result.message.title, result.message.text, result.message.error);
          }
        }
      });
    }
  });

  e.preventDefault();
});
$("#_charges").click(function (e) {
  // var id = table.row('.selected').id();
  var id = $("#test").data("devisId");
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_charges", {
      id: id
    });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_24__["create"](document.querySelector(".my-button2"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_charges", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 200) {
        table.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //$(".actions").empty().removeClass('sidebar-open');
        location.reload();
      }
    }
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
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: "animatedSwal flipInX faster"
    },
    position: "top",
    title: "Confirmation ?",
    text: "Voulez vous vraiment supprimer cette liste ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        type: "DELETE",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_chargedevis_delete", {
          id: id,
          token: token
        }),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          //   console.log(result);
          if (result.data == "deleted") {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            // selector.parent().parent().hide();
            // swal(result.message.title, result.message.text, result.message.success);
            location.reload();
          } else if (result.data = "error") {
            toastr.error(result.message.text, result.message.title, {
              timeOut: 4000
            });
            //swal(result.message.title, result.message.text, result.message.error);
          }
        }
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_24__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_fichiers", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$("._delete_fichier").click(function (e) {
  var id = $(this).attr("id");
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_fichiers_delete", {
            id: id
          }),
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
      }
    });
  } else {
    toastr.warning("Impossible d'effectuer cette operation", "warning", {
      timeOut: 4000
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
  if (transition == "apres_valider_commander") {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_commande", {
        id: id
      }),
      success: function success(result) {
        $(".bod").html(result).hide();
        $("#MyModal").modal("show");
        setTimeout(function () {
          $(".spr").hide();
          $(".bod").fadeIn();
        }, 600);
      }
    });
  } else if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer a l'etat '" + title + "' pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Non !"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_apply_transitions", {
            id: id
          }),
          success: function success(result) {
            console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
            }
            if (result.code == 201) {
              // alert(result.valider);
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_commande", {
                id: result.id
              });
              window.location.href = url;
            }
            if (result.code == 202) {
              // alert(result.valider);
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_commande", {
                id: result.id
              });
              window.location.href = url;
            }
            if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
            if (result.code == 404) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
      }
    });
  } else {
    toastr.warning("Commande non renseigne ", "warning", {
      timeOut: 4000
    });
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_24__["create"](document.querySelector("." + type));
  //alert($(document.activeElement).attr('class').split(' ').pop());
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_generer_insert", {
      id: id,
      type: type
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
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
            timeOut: 4000
          });
          location.reload();
        } else {
          $(".verifier").removeClass("ladda-button").attr("disabled", "disabled");
          $("#disable").prop("disabled", false);
          window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_pdf_generer_verifier"), "_blank");
        }
        //window.document.location = Routing.generate('uv_devis_pdf_generer_insert');
        //location.reload();
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_show", {
    id: $(this).closest("tr").attr("id")
  });
  window.location.href = url;
});
$(".wizard-big").steps({
  bodyTag: "fieldset",
  onStepChanging: function onStepChanging(event, currentIndex, newIndex) {
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
  onStepChanged: function onStepChanged(event, currentIndex, priorIndex) {
    // Suppress (skip) "Warning" step if the user is old enough.
    if (currentIndex === 2 && Number($("#age").val()) >= 18) {
      $(this).steps("next");
    }

    // Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
    if (currentIndex === 2 && priorIndex === 3) {
      $(this).steps("previous");
    }
  },
  onFinishing: function onFinishing(event, currentIndex) {
    var form = $(this);

    // Disable validation on fields that are disabled.
    // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
    form.validate().settings.ignore = ":disabled";

    // Start validation; Prevent form submission if false
    return form.valid();
  },
  onFinished: function onFinished(event, currentIndex) {
    var form = $(this);

    // Submit form input
    form.submit();
  }
}).validate({
  errorPlacement: function errorPlacement(error, element) {
    element.before(error);
  },
  rules: {
    confirm: {
      equalTo: "#password"
    }
  }
});
var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false
});
var tableShow = $("#datatable-show").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  columns: [{
    width: "5%"
  }, {
    width: "10%"
  }, {
    width: "35%"
  }, {
    width: "20%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }],
  footerCallback: function footerCallback(row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
    };

    // Total over all pages
    total = api.column(7).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(7, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(1).footer()).html("Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});

//var tableShow3 = $("#datatable-show3").DataTable({ paging: false });

var tableShow3 = $(".datatable-show3").DataTable({
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  deferRender: true,
  pageLength: 15,
  scrollX: true,
  columns: [{
    width: "5%",
    orderable: true,
    searchable: true,
    targets: [0]
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "10%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true /*, visible: true*/
  }],

  paging: false,
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table2.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("datatables_langue"),
    processing: true
  }
  //fixedHeader: true,
});

var tableShow4 = $(".datatable-show4").DataTable({
  paging: false
});
var tableShow = $("#datatable-show9").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  footerCallback: function footerCallback(row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
    };

    // Total over all pages
    total = api.column(5).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(5, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(1).footer()).html("Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});
$(document).ready(function () {
  $(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
  create_custom_dropdowns($(".articles"), "");
});
"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function () {
  $.fn.dataTable.Api.register("column().title()", function () {
    return $(this.header()).text().trim();
  });
  return {
    init: function init() {
      var t;
      t = $("#kt_table_1").DataTable({
        ajax: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("t_achatdemandeinternecab_find_article_table"),
          // json datasource
          type: "get",
          "data": {
            "vente": true
          }
        },
        deferRender: true,
        serverSide: true,
        lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
        pageLength: 25,
        dom: 'f<"html5buttons btn-group"B>lTgtip',
        columns: [{
          orderable: true,
          name: 'art.id',
          width: "5%"
        }, {
          orderable: true,
          name: 'art.code'
        }, {
          orderable: true,
          name: 'art.titre'
        }, {
          orderable: true,
          name: 'tab.abreviation'
        }, {
          orderable: true,
          name: 'n1.designation'
        }, {
          orderable: true,
          name: 'n2.designation'
        }, {
          orderable: true,
          name: 'n3.designation'
        }, {
          orderable: true,
          name: 'n4.designation'
        }],
        'createdRow': function createdRow(row, data, dataIndex) {
          console.log(data);
          $(row).attr('text', data[2]);
          $(row).attr('pu', data[8]);
          $(row).attr('tva', data[9]);
          $(row).attr('unite', data[10]);
          $(row).attr('code', data[11]);
          $(row).attr('remise', data[12]);
        },
        buttons: ["columnsToggle", {
          text: "Restaurer",
          className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
          action: function action(e, dt, node, config) {
            table.state.clear();
            window.location.reload();
          }
        }],
        language: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("datatables_langue"),
          processing: true
        },
        //fixedHeader: true,
        bInfo: false
      }), t.on("init.dt", function (e, settings) {
        var api = new $.fn.dataTable.Api(settings);
        var st = api.state.loaded();
        var data = api.data();

        //console.log(st);
        //if (st != null) {
        //    $.each(st.columns, function (key, value) {
        //        if (value.search.search != "") {
        //            $('.remove-filter').show();
        //            return false;
        //        }
        //    });
        //}

        _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__["CustomSearchText"](api, [0, 1, 3, 2, 4, 5, 6, 7], []);
      });
    }
  };
}();
$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
  sNext: '<i class="fa fa-chevron-right" ></i>',
  sPrevious: '<i class="fa fa-chevron-left" ></i>'
});
$(".modalActivate").click(function () {
  $(".bod").empty();
  $(".spr").fadeIn();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("t_achatdemandeinternecab_find_article"),
    processData: false,
    contentType: false,
    success: function success(result, textStatus, errorThrown) {
      $(".bod").html(result).hide();
      KTDatatablesSearchOptionsAdvancedSearch.init();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
});
var code = null;
$("body").on("click", "#kt_table_1 tbody tr", function () {
  //alert($(this).parent().parent().attr("unite"))
  code = $(this).attr("code");
  if (window.element.find("option[value='" + $(this).attr("id") + "']").length) {
    window.element.val($(this).attr("id")).trigger("change");
    $(".prixunitaire").val($(this).attr("pu"));
    $(".tva").val($(this).attr("tva"));
    $(".remise").val($(this).attr("remise"));
    $(".select2_unite").val($(this).attr("unite")).trigger("change");
    $("#exampleModalPreview").modal("hide");
  } else {
    // Create a DOM Option and pre-select by default
    var newOption = new Option($(this).attr("text"), $(this).attr("id"), true, true);
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
    $(myclass).parent().find(".select2 .select2-selection__arrow").html('<i class="i-load fa fa-refresh"></i>');
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
  } else if (type == "PRJ") {
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
    success: function success(html) {
      //console.log(html);
      getSubSelect(".sousmarche", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    }
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
    success: function success(html) {
      //console.log(html);
      getSubSelect(".sousprojet", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    }
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
      cancelButtonText: "<i class='fa fa-times'></i> Non !"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate('uv_devis_generer_fusionnement'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              table.ajax.reload();
            }

            // $(".action ,.scolumn_0").prop('checked', false);
          }
        });
      }
    });
  }

  if ($(this).val() == "_desactiver" && _array_ids != null) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate('uv_devis_desactiver'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            if (result.errors) {
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.data) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              table.ajax.reload();
            }
          }
        });
        $("._multiple_actions").val("");
      }
    });
  }
  if ($(this).val() == "_duppliquer" && _array_ids != null) {
    // alert();
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment Duppliquer ce devis ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate('uv_devis_multiple_duppliquer'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            if (result.errors) {
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
            }
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              table.ajax.reload();
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          }
        });
        $("._multiple_actions").val("");
      }
    });
  }
});
$("#_desactiver").click(function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver ce devis  ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_desactiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.errors) {
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.data) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              table.ajax.reload();
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
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
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_desactiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.errors) {
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.data) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              table.ajax.reload();
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
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
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Annuler!",
      cancelButtonText: "<i class='fa fa-times'></i> No!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_annuler"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.errors) {
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.data) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              table.ajax.reload();
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
      }
    });
  }
});
$("#_delete").click(function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_delete"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              // $('#grid').DataTable().ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_index");
              window.location.href = url;
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
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
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_deviscab_delete"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              $('#grid').DataTable().ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
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
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment Duppliquer cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_multiple_duppliquer"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
      }
    });
  }
});
$("#_duppliquer").click(function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  //alert(_array_ids);
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment Duppliquer ce devis ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_multiple_duppliquer"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
      }
    });
  }
});
$(".ajout").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_fichiers", {
      id: $(this).closest("a").attr("id")
    }),
    success: function success(result) {
      $(".bod1").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique").modal("show");
      $("select.select2").select2();
      setTimeout(function () {
        $(".spr1").hide();
        $(".bod1").fadeIn();
      }, 600);
    }
  });
});
$("body").on("submit", "._upload", function (e) {
  //   alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var l = ladda__WEBPACK_IMPORTED_MODULE_24__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_fichiers", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_23__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$("body").on("click", ".scolumn_0", function () {
  $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
  //    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});

$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true
});
$('.edit').on('click', '.detail_form_delete', function (e) {
  var id = $(this).attr('id');
  var token = $(this).attr('value');
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: "animatedSwal flipInX faster"
    },
    position: "top",
    title: "Confirmation ?",
    text: "Voulez vous vraiment supprimer cette liste ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        type: "DELETE",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devisdet_delete", {
          id: id,
          token: token
        }),
        data: {},
        processData: false,
        contentType: false,
        success: function success(result) {
          //   console.log(result);
          if (result.data == "deleted") {
            $('.edit-detail[id="' + $(this).attr('id') + '"]').remove();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            // selector.parent().parent().hide();
            // swal(result.message.title, result.message.text, result.message.success);
            location.reload();
          } else if (result.data = "error") {
            toastr.error(result.message.text, result.message.title, {
              timeOut: 4000
            });
            //swal(result.message.title, result.message.text, result.message.error);
          }
        }
      });
    }
  });

  e.preventDefault();
  //formDataDetailEditRemove.push({id: $(this).attr('id'),token:$(this).attr('value')});

  //console.log(formDataDetailEditRemove);
});

$('body').on('click', '.pdf_by_code', function (e) {
  window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_22___default.a.generate("uv_devis_document_old_sys", {
    id: $(this).attr('data-id')
  }), '_blank');
});
$('body').on('click', '.imprime_document', function (e) {
  e.preventDefault();
  if ($(this).attr("data-valide") == 0) {
    toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {
      timeOut: 4000
    });
    return;
  }
  window.open($(this).attr('href'), '_blank');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var charAt = uncurryThis(''.charAt);
var $parseFloat = global.parseFloat;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.some.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.some.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $some = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").some;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ })

},[["./assets/js/components/module_vente/devis.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265","vendors~erpclient~uventecommande~uventedevis",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e","erpclient~uventecommande~uventedevis"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfdmVudGUvZGV2aXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1mbG9hdC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMiLCJlbGVtZW50IiwiYXR0IiwiJCIsImZuIiwic2VsZWN0MiIsImFtZCIsImRlZmluZSIsImVycm9yTG9hZGluZyIsImlucHV0VG9vTG9uZyIsImFyZ3MiLCJvdmVyQ2hhcnMiLCJpbnB1dCIsImxlbmd0aCIsIm1heGltdW0iLCJtZXNzYWdlIiwiaW5wdXRUb29TaG9ydCIsInJlbWFpbmluZ0NoYXJzIiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwid2luZG93IiwiYXR0ciIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZ2VuZXJhdGUiLCJzZWxlY3RlZCIsImVudGl0eSIsImNvbHVtbiIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInByZXBlbmQiLCJsYW5ndWFnZSIsInJlc3VsdHMiLCJtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsImRyb3Bkb3duQ3NzQ2xhc3MiLCJ2YWwiLCJ0cmlnZ2VyIiwiZmFkZU91dCIsInJlbW92ZSIsImZhZGVJbiIsIm9uIiwiZSIsImFmdGVyIiwidHlwZVdhdGNoIiwiaGlnaGxpZ2h0Iiwid2FpdCIsImNhcHR1cmVMZW5ndGgiLCJjYWxsYmFjayIsInZhbHVlbm5uIiwiaGlkZSIsInNlYXJjaCIsImRhdGFUeXBlIiwidGVybSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJlbXB0eSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJwYXJhbXMiLCJwcml4QWNoYXQiLCJ0dmEiLCJyZW1pc2UiLCJ1bml0ZSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiaWNlVGllclZhbGlkZSIsImlkRGV2aXNUaWVycyIsImlkVGllcnMiLCJidXR0b24iLCJwcm9wIiwiaHRtbCIsImljZV90aWVycyIsIm5vbV90aWVycyIsInRlbF90aWVycyIsInRlc3QiLCJpZCIsImljZSIsIm1vZGFsIiwic2hvdyIsInByZXZlbnREZWZhdWx0IiwiY2xpY2siLCJmb3JtX25hbWUiLCJyZW1vdmVDbGFzcyIsInRpZXJzIiwidGV4dCIsImFkZENsYXNzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInNlcmlhbGl6ZUFycmF5IiwiZWFjaCIsImkiLCJhcHBlbmQiLCJuYW1lIiwidmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9ybURhdGFEZXRhaWwiLCJhcnRpY2xlcyIsImFsbEFydGljbGVzIiwic2VsZWN0b3IiLCJsIiwiTGFkZGEiLCJzdGFydCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJjdXN0b21FcnJvcnMiLCJlcnJvcnMiLCJTaG93Rm9ybUVycm9ycyIsInRpdGxlIiwiZG9zc2llckVtcHR5IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJqcVhIUiIsInN0b3AiLCJhcnJheV9kZXRhaWwiLCJlcnJvcnNfZGV0YWlscyIsIm5hbWVEZXRhaWwiLCJlZGl0Q29sdW1uIiwiZWRpdEFydGljbGVDb2x1bW4iLCJhZGRFdmVudExpc3RlbmVyIiwialF1ZXJ5IiwicGFyc2VKU09OIiwiZ2V0SHQiLCJyb3ciLCJxdWFudGl0ZSIsInByaXh1bml0YWlyZSIsImdldFR2YSIsInByaXhUdmEiLCJnZXRSZW1pc2UiLCJnZXRQcml4VFRjIiwicHJpeHR0YyIsIkFyaWNsZVNlbGVjdGVkIiwiYWN0aW9uIiwicmVtcGxpclRhYmxlIiwidHIiLCJzb21lIiwiaW5kZXgiLCJfYXJyIiwiUHJpeF9RdGUiLCJwYXJzZUZsb2F0IiwicHJpeFVudGFpcmUiLCJxdGUiLCJQcml4X1R2YSIsIlByaXhfUmVtaXNlIiwiTW9udGFudCIsImFydGljbGUiLCJmb3JtVHIiLCJ2ZXJpZmllckZvcm0iLCJBcnRpY2xlIiwicHVzaCIsInNwbGljZSIsImlkTGluZSIsImdldCIsImJlZm9yZSIsInNwbGl0IiwicG9wIiwiZmxvYXRWYWx1ZXMiLCJtYXRjaCIsImlzTmFOIiwiZXh0ZW50aW9uIiwiZXZlbnQiLCJtZXRob2QiLCJjYWNoZSIsImhhc093blByb3BlcnR5IiwidmVyaWZpZXJGbG9hdCIsImFydGljbGVzRGV0IiwiZmxhZyIsImFydGljbGVJZCIsInByb3BlcnR5IiwiY2F1c2UiLCJwYXJlbnQiLCJ0aXRyZSIsImNvZGUiLCJ1bml0ZUlkIiwib2JzZXJ2YXRpb24iLCJtb250YW50UmVtaXNlIiwibGluZU5vIiwiY2wiLCJteV9yb3ciLCJ0b0ZpeGVkIiwicm93X2luZGV4IiwiY29sX2luZGV4IiwiZGV0YWlsIiwiZXEiLCJmaW5kIiwiS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoIiwiaW5pdCIsInNldFRpbWVvdXQiLCJsYXN0IiwiJGZvcm0iLCJjbG9zZXN0IiwicmVwbGFjZVdpdGgiLCJub3QiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImRlZmVyUmVuZGVyIiwic2VydmVyU2lkZSIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwid2lkdGgiLCJjbGFzc05hbWUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJ0IiwiYSIsInMiLCJmb3JFYWNoIiwibGluayIsIl9yb3V0ZV9saW5rIiwiaWRDcyIsImljb24iLCJkb20iLCJidXR0b25zIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsInJlbG9hZCIsImV4dGVuZCIsImV4cG9ydE9wdGlvbnMiLCJyb3dzIiwiZm9ybWF0IiwiYm9keSIsImlzTnVtZXJpYyIsInJlcGxhY2UiLCJwcm9jZXNzaW5nIiwic2V0dGluZ3MiLCJhcGkiLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsImZpbHRlciIsInRvZ2dsZSIsImhhc0NsYXNzIiwiZHRhIiwiYWN0aXZlRWxlbWVudCIsInZpb2xhdGlvbnMiLCJwcm9wZXJ0eVBhdGgiLCJjb2x1bW5OYW1lIiwidG9nZ2xlQ2xhc3MiLCJ4Iiwic2VwYXJhdG9ycyIsImFyciIsIlJlZ0V4cCIsImpvaW4iLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJyZXNwb25zZUpTT04iLCJub3R2YWxpZGUiLCJvcGVuIiwicGFyZW50cyIsInRva2VuIiwic3VibWl0IiwidHJhbnNpdGlvbiIsImtleSIsInRvYXN0cldpZHRvdXRQcm9ncmVzcyIsInN0ZXBzIiwiYm9keVRhZyIsIm9uU3RlcENoYW5naW5nIiwiY3VycmVudEluZGV4IiwibmV3SW5kZXgiLCJOdW1iZXIiLCJmb3JtIiwidmFsaWRhdGUiLCJpZ25vcmUiLCJ2YWxpZCIsIm9uU3RlcENoYW5nZWQiLCJwcmlvckluZGV4Iiwib25GaW5pc2hpbmciLCJvbkZpbmlzaGVkIiwiZXJyb3JQbGFjZW1lbnQiLCJydWxlcyIsImNvbmZpcm0iLCJlcXVhbFRvIiwidGFibGVTaG93Iiwic2Nyb2xsWSIsInNjcm9sbENvbGxhcHNlIiwicGFnaW5nIiwiYXV0b1dpZHRoIiwiZm9vdGVyQ2FsbGJhY2siLCJlbmQiLCJkaXNwbGF5IiwidG90YWwiLCJwYWdlVG90YWwiLCJpbnRWYWwiLCJyZWR1Y2UiLCJiIiwicGFnZSIsImZvb3RlciIsIk1hdGgiLCJyb3VuZCIsInRhYmxlU2hvdzMiLCJzY3JvbGxYIiwidGFibGUyIiwidGFibGVTaG93NCIsInJlYWR5IiwicmVnaXN0ZXIiLCJoZWFkZXIiLCJ0cmltIiwiZGF0YUluZGV4IiwiYkluZm8iLCJkZWZhdWx0cyIsIm9MYW5ndWFnZSIsIm9QYWdpbmF0ZSIsInNOZXh0Iiwic1ByZXZpb3VzIiwibmV3T3B0aW9uIiwiT3B0aW9uIiwiZ2V0U3ViU2VsZWN0IiwibXljbGFzcyIsIm15Ym9vbGVhbiIsIm15Y29udGVudCIsImFycmF5IiwiY3NzIiwiX2FycmF5X2lkcyIsInNlbGVjdDJfZG9zc2llcnMiLCJwbGFjZWhvbGRlciIsImFsbG93Q2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxtSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUM5QjtBQUNBQyxtQkFBTyxDQUFDLHdHQUFzRCxDQUFDO0FBQy9EQSxtQkFBTyxDQUFDLDhHQUF5RCxDQUFDO0FBQ2xFQSxtQkFBTyxDQUFDLDBIQUErRCxDQUFDO0FBQ1A7QUFDbEM7QUFDMEQ7QUFDbkM7QUFDdEQsU0FBU0csdUJBQXVCLENBQUNDLE9BQU8sRUFBRUMsR0FBRyxFQUFFO0VBQzdDQyxDQUFDLENBQUNDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsWUFBWTtJQUN6RDtJQUNBLE9BQU87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bnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG4vL3BsdWdpbnMvc3RlcHMvanF1ZXJ5LnN0ZXBzLmNzc1xyXG5yZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2pzL3BsdWdpbnMvc3RlcHMvanF1ZXJ5LnN0ZXBzLmNzc1wiKTtcclxucmVxdWlyZShcIi4uLy4uLy4uLy4uL2Fzc2V0cy9qcy9wbHVnaW5zL3N0ZXBzL2pxdWVyeS5zdGVwcy5taW4uanNcIik7XHJcbnJlcXVpcmUoXCIuLi8uLi8uLi8uLi9hc3NldHMvanMvcGx1Z2lucy92YWxpZGF0ZS9qcXVlcnkudmFsaWRhdGUubWluLmpzXCIpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzXCI7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzXCI7XHJcbmZ1bmN0aW9uIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKGVsZW1lbnQsIGF0dCkge1xyXG4gICQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKFwic2VsZWN0Mi9pMThuL2ZyXCIsIFtdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBSdXNzaWFuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvckxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0VG9vTG9uZzogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDRg9C00LDQu9C40YLQtSBcIiArIG92ZXJDaGFycyArIFwiINGB0LjQvNCy0L7Qu1wiO1xyXG4gICAgICAgIGlmIChvdmVyQ2hhcnMgPj0gMiAmJiBvdmVyQ2hhcnMgPD0gNCkge1xyXG4gICAgICAgICAgbWVzc2FnZSArPSBcItCwXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdmVyQ2hhcnMgPj0gNSkge1xyXG4gICAgICAgICAgbWVzc2FnZSArPSBcItC+0LJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlID1cclxuICAgICAgICAgIFwiVGFwZXogXCIgK1xyXG4gICAgICAgICAgcmVtYWluaW5nQ2hhcnMgK1xyXG4gICAgICAgICAgXCIgY2FyYWN0w6hyZSBvdSBwbHVzIHBvdXIgZmFpcmUgZGVzIHJlY2hlcmNoZXNcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG4gICAgICB9LFxyXG4gICAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCS0Ysg0LzQvtC20LXRgtC1INCy0YvQsdGA0LDRgtGMIFwiICsgYXJncy5tYXhpbXVtICsgXCIg0Y3Qu9C10LzQtdC90YJcIjtcclxuXHJcbiAgICAgICAgaWYgKGFyZ3MubWF4aW11bSA+PSAyICYmIGFyZ3MubWF4aW11bSA8PSA0KSB7XHJcbiAgICAgICAgICBtZXNzYWdlICs9IFwi0LBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubWF4aW11bSA+PSA1KSB7XHJcbiAgICAgICAgICBtZXNzYWdlICs9IFwi0L7QslwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIG5vUmVzdWx0czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImF1Y3VuIHJlc3VsdGF0IHRyb3V2ZVwiO1xyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJSZWNoZXJjaGVy4oCmXCI7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHdpbmRvdy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB3aW5kb3cuYXR0ID0gXCJjdXJyZW50X3NlbGVjdF9cIiArIGF0dDtcclxuICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlX3Rlcm1cIiwge1xyXG4gICAgICAgIHNlbGVjdGVkOiBhdHQsXHJcbiAgICAgICAgZW50aXR5OiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIiksXHJcbiAgICAgICAgY29sdW1uOiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1jb2x1bW5cIiksXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgd2luZG93LmVsZW1lbnRcclxuICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgLnNlbGVjdDIoe1xyXG4gICAgICAgICAgLy9hbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgICAgICAgIGRhdGE6IGRhdGEucmVzdWx0cyxcclxuICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICAgICAgICAgIGRyb3Bkb3duQ3NzQ2xhc3M6IHdpbmRvdy5hdHQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudmFsKGF0dClcclxuICAgICAgICAudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgJChcIi5sb2FkLWVyXCIpLmZhZGVPdXQoNzApLnJlbW92ZSgpO1xyXG4gICAgICAkKFwiLmRldF9mb3JcIikuZmFkZUluKDcwKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyB0b2FzdHIud2FybmluZygnaW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGxcXCdlbnRpdGVyJywgJ0VycmV1cicsIHt0aW1lT3V0OiA0MDAwfSlcclxuICB9XHJcbiAgLy9hcHBseSB0byBzZWxlY3QyXHJcbiAgd2luZG93LmVsZW1lbnQub24oXCJzZWxlY3QyOm9wZW5cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykpO1xyXG5cclxuICAgIHdpbmRvdy5lbGVtZW50ID0gJCh0aGlzKTtcclxuXHJcbiAgICAvL2FsZXJ0KClcclxuICAgICQoXCIudHRwXCIpLnJlbW92ZSgpO1xyXG4gICAgJChcIiAuc2VsZWN0Mi1zZWFyY2gtLWhpZGVcIikuYWZ0ZXIoXHJcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93biB0dHBcIj48aW5wdXQgY2xhc3M9XCJ0dCBzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCIwXCIgYXV0b2NvbXBsZXRlPVwib25cIiBhdXRvY29ycmVjdD1cIm9uXCIgYXV0b2NhcGl0YWxpemU9XCJvblwiIHNwZWxsY2hlY2s9XCJ0cnVlXCIgcm9sZT1cInRleHRib3hcIiAvPjwvc3Bhbj4nXHJcbiAgICApO1xyXG4gICAgJChcIi50dFwiKS50eXBlV2F0Y2goe1xyXG4gICAgICBoaWdobGlnaHQ6IGZhbHNlLFxyXG4gICAgICB3YWl0OiAxMDAsXHJcbiAgICAgIGNhcHR1cmVMZW5ndGg6IDIsXHJcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWVubm4sIGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAkKFwiLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnNlbGVjdDItcmVzdWx0c1wiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgJzxwIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIj5SZWNoZXJjaGVy4oCmPC9wPidcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuc2VhcmNoID0gdmFsdWVubm47XHJcbiAgICAgICAgLy9hbGVydCgodmFsdWVubm4pKVxyXG4gICAgICAgIGlmICh3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIikpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgICAgIFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVybTogdmFsdWVubm4sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogYXR0LFxyXG4gICAgICAgICAgICAgICAgZW50aXR5OiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIiksXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWNvbHVtblwiKSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlbm5uID09ICQoXCIudHRcIikudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgICAgICAgICAgIC5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkPVwiXCI+PC9vcHRpb24+JylcclxuICAgICAgICAgICAgICAgICAgLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9hbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQucmVzdWx0cyxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmVsZW1lbnQuc2VsZWN0MihcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyAkKFwiLnR0XCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dCcpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydCh0aGlzLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLy9hbGVydCh2YWx1ZW5ubilcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCd0ZXN0JylcclxuICAgICAgICAgICAgICAgICQoXCIudHRcIikudmFsKHdpbmRvdy5zZWFyY2gpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhcImltcG9zc2libGUgZGUgY2hhcmdlciBsJ2VudGl0ZXJcIiwgXCJFcnJldXJcIiwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5lbGVtZW50Lm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vYWxlcnQoKVxyXG4gICAgdmFyIGRhdGEgPSBlLnBhcmFtcy5kYXRhO1xyXG4gICAgJChcIi5wcml4dW5pdGFpcmVcIikudmFsKGRhdGEucHJpeEFjaGF0KTtcclxuICAgICQoXCIudHZhXCIpLnZhbChkYXRhLnR2YSk7XHJcbiAgICAkKFwiLnJlbWlzZVwiKS52YWwoZGF0YS5yZW1pc2UpO1xyXG5cclxuICAgIFxyXG4gICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbChkYXRhLnVuaXRlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNlbGVjdDItY29udGFpbmVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIudHRcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gIH0pO1xyXG59XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gIGN1c3RvbUNsYXNzOiB7XHJcbiAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxudmFyIGljZVRpZXJWYWxpZGUgPSBmYWxzZTtcclxudmFyIGlkRGV2aXNUaWVycz1cIlwiO1xyXG52YXIgaWRUaWVycz1cIlwiO1xyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmJ0bi1tYWotaWNlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGJ1dHRvbiA9ICQoXCIuYnRuLW1hai1pY2VcIik7XHJcbiAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKVxyXG4gICQoXCIuZXJyb3ItY3VzdG9tXCIpLmhpZGUoKTtcclxuICAkKFwiLmVycm9yLWN1c3RvbVwiKS5odG1sKCcnKTtcclxuICB2YXIgaWNlX3RpZXJzID0gJChcIiNpY2UtdGllcnNcIikudmFsKCk7XHJcbiAgdmFyIG5vbV90aWVycyA9ICQoXCIjbm9tLXRpZXJzXCIpLnZhbCgpO1xyXG4gIHZhciB0ZWxfdGllcnMgPSAkKFwiI3RlbC10aWVyc1wiKS52YWwoKTtcclxuICBpZiAoaWNlX3RpZXJzICYmIC9eXFxkKyQvLnRlc3QoaWNlX3RpZXJzKSAmJiBpY2VfdGllcnMubGVuZ3RoPT0xNSAmJiBpZFRpZXJzJiYgbm9tX3RpZXJzICYmIHRlbF90aWVycykge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJtaXNlX2Ffam91cl9pY2VfZGV2aXNcIiwge1xyXG4gICAgICAgICAgICAgIGlkOiBpZFRpZXJzLCBpY2U6IGljZV90aWVyc1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5vbV90aWVyczogbm9tX3RpZXJzLFxyXG4gICAgICAgICAgICB0ZWxfdGllcnM6IHRlbF90aWVycyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgaWNlVGllclZhbGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgaWRUaWVycz1cIlwiO1xyXG4gICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgJChcIiNjcmVhdGVfZGV2aXNcIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAkKFwiI01vZGFsQWRkSUNFXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgIGlmKCFpY2VfdGllcnMpe1xyXG4gICAgICAgICQoXCIuaWNlX3RpZXJzXCIpLmh0bWwoXCI8aSBjbGFzcz0nZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJz48L2k+VmV1aWxsZXogcmVtcGxpciBjZSBjaGFtcC5cIik7XHJcbiAgICAgICAgJChcIi5pY2VfdGllcnNcIikuc2hvdygpO1xyXG4gICAgICAgIC8vIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCBJQ0UgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKCEgL15cXGQrJC8udGVzdChpY2VfdGllcnMpICl7XHJcbiAgICAgICAgICAkKFwiLmljZV90aWVyc1wiKS5odG1sKFwiPGkgY2xhc3M9J2ZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc+PC9pPlZldWlsbGV6IHNhaXNpciBkZXMgY2hpZmZyZXMuXCIpO1xyXG4gICAgICAgICAgJChcIi5pY2VfdGllcnNcIikuc2hvdygpO1xyXG4gICAgICAgICAgLy8gdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBzYWlzaXIgZGVzIGNoaWZmcmVzIFwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihpY2VfdGllcnMubGVuZ3RoIT0xNSl7XHJcbiAgICAgICAgICAkKFwiLmljZV90aWVyc1wiKS5odG1sKFwiPGkgY2xhc3M9J2ZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc+PC9pPiBJQ0UgaW5jb3JyZWN0LCB2w6lyaWZpZXIgbCdJQ0Ugc2Fpc2k8L2I+LlwiKTtcclxuICAgICAgICAgICQoXCIuaWNlX3RpZXJzXCIpLnNob3coKTtcclxuICAgICAgICAgIC8vIHRvYXN0ci53YXJuaW5nKFwibGUgY2hhbXAgSUNFIGRvaXQgY29udGVuaXIgPGI+MTUgY2hpZmZyZXM8L2I+IFwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZighbm9tX3RpZXJzKXtcclxuICAgICAgJChcIi5ub21fdGllcnNcIikuaHRtbChcIjxpIGNsYXNzPSdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnPjwvaT4gVmV1aWxsZXogcmVtcGxpciBjZSBjaGFtcC5cIik7XHJcbiAgICAgICQoXCIubm9tX3RpZXJzXCIpLnNob3coKTtcclxuICAgICAgLy8gdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIE5vbSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoIXRlbF90aWVycyl7XHJcbiAgICAgICQoXCIudGVsX3RpZXJzXCIpLmh0bWwoXCI8aSBjbGFzcz0nZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJz48L2k+IFZldWlsbGV6IHJlbXBsaXIgY2UgY2hhbXAuXCIpO1xyXG4gICAgICAkKFwiLnRlbF90aWVyc1wiKS5zaG93KCk7XHJcbiAgICAgIC8vIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCBUZWwgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pOyBcclxuICAgICAgfVxyXG4gICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSkgXHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI2NyZWF0ZV9kZXZpc1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKFwiLmZvcm1cIikuYXR0cihcIm5hbWVcIik7XHJcbiAgJChcIi5lcnJvci1jdXN0b21cIikuaGlkZSgpO1xyXG4gICQoXCIuZXJyb3ItY3VzdG9tXCIpLmh0bWwoJycpO1xyXG4gIGlmKCFpY2VUaWVyVmFsaWRlKXtcclxuICAgIC8vIGlkRGV2aXNUaWVycyA9ZHRhLmdldChcIl9pZFwiKTtcclxuICAgIGlkVGllcnMgPSAkKCcjdXZfZGV2aXNjYWJfY2xpZW50JykudmFsKCk7XHJcbiAgICBpZighaWRUaWVycyl7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBjaG9pc2lyIGxlIENsaWVudCBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7ICAgIFxyXG4gICAgICAgICQoXCIjY3JlYXRlX2RldmlzXCIpLnJlbW92ZUNsYXNzKCBcImRpc2FibGVkXCIgKTtcclxuICAgIH1cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiY2hlY2tJY2VEZXZpc1wiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFRpZXJzLCBcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdD09J2VtcHR5Jyl7XHJcbiAgICAgICAgICAgICAgdmFyIHRpZXJzID0gJChcIiN1dl9kZXZpc2NhYl9jbGllbnQgb3B0aW9uOnNlbGVjdGVkXCIpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjTW9kYWxBZGRJQ0UgI25vbV90aWVyc1wiKS5odG1sKHRpZXJzKTtcclxuICAgICAgICAgICAgICAgICQoJyNNb2RhbEFkZElDRSBpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI01vZGFsQWRkSUNFXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpY2VUaWVyVmFsaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlkVGllcnM9XCJcIjtcclxuICAgICAgICAgICAgICAgICQoXCIjY3JlYXRlX2RldmlzXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuLy92YXIgcGFyYW1zID0gJCgnLmZvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xyXG4gIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoJChcIiN0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJcIilbMF0pO1xyXG4gICQoXCIjY3JlYXRlX2RldmlzXCIpLmFkZENsYXNzKCBcImRpc2FibGVkXCIgKTtcclxuXHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQodmFsLm5hbWUsIHZhbC52YWx1ZSk7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyh2YWwubmFtZSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGFEZXRhaWwpXHJcbiAgZm9ybURhdGEuYXBwZW5kKCdkZXRhaWwnLCBkYXRhKTtcclxuXHJcbiAgY29uc3QgYXJ0aWNsZXMgPSBKU09OLnN0cmluZ2lmeShhbGxBcnRpY2xlcyk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKCdhbGxBcnRpY2xlcycsIGFydGljbGVzKTtcclxuXHJcblxyXG5cclxuICB2YXIgc2VsZWN0b3IgPSAkKFwiLmZvcm1cIik7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfaW5zZXJ0XCIpLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuY3VzdG9tRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgJC5lYWNoKHJlc3VsdC5jdXN0b21FcnJvcnMsIGZ1bmN0aW9uIChpLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLmZvcm0gI1wiICsgaSkuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIC8vICQoJyMnKylcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIC8vZHVtcChyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICQoXCIjY3JlYXRlX2RldmlzXCIpLnJlbW92ZUNsYXNzKCBcImRpc2FibGVkXCIgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgJChcIiNjcmVhdGVfZGV2aXNcIikucmVtb3ZlQ2xhc3MoIFwiZGlzYWJsZWRcIiApO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZG9zc2llckVtcHR5KSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIiNjcmVhdGVfZGV2aXNcIikucmVtb3ZlQ2xhc3MoIFwiZGlzYWJsZWRcIiApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1lbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgJChcIiNjcmVhdGVfZGV2aXNcIikucmVtb3ZlQ2xhc3MoIFwiZGlzYWJsZWRcIiApO1xyXG4gICAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGFycmF5X2RldGFpbCA9IFtdO1xyXG52YXIgZXJyb3JzX2RldGFpbHMgPSBbXTtcclxudmFyIGZvcm1EYXRhRGV0YWlsID0gW107XHJcbnZhciBuYW1lRGV0YWlsID0gXCJcIjtcclxudmFyIGVkaXRDb2x1bW4gPSBudWxsO1xyXG52YXIgZWRpdEFydGljbGVDb2x1bW4gPSBudWxsO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGVycm9yc19kZXRhaWxzID0galF1ZXJ5LnBhcnNlSlNPTigkKCcuZXJyb3JzX2RldGFpbHMnKS5hdHRyKCdlcnJvcnMnKSk7XHJcbiAgbmFtZURldGFpbCA9ICQoJy5lcnJvcnNfZGV0YWlscycpLmF0dHIoJ25hbWUnKTtcclxuICAkKCcuZXJyb3JzX2RldGFpbHMnKS5yZW1vdmUoKTtcclxuXHJcbiAgLy8gb3Igd2l0aCBqUXVlcnlcclxuICAvL3ZhciBpc0F1dGhlbnRpY2F0ZWQgPSAkKCcuanMtdXNlci1yYXRpbmcnKS5kYXRhKCdpc0F1dGhlbnRpY2F0ZWQnKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRIdChyb3cpIHtcclxuICByZXR1cm4gcm93LnF1YW50aXRlICogcm93LnByaXh1bml0YWlyZTtcclxufVxyXG5mdW5jdGlvbiBnZXRUdmEocm93KSB7XHJcbiAgdmFyIHByaXhUdmEgPSAoZ2V0SHQocm93KSAqIHJvdy50dmEpIC8gMTAwO1xyXG5cclxuICBwcml4VHZhID0gcHJpeFR2YSAtICgocHJpeFR2YSAqIHJvdy5yZW1pc2UpIC8gMTAwKTtcclxuXHJcbiAgcmV0dXJuIHByaXhUdmE7XHJcbn1cclxuZnVuY3Rpb24gZ2V0UmVtaXNlKHJvdykge1xyXG4gIHJldHVybiAoKGdldEh0KHJvdykpICogKHJvdy5yZW1pc2UpIC8gMTAwKTtcclxufVxyXG5mdW5jdGlvbiBnZXRQcml4VFRjKHJvdykge1xyXG4gIHJldHVybiByb3cucHJpeHR0YyA9IGdldEh0KHJvdykgKyBnZXRUdmEocm93KSAtIGdldFJlbWlzZShyb3cpO1xyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vIGFsZXJ0KCd0ZXN0Jyk7XHJcblxyXG4gIGNvbnN0IGFydGljbGVzID0gSlNPTi5zdHJpbmdpZnkoYWxsQXJ0aWNsZXMpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLVxyXG5cclxudmFyIGFsbEFydGljbGVzID0gW107XHJcbnZhciBBcmljbGVTZWxlY3RlZCA9IFwiXCI7XHJcbnZhciBhY3Rpb24gPSBcImFqb3V0ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiByZW1wbGlyVGFibGUoKSB7XHJcblxyXG4gICAgdmFyIHRyID0gXCJcIjtcclxuICAgIGFsbEFydGljbGVzLnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIF9hcnIpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBQcml4X1F0ZSA9IHBhcnNlRmxvYXQoZWxlbWVudC5wcml4VW50YWlyZSkgKiBwYXJzZUZsb2F0KGVsZW1lbnQucXRlKTtcclxuICAgICAgICB2YXIgUHJpeF9UdmEgPSBwYXJzZUZsb2F0KGVsZW1lbnQucHJpeFVudGFpcmUpICogcGFyc2VGbG9hdChlbGVtZW50LnR2YSk7XHJcbiAgICAgICAgdmFyIFByaXhfUmVtaXNlID0gcGFyc2VGbG9hdChlbGVtZW50LnByaXhVbnRhaXJlKSAqIHBhcnNlRmxvYXQoZWxlbWVudC5yZW1pc2UpO1xyXG5cclxuICAgICAgICB2YXIgTW9udGFudCA9IFByaXhfUXRlICsgUHJpeF9UdmEgLSBQcml4X1JlbWlzZTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuQXJpY2xlU2VsZWN0ZWQgPT09IEFyaWNsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRyID0gdHIgKyAnPHRyIHN0eWxlPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiICBpZD1cInRyX2FjdGlvbnNfJyArIGluZGV4ICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cImFydGljbGVcIj4nICsgZWxlbWVudC5hcnRpY2xlICsgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwicXRlXCI+JyArIGVsZW1lbnQucXRlICsgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwicHJpeFVudGFpcmVcIj4nICsgZWxlbWVudC5wcml4VW50YWlyZSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cInR2YVwiPicgKyBlbGVtZW50LnR2YSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cInJlbWlzZVwiPicgKyBlbGVtZW50LnJlbWlzZSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cIm1vbnRhbnQgdGV4dC1jZW50ZXJcIj4nICsgTW9udGFudCArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBzdHlsZT1cIndpZHRoOiAxMSUgO1wiIGNsYXNzPVwidGV4dC1jZW50ZXIgdWFfdGVjaG5pcXVlXCIgPicgK1xyXG4gICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBidG4teHMgdXBwZXIgIHVhX2VkaXRcIiAgIGlkPVwiJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdCB0ZXh0LXByaW1hcnkgXCI+PC9pPjwvYT4gJyArXHJcbiAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciAgdWFfc3VwcGltZXJfbGlnbmVcIiBpZD1cIicgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyIFwiPjwvaT48L2E+IDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPC90cj4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLndhdmVzLXJpcHBsZVwiKS5yZW1vdmUoKTtcclxuICAgIHZhciBmb3JtVHIgPSAkKCd0Ym9keSA+ICN1YV90ZWNobmlxdWVfZm9ybScpLmh0bWwoKTtcclxuICAgICQoJyN1YV90ZWNobmlxdWVfdGFibGUgPiB0Ym9keScpLmh0bWwodHIpO1xyXG4gICAgJCgnI3VhX3RlY2huaXF1ZV90YWJsZSA+IHRib2R5JykuYXBwZW5kKCc8dHIgaWQ9XCJ1YV90ZWNobmlxdWVfZm9ybVwiPicgKyBmb3JtVHIgKyAnPC90cj4nKTtcclxuICAgIGNvbnNvbGUubG9nKCB0cik7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIudWFfdGVjaG5pcXVlID4gLmFkZF9mb3JtX3VhXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblxyXG5cclxuICAgIHZlcmlmaWVyRm9ybSgpO1xyXG4gICAgaWYgKHZlcmlmaWVyRm9ybSgpICE9IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24gPT0gXCJham91dGVyXCIpIHtcclxuICAgICAgICB2YXIgQXJ0aWNsZSA9IHt9O1xyXG4gICAgICAgIEFydGljbGVbJ2FydGljbGUnXSA9ICQoJyNkZXZpc190ZWNobmlxdWVfZGV0X2FydGljbGUnKS52YWwoKTtcclxuICAgICAgICBBcnRpY2xlWydxdGUnXSA9ICQoJyNkZXZpc190ZWNobmlxdWVfZGV0X3F0ZScpLnZhbCgpO1xyXG4gICAgICAgIEFydGljbGVbJ3ByaXhVbnRhaXJlJ10gPSAkKCcjZGV2aXNfdGVjaG5pcXVlX2RldF9wcml4VW50YWlyZScpLnZhbCgpO1xyXG4gICAgICAgIEFydGljbGVbJ3R2YSddID0gJCgnI2RldmlzX3RlY2huaXF1ZV9kZXRfdHZhJykudmFsKCk7XHJcbiAgICAgICAgQXJ0aWNsZVsncmVtaXNlJ10gPSAkKCcjZGV2aXNfdGVjaG5pcXVlX2RldF9yZW1pc2UnKS52YWwoKTtcclxuICAgICAgICBBcnRpY2xlWydBcmljbGVTZWxlY3RlZCddID0gQXJpY2xlU2VsZWN0ZWQ7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXMucHVzaChBcnRpY2xlKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBhbGxBcnRpY2xlc1thY3Rpb25dLmFydGljbGUgPSAkKCcjZGV2aXNfdGVjaG5pcXVlX2RldF9hcnRpY2xlJykudmFsKCk7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS5xdGUgPSAkKCcjZGV2aXNfdGVjaG5pcXVlX2RldF9xdGUnKS52YWwoKTtcclxuICAgICAgICBhbGxBcnRpY2xlc1thY3Rpb25dLnByaXhVbnRhaXJlID0gJCgnI2RldmlzX3RlY2huaXF1ZV9kZXRfcHJpeFVudGFpcmUnKS52YWwoKTtcclxuICAgICAgICBhbGxBcnRpY2xlc1thY3Rpb25dLnR2YSA9ICQoJyNkZXZpc190ZWNobmlxdWVfZGV0X3R2YScpLnZhbCgpO1xyXG4gICAgICAgIGFsbEFydGljbGVzW2FjdGlvbl0ucmVtaXNlID0gJCgnI2RldmlzX3RlY2huaXF1ZV9kZXRfcmVtaXNlJykudmFsKCk7XHJcbiAgICAgICAgYWN0aW9uID0gXCJham91dGVyXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbXBsaXJUYWJsZSgpO1xyXG4gICAgJCgnLnVhX2NvbmZpcm1lcl9hbm51bGVyJykuZmFkZUluKCk7XHJcbiAgICAkKCcuZmVybWVyX3VhX3RlY2huaXF1ZV9kZXQnKS5mYWRlT3V0KCk7XHJcblxyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcudWFfc3VwcHJpbWVyX2FydGljbGUnLCBmdW5jdGlvbigpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYWxsQXJ0aWNsZXNbaV0uQXJpY2xlU2VsZWN0ZWQgPT09IEFyaWNsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGFsbEFydGljbGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbXBsaXJUYWJsZSgpO1xyXG4gICAgJCgnLnVhX2NvbmZpcm1lcl9hbm51bGVyJykuZmFkZU91dCgpO1xyXG4gICAgJCgnLmZlcm1lcl91YV90ZWNobmlxdWVfZGV0JykuZmFkZUluKCk7XHJcblxyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcudWFfY29uZmlybWVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAkKCcudWFfc3VjY2VzcycpLmZhZGVJbigpO1xyXG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJCgnLnVhX3N1Y2Nlc3MnKS5mYWRlT3V0KCk7XHJcbiAgICAvLyB9LCAzMDAwKTsgXHJcbiAgICB0b2FzdHIuc3VjY2Vzcygndm91cyBhdmV6IGJpZW4gY29uZmlybcOpJywgJ0NvbmZpcm1hdGlvbicsIHtcclxuICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgfSk7XHJcbiAgICAkKFwiI01vZGFsRG9jdW1lXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICQoJy5mZXJtZXJfdWFfdGVjaG5pcXVlX2RldCcpLmZhZGVPdXQoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcudWFfZWRpdCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGFjdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHJlbXBsaXJUYWJsZSgpO1xyXG4gICAgdmFyIGlkTGluZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHZhciBBcnRpY2xlID0gYWxsQXJ0aWNsZXNbaWRMaW5lXTtcclxuXHJcbiAgICAkKCcjZGV2aXNfdGVjaG5pcXVlX2RldF9hcnRpY2xlJykudmFsKEFydGljbGUuYXJ0aWNsZSk7XHJcbiAgICAkKCcjZGV2aXNfdGVjaG5pcXVlX2RldF9xdGUnKS52YWwoQXJ0aWNsZS5xdGUpO1xyXG4gICAgJCgnI2RldmlzX3RlY2huaXF1ZV9kZXRfcHJpeFVudGFpcmUnKS52YWwoQXJ0aWNsZS5wcml4VW50YWlyZSk7XHJcbiAgICAkKCcjZGV2aXNfdGVjaG5pcXVlX2RldF90dmEnKS52YWwoQXJ0aWNsZS50dmEpO1xyXG4gICAgJCgnI2RldmlzX3RlY2huaXF1ZV9kZXRfcmVtaXNlJykudmFsKEFydGljbGUucmVtaXNlKTtcclxuXHJcbiAgICB2YXIgZm9ybVRyID0gJCgndGJvZHkgPiAjdWFfdGVjaG5pcXVlX2Zvcm0nKS5nZXQoKTtcclxuICAgICQoJyN0cl9hY3Rpb25zXycgKyBpZExpbmUpLmJlZm9yZShmb3JtVHIpO1xyXG4gICAgJCgnI3RyX2FjdGlvbnNfJyArIGlkTGluZSkucmVtb3ZlKCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcudWFfc3VwcGltZXJfbGlnbmUnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpZExpbmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICBhbGxBcnRpY2xlcy5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBfYXJyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IGlkTGluZSkge1xyXG4gICAgICAgICAgICBhbGxBcnRpY2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVtcGxpclRhYmxlKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdmVyaWZpZXJGb3JtKCkge1xyXG4gICAgdmFyIG1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgJChcIiN1YV90ZWNobmlxdWVfZm9ybSBpbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKTtcclxuICAgICAgICBpZiAoZWxlbWVudC52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgXCIgPGkgY2xhc3M9J2ZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJz48L2k+IHZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXBzIFwiICsgJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykucG9wKCkgKyBcIjxicj5cIjtcclxuICAgICAgICAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmh0bWwobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UgPT0gXCJcIikge1xyXG4gICAgICAgICQoXCIjdWFfdGVjaG5pcXVlX2Zvcm0gaW5wdXRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cignaWQnKSAhPSAnZGV2aXNfdGVjaG5pcXVlX2RldF9hcnRpY2xlJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmxvYXRWYWx1ZXMgPSAvWystXT8oWzAtOV0qWy5dKT9bMC05XSsvO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsLm1hdGNoKGZsb2F0VmFsdWVzKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsLm1hdGNoKGZsb2F0VmFsdWVzKSAmJiAhaXNOYU4odmFsKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyBcIjxpIGNsYXNzPSdmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc+PC9pPiB2ZXVpbGxleiBzYWlzaXIgdW4gbm9tYnJlIGRhbnMgbGUgY2hhbXBzIFwiICsgJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykucG9wKCkgKyBcIjxicj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudWFfYWxlcnRfZGFuZ2VyJykuaHRtbChtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKG1lc3NhZ2UgIT0gXCJcIikge1xyXG4gICAgICAgICQoJy51YV9hbGVydF9kYW5nZXInKS5mYWRlSW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmZhZGVPdXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtZXNzYWdlO1xyXG59XHJcblxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmltcG9ydGVyX2NhbnZhcycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3VhX2ltcG9ydF9tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbn0pO1xyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmZlcm1lcl91YV9pbXBvcnRfbW9kYWwnLCBmdW5jdGlvbigpIHtcclxuICAgICQoJyN1YV9pbXBvcnRfbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG59KTtcclxuXHJcbiQoJyNmaWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSk7XHJcbiAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KFwiLlwiKTtcclxuICAgIHZhciBleHRlbnRpb24gPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcclxuICAgIGlmIChleHRlbnRpb24gIT0gJ3hsc3gnKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJ2ZXVpbGxleiBjaG9pc2lyIHVuIGZpY2hpZXIgeGxzeFwiLCBcIndhcm5pbmcgXCIsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBhbGVydCgnemlrbycpO1xyXG5cclxuJCgnI3VhX2ltcG9ydF9mb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJpbXBvcnRfdWFfZGV0XCIpLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEZvcm1EYXRhKHRoaXMpLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tZXNzYWdlLnRpdGxlID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBfYXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBBcnRpY2xlID0ge307XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICBBcnRpY2xlWydhcnRpY2xlJ10gPSBlbGVtZW50LmFydGljbGU7XHJcbiAgICAgICAgICAgICAgICAgIEFydGljbGVbJ3F0ZSddID0gZWxlbWVudC5xdGU7XHJcbiAgICAgICAgICAgICAgICAgIEFydGljbGVbJ3ByaXhVbnRhaXJlJ10gPSBlbGVtZW50LnByaXhVbnRhaXJlO1xyXG4gICAgICAgICAgICAgICAgICBBcnRpY2xlWyd0dmEnXSA9IGVsZW1lbnQudHZhO1xyXG4gICAgICAgICAgICAgICAgICBBcnRpY2xlWydyZW1pc2UnXSA9IGVsZW1lbnQucmVtaXNlO1xyXG4gICAgICAgICAgICAgICAgICBBcnRpY2xlWydBcmljbGVTZWxlY3RlZCddID0gQXJpY2xlU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEFydGljbGUpO1xyXG4gICAgICAgICAgICAgICAgICBhbGxBcnRpY2xlcy5wdXNoKEFydGljbGUpO1xyXG4gICAgICAgICAgICAgICAgICByZW1wbGlyVGFibGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VhX2ltcG9ydF9tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJyNmaWxlJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiB2ZXJpZmllckZsb2F0KCkge1xyXG5cclxuICAgIC8vIHZhciBtZXNzYWdlID0gXCJcIjtcclxuICAgIC8vICQoXCIjdWFfdGVjaG5pcXVlX2Zvcm0gaW5wdXRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgaWYgKGVsZW1lbnQuYXR0cignaWQnKSAhPSAnZGV2aXNfdGVjaG5pcXVlX2RldF9hcnRpY2xlJyl7XHJcbiAgICAvLyAgICAgICAgIGlmKGlzTmFOKHBhcnNlRmxvYXQoZWxlbWVudC52YWwoKSkpICApe1xyXG4gICAgLy8gICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyBcIjxpIGNsYXNzPSdmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc+PC9pPiB2ZXVpbGxleiBzYWlzaXIgdW4gbm9tYnJlIGRhbnMgbGUgY2hhbXBzIFwiICskKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKS5wb3AoKSArIFwiPGJyPlwiO1xyXG4gICAgLy8gICAgICAgICAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmh0bWwobWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyAkKFwiI3VhX3RlY2huaXF1ZV9mb3JtIGlucHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgIGlmIChlbGVtZW50LmF0dHIoJ2lkJykgIT0gJ2RldmlzX3RlY2huaXF1ZV9kZXRfYXJ0aWNsZScpe1xyXG4gICAgLy8gICAgICAgICB2YXIgdmFsID0gZWxlbWVudC52YWwoKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC52YWwoKSk7XHJcbiAgICAvLyAgICAgICAgIHZhciBmbG9hdFZhbHVlcyA9ICAvWystXT8oWzAtOV0qWy5dKT9bMC05XSsvO1xyXG4gICAgLy8gICAgICAgICBpZiAodmFsLm1hdGNoKGZsb2F0VmFsdWVzKSAmJiAhaXNOYU4odmFsKSkge1xyXG4gICAgLy8gICAgICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgXCI8aSBjbGFzcz0nZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnPjwvaT4gdmV1aWxsZXogc2Fpc2lyIHVuIG5vbWJyZSBkYW5zIGxlIGNoYW1wcyBcIiArJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykucG9wKCkgKyBcIjxicj5cIjtcclxuICAgIC8vICAgICAgICAgICAgICQoJy51YV9hbGVydF9kYW5nZXInKS5odG1sKG1lc3NhZ2UpO1xyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIGlmKG1lc3NhZ2UgIT0gXCJcIil7XHJcbiAgICAvLyAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmZhZGVJbigpO1xyXG4gICAgLy8gfWVsc2V7XHJcbiAgICAvLyAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmZhZGVPdXQoKTtcclxuICAgIC8vIH1cclxuICAgIC8vICByZXR1cm4gbWVzc2FnZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxudmFyIGFydGljbGVzRGV0ID0gW107XHJcblxyXG4vLyAtLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJChcIi5uZXdcIikub24oXCJjbGlja1wiLCBcIi5kZXRhaWxfZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHJcbiAgLy8gYWxlcnQoXCJuYWppbVwiKTtcclxuXHJcbiAgICB2YXIgdGVzdCA9IGZhbHNlO1xyXG5cclxuICAgIC8vYWxlcnQoKTtcclxuICAgIEFyaWNsZVNlbGVjdGVkID0gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkO1xyXG4gICAgdmFyIHVuaXRlID0gJCgnI3NlbGVjdDItdXZfZGV2aXNkZXRfdW5pdGUtY29udGFpbmVyJykuYXR0cigndGl0bGUnKTtcclxuICAgIGlmKEFyaWNsZVNlbGVjdGVkID09IFwiXCIpe1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJWZXVpbGxleiBzZWxlY3Rpb25uZXIgdW4gYXJ0aWNsZVwiLCBcIkVycm9yXCIsIHtcclxuICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICBcclxuICAgICAgJCgnLmVycm9yLWNsYXNzLXRhYicpLnJlbW92ZSgpO1xyXG4gICAgICB2YXIgZmxhZyA9IDA7XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybURhdGFEZXRhaWwubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICBpZiAoZm9ybURhdGFEZXRhaWxbaW5kZXhdLmFydGljbGVJZCA9PSAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQgJiYgZWRpdEFydGljbGVDb2x1bW4gIT0gZm9ybURhdGFEZXRhaWxbaW5kZXhdLmFydGljbGVJZCApIHtcclxuICAgICAgICAgICAgICAvLyByZXR1cm4gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPkNlIGFydGljbGUgZXN0IGRlamEgZXhpc3RlPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJDZSBhcnRpY2xlIGVzdCBkZWphIGV4aXN0ZVwiLCBcIkVycm9yXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlcnJvcnNfZGV0YWlscy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgIHZhciBuYW1lID0gbmFtZURldGFpbCArICdbJyArIGVycm9yc19kZXRhaWxzW2luZGV4XS5wcm9wZXJ0eSArICddJztcclxuICAgICAgICAgIHZhciB2YWx1ZSA9ICQoJ1tuYW1lPVwiJyArIG5hbWVEZXRhaWwgKyAnWycgKyBlcnJvcnNfZGV0YWlsc1tpbmRleF0ucHJvcGVydHkgKyAnXScgKyAnXCJdJykudmFsKCk7XHJcbiAgXHJcbiAgICAgICAgICBpZiAoZXJyb3JzX2RldGFpbHNbaW5kZXhdLmNhdXNlID09IG51bGwgJiYgdmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICAgICAgICAkKCdbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9yc19kZXRhaWxzW2luZGV4XS5tZXNzYWdlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChmbGFnID09IDEpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBpZiAodW5pdGUgPT0gJ0UnKSB7XHJcbiAgICAgICAgJChcIiNNb2RhbERvY3VtZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgJCgnLnVhX2NvbmZpcm1lcl9hbm51bGVyJykuZmFkZU91dCgpO1xyXG4gICAgICAgIGFydGljbGVzRGV0LnB1c2goQXJpY2xlU2VsZWN0ZWQpO1xyXG4gICAgICAgIHJlbXBsaXJUYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhcnRpY2xlc0RldC5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBfYXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09IEFyaWNsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICQoJy51YV9jb25maXJtZXJfYW5udWxlcicpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbXBsaXJUYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbEFydGljbGVzLnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIF9hcnIpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5BcmljbGVTZWxlY3RlZCA9PSBBcmljbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAkKCcudWFfY29uZmlybWVyX2FubnVsZXInKS5mYWRlSW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgdmFyIHJvdyA9IHtcclxuICAgICAgICAgIHF1YW50aXRlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3F1YW50aXRlJykudmFsKCksXHJcbiAgICAgICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgICAgICB0dmE6ICQoJyMnICsgbmFtZURldGFpbCArICdfdHZhJykudmFsKCksXHJcbiAgICAgICAgICByZW1pc2U6ICQoJyMnICsgbmFtZURldGFpbCArICdfcmVtaXNlJykudmFsKCksXHJcbiAgICAgIH1cclxuICAgICAgaWYoZWRpdENvbHVtbiAhPSBudWxsKXtcclxuICAgICAgICAgIGZvcm1EYXRhRGV0YWlsW2VkaXRDb2x1bW5dID0ge1xyXG4gICAgICAgICAgICAgIGFydGljbGVJZDogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICAgIHRpdHJlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dCxcclxuICAgICAgICAgICAgICBjb2RlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uY29kZSA/ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlIDogY29kZSAsXHJcbiAgICAgICAgICAgICAgdW5pdGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfdW5pdGUnKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dCxcclxuICAgICAgICAgICAgICB1bml0ZUlkOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3VuaXRlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICAgIHF1YW50aXRlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcXVhbnRpdGUnKS52YWwoKSksXHJcbiAgICAgICAgICAgICAgcHJpeHVuaXRhaXJlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcHJpeHVuaXRhaXJlJykudmFsKCkpLFxyXG4gICAgICAgICAgICAgIHR2YTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3R2YScpLnZhbCgpKSxcclxuICAgICAgICAgICAgICByZW1pc2U6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19yZW1pc2UnKS52YWwoKSksXHJcbiAgICAgICAgICAgICAgb2JzZXJ2YXRpb246ICQoJyMnICsgbmFtZURldGFpbCArICdfb2JzZXJ2YXRpb24nKS52YWwoKSxcclxuICAgICAgICAgICAgICBtb250YW50UmVtaXNlOiBnZXRSZW1pc2Uocm93KSxcclxuICAgICAgICAgICAgICBwcml4dHRjOiBnZXRQcml4VFRjKHJvdyksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIGZvcm1EYXRhRGV0YWlsLnB1c2goe1xyXG4gICAgICAgICAgICAgIGFydGljbGVJZDogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICAgIHRpdHJlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dCxcclxuICAgICAgICAgICAgICBjb2RlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uY29kZSA/ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlIDogY29kZSxcclxuICAgICAgICAgICAgICB1bml0ZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ191bml0ZScpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0LFxyXG4gICAgICAgICAgICAgIHVuaXRlSWQ6ICQoJyMnICsgbmFtZURldGFpbCArICdfdW5pdGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQsXHJcbiAgICAgICAgICAgICAgcXVhbnRpdGU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19xdWFudGl0ZScpLnZhbCgpKSxcclxuICAgICAgICAgICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgICAgICAgICAgdHZhOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfdHZhJykudmFsKCkpLFxyXG4gICAgICAgICAgICAgIHJlbWlzZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3JlbWlzZScpLnZhbCgpKSxcclxuICAgICAgICAgICAgICBvYnNlcnZhdGlvbjogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19vYnNlcnZhdGlvbicpLnZhbCgpLFxyXG4gICAgICAgICAgICAgIG1vbnRhbnRSZW1pc2U6IGdldFJlbWlzZShyb3cpLFxyXG4gICAgICAgICAgICAgIHByaXh0dGM6IGdldFByaXhUVGMocm93KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHZhciBsaW5lTm8gPSAxO1xyXG4gICAgICB2YXIgY2wgPSBcIlwiO1xyXG4gICAgICAkKFwiLmRldF9mb3JcIilcclxuICAgICAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAgICAgLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2FkLWVyXCI+PGRpdiBjbGFzcz1cImxkcy1lbGxpcHNpc1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gIFxyXG4gICAgICBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducygkKFwiLmFydGljbGVzXCIpLCBcIlwiKTtcclxuICAgICAgJChcIi50YWJsZS1kZXRhaWwgKyB0YWJsZSBcIikucmVtb3ZlQ2xhc3MoJ3JlbW92ZScpO1xyXG4gICAgICAkKCcudGFibGUtZGV0YWlsIHRib2R5JykuaHRtbCgnJyk7XHJcbiAgICAgICQuZWFjaChmb3JtRGF0YURldGFpbCwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICAgICAgICBpZihsaW5lTm8lMiA9PSAwKXtcclxuICAgICAgICAgICAgICBjbCA9IFwiaW1wYWlyXCI7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGNsID0gXCJwYWlyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdHZhID0gdmFsdWUudHZhICsgXCIgJVwiO1xyXG4gICAgICAgICAgICB2YXIgcmVtaXNlID0gdmFsdWUucmVtaXNlICsgXCIgJVwiO1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnR2YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZhdGlvbiA9IFwiPHRyIGNsYXNzPVwiK2NsK1wiPjx0ZD48L3RkPjx0ZCBjb2xzcGFuPSc5Jz48Yj5JbmZvcm1hdGlvbnMgY29tcGxlbWVudGFpcmVzIDogPC9iPlwiK29ic2VydmF0aW9uK1wiPC90ZD48L3RyPlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYWRkXHJcbiAgICAgICAgICAvL2NhdGVnb3JpZVxyXG4gICAgICAgICAgdmFyIG15X3JvdyA9XHJcbiAgICAgICAgICAgICAgICAgIFwiIDx0ciBjbGFzcz1cIitjbCtcIj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAoaSArIDEpICtcclxuICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICAgICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcic+XCIgK1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZS51bml0ZSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJyA+XCIgK1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZS5xdWFudGl0ZSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPC90ZD4gPHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcic+XCIgK1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZS5wcml4dW5pdGFpcmUudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgIHR2YSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgIHJlbWlzZSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlLm1vbnRhbnRSZW1pc2UudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGRlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXInPjwvaT48L2E+IDxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBlZGl0X2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS1lZGl0IHRleHQtcHJpbWFyeSc+PC9pPjwvYT48L3RkPjwvdHI+XCIrb2JzZXJ2YXRpb247XHJcbiAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuYXBwZW5kKG15X3Jvdyk7XHJcbiAgICAgICAgICBsaW5lTm8rKztcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIFxyXG4gICBcclxuICAgICAgJChcIiNjcmVhdGVfZGV2aXNcIikucmVtb3ZlQ2xhc3MoIFwiZGlzYWJsZWRcIiApO1xyXG4gICAgXHJcbiAgICAgXHJcbiAgICAgICQoJy5kZXRfZm9yIGlucHV0LC5kZXRfZm9yIHNlbGVjdCwuZGV0X2ZvciB0ZXh0YXJlYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgXHJcbiAgICAgIGVkaXRDb2x1bW4gPSBudWxsO1xyXG4gICAgICBlZGl0QXJ0aWNsZUNvbHVtbiA9IG51bGw7XHJcbiAgXHJcbiAgICAgIC8vdG9hc3RyLndhcm5pbmcoXCJDZXQgYXJ0aWNsZSBleGlzdGUgZGVqYSBcIiwgXCJ3YXJuaW5nIFwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gIFxyXG4gIFxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXdcIikub24oXCJjbGlja1wiLCBcIi5lZGl0X2VsZW1lbnRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlZGl0Q29sdW1uID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gIGVkaXRBcnRpY2xlQ29sdW1uID0gZm9ybURhdGFEZXRhaWxbJCh0aGlzKS5hdHRyKCdpZCcpXVsnYXJ0aWNsZUlkJ107XHJcbiAgXHJcbiAgdmFyIGNsID0gXCJcIjtcclxuICB2YXIgbGluZU5vID0gMTtcclxuICAkKCcudGFibGUtZGV0YWlsIHRib2R5JykuaHRtbCgnJyk7XHJcbiAgJC5lYWNoKGZvcm1EYXRhRGV0YWlsLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgICAgaWYobGluZU5vJTIgPT0gMCl7XHJcbiAgICAgICAgICBjbCA9IFwiaW1wYWlyXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjbCA9IFwicGFpclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIHJlbWlzZSA9IHZhbHVlLnJlbWlzZSArIFwiICVcIjtcclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgdHZhID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uID0gXCI8dHIgY2xhc3M9XCIrY2wrXCI+PHRkPjwvdGQ+PHRkIGNvbHNwYW49JzknPjxiPkluZm9ybWF0aW9ucyBjb21wbGVtZW50YWlyZXMgOiA8L2I+XCIrb2JzZXJ2YXRpb24rXCI8L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAvL2NhdGVnb3JpZVxyXG4gICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgICBcIiA8dHIgY2xhc3M9XCIrY2wrXCI+PHRkPlwiICtcclxuICAgICAgICAgICAgICAoaSArIDEpICtcclxuICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgICB2YWx1ZS50aXRyZSArXHJcbiAgICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgICB2YWx1ZS51bml0ZSArXHJcbiAgICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgICB2YWx1ZS5xdWFudGl0ZSArXHJcbiAgICAgICAgICAgICAgXCI8L3RkPiA8dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgICAgdmFsdWUucHJpeHVuaXRhaXJlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgICAgdHZhICtcclxuICAgICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcic+XCIgK1xyXG4gICAgICAgICAgICAgIHJlbWlzZSArXHJcbiAgICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgICB2YWx1ZS5tb250YW50UmVtaXNlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgICAgdmFsdWUucHJpeHR0Yy50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS10cmFzaCB0ZXh0LWRhbmdlcic+PC9pPjwvYT4gPGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGVkaXRfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS1lZGl0IHRleHQtcHJpbWFyeSc+PC9pPjwvYT48L3RkPjwvdHI+XCIrb2JzZXJ2YXRpb247XHJcbiAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgbGluZU5vKys7XHJcbiAgfSk7XHJcblxyXG5cclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgdmFyIHJvd19pbmRleCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICB2YXIgY29sX2luZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICAgIGRldGFpbDpmb3JtRGF0YURldGFpbFskKHRoaXMpLmF0dHIoJ2lkJyldXHJcbiAgICAgIH0sXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzX2VkaXRfZGV0YWlsX25ld1wiLCB7aWQ6IGlkfSksXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIC8vICQoJy50YWJsZS1kZXRhaWwgdHInKS5lcShyb3dfaW5kZXgrMSkuYWRkQ2xhc3MoJ3RhYmxlLXRyLXN0eWxlJyk7XHJcbiAgICAgICAgICAkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5lcShyb3dfaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInRhYmxlLXRyLXN0eWxlXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5odG1sKFwiPHRkIGNvbHNwYW49JzEwJz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgICAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgIC5hZnRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWQtZXJcIj48ZGl2IGNsYXNzPVwibGRzLWVsbGlwc2lzXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoXHJcbiAgICAgICAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKS5maW5kKFwiLmFydGljbGVzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuYXJ0aWNsZXNcIilcclxuICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZi1zZWxlY3RlZFwiKVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8kKFwiLmxvYWQtZXJcIikuZmFkZU91dCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgLy8gJCgnLmRldF9mb3InKS5mYWRlSW4oMjAwKVxyXG4gICAgICAgICAgJChcIi5ib2RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZVwiKSxcclxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIEtURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaC5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi50YWJsZS1kZXRhaWwgKyB0YWJsZSBcIikuYWRkQ2xhc3MoJ3JlbW92ZScpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIC8vICAgIGFsZXJ0KHJvd19pbmRleCk7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgIHZhciBzbGggPSBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5lbXB0eSgpLmFwcGVuZChcIjx0ZCBzdHlsZT0nZGlzcGxheTogbm9uZTsnPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLm5ld1wiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZV9lbGVtZW50XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGxpbmVObyA9IDE7XHJcbiAgdmFyIGNsID0gXCJcIjtcclxuICBmb3JtRGF0YURldGFpbC5zcGxpY2UoJCh0aGlzKS5hdHRyKFwiaWRcIiksIDEpXHJcbiAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLnJlbW92ZSgpO1xyXG4gIGlmKGZvcm1EYXRhRGV0YWlsLmxlbmd0aDwxKXsgICAkKFwiI2NyZWF0ZV9kZXZpc1wiKS5sYXN0KCkuYWRkQ2xhc3MoIFwiZGlzYWJsZWRcIiApO31cclxuXHJcbiAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLnJlbW92ZSgpO1xyXG4gICQuZWFjaChmb3JtRGF0YURldGFpbCwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICBpZihsaW5lTm8lMiA9PSAwKXtcclxuICAgICAgY2wgPSBcImltcGFpclwiO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNsID0gXCJwYWlyXCJcclxuICAgIH1cclxuICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICB2YXIgcmVtaXNlID0gdmFsdWUucmVtaXNlICsgXCIgJVwiO1xyXG4gICAgdmFyIG9ic2VydmF0aW9uID0gdmFsdWUub2JzZXJ2YXRpb247XHJcbiAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgb2JzZXJ2YXRpb24gPSBcIjx0ciBjbGFzcz1cIitjbCtcIj48dGQ+PC90ZD48dGQgY29sc3Bhbj0nOSc+PGI+SW5mb3JtYXRpb25zIGNvbXBsZW1lbnRhaXJlcyA6IDwvYj5cIitvYnNlcnZhdGlvbitcIjwvdGQ+PC90cj5cIjtcclxuICAgIH1cclxuICAgIHZhciBteV9yb3cgPVxyXG4gICAgICAgICAgICBcIiA8dHIgY2xhc3M9XCIrY2wrXCI+PHRkPlwiICtcclxuICAgICAgICAgICAgKGkgKyAxKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnRpdHJlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+IDx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHR2YSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGRlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXInPjwvaT48L2E+PC90ZD48L3RyPlwiK29ic2VydmF0aW9uO1xyXG4gICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbD50Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgIGxpbmVObysrO1xyXG59KTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCIubmV3LWFydGljbGUtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIi5yZW1vdmUtaXRlbS1lZGl0LWFkZFwiKS5yZW1vdmVDbGFzcygncmVtb3ZlLWl0ZW0tZWRpdC1hZGQnKTtcclxuICAkKHRoaXMpLmhpZGUoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5jb21wdGVNYXNzZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciAkZm9ybSA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgLy8gU2ltdWxhdGUgZm9ybSBkYXRhLCBidXQgb25seSBpbmNsdWRlIHRoZSBzZWxlY3RlZCBzcG9ydCB2YWx1ZS5cclxuICB2YXIgZGF0YSA9IHt9O1xyXG4gIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvL2FsZXJ0KCRmb3JtLmF0dHIoJ2FjdGlvbicpKTtcclxuICBjb25zb2xlLmxvZygkZm9ybS5hdHRyKFwibWV0aG9kXCIpKTtcclxuICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6ICRmb3JtLmF0dHIoXCJhY3Rpb25cIiksXHJcbiAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAkKFwiLmNvbXB0ZVJ1YnJpcXVlXCIpLnJlcGxhY2VXaXRoKCQoaHRtbCkuZmluZChcIi5jb21wdGVSdWJyaXF1ZVwiKSk7XHJcbiAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICQoXCIuY29tcHRlUnVicmlxdWVcIikucGFyZW50KCkuZmluZChcIi5zZWxlY3QyXCIpLm5vdChcIjpmaXJzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgJChcIi5jb21wdGVQb3N0ZVwiKS5wYXJlbnQoKS5maW5kKFwiLnNlbGVjdDJcIikubm90KFwiOmZpcnN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAkKFwiLmNvbXB0ZVwiKS5wYXJlbnQoKS5maW5kKFwiLnNlbGVjdDJcIikubm90KFwiOmZpcnN0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5jb21wdGVSdWJyaXF1ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICB2YXIgZGF0YSA9IHt9O1xyXG4gIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gIGRhdGFbJChcIi5jb21wdGVNYXNzZVwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLmNvbXB0ZU1hc3NlXCIpLnZhbCgpO1xyXG4gIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICQoXCIuY29tcHRlUG9zdGVcIikucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKFwiLmNvbXB0ZVBvc3RlXCIpKTtcclxuICAgICAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgJChcIi5jb21wdGVQb3N0ZVwiKS5wYXJlbnQoKS5maW5kKFwiLnNlbGVjdDJcIikubm90KFwiOmZpcnN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAkKFwiLmNvbXB0ZVwiKS5wYXJlbnQoKS5maW5kKFwiLnNlbGVjdDJcIikubm90KFwiOmZpcnN0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICB9KTtcclxufSk7XHJcblxyXG4kKFwiLm5ldyAsIC5lZGl0XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmNvbXB0ZVBvc3RlXCIsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gIHZhciBkYXRhID0ge307XHJcbiAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgZGF0YVskKFwiLmNvbXB0ZU1hc3NlXCIpLmF0dHIoXCJuYW1lXCIpXSA9ICQoXCIuY29tcHRlTWFzc2VcIikudmFsKCk7XHJcbiAgZGF0YVskKFwiLmNvbXB0ZVJ1YnJpcXVlXCIpLmF0dHIoXCJuYW1lXCIpXSA9ICQoXCIuY29tcHRlUnVicmlxdWVcIikudmFsKCk7XHJcbiAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiAkZm9ybS5hdHRyKFwiYWN0aW9uXCIpLFxyXG4gICAgdHlwZTogJGZvcm0uYXR0cihcIm1ldGhvZFwiKSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgJChcIi5jb21wdGVcIikucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKFwiLmNvbXB0ZVwiKSk7XHJcbiAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICQoXCIuY29tcHRlXCIpLnBhcmVudCgpLmZpbmQoXCIuc2VsZWN0MlwiKS5ub3QoXCI6Zmlyc3RcIikucmVtb3ZlKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfbGlzdFwiKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gIC8vIHNjcm9sbFg6IHRydWUsXHJcbiAgY29sdW1uczogW1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjMlXCIsbmFtZTogJ3RhYi5pZCcgfSxcclxuICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiICxuYW1lOiAndGFiLmNvZGUnfSxcclxuICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiLCBuYW1lOiAndGFiLmRhdGVkZXZpcycgfSxcclxuICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjE1JVwiICxuYW1lOiAndGFiLmRlc2NyaXB0aW9uJyB9LFxyXG4gICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTUlXCIgLG5hbWU6ICdhY2hhdCcgfSxcclxuICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjIwJVwiLCBuYW1lOiAndGFiLmNsaWVudCcgfSxcclxuICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjE1JVwiICAsbmFtZTogJ3RhYi5NdEh0Jy8qLCBcInRhcmdldHNcIjogWzQsIDVdKi8gfSxcclxuICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjIwJVwiLG5hbWU6ICd0YWIuTXRUdmEnIH0sXHJcbiAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxMCVcIixuYW1lOiAndGFiLk10VG90JyB9LFxyXG4gICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTAlXCIsbmFtZTogJ3RhYi5idWRnZXQnIH0sXHJcbiAgICAgIHsgd2lkdGg6IFwiOCVcIiwgb3JkZXJhYmxlOiB0cnVlICxuYW1lOiAndGFiLmRlcGVuc2UnfSxcclxuICAgICAgeyBvcmRlcmFibGU6IHRydWUsIGNsYXNzTmFtZTogXCJjbWRcIiB9LFxyXG4gICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIGNsYXNzTmFtZTogXCJiclwiIH0sXHJcbiAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgY2xhc3NOYW1lOiBcImZhY1wiIH0sXHJcbiAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgY2xhc3NOYW1lOiBcInJnXCJ9LFxyXG4gICAgICB7IHdpZHRoOiBcIjglXCIsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogZmFsc2UgfSxcclxuICAgICAgeyB3aWR0aDogXCI4JVwiLCBvcmRlcmFibGU6IHRydWUgLG5hbWU6ICd0YWIucG9zaXRpb25fYWN0dWVsJyB9LFxyXG4gICAgICB7b3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiBmYWxzZSAsd2lkdGg6IFwiNSVcIn0sXHJcbiAgXSxcclxuIGNvbHVtbkRlZnM6IFtcclxuICAgIHtzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICB0YXJnZXRzOiAxNyxcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICh0LCBhLCBsLCBzKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gXCJcIjtcclxuICAgICAgICAgICAgdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmsgPSBcIlwiIDsgXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5fcm91dGVfbGluayl7XHJcbiAgICAgICAgICAgICAgICAgICBsaW5rID0gXCJocmVmPSdcIiArIGVsZW1lbnQuX3JvdXRlX2xpbmsgKyBcIidcIjsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhICsgXCI8bGk+PGEgXCIrbGluaytcIiAgZGF0YS10cmFuc2l0aW9uPSdcIiArIGVsZW1lbnQubmFtZSArIFwiJyBkYXRhLWlkPSdcIiArIGVsZW1lbnQuaWQgKyBcIicgZGF0YS10aXRsZT0nXCIgKyBlbGVtZW50LnRpdHJlICsgXCInIGNsYXNzPSdkcm9wZG93bi1pdGVtICBcIiArIGVsZW1lbnQuY2xhc3MgKyBcIiBcIiArIGVsZW1lbnQuaWRDcyArIFwiJyA+PGkgY2xhc3M9J2ZhIFwiICsgZWxlbWVudC5pY29uICsgXCInID48L2k+IFwiICsgZWxlbWVudC50aXRyZSArIFwiPC9hPjwvbGk+XCJcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAnXFx0PGRpdiBjbGFzcz1cImRyb3Bkb3duIGRyb3Bkb3duLWlubGluZSBjZW50ZXJcIj4gXFx0IDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIlwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj4gXFx0IDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj4gXFx0ICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIiBjbGFzcz1cInN2Zy1jb2xvclwiPiA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPiA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIvPiA8Y2lyY2xlIGZpbGw9XCIjMDAwMDAwXCIgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIyXCIvPiA8Y2lyY2xlIGZpbGw9XCIjMDAwMDAwXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMlwiLz4gPGNpcmNsZSBmaWxsPVwiIzAwMDAwMFwiIGN4PVwiMTlcIiBjeT1cIjEyXCIgcj1cIjJcIi8+IDwvZz48L3N2Zz4gXFx0IDwvc3Bhbj4gXFx0IDwvYT4gPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1zbSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+IFxcdCA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51IHNob3cgZHJwLWxpc3RcIiB4LXBsYWNlbWVudD1cImJvdHRvbS1zdGFydFwiPiA8bGkgY2xhc3M9XCJuYXZpLWhlYWRlciBmb250LXdlaWdodC1ib2xkZXIgdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLXhzIHRleHQtcHJpbWFyeSBwYi0yXCI+Q2hvaXNpciBvcGVyYXRpb24gOjwvbGk+JyArIGRhdGEgKyAnIDwvdWw+IDwvZGl2PiBcXHQ8L2Rpdj5cXHQnO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbl0sXHJcblxyXG4gIGRvbTogJzxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcImY+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGV4dGVuZDogXCJleGNlbFwiLFxyXG4gICAgICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgIGNvbHVtbnM6IFwiOnZpc2libGVcIixcclxuICAgICAgICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICAgICAgICAgIGJvZHk6IGZ1bmN0aW9uIChkYXRhLCByb3csIGNvbHVtbiwgbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YSA9ICQoJzxwPicgKyBkYXRhICsgJzwvcD4nKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5pc051bWVyaWMoZGF0YS5yZXBsYWNlKCcsJywgJy4nKSkgPyBkYXRhLnJlcGxhY2UoJywnLCAnLicpIDogZGF0YTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgIH1cclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgLy9maXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG50YWJsZS5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcblxyXG4gIC8vY29uc29sZS5sb2coc3QpO1xyXG4gIC8vaWYgKHN0ICE9IG51bGwpIHtcclxuICAvLyAgICAkLmVhY2goc3QuY29sdW1ucywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAvLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gIC8vICAgICAgICAgICAgJCgnLnJlbW92ZS1maWx0ZXInKS5zaG93KCk7XHJcbiAgLy8gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gICAgICAgIH1cclxuICAvLyAgICB9KTtcclxuICAvL31cclxuXHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbXSwgW10pO1xyXG4gLy8gQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbMl0sIFtdKTtcclxuLy8gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbNCwgMTRdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuLypjb2x1bW4gMSBkZSBkYXRhdGJsZSBzZWFyY2gqL1xyXG5cclxuJChcIi5yZW1vdmUtZmlsdGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuYWN0aW9uX2hlYWRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCk7XHJcbiAgJChcIi5hY3Rpb24gLC5hY3Rpb25faGVhZFwiKS5wcm9wKFwiY2hlY2tlZFwiLCAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hY3Rpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFibGUuJChcInRyLnNlbGVjdGVkXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCIjX2VkaXRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICBpZiAoaWQpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfZWRpdFwiLCB7IGlkOiBpZCB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLypBam91dGVyIHVuIG5vdXZlYXUgYXJ0aWNsZSBkYW5zIGxhIHBhZ2UgZGUgbW9kaWZpY2F0aW9uICovXHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1fYWRkX2FydGljbGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRfY2FiXCIpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgLy8gYWxlcnQoaWQpO1xyXG4gIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2RldF9pbnNlcnRcIiwgeyBpZDogaWQgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzY2FiX3VwZGF0ZVwiLCB7IGlkOiBpZCB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgJChcIi5mb3JtICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoXHJcbiAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArXHJcbiAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIjX3Nob3dcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuXHJcbiAgaWYgKGlkKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzY2FiX3Nob3dcIiwgeyBpZDogaWQgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiNfc3RhdHV0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfc3RhdHV0XCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLmFjdGlvbnNcIikub24oXCJjbGlja1wiLCBcIi5jbG9zZS1tZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vJCgnLmNsb3NlLW1lJykuY2xpY2soZnVuY3Rpb24gKGUpe1xyXG4gICQoXCIuYWN0aW9uc1wiKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5hY3Rpb25zXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fc3RhdHV0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICBpZiAoaWQpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2NhYl9zdGF0dXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2codGV4dFN0YXR1cyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICQoXCIuZm9ybV9zdGF0dXQgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI19nZW5lcmVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfZ2VuZXJlclwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICQoXCIuYWN0aW9uc1wiKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICBcIndhcm5pbmdcIixcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLmFjdGlvbnNcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV9nZW5lcmVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICBpZiAoaWQpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2NhYl9nZW5lcmVyXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICBkYXRhOiBkdGEsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRTdGF0dXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAkKFwiLmVycm9yc19saXN0XCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgvW1tdLF0vKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lKTtcclxuICAgICAgICAgICAgdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ycyA9IFtcIlxcXFxdXCIsIFwiXFxcXFtcIl07XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9ycy5qb2luKFwifFwiKSkpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICAgICAgJChcIi5lcnJvcnNfbGlzdFwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5cIiArXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5OYW1lICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz4gXCIgK1xyXG4gICAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm1fZ2VuZXJlciAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIjX2FyY2hpdmVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgLmZpcmUoe1xyXG4gICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgQXJjaGl2ZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYXJjaGl2ZSc+PC9pPiBPdWksIEFyY2hpdmVyIVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzY2FiX2FyY2hpdmVcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV9jb21tYW5kZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIGFsZXJ0KCk7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcblxyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIC8vIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAvL3ZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiZGV2aXNJZFwiKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcbiAgbC5zdGFydCgpO1xyXG4gIC8vICAgIGFsZXJ0KGlkKTtcclxuICBpZiAoaWQpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2NhYl9jb21tYW5kZVwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgZGF0YTogZHRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0U3RhdHVzKTtcclxuICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgIC8vIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5ub3R2YWxpZGUpIHtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwNCkge1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICBcIndhcm5pbmdcIixcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfaW1wcmltZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiZGV2aXNJZFwiKTtcclxuICBpZiAoaWQpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfcGRmXCIsIHsgaWQ6IGlkIH0pO1xyXG4gICAgLy8gICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICBcIndhcm5pbmdcIixcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG4gXHJcbn0pO1xyXG5cclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcImNsaWNrXCIsIFwiLmRldGFpbF9lZGl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgkKHRoaXMpLmF0dHIoJ2lkJykpXHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gIHZhciByb3dfaW5kZXggPSAkKHRoaXMpLmNsb3Nlc3QoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuaW5kZXgoKTtcclxuICB2YXIgY29sX2luZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2RldF9lZGl0X2RldGFpbFwiLCB7aWQ6IGlkfSksXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIC8vICQoJy50YWJsZS1kZXRhaWwgdHInKS5lcShyb3dfaW5kZXgrMSkuYWRkQ2xhc3MoJ3RhYmxlLXRyLXN0eWxlJyk7XHJcbiAgICAgICAgICAkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5lcShyb3dfaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInRhYmxlLXRyLXN0eWxlXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5odG1sKFwiPHRkIGNvbHNwYW49JzEwJz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgICAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgIC5hZnRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWQtZXJcIj48ZGl2IGNsYXNzPVwibGRzLWVsbGlwc2lzXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoXHJcbiAgICAgICAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKS5maW5kKFwiLmFydGljbGVzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuYXJ0aWNsZXNcIilcclxuICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZi1zZWxlY3RlZFwiKVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8kKFwiLmxvYWQtZXJcIikuZmFkZU91dCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgLy8gJCgnLmRldF9mb3InKS5mYWRlSW4oMjAwKVxyXG4gICAgICAgICAgJChcIi5ib2RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG5cclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZVwiKSxcclxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIEtURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaC5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAvLyAgICBhbGVydChyb3dfaW5kZXgpO1xyXG4gICAgICAgICAgLy8gICAgICAgICAgICB2YXIgc2xoID0gc2VsZWN0b3IucGFyZW50KCkucGFyZW50KCkuZW1wdHkoKS5hcHBlbmQoXCI8dGQgc3R5bGU9J2Rpc3BsYXk6IG5vbmU7Jz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgfSxcclxuICB9KTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJjbGlja1wiLCBcIi5kZXRhaWxfZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICQoJy5lcnJvci1jbGFzcy10YWInKS5yZW1vdmUoKTtcclxuIHZhciBpZCA9ICQoXCIjX2lkXCIpLnZhbCgpO1xyXG4gXHJcbiB2YXIgZmxhZyA9IDA7XHJcbiBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybURhdGFEZXRhaWwubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgaWYoZm9ybURhdGFEZXRhaWxbaW5kZXhdLmFydGljbGVJZCA9PSAkKCcjJytuYW1lRGV0YWlsKydfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZCl7XHJcbiAgICAgICAgLy8gIHJldHVybiAkKCcjJytuYW1lRGV0YWlsKydfYXJ0aWNsZScpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5DZSBhcnRpY2xlIGVzdCBkZWphIGV4aXN0ZTwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiQ2UgYXJ0aWNsZSBlc3QgZGVqYSBleGlzdGUgXCIsIFwiRXJyb3JcIiwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgIFxyXG4gICAgIFxyXG4gfVxyXG4gaWYoKCQoJy5lZGl0LWRldGFpbFthcnRpY2xlPVwiJyskKCcjJytuYW1lRGV0YWlsKydfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZCsnXCJdJykuYXR0cignYXJ0aWNsZScpID09ICQoJyMnK25hbWVEZXRhaWwrJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkKSAmJiAoJCh0aGlzKS5wYXJlbnRzKCcuZWRpdC1kZXRhaWwnKS5hdHRyKCdhcnRpY2xlJykgIT0gJCgnIycrbmFtZURldGFpbCsnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQpKXtcclxuICAgIC8vICByZXR1cm4gJCgnIycrbmFtZURldGFpbCsnX2FydGljbGUnKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+Q2UgYXJ0aWNsZSBlc3QgZGVqYSBleGlzdGU8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgdG9hc3RyLmVycm9yKFwiQ2UgYXJ0aWNsZSBlc3QgZGVqYSBleGlzdGVcIiwgXCJFcnJvclwiLCB7XHJcbiAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgfSk7XHJcbiAgcmV0dXJuXHJcbiAgfVxyXG4gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVycm9yc19kZXRhaWxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgIHZhciBuYW1lID0gbmFtZURldGFpbCsnWycrZXJyb3JzX2RldGFpbHNbaW5kZXhdLnByb3BlcnR5KyddJztcclxuICAgICB2YXIgdmFsdWUgPSAkKCdbbmFtZT1cIicrbmFtZURldGFpbCsnWycrZXJyb3JzX2RldGFpbHNbaW5kZXhdLnByb3BlcnR5KyddJysnXCJdJykudmFsKCk7XHJcblxyXG4gICAgIGlmKGVycm9yc19kZXRhaWxzW2luZGV4XS5jYXVzZSA9PSBudWxsICYmIHZhbHVlID09ICcnICl7XHJcbiAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAkKCdbbmFtZT1cIicrbmFtZSsnXCJdJykucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzX2RldGFpbHNbaW5kZXhdLm1lc3NhZ2UgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgfVxyXG4gfVxyXG4gaWYoZmxhZyA9PSAxKXtcclxuICAgICByZXR1cm4gZmFsc2U7XHJcbiB9XHJcbiB2YXIgcm93ID0ge1xyXG4gICAgIHF1YW50aXRlOiQoJyMnK25hbWVEZXRhaWwrJ19xdWFudGl0ZScpLnZhbCgpLFxyXG4gICAgIHByaXh1bml0YWlyZTpwYXJzZUZsb2F0KCQoJyMnK25hbWVEZXRhaWwrJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgdHZhOiQoJyMnK25hbWVEZXRhaWwrJ190dmEnKS52YWwoKSxcclxuICAgICByZW1pc2U6JCgnIycrbmFtZURldGFpbCsnX3JlbWlzZScpLnZhbCgpLFxyXG4gfVxyXG4gZm9ybURhdGFEZXRhaWwgPSBbXTtcclxuIGlmKCQoJyMnK25hbWVEZXRhaWwrJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkID09IFwiXCIpIHtcclxuICAgIHRvYXN0ci5lcnJvcignZW50cmVyIHRvdXMgbGVzIGNob2l4Jywge1xyXG4gICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gIH0pO1xyXG4gIHJldHVybjtcclxufVxyXG4vLyBjb25zb2xlLmxvZygkKCcjJytuYW1lRGV0YWlsKydfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZClcclxuIGZvcm1EYXRhRGV0YWlsLnB1c2goe1xyXG4gICAgIGlkOiQodGhpcykucGFyZW50cygnLmVkaXQtZGV0YWlsJykuYXR0cignaWQnKSxcclxuICAgICBhcnRpY2xlSWQ6JCgnIycrbmFtZURldGFpbCsnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQsXHJcbiAgICAgdGl0cmU6JCgnIycrbmFtZURldGFpbCsnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dCxcclxuICAgICBjb2RlOiQoJyMnK25hbWVEZXRhaWwrJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmNvZGUsXHJcbiAgICAgdW5pdGU6JCgnIycrbmFtZURldGFpbCsnX3VuaXRlJykuc2VsZWN0MignZGF0YScpWzBdLnRleHQsXHJcbiAgICAgdW5pdGVJZDokKCcjJytuYW1lRGV0YWlsKydfdW5pdGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQsXHJcbiAgICAgcXVhbnRpdGU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19xdWFudGl0ZScpLnZhbCgpKSxcclxuICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgdHZhOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfdHZhJykudmFsKCkpLFxyXG4gICAgIHJlbWlzZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3JlbWlzZScpLnZhbCgpKSxcclxuICAgICBvYnNlcnZhdGlvbjogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19vYnNlcnZhdGlvbicpLnZhbCgpLFxyXG4gICAgIG1vbnRhbnRSZW1pc2U6Z2V0UmVtaXNlKHJvdyksXHJcbiAgICAgcHJpeHR0YzpnZXRQcml4VFRjKHJvdyksXHJcbiB9KTtcclxuIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhRGV0YWlsKVxyXG4gZm9ybURhdGEuYXBwZW5kKCdkZXRhaWwnLGRhdGEpO1xyXG5cclxuICQuYWpheCh7XHJcbiAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNkZXRfaW5zZXJ0XCIsIHtpZDogaWR9KSxcclxuICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgLyogICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgJChcIi5kZXRhaWxfZm9ybV9lZGl0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAvL2wuc3RvcCgpO1xyXG4gICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICB9LFxyXG4gfSk7XHJcbiBcclxuXHJcbiAgICAgLy90b2FzdHIud2FybmluZyhcIkNldCBhcnRpY2xlIGV4aXN0ZSBkZWphIFwiLCBcIndhcm5pbmcgXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcblxyXG4gXHJcbiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtX2RlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gLy8gYWxlcnQoKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICB2YXIgdG9rZW4gPSBkdGEuZ2V0KFwiX3Rva2VuXCIpO1xyXG4gIC8vICAgIHZhciBpZCA9ICQoXCJpbnB1dFtuYW1lPV9pZF1cIikudmFsKCk7XHJcbiAgLy8gICAgdmFyIHRva2VuID0gJChcImlucHV0W25hbWU9X3Rva2VuXVwiKS52YWwoKTtcclxuICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgIC5maXJlKHtcclxuICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2RldF9kZWxldGVcIiwgeyBpZDogaWQsIHRva2VuOiB0b2tlbiB9KSxcclxuICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgLy8gc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvL3N3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJChcIiNfY2hhcmdlc1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIC8vIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcImRldmlzSWRcIik7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzX2NoYXJnZXNcIiwgeyBpZDogaWQgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuY2hhcmdlXCIpLm9uKFwic3VibWl0XCIsIFwiLmNoYXJnZV9zYXZlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gYWxlcnQoKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhkdGEpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc19jaGFyZ2VzXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLmNoYXJnZV9mb3JtX2RlbGV0ZVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgdmFyIHRva2VuID0gZHRhLmdldChcIl90b2tlblwiKTtcclxuICAvLyAgICB2YXIgaWQgPSAkKFwiaW5wdXRbbmFtZT1faWRdXCIpLnZhbCgpO1xyXG4gIC8vICAgIHZhciB0b2tlbiA9ICQoXCJpbnB1dFtuYW1lPV90b2tlbl1cIikudmFsKCk7XHJcbiAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAuZmlyZSh7XHJcbiAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY2hhcmdlZGV2aXNfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgLy8gc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvL3N3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5fZmljaGllcnNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgYWxlcnQoKTtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc19maWNoaWVyc1wiLCB7IGlkOiBpZCB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5fZGVsZXRlX2ZpY2hpZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuXHJcbiAgaWYgKGlkKSB7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgLmZpcmUoe1xyXG4gICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNfZmljaGllcnNfZGVsZXRlXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFwiSW1wb3NzaWJsZSBkJ2VmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHtcclxuICAgICAgdGltZU91dDogNDAwMCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi51dl9kZXZpc19hcHBseV90cmFuc2l0aW9uc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gXHJcbiAgLyp2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICB2YXIgdGl0bGUgPSBkdGEuZ2V0KCd0aXRsZScpOyovXHJcblxyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cihcImRhdGEtdGl0bGVcIik7XHJcbiAgdmFyIHRyYW5zaXRpb24gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRyYW5zaXRpb25cIik7XHJcblxyXG4gIGR0YS5hcHBlbmQoXCJpZFwiLCBpZCk7XHJcbiAgZHRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcclxuICBkdGEuYXBwZW5kKFwidHJhbnNpdGlvblwiLCB0cmFuc2l0aW9uKTtcclxuXHJcbiAgLy9hbGVydCh0cmFuc2l0aW9uKTtcclxuIC8vYWxlcnQoaWQpO1xyXG4gIGlmKHRyYW5zaXRpb24gPT0gXCJhcHJlc192YWxpZGVyX2NvbW1hbmRlclwiKXtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfY29tbWFuZGVcIiwge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoXCIjTXlNb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxufWVsc2UgaWYgKGlkKSB7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgLmZpcmUoe1xyXG4gICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6XHJcbiAgICAgICAgICBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciBhIGwnZXRhdCAnXCIgK1xyXG4gICAgICAgICAgdGl0bGUgK1xyXG4gICAgICAgICAgXCInIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpICFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBOb24gIVwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzX2FwcGx5X3RyYW5zaXRpb25zXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzdWx0LnZhbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2NhYl9jb21tYW5kZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChyZXN1bHQudmFsaWRlcik7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzY2FiX2NvbW1hbmRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5pZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduZSBcIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuX2dlbmVyZXJfZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgaWQgPSAkKFwiaW5wdXRbbmFtZT1faWRdXCIpLnZhbCgpO1xyXG4gIHZhciB0eXBlID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5hdHRyKFwibmFtZVwiKTtcclxuICAvL2FsZXJ0KCk7XHJcbiAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvbiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKS5wb3AoKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdHlwZSkpO1xyXG4gIC8vYWxlcnQoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykucG9wKCkpO1xyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzX2dlbmVyZXJfaW5zZXJ0XCIsIHsgaWQ6IGlkLCB0eXBlOiB0eXBlIH0pLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAkLmVhY2gocmVzdWx0LmVycm9ycywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgIHRvYXN0cldpZHRvdXRQcm9ncmVzcy53YXJuaW5nKHZhbHVlLCBcIndhcm5pbmdcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgaWYgKHR5cGUgIT0gXCJ2ZXJpZmllclwiKSB7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChcIi52ZXJpZmllclwiKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJsYWRkYS1idXR0b25cIilcclxuICAgICAgICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgJChcIiNkaXNhYmxlXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgd2luZG93Lm9wZW4oXHJcbiAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc19wZGZfZ2VuZXJlcl92ZXJpZmllclwiKSxcclxuICAgICAgICAgICAgXCJfYmxhbmtcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy93aW5kb3cuZG9jdW1lbnQubG9jYXRpb24gPSBSb3V0aW5nLmdlbmVyYXRlKCd1dl9kZXZpc19wZGZfZ2VuZXJlcl9pbnNlcnQnKTtcclxuICAgICAgICAvL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKFwiI2dyaWQgdGJvZHlcIikub24oXCJjbGlja1wiLCBcIi5jZF9vcFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2NhYl9zaG93XCIsIHtcclxuICAgIGlkOiAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIiksXHJcbiAgfSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuJChcIi53aXphcmQtYmlnXCIpXHJcbiAgLnN0ZXBzKHtcclxuICAgIGJvZHlUYWc6IFwiZmllbGRzZXRcIixcclxuICAgIG9uU3RlcENoYW5naW5nOiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCwgbmV3SW5kZXgpIHtcclxuICAgICAgLy8gQWx3YXlzIGFsbG93IGdvaW5nIGJhY2t3YXJkIGV2ZW4gaWYgdGhlIGN1cnJlbnQgc3RlcCBjb250YWlucyBpbnZhbGlkIGZpZWxkcyFcclxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IG5ld0luZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvcmJpZCBzdXBwcmVzc2luZyBcIldhcm5pbmdcIiBzdGVwIGlmIHRoZSB1c2VyIGlzIHRvIHlvdW5nXHJcbiAgICAgIGlmIChuZXdJbmRleCA9PT0gMyAmJiBOdW1iZXIoJChcIiNhZ2VcIikudmFsKCkpIDwgMTgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIC8vIENsZWFuIHVwIGlmIHVzZXIgd2VudCBiYWNrd2FyZCBiZWZvcmVcclxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IG5ld0luZGV4KSB7XHJcbiAgICAgICAgLy8gVG8gcmVtb3ZlIGVycm9yIHN0eWxlc1xyXG4gICAgICAgICQoXCIuYm9keTplcShcIiArIG5ld0luZGV4ICsgXCIpIGxhYmVsLmVycm9yXCIsIGZvcm0pLnJlbW92ZSgpO1xyXG4gICAgICAgICQoXCIuYm9keTplcShcIiArIG5ld0luZGV4ICsgXCIpIC5lcnJvclwiLCBmb3JtKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEaXNhYmxlIHZhbGlkYXRpb24gb24gZmllbGRzIHRoYXQgYXJlIGRpc2FibGVkIG9yIGhpZGRlbi5cclxuICAgICAgZm9ybS52YWxpZGF0ZSgpLnNldHRpbmdzLmlnbm9yZSA9IFwiOmRpc2FibGVkLDpoaWRkZW5cIjtcclxuXHJcbiAgICAgIC8vIFN0YXJ0IHZhbGlkYXRpb247IFByZXZlbnQgZ29pbmcgZm9yd2FyZCBpZiBmYWxzZVxyXG4gICAgICByZXR1cm4gZm9ybS52YWxpZCgpO1xyXG4gICAgfSxcclxuICAgIG9uU3RlcENoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY3VycmVudEluZGV4LCBwcmlvckluZGV4KSB7XHJcbiAgICAgIC8vIFN1cHByZXNzIChza2lwKSBcIldhcm5pbmdcIiBzdGVwIGlmIHRoZSB1c2VyIGlzIG9sZCBlbm91Z2guXHJcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IDIgJiYgTnVtYmVyKCQoXCIjYWdlXCIpLnZhbCgpKSA+PSAxOCkge1xyXG4gICAgICAgICQodGhpcykuc3RlcHMoXCJuZXh0XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTdXBwcmVzcyAoc2tpcCkgXCJXYXJuaW5nXCIgc3RlcCBpZiB0aGUgdXNlciBpcyBvbGQgZW5vdWdoIGFuZCB3YW50cyB0byB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gMiAmJiBwcmlvckluZGV4ID09PSAzKSB7XHJcbiAgICAgICAgJCh0aGlzKS5zdGVwcyhcInByZXZpb3VzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hpbmc6IGZ1bmN0aW9uIChldmVudCwgY3VycmVudEluZGV4KSB7XHJcbiAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIC8vIERpc2FibGUgdmFsaWRhdGlvbiBvbiBmaWVsZHMgdGhhdCBhcmUgZGlzYWJsZWQuXHJcbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQgaXQncyByZWNvbW1lbmRlZCB0byBkbyBhbiBvdmVyYWxsIGNoZWNrIChtZWFuIGlnbm9yaW5nIG9ubHkgZGlzYWJsZWQgZmllbGRzKVxyXG4gICAgICBmb3JtLnZhbGlkYXRlKCkuc2V0dGluZ3MuaWdub3JlID0gXCI6ZGlzYWJsZWRcIjtcclxuXHJcbiAgICAgIC8vIFN0YXJ0IHZhbGlkYXRpb247IFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uIGlmIGZhbHNlXHJcbiAgICAgIHJldHVybiBmb3JtLnZhbGlkKCk7XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZDogZnVuY3Rpb24gKGV2ZW50LCBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgLy8gU3VibWl0IGZvcm0gaW5wdXRcclxuICAgICAgZm9ybS5zdWJtaXQoKTtcclxuICAgIH0sXHJcbiAgfSlcclxuICAudmFsaWRhdGUoe1xyXG4gICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkge1xyXG4gICAgICBlbGVtZW50LmJlZm9yZShlcnJvcik7XHJcbiAgICB9LFxyXG4gICAgcnVsZXM6IHtcclxuICAgICAgY29uZmlybToge1xyXG4gICAgICAgIGVxdWFsVG86IFwiI3Bhc3N3b3JkXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvdzJcIikuRGF0YVRhYmxlKHtcclxuICBzY3JvbGxZOiBcIjIwMHB4XCIsXHJcbiAgc2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcbiAgcGFnaW5nOiBmYWxzZSxcclxuICBhdXRvV2lkdGg6IGZhbHNlLFxyXG59KTtcclxuXHJcbnZhciB0YWJsZVNob3cgPSAkKFwiI2RhdGF0YWJsZS1zaG93XCIpLkRhdGFUYWJsZSh7XHJcbiAgc2Nyb2xsWTogXCIyMDBweFwiLFxyXG4gIHNjcm9sbENvbGxhcHNlOiB0cnVlLFxyXG4gIHBhZ2luZzogZmFsc2UsXHJcbiAgYXV0b1dpZHRoOiBmYWxzZSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgd2lkdGg6IFwiMTAlXCIgfSxcclxuICAgIHsgd2lkdGg6IFwiMzUlXCIgfSxcclxuICAgIHsgd2lkdGg6IFwiMjAlXCIgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiB9LFxyXG4gIF0sXHJcbiAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIChyb3csIGRhdGEsIHN0YXJ0LCBlbmQsIGRpc3BsYXkpIHtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICBkYXRhO1xyXG4gICAgdmFyIHRvdGFsLCBwYWdlVG90YWw7XHJcbiAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICB2YXIgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgPyBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDFcclxuICAgICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBpXHJcbiAgICAgICAgOiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUb3RhbCBvdmVyIGFsbCBwYWdlc1xyXG4gICAgdG90YWwgPSBhcGlcclxuICAgICAgLmNvbHVtbig3KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBUb3RhbCBvdmVyIHRoaXMgcGFnZVxyXG4gICAgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNywgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZm9vdGVyXHJcbiAgICAkKGFwaS5jb2x1bW4oMSkuZm9vdGVyKCkpLmh0bWwoXHJcbiAgICAgIFwiVG90YWwgOiBcIiArIChNYXRoLnJvdW5kKHBhZ2VUb3RhbCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcclxuICAgICk7XHJcbiAgfSxcclxufSk7XHJcblxyXG4vL3ZhciB0YWJsZVNob3czID0gJChcIiNkYXRhdGFibGUtc2hvdzNcIikuRGF0YVRhYmxlKHsgcGFnaW5nOiBmYWxzZSB9KTtcclxuXHJcbnZhciB0YWJsZVNob3czID0gJChcIi5kYXRhdGFibGUtc2hvdzNcIikuRGF0YVRhYmxlKHtcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gIF0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgc2Nyb2xsWDogdHJ1ZSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyB3aWR0aDogXCIxMCVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSAvKiwgdmlzaWJsZTogdHJ1ZSovIH0sXHJcbiAgXSxcclxuICBwYWdpbmc6IGZhbHNlLFxyXG5cclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUyLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxuICAvL2ZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxuXHJcbnZhciB0YWJsZVNob3c0ID0gJChcIi5kYXRhdGFibGUtc2hvdzRcIikuRGF0YVRhYmxlKHsgcGFnaW5nOiBmYWxzZSB9KTtcclxuXHJcbnZhciB0YWJsZVNob3cgPSAkKFwiI2RhdGF0YWJsZS1zaG93OVwiKS5EYXRhVGFibGUoe1xyXG4gIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICBwYWdpbmc6IGZhbHNlLFxyXG4gIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIChyb3csIGRhdGEsIHN0YXJ0LCBlbmQsIGRpc3BsYXkpIHtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICBkYXRhO1xyXG4gICAgdmFyIHRvdGFsLCBwYWdlVG90YWw7XHJcbiAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICB2YXIgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgPyBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDFcclxuICAgICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBpXHJcbiAgICAgICAgOiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUb3RhbCBvdmVyIGFsbCBwYWdlc1xyXG4gICAgdG90YWwgPSBhcGlcclxuICAgICAgLmNvbHVtbig1KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBUb3RhbCBvdmVyIHRoaXMgcGFnZVxyXG4gICAgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNSwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZm9vdGVyXHJcbiAgICAkKGFwaS5jb2x1bW4oMSkuZm9vdGVyKCkpLmh0bWwoXHJcbiAgICAgIFwiVG90YWwgOiBcIiArIChNYXRoLnJvdW5kKHBhZ2VUb3RhbCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcclxuICAgICk7XHJcbiAgfSxcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5kZXRfZm9yXCIpXHJcbiAgICAuaGlkZSgpXHJcbiAgICAuYWZ0ZXIoXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgKTtcclxuICBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducygkKFwiLmFydGljbGVzXCIpLCBcIlwiKTtcclxufSk7XHJcblxyXG4oXCJ1c2Ugc3RyaWN0XCIpO1xyXG52YXIgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoID0gKGZ1bmN0aW9uICgpIHtcclxuICAkLmZuLmRhdGFUYWJsZS5BcGkucmVnaXN0ZXIoXCJjb2x1bW4oKS50aXRsZSgpXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkKHRoaXMuaGVhZGVyKCkpLnRleHQoKS50cmltKCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHQ7XHJcbiAgICAgICh0ID0gJChcIiNrdF90YWJsZV8xXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBhamF4OiB7XHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlX3RhYmxlXCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICBcInZlbnRlXCI6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgcGFnZUxlbmd0aDogMjUsXHJcbiAgICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdhcnQuaWQnLCB3aWR0aDogXCI1JVwifSxcclxuICAgICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdhcnQuY29kZSd9LFxyXG4gICAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ2FydC50aXRyZSd9LFxyXG4gICAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3RhYi5hYnJldmlhdGlvbid9LFxyXG4gICAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ24xLmRlc2lnbmF0aW9uJ30sXHJcbiAgICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnbjIuZGVzaWduYXRpb24nfSxcclxuICAgICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICduMy5kZXNpZ25hdGlvbid9LFxyXG4gICAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ240LmRlc2lnbmF0aW9uJ30sXHJcbiAgICAgIF0sXHJcbiAgICAgICdjcmVhdGVkUm93JzogZnVuY3Rpb24oIHJvdywgZGF0YSwgZGF0YUluZGV4ICkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJChyb3cpLmF0dHIoJ3RleHQnLCBkYXRhWzJdKTtcclxuICAgICAgICAgICQocm93KS5hdHRyKCdwdScsIGRhdGFbOF0pO1xyXG4gICAgICAgICAgJChyb3cpLmF0dHIoJ3R2YScsIGRhdGFbOV0pO1xyXG4gICAgICAgICAgJChyb3cpLmF0dHIoJ3VuaXRlJywgZGF0YVsxMF0pO1xyXG5cclxuICAgICAgICAgICQocm93KS5hdHRyKCdjb2RlJywgZGF0YVsxMV0pO1xyXG4gICAgICAgICAgJChyb3cpLmF0dHIoJ3JlbWlzZScsIGRhdGFbMTJdKTtcclxuICAgICAgfSxcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL2ZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gICAgICAgIGJJbmZvOiBmYWxzZSxcclxuICAgICAgfSkpLFxyXG4gICAgICAgIHQub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gICAgICAgICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgICAgICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICAgICAgICAgIC8vY29uc29sZS5sb2coc3QpO1xyXG4gICAgICAgICAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAvLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gICAgICAgICAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAgIC8vICAgIH0pO1xyXG4gICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMCwgMSwgMywyLCA0LCA1LCA2LCA3XSwgW10pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KSgpO1xyXG4kLmV4dGVuZCh0cnVlLCAkLmZuLmRhdGFUYWJsZS5kZWZhdWx0cy5vTGFuZ3VhZ2Uub1BhZ2luYXRlLCB7XHJcbiAgc05leHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIiA+PC9pPicsXHJcbiAgc1ByZXZpb3VzOiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiA+PC9pPicsXHJcbn0pO1xyXG5cclxuJChcIi5tb2RhbEFjdGl2YXRlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmJvZFwiKS5lbXB0eSgpO1xyXG4gICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVcIiksXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICBcclxuICAgICAgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoLmluaXQoKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxudmFyIGNvZGUgPSBudWxsO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNrdF90YWJsZV8xIHRib2R5IHRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAvL2FsZXJ0KCQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cihcInVuaXRlXCIpKVxyXG4gIGNvZGUgPSAkKHRoaXMpLmF0dHIoXCJjb2RlXCIpO1xyXG4gIGlmIChcclxuICAgICAgICAgIHdpbmRvdy5lbGVtZW50LmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgIFwib3B0aW9uW3ZhbHVlPSdcIiArICQodGhpcykuYXR0cihcImlkXCIpICsgXCInXVwiXHJcbiAgICAgICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICApIHtcclxuICAgICAgd2luZG93LmVsZW1lbnQudmFsKCQodGhpcykuYXR0cihcImlkXCIpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAkKFwiLnByaXh1bml0YWlyZVwiKS52YWwoJCh0aGlzKS5hdHRyKFwicHVcIikpO1xyXG5cclxuICAgICAgJChcIi50dmFcIikudmFsKCQodGhpcykuYXR0cihcInR2YVwiKSk7XHJcbiAgICAgICQoXCIucmVtaXNlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJyZW1pc2VcIikpO1xyXG4gICAgICAkKFwiLnNlbGVjdDJfdW5pdGVcIikudmFsKCQodGhpcykuYXR0cihcInVuaXRlXCIpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICBcclxuICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGUgYSBET00gT3B0aW9uIGFuZCBwcmUtc2VsZWN0IGJ5IGRlZmF1bHRcclxuICAgICAgdmFyIG5ld09wdGlvbiA9IG5ldyBPcHRpb24oXHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwidGV4dFwiKSxcclxuICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIHNlbGVjdFxyXG4gICAgICB3aW5kb3cuZWxlbWVudC5hcHBlbmQobmV3T3B0aW9uKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAkKFwiLnByaXh1bml0YWlyZVwiKS52YWwoJCh0aGlzKS5hdHRyKFwicHVcIikpO1xyXG4gICAgICAkKFwiLnR2YVwiKS52YWwoJCh0aGlzKS5hdHRyKFwidHZhXCIpKTtcclxuICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJ1bml0ZVwiKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgJChcIi5yZW1pc2VcIikudmFsKCQodGhpcykuYXR0cihcInJlbWlzZVwiKSk7XHJcbiAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlld1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldFN1YlNlbGVjdChteWNsYXNzLCBteWJvb2xlYW4sIG15Y29udGVudCkge1xyXG4gIC8vY29uc29sZS5sb2cobXljb250ZW50KVxyXG4gIGlmIChteWJvb2xlYW4pIHtcclxuICAgICQobXljbGFzcykucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAkKG15Y2xhc3MpXHJcbiAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAuZmluZChcIi5zZWxlY3QyIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3dcIilcclxuICAgICAgLmh0bWwoJzxpIGNsYXNzPVwiaS1sb2FkIGZhIGZhLXJlZnJlc2hcIj48L2k+Jyk7XHJcbiAgfVxyXG4gIGlmIChteWNvbnRlbnQpIHtcclxuICAgIHZhciBhcnJheSA9IG15Y2xhc3Muc3BsaXQoXCIsXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4gICAgICAkKGFycmF5W2ldKS5yZXBsYWNlV2l0aCgkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuJChcIi50eXBlX2NvbW1hbmRlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtdHlwZVwiKSA9PSBcIlBSSlwiIHx8ICQodGhpcykudmFsKCkgPT0gNSkge1xyXG4gICAgJChcIi5wclwiKS50b2dnbGVDbGFzcyhcIm5vbmVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoXCIucHJcIikuYWRkQ2xhc3MoXCJub25lXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiLmZvcm1cIikub24oXCJjaGFuZ2VcIiwgXCIudHlwZV9jb21tYW5kZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciB0eXBlID0gJChcIm9wdGlvbjpzZWxlY3RlZFwiLCB0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyh0eXBlKTtcclxuXHJcbiAgJChcIi5ibG9jX2Nob2l4XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cclxuICBpZiAodHlwZSA9PSBcIkNNRFwiKSB7XHJcbiAgICAkKFwiLmJsb2NfcmVmZXJlbmNlX2RldmlzX2NsaWVudFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09IFwiTVJcIikge1xyXG4gICAgJChcIi5ibG9jX21hcmNoZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHR5cGUgPT0gXCJQUkpcIikge1xyXG4gICAgJChcIi5ibG9jX3Byb2pldFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCIubmV3ICwgLmVkaXRcIikub24oXCJjaGFuZ2VcIiwgXCIubWFyY2hlc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciAkZm9ybSA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgZ2V0U3ViU2VsZWN0KFwiLnNvdXNtYXJjaGVcIiwgZmFsc2UsIFwiXCIpO1xyXG4gIC8vIFNpbXVsYXRlIGZvcm0gZGF0YSwgYnV0IG9ubHkgaW5jbHVkZSB0aGUgc2VsZWN0ZWQgc3BvcnQgdmFsdWUuXHJcbiAgdmFyIGRhdGEgPSB7fTtcclxuICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgLy8gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vYWxlcnQoJGZvcm0uYXR0cignYWN0aW9uJykpO1xyXG4gIC8vICBjb25zb2xlLmxvZygkZm9ybS5hdHRyKCdtZXRob2QnKSk7XHJcbiAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiAkZm9ybS5hdHRyKFwiYWN0aW9uXCIpLFxyXG4gICAgdHlwZTogJGZvcm0uYXR0cihcIm1ldGhvZFwiKSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICBnZXRTdWJTZWxlY3QoXCIuc291c21hcmNoZVwiLCB0cnVlLCBodG1sKTtcclxuICAgICAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgLy8kKCcuc291c21hcmNoZScpLnBhcmVudCgpLmZpbmQoJy5zZWxlY3QyIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cgYicpLm5vdCgnOmZpcnN0JykuaGlkZSgpO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIubmV3ICwgLmVkaXRcIikub24oXCJjaGFuZ2VcIiwgXCIucHJvamV0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICBnZXRTdWJTZWxlY3QoXCIuc291c3Byb2pldFwiLCBmYWxzZSwgXCJcIik7XHJcbiAgLy8gU2ltdWxhdGUgZm9ybSBkYXRhLCBidXQgb25seSBpbmNsdWRlIHRoZSBzZWxlY3RlZCBzcG9ydCB2YWx1ZS5cclxuICB2YXIgZGF0YSA9IHt9O1xyXG4gIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAvLyAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy9hbGVydCgkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcbiAgLy8gIGNvbnNvbGUubG9nKCRmb3JtLmF0dHIoJ21ldGhvZCcpKTtcclxuICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6ICRmb3JtLmF0dHIoXCJhY3Rpb25cIiksXHJcbiAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgIGdldFN1YlNlbGVjdChcIi5zb3VzcHJvamV0XCIsIHRydWUsIGh0bWwpO1xyXG4gICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAvLyQoJy5zb3VzbWFyY2hlJykucGFyZW50KCkuZmluZCgnLnNlbGVjdDIgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiJykubm90KCc6Zmlyc3QnKS5oaWRlKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5fbXVsdGlwbGVfYWN0aW9ucycsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuXHJcbiAgJC5lYWNoKCQoXCJpbnB1dFtuYW1lPV9hY3Rpb25dOmNoZWNrZWRcIiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgaWYgKCQodGhpcykudmFsKCkgPT0gJ19mdXNpb25uZW1lbnQnICYmIF9hcnJheV9pZHMgIT0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgLy9hbGVydChfYXJyYXlfaWRzKTtcclxuXHJcbiAgICAgXHJcblxyXG4gICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZnVzaW9ubmVyIGNlcyBlbnJlZ2lzdHJlbWVudHMgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkgIVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXZfZGV2aXNfZ2VuZXJlcl9mdXNpb25uZW1lbnQnKSxcclxuICAgICAgICAgICAgZGF0YTogeyBfYXJyYXlfaWRzIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gJChcIi5hY3Rpb24gLC5zY29sdW1uXzBcIikucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuaWYgKCQodGhpcykudmFsKCkgPT1cIl9kZXNhY3RpdmVyXCIgJiYgX2FycmF5X2lkcyAhPSBudWxsKSB7XHJcbiAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAuZmlyZSh7XHJcbiAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICB9LFxyXG4gICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBkZXNhY3RpdmVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYXJjaGl2ZSc+PC9pPiBPdWksIERlc2FjdGl2ZXIhXCIsXHJcbiAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgIH0pXHJcbiAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1dl9kZXZpc19kZXNhY3RpdmVyJyksXHJcbiAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9LFxyXG4gICAgIH0pO1xyXG4gICAgICAgJChcIi5fbXVsdGlwbGVfYWN0aW9uc1wiKS52YWwoXCJcIik7XHJcbiAgICAgfVxyXG4gICB9KTtcclxuICAgXHJcblxyXG59XHJcblxyXG5pZiAoJCh0aGlzKS52YWwoKSA9PVwiX2R1cHBsaXF1ZXJcIiAmJiBfYXJyYXlfaWRzICE9IG51bGwpIHtcclxuICAvLyBhbGVydCgpO1xyXG4gICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgLmZpcmUoe1xyXG4gICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgfSxcclxuICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgRHVwcGxpcXVlciBjZSBkZXZpcyA/XCIsXHJcbiAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNvcHknPjwvaT4gT3VpLCBEdXBwbGlxdWVyIVwiLFxyXG4gICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICB9KVxyXG4gICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgJC5hamF4KHtcclxuICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXZfZGV2aXNfbXVsdGlwbGVfZHVwcGxpcXVlcicpLFxyXG4gICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgfSBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuXHJcbiAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgfWVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfSxcclxuICAgICB9KTtcclxuICAgICAgICQoXCIuX211bHRpcGxlX2FjdGlvbnNcIikudmFsKFwiXCIpO1xyXG4gICAgIH1cclxuICAgfSk7XHJcbiAgIFxyXG5cclxufVxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuJChcIiNfZGVzYWN0aXZlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cclxuIFxyXG5cclxuICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcblxyXG5cclxuXHJcblxyXG5pZihfYXJyYXlfaWRzKXtcclxuXHJcblxyXG4gIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gIC5maXJlKHtcclxuICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZGVzYWN0aXZlciBjZSBkZXZpcyAgP1wiLFxyXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYmFuJz48L2k+IE91aSwgRGVzYWN0aXZlciFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgfSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNfZGVzYWN0aXZlclwiKSxcclxuICAgICAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZU91dDogNDAwMH1cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuICAgICBcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuX2Rlc2FjdGl2ZXJfZGV2aXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcblxyXG4gIC8vYWxlcnQoKTtcclxuXHJcbiAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG5cclxuICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZGVzYWN0aXZlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1iYW4nPjwvaT4gT3VpLCBEZXNhY3RpdmVyIVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc19kZXNhY3RpdmVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLl9hbm51bGVyX2RldmlzXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cclxuICAvL2FsZXJ0KCk7XHJcblxyXG4gIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuXHJcbiAgaWYgKF9hcnJheV9pZHMpIHtcclxuXHJcblxyXG4gICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGRlc2FjdGl2ZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYmFuJz48L2k+IE91aSwgQW5udWxlciFcIixcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8hXCIsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNfYW5udWxlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZU91dDogNDAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4kKFwiI19kZWxldGVcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiBcclxuXHJcbiAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG5cclxuaWYoX2FycmF5X2lkcyl7XHJcblxyXG5cclxuICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAuZmlyZSh7XHJcbiAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgfSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2NhYl9kZWxldGVcIiksXHJcbiAgICAgICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vICQoJyNncmlkJykuRGF0YVRhYmxlKCkuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHVybD1Sb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNjYWJfaW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVPdXQ6IDQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgfVxyXG4gIH0pO1xyXG5cclxufVxyXG5cclxuICAgICBcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLl9kZWxldGVfZGV2aXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcblxyXG4gIC8vYWxlcnQoKTtcclxuXHJcbiAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG5cclxuICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzY2FiX2RlbGV0ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2dyaWQnKS5EYXRhVGFibGUoKS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZU91dDogNDAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5fZHVwcGxpcXVlcl9kZXZpc1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHJcbiBcclxuXHJcbiAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gLy8gYWxlcnQoX2FycmF5X2lkcyk7XHJcbiAgaWYgKF9hcnJheV9pZHMpIHtcclxuXHJcblxyXG4gICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IER1cHBsaXF1ZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY29weSc+PC9pPiBPdWksIER1cHBsaXF1ZXIhXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzX211bHRpcGxlX2R1cHBsaXF1ZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZU91dDogNDAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbiQoXCIjX2R1cHBsaXF1ZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcblxyXG4gXHJcblxyXG4gIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuIC8vYWxlcnQoX2FycmF5X2lkcyk7XHJcbmlmKF9hcnJheV9pZHMpe1xyXG5cclxuXHJcbiAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgLmZpcmUoe1xyXG4gICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBEdXBwbGlxdWVyIGNlIGRldmlzID9cIixcclxuICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNvcHknPjwvaT4gT3VpLCBEdXBwbGlxdWVyIVwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICB9KVxyXG4gIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc19tdWx0aXBsZV9kdXBwbGlxdWVyXCIpLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgIH1cclxuICB9KTtcclxuXHJcbn1cclxuXHJcbiAgICAgXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuJChcIi5ham91dFwiKS5jbGljayhmdW5jdGlvbiAoZSkgIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc19maWNoaWVyc1wiLCB7XHJcbiAgICAgIGlkOiAkKHRoaXMpLmNsb3Nlc3QoXCJhXCIpLmF0dHIoXCJpZFwiKSxcclxuICAgIH0pLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAkKFwiLmJvZDFcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgdmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfZG9zc2llcnNcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggRG9zc3NpZXJcIixcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgJChcInNlbGVjdC5zZWxlY3QyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHIxXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJvZDFcIikuZmFkZUluKCk7XHJcbiAgICAgIH0sIDYwMCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl91cGxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgIGFsZXJ0KCk7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcblxyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc19maWNoaWVyc1wiLCB7aWQ6IGlkfSksXHJcbiAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zY29sdW1uXzBcIiwgZnVuY3Rpb24gKCkge1xyXG4gICQoXCIuYWN0aW9uICwuc2NvbHVtbl8wXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gIC8vICAgICQoJy5fbXVsdGlwbGVfYWN0aW9ucycpLnRvZ2dsZSgkKCcuYWN0aW9uJykuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzNcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQWN0aW9uXCIsXHJcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcclxufSk7XHJcblxyXG4kKCcuZWRpdCcpLm9uKCdjbGljaycsJy5kZXRhaWxfZm9ybV9kZWxldGUnLGZ1bmN0aW9uKGUpe1xyXG5cclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xyXG5cclxuICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9kZXZpc2RldF9kZWxldGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmVkaXQtZGV0YWlsW2lkPVwiJyskKHRoaXMpLmF0dHIoJ2lkJykrJ1wiXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vZm9ybURhdGFEZXRhaWxFZGl0UmVtb3ZlLnB1c2goe2lkOiAkKHRoaXMpLmF0dHIoJ2lkJyksdG9rZW46JCh0aGlzKS5hdHRyKCd2YWx1ZScpfSk7XHJcbiAgXHJcbiAgLy9jb25zb2xlLmxvZyhmb3JtRGF0YURldGFpbEVkaXRSZW1vdmUpO1xyXG59KVxyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnLnBkZl9ieV9jb2RlJyxmdW5jdGlvbihlKXtcclxuICB3aW5kb3cub3BlbihSb3V0aW5nLmdlbmVyYXRlKFwidXZfZGV2aXNfZG9jdW1lbnRfb2xkX3N5c1wiLCB7XHJcbiAgICAgIGlkOiAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKVxyXG4gIH0pLCAnX2JsYW5rJyk7XHJcbn0pXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmltcHJpbWVfZG9jdW1lbnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmKCQodGhpcykuYXR0cihcImRhdGEtdmFsaWRlXCIpID09IDApICB7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKCdpbXBvc3NpYmxlIGRcXCdpbXByaW1lciBsZSBkb2N1bWVudCwgbWFucXVlIGRlIHNpZ25hdHVyZSEnLCAnRXJyZXVyJywge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICByZXR1cm5cclxuICB9XHJcbiAgd2luZG93Lm9wZW4oJCh0aGlzKS5hdHRyKCdocmVmJyksICdfYmxhbmsnKTtcclxufSk7XHJcblxyXG5cclxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyICRwYXJzZUZsb2F0ID0gZ2xvYmFsLnBhcnNlRmxvYXQ7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBJVEVSQVRPUiA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRk9SQ0VEID0gMSAvICRwYXJzZUZsb2F0KHdoaXRlc3BhY2VzICsgJy0wJykgIT09IC1JbmZpbml0eVxuICAvLyBNUyBFZGdlIDE4LSBicm9rZW4gd2l0aCBib3hlZCBzeW1ib2xzXG4gIHx8IChJVEVSQVRPUiAmJiAhZmFpbHMoZnVuY3Rpb24gKCkgeyAkcGFyc2VGbG9hdChPYmplY3QoSVRFUkFUT1IpKTsgfSkpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbSh0b1N0cmluZyhzdHJpbmcpKTtcbiAgdmFyIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHRyaW1tZWRTdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIGNoYXJBdCh0cmltbWVkU3RyaW5nLCAwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRzb21lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLnNvbWU7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnc29tZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIVNUUklDVF9NRVRIT0QgfSwge1xuICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRzb21lKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQnKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0IH0sIHtcbiAgcGFyc2VGbG9hdDogJHBhcnNlRmxvYXRcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==