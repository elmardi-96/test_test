(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compte_consolides"],{

/***/ "./assets/js/components/tresorerie/compte_consolides.js":
/*!**************************************************************!*\
  !*** ./assets/js/components/tresorerie/compte_consolides.js ***!
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
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");











var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.setRoutingData(routes);
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("compte_consolides_info", {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_compte_consolides_list2"),
    // json datasource
    type: "get"
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
    name: 'p.code'
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("datatables_langue"),
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
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchText"](api, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17], []);
  //    CustomSearchDatatable.CustomSearchDate(api, [3,10,12], []);
  //    CustomSearchDatatable.CustomSearchSelect(api, [4,5,6,8,7,15], []);

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchCheckbox"](api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('tr_compte_consolides_edit', {
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_compte_consolides_new"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('tr_compte_consolides_index');
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_compte_consolides_mouvement"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      //   alert(result.code);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('tr_compte_consolides_index');
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('tr_compte_consolides_payment', {
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('tr_compte_consolides_payment_achat', {
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('tr_compte_consolides_payment_mouvement', {
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
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
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = $("#_id").val();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('tr_compte_consolides_payment_vente', {
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
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
$('body').on('change', '.paiement', function (e) {
  //alert($(this).val());
  //console.log($(this).select2('data'))
  if ($(this).val() == 2) {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_compte_consolides_impression_achat", {
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('tr_compte_consolides_impression_achat', {
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        //   alert(result.message.route);

        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate(result.message.route, {
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
$("body").on("click", ".tr_operation_apply_transitions", function (e) {
  //alert();
  var dta = new FormData();
  var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");
  if (transition == 'achat_apres_demande_paiement_generer') {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_compte_consolides_payment_achat", {
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_compte_consolides_payment_vente", {
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_compte_consolides_payment_mouvement", {
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_compte_consolides_apply_transitions", {
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
    route: "tr_compte_consolides_delete",
    redirection: "tr_compte_consolides_index",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_12__["deleteCab"])(obj);
  e.preventDefault();
});
var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false
});
$('body').on('change', '#tr_transaction_operations', function (e) {
  //alert();
  console.log($(this).val());
  $("#tr_transaction_montant").prop('disabled', true);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("tr_operation_payment", {
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("general_operation_generer_transaction", {
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("general_operation_generer_transaction"),
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var charAt = uncurryThis(''.charAt);
var $parseFloat = global.parseFloat;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : $parseFloat;


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

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


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

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ })

},[["./assets/js/components/tresorerie/compte_consolides.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL2NvbXB0ZV9jb25zb2xpZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJvbiIsImUiLCJpZCIsImNsb3Nlc3QiLCJhdHRyIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJodG1sIiwiaGlkZSIsIm1vZGFsIiwic2V0VGltZW91dCIsImZhZGVJbiIsInByZXZlbnREZWZhdWx0IiwidGFibGUiLCJEYXRhVGFibGUiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJsZW5ndGhNZW51IiwicGFnZUxlbmd0aCIsIm9yZGVyIiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsIm5hbWUiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiYWN0aW9uIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXh0ZW5kIiwiZXhwb3J0T3B0aW9ucyIsInJvd3MiLCJmb3JtYXQiLCJib2R5IiwiZGF0YSIsInJvdyIsImNvbHVtbiIsImlzTnVtZXJpYyIsInJlcGxhY2UiLCJsYW5ndWFnZSIsInByb2Nlc3NpbmciLCJmaXhlZEhlYWRlciIsImZvb3RlckNhbGxiYWNrIiwic3RhcnQiLCJlbmQiLCJkaXNwbGF5IiwicmVtb3ZlIiwiYXBpIiwiaW50VmFsIiwiaSIsImZsb2F0VmFsIiwicGFyc2VGbG9hdCIsImlzTmFOIiwiJGpxIiwiZXJyb3IiLCJ0b3RhbDQiLCJwYWdlIiwicmVkdWNlIiwiYSIsImIiLCJmb290ZXIiLCJhcHBlbmQiLCJ0b0ZpeGVkIiwidG90YWw1Iiwic2V0dGluZ3MiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiaHJlZiIsImpRdWVyeSIsImVhY2giLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwidG9hc3RyIiwidGltZU91dCIsIndhcm5pbmciLCJjbGljayIsImZvcm1fbmFtZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwYXJhbXMiLCJzZXJpYWxpemVBcnJheSIsInZhbHVlIiwic2VsZWN0b3IiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3RvcCIsImVycm9ycyIsIlNob3dGb3JtRXJyb3JzIiwiZW1wdHkiLCJtZXNzYWdlIiwidGl0bGUiLCJjb2RlIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJmaW5kIiwicGFyZW50IiwiZHRhIiwiYWN0aXZlRWxlbWVudCIsInNob3ciLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wIiwic2VsZWN0MiIsInJvdXRlIiwib3BlbiIsInRyYW5zaXRpb24iLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzcG9uc2VKU09OIiwidG9rZW4iLCJvYmoiLCJyZWRpcmVjdGlvbiIsImRlbGV0ZUNhYiIsInRhYmxlU2hvdyIsInNjcm9sbFkiLCJzY3JvbGxDb2xsYXBzZSIsInBhZ2luZyIsImF1dG9XaWR0aCIsIm1vbnRhbnQiLCJmaWx0ZXIiLCJsZW5ndGgiLCJ0b2dnbGUiLCJfYXJyYXlfaWRzIiwicHVzaCIsImluZGV4T2YiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3ZEO0FBQ3REQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDakI7QUFHeEVDLG1IQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBRzlCSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtCQUFrQjtBQUNsQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxHQUFHLGdEQUFnRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2xJRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFM0Q7QUFDQTtBQUNBLEdBQUcsa0RBQWtEO0FBQ3JEO0FBQ0EsQ0FBQyIsImZpbGUiOiJjb21wdGVfY29uc29saWRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcblxyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG4kKFwiI2dyaWQgdGJvZHlcIikub24oXCJjbGlja1wiLCBcIi5pbmZvX29wXCIsIGZ1bmN0aW9uIChlKSB7XHJcbi8vYWxlcnQoKTtcclxuICAgIHZhciBpZD0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpO1xyXG4gIFxyXG4gICBcclxuICAgIC8vIGFsZXJ0KGVtcCk7XHJcblxyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJjb21wdGVfY29uc29saWRlc19pbmZvXCIse2lkOmlkfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgJChcIi5ib2QxXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWUxXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICBcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLnNwcjFcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmJvZDFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICBcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGFibGUgPSAkKFwiI2dyaWRcIikuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9jb21wdGVfY29uc29saWRlc19saXN0MlwiKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdvcC5pZCcsIHdpZHRoOiBcIjUlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdvcC5jb2RlJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ29wLmRlc2lnbmF0aW9uJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3AuY29kZSd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6IFwiREFURV9GT1JNQVQoYG9wYC5gY3JlYXRlZGAsJyVZJylcIn0sXHJcbiAgICAgICAgXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3RyLnJlZl9kb2NfYXNzbyd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6IFwiREFURV9GT1JNQVQodHIuZGF0ZV9kb2NfYXNzbywnJWQvJW0vJVknKVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcIkRBVEVfRk9STUFUKG9wLmRhdGUsJyVkLyVtLyVZJylcIn0sXHJcbiAgICAgICAgXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ21kcC5kZXNpZ25hdGlvbid9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdmcnMuc29jaWV0ZSd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdjbC5zb2NpZXRlJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogXCJDT05DQVQgKGVtcC5ub20sJyAnLGVtcC5wcmVub20pXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6IFwiY29tcHQuYWJyZXZpYXRpb25cIn0sXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdvcC5tb250YW50JyAsIGNsYXNzTmFtZTogJ2ZhYy1iYWNrJ30sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3RhYi5tb250YW50UmVnbGUnLGNsYXNzTmFtZTogJ2ZhYy1iYWNrJyB9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICduYkZhY3R1cmUuTmJyT3BlcmF0aW9ucycsY2xhc3NOYW1lOiAnZmFjLWJhY2snfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAndGFiLk5iclJlZ2xlbWVudHMnLGNsYXNzTmFtZTogJ2ZhYy1iYWNrJ30sXHJcblxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdwYXJ2ZW51ZS52JyB9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdvcC5wb3NpdGlvbl9hY3R1ZWwnIH0sXHJcbiAgICAgICAge29yZGVyYWJsZTogZmFsc2V9XHJcbiAgICBdLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgIGNvbHVtbnM6IFwiOnZpc2libGVcIixcclxuICAgICAgICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBmdW5jdGlvbihkYXRhLCByb3csIGNvbHVtbiwgbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSAkKCc8cD4nICsgZGF0YSArICc8L3A+JykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmlzTnVtZXJpYyhkYXRhLnJlcGxhY2UoJywnLCAnLicpKSA/IGRhdGEucmVwbGFjZSgnLCcsICcuJykgOiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcbiAgICBmb290ZXJDYWxsYmFjazogZnVuY3Rpb24gKHJvdywgZGF0YSwgc3RhcnQsIGVuZCwgZGlzcGxheSkge1xyXG4gICAgICAgICQoXCIuY2VudGVyLWNsYXNzXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICAgICAgICBkYXRhO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICAgICAgdmFyIGludFZhbCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgPyBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDFcclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIGkgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGlcclxuICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZmxvYXRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gaS5yZXBsYWNlKFwiJFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgaSA9IGkucmVwbGFjZShcIixcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBwYXJzZUZsb2F0KGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJGpxKGkpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGFyc2VGbG9hdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0KSkgeyByZXN1bHQgPSAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAqIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwiVW5oYW5kbGVkIHR5cGUgZm9yIHRvdGFscyBbXCIgKyAodHlwZW9mIGkpICsgXCJdXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB0b3RhbDQgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbigxMyx7IHBhZ2U6ICdjdXJyZW50J30pXHJcbiAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsb2F0VmFsKGEpICsgZmxvYXRWYWwoYik7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICQoYXBpLmNvbHVtbigxMykuZm9vdGVyKCkpLmFwcGVuZChcclxuICAgICAgICAgICAgJzxjZW50ZXIgY2xhc3M9XCJjZW50ZXItY2xhc3NcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTBweDtcIj4nICsgdG90YWw0LnRvRml4ZWQoMikgK1wiIDwvY2VudGVyPlwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsNSA9IGFwaVxyXG4gICAgICAgICAgICAuY29sdW1uKDE0LHsgcGFnZTogJ2N1cnJlbnQnfSlcclxuICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxvYXRWYWwoYSkgKyBmbG9hdFZhbChiKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgJChhcGkuY29sdW1uKDE0KS5mb290ZXIoKSkuYXBwZW5kKFxyXG4gICAgICAgICAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O1wiPicgKyB0b3RhbDUudG9GaXhlZCgyKSArXCIgPC9jZW50ZXI+XCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgXHJcbn0pO1xyXG5cclxuXHJcbi8vdmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4vLyAgICBhamF4OiB7XHJcbi8vICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX29wZXJhdGlvbl9saXN0JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4vLyAgICAgICAgdHlwZTogXCJnZXRcIixcclxuLy8gICAgfSxcclxuLy8gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4vLyAgICBcInN0YXRlU2F2ZVwiOiBmYWxzZSxcclxuLy8gICAgXCJsZW5ndGhNZW51XCI6IFtbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcbi8vXHJcbi8vLy8gICAgXCJjb2x1bW5zXCI6IFtcclxuLy8vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbi8vLy8gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuLy8vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLy8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vLy8gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuLy8vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLy8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vLy8gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuLy8vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLy8vICAgICAgIFxyXG4vLy8vXHJcbi8vLy9cclxuLy8vLyAgICBdLFxyXG4vLyAgICBcIm9yZGVyXCI6IFtbMCwgXCJkZXNjXCJdXSxcclxuLy8gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuLy8gICAgYnV0dG9uczogW1xyXG4vLyAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4vLyAgICAgICAge1xyXG4vLyAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4vLyAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbi8vICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4vLyAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4vLyAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbi8vICAgICAgICAgICAgfSxcclxuLy9cclxuLy8gICAgICAgIH0sXHJcbi8vICAgIF0sXHJcbi8vICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4vLyAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuLy8gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbi8vICAgIH0sXHJcbi8vICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4vLyAgICBcclxuLy99KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsIDIsIDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTUsMTYsMTddLCBbXSk7XHJcbi8vICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgWzMsMTAsMTJdLCBbXSk7XHJcbi8vICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbNCw1LDYsOCw3LDE1XSwgW10pO1xyXG4gICAgXHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAnLmNkX29wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NvbXB0ZV9jb25zb2xpZGVzX2VkaXQnLCB7ICdpZCc6ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpIH0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkuZWFjaCgkKCcudG9hc3RyLW1zZycpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vlc1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG59KTtcclxualF1ZXJ5LmVhY2goJCgnLmZvcm0tZXJyb3JzIGxpJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxufSk7XHJcbi8qY2hlY2sgdGhlIGZvcm0gZXJyb3JzKi9cclxuaWYgKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSAhPSAnJykge1xyXG4gICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQoJy5mb3JtLWVycm9ycycpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbn1cclxuXHJcblxyXG5cclxuJChcIiNjcmVhdGVfb3BlcmF0aW9uXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuXHJcbiBcclxuXHJcbi8vdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoJChcIiN0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJcIilbMF0pO1xyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2codmFsLm5hbWUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8qY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhRGV0YWlsKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdkZXRhaWwnLCBkYXRhKTsqL1xyXG5cclxuICBcclxuXHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKFwiLmZvcm1cIik7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX2NvbXB0ZV9jb25zb2xpZGVzX25ld1wiKSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZT0yMDApIHtcclxuICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY29tcHRlX2NvbnNvbGlkZXNfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgLy8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiNtb3V2ZW1lbnRfb3BlcmF0aW9uXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuXHJcbiBcclxuXHJcbi8vdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoJChcIiN0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJcIilbMF0pO1xyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2codmFsLm5hbWUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKmNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YURldGFpbClcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGV0YWlsJywgZGF0YSk7Ki9cclxuXHJcbiAgXHJcblxyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIi5mb3JtXCIpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9jb21wdGVfY29uc29saWRlc19tb3V2ZW1lbnRcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAvLyAgIGFsZXJ0KHJlc3VsdC5jb2RlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGU9PTIwMCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY29tcHRlX2NvbnNvbGlkZXNfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgLy8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmNvZGU9PTQwMykge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgIC8vIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IuZmluZChcIiNmb3JtX2Rlc3RpbmF0aW9uXCIpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgLy8gZm9ybVtkZXN0aW5hdGlvbl1cclxuICAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgXHJcbiAgICAkLmFqYXgoeyBcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIC8vICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NoYXJnZV9lZGl0JyksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlPTIwMCkge1xyXG4gICAgICAgICAgICAgIC8vICBhbGVydChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgLy92YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnLCB7aWQ6IHJlc3VsdC5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcucGFpZW1lbnRGJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI19pZFwiKS52YWwoKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgXHJcbiAgICAkLmFqYXgoeyBcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jb21wdGVfY29uc29saWRlc19wYXltZW50Jyx7J2lkJzppZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vICBhbGVydChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgLy92YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnLCB7aWQ6IHJlc3VsdC5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5wYWllbWVudEFjaGF0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI19pZFwiKS52YWwoKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgXHJcbiAgICAkLmFqYXgoeyBcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jb21wdGVfY29uc29saWRlc19wYXltZW50X2FjaGF0Jyx7J2lkJzppZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vICBhbGVydChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgLy92YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnLCB7aWQ6IHJlc3VsdC5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcucGFpZW1lbnRNb3V2ZW1lbnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBpZCA9ICQoXCIjX2lkXCIpLnZhbCgpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4vLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICBcclxuICAgICQuYWpheCh7IFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NvbXB0ZV9jb25zb2xpZGVzX3BheW1lbnRfbW91dmVtZW50Jyx7J2lkJzppZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vICBhbGVydChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgLy92YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnLCB7aWQ6IHJlc3VsdC5kYXRhLmlkfSk7XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5wYWllbWVudFZlbnRlJywgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gJChcIiNfaWRcIikudmFsKCk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbi8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIFxyXG4gICAgJC5hamF4KHsgXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfY29tcHRlX2NvbnNvbGlkZXNfcGF5bWVudF92ZW50ZScseydpZCc6aWR9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAvLyAgYWxlcnQocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIC8vdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NoYXJnZV9lZGl0Jywge2lkOiByZXN1bHQuZGF0YS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLnBhaWVtZW50JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCQodGhpcykuc2VsZWN0MignZGF0YScpKVxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gMikge1xyXG4gICAgICAgICQoJy5ibG9jX2NoZXF1ZScpLnNob3coKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuYmxvY19jaGVxdWUnKS5oaWRlKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgLy8gJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG59KTtcclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuZm9ybV9waWVjZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gIGFsZXJ0KCQodGhpcykudmFsKCkpXHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAzMCkge1xyXG4gICAgICAgICQoJyNmb3JtX2Rlc3RpbmF0aW9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNmb3JtX2Rlc3RpbmF0aW9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIC8vIFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuaW1wX29wZXJhdGlvblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICBcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9jb21wdGVfY29uc29saWRlc19pbXByZXNzaW9uX2FjaGF0XCIsIHtpZDogaWR9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZUltcHJlc3Npb24gLmJvZF9pbXByZXNzaW9uXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlSW1wcmVzc2lvblwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLmltcHJlc3Npb25fb3BlcmF0aW9uJywgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgICBhbGVydCgpO1xyXG4gICAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAgIHZhciBpZCA9ICQoXCIjX2lkXCIpLnZhbCgpO1xyXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gIFxyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgICAgbC5zdGFydCgpO1xyXG4gICAgICBcclxuICAgICAgJC5hamF4KHsgXHJcbiAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NvbXB0ZV9jb25zb2xpZGVzX2ltcHJlc3Npb25fYWNoYXQnLHsnaWQnOmlkfSksXHJcbiAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgLy8gICBhbGVydChyZXN1bHQubWVzc2FnZS5yb3V0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShyZXN1bHQubWVzc2FnZS5yb3V0ZSwge2lkOiByZXN1bHQubWVzc2FnZS5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi50cl9vcGVyYXRpb25fYXBwbHlfdHJhbnNpdGlvbnNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgdmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10aXRsZVwiKTtcclxuICB2YXIgdHJhbnNpdGlvbiA9ICQodGhpcykuYXR0cihcImRhdGEtdHJhbnNpdGlvblwiKTtcclxuXHJcbiBcclxuIFxyXG4gIGlmKHRyYW5zaXRpb24gPT0gJ2FjaGF0X2FwcmVzX2RlbWFuZGVfcGFpZW1lbnRfZ2VuZXJlcicpe1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9jb21wdGVfY29uc29saWRlc19wYXltZW50X2FjaGF0XCIsIHtpZDogaWR9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZSAuYm9kXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHJhbnNpdGlvbiA9PSAndmVudGVfYXByZXNfdmFsaWRlcl9nZW5lcmVyJyl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX2NvbXB0ZV9jb25zb2xpZGVzX3BheW1lbnRfdmVudGVcIiwge2lkOiBpZH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlIC5ib2RcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAkKCcuc2VsMicpLnNlbGVjdDIoKVxyXG4gICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNlIGlmICh0cmFuc2l0aW9uID09ICdtb3V2ZW1lbnRfYXByZXNfdmFsaWRlcl9nZW5lcmVyJyl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX2NvbXB0ZV9jb25zb2xpZGVzX3BheW1lbnRfbW91dmVtZW50XCIsIHtpZDogaWR9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZSAuYm9kXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGR0YS5hcHBlbmQoXCJpZFwiLCBpZCk7XHJcbiAgICBkdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xyXG4gICAgZHRhLmFwcGVuZChcInRyYW5zaXRpb25cIiwgdHJhbnNpdGlvbik7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciBhIGwnZXRhdCAnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpICFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBOb24gIVwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX2NvbXB0ZV9jb25zb2xpZGVzX2FwcGx5X3RyYW5zaXRpb25zXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJvcGVyYXRpb24gbm9uIHJlbnNlaWduZSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIjX2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuXHJcbiAgdmFyIG9iaiA9IHtcclxuICAgIHJvdXRlOiBcInRyX2NvbXB0ZV9jb25zb2xpZGVzX2RlbGV0ZVwiLFxyXG4gICAgcmVkaXJlY3Rpb246IFwidHJfY29tcHRlX2NvbnNvbGlkZXNfaW5kZXhcIixcclxuICAgIHRva2VuOiB0b2tlbixcclxuICAgIGlkOiBpZCxcclxuICB9O1xyXG4gIC8vIGFsZXJ0KCk7XHJcbiAgZGVsZXRlQ2FiKG9iaik7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRhYmxlU2hvdyA9ICQoXCIjZGF0YXRhYmxlLXNob3cyXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBzY3JvbGxZOiBcIjIwMHB4XCIsXHJcbiAgICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICAgIHBhZ2luZzogZmFsc2UsXHJcbiAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywnI3RyX3RyYW5zYWN0aW9uX29wZXJhdGlvbnMnLGZ1bmN0aW9uKGUpe1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSk7XHJcbiAgICAkKFwiI3RyX3RyYW5zYWN0aW9uX21vbnRhbnRcIikucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidHJfb3BlcmF0aW9uX3BheW1lbnRcIix7J2lkJzokKFwiI19pZFwiKS52YWwoKX0pLFxyXG4gICAgICAgIGRhdGE6IHtcIm9wZXJhdGlvbnNcIiA6ICQodGhpcykudmFsKCksJ2NoYW5nZSc6dHJ1ZX0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KHJlc3VsdClcclxuICAgICAgICAgICAgJChcIiN0cl90cmFuc2FjdGlvbl9tb250YW50XCIpLnZhbChyZXN1bHQubWVzc2FnZS5tb250YW50KTtcclxuICAgICAgICAgICAgJChcIiN0cl90cmFuc2FjdGlvbl9tb250YW50XCIpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG5cclxuXHJcblxyXG4gICQoXCIuYWN0aW9uX2hlYWRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoKTtcclxuICAgICQoXCIuYWN0aW9uICwuYWN0aW9uX2hlYWRcIikucHJvcChcImNoZWNrZWRcIiwgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcbiAgICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbiAgfSk7XHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hY3Rpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2NvbHVtbl8wXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuYWN0aW9uICwuc2NvbHVtbl8wXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG4gIH0pO1xyXG4kKFwiYm9keVwiKS5vbihcImNoYW5nZVwiLCBcIi5saXN0X2FjdGlvbnNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICBcclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcbiAgICAkLmVhY2goJChcImlucHV0W25hbWU9X2FjdGlvbl06Y2hlY2tlZFwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vICQoXCJib2R5ID4gLl9tdWx0aXBsZV9hY3Rpb25zIG9wdGlvblt2YWx1ZT0nJ11cIikuYXR0cignc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICBcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpO1xyXG4gIFxyXG4gICAgXHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcImdlbmVyZXJfdHJhbnNhY3Rpb25cIiAmJiBfYXJyYXlfaWRzICE9IG51bGwpIHtcclxuICAgICAgLy9hbGVydCgpXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImdlbmVyYWxfb3BlcmF0aW9uX2dlbmVyZXJfdHJhbnNhY3Rpb25cIiwge2lkOiAwfSksXHJcbiAgICAgICAgICBkYXRhOiB7X2FycmF5X2lkc30sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI015TW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5wYXJ2ZW51ZVwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoJChcIi5wYXJ2ZW51ZVwiKS5zZWxlY3QyKCdkYXRhJykgJiYgJChcIi5wYXJ2ZW51ZVwiKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dC5pbmRleE9mKCdub24gcGFydmVudWUnKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdjbGFzc1Nob3cnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5zaG93KCkuYWRkQ2xhc3MoJ2NsYXNzU2hvdycpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcucGFydmVudWUnKS5vbignc2VsZWN0MjpzZWxlY3RpbmcnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLnBhcmFtcy5hcmdzLmRhdGEudGV4dC5pbmRleE9mKCdub24gcGFydmVudWUnKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdjbGFzc1Nob3cnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmRhdGVEb2MsLnJlZkRvYycpLnNob3coKS5hZGRDbGFzcygnY2xhc3NTaG93Jyk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBcclxuICB9KTtcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuc2F2ZV9mb3JtX3RyYW5zYWN0aW9uXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uXTpjaGVja2VkXCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0pO1xyXG4gICAgZHRhLmFwcGVuZCgnX2FycmF5X2lkcycsX2FycmF5X2lkcyk7XHJcbiAgICAvL3ZhciBpZCA9ICQoJyN0ZXN0JykuZGF0YShcImZhY3R1cmVJZFwiKTtcclxuICBcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcbiAgXHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZ2VuZXJhbF9vcGVyYXRpb25fZ2VuZXJlcl90cmFuc2FjdGlvblwiKSxcclxuICAgICAgZGF0YTogZHRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgICAvLyAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXdhcm5pbmcnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lm1lc3NhZ2UuZGF0YSkge1xyXG4gICAgICAgICAgLy90YWJsZTIuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgIC8vbC5zdG9wKCk7XHJcbiAgXHJcbiAgICAgICAgICAvKnZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidF9VYVRGYWN0dXJlZnJzY2FiX3VwZGF0ZV9hY29tcHRlXCIsIHtcclxuICAgICAgICAgICAgICBpZDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsOyovXHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgXHJcbiAgICAgICAgICAvLyAgICAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG4gICIsInZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IHJlZHVjZSwgcmVkdWNlUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19SSUdIVCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c0xlbmd0aCwgbWVtbykge1xuICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoYXQpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gSVNfUklHSFQgPyBsZW5ndGggLSAxIDogMDtcbiAgICB2YXIgaSA9IElTX1JJR0hUID8gLTEgOiAxO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPCAyKSB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBpZiAoSVNfUklHSFQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3NvZihnbG9iYWwucHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyICRwYXJzZUZsb2F0ID0gZ2xvYmFsLnBhcnNlRmxvYXQ7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBJVEVSQVRPUiA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRk9SQ0VEID0gMSAvICRwYXJzZUZsb2F0KHdoaXRlc3BhY2VzICsgJy0wJykgIT09IC1JbmZpbml0eVxuICAvLyBNUyBFZGdlIDE4LSBicm9rZW4gd2l0aCBib3hlZCBzeW1ib2xzXG4gIHx8IChJVEVSQVRPUiAmJiAhZmFpbHMoZnVuY3Rpb24gKCkgeyAkcGFyc2VGbG9hdChPYmplY3QoSVRFUkFUT1IpKTsgfSkpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbSh0b1N0cmluZyhzdHJpbmcpKTtcbiAgdmFyIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHRyaW1tZWRTdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIGNoYXJBdCh0cmltbWVkU3RyaW5nLCAwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGVhdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyAkUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXN1bHQgKz0gc3RyO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1pbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IHVuY3VycnlUaGlzKFtdLmluZGV4T2YpO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gbmF0aXZlSW5kZXhPZihbMV0sIDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgdmFyIGZyb21JbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHJlZHVjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1yZWR1Y2UnKS5sZWZ0O1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIENIUk9NRV9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZScpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3JlZHVjZScpO1xuLy8gQ2hyb21lIDgwLTgyIGhhcyBhIGNyaXRpY2FsIGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTA0OTk4MlxudmFyIENIUk9NRV9CVUcgPSAhSVNfTk9ERSAmJiBDSFJPTUVfVkVSU0lPTiA+IDc5ICYmIENIUk9NRV9WRVJTSU9OIDwgODM7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIVNUUklDVF9NRVRIT0QgfHwgQ0hST01FX0JVRyB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBsZW5ndGgsIGxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xudmFyICRyZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgcmVwZWF0ID0gdW5jdXJyeVRoaXMoJHJlcGVhdCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgbmF0aXZlVG9GaXhlZCA9IHVuY3VycnlUaGlzKDEuMC50b0ZpeGVkKTtcblxudmFyIHBvdyA9IGZ1bmN0aW9uICh4LCBuLCBhY2MpIHtcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xufTtcblxudmFyIGxvZyA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciBuID0gMDtcbiAgdmFyIHgyID0geDtcbiAgd2hpbGUgKHgyID49IDQwOTYpIHtcbiAgICBuICs9IDEyO1xuICAgIHgyIC89IDQwOTY7XG4gIH1cbiAgd2hpbGUgKHgyID49IDIpIHtcbiAgICBuICs9IDE7XG4gICAgeDIgLz0gMjtcbiAgfSByZXR1cm4gbjtcbn07XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChkYXRhLCBuLCBjKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgYzIgPSBjO1xuICB3aGlsZSAoKytpbmRleCA8IDYpIHtcbiAgICBjMiArPSBuICogZGF0YVtpbmRleF07XG4gICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcbiAgfVxufTtcblxudmFyIGRpdmlkZSA9IGZ1bmN0aW9uIChkYXRhLCBuKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBjID0gMDtcbiAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgIGMgKz0gZGF0YVtpbmRleF07XG4gICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgYyA9IChjICUgbikgKiAxZTc7XG4gIH1cbn07XG5cbnZhciBkYXRhVG9TdHJpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgaW5kZXggPSA2O1xuICB2YXIgcyA9ICcnO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgaWYgKHMgIT09ICcnIHx8IGluZGV4ID09PSAwIHx8IGRhdGFbaW5kZXhdICE9PSAwKSB7XG4gICAgICB2YXIgdCA9ICRTdHJpbmcoZGF0YVtpbmRleF0pO1xuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQoJzAnLCA3IC0gdC5sZW5ndGgpICsgdDtcbiAgICB9XG4gIH0gcmV0dXJuIHM7XG59O1xuXG52YXIgRk9SQ0VEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlVG9GaXhlZCgwLjAwMDA4LCAzKSAhPT0gJzAuMDAwJyB8fFxuICAgIG5hdGl2ZVRvRml4ZWQoMC45LCAwKSAhPT0gJzEnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgxLjI1NSwgMikgIT09ICcxLjI1JyB8fFxuICAgIG5hdGl2ZVRvRml4ZWQoMTAwMDAwMDAwMDAwMDAwMDEyOC4wLCAwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgbmF0aXZlVG9GaXhlZCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5wcm90b3R5cGUudG9maXhlZFxuJCh7IHRhcmdldDogJ051bWJlcicsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xuICAgIHZhciBmcmFjdERpZ2l0cyA9IHRvSW50ZWdlck9ySW5maW5pdHkoZnJhY3Rpb25EaWdpdHMpO1xuICAgIHZhciBkYXRhID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIHZhciBzaWduID0gJyc7XG4gICAgdmFyIHJlc3VsdCA9ICcwJztcbiAgICB2YXIgZSwgeiwgaiwgaztcblxuICAgIC8vIFRPRE86IEVTMjAxOCBpbmNyZWFzZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIGZyYWN0aW9uIGRpZ2l0cyB0byAxMDAsIG5lZWQgdG8gaW1wcm92ZSB0aGUgaW1wbGVtZW50YXRpb25cbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93ICRSYW5nZUVycm9yKCdJbmNvcnJlY3QgZnJhY3Rpb24gZGlnaXRzJyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiAkU3RyaW5nKG51bWJlcik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBqID0gZnJhY3REaWdpdHM7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseShkYXRhLCAxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShkYXRhLCBwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IGopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxLCAxKTtcbiAgICAgICAgZGl2aWRlKGRhdGEsIDIpO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMSA8PCAtZSwgMCk7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKSArIHJlcGVhdCgnMCcsIGZyYWN0RGlnaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaWduICsgKGsgPD0gZnJhY3REaWdpdHNcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMgLSBrKSArIHJlc3VsdFxuICAgICAgICA6IHN0cmluZ1NsaWNlKHJlc3VsdCwgMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHN0cmluZ1NsaWNlKHJlc3VsdCwgayAtIGZyYWN0RGlnaXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQgfSwge1xuICBwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9