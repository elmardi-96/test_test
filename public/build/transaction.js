(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction"],{

/***/ "./assets/js/components/tresorerie/transaction.js":
/*!********************************************************!*\
  !*** ./assets/js/components/tresorerie/transaction.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.setRoutingData(routes);
global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
var transactions = [];
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate("tr_transaction_list2"),
    // json datasource
    type: "get",
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
  order: [[0, "desc"]],
  columns: [{
    orderable: true,
    name: 'tr.id',
    width: "5%"
  }, {
    orderable: true,
    name: 'tr.code'
  }, {
    orderable: true,
    name: 'tr.ref_doc_asso'
  }, {
    orderable: true,
    name: "DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y')"
  }, {
    orderable: true,
    name: "tr.num_cheque"
  }, {
    orderable: true,
    name: "DATE_FORMAT(tr.date_echeance,'%d/%m/%Y')"
  }, {
    orderable: true,
    name: "DATE_FORMAT(tr.date,'%d/%m/%Y')"
  }, {
    orderable: true,
    name: 'mdp.designation'
  }, {
    orderable: true,
    name: 'frs.societe'
  }, {
    orderable: true,
    name: 'cl.societe'
  }, {
    orderable: true,
    name: "CONCAT (emp.nom,' ',emp.prenom)"
  }, {
    orderable: true,
    name: "com.designation"
  }, {
    orderable: true,
    name: 'tr.`montant`',
    className: 'reg-back'
  }, {
    orderable: true,
    name: 'pie.code',
    className: 'reg-back'
  }, {
    orderable: true,
    name: "DATE_FORMAT(tr.created ,'%Y')",
    className: 'reg-back'
  }, {
    orderable: true,
    name: 'is_valider',
    className: 'reg-back'
  }, {
    orderable: true,
    name: 'parvenue.v'
  }, {
    orderable: true,
    name: 'tr.code'
  }, {
    orderable: true,
    width: "10%"
  }],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }
  // {
  //     extend: "excel",
  //     exportOptions: {
  //         columns: ":visible",
  //         rows: ":visible",
  //         format: {
  //             body: function(data, row, column, node) {
  //                 data = $('<p>' + data + '</p>').text();
  //                 return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
  //             }
  //         }
  //     },
  // },
  ],

  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate("datatables_langue"),
    processing: true
  },
  // fixedHeader: true,
  footerCallback: function footerCallback(row, data, start, end, display) {
    $(".center-class").remove();
    var api = this.api(),
      data;

    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
    };
    var floatVal = function floatVal(i) {
      if (typeof i === "number") {
        return i;
      } else if (typeof i === "string") {
        i = i.replace("$", "");
        i = i.replace(",", "");
        var result = parseFloat(i);
        if (isNaN(result)) {
          try {
            var result = $jq(i).text();
            result = parseFloat(result);
            if (isNaN(result)) {
              result = 0;
            }
            ;
            return result * 1;
          } catch (error) {
            return 0;
          }
        } else {
          return result * 1;
        }
      } else {
        alert("Unhandled type for totals [" + _typeof(i) + "]");
        return 0;
      }
    };
    var total4 = api.column(12, {
      page: 'current'
    }).data().reduce(function (a, b) {
      return floatVal(a) + floatVal(b);
    }, 0);
    $(api.column(12).footer()).append('<center class="center-class" style="font-size: 10px;">' + total4.toFixed(2) + " </center>");

    /*  var allpage = api
     .column(9)
     .data()
     .reduce(function (a, b) {
         return intVal(a) + intVal(b);
     }, 0);
       var total5 = api
         .column(9,{ page: 'current'})
         .data()
         .reduce(function (a, b) {
             return intVal(a) + intVal(b);
         }, 0);
     $(api.column(9).footer()).append(
         '<center class="center-class" style="font-size: 10px;"> ' + total5.toFixed(2)*-1 + "</center>"
     ); */
    // Update footer
  }
});
/*var table = $('#grid').DataTable({

    ajax: {
        url: Routing.generate('tr_transaction_list'), // json datasource
        type: "get",
    },
    
    "deferRender": true,
    "stateSave": false,
    "order": [[0, "desc"]],
    "lengthMenu": [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],

//    "columns": [
//        { "orderable": true, "searchable": true, "width": "1px", "targets": [0] },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//        { "orderable": true, "width": "10px", "targets": 0 },
//    ],
   
    dom: 'f<"html5buttons btn-group"B>lTgtip',
    buttons: [
        'columnsToggle',
        {
            text: 'Restaurer',
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function (e, dt, node, config) {
                table.state.clear();
                window.location.reload();
            },

        },
        {
            extend: "excel",
            exportOptions: {
              columns: ":visible",
              rows: ":visible",
            },
          },
    ],
    "language": {
        "url": Routing.generate('datatables_langue'),
        "processing": true
    },
    fixedHeader: true,
    "scrollY": "350px",
    "scrollCollapse": true,
    "paging": false,
    footerCallback: function (row, data, start, end, display) {
        $(".center-class").remove();
        var api = this.api(),
            data;

        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
            return typeof i === "string"
                ? i.replace(/[\$,]/g, "") * 1
                : typeof i === "number"
                    ? i
                    : 0;
        };

        var total4 = api
            .column(12,{ page: 'current'})
            .data()
            .reduce(function (a, b) {
                return intVal(a) + intVal(b);
            }, 0);

            var totalall = api
            .column(12)
            .data()
            .reduce(function (a, b) {
                return intVal(a) + intVal(b);
            }, 0);   
        $(api.column(12).footer()).append(
            '<center class="center-class" style="font-size: 10px;">' + total4.toFixed(2) +" </center>"
           
        );

       /*  var allpage = api
        .column(9)
        .data()
        .reduce(function (a, b) {
            return intVal(a) + intVal(b);
        }, 0);

        var total5 = api
            .column(9,{ page: 'current'})
            .data()
            .reduce(function (a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        $(api.column(9).footer()).append(
            '<center class="center-class" style="font-size: 10px;"> ' + total5.toFixed(2)*-1 + "</center>"
        ); * /
        // Update footer
       
    },
    initComplete: function () {
        var api = this.api();
    
        api.$("td").click(function () {
            //alert()
          var str = this.innerHTML.toLowerCase();
          var n = str.search("cd_op");
          
          //console.log($(str)[0].nodeName);
          
          if (n == -1 && $(str).length == 0 ) {
            api.search(this.innerHTML).draw();
          }
        });
      },
});*/

