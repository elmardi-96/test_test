(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uventecommande"],{

/***/ "./assets/js/components/module_vente/commande.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/module_vente/commande.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");




















var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.setRoutingData(routes);
//plugins/steps/jquery.steps.css
__webpack_require__(/*! ../../../../assets/js/plugins/steps/jquery.steps.css */ "./assets/js/plugins/steps/jquery.steps.css");
__webpack_require__(/*! ../../plugins/steps/jquery.steps.min.js */ "./assets/js/plugins/steps/jquery.steps.min.js");
__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




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
        var message = "Tapez " + remainingChars + " caractere ou plus pour faire des recherches";
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
    $(".remise").val(data.remise);
    $(".select2_unite").val(data.unite).trigger("change");
  });
  $("body").on("click", ".select2-container", function () {
    $(".tt").trigger("focus");
  });
}
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});
$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true
});
$(".new").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_insert"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_show", {
          id: result.data.id
        });
        window.location.href = url;
        //location.reload();
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
$(".new").on("submit", ".detail_form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(".det_for");
  var exsit = 0;
  $.each(array_detail, function (i, value) {
    if ($("#uv_commandedet_article").val() == value.id) {
      exsit = 1;
    }
  });
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);

  // Start loading
  l.start();
  if (exsit == 0) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_detail"),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        console.log(result);
        if (result.errors) {
          l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
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
            var observation = value.observation;
            var remise = value.remise + " %";
            if (value.tva == null) {
              tva = "-";
            }
            if (value.observation == null) {
              observation = "-";
            }
            var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + remise + "</td><td>" + value.montantRemise.toFixed(2) + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
            $(".new .table-detail > tbody").append(my_row);
            _lineNo++;
          });
          $(".select2_unite").val(null).trigger("change");
          $("#uv_commandecab_detail").val(JSON.stringify(array_detail));
          $(".article").val(null).trigger("change");
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
    var observation = value.observation;
    var remise = value.remise + " %";
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation == null) {
      observation = "-";
    }
    var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + remise + "</td><td>" + value.montantRemise.toFixed(2) + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
    $(".new .table-detail > tbody").append(my_row);
    lineNo++;
  });
});
$(".new-article-btn").click(function (e) {
  $(".edit-new-article").show();
  $(this).hide();
  e.preventDefault();
});
$(".new , .edit").on("change", ".compteMasse", function (e) {
  var $form = $(this).closest("form");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  console.log(data);
  //alert($form.attr('action'));
  console.log($form.attr("method"));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function success(html) {
      // console.log(html);
      $(".compteRubrique").replaceWith($(html).find(".compteRubrique"));
      $(".sel2").select2();
      $(".compteRubrique").parent().find(".select2").not(":first").remove();
      $(".comptePoste").parent().find(".select2").not(":first").remove();
      $(".compte").parent().find(".select2").not(":first").remove();
    }
  });
  e.preventDefault();
});
$(".new , .edit").on("change", ".compteRubrique", function () {
  var $form = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function success(html) {
      console.log(html);
      $(".comptePoste").replaceWith($(html).find(".comptePoste"));
      $(".sel2").select2();
      $(".comptePoste").parent().find(".select2").not(":first").remove();
      $(".compte").parent().find(".select2").not(":first").remove();
    }
  });
});
$(".new , .edit").on("change", ".comptePoste", function () {
  var $form = $(this).closest("form");
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
  data[$(".compteRubrique").attr("name")] = $(".compteRubrique").val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function success(html) {
      console.log(html);
      $(".compte").replaceWith($(html).find(".compte"));
      $(".sel2").select2();
      $(".compte").parent().find(".select2").not(":first").remove();
    }
  });
});
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_list") + location.search,
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "3%",
    searchable: true,
    targets: [0],
    name: "tab.id"
  }, {
    orderable: true,
    width: "10%",
    name: "tab.code"
  }, {
    orderable: true,
    width: "10%",
    name: "tab.datecommande"
  }, {
    orderable: true,
    width: "15%",
    name: "tab.description"
  }, {
    orderable: true,
    width: "20%",
    searchable: false
  }, {
    orderable: true,
    width: "15%",
    name: "tab.ht"
  }, {
    orderable: true,
    width: "20%",
    name: "tab.tva"
  }, {
    orderable: true,
    width: "10%",
    name: "tab.ttc"
  }, {
    orderable: true,
    width: "10%",
    name: "tab.budget"
  }, {
    width: "8%",
    orderable: true,
    name: "tab.depense"
  }, {
    orderable: false,
    className: "br",
    visible: false,
    name: "tab.code"
  }, {
    orderable: false,
    className: "fac",
    visible: false,
    name: "tab.code"
  }, {
    orderable: false,
    className: "rg",
    visible: false,
    name: "tab.code"
  }, {
    width: "8%",
    orderable: true,
    name: "tab.position_actuel"
  }, {
    width: "8%",
    orderable: true,
    name: "tab.position_actuel"
  }, {
    orderable: true,
    searchable: false,
    width: "5%"
  }],
  columnDefs: [{
    searchable: false,
    targets: 15,
    render: function render(t, a, l, s) {
      var data = "";
      t.forEach(function (element) {
        var link = "";
        if (element._route_link) {
          link = "href='" + element._route_link + "'";
        }
        data = data + "<li><a " + link + "  data-transition='" + element.name + "' data-id='" + element.id + "' data-title='" + element.titre + "' class='dropdown-item  " + element["class"] + " " + element.idCs + "' ><i class='fa " + element.icon + "' ></i> " + element.titre + "</a></li>";
      });
      return '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' + data + ' </ul> </div> \t</div>\t';
    }
  }],
  // dom: 'lBfrtip',
  //dom: '<"dt-buttons btn-group"Blf>rt<"bottom"ip><"clear">',
  dom: '<"html5buttons btn-group"f>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});

table.on("init.dt", function (e, settings) {
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__["CustomSearchText"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__["CustomSearchSelect"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__["CustomSearchCheckbox"](api, [0], []);
});

/*column 1 de datatble search*/

$(".remove-filter").click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});
$(".action_head").click(function () {
  console.log($(".action").filter(":checked").length);
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("#grid tbody").on("click", "tr", function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    table.$("tr.selected").removeClass("selected");
    $(this).addClass("selected");
  }
});
$("#_edit").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_edit", {
      id: id
    });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandedet_insert", {
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
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
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
$(".edit").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_update", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      $(".errors-list").remove();
      if (result.errors) {
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".form #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.data) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
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
$("#_show").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_show", {
      id: id
    });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#_delete_demmande").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var obj = {
    route: "uv_commandecab_delete",
    redirection: "uv_commandecab_index",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_24__["deleteCab"])(obj);
  e.preventDefault();
});
$("#_statut").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_statut", {
        id: id
      }),
      success: function success(result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$(".actions").on("click", ".close-me", function (e) {
  //$('.close-me').click(function (e){
  $(".actions").removeClass("sidebar-open");
  e.preventDefault();
});
$(".actions").on("submit", ".form_statut", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_statut", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          $(".errors-list").remove();
          jQuery.each(result.errors.violations, function (i, val) {
            var column = val.propertyPath;
            var columnName = column.split(".");
            // console.log(columnName[1]);
            $(".form_statut #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
          });
        } else if (result.code == 200) {
          table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          $(".actions").empty().removeClass("sidebar-open");
          // location.reload();
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
  e.preventDefault();
});
$("#_generer").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_generer", {
        id: id
      }),
      success: function success(result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$(".actions").on("submit", ".form_generer", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_generer", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          $(".errors_list").html("");
          jQuery.each(result.errors.violations, function (i, val) {
            //                        var column = val.propertyPath;
            //                        var columnName = column.split(/[[],]/);
            //
            //                        console.log(columnName);
            var x = val.propertyPath;
            var separators = ["\\]", "\\["];
            var arr = x.split(new RegExp(separators.join("|")));
            var columnName = arr[1];
            $(".errors_list").append("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>");
          });

          //                    console.log(result.errors);
          //                    $('.errors-list').remove();
          //                    jQuery.each(result.errors.violations, function (i, val) {
          //                        var column = val.propertyPath;
          //                        var columnName = column.split('.');
          //                        // console.log(columnName[1]);
          //                        $(".form_generer #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
          //                    });
        } else if (result.code == 200) {
          table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          $(".actions").empty().removeClass("sidebar-open");
          // location.reload();
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
  e.preventDefault();
});
$("#_archiver").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
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
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_archive", {
            id: id
          }),
          success: function success(result) {
            if (result.code == 200) {
              table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              $(".actions").empty().removeClass("sidebar-open");
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
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#_commande").click(function (e) {
  var id = $("#test").data("commandeId");
  // var id = table.row('.selected').id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_commande", {
        id: id
      }),
      success: function success(result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$(".new").on("submit", ".form_commande", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  // var id = table.row('.selected').id();
  var id = $("#test").data("commandeId");
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.querySelector(".my-button2"));
  l.start();
  //    alert(id);
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_commande", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
        l.stop();
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
        } else if (result.code == 200) {
          // table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          $(".actions").empty().removeClass("sidebar-open");
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
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#_imprimer").click(function (e) {
  //  var id = table.row('.selected').id();
  var id = $("#test").data("commandeId");
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_pdf", {
      id: id
    });
    //   window.location.href = url;
    window.open(url, "_blank");
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandedet_delete", {
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
$(".edit").on("submit", ".detail_form", function (e) {
  //alert();
  var dta = new FormData(this);
  console.log(dta);
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandedet_update_detail", {
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
$("#_charges").click(function (e) {
  // var id = table.row('.selected').id();
  var id = $("#test").data("commandeId");
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_charges", {
      id: id
    });
    window.location.href = url;
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$(".charge").on("submit", ".charge_save", function (e) {
  // alert();
  var dta = new FormData(this);

  // console.log(dta);
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.querySelector(".my-button2"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_charges", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 200) {
        table.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //$(".actions").empty().removeClass('sidebar-open');
        location.reload();
      }
    }
  });
  e.preventDefault();
});
$(".charge_form_delete").submit(function (e) {
  //alert();
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_chargecommande_delete", {
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
$("body").on("submit", "._fichiers", function (e) {
  //  alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  var id = dta.get("_id");
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_fichiers", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_fichiers_delete", {
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
    toastr.warning("Impossible d'effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("body").on("click", ".uv_commande_apply_transitions", function (e) {
  //alert();
  /*var form_name = $(this).attr('name');
    var dta = new FormData(this);
    var id = dta.get('_id');
    var title = dta.get('title');*/

  var dta = new FormData();
  var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");
  dta.append("id", id);
  dta.append("title", title);
  dta.append("transition", transition);
  if (transition == 'apres_valider_livrer') {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_livraison_show", {
        id: id
      }),
      success: function success(result) {
        $("#livraisonPopUp .bod").html(result);
        $('.sel2').select2();
        $("#livraisonPopUp").modal("show");
        var table2 = $(".grid-reception").DataTable({
          deferRender: true,
          searching: false,
          paging: false,
          info: false,
          // scrollX: true,
          columns: [{
            width: "5%",
            orderable: true,
            searchable: true,
            targets: [0]
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "15%",
            orderable: true
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "5%",
            orderable: true
          }, {
            width: "5%",
            orderable: true /*, visible: true*/
          }, {
            width: "5%",
            orderable: false /*, visible: true*/
          }],

          dom: 'f<"html5buttons btn-group"B>lTgtip',
          buttons: ["columnsToggle", {
            text: "Restaurer",
            className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
            action: function action(e, dt, node, config) {
              table2.state.clear();
              window.location.reload();
            }
          }],
          language: {
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("datatables_langue"),
            processing: true
          }
          // fixedHeader: true,
        });

        generer();
      }
    });
  } else if (transition == 'apres_creer_valider') {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_type_show", {
        id: id
      }),
      success: function success(result) {
        $("#typePopUp .bod2").html(result);
        $('.sel2').select2();
        $("#typePopUp").modal("show");
      }
    });
  } else {
    if (id) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "Confirmation ?",
        text: "Voulez vous vraiment passer a l'etat '" + title + "' pour cet enregistrement ?",
        type: "warning",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "<i class='fa fa-check'></i> Oui !",
        cancelButtonText: "<i class='fa fa-times'></i> Non !"
      }).then(function (result) {
        if (result.value) {
          $.ajax({
            type: "POST",
            data: dta,
            processData: false,
            contentType: false,
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_apply_transitions", {
              id: id
            }),
            success: function success(result) {
              if (result.code == 200) {
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                location.reload();
              }
              if (result.code == 201) {
                // alert(result.valider);
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                location.reload();
              }
              if (result.code == 202) {
                // alert(result.valider);
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                location.reload();
              }
              if (result.code == 403) {
                toastr.warning(result.message.text, result.message.title, {
                  timeOut: 4000
                });
              }
              if (result.code == 404) {
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
      toastr.warning("Commande non renseigne ", "warning", {
        timeOut: 4000
      });
    }
  }
  e.preventDefault();
});
$(".bod2").on("submit", ".form_type", function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.activeElement);
  l.start();
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_type_show", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $(".errors-list").remove();
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
        /* jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
      } else if (result.code == 200) {
        l.stop();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      } else if (result.code == 404) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
    }
  });
  e.preventDefault();
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_show", {
    id: $(this).closest("tr").attr("id")
  });
  window.location.href = url;
});
$(".wizard-big").steps({
  bodyTag: "fieldset",
  onStepChanging: function onStepChanging(event, currentIndex, newIndex) {
    // Always allow going backward even if the current step contains invalid fields!
    if (currentIndex > newIndex) {
      return true;
    }

    // Forbid suppressing "Warning" step if the user is to young
    if (newIndex === 3 && Number($("#age").val()) < 18) {
      return false;
    }
    var form = $(this);

    // Clean up if user went backward before
    if (currentIndex < newIndex) {
      // To remove error styles
      $(".body:eq(" + newIndex + ") label.error", form).remove();
      $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
    }

    // Disable validation on fields that are disabled or hidden.
    form.validate().settings.ignore = ":disabled,:hidden";

    // Start validation; Prevent going forward if false
    return form.valid();
  },
  onStepChanged: function onStepChanged(event, currentIndex, priorIndex) {
    // Suppress (skip) "Warning" step if the user is old enough.
    if (currentIndex === 2 && Number($("#age").val()) >= 18) {
      $(this).steps("next");
    }

    // Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
    if (currentIndex === 2 && priorIndex === 3) {
      $(this).steps("previous");
    }
  },
  onFinishing: function onFinishing(event, currentIndex) {
    var form = $(this);

    // Disable validation on fields that are disabled.
    // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
    form.validate().settings.ignore = ":disabled";

    // Start validation; Prevent form submission if false
    return form.valid();
  },
  onFinished: function onFinished(event, currentIndex) {
    var form = $(this);

    // Submit form input
    form.submit();
  }
}).validate({
  errorPlacement: function errorPlacement(error, element) {
    element.before(error);
  },
  rules: {
    confirm: {
      equalTo: "#password"
    }
  }
});
var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false
});
var tableShow = $("#datatable-show").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  columns: [{
    width: "5%"
  }, {
    width: "10%"
  }, {
    width: "35%"
  }, {
    width: "20%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }, {
    width: "5%"
  }],
  footerCallback: function footerCallback(row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
    };

    // Total over all pages
    total = api.column(7).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(7, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(1).footer()).html("Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});

//var tableShow3 = $("#datatable-show3").DataTable({ paging: false });

var tableShow3 = $(".datatable-show3").DataTable({
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  deferRender: true,
  pageLength: 15,
  scrollX: true,
  columns: [{
    width: "5%",
    orderable: true,
    searchable: true,
    targets: [0]
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "10%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true
  }, {
    width: "5%",
    orderable: true /*, visible: true*/
  }],

  paging: false,
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ["columnsToggle", {
    text: "Restaurer",
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table2.state.clear();
      window.location.reload();
    }
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});

