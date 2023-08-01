(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Vtfacturefrscab"],{

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

/***/ "./assets/js/components/module_vente/Vtfacturefrscab.js":
/*!**************************************************************!*\
  !*** ./assets/js/components/module_vente/Vtfacturefrscab.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");













var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");



_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.setRoutingData(routes);

var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});

var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_t_facturefrscab_list2") + location.search,
    // json datasource
    type: "get",
    beforeSend: function beforeSend() {
      if (table.hasOwnProperty('settings')) {
        var settings = table.settings();
        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    }
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: true,
    name: "fac.id"
  }, {
    visible: true,
    name: "fac.code"
  }, {
    name: "datefacture"
  }, {
    name: "observation"
  }, {
    name: "part.nom"
  }, {
    className: "mnt-format",
    name: "refDocAsso"
  }, {
    className: "mnt-format",
    name: "det.prixHt"
  }, {
    className: "mnt-format",
    name: "det.prixTva"
  }, {
    className: "mnt-format",
    name: "det.prixRemise"
  }, {
    className: "fac-back",
    name: "det.prixTtc"
  }, {
    className: " reg-back",
    name: "tab.montantRegle"
  }, {
    className: "mnt-format",
    name: "tab.NbrReglements"
  }, {
    className: "mnt-format",
    name: "nbFacture.NbrOperations"
  }, {
    className: "mnt-format",
    searchable: false
  }, {
    className: "mnt-format",
    name: "fac.position_actuel"
  }, {
    orderable: true,
    searchable: false,
    width: "5%"
  }
  //prixHt
  ],

  columnDefs: [{
    searchable: false,
    targets: 15,
    render: function render(t, a, l, s) {
      var data = "";
      t.forEach(function (element) {
        var link = "";
        if (element._route_link) {
          link = "href='" + element._route_link + "'";
        }
        data = data + "<li><a " + link + "  data-transition='" + element.name + "' data-id='" + element.id + "' data-title='" + element.titre + "' class='dropdown-item  " + element["class"] + " " + element.idCs + "' ><i class='fa " + element.icon + "' ></i> " + element.titre + "</a></li>";
      });
      return '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' + data + " </ul> </div> \t</div>\t";
    }
  }],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: '<"html5buttons btn-group"f>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }, {
    extend: "excel",
    exportOptions: {
      columns: ":visible",
      rows: ":visible",
      format: {
        body: function body(data, row, column, node) {
          data = $("<p>" + data + "</p>").text();
          return $.isNumeric(data.replace(",", ".")) ? data.replace(",", ".") : data;
        }
      }
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("datatables_langue"),
    processing: true
  }
  //fixedHeader: true,
});

table.on("init.dt", function (e, settings) {
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchText"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchSelect"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchCheckbox"](api, [0], []);
});
/*column 1 de datatble search*/

$(".remove-filter").click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});
$(".action_head").click(function () {
  console.log($(".action").filter(":checked").length);
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

/*  $('#grid').on('click', '.statut_op', function (event) {
     var name = $(this).attr('name');
     var id = $(this).attr('rol'); */
//alert(name+""+id);
$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true
});
$(".list_actions").change(function (e) {});
$("#grid tbody").on("click", "tr", function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    table.$("tr.selected").removeClass("selected");
    $(this).addClass("selected");
  }
});
$(document).ready(function () {
  //alert(1)
  /*  document.addEventListener("DOMContentLoaded", function (event) {
  
          $('#grid').show(500);
      });*/
  // console.log('Hello Webpack Encore! Edit me in assets/js/app.js!!!');
  $("#_statut").click(function (e) {
    var id = table.row(".selected").id();
    if (id) {
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_statut", {
          id: id
        }),
        success: function success(result, textStatus, errorThrown) {
          $(".actions").html(result);
          $(".actions").toggleClass("sidebar-open");
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          toastr.error("Erreur", errorThrown, {
            timeOut: 4000
          });
        }
      });
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
    e.preventDefault();
  });
  $(".actions").on("click", ".close-me", function (e) {
    //$('.close-me').click(function (e){
    $(".actions").removeClass("sidebar-open");
    e.preventDefault();
  });
  $(".actions").on("submit", ".form_statut", function (e) {
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var id = table.row(".selected").id();
    if (id) {
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_statut", {
          id: id
        }),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result, textStatus, errorThrown) {
          //            console.log(result);
          //            console.log(textStatus);
          //            console.log(errorThrown);
          if (result.errors) {
            $(".errors-list").remove();
            jQuery.each(result.errors.violations, function (i, val) {
              var column = val.propertyPath;
              var columnName = column.split(".");
              // console.log(columnName[1]);
              $(".form_statut #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
            });
          } else if (result.code == 200) {
            table.ajax.reload();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            $(".actions").empty().removeClass("sidebar-open");
            // location.reload();
          }
        },

        error: function error(jqXHR, textStatus, errorThrown) {
          toastr.error("Erreur", errorThrown, {
            timeOut: 4000
          });
        }
      });
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
    e.preventDefault();
  });
  $("#_demande").click(function (e) {
    var id = table.row(".selected").id();
    if (id) {
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_Paiement", {
        id: id
      });
      window.location.href = url;
      // console.log(url)
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
    e.preventDefault();
  });
  $("#_show").click(function (e) {
    // alert(11);
    var id = table.row(".selected").id();
    if (id) {
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_consulte", {
        id: id
      });
      window.location.href = url;
      // console.log(url)
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
    e.preventDefault();
  });
  $("#_imprimer").click(function (e) {
    //   var id = table.row('.selected').id();
    var id = $("#test").data("factureId");
    if (id) {
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("pdf_show_uv_facturecab", {
        id: id
      });
      // window.location.href = url;
      window.open(url, "_blank");
      // console.log(url)
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
    e.preventDefault();
  });
  $("#_archiver").click(function (e) {
    //var id = table.row('.selected').id();
    var id = $("#test").data("factureId");
    // alert(id);

    //    var id = $("input[name=_id]").val();
    //    var token = $("input[name=_token]").val();
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment archiver cette Facture ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, archiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "GET",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_archiver", {
            id: id
          }),
          data: id,
          processData: false,
          contentType: false,
          success: function success(result) {
            //   console.log(result);
            if (result.data == "succees") {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              // selector.parent().parent().hide();
              // swal(result.message.title, result.message.text, result.message.success);
              location.reload();
            } else if (result.data = "error") {
              toastr.error(result.message.text, result.message.title, {
                timeOut: 4000
              });
              //swal(result.message.title, result.message.text, result.message.error);
            }
          }
        });
      }
    });
  });

  $("#_condition").click(function (e) {
    //  var id = table.row('.selected').id();
    var id = $("#test").data("factureId");
    if (id) {
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_condition", {
        id: id
      });
      // window.location.href = url;
      window.open(url, "_blank");
      // console.log(url)
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
    e.preventDefault();
  });
  $(".new").on("submit", ".form2", function (e) {
    // alert(1);

    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this).attr("class").split(" ")[0];
    var id = $("#test").data("factureId");
    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_17__["create"](document.querySelector(".my-button"));

    // Start loading
    l.start();

    // console.log(test);
    //console.log(e.type);
    //  alert(id);
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_condition_insert", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
        if (result.errors) {
          l.stop();
          //  console.log(result.errors);
          $(".errors-list").remove();
          jQuery.each(result.errors.violations, function (i, val) {
            var column = val.propertyPath;
            var columnName = column.split(".");
            $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
          });
        } else if (result.empty) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
          // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
        } else if (result.data) {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          // $(".form")[0].reset();
          $(".new .table-detail tbody").hide();
          $(".new-article-btn").show();
          $(".new .table-detail > tbody tr").not(":last").remove();
          location.reload();
          //  var url = Routing.generate('uv_facturecab_condition', { 'id': id });
          // window.location.href = url;
          // window.open(url);
          //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
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
  $(".new").on("click", ".delete_element", function (e) {
    var id = $(this).attr("data");
    //  alert(id);

    //    var id = $("input[name=_id]").val();
    //    var token = $("input[name=_token]").val();

    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        //  var dta=1;
        $.ajax({
          type: "GET",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_condition_delete", {
            id: id
          }),
          //  data: dta,
          processData: false,
          contentType: false,
          success: function success(result) {
            //   console.log(result);
            if (result.data == "deleted") {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              // selector.parent().parent().hide();
              // swal(result.message.title, result.message.text, result.message.success);
              location.reload();
            } else if (result.data = "error") {
              toastr.error(result.message.text, result.message.title, {
                timeOut: 4000
              });
              //swal(result.message.title, result.message.text, result.message.error);
            }
          }
        });
      }
    });
  });

  $("#_delete").click(function (e) {
    var id = $(this).attr("data-id");
    var token = $(this).attr("data-token");
    var obj = {
      route: "uv_facturecab_delete",
      redirection: "uv_facturecab_index",
      token: token,
      id: id
    };
    // alert();
    Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_15__["deleteCab"])(obj);
    e.preventDefault();
  });
  $(".new").on("submit", ".form", function (e) {
    // var d =Routing.generate('uv_facturecab_insert', { 'id': id });
    //alert(d);

    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var id = $("#test").data("factureId");
    var selector = $(this);

    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_17__["create"](document.querySelector(".my-button2"));

    // Start loading
    l.start();
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_insert", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        if (result.errors) {
          l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_16__["ShowFormErrors"])(selector, form_name, result.errors);
        } else if (result.empty) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
          // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
        } else if (result.data) {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          l.stop();
          $(".form")[0].reset();
          $(".new .table-detail tbody").hide();
          $(".new-article-btn").show();
          $(".new .table-detail > tbody tr").not(":last").remove();
          location.reload();
          //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
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
  $("body").on("click", ".uv_facturecab_apply_transitions", function (e) {
    var dta = new FormData();
    var id = $(this).attr("data-id");
    var title = $(this).attr("data-title");
    var transition = $(this).attr("data-transition");
    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);
    if (transition == "apres_valider_generer") {
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturefrscab_generer", {
          id: id
        }),
        success: function success(result) {
          $(".bod").html(result).hide();
          $(".parvenue").select2();
          if ($(".parvenue").select2("data") && $(".parvenue").select2("data")[0].text.indexOf("non parvenue") !== -1) {
            $(".dateDoc,.refDoc").hide().removeClass("classShow");
          } else {
            $(".dateDoc,.refDoc").show().addClass("classShow");
          }
          $("#MyModal").modal("show");
          $(".parvenue").on("select2:selecting", function (e) {
            // alert();
            if (e.params.args.data.text.indexOf("non parvenue") !== -1) {
              $(".dateDoc,.refDoc").hide().removeClass("classShow");
            } else {
              $(".dateDoc,.refDoc").show().addClass("classShow");
            }
          });
          setTimeout(function () {
            $(".spr").hide();
            $(".bod").fadeIn();
          }, 600);
        }
      });
    } else {
      if (id) {
        swalWithBootstrapButtons.fire({
          showClass: {
            popup: "animatedSwal flipInX faster"
          },
          position: "top",
          title: "Confirmation ?",
          text: "Voulez vous vraiment passer a l'etat '" + title + "' pour cet enregistrement ?",
          type: "warning",
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonText: "<i class='fa fa-check'></i> Oui !",
          cancelButtonText: "<i class='fa fa-times'></i> Non !"
        }).then(function (result) {
          if (result.value) {
            $.ajax({
              type: "POST",
              data: dta,
              processData: false,
              contentType: false,
              url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_apply_transitions", {
                id: id
              }),
              success: function success(result) {
                if (result.code == 200) {
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000
                  });
                  location.reload();
                }
                if (result.code == 201) {
                  // alert(result.valider);
                  toastr.success(result.message.text, result.message.title, {
                    timeOut: 4000
                  });
                  location.reload();
                  /*var url = Routing.generate("uv_facturecab_Paiement", {
                  id: result.id,
                  });
                  window.location.href = url;*/
                }

                if (result.code == 403) {
                  toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000
                  });
                }
                if (result.code == 404) {
                  toastr.warning(result.message.text, result.message.title, {
                    timeOut: 4000
                  });
                  l.stop();
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
        toastr.warning("Facture non renseigne ", "warning", {
          timeOut: 4000
        });
      }
    }
    e.preventDefault();
  });
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_show", {
    id: $(this).closest("tr").attr("id")
  });
  window.location.href = url;
});
var tableShow = $("#datatable-show").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  columns: [{
    width: "5%"
  }, {
    width: "10%"
  }, {
    width: "35%"
  }, {
    width: "20%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }],
  footerCallback: function footerCallback(row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
    };

    // Total over all pages
    total = api.column(7).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(7, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(1).footer()).html("Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});
var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  footerCallback: function footerCallback(row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
    };

    // Total over all pages
    total = api.column(3).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(3, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(8).footer()).html("Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});
$(".paiement").change(function () {
  if ($(this).val() == 2) {
    $(".bloc_cheque").show();
  } else {
    $("#univ_t_reglement_dateEcheance").val(null);
    $("#univ_t_reglement_reference").val(null);
    $(".bloc_cheque").hide();
  }
  if ($(this).val() == 1 || $(this).val() == 4) {
    $(".bloc_banque").hide();
  } else {
    $(".bloc_banque").show();
  }
  console.log($(this).val());
});
$(".dynamique_document").click(function (e) {
  // console.log( $(this).attr('data-id'));
  //alert($(this).attr("data-id"));
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("t_facture_document_dynamique_form", {
      id: $(this).attr("data-id")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      $(".sel2").select2();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$("body").on("click", "#form_entete", function () {
  //console.log($(this).attr('data-type'));
  //alert();
  if ($(this).is(":checked")) {
    $(".dossier").show();
  } else {
    $(".dossier").hide();
  }
});
$("body").on("change", "._multiple_actions", function () {
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });
  if ($(this).val() == "_desactiver_facture" && _array_ids != null) {
    // alert();
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facture_desactiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            if (result.errors) {
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_16__["ShowFormErrors"])(selector, form_name, result.errors);
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.data) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
            }
          }
        });
        $("._multiple_actions").val("");
      }
    });
  }
});
$("body").on("submit", ".save_facture_generer", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var dta2 = new FormData();
  var id = $('#id').attr('value');
  var title = "";
  var transition = "apres_valider_generer";
  dta2.append("id", id);
  dta2.append("title", title);
  dta2.append("transition", transition);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_17__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  //alert($('#id').attr('value'));
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturefrscab_generer", {
      id: $('#id').attr('value')
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.code == 404) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        l.stop();
      }
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_16__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        $.ajax({
          type: "POST",
          data: dta2,
          processData: false,
          contentType: false,
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_apply_transitions", {
            id: id
          }),
          success: function success(result) {
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
            }
            if (result.code == 201) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("ua_t_facturefrscab_Paiement", {
                id: result.id
              });
              window.location.href = url;
            }
            if (result.code == 403) {
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
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$("body").on("click", "._delete", function (e) {
  //alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_delete_multiple"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              $('#grid').DataTable().ajax.reload();
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
  }
});
$("body").on("click", "._desactiver_facture", function (e) {
  //alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette facture ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facture_desactiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
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
  }
});
$("#_desactiver_facture").click(function (e) {
  //alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette facture ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facture_desactiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
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
  }
});
$('body').on('click', '.pdf_by_code', function (e) {
  window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("pdf_show_uv_facturecab_old_sys", {
    id: $(this).attr('data-id')
  }), '_blank');
});
$("#generer").change(function (e) {
  //$("form").submit();
  if ($(this).val() == 3) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize();
    // alert(dta);
    var t = dta.get("_action[]");
    // alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    // var t=1;
    if (t) {
      $.ajax({
        type: 'POST',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('vt_facture_generer_multiple'),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          //   table.ajax.reload();
          // toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

          $(".bod_valider").html(result).hide();
          $("#ModalDocumentDynamiqueValider").modal("show");
          setTimeout(function () {
            $(".spr_valider").hide();
            $(".bod_valider").fadeIn();
          }, 600);
          $("#generer").css("display", "none");
          $(".action").prop("checked", false);
          $("#allactions").prop("checked", false);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          toastr.error("Erreur", errorThrown, {
            timeOut: 4000
          });
        }
      });
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$("#_annuler").click(function (e) {
  var id = $(this).attr("data-id");
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: "animatedSwal flipInX faster"
    },
    position: "top",
    title: "Confirmation ?",
    text: "Voulez vous vraiment annuler cette facture ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-trash'></i> Oui!",
    cancelButtonText: "<i class='fa fa-times'></i> No !"
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_annuler", {
          id: id
        }),
        success: function success(result) {
          // console.log(result);
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('uv_facturecab_index');
            window.location.href = url;
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
  e.preventDefault();
});
$('body').on('submit', '.proforma_valider', function (e) {
  //    alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_17__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('vt_facture_generer_multiple'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_16__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
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
$('body').on('click', '.imprime_document', function (e) {
  e.preventDefault();
  if ($(this).attr("data-valide") == 0) {
    toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {
      timeOut: 4000
    });
    return;
  }
  window.open($(this).attr('href'), '_blank');
});
var factureId;
$('body').on('click', '.modifier_ref', function (e) {
  e.preventDefault();
  factureId = $(this).attr('data-id');
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_info_ref", {
      id: factureId
    }),
    success: function success(result) {
      $("#MyModalRefModifier").find("#document_ref").val(result.ref_doc);
      $("#MyModalRefModifier").find("#date_document").val(result.date_ref);
      $("#MyModalRefModifier").find("#date_valider").val(result.date_valide);
      $("#MyModalRefModifier").modal('show');
      setTimeout(function () {
        $(".spr1").hide();
        $(".bod1").fadeIn();
      }, 600);
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
$('body').on('submit', '.save_modify', function (e) {
  e.preventDefault();
  var formData = new FormData($(this)[0]);
  var l = ladda__WEBPACK_IMPORTED_MODULE_17__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("uv_facturecab_set_info_ref", {
      id: factureId
    }),
    success: function success(result) {
      $("#MyModalRefModifier").find("#document_ref").val("");
      $("#MyModalRefModifier").find("#date_document").val("");
      $("#MyModalRefModifier").find("#date_valider").val("");
      $("#MyModalRefModifier").modal('hide');
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/functions/delete.js":
/*!***************************************!*\
  !*** ./assets/js/functions/delete.js ***!
  \***************************************/
/*! exports provided: deleteCab, deleteDemande */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCab", function() { return deleteCab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDemande", function() { return deleteDemande; });
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function deleteCab(obj) {
  // var id = $(this).attr('data-id');
  //  var token = $(this).attr('data-token');
  //console.log(id + ' ' + token);

  swalWithBootstrapButtons.fire({
    showClass: {
      popup: 'animatedSwal flipInX faster'
    },
    position: 'top',
    title: "Confirmation ?",
    text: "Voulez vous vraiment supprimer cet enregistrement ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        type: 'DELETE',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['route'], {
          'id': obj['id'],
          'token': obj['token']
        }),
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            if (obj['redirection'] == null) {
              window.location.reload();
            } else {
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['redirection']);
              window.location.href = url;
            }
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
}
function deleteDemande(obj) {
  // var id = $(this).attr('data-id');
  //  var token = $(this).attr('data-token');
  //console.log(id + ' ' + token);

  swalWithBootstrapButtons.fire({
    showClass: {
      popup: 'animatedSwal flipInX faster'
    },
    position: 'top',
    title: "Confirmation ?",
    text: "Voulez vous vraiment supprimer cet enregistrement ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        type: 'DELETE',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['route'], {
          'id': obj['id'],
          'token': obj['token']
        }),
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            if (obj['redirection'] == null) {
              window.location.reload();
            } else {
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['redirection']);
              window.location.href = url;
            }
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
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/module_vente/Vtfacturefrscab.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~Vtfacturefrscab",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfdmVudGUvVnRmYWN0dXJlZnJzY2FiLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mdW5jdGlvbnMvZGVsZXRlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsIlNob3dGb3JtRXJyb3JzIiwic2VsZWN0b3IiLCJmb3JtX25hbWUiLCJlcnJvcnMiLCJpZCIsImlzR3JvdXBlIiwiJCIsInJlbW92ZSIsImpRdWVyeSIsImVhY2giLCJ2aW9sYXRpb25zIiwiaSIsInZhbCIsImNvbHVtbk5hbWUiLCJ4IiwicHJvcGVydHlQYXRoIiwic2VhcmNoIiwic2VwYXJhdG9ycyIsImFyciIsInNwbGl0IiwiUmVnRXhwIiwiam9pbiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwicGFyZW50IiwiYXBwZW5kIiwidGl0bGUiLCJTaG93Rm9ybUVycm9yc1dpdGhQYXJhbSIsInRhYmxlIiwiRGF0YVRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwibG9jYXRpb24iLCJ0eXBlIiwiYmVmb3JlU2VuZCIsImhhc093blByb3BlcnR5Iiwic2V0dGluZ3MiLCJqcVhIUiIsImFib3J0IiwiZGVmZXJSZW5kZXIiLCJzZXJ2ZXJTaWRlIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJvcmRlciIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJuYW1lIiwidmlzaWJsZSIsImNsYXNzTmFtZSIsInNlYXJjaGFibGUiLCJ3aWR0aCIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwicmVuZGVyIiwidCIsImEiLCJsIiwicyIsImRhdGEiLCJmb3JFYWNoIiwiZWxlbWVudCIsImxpbmsiLCJfcm91dGVfbGluayIsInRpdHJlIiwiaWRDcyIsImljb24iLCJkb20iLCJidXR0b25zIiwidGV4dCIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwicmVsb2FkIiwiZXh0ZW5kIiwiZXhwb3J0T3B0aW9ucyIsInJvd3MiLCJmb3JtYXQiLCJib2R5Iiwicm93IiwiY29sdW1uIiwiaXNOdW1lcmljIiwicmVwbGFjZSIsImxhbmd1YWdlIiwicHJvY2Vzc2luZyIsIm9uIiwiYXBpIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJwcm9wIiwidG9nZ2xlIiwic2VsZWN0MiIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsImNoYW5nZSIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImRvY3VtZW50IiwicmVhZHkiLCJzdWNjZXNzIiwicmVzdWx0IiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiaHRtbCIsInRvZ2dsZUNsYXNzIiwiZXJyb3IiLCJ0b2FzdHIiLCJ0aW1lT3V0Iiwid2FybmluZyIsImR0YSIsIkZvcm1EYXRhIiwiYXR0ciIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJhZnRlciIsImNvZGUiLCJtZXNzYWdlIiwiZW1wdHkiLCJocmVmIiwib3BlbiIsImZpcmUiLCJzaG93Q2xhc3MiLCJwb3B1cCIsInBvc2l0aW9uIiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJ2YWx1ZSIsIkxhZGRhIiwicXVlcnlTZWxlY3RvciIsInN0YXJ0Iiwic3RvcCIsImhpZGUiLCJzaG93Iiwibm90IiwidG9rZW4iLCJvYmoiLCJyb3V0ZSIsInJlZGlyZWN0aW9uIiwiZGVsZXRlQ2FiIiwicmVzZXQiLCJ0cmFuc2l0aW9uIiwiaW5kZXhPZiIsIm1vZGFsIiwicGFyYW1zIiwiYXJncyIsInNldFRpbWVvdXQiLCJmYWRlSW4iLCJyZXNwb25zZUpTT04iLCJjbG9zZXN0IiwidGFibGVTaG93Iiwic2Nyb2xsWSIsInNjcm9sbENvbGxhcHNlIiwicGFnaW5nIiwiYXV0b1dpZHRoIiwiZm9vdGVyQ2FsbGJhY2siLCJlbmQiLCJkaXNwbGF5IiwidG90YWwiLCJwYWdlVG90YWwiLCJpbnRWYWwiLCJyZWR1Y2UiLCJiIiwicGFnZSIsImZvb3RlciIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJpcyIsIl9hcnJheV9pZHMiLCJwdXNoIiwiZHRhMiIsImFjdGlvbl90ZXN0IiwiZ2V0IiwiY3NzIiwiYWN0aXZlRWxlbWVudCIsImZhY3R1cmVJZCIsInJlZl9kb2MiLCJkYXRlX3JlZiIsImRhdGVfdmFsaWRlIiwiZm9ybURhdGEiLCJkZWxldGVEZW1hbmRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNkVBQXVDLENBQUM7QUFDMkM7QUFDMUdDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBQzlCLElBQU1JLElBQUksR0FBR0gsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1JLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFFTSxTQUFTQyxjQUFjLENBQUNDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQTJCO0VBQUEsSUFBMUJDLEVBQUUsdUVB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ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgalF1ZXJ5LmVhY2goZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgIGlmKGlzR3JvdXBlID09IHRydWUpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0geDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBpZiAoeC5zZWFyY2goJ1xcXFxbJykgIT0gLTEgJiYgeC5zZWFyY2goJ1xcXFxdJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHNlcGFyYXRvcnMgPSBbJ1xcXFxdJywgJ1xcXFxbJ107XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9ycy5qb2luKCd8JykpKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnZGF0YS4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4KVxyXG5cclxuLyp2w6lyaWZpZXIgcydpbCBzJ2FnaXQgZCd1bmUgZm9ybXVsYWlyZSBhdmVjIHVuIGNoYW1wIHR5cGUgZmlsZSAqL1xyXG4gICAgICAgIGlmICghalF1ZXJ5KFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBjb2x1bW5OYW1lICsgJ19maWxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWUpO1xyXG4gICAgICAgIGlmIChjb2x1bW5OYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpXHJcbiAgICAgICAgICAgIHNlbGVjdG9yLmZpbmQoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0oc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIrc2VsZWN0b3IpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9ycyArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanNcIjtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGVcIixcclxuICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSBcImxhZGRhXCI7XHJcblxyXG52YXIgdGFibGUgPSAkKFwiI2dyaWRcIikuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl90X2ZhY3R1cmVmcnNjYWJfbGlzdDJcIikgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgdHlwZTogXCJnZXRcIixcclxuICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGFibGUuaGFzT3duUHJvcGVydHkoJ3NldHRpbmdzJykpIHtcclxuICAgICAgICAgIHZhciBzZXR0aW5ncyA9IHRhYmxlLnNldHRpbmdzKCk7XHJcbiAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gIF0sXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogXCJmYWMuaWRcIiB9LFxyXG4gICAgeyB2aXNpYmxlOiB0cnVlLCBuYW1lOiBcImZhYy5jb2RlXCIgfSxcclxuICAgIHsgbmFtZTogXCJkYXRlZmFjdHVyZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwib2JzZXJ2YXRpb25cIiB9LFxyXG5cclxuICAgIHsgbmFtZTogXCJwYXJ0Lm5vbVwiIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICBuYW1lOiBcInJlZkRvY0Fzc29cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzTmFtZTogXCJtbnQtZm9ybWF0XCIsXHJcbiAgICAgIG5hbWU6IFwiZGV0LnByaXhIdFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgbmFtZTogXCJkZXQucHJpeFR2YVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgbmFtZTogXCJkZXQucHJpeFJlbWlzZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiBcImZhYy1iYWNrXCIsXHJcbiAgICAgIG5hbWU6IFwiZGV0LnByaXhUdGNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzTmFtZTogXCIgcmVnLWJhY2tcIixcclxuICAgICAgbmFtZTogXCJ0YWIubW9udGFudFJlZ2xlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICBuYW1lOiBcInRhYi5OYnJSZWdsZW1lbnRzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICBuYW1lOiBcIm5iRmFjdHVyZS5OYnJPcGVyYXRpb25zXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICBuYW1lOiBcImZhYy5wb3NpdGlvbl9hY3R1ZWxcIixcclxuICAgIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogZmFsc2UsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIC8vcHJpeEh0XHJcbiAgXSxcclxuICBjb2x1bW5EZWZzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICB0YXJnZXRzOiAxNSxcclxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiAodCwgYSwgbCwgcykge1xyXG4gICAgICAgIHZhciBkYXRhID0gXCJcIjtcclxuICAgICAgICB0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGxldCBsaW5rID0gXCJcIjtcclxuICAgICAgICAgIGlmIChlbGVtZW50Ll9yb3V0ZV9saW5rKSB7XHJcbiAgICAgICAgICAgIGxpbmsgPSBcImhyZWY9J1wiICsgZWxlbWVudC5fcm91dGVfbGluayArIFwiJ1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGF0YSA9XHJcbiAgICAgICAgICAgIGRhdGEgK1xyXG4gICAgICAgICAgICBcIjxsaT48YSBcIiArXHJcbiAgICAgICAgICAgIGxpbmsgK1xyXG4gICAgICAgICAgICBcIiAgZGF0YS10cmFuc2l0aW9uPSdcIiArXHJcbiAgICAgICAgICAgIGVsZW1lbnQubmFtZSArXHJcbiAgICAgICAgICAgIFwiJyBkYXRhLWlkPSdcIiArXHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgK1xyXG4gICAgICAgICAgICBcIicgZGF0YS10aXRsZT0nXCIgK1xyXG4gICAgICAgICAgICBlbGVtZW50LnRpdHJlICtcclxuICAgICAgICAgICAgXCInIGNsYXNzPSdkcm9wZG93bi1pdGVtICBcIiArXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3MgK1xyXG4gICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWRDcyArXHJcbiAgICAgICAgICAgIFwiJyA+PGkgY2xhc3M9J2ZhIFwiICtcclxuICAgICAgICAgICAgZWxlbWVudC5pY29uICtcclxuICAgICAgICAgICAgXCInID48L2k+IFwiICtcclxuICAgICAgICAgICAgZWxlbWVudC50aXRyZSArXHJcbiAgICAgICAgICAgIFwiPC9hPjwvbGk+XCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAnXFx0PGRpdiBjbGFzcz1cImRyb3Bkb3duIGRyb3Bkb3duLWlubGluZSBjZW50ZXJcIj4gXFx0IDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIlwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj4gXFx0IDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj4gXFx0ICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIiBjbGFzcz1cInN2Zy1jb2xvclwiPiA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPiA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIvPiA8Y2lyY2xlIGZpbGw9XCIjMDAwMDAwXCIgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIyXCIvPiA8Y2lyY2xlIGZpbGw9XCIjMDAwMDAwXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMlwiLz4gPGNpcmNsZSBmaWxsPVwiIzAwMDAwMFwiIGN4PVwiMTlcIiBjeT1cIjEyXCIgcj1cIjJcIi8+IDwvZz48L3N2Zz4gXFx0IDwvc3Bhbj4gXFx0IDwvYT4gPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1zbSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+IFxcdCA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51IHNob3cgZHJwLWxpc3RcIiB4LXBsYWNlbWVudD1cImJvdHRvbS1zdGFydFwiPiA8bGkgY2xhc3M9XCJuYXZpLWhlYWRlciBmb250LXdlaWdodC1ib2xkZXIgdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLXhzIHRleHQtcHJpbWFyeSBwYi0yXCI+Q2hvaXNpciBvcGVyYXRpb24gOjwvbGk+JyArXHJcbiAgICAgICAgICBkYXRhICtcclxuICAgICAgICAgIFwiIDwvdWw+IDwvZGl2PiBcXHQ8L2Rpdj5cXHRcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgZG9tOiAnPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiZj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgIGNvbHVtbnM6IFwiOnZpc2libGVcIixcclxuICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICBib2R5OiBmdW5jdGlvbiAoZGF0YSwgcm93LCBjb2x1bW4sIG5vZGUpIHtcclxuICAgICAgICAgICAgZGF0YSA9ICQoXCI8cD5cIiArIGRhdGEgKyBcIjwvcD5cIikudGV4dCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gJC5pc051bWVyaWMoZGF0YS5yZXBsYWNlKFwiLFwiLCBcIi5cIikpXHJcbiAgICAgICAgICAgICAgPyBkYXRhLnJlcGxhY2UoXCIsXCIsIFwiLlwiKVxyXG4gICAgICAgICAgICAgIDogZGF0YTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgLy9maXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhzdCk7XHJcbiAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gIC8vICAgICQuZWFjaChzdC5jb2x1bW5zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gIC8vICAgICAgICBpZiAodmFsdWUuc2VhcmNoLnNlYXJjaCAhPSBcIlwiKSB7XHJcbiAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAvLyAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAvLyAgICAgICAgfVxyXG4gIC8vICAgIH0pO1xyXG4gIC8vfVxyXG5cclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChcclxuICAgIGFwaSxcclxuICAgIFtdLFxyXG4gICAgW11cclxuICApO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgW10sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgW10sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcbi8qY29sdW1uIDEgZGUgZGF0YXRibGUgc2VhcmNoKi9cclxuXHJcbiQoXCIucmVtb3ZlLWZpbHRlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoXCIuYWN0aW9uX2hlYWRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCk7XHJcbiAgJChcIi5hY3Rpb24gLC5hY3Rpb25faGVhZFwiKS5wcm9wKFwiY2hlY2tlZFwiLCAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbn0pO1xyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFjdGlvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG59KTtcclxuXHJcbi8qICAkKCcjZ3JpZCcpLm9uKCdjbGljaycsICcuc3RhdHV0X29wJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgdmFyIG5hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ3JvbCcpOyAqL1xyXG4vL2FsZXJ0KG5hbWUrXCJcIitpZCk7XHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzNcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQWN0aW9uXCIsXHJcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcclxufSk7XHJcblxyXG4kKFwiLmxpc3RfYWN0aW9uc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHt9KTtcclxuJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YWJsZS4kKFwidHIuc2VsZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIC8vYWxlcnQoMSlcclxuICAvKiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgXHJcbiAgICAgICAgICAkKCcjZ3JpZCcpLnNob3coNTAwKTtcclxuICAgICAgfSk7Ki9cclxuICAvLyBjb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcyEhIScpO1xyXG4gICQoXCIjX3N0YXR1dFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9mYWN0dXJlY2FiX3N0YXR1dFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuYWN0aW9uc1wiKS5vbihcImNsaWNrXCIsIFwiLmNsb3NlLW1lXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyQoJy5jbG9zZS1tZScpLmNsaWNrKGZ1bmN0aW9uIChlKXtcclxuICAgICQoXCIuYWN0aW9uc1wiKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuICAkKFwiLmFjdGlvbnNcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV9zdGF0dXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWNhYl9zdGF0dXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2codGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAkKFwiLmZvcm1fc3RhdHV0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICB2YWwudGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG4gICQoXCIjX2RlbWFuZGVcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWNhYl9QYWllbWVudFwiLCB7IGlkOiBpZCB9KTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgJChcIiNfc2hvd1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gYWxlcnQoMTEpO1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9mYWN0dXJlY2FiX2NvbnN1bHRlXCIsIHsgaWQ6IGlkIH0pO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICBcIndhcm5pbmdcIixcclxuICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI19pbXByaW1lclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcImZhY3R1cmVJZFwiKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInBkZl9zaG93X3V2X2ZhY3R1cmVjYWJcIiwgeyBpZDogaWQgfSk7XHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjX2FyY2hpdmVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL3ZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiZmFjdHVyZUlkXCIpO1xyXG4gICAgLy8gYWxlcnQoaWQpO1xyXG5cclxuICAgIC8vICAgIHZhciBpZCA9ICQoXCJpbnB1dFtuYW1lPV9pZF1cIikudmFsKCk7XHJcbiAgICAvLyAgICB2YXIgdG9rZW4gPSAkKFwiaW5wdXRbbmFtZT1fdG9rZW5dXCIpLnZhbCgpO1xyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgIC5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGFyY2hpdmVyIGNldHRlIEZhY3R1cmUgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIGFyY2hpdmVyIVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWNhYl9hcmNoaXZlclwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PSBcInN1Y2NlZXNcIikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0b3IucGFyZW50KCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQuZGF0YSA9IFwiZXJyb3JcIikpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvL3N3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLmVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG4gICQoXCIjX2NvbmRpdGlvblwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiZmFjdHVyZUlkXCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWNhYl9jb25kaXRpb25cIiwgeyBpZDogaWQgfSk7XHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIubmV3XCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm0yXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyBhbGVydCgxKTtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIilbMF07XHJcbiAgICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcImZhY3R1cmVJZFwiKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuXHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2codGVzdCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAvLyAgYWxlcnQoaWQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2ZhY3R1cmVjYWJfY29uZGl0aW9uX2luc2VydFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgZGF0YTogZHRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgICQoXCIuXCIgKyBzZWxlY3RvciArIFwiICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICAgIHZhbC50aXRsZSArXHJcbiAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC13YXJuaW5nJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyAkKFwiLmZvcm1cIilbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgdGJvZHlcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIi5uZXctYXJ0aWNsZS1idG5cIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLm5vdChcIjpsYXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAvLyAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3V2X2ZhY3R1cmVjYWJfY29uZGl0aW9uJywgeyAnaWQnOiBpZCB9KTtcclxuICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgLy8gd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgIC8vICAgICQoJy5tZXNzYWdlLXN1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPsOXPC9idXR0b24+PHN0cm9uZz5cIiArIHJlc3VsdC5tZXNzYWdlLnRpdGxlICsgXCI8L3N0cm9uZz4gXCIgKyByZXN1bHQubWVzc2FnZS50ZXh0ICsgXCI8L3N0cm9uZz4uPC9kaXY+XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgJChcIi5uZXdcIikub24oXCJjbGlja1wiLCBcIi5kZWxldGVfZWxlbWVudFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YVwiKTtcclxuICAgIC8vICBhbGVydChpZCk7XHJcblxyXG4gICAgLy8gICAgdmFyIGlkID0gJChcImlucHV0W25hbWU9X2lkXVwiKS52YWwoKTtcclxuICAgIC8vICAgIHZhciB0b2tlbiA9ICQoXCJpbnB1dFtuYW1lPV90b2tlbl1cIikudmFsKCk7XHJcblxyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgIC5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgLy8gIHZhciBkdGE9MTtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2ZhY3R1cmVjYWJfY29uZGl0aW9uX2RlbGV0ZVwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgLy8gIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhID09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2FsKHJlc3VsdC5tZXNzYWdlLnRpdGxlLCByZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS5zdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UuZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjX2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcblxyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgcm91dGU6IFwidXZfZmFjdHVyZWNhYl9kZWxldGVcIixcclxuICAgICAgcmVkaXJlY3Rpb246IFwidXZfZmFjdHVyZWNhYl9pbmRleFwiLFxyXG4gICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgIGlkOiBpZCxcclxuICAgIH07XHJcbiAgICAvLyBhbGVydCgpO1xyXG4gICAgZGVsZXRlQ2FiKG9iaik7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLm5ld1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyB2YXIgZCA9Um91dGluZy5nZW5lcmF0ZSgndXZfZmFjdHVyZWNhYl9pbnNlcnQnLCB7ICdpZCc6IGlkIH0pO1xyXG4gICAgLy9hbGVydChkKTtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcblxyXG4gICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJmYWN0dXJlSWRcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2ZhY3R1cmVjYWJfaW5zZXJ0XCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICBkYXRhOiBkdGEsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC13YXJuaW5nJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICQoXCIuZm9ybVwiKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCB0Ym9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLm5ldy1hcnRpY2xlLWJ0blwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHkgdHJcIikubm90KFwiOmxhc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIC8vICAgICQoJy5tZXNzYWdlLXN1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPsOXPC9idXR0b24+PHN0cm9uZz5cIiArIHJlc3VsdC5tZXNzYWdlLnRpdGxlICsgXCI8L3N0cm9uZz4gXCIgKyByZXN1bHQubWVzc2FnZS50ZXh0ICsgXCI8L3N0cm9uZz4uPC9kaXY+XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIudXZfZmFjdHVyZWNhYl9hcHBseV90cmFuc2l0aW9uc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cihcImRhdGEtdGl0bGVcIik7XHJcbiAgICB2YXIgdHJhbnNpdGlvbiA9ICQodGhpcykuYXR0cihcImRhdGEtdHJhbnNpdGlvblwiKTtcclxuXHJcbiAgICBkdGEuYXBwZW5kKFwiaWRcIiwgaWQpO1xyXG4gICAgZHRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcclxuICAgIGR0YS5hcHBlbmQoXCJ0cmFuc2l0aW9uXCIsIHRyYW5zaXRpb24pO1xyXG4gICAgaWYgKHRyYW5zaXRpb24gPT0gXCJhcHJlc192YWxpZGVyX2dlbmVyZXJcIikge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2ZhY3R1cmVmcnNjYWJfZ2VuZXJlclwiLCB7XHJcbiAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAkKFwiLnBhcnZlbnVlXCIpLnNlbGVjdDIoKTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICQoXCIucGFydmVudWVcIikuc2VsZWN0MihcImRhdGFcIikgJiZcclxuICAgICAgICAgICAgJChcIi5wYXJ2ZW51ZVwiKS5zZWxlY3QyKFwiZGF0YVwiKVswXS50ZXh0LmluZGV4T2YoXCJub24gcGFydmVudWVcIikgIT09XHJcbiAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFwiLmRhdGVEb2MsLnJlZkRvY1wiKS5oaWRlKCkucmVtb3ZlQ2xhc3MoXCJjbGFzc1Nob3dcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiLmRhdGVEb2MsLnJlZkRvY1wiKS5zaG93KCkuYWRkQ2xhc3MoXCJjbGFzc1Nob3dcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJChcIiNNeU1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICQoXCIucGFydmVudWVcIikub24oXCJzZWxlY3QyOnNlbGVjdGluZ1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvLyBhbGVydCgpO1xyXG4gICAgICAgICAgICBpZiAoZS5wYXJhbXMuYXJncy5kYXRhLnRleHQuaW5kZXhPZihcIm5vbiBwYXJ2ZW51ZVwiKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAkKFwiLmRhdGVEb2MsLnJlZkRvY1wiKS5oaWRlKCkucmVtb3ZlQ2xhc3MoXCJjbGFzc1Nob3dcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgJChcIi5kYXRlRG9jLC5yZWZEb2NcIikuc2hvdygpLmFkZENsYXNzKFwiY2xhc3NTaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgICAgXCJWb3VsZXogdm91cyB2cmFpbWVudCBwYXNzZXIgYSBsJ2V0YXQgJ1wiICtcclxuICAgICAgICAgICAgICB0aXRsZSArXHJcbiAgICAgICAgICAgICAgXCInIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSAhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWNhYl9hcHBseV90cmFuc2l0aW9uc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC52YWxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvKnZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWNhYl9QYWllbWVudFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5pZCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsOyovXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJGYWN0dXJlIG5vbiByZW5zZWlnbmUgXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKFwiI2dyaWQgdGJvZHlcIikub24oXCJjbGlja1wiLCBcIi5jZF9vcFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9mYWN0dXJlY2FiX3Nob3dcIiwge1xyXG4gICAgaWQ6ICQodGhpcykuY2xvc2VzdChcInRyXCIpLmF0dHIoXCJpZFwiKSxcclxuICB9KTtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufSk7XHJcblxyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvd1wiKS5EYXRhVGFibGUoe1xyXG4gIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICBwYWdpbmc6IGZhbHNlLFxyXG4gIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjEwJVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjM1JVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjIwJVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICBdLFxyXG4gIGZvb3RlckNhbGxiYWNrOiBmdW5jdGlvbiAocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgZGF0YTtcclxuICAgIHZhciB0b3RhbCwgcGFnZVRvdGFsO1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgdmFyIGludFZhbCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8gaS5yZXBsYWNlKC9bXFwkLF0vZywgXCJcIikgKiAxXHJcbiAgICAgICAgOiB0eXBlb2YgaSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gaVxyXG4gICAgICAgIDogMDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVG90YWwgb3ZlciBhbGwgcGFnZXNcclxuICAgIHRvdGFsID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNylcclxuICAgICAgLmRhdGEoKVxyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgLy8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuICAgIHBhZ2VUb3RhbCA9IGFwaVxyXG4gICAgICAuY29sdW1uKDcsIHsgcGFnZTogXCJjdXJyZW50XCIgfSlcclxuICAgICAgLmRhdGEoKVxyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGZvb3RlclxyXG4gICAgJChhcGkuY29sdW1uKDEpLmZvb3RlcigpKS5odG1sKFxyXG4gICAgICBcIlRvdGFsIDogXCIgKyAoTWF0aC5yb3VuZChwYWdlVG90YWwgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpXHJcbiAgICApO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxudmFyIHRhYmxlU2hvdyA9ICQoXCIjZGF0YXRhYmxlLXNob3cyXCIpLkRhdGFUYWJsZSh7XHJcbiAgc2Nyb2xsWTogXCIyMDBweFwiLFxyXG4gIHNjcm9sbENvbGxhcHNlOiB0cnVlLFxyXG4gIHBhZ2luZzogZmFsc2UsXHJcbiAgYXV0b1dpZHRoOiBmYWxzZSxcclxuICBmb290ZXJDYWxsYmFjazogZnVuY3Rpb24gKHJvdywgZGF0YSwgc3RhcnQsIGVuZCwgZGlzcGxheSkge1xyXG4gICAgdmFyIGFwaSA9IHRoaXMuYXBpKCksXHJcbiAgICAgIGRhdGE7XHJcbiAgICB2YXIgdG90YWwsIHBhZ2VUb3RhbDtcclxuICAgIC8vIFJlbW92ZSB0aGUgZm9ybWF0dGluZyB0byBnZXQgaW50ZWdlciBkYXRhIGZvciBzdW1tYXRpb25cclxuICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGkgPT09IFwic3RyaW5nXCJcclxuICAgICAgICA/IGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMVxyXG4gICAgICAgIDogdHlwZW9mIGkgPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IGlcclxuICAgICAgICA6IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRvdGFsIG92ZXIgYWxsIHBhZ2VzXHJcbiAgICB0b3RhbCA9IGFwaVxyXG4gICAgICAuY29sdW1uKDMpXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG5cclxuICAgIC8vIFRvdGFsIG92ZXIgdGhpcyBwYWdlXHJcbiAgICBwYWdlVG90YWwgPSBhcGlcclxuICAgICAgLmNvbHVtbigzLCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBmb290ZXJcclxuICAgICQoYXBpLmNvbHVtbig4KS5mb290ZXIoKSkuaHRtbChcclxuICAgICAgXCJUb3RhbCA6IFwiICsgKE1hdGgucm91bmQocGFnZVRvdGFsICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKVxyXG4gICAgKTtcclxuICB9LFxyXG59KTtcclxuXHJcbiQoXCIucGFpZW1lbnRcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSAyKSB7XHJcbiAgICAkKFwiLmJsb2NfY2hlcXVlXCIpLnNob3coKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJChcIiN1bml2X3RfcmVnbGVtZW50X2RhdGVFY2hlYW5jZVwiKS52YWwobnVsbCk7XHJcbiAgICAkKFwiI3VuaXZfdF9yZWdsZW1lbnRfcmVmZXJlbmNlXCIpLnZhbChudWxsKTtcclxuICAgICQoXCIuYmxvY19jaGVxdWVcIikuaGlkZSgpO1xyXG4gIH1cclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSAxIHx8ICQodGhpcykudmFsKCkgPT0gNCkge1xyXG4gICAgJChcIi5ibG9jX2JhbnF1ZVwiKS5oaWRlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoXCIuYmxvY19iYW5xdWVcIikuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSk7XHJcbn0pO1xyXG5cclxuJChcIi5keW5hbWlxdWVfZG9jdW1lbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyBjb25zb2xlLmxvZyggJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xyXG4gIC8vYWxlcnQoJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9mYWN0dXJlX2RvY3VtZW50X2R5bmFtaXF1ZV9mb3JtXCIsIHtcclxuICAgICAgaWQ6ICQodGhpcykuYXR0cihcImRhdGEtaWRcIiksXHJcbiAgICB9KSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNmb3JtX2VudGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy9jb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdHlwZScpKTtcclxuICAvL2FsZXJ0KCk7XHJcbiAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgJChcIi5kb3NzaWVyXCIpLnNob3coKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJChcIi5kb3NzaWVyXCIpLmhpZGUoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiwgXCIuX211bHRpcGxlX2FjdGlvbnNcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uXTpjaGVja2VkXCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgfSk7XHJcblxyXG4gIGlmICgkKHRoaXMpLnZhbCgpID09IFwiX2Rlc2FjdGl2ZXJfZmFjdHVyZVwiICYmIF9hcnJheV9pZHMgIT0gbnVsbCkge1xyXG4gICAgLy8gYWxlcnQoKTtcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBkZXNhY3RpdmVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYXJjaGl2ZSc+PC9pPiBPdWksIERlc2FjdGl2ZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZV9kZXNhY3RpdmVyXCIpLFxyXG4gICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5fbXVsdGlwbGVfYWN0aW9uc1wiKS52YWwoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5zYXZlX2ZhY3R1cmVfZ2VuZXJlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gXHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG5cclxuICB2YXIgZHRhMiA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIHZhciBpZCA9ICQoJyNpZCcpLmF0dHIoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gXCJcIjsgXHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBcImFwcmVzX3ZhbGlkZXJfZ2VuZXJlclwiO1xyXG5cclxuICAgICAgICBkdGEyLmFwcGVuZChcImlkXCIsIGlkKTtcclxuICAgICAgICBkdGEyLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcclxuICAgICAgICBkdGEyLmFwcGVuZChcInRyYW5zaXRpb25cIiwgdHJhbnNpdGlvbik7XHJcbiAgLy92YXIgaWQgPSAkKCcjdGVzdCcpLmRhdGEoXCJmYWN0dXJlSWRcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG5cclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gLy9hbGVydCgkKCcjaWQnKS5hdHRyKCd2YWx1ZScpKTtcclxuICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWZyc2NhYl9nZW5lcmVyXCIse2lkOiQoJyNpZCcpLmF0dHIoJ3ZhbHVlJyl9KSxcclxuICAgICAgZGF0YTogZHRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgLy8kKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoXCIubmV3XCIpLm9mZnNldCgpLnRvcH0sIDUwMCk7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZHRhMixcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2ZhY3R1cmVjYWJfYXBwbHlfdHJhbnNpdGlvbnNcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX1BhaWVtZW50XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZU91dDogNDAwMH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuX2RlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIFxyXG4gIFxyXG4gIC8vYWxlcnQoKTtcclxuXHJcbiAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG5cclxuICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2ZhY3R1cmVjYWJfZGVsZXRlX211bHRpcGxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZ3JpZCcpLkRhdGFUYWJsZSgpLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLl9kZXNhY3RpdmVyX2ZhY3R1cmVcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcblxyXG4gIC8vYWxlcnQoKTtcclxuXHJcbiAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG5cclxuICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZGVzYWN0aXZlciBjZXR0ZSBmYWN0dXJlID9cIixcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWJhbic+PC9pPiBPdWksIERlc2FjdGl2ZXIhXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2ZhY3R1cmVfZGVzYWN0aXZlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVPdXQ6IDQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4gICQoXCIjX2Rlc2FjdGl2ZXJfZmFjdHVyZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cclxuICAvL2FsZXJ0KCk7XHJcblxyXG4gIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuXHJcbiAgaWYgKF9hcnJheV9pZHMpIHtcclxuXHJcblxyXG4gICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGRlc2FjdGl2ZXIgY2V0dGUgZmFjdHVyZSA/XCIsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1iYW4nPjwvaT4gT3VpLCBEZXNhY3RpdmVyIVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9mYWN0dXJlX2Rlc2FjdGl2ZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcucGRmX2J5X2NvZGUnLGZ1bmN0aW9uKGUpe1xyXG4gIHdpbmRvdy5vcGVuKFJvdXRpbmcuZ2VuZXJhdGUoXCJwZGZfc2hvd191dl9mYWN0dXJlY2FiX29sZF9zeXNcIiwge1xyXG4gICAgICBpZDogJCh0aGlzKS5hdHRyKCdkYXRhLWlkJylcclxuICB9KSwgJ19ibGFuaycpO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJChcIiNnZW5lcmVyXCIpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG4gIC8vJChcImZvcm1cIikuc3VibWl0KCk7XHJcbiAgaWYgKCQodGhpcykudmFsKCkgPT0gMykge1xyXG5cclxuICAgICAgdmFyIGZvcm1fbmFtZSA9ICQoJyNhY3Rpb25fdGVzdCcpLmF0dHIoJ25hbWUnKTtcclxuICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YShhY3Rpb25fdGVzdCk7XHJcbiAgICAgIC8vdmFyIGR0YSA9ICQoJyNhY3Rpb25fdGVzdCcpLnNlcmlhbGl6ZSgpO1xyXG4gICAgICAvLyBhbGVydChkdGEpO1xyXG4gICAgICB2YXIgdCA9IGR0YS5nZXQoXCJfYWN0aW9uW11cIik7XHJcbiAgICAgIC8vIGFsZXJ0KCB0KTtcclxuICAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcbiAgICAgIC8vIHZhciB0PTE7XHJcbiAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3Z0X2ZhY3R1cmVfZ2VuZXJlcl9tdWx0aXBsZScpLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8vICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgLy8gdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZF92YWxpZGVyXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVZhbGlkZXJcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwcl92YWxpZGVyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZF92YWxpZGVyXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI2dlbmVyZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI2FsbGFjdGlvbnNcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG59KTtcclxuJChcIiNfYW5udWxlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgLmZpcmUoe1xyXG4gICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBhbm51bGVyIGNldHRlIGZhY3R1cmUgP1wiLFxyXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpIVwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObyAhXCIsXHJcbiAgfSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWNhYl9hbm51bGVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1dl9mYWN0dXJlY2FiX2luZGV4Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZU91dDogNDAwMH1cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgXHJcblxyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcucHJvZm9ybWFfdmFsaWRlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gICAgYWxlcnQoKTtcclxuICAgICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgICAgbC5zdGFydCgpO1xyXG4gICAgICBcclxuICAgICAgJC5hamF4KHsgXHJcbiAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3Z0X2ZhY3R1cmVfZ2VuZXJlcl9tdWx0aXBsZScpLFxyXG4gICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcuaW1wcmltZV9kb2N1bWVudCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKCQodGhpcykuYXR0cihcImRhdGEtdmFsaWRlXCIpID09IDApICB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoJ2ltcG9zc2libGUgZFxcJ2ltcHJpbWVyIGxlIGRvY3VtZW50LCBtYW5xdWUgZGUgc2lnbmF0dXJlIScsICdFcnJldXInLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbigkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgJ19ibGFuaycpO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgZmFjdHVyZUlkO1xyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5tb2RpZmllcl9yZWYnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmYWN0dXJlSWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2ZhY3R1cmVjYWJfaW5mb19yZWZcIiwgeyBpZDogZmFjdHVyZUlkIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5maW5kKFwiI2RvY3VtZW50X3JlZlwiKS52YWwocmVzdWx0LnJlZl9kb2MpXHJcbiAgICAgICAgICAgICQoXCIjTXlNb2RhbFJlZk1vZGlmaWVyXCIpLmZpbmQoXCIjZGF0ZV9kb2N1bWVudFwiKS52YWwocmVzdWx0LmRhdGVfcmVmKVxyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5maW5kKFwiI2RhdGVfdmFsaWRlclwiKS52YWwocmVzdWx0LmRhdGVfdmFsaWRlKVxyXG5cclxuICAgICAgICAgICAgJChcIiNNeU1vZGFsUmVmTW9kaWZpZXJcIikubW9kYWwoJ3Nob3cnKVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc3ByMVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZDFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnNhdmVfbW9kaWZ5JywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfZmFjdHVyZWNhYl9zZXRfaW5mb19yZWZcIiwgeyBpZDogZmFjdHVyZUlkIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5maW5kKFwiI2RvY3VtZW50X3JlZlwiKS52YWwoXCJcIilcclxuICAgICAgICAgICAgJChcIiNNeU1vZGFsUmVmTW9kaWZpZXJcIikuZmluZChcIiNkYXRlX2RvY3VtZW50XCIpLnZhbChcIlwiKVxyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5maW5kKFwiI2RhdGVfdmFsaWRlclwiKS52YWwoXCJcIilcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5tb2RhbCgnaGlkZScpXHJcblxyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGRlbGV0ZUNhYihvYmopIHtcclxuXHJcbiAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gIC8vICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgIC8vY29uc29sZS5sb2coaWQgKyAnICcgKyB0b2tlbik7XHJcbiAgICBcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqWydyZWRpcmVjdGlvbiddPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JlZGlyZWN0aW9uJ10pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGRlbGV0ZURlbWFuZGUob2JqKSB7XHJcblxyXG4gICAgLy8gdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgIC8vICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgIFxyXG4gICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgfSxcclxuICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKG9ialsncm91dGUnXSwgeydpZCc6IG9ialsnaWQnXSwgJ3Rva2VuJzogb2JqWyd0b2tlbiddfSksXHJcbiAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqWydyZWRpcmVjdGlvbiddPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JlZGlyZWN0aW9uJ10pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgIH0pO1xyXG4gfVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==