$('body').on('change', '.select2_demo_4', function () {
  //alert($(this).val())
  $('.bc').html('');
  $('.bcN').html('');
  /*var dots = window.setInterval( function() {
      var wait = document.getElementById("wait");
      var wait2 = document.getElementById("wait2");
      if ( wait.innerHTML.length > 3 ) 
          wait.innerHTML = "";
      else 
          wait.innerHTML += ".";
      
      if ( wait2.innerHTML.length > 3 ) 
          wait2.innerHTML = "";
      else 
          wait2.innerHTML += "."; 
   } , 400);*/
  if ($(this).val() != "null") {
    table.columns(11).search($(this).val()).draw();
    //alert($(this).val())
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_transaction_somme_montant'),
      data: {
        'data': $(this).val()
      },
      success: function success(result) {
        console.log(result);
        $('.bc').text(result.r.bc);
        $('.bcN').text(result.r.bcNa);
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, {
          timeOut: 4000
        });
      }
    });
  } else {
    table.columns(11).search('').draw();
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_transaction_somme_montant'),
      data: {
        'data': $(this).val()
      },
      success: function success(result) {
        console.log(result);
        $('.bc').text(result.r.bc);
        $('.bcN').text(result.r.bcNa);
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", errorThrown, {
          timeOut: 4000
        });
      }
    });
  }
});
$.ajax({
  type: 'POST',
  url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_transaction_somme_montant'),
  processData: false,
  contentType: false,
  success: function success(result) {
    console.log(result);
    $('.bc').text(result.r.bc);
    $('.bcN').text(result.r.bcNa);
  },
  error: function error(jqXHR, textStatus, errorThrown) {
    toastr.error("Erreur", errorThrown, {
      timeOut: 4000
    });
  }
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__["CustomSearchText"](api, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16], []);
  // CustomSearchDatatable.CustomSearchDate(api, [3,5,6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__["CustomSearchSelect"](api, [], []);
  // CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_transaction_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
$("#allactions").change(function (e) {
  // alert();
  //$('#allactions').click(function (e) {
  if (this.checked) {
    $(".action").prop("checked", true);
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    var t = dta.get("_action[]");
    if (t) {
      $("#valid").css("display", "block");
    }
  } else {
    $(".action").prop("checked", false);
    $("#valid").css("display", "none");
  }
  e.preventDefault();
});
$('body').on('change', '.action', function () {

  // $("#valid").css("display", "block");
});
$('body').on('submit', '.transaction_valider2', function (e) {
  //    alert('test');
  e.preventDefault();
  if (transactions.length == 0) {
    toastr.warning("Veuillez ajouter une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
    return;
  }
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  dta.append('transactions', JSON.stringify(transactions));
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_transaction_Generer_multiple'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
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
      $.ajax({
        type: 'POST',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_transaction_valider_multiple'),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          //   table.ajax.reload();
          // toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

          $(".bod_valider").html(result).hide();
          $("#ModalDocumentDynamiqueValider").modal("show");
          setTimeout(function () {
            $(".spr_valider").hide();
            $(".bod_valider").fadeIn();
          }, 600);
          $("#valid").css("display", "none");
          $(".action").prop("checked", false);
          $("#allactions").prop("checked", false);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          toastr.error("Erreur", errorThrown, {
            timeOut: 4000
          });
        }
      });
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
  } else if ($(this).val() == 2) {
    var form_name = $('#action_test').attr('name');
    var dta = new FormData(action_test);
    //var dta = $('#action_test').serialize();

    var t = dta.get("_action[]");
    //  alert( t);
    var selector = $(this).attr('class').split(' ')[0];
    alert(selector);
    // console.log(e.type);
    // var t=1;
    if (t) {
      $.ajax({
        type: 'POST',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_transaction_Generer_multiple'),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          //   table.ajax.reload();
          // toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

          if (result.hasOwnProperty('message')) {
            if (result.message.title === "err") {
              toastr.warning("Warning", result.message.text, {
                timeOut: 4000
              });
            }
          } else {
            $(".bod_valider").html(result).hide();
            $("#ModalDocumentDynamiqueValider").modal("show");
            setTimeout(function () {
              $(".spr_valider").hide();
              $(".bod_valider").fadeIn();
            }, 600);
            $("#valid").css("display", "none");
            $(".action").prop("checked", false);
            $("#allactions").prop("checked", false);
          }
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          toastr.error("Erreur", errorThrown, {
            timeOut: 4000
          });
        }
      });
    } else {
      toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
jQuery.each($('.toastr-msg'), function (i, val) {
  console.log($(this).attr('data-toastr'));
  console.log($(this).text());
  if ($(this).attr('data-toastr') == "success") {
    toastr.success("Succees", $(this).text(), {
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
$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    //  url: Routing.generate('tr_charge_edit'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors, null, true);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        //  alert(result.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //var url = Routing.generate('tr_charge_edit', {id: result.data.id});
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
$('body').on('change', '.paiement', function (e) {
  //alert($(this).val());
  //console.log($(this).select2('data'))
  if ($(this).val() == 2) {
    $('.bloc_cheque').show();
    e.stopPropagation();
  } else {
    $('.bloc_cheque').hide();
    e.stopPropagation();
  }
  // $("#valid").css("display", "block");
});

$("#_delete").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var obj = {
    route: "tr_transaction_delete",
    redirection: "tr_transaction_index",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_20__["deleteCab"])(obj);
  e.preventDefault();
});
$("#grid tbody").on("click", ".info_op", function (e) {
  //alert();
  var id = $(this).closest("tr").attr("id");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate("tr_transaction_info", {
      id: id
    }),
    success: function success(result) {
      $(".bod1").html(result).hide();
      $("#ModalDocumentDynamique1").modal("show");
      setTimeout(function () {
        $(".spr1").hide();
        $(".bod1").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$('body').on('click', '.imprime_document', function (e) {
  e.preventDefault();
  if ($(this).attr("data-valide") == 0) {
    toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {
      timeOut: 4000
    });
    return;
  }
  window.open($(this).attr('href'), '_blank');
});
$("body").on("click", ".imp_operation", function (e) {
  // alert('ziko');
  if ($(this).attr("data-valide") == 0 && $(this).attr("data-info") != "externe") {
    toastr.warning('impossible d\'imprimer le document, manque de signature!', 'Erreur', {
      timeOut: 4000
    });
    return;
  }
  var id = $(this).attr("data-id");
  var multiple = 0;
  if ($(this).attr('data-multiple') == 1) {
    multiple = 1;
  }
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate("tr_operation_impression_achat", {
      id: id,
      multiple: multiple
    }),
    success: function success(result) {
      $("#ModalDocumentDynamiqueImpression .bod_impression").html(result);
      $('.sel2').select2();
      $("#ModalDocumentDynamiqueImpression").modal("show");
    }
  });
  e.preventDefault();
});
$('body').on('submit', '.impression_operation', function (e) {
  //    alert();
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  var id = $("#_id").val();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);
  console.log(dta);
  var multiple = $("#multiple").val();
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_operation_impression_achat', {
      'id': id,
      'multiple': multiple
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        //   alert(result.message.route);

        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate(result.message.route, {
          id: result.message.data
        });
        window.open(url);

        //  window.location.href = url;
        // location.reload();
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
var modepaiement = [9, 10, 11, 12];
$("body").on('keypress', '#code_tr', function (e) {
  var code = $(this).val();
  if (e.which == 13) {
    if (code == "") {
      toastr.warning("Warning", "Veuillez remplir les champs!", {
        timeOut: 4000
      });
      return;
    }
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate("tr_transaction_Generer_code", {
        "code": code.trim()
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        if (result.code == 403) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
          return;
        }
        var index = transactions.findIndex(function (t) {
          return t == result.id;
        });
        if (index == "-1") {
          console.log(result);
          if (modepaiement.includes(result.modepaiement)) {
            if (transactions.length > 0) {
              toastr.warning("Warning", "vous n'avez pas le droit de générer plusieurs virements étrangers!", {
                timeOut: 4000
              });
              return;
            }
            $("#code_tr").prop('disabled', true);
          }
          $(".transactionbody").prepend("\n                        <tr id=\"".concat(result.id, "\">\n                            <td>").concat(result.id, "</td>\n                            <td>").concat(result.piece, "</td>\n                            <td>").concat(result.code, "</td>\n                            <td>").concat(result.partenaire, "</td>\n                            <td class=\"text-right\">").concat(result.montant, "</td>\n                            <td><i class=\"fa fa-close text-danger remove_transaction\"  /></td>\n                        </tr>\n                    "));
          transactions.push(result.id);
          $("#code_tr").val("");
          console.log(transactions);
        } else {
          toastr.warning("Warning", "Déja existe!", {
            timeOut: 4000
          });
          return;
        }
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.error("Erreur", jqXHR.responseText, {
          timeOut: 4000
        });
      }
    });
  }
});
$('body').on('click', '.close', function (e) {
  transactions = [];
});
$("body").on('click', '.remove_transaction', function (e) {
  var tr = $(this).parents('tr');
  var id = tr.attr("id");
  var index = transactions.findIndex(function (t) {
    return t == id;
  });
  transactions.splice(index, 1);
  $("#code_tr").prop('disabled', false);
  tr.remove();
});
$("#ajouter1").on('click', function () {
  // var dta = new FormData(action_test);

  // if (transactions.length > 0) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate('tr_transaction_Generer_multiple'),
    // data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //   table.ajax.reload();
      // toastr.success(result.message.text, result.message.title, { timeOut: 4000 })

      if (result.hasOwnProperty('message')) {
        if (result.message.title === "err") {
          toastr.warning("Warning", result.message.text, {
            timeOut: 4000
          });
        }
      } else {
        $(".transactionbody").empty();
        $(".bod_valider").html(result).hide();
        $("#ModalDocumentDynamiqueValider").modal("show");
        setTimeout(function () {
          $(".spr_valider").hide();
          $(".bod_valider").fadeIn();
        }, 600);
        $("#valid").css("display", "none");
        $(".action").prop("checked", false);
        $("#allactions").prop("checked", false);
      }
      l.stop();
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  // } else {
  //     toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", { timeOut: 4000 })
  // }
});

$(document).ready(function () {
  $('#divers_datatble').DataTable({
    "searching": false
  });
});
$("#ajoute_divers").on('click', function (e) {
  // Empêcher l'envoi du formulaire
  e.preventDefault();

  // Disable the button
  $(this).prop('disabled', true);

  // Vérifier si les champs de formulaire ne sont pas vides
  var error = false;
  if ($('#Article_id').val() == '') {
    $('#Article_id').addClass('is-invalid');
    error = true;
  }
  if ($('input[name="Montant"]').val() == '') {
    $('input[name="Montant"]').addClass('is-invalid');
    error = true;
  }
  if ($('input[name="Observation"]').val() == '') {
    $('input[name="Observation"]').addClass('is-invalid');
    error = true;
  }
  if ($('input[name="Date"]').val() == '') {
    $('input[name="Date"]').addClass('is-invalid');
    error = true;
  }
  if (error) {
    // Afficher une alerte si un champ est vide
    toastr.warning('Veuillez remplir tous les champs obligatoires', 'warning', {
      timeOut: 4000
    });
    $('#ajoute_divers').prop('disabled', false);
  } else {
    // Soumettre le formulaire avec AJAX
    var articleId = $('#Article_id').val().trim();
    var montant = $('#Montant').val();
    var tva = $('#TVA').val();
    var observation = $('#Observation').val();
    var date = $('#Date').val();
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_19___default.a.generate("divers_operation_insert"),
      data: {
        articleId: articleId,
        montant: montant,
        observation: observation,
        tva: tva,
        date: date
      },
      success: function success(result) {
        // Enable the button
        $('#ajoute_divers').prop('disabled', false);
        if (result.code == 200) {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          // Recharger la page
          location.reload();
        } else if (result.code == 500) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        } else if (result.code == 501) {
          toastr.error(result.message.text, result.message.title, {
            timeOut: 4000
          });
        }

        // }
      },

      error: function error() {
        // Faire quelque chose en cas d'erreur
        toastr.error('Erreur lors de la soumission du formulaire', 'error', {
          timeOut: 4000
        });

        // Enable the button
        $('#ajoute_divers').prop('disabled', false);
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/tresorerie/transaction.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265","vendors~transaction",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL3RyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0cmFuc2FjdGlvbnMiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJiZWZvcmVTZW5kIiwiaGFzT3duUHJvcGVydHkiLCJzZXR0aW5ncyIsImpxWEhSIiwiYWJvcnQiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJsZW5ndGhNZW51IiwicGFnZUxlbmd0aCIsIm9yZGVyIiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsIm5hbWUiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImxhbmd1YWdlIiwicHJvY2Vzc2luZyIsImZvb3RlckNhbGxiYWNrIiwicm93IiwiZGF0YSIsInN0YXJ0IiwiZW5kIiwiZGlzcGxheSIsInJlbW92ZSIsImFwaSIsImludFZhbCIsImkiLCJyZXBsYWNlIiwiZmxvYXRWYWwiLCJyZXN1bHQiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCIkanEiLCJlcnJvciIsImFsZXJ0IiwidG90YWw0IiwiY29sdW1uIiwicGFnZSIsInJlZHVjZSIsImEiLCJiIiwiZm9vdGVyIiwiYXBwZW5kIiwidG9GaXhlZCIsIm9uIiwiaHRtbCIsInZhbCIsInNlYXJjaCIsImRyYXciLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInIiLCJiYyIsImJjTmEiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJ0b2FzdHIiLCJ0aW1lT3V0IiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJjbG9zZXN0IiwiYXR0ciIsImhyZWYiLCJjaGFuZ2UiLCJjaGVja2VkIiwicHJvcCIsImZvcm1fbmFtZSIsImR0YSIsIkZvcm1EYXRhIiwiYWN0aW9uX3Rlc3QiLCJ0IiwiZ2V0IiwiY3NzIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJ3YXJuaW5nIiwic2VsZWN0b3IiLCJKU09OIiwic3RyaW5naWZ5IiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3RvcCIsImNvZGUiLCJtZXNzYWdlIiwidGl0bGUiLCJlcnJvcnMiLCJTaG93Rm9ybUVycm9ycyIsImVtcHR5Iiwic3BsaXQiLCJoaWRlIiwibW9kYWwiLCJzZXRUaW1lb3V0IiwiZmFkZUluIiwialF1ZXJ5IiwiZWFjaCIsInNob3ciLCJzdG9wUHJvcGFnYXRpb24iLCJjbGljayIsImlkIiwidG9rZW4iLCJvYmoiLCJyb3V0ZSIsInJlZGlyZWN0aW9uIiwiZGVsZXRlQ2FiIiwib3BlbiIsIm11bHRpcGxlIiwic2VsZWN0MiIsIm1vZGVwYWllbWVudCIsIndoaWNoIiwidHJpbSIsImluZGV4IiwiZmluZEluZGV4IiwiaW5jbHVkZXMiLCJwcmVwZW5kIiwicGllY2UiLCJwYXJ0ZW5haXJlIiwibW9udGFudCIsInB1c2giLCJyZXNwb25zZVRleHQiLCJ0ciIsInBhcmVudHMiLCJzcGxpY2UiLCJyZWFkeSIsImFkZENsYXNzIiwiYXJ0aWNsZUlkIiwidHZhIiwib2JzZXJ2YXRpb24iLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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d0IsTUFBTSxDQUFDeEIsS0FBSyxDQUFDLDRDQUE0QyxFQUFFLE9BQU8sRUFBRTtVQUNsRXlCLE9BQU8sRUFBRTtRQUNiLENBQUMsQ0FBQzs7UUFFTjtRQUNBdEYsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNvRyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztNQUN6QztJQUNKLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDLEMiLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5sZXQgdHJhbnNhY3Rpb25zID0gW107XHJcblxyXG52YXIgdGFibGUgPSAkKFwiI2dyaWRcIikuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl90cmFuc2FjdGlvbl9saXN0MlwiKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRhYmxlLmhhc093blByb3BlcnR5KCdzZXR0aW5ncycpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB0YWJsZS5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICBvcmRlcjogW1xyXG4gICAgICAgIFswLCBcImRlc2NcIl1cclxuICAgIF0sXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICd0ci5pZCcsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3RyLmNvZGUnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICd0ci5yZWZfZG9jX2Fzc28nIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6IFwiREFURV9GT1JNQVQodHIuZGF0ZV9kb2NfYXNzbyAsJyVkLyVtLyVZJylcIiB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcInRyLm51bV9jaGVxdWVcIiB9LFxyXG5cclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogXCJEQVRFX0ZPUk1BVCh0ci5kYXRlX2VjaGVhbmNlLCclZC8lbS8lWScpXCIgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogXCJEQVRFX0ZPUk1BVCh0ci5kYXRlLCclZC8lbS8lWScpXCIgfSxcclxuXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdtZHAuZGVzaWduYXRpb24nIH0sXHJcblxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnZnJzLnNvY2lldGUnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdjbC5zb2NpZXRlJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcIkNPTkNBVCAoZW1wLm5vbSwnICcsZW1wLnByZW5vbSlcIiB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcImNvbS5kZXNpZ25hdGlvblwiIH0sXHJcblxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAndHIuYG1vbnRhbnRgJywgY2xhc3NOYW1lOiAncmVnLWJhY2snIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdwaWUuY29kZScsIGNsYXNzTmFtZTogJ3JlZy1iYWNrJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcIkRBVEVfRk9STUFUKHRyLmNyZWF0ZWQgLCclWScpXCIsIGNsYXNzTmFtZTogJ3JlZy1iYWNrJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnaXNfdmFsaWRlcicsIGNsYXNzTmFtZTogJ3JlZy1iYWNrJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAncGFydmVudWUudicgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ3RyLmNvZGUnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiIH0sXHJcblxyXG5cclxuXHJcbiAgICBdLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGV4dGVuZDogXCJleGNlbFwiLFxyXG4gICAgICAgIC8vICAgICBleHBvcnRPcHRpb25zOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2x1bW5zOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICByb3dzOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBib2R5OiBmdW5jdGlvbihkYXRhLCByb3csIGNvbHVtbiwgbm9kZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRhID0gJCgnPHA+JyArIGRhdGEgKyAnPC9wPicpLnRleHQoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuICQuaXNOdW1lcmljKGRhdGEucmVwbGFjZSgnLCcsICcuJykpID8gZGF0YS5yZXBsYWNlKCcsJywgJy4nKSA6IGRhdGE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICBdLFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIC8vIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gICAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uKHJvdywgZGF0YSwgc3RhcnQsIGVuZCwgZGlzcGxheSkge1xyXG4gICAgICAgICQoXCIuY2VudGVyLWNsYXNzXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICAgICAgICBkYXRhO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICAgICAgdmFyIGludFZhbCA9IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSBcInN0cmluZ1wiID9cclxuICAgICAgICAgICAgICAgIGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMSA6XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgaSA9PT0gXCJudW1iZXJcIiA/XHJcbiAgICAgICAgICAgICAgICBpIDpcclxuICAgICAgICAgICAgICAgIDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZmxvYXRWYWwgPSBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGkgPSBpLnJlcGxhY2UoXCIkXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICBpID0gaS5yZXBsYWNlKFwiLFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlRmxvYXQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAkanEoaSkudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZUZsb2F0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihyZXN1bHQpKSB7IHJlc3VsdCA9IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAqIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5oYW5kbGVkIHR5cGUgZm9yIHRvdGFscyBbXCIgKyAodHlwZW9mIGkpICsgXCJdXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB0b3RhbDQgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbigxMiwgeyBwYWdlOiAnY3VycmVudCcgfSlcclxuICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbG9hdFZhbChhKSArIGZsb2F0VmFsKGIpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcblxyXG4gICAgICAgICQoYXBpLmNvbHVtbigxMikuZm9vdGVyKCkpLmFwcGVuZChcclxuICAgICAgICAgICAgJzxjZW50ZXIgY2xhc3M9XCJjZW50ZXItY2xhc3NcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTBweDtcIj4nICsgdG90YWw0LnRvRml4ZWQoMikgKyBcIiA8L2NlbnRlcj5cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8qICB2YXIgYWxscGFnZSA9IGFwaVxyXG4gICAgICAgICAuY29sdW1uKDkpXHJcbiAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICB2YXIgdG90YWw1ID0gYXBpXHJcbiAgICAgICAgICAgICAuY29sdW1uKDkseyBwYWdlOiAnY3VycmVudCd9KVxyXG4gICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgJChhcGkuY29sdW1uKDkpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAnPGNlbnRlciBjbGFzcz1cImNlbnRlci1jbGFzc1wiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O1wiPiAnICsgdG90YWw1LnRvRml4ZWQoMikqLTEgKyBcIjwvY2VudGVyPlwiXHJcbiAgICAgICAgICk7ICovXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvb3RlclxyXG5cclxuICAgIH0sXHJcblxyXG59KTtcclxuLyp2YXIgdGFibGUgPSAkKCcjZ3JpZCcpLkRhdGFUYWJsZSh7XHJcblxyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfdHJhbnNhY3Rpb25fbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogZmFsc2UsXHJcbiAgICBcIm9yZGVyXCI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLCBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcblxyXG4vLyAgICBcImNvbHVtbnNcIjogW1xyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgICAgICB7IFwib3JkZXJhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbi8vICAgIF0sXHJcbiAgIFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGV4dGVuZDogXCJleGNlbFwiLFxyXG4gICAgICAgICAgICBleHBvcnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgY29sdW1uczogXCI6dmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgIHJvd3M6IFwiOnZpc2libGVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gICAgXCJzY3JvbGxZXCI6IFwiMzUwcHhcIixcclxuICAgIFwic2Nyb2xsQ29sbGFwc2VcIjogdHJ1ZSxcclxuICAgIFwicGFnaW5nXCI6IGZhbHNlLFxyXG4gICAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIChyb3csIGRhdGEsIHN0YXJ0LCBlbmQsIGRpc3BsYXkpIHtcclxuICAgICAgICAkKFwiLmNlbnRlci1jbGFzc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgICAgICAgZGF0YTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGkgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgID8gaS5yZXBsYWNlKC9bXFwkLF0vZywgXCJcIikgKiAxXHJcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB0b3RhbDQgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbigxMix7IHBhZ2U6ICdjdXJyZW50J30pXHJcbiAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdG90YWxhbGwgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbigxMilcclxuICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICAgICAgICB9LCAwKTsgICBcclxuICAgICAgICAkKGFwaS5jb2x1bW4oMTIpLmZvb3RlcigpKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICc8Y2VudGVyIGNsYXNzPVwiY2VudGVyLWNsYXNzXCIgc3R5bGU9XCJmb250LXNpemU6IDEwcHg7XCI+JyArIHRvdGFsNC50b0ZpeGVkKDIpICtcIiA8L2NlbnRlcj5cIlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgLyogIHZhciBhbGxwYWdlID0gYXBpXHJcbiAgICAgICAgLmNvbHVtbig5KVxyXG4gICAgICAgIC5kYXRhKClcclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbDUgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbig5LHsgcGFnZTogJ2N1cnJlbnQnfSlcclxuICAgICAgICAgICAgLmRhdGEoKVxyXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAkKGFwaS5jb2x1bW4oOSkuZm9vdGVyKCkpLmFwcGVuZChcclxuICAgICAgICAgICAgJzxjZW50ZXIgY2xhc3M9XCJjZW50ZXItY2xhc3NcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTBweDtcIj4gJyArIHRvdGFsNS50b0ZpeGVkKDIpKi0xICsgXCI8L2NlbnRlcj5cIlxyXG4gICAgICAgICk7ICogL1xyXG4gICAgICAgIC8vIFVwZGF0ZSBmb290ZXJcclxuICAgICAgIFxyXG4gICAgfSxcclxuICAgIGluaXRDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpO1xyXG4gICAgXHJcbiAgICAgICAgYXBpLiQoXCJ0ZFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAgICAgdmFyIHN0ciA9IHRoaXMuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICB2YXIgbiA9IHN0ci5zZWFyY2goXCJjZF9vcFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygkKHN0cilbMF0ubm9kZU5hbWUpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAobiA9PSAtMSAmJiAkKHN0cikubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgICAgICAgIGFwaS5zZWFyY2godGhpcy5pbm5lckhUTUwpLmRyYXcoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxufSk7Ki9cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuc2VsZWN0Ml9kZW1vXzQnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS52YWwoKSlcclxuICAgICQoJy5iYycpLmh0bWwoJycpXHJcbiAgICAkKCcuYmNOJykuaHRtbCgnJylcclxuICAgICAgICAvKnZhciBkb3RzID0gd2luZG93LnNldEludGVydmFsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHdhaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaXRcIik7XHJcbiAgICAgICAgICAgIHZhciB3YWl0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FpdDJcIik7XHJcbiAgICAgICAgICAgIGlmICggd2FpdC5pbm5lckhUTUwubGVuZ3RoID4gMyApIFxyXG4gICAgICAgICAgICAgICAgd2FpdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgd2FpdC5pbm5lckhUTUwgKz0gXCIuXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIHdhaXQyLmlubmVySFRNTC5sZW5ndGggPiAzICkgXHJcbiAgICAgICAgICAgICAgICB3YWl0Mi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgd2FpdDIuaW5uZXJIVE1MICs9IFwiLlwiOyBcclxuICAgICAgICAgfSAsIDQwMCk7Ki9cclxuICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IFwibnVsbFwiKSB7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygxMSkuc2VhcmNoKCQodGhpcykudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAvL2FsZXJ0KCQodGhpcykudmFsKCkpXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX3RyYW5zYWN0aW9uX3NvbW1lX21vbnRhbnQnKSxcclxuICAgICAgICAgICAgZGF0YTogeyAnZGF0YSc6ICQodGhpcykudmFsKCkgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5iYycpLnRleHQocmVzdWx0LnIuYmMpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmJjTicpLnRleHQocmVzdWx0LnIuYmNOYSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDExKS5zZWFyY2goJycpLmRyYXcoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfdHJhbnNhY3Rpb25fc29tbWVfbW9udGFudCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7ICdkYXRhJzogJCh0aGlzKS52YWwoKSB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLmJjJykudGV4dChyZXN1bHQuci5iYyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYmNOJykudGV4dChyZXN1bHQuci5iY05hKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSlcclxuXHJcbiQuYWpheCh7XHJcbiAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX3RyYW5zYWN0aW9uX3NvbW1lX21vbnRhbnQnKSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICQoJy5iYycpLnRleHQocmVzdWx0LnIuYmMpO1xyXG4gICAgICAgICQoJy5iY04nKS50ZXh0KHJlc3VsdC5yLmJjTmEpO1xyXG5cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxufSk7XHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbihlLCBzZXR0aW5ncykge1xyXG4gICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMywgMTQsIDE1LCAxNl0sIFtdKTtcclxuICAgIC8vIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgWzMsNSw2XSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFtdLCBbXSk7XHJcbiAgICAvLyBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICcuY2Rfb3AnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl90cmFuc2FjdGlvbl9lZGl0JywgeyAnaWQnOiAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG59KTtcclxuXHJcblxyXG4kKFwiI2FsbGFjdGlvbnNcIikuY2hhbmdlKGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIGFsZXJ0KCk7XHJcbiAgICAvLyQoJyNhbGxhY3Rpb25zJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAkKFwiLmFjdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICB2YXIgZm9ybV9uYW1lID0gJCgnI2FjdGlvbl90ZXN0JykuYXR0cignbmFtZScpO1xyXG4gICAgICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoYWN0aW9uX3Rlc3QpO1xyXG4gICAgICAgIHZhciB0ID0gZHRhLmdldChcIl9hY3Rpb25bXVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuYWN0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAkKFwiI3ZhbGlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcuYWN0aW9uJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLnRyYW5zYWN0aW9uX3ZhbGlkZXIyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgYWxlcnQoJ3Rlc3QnKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKHRyYW5zYWN0aW9ucy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogYWpvdXRlciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIGR0YS5hcHBlbmQoJ3RyYW5zYWN0aW9ucycsIEpTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9ucykpXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX3RyYW5zYWN0aW9uX0dlbmVyZXJfbXVsdGlwbGUnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJChcIiN2YWxpZFwiKS5jaGFuZ2UoZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gIGFsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gICAgLy8kKFwiZm9ybVwiKS5zdWJtaXQoKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID09IDEpIHtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1fbmFtZSA9ICQoJyNhY3Rpb25fdGVzdCcpLmF0dHIoJ25hbWUnKTtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKGFjdGlvbl90ZXN0KTtcclxuICAgICAgICAvL3ZhciBkdGEgPSAkKCcjYWN0aW9uX3Rlc3QnKS5zZXJpYWxpemUoKVxyXG5cclxuICAgICAgICB2YXIgdCA9IGR0YS5nZXQoXCJfYWN0aW9uW11cIik7XHJcbiAgICAgICAgLy9hbGVydCggdCk7XHJcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJylbMF07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICAgICAvLyB2YXIgdD0xO1xyXG4gICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX3RyYW5zYWN0aW9uX3ZhbGlkZXJfbXVsdGlwbGUnKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZF92YWxpZGVyXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVZhbGlkZXJcIikubW9kYWwoXCJzaG93XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwcl92YWxpZGVyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RfdmFsaWRlclwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3ZhbGlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FsbGFjdGlvbnNcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykudmFsKCkgPT0gMikge1xyXG4gICAgICAgIHZhciBmb3JtX25hbWUgPSAkKCcjYWN0aW9uX3Rlc3QnKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YShhY3Rpb25fdGVzdCk7XHJcbiAgICAgICAgLy92YXIgZHRhID0gJCgnI2FjdGlvbl90ZXN0Jykuc2VyaWFsaXplKCk7XHJcblxyXG4gICAgICAgIHZhciB0ID0gZHRhLmdldChcIl9hY3Rpb25bXVwiKTtcclxuICAgICAgICAvLyAgYWxlcnQoIHQpO1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICAgIGFsZXJ0KHNlbGVjdG9yKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgIC8vIHZhciB0PTE7XHJcbiAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfdHJhbnNhY3Rpb25fR2VuZXJlcl9tdWx0aXBsZScpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm1lc3NhZ2UudGl0bGUgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCByZXN1bHQubWVzc2FnZS50ZXh0LCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZF92YWxpZGVyXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVWYWxpZGVyXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwcl92YWxpZGVyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kX3ZhbGlkZXJcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3ZhbGlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYWxsYWN0aW9uc1wiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxualF1ZXJ5LmVhY2goJCgnLnRvYXN0ci1tc2cnKSwgZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vlc1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG59KTtcclxualF1ZXJ5LmVhY2goJCgnLmZvcm0tZXJyb3JzIGxpJyksIGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG59KTtcclxuLypjaGVjayB0aGUgZm9ybSBlcnJvcnMqL1xyXG5jb25zb2xlLmxvZygkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCkpO1xyXG5pZiAoJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpICE9ICcnKSB7XHJcbiAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxufVxyXG5cclxuXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgLy8gIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG5cclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gIGFsZXJ0KHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jaGFyZ2VfZWRpdCcsIHtpZDogcmVzdWx0LmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLnBhaWVtZW50JywgZnVuY3Rpb24oZSkge1xyXG4gICAgLy9hbGVydCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIC8vY29uc29sZS5sb2coJCh0aGlzKS5zZWxlY3QyKCdkYXRhJykpXHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAyKSB7XHJcbiAgICAgICAgJCgnLmJsb2NfY2hlcXVlJykuc2hvdygpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuYmxvY19jaGVxdWUnKS5oaWRlKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIC8vICQoXCIjdmFsaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxufSk7XHJcblxyXG5cclxuJChcIiNfZGVsZXRlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRva2VuXCIpO1xyXG5cclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgICAgcm91dGU6IFwidHJfdHJhbnNhY3Rpb25fZGVsZXRlXCIsXHJcbiAgICAgICAgcmVkaXJlY3Rpb246IFwidHJfdHJhbnNhY3Rpb25faW5kZXhcIixcclxuICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgfTtcclxuICAgIC8vIGFsZXJ0KCk7XHJcbiAgICBkZWxldGVDYWIob2JqKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuaW5mb19vcFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIik7XHJcblxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidHJfdHJhbnNhY3Rpb25faW5mb1wiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIi5ib2QxXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWUxXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNwcjFcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5ib2QxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuaW1wcmltZV9kb2N1bWVudCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKCQodGhpcykuYXR0cihcImRhdGEtdmFsaWRlXCIpID09IDApICB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoJ2ltcG9zc2libGUgZFxcJ2ltcHJpbWVyIGxlIGRvY3VtZW50LCBtYW5xdWUgZGUgc2lnbmF0dXJlIScsICdFcnJldXInLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbigkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgJ19ibGFuaycpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuaW1wX29wZXJhdGlvblwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIC8vIGFsZXJ0KCd6aWtvJyk7XHJcbiAgICBpZigkKHRoaXMpLmF0dHIoXCJkYXRhLXZhbGlkZVwiKSA9PSAwICYmICQodGhpcykuYXR0cihcImRhdGEtaW5mb1wiKSAhPSBcImV4dGVybmVcIikgIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZygnaW1wb3NzaWJsZSBkXFwnaW1wcmltZXIgbGUgZG9jdW1lbnQsIG1hbnF1ZSBkZSBzaWduYXR1cmUhJywgJ0VycmV1cicsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIGxldCBtdWx0aXBsZSA9IDA7XHJcbiAgICBpZigkKHRoaXMpLmF0dHIoJ2RhdGEtbXVsdGlwbGUnKSA9PSAxKSB7XHJcbiAgICAgICAgbXVsdGlwbGUgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidHJfb3BlcmF0aW9uX2ltcHJlc3Npb25fYWNoYXRcIiwgeyBpZCwgbXVsdGlwbGV9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZUltcHJlc3Npb24gLmJvZF9pbXByZXNzaW9uXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlSW1wcmVzc2lvblwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnLmltcHJlc3Npb25fb3BlcmF0aW9uJywgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgICBhbGVydCgpO1xyXG4gICAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAgIHZhciBpZCA9ICQoXCIjX2lkXCIpLnZhbCgpO1xyXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgY29uc29sZS5sb2coZHRhKTtcclxuICAgIHZhciBtdWx0aXBsZSA9ICQoXCIjbXVsdGlwbGVcIikudmFsKCk7XHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICBsLnN0YXJ0KCk7XHJcbiAgICAgIFxyXG4gICAgICAkLmFqYXgoeyBcclxuICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfb3BlcmF0aW9uX2ltcHJlc3Npb25fYWNoYXQnLHsnaWQnOmlkLCAnbXVsdGlwbGUnOm11bHRpcGxlfSksXHJcbiAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgLy8gICBhbGVydChyZXN1bHQubWVzc2FnZS5yb3V0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShyZXN1bHQubWVzc2FnZS5yb3V0ZSwge2lkOiByZXN1bHQubWVzc2FnZS5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG4gIGxldCBtb2RlcGFpZW1lbnQgPSBbOSwxMCwxMSwxMl07XHJcbiAgXHJcbiAgXHJcbiAgJChcImJvZHlcIikub24oJ2tleXByZXNzJywgJyNjb2RlX3RyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgbGV0IGNvZGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgaWYoZS53aGljaCA9PSAxMykgIHtcclxuICAgICAgICBpZihjb2RlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiVmV1aWxsZXogcmVtcGxpciBsZXMgY2hhbXBzIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl90cmFuc2FjdGlvbl9HZW5lcmVyX2NvZGVcIiwge1wiY29kZVwiOiBjb2RlLnRyaW0oKX0pLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdHJhbnNhY3Rpb25zLmZpbmRJbmRleCgodCkgPT4gdCA9PSByZXN1bHQuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gXCItMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtb2RlcGFpZW1lbnQuaW5jbHVkZXMocmVzdWx0Lm1vZGVwYWllbWVudCkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRyYW5zYWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgXCJ2b3VzIG4nYXZleiBwYXMgbGUgZHJvaXQgZGUgZ8OpbsOpcmVyIHBsdXNpZXVycyB2aXJlbWVudHMgw6l0cmFuZ2VycyFcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NvZGVfdHJcIikucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi50cmFuc2FjdGlvbmJvZHlcIikucHJlcGVuZChgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBpZD1cIiR7cmVzdWx0LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7cmVzdWx0LmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtyZXN1bHQucGllY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke3Jlc3VsdC5jb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtyZXN1bHQucGFydGVuYWlyZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1yaWdodFwiPiR7cmVzdWx0Lm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aSBjbGFzcz1cImZhIGZhLWNsb3NlIHRleHQtZGFuZ2VyIHJlbW92ZV90cmFuc2FjdGlvblwiICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbnMucHVzaChyZXN1bHQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29kZV90clwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codHJhbnNhY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsIFwiRMOpamEgZXhpc3RlIVwiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwganFYSFIucmVzcG9uc2VUZXh0LCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG59KVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5jbG9zZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHRyYW5zYWN0aW9ucyA9IFtdO1xyXG59KTtcclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbignY2xpY2snLCAnLnJlbW92ZV90cmFuc2FjdGlvbicsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCB0ciA9ICQodGhpcykucGFyZW50cygndHInKVxyXG4gICAgbGV0IGlkID0gdHIuYXR0cihcImlkXCIpO1xyXG4gICAgdmFyIGluZGV4ID0gdHJhbnNhY3Rpb25zLmZpbmRJbmRleCgodCkgPT4gdCA9PSBpZCk7XHJcbiAgICB0cmFuc2FjdGlvbnMuc3BsaWNlKGluZGV4LCAxKSAgXHJcbiAgICAkKFwiI2NvZGVfdHJcIikucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB0ci5yZW1vdmUoKTtcclxufSlcclxuXHJcblxyXG4kKFwiI2Fqb3V0ZXIxXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gdmFyIGR0YSA9IG5ldyBGb3JtRGF0YShhY3Rpb25fdGVzdCk7XHJcbiAgICBcclxuICAgIC8vIGlmICh0cmFuc2FjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgICAgICBsLnN0YXJ0KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RyX3RyYW5zYWN0aW9uX0dlbmVyZXJfbXVsdGlwbGUnKSxcclxuICAgICAgICAgICAgLy8gZGF0YTogZHRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnbWVzc2FnZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tZXNzYWdlLnRpdGxlID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCByZXN1bHQubWVzc2FnZS50ZXh0LCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnRyYW5zYWN0aW9uYm9keVwiKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZF92YWxpZGVyXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVWYWxpZGVyXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc3ByX3ZhbGlkZXJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZF92YWxpZGVyXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3ZhbGlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FsbGFjdGlvbnNcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAvLyB9XHJcblxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2RpdmVyc19kYXRhdGJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgXCJzZWFyY2hpbmdcIjogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgXHJcbn0pO1xyXG5cclxuJChcIiNham91dGVfZGl2ZXJzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgLy8gRW1ww6pjaGVyIGwnZW52b2kgZHUgZm9ybXVsYWlyZVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBidXR0b25cclxuICAgICAgJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gIFxyXG4gICAgICAgIC8vIFbDqXJpZmllciBzaSBsZXMgY2hhbXBzIGRlIGZvcm11bGFpcmUgbmUgc29udCBwYXMgdmlkZXNcclxuICAgICAgICB2YXIgZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJCgnI0FydGljbGVfaWQnKS52YWwoKSA9PSAnJykge1xyXG4gICAgICAgICAgICAkKCcjQXJ0aWNsZV9pZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoJ2lucHV0W25hbWU9XCJNb250YW50XCJdJykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cIk1vbnRhbnRcIl0nKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoJCgnaW5wdXRbbmFtZT1cIk9ic2VydmF0aW9uXCJdJykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cIk9ic2VydmF0aW9uXCJdJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJCgnaW5wdXRbbmFtZT1cIkRhdGVcIl0nKS52YWwoKSA9PSAnJykge1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiRGF0ZVwiXScpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIEFmZmljaGVyIHVuZSBhbGVydGUgc2kgdW4gY2hhbXAgZXN0IHZpZGVcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ1ZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIG9ibGlnYXRvaXJlcycsICd3YXJuaW5nJywge1xyXG4gICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoJyNham91dGVfZGl2ZXJzJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU291bWV0dHJlIGxlIGZvcm11bGFpcmUgYXZlYyBBSkFYXHJcbiAgICAgICAgICAgIHZhciBhcnRpY2xlSWQgPSAkKCcjQXJ0aWNsZV9pZCcpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICAgICAgdmFyIG1vbnRhbnQgPSAkKCcjTW9udGFudCcpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgdHZhID0gJCgnI1RWQScpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSAkKCcjT2JzZXJ2YXRpb24nKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSAkKCcjRGF0ZScpLnZhbCgpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGl2ZXJzX29wZXJhdGlvbl9pbnNlcnRcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgIGFydGljbGVJZDogYXJ0aWNsZUlkLFxyXG4gICAgICAgICAgICAgICAgICBtb250YW50Om1vbnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgIG9ic2VydmF0aW9uOiBvYnNlcnZhdGlvbixcclxuICAgICAgICAgICAgICAgICAgdHZhOnR2YSxcclxuICAgICAgICAgICAgICAgICAgZGF0ZTpkYXRlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBFbmFibGUgdGhlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgJCgnI2Fqb3V0ZV9kaXZlcnMnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZWNoYXJnZXIgbGEgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQuY29kZSA9PSA1MDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICBcclxuICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LmNvZGUgPT0gNTAxKXtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGYWlyZSBxdWVscXVlIGNob3NlIGVuIGNhcyBkJ2VycmV1clxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgc291bWlzc2lvbiBkdSBmb3JtdWxhaXJlJywgJ2Vycm9yJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIEVuYWJsZSB0aGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgJCgnI2Fqb3V0ZV9kaXZlcnMnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAiXSwic291cmNlUm9vdCI6IiJ9