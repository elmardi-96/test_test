(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operation"],{

/***/ "./assets/js/components/tresorerie/operation.js":
/*!******************************************************!*\
  !*** ./assets/js/components/tresorerie/operation.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");

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

//var l = Ladda.create(document.querySelector('.my-button'));
var table2 = $('#grid2').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('operation_client_list'),
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
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  "columns": [{
    "orderable": true,
    "searchable": true,
    "width": "1px",
    "targets": [0]
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": true,
    "width": "10px",
    "targets": 0
  }],
  "order": [[0, "desc"]],
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
var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('operation_fournisseur_list'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  "columns": [{
    "orderable": false,
    "searchable": true,
    "width": "1px",
    "targets": [0]
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }],
  "order": [[0, "desc"]],
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
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_5__["CustomSearchText"](api, [1, 2, 5, 9], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_5__["CustomSearchDate"](api, [4, 8, 10], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_5__["CustomSearchSelect"](api, [3, 6, 7], []);
  //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

$("#allactions").change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $(".action").prop("checked", true);
    $("#valid").css("display", "block");
  } else {
    $(".action").prop("checked", false);
    $("#valid").css("display", "none");
  }
  e.preventDefault();
});
$('body').on('change', '.action', function () {
  $("#valid").css("display", "block");
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('t_r_comptes_edit', {
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
console.log($('.form-errors').text());
if ($('.form-errors').text() != '') {
  toastr.error("erreur", $('.form-errors').text(), {
    timeOut: 4000
  });
}
$("#valid").change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize()
    var t = dta.get("_action[]");
    // alert(dta.get("_action[]"));
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    // var t=1;
    if (t) {
      $.ajax({
        type: 'POST',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('operation_fournisseur_valider_multiple'),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          //console.log(result);
          if (result.code == 403) {
            toastr.warning(result.message.text, result.message.title, {
              timeOut: 4000
            });
          } else {
            $(".bod").html(result).hide();
            $("#ModalDocumentDynamique").modal("show");
            setTimeout(function () {
              $(".spr").hide();
              $(".bod").fadeIn();
            }, 600);
            // table2.ajax.reload();
            //toastr.success(result.message.text, result.message.title, {timeOut: 4000})
            $("#valid").css("display", "none");
            // $(".action").prop("checked", false);
            // $("#allactions").prop("checked", false);
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
  }
  e.preventDefault();
});
$(".bod").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector(".button-save-charge"));
  var _goto = 0;
  // alert();
  l.start();
  //  var id = $("#test").data("serviceId");
  var obj = new Object();
  obj["route"] = "operation_fournisseur_valider_multiple";
  obj["data"] = dta;
  obj["parametre"] = null;
  obj["l"] = l;
  obj["form_name"] = form_name;
  obj["selector"] = selector;
  obj["reloadTable"] = true;
  obj["modal"] = true;
  obj["hideModule"] = true;
  obj["nomModal"] = "ModalDocumentDynamique";
  obj["table"] = table;
  obj["autoTrigger"] = _goto;
  obj["triggerClass"] = "add";
  obj["ShowFormErrors"] = _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"];
  _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_6__["autoAjaxRenderController"](obj);
  $("#valid").css("display", "none");
  e.preventDefault();
});

//$('body').on('change', '.paiement', function (e) {

$("#tr_charge_modepaiement").change(function (e) {
  // alert();

  e.preventDefault();

  //  console.log($(this).val());
});

$('body').on('change', '.paiement', function () {
  //alert($(this).val());
  if ($(this).val() == 2) {
    $('.bloc_cheque').show();
  } else {
    $('.bloc_cheque').hide();
  }
  // $("#valid").css("display", "block");
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/tresorerie/operation.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL29wZXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUyIiwiRGF0YVRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwidHlwZSIsImJlZm9yZVNlbmQiLCJ0YWJsZSIsImhhc093blByb3BlcnR5Iiwic2V0dGluZ3MiLCJqcVhIUiIsImFib3J0IiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJvbiIsImFwaSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiY2hhbmdlIiwiY2hlY2tlZCIsInByb3AiLCJjc3MiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJhdHRyIiwiaHJlZiIsImpRdWVyeSIsImVhY2giLCJpIiwidmFsIiwiY29uc29sZSIsImxvZyIsInRvYXN0ciIsInN1Y2Nlc3MiLCJ0aW1lT3V0Iiwid2FybmluZyIsImVycm9yIiwiZm9ybV9uYW1lIiwiZHRhIiwiRm9ybURhdGEiLCJhY3Rpb25fdGVzdCIsInQiLCJnZXQiLCJzZWxlY3RvciIsInNwbGl0IiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInJlc3VsdCIsImNvZGUiLCJtZXNzYWdlIiwidGl0bGUiLCJodG1sIiwiaGlkZSIsIm1vZGFsIiwic2V0VGltZW91dCIsImZhZGVJbiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdvdG8iLCJzdGFydCIsIm9iaiIsIk9iamVjdCIsIlNob3dGb3JtRXJyb3JzIiwiYXV0b0Z1bmN0aW9uQWpheCIsInNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUN2RDtBQUN0REEsbUJBQU8sQ0FBQywwR0FBK0MsQ0FBQztBQUNTO0FBQ2xDO0FBQzBEO0FBQ2pCO0FBRXhFQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUc5QkksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFFWixJQUFNQyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNTSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEQyxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBSUMsTUFBTSxHQUFHUixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNTLFNBQVMsQ0FBQztFQUMvQkMsSUFBSSxFQUFFO0lBQ0ZDLEdBQUcsRUFBRWQsa0hBQU8sQ0FBQ2UsUUFBUSxDQUFDLHVCQUF1QixDQUFDO0lBQUU7SUFDaERDLElBQUksRUFBRSxLQUFLO0lBQ1hDLFVBQVUsRUFBRSxzQkFBVztNQUNuQixJQUFJQyxLQUFLLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNsQyxJQUFJQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO1FBQy9CLElBQUlBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxFQUFFO1VBQ25CRCxRQUFR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QixXQUFXLEVBQUUsSUFBSTtFQUNqQixZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBRXRFLFNBQVMsRUFBRSxDQUNQO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxZQUFZLEVBQUUsSUFBSTtJQUFFLE9BQU8sRUFBRSxLQUFLO0lBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztFQUFFLENBQUMsRUFDMUU7SUFBRSxXQUFXLEVBQUUsS0FBSztJQUFFLE9BQU8sRUFBRSxNQUFNO0lBQUUsU0FBUyxFQUFFO0VBQUUsQ0FBQyxFQUNyRDtJQUFFLFdBQVcsRUFBRSxLQUFLO0lBQUUsT0FBTyxFQUFFLE1BQU07SUFBRSxTQUFTLEVBQUU7RUFBRSxDQUFDLEVBQ3JEO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxPQUFPLEVBQUUsTUFBTTtJQUFFLFNBQVMsRUFBRTtFQUFFLENBQUMsRUFDckQ7SUFBRSxXQUFXLEVBQUUsS0FBSztJQUFFLE9BQU8sRUFBRSxNQUFNO0lBQUUsU0FBUyxFQUFFO0VBQUUsQ0FBQyxFQUNyRDtJQUFFLFdBQVcsRUFBRSxLQUFLO0lBQUUsT0FBTyxFQUFFLE1BQU07SUFBRSxTQUFTLEVBQUU7RUFBRSxDQUFDLEVBQ3JEO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxPQUFPLEVBQUUsTUFBTTtJQUFFLFNBQVMsRUFBRTtFQUFFLENBQUMsRUFFckQ7SUFBRSxXQUFXLEVBQUUsS0FBSztJQUFFLE9BQU8sRUFBRSxNQUFNO0lBQUUsU0FBUyxFQUFFO0VBQUUsQ0FBQyxFQUVyRDtJQUFFLFdBQVcsRUFBRSxLQUFLO0lBQUUsT0FBTyxFQUFFLE1BQU07SUFBRSxTQUFTLEVBQUU7RUFBRSxDQUFDLEVBQ3JEO0lBQUUsV0FBVyxFQUFFLEtBQUs7SUFBRSxPQUFPLEVB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bnQiOlsiXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzJztcclxucmVxdWlyZSgnLi4vLi4vcGx1Z2lucy92YWxpZGF0ZS9qcXVlcnkudmFsaWRhdGUubWluLmpzJyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gJy4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzJztcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG4vL3ZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1idXR0b24nKSk7XHJcbnZhciB0YWJsZTIgPSAkKCcjZ3JpZDInKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnb3BlcmF0aW9uX2NsaWVudF9saXN0JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJsZS5oYXNPd25Qcm9wZXJ0eSgnc2V0dGluZ3MnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gdGFibGUuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdXSxcclxuXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG5cclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcblxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcblxyXG5cclxuICAgIF0sXHJcbiAgICBcIm9yZGVyXCI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG52YXIgdGFibGUgPSAkKCcjZ3JpZCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdvcGVyYXRpb25fZm91cm5pc3NldXJfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLCBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXV0sXHJcblxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcblxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcblxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG5cclxuXHJcblxyXG4gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsIDIsIDUsOV0sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgWzQsIDgsMTBdLCBbXSk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzMsIDYsIDcsXSwgW10pO1xyXG4gICAgLy8gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG4kKFwiI2FsbGFjdGlvbnNcIikuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyQoJyNhbGxhY3Rpb25zJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAkKFwiLmFjdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAkKFwiI3ZhbGlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5hY3Rpb25cIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICQoXCIjdmFsaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5hY3Rpb24nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG59KTtcclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAnLmNkX29wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3Rfcl9jb21wdGVzX2VkaXQnLCB7ICdpZCc6ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpIH0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkuZWFjaCgkKCcudG9hc3RyLW1zZycpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vlc1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG59KTtcclxualF1ZXJ5LmVhY2goJCgnLmZvcm0tZXJyb3JzIGxpJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxufSk7XHJcbi8qY2hlY2sgdGhlIGZvcm0gZXJyb3JzKi9cclxuY29uc29sZS5sb2coJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpKTtcclxuaWYgKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSAhPSAnJykge1xyXG4gICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQoJy5mb3JtLWVycm9ycycpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbn1cclxuXHJcblxyXG4kKFwiI3ZhbGlkXCIpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gIGFsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gICAgLy8kKFwiZm9ybVwiKS5zdWJtaXQoKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID09IDEpIHtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1fbmFtZSA9ICQoJyNhY3Rpb25fdGVzdCcpLmF0dHIoJ25hbWUnKTtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKGFjdGlvbl90ZXN0KTtcclxuICAgICAgICAvL3ZhciBkdGEgPSAkKCcjYWN0aW9uX3Rlc3QnKS5zZXJpYWxpemUoKVxyXG4gICAgICAgIHZhciB0ID0gZHRhLmdldChcIl9hY3Rpb25bXVwiKTtcclxuICAgICAgICAvLyBhbGVydChkdGEuZ2V0KFwiX2FjdGlvbltdXCIpKTtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgIC8vIHZhciB0PTE7XHJcbiAgICAgICAgaWYgKHQpIHtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ29wZXJhdGlvbl9mb3Vybmlzc2V1cl92YWxpZGVyX211bHRpcGxlJyksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0YWJsZTIuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3ZhbGlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vICQoXCIuYWN0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyAkKFwiI2FsbGFjdGlvbnNcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJChcIi5ib2RcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1zYXZlLWNoYXJnZVwiKSk7XHJcbiAgICB2YXIgZ290byA9IDA7XHJcbiAgICAvLyBhbGVydCgpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgLy8gIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwic2VydmljZUlkXCIpO1xyXG4gICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG9ialtcInJvdXRlXCJdID0gXCJvcGVyYXRpb25fZm91cm5pc3NldXJfdmFsaWRlcl9tdWx0aXBsZVwiO1xyXG4gICAgb2JqW1wiZGF0YVwiXSA9IGR0YTtcclxuICAgIG9ialtcInBhcmFtZXRyZVwiXSA9IG51bGw7XHJcbiAgICBvYmpbXCJsXCJdID0gbDtcclxuICAgIG9ialtcImZvcm1fbmFtZVwiXSA9IGZvcm1fbmFtZTtcclxuICAgIG9ialtcInNlbGVjdG9yXCJdID0gc2VsZWN0b3I7XHJcbiAgICBvYmpbXCJyZWxvYWRUYWJsZVwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgICBvYmpbXCJoaWRlTW9kdWxlXCJdID0gdHJ1ZTtcclxuICAgIG9ialtcIm5vbU1vZGFsXCJdID0gXCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCI7XHJcbiAgICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gICAgb2JqW1wiYXV0b1RyaWdnZXJcIl0gPSBnb3RvO1xyXG4gICAgb2JqW1widHJpZ2dlckNsYXNzXCJdID0gXCJhZGRcIjtcclxuICAgIG9ialtcIlNob3dGb3JtRXJyb3JzXCJdID0gU2hvd0Zvcm1FcnJvcnM7XHJcbiAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4UmVuZGVyQ29udHJvbGxlcihvYmopO1xyXG4gICAgJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8kKCdib2R5Jykub24oJ2NoYW5nZScsICcucGFpZW1lbnQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuJChcIiN0cl9jaGFyZ2VfbW9kZXBhaWVtZW50XCIpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xyXG4gICAvLyBhbGVydCgpO1xyXG5cclxuICAgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgIC8vICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKTtcclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5wYWllbWVudCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAyKSB7XHJcbiAgICAgICAgJCgnLmJsb2NfY2hlcXVlJykuc2hvdygpO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuYmxvY19jaGVxdWUnKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgIC8vICQoXCIjdmFsaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==