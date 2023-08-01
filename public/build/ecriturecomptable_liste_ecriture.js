(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecriturecomptable_liste_ecriture"],{

/***/ "./assets/js/components/ecriture_comptable/liste_ecriture.js":
/*!*******************************************************************!*\
  !*** ./assets/js/components/ecriture_comptable/liste_ecriture.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_8__);


var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");





_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.setRoutingData(routes);
global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
$("select").select2();
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate("ecriture_comptable_ecriture_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  columns: [{
    orderable: true,
    name: 'cab.id',
    width: "5%"
  }, {
    orderable: true,
    name: 'cab.typ',
    width: "8%"
  }, {
    orderable: true,
    name: 'cab.num ',
    width: "8%"
  }, {
    orderable: true,
    name: 'dossier.titre',
    width: "17%"
  }, {
    orderable: true,
    name: 'cab.duddat',
    width: "8%"
  }, {
    orderable: false,
    name: 'cab.desvcr',
    searchable: false,
    width: "17%"
  }, {
    orderable: true,
    name: 'cab.jou',
    width: "8%"
  }, {
    orderable: true,
    name: 'cab.fcz_montant_initial',
    width: "8%",
    className: 'td-number pd-fac'
  }, {
    orderable: false,
    name: 'cab.fcz_id_doc1asso',
    searchable: false,
    width: "2%"
  }, {
    orderable: false,
    name: 'cab.fcz_description_tier_piece',
    searchable: false,
    width: "2%"
  }, {
    orderable: false,
    name: 'cab.fcz_id_tier_piece',
    searchable: false,
    width: "2%"
  }, {
    orderable: true,
    name: '',
    width: "15%"
  }, {
    orderable: false,
    name: 'id',
    visible: false,
    searchable: false
  }],
  stateSave: false,
  bDestroy: true,
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate("datatables_langue"),
    processing: true
  }

  // fixedHeader: true,
});
// alert('test');

var selectedValue = $('input[name="inlineRadioOptions"]:checked').val();
$('input[name="options"][value="' + selectedValue + '"]').prop('checked', true);
$(".RadioOptions").on('change', function () {
  selectedValue = $(this).val();
  table.columns(12).search(selectedValue).draw();
});
$("#file").on('change', function () {
  var val = $(this).val();
  if (val) {
    $("#enregitrer_ecriture").prop('disabled', false);
  } else {
    $("#enregitrer_ecriture").prop('disabled', true);
  }
});
$('body').on('click', '.check', function () {
  if ($(".check").is(":checked")) {
    $("#valider_ecriture_comp").prop('disabled', false);
  } else {
    $("#valider_ecriture_comp").prop('disabled', true);
  }
});
$('body').on('click', '#valider_ecriture_comp', function () {
  var ecri_selecteds = [];
  $('input:checkbox[name=check_ecriture]:checked').each(function () {
    var checkboxId = $(this).attr('id');
    ecri_selecteds.push(checkboxId);
  });
  var data = new FormData();
  data.append('ecri_selecteds', JSON.stringify(ecri_selecteds));
  var l = ladda__WEBPACK_IMPORTED_MODULE_5__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('valedation_ecriture_comptable'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result == 'empty') {
        toastr.warning('Veuillez sélectionner au moins une ligne', 'Warning', {
          timeOut: 4000
        });
        l.stop();
      } else {
        toastr.success("Success", result, {
          timeOut: 4000
        });
        table.columns(12).search(selectedValue).draw();
        ecri_selecteds.length = 0;
        l.stop();
        $("#enregitrer_ecriture").prop('disabled', true);
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
      l.stop();
      toastr.warning(jqXHR.responseText, 'warning', {
        timeOut: 4000
      });
    }
  });
});
$('#Ecriture_import_form').on('submit', function (event) {
  event.preventDefault();
  var l = ladda__WEBPACK_IMPORTED_MODULE_5__["create"](document.activeElement);
  l.start();
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate("import_ecriture_comp"),
    method: "POST",
    data: new FormData(this),
    dataType: 'json',
    contentType: false,
    cache: false,
    processData: false,
    success: function success(result) {
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

},[["./assets/js/components/ecriture_comptable/liste_ecriture.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9lY3JpdHVyZV9jb21wdGFibGUvbGlzdGVfZWNyaXR1cmUuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImdsb2JhbCIsIiQiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInNlbGVjdDIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJsZW5ndGhNZW51IiwicGFnZUxlbmd0aCIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJuYW1lIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwiY2xhc3NOYW1lIiwidmlzaWJsZSIsInN0YXRlU2F2ZSIsImJEZXN0cm95IiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwic2VsZWN0ZWRWYWx1ZSIsInZhbCIsInByb3AiLCJvbiIsInNlYXJjaCIsImRyYXciLCJpcyIsImVjcmlfc2VsZWN0ZWRzIiwiZWFjaCIsImNoZWNrYm94SWQiLCJhdHRyIiwicHVzaCIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0Iiwic3RvcCIsImxlbmd0aCIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJyZXNwb25zZVRleHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWV0aG9k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dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanMnO1xyXG5yZXF1aXJlKCcuLi8uLi9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanMnKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSAndG9hc3RyJztcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG4kKFwic2VsZWN0XCIpLnNlbGVjdDIoKVxyXG5cclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gICAgXHJcbiAgICBhamF4OiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9lY3JpdHVyZV9saXN0XCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ2NhYi5pZCcgLCB3aWR0aDogXCI1JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ2NhYi50eXAnLCB3aWR0aDogXCI4JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ2NhYi5udW0gJywgd2lkdGg6IFwiOCVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgIG5hbWU6ICdkb3NzaWVyLnRpdHJlJywgd2lkdGg6IFwiMTclXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAnY2FiLmR1ZGRhdCcsIHdpZHRoOiBcIjglXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCAgbmFtZTogJ2NhYi5kZXN2Y3InLHNlYXJjaGFibGU6ZmFsc2UsIHdpZHRoOiBcIjE3JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ2NhYi5qb3UnLCB3aWR0aDogXCI4JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ2NhYi5mY3pfbW9udGFudF9pbml0aWFsJywgd2lkdGg6IFwiOCVcIiAsY2xhc3NOYW1lOiAndGQtbnVtYmVyIHBkLWZhYyd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCAgbmFtZTogJ2NhYi5mY3pfaWRfZG9jMWFzc28nLHNlYXJjaGFibGU6ZmFsc2UsICB3aWR0aDogXCIyJVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgIG5hbWU6ICdjYWIuZmN6X2Rlc2NyaXB0aW9uX3RpZXJfcGllY2UnLHNlYXJjaGFibGU6ZmFsc2UsIHdpZHRoOiBcIjIlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCAgbmFtZTogJ2NhYi5mY3pfaWRfdGllcl9waWVjZScsc2VhcmNoYWJsZTpmYWxzZSwgd2lkdGg6IFwiMiVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogdHJ1ZSwgIG5hbWU6ICcnLCB3aWR0aDogXCIxNSVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogZmFsc2UsIG5hbWU6ICdpZCcsIHZpc2libGU6IGZhbHNlLCBzZWFyY2hhYmxlOmZhbHNlfSxcclxuICAgICAgXHJcbiAgICBdLFxyXG4gICAgc3RhdGVTYXZlOiBmYWxzZSxcclxuICAgIGJEZXN0cm95OiB0cnVlLFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICB9KTtcclxuLy8gYWxlcnQoJ3Rlc3QnKTtcclxuXHJcbnZhciBzZWxlY3RlZFZhbHVlID0gJCgnaW5wdXRbbmFtZT1cImlubGluZVJhZGlvT3B0aW9uc1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiQoJ2lucHV0W25hbWU9XCJvcHRpb25zXCJdW3ZhbHVlPVwiJyArIHNlbGVjdGVkVmFsdWUgKyAnXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4kKFwiLlJhZGlvT3B0aW9uc1wiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgc2VsZWN0ZWRWYWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDEyKS5zZWFyY2goc2VsZWN0ZWRWYWx1ZSkuZHJhdygpO1xyXG5cclxufSlcclxuJChcIiNmaWxlXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgaWYodmFsKXtcclxuICAgICAgICAkKFwiI2VucmVnaXRyZXJfZWNyaXR1cmVcIikucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAkKFwiI2VucmVnaXRyZXJfZWNyaXR1cmVcIikucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbn0pXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gIFxyXG4gICAgaWYoJChcIi5jaGVja1wiKS5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAkKFwiI3ZhbGlkZXJfZWNyaXR1cmVfY29tcFwiKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoXCIjdmFsaWRlcl9lY3JpdHVyZV9jb21wXCIpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG59KVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI3ZhbGlkZXJfZWNyaXR1cmVfY29tcCcsZnVuY3Rpb24oKXtcclxuICAgIHZhciBlY3JpX3NlbGVjdGVkcyA9IFtdO1xyXG4gICAgJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1jaGVja19lY3JpdHVyZV06Y2hlY2tlZCcpLmVhY2goXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2hlY2tib3hJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICBlY3JpX3NlbGVjdGVkcy5wdXNoKGNoZWNrYm94SWQpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGRhdGEuYXBwZW5kKCdlY3JpX3NlbGVjdGVkcycsIEpTT04uc3RyaW5naWZ5KGVjcmlfc2VsZWN0ZWRzKSk7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuICBcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd2YWxlZGF0aW9uX2Vjcml0dXJlX2NvbXB0YWJsZScpLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PSAnZW1wdHknKSB7XHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgJ1ZldWlsbGV6IHPDqWxlY3Rpb25uZXIgYXUgbW9pbnMgdW5lIGxpZ25lJyxcclxuICAgICAgICAgICAgJ1dhcm5pbmcnLFxyXG4gICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vzc1wiLCByZXN1bHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMTIpLnNlYXJjaChzZWxlY3RlZFZhbHVlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGVjcmlfc2VsZWN0ZWRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXRyZXJfZWNyaXR1cmVcIikucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlVGV4dCwgJ3dhcm5pbmcnLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuIFxyXG59KVxyXG5cclxuJCgnI0Vjcml0dXJlX2ltcG9ydF9mb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImltcG9ydF9lY3JpdHVyZV9jb21wXCIpLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEZvcm1EYXRhKHRoaXMpLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vzc1wiLCByZXN1bHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGpxWEhSLnJlc3BvbnNlVGV4dCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9