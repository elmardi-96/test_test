(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demande"],{

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

/***/ "./assets/js/components/demand_stock/demande.js":
/*!******************************************************!*\
  !*** ./assets/js/components/demand_stock/demande.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


























var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.setRoutingData(routes);



var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});

// Event handler for status select change
$('body').on('change', '#statusSelect', function () {
  table13.ajax.reload();
  $('#select-all').prop('checked', false);
});

// Event handler for Touts_Client change
$('body').on('change', '#Touts_Client', function () {
  $('#select-all').prop('checked', false);
  table13.ajax.reload();
});

// Event handler for postion change
$('body').on('change', '#postion', function () {
  table13.ajax.reload();
  $('#select-all').prop('checked', false);
});

// DataTables configuration
var columnDefs = [{
  orderable: false,
  width: '5%',
  searchable: true,
  targets: 0
}, {
  width: '20%'
}, {
  width: '20%'
}, {
  width: '20%'
}, {
  width: '20%'
}, {
  width: '20%'
}, {
  width: '20%'
}, {
  width: '20%'
}, {
  orderable: false,
  width: '20%'
}];
var tableShow3 = $('#datatable-show3').DataTable({
  paging: false
});
var table13 = $('#grid13').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('list_demande_stock_cab'),
    type: 'get',
    data: function data(d) {
      d.demande = $('#statusSelect').val();
      d.touttt = $('#Touts_Client').val();
      d.postion = $('#postion').val();
    }
  },
  deferRender: true,
  stateSave: true,
  order: [[0, 'desc']],
  lengthMenu: [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, 'All']],
  pageLength: 15,
  columns: columnDefs,
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table13.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  }
});

// Event handler for "Select All" checkbox
$('body').on('change', '#select-all', function () {
  if ($('#postion').val() != 5) {
    $(this).prop('checked', false);
    toastr.warning('select livraison cloture pour select tout ... ', 'warning', {
      timeOut: 4000
    });
  } else {
    var checkboxes = $('.action2');
    checkboxes.prop('checked', $(this).is(':checked'));
  }
});

//////////////////////

var table = $('#grid17').DataTable({
  ajax: {
    url: '/stock/demande/list_reception' + location.search,
    // json datasource
    type: 'get'
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, 'desc']],
  columns: [{
    orderable: true,
    className: 'pd-liv',
    width: '3%',
    name: 'tab.id'
  }, {
    orderable: true,
    visible: true,
    name: 'tab.code',
    className: 'td-codeliv pd-liv'
  }, {
    orderable: true,
    className: 'pd-liv',
    name: 'tab.dateDocAsso'
  }, {
    orderable: true,
    className: 'pd-liv',
    name: 'tab.refDocAsso'
  }, {
    orderable: true,
    className: 'pd-liv',
    name: 'tab.description'
  }, {
    orderable: true,
    className: 'pd-liv',
    name: 'tab.societe'
  }, {
    orderable: true,
    className: 'td-number pd-liv',
    name: 'tab.ht'
  }, {
    orderable: true,
    className: 'td-number pd-liv',
    name: 'tab.tva'
  }, {
    orderable: true,
    className: 'td-number pd-liv',
    name: 'tab.ttc'
  }, {
    orderable: true,
    className: 'pd-liv',
    name: 'tab.code_commande'
  }, {
    orderable: true,
    className: 'pd-liv',
    name: 'tab.code_facture'
  }, {
    orderable: false,
    className: 'fac pd-liv',
    visible: false,
    searchable: false
  }, {
    orderable: false,
    className: 'rg pd-liv',
    visible: false,
    searchable: false
  }, {
    orderable: true,
    className: 'pd-liv',
    name: 'tab.position_actuel'
  }
  // { orderable: true, searchable: false, width: "5%" },
  // { "orderable": true, className: "bec" },
  // { "width": "5%", "orderable": true, className: "rg" },
  ],

  columnDefs: [{
    searchable: false,
    targets: 14
  }],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: '<"html5buttons btn-group"f>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  },
  fixedHeader: true,
  scrollX: true
});
$('.sel2').select2();
var table4 = $('#grid4').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('mouvement_stock_list_normal2') + location.search,
    type: 'get'
  },
  serverSide: true,
  deferRender: true,
  order: [[0, 'desc']],
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  columns: [{
    orderable: true,
    name: 'mv.id'
  }, {
    className: 'mnt-format',
    name: 'mv.source'
  }, {
    className: 'mnt-format',
    name: 'mv.source_code'
  }, {
    className: 'mnt-format',
    name: 'dep.titre'
  }, {
    className: 'mnt-format',
    name: 'ar.titre'
  },
  /*  ,
        {
            className: "mnt-format",
          name: 'ar.code'
        }*/

  {
    className: 'mnt-format',
    name: 'mv.quantite'
  }, {
    className: 'mnt-format',
    name: 'mv.prixunitaire'
  }, {
    className: 'mnt-format',
    name: 'mv.tva'
  }, {
    className: 'mnt-format',
    name: 'mv.remise'
  }, {
    className: 'mnt-format',
    name: 'mv.prixttc'
  }

  //  {"orderable": true, "width": "200px"},
  ],

  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  },
  fixedHeader: true
});
table4.on('init.dt', function (e, settings) {
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

  // CustomSearchDatatable.CustomSearchSelect(api, [], []);
  // CustomSearchDatatable.CustomSearchDate(api, [], []);
  //  CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,5,6,7,8,9,10], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_28__["CustomSearchCheckbox"](api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('u_depot_show', {
    id: $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
var grid2 = $('#grid2').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('mouvement_stock_encours_list_vente') + location.search,
    type: 'get'
  },
  serverSide: true,
  deferRender: true,
  order: [[0, 'desc']],
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  columns: [{
    orderable: true,
    name: 'det.id'
  }, {
    className: 'mnt-format',
    name: 'mv.cab.dateDocAsso'
  }, {
    className: 'mnt-format',
    name: 'clt.nom'
  }, {
    className: 'mnt-format',
    name: 'dv.code'
  }, {
    className: 'mnt-format',
    name: 'cab.code'
  },
  /*  ,
        {
            className: "mnt-format",
          name: 'ar.code'
        }*/

  {
    className: 'mnt-format',
    name: 'dep.code'
  }, {
    className: 'mnt-format',
    name: 'ar.code'
  }, {
    className: 'mnt-format',
    name: 'det.quantite'
  }, {
    className: 'mnt-format',
    name: 'det.prixunitaire'
  }, {
    className: 'mnt-format',
    name: 'det.tva'
  }, {
    className: 'mnt-format',
    name: 'det.tva'
  }, {
    className: 'mnt-format',
    name: 'det.remise'
  }, {
    className: 'mnt-format',
    name: 'det.prixTtc'
  }

  //  {"orderable": true, "width": "200px"},
  ],

  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  },
  fixedHeader: true
});
var table3 = $('#grid3').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('mouvement_stock_encours_list_achat'),
    type: 'get'
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  columns: [{
    orderable: false,
    width: '10px',
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '10px'
  }, {
    orderable: true,
    width: '10px'
  }, {
    orderable: true,
    width: '10px'
  }, {
    orderable: true,
    width: '10px'
  }, {
    orderable: true,
    width: '10px'
  }, {
    orderable: true,
    width: '10px'
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  }
});
var table6 = $('#grid6').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('list_antenne'),
    type: 'get'
  },
  deferRender: true,
  order: [[3, 'desc']],
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  columns: [{
    orderable: false,
    width: '10px',
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  }
});
var table9 = $('#grid9').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('list_antenne'),
    type: 'get'
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[3, 'desc']],
  columns: [{
    orderable: false,
    width: '10px',
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  }
});
var table10 = $('#grid10').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('list_antenne'),
    type: 'get'
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  order: [[3, 'desc']],
  pageLength: 15,
  columns: [{
    orderable: false,
    width: '10px',
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  }
});
var table11 = $('#grid11').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('list_antenne'),
    type: 'get'
  },
  deferRender: true,
  stateSave: true,
  order: [[3, 'desc']],
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  columns: [{
    orderable: false,
    width: '10px',
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  }
});
var table7 = $('#grid7').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('list_antenne_depot'),
    type: 'get'
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[3, 'desc']],
  columns: [{
    orderable: true,
    name: 'ann.code',
    width: '5%'
  }, {
    orderable: true,
    name: 'ann.designation'
  }, {
    orderable: true,
    name: 'ann.defaut'
  }, {
    orderable: true,
    name: 'article'
  }, {
    orderable: true,
    name: 'quantite'
  }, {
    orderable: true,
    name: 'ar.prix_achat'
  }, {
    orderable: true,
    name: 'depot.titre'
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  }
});
var table5 = $('#grid5').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('mouvement_stock_encours_list_transformation'),
    type: 'get'
  },
  deferRender: true,
  stateSave: true,
  order: [[3, 'desc']],
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  columns: [{
    orderable: false,
    width: '10px',
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '100px'
  }, {
    orderable: true,
    width: '10px'
  }, {
    orderable: true,
    width: '10px'
  }, {
    orderable: true,
    width: '10px'
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  }
});
$('#grid tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('#grid2 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table2.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('#grid3 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table3.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('#grid5 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table5.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('#valid').change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize()
    var t = dta.get('_action[]');
    //alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    // var t=1;
    if (t) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Valider cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('depot_mouvement_stock_valider_vente_multiple'),
            data: dta,
            processData: false,
            contentType: false,
            success: function success(result) {
              //console.log(result);
              if (result.code == 200) {
                table2.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                $('#valid').css('display', 'none');
                $('.action').prop('checked', false);
                $('#allactions').prop('checked', false);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              }
            },
            error: function error(jqXHR, textStatus, errorThrown) {
              toastr.error('Erreur', errorThrown, {
                timeOut: 4000
              });
            }
          });
        }
      });
    } else {
      toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$('#valid3').change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize()
    var t = dta.get('_action[]');
    //alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    // var t=1;
    if (t) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Valider cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('depot_mouvement_stock_valider_transformation_multiple'),
            data: dta,
            processData: false,
            contentType: false,
            success: function success(result) {
              //console.log(result);
              if (result.code == 200) {
                table2.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                $('#valid3').css('display', 'none');
                $('.action').prop('checked', false);
                $('#allactions').prop('checked', false);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              }
            },
            error: function error(jqXHR, textStatus, errorThrown) {
              toastr.error('Erreur', errorThrown, {
                timeOut: 4000
              });
            }
          });
        }
      });
    } else {
      toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$('#valid2').change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test2').attr('name');
    var dta = new FormData(action_test2);
    var t = dta.get('_action2[]');
    //  alert(t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);

    if (t) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: 'Confirmation ?',
        text: 'Voulez vous vraiment Validé cet enregistrement ?',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('depot_mouvement_stock_valider_achat_multiple'),
            data: dta,
            processData: false,
            contentType: false,
            success: function success(result) {
              //console.log(result);
              if (result.code == 200) {
                table3.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                $('#valid2').css('display', 'none');
                $('#allactions2').prop('checked', false);
              } else if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              }
            },
            error: function error(jqXHR, textStatus, errorThrown) {
              toastr.error('Erreur', errorThrown, {
                timeOut: 4000
              });
            }
          });
        }
      });
    } else {
      toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$('.test').on('submit', '.action_test', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var t = dta.get('_action[]');
  //alert( t);
  var selector = $(this).attr('class').split(' ')[0];
  // console.log(e.type);

  if (t) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: 'Confirmation ?',
      text: 'Voulez vous vraiment Validé cet enregistrement ?',
      type: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('depot_mouvement_stock_valider_vente_multiple'),
          data: dta,
          processData: false,
          contentType: false,
          success: function success(result) {
            //console.log(result);
            if (result.code == 200) {
              table2.ajax.reload();
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
            toastr.error('Erreur', errorThrown, {
              timeOut: 4000
            });
          }
        });
      }
    });
  } else {
    toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.test2').on('submit', '.action_test2', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var t = dta.get('_action2[]');
  //  alert(t);
  var selector = $(this).attr('class').split(' ')[0];
  // console.log(e.type);

  if (t) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: 'Confirmation ?',
      text: 'Voulez vous vraiment Validé cet enregistrement ?',
      type: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('depot_mouvement_stock_valider_achat_multiple'),
          data: dta,
          processData: false,
          contentType: false,
          success: function success(result) {
            //console.log(result);
            if (result.code == 200) {
              table3.ajax.reload();
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
            toastr.error('Erreur', errorThrown, {
              timeOut: 4000
            });
          }
        });
      }
    });
  } else {
    toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('#allactions').change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $('.action').prop('checked', true);
    $('#valid').css('display', 'block');
  } else {
    $('.action').prop('checked', false);
    $('#valid').css('display', 'none');
  }
  e.preventDefault();
});
$('#allactions2').change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $('.action2').prop('checked', true);
    $('#valid2').css('display', 'block');
  } else {
    $('.action2').prop('checked', false);
    $('#valid2').css('display', 'none');
  }
  e.preventDefault();
});
$('#allactions3').change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $('.action').prop('checked', true);
    $('#valid3').css('display', 'block');
  } else {
    $('.action').prop('checked', false);
    $('#valid3').css('display', 'none');
  }
  e.preventDefault();
});
$('body').on('change', '.action', function () {
  //  alert();
  $('#valid').css('display', 'block');
  //    $(".btn_val").css("display", "block");
  //  console.log($('.action').val());
});

$('body').on('change', '.action', function () {
  //  alert();
  $('#valid3').css('display', 'block');
  //    $(".btn_val").css("display", "block");
  //  console.log($('.action').val());
});

$('body').on('change', '.action2', function () {
  //  alert();
  $('#valid2').css('display', 'block');
  //   $(".btn_val2").css("display", "block");
  //  console.log($('.action').val());
});

