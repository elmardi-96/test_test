(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecriturecomptable_charge"],{

/***/ "./assets/js/components/ecriture_comptable/charge.js":
/*!***********************************************************!*\
  !*** ./assets/js/components/ecriture_comptable/charge.js ***!
  \***********************************************************/
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
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_compta_charge_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  columns: [{
    orderable: true,
    name: 'piece.id',
    width: "5%"
  }, {
    orderable: true,
    name: 'piece.code',
    width: "8%"
  }, {
    orderable: true,
    name: 'piece.partenaire',
    width: "8%"
  }, {
    orderable: true,
    name: 'piece.dossier',
    width: "17%"
  }, {
    orderable: true,
    name: 'piece.date',
    width: "8%"
  }, {
    orderable: false,
    name: 'piece.observation_operation',
    searchable: false,
    width: "17%"
  }, {
    orderable: true,
    name: 'piece.brd',
    width: "8%"
  }, {
    orderable: true,
    name: 'piece.montant',
    width: "8%",
    className: 'td-number pd-fac'
  }, {
    orderable: false,
    name: 'piece.precomptabliser',
    searchable: false,
    width: "2%"
  }, {
    orderable: false,
    name: 'piece.valide',
    searchable: false,
    width: "2%"
  }, {
    orderable: false,
    name: 'piece.rejeter',
    searchable: false,
    width: "2%"
  }, {
    orderable: true,
    name: 'piece.motif',
    width: "15%"
  }, {
    orderable: false,
    name: 'piece.id',
    visible: false,
    searchable: false
  }],
  pageLength: 15,
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});

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
    // var l = Ladda.create(document.activeElement);form
    // Start loading
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_operation_getecriturecomptable", {
        "idPiece": idPiece.trim(),
        "type": "faf"
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
        $("#ModalDocumentDynamiqueShow").modal('show');
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

      // removeFactureFromTable();
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
      removeFactureFromTable();
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
      $("#ModalDocumentDynamiqueValider").modal("hide");
      removeFactureFromTable();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
