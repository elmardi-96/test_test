(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alimentation"],{

/***/ "./assets/js/components/tresorerie/alimentation.js":
/*!*********************************************************!*\
  !*** ./assets/js/components/tresorerie/alimentation.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");


var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




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
var tr_alimentation_list_index = $('#grid_index_depot_retrait').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('tr_alimentation_list_index'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": false,
  "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  "columns": [{
    "searchable": true,
    "width": "3%",
    "targets": [0]
  }, {
    "width": "20%"
  }, {
    "width": "20%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  "language": {
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
tr_alimentation_list_index.on("init.dt", function (e, settings) {
  // let api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchText"](api, [1, 3, 5, 6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchDate"](api, [4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchSelect"](api, [2], []);
});
var table_consolide = $('#grid_consolide').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('tr_compte_consolides_list'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": false,
  "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  // "columns": [
  //     // {"searchable": true, "width": "3%", "targets": [0]},
  //     { "width": "20%"},
  //     { "width": "20%"},
  //     { "width": "12%"},
  //     {"width" : "12%"},
  //     {"width" : "12%"},
  //     {"width" : "12%"},
  //     {"width" : "12%"},
  // ],

  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  "language": {
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table_consolide.on("init.dt", function (e, settings) {
  // let api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchText"](api, [1, 3, 5, 6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchDate"](api, [4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchSelect"](api, [2], []);
});

// alert('ziko');
var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('tr_alimentation_list'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": false,
  "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  "columns": [{
    "searchable": true,
    "width": "3%",
    "targets": [0]
  }, {
    "width": "20%"
  }, {
    "width": "20%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  "language": {
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});

// var row = ['', 'testing' , 'testing','testing','testing','testing','testing','testing'];
//     table.row.add(row).draw(false);
//     table.order([1, 'asc']).draw();
//     table.page('current').draw(false);

table.on("init.dt", function (e, settings) {
  //   let api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchText"](api, [1, 3, 5, 6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchDate"](api, [4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchSelect"](api, [2], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('tr_alimentation_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});

/*

$('.new').on('submit', '.form', function (e) {
   /// alert('add');

    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);


    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.querySelector('.button-save-add-alimentation'));
    l.start();

    $.ajax({
        type: 'POST',
        url: Routing.generate('tr_alimentation_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();


            if (result.errors) {
                //dump(result.errors);
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})

            } else {
                toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000,
                });
                var url = Routing.generate("tr_alimentation_index");
                window.location.href = url;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
        }
    });
    e.preventDefault();
});*/

function apres_operation() {
  var Montant = $('.pa_montant').val();
  console.log(Montant);
  var piece = $('.piece').val();
  var formData = new FormData();
  formData.append('Montant', Montant);
  formData.append('piece', piece);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('consolide_apres_operation'),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      // console.log(result);
      $('.compte_conso_apres').val(result.sold_conso);
      $('.compte_placement_apres').val(result.mt_placement);
      $('.Manotant_valorise_apres').val(result.mt_placement);
      var total_conso = result.sold_conso + result.mt_placement;
      $('.total_conso_apres').val(total_conso);
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
}
$(".pa_montant").keyup(function () {
  apres_operation();
});
$(".piece").change(function () {
  apres_operation();
});

// alert('ziko');
// $(".sites").change(function (e) {

//       var idDossier = $('.sites').val();

//       var formData = new FormData();
//       formData.append('idDossier', idDossier);

//       $.ajax({
//         type: 'POST',
//         url: Routing.generate('get_compte_banque'),
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: function (result) {
//             // console.log(result);
//             $('.compteBanque').html(result.select);
//             $('.compte_conso').val(result.sold_conso);
//             $('.compte_placement').val(result.mt_placement);
//             $('.montant_valorise').val(result.mt_placement);
//             var total_conso =  result.sold_conso + result.mt_placement;
//             $('.total_conso').val(total_conso);
//             $('.tresorerie_total').val(parseFloat(result.total_mt_final) + parseFloat(total_conso));
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             toastr.error("Erreur", errorThrown, {timeOut: 4000})
//         }
//     });

// });

// alert('ziko');

$(".compteBanque").change(function (e) {
  var idCompte = $('.compteBanque').val();
  var formData = new FormData();
  formData.append('idCompte', idCompte);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('get_infos_compte'),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      $('.site_compte').val(result.compte);
      if (result.T_Depot != false) {
        $('.depot_compte').val(result.T_Depot);
      } else {
        $('.depot_compte').val(0);
      }
      if (result.T_Retrait != false) {
        $('.retrait_compte').val(result.T_Retrait);
      } else {
        $('.retrait_compte').val(0);
      }
      $('.solde').val(result.sold_conso);
      $('.solde_csb').val(result.montant_final);
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});

// create_placement_conso

$("#create_placement_conso").click(function (e) {
  var form_name = $(".form").attr("name");
  var formData = new FormData();
  var params = $('.form').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
    //  console.log(val.name);
  });

  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_5__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate("tr_compte_consolides_new"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();

      // alert(result.code);
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_4__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('tr_compte_consolides_index');
        window.location.href = url;
        ///location.reload();
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

// create_placement_conso

$("#create_alimentation").click(function (e) {
  var form_name = $(".form").attr("name");
  var formData = new FormData();
  var params = $('.form').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
    //  console.log(val.name);
  });

  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_5__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate("tr_alimentation_new"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      // alert(result.code);
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_4__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('tr_alimentation_first_index');
        window.location.href = url;
        ///location.reload();
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
$('.edit').on('submit', '.form', function (e) {
  /// alert('edit');
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_5__["create"](document.querySelector('.button-save-add-alimentation'));
  l.start();
  $.ajax({
    type: 'POST',
    // url: Routing.generate('tr_alimentation_edit'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        //dump(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_4__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
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
$(".pa_valeurAchatUnitaire").on('keyup', function () {
  var pa_valeurAchatUnitaire = $(this).val();
  var quantite = $(".pa_quantite").val();
  var valeur_achat_total = pa_valeurAchatUnitaire * quantite;
  $(".valeur_achat_total").val((pa_valeurAchatUnitaire * quantite).toFixed(2));
  var valeur_vente_total = $(".valeur_vente_total").val();
  if (!isNaN(valeur_vente_total)) {
    $('.marge_operation_total').val(valeur_vente_total - valeur_achat_total);
    $('.marge_operation_unitaire').val(($(".pa_valeurVenteUnitaire").val() - pa_valeurAchatUnitaire).toFixed(2));
  }
});
$(".pa_valeurVenteUnitaire").on('keyup', function () {
  var pa_valeurVenteUnitaire = $(this).val();
  var quantite = $(".pa_quantite").val();
  var valeur_vente_total = pa_valeurVenteUnitaire * quantite;
  $(".valeur_vente_total").val(valeur_vente_total.toFixed(2));
  var valeur_achat_total = $(".valeur_achat_total").val();
  if (!isNaN(valeur_achat_total)) {
    $('.marge_operation_total').val((valeur_vente_total - valeur_achat_total).toFixed(2));
    $('.marge_operation_unitaire').val((pa_valeurVenteUnitaire - $(".pa_valeurAchatUnitaire").val()).toFixed(2));
  }
});
var code_bq = null;
$("body").on('click', '.gain_perte_valeur', function (e) {
  e.preventDefault();
  code_bq = $(this).attr('data-id');
  $("#gain_perte").modal('show');
});
$("#gain_perte_submit").on('submit', function (e) {
  e.preventDefault();
  var l = ladda__WEBPACK_IMPORTED_MODULE_5__["create"](document.activeElement);
  l.start();
  var formData = new FormData($(this)[0]);
  formData.append('code_bq', code_bq);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('consolide_ajouter_valeur_marge'),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      location.reload();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});

// $("#u_general_operation_typeCompte").change(function (){

//     // alert('ziko');

//     var type = $(this).val();
//     var idDossier = $('.sites').val();

//     var formData = new FormData();
//     formData.append('idDossier', idDossier);
//     formData.append('type',type);

//     $.ajax({
//         type: 'POST',
//         url: Routing.generate('getBnaque'),
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: function (result) {

//             // console.log(result);
//             $('.compteBanque').html(result.select);

//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             toastr.error("Erreur", errorThrown, {timeOut: 4000})
//         }
//     });

// });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var $repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw $RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return $String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ })

},[["./assets/js/components/tresorerie/alimentation.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL2FsaW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXgiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwicGFnZUxlbmd0aCIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInRhYmxlIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwic3QiLCJhcGkiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwidGFibGVfY29uc29saWRlIiwiY2xvc2VzdCIsImF0dHIiLCJocmVmIiwiYXByZXNfb3BlcmF0aW9uIiwiTW9udGFudCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJwaWVjZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsInNvbGRfY29uc28iLCJtdF9wbGFjZW1lbnQiLCJ0b3RhbF9jb25zbyIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJ0b2FzdHIiLCJ0aW1lT3V0Iiwia2V5dXAiLCJjaGFuZ2UiLCJpZENvbXB0ZSIsImNvbXB0ZSIsIlRfRGVwb3QiLCJUX1JldHJhaXQiLCJtb250YW50X2ZpbmFsIiwiY2xpY2siLCJmb3JtX25hbWUiLCJwYXJhbXMiLCJzZXJpYWxpemVBcnJheSIsImVhY2giLCJpIiwibmFtZSIsInZhbHVlIiwic2VsZWN0b3IiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydCIsInN0b3AiLCJjb2RlIiwid2FybmluZyIsIm1lc3NhZ2UiLCJ0aXRsZSIsImVycm9ycyIsIlNob3dGb3JtRXJyb3JzIiwiZW1wdHkiLCJwcmV2ZW50RGVmYXVsdCIsImR0YSIsInBhX3ZhbGV1ckFjaGF0VW5pdGFpcmUiLCJxdWFudGl0ZSIsInZhbGV1cl9hY2hhdF90b3RhbCIsInRvRml4ZWQiLCJ2YWxldXJfdmVudGVfdG90YWwiLCJpc05hTiIsInBhX3ZhbGV1clZlbnRlVW5pdGFpcmUiLCJjb2RlX2JxIiwibW9kYWwiLCJhY3RpdmVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDdkQ7QUFDdERBLG1CQUFPLENBQUMsMEdBQStDLENBQUM7QUFDUztBQUNsQztBQUMwRDtBQUNqQjtBQUV4RUMsa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFHOUJJLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0FBRVosSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFD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QUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esa0JBQWtCO0FBQ2xCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEdBQUcsZ0RBQWdEO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsImZpbGUiOiJhbGltZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanMnO1xyXG5yZXF1aXJlKCcuLi8uLi9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanMnKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuXHJcbnZhciB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleCA9ICQoJyNncmlkX2luZGV4X2RlcG90X3JldHJhaXQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXgnKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiBmYWxzZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCAyMDAwMDAwMF0sIFsxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHtcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjMlXCIsIFwidGFyZ2V0c1wiOiBbMF19LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjIwJVwifSxcclxuICAgICAgICB7IFwid2lkdGhcIjogXCIyMCVcIn0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiMTIlXCJ9LFxyXG4gICAgICAgIHtcIndpZHRoXCIgOiBcIjEyJVwifSxcclxuICAgICAgICB7XCJ3aWR0aFwiIDogXCIxMiVcIn0sXHJcbiAgICAgICAge1wid2lkdGhcIiA6IFwiMTIlXCJ9LFxyXG4gICAgICAgIHtcIndpZHRoXCIgOiBcIjEyJVwifSxcclxuICAgIF0sXHJcblxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcbnRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4Lm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICAvLyBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLCAzLCA1ICw2XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgWzRdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFsyXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG5cclxudmFyIHRhYmxlX2NvbnNvbGlkZSA9ICQoJyNncmlkX2NvbnNvbGlkZScpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jb21wdGVfY29uc29saWRlc19saXN0JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogZmFsc2UsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuICAgIHBhZ2VMZW5ndGg6IDE1LFxyXG4gICAgLy8gXCJjb2x1bW5zXCI6IFtcclxuICAgIC8vICAgICAvLyB7XCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIzJVwiLCBcInRhcmdldHNcIjogWzBdfSxcclxuICAgIC8vICAgICB7IFwid2lkdGhcIjogXCIyMCVcIn0sXHJcbiAgICAvLyAgICAgeyBcIndpZHRoXCI6IFwiMjAlXCJ9LFxyXG4gICAgLy8gICAgIHsgXCJ3aWR0aFwiOiBcIjEyJVwifSxcclxuICAgIC8vICAgICB7XCJ3aWR0aFwiIDogXCIxMiVcIn0sXHJcbiAgICAvLyAgICAge1wid2lkdGhcIiA6IFwiMTIlXCJ9LFxyXG4gICAgLy8gICAgIHtcIndpZHRoXCIgOiBcIjEyJVwifSxcclxuICAgIC8vICAgICB7XCJ3aWR0aFwiIDogXCIxMiVcIn0sXHJcbiAgICAvLyBdLFxyXG5cclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG50YWJsZV9jb25zb2xpZGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIC8vIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsIDMsIDUgLDZdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbNF0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzJdLCBbXSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4vLyBhbGVydCgnemlrbycpO1xyXG52YXIgdGFibGUgPSAkKCcjZ3JpZCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9hbGltZW50YXRpb25fbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IGZhbHNlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAge1wic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMyVcIiwgXCJ0YXJnZXRzXCI6IFswXX0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiMjAlXCJ9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjIwJVwifSxcclxuICAgICAgICB7IFwid2lkdGhcIjogXCIxMiVcIn0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiMTIlXCJ9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjEyJVwifSxcclxuICAgICAgICB7XCJ3aWR0aFwiIDogXCIxMiVcIn0sXHJcbiAgICAgICAge1wid2lkdGhcIiA6IFwiMTIlXCJ9XHJcbiAgICBdLFxyXG5cclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gdmFyIHJvdyA9IFsnJywgJ3Rlc3RpbmcnICwgJ3Rlc3RpbmcnLCd0ZXN0aW5nJywndGVzdGluZycsJ3Rlc3RpbmcnLCd0ZXN0aW5nJywndGVzdGluZyddO1xyXG4vLyAgICAgdGFibGUucm93LmFkZChyb3cpLmRyYXcoZmFsc2UpO1xyXG4vLyAgICAgdGFibGUub3JkZXIoWzEsICdhc2MnXSkuZHJhdygpO1xyXG4vLyAgICAgdGFibGUucGFnZSgnY3VycmVudCcpLmRyYXcoZmFsc2UpO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4vLyAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsIDMsIDUgLDZdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbNF0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzJdLCBbXSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4vKiBsaWVuIHZlcnMgbGEgbGl2cmFpc29uICovXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJy5jZF9vcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9hbGltZW50YXRpb25fZWRpdCcsIHsgJ2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qXHJcblxyXG4kKCcubmV3Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgIC8vLyBhbGVydCgnYWRkJyk7XHJcblxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcblxyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc2F2ZS1hZGQtYWxpbWVudGF0aW9uJykpO1xyXG4gICAgbC5zdGFydCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfYWxpbWVudGF0aW9uX25ldycpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vZHVtcChyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidHJfYWxpbWVudGF0aW9uX2luZGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTsqL1xyXG5cclxuZnVuY3Rpb24gIGFwcmVzX29wZXJhdGlvbigpe1xyXG4gICAgdmFyIE1vbnRhbnQgPSAkKCcucGFfbW9udGFudCcpLnZhbCgpO1xyXG4gICAgY29uc29sZS5sb2coTW9udGFudCk7XHJcbiAgICB2YXIgcGllY2UgPSAkKCcucGllY2UnKS52YWwoKTtcclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnTW9udGFudCcsIE1vbnRhbnQpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwaWVjZScsIHBpZWNlKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnY29uc29saWRlX2FwcmVzX29wZXJhdGlvbicpLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAkKCcuY29tcHRlX2NvbnNvX2FwcmVzJykudmFsKHJlc3VsdC5zb2xkX2NvbnNvKTtcclxuICAgICAgICAgICQoJy5jb21wdGVfcGxhY2VtZW50X2FwcmVzJykudmFsKHJlc3VsdC5tdF9wbGFjZW1lbnQpO1xyXG4gICAgICAgICAgJCgnLk1hbm90YW50X3ZhbG9yaXNlX2FwcmVzJykudmFsKHJlc3VsdC5tdF9wbGFjZW1lbnQpO1xyXG4gICAgICAgICAgdmFyIHRvdGFsX2NvbnNvID0gIHJlc3VsdC5zb2xkX2NvbnNvICsgcmVzdWx0Lm10X3BsYWNlbWVudDtcclxuICAgICAgICAgICQoJy50b3RhbF9jb25zb19hcHJlcycpLnZhbCh0b3RhbF9jb25zbyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuJChcIi5wYV9tb250YW50XCIpLmtleXVwKGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIGFwcmVzX29wZXJhdGlvbigpO1xyXG5cclxufSk7XHJcbiQoXCIucGllY2VcIikuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIGFwcmVzX29wZXJhdGlvbigpO1xyXG5cclxufSk7XHJcblxyXG5cclxuLy8gYWxlcnQoJ3ppa28nKTtcclxuLy8gJChcIi5zaXRlc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcclxuXHJcbi8vICAgICAgIHZhciBpZERvc3NpZXIgPSAkKCcuc2l0ZXMnKS52YWwoKTtcclxuXHJcbi8vICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4vLyAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRG9zc2llcicsIGlkRG9zc2llcik7XHJcblxyXG4vLyAgICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuLy8gICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dldF9jb21wdGVfYmFucXVlJyksXHJcbi8vICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbi8vICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4vLyAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbi8vICAgICAgICAgICAgICQoJy5jb21wdGVCYW5xdWUnKS5odG1sKHJlc3VsdC5zZWxlY3QpO1xyXG4vLyAgICAgICAgICAgICAkKCcuY29tcHRlX2NvbnNvJykudmFsKHJlc3VsdC5zb2xkX2NvbnNvKTtcclxuLy8gICAgICAgICAgICAgJCgnLmNvbXB0ZV9wbGFjZW1lbnQnKS52YWwocmVzdWx0Lm10X3BsYWNlbWVudCk7XHJcbi8vICAgICAgICAgICAgICQoJy5tb250YW50X3ZhbG9yaXNlJykudmFsKHJlc3VsdC5tdF9wbGFjZW1lbnQpO1xyXG4vLyAgICAgICAgICAgICB2YXIgdG90YWxfY29uc28gPSAgcmVzdWx0LnNvbGRfY29uc28gKyByZXN1bHQubXRfcGxhY2VtZW50O1xyXG4vLyAgICAgICAgICAgICAkKCcudG90YWxfY29uc28nKS52YWwodG90YWxfY29uc28pO1xyXG4vLyAgICAgICAgICAgICAkKCcudHJlc29yZXJpZV90b3RhbCcpLnZhbChwYXJzZUZsb2F0KHJlc3VsdC50b3RhbF9tdF9maW5hbCkgKyBwYXJzZUZsb2F0KHRvdGFsX2NvbnNvKSk7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuXHJcbi8vIH0pO1xyXG5cclxuLy8gYWxlcnQoJ3ppa28nKTtcclxuXHJcblxyXG4kKFwiLmNvbXB0ZUJhbnF1ZVwiKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgaWRDb21wdGUgPSAkKCcuY29tcHRlQmFucXVlJykudmFsKCk7XHJcblxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkQ29tcHRlJywgaWRDb21wdGUpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXRfaW5mb3NfY29tcHRlJyksXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICQoJy5zaXRlX2NvbXB0ZScpLnZhbChyZXN1bHQuY29tcHRlKTtcclxuXHJcbiAgICAgICAgICBpZihyZXN1bHQuVF9EZXBvdCAhPSBmYWxzZSl7XHJcbiAgICAgICAgICAgICQoJy5kZXBvdF9jb21wdGUnKS52YWwocmVzdWx0LlRfRGVwb3QpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kZXBvdF9jb21wdGUnKS52YWwoMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKHJlc3VsdC5UX1JldHJhaXQgIT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAkKCcucmV0cmFpdF9jb21wdGUnKS52YWwocmVzdWx0LlRfUmV0cmFpdCk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLnJldHJhaXRfY29tcHRlJykudmFsKDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICQoJy5zb2xkZScpLnZhbChyZXN1bHQuc29sZF9jb25zbyk7XHJcbiAgICAgICAgICAkKCcuc29sZGVfY3NiJykudmFsKHJlc3VsdC5tb250YW50X2ZpbmFsKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4vLyBjcmVhdGVfcGxhY2VtZW50X2NvbnNvXHJcblxyXG4kKFwiI2NyZWF0ZV9wbGFjZW1lbnRfY29uc29cIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2codmFsLm5hbWUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzZWxlY3RvciA9ICQoXCIuZm9ybVwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidHJfY29tcHRlX2NvbnNvbGlkZXNfbmV3XCIpLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC5jb2RlKTtcclxuICAgICAgICAgICAgaWYocmVzdWx0LmNvZGUgPT0gNDAzKXtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlPTIwMCkge1xyXG4gICAgICAgICAgICAgICAvLyBhbGVydCggcmVzdWx0Lm1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jb21wdGVfY29uc29saWRlc19pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8gY3JlYXRlX3BsYWNlbWVudF9jb25zb1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoXCIjY3JlYXRlX2FsaW1lbnRhdGlvblwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQoXCIuZm9ybVwiKS5hdHRyKFwibmFtZVwiKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgcGFyYW1zID0gJCgnLmZvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgICQuZWFjaChwYXJhbXMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodmFsLm5hbWUsIHZhbC52YWx1ZSk7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHZhbC5uYW1lKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIFxyXG5cclxuICAgIHZhciBzZWxlY3RvciA9ICQoXCIuZm9ybVwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidHJfYWxpbWVudGF0aW9uX25ld1wiKSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC5jb2RlKTtcclxuICAgICAgICAgICAgaWYocmVzdWx0LmNvZGUgPT0gNDAzKXtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlPTIwMCkge1xyXG4gICAgICAgICAgICAgICAvLyBhbGVydCggcmVzdWx0Lm1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9hbGltZW50YXRpb25fZmlyc3RfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgLy8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgIC8vLyBhbGVydCgnZWRpdCcpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcblxyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc2F2ZS1hZGQtYWxpbWVudGF0aW9uJykpO1xyXG4gICAgbC5zdGFydCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgLy8gdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9hbGltZW50YXRpb25fZWRpdCcpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vZHVtcChyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5wYV92YWxldXJBY2hhdFVuaXRhaXJlXCIpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHBhX3ZhbGV1ckFjaGF0VW5pdGFpcmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgbGV0IHF1YW50aXRlID0gJChcIi5wYV9xdWFudGl0ZVwiKS52YWwoKTtcclxuICAgIGxldCB2YWxldXJfYWNoYXRfdG90YWwgPSBwYV92YWxldXJBY2hhdFVuaXRhaXJlICogcXVhbnRpdGVcclxuICAgICQoXCIudmFsZXVyX2FjaGF0X3RvdGFsXCIpLnZhbCgocGFfdmFsZXVyQWNoYXRVbml0YWlyZSAqIHF1YW50aXRlKS50b0ZpeGVkKDIpKTtcclxuICAgIGxldCB2YWxldXJfdmVudGVfdG90YWwgPSAkKFwiLnZhbGV1cl92ZW50ZV90b3RhbFwiKS52YWwoKVxyXG5cclxuICAgIGlmKCFpc05hTih2YWxldXJfdmVudGVfdG90YWwpKSB7XHJcbiAgICAgICAgJCgnLm1hcmdlX29wZXJhdGlvbl90b3RhbCcpLnZhbCh2YWxldXJfdmVudGVfdG90YWwgLSB2YWxldXJfYWNoYXRfdG90YWwpXHJcbiAgICAgICAgJCgnLm1hcmdlX29wZXJhdGlvbl91bml0YWlyZScpLnZhbCgoJChcIi5wYV92YWxldXJWZW50ZVVuaXRhaXJlXCIpLnZhbCgpIC0gcGFfdmFsZXVyQWNoYXRVbml0YWlyZSkudG9GaXhlZCgyKSlcclxuICAgIH1cclxufSlcclxuXHJcbiQoXCIucGFfdmFsZXVyVmVudGVVbml0YWlyZVwiKS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBwYV92YWxldXJWZW50ZVVuaXRhaXJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGxldCBxdWFudGl0ZSA9ICQoXCIucGFfcXVhbnRpdGVcIikudmFsKCk7XHJcbiAgICBsZXQgdmFsZXVyX3ZlbnRlX3RvdGFsID0gcGFfdmFsZXVyVmVudGVVbml0YWlyZSAqIHF1YW50aXRlXHJcbiAgICAkKFwiLnZhbGV1cl92ZW50ZV90b3RhbFwiKS52YWwodmFsZXVyX3ZlbnRlX3RvdGFsLnRvRml4ZWQoMikpO1xyXG4gICAgbGV0IHZhbGV1cl9hY2hhdF90b3RhbCA9ICQoXCIudmFsZXVyX2FjaGF0X3RvdGFsXCIpLnZhbCgpXHJcblxyXG4gICAgaWYoIWlzTmFOKHZhbGV1cl9hY2hhdF90b3RhbCkpIHtcclxuICAgICAgICAkKCcubWFyZ2Vfb3BlcmF0aW9uX3RvdGFsJykudmFsKCh2YWxldXJfdmVudGVfdG90YWwgLSB2YWxldXJfYWNoYXRfdG90YWwpLnRvRml4ZWQoMikpXHJcbiAgICAgICAgJCgnLm1hcmdlX29wZXJhdGlvbl91bml0YWlyZScpLnZhbCgocGFfdmFsZXVyVmVudGVVbml0YWlyZSAtICQoXCIucGFfdmFsZXVyQWNoYXRVbml0YWlyZVwiKS52YWwoKSkudG9GaXhlZCgyKSlcclxuICAgIH1cclxufSlcclxuXHJcbmxldCBjb2RlX2JxID0gbnVsbFxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5nYWluX3BlcnRlX3ZhbGV1cicsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvZGVfYnEgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICQoXCIjZ2Fpbl9wZXJ0ZVwiKS5tb2RhbCgnc2hvdycpO1xyXG59KVxyXG5cclxuJChcIiNnYWluX3BlcnRlX3N1Ym1pdFwiKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29kZV9icScsIGNvZGVfYnEpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2NvbnNvbGlkZV9ham91dGVyX3ZhbGV1cl9tYXJnZScpLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KVxyXG5cclxuLy8gJChcIiN1X2dlbmVyYWxfb3BlcmF0aW9uX3R5cGVDb21wdGVcIikuY2hhbmdlKGZ1bmN0aW9uICgpe1xyXG5cclxuLy8gICAgIC8vIGFsZXJ0KCd6aWtvJyk7XHJcblxyXG4vLyAgICAgdmFyIHR5cGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4vLyAgICAgdmFyIGlkRG9zc2llciA9ICQoJy5zaXRlcycpLnZhbCgpO1xyXG5cclxuLy8gICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4vLyAgICAgZm9ybURhdGEuYXBwZW5kKCdpZERvc3NpZXInLCBpZERvc3NpZXIpO1xyXG4vLyAgICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJyx0eXBlKTtcclxuXHJcbi8vICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuLy8gICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEJuYXF1ZScpLFxyXG4vLyAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4vLyAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuLy8gICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbi8vICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuLy8gICAgICAgICAgICAgJCgnLmNvbXB0ZUJhbnF1ZScpLmh0bWwocmVzdWx0LnNlbGVjdCk7XHJcblxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG5cclxuLy8gfSk7XHJcblxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIG4gPSB0b0ludGVnZXJPckluZmluaXR5KGNvdW50KTtcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93ICRSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdGhpc051bWJlclZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlJyk7XG52YXIgJHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciByZXBlYXQgPSB1bmN1cnJ5VGhpcygkcmVwZWF0KTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBuYXRpdmVUb0ZpeGVkID0gdW5jdXJyeVRoaXMoMS4wLnRvRml4ZWQpO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGRhdGEsIG4sIGMpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjMiA9IGM7XG4gIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGMyICUgMWU3O1xuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICB9XG59O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gKGRhdGEsIG4pIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIGMgPSAwO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGZsb29yKGMgLyBuKTtcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgfVxufTtcblxudmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBzID0gJyc7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgIHZhciB0ID0gJFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG5cbnZhciBGT1JDRUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVUb0ZpeGVkKDAuMDAwMDgsIDMpICE9PSAnMC4wMDAnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgwLjksIDApICE9PSAnMScgfHxcbiAgICBuYXRpdmVUb0ZpeGVkKDEuMjU1LCAyKSAhPT0gJzEuMjUnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgxMDAwMDAwMDAwMDAwMDAwMTI4LjAsIDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCc7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkKHt9KTtcbn0pO1xuXG4vLyBgTnVtYmVyLnByb3RvdHlwZS50b0ZpeGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyT3JJbmZpbml0eShmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgLy8gVE9ETzogRVMyMDE4IGluY3JlYXNlZCB0aGUgbWF4aW11bSBudW1iZXIgb2YgZnJhY3Rpb24gZGlnaXRzIHRvIDEwMCwgbmVlZCB0byBpbXByb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgJFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChudW1iZXIgIT0gbnVtYmVyKSByZXR1cm4gJ05hTic7XG4gICAgaWYgKG51bWJlciA8PSAtMWUyMSB8fCBudW1iZXIgPj0gMWUyMSkgcmV0dXJuICRTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KGRhdGEsIDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEsIDEpO1xuICAgICAgICBkaXZpZGUoZGF0YSwgMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogc3RyaW5nU2xpY2UocmVzdWx0LCAwLCBrIC0gZnJhY3REaWdpdHMpICsgJy4nICsgc3RyaW5nU2xpY2UocmVzdWx0LCBrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==