$('.new').on('submit', '.form', function (e) {
  //alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // console.log(e.type);
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_depot_insert'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        // console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_27__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('u_depot_show', {
          id: result.data.id
        });
        window.location.href = url;
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$('#_edit').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_depot_edit', {
      id: id
    });
    window.location.href = url;
  } else {
    toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.grid').on('click', '.valider', function (e) {
  var id = $(this).attr('id');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: 'Confirmation ?',
      text: 'Voulez vous vraiment Validé cet enregistrement ?',
      type: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('depot_mouvement_stock_valider_vente', {
            id: id
          }),
          success: function success(result) {
            //console.log(result);
            if (result.code == 200) {
              table2.ajax.reload();
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
  } else {
    toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.grid3').on('click', '.valider', function (e) {
  //$('.valider').on('click',function (e) {

  var id = $(this).attr('id'); //alert(id);
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: 'Confirmation ?',
      text: 'Voulez vous vraiment Validé cet enregistrement ?',
      type: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('depot_mouvement_stock_valider_achat', {
            id: id
          }),
          success: function success(result) {
            //console.log(result);
            if (result.code == 200) {
              table3.ajax.reload();
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
  } else {
    toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_depot_update', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $('.errors-list').remove();
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_27__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});
$('#_show').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('u_depot_show', {
      id: id
    });
    window.location.href = url;
  } else {
    toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('#_delete').click(function (e) {
  var id = $('#test').data('depotId');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: 'Confirmation ?',
      text: 'Voulez vous vraiment supprimer cet enregistrement ?',
      type: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'DELETE',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_depot_delete', {
            id: id
          }),
          success: function success(result) {
            console.log(result);
            if (result.code == 200) {
              // table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_depot_index');
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
  } else {
    toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('#_archiver').click(function (e) {
  var id = $('#test').data('depotId');
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: 'Confirmation ?',
      text: 'Voulez vous vraiment Archiver cet enregistrement ?',
      type: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_depot_archiver', {
            id: id
          }),
          success: function success(result) {
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
  } else {
    toastr.warning('Veuillez Renseigner une ligne pour effectuer cette opération', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('submit', '.stock_depot_trensfert', function (e) {
  //alert();
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_depot_trensfert', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_27__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_depot_mouvementstock');
        window.location.href = url;
        //  location.reload();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$('.antenne_source').on('change', function () {
  var data = $('.antenne_source :selected').val();
  $('.santenneyerror').hide();

  // console.log(data);
  // let antenne = $(this).val();
  if (data != '') {
    $.ajax({
      type: 'GET',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('get_antenne_article', {
        id: data
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        var data = JSON.parse(result);
        $('.article_disponible').html(data);
        $('.article_disponible select').select2();
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, {
          timeOut: 4000
        });
      }
    });
  }
});
$('body').on('change', '.article_disponible', function () {
  var tr = $(this).parents('tr');
  var prixVente = $('.article_disponible :selected').attr('data-p');
  // alert(prixVente)
  tr.find("input[name='prixVente']").val(prixVente);
});
$('.ddl_unite').on('change', function () {
  // alert('test');

  var data = $('.Site_Rc :selected').val();
  var antenne = $('.ddl_unite :selected').val();
  $('.santenneyerror').hide();
  if (data != '') {
    $.ajax({
      type: 'GET',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('get_demand_article', {
        id: data,
        antenne_id: antenne
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        var data = JSON.parse(result);
        $('.article_disponible_Rc').html(data);
        $('.article_disponible_Rc select').select2();
      },
      error: function error(_jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, {
          timeOut: 4000
        });
      }
    });
  }
});
$('.Site_Rc').on('change', function () {
  // alert('najim')
  var data = $('.Site_Rc :selected').val();
  var antenne = 'test';
  $('.santenneyerror').hide();
  if (data != '') {
    $.ajax({
      type: 'GET',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('get_demand_article', {
        id: data,
        antenne_id: antenne
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        var data = JSON.parse(result);
        $('.article_disponible_Rc').html(data);
        $('.article_disponible_Rc select').select2();
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, {
          timeOut: 4000
        });
      }
    });
  }
});
var quanttityDisponible;
$('body').on('change', '.select2_demo_antenne', function () {
  // alert('nnnn')
  if ($('.select2_demo_antenne :selected').val() != 'null') {
    // console.log($('.select2_demo_antenne :selected').val());
    table7.columns(0).search($('.select2_demo_antenne :selected').val()).draw();
  } else {
    table7.columns(0).search('').draw();
  }
});

// Initialize an empty array to hold the selected articles
var ArraysOfArticle = [];

// Listen for a click on the "add article" button
$('body').on('click', '.add_article_stock_active', function () {
  // Find all the relevant elements
  var allElements = $('.add_article_stock_active').closest('.parrentArticle');
  var articleId = allElements.find('.article_disponible :selected').val();
  var articleName = allElements.find('.article_disponible :selected').attr('data-name');
  var quantityDisponible = allElements.find('.article_disponible :selected').attr('data-q');
  var quantitty = allElements.find('.quantitty').val();
  var prixVente = allElements.find('.prix_vente').val();
  var Conditionnement = allElements.find('.Conditionnement').val();
  var conditionnement_livre = allElements.find('.conditionnement_livre').val();
  var observation = allElements.find('.observation').val();
  // console.log(quantityDisponible, quantitty);

  // Validate the input fields
  if (+quantitty < 0) {
    toastr.error("Priere d'entre une valeur plus ou égale 0 ", 'Erreur', {
      timeOut: 4000
    });
  } else if (articleId === '') {
    toastr.error('choix article !', 'Erreur', {
      timeOut: 4000
    });
  } else if (quantitty === '') {
    toastr.error('Entrée la quantité !', 'Erreur', {
      timeOut: 4000
    });
  } else if (prixVente === '') {
    toastr.error('Entrée prix de vente !', 'Erreur', {
      timeOut: 4000
    });
  } else {
    // Check if the article has already been added
    var passe = true;
    ArraysOfArticle.map(function (article) {
      if (article.id == articleId) {
        passe = false;
        toastr.error('Erreur', 'Article déja exist', {
          timeOut: 4000
        });
      }
    });
    if (passe) {
      // If the condition is met, push the new article object to the array
      ArraysOfArticle.push({
        id: articleId,
        name: articleName,
        quantityDisponible: quantityDisponible,
        quantitty: quantitty,
        prixVente: prixVente,
        observation: observation,
        conditionnement_livre: conditionnement_livre
      });
      // Remove any existing HTML elements with class "appendElement"
      $('.appendElement').remove();
      // Create a new HTML table row element for each article in the array and append them to two different HTML elements
      var html;
      ArraysOfArticle.forEach(function (article, i) {
        html += "<tr class=\"appendElement\">     \n                    <td> ".concat(i + 1, "</td>\n                    <td> ").concat(article.id, " ").concat(article.name, " </td>\n                    <td class=\"quantity_input\">\n                        ").concat(article.quantitty, "\n                    </td>\n                    <td class=\"prixVente_input\">\n                        ").concat(article.prixVente, "\n                    </td>\n                    <td >\n                    ").concat(article.observation, "\n                </td>\n                    <td> \n                        <a style=\"padding: 7px ;\" data-id=\"").concat(article.id, "\" class=\"editArticle btn-icon-detail btn btn-white btn-warning btn-outline  btn-xs my-button2 upper waves-effect waves-light\"> \n                            <i class=\" fa  fa-edit\" aria-hidden=\"true\"></i>\n                         </a> \n                        <a style=\"padding: 7px ;\" data-id=\"").concat(article.id, "\" class=\"deleteArticle btn-icon-detail btn btn-white btn-danger btn-outline  btn-xs my-button2 upper waves-effect waves-light\"> \n                            <i class=\" fa  fa-trash\" aria-hidden=\"true\"></i>\n                         </a> \n                    </td>\n                  <tr>");
      });

      // Append the new HTML elements to two different HTML elements with classes "article_disponible_Rc" and "article_disponible"
      $('.article_disponible_Rc').prepend(html);
      $('.article_disponible').prepend(html);
    }
  }
});
$('.ddl_unite').on('change', function () {
  ArraysOfArticle = [];
});
$('body').on('click', '.deleteArticle', function () {
  var element = $(this).parent().parent();
  // console.log(element);
  var id = $(this).attr('data-id');
  var NewArray = ArraysOfArticle.filter(function (article) {
    return article.id != id;
  });
  ArraysOfArticle = NewArray;
  element.remove();
  console.log(ArraysOfArticle);
});
$('body').on('click', '.editArticle', function () {
  var id = $(this).attr('data-id');
  var element = $(this).parent().parent().find('.quantity_input');
  var prixVente_input = $(this).parent().parent().find('.prixVente_input');
  var article = ArraysOfArticle.find(function (article) {
    return article.id == id;
  });
  element.html("<input type=\"number\" data-id=\"".concat(article.id, "\" value=\"").concat(article.quantitty, "\" class=\" quantity_update form-control form-control-sm decimal_places\">"));
  prixVente_input.html("<input type=\"number\" data-id=\"".concat(article.id, "\" value=\"").concat(article.prixVente, "\" class=\" prixVente_update form-control form-control-sm decimal_places\">"));
  console.log(ArraysOfArticle);
});
$('body').on('keyup', '.quantity_update, .prixVente_update', function (e) {
  var tr = $(this).parents('tr');
  var id = tr.find('.quantity_update').attr('data-id');
  var quantitty = tr.find('.quantity_update').val();
  var prixVente = tr.find('.prixVente_update').val();
  var article = ArraysOfArticle.findIndex(function (article) {
    return article.id == id;
  });
  if (ArraysOfArticle[article].quantityDisponible >= +quantitty && +quantitty > 1) {
    ArraysOfArticle[article].quantitty = quantitty;
    ArraysOfArticle[article].prixVente = prixVente;
    tr.find('.quantity_update').parent().html(quantitty);
    tr.find('.prixVente_update').parent().html(prixVente);
  } else {
    $('body .alreadyQuantity').show();
    ArraysOfArticle[article].quantitty = quantitty;
    ArraysOfArticle[article].prixVente = prixVente;
    tr.find('.quantity_update').parent().html(quantitty);
    tr.find('.prixVente_update').parent().html(prixVente);
    toastr.warning("Priere d'entre une valeur moin ou egale " + ArraysOfArticle[article].quantityDisponible, 'warning', {
      timeOut: 4000
    });
  }
});
$('#Demand_stock').on('click', function (e) {
  e.preventDefault();
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  var data = new FormData();
  data.append('Site_DE', $('.Site_DE :selected').val());
  data.append('Site_Rc', $('.Site_Rc :selected').val());
  data.append('typeOp', $('#first :selected').val());
  data.append('ddl_unite', $('#ddl_unite :selected').val());
  data.append('Observ', $('#Textarea1').val());
  data.append('articles', JSON.stringify(ArraysOfArticle));
  var Site_Rc = $('.Site_Rc :selected').val();
  var typeOp = $('#first :selected').val();
  var ddl_unite = $('#ddl_unite :selected').val();
  var Observ = $('#Textarea1').val();
  var articles = JSON.stringify(ArraysOfArticle);
  if (ArraysOfArticle == '' || Site_Rc == '' || typeOp == '' || ddl_unite == '' || Observ == '' || articles == '') {
    toastr.error('Veuillez saisir tout les champs !', {
      timeOut: 4000
    });
    return;
  }
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('New_demande_stock'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      var id = JSON.parse(result);
      console.log(id);
      toastr.success('Votre demande de stock a été bien effectué .', 'Succées', {
        timeOut: 4000
      });
      l.stop();
      window.open('/approvisionement/demandecab/show/' + id, '_self');
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$('#Livraison_Complete_demande').on('click', function (e) {
  var _$$ajax;
  e.preventDefault();
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  $('#Livraison_Partielle_demande').attr('disabled', true);
  $('.table-detail tbody tr i').remove();
  var trs = $('.table-detail tbody tr ');
  console.log(trs);
  var error = null;
  trs.map(function (tr) {
    var quantitySaisie = $(trs[tr]).find('.detInputQtlivre').val();
    var quantityDisponible = $(trs[tr]).find('.quantiteDisponible').text();
    $(trs[tr]).find('.detInputQtlivre').parent();
  });
  var detsQtlivre = [];
  var inputs = $('.detInputQtlivre');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();
    det['conditionnement_livre'] = $(inputs[i]).parent().parent().find('.conditionnement_livre').find(':selected').text();
    detsQtlivre.push(det);
  }
  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  var data = new FormData();
  console.log(detsQtlivre);
  data.append('id', id);
  data.append('detsQtlivre', json_arr);
  $.ajax((_$$ajax = {
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('Livraison_Complete_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.message === 'success') {
        toastr.success('Demande de stock a a été bien livrée .', 'Succées', {
          timeOut: 4000
        });
        window.open('/approvisionement/', '_self');
        l.stop();
      } else {
        l.stop();
        var errs = result.errors;
        var trs = $('.table-detail tbody tr');
        errs.map(function (ers) {
          trs.map(function (tr) {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr]).find('.detInputQtlivre').parent().append('<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>');
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      $('#Livraison_Partielle_demande').attr('disabled', false);
      l.stop();
    },
    cache: false
  }, _defineProperty(_$$ajax, "contentType", false), _defineProperty(_$$ajax, "processData", false), _$$ajax));
});
$('#anuller_demande').on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  var data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('anuller_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      toastr.success('Demande de stock a été bien anuller .', 'Succées', {
        timeOut: 4000
      });
      $('#anuller_demande').remove();
      $('#valider_demande').remove();
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$('#prete_demande').on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  var data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('prete_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      toastr.success('Bien enregistre.', 'Succées', {
        timeOut: 4000
      });
      window.location.reload();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$('#envoyer_demande').on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  console.log(id);
  var data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_Envoyer_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      toastr.success('Demande de stock a été bien envoyée .', 'Succées', {
        timeOut: 4000
      });
      window.open('/approvisionement/', '_self');
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$('#Livraison_Partielle_demande').on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  $('#Livraison_Complete_demande').attr('disabled', true);
  var detsQtlivre = [];
  var inputs = $('.detInputQtlivre');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();
    detsQtlivre.push(det);
  }
  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  var data = new FormData();
  data.append('id', id);
  data.append('detsQtlivre', json_arr);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('Livraison_Partielle_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        window.open('/approvisionement/', '_self');
        l.stop();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $('#Livraison_Complete_demande').attr('disabled', false);
        l.stop();
      } else if (result.code == 400) {
        l.stop();
        var errs = result.errors;
        var trs = $('.table-detail tbody tr');
        errs.map(function (ers) {
          trs.map(function (tr) {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr]).find('.detInputQtlivre').parent().append('<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>');
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      $('#Livraison_Complete_demande').attr('disabled', false);
      l.stop();
    }
  });
});

// start
$('#btn_save_qty_liv').on('click', function (e) {
  // var l = Ladda.create(document.activeElement);

  var detsQtlivre = [];
  var inputs = $('.QUANTITE_LIVREE');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();
    detsQtlivre.push(det);
  }
  // l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  var data = new FormData();
  data.append('id', id);
  data.append('detsQtlivre', json_arr);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('LivraisonPararticle'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
        l.stop();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $('#Livraison_Complete_demande').attr('disabled', false);
        l.stop();
      } else if (result.code == 400) {
        l.stop();
        var errs = result.errors;
        var trs = $('.table-detail tbody tr');
        errs.map(function (ers) {
          trs.map(function (tr) {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr]).find('.detInputQtlivre').parent().append('<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>');
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      $('#Livraison_Complete_demande').attr('disabled', false);
      l.stop();
    }
  });
});

// end

$('body').on('click', '.action2', function () {
  $('.list_actions_bloc').toggle($('.action2').filter(':checked').length >= 1);
});
$('body').on('change', '._demandestk_facture', function (e) {
  if ($(this).val() != '') {
    var _array_ids = [];
    $.each($('input[name=_action2]:checked'), function () {
      _array_ids.push($(this).val());
    });
    if (_array_ids) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: 'Confirmation ?',
        html: '<p style="font-size: 18px;">Voulez vous vraiment affectuer cette demande stock autant que demande d\'achat et devis ?</p>' +
        // added paragraph
        '<input type="text" id="inputValue" class="form-control" placeholder="Enter Object pour devise et demande achat ...">',
        inputPlaceholder: 'Enter value',
        type: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check' aria-hidden='true'></i> Oui, Facture ",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler "
      }).then(function (result) {
        if (result.value) {
          var inputValue = $('#inputValue').val();
          if (!inputValue) {
            toastr.error('Enter a value for Object.', 'Error', {
              timeOut: 4000
            });
            return;
          } else {
            $('#loading-spinner').show();
            $.ajax({
              type: 'POST',
              url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_facture_receipt'),
              data: {
                _array_ids: _array_ids,
                inputValue: inputValue
              },
              success: function success(result) {
                if (result.code == 200) {
                  table.ajax.reload();
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000
                  });
                }
                table13.ajax.reload(function () {
                  $('#loading-spinner').hide();
                });
              },
              error: function error(jqXHR, textStatus, errorThrown) {
                toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
                  timeOut: 4000
                });
                $('#loading-spinner').hide();
              }
            });
          }
        }
      });
    }
  }
});
$('.ddl_site').on('change', function () {
  var selectedId = $(this).val();
  $.ajax({
    type: 'post',
    url: '/stock/demande/rempselectunite/' + selectedId,
    success: function success(data) {
      $('.ddl_unite').html(data);
      console.log(data);
    }
  });
});
$('#chiffrer_demande').on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  var DetsPrix = [];
  var inputs = $('.detInputPrix');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['prix'] = $(inputs[i]).val();
    DetsPrix.push(det);
  }
  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(DetsPrix);
  var data = new FormData();
  data.append('id', id);
  data.append('DetsPrix', json_arr);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('stock_chiffrer_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      toastr.success('Demande de stock a été bien chiffrée .', 'Succées', {
        timeOut: 4000
      });
      window.open('/approvisionement/', '_self');
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$('#valider_demande').on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  var data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('valider_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      toastr.success('Demande de stock a été Validée .', 'Succées', {
        timeOut: 4000
      });
      window.open('/approvisionement/', '_self');
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
var idarticle = [];
var iddet = [];
$('body').on('click', '#gridAF1 tbody tr input', function (e) {
  if ($(this).is(':checked')) {
    idarticle.push($(this).attr('id'));
  } else {
    var index = idarticle.indexOf($(this).attr('id'));
    idarticle.splice(index, 1);
  }
  console.log(idarticle);
});
$('body').on('click', '#Affecter_Demand', function (e) {
  e.preventDefault();
  if ($('#antenne').val() == '' || !idarticle) {
    toastr.error('Merci de choisir une ligne ou un antenne .', 'error', {
      timeOut: 4000
    });
  } else {
    idarticle.forEach(function (id) {
      var idtr = '#gridAF1 tbody tr.art' + id;
      $('#gridAF2 tbody').append("<tr id=" + id + ">\n              <td>" + $(idtr).find('.art').attr('data-id') + "</td>\n              <td>" + $(idtr).find('.qte').attr('data-id') + "</td>\n              <td>" + $(idtr).find('.prix').attr('data-id') + "</td>\n              <td id=" + $('#antenne').val() + ">" + $('#antenne option:selected').text() + "</td>\n            </tr>");
      $(idtr).remove();
      var aa = id + '/' + $('#antenne').val();
      iddet.push(aa);
    });
    idarticle = [];
  }
});
$('body').on('click', '#save_new_demand', function (e) {
  e.preventDefault();
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  l.start();
  if ($.trim($('#gridAF1 tbody').html()) == '') {
    var jsonString = JSON.stringify(iddet);
    var id_cab = $('.dmcabid').attr('id');
    $.ajax({
      type: 'POST',
      url: '/stock/demande/Enregister_Demande/' + id_cab,
      data: jsonString,
      processData: false,
      contentType: false,
      success: function success(result) {
        toastr.success(result, 'Succées', {
          timeOut: 4000
        });
        window.location.replace('/approvisionement');
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, {
          timeOut: 4000
        });
        l.stop();
      }
    });
  } else {
    toastr.error('Merci de choisir tout lignes  .', 'error', {
      timeOut: 4000
    });
    l.stop();
  }
});
$('body').on('click', '#gridAF3 tbody tr input', function (e) {
  if ($(this).is(':checked')) {
    idarticle.push($(this).attr('id'));
  } else {
    var index = idarticle.indexOf($(this).attr('id'));
    idarticle.splice(index, 1);
  }
});
$('body').on('click', '#Affecter_article_Rc', function (e) {
  e.preventDefault();
  if ($('#antenne').val() == '' || !idarticle) {
    toastr.error('Merci de choisir une ligne et un antenne et un type .', 'error', {
      timeOut: 4000
    });
  } else if ($('#status').val() == '') {
    toastr.error('Merci de CHOIX TYPE .', 'error', {
      timeOut: 4000
    });
  } else {
    idarticle.forEach(function (id) {
      var idtr = '#gridAF3 tbody tr.art' + id;
      $('#gridAF4 tbody').append("<tr id=" + id + ">\n            <td>" + $(idtr).find('.id').text() + "</td>\n            <td>" + $(idtr).find('.art').text() + "</td>\n            <td>" + $(idtr).find('.qte').attr('data-id') + "</td>\n            <td>" + $(idtr).find('.prix').attr('data-id') + "</td>\n            <td id=" + $('#antenne').val() + ">" + $('#antenne option:selected').text() + "</td>\n            <td id=" + $('#status').val() + ">" + $('#status option:selected').text() + "</td>\n          </tr>");
      var aa = $(idtr).find('.art').attr('data-id') + '|' + $('#antenne').val() + '|' + $('#status').val() + '|' + $(idtr).find('.qte').attr('data-id');
      $(idtr).remove();
      iddet.push(aa);
    });
    idarticle = [];
  }
});
$('body').on('click', '#Save_article_to_magasin', function (e) {
  e.preventDefault();
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  l.start();
  if ($.trim($('#gridAF3 tbody').html()) == '') {
    var formData = new FormData();
    var jsonString = JSON.stringify(iddet);
    var idLiv = $('.livId').attr('id');
    var typeMouvement = $('#status').val();
    formData.append('jsonString', jsonString);
    formData.append('typeMouvement', typeMouvement);
    $.ajax({
      type: 'POST',
      url: '/stock/demande/Enregistrer_Article/' + idLiv,
      data: formData,
      processData: false,
      contentType: false,
      success: function success(result) {
        toastr.success(result, 'Succées', {
          timeOut: 4000
        });
        // window.location("/stock/demande/ArticleRc");
        // '/stock/demande/', "_self"
        window.open('/stock/demande/ArticleRc', '_self');
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error('Erreur', errorThrown, {
          timeOut: 4000
        });
        l.stop();
      }
    });
  } else {
    'Merci de choisir tout lignes  .', 'error', {
      timeOut: 4000
    };
    l.stop();
  }
});
$('body').on('click', '.class_pop', function (e) {
  var myInputVal = $('.myInput').val();
  // Clean value of myInput
  var cleanVal = $.trim(myInputVal);
  // Set clean value to myInput
  $('.myInput').val(cleanVal);
  // Set focus on myInput
  $('.myInput').focus();
  // Reload the page
  location.reload();
});
$(document).ready(function () {
  $('.myInput').keypress(function (event) {
    var codeart = $(this).val();
    var id = $(this).attr('data-id');
    if (event.keyCode == 13) {
      event.preventDefault();
      $.ajax({
        type: 'GET',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('checkCodeArticle', {
          codeart: codeart,
          demande: id
        }),
        processData: false,
        contentType: false,
        success: function success(result) {
          $('#exampleModal').find('#content_produit').html(result);
          $('#exampleModal').modal('show');
          $('.myInput').val();
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          toastr.error('produit que vous scannez introuvable dans la demande Stock .', 'Erreur', {
            timeOut: 4000
          });
          l.stop();
        }
      });
    }
  });
});

