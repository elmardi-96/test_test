(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporting"],{

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

/***/ "./assets/js/components/module_achat/reporting.js":
/*!********************************************************!*\
  !*** ./assets/js/components/module_achat/reporting.js ***!
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
    toastr.warning("Veuillez renseigner un fournisseur", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$(".select2_demo_9").select2({
  placeholder: "Choix marché",
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
  placeholder: "Choix fournisseur",
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
  var frs = [];
  $.each($('.select2_demo_7').find(":selected"), function (i, item) {
    //console.log(item)
    frs.push([$(item).attr('value'), $(item).attr('societe')]);
  });
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_achat", {
      document: $(".select2_demo_8").val(),
      fournisseur: frs,
      dossier: $(".select2_demo_4").val(),
      ajax: 1
    }),
    success: function success(result) {
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_10__["ShowFormErrorsWithParam"])("form_lien", null, result.errors);
      } else {
        window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_achat", {
          projet: $(".select2_demo_3").val(),
          sousProjet: $(".select2_demo_6").val(),
          dossier: $(".select2_demo_4").val(),
          marche: $(".marches").val(),
          sousMarche: $(".sousmarche").val(),
          fournisseur: frs,
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

},[["./assets/js/components/module_achat/reporting.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYWNoYXQvcmVwb3J0aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJTaG93Rm9ybUVycm9ycyIsInNlbGVjdG9yIiwiZm9ybV9uYW1lIiwiZXJyb3JzIiwiaWQiLCJpc0dyb3VwZSIsIiQiLCJyZW1vdmUiLCJqUXVlcnkiLCJlYWNoIiwidmlvbGF0aW9ucyIsImkiLCJ2YWwiLCJjb2x1bW5OYW1lIiwieCIsInByb3BlcnR5UGF0aCIsInNlYXJjaCIsInNlcGFyYXRvcnMiLCJhcnIiLCJzcGxpdCIsIlJlZ0V4cCIsImpvaW4iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInBhcmVudCIsImFwcGVuZCIsInRpdGxlIiwiU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0iLCJvbiIsImUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJnZW5lcmF0ZSIsImZycyIsImFqYXgiLCJ0eXBlIiwidXJsIiwic3VjY2VzcyIsInJlc3VsdCIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0IiwicHJldmVudERlZmF1bHQiLCJzZWxlY3QyIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwiZ2V0U3ViU2VsZWN0IiwibXljbGFzcyIsIm15Ym9vbGVhbiIsIm15Y29udGVudCIsInByb3AiLCJodG1sIiwiYXJyYXkiLCJsIiwicmVwbGFjZVdpdGgiLCJmYWRlSW4iLCJoaWRlIiwidHJpZ2dlciIsInRhYmxlIiwiaWRfcHJvamV0IiwiaWRfc291c19wcm9qZXQiLCJpZF9kb3NzaWVyIiwiaWRfbWFyY2hlIiwiaWRfc291c21hcmNoZSIsImxvYWQiLCJpdGVtIiwicHVzaCIsImF0dHIiLCJkb2N1bWVudCIsImZvdXJuaXNzZXVyIiwiZG9zc2llciIsIm9wZW4iLCJwcm9qZXQiLCJzb3VzUHJvamV0IiwibWFyY2hlIiwic291c01hcmNoZSIsImRvY3VtZW50UGFyZW50IiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsInRhYmxlMiIsIkRhdGFUYWJsZSIsImRlZmVyUmVuZGVyIiwic3RhdGVTYXZlIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJvcmRlciIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJ3aWR0aCIsInNlYXJjaGFibGUiLCJ0YXJnZXRzIiwidmlzaWJsZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsInJlbG9hZCIsImV4dGVuZCIsImV4cG9ydE9wdGlvbnMiLCJyb3dzIiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwiZml4ZWRIZWFkZXIiLCJmb290ZXJDYWxsYmFjayIsInJvdyIsImRhdGEiLCJzdGFydCIsImVuZCIsImRpc3BsYXkiLCJhcGkiLCJpbnRWYWwiLCJyZXBsYWNlIiwidG90YWw0IiwiY29sdW1uIiwicGFnZSIsInJlZHVjZSIsImEiLCJiIiwiZm9vdGVyIiwidG9GaXhlZCIsInRvdGFsNSIsInRvdGFsNiIsInRvdGFsNyIsInNldHRpbmdzIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsInRvZ2dsZUNsYXNzIiwiYWRkQ2xhc3MiLCJjc3MiLCIkZm9ybSIsImNsb3Nlc3QiLCIkdGhpcyIsImNsaWNrIiwibW9kYWwiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0ciIsImR0YSIsIkZvcm1EYXRhIiwiTGFkZGEiLCJjcmVhdGUiLCJxdWVyeVNlbGVjdG9yIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN0b3AiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwidG9nZ2xlQ2hlY2siLCJ0YWdOYW1lIiwiaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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O0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFDQSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHFGQUE0QiIsImZpbGUiOiJyZXBvcnRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgalF1ZXJ5LmVhY2goZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgIGlmKGlzR3JvdXBlID09IHRydWUpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0geDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBpZiAoeC5zZWFyY2goJ1xcXFxbJykgIT0gLTEgJiYgeC5zZWFyY2goJ1xcXFxdJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHNlcGFyYXRvcnMgPSBbJ1xcXFxdJywgJ1xcXFxbJ107XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9ycy5qb2luKCd8JykpKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnZGF0YS4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4KVxyXG5cclxuLyp2w6lyaWZpZXIgcydpbCBzJ2FnaXQgZCd1bmUgZm9ybXVsYWlyZSBhdmVjIHVuIGNoYW1wIHR5cGUgZmlsZSAqL1xyXG4gICAgICAgIGlmICghalF1ZXJ5KFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBjb2x1bW5OYW1lICsgJ19maWxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWUpO1xyXG4gICAgICAgIGlmIChjb2x1bW5OYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpXHJcbiAgICAgICAgICAgIHNlbGVjdG9yLmZpbmQoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0oc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIrc2VsZWN0b3IpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9ycyArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuLy9TaG93Rm9ybUVycm9yc1dpdGhQYXJhbVxyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9yc1dpdGhQYXJhbSB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi50ZWxlLWZyc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoJChcIi5zZWxlLWZyc1wiKS52YWwoKSlcclxuXHJcbiAgaWYgKCQoXCIuc2VsZS1mcnNcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBSb3V0aW5nLmdlbmVyYXRlKFwicmVwb3J0X2J5X2ZvdXJuaXNzZXVyX2FsbFwiLCB7XHJcbiAgICAgIGZyczogJChcIi5zZWxlLWZyc1wiKS52YWwoKSxcclxuICAgIH0pO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydF9ieV9mb3Vybmlzc2V1cl9hbGxcIiwge1xyXG4gICAgICAgIGZyczogJChcIi5zZWxlLWZyc1wiKS52YWwoKSxcclxuICAgICAgfSksXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHt9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogcmVuc2VpZ25lciB1biBmb3Vybmlzc2V1clwiLCBcIndhcm5pbmdcIiwge1xyXG4gICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5zZWxlY3QyX2RlbW9fOVwiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBtYXJjaMOpXCIsXHJcbiAgYWxsb3dDbGVhcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuJChcIi5zZWxlY3QyX2RlbW9fM1wiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBwcm9qZXRcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuJChcIi5zZWxlY3QyX2RlbW9fNFwiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBkb3NzaWVyXCIsXHJcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcclxufSk7XHJcblxyXG4kKFwiLnNlbGVjdDJfZGVtb182XCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkNob2l4IHNvdXMgcHJvamV0XCIsXHJcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcclxufSk7XHJcblxyXG4kKFwiLnNlbGVjdDJfZGVtb181XCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkNob2l4IFR5cGVcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzdcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggZm91cm5pc3NldXJcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuJChcIi5zZWxlY3QyX2RlbW9fOFwiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBEb2N1bWVudHNcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuZnVuY3Rpb24gZ2V0U3ViU2VsZWN0KG15Y2xhc3MsIG15Ym9vbGVhbiwgbXljb250ZW50KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhteWNvbnRlbnQpXHJcbiAgaWYgKG15Ym9vbGVhbikge1xyXG4gICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKG15Y2xhc3MpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICQobXljbGFzcylcclxuICAgICAgLnBhcmVudCgpXHJcbiAgICAgIC5maW5kKFwiLnNlbGVjdDIgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvd1wiKVxyXG4gICAgICAuaHRtbCgnPGkgY2xhc3M9XCJpLWxvYWQgZmEgZmEtcmVmcmVzaFwiPjwvaT4nKTtcclxuICB9XHJcbiAgaWYgKG15Y29udGVudCkge1xyXG4gICAgdmFyIGFycmF5ID0gbXljbGFzcy5zcGxpdChcIixcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCQobXljb250ZW50KS5maW5kKGFycmF5W2ldKSk7XHJcbiAgICAgICQoYXJyYXlbaV0pLnJlcGxhY2VXaXRoKCQobXljb250ZW50KS5maW5kKGFycmF5W2ldKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNoYW5nZVwiLCBcIiNmb3JtX3R5cGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gIC8vYWxlcnQoJCh0aGlzKS52YWwoKSlcclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcInByb2pldFwiKSB7XHJcbiAgICAkKFwiLnByb2pldFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIuc291TWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICB9XHJcbiAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJtYXJjaGVcIikge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChcIi5wcm9qZXRcIikuaGlkZSgpO1xyXG4gICAgJChcIi5zb3VNYXJjaGVcIikuZmFkZUluKCk7XHJcbiAgICAkKFwiLm1hcmNoZVwiKS5mYWRlSW4oKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgICQoXCIuc2VsZWN0Ml9kZW1vXzNcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChcIi5zZWxlY3QyX2RlbW9fNVwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICQoXCIuc291TWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIucHJvamV0XCIpLmhpZGUoKTtcclxuICAgICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI2Zvcm1fdHlwZTJcIiwgZnVuY3Rpb24gKCkge1xyXG4gIC8vYWxlcnQoJCh0aGlzKS52YWwoKSlcclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcInByb2pldFwiKSB7XHJcbiAgICAkKFwiLnByb2pldFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIuc291TWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmhpZGUoKTtcclxuICAgICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICB9XHJcbiAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJtYXJjaGVcIikge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChcIi5wcm9qZXRcIikuaGlkZSgpO1xyXG4gICAgJChcIi5zb3VNYXJjaGVcIikuZmFkZUluKCk7XHJcbiAgICAkKFwiLm1hcmNoZVwiKS5mYWRlSW4oKTtcclxuICB9XHJcbiBpZigkKHRoaXMpLnZhbCgpID09IFwiXCIpe1xyXG4gICQoXCIuc2VsMlwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAkKFwiLnNvdU1hcmNoZVwiKS5oaWRlKCk7XHJcbiAgJChcIi5tYXJjaGVcIikuaGlkZSgpO1xyXG4gICQoXCIucHJvamV0XCIpLmhpZGUoKTtcclxuICBcclxuIH1cclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNlYXJjaFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIGFsZXJ0KClyZXBvcnRpbmdfcHJvamV0X2RhdGFcclxuICAvL2FsZXJ0KCQoXCIuc2VsZWN0Ml9kZW1vXzNcIikudmFsKCkpO1xyXG4gIHRhYmxlLmFqYXhcclxuICAgIC51cmwoXHJcbiAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcHJvamV0X2RhdGFcIiwge1xyXG4gICAgICAgIGlkX3Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoKSxcclxuICAgICAgICBpZF9zb3VzX3Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fNlwiKS52YWwoKSxcclxuICAgICAgICBpZF9kb3NzaWVyOiAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX21hcmNoZTogJChcIi5tYXJjaGVzXCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX3NvdXNtYXJjaGU6ICQoXCIuc291c21hcmNoZVwiKS52YWwoKSxcclxuICAgICAgfSlcclxuICAgIClcclxuICAgIC5sb2FkKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VhcmNoM1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIGFsZXJ0KClyZXBvcnRpbmdfcHJvamV0X2RhdGFcclxuICAvKiQuZWFjaCgkKHRoaXMpLmZpbmQoXCI6c2VsZWN0ZWRcIiksIGZ1bmN0aW9uIChpLCBpdGVtKSB7IFxyXG4gICAgdG90QW10ICs9ICQoaXRlbSkuZGF0YShcInByaWNlXCIpO1xyXG4gIH0pOyovXHJcbiAgdmFyIGZycyA9IFtdO1xyXG4gICQuZWFjaCgkKCcuc2VsZWN0Ml9kZW1vXzcnKS5maW5kKFwiOnNlbGVjdGVkXCIpLCBmdW5jdGlvbiAoaSwgaXRlbSkgeyBcclxuICAgIC8vY29uc29sZS5sb2coaXRlbSlcclxuICAgIGZycy5wdXNoKFskKGl0ZW0pLmF0dHIoJ3ZhbHVlJyksJChpdGVtKS5hdHRyKCdzb2NpZXRlJyldKTtcclxuICB9KTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfYWNoYXRcIix7XHJcbiAgICAgIGRvY3VtZW50OiAkKFwiLnNlbGVjdDJfZGVtb184XCIpLnZhbCgpLFxyXG4gICAgICBmb3Vybmlzc2V1cjogZnJzLFxyXG4gICAgICBkb3NzaWVyOiAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbCgpLFxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgYWpheDoxXHJcbiAgICB9KSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICBTaG93Rm9ybUVycm9yc1dpdGhQYXJhbShcImZvcm1fbGllblwiLCBudWxsLCByZXN1bHQuZXJyb3JzKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB3aW5kb3cub3BlbihSb3V0aW5nLmdlbmVyYXRlKFwicmVwb3J0aW5nX2FjaGF0XCIse1xyXG4gICAgICAgIHByb2pldDogJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoKSxcclxuICAgICAgICBzb3VzUHJvamV0OiAkKFwiLnNlbGVjdDJfZGVtb182XCIpLnZhbCgpLFxyXG4gICAgICAgIGRvc3NpZXI6ICQoXCIuc2VsZWN0Ml9kZW1vXzRcIikudmFsKCksXHJcbiAgICAgICAgbWFyY2hlOiAkKFwiLm1hcmNoZXNcIikudmFsKCksXHJcbiAgICAgICAgc291c01hcmNoZTogJChcIi5zb3VzbWFyY2hlXCIpLnZhbCgpLFxyXG4gICAgICAgIGZvdXJuaXNzZXVyOiBmcnMsXHJcbiAgICAgICAgZG9jdW1lbnQ6ICQoXCIuc2VsZWN0Ml9kZW1vXzhcIikudmFsKCksXHJcbiAgICAgICAgZG9jdW1lbnRQYXJlbnQ6JChcIi5zZWxlY3QyX2RlbW9fOCA6c2VsZWN0ZWRcIikucGFyZW50KCkuYXR0cigndHlwZScpLFxyXG4gICAgICAgIGRhdGVEZWJ1dDogJChcIi5kYXRlRGVidXRcIikudmFsKCksXHJcbiAgICAgICAgZGF0ZUZpbjogJChcIi5kYXRlRmluXCIpLnZhbCgpLFxyXG4gICAgICB9KSlcclxuICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VhcmNoMlwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIGFsZXJ0KClyZXBvcnRpbmdfcHJvamV0X2RhdGFcclxuXHJcbiAgdGFibGUyLmFqYXhcclxuICAgIC51cmwoXHJcbiAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcmVmZXJlbmNlX2RhdGFcIiwge1xyXG4gICAgICAgIGlkX3Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoKSxcclxuICAgICAgICBpZF9zb3VzX3Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fNlwiKS52YWwoKSxcclxuICAgICAgICBpZF9kb3NzaWVyOiAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX21hcmNoZTogJChcIi5tYXJjaGVzXCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX3NvdXNtYXJjaGU6ICQoXCIuc291c21hcmNoZVwiKS52YWwoKSxcclxuICAgICAgfSlcclxuICAgIClcclxuICAgIC5sb2FkKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIucnNlYXJjaFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICAvLyQoXCIjZm9ybV9hbm5lZVwiKS52YWwoMSkudHJpZ2dlcignY2hhbmdlLnNlbGVjdDInKTtcclxuICAvLyQoJyNmb3JtX2FubmVlIG9wdGlvbjplcSgwKScpLnByb3AoJ3NlbGVjdGVkJyx0cnVlKTtcclxuICAvLyQoJyNmb3JtX2FubmVlJykudmFsKCQoJyNmb3JtX2FubmVlIG9wdGlvbjpmaXJzdC1jaGlsZCcpLnZhbCgpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcbiAgJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICQoXCIuc2VsZWN0Ml9kZW1vXzVcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgJChcIi5zb3VNYXJjaGVcIikuaGlkZSgpO1xyXG4gICQoXCIubWFyY2hlXCIpLmhpZGUoKTtcclxuICAkKFwiLnByb2pldFwiKS5oaWRlKCk7XHJcbiAgJChcIi5zZWwyXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIHRhYmxlLmFqYXgudXJsKFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcHJvamV0X2RhdGFcIikpLmxvYWQoKTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnJzZWFyY2gyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIC8vJChcIiNmb3JtX2FubmVlXCIpLnZhbCgxKS50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpO1xyXG4gIC8vJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmVxKDApJykucHJvcCgnc2VsZWN0ZWQnLHRydWUpO1xyXG4gIC8vJCgnI2Zvcm1fYW5uZWUnKS52YWwoJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmZpcnN0LWNoaWxkJykudmFsKCkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICQoXCIuc2VsZWN0Ml9kZW1vXzRcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgJChcIi5zZWxlY3QyX2RlbW9fNVwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAkKFwiLnNvdU1hcmNoZVwiKS5oaWRlKCk7XHJcbiAgJChcIi5tYXJjaGVcIikuaGlkZSgpO1xyXG4gICQoXCIucHJvamV0XCIpLmhpZGUoKTtcclxuICAkKFwiLnNlbDJcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgdGFibGUyLmFqYXgudXJsKFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcmVmZXJlbmNlX2RhdGFcIikpLmxvYWQoKTtcclxufSk7XHJcblxyXG52YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZS1zaG93XCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicmVwb3J0aW5nX3Byb2pldF9kYXRhXCIpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIzJVwiLCBzZWFyY2hhYmxlOiB0cnVlLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcblxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB2aXNpYmxlOiBmYWxzZSwgdGFyZ2V0czogMTIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB2aXNpYmxlOiBmYWxzZSwgdGFyZ2V0czogMTMgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB2aXNpYmxlOiBmYWxzZSwgdGFyZ2V0czogMTQgfSxcclxuICAgIHtcclxuICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgb3JkZXJhYmxlOiB0cnVlIC8qY2xhc3NOYW1lOiBcImNvbG9ubmUtZ3Jhc1wiKi8sXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICB0YXJnZXRzOiAxNSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgIG9yZGVyYWJsZTogdHJ1ZSAvKmNsYXNzTmFtZTogXCJjb2xvbm5lLWdyYXNcIiovLFxyXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgdGFyZ2V0czogMTYsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZXh0ZW5kOiBcImV4Y2VsXCIsXHJcbiAgICAgIGV4cG9ydE9wdGlvbnM6IHtcclxuICAgICAgICBjb2x1bW5zOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgcm93czogXCI6dmlzaWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxuICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICBmb290ZXJDYWxsYmFjazogZnVuY3Rpb24gKHJvdywgZGF0YSwgc3RhcnQsIGVuZCwgZGlzcGxheSkge1xyXG4gICAgJChcIi5jZW50ZXItY2xhc3NcIikucmVtb3ZlKCk7XHJcbiAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgZGF0YTtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICB2YXIgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgPyBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDFcclxuICAgICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBpXHJcbiAgICAgICAgOiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdG90YWw0ID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNiwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuICAgICQoYXBpLmNvbHVtbig2KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNC50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgdG90YWw1ID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNywgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuICAgICQoYXBpLmNvbHVtbig3KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNS50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgdG90YWw2ID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oOCwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuICAgICQoYXBpLmNvbHVtbig4KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNi50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgdG90YWw3ID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oOSwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuICAgICQoYXBpLmNvbHVtbig5KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNy50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICAgKTtcclxuICB9LFxyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFswLCA2LCA3LCA4LCA5LCAxMCwgMTFdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbMywgNV0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KFxyXG4gICAgYXBpLFxyXG4gICAgWzEyLCAxMywgMTQsIDE1LCAxNiwgMSwgMiwgNF0sXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgW10sIFtdKTtcclxuXHJcbiAgdmFyIGludFZhbCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGkgPT09IFwic3RyaW5nXCJcclxuICAgICAgPyBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDFcclxuICAgICAgOiB0eXBlb2YgaSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICA/IGlcclxuICAgICAgOiAwO1xyXG4gIH07XHJcblxyXG4gICQoXCIuY2VudGVyLWNsYXNzXCIpLnJlbW92ZSgpO1xyXG5cclxuICB2YXIgdG90YWw0ID0gYXBpXHJcbiAgICAuY29sdW1uKDYpXHJcbiAgICAuZGF0YSgpXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICB9LCAwKTtcclxuICAkKGFwaS5jb2x1bW4oNiwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgJzxjZW50ZXIgY2xhc3M9XCJjZW50ZXItY2xhc3NcIj5Ub3RhbCA6ICcgKyB0b3RhbDQudG9GaXhlZCgyKSArIFwiPC9jZW50ZXI+XCJcclxuICApO1xyXG5cclxuICB2YXIgdG90YWw1ID0gYXBpXHJcbiAgICAuY29sdW1uKDcsIHsgcGFnZTogXCJjdXJyZW50XCIgfSlcclxuICAgIC5kYXRhKClcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgIH0sIDApO1xyXG4gICQoYXBpLmNvbHVtbig3KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgJzxjZW50ZXIgY2xhc3M9XCJjZW50ZXItY2xhc3NcIj5Ub3RhbCA6ICcgKyB0b3RhbDUudG9GaXhlZCgyKSArIFwiPC9jZW50ZXI+XCJcclxuICApO1xyXG5cclxuICB2YXIgdG90YWw2ID0gYXBpXHJcbiAgICAuY29sdW1uKDgsIHsgcGFnZTogXCJjdXJyZW50XCIgfSlcclxuICAgIC5kYXRhKClcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgIH0sIDApO1xyXG4gICQoYXBpLmNvbHVtbig4KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgJzxjZW50ZXIgY2xhc3M9XCJjZW50ZXItY2xhc3NcIj5Ub3RhbCA6ICcgKyB0b3RhbDYudG9GaXhlZCgyKSArIFwiPC9jZW50ZXI+XCJcclxuICApO1xyXG5cclxuICB2YXIgdG90YWw3ID0gYXBpXHJcbiAgICAuY29sdW1uKDksIHsgcGFnZTogXCJjdXJyZW50XCIgfSlcclxuICAgIC5kYXRhKClcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgIH0sIDApO1xyXG4gICQoYXBpLmNvbHVtbig5KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgJzxjZW50ZXIgY2xhc3M9XCJjZW50ZXItY2xhc3NcIj5Ub3RhbCA6ICcgKyB0b3RhbDcudG9GaXhlZCgyKSArIFwiPC9jZW50ZXI+XCJcclxuICApO1xyXG59KTtcclxuXHJcbnZhciB0YWJsZTIgPSAkKFwiI2RhdGF0YWJsZS1zaG93MlwiKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydGluZ19yZWZlcmVuY2VfZGF0YVwiKSArIGxvY2F0aW9uLnNlYXJjaCwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICB0eXBlOiBcImdldFwiLFxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMyVcIiwgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxMSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxMiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxMyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxNCB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxNSB9LFxyXG4gIF0sXHJcbiAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZXh0ZW5kOiBcImV4Y2VsXCIsXHJcbiAgICAgIGV4cG9ydE9wdGlvbnM6IHtcclxuICAgICAgICBjb2x1bW5zOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgcm93czogXCI6dmlzaWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxuICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICBmb290ZXJDYWxsYmFjazogZnVuY3Rpb24gKHJvdywgZGF0YSwgc3RhcnQsIGVuZCwgZGlzcGxheSkge1xyXG4gICAgJChcIi5jZW50ZXItY2xhc3NcIikucmVtb3ZlKCk7XHJcbiAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgZGF0YTtcclxuICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuJChcIi50eXBlX2NvbW1hbmRlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtdHlwZVwiKSA9PSBcIlBSSlwiIHx8ICQodGhpcykudmFsKCkgPT0gNSkge1xyXG4gICAgICAkKFwiLnByXCIpLnRvZ2dsZUNsYXNzKFwibm9uZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnByXCIpLmFkZENsYXNzKFwibm9uZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcIi50eXBlX2NvbW1hbmRlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIHR5cGUgPSAkKFwib3B0aW9uOnNlbGVjdGVkXCIsIHRoaXMpLmF0dHIoXCJkYXRhLXR5cGVcIik7XHJcbiAgJChcIi5ibG9jX2Nob2l4XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gIGlmICh0eXBlID09IFwiQ01EXCIpIHtcclxuICAgICAgJChcIi5ibG9jX3JlZmVyZW5jZV9kZXZpc19jbGllbnRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PSBcIk1SXCIpIHtcclxuICAgICAgJChcIi5ibG9jX21hcmNoZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09IFwiSU5WXCIpIHtcclxuICAgICAgJChcIi5ibG9jX2ludmVzdGlzc2VtZW50XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbnRhYmxlMi5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMCwgNiwgNywgOCwgOSwgMTBdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbMywgNV0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KFxyXG4gICAgYXBpLFxyXG4gICAgWzExLCAxMiwgMTMsIDE0LCAxNSwgMSwgMiwgNF0sXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgW10sIFtdKTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNoYW5nZVwiLCBcIi5tYXJjaGVzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICBnZXRTdWJTZWxlY3QoXCIuc291c21hcmNoZVwiLCBmYWxzZSwgXCJcIik7XHJcbiAgLy8gU2ltdWxhdGUgZm9ybSBkYXRhLCBidXQgb25seSBpbmNsdWRlIHRoZSBzZWxlY3RlZCBzcG9ydCB2YWx1ZS5cclxuICB2YXIgZGF0YSA9IHt9O1xyXG4gIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAvLyAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy9hbGVydCgkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcbiAgLy8gIGNvbnNvbGUubG9nKCRmb3JtLmF0dHIoJ21ldGhvZCcpKTtcclxuICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6ICRmb3JtLmF0dHIoXCJhY3Rpb25cIiksXHJcbiAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgIGdldFN1YlNlbGVjdChcIi5zb3VzbWFyY2hlXCIsIHRydWUsIGh0bWwpO1xyXG4gICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAvLyQoJy5zb3VzbWFyY2hlJykucGFyZW50KCkuZmluZCgnLnNlbGVjdDIgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiJykubm90KCc6Zmlyc3QnKS5oaWRlKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNoYW5nZVwiLCBcIiNmb3JtX3Byb2pldFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy9hbGVydCgkKHRoaXMpLnZhbCgpKTtcclxuICBnZXRTdWJTZWxlY3QoXCIjZm9ybV9zb3VzX3Byb2pldFwiLCBmYWxzZSwgXCJcIiwgXCJcIik7XHJcbiAgdmFyICR0aGlzID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICB2YXIgZGF0YSA9IHt9O1xyXG5cclxuICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJzb3VzX3Byb2pldF9zZWxlY3RcIiwge1xyXG4gICAgICBpZDogJCh0aGlzKS52YWwoKSA9PSBcIlwiIHx8ICQodGhpcykudmFsKCkgPT09IG51bGwgPyAtMSA6ICQodGhpcykudmFsKCksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNob2l4IHNvdXMgcHJvamV0XCIsXHJcbiAgICB9KSxcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgJChcIiNmb3JtX3NvdXNfcHJvamV0XCIpLmh0bWwocmVzdWx0LmRhdGEpO1xyXG4gICAgICBnZXRTdWJTZWxlY3QoXCIjZm9ybV9zb3VzX3Byb2pldFwiLCB0cnVlLCBcIlwiLCBcIlwiKTtcclxuICAgICAgJChcIi5zZWxlY3QyX2RlbW9fNlwiKS5zZWxlY3QyKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIuZHluYW1pcXVlX2RvY3VtZW50XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gY29uc29sZS5sb2coICQodGhpcykuYXR0cignZGF0YS1pZCcpKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJyYXBvcnRfZG9jdW1lbnRfZHluYW1pcXVlX2Zvcm1cIiksXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgfSwgNjAwKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI29wZXJhdGlvblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICQoXCIuYWxsLC5yZWNlcHRpb24gLCAuZmFjdHVyZSAsIC5yZWdsZW1lbnRcIikuYWRkQ2xhc3MoXCJyYXBvcnQtaGlkZVwiKTtcclxuICAkKFwiI2V4YW1wbGUyXCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcclxuICAkKFwiI2V4YW1wbGUzXCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcclxuICAkKFwiLm9ub2Zmc3dpdGNoLWNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcImNtZFwiKSB7XHJcbiAgICAkKFwiLmFsbCwucmVjZXB0aW9uICwgLmZhY3R1cmUgLCAucmVnbGVtZW50XCIpLnRvZ2dsZUNsYXNzKFwicmFwb3J0LWhpZGVcIik7XHJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLnZhbCgpID09IFwicmVjXCIpIHtcclxuICAgICQoXCIuYWxsLC5mYWN0dXJlICwgLnJlZ2xlbWVudFwiKS50b2dnbGVDbGFzcyhcInJhcG9ydC1oaWRlXCIpO1xyXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS52YWwoKSA9PSBcImZhY1wiKSB7XHJcbiAgICAkKFwiLmFsbCwucmVnbGVtZW50XCIpLnRvZ2dsZUNsYXNzKFwicmFwb3J0LWhpZGVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIub25vZmZzd2l0Y2gtY2hlY2tib3hcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCQoXCIjZXhhbXBsZTFcIikucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICQoXCIjZXhhbXBsZTJcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gICQoXCIjZXhhbXBsZTNcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG5cclxuICBpZiAoJChcIiNleGFtcGxlMVwiKS5wcm9wKFwiY2hlY2tlZFwiKSA9PSBmYWxzZSkge1xyXG4gICAgJChcIiNleGFtcGxlMlwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAkKFwiI2V4YW1wbGUzXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICB9XHJcbiAgaWYgKCQoXCIjZXhhbXBsZTJcIikucHJvcChcImNoZWNrZWRcIikgPT0gZmFsc2UpIHtcclxuICAgIC8vICQoXCIjZXhhbXBsZTJcIikuYXR0cihcImRpc2FibGVkXCIsdHJ1ZSk7XHJcbiAgICAkKFwiI2V4YW1wbGUzXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcblxyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInJhcG9ydF9nZXRfYWxsX2J5X2ZpbHRyZVwiKSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJC5mbi50b2dnbGVDaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy50YWdOYW1lID09PSBcIklOUFVUXCIpIHtcclxuICAgICQodGhpcykucHJvcChcImNoZWNrZWRcIiwgISQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSk7XHJcbiAgfVxyXG59O1xyXG4iLCJ2YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyByZWR1Y2UsIHJlZHVjZVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfUklHSFQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhcmd1bWVudHNMZW5ndGgsIG1lbW8pIHtcbiAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBpbmRleCA9IElTX1JJR0hUID8gbGVuZ3RoIC0gMSA6IDA7XG4gICAgdmFyIGkgPSBJU19SSUdIVCA/IC0xIDogMTtcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoIDwgMikgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgaWYgKElTX1JJR0hUID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgIHRocm93ICRUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICg7SVNfUklHSFQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBzZWxmW2luZGV4XSwgaW5kZXgsIE8pO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZVxuICBsZWZ0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlcmlnaHRcbiAgcmlnaHQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsIi8qIGdsb2JhbCBCdW4gLS0gRGVubyBjYXNlICovXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBCdW4gPT0gJ2Z1bmN0aW9uJyAmJiBCdW4gJiYgdHlwZW9mIEJ1bi52ZXJzaW9uID09ICdzdHJpbmcnO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3NvZihnbG9iYWwucHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBFTkdJTkVfSVNfQlVOID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4nKTtcbnZhciBVU0VSX0FHRU5UID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuLy8gZGlydHkgSUU5LSBhbmQgQnVuIDAuMy4wLSBjaGVja3NcbnZhciBXUkFQID0gL01TSUUgLlxcLi8udGVzdChVU0VSX0FHRU5UKSB8fCBFTkdJTkVfSVNfQlVOICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZXJzaW9uID0gZ2xvYmFsLkJ1bi52ZXJzaW9uLnNwbGl0KCcuJyk7XG4gIHJldHVybiB2ZXJzaW9uLmxlbmd0aCA8IDMgfHwgdmVyc2lvblswXSA9PSAwICYmICh2ZXJzaW9uWzFdIDwgMyB8fCB2ZXJzaW9uWzFdID09IDMgJiYgdmVyc2lvblsyXSA9PSAwKTtcbn0pKCk7XG5cbi8vIElFOS0gLyBCdW4gMC4zLjAtIHNldFRpbWVvdXQgLyBzZXRJbnRlcnZhbCAvIHNldEltbWVkaWF0ZSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL292ZW4tc2gvYnVuL2lzc3Vlcy8xNjMzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGhhc1RpbWVBcmcpIHtcbiAgdmFyIGZpcnN0UGFyYW1JbmRleCA9IGhhc1RpbWVBcmcgPyAyIDogMTtcbiAgcmV0dXJuIFdSQVAgPyBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKSA+IGZpcnN0UGFyYW1JbmRleDtcbiAgICB2YXIgZm4gPSBpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpO1xuICAgIHZhciBwYXJhbXMgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgZmlyc3RQYXJhbUluZGV4KSA6IFtdO1xuICAgIHZhciBjYWxsYmFjayA9IGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGZuLCB0aGlzLCBwYXJhbXMpO1xuICAgIH0gOiBmbjtcbiAgICByZXR1cm4gaGFzVGltZUFyZyA/IHNjaGVkdWxlcihjYWxsYmFjaywgdGltZW91dCkgOiBzY2hlZHVsZXIoY2FsbGJhY2spO1xuICB9IDogc2NoZWR1bGVyO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGVhdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyAkUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXN1bHQgKz0gc3RyO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxuLy8gYHRoaXNOdW1iZXJWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRoaXNudW1iZXJ2YWx1ZVxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcygxLjAudmFsdWVPZik7XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHJlZHVjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1yZWR1Y2UnKS5sZWZ0O1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIENIUk9NRV9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZScpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3JlZHVjZScpO1xuLy8gQ2hyb21lIDgwLTgyIGhhcyBhIGNyaXRpY2FsIGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTA0OTk4MlxudmFyIENIUk9NRV9CVUcgPSAhSVNfTk9ERSAmJiBDSFJPTUVfVkVSU0lPTiA+IDc5ICYmIENIUk9NRV9WRVJTSU9OIDwgODM7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIVNUUklDVF9NRVRIT0QgfHwgQ0hST01FX0JVRyB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBsZW5ndGgsIGxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xudmFyICRyZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgcmVwZWF0ID0gdW5jdXJyeVRoaXMoJHJlcGVhdCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgbmF0aXZlVG9GaXhlZCA9IHVuY3VycnlUaGlzKDEuMC50b0ZpeGVkKTtcblxudmFyIHBvdyA9IGZ1bmN0aW9uICh4LCBuLCBhY2MpIHtcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xufTtcblxudmFyIGxvZyA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciBuID0gMDtcbiAgdmFyIHgyID0geDtcbiAgd2hpbGUgKHgyID49IDQwOTYpIHtcbiAgICBuICs9IDEyO1xuICAgIHgyIC89IDQwOTY7XG4gIH1cbiAgd2hpbGUgKHgyID49IDIpIHtcbiAgICBuICs9IDE7XG4gICAgeDIgLz0gMjtcbiAgfSByZXR1cm4gbjtcbn07XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChkYXRhLCBuLCBjKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgYzIgPSBjO1xuICB3aGlsZSAoKytpbmRleCA8IDYpIHtcbiAgICBjMiArPSBuICogZGF0YVtpbmRleF07XG4gICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcbiAgfVxufTtcblxudmFyIGRpdmlkZSA9IGZ1bmN0aW9uIChkYXRhLCBuKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBjID0gMDtcbiAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgIGMgKz0gZGF0YVtpbmRleF07XG4gICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgYyA9IChjICUgbikgKiAxZTc7XG4gIH1cbn07XG5cbnZhciBkYXRhVG9TdHJpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgaW5kZXggPSA2O1xuICB2YXIgcyA9ICcnO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgaWYgKHMgIT09ICcnIHx8IGluZGV4ID09PSAwIHx8IGRhdGFbaW5kZXhdICE9PSAwKSB7XG4gICAgICB2YXIgdCA9ICRTdHJpbmcoZGF0YVtpbmRleF0pO1xuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQoJzAnLCA3IC0gdC5sZW5ndGgpICsgdDtcbiAgICB9XG4gIH0gcmV0dXJuIHM7XG59O1xuXG52YXIgRk9SQ0VEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlVG9GaXhlZCgwLjAwMDA4LCAzKSAhPT0gJzAuMDAwJyB8fFxuICAgIG5hdGl2ZVRvRml4ZWQoMC45LCAwKSAhPT0gJzEnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgxLjI1NSwgMikgIT09ICcxLjI1JyB8fFxuICAgIG5hdGl2ZVRvRml4ZWQoMTAwMDAwMDAwMDAwMDAwMDEyOC4wLCAwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgbmF0aXZlVG9GaXhlZCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5wcm90b3R5cGUudG9maXhlZFxuJCh7IHRhcmdldDogJ051bWJlcicsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xuICAgIHZhciBmcmFjdERpZ2l0cyA9IHRvSW50ZWdlck9ySW5maW5pdHkoZnJhY3Rpb25EaWdpdHMpO1xuICAgIHZhciBkYXRhID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIHZhciBzaWduID0gJyc7XG4gICAgdmFyIHJlc3VsdCA9ICcwJztcbiAgICB2YXIgZSwgeiwgaiwgaztcblxuICAgIC8vIFRPRE86IEVTMjAxOCBpbmNyZWFzZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIGZyYWN0aW9uIGRpZ2l0cyB0byAxMDAsIG5lZWQgdG8gaW1wcm92ZSB0aGUgaW1wbGVtZW50YXRpb25cbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93ICRSYW5nZUVycm9yKCdJbmNvcnJlY3QgZnJhY3Rpb24gZGlnaXRzJyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiAkU3RyaW5nKG51bWJlcik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBqID0gZnJhY3REaWdpdHM7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseShkYXRhLCAxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShkYXRhLCBwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IGopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxLCAxKTtcbiAgICAgICAgZGl2aWRlKGRhdGEsIDIpO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMSA8PCAtZSwgMCk7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKSArIHJlcGVhdCgnMCcsIGZyYWN0RGlnaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaWduICsgKGsgPD0gZnJhY3REaWdpdHNcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMgLSBrKSArIHJlc3VsdFxuICAgICAgICA6IHN0cmluZ1NsaWNlKHJlc3VsdCwgMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHN0cmluZ1NsaWNlKHJlc3VsdCwgayAtIGZyYWN0RGlnaXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwic291cmNlUm9vdCI6IiJ9