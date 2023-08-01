(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p_projet_sous"],{

/***/ "./assets/js/components/parametrage/p_projet_sous.js":
/*!***********************************************************!*\
  !*** ./assets/js/components/parametrage/p_projet_sous.js ***!
  \***********************************************************/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('p_projet_sous_list'),
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
  }, {
    "orderable": false,
    "width": "1px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "1px",
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
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 3, 4, 5, 8], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [2, 9], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [6, 7], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchCheckbox"](api, [0], []);
});
$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_projet_sous_new"),
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
  if ($(document.activeElement).hasClass("button-save-add-projet")) {
    //alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-add-projet"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-projet"));
    var _goto = 0;
  }
  l.start();
  var id = $("#test").data("projetId");
  var obj = new Object();
  obj["route"] = "p_projet_sous_new";
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
$("#grid tbody").on("click", ".cd_op", function () {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("p_projet_sous_edit", {
      id: $(this).closest("tr").attr("id")
    }),
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
  obj["route"] = "p_projet_sous_edit";
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
    obj["route"] = "p_projet_sous_delete";
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

},[["./assets/js/components/parametrage/p_projet_sous.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wX3Byb2pldF9zb3VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXBpIiwiY2xpY2siLCJzdHIiLCJpbm5lckhUTUwiLCJuIiwic2VhcmNoIiwiZHJhdyIsImZpeGVkSGVhZGVyIiwib24iLCJzZXR0aW5ncyIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiLCJoaWRlIiwibW9kYWwiLCJzZWxlY3QyIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9uYW1lIiwiYXR0ciIsImR0YSIsIkZvcm1EYXRhIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJoYXNDbGFzcyIsImwiLCJMYWRkYSIsInF1ZXJ5U2VsZWN0b3IiLCJnb3RvIiwic3RhcnQiLCJpZCIsIm9iaiIsIk9iamVjdCIsIlNob3dGb3JtRXJyb3JzIiwiYXV0b0Z1bmN0aW9uQWpheCIsImNsb3Nlc3QiLCJwYXJhbWV0cmUiLCJ0b2tlbiIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUM3R0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFQztBQUNrQztBQUNqRUksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFDNEQ7QUFFaUI7QUFFekYsSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFDREMsY0FBYyxF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aUIsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDekQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELDhCQUE4QixtQkFBTyxDQUFDLDZHQUF3Qzs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDOUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDcEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUE2RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxxRUFBcUU7QUFDeEU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWRDtBQUNBLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3JDLG1CQUFPLENBQUMscUZBQTRCIiwiZmlsZSI6InBfcHJvamV0X3NvdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcbmdsb2JhbC4kID0gJDtcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbi8vdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWJ1dHRvbicpKTtcclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3BfcHJvamV0X3NvdXNfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWyAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBcIm9yZGVyXCI6IFtbIDAsIFwiZGVzY1wiIF1dLFxyXG5cclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJpbml0Q29tcGxldGVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXBpID0gdGhpcy5hcGkoKTtcclxuICAgICAgICAgICAgYXBpLiQoJ3RkJykuY2xpY2soIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB2YXIgc3RyID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHN0ci5zZWFyY2goXCJjZF9vcFwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYobj09LTEpe1xyXG4gICAgICAgICAgICAgICAgYXBpLnNlYXJjaCggdGhpcy5pbm5lckhUTUwgKS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLDMsNCw1LDhdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFsyLDldLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbNiw3XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4kKFwiLmFkZFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfcHJvamV0X3NvdXNfbmV3XCIpLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICQoJ3NlbGVjdC5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG4gICQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICBpZiAoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5oYXNDbGFzcyhcImJ1dHRvbi1zYXZlLWFkZC1wcm9qZXRcIikpIHtcclxuICAgICAgICAvL2FsZXJ0KClcclxuICAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc2F2ZS1hZGQtcHJvamV0XCIpKTtcclxuICAgICAgdmFyIGdvdG8gPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc2F2ZS1wcm9qZXRcIikpO1xyXG4gICAgICB2YXIgZ290byA9IDA7XHJcbiAgICB9XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcInByb2pldElkXCIpO1xyXG4gICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgb2JqW1wicm91dGVcIl0gPSBcInBfcHJvamV0X3NvdXNfbmV3XCI7XHJcbiAgICAgIG9ialtcImRhdGFcIl0gPSBkdGE7XHJcbiAgICAgIG9ialtcInBhcmFtZXRyZVwiXSA9IG51bGw7XHJcbiAgICAgIG9ialtcImxcIl0gPSBsO1xyXG4gICAgICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgICAgIG9ialtcInNlbGVjdG9yXCJdID0gc2VsZWN0b3I7XHJcbiAgICAgIG9ialtcInJlbG9hZFRhYmxlXCJdID0gdHJ1ZTtcclxuICAgICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJoaWRlTW9kdWxlXCJdID0gdHJ1ZTtcclxuICAgICAgb2JqW1wibm9tTW9kYWxcIl0gPSBcIk1vZGFsRG9jdW1lbnREeW5hbWlxdWVcIjtcclxuICAgICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgICAgb2JqW1wiYXV0b1RyaWdnZXJcIl0gPSBnb3RvO1xyXG4gICAgICBvYmpbXCJ0cmlnZ2VyQ2xhc3NcIl0gPSBcImFkZFwiO1xyXG4gICAgICBvYmpbXCJTaG93Rm9ybUVycm9yc1wiXSA9IFNob3dGb3JtRXJyb3JzO1xyXG4gICAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4UmVuZGVyQ29udHJvbGxlcihvYmopO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG4gICQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNkX29wXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwX3Byb2pldF9zb3VzX2VkaXRcIiwge1xyXG4gICAgICAgIGlkOiAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIiksXHJcbiAgICAgIH0pLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICQoJ3NlbGVjdC5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gICQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICBcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwicHJvamV0SWRcIik7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1lZGl0LXByb2pldFwiKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gICAgdmFyIHBhcmFtZXRyZSA9IHsgaWQ6IGlkIH07XHJcbiAgICBvYmpbXCJyb3V0ZVwiXSA9IFwicF9wcm9qZXRfc291c19lZGl0XCI7XHJcbiAgICBvYmpbXCJkYXRhXCJdID0gZHRhO1xyXG4gICAgb2JqW1wicGFyYW1ldHJlXCJdID0gcGFyYW1ldHJlO1xyXG4gICAgb2JqW1wibFwiXSA9IGw7XHJcbiAgICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgICBvYmpbXCJzZWxlY3RvclwiXSA9IHNlbGVjdG9yO1xyXG4gICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4UmVuZGVyQ29udHJvbGxlcihvYmopO1xyXG4gIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gICQoXCIuYm9kXCIpLm9uKFwiY2xpY2tcIiwgXCIuX2RlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcbiAgXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgb2JqW1wicm91dGVcIl0gPSBcInBfcHJvamV0X3NvdXNfZGVsZXRlXCI7XHJcbiAgICAgIG9ialtcImlkXCJdID0gaWQ7XHJcbiAgICAgIG9ialtcInRva2VuXCJdID0gdG9rZW47XHJcbiAgICAgIG9ialtcInJlbG9hZFRhYmxlXCJdID0gdHJ1ZTtcclxuICAgICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJoaWRlTW9kdWxlXCJdID0gdHJ1ZTtcclxuICAgICAgb2JqW1wibm9tTW9kYWxcIl0gPSBcIk1vZGFsRG9jdW1lbnREeW5hbWlxdWVcIjtcclxuICAgICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgICAgYXV0b0Z1bmN0aW9uQWpheC5hdXRvQWpheERlbGV0ZShvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiLyogZ2xvYmFsIEJ1biAtLSBEZW5vIGNhc2UgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIEJ1biA9PSAnZnVuY3Rpb24nICYmIEJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIEVOR0lORV9JU19CVU4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bicpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOR0lORV9JU19CVU4gJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlcnNpb24gPSBnbG9iYWwuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09IDAgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT0gMyAmJiB2ZXJzaW9uWzJdID09IDApO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwidmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcbiAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuICByZXR1cm4gcGFzc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0SW50ZXJ2YWwgPSBzY2hlZHVsZXJzRml4KGdsb2JhbC5zZXRJbnRlcnZhbCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldEludGVydmFsICE9PSBzZXRJbnRlcnZhbCB9LCB7XG4gIHNldEludGVydmFsOiBzZXRJbnRlcnZhbFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0VGltZW91dCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldFRpbWVvdXQsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldFRpbWVvdXQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0VGltZW91dCAhPT0gc2V0VGltZW91dCB9LCB7XG4gIHNldFRpbWVvdXQ6IHNldFRpbWVvdXRcbn0pO1xuIiwiLy8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBzcGxpdCB0byBtb2R1bGVzIGxpc3RlZCBiZWxvd1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LWludGVydmFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtdGltZW91dCcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==