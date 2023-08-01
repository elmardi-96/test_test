(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treglementfrscabVente"],{

/***/ "./assets/js/components/module_vente/treglementfrscabVente.js":
/*!********************************************************************!*\
  !*** ./assets/js/components/module_vente/treglementfrscabVente.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");





var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");



_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});

var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('uv_reglementcab_list') + location.search,
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  "order": [[0, "asc"]],
  "columns": [{
    "orderable": true,
    "searchable": true,
    "width": "10px",
    "targets": [0]
  }, {
    "orderable": true,
    "width": "100px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "100px",
    "targets": [1, 2]
  }, {
    "orderable": true,
    "width": "100px",
    "targets": [3]
  }, {
    "orderable": true,
    "width": "100px",
    "targets": [4, 5]
  }, {
    "orderable": true,
    "width": "100px",
    className: "mnt-format",
    "targets": [6, 7, 8]
  }, {
    "orderable": true,
    "width": "200px",
    className: "colonne-gras",
    "targets": [9]
  }, {
    "orderable": true,
    "width": "100px",
    className: "mnt-format",
    "targets": [6, 7]
  }, {
    "orderable": true,
    "width": "100px",
    className: "mnt-format",
    "targets": [6, 7]
  }, {
    "orderable": true,
    "width": "100px",
    className: "mnt-format",
    "targets": [6, 7]
  }, {
    "orderable": true,
    "width": "100px",
    className: "mnt-format",
    "targets": [6, 7]
  }, {
    "orderable": true,
    "width": "100px",
    className: "mnt-format",
    "targets": [6, 7]
  }],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table.on('init.dt', function (e, settings) {
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchText"](api, [1, 4, 6, 7, 8, 11], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchDate"](api, [2, 5], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchSelect"](api, [3, 9, 10], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__["CustomSearchCheckbox"](api, [0], []);
});
/*column 1 de datatble search*/

var search_column1 = $('.search_column1').datepicker({
  todayBtn: "linked",
  keyboardNavigation: true,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true,
  language: 'fr'
});
var search_column11 = $('.search_column11').datepicker({
  todayBtn: "linked",
  keyboardNavigation: true,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true,
  language: 'fr'
});
search_column1.on('changeDate', function (e) {
  table.columns(1).search(this.value).draw();
});
search_column11.on('changeDate', function (e) {
  //alert(5);
  table.columns(5).search(this.value).draw();
});
$('.search_column1_clear').click(function () {
  $('.search_column1').datepicker('setDate', null).datepicker('fill').formatDate("yy-mm-dd");
});
$('.search_column11_clear').click(function () {
  $('.search_column11').datepicker('setDate', null).datepicker('fill').formatDate("yy-mm-dd");
});
$('.search_column2').on('keyup', function () {
  table.columns(2).search(this.value).draw();
});
$('.search_column3').on('change', function () {
  // alert(this.value);
  table.columns(3).search(this.value).draw();
});
$('.search_column10').on('change', function () {
  // alert(this.value);
  table.columns(10).search(this.value).draw();
});
$('.search_column9').on('change', function () {
  // alert(this.value);
  table.columns(9).search(this.value).draw();
});
$('.search_column4').on('keyup', function () {
  table.columns(4).search(this.value).draw();
});
$('.search_column6').on('keyup', function () {
  table.columns(6).search(this.value).draw();
});
$('.search_column7').on('keyup', function () {
  table.columns(7).search(this.value).draw();
});
$('.search_column8').on('keyup', function () {
  table.columns(8).search(this.value).draw();
});
$('.search_column12').on('keyup', function () {
  table.columns(11).search(this.value).draw();
});
$('.remove-filter').click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});
$('.action_head').click(function () {
  console.log($('.action').filter(':checked').length);
  $(".action ,.action_head").prop('checked', $(this).prop("checked"));
  $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});
$('body').on('click', '.action', function () {
  $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});

/*  $('#grid').on('click', '.statut_op', function (event) {
 var name = $(this).attr('name');
 var id = $(this).attr('rol'); */