///  Start new Modal
$(document).on('click', '#up', function (event) {
  event.preventDefault();
  var inputValue = parseInt($('#incdec input').val()) + 1;
  if (inputValue >= $('#input1').val()) {
    inputValue = $('#input1').val();
  }
  $('#incdec input').val(inputValue);
});
$(document).on('click', '#down', function (event) {
  event.preventDefault();
  var inputValue = parseInt($('#incdec input').val()) - 1;
  // Check if the input value is less than 0, if so, set it to 0
  if (inputValue < 0) {
    inputValue = 0;
  }
  $('#incdec input').val(inputValue);
});
var antenneValues = []; // Declare the antenneValues array outside the click event handler

// Click event handler for checkboxes
$('body').on('click', '.check_antenne', function () {
  // Clear the antenneValues array before adding values
  antenneValues = [];

  // Loop through all the checked checkboxes with class "check_antenne"
  $('.check_antenne:checked').each(function () {
    // Add the value of each checked checkbox to the antenneValues array
    antenneValues.push($(this).val());
  });
  table3.ajax.reload();
});
document.addEventListener('DOMContentLoaded', function () {
  // Set focus on the input field with the specified class and placeholder
  var inputField = document.querySelector('.myInput');
  inputField.focus();
});

// Click event handler for #checkDemande
$('body').on('click', '#checkDemande', function () {
  $('#checkRetour').val('off');
  $(this).val('Demande');
  table3.ajax.reload();
});

