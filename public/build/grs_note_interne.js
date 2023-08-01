(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grs_note_interne"],{

/***/ "./assets/js/components/module_ressource_humaine/grs_note_interne.js":
/*!***************************************************************************!*\
  !*** ./assets/js/components/module_ressource_humaine/grs_note_interne.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");



var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.setRoutingData(routes);
global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_note_interne_list'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 2, 3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [4, 5], []);
  //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_note_interne_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
jQuery.each($('.toastr-msg'), function (i, val) {
  console.log($(this).attr('data-toastr'));
  console.log($(this).text());
  if ($(this).attr('data-toastr') == "success") {
    toastr.success("Succées", $(this).text(), {
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
$('input[name="grs_note_interne[user]"]:radio').change(function () {
  $('#optionOneDiv').toggle(this.id == 'grs_note_interne_user_0');
  if (this.id == 'grs_note_interne_user_1') {
    $(".bloc_investissement").css("display", "block");
  }
});
$(".select2").select2();
$('body').on('change', '.departement', function (e) {
  if ($(this).find('option:selected:last').val() != "") {
    var ids = [];
    ids = $(this).val();
    //alert(ids);
    $.ajax({
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('p_departement_get_employe', {
        id: ids
      }),
      success: function success(result) {
        var infos = jQuery.parseJSON(result);

        //   $(".employe").appendTo(infos.data); 
        // console.log(infos.data);

        $("#grs_note_interne_employes").html(infos.data);
        $('select.select2').select2();
        $('option[value=""],option:not([value])').remove();
        $('option[value="0"],option:not([value])').remove();
        $('#grs_note_interne_employes option').attr('selected', 'selected');
      }
    });
  } else {
    $('.employe').html('<option value="">Choix employe</option>');
  }
  e.preventDefault();
});

/*if (localStorage.getItem('.employe')) {
    $(".employe option").eq(localStorage.getItem('.employe')).prop('selected', true);
}*/

/*$(".employe").on('change', function() {
    localStorage.setItem('.employe', $('option:selected', this).index());
});*/

$('.new').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  $('select.select2').select2();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_note_interne_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      /* $('select.select2').select2(); */
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_note_interne_index');
        window.location.href = url;
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
$('.error-class-tab').each(function (index) {
  //alert(arr.indexOf($(this).parents('.tab-pane').attr('id')))
  if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
    $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class="label badge-danger">Erreur!</span>');
  }
  arr = $(this).parents('.tab-pane').attr('id');
});
$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    //  url: Routing.generate('grs_note_interne_edit'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $('select.select2').select2();
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        //  alert(result.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //var url = Routing.generate('grs_note_interne_edit', {id: result.data.id});
        //window.location.href = url;
        location.reload();
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
$("#_delete").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var obj = {
    route: "grs_note_interne_delete",
    redirection: "grs_note_interne_index",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_4__["deleteCab"])(obj);
  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ })

},[["./assets/js/components/module_ressource_humaine/grs_note_interne.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfcmVzc291cmNlX2h1bWFpbmUvZ3JzX25vdGVfaW50ZXJuZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmaXhlZEhlYWRlciIsIm9uIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiZGF0YSIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsImNsb3Nlc3QiLCJhdHRyIiwiaHJlZiIsImpRdWVyeSIsImVhY2giLCJpIiwidmFsIiwiY29uc29sZSIsImxvZyIsInRvYXN0ciIsInN1Y2Nlc3MiLCJ0aW1lT3V0Iiwid2FybmluZyIsImVycm9yIiwiY2hhbmdlIiwidG9nZ2xlIiwiaWQiLCJjc3MiLCJzZWxlY3QyIiwiZmluZCIsImlkcyIsInJlc3VsdCIsImluZm9zIiwicGFyc2VKU09OIiwiaHRtbCIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybV9uYW1lIiwiZHRhIiwiRm9ybURhdGEiLCJzZWxlY3RvciIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN0b3AiLCJlcnJvcnMiLCJTaG93Rm9ybUVycm9ycyIsImVtcHR5IiwibWVzc2FnZSIsInRpdGxlIiwiY29kZSIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiaW5kZXgiLCJhcnIiLCJpbmRleE9mIiwicGFyZW50cyIsImFwcGVuZCIsImNsaWNrIiwidG9rZW4iLCJvYmoiLCJyb3V0ZSIsInJlZGlyZWN0aW9uIiwiZGVsZXRlQ2FiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDdkQ7QUFDdERBLG1CQUFPLENBQUMsMEdBQStDLENBQUM7QUFDUztBQUNsQztBQUMwRDtBQUNqQjtBQUV4RUMsa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFHOUJJLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0FBRVosSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUdGLElBQUlDLEtBQUssR0FBR1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDUyxTQUFTLENBQUM7RUFDN0JDLElBQUksRUFBRTtJQUNGQyxHQUFHLEVBQUVkLGtIQUFPLENBQUNlLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztJQUFFO0lBQ2hEQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0QsYUFBYSxFQUFFLElBQUk7RUFDbkIsV0FBVyxFQUFFLElBQUk7RUFDakIsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJncnNfbm90ZV9pbnRlcm5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzJztcclxucmVxdWlyZSgnLi4vLi4vcGx1Z2lucy92YWxpZGF0ZS9qcXVlcnkudmFsaWRhdGUubWluLmpzJyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gJy4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzJztcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pO1xyXG5cclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19ub3RlX2ludGVybmVfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIDIwMDAwMDAwXSwgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcblxyXG5cclxuXHJcbiAgICBdLFxyXG4gICAgXCJvcmRlclwiOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwgMiwgM10sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgW10sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbNCwgNV0sIFtdKTtcclxuICAgIC8vICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAnLmNkX29wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19ub3RlX2ludGVybmVfZWRpdCcsIHsgJ2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmpRdWVyeS5lYWNoKCQoJy50b2FzdHItbXNnJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSk7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnRleHQoKSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjw6llc1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG59KTtcclxualF1ZXJ5LmVhY2goJCgnLmZvcm0tZXJyb3JzIGxpJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxufSk7XHJcbi8qY2hlY2sgdGhlIGZvcm0gZXJyb3JzKi9cclxuY29uc29sZS5sb2coJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpKTtcclxuaWYgKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSAhPSAnJykge1xyXG4gICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQoJy5mb3JtLWVycm9ycycpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbn1cclxuJCgnaW5wdXRbbmFtZT1cImdyc19ub3RlX2ludGVybmVbdXNlcl1cIl06cmFkaW8nKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI29wdGlvbk9uZURpdicpLnRvZ2dsZSh0aGlzLmlkID09ICdncnNfbm90ZV9pbnRlcm5lX3VzZXJfMCcpO1xyXG4gICAgaWYgKHRoaXMuaWQgPT0gJ2dyc19ub3RlX2ludGVybmVfdXNlcl8xJykge1xyXG4gICAgICAkKFwiLmJsb2NfaW52ZXN0aXNzZW1lbnRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfVxyXG59KTtcclxuJChcIi5zZWxlY3QyXCIpLnNlbGVjdDIoKTtcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcuZGVwYXJ0ZW1lbnQnLGZ1bmN0aW9uIChlKSB7XHJcbiAgIFxyXG4gICAgaWYgKCQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkOmxhc3QnKS52YWwoKSE9XCJcIikge1xyXG4gICAgICAgIHZhciBpZHM9W107XHJcbiBpZHM9JCh0aGlzKS52YWwoKTtcclxuIC8vYWxlcnQoaWRzKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3BfZGVwYXJ0ZW1lbnRfZ2V0X2VtcGxveWUnLCB7aWQ6IGlkcyB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZm9zID0galF1ZXJ5LnBhcnNlSlNPTihyZXN1bHQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vICAgJChcIi5lbXBsb3llXCIpLmFwcGVuZFRvKGluZm9zLmRhdGEpOyBcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5mb3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKFwiI2dyc19ub3RlX2ludGVybmVfZW1wbG95ZXNcIikuaHRtbChpbmZvcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICQoJ3NlbGVjdC5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgJCgnb3B0aW9uW3ZhbHVlPVwiXCJdLG9wdGlvbjpub3QoW3ZhbHVlXSknKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoJ29wdGlvblt2YWx1ZT1cIjBcIl0sb3B0aW9uOm5vdChbdmFsdWVdKScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2dyc19ub3RlX2ludGVybmVfZW1wbG95ZXMgb3B0aW9uJykuYXR0cignc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAkKCcuZW1wbG95ZScpLmh0bWwoJzxvcHRpb24gdmFsdWU9XCJcIj5DaG9peCBlbXBsb3llPC9vcHRpb24+Jyk7XHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vKmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnLmVtcGxveWUnKSkge1xyXG4gICAgJChcIi5lbXBsb3llIG9wdGlvblwiKS5lcShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnLmVtcGxveWUnKSkucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcclxufSovXHJcblxyXG4vKiQoXCIuZW1wbG95ZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnLmVtcGxveWUnLCAkKCdvcHRpb246c2VsZWN0ZWQnLCB0aGlzKS5pbmRleCgpKTtcclxufSk7Ki9cclxuXHJcbiQoJy5uZXcnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgICQoJ3NlbGVjdC5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdncnNfbm90ZV9pbnRlcm5lX25ldycpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLyogJCgnc2VsZWN0LnNlbGVjdDInKS5zZWxlY3QyKCk7ICovXHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCByZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ3JzX25vdGVfaW50ZXJuZV9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJy5lcnJvci1jbGFzcy10YWInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgLy9hbGVydChhcnIuaW5kZXhPZigkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJykpKVxyXG4gICAgaWYgKGFyci5pbmRleE9mKCQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKSkgPT0gLTEpIHtcclxuICAgICAgICAkKFwiYVtocmVmJD0nI1wiICsgJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpICsgXCInXVwiKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwibGFiZWwgYmFkZ2UtZGFuZ2VyXCI+RXJyZXVyITwvc3Bhbj4nKTtcclxuICAgIH1cclxuICAgIGFyciA9ICQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKTtcclxufSlcclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAvLyAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdncnNfbm90ZV9pbnRlcm5lX2VkaXQnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoJ3NlbGVjdC5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgYWxlcnQocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgLy92YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ3JzX25vdGVfaW50ZXJuZV9lZGl0Jywge2lkOiByZXN1bHQuZGF0YS5pZH0pO1xyXG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiNfZGVsZXRlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuICBcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIHJvdXRlOiBcImdyc19ub3RlX2ludGVybmVfZGVsZXRlXCIsXHJcbiAgICAgIHJlZGlyZWN0aW9uOiBcImdyc19ub3RlX2ludGVybmVfaW5kZXhcIixcclxuICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICBpZDogaWQsXHJcbiAgICB9O1xyXG4gICAgLy8gYWxlcnQoKTtcclxuICAgIGRlbGV0ZUNhYihvYmopO1xyXG4gIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pOyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1pbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IHVuY3VycnlUaGlzKFtdLmluZGV4T2YpO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gbmF0aXZlSW5kZXhPZihbMV0sIDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgdmFyIGZyb21JbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==