//alert(name+""+id);
$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true
});
$('.list_actions').change(function (e) {});
$('#_imprimer').click(function (e) {
  //   var id = table.row('.selected').id();
  //  alert();
  var id = $('#test').data("reglementId");
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('pdf_show_reglement_vente', {
      'id': id
    });
    // window.location.href = url;
    window.open(url, '_blank');
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('#_show').click(function (e) {
  var id = table.row('.selected').id();
  //alert(id);
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('uv_reglementcab_consulte', {
      'id': id
    });
    //  alert(url);
    window.location.href = url;
    window.open(url, '_blank');
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.show-me').click(function (e) {
  $(".actions").toggleClass('sidebar-open');
  e.preventDefault();
});
$('.actions').on('click', '.close-me', function (e) {
  //$('.close-me').click(function (e){ 
  $(".actions").removeClass('sidebar-open');
  e.preventDefault();
});

/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */

console.log('ff');
$('#grid tbody').on('click', 'tr', function () {
  console.log('here');
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
var mem = $('#data_1 .input-group.date').datepicker({
  todayBtn: "linked",
  keyboardNavigation: false,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true
});
var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 20);
$('#selector').datepicker('setDate', yearsAgo);
$('#_delete_reglement').click(function (e) {
  var id = $(this).attr('data-id');
  var token = $(this).attr('data-token');
  var obj = {
    "route": "uv_reglementcab_delete",
    "redirection": "uv_reglementcab_index",
    "token": token,
    "id": id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_7__["deleteCab"])(obj);
  e.preventDefault();
});
$('body').on('change', '._multiple_actions', function () {
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });

  // $("body > ._multiple_actions option[value='']").attr('selected', 'selected'); 

  console.log($(this).val());
  if ($(this).val() == '_delete') {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('t_achatdemandeinternedet_multiple_delete'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            console.log(result);
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
        $('._multiple_actions').val('');
      }
    });
  }
  if ($(this).val() == '_archiver') {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment Archiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('t_achatdemandeinternedet_multiple_archiver'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            console.log(result);
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
        $('._multiple_actions').val('');
      }
    });
  }
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('uv_reglementcab_show', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
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

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
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


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ })

},[["./assets/js/components/module_vente/treglementfrscabVente.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfdmVudGUvdHJlZ2xlbWVudGZyc2NhYlZlbnRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mdW5jdGlvbnMvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCIkIiwiRGF0YVRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwibG9jYXRpb24iLCJzZWFyY2giLCJ0eXBlIiwiY2xhc3NOYW1lIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsInJlbG9hZCIsImZpeGVkSGVhZGVyIiwib24iLCJzZXR0aW5ncyIsImFwaSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwic2VhcmNoX2NvbHVtbjEiLCJkYXRlcGlja2VyIiwidG9kYXlCdG4iLCJrZXlib2FyZE5hdmlnYXRpb24iLCJmb3JjZVBhcnNlIiwiY2FsZW5kYXJXZWVrcyIsImF1dG9jbG9zZSIsImxhbmd1YWdlIiwic2VhcmNoX2NvbHVtbjExIiwiY29sdW1ucyIsInZhbHVlIiwiZHJhdyIsImNsaWNrIiwiZm9ybWF0RGF0ZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsImxlbmd0aCIsInByb3AiLCJ0b2dnbGUiLCJzZWxlY3QyIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwiY2hhbmdlIiwiaWQiLCJvcGVuIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJyb3ciLCJocmVmIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJtZW0iLCJ5ZWFyc0FnbyIsIkRhdGUiLCJzZXRGdWxsWWVhciIsImdldEZ1bGxZZWFyIiwiYXR0ciIsInRva2VuIiwib2JqIiwiZGVsZXRlQ2FiIiwiX2FycmF5X2lkcyIsImVhY2giLCJwdXNoIiwidmFsIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0Iiwic3VjY2VzcyIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInJlc3BvbnNlSlNPTiIsImNsb3Nlc3QiLCJkZWxldGVEZW1hbmRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3BCO0FBQ25DO0FBQ3REQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUU5QixJQUFNSSxJQUFJLEdBQUdILG1CQUFPLENBQUMsdUVB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IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5cclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3V2X3JlZ2xlbWVudGNhYl9saXN0JykgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdXSxcclxuICAgIFwib3JkZXJcIjogW1swLCBcImFzY1wiXV0sXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IFswXX0sXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiLCBcInRhcmdldHNcIjogMH0sXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiLCBcInRhcmdldHNcIjogWzEsIDJdfSxcclxuXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiLCBcInRhcmdldHNcIjogWzNdfSxcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIsIFwidGFyZ2V0c1wiOiBbNCwgNV19LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiwgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIiwgXCJ0YXJnZXRzXCI6IFs2LCA3LCA4XX0sXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIyMDBweFwiLCBjbGFzc05hbWU6IFwiY29sb25uZS1ncmFzXCIsIFwidGFyZ2V0c1wiOiBbOV19LFxyXG5cclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIsIGNsYXNzTmFtZTogXCJtbnQtZm9ybWF0XCIsIFwidGFyZ2V0c1wiOiBbNiwgN119LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiwgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIiwgXCJ0YXJnZXRzXCI6IFs2LCA3XX0sXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiLCBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLCBcInRhcmdldHNcIjogWzYsIDddfSxcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIsIGNsYXNzTmFtZTogXCJtbnQtZm9ybWF0XCIsIFwidGFyZ2V0c1wiOiBbNiwgN119LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiwgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIiwgXCJ0YXJnZXRzXCI6IFs2LCA3XX0sXHJcbiAgICAgXHJcbiAgICAgXHJcblxyXG5cclxuICAgIF0sXHJcbiAgICAvLyBkb206ICdsQmZydGlwJyxcclxuICAgIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxudGFibGUub24oJ2luaXQuZHQnLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuXHJcbiAgICBsZXQgIGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coc3QpO1xyXG4vL2lmIChzdCAhPSBudWxsKSB7XHJcbi8vICAgICQuZWFjaChzdC5jb2x1bW5zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4vLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4vLyAgICAgICAgICAgICQoJy5yZW1vdmUtZmlsdGVyJykuc2hvdygpO1xyXG4vLyAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgfSk7XHJcbi8vfVxyXG5cclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsNCw2LDcsOCwxMV0sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgWzIsNV0sIFtdKTsgXHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzMsOSwxMF0sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG5cclxuXHJcbn0pO1xyXG4vKmNvbHVtbiAxIGRlIGRhdGF0YmxlIHNlYXJjaCovXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHNlYXJjaF9jb2x1bW4xID0gJCgnLnNlYXJjaF9jb2x1bW4xJykuZGF0ZXBpY2tlcih7XHJcbiAgICB0b2RheUJ0bjogXCJsaW5rZWRcIixcclxuICAgIGtleWJvYXJkTmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgIGZvcmNlUGFyc2U6IGZhbHNlLFxyXG4gICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgIGxhbmd1YWdlOiAnZnInLFxyXG5cclxufSk7XHJcbnZhciBzZWFyY2hfY29sdW1uMTEgPSAkKCcuc2VhcmNoX2NvbHVtbjExJykuZGF0ZXBpY2tlcih7XHJcbiAgICB0b2RheUJ0bjogXCJsaW5rZWRcIixcclxuICAgIGtleWJvYXJkTmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgIGZvcmNlUGFyc2U6IGZhbHNlLFxyXG4gICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgIGxhbmd1YWdlOiAnZnInLFxyXG5cclxufSk7XHJcbnNlYXJjaF9jb2x1bW4xLm9uKCdjaGFuZ2VEYXRlJywgZnVuY3Rpb24gKGUpIHtcclxuICBcclxuICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKHRoaXMudmFsdWUpLmRyYXcoKTtcclxufSk7XHJcbnNlYXJjaF9jb2x1bW4xMS5vbignY2hhbmdlRGF0ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCg1KTtcclxuICAgIHRhYmxlLmNvbHVtbnMoNSkuc2VhcmNoKHRoaXMudmFsdWUpLmRyYXcoKTtcclxufSk7XHJcbiQoJy5zZWFyY2hfY29sdW1uMV9jbGVhcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKCcuc2VhcmNoX2NvbHVtbjEnKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbnVsbCkuZGF0ZXBpY2tlcignZmlsbCcpLmZvcm1hdERhdGUoIFwieXktbW0tZGRcIik7XHJcbn0pO1xyXG4kKCcuc2VhcmNoX2NvbHVtbjExX2NsZWFyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQoJy5zZWFyY2hfY29sdW1uMTEnKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbnVsbCkuZGF0ZXBpY2tlcignZmlsbCcpLmZvcm1hdERhdGUoIFwieXktbW0tZGRcIik7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcuc2VhcmNoX2NvbHVtbjInKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbn0pO1xyXG5cclxuJCgnLnNlYXJjaF9jb2x1bW4zJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgLy8gYWxlcnQodGhpcy52YWx1ZSk7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbn0pO1xyXG4kKCcuc2VhcmNoX2NvbHVtbjEwJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGFsZXJ0KHRoaXMudmFsdWUpO1xyXG4gICAgIHRhYmxlLmNvbHVtbnMoMTApLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbiB9KTtcclxuICQoJy5zZWFyY2hfY29sdW1uOScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBhbGVydCh0aGlzLnZhbHVlKTtcclxuICAgICB0YWJsZS5jb2x1bW5zKDkpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbiB9KTtcclxuXHJcbiQoJy5zZWFyY2hfY29sdW1uNCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRhYmxlLmNvbHVtbnMoNCkuc2VhcmNoKHRoaXMudmFsdWUpLmRyYXcoKTtcclxufSk7XHJcblxyXG4kKCcuc2VhcmNoX2NvbHVtbjYnKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDYpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbn0pO1xyXG4kKCcuc2VhcmNoX2NvbHVtbjcnKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDcpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbn0pO1xyXG4kKCcuc2VhcmNoX2NvbHVtbjgnKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDgpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbn0pO1xyXG4kKCcuc2VhcmNoX2NvbHVtbjEyJykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuY29sdW1ucygxMSkuc2VhcmNoKHRoaXMudmFsdWUpLmRyYXcoKTtcclxufSk7XHJcbiQoJy5yZW1vdmUtZmlsdGVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKCcuYWN0aW9uX2hlYWQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKCcuYWN0aW9uJykuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCk7XHJcbiAgICAkKFwiLmFjdGlvbiAsLmFjdGlvbl9oZWFkXCIpLnByb3AoJ2NoZWNrZWQnLCAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAgICQoJy5saXN0X2FjdGlvbnNfYmxvYycpLnRvZ2dsZSgkKCcuYWN0aW9uJykuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA+PSAxKTtcclxuXHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5hY3Rpb24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubGlzdF9hY3Rpb25zX2Jsb2MnKS50b2dnbGUoJCgnLmFjdGlvbicpLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPj0gMSk7XHJcbn0pO1xyXG5cclxuXHJcbi8qICAkKCcjZ3JpZCcpLm9uKCdjbGljaycsICcuc3RhdHV0X29wJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiB2YXIgbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdyb2wnKTsgKi9cclxuLy9hbGVydChuYW1lK1wiXCIraWQpO1xyXG4kKFwiLnNlbGVjdDJfZGVtb18zXCIpLnNlbGVjdDIoe1xyXG4gICAgcGxhY2Vob2xkZXI6IFwiQWN0aW9uXCIsXHJcbiAgICBhbGxvd0NsZWFyOiB0cnVlXHJcbn0pO1xyXG5cclxuJCgnLmxpc3RfYWN0aW9ucycpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG5cclxufSk7XHJcbiQoJyNfaW1wcmltZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiAgLy8gIGFsZXJ0KCk7XHJcbiAgICAgICB2YXIgaWQgPSAkKCcjdGVzdCcpLmRhdGEoXCJyZWdsZW1lbnRJZFwiKTtcclxuICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdwZGZfc2hvd19yZWdsZW1lbnRfdmVudGUnLCB7ICdpZCc6IGlkIH0pO1xyXG4gICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgfVxyXG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiQoJyNfc2hvdycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiAgICAvL2FsZXJ0KGlkKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1dl9yZWdsZW1lbnRjYWJfY29uc3VsdGUnLCB7ICdpZCc6IGlkIH0pO1xyXG4gICAgICAvLyAgYWxlcnQodXJsKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJy5zaG93LW1lJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcygnc2lkZWJhci1vcGVuJylcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuXHJcbiQoJy5hY3Rpb25zJykub24oJ2NsaWNrJywgJy5jbG9zZS1tZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyQoJy5jbG9zZS1tZScpLmNsaWNrKGZ1bmN0aW9uIChlKXsgXHJcbiAgICAkKFwiLmFjdGlvbnNcIikucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5cclxuXHJcblxyXG4vKlxyXG4gKiBcclxuICogYWZmaWNoZXIgbGEgZm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gIGQndW4gbm91dmVhdSBhcnRpY2xlIFxyXG4gKiBcclxuICovXHJcblxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZygnZmYnKTtcclxuXHJcblxyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYmxlLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIG1lbSA9ICQoJyNkYXRhXzEgLmlucHV0LWdyb3VwLmRhdGUnKS5kYXRlcGlja2VyKHtcclxuICAgIHRvZGF5QnRuOiBcImxpbmtlZFwiLFxyXG4gICAga2V5Ym9hcmROYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgIGZvcmNlUGFyc2U6IGZhbHNlLFxyXG4gICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuICAgIGF1dG9jbG9zZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciB5ZWFyc0FnbyA9IG5ldyBEYXRlKCk7XHJcbnllYXJzQWdvLnNldEZ1bGxZZWFyKHllYXJzQWdvLmdldEZ1bGxZZWFyKCkgLSAyMCk7XHJcblxyXG4kKCcjc2VsZWN0b3InKS5kYXRlcGlja2VyKCdzZXREYXRlJywgeWVhcnNBZ28pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnI19kZWxldGVfcmVnbGVtZW50JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cignZGF0YS10b2tlbicpO1xyXG5cclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgICAgXCJyb3V0ZVwiOiBcInV2X3JlZ2xlbWVudGNhYl9kZWxldGVcIixcclxuICAgICAgICBcInJlZGlyZWN0aW9uXCI6IFwidXZfcmVnbGVtZW50Y2FiX2luZGV4XCIsXHJcbiAgICAgICAgXCJ0b2tlblwiIDp0b2tlbixcclxuICAgICAgICBcImlkXCIgOmlkLFxyXG4gICAgICB9O1xyXG4gICAgIC8vIGFsZXJ0KCk7XHJcbiAgICBkZWxldGVDYWIob2JqKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLl9tdWx0aXBsZV9hY3Rpb25zJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uXTpjaGVja2VkXCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAkKFwiYm9keSA+IC5fbXVsdGlwbGVfYWN0aW9ucyBvcHRpb25bdmFsdWU9JyddXCIpLmF0dHIoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7IFxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID09ICdfZGVsZXRlJykge1xyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF9hY2hhdGRlbWFuZGVpbnRlcm5lZGV0X211bHRpcGxlX2RlbGV0ZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuX211bHRpcGxlX2FjdGlvbnMnKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gJ19hcmNoaXZlcicpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBBcmNoaXZlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1hcmNoaXZlJz48L2k+IE91aSwgQXJjaGl2ZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9hcmNoaXZlcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnLl9tdWx0aXBsZV9hY3Rpb25zJykudmFsKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICcuY2Rfb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndXZfcmVnbGVtZW50Y2FiX3Nob3cnLCB7J2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJyl9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gZGVsZXRlQ2FiKG9iaikge1xyXG5cclxuICAgLy8gdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgLy8gIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cignZGF0YS10b2tlbicpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhpZCArICcgJyArIHRva2VuKTtcclxuICAgIFxyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG5cclxuICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKG9ialsncm91dGUnXSwgeydpZCc6IG9ialsnaWQnXSwgJ3Rva2VuJzogb2JqWyd0b2tlbiddfSksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvYmpbJ3JlZGlyZWN0aW9uJ109PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKG9ialsncmVkaXJlY3Rpb24nXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gZGVsZXRlRGVtYW5kZShvYmopIHtcclxuXHJcbiAgICAvLyB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgLy8gIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cignZGF0YS10b2tlbicpO1xyXG4gICAgIC8vY29uc29sZS5sb2coaWQgKyAnICcgKyB0b2tlbik7XHJcbiAgICAgXHJcbiAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICQuYWpheCh7XHJcbiBcclxuICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyb3V0ZSddLCB7J2lkJzogb2JqWydpZCddLCAndG9rZW4nOiBvYmpbJ3Rva2VuJ119KSxcclxuICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihvYmpbJ3JlZGlyZWN0aW9uJ109PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKG9ialsncmVkaXJlY3Rpb24nXSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgfSk7XHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IGlzTnVsbE9yVW5kZWZpbmVkKHJlZ2V4cCkgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=