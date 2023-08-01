(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grs_employe"],{

/***/ "./assets/js/components/module_ressource_humaine/grs_employe.js":
/*!**********************************************************************!*\
  !*** ./assets/js/components/module_ressource_humaine/grs_employe.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");





var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.setRoutingData(routes);
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('grs_employe_list') + location.search,
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[25, 50, 100, 200, 400], [25, 50, 100, 200, "All"]],
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
    "width": "3px",
    "targets": 0
  }],
  "order": [[0, "desc"]],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchText"](api, [1, 2, 3, 4, 5, 6, 7], []);
  // CustomSearchDatatable.CustomSearchDate(api, [3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_9__["CustomSearchSelect"](api, [8], []);
  //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('grs_employe_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
$(".action_head").click(function () {
  console.log($(".action").filter(":checked").length);
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
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
$('input[name="grs_employe[user]"]:radio').change(function () {
  $('#optionOneDiv').toggle(this.id == 'grs_employe_user_0');
  if (this.id == 'grs_employe_user_1') {
    $(".bloc_investissement").css("display", "block");
  }
});
var arr = [];
$('.new').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_8__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('grs_employe_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        $('.erreur_liste').remove();
        //$("span").remove( ".erreur_liste" );
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_7__["ShowFormErrors"])(selector, form_name, result.errors);
        $('.error-class-tab').each(function (index) {
          //  alert(index);
          //  alert(arr.indexOf($(this).parents('.tab-pane').attr('id')));
          if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
            $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class=" erreur_liste label badge-danger">Erreur!</span>');
          }
          arr = $(this).parents('.tab-pane').attr('id');
        });
        arr = [];
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate('grs_employe_index');
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
$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_8__["create"](document.activeElement);
  l.start();
  var id = dta.get("_id");
  //alert(id);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("grs_employe_edit", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      // alert();
      l.stop();
      if (result.errors) {
        //   $('.erreur_liste').remove();

        $('.erreur_liste').remove();
        //$("span").remove( ".erreur_liste" );
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_7__["ShowFormErrors"])(selector, form_name, result.errors);
        $('.error-class-tab').each(function (index) {
          //  alert(index);
          //  alert(arr.indexOf($(this).parents('.tab-pane').attr('id')));
          if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
            $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class=" erreur_liste label badge-danger">Erreur!</span>');
          }
          arr = $(this).parents('.tab-pane').attr('id');
        });
        arr = [];
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        // var url = Routing.generate('grs_employe_index');
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
$("#_edit").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_5___default.a.generate("grs_employe_edit", {
      id: id
    });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
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

$("#_delete").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var obj = {
    route: "grs_employe_delete",
    redirection: "grs_employe_index",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_6__["deleteCab"])(obj);
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

},[["./assets/js/components/module_ressource_humaine/grs_employe.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfcmVzc291cmNlX2h1bWFpbmUvZ3JzX2VtcGxveWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInR5cGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiYXBpIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJjbG9zZXN0IiwiYXR0ciIsImhyZWYiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJsZW5ndGgiLCJwcm9wIiwidG9nZ2xlIiwialF1ZXJ5IiwiZWFjaCIsImkiLCJ2YWwiLCJ0b2FzdHIiLCJzdWNjZXNzIiwidGltZU91dCIsIndhcm5pbmciLCJlcnJvciIsImNoYW5nZSIsImlkIiwiY3NzIiwiYXJyIiwiZm9ybV9uYW1lIiwiZHRhIiwiRm9ybURhdGEiLCJzZWxlY3RvciIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInJlc3VsdCIsInN0b3AiLCJlcnJvcnMiLCJyZW1vdmUiLCJTaG93Rm9ybUVycm9ycyIsImluZGV4IiwiaW5kZXhPZiIsInBhcmVudHMiLCJhcHBlbmQiLCJlbXB0eSIsIm1lc3NhZ2UiLCJ0aXRsZSIsImNvZGUiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInByZXZlbnREZWZhdWx0IiwiZ2V0Iiwicm93Iiwic2hvdyIsImhpZGUiLCJ0b2tlbiIsIm9iaiIsInJvdXRlIiwicmVkaXJlY3Rpb24iLCJkZWxldGVDYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUN2RDtBQUN0REEsbUJBQU8sQ0FBQywwR0FBK0MsQ0FBQztBQUNTO0FBQ2xDO0FBQzBEO0FBQ2pCO0FBQ3hFQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUc5QkksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFFWixJQUFNQyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNTSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEQyxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsSUFBSUMsS0FBSyxHQUFHUixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNTLFNBQVMsQ0FBQztFQUM3QkMsSUFBSSxFQUFFO0lBQ0ZDLEdBQUcsRUFBRWQsa0hBQU8sQ0FBQ2UsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTTtJQUFFO0lBQzdEQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0QsYUFBYSxFQUFFLElBQUk7RUFDbkIsV0FBVyxFQUFFLElBQUk7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QztFQUV0QyxJQUFJdUQsR0FBRyxHQUFHO0lBQ1JDLEtBQUssRUFBRSxvQkFBb0I7SUFDM0JDLFdBQVcsRUFBRSxtQkFBbUI7SUFDaENILEtBQUssRUFBRUEsS0FBSztJQUNabkMsRUFBRSxFQUFFQTtFQUNOLENBQUM7RUFDRDtFQUNBdUMsc0VBQVMsQ0FBQ0gsR0FBRyxDQUFDO0VBRWQzRSxDQUFDLENBQUNxRSxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7QUMvUlM7QUFDYjtBQUNBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsbUhBQTJDO0FBQ3JFLGVBQWUsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDcEQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHdFQUF3RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiZ3JzX2VtcGxveWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanMnO1xyXG5yZXF1aXJlKCcuLi8uLi9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanMnKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5cclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ3JzX2VtcGxveWVfbGlzdCcpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1syNSwgNTAsIDEwMCwgMjAwLCA0MDBdLCBbMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjNweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIFxyXG5cclxuICAgIF0sXHJcbiAgICBcIm9yZGVyXCI6IFtbIDAsIFwiZGVzY1wiIF1dLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG50YWJsZS5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLCAyLDMsNCw1LDYsIDddLCBbXSk7XHJcbiAgIC8vIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgWzNdLCBbXSk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzhdLCBbXSk7XHJcbiAgICAvLyAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKiBsaWVuIHZlcnMgbGEgbGl2cmFpc29uICovXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJy5jZF9vcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdncnNfZW1wbG95ZV9lZGl0JywgeyAnaWQnOiAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG59KTtcclxuXHJcblxyXG4kKFwiLmFjdGlvbl9oZWFkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCk7XHJcbiAgICAkKFwiLmFjdGlvbiAsLmFjdGlvbl9oZWFkXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG4gIH0pO1xyXG4gIFxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxuICB9KTtcclxuXHJcblxyXG5qUXVlcnkuZWFjaCgkKCcudG9hc3RyLW1zZycpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY8OpZXNcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJ3YXJuaW5nXCIpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQodGhpcykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxufSk7XHJcbmpRdWVyeS5lYWNoKCQoJy5mb3JtLWVycm9ycyBsaScpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnRleHQoKSk7XHJcbn0pO1xyXG4vKmNoZWNrIHRoZSBmb3JtIGVycm9ycyovXHJcbmNvbnNvbGUubG9nKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSk7XHJcbmlmICgkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCkgIT0gJycpIHtcclxuICAgIHRvYXN0ci5lcnJvcihcImVycmV1clwiLCAkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG59XHJcbiQoJ2lucHV0W25hbWU9XCJncnNfZW1wbG95ZVt1c2VyXVwiXTpyYWRpbycpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjb3B0aW9uT25lRGl2JykudG9nZ2xlKHRoaXMuaWQgPT0gJ2dyc19lbXBsb3llX3VzZXJfMCcpO1xyXG4gICAgaWYgKHRoaXMuaWQgPT0gJ2dyc19lbXBsb3llX3VzZXJfMScpIHtcclxuICAgICAgJChcIi5ibG9jX2ludmVzdGlzc2VtZW50XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgYXJyID0gW107XHJcbiQoJy5uZXcnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ3JzX2VtcGxveWVfbmV3JyksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLmVycmV1cl9saXN0ZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8kKFwic3BhblwiKS5yZW1vdmUoIFwiLmVycmV1cl9saXN0ZVwiICk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICQoJy5lcnJvci1jbGFzcy10YWInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgYWxlcnQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgYWxlcnQoYXJyLmluZGV4T2YoJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyci5pbmRleE9mKCQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKSkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcImFbaHJlZiQ9JyNcIiArICQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKSArIFwiJ11cIikuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIiBlcnJldXJfbGlzdGUgbGFiZWwgYmFkZ2UtZGFuZ2VyXCI+RXJyZXVyITwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgYXJyID0gW107XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCggcmVzdWx0Lm1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19lbXBsb3llX2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIC8vL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAgIC8vYWxlcnQoaWQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZ3JzX2VtcGxveWVfZWRpdFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgLy8gYWxlcnQoKTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgLy8gICAkKCcuZXJyZXVyX2xpc3RlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBcdFxyXG5cclxuICAgICAgICAgICAgICQoJy5lcnJldXJfbGlzdGUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgIC8vJChcInNwYW5cIikucmVtb3ZlKCBcIi5lcnJldXJfbGlzdGVcIiApO1xyXG4gICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAkKCcuZXJyb3ItY2xhc3MtdGFiJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgLy8gIGFsZXJ0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgLy8gIGFsZXJ0KGFyci5pbmRleE9mKCQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKSkpO1xyXG4gICAgICAgICAgICAgICAgIGlmIChhcnIuaW5kZXhPZigkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJykpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICQoXCJhW2hyZWYkPScjXCIgKyAkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJykgKyBcIiddXCIpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCIgZXJyZXVyX2xpc3RlIGxhYmVsIGJhZGdlLWRhbmdlclwiPkVycmV1ciE8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGFyciA9ICQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGFyciA9IFtdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgICAgLy8gdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19lbXBsb3llX2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoXCIjX2VkaXRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICBpZiAoaWQpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZ3JzX2VtcGxveWVfZWRpdFwiLCB7IGlkOiBpZCB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5wYWllbWVudCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAyKSB7XHJcbiAgICAgICAgJCgnLmJsb2NfY2hlcXVlJykuc2hvdygpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmJsb2NfY2hlcXVlJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoXCIjX2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcbiAgXHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICByb3V0ZTogXCJncnNfZW1wbG95ZV9kZWxldGVcIixcclxuICAgICAgcmVkaXJlY3Rpb246IFwiZ3JzX2VtcGxveWVfaW5kZXhcIixcclxuICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICBpZDogaWQsXHJcbiAgICB9O1xyXG4gICAgLy8gYWxlcnQoKTtcclxuICAgIGRlbGV0ZUNhYihvYmopO1xyXG4gIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pOyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1pbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IHVuY3VycnlUaGlzKFtdLmluZGV4T2YpO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gbmF0aXZlSW5kZXhPZihbMV0sIDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgdmFyIGZyb21JbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==