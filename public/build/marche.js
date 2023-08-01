(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marche"],{

/***/ "./assets/js/components/module_marche/marche.js":
/*!******************************************************!*\
  !*** ./assets/js/components/module_marche/marche.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");






var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.setRoutingData(routes);







// alert('zak');

var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("marche_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  // scrollX: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "1%",
    className: 'id',
    name: 'id'
  }, {
    orderable: true,
    width: "10%",
    className: 'code',
    name: 'code'
  }, {
    orderable: true,
    width: "10%",
    className: 'reference',
    name: 'reference'
  }, {
    orderable: true,
    width: "20%",
    className: 'designation',
    name: 'designation'
  }, {
    orderable: true,
    width: "20%",
    className: 'description',
    name: 'description'
  }, {
    orderable: true,
    width: "10%",
    className: 'date_debut',
    name: 'date_debut'
  }, {
    orderable: true,
    width: "10%",
    className: 'date_fin',
    name: 'date_fin'
  }, {
    orderable: false,
    width: "10%",
    className: 'montant',
    name: 'montant'
  }, {
    orderable: false,
    width: "9%",
    className: 'montant',
    name: 'test'
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("datatables_langue"),
    processing: true,
    searchPlaceholder: "RECHERCHER",
    search: ""
  }
  // fixedHeader: true,
});

table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_10__["CustomSearchText"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_10__["CustomSearchCheckbox"](api, [0], []);
});

// var lineNo = 1;
//   var cl = "";
//   $(".det_for")
//       .hide()
//       .after(
//           '<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>'
//       );

// alert('ziko');

$(".sle2").select2({
  placeholder: "Action",
  allowClear: true
});
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("t_achatdemandeinternecab_find_article_term", {
        selected: att,
        entity: window.element.attr("data-entity"),
        column: window.element.attr("data-column")
      })
    }).then(function (data) {
      // console.log(data)
      window.element.prepend('<option selected=""></option>').select2({
        //allowClear: true,
        language: "fr",
        data: data.results,
        minimumResultsForSearch: -1,
        dropdownCssClass: window.att,
        width: '100%'
      }).val(att).trigger("change");
      $(".load-er").fadeOut(70).remove();
      $(".det_for").fadeIn(70);
    });
  } else {
    // toastr.warning('impossible de charger l\'entiter', 'Erreur', {timeOut: 4000})
  }

  //apply to select2
  window.element.on("select2:open", function (e) {
    // console.log($(this))

    window.element = $(this);
    $(".tt").val(window.search);

    //alert()
    $(".ttp").remove();
    $(".select2-search--hide").after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
    $(".tt").typeWatch({
      highlight: false,
      wait: 100,
      captureLength: 2,
      callback: function callback(valuennn, e) {
        //console.log(e)
        $(".select2-results__option").hide();
        $(".select2-results").prepend('<p class="select2-results__option">Rechercher…</p>');
        window.search = valuennn;
        if (window.element.attr("data-entity")) {
          $.ajax({
            dataType: "json",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("t_achatdemandeinternecab_find_article_term", {
              term: valuennn,
              selected: att,
              entity: window.element.attr("data-entity"),
              column: window.element.attr("data-column")
            }),
            success: function success(result, textStatus, errorThrown) {
              if (valuennn == $(".tt").val()) {
                window.element.empty().prepend('<option selected=""></option>').select2({
                  language: "fr",
                  allowClear: true,
                  minimumResultsForSearch: -1,
                  data: result.results
                }).val(att).trigger("change");
                window.element.select2("open");
                //alert(this.value)
                //alert(valuennn)

                $(".tt").val(window.search);
                // $(".tt").focus();
                document.querySelector('.tt').focus();
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

  // window.element.on("select2:close", function(e) {
  //     $(".tt").val(window.search);
  //     $("#t_achatdemandeinternedet_quantite").focus();

  // });
  // window.element.on("select2:select", function(e) {
  //     // alert()
  //     var data = e.params.data;
  //     // console.log(data);
  //     $(".prixunitaire").val(data.prixAchat);

  //     $(".tva").val(data.tva);
  //     $(".remise").val(data.remise);
  //     $(".select2_unite").val(data.unite).trigger("change");
  // });

  // $("body").on("click", ".select2-container", function() {
  //     //$('.select2-search--hide').after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
  //     $(".tt").trigger("focus");
  // });
}

// function getSubSelect(myclass, myboolean, mycontent) {
//     //console.log(mycontent)
//     if (myboolean) {
//         $(myclass).prop("disabled", false);
//     } else {
//         $(myclass).prop("disabled", true);
//         $(myclass)
//             .parent()
//             .find(".select2 .select2-selection__arrow")
//             .html('<i class="i-load fa fa-refresh"></i>');
//     }
//     if (mycontent) {
//         var array = myclass.split(",");
//         for (var i = 0, l = array.length; i < l; i++) {
//             //console.log($(mycontent).find(array[i]));
//             $(array[i]).replaceWith($(mycontent).find(array[i]));
//         }
//     }
// }

$(document).ready(function () {
  $(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
  create_custom_dropdowns($(".articles"), "");
});

// alert('test');

// alert('ziko');

// -----------

var allArticles = [];
var AricleSelected = "";
var action = "ajouter";
function remplirTable() {
  var tr = "";
  allArticles.some(function (element, index, _arr) {
    // console.log(element,'najim');
    // var Prix_Qte = parseFloat(element.prixUntaire) * parseFloat(element.qte);
    // var Prix_Tva = Prix_Qte * parseFloat(element.tva) / 100; // Calculate TVA amount
    // var Prix_Remise = parseFloat(element.prixUntaire) * parseFloat(element.remise);

    // var Montant = Prix_Qte + Prix_Tva - Prix_Remise;

    // console.log(element.article, element);
    tr = tr + '<tr class="" style=" padding: 8px 10px;"   id="tr_actions_' + index + '">' + '<td class="article " style="width:3%; padding: 5px 0px;"> </td>' + '<td class="article " style="width:34%; padding: 5px 0px;">' + element.titre_article + '</td>' + '<td class="qte" style="width:12%; padding: 5px 0px; ">' + element.qte + '</td>' + '<td class="prixUntaire" style="width:11.8%; padding: 5px 0px;">' + element.prixUntaire + '</td>' + '<td class="tva" style="width:11.8%; padding: 5px 0px;">' + element.tva + '</td>' + '<td class="observation " style="width:20%; padding: 5px 0px;">' + element.observation + '</td>' + '<td class="observation " style="width:3%; padding: 5px 0px;"> ' + '<a class="btn btn-white btn-xs upper  ua_edit"   id="' + index + '"><i class="fa fa-edit text-primary "></i></a> ' + '<a class="btn btn-white btn-xs upper  ua_suppimer_ligne" id="' + index + '"><i class="fa fa-trash text-danger "></i></a> </td>' + '</tr>';

    // console.log(element);
    // console.log(iban);
  });

  $(".waves-ripple").remove();
  var formTr = $('tbody > #marche_form').html();
  $('#marche_table > tbody').html(tr);
  $('#marche_table > tbody').append('<tr id="marche_form">' + formTr + '</tr>');
  create_custom_dropdowns($(".articles"), "");
  //  $.ajax({
  //     url: Routing.generate("t_marche_edit"),
  //     method: "get",
  //      dataType: 'json',
  //     contentType: false,
  //     cache: false,
  //     processData: false,
  //     success: function(result) {
  //        console.log(result);
  //        $('#marche_table > tbody').append('<tr id="marche_form">' + result + '</tr>');

  //     }

  // });
}

$("body").on("click", ".marche_btn_plus > .add_form_ua", function (e) {
  // console.log( $("#p_marche_det_article").val() + 'ziko');
  verifierForm();
  if (verifierForm() != "") {
    return false;
  }
  if (action == "ajouter") {
    var Article = {};
    Article['article'] = $('#p_marche_det_article').val();
    Article['qte'] = $('#p_marche_det_qt').val();
    Article['prixUntaire'] = $('#p_marche_det_prixUnitaire').val();
    Article['tva'] = $('#p_marche_det_tva').val();
    Article['observation'] = $('#p_marche_det_observation').val();
    Article['titre_article'] = $('#p_marche_det_article').select2('data')[0].text;
    allArticles.push(Article);
  } else {
    allArticles[action].article = $('#p_marche_det_article').val();
    allArticles[action].qte = $('#p_marche_det_qt').val();
    allArticles[action].prixUntaire = $('#p_marche_det_prixUnitaire').val();
    allArticles[action].tva = $('#p_marche_det_tva').val();
    allArticles[action].observation = $('#p_marche_det_observation').val();
    allArticles[action].titre_article = $('#p_marche_det_article').select2('data')[0].text;
    action = "ajouter";
  }
  remplirTable();
  // console.log(allArticles);
  // $('.ua_confirmer_annuler').fadeIn();
  // $('.fermer_ua_technique_det').fadeOut();
});

// $("body").on('click', '.ua_supprimer_article', function() {
//     for (var i = 0; i < allArticles.length; i++) {
//         if (allArticles[i].AricleSelected === AricleSelected) {
//             allArticles.splice(i, 1);
//             i--;
//         }
//     }
//     remplirTable();
//     $('.ua_confirmer_annuler').fadeOut();
//     $('.fermer_ua_technique_det').fadeIn();

// });

// $("body").on('click', '.ua_confirmer', function() {
//     // $('.ua_success').fadeIn();
//     // setTimeout(function () {
//     //     $('.ua_success').fadeOut();
//     // }, 3000); 
//     toastr.success('vous avez bien confirmé', 'Confirmation', {
//         timeOut: 4000,
//     });
//     $("#ModalDocume").modal("hide");
//     $('.fermer_ua_technique_det').fadeOut();

// });

$("body").on('click', '.ua_edit', function () {
  // verifierForm();
  // if (verifierForm() != "") {
  //     return false;
  // }

  action = $(this).attr('id');
  remplirTable();
  var idLine = $(this).attr('id');
  var Article = allArticles[idLine];
  $('#p_marche_det_article').val(Article.titre_article);
  $('#p_marche_det_qt').val(Article.qte);
  $('#p_marche_det_prixUnitaire').val(Article.prixUntaire);
  $('#p_marche_det_tva').val(Article.tva);
  $('#p_marche_det_observation').val(Article.observation);
  var formTr = $('tbody > #marche_form').get();
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
  if ($("#p_marche_det_article").val() == "") {
    message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs Article" + "<br>";
    $('.ua_alert_danger').html(message);
  }
  $("#marche_form input").each(function () {
    var element = $(this);
    if (element.val() == "") {
      message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs " + $(this).attr('class').split(' ').pop() + "<br>";
      $('.ua_alert_danger').html(message);
    }
  });
  if (message == "") {
    $("#marche_form input").each(function () {
      var element = $(this);
      if (element.attr('id') != 'p_marche_det_article' && element.attr('id') != 'p_marche_det_observation') {
        var val = element.val();
        var floatValues = /[+-]?([0-9]*[.])?[0-9]+/;
        // console.log(val.match(floatValues));
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

// alert('ziko');

$("#create_marche").click(function (e) {
  var button = $(this);
  button.prop("disabled", true);
  var form_name = $(".form").attr("name");

  // console.log(formDataDetail);
  // console.log('zak');
  // return false;
  //var params = $('.form').serializeArray();
  // var dta = new FormData($("#t_achatdemandeinternecab")[0]);

  var formData = new FormData();

  // var params = $('.form').serializeArray();

  // $.each(params, function(i, val) {
  //     formData.append(val.name, val.value);
  //     //  console.log(val.name);

  // });

  var message = '';
  $("#p_marche_form input").each(function () {
    var element = $(this);
    if (element.val() == "") {
      message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs " + $(this).attr('class').split(' ').pop() + "<br>";
      // $('.p_marche_alert_danger').html(message);
    }
  });

  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.querySelector(".my-button"));
  l.start();
  if (message != '') {
    toastr.warning('warning', message, {
      timeOut: 4000
    });
    l.stop();
    return false;
  }

  // console.log(message);

  var Marche = {};
  Marche['reference'] = $('#p_marche_reference').val();
  Marche['designation'] = $('#p_marche_designation').val();
  Marche['description'] = $('#p_marche_description').val();
  Marche['dateDebut'] = $('#p_marche_dateDebut').val();
  Marche['dateFin'] = $('#p_marche_dateFin').val();
  Marche['montant'] = $('#p_marche_montant').val();
  var articles = JSON.stringify(allArticles);
  var data = JSON.stringify(Marche);
  formData.append('marche', data);
  formData.append('allArticles', articles);
  $.ajax({
    type: "POST",
    url: '/Marche/insert',
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result = "enregistrer") {
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("marche_index");
        window.location.href = url;
      }

      // l.stop();
      // $(".errors-list").remove();
      // if (result.customErrors) {
      //     $.each(result.customErrors, function(i, value) {
      //         $(".form #" + i).after(
      //             "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
      //             value +
      //             "</span></span></span>"
      //         );
      //     });

      //     // $('#'+)
      // } else if (result.errors) {
      //     //dump(result.errors);
      //     ShowFormErrors(selector, form_name, result.errors);
      //     button.prop("disabled", false)
      // } else if (result.empty) {
      //     toastr.warning(result.message.text, result.message.title, {
      //         timeOut: 4000,
      //     });
      //     button.prop("disabled", false)

      // } else if (result.dossierEmpty) {
      //     toastr.warning(result.message.text, result.message.title, {
      //         timeOut: 4000,
      //     });
      //     button.prop("disabled", false)

      // } else if (result.data) {
      //     // alert(result.data.id);
      //     toastr.success(result.message.text, result.message.title, {
      //         timeOut: 4000,
      //     });
      //     var url = Routing.generate("t_achatdemandeinternecab_show", {
      //         id: result.data.id,
      //     });
      //     window.location.href = url;
      // }
    },

    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      button.prop("disabled", false);
    }
  });
  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/functions/delete.js":
/*!***************************************!*\
  !*** ./assets/js/functions/delete.js ***!
  \***************************************/
/*! exports provided: deleteCab, deleteDemande */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCab", function() { return deleteCab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDemande", function() { return deleteDemande; });
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function deleteCab(obj) {
  // var id = $(this).attr('data-id');
  //  var token = $(this).attr('data-token');
  //console.log(id + ' ' + token);

  swalWithBootstrapButtons.fire({
    showClass: {
      popup: 'animatedSwal flipInX faster'
    },
    position: 'top',
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
        type: 'DELETE',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['route'], {
          'id': obj['id'],
          'token': obj['token']
        }),
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            if (obj['redirection'] == null) {
              window.location.reload();
            } else {
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['redirection']);
              window.location.href = url;
            }
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
function deleteDemande(obj) {
  // var id = $(this).attr('data-id');
  //  var token = $(this).attr('data-token');
  //console.log(id + ' ' + token);

  swalWithBootstrapButtons.fire({
    showClass: {
      popup: 'animatedSwal flipInX faster'
    },
    position: 'top',
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
        type: 'DELETE',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['route'], {
          'id': obj['id'],
          'token': obj['token']
        }),
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            if (obj['redirection'] == null) {
              window.location.reload();
            } else {
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['redirection']);
              window.location.href = url;
            }
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/module_marche/marche.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~marche",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfbWFyY2hlL21hcmNoZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2RlbGV0ZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwidGFibGUiLCIkIiwiRGF0YVRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwidHlwZSIsImRlZmVyUmVuZGVyIiwic2VydmVyU2lkZSIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwid2lkdGgiLCJjbGFzc05hbWUiLCJuYW1lIiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJzZWFyY2giLCJvbiIsImUiLCJzZXR0aW5ncyIsImFwaSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJzdGF0ZSIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJzZWxlY3QyIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwiY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMiLCJlbGVtZW50IiwiYXR0IiwiYW1kIiwiZGVmaW5lIiwiZXJyb3JMb2FkaW5nIiwiaW5wdXRUb29Mb25nIiwiYXJncyIsIm92ZXJDaGFycyIsImlucHV0IiwibGVuZ3RoIiwibWF4aW11bSIsIm1lc3NhZ2UiLCJpbnB1dFRvb1Nob3J0IiwicmVtYWluaW5nQ2hhcnMiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJ3aW5kb3ciLCJhdHRyIiwic2VsZWN0ZWQiLCJlbnRpdHkiLCJjb2x1bW4iLCJ0aGVuIiwicHJlcGVuZCIsInJlc3VsdHMiLCJtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsImRyb3Bkb3duQ3NzQ2xhc3MiLCJ2YWwiLCJ0cmlnZ2VyIiwiZmFkZU91dCIsInJlbW92ZSIsImZhZGVJbiIsImFmdGVyIiwidHlwZVdhdGNoIiwiaGlnaGxpZ2h0Iiwid2FpdCIsImNhcHR1cmVMZW5ndGgiLCJjYWxsYmFjayIsInZhbHVlbm5uIiwiaGlkZSIsImRhdGFUeXBlIiwidGVybSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJlbXB0eSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJyZWFkeSIsImFsbEFydGljbGVzIiwiQXJpY2xlU2VsZWN0ZWQiLCJhY3Rpb24iLCJyZW1wbGlyVGFibGUiLCJ0ciIsInNvbWUiLCJpbmRleCIsIl9hcnIiLCJ0aXRyZV9hcnRpY2xlIiwicXRlIiwicHJpeFVudGFpcmUiLCJ0dmEiLCJvYnNlcnZhdGlvbiIsImZvcm1UciIsImh0bWwiLCJhcHBlbmQiLCJ2ZXJpZmllckZvcm0iLCJBcnRpY2xlIiwidGV4dCIsInB1c2giLCJhcnRpY2xlIiwiaWRMaW5lIiwiZ2V0IiwiYmVmb3JlIiwic3BsaWNlIiwiZWFjaCIsInNwbGl0IiwicG9wIiwiZmxvYXRWYWx1ZXMiLCJtYXRjaCIsImlzTmFOIiwiY2xpY2siLCJidXR0b24iLCJwcm9wIiwiZm9ybV9uYW1lIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwibCIsIkxhZGRhIiwic3RhcnQiLCJzdG9wIiwiTWFyY2hlIiwiYXJ0aWNsZXMiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwianFYSFIiLCJwcmV2ZW50RGVmYXVsdCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiZGVsZXRlQ2FiIiwib2JqIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ2YWx1ZSIsImNvZGUiLCJyZWxvYWQiLCJyZXNwb25zZUpTT04iLCJkZWxldGVEZW1hbmRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDN0dDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBQ21DO0FBQ1g7QUFDdkI7QUFDMEQ7QUFDakI7QUFDTDs7QUFHbkU7O0FBR0EsSUFBSUksS0FBSyxHQUFHQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNDLFNBQVMsQ0FBQztFQUM3QkMsSUFBSSxFQUFFO0lBQ0ZDLEdBQUcsRUFBRU4sa0hBQU8sQ0FBQ08sUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUFFO0lBQ3RDQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0RDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQjtFQUNBQyxVQUFVLEVBQUUsQ0FDUixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDN0I7RUFDREMsVUFBVSxFQUFFLEVBQUU7RUFDZEMsS0FBSyxFQUFFLENBQ0gsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQ2Q7RUFDREMsT0FBTyxFQUFFLENBQ0w7SUFBRUMsU0FBUyxFQUFFLEtBQUs7SUFBRUMsS0FBSyxFQUFFLElBQUk7SUFBRUMsU0FBUyxFQUFFLElBQUk7SUFBRUMsSUFBSSxF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QUFNLENBQUNsQyxPQUFPLENBQUMrRCxJQUFJLEVBQUU3QixNQUFNLENBQUNsQyxPQUFPLENBQUMrRyxLQUFLLEVBQUU7Y0FBQ3BFLE9BQU8sRUFBRTtZQUFJLENBQUMsQ0FBQztVQUM5RTtRQUNKLENBQUM7UUFDRG9ELEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUU3RCxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUM3Q0ssTUFBTSxDQUFDQyxPQUFPLENBQUNzRCxLQUFLLENBQUN1QixZQUFZLENBQUN2SCxPQUFPLENBQUMrRCxJQUFJLEVBQUVpQyxLQUFLLENBQUN1QixZQUFZLENBQUN2SCxPQUFPLENBQUMrRyxLQUFLLEVBQUU7WUFBQ3BFLE9BQU8sRUFBRTtVQUFJLENBQUMsQ0FBQztRQUN0RztNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQyIsImZpbGUiOiJtYXJjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tIFwibGFkZGFcIjtcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBsaXN0QWN0aW9ucyBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcblxyXG4vLyBhbGVydCgnemFrJyk7XHJcblxyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwibWFyY2hlX2xpc3RcIiksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgLy8gc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgIG9yZGVyOiBbXHJcbiAgICAgICAgWzAsIFwiZGVzY1wiXVxyXG4gICAgXSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjElXCIsIGNsYXNzTmFtZTogJ2lkJywgbmFtZTogJ2lkJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxMCVcIiwgY2xhc3NOYW1lOiAnY29kZScsIG5hbWU6ICdjb2RlJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxMCVcIiwgY2xhc3NOYW1lOiAncmVmZXJlbmNlJywgbmFtZTogJ3JlZmVyZW5jZScgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMjAlXCIsIGNsYXNzTmFtZTogJ2Rlc2lnbmF0aW9uJywgbmFtZTogJ2Rlc2lnbmF0aW9uJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIyMCVcIiwgY2xhc3NOYW1lOiAnZGVzY3JpcHRpb24nLCBuYW1lOiAnZGVzY3JpcHRpb24nIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiLCBjbGFzc05hbWU6ICdkYXRlX2RlYnV0JywgbmFtZTogJ2RhdGVfZGVidXQnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiLCBjbGFzc05hbWU6ICdkYXRlX2ZpbicsIG5hbWU6ICdkYXRlX2ZpbicgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjEwJVwiLCBjbGFzc05hbWU6J21vbnRhbnQnLCBuYW1lOiAnbW9udGFudCcgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjklXCIsIGNsYXNzTmFtZTonbW9udGFudCcsIG5hbWU6ICd0ZXN0JyB9XHJcbiAgICBdLFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBcIlJFQ0hFUkNIRVJcIixcclxuICAgICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICB9XHJcbiAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG5cclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbihlLCBzZXR0aW5ncykge1xyXG4gICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuXHJcbiAgLy8gdmFyIGxpbmVObyA9IDE7XHJcbiAgLy8gICB2YXIgY2wgPSBcIlwiO1xyXG4gIC8vICAgJChcIi5kZXRfZm9yXCIpXHJcbiAgLy8gICAgICAgLmhpZGUoKVxyXG4gIC8vICAgICAgIC5hZnRlcihcclxuICAvLyAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2FkLWVyXCI+PGRpdiBjbGFzcz1cImxkcy1lbGxpcHNpc1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj48L2Rpdj4nXHJcbiAgLy8gICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gYWxlcnQoJ3ppa28nKTtcclxuXHJcblxyXG4kKFwiLnNsZTJcIikuc2VsZWN0Mih7IHBsYWNlaG9sZGVyOiBcIkFjdGlvblwiLCBhbGxvd0NsZWFyOiB0cnVlLCB9KTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducyhlbGVtZW50LCBhdHQpIHtcclxuXHJcbiAgICAkLmZuLnNlbGVjdDIuYW1kLmRlZmluZShcInNlbGVjdDIvaTE4bi9mclwiLCBbXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gUnVzc2lhblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVycm9yTG9hZGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlucHV0VG9vTG9uZzogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJDaGFycyA9IGFyZ3MuaW5wdXQubGVuZ3RoIC0gYXJncy5tYXhpbXVtO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDRg9C00LDQu9C40YLQtSBcIiArIG92ZXJDaGFycyArIFwiINGB0LjQvNCy0L7Qu1wiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJDaGFycyA+PSAyICYmIG92ZXJDaGFycyA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSBcItCwXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJDaGFycyA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSBcItC+0LJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnB1dFRvb1Nob3J0OiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtYWluaW5nQ2hhcnMgPSBhcmdzLm1pbmltdW0gLSBhcmdzLmlucHV0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJUYXBleiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ2hhcnMgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIGNhcmFjdMOocmUgb3UgcGx1cyBwb3VyIGZhaXJlIGRlcyByZWNoZXJjaGVzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWF4aW11bVNlbGVjdGVkOiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwi0JLRiyDQvNC+0LbQtdGC0LUg0LLRi9Cx0YDQsNGC0YwgXCIgKyBhcmdzLm1heGltdW0gKyBcIiDRjdC70LXQvNC10L3RglwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLm1heGltdW0gPj0gMiAmJiBhcmdzLm1heGltdW0gPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQsFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLm1heGltdW0gPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQvtCyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vUmVzdWx0czogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhdWN1biByZXN1bHRhdCB0cm91dmVcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VhcmNoaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlY2hlcmNoZXLigKZcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgd2luZG93LmF0dCA9IFwiY3VycmVudF9zZWxlY3RfXCIgKyBhdHQ7XHJcbiAgICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBhdHQsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHk6IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtY29sdW1uXCIpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgd2luZG93LmVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkPVwiXCI+PC9vcHRpb24+JylcclxuICAgICAgICAgICAgICAgIC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgICAgICAvL2FsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLnJlc3VsdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ3NzQ2xhc3M6IHdpbmRvdy5hdHQsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudmFsKGF0dClcclxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmxvYWQtZXJcIikuZmFkZU91dCg3MCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIuZGV0X2ZvclwiKS5mYWRlSW4oNzApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0b2FzdHIud2FybmluZygnaW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGxcXCdlbnRpdGVyJywgJ0VycmV1cicsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9hcHBseSB0byBzZWxlY3QyXHJcbiAgICB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6b3BlblwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJCh0aGlzKSlcclxuXHJcbiAgICAgICAgd2luZG93LmVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgICAgICQoXCIudHRcIikudmFsKHdpbmRvdy5zZWFyY2gpO1xyXG5cclxuICAgICAgICAvL2FsZXJ0KClcclxuICAgICAgICAkKFwiLnR0cFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiLnNlbGVjdDItc2VhcmNoLS1oaWRlXCIpLmFmdGVyKFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24gdHRwXCI+PGlucHV0IGNsYXNzPVwidHQgc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiMFwiIGF1dG9jb21wbGV0ZT1cIm9uXCIgYXV0b2NvcnJlY3Q9XCJvblwiIGF1dG9jYXBpdGFsaXplPVwib25cIiBzcGVsbGNoZWNrPVwidHJ1ZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgLz48L3NwYW4+J1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi50dFwiKS50eXBlV2F0Y2goe1xyXG4gICAgICAgICAgICBoaWdobGlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB3YWl0OiAxMDAsXHJcbiAgICAgICAgICAgIGNhcHR1cmVMZW5ndGg6IDIsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbih2YWx1ZW5ubiwgZSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgICAgJChcIi5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNlbGVjdDItcmVzdWx0c1wiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICc8cCBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCI+UmVjaGVyY2hlcuKApjwvcD4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZWFyY2ggPSB2YWx1ZW5ubjtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtOiB2YWx1ZW5ubixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogYXR0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtY29sdW1uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVubm4gPT0gJChcIi50dFwiKS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkPVwiXCI+PC9vcHRpb24+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQucmVzdWx0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50LnNlbGVjdDIoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWxlcnQodGhpcy52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KHZhbHVlbm5uKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKFwiLnR0XCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR0JykuZm9jdXMoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiaW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGwnZW50aXRlclwiLCBcIkVycmV1clwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6Y2xvc2VcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgICQoXCIudHRcIikudmFsKHdpbmRvdy5zZWFyY2gpO1xyXG4gICAgLy8gICAgICQoXCIjdF9hY2hhdGRlbWFuZGVpbnRlcm5lZGV0X3F1YW50aXRlXCIpLmZvY3VzKCk7XHJcblxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgICAvLyBhbGVydCgpXHJcbiAgICAvLyAgICAgdmFyIGRhdGEgPSBlLnBhcmFtcy5kYXRhO1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gICAgICQoXCIucHJpeHVuaXRhaXJlXCIpLnZhbChkYXRhLnByaXhBY2hhdCk7XHJcblxyXG4gICAgLy8gICAgICQoXCIudHZhXCIpLnZhbChkYXRhLnR2YSk7XHJcbiAgICAvLyAgICAgJChcIi5yZW1pc2VcIikudmFsKGRhdGEucmVtaXNlKTtcclxuICAgIC8vICAgICAkKFwiLnNlbGVjdDJfdW5pdGVcIikudmFsKGRhdGEudW5pdGUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNlbGVjdDItY29udGFpbmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIC8vJCgnLnNlbGVjdDItc2VhcmNoLS1oaWRlJykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duIHR0cFwiPjxpbnB1dCBjbGFzcz1cInR0IHNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIjBcIiBhdXRvY29tcGxldGU9XCJvblwiIGF1dG9jb3JyZWN0PVwib25cIiBhdXRvY2FwaXRhbGl6ZT1cIm9uXCIgc3BlbGxjaGVjaz1cInRydWVcIiByb2xlPVwidGV4dGJveFwiIC8+PC9zcGFuPicpO1xyXG4gICAgLy8gICAgICQoXCIudHRcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGdldFN1YlNlbGVjdChteWNsYXNzLCBteWJvb2xlYW4sIG15Y29udGVudCkge1xyXG4vLyAgICAgLy9jb25zb2xlLmxvZyhteWNvbnRlbnQpXHJcbi8vICAgICBpZiAobXlib29sZWFuKSB7XHJcbi8vICAgICAgICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAkKG15Y2xhc3MpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuLy8gICAgICAgICAkKG15Y2xhc3MpXHJcbi8vICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4vLyAgICAgICAgICAgICAuZmluZChcIi5zZWxlY3QyIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3dcIilcclxuLy8gICAgICAgICAgICAgLmh0bWwoJzxpIGNsYXNzPVwiaS1sb2FkIGZhIGZhLXJlZnJlc2hcIj48L2k+Jyk7XHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAobXljb250ZW50KSB7XHJcbi8vICAgICAgICAgdmFyIGFycmF5ID0gbXljbGFzcy5zcGxpdChcIixcIik7XHJcbi8vICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgLy9jb25zb2xlLmxvZygkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4vLyAgICAgICAgICAgICAkKGFycmF5W2ldKS5yZXBsYWNlV2l0aCgkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5kZXRfZm9yXCIpXHJcbiAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgIC5hZnRlcihcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2FkLWVyXCI+PGRpdiBjbGFzcz1cImxkcy1lbGxpcHNpc1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj48L2Rpdj4nXHJcbiAgICAgICAgKTtcclxuICAgIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKCQoXCIuYXJ0aWNsZXNcIiksIFwiXCIpO1xyXG59KTtcclxuXHJcblxyXG4vLyBhbGVydCgndGVzdCcpO1xyXG5cclxuXHJcblxyXG4vLyBhbGVydCgnemlrbycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGFsbEFydGljbGVzID0gW107XHJcbnZhciBBcmljbGVTZWxlY3RlZCA9IFwiXCI7XHJcbnZhciBhY3Rpb24gPSBcImFqb3V0ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiByZW1wbGlyVGFibGUoKSB7XHJcblxyXG4gICAgdmFyIHRyID0gXCJcIjtcclxuICAgIGFsbEFydGljbGVzLnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIF9hcnIpIHtcclxuLy8gY29uc29sZS5sb2coZWxlbWVudCwnbmFqaW0nKTtcclxuICAgICAgICAgICAgLy8gdmFyIFByaXhfUXRlID0gcGFyc2VGbG9hdChlbGVtZW50LnByaXhVbnRhaXJlKSAqIHBhcnNlRmxvYXQoZWxlbWVudC5xdGUpO1xyXG4gICAgICAgICAgICAvLyB2YXIgUHJpeF9UdmEgPSBQcml4X1F0ZSAqIHBhcnNlRmxvYXQoZWxlbWVudC50dmEpIC8gMTAwOyAvLyBDYWxjdWxhdGUgVFZBIGFtb3VudFxyXG4gICAgICAgICAgICAvLyB2YXIgUHJpeF9SZW1pc2UgPSBwYXJzZUZsb2F0KGVsZW1lbnQucHJpeFVudGFpcmUpICogcGFyc2VGbG9hdChlbGVtZW50LnJlbWlzZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB2YXIgTW9udGFudCA9IFByaXhfUXRlICsgUHJpeF9UdmEgLSBQcml4X1JlbWlzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LmFydGljbGUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0ciA9IHRyICsgJzx0ciBjbGFzcz1cIlwiIHN0eWxlPVwiIHBhZGRpbmc6IDhweCAxMHB4O1wiICAgaWQ9XCJ0cl9hY3Rpb25zXycgKyBpbmRleCArICdcIj4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJhcnRpY2xlIFwiIHN0eWxlPVwid2lkdGg6MyU7IHBhZGRpbmc6IDVweCAwcHg7XCI+IDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwiYXJ0aWNsZSBcIiBzdHlsZT1cIndpZHRoOjM0JTsgcGFkZGluZzogNXB4IDBweDtcIj4nICsgZWxlbWVudC50aXRyZV9hcnRpY2xlICsgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwicXRlXCIgc3R5bGU9XCJ3aWR0aDoxMiU7IHBhZGRpbmc6IDVweCAwcHg7IFwiPicgKyBlbGVtZW50LnF0ZSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cInByaXhVbnRhaXJlXCIgc3R5bGU9XCJ3aWR0aDoxMS44JTsgcGFkZGluZzogNXB4IDBweDtcIj4nICsgZWxlbWVudC5wcml4VW50YWlyZSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cInR2YVwiIHN0eWxlPVwid2lkdGg6MTEuOCU7IHBhZGRpbmc6IDVweCAwcHg7XCI+JyArIGVsZW1lbnQudHZhICsgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwib2JzZXJ2YXRpb24gXCIgc3R5bGU9XCJ3aWR0aDoyMCU7IHBhZGRpbmc6IDVweCAwcHg7XCI+JyArIGVsZW1lbnQub2JzZXJ2YXRpb24gKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJvYnNlcnZhdGlvbiBcIiBzdHlsZT1cIndpZHRoOjMlOyBwYWRkaW5nOiA1cHggMHB4O1wiPiAnK1xyXG4gICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBidG4teHMgdXBwZXIgIHVhX2VkaXRcIiAgIGlkPVwiJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdCB0ZXh0LXByaW1hcnkgXCI+PC9pPjwvYT4gJyArXHJcbiAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciAgdWFfc3VwcGltZXJfbGlnbmVcIiBpZD1cIicgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyIFwiPjwvaT48L2E+IDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPC90cj4nO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpYmFuKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIud2F2ZXMtcmlwcGxlXCIpLnJlbW92ZSgpO1xyXG5cclxuXHJcbiAgIFxyXG4gIFxyXG5cclxuICAgIHZhciBmb3JtVHIgPSAkKCd0Ym9keSA+ICNtYXJjaGVfZm9ybScpLmh0bWwoKTtcclxuICAgICQoJyNtYXJjaGVfdGFibGUgPiB0Ym9keScpLmh0bWwodHIpO1xyXG4gICAgJCgnI21hcmNoZV90YWJsZSA+IHRib2R5JykuYXBwZW5kKCc8dHIgaWQ9XCJtYXJjaGVfZm9ybVwiPicgKyBmb3JtVHIgKyAnPC90cj4nKTtcclxuICAgIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKCQoXCIuYXJ0aWNsZXNcIiksIFwiXCIpO1xyXG4gICAgLy8gICQuYWpheCh7XHJcbiAgICAvLyAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9tYXJjaGVfZWRpdFwiKSxcclxuICAgIC8vICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAvLyAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAvLyAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgLy8gICAgIGNhY2hlOiBmYWxzZSxcclxuICAgIC8vICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAvLyAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vICAgICAgICAkKCcjbWFyY2hlX3RhYmxlID4gdGJvZHknKS5hcHBlbmQoJzx0ciBpZD1cIm1hcmNoZV9mb3JtXCI+JyArIHJlc3VsdCArICc8L3RyPicpO1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tYXJjaGVfYnRuX3BsdXMgPiAuYWRkX2Zvcm1fdWFcIiwgZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyggJChcIiNwX21hcmNoZV9kZXRfYXJ0aWNsZVwiKS52YWwoKSArICd6aWtvJyk7XHJcbiAgICB2ZXJpZmllckZvcm0oKTtcclxuICAgIGlmICh2ZXJpZmllckZvcm0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24gPT0gXCJham91dGVyXCIpIHtcclxuICAgICAgICB2YXIgQXJ0aWNsZSA9IHt9O1xyXG4gICAgICAgIEFydGljbGVbJ2FydGljbGUnXSA9ICQoJyNwX21hcmNoZV9kZXRfYXJ0aWNsZScpLnZhbCgpO1xyXG4gICAgICAgIEFydGljbGVbJ3F0ZSddID0gJCgnI3BfbWFyY2hlX2RldF9xdCcpLnZhbCgpO1xyXG4gICAgICAgIEFydGljbGVbJ3ByaXhVbnRhaXJlJ10gPSAkKCcjcF9tYXJjaGVfZGV0X3ByaXhVbml0YWlyZScpLnZhbCgpO1xyXG4gICAgICAgIEFydGljbGVbJ3R2YSddID0gJCgnI3BfbWFyY2hlX2RldF90dmEnKS52YWwoKTtcclxuICAgICAgICBBcnRpY2xlWydvYnNlcnZhdGlvbiddID0gJCgnI3BfbWFyY2hlX2RldF9vYnNlcnZhdGlvbicpLnZhbCgpO1xyXG4gICAgICAgIEFydGljbGVbJ3RpdHJlX2FydGljbGUnXSA9ICQoJyNwX21hcmNoZV9kZXRfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0O1xyXG4gICAgICAgIGFsbEFydGljbGVzLnB1c2goQXJ0aWNsZSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS5hcnRpY2xlID0gJCgnI3BfbWFyY2hlX2RldF9hcnRpY2xlJykudmFsKCk7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS5xdGUgPSAkKCcjcF9tYXJjaGVfZGV0X3F0JykudmFsKCk7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS5wcml4VW50YWlyZSA9ICQoJyNwX21hcmNoZV9kZXRfcHJpeFVuaXRhaXJlJykudmFsKCk7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS50dmEgPSAkKCcjcF9tYXJjaGVfZGV0X3R2YScpLnZhbCgpO1xyXG4gICAgICAgIGFsbEFydGljbGVzW2FjdGlvbl0ub2JzZXJ2YXRpb24gPSAkKCcjcF9tYXJjaGVfZGV0X29ic2VydmF0aW9uJykudmFsKCk7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS50aXRyZV9hcnRpY2xlID0kKCcjcF9tYXJjaGVfZGV0X2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dDtcclxuICAgICAgICBhY3Rpb24gPSBcImFqb3V0ZXJcIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVtcGxpclRhYmxlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxBcnRpY2xlcyk7XHJcbiAgICAvLyAkKCcudWFfY29uZmlybWVyX2FubnVsZXInKS5mYWRlSW4oKTtcclxuICAgIC8vICQoJy5mZXJtZXJfdWFfdGVjaG5pcXVlX2RldCcpLmZhZGVPdXQoKTtcclxuXHJcbn0pO1xyXG5cclxuLy8gJChcImJvZHlcIikub24oJ2NsaWNrJywgJy51YV9zdXBwcmltZXJfYXJ0aWNsZScsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxBcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgIGlmIChhbGxBcnRpY2xlc1tpXS5BcmljbGVTZWxlY3RlZCA9PT0gQXJpY2xlU2VsZWN0ZWQpIHtcclxuLy8gICAgICAgICAgICAgYWxsQXJ0aWNsZXMuc3BsaWNlKGksIDEpO1xyXG4vLyAgICAgICAgICAgICBpLS07XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmVtcGxpclRhYmxlKCk7XHJcbi8vICAgICAkKCcudWFfY29uZmlybWVyX2FubnVsZXInKS5mYWRlT3V0KCk7XHJcbi8vICAgICAkKCcuZmVybWVyX3VhX3RlY2huaXF1ZV9kZXQnKS5mYWRlSW4oKTtcclxuXHJcbi8vIH0pO1xyXG5cclxuLy8gJChcImJvZHlcIikub24oJ2NsaWNrJywgJy51YV9jb25maXJtZXInLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIC8vICQoJy51YV9zdWNjZXNzJykuZmFkZUluKCk7XHJcbi8vICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIC8vICAgICAkKCcudWFfc3VjY2VzcycpLmZhZGVPdXQoKTtcclxuLy8gICAgIC8vIH0sIDMwMDApOyBcclxuLy8gICAgIHRvYXN0ci5zdWNjZXNzKCd2b3VzIGF2ZXogYmllbiBjb25maXJtw6knLCAnQ29uZmlybWF0aW9uJywge1xyXG4vLyAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbi8vICAgICB9KTtcclxuLy8gICAgICQoXCIjTW9kYWxEb2N1bWVcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4vLyAgICAgJCgnLmZlcm1lcl91YV90ZWNobmlxdWVfZGV0JykuZmFkZU91dCgpO1xyXG5cclxuLy8gfSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy51YV9lZGl0JywgZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgIC8vIHZlcmlmaWVyRm9ybSgpO1xyXG4gICAgLy8gaWYgKHZlcmlmaWVyRm9ybSgpICE9IFwiXCIpIHtcclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIGFjdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHJlbXBsaXJUYWJsZSgpO1xyXG4gICAgdmFyIGlkTGluZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHZhciBBcnRpY2xlID0gYWxsQXJ0aWNsZXNbaWRMaW5lXTtcclxuXHJcbiAgICAkKCcjcF9tYXJjaGVfZGV0X2FydGljbGUnKS52YWwoQXJ0aWNsZS50aXRyZV9hcnRpY2xlKTtcclxuICAgICQoJyNwX21hcmNoZV9kZXRfcXQnKS52YWwoQXJ0aWNsZS5xdGUpO1xyXG4gICAgJCgnI3BfbWFyY2hlX2RldF9wcml4VW5pdGFpcmUnKS52YWwoQXJ0aWNsZS5wcml4VW50YWlyZSk7XHJcbiAgICAkKCcjcF9tYXJjaGVfZGV0X3R2YScpLnZhbChBcnRpY2xlLnR2YSk7XHJcbiAgICAkKCcjcF9tYXJjaGVfZGV0X29ic2VydmF0aW9uJykudmFsKEFydGljbGUub2JzZXJ2YXRpb24pO1xyXG5cclxuICAgIHZhciBmb3JtVHIgPSAkKCd0Ym9keSA+ICNtYXJjaGVfZm9ybScpLmdldCgpO1xyXG4gICAgJCgnI3RyX2FjdGlvbnNfJyArIGlkTGluZSkuYmVmb3JlKGZvcm1Ucik7XHJcbiAgICAkKCcjdHJfYWN0aW9uc18nICsgaWRMaW5lKS5yZW1vdmUoKTtcclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy51YV9zdXBwaW1lcl9saWduZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlkTGluZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIGFsbEFydGljbGVzLnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIF9hcnIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT0gaWRMaW5lKSB7XHJcbiAgICAgICAgICAgIGFsbEFydGljbGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZW1wbGlyVGFibGUoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiB2ZXJpZmllckZvcm0oKSB7XHJcbiAgICB2YXIgbWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgIFxyXG4gICAgaWYgKCQoXCIjcF9tYXJjaGVfZGV0X2FydGljbGVcIikudmFsKCkgID09IFwiXCIpe1xyXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgXCIgPGkgY2xhc3M9J2ZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJz48L2k+IHZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXBzIEFydGljbGVcIiArIFwiPGJyPlwiO1xyXG4gICAgICAgICQoJy51YV9hbGVydF9kYW5nZXInKS5odG1sKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIjbWFyY2hlX2Zvcm0gaW5wdXRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudmFsKCkgPT0gXCJcIiApIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyBcIiA8aSBjbGFzcz0nZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnPjwvaT4gdmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcHMgXCIgKyAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKS5wb3AoKSArIFwiPGJyPlwiO1xyXG4gICAgICAgICAgICAkKCcudWFfYWxlcnRfZGFuZ2VyJykuaHRtbChtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobWVzc2FnZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgJChcIiNtYXJjaGVfZm9ybSBpbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdpZCcpICE9ICdwX21hcmNoZV9kZXRfYXJ0aWNsZScgJiYgZWxlbWVudC5hdHRyKCdpZCcpICE9ICdwX21hcmNoZV9kZXRfb2JzZXJ2YXRpb24nICkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmxvYXRWYWx1ZXMgPSAvWystXT8oWzAtOV0qWy5dKT9bMC05XSsvO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsLm1hdGNoKGZsb2F0VmFsdWVzKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsLm1hdGNoKGZsb2F0VmFsdWVzKSAmJiAhaXNOYU4odmFsKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyBcIjxpIGNsYXNzPSdmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc+PC9pPiB2ZXVpbGxleiBzYWlzaXIgdW4gbm9tYnJlIGRhbnMgbGUgY2hhbXBzIFwiICsgJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykucG9wKCkgKyBcIjxicj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudWFfYWxlcnRfZGFuZ2VyJykuaHRtbChtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKG1lc3NhZ2UgIT0gXCJcIikge1xyXG4gICAgICAgICQoJy51YV9hbGVydF9kYW5nZXInKS5mYWRlSW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmZhZGVPdXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtZXNzYWdlO1xyXG59XHJcblxyXG4vLyBhbGVydCgnemlrbycpO1xyXG5cclxuXHJcblxyXG5cclxuJChcIiNjcmVhdGVfbWFyY2hlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBidXR0b24gPSAkKHRoaXMpO1xyXG4gICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKVxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQoXCIuZm9ybVwiKS5hdHRyKFwibmFtZVwiKTtcclxuXHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhRGV0YWlsKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd6YWsnKTtcclxuICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgIC8vdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoJChcIiN0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJcIilbMF0pO1xyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAvLyB2YXIgcGFyYW1zID0gJCgnLmZvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIC8vICQuZWFjaChwYXJhbXMsIGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgLy8gICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgIC8vICAgICAvLyAgY29uc29sZS5sb2codmFsLm5hbWUpO1xyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHZhciBtZXNzYWdlID0gJyc7XHJcblxyXG5cclxuICAgICQoXCIjcF9tYXJjaGVfZm9ybSBpbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKTtcclxuICAgICAgICBpZiAoZWxlbWVudC52YWwoKSA9PSBcIlwiICkge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArIFwiIDxpIGNsYXNzPSdmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc+PC9pPiB2ZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wcyBcIiArICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpLnBvcCgpICsgXCI8YnI+XCI7XHJcbiAgICAgICAgICAgIC8vICQoJy5wX21hcmNoZV9hbGVydF9kYW5nZXInKS5odG1sKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzZWxlY3RvciA9ICQoXCIuZm9ybVwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICBpZihtZXNzYWdlICE9ICcnKXtcclxuICAgICAgICB0b2FzdHIud2FybmluZygnd2FybmluZycsbWVzc2FnZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG5cclxuXHJcbiAgICB2YXIgTWFyY2hlID0ge307XHJcbiAgICBNYXJjaGVbJ3JlZmVyZW5jZSddICAgPSAkKCcjcF9tYXJjaGVfcmVmZXJlbmNlJykudmFsKCk7XHJcbiAgICBNYXJjaGVbJ2Rlc2lnbmF0aW9uJ10gPSAkKCcjcF9tYXJjaGVfZGVzaWduYXRpb24nKS52YWwoKTtcclxuICAgIE1hcmNoZVsnZGVzY3JpcHRpb24nXSA9ICQoJyNwX21hcmNoZV9kZXNjcmlwdGlvbicpLnZhbCgpO1xyXG4gICAgTWFyY2hlWydkYXRlRGVidXQnXSAgID0gJCgnI3BfbWFyY2hlX2RhdGVEZWJ1dCcpLnZhbCgpO1xyXG4gICAgTWFyY2hlWydkYXRlRmluJ10gICAgID0gJCgnI3BfbWFyY2hlX2RhdGVGaW4nKS52YWwoKTtcclxuICAgIE1hcmNoZVsnbW9udGFudCddICAgICA9ICQoJyNwX21hcmNoZV9tb250YW50JykudmFsKCk7XHJcblxyXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBKU09OLnN0cmluZ2lmeShhbGxBcnRpY2xlcyk7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoTWFyY2hlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnbWFyY2hlJywgZGF0YSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2FsbEFydGljbGVzJywgYXJ0aWNsZXMpO1xyXG5cclxuXHJcbiAgIFxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiAnL01hcmNoZS9pbnNlcnQnLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICBpZihyZXN1bHQgPSBcImVucmVnaXN0cmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcIm1hcmNoZV9pbmRleFwiKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAvLyAkKFwiLmVycm9ycy1saXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyBpZiAocmVzdWx0LmN1c3RvbUVycm9ycykge1xyXG4gICAgICAgICAgICAvLyAgICAgJC5lYWNoKHJlc3VsdC5jdXN0b21FcnJvcnMsIGZ1bmN0aW9uKGksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgJChcIi5mb3JtICNcIiArIGkpLmFmdGVyKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZSArXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICAgLy8gICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgLy8gJCgnIycrKVxyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vZHVtcChyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgLy8gICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHJlc3VsdC5kb3NzaWVyRW1wdHkpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBhbGVydChyZXN1bHQuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIC8vICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX3Nob3dcIiwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlkOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGRlbGV0ZUNhYihvYmopIHtcclxuXHJcbiAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gIC8vICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgIC8vY29uc29sZS5sb2coaWQgKyAnICcgKyB0b2tlbik7XHJcbiAgICBcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqWydyZWRpcmVjdGlvbiddPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JlZGlyZWN0aW9uJ10pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGRlbGV0ZURlbWFuZGUob2JqKSB7XHJcblxyXG4gICAgLy8gdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgIC8vICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgIFxyXG4gICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgfSxcclxuICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKG9ialsncm91dGUnXSwgeydpZCc6IG9ialsnaWQnXSwgJ3Rva2VuJzogb2JqWyd0b2tlbiddfSksXHJcbiAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqWydyZWRpcmVjdGlvbiddPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JlZGlyZWN0aW9uJ10pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgIH0pO1xyXG4gfVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==