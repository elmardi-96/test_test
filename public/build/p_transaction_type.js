(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p_transaction_type"],{

/***/ "./assets/js/components/parametrage/p_transaction_type.js":
/*!****************************************************************!*\
  !*** ./assets/js/components/parametrage/p_transaction_type.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");



var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.setRoutingData(routes);


global.$ = $;


var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('p_transaction_type_list'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
  "columns": [{
    "orderable": false,
    "searchable": true,
    "width": "1px",
    "targets": [0]
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "1px",
    "targets": 0
  }],
  "order": [[0, "desc"]],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  "initComplete": function initComplete() {
    var api = this.api();
    api.$('td').click(function () {
      var str = this.innerHTML;
      var n = str.search("cd_op");
      if (n == -1) {
        api.search(this.innerHTML).draw();
      }
    });
  },
  "language": {
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 2], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchCheckbox"](api, [0], []);
});
$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_transaction_type_new"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      $('select.select2').select2();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$(".bod").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  if ($(document.activeElement).hasClass("button-save-add-transaction")) {
    //alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-add-transaction"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-transaction"));
    var _goto = 0;
  }
  l.start();
  var id = $("#test").data("serviceId");
  var obj = new Object();
  obj["route"] = "p_transaction_type_new";
  obj["data"] = dta;
  obj["parametre"] = null;
  obj["l"] = l;
  obj["form_name"] = form_name;
  obj["selector"] = selector;
  obj["reloadTable"] = true;
  obj["modal"] = true;
  obj["hideModule"] = true;
  obj["nomModal"] = "ModalDocumentDynamique";
  obj["table"] = table;
  obj["autoTrigger"] = _goto;
  obj["triggerClass"] = "add";
  obj["ShowFormErrors"] = _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__["ShowFormErrors"];
  _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__["autoAjaxRenderController"](obj);
  e.preventDefault();
});
$(".bod").on("click", "._delete", function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  if (id) {
    var obj = new Object();
    obj["route"] = "p_transaction_type_delete";
    obj["id"] = id;
    obj["token"] = token;
    obj["reloadTable"] = true;
    obj["modal"] = true;
    obj["hideModule"] = true;
    obj["nomModal"] = "ModalDocumentDynamique";
    obj["table"] = table;
    _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__["autoAjaxDelete"](obj);
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#grid tbody").on("click", ".cd_op", function () {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_transaction_type_edit", {
      id: $(this).closest("tr").attr("id")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique").modal("show");
      $('select.select2').select2();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
});
$(".bod").on("submit", ".form_edit", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = $("#test").data("transactionId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-edit-transaction"));
  l.start();
  var obj = new Object();
  var parametre = {
    id: id
  };
  obj["route"] = "p_transaction_type_edit";
  obj["data"] = dta;
  obj["parametre"] = parametre;
  obj["l"] = l;
  obj["form_name"] = form_name;
  obj["selector"] = selector;
  obj["reloadTable"] = true;
  obj["modal"] = true;
  obj["hideModule"] = true;
  obj["nomModal"] = "ModalDocumentDynamique";
  obj["table"] = table;
  obj["ShowFormErrors"] = _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__["ShowFormErrors"];
  _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__["autoAjaxRenderController"](obj);
  e.preventDefault();
});
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

/***/ "./node_modules/core-js/internals/engine-is-bun.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-bun.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global Bun -- Deno case */
module.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';


/***/ }),

