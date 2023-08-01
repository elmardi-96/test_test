(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tfacturefrscab"],{

/***/ "./assets/js/components/module_achat/tfacturefrscab.js":
/*!*************************************************************!*\
  !*** ./assets/js/components/module_achat/tfacturefrscab.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
















var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.setRoutingData(routes);





global.$ = $;
var bordereaux = [];
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});
$("body").on("click", "#_avoir", function (e) {
  //alert()

  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("t_uatfacture_add_avoir_popup"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalAcompteDynamique").modal("show");
      $(".sel2").select2();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$("body").on("click", "#_acompte", function (e) {
  //alert()

  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("t_uatfacture_add_acompte_popup"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalAcompteDynamique").modal("show");
      $(".sel2").select2();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_list2"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  // "scrollX": true,
  pageLength: 15,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  order: [[0, "desc"]],
  columns: [{
    orderable: true,
    className: 'td-check pd-fac',
    name: 'fac.id',
    width: "3%"
  }, {
    orderable: true,
    name: 'fac.code',
    visible: true,
    className: 'pd-fac'
  }, {
    orderable: true,
    name: 'fac.dateDocAsso',
    className: 'pd-fac'
  }, {
    orderable: true,
    name: 'refDocAsso',
    className: 'pd-fac'
  }, {
    orderable: true,
    name: 'fac.observation',
    className: 'pd-fac'
  }, {
    orderable: true,
    name: 'frs.societe',
    className: 'pd-fac'
  }, {
    orderable: true,
    className: 'td-number pd-fac',
    name: 'fac.montant_acompte'
  }, {
    orderable: true,
    className: 'td-number pd-fac',
    name: 'fac.mtremise'
  }, {
    orderable: true,
    className: 'td-number pd-fac',
    name: 'fac.montant_reception'
  }, {
    orderable: true,
    name: 'fac.montant',
    className: 'fac-back td-number pd-fac'
  }, {
    orderable: true,
    name: 'tab.montantRegle',
    className: 'reg-back td-number pd-fac'
  }, {
    orderable: true,
    name: 'tab.NbrReglements',
    className: 'td-number pd-fac'
  }, {
    orderable: true,
    name: 'parvenue.v',
    className: 'pd-fac'
  }, {
    orderable: true,
    searchable: false
  }, {
    orderable: true,
    name: 'fac.position_actuel',
    className: 'pd-fac'
  }, {
    orderable: true,
    searchable: false,
    width: "5%"
  }],
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
        data = data + "<li><a " + link + "data-transition='" + element.name + "' data-id='" + element.id + "' data-title='" + element.titre + "' class='dropdown-item " + element["class"] + " " + element.idCs + "' ><i class='fa " + element.icon + "' ></i> " + element.titre + "</a></li>";
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
          data = $('<p>' + data + '</p>').text();
          return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
        }
      }
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_19__["CustomSearchText"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_19__["CustomSearchDate"](api, [], []);
  // CustomSearchDatatable.CustomSearchSelect(api, [5,11], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_19__["CustomSearchCheckbox"](api, [0], []);
});
/*column 1 de datatble search*/

$(".remove-filter").click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});
$(".action_head").click(function () {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facture_statut", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facture_statut", {
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
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_Paiement", {
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
    var id = table.row(".selected").id();
    if (id) {
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_consulte", {
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
    //  var id = table.row('.selected').id();

    var id = $("#test").data("factureId");
    // alert(id);
    if (id) {
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("pdf_show_facture", {
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
  $(".new").on("submit", ".form", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this).attr("class").split(" ")[0];
    var id = $("#test").data("factureId");

    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_21__["create"](document.querySelector(".my-button2"));

    // Start loading
    l.start();
    // console.log(test);
    //console.log(e.type);
    // alert(id);
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facture_insert", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
        if (result.errors) {
          //  console.log(result.errors);
          $(".errors-list").remove();
          jQuery.each(result.errors.violations, function (i, val) {
            l.stop();
            var column = val.propertyPath;
            var columnName = column.split(".");
            $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
          });
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
          $(".form")[0].reset();
          $(".new .table-detail tbody").hide();
          $(".new-article-btn").show();
          $(".new .table-detail > tbody tr").not(":last").remove();
          l.stop();
          location.reload();
          //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
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
  $("body").on("click", ".ua_t_facturefrscab_apply_transitions", function (e) {
    var dta = new FormData();
    var id = $(this).attr("data-id");
    var title = $(this).attr("data-title");
    var transition = $(this).attr("data-transition");
    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);
    //alert(transition);
    //  alert(title);

    //   alert(id);

    if (transition == "apres_valider_generer") {
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_generer", {
          id: id
        }),
        success: function success(result) {
          $(".bod").html(result).hide();
          $(".parvenue").select2();
          if ($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1) {
            $('.dateDoc,.refDoc').hide().removeClass('classShow');
          } else {
            $('.dateDoc,.refDoc').show().addClass('classShow');
          }
          $("#MyModal").modal("show");
          $('.parvenue').on('select2:selecting', function (e) {
            // alert();
            if (e.params.args.data.text.indexOf('non parvenue') !== -1) {
              $('.dateDoc,.refDoc').hide().removeClass('classShow');
            } else {
              $('.dateDoc,.refDoc').show().addClass('classShow');
            }
          });
          setTimeout(function () {
            $(".spr").hide();
            $(".bod").fadeIn();
          }, 600);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
            timeOut: 4000
          });
        }
      });
    } else if (id) {
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_apply_transitions", {
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
                var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_Paiement", {
                  id: result.id
                });
                window.location.href = url;
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
    e.preventDefault();
  });
});
var tableShow = $("#datatable-show").DataTable({
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
$("._generer_form").submit(function (e) {
  var dta = new FormData(this);
  var id = $("input[name=_id]").val();

  //alert();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_21__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_avoir_insert", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        $.each(result.errors, function (key, value) {
          toastrWidtoutProgress.warning(value, "warning");
        });
        l.stop();
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        l.stop();
        location.reload();
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
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
    total = api.column(4).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(11, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(1).footer()).html("Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});
$(document).ready(function () {
  //$('body').on('change', '.paiement', function (e) {
  //$('.paiement').bind('load',function(){

  $(".paiement").on("change rightnow", function () {
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
    if ($(this).val() == 1) {
      $(".bloc_compte").hide();
    } else {
      $(".bloc_compte").show();
    }
    //  console.log($(this).val());
  }).triggerHandler("rightnow");
});
$("#_delete_facture").click(function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('t_UaTFacturefrscab_delete_multiple_facture'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('ua_t_facture_index');
              window.location.href = url;
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
  e.preventDefault();
});
$("body").on("click", "._delete_facture", function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  //  alert( _array_ids);
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("t_UaTFacturefrscab_delete_multiple_facture"),
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
$("#_generer").click(function (e) {
  if ($(this).attr("data-id")) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_generer", {
        id: $(this).attr("data-id")
      }),
      success: function success(result) {
        $(".bod").html(result).hide();
        $(".parvenue").select2();
        if ($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1) {
          $('.dateDoc,.refDoc').hide().removeClass('classShow');
        } else {
          $('.dateDoc,.refDoc').show().addClass('classShow');
        }
        $("#MyModal").modal("show");
        $('.parvenue').on('select2:selecting', function (e) {
          // alert();
          if (e.params.args.data.text.indexOf('non parvenue') !== -1) {
            $('.dateDoc,.refDoc').hide().removeClass('classShow');
          } else {
            $('.dateDoc,.refDoc').show().addClass('classShow');
          }
        });
        setTimeout(function () {
          $(".spr").hide();
          $(".bod").fadeIn();
        }, 600);
      }
    });
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_annuler", {
          id: id
        }),
        success: function success(result) {
          // console.log(result);
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('ua_t_facture_index');
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
$("#_desactiver_facture").click(function (e) {
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
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('ua_t_facturefrscab_desactiver'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            if (result.errors) {
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_17__["ShowFormErrors"])(selector, form_name, result.errors);
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
      }
    });
  }
  e.preventDefault();
});
$("body").on("click", "._desactiver_facture", function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  // alert(_array_ids);
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_desactiver"),
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
var table2 = $("#grid2").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_avoir_list") + location.search,
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
  pageLength: 10,
  order: [[0, "asc"]],
  columns: [{
    orderable: true,
    width: "5%",
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    visible: true
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
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true,
    visible: true
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});

table2.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_19__["CustomSearchText"](api, [1, 3, 4, 8, 9, 10, 11, 12, 13], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_19__["CustomSearchDate"](api, [2], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_19__["CustomSearchSelect"](api, [5, 6, 7], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_19__["CustomSearchCheckbox"](api, [0], []);
});
$("body").on("submit", ".save_form_avoir", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_21__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("t_uatfacture_add_avoir_popup"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_17__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });

        // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      } else if (result.data) {
        table2.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $("#ModalDocumentDynamique").modal("hide");
        l.stop();

        //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
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
$("body").on("submit", ".save_form_acompte", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_21__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("t_uatfacture_add_acompte_popup"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_17__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });

        // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      } else if (result.data) {
        table2.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $("#ModalDocumentDynamique").modal("hide");
        l.stop();

        //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
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

/*
 $("#_acompte").click(function (e) {
 //    var id = table.row(".selected").id();
 //    if (id) {
 $.ajax({
 type: "POST",
 url: Routing.generate("ua_t_facture_acompte_new"),
 success: function (result, textStatus, errorThrown) {
 $(".bod").html(result).hide();
 $("#ModalAcompteDynamique").modal("show");
 setTimeout(function () {
 $(".spr").hide();
 $(".bod").fadeIn();
 }, 600);
 },
 error: function (jqXHR, textStatus, errorThrown) {
 toastr.error("Erreur", errorThrown, {timeOut: 4000});
 },
 });
 //    } else {
 //        toastr.warning(
 //                "Veuillez Renseigner une ligne pour effectuer cette operation",
 //                "warning",
 //                {timeOut: 4000}
 //        );
 //    }
 
 e.preventDefault();
 });*/

var obj2 = new Object();
obj2["dossier_path"] = "change_dossier_facture_popup";
_functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_20__["listActions"](obj2);
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_21__["create"](document.activeElement);

  // Start loading
  l.start();
  //alert($('#id').attr('value'));
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_generer", {
      id: $('#id').attr('value')
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.code == 404) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_17__["ShowFormErrors"])(selector, form_name, result.errors);
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_apply_transitions", {
            id: id
          }),
          success: function success(result) {
            if (result.code == 200) {
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
            }
            if (result.code == 201) {
              l.stop();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_Paiement", {
                id: result.id
              });
              window.location.href = url;
            }
            if (result.code == 403) {
              l.stop();
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
$('body').on('click', '.pdf_by_code', function (e) {
  window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_document_old_sys", {
    id: $(this).attr('data-id')
  }), '_blank');
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_info_ref", {
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_21__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("ua_t_facturefrscab_set_info_ref", {
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
$("#ajouterBRD").on('click', function () {
  // var dta = new FormData(action_test);

  // if (transactions.length > 0) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_21__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('t_facturefrscab_bordereaux'),
    // data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //   table.ajax.reload();
      // toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

      if (result.hasOwnProperty('message')) {
        if (result.message.title === "err") {
          toastr.warning("Warning", result.message.text, {
            timeOut: 4000
          });
        }
      } else {
        $(".bod_valider").html(result).hide();
        $("#ModalDocumentDynamiqueValider").modal("show");
        setTimeout(function () {
          $(".spr_valider").hide();
          $(".bod_valider").fadeIn();
        }, 600);
        $("#valid").css("display", "none");
        $(".action").prop("checked", false);
        $("#allactions").prop("checked", false);
      }
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  // } else {
  //     toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
  // }
});

$("body").on('keypress', '#code_tr_fac', function (e) {
  var code = $(this).val();
  if (e.which == 13) {
    if (code == "") {
      toastr.warning("Warning", "Veuillez remplir les champs!", {
        timeOut: 4000
      });
      return;
    }
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("t_facturefrscab_get_code"),
      data: {
        codef: code
      },
      // processData: false,
      // contentType: false,
      success: function success(result) {
        if (result.code == 403) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
          return;
        }
        var index = bordereaux.findIndex(function (t) {
          return t == result.id;
        });
        if (index == "-1") {
          bordereaux.push(result.id);
          console.log(result);
          $(".transactionbody").prepend("\n                        <tr id=\"".concat(result.id, "\">\n                            <td>").concat(result.code, "</td>\n                            <td><i class=\"fa fa-close text-danger remove_transaction\"  /></td>\n                        </tr>\n                    "));
          $('#code_tr_fac').val("");
        } else {
          toastr.warning("Warning", "Déja existe!", {
            timeOut: 4000
          });
          return;
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", jqXHR.responseText, {
          timeOut: 4000
        });
      }
    });
  }
});
$("body").on('click', '.remove_transaction', function (e) {
  console.log('amine');
  var tr = $(this).parents('tr');
  var id = tr.attr("id");
  var index = bordereaux.findIndex(function (t) {
    return t == id;
  });
  bordereaux.splice(index, 1);
  console.log(bordereaux);
  tr.remove();
});
$('body').on('click', '#EnregistrerCodeBRD', function (e) {
  //    alert('test');
  e.preventDefault();
  if (bordereaux.length == 0) {
    toastr.warning("Veuillez ajouter une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
    return;
  }
  var form_name = $(this).attr('name');
  // var dta = new FormData(this);
  var selector = $(this);
  // dta.append('bordereaux', JSON.stringify(bordereaux))
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_21__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('t_facturefrscab_bordereaux'),
    // data: dta,
    data: {
      bordereaux: JSON.stringify(bordereaux)
    },
    // processData: false,
    // contentType: false,
    success: function success(result) {
      l.stop();
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_17__["ShowFormErrors"])(selector, form_name, result.errors);
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
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/components/module_achat/tfacturefrscab.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~tfacturefrscab",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYWNoYXQvdGZhY3R1cmVmcnNjYWIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Z1bmN0aW9ucy9kZWxldGUuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImdsb2JhbCIsIiQiLCJib3JkZXJlYXV4IiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJvbiIsImUiLCJhamF4IiwidHlwZSIsInVybCIsImdlbmVyYXRlIiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiLCJoaWRlIiwibW9kYWwiLCJzZWxlY3QyIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwidGFibGUiLCJEYXRhVGFibGUiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJwYWdlTGVuZ3RoIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsImNsYXNzTmFtZSIsIm5hbWUiLCJ3aWR0aCIsInZpc2libGUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJ0IiwiYSIsImwiLCJzIiwiZGF0YSIsImZvckVhY2giLCJlbGVtZW50IiwibGluayIsIl9yb3V0ZV9saW5rIiwiaWQiLCJ0aXRyZSIsImlkQ3MiLCJpY29uIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJhY3Rpb24iLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJleHRlbmQiLCJleHBvcnRPcHRpb25zIiwicm93cyIsImZvcm1hdCIsImJvZHkiLCJyb3ciLCJjb2x1bW4iLCJpc051bWVyaWMiLCJyZXBsYWNlIiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiY2xpY2siLCJwcm9wIiwidG9nZ2xlIiwiZmlsdGVyIiwibGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwiY2hhbmdlIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInRvZ2dsZUNsYXNzIiwiZXJyb3IiLCJqcVhIUiIsInRvYXN0ciIsInRpbWVPdXQiLCJ3YXJuaW5nIiwiZHRhIiwiRm9ybURhdGEiLCJmb3JtX25hbWUiLCJhdHRyIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImVycm9ycyIsInJlbW92ZSIsImpRdWVyeSIsImVhY2giLCJ2aW9sYXRpb25zIiwiaSIsInZhbCIsInByb3BlcnR5UGF0aCIsImNvbHVtbk5hbWUiLCJzcGxpdCIsImFmdGVyIiwidGl0bGUiLCJjb2RlIiwibWVzc2FnZSIsImVtcHR5IiwiaHJlZiIsIm9wZW4iLCJzZWxlY3RvciIsIkxhZGRhIiwicXVlcnlTZWxlY3RvciIsInN0YXJ0Iiwic3RvcCIsInJlc2V0Iiwic2hvdyIsIm5vdCIsInRyYW5zaXRpb24iLCJhcHBlbmQiLCJpbmRleE9mIiwicGFyYW1zIiwiYXJncyIsInJlc3BvbnNlSlNPTiIsImZpcmUiLCJzaG93Q2xhc3MiLCJwb3B1cCIsInBvc2l0aW9uIiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJ2YWx1ZSIsInRhYmxlU2hvdyIsInNjcm9sbFkiLCJzY3JvbGxDb2xsYXBzZSIsInBhZ2luZyIsImF1dG9XaWR0aCIsImZvb3RlckNhbGxiYWNrIiwiZW5kIiwiZGlzcGxheSIsInRvdGFsIiwicGFnZVRvdGFsIiwiaW50VmFsIiwicmVkdWNlIiwiYiIsInBhZ2UiLCJmb290ZXIiLCJNYXRoIiwicm91bmQiLCJ0b0ZpeGVkIiwic3VibWl0Iiwia2V5IiwidG9hc3RyV2lkdG91dFByb2dyZXNzIiwidHJpZ2dlckhhbmRsZXIiLCJfYXJyYXlfaWRzIiwicHVzaCIsIlNob3dGb3JtRXJyb3JzIiwidGFibGUyIiwic2VhcmNoIiwiYmVmb3JlU2VuZCIsImhhc093blByb3BlcnR5IiwiYWJvcnQiLCJzdGF0ZVNhdmUiLCJvYmoyIiwiT2JqZWN0IiwibGlzdEFjdGlvbnMiLCJkdGEyIiwiYWN0aXZlRWxlbWVudCIsImZhY3R1cmVJZCIsImZpbmQiLCJyZWZfZG9jIiwiZGF0ZV9yZWYiLCJkYXRlX3ZhbGlkZSIsImZvcm1EYXRhIiwiY3NzIiwid2hpY2giLCJjb2RlZiIsImluZGV4IiwiZmluZEluZGV4IiwiY29uc29sZSIsImxvZyIsInByZXBlbmQiLCJyZXNwb25zZVRleHQiLCJ0ciIsInBhcmVudHMiLCJzcGxpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVsZXRlQ2FiIiwib2JqIiwiZGVsZXRlRGVtYW5kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxtSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUNtQztBQUVYO0FBRW1DO0FBQ3RCO0FBRXBDO0FBQy9CSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUNaLElBQUlDLFVBQVUsR0FBRyxFQUFFO0FBQ25CLElBQU1DLElBQUksR0FBR04sbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1PLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEs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LE1BQU0sQ0FBQzZHLE9BQU8sQ0FBQ0YsS0FBSyxFQUFFO2NBQUNuQixPQUFPLEVBQUU7WUFBSSxDQUFDLENBQUM7WUFDMUUsSUFBRzBHLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBRSxJQUFJLEVBQUM7Y0FDeEJuSixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO1lBQzVCLENBQUMsTUFBSTtjQUNELElBQUlwRCxHQUFHLEdBQUdoQixrSEFBTyxDQUFDaUIsUUFBUSxDQUFDb00sR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2NBQzlDbkosTUFBTSxDQUFDQyxRQUFRLENBQUMrRCxJQUFJLEdBQUdsSCxHQUFHO1lBQzlCO1VBRUosQ0FBQyxNQUFNLElBQUlHLE1BQU0sQ0FBQzRHLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDM0JyQixNQUFNLENBQUNFLE9BQU8sQ0FBQ3pGLE1BQU0sQ0FBQzZHLE9BQU8sQ0FBQ3JFLElBQUksRUFBRXhDLE1BQU0sQ0FBQzZHLE9BQU8sQ0FBQ0YsS0FBSyxFQUFFO2NBQUNuQixPQUFPLEVBQUU7WUFBSSxDQUFDLENBQUM7VUFDOUU7UUFDSixDQUFDO1FBQ0RILEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVKLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1VBQzdDSSxNQUFNLENBQUNFLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDd0MsWUFBWSxDQUFDakIsT0FBTyxDQUFDckUsSUFBSSxFQUFFOEMsS0FBSyxDQUFDd0MsWUFBWSxDQUFDakIsT0FBTyxDQUFDRixLQUFLLEVBQUU7WUFBQ25CLE9BQU8sRUFBRTtVQUFJLENBQUMsQ0FBQztRQUN0RztNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQyIsImZpbGUiOiJ0ZmFjdHVyZWZyc2NhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcblxyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBsaXN0QWN0aW9ucyBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG5nbG9iYWwuJCA9ICQ7XHJcbmxldCBib3JkZXJlYXV4ID0gW107XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI19hdm9pclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X3VhdGZhY3R1cmVfYWRkX2F2b2lyX3BvcHVwXCIpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiNNb2RhbEFjb21wdGVEeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNfYWNvbXB0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X3VhdGZhY3R1cmVfYWRkX2Fjb21wdGVfcG9wdXBcIiksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI01vZGFsQWNvbXB0ZUR5bmFtaXF1ZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG52YXIgdGFibGUgPSAkKFwiI2dyaWRcIikuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfbGlzdDJcIiksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgLy8gXCJzY3JvbGxYXCI6IHRydWUsXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIGNsYXNzTmFtZTogJ3RkLWNoZWNrIHBkLWZhYycsIG5hbWU6ICdmYWMuaWQnLCB3aWR0aDogXCIzJVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnZmFjLmNvZGUnLCB2aXNpYmxlOiB0cnVlLCBjbGFzc05hbWU6ICdwZC1mYWMnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnZmFjLmRhdGVEb2NBc3NvJyAsY2xhc3NOYW1lOiAncGQtZmFjJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3JlZkRvY0Fzc28nICxjbGFzc05hbWU6ICdwZC1mYWMnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnZmFjLm9ic2VydmF0aW9uJyxjbGFzc05hbWU6ICdwZC1mYWMnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnZnJzLnNvY2lldGUnLGNsYXNzTmFtZTogJ3BkLWZhYyd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIGNsYXNzTmFtZTogJ3RkLW51bWJlciBwZC1mYWMnLCBuYW1lOiAnZmFjLm1vbnRhbnRfYWNvbXB0ZSd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIGNsYXNzTmFtZTogJ3RkLW51bWJlciBwZC1mYWMnLCBuYW1lOiAnZmFjLm10cmVtaXNlJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgY2xhc3NOYW1lOiAndGQtbnVtYmVyIHBkLWZhYycsIG5hbWU6ICdmYWMubW9udGFudF9yZWNlcHRpb24nfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnZmFjLm1vbnRhbnQnLCBjbGFzc05hbWU6ICdmYWMtYmFjayB0ZC1udW1iZXIgcGQtZmFjJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3RhYi5tb250YW50UmVnbGUnLGNsYXNzTmFtZTogJ3JlZy1iYWNrIHRkLW51bWJlciBwZC1mYWMnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAndGFiLk5iclJlZ2xlbWVudHMnICxjbGFzc05hbWU6ICd0ZC1udW1iZXIgcGQtZmFjJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3BhcnZlbnVlLnYnLGNsYXNzTmFtZTogJ3BkLWZhYyd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUgLCBzZWFyY2hhYmxlOiBmYWxzZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ2ZhYy5wb3NpdGlvbl9hY3R1ZWwnICxjbGFzc05hbWU6ICdwZC1mYWMnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiBmYWxzZSAsd2lkdGg6IFwiNSVcIn0sXHJcbiAgICBdLFxyXG4gICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgdGFyZ2V0czogMTUsXHJcbiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICh0LCBhLCBsLCBzKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gXCJcIjtcclxuICAgIFxyXG4gICAgICAgICAgICB0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgbGluayA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuX3JvdXRlX2xpbmspIHtcclxuICAgICAgICAgICAgICAgIGxpbmsgPSBcImhyZWY9J1wiICsgZWxlbWVudC5fcm91dGVfbGluayArIFwiJ1wiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkYXRhID1cclxuICAgICAgICAgICAgICAgIGRhdGEgK1xyXG4gICAgICAgICAgICAgICAgXCI8bGk+PGEgXCIgK1xyXG4gICAgICAgICAgICAgICAgbGluayArXHJcbiAgICAgICAgICAgICAgICBcImRhdGEtdHJhbnNpdGlvbj0nXCIgK1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5uYW1lICtcclxuICAgICAgICAgICAgICAgIFwiJyBkYXRhLWlkPSdcIiArXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlkICtcclxuICAgICAgICAgICAgICAgIFwiJyBkYXRhLXRpdGxlPSdcIiArIGVsZW1lbnQudGl0cmUgKyBcIicgY2xhc3M9J2Ryb3Bkb3duLWl0ZW0gXCIgK1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzcyArXHJcbiAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlkQ3MgK1xyXG4gICAgICAgICAgICAgICAgXCInID48aSBjbGFzcz0nZmEgXCIgK1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pY29uICtcclxuICAgICAgICAgICAgICAgIFwiJyA+PC9pPiBcIiArXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdHJlICtcclxuICAgICAgICAgICAgICAgIFwiPC9hPjwvbGk+XCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgJ1xcdDxkaXYgY2xhc3M9XCJkcm9wZG93biBkcm9wZG93bi1pbmxpbmUgY2VudGVyXCI+IFxcdCA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+IFxcdCA8c3BhbiBjbGFzcz1cInN2Zy1pY29uIHN2Zy1pY29uLW1kXCI+IFxcdCAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB2ZXJzaW9uPVwiMS4xXCIgY2xhc3M9XCJzdmctY29sb3JcIj4gPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj4gPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiLz4gPGNpcmNsZSBmaWxsPVwiIzAwMDAwMFwiIGN4PVwiNVwiIGN5PVwiMTJcIiByPVwiMlwiLz4gPGNpcmNsZSBmaWxsPVwiIzAwMDAwMFwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjJcIi8+IDxjaXJjbGUgZmlsbD1cIiMwMDAwMDBcIiBjeD1cIjE5XCIgY3k9XCIxMlwiIHI9XCIyXCIvPiA8L2c+PC9zdmc+IFxcdCA8L3NwYW4+IFxcdCA8L2E+IDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtc20gZHJvcGRvd24tbWVudS1yaWdodFwiPiBcXHQgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBzaG93IGRycC1saXN0XCIgeC1wbGFjZW1lbnQ9XCJib3R0b20tc3RhcnRcIj4gPGxpIGNsYXNzPVwibmF2aS1oZWFkZXIgZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtdXBwZXJjYXNlIGZvbnQtc2l6ZS14cyB0ZXh0LXByaW1hcnkgcGItMlwiPkNob2lzaXIgb3BlcmF0aW9uIDo8L2xpPicgK1xyXG4gICAgICAgICAgICAgIGRhdGEgK1xyXG4gICAgICAgICAgICAgIFwiIDwvdWw+IDwvZGl2PiBcXHQ8L2Rpdj5cXHRcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJzxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcImY+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgICAgIGV4cG9ydE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY29sdW1uczogXCI6dmlzaWJsZVwiLFxyXG4gICAgICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgICAgICAgICAgYm9keTogZnVuY3Rpb24oZGF0YSwgcm93LCBjb2x1bW4sIG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gJCgnPHA+JyArIGRhdGEgKyAnPC9wPicpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5pc051bWVyaWMoZGF0YS5yZXBsYWNlKCcsJywgJy4nKSkgPyBkYXRhLnJlcGxhY2UoJywnLCAnLicpIDogZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIC8vIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coc3QpO1xyXG4gICAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gICAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAgIC8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoXHJcbiAgICAgICAgICAgIGFwaSxcclxuICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFtdLCBbXSk7XHJcbiAgIC8vIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbNSwxMV0sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuLypjb2x1bW4gMSBkZSBkYXRhdGJsZSBzZWFyY2gqL1xyXG5cclxuJChcIi5yZW1vdmUtZmlsdGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJChcIi5hY3Rpb25faGVhZFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmFjdGlvbiAsLmFjdGlvbl9oZWFkXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG59KTtcclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hY3Rpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG59KTtcclxuXHJcbi8qICAkKCcjZ3JpZCcpLm9uKCdjbGljaycsICcuc3RhdHV0X29wJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiB2YXIgbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdyb2wnKTsgKi9cclxuLy9hbGVydChuYW1lK1wiXCIraWQpO1xyXG4kKFwiLnNlbGVjdDJfZGVtb18zXCIpLnNlbGVjdDIoe1xyXG4gICAgcGxhY2Vob2xkZXI6IFwiQWN0aW9uXCIsXHJcbiAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoXCIubGlzdF9hY3Rpb25zXCIpLmNoYW5nZShmdW5jdGlvbiAoZSkge30pO1xyXG4kKFwiI2dyaWQgdGJvZHlcIikub24oXCJjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYmxlLiQoXCJ0ci5zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvL2FsZXJ0KDEpXHJcbiAgICAvKiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgXHJcbiAgICAgJCgnI2dyaWQnKS5zaG93KDUwMCk7XHJcbiAgICAgfSk7Ki9cclxuICAgIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzISEhJyk7XHJcbiAgICAkKFwiI19zdGF0dXRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlX3N0YXR1dFwiLCB7aWQ6IGlkfSksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICB7dGltZU91dDogNDAwMH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuYWN0aW9uc1wiKS5vbihcImNsaWNrXCIsIFwiLmNsb3NlLW1lXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8kKCcuY2xvc2UtbWUnKS5jbGljayhmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgJChcIi5hY3Rpb25zXCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5hY3Rpb25zXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fc3RhdHV0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgICAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlX3N0YXR1dFwiLCB7aWQ6IGlkfSksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybV9zdGF0dXQgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiI19kZW1hbmRlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX1BhaWVtZW50XCIsIHtpZDogaWR9KTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI19zaG93XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2NvbnN1bHRlXCIsIHtpZDogaWR9KTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI19pbXByaW1lclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcblxyXG4gICAgICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiZmFjdHVyZUlkXCIpO1xyXG4gICAgICAgIC8vIGFsZXJ0KGlkKTtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJwZGZfc2hvd19mYWN0dXJlXCIsIHtpZDogaWR9KTtcclxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLm5ld1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJmYWN0dXJlSWRcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG5cclxuICAgICAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICAgICAgbC5zdGFydCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3QpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICAgICAvLyBhbGVydChpZCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZV9pbnNlcnRcIiwge2lkOiBpZH0pLFxyXG4gICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLlwiICsgc2VsZWN0b3IgKyBcIiAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC13YXJuaW5nJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybVwiKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgdGJvZHlcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubmV3LWFydGljbGUtYnRuXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHkgdHJcIikubm90KFwiOmxhc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1zdWNjZXNzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi51YV90X2ZhY3R1cmVmcnNjYWJfYXBwbHlfdHJhbnNpdGlvbnNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRpdGxlXCIpOyBcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9ICQodGhpcykuYXR0cihcImRhdGEtdHJhbnNpdGlvblwiKTtcclxuXHJcbiAgICAgICAgZHRhLmFwcGVuZChcImlkXCIsIGlkKTtcclxuICAgICAgICBkdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xyXG4gICAgICAgIGR0YS5hcHBlbmQoXCJ0cmFuc2l0aW9uXCIsIHRyYW5zaXRpb24pO1xyXG4gICAgICAgIC8vYWxlcnQodHJhbnNpdGlvbik7XHJcbiAgICAgIC8vICBhbGVydCh0aXRsZSk7XHJcblxyXG4gICAgIC8vICAgYWxlcnQoaWQpO1xyXG5cclxuICAgICAgICBpZih0cmFuc2l0aW9uID09IFwiYXByZXNfdmFsaWRlcl9nZW5lcmVyXCIpe1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfZ2VuZXJlclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5wYXJ2ZW51ZVwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJChcIi5wYXJ2ZW51ZVwiKS5zZWxlY3QyKCdkYXRhJykgJiYgJChcIi5wYXJ2ZW51ZVwiKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dC5pbmRleE9mKCdub24gcGFydmVudWUnKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdjbGFzc1Nob3cnKTsgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5zaG93KCkuYWRkQ2xhc3MoJ2NsYXNzU2hvdycpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjTXlNb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnBhcnZlbnVlJykub24oJ3NlbGVjdDI6c2VsZWN0aW5nJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5wYXJhbXMuYXJncy5kYXRhLnRleHQuaW5kZXhPZignbm9uIHBhcnZlbnVlJykgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ2NsYXNzU2hvdycpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5zaG93KCkuYWRkQ2xhc3MoJ2NsYXNzU2hvdycpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaWQpIHtcclxuICAgICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciBhIGwnZXRhdCAnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIicgcG91ciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpICFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm9uICFcIixcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfYXBwbHlfdHJhbnNpdGlvbnNcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfUGFpZW1lbnRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZU91dDogNDAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkZhY3R1cmUgbm9uIHJlbnNlaWduZSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnZhciB0YWJsZVNob3cgPSAkKFwiI2RhdGF0YWJsZS1zaG93XCIpLkRhdGFUYWJsZSh7XHJcbiAgICBzY3JvbGxZOiBcIjIwMHB4XCIsXHJcbiAgICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICAgIHBhZ2luZzogZmFsc2UsXHJcbiAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gICAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIChyb3csIGRhdGEsIHN0YXJ0LCBlbmQsIGRpc3BsYXkpIHtcclxuICAgICAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgICAgICAgICAgIGRhdGE7XHJcbiAgICAgICAgdmFyIHRvdGFsLCBwYWdlVG90YWw7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGkgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMVxyXG4gICAgICAgICAgICAgICAgICAgIDogdHlwZW9mIGkgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGlcclxuICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gVG90YWwgb3ZlciBhbGwgcGFnZXNcclxuICAgICAgICB0b3RhbCA9IGFwaVxyXG4gICAgICAgICAgICAgICAgLmNvbHVtbig3KVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgLy8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuICAgICAgICBwYWdlVG90YWwgPSBhcGlcclxuICAgICAgICAgICAgICAgIC5jb2x1bW4oNywge3BhZ2U6IFwiY3VycmVudFwifSlcclxuICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBmb290ZXJcclxuICAgICAgICAkKGFwaS5jb2x1bW4oMSkuZm9vdGVyKCkpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICBcIlRvdGFsIDogXCIgKyAoTWF0aC5yb3VuZChwYWdlVG90YWwgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4kKFwiLl9nZW5lcmVyX2Zvcm1cIikuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gJChcImlucHV0W25hbWU9X2lkXVwiKS52YWwoKTtcclxuXHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2F2b2lyX2luc2VydFwiLCB7aWQ6IGlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChyZXN1bHQuZXJyb3JzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0cldpZHRvdXRQcm9ncmVzcy53YXJuaW5nKHZhbHVlLCBcIndhcm5pbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlU2hvdyA9ICQoXCIjZGF0YXRhYmxlLXNob3cyXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBzY3JvbGxZOiBcIjIwMHB4XCIsXHJcbiAgICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICAgIHBhZ2luZzogZmFsc2UsXHJcbiAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gICAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIChyb3csIGRhdGEsIHN0YXJ0LCBlbmQsIGRpc3BsYXkpIHtcclxuICAgICAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgICAgICAgICAgIGRhdGE7XHJcbiAgICAgICAgdmFyIHRvdGFsLCBwYWdlVG90YWw7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGkgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMVxyXG4gICAgICAgICAgICAgICAgICAgIDogdHlwZW9mIGkgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGlcclxuICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gVG90YWwgb3ZlciBhbGwgcGFnZXNcclxuICAgICAgICB0b3RhbCA9IGFwaVxyXG4gICAgICAgICAgICAgICAgLmNvbHVtbig0KVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgLy8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuICAgICAgICBwYWdlVG90YWwgPSBhcGlcclxuICAgICAgICAgICAgICAgIC5jb2x1bW4oMTEsIHtwYWdlOiBcImN1cnJlbnRcIn0pXHJcbiAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgZm9vdGVyXHJcbiAgICAgICAgJChhcGkuY29sdW1uKDEpLmZvb3RlcigpKS5odG1sKFxyXG4gICAgICAgICAgICAgICAgXCJUb3RhbCA6IFwiICsgKE1hdGgucm91bmQocGFnZVRvdGFsICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8kKCdib2R5Jykub24oJ2NoYW5nZScsICcucGFpZW1lbnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8kKCcucGFpZW1lbnQnKS5iaW5kKCdsb2FkJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICQoXCIucGFpZW1lbnRcIilcclxuICAgICAgICAgICAgLm9uKFwiY2hhbmdlIHJpZ2h0bm93XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJsb2NfY2hlcXVlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN1bml2X3RfcmVnbGVtZW50X2RhdGVFY2hlYW5jZVwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN1bml2X3RfcmVnbGVtZW50X3JlZmVyZW5jZVwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5ibG9jX2NoZXF1ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAxIHx8ICQodGhpcykudmFsKCkgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYmxvY19iYW5xdWVcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJsb2NfYmFucXVlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJsb2NfY29tcHRlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5ibG9jX2NvbXB0ZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50cmlnZ2VySGFuZGxlcihcInJpZ2h0bm93XCIpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiNfZGVsZXRlX2ZhY3R1cmVcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBcclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuXHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF9VYVRGYWN0dXJlZnJzY2FiX2RlbGV0ZV9tdWx0aXBsZV9mYWN0dXJlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3VhX3RfZmFjdHVyZV9pbmRleCcpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5fZGVsZXRlX2ZhY3R1cmVcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcblxyXG4gIFxyXG5cclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gIC8vICBhbGVydCggX2FycmF5X2lkcyk7XHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9VYVRGYWN0dXJlZnJzY2FiX2RlbGV0ZV9tdWx0aXBsZV9mYWN0dXJlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2dyaWQnKS5EYXRhVGFibGUoKS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoXCIjX2dlbmVyZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiBcclxuXHJcbiAgIFxyXG5cclxuXHJcbiAgXHJcblxyXG5pZigkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKXtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZWZyc2NhYl9nZW5lcmVyXCIsIHtcclxuICAgICAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImRhdGEtaWRcIiksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIucGFydmVudWVcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICBcclxuXHJcbmlmKCQoXCIucGFydmVudWVcIikuc2VsZWN0MignZGF0YScpICYmICQoXCIucGFydmVudWVcIikuc2VsZWN0MignZGF0YScpWzBdLnRleHQuaW5kZXhPZignbm9uIHBhcnZlbnVlJykgIT09IC0xKXtcclxuICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ2NsYXNzU2hvdycpOyBcclxufWVsc2V7XHJcbiAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuc2hvdygpLmFkZENsYXNzKCdjbGFzc1Nob3cnKTsgIFxyXG59XHJcblxyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAkKCcucGFydmVudWUnKS5vbignc2VsZWN0MjpzZWxlY3RpbmcnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCgpO1xyXG4gICAgICAgICAgICAgICAgIGlmKGUucGFyYW1zLmFyZ3MuZGF0YS50ZXh0LmluZGV4T2YoJ25vbiBwYXJ2ZW51ZScpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmRhdGVEb2MsLnJlZkRvYycpLmhpZGUoKS5yZW1vdmVDbGFzcygnY2xhc3NTaG93Jyk7IFxyXG4gICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuc2hvdygpLmFkZENsYXNzKCdjbGFzc1Nob3cnKTsgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcblxyXG59XHJcbiAgXHJcbiAgXHJcbiAgICAgICBcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiI19hbm51bGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGFubnVsZXIgY2V0dGUgZmFjdHVyZSA/XCIsXHJcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObyAhXCIsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2FubnVsZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3VhX3RfZmFjdHVyZV9pbmRleCcpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuIFxyXG5cclxuXHJcbiAgJChcIiNfZGVzYWN0aXZlcl9mYWN0dXJlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gXHJcblxyXG4gICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcblxyXG5cclxuICBcclxuXHJcbmlmKF9hcnJheV9pZHMpe1xyXG5cclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgLmZpcmUoe1xyXG4gICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZGVzYWN0aXZlciBjZXR0ZSBmYWN0dXJlID9cIixcclxuICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBEZXNhY3RpdmVyIVwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VhX3RfZmFjdHVyZWZyc2NhYl9kZXNhY3RpdmVyJyksXHJcbiAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuICBcclxuICBcclxuICAgICAgIFxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuX2Rlc2FjdGl2ZXJfZmFjdHVyZVwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHJcbiBcclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgLy8gYWxlcnQoX2FycmF5X2lkcyk7XHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGRlc2FjdGl2ZXIgY2V0dGUgZmFjdHVyZSA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWJhbic+PC9pPiBPdWksIERlc2FjdGl2ZXIhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2Rlc2FjdGl2ZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGFibGUyID0gJChcIiNncmlkMlwiKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZWZyc2NhYl9hdm9pcl9saXN0XCIpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGFibGUuaGFzT3duUHJvcGVydHkoJ3NldHRpbmdzJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IHRhYmxlLnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgXSxcclxuICAgIHBhZ2VMZW5ndGg6IDEwLFxyXG4gICAgb3JkZXI6IFtbMCwgXCJhc2NcIl1dLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogdHJ1ZX0sXHJcbiAgICBdLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIC8vIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxudGFibGUyLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChcclxuICAgICAgICAgICAgYXBpLFxyXG4gICAgICAgICAgICBbMSwgMywgNCwgOCwgOSwgMTAsIDExLCAxMiwgMTNdLFxyXG4gICAgICAgICAgICBbXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbMl0sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbNSwgNiwgNywgXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLnNhdmVfZm9ybV9hdm9pclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIC8vdmFyIGlkID0gJCgnI3Rlc3QnKS5kYXRhKFwiZmFjdHVyZUlkXCIpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF91YXRmYWN0dXJlX2FkZF9hdm9pcl9wb3B1cFwiKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC13YXJuaW5nJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuc2F2ZV9mb3JtX2Fjb21wdGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvL3ZhciBpZCA9ICQoJyN0ZXN0JykuZGF0YShcImZhY3R1cmVJZFwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfdWF0ZmFjdHVyZV9hZGRfYWNvbXB0ZV9wb3B1cFwiKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC13YXJuaW5nJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLypcclxuICQoXCIjX2Fjb21wdGVcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuIC8vICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gLy8gICAgaWYgKGlkKSB7XHJcbiAkLmFqYXgoe1xyXG4gdHlwZTogXCJQT1NUXCIsXHJcbiB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVfYWNvbXB0ZV9uZXdcIiksXHJcbiBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICQoXCIjTW9kYWxBY29tcHRlRHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiB9LCA2MDApO1xyXG4gfSxcclxuIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiB9LFxyXG4gfSk7XHJcbiAvLyAgICB9IGVsc2Uge1xyXG4gLy8gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gLy8gICAgICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuIC8vICAgICAgICAgICAgICAgIFwid2FybmluZ1wiLFxyXG4gLy8gICAgICAgICAgICAgICAge3RpbWVPdXQ6IDQwMDB9XHJcbiAvLyAgICAgICAgKTtcclxuIC8vICAgIH1cclxuIFxyXG4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gfSk7Ki9cclxuXHJcbnZhciBvYmoyID0gbmV3IE9iamVjdCgpO1xyXG5vYmoyW1wiZG9zc2llcl9wYXRoXCJdID0gXCJjaGFuZ2VfZG9zc2llcl9mYWN0dXJlX3BvcHVwXCI7XHJcbmxpc3RBY3Rpb25zLmxpc3RBY3Rpb25zKG9iajIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLnNhdmVfZmFjdHVyZV9nZW5lcmVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcblxyXG4gIHZhciBkdGEyID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgdmFyIGlkID0gJCgnI2lkJykuYXR0cigndmFsdWUnKTtcclxuICAgICAgICB2YXIgdGl0bGUgPSBcIlwiOyBcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IFwiYXByZXNfdmFsaWRlcl9nZW5lcmVyXCI7XHJcblxyXG4gICAgICAgIGR0YTIuYXBwZW5kKFwiaWRcIiwgaWQpO1xyXG4gICAgICAgIGR0YTIuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xyXG4gICAgICAgIGR0YTIuYXBwZW5kKFwidHJhbnNpdGlvblwiLCB0cmFuc2l0aW9uKTtcclxuICAvL3ZhciBpZCA9ICQoJyN0ZXN0JykuZGF0YShcImZhY3R1cmVJZFwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gLy9hbGVydCgkKCcjaWQnKS5hdHRyKCd2YWx1ZScpKTtcclxuICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2dlbmVyZXJcIix7aWQ6JCgnI2lkJykuYXR0cigndmFsdWUnKX0pLFxyXG4gICAgICBkYXRhOiBkdGEsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkdGEyLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2FwcGx5X3RyYW5zaXRpb25zXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX1BhaWVtZW50XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVPdXQ6IDQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnLnBkZl9ieV9jb2RlJyxmdW5jdGlvbihlKXtcclxuICAgIHdpbmRvdy5vcGVuKFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfZG9jdW1lbnRfb2xkX3N5c1wiLCB7XHJcbiAgICAgICAgaWQ6ICQodGhpcykuYXR0cignZGF0YS1pZCcpXHJcbiAgICB9KSwgJ19ibGFuaycpO1xyXG59KVxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuaW1wcmltZV9kb2N1bWVudCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKCQodGhpcykuYXR0cihcImRhdGEtdmFsaWRlXCIpID09IDApICB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoJ2ltcG9zc2libGUgZFxcJ2ltcHJpbWVyIGxlIGRvY3VtZW50LCBtYW5xdWUgZGUgc2lnbmF0dXJlIScsICdFcnJldXInLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbigkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgJ19ibGFuaycpO1xyXG59KTtcclxubGV0IGZhY3R1cmVJZDtcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcubW9kaWZpZXJfcmVmJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZmFjdHVyZUlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJylcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfaW5mb19yZWZcIiwgeyBpZDogZmFjdHVyZUlkIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5maW5kKFwiI2RvY3VtZW50X3JlZlwiKS52YWwocmVzdWx0LnJlZl9kb2MpXHJcbiAgICAgICAgICAgICQoXCIjTXlNb2RhbFJlZk1vZGlmaWVyXCIpLmZpbmQoXCIjZGF0ZV9kb2N1bWVudFwiKS52YWwocmVzdWx0LmRhdGVfcmVmKVxyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5maW5kKFwiI2RhdGVfdmFsaWRlclwiKS52YWwocmVzdWx0LmRhdGVfdmFsaWRlKVxyXG5cclxuICAgICAgICAgICAgJChcIiNNeU1vZGFsUmVmTW9kaWZpZXJcIikubW9kYWwoJ3Nob3cnKVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc3ByMVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZDFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnNhdmVfbW9kaWZ5JywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX3NldF9pbmZvX3JlZlwiLCB7IGlkOiBmYWN0dXJlSWQgfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIjTXlNb2RhbFJlZk1vZGlmaWVyXCIpLmZpbmQoXCIjZG9jdW1lbnRfcmVmXCIpLnZhbChcIlwiKVxyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5maW5kKFwiI2RhdGVfZG9jdW1lbnRcIikudmFsKFwiXCIpXHJcbiAgICAgICAgICAgICQoXCIjTXlNb2RhbFJlZk1vZGlmaWVyXCIpLmZpbmQoXCIjZGF0ZV92YWxpZGVyXCIpLnZhbChcIlwiKVxyXG5cclxuICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkKFwiI015TW9kYWxSZWZNb2RpZmllclwiKS5tb2RhbCgnaGlkZScpXHJcblxyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiQoXCIjYWpvdXRlckJSRFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoYWN0aW9uX3Rlc3QpO1xyXG4gICAgXHJcbiAgICAvLyBpZiAodHJhbnNhY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICAgICAgbC5zdGFydCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0X2ZhY3R1cmVmcnNjYWJfYm9yZGVyZWF1eCcpLFxyXG4gICAgICAgICAgICAvLyBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KCdtZXNzYWdlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm1lc3NhZ2UudGl0bGUgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYm9kX3ZhbGlkZXJcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVZhbGlkZXJcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5zcHJfdmFsaWRlclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kX3ZhbGlkZXJcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdmFsaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hY3Rpb25cIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWxsYWN0aW9uc1wiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIC8vIH1cclxuXHJcbn0pXHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2tleXByZXNzJywgJyNjb2RlX3RyX2ZhYycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBjb2RlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGlmKGUud2hpY2ggPT0gMTMpICB7XHJcbiAgICAgICAgaWYoY29kZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2ZhY3R1cmVmcnNjYWJfZ2V0X2NvZGVcIiksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvZGVmOiBjb2RlLFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgLy8gcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGJvcmRlcmVhdXguZmluZEluZGV4KCh0KSA9PiB0ID09IHJlc3VsdC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PSBcIi0xXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJlYXV4LnB1c2gocmVzdWx0LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIudHJhbnNhY3Rpb25ib2R5XCIpLnByZXBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgaWQ9XCIke3Jlc3VsdC5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke3Jlc3VsdC5jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XCJmYSBmYS1jbG9zZSB0ZXh0LWRhbmdlciByZW1vdmVfdHJhbnNhY3Rpb25cIiAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIGApXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvZGVfdHJfZmFjJykudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgXCJEw6lqYSBleGlzdGUhXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcucmVtb3ZlX3RyYW5zYWN0aW9uJywgZnVuY3Rpb24oZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2FtaW5lJylcclxuICAgIGxldCB0ciA9ICQodGhpcykucGFyZW50cygndHInKVxyXG4gICAgbGV0IGlkID0gdHIuYXR0cihcImlkXCIpO1xyXG4gICAgdmFyIGluZGV4ID0gYm9yZGVyZWF1eC5maW5kSW5kZXgoKHQpID0+IHQgPT0gaWQpO1xyXG4gICAgYm9yZGVyZWF1eC5zcGxpY2UoaW5kZXgsIDEpICBcclxuICAgIGNvbnNvbGUubG9nKGJvcmRlcmVhdXgpO1xyXG4gICAgdHIucmVtb3ZlKCk7XHJcbn0pXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcjRW5yZWdpc3RyZXJDb2RlQlJEJywgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgYWxlcnQoJ3Rlc3QnKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGJvcmRlcmVhdXgubGVuZ3RoID09IDApIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IGFqb3V0ZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgLy8gdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBkdGEuYXBwZW5kKCdib3JkZXJlYXV4JywgSlNPTi5zdHJpbmdpZnkoYm9yZGVyZWF1eCkpXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfZmFjdHVyZWZyc2NhYl9ib3JkZXJlYXV4JyksXHJcbiAgICAgICAgLy8gZGF0YTogZHRhLFxyXG4gICAgICAgIGRhdGE6e2JvcmRlcmVhdXg6IEpTT04uc3RyaW5naWZ5KGJvcmRlcmVhdXgpfSxcclxuICAgICAgICAvLyBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgLy8gY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG5cclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG59KTtcclxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVDYWIob2JqKSB7XHJcblxyXG4gICAvLyB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcblxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyb3V0ZSddLCB7J2lkJzogb2JqWydpZCddLCAndG9rZW4nOiBvYmpbJ3Rva2VuJ119KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVEZW1hbmRlKG9iaikge1xyXG5cclxuICAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAgLy9jb25zb2xlLmxvZyhpZCArICcgJyArIHRva2VuKTtcclxuICAgICBcclxuICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgJC5hamF4KHtcclxuIFxyXG4gICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICB9KTtcclxuIH1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=