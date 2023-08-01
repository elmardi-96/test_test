(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cb_fabrication"],{

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

/***/ "./assets/js/components/code_barre/cb_fabrication.js":
/*!***********************************************************!*\
  !*** ./assets/js/components/code_barre/cb_fabrication.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");



var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.setRoutingData(routes);




var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});
$(".new").on("submit", ".form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_5__["create"](document.querySelector(".my-button"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("code_barre_new"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      // l.stop();
      $(".errors-list").remove();
      if (result.customErrors) {
        // console.log(result.customErrors);

        $.each(result.customErrors, function (i, value) {
          //console.log(i);
          // console.log(value);

          $(".form #" + i).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + value + "</span></span></span>");
        });

        // $('#'+)
      } else if (result.errors) {
        //dump(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_4__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        // alert(result.data.id);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("code_barre_show", {
          id: result.data.id
        });
        window.location.href = url;
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("code_barre_list") + location.search,
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "5%",
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: "15%"
  }, {
    orderable: true,
    width: "30%"
  }, {
    orderable: true,
    width: "50%"
  }],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
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
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchCheckbox"](api, [0], []);
});
$(".dynamique_document").click(function (e) {
  // console.log( $(this).attr('data-id'));
  //href="{{ path('code_barre_document_pdf' , {id:cb_fabrication.id})}}" target="_blank"
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("code_barre_document_dynamique_form", {
      id: $(this).attr("data-id")
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
  e.preventDefault();
});
$(".edit").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_5__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("code_barre_edit", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_4__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/components/code_barre/cb_fabrication.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9jb2RlX2JhcnJlL2NiX2ZhYnJpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtYnVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsIlNob3dGb3JtRXJyb3JzIiwic2VsZWN0b3IiLCJmb3JtX25hbWUiLCJlcnJvcnMiLCJpZCIsImlzR3JvdXBlIiwiJCIsInJlbW92ZSIsImpRdWVyeSIsImVhY2giLCJ2aW9sYXRpb25zIiwiaSIsInZhbCIsImNvbHVtbk5hbWUiLCJ4IiwicHJvcGVydHlQYXRoIiwic2VhcmNoIiwic2VwYXJhdG9ycyIsImFyciIsInNwbGl0IiwiUmVnRXhwIiwiam9pbiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwicGFyZW50IiwiYXBwZW5kIiwidGl0bGUiLCJTaG93Rm9ybUVycm9yc1dpdGhQYXJhbSIsIm9uIiwiZSIsImF0dHIiLCJkdGEiLCJGb3JtRGF0YSIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0YXJ0IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJnZW5lcmF0ZSIsImRhdGEiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImN1c3RvbUVycm9ycyIsInZhbHVlIiwiYWZ0ZXIiLCJlbXB0eSIsInRvYXN0ciIsIndhcm5pbmciLCJtZXNzYWdlIiwidGV4dCIsInRpbWVPdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwic3RvcCIsInByZXZlbnREZWZhdWx0IiwidGFibGUiLCJEYXRhVGFibGUiLCJkZWZlclJlbmRlciIsInN0YXRlU2F2ZSIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwidGFyZ2V0cyIsImRvbSIsImJ1dHRvbnMiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwicmVsb2FkIiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwiZml4ZWRIZWFkZXIiLCJzZXR0aW5ncyIsImFwaSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJjbGljayIsImh0bWwiLCJoaWRlIiwibW9kYWwiLCJzZXRUaW1lb3V0IiwiZmFkZUluIiwiZ2V0IiwiYWN0aXZlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFB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RUFBcUI7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxxRUFBcUU7QUFDeEU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWRDtBQUNBLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3JDLG1CQUFPLENBQUMscUZBQTRCIiwiZmlsZSI6ImNiX2ZhYnJpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcbiAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgIGpRdWVyeS5lYWNoKGVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHZhciB4ID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICBpZihpc0dyb3VwZSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IHg7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdcXFxcWycpICE9IC0xICYmIHguc2VhcmNoKCdcXFxcXScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JzID0gWydcXFxcXScsICdcXFxcWyddO1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdChuZXcgUmVnRXhwKHNlcGFyYXRvcnMuam9pbignfCcpKSk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeC5zZWFyY2goJ2RhdGEuJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coeClcclxuXHJcbi8qdsOpcmlmaWVyIHMnaWwgcydhZ2l0IGQndW5lIGZvcm11bGFpcmUgYXZlYyB1biBjaGFtcCB0eXBlIGZpbGUgKi9cclxuICAgICAgICBpZiAoIWpRdWVyeShcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gY29sdW1uTmFtZSArICdfZmlsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkKXtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lKTtcclxuICAgICAgICBpZiAoY29sdW1uTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKVxyXG4gICAgICAgICAgICBzZWxlY3Rvci5maW5kKFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzV2l0aFBhcmFtKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI1wiK3NlbGVjdG9yKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyBlcnJvcnMgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb25cIik7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qc1wiO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qc1wiO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGVcIixcclxuICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbiQoXCIubmV3XCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG5cclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJjb2RlX2JhcnJlX25ld1wiKSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgLy8gbC5zdG9wKCk7XHJcbiAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuY3VzdG9tRXJyb3JzKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmN1c3RvbUVycm9ycyk7XHJcblxyXG4gICAgICAgICQuZWFjaChyZXN1bHQuY3VzdG9tRXJyb3JzLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coaSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgJChcIi5mb3JtICNcIiArIGkpLmFmdGVyKFxyXG4gICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbHVlICtcclxuICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAkKCcjJyspXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgIC8vZHVtcChyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIC8vIGFsZXJ0KHJlc3VsdC5kYXRhLmlkKTtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcImNvZGVfYmFycmVfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgIGlkOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiY29kZV9iYXJyZV9saXN0XCIpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgLTFdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiNSVcIiwgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTUlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIzMCVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUwJVwiIH0sXHJcbiAgICBcclxuICBdLFxyXG4gIC8vIGRvbTogJ2xCZnJ0aXAnLFxyXG4gIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgYnV0dG9uczogW1xyXG4gICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgZml4ZWRIZWFkZXI6IHRydWUsXHJcbn0pO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsIDIsM10sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFtdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFtdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLmR5bmFtaXF1ZV9kb2N1bWVudFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coICQodGhpcykuYXR0cignZGF0YS1pZCcpKTtcclxuICAgIC8vaHJlZj1cInt7IHBhdGgoJ2NvZGVfYmFycmVfZG9jdW1lbnRfcGRmJyAsIHtpZDpjYl9mYWJyaWNhdGlvbi5pZH0pfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImNvZGVfYmFycmVfZG9jdW1lbnRfZHluYW1pcXVlX2Zvcm1cIiwge1xyXG4gICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpLFxyXG4gICAgICB9KSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuICAkKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJjb2RlX2JhcnJlX2VkaXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuIiwiLyogZ2xvYmFsIEJ1biAtLSBEZW5vIGNhc2UgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIEJ1biA9PSAnZnVuY3Rpb24nICYmIEJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIEVOR0lORV9JU19CVU4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bicpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOR0lORV9JU19CVU4gJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlcnNpb24gPSBnbG9iYWwuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09IDAgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT0gMyAmJiB2ZXJzaW9uWzJdID09IDApO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwidmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcbiAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuICByZXR1cm4gcGFzc2VkO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9