/***/ "./node_modules/core-js/internals/schedulers-fix.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/schedulers-fix.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var ENGINE_IS_BUN = __webpack_require__(/*! ../internals/engine-is-bun */ "./node_modules/core-js/internals/engine-is-bun.js");
var USER_AGENT = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
  var version = global.Bun.version.split('.');
  return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
    var fn = isCallable(handler) ? handler : Function(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
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

/***/ "./node_modules/core-js/modules/web.set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-interval.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setInterval = schedulersFix(global.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-timeout.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-timeout.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setTimeout = schedulersFix(global.setTimeout, true);

// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "./node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "./node_modules/core-js/modules/web.set-timeout.js");


/***/ })

},[["./assets/js/components/parametrage/p_transaction_type.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wX3RyYW5zYWN0aW9uX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtYnVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJhcGkiLCJjbGljayIsInN0ciIsImlubmVySFRNTCIsIm4iLCJzZWFyY2giLCJkcmF3IiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImhpZGUiLCJtb2RhbCIsInNlbGVjdDIiLCJzZXRUaW1lb3V0IiwiZmFkZUluIiwicHJldmVudERlZmF1bHQiLCJmb3JtX25hbWUiLCJhdHRyIiwiZHRhIiwiRm9ybURhdGEiLCJzZWxlY3RvciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImhhc0NsYXNzIiwibCIsIkxhZGRhIiwicXVlcnlTZWxlY3RvciIsImdvdG8iLCJzdGFydCIsImlkIiwib2JqIiwiT2JqZWN0IiwiU2hvd0Zvcm1FcnJvcnMiLCJhdXRvRnVuY3Rpb25BamF4IiwidG9rZW4iLCJ0b2FzdHIiLCJ3YXJuaW5nIiwidGltZU91dCIsImNsb3Nlc3QiLCJzZWxlY3QyX2Rvc3NpZXJzIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwicGFyYW1ldHJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUM3R0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFQztBQUNrQztBQUNqRUksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFDNEQ7QUFFaUI7QUFFekYsSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxF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QUE4QjtBQUNwRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHVFQUF1RTtBQUMxRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHFFQUFxRTtBQUN4RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJmaWxlIjoicF90cmFuc2FjdGlvbl90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5nbG9iYWwuJCA9ICQ7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzXCI7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG4vL3ZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1idXR0b24nKSk7XHJcblxyXG52YXIgdGFibGUgPSAkKCcjZ3JpZCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdwX3RyYW5zYWN0aW9uX3R5cGVfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWyAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICBdLFxyXG4gICAgXCJvcmRlclwiOiBbWyAwLCBcImRlc2NcIiBdXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJpbml0Q29tcGxldGVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXBpID0gdGhpcy5hcGkoKTtcclxuICAgICAgICAgICAgYXBpLiQoJ3RkJykuY2xpY2soIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB2YXIgc3RyID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHN0ci5zZWFyY2goXCJjZF9vcFwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYobj09LTEpe1xyXG4gICAgICAgICAgICAgICAgYXBpLnNlYXJjaCggdGhpcy5pbm5lckhUTUwgKS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLDJdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFszXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgW10sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCIuYWRkXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF90cmFuc2FjdGlvbl90eXBlX25ld1wiKSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAkKCdzZWxlY3Quc2VsZWN0MicpLnNlbGVjdDIoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5ib2RcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwiYnV0dG9uLXNhdmUtYWRkLXRyYW5zYWN0aW9uXCIpKSB7XHJcbiAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXNhdmUtYWRkLXRyYW5zYWN0aW9uXCIpKTtcclxuICAgICAgdmFyIGdvdG8gPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc2F2ZS10cmFuc2FjdGlvblwiKSk7XHJcbiAgICAgIHZhciBnb3RvID0gMDtcclxuICAgIH1cclxuICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwic2VydmljZUlkXCIpO1xyXG4gICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgb2JqW1wicm91dGVcIl0gPSBcInBfdHJhbnNhY3Rpb25fdHlwZV9uZXdcIjtcclxuICAgICAgb2JqW1wiZGF0YVwiXSA9IGR0YTtcclxuICAgICAgb2JqW1wicGFyYW1ldHJlXCJdID0gbnVsbDtcclxuICAgICAgb2JqW1wibFwiXSA9IGw7XHJcbiAgICAgIG9ialtcImZvcm1fbmFtZVwiXSA9IGZvcm1fbmFtZTtcclxuICAgICAgb2JqW1wic2VsZWN0b3JcIl0gPSBzZWxlY3RvcjtcclxuICAgICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gICAgICBvYmpbXCJhdXRvVHJpZ2dlclwiXSA9IGdvdG87XHJcbiAgICAgIG9ialtcInRyaWdnZXJDbGFzc1wiXSA9IFwiYWRkXCI7XHJcbiAgICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgICAgIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhSZW5kZXJDb250cm9sbGVyKG9iaik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICQoXCIuYm9kXCIpLm9uKFwiY2xpY2tcIiwgXCIuX2RlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcbiAgXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgb2JqW1wicm91dGVcIl0gPSBcInBfdHJhbnNhY3Rpb25fdHlwZV9kZWxldGVcIjtcclxuICAgICAgb2JqW1wiaWRcIl0gPSBpZDtcclxuICAgICAgb2JqW1widG9rZW5cIl0gPSB0b2tlbjtcclxuICAgICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gICAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4RGVsZXRlKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIixcclxuICAgICAgICBcIndhcm5pbmdcIixcclxuICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuY2Rfb3BcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfdHJhbnNhY3Rpb25fdHlwZV9lZGl0XCIsIHtcclxuICAgICAgICBpZDogJCh0aGlzKS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpLFxyXG4gICAgICB9KSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgdmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfZG9zc2llcnNcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9peCBEb3Nzc2llclwiLFxyXG4gICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgJCgnc2VsZWN0LnNlbGVjdDInKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICBcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwidHJhbnNhY3Rpb25JZFwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWVkaXQtdHJhbnNhY3Rpb25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgIHZhciBwYXJhbWV0cmUgPSB7IGlkOiBpZCB9O1xyXG4gICAgb2JqW1wicm91dGVcIl0gPSBcInBfdHJhbnNhY3Rpb25fdHlwZV9lZGl0XCI7XHJcbiAgICBvYmpbXCJkYXRhXCJdID0gZHRhO1xyXG4gICAgb2JqW1wicGFyYW1ldHJlXCJdID0gcGFyYW1ldHJlO1xyXG4gICAgb2JqW1wibFwiXSA9IGw7XHJcbiAgICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgICBvYmpbXCJzZWxlY3RvclwiXSA9IHNlbGVjdG9yO1xyXG4gICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4UmVuZGVyQ29udHJvbGxlcihvYmopO1xyXG4gIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIvKiBnbG9iYWwgQnVuIC0tIERlbm8gY2FzZSAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgQnVuID09ICdmdW5jdGlvbicgJiYgQnVuICYmIHR5cGVvZiBCdW4udmVyc2lvbiA9PSAnc3RyaW5nJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgRU5HSU5FX0lTX0JVTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtYnVuJyk7XG52YXIgVVNFUl9BR0VOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcbi8vIGRpcnR5IElFOS0gYW5kIEJ1biAwLjMuMC0gY2hlY2tzXG52YXIgV1JBUCA9IC9NU0lFIC5cXC4vLnRlc3QoVVNFUl9BR0VOVCkgfHwgRU5HSU5FX0lTX0JVTiAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdmVyc2lvbiA9IGdsb2JhbC5CdW4udmVyc2lvbi5zcGxpdCgnLicpO1xuICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPCAzIHx8IHZlcnNpb25bMF0gPT0gMCAmJiAodmVyc2lvblsxXSA8IDMgfHwgdmVyc2lvblsxXSA9PSAzICYmIHZlcnNpb25bMl0gPT0gMCk7XG59KSgpO1xuXG4vLyBJRTktIC8gQnVuIDAuMy4wLSBzZXRUaW1lb3V0IC8gc2V0SW50ZXJ2YWwgLyBzZXRJbW1lZGlhdGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBoYXNUaW1lQXJnKSB7XG4gIHZhciBmaXJzdFBhcmFtSW5kZXggPSBoYXNUaW1lQXJnID8gMiA6IDE7XG4gIHJldHVybiBXUkFQID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiBmaXJzdFBhcmFtSW5kZXg7XG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgcGFyYW1zID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIGZpcnN0UGFyYW1JbmRleCkgOiBbXTtcbiAgICB2YXIgY2FsbGJhY2sgPSBib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdGhpcywgcGFyYW1zKTtcbiAgICB9IDogZm47XG4gICAgcmV0dXJuIGhhc1RpbWVBcmcgPyBzY2hlZHVsZXIoY2FsbGJhY2ssIHRpbWVvdXQpIDogc2NoZWR1bGVyKGNhbGxiYWNrKTtcbiAgfSA6IHNjaGVkdWxlcjtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9