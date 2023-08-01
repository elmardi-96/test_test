(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p_projet"],{

/***/ "./assets/js/components/parametrage/pprojet.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/parametrage/pprojet.js ***!
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_projet_list"),
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
    width: "10px",
    targets: 0
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
      return "U3S-LISTES-PROJETS";
    },
    //sheetName: "Output logiciel complet",
    title: "LISTE DES PROJETS",
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
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 2, 3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [4, 8, 9, 10, 11], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [5, 6, 7], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchCheckbox"](api, [0], []);
});
$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_projet_new"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("select.select2").select2();
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
  e.preventDefault();
});
$(".bod").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  if ($(document.activeElement).hasClass("button-save-add-projet")) {
    //alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-add-projet"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-projet"));
    var _goto = 0;
  }
  l.start();
  var id = $("#test").data("serviceId");
  var obj = new Object();
  obj["route"] = "p_projet_new";
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_projet_edit", {
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
  var id = $("#test").data("projetId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-edit-projet"));
  l.start();
  var obj = new Object();
  var parametre = {
    id: id
  };
  obj["route"] = "p_projet_edit";
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
    obj["route"] = "p_projet_delete";
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
$(".port").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_projet_port"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("select.select2").select2();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique2").modal("show");
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
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

},[["./assets/js/components/parametrage/pprojet.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wcHJvamV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZGVmZXJSZW5kZXIiLCJzdGF0ZVNhdmUiLCJsZW5ndGhNZW51IiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJ3aWR0aCIsInRhcmdldHMiLCJvcmRlciIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImV4dGVuZCIsInNoZWV0TmFtZSIsImZpbGVuYW1lIiwidGl0bGUiLCJleHBvcnRPcHRpb25zIiwibW9kaWZpZXIiLCJwYWdlIiwiaW5pdENvbXBsZXRlIiwiYXBpIiwiY2xpY2siLCJzdHIiLCJpbm5lckhUTUwiLCJ0b0xvd2VyQ2FzZSIsIm4iLCJzZWFyY2giLCJkcmF3IiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImhpZGUiLCJzZWxlY3QyIiwic2VsZWN0Ml9kb3NzaWVycyIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsIm1vZGFsIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9uYW1lIiwiYXR0ciIsImR0YSIsIkZvcm1EYXRhIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJoYXNDbGFzcyIsImwiLCJMYWRkYSIsInF1ZXJ5U2VsZWN0b3IiLCJnb3RvIiwic3RhcnQiLCJpZCIsIm9iaiIsIk9iamVjdCIsIlNob3dGb3JtRXJyb3JzIiwiYXV0b0Z1bmN0aW9uQWpheCIsImNsb3Nlc3QiLCJwYXJhbWV0cmUiLCJ0b2tlbiIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUM5QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHlGQUE4QjtBQUNwRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHVFQUF1RTtBQUMxRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHFFQUFxRTtBQUN4RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJmaWxlIjoicF9wcm9qZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcbmdsb2JhbC4kID0gJDtcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gIGN1c3RvbUNsYXNzOiB7XHJcbiAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxuLy92YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF9wcm9qZXRfbGlzdFwiKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICB0eXBlOiBcImdldFwiLFxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLFxyXG4gICAgWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXSxcclxuICBdLFxyXG5cclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHNlYXJjaGFibGU6IHRydWUsIHdpZHRoOiBcIjFweFwiLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwiLCB0YXJnZXRzOiAwIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIiwgdGFyZ2V0czogMCB9LFxyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIxcHhcIiwgdGFyZ2V0czogMCB9LFxyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwiLCB0YXJnZXRzOiAwIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIiwgdGFyZ2V0czogMCB9LFxyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IDAgfSxcclxuICBdLFxyXG4gIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZXh0ZW5kOiBcImV4Y2VsXCIsXHJcbiAgICAgIHNoZWV0TmFtZTogXCJMaXN0ZSBkZXMgcHJvamV0cyBcIixcclxuICAgICAgZmlsZW5hbWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJVM1MtTElTVEVTLVBST0pFVFNcIjtcclxuICAgICAgfSxcclxuICAgICAgLy9zaGVldE5hbWU6IFwiT3V0cHV0IGxvZ2ljaWVsIGNvbXBsZXRcIixcclxuICAgICAgdGl0bGU6IFwiTElTVEUgREVTIFBST0pFVFNcIixcclxuICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgIG1vZGlmaWVyOiB7IHBhZ2U6IFwiYWxsXCIgfSxcclxuICAgICAgICBjb2x1bW5zOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgLy8gcm93czogXCI6dmlzaWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGluaXRDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFwaSA9IHRoaXMuYXBpKCk7XHJcblxyXG4gICAgYXBpLiQoXCJ0ZFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBzdHIgPSB0aGlzLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB2YXIgbiA9IHN0ci5zZWFyY2goXCJjZF9vcFwiKTtcclxuICAgICAgLy9hbGVydChuKVxyXG4gICAgICBpZiAobiA9PSAtMSkge1xyXG4gICAgICAgIGFwaS5zZWFyY2godGhpcy5pbm5lckhUTUwpLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgZml4ZWRIZWFkZXI6IHRydWUsXHJcbn0pO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLCAyLCAzXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbNCw4LDksMTAsMTFdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbNSwgNiw3XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcbiQoXCIuYWRkXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF9wcm9qZXRfbmV3XCIpLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAkKFwic2VsZWN0LnNlbGVjdDJcIikuc2VsZWN0MigpO1xyXG4gICAgICB2YXIgc2VsZWN0Ml9kb3NzaWVycyA9ICQoXCIuc2VsZWN0Ml9kb3NzaWVyc1wiKS5zZWxlY3QyKHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9peCBEb3Nzc2llclwiLFxyXG4gICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgIH0sIDYwMCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgaWYgKCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaGFzQ2xhc3MoXCJidXR0b24tc2F2ZS1hZGQtcHJvamV0XCIpKSB7XHJcbiAgICAvL2FsZXJ0KClcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXNhdmUtYWRkLXByb2pldFwiKSk7XHJcbiAgICB2YXIgZ290byA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXNhdmUtcHJvamV0XCIpKTtcclxuICAgIHZhciBnb3RvID0gMDtcclxuICB9XHJcbiAgbC5zdGFydCgpO1xyXG4gIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwic2VydmljZUlkXCIpO1xyXG4gIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgb2JqW1wicm91dGVcIl0gPSBcInBfcHJvamV0X25ld1wiO1xyXG4gIG9ialtcImRhdGFcIl0gPSBkdGE7XHJcbiAgb2JqW1wicGFyYW1ldHJlXCJdID0gbnVsbDtcclxuICBvYmpbXCJsXCJdID0gbDtcclxuICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgb2JqW1wic2VsZWN0b3JcIl0gPSBzZWxlY3RvcjtcclxuICBvYmpbXCJyZWxvYWRUYWJsZVwiXSA9IHRydWU7XHJcbiAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gIG9ialtcIm5vbU1vZGFsXCJdID0gXCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCI7XHJcbiAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICBvYmpbXCJhdXRvVHJpZ2dlclwiXSA9IGdvdG87XHJcbiAgb2JqW1widHJpZ2dlckNsYXNzXCJdID0gXCJhZGRcIjtcclxuICBvYmpbXCJTaG93Rm9ybUVycm9yc1wiXSA9IFNob3dGb3JtRXJyb3JzO1xyXG4gIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhSZW5kZXJDb250cm9sbGVyKG9iaik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNkX29wLC5DRF9PUFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF9wcm9qZXRfZWRpdFwiLCB7XHJcbiAgICAgIGlkOiAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIiksXHJcbiAgICB9KSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgdmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfZG9zc2llcnNcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggRG9zc3NpZXJcIixcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgJChcInNlbGVjdC5zZWxlY3QyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxufSk7XHJcblxyXG4kKFwiLmJvZFwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtX2VkaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcblxyXG4gIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwicHJvamV0SWRcIik7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tZWRpdC1wcm9qZXRcIikpO1xyXG4gIGwuc3RhcnQoKTtcclxuICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gIHZhciBwYXJhbWV0cmUgPSB7IGlkOiBpZCB9O1xyXG4gIG9ialtcInJvdXRlXCJdID0gXCJwX3Byb2pldF9lZGl0XCI7XHJcbiAgb2JqW1wiZGF0YVwiXSA9IGR0YTtcclxuICBvYmpbXCJwYXJhbWV0cmVcIl0gPSBwYXJhbWV0cmU7XHJcbiAgb2JqW1wibFwiXSA9IGw7XHJcbiAgb2JqW1wiZm9ybV9uYW1lXCJdID0gZm9ybV9uYW1lO1xyXG4gIG9ialtcInNlbGVjdG9yXCJdID0gc2VsZWN0b3I7XHJcbiAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gIG9ialtcIm1vZGFsXCJdID0gdHJ1ZTtcclxuICBvYmpbXCJoaWRlTW9kdWxlXCJdID0gdHJ1ZTtcclxuICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gIG9ialtcInRhYmxlXCJdID0gdGFibGU7XHJcbiAgb2JqW1wiU2hvd0Zvcm1FcnJvcnNcIl0gPSBTaG93Rm9ybUVycm9ycztcclxuICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4UmVuZGVyQ29udHJvbGxlcihvYmopO1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5ib2RcIikub24oXCJjbGlja1wiLCBcIi5fZGVsZXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRva2VuXCIpO1xyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBvYmpbXCJyb3V0ZVwiXSA9IFwicF9wcm9qZXRfZGVsZXRlXCI7XHJcbiAgICBvYmpbXCJpZFwiXSA9IGlkO1xyXG4gICAgb2JqW1widG9rZW5cIl0gPSB0b2tlbjtcclxuICAgIG9ialtcInJlbG9hZFRhYmxlXCJdID0gdHJ1ZTtcclxuICAgIG9ialtcIm1vZGFsXCJdID0gdHJ1ZTtcclxuICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibm9tTW9kYWxcIl0gPSBcIk1vZGFsRG9jdW1lbnREeW5hbWlxdWVcIjtcclxuICAgIG9ialtcInRhYmxlXCJdID0gdGFibGU7XHJcbiAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4RGVsZXRlKG9iaik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIixcclxuICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5wb3J0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF9wcm9qZXRfcG9ydFwiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgJChcInNlbGVjdC5zZWxlY3QyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgdmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfZG9zc2llcnNcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggRG9zc3NpZXJcIixcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlMlwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgfSwgNjAwKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIvKiBnbG9iYWwgQnVuIC0tIERlbm8gY2FzZSAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgQnVuID09ICdmdW5jdGlvbicgJiYgQnVuICYmIHR5cGVvZiBCdW4udmVyc2lvbiA9PSAnc3RyaW5nJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgRU5HSU5FX0lTX0JVTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtYnVuJyk7XG52YXIgVVNFUl9BR0VOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcbi8vIGRpcnR5IElFOS0gYW5kIEJ1biAwLjMuMC0gY2hlY2tzXG52YXIgV1JBUCA9IC9NU0lFIC5cXC4vLnRlc3QoVVNFUl9BR0VOVCkgfHwgRU5HSU5FX0lTX0JVTiAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdmVyc2lvbiA9IGdsb2JhbC5CdW4udmVyc2lvbi5zcGxpdCgnLicpO1xuICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPCAzIHx8IHZlcnNpb25bMF0gPT0gMCAmJiAodmVyc2lvblsxXSA8IDMgfHwgdmVyc2lvblsxXSA9PSAzICYmIHZlcnNpb25bMl0gPT0gMCk7XG59KSgpO1xuXG4vLyBJRTktIC8gQnVuIDAuMy4wLSBzZXRUaW1lb3V0IC8gc2V0SW50ZXJ2YWwgLyBzZXRJbW1lZGlhdGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBoYXNUaW1lQXJnKSB7XG4gIHZhciBmaXJzdFBhcmFtSW5kZXggPSBoYXNUaW1lQXJnID8gMiA6IDE7XG4gIHJldHVybiBXUkFQID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiBmaXJzdFBhcmFtSW5kZXg7XG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgcGFyYW1zID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIGZpcnN0UGFyYW1JbmRleCkgOiBbXTtcbiAgICB2YXIgY2FsbGJhY2sgPSBib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdGhpcywgcGFyYW1zKTtcbiAgICB9IDogZm47XG4gICAgcmV0dXJuIGhhc1RpbWVBcmcgPyBzY2hlZHVsZXIoY2FsbGJhY2ssIHRpbWVvdXQpIDogc2NoZWR1bGVyKGNhbGxiYWNrKTtcbiAgfSA6IHNjaGVkdWxlcjtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9