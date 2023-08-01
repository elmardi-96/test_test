(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uvdevis"],{

/***/ "./assets/js/components/uvdevis.js":
/*!*****************************************!*\
  !*** ./assets/js/components/uvdevis.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__);


var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.setRoutingData(routes);
$('.new').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  console.log(e.type);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('uv_deviscab_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        $('.errors-list').remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split('.');
          $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $(".form")[0].reset();
        $(".new .table-detail tbody").hide();
        $('.new-article-btn').show();
        $(".new .table-detail > tbody tr").not(":last").remove();
        //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      }
    },

    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  console.log(selector);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('t_deviscab_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        $('.errors-list').remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split('.');
          console.log(columnName);
          console.log("." + selector + " #" + form_name + "_" + columnName[1]);
          $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.data) {
        $(".detail_form")[0].reset();
        $(".errors-list").remove();
        $('.article').focus();
        //                console.log(result);
        var lineNo = 1;
        array_detail.push(result.data);
        $(".new .table-detail > tbody").empty();
        $.each(array_detail, function (i, value) {
          var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article.libelle + "</td><td>" + value.unite.designation + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + value.tva + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
          $(".new .table-detail > tbody").append(my_row);
          lineNo++;
        });
        $("#uv_deviscab_detail").val(JSON.stringify(array_detail));
      }
    }
  });
  e.preventDefault();
});
$('.new-article-btn').click(function (e) {
  $('.edit-new-article').show();
  $(this).hide();
  e.preventDefault();
});
$('.new , .edit').on('change', '.compteMasse', function (e) {
  // alert('dd');
  var $form = $(this).closest('form');
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr('name')] = $(this).val();

  //alert($form.attr('action'));

  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: data,
    success: function success(html) {
      //console.log(html); 
      $('.compteRubrique').replaceWith($(html).find('.compteRubrique'));
    }
  });
  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ })

},[["./assets/js/components/uvdevis.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy91dmRldmlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiJCIsIm9uIiwiZSIsImZvcm1fbmFtZSIsImF0dHIiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsImRhdGEiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImVycm9ycyIsInJlbW92ZSIsImpRdWVyeSIsImVhY2giLCJ2aW9sYXRpb25zIiwiaSIsInZhbCIsImNvbHVtbiIsInByb3BlcnR5UGF0aCIsImNvbHVtbk5hbWUiLCJhZnRlciIsInRpdGxlIiwiZW1wdHkiLCJ0b2FzdHIiLCJ3YXJuaW5nIiwibWVzc2FnZSIsInRleHQiLCJ0aW1lT3V0IiwicmVzZXQiLCJoaWRlIiwic2hvdyIsIm5vdCIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFycmF5X2RldGFpbCIsImZvY3VzIiwibGluZU5vIiwicHVzaCIsInZhbHVlIiwibXlfcm93IiwiYXJ0aWNsZSIsImxpYmVsbGUiLCJ1bml0ZSIsImRlc2lnbmF0aW9uIiwicXVhbnRpdGUiLCJwcml4dW5pdGFpcmUiLCJ0dmEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpY2siLCIkZm9ybSIsImNsb3Nlc3QiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZFQUF1QyxDQUFDO0FB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T0FBTyxDQUFDQyxHQUFHLENBQUNzRCxLQUFLLENBQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDakM7RUFDQUosQ0FBQyxDQUFDWSxJQUFJLENBQUM7SUFDSEMsR0FBRyxFQUFFbUQsS0FBSyxDQUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6Qk8sSUFBSSxFQUFFcUQsS0FBSyxDQUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMxQlcsSUFBSSxFQUFFQSxJQUFJO0lBQ1ZHLE9BQU8sRUFBRSxpQkFBVWdELElBQUksRUFBRTtNQUNyQjtNQUNDbEUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNtRSxXQUFXLENBQUNuRSxDQUFDLENBQUNrRSxJQUFJLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEU7RUFDSixDQUFDLENBQUM7RUFDRmxFLENBQUMsQ0FBQzRDLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7OztBQ3pIVztBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxtQkFBTyxDQUFDLHlGQUE4QjtBQUNsRCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCLEVBQUU7O0FBRW5FO0FBQ0E7QUFDQSxHQUFHLG9EQUFvRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoidXZkZXZpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5cclxuJCgnLm5ldycpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcblxyXG4gICAgY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXZfZGV2aXNjYWJfbmV3JyksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLlwiICsgc2VsZWN0b3IgKyBcIiAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgIC8vICQoJy5tZXNzYWdlLXN1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtd2FybmluZyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPsOXPC9idXR0b24+PHN0cm9uZz5cIiArIHJlc3VsdC5tZXNzYWdlLnRpdGxlICsgXCI8L3N0cm9uZz4gXCIgKyByZXN1bHQubWVzc2FnZS50ZXh0ICsgXCI8L3N0cm9uZz4uPC9kaXY+XCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICQoXCIuZm9ybVwiKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCB0Ym9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubmV3LWFydGljbGUtYnRuJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLm5vdChcIjpsYXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1zdWNjZXNzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxudmFyIGFycmF5X2RldGFpbCA9IFtdO1xyXG4kKCcubmV3Jykub24oJ3N1Ym1pdCcsICcuZGV0YWlsX2Zvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0b3IpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0X2RldmlzY2FiX25ldycpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi5cIiArIHNlbGVjdG9yICsgXCIgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLlwiICsgc2VsZWN0b3IgKyBcIiAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5kZXRhaWxfZm9ybVwiKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoJy5hcnRpY2xlJykuZm9jdXMoKTtcclxuLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lTm8gPSAxO1xyXG4gICAgICAgICAgICAgICAgYXJyYXlfZGV0YWlsLnB1c2gocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXlfcm93ID0gXCIgPHRyPjx0ZD5cIiArIChpICsgMSkgKyBcIjwvdGQ+PHRkPlwiICsgdmFsdWUuYXJ0aWNsZS5saWJlbGxlICsgXCI8L3RkPjx0ZD5cIiArIHZhbHVlLnVuaXRlLmRlc2lnbmF0aW9uICsgXCI8L3RkPjx0ZD5cIiArIHZhbHVlLnF1YW50aXRlICsgXCI8L3RkPjx0ZD5cIiArIHZhbHVlLnByaXh1bml0YWlyZSArIFwiPC90ZD4gPHRkPlwiICsgdmFsdWUudHZhICsgXCI8L3RkPjx0ZD48YSBjbGFzcz0nZGVsZXRlX2VsZW1lbnQnIGlkPVwiICsgaSArIFwiPjxpIGNsYXNzPSdmYSBmYS10cmFzaCB0ZXh0LW5hdnknPjwvaT48L2E+PC90ZD48L3RyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lTm8rKztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJChcIiN1dl9kZXZpc2NhYl9kZXRhaWxcIikudmFsKEpTT04uc3RyaW5naWZ5KGFycmF5X2RldGFpbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcubmV3LWFydGljbGUtYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJy5lZGl0LW5ldy1hcnRpY2xlJykuc2hvdygpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5uZXcgLCAuZWRpdCcpLm9uKCdjaGFuZ2UnLCAnLmNvbXB0ZU1hc3NlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgLy8gYWxlcnQoJ2RkJyk7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuICAgIC8vIFNpbXVsYXRlIGZvcm0gZGF0YSwgYnV0IG9ubHkgaW5jbHVkZSB0aGUgc2VsZWN0ZWQgc3BvcnQgdmFsdWUuXHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVskKHRoaXMpLmF0dHIoJ25hbWUnKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgIC8vYWxlcnQoJGZvcm0uYXR0cignYWN0aW9uJykpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCRmb3JtLmF0dHIoJ21ldGhvZCcpKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGh0bWwpOyBcclxuICAgICAgICAgICAgKCQoJy5jb21wdGVSdWJyaXF1ZScpLnJlcGxhY2VXaXRoKCQoaHRtbCkuZmluZCgnLmNvbXB0ZVJ1YnJpcXVlJykpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==