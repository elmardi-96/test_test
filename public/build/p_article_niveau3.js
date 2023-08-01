(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p_article_niveau3"],{

/***/ "./assets/js/components/parametrage/p_article_niveau3.js":
/*!***************************************************************!*\
  !*** ./assets/js/components/parametrage/p_article_niveau3.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");





var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.setRoutingData(routes);


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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("p_article_niveau_3_list"),
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
  }],
  initComplete: function initComplete() {
    var api = this.api();
    api.$("td").click(function () {
      var str = this.innerHTML;
      var n = str.search("cd_op");
      if (n == -1) {
        api.search(this.innerHTML).draw();
      }
    });
  },
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("datatables_langue"),
    processing: true
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchText"](api, [1], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchSelect"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchCheckbox"](api, [0], []);
});
function getSubSelect(myclass, myboolean, mycontent, rm) {
  //console.log(mycontent)
  if (rm && myboolean) {
    $(rm).find("option:not(:first)").remove();
    $(rm).prop("disabled", false);
  } else {
    $(rm).prop("disabled", true);
  }
  if (myboolean) {
    $(myclass).prop("disabled", false);
  } else {
    $(myclass).prop("disabled", true);
    $(myclass).parent().find(".select2 .select2-selection__arrow").html('<i class="i-load fa fa-refresh"></i>');
  }
  if (mycontent) {
    var array = myclass.split(",");
    for (var i = 0, l = array.length; i < l; i++) {
      //console.log($(mycontent).find(array[i]));
      $(array[i]).replaceWith($(mycontent).find(array[i]));
    }
  }
}
$(".new").on("change", ".niveau2", function () {
  //alert()
  getSubSelect(".niveau3", false, "", "");
  var $this = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".niveau2").attr("name")] = $(".niveau2").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("stock_produit_choix_niveau", {
      id: $(this).val() == "" ? -1 : $(this).val(),
      placeholder: "choix Niveau 3"
    }),
    type: "POST",
    data: data,
    success: function success(result) {
      //   console.log(html);
      $(".niveau3").html(result.data);
      getSubSelect(".niveau3", true, "", "");
      $(".sel2").select2();
    }
  });
});
$(".add").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("p_article_niveau_3_new"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      $(".new").on("change", ".niveau1", function () {
        //alert();
        getSubSelect(".niveau2", false, "", ".niveau3");
        var $this = $(this).closest("form");
        var data = {};
        data[$(this).attr("name")] = $(this).val();
        data[$(".niveau2").attr("name")] = $(".niveau2").val();
        // Submit data via AJAX to the form's action path.
        $.ajax({
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("stock_produit_choix_niveau", {
            id: $(this).val() == "" ? -1 : $(this).val(),
            placeholder: "choix Niveau 2"
          }),
          type: "POST",
          data: data,
          success: function success(result) {
            //   console.log(html);
            $(".niveau2").html(result.data);
            getSubSelect(".niveau2", true, "", ".niveau3");
            $(".sel2").select2();
          }
        });
      });
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
  if ($(document.activeElement).hasClass("button-save-add-nomen")) {
    //alert()
    var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.querySelector(".button-save-add-nomen"));
    var _goto = 1;
  } else {
    var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.querySelector(".button-save-nomen"));
    var _goto = 0;
  }
  l.start();
  var id = $("#test").data("serviceId");
  var obj = new Object();
  obj["route"] = "p_article_niveau_3_new";
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
  obj["ShowFormErrors"] = _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_7__["ShowFormErrors"];
  _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_8__["autoAjaxRenderController"](obj);
  e.preventDefault();
});
$("#grid tbody").on("click", ".cd_op", function () {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("p_article_niveau_3_edit", {
      id: $(this).closest("tr").attr("id")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
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
  var id = $("#test").data("nomenId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.querySelector(".button-edit-nomen"));
  l.start();
  var obj = new Object();
  var parametre = {
    id: id
  };
  obj["route"] = "p_article_niveau_3_edit";
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
  obj["ShowFormErrors"] = _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_7__["ShowFormErrors"];
  _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_8__["autoAjaxRenderController"](obj);
  e.preventDefault();
});
$(".bod").on("click", "._delete", function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  if (id) {
    var obj = new Object();
    obj["route"] = "p_nomenclature_standard_delete";
    obj["id"] = id;
    obj["token"] = token;
    obj["reloadTable"] = true;
    obj["modal"] = true;
    obj["hideModule"] = true;
    obj["nomModal"] = "ModalDocumentDynamique";
    obj["table"] = table;
    _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_8__["autoAjaxDelete"](obj);
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

},[["./assets/js/components/parametrage/p_article_niveau3.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wX2FydGljbGVfbml2ZWF1My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImdsb2JhbCIsIiQiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInRhYmxlIiwiRGF0YVRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwidHlwZSIsImRlZmVyUmVuZGVyIiwic3RhdGVTYXZlIiwibGVuZ3RoTWVudSIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwid2lkdGgiLCJ0YXJnZXRzIiwib3JkZXIiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJpbml0Q29tcGxldGUiLCJhcGkiLCJjbGljayIsInN0ciIsImlubmVySFRNTCIsIm4iLCJzZWFyY2giLCJkcmF3IiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJnZXRTdWJTZWxlY3QiLCJteWNsYXNzIiwibXlib29sZWFuIiwibXljb250ZW50Iiwicm0iLCJmaW5kIiwicmVtb3ZlIiwicHJvcCIsInBhcmVudCIsImh0bWwiLCJhcnJheSIsInNwbGl0IiwiaSIsImwiLCJsZW5ndGgiLCJyZXBsYWNlV2l0aCIsIiR0aGlzIiwiY2xvc2VzdCIsImF0dHIiLCJ2YWwiLCJpZCIsInBsYWNlaG9sZGVyIiwic3VjY2VzcyIsInJlc3VsdCIsInNlbGVjdDIiLCJoaWRlIiwibW9kYWwiLCJzZXRUaW1lb3V0IiwiZmFkZUluIiwicHJldmVudERlZmF1bHQiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaGFzQ2xhc3MiLCJMYWRkYSIsInF1ZXJ5U2VsZWN0b3IiLCJnb3RvIiwic3RhcnQiLCJvYmoiLCJPYmplY3QiLCJTaG93Rm9ybUVycm9ycyIsImF1dG9GdW5jdGlvbkFqYXgiLCJwYXJhbWV0cmUiLCJ0b2tlbiIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUM3R0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFQztBQUNrQztBQUNqRUksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFDNEQ7QUFFaUI7QUFFekYsSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQzFDQyxXQUFXLEVBQUU7SUFDWEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2hCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ2xCLENBQUMsQ0FBQzs7QUFFRjs7QUFFQSxJQUFJQyxLQUFLLEdBQUdSLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ1MsU0FBUyxDQUFDO0VBQy9CQyxJQUFJLEVBQUU7SUFDSkMsR0FBRyxFQUFFZCxrSEFBTyxDQUFDZSxRQUFRLENBQUMseUJBQXlCLENBQUM7SUFBRTtJQUNsREMsSUFBSSxFQUFFO0VBQ1IsQ0FBQztFQUNEQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsU0FBUyxFQUFFLElBQUk7RUFDZkMsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUNoQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQzlCO0VBRURDLE9BQU8sRUFBRSxDQUNQO0lBQUVDLFNBQVMsRUFBRSxLQUFLO0lBQUVDLFVBQVUsRUFBRSxJQUFJO0lBQUVDLEtBQUssRUFBRSxLQUFLO0lBQUVDLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFBRSxDQUFDLEVBQ2xFO0lBQUVILFNBQVMsRUFBRSxLQUFLO0lBQUVFLEtBQUssRUFBRSxNQUFNO0lBQUVDLE9BQU8sRUFBRTtFQUFFLENBQUMsQ0FDaEQ7RUFDREMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDcEJDLEdBQUcsRUFBRSxvQ0FBb0M7RUFDekNDLE9BQU8sRUFBRSxDQUNQLGVBQWUsRUFDZjtJQUNFQyxJQUFJLEVBQUUsV0FBVztJQUNqQkMsU0FBUyxFQUFFLGdEQUFnRDtJQUMzREMsTUFBTSxFQUFFLGdCQUFVQyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7TUFDckN2QixLQUFLLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRTtNQUNuQkMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtJQUMxQjtFQUNGLENBQUMsQ0FDRjtFQUNEQyxZQUFZLEVBQUUsd0JBQVk7SUFDeEIsSUFBSUMsR0FBRyxHQUFHLElBQUksQ0FBQ0EsR0FBRyxFQUFFO0lBQ3BCQSxHQUFHLENBQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN1QyxLQUFLLENBQUMsWUFBWTtNQUM1QixJQUFJQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxTQUFTO01BQ3hCLElBQUlDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQzNCLElBQUlELENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNYSixHQUFHLENBQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUNGLFNBQVMsQ0FBQyxDQUFDRyxJQUFJLEVBQUU7TUFDbkM7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0RDLFFBQVEsRUFBRTtJQUNSbEMsR0FBRyxFQUFFZCxrSEFBTyxDQUFDZSxRQUFRLENBQUMsbUJBQW1CLENBQUM7SUFDMUNrQyxVQUFVLEVBQUU7RUFDZCxDQUFDO0VBQ0RDLFdBQVcsRUFBRTtBQUNmLENBQUMsQ0FBQztBQUVGdkMsS0FBSyxDQUFDd0MsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVcEIsQ0FBQyxFQUFFcUIsUUFBUSxFQUFFO0VBQ3pDLElBQUlYLEdBQUcsR0FBRyxJQUFJdEMsQ0FBQyxDQUFDa0QsRUFBRSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDO0VBQzFDLElBQUlJLEVBQUUsR0FBR2YsR0FBRyxDQUFDTixLQUFLLENBQUNzQixNQUFNLEVBQUU7RUFDM0IsSUFBSUMsSUFBSSxHQUFHakIsR0FBRyxDQUFDaUIsSUFBSSxFQUFFO0VBRXJCQywyRkFBc0MsQ0FBQ2xCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNwRGtCLDZGQUF3QyxDQUFDbEIsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDckRrQiwyRkFBc0MsQ0FBQ2xCLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBQ25Ea0IsK0ZBQTBDLENBQUNsQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDMUQsQ0FBQyxDQUFDO0FBRUYsU0FBU21CLFlBQVksQ0FBQ0MsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsRUFBRSxFQUFFO0VBQ3ZEO0VBQ0EsSUFBSUEsRUFBRSxJQUFJRixTQUFTLEVBQUU7SUFDbkIzRCxDQUFDLENBQUM2RCxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUN6Qy9ELENBQUMsQ0FBQzZELEVBQUUsQ0FBQyxDQUFDRyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztFQUMvQixDQUFDLE1BQU07SUFDTGhFLENBQUMsQ0FBQzZELEVBQUUsQ0FBQyxDQUFDRyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztFQUM5QjtFQUNBLElBQUlMLFNBQVMsRUFBRTtJQUNiM0QsQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLENBQUNNLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO0VBQ3BDLENBQUMsTUFBTTtJQUNMaEUsQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLENBQUNNLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO0lBQ2pDaEUsQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLENBQ1BPLE1BQU0sRUFBRSxDQUNSSCxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FDMUNJLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztFQUNqRDtFQUNBLElBQUlOLFNBQVMsRUFBRTtJQUNiLElBQUlPLEtBQUssR0FBR1QsT0FBTyxDQUFDVSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLE1BQU0sRUFBRUYsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQzVDO01BQ0FyRSxDQUFDLENBQUNtRSxLQUFLLENBQUNFLENBQUMsQ0FBQyxDQUFDLENBQUNHLFdBQVcsQ0FBQ3hFLENBQUMsQ0FBQzRELFNBQVMsQ0FBQyxDQUFDRSxJQUFJLENBQUNLLEtBQUssQ0FBQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RDtFQUNGO0FBQ0Y7QUFFQXJFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dELEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFlBQVk7RUFDN0M7RUFDQVMsWUFBWSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUN2QyxJQUFJZ0IsS0FBSyxHQUFHekUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMEUsT0FBTyxDQUFDLE1BQU0sQ0FBQztFQUNuQyxJQUFJbkIsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUNiQSxJQUFJLENBQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzNFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRFLEdBQUcsRUFBRTtFQUMxQ3JCLElBQUksQ0FBQ3ZELENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHM0UsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDNEUsR0FBRyxFQUFFO0VBQ3REO0VBQ0E1RSxDQUFDLENBQUNVLElBQUksQ0FBQztJQUNMQyxHQUFHLEVBQUVkLGtIQUFPLENBQUNlLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtNQUNsRGlFLEVBQUUsRUFBRTdFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRzVFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRFLEdBQUcsRUFBRTtNQUM1Q0UsV0FBVyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0lBQ0ZqRSxJQUFJLEVBQUUsTUFBTTtJQUNaMEMsSUFBSSxFQUFFQSxJQUFJO0lBQ1Z3QixPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtNQUN6QjtNQUNBaEYsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDa0UsSUFBSSxDQUFDYyxNQUFNLENBQUN6QixJQUFJLENBQUM7TUFDL0JFLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7TUFDdEN6RCxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNpRixPQUFPLEVBQUU7SUFDdEI7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRmpGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLEtBQUssQ0FBQyxVQUFVWCxDQUFDLEVBQUU7RUFDM0I1QixDQUFDLENBQUNVLElBQUksQ0FBQztJQUNMRyxJQUFJLEVBQUUsTUFBTTtJQUNaRixHQUFHLEVBQUVkLGtIQUFPLENBQUNlLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztJQUMvQ21FLE9BQU8sRUFBRSxpQkFBVUMsTUFBTSxFQUFFO01BQ3pCaEYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDa0UsSUFBSSxDQUFDYyxNQUFNLENBQUMsQ0FBQ0UsSUFBSSxFQUFFO01BQzdCbEYsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNtRixLQUFLLENBQUMsTUFBTSxDQUFDO01BQzFDbkYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDZ0QsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsWUFBWTtRQUM3QztRQUNBUyxZQUFZLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDO1FBQy9DLElBQUlnQixLQUFLLEdBQUd6RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMwRSxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ25DLElBQUluQixJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2JBLElBQUksQ0FBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHM0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEUsR0FBRyxFQUFFO1FBQzFDckIsSUFBSSxDQUFDdkQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUczRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM0RSxHQUFHLEVBQUU7UUFDdEQ7UUFDQTVFLENBQUMsQ0FBQ1UsSUFBSSxDQUFDO1VBQ0xDLEdBQUcsRUFBRWQsa0hBQU8sQ0FBQ2UsUUFBUSxDQUFDLDRCQUE0QixFQUFFO1lBQ2xEaUUsRUFBRSxFQUFFN0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHNUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEUsR0FBRyxFQUFFO1lBQzVDRSxXQUFXLEVBQUU7VUFDZixDQUFDLENBQUM7VUFDRmpFLElBQUksRUFBRSxNQUFNO1VBQ1owQyxJQUFJLEVBQUVBLElBQUk7VUFDVndCLE9BQU8sRUFBRSxpQkFBVUMsTUFBTSxFQUFFO1lBQ3pCO1lBQ0FoRixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNrRSxJQUFJLENBQUNjLE1BQU0sQ0FBQ3pCLElBQUksQ0FBQztZQUMvQkUsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQztZQUM5Q3pELENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ2lGLE9BQU8sRUFBRTtVQUN0QjtRQUNGLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztNQUVGRyxVQUFVLENBQUMsWUFBWTtRQUNyQnBGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2tGLElBQUksRUFBRTtRQUNoQmxGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3FGLE1BQU0sRUFBRTtNQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1Q7RUFDRixDQUFDLENBQUM7RUFDRnpELENBQUMsQ0FBQzBELGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFDRnRGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dELEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVVwQixDQUFDLEVBQUU7RUFDM0MsSUFBSTJELFNBQVMsR0FBR3ZGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDcEMsSUFBSWEsR0FBRyxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUIsSUFBSUMsUUFBUSxHQUFHMUYsQ0FBQyxDQUFDLElBQUksQ0FBQztFQUN0QixJQUFJQSxDQUFDLENBQUMyRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUMvRDtJQUNBLElBQUl2QixDQUFDLEdBQUd3Qiw0Q0FBWSxDQUFDSCxRQUFRLENBQUNJLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3RFLElBQUlDLEtBQUksR0FBRyxDQUFDO0VBQ2QsQ0FBQyxNQUFNO0lBQ0wsSUFBSTFCLENBQUMsR0FBR3dCLDRDQUFZLENBQUNILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEUsSUFBSUMsS0FBSSxHQUFHLENBQUM7RUFDZDtFQUNBMUIsQ0FBQyxDQUFDMkIsS0FBSyxFQUFFO0VBQ1QsSUFBSXBCLEVBQUUsR0FBRzdFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ3VELElBQUksQ0FBQyxXQUFXLENBQUM7RUFDckMsSUFBSTJDLEdBQUcsR0FBRyxJQUFJQyxNQUFNLEVBQUU7RUFDdEJELEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyx3QkFBd0I7RUFDdkNBLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBR1YsR0FBRztFQUNqQlUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUk7RUFDdkJBLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRzVCLENBQUM7RUFDWjRCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBR1gsU0FBUztFQUM1QlcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHUixRQUFRO0VBQzFCUSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSTtFQUN6QkEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUk7RUFDbkJBLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJO0VBQ3hCQSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsd0JBQXdCO0VBQzFDQSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcxRixLQUFLO0VBQ3BCMEYsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHRixLQUFJO0VBQ3pCRSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSztFQUMzQkEsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUdFLHlFQUFjO0VBQ3RDQyx1RkFBeUMsQ0FBQ0gsR0FBRyxDQUFDO0VBQzlDdEUsQ0FBQyxDQUFDMEQsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUVGdEYsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDZ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWTtFQUNqRGhELENBQUMsQ0FBQ1UsSUFBSSxDQUFDO0lBQ0xHLElBQUksRUFBRSxNQUFNO0lBQ1pGLEdBQUcsRUFBRWQsa0hBQU8sQ0FBQ2UsUUFBUSxDQUFDLHlCQUF5QixFQUFFO01BQy9DaUUsRUFBRSxFQUFFN0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSTtJQUNyQyxDQUFDLENBQUM7SUFDRkksT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7TUFDekJoRixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNrRSxJQUFJLENBQUNjLE1BQU0sQ0FBQyxDQUFDRSxJQUFJLEVBQUU7TUFDN0JsRixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ21GLEtBQUssQ0FBQyxNQUFNLENBQUM7TUFDMUNDLFVBQVUsQ0FBQyxZQUFZO1FBQ3JCcEYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDa0YsSUFBSSxFQUFFO1FBQ2hCbEYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDcUYsTUFBTSxFQUFFO01BQ3BCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDVDtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGckYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDZ0QsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVXBCLENBQUMsRUFBRTtFQUNoRCxJQUFJMkQsU0FBUyxHQUFHdkYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUNwQyxJQUFJYSxHQUFHLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQztFQUM1QixJQUFJQyxRQUFRLEdBQUcxRixDQUFDLENBQUMsSUFBSSxDQUFDO0VBRXRCLElBQUk2RSxFQUFFLEdBQUc3RSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUN1RCxJQUFJLENBQUMsU0FBUyxDQUFDO0VBQ25DLElBQUllLENBQUMsR0FBR3dCLDRDQUFZLENBQUNILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7RUFDbEV6QixDQUFDLENBQUMyQixLQUFLLEVBQUU7RUFDVCxJQUFJQyxHQUFHLEdBQUcsSUFBSUMsTUFBTSxFQUFFO0VBQ3RCLElBQUlHLFNBQVMsR0FBRztJQUFFekIsRUFBRSxFQUFFQTtFQUFHLENBQUM7RUFDMUJxQixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcseUJBQXlCO0VBQ3hDQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUdWLEdBQUc7RUFDakJVLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBR0ksU0FBUztFQUM1QkosR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHNUIsQ0FBQztFQUNaNEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHWCxTQUFTO0VBQzVCVyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUdSLFFBQVE7RUFDMUJRLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJO0VBQ3pCQSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSTtFQUNuQkEsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUk7RUFDeEJBLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyx3QkFBd0I7RUFDMUNBLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRzFGLEtBQUs7RUFDcEIwRixHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBR0UseUVBQWM7RUFDdENDLHVGQUF5QyxDQUFDSCxHQUFHLENBQUM7RUFFOUN0RSxDQUFDLENBQUMwRCxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDO0FBRUZ0RixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNnRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVcEIsQ0FBQyxFQUFFO0VBQzdDLElBQUlpRCxFQUFFLEdBQUc3RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRSxJQUFJLENBQUMsU0FBUyxDQUFDO0VBQ2hDLElBQUk0QixLQUFLLEdBQUd2RyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRSxJQUFJLENBQUMsWUFBWSxDQUFDO0VBRXRDLElBQUlFLEVBQUUsRUFBRTtJQUNOLElBQUlxQixHQUFHLEdBQUcsSUFBSUMsTUFBTSxFQUFFO0lBQ3RCRCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsZ0NBQWdDO0lBQy9DQSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUdyQixFQUFFO0lBQ2RxQixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUdLLEtBQUs7SUFDcEJMLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJO0lBQ3pCQSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSTtJQUNuQkEsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUk7SUFDeEJBLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyx3QkFBd0I7SUFDMUNBLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRzFGLEtBQUs7SUFDcEI2Riw2RUFBK0IsQ0FBQ0gsR0FBRyxDQUFDO0VBQ3RDLENBQUMsTUFBTTtJQUNMTSxNQUFNLENBQUNDLE9BQU8sQ0FDWiw4REFBOEQsRUFDOUQsU0FBUyxFQUNUO01BQUVDLE9BQU8sRUFBRTtJQUFLLENBQUMsQ0FDbEI7RUFDSDtFQUNBOUUsQ0FBQyxDQUFDMEQsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUMzUUYsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsaUJBQWlCLG1CQUFPLENBQUMsNkZBQWdDOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRGE7QUFDYixhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDekQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELDhCQUE4QixtQkFBTyxDQUFDLDZHQUF3Qzs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDOUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDcEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUE2RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxxRUFBcUU7QUFDeEU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWRDtBQUNBLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3JDLG1CQUFPLENBQUMscUZBQTRCIiwiZmlsZSI6InBfYXJ0aWNsZV9uaXZlYXUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb25cIik7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qc1wiO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tIFwibGFkZGFcIjtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5nbG9iYWwuJCA9ICQ7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzXCI7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGVcIixcclxuICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbi8vdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWJ1dHRvbicpKTtcclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfYXJ0aWNsZV9uaXZlYXVfM19saXN0XCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCAyMDAwMDAwMF0sXHJcbiAgICBbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdLFxyXG4gIF0sXHJcblxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgc2VhcmNoYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMXB4XCIsIHRhcmdldHM6IFswXSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCIsIHRhcmdldHM6IDAgfSxcclxuICBdLFxyXG4gIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGluaXRDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFwaSA9IHRoaXMuYXBpKCk7XHJcbiAgICBhcGkuJChcInRkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHN0ciA9IHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgICB2YXIgbiA9IHN0ci5zZWFyY2goXCJjZF9vcFwiKTtcclxuICAgICAgaWYgKG4gPT0gLTEpIHtcclxuICAgICAgICBhcGkuc2VhcmNoKHRoaXMuaW5uZXJIVE1MKS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG4gIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMV0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgW10sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFtdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3ViU2VsZWN0KG15Y2xhc3MsIG15Ym9vbGVhbiwgbXljb250ZW50LCBybSkge1xyXG4gIC8vY29uc29sZS5sb2cobXljb250ZW50KVxyXG4gIGlmIChybSAmJiBteWJvb2xlYW4pIHtcclxuICAgICQocm0pLmZpbmQoXCJvcHRpb246bm90KDpmaXJzdClcIikucmVtb3ZlKCk7XHJcbiAgICAkKHJtKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKHJtKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgfVxyXG4gIGlmIChteWJvb2xlYW4pIHtcclxuICAgICQobXljbGFzcykucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAkKG15Y2xhc3MpXHJcbiAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAuZmluZChcIi5zZWxlY3QyIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3dcIilcclxuICAgICAgLmh0bWwoJzxpIGNsYXNzPVwiaS1sb2FkIGZhIGZhLXJlZnJlc2hcIj48L2k+Jyk7XHJcbiAgfVxyXG4gIGlmIChteWNvbnRlbnQpIHtcclxuICAgIHZhciBhcnJheSA9IG15Y2xhc3Muc3BsaXQoXCIsXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4gICAgICAkKGFycmF5W2ldKS5yZXBsYWNlV2l0aCgkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuJChcIi5uZXdcIikub24oXCJjaGFuZ2VcIiwgXCIubml2ZWF1MlwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy9hbGVydCgpXHJcbiAgZ2V0U3ViU2VsZWN0KFwiLm5pdmVhdTNcIiwgZmFsc2UsIFwiXCIsIFwiXCIpO1xyXG4gIHZhciAkdGhpcyA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgdmFyIGRhdGEgPSB7fTtcclxuICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuICBkYXRhWyQoXCIubml2ZWF1MlwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLm5pdmVhdTJcIikudmFsKCk7XHJcbiAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwic3RvY2tfcHJvZHVpdF9jaG9peF9uaXZlYXVcIiwge1xyXG4gICAgICBpZDogJCh0aGlzKS52YWwoKSA9PSBcIlwiID8gLTEgOiAkKHRoaXMpLnZhbCgpLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJjaG9peCBOaXZlYXUgM1wiLFxyXG4gICAgfSksXHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICQoXCIubml2ZWF1M1wiKS5odG1sKHJlc3VsdC5kYXRhKTtcclxuICAgICAgZ2V0U3ViU2VsZWN0KFwiLm5pdmVhdTNcIiwgdHJ1ZSwgXCJcIiwgXCJcIik7XHJcbiAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIuYWRkXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicF9hcnRpY2xlX25pdmVhdV8zX25ld1wiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgJChcIi5uZXdcIikub24oXCJjaGFuZ2VcIiwgXCIubml2ZWF1MVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgIGdldFN1YlNlbGVjdChcIi5uaXZlYXUyXCIsIGZhbHNlLCBcIlwiLCBcIi5uaXZlYXUzXCIpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuICAgICAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBkYXRhWyQoXCIubml2ZWF1MlwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLm5pdmVhdTJcIikudmFsKCk7XHJcbiAgICAgICAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwic3RvY2tfcHJvZHVpdF9jaG9peF9uaXZlYXVcIiwge1xyXG4gICAgICAgICAgICBpZDogJCh0aGlzKS52YWwoKSA9PSBcIlwiID8gLTEgOiAkKHRoaXMpLnZhbCgpLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJjaG9peCBOaXZlYXUgMlwiLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICAgICAgICQoXCIubml2ZWF1MlwiKS5odG1sKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgZ2V0U3ViU2VsZWN0KFwiLm5pdmVhdTJcIiwgdHJ1ZSwgXCJcIiwgXCIubml2ZWF1M1wiKTtcclxuICAgICAgICAgICAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKFwiLmJvZFwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIGlmICgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmhhc0NsYXNzKFwiYnV0dG9uLXNhdmUtYWRkLW5vbWVuXCIpKSB7XHJcbiAgICAvL2FsZXJ0KClcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXNhdmUtYWRkLW5vbWVuXCIpKTtcclxuICAgIHZhciBnb3RvID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc2F2ZS1ub21lblwiKSk7XHJcbiAgICB2YXIgZ290byA9IDA7XHJcbiAgfVxyXG4gIGwuc3RhcnQoKTtcclxuICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcInNlcnZpY2VJZFwiKTtcclxuICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gIG9ialtcInJvdXRlXCJdID0gXCJwX2FydGljbGVfbml2ZWF1XzNfbmV3XCI7XHJcbiAgb2JqW1wiZGF0YVwiXSA9IGR0YTtcclxuICBvYmpbXCJwYXJhbWV0cmVcIl0gPSBudWxsO1xyXG4gIG9ialtcImxcIl0gPSBsO1xyXG4gIG9ialtcImZvcm1fbmFtZVwiXSA9IGZvcm1fbmFtZTtcclxuICBvYmpbXCJzZWxlY3RvclwiXSA9IHNlbGVjdG9yO1xyXG4gIG9ialtcInJlbG9hZFRhYmxlXCJdID0gdHJ1ZTtcclxuICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgb2JqW1wiaGlkZU1vZHVsZVwiXSA9IHRydWU7XHJcbiAgb2JqW1wibm9tTW9kYWxcIl0gPSBcIk1vZGFsRG9jdW1lbnREeW5hbWlxdWVcIjtcclxuICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gIG9ialtcImF1dG9UcmlnZ2VyXCJdID0gZ290bztcclxuICBvYmpbXCJ0cmlnZ2VyQ2xhc3NcIl0gPSBcImFkZFwiO1xyXG4gIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgYXV0b0Z1bmN0aW9uQWpheC5hdXRvQWpheFJlbmRlckNvbnRyb2xsZXIob2JqKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuY2Rfb3BcIiwgZnVuY3Rpb24gKCkge1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBfYXJ0aWNsZV9uaXZlYXVfM19lZGl0XCIsIHtcclxuICAgICAgaWQ6ICQodGhpcykuY2xvc2VzdChcInRyXCIpLmF0dHIoXCJpZFwiKSxcclxuICAgIH0pLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgIH0sIDYwMCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuJChcIi5ib2RcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV9lZGl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG5cclxuICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcIm5vbWVuSWRcIik7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tZWRpdC1ub21lblwiKSk7XHJcbiAgbC5zdGFydCgpO1xyXG4gIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgdmFyIHBhcmFtZXRyZSA9IHsgaWQ6IGlkIH07XHJcbiAgb2JqW1wicm91dGVcIl0gPSBcInBfYXJ0aWNsZV9uaXZlYXVfM19lZGl0XCI7XHJcbiAgb2JqW1wiZGF0YVwiXSA9IGR0YTtcclxuICBvYmpbXCJwYXJhbWV0cmVcIl0gPSBwYXJhbWV0cmU7XHJcbiAgb2JqW1wibFwiXSA9IGw7XHJcbiAgb2JqW1wiZm9ybV9uYW1lXCJdID0gZm9ybV9uYW1lO1xyXG4gIG9ialtcInNlbGVjdG9yXCJdID0gc2VsZWN0b3I7XHJcbiAgb2JqW1wicmVsb2FkVGFibGVcIl0gPSB0cnVlO1xyXG4gIG9ialtcIm1vZGFsXCJdID0gdHJ1ZTtcclxuICBvYmpbXCJoaWRlTW9kdWxlXCJdID0gdHJ1ZTtcclxuICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gIG9ialtcInRhYmxlXCJdID0gdGFibGU7XHJcbiAgb2JqW1wiU2hvd0Zvcm1FcnJvcnNcIl0gPSBTaG93Rm9ybUVycm9ycztcclxuICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4UmVuZGVyQ29udHJvbGxlcihvYmopO1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5ib2RcIikub24oXCJjbGlja1wiLCBcIi5fZGVsZXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRva2VuXCIpO1xyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBvYmpbXCJyb3V0ZVwiXSA9IFwicF9ub21lbmNsYXR1cmVfc3RhbmRhcmRfZGVsZXRlXCI7XHJcbiAgICBvYmpbXCJpZFwiXSA9IGlkO1xyXG4gICAgb2JqW1widG9rZW5cIl0gPSB0b2tlbjtcclxuICAgIG9ialtcInJlbG9hZFRhYmxlXCJdID0gdHJ1ZTtcclxuICAgIG9ialtcIm1vZGFsXCJdID0gdHJ1ZTtcclxuICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgb2JqW1wibm9tTW9kYWxcIl0gPSBcIk1vZGFsRG9jdW1lbnREeW5hbWlxdWVcIjtcclxuICAgIG9ialtcInRhYmxlXCJdID0gdGFibGU7XHJcbiAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4RGVsZXRlKG9iaik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIixcclxuICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIi8qIGdsb2JhbCBCdW4gLS0gRGVubyBjYXNlICovXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBCdW4gPT0gJ2Z1bmN0aW9uJyAmJiBCdW4gJiYgdHlwZW9mIEJ1bi52ZXJzaW9uID09ICdzdHJpbmcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBFTkdJTkVfSVNfQlVOID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4nKTtcbnZhciBVU0VSX0FHRU5UID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuLy8gZGlydHkgSUU5LSBhbmQgQnVuIDAuMy4wLSBjaGVja3NcbnZhciBXUkFQID0gL01TSUUgLlxcLi8udGVzdChVU0VSX0FHRU5UKSB8fCBFTkdJTkVfSVNfQlVOICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZXJzaW9uID0gZ2xvYmFsLkJ1bi52ZXJzaW9uLnNwbGl0KCcuJyk7XG4gIHJldHVybiB2ZXJzaW9uLmxlbmd0aCA8IDMgfHwgdmVyc2lvblswXSA9PSAwICYmICh2ZXJzaW9uWzFdIDwgMyB8fCB2ZXJzaW9uWzFdID09IDMgJiYgdmVyc2lvblsyXSA9PSAwKTtcbn0pKCk7XG5cbi8vIElFOS0gLyBCdW4gMC4zLjAtIHNldFRpbWVvdXQgLyBzZXRJbnRlcnZhbCAvIHNldEltbWVkaWF0ZSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL292ZW4tc2gvYnVuL2lzc3Vlcy8xNjMzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGhhc1RpbWVBcmcpIHtcbiAgdmFyIGZpcnN0UGFyYW1JbmRleCA9IGhhc1RpbWVBcmcgPyAyIDogMTtcbiAgcmV0dXJuIFdSQVAgPyBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKSA+IGZpcnN0UGFyYW1JbmRleDtcbiAgICB2YXIgZm4gPSBpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpO1xuICAgIHZhciBwYXJhbXMgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgZmlyc3RQYXJhbUluZGV4KSA6IFtdO1xuICAgIHZhciBjYWxsYmFjayA9IGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGZuLCB0aGlzLCBwYXJhbXMpO1xuICAgIH0gOiBmbjtcbiAgICByZXR1cm4gaGFzVGltZUFyZyA/IHNjaGVkdWxlcihjYWxsYmFjaywgdGltZW91dCkgOiBzY2hlZHVsZXIoY2FsbGJhY2spO1xuICB9IDogc2NoZWR1bGVyO1xufTtcbiIsInZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG4gIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldEludGVydmFsID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0SW50ZXJ2YWwsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRJbnRlcnZhbCAhPT0gc2V0SW50ZXJ2YWwgfSwge1xuICBzZXRJbnRlcnZhbDogc2V0SW50ZXJ2YWxcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldFRpbWVvdXQgPSBzY2hlZHVsZXJzRml4KGdsb2JhbC5zZXRUaW1lb3V0LCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRUaW1lb3V0IGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldFRpbWVvdXQgIT09IHNldFRpbWVvdXQgfSwge1xuICBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0XG59KTtcbiIsIi8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=