var tableShow4 = $(".datatable-show4").DataTable({
  paging: false
});
var tableShow = $("#datatable-show9").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false,
  footerCallback: function footerCallback(row, data, start, end, display) {
    var api = this.api(),
      data;
    var total, pageTotal;
    // Remove the formatting to get integer data for summation
    var intVal = function intVal(i) {
      return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
    };

    // Total over all pages
    total = api.column(5).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(5, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(1).footer()).html("Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});
$(document).ready(function () {
  $(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
  create_custom_dropdowns($(".articles"), "");
});
"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function () {
  $.fn.dataTable.Api.register("column().title()", function () {
    return $(this.header()).text().trim();
  });
  return {
    init: function init() {
      var t;
      t = $("#kt_table_1").DataTable({
        ajax: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("t_achatdemandeinternecab_find_article_table"),
          // json datasource
          type: "get",
          "data": {
            "vente": true
          },
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
        pageLength: 25,
        dom: 'f<"html5buttons btn-group"B>lTgtip',
        columns: [{
          orderable: true,
          name: 'art.id',
          width: "5%"
        }, {
          orderable: true,
          name: 'art.code'
        }, {
          orderable: true,
          name: 'art.titre'
        }, {
          orderable: true,
          name: 'tab.abreviation'
        }, {
          orderable: true,
          name: 'n1.designation'
        }, {
          orderable: true,
          name: 'n2.designation'
        }, {
          orderable: true,
          name: 'n3.designation'
        }, {
          orderable: true,
          name: 'n4.designation'
        }],
        'createdRow': function createdRow(row, data, dataIndex) {
          console.log(data);
          $(row).attr('text', data[2]);
          $(row).attr('pu', data[8]);
          $(row).attr('tva', data[9]);
          $(row).attr('unite', data[10]);
        },
        buttons: ["columnsToggle", {
          text: "Restaurer",
          className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
          action: function action(e, dt, node, config) {
            table.state.clear();
            window.location.reload();
          }
        }],
        language: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("datatables_langue"),
          processing: true
        },
        // fixedHeader: true,
        bInfo: false
      }), t.on("init.dt", function (e, settings) {
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

        _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_23__["CustomSearchText"](api, [0, 1, 3, 2, 4, 5, 6, 7], []);
      });
    }
  };
}();
$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
  sNext: '<i class="fa fa-chevron-right" ></i>',
  sPrevious: '<i class="fa fa-chevron-left" ></i>'
});
$(".modalActivate").click(function () {
  $(".bod").empty();
  $(".spr").fadeIn();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("t_achatdemandeinternecab_find_article"),
    processData: false,
    contentType: false,
    success: function success(result, textStatus, errorThrown) {
      $(".bod").html(result).hide();
      KTDatatablesSearchOptionsAdvancedSearch.init();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
});
var code = null;
$("body").on("click", "#kt_table_1 tbody tr", function () {
  //alert($(this).parent().parent().attr("unite"))
  code = $(this).attr("code");
  if (window.element.find("option[value='" + $(this).attr("id") + "']").length) {
    window.element.val($(this).attr("id")).trigger("change");
    $(".prixunitaire").val($(this).attr("pu"));
    $(".tva").val($(this).attr("tva"));
    $(".remise").val($(this).attr("remise"));
    $(".select2_unite").val($(this).attr("unite")).trigger("change");
    $("#exampleModalPreview").modal("hide");
  } else {
    // Create a DOM Option and pre-select by default
    var newOption = new Option($(this).attr("text"), $(this).attr("id"), true, true);
    // Append it to the select
    window.element.append(newOption).trigger("change");
    $(".prixunitaire").val($(this).attr("pu"));
    $(".tva").val($(this).attr("tva"));
    $(".select2_unite").val($(this).attr("unite")).trigger("change");
    $(".remise").val($(this).attr("remise"));
    $("#exampleModalPreview").modal("hide");
  }
});
function getSubSelect(myclass, myboolean, mycontent) {
  //console.log(mycontent)
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
$(".type_commande").on("change", function (e) {
  if ($(this).attr("data-type") == "PRJ" || $(this).val() == 5) {
    $(".pr").toggleClass("none");
  } else {
    $(".pr").addClass("none");
  }
});
$(".form").on("change", ".type_commande", function (e) {
  var type = $("option:selected", this).attr("data-type");

  // console.log(type);

  $(".bloc_choix").css("display", "none");
  if (type == "CMD") {
    $(".bloc_reference_devis_client").css("display", "block");
  } else if (type == "MR") {
    $(".bloc_marche").css("display", "block");
  } else if (type == "PRJ") {
    $(".bloc_projet").css("display", "block");
  }
});
$(".new , .edit").on("change", ".marches", function (e) {
  var $form = $(this).closest("form");
  getSubSelect(".sousmarche", false, "");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  //  console.log(data);
  //alert($form.attr('action'));
  //  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function success(html) {
      //console.log(html);
      getSubSelect(".sousmarche", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    }
  });

  e.preventDefault();
});
$(".new , .edit").on("change", ".projet", function (e) {
  var $form = $(this).closest("form");
  getSubSelect(".sousprojet", false, "");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();

  //  console.log(data);
  //alert($form.attr('action'));
  //  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function success(html) {
      //console.log(html);
      getSubSelect(".sousprojet", true, html);
      $(".sel2").select2();
      //$('.sousmarche').parent().find('.select2 .select2-selection__arrow b').not(':first').hide();
    }
  });

  e.preventDefault();
});
$("body").on("change", "._multiple_actions", function () {
  //alert()

  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });

  // $("body > ._multiple_actions option[value='']").attr('selected', 'selected');

  console.log($(this).val());
  if ($(this).val() == "_desactiver_commande") {
    //alert()
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande__desactiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            if (result.errors) {
              Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.data) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              location.reload();
            }
          }
        });
        $("._multiple_actions").val("");
      }
    });
  }
});

/*****pour ajout d'article */

var array_detail = [];
var errors_details = [];
var formDataDetail = [];
var nameDetail = "";
var editColumn = null;
var editArticleColumn = null;
document.addEventListener("DOMContentLoaded", function () {
  errors_details = jQuery.parseJSON($(".errors_details").attr("errors"));
  nameDetail = $(".errors_details").attr("name");
  $(".errors_details").remove();

  // or with jQuery
  //var isAuthenticated = $('.js-user-rating').data('isAuthenticated');
});

function getHt(row) {
  return row.quantite * row.prixunitaire;
}
function getTva(row) {
  var prixTva = getHt(row) * row.tva / 100;
  prixTva = prixTva - prixTva * row.remise / 100;
  return prixTva;
}
function getRemise(row) {
  return getHt(row) * row.remise / 100;
}
function getPrixTTc(row) {
  return row.prixttc = getHt(row) + getTva(row) - getRemise(row);
}
$(".new").on("click", ".detail_form", function (e) {
  //alert();

  $('.error-class-tab').remove();
  var flag = 0;
  for (var index = 0; index < formDataDetail.length; index++) {
    if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id && editArticleColumn != formDataDetail[index].articleId) {
      return $('#' + nameDetail + '_article').parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>");
    }
  }
  for (var _index = 0; _index < errors_details.length; _index++) {
    var name = nameDetail + '[' + errors_details[_index].property + ']';
    var value = $('[name="' + nameDetail + '[' + errors_details[_index].property + ']' + '"]').val();
    if (errors_details[_index].cause == null && value == '') {
      flag = 1;
      $('[name="' + name + '"]').parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[_index].message + "</span></span></span>");
    }
  }
  if (flag == 1) {
    return false;
  }
  var row = {
    quantite: $('#' + nameDetail + '_quantite').val(),
    prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
    tva: $('#' + nameDetail + '_tva').val(),
    remise: $('#' + nameDetail + '_remise').val()
  };
  if (editColumn != null) {
    formDataDetail[editColumn] = {
      articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
      titre: $('#' + nameDetail + '_article').select2('data')[0].text,
      code: $('#' + nameDetail + '_article').select2('data')[0].code ? $('#' + nameDetail + '_article').select2('data')[0].code : code,
      unite: $('#' + nameDetail + '_unite').select2('data')[0].text,
      uniteId: $('#' + nameDetail + '_unite').select2('data')[0].id,
      quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
      prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
      tva: parseFloat($('#' + nameDetail + '_tva').val()),
      remise: parseFloat($('#' + nameDetail + '_remise').val()),
      observation: $('#' + nameDetail + '_observation').val(),
      montantRemise: getRemise(row),
      prixttc: getPrixTTc(row)
    };
  } else {
    formDataDetail.push({
      articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
      titre: $('#' + nameDetail + '_article').select2('data')[0].text,
      code: $('#' + nameDetail + '_article').select2('data')[0].code ? $('#' + nameDetail + '_article').select2('data')[0].code : code,
      unite: $('#' + nameDetail + '_unite').select2('data')[0].text,
      uniteId: $('#' + nameDetail + '_unite').select2('data')[0].id,
      quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
      prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
      tva: parseFloat($('#' + nameDetail + '_tva').val()),
      remise: parseFloat($('#' + nameDetail + '_remise').val()),
      observation: $('#' + nameDetail + '_observation').val(),
      montantRemise: getRemise(row),
      prixttc: getPrixTTc(row)
    });
  }
  var lineNo = 1;
  var cl = "";
  $(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
  create_custom_dropdowns($(".articles"), "");
  $(".table-detail + table ").removeClass('remove');
  $('.table-detail tbody').html('');
  $.each(formDataDetail, function (i, value) {
    if (lineNo % 2 == 0) {
      cl = "impair";
    } else {
      cl = "pair";
    }
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation != "") {
      observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
    }
    //categorie
    var my_row = " <tr class=" + cl + "><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + remise + "</td><td>" + value.montantRemise.toFixed(2) + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" + i + "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
    $(".new .table-detail > tbody").append(my_row);
    lineNo++;
  });
  $("#create_commande").removeClass("disabled");
  $('.det_for input,.det_for select,.det_for textarea').val(null).trigger('change');
  editColumn = null;
  editArticleColumn = null;

  //toastr.warning("Cet article existe deja ", "warning ", {timeOut: 4000});

  e.preventDefault();
});
$(".new").on("click", ".edit_element", function (e) {
  editColumn = $(this).attr('id');
  editArticleColumn = formDataDetail[$(this).attr('id')]['articleId'];
  var cl = "";
  var lineNo = 1;
  $('.table-detail tbody').html('');
  $.each(formDataDetail, function (i, value) {
    if (lineNo % 2 == 0) {
      cl = "impair";
    } else {
      cl = "pair";
    }
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation != "") {
      observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
    }
    //categorie
    var my_row = " <tr class=" + cl + "><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + remise + "</td><td>" + value.montantRemise.toFixed(2) + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" + i + "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
    $(".new .table-detail > tbody").append(my_row);
    lineNo++;
  });
  var id = $(this).attr('id');
  var row_index = $(this).attr('id');
  var col_index = $(this).index();
  $.ajax({
    type: "POST",
    data: {
      detail: formDataDetail[$(this).attr('id')]
    },
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_edit_detail_new", {
      id: id
    }),
    success: function success(result) {
      // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
      $(".table-detail > tbody  > tr").eq(row_index).addClass("table-tr-style").html("<td colspan='10'>" + result + "</td>");
      $($(".table-detail > tbody  > tr").eq(row_index)).find(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
      create_custom_dropdowns($($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"), $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles").attr("if-selected"));
      //$(".load-er").fadeOut().remove();
      // $('.det_for').fadeIn(200)
      $(".bod").empty();
      $(".spr").fadeIn();
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("t_achatdemandeinternecab_find_article"),
        processData: false,
        contentType: false,
        success: function success(result, textStatus, errorThrown) {
          $(".bod").html(result).hide();
          KTDatatablesSearchOptionsAdvancedSearch.init();
          setTimeout(function () {
            $(".spr").hide();
            $(".bod").fadeIn();
          }, 600);
        }
      });
      $(".table-detail + table ").addClass('remove');
      return true;
      //    alert(row_index);
      //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
      //            console.log(result)
    }
  });

  e.preventDefault();
});
$(".new").on("click", ".delete_element", function (e) {
  var lineNo = 1;
  var cl = "";
  formDataDetail.splice($(this).attr("id"), 1);
  $(".new .table-detail > tbody tr").remove();
  if (formDataDetail.length < 1) {
    $("#create_commande").last().addClass("disabled");
  }
  $.each(formDataDetail, function (i, value) {
    if (lineNo % 2 == 0) {
      cl = "impair";
    } else {
      cl = "pair";
    }
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation != "") {
      observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
    }
    var my_row = " <tr class=" + cl + "><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + remise + "</td><td>" + value.montantRemise.toFixed(2) + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a></td></tr>" + observation;
    $(".new .table-detail>tbody").append(my_row);
    lineNo++;
  });
});
$(".edit").on("click", ".detail_form", function (e) {
  $(".error-class-tab").remove();
  var id = $("#_id").val();
  var flag = 0;
  for (var index = 0; index < formDataDetail.length; index++) {
    if (formDataDetail[index].articleId == $("#" + nameDetail + "_article").select2("data")[0].id) {
      return $("#" + nameDetail + "_article").parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>");
    }
  }
  if ($('.edit-detail[article="' + $("#" + nameDetail + "_article").select2("data")[0].id + '"]').attr("article") == $("#" + nameDetail + "_article").select2("data")[0].id && $(this).parents(".edit-detail").attr("article") != $("#" + nameDetail + "_article").select2("data")[0].id) {
    return $("#" + nameDetail + "_article").parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>");
  }
  for (var _index2 = 0; _index2 < errors_details.length; _index2++) {
    var name = nameDetail + "[" + errors_details[_index2].property + "]";
    var value = $('[name="' + nameDetail + "[" + errors_details[_index2].property + "]" + '"]').val();
    if (errors_details[_index2].cause == null && value == "") {
      flag = 1;
      $('[name="' + name + '"]').parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[_index2].message + "</span></span></span>");
    }
  }
  if (flag == 1) {
    return false;
  }
  var row = {
    quantite: $("#" + nameDetail + "_quantite").val(),
    prixunitaire: parseFloat($("#" + nameDetail + "_prixunitaire").val()),
    tva: $("#" + nameDetail + "_tva").val(),
    remise: $("#" + nameDetail + "_remise").val()
  };
  formDataDetail = [];
  formDataDetail.push({
    id: $(this).parents(".edit-detail").attr("id"),
    articleId: $("#" + nameDetail + "_article").select2("data")[0].id,
    titre: $("#" + nameDetail + "_article").select2("data")[0].text,
    code: $("#" + nameDetail + "_article").select2("data")[0].code,
    unite: $("#" + nameDetail + "_unite").select2("data")[0].text,
    uniteId: $("#" + nameDetail + "_unite").select2("data")[0].id,
    quantite: parseFloat($("#" + nameDetail + "_quantite").val()),
    prixunitaire: parseFloat($("#" + nameDetail + "_prixunitaire").val()),
    tva: parseFloat($("#" + nameDetail + "_tva").val()),
    remise: parseFloat($("#" + nameDetail + "_remise").val()),
    observation: $("#" + nameDetail + "_observation").val(),
    montantRemise: getRemise(row),
    prixttc: getPrixTTc(row)
  });
  var formData = new FormData();
  var data = JSON.stringify(formDataDetail);
  formData.append("detail", data);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandedet_insert", {
      id: id
    }),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      //  console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
        /*  $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".detail_form_edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
      } else if (result.data) {
        //l.stop();
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

  //toastr.warning("Cet article existe deja ", "warning ", {timeOut: 4000});

  e.preventDefault();
});
$(".edit").on("click", ".delete_element", function (e) {
  formDataDetail.splice($(this).attr("id"), 1);
  $(".edit .table-detail tbody tr:not(.edit-detail)").remove();
  $.each(formDataDetail, function (i, value) {
    if (lineNo % 2 == 0) {
      cl = "impair";
    } else {
      cl = "pair";
    }
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
    if (value.tva == null) {
      tva = "-";
    }
    if (value.observation != "") {
      observation = "<tr class=" + cl + "><td></td><td colspan='9'><b>Informations complementaires : </b>" + observation + "</td></tr>";
    }
    var my_row = " <tr><td>" + "</td><td>" + value.code + " - " + value.titre + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire.toFixed(2) + "</td><td>" + tva + "</td><td>" + remise + "</td><td>" + value.montantRemise.toFixed(2) + "</td><td>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a></td></tr>" + observation;
    $(".edit .table-detail tbody").append(my_row);
  });
});
var formDataDetailEditRemove = [];
$(".edit").on("click", ".detail_form_delete", function (e) {
  var id = $(this).attr("id");
  var token = $(this).attr("value");
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandedet_delete", {
          id: id,
          token: token
        }),
        data: {},
        processData: false,
        contentType: false,
        success: function success(result) {
          //   console.log(result);
          if (result.data == "deleted") {
            $('.edit-detail[id="' + $(this).attr("id") + '"]').remove();
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
  //formDataDetailEditRemove.push({id: $(this).attr('id'),token:$(this).attr('value')});

  //console.log(formDataDetailEditRemove);
});

$(".edit").on("click", ".detail_edit", function (e) {
  e.preventDefault();
  var id = $(this).attr("id");
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandedet_edit_detail", {
      id: id
    }),
    success: function success(result) {
      // $('.table-detail tr').eq(row_index+1).addClass('table-tr-style');
      $(".table-detail > tbody  > tr").eq(row_index).addClass("table-tr-style").html("<td colspan='10'>" + result + "</td>");
      $($(".table-detail > tbody  > tr").eq(row_index)).find(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
      create_custom_dropdowns($($(".table-detail > tbody  > tr").eq(row_index)).find(".articles"), $($(".table-detail > tbody  > tr").eq(row_index)).find(".articles").attr("if-selected"));
      //$(".load-er").fadeOut().remove();
      // $('.det_for').fadeIn(200)
      $(".bod").empty();
      $(".spr").fadeIn();
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("t_achatdemandeinternecab_find_article"),
        processData: false,
        contentType: false,
        success: function success(result, textStatus, errorThrown) {
          $(".bod").html(result).hide();
          KTDatatablesSearchOptionsAdvancedSearch.init();
          setTimeout(function () {
            $(".spr").hide();
            $(".bod").fadeIn();
          }, 600);
        }
      });
      return true;
      //    alert(row_index);
      //            var slh = selector.parent().parent().empty().append("<td style='display: none;'>" + result + "</td>");
      //            console.log(result)
    }
  });
});
/**** */

