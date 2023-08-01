(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upresponsable"],{

/***/ "./assets/js/components/parametrage/upresponsable.js":
/*!***********************************************************!*\
  !*** ./assets/js/components/parametrage/upresponsable.js ***!
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('u_p_responsable_list'),
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
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 2, 3, 4, 5, 6, 8, 9, 10], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [11, 12], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [7], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchCheckbox"](api, [0], []);
});
$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("u_p_responsable_new"),
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
  if ($(document.activeElement).hasClass("button-save-add-responsable")) {
    //alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-add-responsable"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-responsable"));
    var _goto = 0;
  }
  l.start();
  var id = $("#test").data("responsableId");
  var obj = new Object();
  obj["route"] = "u_p_responsable_new";
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("u_p_responsable_edit", {
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
  var id = $("#test").data("responsableId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-edit-responsable"));
  l.start();
  var obj = new Object();
  var parametre = {
    id: id
  };
  obj["route"] = "u_p_responsable_edit";
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
    obj["route"] = "u_p_responsable_delete";
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
$('body').on('change', '.info_user', function () {
  var id = $(this).val();
  if (id > 0) {
    $.ajax({
      type: 'GET',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('u_p_responsable_info_user', {
        'id': id
      }),
      success: function success(result) {
        //  window.open(result, '_blank');

        if (result.code == 200) {
          console.log(result.message.data);
          $('#up_responsable_nom').val(result.message.data.nom);
          $('#up_responsable_prenom').val(result.message.data.prenom);
          $('#up_responsable_email').val(result.message.data.email);
          $('#up_responsable_pays').val(result.message.data.pays);
          $('#up_responsable_signature').val(result.message.data.signature);
          $('#up_responsable_teleEntreprise').val(result.message.data.tele_entreprise);
          $('#up_responsable_telePersonnel').val(result.message.data.tele_personnel);
          $('#up_responsable_adresse').val(result.message.data.adresse);
          $('#up_responsable_ville').val(result.message.data.ville);
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
          timeOut: 4000
        });
      }
    });
  } else {
    $('#up_responsable_nom').val('');
    $('#up_responsable_prenom').val('');
    $('#up_responsable_email').val('');
    $('#up_responsable_pays').val('');
    $('#up_responsable_signature').val('');
    $('#up_responsable_teleEntreprise').val('');
    $('#up_responsable_telePersonnel').val('');
    $('#up_responsable_adresse').val('');
    $('#up_responsable_ville').val('');
  }
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

},[["./assets/js/components/parametrage/upresponsable.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS91cHJlc3BvbnNhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXBpIiwiY2xpY2siLCJzdHIiLCJpbm5lckhUTUwiLCJuIiwic2VhcmNoIiwiZHJhdyIsImZpeGVkSGVhZGVyIiwib24iLCJzZXR0aW5ncyIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiLCJoaWRlIiwibW9kYWwiLCJzZWxlY3QyIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9uYW1lIiwiYXR0ciIsImR0YSIsIkZvcm1EYXRhIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJoYXNDbGFzcyIsImwiLCJMYWRkYSIsInF1ZXJ5U2VsZWN0b3IiLCJnb3RvIiwic3RhcnQiLCJpZCIsIm9iaiIsIk9iamVjdCIsIlNob3dGb3JtRXJyb3JzIiwiYXV0b0Z1bmN0aW9uQWpheCIsImNsb3Nlc3QiLCJwYXJhbWV0cmUiLCJ0b2tlbiIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0IiwidmFsIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibm9tIiwicHJlbm9tIiwiZW1haWwiLCJwYXlzIiwic2lnbmF0dXJlIiwidGVsZV9lbnRyZXByaXNlIiwidGVsZV9wZXJzb25uZWwiLCJhZHJlc3NlIiwidmlsbGUiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmVzcG9uc2VKU09OIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUVDO0FBQ2tDO0FBQ2pFSSxNQUFNLENBQUND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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQzlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMseUZBQThCO0FBQ3BELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyw2REFBNkQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBLEdBQUcsdUVBQXVFO0FBQzFFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBLEdBQUcscUVBQXFFO0FBQ3hFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFDQSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHFGQUE0QiIsImZpbGUiOiJ1cHJlc3BvbnNhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5nbG9iYWwuJCA9ICQ7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbi8vdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWJ1dHRvbicpKTtcclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VfcF9yZXNwb25zYWJsZV9saXN0JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWyAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcblxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgIF0sXHJcbiAgICBcIm9yZGVyXCI6IFtbIDAsIFwiZGVzY1wiIF1dLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImluaXRDb21wbGV0ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpO1xyXG4gICAgICAgICAgICBhcGkuJCgndGQnKS5jbGljayggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHZhciBzdHIgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gc3RyLnNlYXJjaChcImNkX29wXCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZihuPT0tMSl7XHJcbiAgICAgICAgICAgICAgICBhcGkuc2VhcmNoKCB0aGlzLmlubmVySFRNTCApLmRyYXcoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9LFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLDIsMyw0LDUsNiw4LDksMTBdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFsxMSwxMl0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFs3XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIi5hZGRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1X3BfcmVzcG9uc2FibGVfbmV3XCIpLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICQoJ3NlbGVjdC5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmJvZFwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgaWYgKCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaGFzQ2xhc3MoXCJidXR0b24tc2F2ZS1hZGQtcmVzcG9uc2FibGVcIikpIHtcclxuICAgICAgICAvL2FsZXJ0KClcclxuICAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc2F2ZS1hZGQtcmVzcG9uc2FibGVcIikpO1xyXG4gICAgICB2YXIgZ290byA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1zYXZlLXJlc3BvbnNhYmxlXCIpKTtcclxuICAgICAgdmFyIGdvdG8gPSAwO1xyXG4gICAgfVxyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJyZXNwb25zYWJsZUlkXCIpO1xyXG4gICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgb2JqW1wicm91dGVcIl0gPSBcInVfcF9yZXNwb25zYWJsZV9uZXdcIjtcclxuICAgICAgb2JqW1wiZGF0YVwiXSA9IGR0YTtcclxuICAgICAgb2JqW1wicGFyYW1ldHJlXCJdID0gbnVsbDtcclxuICAgICAgb2JqW1wibFwiXSA9IGw7XHJcbiAgICAgIG9ialtcImZvcm1fbmFtZVwiXSA9IGZvcm1fbmFtZTtcclxuICAgICAgb2JqW1wic2VsZWN0b3JcIl0gPSBzZWxlY3RvcjtcclxuICAgICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gICAgICBvYmpbXCJhdXRvVHJpZ2dlclwiXSA9IGdvdG87XHJcbiAgICAgIG9ialtcInRyaWdnZXJDbGFzc1wiXSA9IFwiYWRkXCI7XHJcbiAgICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgICAgIGF1dG9GdW5jdGlvbkFqYXguYXV0b0FqYXhSZW5kZXJDb250cm9sbGVyKG9iaik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuY2Rfb3BcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVfcF9yZXNwb25zYWJsZV9lZGl0XCIsIHtcclxuICAgICAgICBpZDogJCh0aGlzKS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpLFxyXG4gICAgICB9KSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAkKCdzZWxlY3Quc2VsZWN0MicpLnNlbGVjdDIoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gICQoXCIuYm9kXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICBcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwicmVzcG9uc2FibGVJZFwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWVkaXQtcmVzcG9uc2FibGVcIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgIHZhciBwYXJhbWV0cmUgPSB7IGlkOiBpZCB9O1xyXG4gICAgb2JqW1wicm91dGVcIl0gPSBcInVfcF9yZXNwb25zYWJsZV9lZGl0XCI7XHJcbiAgICBvYmpbXCJkYXRhXCJdID0gZHRhO1xyXG4gICAgb2JqW1wicGFyYW1ldHJlXCJdID0gcGFyYW1ldHJlO1xyXG4gICAgb2JqW1wibFwiXSA9IGw7XHJcbiAgICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgICBvYmpbXCJzZWxlY3RvclwiXSA9IHNlbGVjdG9yO1xyXG4gICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4UmVuZGVyQ29udHJvbGxlcihvYmopO1xyXG4gIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgXHJcbiQoXCIuYm9kXCIpLm9uKFwiY2xpY2tcIiwgXCIuX2RlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcbiAgXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgb2JqW1wicm91dGVcIl0gPSBcInVfcF9yZXNwb25zYWJsZV9kZWxldGVcIjtcclxuICAgICAgb2JqW1wiaWRcIl0gPSBpZDtcclxuICAgICAgb2JqW1widG9rZW5cIl0gPSB0b2tlbjtcclxuICAgICAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gICAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4RGVsZXRlKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIixcclxuICAgICAgICBcIndhcm5pbmdcIixcclxuICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gIH0pO1xyXG4gICQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5pbmZvX3VzZXInLCBmdW5jdGlvbiAoKSB7XHJcbnZhciBpZCA9ICQodGhpcykudmFsKClcclxuICAgIGlmKGlkPjApe1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VfcF9yZXNwb25zYWJsZV9pbmZvX3VzZXInLHsnaWQnOiBpZH0pLFxyXG4gICAgICAgXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gIFxyXG4gICAgICAgICAgICAvLyAgd2luZG93Lm9wZW4ocmVzdWx0LCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICQoJyN1cF9yZXNwb25zYWJsZV9ub20nKS52YWwocmVzdWx0Lm1lc3NhZ2UuZGF0YS5ub20pXHJcbiAgICAgICAgICAgICAgICAkKCcjdXBfcmVzcG9uc2FibGVfcHJlbm9tJykudmFsKHJlc3VsdC5tZXNzYWdlLmRhdGEucHJlbm9tKVxyXG4gICAgICAgICAgICAgICAgJCgnI3VwX3Jlc3BvbnNhYmxlX2VtYWlsJykudmFsKHJlc3VsdC5tZXNzYWdlLmRhdGEuZW1haWwpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoJyN1cF9yZXNwb25zYWJsZV9wYXlzJykudmFsKHJlc3VsdC5tZXNzYWdlLmRhdGEucGF5cylcclxuICAgICAgICAgICAgICAgICQoJyN1cF9yZXNwb25zYWJsZV9zaWduYXR1cmUnKS52YWwocmVzdWx0Lm1lc3NhZ2UuZGF0YS5zaWduYXR1cmUpXHJcbiAgICAgICAgICAgICAgICAkKCcjdXBfcmVzcG9uc2FibGVfdGVsZUVudHJlcHJpc2UnKS52YWwocmVzdWx0Lm1lc3NhZ2UuZGF0YS50ZWxlX2VudHJlcHJpc2UpXHJcbiAgICAgICAgICAgICAgICAkKCcjdXBfcmVzcG9uc2FibGVfdGVsZVBlcnNvbm5lbCcpLnZhbChyZXN1bHQubWVzc2FnZS5kYXRhLnRlbGVfcGVyc29ubmVsKVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgJCgnI3VwX3Jlc3BvbnNhYmxlX2FkcmVzc2UnKS52YWwocmVzdWx0Lm1lc3NhZ2UuZGF0YS5hZHJlc3NlKVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgJCgnI3VwX3Jlc3BvbnNhYmxlX3ZpbGxlJykudmFsKHJlc3VsdC5tZXNzYWdlLmRhdGEudmlsbGUpXHJcbiAgXHJcbiAgICAgICAgICAgICB9IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICBcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgICQoJyN1cF9yZXNwb25zYWJsZV9ub20nKS52YWwoJycpXHJcbiAgICAgICQoJyN1cF9yZXNwb25zYWJsZV9wcmVub20nKS52YWwoJycpXHJcbiAgICAgICQoJyN1cF9yZXNwb25zYWJsZV9lbWFpbCcpLnZhbCgnJylcclxuICAgICAgXHJcbiAgICAgICQoJyN1cF9yZXNwb25zYWJsZV9wYXlzJykudmFsKCcnKVxyXG4gICAgICAkKCcjdXBfcmVzcG9uc2FibGVfc2lnbmF0dXJlJykudmFsKCcnKVxyXG4gICAgICAkKCcjdXBfcmVzcG9uc2FibGVfdGVsZUVudHJlcHJpc2UnKS52YWwoJycpXHJcbiAgICAgICQoJyN1cF9yZXNwb25zYWJsZV90ZWxlUGVyc29ubmVsJykudmFsKCcnKVxyXG5cclxuICAgICAgJCgnI3VwX3Jlc3BvbnNhYmxlX2FkcmVzc2UnKS52YWwoJycpXHJcblxyXG4gICAgICAkKCcjdXBfcmVzcG9uc2FibGVfdmlsbGUnKS52YWwoJycpXHJcbiAgICB9XHJcbiAgIFxyXG4gIH0pO1xyXG5cclxuIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIvKiBnbG9iYWwgQnVuIC0tIERlbm8gY2FzZSAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgQnVuID09ICdmdW5jdGlvbicgJiYgQnVuICYmIHR5cGVvZiBCdW4udmVyc2lvbiA9PSAnc3RyaW5nJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgRU5HSU5FX0lTX0JVTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtYnVuJyk7XG52YXIgVVNFUl9BR0VOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcbi8vIGRpcnR5IElFOS0gYW5kIEJ1biAwLjMuMC0gY2hlY2tzXG52YXIgV1JBUCA9IC9NU0lFIC5cXC4vLnRlc3QoVVNFUl9BR0VOVCkgfHwgRU5HSU5FX0lTX0JVTiAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdmVyc2lvbiA9IGdsb2JhbC5CdW4udmVyc2lvbi5zcGxpdCgnLicpO1xuICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPCAzIHx8IHZlcnNpb25bMF0gPT0gMCAmJiAodmVyc2lvblsxXSA8IDMgfHwgdmVyc2lvblsxXSA9PSAzICYmIHZlcnNpb25bMl0gPT0gMCk7XG59KSgpO1xuXG4vLyBJRTktIC8gQnVuIDAuMy4wLSBzZXRUaW1lb3V0IC8gc2V0SW50ZXJ2YWwgLyBzZXRJbW1lZGlhdGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBoYXNUaW1lQXJnKSB7XG4gIHZhciBmaXJzdFBhcmFtSW5kZXggPSBoYXNUaW1lQXJnID8gMiA6IDE7XG4gIHJldHVybiBXUkFQID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiBmaXJzdFBhcmFtSW5kZXg7XG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgcGFyYW1zID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIGZpcnN0UGFyYW1JbmRleCkgOiBbXTtcbiAgICB2YXIgY2FsbGJhY2sgPSBib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdGhpcywgcGFyYW1zKTtcbiAgICB9IDogZm47XG4gICAgcmV0dXJuIGhhc1RpbWVBcmcgPyBzY2hlZHVsZXIoY2FsbGJhY2ssIHRpbWVvdXQpIDogc2NoZWR1bGVyKGNhbGxiYWNrKTtcbiAgfSA6IHNjaGVkdWxlcjtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9