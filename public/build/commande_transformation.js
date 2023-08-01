(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commande_transformation"],{

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

/***/ "./assets/js/components/transformation/trcommande.js":
/*!***********************************************************!*\
  !*** ./assets/js/components/transformation/trcommande.js ***!
  \***********************************************************/
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
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");











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
var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commande_list') + location.search,
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  "pageLength": 15,
  "order": [[0, "desc"]],
  "columns": [{
    "orderable": false,
    "width": "3%",
    "searchable": true,
    "targets": [0]
  }, {
    "orderable": true,
    "width": "10%"
  }, {
    "orderable": true,
    "width": "10%"
  }, {
    "orderable": true,
    "width": "15%"
  }, {
    "orderable": true,
    "width": "20%"
  }, {
    "orderable": true,
    "width": "15%" /*, "targets": [4, 5]*/
  }, {
    "orderable": true,
    "width": "20%" /*className: "colonne-gras"*/
  }, {
    "orderable": true,
    "width": "10%" /*className: "colonne-gras"*/
  }],

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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table.on('init.dt', function (e, settings) {
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchText"](api, [1, 2, 3, 4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchDate"](api, [2], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchSelect"](api, [5, 6, 7], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchCheckbox"](api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commande_show', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});

//article

$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true
});
$('.new , .edit').on('change', '.marches', function (e) {
  var $form = $(this).closest('form');
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr('name')] = $(this).val();
  data[$('.marches').attr('name')] = $('.marches').val();

  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: data,
    success: function success(html) {
      //   console.log(html); 
      $('.sousmarche').replaceWith($(html).find('.sousmarche'));
    }
  });
  e.preventDefault();
});
$('#tr_commandecab_type_1').on('change', function (e) {
  $(".marche").css("display", "none");
  $(".reference").css("display", "block");
  //alert( $('#t_achatdemandeinternecab_type_1').val());
  e.preventDefault();
});
$('#tr_commandecab_type_0').on('change', function (e) {
  $(".reference").css("display", "none");
  $(".marche").css("display", "block");
  //alert( $('#t_achatdemandeinternecab_type_1').val());
  e.preventDefault();
});
$('#tr_commandecab_type_2').on('change', function (e) {
  $(".reference").css("display", "none");
  $(".marche").css("display", "none");
  //alert( $('#t_achatdemandeinternecab_type_1').val());
  e.preventDefault();
});
$('.new').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_13__["create"](document.querySelector('.my-button'));

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commande_insert'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      $('.errors-list').remove();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        // alert(result.data.id);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commande_show', {
          id: result.data.id
        });
        window.location.href = url;
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
var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  //alert($('.article').val())
  //dta.append('t_achatdemandeinternedet[article]', $('.article').val());
  var selector = $('.det_for');
  console.log(selector);
  // alert()
  console.log($(this).serialize());
  var exsit = 0;
  $.each(array_detail, function (i, value) {
    if ($('#tr_commandedet_article').val() == value.id) {
      exsit = 1;
    }
  });
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_13__["create"](document.activeElement);

  // Start loading
  l.start();
  if (exsit == 0) {
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_detaile_new'),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        if (result.errors) {
          console.log(result.errors);
          l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
        } else if (result.data) {
          $(".detail_form")[0].reset();
          $(".errors-list").remove();
          // $('.article').focus();
          //                console.log(result);
          var lineNo = 1;
          array_detail.push(result.data);
          $(".new .table-detail > tbody").empty();
          $.each(array_detail, function (i, value) {
            var tva = value.tva + ' %';
            var observation = value.observation;
            if (value.tva == null) {
              tva = '-';
            }
            if (value.observation == null) {
              observation = '-';
            }
            //categorie
            var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.titre + "</td><td>" + observation + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
            $(".new .table-detail > tbody").append(my_row);
            lineNo++;
          });
          l.stop();
          $("#tr_commandecab_detail").val(JSON.stringify(array_detail));

          //  $('.article').val(null).trigger('change');
        }
      }
    });
  } else {
    l.stop();
    toastr.warning("Cet article existe déjà ", "warning ", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.new-article-btn').click(function (e) {
  $('.edit-new-article').show();
  $(this).hide();
  e.preventDefault();
});
$('.new').on('click', '.delete_element', function (e) {
  console.log($(this).attr('id'));
  array_detail.splice($(this).attr('id'), 1);
  console.log(array_detail);
  $(".new .table-detail > tbody tr").remove();
  $.each(array_detail, function (i, value) {
    var tva = value.tva + ' %';
    var observation = value.observation;
    if (value.tva == null) {
      tva = '-';
    }
    if (value.observation == null) {
      observation = '-';
    }
    var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article.titre + "</td><td>" + observation + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
    $(".new .table-detail>tbody").append(my_row);
  });
});

/*
 * 
 * Edit operations 
 * 
 */

$('.edit').on('submit', '.form', function (e) {
  //  alert();
  var form_name = $(this).attr('name');
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_13__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commandecab_update', {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      }
    }
  });
  e.preventDefault();
});

/*
 * 
 * Enregistrer  la formulaire de modification  d'article 
 * 
 */

$('.edit').on('submit', '.detail_form', function (e) {
  var dta = new FormData(this);
  console.log(dta);
  var form_name = $(this).attr('name');
  var id = dta.get('_id');
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_13__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commandedet_update_detail', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
        // $('.errors-list').remove();

        /*  jQuery.each(result.errors.violations, function (i, val) {
         var column = val.propertyPath;
         var columnName = column.split('.');
         console.log(columnName[1]);
         $(".detail_form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
         });*/
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      }
    }
  });
  e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$('.edit').on('submit', '.detail_form_add_article', function (e) {
  //  alert();
  var dta = new FormData(this);
  var form_name = $(this).attr('name');
  var id = $('#_id').val();
  var selector = $(this);

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_13__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commandedet_insert', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_12__["ShowFormErrors"])(selector, form_name, result.errors);
        /*  $('.errors-list').remove();
         jQuery.each(result.errors.violations, function (i, val) {
         var column = val.propertyPath;
         var columnName = column.split('.');
         console.log(columnName[1]);
         $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
         });*/
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});