$("#create_commande").click(function (e) {
  var form_name = $(".form").attr("name");
  $("#create_commande").addClass("disabled");

  //var params = $('.form').serializeArray();
  // var dta = new FormData($("#t_achatdemandeinternecab")[0]);

  var formData = new FormData();
  var params = $('.form').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
    //  console.log(val.name);
  });

  var data = JSON.stringify(formDataDetail);
  formData.append('detail', data);
  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_insert"),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      // l.stop();
      $(".errors-list").remove();
      if (result.customErrors) {
        $.each(result.customErrors, function (i, value) {
          $(".form #" + i).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + value + "</span></span></span>");
        });
        $("#create_commande").removeClass("disabled");
        // $('#'+)
      } else if (result.errors) {
        //dump(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
        $("#create_commande").removeClass("disabled");
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $("#create_commande").removeClass("disabled");
      } else if (result.data) {
        // alert(result.data.id);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_show", {
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
      $("#create_commande").removeClass("disabled");
    }
  });
  e.preventDefault();
});
$(".new-article-btn").click(function (e) {
  $(".remove-item-edit-add").removeClass('remove-item-edit-add');
  $(this).hide();
  e.preventDefault();
});
function generer() {
  $("._generer_form").submit(function (e) {
    var dta = new FormData(this);
    var id = $("input[name=_id]").val();

    //alert();
    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.querySelector(".my-button2"));

    // Start loading
    l.start();
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_generer_insert", {
        id: id,
        type: "ff"
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
        if (result.errors) {
          console.log(result.errors);
          $.each(result.errors, function (key, value) {
            toastrWidtoutProgress.warning(value, "warning");
          });
          l.stop();
        } else if (result.code == 200) {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          l.stop();
          $("#MyModal").modal("hide");
          location.reload();
        } else if (result.empty) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        }
        if (result.notvalide) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        }
        if (result.code == 404) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
          l.stop();
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
}
$("body").on('click', '._delete_demmande', function (e) {
  var id = $(this).attr("data-id");
  var token = "s";
  var obj = {
    route: "uv_commandecab_delete2",
    redirection: "uv_commandecab_show",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_24__["deleteCab"])(obj);
  e.preventDefault();
});
$("body").on("click", "._desactiver_commande", function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  //alert(_array_ids);
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande__desactiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              table.ajax.reload();
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
  }
});
$("#_desactiver_commande").click(function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  //alert(_array_ids);
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande__desactiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              //   table.ajax.reload();
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
  }
});
$('body').on('click', '.pdf_by_code', function (e) {
  window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commandecab_old_sys", {
    id: $(this).attr('data-id')
  }), '_blank');
});
$(".ajout").click(function (e) {
  // alert();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_fichiers", {
      id: $(this).closest("a").attr("id")
    }),
    success: function success(result) {
      $(".bod1").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique").modal("show");
      $("select.select2").select2();
      setTimeout(function () {
        $(".spr1").hide();
        $(".bod1").fadeIn();
      }, 600);
    }
  });
});
$("body").on("submit", "._upload", function (e) {
  //   alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get("_id");
  var l = ladda__WEBPACK_IMPORTED_MODULE_22__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate("uv_commande_fichiers", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_21__["ShowFormErrors"])(selector, form_name, result.errors);
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
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
  e.preventDefault();
});
$('body').on('change', '.list_actions', function () {
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });
  if ($(this).val() == '_fusionnement' && _array_ids != null) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment fusionner ces enregistrements ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Non !"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_20___default.a.generate('uvcommande_generer_fusionnement'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              table.ajax.reload();
            }
          }
        });
      }
    });
  }
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/components/module_vente/commande.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265","vendors~erpclient~uventecommande~uventedevis",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e","erpclient~uventecommande~uventedevis"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfdmVudGUvY29tbWFuZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducyIsImVsZW1lbnQiLCJhdHQiLCIkIiwiZm4iLCJzZWxlY3QyIiwiYW1kIiwiZGVmaW5lIiwiZXJyb3JMb2FkaW5nIiwiaW5wdXRUb29Mb25nIiwiYXJncyIsIm92ZXJDaGFycyIsImlucHV0IiwibGVuZ3RoIiwibWF4aW11bSIsIm1lc3NhZ2UiLCJpbnB1dFRvb1Nob3J0IiwicmVtYWluaW5nQ2hhcnMiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJ3aW5kb3ciLCJhdHRyIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJnZW5lcmF0ZSIsInNlbGVjdGVkIiwiZW50aXR5IiwiY29sdW1uIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJlcGVuZCIsImxhbmd1YWdlIiwicmVzdWx0cyIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiZHJvcGRvd25Dc3NDbGFzcyIsInZhbCIsInRyaWdnZXIiLCJmYWRlT3V0IiwicmVtb3ZlIiwiZmFkZUluIiwib24iLCJlIiwiYWZ0ZXIiLCJ0eXBlV2F0Y2giLCJoaWdobGlnaHQiLCJ3YWl0IiwiY2FwdHVyZUxlbmd0aCIsImNhbGxiYWNrIiwidmFsdWVubm4iLCJoaWRlIiwic2VhcmNoIiwiZGF0YVR5cGUiLCJ0ZXJtIiwic3VjY2VzcyIsInJlc3VsdCIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImVtcHR5IiwiZm9jdXMiLCJ0b2FzdHIiLCJ3YXJuaW5nIiwidGltZU91dCIsInBhcmFtcyIsInByaXhBY2hhdCIsInR2YSIsInJlbWlzZSIsInVuaXRlIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJwbGFjZWhvbGRlciIsImFsbG93Q2xlYXIiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3RhcnQiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3RvcCIsImVycm9ycyIsIlNob3dGb3JtRXJyb3JzIiwidGV4dCIsInRpdGxlIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImpxWEhSIiwicHJldmVudERlZmF1bHQiLCJhcnJheV9kZXRhaWwiLCJleHNpdCIsImVhY2giLCJpIiwidmFsdWUiLCJyZXNldCIsImxpbmVObyIsInB1c2giLCJvYnNlcnZhdGlvbiIsIm15X3JvdyIsImNvZGUiLCJ0aXRyZSIsInF1YW50aXRlIiwicHJpeHVuaXRhaXJlIiwidG9GaXhlZCIsIm1vbnRhbnRSZW1pc2UiLCJwcml4dHRjIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNwbGljZSIsImNsaWNrIiwic2hvdyIsIiRmb3JtIiwiY2xvc2VzdCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsImZpbmQiLCJwYXJlbnQiLCJub3QiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImRlZmVyUmVuZGVyIiwic2VydmVyU2lkZSIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwidGFyZ2V0cyIsIm5hbWUiLCJjbGFzc05hbWUiLCJ2aXNpYmxlIiwiY29sdW1uRGVmcyIsInJlbmRlciIsInQiLCJhIiwicyIsImZvckVhY2giLCJsaW5rIiwiX3JvdXRlX2xpbmsiLCJpZENzIiwiaWNvbiIsImRvbSIsImJ1dHRvbnMiLCJhY3Rpb24iLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwicmVsb2FkIiwicHJvY2Vzc2luZyIsInNldHRpbmdzIiwiYXBpIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJmaWx0ZXIiLCJwcm9wIiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicm93IiwiZ2V0IiwialF1ZXJ5IiwidmlvbGF0aW9ucyIsInByb3BlcnR5UGF0aCIsImNvbHVtbk5hbWUiLCJzcGxpdCIsInRva2VuIiwib2JqIiwicm91dGUiLCJyZWRpcmVjdGlvbiIsImRlbGV0ZUNhYiIsInRvZ2dsZUNsYXNzIiwieCIsInNlcGFyYXRvcnMiLCJhcnIiLCJSZWdFeHAiLCJqb2luIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwicmVzcG9uc2VKU09OIiwicXVlcnlTZWxlY3RvciIsIm9wZW4iLCJzdWJtaXQiLCJ0cmFuc2l0aW9uIiwibW9kYWwiLCJ0YWJsZTIiLCJwYWdpbmciLCJpbmZvIiwiZ2VuZXJlciIsInN0ZXBzIiwiYm9keVRhZyIsIm9uU3RlcENoYW5naW5nIiwiZXZlbnQiLCJjdXJyZW50SW5kZXgiLCJuZXdJbmRleCIsIk51bWJlciIsImZvcm0iLCJ2YWxpZGF0ZSIsImlnbm9yZSIsInZhbGlkIiwib25TdGVwQ2hhbmdlZCIsInByaW9ySW5kZXgiLCJvbkZpbmlzaGluZyIsIm9uRmluaXNoZWQiLCJlcnJvclBsYWNlbWVudCIsImJlZm9yZSIsInJ1bGVzIiwiY29uZmlybSIsImVxdWFsVG8iLCJ0YWJsZVNob3ciLCJzY3JvbGxZIiwic2Nyb2xsQ29sbGFwc2UiLCJhdXRvV2lkdGgiLCJmb290ZXJDYWxsYmFjayIsImVuZCIsImRpc3BsYXkiLCJ0b3RhbCIsInBhZ2VUb3RhbCIsImludFZhbCIsInJlcGxhY2UiLCJyZWR1Y2UiLCJiIiwicGFnZSIsImZvb3RlciIsIk1hdGgiLCJyb3VuZCIsInRhYmxlU2hvdzMiLCJzY3JvbGxYIiwidGFibGVTaG93NCIsInJlYWR5IiwiS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoIiwicmVnaXN0ZXIiLCJoZWFkZXIiLCJ0cmltIiwiaW5pdCIsImJlZm9yZVNlbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImFib3J0IiwiZGF0YUluZGV4IiwiYkluZm8iLCJleHRlbmQiLCJkZWZhdWx0cyIsIm9MYW5ndWFnZSIsIm9QYWdpbmF0ZSIsInNOZXh0Iiwic1ByZXZpb3VzIiwic2V0VGltZW91dCIsIm5ld09wdGlvbiIsIk9wdGlvbiIsImdldFN1YlNlbGVjdCIsIm15Y2xhc3MiLCJteWJvb2xlYW4iLCJteWNvbnRlbnQiLCJhcnJheSIsImNzcyIsIl9hcnJheV9pZHMiLCJlcnJvcnNfZGV0YWlscyIsImZvcm1EYXRhRGV0YWlsIiwibmFtZURldGFpbCIsImVkaXRDb2x1bW4iLCJlZGl0QXJ0aWNsZUNvbHVtbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJzZUpTT04iLCJnZXRIdCIsImdldFR2YSIsInByaXhUdmEiLCJnZXRSZW1pc2UiLCJnZXRQcml4VFRjIiwiZmxhZyIsImluZGV4IiwiYXJ0aWNsZUlkIiwicHJvcGVydHkiLCJjYXVzZSIsInBhcnNlRmxvYXQiLCJ1bml0ZUlkIiwiY2wiLCJyb3dfaW5kZXgiLCJjb2xfaW5kZXgiLCJkZXRhaWwiLCJlcSIsImxhc3QiLCJwYXJlbnRzIiwiZm9ybURhdGEiLCJmb3JtRGF0YURldGFpbEVkaXRSZW1vdmUiLCJzZXJpYWxpemVBcnJheSIsImN1c3RvbUVycm9ycyIsImtleSIsInRvYXN0cldpZHRvdXRQcm9ncmVzcyIsIm5vdHZhbGlkZSIsInNlbGVjdDJfZG9zc2llcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxtSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUM5QjtBQUNBQyxtQkFBTyxDQUFDLHdHQUFzRCxDQUFDO0FBQy9EQSxtQkFBTyxDQUFDLDhGQUF5QyxDQUFDO0FBQ2xEQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDbkM7QUFFdEQsU0FBU0csdUJBQXVCLENBQUNDLE9BQU8sRUFBRUMsR0FBRyxFQUFFO0VBQzNDQyxDQUFDLENBQUNDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsWUFBVztJQUN0RDtJQUNBLE9BQU87TUFDSEMsWUFBWSxFQUFFLHdCQUFXO1FBQ3JCLE9BQU8sTUFBTTtNQUNqQixDQUFDO01BQ0RDLFlBQVksRUFBRSxzQkFBU0MsSUFBSSxFQUFFO1FBQ3pCLElBQUlDLFNBQVMsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUNDLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxPQUFPO1FBQ2hELElBQUlDLE9BQU8sR0FBRyxzQkFBc0IsR0FBR0osU0FBUyxHQUFHLFNBQVM7UUFDNUQsSUFBSUEsU0FBUyxJQUFJLENBQUMsSUFBSUEsU0FBUyxJQUFJLENBQUMsRUFBRTtVQUNsQ0ksT0FBTyxJQUFJLEdBQUc7UUFDbEIsQ0FBQyxNQUFNLElBQUlKLFNBQVMsSUFBSSxDQUFDLEVBQUU7VUFDdkJJLE9BQU8sSUFBSSxJQUFJO1FBQ25CO1FBQ0EsT0FBT0EsT0FBTztNQUNsQixDQUFDO01BQ0RDLGFBQWEsRUFBRSx1QkFB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LGlGQUEwQjtBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrQkFBK0IsRUFBRTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckJELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUUzRDtBQUNBO0FBQ0EsR0FBRyxrREFBa0Q7QUFDckQ7QUFDQSxDQUFDIiwiZmlsZSI6InV2ZW50ZWNvbW1hbmRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb25cIik7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qc1wiO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbi8vcGx1Z2lucy9zdGVwcy9qcXVlcnkuc3RlcHMuY3NzXHJcbnJlcXVpcmUoXCIuLi8uLi8uLi8uLi9hc3NldHMvanMvcGx1Z2lucy9zdGVwcy9qcXVlcnkuc3RlcHMuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi4vLi4vcGx1Z2lucy9zdGVwcy9qcXVlcnkuc3RlcHMubWluLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi4vLi4vcGx1Z2lucy92YWxpZGF0ZS9qcXVlcnkudmFsaWRhdGUubWluLmpzXCIpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzXCI7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducyhlbGVtZW50LCBhdHQpIHtcclxuICAgICQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKFwic2VsZWN0Mi9pMThuL2ZyXCIsIFtdLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBSdXNzaWFuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5wdXRUb29Mb25nOiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINGD0LTQsNC70LjRgtC1IFwiICsgb3ZlckNoYXJzICsgXCIg0YHQuNC80LLQvtC7XCI7XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlckNoYXJzID49IDIgJiYgb3ZlckNoYXJzIDw9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwi0LBcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckNoYXJzID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwi0L7QslwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZW1haW5pbmdDaGFycyA9IGFyZ3MubWluaW11bSAtIGFyZ3MuaW5wdXQubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID1cclxuICAgICAgICAgICAgICAgICAgICBcIlRhcGV6IFwiICtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdDaGFycyArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgY2FyYWN0ZXJlIG91IHBsdXMgcG91ciBmYWlyZSBkZXMgcmVjaGVyY2hlc1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkaW5nTW9yZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1heGltdW1TZWxlY3RlZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCS0Ysg0LzQvtC20LXRgtC1INCy0YvQsdGA0LDRgtGMIFwiICsgYXJncy5tYXhpbXVtICsgXCIg0Y3Qu9C10LzQtdC90YJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5tYXhpbXVtID49IDIgJiYgYXJncy5tYXhpbXVtIDw9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwi0LBcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5tYXhpbXVtID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwi0L7QslwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub1Jlc3VsdHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXVjdW4gcmVzdWx0YXQgdHJvdXZlXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWNoZXJjaGVy4oCmXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgd2luZG93LmF0dCA9IFwiY3VycmVudF9zZWxlY3RfXCIgKyBhdHQ7XHJcbiAgICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBhdHQsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHk6IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtY29sdW1uXCIpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9hbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YS5yZXN1bHRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzOiB3aW5kb3cuYXR0LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC52YWwoYXR0KVxyXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICQoXCIubG9hZC1lclwiKS5mYWRlT3V0KDcwKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIi5kZXRfZm9yXCIpLmZhZGVJbig3MCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRvYXN0ci53YXJuaW5nKCdpbXBvc3NpYmxlIGRlIGNoYXJnZXIgbFxcJ2VudGl0ZXInLCAnRXJyZXVyJywge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgLy9hcHBseSB0byBzZWxlY3QyXHJcbiAgICB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6b3BlblwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5lbGVtZW50ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgICAgJChcIi50dHBcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiAuc2VsZWN0Mi1zZWFyY2gtLWhpZGVcIikuYWZ0ZXIoXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93biB0dHBcIj48aW5wdXQgY2xhc3M9XCJ0dCBzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCIwXCIgYXV0b2NvbXBsZXRlPVwib25cIiBhdXRvY29ycmVjdD1cIm9uXCIgYXV0b2NhcGl0YWxpemU9XCJvblwiIHNwZWxsY2hlY2s9XCJ0cnVlXCIgcm9sZT1cInRleHRib3hcIiAvPjwvc3Bhbj4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLnR0XCIpLnR5cGVXYXRjaCh7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdhaXQ6IDEwMCxcclxuICAgICAgICAgICAgY2FwdHVyZUxlbmd0aDogMixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHZhbHVlbm5uLCBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZWxlY3QyLXJlc3VsdHNcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvblwiPlJlY2hlcmNoZXLigKY8L3A+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2VhcmNoID0gdmFsdWVubm47XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCh2YWx1ZW5ubikpXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVfdGVybVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybTogdmFsdWVubm4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGF0dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWNvbHVtblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlbm5uID09ICQoXCIudHRcIikudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQucmVzdWx0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50LnNlbGVjdDIoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWxlcnQodGhpcy52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KHZhbHVlbm5uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIudHRcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJpbXBvc3NpYmxlIGRlIGNoYXJnZXIgbCdlbnRpdGVyXCIsIFwiRXJyZXVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5lbGVtZW50Lm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAgIHZhciBkYXRhID0gZS5wYXJhbXMuZGF0YTtcclxuICAgICAgICAkKFwiLnByaXh1bml0YWlyZVwiKS52YWwoZGF0YS5wcml4QWNoYXQpO1xyXG4gICAgICAgICQoXCIudHZhXCIpLnZhbChkYXRhLnR2YSk7XHJcbiAgICAgICAgJChcIi5yZW1pc2VcIikudmFsKGRhdGEucmVtaXNlKTtcclxuICAgICAgICAkKFwiLnNlbGVjdDJfdW5pdGVcIikudmFsKGRhdGEudW5pdGUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNlbGVjdDItY29udGFpbmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIudHRcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTtcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuJChcIi5zZWxlY3QyX2RlbW9fM1wiKS5zZWxlY3QyKHtcclxuICAgIHBsYWNlaG9sZGVyOiBcIkFjdGlvblwiLFxyXG4gICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxufSk7XHJcbiQoXCIubmV3XCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX2luc2VydFwiKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVjYWJfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIC8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG52YXIgYXJyYXlfZGV0YWlsID0gW107XHJcbiQoXCIubmV3XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQoXCIuZGV0X2ZvclwiKTtcclxuXHJcbiAgICB2YXIgZXhzaXQgPSAwO1xyXG4gICAgJC5lYWNoKGFycmF5X2RldGFpbCwgZnVuY3Rpb24oaSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoJChcIiN1dl9jb21tYW5kZWRldF9hcnRpY2xlXCIpLnZhbCgpID09IHZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgIGV4c2l0ID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIGlmIChleHNpdCA9PSAwKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX2RldGFpbFwiKSxcclxuICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmFydGljbGVcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lTm8gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5X2RldGFpbC5wdXNoKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHZhID0gdmFsdWUudHZhICsgXCIgJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbWlzZSA9IHZhbHVlLnJlbWlzZSArIFwiICVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR2YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YXRpb24gPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDx0cj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgKyAxKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50aXRyZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucHJpeHVuaXRhaXJlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5tb250YW50UmVtaXNlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD48YSBjbGFzcz0nZGVsZXRlX2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtbmF2eSc+PC9pPjwvYT48L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU5vKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbChudWxsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdXZfY29tbWFuZGVjYWJfZGV0YWlsXCIpLnZhbChKU09OLnN0cmluZ2lmeShhcnJheV9kZXRhaWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmFydGljbGVcIikudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ2V0IGFydGljbGUgZXhpc3RlIGRlamEgXCIsIFwid2FybmluZyBcIiwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIubmV3XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGVsZXRlX2VsZW1lbnRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgYXJyYXlfZGV0YWlsLnNwbGljZSgkKHRoaXMpLmF0dHIoXCJpZFwiKSwgMSk7XHJcblxyXG4gICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLnJlbW92ZSgpO1xyXG4gICAgJC5lYWNoKGFycmF5X2RldGFpbCwgZnVuY3Rpb24oaSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdHZhID0gdmFsdWUudHZhICsgXCIgJVwiO1xyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbiA9IHZhbHVlLm9ic2VydmF0aW9uO1xyXG4gICAgICAgIHZhciByZW1pc2UgPSB2YWx1ZS5yZW1pc2UgKyBcIiAlXCI7XHJcbiAgICAgICAgaWYgKHZhbHVlLnR2YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHR2YSA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbiA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgXCIgPHRyPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIChpICsgMSkgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUuY29kZSArXHJcbiAgICAgICAgICAgIFwiIC0gXCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS50aXRyZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS51bml0ZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5xdWFudGl0ZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD4gPHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucHJpeHVuaXRhaXJlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdHZhICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHJlbWlzZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5tb250YW50UmVtaXNlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucHJpeHR0Yy50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD48YSBjbGFzcz0nZGVsZXRlX2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS10cmFzaCB0ZXh0LW5hdnknPjwvaT48L2E+PC90ZD48L3RyPlwiO1xyXG4gICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICBsaW5lTm8rKztcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoXCIubmV3LWFydGljbGUtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICQoXCIuZWRpdC1uZXctYXJ0aWNsZVwiKS5zaG93KCk7XHJcbiAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLm5ldyAsIC5lZGl0XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmNvbXB0ZU1hc3NlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciAkZm9ybSA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgICAvLyBTaW11bGF0ZSBmb3JtIGRhdGEsIGJ1dCBvbmx5IGluY2x1ZGUgdGhlIHNlbGVjdGVkIHNwb3J0IHZhbHVlLlxyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy9hbGVydCgkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcbiAgICBjb25zb2xlLmxvZygkZm9ybS5hdHRyKFwibWV0aG9kXCIpKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgICAgICAgJChcIi5jb21wdGVSdWJyaXF1ZVwiKS5yZXBsYWNlV2l0aCgkKGh0bWwpLmZpbmQoXCIuY29tcHRlUnVicmlxdWVcIikpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbXB0ZVJ1YnJpcXVlXCIpLnBhcmVudCgpLmZpbmQoXCIuc2VsZWN0MlwiKS5ub3QoXCI6Zmlyc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29tcHRlUG9zdGVcIikucGFyZW50KCkuZmluZChcIi5zZWxlY3QyXCIpLm5vdChcIjpmaXJzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIi5jb21wdGVcIikucGFyZW50KCkuZmluZChcIi5zZWxlY3QyXCIpLm5vdChcIjpmaXJzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5jb21wdGVSdWJyaXF1ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkZm9ybSA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBkYXRhWyQoXCIuY29tcHRlTWFzc2VcIikuYXR0cihcIm5hbWVcIildID0gJChcIi5jb21wdGVNYXNzZVwiKS52YWwoKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgICAgICAgJChcIi5jb21wdGVQb3N0ZVwiKS5yZXBsYWNlV2l0aCgkKGh0bWwpLmZpbmQoXCIuY29tcHRlUG9zdGVcIikpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbXB0ZVBvc3RlXCIpLnBhcmVudCgpLmZpbmQoXCIuc2VsZWN0MlwiKS5ub3QoXCI6Zmlyc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29tcHRlXCIpLnBhcmVudCgpLmZpbmQoXCIuc2VsZWN0MlwiKS5ub3QoXCI6Zmlyc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoXCIubmV3ICwgLmVkaXRcIikub24oXCJjaGFuZ2VcIiwgXCIuY29tcHRlUG9zdGVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgZGF0YVskKFwiLmNvbXB0ZU1hc3NlXCIpLmF0dHIoXCJuYW1lXCIpXSA9ICQoXCIuY29tcHRlTWFzc2VcIikudmFsKCk7XHJcbiAgICBkYXRhWyQoXCIuY29tcHRlUnVicmlxdWVcIikuYXR0cihcIm5hbWVcIildID0gJChcIi5jb21wdGVSdWJyaXF1ZVwiKS52YWwoKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgICAgICAgJChcIi5jb21wdGVcIikucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKFwiLmNvbXB0ZVwiKSk7XHJcbiAgICAgICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29tcHRlXCIpLnBhcmVudCgpLmZpbmQoXCIuc2VsZWN0MlwiKS5ub3QoXCI6Zmlyc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX2xpc3RcIikgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgXSxcclxuICAgIHBhZ2VMZW5ndGg6IDE1LFxyXG4gICAgb3JkZXI6IFtcclxuICAgICAgICBbMCwgXCJkZXNjXCJdXHJcbiAgICBdLFxyXG4gICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMyVcIixcclxuICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGFyZ2V0czogWzBdLFxyXG4gICAgICAgICAgICBuYW1lOiBcInRhYi5pZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiLCBuYW1lOiBcInRhYi5jb2RlXCIgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTAlXCIsIG5hbWU6IFwidGFiLmRhdGVjb21tYW5kZVwiIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjE1JVwiLCBuYW1lOiBcInRhYi5kZXNjcmlwdGlvblwiIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjIwJVwiLCBzZWFyY2hhYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxNSVcIiwgbmFtZTogXCJ0YWIuaHRcIiB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIyMCVcIiwgbmFtZTogXCJ0YWIudHZhXCIgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTAlXCIsIG5hbWU6IFwidGFiLnR0Y1wiIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiLCBuYW1lOiBcInRhYi5idWRnZXRcIiB9LFxyXG4gICAgICAgIHsgd2lkdGg6IFwiOCVcIiwgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiBcInRhYi5kZXBlbnNlXCIgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIGNsYXNzTmFtZTogXCJiclwiLCB2aXNpYmxlOiBmYWxzZSAsIG5hbWU6IFwidGFiLmNvZGVcIn0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCBjbGFzc05hbWU6IFwiZmFjXCIsIHZpc2libGU6IGZhbHNlICwgbmFtZTogXCJ0YWIuY29kZVwiIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCBjbGFzc05hbWU6IFwicmdcIiwgdmlzaWJsZTogZmFsc2UgICwgbmFtZTogXCJ0YWIuY29kZVwifSxcclxuICAgICAgICB7IHdpZHRoOiBcIjglXCIsIG9yZGVyYWJsZTogdHJ1ZSAsbmFtZTogXCJ0YWIucG9zaXRpb25fYWN0dWVsXCIgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjglXCIsIG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogXCJ0YWIucG9zaXRpb25fYWN0dWVsXCIgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogZmFsc2UsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIF0sXHJcbiAgICBjb2x1bW5EZWZzOiBbe1xyXG4gICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHRhcmdldHM6IDE1LFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24odCwgYSwgbCwgcykge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHQuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5rID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ll9yb3V0ZV9saW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IFwiaHJlZj0nXCIgKyBlbGVtZW50Ll9yb3V0ZV9saW5rICsgXCInXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YSArIFwiPGxpPjxhIFwiICsgbGluayArIFwiICBkYXRhLXRyYW5zaXRpb249J1wiICsgZWxlbWVudC5uYW1lICsgXCInIGRhdGEtaWQ9J1wiICsgZWxlbWVudC5pZCArIFwiJyBkYXRhLXRpdGxlPSdcIiArIGVsZW1lbnQudGl0cmUgKyBcIicgY2xhc3M9J2Ryb3Bkb3duLWl0ZW0gIFwiICsgZWxlbWVudC5jbGFzcyArIFwiIFwiICsgZWxlbWVudC5pZENzICsgXCInID48aSBjbGFzcz0nZmEgXCIgKyBlbGVtZW50Lmljb24gKyBcIicgPjwvaT4gXCIgKyBlbGVtZW50LnRpdHJlICsgXCI8L2E+PC9saT5cIlxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdcXHQ8ZGl2IGNsYXNzPVwiZHJvcGRvd24gZHJvcGRvd24taW5saW5lIGNlbnRlclwiPiBcXHQgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPiBcXHQgPHNwYW4gY2xhc3M9XCJzdmctaWNvbiBzdmctaWNvbi1tZFwiPiBcXHQgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgdmVyc2lvbj1cIjEuMVwiIGNsYXNzPVwic3ZnLWNvbG9yXCI+IDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+IDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIi8+IDxjaXJjbGUgZmlsbD1cIiMwMDAwMDBcIiBjeD1cIjVcIiBjeT1cIjEyXCIgcj1cIjJcIi8+IDxjaXJjbGUgZmlsbD1cIiMwMDAwMDBcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIyXCIvPiA8Y2lyY2xlIGZpbGw9XCIjMDAwMDAwXCIgY3g9XCIxOVwiIGN5PVwiMTJcIiByPVwiMlwiLz4gPC9nPjwvc3ZnPiBcXHQgPC9zcGFuPiBcXHQgPC9hPiA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXNtIGRyb3Bkb3duLW1lbnUtcmlnaHRcIj4gXFx0IDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnUgc2hvdyBkcnAtbGlzdFwiIHgtcGxhY2VtZW50PVwiYm90dG9tLXN0YXJ0XCI+IDxsaSBjbGFzcz1cIm5hdmktaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRlciB0ZXh0LXVwcGVyY2FzZSBmb250LXNpemUteHMgdGV4dC1wcmltYXJ5IHBiLTJcIj5DaG9pc2lyIG9wZXJhdGlvbiA6PC9saT4nICsgZGF0YSArICcgPC91bD4gPC9kaXY+IFxcdDwvZGl2PlxcdCc7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1dLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJzxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcImY+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG50YWJsZS5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24oZSwgc2V0dGluZ3MpIHtcclxuICAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHN0KTtcclxuICAgIC8vaWYgKHN0ICE9IG51bGwpIHtcclxuICAgIC8vICAgICQuZWFjaChzdC5jb2x1bW5zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8gICAgICAgIGlmICh2YWx1ZS5zZWFyY2guc2VhcmNoICE9IFwiXCIpIHtcclxuICAgIC8vICAgICAgICAgICAgJCgnLnJlbW92ZS1maWx0ZXInKS5zaG93KCk7XHJcbiAgICAvLyAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vfVxyXG5cclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgW10sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hEYXRlKGFwaSwgW10sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuLypjb2x1bW4gMSBkZSBkYXRhdGJsZSBzZWFyY2gqL1xyXG5cclxuJChcIi5yZW1vdmUtZmlsdGVyXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5hY3Rpb25faGVhZFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCk7XHJcbiAgICAkKFwiLmFjdGlvbiAsLmFjdGlvbl9oZWFkXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aW9uXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG59KTtcclxuXHJcbiQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJsZS4kKFwidHIuc2VsZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChcIiNfZWRpdFwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVjYWJfZWRpdFwiLCB7IGlkOiBpZCB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8qQWpvdXRlciB1biBub3V2ZWF1IGFydGljbGUgZGFucyBsYSBwYWdlIGRlIG1vZGlmaWNhdGlvbiAqL1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtX2FkZF9hcnRpY2xlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRfY2FiXCIpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIC8vIGFsZXJ0KGlkKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVkZXRfaW5zZXJ0XCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmVycm9ycy1saXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVjYWJfdXBkYXRlXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybSAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwudGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI19zaG93XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVjYWJfc2hvd1wiLCB7IGlkOiBpZCB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIjX2RlbGV0ZV9kZW1tYW5kZVwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuXHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgIHJvdXRlOiBcInV2X2NvbW1hbmRlY2FiX2RlbGV0ZVwiLFxyXG4gICAgICAgIHJlZGlyZWN0aW9uOiBcInV2X2NvbW1hbmRlY2FiX2luZGV4XCIsXHJcbiAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgIGlkOiBpZCxcclxuICAgIH07XHJcbiAgICAvLyBhbGVydCgpO1xyXG4gICAgZGVsZXRlQ2FiKG9iaik7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIjX3N0YXR1dFwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZWNhYl9zdGF0dXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuYWN0aW9uc1wiKS5vbihcImNsaWNrXCIsIFwiLmNsb3NlLW1lXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vJCgnLmNsb3NlLW1lJykuY2xpY2soZnVuY3Rpb24gKGUpe1xyXG4gICAgJChcIi5hY3Rpb25zXCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuYWN0aW9uc1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtX3N0YXR1dFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZWNhYl9zdGF0dXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2codGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtX3N0YXR1dCAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC50aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI19nZW5lcmVyXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX2dlbmVyZXJcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5hY3Rpb25zXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fZ2VuZXJlclwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZWNhYl9nZW5lcmVyXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZXJyb3JzX2xpc3RcIikuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KC9bW10sXS8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JzID0gW1wiXFxcXF1cIiwgXCJcXFxcW1wiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oXCJ8XCIpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmVycm9yc19saXN0XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uTmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC50aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm1fZ2VuZXJlciAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfYXJjaGl2ZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBBcmNoaXZlciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBBcmNoaXZlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX2FyY2hpdmVcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfY29tbWFuZGVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJjb21tYW5kZUlkXCIpO1xyXG4gICAgLy8gdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX2NvbW1hbmRlXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIubmV3XCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fY29tbWFuZGVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIC8vIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiY29tbWFuZGVJZFwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAvLyAgICBhbGVydChpZCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVjYWJfY29tbWFuZGVcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0U3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfaW1wcmltZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiY29tbWFuZGVJZFwiKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVjYWJfcGRmXCIsIHsgaWQ6IGlkIH0pO1xyXG4gICAgICAgIC8vICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtX2RlbGV0ZVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgICB2YXIgdG9rZW4gPSBkdGEuZ2V0KFwiX3Rva2VuXCIpO1xyXG4gICAgLy8gICAgdmFyIGlkID0gJChcImlucHV0W25hbWU9X2lkXVwiKS52YWwoKTtcclxuICAgIC8vICAgIHZhciB0b2tlbiA9ICQoXCJpbnB1dFtuYW1lPV90b2tlbl1cIikudmFsKCk7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZWRldF9kZWxldGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0b3IucGFyZW50KCkucGFyZW50KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0LmRhdGEgPSBcImVycm9yXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkdGEpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZWRldF91cGRhdGVfZGV0YWlsXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmVycm9ycy1saXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5kZXRhaWxfZm9ybSAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC50aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI19jaGFyZ2VzXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiY29tbWFuZGVJZFwiKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVfY2hhcmdlc1wiLCB7IGlkOiBpZCB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuY2hhcmdlXCIpLm9uKFwic3VibWl0XCIsIFwiLmNoYXJnZV9zYXZlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vIGFsZXJ0KCk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGR0YSk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24yXCIpKTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVfY2hhcmdlc1wiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5jaGFyZ2VfZm9ybV9kZWxldGVcIikuc3VibWl0KGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vYWxlcnQoKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9IGR0YS5nZXQoXCJfdG9rZW5cIik7XHJcbiAgICAvLyAgICB2YXIgaWQgPSAkKFwiaW5wdXRbbmFtZT1faWRdXCIpLnZhbCgpO1xyXG4gICAgLy8gICAgdmFyIHRva2VuID0gJChcImlucHV0W25hbWU9X3Rva2VuXVwiKS52YWwoKTtcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NoYXJnZWNvbW1hbmRlX2RlbGV0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzd2FsKHJlc3VsdC5tZXNzYWdlLnRpdGxlLCByZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS5zdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQuZGF0YSA9IFwiZXJyb3JcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl9maWNoaWVyc1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlX2ZpY2hpZXJzXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5fZGVsZXRlX2ZpY2hpZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlX2ZpY2hpZXJzX2RlbGV0ZVwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJJbXBvc3NpYmxlIGQnZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLCBcIndhcm5pbmdcIiwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIudXZfY29tbWFuZGVfYXBwbHlfdHJhbnNpdGlvbnNcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgLyp2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgICB2YXIgdGl0bGUgPSBkdGEuZ2V0KCd0aXRsZScpOyovXHJcbiAgICAgIFxyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cihcImRhdGEtdGl0bGVcIik7XHJcbiAgICB2YXIgdHJhbnNpdGlvbiA9ICQodGhpcykuYXR0cihcImRhdGEtdHJhbnNpdGlvblwiKTtcclxuXHJcbiAgICBkdGEuYXBwZW5kKFwiaWRcIiwgaWQpO1xyXG4gICAgZHRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcclxuICAgIGR0YS5hcHBlbmQoXCJ0cmFuc2l0aW9uXCIsIHRyYW5zaXRpb24pO1xyXG4gICAgaWYgKHRyYW5zaXRpb24gPT0gJ2FwcmVzX3ZhbGlkZXJfbGl2cmVyJykge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZV9saXZyYWlzb25fc2hvd1wiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xpdnJhaXNvblBvcFVwIC5ib2RcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgICAgICQoXCIjbGl2cmFpc29uUG9wVXBcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlMiA9ICQoXCIuZ3JpZC1yZWNlcHRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGluZzogZmFsc2UsIHBhZ2luZzogZmFsc2UsIGluZm86IGZhbHNlLCAgICAgICAgICAgIC8vIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiMTUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSAvKiwgdmlzaWJsZTogdHJ1ZSovIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiBmYWxzZSAvKiwgdmlzaWJsZTogdHJ1ZSovIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlMi5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmVyKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24gPT0gJ2FwcmVzX2NyZWVyX3ZhbGlkZXInKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX3R5cGVfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiN0eXBlUG9wVXAgLmJvZDJcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNlbDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgICAgICQoXCIjdHlwZVBvcFVwXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciBhIGwnZXRhdCAnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJyBwb3VyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm9uICFcIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZV9hcHBseV90cmFuc2l0aW9uc1wiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChyZXN1bHQudmFsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzdWx0LnZhbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduZSBcIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoXCIuYm9kMlwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtX3R5cGVcIiwgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX3R5cGVfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKFwiLmVycm9ycy1saXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIC8qIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm0gI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcigoXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKFwiI2dyaWQgdGJvZHlcIikub24oXCJjbGlja1wiLCBcIi5jZF9vcFwiLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVjYWJfc2hvd1wiLCB7XHJcbiAgICAgICAgaWQ6ICQodGhpcykuY2xvc2VzdChcInRyXCIpLmF0dHIoXCJpZFwiKSxcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuJChcIi53aXphcmQtYmlnXCIpXHJcbiAgICAuc3RlcHMoe1xyXG4gICAgICAgIGJvZHlUYWc6IFwiZmllbGRzZXRcIixcclxuICAgICAgICBvblN0ZXBDaGFuZ2luZzogZnVuY3Rpb24oZXZlbnQsIGN1cnJlbnRJbmRleCwgbmV3SW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gQWx3YXlzIGFsbG93IGdvaW5nIGJhY2t3YXJkIGV2ZW4gaWYgdGhlIGN1cnJlbnQgc3RlcCBjb250YWlucyBpbnZhbGlkIGZpZWxkcyFcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IG5ld0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRm9yYmlkIHN1cHByZXNzaW5nIFwiV2FybmluZ1wiIHN0ZXAgaWYgdGhlIHVzZXIgaXMgdG8geW91bmdcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSAzICYmIE51bWJlcigkKFwiI2FnZVwiKS52YWwoKSkgPCAxOCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCBpZiB1c2VyIHdlbnQgYmFja3dhcmQgYmVmb3JlXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBuZXdJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVG8gcmVtb3ZlIGVycm9yIHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgJChcIi5ib2R5OmVxKFwiICsgbmV3SW5kZXggKyBcIikgbGFiZWwuZXJyb3JcIiwgZm9ybSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZHk6ZXEoXCIgKyBuZXdJbmRleCArIFwiKSAuZXJyb3JcIiwgZm9ybSkucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSB2YWxpZGF0aW9uIG9uIGZpZWxkcyB0aGF0IGFyZSBkaXNhYmxlZCBvciBoaWRkZW4uXHJcbiAgICAgICAgICAgIGZvcm0udmFsaWRhdGUoKS5zZXR0aW5ncy5pZ25vcmUgPSBcIjpkaXNhYmxlZCw6aGlkZGVuXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBTdGFydCB2YWxpZGF0aW9uOyBQcmV2ZW50IGdvaW5nIGZvcndhcmQgaWYgZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm0udmFsaWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3RlcENoYW5nZWQ6IGZ1bmN0aW9uKGV2ZW50LCBjdXJyZW50SW5kZXgsIHByaW9ySW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gU3VwcHJlc3MgKHNraXApIFwiV2FybmluZ1wiIHN0ZXAgaWYgdGhlIHVzZXIgaXMgb2xkIGVub3VnaC5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gMiAmJiBOdW1iZXIoJChcIiNhZ2VcIikudmFsKCkpID49IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnN0ZXBzKFwibmV4dFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3VwcHJlc3MgKHNraXApIFwiV2FybmluZ1wiIHN0ZXAgaWYgdGhlIHVzZXIgaXMgb2xkIGVub3VnaCBhbmQgd2FudHMgdG8gdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IDIgJiYgcHJpb3JJbmRleCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zdGVwcyhcInByZXZpb3VzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkZpbmlzaGluZzogZnVuY3Rpb24oZXZlbnQsIGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIHZhbGlkYXRpb24gb24gZmllbGRzIHRoYXQgYXJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50IGl0J3MgcmVjb21tZW5kZWQgdG8gZG8gYW4gb3ZlcmFsbCBjaGVjayAobWVhbiBpZ25vcmluZyBvbmx5IGRpc2FibGVkIGZpZWxkcylcclxuICAgICAgICAgICAgZm9ybS52YWxpZGF0ZSgpLnNldHRpbmdzLmlnbm9yZSA9IFwiOmRpc2FibGVkXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBTdGFydCB2YWxpZGF0aW9uOyBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbiBpZiBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZm9ybS52YWxpZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25GaW5pc2hlZDogZnVuY3Rpb24oZXZlbnQsIGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBTdWJtaXQgZm9ybSBpbnB1dFxyXG4gICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgLnZhbGlkYXRlKHtcclxuICAgICAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oZXJyb3IsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5iZWZvcmUoZXJyb3IpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgY29uZmlybToge1xyXG4gICAgICAgICAgICAgICAgZXF1YWxUbzogXCIjcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbnZhciB0YWJsZVNob3cgPSAkKFwiI2RhdGF0YWJsZS1zaG93MlwiKS5EYXRhVGFibGUoe1xyXG4gICAgc2Nyb2xsWTogXCIyMDBweFwiLFxyXG4gICAgc2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcbiAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgYXV0b1dpZHRoOiBmYWxzZSxcclxufSk7XHJcblxyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvd1wiKS5EYXRhVGFibGUoe1xyXG4gICAgc2Nyb2xsWTogXCIyMDBweFwiLFxyXG4gICAgc2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcbiAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgYXV0b1dpZHRoOiBmYWxzZSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjEwJVwiIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCIzNSVcIiB9LFxyXG4gICAgICAgIHsgd2lkdGg6IFwiMjAlXCIgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIF0sXHJcbiAgICBmb290ZXJDYWxsYmFjazogZnVuY3Rpb24ocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICAgICAgdmFyIGFwaSA9IHRoaXMuYXBpKCksXHJcbiAgICAgICAgICAgIGRhdGE7XHJcbiAgICAgICAgdmFyIHRvdGFsLCBwYWdlVG90YWw7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIiA/XHJcbiAgICAgICAgICAgICAgICBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDEgOlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGkgPT09IFwibnVtYmVyXCIgP1xyXG4gICAgICAgICAgICAgICAgaSA6XHJcbiAgICAgICAgICAgICAgICAwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFRvdGFsIG92ZXIgYWxsIHBhZ2VzXHJcbiAgICAgICAgdG90YWwgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbig3KVxyXG4gICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgIC8vIFRvdGFsIG92ZXIgdGhpcyBwYWdlXHJcbiAgICAgICAgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgICAgICAgIC5jb2x1bW4oNywgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBmb290ZXJcclxuICAgICAgICAkKGFwaS5jb2x1bW4oMSkuZm9vdGVyKCkpLmh0bWwoXHJcbiAgICAgICAgICAgIFwiVG90YWwgOiBcIiArIChNYXRoLnJvdW5kKHBhZ2VUb3RhbCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcclxuICAgICAgICApO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4vL3ZhciB0YWJsZVNob3czID0gJChcIiNkYXRhdGFibGUtc2hvdzNcIikuRGF0YVRhYmxlKHsgcGFnaW5nOiBmYWxzZSB9KTtcclxuXHJcbnZhciB0YWJsZVNob3czID0gJChcIi5kYXRhdGFibGUtc2hvdzNcIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHBhZ2VMZW5ndGg6IDE1LFxyXG4gICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjEwJVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSAvKiwgdmlzaWJsZTogdHJ1ZSovIH0sXHJcbiAgICBdLFxyXG4gICAgcGFnaW5nOiBmYWxzZSxcclxuXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbihlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZTIuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcblxyXG52YXIgdGFibGVTaG93NCA9ICQoXCIuZGF0YXRhYmxlLXNob3c0XCIpLkRhdGFUYWJsZSh7IHBhZ2luZzogZmFsc2UgfSk7XHJcblxyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvdzlcIikuRGF0YVRhYmxlKHtcclxuICAgIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICAgIHNjcm9sbENvbGxhcHNlOiB0cnVlLFxyXG4gICAgcGFnaW5nOiBmYWxzZSxcclxuICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgICBmb290ZXJDYWxsYmFjazogZnVuY3Rpb24ocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICAgICAgdmFyIGFwaSA9IHRoaXMuYXBpKCksXHJcbiAgICAgICAgICAgIGRhdGE7XHJcbiAgICAgICAgdmFyIHRvdGFsLCBwYWdlVG90YWw7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgICAgIHZhciBpbnRWYWwgPSBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIiA/XHJcbiAgICAgICAgICAgICAgICBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDEgOlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGkgPT09IFwibnVtYmVyXCIgP1xyXG4gICAgICAgICAgICAgICAgaSA6XHJcbiAgICAgICAgICAgICAgICAwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFRvdGFsIG92ZXIgYWxsIHBhZ2VzXHJcbiAgICAgICAgdG90YWwgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbig1KVxyXG4gICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgIC8vIFRvdGFsIG92ZXIgdGhpcyBwYWdlXHJcbiAgICAgICAgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgICAgICAgIC5jb2x1bW4oNSwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBmb290ZXJcclxuICAgICAgICAkKGFwaS5jb2x1bW4oMSkuZm9vdGVyKCkpLmh0bWwoXHJcbiAgICAgICAgICAgIFwiVG90YWwgOiBcIiArIChNYXRoLnJvdW5kKHBhZ2VUb3RhbCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcclxuICAgICAgICApO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgIC5oaWRlKClcclxuICAgICAgICAuYWZ0ZXIoXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICk7XHJcbiAgICBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducygkKFwiLmFydGljbGVzXCIpLCBcIlwiKTtcclxufSk7XHJcblxyXG4oXCJ1c2Ugc3RyaWN0XCIpO1xyXG52YXIgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgJC5mbi5kYXRhVGFibGUuQXBpLnJlZ2lzdGVyKFwiY29sdW1uKCkudGl0bGUoKVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gJCh0aGlzLmhlYWRlcigpKS50ZXh0KCkudHJpbSgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdDtcclxuICAgICAgICAgICAgKHQgPSAkKFwiI2t0X3RhYmxlXzFcIikuRGF0YVRhYmxlKHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVfdGFibGVcIiksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZW50ZVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlLmhhc093blByb3BlcnR5KCdzZXR0aW5ncycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB0YWJsZS5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcGFnZUxlbmd0aDogMjUsXHJcbiAgICAgICAgICAgICAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnYXJ0LmlkJywgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnYXJ0LmNvZGUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdhcnQudGl0cmUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICd0YWIuYWJyZXZpYXRpb24nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICduMS5kZXNpZ25hdGlvbicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ24yLmRlc2lnbmF0aW9uJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnbjMuZGVzaWduYXRpb24nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICduNC5kZXNpZ25hdGlvbicgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAnY3JlYXRlZFJvdyc6IGZ1bmN0aW9uKHJvdywgZGF0YSwgZGF0YUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChyb3cpLmF0dHIoJ3RleHQnLCBkYXRhWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cigncHUnLCBkYXRhWzhdKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cigndHZhJywgZGF0YVs5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChyb3cpLmF0dHIoJ3VuaXRlJywgZGF0YVsxMF0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0Lm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbihlLCBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coc3QpO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMCwgMSwgMywgMiwgNCwgNSwgNiwgN10sIFtdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0pKCk7XHJcbiQuZXh0ZW5kKHRydWUsICQuZm4uZGF0YVRhYmxlLmRlZmF1bHRzLm9MYW5ndWFnZS5vUGFnaW5hdGUsIHtcclxuICAgIHNOZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgPjwvaT4nLFxyXG4gICAgc1ByZXZpb3VzOiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiA+PC9pPicsXHJcbn0pO1xyXG5cclxuJChcIi5tb2RhbEFjdGl2YXRlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5ib2RcIikuZW1wdHkoKTtcclxuICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlXCIpLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICBLVERhdGF0YWJsZXNTZWFyY2hPcHRpb25zQWR2YW5jZWRTZWFyY2guaW5pdCgpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxudmFyIGNvZGUgPSBudWxsO1xyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2t0X3RhYmxlXzEgdGJvZHkgdHJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAvL2FsZXJ0KCQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cihcInVuaXRlXCIpKVxyXG4gICAgY29kZSA9ICQodGhpcykuYXR0cihcImNvZGVcIik7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LmVsZW1lbnQuZmluZChcclxuICAgICAgICAgICAgXCJvcHRpb25bdmFsdWU9J1wiICsgJCh0aGlzKS5hdHRyKFwiaWRcIikgKyBcIiddXCJcclxuICAgICAgICApLmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgICAgd2luZG93LmVsZW1lbnQudmFsKCQodGhpcykuYXR0cihcImlkXCIpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICQoXCIucHJpeHVuaXRhaXJlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJwdVwiKSk7XHJcblxyXG4gICAgICAgICQoXCIudHZhXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJ0dmFcIikpO1xyXG4gICAgICAgICQoXCIucmVtaXNlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJyZW1pc2VcIikpO1xyXG4gICAgICAgICQoXCIuc2VsZWN0Ml91bml0ZVwiKS52YWwoJCh0aGlzKS5hdHRyKFwidW5pdGVcIikpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIERPTSBPcHRpb24gYW5kIHByZS1zZWxlY3QgYnkgZGVmYXVsdFxyXG4gICAgICAgIHZhciBuZXdPcHRpb24gPSBuZXcgT3B0aW9uKFxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJ0ZXh0XCIpLFxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gQXBwZW5kIGl0IHRvIHRoZSBzZWxlY3RcclxuICAgICAgICB3aW5kb3cuZWxlbWVudC5hcHBlbmQobmV3T3B0aW9uKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICQoXCIucHJpeHVuaXRhaXJlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJwdVwiKSk7XHJcbiAgICAgICAgJChcIi50dmFcIikudmFsKCQodGhpcykuYXR0cihcInR2YVwiKSk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJ1bml0ZVwiKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAkKFwiLnJlbWlzZVwiKS52YWwoJCh0aGlzKS5hdHRyKFwicmVtaXNlXCIpKTtcclxuICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldFN1YlNlbGVjdChteWNsYXNzLCBteWJvb2xlYW4sIG15Y29udGVudCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhteWNvbnRlbnQpXHJcbiAgICBpZiAobXlib29sZWFuKSB7XHJcbiAgICAgICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKG15Y2xhc3MpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAkKG15Y2xhc3MpXHJcbiAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAuZmluZChcIi5zZWxlY3QyIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3dcIilcclxuICAgICAgICAgICAgLmh0bWwoJzxpIGNsYXNzPVwiaS1sb2FkIGZhIGZhLXJlZnJlc2hcIj48L2k+Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAobXljb250ZW50KSB7XHJcbiAgICAgICAgdmFyIGFycmF5ID0gbXljbGFzcy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4gICAgICAgICAgICAkKGFycmF5W2ldKS5yZXBsYWNlV2l0aCgkKG15Y29udGVudCkuZmluZChhcnJheVtpXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJChcIi50eXBlX2NvbW1hbmRlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLXR5cGVcIikgPT0gXCJQUkpcIiB8fCAkKHRoaXMpLnZhbCgpID09IDUpIHtcclxuICAgICAgICAkKFwiLnByXCIpLnRvZ2dsZUNsYXNzKFwibm9uZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5wclwiKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChcIi5mb3JtXCIpLm9uKFwiY2hhbmdlXCIsIFwiLnR5cGVfY29tbWFuZGVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHR5cGUgPSAkKFwib3B0aW9uOnNlbGVjdGVkXCIsIHRoaXMpLmF0dHIoXCJkYXRhLXR5cGVcIik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2codHlwZSk7XHJcblxyXG4gICAgJChcIi5ibG9jX2Nob2l4XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cclxuICAgIGlmICh0eXBlID09IFwiQ01EXCIpIHtcclxuICAgICAgICAkKFwiLmJsb2NfcmVmZXJlbmNlX2RldmlzX2NsaWVudFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJNUlwiKSB7XHJcbiAgICAgICAgJChcIi5ibG9jX21hcmNoZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJQUkpcIikge1xyXG4gICAgICAgICQoXCIuYmxvY19wcm9qZXRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoXCIubmV3ICwgLmVkaXRcIikub24oXCJjaGFuZ2VcIiwgXCIubWFyY2hlc1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gICAgZ2V0U3ViU2VsZWN0KFwiLnNvdXNtYXJjaGVcIiwgZmFsc2UsIFwiXCIpO1xyXG4gICAgLy8gU2ltdWxhdGUgZm9ybSBkYXRhLCBidXQgb25seSBpbmNsdWRlIHRoZSBzZWxlY3RlZCBzcG9ydCB2YWx1ZS5cclxuICAgIHZhciBkYXRhID0ge307XHJcbiAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAvLyAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvL2FsZXJ0KCRmb3JtLmF0dHIoJ2FjdGlvbicpKTtcclxuICAgIC8vICBjb25zb2xlLmxvZygkZm9ybS5hdHRyKCdtZXRob2QnKSk7XHJcbiAgICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICRmb3JtLmF0dHIoXCJhY3Rpb25cIiksXHJcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cihcIm1ldGhvZFwiKSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGh0bWwpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgICAgICAgZ2V0U3ViU2VsZWN0KFwiLnNvdXNtYXJjaGVcIiwgdHJ1ZSwgaHRtbCk7XHJcbiAgICAgICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgIC8vJCgnLnNvdXNtYXJjaGUnKS5wYXJlbnQoKS5maW5kKCcuc2VsZWN0MiAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IGInKS5ub3QoJzpmaXJzdCcpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5wcm9qZXRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICAgIGdldFN1YlNlbGVjdChcIi5zb3VzcHJvamV0XCIsIGZhbHNlLCBcIlwiKTtcclxuICAgIC8vIFNpbXVsYXRlIGZvcm0gZGF0YSwgYnV0IG9ubHkgaW5jbHVkZSB0aGUgc2VsZWN0ZWQgc3BvcnQgdmFsdWUuXHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgLy8gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy9hbGVydCgkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcbiAgICAvLyAgY29uc29sZS5sb2coJGZvcm0uYXR0cignbWV0aG9kJykpO1xyXG4gICAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkZm9ybS5hdHRyKFwiYWN0aW9uXCIpLFxyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihodG1sKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICAgICAgIGdldFN1YlNlbGVjdChcIi5zb3VzcHJvamV0XCIsIHRydWUsIGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAvLyQoJy5zb3VzbWFyY2hlJykucGFyZW50KCkuZmluZCgnLnNlbGVjdDIgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiJykubm90KCc6Zmlyc3QnKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiLl9tdWx0aXBsZV9hY3Rpb25zXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy9hbGVydCgpXHJcblxyXG4gICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uXTpjaGVja2VkXCIpLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKFwiYm9keSA+IC5fbXVsdGlwbGVfYWN0aW9ucyBvcHRpb25bdmFsdWU9JyddXCIpLmF0dHIoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSk7XHJcblxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJfZGVzYWN0aXZlcl9jb21tYW5kZVwiKSB7XHJcbiAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZGVzYWN0aXZlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYXJjaGl2ZSc+PC9pPiBPdWksIERlc2FjdGl2ZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZV9fZGVzYWN0aXZlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBfYXJyYXlfaWRzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuX211bHRpcGxlX2FjdGlvbnNcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vKioqKipwb3VyIGFqb3V0IGQnYXJ0aWNsZSAqL1xyXG5cclxudmFyIGFycmF5X2RldGFpbCA9IFtdO1xyXG52YXIgZXJyb3JzX2RldGFpbHMgPSBbXTtcclxudmFyIGZvcm1EYXRhRGV0YWlsID0gW107XHJcbnZhciBuYW1lRGV0YWlsID0gXCJcIjtcclxudmFyIGVkaXRDb2x1bW4gPSBudWxsO1xyXG52YXIgZWRpdEFydGljbGVDb2x1bW4gPSBudWxsO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGVycm9yc19kZXRhaWxzID0galF1ZXJ5LnBhcnNlSlNPTigkKFwiLmVycm9yc19kZXRhaWxzXCIpLmF0dHIoXCJlcnJvcnNcIikpO1xyXG4gICAgbmFtZURldGFpbCA9ICQoXCIuZXJyb3JzX2RldGFpbHNcIikuYXR0cihcIm5hbWVcIik7XHJcbiAgICAkKFwiLmVycm9yc19kZXRhaWxzXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgIC8vIG9yIHdpdGggalF1ZXJ5XHJcbiAgICAvL3ZhciBpc0F1dGhlbnRpY2F0ZWQgPSAkKCcuanMtdXNlci1yYXRpbmcnKS5kYXRhKCdpc0F1dGhlbnRpY2F0ZWQnKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRIdChyb3cpIHtcclxuICAgIHJldHVybiByb3cucXVhbnRpdGUgKiByb3cucHJpeHVuaXRhaXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUdmEocm93KSB7XHJcbiAgICB2YXIgcHJpeFR2YSA9IChnZXRIdChyb3cpICogcm93LnR2YSkgLyAxMDA7XHJcblxyXG4gICAgcHJpeFR2YSA9IHByaXhUdmEgLSAocHJpeFR2YSAqIHJvdy5yZW1pc2UpIC8gMTAwO1xyXG5cclxuICAgIHJldHVybiBwcml4VHZhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZW1pc2Uocm93KSB7XHJcbiAgICByZXR1cm4gKGdldEh0KHJvdykgKiByb3cucmVtaXNlKSAvIDEwMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJpeFRUYyhyb3cpIHtcclxuICAgIHJldHVybiAocm93LnByaXh0dGMgPSBnZXRIdChyb3cpICsgZ2V0VHZhKHJvdykgLSBnZXRSZW1pc2Uocm93KSk7XHJcbn1cclxuJChcIi5uZXdcIikub24oXCJjbGlja1wiLCBcIi5kZXRhaWxfZm9ybVwiLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuICAgIC8vYWxlcnQoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAkKCcuZXJyb3ItY2xhc3MtdGFiJykucmVtb3ZlKCk7XHJcbiAgICB2YXIgZmxhZyA9IDA7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybURhdGFEZXRhaWwubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKGZvcm1EYXRhRGV0YWlsW2luZGV4XS5hcnRpY2xlSWQgPT0gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkICYmIGVkaXRBcnRpY2xlQ29sdW1uICE9IGZvcm1EYXRhRGV0YWlsW2luZGV4XS5hcnRpY2xlSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5DZSBhcnRpY2xlIGVzdCBkZWphIGV4aXN0ZTwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlcnJvcnNfZGV0YWlscy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICB2YXIgbmFtZSA9IG5hbWVEZXRhaWwgKyAnWycgKyBlcnJvcnNfZGV0YWlsc1tpbmRleF0ucHJvcGVydHkgKyAnXSc7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJCgnW25hbWU9XCInICsgbmFtZURldGFpbCArICdbJyArIGVycm9yc19kZXRhaWxzW2luZGV4XS5wcm9wZXJ0eSArICddJyArICdcIl0nKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKGVycm9yc19kZXRhaWxzW2luZGV4XS5jYXVzZSA9PSBudWxsICYmIHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICAkKCdbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9yc19kZXRhaWxzW2luZGV4XS5tZXNzYWdlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmbGFnID09IDEpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgcm93ID0ge1xyXG4gICAgICAgIHF1YW50aXRlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3F1YW50aXRlJykudmFsKCksXHJcbiAgICAgICAgcHJpeHVuaXRhaXJlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcHJpeHVuaXRhaXJlJykudmFsKCkpLFxyXG4gICAgICAgIHR2YTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ190dmEnKS52YWwoKSxcclxuICAgICAgICByZW1pc2U6ICQoJyMnICsgbmFtZURldGFpbCArICdfcmVtaXNlJykudmFsKCksXHJcbiAgICB9XHJcbiAgICBpZiAoZWRpdENvbHVtbiAhPSBudWxsKSB7XHJcbiAgICAgICAgZm9ybURhdGFEZXRhaWxbZWRpdENvbHVtbl0gPSB7XHJcbiAgICAgICAgICAgIGFydGljbGVJZDogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICB0aXRyZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLnRleHQsXHJcbiAgICAgICAgICAgIGNvZGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlID8gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmNvZGUgOiBjb2RlLFxyXG4gICAgICAgICAgICB1bml0ZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ191bml0ZScpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0LFxyXG4gICAgICAgICAgICB1bml0ZUlkOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3VuaXRlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICBxdWFudGl0ZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3F1YW50aXRlJykudmFsKCkpLFxyXG4gICAgICAgICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgICAgICAgIHR2YTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3R2YScpLnZhbCgpKSxcclxuICAgICAgICAgICAgcmVtaXNlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcmVtaXNlJykudmFsKCkpLFxyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbjogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19vYnNlcnZhdGlvbicpLnZhbCgpLFxyXG4gICAgICAgICAgICBtb250YW50UmVtaXNlOiBnZXRSZW1pc2Uocm93KSxcclxuICAgICAgICAgICAgcHJpeHR0YzogZ2V0UHJpeFRUYyhyb3cpLFxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcm1EYXRhRGV0YWlsLnB1c2goe1xyXG4gICAgICAgICAgICBhcnRpY2xlSWQ6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZCxcclxuICAgICAgICAgICAgdGl0cmU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0LFxyXG4gICAgICAgICAgICBjb2RlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uY29kZSA/ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlIDogY29kZSxcclxuICAgICAgICAgICAgdW5pdGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfdW5pdGUnKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dCxcclxuICAgICAgICAgICAgdW5pdGVJZDogJCgnIycgKyBuYW1lRGV0YWlsICsgJ191bml0ZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZCxcclxuICAgICAgICAgICAgcXVhbnRpdGU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19xdWFudGl0ZScpLnZhbCgpKSxcclxuICAgICAgICAgICAgcHJpeHVuaXRhaXJlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcHJpeHVuaXRhaXJlJykudmFsKCkpLFxyXG4gICAgICAgICAgICB0dmE6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ190dmEnKS52YWwoKSksXHJcbiAgICAgICAgICAgIHJlbWlzZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3JlbWlzZScpLnZhbCgpKSxcclxuICAgICAgICAgICAgb2JzZXJ2YXRpb246ICQoJyMnICsgbmFtZURldGFpbCArICdfb2JzZXJ2YXRpb24nKS52YWwoKSxcclxuICAgICAgICAgICAgbW9udGFudFJlbWlzZTogZ2V0UmVtaXNlKHJvdyksXHJcbiAgICAgICAgICAgIHByaXh0dGM6IGdldFByaXhUVGMocm93KSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsaW5lTm8gPSAxO1xyXG4gICAgdmFyIGNsID0gXCJcIjtcclxuICAgICQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgIC5oaWRlKClcclxuICAgICAgICAuYWZ0ZXIoXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoJChcIi5hcnRpY2xlc1wiKSwgXCJcIik7XHJcbiAgICAkKFwiLnRhYmxlLWRldGFpbCArIHRhYmxlIFwiKS5yZW1vdmVDbGFzcygncmVtb3ZlJyk7XHJcbiAgICAkKCcudGFibGUtZGV0YWlsIHRib2R5JykuaHRtbCgnJyk7XHJcbiAgICAkLmVhY2goZm9ybURhdGFEZXRhaWwsIGZ1bmN0aW9uKGksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGxpbmVObyAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICBjbCA9IFwiaW1wYWlyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2wgPSBcInBhaXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdHZhID0gdmFsdWUudHZhICsgXCIgJVwiO1xyXG4gICAgICAgIHZhciByZW1pc2UgPSB2YWx1ZS5yZW1pc2UgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9uID0gdmFsdWUub2JzZXJ2YXRpb247XHJcbiAgICAgICAgaWYgKHZhbHVlLnR2YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHR2YSA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbiA9IFwiPHRyIGNsYXNzPVwiICsgY2wgKyBcIj48dGQ+PC90ZD48dGQgY29sc3Bhbj0nOSc+PGI+SW5mb3JtYXRpb25zIGNvbXBsZW1lbnRhaXJlcyA6IDwvYj5cIiArIG9ic2VydmF0aW9uICsgXCI8L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2F0ZWdvcmllXHJcbiAgICAgICAgdmFyIG15X3JvdyA9XHJcbiAgICAgICAgICAgIFwiIDx0ciBjbGFzcz1cIiArIGNsICsgXCI+PHRkPlwiICtcclxuICAgICAgICAgICAgKGkgKyAxKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnRpdHJlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnF1YW50aXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dW5pdGFpcmUudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgcmVtaXNlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLm1vbnRhbnRSZW1pc2UudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyJz48L2k+PC9hPiA8YSBjbGFzcz0nYnRuIGJ0bi13aGl0ZSBidG4teHMgdXBwZXIgZWRpdF9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtZWRpdCB0ZXh0LXByaW1hcnknPjwvaT48L2E+PC90ZD48L3RyPlwiICsgb2JzZXJ2YXRpb247XHJcbiAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gICAgICAgIGxpbmVObysrO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKFwiI2NyZWF0ZV9jb21tYW5kZVwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cclxuXHJcbiAgICAkKCcuZGV0X2ZvciBpbnB1dCwuZGV0X2ZvciBzZWxlY3QsLmRldF9mb3IgdGV4dGFyZWEnKS52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgZWRpdENvbHVtbiA9IG51bGw7XHJcbiAgICBlZGl0QXJ0aWNsZUNvbHVtbiA9IG51bGw7XHJcblxyXG4gICAgLy90b2FzdHIud2FybmluZyhcIkNldCBhcnRpY2xlIGV4aXN0ZSBkZWphIFwiLCBcIndhcm5pbmcgXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLm5ld1wiKS5vbihcImNsaWNrXCIsIFwiLmVkaXRfZWxlbWVudFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlZGl0Q29sdW1uID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgZWRpdEFydGljbGVDb2x1bW4gPSBmb3JtRGF0YURldGFpbFskKHRoaXMpLmF0dHIoJ2lkJyldWydhcnRpY2xlSWQnXTtcclxuXHJcbiAgICB2YXIgY2wgPSBcIlwiO1xyXG4gICAgdmFyIGxpbmVObyA9IDE7XHJcbiAgICAkKCcudGFibGUtZGV0YWlsIHRib2R5JykuaHRtbCgnJyk7XHJcbiAgICAkLmVhY2goZm9ybURhdGFEZXRhaWwsIGZ1bmN0aW9uKGksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGxpbmVObyAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICBjbCA9IFwiaW1wYWlyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2wgPSBcInBhaXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdHZhID0gdmFsdWUudHZhICsgXCIgJVwiO1xyXG4gICAgICAgIHZhciByZW1pc2UgPSB2YWx1ZS5yZW1pc2UgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9uID0gdmFsdWUub2JzZXJ2YXRpb247XHJcbiAgICAgICAgaWYgKHZhbHVlLnR2YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHR2YSA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbiA9IFwiPHRyIGNsYXNzPVwiICsgY2wgKyBcIj48dGQ+PC90ZD48dGQgY29sc3Bhbj0nOSc+PGI+SW5mb3JtYXRpb25zIGNvbXBsZW1lbnRhaXJlcyA6IDwvYj5cIiArIG9ic2VydmF0aW9uICsgXCI8L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2F0ZWdvcmllXHJcbiAgICAgICAgdmFyIG15X3JvdyA9XHJcbiAgICAgICAgICAgIFwiIDx0ciBjbGFzcz1cIiArIGNsICsgXCI+PHRkPlwiICtcclxuICAgICAgICAgICAgKGkgKyAxKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnRpdHJlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnF1YW50aXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dW5pdGFpcmUudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgcmVtaXNlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLm1vbnRhbnRSZW1pc2UudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyJz48L2k+PC9hPiA8YSBjbGFzcz0nYnRuIGJ0bi13aGl0ZSBidG4teHMgdXBwZXIgZWRpdF9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtZWRpdCB0ZXh0LXByaW1hcnknPjwvaT48L2E+PC90ZD48L3RyPlwiICsgb2JzZXJ2YXRpb247XHJcbiAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gICAgICAgIGxpbmVObysrO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHZhciByb3dfaW5kZXggPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICB2YXIgY29sX2luZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRldGFpbDogZm9ybURhdGFEZXRhaWxbJCh0aGlzKS5hdHRyKCdpZCcpXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVjYWJfZWRpdF9kZXRhaWxfbmV3XCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAkKCcudGFibGUtZGV0YWlsIHRyJykuZXEocm93X2luZGV4KzEpLmFkZENsYXNzKCd0YWJsZS10ci1zdHlsZScpO1xyXG4gICAgICAgICAgICAkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEocm93X2luZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwidGFibGUtdHItc3R5bGVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKFwiPHRkIGNvbHNwYW49JzEwJz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoXHJcbiAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSkuZmluZChcIi5hcnRpY2xlc1wiKSxcclxuICAgICAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuYXJ0aWNsZXNcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWYtc2VsZWN0ZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8kKFwiLmxvYWQtZXJcIikuZmFkZU91dCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyAkKCcuZGV0X2ZvcicpLmZhZGVJbigyMDApXHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIi50YWJsZS1kZXRhaWwgKyB0YWJsZSBcIikuYWRkQ2xhc3MoJ3JlbW92ZScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgIGFsZXJ0KHJvd19pbmRleCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdmFyIHNsaCA9IHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmVtcHR5KCkuYXBwZW5kKFwiPHRkIHN0eWxlPSdkaXNwbGF5OiBub25lOyc+XCIgKyByZXN1bHQgKyBcIjwvdGQ+XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIubmV3XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGVsZXRlX2VsZW1lbnRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGxpbmVObyA9IDE7XHJcbiAgICB2YXIgY2wgPSBcIlwiO1xyXG4gICAgZm9ybURhdGFEZXRhaWwuc3BsaWNlKCQodGhpcykuYXR0cihcImlkXCIpLCAxKTtcclxuICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keSB0clwiKS5yZW1vdmUoKTtcclxuICAgIGlmIChmb3JtRGF0YURldGFpbC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgJChcIiNjcmVhdGVfY29tbWFuZGVcIikubGFzdCgpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJC5lYWNoKGZvcm1EYXRhRGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChsaW5lTm8gJSAyID09IDApIHtcclxuICAgICAgICAgICAgY2wgPSBcImltcGFpclwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJwYWlyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIHJlbWlzZSA9IHZhbHVlLnJlbWlzZSArIFwiICVcIjtcclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgdHZhID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uID1cclxuICAgICAgICAgICAgICAgIFwiPHRyIGNsYXNzPVwiICtcclxuICAgICAgICAgICAgICAgIGNsICtcclxuICAgICAgICAgICAgICAgIFwiPjx0ZD48L3RkPjx0ZCBjb2xzcGFuPSc5Jz48Yj5JbmZvcm1hdGlvbnMgY29tcGxlbWVudGFpcmVzIDogPC9iPlwiICtcclxuICAgICAgICAgICAgICAgIG9ic2VydmF0aW9uICtcclxuICAgICAgICAgICAgICAgIFwiPC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgXCIgPHRyIGNsYXNzPVwiICtcclxuICAgICAgICAgICAgY2wgK1xyXG4gICAgICAgICAgICBcIj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAoaSArIDEpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+IDx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHR2YSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGRlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXInPjwvaT48L2E+PC90ZD48L3RyPlwiICtcclxuICAgICAgICAgICAgb2JzZXJ2YXRpb247XHJcbiAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbD50Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICBsaW5lTm8rKztcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcImNsaWNrXCIsIFwiLmRldGFpbF9mb3JtXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQoXCIuZXJyb3ItY2xhc3MtdGFiXCIpLnJlbW92ZSgpO1xyXG4gICAgdmFyIGlkID0gJChcIiNfaWRcIikudmFsKCk7XHJcbiAgICB2YXIgZmxhZyA9IDA7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybURhdGFEZXRhaWwubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBmb3JtRGF0YURldGFpbFtpbmRleF0uYXJ0aWNsZUlkID09XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBuYW1lRGV0YWlsICsgXCJfYXJ0aWNsZVwiKS5zZWxlY3QyKFwiZGF0YVwiKVswXS5pZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl9hcnRpY2xlXCIpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5DZSBhcnRpY2xlIGVzdCBkZWphIGV4aXN0ZTwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgICAkKFxyXG4gICAgICAgICAgICAnLmVkaXQtZGV0YWlsW2FydGljbGU9XCInICtcclxuICAgICAgICAgICAgJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl9hcnRpY2xlXCIpLnNlbGVjdDIoXCJkYXRhXCIpWzBdLmlkICtcclxuICAgICAgICAgICAgJ1wiXSdcclxuICAgICAgICApLmF0dHIoXCJhcnRpY2xlXCIpID09XHJcbiAgICAgICAgJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl9hcnRpY2xlXCIpLnNlbGVjdDIoXCJkYXRhXCIpWzBdLmlkICYmXHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLmVkaXQtZGV0YWlsXCIpLmF0dHIoXCJhcnRpY2xlXCIpICE9XHJcbiAgICAgICAgJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl9hcnRpY2xlXCIpLnNlbGVjdDIoXCJkYXRhXCIpWzBdLmlkXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl9hcnRpY2xlXCIpXHJcbiAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5DZSBhcnRpY2xlIGVzdCBkZWphIGV4aXN0ZTwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXJyb3JzX2RldGFpbHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lRGV0YWlsICsgXCJbXCIgKyBlcnJvcnNfZGV0YWlsc1tpbmRleF0ucHJvcGVydHkgKyBcIl1cIjtcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKFxyXG4gICAgICAgICAgICAnW25hbWU9XCInICsgbmFtZURldGFpbCArIFwiW1wiICsgZXJyb3JzX2RldGFpbHNbaW5kZXhdLnByb3BlcnR5ICsgXCJdXCIgKyAnXCJdJ1xyXG4gICAgICAgICkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChlcnJvcnNfZGV0YWlsc1tpbmRleF0uY2F1c2UgPT0gbnVsbCAmJiB2YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICAkKCdbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzX2RldGFpbHNbaW5kZXhdLm1lc3NhZ2UgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZsYWcgPT0gMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciByb3cgPSB7XHJcbiAgICAgICAgcXVhbnRpdGU6ICQoXCIjXCIgKyBuYW1lRGV0YWlsICsgXCJfcXVhbnRpdGVcIikudmFsKCksXHJcbiAgICAgICAgcHJpeHVuaXRhaXJlOiBwYXJzZUZsb2F0KCQoXCIjXCIgKyBuYW1lRGV0YWlsICsgXCJfcHJpeHVuaXRhaXJlXCIpLnZhbCgpKSxcclxuICAgICAgICB0dmE6ICQoXCIjXCIgKyBuYW1lRGV0YWlsICsgXCJfdHZhXCIpLnZhbCgpLFxyXG4gICAgICAgIHJlbWlzZTogJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl9yZW1pc2VcIikudmFsKCksXHJcbiAgICB9O1xyXG4gICAgZm9ybURhdGFEZXRhaWwgPSBbXTtcclxuICAgIGZvcm1EYXRhRGV0YWlsLnB1c2goe1xyXG4gICAgICAgIGlkOiAkKHRoaXMpLnBhcmVudHMoXCIuZWRpdC1kZXRhaWxcIikuYXR0cihcImlkXCIpLFxyXG4gICAgICAgIGFydGljbGVJZDogJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl9hcnRpY2xlXCIpLnNlbGVjdDIoXCJkYXRhXCIpWzBdLmlkLFxyXG4gICAgICAgIHRpdHJlOiAkKFwiI1wiICsgbmFtZURldGFpbCArIFwiX2FydGljbGVcIikuc2VsZWN0MihcImRhdGFcIilbMF0udGV4dCxcclxuICAgICAgICBjb2RlOiAkKFwiI1wiICsgbmFtZURldGFpbCArIFwiX2FydGljbGVcIikuc2VsZWN0MihcImRhdGFcIilbMF0uY29kZSxcclxuICAgICAgICB1bml0ZTogJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl91bml0ZVwiKS5zZWxlY3QyKFwiZGF0YVwiKVswXS50ZXh0LFxyXG4gICAgICAgIHVuaXRlSWQ6ICQoXCIjXCIgKyBuYW1lRGV0YWlsICsgXCJfdW5pdGVcIikuc2VsZWN0MihcImRhdGFcIilbMF0uaWQsXHJcbiAgICAgICAgcXVhbnRpdGU6IHBhcnNlRmxvYXQoJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl9xdWFudGl0ZVwiKS52YWwoKSksXHJcbiAgICAgICAgcHJpeHVuaXRhaXJlOiBwYXJzZUZsb2F0KCQoXCIjXCIgKyBuYW1lRGV0YWlsICsgXCJfcHJpeHVuaXRhaXJlXCIpLnZhbCgpKSxcclxuICAgICAgICB0dmE6IHBhcnNlRmxvYXQoJChcIiNcIiArIG5hbWVEZXRhaWwgKyBcIl90dmFcIikudmFsKCkpLFxyXG4gICAgICAgIHJlbWlzZTogcGFyc2VGbG9hdCgkKFwiI1wiICsgbmFtZURldGFpbCArIFwiX3JlbWlzZVwiKS52YWwoKSksXHJcbiAgICAgICAgb2JzZXJ2YXRpb246ICQoXCIjXCIgKyBuYW1lRGV0YWlsICsgXCJfb2JzZXJ2YXRpb25cIikudmFsKCksXHJcbiAgICAgICAgbW9udGFudFJlbWlzZTogZ2V0UmVtaXNlKHJvdyksXHJcbiAgICAgICAgcHJpeHR0YzogZ2V0UHJpeFRUYyhyb3cpLFxyXG4gICAgfSk7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YURldGFpbCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJkZXRhaWxcIiwgZGF0YSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlZGV0X2luc2VydFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAvKiAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5kZXRhaWxfZm9ybV9lZGl0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3RvYXN0ci53YXJuaW5nKFwiQ2V0IGFydGljbGUgZXhpc3RlIGRlamEgXCIsIFwid2FybmluZyBcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGVsZXRlX2VsZW1lbnRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgZm9ybURhdGFEZXRhaWwuc3BsaWNlKCQodGhpcykuYXR0cihcImlkXCIpLCAxKTtcclxuICAgICQoXCIuZWRpdCAudGFibGUtZGV0YWlsIHRib2R5IHRyOm5vdCguZWRpdC1kZXRhaWwpXCIpLnJlbW92ZSgpO1xyXG4gICAgJC5lYWNoKGZvcm1EYXRhRGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChsaW5lTm8gJSAyID09IDApIHtcclxuICAgICAgICAgICAgY2wgPSBcImltcGFpclwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJwYWlyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIHJlbWlzZSA9IHZhbHVlLnJlbWlzZSArIFwiICVcIjtcclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgdHZhID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uID1cclxuICAgICAgICAgICAgICAgIFwiPHRyIGNsYXNzPVwiICtcclxuICAgICAgICAgICAgICAgIGNsICtcclxuICAgICAgICAgICAgICAgIFwiPjx0ZD48L3RkPjx0ZCBjb2xzcGFuPSc5Jz48Yj5JbmZvcm1hdGlvbnMgY29tcGxlbWVudGFpcmVzIDogPC9iPlwiICtcclxuICAgICAgICAgICAgICAgIG9ic2VydmF0aW9uICtcclxuICAgICAgICAgICAgICAgIFwiPC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgXCIgPHRyPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnRpdHJlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnF1YW50aXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dW5pdGFpcmUudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgcmVtaXNlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLm1vbnRhbnRSZW1pc2UudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyJz48L2k+PC9hPjwvdGQ+PC90cj5cIiArXHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uO1xyXG4gICAgICAgICQoXCIuZWRpdCAudGFibGUtZGV0YWlsIHRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG52YXIgZm9ybURhdGFEZXRhaWxFZGl0UmVtb3ZlID0gW107XHJcbiQoXCIuZWRpdFwiKS5vbihcImNsaWNrXCIsIFwiLmRldGFpbF9mb3JtX2RlbGV0ZVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcInZhbHVlXCIpO1xyXG5cclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlZGV0X2RlbGV0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhID09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZWRpdC1kZXRhaWxbaWQ9XCInICsgJCh0aGlzKS5hdHRyKFwiaWRcIikgKyAnXCJdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zd2FsKHJlc3VsdC5tZXNzYWdlLnRpdGxlLCByZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2Zvcm1EYXRhRGV0YWlsRWRpdFJlbW92ZS5wdXNoKHtpZDogJCh0aGlzKS5hdHRyKCdpZCcpLHRva2VuOiQodGhpcykuYXR0cigndmFsdWUnKX0pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coZm9ybURhdGFEZXRhaWxFZGl0UmVtb3ZlKTtcclxufSk7XHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJjbGlja1wiLCBcIi5kZXRhaWxfZWRpdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgIHZhciByb3dfaW5kZXggPSAkKHRoaXMpLmNsb3Nlc3QoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuaW5kZXgoKTtcclxuICAgIHZhciBjb2xfaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlZGV0X2VkaXRfZGV0YWlsXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAkKCcudGFibGUtZGV0YWlsIHRyJykuZXEocm93X2luZGV4KzEpLmFkZENsYXNzKCd0YWJsZS10ci1zdHlsZScpO1xyXG4gICAgICAgICAgICAkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEocm93X2luZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwidGFibGUtdHItc3R5bGVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKFwiPHRkIGNvbHNwYW49JzEwJz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoXHJcbiAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSkuZmluZChcIi5hcnRpY2xlc1wiKSxcclxuICAgICAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuYXJ0aWNsZXNcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWYtc2VsZWN0ZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8kKFwiLmxvYWQtZXJcIikuZmFkZU91dCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyAkKCcuZGV0X2ZvcicpLmZhZGVJbigyMDApXHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZVwiKSxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIEtURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaC5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICBhbGVydChyb3dfaW5kZXgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIHZhciBzbGggPSBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5lbXB0eSgpLmFwcGVuZChcIjx0ZCBzdHlsZT0nZGlzcGxheTogbm9uZTsnPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pO1xyXG4vKioqKiAqL1xyXG5cclxuJChcIiNjcmVhdGVfY29tbWFuZGVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQoXCIuZm9ybVwiKS5hdHRyKFwibmFtZVwiKTtcclxuXHJcbiAgICAkKFwiI2NyZWF0ZV9jb21tYW5kZVwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cclxuXHJcbiAgICAvL3ZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAvLyB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKCQoXCIjdF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiXCIpWzBdKTtcclxuXHJcblxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgcGFyYW1zID0gJCgnLmZvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgICQuZWFjaChwYXJhbXMsIGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2codmFsLm5hbWUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YURldGFpbClcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGV0YWlsJywgZGF0YSk7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKFwiLmZvcm1cIik7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlY2FiX2luc2VydFwiKSxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyBsLnN0b3AoKTtcclxuICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jdXN0b21FcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChyZXN1bHQuY3VzdG9tRXJyb3JzLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybSAjXCIgKyBpKS5hZnRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNjcmVhdGVfY29tbWFuZGVcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyMnKylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAvL2R1bXAocmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICQoXCIjY3JlYXRlX2NvbW1hbmRlXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIjY3JlYXRlX2NvbW1hbmRlXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZWNhYl9zaG93XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgJChcIiNjcmVhdGVfY29tbWFuZGVcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIubmV3LWFydGljbGUtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICQoXCIucmVtb3ZlLWl0ZW0tZWRpdC1hZGRcIikucmVtb3ZlQ2xhc3MoJ3JlbW92ZS1pdGVtLWVkaXQtYWRkJyk7XHJcbiAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2VuZXJlcigpIHtcclxuICAgICQoXCIuX2dlbmVyZXJfZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgICAgdmFyIGlkID0gJChcImlucHV0W25hbWU9X2lkXVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgLy9hbGVydCgpO1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG5cclxuICAgICAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICAgICAgbC5zdGFydCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZV9nZW5lcmVyX2luc2VydFwiLCB7IGlkOiBpZCwgdHlwZTogXCJmZlwiIH0pLFxyXG4gICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHJlc3VsdC5lcnJvcnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyV2lkdG91dFByb2dyZXNzLndhcm5pbmcodmFsdWUsIFwid2FybmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI015TW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5ub3R2YWxpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcuX2RlbGV0ZV9kZW1tYW5kZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgICB2YXIgdG9rZW4gPSBcInNcIjtcclxuXHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgIHJvdXRlOiBcInV2X2NvbW1hbmRlY2FiX2RlbGV0ZTJcIixcclxuICAgICAgICByZWRpcmVjdGlvbjogXCJ1dl9jb21tYW5kZWNhYl9zaG93XCIsXHJcbiAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgIGlkOiBpZCxcclxuICAgIH07XHJcbiAgICAvLyBhbGVydCgpO1xyXG4gICAgZGVsZXRlQ2FiKG9iaik7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuX2Rlc2FjdGl2ZXJfY29tbWFuZGVcIiwgZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgLy9hbGVydChfYXJyYXlfaWRzKTtcclxuICAgIGlmIChfYXJyYXlfaWRzKSB7XHJcblxyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBkZXNhY3RpdmVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1iYW4nPjwvaT4gT3VpLCBEZXNhY3RpdmVyIVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXZfY29tbWFuZGVfX2Rlc2FjdGl2ZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgX2FycmF5X2lkcyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCIjX2Rlc2FjdGl2ZXJfY29tbWFuZGVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgIC8vYWxlcnQoX2FycmF5X2lkcyk7XHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZGVzYWN0aXZlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYmFuJz48L2k+IE91aSwgRGVzYWN0aXZlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlX19kZXNhY3RpdmVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5wZGZfYnlfY29kZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHdpbmRvdy5vcGVuKFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZWNhYl9vbGRfc3lzXCIsIHtcclxuICAgICAgICBpZDogJCh0aGlzKS5hdHRyKCdkYXRhLWlkJylcclxuICAgIH0pLCAnX2JsYW5rJyk7XHJcbn0pXHJcblxyXG5cclxuJChcIi5ham91dFwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAvLyBhbGVydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1dl9jb21tYW5kZV9maWNoaWVyc1wiLCB7XHJcbiAgICAgICAgICAgIGlkOiAkKHRoaXMpLmNsb3Nlc3QoXCJhXCIpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIi5ib2QxXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3QyX2Rvc3NpZXJzID0gJChcIi5zZWxlY3QyX2Rvc3NpZXJzXCIpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggRG9zc3NpZXJcIixcclxuICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAkKFwic2VsZWN0LnNlbGVjdDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zcHIxXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kMVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuX3VwbG9hZFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgIGFsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2NvbW1hbmRlX2ZpY2hpZXJzXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcubGlzdF9hY3Rpb25zJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uXTpjaGVja2VkXCIpLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gJ19mdXNpb25uZW1lbnQnICYmIF9hcnJheV9pZHMgIT0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZnVzaW9ubmVyIGNlcyBlbnJlZ2lzdHJlbWVudHMgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpICFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm9uICFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1dmNvbW1hbmRlX2dlbmVyZXJfZnVzaW9ubmVtZW50JyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBfYXJyYXlfaWRzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5pbXByaW1lX2RvY3VtZW50JywgZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZigkKHRoaXMpLmF0dHIoXCJkYXRhLXZhbGlkZVwiKSA9PSAwKSAge1xyXG4gICAgICB0b2FzdHIud2FybmluZygnaW1wb3NzaWJsZSBkXFwnaW1wcmltZXIgbGUgZG9jdW1lbnQsIG1hbnF1ZSBkZSBzaWduYXR1cmUhJywgJ0VycmV1cicsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgcmV0dXJuXHJcbiAgfVxyXG4gIHdpbmRvdy5vcGVuKCQodGhpcykuYXR0cignaHJlZicpLCAnX2JsYW5rJyk7XHJcbn0pOyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgSVRFUkFUT1IgPSBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHlcbiAgLy8gTVMgRWRnZSAxOC0gYnJva2VuIHdpdGggYm94ZWQgc3ltYm9sc1xuICB8fCAoSVRFUkFUT1IgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHsgJHBhcnNlRmxvYXQoT2JqZWN0KElURVJBVE9SKSk7IH0pKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0odG9TdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiBjaGFyQXQodHJpbW1lZFN0cmluZywgMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQnKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0IH0sIHtcbiAgcGFyc2VGbG9hdDogJHBhcnNlRmxvYXRcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==