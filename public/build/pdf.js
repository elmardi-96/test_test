(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pdf"],{

/***/ "./assets/js/components/pdf.js":
/*!*************************************!*\
  !*** ./assets/js/components/pdf.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);
__webpack_require__(/*! ./../../css/plugins/switchery/switchery.css */ "./assets/css/plugins/switchery/switchery.css");

//
//require('./../BsMultiSelect.min');

__webpack_require__(/*! ./../../js/plugins/switchery/switchery.js */ "./assets/js/plugins/switchery/switchery.js");
$(".select2_users").select2();

//$(".permission-select").each(function (index) {
//    $(this).addClass('permission-select' + index)
//   
//
//
//});

$(function () {
  //    $(".permission-select").each(function (index) {
  //        $(".permission-select" + index).dashboardCodeBsMultiSelect();
  //
  //
  //    });

  $('.chkToggle').bootstrapToggle();
  //update_pdf
  $('.update_pdf').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('config_pdf'),
      data: form.serialize(),
      success: function success(result) {
        location.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 200
        });
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/pdf.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f",14,"vendors~pdf",7,18]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wZGYuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIiQiLCJzZWxlY3QyIiwiYm9vdHN0cmFwVG9nZ2xlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJnZW5lcmF0ZSIsImRhdGEiLCJzZXJpYWxpemUiLCJzdWNjZXNzIiwicmVzdWx0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ0b2FzdHIiLCJtZXNzYWdlIiwidGV4dCIsInRpdGxlIiwidGltZU91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw2RUFBdUMsQ0FBQztBQUMyQztBQUMxR0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFOUJDLG1CQUFPLENBQUMsaUdBQTZDLENBQUM7O0FBRXREO0FBQ0E7O0FBRUFBLG1CQUFPLENBQUMsNkZBQTJDLENBQUM7QUFNcERHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7O0FBRzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUQsQ0FBQyxDQUFDLFlBQVk7RUFFZDtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUdBQSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNFLGVBQWUsRUFBRTtFQUNqQztFQUNBRixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUMsVUFBU0MsQ0FBQyxFQUFDO0lBQ3BDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQixJQUFJQyxJQUFJLEdBQUdOLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEJBLENBQUMsQ0FBQ08sSUFBSSxDQUFDO01BQ0hDLElBQUksRUFBRSxNQUFNO01BQ1pDLEdBQUcsRUFBRVgsa0hBQU8sQ0FBQ1ksUUFBUSxDQUFDLFlBQVksQ0FBQztNQUNuQ0MsSUFBSSxFQUFFTCxJQUFJLENBQUNNLFNBQVMsRUFBRTtNQUN0QkMsT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7UUFDdkJDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO1FBQ2pCQyxNQUFNLENBQUNKLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDSSxPQUFPLENBQUNDLElBQUksRUFBRUwsTUFBTSxDQUFDSSxPQUFPLENBQUNFLEtBQUssRUFBRTtVQUFDQyxPQUFPLEVBQUU7UUFBRyxDQUFDLENBQUM7TUFDN0U7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFFRixDQUFDLENBQUMsQyIsImZpbGUiOiJwZGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxucmVxdWlyZSgnLi8uLi8uLi9jc3MvcGx1Z2lucy9zd2l0Y2hlcnkvc3dpdGNoZXJ5LmNzcycpO1xyXG5cclxuLy9cclxuLy9yZXF1aXJlKCcuLy4uL0JzTXVsdGlTZWxlY3QubWluJyk7XHJcblxyXG5yZXF1aXJlKCcuLy4uLy4uL2pzL3BsdWdpbnMvc3dpdGNoZXJ5L3N3aXRjaGVyeS5qcycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoXCIuc2VsZWN0Ml91c2Vyc1wiKS5zZWxlY3QyKCk7XHJcblxyXG5cclxuLy8kKFwiLnBlcm1pc3Npb24tc2VsZWN0XCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbi8vICAgICQodGhpcykuYWRkQ2xhc3MoJ3Blcm1pc3Npb24tc2VsZWN0JyArIGluZGV4KVxyXG4vLyAgIFxyXG4vL1xyXG4vL1xyXG4vL30pO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4vLyAgICAkKFwiLnBlcm1pc3Npb24tc2VsZWN0XCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbi8vICAgICAgICAkKFwiLnBlcm1pc3Npb24tc2VsZWN0XCIgKyBpbmRleCkuZGFzaGJvYXJkQ29kZUJzTXVsdGlTZWxlY3QoKTtcclxuLy9cclxuLy9cclxuLy8gICAgfSk7XHJcblxyXG5cclxuJCgnLmNoa1RvZ2dsZScpLmJvb3RzdHJhcFRvZ2dsZSgpO1xyXG4vL3VwZGF0ZV9wZGZcclxuJCgnLnVwZGF0ZV9wZGYnKS5vbignc3VibWl0JyxmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnY29uZmlnX3BkZicpLFxyXG4gICAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiAyMDB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9