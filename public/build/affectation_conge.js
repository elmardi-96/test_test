(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["affectation_conge"],{

/***/ "./assets/js/ManagementErrors/index.js":
/*!*********************************************!*\
  !*** ./assets/js/ManagementErrors/index.js ***!
  \*********************************************/
/*! exports provided: ShowFormErrors, ShowFormErrorsWithParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrors", function() { return ShowFormErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrorsWithParam", function() { return ShowFormErrorsWithParam; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__);








var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function ShowFormErrors(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  jQuery.each(errors.violations, function (i, val) {
    var columnName = "";
    var x = val.propertyPath;
    if (isGroupe == true) {
      columnName = x;
    } else {
      if (x.search('\\[') != -1 && x.search('\\]') != -1) {
        var separators = ['\\]', '\\['];
        var arr = x.split(new RegExp(separators.join('|')));
        var columnName = arr[1];
      }
      if (x.search('data.') != -1) {
        var arr = x.split('.');
        var columnName = arr[1];
      }
    }
    //console.log(x)

    /*vérifier s'il s'agit d'une formulaire avec un champ type file */
    if (!jQuery("#" + form_name + "_" + columnName).length > 0) {
      columnName = columnName + '_file';
    }
    if (id) {
      columnName = id;
    }
    console.log(columnName);
    if (columnName != "") {
      console.log("#" + form_name + "_" + columnName);
      selector.find("#" + form_name + "_" + columnName).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
    }
  });
}
function ShowFormErrorsWithParam(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  $("#" + selector).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors + "</span></span></span>");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/components/module_ressource_humaine/affectation_conge.js":
/*!****************************************************************************!*\
  !*** ./assets/js/components/module_ressource_humaine/affectation_conge.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");


var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.setRoutingData(routes);


global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});

/*historique show more */
$('body').on('click', '.show_more_historique_btn', function (e) {
  $('.show_more_historique').show();
  e.preventDefault();
});
$('#grid tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('.action_head').click(function () {
  console.log($('.action').filter(':checked').length);
  $(".action ,.action_head").prop('checked', $(this).prop("checked"));
  $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});
$('body').on('click', '.action', function () {
  $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});

//$('body').on('change', '._multiple_actions', function () {
//    var _array_ids = [];
//     
//    $.each($("input[name=_action]:checked"), function () {
//        _array_ids.push($(this).val());
//    });
//
//    // $("body > ._multiple_actions option[value='']").attr('selected', 'selected'); 
//
//
//    console.log($(this).val());
//
//    if ($(this).val() == '_ajouter') {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment Affecter ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-archive'></i> Oui, Affecter!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'POST',
//                    url: Routing.generate('module_grs_affectation_conge_new'),
//                    data: {_array_ids},
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            table.ajax.reload();
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//                $('._ajouter').val('');
//            }
//        });
//    }
//
//});

