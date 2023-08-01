(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestionCaisse"],{

/***/ "./assets/js/components/module_gestion_commun/gestion_caisse.js":
/*!**********************************************************************!*\
  !*** ./assets/js/components/module_gestion_commun/gestion_caisse.js ***!
  \**********************************************************************/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('compte_caisse_list'),
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("compte_caisse_new", {
      "dossier": id
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("compte_caisse_store"),
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
    toastr.warning("Vous passer le montant que vous aves dans la caisse !", "warning", {
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

},[["./assets/js/components/module_gestion_commun/gestion_caisse.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfZ2VzdGlvbl9jb21tdW4vZ2VzdGlvbl9jYWlzc2UuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImdsb2JhbCIsIiQiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4IiwiRGF0YVRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwidHlwZSIsInBhZ2VMZW5ndGgiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJ0YWJsZSIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZpeGVkSGVhZGVyIiwib24iLCJzZXR0aW5ncyIsImFwaSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwibW9udGFudF9pbml0aWFsIiwibW9udGFudF9zaXRlX2luaXRpYWwiLCJpZCIsImF0dHIiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJoaWRlIiwiaHRtbCIsInNob3ciLCJtb2RhbCIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJ0b2FzdHIiLCJ0aW1lT3V0IiwiZm9ybV9uYW1lIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInBhcmFtcyIsInNlcmlhbGl6ZUFycmF5IiwiZWFjaCIsImkiLCJ2YWwiLCJhcHBlbmQiLCJuYW1lIiwidmFsdWUiLCJzZWxlY3RvciIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0YXJ0Iiwic3RvcCIsImNvZGUiLCJ3YXJuaW5nIiwibWVzc2FnZSIsInRpdGxlIiwiZXJyb3JzIiwiU2hvd0Zvcm1FcnJvcnMiLCJlbXB0eSIsInByZXZlbnREZWZhdWx0IiwibW9udGFudCIsIm1vbnRhbnRfY2Fpc3NlX2NhaXNzZSIsInRvdGFsQ2hhbmdlIiwibW9udGFudF9jYWlzc2VfdmlydHVlbGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUN2RDtBQUN0REEsbUJBQU8sQ0FBQywwR0FBK0MsQ0FBQztBQUNTO0FBQ2xDO0FBQzBEO0FBQ2pCO0FBQ3ZDO0FBRWpDQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUc5QkksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFFWixJQUFNQyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNTSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEQyxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDO0FBS0YsSUFBSUMsMEJBQTBCLEdBQUdSLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDUyxTQUFTLENBQUM7RUFDdEVDLElBQUksRUFBRTtJQUNGQyxHQUFHLEVBQUVkLGtIQUFPLENBQUNlLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztJQUFFO0lBQzdDQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0QsYUFBYSxFQUFFLElBQUk7RUFDbkIsV0FBVyxFQUFFLEtBQUs7RUFDbEIsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVB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bUIsT0FBTyxDQUFDbkIsR0FBRyxDQUNQM0IsZUFBZSxDQUNkO0lBQ0wrQyxxQkFBcUIsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUJULE1BQU0sQ0FBQ3FCLE9BQU8sQ0FBQyx1REFBdUQsRUFBRSxTQUFTLEVBQUU7TUFBQ3BCLE9BQU8sRUFBRTtJQUFJLENBQUMsQ0FBQztFQUV2RyxDQUFDLE1BQU07SUFDSDRCLHFCQUFxQixDQUFDcEIsR0FBRyxDQUFDM0IsZUFBZSxHQUFHOEMsT0FBTyxDQUFDbkIsR0FBRyxFQUFFLENBQUM7RUFDOUQ7RUFDQXFCLFdBQVcsRUFBRTtBQUNqQixDQUFDLENBQUM7QUFFRixTQUFTQSxXQUFXLEdBQUc7RUFFbkIsSUFBSUQscUJBQXFCLEdBQUd4RixDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ29FLEdBQUcsRUFBRTtFQUM3RCxJQUFJc0Isd0JBQXdCLEdBQUcxRixDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ29FLEdBQUcsRUFBRTtFQUNuRXBFLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDb0UsR0FBRyxDQUFDLENBQUNvQixxQkFBcUIsR0FBRyxDQUFDRSx3QkFBd0IsQ0FBQztFQUNsRjtFQUNBMUYsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNvRSxHQUFHLENBQUMxQixvQkFBb0IsR0FBRyxDQUFDMUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNvRSxHQUFHLEVBQUUsQ0FBRTtBQUNuRyxDIiwiZmlsZSI6Imdlc3Rpb25DYWlzc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICd0b2FzdHInO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuXHJcbnZhciB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleCA9ICQoJyNncmlkX2luZGV4X2RlcG90X3JldHJhaXQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnY29tcHRlX2NhaXNzZV9saXN0JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogZmFsc2UsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuICAgIHBhZ2VMZW5ndGg6IDE1LFxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7XCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIzJVwiLCBcInRhcmdldHNcIjogWzBdfSxcclxuICAgICAgICB7IFwid2lkdGhcIjogXCIyMCVcIn0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiMjAlXCJ9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjIwJVwiLFwiY2xhc3NOYW1lXCI6XCJ0ZXh0LXJpZ2h0XCJ9LFxyXG4gICAgICAgIHtcIndpZHRoXCIgOiBcIjIwJVwifSxcclxuICAgIF0sXHJcblxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcbnRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4Lm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLCAzLCA1ICw2XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgWzRdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFsyXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG5sZXQgbW9udGFudF9pbml0aWFsID0gbnVsbDtcclxubGV0IG1vbnRhbnRfc2l0ZV9pbml0aWFsID0gbnVsbDtcclxuJChcImJvZHlcIikub24oJ2NsaWNrJyAsXCIubmV3X29wZXJhdGlvbl9idXR0b25cIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiY29tcHRlX2NhaXNzZV9uZXdcIiwge1wiZG9zc2llclwiOiBpZH0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb24gLnNwcjFcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb24gLmJvZDFcIikuaHRtbChyZXN1bHQpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIjbmV3X29wZXJhdGlvbiAjbW9udGFudF9zaXRlX2NhaXNzZVwiKS52YWwocmVzdWx0LmNvbXB0ZS5tb250YW50RmluYWwpXHJcbiAgICAgICAgICAgIC8vICQoXCIjbmV3X29wZXJhdGlvbiAjbW9udGFudF9jYWlzc2VfdG90YWxcIikudmFsKHJlc3VsdC5tb250YW50X2NhaXNzZV90b3RhbClcclxuICAgICAgICAgICAgLy8gJChcIiNuZXdfb3BlcmF0aW9uICNtb250YW50X2NhaXNzZV92aXJ0dWVsbGVcIikudmFsKHJlc3VsdC5jb21wdGVEb3NzaWVyQ291cmFudFZpcnR1ZWxsZS5tb250YW50RmluYWwpXHJcbiAgICAgICAgICAgIC8vICQoXCIjbmV3X29wZXJhdGlvbiAjbW9udGFudF9jYWlzc2VfY2Fpc3NlXCIpLnZhbChyZXN1bHQuY29tcHRlRG9zc2llckNvdXJhbnRQaHlzaXF1ZS5tb250YW50RmluYWwpXHJcbiAgICAgICAgICAgIC8vICQoXCIjbmV3X29wZXJhdGlvbiAjY29tcHRlQmFucXVlXCIpLmFwcGVuZChgPG9wdGlvbiB2YWx1ZT1cIiR7cmVzdWx0LmNvbXB0ZS5pZH1cIj4ke3Jlc3VsdC5jb21wdGUuZGVzaWduYXRpb259PC9vcHRpb24+YClcclxuICAgICAgICAgICAgLy8gJChcIiNuZXdfb3BlcmF0aW9uICNzaXRlXCIpLmFwcGVuZChgPG9wdGlvbiB2YWx1ZT1cIiR7cmVzdWx0LmRvc3NpZXIuaWR9XCI+JHtyZXN1bHQuZG9zc2llci5kZXNjcmlwdGlvbn08L29wdGlvbj5gKVxyXG4gICAgICAgICAgICAvLyAkKFwiI25ld19vcGVyYXRpb24gI2NjcFwiKS5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCIke3Jlc3VsdC5jb21wdGVEb3NzaWVyQ291cmFudFBoeXNpcXVlLmlkfVwiPiR7cmVzdWx0LmNvbXB0ZURvc3NpZXJDb3VyYW50UGh5c2lxdWUuZGVzaWduYXRpb259PC9vcHRpb24+YClcclxuXHJcblxyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb25cIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtb250YW50X2luaXRpYWwgPSBudWxsO1xyXG4gICAgICAgICAgICBtb250YW50X3NpdGVfaW5pdGlhbCA9IG51bGw7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNjcmVhdGVfY2Fpc3NlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCdib2R5ICNuZXdfY2Fpc3NlX29wZXJhdGlvbicpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIiNuZXdfY2Fpc3NlX29wZXJhdGlvblwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5IC5teS1idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJjb21wdGVfY2Fpc3NlX3N0b3JlXCIpLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQocmVzdWx0LmNvZGUpO1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuY29kZSA9PSA0MDMpe1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGU9MjAwKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGFsZXJ0KCByZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2NvbXB0ZV9jYWlzc2VfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgJChcIiNuZXdfb3BlcmF0aW9uIC5zcHIxXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbmV3X29wZXJhdGlvbiAuYm9kMVwiKS5lbXB0eSgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbmV3X29wZXJhdGlvblwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwia2V5dXBcIiwgXCIjdV9nZW5lcmFsX29wZXJhdGlvbl9tb250YW50XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgbW9udGFudCA9ICQodGhpcyk7XHJcbiAgICB2YXIgbW9udGFudF9jYWlzc2VfY2Fpc3NlID0gJCgnI21vbnRhbnRfY2Fpc3NlX2NhaXNzZScpO1xyXG4gICAgaWYobW9udGFudF9pbml0aWFsID09IG51bGwpIHtcclxuICAgICAgICBtb250YW50X2luaXRpYWwgPSBtb250YW50X2NhaXNzZV9jYWlzc2UudmFsKClcclxuICAgIH1cclxuICAgIGlmKG1vbnRhbnRfc2l0ZV9pbml0aWFsID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250YW50X3NpdGVfaW5pdGlhbCk7XHJcbiAgICAgICAgbW9udGFudF9zaXRlX2luaXRpYWwgPSArJChcIiNtb250YW50X3NpdGVfY2Fpc3NlXCIpLnZhbCgpXHJcbiAgICAgICAgY29uc29sZS5sb2cobW9udGFudF9zaXRlX2luaXRpYWwpO1xyXG4gICAgfVxyXG4gICAgaWYoKG1vbnRhbnRfaW5pdGlhbCAtIG1vbnRhbnQudmFsKCkpIDwgMCkge1xyXG4gICAgICAgIG1vbnRhbnQudmFsKFxyXG4gICAgICAgICAgICBtb250YW50X2luaXRpYWxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIG1vbnRhbnRfY2Fpc3NlX2NhaXNzZS52YWwoMClcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZvdXMgcGFzc2VyIGxlIG1vbnRhbnQgcXVlIHZvdXMgYXZlcyBkYW5zIGxhIGNhaXNzZSAhXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb250YW50X2NhaXNzZV9jYWlzc2UudmFsKG1vbnRhbnRfaW5pdGlhbCAtIG1vbnRhbnQudmFsKCkpO1xyXG4gICAgfSAgICBcclxuICAgIHRvdGFsQ2hhbmdlKClcclxufSlcclxuXHJcbmZ1bmN0aW9uIHRvdGFsQ2hhbmdlKCkge1xyXG4gICAgXHJcbiAgICB2YXIgbW9udGFudF9jYWlzc2VfY2Fpc3NlID0gJChcIiNtb250YW50X2NhaXNzZV9jYWlzc2VcIikudmFsKCk7XHJcbiAgICB2YXIgbW9udGFudF9jYWlzc2VfdmlydHVlbGxlID0gJChcIiNtb250YW50X2NhaXNzZV92aXJ0dWVsbGVcIikudmFsKCkgXHJcbiAgICAkKFwiI21vbnRhbnRfY2Fpc3NlX3RvdGFsXCIpLnZhbCgrbW9udGFudF9jYWlzc2VfY2Fpc3NlICsgK21vbnRhbnRfY2Fpc3NlX3ZpcnR1ZWxsZSlcclxuICAgIC8vICQoXCIjbW9udGFudF9jYWlzc2VfdG90YWxcIikudmFsKCttb250YW50X2NhaXNzZV9jYWlzc2UgKyArbW9udGFudF9jYWlzc2VfdmlydHVlbGxlKVxyXG4gICAgJChcIiNtb250YW50X3NpdGVfY2Fpc3NlXCIpLnZhbChtb250YW50X3NpdGVfaW5pdGlhbCArICskKFwiI3VfZ2VuZXJhbF9vcGVyYXRpb25fbW9udGFudFwiKS52YWwoKSApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9