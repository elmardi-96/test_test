(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p_marche"],{

/***/ "./assets/js/components/parametrage/pmarche.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/parametrage/pmarche.js ***!
  \*****************************************************/
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
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_marche_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
  columns: [{
    orderable: false,
    searchable: true,
    width: "1px",
    targets: [0]
  }, {
    orderable: false,
    width: "10px",
    targets: 0
  }, {
    orderable: false,
    width: "10px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }, {
    orderable: false,
    width: "1px",
    targets: 0
  }],
  order: [[0, "desc"]],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }, {
    extend: "excel",
    sheetName: "Liste des projets ",
    filename: function filename() {
      return "U3S-LISTES-MARCHE";
    },
    //sheetName: "Output logiciel complet",
    title: "LISTE DES MARCHES",
    exportOptions: {
      modifier: {
        page: "all"
      },
      columns: ":visible"
      // rows: ":visible",
    }
  }],

  initComplete: function initComplete() {
    var api = this.api();
    api.$("td").click(function () {
      var str = this.innerHTML.toLowerCase();
      var n = str.search("cd_op");
      //alert(n)
      if (n == -1) {
        api.search(this.innerHTML).draw();
      }
    });
  },
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("datatables_langue"),
    processing: true
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 2, 8, 3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [4, 9, 10, 11], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [5, 6, 7], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchCheckbox"](api, [0], []);
});
$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_marche_new"),
    success: function success(result) {
      $(".bod").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique").modal("show");
      $("select.select2").select2();
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
  if ($(document.activeElement).hasClass("button-save-add-marche")) {
    //alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-add-marche"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-marche"));
    var _goto = 0;
  }
  l.start();
  var id = $("#test").data("marcheId");
  var obj = new Object();
  obj["route"] = "p_marche_new";
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
$("#grid tbody").on("click", ".cd_op,.CD_OP", function () {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_marche_edit", {
      id: $(this).closest("tr").attr("id")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique").modal("show");
      $("select.select2").select2();
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
  var id = $("#test").data("marcheId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-edit-marche"));
  l.start();
  var obj = new Object();
  var parametre = {
    id: id
  };
  obj["route"] = "p_marche_edit";
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
$(".bod").on("click", "._delete", function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  if (id) {
    var obj = new Object();
    obj["route"] = "p_marche_delete";
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

},[["./assets/js/components/parametrage/pmarche.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wbWFyY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZGVmZXJSZW5kZXIiLCJzdGF0ZVNhdmUiLCJsZW5ndGhNZW51IiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJ3aWR0aCIsInRhcmdldHMiLCJvcmRlciIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImV4dGVuZCIsInNoZWV0TmFtZSIsImZpbGVuYW1lIiwidGl0bGUiLCJleHBvcnRPcHRpb25zIiwibW9kaWZpZXIiLCJwYWdlIiwiaW5pdENvbXBsZXRlIiwiYXBpIiwiY2xpY2siLCJzdHIiLCJpbm5lckhUTUwiLCJ0b0xvd2VyQ2FzZSIsIm4iLCJzZWFyY2giLCJkcmF3IiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImhpZGUiLCJzZWxlY3QyX2Rvc3NpZXJzIiwic2VsZWN0MiIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsIm1vZGFsIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9uYW1lIiwiYXR0ciIsImR0YSIsIkZvcm1EYXRhIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJoYXNDbGFzcyIsImwiLCJMYWRkYSIsInF1ZXJ5U2VsZWN0b3IiLCJnb3RvIiwic3RhcnQiLCJpZCIsIm9iaiIsIk9iamVjdCIsIlNob3dGb3JtRXJyb3JzIiwiYXV0b0Z1bmN0aW9uQWpheCIsImNsb3Nlc3QiLCJwYXJhbWV0cmUiLCJ0b2tlbiIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztB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XCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSBcImxhZGRhXCI7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanNcIjtcclxuZ2xvYmFsLiQgPSAkO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzXCI7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGVcIixcclxuICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbi8vdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWJ1dHRvbicpKTtcclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfbWFyY2hlX2xpc3RcIiksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgdHlwZTogXCJnZXRcIixcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICBbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSxcclxuICAgIFsxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl0sXHJcbiAgXSxcclxuXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCBzZWFyY2hhYmxlOiB0cnVlLCB3aWR0aDogXCIxcHhcIiwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIiwgdGFyZ2V0czogMCB9LFxyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICBdLFxyXG5cclxuICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG5cclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgc2hlZXROYW1lOiBcIkxpc3RlIGRlcyBwcm9qZXRzIFwiLFxyXG4gICAgICBmaWxlbmFtZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIlUzUy1MSVNURVMtTUFSQ0hFXCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vc2hlZXROYW1lOiBcIk91dHB1dCBsb2dpY2llbCBjb21wbGV0XCIsXHJcbiAgICAgIHRpdGxlOiBcIkxJU1RFIERFUyBNQVJDSEVTXCIsXHJcbiAgICAgIGV4cG9ydE9wdGlvbnM6IHtcclxuICAgICAgICBtb2RpZmllcjogeyBwYWdlOiBcImFsbFwiIH0sXHJcbiAgICAgICAgY29sdW1uczogXCI6dmlzaWJsZVwiLFxyXG4gICAgICAgIC8vIHJvd3M6IFwiOnZpc2libGVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBpbml0Q29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpO1xyXG5cclxuICAgIGFwaS4kKFwidGRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc3RyID0gdGhpcy5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgdmFyIG4gPSBzdHIuc2VhcmNoKFwiY2Rfb3BcIik7XHJcbiAgICAgIC8vYWxlcnQobilcclxuICAgICAgaWYgKG4gPT0gLTEpIHtcclxuICAgICAgICBhcGkuc2VhcmNoKHRoaXMuaW5uZXJIVE1MKS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG4gIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwgMiw4LCAzXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbIDQsIDksIDEwLDExXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgWzUsIDYsN10sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG4kKFwiLmFkZFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfbWFyY2hlX25ld1wiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgdmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfZG9zc2llcnNcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggRG9zc3NpZXJcIixcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgJChcInNlbGVjdC5zZWxlY3QyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKFwiLmJvZFwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwiYnV0dG9uLXNhdmUtYWRkLW1hcmNoZVwiKSkge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1zYXZlLWFkZC1tYXJjaGVcIikpO1xyXG4gICAgdmFyIGdvdG8gPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1zYXZlLW1hcmNoZVwiKSk7XHJcbiAgICB2YXIgZ290byA9IDA7XHJcbiAgfVxyXG4gIGwuc3RhcnQoKTtcclxuICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcIm1hcmNoZUlkXCIpO1xyXG4gIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgb2JqW1wicm91dGVcIl0gPSBcInBfbWFyY2hlX25ld1wiO1xyXG4gIG9ialtcImRhdGFcIl0gPSBkdGE7XHJcbiAgb2JqW1wicGFyYW1ldHJlXCJdID0gbnVsbDtcclxuICBvYmpbXCJsXCJdID0gbDtcclxuICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgb2JqW1wic2VsZWN0b3JcIl0gPSBzZWxlY3RvcjtcclxuICBvYmpbXCJyZWxvYWRUYWJsZVwiXSA9IHRydWU7XHJcbiAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gIG9ialtcIm5vbU1vZGFsXCJdID0gXCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCI7XHJcbiAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICBvYmpbXCJhdXRvVHJpZ2dlclwiXSA9IGdvdG87XHJcbiAgb2JqW1widHJpZ2dlckNsYXNzXCJdID0gXCJhZGRcIjtcclxuICBvYmpbXCJTaG93Rm9ybUVycm9yc1wiXSA9IFNob3dGb3JtRXJyb3JzO1xyXG4gIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhSZW5kZXJDb250cm9sbGVyKG9iaik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuY2Rfb3AsLkNEX09QXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwX21hcmNoZV9lZGl0XCIsIHtcclxuICAgICAgaWQ6ICQodGhpcykuY2xvc2VzdChcInRyXCIpLmF0dHIoXCJpZFwiKSxcclxuICAgIH0pLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICB2YXIgc2VsZWN0Ml9kb3NzaWVycyA9ICQoXCIuc2VsZWN0Ml9kb3NzaWVyc1wiKS5zZWxlY3QyKHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9peCBEb3Nzc2llclwiLFxyXG4gICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAkKFwic2VsZWN0LnNlbGVjdDJcIikuc2VsZWN0MigpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgIH0sIDYwMCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuXHJcbiAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJtYXJjaGVJZFwiKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1lZGl0LW1hcmNoZVwiKSk7XHJcbiAgbC5zdGFydCgpO1xyXG4gIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgdmFyIHBhcmFtZXRyZSA9IHsgaWQ6IGlkIH07XHJcbiAgb2JqW1wicm91dGVcIl0gPSBcInBfbWFyY2hlX2VkaXRcIjtcclxuICBvYmpbXCJkYXRhXCJdID0gZHRhO1xyXG4gIG9ialtcInBhcmFtZXRyZVwiXSA9IHBhcmFtZXRyZTtcclxuICBvYmpbXCJsXCJdID0gbDtcclxuICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgb2JqW1wic2VsZWN0b3JcIl0gPSBzZWxlY3RvcjtcclxuICBvYmpbXCJyZWxvYWRUYWJsZVwiXSA9IHRydWU7XHJcbiAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gIG9ialtcIm5vbU1vZGFsXCJdID0gXCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCI7XHJcbiAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICBvYmpbXCJTaG93Rm9ybUVycm9yc1wiXSA9IFNob3dGb3JtRXJyb3JzO1xyXG4gIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhSZW5kZXJDb250cm9sbGVyKG9iaik7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLmJvZFwiKS5vbihcImNsaWNrXCIsIFwiLl9kZWxldGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcblxyXG4gIGlmIChpZCkge1xyXG4gICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG9ialtcInJvdXRlXCJdID0gXCJwX21hcmNoZV9kZWxldGVcIjtcclxuICAgIG9ialtcImlkXCJdID0gaWQ7XHJcbiAgICBvYmpbXCJ0b2tlblwiXSA9IHRva2VuO1xyXG4gICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhEZWxldGUob2JqKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLFxyXG4gICAgICBcIndhcm5pbmdcIixcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiLyogZ2xvYmFsIEJ1biAtLSBEZW5vIGNhc2UgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIEJ1biA9PSAnZnVuY3Rpb24nICYmIEJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIEVOR0lORV9JU19CVU4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bicpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOR0lORV9JU19CVU4gJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlcnNpb24gPSBnbG9iYWwuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09IDAgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT0gMyAmJiB2ZXJzaW9uWzJdID09IDApO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwidmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcbiAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuICByZXR1cm4gcGFzc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0SW50ZXJ2YWwgPSBzY2hlZHVsZXJzRml4KGdsb2JhbC5zZXRJbnRlcnZhbCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldEludGVydmFsICE9PSBzZXRJbnRlcnZhbCB9LCB7XG4gIHNldEludGVydmFsOiBzZXRJbnRlcnZhbFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0VGltZW91dCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldFRpbWVvdXQsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldFRpbWVvdXQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0VGltZW91dCAhPT0gc2V0VGltZW91dCB9LCB7XG4gIHNldFRpbWVvdXQ6IHNldFRpbWVvdXRcbn0pO1xuIiwiLy8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBzcGxpdCB0byBtb2R1bGVzIGxpc3RlZCBiZWxvd1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LWludGVydmFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtdGltZW91dCcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==