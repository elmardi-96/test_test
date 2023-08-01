(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uarticle"],{

/***/ "./assets/js/components/parametrage/uarticle.js":
/*!******************************************************!*\
  !*** ./assets/js/components/parametrage/uarticle.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }













var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.setRoutingData(routes);

var blueimp = __webpack_require__(/*! ../../plugins/blueimp-gallery/js/jquery.blueimp-gallery.min */ "./assets/js/plugins/blueimp-gallery/js/jquery.blueimp-gallery.min.js");

var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
//require('./../../plugins/select2/select2-current.js');

$(document).ready(function () {
  $('.js-example-basic-single').select2();
});
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("stock_produit_list2"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  scrollX: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "3%",
    className: 'td-check pd-achat',
    name: 'tab.id'
  }, {
    orderable: true,
    width: "15%",
    className: 'pd-achat',
    name: 'tab.code'
  }, {
    orderable: true,
    width: "25%",
    className: 'pd-achat',
    name: 'tab.titre'
  }, {
    orderable: true,
    width: "25%",
    className: 'td-desciption pd-achat',
    name: 'tab.titre'
  },
  // {orderable: true, width: "10%", name: 'tab.fournisseur'},
  {
    orderable: true,
    width: "10%",
    className: 'td-type pd-achat',
    name: 'tab.prix_achat'
  }, {
    orderable: true,
    width: "10%",
    className: 'td-ht pd-achat',
    name: 'tab.prix_vente'
  }, {
    orderable: false,
    width: "10%",
    className: 'td-tva pd-achat',
    name: 'tab.abreviation'
  }],
  columnDefs: [{
    searchable: false,
    targets: 6
  }, {
    targets: 6,
    className: 'td-ord'
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("datatables_langue"),
    processing: true,
    searchPlaceholder: "RECHERCHER",
    search: ""
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  //   CustomSearchDatatable.CustomSearchText(api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchCheckbox"](api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('u_article_show', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
$('#grid tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('.new').on('submit', '.form', function (e) {
  //alert();
  var l = ladda__WEBPACK_IMPORTED_MODULE_16__["create"](document.activeElement);

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // console.log(e.type);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_insert'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        // console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__["ShowFormErrors"])(selector, form_name, result.errors);
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
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('u_article_show', {
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
$('#_edit').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_edit', {
      'id': id
    });
    window.location.href = url;
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.edit').on('submit', '.form', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_16__["create"](document.activeElement);

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_update', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $('.errors-list').remove();
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});
$('#_delete_produit').click(function (e) {
  //var l = Ladda.create(document.activeElement);

  // Start loading
  // l.start();
  //var id = table.row('.selected').id();
  var id = $(this).attr("data-id");
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_delete', {
            'id': id
          }),
          success: function success(result) {
            console.log(result);
            if (result.code == 200) {
              l.stop();
              table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_index');
              window.location.href = url;
            } else if (result.code == 403) {
              l.stop();
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
$('body').on('submit', '.stock_produit_update_prix_achat', function (e) {
  //  alert();
  var l = ladda__WEBPACK_IMPORTED_MODULE_16__["create"](document.activeElement);

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_update_prix_achat', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        // console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
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
$('body').on('submit', '.stock_produit_update_prix_vente', function (e) {
  //  alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  var l = ladda__WEBPACK_IMPORTED_MODULE_16__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_update_prix_vente', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        // console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
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
$('body').on('submit', '.stock_produit_fichiers', function (e) {
  //  alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  var l = ladda__WEBPACK_IMPORTED_MODULE_16__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_fichiers', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
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
$('._delete_fichier').click(function (e) {
  var id = $(this).attr('id');
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_fichiers_delete', {
            'id': id
          }),
          success: function success(result) {
            console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
$('body').on('submit', '.stock_produit_add_stock', function (e) {
  //  alert();
  var l = ladda__WEBPACK_IMPORTED_MODULE_16__["create"](document.activeElement);

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_add_stock', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
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
$('#_show').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('u_article_show', {
      'id': id
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
$('#_archiver_produit').click(function (e) {
  //  var id = table.row('.selected').id();
  //var l = Ladda.create(document.activeElement);

  // Start loading
  //l.start();
  var id = $(this).attr("data-id");
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment Archiver cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_archiver', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
              l.stop();
              table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
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
function getSubSelect(myclass, myboolean, mycontent, rm) {
  //console.log(mycontent)
  if (rm && myboolean) {
    $(rm).find('option:not(:first)').remove();
    $(rm).prop("disabled", false);
  } else {
    $(rm).prop("disabled", true);
  }
  if (myboolean) {
    $(myclass).prop("disabled", false);
  } else {
    $(myclass).prop("disabled", true);
    $(myclass).parent().find(".select2 .select2-selection__arrow").html('<i class="i-load fa fa-refresh"></i>');
  }
  if (mycontent) {
    var array = myclass.split(",");
    for (var i = 0, l = array.length; i < l; i++) {
      //console.log($(mycontent).find(array[i]));
      $(array[i]).replaceWith($(mycontent).find(array[i]));
    }
  }
}
$(".new , .edit").on("change", ".niveau1", function () {
  //alert()
  getSubSelect(".niveau2", false, "", ".niveau3,.niveau4");
  var $this = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".niveau2").attr("name")] = $(".niveau2").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_choix_niveau', {
      'id': $(this).val() == "" ? -1 : $(this).val(),
      "placeholder": "choix Niveau 2"
    }),
    type: "POST",
    data: data,
    success: function success(result) {
      //   console.log(html);
      $(".niveau2").html(result.data);
      getSubSelect(".niveau2", true, "", ".niveau3,.niveau4");
      $(".sel2").select2();
    }
  });
});
$(".new , .edit").on("change", ".niveau2", function () {
  //alert()
  getSubSelect(".niveau3", false, "", ".niveau4");
  var $this = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".niveau2").attr("name")] = $(".niveau2").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_choix_niveau', {
      'id': $(this).val() == "" ? -1 : $(this).val(),
      "placeholder": "choix Niveau 3"
    }),
    type: "POST",
    data: data,
    success: function success(result) {
      //   console.log(html);
      $(".niveau3").html(result.data);
      getSubSelect(".niveau3", true, "", ".niveau4");
      $(".sel2").select2();
    }
  });
});
$(".new , .edit").on("change", ".niveau3", function () {
  //alert()
  getSubSelect(".niveau4", false, "", "");
  var $this = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".niveau2").attr("name")] = $(".niveau2").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_choix_niveau', {
      'id': $(this).val(),
      "placeholder": "choix Niveau 4"
    }),
    type: "POST",
    data: data,
    success: function success(result) {
      //   console.log(html);
      $(".niveau4").html(result.data);
      getSubSelect(".niveau4", true, "", "");
      $(".sel2").select2();
    }
  });
});
$("body").on("submit", "._fichiers", function (e) {
  //   alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var l = ladda__WEBPACK_IMPORTED_MODULE_16__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("u_article_fichiers", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
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
$("._delete_fichier").click(function (e) {
  var id = $(this).attr("id");
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
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
          type: "DELETE",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("u_article_fichiers_delete", {
            id: id
          }),
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
    toastr.warning("Impossible d'effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("._default_fichier").click(function (e) {
  var id = $(this).attr("id");
  //alert();
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment définir cette image par défaut ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "PUT",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate("u_article_fichiers_default", {
            id: id
          }),
          success: function success(result) {
            if (result.errors) {
              l.stop();
              $(".errors_list").html("");
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_14__["ShowFormErrors"])(selector, form_name, result.errors);
            }
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
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
    toastr.warning("Impossible d'effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('#_import').on("submit", function (e) {
  //alert()  
  var l = ladda__WEBPACK_IMPORTED_MODULE_16__["create"](document.querySelector('.my-button'));
  //    // Start loading
  l.start();
  $('#resultats_import').empty();
  $('.spr').fadeIn();
  e.preventDefault(); //form will not submitted  
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('stock_produit_upload'),
    method: "POST",
    data: new FormData(this),
    contentType: false,
    // The content type used when sending data to the server.  
    cache: false,
    // To unable request pages to be cached  
    processData: false,
    // To send DOMDocument or non processed data file it is set to false  
    success: function success(data) {
      console.log();
      if (data.code == 403) {
        $('#_import')[0].reset();
        $('.spr').hide();
        toastr.warning(data.message.text, data.message.title, {
          timeOut: 5000000
        });
        l.stop();
      } else {
        var _$$DataTable;
        $('#resultats_import').html(data).hide();
        var t;
        t = $(".kt_table_1").DataTable((_$$DataTable = {
          "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
          "pageLength": 15,
          "order": [[0, "asc"]]
        }, _defineProperty(_$$DataTable, "lengthMenu", [5, 10, 25, 50]), _defineProperty(_$$DataTable, "pageLength", 5), _defineProperty(_$$DataTable, "dom", 'f<"html5buttons btn-group"B>lTgtip'), _defineProperty(_$$DataTable, "columns", [{
          "orderable": true,
          "width": "5%",
          "searchable": true,
          "targets": [0]
        }, {
          "orderable": true,
          "width": "10%"
        }, {
          "orderable": true,
          "width": "85%"
        }, {
          "orderable": true,
          "width": "85%"
        }]), _defineProperty(_$$DataTable, "buttons", ['columnsToggle', {
          text: 'Restaurer',
          className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
          action: function action(e, dt, node, config) {
            table.state.clear();
            window.location.reload();
          }
        }]), _defineProperty(_$$DataTable, "language", {
          "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_13___default.a.generate('datatables_langue'),
          "processing": true
        }), _defineProperty(_$$DataTable, "fixedHeader", true), _defineProperty(_$$DataTable, "bFilter", false), _defineProperty(_$$DataTable, "bInfo", false), _$$DataTable));
        t.on('init.dt', function (e, settings) {
          var api = new $.fn.dataTable.Api(settings);
          var st = api.state.loaded();
          var data = api.data();

          //console.log(st);
          //if (st != null) {
          //    $.each(st.columns, function (key, value) {
          //        if (value.search.search != "") {
          //            $('.remove-filter').show();
          //            return false;
          //        }
          //    });
          //}

          _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchText"](api, [0, 1, 2, 3], []);
        });
        $('#_import')[0].reset();
        setTimeout(function () {
          $('.spr').hide();
          $('#resultats_import').fadeIn();
          l.stop();
        }, 600);
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      $('.spr').hide();
      l.stop();
      console.log(jqXHR.responseText);
      $('#resultats_import').html(jqXHR.responseText);
      toastr.warning("Impossible de traiter un fichier n'est pas organiser", "Error", {
        timeOut: 4000
      });
    }
  });
});
var tableShow3 = $('#datatable-show3').DataTable({
  "paging": false
});
blueimp.Gallery(document.getElementById('links').getElementsByTagName('a'), {
  container: '#blueimp-gallery',
  carousel: true,
  onslide: function onslide(index, slide) {
    var unique_id = this.list[index].getAttribute('data-unique-id');
    console.log(unique_id);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/date-to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");

var $TypeError = TypeError;

// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
module.exports = function (hint) {
  anObject(this);
  if (hint === 'string' || hint === 'default') hint = 'string';
  else if (hint !== 'number') throw $TypeError('Incorrect hint');
  return ordinaryToPrimitive(this, hint);
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

/***/ "./node_modules/core-js/modules/es.date.to-primitive.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-primitive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var dateToPrimitive = __webpack_require__(/*! ../internals/date-to-primitive */ "./node_modules/core-js/internals/date-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var DatePrototype = Date.prototype;

// `Date.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
if (!hasOwn(DatePrototype, TO_PRIMITIVE)) {
  defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
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

/***/ "./node_modules/core-js/modules/es.symbol.to-primitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "./node_modules/core-js/internals/well-known-symbol-define.js");
var defineSymbolToPrimitive = __webpack_require__(/*! ../internals/symbol-define-to-primitive */ "./node_modules/core-js/internals/symbol-define-to-primitive.js");

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();


/***/ })

},[["./assets/js/components/parametrage/uarticle.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",2,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","profil~test~uarticle~ucategoriearticle"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS91YXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGF0ZS10by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wudG8tcHJpbWl0aXZlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJibHVlaW1wIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdDIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJzY3JvbGxYIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJvcmRlciIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJ3aWR0aCIsImNsYXNzTmFtZSIsIm5hbWUiLCJjb2x1bW5EZWZzIiwic2VhcmNoYWJsZSIsInRhcmdldHMiLCJsYW5ndWFnZSIsInByb2Nlc3NpbmciLCJzZWFyY2hQbGFjZWhvbGRlciIsInNlYXJjaCIsImZpeGVkSGVhZGVyIiwib24iLCJlIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0Iiwic3RhdGUiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiY2xvc2VzdCIsImF0dHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsIiwiTGFkZGEiLCJhY3RpdmVFbGVtZW50Iiwic3RhcnQiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJlcnJvcnMiLCJzdG9wIiwiU2hvd0Zvcm1FcnJvcnMiLCJlbXB0eSIsInRvYXN0ciIsIndhcm5pbmciLCJtZXNzYWdlIiwidGV4dCIsInRpdGxlIiwidGltZU91dCIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJjbGljayIsImlkIiwicm93IiwiZ2V0IiwicmVtb3ZlIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInZhbHVlIiwiY29kZSIsInJlbG9hZCIsInJlc3BvbnNlSlNPTiIsImdldFN1YlNlbGVjdCIsIm15Y2xhc3MiLCJteWJvb2xlYW4iLCJteWNvbnRlbnQiLCJybSIsImZpbmQiLCJwcm9wIiwicGFyZW50IiwiaHRtbCIsImFycmF5Iiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicmVwbGFjZVdpdGgiLCIkdGhpcyIsInZhbCIsInF1ZXJ5U2VsZWN0b3IiLCJmYWRlSW4iLCJtZXRob2QiLCJjYWNoZSIsInJlc2V0IiwiaGlkZSIsInQiLCJhY3Rpb24iLCJkdCIsIm5vZGUiLCJjb25maWciLCJjbGVhciIsInNldFRpbWVvdXQiLCJyZXNwb25zZVRleHQiLCJ0YWJsZVNob3czIiwiR2FsbGVyeSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb250YWluZXIiLCJjYXJvdXNlbCIsIm9uc2xpZGUiLCJpbmRleCIsInNsaWRlIiwidW5pcXVlX2lkIiwibGlzdCIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDN0dDLG1IQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBQ21DO0FBQ2pFLElBQU1JLE9BQU8sR0FBR0gsbUJBQU8sQ0FBQyx5SUFBNkQsQ0FBQztBQUNHO0FBQ3pGLElBQU1JLElBQUksR0FBR0osbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ0o7QUFDL0IsSUFBTUssd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUNGOztBQUVBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBVztFQUN6QkYsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNHLE9BQU8sRUFBRTtBQUMzQyxDQUFDLENBQUM7QUFNRixJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0ssU0FBUyxDQUFDO0VBQzdCQyxJQUFJLEVBQUU7SUFDRkMsR0FBRyxFQUFFakIsbUhBQU8sQ0FBQ2tCLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUFFO0lBQzlDQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0RDLFdBQVcsRUFBRSxJQUFJ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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBLGFBQWEsbUJBQU8sQ0FBQywyRkFBK0I7QUFDcEQsb0JBQW9CLG1CQUFPLENBQUMseUZBQThCO0FBQzFELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRTlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkEsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELDJCQUEyQixtQkFBTyxDQUFDLHFGQUE0QjtBQUMvRCxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQscUJBQXFCLG1CQUFPLENBQUMsdUdBQXFDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUN4QkEsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLDhCQUE4QixtQkFBTyxDQUFDLCtHQUF5Qzs7QUFFL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJ1YXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5jb25zdCBibHVlaW1wID0gcmVxdWlyZSgnLi4vLi4vcGx1Z2lucy9ibHVlaW1wLWdhbGxlcnkvanMvanF1ZXJ5LmJsdWVpbXAtZ2FsbGVyeS5taW4nKTtcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qc1wiO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuLy9yZXF1aXJlKCcuLy4uLy4uL3BsdWdpbnMvc2VsZWN0Mi9zZWxlY3QyLWN1cnJlbnQuanMnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmpzLWV4YW1wbGUtYmFzaWMtc2luZ2xlJykuc2VsZWN0MigpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGFibGUgPSAkKFwiI2dyaWRcIikuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJzdG9ja19wcm9kdWl0X2xpc3QyXCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdLFxyXG4gICAgXSxcclxuICAgIHBhZ2VMZW5ndGg6IDE1LFxyXG4gICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgICB7b3JkZXJhYmxlOiBmYWxzZSwgd2lkdGg6IFwiMyVcIixjbGFzc05hbWU6ICd0ZC1jaGVjayBwZC1hY2hhdCcsIG5hbWU6ICd0YWIuaWQnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxNSVcIiwgY2xhc3NOYW1lOiAncGQtYWNoYXQnLCBuYW1lOiAndGFiLmNvZGUnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIyNSVcIiwgY2xhc3NOYW1lOiAncGQtYWNoYXQnLG5hbWU6ICd0YWIudGl0cmUnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIyNSVcIiwgY2xhc3NOYW1lOiAndGQtZGVzY2lwdGlvbiBwZC1hY2hhdCcsIG5hbWU6ICd0YWIudGl0cmUnfSxcclxuICAgICAgICAvLyB7b3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxMCVcIiwgbmFtZTogJ3RhYi5mb3Vybmlzc2V1cid9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiLGNsYXNzTmFtZTogJ3RkLXR5cGUgcGQtYWNoYXQnLCBuYW1lOiAndGFiLnByaXhfYWNoYXQnfSxcclxuICAgICAgICB7b3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxMCVcIixjbGFzc05hbWU6ICd0ZC1odCBwZC1hY2hhdCcsIG5hbWU6ICd0YWIucHJpeF92ZW50ZSd9LFxyXG4gICAgICAgIHtvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIxMCVcIiwgY2xhc3NOYW1lOiAndGQtdHZhIHBkLWFjaGF0JywgbmFtZTogJ3RhYi5hYnJldmlhdGlvbid9LFxyXG4gICAgICAgXHJcbiAgICBdLFxyXG4gICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgIHtzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdGFyZ2V0czogNixcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0YXJnZXRzOiA2LFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0ZC1vcmQnLFxyXG4gIFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcblxyXG5cclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcjogXCJSRUNIRVJDSEVSXCIsXHJcbiAgICAgICAgc2VhcmNoOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxuXHJcblxyXG50YWJsZS5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAvLyAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgW10sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICcuY2Rfb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndV9hcnRpY2xlX3Nob3cnLCB7J2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJyl9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG59KTtcclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYmxlLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnLm5ldycpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9pbnNlcnQnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1X2FydGljbGVfc2hvdycsIHsnaWQnOiByZXN1bHQuZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcjX2VkaXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfZWRpdCcsIHsnaWQnOiBpZH0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfdXBkYXRlJywge2lkOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKCcjX2RlbGV0ZV9wcm9kdWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgLy8gbC5zdGFydCgpO1xyXG4gICAgLy92YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X2RlbGV0ZScsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5zdG9ja19wcm9kdWl0X3VwZGF0ZV9wcml4X2FjaGF0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICBhbGVydCgpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfdXBkYXRlX3ByaXhfYWNoYXQnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnN0b2NrX3Byb2R1aXRfdXBkYXRlX3ByaXhfdmVudGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gIGFsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF91cGRhdGVfcHJpeF92ZW50ZScsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5zdG9ja19wcm9kdWl0X2ZpY2hpZXJzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICBhbGVydCgpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgICAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfZmljaGllcnMnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuJCgnLl9kZWxldGVfZmljaGllcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICBcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9maWNoaWVyc19kZWxldGUnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnN0b2NrX3Byb2R1aXRfYWRkX3N0b2NrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICBhbGVydCgpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfYWRkX3N0b2NrJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnI19zaG93JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndV9hcnRpY2xlX3Nob3cnLCB7J2lkJzogaWR9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJCgnI19hcmNoaXZlcl9wcm9kdWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gIC8vdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgICAgLy9sLnN0YXJ0KCk7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgQXJjaGl2ZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBBcmNoaXZlciFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfcHJvZHVpdF9hcmNoaXZlcicsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3ViU2VsZWN0KG15Y2xhc3MsIG15Ym9vbGVhbiwgbXljb250ZW50LHJtKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKG15Y29udGVudClcclxuICAgIGlmKHJtICYmIG15Ym9vbGVhbil7XHJcbiAgICAgICAgJChybSkuZmluZCgnb3B0aW9uOm5vdCg6Zmlyc3QpJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJChybSkucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQocm0pLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGlmIChteWJvb2xlYW4pIHtcclxuICAgICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICQobXljbGFzcylcclxuICAgICAgICAucGFyZW50KClcclxuICAgICAgICAuZmluZChcIi5zZWxlY3QyIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3dcIilcclxuICAgICAgICAuaHRtbCgnPGkgY2xhc3M9XCJpLWxvYWQgZmEgZmEtcmVmcmVzaFwiPjwvaT4nKTtcclxuICAgIH1cclxuICAgIGlmIChteWNvbnRlbnQpIHtcclxuICAgICAgdmFyIGFycmF5ID0gbXljbGFzcy5zcGxpdChcIixcIik7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4gICAgICAgICQoYXJyYXlbaV0pLnJlcGxhY2VXaXRoKCQobXljb250ZW50KS5maW5kKGFycmF5W2ldKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5uaXZlYXUxXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWxlcnQoKVxyXG4gICAgZ2V0U3ViU2VsZWN0KFwiLm5pdmVhdTJcIiwgZmFsc2UsIFwiXCIsXCIubml2ZWF1Mywubml2ZWF1NFwiKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBkYXRhWyQoXCIubml2ZWF1MlwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLm5pdmVhdTJcIikudmFsKCk7XHJcbiAgICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X2Nob2l4X25pdmVhdScsIHsnaWQnOiAkKHRoaXMpLnZhbCgpID09IFwiXCIgPyAtMSA6ICQodGhpcykudmFsKCksXCJwbGFjZWhvbGRlclwiOlwiY2hvaXggTml2ZWF1IDJcIiB9KSxcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAgICQoXCIubml2ZWF1MlwiKS5odG1sKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIGdldFN1YlNlbGVjdChcIi5uaXZlYXUyXCIsIHRydWUsXCJcIixcIi5uaXZlYXUzLC5uaXZlYXU0XCIpO1xyXG4gICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5uaXZlYXUyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWxlcnQoKVxyXG4gICAgZ2V0U3ViU2VsZWN0KFwiLm5pdmVhdTNcIiwgZmFsc2UsIFwiXCIsXCIubml2ZWF1NFwiKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBkYXRhWyQoXCIubml2ZWF1MlwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLm5pdmVhdTJcIikudmFsKCk7XHJcbiAgICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X2Nob2l4X25pdmVhdScsIHsnaWQnOiAkKHRoaXMpLnZhbCgpID09IFwiXCIgPyAtMSA6ICQodGhpcykudmFsKCksXCJwbGFjZWhvbGRlclwiOlwiY2hvaXggTml2ZWF1IDNcIiB9KSxcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAgICQoXCIubml2ZWF1M1wiKS5odG1sKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIGdldFN1YlNlbGVjdChcIi5uaXZlYXUzXCIsIHRydWUsIFwiXCIsXCIubml2ZWF1NFwiKTtcclxuICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIubmV3ICwgLmVkaXRcIikub24oXCJjaGFuZ2VcIiwgXCIubml2ZWF1M1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL2FsZXJ0KClcclxuICAgIGdldFN1YlNlbGVjdChcIi5uaXZlYXU0XCIsIGZhbHNlLCBcIlwiLFwiXCIpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICAgIHZhciBkYXRhID0ge307XHJcbiAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGRhdGFbJChcIi5uaXZlYXUyXCIpLmF0dHIoXCJuYW1lXCIpXSA9ICQoXCIubml2ZWF1MlwiKS52YWwoKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfY2hvaXhfbml2ZWF1JywgeydpZCc6ICQodGhpcykudmFsKCksXCJwbGFjZWhvbGRlclwiOlwiY2hvaXggTml2ZWF1IDRcIn0pLFxyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICAgJChcIi5uaXZlYXU0XCIpLmh0bWwocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgZ2V0U3ViU2VsZWN0KFwiLm5pdmVhdTRcIiwgdHJ1ZSxcIlwiLFwiXCIpO1xyXG4gICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5fZmljaGllcnNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuXHJcbiAgXHJcbiAgXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVfYXJ0aWNsZV9maWNoaWVyc1wiLCB7aWQ6IGlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuX2RlbGV0ZV9maWNoaWVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidV9hcnRpY2xlX2ZpY2hpZXJzX2RlbGV0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVPdXQ6IDQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIkltcG9zc2libGUgZCdlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIi5fZGVmYXVsdF9maWNoaWVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuLy9hbGVydCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGTDqWZpbmlyIGNldHRlIGltYWdlIHBhciBkw6lmYXV0ID9cIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1X2FydGljbGVfZmljaGllcnNfZGVmYXVsdFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZXJyb3JzX2xpc3RcIikuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVPdXQ6IDQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIkltcG9zc2libGUgZCdlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJCgnI19pbXBvcnQnKS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKXtcclxuICAgIC8vYWxlcnQoKSAgXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG4vLyAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkKCcjcmVzdWx0YXRzX2ltcG9ydCcpLmVtcHR5KCk7XHJcbiAgICAkKCcuc3ByJykuZmFkZUluKClcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9mb3JtIHdpbGwgbm90IHN1Ym1pdHRlZCAgXHJcbiAgICAkLmFqYXgoeyAgXHJcbiAgICAgICAgIHVybDpSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19wcm9kdWl0X3VwbG9hZCcpLCAgXHJcbiAgICAgICAgIG1ldGhvZDpcIlBPU1RcIiwgIFxyXG4gICAgICAgICBkYXRhOm5ldyBGb3JtRGF0YSh0aGlzKSwgIFxyXG4gICAgICAgICBjb250ZW50VHlwZTpmYWxzZSwgICAgICAgICAgLy8gVGhlIGNvbnRlbnQgdHlwZSB1c2VkIHdoZW4gc2VuZGluZyBkYXRhIHRvIHRoZSBzZXJ2ZXIuICBcclxuICAgICAgICAgY2FjaGU6ZmFsc2UsICAgICAgICAgICAgICAgIC8vIFRvIHVuYWJsZSByZXF1ZXN0IHBhZ2VzIHRvIGJlIGNhY2hlZCAgXHJcbiAgICAgICAgIHByb2Nlc3NEYXRhOmZhbHNlLCAgICAgICAgICAvLyBUbyBzZW5kIERPTURvY3VtZW50IG9yIG5vbiBwcm9jZXNzZWQgZGF0YSBmaWxlIGl0IGlzIHNldCB0byBmYWxzZSAgXHJcbiAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpeyAgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgJCgnI19pbXBvcnQnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNwcicpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoZGF0YS5tZXNzYWdlLnRleHQsIGRhdGEubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDUwMDAwMDB9KSBcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgZWxzZSAgXHJcbiAgICAgICAgICAgICAgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAkKCcjcmVzdWx0YXRzX2ltcG9ydCcpLmh0bWwoZGF0YSkuaGlkZSgpOyBcclxuICAgICAgICAgICAgICAgICAgIHZhciB0O1xyXG4gICAgICAgICAgICAodCA9ICQoXCIua3RfdGFibGVfMVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgXCJsZW5ndGhNZW51XCI6IFtbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCAtMV0sIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuICAgICAgICAgICAgICAgIFwicGFnZUxlbmd0aFwiOiAxNSxcclxuICAgICAgICAgICAgICAgIFwib3JkZXJcIjogW1swLCBcImFzY1wiXV0sXHJcbiAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbNSwgMTAsIDI1LCA1MF0sXHJcbiAgICAgICAgICAgICAgICBwYWdlTGVuZ3RoOiA1LFxyXG4gICAgICAgICAgICAgICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjUlXCIsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcInRhcmdldHNcIjogWzBdfSxcclxuICAgICAgICAgICAgICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwJVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjg1JVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjg1JVwifSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICAgICAgICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYkZpbHRlcjogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgYkluZm86IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgdC5vbignaW5pdC5kdCcsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCAgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdCk7XHJcbiAgICAgICAgICAgIC8vaWYgKHN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBpZiAodmFsdWUuc2VhcmNoLnNlYXJjaCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgJCgnLnJlbW92ZS1maWx0ZXInKS5zaG93KCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICB9KTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMCwgMSAsIDIsIDNdLCBbXSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJyNfaW1wb3J0JylbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5zcHInKS5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Jlc3VsdGF0c19pbXBvcnQnKS5mYWRlSW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICB9LGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICQoJy5zcHInKS5oaWRlKClcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpxWEhSLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgJCgnI3Jlc3VsdGF0c19pbXBvcnQnKS5odG1sKGpxWEhSLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJJbXBvc3NpYmxlIGRlIHRyYWl0ZXIgdW4gZmljaGllciBuJ2VzdCBwYXMgb3JnYW5pc2VyXCIsIFwiRXJyb3JcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pICBcclxufSk7XHJcbnZhciB0YWJsZVNob3czID0gJCgnI2RhdGF0YWJsZS1zaG93MycpLkRhdGFUYWJsZSh7XCJwYWdpbmdcIjpmYWxzZX0pO1xyXG4gICAgYmx1ZWltcC5HYWxsZXJ5KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua3MnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICcjYmx1ZWltcC1nYWxsZXJ5JyxcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25zbGlkZTogZnVuY3Rpb24gKGluZGV4LCBzbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1bmlxdWVfaWQgPSB0aGlzLmxpc3RbaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS11bmlxdWUtaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS1AQHRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoaW50KSB7XG4gIGFuT2JqZWN0KHRoaXMpO1xuICBpZiAoaGludCA9PT0gJ3N0cmluZycgfHwgaGludCA9PT0gJ2RlZmF1bHQnKSBoaW50ID0gJ3N0cmluZyc7XG4gIGVsc2UgaWYgKGhpbnQgIT09ICdudW1iZXInKSB0aHJvdyAkVHlwZUVycm9yKCdJbmNvcnJlY3QgaGludCcpO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZSh0aGlzLCBoaW50KTtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwidmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkYXRlVG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGF0ZS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG5cbi8vIGBEYXRlLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghaGFzT3duKERhdGVQcm90b3R5cGUsIFRPX1BSSU1JVElWRSkpIHtcbiAgZGVmaW5lQnVpbHRJbihEYXRlUHJvdG90eXBlLCBUT19QUklNSVRJVkUsIGRhdGVUb1ByaW1pdGl2ZSk7XG59XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBGVU5DVElPTl9OQU1FX0VYSVNUUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuRVhJU1RTO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nKTtcbnZhciBuYW1lUkUgPSAvZnVuY3Rpb25cXGIoPzpcXHN8XFwvXFwqW1xcU1xcc10qP1xcKlxcL3xcXC9cXC9bXlxcblxccl0qW1xcblxccl0rKSooW15cXHMoL10qKS87XG52YXIgcmVnRXhwRXhlYyA9IHVuY3VycnlUaGlzKG5hbWVSRS5leGVjKTtcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICFGVU5DVElPTl9OQU1FX0VYSVNUUykge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiByZWdFeHBFeGVjKG5hbWVSRSwgZnVuY3Rpb25Ub1N0cmluZyh0aGlzKSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtZGVmaW5lJyk7XG52YXIgZGVmaW5lU3ltYm9sVG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWRlZmluZS10by1wcmltaXRpdmUnKTtcblxuLy8gYFN5bWJvbC50b1ByaW1pdGl2ZWAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnRvcHJpbWl0aXZlXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvcHJpbWl0aXZlXG5kZWZpbmVTeW1ib2xUb1ByaW1pdGl2ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==