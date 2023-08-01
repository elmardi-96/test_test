(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ucategoriearticle"],{

/***/ "./assets/js/components/parametrage/ucategoriearticle.js":
/*!***************************************************************!*\
  !*** ./assets/js/components/parametrage/ucategoriearticle.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");


var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.setRoutingData(routes);

var blueimp = __webpack_require__(/*! ../../plugins/blueimp-gallery/js/jquery.blueimp-gallery.min */ "./assets/js/plugins/blueimp-gallery/js/jquery.blueimp-gallery.min.js");
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
jQuery(document).ready(function () {
  jQuery('.add-another-collection-widget').click(function (e) {
    var list = jQuery(jQuery(this).attr('data-list-selector'));
    // Try to find the counter of the list or use the length of the list
    var counter = list.data('widget-counter') || list.children().length;

    // grab the prototype template
    var newWidget = list.attr('data-prototype');
    // replace the "__name__" used in the id and name of the prototype
    // with a number that's unique to your emails
    // end name attribute looks like name="contact[emails][2]"
    newWidget = newWidget.replace(/__name__/g, counter);
    // Increase the counter
    counter++;
    // And store it, the length cannot be used if deleting widgets is allowed
    list.data('widget-counter', counter);

    // create a new list element and add it to the list
    var newElem = jQuery(list.attr('data-widget-tags')).html(newWidget);
    newElem.appendTo(list);
  });
});
$('.new').on('submit', '.form', function (e) {
  //alert();
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.activeElement);

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // console.log(e.type);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('stock_categorie_insert'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        // console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('stock_category_edit', {
          'id': result.data
        });
        window.location.href = url;
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('stock_categorie_list'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "orderable": false,
    "width": "5%",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "25%"
  }, {
    "orderable": false,
    "width": "25%"
  }, {
    "orderable": false,
    "width": "25%"
  }, {
    "orderable": false,
    "width": "25%"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('datatables_langue'),
    "processing": true
  }
});
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('u_categorie_show', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
$('.edit').on('submit', '.form', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_4__["create"](document.querySelector('.my-button'));

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('stock_category_update', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $('.errors-list').remove();
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_3__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});
$('#_delete_categorie').click(function (e) {
  /*var l = Ladda.create(document.querySelector('.my-button'));
    // Start loading
      l.start();*/
  //var id = table.row('.selected').id();
  var id = $(this).attr("data-id");
  //alert(id)
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('stock_category_delete', {
            'id': id
          }),
          success: function success(result) {
            console.log(result);
            if (result.code == 200) {
              //l.stop();
              table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('stock_categorie_index');
              window.location.href = url;
            } else if (result.code == 403) {
              //l.stop();
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            l.stop();
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS;
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ })

},[["./assets/js/components/parametrage/ucategoriearticle.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4",2,7,"profil~test~uarticle~ucategoriearticle"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS91Y2F0ZWdvcmllYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJibHVlaW1wIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJlIiwibGlzdCIsImF0dHIiLCJjb3VudGVyIiwiZGF0YSIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3V2lkZ2V0IiwicmVwbGFjZSIsIm5ld0VsZW0iLCJodG1sIiwiYXBwZW5kVG8iLCIkIiwib24iLCJsIiwiTGFkZGEiLCJhY3RpdmVFbGVtZW50Iiwic3RhcnQiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJnZW5lcmF0ZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiZXJyb3JzIiwic3RvcCIsIlNob3dGb3JtRXJyb3JzIiwiZW1wdHkiLCJ0b2FzdHIiLCJ3YXJuaW5nIiwibWVzc2FnZSIsInRleHQiLCJ0aXRsZSIsInRpbWVPdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidGFibGUiLCJEYXRhVGFibGUiLCJkb20iLCJidXR0b25zIiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsInJlbG9hZCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJnZXQiLCJyZW1vdmUiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwidmFsdWUiLCJjb2RlIiwicmVzcG9uc2VKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDN0dDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBQ21DO0FBQ2pFLElBQU1JLE9BQU8sR0FBR0gsbUJBQU8sQ0FBQyx5SUFBNkQsQ0FBQztBQUN0RixJQUFNSSxJQUFJLEdBQUdKLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNKO0FBQy9CLElBQU1LLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FB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bUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsMkJBQTJCLG1CQUFPLENBQUMscUZBQTRCO0FBQy9ELGtCQUFrQixtQkFBTyxDQUFDLHFHQUFvQztBQUM5RCxxQkFBcUIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3hCQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLDJGQUErQjs7QUFFdkQ7QUFDQTtBQUNBLEdBQUcsOENBQThDO0FBQ2pEO0FBQ0EsQ0FBQyIsImZpbGUiOiJ1Y2F0ZWdvcmllYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcbmNvbnN0IGJsdWVpbXAgPSByZXF1aXJlKCcuLi8uLi9wbHVnaW5zL2JsdWVpbXAtZ2FsbGVyeS9qcy9qcXVlcnkuYmx1ZWltcC1nYWxsZXJ5Lm1pbicpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgalF1ZXJ5KCcuYWRkLWFub3RoZXItY29sbGVjdGlvbi13aWRnZXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBsaXN0ID0galF1ZXJ5KGpRdWVyeSh0aGlzKS5hdHRyKCdkYXRhLWxpc3Qtc2VsZWN0b3InKSk7XHJcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvdW50ZXIgb2YgdGhlIGxpc3Qgb3IgdXNlIHRoZSBsZW5ndGggb2YgdGhlIGxpc3RcclxuICAgICAgICB2YXIgY291bnRlciA9IGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXInKSB8fCBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICAvLyBncmFiIHRoZSBwcm90b3R5cGUgdGVtcGxhdGVcclxuICAgICAgICB2YXIgbmV3V2lkZ2V0ID0gbGlzdC5hdHRyKCdkYXRhLXByb3RvdHlwZScpO1xyXG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIFwiX19uYW1lX19cIiB1c2VkIGluIHRoZSBpZCBhbmQgbmFtZSBvZiB0aGUgcHJvdG90eXBlXHJcbiAgICAgICAgLy8gd2l0aCBhIG51bWJlciB0aGF0J3MgdW5pcXVlIHRvIHlvdXIgZW1haWxzXHJcbiAgICAgICAgLy8gZW5kIG5hbWUgYXR0cmlidXRlIGxvb2tzIGxpa2UgbmFtZT1cImNvbnRhY3RbZW1haWxzXVsyXVwiXHJcbiAgICAgICAgbmV3V2lkZ2V0ID0gbmV3V2lkZ2V0LnJlcGxhY2UoL19fbmFtZV9fL2csIGNvdW50ZXIpO1xyXG4gICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXHJcbiAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIC8vIEFuZCBzdG9yZSBpdCwgdGhlIGxlbmd0aCBjYW5ub3QgYmUgdXNlZCBpZiBkZWxldGluZyB3aWRnZXRzIGlzIGFsbG93ZWRcclxuICAgICAgICBsaXN0LmRhdGEoJ3dpZGdldC1jb3VudGVyJywgY291bnRlcik7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBsaXN0IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgIHZhciBuZXdFbGVtID0galF1ZXJ5KGxpc3QuYXR0cignZGF0YS13aWRnZXQtdGFncycpKS5odG1sKG5ld1dpZGdldCk7XHJcbiAgICAgICAgbmV3RWxlbS5hcHBlbmRUbyhsaXN0KTtcclxuICAgIH0pO1xyXG59KTtcclxuJCgnLm5ldycpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfY2F0ZWdvcmllX2luc2VydCcpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX2NhdGVnb3J5X2VkaXQnLCB7J2lkJzogcmVzdWx0LmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfY2F0ZWdvcmllX2xpc3QnKSxcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIC0xXSwgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG4gICAgXCJwYWdlTGVuZ3RoXCI6IDE1LFxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCI1JVwiLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ0YXJnZXRzXCI6IFswXX0sXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIyNSVcIn0sXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMjUlXCJ9LCBcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIyNSVcIn0sXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMjUlXCJ9LCBcclxuICAgIF0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxufSk7XHJcblxyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICcuY2Rfb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndV9jYXRlZ29yaWVfc2hvdycsIHsnaWQnOiAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKX0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1idXR0b24nKSk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX2NhdGVnb3J5X3VwZGF0ZScsIHtpZDogaWR9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNfZGVsZXRlX2NhdGVnb3JpZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvKnZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1idXR0b24nKSk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTsqL1xyXG4gICAgLy92YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgLy9hbGVydChpZClcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfY2F0ZWdvcnlfZGVsZXRlJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2wuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfY2F0ZWdvcmllX2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBJVEVSQVRPUiA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgaGV4ID0gL15bKy1dPzB4L2k7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKGhleC5leGVjKTtcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMlxuICAvLyBNUyBFZGdlIDE4LSBicm9rZW4gd2l0aCBib3hlZCBzeW1ib2xzXG4gIHx8IChJVEVSQVRPUiAmJiAhZmFpbHMoZnVuY3Rpb24gKCkgeyAkcGFyc2VJbnQoT2JqZWN0KElURVJBVE9SKSk7IH0pKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGV4ZWMoaGV4LCBTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gcmVwbGFjZShzdHJpbmcsIGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSByZXBsYWNlKHN0cmluZywgcnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsInZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG4gIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDInICtcbiAgJ1xcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZURhdGVUb1N0cmluZyA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXSk7XG52YXIgdGhpc1RpbWVWYWx1ZSA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VGltZSk7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9IElOVkFMSURfREFURSkge1xuICBkZWZpbmVCdWlsdEluKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpc1RpbWVWYWx1ZSh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyBuYXRpdmVEYXRlVG9TdHJpbmcodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgRlVOQ1RJT05fTkFNRV9FWElTVFMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkVYSVNUUztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZyk7XG52YXIgbmFtZVJFID0gL2Z1bmN0aW9uXFxiKD86XFxzfFxcL1xcKltcXFNcXHNdKj9cXCpcXC98XFwvXFwvW15cXG5cXHJdKltcXG5cXHJdKykqKFteXFxzKC9dKikvO1xudmFyIHJlZ0V4cEV4ZWMgPSB1bmN1cnJ5VGhpcyhuYW1lUkUuZXhlYyk7XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhRlVOQ1RJT05fTkFNRV9FWElTVFMpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcmVnRXhwRXhlYyhuYW1lUkUsIGZ1bmN0aW9uVG9TdHJpbmcodGhpcykpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gJHBhcnNlSW50IH0sIHtcbiAgcGFyc2VJbnQ6ICRwYXJzZUludFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9