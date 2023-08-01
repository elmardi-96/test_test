(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general_operation"],{

/***/ "./assets/js/components/tresorerie/general_operation.js":
/*!**************************************************************!*\
  !*** ./assets/js/components/tresorerie/general_operation.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
















var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.setRoutingData(routes);
global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
$("#grid tbody").on("click", ".info_op", function (e) {
  //alert();
  var id = $(this).closest("tr").attr("id");

  // alert(emp);

  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_info", {
      id: id
    }),
    success: function success(result) {
      $(".bod1").html(result).hide();
      $("#ModalDocumentDynamique1").modal("show");
      setTimeout(function () {
        $(".spr1").hide();
        $(".bod1").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_list2"),
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
    name: 'op.id',
    width: "5%"
  }, {
    orderable: true,
    name: 'op.code'
  }, {
    orderable: true,
    name: 'op.designation'
  }, {
    orderable: true,
    name: 'pp.code'
  }, {
    orderable: true,
    name: "DATE_FORMAT(`op`.`created`,'%Y')"
  }, {
    orderable: true,
    name: 'tr.ref_doc_asso'
  }, {
    orderable: true,
    name: "DATE_FORMAT(tr.date_doc_asso,'%d/%m/%Y')"
  }, {
    orderable: true,
    name: "DATE_FORMAT(op.date,'%d/%m/%Y')"
  }, {
    orderable: true,
    name: 'mdp.designation'
  }, {
    orderable: true,
    name: 'frs.societe'
  }, {
    orderable: true,
    name: 'cl.societe'
  }, {
    orderable: true,
    name: "CONCAT (emp.nom,' ',emp.prenom)"
  }, {
    orderable: true,
    name: "compt.abreviation"
  }, {
    orderable: true,
    name: 'op.montant',
    className: 'fac-back'
  }, {
    orderable: true,
    name: 'tab.montantRegle',
    className: 'fac-back'
  }, {
    orderable: true,
    name: 'nbFacture.NbrOperations',
    className: 'fac-back'
  }, {
    orderable: true,
    name: 'tab.NbrReglements',
    className: 'fac-back'
  }, {
    orderable: true,
    name: 'parvenue.v'
  }, {
    orderable: true,
    name: 'op.position_actuel'
  }, {
    orderable: false
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
  }
  // {
  //     extend: "excel",
  //     exportOptions: {
  //       columns: ":visible",
  //       rows: ":visible",
  //       format: {
  //         body: function(data, row, column, node) {
  //             data = $('<p>' + data + '</p>').text();
  //             return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
  //         }
  //     }
  //     },
  // },
  ],

  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("datatables_langue"),
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
    var floatVal = function floatVal(i) {
      if (typeof i === "number") {
        return i;
      } else if (typeof i === "string") {
        i = i.replace("$", "");
        i = i.replace(",", "");
        var result = parseFloat(i);
        if (isNaN(result)) {
          try {
            var result = $jq(i).text();
            result = parseFloat(result);
            if (isNaN(result)) {
              result = 0;
            }
            ;
            return result * 1;
          } catch (error) {
            return 0;
          }
        } else {
          return result * 1;
        }
      } else {
        // alert("Unhandled type for totals [" + (typeof i) + "]");
        return 0;
      }
    };
    var total4 = api.column(13, {
      page: 'current'
    }).data().reduce(function (a, b) {
      return floatVal(a) + floatVal(b);
    }, 0);
    $(api.column(13).footer()).append('<center class="center-class" style="font-size: 10px;">' + total4.toFixed(2) + " </center>");
    var total5 = api.column(14, {
      page: 'current'
    }).data().reduce(function (a, b) {
      return floatVal(a) + floatVal(b);
    }, 0);
    $(api.column(14).footer()).append('<center class="center-class" style="font-size: 10px;">' + total5.toFixed(2) + " </center>");
  }
});

//var table = $('#grid').DataTable({
//    ajax: {
//        url: Routing.generate('tr_operation_list'), // json datasource
//        type: "get",
//    },
//    "deferRender": true,
//    "stateSave": false,
//    "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
//
////    "columns": [
////        { "orderable": true, "searchable": true, "width": "1px", "targets": [0] },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////        { "orderable": true, "width": "10px", "targets": 0 },
////       
////
////
////    ],
//    "order": [[0, "desc"]],
//    dom: 'f<"html5buttons btn-group"B>lTgtip',
//    buttons: [
//        'columnsToggle',
//        {
//            text: 'Restaurer',
//            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
//            action: function (e, dt, node, config) {
//                table.state.clear();
//                window.location.reload();
//            },
//
//        },
//    ],
//    "language": {
//        "url": Routing.generate('datatables_langue'),
//        "processing": true
//    },
//    fixedHeader: true,
//    
//});

table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_20__["CustomSearchText"](api, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17], []);
  //    CustomSearchDatatable.CustomSearchDate(api, [3,10,12], []);
  //    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,8,7,15], []);

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_20__["CustomSearchCheckbox"](api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('tr_operation_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
jQuery.each($('.toastr-msg'), function (i, val) {
  console.log($(this).attr('data-toastr'));
  console.log($(this).text());
  if ($(this).attr('data-toastr') == "success") {
    toastr.success("Succees", $(this).text(), {
      timeOut: 4000
    });
  } else if ($(this).attr('data-toastr') == "warning") {
    toastr.warning("Warning", $(this).text(), {
      timeOut: 4000
    });
  } else if ($(this).attr('data-toastr') == "error") {
    toastr.error("erreur", $(this).text(), {
      timeOut: 4000
    });
  }
});
jQuery.each($('.form-errors li'), function (i, val) {
  console.log($(this).text());
});
/*check the form errors*/
if ($('.form-errors').text() != '') {
  toastr.error("erreur", $('.form-errors').text(), {
    timeOut: 4000
  });
}

/*$('.new').on('submit', '.form', function (e) {
    
    var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button
    var l = Ladda.create(document.activeElement);

// Start loading
    l.start();
    
    $.ajax({ 
        type: 'POST',
        url: Routing.generate('tr_operation_new'),
        data: dta,
        processData: false,
        contentType: false,
        success: function (result) {
            l.stop();
            
            if (result.errors) {
              
                ShowFormErrors(selector, form_name, result.errors);
            } else if (result.empty) {
               
                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
            } else if (result.code=200) {
               // alert( result.message.data);
                toastr.success(result.message.text, result.message.title, {timeOut: 4000});
                var url = Routing.generate('tr_operation_index');
                window.location.href = url;
                ///location.reload();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            l.stop();
            toastr.error("Erreur", errorThrown, {timeOut: 4000})
            
          
        }
    });
    e.preventDefault();
});*/

$("#create_operation").click(function (e) {
  var form_name = $(".form").attr("name");

  //var params = $('.form').serializeArray();
  // var dta = new FormData($("#t_achatdemandeinternecab")[0]);

  var formData = new FormData();
  var params = $('.form').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
    //  console.log(val.name);
  });

  /*const data = JSON.stringify(formDataDetail)
  formData.append('detail', data);*/

  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_new"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('tr_operation_index');
        window.location.href = url;
        ///location.reload();
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
$("#mouvement_operation").click(function (e) {
  var form_name = $(".form").attr("name");

  //var params = $('.form').serializeArray();
  // var dta = new FormData($("#t_achatdemandeinternecab")[0]);

  var formData = new FormData();
  var params = $('.form').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
    //  console.log(val.name);
  });

  /*const data = JSON.stringify(formDataDetail)
  formData.append('detail', data);*/

  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_mouvement"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      //   alert(result.code);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('tr_operation_index');
        window.location.href = url;
        ///location.reload();
      } else if (result.code == 403) {
        // alert( result.message.data);
        $('.errors-list').remove();
        // toastr.warning(result.message.text, result.message.title, {timeOut: 4000});
        selector.find("#form_destination").parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + result.message.text + "</span></span></span>");
        // form[destination]
        ///location.reload();
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
$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    //  url: Routing.generate('tr_charge_edit'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        //  alert(result.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
        //window.location.href = url;
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
$('body').on('submit', '.paiementF', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = $("#_id").val();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('tr_operation_payment', {
      'id': id
    }),
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        //  alert(result.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
        //window.location.href = url;
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
$('body').on('submit', '.paiementAchat', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = $("#_id").val();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('tr_operation_payment_achat', {
      'id': id
    }),
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        //  alert(result.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
        //window.location.href = url;
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
$('body').on('submit', '.paiementMouvement', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = $("#_id").val();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('tr_operation_payment_mouvement', {
      'id': id
    }),
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        //  alert(result.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
        //window.location.href = url;
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
$('body').on('submit', '.paiementVente', function (e) {
  //  alert();
  e.preventDefault();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  console.log(dta);
  // return;

  var id = $("#_id").val();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('tr_operation_payment_vente', {
      'id': id
    }),
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        //  alert(result.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
        //window.location.href = url;
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
$('body').on('change', '.paiement', function (e) {
  //alert($(this).val());
  //console.log($(this).select2('data'))
  if ($(this).val() == 3) {
    $('.bloc_cheque').show();
    e.stopPropagation();
  } else {
    $('.bloc_cheque').hide();
    e.stopPropagation();
  }
  // $("#valid").css("display", "block");
});

$('body').on('change', '.form_piece', function (e) {
  //  alert($(this).val())
  if ($(this).val() == 30) {
    $('#form_destination').prop('disabled', true);
  } else {
    $('#form_destination').prop('disabled', false);
  }
  // 
});

$("body").on("click", ".imp_operation", function (e) {
  var id = $(this).attr("data-id");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_impression_achat", {
      id: id
    }),
    success: function success(result) {
      $("#ModalDocumentDynamiqueImpression .bod_impression").html(result);
      $('.sel2').select2();
      $("#ModalDocumentDynamiqueImpression").modal("show");
    }
  });
  e.preventDefault();
});
$('body').on('submit', '.impression_operation', function (e) {
  //    alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = $("#_id").val();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate('tr_operation_impression_achat', {
      'id': id
    }),
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        //   alert(result.message.route);

        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate(result.message.route, {
          id: result.message.data
        });
        window.open(url);

        //  window.location.href = url;
        // location.reload();
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
$("body").on('change', ".paiementAchat #tr_transaction_modepaiement", function () {
  var id = $(this).val();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_getcompte", {
      id: id
    }),
    success: function success(result) {
      // console.log(result);
      $(".paiementAchat .compte_transaction").html(result).select2();
    }
  });
});
$("body").on("click", ".tr_operation_apply_transitions", function (e) {
  //alert();
  var dta = new FormData();
  var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");
  if (transition == 'achat_apres_demande_paiement_generer') {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_payment_achat", {
        id: id
      }),
      success: function success(result) {
        $("#ModalDocumentDynamique .bod").html(result);
        $('.sel2').select2();
        $("#ModalDocumentDynamique").modal("show");
      }
    });
  } else if (transition == 'vente_apres_valider_generer') {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_payment_vente", {
        id: id
      }),
      success: function success(result) {
        $("#ModalDocumentDynamique .bod").html(result);
        $('.sel2').select2();
        $("#ModalDocumentDynamique").modal("show");
      }
    });
  } else if (transition == 'mouvement_apres_valider_generer') {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_payment_mouvement", {
        id: id
      }),
      success: function success(result) {
        $("#ModalDocumentDynamique .bod").html(result);
        $('.sel2').select2();
        $("#ModalDocumentDynamique").modal("show");
      }
    });
  } else {
    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_apply_transitions", {
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
                location.reload();
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
      });
    } else {
      toastr.warning("operation non renseigne ", "warning", {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$("#_delete").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var obj = {
    route: "tr_operation_delete",
    redirection: "tr_operation_index",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_17__["deleteCab"])(obj);
  e.preventDefault();
});
var tableShow = $("#datatable-show2").DataTable({
  // scrollY: "200px",
  // scrollCollapse: true,
  paging: false,
  autoWidth: false,
  searching: false // remove search bar
});

$('body').on('change', '#tr_transaction_operations', function (e) {
  //alert();
  console.log($(this).val());
  $("#tr_transaction_montant").prop('disabled', true);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_payment", {
      'id': $("#_id").val()
    }),
    data: {
      "operations": $(this).val(),
      'change': true
    },
    success: function success(result) {
      //alert(result)
      $("#tr_transaction_montant").val(result.message.montant);
      $("#tr_transaction_montant").prop('disabled', false);
    }
  });
});
$(".sel2").select2();
$(".action_head").click(function () {
  console.log($(".action").filter(":checked").length);
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".scolumn_0", function () {
  $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("change", ".list_actions", function () {
  //alert()

  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });

  // $("body > ._multiple_actions option[value='']").attr('selected', 'selected');

  console.log($(this).val());
  if ($(this).val() == "generer_transaction" && _array_ids != null) {
    //alert()
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("general_operation_generer_transaction", {
        id: 0
      }),
      data: {
        _array_ids: _array_ids
      },
      success: function success(result) {
        if (result.code == 403) {
          $("#MyModal").modal("hide");
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        } else {
          $(".bod").html(result).hide();
          $("#ModalDocumentDynamique").modal("show");
          $(".sel2").select2();
          $(".parvenue").select2();
          if ($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1) {
            $('.dateDoc,.refDoc').hide().removeClass('classShow');
          } else {
            $('.dateDoc,.refDoc').show().addClass('classShow');
          }
          $('.parvenue').on('select2:selecting', function (e) {
            //alert()
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
      }
    });
  }
});
$("body").on("submit", ".save_form_transaction", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });
  dta.append('_array_ids', _array_ids);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("general_operation_generer_transaction"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });

        // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      } else if (result.message.data) {
        //table2.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //$("#ModalDocumentDynamique").modal("hide");
        //l.stop();

        /*var url = Routing.generate("t_UaTFacturefrscab_update_acompte", {
            id: result.data,
        });
        window.location.href = url;*/
        window.location.reload();

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
$(".save_eci").submit(function (e) {
  e.preventDefault();
  var selector = $(this);
  var formData = new FormData(selector[0]);

  /*const data = JSON.stringify(formDataDetail)
  formData.append('detail', data);*/

  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("eci_new"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      $('#ajouter').modal("hide");
      table.ajax.reload();
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
var eci_id;
var montant_final;
var code_facture = null;
var operations = [];
$("body").on('click', ".info_lettrage", function (e) {
  e.preventDefault();
  $("#lettrage").modal("show");
  var id = $(this).attr("data-id");
  eci_id = id;
  var formData = new FormData();
  formData.append("id", id);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("eci_details_facture"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_18__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        $("#lettrage .spr1").hide();
        $("#lettrage .bod1 #montant").val(result.data.montant);
        $("#lettrage .bod1").show();
        $("#lettrage .my-button").prop("disabled", true);
        ///location.reload();
        $(".facture_table_lettre .data").empty();
        operations = [];
        montant_final = 0;
        if (result.data.operations.length > 0) {
          result.data.operations.map(function (e) {
            $(".facture_table_lettre .data").append("\n                            <tr>\n                                <td>".concat(e.code, "</td>\n                                <td>").concat(e.client, "</td>\n                                <td class='montant_by_facture'>").concat(e.montant, "</td>\n                                <td></td>\n                            </tr>\n                        "));
            montant_final += +e.montant;
          });
        }
        $("#lettrage .bod1 #reste").val((result.data.montant - montant_final).toFixed(2));
        $('.montant_final').text(montant_final.toFixed(2));
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
$("body").on('click', ".add_facture", function (e) {
  var icon = $(this);
  var code = $("#lettrage .bod1 #facture").val();
  var error = 0;
  $(".facture_table_lettre .data tr").map(function (e) {
    if ($(this).children('td:first').text() == code.trim()) {
      alert("Operation déja existe");
      error = 1;
    }
  });
  if (error === 1) {
    return;
  }
  $("#lettrage .my-button").prop("disabled", true);
  icon.removeClass("fa-plus add_facture").addClass("fa-spinner fa-spin");
  var formData = new FormData();
  formData.append("code", code);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("eci_check_facture"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.data == false) {
        $("#lettrage .bod1 #facture").css("border-color", "red");
        icon.addClass("fa-plus add_facture").removeClass("fa-spinner fa-spin");
      } else {
        $("#lettrage .bod1 #facture").css("border-color", "green");
        operations.push(code);
        $(".facture_table_lettre .data").append("\n                    <tr>\n                        <td>".concat(result.data.code, "</td>\n                        <td>").concat(result.data.client, "</td>\n                        <td class='montant_by_facture'>").concat(result.data.montant, "</td>\n                        <td><i class='fa fa-trash text-danger remove_this_facture'></i></td>\n                    </tr>\n                "));
        code_facture = result.data.code;
        montant_final += result.data.montant;
        $('.montant_final').text(montant_final.toFixed(2));
        var reste = $("#lettrage .bod1 #montant").val() - montant_final;
        console.log(reste);
        $("#lettrage .bod1 #reste").val(reste.toFixed(2));
        if (reste >= 0) {
          $("#lettrage .my-button").prop("disabled", false);
        } else {
          $("#lettrage .my-button").prop("disabled", true);
        }
        icon.addClass("fa-plus add_facture").removeClass("fa-spinner fa-spin");
        // $(".facture_area").hide();
        $("#lettrage .bod1 #facture").val("");
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      icon.addClass("fa-plus add_facture").removeClass("fa-spinner fa-spin");
    }
  });
});
$('body').on('click', ".remove_this_facture", function () {
  var trElement = $(this).parent().parent();
  montant_final -= trElement.find('.montant_by_facture').text();
  $('.montant_final').text(montant_final.toFixed(2));
  var reste = $("#lettrage .bod1 #montant").val() - montant_final;
  $("#lettrage .bod1 #reste").val(reste.toFixed(2));
  if (reste >= 0) {
    $("#lettrage .my-button").prop("disabled", false);
  } else {
    $("#lettrage .my-button").prop("disabled", true);
  }
  var code = trElement.children('td:first').text();
  operations.splice(operations.findIndex(function (operation) {
    return operation == code;
  }), 1);
  trElement.remove();
  $(".facture_area").show();
});
$("body").on('click', ".save_lettrage", function (e) {
  var formData = new FormData();
  formData.append("operations", JSON.stringify(operations));
  formData.append("id", eci_id);
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("eci_lettrage_persist"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      table.ajax.reload();
      $("#lettrage").modal("hide");
      operations = [];
      $(".facture_table_lettre .data").empty();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
$(".dossier_save").on('submit', function (e) {
  e.preventDefault();
  var formData = new FormData($(this)[0]);
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });
  if (_array_ids.length == 0) {
    toastr.warning("Veuillez selection des operation ECI", "Warning");
    return;
  }
  formData.append("arrayIds", JSON.stringify(_array_ids));
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.querySelector(".transfer_button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("eci_transfer"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      table.ajax.reload();
      $("#transfer").modal("hide");
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
$('#code_factures').select2({
  minimumInputLength: 3,
  // required enter 3 characters or more
  allowClear: true,
  placeholder: 'code_factures',
  language: "fr",
  ajax: {
    dataType: 'json',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_codefacture"),
    //    delay: 5,  // ini bebas mau di pake atau tidak
    data: function data(params) {
      return {
        search: params.term
      };
    },
    processResults: function processResults(data, page) {
      return {
        results: data
      };
    }
  }
});

// alert('test');

$(".Remboursement_form").on('submit', function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.querySelector("#remboursement .remboursement_button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("tr_operation_remboursement"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else {
        table.ajax.reload();
        $("#remboursement").modal("hide");
        $(".Remboursement_form").trigger("reset");
      }
      $("#code_factures").select2("val", "");
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
$(".dossier_save_interne").on('submit', function (e) {
  e.preventDefault();
  var formData = new FormData($(this)[0]);
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });
  if (_array_ids.length == 0) {
    toastr.warning("Veuillez selection des operation ECI", "Warning");
    return;
  }
  formData.append("arrayIds", JSON.stringify(_array_ids));
  var l = ladda__WEBPACK_IMPORTED_MODULE_19__["create"](document.querySelector("#transfer_interne .transfer_button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("eci_transfer_interne"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      table.ajax.reload();
      $("#transfer_interne").modal("hide");
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
$("body").on('click', '.compte_paiment', function (e) {
  $("body #paiementSpecifique").modal("show");
});
$("body").on('click', '.save_type_paiement', function (e) {
  $("body #paiementSpecifique").modal("hide");
});
$("body").on('change', '.type_paiement', function (e) {
  if ($(this).val() == "caisse") {
    $('body .paiement').val("9").trigger('change.select2');
  } else if ($(this).val() == "carte") {
    $('body .paiement').val("10").trigger('change.select2');
    // $('body .paiement').trigger('change.select2').trigger("change");
  } else if ($(this).val() == "virement_devise") {
    $('body .paiement').val("11").trigger('change.select2');
  } else if ($(this).val() == "carte_devise") {
    $('body .paiement').val("12").trigger('change.select2');
  } else {
    $('body .paiement').val("2").trigger('change.select2');
    // $('body .paiement').trigger('change.select2').trigger("change");
  }

  $('body .paiement').trigger("change");
});
$("body").on('click', '.avance', function (e) {
  var id = $(this).attr('data-id');
  // alert(id);
  if ($(this).is(':checked')) {
    $(".avance_montant").show();
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default.a.generate("get_operation_avance", {
        "operation": id
      }),
      success: function success(result) {
        // l.stop();
        $("body .avance_montant").val(result.montant);
        console.log(result);
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        l.stop();
        toastr.error("Erreur", errorThrown, {
          timeOut: 4000
        });
      }
    });
    return;
  }
  $(".avance_montant").hide();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/tresorerie/general_operation.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265","vendors~general_operation",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL2dlbmVyYWxfb3BlcmF0aW9uLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJvbiIsImUiLCJpZCIsImNsb3Nlc3QiLCJhdHRyIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJodG1sIiwiaGlkZSIsIm1vZGFsIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwidGFibGUiLCJEYXRhVGFibGUiLCJiZWZvcmVTZW5kIiwiaGFzT3duUHJvcGVydHkiLCJzZXR0aW5ncyIsImpxWEhSIiwiYWJvcnQiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJsZW5ndGhNZW51IiwicGFnZUxlbmd0aCIsIm9yZGVyIiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsIm5hbWUiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiYWN0aW9uIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwiZml4ZWRIZWFkZXIiLCJmb290ZXJDYWxsYmFjayIsInJvdyIsImRhdGEiLCJzdGFydCIsImVuZCIsImRpc3BsYXkiLCJyZW1vdmUiLCJhcGkiLCJpbnRWYWwiLCJpIiwicmVwbGFjZSIsImZsb2F0VmFsIiwicGFyc2VGbG9hdCIsImlzTmFOIiwiJGpxIiwiZXJyb3IiLCJ0b3RhbDQiLCJjb2x1bW4iLCJwYWdlIiwicmVkdWNlIiwiYSIsImIiLCJmb290ZXIiLCJhcHBlbmQiLCJ0b0ZpeGVkIiwidG90YWw1IiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsImhyZWYiLCJqUXVlcnkiLCJlYWNoIiwidmFsIiwiY29uc29sZSIsImxvZyIsInRvYXN0ciIsInRpbWVPdXQiLCJ3YXJuaW5nIiwiY2xpY2siLCJmb3JtX25hbWUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicGFyYW1zIiwic2VyaWFsaXplQXJyYXkiLCJ2YWx1ZSIsInNlbGVjdG9yIiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN0b3AiLCJlcnJvcnMiLCJTaG93Rm9ybUVycm9ycyIsImVtcHR5IiwibWVzc2FnZSIsInRpdGxlIiwiY29kZSIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImZpbmQiLCJwYXJlbnQiLCJkdGEiLCJhY3RpdmVFbGVtZW50Iiwic2hvdyIsInN0b3BQcm9wYWdhdGlvbiIsInByb3AiLCJzZWxlY3QyIiwicm91dGUiLCJvcGVuIiwidHJhbnNpdGlvbiIsImZpcmUiLCJzaG93Q2xhc3MiLCJwb3B1cCIsInBvc2l0aW9uIiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXNwb25zZUpTT04iLCJ0b2tlbiIsIm9iaiIsInJlZGlyZWN0aW9uIiwiZGVsZXRlQ2FiIiwidGFibGVTaG93IiwicGFnaW5nIiwiYXV0b1dpZHRoIiwic2VhcmNoaW5nIiwibW9udGFudCIsImZpbHRlciIsImxlbmd0aCIsInRvZ2dsZSIsIl9hcnJheV9pZHMiLCJwdXNoIiwiaW5kZXhPZiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJhcmdzIiwic3VibWl0IiwiZWNpX2lkIiwibW9udGFudF9maW5hbCIsImNvZGVfZmFjdHVyZSIsIm9wZXJhdGlvbnMiLCJtYXAiLCJjbGllbnQiLCJpY29uIiwiY2hpbGRyZW4iLCJ0cmltIiwiYWxlcnQiLCJjc3MiLCJyZXN0ZSIsInRyRWxlbWVudCIsInNwbGljZSIsImZpbmRJbmRleCIsIm9wZXJhdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJhbGxvd0NsZWFyIiwicGxhY2Vob2xkZXIiLCJkYXRhVHlwZSIsInNlYXJjaCIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJ0cmlnZ2VyIiwiaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUN2RDtBQUN0REEsbUJBQU8sQ0FBQywwR0FBK0MsQ0FBQztBQUNTO0FBQ2xDO0FBQzBEO0FBQ2pCO0FBR3hFQyxtSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUc5QkksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFFWixJQUFNQyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNTSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEQyxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDO0FBR0ZQLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQ1EsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0VBQ3REO0VBQ0ksSUFBSUMsRUFBRSxHQUFFVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNXLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQzs7RUFHeEM7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O01BQ0RzRCxLQUFLLEVBQUUsZUFBVTFDLEtBQUssRUFBRXlGLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQzdDZCxDQUFDLENBQUNNLElBQUksRUFBRTtRQUNSakIsTUFBTSxDQUFDdkIsS0FBSyxDQUFDLFFBQVEsRUFBRWdELFdBQVcsRUFBRTtVQUFDeEIsT0FBTyxFQUFFO1FBQUksQ0FBQyxDQUFDO01BQ3hEO0lBQ0osQ0FBQyxDQUFDO0lBQ0Y7RUFDSjtFQUNBaEcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNvQixJQUFJLEVBQUU7QUFDL0IsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiZ2VuZXJhbF9vcGVyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanMnO1xyXG5yZXF1aXJlKCcuLi8uLi9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanMnKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5cclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5cclxuJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuaW5mb19vcFwiLCBmdW5jdGlvbiAoZSkge1xyXG4vL2FsZXJ0KCk7XHJcbiAgICB2YXIgaWQ9ICQodGhpcykuY2xvc2VzdChcInRyXCIpLmF0dHIoXCJpZFwiKTtcclxuICBcclxuICAgXHJcbiAgICAvLyBhbGVydChlbXApO1xyXG5cclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidHJfb3BlcmF0aW9uX2luZm9cIix7aWQ6aWR9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAkKFwiLmJvZDFcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZTFcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuc3ByMVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuYm9kMVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gIFxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX29wZXJhdGlvbl9saXN0MlwiKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRhYmxlLmhhc093blByb3BlcnR5KCdzZXR0aW5ncycpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB0YWJsZS5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdvcC5pZCcsIHdpZHRoOiBcIjUlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdvcC5jb2RlJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ29wLmRlc2lnbmF0aW9uJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3BwLmNvZGUnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcIkRBVEVfRk9STUFUKGBvcGAuYGNyZWF0ZWRgLCclWScpXCJ9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICd0ci5yZWZfZG9jX2Fzc28nfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcIkRBVEVfRk9STUFUKHRyLmRhdGVfZG9jX2Fzc28sJyVkLyVtLyVZJylcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogXCJEQVRFX0ZPUk1BVChvcC5kYXRlLCclZC8lbS8lWScpXCJ9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdtZHAuZGVzaWduYXRpb24nfSxcclxuICAgICAgICBcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnZnJzLnNvY2lldGUnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnY2wuc29jaWV0ZSd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6IFwiQ09OQ0FUIChlbXAubm9tLCcgJyxlbXAucHJlbm9tKVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcImNvbXB0LmFicmV2aWF0aW9uXCJ9LFxyXG4gICAgICAgICBcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnb3AubW9udGFudCcgLCBjbGFzc05hbWU6ICdmYWMtYmFjayd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICd0YWIubW9udGFudFJlZ2xlJyxjbGFzc05hbWU6ICdmYWMtYmFjaycgfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnbmJGYWN0dXJlLk5ick9wZXJhdGlvbnMnLGNsYXNzTmFtZTogJ2ZhYy1iYWNrJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3RhYi5OYnJSZWdsZW1lbnRzJyxjbGFzc05hbWU6ICdmYWMtYmFjayd9LFxyXG5cclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAncGFydmVudWUudicgfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnb3AucG9zaXRpb25fYWN0dWVsJyB9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlfVxyXG4gICAgXSxcclxuICAgIC8vIGRvbTogJ2xCZnJ0aXAnLFxyXG4gICAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgZXh0ZW5kOiBcImV4Y2VsXCIsXHJcbiAgICAgICAgLy8gICAgIGV4cG9ydE9wdGlvbnM6IHtcclxuICAgICAgICAvLyAgICAgICBjb2x1bW5zOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgLy8gICAgICAgcm93czogXCI6dmlzaWJsZVwiLFxyXG4gICAgICAgIC8vICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgIC8vICAgICAgICAgYm9keTogZnVuY3Rpb24oZGF0YSwgcm93LCBjb2x1bW4sIG5vZGUpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhID0gJCgnPHA+JyArIGRhdGEgKyAnPC9wPicpLnRleHQoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gJC5pc051bWVyaWMoZGF0YS5yZXBsYWNlKCcsJywgJy4nKSkgPyBkYXRhLnJlcGxhY2UoJywnLCAnLicpIDogZGF0YTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICBdLFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gICAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIChyb3csIGRhdGEsIHN0YXJ0LCBlbmQsIGRpc3BsYXkpIHtcclxuICAgICAgICAkKFwiLmNlbnRlci1jbGFzc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgICAgICAgZGF0YTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGkgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgID8gaS5yZXBsYWNlKC9bXFwkLF0vZywgXCJcIikgKiAxXHJcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGZsb2F0VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgaSA9IGkucmVwbGFjZShcIiRcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgIGkgPSBpLnJlcGxhY2UoXCIsXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VGbG9hdChpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTihyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICRqcShpKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBhcnNlRmxvYXQocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHsgcmVzdWx0ID0gMCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICogMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyBhbGVydChcIlVuaGFuZGxlZCB0eXBlIGZvciB0b3RhbHMgW1wiICsgKHR5cGVvZiBpKSArIFwiXVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdG90YWw0ID0gYXBpXHJcbiAgICAgICAgICAgIC5jb2x1bW4oMTMseyBwYWdlOiAnY3VycmVudCd9KVxyXG4gICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbG9hdFZhbChhKSArIGZsb2F0VmFsKGIpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAkKGFwaS5jb2x1bW4oMTMpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCIgc3R5bGU9XCJmb250LXNpemU6IDEwcHg7XCI+JyArIHRvdGFsNC50b0ZpeGVkKDIpICtcIiA8L2NlbnRlcj5cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbDUgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbigxNCx7IHBhZ2U6ICdjdXJyZW50J30pXHJcbiAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsb2F0VmFsKGEpICsgZmxvYXRWYWwoYik7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICQoYXBpLmNvbHVtbigxNCkuZm9vdGVyKCkpLmFwcGVuZChcclxuICAgICAgICAgICAgJzxjZW50ZXIgY2xhc3M9XCJjZW50ZXItY2xhc3NcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTBweDtcIj4nICsgdG90YWw1LnRvRml4ZWQoMikgK1wiIDwvY2VudGVyPlwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgfSxcclxuICAgIFxyXG59KTtcclxuXHJcblxyXG4vL3ZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuLy8gICAgYWpheDoge1xyXG4vLyAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9vcGVyYXRpb25fbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuLy8gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbi8vICAgIH0sXHJcbi8vICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuLy8gICAgXCJzdGF0ZVNhdmVcIjogZmFsc2UsXHJcbi8vICAgIFwibGVuZ3RoTWVudVwiOiBbWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCAyMDAwMDAwMF0sIFsxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG4vL1xyXG4vLy8vICAgIFwiY29sdW1uc1wiOiBbXHJcbi8vLy8gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4vLy8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vLy8gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuLy8vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLy8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vLy8gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuLy8vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLy8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vLy8gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuLy8vLyAgICAgICBcclxuLy8vL1xyXG4vLy8vXHJcbi8vLy8gICAgXSxcclxuLy8gICAgXCJvcmRlclwiOiBbWzAsIFwiZGVzY1wiXV0sXHJcbi8vICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbi8vICAgIGJ1dHRvbnM6IFtcclxuLy8gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuLy8gICAgICAgIHtcclxuLy8gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuLy8gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4vLyAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuLy8gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuLy8gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4vLyAgICAgICAgICAgIH0sXHJcbi8vXHJcbi8vICAgICAgICB9LFxyXG4vLyAgICBdLFxyXG4vLyAgICBcImxhbmd1YWdlXCI6IHtcclxuLy8gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbi8vICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4vLyAgICB9LFxyXG4vLyAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuLy8gICAgXHJcbi8vfSk7XHJcblxyXG50YWJsZS5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLCAyLCAzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDE1LDE2LDE3XSwgW10pO1xyXG4vLyAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFszLDEwLDEyXSwgW10pO1xyXG4vLyAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzQsNSw2LDgsNywxNV0sIFtdKTtcclxuICAgIFxyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKiBsaWVuIHZlcnMgbGEgbGl2cmFpc29uICovXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJy5jZF9vcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9vcGVyYXRpb25fZWRpdCcsIHsgJ2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmpRdWVyeS5lYWNoKCQoJy50b2FzdHItbXNnJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSk7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnRleHQoKSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZWVzXCIsICQodGhpcykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwid2FybmluZ1wiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsICQodGhpcykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwiZXJyb3JcIikge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcImVycmV1clwiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9XHJcbn0pO1xyXG5qUXVlcnkuZWFjaCgkKCcuZm9ybS1lcnJvcnMgbGknKSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG59KTtcclxuLypjaGVjayB0aGUgZm9ybSBlcnJvcnMqL1xyXG5pZiAoJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpICE9ICcnKSB7XHJcbiAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxufVxyXG5cclxuLyokKCcubmV3Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4vLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICBcclxuICAgICQuYWpheCh7IFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX29wZXJhdGlvbl9uZXcnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGU9MjAwKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGFsZXJ0KCByZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX29wZXJhdGlvbl9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTsqL1xyXG5cclxuXHJcbiQoXCIjY3JlYXRlX29wZXJhdGlvblwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQoXCIuZm9ybVwiKS5hdHRyKFwibmFtZVwiKTtcclxuXHJcblxyXG4gXHJcblxyXG4vL3ZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAvLyB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKCQoXCIjdF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiXCIpWzBdKTtcclxuXHJcblxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgcGFyYW1zID0gJCgnLmZvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgICQuZWFjaChwYXJhbXMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodmFsLm5hbWUsIHZhbC52YWx1ZSk7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHZhbC5uYW1lKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKmNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YURldGFpbClcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGV0YWlsJywgZGF0YSk7Ki9cclxuXHJcbiAgXHJcblxyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIi5mb3JtXCIpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9vcGVyYXRpb25fbmV3XCIpLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlPTIwMCkge1xyXG4gICAgICAgICAgICAgICAvLyBhbGVydCggcmVzdWx0Lm1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9vcGVyYXRpb25faW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgLy8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiNtb3V2ZW1lbnRfb3BlcmF0aW9uXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuXHJcbiBcclxuXHJcbi8vdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoJChcIiN0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJcIilbMF0pO1xyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2codmFsLm5hbWUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKmNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YURldGFpbClcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGV0YWlsJywgZGF0YSk7Ki9cclxuXHJcbiAgXHJcblxyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIi5mb3JtXCIpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9vcGVyYXRpb25fbW91dmVtZW50XCIpLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgLy8gICBhbGVydChyZXN1bHQuY29kZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlPT0yMDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIGFsZXJ0KCByZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX29wZXJhdGlvbl9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuY29kZT09NDAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCggcmVzdWx0Lm1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgLy8gdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rvci5maW5kKFwiI2Zvcm1fZGVzdGluYXRpb25cIikucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtyZXN1bHQubWVzc2FnZS50ZXh0ICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgICAgICAvLyBmb3JtW2Rlc3RpbmF0aW9uXVxyXG4gICAgICAgICAgICAgICAgIC8vL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4vLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICBcclxuICAgICQuYWpheCh7IFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgLy8gIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGU9MjAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gIGFsZXJ0KHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAvL3ZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jaGFyZ2VfZWRpdCcsIHtpZDogcmVzdWx0LmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5wYWllbWVudEYnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBpZCA9ICQoXCIjX2lkXCIpLnZhbCgpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4vLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICBcclxuICAgICQuYWpheCh7IFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX29wZXJhdGlvbl9wYXltZW50Jyx7J2lkJzppZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vICBhbGVydChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgLy92YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnLCB7aWQ6IHJlc3VsdC5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5wYWllbWVudEFjaGF0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI19pZFwiKS52YWwoKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgXHJcbiAgICAkLmFqYXgoeyBcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9vcGVyYXRpb25fcGF5bWVudF9hY2hhdCcseydpZCc6aWR9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAvLyAgYWxlcnQocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIC8vdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NoYXJnZV9lZGl0Jywge2lkOiByZXN1bHQuZGF0YS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnBhaWVtZW50TW91dmVtZW50JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI19pZFwiKS52YWwoKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgXHJcbiAgICAkLmFqYXgoeyBcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9vcGVyYXRpb25fcGF5bWVudF9tb3V2ZW1lbnQnLHsnaWQnOmlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gIGFsZXJ0KHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAvL3ZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jaGFyZ2VfZWRpdCcsIHtpZDogcmVzdWx0LmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnBhaWVtZW50VmVudGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICBhbGVydCgpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIGNvbnNvbGUubG9nKGR0YSlcclxuICAgIC8vIHJldHVybjtcclxuXHJcbiAgICB2YXIgaWQgPSAkKFwiI19pZFwiKS52YWwoKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgXHJcbiAgICAkLmFqYXgoeyBcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9vcGVyYXRpb25fcGF5bWVudF92ZW50ZScseydpZCc6aWR9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAvLyAgYWxlcnQocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIC8vdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NoYXJnZV9lZGl0Jywge2lkOiByZXN1bHQuZGF0YS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLnBhaWVtZW50JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCQodGhpcykuc2VsZWN0MignZGF0YScpKVxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gMykge1xyXG4gICAgICAgICQoJy5ibG9jX2NoZXF1ZScpLnNob3coKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuYmxvY19jaGVxdWUnKS5oaWRlKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgLy8gJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG59KTtcclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuZm9ybV9waWVjZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gIGFsZXJ0KCQodGhpcykudmFsKCkpXHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAzMCkge1xyXG4gICAgICAgICQoJyNmb3JtX2Rlc3RpbmF0aW9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNmb3JtX2Rlc3RpbmF0aW9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIC8vIFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuaW1wX29wZXJhdGlvblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICBcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9vcGVyYXRpb25faW1wcmVzc2lvbl9hY2hhdFwiLCB7aWQ6IGlkfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVJbXByZXNzaW9uIC5ib2RfaW1wcmVzc2lvblwiKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICQoJy5zZWwyJykuc2VsZWN0MigpXHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZUltcHJlc3Npb25cIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5pbXByZXNzaW9uX29wZXJhdGlvbicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gICAgYWxlcnQoKTtcclxuICAgICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgaWQgPSAkKFwiI19pZFwiKS52YWwoKTtcclxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICBcclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICAgIGwuc3RhcnQoKTtcclxuICAgICAgXHJcbiAgICAgICQuYWpheCh7IFxyXG4gICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9vcGVyYXRpb25faW1wcmVzc2lvbl9hY2hhdCcseydpZCc6aWR9KSxcclxuICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAvLyAgIGFsZXJ0KHJlc3VsdC5tZXNzYWdlLnJvdXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKHJlc3VsdC5tZXNzYWdlLnJvdXRlLCB7aWQ6IHJlc3VsdC5tZXNzYWdlLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLCBcIi5wYWllbWVudEFjaGF0ICN0cl90cmFuc2FjdGlvbl9tb2RlcGFpZW1lbnRcIiwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBpZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX29wZXJhdGlvbl9nZXRjb21wdGVcIiwge2lkOiBpZH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgJChcIi5wYWllbWVudEFjaGF0IC5jb21wdGVfdHJhbnNhY3Rpb25cIikuaHRtbChyZXN1bHQpLnNlbGVjdDIoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgIFxyXG59KVxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnRyX29wZXJhdGlvbl9hcHBseV90cmFuc2l0aW9uc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICB2YXIgdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRpdGxlXCIpO1xyXG4gIHZhciB0cmFuc2l0aW9uID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10cmFuc2l0aW9uXCIpO1xyXG5cclxuIFxyXG4gXHJcbiAgaWYodHJhbnNpdGlvbiA9PSAnYWNoYXRfYXByZXNfZGVtYW5kZV9wYWllbWVudF9nZW5lcmVyJyl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX29wZXJhdGlvbl9wYXltZW50X2FjaGF0XCIsIHtpZDogaWR9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZSAuYm9kXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHJhbnNpdGlvbiA9PSAndmVudGVfYXByZXNfdmFsaWRlcl9nZW5lcmVyJyl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX29wZXJhdGlvbl9wYXltZW50X3ZlbnRlXCIsIHtpZDogaWR9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZSAuYm9kXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHJhbnNpdGlvbiA9PSAnbW91dmVtZW50X2FwcmVzX3ZhbGlkZXJfZ2VuZXJlcicpe1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9vcGVyYXRpb25fcGF5bWVudF9tb3V2ZW1lbnRcIiwge2lkOiBpZH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlIC5ib2RcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAkKCcuc2VsMicpLnNlbGVjdDIoKVxyXG4gICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZHRhLmFwcGVuZChcImlkXCIsIGlkKTtcclxuICAgIGR0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XHJcbiAgICBkdGEuYXBwZW5kKFwidHJhbnNpdGlvblwiLCB0cmFuc2l0aW9uKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgcGFzc2VyIGEgbCdldGF0ICdcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIicgcG91ciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidHJfb3BlcmF0aW9uX2FwcGx5X3RyYW5zaXRpb25zXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJvcGVyYXRpb24gbm9uIHJlbnNlaWduZSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIjX2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuXHJcbiAgdmFyIG9iaiA9IHtcclxuICAgIHJvdXRlOiBcInRyX29wZXJhdGlvbl9kZWxldGVcIixcclxuICAgIHJlZGlyZWN0aW9uOiBcInRyX29wZXJhdGlvbl9pbmRleFwiLFxyXG4gICAgdG9rZW46IHRva2VuLFxyXG4gICAgaWQ6IGlkLFxyXG4gIH07XHJcbiAgLy8gYWxlcnQoKTtcclxuICBkZWxldGVDYWIob2JqKTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvdzJcIikuRGF0YVRhYmxlKHtcclxuICAgIC8vIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICAgIC8vIHNjcm9sbENvbGxhcHNlOiB0cnVlLFxyXG4gICAgcGFnaW5nOiBmYWxzZSxcclxuICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgICBzZWFyY2hpbmc6IGZhbHNlIC8vIHJlbW92ZSBzZWFyY2ggYmFyXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsJyN0cl90cmFuc2FjdGlvbl9vcGVyYXRpb25zJyxmdW5jdGlvbihlKXtcclxuICAgIC8vYWxlcnQoKTtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpO1xyXG4gICAgJChcIiN0cl90cmFuc2FjdGlvbl9tb250YW50XCIpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX29wZXJhdGlvbl9wYXltZW50XCIseydpZCc6JChcIiNfaWRcIikudmFsKCl9KSxcclxuICAgICAgICBkYXRhOiB7XCJvcGVyYXRpb25zXCIgOiAkKHRoaXMpLnZhbCgpLCdjaGFuZ2UnOnRydWV9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy9hbGVydChyZXN1bHQpXHJcbiAgICAgICAgICAgICQoXCIjdHJfdHJhbnNhY3Rpb25fbW9udGFudFwiKS52YWwocmVzdWx0Lm1lc3NhZ2UubW9udGFudCk7XHJcbiAgICAgICAgICAgICQoXCIjdHJfdHJhbnNhY3Rpb25fbW9udGFudFwiKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcbiAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuXHJcblxyXG5cclxuICAkKFwiLmFjdGlvbl9oZWFkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCk7XHJcbiAgICAkKFwiLmFjdGlvbiAsLmFjdGlvbl9oZWFkXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxuICB9KTtcclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNjb2x1bW5fMFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmFjdGlvbiAsLnNjb2x1bW5fMFwiKS5wcm9wKFwiY2hlY2tlZFwiLCAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAgICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxuICB9KTtcclxuJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiwgXCIubGlzdF9hY3Rpb25zXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWxlcnQoKVxyXG4gICAgXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG4gICAgJC5lYWNoKCQoXCJpbnB1dFtuYW1lPV9hY3Rpb25dOmNoZWNrZWRcIiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyAkKFwiYm9keSA+IC5fbXVsdGlwbGVfYWN0aW9ucyBvcHRpb25bdmFsdWU9JyddXCIpLmF0dHIoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKTtcclxuICBcclxuICAgIFxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJnZW5lcmVyX3RyYW5zYWN0aW9uXCIgJiYgX2FycmF5X2lkcyAhPSBudWxsKSB7XHJcbiAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJnZW5lcmFsX29wZXJhdGlvbl9nZW5lcmVyX3RyYW5zYWN0aW9uXCIsIHtpZDogMH0pLFxyXG4gICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgJChcIiNNeU1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIucGFydmVudWVcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCQoXCIucGFydmVudWVcIikuc2VsZWN0MignZGF0YScpICYmICQoXCIucGFydmVudWVcIikuc2VsZWN0MignZGF0YScpWzBdLnRleHQuaW5kZXhPZignbm9uIHBhcnZlbnVlJykgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmRhdGVEb2MsLnJlZkRvYycpLmhpZGUoKS5yZW1vdmVDbGFzcygnY2xhc3NTaG93Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuc2hvdygpLmFkZENsYXNzKCdjbGFzc1Nob3cnKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnBhcnZlbnVlJykub24oJ3NlbGVjdDI6c2VsZWN0aW5nJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5wYXJhbXMuYXJncy5kYXRhLnRleHQuaW5kZXhPZignbm9uIHBhcnZlbnVlJykgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmRhdGVEb2MsLnJlZkRvYycpLmhpZGUoKS5yZW1vdmVDbGFzcygnY2xhc3NTaG93Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5zaG93KCkuYWRkQ2xhc3MoJ2NsYXNzU2hvdycpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLnNhdmVfZm9ybV90cmFuc2FjdGlvblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcbiAgICAkLmVhY2goJChcImlucHV0W25hbWU9X2FjdGlvbl06Y2hlY2tlZFwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuICAgIGR0YS5hcHBlbmQoJ19hcnJheV9pZHMnLF9hcnJheV9pZHMpO1xyXG4gICAgLy92YXIgaWQgPSAkKCcjdGVzdCcpLmRhdGEoXCJmYWN0dXJlSWRcIik7XHJcbiAgXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG4gIFxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gIFxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImdlbmVyYWxfb3BlcmF0aW9uX2dlbmVyZXJfdHJhbnNhY3Rpb25cIiksXHJcbiAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgLy8gJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC13YXJuaW5nJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5tZXNzYWdlLmRhdGEpIHtcclxuICAgICAgICAgIC8vdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAvL2wuc3RvcCgpO1xyXG4gIFxyXG4gICAgICAgICAgLyp2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInRfVWFURmFjdHVyZWZyc2NhYl91cGRhdGVfYWNvbXB0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDsqL1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIFxyXG4gICAgICAgICAgLy8gICAgJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1zdWNjZXNzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiQoXCIuc2F2ZV9lY2lcIikuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHNlbGVjdG9yWzBdKTtcclxuICAgIFxyXG5cclxuICAgIC8qY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhRGV0YWlsKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdkZXRhaWwnLCBkYXRhKTsqL1xyXG5cclxuICBcclxuXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNpX25ld1wiKSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNham91dGVyJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxubGV0IGVjaV9pZDtcclxubGV0IG1vbnRhbnRfZmluYWw7XHJcbmxldCBjb2RlX2ZhY3R1cmUgPSBudWxsO1xyXG5sZXQgb3BlcmF0aW9ucyA9IFtdO1xyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCBcIi5pbmZvX2xldHRyYWdlXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJChcIiNsZXR0cmFnZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgZWNpX2lkID0gaWQ7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjaV9kZXRhaWxzX2ZhY3R1cmVcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGU9MjAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xldHRyYWdlIC5zcHIxXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbGV0dHJhZ2UgLmJvZDEgI21vbnRhbnRcIikudmFsKHJlc3VsdC5kYXRhLm1vbnRhbnQpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNsZXR0cmFnZSAuYm9kMVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xldHRyYWdlIC5teS1idXR0b25cIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmZhY3R1cmVfdGFibGVfbGV0dHJlIC5kYXRhXCIpLmVtcHR5KClcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIG1vbnRhbnRfZmluYWwgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLm9wZXJhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLm9wZXJhdGlvbnMubWFwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5mYWN0dXJlX3RhYmxlX2xldHRyZSAuZGF0YVwiKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2UuY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2UuY2xpZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPSdtb250YW50X2J5X2ZhY3R1cmUnPiR7ZS5tb250YW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGFudF9maW5hbCArPSArZS5tb250YW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoXCIjbGV0dHJhZ2UgLmJvZDEgI3Jlc3RlXCIpLnZhbCgocmVzdWx0LmRhdGEubW9udGFudCAtIG1vbnRhbnRfZmluYWwpLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vbnRhbnRfZmluYWwnKS50ZXh0KG1vbnRhbnRfZmluYWwudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCBcIi5hZGRfZmFjdHVyZVwiLCBmdW5jdGlvbihlKXtcclxuICAgIHZhciBpY29uID0gJCh0aGlzKTtcclxuICAgIHZhciBjb2RlID0gJChcIiNsZXR0cmFnZSAuYm9kMSAjZmFjdHVyZVwiKS52YWwoKTtcclxuICAgIHZhciBlcnJvciA9IDA7XHJcbiAgICAkKFwiLmZhY3R1cmVfdGFibGVfbGV0dHJlIC5kYXRhIHRyXCIpLm1hcChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5jaGlsZHJlbigndGQ6Zmlyc3QnKS50ZXh0KCkgPT0gY29kZS50cmltKCkpe1xyXG4gICAgICAgICAgICBhbGVydChcIk9wZXJhdGlvbiBkw6lqYSBleGlzdGVcIilcclxuICAgICAgICAgICAgZXJyb3IgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZihlcnJvciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjbGV0dHJhZ2UgLm15LWJ1dHRvblwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtcGx1cyBhZGRfZmFjdHVyZVwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY29kZVwiLCBjb2RlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNpX2NoZWNrX2ZhY3R1cmVcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xldHRyYWdlIC5ib2QxICNmYWN0dXJlXCIpLmNzcyhcImJvcmRlci1jb2xvclwiLCBcInJlZFwiKTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1wbHVzIGFkZF9mYWN0dXJlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNsZXR0cmFnZSAuYm9kMSAjZmFjdHVyZVwiKS5jc3MoXCJib3JkZXItY29sb3JcIiwgXCJncmVlblwiKTtcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbnMucHVzaChjb2RlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuZmFjdHVyZV90YWJsZV9sZXR0cmUgLmRhdGFcIikuYXBwZW5kKGBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke3Jlc3VsdC5kYXRhLmNvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7cmVzdWx0LmRhdGEuY2xpZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz0nbW9udGFudF9ieV9mYWN0dXJlJz4ke3Jlc3VsdC5kYXRhLm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpIGNsYXNzPSdmYSBmYS10cmFzaCB0ZXh0LWRhbmdlciByZW1vdmVfdGhpc19mYWN0dXJlJz48L2k+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29kZV9mYWN0dXJlID0gcmVzdWx0LmRhdGEuY29kZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbW9udGFudF9maW5hbCArPSByZXN1bHQuZGF0YS5tb250YW50XHJcbiAgICAgICAgICAgICAgICAkKCcubW9udGFudF9maW5hbCcpLnRleHQobW9udGFudF9maW5hbC50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN0ZSA9ICQoXCIjbGV0dHJhZ2UgLmJvZDEgI21vbnRhbnRcIikudmFsKCkgLSBtb250YW50X2ZpbmFsXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN0ZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xldHRyYWdlIC5ib2QxICNyZXN0ZVwiKS52YWwocmVzdGUudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXN0ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNsZXR0cmFnZSAubXktYnV0dG9uXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbGV0dHJhZ2UgLm15LWJ1dHRvblwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXBsdXMgYWRkX2ZhY3R1cmVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyAkKFwiLmZhY3R1cmVfYXJlYVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xldHRyYWdlIC5ib2QxICNmYWN0dXJlXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1wbHVzIGFkZF9mYWN0dXJlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCBcIi5yZW1vdmVfdGhpc19mYWN0dXJlXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgdHJFbGVtZW50ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgIG1vbnRhbnRfZmluYWwgLT0gdHJFbGVtZW50LmZpbmQoJy5tb250YW50X2J5X2ZhY3R1cmUnKS50ZXh0KClcclxuICAgICQoJy5tb250YW50X2ZpbmFsJykudGV4dChtb250YW50X2ZpbmFsLnRvRml4ZWQoMikpO1xyXG4gICAgdmFyIHJlc3RlID0gJChcIiNsZXR0cmFnZSAuYm9kMSAjbW9udGFudFwiKS52YWwoKSAtIG1vbnRhbnRfZmluYWxcclxuICAgICQoXCIjbGV0dHJhZ2UgLmJvZDEgI3Jlc3RlXCIpLnZhbChyZXN0ZS50b0ZpeGVkKDIpKTtcclxuICAgIGlmKHJlc3RlID49IDApIHtcclxuICAgICAgICAkKFwiI2xldHRyYWdlIC5teS1idXR0b25cIikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNsZXR0cmFnZSAubXktYnV0dG9uXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHZhciBjb2RlID0gdHJFbGVtZW50LmNoaWxkcmVuKCd0ZDpmaXJzdCcpLnRleHQoKTtcclxuICAgIG9wZXJhdGlvbnMuc3BsaWNlKFxyXG4gICAgICAgIG9wZXJhdGlvbnMuZmluZEluZGV4KG9wZXJhdGlvbiA9PiBvcGVyYXRpb24gPT0gY29kZSksIDFcclxuICAgIClcclxuICAgIHRyRWxlbWVudC5yZW1vdmUoKVxyXG4gICAgJChcIi5mYWN0dXJlX2FyZWFcIikuc2hvdygpO1xyXG59KVxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCBcIi5zYXZlX2xldHRyYWdlXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJvcGVyYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KG9wZXJhdGlvbnMpKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGVjaV9pZCk7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjaV9sZXR0cmFnZV9wZXJzaXN0XCIpLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKVxyXG4gICAgICAgICAgICAkKFwiI2xldHRyYWdlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgb3BlcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiLmZhY3R1cmVfdGFibGVfbGV0dHJlIC5kYXRhXCIpLmVtcHR5KClcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSlcclxuXHJcbiQoXCIuZG9zc2llcl9zYXZlXCIpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG4gICAgJC5lYWNoKCQoXCJpbnB1dFtuYW1lPV9hY3Rpb25dOmNoZWNrZWRcIiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuICAgIGlmKF9hcnJheV9pZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IHNlbGVjdGlvbiBkZXMgb3BlcmF0aW9uIEVDSVwiLCBcIldhcm5pbmdcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiYXJyYXlJZHNcIiwgSlNPTi5zdHJpbmdpZnkoX2FycmF5X2lkcykpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFuc2Zlcl9idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY2lfdHJhbnNmZXJcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpXHJcbiAgICAgICAgICAgICQoXCIjdHJhbnNmZXJcIikubW9kYWwoXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG4kKCcjY29kZV9mYWN0dXJlcycpLnNlbGVjdDIoe1xyXG4gICAgbWluaW11bUlucHV0TGVuZ3RoOiAzLCAgLy8gcmVxdWlyZWQgZW50ZXIgMyBjaGFyYWN0ZXJzIG9yIG1vcmVcclxuICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICBwbGFjZWhvbGRlcjogJ2NvZGVfZmFjdHVyZXMnLFxyXG4gICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgIGFqYXg6IHtcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX29wZXJhdGlvbl9jb2RlZmFjdHVyZVwiKSwgIFxyXG4gICAgICAgIC8vICAgIGRlbGF5OiA1LCAgLy8gaW5pIGJlYmFzIG1hdSBkaSBwYWtlIGF0YXUgdGlkYWtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXMudGVybVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEsIHBhZ2UpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgfSxcclxuICAgfVxyXG59KTtcclxuXHJcbi8vIGFsZXJ0KCd0ZXN0Jyk7XHJcblxyXG4kKFwiLlJlbWJvdXJzZW1lbnRfZm9ybVwiKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlbWJvdXJzZW1lbnQgLnJlbWJvdXJzZW1lbnRfYnV0dG9uXCIpKTtcclxuXHJcblxyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9vcGVyYXRpb25fcmVtYm91cnNlbWVudFwiKSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpXHJcbiAgICAgICAgICAgICAgICAkKFwiI3JlbWJvdXJzZW1lbnRcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5SZW1ib3Vyc2VtZW50X2Zvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2NvZGVfZmFjdHVyZXNcIikuc2VsZWN0MihcInZhbFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4kKFwiLmRvc3NpZXJfc2F2ZV9pbnRlcm5lXCIpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG4gICAgJC5lYWNoKCQoXCJpbnB1dFtuYW1lPV9hY3Rpb25dOmNoZWNrZWRcIiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuICAgIGlmKF9hcnJheV9pZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IHNlbGVjdGlvbiBkZXMgb3BlcmF0aW9uIEVDSVwiLCBcIldhcm5pbmdcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiYXJyYXlJZHNcIiwgSlNPTi5zdHJpbmdpZnkoX2FycmF5X2lkcykpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmFuc2Zlcl9pbnRlcm5lIC50cmFuc2Zlcl9idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY2lfdHJhbnNmZXJfaW50ZXJuZVwiKSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKClcclxuICAgICAgICAgICAgJChcIiN0cmFuc2Zlcl9pbnRlcm5lXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5jb21wdGVfcGFpbWVudCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIFxyXG4gICAgJChcImJvZHkgI3BhaWVtZW50U3BlY2lmaXF1ZVwiKS5tb2RhbChcInNob3dcIilcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5zYXZlX3R5cGVfcGFpZW1lbnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBcclxuICAgICQoXCJib2R5ICNwYWllbWVudFNwZWNpZmlxdWVcIikubW9kYWwoXCJoaWRlXCIpXHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLCAnLnR5cGVfcGFpZW1lbnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZigkKHRoaXMpLnZhbCgpID09IFwiY2Fpc3NlXCIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoJ2JvZHkgLnBhaWVtZW50JykudmFsKFwiOVwiKS50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpO1xyXG4gICAgfSBlbHNlIGlmKCQodGhpcykudmFsKCkgPT0gXCJjYXJ0ZVwiKXtcclxuICAgICAgICAkKCdib2R5IC5wYWllbWVudCcpLnZhbChcIjEwXCIpLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICAgICAgLy8gJCgnYm9keSAucGFpZW1lbnQnKS50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICB9IGVsc2UgaWYoJCh0aGlzKS52YWwoKSA9PSBcInZpcmVtZW50X2RldmlzZVwiKXtcclxuICAgICAgICAkKCdib2R5IC5wYWllbWVudCcpLnZhbChcIjExXCIpLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICB9IGVsc2UgaWYoJCh0aGlzKS52YWwoKSA9PSBcImNhcnRlX2RldmlzZVwiKXtcclxuICAgICAgICAkKCdib2R5IC5wYWllbWVudCcpLnZhbChcIjEyXCIpLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJ2JvZHkgLnBhaWVtZW50JykudmFsKFwiMlwiKS50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpO1xyXG4gICAgICAgIC8vICQoJ2JvZHkgLnBhaWVtZW50JykudHJpZ2dlcignY2hhbmdlLnNlbGVjdDInKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgJCgnYm9keSAucGFpZW1lbnQnKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG59KVxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmF2YW5jZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgLy8gYWxlcnQoaWQpO1xyXG4gICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICQoXCIuYXZhbmNlX21vbnRhbnRcIikuc2hvdygpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImdldF9vcGVyYXRpb25fYXZhbmNlXCIsIHtcIm9wZXJhdGlvblwiOiBpZH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IC5hdmFuY2VfbW9udGFudFwiKS52YWwocmVzdWx0Lm1vbnRhbnQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiLmF2YW5jZV9tb250YW50XCIpLmhpZGUoKTtcclxufSlcclxuXHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==