function removeFactureFromTable() {
  var idPiece = $("#id_piece").val();
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("ecriture_comptable_charge_flag_facture", {
      "idPiece": idPiece.trim()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      $("#ModalDocumentDynamiqueShow").modal("hide");
      // toastr.success("Success", result, {timeOut: 4000});
      table.ajax.reload();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      l.stop();
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/components/ecriture_comptable/charge.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9lY3JpdHVyZV9jb21wdGFibGUvY2hhcmdlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJzZWxlY3QyIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZGVmZXJSZW5kZXIiLCJzdGF0ZVNhdmUiLCJzZXJ2ZXJTaWRlIiwibGVuZ3RoTWVudSIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJuYW1lIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwiY2xhc3NOYW1lIiwidmlzaWJsZSIsInBhZ2VMZW5ndGgiLCJsYW5ndWFnZSIsInByb2Nlc3NpbmciLCJvbiIsImUiLCJpZFBpZWNlIiwidmFsIiwid2hpY2giLCJ0b2FzdHIiLCJ3YXJuaW5nIiwidGltZU91dCIsInRyaW0iLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiLCJkYXRhVGFibGUiLCJtb2RhbCIsImFkZENsYXNzIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInJlc3BvbnNlVGV4dCIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0Iiwic3RvcCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlRmFjdHVyZUZyb21UYWJsZSIsImNsaWNrIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImRhdGEiLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEs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O0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7TUFDdkJ6QyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQzRDLEtBQUssQ0FBQyxNQUFNLENBQUM7TUFDOUM7TUFDQW5DLEtBQUssQ0FBQ0UsSUFBSSxDQUFDc0QsTUFBTSxFQUFFO0lBSXZCLENBQUM7SUFDRG5CLEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQzdDZixNQUFNLENBQUNZLEtBQUssQ0FBQyxRQUFRLEVBQUVDLEtBQUssQ0FBQ0csWUFBWSxFQUFFO1FBQUNkLE9BQU8sRUFBRTtNQUFJLENBQUMsQ0FBQztNQUMzRGUsQ0FBQyxDQUFDSyxJQUFJLEVBQUU7SUFDWjtFQUNKLENBQUMsQ0FBQztBQUNOLEMiLCJmaWxlIjoiZWNyaXR1cmVjb21wdGFibGVfY2hhcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanMnO1xyXG5yZXF1aXJlKCcuLi8uLi9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanMnKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSAndG9hc3RyJztcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIGFsZXJ0KCd0ZXN0Jyk7XHJcblxyXG4kKFwic2VsZWN0XCIpLnNlbGVjdDIoKVxyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9jb21wdGFfY2hhcmdlX2xpc3RcIiksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgXSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ3BpZWNlLmlkJyAsIHdpZHRoOiBcIjUlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UuY29kZScsIHdpZHRoOiBcIjglXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UucGFydGVuYWlyZScsIHdpZHRoOiBcIjglXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UuZG9zc2llcicsIHdpZHRoOiBcIjE3JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ3BpZWNlLmRhdGUnLCB3aWR0aDogXCI4JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgIG5hbWU6ICdwaWVjZS5vYnNlcnZhdGlvbl9vcGVyYXRpb24nLHNlYXJjaGFibGU6ZmFsc2UsIHdpZHRoOiBcIjE3JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ3BpZWNlLmJyZCcsIHdpZHRoOiBcIjglXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UubW9udGFudCcsIHdpZHRoOiBcIjglXCIgLGNsYXNzTmFtZTogJ3RkLW51bWJlciBwZC1mYWMnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgIG5hbWU6ICdwaWVjZS5wcmVjb21wdGFibGlzZXInLHNlYXJjaGFibGU6ZmFsc2UsICB3aWR0aDogXCIyJVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgIG5hbWU6ICdwaWVjZS52YWxpZGUnLHNlYXJjaGFibGU6ZmFsc2UsIHdpZHRoOiBcIjIlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCAgbmFtZTogJ3BpZWNlLnJlamV0ZXInLHNlYXJjaGFibGU6ZmFsc2UsIHdpZHRoOiBcIjIlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UubW90aWYnLCB3aWR0aDogXCIxNSVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogZmFsc2UsIG5hbWU6ICdwaWVjZS5pZCcsIHZpc2libGU6IGZhbHNlLCBzZWFyY2hhYmxlOmZhbHNlfSxcclxuICAgICAgXHJcbiAgICBdLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgIFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgLy8gZml4ZWRIZWFkZXI6IHRydWUsXHJcbiAgfSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2tleXByZXNzJywgJyNpZF9waWVjZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCBpZFBpZWNlID0gJCh0aGlzKS52YWwoKTtcclxuICAgXHJcbiAgICBpZihlLndoaWNoID09IDEzKSAge1xyXG4gICAgICAgIC8vIGFsZXJ0KHR5cGVQaWVjZSwgaWRQaWVjZSlcclxuICAgICAgICBpZihpZFBpZWNlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO2Zvcm1cclxuICAgICAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNyaXR1cmVfY29tcHRhYmxlX29wZXJhdGlvbl9nZXRlY3JpdHVyZWNvbXB0YWJsZVwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpLCBcInR5cGVcIiA6IFwiZmFmXCJ9KSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50XCIpLmh0bWwocmVzdWx0KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50ICNncmlkX2luZGV4XCIpLmRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb250ZW50ICNncmlkX2RldGFpbHNcIikuZGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVNob3dcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgICAgICAgICAgJChcIiNzZW5kX2Fkb25peFwiKS5hZGRDbGFzcygnZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwganFYSFIucmVzcG9uc2VUZXh0LCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG59KVxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnI2V4ZWN1dGVyJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgbGV0IGlkUGllY2UgPSAkKFwiI2lkX3BpZWNlXCIpLnZhbCgpO1xyXG4gICAgLy8gYWxlcnQodHlwZVBpZWNlLCBpZFBpZWNlKVxyXG4gICAgaWYoaWRQaWVjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9vcGVyYXRpb25fZ2V0ZWNyaXR1cmVjb21wdGFibGVcIiwge1wiaWRQaWVjZVwiOiBpZFBpZWNlLnRyaW0oKX0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgJChcIiNjb250ZW50XCIpLmh0bWwocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjY29udGVudCAjZ3JpZF9pbmRleFwiKS5kYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGVudCAjZ3JpZF9kZXRhaWxzXCIpLmRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAkKFwiI3NlbmRfYWRvbml4XCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgICAgICQoXCIjc2VuZF9hZG9uaXhcIikuYWRkQ2xhc3MoJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwganFYSFIucmVzcG9uc2VUZXh0LCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcudmFsaWRhdGlvbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoJCgnLnZhbGlkYXRpb246Y2hlY2tlZCcpLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgJChcIiNzZW5kX2Fkb25peFwiKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI3NlbmRfYWRvbml4XCIpLmFkZENsYXNzKCdkaXNhYmxlZCcpXHJcbiAgICB9XHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcjc2VuZF9hZG9uaXgnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZFBpZWNlID0gJChcIiNpZF9waWVjZVwiKS52YWwoKTtcclxuICAgIC8vIGFsZXJ0KHR5cGVQaWVjZSwgaWRQaWVjZSlcclxuICAgIGlmKGlkUGllY2UgPT0gXCJcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIC8vIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY3JpdHVyZV9jb21wdGFibGVfb3BlcmF0aW9uX2dldGVjcml0dXJlY29tcHRhYmxlX3NlbmRcIiwge1wiaWRQaWVjZVwiOiBpZFBpZWNlLnRyaW0oKX0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzXCIsIHJlc3VsdCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZUZhY3R1cmVGcm9tVGFibGUoKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwganFYSFIucmVzcG9uc2VUZXh0LCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAvLyBsLnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyN2YWxpZGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaWRQaWVjZSA9ICQoXCIjaWRfcGllY2VcIikudmFsKCk7XHJcbiAgICBpZihpZFBpZWNlID09IFwiXCIpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgXCJWZXVpbGxleiByZW1wbGlyIGxlcyBjaGFtcHMhXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNyaXR1cmVfY29tcHRhYmxlX29wZXJhdGlvbl9nZXRlY3JpdHVyZWNvbXB0YWJsZV92YWxpZGVyXCIsIHtcImlkUGllY2VcIjogaWRQaWVjZS50cmltKCl9KSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vzc1wiLCByZXN1bHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIHJlbW92ZUZhY3R1cmVGcm9tVGFibGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuLy8gJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNwcmVjb21wdGFiaWxpc2VyJywgZnVuY3Rpb24oKSB7XHJcblxyXG4kKCBcIiNwcmVjb21wdGFiaWxpc2VyXCIgKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZFBpZWNlID0gJChcIiNpZF9waWVjZVwiKS52YWwoKTtcclxuICAgIGlmKGlkUGllY2UgPT0gXCJcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9vcGVyYXRpb25fZ2V0ZWNyaXR1cmVjb21wdGFibGVfcHJlY29tcHRhYmlsaXNlclwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpfSksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3NcIiwgcmVzdWx0LCB7dGltZU91dDogNDAwMH0pO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNyZWpldGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaWRQaWVjZSA9ICQoXCIjaWRfcGllY2VcIikudmFsKCk7XHJcbiAgICBpZihpZFBpZWNlID09IFwiXCIpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgXCJWZXVpbGxleiByZW1wbGlyIGxlcyBjaGFtcHMhXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlVmFsaWRlclwiKS5tb2RhbChcInNob3dcIilcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNvYnNlcnZhdGlvbl9yZWpldGVyX3ZhbGlkZXInLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZFBpZWNlID0gJChcIiNpZF9waWVjZVwiKS52YWwoKTtcclxuICAgIGlmKGlkUGllY2UgPT0gXCJcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcIm9ic2VydmF0aW9uX3JlamV0ZXJcIiwgJChcIiNvYnNlcnZhdGlvbl9yZWpldGVyXCIpLnZhbCgpKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY3JpdHVyZV9jb21wdGFibGVfb3BlcmF0aW9uX2dldGVjcml0dXJlY29tcHRhYmxlX3JlamV0ZXJcIiwge1wiaWRQaWVjZVwiOiBpZFBpZWNlLnRyaW0oKX0pLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzXCIsIHJlc3VsdCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVZhbGlkZXJcIikubW9kYWwoXCJoaWRlXCIpXHJcblxyXG4gICAgICAgICAgICByZW1vdmVGYWN0dXJlRnJvbVRhYmxlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwganFYSFIucmVzcG9uc2VUZXh0LCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVGYWN0dXJlRnJvbVRhYmxlKCkge1xyXG4gICAgbGV0IGlkUGllY2UgPSAkKFwiI2lkX3BpZWNlXCIpLnZhbCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY3JpdHVyZV9jb21wdGFibGVfY2hhcmdlX2ZsYWdfZmFjdHVyZVwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpfSksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVNob3dcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgICAgIC8vIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vzc1wiLCByZXN1bHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcblxyXG5cclxuICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==