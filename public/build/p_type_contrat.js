(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p_type_contrat"],{

/***/ "./assets/js/components/parametrage/p_type_contrat.js":
/*!************************************************************!*\
  !*** ./assets/js/components/parametrage/p_type_contrat.js ***!
  \************************************************************/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('p_type_contrat_list'),
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
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 2, 3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [4, 5, 6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchCheckbox"](api, [0], []);
});
$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_type_contrat_new"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
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
  if ($(document.activeElement).hasClass("button-save-add-contrat")) {
    //alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-add-contrat"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-contrat"));
    var _goto = 0;
  }
  l.start();
  var id = $("#test").data("serviceId");
  var obj = new Object();
  obj["route"] = "p_type_contrat_new";
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
    obj["route"] = "p_type_contrat_delete";
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_type_contrat_edit", {
      id: $(this).closest("tr").attr("id")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique").modal("show");
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
  var id = $("#test").data("contratId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-edit-contrat"));
  l.start();
  var obj = new Object();
  var parametre = {
    id: id
  };
  obj["route"] = "p_type_contrat_edit";
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

},[["./assets/js/components/parametrage/p_type_contrat.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wX3R5cGVfY29udHJhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImdsb2JhbCIsIiQiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInRhYmxlIiwiRGF0YVRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwidHlwZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFwaSIsImNsaWNrIiwic3RyIiwiaW5uZXJIVE1MIiwibiIsInNlYXJjaCIsImRyYXciLCJmaXhlZEhlYWRlciIsIm9uIiwic2V0dGluZ3MiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiZGF0YSIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJodG1sIiwiaGlkZSIsIm1vZGFsIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9uYW1lIiwiYXR0ciIsImR0YSIsIkZvcm1EYXRhIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJoYXNDbGFzcyIsImwiLCJMYWRkYSIsInF1ZXJ5U2VsZWN0b3IiLCJnb3RvIiwic3RhcnQiLCJpZCIsIm9iaiIsIk9iamVjdCIsIlNob3dGb3JtRXJyb3JzIiwiYXV0b0Z1bmN0aW9uQWpheCIsInRva2VuIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJjbG9zZXN0Iiwic2VsZWN0Ml9kb3NzaWVycyIsInNlbGVjdDIiLCJwbGFjZWhvbGRlciIsImFsbG93Q2xlYXIiLCJwYXJhbWV0cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUVDO0FBQ2tDO0FBQ2pFSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUM0RDtBQUVpQjtBQUV6RixJQUFNQyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNTSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUs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eUZBQThCO0FBQ3BELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyw2REFBNkQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBLEdBQUcsdUVBQXVFO0FBQzFFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBLEdBQUcscUVBQXFFO0FBQ3hFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFDQSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHFGQUE0QiIsImZpbGUiOiJwX3R5cGVfY29udHJhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanNcIjtcclxuZ2xvYmFsLiQgPSAkO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qc1wiO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuLy92YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgncF90eXBlX2NvbnRyYXRfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWyAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1sgMCwgXCJkZXNjXCIgXV0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwiaW5pdENvbXBsZXRlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFwaSA9IHRoaXMuYXBpKCk7XHJcbiAgICAgICAgICAgIGFwaS4kKCd0ZCcpLmNsaWNrKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHN0ciA9IHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgdmFyIG4gPSBzdHIuc2VhcmNoKFwiY2Rfb3BcIik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmKG49PS0xKXtcclxuICAgICAgICAgICAgICAgIGFwaS5zZWFyY2goIHRoaXMuaW5uZXJIVE1MICkuZHJhdygpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwyLDNdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFs0LDUsNl0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFtdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLmFkZFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfdHlwZV9jb250cmF0X25ld1wiKSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5ib2RcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwiYnV0dG9uLXNhdmUtYWRkLWNvbnRyYXRcIikpIHtcclxuICAgICAgICAvL2FsZXJ0KClcclxuICAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc2F2ZS1hZGQtY29udHJhdFwiKSk7XHJcbiAgICAgIHZhciBnb3RvID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXNhdmUtY29udHJhdFwiKSk7XHJcbiAgICAgIHZhciBnb3RvID0gMDtcclxuICAgIH1cclxuICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwic2VydmljZUlkXCIpO1xyXG4gICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgb2JqW1wicm91dGVcIl0gPSBcInBfdHlwZV9jb250cmF0X25ld1wiO1xyXG4gICAgICBvYmpbXCJkYXRhXCJdID0gZHRhO1xyXG4gICAgICBvYmpbXCJwYXJhbWV0cmVcIl0gPSBudWxsO1xyXG4gICAgICBvYmpbXCJsXCJdID0gbDtcclxuICAgICAgb2JqW1wiZm9ybV9uYW1lXCJdID0gZm9ybV9uYW1lO1xyXG4gICAgICBvYmpbXCJzZWxlY3RvclwiXSA9IHNlbGVjdG9yO1xyXG4gICAgICBvYmpbXCJyZWxvYWRUYWJsZVwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcIm1vZGFsXCJdID0gdHJ1ZTtcclxuICAgICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcIm5vbU1vZGFsXCJdID0gXCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCI7XHJcbiAgICAgIG9ialtcInRhYmxlXCJdID0gdGFibGU7XHJcbiAgICAgIG9ialtcImF1dG9UcmlnZ2VyXCJdID0gZ290bztcclxuICAgICAgb2JqW1widHJpZ2dlckNsYXNzXCJdID0gXCJhZGRcIjtcclxuICAgICAgb2JqW1wiU2hvd0Zvcm1FcnJvcnNcIl0gPSBTaG93Rm9ybUVycm9ycztcclxuICAgICAgYXV0b0Z1bmN0aW9uQWpheC5hdXRvQWpheFJlbmRlckNvbnRyb2xsZXIob2JqKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgJChcIi5ib2RcIikub24oXCJjbGlja1wiLCBcIi5fZGVsZXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuICBcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICBvYmpbXCJyb3V0ZVwiXSA9IFwicF90eXBlX2NvbnRyYXRfZGVsZXRlXCI7XHJcbiAgICAgIG9ialtcImlkXCJdID0gaWQ7XHJcbiAgICAgIG9ialtcInRva2VuXCJdID0gdG9rZW47XHJcbiAgICAgIG9ialtcInJlbG9hZFRhYmxlXCJdID0gdHJ1ZTtcclxuICAgICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJoaWRlTW9kdWxlXCJdID0gdHJ1ZTtcclxuICAgICAgb2JqW1wibm9tTW9kYWxcIl0gPSBcIk1vZGFsRG9jdW1lbnREeW5hbWlxdWVcIjtcclxuICAgICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgICAgYXV0b0Z1bmN0aW9uQWpheC5hdXRvQWpheERlbGV0ZShvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICB9KTtcclxuXHJcblxyXG4gICQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNkX29wXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwX3R5cGVfY29udHJhdF9lZGl0XCIsIHtcclxuICAgICAgICBpZDogJCh0aGlzKS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpLFxyXG4gICAgICB9KSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgdmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfZG9zc2llcnNcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9peCBEb3Nzc2llclwiLFxyXG4gICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICBcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiY29udHJhdElkXCIpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tZWRpdC1jb250cmF0XCIpKTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgICB2YXIgcGFyYW1ldHJlID0geyBpZDogaWQgfTtcclxuICAgIG9ialtcInJvdXRlXCJdID0gXCJwX3R5cGVfY29udHJhdF9lZGl0XCI7XHJcbiAgICBvYmpbXCJkYXRhXCJdID0gZHRhO1xyXG4gICAgb2JqW1wicGFyYW1ldHJlXCJdID0gcGFyYW1ldHJlO1xyXG4gICAgb2JqW1wibFwiXSA9IGw7XHJcbiAgICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgICBvYmpbXCJzZWxlY3RvclwiXSA9IHNlbGVjdG9yO1xyXG4gICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4UmVuZGVyQ29udHJvbGxlcihvYmopO1xyXG4gIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIvKiBnbG9iYWwgQnVuIC0tIERlbm8gY2FzZSAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgQnVuID09ICdmdW5jdGlvbicgJiYgQnVuICYmIHR5cGVvZiBCdW4udmVyc2lvbiA9PSAnc3RyaW5nJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgRU5HSU5FX0lTX0JVTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtYnVuJyk7XG52YXIgVVNFUl9BR0VOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcbi8vIGRpcnR5IElFOS0gYW5kIEJ1biAwLjMuMC0gY2hlY2tzXG52YXIgV1JBUCA9IC9NU0lFIC5cXC4vLnRlc3QoVVNFUl9BR0VOVCkgfHwgRU5HSU5FX0lTX0JVTiAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdmVyc2lvbiA9IGdsb2JhbC5CdW4udmVyc2lvbi5zcGxpdCgnLicpO1xuICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPCAzIHx8IHZlcnNpb25bMF0gPT0gMCAmJiAodmVyc2lvblsxXSA8IDMgfHwgdmVyc2lvblsxXSA9PSAzICYmIHZlcnNpb25bMl0gPT0gMCk7XG59KSgpO1xuXG4vLyBJRTktIC8gQnVuIDAuMy4wLSBzZXRUaW1lb3V0IC8gc2V0SW50ZXJ2YWwgLyBzZXRJbW1lZGlhdGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBoYXNUaW1lQXJnKSB7XG4gIHZhciBmaXJzdFBhcmFtSW5kZXggPSBoYXNUaW1lQXJnID8gMiA6IDE7XG4gIHJldHVybiBXUkFQID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiBmaXJzdFBhcmFtSW5kZXg7XG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgcGFyYW1zID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIGZpcnN0UGFyYW1JbmRleCkgOiBbXTtcbiAgICB2YXIgY2FsbGJhY2sgPSBib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdGhpcywgcGFyYW1zKTtcbiAgICB9IDogZm47XG4gICAgcmV0dXJuIGhhc1RpbWVBcmcgPyBzY2hlZHVsZXIoY2FsbGJhY2ssIHRpbWVvdXQpIDogc2NoZWR1bGVyKGNhbGxiYWNrKTtcbiAgfSA6IHNjaGVkdWxlcjtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9