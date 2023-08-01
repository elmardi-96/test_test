(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecriturecomptable_suivi"],{

/***/ "./assets/js/components/ecriture_comptable/suivi.js":
/*!**********************************************************!*\
  !*** ./assets/js/components/ecriture_comptable/suivi.js ***!
  \**********************************************************/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate("ecriture_comptable_suivi_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
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
  stateSave: true,
  bDestroy: true,
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});
// alert('test');

$("#tableselected").on('change', function () {
  var val = $(this).val();
  table.columns(12).search(val).draw();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/components/ecriture_comptable/suivi.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9lY3JpdHVyZV9jb21wdGFibGUvc3VpdmkuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImdsb2JhbCIsIiQiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInNlbGVjdDIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJsZW5ndGhNZW51IiwicGFnZUxlbmd0aCIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJuYW1lIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwiY2xhc3NOYW1lIiwidmlzaWJsZSIsInN0YXRlU2F2ZSIsImJEZXN0cm95IiwibGFuZ3VhZ2UiLCJwcm9jZXNzaW5nIiwib24iLCJ2YWwiLCJzZWFyY2giLCJkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUN2RDtBQUN0REEsbUJBQU8sQ0FBQywwR0FBK0MsQ0FBQztBQUNTO0FBQ2xDO0FBQzBEO0FBQ2pCO0FBQ3ZDO0FBRWpDQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUc5QkksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFFWixJQUFNQyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNTSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFD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RSxZQUFXO0VBQ3hDLElBQUlDLEdBQUcsR0FBRy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytCLEdBQUcsRUFBRTtFQUV2QnRCLEtBQUssQ0FBQ1UsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDYSxNQUFNLENBQUNELEdBQUcsQ0FBQyxDQUFDRSxJQUFJLEVBQUU7QUFFeEMsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiZWNyaXR1cmVjb21wdGFibGVfc3VpdmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICd0b2FzdHInO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbiQoXCJzZWxlY3RcIikuc2VsZWN0MigpXHJcblxyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVjcml0dXJlX2NvbXB0YWJsZV9zdWl2aV9saXN0XCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBwYWdlTGVuZ3RoOiAxNSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ3BpZWNlLmlkJyAsIHdpZHRoOiBcIjUlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UuY29kZScsIHdpZHRoOiBcIjglXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UucGFydGVuYWlyZScsIHdpZHRoOiBcIjglXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UuZG9zc2llcicsIHdpZHRoOiBcIjE3JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ3BpZWNlLmRhdGUnLCB3aWR0aDogXCI4JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgIG5hbWU6ICdwaWVjZS5vYnNlcnZhdGlvbl9vcGVyYXRpb24nLHNlYXJjaGFibGU6ZmFsc2UsIHdpZHRoOiBcIjE3JVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCAgbmFtZTogJ3BpZWNlLmJyZCcsIHdpZHRoOiBcIjglXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UubW9udGFudCcsIHdpZHRoOiBcIjglXCIgLGNsYXNzTmFtZTogJ3RkLW51bWJlciBwZC1mYWMnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgIG5hbWU6ICdwaWVjZS5wcmVjb21wdGFibGlzZXInLHNlYXJjaGFibGU6ZmFsc2UsICB3aWR0aDogXCIyJVwifSxcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgIG5hbWU6ICdwaWVjZS52YWxpZGUnLHNlYXJjaGFibGU6ZmFsc2UsIHdpZHRoOiBcIjIlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCAgbmFtZTogJ3BpZWNlLnJlamV0ZXInLHNlYXJjaGFibGU6ZmFsc2UsIHdpZHRoOiBcIjIlXCJ9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsICBuYW1lOiAncGllY2UubW90aWYnLCB3aWR0aDogXCIxNSVcIn0sXHJcbiAgICAgICAge29yZGVyYWJsZTogZmFsc2UsIG5hbWU6ICdwaWVjZS5pZCcsIHZpc2libGU6IGZhbHNlLCBzZWFyY2hhYmxlOmZhbHNlfSxcclxuICAgICAgXHJcbiAgICBdLFxyXG4gICAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gICAgYkRlc3Ryb3k6IHRydWUsXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICB9KTtcclxuLy8gYWxlcnQoJ3Rlc3QnKTtcclxuXHJcblxyXG4kKFwiI3RhYmxlc2VsZWN0ZWRcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgdGFibGUuY29sdW1ucygxMikuc2VhcmNoKHZhbCkuZHJhdygpO1xyXG5cclxufSlcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=