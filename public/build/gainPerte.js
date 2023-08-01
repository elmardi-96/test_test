(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gainPerte"],{

/***/ "./assets/js/components/tresorerie/gainPerte.js":
/*!******************************************************!*\
  !*** ./assets/js/components/tresorerie/gainPerte.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_13__);







var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");





_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.setRoutingData(routes);
var devise = [];
$("body").on('keypress', '#code_o_paiment', function (e) {
  var code_o_paiment = $(this).val();
  if (e.which == 13) {
    // alert(typePiece, idPiece)
    if (code_o_paiment == "") {
      toastr.warning("Warning", "Veuillez remplir les champs!", {
        timeOut: 4000
      });
      return;
    }
    // var l = Ladda.create(document.activeElement);
    // Start loading
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate("gain_perte_devise", {
        "code_o_paiment": code_o_paiment.trim()
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        $("#my_div_action").html(result["html"]);
        devise['id'] = result["data"]["id"];
        devise['montant'] = result["data"]["montant"];
        $('#ModaDetailDevise').modal('show');
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", jqXHR.responseText, {
          timeOut: 4000
        });
        $("#my_div_action").html('');

        // if(!$("#Enregistrer_mt_devise").hasClass("disabled")){
        //     $("#Enregistrer_mt_devise").addClass("disabled")
        // }
      }
    });
  }
});

$("body").on('keyup', '#mt_relve', function (e) {
  $(this).val($(this).val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, ''));
  var montant_Relve = $(this).val();
  var montant_def = devise['montant'] - montant_Relve;
  if (montant_Relve && devise['montant']) {
    var html = "  <div class=\"hr-line-dashed\"></div>       \n                    <div class=\"form-group row\">\n                            <label class=\"col-sm-12 \">montant releve</label>\n                            <div class=\"hr-line-dashed\"></div>\n                            <div class=\"col-sm-12 \" id=\"\" >\n                            ".concat(montant_def.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), "\n                            </div>\n                        </div>\n                        \n                        <div class=\"hr-line-dashed\"></div>\n                ");
    $("#calcul").html(html);
    $(".btn-register").removeClass("disabled");
  } else {
    $("#calcul").html('');
    $(".btn-register").addClass("disabled");
  }
});
$("body").on('click', '#Enregistrer_mt_devise', function (e) {
  var mtRelve = $("#mt_relve").val();
  var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".my-button2"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate("enregistrer_gain_perte_devise"),
    data: {
      id_transaction: devise['id'],
      mt_relve: mtRelve
    },
    // processData: false,
    // contentType: false,
    success: function success(result) {
      toastr.success("Success", "Le virement a ete généré avec succès", {
        timeOut: 4000
      });
      $("#Enregistrer_mt_devise").addClass("disabled");
      $('#ModaDetailDevise').modal('hide');
      devise.length = 0;
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", jqXHR.responseText, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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


/***/ })

},[["./assets/js/components/tresorerie/gainPerte.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL2dhaW5QZXJ0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZGV2aXNlIiwiJCIsIm9uIiwiZSIsImNvZGVfb19wYWltZW50IiwidmFsIiwid2hpY2giLCJ0b2FzdHIiLCJ3YXJuaW5nIiwidGltZU91dCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZ2VuZXJhdGUiLCJ0cmltIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJodG1sIiwibW9kYWwiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmVzcG9uc2VUZXh0IiwicmVwbGFjZSIsIm1vbnRhbnRfUmVsdmUiLCJtb250YW50X2RlZiIsInRvRml4ZWQiLCJ0b1N0cmluZyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJtdFJlbHZlIiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnQiLCJkYXRhIiwiaWRfdHJhbnNhY3Rpb24iLCJtdF9yZWx2ZSIsImxlbmd0aCIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3ZEO0FBQ3REQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDakI7QUFDdkM7QUFFakNDLGtIQUFPLENBQUNDLGNBQWMsQ0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMiLCJmaWxlIjoiZ2FpblBlcnRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanMnO1xyXG5yZXF1aXJlKCcuLi8uLi9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanMnKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSAndG9hc3RyJztcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmNvbnN0ICBkZXZpc2UgPSBbXTtcclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbigna2V5cHJlc3MnLCAnI2NvZGVfb19wYWltZW50JywgZnVuY3Rpb24oZSkge1xyXG4gICAgbGV0IGNvZGVfb19wYWltZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGlmKGUud2hpY2ggPT0gMTMpICB7XHJcbiAgICAgICAgLy8gYWxlcnQodHlwZVBpZWNlLCBpZFBpZWNlKVxyXG4gICAgICAgIGlmKGNvZGVfb19wYWltZW50ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJnYWluX3BlcnRlX2RldmlzZVwiLCB7XCJjb2RlX29fcGFpbWVudFwiOiBjb2RlX29fcGFpbWVudC50cmltKCl9KSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI215X2Rpdl9hY3Rpb25cIikuaHRtbChyZXN1bHRbXCJodG1sXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZXZpc2VbJ2lkJ109IHJlc3VsdFtcImRhdGFcIl1bXCJpZFwiXVxyXG4gICAgICAgICAgICAgICAgICAgIGRldmlzZVsnbW9udGFudCddPSByZXN1bHRbXCJkYXRhXCJdW1wibW9udGFudFwiXVxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNNb2RhRGV0YWlsRGV2aXNlJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGpxWEhSLnJlc3BvbnNlVGV4dCwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIjbXlfZGl2X2FjdGlvblwiKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZighJChcIiNFbnJlZ2lzdHJlcl9tdF9kZXZpc2VcIikuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgJChcIiNFbnJlZ2lzdHJlcl9tdF9kZXZpc2VcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG59KVxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKCdrZXl1cCcsICcjbXRfcmVsdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9bXjAtOS5dL2csICcnKS5yZXBsYWNlKC8oXFwuLio/KVxcLi4qL2csICcnKSlcclxuICAgIGxldCBtb250YW50X1JlbHZlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHZhciBtb250YW50X2RlZj0gZGV2aXNlWydtb250YW50J10tbW9udGFudF9SZWx2ZVxyXG5cclxuICAgIGlmKG1vbnRhbnRfUmVsdmUgJiYgZGV2aXNlWydtb250YW50J10pICB7XHJcbiAgICAgICAgdmFyIGh0bWw9YCAgPGRpdiBjbGFzcz1cImhyLWxpbmUtZGFzaGVkXCI+PC9kaXY+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyIFwiPm1vbnRhbnQgcmVsZXZlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoci1saW5lLWRhc2hlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBcIiBpZD1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bW9udGFudF9kZWYudG9GaXhlZCgyKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoci1saW5lLWRhc2hlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgJChcIiNjYWxjdWxcIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiLmJ0bi1yZWdpc3RlclwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAkKFwiI2NhbGN1bFwiKS5odG1sKCcnKTtcclxuICAgICAgICAkKFwiLmJ0bi1yZWdpc3RlclwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpXHJcbiAgICB9XHJcbiAgXHJcbn0pXHJcblxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnI0VucmVnaXN0cmVyX210X2RldmlzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCBtdFJlbHZlID0gJChcIiNtdF9yZWx2ZVwiKS52YWwoKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVucmVnaXN0cmVyX2dhaW5fcGVydGVfZGV2aXNlXCIpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZF90cmFuc2FjdGlvbiA6IGRldmlzZVsnaWQnXSxcclxuICAgICAgICAgICAgICAgIG10X3JlbHZlOiBtdFJlbHZlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzXCIsIFwiTGUgdmlyZW1lbnQgYSBldGUgZ8OpbsOpcsOpIGF2ZWMgc3VjY8Ooc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICQoXCIjRW5yZWdpc3RyZXJfbXRfZGV2aXNlXCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIikgIFxyXG4gICAgICAgICAgICAgICQoJyNNb2RhRGV0YWlsRGV2aXNlJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICBkZXZpc2UubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBqcVhIUi5yZXNwb25zZVRleHQsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gIFxyXG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGVhdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyAkUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXN1bHQgKz0gc3RyO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xudmFyICRyZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgcmVwZWF0ID0gdW5jdXJyeVRoaXMoJHJlcGVhdCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgbmF0aXZlVG9GaXhlZCA9IHVuY3VycnlUaGlzKDEuMC50b0ZpeGVkKTtcblxudmFyIHBvdyA9IGZ1bmN0aW9uICh4LCBuLCBhY2MpIHtcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xufTtcblxudmFyIGxvZyA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciBuID0gMDtcbiAgdmFyIHgyID0geDtcbiAgd2hpbGUgKHgyID49IDQwOTYpIHtcbiAgICBuICs9IDEyO1xuICAgIHgyIC89IDQwOTY7XG4gIH1cbiAgd2hpbGUgKHgyID49IDIpIHtcbiAgICBuICs9IDE7XG4gICAgeDIgLz0gMjtcbiAgfSByZXR1cm4gbjtcbn07XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChkYXRhLCBuLCBjKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgYzIgPSBjO1xuICB3aGlsZSAoKytpbmRleCA8IDYpIHtcbiAgICBjMiArPSBuICogZGF0YVtpbmRleF07XG4gICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcbiAgfVxufTtcblxudmFyIGRpdmlkZSA9IGZ1bmN0aW9uIChkYXRhLCBuKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBjID0gMDtcbiAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgIGMgKz0gZGF0YVtpbmRleF07XG4gICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgYyA9IChjICUgbikgKiAxZTc7XG4gIH1cbn07XG5cbnZhciBkYXRhVG9TdHJpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgaW5kZXggPSA2O1xuICB2YXIgcyA9ICcnO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgaWYgKHMgIT09ICcnIHx8IGluZGV4ID09PSAwIHx8IGRhdGFbaW5kZXhdICE9PSAwKSB7XG4gICAgICB2YXIgdCA9ICRTdHJpbmcoZGF0YVtpbmRleF0pO1xuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQoJzAnLCA3IC0gdC5sZW5ndGgpICsgdDtcbiAgICB9XG4gIH0gcmV0dXJuIHM7XG59O1xuXG52YXIgRk9SQ0VEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlVG9GaXhlZCgwLjAwMDA4LCAzKSAhPT0gJzAuMDAwJyB8fFxuICAgIG5hdGl2ZVRvRml4ZWQoMC45LCAwKSAhPT0gJzEnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgxLjI1NSwgMikgIT09ICcxLjI1JyB8fFxuICAgIG5hdGl2ZVRvRml4ZWQoMTAwMDAwMDAwMDAwMDAwMDEyOC4wLCAwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgbmF0aXZlVG9GaXhlZCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5wcm90b3R5cGUudG9maXhlZFxuJCh7IHRhcmdldDogJ051bWJlcicsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xuICAgIHZhciBmcmFjdERpZ2l0cyA9IHRvSW50ZWdlck9ySW5maW5pdHkoZnJhY3Rpb25EaWdpdHMpO1xuICAgIHZhciBkYXRhID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIHZhciBzaWduID0gJyc7XG4gICAgdmFyIHJlc3VsdCA9ICcwJztcbiAgICB2YXIgZSwgeiwgaiwgaztcblxuICAgIC8vIFRPRE86IEVTMjAxOCBpbmNyZWFzZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIGZyYWN0aW9uIGRpZ2l0cyB0byAxMDAsIG5lZWQgdG8gaW1wcm92ZSB0aGUgaW1wbGVtZW50YXRpb25cbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93ICRSYW5nZUVycm9yKCdJbmNvcnJlY3QgZnJhY3Rpb24gZGlnaXRzJyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiAkU3RyaW5nKG51bWJlcik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBqID0gZnJhY3REaWdpdHM7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseShkYXRhLCAxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShkYXRhLCBwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IGopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxLCAxKTtcbiAgICAgICAgZGl2aWRlKGRhdGEsIDIpO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMSA8PCAtZSwgMCk7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKSArIHJlcGVhdCgnMCcsIGZyYWN0RGlnaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaWduICsgKGsgPD0gZnJhY3REaWdpdHNcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMgLSBrKSArIHJlc3VsdFxuICAgICAgICA6IHN0cmluZ1NsaWNlKHJlc3VsdCwgMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHN0cmluZ1NsaWNlKHJlc3VsdCwgayAtIGZyYWN0RGlnaXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=