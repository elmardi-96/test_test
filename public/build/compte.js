(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compte"],{

/***/ "./assets/js/components/tresorerie/compte.js":
/*!***************************************************!*\
  !*** ./assets/js/components/tresorerie/compte.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);
global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});

// test
// alert('test');

// $(".test").click(function (e) {
//     // alert('test');
//     console.log('est');

//     $.ajax({
//         type: 'get',
//         url: Routing.generate('tr_compte_list_index'),
//         processData: false,
//         contentType: false,
//         success: function (result) {
//             alert('test');
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             toastr.error("Erreur", errorThrown, {timeOut: 4000})
//         }
//     });
// });

// $.ajax({
//     type: 'get',
//     url: Routing.generate('tr_compte_list_index'),
//     data: dta,
//     processData: false,
//     contentType: false,
//     success: function (result) {
//         alert('test');
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//         toastr.error("Erreur", errorThrown, {timeOut: 4000})
//     }
// });

var tr_compte_list_index = $('#tt_compte_table').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('tr_compte_list_index'),
    // json datasource
    type: "get"
  },
  "serverSide": true,
  "scrollX": true,
  "deferRender": true,
  "stateSave": false,
  "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "searchable": true,
    "width": "3%",
    "targets": [0]
  }, {
    "width": "30%"
  }, {
    "width": "12%"
  }, {
    "width": "30%"
  }, {
    "width": "12%"
  }, {
    "width": "12%"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
tr_compte_list_index.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_4__["CustomSearchText"](api, [1, 3, 5, 6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_4__["CustomSearchDate"](api, [4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_4__["CustomSearchSelect"](api, [2], []);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/components/tresorerie/compte.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL2NvbXB0ZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidHJfY29tcHRlX2xpc3RfaW5kZXgiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwidGFibGUiLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmaXhlZEhlYWRlciIsIm9uIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiZGF0YSIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDdkQ7QUFDdERBLG1CQUFPLENBQUMsMEdBQStDLENBQUM7QUFDUztBQUNsQztBQUMwRDtBQUNqQjtBQUV4RUMsa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFHOUJJLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0FBRVosSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7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aWxlIjoiY29tcHRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzJztcclxucmVxdWlyZSgnLi4vLi4vcGx1Z2lucy92YWxpZGF0ZS9qcXVlcnkudmFsaWRhdGUubWluLmpzJyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gJy4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzJztcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG4vLyB0ZXN0XHJcbi8vIGFsZXJ0KCd0ZXN0Jyk7XHJcblxyXG4vLyAkKFwiLnRlc3RcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZXN0Jyk7XHJcbiAgICBcclxuICAgIFxyXG4vLyAgICAgJC5hamF4KHtcclxuLy8gICAgICAgICB0eXBlOiAnZ2V0JyxcclxuLy8gICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NvbXB0ZV9saXN0X2luZGV4JyksXHJcbi8vICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4vLyAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgIGFsZXJ0KCd0ZXN0Jyk7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4vLyAkLmFqYXgoe1xyXG4vLyAgICAgdHlwZTogJ2dldCcsXHJcbi8vICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX2NvbXB0ZV9saXN0X2luZGV4JyksXHJcbi8vICAgICBkYXRhOiBkdGEsXHJcbi8vICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbi8vICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbi8vICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgYWxlcnQoJ3Rlc3QnKTtcclxuLy8gICAgIH0sXHJcbi8vICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4vLyAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcblxyXG5cclxudmFyIHRyX2NvbXB0ZV9saXN0X2luZGV4ID0gJCgnI3R0X2NvbXB0ZV90YWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jb21wdGVfbGlzdF9pbmRleCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwic2VydmVyU2lkZVwiOiB0cnVlLFxyXG4gICAgXCJzY3JvbGxYXCI6IHRydWUsIFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogZmFsc2UsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuICAgIFwicGFnZUxlbmd0aFwiOiAxNSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAge1wic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMyVcIiwgXCJ0YXJnZXRzXCI6IFswXX0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiMzAlXCJ9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjEyJVwifSxcclxuICAgICAgICB7IFwid2lkdGhcIjogXCIzMCVcIn0sXHJcbiAgICAgICAge1wid2lkdGhcIiA6IFwiMTIlXCJ9LFxyXG4gICAgICAgIHtcIndpZHRoXCIgOiBcIjEyJVwifSxcclxuICAgICAgXHJcbiAgICBdLFxyXG5cclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG50cl9jb21wdGVfbGlzdF9pbmRleC5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLCAzLCA1ICw2XSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbNF0sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbMl0sIFtdKTtcclxuICB9KTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9