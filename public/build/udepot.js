(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["udepot"],{

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

/***/ "./assets/js/components/parametrage/udepot.js":
/*!****************************************************!*\
  !*** ./assets/js/components/parametrage/udepot.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");











var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.setRoutingData(routes);



var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
var tableShow3 = $('#datatable-show3').DataTable({
  "paging": false
});
var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('stock_depot_list'),
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
    "orderable": true,
    "width": "25%"
  }, {
    "orderable": true,
    "width": "25%"
  }, {
    "orderable": true,
    "width": "25%"
  }, {
    "orderable": true,
    "width": "25%",
    visible: false
  }, {
    "orderable": true,
    "width": "25%",
    visible: false
  }, {
    "orderable": true,
    "width": "25%",
    visible: false
  }, {
    "orderable": true,
    "width": "25%",
    visible: false
  }, {
    "orderable": true,
    "width": "25%",
    visible: false
  }, {
    "orderable": true,
    "width": "25%",
    visible: false
  }, {
    "width": "5%",
    "orderable": true,
    visible: false
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
$('body').on('change', '#Suive', function () {
  console.log('selectedId');
  var selectedId = $(this).val();
  table6.clear().draw();
  var table6 = $('#grid6').DataTable({
    ajax: {
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('list_antenne') + '?id=' + selectedId,
      type: "get"
    },
    "deferRender": true,
    "stateSave": true,
    "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
    "pageLength": 15,
    "columns": [{
      "orderable": false,
      "width": "10px",
      "searchable": true,
      "targets": [0]
    }, {
      "orderable": true,
      "width": "100px"
    }, {
      "orderable": true,
      "width": "100px"
    }, {
      "orderable": true,
      "width": "100px"
    }, {
      "orderable": true,
      "width": "100px"
    }, {
      "orderable": true,
      "width": "100px"
    }, {
      "orderable": true,
      "width": "100px"
    }, {
      "orderable": true,
      "width": "100px"
    }, {
      "orderable": true,
      "width": "100px"
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
      "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
      "processing": true
    }
  });

  // $.ajax({
  //     type: "get",
  //     url: Routing.generate('list_antenne') + '?id=' + selectedId,

  //     success: function(data) {
  //         //   alert(data);
  //         table6.clear().draw();
  //         // table6.append(data);
  //         // table6.DataTable().clear().draw();
  //         // table6.DataTable().rows.add // Add new data
  //         // table6.DataTable().columns.adjust().draw();

  //     }
  // })
});

$(".sel2").select2();
var table4 = $('#grid4').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('mouvement_stock_list_normal2') + location.search,
    type: "get"
  },
  serverSide: true,
  deferRender: true,
  order: [[0, "desc"]],
  lengthMenu: [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  columns: [{
    orderable: true,
    name: 'mv.id'
  }, {
    className: "mnt-format",
    name: 'mv.source'
  }, {
    className: "mnt-format",
    name: 'mv.source_code'
  }, {
    className: "mnt-format",
    name: 'dep.titre'
  }, {
    className: "mnt-format",
    name: 'ar.titre'
  }
  /*  ,
    {
        className: "mnt-format",
      name: 'ar.code'
    }*/, {
    className: "mnt-format",
    name: 'mv.quantite'
  }, {
    className: "mnt-format",
    name: 'mv.prixunitaire'
  }, {
    className: "mnt-format",
    name: 'mv.tva'
  }, {
    className: "mnt-format",
    name: 'mv.remise'
  }, {
    className: "mnt-format",
    name: 'mv.prixttc'
  }

  //  {"orderable": true, "width": "200px"},
  ],

  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    processing: true
  },
  fixedHeader: true
});
table4.on("init.dt", function (e, settings) {
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

  // CustomSearchDatatable.CustomSearchSelect(api, [], []);
  // CustomSearchDatatable.CustomSearchDate(api, [], []);
  //  CustomSearchDatatable.CustomSearchText(api, [1,2,3,4,5,6,7,8,9,10], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_13__["CustomSearchCheckbox"](api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('u_depot_show', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
var grid2 = $('#grid2').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('mouvement_stock_encours_list_vente') + location.search,
    type: "get"
  },
  serverSide: true,
  deferRender: true,
  order: [[0, "desc"]],
  lengthMenu: [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  columns: [{
    orderable: true,
    name: 'det.id'
  }, {
    className: "mnt-format",
    name: 'mv.cab.dateDocAsso'
  }, {
    className: "mnt-format",
    name: 'clt.nom'
  }, {
    className: "mnt-format",
    name: 'dv.code'
  }, {
    className: "mnt-format",
    name: 'cab.code'
  }
  /*  ,
    {
        className: "mnt-format",
      name: 'ar.code'
    }*/, {
    className: "mnt-format",
    name: 'dep.code'
  }, {
    className: "mnt-format",
    name: 'ar.code'
  }, {
    className: "mnt-format",
    name: 'det.quantite'
  }, {
    className: "mnt-format",
    name: 'det.prixunitaire'
  }, {
    className: "mnt-format",
    name: 'det.tva'
  }, {
    className: "mnt-format",
    name: 'det.tva'
  }, {
    className: "mnt-format",
    name: 'det.remise'
  }, {
    className: "mnt-format",
    name: 'det.prixTtc'
  }

  //  {"orderable": true, "width": "200px"},
  ],

  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    processing: true
  },
  fixedHeader: true
});
var table3 = $('#grid3').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('mouvement_stock_encours_list_achat'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "orderable": false,
    "width": "10px",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "10px"
  }, {
    "orderable": true,
    "width": "10px"
  }, {
    "orderable": true,
    "width": "10px"
  }, {
    "orderable": true,
    "width": "10px"
  }, {
    "orderable": true,
    "width": "10px"
  }, {
    "orderable": true,
    "width": "10px"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
var table6 = $('#grid6').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('list_antenne'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "orderable": false,
    "width": "10px",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
var table9 = $('#grid9').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('list_antenne'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "orderable": false,
    "width": "10px",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
var table10 = $('#grid10').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('list_antenne'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "orderable": false,
    "width": "10px",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
var table11 = $('#grid11').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('list_antenne'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "orderable": false,
    "width": "10px",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
var table8 = $('#grid8').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('list_antenne_mouvement_cab'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "orderable": false,
    "width": "10px",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
var table7 = $('#grid7').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('list_antenne_depot'),
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  columns: [{
    orderable: true,
    name: 'ann.code',
    width: "5%"
  }, {
    orderable: true,
    name: 'ann.designation'
  }, {
    orderable: true,
    name: "ann.defaut"
  }, {
    orderable: true,
    name: 'article'
  }, {
    orderable: true,
    name: 'quantite'
  }, {
    orderable: true,
    name: 'ar.prix_achat'
  }, {
    orderable: true,
    name: 'depot.titre'
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
var table5 = $('#grid5').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('mouvement_stock_encours_list_transformation'),
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  "pageLength": 15,
  "columns": [{
    "orderable": false,
    "width": "10px",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "100px"
  }, {
    "orderable": true,
    "width": "10px"
  }, {
    "orderable": true,
    "width": "10px"
  }, {
    "orderable": true,
    "width": "10px"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  }
});
$('#grid tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('#grid2 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table2.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('#grid3 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table3.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$('#grid5 tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table5.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});
$("#valid").change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize()
    var t = dta.get("_action[]");
    //alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    // var t=1;
    if (t) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment Valider cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('depot_mouvement_stock_valider_vente_multiple'),
            data: dta,
            processData: false,
            contentType: false,
            success: function success(result) {
              //console.log(result);
              if (result.code == 200) {
                table2.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                $("#valid").css("display", "none");
                $(".action").prop("checked", false);
                $("#allactions").prop("checked", false);
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
        }
      });
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$("#valid3").change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize()
    var t = dta.get("_action[]");
    //alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);
    // var t=1;
    if (t) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment Valider cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('depot_mouvement_stock_valider_transformation_multiple'),
            data: dta,
            processData: false,
            contentType: false,
            success: function success(result) {
              //console.log(result);
              if (result.code == 200) {
                table2.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                $("#valid3").css("display", "none");
                $(".action").prop("checked", false);
                $("#allactions").prop("checked", false);
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
        }
      });
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$("#valid2").change(function (e) {
  //  alert($(this).val());
  //$("form").submit();
  if ($(this).val() == 1) {
    var form_name = $('#action_test2').attr('name');
    var dta = new FormData(action_test2);
    var t = dta.get("_action2[]");
    //  alert(t);
    var selector = $(this).attr('class').split(' ')[0];
    // console.log(e.type);

    if (t) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: 'animatedSwal flipInX faster'
        },
        position: 'top',
        title: "Confirmation ?",
        text: "Voulez vous vraiment Validé cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider!",
        cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: 'POST',
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('depot_mouvement_stock_valider_achat_multiple'),
            data: dta,
            processData: false,
            contentType: false,
            success: function success(result) {
              //console.log(result);
              if (result.code == 200) {
                table3.ajax.reload();
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                $("#valid2").css("display", "none");
                $("#allactions2").prop("checked", false);
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
        }
      });
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$('.test').on('submit', '.action_test', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var t = dta.get("_action[]");
  //alert( t);
  var selector = $(this).attr('class').split(' ')[0];
  // console.log(e.type);

  if (t) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment Validé cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('depot_mouvement_stock_valider_vente_multiple'),
          data: dta,
          processData: false,
          contentType: false,
          success: function success(result) {
            //console.log(result);
            if (result.code == 200) {
              table2.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
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
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.test2').on('submit', '.action_test2', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var t = dta.get("_action2[]");
  //  alert(t);
  var selector = $(this).attr('class').split(' ')[0];
  // console.log(e.type);

  if (t) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment Validé cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('depot_mouvement_stock_valider_achat_multiple'),
          data: dta,
          processData: false,
          contentType: false,
          success: function success(result) {
            //console.log(result);
            if (result.code == 200) {
              table3.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
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
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#allactions").change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $(".action").prop("checked", true);
    $("#valid").css("display", "block");
  } else {
    $(".action").prop("checked", false);
    $("#valid").css("display", "none");
  }
  e.preventDefault();
});
$("#allactions2").change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $(".action2").prop("checked", true);
    $("#valid2").css("display", "block");
  } else {
    $(".action2").prop("checked", false);
    $("#valid2").css("display", "none");
  }
  e.preventDefault();
});
$("#allactions3").change(function (e) {
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $(".action").prop("checked", true);
    $("#valid3").css("display", "block");
  } else {
    $(".action").prop("checked", false);
    $("#valid3").css("display", "none");
  }
  e.preventDefault();
});
$('body').on('change', '.action', function () {
  //  alert();
  $("#valid").css("display", "block");
  //    $(".btn_val").css("display", "block");
  //  console.log($('.action').val());
});

$('body').on('change', '.action', function () {
  //  alert();
  $("#valid3").css("display", "block");
  //    $(".btn_val").css("display", "block");
  //  console.log($('.action').val());
});

$('body').on('change', '.action2', function () {
  //  alert();
  $("#valid2").css("display", "block");
  //   $(".btn_val2").css("display", "block");
  //  console.log($('.action').val());
});

$('.new').on('submit', '.form', function (e) {
  //alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // console.log(e.type);
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('stock_depot_insert'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        // console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
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
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('u_depot_show', {
          'id': result.data.id
        });
        window.location.href = url;
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
$('#_edit').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('stock_depot_edit', {
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
$('.grid').on('click', '.valider', function (e) {
  //$('.valider').on('click',function (e) {

  var id = $(this).attr('id'); //alert(id);
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment Validé cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('depot_mouvement_stock_valider_vente', {
            'id': id
          }),
          success: function success(result) {
            //console.log(result);
            if (result.code == 200) {
              table2.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
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
$('.grid3').on('click', '.valider', function (e) {
  //$('.valider').on('click',function (e) {

  var id = $(this).attr('id'); //alert(id);
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment Validé cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Validé!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('depot_mouvement_stock_valider_achat', {
            'id': id
          }),
          success: function success(result) {
            //console.log(result);
            if (result.code == 200) {
              table3.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
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
$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  //alert( id );
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('stock_depot_update', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $('.errors-list').remove();
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});
$('#_show').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('u_depot_show', {
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
$('#_delete').click(function (e) {
  //  var id = table.row('.selected').id();

  var id = $('#test').data("depotId");
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('stock_depot_delete', {
            'id': id
          }),
          success: function success(result) {
            console.log(result);
            if (result.code == 200) {
              // table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('stock_depot_index');
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

//
//
//$('._delete_fichier').click(function (e) {
//    var id = $(this).attr('id');
//    if (id) {
//        swalWithBootstrapButtons.fire({
//            showClass: {
//                popup: 'animatedSwal flipInX faster'
//            },
//            position: 'top',
//            title: "Confirmation ?",
//            text: "Voulez vous vraiment supprimer cet enregistrement ?",
//            type: "warning",
//            showCancelButton: true,
//            showCloseButton: true,
//            confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
//            cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
//        }).then((result) => {
//            if (result.value) {
//                $.ajax({
//                    type: 'DELETE',
//                    url: Routing.generate('stock_produit_fichiers_delete', {'id': id}),
//                    success: function (result) {
//                        console.log(result);
//                        if (result.code == 200) {
//                            
//                            toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                            location.reload(); 
//                        } else if (result.code == 403) {
//                            toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//                        }
//                    },
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {timeOut: 4000})
//                    }
//                });
//            }
//        });
//    } else {
//        toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {timeOut: 4000})
//    }
//    e.preventDefault();
//});
//
//$('body').on('submit', '.stock_produit_add_stock', function (e) {
//    //  alert();
//    var form_name = $(this).attr('name');
//    var dta = new FormData(this);
//    var selector = $(this).attr('class').split(' ')[0];
//    var id = dta.get('_id');
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('stock_produit_add_stock', {'id': id}),
//        data: dta,
//        processData: false,
//        contentType: false,
//        success: function (result) {
//            if (result.errors) {
//             
//                ShowFormErrors(selector, form_name, result.errors);
//            }
//            if (result.code == 200) {
//                
//                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
//                   location.reload(); 
//            } else if (result.code == 403) {
//                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
//             
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            toastr.error("Erreur", errorThrown, {timeOut: 4000})
//        }
//    });
//    e.preventDefault();
//});

$('#_archiver').click(function (e) {
  //var id = table.row('.selected').id();

  var id = $('#test').data("depotId");
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('stock_depot_archiver', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
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
$('body').on('submit', '.stock_depot_trensfert', function (e) {
  //alert();
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('stock_depot_trensfert', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate("stock_depot_mouvementstock");
        window.location.href = url;
        //  location.reload(); 
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
$('.antenne_source').on('change', function () {
  var data = $(".antenne_source :selected").val();
  $('.santenneyerror').hide();
  console.log(data);
  // let antenne = $(this).val();
  if (data != "") {
    $.ajax({
      type: 'GET',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('get_antenne_article', {
        'id': data
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        var data = JSON.parse(result);
        $(".article_disponible").html(data);
        $(".article_disponible select").select2();
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, {
          timeOut: 4000
        });
      }
    });
  }
});
$('.Site_Rc').on('change', function () {
  var data = $(".Site_Rc :selected").val();
  $('.santenneyerror').hide();
  console.log(data);
  // let antenne = $(this).val();
  if (data != "") {
    $.ajax({
      type: 'GET',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('get_demand_article', {
        'id': data
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        var data = JSON.parse(result);
        $(".article_disponible_Rc").html(data);
        $(".article_disponible_Rc select").select2();
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, {
          timeOut: 4000
        });
      }
    });
  }
});

// $(".type_mouvement").on('change', () => {
//     const typeMouvement = $(".type_mouvement :selected").val();
//     $('.type_mouvementerror').hide();
//     if(typeMouvement != '') {
//         $.ajax({
//             type: 'GET',
//             url: Routing.generate('get_antennes', {'val': typeMouvement}),
//             processData: false,
//             contentType: false,
//             success: function (result) {
//                 var data = JSON.parse(result);
//                 console.log(data);
//                 $(".antenne_destination").html(data.htmlDesination);
//                 $(".antenne_source").html(data.htmlSource);
//                 $(".antenne_destination").select2();
//                 $(".antenne_source").select2();
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 toastr.error("Erreur", errorThrown, {timeOut: 4000})
//             }
//         });
//     }
// })

var quanttityDisponible;

// $('.article_disponible').on('change', () => {
//     $('.articleyerror').hide();
//     quanttityDisponible = $(".article_disponible :selected").attr('data');

//     $('.quantitty').val('');
// });

// $('.quantitty').on('keyup', () => {
//     $('.quantityerror').hide();
//     const quantity = $('.quantitty').val();
//     if(quantity > quanttityDisponible) {
//         $('.quantitty').val(quanttityDisponible)
//     } else if (quantity < 0) {
//         $('.quantitty').val(1)
//     }
// });
$(".antenne_destination").on('change', function () {
  $('.dantenneyerror').hide();
});
// $("#mouvestock").on('submit', (e) => {
//     e.preventDefault();
//     var l = Ladda.create(document.activeElement);
//     l.start();
//     let active = true;
//     // console.log(data);
//     if($(".type_mouvement :selected").val() == ""){
//         $('.type_mouvementerror').show();
//         active = false;
//     }
//     if($(".antenne_source :selected").val() == ""){
//         $('.santenneyerror').show();
//         active = false;
//     }
//     if($(".antenne_destination :selected").val() == ""){
//         $('.dantenneyerror').show();
//         active = false;
//     }
//     if($(".article_disponible :selected").val() == ""){
//         $('.articleyerror').show();
//         active = false;
//     }
//     if($('.quantitty').val().trim() == ""){
//         $('.quantityerror').show();
//         active = false;
//     }
//     let data = new FormData();
//     data.append('antenne_source', $(".antenne_source :selected").val());
//     data.append('antenne_destination', $(".antenne_destination :selected").val());
//     data.append('article', $(".article_disponible :selected").val());
//     data.append('quantitie', $(".quantitty").val());
//     data.append('type_mouvement', $(".type_mouvement :selected").val());
//     if(active) {
//         $.ajax({
//             type: 'POST',
//             url: Routing.generate('transfer_stock'),
//             data: data,
//             processData: false,
//             contentType:false,
//             success: function (result) {
//                 toastr.success('Mouvement de stock a été bien effectué .', 'Succées', {timeOut: 4000})
//                 $(".antenne_source option:first").prop('selected','selected');
//                 $(".antenne_destination option:first").prop('selected','selected');
//                 $(".quantitty").val("");
//                 $(".type_mouvement option:first").prop('selected','selected');
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 toastr.error("Erreur", errorThrown, {timeOut: 4000})
//             }
//         });
//     }
//     l.stop();

// });

$('body').on('change', '.select2_demo_antenne', function () {
  if ($(".select2_demo_antenne :selected").val() != "null") {
    console.log($(".select2_demo_antenne :selected").val());
    table7.columns(0).search($(".select2_demo_antenne :selected").val()).draw();
  } else {
    table7.columns(0).search('').draw();
  }
});
var ArraysOfArticle = [];
$('body').on('click', '.add_article_stock_active', function () {
  var allElements = $('.add_article_stock_active').closest(".parrentArticle");
  // console.log(allElements);   
  var articleId = allElements.find('.article_disponible :selected').val();
  var articleName = allElements.find('.article_disponible :selected').attr('data-name');
  var quantityDisponible = allElements.find('.article_disponible :selected').attr('data-q');
  var quantitty = allElements.find('.quantitty').val();
  console.log(quantityDisponible, quantitty);
  if (+quantityDisponible < +quantitty || +quantitty < 1) {
    toastr.error('Priere d\'entre une valeur moin ou egale ' + quantityDisponible, "Erreur", {
      timeOut: 4000
    });

    // alert('Priere d\'entre une valeur moin ou egale ' + );
  } else {
    // $(`.article_disponible #${articleId}`).hide();
    // $('.article_disponible').select2();

    var passe = true;
    ArraysOfArticle.map(function (article) {
      if (article.id == articleId) {
        passe = false;
        toastr.error("Erreur", 'Article déja exist', {
          timeOut: 4000
        });

        // alert('Article déja exist');
      }
    });

    if (passe) {
      // alert('test passe');
      ArraysOfArticle.push({
        'id': articleId,
        'name': articleName,
        'quantityDisponible': quantityDisponible,
        'quantitty': quantitty
      });
      $(".appendElement").remove();
      var html;
      ArraysOfArticle.forEach(function (article, i) {
        html += "<tr class=\"appendElement\">\n                \n                <td> ".concat(i + 1, "</td>\n                <td> ").concat(article.name, " </td>\n                <td class=\"quantity_input\">\n                    ").concat(article.quantitty, "\n                </td>\n                <td> \n                    <a style=\"padding: 7px ;\" data-id=\"").concat(article.id, "\" class=\"editArticle btn-icon-detail btn btn-white btn-warning btn-outline  btn-xs my-button2 upper waves-effect waves-light\"> \n                        <i class=\" fa  fa-edit\" aria-hidden=\"true\"></i>\n                     </a> \n                    <a style=\"padding: 7px ;\" data-id=\"").concat(article.id, "\" class=\"deleteArticle btn-icon-detail btn btn-white btn-danger btn-outline  btn-xs my-button2 upper waves-effect waves-light\"> \n                        <i class=\" fa  fa-trash\" aria-hidden=\"true\"></i>\n                     </a> \n                </td>\n                <tr>");
      });
      $(".article_disponible_Rc").prepend(html);
      $(".article_disponible").prepend(html);
    }
  }
});
$('body').on('click', '.deleteArticle', function () {
  var element = $(this).parent().parent();
  console.log(element);
  var id = $(this).attr("data-id");
  var NewArray = ArraysOfArticle.filter(function (article) {
    return article.id != id;
  });
  ArraysOfArticle = NewArray;
  element.remove();
  console.log(ArraysOfArticle);
});
$('body').on('click', '.editArticle', function () {
  var id = $(this).attr('data-id');
  var element = $(this).parent().parent().find(".quantity_input");
  var article = ArraysOfArticle.find(function (article) {
    return article.id == id;
  });
  element.html("<input type=\"number\" data-id=\"".concat(article.id, "\" value=\"").concat(article.quantitty, "\" class=\" quantity_update form-control form-control-sm\">"));
  console.log(ArraysOfArticle);
});
$('body').on('keyup', '.quantity_update', function (e) {
  var id = $(this).attr('data-id');
  var quantitty = $(this).val();
  if (e.which == 13) {
    var article = ArraysOfArticle.findIndex(function (article) {
      return article.id == id;
    });
    if (ArraysOfArticle[article].quantityDisponible >= +quantitty && +quantitty > 1) {
      ArraysOfArticle[article].quantitty = quantitty;
      $(this).parent().html(quantitty);
    } else {
      $("body .alreadyQuantity").show();
      // alert('Priere d\'entre une valeur moin ou egale ' + ArraysOfArticle[article].quantityDisponible);
      toastr.error('Priere d\'entre une valeur moin ou egale ' + ArraysOfArticle[article].quantityDisponible, "Erreur", {
        timeOut: 4000
      });
    }
  }
});
$("#mouve_stock").on('click', function (e) {
  if (e.which == 13) {
    e.preventDefault();
    return false;
  }
  e.preventDefault();
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);
  l.start();
  var data = new FormData();
  data.append('antenne_source', $(".antenne_source :selected").val());
  data.append('antenne_destination', $(".antenne_destination :selected").val());
  data.append('type_mouvement', $(".type_mouvement :selected").val());
  data.append('articles', JSON.stringify(ArraysOfArticle));
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('transfer_stock'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      var id = JSON.parse(result);
      console.log(id);
      toastr.success('Mouvement de stock a été bien effectué .', 'Succées', {
        timeOut: 4000
      });
      l.stop();
      window.open('/stock/umouvementcab/show/' + id, "_self");
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$("#anuller_stock").on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  var data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('anuller_stock'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      toastr.success('Mouvement de stock a été bien anuller .', 'Succées', {
        timeOut: 4000
      });
      $("#anuller_stock").remove();
      $("#valider_stock").remove();
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});
$("#valider_stock").on('click', function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);
  l.start();
  var id = $(this).attr('data-id');
  var data = new FormData();
  data.append('id', id);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('valider_stock'),
    data: data,
    processData: false,
    contentType: false,
    success: function success(result) {
      toastr.success('Mouvement de stock a été bien enregistre .', 'Succées', {
        timeOut: 4000
      });
      $("#anuller_stock").remove();
      $("#valider_stock").remove();
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      l.stop();
    }
  });
});

// let antenneId = null;
// $(".header_antenne").on('click', function(){
//     antenneId = $(this).attr('id');
// })
$("._detail").on("click", function (e) {
  e.preventDefault();
  var antenne = $(this).attr('id');
  $.ajax({
    type: 'GET',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('get_antenne_mouvement_stock', {
      antenne: antenne
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      // toastr.success('Mouvement de stock a été bien enregistre .', 'Succées', { timeOut: 4000 })
      $("#detail_modal .modal-body").html(result);
      $("#detail_modal .modal-body table").dataTable({
        language: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
          processing: true
        }
      });
      $("#detail_modal").modal("show");

      // $("#anuller_stock").remove();
      // $("#valider_stock").remove();
      // l.stop();
    },

    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      // l.stop();
    }
  });
});

$('body').on('click', '#exp_sortie', function () {
  // e.preventDefault();
  var antene = $('#exp_date').attr('data-id');
  var date = $('#exp_date').val();
  // console.log(antene ,date )
  window.open('/stock/lextraction_Sortie/' + antene + '/' + date, '_blank');
});
$('body').on('click', '#exp_entrer', function () {
  // e.preventDefault();
  var antene = $('#exp_date').attr('data-id');
  var date = $('#exp_date').val();
  // console.log(antene ,date )
  window.open('/stock/lextraction_Entree/' + antene + '/' + date, '_blank');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


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


/***/ })

},[["./assets/js/components/parametrage/udepot.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS91ZGVwb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiU2hvd0Zvcm1FcnJvcnMiLCJzZWxlY3RvciIsImZvcm1fbmFtZSIsImVycm9ycyIsImlkIiwiaXNHcm91cGUiLCIkIiwicmVtb3ZlIiwialF1ZXJ5IiwiZWFjaCIsInZpb2xhdGlvbnMiLCJpIiwidmFsIiwiY29sdW1uTmFtZSIsIngiLCJwcm9wZXJ0eVBhdGgiLCJzZWFyY2giLCJzZXBhcmF0b3JzIiwiYXJyIiwic3BsaXQiLCJSZWdFeHAiLCJqb2luIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJwYXJlbnQiLCJhcHBlbmQiLCJ0aXRsZSIsIlNob3dGb3JtRXJyb3JzV2l0aFBhcmFtIiwidGFibGVTaG93MyIsIkRhdGFUYWJsZSIsInRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwidHlwZSIsInZpc2libGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbiIsInNlbGVjdGVkSWQiLCJ0YWJsZTYiLCJkcmF3Iiwic2VsZWN0MiIsInRhYmxlNCIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsIm9yZGVyIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwibmFtZSIsImxhbmd1YWdlIiwicHJvY2Vzc2luZyIsImZpeGVkSGVhZGVyIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiZGF0YSIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsImNsb3Nlc3QiLCJhdHRyIiwiaHJlZiIsImdyaWQyIiwidGFibGUzIiwidGFibGU5IiwidGFibGUxMCIsInRhYmxlMTEiLCJ0YWJsZTgiLCJ0YWJsZTciLCJ3aWR0aCIsInRhYmxlNSIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInRhYmxlMiIsImNoYW5nZSIsImR0YSIsIkZvcm1EYXRhIiwiYWN0aW9uX3Rlc3QiLCJ0IiwiZ2V0IiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJjb2RlIiwidG9hc3RyIiwibWVzc2FnZSIsInRpbWVPdXQiLCJjc3MiLCJwcm9wIiwid2FybmluZyIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbl90ZXN0MiIsImNoZWNrZWQiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsInN0b3AiLCJlbXB0eSIsImNsaWNrIiwicm93IiwicmVzcG9uc2VKU09OIiwiaGlkZSIsIkpTT04iLCJwYXJzZSIsImh0bWwiLCJxdWFudHRpdHlEaXNwb25pYmxlIiwiQXJyYXlzT2ZBcnRpY2xlIiwiYWxsRWxlbWVudHMiLCJhcnRpY2xlSWQiLCJhcnRpY2xlTmFtZSIsInF1YW50aXR5RGlzcG9uaWJsZSIsInF1YW50aXR0eSIsInBhc3NlIiwibWFwIiwiYXJ0aWNsZSIsInB1c2giLCJmb3JFYWNoIiwicHJlcGVuZCIsImVsZW1lbnQiLCJOZXdBcnJheSIsImZpbHRlciIsIndoaWNoIiwiZmluZEluZGV4Iiwic2hvdyIsInN0cmluZ2lmeSIsIm9wZW4iLCJhbnRlbm5lIiwibW9kYWwiLCJhbnRlbmUiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNkVBQXVDLENBQUM7QUFDMkM7QUFDMUdDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBQzlCLElBQU1JLElBQUksR0FBR0gsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1JLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFD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QVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHlGQUE4QjtBQUNwRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNkWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMseUZBQThCO0FBQ3ZELHVCQUF1QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxxQkFBcUIsRUFBRTs7QUFFL0U7QUFDQTtBQUNBLEdBQUcsb0RBQW9EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxtQkFBTyxDQUFDLHlGQUE4QjtBQUNqRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCwyQkFBMkIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0Qsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELHFCQUFxQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJ1ZGVwb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgalF1ZXJ5LmVhY2goZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgIGlmKGlzR3JvdXBlID09IHRydWUpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0geDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBpZiAoeC5zZWFyY2goJ1xcXFxbJykgIT0gLTEgJiYgeC5zZWFyY2goJ1xcXFxdJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHNlcGFyYXRvcnMgPSBbJ1xcXFxdJywgJ1xcXFxbJ107XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9ycy5qb2luKCd8JykpKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnZGF0YS4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4KVxyXG5cclxuLyp2w6lyaWZpZXIgcydpbCBzJ2FnaXQgZCd1bmUgZm9ybXVsYWlyZSBhdmVjIHVuIGNoYW1wIHR5cGUgZmlsZSAqL1xyXG4gICAgICAgIGlmICghalF1ZXJ5KFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBjb2x1bW5OYW1lICsgJ19maWxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWUpO1xyXG4gICAgICAgIGlmIChjb2x1bW5OYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpXHJcbiAgICAgICAgICAgIHNlbGVjdG9yLmZpbmQoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0oc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIrc2VsZWN0b3IpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9ycyArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbnZhciB0YWJsZVNob3czID0gJCgnI2RhdGF0YWJsZS1zaG93MycpLkRhdGFUYWJsZSh7IFwicGFnaW5nXCI6IGZhbHNlIH0pO1xyXG52YXIgdGFibGUgPSAkKCcjZ3JpZCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF9saXN0JyksXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCAtMV0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1cclxuICAgIF0sXHJcbiAgICBcInBhZ2VMZW5ndGhcIjogMTUsXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCI1JVwiLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjI1JVwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjUlXCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIyNSVcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjI1JVwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjUlXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjUlXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjUlXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjUlXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjUlXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjUlXCIsIHZpc2libGU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiNSVcIiwgXCJvcmRlcmFibGVcIjogdHJ1ZSwgdmlzaWJsZTogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnI1N1aXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRJZCcpO1xyXG4gICAgbGV0IHNlbGVjdGVkSWQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdGFibGU2LmNsZWFyKCkuZHJhdygpO1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHRhYmxlNiA9ICQoJyNncmlkNicpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2xpc3RfYW50ZW5uZScpICsgJz9pZD0nICsgc2VsZWN0ZWRJZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgICAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIC0xXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFnZUxlbmd0aFwiOiAxNSxcclxuICAgICAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkLmFqYXgoe1xyXG4gICAgLy8gICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAvLyAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdsaXN0X2FudGVubmUnKSArICc/aWQ9JyArIHNlbGVjdGVkSWQsXHJcblxyXG4gICAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgLy8gICBhbGVydChkYXRhKTtcclxuICAgIC8vICAgICAgICAgdGFibGU2LmNsZWFyKCkuZHJhdygpO1xyXG4gICAgLy8gICAgICAgICAvLyB0YWJsZTYuYXBwZW5kKGRhdGEpO1xyXG4gICAgLy8gICAgICAgICAvLyB0YWJsZTYuRGF0YVRhYmxlKCkuY2xlYXIoKS5kcmF3KCk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRhYmxlNi5EYXRhVGFibGUoKS5yb3dzLmFkZCAvLyBBZGQgbmV3IGRhdGFcclxuICAgIC8vICAgICAgICAgLy8gdGFibGU2LkRhdGFUYWJsZSgpLmNvbHVtbnMuYWRqdXN0KCkuZHJhdygpO1xyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KVxyXG5cclxufSk7XHJcblxyXG4kKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG5cclxuXHJcblxyXG52YXIgdGFibGU0ID0gJCgnI2dyaWQ0JykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21vdXZlbWVudF9zdG9ja19saXN0X25vcm1hbDInKSArIGxvY2F0aW9uLnNlYXJjaCxcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuXHJcbiAgICBvcmRlcjogW1xyXG4gICAgICAgIFswLCBcImRlc2NcIl1cclxuICAgIF0sXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdLFxyXG4gICAgXSxcclxuICAgIHBhZ2VMZW5ndGg6IDE1LFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnbXYuaWQnIH0sXHJcblxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtbnQtZm9ybWF0XCIsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtdi5zb3VyY2UnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnbXYuc291cmNlX2NvZGUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgICAgICAgbmFtZTogJ2RlcC50aXRyZSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnYXIudGl0cmUnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qICAsXHJcbiAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnYXIuY29kZSdcclxuICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgICAgICAgbmFtZTogJ212LnF1YW50aXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgICAgICAgbmFtZTogJ212LnByaXh1bml0YWlyZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtbnQtZm9ybWF0XCIsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtdi50dmEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnbXYucmVtaXNlJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtbnQtZm9ybWF0XCIsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtdi5wcml4dHRjJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjIwMHB4XCJ9LFxyXG5cclxuXHJcblxyXG4gICAgXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG5cclxudGFibGU0Lm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbihlLCBzZXR0aW5ncykge1xyXG4gICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coc3QpO1xyXG4gICAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gICAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAgIC8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy8gQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFtdLCBbXSk7XHJcbiAgICAvLyBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFtdLCBbXSk7XHJcbiAgICAvLyAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwyLDMsNCw1LDYsNyw4LDksMTBdLCBbXSk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG4vKiBsaWVuIHZlcnMgbGEgbGl2cmFpc29uICovXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJy5jZF9vcCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3VfZGVwb3Rfc2hvdycsIHsgJ2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgZ3JpZDIgPSAkKCcjZ3JpZDInKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW91dmVtZW50X3N0b2NrX2VuY291cnNfbGlzdF92ZW50ZScpICsgbG9jYXRpb24uc2VhcmNoLFxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG5cclxuICAgIG9yZGVyOiBbXHJcbiAgICAgICAgWzAsIFwiZGVzY1wiXVxyXG4gICAgXSxcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCAyMDAwMDAwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl0sXHJcbiAgICBdLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdkZXQuaWQnIH0sXHJcblxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtbnQtZm9ybWF0XCIsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtdi5jYWIuZGF0ZURvY0Fzc28nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnY2x0Lm5vbSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnZHYuY29kZSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnY2FiLmNvZGUnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qICAsXHJcbiAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnYXIuY29kZSdcclxuICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgICAgICAgbmFtZTogJ2RlcC5jb2RlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgICAgICAgbmFtZTogJ2FyLmNvZGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnZGV0LnF1YW50aXRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgICAgICAgbmFtZTogJ2RldC5wcml4dW5pdGFpcmUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgICAgICAgbmFtZTogJ2RldC50dmEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibW50LWZvcm1hdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiAnZGV0LnR2YSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtbnQtZm9ybWF0XCIsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkZXQucmVtaXNlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXRcIixcclxuICAgICAgICAgICAgbmFtZTogJ2RldC5wcml4VHRjJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjIwMHB4XCJ9LFxyXG5cclxuXHJcblxyXG4gICAgXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG5cclxudmFyIHRhYmxlMyA9ICQoJyNncmlkMycpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtb3V2ZW1lbnRfc3RvY2tfZW5jb3Vyc19saXN0X2FjaGF0JyksXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCAtMV0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1cclxuICAgIF0sXHJcbiAgICBcInBhZ2VMZW5ndGhcIjogMTUsXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiIH0sXHJcblxyXG4gICAgXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG59KTtcclxudmFyIHRhYmxlNiA9ICQoJyNncmlkNicpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdsaXN0X2FudGVubmUnKSxcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1xyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIC0xXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXVxyXG4gICAgXSxcclxuICAgIFwicGFnZUxlbmd0aFwiOiAxNSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9XHJcbiAgICBdLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG52YXIgdGFibGU5ID0gJCgnI2dyaWQ5JykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2xpc3RfYW50ZW5uZScpLFxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgLTFdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXHJcbiAgICBdLFxyXG4gICAgXCJwYWdlTGVuZ3RoXCI6IDE1LFxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH1cclxuICAgIF0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxufSk7XHJcbnZhciB0YWJsZTEwID0gJCgnI2dyaWQxMCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdsaXN0X2FudGVubmUnKSxcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1xyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIC0xXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXVxyXG4gICAgXSxcclxuICAgIFwicGFnZUxlbmd0aFwiOiAxNSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9XHJcbiAgICBdLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG52YXIgdGFibGUxMSA9ICQoJyNncmlkMTEnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbGlzdF9hbnRlbm5lJyksXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCAtMV0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1cclxuICAgIF0sXHJcbiAgICBcInBhZ2VMZW5ndGhcIjogMTUsXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfVxyXG4gICAgXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG59KTtcclxudmFyIHRhYmxlOCA9ICQoJyNncmlkOCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdsaXN0X2FudGVubmVfbW91dmVtZW50X2NhYicpLFxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgLTFdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXHJcbiAgICBdLFxyXG4gICAgXCJwYWdlTGVuZ3RoXCI6IDE1LFxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG5cclxuICAgIF0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxufSk7XHJcbnZhciB0YWJsZTcgPSAkKCcjZ3JpZDcnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbGlzdF9hbnRlbm5lX2RlcG90JyksXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgLTFdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXHJcbiAgICBdLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdhbm4uY29kZScsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ2Fubi5kZXNpZ25hdGlvbicgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogXCJhbm4uZGVmYXV0XCIgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ2FydGljbGUnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdxdWFudGl0ZScgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ2FyLnByaXhfYWNoYXQnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdkZXBvdC50aXRyZScgfSxcclxuICAgIF0sXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuXHJcbnZhciB0YWJsZTUgPSAkKCcjZ3JpZDUnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbW91dmVtZW50X3N0b2NrX2VuY291cnNfbGlzdF90cmFuc2Zvcm1hdGlvbicpLFxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgLTFdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXHJcbiAgICBdLFxyXG4gICAgXCJwYWdlTGVuZ3RoXCI6IDE1LFxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwMHB4XCIgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMDBweFwiIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiB9LFxyXG5cclxuXHJcblxyXG4gICAgXSxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcbiQoJyNncmlkIHRib2R5Jykub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYmxlLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKCcjZ3JpZDIgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGUyLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKCcjZ3JpZDMgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGUzLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKCcjZ3JpZDUgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGU1LiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuJChcIiN2YWxpZFwiKS5jaGFuZ2UoZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gIGFsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gICAgLy8kKFwiZm9ybVwiKS5zdWJtaXQoKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID09IDEpIHtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1fbmFtZSA9ICQoJyNhY3Rpb25fdGVzdCcpLmF0dHIoJ25hbWUnKTtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKGFjdGlvbl90ZXN0KTtcclxuICAgICAgICAvL3ZhciBkdGEgPSAkKCcjYWN0aW9uX3Rlc3QnKS5zZXJpYWxpemUoKVxyXG4gICAgICAgIHZhciB0ID0gZHRhLmdldChcIl9hY3Rpb25bXVwiKTtcclxuICAgICAgICAvL2FsZXJ0KCB0KTtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgIC8vIHZhciB0PTE7XHJcbiAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgVmFsaWRlciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSwgVmFsaWRlclwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdkZXBvdF9tb3V2ZW1lbnRfc3RvY2tfdmFsaWRlcl92ZW50ZV9tdWx0aXBsZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTIuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNhbGxhY3Rpb25zXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiN2YWxpZDNcIikuY2hhbmdlKGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICBhbGVydCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIC8vJChcImZvcm1cIikuc3VibWl0KCk7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAxKSB7XHJcblxyXG4gICAgICAgIHZhciBmb3JtX25hbWUgPSAkKCcjYWN0aW9uX3Rlc3QnKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YShhY3Rpb25fdGVzdCk7XHJcbiAgICAgICAgLy92YXIgZHRhID0gJCgnI2FjdGlvbl90ZXN0Jykuc2VyaWFsaXplKClcclxuICAgICAgICB2YXIgdCA9IGR0YS5nZXQoXCJfYWN0aW9uW11cIik7XHJcbiAgICAgICAgLy9hbGVydCggdCk7XHJcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICAgICAvLyB2YXIgdD0xO1xyXG4gICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IFZhbGlkZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWksIFZhbGlkZXJcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGVwb3RfbW91dmVtZW50X3N0b2NrX3ZhbGlkZXJfdHJhbnNmb3JtYXRpb25fbXVsdGlwbGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdmFsaWQzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2FsbGFjdGlvbnNcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiI3ZhbGlkMlwiKS5jaGFuZ2UoZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gIGFsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gICAgLy8kKFwiZm9ybVwiKS5zdWJtaXQoKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID09IDEpIHtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1fbmFtZSA9ICQoJyNhY3Rpb25fdGVzdDInKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YShhY3Rpb25fdGVzdDIpO1xyXG4gICAgICAgIHZhciB0ID0gZHRhLmdldChcIl9hY3Rpb24yW11cIik7XHJcbiAgICAgICAgLy8gIGFsZXJ0KHQpO1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcblxyXG4gICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IFZhbGlkw6kgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWksIFZhbGlkZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RlcG90X21vdXZlbWVudF9zdG9ja192YWxpZGVyX2FjaGF0X211bHRpcGxlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlMy5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3ZhbGlkMlwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2FsbGFjdGlvbnMyXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJCgnLnRlc3QnKS5vbignc3VibWl0JywgJy5hY3Rpb25fdGVzdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHQgPSBkdGEuZ2V0KFwiX2FjdGlvbltdXCIpO1xyXG4gICAgLy9hbGVydCggdCk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudHlwZSk7XHJcblxyXG4gICAgaWYgKHQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBWYWxpZMOpIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFZhbGlkw6khXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RlcG90X21vdXZlbWVudF9zdG9ja192YWxpZGVyX3ZlbnRlX211bHRpcGxlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJCgnLnRlc3QyJykub24oJ3N1Ym1pdCcsICcuYWN0aW9uX3Rlc3QyJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgdCA9IGR0YS5nZXQoXCJfYWN0aW9uMltdXCIpO1xyXG4gICAgLy8gIGFsZXJ0KHQpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG5cclxuICAgIGlmICh0KSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgVmFsaWTDqSBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBWYWxpZMOpIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdkZXBvdF9tb3V2ZW1lbnRfc3RvY2tfdmFsaWRlcl9hY2hhdF9tdWx0aXBsZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlMy5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuJChcIiNhbGxhY3Rpb25zXCIpLmNoYW5nZShmdW5jdGlvbihlKSB7XHJcbiAgICAvLyQoJyNhbGxhY3Rpb25zJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAkKFwiLmFjdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAkKFwiI3ZhbGlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5hY3Rpb25cIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICQoXCIjdmFsaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJChcIiNhbGxhY3Rpb25zMlwiKS5jaGFuZ2UoZnVuY3Rpb24oZSkge1xyXG4gICAgLy8kKCcjYWxsYWN0aW9ucycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgJChcIi5hY3Rpb24yXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICQoXCIjdmFsaWQyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5hY3Rpb24yXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAkKFwiI3ZhbGlkMlwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNhbGxhY3Rpb25zM1wiKS5jaGFuZ2UoZnVuY3Rpb24oZSkge1xyXG4gICAgLy8kKCcjYWxsYWN0aW9ucycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgJChcIi5hY3Rpb25cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgJChcIiN2YWxpZDNcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmFjdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgJChcIiN2YWxpZDNcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5hY3Rpb24nLCBmdW5jdGlvbigpIHtcclxuICAgIC8vICBhbGVydCgpO1xyXG4gICAgJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyAgICAkKFwiLmJ0bl92YWxcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKCQoJy5hY3Rpb24nKS52YWwoKSk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuYWN0aW9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgYWxlcnQoKTtcclxuICAgICQoXCIjdmFsaWQzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIC8vICAgICQoXCIuYnRuX3ZhbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyAgY29uc29sZS5sb2coJCgnLmFjdGlvbicpLnZhbCgpKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuYWN0aW9uMicsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gIGFsZXJ0KCk7XHJcbiAgICAkKFwiI3ZhbGlkMlwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAvLyAgICQoXCIuYnRuX3ZhbDJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKCQoJy5hY3Rpb24nKS52YWwoKSk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5uZXcnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24oZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF9pbnNlcnQnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1X2RlcG90X3Nob3cnLCB7ICdpZCc6IHJlc3VsdC5kYXRhLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJyNfZWRpdCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF9lZGl0JywgeyAnaWQnOiBpZCB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKCcuZ3JpZCcpLm9uKCdjbGljaycsICcudmFsaWRlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vJCgnLnZhbGlkZXInKS5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpOyAvL2FsZXJ0KGlkKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IFZhbGlkw6kgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgVmFsaWTDqSFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZGVwb3RfbW91dmVtZW50X3N0b2NrX3ZhbGlkZXJfdmVudGUnLCB7ICdpZCc6IGlkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlMi5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKCcuZ3JpZDMnKS5vbignY2xpY2snLCAnLnZhbGlkZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyQoJy52YWxpZGVyJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTsgLy9hbGVydChpZCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBWYWxpZMOpIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFZhbGlkw6khXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RlcG90X21vdXZlbWVudF9zdG9ja192YWxpZGVyX2FjaGF0JywgeyAnaWQnOiBpZCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTMuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgLy9hbGVydCggaWQgKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfZGVwb3RfdXBkYXRlJywgeyBpZDogaWQgfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNfc2hvdycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndV9kZXBvdF9zaG93JywgeyAnaWQnOiBpZCB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnI19kZWxldGUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG5cclxuICAgIHZhciBpZCA9ICQoJyN0ZXN0JykuZGF0YShcImRlcG90SWRcIik7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX2RlcG90X2RlbGV0ZScsIHsgJ2lkJzogaWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnc3RvY2tfZGVwb3RfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL1xyXG4vL1xyXG4vLyQoJy5fZGVsZXRlX2ZpY2hpZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4vLyAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbi8vICAgIGlmIChpZCkge1xyXG4vLyAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4vLyAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4vLyAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuLy8gICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuLy8gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4vLyAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbi8vICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbi8vICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbi8vICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4vLyAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4vLyAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4vLyAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbi8vICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfZmljaGllcnNfZGVsZXRlJywgeydpZCc6IGlkfSksXHJcbi8vICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfSBlbHNlIHtcclxuLy8gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICB9XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy99KTtcclxuLy9cclxuLy8kKCdib2R5Jykub24oJ3N1Ym1pdCcsICcuc3RvY2tfcHJvZHVpdF9hZGRfc3RvY2snLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAvLyAgYWxlcnQoKTtcclxuLy8gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4vLyAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4vLyAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuLy8gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbi8vICAgICQuYWpheCh7XHJcbi8vICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbi8vICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3N0b2NrX3Byb2R1aXRfYWRkX3N0b2NrJywgeydpZCc6IGlkfSksXHJcbi8vICAgICAgICBkYXRhOiBkdGEsXHJcbi8vICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbi8vICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuLy8gICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbi8vICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuLy8gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuLy8gICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSxcclxuLy8gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbi8vICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbi8vICAgICAgICB9XHJcbi8vICAgIH0pO1xyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSk7XHJcblxyXG5cclxuJCgnI19hcmNoaXZlcicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG5cclxuICAgIHZhciBpZCA9ICQoJyN0ZXN0JykuZGF0YShcImRlcG90SWRcIik7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBBcmNoaXZlciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYXJjaGl2ZSc+PC9pPiBPdWksIEFyY2hpdmVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF9hcmNoaXZlcicsIHsgJ2lkJzogaWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignc3VibWl0JywgJy5zdG9ja19kZXBvdF90cmVuc2ZlcnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzdG9ja19kZXBvdF90cmVuc2ZlcnQnLCB7ICdpZCc6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwic3RvY2tfZGVwb3RfbW91dmVtZW50c3RvY2tcIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIC8vICBsb2NhdGlvbi5yZWxvYWQoKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcuYW50ZW5uZV9zb3VyY2UnKS5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgdmFyIGRhdGEgPSAkKFwiLmFudGVubmVfc291cmNlIDpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgICQoJy5zYW50ZW5uZXllcnJvcicpLmhpZGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIGxldCBhbnRlbm5lID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGlmIChkYXRhICE9IFwiXCIpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXRfYW50ZW5uZV9hcnRpY2xlJywgeyAnaWQnOiBkYXRhIH0pLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoXCIuYXJ0aWNsZV9kaXNwb25pYmxlXCIpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFydGljbGVfZGlzcG9uaWJsZSBzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5TaXRlX1JjJykub24oJ2NoYW5nZScsICgpID0+IHtcclxuICAgIHZhciBkYXRhID0gJChcIi5TaXRlX1JjIDpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgICQoJy5zYW50ZW5uZXllcnJvcicpLmhpZGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIGxldCBhbnRlbm5lID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGlmIChkYXRhICE9IFwiXCIpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXRfZGVtYW5kX2FydGljbGUnLCB7ICdpZCc6IGRhdGEgfSksXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hcnRpY2xlX2Rpc3BvbmlibGVfUmNcIikuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYXJ0aWNsZV9kaXNwb25pYmxlX1JjIHNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy8gJChcIi50eXBlX21vdXZlbWVudFwiKS5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgdHlwZU1vdXZlbWVudCA9ICQoXCIudHlwZV9tb3V2ZW1lbnQgOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4vLyAgICAgJCgnLnR5cGVfbW91dmVtZW50ZXJyb3InKS5oaWRlKCk7XHJcbi8vICAgICBpZih0eXBlTW91dmVtZW50ICE9ICcnKSB7XHJcbi8vICAgICAgICAgJC5hamF4KHtcclxuLy8gICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbi8vICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ2V0X2FudGVubmVzJywgeyd2YWwnOiB0eXBlTW91dmVtZW50fSksXHJcbi8vICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyAgICAgICAgICAgICAgICAgJChcIi5hbnRlbm5lX2Rlc3RpbmF0aW9uXCIpLmh0bWwoZGF0YS5odG1sRGVzaW5hdGlvbik7XHJcbi8vICAgICAgICAgICAgICAgICAkKFwiLmFudGVubmVfc291cmNlXCIpLmh0bWwoZGF0YS5odG1sU291cmNlKTtcclxuLy8gICAgICAgICAgICAgICAgICQoXCIuYW50ZW5uZV9kZXN0aW5hdGlvblwiKS5zZWxlY3QyKCk7XHJcbi8vICAgICAgICAgICAgICAgICAkKFwiLmFudGVubmVfc291cmNlXCIpLnNlbGVjdDIoKTtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuLy8gICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5sZXQgcXVhbnR0aXR5RGlzcG9uaWJsZTtcclxuXHJcbi8vICQoJy5hcnRpY2xlX2Rpc3BvbmlibGUnKS5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4vLyAgICAgJCgnLmFydGljbGV5ZXJyb3InKS5oaWRlKCk7XHJcbi8vICAgICBxdWFudHRpdHlEaXNwb25pYmxlID0gJChcIi5hcnRpY2xlX2Rpc3BvbmlibGUgOnNlbGVjdGVkXCIpLmF0dHIoJ2RhdGEnKTtcclxuXHJcbi8vICAgICAkKCcucXVhbnRpdHR5JykudmFsKCcnKTtcclxuLy8gfSk7XHJcblxyXG4vLyAkKCcucXVhbnRpdHR5Jykub24oJ2tleXVwJywgKCkgPT4ge1xyXG4vLyAgICAgJCgnLnF1YW50aXR5ZXJyb3InKS5oaWRlKCk7XHJcbi8vICAgICBjb25zdCBxdWFudGl0eSA9ICQoJy5xdWFudGl0dHknKS52YWwoKTtcclxuLy8gICAgIGlmKHF1YW50aXR5ID4gcXVhbnR0aXR5RGlzcG9uaWJsZSkge1xyXG4vLyAgICAgICAgICQoJy5xdWFudGl0dHknKS52YWwocXVhbnR0aXR5RGlzcG9uaWJsZSlcclxuLy8gICAgIH0gZWxzZSBpZiAocXVhbnRpdHkgPCAwKSB7XHJcbi8vICAgICAgICAgJCgnLnF1YW50aXR0eScpLnZhbCgxKVxyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuJChcIi5hbnRlbm5lX2Rlc3RpbmF0aW9uXCIpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgJCgnLmRhbnRlbm5leWVycm9yJykuaGlkZSgpO1xyXG4gICAgfSlcclxuICAgIC8vICQoXCIjbW91dmVzdG9ja1wiKS5vbignc3VibWl0JywgKGUpID0+IHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyAgICAgbC5zdGFydCgpO1xyXG4gICAgLy8gICAgIGxldCBhY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gICAgIGlmKCQoXCIudHlwZV9tb3V2ZW1lbnQgOnNlbGVjdGVkXCIpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgLy8gICAgICAgICAkKCcudHlwZV9tb3V2ZW1lbnRlcnJvcicpLnNob3coKTtcclxuICAgIC8vICAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmKCQoXCIuYW50ZW5uZV9zb3VyY2UgOnNlbGVjdGVkXCIpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgLy8gICAgICAgICAkKCcuc2FudGVubmV5ZXJyb3InKS5zaG93KCk7XHJcbiAgICAvLyAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZigkKFwiLmFudGVubmVfZGVzdGluYXRpb24gOnNlbGVjdGVkXCIpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgLy8gICAgICAgICAkKCcuZGFudGVubmV5ZXJyb3InKS5zaG93KCk7XHJcbiAgICAvLyAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZigkKFwiLmFydGljbGVfZGlzcG9uaWJsZSA6c2VsZWN0ZWRcIikudmFsKCkgPT0gXCJcIil7XHJcbiAgICAvLyAgICAgICAgICQoJy5hcnRpY2xleWVycm9yJykuc2hvdygpO1xyXG4gICAgLy8gICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYoJCgnLnF1YW50aXR0eScpLnZhbCgpLnRyaW0oKSA9PSBcIlwiKXtcclxuICAgIC8vICAgICAgICAgJCgnLnF1YW50aXR5ZXJyb3InKS5zaG93KCk7XHJcbiAgICAvLyAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgLy8gICAgIGRhdGEuYXBwZW5kKCdhbnRlbm5lX3NvdXJjZScsICQoXCIuYW50ZW5uZV9zb3VyY2UgOnNlbGVjdGVkXCIpLnZhbCgpKTtcclxuICAgIC8vICAgICBkYXRhLmFwcGVuZCgnYW50ZW5uZV9kZXN0aW5hdGlvbicsICQoXCIuYW50ZW5uZV9kZXN0aW5hdGlvbiA6c2VsZWN0ZWRcIikudmFsKCkpO1xyXG4gICAgLy8gICAgIGRhdGEuYXBwZW5kKCdhcnRpY2xlJywgJChcIi5hcnRpY2xlX2Rpc3BvbmlibGUgOnNlbGVjdGVkXCIpLnZhbCgpKTtcclxuICAgIC8vICAgICBkYXRhLmFwcGVuZCgncXVhbnRpdGllJywgJChcIi5xdWFudGl0dHlcIikudmFsKCkpO1xyXG4gICAgLy8gICAgIGRhdGEuYXBwZW5kKCd0eXBlX21vdXZlbWVudCcsICQoXCIudHlwZV9tb3V2ZW1lbnQgOnNlbGVjdGVkXCIpLnZhbCgpKTtcclxuICAgIC8vICAgICBpZihhY3RpdmUpIHtcclxuICAgIC8vICAgICAgICAgJC5hamF4KHtcclxuICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgIC8vICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJhbnNmZXJfc3RvY2snKSxcclxuICAgIC8vICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAvLyAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgICAgICBjb250ZW50VHlwZTpmYWxzZSxcclxuICAgIC8vICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnTW91dmVtZW50IGRlIHN0b2NrIGEgw6l0w6kgYmllbiBlZmZlY3R1w6kgLicsICdTdWNjw6llcycsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAkKFwiLmFudGVubmVfc291cmNlIG9wdGlvbjpmaXJzdFwiKS5wcm9wKCdzZWxlY3RlZCcsJ3NlbGVjdGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJChcIi5hbnRlbm5lX2Rlc3RpbmF0aW9uIG9wdGlvbjpmaXJzdFwiKS5wcm9wKCdzZWxlY3RlZCcsJ3NlbGVjdGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJChcIi5xdWFudGl0dHlcIikudmFsKFwiXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICQoXCIudHlwZV9tb3V2ZW1lbnQgb3B0aW9uOmZpcnN0XCIpLnByb3AoJ3NlbGVjdGVkJywnc2VsZWN0ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbC5zdG9wKCk7XHJcblxyXG4vLyB9KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5zZWxlY3QyX2RlbW9fYW50ZW5uZScsICgpID0+IHtcclxuICAgIGlmICgkKFwiLnNlbGVjdDJfZGVtb19hbnRlbm5lIDpzZWxlY3RlZFwiKS52YWwoKSAhPSBcIm51bGxcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoXCIuc2VsZWN0Ml9kZW1vX2FudGVubmUgOnNlbGVjdGVkXCIpLnZhbCgpKTtcclxuICAgICAgICB0YWJsZTcuY29sdW1ucygwKS5zZWFyY2goJChcIi5zZWxlY3QyX2RlbW9fYW50ZW5uZSA6c2VsZWN0ZWRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGU3LmNvbHVtbnMoMCkuc2VhcmNoKCcnKS5kcmF3KCk7XHJcbiAgICB9XHJcbn0pXHJcbmxldCBBcnJheXNPZkFydGljbGUgPSBbXTtcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuYWRkX2FydGljbGVfc3RvY2tfYWN0aXZlJywgKCkgPT4ge1xyXG5cclxuICAgIHZhciBhbGxFbGVtZW50cyA9ICQoJy5hZGRfYXJ0aWNsZV9zdG9ja19hY3RpdmUnKS5jbG9zZXN0KFwiLnBhcnJlbnRBcnRpY2xlXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYWxsRWxlbWVudHMpOyAgIFxyXG4gICAgdmFyIGFydGljbGVJZCA9IGFsbEVsZW1lbnRzLmZpbmQoJy5hcnRpY2xlX2Rpc3BvbmlibGUgOnNlbGVjdGVkJykudmFsKCk7XHJcbiAgICB2YXIgYXJ0aWNsZU5hbWUgPSBhbGxFbGVtZW50cy5maW5kKCcuYXJ0aWNsZV9kaXNwb25pYmxlIDpzZWxlY3RlZCcpLmF0dHIoJ2RhdGEtbmFtZScpO1xyXG4gICAgdmFyIHF1YW50aXR5RGlzcG9uaWJsZSA9IGFsbEVsZW1lbnRzLmZpbmQoJy5hcnRpY2xlX2Rpc3BvbmlibGUgOnNlbGVjdGVkJykuYXR0cignZGF0YS1xJyk7XHJcbiAgICB2YXIgcXVhbnRpdHR5ID0gYWxsRWxlbWVudHMuZmluZCgnLnF1YW50aXR0eScpLnZhbCgpO1xyXG4gICAgY29uc29sZS5sb2cocXVhbnRpdHlEaXNwb25pYmxlLCBxdWFudGl0dHkpXHJcbiAgICBpZiAoK3F1YW50aXR5RGlzcG9uaWJsZSA8ICtxdWFudGl0dHkgfHwgK3F1YW50aXR0eSA8IDEpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ1ByaWVyZSBkXFwnZW50cmUgdW5lIHZhbGV1ciBtb2luIG91IGVnYWxlICcgKyBxdWFudGl0eURpc3BvbmlibGUsIFwiRXJyZXVyXCIsICB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcbiAgICAgICAgLy8gYWxlcnQoJ1ByaWVyZSBkXFwnZW50cmUgdW5lIHZhbGV1ciBtb2luIG91IGVnYWxlICcgKyApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAkKGAuYXJ0aWNsZV9kaXNwb25pYmxlICMke2FydGljbGVJZH1gKS5oaWRlKCk7XHJcbiAgICAgICAgLy8gJCgnLmFydGljbGVfZGlzcG9uaWJsZScpLnNlbGVjdDIoKTtcclxuXHJcbiAgICAgICAgbGV0IHBhc3NlID0gdHJ1ZVxyXG4gICAgICAgIEFycmF5c09mQXJ0aWNsZS5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFydGljbGUuaWQgPT0gYXJ0aWNsZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgJ0FydGljbGUgZMOpamEgZXhpc3QnLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCgnQXJ0aWNsZSBkw6lqYSBleGlzdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocGFzc2UpIHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoJ3Rlc3QgcGFzc2UnKTtcclxuICAgICAgICAgICAgQXJyYXlzT2ZBcnRpY2xlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogYXJ0aWNsZUlkLFxyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBhcnRpY2xlTmFtZSxcclxuICAgICAgICAgICAgICAgICdxdWFudGl0eURpc3BvbmlibGUnOiBxdWFudGl0eURpc3BvbmlibGUsXHJcbiAgICAgICAgICAgICAgICAncXVhbnRpdHR5JzogcXVhbnRpdHR5LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIi5hcHBlbmRFbGVtZW50XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBsZXQgaHRtbDtcclxuICAgICAgICAgICAgQXJyYXlzT2ZBcnRpY2xlLmZvckVhY2goKGFydGljbGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYDx0ciBjbGFzcz1cImFwcGVuZEVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHRkPiAke2krMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiAke2FydGljbGUubmFtZX0gPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInF1YW50aXR5X2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHthcnRpY2xlLnF1YW50aXR0eX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPVwicGFkZGluZzogN3B4IDtcIiBkYXRhLWlkPVwiJHthcnRpY2xlLmlkfVwiIGNsYXNzPVwiZWRpdEFydGljbGUgYnRuLWljb24tZGV0YWlsIGJ0biBidG4td2hpdGUgYnRuLXdhcm5pbmcgYnRuLW91dGxpbmUgIGJ0bi14cyBteS1idXR0b24yIHVwcGVyIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCIgZmEgIGZhLWVkaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9XCJwYWRkaW5nOiA3cHggO1wiIGRhdGEtaWQ9XCIke2FydGljbGUuaWR9XCIgY2xhc3M9XCJkZWxldGVBcnRpY2xlIGJ0bi1pY29uLWRldGFpbCBidG4gYnRuLXdoaXRlIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmUgIGJ0bi14cyBteS1idXR0b24yIHVwcGVyIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCIgZmEgIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0cj5gXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKFwiLmFydGljbGVfZGlzcG9uaWJsZV9SY1wiKS5wcmVwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiLmFydGljbGVfZGlzcG9uaWJsZVwiKS5wcmVwZW5kKGh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmRlbGV0ZUFydGljbGUnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIGxldCBOZXdBcnJheSA9IEFycmF5c09mQXJ0aWNsZS5maWx0ZXIoKGFydGljbGUpID0+IHtcclxuICAgICAgICByZXR1cm4gYXJ0aWNsZS5pZCAhPSBpZFxyXG4gICAgfSk7XHJcbiAgICBBcnJheXNPZkFydGljbGUgPSBOZXdBcnJheTtcclxuICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhBcnJheXNPZkFydGljbGUpO1xyXG59KVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5lZGl0QXJ0aWNsZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICB2YXIgZWxlbWVudCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5xdWFudGl0eV9pbnB1dFwiKVxyXG4gICAgdmFyIGFydGljbGUgPSBBcnJheXNPZkFydGljbGUuZmluZCgoYXJ0aWNsZSkgPT4gYXJ0aWNsZS5pZCA9PSBpZCk7XHJcbiAgICBlbGVtZW50Lmh0bWwoYDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZGF0YS1pZD1cIiR7YXJ0aWNsZS5pZH1cIiB2YWx1ZT1cIiR7YXJ0aWNsZS5xdWFudGl0dHl9XCIgY2xhc3M9XCIgcXVhbnRpdHlfdXBkYXRlIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIj5gKVxyXG4gICAgY29uc29sZS5sb2coQXJyYXlzT2ZBcnRpY2xlKVxyXG59KVxyXG4kKCdib2R5Jykub24oJ2tleXVwJywgJy5xdWFudGl0eV91cGRhdGUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgIHZhciBxdWFudGl0dHkgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcclxuICAgICAgICB2YXIgYXJ0aWNsZSA9IEFycmF5c09mQXJ0aWNsZS5maW5kSW5kZXgoYXJ0aWNsZSA9PiBhcnRpY2xlLmlkID09IGlkKTtcclxuICAgICAgICBpZiAoQXJyYXlzT2ZBcnRpY2xlW2FydGljbGVdLnF1YW50aXR5RGlzcG9uaWJsZSA+PSArcXVhbnRpdHR5ICYmICtxdWFudGl0dHkgPiAxKSB7XHJcbiAgICAgICAgICAgIEFycmF5c09mQXJ0aWNsZVthcnRpY2xlXS5xdWFudGl0dHkgPSBxdWFudGl0dHlcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5odG1sKHF1YW50aXR0eSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiYm9keSAuYWxyZWFkeVF1YW50aXR5XCIpLnNob3coKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoJ1ByaWVyZSBkXFwnZW50cmUgdW5lIHZhbGV1ciBtb2luIG91IGVnYWxlICcgKyBBcnJheXNPZkFydGljbGVbYXJ0aWNsZV0ucXVhbnRpdHlEaXNwb25pYmxlKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdQcmllcmUgZFxcJ2VudHJlIHVuZSB2YWxldXIgbW9pbiBvdSBlZ2FsZSAnICsgQXJyYXlzT2ZBcnRpY2xlW2FydGljbGVdLnF1YW50aXR5RGlzcG9uaWJsZSwgXCJFcnJldXJcIiwgIHsgdGltZU91dDogNDAwMCB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG4kKFwiI21vdXZlX3N0b2NrXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmIChlLndoaWNoID09IDEzKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGRhdGEuYXBwZW5kKCdhbnRlbm5lX3NvdXJjZScsICQoXCIuYW50ZW5uZV9zb3VyY2UgOnNlbGVjdGVkXCIpLnZhbCgpKTtcclxuICAgIGRhdGEuYXBwZW5kKCdhbnRlbm5lX2Rlc3RpbmF0aW9uJywgJChcIi5hbnRlbm5lX2Rlc3RpbmF0aW9uIDpzZWxlY3RlZFwiKS52YWwoKSk7XHJcbiAgICBkYXRhLmFwcGVuZCgndHlwZV9tb3V2ZW1lbnQnLCAkKFwiLnR5cGVfbW91dmVtZW50IDpzZWxlY3RlZFwiKS52YWwoKSk7XHJcbiAgICBkYXRhLmFwcGVuZCgnYXJ0aWNsZXMnLCBKU09OLnN0cmluZ2lmeShBcnJheXNPZkFydGljbGUpKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJhbnNmZXJfc3RvY2snKSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnTW91dmVtZW50IGRlIHN0b2NrIGEgw6l0w6kgYmllbiBlZmZlY3R1w6kgLicsICdTdWNjw6llcycsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9zdG9jay91bW91dmVtZW50Y2FiL3Nob3cvJyArIGlkLCBcIl9zZWxmXCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSlcclxuJChcIiNhbnVsbGVyX3N0b2NrXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhbnVsbGVyX3N0b2NrJyksXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnTW91dmVtZW50IGRlIHN0b2NrIGEgw6l0w6kgYmllbiBhbnVsbGVyIC4nLCAnU3VjY8OpZXMnLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgJChcIiNhbnVsbGVyX3N0b2NrXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3ZhbGlkZXJfc3RvY2tcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pXHJcbiAgICAkKFwiI3ZhbGlkZXJfc3RvY2tcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZCgnaWQnLCBpZCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3ZhbGlkZXJfc3RvY2snKSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdNb3V2ZW1lbnQgZGUgc3RvY2sgYSDDqXTDqSBiaWVuIGVucmVnaXN0cmUgLicsICdTdWNjw6llcycsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAkKFwiI2FudWxsZXJfc3RvY2tcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdmFsaWRlcl9zdG9ja1wiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcbi8vIGxldCBhbnRlbm5lSWQgPSBudWxsO1xyXG4vLyAkKFwiLmhlYWRlcl9hbnRlbm5lXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICBhbnRlbm5lSWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbi8vIH0pXHJcbiQoXCIuX2RldGFpbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBhbnRlbm5lID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ2V0X2FudGVubmVfbW91dmVtZW50X3N0b2NrJywge2FudGVubmV9KSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyB0b2FzdHIuc3VjY2VzcygnTW91dmVtZW50IGRlIHN0b2NrIGEgw6l0w6kgYmllbiBlbnJlZ2lzdHJlIC4nLCAnU3VjY8OpZXMnLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgJChcIiNkZXRhaWxfbW9kYWwgLm1vZGFsLWJvZHlcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAkKFwiI2RldGFpbF9tb2RhbCAubW9kYWwtYm9keSB0YWJsZVwiKS5kYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIiNkZXRhaWxfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcblxyXG4gICAgICAgICAgICAvLyAkKFwiI2FudWxsZXJfc3RvY2tcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIC8vICQoXCIjdmFsaWRlcl9zdG9ja1wiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgLy8gbC5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2V4cF9zb3J0aWUnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBhbnRlbmUgPSAkKCcjZXhwX2RhdGUnKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICBsZXQgZGF0ZSA9ICQoJyNleHBfZGF0ZScpLnZhbCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYW50ZW5lICxkYXRlIClcclxuICAgIHdpbmRvdy5vcGVuKCcvc3RvY2svbGV4dHJhY3Rpb25fU29ydGllLycrYW50ZW5lKycvJytkYXRlLCAnX2JsYW5rJyk7XHJcblxyXG59KTtcclxuJCgnYm9keScpLm9uKCdjbGljaycsJyNleHBfZW50cmVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgYW50ZW5lID0gJCgnI2V4cF9kYXRlJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgbGV0IGRhdGUgPSAkKCcjZXhwX2RhdGUnKS52YWwoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFudGVuZSAsZGF0ZSApXHJcbiAgICB3aW5kb3cub3BlbignL3N0b2NrL2xleHRyYWN0aW9uX0VudHJlZS8nK2FudGVuZSsnLycrZGF0ZSwgJ19ibGFuaycpO1xyXG5cclxufSk7IiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCJ2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoRSk7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgbGVuKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyAxKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmRJbmRleDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORF9JTkRFWCA9ICdmaW5kSW5kZXgnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EX0lOREVYIGluIFtdKSBBcnJheSgxKVtGSU5EX0lOREVYXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kaW5kZXhcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmRJbmRleCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIEZVTkNUSU9OX05BTUVfRVhJU1RTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5FWElTVFM7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmcpO1xudmFyIG5hbWVSRSA9IC9mdW5jdGlvblxcYig/Olxcc3xcXC9cXCpbXFxTXFxzXSo/XFwqXFwvfFxcL1xcL1teXFxuXFxyXSpbXFxuXFxyXSspKihbXlxccygvXSopLztcbnZhciByZWdFeHBFeGVjID0gdW5jdXJyeVRoaXMobmFtZVJFLmV4ZWMpO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIUZVTkNUSU9OX05BTUVfRVhJU1RTKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlZ0V4cEV4ZWMobmFtZVJFLCBmdW5jdGlvblRvU3RyaW5nKHRoaXMpKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==