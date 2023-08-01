(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["virement"],{

/***/ "./assets/js/components/tresorerie/virement.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/tresorerie/virement.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");






var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.setRoutingData(routes);
global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
var table = $('#grid2').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('list_ordre_virement'),
    // json datasource
    type: 'get',
    beforeSend: function beforeSend() {
      if (table.hasOwnProperty('settings')) {
        var settings = table.settings();
        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    }
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, 'desc']],
  columns: [{
    orderable: false,
    name: 'tr.id',
    width: '5%'
  }, {
    orderable: true,
    name: 'tr.code_bq'
  }, {
    orderable: true,
    name: 'tr.date_bq'
  }, {
    orderable: true,
    name: 'tr.observation_bq'
  }, {
    orderable: true,
    name: 'mdp.designation'
  }, {
    orderable: true,
    name: 'tr.montant'
  }, {
    orderable: false,
    searchable: false
  }, {
    orderable: false,
    name: 'tr.code_bq'
  }],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: [],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('datatables_langue'),
    processing: true
  }
  // fixedHeader: true,
});

$('select').select2();
$('.CloseClose').on('click', function (e) {
  $('#motifeModal').modal('hide');
});
$('.executer').on('click', function (e) {
  var vir_selecteds = [];
  var inputRemise = $('#inputRemise').val();
  var annulation = $('#annulation').val();
  $('input:checkbox[name=TrTransaction_row_checkbox]:checked').each(function () {
    var checkboxId = $(this).attr('id');
    vir_selecteds.push(checkboxId);
  });
  var data = new FormData();
  data.append('vir_selecteds', JSON.stringify(vir_selecteds));
  data.append('inputRemise', inputRemise);
  data.append('annulation', annulation);
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);
  l.start();
  $('.ladda-button').css('padding', '6px 50px');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('modifier_montant_final'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result == 'empty') {
        toastr.warning('Veuillez selectionner au moins un ordre de virement', 'Warning', {
          timeOut: 4000
        });
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'empty caisse') {
        toastr.error("Vous n'avez pas ce montant dans votre caisse !", 'Error', {
          timeOut: 4000
        });
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'empty carte') {
        toastr.error("Vous n'avez pas ce montant dans votre carte !", 'Error', {
          timeOut: 4000
        });
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'motife') {
        /// Get a reference to the modal element
        $('#motifeModal').modal('show');
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'ok') {
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
        window.location.reload();
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
$(document).ready(function () {
  $('.executernew').on('click', function (e) {
    var totalMontant = 0;

    // Open the modal
    // var codebq_selecteds=  $("input:checkbox[name=id_transaction]:checked:first").val();

    var codebq_selecteds = [];
    $('input:checkbox[name=id_transaction]:checked').each(function () {
      codebq_selecteds.push($(this).val());
    });
    var data = new FormData();
    data.append('codebq_selecteds', JSON.stringify(codebq_selecteds));
    var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);
    l.start();
    $('.ladda-button').css('padding', '6px 50px');
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('get_codebq_selected'),
      data: data,
      processData: false,
      contentType: false,
      success: function success(response) {
        if (response == 'transactions_count') {
          toastr.warning('sélectionner une seule demande !', 'warnig', {
            timeOut: 6000
          });
          $('#executernew').modal('hide');
          $('.ladda-button').css('padding', '6px 18px');
          l.stop();
        } else if (response.TrTransactionArray) {
          var TrTransactionArray = response.TrTransactionArray;
          $('.bodycodebq').empty();
          var totalSum = 0;
          for (var i = 0; i < TrTransactionArray.length; i++) {
            var TrTransaction = TrTransactionArray[i];
            // var checkbox = $(`#${TrTransaction.id}`);
            totalMontant += parseFloat(TrTransaction.montan);
            $('.bodycodebq').prepend("\n            <tr>\n            <td style=\"text-align: center;\"><input id=\"".concat(TrTransaction.id, "\" type=\"checkbox\" name=\"TrTransaction_row_checkbox\" checked></td>\n            <td style=\"text-align: center;\">").concat(TrTransaction.id, "</td>\n              <td style=\"text-align: center;\">").concat(TrTransaction.code, "</td>\n              <td style=\"text-align: center;\">").concat(TrTransaction.codebq, "</td>\n              <td style=\"text-align: center;\" class=\"montant\">").concat(TrTransaction.montan, "</td>\n              </td>\n            </tr>\n            \n          "));
            $('#totalMontant').val(totalMontant.toFixed(2));
            console.log(totalMontant);
          }
          $('#executernew').modal('show');
          $('.ladda-button').css('padding', '6px 18px');
          l.stop();
          // Update the total montant in the modal
          // Update the total montant in the modal
        }
      },

      error: function error(jqXHR, textStatus, errorThrown) {
        l.stop();
        toastr.warning(jqXHR.responseText, 'warning', {
          timeOut: 4000
        });
      }
    });
  });
});
$(document).ready(function () {
  $('.executernew').on('click', function (e) {
    var totalMontant = 0;
    function calculateTotalMontant() {
      totalMontant = 0; // Reset the total montant

      // Iterate through checked checkboxes
      $('input:checkbox[name=TrTransaction_row_checkbox]:checked').each(function () {
        var montant = parseFloat($(this).closest('tr').find('.montant').text());
        if (!isNaN(montant)) {
          totalMontant += montant; // Add the montant to the totalMontant
        }
      });

      // Update the total montant in the input field
      $('#totalMontant').val(totalMontant.toFixed(2));
    }

    // Call the calculateTotalMontant function on document ready
    calculateTotalMontant();

    // Attach a change event listener to the checkboxes
    $(document).on('change', 'input:checkbox[name=TrTransaction_row_checkbox]', function () {
      calculateTotalMontant(); // Recalculate the total montant
    });
  });
});