$('body').on('submit', '.affecter_conge', function (e) {
  var dta = new FormData(this);

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector('.my-button'));
  l.start();
  // console.log(e.type);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_affectation_conge_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        // console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var x = result.users;
        console.log(x);
        $('.users_list  > tr').each(function (key, val) {
          console.log($(this).attr('data-user'));
          console.log($.inArray($(this).attr('data-user'), x));
          if ($.inArray($(this).attr('data-user'), x) != -1) {
            $(this).hide();
          }
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
$('.new').on('submit', '.form', function (e) {
  //alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector('.my-button'));
  l.start();
  // console.log(e.type);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_affectation_conge_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        // console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_affectation_conge_index');
        window.location.href = url;
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
$('#_edit').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_affectation_conge_show', {
      'id': id
    });
    window.location.href = url;
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('click', '.rsearch', function (e) {
  //alert();
  //$("#form_annee").val(1).trigger('change.select2');
  //$('#form_annee option:eq(0)').prop('selected',true);
  $('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');
  $('#form_poste').val("").trigger('change');
  $('#form_type').val("").trigger('change');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('mesures_type', {
      type: $(this).attr('type')
    }),
    data: {
      annee: $("#form_annee").val(),
      fournisseur: $("#form_poste").val(),
      statut: $("#form_type").val()
    },
    success: function success(result) {
      //alert();
      getAllTotalStatistique();
      console.log(result);
      var r = $.parseJSON(result);
      massPopChart.data.labels = r.labels;
      massPopChart.data.datasets[0].data = r.expression_besoin.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart.data.datasets[0].backgroundColor = r.expression_besoin.backgroundColor;
      massPopChart.update();
      massPopChart2.data.labels = r.labels;
      massPopChart2.data.datasets[0].data = r.commande_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart2.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart2.data.datasets[0].backgroundColor = r.commande_fournisseur.backgroundColor;
      massPopChart2.update();
      massPopChart3.data.labels = r.labels;
      massPopChart3.data.datasets[0].data = r.bc_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart3.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart3.data.datasets[0].backgroundColor = r.bc_fournisseur.backgroundColor;
      massPopChart3.update();
      massPopChart4.data.labels = r.labels;
      massPopChart4.data.datasets[0].data = r.factures_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart4.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart4.data.datasets[0].backgroundColor = r.factures_fournisseur.backgroundColor;
      massPopChart4.update();
      massPopChart5.data.labels = r.labels;
      massPopChart5.data.datasets[0].data = r.reglement_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart5.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart5.data.datasets[0].backgroundColor = r.reglement_fournisseur.backgroundColor;
      massPopChart5.update();
    }
  });
  //$("#form_type").val(1);
});
//$(document).ready(function(){
//    $('select').formSelect();
//});

$('body').on('click', '.search', function (e) {
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('mesures_type', {
      type: $(this).attr('type')
    }),
    data: {
      annee: $("#form_annee").val(),
      fournisseur: $("#form_poste").val(),
      statut: $("#form_type").val()
    },
    success: function success(result) {
      //alert();
      getAllTotalStatistique();
      console.log(result);
      var r = $.parseJSON(result);
      massPopChart.data.labels = r.labels;
      massPopChart.data.datasets[0].data = r.expression_besoin.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart.data.datasets[0].backgroundColor = r.expression_besoin.backgroundColor;
      massPopChart.update();
      massPopChart2.data.labels = r.labels;
      massPopChart2.data.datasets[0].data = r.commande_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart2.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart2.data.datasets[0].backgroundColor = r.commande_fournisseur.backgroundColor;
      massPopChart2.update();
      massPopChart3.data.labels = r.labels;
      massPopChart3.data.datasets[0].data = r.bc_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart3.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart3.data.datasets[0].backgroundColor = r.bc_fournisseur.backgroundColor;
      massPopChart3.update();
      massPopChart4.data.labels = r.labels;
      massPopChart4.data.datasets[0].data = r.factures_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart4.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart4.data.datasets[0].backgroundColor = r.factures_fournisseur.backgroundColor;
      massPopChart4.update();
      massPopChart5.data.labels = r.labels;
      massPopChart5.data.datasets[0].data = r.reglement_fournisseur.data;
      //label: "Année : "+$('#form_annee').val(),
      massPopChart5.data.datasets[0].label = "Année : " + $('#form_annee').val();
      massPopChart5.data.datasets[0].backgroundColor = r.reglement_fournisseur.backgroundColor;
      massPopChart5.update();
    }
  });
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_transitions', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  var title = dta.get('title');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état '" + title + "' pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Non !"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_apply_transitions', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_annuler', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"Annulé\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Non !"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_apply_annuler', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_encours', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"en cours\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-refresh'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> Non!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_apply_encours', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_archiver', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"Archivé\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> Non!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_apply_archiver', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_creer', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"Crée\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-plus'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> Non!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_apply_creer', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_valider', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment passer à l'état \"Validé\" pour cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui!",
      cancelButtonText: "<i class='fa fa-times'></i> Non!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          data: dta,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_apply_valider', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '#module_grs_demande_conge_apply_generer', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var id = dta.get('_id');
  if (id) {
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_apply_generer', {
        'id': id
      }),
      success: function success(result) {
        $('.actions').html(result);
        $(".actions").toggleClass('sidebar-open');
      }
    });
  } else {
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});

/*update commande fournisseur */

