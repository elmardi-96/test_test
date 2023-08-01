(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eci"],{

/***/ "./assets/js/components/tresorerie/eci.js":
/*!************************************************!*\
  !*** ./assets/js/components/tresorerie/eci.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");










var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.setRoutingData(routes);
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

var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("eci_list"),
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
    name: 'ope.id',
    width: "5%"
  }, {
    orderable: true,
    name: 'ope.code'
  }, {
    orderable: true,
    name: 'piece_designation'
  }, {
    orderable: true,
    name: 'designation'
  }, {
    orderable: true,
    name: "code_facture"
  }, {
    orderable: true,
    name: 'ope.montant'
  }, {
    orderable: true,
    name: 'maj'
  }, {
    orderable: true,
    name: 'lettrage'
  }
  // {orderable: false},
  ],

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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("datatables_langue"),
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
  }
});
table.column(7).visible(false);
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchText"](api, [1, 2, 3, 4, 5, 9], []);
  // CustomSearchDatatable.CustomSearchDate(api, [4, 8,10], []);
  // CustomSearchDatatable.CustomSearchSelect(api, [3, 6, 7,], []);
  //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

$("select").select2();
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("eci_details_facture"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
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
        montant_final = 0;
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
  $("#lettrage .my-button").prop("disabled", true);
  var icon = $(this);
  icon.removeClass("fa-plus add_facture").addClass("fa-spinner fa-spin");
  var code = $("#lettrage .bod1 #facture").val();
  var formData = new FormData();
  formData.append("code", code);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("eci_check_facture"),
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
        $(".facture_table_lettre .data").append("\n                    <tr>\n                        <td class='code_operation'>".concat(result.data.code, "</td>\n                        <td>").concat(result.data.client, "</td>\n                        <td class='montant_by_facture'>").concat(result.data.montant, "</td>\n                        <td><i class='fa fa-trash text-danger remove_this_facture'></i></td>\n                    </tr>\n                "));
        operations.push(result.data.code);
        console.log(operations);
        montant_final += result.data.montant;
        $('.montant_final').text(montant_final.toFixed(2));
        var reste = $("#lettrage .bod1 #montant").val() - montant_final;
        $("#lettrage .bod1 #reste").val(reste.toFixed(2));
        if (reste == 0) {
          $("#lettrage .my-button").prop("disabled", false);
          $(".facture_area").hide();
        }
        icon.addClass("fa-plus add_facture").removeClass("fa-spinner fa-spin");
        $("#lettrage .bod1 #facture").val("");
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      // toastr.error("Erreur", errorThrown, {timeOut: 4000});
    }
  });
});
// alert('test');
$(".client").change(function () {
  var test = $("input[name='client']:checked").val();
  if (this.checked) {
    table.column(0).search(this.id).draw();
    if (this.id == 'tout') {
      table.column(6).visible(false);
      table.column(7).visible(true);
    } else {
      table.column(7).visible(false);
      table.column(6).visible(true);
    }

    // if()
  }
});

var ope_id = '';
$("body").on('click', ".maj", function (e) {
  ope_id = this.id;
});
$(".maj_form").on('submit', function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  formData.append("id", ope_id);
  var l = ladda__WEBPACK_IMPORTED_MODULE_13__["create"](document.querySelector("#maj_client .maj_button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("eci_maj_client"),
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
        $("#maj_client").modal("hide");
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
});
$("body").on('click', ".close_lettrage", function (e) {
  $('.facture_table_lettre tbody').html('');
  $('.montant_final').text('0');
  $('#reste').val('0');
  operations = [];
});
$('body').on('click', ".remove_this_facture", function () {
  var trElement = $(this).parent().parent();
  var code = trElement.find(".code_operation").text();
  montant_final -= trElement.find('.montant_by_facture').text();
  $('.montant_final').text(montant_final.toFixed(2));
  var reste = $("#lettrage .bod1 #montant").val() - montant_final;
  $("#lettrage .bod1 #reste").val(reste.toFixed(2));
  if (reste == 0) {
    $("#lettrage .my-button").prop("disabled", false);
  }
  var index = operations.findIndex(function (e) {
    return e == code;
  });
  operations.splice(index, 1);
  console.log(operations);
  trElement.remove();
  $(".facture_area").show();
});
$("body").on('click', ".save_lettrage", function (e) {
  var formData = new FormData();
  formData.append("facture", code_facture);
  formData.append("id", eci_id);
  formData.append("operations", JSON.stringify(operations));
  console.log(code_facture, eci_id);
  var l = ladda__WEBPACK_IMPORTED_MODULE_13__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("eci_lettrage_persist"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      table.ajax.reload();
      operations = [];
      $('.facture_table_lettre tbody').html('');
      $('.montant_final').text('0');
      $('#reste').val('0');
      $("#lettrage").modal("hide");
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

/***/ })

},[["./assets/js/components/tresorerie/eci.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265","vendors~eci",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL2VjaS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZGVmZXJSZW5kZXIiLCJzZXJ2ZXJTaWRlIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJvcmRlciIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJuYW1lIiwid2lkdGgiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJsYW5ndWFnZSIsInByb2Nlc3NpbmciLCJmaXhlZEhlYWRlciIsImZvb3RlckNhbGxiYWNrIiwicm93IiwiZGF0YSIsInN0YXJ0IiwiZW5kIiwiZGlzcGxheSIsInJlbW92ZSIsImFwaSIsImludFZhbCIsImkiLCJyZXBsYWNlIiwiZmxvYXRWYWwiLCJyZXN1bHQiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCIkanEiLCJlcnJvciIsImNvbHVtbiIsInZpc2libGUiLCJvbiIsInNldHRpbmdzIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsInNlbGVjdDIiLCJqUXVlcnkiLCJlYWNoIiwidmFsIiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJ0b2FzdHIiLCJzdWNjZXNzIiwidGltZU91dCIsIndhcm5pbmciLCJlY2lfaWQiLCJtb250YW50X2ZpbmFsIiwiY29kZV9mYWN0dXJlIiwib3BlcmF0aW9ucyIsInByZXZlbnREZWZhdWx0IiwibW9kYWwiLCJpZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZXJyb3JzIiwiU2hvd0Zvcm1FcnJvcnMiLCJzZWxlY3RvciIsImZvcm1fbmFtZSIsImVtcHR5IiwibWVzc2FnZSIsInRpdGxlIiwiY29kZSIsImhpZGUiLCJtb250YW50Iiwic2hvdyIsInByb3AiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImljb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY3NzIiwiY2xpZW50IiwicHVzaCIsInRvRml4ZWQiLCJyZXN0ZSIsImNoYW5nZSIsInRlc3QiLCJjaGVja2VkIiwic2VhcmNoIiwiZHJhdyIsIm9wZV9pZCIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0b3AiLCJodG1sIiwidHJFbGVtZW50IiwicGFyZW50IiwiZmluZCIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3ZEO0FBQ3REQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDakI7QUFFeEVDLG1IQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBRzlCSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxt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QUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7RUFDMURILENBQUMsQ0FBQzVFLEtBQUssRUFBRTtFQUNUM0MsQ0FBQyxDQUFDVSxJQUFJLENBQUM7SUFDSEcsSUFBSSxFQUFFLE1BQU07SUFDWkYsR0FBRyxFQUFFZCxtSEFBTyxDQUFDZSxRQUFRLENBQUMsc0JBQXNCLENBQUM7SUFDN0M4QixJQUFJLEVBQUUyQyxRQUFRO0lBQ2RHLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQmQsT0FBTyxFQUFFLGlCQUFVdkIsTUFBTSxFQUFFO01BQ3ZCbUUsQ0FBQyxDQUFDSSxJQUFJLEVBQUU7TUFDUm5ILEtBQUssQ0FBQ0UsSUFBSSxDQUFDMEIsTUFBTSxFQUFFO01BQ25CNkMsVUFBVSxHQUFHLEVBQUU7TUFDZmpGLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDNEgsSUFBSSxDQUFDLEVBQUUsQ0FBQztNQUN6QzVILENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUM3QnpCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ3NFLEdBQUcsQ0FBQyxHQUFHLENBQUM7TUFDcEJ0RSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNtRixLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFDRDNCLEtBQUssRUFBRSxlQUFVOEMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUM3Q2UsQ0FBQyxDQUFDSSxJQUFJLEVBQUU7TUFDUmpELE1BQU0sQ0FBQ2xCLEtBQUssQ0FBQyxRQUFRLEVBQUVnRCxXQUFXLEVBQUU7UUFBQzVCLE9BQU8sRUFBRTtNQUFJLENBQUMsQ0FBQztJQUN4RDtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwiZmlsZSI6ImVjaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcblxyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5cclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuLy92YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG5cclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjaV9saXN0XCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ29wZS5pZCcsIHdpZHRoOiBcIjUlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdvcGUuY29kZSd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdwaWVjZV9kZXNpZ25hdGlvbid9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdkZXNpZ25hdGlvbid9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6IFwiY29kZV9mYWN0dXJlXCJ9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdvcGUubW9udGFudCd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdtYWonfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnbGV0dHJhZ2UnfSxcclxuICAgICAgICAvLyB7b3JkZXJhYmxlOiBmYWxzZX0sXHJcbiAgICAgICAgXHJcbiAgICBdLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBleHRlbmQ6IFwiZXhjZWxcIixcclxuICAgICAgICAvLyAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgIC8vICAgICAgIGNvbHVtbnM6IFwiOnZpc2libGVcIixcclxuICAgICAgICAvLyAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgLy8gICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgLy8gICAgICAgICBib2R5OiBmdW5jdGlvbihkYXRhLCByb3csIGNvbHVtbiwgbm9kZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGEgPSAkKCc8cD4nICsgZGF0YSArICc8L3A+JykudGV4dCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiAkLmlzTnVtZXJpYyhkYXRhLnJlcGxhY2UoJywnLCAnLicpKSA/IGRhdGEucmVwbGFjZSgnLCcsICcuJykgOiBkYXRhO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gfSxcclxuICAgIF0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcbiAgICBmb290ZXJDYWxsYmFjazogZnVuY3Rpb24gKHJvdywgZGF0YSwgc3RhcnQsIGVuZCwgZGlzcGxheSkge1xyXG4gICAgICAgICQoXCIuY2VudGVyLWNsYXNzXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICAgICAgICBkYXRhO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICAgICAgdmFyIGludFZhbCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgPyBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDFcclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIGkgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGlcclxuICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZmxvYXRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gaS5yZXBsYWNlKFwiJFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgaSA9IGkucmVwbGFjZShcIixcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBwYXJzZUZsb2F0KGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJGpxKGkpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGFyc2VGbG9hdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0KSkgeyByZXN1bHQgPSAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAqIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChcIlVuaGFuZGxlZCB0eXBlIGZvciB0b3RhbHMgW1wiICsgKHR5cGVvZiBpKSArIFwiXVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBcclxufSk7XHJcblxyXG50YWJsZS5jb2x1bW4oNykudmlzaWJsZShmYWxzZSk7XHJcblxyXG50YWJsZS5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLCAyLDMsNCwgNSw5XSwgW10pO1xyXG4gICAgLy8gQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbNCwgOCwxMF0sIFtdKTtcclxuICAgIC8vIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbMywgNiwgNyxdLCBbXSk7XHJcbiAgICAvLyAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwic2VsZWN0XCIpLnNlbGVjdDIoKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkuZWFjaCgkKCcudG9hc3RyLW1zZycpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vlc1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG59KTtcclxualF1ZXJ5LmVhY2goJCgnLmZvcm0tZXJyb3JzIGxpJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmxldCBlY2lfaWQ7XHJcbmxldCBtb250YW50X2ZpbmFsO1xyXG5sZXQgY29kZV9mYWN0dXJlID0gbnVsbDtcclxubGV0IG9wZXJhdGlvbnMgPSBbXTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiLmluZm9fbGV0dHJhZ2VcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKFwiI2xldHRyYWdlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgICBlY2lfaWQgPSBpZDtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNpX2RldGFpbHNfZmFjdHVyZVwiKSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZT0yMDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbGV0dHJhZ2UgLnNwcjFcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNsZXR0cmFnZSAuYm9kMSAjbW9udGFudFwiKS52YWwocmVzdWx0LmRhdGEubW9udGFudCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xldHRyYWdlIC5ib2QxXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbGV0dHJhZ2UgLm15LWJ1dHRvblwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIG1vbnRhbnRfZmluYWwgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KVxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIuYWRkX2ZhY3R1cmVcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAkKFwiI2xldHRyYWdlIC5teS1idXR0b25cIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgdmFyIGljb24gPSAkKHRoaXMpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXBsdXMgYWRkX2ZhY3R1cmVcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB2YXIgY29kZSA9ICQoXCIjbGV0dHJhZ2UgLmJvZDEgI2ZhY3R1cmVcIikudmFsKCk7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvZGVcIiwgY29kZSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjaV9jaGVja19mYWN0dXJlXCIpLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuZGF0YSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNsZXR0cmFnZSAuYm9kMSAjZmFjdHVyZVwiKS5jc3MoXCJib3JkZXItY29sb3JcIiwgXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtcGx1cyBhZGRfZmFjdHVyZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbGV0dHJhZ2UgLmJvZDEgI2ZhY3R1cmVcIikuY3NzKFwiYm9yZGVyLWNvbG9yXCIsIFwiZ3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmZhY3R1cmVfdGFibGVfbGV0dHJlIC5kYXRhXCIpLmFwcGVuZChgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9J2NvZGVfb3BlcmF0aW9uJz4ke3Jlc3VsdC5kYXRhLmNvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7cmVzdWx0LmRhdGEuY2xpZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz0nbW9udGFudF9ieV9mYWN0dXJlJz4ke3Jlc3VsdC5kYXRhLm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpIGNsYXNzPSdmYSBmYS10cmFzaCB0ZXh0LWRhbmdlciByZW1vdmVfdGhpc19mYWN0dXJlJz48L2k+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9ucy5wdXNoKHJlc3VsdC5kYXRhLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3BlcmF0aW9ucylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbW9udGFudF9maW5hbCArPSByZXN1bHQuZGF0YS5tb250YW50XHJcbiAgICAgICAgICAgICAgICAkKCcubW9udGFudF9maW5hbCcpLnRleHQobW9udGFudF9maW5hbC50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN0ZSA9ICQoXCIjbGV0dHJhZ2UgLmJvZDEgI21vbnRhbnRcIikudmFsKCkgLSBtb250YW50X2ZpbmFsXHJcbiAgICAgICAgICAgICAgICAkKFwiI2xldHRyYWdlIC5ib2QxICNyZXN0ZVwiKS52YWwocmVzdGUudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXN0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNsZXR0cmFnZSAubXktYnV0dG9uXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5mYWN0dXJlX2FyZWFcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXBsdXMgYWRkX2ZhY3R1cmVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xldHRyYWdlIC5ib2QxICNmYWN0dXJlXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAvLyB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KVxyXG4vLyBhbGVydCgndGVzdCcpO1xyXG4kKFwiLmNsaWVudFwiKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgIHRlc3QgPSAgJChcImlucHV0W25hbWU9J2NsaWVudCddOmNoZWNrZWRcIikudmFsKCk7XHJcbiAgICBpZih0aGlzLmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICB0YWJsZS5jb2x1bW4oMCkuc2VhcmNoKHRoaXMuaWQpLmRyYXcoKTtcclxuICAgICAgIGlmKHRoaXMuaWQgPT0gJ3RvdXQnKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbig2KS52aXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1uKDcpLnZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW4oNykudmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbig2KS52aXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYoKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciBvcGVfaWQgPSAnJztcclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiLm1halwiLCBmdW5jdGlvbihlKXtcclxuICAgIG9wZV9pZCA9IHRoaXMuaWQ7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIubWFqX2Zvcm1cIikub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIG9wZV9pZCk7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hal9jbGllbnQgLm1hal9idXR0b25cIikpO1xyXG5cclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNpX21hal9jbGllbnRcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKVxyXG4gICAgICAgICAgICAgICAgJChcIiNtYWpfY2xpZW50XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIuY2xvc2VfbGV0dHJhZ2VcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAkKCcuZmFjdHVyZV90YWJsZV9sZXR0cmUgdGJvZHknKS5odG1sKCcnKTtcclxuICAgICQoJy5tb250YW50X2ZpbmFsJykudGV4dCgnMCcpO1xyXG4gICAgJCgnI3Jlc3RlJykudmFsKCcwJyk7XHJcbiAgICBvcGVyYXRpb25zID0gW107XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgXCIucmVtb3ZlX3RoaXNfZmFjdHVyZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHRyRWxlbWVudCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICB2YXIgY29kZSA9IHRyRWxlbWVudC5maW5kKFwiLmNvZGVfb3BlcmF0aW9uXCIpLnRleHQoKTtcclxuICAgIG1vbnRhbnRfZmluYWwgLT0gdHJFbGVtZW50LmZpbmQoJy5tb250YW50X2J5X2ZhY3R1cmUnKS50ZXh0KClcclxuICAgICQoJy5tb250YW50X2ZpbmFsJykudGV4dChtb250YW50X2ZpbmFsLnRvRml4ZWQoMikpO1xyXG4gICAgdmFyIHJlc3RlID0gJChcIiNsZXR0cmFnZSAuYm9kMSAjbW9udGFudFwiKS52YWwoKSAtIG1vbnRhbnRfZmluYWxcclxuICAgICQoXCIjbGV0dHJhZ2UgLmJvZDEgI3Jlc3RlXCIpLnZhbChyZXN0ZS50b0ZpeGVkKDIpKTtcclxuICAgIGlmKHJlc3RlID09IDApIHtcclxuICAgICAgICAkKFwiI2xldHRyYWdlIC5teS1idXR0b25cIikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5kZXggPSBvcGVyYXRpb25zLmZpbmRJbmRleCgoZSkgPT4gZSA9PSBjb2RlKTtcclxuICAgIG9wZXJhdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGNvbnNvbGUubG9nKG9wZXJhdGlvbnMpXHJcbiAgICB0ckVsZW1lbnQucmVtb3ZlKClcclxuICAgICQoXCIuZmFjdHVyZV9hcmVhXCIpLnNob3coKTtcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIuc2F2ZV9sZXR0cmFnZVwiLCBmdW5jdGlvbihlKXtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmFjdHVyZVwiLCBjb2RlX2ZhY3R1cmUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgZWNpX2lkKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcIm9wZXJhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkob3BlcmF0aW9ucykpO1xyXG4gICAgY29uc29sZS5sb2coY29kZV9mYWN0dXJlLGVjaV9pZCApO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY2lfbGV0dHJhZ2VfcGVyc2lzdFwiKSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKClcclxuICAgICAgICAgICAgb3BlcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAkKCcuZmFjdHVyZV90YWJsZV9sZXR0cmUgdGJvZHknKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgJCgnLm1vbnRhbnRfZmluYWwnKS50ZXh0KCcwJyk7XHJcbiAgICAgICAgICAgICQoJyNyZXN0ZScpLnZhbCgnMCcpO1xyXG4gICAgICAgICAgICAkKFwiI2xldHRyYWdlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=