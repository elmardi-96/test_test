(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecriturecomptable_operation"],{

/***/ "./assets/js/components/ecriture_comptable/operation.js":
/*!**************************************************************!*\
  !*** ./assets/js/components/ecriture_comptable/operation.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_7__);

var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");





_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.setRoutingData(routes);
global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});

// alert('test');

$("select").select2();
$("body").on('keypress', '#id_piece', function (e) {
  var idPiece = $(this).val();
  if (e.which == 13) {
    // alert(typePiece, idPiece)
    if (idPiece == "") {
      toastr.warning("Warning", "Veuillez remplir les champs!", {
        timeOut: 4000
      });
      return;
    }
    // var l = Ladda.create(document.activeElement);
    // Start loading
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_operation_getecriturecomptable", {
        "idPiece": idPiece.trim(),
        "type": "any"
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        $("#content").html(result);
        $("#content #grid_index").dataTable({
          language: {
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("datatables_langue"),
            processing: true
          }
        });
        $("#content #grid_details").dataTable({
          language: {
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("datatables_langue"),
            processing: true
          }
        });

        // $("#send_adonix").removeClass('disabled')
        $("#send_adonix").addClass('disabled');
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", jqXHR.responseText, {
          timeOut: 4000
        });
      }
    });
  }
});
$("body").on('click', '#executer', function () {
  var idPiece = $("#id_piece").val();
  // alert(typePiece, idPiece)
  if (idPiece == "") {
    toastr.warning("Warning", "Veuillez remplir les champs!", {
      timeOut: 4000
    });
    return;
  }
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_operation_getecriturecomptable", {
      "idPiece": idPiece.trim()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      $("#content").html(result);
      $("#content #grid_index").dataTable({
        language: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("datatables_langue"),
          processing: true
        }
      });
      $("#content #grid_details").dataTable({
        language: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("datatables_langue"),
          processing: true
        }
      });
      l.stop();

      // $("#send_adonix").removeClass('disabled')
      $("#send_adonix").addClass('disabled');
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$("body").on('click', '.validation', function () {
  if ($('.validation:checked').length == 3) {
    $("#send_adonix").removeClass('disabled');
  } else {
    $("#send_adonix").addClass('disabled');
  }
});
$("body").on('click', '#send_adonix', function () {
  var idPiece = $("#id_piece").val();
  // alert(typePiece, idPiece)
  if (idPiece == "") {
    toastr.warning("Warning", "Veuillez remplir les champs!", {
      timeOut: 4000
    });
    return;
  }
  // var l = Ladda.create(document.activeElement);
  // Start loading
  // l.start();
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_operation_getecriturecomptable_send", {
      "idPiece": idPiece.trim()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      // l.stop();
      toastr.success("Success", result, {
        timeOut: 4000
      });
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      // l.stop();
    }
  });
});

$("body").on('click', '#valider', function () {
  var idPiece = $("#id_piece").val();
  if (idPiece == "") {
    toastr.warning("Warning", "Veuillez remplir les champs!", {
      timeOut: 4000
    });
    return;
  }
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_operation_getecriturecomptable_valider", {
      "idPiece": idPiece.trim()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      toastr.success("Success", result, {
        timeOut: 4000
      });
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$("body").on('click', '#remise_banque', function () {
  var idPiece = $("#id_piece").val();
  if (idPiece == "") {
    toastr.warning("Warning", "Veuillez remplir les champs!", {
      timeOut: 4000
    });
    return;
  }
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_operation_getecriturecomptable_remise_banque", {
      "idPiece": idPiece.trim()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      toastr.success("Success", result, {
        timeOut: 4000
      });
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});

// $("body").on('click', '#precomptabiliser', function() {

$("#precomptabiliser").click(function () {
  var idPiece = $("#id_piece").val();
  if (idPiece == "") {
    toastr.warning("Warning", "Veuillez remplir les champs!", {
      timeOut: 4000
    });
    return;
  }
  // var l = Ladda.create(document.activeElement);
  // Start loading
  // l.start();
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_operation_getecriturecomptable_precomptabiliser", {
      "idPiece": idPiece.trim()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      // l.stop();
      toastr.success("Success", result, {
        timeOut: 4000
      });
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$("body").on('click', '#rejeter', function () {
  var idPiece = $("#id_piece").val();
  if (idPiece == "") {
    toastr.warning("Warning", "Veuillez remplir les champs!", {
      timeOut: 4000
    });
    return;
  }
  $("#ModalDocumentDynamiqueValider").modal("show");
});
$("body").on('click', '#observation_rejeter_valider', function () {
  var idPiece = $("#id_piece").val();
  if (idPiece == "") {
    toastr.warning("Warning", "Veuillez remplir les champs!", {
      timeOut: 4000
    });
    return;
  }
  var formData = new FormData();
  formData.append("observation_rejeter", $("#observation_rejeter").val());
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_operation_getecriturecomptable_rejeter", {
      "idPiece": idPiece.trim()
    }),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      toastr.success("Success", result, {
        timeOut: 4000
      });
      location.reload();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/components/ecriture_comptable/operation.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9lY3JpdHVyZV9jb21wdGFibGUvb3BlcmF0aW9uLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJzZWxlY3QyIiwib24iLCJlIiwiaWRQaWVjZSIsInZhbCIsIndoaWNoIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJhamF4IiwidHlwZSIsInVybCIsImdlbmVyYXRlIiwidHJpbSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImRhdGFUYWJsZSIsImxhbmd1YWdlIiwicHJvY2Vzc2luZyIsImFkZENsYXNzIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInJlc3BvbnNlVGV4dCIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0Iiwic3RvcCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiY2xpY2siLCJtb2RhbCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJkYXRhIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3ZEO0FBQ3REQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDakI7QUFDdkM7QUFFakNDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBRzlCSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7O0FBSUY7O0FBRUFQLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ1EsT0FBTyxFQUFFO0FBR3JCUixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUM5QyxJQUFJQyxPQUFPLEdBQUdYLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1ksR0FBRyxFQUFFO0VBRTNCLElBQUdGLENBQUMsQ0FBQ0csS0FBSyxJQUFJLEVBQUUsRUFBRztJQUNmO0lBQ0EsSUFBR0YsT0FBTyxJQUFJLEVBQUUsRUFBRTtNQUNkRyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsOEJBQThCLEVBQUU7UUFBQ0MsT0FBTyxFQUFFO01BQUksQ0FBQyxDQUFDO01BQzFFO0lBQ0o7SUFDQTtJQUNBO0lBQ0FoQixDQUFDLENBQUNpQixJQUFJLENBQUM7TUFDSEMsSUFBSSxFQUFFLEtBQUs7TUFDWEMsR0FBRyxFQUFFdEIsa0hBQU8sQ0FBQ3VCLFFBQVEsQ0FBQyxtREFBbUQsRUFBRTtRQUFDLFNBQVMsRUFBRVQsT0FBTyxDQUFDVSxJQUFJLEVBQUU7UUFBRSxNQUFNLEVBQUc7TUFBSyxDQUFDLENBQUM7TUFDdkhDLFdBQVcsRUFBRSxLQUFLO01BQ2xCQyxXQUFXLEVBQUUsS0FBSztNQUNsQkMsT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7UUFFdkJ6QixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMwQixJQUFJLENBQUNELE1BQU0sQ0FBQztRQUUxQnpCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDMkIsU0FBUyxDQUFDO1VBQ2hDQyxRQUFRLEVBQUU7WUFDTlQsR0FBRyxFQUFFdEIsa0hBQU8sQ0FBQ3VCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztZQUMxQ1MsVUFBVSxFQUFFO1VBQ2hCO1FBQ0osQ0FBQyxDQUFDO1FBQ0Y3QixDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQzJCLFNBQVMsQ0FBQztVQUNsQ0MsUUFBUSxFQUFFO1lBQ05ULEdBQUcsRUFBRXRCLGtIQUFPLENBQUN1QixRQUFRLENBQUMsbUJBQW1CLENBQUM7WUFDMUNTLFVBQVUsRUFBRTtVQUNoQjtRQUNKLENBQUMsQ0FBQzs7UUFFRjtRQUNBN0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDOEIsUUFBUSxDQUFDLFVBQVUsQ0FBQztNQUsxQyxDQUFDO01BQ0RDLEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQzdDcEIsTUFBTSxDQUFDaUIsS0FBSyxDQUFDLFFBQVEsRUFBRUMsS0FBSyxDQUFDRyxZQUFZLEVBQUU7VUFBQ25CLE9BQU8sRUFBRTtRQUFJLENBQUMsQ0FBQztNQUMvRDtJQUNKLENBQUMsQ0FBQztFQUNOO0FBRUosQ0FBQyxDQUFDO0FBQ0ZoQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVc7RUFFMUMsSUFBSUUsT0FBTyxHQUFHWCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNZLEdBQUcsRUFBRTtFQUNsQztFQUNBLElBQUdELE9BQU8sSUFBSSxFQUFFLEVBQUU7SUFDZEcsTUFBTSxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLDhCQUE4QixFQUFFO01BQUNDLE9BQU8sRUFBRTtJQUFJLENBQUMsQ0FBQztJQUMxRTtFQUNKO0VBQ0EsSUFBSW9CLENBQUMsR0FBR0MsNENBQVksQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUM7RUFDNUM7RUFDQUgsQ0FBQyxDQUFDSSxLQUFLLEVBQUU7RUFDVHhDLENBQUMsQ0FBQ2lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxHQUFHLEVBQUV0QixrSEFBTyxDQUFDdUIsUUFBUSxDQUFDLG1EQUFtRCxFQUFFO01BQUMsU0FBUyxFQUFFVCxPQUFPLENBQUNVLElBQUk7SUFBRSxDQUFDLENBQUM7SUFDdkdDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7TUFFdkJ6QixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMwQixJQUFJLENBQUNELE1BQU0sQ0FBQztNQUUxQnpCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDMkIsU0FBUyxDQUFDO1FBQ2hDQyxRQUFRLEVBQUU7VUFDTlQsR0FBRyxFQUFFdEIsa0hBQU8sQ0FBQ3VCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztVQUMxQ1MsVUFBVSxFQUFFO1FBQ2hCO01BQ0osQ0FBQyxDQUFDO01BQ0Y3QixDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQzJCLFNBQVMsQ0FBQztRQUNsQ0MsUUFBUSxFQUFFO1VBQ05ULEdBQUcsRUFBRXRCLGtIQUFPLENBQUN1QixRQUFRLENBQUMsbUJBQW1CLENBQUM7VUFDMUNTLFVBQVUsRUFBRTtRQUNoQjtNQUNKLENBQUMsQ0FBQztNQUNGTyxDQUFDLENBQUNLLElBQUksRUFBRTs7TUFFUjtNQUNBekMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDOEIsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUsxQyxDQUFDO0lBQ0RDLEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQzdDcEIsTUFBTSxDQUFDaUIsS0FBSyxDQUFDLFFBQVEsRUFBRUMsS0FBSyxDQUFDRyxZQUFZLEVBQUU7UUFBQ25CLE9BQU8sRUFBRTtNQUFJLENBQUMsQ0FBQztNQUMzRG9CLENBQUMsQ0FBQ0ssSUFBSSxFQUFFO0lBQ1o7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFDRnpDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1MsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBVztFQUM1QyxJQUFHVCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzBDLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDckMxQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMyQyxXQUFXLENBQUMsVUFBVSxDQUFDO0VBQzdDLENBQUMsTUFBTTtJQUNIM0MsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDOEIsUUFBUSxDQUFDLFVBQVUsQ0FBQztFQUMxQztBQUNKLENBQUMsQ0FBQztBQUNGOUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDUyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFXO0VBQzdDLElBQUlFLE9BQU8sR0FBR1gsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDWSxHQUFHLEVBQUU7RUFDbEM7RUFDQSxJQUFHRCxPQUFPLElBQUksRUFBRSxFQUFFO0lBQ2RHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSw4QkFBOEIsRUFBRTtNQUFDQyxPQUFPLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFDMUU7RUFDSjtFQUNBO0VBQ0E7RUFDQTtFQUNBaEIsQ0FBQyxDQUFDaUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxLQUFLO0lBQ1hDLEdBQUcsRUFBRXRCLGtIQUFPLENBQUN1QixRQUFRLENBQUMsd0RBQXdELEVBQUU7TUFBQyxTQUFTLEVBQUVULE9BQU8sQ0FBQ1UsSUFBSTtJQUFFLENBQUMsQ0FBQztJQUM1R0MsV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtNQUN2QjtNQUNBWCxNQUFNLENBQUNVLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtRQUFDVCxPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUNEZSxLQUFLLEVBQUUsZUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUM3Q3BCLE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxRQUFRLEVBQUVDLEtBQUssQ0FBQ0csWUFBWSxFQUFFO1FBQUNuQixPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7TUFDM0Q7SUFDSjtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7QUFDRmhCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBVztFQUN6QyxJQUFJRSxPQUFPLEdBQUdYLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ1ksR0FBRyxFQUFFO0VBQ2xDLElBQUdELE9BQU8sSUFBSSxFQUFFLEVBQUU7SUFDZEcsTUFBTSxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLDhCQUE4QixFQUFFO01BQUNDLE9BQU8sRUFBRTtJQUFJLENBQUMsQ0FBQztJQUMxRTtFQUNKO0VBQ0EsSUFBSW9CLENBQUMsR0FBR0MsNENBQVksQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUM7RUFDNUM7RUFDQUgsQ0FBQyxDQUFDSSxLQUFLLEVBQUU7RUFDVHhDLENBQUMsQ0FBQ2lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxHQUFHLEVBQUV0QixrSEFBTyxDQUFDdUIsUUFBUSxDQUFDLDJEQUEyRCxFQUFFO01BQUMsU0FBUyxFQUFFVCxPQUFPLENBQUNVLElBQUk7SUFBRSxDQUFDLENBQUM7SUFDL0dDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7TUFDdkJXLENBQUMsQ0FBQ0ssSUFBSSxFQUFFO01BQ1IzQixNQUFNLENBQUNVLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtRQUFDVCxPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUNEZSxLQUFLLEVBQUUsZUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUM3Q3BCLE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxRQUFRLEVBQUVDLEtBQUssQ0FBQ0csWUFBWSxFQUFFO1FBQUNuQixPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7TUFDM0RvQixDQUFDLENBQUNLLElBQUksRUFBRTtJQUNaO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBQ0Z6QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBVztFQUMvQyxJQUFJRSxPQUFPLEdBQUdYLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ1ksR0FBRyxFQUFFO0VBQ2xDLElBQUdELE9BQU8sSUFBSSxFQUFFLEVBQUU7SUFDZEcsTUFBTSxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLDhCQUE4QixFQUFFO01BQUNDLE9BQU8sRUFBRTtJQUFJLENBQUMsQ0FBQztJQUMxRTtFQUNKO0VBQ0EsSUFBSW9CLENBQUMsR0FBR0MsNENBQVksQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUM7RUFDNUM7RUFDQUgsQ0FBQyxDQUFDSSxLQUFLLEVBQUU7RUFDVHhDLENBQUMsQ0FBQ2lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxHQUFHLEVBQUV0QixrSEFBTyxDQUFDdUIsUUFBUSxDQUFDLGlFQUFpRSxFQUFFO01BQUMsU0FBUyxFQUFFVCxPQUFPLENBQUNVLElBQUk7SUFBRSxDQUFDLENBQUM7SUFDckhDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7TUFDdkJXLENBQUMsQ0FBQ0ssSUFBSSxFQUFFO01BQ1IzQixNQUFNLENBQUNVLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtRQUFDVCxPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUNEZSxLQUFLLEVBQUUsZUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUM3Q3BCLE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxRQUFRLEVBQUVDLEtBQUssQ0FBQ0csWUFBWSxFQUFFO1FBQUNuQixPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7TUFDM0RvQixDQUFDLENBQUNLLElBQUksRUFBRTtJQUNaO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOztBQUlGOztBQUVBekMsQ0FBQyxDQUFFLG1CQUFtQixDQUFFLENBQUM0QyxLQUFLLENBQUMsWUFBVztFQUV0QyxJQUFJakMsT0FBTyxHQUFHWCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNZLEdBQUcsRUFBRTtFQUNsQyxJQUFHRCxPQUFPLElBQUksRUFBRSxFQUFFO0lBQ2RHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSw4QkFBOEIsRUFBRTtNQUFDQyxPQUFPLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFDMUU7RUFDSjtFQUNBO0VBQ0E7RUFDQTtFQUNBaEIsQ0FBQyxDQUFDaUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxLQUFLO0lBQ1hDLEdBQUcsRUFBRXRCLGtIQUFPLENBQUN1QixRQUFRLENBQUMsb0VBQW9FLEVBQUU7TUFBQyxTQUFTLEVBQUVULE9BQU8sQ0FBQ1UsSUFBSTtJQUFFLENBQUMsQ0FBQztJQUN4SEMsV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtNQUN2QjtNQUNBWCxNQUFNLENBQUNVLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtRQUFDVCxPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUNEZSxLQUFLLEVBQUUsZUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUM3Q3BCLE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxRQUFRLEVBQUVDLEtBQUssQ0FBQ0csWUFBWSxFQUFFO1FBQUNuQixPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7TUFDM0RvQixDQUFDLENBQUNLLElBQUksRUFBRTtJQUNaO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBS0Z6QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVc7RUFDekMsSUFBSUUsT0FBTyxHQUFHWCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNZLEdBQUcsRUFBRTtFQUNsQyxJQUFHRCxPQUFPLElBQUksRUFBRSxFQUFFO0lBQ2RHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSw4QkFBOEIsRUFBRTtNQUFDQyxPQUFPLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFDMUU7RUFDSjtFQUNBaEIsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUM2QyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3JELENBQUMsQ0FBQztBQUNGN0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDUyxFQUFFLENBQUMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFlBQVc7RUFDN0QsSUFBSUUsT0FBTyxHQUFHWCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNZLEdBQUcsRUFBRTtFQUNsQyxJQUFHRCxPQUFPLElBQUksRUFBRSxFQUFFO0lBQ2RHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSw4QkFBOEIsRUFBRTtNQUFDQyxPQUFPLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFDMUU7RUFDSjtFQUNBLElBQUk4QixRQUFRLEdBQUcsSUFBSUMsUUFBUSxFQUFFO0VBQzdCRCxRQUFRLENBQUNFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRWhELENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDWSxHQUFHLEVBQUUsQ0FBQztFQUN2RSxJQUFJd0IsQ0FBQyxHQUFHQyw0Q0FBWSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQztFQUM1QztFQUNBSCxDQUFDLENBQUNJLEtBQUssRUFBRTtFQUNUeEMsQ0FBQyxDQUFDaUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRXRCLGtIQUFPLENBQUN1QixRQUFRLENBQUMsMkRBQTJELEVBQUU7TUFBQyxTQUFTLEVBQUVULE9BQU8sQ0FBQ1UsSUFBSTtJQUFFLENBQUMsQ0FBQztJQUMvRzRCLElBQUksRUFBRUgsUUFBUTtJQUNkeEIsV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxPQUFPLEVBQUUsaUJBQVVDLE1BQU0sRUFBRTtNQUN2QlcsQ0FBQyxDQUFDSyxJQUFJLEVBQUU7TUFDUjNCLE1BQU0sQ0FBQ1UsT0FBTyxDQUFDLFNBQVMsRUFBRUMsTUFBTSxFQUFFO1FBQUNULE9BQU8sRUFBRTtNQUFJLENBQUMsQ0FBQztNQUNsRGtDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3JCLENBQUM7SUFDRHBCLEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQzdDcEIsTUFBTSxDQUFDaUIsS0FBSyxDQUFDLFFBQVEsRUFBRUMsS0FBSyxDQUFDRyxZQUFZLEVBQUU7UUFBQ25CLE9BQU8sRUFBRTtNQUFJLENBQUMsQ0FBQztNQUMzRG9CLENBQUMsQ0FBQ0ssSUFBSSxFQUFFO0lBQ1o7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsImZpbGUiOiJlY3JpdHVyZWNvbXB0YWJsZV9vcGVyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICd0b2FzdHInO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuLy8gYWxlcnQoJ3Rlc3QnKTtcclxuXHJcbiQoXCJzZWxlY3RcIikuc2VsZWN0MigpXHJcbiBcclxuXHJcbiQoXCJib2R5XCIpLm9uKCdrZXlwcmVzcycsICcjaWRfcGllY2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgaWRQaWVjZSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgaWYoZS53aGljaCA9PSAxMykgIHtcclxuICAgICAgICAvLyBhbGVydCh0eXBlUGllY2UsIGlkUGllY2UpXHJcbiAgICAgICAgaWYoaWRQaWVjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNyaXR1cmVfY29tcHRhYmxlX29wZXJhdGlvbl9nZXRlY3JpdHVyZWNvbXB0YWJsZVwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpLCBcInR5cGVcIiA6IFwiYW55XCJ9KSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50XCIpLmh0bWwocmVzdWx0KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50ICNncmlkX2luZGV4XCIpLmRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50ICNncmlkX2RldGFpbHNcIikuZGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vICQoXCIjc2VuZF9hZG9uaXhcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgICQoXCIjc2VuZF9hZG9uaXhcIikuYWRkQ2xhc3MoJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGpxWEhSLnJlc3BvbnNlVGV4dCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICBcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNleGVjdXRlcicsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGxldCBpZFBpZWNlID0gJChcIiNpZF9waWVjZVwiKS52YWwoKTtcclxuICAgIC8vIGFsZXJ0KHR5cGVQaWVjZSwgaWRQaWVjZSlcclxuICAgIGlmKGlkUGllY2UgPT0gXCJcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY3JpdHVyZV9jb21wdGFibGVfb3BlcmF0aW9uX2dldGVjcml0dXJlY29tcHRhYmxlXCIsIHtcImlkUGllY2VcIjogaWRQaWVjZS50cmltKCl9KSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudFwiKS5odG1sKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQgI2dyaWRfaW5kZXhcIikuZGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnQgI2dyaWRfZGV0YWlsc1wiKS5kYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gJChcIiNzZW5kX2Fkb25peFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICAkKFwiI3NlbmRfYWRvbml4XCIpLmFkZENsYXNzKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGpxWEhSLnJlc3BvbnNlVGV4dCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KSBcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy52YWxpZGF0aW9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZigkKCcudmFsaWRhdGlvbjpjaGVja2VkJykubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAkKFwiI3NlbmRfYWRvbml4XCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjc2VuZF9hZG9uaXhcIikuYWRkQ2xhc3MoJ2Rpc2FibGVkJylcclxuICAgIH1cclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNzZW5kX2Fkb25peCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGlkUGllY2UgPSAkKFwiI2lkX3BpZWNlXCIpLnZhbCgpO1xyXG4gICAgLy8gYWxlcnQodHlwZVBpZWNlLCBpZFBpZWNlKVxyXG4gICAgaWYoaWRQaWVjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgLy8gbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9vcGVyYXRpb25fZ2V0ZWNyaXR1cmVjb21wdGFibGVfc2VuZFwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpfSksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3NcIiwgcmVzdWx0LCB7dGltZU91dDogNDAwMH0pO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59KVxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnI3ZhbGlkZXInLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZFBpZWNlID0gJChcIiNpZF9waWVjZVwiKS52YWwoKTtcclxuICAgIGlmKGlkUGllY2UgPT0gXCJcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY3JpdHVyZV9jb21wdGFibGVfb3BlcmF0aW9uX2dldGVjcml0dXJlY29tcHRhYmxlX3ZhbGlkZXJcIiwge1wiaWRQaWVjZVwiOiBpZFBpZWNlLnRyaW0oKX0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzXCIsIHJlc3VsdCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwganFYSFIucmVzcG9uc2VUZXh0LCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNyZW1pc2VfYmFucXVlJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaWRQaWVjZSA9ICQoXCIjaWRfcGllY2VcIikudmFsKCk7XHJcbiAgICBpZihpZFBpZWNlID09IFwiXCIpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgXCJWZXVpbGxleiByZW1wbGlyIGxlcyBjaGFtcHMhXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNyaXR1cmVfY29tcHRhYmxlX29wZXJhdGlvbl9nZXRlY3JpdHVyZWNvbXB0YWJsZV9yZW1pc2VfYmFucXVlXCIsIHtcImlkUGllY2VcIjogaWRQaWVjZS50cmltKCl9KSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vzc1wiLCByZXN1bHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGpxWEhSLnJlc3BvbnNlVGV4dCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vICQoXCJib2R5XCIpLm9uKCdjbGljaycsICcjcHJlY29tcHRhYmlsaXNlcicsIGZ1bmN0aW9uKCkge1xyXG5cclxuJCggXCIjcHJlY29tcHRhYmlsaXNlclwiICkuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgbGV0IGlkUGllY2UgPSAkKFwiI2lkX3BpZWNlXCIpLnZhbCgpO1xyXG4gICAgaWYoaWRQaWVjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgLy8gbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9vcGVyYXRpb25fZ2V0ZWNyaXR1cmVjb21wdGFibGVfcHJlY29tcHRhYmlsaXNlclwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpfSksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3NcIiwgcmVzdWx0LCB7dGltZU91dDogNDAwMH0pO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNyZWpldGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaWRQaWVjZSA9ICQoXCIjaWRfcGllY2VcIikudmFsKCk7XHJcbiAgICBpZihpZFBpZWNlID09IFwiXCIpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgXCJWZXVpbGxleiByZW1wbGlyIGxlcyBjaGFtcHMhXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlVmFsaWRlclwiKS5tb2RhbChcInNob3dcIilcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNvYnNlcnZhdGlvbl9yZWpldGVyX3ZhbGlkZXInLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZFBpZWNlID0gJChcIiNpZF9waWVjZVwiKS52YWwoKTtcclxuICAgIGlmKGlkUGllY2UgPT0gXCJcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcIm9ic2VydmF0aW9uX3JlamV0ZXJcIiwgJChcIiNvYnNlcnZhdGlvbl9yZWpldGVyXCIpLnZhbCgpKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY3JpdHVyZV9jb21wdGFibGVfb3BlcmF0aW9uX2dldGVjcml0dXJlY29tcHRhYmxlX3JlamV0ZXJcIiwge1wiaWRQaWVjZVwiOiBpZFBpZWNlLnRyaW0oKX0pLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzXCIsIHJlc3VsdCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=