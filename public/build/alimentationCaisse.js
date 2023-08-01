(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alimentationCaisse"],{

/***/ "./assets/js/components/module_gestion_caisse/alimentation.js":
/*!********************************************************************!*\
  !*** ./assets/js/components/module_gestion_caisse/alimentation.js ***!
  \********************************************************************/
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
var tr_alimentation_list_index = $('#grid_index').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('caisse_alimentation_index_list'),
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("caisse_alimentation_new", {
      "dossier": id
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      $("#new_operation .spr1").hide();
      $("#new_operation .bod1").html(result).show();
      $(".modal-title").text("Alimentation");
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
$("body").on('click', "#_transfer", function (e) {
  e.preventDefault();
  var id = $(this).attr('data-id');
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("caisse_alimentation_transfer", {
      "dossier": id
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      $("#new_operation .spr1").hide();
      $("#new_operation .bod1").html(result).show();
      $(".modal-title").text("Transfer");
      $("#new_operation").modal("show");
      $("select").select2();
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("caisse_alimentation_store"),
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
$("body").on("click", "#transfer_caisse", function (e) {
  var form_name = $(".form").attr("name");
  var formData = new FormData();
  var params = $('body #transfer_caisse_operation').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
  });
  var selector = $("#transfer_caisse_operation");
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector("body .my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate("caisse_alimentation_store_transfer"),
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

},[["./assets/js/components/module_gestion_caisse/alimentation.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfZ2VzdGlvbl9jYWlzc2UvYWxpbWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleCIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJwYWdlTGVuZ3RoIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwidGFibGUiLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmaXhlZEhlYWRlciIsIm9uIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiZGF0YSIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsIm1vbnRhbnRfaW5pdGlhbCIsIm1vbnRhbnRfc2l0ZV9pbml0aWFsIiwiaWQiLCJhdHRyIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaGlkZSIsImh0bWwiLCJzaG93IiwibW9kYWwiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwidG9hc3RyIiwidGltZU91dCIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0MiIsImZvcm1fbmFtZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwYXJhbXMiLCJzZXJpYWxpemVBcnJheSIsImVhY2giLCJpIiwidmFsIiwiYXBwZW5kIiwibmFtZSIsInZhbHVlIiwic2VsZWN0b3IiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydCIsInN0b3AiLCJjb2RlIiwid2FybmluZyIsIm1lc3NhZ2UiLCJ0aXRsZSIsImVycm9ycyIsIlNob3dGb3JtRXJyb3JzIiwiZW1wdHkiLCJtb250YW50IiwibW9udGFudF9jYWlzc2VfY2Fpc3NlIiwidG90YWxDaGFuZ2UiLCJtb250YW50X2NhaXNzZV92aXJ0dWVsbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3ZEO0FBQ3REQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDakI7QUFDdkM7QUFFakNDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBRzlCSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFLRixJQUFJQywwQkFBMEIsR0FBR1IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDUyxTQUFTLENBQUM7RUFDeERDLElBQUksRUFBRTtJQUNGQyxHQUFHLEVBQUVkLGtIQUFPLENBQUNlLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUFFO0lBQ3pEQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0QsYUFBYSxFQUFFLElBQUk7RUFDbkIsV0FBVyxFQUFFLEtBQUs7RUFDbEIsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxH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QXNCLENBQUMsQ0FBQ3NFLEdBQUcsRUFBRTtJQUN2RHJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixvQkFBb0IsQ0FBQztFQUNyQztFQUNBLElBQUlELGVBQWUsR0FBRytDLE9BQU8sQ0FBQ2xCLEdBQUcsRUFBRSxHQUFJLENBQUMsRUFBRTtJQUN0Q2tCLE9BQU8sQ0FBQ2xCLEdBQUcsQ0FDUDdCLGVBQWUsQ0FDZDtJQUNMZ0QscUJBQXFCLENBQUNuQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCWCxNQUFNLENBQUN1QixPQUFPLENBQUMsdURBQXVELEVBQUUsU0FBUyxFQUFFO01BQUN0QixPQUFPLEVBQUU7SUFBSSxDQUFDLENBQUM7RUFFdkcsQ0FBQyxNQUFNO0lBQ0g2QixxQkFBcUIsQ0FBQ25CLEdBQUcsQ0FBQzdCLGVBQWUsR0FBRytDLE9BQU8sQ0FBQ2xCLEdBQUcsRUFBRSxDQUFDO0VBQzlEO0VBQ0FvQixXQUFXLEVBQUU7QUFDakIsQ0FBQyxDQUFDO0FBRUYsU0FBU0EsV0FBVyxHQUFHO0VBRW5CLElBQUlELHFCQUFxQixHQUFHekYsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNzRSxHQUFHLEVBQUU7RUFDN0QsSUFBSXFCLHdCQUF3QixHQUFHM0YsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUNzRSxHQUFHLEVBQUU7RUFDbkV0RSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3NFLEdBQUcsQ0FBQyxDQUFDbUIscUJBQXFCLEdBQUcsQ0FBQ0Usd0JBQXdCLENBQUM7RUFDbEY7RUFDQTNGLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDc0UsR0FBRyxDQUFDNUIsb0JBQW9CLEdBQUcsQ0FBQzFDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDc0UsR0FBRyxFQUFFLENBQUU7QUFDbkcsQyIsImZpbGUiOiJhbGltZW50YXRpb25DYWlzc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICd0b2FzdHInO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuXHJcbnZhciB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleCA9ICQoJyNncmlkX2luZGV4JykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2NhaXNzZV9hbGltZW50YXRpb25faW5kZXhfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IGZhbHNlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAge1wic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMyVcIiwgXCJ0YXJnZXRzXCI6IFswXX0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiMjAlXCJ9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjIwJVwifSxcclxuICAgICAgICB7IFwid2lkdGhcIjogXCIyMCVcIixcImNsYXNzTmFtZVwiOlwidGV4dC1yaWdodFwifSxcclxuICAgICAgICB7XCJ3aWR0aFwiIDogXCIyMCVcIn0sXHJcbiAgICBdLFxyXG5cclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG50cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwgMywgNSAsNl0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFs0XSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbMl0sIFtdKTtcclxufSk7XHJcblxyXG5cclxubGV0IG1vbnRhbnRfaW5pdGlhbCA9IG51bGw7XHJcbmxldCBtb250YW50X3NpdGVfaW5pdGlhbCA9IG51bGw7XHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycgLFwiLm5ld19vcGVyYXRpb25fYnV0dG9uXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImNhaXNzZV9hbGltZW50YXRpb25fbmV3XCIsIHtcImRvc3NpZXJcIjogaWR9KSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgJChcIiNuZXdfb3BlcmF0aW9uIC5zcHIxXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiNuZXdfb3BlcmF0aW9uIC5ib2QxXCIpLmh0bWwocmVzdWx0KS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLXRpdGxlXCIpLnRleHQoXCJBbGltZW50YXRpb25cIilcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICQoXCIjbmV3X29wZXJhdGlvblwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1vbnRhbnRfaW5pdGlhbCA9IG51bGw7XHJcbiAgICAgICAgICAgIG1vbnRhbnRfc2l0ZV9pbml0aWFsID0gbnVsbDtcclxuICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuJChcImJvZHlcIikub24oJ2NsaWNrJyAsXCIjX3RyYW5zZmVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImNhaXNzZV9hbGltZW50YXRpb25fdHJhbnNmZXJcIiwge1wiZG9zc2llclwiOiBpZH0pLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb24gLnNwcjFcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb24gLmJvZDFcIikuaHRtbChyZXN1bHQpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtdGl0bGVcIikudGV4dChcIlRyYW5zZmVyXCIpXHJcblxyXG4gICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb25cIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtb250YW50X2luaXRpYWwgPSBudWxsO1xyXG4gICAgICAgICAgICBtb250YW50X3NpdGVfaW5pdGlhbCA9IG51bGw7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNjcmVhdGVfY2Fpc3NlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCdib2R5ICNuZXdfY2Fpc3NlX29wZXJhdGlvbicpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIiNuZXdfY2Fpc3NlX29wZXJhdGlvblwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5IC5teS1idXR0b25cIikpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJjYWlzc2VfYWxpbWVudGF0aW9uX3N0b3JlXCIpLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQocmVzdWx0LmNvZGUpO1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuY29kZSA9PSA0MDMpe1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGU9MjAwKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGFsZXJ0KCByZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2NvbXB0ZV9jYWlzc2VfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgJChcIiNuZXdfb3BlcmF0aW9uIC5zcHIxXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbmV3X29wZXJhdGlvbiAuYm9kMVwiKS5lbXB0eSgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbmV3X29wZXJhdGlvblwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI3RyYW5zZmVyX2NhaXNzZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQoXCIuZm9ybVwiKS5hdHRyKFwibmFtZVwiKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgcGFyYW1zID0gJCgnYm9keSAjdHJhbnNmZXJfY2Fpc3NlX29wZXJhdGlvbicpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIiN0cmFuc2Zlcl9jYWlzc2Vfb3BlcmF0aW9uXCIpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgLm15LWJ1dHRvblwiKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImNhaXNzZV9hbGltZW50YXRpb25fc3RvcmVfdHJhbnNmZXJcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChyZXN1bHQuY29kZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5jb2RlID09IDQwMyl7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZT0yMDApIHtcclxuICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnY29tcHRlX2NhaXNzZV9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAkKFwiI25ld19vcGVyYXRpb24gLnNwcjFcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNuZXdfb3BlcmF0aW9uIC5ib2QxXCIpLmVtcHR5KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNuZXdfb3BlcmF0aW9uXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJrZXl1cFwiLCBcIiN1X2dlbmVyYWxfb3BlcmF0aW9uX21vbnRhbnRcIiwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBtb250YW50ID0gJCh0aGlzKTtcclxuICAgIHZhciBtb250YW50X2NhaXNzZV9jYWlzc2UgPSAkKCcjbW9udGFudF9jYWlzc2VfY2Fpc3NlJyk7XHJcbiAgICBpZihtb250YW50X2luaXRpYWwgPT0gbnVsbCkge1xyXG4gICAgICAgIG1vbnRhbnRfaW5pdGlhbCA9IG1vbnRhbnRfY2Fpc3NlX2NhaXNzZS52YWwoKVxyXG4gICAgfVxyXG4gICAgaWYobW9udGFudF9zaXRlX2luaXRpYWwgPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vbnRhbnRfc2l0ZV9pbml0aWFsKTtcclxuICAgICAgICBtb250YW50X3NpdGVfaW5pdGlhbCA9ICskKFwiI21vbnRhbnRfc2l0ZV9jYWlzc2VcIikudmFsKClcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250YW50X3NpdGVfaW5pdGlhbCk7XHJcbiAgICB9XHJcbiAgICBpZigobW9udGFudF9pbml0aWFsIC0gbW9udGFudC52YWwoKSkgPCAwKSB7XHJcbiAgICAgICAgbW9udGFudC52YWwoXHJcbiAgICAgICAgICAgIG1vbnRhbnRfaW5pdGlhbFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgbW9udGFudF9jYWlzc2VfY2Fpc3NlLnZhbCgwKVxyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVm91cyBwYXNzZXIgbGUgbW9udGFudCBxdWUgdm91cyBhdmVzIGRhbnMgbGEgY2Fpc3NlICFcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vbnRhbnRfY2Fpc3NlX2NhaXNzZS52YWwobW9udGFudF9pbml0aWFsIC0gbW9udGFudC52YWwoKSk7XHJcbiAgICB9ICAgIFxyXG4gICAgdG90YWxDaGFuZ2UoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gdG90YWxDaGFuZ2UoKSB7XHJcbiAgICBcclxuICAgIHZhciBtb250YW50X2NhaXNzZV9jYWlzc2UgPSAkKFwiI21vbnRhbnRfY2Fpc3NlX2NhaXNzZVwiKS52YWwoKTtcclxuICAgIHZhciBtb250YW50X2NhaXNzZV92aXJ0dWVsbGUgPSAkKFwiI21vbnRhbnRfY2Fpc3NlX3ZpcnR1ZWxsZVwiKS52YWwoKSBcclxuICAgICQoXCIjbW9udGFudF9jYWlzc2VfdG90YWxcIikudmFsKCttb250YW50X2NhaXNzZV9jYWlzc2UgKyArbW9udGFudF9jYWlzc2VfdmlydHVlbGxlKVxyXG4gICAgLy8gJChcIiNtb250YW50X2NhaXNzZV90b3RhbFwiKS52YWwoK21vbnRhbnRfY2Fpc3NlX2NhaXNzZSArICttb250YW50X2NhaXNzZV92aXJ0dWVsbGUpXHJcbiAgICAkKFwiI21vbnRhbnRfc2l0ZV9jYWlzc2VcIikudmFsKG1vbnRhbnRfc2l0ZV9pbml0aWFsICsgKyQoXCIjdV9nZW5lcmFsX29wZXJhdGlvbl9tb250YW50XCIpLnZhbCgpIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=