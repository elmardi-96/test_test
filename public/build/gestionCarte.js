(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestionCarte"],{

/***/ "./assets/js/components/module_gestion_commun/gestion_carte.js":
/*!*********************************************************************!*\
  !*** ./assets/js/components/module_gestion_commun/gestion_carte.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
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
var tr_alimentation_list_index = $('#grid_index_depot_retrait').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('compte_carte_list'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": false,
  "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  "columns": [{
    "searchable": true,
    "width": "3%",
    "targets": [0]
  }, {
    "width": "20%"
  }, {
    "width": "20%"
  }, {
    "width": "20%",
    "className": "text-right"
  }, {
    "width": "20%"
  }],
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  "language": {
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
tr_alimentation_list_index.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_5__["CustomSearchText"](api, [1, 3, 5, 6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_5__["CustomSearchDate"](api, [4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_5__["CustomSearchSelect"](api, [2], []);
});
var montant_initial = null;
var montant_site_initial = null;
$("body").on('click', ".new_operation_button", function () {
  var id = $(this).attr('data-id');
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("compte_carte_new", {
      "dossier": id
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      // console.log(result);
      $("#new_operation .spr1").hide();
      $("#new_operation .bod1").html(result).show();

      // $("#new_operation #montant_site_caisse").val(result.compte.montantFinal)
      // $("#new_operation #montant_caisse_total").val(result.montant_caisse_total)
      // $("#new_operation #montant_caisse_virtuelle").val(result.compteDossierCourantVirtuelle.montantFinal)
      // $("#new_operation #montant_caisse_caisse").val(result.compteDossierCourantPhysique.montantFinal)
      // $("#new_operation #compteBanque").append(`<option value="${result.compte.id}">${result.compte.designation}</option>`)
      // $("#new_operation #site").append(`<option value="${result.dossier.id}">${result.dossier.description}</option>`)
      // $("#new_operation #ccp").append(`<option value="${result.compteDossierCourantPhysique.id}">${result.compteDossierCourantPhysique.designation}</option>`)

      $("#new_operation").modal("show");
      montant_initial = null;
      montant_site_initial = null;
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
$("body").on("click", "#create_caisse", function (e) {
  var form_name = $(".form").attr("name");
  var formData = new FormData();
  var params = $('body #new_caisse_operation').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
  });
  var selector = $("#new_caisse_operation");
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector("body .my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("compte_carte_store"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      // alert(result.code);
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        // var url = Routing.generate('compte_caisse_index');
        // window.location.href = url;
        $("#new_operation .spr1").show();
        $("#new_operation .bod1").empty().hide();
        $("#new_operation").modal("hide");
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
$("body").on("keyup", "#u_general_operation_montant", function () {
  var montant = $(this);
  var montant_caisse_caisse = $('#montant_caisse_caisse');
  if (montant_initial == null) {
    montant_initial = montant_caisse_caisse.val();
  }
  if (montant_site_initial == null) {
    console.log(montant_site_initial);
    montant_site_initial = +$("#montant_site_caisse").val();
    console.log(montant_site_initial);
  }
  if (montant_initial - montant.val() < 0) {
    montant.val(montant_initial);
    montant_caisse_caisse.val(0);
    toastr.warning("Vous passer le montant que vous aves dans la carte !", "warning", {
      timeOut: 4000
    });
  } else {
    montant_caisse_caisse.val(montant_initial - montant.val());
  }
  totalChange();
});
function totalChange() {
  var montant_caisse_caisse = $("#montant_caisse_caisse").val();
  var montant_caisse_virtuelle = $("#montant_caisse_virtuelle").val();
  $("#montant_caisse_total").val(+montant_caisse_caisse + +montant_caisse_virtuelle);
  // $("#montant_caisse_total").val(+montant_caisse_caisse + +montant_caisse_virtuelle)
  $("#montant_site_caisse").val(montant_site_initial + +$("#u_general_operation_montant").val());
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/components/module_gestion_commun/gestion_carte.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfZ2VzdGlvbl9jb21tdW4vZ2VzdGlvbl9jYXJ0ZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXgiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwicGFnZUxlbmd0aCIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInRhYmxlIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiYXBpIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJtb250YW50X2luaXRpYWwiLCJtb250YW50X3NpdGVfaW5pdGlhbCIsImlkIiwiYXR0ciIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaGlkZSIsImh0bWwiLCJzaG93IiwibW9kYWwiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwidG9hc3RyIiwidGltZU91dCIsImZvcm1fbmFtZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwYXJhbXMiLCJzZXJpYWxpemVBcnJheSIsImVhY2giLCJpIiwidmFsIiwiYXBwZW5kIiwibmFtZSIsInZhbHVlIiwic2VsZWN0b3IiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydCIsInN0b3AiLCJjb2RlIiwid2FybmluZyIsIm1lc3NhZ2UiLCJ0aXRsZSIsImVycm9ycyIsIlNob3dGb3JtRXJyb3JzIiwiZW1wdHkiLCJwcmV2ZW50RGVmYXVsdCIsIm1vbnRhbnQiLCJtb250YW50X2NhaXNzZV9jYWlzc2UiLCJjb25zb2xlIiwibG9nIiwidG90YWxDaGFuZ2UiLCJtb250YW50X2NhaXNzZV92aXJ0dWVsbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3ZEO0FBQ3REQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDakI7QUFDdkM7QUFFakNDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBRzlCSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFLRixJQUFJQywwQkFBMEIsR0FBR1IsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUNTLFNBQVMsQ0FBQztFQUN0RUMsSUFBSSxFQUFFO0lBQ0ZDLEdBQUcsRUFBRWQsa0hBQU8sQ0FBQ2UsUUFBUSxDQUFDLG1CQUFtQixDQUFDO0lBQUU7SUFDNUNDLElBQUksRUFBRTtFQUNWLENBQUM7RUFDRCxhQUFhLEVBQUUsSUFBSTtFQUNuQixXQUFXLEVBQUUsS0FBSztFQUNsQixZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFB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QUNkO0lBQ0w2QyxxQkFBcUIsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUJULE1BQU0sQ0FBQ3FCLE9BQU8sQ0FBQyxzREFBc0QsRUFBRSxTQUFTLEVBQUU7TUFBQ3BCLE9BQU8sRUFBRTtJQUFJLENBQUMsQ0FBQztFQUV0RyxDQUFDLE1BQU07SUFDSDRCLHFCQUFxQixDQUFDcEIsR0FBRyxDQUFDekIsZUFBZSxHQUFHNEMsT0FBTyxDQUFDbkIsR0FBRyxFQUFFLENBQUM7RUFDOUQ7RUFDQXVCLFdBQVcsRUFBRTtBQUNqQixDQUFDLENBQUM7QUFFRixTQUFTQSxXQUFXLEdBQUc7RUFFbkIsSUFBSUgscUJBQXFCLEdBQUd0RixDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ2tFLEdBQUcsRUFBRTtFQUM3RCxJQUFJd0Isd0JBQXdCLEdBQUcxRixDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ2tFLEdBQUcsRUFBRTtFQUNuRWxFLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDa0UsR0FBRyxDQUFDLENBQUNvQixxQkFBcUIsR0FBRyxDQUFDSSx3QkFBd0IsQ0FBQztFQUNsRjtFQUNBMUYsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNrRSxHQUFHLENBQUN4QixvQkFBb0IsR0FBRyxDQUFDMUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNrRSxHQUFHLEVBQUUsQ0FBRTtBQUNuRyxDIiwiZmlsZSI6Imdlc3Rpb25DYXJ0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzJztcclxucmVxdWlyZSgnLi4vLi4vcGx1Z2lucy92YWxpZGF0ZS9qcXVlcnkudmFsaWRhdGUubWluLmpzJyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gJy4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzJztcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuaW1wb3J0IHsgd2FybmluZyB9IGZyb20gJ3RvYXN0cic7XHJcblxyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5cclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxudmFyIHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4ID0gJCgnI2dyaWRfaW5kZXhfZGVwb3RfcmV0cmFpdCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdjb21wdGVfY2FydGVfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IGZhbHNlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAge1wic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMyVcIiwgXCJ0YXJnZXRzXCI6IFswXX0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiMjAlXCJ9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjIwJVwifSxcclxuICAgICAgICB7IFwid2lkdGhcIjogXCIyMCVcIixcImNsYXNzTmFtZVwiOlwidGV4dC1yaWdodFwifSxcclxuICAgICAgICB7XCJ3aWR0aFwiIDogXCIyMCVcIn0sXHJcbiAgICBdLFxyXG5cclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG50cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwgMywgNSAsNl0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFs0XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbMl0sIFtdKTtcclxufSk7XHJcblxyXG5cclxubGV0IG1vbnRhbnRfaW5pdGlhbCA9IG51bGw7XHJcbmxldCBtb250YW50X3NpdGVfaW5pdGlhbCA9IG51bGw7XHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycgLFwiLm5ld19vcGVyYXRpb25fYnV0dG9uXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImNvbXB0ZV9jYXJ0ZV9uZXdcIiwge1wiZG9zc2llclwiOiBpZH0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb24gLnNwcjFcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb24gLmJvZDFcIikuaHRtbChyZXN1bHQpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIjbmV3X29wZXJhdGlvbiAjbW9udGFudF9zaXRlX2NhaXNzZVwiKS52YWwocmVzdWx0LmNvbXB0ZS5tb250YW50RmluYWwpXHJcbiAgICAgICAgICAgIC8vICQoXCIjbmV3X29wZXJhdGlvbiAjbW9udGFudF9jYWlzc2VfdG90YWxcIikudmFsKHJlc3VsdC5tb250YW50X2NhaXNzZV90b3RhbClcclxuICAgICAgICAgICAgLy8gJChcIiNuZXdfb3BlcmF0aW9uICNtb250YW50X2NhaXNzZV92aXJ0dWVsbGVcIikudmFsKHJlc3VsdC5jb21wdGVEb3NzaWVyQ291cmFudFZpcnR1ZWxsZS5tb250YW50RmluYWwpXHJcbiAgICAgICAgICAgIC8vICQoXCIjbmV3X29wZXJhdGlvbiAjbW9udGFudF9jYWlzc2VfY2Fpc3NlXCIpLnZhbChyZXN1bHQuY29tcHRlRG9zc2llckNvdXJhbnRQaHlzaXF1ZS5tb250YW50RmluYWwpXHJcbiAgICAgICAgICAgIC8vICQoXCIjbmV3X29wZXJhdGlvbiAjY29tcHRlQmFucXVlXCIpLmFwcGVuZChgPG9wdGlvbiB2YWx1ZT1cIiR7cmVzdWx0LmNvbXB0ZS5pZH1cIj4ke3Jlc3VsdC5jb21wdGUuZGVzaWduYXRpb259PC9vcHRpb24+YClcclxuICAgICAgICAgICAgLy8gJChcIiNuZXdfb3BlcmF0aW9uICNzaXRlXCIpLmFwcGVuZChgPG9wdGlvbiB2YWx1ZT1cIiR7cmVzdWx0LmRvc3NpZXIuaWR9XCI+JHtyZXN1bHQuZG9zc2llci5kZXNjcmlwdGlvbn08L29wdGlvbj5gKVxyXG4gICAgICAgICAgICAvLyAkKFwiI25ld19vcGVyYXRpb24gI2NjcFwiKS5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCIke3Jlc3VsdC5jb21wdGVEb3NzaWVyQ291cmFudFBoeXNpcXVlLmlkfVwiPiR7cmVzdWx0LmNvbXB0ZURvc3NpZXJDb3VyYW50UGh5c2lxdWUuZGVzaWduYXRpb259PC9vcHRpb24+YClcclxuXHJcblxyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb25cIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtb250YW50X2luaXRpYWwgPSBudWxsO1xyXG4gICAgICAgICAgICBtb250YW50X3NpdGVfaW5pdGlhbCA9IG51bGw7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNjcmVhdGVfY2Fpc3NlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCdib2R5ICNuZXdfY2Fpc3NlX29wZXJhdGlvbicpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIiNuZXdfY2Fpc3NlX29wZXJhdGlvblwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5IC5teS1idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJjb21wdGVfY2FydGVfc3RvcmVcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChyZXN1bHQuY29kZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5jb2RlID09IDQwMyl7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZT0yMDApIHtcclxuICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnY29tcHRlX2NhaXNzZV9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb24gLnNwcjFcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNuZXdfb3BlcmF0aW9uIC5ib2QxXCIpLmVtcHR5KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNuZXdfb3BlcmF0aW9uXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJrZXl1cFwiLCBcIiN1X2dlbmVyYWxfb3BlcmF0aW9uX21vbnRhbnRcIiwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBtb250YW50ID0gJCh0aGlzKTtcclxuICAgIHZhciBtb250YW50X2NhaXNzZV9jYWlzc2UgPSAkKCcjbW9udGFudF9jYWlzc2VfY2Fpc3NlJyk7XHJcbiAgICBpZihtb250YW50X2luaXRpYWwgPT0gbnVsbCkge1xyXG4gICAgICAgIG1vbnRhbnRfaW5pdGlhbCA9IG1vbnRhbnRfY2Fpc3NlX2NhaXNzZS52YWwoKVxyXG4gICAgfVxyXG4gICAgaWYobW9udGFudF9zaXRlX2luaXRpYWwgPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vbnRhbnRfc2l0ZV9pbml0aWFsKTtcclxuICAgICAgICBtb250YW50X3NpdGVfaW5pdGlhbCA9ICskKFwiI21vbnRhbnRfc2l0ZV9jYWlzc2VcIikudmFsKClcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250YW50X3NpdGVfaW5pdGlhbCk7XHJcbiAgICB9XHJcbiAgICBpZigobW9udGFudF9pbml0aWFsIC0gbW9udGFudC52YWwoKSkgPCAwKSB7XHJcbiAgICAgICAgbW9udGFudC52YWwoXHJcbiAgICAgICAgICAgIG1vbnRhbnRfaW5pdGlhbFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgbW9udGFudF9jYWlzc2VfY2Fpc3NlLnZhbCgwKVxyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVm91cyBwYXNzZXIgbGUgbW9udGFudCBxdWUgdm91cyBhdmVzIGRhbnMgbGEgY2FydGUgIVwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9udGFudF9jYWlzc2VfY2Fpc3NlLnZhbChtb250YW50X2luaXRpYWwgLSBtb250YW50LnZhbCgpKTtcclxuICAgIH0gICAgXHJcbiAgICB0b3RhbENoYW5nZSgpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiB0b3RhbENoYW5nZSgpIHtcclxuICAgIFxyXG4gICAgdmFyIG1vbnRhbnRfY2Fpc3NlX2NhaXNzZSA9ICQoXCIjbW9udGFudF9jYWlzc2VfY2Fpc3NlXCIpLnZhbCgpO1xyXG4gICAgdmFyIG1vbnRhbnRfY2Fpc3NlX3ZpcnR1ZWxsZSA9ICQoXCIjbW9udGFudF9jYWlzc2VfdmlydHVlbGxlXCIpLnZhbCgpIFxyXG4gICAgJChcIiNtb250YW50X2NhaXNzZV90b3RhbFwiKS52YWwoK21vbnRhbnRfY2Fpc3NlX2NhaXNzZSArICttb250YW50X2NhaXNzZV92aXJ0dWVsbGUpXHJcbiAgICAvLyAkKFwiI21vbnRhbnRfY2Fpc3NlX3RvdGFsXCIpLnZhbCgrbW9udGFudF9jYWlzc2VfY2Fpc3NlICsgK21vbnRhbnRfY2Fpc3NlX3ZpcnR1ZWxsZSlcclxuICAgICQoXCIjbW9udGFudF9zaXRlX2NhaXNzZVwiKS52YWwobW9udGFudF9zaXRlX2luaXRpYWwgKyArJChcIiN1X2dlbmVyYWxfb3BlcmF0aW9uX21vbnRhbnRcIikudmFsKCkgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==