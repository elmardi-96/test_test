(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tr_reporting"],{

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

/***/ "./assets/js/components/tresorerie/reporting.js":
/*!******************************************************!*\
  !*** ./assets/js/components/tresorerie/reporting.js ***!
  \******************************************************/
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
  placeholder: "Choix marche",
  allowClear: false
});
$(".select2_demo_10").select2({
  placeholder: "Choix client",
  allowClear: false
});
//select2_demo_11
$(".select2_demo_11").select2({
  placeholder: "Choix pièce",
  allowClear: false
});
$(".select2_demo_12").select2({
  placeholder: "Choix compte bancaire",
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
  var clt = [];
  $.each($('.select2_demo_10').find(":selected"), function (i, item) {
    //console.log(item)
    clt.push([$(item).attr('value'), $(item).attr('societe')]);
  });
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_tresorie", {
      document: $(".select2_demo_8").val(),
      fournisseur: frs,
      dossier: $(".select2_demo_4").val(),
      ajax: 1
    }),
    success: function success(result) {
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_10__["ShowFormErrorsWithParam"])("form_lien", null, result.errors);
      } else {
        window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.generate("reporting_tresorie", {
          fournisseur: frs,
          client: clt,
          piece: $(".select2_demo_11").val(),
          compte: $(".select2_demo_12").val(),
          dossier: $(".select2_demo_4").val(),
          document: $(".select2_demo_8").val(),
          documentParent: $(".select2_demo_8 :selected").parent().attr('type'),
          dateDebut: $(".dateDebut").val(),
          dateFin: $(".dateFin").val(),
          dateFinDocAssos: $(".dateFinDocAssos").val(),
          dateDebutDocAssos: $(".dateDebutDocAssos").val()
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

},[["./assets/js/components/tresorerie/reporting.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL3JlcG9ydGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktcmVkdWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtYnVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmVkdWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLnRvLWZpeGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiU2hvd0Zvcm1FcnJvcnMiLCJzZWxlY3RvciIsImZvcm1fbmFtZSIsImVycm9ycyIsImlkIiwiaXNHcm91cGUiLCIkIiwicmVtb3ZlIiwialF1ZXJ5IiwiZWFjaCIsInZpb2xhdGlvbnMiLCJpIiwidmFsIiwiY29sdW1uTmFtZSIsIngiLCJwcm9wZXJ0eVBhdGgiLCJzZWFyY2giLCJzZXBhcmF0b3JzIiwiYXJyIiwic3BsaXQiLCJSZWdFeHAiLCJqb2luIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJwYXJlbnQiLCJhcHBlbmQiLCJ0aXRsZSIsIlNob3dGb3JtRXJyb3JzV2l0aFBhcmFtIiwib24iLCJlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZ2VuZXJhdGUiLCJmcnMiLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJ0b2FzdHIiLCJ3YXJuaW5nIiwidGltZU91dCIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0MiIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsImdldFN1YlNlbGVjdCIsIm15Y2xhc3MiLCJteWJvb2xlYW4iLCJteWNvbnRlbnQiLCJwcm9wIiwiaHRtbCIsImFycmF5IiwibCIsInJlcGxhY2VXaXRoIiwiZmFkZUluIiwiaGlkZSIsInRyaWdnZXIiLCJ0YWJsZSIsImlkX3Byb2pldCIsImlkX3NvdXNfcHJvamV0IiwiaWRfZG9zc2llciIsImlkX21hcmNoZSIsImlkX3NvdXNtYXJjaGUiLCJsb2FkIiwiaXRlbSIsInB1c2giLCJhdHRyIiwiY2x0IiwiZG9jdW1lbnQiLCJmb3Vybmlzc2V1ciIsImRvc3NpZXIiLCJvcGVuIiwiY2xpZW50IiwicGllY2UiLCJjb21wdGUiLCJkb2N1bWVudFBhcmVudCIsImRhdGVEZWJ1dCIsImRhdGVGaW4iLCJkYXRlRmluRG9jQXNzb3MiLCJkYXRlRGVidXREb2NBc3NvcyIsInRhYmxlMiIsIkRhdGFUYWJsZSIsImJlZm9yZVNlbmQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldHRpbmdzIiwianFYSFIiLCJhYm9ydCIsImRlZmVyUmVuZGVyIiwic3RhdGVTYXZlIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJvcmRlciIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJ3aWR0aCIsInNlYXJjaGFibGUiLCJ0YXJnZXRzIiwidmlzaWJsZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsInJlbG9hZCIsImV4dGVuZCIsImV4cG9ydE9wdGlvbnMiLCJyb3dzIiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwiZml4ZWRIZWFkZXIiLCJmb290ZXJDYWxsYmFjayIsInJvdyIsImRhdGEiLCJzdGFydCIsImVuZCIsImRpc3BsYXkiLCJhcGkiLCJpbnRWYWwiLCJyZXBsYWNlIiwidG90YWw0IiwiY29sdW1uIiwicGFnZSIsInJlZHVjZSIsImEiLCJiIiwiZm9vdGVyIiwidG9GaXhlZCIsInRvdGFsNSIsInRvdGFsNiIsInRvdGFsNyIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJ0b2dnbGVDbGFzcyIsImFkZENsYXNzIiwiY3NzIiwiJGZvcm0iLCJjbG9zZXN0IiwiJHRoaXMiLCJjbGljayIsIm1vZGFsIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHIiLCJkdGEiLCJGb3JtRGF0YSIsIkxhZGRhIiwiY3JlYXRlIiwicXVlcnlTZWxlY3RvciIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdG9wIiwiZXJyb3IiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JU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Q0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHFFQUFxRTtBQUN4RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJmaWxlIjoidHJfcmVwb3J0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcbiAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgIGpRdWVyeS5lYWNoKGVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHZhciB4ID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICBpZihpc0dyb3VwZSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IHg7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdcXFxcWycpICE9IC0xICYmIHguc2VhcmNoKCdcXFxcXScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JzID0gWydcXFxcXScsICdcXFxcWyddO1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdChuZXcgUmVnRXhwKHNlcGFyYXRvcnMuam9pbignfCcpKSk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeC5zZWFyY2goJ2RhdGEuJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coeClcclxuXHJcbi8qdsOpcmlmaWVyIHMnaWwgcydhZ2l0IGQndW5lIGZvcm11bGFpcmUgYXZlYyB1biBjaGFtcCB0eXBlIGZpbGUgKi9cclxuICAgICAgICBpZiAoIWpRdWVyeShcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gY29sdW1uTmFtZSArICdfZmlsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkKXtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lKTtcclxuICAgICAgICBpZiAoY29sdW1uTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKVxyXG4gICAgICAgICAgICBzZWxlY3Rvci5maW5kKFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzV2l0aFBhcmFtKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI1wiK3NlbGVjdG9yKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyBlcnJvcnMgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb25cIik7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qc1wiO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzXCI7XHJcbi8vU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW1cclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0gfSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5cclxuJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIudGVsZS1mcnNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCQoXCIuc2VsZS1mcnNcIikudmFsKCkpXHJcblxyXG4gIGlmICgkKFwiLnNlbGUtZnJzXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydF9ieV9mb3Vybmlzc2V1cl9hbGxcIiwge1xyXG4gICAgICBmcnM6ICQoXCIuc2VsZS1mcnNcIikudmFsKCksXHJcbiAgICB9KTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRfYnlfZm91cm5pc3NldXJfYWxsXCIsIHtcclxuICAgICAgICBmcnM6ICQoXCIuc2VsZS1mcnNcIikudmFsKCksXHJcbiAgICAgIH0pLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7fSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IHJlbnNlaWduZXIgdW4gZm91cm5pc3NldXJcIiwgXCJ3YXJuaW5nXCIsIHtcclxuICAgICAgdGltZU91dDogNDAwMCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzlcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggbWFyY2hlXCIsXHJcbiAgYWxsb3dDbGVhcjogZmFsc2UsXHJcbn0pO1xyXG4kKFwiLnNlbGVjdDJfZGVtb18xMFwiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBjbGllbnRcIixcclxuICBhbGxvd0NsZWFyOiBmYWxzZSxcclxufSk7XHJcbi8vc2VsZWN0Ml9kZW1vXzExXHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzExXCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkNob2l4IHBpw6hjZVwiLFxyXG4gIGFsbG93Q2xlYXI6IGZhbHNlLFxyXG59KTtcclxuJChcIi5zZWxlY3QyX2RlbW9fMTJcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggY29tcHRlIGJhbmNhaXJlXCIsXHJcbiAgYWxsb3dDbGVhcjogZmFsc2UsXHJcbn0pO1xyXG4kKFwiLnNlbGVjdDJfZGVtb18zXCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkNob2l4IHByb2pldFwiLFxyXG4gIGFsbG93Q2xlYXI6IHRydWUsXHJcbn0pO1xyXG4kKFwiLnNlbGVjdDJfZGVtb180XCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkNob2l4IGRvc3NpZXJcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzZcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggc291cyBwcm9qZXRcIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzVcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggVHlwZVwiLFxyXG4gIGFsbG93Q2xlYXI6IHRydWUsXHJcbn0pO1xyXG5cclxuJChcIi5zZWxlY3QyX2RlbW9fN1wiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJDaG9peCBmb3Vybmlzc2V1clwiLFxyXG4gIGFsbG93Q2xlYXI6IHRydWUsXHJcbn0pO1xyXG4kKFwiLnNlbGVjdDJfZGVtb184XCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkNob2l4IERvY3VtZW50c1wiLFxyXG4gIGFsbG93Q2xlYXI6IHRydWUsXHJcbn0pO1xyXG5mdW5jdGlvbiBnZXRTdWJTZWxlY3QobXljbGFzcywgbXlib29sZWFuLCBteWNvbnRlbnQpIHtcclxuICAvL2NvbnNvbGUubG9nKG15Y29udGVudClcclxuICBpZiAobXlib29sZWFuKSB7XHJcbiAgICAkKG15Y2xhc3MpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQobXljbGFzcykucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgJChteWNsYXNzKVxyXG4gICAgICAucGFyZW50KClcclxuICAgICAgLmZpbmQoXCIuc2VsZWN0MiAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93XCIpXHJcbiAgICAgIC5odG1sKCc8aSBjbGFzcz1cImktbG9hZCBmYSBmYS1yZWZyZXNoXCI+PC9pPicpO1xyXG4gIH1cclxuICBpZiAobXljb250ZW50KSB7XHJcbiAgICB2YXIgYXJyYXkgPSBteWNsYXNzLnNwbGl0KFwiLFwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJChteWNvbnRlbnQpLmZpbmQoYXJyYXlbaV0pKTtcclxuICAgICAgJChhcnJheVtpXSkucmVwbGFjZVdpdGgoJChteWNvbnRlbnQpLmZpbmQoYXJyYXlbaV0pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI2Zvcm1fdHlwZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy9hbGVydCgkKHRoaXMpLnZhbCgpKVxyXG4gIGlmICgkKHRoaXMpLnZhbCgpID09IFwicHJvamV0XCIpIHtcclxuICAgICQoXCIucHJvamV0XCIpLmZhZGVJbigpO1xyXG4gICAgJChcIi5zb3VNYXJjaGVcIikuaGlkZSgpO1xyXG4gICAgJChcIi5tYXJjaGVcIikuaGlkZSgpO1xyXG4gICAgJChcIi5zZWwyXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH1cclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIm1hcmNoZVwiKSB7XHJcbiAgICAvL2FsZXJ0KClcclxuICAgICQoXCIuc2VsZWN0Ml9kZW1vXzNcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAkKFwiLnByb2pldFwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLnNvdU1hcmNoZVwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmZhZGVJbigpO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICQoXCIuc2VsZWN0Ml9kZW1vXzRcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAkKFwiLnNlbGVjdDJfZGVtb181XCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChcIi5zb3VNYXJjaGVcIikuaGlkZSgpO1xyXG4gICAgJChcIi5tYXJjaGVcIikuaGlkZSgpO1xyXG4gICAgJChcIi5wcm9qZXRcIikuaGlkZSgpO1xyXG4gICAgJChcIi5zZWwyXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiwgXCIjZm9ybV90eXBlMlwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy9hbGVydCgkKHRoaXMpLnZhbCgpKVxyXG4gIGlmICgkKHRoaXMpLnZhbCgpID09IFwicHJvamV0XCIpIHtcclxuICAgICQoXCIucHJvamV0XCIpLmZhZGVJbigpO1xyXG4gICAgJChcIi5zb3VNYXJjaGVcIikuaGlkZSgpO1xyXG4gICAgJChcIi5tYXJjaGVcIikuaGlkZSgpO1xyXG4gICAgJChcIi5zZWwyXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH1cclxuICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIm1hcmNoZVwiKSB7XHJcbiAgICAvL2FsZXJ0KClcclxuICAgICQoXCIuc2VsZWN0Ml9kZW1vXzNcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAkKFwiLnByb2pldFwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLnNvdU1hcmNoZVwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmZhZGVJbigpO1xyXG4gIH1cclxuIGlmKCQodGhpcykudmFsKCkgPT0gXCJcIil7XHJcbiAgJChcIi5zZWwyXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICQoXCIuc291TWFyY2hlXCIpLmhpZGUoKTtcclxuICAkKFwiLm1hcmNoZVwiKS5oaWRlKCk7XHJcbiAgJChcIi5wcm9qZXRcIikuaGlkZSgpO1xyXG4gIFxyXG4gfVxyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VhcmNoXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gYWxlcnQoKXJlcG9ydGluZ19wcm9qZXRfZGF0YVxyXG4gIC8vYWxlcnQoJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoKSk7XHJcbiAgdGFibGUuYWpheFxyXG4gICAgLnVybChcclxuICAgICAgUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydGluZ19wcm9qZXRfZGF0YVwiLCB7XHJcbiAgICAgICAgaWRfcHJvamV0OiAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX3NvdXNfcHJvamV0OiAkKFwiLnNlbGVjdDJfZGVtb182XCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX2Rvc3NpZXI6ICQoXCIuc2VsZWN0Ml9kZW1vXzRcIikudmFsKCksXHJcbiAgICAgICAgaWRfbWFyY2hlOiAkKFwiLm1hcmNoZXNcIikudmFsKCksXHJcbiAgICAgICAgaWRfc291c21hcmNoZTogJChcIi5zb3VzbWFyY2hlXCIpLnZhbCgpLFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICAgLmxvYWQoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zZWFyY2gzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gYWxlcnQoKXJlcG9ydGluZ19wcm9qZXRfZGF0YVxyXG4gIC8qJC5lYWNoKCQodGhpcykuZmluZChcIjpzZWxlY3RlZFwiKSwgZnVuY3Rpb24gKGksIGl0ZW0pIHsgXHJcbiAgICB0b3RBbXQgKz0gJChpdGVtKS5kYXRhKFwicHJpY2VcIik7XHJcbiAgfSk7Ki9cclxuICB2YXIgZnJzID0gW107XHJcbiAgJC5lYWNoKCQoJy5zZWxlY3QyX2RlbW9fNycpLmZpbmQoXCI6c2VsZWN0ZWRcIiksIGZ1bmN0aW9uIChpLCBpdGVtKSB7IFxyXG4gICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgZnJzLnB1c2goWyQoaXRlbSkuYXR0cigndmFsdWUnKSwkKGl0ZW0pLmF0dHIoJ3NvY2lldGUnKV0pO1xyXG4gIH0pO1xyXG4gIHZhciBjbHQgPSBbXTtcclxuICAkLmVhY2goJCgnLnNlbGVjdDJfZGVtb18xMCcpLmZpbmQoXCI6c2VsZWN0ZWRcIiksIGZ1bmN0aW9uIChpLCBpdGVtKSB7IFxyXG4gICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgY2x0LnB1c2goWyQoaXRlbSkuYXR0cigndmFsdWUnKSwkKGl0ZW0pLmF0dHIoJ3NvY2lldGUnKV0pO1xyXG4gIH0pO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInJlcG9ydGluZ190cmVzb3JpZVwiLHtcclxuICAgICAgZG9jdW1lbnQ6ICQoXCIuc2VsZWN0Ml9kZW1vXzhcIikudmFsKCksXHJcbiAgICAgIGZvdXJuaXNzZXVyOiBmcnMsXHJcbiAgICAgIGRvc3NpZXI6ICQoXCIuc2VsZWN0Ml9kZW1vXzRcIikudmFsKCksXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICBhamF4OjFcclxuICAgIH0pLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgIFNob3dGb3JtRXJyb3JzV2l0aFBhcmFtKFwiZm9ybV9saWVuXCIsIG51bGwsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHdpbmRvdy5vcGVuKFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfdHJlc29yaWVcIix7XHJcbiAgICAgICAgZm91cm5pc3NldXI6IGZycyxcclxuICAgICAgICBjbGllbnQ6Y2x0LFxyXG4gICAgICAgIHBpZWNlOiQoXCIuc2VsZWN0Ml9kZW1vXzExXCIpLnZhbCgpLFxyXG4gICAgICAgIGNvbXB0ZTokKFwiLnNlbGVjdDJfZGVtb18xMlwiKS52YWwoKSxcclxuICAgICAgICBkb3NzaWVyOiAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbCgpLFxyXG4gICAgICAgIGRvY3VtZW50OiAkKFwiLnNlbGVjdDJfZGVtb184XCIpLnZhbCgpLFxyXG4gICAgICAgIGRvY3VtZW50UGFyZW50OiQoXCIuc2VsZWN0Ml9kZW1vXzggOnNlbGVjdGVkXCIpLnBhcmVudCgpLmF0dHIoJ3R5cGUnKSxcclxuICAgICAgICBkYXRlRGVidXQ6ICQoXCIuZGF0ZURlYnV0XCIpLnZhbCgpLFxyXG4gICAgICAgIGRhdGVGaW46ICQoXCIuZGF0ZUZpblwiKS52YWwoKSxcclxuICAgICAgICBkYXRlRmluRG9jQXNzb3M6JChcIi5kYXRlRmluRG9jQXNzb3NcIikudmFsKCksXHJcbiAgICAgICAgZGF0ZURlYnV0RG9jQXNzb3M6JChcIi5kYXRlRGVidXREb2NBc3Nvc1wiKS52YWwoKVxyXG4gICAgICB9KSlcclxuICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VhcmNoMlwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIGFsZXJ0KClyZXBvcnRpbmdfcHJvamV0X2RhdGFcclxuXHJcbiAgdGFibGUyLmFqYXhcclxuICAgIC51cmwoXHJcbiAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcmVmZXJlbmNlX2RhdGFcIiwge1xyXG4gICAgICAgIGlkX3Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoKSxcclxuICAgICAgICBpZF9zb3VzX3Byb2pldDogJChcIi5zZWxlY3QyX2RlbW9fNlwiKS52YWwoKSxcclxuICAgICAgICBpZF9kb3NzaWVyOiAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX21hcmNoZTogJChcIi5tYXJjaGVzXCIpLnZhbCgpLFxyXG4gICAgICAgIGlkX3NvdXNtYXJjaGU6ICQoXCIuc291c21hcmNoZVwiKS52YWwoKSxcclxuICAgICAgfSlcclxuICAgIClcclxuICAgIC5sb2FkKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIucnNlYXJjaFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICAvLyQoXCIjZm9ybV9hbm5lZVwiKS52YWwoMSkudHJpZ2dlcignY2hhbmdlLnNlbGVjdDInKTtcclxuICAvLyQoJyNmb3JtX2FubmVlIG9wdGlvbjplcSgwKScpLnByb3AoJ3NlbGVjdGVkJyx0cnVlKTtcclxuICAvLyQoJyNmb3JtX2FubmVlJykudmFsKCQoJyNmb3JtX2FubmVlIG9wdGlvbjpmaXJzdC1jaGlsZCcpLnZhbCgpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcbiAgJChcIi5zZWxlY3QyX2RlbW9fM1wiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAkKFwiLnNlbGVjdDJfZGVtb180XCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICQoXCIuc2VsZWN0Ml9kZW1vXzVcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgJChcIi5zb3VNYXJjaGVcIikuaGlkZSgpO1xyXG4gICQoXCIubWFyY2hlXCIpLmhpZGUoKTtcclxuICAkKFwiLnByb2pldFwiKS5oaWRlKCk7XHJcbiAgJChcIi5zZWwyXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIHRhYmxlLmFqYXgudXJsKFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcHJvamV0X2RhdGFcIikpLmxvYWQoKTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnJzZWFyY2gyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIC8vJChcIiNmb3JtX2FubmVlXCIpLnZhbCgxKS50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpO1xyXG4gIC8vJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmVxKDApJykucHJvcCgnc2VsZWN0ZWQnLHRydWUpO1xyXG4gIC8vJCgnI2Zvcm1fYW5uZWUnKS52YWwoJCgnI2Zvcm1fYW5uZWUgb3B0aW9uOmZpcnN0LWNoaWxkJykudmFsKCkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAkKFwiLnNlbGVjdDJfZGVtb18zXCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICQoXCIuc2VsZWN0Ml9kZW1vXzRcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgJChcIi5zZWxlY3QyX2RlbW9fNVwiKS52YWwoXCJcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAkKFwiLnNvdU1hcmNoZVwiKS5oaWRlKCk7XHJcbiAgJChcIi5tYXJjaGVcIikuaGlkZSgpO1xyXG4gICQoXCIucHJvamV0XCIpLmhpZGUoKTtcclxuICAkKFwiLnNlbDJcIikudmFsKFwiXCIpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgdGFibGUyLmFqYXgudXJsKFJvdXRpbmcuZ2VuZXJhdGUoXCJyZXBvcnRpbmdfcmVmZXJlbmNlX2RhdGFcIikpLmxvYWQoKTtcclxufSk7XHJcblxyXG52YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZS1zaG93XCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicmVwb3J0aW5nX3Byb2pldF9kYXRhXCIpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRhYmxlLmhhc093blByb3BlcnR5KCdzZXR0aW5ncycpKSB7XHJcbiAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB0YWJsZS5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gIF0sXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjMlXCIsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxMiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxMyB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IGZhbHNlLCB0YXJnZXRzOiAxNCB9LFxyXG4gICAge1xyXG4gICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICBvcmRlcmFibGU6IHRydWUgLypjbGFzc05hbWU6IFwiY29sb25uZS1ncmFzXCIqLyxcclxuICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHRhcmdldHM6IDE1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgb3JkZXJhYmxlOiB0cnVlIC8qY2xhc3NOYW1lOiBcImNvbG9ubmUtZ3Jhc1wiKi8sXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICB0YXJnZXRzOiAxNixcclxuICAgIH0sXHJcbiAgXSxcclxuICAvLyBkb206ICdsQmZydGlwJyxcclxuICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgIGNvbHVtbnM6IFwiOnZpc2libGVcIixcclxuICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG4gIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gIGZvb3RlckNhbGxiYWNrOiBmdW5jdGlvbiAocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICAkKFwiLmNlbnRlci1jbGFzc1wiKS5yZW1vdmUoKTtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICBkYXRhO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgZm9ybWF0dGluZyB0byBnZXQgaW50ZWdlciBkYXRhIGZvciBzdW1tYXRpb25cclxuICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGkgPT09IFwic3RyaW5nXCJcclxuICAgICAgICA/IGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMVxyXG4gICAgICAgIDogdHlwZW9mIGkgPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IGlcclxuICAgICAgICA6IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0b3RhbDQgPSBhcGlcclxuICAgICAgLmNvbHVtbig2LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgJChhcGkuY29sdW1uKDYpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCI+VG90YWwgOiAnICsgdG90YWw0LnRvRml4ZWQoMikgKyBcIjwvY2VudGVyPlwiXHJcbiAgICApO1xyXG5cclxuICAgIHZhciB0b3RhbDUgPSBhcGlcclxuICAgICAgLmNvbHVtbig3LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgJChhcGkuY29sdW1uKDcpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCI+VG90YWwgOiAnICsgdG90YWw1LnRvRml4ZWQoMikgKyBcIjwvY2VudGVyPlwiXHJcbiAgICApO1xyXG5cclxuICAgIHZhciB0b3RhbDYgPSBhcGlcclxuICAgICAgLmNvbHVtbig4LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgJChhcGkuY29sdW1uKDgpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCI+VG90YWwgOiAnICsgdG90YWw2LnRvRml4ZWQoMikgKyBcIjwvY2VudGVyPlwiXHJcbiAgICApO1xyXG5cclxuICAgIHZhciB0b3RhbDcgPSBhcGlcclxuICAgICAgLmNvbHVtbig5LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgIC5kYXRhKClcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgJChhcGkuY29sdW1uKDkpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCI+VG90YWwgOiAnICsgdG90YWw3LnRvRml4ZWQoMikgKyBcIjwvY2VudGVyPlwiXHJcbiAgICApO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzAsIDYsIDcsIDgsIDksIDEwLCAxMV0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFszLCA1XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoXHJcbiAgICBhcGksXHJcbiAgICBbMTIsIDEzLCAxNCwgMTUsIDE2LCAxLCAyLCA0XSxcclxuICAgIFtdXHJcbiAgKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbXSwgW10pO1xyXG5cclxuICB2YXIgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICA/IGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMVxyXG4gICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgID8gaVxyXG4gICAgICA6IDA7XHJcbiAgfTtcclxuXHJcbiAgJChcIi5jZW50ZXItY2xhc3NcIikucmVtb3ZlKCk7XHJcblxyXG4gIHZhciB0b3RhbDQgPSBhcGlcclxuICAgIC5jb2x1bW4oNilcclxuICAgIC5kYXRhKClcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgIH0sIDApO1xyXG4gICQoYXBpLmNvbHVtbig2LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNC50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICk7XHJcblxyXG4gIHZhciB0b3RhbDUgPSBhcGlcclxuICAgIC5jb2x1bW4oNywgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgLmRhdGEoKVxyXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgfSwgMCk7XHJcbiAgJChhcGkuY29sdW1uKDcpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNS50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICk7XHJcblxyXG4gIHZhciB0b3RhbDYgPSBhcGlcclxuICAgIC5jb2x1bW4oOCwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgLmRhdGEoKVxyXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgfSwgMCk7XHJcbiAgJChhcGkuY29sdW1uKDgpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNi50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICk7XHJcblxyXG4gIHZhciB0b3RhbDcgPSBhcGlcclxuICAgIC5jb2x1bW4oOSwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgLmRhdGEoKVxyXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgfSwgMCk7XHJcbiAgJChhcGkuY29sdW1uKDkpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiPlRvdGFsIDogJyArIHRvdGFsNy50b0ZpeGVkKDIpICsgXCI8L2NlbnRlcj5cIlxyXG4gICk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlMiA9ICQoXCIjZGF0YXRhYmxlLXNob3cyXCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicmVwb3J0aW5nX3JlZmVyZW5jZV9kYXRhXCIpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgfSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIzJVwiLCBzZWFyY2hhYmxlOiB0cnVlLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDExIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDEyIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDEzIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDE0IH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogZmFsc2UsIHRhcmdldHM6IDE1IH0sXHJcbiAgXSxcclxuICAvLyBkb206ICdsQmZydGlwJyxcclxuICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgIGNvbHVtbnM6IFwiOnZpc2libGVcIixcclxuICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG4gIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gIGZvb3RlckNhbGxiYWNrOiBmdW5jdGlvbiAocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICAkKFwiLmNlbnRlci1jbGFzc1wiKS5yZW1vdmUoKTtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICBkYXRhO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLnR5cGVfY29tbWFuZGVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIpID09IFwiUFJKXCIgfHwgJCh0aGlzKS52YWwoKSA9PSA1KSB7XHJcbiAgICAgICQoXCIucHJcIikudG9nZ2xlQ2xhc3MoXCJub25lXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgICQoXCIucHJcIikuYWRkQ2xhc3MoXCJub25lXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiLnR5cGVfY29tbWFuZGVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgdHlwZSA9ICQoXCJvcHRpb246c2VsZWN0ZWRcIiwgdGhpcykuYXR0cihcImRhdGEtdHlwZVwiKTtcclxuICAkKFwiLmJsb2NfY2hvaXhcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgaWYgKHR5cGUgPT0gXCJDTURcIikge1xyXG4gICAgICAkKFwiLmJsb2NfcmVmZXJlbmNlX2RldmlzX2NsaWVudFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09IFwiTVJcIikge1xyXG4gICAgICAkKFwiLmJsb2NfbWFyY2hlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJJTlZcIikge1xyXG4gICAgICAkKFwiLmJsb2NfaW52ZXN0aXNzZW1lbnRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxudGFibGUyLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFswLCA2LCA3LCA4LCA5LCAxMF0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFszLCA1XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoXHJcbiAgICBhcGksXHJcbiAgICBbMTEsIDEyLCAxMywgMTQsIDE1LCAxLCAyLCA0XSxcclxuICAgIFtdXHJcbiAgKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbXSwgW10pO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiLm1hcmNoZXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gIGdldFN1YlNlbGVjdChcIi5zb3VzbWFyY2hlXCIsIGZhbHNlLCBcIlwiKTtcclxuICAvLyBTaW11bGF0ZSBmb3JtIGRhdGEsIGJ1dCBvbmx5IGluY2x1ZGUgdGhlIHNlbGVjdGVkIHNwb3J0IHZhbHVlLlxyXG4gIHZhciBkYXRhID0ge307XHJcbiAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gIC8vICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvL2FsZXJ0KCRmb3JtLmF0dHIoJ2FjdGlvbicpKTtcclxuICAvLyAgY29uc29sZS5sb2coJGZvcm0uYXR0cignbWV0aG9kJykpO1xyXG4gIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgZ2V0U3ViU2VsZWN0KFwiLnNvdXNtYXJjaGVcIiwgdHJ1ZSwgaHRtbCk7XHJcbiAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgIC8vJCgnLnNvdXNtYXJjaGUnKS5wYXJlbnQoKS5maW5kKCcuc2VsZWN0MiAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IGInKS5ub3QoJzpmaXJzdCcpLmhpZGUoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI2Zvcm1fcHJvamV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAvL2FsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gIGdldFN1YlNlbGVjdChcIiNmb3JtX3NvdXNfcHJvamV0XCIsIGZhbHNlLCBcIlwiLCBcIlwiKTtcclxuICB2YXIgJHRoaXMgPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gIHZhciBkYXRhID0ge307XHJcblxyXG4gIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInNvdXNfcHJvamV0X3NlbGVjdFwiLCB7XHJcbiAgICAgIGlkOiAkKHRoaXMpLnZhbCgpID09IFwiXCIgfHwgJCh0aGlzKS52YWwoKSA9PT0gbnVsbCA/IC0xIDogJCh0aGlzKS52YWwoKSxcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggc291cyBwcm9qZXRcIixcclxuICAgIH0pLFxyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAkKFwiI2Zvcm1fc291c19wcm9qZXRcIikuaHRtbChyZXN1bHQuZGF0YSk7XHJcbiAgICAgIGdldFN1YlNlbGVjdChcIiNmb3JtX3NvdXNfcHJvamV0XCIsIHRydWUsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAkKFwiLnNlbGVjdDJfZGVtb182XCIpLnNlbGVjdDIoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIi5keW5hbWlxdWVfZG9jdW1lbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyBjb25zb2xlLmxvZyggJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInJhcG9ydF9kb2N1bWVudF9keW5hbWlxdWVfZm9ybVwiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiwgXCIjb3BlcmF0aW9uXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIi5hbGwsLnJlY2VwdGlvbiAsIC5mYWN0dXJlICwgLnJlZ2xlbWVudFwiKS5hZGRDbGFzcyhcInJhcG9ydC1oaWRlXCIpO1xyXG4gICQoXCIjZXhhbXBsZTJcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gICQoXCIjZXhhbXBsZTNcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gICQoXCIub25vZmZzd2l0Y2gtY2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblxyXG4gIGlmICgkKHRoaXMpLnZhbCgpID09IFwiY21kXCIpIHtcclxuICAgICQoXCIuYWxsLC5yZWNlcHRpb24gLCAuZmFjdHVyZSAsIC5yZWdsZW1lbnRcIikudG9nZ2xlQ2xhc3MoXCJyYXBvcnQtaGlkZVwiKTtcclxuICB9IGVsc2UgaWYgKCQodGhpcykudmFsKCkgPT0gXCJyZWNcIikge1xyXG4gICAgJChcIi5hbGwsLmZhY3R1cmUgLCAucmVnbGVtZW50XCIpLnRvZ2dsZUNsYXNzKFwicmFwb3J0LWhpZGVcIik7XHJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLnZhbCgpID09IFwiZmFjXCIpIHtcclxuICAgICQoXCIuYWxsLC5yZWdsZW1lbnRcIikudG9nZ2xlQ2xhc3MoXCJyYXBvcnQtaGlkZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5vbm9mZnN3aXRjaC1jaGVja2JveFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoJChcIiNleGFtcGxlMVwiKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcbiAgJChcIiNleGFtcGxlMlwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcbiAgJChcIiNleGFtcGxlM1wiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcblxyXG4gIGlmICgkKFwiI2V4YW1wbGUxXCIpLnByb3AoXCJjaGVja2VkXCIpID09IGZhbHNlKSB7XHJcbiAgICAkKFwiI2V4YW1wbGUyXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICQoXCIjZXhhbXBsZTNcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gIH1cclxuICBpZiAoJChcIiNleGFtcGxlMlwiKS5wcm9wKFwiY2hlY2tlZFwiKSA9PSBmYWxzZSkge1xyXG4gICAgLy8gJChcIiNleGFtcGxlMlwiKS5hdHRyKFwiZGlzYWJsZWRcIix0cnVlKTtcclxuICAgICQoXCIjZXhhbXBsZTNcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuXHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwicmFwb3J0X2dldF9hbGxfYnlfZmlsdHJlXCIpLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kLmZuLnRvZ2dsZUNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLnRhZ05hbWUgPT09IFwiSU5QVVRcIikge1xyXG4gICAgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiLCAhJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKTtcclxuICB9XHJcbn07XHJcbiIsInZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IHJlZHVjZSwgcmVkdWNlUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19SSUdIVCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c0xlbmd0aCwgbWVtbykge1xuICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoYXQpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gSVNfUklHSFQgPyBsZW5ndGggLSAxIDogMDtcbiAgICB2YXIgaSA9IElTX1JJR0hUID8gLTEgOiAxO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPCAyKSB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBpZiAoSVNfUklHSFQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwiLyogZ2xvYmFsIEJ1biAtLSBEZW5vIGNhc2UgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIEJ1biA9PSAnZnVuY3Rpb24nICYmIEJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZyc7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc29mKGdsb2JhbC5wcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIEVOR0lORV9JU19CVU4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bicpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOR0lORV9JU19CVU4gJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlcnNpb24gPSBnbG9iYWwuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09IDAgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT0gMyAmJiB2ZXJzaW9uWzJdID09IDApO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIG4gPSB0b0ludGVnZXJPckluZmluaXR5KGNvdW50KTtcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93ICRSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG4vLyBgdGhpc051bWJlclZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKDEuMC52YWx1ZU9mKTtcbiIsInZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG4gIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG4vLyBDaHJvbWUgODAtODIgaGFzIGEgY3JpdGljYWwgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDQ5OTgyXG52YXIgQ0hST01FX0JVRyA9ICFJU19OT0RFICYmIENIUk9NRV9WRVJTSU9OID4gNzkgJiYgQ0hST01FX1ZFUlNJT04gPCA4MztcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhU1RSSUNUX01FVEhPRCB8fCBDSFJPTUVfQlVHIH0sIHtcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGxlbmd0aCwgbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdGhpc051bWJlclZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlJyk7XG52YXIgJHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciByZXBlYXQgPSB1bmN1cnJ5VGhpcygkcmVwZWF0KTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBuYXRpdmVUb0ZpeGVkID0gdW5jdXJyeVRoaXMoMS4wLnRvRml4ZWQpO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGRhdGEsIG4sIGMpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjMiA9IGM7XG4gIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGMyICUgMWU3O1xuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICB9XG59O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gKGRhdGEsIG4pIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIGMgPSAwO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGZsb29yKGMgLyBuKTtcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgfVxufTtcblxudmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBzID0gJyc7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgIHZhciB0ID0gJFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG5cbnZhciBGT1JDRUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVUb0ZpeGVkKDAuMDAwMDgsIDMpICE9PSAnMC4wMDAnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgwLjksIDApICE9PSAnMScgfHxcbiAgICBuYXRpdmVUb0ZpeGVkKDEuMjU1LCAyKSAhPT0gJzEuMjUnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgxMDAwMDAwMDAwMDAwMDAwMTI4LjAsIDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCc7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkKHt9KTtcbn0pO1xuXG4vLyBgTnVtYmVyLnByb3RvdHlwZS50b0ZpeGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyT3JJbmZpbml0eShmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgLy8gVE9ETzogRVMyMDE4IGluY3JlYXNlZCB0aGUgbWF4aW11bSBudW1iZXIgb2YgZnJhY3Rpb24gZGlnaXRzIHRvIDEwMCwgbmVlZCB0byBpbXByb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgJFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChudW1iZXIgIT0gbnVtYmVyKSByZXR1cm4gJ05hTic7XG4gICAgaWYgKG51bWJlciA8PSAtMWUyMSB8fCBudW1iZXIgPj0gMWUyMSkgcmV0dXJuICRTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KGRhdGEsIDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEsIDEpO1xuICAgICAgICBkaXZpZGUoZGF0YSwgMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogc3RyaW5nU2xpY2UocmVzdWx0LCAwLCBrIC0gZnJhY3REaWdpdHMpICsgJy4nICsgc3RyaW5nU2xpY2UocmVzdWx0LCBrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldEludGVydmFsID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0SW50ZXJ2YWwsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRJbnRlcnZhbCAhPT0gc2V0SW50ZXJ2YWwgfSwge1xuICBzZXRJbnRlcnZhbDogc2V0SW50ZXJ2YWxcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldFRpbWVvdXQgPSBzY2hlZHVsZXJzRml4KGdsb2JhbC5zZXRUaW1lb3V0LCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRUaW1lb3V0IGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldFRpbWVvdXQgIT09IHNldFRpbWVvdXQgfSwge1xuICBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0XG59KTtcbiIsIi8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=