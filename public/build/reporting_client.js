(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporting_client"],{

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

/***/ "./assets/js/components/module_vente/reporting.js":
/*!********************************************************!*\
  !*** ./assets/js/components/module_vente/reporting.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");








var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.setRoutingData(routes);

//ShowFormErrorsWithParam

$("body").on("submit", ".tele-frs", function (e) {
  //alert($(".sele-frs").val())

  if ($(".sele-frs").val() != "") {
    window.location.href = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("report_by_fournisseur_all", {
      frs: $(".sele-frs").val()
    });
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("report_by_fournisseur_all", {
        frs: $(".sele-frs").val()
      }),
      success: function success(result) {}
    });
  } else {
    toastr.warning("Veuillez renseigner un client", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$(".select2_demo_9").select2({
  placeholder: "Choix marche",
  allowClear: false
});
$(".select2_demo_3").select2({
  placeholder: "Choix projet",
  allowClear: true
});
$(".select2_demo_4").select2({
  placeholder: "Choix dossier",
  allowClear: true
});
$(".select2_demo_6").select2({
  placeholder: "Choix sous projet",
  allowClear: true
});
$(".select2_demo_5").select2({
  placeholder: "Choix Type",
  allowClear: true
});
$(".select2_demo_7").select2({
  placeholder: "Choix Client",
  allowClear: true
});
$(".select2_demo_8").select2({
  placeholder: "Choix Documents",
  allowClear: true
});
function getSubSelect(myclass, myboolean, mycontent) {
  //console.log(mycontent)
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
$("body").on("change", "#form_type", function () {
  //alert($(this).val())
  if ($(this).val() == "projet") {
    $(".projet").fadeIn();
    $(".souMarche").hide();
    $(".marche").hide();
    $(".sel2").val("").trigger("change");
  }
  if ($(this).val() == "marche") {
    //alert()
    $(".select2_demo_3").val("").trigger("change");
    $(".projet").hide();
    $(".souMarche").fadeIn();
    $(".marche").fadeIn();
  } else {
    $(".select2_demo_3").val("").trigger("change");
    $(".select2_demo_4").val("").trigger("change");
    $(".select2_demo_5").val("").trigger("change");
    $(".souMarche").hide();
    $(".marche").hide();
    $(".projet").hide();
    $(".sel2").val("").trigger("change");
  }
});
$("body").on("change", "#form_type2", function () {
  //alert($(this).val())
  if ($(this).val() == "projet") {
    $(".projet").fadeIn();
    $(".souMarche").hide();
    $(".marche").hide();
    $(".sel2").val("").trigger("change");
  }
  if ($(this).val() == "marche") {
    //alert()
    $(".select2_demo_3").val("").trigger("change");
    $(".projet").hide();
    $(".souMarche").fadeIn();
    $(".marche").fadeIn();
  }
  if ($(this).val() == "") {
    $(".sel2").val("").trigger("change");
    $(".souMarche").hide();
    $(".marche").hide();
    $(".projet").hide();
  }
});
$("body").on("click", ".search", function (e) {
  // alert()reporting_projet_data
  //alert($(".select2_demo_3").val());
  table.ajax.url(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_projet_data", {
    id_projet: $(".select2_demo_3").val(),
    id_sous_projet: $(".select2_demo_6").val(),
    id_dossier: $(".select2_demo_4").val(),
    id_marche: $(".marches").val(),
    id_sousmarche: $(".sousmarche").val()
  })).load();
  e.preventDefault();
});
$("body").on("click", ".search3", function (e) {
  // alert()reporting_projet_data
  /*$.each($(this).find(":selected"), function (i, item) { 
    totAmt += $(item).data("price");
  });*/
  var clt = [];
  $.each($('.select2_demo_7').find(":selected"), function (i, item) {
    //console.log(item)
    clt.push([$(item).attr('value'), $(item).attr('societe')]);
  });
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_vente", {
      document: $(".select2_demo_8").val(),
      client: clt,
      dossier: $(".select2_demo_4").val(),
      ajax: 1
    }),
    success: function success(result) {
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_10__["ShowFormErrorsWithParam"])("form_lien", null, result.errors);
      } else {
        window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_vente", {
          projet: $(".select2_demo_3").val(),
          sousProjet: $(".select2_demo_6").val(),
          dossier: $(".select2_demo_4").val(),
          marche: $(".marches").val(),
          sousMarche: $(".sousmarche").val(),
          client: clt,
          document: $(".select2_demo_8").val(),
          documentParent: $(".select2_demo_8 :selected").parent().attr('type'),
          dateDebut: $(".dateDebut").val(),
          dateFin: $(".dateFin").val()
        }));
      }
    }
  });
  e.preventDefault();
});
$("body").on("click", ".search2", function (e) {
  // alert()reporting_projet_data

  table2.ajax.url(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_reference_data", {
    id_projet: $(".select2_demo_3").val(),
    id_sous_projet: $(".select2_demo_6").val(),
    id_dossier: $(".select2_demo_4").val(),
    id_marche: $(".marches").val(),
    id_sousmarche: $(".sousmarche").val()
  })).load();
  e.preventDefault();
});
$("body").on("click", ".rsearch", function (e) {
  //alert();
  //$("#form_annee").val(1).trigger('change.select2');
  //$('#form_annee option:eq(0)').prop('selected',true);
  //$('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');

  $(".select2_demo_3").val("").trigger("change");
  $(".select2_demo_4").val("").trigger("change");
  $(".select2_demo_5").val("").trigger("change");
  $(".souMarche").hide();
  $(".marche").hide();
  $(".projet").hide();
  $(".sel2").val("").trigger("change");
  table.ajax.url(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_projet_data")).load();
});
$("body").on("click", ".rsearch2", function (e) {
  //alert();
  //$("#form_annee").val(1).trigger('change.select2');
  //$('#form_annee option:eq(0)').prop('selected',true);
  //$('#form_annee').val($('#form_annee option:first-child').val()).trigger('change');

  $(".select2_demo_3").val("").trigger("change");
  $(".select2_demo_4").val("").trigger("change");
  $(".select2_demo_5").val("").trigger("change");
  $(".souMarche").hide();
  $(".marche").hide();
  $(".projet").hide();
  $(".sel2").val("").trigger("change");
  table2.ajax.url(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_reference_data")).load();
});
var table = $("#datatable-show").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_projet_data") + location.search,
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "3%",
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: "5%"
  }, {
    orderable: true,
    width: "5%"
  }, {
    orderable: true,
    width: "5%"
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true,
    visible: false,
    targets: 12
  }, {
    orderable: true,
    visible: false,
    targets: 13
  }, {
    orderable: true,
    visible: false,
    targets: 14
  }, {
    width: "5%",
    orderable: true /*className: "colonne-gras"*/,
    visible: false,
    targets: 15
  }, {
    width: "5%",
    orderable: true /*className: "colonne-gras"*/,
    visible: false,
    targets: 16
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
  }, {
    extend: "excel",
    exportOptions: {
      columns: ":visible",
      rows: ":visible"
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("datatables_langue"),
    processing: true
  },
  fixedHeader: true,
  footerCallback: function footerCallback(row, data, start, end, display) {
    $(".center-class").remove();
    var api = this.api(),
      data;

    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
    };
    var total4 = api.column(6, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);
    $(api.column(6).footer()).append('<center class="center-class">Total : ' + total4.toFixed(2) + "</center>");
    var total5 = api.column(7, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);
    $(api.column(7).footer()).append('<center class="center-class">Total : ' + total5.toFixed(2) + "</center>");
    var total6 = api.column(8, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);
    $(api.column(8).footer()).append('<center class="center-class">Total : ' + total6.toFixed(2) + "</center>");
    var total7 = api.column(9, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);
    $(api.column(9).footer()).append('<center class="center-class">Total : ' + total7.toFixed(2) + "</center>");
  }
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchText"](api, [0, 6, 7, 8, 9, 10, 11], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchDate"](api, [3, 5], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchSelect"](api, [12, 13, 14, 15, 16, 1, 2, 4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchCheckbox"](api, [], []);
  var intVal = function intVal(i) {
    return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
  };
  $(".center-class").remove();
  var total4 = api.column(6).data().reduce(function (a, b) {
    return intVal(a) + intVal(b);
  }, 0);
  $(api.column(6, {
    page: "current"
  }).footer()).append('<center class="center-class">Total : ' + total4.toFixed(2) + "</center>");
  var total5 = api.column(7, {
    page: "current"
  }).data().reduce(function (a, b) {
    return intVal(a) + intVal(b);
  }, 0);
  $(api.column(7).footer()).append('<center class="center-class">Total : ' + total5.toFixed(2) + "</center>");
  var total6 = api.column(8, {
    page: "current"
  }).data().reduce(function (a, b) {
    return intVal(a) + intVal(b);
  }, 0);
  $(api.column(8).footer()).append('<center class="center-class">Total : ' + total6.toFixed(2) + "</center>");
  var total7 = api.column(9, {
    page: "current"
  }).data().reduce(function (a, b) {
    return intVal(a) + intVal(b);
  }, 0);
  $(api.column(9).footer()).append('<center class="center-class">Total : ' + total7.toFixed(2) + "</center>");
});
var table2 = $("#datatable-show2").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_reference_data") + location.search,
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "3%",
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: "5%"
  }, {
    orderable: true,
    width: "5%"
  }, {
    orderable: true,
    width: "5%"
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true,
    visible: false,
    targets: 11
  }, {
    orderable: true,
    visible: false,
    targets: 12
  }, {
    orderable: true,
    visible: false,
    targets: 13
  }, {
    orderable: true,
    visible: false,
    targets: 14
  }, {
    orderable: true,
    visible: false,
    targets: 15
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
  }, {
    extend: "excel",
    exportOptions: {
      columns: ":visible",
      rows: ":visible"
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("datatables_langue"),
    processing: true
  },
  fixedHeader: true,
  footerCallback: function footerCallback(row, data, start, end, display) {
    $(".center-class").remove();
    var api = this.api(),
      data;
  }
});
$(".type_commande").on("change", function (e) {
  if ($(this).attr("data-type") == "PRJ" || $(this).val() == 5) {
    $(".pr").toggleClass("none");
  } else {
    $(".pr").addClass("none");
  }
});
$(".type_commande").on("change", function (e) {
  var type = $("option:selected", this).attr("data-type");
  $(".bloc_choix").css("display", "none");
  if (type == "CMD") {
    $(".bloc_reference_devis_client").css("display", "block");
  } else if (type == "MR") {
    $(".bloc_marche").css("display", "block");
  } else if (type == "INV") {
    $(".bloc_investissement").css("display", "block");
  }
});
table2.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchText"](api, [0, 6, 7, 8, 9, 10], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchDate"](api, [3, 5], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchSelect"](api, [11, 12, 13, 14, 15, 1, 2, 4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchCheckbox"](api, [], []);
});
$("body").on("change", ".marches", function (e) {
  var $form = $(this).closest("form");
  getSubSelect(".sousmarche", false, "");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  //  console.log(data);
  //alert($form.attr('action'));
  //  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function success(html) {
      //console.log(html);
      getSubSelect(".sousmarche", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    }
  });

  e.preventDefault();
});
$("body").on("change", "#form_projet", function () {
  //alert($(this).val());
  getSubSelect("#form_sous_projet", false, "", "");
  var $this = $(this).closest("form");
  var data = {};

  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("sous_projet_select", {
      id: $(this).val() == "" || $(this).val() === null ? -1 : $(this).val(),
      placeholder: "Choix sous projet"
    }),
    type: "POST",
    data: data,
    success: function success(result) {
      //   console.log(html);
      $("#form_sous_projet").html(result.data);
      getSubSelect("#form_sous_projet", true, "", "");
      $(".select2_demo_6").select2();
    }
  });
});
$(".dynamique_document").click(function (e) {
  // console.log( $(this).attr('data-id'));
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("raport_document_dynamique_form"),
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
$("body").on("change", "#operation", function (e) {
  $(".all,.reception , .facture , .reglement").addClass("raport-hide");
  $("#example2").removeAttr("disabled");
  $("#example3").removeAttr("disabled");
  $(".onoffswitch-checkbox").prop("checked", true);
  if ($(this).val() == "cmd") {
    $(".all,.reception , .facture , .reglement").toggleClass("raport-hide");
  } else if ($(this).val() == "rec") {
    $(".all,.facture , .reglement").toggleClass("raport-hide");
  } else if ($(this).val() == "fac") {
    $(".all,.reglement").toggleClass("raport-hide");
  }
});
$("body").on("click", ".onoffswitch-checkbox", function (e) {
  //alert($("#example1").prop("checked"));
  $("#example2").removeAttr("disabled");
  $("#example3").removeAttr("disabled");
  if ($("#example1").prop("checked") == false) {
    $("#example2").attr("disabled", true);
    $("#example3").attr("disabled", true);
  }
  if ($("#example2").prop("checked") == false) {
    // $("#example2").attr("disabled",true);
    $("#example3").attr("disabled", true);
  }
});
$("body").on("submit", ".form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);

  // Create a new instance of ladda for the specified button
  var l = Ladda.create(document.querySelector(".my-button"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("raport_get_all_by_filtre"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
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
$.fn.toggleCheck = function () {
  if (this.tagName === "INPUT") {
    $(this).prop("checked", !$(this).is(":checked"));
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
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

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


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

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


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

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var $repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw $RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return $String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
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

},[["./assets/js/components/module_vente/reporting.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfdmVudGUvcmVwb3J0aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJTaG93Rm9ybUVycm9ycyIsInNlbGVjdG9yIiwiZm9ybV9uYW1lIiwiZXJyb3JzIiwiaWQiLCJpc0dyb3VwZSIsIiQiLCJyZW1vdmUiLCJqUXVlcnkiLCJlYWNoIiwidmlvbGF0aW9ucyIsImkiLCJ2YWwiLCJjb2x1bW5OYW1lIiwieCIsInByb3BlcnR5UGF0aCIsInNlYXJjaCIsInNlcGFyYXRvcnMiLCJhcnIiLCJzcGxpdCIsIlJlZ0V4cCIsImpvaW4iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInBhcmVudCIsImFwcGVuZCIsInRpdGxlIiwiU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0iLCJvbiIsImUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJnZW5lcmF0ZSIsImZycyIsImFqYXgiLCJ0eXBlIiwidXJsIiwic3VjY2VzcyIsInJlc3VsdCIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0IiwicHJldmVudERlZmF1bHQiLCJzZWxlY3QyIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwiZ2V0U3ViU2VsZWN0IiwibXljbGFzcyIsIm15Ym9vbGVhbiIsIm15Y29udGVudCIsInByb3AiLCJodG1sIiwiYXJyYXkiLCJsIiwicmVwbGFjZVdpdGgiLCJmYWRlSW4iLCJoaWRlIiwidHJpZ2dlciIsInRhYmxlIiwiaWRfcHJvamV0IiwiaWRfc291c19wcm9qZXQiLCJpZF9kb3NzaWVyIiwiaWRfbWFyY2hlIiwiaWRfc291c21hcmNoZSIsImxvYWQiLCJjbHQiLCJpdGVtIiwicHVzaCIsImF0dHIiLCJkb2N1bWVudCIsImNsaWVudCIsImRvc3NpZXIiLCJvcGVuIiwicHJvamV0Iiwic291c1Byb2pldCIsIm1hcmNoZSIsInNvdXNNYXJjaGUiLCJkb2N1bWVudFBhcmVudCIsImRhdGVEZWJ1dCIsImRhdGVGaW4iLCJ0YWJsZTIiLCJEYXRhVGFibGUiLCJkZWZlclJlbmRlciIsInN0YXRlU2F2ZSIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwidGFyZ2V0cyIsInZpc2libGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJyZWxvYWQiLCJleHRlbmQiLCJleHBvcnRPcHRpb25zIiwicm93cyIsImxhbmd1YWdlIiwicHJvY2Vzc2luZyIsImZpeGVkSGVhZGVyIiwiZm9vdGVyQ2FsbGJhY2siLCJyb3ciLCJkYXRhIiwic3RhcnQiLCJlbmQiLCJkaXNwbGF5IiwiYXBpIiwiaW50VmFsIiwicmVwbGFjZSIsInRvdGFsNCIsImNvbHVtbiIsInBhZ2UiLCJyZWR1Y2UiLCJhIiwiYiIsImZvb3RlciIsInRvRml4ZWQiLCJ0b3RhbDUiLCJ0b3RhbDYiLCJ0b3RhbDciLCJzZXR0aW5ncyIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJ0b2dnbGVDbGFzcyIsImFkZENsYXNzIiwiY3NzIiwiJGZvcm0iLCJjbG9zZXN0IiwiJHRoaXMiLCJjbGljayIsIm1vZGFsIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHIiLCJkdGEiLCJGb3JtRGF0YSIsIkxhZGRhIiwiY3JlYXRlIiwicXVlcnlTZWxlY3RvciIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdG9wIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInRvZ2dsZUNoZWNrIiwidGFnTmFtZSIsImlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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QUM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJmaWxlIjoicmVwb3J0aW5nX2NsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG4gICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICBqUXVlcnkuZWFjaChlcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gXCJcIjtcclxuICAgICAgICB2YXIgeCA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgaWYoaXNHcm91cGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSB4O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnXFxcXFsnKSAhPSAtMSAmJiB4LnNlYXJjaCgnXFxcXF0nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ycyA9IFsnXFxcXF0nLCAnXFxcXFsnXTtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oJ3wnKSkpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdkYXRhLicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHgpXHJcblxyXG4vKnbDqXJpZmllciBzJ2lsIHMnYWdpdCBkJ3VuZSBmb3JtdWxhaXJlIGF2ZWMgdW4gY2hhbXAgdHlwZSBmaWxlICovXHJcbiAgICAgICAgaWYgKCFqUXVlcnkoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGNvbHVtbk5hbWUgKyAnX2ZpbGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZSk7XHJcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSlcclxuICAgICAgICAgICAgc2VsZWN0b3IuZmluZChcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9yc1dpdGhQYXJhbShzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNcIitzZWxlY3RvcikucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qc1wiO1xyXG4vL1Nob3dGb3JtRXJyb3JzV2l0aFBhcmFtXHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzV2l0aFBhcmFtIH0gZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanNcIjtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLnRlbGUtZnJzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgkKFwiLnNlbGUtZnJzXCIpLnZhbCgpKVxyXG5cclxuICBpZiAoJChcIi5zZWxlLWZyc1wiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRfYnlfZm91cm5pc3NldXJfYWxsXCIsIHtcclxuICAgICAgZnJzOiAkKFwiLnNlbGUtZnJzXCIpLnZhbCgpLFxyXG4gICAgfSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicmVwb3J0X2J5X2ZvdXJuaXNzZXVyX2FsbFwiLCB7XHJcbiAgICAgICAgZnJzOiAkKFwiLnNlbGUtZnJzXCIpLnZhbCgpLFxyXG4gICAgICB9KSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge30sXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiByZW5zZWlnbmVyIHVuIGNsaWVudFwiLCBcIndhcm5pbmdcIiwge1xyXG4gICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5zZWxlY3QyX2RlbW9fOVwiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBtYXJjaGVcIixcclxuICBhbGxvd0NsZWFyOiBmYWxzZSxcclxufSk7XHJcblxyXG4kKFwiLnNlbGVjdDJfZGVtb18zXCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkNob2l4IHByb2pldFwiLFxyXG4gIGFsbG93Q2xlYXI6IHRydWUsXHJcbn0pO1xyXG4kKFwiLnNlbGVjdDJfZGVtb180XCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkNob2l4IGRvc3NpZXJcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzZcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggc291cyBwcm9qZXRcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzVcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggVHlwZVwiLFxyXG4gIGFsbG93Q2xlYXI6IHRydWUsXHJcbn0pO1xyXG5cclxuJChcIi5zZWxlY3QyX2RlbW9fN1wiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBDbGllbnRcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuJChcIi5zZWxlY3QyX2RlbW9fOFwiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBEb2N1bWVudHNcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuZnVuY3Rpb24gZ2V0U3ViU2VsZWN0KG15Y2xhc3MsIG15Ym9vbGVhbiwgbXljb250ZW50KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhteWNvbnRlbnQpXHJcbiAgaWYgKG15Ym9vbGVhbikge1xyXG4gICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKG15Y2xhc3MpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICQobXljbGFzcylcclxuICAgICAgLnBhcmVudCgpXHJcbiAgICAgIC5maW5kKFwiLnNlbGVjdDIgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvd1wiKVxyXG4gICAgICAuaHRtbCgnPGkgY2xhc3M9XCJpLWxvYWQgZmEgZmEtcmVmcmVzaFwiPjwvaT4nKTtcclxuICB9XHJcbiAgaWYgKG15Y29udGVudCkge1xyXG4gICAgdmFyIGFycmF5ID0gbXljbGFzcy5zcGxpdChcIixcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCQobXljb250ZW50KS5maW5kKGFycmF5W2ldKSk7XHJcbiAgICAgICQoYXJyYXlbaV0pLnJlcGxhY2VXaXRoKCQobXljb250ZW50KS5maW5kKGFycmF5W2ldKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNoYW5nZVwiLCBcIiNmb3JtX3R5cGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gIC8vYWxlcnQoJCh0aGlzKS52YWwoKSlcclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcInByb2pldFwiKSB7XHJcbiAgICAkKFwiLnByb2pldFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIuc291TWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICB9XHJcbiAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJtYXJjaGVcIikge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChcIi5wcm9qZXRcIikuaGlkZSgpO1xyXG4gICAgJChcIi5zb3VNYXJjaGVcIikuZmFkZUluKCk7XHJcbiAgICAkKFwiLm1hcmNoZVwiKS5mYWRlSW4oKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgICQoXCIuc2VsZWN0Ml9kZW1vXzNcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChcIi5zZWxlY3QyX2RlbW9fNVwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICQoXCIuc291TWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIucHJvamV0XCIpLmhpZGUoKTtcclxuICAgICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI2Zvcm1fdHlwZTJcIiwgZnVuY3Rpb24gKCkge1xyXG4gIC8vYWxlcnQoJCh0aGlzKS52YWwoKSlcclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcInByb2pldFwiKSB7XHJcbiAgICAkKFwiLnByb2pldFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIuc291TWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICB9XHJcbiAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJtYXJjaGVcIikge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChcIi5wcm9qZXRcIikuaGlkZSgpO1xyXG4gICAgJChcIi5zb3VNYXJjaGVcIikuZmFkZUluKCk7XHJcbiAgICAkKFwiLm1hcmNoZVwiKS5mYWRlSW4oKTtcclxuICB9XHJcbiBpZigkKHRoaXMpLnZhbCgpID09IFwiXCIpe1xyXG4gICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAkKFwiLnNvdU1hcmNoZVwiKS5oaWRlKCk7XHJcbiAgJChcIi5tYXJjaGVcIikuaGlkZSgpO1xyXG4gICQoXCIucHJvamV0XCIpLmhpZGUoKTtcclxuICBcclxuIH1cclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNlYXJjaFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIGFsZXJ0KClyZXBvcnRpbmdfcHJvamV0X2RhdGFcclxuICAvL2FsZXJ0KCQoXCIuc2VsZWN0Ml9kZW1vXzNcIikudmFsKCkpO1xyXG4gIHRhYmxlLmFqYXhcclxuICAgIC51cmwoXHJcbiAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcHJvamV0X2RhdGFcIiwge1xyXG4gICAgICAgIGlkX3Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoKSxcclxuICAgICAgICBpZF9zb3VzX3Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fNlwiKS52YWwoKSxcclxuICAgICAgICBpZF9kb3NzaWVyOiAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX21hcmNoZTogJChcIi5tYXJjaGVzXCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX3NvdXNtYXJjaGU6ICQoXCIuc291c21hcmNoZVwiKS52YWwoKSxcclxuICAgICAgfSlcclxuICAgIClcclxuICAgIC5sb2FkKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VhcmNoM1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIGFsZXJ0KClyZXBvcnRpbmdfcHJvamV0X2RhdGFcclxuICAvKiQuZWFjaCgkKHRoaXMpLmZpbmQoXCI6c2VsZWN0ZWRcIiksIGZ1bmN0aW9uIChpLCBpdGVtKSB7IFxyXG4gICAgdG90QW10ICs9ICQoaXRlbSkuZGF0YShcInByaWNlXCIpO1xyXG4gIH0pOyovXHJcbiAgdmFyIGNsdCA9IFtdO1xyXG4gICQuZWFjaCgkKCcuc2VsZWN0Ml9kZW1vXzcnKS5maW5kKFwiOnNlbGVjdGVkXCIpLCBmdW5jdGlvbiAoaSwgaXRlbSkgeyBcclxuICAgIC8vY29uc29sZS5sb2coaXRlbSlcclxuICAgIGNsdC5wdXNoKFskKGl0ZW0pLmF0dHIoJ3ZhbHVlJyksJChpdGVtKS5hdHRyKCdzb2NpZXRlJyldKTtcclxuICB9KTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfdmVudGVcIix7XHJcbiAgICAgIGRvY3VtZW50OiAkKFwiLnNlbGVjdDJfZGVtb184XCIpLnZhbCgpLFxyXG4gICAgICBjbGllbnQ6IGNsdCxcclxuICAgICAgZG9zc2llcjogJChcIi5zZWxlY3QyX2RlbW9fNFwiKS52YWwoKSxcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIGFqYXg6MVxyXG4gICAgfSksXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0oXCJmb3JtX2xpZW5cIiwgbnVsbCwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgd2luZG93Lm9wZW4oUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydGluZ192ZW50ZVwiLHtcclxuICAgICAgICBwcm9qZXQ6ICQoXCIuc2VsZWN0Ml9kZW1vXzNcIikudmFsKCksXHJcbiAgICAgICAgc291c1Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fNlwiKS52YWwoKSxcclxuICAgICAgICBkb3NzaWVyOiAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbCgpLFxyXG4gICAgICAgIG1hcmNoZTogJChcIi5tYXJjaGVzXCIpLnZhbCgpLFxyXG4gICAgICAgIHNvdXNNYXJjaGU6ICQoXCIuc291c21hcmNoZVwiKS52YWwoKSxcclxuICAgICAgICBjbGllbnQ6IGNsdCxcclxuICAgICAgICBkb2N1bWVudDogJChcIi5zZWxlY3QyX2RlbW9fOFwiKS52YWwoKSxcclxuICAgICAgICBkb2N1bWVudFBhcmVudDokKFwiLnNlbGVjdDJfZGVtb184IDpzZWxlY3RlZFwiKS5wYXJlbnQoKS5hdHRyKCd0eXBlJyksXHJcbiAgICAgICAgZGF0ZURlYnV0OiAkKFwiLmRhdGVEZWJ1dFwiKS52YWwoKSxcclxuICAgICAgICBkYXRlRmluOiAkKFwiLmRhdGVGaW5cIikudmFsKCksXHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuICBcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zZWFyY2gyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gYWxlcnQoKXJlcG9ydGluZ19wcm9qZXRfZGF0YVxyXG5cclxuICB0YWJsZTIuYWpheFxyXG4gICAgLnVybChcclxuICAgICAgUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydGluZ19yZWZlcmVuY2VfZGF0YVwiLCB7XHJcbiAgICAgICAgaWRfcHJvamV0OiAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX3NvdXNfcHJvamV0OiAkKFwiLnNlbGVjdDJfZGVtb182XCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX2Rvc3NpZXI6ICQoXCIuc2VsZWN0Ml9kZW1vXzRcIikudmFsKCksXHJcbiAgICAgICAgaWRfbWFyY2hlOiAkKFwiLm1hcmNoZXNcIikudmFsKCksXHJcbiAgICAgICAgaWRfc291c21hcmNoZTogJChcIi5zb3VzbWFyY2hlXCIpLnZhbCgpLFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICAgLmxvYWQoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5yc2VhcmNoXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIC8vJChcIiNmb3JtX2FubmVlXCIpLnZhbCgxKS50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpO1xyXG4gIC8vJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmVxKDApJykucHJvcCgnc2VsZWN0ZWQnLHRydWUpO1xyXG4gIC8vJCgnI2Zvcm1fYW5uZWUnKS52YWwoJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmZpcnN0LWNoaWxkJykudmFsKCkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICQoXCIuc2VsZWN0Ml9kZW1vXzRcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgJChcIi5zZWxlY3QyX2RlbW9fNVwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAkKFwiLnNvdU1hcmNoZVwiKS5oaWRlKCk7XHJcbiAgJChcIi5tYXJjaGVcIikuaGlkZSgpO1xyXG4gICQoXCIucHJvamV0XCIpLmhpZGUoKTtcclxuICAkKFwiLnNlbDJcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgdGFibGUuYWpheC51cmwoUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydGluZ19wcm9qZXRfZGF0YVwiKSkubG9hZCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIucnNlYXJjaDJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgLy8kKFwiI2Zvcm1fYW5uZWVcIikudmFsKDEpLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgLy8kKCcjZm9ybV9hbm5lZSBvcHRpb246ZXEoMCknKS5wcm9wKCdzZWxlY3RlZCcsdHJ1ZSk7XHJcbiAgLy8kKCcjZm9ybV9hbm5lZScpLnZhbCgkKCcjZm9ybV9hbm5lZSBvcHRpb246Zmlyc3QtY2hpbGQnKS52YWwoKSkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICQoXCIuc2VsZWN0Ml9kZW1vXzNcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgJChcIi5zZWxlY3QyX2RlbW9fNFwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAkKFwiLnNlbGVjdDJfZGVtb181XCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICQoXCIuc291TWFyY2hlXCIpLmhpZGUoKTtcclxuICAkKFwiLm1hcmNoZVwiKS5oaWRlKCk7XHJcbiAgJChcIi5wcm9qZXRcIikuaGlkZSgpO1xyXG4gICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICB0YWJsZTIuYWpheC51cmwoUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydGluZ19yZWZlcmVuY2VfZGF0YVwiKSkubG9hZCgpO1xyXG59KTtcclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlLXNob3dcIikuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcHJvamV0X2RhdGFcIikgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgdHlwZTogXCJnZXRcIixcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gIF0sXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjMlXCIsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxMiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxMyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxNCB9LFxyXG4gICAge1xyXG4gICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICBvcmRlcmFibGU6IHRydWUgLypjbGFzc05hbWU6IFwiY29sb25uZS1ncmFzXCIqLyxcclxuICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHRhcmdldHM6IDE1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgb3JkZXJhYmxlOiB0cnVlIC8qY2xhc3NOYW1lOiBcImNvbG9ubmUtZ3Jhc1wiKi8sXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICB0YXJnZXRzOiAxNixcclxuICAgIH0sXHJcbiAgXSxcclxuICAvLyBkb206ICdsQmZydGlwJyxcclxuICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgIGNvbHVtbnM6IFwiOnZpc2libGVcIixcclxuICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG4gIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gIGZvb3RlckNhbGxiYWNrOiBmdW5jdGlvbiAocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICAkKFwiLmNlbnRlci1jbGFzc1wiKS5yZW1vdmUoKTtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICBkYXRhO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgZm9ybWF0dGluZyB0byBnZXQgaW50ZWdlciBkYXRhIGZvciBzdW1tYXRpb25cclxuICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGkgPT09IFwic3RyaW5nXCJcclxuICAgICAgICA/IGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMVxyXG4gICAgICAgIDogdHlwZW9mIGkgPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IGlcclxuICAgICAgICA6IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0b3RhbDQgPSBhcGlcclxuICAgICAgLmNvbHVtbig2LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgJChhcGkuY29sdW1uKDYpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCI+VG90YWwgOiAnICsgdG90YWw0LnRvRml4ZWQoMikgKyBcIjwvY2VudGVyPlwiXHJcbiAgICApO1xyXG5cclxuICAgIHZhciB0b3RhbDUgPSBhcGlcclxuICAgICAgLmNvbHVtbig3LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgJChhcGkuY29sdW1uKDcpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCI+VG90YWwgOiAnICsgdG90YWw1LnRvRml4ZWQoMikgKyBcIjwvY2VudGVyPlwiXHJcbiAgICApO1xyXG5cclxuICAgIHZhciB0b3RhbDYgPSBhcGlcclxuICAgICAgLmNvbHVtbig4LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgJChhcGkuY29sdW1uKDgpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCI+VG90YWwgOiAnICsgdG90YWw2LnRvRml4ZWQoMikgKyBcIjwvY2VudGVyPlwiXHJcbiAgICApO1xyXG5cclxuICAgIHZhciB0b3RhbDcgPSBhcGlcclxuICAgICAgLmNvbHVtbig5LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgJChhcGkuY29sdW1uKDkpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCI+VG90YWwgOiAnICsgdG90YWw3LnRvRml4ZWQoMikgKyBcIjwvY2VudGVyPlwiXHJcbiAgICApO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzAsIDYsIDcsIDgsIDksIDEwLCAxMV0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFszLCA1XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoXHJcbiAgICBhcGksXHJcbiAgICBbMTIsIDEzLCAxNCwgMTUsIDE2LCAxLCAyLCA0XSxcclxuICAgIFtdXHJcbiAgKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbXSwgW10pO1xyXG5cclxuICB2YXIgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICA/IGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMVxyXG4gICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgID8gaVxyXG4gICAgICA6IDA7XHJcbiAgfTtcclxuXHJcbiAgJChcIi5jZW50ZXItY2xhc3NcIikucmVtb3ZlKCk7XHJcblxyXG4gIHZhciB0b3RhbDQgPSBhcGlcclxuICAgIC5jb2x1bW4oNilcclxuICAgIC5kYXRhKClcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgIH0sIDApO1xyXG4gICQoYXBpLmNvbHVtbig2LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNC50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICk7XHJcblxyXG4gIHZhciB0b3RhbDUgPSBhcGlcclxuICAgIC5jb2x1bW4oNywgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgLmRhdGEoKVxyXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgfSwgMCk7XHJcbiAgJChhcGkuY29sdW1uKDcpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNS50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICk7XHJcblxyXG4gIHZhciB0b3RhbDYgPSBhcGlcclxuICAgIC5jb2x1bW4oOCwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgLmRhdGEoKVxyXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgfSwgMCk7XHJcbiAgJChhcGkuY29sdW1uKDgpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNi50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICk7XHJcblxyXG4gIHZhciB0b3RhbDcgPSBhcGlcclxuICAgIC5jb2x1bW4oOSwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgLmRhdGEoKVxyXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgfSwgMCk7XHJcbiAgJChhcGkuY29sdW1uKDkpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNy50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlMiA9ICQoXCIjZGF0YXRhYmxlLXNob3cyXCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicmVwb3J0aW5nX3JlZmVyZW5jZV9kYXRhXCIpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIzJVwiLCBzZWFyY2hhYmxlOiB0cnVlLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDExIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDEyIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDEzIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDE0IH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDE1IH0sXHJcbiAgXSxcclxuICAvLyBkb206ICdsQmZydGlwJyxcclxuICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgIGNvbHVtbnM6IFwiOnZpc2libGVcIixcclxuICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG4gIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gIGZvb3RlckNhbGxiYWNrOiBmdW5jdGlvbiAocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICAkKFwiLmNlbnRlci1jbGFzc1wiKS5yZW1vdmUoKTtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICBkYXRhO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLnR5cGVfY29tbWFuZGVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIpID09IFwiUFJKXCIgfHwgJCh0aGlzKS52YWwoKSA9PSA1KSB7XHJcbiAgICAgICQoXCIucHJcIikudG9nZ2xlQ2xhc3MoXCJub25lXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucHJcIikuYWRkQ2xhc3MoXCJub25lXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiLnR5cGVfY29tbWFuZGVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgdHlwZSA9ICQoXCJvcHRpb246c2VsZWN0ZWRcIiwgdGhpcykuYXR0cihcImRhdGEtdHlwZVwiKTtcclxuICAkKFwiLmJsb2NfY2hvaXhcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgaWYgKHR5cGUgPT0gXCJDTURcIikge1xyXG4gICAgICAkKFwiLmJsb2NfcmVmZXJlbmNlX2RldmlzX2NsaWVudFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09IFwiTVJcIikge1xyXG4gICAgICAkKFwiLmJsb2NfbWFyY2hlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJJTlZcIikge1xyXG4gICAgICAkKFwiLmJsb2NfaW52ZXN0aXNzZW1lbnRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxudGFibGUyLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFswLCA2LCA3LCA4LCA5LCAxMF0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFszLCA1XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoXHJcbiAgICBhcGksXHJcbiAgICBbMTEsIDEyLCAxMywgMTQsIDE1LCAxLCAyLCA0XSxcclxuICAgIFtdXHJcbiAgKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbXSwgW10pO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiLm1hcmNoZXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gIGdldFN1YlNlbGVjdChcIi5zb3VzbWFyY2hlXCIsIGZhbHNlLCBcIlwiKTtcclxuICAvLyBTaW11bGF0ZSBmb3JtIGRhdGEsIGJ1dCBvbmx5IGluY2x1ZGUgdGhlIHNlbGVjdGVkIHNwb3J0IHZhbHVlLlxyXG4gIHZhciBkYXRhID0ge307XHJcbiAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gIC8vICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvL2FsZXJ0KCRmb3JtLmF0dHIoJ2FjdGlvbicpKTtcclxuICAvLyAgY29uc29sZS5sb2coJGZvcm0uYXR0cignbWV0aG9kJykpO1xyXG4gIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgZ2V0U3ViU2VsZWN0KFwiLnNvdXNtYXJjaGVcIiwgdHJ1ZSwgaHRtbCk7XHJcbiAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgIC8vJCgnLnNvdXNtYXJjaGUnKS5wYXJlbnQoKS5maW5kKCcuc2VsZWN0MiAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IGInKS5ub3QoJzpmaXJzdCcpLmhpZGUoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI2Zvcm1fcHJvamV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAvL2FsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gIGdldFN1YlNlbGVjdChcIiNmb3JtX3NvdXNfcHJvamV0XCIsIGZhbHNlLCBcIlwiLCBcIlwiKTtcclxuICB2YXIgJHRoaXMgPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gIHZhciBkYXRhID0ge307XHJcblxyXG4gIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInNvdXNfcHJvamV0X3NlbGVjdFwiLCB7XHJcbiAgICAgIGlkOiAkKHRoaXMpLnZhbCgpID09IFwiXCIgfHwgJCh0aGlzKS52YWwoKSA9PT0gbnVsbCA/IC0xIDogJCh0aGlzKS52YWwoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggc291cyBwcm9qZXRcIixcclxuICAgIH0pLFxyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAkKFwiI2Zvcm1fc291c19wcm9qZXRcIikuaHRtbChyZXN1bHQuZGF0YSk7XHJcbiAgICAgIGdldFN1YlNlbGVjdChcIiNmb3JtX3NvdXNfcHJvamV0XCIsIHRydWUsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAkKFwiLnNlbGVjdDJfZGVtb182XCIpLnNlbGVjdDIoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIi5keW5hbWlxdWVfZG9jdW1lbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyBjb25zb2xlLmxvZyggJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInJhcG9ydF9kb2N1bWVudF9keW5hbWlxdWVfZm9ybVwiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiwgXCIjb3BlcmF0aW9uXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIi5hbGwsLnJlY2VwdGlvbiAsIC5mYWN0dXJlICwgLnJlZ2xlbWVudFwiKS5hZGRDbGFzcyhcInJhcG9ydC1oaWRlXCIpO1xyXG4gICQoXCIjZXhhbXBsZTJcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gICQoXCIjZXhhbXBsZTNcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gICQoXCIub25vZmZzd2l0Y2gtY2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblxyXG4gIGlmICgkKHRoaXMpLnZhbCgpID09IFwiY21kXCIpIHtcclxuICAgICQoXCIuYWxsLC5yZWNlcHRpb24gLCAuZmFjdHVyZSAsIC5yZWdsZW1lbnRcIikudG9nZ2xlQ2xhc3MoXCJyYXBvcnQtaGlkZVwiKTtcclxuICB9IGVsc2UgaWYgKCQodGhpcykudmFsKCkgPT0gXCJyZWNcIikge1xyXG4gICAgJChcIi5hbGwsLmZhY3R1cmUgLCAucmVnbGVtZW50XCIpLnRvZ2dsZUNsYXNzKFwicmFwb3J0LWhpZGVcIik7XHJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLnZhbCgpID09IFwiZmFjXCIpIHtcclxuICAgICQoXCIuYWxsLC5yZWdsZW1lbnRcIikudG9nZ2xlQ2xhc3MoXCJyYXBvcnQtaGlkZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5vbm9mZnN3aXRjaC1jaGVja2JveFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoJChcIiNleGFtcGxlMVwiKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcbiAgJChcIiNleGFtcGxlMlwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcbiAgJChcIiNleGFtcGxlM1wiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcblxyXG4gIGlmICgkKFwiI2V4YW1wbGUxXCIpLnByb3AoXCJjaGVja2VkXCIpID09IGZhbHNlKSB7XHJcbiAgICAkKFwiI2V4YW1wbGUyXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICQoXCIjZXhhbXBsZTNcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gIH1cclxuICBpZiAoJChcIiNleGFtcGxlMlwiKS5wcm9wKFwiY2hlY2tlZFwiKSA9PSBmYWxzZSkge1xyXG4gICAgLy8gJChcIiNleGFtcGxlMlwiKS5hdHRyKFwiZGlzYWJsZWRcIix0cnVlKTtcclxuICAgICQoXCIjZXhhbXBsZTNcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuXHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicmFwb3J0X2dldF9hbGxfYnlfZmlsdHJlXCIpLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kLmZuLnRvZ2dsZUNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLnRhZ05hbWUgPT09IFwiSU5QVVRcIikge1xyXG4gICAgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiLCAhJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKTtcclxuICB9XHJcbn07XHJcbiIsInZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IHJlZHVjZSwgcmVkdWNlUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19SSUdIVCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c0xlbmd0aCwgbWVtbykge1xuICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoYXQpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gSVNfUklHSFQgPyBsZW5ndGggLSAxIDogMDtcbiAgICB2YXIgaSA9IElTX1JJR0hUID8gLTEgOiAxO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPCAyKSB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBpZiAoSVNfUklHSFQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwiLyogZ2xvYmFsIEJ1biAtLSBEZW5vIGNhc2UgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIEJ1biA9PSAnZnVuY3Rpb24nICYmIEJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZyc7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc29mKGdsb2JhbC5wcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIEVOR0lORV9JU19CVU4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bicpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOR0lORV9JU19CVU4gJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlcnNpb24gPSBnbG9iYWwuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09IDAgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT0gMyAmJiB2ZXJzaW9uWzJdID09IDApO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIG4gPSB0b0ludGVnZXJPckluZmluaXR5KGNvdW50KTtcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93ICRSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG4vLyBgdGhpc051bWJlclZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKDEuMC52YWx1ZU9mKTtcbiIsInZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG4gIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG4vLyBDaHJvbWUgODAtODIgaGFzIGEgY3JpdGljYWwgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDQ5OTgyXG52YXIgQ0hST01FX0JVRyA9ICFJU19OT0RFICYmIENIUk9NRV9WRVJTSU9OID4gNzkgJiYgQ0hST01FX1ZFUlNJT04gPCA4MztcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhU1RSSUNUX01FVEhPRCB8fCBDSFJPTUVfQlVHIH0sIHtcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGxlbmd0aCwgbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdGhpc051bWJlclZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlJyk7XG52YXIgJHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciByZXBlYXQgPSB1bmN1cnJ5VGhpcygkcmVwZWF0KTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBuYXRpdmVUb0ZpeGVkID0gdW5jdXJyeVRoaXMoMS4wLnRvRml4ZWQpO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGRhdGEsIG4sIGMpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjMiA9IGM7XG4gIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGMyICUgMWU3O1xuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICB9XG59O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gKGRhdGEsIG4pIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIGMgPSAwO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGZsb29yKGMgLyBuKTtcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgfVxufTtcblxudmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBzID0gJyc7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgIHZhciB0ID0gJFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG5cbnZhciBGT1JDRUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVUb0ZpeGVkKDAuMDAwMDgsIDMpICE9PSAnMC4wMDAnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgwLjksIDApICE9PSAnMScgfHxcbiAgICBuYXRpdmVUb0ZpeGVkKDEuMjU1LCAyKSAhPT0gJzEuMjUnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgxMDAwMDAwMDAwMDAwMDAwMTI4LjAsIDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCc7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkKHt9KTtcbn0pO1xuXG4vLyBgTnVtYmVyLnByb3RvdHlwZS50b0ZpeGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyT3JJbmZpbml0eShmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgLy8gVE9ETzogRVMyMDE4IGluY3JlYXNlZCB0aGUgbWF4aW11bSBudW1iZXIgb2YgZnJhY3Rpb24gZGlnaXRzIHRvIDEwMCwgbmVlZCB0byBpbXByb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgJFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChudW1iZXIgIT0gbnVtYmVyKSByZXR1cm4gJ05hTic7XG4gICAgaWYgKG51bWJlciA8PSAtMWUyMSB8fCBudW1iZXIgPj0gMWUyMSkgcmV0dXJuICRTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KGRhdGEsIDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEsIDEpO1xuICAgICAgICBkaXZpZGUoZGF0YSwgMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogc3RyaW5nU2xpY2UocmVzdWx0LCAwLCBrIC0gZnJhY3REaWdpdHMpICsgJy4nICsgc3RyaW5nU2xpY2UocmVzdWx0LCBrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldEludGVydmFsID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0SW50ZXJ2YWwsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRJbnRlcnZhbCAhPT0gc2V0SW50ZXJ2YWwgfSwge1xuICBzZXRJbnRlcnZhbDogc2V0SW50ZXJ2YWxcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldFRpbWVvdXQgPSBzY2hlZHVsZXJzRml4KGdsb2JhbC5zZXRUaW1lb3V0LCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRUaW1lb3V0IGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldFRpbWVvdXQgIT09IHNldFRpbWVvdXQgfSwge1xuICBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0XG59KTtcbiIsIi8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=