$(document).ready(function () {
  $('#executer_datatble').DataTable({
    searching: false,
    // Enable search bar
    paging: false,
    // Disable pagination
    bInfo: false,
    ordering: false
  });
});
$('.annuler').on('click', function (e) {
  var vir_selecteds = [];
  $('input:checkbox[name=id_transaction]:checked').each(function () {
    vir_selecteds.push($(this).val());
  });
  // if (vir_selecteds.length < 1) {
  //   toastr.warning(
  //     'Veuillez selectionner au moins un ordre de virement',
  //     'Warning',
  //     { timeOut: 4000 }
  //   );
  //   return;
  // }
  $('#virment_annuler').modal('show');
});
$('.save_annulation').on('submit', function (e) {
  e.preventDefault();
  var vir_selecteds = [];
  $('input:checkbox[name=id_transaction]:checked').each(function () {
    vir_selecteds.push($(this).val());
  });
  var codeChq = $("#ChequeImpaye").val().trim();
  var data = new FormData($(this)[0]);
  data.append('vir_selecteds', JSON.stringify(vir_selecteds));
  data.append('codeChq', JSON.stringify(codeChq));
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);
  l.start();
  // $('.ladda-button').css('padding','6px 50px');

  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('annulation_virement'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      // console.log('test reussi');
      if (result == 'ok') {
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
        window.location.reload();
      } else if (result == 'alreadyChequeImpaye') {
        toastr.error("déjà Check Impaye !", 'Error', {
          timeOut: 4000
        });
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'empty') {
        toastr.error("Entre code or Select  !", 'Error', {
          timeOut: 4000
        });
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      } else if (result == 'NotCheque') {
        toastr.error("mode de paiement n'est pas Cheque  !", 'Error', {
          timeOut: 4000
        });
        $('.ladda-button').css('padding', '6px 18px');
        l.stop();
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.warning(jqXHR.responseText, 'Warning', {
        timeOut: 4000
      });
    }
  });
});
$('body').on('click', '.imprime_document', function (e) {
  e.preventDefault();
  if ($(this).attr('data-valide') == 0) {
    toastr.warning("impossible d'imprimer le document, manque de signature!", 'Erreur', {
      timeOut: 4000
    });
    return;
  }
  window.open($(this).attr('href'), '_blank');
});
var codeBq;
$('body').on('click', '.chequeModel', function (e) {
  e.preventDefault();
  if ($(this).attr('data-valide') == 0) {
    toastr.warning("impossible d'imprimer le document, manque de signature!", 'Erreur', {
      timeOut: 4000
    });
    return;
  }
  codeBq = $(this).attr('data-id');
  $('.cheque_normal').attr('href', _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('pdfDownload', {
    code_bq: codeBq
  }));
  $('.cheque_physique').attr('href', _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('pdfDownloadCheque', {
    code_bq: codeBq
  }));
  $('#modalTypeCheque').show();
  // $.ajax({
  //     type: 'POST',
  //     url: Routing.generate('virement_get_cheque_details'),
  //     data: data,
  //     processData: false,
  //     contentType: false,
  //     success: function(result) {
  //        // console.log('test reussi');

  //     },
  //     error: function(jqXHR, textStatus, errorThrown) {
  //         toastr.warning('', 'Warning', { timeOut: 4000 });
  //     }
  // });
});

$('body').on('click', '.cheque_normal', function (e) {
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('check_cheque_impaye', {
      code_bq: codeBq
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result == 'ok') {
        window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('pdf_cheque_impaye', {
          code_bq: codeBq
        }));
      }
    }
  });
});
$('body').on('click', '.close', function (e) {
  $('#modalTypeCheque').hide();
});
$('.save_acquise').on('submit', function (e) {
  e.preventDefault();
  var data = new FormData($(this)[0]);
  var vir_selecteds = [];
  $('input:checkbox[name=id_transaction]:checked').each(function () {
    vir_selecteds.push($(this).val());
  });
  data.append('vir_selecteds', JSON.stringify(vir_selecteds));
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('tr_transaction_acquise'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      // console.log('test reussi');
      toastr.success('Bien enregistrer', 'Error', {
        timeOut: 4000
      });
      l.stop();
      window.location.reload();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
      l.stop();
      toastr.warning(jqXHR.responseText, 'warning', {
        timeOut: 4000
      });
    }
  });
  console.log(vir_selecteds);
  // alert('ziko');
});