// Click event handler for #checkRetour
$('body').on('click', '#checkRetour', function () {
  $('#checkDemande').val('off');
  $(this).val('Retour');
  table3.ajax.reload();
});
var table3 = $('#Stoock_Verifier').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('verifier_stock_cab'),
    type: 'get',
    data: function data(d) {
      d.demande = $('#checkDemande').val();
      d.retour = $('#checkRetour').val();
      d.antenneValues = JSON.stringify(antenneValues); // Convert array to JSON string and add to data object
    }
  },

  deferRender: true,
  stateSave: false,
  stateSaveParams: function stateSaveParams(settings, data) {
    // Save the search input value
    data.search.value = $('#Stoock_Verifier_filter input').val();
  },
  lengthMenu: [[10, 20, 50, 100, 200], [10, 20, 50, 100, 200]],
  pageLength: 10,
  columns: [{
    width: '5%',
    searchable: true,
    targets: [0]
  }, {
    width: '20%'
  }, {
    width: '20%'
  }, {
    width: '20%'
  }, {
    width: '20%'
  },
  // { width: '20%' },

  {
    orderable: false,
    width: '20%'
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: 'btn btn-flat btn-restaurer btn-xs btn-xs-table',
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('datatables_langue'),
    processing: true
  },
  initComplete: function initComplete(settings, json) {
    $('#Stoock_Verifier_filter input').attr('size', '30').focus();
  }
});
$('#Livraison_Partielle_demande_details').on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  var detsQtlivre = [];
  var inputs = $('.detInputQtlivre');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();
    detsQtlivre.push(det);
  }
  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  var data = new FormData();
  data.append('id', id);
  data.append('detsQtlivre', json_arr);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('Livraison_Partielle_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        window.open('/approvisionement/Verifier/', '_self');
        l.stop();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        l.stop();
      } else if (result.code == 400) {
        l.stop();
        var errs = result.errors;
        var trs = $('.table-detail tbody tr');
        errs.map(function (ers) {
          trs.map(function (tr) {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr]).find('.detInputQtlivre').parent().append('<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>');
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$('#Livraison_Complete_demande_details').on('click', function (e) {
  var _$$ajax2;
  e.preventDefault();
  var l = ladda__WEBPACK_IMPORTED_MODULE_29__["create"](document.activeElement);
  $('#Livraison_Partielle_demande').attr('disabled', true);
  $('.table-detail tbody tr i').remove();
  var trs = $('.table-detail tbody tr ');
  var error = null;
  trs.map(function (tr) {
    var quantitySaisie = $(trs[tr]).find('.detInputQtlivre').val();
    var quantityDisponible = $(trs[tr]).find('.quantiteDisponible').text();
    $(trs[tr]).find('.detInputQtlivre').parent();
  });
  var detsQtlivre = [];
  var inputs = $('.detInputQtlivre');
  for (var i = 0; i < inputs.length; i++) {
    var det = {};
    det['id'] = $(inputs[i]).attr('id');
    det['qt_livre'] = $(inputs[i]).val();
    det['conditionnement_livre'] = $(inputs[i]).parent().parent().find('.conditionnement_livre').find(':selected').text();
    detsQtlivre.push(det);
  }
  l.start();
  var id = $(this).attr('data-id');
  var json_arr = JSON.stringify(detsQtlivre);
  var data = new FormData();
  console.log(detsQtlivre);
  data.append('id', id);
  data.append('detsQtlivre', json_arr);
  $.ajax((_$$ajax2 = {
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_26___default.a.generate('Livraison_Complete_demande'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.message === 'success') {
        toastr.success('Demande de stock a a été bien livrée .', 'Succées', {
          timeOut: 4000
        });
        window.open('/approvisionement/Verifier/', '_self');
        l.stop();
      } else {
        l.stop();
        var errs = result.errors;
        var trs = $('.table-detail tbody tr');
        errs.map(function (ers) {
          trs.map(function (tr) {
            if ($(trs[tr]).attr('class') == ers) {
              $(trs[tr]).find('.detInputQtlivre').parent().append('<i class="fa fa-exclamation-triangle text-danger ml-2" style="font-size: 12px;"></i>');
            }
          });
        });
        toastr.error('quantité introuvable en stock', 'Error', {
          timeOut: 4000
        });
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
      l.stop();
    },
    cache: false
  }, _defineProperty(_$$ajax2, "contentType", false), _defineProperty(_$$ajax2, "processData", false), _$$ajax2));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/demand_stock/demande.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~demande",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9kZW1hbmRfc3RvY2svZGVtYW5kZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJTaG93Rm9ybUVycm9ycyIsInNlbGVjdG9yIiwiZm9ybV9uYW1lIiwiZXJyb3JzIiwiaWQiLCJpc0dyb3VwZSIsIiQiLCJyZW1vdmUiLCJqUXVlcnkiLCJlYWNoIiwidmlvbGF0aW9ucyIsImkiLCJ2YWwiLCJjb2x1bW5OYW1lIiwieCIsInByb3BlcnR5UGF0aCIsInNlYXJjaCIsInNlcGFyYXRvcnMiLCJhcnIiLCJzcGxpdCIsIlJlZ0V4cCIsImpvaW4iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInBhcmVudCIsImFwcGVuZCIsInRpdGxlIiwiU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0iLCJvbiIsInRhYmxlMTMiLCJhamF4IiwicmVsb2FkIiwicHJvcCIsImNvbHVtbkRlZnMiLCJvcmRlcmFibGUiLCJ3aWR0aCIsInNlYXJjaGFibGUiLCJ0YXJnZXRzIiwidGFibGVTaG93MyIsIkRhdGFUYWJsZSIsInBhZ2luZyIsInVybCIsImdlbmVyYXRlIiwidHlwZSIsImRhdGEiLCJkIiwiZGVtYW5kZSIsInRvdXR0dCIsInBvc3Rpb24iLCJkZWZlclJlbmRlciIsInN0YXRlU2F2ZSIsIm9yZGVyIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJjb2x1bW5zIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJjaGVja2JveGVzIiwiaXMiLCJ0YWJsZSIsInNlcnZlclNpZGUiLCJuYW1lIiwidmlzaWJsZSIsImZpeGVkSGVhZGVyIiwic2Nyb2xsWCIsInNlbGVjdDIiLCJ0YWJsZTQiLCJzZXR0aW5ncyIsImFwaSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJjbG9zZXN0IiwiYXR0ciIsImhyZWYiLCJncmlkMiIsInRhYmxlMyIsInRhYmxlNiIsInRhYmxlOSIsInRhYmxlMTAiLCJ0YWJsZTExIiwidGFibGU3IiwidGFibGU1IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidGFibGUyIiwiY2hhbmdlIiwiZHRhIiwiRm9ybURhdGEiLCJhY3Rpb25fdGVzdCIsInQiLCJnZXQiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsImNvZGUiLCJtZXNzYWdlIiwiY3NzIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uX3Rlc3QyIiwiY2hlY2tlZCIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0Iiwic3RvcCIsImVtcHR5IiwiY2xpY2siLCJyb3ciLCJyZXNwb25zZUpTT04iLCJoaWRlIiwiSlNPTiIsInBhcnNlIiwiaHRtbCIsInRyIiwicGFyZW50cyIsInByaXhWZW50ZSIsImFudGVubmUiLCJhbnRlbm5lX2lkIiwiX2pxWEhSIiwicXVhbnR0aXR5RGlzcG9uaWJsZSIsImRyYXciLCJBcnJheXNPZkFydGljbGUiLCJhbGxFbGVtZW50cyIsImFydGljbGVJZCIsImFydGljbGVOYW1lIiwicXVhbnRpdHlEaXNwb25pYmxlIiwicXVhbnRpdHR5IiwiQ29uZGl0aW9ubmVtZW50IiwiY29uZGl0aW9ubmVtZW50X2xpdnJlIiwib2JzZXJ2YXRpb24iLCJwYXNzZSIsIm1hcCIsImFydGljbGUiLCJwdXNoIiwiZm9yRWFjaCIsInByZXBlbmQiLCJlbGVtZW50IiwiTmV3QXJyYXkiLCJmaWx0ZXIiLCJwcml4VmVudGVfaW5wdXQiLCJmaW5kSW5kZXgiLCJzaG93Iiwic3RyaW5naWZ5IiwiU2l0ZV9SYyIsInR5cGVPcCIsImRkbF91bml0ZSIsIk9ic2VydiIsImFydGljbGVzIiwib3BlbiIsInRycyIsInF1YW50aXR5U2Fpc2llIiwiZGV0c1F0bGl2cmUiLCJpbnB1dHMiLCJkZXQiLCJqc29uX2FyciIsImVycnMiLCJlcnMiLCJjYWNoZSIsInRvZ2dsZSIsIl9hcnJheV9pZHMiLCJpbnB1dFBsYWNlaG9sZGVyIiwiaW5wdXRWYWx1ZSIsInNlbGVjdGVkSWQiLCJEZXRzUHJpeCIsImlkYXJ0aWNsZSIsImlkZGV0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaWR0ciIsImFhIiwidHJpbSIsImpzb25TdHJpbmciLCJpZF9jYWIiLCJyZXBsYWNlIiwiZm9ybURhdGEiLCJpZExpdiIsInR5cGVNb3V2ZW1lbnQiLCJteUlucHV0VmFsIiwiY2xlYW5WYWwiLCJmb2N1cyIsInJlYWR5Iiwia2V5cHJlc3MiLCJldmVudCIsImNvZGVhcnQiLCJrZXlDb2RlIiwibW9kYWwiLCJwYXJzZUludCIsImFudGVubmVWYWx1ZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5wdXRGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXRvdXIiLCJzdGF0ZVNhdmVQYXJhbXMiLCJpbml0Q29tcGxldGUiLCJqc29u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RUFBSztVQUNoQlAsR0FBRyxDQUFDbEIsR0FBRyxDQUFDLFVBQUNsQixFQUFFLEVBQUs7WUFDZCxJQUFJbEosQ0FBQyxDQUFDc0wsR0FBRyxDQUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSXFHLEdBQUcsRUFBRTtjQUNuQzdMLENBQUMsQ0FBQ3NMLEdBQUcsQ0FBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQ1AvSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FDeEJDLE1BQU0sRUFBRSxDQUNSQyxNQUFNLENBQ0wsc0ZBQXNGLENBQ3ZGO1lBQ0w7VUFDRixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7UUFDRjZDLE1BQU0sQ0FBQzJELEtBQUssQ0FBQywrQkFBK0IsRUFBRSxPQUFPLEVBQUU7VUFDckR6RCxPQUFPLEVBQUU7UUFDWCxDQUFDLENBQUM7TUFDSjtJQUNGLENBQUM7SUFDRHlELEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQy9DOUQsTUFBTSxDQUFDMkQsS0FBSyxDQUFDLFFBQVEsRUFBRUcsV0FBVyxFQUFFO1FBQUU1RCxPQUFPLEVBQUU7TUFBSyxDQUFDLENBQUM7TUFDdERnRSxDQUFDLENBQUNLLElBQUksRUFBRTtJQUNWLENBQUM7SUFDRHFELEtBQUssRUFBRTtFQUFLLDRDQUNDLEtBQUssNENBQ0wsS0FBSyxhQUNsQjtBQUNKLENBQUMsQ0FBQyxDIiwiZmlsZSI6ImRlbWFuZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgalF1ZXJ5LmVhY2goZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgIGlmKGlzR3JvdXBlID09IHRydWUpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0geDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBpZiAoeC5zZWFyY2goJ1xcXFxbJykgIT0gLTEgJiYgeC5zZWFyY2goJ1xcXFxdJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHNlcGFyYXRvcnMgPSBbJ1xcXFxdJywgJ1xcXFxbJ107XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9ycy5qb2luKCd8JykpKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnZGF0YS4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4KVxyXG5cclxuLyp2w6lyaWZpZXIgcydpbCBzJ2FnaXQgZCd1bmUgZm9ybXVsYWlyZSBhdmVjIHVuIGNoYW1wIHR5cGUgZmlsZSAqL1xyXG4gICAgICAgIGlmICghalF1ZXJ5KFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBjb2x1bW5OYW1lICsgJ19maWxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWUpO1xyXG4gICAgICAgIGlmIChjb2x1bW5OYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpXHJcbiAgICAgICAgICAgIHNlbGVjdG9yLmZpbmQoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0oc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIrc2VsZWN0b3IpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9ycyArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxuLy8gRXZlbnQgaGFuZGxlciBmb3Igc3RhdHVzIHNlbGVjdCBjaGFuZ2VcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnI3N0YXR1c1NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcclxuICB0YWJsZTEzLmFqYXgucmVsb2FkKCk7XHJcbiAgJCgnI3NlbGVjdC1hbGwnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG59KTtcclxuXHJcbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFRvdXRzX0NsaWVudCBjaGFuZ2VcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnI1RvdXRzX0NsaWVudCcsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjc2VsZWN0LWFsbCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgdGFibGUxMy5hamF4LnJlbG9hZCgpO1xyXG59KTtcclxuXHJcbi8vIEV2ZW50IGhhbmRsZXIgZm9yIHBvc3Rpb24gY2hhbmdlXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJyNwb3N0aW9uJywgZnVuY3Rpb24gKCkge1xyXG4gIHRhYmxlMTMuYWpheC5yZWxvYWQoKTtcclxuICAkKCcjc2VsZWN0LWFsbCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbn0pO1xyXG5cclxuLy8gRGF0YVRhYmxlcyBjb25maWd1cmF0aW9uXHJcbnZhciBjb2x1bW5EZWZzID0gW1xyXG4gIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6ICc1JScsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IDAgfSxcclxuICB7IHdpZHRoOiAnMjAlJyB9LFxyXG4gIHsgd2lkdGg6ICcyMCUnIH0sXHJcbiAgeyB3aWR0aDogJzIwJScgfSxcclxuICB7IHdpZHRoOiAnMjAlJyB9LFxyXG4gIHsgd2lkdGg6ICcyMCUnIH0sXHJcbiAgeyB3aWR0aDogJzIwJScgfSxcclxuICB7IHdpZHRoOiAnMjAlJyB9LFxyXG4gIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6ICcyMCUnIH0sXHJcbl07XHJcblxyXG52YXIgdGFibGVTaG93MyA9ICQoJyNkYXRhdGFibGUtc2hvdzMnKS5EYXRhVGFibGUoeyBwYWdpbmc6IGZhbHNlIH0pO1xyXG5cclxudmFyIHRhYmxlMTMgPSAkKCcjZ3JpZDEzJykuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2xpc3RfZGVtYW5kZV9zdG9ja19jYWInKSxcclxuICAgIHR5cGU6ICdnZXQnLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKGQpIHtcclxuICAgICAgZC5kZW1hbmRlID0gJCgnI3N0YXR1c1NlbGVjdCcpLnZhbCgpO1xyXG4gICAgICBkLnRvdXR0dCA9ICQoJyNUb3V0c19DbGllbnQnKS52YWwoKTtcclxuICAgICAgZC5wb3N0aW9uID0gJCgnI3Bvc3Rpb24nKS52YWwoKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgb3JkZXI6IFtbMCwgJ2Rlc2MnXV0sXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgLTFdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgJ0FsbCddLFxyXG4gIF0sXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgY29sdW1uczogY29sdW1uRGVmcyxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGUnLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUxMy5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFwiU2VsZWN0IEFsbFwiIGNoZWNrYm94XHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJyNzZWxlY3QtYWxsJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKCcjcG9zdGlvbicpLnZhbCgpICE9IDUpIHtcclxuICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAnc2VsZWN0IGxpdnJhaXNvbiBjbG90dXJlIHBvdXIgc2VsZWN0IHRvdXQgLi4uICcsXHJcbiAgICAgICd3YXJuaW5nJyxcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBjaGVja2JveGVzID0gJCgnLmFjdGlvbjInKTtcclxuICAgIGNoZWNrYm94ZXMucHJvcCgnY2hlY2tlZCcsICQodGhpcykuaXMoJzpjaGVja2VkJykpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG52YXIgdGFibGUgPSAkKCcjZ3JpZDE3JykuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6ICcvc3RvY2svZGVtYW5kZS9saXN0X3JlY2VwdGlvbicgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgdHlwZTogJ2dldCcsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBvcmRlcjogW1swLCAnZGVzYyddXSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgY2xhc3NOYW1lOiAncGQtbGl2Jywgd2lkdGg6ICczJScsIG5hbWU6ICd0YWIuaWQnIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgbmFtZTogJ3RhYi5jb2RlJyxcclxuICAgICAgY2xhc3NOYW1lOiAndGQtY29kZWxpdiBwZC1saXYnLFxyXG4gICAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBjbGFzc05hbWU6ICdwZC1saXYnLCBuYW1lOiAndGFiLmRhdGVEb2NBc3NvJyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIGNsYXNzTmFtZTogJ3BkLWxpdicsIG5hbWU6ICd0YWIucmVmRG9jQXNzbycgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBjbGFzc05hbWU6ICdwZC1saXYnLCBuYW1lOiAndGFiLmRlc2NyaXB0aW9uJyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIGNsYXNzTmFtZTogJ3BkLWxpdicsIG5hbWU6ICd0YWIuc29jaWV0ZScgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBjbGFzc05hbWU6ICd0ZC1udW1iZXIgcGQtbGl2JywgbmFtZTogJ3RhYi5odCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBjbGFzc05hbWU6ICd0ZC1udW1iZXIgcGQtbGl2JywgbmFtZTogJ3RhYi50dmEnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgY2xhc3NOYW1lOiAndGQtbnVtYmVyIHBkLWxpdicsIG5hbWU6ICd0YWIudHRjJyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIGNsYXNzTmFtZTogJ3BkLWxpdicsIG5hbWU6ICd0YWIuY29kZV9jb21tYW5kZScgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBjbGFzc05hbWU6ICdwZC1saXYnLCBuYW1lOiAndGFiLmNvZGVfZmFjdHVyZScgfSxcclxuICAgIHtcclxuICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgY2xhc3NOYW1lOiAnZmFjIHBkLWxpdicsXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgIGNsYXNzTmFtZTogJ3JnIHBkLWxpdicsXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgY2xhc3NOYW1lOiAncGQtbGl2JywgbmFtZTogJ3RhYi5wb3NpdGlvbl9hY3R1ZWwnIH0sXHJcbiAgICAvLyB7IG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogZmFsc2UsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIC8vIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgY2xhc3NOYW1lOiBcImJlY1wiIH0sXHJcbiAgICAvLyB7IFwid2lkdGhcIjogXCI1JVwiLCBcIm9yZGVyYWJsZVwiOiB0cnVlLCBjbGFzc05hbWU6IFwicmdcIiB9LFxyXG4gIF0sXHJcbiAgY29sdW1uRGVmczogW1xyXG4gICAge1xyXG4gICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgdGFyZ2V0czogMTQsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgZG9tOiAnPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiZj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGUnLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxuICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICBzY3JvbGxYOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoJy5zZWwyJykuc2VsZWN0MigpO1xyXG5cclxudmFyIHRhYmxlNCA9ICQoJyNncmlkNCcpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb3V2ZW1lbnRfc3RvY2tfbGlzdF9ub3JtYWwyJykgKyBsb2NhdGlvbi5zZWFyY2gsXHJcbiAgICB0eXBlOiAnZ2V0JyxcclxuICB9LFxyXG4gIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcblxyXG4gIG9yZGVyOiBbWzAsICdkZXNjJ11dLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ212LmlkJyB9LFxyXG5cclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdtdi5zb3VyY2UnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdtdi5zb3VyY2VfY29kZScsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdkZXAudGl0cmUnLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzTmFtZTogJ21udC1mb3JtYXQnLFxyXG4gICAgICBuYW1lOiAnYXIudGl0cmUnLFxyXG4gICAgfSxcclxuICAgIC8qICAsXHJcbiAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnYXIuY29kZSdcclxuICAgICAgICAgIH0qL1xyXG5cclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdtdi5xdWFudGl0ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6ICdtbnQtZm9ybWF0JyxcclxuICAgICAgbmFtZTogJ212LnByaXh1bml0YWlyZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6ICdtbnQtZm9ybWF0JyxcclxuICAgICAgbmFtZTogJ212LnR2YScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6ICdtbnQtZm9ybWF0JyxcclxuICAgICAgbmFtZTogJ212LnJlbWlzZScsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdtdi5wcml4dHRjJyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjAwcHhcIn0sXHJcbiAgXSxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGUnLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxuICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG50YWJsZTQub24oJ2luaXQuZHQnLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhzdCk7XHJcbiAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gIC8vICAgICQuZWFjaChzdC5jb2x1bW5zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gIC8vICAgICAgICBpZiAodmFsdWUuc2VhcmNoLnNlYXJjaCAhPSBcIlwiKSB7XHJcbiAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAvLyAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAvLyAgICAgICAgfVxyXG4gIC8vICAgIH0pO1xyXG4gIC8vfVxyXG5cclxuICAvLyBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgW10sIFtdKTtcclxuICAvLyBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFtdLCBbXSk7XHJcbiAgLy8gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsMiwzLDQsNSw2LDcsOCw5LDEwXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAnLmNkX29wJywgZnVuY3Rpb24gKCkge1xyXG4gIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1X2RlcG90X3Nob3cnLCB7XHJcbiAgICBpZDogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJyksXHJcbiAgfSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxudmFyIGdyaWQyID0gJCgnI2dyaWQyJykuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6XHJcbiAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ21vdXZlbWVudF9zdG9ja19lbmNvdXJzX2xpc3RfdmVudGUnKSArIGxvY2F0aW9uLnNlYXJjaCxcclxuICAgIHR5cGU6ICdnZXQnLFxyXG4gIH0sXHJcbiAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuXHJcbiAgb3JkZXI6IFtbMCwgJ2Rlc2MnXV0sXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnZGV0LmlkJyB9LFxyXG5cclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdtdi5jYWIuZGF0ZURvY0Fzc28nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdjbHQubm9tJyxcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6ICdtbnQtZm9ybWF0JyxcclxuICAgICAgbmFtZTogJ2R2LmNvZGUnLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzTmFtZTogJ21udC1mb3JtYXQnLFxyXG4gICAgICBuYW1lOiAnY2FiLmNvZGUnLFxyXG4gICAgfSxcclxuICAgIC8qICAsXHJcbiAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnYXIuY29kZSdcclxuICAgICAgICAgIH0qL1xyXG5cclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdkZXAuY29kZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6ICdtbnQtZm9ybWF0JyxcclxuICAgICAgbmFtZTogJ2FyLmNvZGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdkZXQucXVhbnRpdGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdkZXQucHJpeHVuaXRhaXJlJyxcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6ICdtbnQtZm9ybWF0JyxcclxuICAgICAgbmFtZTogJ2RldC50dmEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiAnbW50LWZvcm1hdCcsXHJcbiAgICAgIG5hbWU6ICdkZXQudHZhJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzTmFtZTogJ21udC1mb3JtYXQnLFxyXG4gICAgICBuYW1lOiAnZGV0LnJlbWlzZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6ICdtbnQtZm9ybWF0JyxcclxuICAgICAgbmFtZTogJ2RldC5wcml4VHRjJyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjAwcHhcIn0sXHJcbiAgXSxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGUnLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxuICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG52YXIgdGFibGUzID0gJCgnI2dyaWQzJykuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vdXZlbWVudF9zdG9ja19lbmNvdXJzX2xpc3RfYWNoYXQnKSxcclxuICAgIHR5cGU6ICdnZXQnLFxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiAnMTBweCcsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMHB4JyB9LFxyXG4gIF0sXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICBjbGFzc05hbWU6ICdidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlJyxcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG52YXIgdGFibGU2ID0gJCgnI2dyaWQ2JykuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2xpc3RfYW50ZW5uZScpLFxyXG4gICAgdHlwZTogJ2dldCcsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBvcmRlcjogW1szLCAnZGVzYyddXSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6ICcxMHB4Jywgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gIF0sXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICBjbGFzc05hbWU6ICdidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlJyxcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG52YXIgdGFibGU5ID0gJCgnI2dyaWQ5JykuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2xpc3RfYW50ZW5uZScpLFxyXG4gICAgdHlwZTogJ2dldCcsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIG9yZGVyOiBbWzMsICdkZXNjJ11dLFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6ICcxMHB4Jywgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gIF0sXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICBjbGFzc05hbWU6ICdidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlJyxcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG52YXIgdGFibGUxMCA9ICQoJyNncmlkMTAnKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbGlzdF9hbnRlbm5lJyksXHJcbiAgICB0eXBlOiAnZ2V0JyxcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gIF0sXHJcbiAgb3JkZXI6IFtbMywgJ2Rlc2MnXV0sXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogJzEwcHgnLCBzZWFyY2hhYmxlOiB0cnVlLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgXSxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGUnLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcbnZhciB0YWJsZTExID0gJCgnI2dyaWQxMScpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdsaXN0X2FudGVubmUnKSxcclxuICAgIHR5cGU6ICdnZXQnLFxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gIG9yZGVyOiBbWzMsICdkZXNjJ11dLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiAnMTBweCcsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICBdLFxyXG4gIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgYnV0dG9uczogW1xyXG4gICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZScsXHJcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuXHJcbnZhciB0YWJsZTcgPSAkKCcjZ3JpZDcnKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbGlzdF9hbnRlbm5lX2RlcG90JyksXHJcbiAgICB0eXBlOiAnZ2V0JyxcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIG9yZGVyOiBbWzMsICdkZXNjJ11dLFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnYW5uLmNvZGUnLCB3aWR0aDogJzUlJyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdhbm4uZGVzaWduYXRpb24nIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ2Fubi5kZWZhdXQnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ2FydGljbGUnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3F1YW50aXRlJyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdhci5wcml4X2FjaGF0JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdkZXBvdC50aXRyZScgfSxcclxuICBdLFxyXG4gIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgYnV0dG9uczogW1xyXG4gICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZScsXHJcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuXHJcbnZhciB0YWJsZTUgPSAkKCcjZ3JpZDUnKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW91dmVtZW50X3N0b2NrX2VuY291cnNfbGlzdF90cmFuc2Zvcm1hdGlvbicpLFxyXG4gICAgdHlwZTogJ2dldCcsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgb3JkZXI6IFtbMywgJ2Rlc2MnXV0sXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6ICcxMHB4Jywgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMDBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTAwcHgnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6ICcxMHB4JyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiAnMTBweCcgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogJzEwcHgnIH0sXHJcbiAgXSxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGUnLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcblxyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFibGUuJCgndHIuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoJyNncmlkMiB0Ym9keScpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFibGUyLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKCcjZ3JpZDMgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhYmxlMy4kKCd0ci5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJCgnI2dyaWQ1IHRib2R5Jykub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YWJsZTUuJCgndHIuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoJyN2YWxpZCcpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG4gIC8vICBhbGVydCgkKHRoaXMpLnZhbCgpKTtcclxuICAvLyQoXCJmb3JtXCIpLnN1Ym1pdCgpO1xyXG4gIGlmICgkKHRoaXMpLnZhbCgpID09IDEpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKCcjYWN0aW9uX3Rlc3QnKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKGFjdGlvbl90ZXN0KTtcclxuICAgIC8vdmFyIGR0YSA9ICQoJyNhY3Rpb25fdGVzdCcpLnNlcmlhbGl6ZSgpXHJcbiAgICB2YXIgdCA9IGR0YS5nZXQoJ19hY3Rpb25bXScpO1xyXG4gICAgLy9hbGVydCggdCk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAvLyB2YXIgdD0xO1xyXG4gICAgaWYgKHQpIHtcclxuICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICB0aXRsZTogJ0NvbmZpcm1hdGlvbiA/JyxcclxuICAgICAgICAgIHRleHQ6ICdWb3VsZXogdm91cyB2cmFpbWVudCBWYWxpZGVyIGNldCBlbnJlZ2lzdHJlbWVudCA/JyxcclxuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpLCBWYWxpZGVyXCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgICAgICAgJ2RlcG90X21vdXZlbWVudF9zdG9ja192YWxpZGVyX3ZlbnRlX211bHRpcGxlJ1xyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICB0YWJsZTIuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgJCgnI3ZhbGlkJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLmFjdGlvbicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGxhY3Rpb25zJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgJ1ZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb24nLFxyXG4gICAgICAgICd3YXJuaW5nJyxcclxuICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJyN2YWxpZDMnKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgYWxlcnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgLy8kKFwiZm9ybVwiKS5zdWJtaXQoKTtcclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSAxKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCgnI2FjdGlvbl90ZXN0JykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YShhY3Rpb25fdGVzdCk7XHJcbiAgICAvL3ZhciBkdGEgPSAkKCcjYWN0aW9uX3Rlc3QnKS5zZXJpYWxpemUoKVxyXG4gICAgdmFyIHQgPSBkdGEuZ2V0KCdfYWN0aW9uW10nKTtcclxuICAgIC8vYWxlcnQoIHQpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgLy8gdmFyIHQ9MTtcclxuICAgIGlmICh0KSB7XHJcbiAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24gPycsXHJcbiAgICAgICAgICB0ZXh0OiAnVm91bGV6IHZvdXMgdnJhaW1lbnQgVmFsaWRlciBjZXQgZW5yZWdpc3RyZW1lbnQgPycsXHJcbiAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSwgVmFsaWRlclwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgICAgICdkZXBvdF9tb3V2ZW1lbnRfc3RvY2tfdmFsaWRlcl90cmFuc2Zvcm1hdGlvbl9tdWx0aXBsZSdcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyN2YWxpZDMnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuYWN0aW9uJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsbGFjdGlvbnMnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAnVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvbicsXHJcbiAgICAgICAgJ3dhcm5pbmcnLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnI3ZhbGlkMicpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG4gIC8vICBhbGVydCgkKHRoaXMpLnZhbCgpKTtcclxuICAvLyQoXCJmb3JtXCIpLnN1Ym1pdCgpO1xyXG4gIGlmICgkKHRoaXMpLnZhbCgpID09IDEpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKCcjYWN0aW9uX3Rlc3QyJykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YShhY3Rpb25fdGVzdDIpO1xyXG4gICAgdmFyIHQgPSBkdGEuZ2V0KCdfYWN0aW9uMltdJyk7XHJcbiAgICAvLyAgYWxlcnQodCk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcblxyXG4gICAgaWYgKHQpIHtcclxuICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICB0aXRsZTogJ0NvbmZpcm1hdGlvbiA/JyxcclxuICAgICAgICAgIHRleHQ6ICdWb3VsZXogdm91cyB2cmFpbWVudCBWYWxpZMOpIGNldCBlbnJlZ2lzdHJlbWVudCA/JyxcclxuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpLCBWYWxpZGVyIVwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgICAgICdkZXBvdF9tb3V2ZW1lbnRfc3RvY2tfdmFsaWRlcl9hY2hhdF9tdWx0aXBsZSdcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgdGFibGUzLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyN2YWxpZDInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxsYWN0aW9uczInKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAnVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvbicsXHJcbiAgICAgICAgJ3dhcm5pbmcnLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnLnRlc3QnKS5vbignc3VibWl0JywgJy5hY3Rpb25fdGVzdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHQgPSBkdGEuZ2V0KCdfYWN0aW9uW10nKTtcclxuICAvL2FsZXJ0KCB0KTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG5cclxuICBpZiAodCkge1xyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgIC5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICB0aXRsZTogJ0NvbmZpcm1hdGlvbiA/JyxcclxuICAgICAgICB0ZXh0OiAnVm91bGV6IHZvdXMgdnJhaW1lbnQgVmFsaWTDqSBjZXQgZW5yZWdpc3RyZW1lbnQgPycsXHJcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFZhbGlkw6khXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgICAnZGVwb3RfbW91dmVtZW50X3N0b2NrX3ZhbGlkZXJfdmVudGVfbXVsdGlwbGUnXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICdWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uJyxcclxuICAgICAgJ3dhcm5pbmcnLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcudGVzdDInKS5vbignc3VibWl0JywgJy5hY3Rpb25fdGVzdDInLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciB0ID0gZHRhLmdldCgnX2FjdGlvbjJbXScpO1xyXG4gIC8vICBhbGVydCh0KTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG5cclxuICBpZiAodCkge1xyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgIC5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICB0aXRsZTogJ0NvbmZpcm1hdGlvbiA/JyxcclxuICAgICAgICB0ZXh0OiAnVm91bGV6IHZvdXMgdnJhaW1lbnQgVmFsaWTDqSBjZXQgZW5yZWdpc3RyZW1lbnQgPycsXHJcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFZhbGlkw6khXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgICAnZGVwb3RfbW91dmVtZW50X3N0b2NrX3ZhbGlkZXJfYWNoYXRfbXVsdGlwbGUnXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdGFibGUzLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICdWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uJyxcclxuICAgICAgJ3dhcm5pbmcnLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcjYWxsYWN0aW9ucycpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG4gIC8vJCgnI2FsbGFjdGlvbnMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICQoJy5hY3Rpb24nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAkKCcjdmFsaWQnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnLmFjdGlvbicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAkKCcjdmFsaWQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gIH1cclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJCgnI2FsbGFjdGlvbnMyJykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8kKCcjYWxsYWN0aW9ucycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgJCgnLmFjdGlvbjInKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAkKCcjdmFsaWQyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJy5hY3Rpb24yJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICQoJyN2YWxpZDInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gIH1cclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJyNhbGxhY3Rpb25zMycpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG4gIC8vJCgnI2FsbGFjdGlvbnMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICQoJy5hY3Rpb24nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAkKCcjdmFsaWQzJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJy5hY3Rpb24nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgJCgnI3ZhbGlkMycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLmFjdGlvbicsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgYWxlcnQoKTtcclxuICAkKCcjdmFsaWQnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAvLyAgICAkKFwiLmJ0bl92YWxcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIC8vICBjb25zb2xlLmxvZygkKCcuYWN0aW9uJykudmFsKCkpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLmFjdGlvbicsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgYWxlcnQoKTtcclxuICAkKCcjdmFsaWQzJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgLy8gICAgJChcIi5idG5fdmFsXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAvLyAgY29uc29sZS5sb2coJCgnLmFjdGlvbicpLnZhbCgpKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuYWN0aW9uMicsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgYWxlcnQoKTtcclxuICAkKCcjdmFsaWQyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgLy8gICAkKFwiLmJ0bl92YWwyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAvLyAgY29uc29sZS5sb2coJCgnLmFjdGlvbicpLnZhbCgpKTtcclxufSk7XHJcblxyXG4kKCcubmV3Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF9pbnNlcnQnKSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1X2RlcG90X3Nob3cnLCB7IGlkOiByZXN1bHQuZGF0YS5pZCB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyJywgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJyNfZWRpdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gIGlmIChpZCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX2RlcG90X2VkaXQnLCB7IGlkOiBpZCB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgJ1ZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb24nLFxyXG4gICAgICAnd2FybmluZycsXHJcbiAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnLmdyaWQnKS5vbignY2xpY2snLCAnLnZhbGlkZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICBpZiAoaWQpIHtcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24gPycsXHJcbiAgICAgICAgdGV4dDogJ1ZvdWxleiB2b3VzIHZyYWltZW50IFZhbGlkw6kgY2V0IGVucmVnaXN0cmVtZW50ID8nLFxyXG4gICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBWYWxpZMOpIVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RlcG90X21vdXZlbWVudF9zdG9ja192YWxpZGVyX3ZlbnRlJywge1xyXG4gICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgJ1ZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb24nLFxyXG4gICAgICAnd2FybmluZycsXHJcbiAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnLmdyaWQzJykub24oJ2NsaWNrJywgJy52YWxpZGVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAvLyQoJy52YWxpZGVyJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG5cclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7IC8vYWxlcnQoaWQpO1xyXG4gIGlmIChpZCkge1xyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgIC5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICB0aXRsZTogJ0NvbmZpcm1hdGlvbiA/JyxcclxuICAgICAgICB0ZXh0OiAnVm91bGV6IHZvdXMgdnJhaW1lbnQgVmFsaWTDqSBjZXQgZW5yZWdpc3RyZW1lbnQgPycsXHJcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFZhbGlkw6khXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGVwb3RfbW91dmVtZW50X3N0b2NrX3ZhbGlkZXJfYWNoYXQnLCB7XHJcbiAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZTMuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAnVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvbicsXHJcbiAgICAgICd3YXJuaW5nJyxcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF91cGRhdGUnLCB7IGlkOiBpZCB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnI19zaG93JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcblxyXG4gIGlmIChpZCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3VfZGVwb3Rfc2hvdycsIHsgaWQ6IGlkIH0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAnVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvbicsXHJcbiAgICAgICd3YXJuaW5nJyxcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcjX2RlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gJCgnI3Rlc3QnKS5kYXRhKCdkZXBvdElkJyk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgLmZpcmUoe1xyXG4gICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRpdGxlOiAnQ29uZmlybWF0aW9uID8nLFxyXG4gICAgICAgIHRleHQ6ICdWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID8nLFxyXG4gICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF9kZWxldGUnLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgJ1ZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb24nLFxyXG4gICAgICAnd2FybmluZycsXHJcbiAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnI19hcmNoaXZlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gJCgnI3Rlc3QnKS5kYXRhKCdkZXBvdElkJyk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgLmZpcmUoe1xyXG4gICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRpdGxlOiAnQ29uZmlybWF0aW9uID8nLFxyXG4gICAgICAgIHRleHQ6ICdWb3VsZXogdm91cyB2cmFpbWVudCBBcmNoaXZlciBjZXQgZW5yZWdpc3RyZW1lbnQgPycsXHJcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1hcmNoaXZlJz48L2k+IE91aSwgQXJjaGl2ZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfZGVwb3RfYXJjaGl2ZXInLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICdWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uJyxcclxuICAgICAgJ3dhcm5pbmcnLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5zdG9ja19kZXBvdF90cmVuc2ZlcnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX2RlcG90X3RyZW5zZmVydCcsIHsgaWQ6IGlkIH0pLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfZGVwb3RfbW91dmVtZW50c3RvY2snKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAvLyAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcuYW50ZW5uZV9zb3VyY2UnKS5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gIHZhciBkYXRhID0gJCgnLmFudGVubmVfc291cmNlIDpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gICQoJy5zYW50ZW5uZXllcnJvcicpLmhpZGUoKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gbGV0IGFudGVubmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gIGlmIChkYXRhICE9ICcnKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXRfYW50ZW5uZV9hcnRpY2xlJywgeyBpZDogZGF0YSB9KSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAkKCcuYXJ0aWNsZV9kaXNwb25pYmxlJykuaHRtbChkYXRhKTtcclxuICAgICAgICAkKCcuYXJ0aWNsZV9kaXNwb25pYmxlIHNlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuYXJ0aWNsZV9kaXNwb25pYmxlJywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCB0ciA9ICQodGhpcykucGFyZW50cygndHInKTtcclxuICBsZXQgcHJpeFZlbnRlID0gJCgnLmFydGljbGVfZGlzcG9uaWJsZSA6c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLXAnKTtcclxuICAvLyBhbGVydChwcml4VmVudGUpXHJcbiAgdHIuZmluZChcImlucHV0W25hbWU9J3ByaXhWZW50ZSddXCIpLnZhbChwcml4VmVudGUpO1xyXG59KTtcclxuJCgnLmRkbF91bml0ZScpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgLy8gYWxlcnQoJ3Rlc3QnKTtcclxuXHJcbiAgdmFyIGRhdGEgPSAkKCcuU2l0ZV9SYyA6c2VsZWN0ZWQnKS52YWwoKTtcclxuICB2YXIgYW50ZW5uZSA9ICQoJy5kZGxfdW5pdGUgOnNlbGVjdGVkJykudmFsKCk7XHJcblxyXG4gICQoJy5zYW50ZW5uZXllcnJvcicpLmhpZGUoKTtcclxuICBpZiAoZGF0YSAhPSAnJykge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ2V0X2RlbWFuZF9hcnRpY2xlJywge1xyXG4gICAgICAgIGlkOiBkYXRhLFxyXG4gICAgICAgIGFudGVubmVfaWQ6IGFudGVubmUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICQoJy5hcnRpY2xlX2Rpc3BvbmlibGVfUmMnKS5odG1sKGRhdGEpO1xyXG4gICAgICAgICQoJy5hcnRpY2xlX2Rpc3BvbmlibGVfUmMgc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKF9qcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuJCgnLlNpdGVfUmMnKS5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gIC8vIGFsZXJ0KCduYWppbScpXHJcbiAgdmFyIGRhdGEgPSAkKCcuU2l0ZV9SYyA6c2VsZWN0ZWQnKS52YWwoKTtcclxuICB2YXIgYW50ZW5uZSA9ICd0ZXN0JztcclxuXHJcbiAgJCgnLnNhbnRlbm5leWVycm9yJykuaGlkZSgpO1xyXG4gIGlmIChkYXRhICE9ICcnKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXRfZGVtYW5kX2FydGljbGUnLCB7XHJcbiAgICAgICAgaWQ6IGRhdGEsXHJcbiAgICAgICAgYW50ZW5uZV9pZDogYW50ZW5uZSxcclxuICAgICAgfSksXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgJCgnLmFydGljbGVfZGlzcG9uaWJsZV9SYycpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgJCgnLmFydGljbGVfZGlzcG9uaWJsZV9SYyBzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmxldCBxdWFudHRpdHlEaXNwb25pYmxlO1xyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuc2VsZWN0Ml9kZW1vX2FudGVubmUnLCAoKSA9PiB7XHJcbiAgLy8gYWxlcnQoJ25ubm4nKVxyXG4gIGlmICgkKCcuc2VsZWN0Ml9kZW1vX2FudGVubmUgOnNlbGVjdGVkJykudmFsKCkgIT0gJ251bGwnKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKCcuc2VsZWN0Ml9kZW1vX2FudGVubmUgOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgdGFibGU3LmNvbHVtbnMoMCkuc2VhcmNoKCQoJy5zZWxlY3QyX2RlbW9fYW50ZW5uZSA6c2VsZWN0ZWQnKS52YWwoKSkuZHJhdygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YWJsZTcuY29sdW1ucygwKS5zZWFyY2goJycpLmRyYXcoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBhbiBlbXB0eSBhcnJheSB0byBob2xkIHRoZSBzZWxlY3RlZCBhcnRpY2xlc1xyXG5sZXQgQXJyYXlzT2ZBcnRpY2xlID0gW107XHJcblxyXG4vLyBMaXN0ZW4gZm9yIGEgY2xpY2sgb24gdGhlIFwiYWRkIGFydGljbGVcIiBidXR0b25cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuYWRkX2FydGljbGVfc3RvY2tfYWN0aXZlJywgKCkgPT4ge1xyXG4gIC8vIEZpbmQgYWxsIHRoZSByZWxldmFudCBlbGVtZW50c1xyXG4gIHZhciBhbGxFbGVtZW50cyA9ICQoJy5hZGRfYXJ0aWNsZV9zdG9ja19hY3RpdmUnKS5jbG9zZXN0KCcucGFycmVudEFydGljbGUnKTtcclxuICB2YXIgYXJ0aWNsZUlkID0gYWxsRWxlbWVudHMuZmluZCgnLmFydGljbGVfZGlzcG9uaWJsZSA6c2VsZWN0ZWQnKS52YWwoKTtcclxuICB2YXIgYXJ0aWNsZU5hbWUgPSBhbGxFbGVtZW50c1xyXG4gICAgLmZpbmQoJy5hcnRpY2xlX2Rpc3BvbmlibGUgOnNlbGVjdGVkJylcclxuICAgIC5hdHRyKCdkYXRhLW5hbWUnKTtcclxuICB2YXIgcXVhbnRpdHlEaXNwb25pYmxlID0gYWxsRWxlbWVudHNcclxuICAgIC5maW5kKCcuYXJ0aWNsZV9kaXNwb25pYmxlIDpzZWxlY3RlZCcpXHJcbiAgICAuYXR0cignZGF0YS1xJyk7XHJcbiAgdmFyIHF1YW50aXR0eSA9IGFsbEVsZW1lbnRzLmZpbmQoJy5xdWFudGl0dHknKS52YWwoKTtcclxuICB2YXIgcHJpeFZlbnRlID0gYWxsRWxlbWVudHMuZmluZCgnLnByaXhfdmVudGUnKS52YWwoKTtcclxuICB2YXIgQ29uZGl0aW9ubmVtZW50ID0gYWxsRWxlbWVudHMuZmluZCgnLkNvbmRpdGlvbm5lbWVudCcpLnZhbCgpO1xyXG4gIHZhciBjb25kaXRpb25uZW1lbnRfbGl2cmUgPSBhbGxFbGVtZW50cy5maW5kKCcuY29uZGl0aW9ubmVtZW50X2xpdnJlJykudmFsKCk7XHJcbiAgdmFyIG9ic2VydmF0aW9uID0gYWxsRWxlbWVudHMuZmluZCgnLm9ic2VydmF0aW9uJykudmFsKCk7XHJcbiAgLy8gY29uc29sZS5sb2cocXVhbnRpdHlEaXNwb25pYmxlLCBxdWFudGl0dHkpO1xyXG5cclxuICAvLyBWYWxpZGF0ZSB0aGUgaW5wdXQgZmllbGRzXHJcbiAgaWYgKCtxdWFudGl0dHkgPCAwKSB7XHJcbiAgICB0b2FzdHIuZXJyb3IoXCJQcmllcmUgZCdlbnRyZSB1bmUgdmFsZXVyIHBsdXMgb3Ugw6lnYWxlIDAgXCIsICdFcnJldXInLCB7XHJcbiAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGFydGljbGVJZCA9PT0gJycpIHtcclxuICAgIHRvYXN0ci5lcnJvcignY2hvaXggYXJ0aWNsZSAhJywgJ0VycmV1cicsIHtcclxuICAgICAgdGltZU91dDogNDAwMCxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocXVhbnRpdHR5ID09PSAnJykge1xyXG4gICAgdG9hc3RyLmVycm9yKCdFbnRyw6llIGxhIHF1YW50aXTDqSAhJywgJ0VycmV1cicsIHtcclxuICAgICAgdGltZU91dDogNDAwMCxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocHJpeFZlbnRlID09PSAnJykge1xyXG4gICAgdG9hc3RyLmVycm9yKCdFbnRyw6llIHByaXggZGUgdmVudGUgIScsICdFcnJldXInLCB7XHJcbiAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGFydGljbGUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZFxyXG4gICAgbGV0IHBhc3NlID0gdHJ1ZTtcclxuICAgIEFycmF5c09mQXJ0aWNsZS5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgaWYgKGFydGljbGUuaWQgPT0gYXJ0aWNsZUlkKSB7XHJcbiAgICAgICAgcGFzc2UgPSBmYWxzZTtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsICdBcnRpY2xlIGTDqWphIGV4aXN0JywgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChwYXNzZSkge1xyXG4gICAgICAvLyBJZiB0aGUgY29uZGl0aW9uIGlzIG1ldCwgcHVzaCB0aGUgbmV3IGFydGljbGUgb2JqZWN0IHRvIHRoZSBhcnJheVxyXG4gICAgICBBcnJheXNPZkFydGljbGUucHVzaCh7XHJcbiAgICAgICAgaWQ6IGFydGljbGVJZCxcclxuICAgICAgICBuYW1lOiBhcnRpY2xlTmFtZSxcclxuICAgICAgICBxdWFudGl0eURpc3BvbmlibGU6IHF1YW50aXR5RGlzcG9uaWJsZSxcclxuICAgICAgICBxdWFudGl0dHk6IHF1YW50aXR0eSxcclxuICAgICAgICBwcml4VmVudGU6IHByaXhWZW50ZSxcclxuICAgICAgICBvYnNlcnZhdGlvbixcclxuICAgICAgICBjb25kaXRpb25uZW1lbnRfbGl2cmUsXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIEhUTUwgZWxlbWVudHMgd2l0aCBjbGFzcyBcImFwcGVuZEVsZW1lbnRcIlxyXG4gICAgICAkKCcuYXBwZW5kRWxlbWVudCcpLnJlbW92ZSgpO1xyXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgSFRNTCB0YWJsZSByb3cgZWxlbWVudCBmb3IgZWFjaCBhcnRpY2xlIGluIHRoZSBhcnJheSBhbmQgYXBwZW5kIHRoZW0gdG8gdHdvIGRpZmZlcmVudCBIVE1MIGVsZW1lbnRzXHJcbiAgICAgIGxldCBodG1sO1xyXG4gICAgICBBcnJheXNPZkFydGljbGUuZm9yRWFjaCgoYXJ0aWNsZSwgaSkgPT4ge1xyXG4gICAgICAgIGh0bWwgKz0gYDx0ciBjbGFzcz1cImFwcGVuZEVsZW1lbnRcIj4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4gJHtpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4gJHthcnRpY2xlLmlkfSAke2FydGljbGUubmFtZX0gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJxdWFudGl0eV9pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2FydGljbGUucXVhbnRpdHR5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHJpeFZlbnRlX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7YXJ0aWNsZS5wcml4VmVudGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICR7YXJ0aWNsZS5vYnNlcnZhdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9XCJwYWRkaW5nOiA3cHggO1wiIGRhdGEtaWQ9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwiZWRpdEFydGljbGUgYnRuLWljb24tZGV0YWlsIGJ0biBidG4td2hpdGUgYnRuLXdhcm5pbmcgYnRuLW91dGxpbmUgIGJ0bi14cyBteS1idXR0b24yIHVwcGVyIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiIGZhICBmYS1lZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9XCJwYWRkaW5nOiA3cHggO1wiIGRhdGEtaWQ9XCIke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwiZGVsZXRlQXJ0aWNsZSBidG4taWNvbi1kZXRhaWwgYnRuIGJ0bi13aGl0ZSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lICBidG4teHMgbXktYnV0dG9uMiB1cHBlciB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIiBmYSAgZmEtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5gO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IEhUTUwgZWxlbWVudHMgdG8gdHdvIGRpZmZlcmVudCBIVE1MIGVsZW1lbnRzIHdpdGggY2xhc3NlcyBcImFydGljbGVfZGlzcG9uaWJsZV9SY1wiIGFuZCBcImFydGljbGVfZGlzcG9uaWJsZVwiXHJcbiAgICAgICQoJy5hcnRpY2xlX2Rpc3BvbmlibGVfUmMnKS5wcmVwZW5kKGh0bWwpO1xyXG4gICAgICAkKCcuYXJ0aWNsZV9kaXNwb25pYmxlJykucHJlcGVuZChodG1sKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuJCgnLmRkbF91bml0ZScpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgQXJyYXlzT2ZBcnRpY2xlID0gW107XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuZGVsZXRlQXJ0aWNsZScsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZWxlbWVudCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcbiAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgbGV0IE5ld0FycmF5ID0gQXJyYXlzT2ZBcnRpY2xlLmZpbHRlcigoYXJ0aWNsZSkgPT4ge1xyXG4gICAgcmV0dXJuIGFydGljbGUuaWQgIT0gaWQ7XHJcbiAgfSk7XHJcbiAgQXJyYXlzT2ZBcnRpY2xlID0gTmV3QXJyYXk7XHJcbiAgZWxlbWVudC5yZW1vdmUoKTtcclxuICBjb25zb2xlLmxvZyhBcnJheXNPZkFydGljbGUpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuZWRpdEFydGljbGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5xdWFudGl0eV9pbnB1dCcpO1xyXG4gIHZhciBwcml4VmVudGVfaW5wdXQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5wcml4VmVudGVfaW5wdXQnKTtcclxuICB2YXIgYXJ0aWNsZSA9IEFycmF5c09mQXJ0aWNsZS5maW5kKChhcnRpY2xlKSA9PiBhcnRpY2xlLmlkID09IGlkKTtcclxuICBlbGVtZW50Lmh0bWwoXHJcbiAgICBgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBkYXRhLWlkPVwiJHthcnRpY2xlLmlkfVwiIHZhbHVlPVwiJHthcnRpY2xlLnF1YW50aXR0eX1cIiBjbGFzcz1cIiBxdWFudGl0eV91cGRhdGUgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBkZWNpbWFsX3BsYWNlc1wiPmBcclxuICApO1xyXG4gIHByaXhWZW50ZV9pbnB1dC5odG1sKFxyXG4gICAgYDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZGF0YS1pZD1cIiR7YXJ0aWNsZS5pZH1cIiB2YWx1ZT1cIiR7YXJ0aWNsZS5wcml4VmVudGV9XCIgY2xhc3M9XCIgcHJpeFZlbnRlX3VwZGF0ZSBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGRlY2ltYWxfcGxhY2VzXCI+YFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coQXJyYXlzT2ZBcnRpY2xlKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbigna2V5dXAnLCAnLnF1YW50aXR5X3VwZGF0ZSwgLnByaXhWZW50ZV91cGRhdGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGxldCB0ciA9ICQodGhpcykucGFyZW50cygndHInKTtcclxuICB2YXIgaWQgPSB0ci5maW5kKCcucXVhbnRpdHlfdXBkYXRlJykuYXR0cignZGF0YS1pZCcpO1xyXG4gIHZhciBxdWFudGl0dHkgPSB0ci5maW5kKCcucXVhbnRpdHlfdXBkYXRlJykudmFsKCk7XHJcbiAgdmFyIHByaXhWZW50ZSA9IHRyLmZpbmQoJy5wcml4VmVudGVfdXBkYXRlJykudmFsKCk7XHJcbiAgdmFyIGFydGljbGUgPSBBcnJheXNPZkFydGljbGUuZmluZEluZGV4KChhcnRpY2xlKSA9PiBhcnRpY2xlLmlkID09IGlkKTtcclxuICBpZiAoXHJcbiAgICBBcnJheXNPZkFydGljbGVbYXJ0aWNsZV0ucXVhbnRpdHlEaXNwb25pYmxlID49ICtxdWFudGl0dHkgJiZcclxuICAgICtxdWFudGl0dHkgPiAxXHJcbiAgKSB7XHJcbiAgICBBcnJheXNPZkFydGljbGVbYXJ0aWNsZV0ucXVhbnRpdHR5ID0gcXVhbnRpdHR5O1xyXG4gICAgQXJyYXlzT2ZBcnRpY2xlW2FydGljbGVdLnByaXhWZW50ZSA9IHByaXhWZW50ZTtcclxuICAgIHRyLmZpbmQoJy5xdWFudGl0eV91cGRhdGUnKS5wYXJlbnQoKS5odG1sKHF1YW50aXR0eSk7XHJcbiAgICB0ci5maW5kKCcucHJpeFZlbnRlX3VwZGF0ZScpLnBhcmVudCgpLmh0bWwocHJpeFZlbnRlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnYm9keSAuYWxyZWFkeVF1YW50aXR5Jykuc2hvdygpO1xyXG4gICAgQXJyYXlzT2ZBcnRpY2xlW2FydGljbGVdLnF1YW50aXR0eSA9IHF1YW50aXR0eTtcclxuICAgIEFycmF5c09mQXJ0aWNsZVthcnRpY2xlXS5wcml4VmVudGUgPSBwcml4VmVudGU7XHJcbiAgICB0ci5maW5kKCcucXVhbnRpdHlfdXBkYXRlJykucGFyZW50KCkuaHRtbChxdWFudGl0dHkpO1xyXG4gICAgdHIuZmluZCgnLnByaXhWZW50ZV91cGRhdGUnKS5wYXJlbnQoKS5odG1sKHByaXhWZW50ZSk7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJQcmllcmUgZCdlbnRyZSB1bmUgdmFsZXVyIG1vaW4gb3UgZWdhbGUgXCIgK1xyXG4gICAgICAgIEFycmF5c09mQXJ0aWNsZVthcnRpY2xlXS5xdWFudGl0eURpc3BvbmlibGUsXHJcbiAgICAgICd3YXJuaW5nJyxcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoJyNEZW1hbmRfc3RvY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGRhdGEuYXBwZW5kKCdTaXRlX0RFJywgJCgnLlNpdGVfREUgOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gIGRhdGEuYXBwZW5kKCdTaXRlX1JjJywgJCgnLlNpdGVfUmMgOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gIGRhdGEuYXBwZW5kKCd0eXBlT3AnLCAkKCcjZmlyc3QgOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gIGRhdGEuYXBwZW5kKCdkZGxfdW5pdGUnLCAkKCcjZGRsX3VuaXRlIDpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICBkYXRhLmFwcGVuZCgnT2JzZXJ2JywgJCgnI1RleHRhcmVhMScpLnZhbCgpKTtcclxuICBkYXRhLmFwcGVuZCgnYXJ0aWNsZXMnLCBKU09OLnN0cmluZ2lmeShBcnJheXNPZkFydGljbGUpKTtcclxuICB2YXIgU2l0ZV9SYyA9ICQoJy5TaXRlX1JjIDpzZWxlY3RlZCcpLnZhbCgpO1xyXG4gIHZhciB0eXBlT3AgPSAkKCcjZmlyc3QgOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgdmFyIGRkbF91bml0ZSA9ICQoJyNkZGxfdW5pdGUgOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgdmFyIE9ic2VydiA9ICQoJyNUZXh0YXJlYTEnKS52YWwoKTtcclxuICB2YXIgYXJ0aWNsZXMgPSBKU09OLnN0cmluZ2lmeShBcnJheXNPZkFydGljbGUpO1xyXG4gIGlmIChcclxuICAgIEFycmF5c09mQXJ0aWNsZSA9PSAnJyB8fFxyXG4gICAgU2l0ZV9SYyA9PSAnJyB8fFxyXG4gICAgdHlwZU9wID09ICcnIHx8XHJcbiAgICBkZGxfdW5pdGUgPT0gJycgfHxcclxuICAgIE9ic2VydiA9PSAnJyB8fFxyXG4gICAgYXJ0aWNsZXMgPT0gJydcclxuICApIHtcclxuICAgIHRvYXN0ci5lcnJvcignVmV1aWxsZXogc2Fpc2lyIHRvdXQgbGVzIGNoYW1wcyAhJywgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsLnN0YXJ0KCk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ05ld19kZW1hbmRlX3N0b2NrJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICB2YXIgaWQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoXHJcbiAgICAgICAgJ1ZvdHJlIGRlbWFuZGUgZGUgc3RvY2sgYSDDqXTDqSBiaWVuIGVmZmVjdHXDqSAuJyxcclxuICAgICAgICAnU3VjY8OpZXMnLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB3aW5kb3cub3BlbignL2FwcHJvdmlzaW9uZW1lbnQvZGVtYW5kZWNhYi9zaG93LycgKyBpZCwgJ19zZWxmJyk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG4kKCcjTGl2cmFpc29uX0NvbXBsZXRlX2RlbWFuZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAkKCcjTGl2cmFpc29uX1BhcnRpZWxsZV9kZW1hbmRlJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAkKCcudGFibGUtZGV0YWlsIHRib2R5IHRyIGknKS5yZW1vdmUoKTtcclxuICB2YXIgdHJzID0gJCgnLnRhYmxlLWRldGFpbCB0Ym9keSB0ciAnKTtcclxuICBjb25zb2xlLmxvZyh0cnMpO1xyXG4gIGxldCBlcnJvciA9IG51bGw7XHJcbiAgdHJzLm1hcCgodHIpID0+IHtcclxuICAgIHZhciBxdWFudGl0eVNhaXNpZSA9ICQodHJzW3RyXSkuZmluZCgnLmRldElucHV0UXRsaXZyZScpLnZhbCgpO1xyXG4gICAgdmFyIHF1YW50aXR5RGlzcG9uaWJsZSA9ICQodHJzW3RyXSkuZmluZCgnLnF1YW50aXRlRGlzcG9uaWJsZScpLnRleHQoKTtcclxuICAgICQodHJzW3RyXSkuZmluZCgnLmRldElucHV0UXRsaXZyZScpLnBhcmVudCgpO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZGV0c1F0bGl2cmUgPSBbXTtcclxuXHJcbiAgdmFyIGlucHV0cyA9ICQoJy5kZXRJbnB1dFF0bGl2cmUnKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGRldCA9IHt9O1xyXG4gICAgZGV0WydpZCddID0gJChpbnB1dHNbaV0pLmF0dHIoJ2lkJyk7XHJcbiAgICBkZXRbJ3F0X2xpdnJlJ10gPSAkKGlucHV0c1tpXSkudmFsKCk7XHJcbiAgICBkZXRbJ2NvbmRpdGlvbm5lbWVudF9saXZyZSddID0gJChpbnB1dHNbaV0pXHJcbiAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAucGFyZW50KClcclxuICAgICAgLmZpbmQoJy5jb25kaXRpb25uZW1lbnRfbGl2cmUnKVxyXG4gICAgICAuZmluZCgnOnNlbGVjdGVkJylcclxuICAgICAgLnRleHQoKTtcclxuICAgIGRldHNRdGxpdnJlLnB1c2goZGV0KTtcclxuICB9XHJcblxyXG4gIGwuc3RhcnQoKTtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICB2YXIganNvbl9hcnIgPSBKU09OLnN0cmluZ2lmeShkZXRzUXRsaXZyZSk7XHJcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBjb25zb2xlLmxvZyhkZXRzUXRsaXZyZSk7XHJcbiAgZGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xyXG4gIGRhdGEuYXBwZW5kKCdkZXRzUXRsaXZyZScsIGpzb25fYXJyKTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6ICdQT1NUJyxcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnTGl2cmFpc29uX0NvbXBsZXRlX2RlbWFuZGUnKSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQubWVzc2FnZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ0RlbWFuZGUgZGUgc3RvY2sgYSBhIMOpdMOpIGJpZW4gbGl2csOpZSAuJywgJ1N1Y2PDqWVzJywge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2FwcHJvdmlzaW9uZW1lbnQvJywgJ19zZWxmJyk7XHJcblxyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG5cclxuICAgICAgICB2YXIgZXJycyA9IHJlc3VsdC5lcnJvcnM7XHJcblxyXG4gICAgICAgIHZhciB0cnMgPSAkKCcudGFibGUtZGV0YWlsIHRib2R5IHRyJyk7XHJcbiAgICAgICAgZXJycy5tYXAoKGVycykgPT4ge1xyXG4gICAgICAgICAgdHJzLm1hcCgodHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCQodHJzW3RyXSkuYXR0cignY2xhc3MnKSA9PSBlcnMpIHtcclxuICAgICAgICAgICAgICAkKHRyc1t0cl0pXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLmRldElucHV0UXRsaXZyZScpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIHRleHQtZGFuZ2VyIG1sLTJcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtcIj48L2k+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKCdxdWFudGl0w6kgaW50cm91dmFibGUgZW4gc3RvY2snLCAnRXJyb3InLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAkKCcjTGl2cmFpc29uX1BhcnRpZWxsZV9kZW1hbmRlJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgfSxcclxuICAgIGNhY2hlOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcblxyXG4kKCcjYW51bGxlcl9kZW1hbmRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICBsLnN0YXJ0KCk7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6ICdQT1NUJyxcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYW51bGxlcl9kZW1hbmRlJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICB0b2FzdHIuc3VjY2VzcygnRGVtYW5kZSBkZSBzdG9jayBhIMOpdMOpIGJpZW4gYW51bGxlciAuJywgJ1N1Y2PDqWVzJywge1xyXG4gICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKCcjYW51bGxlcl9kZW1hbmRlJykucmVtb3ZlKCk7XHJcbiAgICAgICQoJyN2YWxpZGVyX2RlbWFuZGUnKS5yZW1vdmUoKTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG4kKCcjcHJldGVfZGVtYW5kZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgbC5zdGFydCgpO1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3ByZXRlX2RlbWFuZGUnKSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIHRvYXN0ci5zdWNjZXNzKCdCaWVuIGVucmVnaXN0cmUuJywgJ1N1Y2PDqWVzJywge1xyXG4gICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG4kKCcjZW52b3llcl9kZW1hbmRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICBsLnN0YXJ0KCk7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG4gIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX0Vudm95ZXJfZGVtYW5kZScpLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ0RlbWFuZGUgZGUgc3RvY2sgYSDDqXTDqSBiaWVuIGVudm95w6llIC4nLCAnU3VjY8OpZXMnLCB7XHJcbiAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5vcGVuKCcvYXBwcm92aXNpb25lbWVudC8nLCAnX3NlbGYnKTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJCgnI0xpdnJhaXNvbl9QYXJ0aWVsbGVfZGVtYW5kZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgJCgnI0xpdnJhaXNvbl9Db21wbGV0ZV9kZW1hbmRlJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICB2YXIgZGV0c1F0bGl2cmUgPSBbXTtcclxuICB2YXIgaW5wdXRzID0gJCgnLmRldElucHV0UXRsaXZyZScpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgZGV0ID0ge307XHJcbiAgICBkZXRbJ2lkJ10gPSAkKGlucHV0c1tpXSkuYXR0cignaWQnKTtcclxuICAgIGRldFsncXRfbGl2cmUnXSA9ICQoaW5wdXRzW2ldKS52YWwoKTtcclxuXHJcbiAgICBkZXRzUXRsaXZyZS5wdXNoKGRldCk7XHJcbiAgfVxyXG5cclxuICBsLnN0YXJ0KCk7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgdmFyIGpzb25fYXJyID0gSlNPTi5zdHJpbmdpZnkoZGV0c1F0bGl2cmUpO1xyXG4gIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xyXG4gIGRhdGEuYXBwZW5kKCdkZXRzUXRsaXZyZScsIGpzb25fYXJyKTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6ICdQT1NUJyxcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnTGl2cmFpc29uX1BhcnRpZWxsZV9kZW1hbmRlJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9hcHByb3Zpc2lvbmVtZW50LycsICdfc2VsZicpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNMaXZyYWlzb25fQ29tcGxldGVfZGVtYW5kZScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMCkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG5cclxuICAgICAgICB2YXIgZXJycyA9IHJlc3VsdC5lcnJvcnM7XHJcbiAgICAgICAgdmFyIHRycyA9ICQoJy50YWJsZS1kZXRhaWwgdGJvZHkgdHInKTtcclxuICAgICAgICBlcnJzLm1hcCgoZXJzKSA9PiB7XHJcbiAgICAgICAgICB0cnMubWFwKCh0cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJCh0cnNbdHJdKS5hdHRyKCdjbGFzcycpID09IGVycykge1xyXG4gICAgICAgICAgICAgICQodHJzW3RyXSlcclxuICAgICAgICAgICAgICAgIC5maW5kKCcuZGV0SW5wdXRRdGxpdnJlJylcclxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUgdGV4dC1kYW5nZXIgbWwtMlwiIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4O1wiPjwvaT4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ3F1YW50aXTDqSBpbnRyb3V2YWJsZSBlbiBzdG9jaycsICdFcnJvcicsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICQoJyNMaXZyYWlzb25fQ29tcGxldGVfZGVtYW5kZScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gc3RhcnRcclxuJCgnI2J0bl9zYXZlX3F0eV9saXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICB2YXIgZGV0c1F0bGl2cmUgPSBbXTtcclxuICB2YXIgaW5wdXRzID0gJCgnLlFVQU5USVRFX0xJVlJFRScpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgZGV0ID0ge307XHJcbiAgICBkZXRbJ2lkJ10gPSAkKGlucHV0c1tpXSkuYXR0cignaWQnKTtcclxuICAgIGRldFsncXRfbGl2cmUnXSA9ICQoaW5wdXRzW2ldKS52YWwoKTtcclxuXHJcbiAgICBkZXRzUXRsaXZyZS5wdXNoKGRldCk7XHJcbiAgfVxyXG4gIC8vIGwuc3RhcnQoKTtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICB2YXIganNvbl9hcnIgPSBKU09OLnN0cmluZ2lmeShkZXRzUXRsaXZyZSk7XHJcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgZGF0YS5hcHBlbmQoJ2RldHNRdGxpdnJlJywganNvbl9hcnIpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdMaXZyYWlzb25QYXJhcnRpY2xlJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI0xpdnJhaXNvbl9Db21wbGV0ZV9kZW1hbmRlJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAwKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgIHZhciBlcnJzID0gcmVzdWx0LmVycm9ycztcclxuICAgICAgICB2YXIgdHJzID0gJCgnLnRhYmxlLWRldGFpbCB0Ym9keSB0cicpO1xyXG4gICAgICAgIGVycnMubWFwKChlcnMpID0+IHtcclxuICAgICAgICAgIHRycy5tYXAoKHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKHRyc1t0cl0pLmF0dHIoJ2NsYXNzJykgPT0gZXJzKSB7XHJcbiAgICAgICAgICAgICAgJCh0cnNbdHJdKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5kZXRJbnB1dFF0bGl2cmUnKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSB0ZXh0LWRhbmdlciBtbC0yXCIgc3R5bGU9XCJmb250LXNpemU6IDEycHg7XCI+PC9pPidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcigncXVhbnRpdMOpIGludHJvdXZhYmxlIGVuIHN0b2NrJywgJ0Vycm9yJywge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyJywgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgJCgnI0xpdnJhaXNvbl9Db21wbGV0ZV9kZW1hbmRlJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgfSxcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBlbmRcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmFjdGlvbjInLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnLmxpc3RfYWN0aW9uc19ibG9jJykudG9nZ2xlKCQoJy5hY3Rpb24yJykuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuX2RlbWFuZGVzdGtfZmFjdHVyZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKCQodGhpcykudmFsKCkgIT0gJycpIHtcclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcbiAgICAkLmVhY2goJCgnaW5wdXRbbmFtZT1fYWN0aW9uMl06Y2hlY2tlZCcpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChfYXJyYXlfaWRzKSB7XHJcbiAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24gPycsXHJcbiAgICAgICAgICBodG1sOlxyXG4gICAgICAgICAgICAnPHAgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7XCI+Vm91bGV6IHZvdXMgdnJhaW1lbnQgYWZmZWN0dWVyIGNldHRlIGRlbWFuZGUgc3RvY2sgYXV0YW50IHF1ZSBkZW1hbmRlIGRcXCdhY2hhdCBldCBkZXZpcyA/PC9wPicgKyAvLyBhZGRlZCBwYXJhZ3JhcGhcclxuICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRWYWx1ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPYmplY3QgcG91ciBkZXZpc2UgZXQgZGVtYW5kZSBhY2hhdCAuLi5cIj4nLFxyXG4gICAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogJ0VudGVyIHZhbHVlJyxcclxuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDpcclxuICAgICAgICAgICAgXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+IE91aSwgRmFjdHVyZSBcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIFwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9ICQoJyNpbnB1dFZhbHVlJykudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICghaW5wdXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignRW50ZXIgYSB2YWx1ZSBmb3IgT2JqZWN0LicsICdFcnJvcicsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICQoJyNsb2FkaW5nLXNwaW5uZXInKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfZmFjdHVyZV9yZWNlaXB0JyksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMsIGlucHV0VmFsdWUgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdGFibGUxMy5hamF4LnJlbG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xvYWRpbmctc3Bpbm5lcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjbG9hZGluZy1zcGlubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4kKCcuZGRsX3NpdGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBzZWxlY3RlZElkID0gJCh0aGlzKS52YWwoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ3Bvc3QnLFxyXG4gICAgdXJsOiAnL3N0b2NrL2RlbWFuZGUvcmVtcHNlbGVjdHVuaXRlLycgKyBzZWxlY3RlZElkLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgJCgnLmRkbF91bml0ZScpLmh0bWwoZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSxcclxuICB9KTtcclxufSk7XHJcblxyXG4kKCcjY2hpZmZyZXJfZGVtYW5kZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gIHZhciBEZXRzUHJpeCA9IFtdO1xyXG5cclxuICB2YXIgaW5wdXRzID0gJCgnLmRldElucHV0UHJpeCcpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgZGV0ID0ge307XHJcbiAgICBkZXRbJ2lkJ10gPSAkKGlucHV0c1tpXSkuYXR0cignaWQnKTtcclxuICAgIGRldFsncHJpeCddID0gJChpbnB1dHNbaV0pLnZhbCgpO1xyXG5cclxuICAgIERldHNQcml4LnB1c2goZGV0KTtcclxuICB9XHJcblxyXG4gIGwuc3RhcnQoKTtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICB2YXIganNvbl9hcnIgPSBKU09OLnN0cmluZ2lmeShEZXRzUHJpeCk7XHJcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgZGF0YS5hcHBlbmQoJ0RldHNQcml4JywganNvbl9hcnIpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19jaGlmZnJlcl9kZW1hbmRlJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICB0b2FzdHIuc3VjY2VzcygnRGVtYW5kZSBkZSBzdG9jayBhIMOpdMOpIGJpZW4gY2hpZmZyw6llIC4nLCAnU3VjY8OpZXMnLCB7XHJcbiAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5vcGVuKCcvYXBwcm92aXNpb25lbWVudC8nLCAnX3NlbGYnKTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG4kKCcjdmFsaWRlcl9kZW1hbmRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICBsLnN0YXJ0KCk7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6ICdQT1NUJyxcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndmFsaWRlcl9kZW1hbmRlJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICB0b2FzdHIuc3VjY2VzcygnRGVtYW5kZSBkZSBzdG9jayBhIMOpdMOpIFZhbGlkw6llIC4nLCAnU3VjY8OpZXMnLCB7XHJcbiAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5vcGVuKCcvYXBwcm92aXNpb25lbWVudC8nLCAnX3NlbGYnKTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxubGV0IGlkYXJ0aWNsZSA9IFtdO1xyXG5sZXQgaWRkZXQgPSBbXTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnI2dyaWRBRjEgdGJvZHkgdHIgaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICBpZGFydGljbGUucHVzaCgkKHRoaXMpLmF0dHIoJ2lkJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGlkYXJ0aWNsZS5pbmRleE9mKCQodGhpcykuYXR0cignaWQnKSk7XHJcbiAgICBpZGFydGljbGUuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coaWRhcnRpY2xlKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJyNBZmZlY3Rlcl9EZW1hbmQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoJCgnI2FudGVubmUnKS52YWwoKSA9PSAnJyB8fCAhaWRhcnRpY2xlKSB7XHJcbiAgICB0b2FzdHIuZXJyb3IoJ01lcmNpIGRlIGNob2lzaXIgdW5lIGxpZ25lIG91IHVuIGFudGVubmUgLicsICdlcnJvcicsIHtcclxuICAgICAgdGltZU91dDogNDAwMCxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZGFydGljbGUuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgbGV0IGlkdHIgPSAnI2dyaWRBRjEgdGJvZHkgdHIuYXJ0JyArIGlkO1xyXG4gICAgICAkKCcjZ3JpZEFGMiB0Ym9keScpLmFwcGVuZChcclxuICAgICAgICBgPHRyIGlkPWAgK1xyXG4gICAgICAgICAgaWQgK1xyXG4gICAgICAgICAgYD5cclxuICAgICAgICAgICAgICA8dGQ+YCArXHJcbiAgICAgICAgICAkKGlkdHIpLmZpbmQoJy5hcnQnKS5hdHRyKCdkYXRhLWlkJykgK1xyXG4gICAgICAgICAgYDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPmAgK1xyXG4gICAgICAgICAgJChpZHRyKS5maW5kKCcucXRlJykuYXR0cignZGF0YS1pZCcpICtcclxuICAgICAgICAgIGA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5gICtcclxuICAgICAgICAgICQoaWR0cikuZmluZCgnLnByaXgnKS5hdHRyKCdkYXRhLWlkJykgK1xyXG4gICAgICAgICAgYDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGlkPWAgK1xyXG4gICAgICAgICAgJCgnI2FudGVubmUnKS52YWwoKSArXHJcbiAgICAgICAgICBgPmAgK1xyXG4gICAgICAgICAgJCgnI2FudGVubmUgb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpICtcclxuICAgICAgICAgIGA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPmBcclxuICAgICAgKTtcclxuICAgICAgJChpZHRyKS5yZW1vdmUoKTtcclxuICAgICAgbGV0IGFhID0gaWQgKyAnLycgKyAkKCcjYW50ZW5uZScpLnZhbCgpO1xyXG4gICAgICBpZGRldC5wdXNoKGFhKTtcclxuICAgIH0pO1xyXG4gICAgaWRhcnRpY2xlID0gW107XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnI3NhdmVfbmV3X2RlbWFuZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gIGwuc3RhcnQoKTtcclxuICBpZiAoJC50cmltKCQoJyNncmlkQUYxIHRib2R5JykuaHRtbCgpKSA9PSAnJykge1xyXG4gICAgdmFyIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpZGRldCk7XHJcbiAgICB2YXIgaWRfY2FiID0gJCgnLmRtY2FiaWQnKS5hdHRyKCdpZCcpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvc3RvY2svZGVtYW5kZS9FbnJlZ2lzdGVyX0RlbWFuZGUvJyArIGlkX2NhYixcclxuICAgICAgZGF0YToganNvblN0cmluZyxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQsICdTdWNjw6llcycsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2FwcHJvdmlzaW9uZW1lbnQnKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLmVycm9yKCdNZXJjaSBkZSBjaG9pc2lyIHRvdXQgbGlnbmVzICAuJywgJ2Vycm9yJywgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgbC5zdG9wKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnI2dyaWRBRjMgdGJvZHkgdHIgaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICBpZGFydGljbGUucHVzaCgkKHRoaXMpLmF0dHIoJ2lkJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGlkYXJ0aWNsZS5pbmRleE9mKCQodGhpcykuYXR0cignaWQnKSk7XHJcbiAgICBpZGFydGljbGUuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJyNBZmZlY3Rlcl9hcnRpY2xlX1JjJywgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKCQoJyNhbnRlbm5lJykudmFsKCkgPT0gJycgfHwgIWlkYXJ0aWNsZSkge1xyXG4gICAgdG9hc3RyLmVycm9yKFxyXG4gICAgICAnTWVyY2kgZGUgY2hvaXNpciB1bmUgbGlnbmUgZXQgdW4gYW50ZW5uZSBldCB1biB0eXBlIC4nLFxyXG4gICAgICAnZXJyb3InLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKCQoJyNzdGF0dXMnKS52YWwoKSA9PSAnJykge1xyXG4gICAgdG9hc3RyLmVycm9yKCdNZXJjaSBkZSBDSE9JWCBUWVBFIC4nLCAnZXJyb3InLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlkYXJ0aWNsZS5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICBjb25zdCBpZHRyID0gJyNncmlkQUYzIHRib2R5IHRyLmFydCcgKyBpZDtcclxuICAgICAgJCgnI2dyaWRBRjQgdGJvZHknKS5hcHBlbmQoXHJcbiAgICAgICAgYDx0ciBpZD1gICtcclxuICAgICAgICAgIGlkICtcclxuICAgICAgICAgIGA+XHJcbiAgICAgICAgICAgIDx0ZD5gICtcclxuICAgICAgICAgICQoaWR0cikuZmluZCgnLmlkJykudGV4dCgpICtcclxuICAgICAgICAgIGA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+YCArXHJcbiAgICAgICAgICAkKGlkdHIpLmZpbmQoJy5hcnQnKS50ZXh0KCkgK1xyXG4gICAgICAgICAgYDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5gICtcclxuICAgICAgICAgICQoaWR0cikuZmluZCgnLnF0ZScpLmF0dHIoJ2RhdGEtaWQnKSArXHJcbiAgICAgICAgICBgPC90ZD5cclxuICAgICAgICAgICAgPHRkPmAgK1xyXG4gICAgICAgICAgJChpZHRyKS5maW5kKCcucHJpeCcpLmF0dHIoJ2RhdGEtaWQnKSArXHJcbiAgICAgICAgICBgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGlkPWAgK1xyXG4gICAgICAgICAgJCgnI2FudGVubmUnKS52YWwoKSArXHJcbiAgICAgICAgICBgPmAgK1xyXG4gICAgICAgICAgJCgnI2FudGVubmUgb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpICtcclxuICAgICAgICAgIGA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgaWQ9YCArXHJcbiAgICAgICAgICAkKCcjc3RhdHVzJykudmFsKCkgK1xyXG4gICAgICAgICAgYD5gICtcclxuICAgICAgICAgICQoJyNzdGF0dXMgb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpICtcclxuICAgICAgICAgIGA8L3RkPlxyXG4gICAgICAgICAgPC90cj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBhYSA9XHJcbiAgICAgICAgJChpZHRyKS5maW5kKCcuYXJ0JykuYXR0cignZGF0YS1pZCcpICtcclxuICAgICAgICAnfCcgK1xyXG4gICAgICAgICQoJyNhbnRlbm5lJykudmFsKCkgK1xyXG4gICAgICAgICd8JyArXHJcbiAgICAgICAgJCgnI3N0YXR1cycpLnZhbCgpICtcclxuICAgICAgICAnfCcgK1xyXG4gICAgICAgICQoaWR0cikuZmluZCgnLnF0ZScpLmF0dHIoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgICQoaWR0cikucmVtb3ZlKCk7XHJcbiAgICAgIGlkZGV0LnB1c2goYWEpO1xyXG4gICAgfSk7XHJcbiAgICBpZGFydGljbGUgPSBbXTtcclxuICB9XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcjU2F2ZV9hcnRpY2xlX3RvX21hZ2FzaW4nLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICBsLnN0YXJ0KCk7XHJcbiAgaWYgKCQudHJpbSgkKCcjZ3JpZEFGMyB0Ym9keScpLmh0bWwoKSkgPT0gJycpIHtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgdmFyIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpZGRldCk7XHJcbiAgICB2YXIgaWRMaXYgPSAkKCcubGl2SWQnKS5hdHRyKCdpZCcpO1xyXG4gICAgdmFyIHR5cGVNb3V2ZW1lbnQgPSAkKCcjc3RhdHVzJykudmFsKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2pzb25TdHJpbmcnLCBqc29uU3RyaW5nKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZU1vdXZlbWVudCcsIHR5cGVNb3V2ZW1lbnQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvc3RvY2svZGVtYW5kZS9FbnJlZ2lzdHJlcl9BcnRpY2xlLycgKyBpZExpdixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0LCAnU3VjY8OpZXMnLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uKFwiL3N0b2NrL2RlbWFuZGUvQXJ0aWNsZVJjXCIpO1xyXG4gICAgICAgIC8vICcvc3RvY2svZGVtYW5kZS8nLCBcIl9zZWxmXCJcclxuICAgICAgICB3aW5kb3cub3BlbignL3N0b2NrL2RlbWFuZGUvQXJ0aWNsZVJjJywgJ19zZWxmJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICdNZXJjaSBkZSBjaG9pc2lyIHRvdXQgbGlnbmVzICAuJywgJ2Vycm9yJywgeyB0aW1lT3V0OiA0MDAwIH07XHJcbiAgICBsLnN0b3AoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuY2xhc3NfcG9wJywgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgbXlJbnB1dFZhbCA9ICQoJy5teUlucHV0JykudmFsKCk7XHJcbiAgLy8gQ2xlYW4gdmFsdWUgb2YgbXlJbnB1dFxyXG4gIHZhciBjbGVhblZhbCA9ICQudHJpbShteUlucHV0VmFsKTtcclxuICAvLyBTZXQgY2xlYW4gdmFsdWUgdG8gbXlJbnB1dFxyXG4gICQoJy5teUlucHV0JykudmFsKGNsZWFuVmFsKTtcclxuICAvLyBTZXQgZm9jdXMgb24gbXlJbnB1dFxyXG4gICQoJy5teUlucHV0JykuZm9jdXMoKTtcclxuICAvLyBSZWxvYWQgdGhlIHBhZ2VcclxuICBsb2NhdGlvbi5yZWxvYWQoKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgJCgnLm15SW5wdXQnKS5rZXlwcmVzcyhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCBjb2RlYXJ0ID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdjaGVja0NvZGVBcnRpY2xlJywge1xyXG4gICAgICAgICAgY29kZWFydDogY29kZWFydCxcclxuICAgICAgICAgIGRlbWFuZGU6IGlkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgJCgnI2V4YW1wbGVNb2RhbCcpLmZpbmQoJyNjb250ZW50X3Byb2R1aXQnKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAkKCcjZXhhbXBsZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICQoJy5teUlucHV0JykudmFsKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFxyXG4gICAgICAgICAgICAncHJvZHVpdCBxdWUgdm91cyBzY2FubmV6IGludHJvdXZhYmxlIGRhbnMgbGEgZGVtYW5kZSBTdG9jayAuJyxcclxuICAgICAgICAgICAgJ0VycmV1cicsXHJcbiAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8vICBTdGFydCBuZXcgTW9kYWxcclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIGlucHV0VmFsdWUgPSBwYXJzZUludCgkKCcjaW5jZGVjIGlucHV0JykudmFsKCkpICsgMTtcclxuICBpZiAoaW5wdXRWYWx1ZSA+PSAkKCcjaW5wdXQxJykudmFsKCkpIHtcclxuICAgIGlucHV0VmFsdWUgPSAkKCcjaW5wdXQxJykudmFsKCk7XHJcbiAgfVxyXG5cclxuICAkKCcjaW5jZGVjIGlucHV0JykudmFsKGlucHV0VmFsdWUpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIGlucHV0VmFsdWUgPSBwYXJzZUludCgkKCcjaW5jZGVjIGlucHV0JykudmFsKCkpIC0gMTtcclxuICAvLyBDaGVjayBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgbGVzcyB0aGFuIDAsIGlmIHNvLCBzZXQgaXQgdG8gMFxyXG4gIGlmIChpbnB1dFZhbHVlIDwgMCkge1xyXG4gICAgaW5wdXRWYWx1ZSA9IDA7XHJcbiAgfVxyXG4gICQoJyNpbmNkZWMgaW5wdXQnKS52YWwoaW5wdXRWYWx1ZSk7XHJcbn0pO1xyXG5cclxudmFyIGFudGVubmVWYWx1ZXMgPSBbXTsgLy8gRGVjbGFyZSB0aGUgYW50ZW5uZVZhbHVlcyBhcnJheSBvdXRzaWRlIHRoZSBjbGljayBldmVudCBoYW5kbGVyXHJcblxyXG4vLyBDbGljayBldmVudCBoYW5kbGVyIGZvciBjaGVja2JveGVzXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmNoZWNrX2FudGVubmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gQ2xlYXIgdGhlIGFudGVubmVWYWx1ZXMgYXJyYXkgYmVmb3JlIGFkZGluZyB2YWx1ZXNcclxuICBhbnRlbm5lVmFsdWVzID0gW107XHJcblxyXG4gIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIGNoZWNrZWQgY2hlY2tib3hlcyB3aXRoIGNsYXNzIFwiY2hlY2tfYW50ZW5uZVwiXHJcbiAgJCgnLmNoZWNrX2FudGVubmU6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gQWRkIHRoZSB2YWx1ZSBvZiBlYWNoIGNoZWNrZWQgY2hlY2tib3ggdG8gdGhlIGFudGVubmVWYWx1ZXMgYXJyYXlcclxuICAgIGFudGVubmVWYWx1ZXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICB9KTtcclxuICB0YWJsZTMuYWpheC5yZWxvYWQoKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIC8vIFNldCBmb2N1cyBvbiB0aGUgaW5wdXQgZmllbGQgd2l0aCB0aGUgc3BlY2lmaWVkIGNsYXNzIGFuZCBwbGFjZWhvbGRlclxyXG4gIHZhciBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15SW5wdXQnKTtcclxuICBpbnB1dEZpZWxkLmZvY3VzKCk7XHJcbn0pO1xyXG5cclxuLy8gQ2xpY2sgZXZlbnQgaGFuZGxlciBmb3IgI2NoZWNrRGVtYW5kZVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJyNjaGVja0RlbWFuZGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnI2NoZWNrUmV0b3VyJykudmFsKCdvZmYnKTtcclxuICAkKHRoaXMpLnZhbCgnRGVtYW5kZScpO1xyXG4gIHRhYmxlMy5hamF4LnJlbG9hZCgpO1xyXG59KTtcclxuXHJcbi8vIENsaWNrIGV2ZW50IGhhbmRsZXIgZm9yICNjaGVja1JldG91clxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJyNjaGVja1JldG91cicsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjY2hlY2tEZW1hbmRlJykudmFsKCdvZmYnKTtcclxuICAkKHRoaXMpLnZhbCgnUmV0b3VyJyk7XHJcbiAgdGFibGUzLmFqYXgucmVsb2FkKCk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlMyA9ICQoJyNTdG9vY2tfVmVyaWZpZXInKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndmVyaWZpZXJfc3RvY2tfY2FiJyksXHJcbiAgICB0eXBlOiAnZ2V0JyxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgIGQuZGVtYW5kZSA9ICQoJyNjaGVja0RlbWFuZGUnKS52YWwoKTtcclxuICAgICAgZC5yZXRvdXIgPSAkKCcjY2hlY2tSZXRvdXInKS52YWwoKTtcclxuICAgICAgZC5hbnRlbm5lVmFsdWVzID0gSlNPTi5zdHJpbmdpZnkoYW50ZW5uZVZhbHVlcyk7IC8vIENvbnZlcnQgYXJyYXkgdG8gSlNPTiBzdHJpbmcgYW5kIGFkZCB0byBkYXRhIG9iamVjdFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHN0YXRlU2F2ZTogZmFsc2UsXHJcbiAgc3RhdGVTYXZlUGFyYW1zOiBmdW5jdGlvbiAoc2V0dGluZ3MsIGRhdGEpIHtcclxuICAgIC8vIFNhdmUgdGhlIHNlYXJjaCBpbnB1dCB2YWx1ZVxyXG4gICAgZGF0YS5zZWFyY2gudmFsdWUgPSAkKCcjU3Rvb2NrX1ZlcmlmaWVyX2ZpbHRlciBpbnB1dCcpLnZhbCgpO1xyXG4gIH0sXHJcblxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gIF0sXHJcbiAgcGFnZUxlbmd0aDogMTAsXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyB3aWR0aDogJzUlJywgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IHdpZHRoOiAnMjAlJyB9LFxyXG4gICAgeyB3aWR0aDogJzIwJScgfSxcclxuICAgIHsgd2lkdGg6ICcyMCUnIH0sXHJcbiAgICB7IHdpZHRoOiAnMjAlJyB9LFxyXG4gICAgLy8geyB3aWR0aDogJzIwJScgfSxcclxuXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiAnMjAlJyB9LFxyXG4gIF0sXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICBjbGFzc05hbWU6ICdidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlJyxcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgaW5pdENvbXBsZXRlOiBmdW5jdGlvbiAoc2V0dGluZ3MsIGpzb24pIHtcclxuICAgICQoJyNTdG9vY2tfVmVyaWZpZXJfZmlsdGVyIGlucHV0JykuYXR0cignc2l6ZScsICczMCcpLmZvY3VzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG4kKCcjTGl2cmFpc29uX1BhcnRpZWxsZV9kZW1hbmRlX2RldGFpbHMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gIHZhciBkZXRzUXRsaXZyZSA9IFtdO1xyXG4gIHZhciBpbnB1dHMgPSAkKCcuZGV0SW5wdXRRdGxpdnJlJyk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBkZXQgPSB7fTtcclxuICAgIGRldFsnaWQnXSA9ICQoaW5wdXRzW2ldKS5hdHRyKCdpZCcpO1xyXG4gICAgZGV0WydxdF9saXZyZSddID0gJChpbnB1dHNbaV0pLnZhbCgpO1xyXG5cclxuICAgIGRldHNRdGxpdnJlLnB1c2goZGV0KTtcclxuICB9XHJcblxyXG4gIGwuc3RhcnQoKTtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICB2YXIganNvbl9hcnIgPSBKU09OLnN0cmluZ2lmeShkZXRzUXRsaXZyZSk7XHJcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgZGF0YS5hcHBlbmQoJ2RldHNRdGxpdnJlJywganNvbl9hcnIpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdMaXZyYWlzb25fUGFydGllbGxlX2RlbWFuZGUnKSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2FwcHJvdmlzaW9uZW1lbnQvVmVyaWZpZXIvJywgJ19zZWxmJyk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAwKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgIHZhciBlcnJzID0gcmVzdWx0LmVycm9ycztcclxuICAgICAgICB2YXIgdHJzID0gJCgnLnRhYmxlLWRldGFpbCB0Ym9keSB0cicpO1xyXG4gICAgICAgIGVycnMubWFwKChlcnMpID0+IHtcclxuICAgICAgICAgIHRycy5tYXAoKHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKHRyc1t0cl0pLmF0dHIoJ2NsYXNzJykgPT0gZXJzKSB7XHJcbiAgICAgICAgICAgICAgJCh0cnNbdHJdKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5kZXRJbnB1dFF0bGl2cmUnKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSB0ZXh0LWRhbmdlciBtbC0yXCIgc3R5bGU9XCJmb250LXNpemU6IDEycHg7XCI+PC9pPidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcigncXVhbnRpdMOpIGludHJvdXZhYmxlIGVuIHN0b2NrJywgJ0Vycm9yJywge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyJywgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuJCgnI0xpdnJhaXNvbl9Db21wbGV0ZV9kZW1hbmRlX2RldGFpbHMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAkKCcjTGl2cmFpc29uX1BhcnRpZWxsZV9kZW1hbmRlJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAkKCcudGFibGUtZGV0YWlsIHRib2R5IHRyIGknKS5yZW1vdmUoKTtcclxuICB2YXIgdHJzID0gJCgnLnRhYmxlLWRldGFpbCB0Ym9keSB0ciAnKTtcclxuICBsZXQgZXJyb3IgPSBudWxsO1xyXG4gIHRycy5tYXAoKHRyKSA9PiB7XHJcbiAgICB2YXIgcXVhbnRpdHlTYWlzaWUgPSAkKHRyc1t0cl0pLmZpbmQoJy5kZXRJbnB1dFF0bGl2cmUnKS52YWwoKTtcclxuICAgIHZhciBxdWFudGl0eURpc3BvbmlibGUgPSAkKHRyc1t0cl0pLmZpbmQoJy5xdWFudGl0ZURpc3BvbmlibGUnKS50ZXh0KCk7XHJcbiAgICAkKHRyc1t0cl0pLmZpbmQoJy5kZXRJbnB1dFF0bGl2cmUnKS5wYXJlbnQoKTtcclxuICB9KTtcclxuXHJcbiAgdmFyIGRldHNRdGxpdnJlID0gW107XHJcblxyXG4gIHZhciBpbnB1dHMgPSAkKCcuZGV0SW5wdXRRdGxpdnJlJyk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBkZXQgPSB7fTtcclxuICAgIGRldFsnaWQnXSA9ICQoaW5wdXRzW2ldKS5hdHRyKCdpZCcpO1xyXG4gICAgZGV0WydxdF9saXZyZSddID0gJChpbnB1dHNbaV0pLnZhbCgpO1xyXG4gICAgZGV0Wydjb25kaXRpb25uZW1lbnRfbGl2cmUnXSA9ICQoaW5wdXRzW2ldKVxyXG4gICAgICAucGFyZW50KClcclxuICAgICAgLnBhcmVudCgpXHJcbiAgICAgIC5maW5kKCcuY29uZGl0aW9ubmVtZW50X2xpdnJlJylcclxuICAgICAgLmZpbmQoJzpzZWxlY3RlZCcpXHJcbiAgICAgIC50ZXh0KCk7XHJcbiAgICBkZXRzUXRsaXZyZS5wdXNoKGRldCk7XHJcbiAgfVxyXG5cclxuICBsLnN0YXJ0KCk7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgdmFyIGpzb25fYXJyID0gSlNPTi5zdHJpbmdpZnkoZGV0c1F0bGl2cmUpO1xyXG4gIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgY29uc29sZS5sb2coZGV0c1F0bGl2cmUpO1xyXG4gIGRhdGEuYXBwZW5kKCdpZCcsIGlkKTtcclxuICBkYXRhLmFwcGVuZCgnZGV0c1F0bGl2cmUnLCBqc29uX2Fycik7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ0xpdnJhaXNvbl9Db21wbGV0ZV9kZW1hbmRlJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0Lm1lc3NhZ2UgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKCdEZW1hbmRlIGRlIHN0b2NrIGEgYSDDqXTDqSBiaWVuIGxpdnLDqWUgLicsICdTdWNjw6llcycsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9hcHByb3Zpc2lvbmVtZW50L1ZlcmlmaWVyLycsICdfc2VsZicpO1xyXG5cclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdmFyIGVycnMgPSByZXN1bHQuZXJyb3JzO1xyXG5cclxuICAgICAgICB2YXIgdHJzID0gJCgnLnRhYmxlLWRldGFpbCB0Ym9keSB0cicpO1xyXG4gICAgICAgIGVycnMubWFwKChlcnMpID0+IHtcclxuICAgICAgICAgIHRycy5tYXAoKHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKHRyc1t0cl0pLmF0dHIoJ2NsYXNzJykgPT0gZXJzKSB7XHJcbiAgICAgICAgICAgICAgJCh0cnNbdHJdKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5kZXRJbnB1dFF0bGl2cmUnKVxyXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSB0ZXh0LWRhbmdlciBtbC0yXCIgc3R5bGU9XCJmb250LXNpemU6IDEycHg7XCI+PC9pPidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcigncXVhbnRpdMOpIGludHJvdXZhYmxlIGVuIHN0b2NrJywgJ0Vycm9yJywge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyJywgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICB9LFxyXG4gICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==