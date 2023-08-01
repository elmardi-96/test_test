(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treglementfrscab"],{

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

/***/ "./assets/js/components/module_achat/treglementfrscab.js":
/*!***************************************************************!*\
  !*** ./assets/js/components/module_achat/treglementfrscab.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
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
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");





var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.setRoutingData(routes);




global.$ = $;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('reglementfrscab_list') + location.search,
    // json datasource
    type: "get",
    beforeSend: function beforeSend() {
      if (table.hasOwnProperty('settings')) {
        var settings = table.settings();
        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    }
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  "order": [[0, "asc"]],
  "columns": [{
    "orderable": true,
    "width": "5%",
    "searchable": true,
    "targets": [0]
  }, {
    "width": "25%"
  }, {
    "width": "25%"
  }, {
    "width": "25%"
  }, {
    "width": "25%"
  }, {
    "width": "25%"
  }, {
    "width": "25%"
  }, {
    "width": "25%"
  }, {
    "width": "25%"
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
  //  console.log(api.data())

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__["CustomSearchText"](api, [1, 4, 5, 6, 7], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__["CustomSearchDate"](api, [2, 8], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__["CustomSearchSelect"](api, [3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__["CustomSearchCheckbox"](api, [0], []);

  // ... use `state` to restore information
});
/*column 1 de datatble search*/

$('#_condition').click(function (e) {
  var id = table.row('.selected').id();
  //alert(id);
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('ua_t_reglement_condition', {
      'id': id
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
$('#_imprimer').click(function (e) {
  //  var id = table.row('.selected').id();
  var id = $('#test').data("reglementId");
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('pdf_show_reglement', {
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
$('.new').on('submit', '.form2', function (e) {
  // alert(1);
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  var id = $('#test').data("factureId");
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('ua_t_reglement_condition_insert', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        $('.errors-list').remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split('.');
          $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('ua_t_reglement_index');
        window.location.href = url;
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
  e.preventDefault();
});
$('#_delete_reglement').click(function (e) {
  var id = $(this).attr('data-id');
  var token = $(this).attr('data-token');
  var obj = {
    "route": "t_reglementfrscab_delete_reglement",
    "redirection": "ua_t_reglement_index",
    "token": token,
    "id": id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_7__["deleteCab"])(obj);
  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/components/module_achat/treglementfrscab.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYWNoYXQvdHJlZ2xlbWVudGZyc2NhYi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiU2hvd0Zvcm1FcnJvcnMiLCJzZWxlY3RvciIsImZvcm1fbmFtZSIsImVycm9ycyIsImlkIiwiaXNHcm91cGUiLCIkIiwicmVtb3ZlIiwialF1ZXJ5IiwiZWFjaCIsInZpb2xhdGlvbnMiLCJpIiwidmFsIiwiY29sdW1uTmFtZSIsIngiLCJwcm9wZXJ0eVBhdGgiLCJzZWFyY2giLCJzZXBhcmF0b3JzIiwiYXJyIiwic3BsaXQiLCJSZWdFeHAiLCJqb2luIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJwYXJlbnQiLCJhcHBlbmQiLCJ0aXRsZSIsIlNob3dGb3JtRXJyb3JzV2l0aFBhcmFtIiwiZ2xvYmFsIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJsb2NhdGlvbiIsInR5cGUiLCJiZWZvcmVTZW5kIiwiaGFzT3duUHJvcGVydHkiLCJzZXR0aW5ncyIsImpxWEhSIiwiYWJvcnQiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJvbiIsImFwaSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiY2xpY2siLCJyb3ciLCJocmVmIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlciIsInByb3AiLCJ0b2dnbGUiLCJzZWxlY3QyIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwiY2hhbmdlIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJtZW0iLCJkYXRlcGlja2VyIiwidG9kYXlCdG4iLCJrZXlib2FyZE5hdmlnYXRpb24iLCJmb3JjZVBhcnNlIiwiY2FsZW5kYXJXZWVrcyIsImF1dG9jbG9zZSIsInllYXJzQWdvIiwiRGF0ZSIsInNldEZ1bGxZZWFyIiwiZ2V0RnVsbFllYXIiLCJvcGVuIiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYXR0ciIsImR0YSIsIkZvcm1EYXRhIiwic3RhcnQiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsInN0b3AiLCJjb2x1bW4iLCJhZnRlciIsImVtcHR5IiwibWVzc2FnZSIsImVycm9yIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwidG9rZW4iLCJvYmoiLCJkZWxldGVDYWIiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwidmFsdWUiLCJjb2RlIiwicmVzcG9u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Q0FBQztRQUNEMEMsS0FBSyxFQUFFLGVBQVV4RSxLQUFLLEVBQUV5RSxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUM3QzlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDN0IsS0FBSyxDQUFDeUYsWUFBWSxDQUFDbEIsT0FBTyxDQUFDbkUsSUFBSSxFQUFFSixLQUFLLENBQUN5RixZQUFZLENBQUNsQixPQUFPLENBQUNwRixLQUFLLEVBQUU7WUFBQzJDLE9BQU8sRUFBRTtVQUFJLENBQUMsQ0FBQztRQUN0RztNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQzs7Ozs7Ozs7Ozs7O0FDMUdELFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGlCQUFpQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMseUZBQThCO0FBQ3BELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyw2REFBNkQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJ0cmVnbGVtZW50ZnJzY2FiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcbiAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgIGpRdWVyeS5lYWNoKGVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHZhciB4ID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICBpZihpc0dyb3VwZSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IHg7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdcXFxcWycpICE9IC0xICYmIHguc2VhcmNoKCdcXFxcXScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JzID0gWydcXFxcXScsICdcXFxcWyddO1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdChuZXcgUmVnRXhwKHNlcGFyYXRvcnMuam9pbignfCcpKSk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeC5zZWFyY2goJ2RhdGEuJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coeClcclxuXHJcbi8qdsOpcmlmaWVyIHMnaWwgcydhZ2l0IGQndW5lIGZvcm11bGFpcmUgYXZlYyB1biBjaGFtcCB0eXBlIGZpbGUgKi9cclxuICAgICAgICBpZiAoIWpRdWVyeShcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gY29sdW1uTmFtZSArICdfZmlsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkKXtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lKTtcclxuICAgICAgICBpZiAoY29sdW1uTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKVxyXG4gICAgICAgICAgICBzZWxlY3Rvci5maW5kKFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzV2l0aFBhcmFtKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI1wiK3NlbGVjdG9yKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyBlcnJvcnMgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3JlZ2xlbWVudGZyc2NhYl9saXN0JykgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJsZS5oYXNPd25Qcm9wZXJ0eSgnc2V0dGluZ3MnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gdGFibGUuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdXSxcclxuICAgIFwib3JkZXJcIjogW1swLCBcImFzY1wiXV0sXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiNSVcIiwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwidGFyZ2V0c1wiOiBbMF19LFxyXG4gICAgICAgIHtcIndpZHRoXCI6IFwiMjUlXCJ9LFxyXG4gICAgICAgIHtcIndpZHRoXCI6IFwiMjUlXCJ9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjI1JVwifSxcclxuICAgICAgICB7XCJ3aWR0aFwiOiBcIjI1JVwifSxcclxuICAgICAgICB7XCJ3aWR0aFwiOiBcIjI1JVwifSxcclxuICAgICAgICB7XCJ3aWR0aFwiOiBcIjI1JVwifSxcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAge1wid2lkdGhcIjogXCIyNSVcIiB9LFxyXG4gICAgICAgIHtcIndpZHRoXCI6IFwiMjUlXCJ9LFxyXG4gICAgIFxyXG4gICAgIFxyXG5cclxuXHJcbiAgICBdLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcbnRhYmxlLm9uKCdpbml0LmR0JywgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgICB2YXIgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICB2YXIgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcblxyXG4gICAgdmFyIGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKGFwaS5kYXRhKCkpXHJcblxyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSAsICA0ICwgNSAsIDYgLCA3XSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbMiAsIDhdLCBbXSk7IFxyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFszXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbiAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gLi4uIHVzZSBgc3RhdGVgIHRvIHJlc3RvcmUgaW5mb3JtYXRpb25cclxufSk7XHJcbi8qY29sdW1uIDEgZGUgZGF0YXRibGUgc2VhcmNoKi9cclxuXHJcblxyXG5cclxuJCgnI19jb25kaXRpb24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgLy9hbGVydChpZCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndWFfdF9yZWdsZW1lbnRfY29uZGl0aW9uJywgeyAnaWQnOiBpZCB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJCgnLmFjdGlvbl9oZWFkJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJCgnLmFjdGlvbicpLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGgpO1xyXG4gICAgJChcIi5hY3Rpb24gLC5hY3Rpb25faGVhZFwiKS5wcm9wKCdjaGVja2VkJywgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcbiAgICAkKCcubGlzdF9hY3Rpb25zX2Jsb2MnKS50b2dnbGUoJCgnLmFjdGlvbicpLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPj0gMSk7XHJcblxyXG59KTtcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuYWN0aW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmxpc3RfYWN0aW9uc19ibG9jJykudG9nZ2xlKCQoJy5hY3Rpb24nKS5maWx0ZXIoJzpjaGVja2VkJykubGVuZ3RoID49IDEpO1xyXG59KTtcclxuXHJcblxyXG4vKiAgJCgnI2dyaWQnKS5vbignY2xpY2snLCAnLnN0YXR1dF9vcCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gdmFyIG5hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuIHZhciBpZCA9ICQodGhpcykuYXR0cigncm9sJyk7ICovXHJcbi8vYWxlcnQobmFtZStcIlwiK2lkKTtcclxuJChcIi5zZWxlY3QyX2RlbW9fM1wiKS5zZWxlY3QyKHtcclxuICAgIHBsYWNlaG9sZGVyOiBcIkFjdGlvblwiLFxyXG4gICAgYWxsb3dDbGVhcjogdHJ1ZVxyXG59KTtcclxuXHJcbiQoJy5saXN0X2FjdGlvbnMnKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKCcuc2hvdy1tZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoJ3NpZGViYXItb3BlbicpXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG4kKCcuYWN0aW9ucycpLm9uKCdjbGljaycsICcuY2xvc2UtbWUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8kKCcuY2xvc2UtbWUnKS5jbGljayhmdW5jdGlvbiAoZSl7IFxyXG4gICAgJChcIi5hY3Rpb25zXCIpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuXHJcblxyXG5cclxuLypcclxuICogXHJcbiAqIGFmZmljaGVyIGxhIGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uICBkJ3VuIG5vdXZlYXUgYXJ0aWNsZSBcclxuICogXHJcbiAqL1xyXG5cclxuXHJcblxyXG5cclxuY29uc29sZS5sb2coJ2ZmJyk7XHJcblxyXG5cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaGVyZScpO1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJsZS4kKCd0ci5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBtZW0gPSAkKCcjZGF0YV8xIC5pbnB1dC1ncm91cC5kYXRlJykuZGF0ZXBpY2tlcih7XHJcbiAgICB0b2RheUJ0bjogXCJsaW5rZWRcIixcclxuICAgIGtleWJvYXJkTmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICBmb3JjZVBhcnNlOiBmYWxzZSxcclxuICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXHJcbiAgICBhdXRvY2xvc2U6IHRydWVcclxufSk7XHJcblxyXG52YXIgeWVhcnNBZ28gPSBuZXcgRGF0ZSgpO1xyXG55ZWFyc0Fnby5zZXRGdWxsWWVhcih5ZWFyc0Fnby5nZXRGdWxsWWVhcigpIC0gMjApO1xyXG5cclxuJCgnI3NlbGVjdG9yJykuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHllYXJzQWdvKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnI19pbXByaW1lcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIHZhciBpZCA9ICQoJyN0ZXN0JykuZGF0YShcInJlZ2xlbWVudElkXCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3BkZl9zaG93X3JlZ2xlbWVudCcsIHsnaWQnOiBpZH0pO1xyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnLm5ldycpLm9uKCdzdWJtaXQnLCAnLmZvcm0yJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIGFsZXJ0KDEpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAgdmFyIGlkID0gJCgnI3Rlc3QnKS5kYXRhKFwiZmFjdHVyZUlkXCIpO1xyXG4gICAgIGwuc3RhcnQoKTtcclxuICAgICAkLmFqYXgoe1xyXG4gICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndWFfdF9yZWdsZW1lbnRfY29uZGl0aW9uX2luc2VydCcsIHsgJ2lkJzogaWQgfSksXHJcbiAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAkKFwiLlwiICsgc2VsZWN0b3IgKyBcIiAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1YV90X3JlZ2xlbWVudF9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfSk7XHJcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJyNfZGVsZXRlX3JlZ2xlbWVudCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuXHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgIFwicm91dGVcIjogXCJ0X3JlZ2xlbWVudGZyc2NhYl9kZWxldGVfcmVnbGVtZW50XCIsXHJcbiAgICAgICAgXCJyZWRpcmVjdGlvblwiOiBcInVhX3RfcmVnbGVtZW50X2luZGV4XCIsXHJcbiAgICAgICAgXCJ0b2tlblwiIDp0b2tlbixcclxuICAgICAgICBcImlkXCIgOmlkLFxyXG4gICAgICB9O1xyXG4gICAgIC8vIGFsZXJ0KCk7XHJcbiAgICBkZWxldGVDYWIob2JqKTtcclxuXHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7IiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVDYWIob2JqKSB7XHJcblxyXG4gICAvLyB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcblxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyb3V0ZSddLCB7J2lkJzogb2JqWydpZCddLCAndG9rZW4nOiBvYmpbJ3Rva2VuJ119KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVEZW1hbmRlKG9iaikge1xyXG5cclxuICAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAgLy9jb25zb2xlLmxvZyhpZCArICcgJyArIHRva2VuKTtcclxuICAgICBcclxuICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgJC5hamF4KHtcclxuIFxyXG4gICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICB9KTtcclxuIH1cclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=