/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */

$('.edit').on('submit', '.detail_edit', function (e) {
  //  alert();
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commande_edit_detail', {
      'id': id
    }),
    success: function success(result) {
      // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
      $('.table-detail > tbody  > tr').eq(row_index).addClass('table-tr-style').html("<td colspan='9'>" + result + "</td>");
      $(".sel2").select2();
      //    alert(row_index); 
      //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
      //            console.log(result)
    }
  });

  e.preventDefault();
});
$('.show-me').click(function (e) {
  $(".actions").toggleClass('sidebar-open');
  e.preventDefault();
});
$('.actions').on('click', '.close-me', function (e) {
  //$('.close-me').click(function (e){ 
  $(".actions").removeClass('sidebar-open');
  e.preventDefault();
});
var mem = $('#data_1 .input-group.date').datepicker({
  todayBtn: "linked",
  keyboardNavigation: false,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true
});
var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 20);
$('#selector').datepicker('setDate', yearsAgo);
var tableShow = $('#datatable-show').DataTable({
  "scrollY": "200px",
  "scrollCollapse": true,
  "paging": false,
  "autoWidth": false,
  "columns": [{
    "width": "5%"
  }, {
    "width": "10%"
  }, {
    "width": "35%"
  }, {
    "width": "20%"
  }, {
    "width": "5%"
  }, {
    "width": "5%"
  }, {
    "width": "5%"
  }, {
    "width": "5%"
  }],
  "footerCallback": function footerCallback(row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;
    };

    // Total over all pages
    total = api.column(7).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(7, {
      page: 'current'
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(1).footer()).html('Total : ' + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});
var tableShow = $('#datatable-show2').DataTable({
  "scrollY": "200px",
  "scrollCollapse": true,
  "paging": false,
  "autoWidth": false
});
var h = "300";
var w = "1000";
$('.rs').click(function (e) {
  var left = screen.width / 2 - w / 2;
  var top = screen.height / 2 - h / 2;
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commande_find_article');
  var win = window.open(url, '_blank', 'width=' + w + ', height=300');
  win.onclick = function (e) {
    var clickedClass = e.target.className;
    var clickedID = e.target.id;
    if ($(e.target).parent().attr('class') == 'tr active-search') {
      if ($('.sel2').find("option[value='" + $(e.target).parent().attr('id') + "']").length) {
        $('.sel2').val($(e.target).parent().attr('id')).trigger('change');
        win.close();
      } else {
        // Create a DOM Option and pre-select by default
        var newOption = new Option($(e.target).parent().attr('text'), $(e.target).parent().attr('id'), true, true);
        // Append it to the select
        $('.sel2').append(newOption).trigger('change');
        win.close();
      }
    }
  };
});
$(".tab-search tbody tr").click(function () {
  $(".tab-search tbody tr").removeClass('active-search');
  $(this).addClass("active-search");
});
$(".tab-search thead th").each(function (index) {
  //$(".ddlChamps").append(new Option($( this ).text(), index))
  var o = new Option($(this).text(), index);
  /// jquerify the DOM object 'o' so we can use the html method
  $(o).html($(this).text());
  $(".ddlChamps").append(o);
});
$('.ntm').click(function () {
  $(this).hide();
  $("#Div_rechercheTabListe").fadeIn();
});
$('#lienFermerRecherche').click(function () {
  $("#Div_rechercheTabListe").hide();
  $(".ntm").fadeIn();
});
$("#lienRecherche").click(function () {
  //alert($('.ddlChamps').val())
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tab-sear");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[$('.ddlChamps').val()];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
$("#Div_rechercheTabListe").draggable();
$(".modalActivate").click(function () {
  $('.bod').empty();
  $('.spr').fadeIn();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commande_find_article'),
    processData: false,
    contentType: false,
    success: function success(result, textStatus, errorThrown) {
      $('.bod').html(result).hide();
      $('.tab-search').DataTable({
        "paging": true,
        "pageLength": 5,
        "language": {
          "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('datatables_langue'),
          "processing": true
        }
      });
      setTimeout(function () {
        $('.spr').hide();
        $('.bod').fadeIn();
      }, 600);
    }
  });
});
$('body').on('click', '.cd_op', function () {
  if ($('.article').find("option[value='" + $(this).parent().parent().attr('id') + "']").length) {
    $('.article').val($(this).parent().parent().attr('id')).trigger('change');
    $('#exampleModalPreview').modal('hide');
  } else {
    // Create a DOM Option and pre-select by default
    var newOption = new Option($(this).parent().parent().attr('text'), $(this).parent().parent().attr('id'), true, true);
    // Append it to the select
    $('.article').append(newOption).trigger('change');
    $('#exampleModalPreview').modal('hide');
  }
});
$.fn.select2.amd.define('select2/i18n/fr', [], function () {
  // Russian
  return {
    errorLoading: function errorLoading() {
      return 'test';
    },
    inputTooLong: function inputTooLong(args) {
      var overChars = args.input.length - args.maximum;
      var message = 'Пожалуйста, удалите ' + overChars + ' символ';
      if (overChars >= 2 && overChars <= 4) {
        message += 'а';
      } else if (overChars >= 5) {
        message += 'ов';
      }
      return message;
    },
    inputTooShort: function inputTooShort(args) {
      var remainingChars = args.minimum - args.input.length;
      var message = 'Tapez ' + remainingChars + ' caractère ou plus pour faire des recherches';
      return message;
    },
    loadingMore: function loadingMore() {
      return 'test';
    },
    maximumSelected: function maximumSelected(args) {
      var message = 'Вы можете выбрать ' + args.maximum + ' элемент';
      if (args.maximum >= 2 && args.maximum <= 4) {
        message += 'а';
      } else if (args.maximum >= 5) {
        message += 'ов';
      }
      return message;
    },
    noResults: function noResults() {
      return 'aucun résultat trouvé';
    },
    searching: function searching() {
      return 'Rechercher…';
    }
  };
});
$('#_affectation').click(function (e) {
  //  var id = table.row('.selected').id();
  var id = $('#test').data("commandeId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_13__["create"](document.querySelector('.my-button'));
  if (id) {
    //     alert(id);
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment Affecter cet enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui, Affecter!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        l.start();
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_11___default.a.generate('t_transformationt_commandecab_insert_affectation', {
            'id': id
          }),
          success: function success(result) {
            l.stop();
            if (result.code == 200) {
              table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              $(".actions").empty().removeClass('sidebar-open');
              window.location.reload();
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
              $(".actions").empty().removeClass('sidebar-open');
            } else if (result.empty) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/transformation/trcommande.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~commande_transformation",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmFuc2Zvcm1hdGlvbi90cmNvbW1hbmRlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsIlNob3dGb3JtRXJyb3JzIiwic2VsZWN0b3IiLCJmb3JtX25hbWUiLCJlcnJvcnMiLCJpZCIsImlzR3JvdXBlIiwiJCIsInJlbW92ZSIsImpRdWVyeSIsImVhY2giLCJ2aW9sYXRpb25zIiwiaSIsInZhbCIsImNvbHVtbk5hbWUiLCJ4IiwicHJvcGVydHlQYXRoIiwic2VhcmNoIiwic2VwYXJhdG9ycyIsImFyciIsInNwbGl0IiwiUmVnRXhwIiwiam9pbiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwicGFyZW50IiwiYXBwZW5kIiwidGl0bGUiLCJTaG93Rm9ybUVycm9yc1dpdGhQYXJhbSIsInRhYmxlIiwiRGF0YVRhYmxlIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwibG9jYXRpb24iLCJ0eXBlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsInJlbG9hZCIsImZpeGVkSGVhZGVyIiwib24iLCJzZXR0aW5ncyIsImFwaSIsImZuIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJkYXRhIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiY2xvc2VzdCIsImF0dHIiLCJocmVmIiwic2VsZWN0MiIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsIiRmb3JtIiwic3VjY2VzcyIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInByZXZlbnREZWZhdWx0IiwiY3NzIiwiZHRhIiwiRm9ybURhdGEiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJyZXN1bHQiLCJzdG9wIiwiZW1wdHkiLCJ0b2FzdHIiLCJ3YXJuaW5nIiwibWVzc2FnZSIsInRpbWVPdXQiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiYXJyYXlfZGV0YWlsIiwic2VyaWFsaXplIiwiZXhzaXQiLCJ2YWx1ZSIsImFjdGl2ZUVsZW1lbnQiLCJyZXNldCIsImxpbmVObyIsInB1c2giLCJ0dmEiLCJvYnNlcnZhdGlvbiIsIm15X3JvdyIsInRpdHJlIiwicXVhbnRpdGUiLCJwcml4dW5pdGFpcmUiLCJ0b0ZpeGVkIiwicHJpeHR0YyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGljayIsInNob3ciLCJoaWRlIiwic3BsaWNlIiwiYXJ0aWNsZSIsImdldCIsInJvd19pbmRleCIsImluZGV4IiwiY29sX2luZGV4IiwiZXEiLCJhZGRDbGFzcyIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJtZW0iLCJkYXRlcGlja2VyIiwidG9kYXlCdG4iLCJrZXlib2FyZE5hdmlnYXRpb24iLCJmb3JjZVBhcnNlIiwiY2FsZW5kYXJXZWVrcyIsImF1dG9jbG9zZSIsInllYXJzQWdvIiwiRGF0ZSIsInNldEZ1bGxZZWFyIiwiZ2V0RnVsbFllYXIiLCJ0YWJsZVNob3ciLCJyb3ciLCJlbmQiLCJkaXNwbGF5IiwidG90YWwiLCJwYWdlVG90YWwiLCJpbnRWYWwiLCJyZXBsYWNlIiwiY29sdW1uIiwicmVkdWNlIiwiYSIsImIiLCJwYWdlIiwiZm9vdGVyIiwiTWF0aCIsInJvdW5kIiwiaCIsInciLCJsZWZ0Iiwic2NyZWVuIiwid2lkdGgiLCJ0b3AiLCJoZWlnaHQiLCJ3aW4iLCJvcGVuIiwib25jbGljayIsImNsaWNrZWRDbGFzcyIsInRhcmdldCIsImNsaWNrZWRJRCIsInRyaWdnZXIiLCJjbG9zZSIsIm5ld09wdGlvbiIsIk9wdGlvbiIsIm8iLCJmYWRlSW4iLCJpbnB1dCIsImZpbHRlciIsInRyIiwidGQiLCJ0eHRWYWx1ZSIsImdldEVsZW1lbnRCeUlkIiwidG9VcHBlckNhc2UiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiaW5kZXhPZiIsInN0eWxlIiwiZHJhZ2dhYmxlIiwic2V0VGltZW91dCIsIm1vZGFsIiwiYW1kIiwiZGVmaW5lIiwiZXJyb3JMb2FkaW5nIiwiaW5wdXRUb29Mb25nIiwiYXJncyIsIm92ZXJDaGFycyIsIm1heGltdW0iLCJpbnB1dFRvb1Nob3J0IiwicmVtYWluaW5nQ2hhcnMiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwiY29kZSIsInJlc3BvbnNlSlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZFQUF1QyxDQUFDO0FBQzJDO0FBQzFHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUM5QixJQUFNSSxJQUFJLEdBQUdILG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNSSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNE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QUFPLEVBQUU7Y0FBSSxDQUFDLENBQUM7Y0FDMUVsRixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM4RSxLQUFLLEVBQUUsQ0FBQ3VDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDckQsQ0FBQyxNQUFLLElBQUl6QyxNQUFNLENBQUNFLEtBQUssRUFBRTtjQUVwQkMsTUFBTSxDQUFDQyxPQUFPLENBQUNKLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDaEQsSUFBSSxFQUFFMkMsTUFBTSxDQUFDSyxPQUFPLENBQUMzRCxLQUFLLEVBQUU7Z0JBQUM0RCxPQUFPLEVBQUU7Y0FBSSxDQUFDLENBQUM7WUFDOUU7VUFDSixDQUFDO1VBQ0RDLEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1lBQzdDUCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDdUgsWUFBWSxDQUFDMUgsT0FBTyxDQUFDaEQsSUFBSSxFQUFFbUQsS0FBSyxDQUFDdUgsWUFBWSxDQUFDMUgsT0FBTyxDQUFDM0QsS0FBSyxFQUFFO2NBQUM0RCxPQUFPLEVBQUU7WUFBSSxDQUFDLENBQUM7VUFDdEc7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNKLENBQUMsTUFBTTtJQUNISCxNQUFNLENBQUNDLE9BQU8sQ0FBQyw4REFBOEQsRUFBRSxTQUFTLEVBQUU7TUFBQ0UsT0FBTyxFQUFFO0lBQUksQ0FBQyxDQUFDO0VBQzlHO0VBQ0E5QyxDQUFDLENBQUM2QixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiY29tbWFuZGVfdHJhbnNmb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIGVycm9ycyxpZD1udWxsLGlzR3JvdXBlID0gZmFsc2UpIHtcclxuICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgalF1ZXJ5LmVhY2goZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgIGlmKGlzR3JvdXBlID09IHRydWUpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0geDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBpZiAoeC5zZWFyY2goJ1xcXFxbJykgIT0gLTEgJiYgeC5zZWFyY2goJ1xcXFxdJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIHNlcGFyYXRvcnMgPSBbJ1xcXFxdJywgJ1xcXFxbJ107XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9ycy5qb2luKCd8JykpKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnZGF0YS4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0geC5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4KVxyXG5cclxuLyp2w6lyaWZpZXIgcydpbCBzJ2FnaXQgZCd1bmUgZm9ybXVsYWlyZSBhdmVjIHVuIGNoYW1wIHR5cGUgZmlsZSAqL1xyXG4gICAgICAgIGlmICghalF1ZXJ5KFwiI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBjb2x1bW5OYW1lICsgJ19maWxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBjb2x1bW5OYW1lID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWUpO1xyXG4gICAgICAgIGlmIChjb2x1bW5OYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpXHJcbiAgICAgICAgICAgIHNlbGVjdG9yLmZpbmQoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnNXaXRoUGFyYW0oc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIrc2VsZWN0b3IpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9ycyArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5cclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF90cmFuc2Zvcm1hdGlvbnRfY29tbWFuZGVfbGlzdCcpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLCBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXV0sXHJcbiAgICBcInBhZ2VMZW5ndGhcIjogMTUsXHJcbiAgICBcIm9yZGVyXCI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAge1wib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMyVcIiwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwidGFyZ2V0c1wiOiBbMF19LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTUlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMjAlXCJ9LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTUlXCIvKiwgXCJ0YXJnZXRzXCI6IFs0LCA1XSovfSxcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjIwJVwiIC8qY2xhc3NOYW1lOiBcImNvbG9ubmUtZ3Jhc1wiKi99LFxyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTAlXCIgLypjbGFzc05hbWU6IFwiY29sb25uZS1ncmFzXCIqL30sXHJcbiAgICAgICBcclxuICAgIF0sXHJcbiAgICAvLyBkb206ICdsQmZydGlwJyxcclxuICAgIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnRhYmxlLm9uKCdpbml0LmR0JywgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcblxyXG4gICAgbGV0ICBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHN0KTtcclxuLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4vLyAgICAkLmVhY2goc3QuY29sdW1ucywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuLy8gICAgICAgIGlmICh2YWx1ZS5zZWFyY2guc2VhcmNoICE9IFwiXCIpIHtcclxuLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuLy8gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgICAgICB9XHJcbi8vICAgIH0pO1xyXG4vL31cclxuXHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLCAyICwzICw0LCAgXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbMl0sIFtdKTsgXHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzUsNiw3XSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAnLmNkX29wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfdHJhbnNmb3JtYXRpb250X2NvbW1hbmRlX3Nob3cnLCB7J2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJyl9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG59KTtcclxuXHJcblxyXG4vL2FydGljbGVcclxuXHJcblxyXG4kKFwiLnNlbGVjdDJfZGVtb18zXCIpLnNlbGVjdDIoe1xyXG4gICAgcGxhY2Vob2xkZXI6IFwiQWN0aW9uXCIsXHJcbiAgICBhbGxvd0NsZWFyOiB0cnVlXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKCcubmV3ICwgLmVkaXQnKS5vbignY2hhbmdlJywgJy5tYXJjaGVzJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuICAgIC8vIFNpbXVsYXRlIGZvcm0gZGF0YSwgYnV0IG9ubHkgaW5jbHVkZSB0aGUgc2VsZWN0ZWQgc3BvcnQgdmFsdWUuXHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVskKHRoaXMpLmF0dHIoJ25hbWUnKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gIFxyXG4gICAgZGF0YVskKCcubWFyY2hlcycpLmF0dHIoJ25hbWUnKV0gPSAkKCcubWFyY2hlcycpLnZhbCgpO1xyXG4gIFxyXG4gICAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkZm9ybS5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGh0bWwpOyBcclxuICAgICAgICAgICAgKCQoJy5zb3VzbWFyY2hlJykucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKCcuc291c21hcmNoZScpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJyN0cl9jb21tYW5kZWNhYl90eXBlXzEnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICQoXCIubWFyY2hlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cclxuICAgICQoXCIucmVmZXJlbmNlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAvL2FsZXJ0KCAkKCcjdF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX3R5cGVfMScpLnZhbCgpKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKCcjdHJfY29tbWFuZGVjYWJfdHlwZV8wJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLnJlZmVyZW5jZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICQoXCIubWFyY2hlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAvL2FsZXJ0KCAkKCcjdF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX3R5cGVfMScpLnZhbCgpKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnI3RyX2NvbW1hbmRlY2FiX3R5cGVfMicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5yZWZlcmVuY2VcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAkKFwiLm1hcmNoZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAvL2FsZXJ0KCAkKCcjdF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX3R5cGVfMScpLnZhbCgpKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5uZXcnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWJ1dHRvbicpKTtcclxuXHJcbi8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICBcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF90cmFuc2Zvcm1hdGlvbnRfY29tbWFuZGVfaW5zZXJ0JyksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndF90cmFuc2Zvcm1hdGlvbnRfY29tbWFuZGVfc2hvdycsIHtpZDogcmVzdWx0LmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbnZhciBhcnJheV9kZXRhaWwgPSBbXTtcclxuJCgnLm5ldycpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgIC8vYWxlcnQoJCgnLmFydGljbGUnKS52YWwoKSlcclxuICAgIC8vZHRhLmFwcGVuZCgndF9hY2hhdGRlbWFuZGVpbnRlcm5lZGV0W2FydGljbGVdJywgJCgnLmFydGljbGUnKS52YWwoKSk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKCcuZGV0X2ZvcicpO1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0b3IpO1xyXG4gICAgLy8gYWxlcnQoKVxyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS5zZXJpYWxpemUoKSlcclxuICAgIHZhciBleHNpdCA9IDA7XHJcbiAgICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoJCgnI3RyX2NvbW1hbmRlZGV0X2FydGljbGUnKS52YWwoKSA9PSB2YWx1ZS5pZCkge1xyXG4gICAgICAgICAgICBleHNpdCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbi8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICBcclxuICAgIGlmIChleHNpdCA9PSAwKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfdHJhbnNmb3JtYXRpb250X2RldGFpbGVfbmV3JyksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgIC8vICQoJy5hcnRpY2xlJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lTm8gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5X2RldGFpbC5wdXNoKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR2YSA9IHZhbHVlLnR2YSArICcgJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhdGlvbiA9IHZhbHVlLm9ic2VydmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR2YSA9ICctJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YXRpb24gPSAnLSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYXRlZ29yaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG15X3JvdyA9IFwiIDx0cj48dGQ+XCIgKyAoaSArIDEpICsgXCI8L3RkPjx0ZD5cIiAgKyB2YWx1ZS50aXRyZSArIFwiPC90ZD48dGQ+XCIgKyBvYnNlcnZhdGlvbiArIFwiPC90ZD48dGQ+XCIgKyB2YWx1ZS5xdWFudGl0ZSArIFwiPC90ZD4gPHRkPlwiICsgdmFsdWUucHJpeHVuaXRhaXJlLnRvRml4ZWQoMikgKyBcIjwvdGQ+PHRkPlwiICsgdHZhICsgXCI8L3RkPjx0ZD5cIiArIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2RlbGV0ZV9lbGVtZW50JyBpZD1cIiArIGkgKyBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1uYXZ5Jz48L2k+PC9hPjwvdGQ+PC90cj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTm8rKztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3RyX2NvbW1hbmRlY2FiX2RldGFpbFwiKS52YWwoSlNPTi5zdHJpbmdpZnkoYXJyYXlfZGV0YWlsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8vICAkKCcuYXJ0aWNsZScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDZXQgYXJ0aWNsZSBleGlzdGUgZMOpasOgIFwiLCBcIndhcm5pbmcgXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCcubmV3LWFydGljbGUtYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJy5lZGl0LW5ldy1hcnRpY2xlJykuc2hvdygpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKCcubmV3Jykub24oJ2NsaWNrJywgJy5kZWxldGVfZWxlbWVudCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2lkJykpO1xyXG4gICAgYXJyYXlfZGV0YWlsLnNwbGljZSgkKHRoaXMpLmF0dHIoJ2lkJyksIDEpO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlfZGV0YWlsKTtcclxuICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keSB0clwiKS5yZW1vdmUoKTtcclxuICAgICQuZWFjaChhcnJheV9kZXRhaWwsIGZ1bmN0aW9uIChpLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyAnICUnO1xyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbiA9IHZhbHVlLm9ic2VydmF0aW9uO1xyXG4gICAgICAgIGlmICh2YWx1ZS50dmEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0dmEgPSAnLSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uID0gJy0nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXlfcm93ID0gXCIgPHRyPjx0ZD5cIiArIChpICsgMSkgKyBcIjwvdGQ+PHRkPlwiICsgdmFsdWUuYXJ0aWNsZS50aXRyZSArIFwiPC90ZD48dGQ+XCIgKyBvYnNlcnZhdGlvbiArIFwiPC90ZD48dGQ+XCIgKyB2YWx1ZS5xdWFudGl0ZSArIFwiPC90ZD4gPHRkPlwiICsgdmFsdWUucHJpeHVuaXRhaXJlLnRvRml4ZWQoMikgKyBcIjwvdGQ+PHRkPlwiICsgdHZhICsgXCI8L3RkPjx0ZD5cIiArIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2RlbGV0ZV9lbGVtZW50JyBpZD1cIiArIGkgKyBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1uYXZ5Jz48L2k+PC9hPjwvdGQ+PC90cj5cIjtcclxuICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsPnRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuLypcclxuICogXHJcbiAqIEVkaXQgb3BlcmF0aW9ucyBcclxuICogXHJcbiAqL1xyXG5cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF90cmFuc2Zvcm1hdGlvbnRfY29tbWFuZGVjYWJfdXBkYXRlJywge2lkOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4vKlxyXG4gKiBcclxuICogRW5yZWdpc3RyZXIgIGxhIGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uICBkJ2FydGljbGUgXHJcbiAqIFxyXG4gKi9cclxuXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGR0YSk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF90cmFuc2Zvcm1hdGlvbnRfY29tbWFuZGVkZXRfdXBkYXRlX2RldGFpbCcsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qQWpvdXRlciB1biBub3V2ZWF1IGFydGljbGUgZGFucyBsYSBwYWdlIGRlIG1vZGlmaWNhdGlvbiAqL1xyXG5cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5kZXRhaWxfZm9ybV9hZGRfYXJ0aWNsZScsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gIC8vICBhbGVydCgpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBpZCA9ICQoJyNfaWQnKS52YWwoKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICBcclxuLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG52YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbi8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF90cmFuc2Zvcm1hdGlvbnRfY29tbWFuZGVkZXRfaW5zZXJ0JywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIC8qICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICQoXCIuZGV0YWlsX2Zvcm1fZWRpdCAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7Ki9cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8qXHJcbiAqIFxyXG4gKiBhZmZpY2hlciBsYSBmb3JtdWxhaXJlIGRlIG1vZGlmaWNhdGlvbiAgZCd1biBub3V2ZWF1IGFydGljbGUgXHJcbiAqIFxyXG4gKi9cclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZGV0YWlsX2VkaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICBhbGVydCgpO1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIFxyXG4gICAgICAgIHZhciByb3dfaW5kZXggPSAkKHRoaXMpLmNsb3Nlc3QoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuaW5kZXgoKTtcclxuICAgICAgICB2YXIgY29sX2luZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0X3RyYW5zZm9ybWF0aW9udF9jb21tYW5kZV9lZGl0X2RldGFpbCcsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcudGFibGUtZGV0YWlsIHRyJykuZXEocm93X2luZGV4KzEpLmFkZENsYXNzKCd0YWJsZS10ci1zdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyJykuZXEocm93X2luZGV4KS5hZGRDbGFzcygndGFibGUtdHItc3R5bGUnKS5odG1sKFwiPHRkIGNvbHNwYW49JzknPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7IFxyXG4gICAgICAgICAgICAgICAgLy8gICAgYWxlcnQocm93X2luZGV4KTsgXHJcbiAgICAvLyAgICAgICAgICAgIHZhciBzbGggPSBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5lbXB0eSgpLmFwcGVuZChcIjx0ZCBzdHlsZT0nZGlzcGxheTogbm9uZTsnPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuJCgnLnNob3ctbWUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLW9wZW4nKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5cclxuJCgnLmFjdGlvbnMnKS5vbignY2xpY2snLCAnLmNsb3NlLW1lJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vJCgnLmNsb3NlLW1lJykuY2xpY2soZnVuY3Rpb24gKGUpeyBcclxuICAgICQoXCIuYWN0aW9uc1wiKS5yZW1vdmVDbGFzcygnc2lkZWJhci1vcGVuJyk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgbWVtID0gJCgnI2RhdGFfMSAuaW5wdXQtZ3JvdXAuZGF0ZScpLmRhdGVwaWNrZXIoe1xyXG4gICAgdG9kYXlCdG46IFwibGlua2VkXCIsXHJcbiAgICBrZXlib2FyZE5hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgZm9yY2VQYXJzZTogZmFsc2UsXHJcbiAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxyXG4gICAgYXV0b2Nsb3NlOiB0cnVlXHJcbn0pO1xyXG5cclxudmFyIHllYXJzQWdvID0gbmV3IERhdGUoKTtcclxueWVhcnNBZ28uc2V0RnVsbFllYXIoeWVhcnNBZ28uZ2V0RnVsbFllYXIoKSAtIDIwKTtcclxuXHJcbiQoJyNzZWxlY3RvcicpLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB5ZWFyc0Fnbyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRhYmxlU2hvdyA9ICQoJyNkYXRhdGFibGUtc2hvdycpLkRhdGFUYWJsZSh7XHJcbiAgICBcInNjcm9sbFlcIjogICAgICAgIFwiMjAwcHhcIixcclxuICAgIFwic2Nyb2xsQ29sbGFwc2VcIjogdHJ1ZSxcclxuICAgIFwicGFnaW5nXCI6ICAgICAgICAgZmFsc2UsXHJcbiAgICBcImF1dG9XaWR0aFwiOiBmYWxzZSxcclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiNSVcIiB9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjEwJVwiIH0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiMzUlXCIgfSxcclxuICAgICAgICB7IFwid2lkdGhcIjogXCIyMCVcIiB9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjUlXCIgfSxcclxuICAgICAgICB7IFwid2lkdGhcIjogXCI1JVwiIH0sXHJcbiAgICAgICAgeyBcIndpZHRoXCI6IFwiNSVcIiB9LFxyXG4gICAgICAgIHsgXCJ3aWR0aFwiOiBcIjUlXCIgfVxyXG4gICAgICBdLFxyXG4gICAgICBcImZvb3RlckNhbGxiYWNrXCI6IGZ1bmN0aW9uICggcm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5ICkge1xyXG4gICAgICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLCBkYXRhO1xyXG4gICAgICAgIHZhciB0b3RhbCxwYWdlVG90YWw7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbiAoIGkgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaSA9PT0gJ3N0cmluZycgP1xyXG4gICAgICAgICAgICAgICAgaS5yZXBsYWNlKC9bXFwkLF0vZywgJycpKjEgOlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGkgPT09ICdudW1iZXInID9cclxuICAgICAgICAgICAgICAgICAgICBpIDogMDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBUb3RhbCBvdmVyIGFsbCBwYWdlc1xyXG4gICAgICAgIHRvdGFsID0gYXBpXHJcbiAgICAgICAgICAgIC5jb2x1bW4oIDcgKVxyXG4gICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICAgICAgICB9LCAwICk7XHJcblxyXG4gICAgICAgIC8vIFRvdGFsIG92ZXIgdGhpcyBwYWdlXHJcbiAgICAgICAgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgICAgICAgIC5jb2x1bW4oIDcsIHsgcGFnZTogJ2N1cnJlbnQnfSApXHJcbiAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgICAgIH0sIDAgKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvb3RlclxyXG4gICAgICAgICQoIGFwaS5jb2x1bW4oIDEgKS5mb290ZXIoKSApLmh0bWwoXHJcbiAgICAgICAgICAgICdUb3RhbCA6ICcrIChNYXRoLnJvdW5kKHBhZ2VUb3RhbCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG52YXIgdGFibGVTaG93ID0gJCgnI2RhdGF0YWJsZS1zaG93MicpLkRhdGFUYWJsZSh7XHJcbiAgICBcInNjcm9sbFlcIjogICAgICAgIFwiMjAwcHhcIixcclxuICAgIFwic2Nyb2xsQ29sbGFwc2VcIjogdHJ1ZSxcclxuICAgIFwicGFnaW5nXCI6ICAgICAgICAgZmFsc2UsXHJcbiAgICBcImF1dG9XaWR0aFwiOiBmYWxzZVxyXG4gICAgIFxyXG59KTtcclxudmFyIGggPSBcIjMwMFwiO1xyXG52YXIgdyA9IFwiMTAwMFwiO1xyXG4kKCcucnMnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgIHZhciBsZWZ0ID0gKHNjcmVlbi53aWR0aC8yKS0ody8yKTtcclxuICAgIHZhciB0b3AgPSAoc2NyZWVuLmhlaWdodC8yKS0oaC8yKTtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0X3RyYW5zZm9ybWF0aW9udF9jb21tYW5kZV9maW5kX2FydGljbGUnKTtcclxuICAgIHZhciB3aW4gPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCAnd2lkdGg9Jyt3KycsIGhlaWdodD0zMDAnKTtcclxuICAgICAgICAgICBcclxuICAgICAgXHJcblxyXG4gICAgd2luLm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgY2xpY2tlZENsYXNzID0gZS50YXJnZXQuY2xhc3NOYW1lO1xyXG4gICAgICAgIHZhciBjbGlja2VkSUQgPSBlLnRhcmdldC5pZDtcclxuICAgIFxyXG4gICAgICAgIGlmKCQoIGUudGFyZ2V0ICkucGFyZW50KCkuYXR0cignY2xhc3MnKSA9PSAndHIgYWN0aXZlLXNlYXJjaCcpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCQoJy5zZWwyJykuZmluZChcIm9wdGlvblt2YWx1ZT0nXCIgKyAkKCBlLnRhcmdldCApLnBhcmVudCgpLmF0dHIoJ2lkJykgKyBcIiddXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlbDInKS52YWwoJCggZS50YXJnZXQgKS5wYXJlbnQoKS5hdHRyKCdpZCcpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIHdpbi5jbG9zZSgpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBET00gT3B0aW9uIGFuZCBwcmUtc2VsZWN0IGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBuZXcgT3B0aW9uKCQoIGUudGFyZ2V0ICkucGFyZW50KCkuYXR0cigndGV4dCcpLCAkKCBlLnRhcmdldCApLnBhcmVudCgpLmF0dHIoJ2lkJyksIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIGl0IHRvIHRoZSBzZWxlY3RcclxuICAgICAgICAgICAgICAgICQoJy5zZWwyJykuYXBwZW5kKG5ld09wdGlvbikudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICB3aW4uY2xvc2UoKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIFxyXG59KVxyXG5cclxuXHJcbiQoXCIudGFiLXNlYXJjaCB0Ym9keSB0clwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLnRhYi1zZWFyY2ggdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zZWFyY2gnKVxyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZS1zZWFyY2hcIik7XHJcbn0pO1xyXG4kKFwiLnRhYi1zZWFyY2ggdGhlYWQgdGhcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgIC8vJChcIi5kZGxDaGFtcHNcIikuYXBwZW5kKG5ldyBPcHRpb24oJCggdGhpcyApLnRleHQoKSwgaW5kZXgpKVxyXG4gICAgdmFyIG8gPSBuZXcgT3B0aW9uKCQoIHRoaXMgKS50ZXh0KCksIGluZGV4KTtcclxuLy8vIGpxdWVyaWZ5IHRoZSBET00gb2JqZWN0ICdvJyBzbyB3ZSBjYW4gdXNlIHRoZSBodG1sIG1ldGhvZFxyXG4gICAgJChvKS5odG1sKCQoIHRoaXMgKS50ZXh0KCkpO1xyXG4gICAgJChcIi5kZGxDaGFtcHNcIikuYXBwZW5kKG8pO1xyXG59KTtcclxuJCgnLm50bScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmhpZGUoKVxyXG4gICAgJChcIiNEaXZfcmVjaGVyY2hlVGFiTGlzdGVcIikuZmFkZUluKClcclxuICAgIFxyXG59KVxyXG4kKCcjbGllbkZlcm1lclJlY2hlcmNoZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgICQoXCIjRGl2X3JlY2hlcmNoZVRhYkxpc3RlXCIpLmhpZGUoKVxyXG4gICAgJChcIi5udG1cIikuZmFkZUluKClcclxufSlcclxuXHJcblxyXG4kKFwiI2xpZW5SZWNoZXJjaGVcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIC8vYWxlcnQoJCgnLmRkbENoYW1wcycpLnZhbCgpKVxyXG4gICAgdmFyIGlucHV0LCBmaWx0ZXIsIHRhYmxlLCB0ciwgdGQsIGksIHR4dFZhbHVlO1xyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW5wdXRcIik7XHJcbiAgICBmaWx0ZXIgPSBpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYi1zZWFyXCIpO1xyXG4gICAgdHIgPSB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRyXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHRyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRkID0gdHJbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVskKCcuZGRsQ2hhbXBzJykudmFsKCldO1xyXG4gICAgICBpZiAodGQpIHtcclxuICAgICAgICB0eHRWYWx1ZSA9IHRkLnRleHRDb250ZW50IHx8IHRkLmlubmVyVGV4dDtcclxuICAgICAgICBpZiAodHh0VmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgdHJbaV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRyW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxufSlcclxuXHJcbiQoIFwiI0Rpdl9yZWNoZXJjaGVUYWJMaXN0ZVwiICkuZHJhZ2dhYmxlKCk7XHJcblxyXG5cclxuXHJcbiQoXCIubW9kYWxBY3RpdmF0ZVwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnLmJvZCcpLmVtcHR5KCk7XHJcbiAgICAkKCcuc3ByJykuZmFkZUluKClcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF90cmFuc2Zvcm1hdGlvbnRfY29tbWFuZGVfZmluZF9hcnRpY2xlJyksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnLmJvZCcpLmh0bWwocmVzdWx0KS5oaWRlKClcclxuICAgICAgICAgICAgJCgnLnRhYi1zZWFyY2gnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcInBhZ2luZ1wiOiAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwicGFnZUxlbmd0aFwiOiA1LFxyXG4gICAgICAgICAgICAgICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICAgICAgICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNwcicpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5ib2QnKS5mYWRlSW4oKVxyXG4gICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnLmNkX29wJyxmdW5jdGlvbigpe1xyXG4gICAgaWYgKCQoJy5hcnRpY2xlJykuZmluZChcIm9wdGlvblt2YWx1ZT0nXCIgKyAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoJ2lkJykgKyBcIiddXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJy5hcnRpY2xlJykudmFsKCQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cignaWQnKSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgJCgnI2V4YW1wbGVNb2RhbFByZXZpZXcnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgRE9NIE9wdGlvbiBhbmQgcHJlLXNlbGVjdCBieSBkZWZhdWx0XHJcbiAgICAgICAgdmFyIG5ld09wdGlvbiA9IG5ldyBPcHRpb24oJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5hdHRyKCd0ZXh0JyksICQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cignaWQnKSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gQXBwZW5kIGl0IHRvIHRoZSBzZWxlY3RcclxuICAgICAgICAkKCcuYXJ0aWNsZScpLmFwcGVuZChuZXdPcHRpb24pLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICQoJyNleGFtcGxlTW9kYWxQcmV2aWV3JykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbiQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKCdzZWxlY3QyL2kxOG4vZnInLFtdLGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFJ1c3NpYW5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndGVzdCc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgIHZhciBvdmVyQ2hhcnMgPSBhcmdzLmlucHV0Lmxlbmd0aCAtIGFyZ3MubWF4aW11bTtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINGD0LTQsNC70LjRgtC1ICcgKyBvdmVyQ2hhcnMgKyAnINGB0LjQvNCy0L7Quyc7XHJcbiAgICAgICAgICAgIGlmIChvdmVyQ2hhcnMgPj0gMiAmJiBvdmVyQ2hhcnMgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSArPSAn0LAnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJDaGFycyA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlICs9ICfQvtCyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgIHZhciByZW1haW5pbmdDaGFycyA9IGFyZ3MubWluaW11bSAtIGFyZ3MuaW5wdXQubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnVGFwZXogJyArIHJlbWFpbmluZ0NoYXJzICsgJyBjYXJhY3TDqHJlIG91IHBsdXMgcG91ciBmYWlyZSBkZXMgcmVjaGVyY2hlcyc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndGVzdCc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gJ9CS0Ysg0LzQvtC20LXRgtC1INCy0YvQsdGA0LDRgtGMICcgKyBhcmdzLm1heGltdW0gKyAnINGN0LvQtdC80LXQvdGCJztcclxuXHJcbiAgICAgICAgICAgIGlmIChhcmdzLm1heGltdW0gID49IDIgJiYgYXJncy5tYXhpbXVtIDw9IDQpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ9CwJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLm1heGltdW0gPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSArPSAn0L7Qsic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9SZXN1bHRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2F1Y3VuIHLDqXN1bHRhdCB0cm91dsOpJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlYXJjaGluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuICdSZWNoZXJjaGVy4oCmJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnI19hZmZlY3RhdGlvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgICB2YXIgaWQgPSAkKCcjdGVzdCcpLmRhdGEoXCJjb21tYW5kZUlkXCIpO1xyXG4gICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktYnV0dG9uJykpO1xyXG4gICAgICBpZiAoaWQpIHtcclxuICAgIC8vICAgICBhbGVydChpZCk7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgQWZmZWN0ZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSwgQWZmZWN0ZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfdHJhbnNmb3JtYXRpb250X2NvbW1hbmRlY2FiX2luc2VydF9hZmZlY3RhdGlvbicsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcygnc2lkZWJhci1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgfVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9