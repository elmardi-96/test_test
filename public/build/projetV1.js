(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projetV1"],{

/***/ "./assets/js/ManagementErrors/index.js":
/*!*********************************************!*\
  !*** ./assets/js/ManagementErrors/index.js ***!
  \*********************************************/
/*! exports provided: ShowFormErrors, ShowFormErrorsWithParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrors", function() { return ShowFormErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrorsWithParam", function() { return ShowFormErrorsWithParam; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__);








var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function ShowFormErrors(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  jQuery.each(errors.violations, function (i, val) {
    var columnName = "";
    var x = val.propertyPath;
    if (isGroupe == true) {
      columnName = x;
    } else {
      if (x.search('\\[') != -1 && x.search('\\]') != -1) {
        var separators = ['\\]', '\\['];
        var arr = x.split(new RegExp(separators.join('|')));
        var columnName = arr[1];
      }
      if (x.search('data.') != -1) {
        var arr = x.split('.');
        var columnName = arr[1];
      }
    }
    //console.log(x)

    /*vérifier s'il s'agit d'une formulaire avec un champ type file */
    if (!jQuery("#" + form_name + "_" + columnName).length > 0) {
      columnName = columnName + '_file';
    }
    if (id) {
      columnName = id;
    }
    console.log(columnName);
    if (columnName != "") {
      console.log("#" + form_name + "_" + columnName);
      selector.find("#" + form_name + "_" + columnName).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
    }
  });
}
function ShowFormErrorsWithParam(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  $("#" + selector).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors + "</span></span></span>");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/components/module_archive_V1/projet/projet.js":
/*!*****************************************************************!*\
  !*** ./assets/js/components/module_archive_V1/projet/projet.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
var routes = __webpack_require__(/*! ../../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);


var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
$('.new').on('submit', '.form', function (e) {
  e.preventDefault();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_2__["create"](document.querySelector('.my-button'));
  //alert();
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_achive_V1_projet_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      $('.errors-list').remove();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_1__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('module_archive_V1_projet_index');
        window.location.href = url;
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/module_archive_V1/projet/projet.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYXJjaGl2ZV9WMS9wcm9qZXQvcHJvamV0LmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsIlNob3dGb3JtRXJyb3JzIiwic2VsZWN0b3IiLCJmb3JtX25hbWUiLCJlcnJvcnMiLCJpZCIsImlzR3JvdXBlIiwiJCIsInJlbW92ZSIsImpRdWVyeSIsImVhY2giLCJ2aW9sYXRpb25zIiwiaSIsInZhbCIsImNvbHVtbk5hbWUiLCJ4IiwicHJvcGVydHlQYXRoIiwic2VhcmNoIiwic2VwYXJhdG9ycyIsImFyciIsInNwbGl0IiwiUmVnRXhwIiwiam9pbiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwicGFyZW50IiwiYXBwZW5kIiwidGl0bGUiLCJTaG93Rm9ybUVycm9yc1dpdGhQYXJhbSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXR0ciIsImR0YSIsIkZvcm1EYXRhIiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnQiLCJhamF4IiwidHlwZSIsInVybCIsImdlbmVyYXRlIiwiZGF0YSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic3RvcCIsImVtcHR5IiwidG9hc3RyIiwid2FybmluZyIsIm1lc3NhZ2UiLCJ0ZXh0IiwidGltZU91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJv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SyxFQUFFLGVBQVVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7TUFDN0MzQixDQUFDLENBQUNjLElBQUksRUFBRTtNQUNSRSxNQUFNLENBQUNRLEtBQUssQ0FBQyxRQUFRLEVBQUVHLFdBQVcsRUFBRTtRQUFDUCxPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7SUFDeEQ7RUFDSixDQUFDLENBQUM7QUFFTixDQUFDLENBQUMsQyIsImZpbGUiOiJwcm9qZXRWMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG4gICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICBqUXVlcnkuZWFjaChlcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gXCJcIjtcclxuICAgICAgICB2YXIgeCA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgaWYoaXNHcm91cGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSB4O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnXFxcXFsnKSAhPSAtMSAmJiB4LnNlYXJjaCgnXFxcXF0nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ycyA9IFsnXFxcXF0nLCAnXFxcXFsnXTtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oJ3wnKSkpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdkYXRhLicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHgpXHJcblxyXG4vKnbDqXJpZmllciBzJ2lsIHMnYWdpdCBkJ3VuZSBmb3JtdWxhaXJlIGF2ZWMgdW4gY2hhbXAgdHlwZSBmaWxlICovXHJcbiAgICAgICAgaWYgKCFqUXVlcnkoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGNvbHVtbk5hbWUgKyAnX2ZpbGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZSk7XHJcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSlcclxuICAgICAgICAgICAgc2VsZWN0b3IuZmluZChcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9yc1dpdGhQYXJhbShzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNcIitzZWxlY3RvcikucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5cclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5cclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbiQoJy5uZXcnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1idXR0b24nKSk7XHJcbi8vYWxlcnQoKTtcclxuLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2R1bGVfYWNoaXZlX1YxX3Byb2pldF9uZXcnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnbW9kdWxlX2FyY2hpdmVfVjFfcHJvamV0X2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=