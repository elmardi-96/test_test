(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uppartenaire"],{

/***/ "./assets/js/components/parametrage/uppartenaire.js":
/*!**********************************************************!*\
  !*** ./assets/js/components/parametrage/uppartenaire.js ***!
  \**********************************************************/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('u_p_partenaire_list'),
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
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [2, 14], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchCheckbox"](api, [0], []);
});
$('.scroll_content').slimscroll({
  height: '1000px'
});
$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("u_p_partenaire_new"),
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
  if ($(document.activeElement).hasClass("button-save-add-partenaire")) {
    //alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-add-partenaire"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-partenaire"));
    var _goto = 0;
  }
  l.start();
  var id = $("#test").data("partenaireId");
  var obj = new Object();
  obj["route"] = "u_p_partenaire_new";
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
  if ($('#up_partenaire_categorie option:selected').text() == 'interne' && $('#up_partenaire_dossier').val() == '') {
    $("#up_partenaire_dossier").parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>CETTE VALEUR NE DOIT PAS ÊTRE VIDE.</span></span></span>");
    l.stop();
  } else {
    //   alert($('#up_partenaire_categorie option:selected').text());
    // alert($('#up_partenaire_dossier').val());
    _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__["autoAjaxRenderController"](obj);
  }
  e.preventDefault();
});
$("#grid tbody").on("click", ".cd_op", function () {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("u_p_partenaire_edit", {
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
  var id = $("#test").data("partenaireId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-edit-partenaire"));
  l.start();
  var obj = new Object();
  var parametre = {
    id: id
  };
  obj["route"] = "u_p_partenaire_edit";
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
  if ($('#up_partenaire_categorie option:selected').text() == 'interne' && $('#up_partenaire_dossier').val() == '') {
    $("#up_partenaire_dossier").parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>CETTE VALEUR NE DOIT PAS ÊTRE VIDE.</span></span></span>");
    l.stop();
  } else {
    //   alert($('#up_partenaire_categorie option:selected').text());
    // alert($('#up_partenaire_dossier').val());
    _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__["autoAjaxRenderController"](obj);
  }
  e.preventDefault();
});
$(".taxable").on('change', function (e) {
  if ($(this).val() == true) {
    $('.bloc_choix').show();
  } else {
    $('.bloc_choix').hide();
  }
});
$(".bod").on("change", ".categorie", function () {
  var type = $("option:selected", this).text();
  if (type == 'interne') {
    $('.dossier').show();
  } else {
    $('.dossier').hide();
  }
});
$(".bod").on("click", "._delete", function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  if (id) {
    var obj = new Object();
    obj["route"] = "u_p_partenaire_delete";
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

},[["./assets/js/components/parametrage/uppartenaire.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS91cHBhcnRlbmFpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtYnVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJhcGkiLCJjbGljayIsInN0ciIsImlubmVySFRNTCIsIm4iLCJzZWFyY2giLCJkcmF3IiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJzbGltc2Nyb2xsIiwiaGVpZ2h0Iiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiLCJoaWRlIiwibW9kYWwiLCJzZWxlY3QyIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9uYW1lIiwiYXR0ciIsImR0YSIsIkZvcm1EYXRhIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJoYXNDbGFzcyIsImwiLCJMYWRkYSIsInF1ZXJ5U2VsZWN0b3IiLCJnb3RvIiwic3RhcnQiLCJpZCIsIm9iaiIsIk9iamVjdCIsIlNob3dGb3JtRXJyb3JzIiwidmFsIiwicGFyZW50IiwiYXBwZW5kIiwic3RvcCIsImF1dG9GdW5jdGlvbkFqYXgiLCJjbG9zZXN0IiwicGFyYW1ldHJlIiwic2hvdyIsInRva2VuIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUVDO0FBQ2tDO0FBQ2pFSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUM0RDtBQUVpQjtBQUV6RixJQUFNQyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNTSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNU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QUNMO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUM5QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHlGQUE4QjtBQUNwRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHVFQUF1RTtBQUMxRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHFFQUFxRTtBQUN4RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJmaWxlIjoidXBwYXJ0ZW5haXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5nbG9iYWwuJCA9ICQ7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzXCI7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG4vL3ZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1idXR0b24nKSk7XHJcblxyXG52YXIgdGFibGUgPSAkKCcjZ3JpZCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1X3BfcGFydGVuYWlyZV9saXN0JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWyAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcblxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICBdLFxyXG4gICAgXCJvcmRlclwiOiBbWyAwLCBcImRlc2NcIiBdXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJpbml0Q29tcGxldGVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXBpID0gdGhpcy5hcGkoKTtcclxuICAgICAgICAgICAgYXBpLiQoJ3RkJykuY2xpY2soIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB2YXIgc3RyID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHN0ci5zZWFyY2goXCJjZF9vcFwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYobj09LTEpe1xyXG4gICAgICAgICAgICAgICAgYXBpLnNlYXJjaCggdGhpcy5pbm5lckhUTUwgKS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbMiwxNF0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFtdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuJCgnLnNjcm9sbF9jb250ZW50Jykuc2xpbXNjcm9sbCh7XHJcbiAgICBoZWlnaHQ6ICcxMDAwcHgnXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJChcIi5hZGRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVfcF9wYXJ0ZW5haXJlX25ld1wiKSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAkKCdzZWxlY3Quc2VsZWN0MicpLnNlbGVjdDIoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG4gICQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICBpZiAoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5oYXNDbGFzcyhcImJ1dHRvbi1zYXZlLWFkZC1wYXJ0ZW5haXJlXCIpKSB7XHJcbiAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXNhdmUtYWRkLXBhcnRlbmFpcmVcIikpO1xyXG4gICAgICB2YXIgZ290byA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1zYXZlLXBhcnRlbmFpcmVcIikpO1xyXG4gICAgICB2YXIgZ290byA9IDA7XHJcbiAgICB9XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcInBhcnRlbmFpcmVJZFwiKTtcclxuICAgIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgIG9ialtcInJvdXRlXCJdID0gXCJ1X3BfcGFydGVuYWlyZV9uZXdcIjtcclxuICAgICAgb2JqW1wiZGF0YVwiXSA9IGR0YTtcclxuICAgICAgb2JqW1wicGFyYW1ldHJlXCJdID0gbnVsbDtcclxuICAgICAgb2JqW1wibFwiXSA9IGw7XHJcbiAgICAgIG9ialtcImZvcm1fbmFtZVwiXSA9IGZvcm1fbmFtZTtcclxuICAgICAgb2JqW1wic2VsZWN0b3JcIl0gPSBzZWxlY3RvcjtcclxuICAgICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gICAgICBvYmpbXCJhdXRvVHJpZ2dlclwiXSA9IGdvdG87XHJcbiAgICAgIG9ialtcInRyaWdnZXJDbGFzc1wiXSA9IFwiYWRkXCI7XHJcbiAgICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgIFxyXG5cclxuXHJcblxyXG4gICAgIFxyXG5cclxuICAgICAgaWYoICQoJyN1cF9wYXJ0ZW5haXJlX2NhdGVnb3JpZSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk9PSdpbnRlcm5lJyAmJiAgJCgnI3VwX3BhcnRlbmFpcmVfZG9zc2llcicpLnZhbCgpPT0nJyl7XHJcbiAgICAgICAgJChcIiN1cF9wYXJ0ZW5haXJlX2Rvc3NpZXJcIikucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPkNFVFRFIFZBTEVVUiBORSBET0lUIFBBUyDDilRSRSBWSURFLjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgIC8vICAgYWxlcnQoJCgnI3VwX3BhcnRlbmFpcmVfY2F0ZWdvcmllIG9wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSk7XHJcbiAgICAgICAvLyBhbGVydCgkKCcjdXBfcGFydGVuYWlyZV9kb3NzaWVyJykudmFsKCkpO1xyXG4gICAgICAgIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhSZW5kZXJDb250cm9sbGVyKG9iaik7XHJcbiAgICAgIH1cclxuIFxyXG4gICAgIFxyXG4gICAgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuY2Rfb3BcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVfcF9wYXJ0ZW5haXJlX2VkaXRcIiwge1xyXG4gICAgICAgIGlkOiAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIiksXHJcbiAgICAgIH0pLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICQoJ3NlbGVjdC5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gICQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICBcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwicGFydGVuYWlyZUlkXCIpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tZWRpdC1wYXJ0ZW5haXJlXCIpKTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgICB2YXIgcGFyYW1ldHJlID0geyBpZDogaWQgfTtcclxuICAgIG9ialtcInJvdXRlXCJdID0gXCJ1X3BfcGFydGVuYWlyZV9lZGl0XCI7XHJcbiAgICBvYmpbXCJkYXRhXCJdID0gZHRhO1xyXG4gICAgb2JqW1wicGFyYW1ldHJlXCJdID0gcGFyYW1ldHJlO1xyXG4gICAgb2JqW1wibFwiXSA9IGw7XHJcbiAgICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgICBvYmpbXCJzZWxlY3RvclwiXSA9IHNlbGVjdG9yO1xyXG4gICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcblxyXG4gICAgaWYoICQoJyN1cF9wYXJ0ZW5haXJlX2NhdGVnb3JpZSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCk9PSdpbnRlcm5lJyAmJiAgJCgnI3VwX3BhcnRlbmFpcmVfZG9zc2llcicpLnZhbCgpPT0nJyl7XHJcbiAgICAgICQoXCIjdXBfcGFydGVuYWlyZV9kb3NzaWVyXCIpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5DRVRURSBWQUxFVVIgTkUgRE9JVCBQQVMgw4pUUkUgVklERS48L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH1lbHNle1xyXG4gICAvLyAgIGFsZXJ0KCQoJyN1cF9wYXJ0ZW5haXJlX2NhdGVnb3JpZSBvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkpO1xyXG4gICAgIC8vIGFsZXJ0KCQoJyN1cF9wYXJ0ZW5haXJlX2Rvc3NpZXInKS52YWwoKSk7XHJcbiAgICAgIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhSZW5kZXJDb250cm9sbGVyKG9iaik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgXHJcbiQoXCIudGF4YWJsZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKT09dHJ1ZSkge1xyXG4gICAgICAgICQoJy5ibG9jX2Nob2l4Jykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICQoJy5ibG9jX2Nob2l4JykuaGlkZSgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuICAkKFwiLmJvZFwiKS5vbihcImNoYW5nZVwiLCBcIi5jYXRlZ29yaWVcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0eXBlID0gJChcIm9wdGlvbjpzZWxlY3RlZFwiLCB0aGlzKS50ZXh0KCk7XHJcbiAgIFxyXG4gICAgXHJcblxyXG4gXHJcblxyXG4gIFxyXG4gXHJcbiBpZiAodHlwZT09J2ludGVybmUnKSB7XHJcblxyXG4gICQoJy5kb3NzaWVyJykuc2hvdygpO1xyXG59IGVsc2Uge1xyXG4gICQoJy5kb3NzaWVyJykuaGlkZSgpO1xyXG59XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoXCIuYm9kXCIpLm9uKFwiY2xpY2tcIiwgXCIuX2RlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcbiAgXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgb2JqW1wicm91dGVcIl0gPSBcInVfcF9wYXJ0ZW5haXJlX2RlbGV0ZVwiO1xyXG4gICAgICBvYmpbXCJpZFwiXSA9IGlkO1xyXG4gICAgICBvYmpbXCJ0b2tlblwiXSA9IHRva2VuO1xyXG4gICAgICBvYmpbXCJyZWxvYWRUYWJsZVwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcIm1vZGFsXCJdID0gdHJ1ZTtcclxuICAgICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcIm5vbU1vZGFsXCJdID0gXCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCI7XHJcbiAgICAgIG9ialtcInRhYmxlXCJdID0gdGFibGU7XHJcbiAgICAgIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhEZWxldGUob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgfSk7IiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIvKiBnbG9iYWwgQnVuIC0tIERlbm8gY2FzZSAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgQnVuID09ICdmdW5jdGlvbicgJiYgQnVuICYmIHR5cGVvZiBCdW4udmVyc2lvbiA9PSAnc3RyaW5nJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgRU5HSU5FX0lTX0JVTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtYnVuJyk7XG52YXIgVVNFUl9BR0VOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcbi8vIGRpcnR5IElFOS0gYW5kIEJ1biAwLjMuMC0gY2hlY2tzXG52YXIgV1JBUCA9IC9NU0lFIC5cXC4vLnRlc3QoVVNFUl9BR0VOVCkgfHwgRU5HSU5FX0lTX0JVTiAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdmVyc2lvbiA9IGdsb2JhbC5CdW4udmVyc2lvbi5zcGxpdCgnLicpO1xuICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPCAzIHx8IHZlcnNpb25bMF0gPT0gMCAmJiAodmVyc2lvblsxXSA8IDMgfHwgdmVyc2lvblsxXSA9PSAzICYmIHZlcnNpb25bMl0gPT0gMCk7XG59KSgpO1xuXG4vLyBJRTktIC8gQnVuIDAuMy4wLSBzZXRUaW1lb3V0IC8gc2V0SW50ZXJ2YWwgLyBzZXRJbW1lZGlhdGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBoYXNUaW1lQXJnKSB7XG4gIHZhciBmaXJzdFBhcmFtSW5kZXggPSBoYXNUaW1lQXJnID8gMiA6IDE7XG4gIHJldHVybiBXUkFQID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiBmaXJzdFBhcmFtSW5kZXg7XG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgcGFyYW1zID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIGZpcnN0UGFyYW1JbmRleCkgOiBbXTtcbiAgICB2YXIgY2FsbGJhY2sgPSBib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdGhpcywgcGFyYW1zKTtcbiAgICB9IDogZm47XG4gICAgcmV0dXJuIGhhc1RpbWVBcmcgPyBzY2hlZHVsZXIoY2FsbGJhY2ssIHRpbWVvdXQpIDogc2NoZWR1bGVyKGNhbGxiYWNrKTtcbiAgfSA6IHNjaGVkdWxlcjtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9