var gain_perte_code_bq;
$('body').on('click', '.gain_perte', function (e) {
  e.preventDefault();
  gain_perte_code_bq = $(this).attr('data-id');
  $('#gain_perte_modal').modal('show');
});
$('.save_gain_perte').on('submit', function (e) {
  e.preventDefault();
  var data = new FormData($(this)[0]);
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('tr_transaction_gain_perte', {
      codeBq: gain_perte_code_bq
    }),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      // console.log('test reussi');
      toastr.success('Bien enregistrer', 'Error', {
        timeOut: 4000
      });
      l.stop();
      window.location.reload();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
      l.stop();
      toastr.warning(jqXHR.responseText, 'warning', {
        timeOut: 4000
      });
    }
  });

  // console.log(vir_selecteds);
  // alert('ziko');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var charAt = uncurryThis(''.charAt);
var $parseFloat = global.parseFloat;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var $repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return nativeToFixed(0.00008, 3) !== '0.000' ||
    nativeToFixed(0.9, 0) !== '1' ||
    nativeToFixed(1.255, 2) !== '1.25' ||
    nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw $RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return $String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ })

},[["./assets/js/components/tresorerie/virement.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL3ZpcmVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1mbG9hdC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiYmVmb3JlU2VuZCIsImhhc093blByb3BlcnR5Iiwic2V0dGluZ3MiLCJqcVhIUiIsImFib3J0IiwiZGVmZXJSZW5kZXIiLCJzZXJ2ZXJTaWRlIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJvcmRlciIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJuYW1lIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwiZG9tIiwiYnV0dG9ucyIsImxhbmd1YWdlIiwicHJvY2Vzc2luZyIsInNlbGVjdDIiLCJvbiIsImUiLCJtb2RhbCIsInZpcl9zZWxlY3RlZHMiLCJpbnB1dFJlbWlzZSIsInZhbCIsImFubnVsYXRpb24iLCJlYWNoIiwiY2hlY2tib3hJZCIsImF0dHIiLCJwdXNoIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwiY3NzIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJzdG9wIiwiZXJyb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInJlc3BvbnNlVGV4dCIsInJlYWR5IiwidG90YWxNb250YW50IiwiY29kZWJxX3NlbGVjdGVkcyIsInJlc3BvbnNlIiwiVHJUcmFuc2FjdGlvbkFycmF5IiwiZW1wdHkiLCJ0b3RhbFN1bSIsImkiLCJsZW5ndGgiLCJUclRyYW5zYWN0aW9uIiwicGFyc2VGbG9hdCIsIm1vbnRhbiIsInByZXBlbmQiLCJpZCIsImNvZGUiLCJjb2RlYnEiLCJ0b0ZpeGVkIiwiY2FsY3VsYXRlVG90YWxNb250YW50IiwibW9udGFudCIsImNsb3Nlc3QiLCJmaW5kIiwidGV4dCIsImlzTmFOIiwic2VhcmNoaW5nIiwicGFnaW5nIiwiYkluZm8iLCJvcmRlcmluZyIsInByZXZlbnREZWZhdWx0IiwiY29kZUNocSIsInRyaW0iLCJvcGVuIiwiY29kZUJxIiwiY29kZV9icSIsInNob3ciLCJoaWRlIiwiZ2Fpbl9wZXJ0ZV9jb2RlX2JxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDdkQ7QUFDdERBLG1CQUFPLENBQUMsMEdBQStDLENBQUM7QUFDUztBQUNsQztBQUMwRDtBQUNqQjtBQUV4RUMsa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFOUJJLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0FBQ1osSUFBTUMsSUFBSSxHQUFH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R0FBRyxnREFBZ0Q7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNsSUQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRTNEO0FBQ0E7QUFDQSxHQUFHLGtEQUFrRDtBQUNyRDtBQUNBLENBQUMiLCJmaWxlIjoidmlyZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanMnO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuZ2xvYmFsLiQgPSAkO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgY3VzdG9tQ2xhc3M6IHtcclxuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gIH0sXHJcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkMicpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdsaXN0X29yZHJlX3ZpcmVtZW50JyksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgdHlwZTogJ2dldCcsXHJcbiAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0YWJsZS5oYXNPd25Qcm9wZXJ0eSgnc2V0dGluZ3MnKSkge1xyXG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHRhYmxlLnNldHRpbmdzKCk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIG9yZGVyOiBbWzAsICdkZXNjJ11dLFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgbmFtZTogJ3RyLmlkJywgd2lkdGg6ICc1JScgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAndHIuY29kZV9icScgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAndHIuZGF0ZV9icScgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAndHIub2JzZXJ2YXRpb25fYnEnIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ21kcC5kZXNpZ25hdGlvbicgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAndHIubW9udGFudCcgfSxcclxuICAgIFxyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCBzZWFyY2hhYmxlOiBmYWxzZSB9LFxyXG5cclxuICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgbmFtZTogJ3RyLmNvZGVfYnEnIH0sXHJcbiAgXSxcclxuICAvLyBkb206ICdsQmZydGlwJyxcclxuICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgLy8gZml4ZWRIZWFkZXI6IHRydWUsXHJcbn0pO1xyXG5cclxuJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG5cclxuJCgnLkNsb3NlQ2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICQoJyNtb3RpZmVNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbn0pO1xyXG5cclxuJCgnLmV4ZWN1dGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgdmlyX3NlbGVjdGVkcyA9IFtdO1xyXG4gIHZhciBpbnB1dFJlbWlzZSA9ICQoJyNpbnB1dFJlbWlzZScpLnZhbCgpO1xyXG4gIHZhciBhbm51bGF0aW9uID0gJCgnI2FubnVsYXRpb24nKS52YWwoKTtcclxuXHJcbiAgJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1UclRyYW5zYWN0aW9uX3Jvd19jaGVja2JveF06Y2hlY2tlZCcpLmVhY2goXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBjaGVja2JveElkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICB2aXJfc2VsZWN0ZWRzLnB1c2goY2hlY2tib3hJZCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZCgndmlyX3NlbGVjdGVkcycsIEpTT04uc3RyaW5naWZ5KHZpcl9zZWxlY3RlZHMpKTtcclxuICBkYXRhLmFwcGVuZCgnaW5wdXRSZW1pc2UnLCBpbnB1dFJlbWlzZSk7XHJcbiAgZGF0YS5hcHBlbmQoJ2FubnVsYXRpb24nLCBhbm51bGF0aW9uKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICBsLnN0YXJ0KCk7XHJcbiAgJCgnLmxhZGRhLWJ1dHRvbicpLmNzcygncGFkZGluZycsICc2cHggNTBweCcpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb2RpZmllcl9tb250YW50X2ZpbmFsJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICBpZiAocmVzdWx0ID09ICdlbXB0eScpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICdWZXVpbGxleiBzZWxlY3Rpb25uZXIgYXUgbW9pbnMgdW4gb3JkcmUgZGUgdmlyZW1lbnQnLFxyXG4gICAgICAgICAgJ1dhcm5pbmcnLFxyXG4gICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5sYWRkYS1idXR0b24nKS5jc3MoJ3BhZGRpbmcnLCAnNnB4IDE4cHgnKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ2VtcHR5IGNhaXNzZScpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXHJcbiAgICAgICAgICBcIlZvdXMgbidhdmV6IHBhcyBjZSBtb250YW50IGRhbnMgdm90cmUgY2Fpc3NlICFcIixcclxuICAgICAgICAgICdFcnJvcicsXHJcbiAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLmxhZGRhLWJ1dHRvbicpLmNzcygncGFkZGluZycsICc2cHggMThweCcpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmIChyZXN1bHQgPT0gJ2VtcHR5IGNhcnRlJykge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIlZvdXMgbidhdmV6IHBhcyBjZSBtb250YW50IGRhbnMgdm90cmUgY2FydGUgIVwiLCAnRXJyb3InLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5sYWRkYS1idXR0b24nKS5jc3MoJ3BhZGRpbmcnLCAnNnB4IDE4cHgnKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ21vdGlmZScpIHtcclxuICAgICAgICAvLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBtb2RhbCBlbGVtZW50XHJcbiAgICAgICAgJCgnI21vdGlmZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHJcbiAgICAgICAgJCgnLmxhZGRhLWJ1dHRvbicpLmNzcygncGFkZGluZycsICc2cHggMThweCcpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAnb2snKSB7XHJcbiAgICAgICAgJCgnLmxhZGRhLWJ1dHRvbicpLmNzcygncGFkZGluZycsICc2cHggMThweCcpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlVGV4dCwgJ3dhcm5pbmcnLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAkKCcuZXhlY3V0ZXJuZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRvdGFsTW9udGFudCA9IDA7XHJcblxyXG4gICAgLy8gT3BlbiB0aGUgbW9kYWxcclxuICAgIC8vIHZhciBjb2RlYnFfc2VsZWN0ZWRzPSAgJChcImlucHV0OmNoZWNrYm94W25hbWU9aWRfdHJhbnNhY3Rpb25dOmNoZWNrZWQ6Zmlyc3RcIikudmFsKCk7XHJcblxyXG4gICAgdmFyIGNvZGVicV9zZWxlY3RlZHMgPSBbXTtcclxuICAgICQoJ2lucHV0OmNoZWNrYm94W25hbWU9aWRfdHJhbnNhY3Rpb25dOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29kZWJxX3NlbGVjdGVkcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGRhdGEuYXBwZW5kKCdjb2RlYnFfc2VsZWN0ZWRzJywgSlNPTi5zdHJpbmdpZnkoY29kZWJxX3NlbGVjdGVkcykpO1xyXG5cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJCgnLmxhZGRhLWJ1dHRvbicpLmNzcygncGFkZGluZycsICc2cHggNTBweCcpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dldF9jb2RlYnFfc2VsZWN0ZWQnKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZSA9PSAndHJhbnNhY3Rpb25zX2NvdW50Jykge1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ3PDqWxlY3Rpb25uZXIgdW5lIHNldWxlIGRlbWFuZGUgIScsICd3YXJuaWcnLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDYwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoJyNleGVjdXRlcm5ldycpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAkKCcubGFkZGEtYnV0dG9uJykuY3NzKCdwYWRkaW5nJywgJzZweCAxOHB4Jyk7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLlRyVHJhbnNhY3Rpb25BcnJheSkge1xyXG4gICAgICAgICAgdmFyIFRyVHJhbnNhY3Rpb25BcnJheSA9IHJlc3BvbnNlLlRyVHJhbnNhY3Rpb25BcnJheTtcclxuXHJcbiAgICAgICAgICAkKCcuYm9keWNvZGVicScpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgdmFyIHRvdGFsU3VtID0gMDtcclxuXHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRyVHJhbnNhY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgdmFyIFRyVHJhbnNhY3Rpb24gPSBUclRyYW5zYWN0aW9uQXJyYXlbaV07XHJcbiAgICAgICAgICAgIC8vIHZhciBjaGVja2JveCA9ICQoYCMke1RyVHJhbnNhY3Rpb24uaWR9YCk7XHJcbiAgICAgICAgICAgIHRvdGFsTW9udGFudCArPSBwYXJzZUZsb2F0KFRyVHJhbnNhY3Rpb24ubW9udGFuKTtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnLmJvZHljb2RlYnEnKS5wcmVwZW5kKGBcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+PGlucHV0IGlkPVwiJHtUclRyYW5zYWN0aW9uLmlkfVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJUclRyYW5zYWN0aW9uX3Jvd19jaGVja2JveFwiIGNoZWNrZWQ+PC90ZD5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPiR7VHJUcmFuc2FjdGlvbi5pZH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj4ke1RyVHJhbnNhY3Rpb24uY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj4ke1RyVHJhbnNhY3Rpb24uY29kZWJxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiIGNsYXNzPVwibW9udGFudFwiPiR7VHJUcmFuc2FjdGlvbi5tb250YW59PC90ZD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGApO1xyXG4gICAgICAgICAgJCgnI3RvdGFsTW9udGFudCcpLnZhbCh0b3RhbE1vbnRhbnQudG9GaXhlZCgyKSk7XHJcbmNvbnNvbGUubG9nKHRvdGFsTW9udGFudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKCcjZXhlY3V0ZXJuZXcnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgJCgnLmxhZGRhLWJ1dHRvbicpLmNzcygncGFkZGluZycsICc2cHggMThweCcpO1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIG1vbnRhbnQgaW4gdGhlIG1vZGFsXHJcbi8vIFVwZGF0ZSB0aGUgdG90YWwgbW9udGFudCBpbiB0aGUgbW9kYWxcclxuICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlVGV4dCwgJ3dhcm5pbmcnLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgJCgnLmV4ZWN1dGVybmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgdmFyIHRvdGFsTW9udGFudCA9IDA7XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2FsY3VsYXRlVG90YWxNb250YW50KCkge1xyXG4gICAgdG90YWxNb250YW50ID0gMDsgLy8gUmVzZXQgdGhlIHRvdGFsIG1vbnRhbnRcclxuICAgIFxyXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGNoZWNrZWQgY2hlY2tib3hlc1xyXG4gICAgJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1UclRyYW5zYWN0aW9uX3Jvd19jaGVja2JveF06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBtb250YW50ID0gcGFyc2VGbG9hdCgkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLm1vbnRhbnQnKS50ZXh0KCkpO1xyXG4gICAgICBpZiAoIWlzTmFOKG1vbnRhbnQpKSB7XHJcbiAgICAgICAgdG90YWxNb250YW50ICs9IG1vbnRhbnQ7IC8vIEFkZCB0aGUgbW9udGFudCB0byB0aGUgdG90YWxNb250YW50XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIG1vbnRhbnQgaW4gdGhlIGlucHV0IGZpZWxkXHJcbiAgICAkKCcjdG90YWxNb250YW50JykudmFsKHRvdGFsTW9udGFudC50b0ZpeGVkKDIpKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbCB0aGUgY2FsY3VsYXRlVG90YWxNb250YW50IGZ1bmN0aW9uIG9uIGRvY3VtZW50IHJlYWR5XHJcbiAgY2FsY3VsYXRlVG90YWxNb250YW50KCk7XHJcblxyXG4gIC8vIEF0dGFjaCBhIGNoYW5nZSBldmVudCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3hlc1xyXG4gICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnaW5wdXQ6Y2hlY2tib3hbbmFtZT1UclRyYW5zYWN0aW9uX3Jvd19jaGVja2JveF0nLCBmdW5jdGlvbigpIHtcclxuICAgIGNhbGN1bGF0ZVRvdGFsTW9udGFudCgpOyAvLyBSZWNhbGN1bGF0ZSB0aGUgdG90YWwgbW9udGFudFxyXG4gIH0pO1xyXG59KTt9KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAkKCcjZXhlY3V0ZXJfZGF0YXRibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgc2VhcmNoaW5nOiBmYWxzZSwgLy8gRW5hYmxlIHNlYXJjaCBiYXJcclxuICAgIHBhZ2luZzogZmFsc2UsIC8vIERpc2FibGUgcGFnaW5hdGlvblxyXG4gICAgYkluZm8gOiBmYWxzZSxcclxuICAgIG9yZGVyaW5nOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcblxyXG4kKCcuYW5udWxlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIHZpcl9zZWxlY3RlZHMgPSBbXTtcclxuICAkKCdpbnB1dDpjaGVja2JveFtuYW1lPWlkX3RyYW5zYWN0aW9uXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2aXJfc2VsZWN0ZWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgfSk7XHJcbiAgLy8gaWYgKHZpcl9zZWxlY3RlZHMubGVuZ3RoIDwgMSkge1xyXG4gIC8vICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgLy8gICAgICdWZXVpbGxleiBzZWxlY3Rpb25uZXIgYXUgbW9pbnMgdW4gb3JkcmUgZGUgdmlyZW1lbnQnLFxyXG4gIC8vICAgICAnV2FybmluZycsXHJcbiAgLy8gICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgLy8gICApO1xyXG4gIC8vICAgcmV0dXJuO1xyXG4gIC8vIH1cclxuICAkKCcjdmlybWVudF9hbm51bGVyJykubW9kYWwoJ3Nob3cnKTtcclxufSk7XHJcbiQoJy5zYXZlX2FubnVsYXRpb24nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIHZpcl9zZWxlY3RlZHMgPSBbXTtcclxuICAkKCdpbnB1dDpjaGVja2JveFtuYW1lPWlkX3RyYW5zYWN0aW9uXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2aXJfc2VsZWN0ZWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgIHZhciAgIGNvZGVDaHEgPSAkKCBcIiNDaGVxdWVJbXBheWVcIiApLnZhbCgpLnRyaW0oKTtcclxuICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICBkYXRhLmFwcGVuZCgndmlyX3NlbGVjdGVkcycsIEpTT04uc3RyaW5naWZ5KHZpcl9zZWxlY3RlZHMpKTtcclxuICBkYXRhLmFwcGVuZCgnY29kZUNocScsIEpTT04uc3RyaW5naWZ5KGNvZGVDaHEpKTtcclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICBsLnN0YXJ0KCk7XHJcbiAgLy8gJCgnLmxhZGRhLWJ1dHRvbicpLmNzcygncGFkZGluZycsJzZweCA1MHB4Jyk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FubnVsYXRpb25fdmlyZW1lbnQnKSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0IHJldXNzaScpO1xyXG4gICAgICBpZiAocmVzdWx0ID09ICdvaycpIHtcclxuICAgICAgICAkKCcubGFkZGEtYnV0dG9uJykuY3NzKCdwYWRkaW5nJywgJzZweCAxOHB4Jyk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9ZWxzZSBpZiAocmVzdWx0ID09ICdhbHJlYWR5Q2hlcXVlSW1wYXllJykge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcclxuICAgICAgICAgIFwiZMOpasOgIENoZWNrIEltcGF5ZSAhXCIsXHJcbiAgICAgICAgICAnRXJyb3InLFxyXG4gICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5sYWRkYS1idXR0b24nKS5jc3MoJ3BhZGRpbmcnLCAnNnB4IDE4cHgnKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gJ2VtcHR5Jykge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcclxuICAgICAgICAgIFwiRW50cmUgY29kZSBvciBTZWxlY3QgICFcIixcclxuICAgICAgICAgICdFcnJvcicsXHJcbiAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLmxhZGRhLWJ1dHRvbicpLmNzcygncGFkZGluZycsICc2cHggMThweCcpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAnTm90Q2hlcXVlJykge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcclxuICAgICAgICAgIFwibW9kZSBkZSBwYWllbWVudCBuJ2VzdCBwYXMgQ2hlcXVlICAhXCIsXHJcbiAgICAgICAgICAnRXJyb3InLFxyXG4gICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQoJy5sYWRkYS1idXR0b24nKS5jc3MoJ3BhZGRpbmcnLCAnNnB4IDE4cHgnKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgfSBcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZVRleHQsICdXYXJuaW5nJywgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5pbXByaW1lX2RvY3VtZW50JywgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKCQodGhpcykuYXR0cignZGF0YS12YWxpZGUnKSA9PSAwKSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJpbXBvc3NpYmxlIGQnaW1wcmltZXIgbGUgZG9jdW1lbnQsIG1hbnF1ZSBkZSBzaWduYXR1cmUhXCIsXHJcbiAgICAgICdFcnJldXInLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgd2luZG93Lm9wZW4oJCh0aGlzKS5hdHRyKCdocmVmJyksICdfYmxhbmsnKTtcclxufSk7XHJcbnZhciBjb2RlQnE7XHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmNoZXF1ZU1vZGVsJywgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKCQodGhpcykuYXR0cignZGF0YS12YWxpZGUnKSA9PSAwKSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJpbXBvc3NpYmxlIGQnaW1wcmltZXIgbGUgZG9jdW1lbnQsIG1hbnF1ZSBkZSBzaWduYXR1cmUhXCIsXHJcbiAgICAgICdFcnJldXInLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29kZUJxID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gICQoJy5jaGVxdWVfbm9ybWFsJykuYXR0cihcclxuICAgICdocmVmJyxcclxuICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ3BkZkRvd25sb2FkJywgeyBjb2RlX2JxOiBjb2RlQnEgfSlcclxuICApO1xyXG4gICQoJy5jaGVxdWVfcGh5c2lxdWUnKS5hdHRyKFxyXG4gICAgJ2hyZWYnLFxyXG4gICAgUm91dGluZy5nZW5lcmF0ZSgncGRmRG93bmxvYWRDaGVxdWUnLCB7IGNvZGVfYnE6IGNvZGVCcSB9KVxyXG4gICk7XHJcbiAgJCgnI21vZGFsVHlwZUNoZXF1ZScpLnNob3coKTtcclxuICAvLyAkLmFqYXgoe1xyXG4gIC8vICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgLy8gICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndmlyZW1lbnRfZ2V0X2NoZXF1ZV9kZXRhaWxzJyksXHJcbiAgLy8gICAgIGRhdGE6IGRhdGEsXHJcbiAgLy8gICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAvLyAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAvLyAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rlc3QgcmV1c3NpJyk7XHJcblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgLy8gICAgICAgICB0b2FzdHIud2FybmluZygnJywgJ1dhcm5pbmcnLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyB9KTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmNoZXF1ZV9ub3JtYWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2NoZWNrX2NoZXF1ZV9pbXBheWUnLCB7IGNvZGVfYnE6IGNvZGVCcSB9KSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdCA9PSAnb2snKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oUm91dGluZy5nZW5lcmF0ZSgncGRmX2NoZXF1ZV9pbXBheWUnLCB7IGNvZGVfYnE6IGNvZGVCcSB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuY2xvc2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICQoJyNtb2RhbFR5cGVDaGVxdWUnKS5oaWRlKCk7XHJcbn0pO1xyXG5cclxuJCgnLnNhdmVfYWNxdWlzZScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICB2YXIgdmlyX3NlbGVjdGVkcyA9IFtdO1xyXG4gICQoJ2lucHV0OmNoZWNrYm94W25hbWU9aWRfdHJhbnNhY3Rpb25dOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZpcl9zZWxlY3RlZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICB9KTtcclxuXHJcbiAgZGF0YS5hcHBlbmQoJ3Zpcl9zZWxlY3RlZHMnLCBKU09OLnN0cmluZ2lmeSh2aXJfc2VsZWN0ZWRzKSk7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgbC5zdGFydCgpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0cl90cmFuc2FjdGlvbl9hY3F1aXNlJyksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndGVzdCByZXVzc2knKTtcclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ0JpZW4gZW5yZWdpc3RyZXInLCAnRXJyb3InLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VUZXh0LCAnd2FybmluZycsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHZpcl9zZWxlY3RlZHMpO1xyXG4gIC8vIGFsZXJ0KCd6aWtvJyk7XHJcbn0pO1xyXG5cclxubGV0IGdhaW5fcGVydGVfY29kZV9icTtcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuZ2Fpbl9wZXJ0ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGdhaW5fcGVydGVfY29kZV9icSA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICQoJyNnYWluX3BlcnRlX21vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxufSk7XHJcblxyXG4kKCcuc2F2ZV9nYWluX3BlcnRlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gIGwuc3RhcnQoKTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6ICdQT1NUJyxcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfdHJhbnNhY3Rpb25fZ2Fpbl9wZXJ0ZScsIHtcclxuICAgICAgY29kZUJxOiBnYWluX3BlcnRlX2NvZGVfYnEsXHJcbiAgICB9KSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0IHJldXNzaScpO1xyXG4gICAgICB0b2FzdHIuc3VjY2VzcygnQmllbiBlbnJlZ2lzdHJlcicsICdFcnJvcicsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZVRleHQsICd3YXJuaW5nJywgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2codmlyX3NlbGVjdGVkcyk7XHJcbiAgLy8gYWxlcnQoJ3ppa28nKTtcclxufSk7XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgSVRFUkFUT1IgPSBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHlcbiAgLy8gTVMgRWRnZSAxOC0gYnJva2VuIHdpdGggYm94ZWQgc3ltYm9sc1xuICB8fCAoSVRFUkFUT1IgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHsgJHBhcnNlRmxvYXQoT2JqZWN0KElURVJBVE9SKSk7IH0pKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0odG9TdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiBjaGFyQXQodHJpbW1lZFN0cmluZywgMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoY291bnQpO1xuICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkgdGhyb3cgJFJhbmdlRXJyb3IoJ1dyb25nIG51bWJlciBvZiByZXBldGl0aW9ucycpO1xuICBmb3IgKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzdWx0ICs9IHN0cjtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcbnZhciAkcmVwZWF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIHJlcGVhdCA9IHVuY3VycnlUaGlzKCRyZXBlYXQpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIG5hdGl2ZVRvRml4ZWQgPSB1bmN1cnJ5VGhpcygxLjAudG9GaXhlZCk7XG5cbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG5cbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgbiA9IDA7XG4gIHZhciB4MiA9IHg7XG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgbiArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG52YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAoZGF0YSwgbiwgYykge1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGMyID0gYztcbiAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgYzIgKz0gbiAqIGRhdGFbaW5kZXhdO1xuICAgIGRhdGFbaW5kZXhdID0gYzIgJSAxZTc7XG4gICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gIH1cbn07XG5cbnZhciBkaXZpZGUgPSBmdW5jdGlvbiAoZGF0YSwgbikge1xuICB2YXIgaW5kZXggPSA2O1xuICB2YXIgYyA9IDA7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBjICs9IGRhdGFbaW5kZXhdO1xuICAgIGRhdGFbaW5kZXhdID0gZmxvb3IoYyAvIG4pO1xuICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICB9XG59O1xuXG52YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIHMgPSAnJztcbiAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgdmFyIHQgPSAkU3RyaW5nKGRhdGFbaW5kZXhdKTtcbiAgICAgIHMgPSBzID09PSAnJyA/IHQgOiBzICsgcmVwZWF0KCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgfVxuICB9IHJldHVybiBzO1xufTtcblxudmFyIEZPUkNFRCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5hdGl2ZVRvRml4ZWQoMC4wMDAwOCwgMykgIT09ICcwLjAwMCcgfHxcbiAgICBuYXRpdmVUb0ZpeGVkKDAuOSwgMCkgIT09ICcxJyB8fFxuICAgIG5hdGl2ZVRvRml4ZWQoMS4yNTUsIDIpICE9PSAnMS4yNScgfHxcbiAgICBuYXRpdmVUb0ZpeGVkKDEwMDAwMDAwMDAwMDAwMDAxMjguMCwgMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4Jztcbn0pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gIG5hdGl2ZVRvRml4ZWQoe30pO1xufSk7XG5cbi8vIGBOdW1iZXIucHJvdG90eXBlLnRvRml4ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1udW1iZXIucHJvdG90eXBlLnRvZml4ZWRcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICB0b0ZpeGVkOiBmdW5jdGlvbiB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKSB7XG4gICAgdmFyIG51bWJlciA9IHRoaXNOdW1iZXJWYWx1ZSh0aGlzKTtcbiAgICB2YXIgZnJhY3REaWdpdHMgPSB0b0ludGVnZXJPckluZmluaXR5KGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgc2lnbiA9ICcnO1xuICAgIHZhciByZXN1bHQgPSAnMCc7XG4gICAgdmFyIGUsIHosIGosIGs7XG5cbiAgICAvLyBUT0RPOiBFUzIwMTggaW5jcmVhc2VkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBmcmFjdGlvbiBkaWdpdHMgdG8gMTAwLCBuZWVkIHRvIGltcHJvdmUgdGhlIGltcGxlbWVudGF0aW9uXG4gICAgaWYgKGZyYWN0RGlnaXRzIDwgMCB8fCBmcmFjdERpZ2l0cyA+IDIwKSB0aHJvdyAkUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKG51bWJlciAhPSBudW1iZXIpIHJldHVybiAnTmFOJztcbiAgICBpZiAobnVtYmVyIDw9IC0xZTIxIHx8IG51bWJlciA+PSAxZTIxKSByZXR1cm4gJFN0cmluZyhudW1iZXIpO1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICBzaWduID0gJy0nO1xuICAgICAgbnVtYmVyID0gLW51bWJlcjtcbiAgICB9XG4gICAgaWYgKG51bWJlciA+IDFlLTIxKSB7XG4gICAgICBlID0gbG9nKG51bWJlciAqIHBvdygyLCA2OSwgMSkpIC0gNjk7XG4gICAgICB6ID0gZSA8IDAgPyBudW1iZXIgKiBwb3coMiwgLWUsIDEpIDogbnVtYmVyIC8gcG93KDIsIGUsIDEpO1xuICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xuICAgICAgZSA9IDUyIC0gZTtcbiAgICAgIGlmIChlID4gMCkge1xuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcbiAgICAgICAgaiA9IGZyYWN0RGlnaXRzO1xuICAgICAgICB3aGlsZSAoaiA+PSA3KSB7XG4gICAgICAgICAgbXVsdGlwbHkoZGF0YSwgMWU3LCAwKTtcbiAgICAgICAgICBqIC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgcG93KDEwLCBqLCAxKSwgMCk7XG4gICAgICAgIGogPSBlIC0gMTtcbiAgICAgICAgd2hpbGUgKGogPj0gMjMpIHtcbiAgICAgICAgICBkaXZpZGUoZGF0YSwgMSA8PCAyMyk7XG4gICAgICAgICAgaiAtPSAyMztcbiAgICAgICAgfVxuICAgICAgICBkaXZpZGUoZGF0YSwgMSA8PCBqKTtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMSwgMSk7XG4gICAgICAgIGRpdmlkZShkYXRhLCAyKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEgPDwgLWUsIDApO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoZGF0YSkgKyByZXBlYXQoJzAnLCBmcmFjdERpZ2l0cyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmcmFjdERpZ2l0cyA+IDApIHtcbiAgICAgIGsgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gc2lnbiArIChrIDw9IGZyYWN0RGlnaXRzXG4gICAgICAgID8gJzAuJyArIHJlcGVhdCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcbiAgICAgICAgOiBzdHJpbmdTbGljZShyZXN1bHQsIDAsIGsgLSBmcmFjdERpZ2l0cykgKyAnLicgKyBzdHJpbmdTbGljZShyZXN1bHQsIGsgLSBmcmFjdERpZ2l0cykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBzaWduICsgcmVzdWx0O1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQnKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0IH0sIHtcbiAgcGFyc2VGbG9hdDogJHBhcnNlRmxvYXRcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==