(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pcompterubrique"],{

/***/ "./assets/js/components/parametrage/pcompterubrique.js":
/*!*************************************************************!*\
  !*** ./assets/js/components/parametrage/pcompterubrique.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");


var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

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

//var l = Ladda.create(document.querySelector('.my-button'));

var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('p_compterubrique_list'),
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
    "width": "1px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "1px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "1px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "1px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "1px",
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('p_compterubrique_edit', {
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
$('.new , .edit').on('submit', 'form', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_3__["create"](document.activeElement);
  l.start();
});
$('#_delete').click(function (e) {
  var id = $('#test').data("etablissementId");
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'DELETE',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('p_compterubrique_delete', {
            'id': id
          }),
          success: function success(result) {
            console.log(result);
            if (result.code == 200) {
              // table.ajax.reload();
              //   alert();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('p_compterubrique_index');
              window.location.href = url;
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
function getSubSelect(myclass, myboolean, mycontent) {
  //console.log(mycontent)
  if (myboolean) {
    $(myclass).prop("disabled", false);
  } else {
    $(myclass).prop("disabled", true);
    $(myclass).parent().find('.select2 .select2-selection__arrow').html('<i class="i-load fa fa-refresh"></i>');
  }
  if (mycontent) {
    var array = myclass.split(',');
    for (var i = 0, l = array.length; i < l; i++) {
      //console.log($(mycontent).find(array[i]));
      $(array[i]).replaceWith($(mycontent).find(array[i]));
    }
  }
}
$('.new').on('change', '.dossier', function (e) {
  getSubSelect(".compteMasse", false, '');
  var $form = $(this).closest('form');
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr('name')] = $(this).val();

  // console.log(data);
  //alert($form.attr('action'));
  //  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: data,
    success: function success(html) {
      // console.log(html); 
      getSubSelect(".compteMasse", true, html);
      $('.sel2').select2();

      //$('.compteRubrique').parent().find('.select2').not(':first').remove();

      //$('.comptePoste').parent().find('.sel2').select('clear');
      //$('.compte').parent().find('.sel2').trigger('clear');
    }
  });

  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/components/parametrage/pcompterubrique.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9wY29tcHRlcnVicmlxdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmaXhlZEhlYWRlciIsIm9uIiwiY2xvc2VzdCIsImF0dHIiLCJocmVmIiwialF1ZXJ5IiwiZWFjaCIsImkiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwidG9hc3RyIiwic3VjY2VzcyIsInRpbWVPdXQiLCJ3YXJuaW5nIiwiZXJyb3IiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsImNsaWNrIiwiaWQiLCJkYXRhIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJjb2RlIiwibWVzc2FnZSIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmVzcG9uc2VKU09OIiwicHJldmVudERlZmF1bHQiLCJnZXRTdWJTZWxlY3QiLCJteWNsYXNzIiwibXlib29sZWFuIiwibXljb250ZW50IiwicHJvcCIsInBhcmVudCIsImZpbmQiLCJodG1sIiwiYXJyYXkiLCJzcGxpdCIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwiJGZvcm0iLCJzZWxlY3QyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUM3R0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFQztBQUMvQkksTUFBTSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7QUFFWixJQUFNQyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNTSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEQyxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDOztBQUVGOztBQUVBLElBQUlDLEtBQUssR0FBR1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDUyxTQUFTLENBQUM7RUFDN0JDLElBQUksRUFBRTtJQUNGQyxHQUFHLEVBQUVkLGtIQUFPLENBQUNlLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztJQUFFO0lBQ2hEQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0QsYUFBYSxFQUFFLElBQUk7RUFDbkIsV0FBVyxFQUFFLElBQUk7RUFDakIsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBRXZG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Q0FBQyxDQUFDb0MsR0FBRyxFQUFFOztFQUUxQztFQUNBO0VBQ0E7RUFDQTtFQUNBcEMsQ0FBQyxDQUFDVSxJQUFJLENBQUM7SUFDSEMsR0FBRyxFQUFFd0UsS0FBSyxDQUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QmxCLElBQUksRUFBRXNFLEtBQUssQ0FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUM7SUFDMUJvQixJQUFJLEVBQUVBLElBQUk7SUFDVlgsT0FBTyxFQUFFLGlCQUFVc0MsSUFBSSxFQUFFO01BQ3JCO01BQ0FQLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFTyxJQUFJLENBQUM7TUFDeEM5RSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNvRixPQUFPLEVBQUU7O01BRXBCOztNQUVBO01BQ0E7SUFFSjtFQUNKLENBQUMsQ0FBQzs7RUFDRmpFLENBQUMsQ0FBQ21ELGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7OztBQ3JNVztBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxtQkFBTyxDQUFDLHlGQUE4QjtBQUNsRCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCLEVBQUU7O0FBRW5FO0FBQ0E7QUFDQSxHQUFHLG9EQUFvRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoicGNvbXB0ZXJ1YnJpcXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuLy92YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgncF9jb21wdGVydWJyaXF1ZV9saXN0JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcblxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICBdLFxyXG4gICAgXCJvcmRlclwiOiBbWyAwLCBcImRlc2NcIiBdXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vKiBsaWVuIHZlcnMgbGEgbGl2cmFpc29uICovXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJy5jZF9vcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdwX2NvbXB0ZXJ1YnJpcXVlX2VkaXQnLCB7ICdpZCc6ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpIH0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkuZWFjaCgkKCcudG9hc3RyLW1zZycpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY8OpZXNcIiwgJCh0aGlzKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwid2FybmluZ1wiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsICQodGhpcykudGV4dCgpLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCh0aGlzKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxufSk7XHJcbmpRdWVyeS5lYWNoKCQoJy5mb3JtLWVycm9ycyBsaScpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnRleHQoKSk7XHJcbn0pO1xyXG4vKmNoZWNrIHRoZSBmb3JtIGVycm9ycyovXHJcbmNvbnNvbGUubG9nKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSk7IFxyXG5pZiAoJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpIT0nJyl7XHJcbiAgIHRvYXN0ci5lcnJvcihcImVycmV1clwiLCAkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSkgXHJcbn1cclxuXHJcblxyXG4kKCcubmV3ICwgLmVkaXQnKS5vbignc3VibWl0JywgJ2Zvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcjX2RlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKCcjdGVzdCcpLmRhdGEoXCJldGFibGlzc2VtZW50SWRcIik7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3BfY29tcHRlcnVicmlxdWVfZGVsZXRlJywgeyAnaWQnOiBpZCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFsZXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgncF9jb21wdGVydWJyaXF1ZV9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFN1YlNlbGVjdChteWNsYXNzLCBteWJvb2xlYW4sIG15Y29udGVudCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhteWNvbnRlbnQpXHJcbiAgICBpZiAobXlib29sZWFuKSB7XHJcbiAgICAgICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKG15Y2xhc3MpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAkKG15Y2xhc3MpLnBhcmVudCgpLmZpbmQoJy5zZWxlY3QyIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cnKS5odG1sKCc8aSBjbGFzcz1cImktbG9hZCBmYSBmYS1yZWZyZXNoXCI+PC9pPicpXHJcbiAgICB9XHJcbiAgICBpZiAobXljb250ZW50KSB7XHJcbiAgICAgICAgdmFyIGFycmF5ID0gbXljbGFzcy5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJChteWNvbnRlbnQpLmZpbmQoYXJyYXlbaV0pKTtcclxuICAgICAgICAgICAgJChhcnJheVtpXSkucmVwbGFjZVdpdGgoJChteWNvbnRlbnQpLmZpbmQoYXJyYXlbaV0pKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiQoJy5uZXcnKS5vbignY2hhbmdlJywgJy5kb3NzaWVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGdldFN1YlNlbGVjdChcIi5jb21wdGVNYXNzZVwiLCBmYWxzZSwgJycpO1xyXG4gICAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XHJcbiAgICAvLyBTaW11bGF0ZSBmb3JtIGRhdGEsIGJ1dCBvbmx5IGluY2x1ZGUgdGhlIHNlbGVjdGVkIHNwb3J0IHZhbHVlLlxyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGFbJCh0aGlzKS5hdHRyKCduYW1lJyldID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vYWxlcnQoJGZvcm0uYXR0cignYWN0aW9uJykpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKCRmb3JtLmF0dHIoJ21ldGhvZCcpKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhodG1sKTsgXHJcbiAgICAgICAgICAgIGdldFN1YlNlbGVjdChcIi5jb21wdGVNYXNzZVwiLCB0cnVlLCBodG1sKTtcclxuICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyQoJy5jb21wdGVSdWJyaXF1ZScpLnBhcmVudCgpLmZpbmQoJy5zZWxlY3QyJykubm90KCc6Zmlyc3QnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vJCgnLmNvbXB0ZVBvc3RlJykucGFyZW50KCkuZmluZCgnLnNlbDInKS5zZWxlY3QoJ2NsZWFyJyk7XHJcbiAgICAgICAgICAgIC8vJCgnLmNvbXB0ZScpLnBhcmVudCgpLmZpbmQoJy5zZWwyJykudHJpZ2dlcignY2xlYXInKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=