$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector('.my-button'));
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_update', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      $('.errors-list').remove();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
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
$('._delete_fichier').click(function (e) {
  var id = $(this).attr('id');
  if (id) {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_achat_commandefrs_fichiers_delete', {
            'id': id
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
    toastr.warning("Impossible d'effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});

/*supprimer un artcile commande détail */
$('.edit').on('submit', '.detail_form_delete', function (e) {
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  var token = dta.get('_token');
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: 'animatedSwal flipInX faster'
    },
    position: 'top',
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
        type: 'DELETE',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_conge_delete', {
          'id': id,
          'token': token
        }),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            location.reload();
          } else if (result.data == 403) {
            toastr.error(result.message.text, result.message.title, {
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
  e.preventDefault();
});

/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */

$('.edit').on('submit', '.detail_edit', function (e) {
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_congedet_edit_detail', {
      'id': id
    }),
    success: function success(result) {
      $('.table-detail > tbody  > tr').eq(row_index).addClass('table-tr-style').html("<td colspan='9'>" + result + "</td>");
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});

/*
 * 
 * Enregistrer  la formulaire de modification  d'article 
 * 
 */

$('.edit').on('submit', '.detail_form', function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr('name');
  var id = dta.get('_id');
  var selector = $(this).attr('class').split(' ')[0];
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_congedet_edit_detail', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$('.new-article-btn').click(function (e) {
  $('.edit-new-article').show();
  $(this).hide();
  e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$('.edit').on('submit', '.detail_form_add_article', function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr('name');
  var id = dta.get('_id_cab');
  var selector = $(this).attr('class').split(' ')[0];
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('module_grs_demande_congedet_insert', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});

//$('.actions').on('submit', '.form_generer', function (e) {
//    var dta = new FormData(this);
//    var form_name = $(this).attr('name');
//    var id = table.row('.selected').id();
//    if (id) {
//        $.ajax({
//            type: 'POST',
//            url: Routing.generate('uv_deviscab_generer', {'id': id}),
//            data: dta,
//            processData: false,
//            contentType: false,
//            success: function (result, textStatus, errorThrown) {
//                if (result.errors) {
//                    $(".errors_list").html("");
//                    jQuery.each(result.errors.violations, function (i, val) {
//                        var x = val.propertyPath;
//                        var separators = ['\\]', '\\['];
//                        var arr = x.split(new RegExp(separators.join('|')));
//                        var columnName = arr[1];
//                        $(".errors_list").append(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>"));
//                    });
//                } else if (result.code == 200) {
//                    table.ajax.reload();
//                    toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                    $(".actions").empty().removeClass('sidebar-open');
//                }
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                toastr.error("Erreur", errorThrown, {timeOut: 4000})
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000});
//    }
//    e.preventDefault();
//})

//$('#_delete').click(function (e) {
//    var id = table.row('.selected').id();
//    if (id) {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment supprimer cet enregistrement ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'DELETE',
//                    url: Routing.generate('stock_produit_delete', {'id': id}),
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            table.ajax.reload();
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                        } else if (result.code == 403) {
//                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
//
//
//
//
//
//$('body').on('submit', '.stock_produit_update_prix_achat', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_update_prix_achat', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                // console.log(result.errors);
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});
//
//
//
//$('body').on('submit', '.stock_produit_update_prix_vente', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_update_prix_vente', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//                // console.log(result.errors);
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});
//
//
//$('body').on('submit', '.stock_produit_fichiers', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_fichiers', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//               console.log(result.errors);
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});
//
//
//
//
//$('._delete_fichier').click(function (e) {
//    var id = $(this).attr('id');
//    if (id) {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment supprimer cet enregistrement ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'DELETE',
//                    url: Routing.generate('stock_produit_fichiers_delete', {'id': id}),
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                            location.reload(); 
//                        } else if (result.code == 403) {
//                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
//
//$('body').on('submit', '.stock_produit_add_stock', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_add_stock', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//             
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});
//
//$('#_show').click(function (e) {
//    var id = table.row('.selected').id();
//
//    if (id) {
//        var url = Routing.generate('u_article_show', {'id': id});
//        window.location.href = url;
//        // console.log(url)
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},[["./assets/js/components/module_ressource_humaine/affectation_conge.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfcmVzc291cmNlX2h1bWFpbmUvYWZmZWN0YXRpb25fY29uZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsIlNob3dGb3JtRXJyb3JzIiwic2VsZWN0b3IiLCJmb3JtX25hbWUiLCJlcnJvcnMiLCJpZCIsImlzR3JvdXBlIiwiJCIsInJlbW92ZSIsImpRdWVyeSIsImVhY2giLCJ2aW9sYXRpb25zIiwiaSIsInZhbCIsImNvbHVtbk5hbWUiLCJ4IiwicHJvcGVydHlQYXRoIiwic2VhcmNoIiwic2VwYXJhdG9ycyIsImFyciIsInNwbGl0IiwiUmVnRXhwIiwiam9pbiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwicGFyZW50IiwiYXBwZW5kIiwidGl0bGUiLCJTaG93Rm9ybUVycm9yc1dpdGhQYXJhbSIsImdsb2JhbCIsIm9uIiwiZSIsInNob3ciLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0YWJsZSIsImFkZENsYXNzIiwiY2xpY2siLCJmaWx0ZXIiLCJwcm9wIiwidG9nZ2xlIiwiZHRhIiwiRm9ybURhdGEiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZ2VuZXJhdGUiLCJkYXRhIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJzdG9wIiwiY29kZSIsInRvYXN0ciIsIm1lc3NhZ2UiLCJ0ZXh0IiwidGltZU91dCIsInVzZXJzIiwia2V5IiwiYXR0ciIsImluQXJyYXkiLCJoaWRlIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImVtcHR5Iiwid2FybmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJvdyIsInRyaWdnZXIiLCJhbm5lZSIsImZvdXJuaXNzZXVyIiwic3RhdHV0IiwiZ2V0QWxsVG90YWxTdGF0aXN0aXF1ZSIsInIiLCJwYXJzZUpTT04iLCJtYXNzUG9wQ2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImV4cHJlc3Npb25fYmVzb2luIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ1cGRhdGUiLCJtYXNzUG9wQ2hhcnQyIiwiY29tbWFuZGVfZm91cm5pc3NldXIiLCJtYXNzUG9wQ2hhcnQzIiwiYmNfZm91cm5pc3NldXIiLCJtYXNzUG9wQ2hhcnQ0IiwiZmFjdHVyZXNfZm91cm5pc3NldXIiLCJtYXNzUG9wQ2hhcnQ1IiwicmVnbGVtZW50X2ZvdXJuaXNzZXVyIiwiZ2V0IiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInZhbHVlIiwicmVsb2FkIiwicmVzcG9uc2VKU09OIiwiaHRtbCIsInRvZ2dsZUNsYXNzIiwidG9rZW4iLCJyb3dfaW5kZXgiLCJjbG9zZXN0IiwiaW5kZXgiLCJlcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7QUM1bENBLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGlCQUFpQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMseUZBQThCO0FBQ3BELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyw2REFBNkQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhZmZlY3RhdGlvbl9jb25nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG4gICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICBqUXVlcnkuZWFjaChlcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gXCJcIjtcclxuICAgICAgICB2YXIgeCA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgaWYoaXNHcm91cGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSB4O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnXFxcXFsnKSAhPSAtMSAmJiB4LnNlYXJjaCgnXFxcXF0nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ycyA9IFsnXFxcXF0nLCAnXFxcXFsnXTtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oJ3wnKSkpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdkYXRhLicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHgpXHJcblxyXG4vKnbDqXJpZmllciBzJ2lsIHMnYWdpdCBkJ3VuZSBmb3JtdWxhaXJlIGF2ZWMgdW4gY2hhbXAgdHlwZSBmaWxlICovXHJcbiAgICAgICAgaWYgKCFqUXVlcnkoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGNvbHVtbk5hbWUgKyAnX2ZpbGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZSk7XHJcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSlcclxuICAgICAgICAgICAgc2VsZWN0b3IuZmluZChcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9yc1dpdGhQYXJhbShzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNcIitzZWxlY3RvcikucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbiBcclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuLypoaXN0b3JpcXVlIHNob3cgbW9yZSAqL1xyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5zaG93X21vcmVfaGlzdG9yaXF1ZV9idG4nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCgnLnNob3dfbW9yZV9oaXN0b3JpcXVlJykuc2hvdygpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJsZS4kKCd0ci5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJCgnLmFjdGlvbl9oZWFkJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJCgnLmFjdGlvbicpLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGgpO1xyXG4gICAgJChcIi5hY3Rpb24gLC5hY3Rpb25faGVhZFwiKS5wcm9wKCdjaGVja2VkJywgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcbiAgICAkKCcubGlzdF9hY3Rpb25zX2Jsb2MnKS50b2dnbGUoJCgnLmFjdGlvbicpLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPj0gMSk7XHJcblxyXG59KTtcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuYWN0aW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmxpc3RfYWN0aW9uc19ibG9jJykudG9nZ2xlKCQoJy5hY3Rpb24nKS5maWx0ZXIoJzpjaGVja2VkJykubGVuZ3RoID49IDEpO1xyXG59KTtcclxuXHJcbi8vJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLl9tdWx0aXBsZV9hY3Rpb25zJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG4vLyAgICAgXHJcbi8vICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uXTpjaGVja2VkXCIpLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbi8vICAgIH0pO1xyXG4vL1xyXG4vLyAgICAvLyAkKFwiYm9keSA+IC5fbXVsdGlwbGVfYWN0aW9ucyBvcHRpb25bdmFsdWU9JyddXCIpLmF0dHIoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7IFxyXG4vL1xyXG4vL1xyXG4vLyAgICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKTtcclxuLy9cclxuLy8gICAgaWYgKCQodGhpcykudmFsKCkgPT0gJ19ham91dGVyJykge1xyXG4vLyAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4vLyAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4vLyAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuLy8gICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuLy8gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4vLyAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgQWZmZWN0ZXIgP1wiLFxyXG4vLyAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4vLyAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbi8vICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4vLyAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1hcmNoaXZlJz48L2k+IE91aSwgQWZmZWN0ZXIhXCIsXHJcbi8vICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbi8vICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbi8vICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfYWZmZWN0YXRpb25fY29uZ2VfbmV3JyksXHJcbi8vICAgICAgICAgICAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbi8vICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICAgICQoJy5fYWpvdXRlcicpLnZhbCgnJyk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSk7XHJcbi8vICAgIH1cclxuLy9cclxuLy99KTtcclxuXHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5hZmZlY3Rlcl9jb25nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgXHJcblxyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLCBcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfYWZmZWN0YXRpb25fY29uZ2VfbmV3JyksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICB2YXIgeCA9IHJlc3VsdC51c2VycyA7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHgpOyBcclxuICAgICAgICAgICAgICAgJCgnLnVzZXJzX2xpc3QgID4gdHInKS5lYWNoKGZ1bmN0aW9uKGtleSAsIHZhbCApIHtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdkYXRhLXVzZXInKSk7IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkLmluQXJyYXkoICQodGhpcykuYXR0cignZGF0YS11c2VyJyksIHgpKTsgXHJcbiAgICAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KCAkKHRoaXMpLmF0dHIoJ2RhdGEtdXNlcicpLCB4KSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpOyBcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKCcubmV3Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19hZmZlY3RhdGlvbl9jb25nZV9uZXcnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19hZmZlY3RhdGlvbl9jb25nZV9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJCgnI19lZGl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2FmZmVjdGF0aW9uX2NvbmdlX3Nob3cnLCB7J2lkJzogaWR9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcucnNlYXJjaCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICAvLyQoXCIjZm9ybV9hbm5lZVwiKS52YWwoMSkudHJpZ2dlcignY2hhbmdlLnNlbGVjdDInKTtcclxuICAgIC8vJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmVxKDApJykucHJvcCgnc2VsZWN0ZWQnLHRydWUpO1xyXG4gICAgJCgnI2Zvcm1fYW5uZWUnKS52YWwoJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmZpcnN0LWNoaWxkJykudmFsKCkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgJCgnI2Zvcm1fcG9zdGUnKS52YWwoXCJcIikudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAkKCcjZm9ybV90eXBlJykudmFsKFwiXCIpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXN1cmVzX3R5cGUnLCB7dHlwZTogJCh0aGlzKS5hdHRyKCd0eXBlJyl9KSxcclxuICAgICAgICBkYXRhOiB7YW5uZWU6ICQoXCIjZm9ybV9hbm5lZVwiKS52YWwoKSxmb3Vybmlzc2V1cjokKFwiI2Zvcm1fcG9zdGVcIikudmFsKCksc3RhdHV0OiQoXCIjZm9ybV90eXBlXCIpLnZhbCgpfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQoKTtcclxuICAgICAgICAgICAgZ2V0QWxsVG90YWxTdGF0aXN0aXF1ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB2YXIgciA9ICQucGFyc2VKU09OKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC5kYXRhLmxhYmVscyA9IHIubGFiZWxzO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gci5leHByZXNzaW9uX2Jlc29pbi5kYXRhO1xyXG4gICAgICAgICAgICAvL2xhYmVsOiBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCksXHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IgPSByLmV4cHJlc3Npb25fYmVzb2luLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0LnVwZGF0ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDIuZGF0YS5sYWJlbHMgPSByLmxhYmVscztcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0Mi5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByLmNvbW1hbmRlX2ZvdXJuaXNzZXVyLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0Mi5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQyLmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gci5jb21tYW5kZV9mb3Vybmlzc2V1ci5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDIudXBkYXRlKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDMuZGF0YS5sYWJlbHMgPSByLmxhYmVscztcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0My5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByLmJjX2ZvdXJuaXNzZXVyLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0My5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQzLmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gci5iY19mb3Vybmlzc2V1ci5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDMudXBkYXRlKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDQuZGF0YS5sYWJlbHMgPSByLmxhYmVscztcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NC5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByLmZhY3R1cmVzX2ZvdXJuaXNzZXVyLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NC5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ0LmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gci5mYWN0dXJlc19mb3Vybmlzc2V1ci5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDQudXBkYXRlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NS5kYXRhLmxhYmVscyA9IHIubGFiZWxzO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHIucmVnbGVtZW50X2ZvdXJuaXNzZXVyLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NS5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gci5yZWdsZW1lbnRfZm91cm5pc3NldXIuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8kKFwiI2Zvcm1fdHlwZVwiKS52YWwoMSk7XHJcbn0pO1xyXG4vLyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbi8vICAgICQoJ3NlbGVjdCcpLmZvcm1TZWxlY3QoKTtcclxuLy99KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLnNlYXJjaCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3VyZXNfdHlwZScsIHt0eXBlOiAkKHRoaXMpLmF0dHIoJ3R5cGUnKX0pLFxyXG4gICAgICAgIGRhdGE6IHthbm5lZTogJChcIiNmb3JtX2FubmVlXCIpLnZhbCgpLGZvdXJuaXNzZXVyOiQoXCIjZm9ybV9wb3N0ZVwiKS52YWwoKSxzdGF0dXQ6JChcIiNmb3JtX3R5cGVcIikudmFsKCl9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgICAgICBnZXRBbGxUb3RhbFN0YXRpc3RpcXVlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHZhciByID0gJC5wYXJzZUpTT04ocmVzdWx0KTtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0LmRhdGEubGFiZWxzID0gci5sYWJlbHM7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByLmV4cHJlc3Npb25fYmVzb2luLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0LmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvciA9IHIuZXhwcmVzc2lvbl9iZXNvaW4uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQudXBkYXRlKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDIuZGF0YS5sYWJlbHMgPSByLmxhYmVscztcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0Mi5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByLmNvbW1hbmRlX2ZvdXJuaXNzZXVyLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0Mi5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQyLmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gci5jb21tYW5kZV9mb3Vybmlzc2V1ci5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDIudXBkYXRlKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQzLmRhdGEubGFiZWxzID0gci5sYWJlbHM7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDMuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gci5iY19mb3Vybmlzc2V1ci5kYXRhO1xyXG4gICAgICAgICAgICAvL2xhYmVsOiBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCksXHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDMuZGF0YS5kYXRhc2V0c1swXS5sYWJlbCA9IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKTtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0My5kYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvciA9IHIuYmNfZm91cm5pc3NldXIuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQzLnVwZGF0ZSgpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NC5kYXRhLmxhYmVscyA9IHIubGFiZWxzO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHIuZmFjdHVyZXNfZm91cm5pc3NldXIuZGF0YTtcclxuICAgICAgICAgICAgLy9sYWJlbDogXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpLFxyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ0LmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBcIkFubsOpZSA6IFwiKyQoJyNmb3JtX2FubmVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIG1hc3NQb3BDaGFydDQuZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IgPSByLmZhY3R1cmVzX2ZvdXJuaXNzZXVyLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NC51cGRhdGUoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NS5kYXRhLmxhYmVscyA9IHIubGFiZWxzO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHIucmVnbGVtZW50X2ZvdXJuaXNzZXVyLmRhdGE7XHJcbiAgICAgICAgICAgIC8vbGFiZWw6IFwiQW5uw6llIDogXCIrJCgnI2Zvcm1fYW5uZWUnKS52YWwoKSxcclxuICAgICAgICAgICAgbWFzc1BvcENoYXJ0NS5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gXCJBbm7DqWUgOiBcIiskKCcjZm9ybV9hbm5lZScpLnZhbCgpO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LmRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yID0gci5yZWdsZW1lbnRfZm91cm5pc3NldXIuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBtYXNzUG9wQ2hhcnQ1LnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcjbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X3RyYW5zaXRpb25zJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIHZhciB0aXRsZSA9IGR0YS5nZXQoJ3RpdGxlJyk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBwYXNzZXIgw6AgbCfDqXRhdCAnXCIgKyB0aXRsZSArIFwiJyBwb3VyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkgIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBOb24gIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV90cmFuc2l0aW9ucycsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduw6kgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJyNtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfYW5udWxlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBwYXNzZXIgw6AgbCfDqXRhdCBcXFwiQW5udWzDqVxcXCIgcG91ciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpICFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm9uICFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfYW5udWxlcicsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduw6kgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnI21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV9lbmNvdXJzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBwYXNzZXIgw6AgbCfDqXRhdCBcXFwiZW4gY291cnNcXFwiIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXJlZnJlc2gnPjwvaT4gT3VpIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBOb24hXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X2VuY291cnMnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIkNvbW1hbmRlIG5vbiByZW5zZWlnbsOpIFwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnI21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV9hcmNoaXZlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBwYXNzZXIgw6AgbCfDqXRhdCBcXFwiQXJjaGl2w6lcXFwiIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBOb24hXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X2FyY2hpdmVyJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDb21tYW5kZSBub24gcmVuc2VpZ27DqSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcjbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X2NyZWVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciDDoCBsJ8OpdGF0IFxcXCJDcsOpZVxcXCIgcG91ciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtcGx1cyc+PC9pPiBPdWkhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfY3JlZXInLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIkNvbW1hbmRlIG5vbiByZW5zZWlnbsOpIFwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnI21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV92YWxpZGVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciDDoCBsJ8OpdGF0IFxcXCJWYWxpZMOpXFxcIiBwb3VyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VfYXBwbHlfdmFsaWRlcicsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduw6kgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnI21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9hcHBseV9nZW5lcmVyJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlX2FwcGx5X2dlbmVyZXInLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmFjdGlvbnMnKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduw6kgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbi8qdXBkYXRlIGNvbW1hbmRlIGZvdXJuaXNzZXVyICovXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1idXR0b24nKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV91cGRhdGUnLCB7aWQ6IGlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJy5fZGVsZXRlX2ZpY2hpZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2FjaGF0X2NvbW1hbmRlZnJzX2ZpY2hpZXJzX2RlbGV0ZScsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIkltcG9zc2libGUgZCdlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4vKnN1cHByaW1lciB1biBhcnRjaWxlIGNvbW1hbmRlIGTDqXRhaWwgKi9cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5kZXRhaWxfZm9ybV9kZWxldGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIHZhciB0b2tlbiA9IGR0YS5nZXQoJ190b2tlbicpO1xyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vZHVsZV9ncnNfZGVtYW5kZV9jb25nZV9kZWxldGUnLCB7J2lkJzogaWQsICd0b2tlbic6IHRva2VufSksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuLypcclxuICogXHJcbiAqIGFmZmljaGVyIGxhIGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uICBkJ3VuIG5vdXZlYXUgYXJ0aWNsZSBcclxuICogXHJcbiAqL1xyXG5cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5kZXRhaWxfZWRpdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgdmFyIHJvd19pbmRleCA9ICQodGhpcykuY2xvc2VzdChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5pbmRleCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VkZXRfZWRpdF9kZXRhaWwnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoJy50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0cicpLmVxKHJvd19pbmRleCkuYWRkQ2xhc3MoJ3RhYmxlLXRyLXN0eWxlJykuaHRtbChcIjx0ZCBjb2xzcGFuPSc5Jz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuLypcclxuICogXHJcbiAqIEVucmVnaXN0cmVyICBsYSBmb3JtdWxhaXJlIGRlIG1vZGlmaWNhdGlvbiAgZCdhcnRpY2xlIFxyXG4gKiBcclxuICovXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfZ3JzX2RlbWFuZGVfY29uZ2VkZXRfZWRpdF9kZXRhaWwnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKCcubmV3LWFydGljbGUtYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJy5lZGl0LW5ldy1hcnRpY2xlJykuc2hvdygpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLypBam91dGVyIHVuIG5vdXZlYXUgYXJ0aWNsZSBkYW5zIGxhIHBhZ2UgZGUgbW9kaWZpY2F0aW9uICovXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9mb3JtX2FkZF9hcnRpY2xlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWRfY2FiJyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2dyc19kZW1hbmRlX2NvbmdlZGV0X2luc2VydCcsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vJCgnLmFjdGlvbnMnKS5vbignc3VibWl0JywgJy5mb3JtX2dlbmVyZXInLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4vLyAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbi8vICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuLy8gICAgaWYgKGlkKSB7XHJcbi8vICAgICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuLy8gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3V2X2RldmlzY2FiX2dlbmVyZXInLCB7J2lkJzogaWR9KSxcclxuLy8gICAgICAgICAgICBkYXRhOiBkdGEsXHJcbi8vICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuLy8gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgJChcIi5lcnJvcnNfbGlzdFwiKS5odG1sKFwiXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JzID0gWydcXFxcXScsICdcXFxcWyddO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9ycy5qb2luKCd8JykpKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmVycm9yc19saXN0XCIpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5cIiArIGNvbHVtbk5hbWUgKyBcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+IFwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKTtcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSk7XHJcbi8vICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbi8vICAgIH1cclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL30pXHJcblxyXG5cclxuXHJcbi8vJCgnI19kZWxldGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4vLyAgICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbi8vICAgIGlmIChpZCkge1xyXG4vLyAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4vLyAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4vLyAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuLy8gICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuLy8gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4vLyAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbi8vICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbi8vICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbi8vICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4vLyAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4vLyAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4vLyAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbi8vICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfZGVsZXRlJywgeydpZCc6IGlkfSksXHJcbi8vICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfSBlbHNlIHtcclxuLy8gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICB9XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy99KTtcclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy8kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcuc3RvY2tfcHJvZHVpdF91cGRhdGVfcHJpeF9hY2hhdCcsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgIC8vICBhbGVydCgpO1xyXG4vLyAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbi8vICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbi8vICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG4vLyAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuLy8gICAgJC5hamF4KHtcclxuLy8gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuLy8gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF91cGRhdGVfcHJpeF9hY2hhdCcsIHsnaWQnOiBpZH0pLFxyXG4vLyAgICAgICAgZGF0YTogZHRhLFxyXG4vLyAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4vLyAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4vLyAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4vLyAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbi8vICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4vLyAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4vLyAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IFxyXG4vLyAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbi8vICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH0sXHJcbi8vICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICB9KTtcclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL30pO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyQoJ2JvZHknKS5vbignc3VibWl0JywgJy5zdG9ja19wcm9kdWl0X3VwZGF0ZV9wcml4X3ZlbnRlJywgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgLy8gIGFsZXJ0KCk7XHJcbi8vICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuLy8gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuLy8gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbi8vICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4vLyAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4vLyAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X3VwZGF0ZV9wcml4X3ZlbnRlJywgeydpZCc6IGlkfSksXHJcbi8vICAgICAgICBkYXRhOiBkdGEsXHJcbi8vICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbi8vICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuLy8gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbi8vICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbi8vICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuLy8gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSxcclxuLy8gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICB9XHJcbi8vICAgIH0pO1xyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSk7XHJcbi8vXHJcbi8vXHJcbi8vJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnN0b2NrX3Byb2R1aXRfZmljaGllcnMnLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAvLyAgYWxlcnQoKTtcclxuLy8gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4vLyAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4vLyAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuLy8gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbi8vICAgICQuYWpheCh7XHJcbi8vICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbi8vICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfZmljaGllcnMnLCB7J2lkJzogaWR9KSxcclxuLy8gICAgICAgIGRhdGE6IGR0YSxcclxuLy8gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuLy8gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4vLyAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4vLyAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4vLyAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IFxyXG4vLyAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbi8vICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH0sXHJcbi8vICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICB9KTtcclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL30pO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyQoJy5fZGVsZXRlX2ZpY2hpZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4vLyAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbi8vICAgIGlmIChpZCkge1xyXG4vLyAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4vLyAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4vLyAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuLy8gICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuLy8gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4vLyAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbi8vICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbi8vICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbi8vICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4vLyAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4vLyAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4vLyAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbi8vICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfZmljaGllcnNfZGVsZXRlJywgeydpZCc6IGlkfSksXHJcbi8vICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfSBlbHNlIHtcclxuLy8gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICB9XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy99KTtcclxuLy9cclxuLy8kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcuc3RvY2tfcHJvZHVpdF9hZGRfc3RvY2snLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAvLyAgYWxlcnQoKTtcclxuLy8gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4vLyAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4vLyAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuLy8gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbi8vICAgICQuYWpheCh7XHJcbi8vICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbi8vICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfYWRkX3N0b2NrJywgeydpZCc6IGlkfSksXHJcbi8vICAgICAgICBkYXRhOiBkdGEsXHJcbi8vICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbi8vICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuLy8gICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbi8vICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuLy8gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSxcclxuLy8gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICB9XHJcbi8vICAgIH0pO1xyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSk7XHJcbi8vXHJcbi8vJCgnI19zaG93JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4vL1xyXG4vLyAgICBpZiAoaWQpIHtcclxuLy8gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1X2FydGljbGVfc2hvdycsIHsnaWQnOiBpZH0pO1xyXG4vLyAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbi8vICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbi8vICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgfVxyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSk7XHJcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=