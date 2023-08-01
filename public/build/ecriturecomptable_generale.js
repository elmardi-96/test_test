(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecriturecomptable_generale"],{

/***/ "./assets/js/components/ecriture_comptable/generale.js":
/*!*************************************************************!*\
  !*** ./assets/js/components/ecriture_comptable/generale.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_9__);



var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");





_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.setRoutingData(routes);
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("ecriture_comptable_comptabilite_generale_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  order: [[0, "desc"]],
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
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});

$("#tpyePiece").on('change', function () {
  var val = $(this).val();
  if (val != "") {
    table.columns(12).search(val).draw();
  }
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
    // var l = Ladda.create(document.activeElement);
    // Start loading
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("ecriture_comptable_operation_getecriturecomptable", {
        "idPiece": idPiece.trim(),
        "type": "generale"
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        $("#content").html(result);
        $("#content #grid_index").dataTable({
          language: {
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("datatables_langue"),
            processing: true
          }
        });
        $("#content #grid_details").dataTable({
          language: {
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("datatables_langue"),
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("ecriture_comptable_operation_getecriturecomptable", {
      "idPiece": idPiece.trim()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      $("#content").html(result);
      $("#content #grid_index").dataTable({
        language: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("datatables_langue"),
          processing: true
        }
      });
      $("#content #grid_details").dataTable({
        language: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("datatables_langue"),
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("ecriture_comptable_operation_getecriturecomptable_send", {
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "GET",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("ecriture_comptable_operation_getecriturecomptable_valider", {
      "idPiece": idPiece.trim()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      toastr.success("Success", result, {
        timeOut: 4000
      });
      // removeFactureFromTable();
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("ecriture_comptable_operation_getecriturecomptable_precomptabiliser", {
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("ecriture_comptable_operation_getecriturecomptable_rejeter", {
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

      // removeFactureFromTable();
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

},[["./assets/js/components/ecriture_comptable/generale.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9lY3JpdHVyZV9jb21wdGFibGUvZ2VuZXJhbGUuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImdsb2JhbCIsIiQiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInNlbGVjdDIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJvcmRlciIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJuYW1lIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwiY2xhc3NOYW1lIiwidmlzaWJsZSIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwib24iLCJ2YWwiLCJzZWFyY2giLCJkcmF3IiwiZSIsImlkUGllY2UiLCJ3aGljaCIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0IiwidHJpbSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImRhdGFUYWJsZSIsIm1vZGFsIiwiYWRkQ2xhc3MiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmVzcG9uc2VUZXh0IiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3RhcnQiLCJzdG9wIiwibGVuZ3RoIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJB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ZWNyaXR1cmVjb21wdGFibGVfZ2VuZXJhbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICd0b2FzdHInO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuLy8gYWxlcnQoJ3Rlc3QnKTtcclxuXHJcbiQoXCJzZWxlY3RcIikuc2VsZWN0MigpXHJcblxyXG52YXIgdGFibGUgPSAkKFwiI2dyaWRcIikuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNyaXR1cmVfY29tcHRhYmxlX2NvbXB0YWJpbGl0ZV9nZW5lcmFsZV9saXN0XCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UuaWQnICwgd2lkdGg6IFwiNSVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgIG5hbWU6ICdwaWVjZS5jb2RlJywgd2lkdGg6IFwiOCVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgIG5hbWU6ICdwaWVjZS5wYXJ0ZW5haXJlJywgd2lkdGg6IFwiOCVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgIG5hbWU6ICdwaWVjZS5kb3NzaWVyJywgd2lkdGg6IFwiMTclXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UuZGF0ZScsIHdpZHRoOiBcIjglXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCAgbmFtZTogJ3BpZWNlLm9ic2VydmF0aW9uX29wZXJhdGlvbicsc2VhcmNoYWJsZTpmYWxzZSwgd2lkdGg6IFwiMTclXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UuYnJkJywgd2lkdGg6IFwiOCVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgIG5hbWU6ICdwaWVjZS5tb250YW50Jywgd2lkdGg6IFwiOCVcIiAsY2xhc3NOYW1lOiAndGQtbnVtYmVyIHBkLWZhYyd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCAgbmFtZTogJ3BpZWNlLnByZWNvbXB0YWJsaXNlcicsc2VhcmNoYWJsZTpmYWxzZSwgIHdpZHRoOiBcIjIlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCAgbmFtZTogJ3BpZWNlLnZhbGlkZScsc2VhcmNoYWJsZTpmYWxzZSwgd2lkdGg6IFwiMiVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogZmFsc2UsICBuYW1lOiAncGllY2UucmVqZXRlcicsc2VhcmNoYWJsZTpmYWxzZSwgd2lkdGg6IFwiMiVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgIG5hbWU6ICdwaWVjZS5tb3RpZicsIHdpZHRoOiBcIjE1JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgbmFtZTogJ3BpZWNlLmlkJywgdmlzaWJsZTogZmFsc2UsIHNlYXJjaGFibGU6ZmFsc2V9LFxyXG4gICAgICBcclxuICAgIF0sXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiQoXCIjdHB5ZVBpZWNlXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgaWYodmFsICE9IFwiXCIpIHtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDEyKS5zZWFyY2godmFsKS5kcmF3KCk7XHJcbiAgICB9XHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKCdrZXlwcmVzcycsICcjaWRfcGllY2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgaWRQaWVjZSA9ICQodGhpcykudmFsKCk7XHJcbiAgIFxyXG4gICAgaWYoZS53aGljaCA9PSAxMykgIHtcclxuICAgICAgICAvLyBhbGVydCh0eXBlUGllY2UsIGlkUGllY2UpXHJcbiAgICAgICAgaWYoaWRQaWVjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNyaXR1cmVfY29tcHRhYmxlX29wZXJhdGlvbl9nZXRlY3JpdHVyZWNvbXB0YWJsZVwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpLCBcInR5cGVcIiA6IFwiZ2VuZXJhbGVcIn0pLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnRcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQgI2dyaWRfaW5kZXhcIikuZGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbnRlbnQgI2dyaWRfZGV0YWlsc1wiKS5kYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlU2hvd1wiKS5tb2RhbCgnc2hvdycpXHJcbiAgICAgICAgICAgICAgICAkKFwiI3NlbmRfYWRvbml4XCIpLmFkZENsYXNzKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcjZXhlY3V0ZXInLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBsZXQgaWRQaWVjZSA9ICQoXCIjaWRfcGllY2VcIikudmFsKCk7XHJcbiAgICAvLyBhbGVydCh0eXBlUGllY2UsIGlkUGllY2UpXHJcbiAgICBpZihpZFBpZWNlID09IFwiXCIpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgXCJWZXVpbGxleiByZW1wbGlyIGxlcyBjaGFtcHMhXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNyaXR1cmVfY29tcHRhYmxlX29wZXJhdGlvbl9nZXRlY3JpdHVyZWNvbXB0YWJsZVwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpfSksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnRcIikuaHRtbChyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNjb250ZW50ICNncmlkX2luZGV4XCIpLmRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIiNjb250ZW50ICNncmlkX2RldGFpbHNcIikuZGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIjc2VuZF9hZG9uaXhcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgJChcIiNzZW5kX2Fkb25peFwiKS5hZGRDbGFzcygnZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy52YWxpZGF0aW9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZigkKCcudmFsaWRhdGlvbjpjaGVja2VkJykubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAkKFwiI3NlbmRfYWRvbml4XCIpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjc2VuZF9hZG9uaXhcIikuYWRkQ2xhc3MoJ2Rpc2FibGVkJylcclxuICAgIH1cclxufSlcclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJyNzZW5kX2Fkb25peCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGlkUGllY2UgPSAkKFwiI2lkX3BpZWNlXCIpLnZhbCgpO1xyXG4gICAgLy8gYWxlcnQodHlwZVBpZWNlLCBpZFBpZWNlKVxyXG4gICAgaWYoaWRQaWVjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgLy8gbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9vcGVyYXRpb25fZ2V0ZWNyaXR1cmVjb21wdGFibGVfc2VuZFwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpfSksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3NcIiwgcmVzdWx0LCB7dGltZU91dDogNDAwMH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlRmFjdHVyZUZyb21UYWJsZSgpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59KVxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnI3ZhbGlkZXInLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZFBpZWNlID0gJChcIiNpZF9waWVjZVwiKS52YWwoKTtcclxuICAgIGlmKGlkUGllY2UgPT0gXCJcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlY3JpdHVyZV9jb21wdGFibGVfb3BlcmF0aW9uX2dldGVjcml0dXJlY29tcHRhYmxlX3ZhbGlkZXJcIiwge1wiaWRQaWVjZVwiOiBpZFBpZWNlLnRyaW0oKX0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzXCIsIHJlc3VsdCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlRmFjdHVyZUZyb21UYWJsZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGpxWEhSLnJlc3BvbnNlVGV4dCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4vLyAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnI3ByZWNvbXB0YWJpbGlzZXInLCBmdW5jdGlvbigpIHtcclxuXHJcbiQoIFwiI3ByZWNvbXB0YWJpbGlzZXJcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGlkUGllY2UgPSAkKFwiI2lkX3BpZWNlXCIpLnZhbCgpO1xyXG4gICAgaWYoaWRQaWVjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZWNyaXR1cmVfY29tcHRhYmxlX29wZXJhdGlvbl9nZXRlY3JpdHVyZWNvbXB0YWJsZV9wcmVjb21wdGFiaWxpc2VyXCIsIHtcImlkUGllY2VcIjogaWRQaWVjZS50cmltKCl9KSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vzc1wiLCByZXN1bHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGpxWEhSLnJlc3BvbnNlVGV4dCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnI3JlamV0ZXInLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZFBpZWNlID0gJChcIiNpZF9waWVjZVwiKS52YWwoKTtcclxuICAgIGlmKGlkUGllY2UgPT0gXCJcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCBcIlZldWlsbGV6IHJlbXBsaXIgbGVzIGNoYW1wcyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVWYWxpZGVyXCIpLm1vZGFsKFwic2hvd1wiKVxyXG59KVxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnI29ic2VydmF0aW9uX3JlamV0ZXJfdmFsaWRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGlkUGllY2UgPSAkKFwiI2lkX3BpZWNlXCIpLnZhbCgpO1xyXG4gICAgaWYoaWRQaWVjZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwib2JzZXJ2YXRpb25fcmVqZXRlclwiLCAkKFwiI29ic2VydmF0aW9uX3JlamV0ZXJcIikudmFsKCkpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9vcGVyYXRpb25fZ2V0ZWNyaXR1cmVjb21wdGFibGVfcmVqZXRlclwiLCB7XCJpZFBpZWNlXCI6IGlkUGllY2UudHJpbSgpfSksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3NcIiwgcmVzdWx0LCB7dGltZU91dDogNDAwMH0pO1xyXG5cclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlVmFsaWRlclwiKS5tb2RhbChcImhpZGVcIilcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZUZhY3R1cmVGcm9tVGFibGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9