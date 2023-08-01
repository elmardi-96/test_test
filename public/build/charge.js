(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charge"],{

/***/ "./assets/js/components/tresorerie/charge.js":
/*!***************************************************!*\
  !*** ./assets/js/components/tresorerie/charge.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
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
var table = $('#grid').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('tr_charge_list'),
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": false,
  "lengthMenu": [[15, 25, 50, 100, 200, 20000000], [15, 25, 50, 100, 200, "All"]],
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
  //       
  //
  //
  //    ],
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_10__["CustomSearchText"](api, [1, 2, 7, 9, 10, 11], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_10__["CustomSearchDate"](api, [3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_10__["CustomSearchSelect"](api, [4, 5, 6, 8, 12, 13], []);
  //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('tr_charge_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
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
$('.new').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('tr_charge_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_8__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate('tr_charge_index');
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);

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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_8__["ShowFormErrors"])(selector, form_name, result.errors);
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
$('body').on('change', '.paiement', function () {
  //alert($(this).val());
  if ($(this).val() == 2) {
    $('.bloc_cheque').show();
  } else {
    $('.bloc_cheque').hide();
  }
  // $("#valid").css("display", "block");
});

$(".bod").on("click", "._delete", function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var charge = $(this).attr("data-charge");
  if (id) {
    var obj = new Object();
    obj["route"] = "tr_charge_reglement_delete";
    obj["id"] = id;
    obj["token"] = token;
    obj["char"] = charge;
    obj["redirection"] = true;
    obj["modal"] = true;
    obj["hideModule"] = true;
    obj["nomModal"] = "ModalDocumentDynamique";
    obj["table"] = table;
    _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_11__["autoAjaxDelete3Param"](obj);
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
function create_custom_dropdowns(element, att) {
  $.fn.select2.amd.define("select2/i18n/fr", [], function () {
    // Russian
    return {
      errorLoading: function errorLoading() {
        return "test";
      },
      inputTooLong: function inputTooLong(args) {
        var overChars = args.input.length - args.maximum;
        var message = "Пожалуйста, удалите " + overChars + " символ";
        if (overChars >= 2 && overChars <= 4) {
          message += "а";
        } else if (overChars >= 5) {
          message += "ов";
        }
        return message;
      },
      inputTooShort: function inputTooShort(args) {
        var remainingChars = args.minimum - args.input.length;
        var message = "Tapez " + remainingChars + " caractère ou plus pour faire des recherches";
        return message;
      },
      loadingMore: function loadingMore() {
        return "test";
      },
      maximumSelected: function maximumSelected(args) {
        var message = "Вы можете выбрать " + args.maximum + " элемент";
        if (args.maximum >= 2 && args.maximum <= 4) {
          message += "а";
        } else if (args.maximum >= 5) {
          message += "ов";
        }
        return message;
      },
      noResults: function noResults() {
        return "aucun resultat trouve";
      },
      searching: function searching() {
        return "Rechercher…";
      }
    };
  });
  window.element = element;
  window.att = "current_select_" + att;
  if (window.element.attr("data-entity")) {
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("tr_charge_find_article_term", {
        selected: att,
        entity: window.element.attr("data-entity"),
        column: window.element.attr("data-column")
      })
    }).then(function (data) {
      console.log(data);
      window.element.prepend('<option selected=""></option>').select2({
        //allowClear: true,
        language: "fr",
        data: data.results,
        minimumResultsForSearch: -1,
        dropdownCssClass: window.att
      }).val(att).trigger("change");
      $(".load-er").fadeOut(70).remove();
      $(".det_for").fadeIn(70);
    });
  } else {
    // toastr.warning('impossible de charger l\'entiter', 'Erreur', {timeOut: 4000})
  }
  //apply to select2
  window.element.on("select2:open", function (e) {
    console.log($(this));
    window.element = $(this);

    //alert()
    $(".ttp").remove();
    $(" .select2-search--hide").after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
    $(".tt").typeWatch({
      highlight: false,
      wait: 100,
      captureLength: 2,
      callback: function callback(valuennn, e) {
        console.log(e);
        $(".select2-results__option").hide();
        $(".select2-results").prepend('<p class="select2-results__option">Rechercher…</p>');
        window.search = valuennn;
        //alert((valuennn))
        if (window.element.attr("data-entity")) {
          $.ajax({
            dataType: "json",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("t_achatdemandeinternecab_find_article_term", {
              term: valuennn,
              selected: att,
              entity: window.element.attr("data-entity"),
              column: window.element.attr("data-column")
            }),
            success: function success(result, textStatus, errorThrown) {
              if (valuennn == $(".tt").val()) {
                window.element.empty().prepend('<option selected=""></option>').select2({
                  language: "fr",
                  //allowClear: true,
                  minimumResultsForSearch: -1,
                  data: result.results
                }).val(att).trigger("change");
                window.element.select2("open");
                //alert(this.value)
                //alert(valuennn)
                $(".tt").focus();
                $(".tt").val(window.search);
              }
            }
          });
        } else {
          toastr.warning("impossible de charger l'entiter", "Erreur", {
            timeOut: 4000
          });
        }
      }
    });
  });
  window.element.on("select2:select", function (e) {
    //alert()
    var data = e.params.data;
    $(".prixunitaire").val(data.prixAchat);
    $(".tva").val(data.tva);
    $(".select2_unite").val(data.unite).trigger("change");
  });
  $("body").on("click", ".select2-container", function () {
    $(".tt").trigger("focus");
  });
}
var array_detail = [];
$(".new").on("submit", ".detail_form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(".det_for");
  var exsit = 0;
  $.each(array_detail, function (i, value) {
    if ($("#tr_chargedet_compte").val() == value.id) {
      exsit = 1;
    }
  });
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);

  // Start loading
  l.start();
  if (exsit == 0) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("tr_charge_detail"),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        console.log(result);
        if (result.errors) {
          l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_8__["ShowFormErrors"])(selector, form_name, result.errors);
        } else if (result.data) {
          l.stop();
          $(".detail_form")[0].reset();
          $(".errors-list").remove();
          $(".article").focus();
          //                console.log(result);
          var _lineNo = 1;
          array_detail.push(result.data);
          $(".new .table-detail > tbody").empty();
          $.each(array_detail, function (i, value) {
            var tva = value.tva + " %";
            if (value.tva == null) {
              tva = "-";
            }
            var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.designation + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td>" + "<td>" + value.prixttc.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
            $(".new .table-detail > tbody").append(my_row);
            _lineNo++;
          });
          $(".select2_unite").val(5).trigger("change");
          $("#tr_charge_detail").val(JSON.stringify(array_detail));
          $(".compte").val(null).trigger("change");
        }
      }
    });
  } else {
    toastr.warning("Cet article existe deja ", "warning ", {
      timeOut: 4000
    });
    l.stop();
  }
  e.preventDefault();
});
$(".new").on("click", ".delete_element", function (e) {
  array_detail.splice($(this).attr("id"), 1);
  $(".new .table-detail > tbody tr").remove();
  $.each(array_detail, function (i, value) {
    var tva = value.tva + " %";
    if (value.tva == null) {
      tva = "-";
    }
    var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.designation + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
    $(".new .table-detail > tbody").append(my_row);
    lineNo++;
  });
});
$(".new-compte-btn").click(function (e) {
  $(".edit-new-compte").show();
  $(this).hide();
  e.preventDefault();
});
$(".edit").on("submit", ".detail_edit", function (e) {
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("tr_charge_edit_detail", {
      id: id
    }),
    success: function success(result) {
      // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
      //  alert();
      $(".table-detail > tbody  > tr").eq(row_index).addClass("table-tr-style").html("<td colspan='10'>" + result + "</td>");
      $($(".table-detail > tbody  > tr").eq(row_index)).find(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
      create_custom_dropdowns($($(".table-detail > tbody  > tr").eq(row_index)).find(".compte"), $($(".table-detail > tbody  > tr").eq(row_index)).find(".compte").attr("if-selected"));
      $(".load-er").fadeOut(70).remove();
      $(".det_for").fadeIn(70);

      //
      //    alert(row_index);
      //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
      //            console.log(result)
    }
  });

  e.preventDefault();
});
$(".edit").on("submit", ".detail_form", function (e) {
  //alert();
  var dta = new FormData(this);
  console.log(dta);
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("tr_chargedet_update_detail", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".detail_form #" + form_name + "_" + columnName[1]).parent().append("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
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

/*Ajouter un nouveau article dans la page de modification */

$(".edit").on("submit", ".detail_form_add_article", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = dta.get("_id_cab");
  var selector = $(this);
  // alert(id);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_9__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("tr_chargedet_insert", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        $(".errors-list").remove();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_8__["ShowFormErrors"])(selector, form_name, result.errors);
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
$(".edit").on("submit", ".detail_form_delete", function (e) {
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var token = dta.get("_token");
  //    var id = $("input[name=_id]").val();
  //    var token = $("input[name=_token]").val();
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: "animatedSwal flipInX faster"
    },
    position: "top",
    title: "Confirmation ?",
    text: "Voulez vous vraiment supprimer cette liste ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        type: "DELETE",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_6___default.a.generate("tr_chargedet_delete", {
          id: id,
          token: token
        }),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result) {
          //   console.log(result);
          if (result.data == "deleted") {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            // selector.parent().parent().hide();
            // swal(result.message.title, result.message.text, result.message.success);
            location.reload();
          } else if (result.data = "error") {
            toastr.error(result.message.text, result.message.title, {
              timeOut: 4000
            });
            //swal(result.message.title, result.message.text, result.message.error);
          }
        }
      });
    }
  });

  e.preventDefault();
});
$(".sel2").select2();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-set-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/array-set-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


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

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__(/*! ../internals/array-set-length */ "./node_modules/core-js/internals/array-set-length.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "./node_modules/core-js/internals/delete-property-or-throw.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});


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

},[["./assets/js/components/tresorerie/charge.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90cmVzb3JlcmllL2NoYXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNwbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJlIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiYXBpIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJjbG9zZXN0IiwiYXR0ciIsImhyZWYiLCJqUXVlcnkiLCJlYWNoIiwiaSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdHIiLCJzdWNjZXNzIiwidGltZU91dCIsIndhcm5pbmciLCJlcnJvciIsImZvcm1fbmFtZSIsImR0YSIsIkZvcm1EYXRhIiwic2VsZWN0b3IiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJyZXN1bHQiLCJzdG9wIiwiZXJyb3JzIiwiU2hvd0Zvcm1FcnJvcnMiLCJlbXB0eSIsIm1lc3NhZ2UiLCJ0aXRsZSIsImNvZGUiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInByZXZlbnREZWZhdWx0Iiwic2hvdyIsImhpZGUiLCJpZCIsInRva2VuIiwiY2hhcmdlIiwib2JqIiwiT2JqZWN0IiwiYXV0b0Z1bmN0aW9uQWpheCIsImNyZWF0ZV9jdXN0b21fZHJvcGRvd25zIiwiZWxlbWVudCIsImF0dCIsInNlbGVjdDIiLCJhbWQiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJhcmdzIiwib3ZlckNoYXJzIiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwiaW5wdXRUb29TaG9ydCIsInJlbWFpbmluZ0NoYXJzIiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwic2VsZWN0ZWQiLCJlbnRpdHkiLCJjb2x1bW4iLCJ0aGVuIiwicHJlcGVuZCIsImxhbmd1YWdlIiwicmVzdWx0cyIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiZHJvcGRvd25Dc3NDbGFzcyIsInRyaWdnZXIiLCJmYWRlT3V0IiwicmVtb3ZlIiwiZmFkZUluIiwiYWZ0ZXIiLCJ0eXBlV2F0Y2giLCJoaWdobGlnaHQiLCJ3YWl0IiwiY2FwdHVyZUxlbmd0aCIsImNhbGxiYWNrIiwidmFsdWVubm4iLCJzZWFyY2giLCJkYXRhVHlwZSIsInRlcm0iLCJmb2N1cyIsInBhcmFtcyIsInByaXhBY2hhdCIsInR2YSIsInVuaXRlIiwiYXJyYXlfZGV0YWlsIiwiZXhzaXQiLCJ2YWx1ZSIsInJlc2V0IiwibGluZU5vIiwicHVzaCIsIm15X3JvdyIsImRlc2lnbmF0aW9uIiwicXVhbnRpdGUiLCJwcml4dW5pdGFpcmUiLCJ0b0ZpeGVkIiwicHJpeHR0YyIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzcGxpY2UiLCJjbGljayIsImdldCIsInJvd19pbmRleCIsImluZGV4IiwiY29sX2luZGV4IiwiZXEiLCJhZGRDbGFzcyIsImh0bWwiLCJmaW5kIiwidmlvbGF0aW9ucyIsInByb3BlcnR5UGF0aCIsImNvbHVtbk5hbWUiLCJzcGxpdCIsInBhcmVudCIsImZpcmUiLCJzaG93Q2xhc3MiLCJwb3B1cCIsInBvc2l0aW9uIiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3ZEO0FBQ3REQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDakI7QUFFeEVDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBRzlCSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFHRixJQUFJQyxLQUFLLEdBQUdSLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ1MsU0FBUyxDQUFDO0VBQzdCQyxJQUFJLEVBQUU7SUFDRkMsR0FBRyxFQUFFZCxrSEFBTyxDQUFDZSxRQUFRLENBQUMsZ0JBQWdCLENB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QWdDO0FBQzlELGNBQWMsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDbEQsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtCQUFrQjtBQUNsQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxHQUFHLGdEQUFnRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMiLCJmaWxlIjoiY2hhcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzJztcclxucmVxdWlyZSgnLi4vLi4vcGx1Z2lucy92YWxpZGF0ZS9qcXVlcnkudmFsaWRhdGUubWluLmpzJyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gJy4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzJztcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2xpc3QnKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiBmYWxzZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzE1LCAyNSwgNTAsIDEwMCwgMjAwLCAyMDAwMDAwMF0sIFsxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuLy8gICAgXCJjb2x1bW5zXCI6IFtcclxuLy8gICAgICAgIHsgXCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLyAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4vLyAgICAgICBcclxuLy9cclxuLy9cclxuLy8gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsIDIgLDcsOSwxMCwxMSxdLCBbXSk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFszXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFs0LDUsNiw4LDEyLDEzXSwgW10pO1xyXG4gICAgLy8gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICcuY2Rfb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnLCB7ICdpZCc6ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpIH0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkuZWFjaCgkKCcudG9hc3RyLW1zZycpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vlc1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfVxyXG59KTtcclxualF1ZXJ5LmVhY2goJCgnLmZvcm0tZXJyb3JzIGxpJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxufSk7XHJcbi8qY2hlY2sgdGhlIGZvcm0gZXJyb3JzKi9cclxuY29uc29sZS5sb2coJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpKTtcclxuaWYgKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSAhPSAnJykge1xyXG4gICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQoJy5mb3JtLWVycm9ycycpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbn1cclxuXHJcbiQoJy5uZXcnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbi8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIFxyXG4gICAgJC5hamF4KHsgXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX25ldycpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZT0yMDApIHtcclxuICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIC8vL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4vLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICBcclxuICAgICQuYWpheCh7IFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgLy8gIHVybDogUm91dGluZy5nZW5lcmF0ZSgndHJfY2hhcmdlX2VkaXQnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGU9MjAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gIGFsZXJ0KHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAvL3ZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd0cl9jaGFyZ2VfZWRpdCcsIHtpZDogcmVzdWx0LmRhdGEuaWR9KTtcclxuICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5wYWllbWVudCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAyKSB7XHJcbiAgICAgICAgJCgnLmJsb2NfY2hlcXVlJykuc2hvdygpO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuYmxvY19jaGVxdWUnKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgIC8vICQoXCIjdmFsaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxufSk7XHJcblxyXG5cclxuJChcIi5ib2RcIikub24oXCJjbGlja1wiLCBcIi5fZGVsZXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuICAgIHZhciBjaGFyZ2UgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWNoYXJnZVwiKTtcclxuICBcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICBvYmpbXCJyb3V0ZVwiXSA9IFwidHJfY2hhcmdlX3JlZ2xlbWVudF9kZWxldGVcIjtcclxuICAgICAgb2JqW1wiaWRcIl0gPSBpZDtcclxuICAgICAgb2JqW1widG9rZW5cIl0gPSB0b2tlbjtcclxuICAgICAgb2JqW1wiY2hhclwiXSA9IGNoYXJnZTtcclxuICAgICAgb2JqW1wicmVkaXJlY3Rpb25cIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJtb2RhbFwiXSA9IHRydWU7XHJcbiAgICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgICBvYmpbXCJ0YWJsZVwiXSA9IHRhYmxlO1xyXG4gICAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4RGVsZXRlM1BhcmFtKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoZWxlbWVudCwgYXR0KSB7XHJcbiAgICAkLmZuLnNlbGVjdDIuYW1kLmRlZmluZShcInNlbGVjdDIvaTE4bi9mclwiLCBbXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBSdXNzaWFuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XHJcbiAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINGD0LTQsNC70LjRgtC1IFwiICsgb3ZlckNoYXJzICsgXCIg0YHQuNC80LLQvtC7XCI7XHJcbiAgICAgICAgICBpZiAob3ZlckNoYXJzID49IDIgJiYgb3ZlckNoYXJzIDw9IDQpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSArPSBcItCwXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJDaGFycyA+PSA1KSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQvtCyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICB2YXIgcmVtYWluaW5nQ2hhcnMgPSBhcmdzLm1pbmltdW0gLSBhcmdzLmlucHV0Lmxlbmd0aDtcclxuICBcclxuICAgICAgICAgIHZhciBtZXNzYWdlID1cclxuICAgICAgICAgICAgXCJUYXBleiBcIiArXHJcbiAgICAgICAgICAgIHJlbWFpbmluZ0NoYXJzICtcclxuICAgICAgICAgICAgXCIgY2FyYWN0w6hyZSBvdSBwbHVzIHBvdXIgZmFpcmUgZGVzIHJlY2hlcmNoZXNcIjtcclxuICBcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZGluZ01vcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heGltdW1TZWxlY3RlZDogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICAgIHZhciBtZXNzYWdlID0gXCLQktGLINC80L7QttC10YLQtSDQstGL0LHRgNCw0YLRjCBcIiArIGFyZ3MubWF4aW11bSArIFwiINGN0LvQtdC80LXQvdGCXCI7XHJcbiAgXHJcbiAgICAgICAgICBpZiAoYXJncy5tYXhpbXVtID49IDIgJiYgYXJncy5tYXhpbXVtIDw9IDQpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSArPSBcItCwXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubWF4aW11bSA+PSA1KSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQvtCyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vUmVzdWx0czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiYXVjdW4gcmVzdWx0YXQgdHJvdXZlXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBcIlJlY2hlcmNoZXLigKZcIjtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB3aW5kb3cuYXR0ID0gXCJjdXJyZW50X3NlbGVjdF9cIiArIGF0dDtcclxuICAgIGlmICh3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIikpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX2NoYXJnZV9maW5kX2FydGljbGVfdGVybVwiLCB7XHJcbiAgICAgICAgICBzZWxlY3RlZDogYXR0LFxyXG4gICAgICAgICAgZW50aXR5OiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIiksXHJcbiAgICAgICAgICBjb2x1bW46IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWNvbHVtblwiKSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgICAuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIC8vYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5yZXN1bHRzLFxyXG4gICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ3NzQ2xhc3M6IHdpbmRvdy5hdHQsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgICAudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAkKFwiLmxvYWQtZXJcIikuZmFkZU91dCg3MCkucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIi5kZXRfZm9yXCIpLmZhZGVJbig3MCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdG9hc3RyLndhcm5pbmcoJ2ltcG9zc2libGUgZGUgY2hhcmdlciBsXFwnZW50aXRlcicsICdFcnJldXInLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICAvL2FwcGx5IHRvIHNlbGVjdDJcclxuICAgIHdpbmRvdy5lbGVtZW50Lm9uKFwic2VsZWN0MjpvcGVuXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCQodGhpcykpO1xyXG4gIFxyXG4gICAgICB3aW5kb3cuZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgXHJcbiAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAkKFwiLnR0cFwiKS5yZW1vdmUoKTtcclxuICAgICAgJChcIiAuc2VsZWN0Mi1zZWFyY2gtLWhpZGVcIikuYWZ0ZXIoXHJcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duIHR0cFwiPjxpbnB1dCBjbGFzcz1cInR0IHNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIjBcIiBhdXRvY29tcGxldGU9XCJvblwiIGF1dG9jb3JyZWN0PVwib25cIiBhdXRvY2FwaXRhbGl6ZT1cIm9uXCIgc3BlbGxjaGVjaz1cInRydWVcIiByb2xlPVwidGV4dGJveFwiIC8+PC9zcGFuPidcclxuICAgICAgKTtcclxuICAgICAgJChcIi50dFwiKS50eXBlV2F0Y2goe1xyXG4gICAgICAgIGhpZ2hsaWdodDogZmFsc2UsXHJcbiAgICAgICAgd2FpdDogMTAwLFxyXG4gICAgICAgIGNhcHR1cmVMZW5ndGg6IDIsXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZW5ubiwgZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAkKFwiLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIuc2VsZWN0Mi1yZXN1bHRzXCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICc8cCBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCI+UmVjaGVyY2hlcuKApjwvcD4nXHJcbiAgICAgICAgICApO1xyXG4gIFxyXG4gICAgICAgICAgd2luZG93LnNlYXJjaCA9IHZhbHVlbm5uO1xyXG4gICAgICAgICAgLy9hbGVydCgodmFsdWVubm4pKVxyXG4gICAgICAgICAgaWYgKHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgICAgICBcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVfdGVybVwiLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0ZXJtOiB2YWx1ZW5ubixcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGF0dCxcclxuICAgICAgICAgICAgICAgICAgZW50aXR5OiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIiksXHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtbjogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtY29sdW1uXCIpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZW5ubiA9PSAkKFwiLnR0XCIpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLmVtcHR5KClcclxuICAgICAgICAgICAgICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIC8vYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5yZXN1bHRzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50LnNlbGVjdDIoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAvL2FsZXJ0KHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIC8vYWxlcnQodmFsdWVubm4pXHJcbiAgICAgICAgICAgICAgICAgICQoXCIudHRcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi50dFwiKS52YWwod2luZG93LnNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcImltcG9zc2libGUgZGUgY2hhcmdlciBsJ2VudGl0ZXJcIiwgXCJFcnJldXJcIiwge1xyXG4gICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIC8vYWxlcnQoKVxyXG4gICAgICB2YXIgZGF0YSA9IGUucGFyYW1zLmRhdGE7XHJcbiAgICAgICQoXCIucHJpeHVuaXRhaXJlXCIpLnZhbChkYXRhLnByaXhBY2hhdCk7XHJcbiAgICAgICQoXCIudHZhXCIpLnZhbChkYXRhLnR2YSk7XHJcbiAgICAgICQoXCIuc2VsZWN0Ml91bml0ZVwiKS52YWwoZGF0YS51bml0ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zZWxlY3QyLWNvbnRhaW5lclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIudHRcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHZhciBhcnJheV9kZXRhaWwgPSBbXTtcclxuJChcIi5uZXdcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKFwiLmRldF9mb3JcIik7XHJcblxyXG4gIHZhciBleHNpdCA9IDA7XHJcbiAgJC5lYWNoKGFycmF5X2RldGFpbCwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICBpZiAoJChcIiN0cl9jaGFyZ2VkZXRfY29tcHRlXCIpLnZhbCgpID09IHZhbHVlLmlkKSB7XHJcbiAgICAgIGV4c2l0ID0gMTtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcbiAgaWYgKGV4c2l0ID09IDApIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9jaGFyZ2VfZGV0YWlsXCIpLFxyXG4gICAgICBkYXRhOiBkdGEsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICQoXCIuZGV0YWlsX2Zvcm1cIilbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiLmFydGljbGVcIikuZm9jdXMoKTtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICBsZXQgbGluZU5vID0gMTtcclxuICAgICAgICAgIGFycmF5X2RldGFpbC5wdXNoKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgJC5lYWNoKGFycmF5X2RldGFpbCwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnR2YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgdHZhID0gXCItXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBteV9yb3cgPVxyXG4gICAgICAgICAgICAgIFwiIDx0cj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgIChpICsgMSkgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdmFsdWUuZGVzaWduYXRpb24gK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICB2YWx1ZS5xdWFudGl0ZSArXHJcbiAgICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD5cIiArXHJcbiAgICAgICAgICAgICAgXCI8dGQ+XCIgICtcclxuICAgICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2RlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtbmF2eSc+PC9pPjwvYT48L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICAgICAgbGluZU5vKys7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuc2VsZWN0Ml91bml0ZVwiKS52YWwoNSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICQoXCIjdHJfY2hhcmdlX2RldGFpbFwiKS52YWwoSlNPTi5zdHJpbmdpZnkoYXJyYXlfZGV0YWlsKSk7XHJcbiAgICAgICAgICAkKFwiLmNvbXB0ZVwiKS52YWwobnVsbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXCJDZXQgYXJ0aWNsZSBleGlzdGUgZGVqYSBcIiwgXCJ3YXJuaW5nIFwiLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICBsLnN0b3AoKTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoXCIubmV3XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGVsZXRlX2VsZW1lbnRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGFycmF5X2RldGFpbC5zcGxpY2UoJCh0aGlzKS5hdHRyKFwiaWRcIiksIDEpO1xyXG4gIFxyXG4gICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLnJlbW92ZSgpO1xyXG4gICAgJC5lYWNoKGFycmF5X2RldGFpbCwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICBcIiA8dHI+PHRkPlwiICtcclxuICAgICAgICAoaSArIDEpICtcclxuICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICB2YWx1ZS5kZXNpZ25hdGlvbiArXHJcbiAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgIHZhbHVlLnF1YW50aXRlICtcclxuICAgICAgICBcIjwvdGQ+IDx0ZD5cIiArXHJcbiAgICAgICAgdmFsdWUucHJpeHVuaXRhaXJlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgIHR2YSArXHJcbiAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgdmFsdWUucHJpeHR0Yy50b0ZpeGVkKDIpICtcclxuICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgIGkgK1xyXG4gICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS10cmFzaCB0ZXh0LW5hdnknPjwvaT48L2E+PC90ZD48L3RyPlwiO1xyXG4gICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuYXBwZW5kKG15X3Jvdyk7XHJcbiAgICAgIGxpbmVObysrO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKFwiLm5ldy1jb21wdGUtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLmVkaXQtbmV3LWNvbXB0ZVwiKS5zaG93KCk7XHJcbiAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gIFxyXG4gICAgdmFyIHJvd19pbmRleCA9ICQodGhpcykuY2xvc2VzdChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5pbmRleCgpO1xyXG4gICAgdmFyIGNvbF9pbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0cl9jaGFyZ2VfZWRpdF9kZXRhaWxcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAvLyAkKCcudGFibGUtZGV0YWlsIHRyJykuZXEocm93X2luZGV4KzEpLmFkZENsYXNzKCd0YWJsZS10ci1zdHlsZScpO1xyXG4gICAgICAvLyAgYWxlcnQoKTtcclxuICAgICAgICAkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpXHJcbiAgICAgICAgICAuZXEocm93X2luZGV4KVxyXG4gICAgICAgICAgLmFkZENsYXNzKFwidGFibGUtdHItc3R5bGVcIilcclxuICAgICAgICAgIC5odG1sKFwiPHRkIGNvbHNwYW49JzEwJz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgJCgkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmVxKHJvd19pbmRleCkpXHJcbiAgICAgICAgICAuZmluZChcIi5kZXRfZm9yXCIpXHJcbiAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAuYWZ0ZXIoXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKFxyXG4gICAgICAgICAgJCgkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmVxKHJvd19pbmRleCkpLmZpbmQoXCIuY29tcHRlXCIpLFxyXG4gICAgICAgICAgJCgkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmVxKHJvd19pbmRleCkpXHJcbiAgICAgICAgICAgIC5maW5kKFwiLmNvbXB0ZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImlmLXNlbGVjdGVkXCIpXHJcbiAgICAgICAgKTtcclxuICAgXHJcbiAgICAgICAgJChcIi5sb2FkLWVyXCIpLmZhZGVPdXQoNzApLnJlbW92ZSgpO1xyXG4gICAgICAgICQoXCIuZGV0X2ZvclwiKS5mYWRlSW4oNzApO1xyXG4gICBcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgIGFsZXJ0KHJvd19pbmRleCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB2YXIgc2xoID0gc2VsZWN0b3IucGFyZW50KCkucGFyZW50KCkuZW1wdHkoKS5hcHBlbmQoXCI8dGQgc3R5bGU9J2Rpc3BsYXk6IG5vbmU7Jz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICBcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuICAkKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vYWxlcnQoKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyhkdGEpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX2NoYXJnZWRldF91cGRhdGVfZGV0YWlsXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICBkYXRhOiBkdGEsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAkKFwiLmVycm9ycy1saXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSlcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuICAvKkFqb3V0ZXIgdW4gbm91dmVhdSBhcnRpY2xlIGRhbnMgbGEgcGFnZSBkZSBtb2RpZmljYXRpb24gKi9cclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZm9ybV9hZGRfYXJ0aWNsZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZF9jYWJcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gYWxlcnQoaWQpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgXHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidHJfY2hhcmdlZGV0X2luc2VydFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgZGF0YTogZHRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gICQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZm9ybV9kZWxldGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9IGR0YS5nZXQoXCJfdG9rZW5cIik7XHJcbiAgICAvLyAgICB2YXIgaWQgPSAkKFwiaW5wdXRbbmFtZT1faWRdXCIpLnZhbCgpO1xyXG4gICAgLy8gICAgdmFyIHRva2VuID0gJChcImlucHV0W25hbWU9X3Rva2VuXVwiKS52YWwoKTtcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRyX2NoYXJnZWRldF9kZWxldGVcIiwgeyBpZDogaWQsIHRva2VuOiB0b2tlbiB9KSxcclxuICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIC8vIHN3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0LmRhdGEgPSBcImVycm9yXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9zd2FsKHJlc3VsdC5tZXNzYWdlLnRpdGxlLCByZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuICAkKFwiLnNlbDJcIikuc2VsZWN0MigpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGVhdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyAkUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXN1bHQgKz0gc3RyO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZGVsZXRlUHJvcGVydHlPclRocm93ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlbGV0ZS1wcm9wZXJ0eS1vci10aHJvdycpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzcGxpY2UnKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNwbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zcGxpY2Vcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNwbGljZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCAvKiAsIC4uLml0ZW1zICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFjdHVhbFN0YXJ0ID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW4pO1xuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRDb3VudCwgYWN0dWFsRGVsZXRlQ291bnQsIEEsIGssIGZyb20sIHRvO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIGluc2VydENvdW50ID0gYWN0dWFsRGVsZXRlQ291bnQgPSAwO1xuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBpbnNlcnRDb3VudCA9IDA7XG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IGxlbiAtIGFjdHVhbFN0YXJ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnNlcnRDb3VudCA9IGFyZ3VtZW50c0xlbmd0aCAtIDI7XG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IG1pbihtYXgodG9JbnRlZ2VyT3JJbmZpbml0eShkZWxldGVDb3VudCksIDApLCBsZW4gLSBhY3R1YWxTdGFydCk7XG4gICAgfVxuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBpbnNlcnRDb3VudCAtIGFjdHVhbERlbGV0ZUNvdW50KTtcbiAgICBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIGFjdHVhbERlbGV0ZUNvdW50KTtcbiAgICBmb3IgKGsgPSAwOyBrIDwgYWN0dWFsRGVsZXRlQ291bnQ7IGsrKykge1xuICAgICAgZnJvbSA9IGFjdHVhbFN0YXJ0ICsgaztcbiAgICAgIGlmIChmcm9tIGluIE8pIGNyZWF0ZVByb3BlcnR5KEEsIGssIE9bZnJvbV0pO1xuICAgIH1cbiAgICBBLmxlbmd0aCA9IGFjdHVhbERlbGV0ZUNvdW50O1xuICAgIGlmIChpbnNlcnRDb3VudCA8IGFjdHVhbERlbGV0ZUNvdW50KSB7XG4gICAgICBmb3IgKGsgPSBhY3R1YWxTdGFydDsgayA8IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50OyBrKyspIHtcbiAgICAgICAgZnJvbSA9IGsgKyBhY3R1YWxEZWxldGVDb3VudDtcbiAgICAgICAgdG8gPSBrICsgaW5zZXJ0Q291bnQ7XG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcbiAgICAgICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xuICAgICAgfVxuICAgICAgZm9yIChrID0gbGVuOyBrID4gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDsgay0tKSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgayAtIDEpO1xuICAgIH0gZWxzZSBpZiAoaW5zZXJ0Q291bnQgPiBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgZm9yIChrID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7IGsgPiBhY3R1YWxTdGFydDsgay0tKSB7XG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQgLSAxO1xuICAgICAgICB0byA9IGsgKyBpbnNlcnRDb3VudCAtIDE7XG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcbiAgICAgICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGsgPSAwOyBrIDwgaW5zZXJ0Q291bnQ7IGsrKykge1xuICAgICAgT1trICsgYWN0dWFsU3RhcnRdID0gYXJndW1lbnRzW2sgKyAyXTtcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudCk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdGhpc051bWJlclZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlJyk7XG52YXIgJHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciByZXBlYXQgPSB1bmN1cnJ5VGhpcygkcmVwZWF0KTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBuYXRpdmVUb0ZpeGVkID0gdW5jdXJyeVRoaXMoMS4wLnRvRml4ZWQpO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGRhdGEsIG4sIGMpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjMiA9IGM7XG4gIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGMyICUgMWU3O1xuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICB9XG59O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gKGRhdGEsIG4pIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIGMgPSAwO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGZsb29yKGMgLyBuKTtcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgfVxufTtcblxudmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBzID0gJyc7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgIHZhciB0ID0gJFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG5cbnZhciBGT1JDRUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVUb0ZpeGVkKDAuMDAwMDgsIDMpICE9PSAnMC4wMDAnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgwLjksIDApICE9PSAnMScgfHxcbiAgICBuYXRpdmVUb0ZpeGVkKDEuMjU1LCAyKSAhPT0gJzEuMjUnIHx8XG4gICAgbmF0aXZlVG9GaXhlZCgxMDAwMDAwMDAwMDAwMDAwMTI4LjAsIDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCc7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkKHt9KTtcbn0pO1xuXG4vLyBgTnVtYmVyLnByb3RvdHlwZS50b0ZpeGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyT3JJbmZpbml0eShmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgLy8gVE9ETzogRVMyMDE4IGluY3JlYXNlZCB0aGUgbWF4aW11bSBudW1iZXIgb2YgZnJhY3Rpb24gZGlnaXRzIHRvIDEwMCwgbmVlZCB0byBpbXByb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgJFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChudW1iZXIgIT0gbnVtYmVyKSByZXR1cm4gJ05hTic7XG4gICAgaWYgKG51bWJlciA8PSAtMWUyMSB8fCBudW1iZXIgPj0gMWUyMSkgcmV0dXJuICRTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KGRhdGEsIDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEsIDEpO1xuICAgICAgICBkaXZpZGUoZGF0YSwgMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogc3RyaW5nU2xpY2UocmVzdWx0LCAwLCBrIC0gZnJhY3REaWdpdHMpICsgJy4nICsgc3RyaW5nU2xpY2UocmVzdWx0LCBrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==