(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tachatdemandeinternecab"],{

/***/ "./assets/js/components/module_achat/tachatdemandeinternecab.js":
/*!**********************************************************************!*\
  !*** ./assets/js/components/module_achat/tachatdemandeinternecab.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery, module) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



























var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.setRoutingData(routes);






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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_find_article_term", {
        selected: att,
        entity: window.element.attr("data-entity"),
        column: window.element.attr("data-column")
      })
    }).then(function (data) {
      // console.log(data)
      window.element.prepend('<option selected=""></option>').select2({
        //allowClear: true,
        language: "fr",
        data: data.results,
        minimumResultsForSearch: -1,
        dropdownCssClass: window.att,
        width: '100%'
      }).val(att).trigger("change");
      $(".load-er").fadeOut(70).remove();
      $(".det_for").fadeIn(70);
    });
  } else {
    // toastr.warning('impossible de charger l\'entiter', 'Erreur', {timeOut: 4000})
  }
  //apply to select2
  window.element.on("select2:open", function (e) {
    // console.log($(this))

    window.element = $(this);
    $(".tt").val(window.search);

    //alert()
    $(".ttp").remove();
    $(".select2-search--hide").after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
    $(".tt").typeWatch({
      highlight: false,
      wait: 100,
      captureLength: 2,
      callback: function callback(valuennn, e) {
        //console.log(e)
        $(".select2-results__option").hide();
        $(".select2-results").prepend('<p class="select2-results__option">Rechercher…</p>');
        window.search = valuennn;
        if (window.element.attr("data-entity")) {
          $.ajax({
            dataType: "json",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_find_article_term", {
              term: valuennn,
              selected: att,
              entity: window.element.attr("data-entity"),
              column: window.element.attr("data-column")
            }),
            success: function success(result, textStatus, errorThrown) {
              if (valuennn == $(".tt").val()) {
                window.element.empty().prepend('<option selected=""></option>').select2({
                  language: "fr",
                  allowClear: true,
                  minimumResultsForSearch: -1,
                  data: result.results
                }).val(att).trigger("change");
                window.element.select2("open");
                //alert(this.value)
                //alert(valuennn)

                $(".tt").val(window.search);
                // $(".tt").focus();
                document.querySelector('.tt').focus();
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
  window.element.on("select2:close", function (e) {
    $(".tt").val(window.search);
    $("#t_achatdemandeinternedet_quantite").focus();
  });
  window.element.on("select2:select", function (e) {
    // alert()
    var data = e.params.data;
    // console.log(data);
    $(".prixunitaire").val(data.prixAchat);
    $(".tva").val(data.tva);
    $(".remise").val(data.remise);
    $(".select2_unite").val(data.unite).trigger("change");
  });
  $("body").on("click", ".select2-container", function () {
    //$('.select2-search--hide').after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
    $(".tt").trigger("focus");
  });
}
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
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_list2"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  serverSide: true,
  // scrollX: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "3%",
    className: 'td-check pd-achat',
    name: 'tab.id'
  }, {
    orderable: true,
    width: "6%",
    className: 'pd-achat',
    name: 'tab.code'
  }, {
    orderable: true,
    width: "5%",
    className: 'pd-achat',
    name: 'tab.date_demande'
  }, {
    orderable: true,
    width: "20%",
    className: 'td-desciption pd-achat',
    name: 'tab.description'
  },
  // {orderable: true, width: "10%", name: 'tab.fournisseur'},
  {
    orderable: true,
    width: "10%",
    className: 'td-type pd-achat',
    name: 'tab.type'
  }, {
    orderable: true,
    width: "6%",
    className: 'pd-achat',
    name: 'devis'
  }, {
    orderable: true,
    width: "5%",
    className: 'td-ht pd-achat',
    name: 'tab.ht'
  }, {
    orderable: false,
    width: "5%",
    className: 'td-tva pd-achat',
    name: 'tab.tva'
  }, {
    orderable: false,
    width: "5%",
    className: 'td-ttc pd-achat',
    name: 'tab.ttc'
  }, {
    orderable: true,
    width: "5%",
    className: 'td-statut pd-achat',
    searchable: false
  }, {
    orderable: true,
    width: "5%",
    className: 'td-statut pd-achat',
    name: 'tab.position_actuel'
  }, {
    orderable: true,
    searchable: false,
    width: "5%"
  }],
  columnDefs: [{
    searchable: false,
    targets: 11,
    render: function render(t, a, l, s) {
      var data = "";
      //console.log(t)
      t.forEach(function (element) {
        var link = "";
        if (element._route_link) {
          link = "href='" + element._route_link + "'";
        }
        data = data + "<li><a data-transition='" + element.name + "' data-id='" + element.id + "' " + link + "  name='" + element.name + "' id_row='" + element.id_row + "' class='dropdown-item " + element["class"] + " " + element.idCs + "' ><i class='fa " + element.icon + "' ></i> " + element.titre + "</a></li>";
      });
      return '\t<div class="dropdown dropdown-inline center"> \t <a href="javascript:;" class="" data-toggle="dropdown"> \t <span class="svg-icon svg-icon-md"> \t  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-color"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect x="0" y="0" width="24" height="24"/> <circle fill="#000000" cx="5" cy="12" r="2"/> <circle fill="#000000" cx="12" cy="12" r="2"/> <circle fill="#000000" cx="19" cy="12" r="2"/> </g></svg> \t </span> \t </a> <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right"> \t <ul class="dropdown-menu show drp-list" x-placement="bottom-start"> <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">Choisir operation :</li>' + data + ' </ul> </div> \t</div>\t';
    }
  }, {
    targets: 10,
    className: 'td-ord'
  }],
  /*dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: [*/
  /*"columnsToggle",
  {
      text: "Restaurer",
      className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
      action: function (e, dt, node, config) {
          table.state.clear();
          window.location.reload();
      },
  },*/
  /*{
      extend: "excel",
      text: 'Exporter',
      exportOptions: {
          columns: ":visible",
          rows: ":visible",
          format: {
              body: function (data, row, column, node) {
                  data = $('<p>' + data + '</p>').text();
                  return $.isNumeric(data.replace(',', '.')) ? data.replace(',', '.') : data;
              }
          }
      },
  }*/
  /* ],*/
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("datatables_langue"),
    processing: true,
    searchPlaceholder: "RECHERCHER",
    search: ""
  }
  // fixedHeader: true,
});

table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_31__["CustomSearchText"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_31__["CustomSearchCheckbox"](api, [0], []);
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_show", {
    id: $(this).closest("tr").attr("id")
  });
  window.location.href = url;
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});

//article

$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true
});
$(".new , .edit").on("change", ".marches", function (e) {
  var $form = $(this).closest("form");
  getSubSelect(".sousmarche", false, "");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function success(html) {
      getSubSelect(".sousmarche", true, html);
      $(".sel2").select2();
    }
  });
  e.preventDefault();
});

//$(".new , .edit").on("change", ".compteMasse", function (e) {
//    getSubSelect(".compteRubrique,.comptePoste,.compte", false, "");
//    var $form = $(this).closest("form");
//    // Simulate form data, but only include the selected sport value.
//    var data = {};
//    data[$(this).attr("name")] = $(this).val();
//    $.ajax({
//        url: $form.attr("action"),
//        type: $form.attr("method"),
//        data: data,
//        success: function (html) {
//            getSubSelect(".compteRubrique,.comptePoste,.compte", true, html);
//            $(".sel2").select2();
//        },
//    });
//    e.preventDefault();
//});
//
//$(".new , .edit").on("change", ".compteRubrique", function () {
//    getSubSelect(".comptePoste,.compte", false, "");
//    var $form = $(this).closest("form");
//    var data = {};
//    data[$(this).attr("name")] = $(this).val();
//    data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
//    // Submit data via AJAX to the form's action path.
//    $.ajax({
//        url: $form.attr("action"),
//        type: $form.attr("method"),
//        data: data,
//        success: function (html) {
//            //   console.log(html);
//            getSubSelect(".comptePoste,.compte", true, html);
//            $(".sel2").select2();
//        },
//    });
//});
//
//$(".new , .edit").on("change", ".comptePoste", function () {
//    getSubSelect(".compte", false, "");
//    var $form = $(this).closest("form");
//    var data = {};
//    data[$(this).attr("name")] = $(this).val();
//    data[$(".compteMasse").attr("name")] = $(".compteMasse").val();
//    data[$(".compteRubrique").attr("name")] = $(".compteRubrique").val();
//    // Submit data via AJAX to the form's action path.
//    $.ajax({
//        url: $form.attr("action"),
//        type: $form.attr("method"),
//        data: data,
//        success: function (html) {
//            getSubSelect(".compte", true, html);
//            $(".sel2").select2();
//        },
//    });
//});

$("#_delete").click(function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment supprimer cette enregistrement ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "DELETE",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_multiple_delete"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              $('#grid').DataTable().ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_index");
              window.location.href = url;
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
  e.preventDefault();
});
$("body").on("click", ".duppliquer", function (e) {
  //alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("id_row"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment Duppliquer cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_multiple_duppliquer"),
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
$("#_duppliquer").click(function (e) {
  //alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment Duppliquer cette demande ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-copy'></i> Oui, Duppliquer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_multiple_duppliquer"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
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
  }
});
$("#_desactiver").click(function (e) {
  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment desactiver cette demande  ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Desactiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_precommande_demmande_desactiver"),
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
  e.preventDefault();
});
$("body").on("click", "._desactiver_precommande", function (e) {
  //alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("id_row"));
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_precommande_demmande_desactiver"),
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
$("body").on("click", "._annuler_precommande", function (e) {
  //alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("id_row"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment annuler cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-ban'></i> Oui, Annuler!",
      cancelButtonText: "<i class='fa fa-times'></i> No!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_precommande_demmande_annuler"),
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
$("body").on("click", "._delete_demmande", function (e) {
  //alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("id_row"));
  if (_array_ids) {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_multiple_delete"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              $('#grid').DataTable().ajax.reload();
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
  }
});
var formDetails = [];
var arr = [];

//  formDetails.push({
//             articleId: '1',
//             titre: 'ARMOIRE  HAUTE A RIDEAUX ESCAMOTABLES',
//             code: 'ART000001',
//             unite: '100 ML',
//             uniteId: '1',
//             quantite: '20',
//             prixunitaire: '100',
//             tva: '0',
//             remise: '10',
//             observation: 'test ziko',
//             montantRemise: '0',
//             prixttc: '0',
// });

$('#t_achatdemandeinternecab_marche').on('select2:select', function (e) {
  // Do something
  // alert('test');
  $(this).val();
  $.ajax({
    type: "GET",
    url: '/achat/precommande/' + $(this).val() + '/detail/marche',
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.detMarches.length != 0) {
        $("#create_demande").removeClass("disabled");
      } else {
        $("#create_demande").last().addClass("disabled");
      }
      $(".det_for_new").html('');
      $(".det_for_new").append(result.html);
      formDetails = [];
      result.detMarches.some(function (element, index, _arr) {
        formDetails.push({
          articleId: element.articleId,
          titre: element.titre,
          code: element.code,
          unite: '',
          uniteId: '',
          quantite: '0',
          prixunitaire: element.prixunitaire,
          tva: element.tva,
          remise: '0',
          observation: element.observation,
          montantRemise: '0',
          prixttc: '0',
          qtReste: element.qtReste,
          marcheDet_Id: element.marcheDet
        });
      });
      console.log(formDetails);
      console.log(result.detMarches);
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      l.stop();
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
      button.prop("disabled", false);
    }
  });
});
$("body").on("input", ".det_Qt", function (event) {
  // This function will be called whenever the value of the input changes
  var inputVal = $(this).val();
  var MarcheDet_Id = $(this).attr('data-parent');
  formDetails.some(function (element, index, _arr) {
    if (element.marcheDet_Id === parseInt(MarcheDet_Id)) {
      element.quantite = inputVal;
    }
  });
});
$("#create_demande").click(function (e) {
  var button = $(this);
  button.prop("disabled", true);
  var form_name = $(".form").attr("name");

  // var warning = 'la quantité demandée doit être inferieur ou egale à la quantité reste';
  // var test_qt = false;

  // formDetails.some(function(element, index, _arr) {
  //     if (element.qtReste < element.quantite ) {
  //          test_qt= true;
  //     }
  // });

  // if(test_qt){
  //      toastr.warning( warning, 'warning', {timeOut: 4000, });
  //      return false;
  // }

  // formDetails.some(function(element, index, _arr) {
  //     if (parseInt(element.quantite) < 1 ) {
  //         formDetails.splice(index, 1);
  //     }
  // });

  // console.log(formDataDetail);
  // console.log('zak');
  // return false;
  //var params = $('.form').serializeArray();
  // var dta = new FormData($("#t_achatdemandeinternecab")[0]);

  var formData = new FormData();
  var params = $('.form').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
    //  console.log(val.name);
  });

  var articles = JSON.stringify(allArticles);
  var data = JSON.stringify(formDetails);
  formData.append('detail', data);
  formData.append('allArticles', articles);
  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_insert"),
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

        // $('#'+)
      } else if (result.errors) {
        //dump(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
        button.prop("disabled", false);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        button.prop("disabled", false);
      } else if (result.dossierEmpty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        button.prop("disabled", false);
      } else if (result.data) {
        // alert(result.data.id);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_show", {
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
      button.prop("disabled", false);
    }
  });
  e.preventDefault();
});
$("#edit_demande").click(function (e) {
  var form_name = $(".form").attr("name");

  //var params = $('.form').serializeArray();
  // var dta = new FormData($("#t_achatdemandeinternecab")[0]);

  var formData = new FormData();
  var params = $('.form').serializeArray();
  $.each(params, function (i, val) {
    formData.append(val.name, val.value);
    //  console.log(val.name);
  });

  var id = formData.get("_id");
  var selector = $(".form");
  var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_update", {
      id: id
    }),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
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
var array_detail = [];
var errors_details = [];
var formDataDetail = [];
var nameDetail = "";
var editColumn = null;
var editArticleColumn = null;
document.addEventListener('DOMContentLoaded', function () {
  errors_details = jQuery.parseJSON($('.errors_details').attr('errors'));
  nameDetail = $('.errors_details').attr('name');
  $('.errors_details').remove();

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
$(".new").on("click", ".delete_element", function (e) {
  formDataDetail.splice($(this).attr("id"), 1);
  $(".new .table-detail > tbody tr").remove();
  if (formDataDetail.length < 1) {
    $("#create_demande").last().addClass("disabled");
  }
  var lineNo = 1;
  var cl = "";
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
    var my_row = " <tr class=" + cl + "><td>" + (i + 1) + "</td><td style='text-align:center>" + value.code + " - " + value.titre + "</td><td style='text-align:center>" + value.unite + "</td><td style='text-align:center > " + value.quantite + "</td> <td style='text-align:center>" + value.prixunitaire.toFixed(2) + "</td><td style='text-align:center>" + tva + "</td><td style='text-align:center>" + remise + "</td><td style='text-align:center>" + value.montantRemise.toFixed(2) + "</td><td style='text-align:center>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" + i + "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
    $(".new .table-detail>tbody").append(my_row);
    lineNo++;
  });
});

// -----------

var allArticles = [];
var AricleSelected = "";
var action = "ajouter";
function remplirTable() {
  var tr = "";
  allArticles.some(function (element, index, _arr) {
    // console.log(element,'najim');
    var Prix_Qte = parseFloat(element.prixUntaire) * parseFloat(element.qte);
    var Prix_Tva = Prix_Qte * parseFloat(element.tva) / 100; // Calculate TVA amount
    var Prix_Remise = parseFloat(element.prixUntaire) * parseFloat(element.remise);
    var Montant = Prix_Qte + Prix_Tva - Prix_Remise;
    if (element.AricleSelected === AricleSelected) {
      // console.log(element.article, element);
      tr = tr + '<tr style="d-flex align-items-center"  id="tr_actions_' + index + '">' + '<td class="article text-center">' + element.article + '</td>' + '<td class="qte text-center">' + element.qte + '</td>' + '<td class="prixUntaire text-center">' + element.prixUntaire + '</td>' + '<td class="tva text-center">' + element.tva + '</td>' + '<td class="remise text-center">' + element.remise + '</td>' + '<td class="montant text-center">' + Montant + '</td>' + '<td class="iban text-center">' + element.iban + '</td>' + '<td class="swift text-center">' + element.swift + '</td>' + '<td class="banque text-center">' + element.banque + '</td>' + '<td class="adresse text-center">' + element.adresse + '</td>' + '<td style="width: 11% ;" class="text-center ua_technique" >' + '<a class="btn btn-white btn-xs upper  ua_edit"   id="' + index + '"><i class="fa fa-edit text-primary "></i></a> ' + '<a class="btn btn-white btn-xs upper  ua_suppimer_ligne" id="' + index + '"><i class="fa fa-trash text-danger "></i></a> </td>' + '</tr>';
    }
    // console.log(element);
    // console.log(iban);
  });

  $(".waves-ripple").remove();
  var formTr = $('tbody > #ua_technique_form').html();
  $('#ua_technique_table > tbody').html(tr);
  $('#ua_technique_table > tbody').append('<tr id="ua_technique_form">' + formTr + '</tr>');
}
$("body").on("click", ".ua_technique > .add_form_ua", function (e) {
  verifierForm();
  if (verifierForm() != "") {
    return false;
  }
  if (action == "ajouter") {
    var Article = {};
    Article['article'] = $('#ua_technique_det_article').val();
    Article['qte'] = $('#ua_technique_det_qte').val();
    Article['prixUntaire'] = $('#ua_technique_det_prixUntaire').val();
    Article['tva'] = $('#ua_technique_det_tva').val();
    Article['remise'] = $('#ua_technique_det_remise').val();
    Article['remise'] = $('#ua_technique_det_remise').val();
    Article['iban'] = $('#ua_technique_det_iban').val();
    Article['swift'] = $('#ua_technique_det_swift').val();
    Article['banque'] = $('#ua_technique_det_banque').val();
    Article['adresse'] = $('#ua_technique_det_adresse').val();
    Article['AricleSelected'] = AricleSelected;
    allArticles.push(Article);
  } else {
    allArticles[action].article = $('#ua_technique_det_article').val();
    allArticles[action].qte = $('#ua_technique_det_qte').val();
    allArticles[action].prixUntaire = $('#ua_technique_det_prixUntaire').val();
    allArticles[action].tva = $('#ua_technique_det_tva').val();
    allArticles[action].remise = $('#ua_technique_det_remise').val();
    allArticles[action].iban = $('#ua_technique_det_iban').val();
    allArticles[action].swift = $('#ua_technique_det_swift').val();
    allArticles[action].banque = $('#ua_technique_det_banque').val();
    allArticles[action].adresse = $('#ua_technique_det_adresse').val();
    action = "ajouter";
  }
  remplirTable();
  $('.ua_confirmer_annuler').fadeIn();
  $('.fermer_ua_technique_det').fadeOut();
});
$("body").on('click', '.ua_supprimer_article', function () {
  for (var i = 0; i < allArticles.length; i++) {
    if (allArticles[i].AricleSelected === AricleSelected) {
      allArticles.splice(i, 1);
      i--;
    }
  }
  remplirTable();
  $('.ua_confirmer_annuler').fadeOut();
  $('.fermer_ua_technique_det').fadeIn();
});
$("body").on('click', '.ua_confirmer', function () {
  // $('.ua_success').fadeIn();
  // setTimeout(function () {
  //     $('.ua_success').fadeOut();
  // }, 3000); 
  toastr.success('vous avez bien confirmé', 'Confirmation', {
    timeOut: 4000
  });
  $("#ModalDocume").modal("hide");
  $('.fermer_ua_technique_det').fadeOut();
});
$("body").on('click', '.ua_edit', function () {
  action = $(this).attr('id');
  remplirTable();
  var idLine = $(this).attr('id');
  var Article = allArticles[idLine];
  $('#ua_technique_det_article').val(Article.article);
  $('#ua_technique_det_qte').val(Article.qte);
  $('#ua_technique_det_prixUntaire').val(Article.prixUntaire);
  $('#ua_technique_det_tva').val(Article.tva);
  $('#ua_technique_det_remise').val(Article.remise);
  $('#ua_technique_det_iban').val(Article.iban);
  $('#ua_technique_det_swift').val(Article.swift);
  $('#ua_technique_det_banque').val(Article.banque);
  $('#ua_technique_det_adresse').val(Article.adresse);
  var formTr = $('tbody > #ua_technique_form').get();
  $('#tr_actions_' + idLine).before(formTr);
  $('#tr_actions_' + idLine).remove();
});
$("body").on('click', '.ua_suppimer_ligne', function () {
  var idLine = $(this).attr('id');
  allArticles.some(function (element, index, _arr) {
    if (index == idLine) {
      allArticles.splice(index, 1);
    }
  });
  remplirTable();
});
function verifierForm() {
  var message = "";
  $("#ua_technique_form input").each(function () {
    var element = $(this);
    if (element.val() == "") {
      message = message + " <i class='fa fa-exclamation-triangle'></i> veuillez remplir le champs " + $(this).attr('class').split(' ').pop() + "<br>";
      $('.ua_alert_danger').html(message);
    }
  });
  if (message == "") {
    $("#ua_technique_form input").each(function () {
      var element = $(this);
      if (element.attr('id') != 'ua_technique_det_article') {
        var val = element.val();
        var floatValues = /[+-]?([0-9]*[.])?[0-9]+/;
        // console.log(val.match(floatValues));
        if (val.match(floatValues) && !isNaN(val)) {} else {
          message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " + $(this).attr('class').split(' ').pop() + "<br>";
          $('.ua_alert_danger').html(message);
        }
      }
    });
  }
  if (message != "") {
    $('.ua_alert_danger').fadeIn();
  } else {
    $('.ua_alert_danger').fadeOut();
  }
  return message;
}
$("body").on('click', '.importer_canvas', function () {
  $('#ua_import_modal').modal('show');
});
$("body").on('click', '.fermer_ua_import_modal', function () {
  $('#ua_import_modal').modal('hide');
});
$('#file').on('change', function () {
  // console.log($(this).val());
  var value = $(this).val().split(".");
  var extention = value[value.length - 1];
  if (extention != 'xlsx') {
    toastr.warning("veuillez choisir un fichier csv", "warning ", {
      timeOut: 4000
    });
  }
});

// alert('ziko');

$('#ua_import_form').on('submit', function (event) {
  event.preventDefault();
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("import_ua_det"),
    method: "POST",
    data: new FormData(this),
    dataType: 'json',
    contentType: false,
    cache: false,
    processData: false,
    success: function success(result) {
      // console.log(result);
      if (result.hasOwnProperty('message')) {
        if (result.message.title === "err") {
          toastr.warning("Warning", result.message.text, {
            timeOut: 4000
          });
        }
      } else {
        result.some(function (element, index, _arr) {
          var Article = {};
          // console.log(element);
          Article['article'] = element.article;
          Article['qte'] = element.qte;
          Article['prixUntaire'] = element.prixUntaire;
          Article['tva'] = element.tva;
          Article['remise'] = element.remise;
          Article['iban'] = element.iban;
          Article['swift'] = element.swift;
          Article['banque'] = element.banque;
          Article['adresse'] = element.adresse;
          Article['AricleSelected'] = AricleSelected;
          // console.log(Article);
          allArticles.push(Article);
          remplirTable();
        });
        $('#ua_import_modal').modal('hide');
      }
      $('#file').val('');
    }
  });
});
function verifierFloat() {

  // var message = "";
  // $("#ua_technique_form input").each(function() {
  //     var element = $(this);
  //     if (element.attr('id') != 'ua_technique_det_article'){
  //         if(isNaN(parseFloat(element.val()))  ){
  //             message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " +$(this).attr('class').split(' ').pop() + "<br>";
  //             $('.ua_alert_danger').html(message);
  //         }
  //     }

  // });
  // $("#ua_technique_form input").each(function() {
  //     var element = $(this);
  //     if (element.attr('id') != 'ua_technique_det_article'){
  //         var val = element.val();
  //         console.log(element.val());
  //         var floatValues =  /[+-]?([0-9]*[.])?[0-9]+/;
  //         if (val.match(floatValues) && !isNaN(val)) {
  //         }else{
  //             message = message + "<i class='fa fa-exclamation-triangle'></i> veuillez saisir un nombre dans le champs " +$(this).attr('class').split(' ').pop() + "<br>";
  //             $('.ua_alert_danger').html(message);

  //         }
  //     }

  // });

  // if(message != ""){
  //     $('.ua_alert_danger').fadeIn();
  // }else{
  //     $('.ua_alert_danger').fadeOut();
  // }
  //  return message;
}
var articlesDet = [];

// -----------

$(".new").on("click", ".detail_form", function (e) {
  var mybutton = $(this);
  var test = false;

  //alert();
  AricleSelected = $('#' + nameDetail + '_article').select2('data')[0].id;

  // if(AricleSelected == 1 && parseFloat($('#' + nameDetail + '_prixunitaire').val()) > 1) {
  //     toastr.error(
  //         'Vous ne pouvez pas passer 1 DH',
  //         'Erreur',
  //         { timeOut: 4000 }
  //     );
  //     return;
  // } 

  var unite = $('#select2-t_achatdemandeinternedet_unite-container').attr('title');

  // alert(nameDetail);

  // return false;

  $('.error-class-tab').remove();
  var flag = 0;
  for (var index = 0; index < formDataDetail.length; index++) {
    if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id && editArticleColumn != formDataDetail[index].articleId) {
      // return $('#' + nameDetail + '_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
      toastr.error('Ce article est deja existe', 'Erreur', {
        timeOut: 4000
      });
      return;
    }
  }
  for (var _index = 0; _index < errors_details.length; _index++) {
    var name = nameDetail + '[' + errors_details[_index].property + ']';
    var value = $('[name="' + nameDetail + '[' + errors_details[_index].property + ']' + '"]').val();
    if (errors_details[_index].cause == null && value == '') {
      flag = 1;
      // $('[name="' + name + '"]').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[index].message + "</span></span></span>"));
      toastr.error(errors_details[_index].message, 'Erreur', {
        timeOut: 4000
      });
    }
  }
  if (flag == 1) {
    return false;
  }
  alert('ziko');
  if (unite == 'E') {
    $("#ModalDocume").modal("show");
    $('.ua_confirmer_annuler').fadeOut();
    articlesDet.push(AricleSelected);
    remplirTable();
  } else {
    articlesDet.some(function (element, index, _arr) {
      if (element == AricleSelected) {
        $("#ModalDocume").modal("show");
        $('.ua_confirmer_annuler').fadeOut();
      }
    });
    remplirTable();
  }
  allArticles.some(function (element, index, _arr) {
    if (element.AricleSelected == AricleSelected) {
      $('.ua_confirmer_annuler').fadeIn();
    }
  });
  var row = {
    quantite: $('#' + nameDetail + '_quantite').val(),
    prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
    tva: $('#' + nameDetail + '_tva').val(),
    remise: $('#' + nameDetail + '_remise').val()
  };
  if (editColumn != null) {
    var myselect = mybutton.parent().parent().find(".unite_edit :selected");
    formDataDetail[editColumn] = {
      articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
      titre: $('#' + nameDetail + '_article').select2('data')[0].text,
      code: $('#' + nameDetail + '_article').select2('data')[0].code ? $('#' + nameDetail + '_article').select2('data')[0].code : code,
      unite: myselect.text(),
      uniteId: myselect.val(),
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
  // console.log(formDataDetail)
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
    var my_row = " <tr style='text-align:start'  class=" + cl + "><td>" + (i + 1) + "</td><td style='text-align:start' >" + value.articleId + "</td><td style='text-align:start' >" + value.code + " - " + value.titre + "</td><td style='text-align:center' >" + value.unite + "</td><td style='text-align:center' >" + value.quantite + "</td> <td style='text-align:center' >" + value.prixunitaire.toFixed(2) + "</td><td style='text-align:center' >" + tva + "</td><td style='text-align:center' >" + remise + "</td><td style='text-align:center' >" + value.montantRemise.toFixed(2) + "</td><td style='text-align:center' >" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" + i + "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
    $(".new .table-detail > tbody").append(my_row);
    lineNo++;

    // console.log(my_row);
  });

  $("#create_demande").removeClass("disabled");
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
    var my_row = " <tr class=" + cl + "><td>" + (i + 1) + "</td><td style='text-align:start' >" + value.articleId + "</td><td style='text-align:start'>" + value.code + " - " + value.titre + "</td><td style='text-align:center'>" + value.unite + "</td><td style='text-align:center'>" + value.quantite + "</td> <td style='text-align:center'>" + value.prixunitaire.toFixed(2) + "</td><td style='text-align:center'>" + tva + "</td><td style='text-align:center'>" + remise + "</td><td style='text-align:center'>" + value.montantRemise.toFixed(2) + "</td><td style='text-align:center'>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" + i + "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_edit_detail_new", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_find_article"),
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

//$('.table-detail tbody tr:not(.edit-detail)').remove();

$(".edit").on("click", ".detail_form", function (e) {
  var mybutton = $(this);
  $('.error-class-tab').remove();
  var id = $("#_id").val();
  var flag = 0;
  for (var index = 0; index < formDataDetail.length; index++) {
    if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id) {
      // return $('#' + nameDetail + '_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
      toastr.error('Ce article est deja existe', 'Erreur', {
        timeOut: 4000
      });
      return;
    }
  }
  if ($('.edit-detail[article="' + $('#' + nameDetail + '_article').select2('data')[0].id + '"]').attr('article') == $('#' + nameDetail + '_article').select2('data')[0].id && $(this).parents('.edit-detail').attr('article') != $('#' + nameDetail + '_article').select2('data')[0].id) {
    // return $('#' + nameDetail + '_article').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>"));
    toastr.error('Ce article est deja existe', 'Erreur', {
      timeOut: 4000
    });
    return;
  }
  for (var _index2 = 0; _index2 < errors_details.length; _index2++) {
    var name = nameDetail + '[' + errors_details[_index2].property + ']';
    var value = $('[name="' + nameDetail + '[' + errors_details[_index2].property + ']' + '"]').val();
    if (errors_details[_index2].cause == null && value == '') {
      flag = 1;
      // $('[name="' + name + '"]').parent().append(("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[index].message + "</span></span></span>"));
      toastr.warning(errors_details[_index2].message, 'Erreur', {
        timeOut: 4000
      });
    }
  }
  if (flag == 1) {
    select2 - search__field;
    return false;
  }
  var row = {
    quantite: $('#' + nameDetail + '_quantite').val(),
    prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
    tva: $('#' + nameDetail + '_tva').val(),
    remise: $('#' + nameDetail + '_remise').val()
  };
  formDataDetail = [];
  var myselect = mybutton.parent().parent().find(".unite_edit :selected");
  formDataDetail.push({
    id: $(this).parents('.edit-detail').attr('id'),
    articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
    titre: $('#' + nameDetail + '_article').select2('data')[0].text,
    code: $('#' + nameDetail + '_article').select2('data')[0].code,
    unite: myselect.text(),
    uniteId: myselect.val(),
    quantite: parseFloat($('#' + nameDetail + '_quantite').val()),
    prixunitaire: parseFloat($('#' + nameDetail + '_prixunitaire').val()),
    tva: parseFloat($('#' + nameDetail + '_tva').val()),
    remise: parseFloat($('#' + nameDetail + '_remise').val()),
    observation: $('#' + nameDetail + '_observation').val(),
    montantRemise: getRemise(row),
    prixttc: getPrixTTc(row)
  });
  var formData = new FormData();
  var data = JSON.stringify(formDataDetail);
  formData.append('detail', data);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_insert", {
      id: id
    }),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      //  console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
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
  $('.edit .table-detail tbody tr:not(.edit-detail)').remove();
  var cl = "";
  var lineNo = 1;
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
    var my_row = " <tr class=" + cl + "><td>" + "</td><td style='text-align:start' >" + value.articleId + "</td><td style='text-align:center'>" + value.code + " - " + value.titre + "</td><td style='text-align:center'>" + value.unite + "</td><td style='text-align:center'>" + value.quantite + "</td> <td style='text-align:center'>" + value.prixunitaire.toFixed(2) + "</td><td style='text-align:center'>" + tva + "</td><td style='text-align:center'>" + remise + "</td><td style='text-align:center'>" + value.montantRemise.toFixed(2) + "</td><td style='text-align:center'>" + value.prixttc.toFixed(2) + "</td><td><a class='btn btn-white btn-xs upper delete_element' id=" + i + "><i class='fa fa-trash text-danger'></i></a> <a class='btn btn-white btn-xs upper edit_element' id=" + i + "><i class='fa fa-edit text-primary'></i></a></td></tr>" + observation;
    $(".edit .table-detail tbody").append(my_row);
  });
});
var formDataDetailEditRemove = [];
$('.edit').on('click', '.detail_form_delete', function (e) {
  var id = $(this).attr('id');
  var token = $(this).attr('value');
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_delete", {
          id: id,
          token: token
        }),
        data: {},
        processData: false,
        contentType: false,
        success: function success(result) {
          //   console.log(result);
          if (result.data == "deleted") {
            $('.edit-detail[id="' + $(this).attr('id') + '"]').remove();
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
/*
 *
 * Edit operations
 *
 */

$(".personalise").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_personalise", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.data) {
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
$(".ajout").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_upload", {
      id: $(this).closest("a").attr("id")
    }),
    success: function success(result) {
      $(".bod1").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique1").modal("show");
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_upload", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_delete", {
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

/*
 *
 * afficher la formulaire de modification  d'un nouveau article
 *
 */
$(".edit").on("click", ".detail_edit", function (e) {
  //alert($(this).attr('id'))
  var id = $(this).attr('id');
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_edit_detail", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_find_article"),
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

  e.preventDefault();
});
$(".new").on("click", ".detail_edit", function (e) {
  var id = $(this).attr('id');
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_edit_detail", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_find_article"),
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

  e.preventDefault();
});

/*
 *
 * Enregistrer  la formulaire de modification  d'article
 *
 */

$(".edit").on("submit", ".detail_form", function (e) {
  var dta = new FormData(this);
  //console.log(dta);
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_update_detail", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //  console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
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

/*afficher la formulaire d'ajout d'un nouveau article */

//$('.edit-new-article-btn').click(function (e) {
//    $('.edit-new-article').show();
//    $(this).hide();
//    e.preventDefault();
//});

$(".new-article-btn").click(function (e) {
  $(".remove-item-edit-add").removeClass('remove-item-edit-add');
  $(this).hide();
  e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$(".edit").on("submit", ".detail_form_add_article", function (e) {
  //alert("hi");
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = $("#_id").val();
  var selector = $(this);

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_insert", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //  console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
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
$(".show-me").click(function (e) {
  $(".actions").toggleClass("sidebar-open");
  e.preventDefault();
});
$(".actions").on("click", ".close-me", function (e) {
  //$('.close-me').click(function (e){
  $(".actions").removeClass("sidebar-open");
  e.preventDefault();
});

/*
 *
 * afficher la formulaire de modification  d'un nouveau article
 *
 */

$("#grid tbody").on("click", "tr", function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    table.$("tr.selected").removeClass("selected");
    $(this).addClass("selected");
  }
});
var mem = $("#data_1 .input-group.date").datepicker({
  todayBtn: "linked",
  keyboardNavigation: false,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true
});
var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 20);
$("#selector").datepicker("setDate", yearsAgo);
$(".actions").on("submit", ".form_statut", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_statut", {
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
            $(".form_statut #" + form_name + "_" + columnName[1]).after(
            // "<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" +
            // val.title +
            // "</span></span></span>"
            toastr.error(val.title, 'Erreur', {
              timeOut: 4000
            }));
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
$(document).on("click", "._t_affaire_quick", function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_affaire_new_quick"),
    success: function success(result) {
      $(".actions").html(result);
      $(".actions").toggleClass("sidebar-open");
    }
  });
  e.preventDefault();
});
$(document).on("submit", ".form_t_affaire_quick", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var selector = $(this).attr("class").split(" ")[0];
  $.ajax({
    type: "POST",
    data: dta,
    processData: false,
    contentType: false,
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_affaire_new_quick_insert"),
    success: function success(result) {
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $(".actions").empty().removeClass("sidebar-open");
        var data = {};
        $.ajax({
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_new"),
          type: "POST",
          data: data,
          success: function success(html) {
            $(".affaire").replaceWith($(html).find(".affaire"));
          }
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
$("#_edit").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_edit", {
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
$("#_show").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_show", {
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
$("#_statut").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_statut", {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_archive", {
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
$("body").on("change", "._multiple_actions", function () {
  alert();
  var _array_ids = [];
  $.each($("input[name=_action2]:checked"), function () {
    _array_ids.push($(this).val());
  });

  //  console.log($(this).val());
  if ($(this).val() == "_imprimer") {
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_multiple_pdfShow"),
      data: {
        _array_ids: _array_ids
      },
      success: function success(result) {
        //  window.open(result, '_blank');
        //  console.log(result);
        /*  if (result.code == 200) {
         
         table.ajax.reload();
         toastr.success(result.message.text, result.message.title, { timeOut: 4000 })
         } */
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
          timeOut: 4000
        });
      }
    });

    // console.log(url)
    $("._multiple_actions").val("");
  }

  // $("body > ._multiple_actions option[value='']").attr('selected', 'selected');

  // console.log($(this).val());
  if ($(this).val() == "_delete_demande") {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_multiple_delete"),
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
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
        $("._multiple_actions").val("");
      }
    });
  }
  if ($(this).val() == "_desactiver") {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_precommande_demmande_desactiver"),
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
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
              timeOut: 4000
            });
          }
        });
        $("._multiple_actions").val("");
      }
    });
  }
  if ($(this).val() == "_archiver") {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment Archiver cette liste ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-archive'></i> Oui, Archiver!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternedet_multiple_archiver"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            //  console.log(result);
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
        $("._multiple_actions").val("");
      }
    });
  }
});
$("#_generer").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_generer", {
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

/*$('.actions').on('submit', '.form_generer', function (e) {
 var dta = new FormData(this);
 var form_name = $(this).attr('name');
 var id = table.row('.selected').id();
 if (id) {
 $.ajax({
 type: 'POST',
 url: Routing.generate('t_achatdemandeinternecab_generer', {'id': id}),
 data: dta,
 processData: false,
 contentType: false,
 success: function (result, textStatus, errorThrown) {
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
 var separators = ['\\]', '\\['];
 var arr = x.split(new RegExp(separators.join('|')));
 var columnName = arr[1];
 
 $(".errors_list").append(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>"));
 
 
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
 toastr.success(result.message.text, result.message.title, {timeOut: 4000})
 $(".actions").empty().removeClass('sidebar-open');
 // location.reload();
 }
 },
 error: function (jqXHR, textStatus, errorThrown) {
 toastr.error("Erreur", errorThrown, {timeOut: 4000})
 }
 });
 } else {
 toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {timeOut: 4000});
 }
 
 
 e.preventDefault();
 })*/

$("body").on("click", ".t_achatdemandeinternecab_apply_transitions", function (e) {
  var dta = new FormData();
  var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");
  if (transition == 'apres_valider_commander') {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_apply_generer", {
        id: id
      }),
      success: function success(result) {
        $("#ModalDocumentDynamique .bod").html(result);
        $('.sel2').select2();
        $("#ModalDocumentDynamique").modal("show");
        var table2 = $(".grid-reception").DataTable({
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
            width: "20%",
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("datatables_langue"),
            processing: true
          }
          // fixedHeader: true,
        });

        generer();
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        toastr.warning(jqXHR.responseJSON.message.text, jqXHR.responseJSON.message.title, {
          timeOut: 4000
        });
      }
    });
  } else {
    dta.append("id", id);
    dta.append("title", title);
    dta.append("transition", transition);
    if (id) {
      swalWithBootstrapButtons.fire({
        showClass: {
          popup: "animatedSwal flipInX faster"
        },
        position: "top",
        title: "CONFIRMATION ?",
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_apply_transitions", {
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
                var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_apply_generer", {
                  id: result.id
                });
                window.location.href = url;
              }
              if (result.code == 403) {
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
$("#_imprimer").click(function (e) {
  //var id = table.row('.selected').id();
  var id = $("#test").data("demandeId");
  // var id = dta.get('_id');
  //alert(id);
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("pdf_show", {
      id: id
    });
    //  window.location.href = url;
    window.open(url, "_blank");
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("body").on("submit", "._fichiers", function (e) {
  //   alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  var id = dta.get("_id");
  var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_fichiers", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_fichiers_delete", {
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

/*$("body").on("submit", "#t_achatdemandeinternecab_apply_generer", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var id = dta.get("_id");
    if (id) {
        $.ajax({
            type: "POST",
            url: Routing.generate("t_achatdemandeinternecab_apply_generer", {
                id: id,
            }),
            success: function (result) {
                $(".actions").html(result);
                $(".actions").toggleClass("sidebar-open");
            },
        });
    } else {
        toastr.warning("Commande non renseigne ", "warning", {timeOut: 4000});
    } 
    e.preventDefault();
});*/
var iceTierValide = false;
var id_tiers = "";
$("body").on("click", ".btn-maj-ice", function (e) {
  var button = $(".btn-maj-ice");
  button.prop("disabled", true);
  $(".error-custom").hide();
  $(".error-custom").html('');
  var ice_tiers = $("#ice-tiers").val();
  var nom_tiers = $("#nom-tiers").val();
  var tel_tiers = $("#tel-tiers").val();
  if (ice_tiers && /^\d+$/.test(ice_tiers) && ice_tiers.length == 15 && id_tiers && nom_tiers && tel_tiers) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("mise_a_jour_ice", {
        id: id_tiers,
        ice: ice_tiers
      }),
      data: {
        nom_tiers: nom_tiers,
        tel_tiers: tel_tiers
      },
      success: function success(result) {
        iceTierValide = true;
        id_tiers = "";
        button.prop("disabled", false);
        $(".form_generer").trigger('submit');
        $("#ModalAddICE").modal("hide");
      }
    });
  } else {
    if (!ice_tiers) {
      $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i>Veuillez remplir ce champ.");
      $(".ice_tiers").show();
      // toastr.warning("Veuillez remplir le champ ICE ", "warning", {timeOut: 4000}); 
    } else if (!/^\d+$/.test(ice_tiers)) {
      $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i>Veuillez saisir des chiffres.");
      $(".ice_tiers").show();
      // toastr.warning("Veuillez saisir des chiffres ", "warning", {timeOut: 4000}); 
    } else if (ice_tiers.length != 15) {
      $(".ice_tiers").html("<i class='fas fa-exclamation-triangle'></i> ICE incorrect, vérifier l'ICE saisi</b>.");
      $(".ice_tiers").show();
      // toastr.warning("le champ ICE doit contenir <b>15 chiffres</b> ", "warning", {timeOut: 4000}); 
    } else if (!nom_tiers) {
      $(".nom_tiers").html("<i class='fas fa-exclamation-triangle'></i> Veuillez remplir ce champ.");
      $(".nom_tiers").show();
      // toastr.warning("Veuillez remplir le champ Nom ", "warning", {timeOut: 4000}); 
    } else if (!tel_tiers) {
      $(".tel_tiers").html("<i class='fas fa-exclamation-triangle'></i> Veuillez remplir ce champ.");
      $(".tel_tiers").show();
      // toastr.warning("Veuillez remplir le champ Tel ", "warning", {timeOut: 4000}); 
    }

    button.prop("disabled", false);
  }
  e.preventDefault();
});
function generer() {
  $("body").on("submit", ".form_generer", function (e) {
    e.preventDefault();
    $(".error-custom").hide();
    $(".error-custom").html('');
    if (!iceTierValide) {
      id_tiers = $('#form_fournisseur').val();
      if (!id_tiers) {
        toastr.warning("Veuillez choisir le Fournisseur ", "warning", {
          timeOut: 4000
        });
      }
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("checkIce", {
          id: id_tiers
        }),
        success: function success(result) {
          if (result == 'empty') {
            var tiers = $("#form_fournisseur option:selected").text();
            $("#ModalAddICE #nom_tiers").html(tiers);
            $('#ModalAddICE input').val('');
            $("#ModalAddICE").modal("show");
          } else {
            iceTierValide = true;
            id_tiers = "";
            $(".form_generer").trigger('submit');
          }
        }
      });
      return;
    }
    var button = $(".my-button2");
    button.prop("disabled", true);
    var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.querySelector(".my-button2"));
    // Start loading
    l.start();

    // debugger;
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var id = dta.get("_id");
    var selector = $(this);
    //  alert(id);
    if (id) {
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_apply_generer", {
          id: id
        }),
        data: dta,
        processData: false,
        contentType: false,
        success: function success(result, textStatus, errorThrown) {
          if (result.errors) {
            l.stop();
            Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"])(selector, form_name, result.errors);
            button.prop("disabled", false);
          } else if (result.errorss) {
            l.stop();
            //   $(".errors_list").html("");
            $.each(result.errorss, function (key, value) {
              toastrWidtoutProgress.warning(value, "warning");
            });
            button.prop("disabled", false);
          } else if (result.code == 200) {
            table.ajax.reload();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            $(".actions").empty().removeClass("sidebar-open");
            location.reload();
          } else if (result.code == 403) {
            alert();
            table.ajax.reload();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            $(".actions").empty().removeClass("sidebar-open");
            location.reload();
          }
          if (result.code == 404) {
            l.stop();
            toastr.warning(result.message.text, result.message.title, {
              timeOut: 4000
            });
            button.prop("disabled", false);
          }
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          l.stop();
          toastr.error("Erreur", errorThrown, {
            timeOut: 4000
          });
          button.prop("disabled", false);
        }
      });
    }
  });
}
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
  }, {
    width: "5%"
  }],
  footerCallback: function footerCallback(row, data, start, end, display) {
    var api = this.api(),
      data;
    //console.log($("#datatable-show").attr(""));
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
    /* $(api.column(1).footer())
     .html(
     "Total HT : " +
     $("#datatable-show").attr("data-ht") +
     "<br/>" +
     "Total TVA : " +
     $("#datatable-show").attr("data-tva") +
     "<br/>" +
     "Total Remise : " +
     $("#datatable-show").attr("data-remise") +
     "<br/>" +
     "Total TTC : " +
     $("#datatable-show").attr("data-ttc")
     )
     .addClass("right-th");
     $(api.column(2).footer())
     .html(
     "Total HT : " +
     $("#datatable-show").attr("data-ht") +
     "<br/>" +
     "Total TVA : " +
     $("#datatable-show").attr("data-tva") +
     "<br/>" +
     "Total Remise : " +
     $("#datatable-show").attr("data-remise") +
     "<br/>" +
     "Total TTC : " +
     $("#datatable-show").attr("data-ttc")
     )
     .addClass("right-th");*/
  }
});

var tableShow = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false
});
var h = "300";
var w = "1000";
$(".rs").click(function (e) {
  var left = screen.width / 2 - w / 2;
  var top = screen.height / 2 - h / 2;
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_find_article");
  var win = window.open(url, "_blank", "width=" + w + ", height=300");
  win.onclick = function (e) {
    var clickedClass = e.target.className;
    var clickedID = e.target.id;
    if ($(e.target).parent().attr("class") == "tr active-search") {
      if ($(".sel2").find("option[value='" + $(e.target).parent().attr("id") + "']").length) {
        $(".sel2").val($(e.target).parent().attr("id")).trigger("change");
        win.close();
      } else {
        // Create a DOM Option and pre-select by default
        var newOption = new Option($(e.target).parent().attr("text"), $(e.target).parent().attr("id"), true, true);
        // Append it to the select
        $(".sel2").append(newOption).trigger("change");
        win.close();
      }
    }
  };
});
$(".tab-search tbody tr").click(function () {
  $(".tab-search tbody tr").removeClass("active-search");
  $(this).addClass("active-search");
});
$(".tab-search thead th").each(function (index) {
  //$(".ddlChamps").append(new Option($( this ).text(), index))
  var o = new Option($(this).text(), index);
  /// jquerify the DOM object 'o' so we can use the html method
  $(o).html($(this).text());
  $(".ddlChamps").append(o);
});
$(".ntm").click(function () {
  $(this).hide();
  $("#Div_rechercheTabListe").fadeIn();
});
$("#lienFermerRecherche").click(function () {
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
    td = tr[i].getElementsByTagName("td")[$(".ddlChamps").val()];
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
  $(".bod").empty();
  $(".spr").fadeIn();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_find_article"),
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
$(".search-custom").click(function () {
  //alert()
  $(".bod").empty();
  $(".spr").fadeIn();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("custom_search_find_by_entity"),
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
$("body").on("click", ".cd_op2", function () {
  //alert($(this).parent().parent().attr("unite"))
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

/*$(".article").on('select2:opening',function(e){
 $(".article").select2("data", null)
 })*/
/*
 $(document).on('keyup', '.select2-search__field', function (e) { 
 
 $.ajax({
 type: 'POST',
 url: Routing.generate('t_achatdemandeinternecab_find_article_term',{term:$(this).val()}),
 processData: false,
 contentType: false,
 success: function (result, textStatus, errorThrown) {
 //$(".article").select2("data", result, true);
 $(".article").select2({
 data: result.results
 })
 }
 })
 //e.preventDefault();
 //return true;
 })
 
 
 */

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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_find_article_table"),
          // json datasource
          type: "get"
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
          // console.log(data)

          $(row).attr('text', data[2]);
          $(row).attr('pu', data[8]);
          $(row).attr('tva', data[9]);

          //unite
          $(row).attr('unite', data[10]);
          $(row).attr('code', data[11]);
          $(row).attr('remise', data[12]);
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("datatables_langue"),
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

        _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_31__["CustomSearchText"](api, [0, 1, 3, 2, 4, 5, 6, 7], []);
        //CustomSearchDatatable.CustomSearchSelect(api, [2, 4, 5, 6, 7], []);
      });
    }
  };
}();

$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
  sNext: '<i class="fa fa-chevron-right" ></i>',
  sPrevious: '<i class="fa fa-chevron-left" ></i>'
});
$(document).ready(function () {
  $(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
  create_custom_dropdowns($(".articles"), "");
});

//projet

$(".type_commande").on("change", function (e) {
  if ($(this).attr("data-type") == "ACC" || $(this).val() == 3) {
    $(".clt").toggleClass("none");
  } else {
    $(".clt").addClass("none");
  }
});
$(".dynamique_document").click(function (e) {
  // console.log( $(this).attr('data-id'));
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_document_dynamique_form", {
      id: $(this).attr("data-id")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$("body").on("click", ".scolumn_0", function () {
  $(".action ,.scolumn_0").prop("checked", $(this).prop("checked"));
  //    $('._multiple_actions').toggle($('.action').filter(':checked').length >= 1);
});

$("body").on("click", ".action", function () {
  //console.log($(this).attr('data-type'));
  if ($(this).attr("data-type") == "descriptionDetail") {
    if ($(this).is(":checked")) {
      $(".titre").prop("checked", true);
    }
  }
  if ($(this).attr("data-type") == "titre") {
    if ($(this).is(":checked") == false) {
      $(".descriptionDetail").prop("checked", false);
    }
  }
});
$("#myBtn").click(function (e) {
  var disp = $(".show_more_historique").css("display");
  if (disp == "none") {
    $(".se").css("display", "block");
  } else {
    $(".se").css("display", "none");
  }
  // $(".se").css("display", "block");
  // alert($('.show_more_historique').css( "display" ));
  e.preventDefault();
});

//add-plus

$("body").on("click", ".add-plus", function (e) {
  $("body").find("#ModalDocumentDynamique").remove();
  $("#wrapper").append('<div class="actions modal fade right" id="ModalDocumentDynamique" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="false" data-backdrop="false"><div class="modal-dialog modal-lg modal-full-height modal-middle modal-right " style="max-width:500 px;" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalPreviewLabel">Partenaire</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body bo-0"><div class="text-center spr"><br/><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div><div class="bod"></div> </div></div></div>');
  window.thisElem = $(this);
  var route = $(this).attr("data-route");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate(route),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      $(".bod").find(".form").addClass(route);
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
        (function (t, e) {
          "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e() : "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(["spin"], e) : t.Ladda = e(t.Spinner);
        })(this, function (t) {
          "use strict";

          function e(t) {
            if (t === void 0) return console.warn("Ladda button target must be defined."), void 0;
            t.querySelector(".ladda-label") || (t.innerHTML = '<span class="ladda-label">' + t.innerHTML + "</span>");
            var e = i(t),
              n = document.createElement("span");
            n.className = "ladda-spinner", t.appendChild(n);
            var r,
              a = {
                start: function start() {
                  return t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(r), e.spin(n), this.setProgress(0), this;
                },
                startAfter: function startAfter(t) {
                  return clearTimeout(r), r = setTimeout(function () {
                    a.start();
                  }, t), this;
                },
                stop: function stop() {
                  return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(r), r = setTimeout(function () {
                    e.stop();
                  }, 1e3), this;
                },
                toggle: function toggle() {
                  return this.isLoading() ? this.stop() : this.start(), this;
                },
                setProgress: function setProgress(e) {
                  e = Math.max(Math.min(e, 1), 0);
                  var n = t.querySelector(".ladda-progress");
                  0 === e && n && n.parentNode ? n.parentNode.removeChild(n) : (n || (n = document.createElement("div"), n.className = "ladda-progress", t.appendChild(n)), n.style.width = (e || 0) * t.offsetWidth + "px");
                },
                enable: function enable() {
                  return this.stop(), this;
                },
                disable: function disable() {
                  return this.stop(), t.setAttribute("disabled", ""), this;
                },
                isLoading: function isLoading() {
                  return t.hasAttribute("data-loading");
                }
              };
            return o.push(a), a;
          }
          function n(t, n) {
            n = n || {};
            var r = [];
            "string" == typeof t ? r = a(document.querySelectorAll(t)) : "object" == _typeof(t) && "string" == typeof t.nodeName && (r = [t]);
            for (var i = 0, o = r.length; o > i; i++) (function () {
              var t = r[i];
              if ("function" == typeof t.addEventListener) {
                var a = e(t),
                  o = -1;
                t.addEventListener("click", function () {
                  a.startAfter(1), "number" == typeof n.timeout && (clearTimeout(o), o = setTimeout(a.stop, n.timeout)), "function" == typeof n.callback && n.callback.apply(null, [a]);
                }, !1);
              }
            })();
          }
          function r() {
            for (var t = 0, e = o.length; e > t; t++) o[t].stop();
          }
          function i(e) {
            var n,
              r = e.offsetHeight;
            r > 32 && (r *= 0.8), e.hasAttribute("data-spinner-size") && (r = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (n = e.getAttribute("data-spinner-color"));
            var i = 12,
              a = 0.2 * r,
              o = 0.6 * a,
              s = 7 > a ? 2 : 3;
            return new t({
              color: n || "#fff",
              lines: i,
              radius: a,
              length: o,
              width: s,
              zIndex: "auto",
              top: "auto",
              left: "auto",
              className: ""
            });
          }
          function a(t) {
            for (var e = [], n = 0; t.length > n; n++) e.push(t[n]);
            return e;
          }
          var o = [];
          return {
            bind: n,
            create: e,
            stopAll: r
          };
        });
        ladda__WEBPACK_IMPORTED_MODULE_30__["bind"]("button[type=submit]");
        // var l = Ladda.create(document.querySelector("button[type=submit]"));

        // Start loading
        // l.start();
        //Ladda.stopAll();
      }, 600);
    }
  });
  $(".bod").on("submit", "." + route, function (e) {
    var obj = new Object();
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    var classes = $(this).find("button").first().attr("class").substr($(this).find("button").first().attr("class").lastIndexOf(" ") + 1);
    //console.log($(this).find('button').first()[0])
    var classSelector1 = $(this).find("button").first().attr("class").substr($(this).find("button").first().attr("class").lastIndexOf(" ") + 1);
    var classSelector2 = $(this).find("button").eq(1).attr("class").substr($(this).find("button").eq(1).attr("class").lastIndexOf(" ") + 1);
    //console.log(classes)
    if ($(document.activeElement).hasClass(classes)) {
      //alert(classSelector1)

      var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.querySelector("." + classSelector1));
      // var $l = $(".button-save-partenaire").ladda();

      // Start loading
      //$l.ladda("start");
      var _goto = 1;
      //l.start();
      obj["hideModule"] = true;
    } else {
      //alert()
      var l = ladda__WEBPACK_IMPORTED_MODULE_30__["create"](document.querySelector("." + classSelector2));
      var _goto = 0;
      //l.start();
      obj["showModule"] = true;
    }

    /*import("ladda").then(() => {
     // alert();
     
     
     
     Ladda.bind( 'button', { timeout: 2000 } );
     
     // Bind progress buttons and simulate loading progress
     Ladda.bind( 'button', {
     callback: function( instance ) {
     var progress = 0;
     var interval = setInterval( function() {
     progress = Math.min( progress + Math.random() * 0.1, 1 );
     instance.setProgress( progress );
     
     if( progress === 1 ) {
     instance.stop();
     clearInterval( interval );
     }
     }, 200 );
     }
     } );
     
     
     });*/
    l.start();

    //var id = $("#test").data("partenaireId");

    obj["route"] = "u_p_partenaire_new";
    obj["data"] = dta;
    obj["parametre"] = null;
    obj["l"] = l;
    obj["form_name"] = form_name;
    obj["selector"] = selector;
    obj["reloadTable"] = true;
    obj["modal"] = true;
    obj["nomModal"] = "ModalDocumentDynamique";
    obj["table"] = table;
    obj["autoTrigger"] = _goto;
    obj["triggerClass"] = "add";
    obj["refreshSelect"] = true;
    obj["selectElement"] = window.thisElem;
    obj["ShowFormErrors"] = _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_28__["ShowFormErrors"];
    obj["ladda"] = ladda__WEBPACK_IMPORTED_MODULE_30__;
    _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_32__["autoAjaxRenderController"](obj);
    //console.log()

    e.preventDefault();
  });

  //e.preventDefault();
});
//alert($("#_id").val());
/*if ($("#_id").val() == "") {
 $(
 "#t_achatdemandeinternecab_sousprojet.sel2"
 ) /*html(
 "<option>Choix sous projet</option>"
 )
 .select2("val", "");
 $(".sel2").select2();
 }*/
$("body").on("change", "#t_achatdemandeinternecab_projet", function () {
  //alert($(this).val());
  getSubSelect("#t_achatdemandeinternecab_sousprojet", false, "", "");
  var $this = $(this).closest("form");
  var data = {};

  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("sous_projet_select", {
      id: $(this).val() == "" || $(this).val() === null ? -1 : $(this).val(),
      placeholder: "Choix sous projet"
    }),
    type: "POST",
    data: data,
    success: function success(result) {
      //   console.log(html);
      $("#t_achatdemandeinternecab_sousprojet").html(result.data);
      getSubSelect("#t_achatdemandeinternecab_sousprojet", true, "", "");
      $(".sel2").select2();
    }
  });
});

// $(".tt").focus();

var obj2 = new Object();
obj2["dossier_path"] = "change_dossier_precommande_popup";
_functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_32__["listActions"](obj2);
$('body').on('click', '.pdf_by_code', function (e) {
  window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_27___default.a.generate("t_achatdemandeinternecab_document_old_sys", {
    id: $(this).attr('data-id')
  }), '_blank');
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./assets/js/functions/delete.js":
/*!***************************************!*\
  !*** ./assets/js/functions/delete.js ***!
  \***************************************/
/*! exports provided: deleteCab, deleteDemande */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCab", function() { return deleteCab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDemande", function() { return deleteDemande; });
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function deleteCab(obj) {
  // var id = $(this).attr('data-id');
  //  var token = $(this).attr('data-token');
  //console.log(id + ' ' + token);

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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['route'], {
          'id': obj['id'],
          'token': obj['token']
        }),
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            if (obj['redirection'] == null) {
              window.location.reload();
            } else {
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['redirection']);
              window.location.href = url;
            }
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
function deleteDemande(obj) {
  // var id = $(this).attr('data-id');
  //  var token = $(this).attr('data-token');
  //console.log(id + ' ' + token);

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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['route'], {
          'id': obj['id'],
          'token': obj['token']
        }),
        success: function success(result) {
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            if (obj['redirection'] == null) {
              window.location.reload();
            } else {
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate(obj['redirection']);
              window.location.href = url;
            }
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/module_achat/tachatdemandeinternecab.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~tachatdemandeinternecab",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYWNoYXQvdGFjaGF0ZGVtYW5kZWludGVybmVjYWIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Z1bmN0aW9ucy9kZWxldGUuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImNyZWF0ZV9jdXN0b21fZHJvcGRvd25zIiwiZWxlbWVudCIsImF0dCIsIiQiLCJmbiIsInNlbGVjdDIiLCJhbWQiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJhcmdzIiwib3ZlckNoYXJzIiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwibWVzc2FnZSIsImlucHV0VG9vU2hvcnQiLCJyZW1haW5pbmdDaGFycyIsIm1pbmltdW0iLCJsb2FkaW5nTW9yZSIsIm1heGltdW1TZWxlY3RlZCIsIm5vUmVzdWx0cyIsInNlYXJjaGluZyIsIndpbmRvdyIsImF0dHIiLCJhamF4IiwidHlwZSIsInVybCIsImdlbmVyYXRlIiwic2VsZWN0ZWQiLCJlbnRpdHkiLCJjb2x1bW4iLCJ0aGVuIiwiZGF0YSIsInByZXBlbmQiLCJsYW5ndWFnZSIsInJlc3VsdHMiLCJtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsImRyb3Bkb3duQ3NzQ2xhc3MiLCJ3aWR0aCIsInZhbCIsInRyaWdnZXIiLCJmYWRlT3V0IiwicmVtb3ZlIiwiZmFkZUluIiwib24iLCJlIiwic2VhcmNoIiwiYWZ0ZXIiLCJ0eXBlV2F0Y2giLCJoaWdobGlnaHQiLCJ3YWl0IiwiY2FwdHVyZUxlbmd0aCIsImNhbGxiYWNrIiwidmFsdWVubm4iLCJoaWRlIiwiZGF0YVR5cGUiLCJ0ZXJtIiwic3VjY2VzcyIsInJlc3VsdCIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImVtcHR5IiwiYWxsb3dDbGVhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJwYXJhbXMiLCJwcml4QWNoYXQiLCJ0dmEiLCJyZW1pc2UiLCJ1bml0ZSIsImdldFN1YlNlbGVjdCIsIm15Y2xhc3MiLCJteWJvb2xlYW4iLCJteWNvbnRlbnQiLCJwcm9wIiwicGFyZW50IiwiZmluZCIsImh0bWwiLCJhcnJheSIsInNwbGl0IiwiaSIsImwiLCJyZXBsYWNlV2l0aCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJkZWZlclJlbmRlciIsInNlcnZlclNpZGUiLCJsZW5ndGhNZW51IiwicGFnZUxlbmd0aCIsIm9yZGVyIiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsImNsYXNzTmFtZSIsIm5hbWUiLCJzZWFyY2hhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJyZW5kZXIiLCJ0IiwiYSIsInMiLCJmb3JFYWNoIiwibGluayIsIl9yb3V0ZV9saW5rIiwiaWQiLCJpZF9yb3ciLCJpZENzIiwiaWNvbiIsInRpdHJlIiwicHJvY2Vzc2luZyIsInNlYXJjaFBsYWNlaG9sZGVyIiwic2V0dGluZ3MiLCJhcGkiLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsInN0YXRlIiwibG9hZGVkIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiY2xvc2VzdCIsImxvY2F0aW9uIiwiaHJlZiIsInRvZ2dsZSIsImZpbHRlciIsInBsYWNlaG9sZGVyIiwiJGZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwiX2FycmF5X2lkcyIsInB1c2giLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInRpdGxlIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ2YWx1ZSIsImNvZGUiLCJyZWxvYWQiLCJlcnJvciIsImpxWEhSIiwicmVzcG9uc2VKU09OIiwiZm9ybURldGFpbHMiLCJhcnIiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZGV0TWFyY2hlcyIsInJlbW92ZUNsYXNzIiwibGFzdCIsImFkZENsYXNzIiwiYXBwZW5kIiwic29tZSIsImluZGV4IiwiX2FyciIsImFydGljbGVJZCIsInVuaXRlSWQiLCJxdWFudGl0ZSIsInByaXh1bml0YWlyZSIsIm9ic2VydmF0aW9uIiwibW9udGFudFJlbWlzZSIsInByaXh0dGMiLCJxdFJlc3RlIiwibWFyY2hlRGV0X0lkIiwibWFyY2hlRGV0IiwiY29uc29sZSIsImxvZyIsInN0b3AiLCJidXR0b24iLCJldmVudCIsImlucHV0VmFsIiwiTWFyY2hlRGV0X0lkIiwicGFyc2VJbnQiLCJmb3JtX25hbWUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwic2VyaWFsaXplQXJyYXkiLCJlYWNoIiwiYXJ0aWNsZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiYWxsQXJ0aWNsZXMiLCJzZWxlY3RvciIsIkxhZGRhIiwic3RhcnQiLCJjdXN0b21FcnJvcnMiLCJlcnJvcnMiLCJTaG93Rm9ybUVycm9ycyIsImRvc3NpZXJFbXB0eSIsImdldCIsImFjdGl2ZUVsZW1lbnQiLCJhcnJheV9kZXRhaWwiLCJlcnJvcnNfZGV0YWlscyIsImZvcm1EYXRhRGV0YWlsIiwibmFtZURldGFpbCIsImVkaXRDb2x1bW4iLCJlZGl0QXJ0aWNsZUNvbHVtbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJqUXVlcnkiLCJwYXJzZUpTT04iLCJnZXRIdCIsInJvdyIsImdldFR2YSIsInByaXhUdmEiLCJnZXRSZW1pc2UiLCJnZXRQcml4VFRjIiwic3BsaWNlIiwibGluZU5vIiwiY2wiLCJteV9yb3ciLCJ0b0ZpeGVkIiwiQXJpY2xlU2VsZWN0ZWQiLCJhY3Rpb24iLCJyZW1wbGlyVGFibGUiLCJ0ciIsIlByaXhfUXRlIiwicGFyc2VGbG9hdCIsInByaXhVbnRhaXJlIiwicXRlIiwiUHJpeF9UdmEiLCJQcml4X1JlbWlzZSIsIk1vbnRhbnQiLCJhcnRpY2xlIiwiaWJhbiIsInN3aWZ0IiwiYmFucXVlIiwiYWRyZXNzZSIsImZvcm1UciIsInZlcmlmaWVyRm9ybSIsIkFydGljbGUiLCJtb2RhbCIsImlkTGluZSIsImJlZm9yZSIsInBvcCIsImZsb2F0VmFsdWVzIiwibWF0Y2giLCJpc05hTiIsImV4dGVudGlvbiIsIm1ldGhvZCIsImNhY2hlIiwiaGFzT3duUHJvcGVydHkiLCJ2ZXJpZmllckZsb2F0IiwiYXJ0aWNsZXNEZXQiLCJteWJ1dHRvbiIsInRlc3QiLCJmbGFnIiwicHJvcGVydHkiLCJjYXVzZSIsImFsZXJ0IiwibXlzZWxlY3QiLCJyb3dfaW5kZXgiLCJjb2xfaW5kZXgiLCJkZXRhaWwiLCJlcSIsIktURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaCIsImluaXQiLCJzZXRUaW1lb3V0IiwicGFyZW50cyIsInNlYXJjaF9fZmllbGQiLCJmb3JtRGF0YURldGFpbEVkaXRSZW1vdmUiLCJ0b2tlbiIsImR0YSIsInNlbGVjdDJfZG9zc2llcnMiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwibWVtIiwiZGF0ZXBpY2tlciIsInRvZGF5QnRuIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwiZm9yY2VQYXJzZSIsImNhbGVuZGFyV2Vla3MiLCJhdXRvY2xvc2UiLCJ5ZWFyc0FnbyIsIkRhdGUiLCJzZXRGdWxsWWVhciIsImdldEZ1bGxZZWFyIiwidmlvbGF0aW9ucyIsInByb3BlcnR5UGF0aCIsImNvbHVtbk5hbWUiLCJ0cmFuc2l0aW9uIiwidGFibGUyIiwic2Nyb2xsWCIsInBhZ2luZyIsImRvbSIsImJ1dHRvbnMiLCJkdCIsIm5vZGUiLCJjb25maWciLCJjbGVhciIsImdlbmVyZXIiLCJvcGVuIiwiaWNlVGllclZhbGlkZSIsImlkX3RpZXJzIiwiaWNlX3RpZXJzIiwibm9tX3RpZXJzIiwidGVsX3RpZXJzIiwiaWNlIiwic2hvdyIsInRpZXJzIiwiZXJyb3JzcyIsImtleSIsInRvYXN0cldpZHRvdXRQcm9ncmVzcyIsInRhYmxlU2hvdyIsInNjcm9sbFkiLCJzY3JvbGxDb2xsYXBzZSIsImF1dG9XaWR0aCIsImZvb3RlckNhbGxiYWNrIiwiZW5kIiwiZGlzcGxheSIsInRvdGFsIiwicGFnZVRvdGFsIiwiaW50VmFsIiwicmVwbGFjZSIsInJlZHVjZSIsImIiLCJwYWdlIiwiaCIsInciLCJsZWZ0Iiwic2NyZWVuIiwidG9wIiwiaGVpZ2h0Iiwid2luIiwib25jbGljayIsImNsaWNrZWRDbGFzcyIsInRhcmdldCIsImNsaWNrZWRJRCIsImNsb3NlIiwibmV3T3B0aW9uIiwiT3B0aW9uIiwibyIsInRkIiwidHh0VmFsdWUiLCJnZXRFbGVtZW50QnlJZCIsInRvVXBwZXJDYXNlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsImluZGV4T2YiLCJzdHlsZSIsImRyYWdnYWJsZSIsInJlZ2lzdGVyIiwiaGVhZGVyIiwidHJpbSIsImRhdGFJbmRleCIsImJJbmZvIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJvTGFuZ3VhZ2UiLCJvUGFnaW5hdGUiLCJzTmV4dCIsInNQcmV2aW91cyIsInJlYWR5IiwiaXMiLCJkaXNwIiwiY3NzIiwidGhpc0VsZW0iLCJyb3V0ZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJTcGlubmVyIiwid2FybiIsImlubmVySFRNTCIsIm4iLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyIiwic2V0QXR0cmlidXRlIiwiY2xlYXJUaW1lb3V0Iiwic3BpbiIsInNldFByb2dyZXNzIiwic3RhcnRBZnRlciIsInJlbW92ZUF0dHJpYnV0ZSIsImlzTG9hZGluZyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJvZmZzZXRXaWR0aCIsImVuYWJsZSIsImRpc2FibGUiLCJoYXNBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZU5hbWUiLCJ0aW1lb3V0IiwiYXBwbHkiLCJvZmZzZXRIZWlnaHQiLCJnZXRBdHRyaWJ1dGUiLCJjb2xvciIsImxpbmVzIiwicmFkaXVzIiwiekluZGV4IiwiYmluZCIsImNyZWF0ZSIsInN0b3BBbGwiLCJvYmoiLCJPYmplY3QiLCJjbGFzc2VzIiwiZmlyc3QiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImNsYXNzU2VsZWN0b3IxIiwiY2xhc3NTZWxlY3RvcjIiLCJnb3RvIiwiYXV0b0Z1bmN0aW9uQWpheCIsIiR0aGlzIiwib2JqMiIsImxpc3RBY3Rpb25zIiwiZGVsZXRlQ2FiIiwiZGVsZXRlRGVtYW5kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnRkFBMEMsQ0FBQztBQUMyQztBQUM3R0MsbUhBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFDbUM7QUFDWDtBQUN2QjtBQUMwRDtBQUNqQjtBQUNMO0FBSW5FLFNBQVNJLHVCQUF1QixDQUFDQyxPQUFPLEVBQUVDLEdBQUcsRUFBRTtFQUUzQ0MsQ0FBQyxDQUFDQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFlBQVc7SUFDdEQ7SUFDQSxPQUFPO01BQ0hDLFlBQVksRUFBRSx3QkFBVztRQUNyQixPQUFPLE1BQU07TUFDakIsQ0FBQztNQUNEQyxZQUFZLEVBQUUsc0JBQVNDLElBQUksRUFBRTtRQUN6QixJQUFJQyxTQUFTLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLEdBQUdILElBQUksQ0FBQ0ksT0FBTztRQUNoRCxJQUFJQyxPQUFPLEdBQUcsc0JBQXNCLEdBQUdKLFNBQVMsR0FBRyxTQUFTO1FBQzVELElBQUlBLFNBQVMsSUFBSSxDQUFDLElBQUlB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LE9BQU8sRUFBRTtZQUFJLENBQUMsQ0FBQztVQUM5RTtRQUNKLENBQUM7UUFDRHNGLEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVoRyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUM3Q00sTUFBTSxDQUFDQyxPQUFPLENBQUN3RixLQUFLLENBQUNDLFlBQVksQ0FBQzlJLE9BQU8sQ0FBQ29JLElBQUksRUFBRVMsS0FBSyxDQUFDQyxZQUFZLENBQUM5SSxPQUFPLENBQUNtSSxLQUFLLEVBQUU7WUFBQzdFLE9BQU8sRUFBRTtVQUFJLENBQUMsQ0FBQztRQUN0RztNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQyIsImZpbGUiOiJ0YWNoYXRkZW1hbmRlaW50ZXJuZWNhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tIFwibGFkZGFcIjtcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBsaXN0QWN0aW9ucyBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoZWxlbWVudCwgYXR0KSB7XHJcblxyXG4gICAgJC5mbi5zZWxlY3QyLmFtZC5kZWZpbmUoXCJzZWxlY3QyL2kxOG4vZnJcIiwgW10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFJ1c3NpYW5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvckxvYWRpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdmVyQ2hhcnMgPSBhcmdzLmlucHV0Lmxlbmd0aCAtIGFyZ3MubWF4aW11bTtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0YPQtNCw0LvQuNGC0LUgXCIgKyBvdmVyQ2hhcnMgKyBcIiDRgdC40LzQstC+0LtcIjtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVyQ2hhcnMgPj0gMiAmJiBvdmVyQ2hhcnMgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQsFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyQ2hhcnMgPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQvtCyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5wdXRUb29TaG9ydDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGFwZXogXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0NoYXJzICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBjYXJhY3TDqHJlIG91IHBsdXMgcG91ciBmYWlyZSBkZXMgcmVjaGVyY2hlc1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkaW5nTW9yZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1heGltdW1TZWxlY3RlZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCS0Ysg0LzQvtC20LXRgtC1INCy0YvQsdGA0LDRgtGMIFwiICsgYXJncy5tYXhpbXVtICsgXCIg0Y3Qu9C10LzQtdC90YJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5tYXhpbXVtID49IDIgJiYgYXJncy5tYXhpbXVtIDw9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwi0LBcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5tYXhpbXVtID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwi0L7QslwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub1Jlc3VsdHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXVjdW4gcmVzdWx0YXQgdHJvdXZlXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWNoZXJjaGVy4oCmXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgd2luZG93LmF0dCA9IFwiY3VycmVudF9zZWxlY3RfXCIgKyBhdHQ7XHJcbiAgICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBhdHQsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHk6IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtY29sdW1uXCIpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgd2luZG93LmVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkPVwiXCI+PC9vcHRpb24+JylcclxuICAgICAgICAgICAgICAgIC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgICAgICAvL2FsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLnJlc3VsdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ3NzQ2xhc3M6IHdpbmRvdy5hdHQsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudmFsKGF0dClcclxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmxvYWQtZXJcIikuZmFkZU91dCg3MCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIuZGV0X2ZvclwiKS5mYWRlSW4oNzApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0b2FzdHIud2FybmluZygnaW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGxcXCdlbnRpdGVyJywgJ0VycmV1cicsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIC8vYXBwbHkgdG8gc2VsZWN0MlxyXG4gICAgd2luZG93LmVsZW1lbnQub24oXCJzZWxlY3QyOm9wZW5cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykpXHJcblxyXG4gICAgICAgIHdpbmRvdy5lbGVtZW50ID0gJCh0aGlzKTtcclxuICAgICAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuXHJcbiAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgICAgJChcIi50dHBcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyLXNlYXJjaC0taGlkZVwiKS5hZnRlcihcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duIHR0cFwiPjxpbnB1dCBjbGFzcz1cInR0IHNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIjBcIiBhdXRvY29tcGxldGU9XCJvblwiIGF1dG9jb3JyZWN0PVwib25cIiBhdXRvY2FwaXRhbGl6ZT1cIm9uXCIgc3BlbGxjaGVjaz1cInRydWVcIiByb2xlPVwidGV4dGJveFwiIC8+PC9zcGFuPidcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIudHRcIikudHlwZVdhdGNoKHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgd2FpdDogMTAwLFxyXG4gICAgICAgICAgICBjYXB0dXJlTGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24odmFsdWVubm4sIGUpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICAgICQoXCIuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZWxlY3QyLXJlc3VsdHNcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvblwiPlJlY2hlcmNoZXLigKY8L3A+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2VhcmNoID0gdmFsdWVubm47XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVfdGVybVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybTogdmFsdWVubm4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGF0dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWNvbHVtblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlbm5uID09ICQoXCIudHRcIikudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LnJlc3VsdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWwoYXR0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZWxlbWVudC5zZWxlY3QyKFwib3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hbGVydCh2YWx1ZW5ubilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi50dFwiKS52YWwod2luZG93LnNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJChcIi50dFwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dCcpLmZvY3VzKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcImltcG9zc2libGUgZGUgY2hhcmdlciBsJ2VudGl0ZXJcIiwgXCJFcnJldXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmVsZW1lbnQub24oXCJzZWxlY3QyOmNsb3NlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuICAgICAgICAkKFwiI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9xdWFudGl0ZVwiKS5mb2N1cygpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgd2luZG93LmVsZW1lbnQub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy8gYWxlcnQoKVxyXG4gICAgICAgIHZhciBkYXRhID0gZS5wYXJhbXMuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAkKFwiLnByaXh1bml0YWlyZVwiKS52YWwoZGF0YS5wcml4QWNoYXQpO1xyXG5cclxuICAgICAgICAkKFwiLnR2YVwiKS52YWwoZGF0YS50dmEpO1xyXG4gICAgICAgICQoXCIucmVtaXNlXCIpLnZhbChkYXRhLnJlbWlzZSk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbChkYXRhLnVuaXRlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zZWxlY3QyLWNvbnRhaW5lclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyQoJy5zZWxlY3QyLXNlYXJjaC0taGlkZScpLmFmdGVyKCc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93biB0dHBcIj48aW5wdXQgY2xhc3M9XCJ0dCBzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCIwXCIgYXV0b2NvbXBsZXRlPVwib25cIiBhdXRvY29ycmVjdD1cIm9uXCIgYXV0b2NhcGl0YWxpemU9XCJvblwiIHNwZWxsY2hlY2s9XCJ0cnVlXCIgcm9sZT1cInRleHRib3hcIiAvPjwvc3Bhbj4nKTtcclxuICAgICAgICAkKFwiLnR0XCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdWJTZWxlY3QobXljbGFzcywgbXlib29sZWFuLCBteWNvbnRlbnQpIHtcclxuICAgIC8vY29uc29sZS5sb2cobXljb250ZW50KVxyXG4gICAgaWYgKG15Ym9vbGVhbikge1xyXG4gICAgICAgICQobXljbGFzcykucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgJChteWNsYXNzKVxyXG4gICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgLmZpbmQoXCIuc2VsZWN0MiAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93XCIpXHJcbiAgICAgICAgICAgIC5odG1sKCc8aSBjbGFzcz1cImktbG9hZCBmYSBmYS1yZWZyZXNoXCI+PC9pPicpO1xyXG4gICAgfVxyXG4gICAgaWYgKG15Y29udGVudCkge1xyXG4gICAgICAgIHZhciBhcnJheSA9IG15Y2xhc3Muc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJChteWNvbnRlbnQpLmZpbmQoYXJyYXlbaV0pKTtcclxuICAgICAgICAgICAgJChhcnJheVtpXSkucmVwbGFjZVdpdGgoJChteWNvbnRlbnQpLmZpbmQoYXJyYXlbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2xpc3QyXCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIC8vIHNjcm9sbFg6IHRydWUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICBvcmRlcjogW1xyXG4gICAgICAgIFswLCBcImRlc2NcIl1cclxuICAgIF0sXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCIzJVwiLCBjbGFzc05hbWU6ICd0ZC1jaGVjayBwZC1hY2hhdCcsIG5hbWU6ICd0YWIuaWQnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjYlXCIsIGNsYXNzTmFtZTogJ3BkLWFjaGF0JywgbmFtZTogJ3RhYi5jb2RlJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiLCBjbGFzc05hbWU6ICdwZC1hY2hhdCcsIG5hbWU6ICd0YWIuZGF0ZV9kZW1hbmRlJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIyMCVcIiwgY2xhc3NOYW1lOiAndGQtZGVzY2lwdGlvbiBwZC1hY2hhdCcsIG5hbWU6ICd0YWIuZGVzY3JpcHRpb24nIH0sXHJcbiAgICAgICAgLy8ge29yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTAlXCIsIG5hbWU6ICd0YWIuZm91cm5pc3NldXInfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTAlXCIsIGNsYXNzTmFtZTogJ3RkLXR5cGUgcGQtYWNoYXQnLCBuYW1lOiAndGFiLnR5cGUnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjYlXCIsIGNsYXNzTmFtZTogJ3BkLWFjaGF0JywgbmFtZTogJ2RldmlzJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiLCBjbGFzc05hbWU6ICd0ZC1odCBwZC1hY2hhdCcsIG5hbWU6ICd0YWIuaHQnIH0sXHJcbiAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCI1JVwiLCBjbGFzc05hbWU6ICd0ZC10dmEgcGQtYWNoYXQnLCBuYW1lOiAndGFiLnR2YScgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjUlXCIsIGNsYXNzTmFtZTogJ3RkLXR0YyBwZC1hY2hhdCcsIG5hbWU6ICd0YWIudHRjJyB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiLCBjbGFzc05hbWU6ICd0ZC1zdGF0dXQgcGQtYWNoYXQnLCBzZWFyY2hhYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiLCBjbGFzc05hbWU6ICd0ZC1zdGF0dXQgcGQtYWNoYXQnLCBuYW1lOiAndGFiLnBvc2l0aW9uX2FjdHVlbCcgfSxcclxuICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogZmFsc2UsIHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIF0sXHJcbiAgICBjb2x1bW5EZWZzOiBbe1xyXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdGFyZ2V0czogMTEsXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24odCwgYSwgbCwgcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0KVxyXG4gICAgICAgICAgICAgICAgdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5rID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5fcm91dGVfbGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rID0gXCJocmVmPSdcIiArIGVsZW1lbnQuX3JvdXRlX2xpbmsgKyBcIidcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEgKyBcIjxsaT48YSBkYXRhLXRyYW5zaXRpb249J1wiICsgZWxlbWVudC5uYW1lICsgXCInIGRhdGEtaWQ9J1wiICsgZWxlbWVudC5pZCArIFwiJyBcIiArIGxpbmsgKyBcIiAgbmFtZT0nXCIgKyBlbGVtZW50Lm5hbWUgKyBcIicgaWRfcm93PSdcIiArIGVsZW1lbnQuaWRfcm93ICsgXCInIGNsYXNzPSdkcm9wZG93bi1pdGVtIFwiICsgZWxlbWVudC5jbGFzcyArIFwiIFwiICsgZWxlbWVudC5pZENzICsgXCInID48aSBjbGFzcz0nZmEgXCIgKyBlbGVtZW50Lmljb24gKyBcIicgPjwvaT4gXCIgKyBlbGVtZW50LnRpdHJlICsgXCI8L2E+PC9saT5cIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1xcdDxkaXYgY2xhc3M9XCJkcm9wZG93biBkcm9wZG93bi1pbmxpbmUgY2VudGVyXCI+IFxcdCA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+IFxcdCA8c3BhbiBjbGFzcz1cInN2Zy1pY29uIHN2Zy1pY29uLW1kXCI+IFxcdCAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB2ZXJzaW9uPVwiMS4xXCIgY2xhc3M9XCJzdmctY29sb3JcIj4gPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj4gPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiLz4gPGNpcmNsZSBmaWxsPVwiIzAwMDAwMFwiIGN4PVwiNVwiIGN5PVwiMTJcIiByPVwiMlwiLz4gPGNpcmNsZSBmaWxsPVwiIzAwMDAwMFwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjJcIi8+IDxjaXJjbGUgZmlsbD1cIiMwMDAwMDBcIiBjeD1cIjE5XCIgY3k9XCIxMlwiIHI9XCIyXCIvPiA8L2c+PC9zdmc+IFxcdCA8L3NwYW4+IFxcdCA8L2E+IDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtc20gZHJvcGRvd24tbWVudS1yaWdodFwiPiBcXHQgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBzaG93IGRycC1saXN0XCIgeC1wbGFjZW1lbnQ9XCJib3R0b20tc3RhcnRcIj4gPGxpIGNsYXNzPVwibmF2aS1oZWFkZXIgZm9udC13ZWlnaHQtYm9sZGVyIHRleHQtdXBwZXJjYXNlIGZvbnQtc2l6ZS14cyB0ZXh0LXByaW1hcnkgcGItMlwiPkNob2lzaXIgb3BlcmF0aW9uIDo8L2xpPicgKyBkYXRhICsgJyA8L3VsPiA8L2Rpdj4gXFx0PC9kaXY+XFx0JztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldHM6IDEwLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0ZC1vcmQnLFxyXG5cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG5cclxuICAgIC8qZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFsqL1xyXG4gICAgLypcImNvbHVtbnNUb2dnbGVcIixcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sKi9cclxuICAgIC8qe1xyXG4gICAgICAgIGV4dGVuZDogXCJleGNlbFwiLFxyXG4gICAgICAgIHRleHQ6ICdFeHBvcnRlcicsXHJcbiAgICAgICAgZXhwb3J0T3B0aW9uczoge1xyXG4gICAgICAgICAgICBjb2x1bW5zOiBcIjp2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgIHJvd3M6IFwiOnZpc2libGVcIixcclxuICAgICAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBmdW5jdGlvbiAoZGF0YSwgcm93LCBjb2x1bW4sIG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gJCgnPHA+JyArIGRhdGEgKyAnPC9wPicpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5pc051bWVyaWMoZGF0YS5yZXBsYWNlKCcsJywgJy4nKSkgPyBkYXRhLnJlcGxhY2UoJywnLCAnLicpIDogZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9Ki9cclxuICAgIC8qIF0sKi9cclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcjogXCJSRUNIRVJDSEVSXCIsXHJcbiAgICAgICAgc2VhcmNoOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIC8vIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxuXHJcblxyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uKGUsIHNldHRpbmdzKSB7XHJcbiAgICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFtdLCBbXSk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJChcIiNncmlkIHRib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuY2Rfb3BcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9zaG93XCIsIHtcclxuICAgICAgICBpZDogJCh0aGlzKS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpLFxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hY3Rpb25cIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbn0pO1xyXG5cclxuLy9hcnRpY2xlXHJcblxyXG4kKFwiLnNlbGVjdDJfZGVtb18zXCIpLnNlbGVjdDIoe1xyXG4gICAgcGxhY2Vob2xkZXI6IFwiQWN0aW9uXCIsXHJcbiAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoXCIubmV3ICwgLmVkaXRcIikub24oXCJjaGFuZ2VcIiwgXCIubWFyY2hlc1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gICAgZ2V0U3ViU2VsZWN0KFwiLnNvdXNtYXJjaGVcIiwgZmFsc2UsIFwiXCIpO1xyXG4gICAgLy8gU2ltdWxhdGUgZm9ybSBkYXRhLCBidXQgb25seSBpbmNsdWRlIHRoZSBzZWxlY3RlZCBzcG9ydCB2YWx1ZS5cclxuICAgIHZhciBkYXRhID0ge307XHJcbiAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkZm9ybS5hdHRyKFwiYWN0aW9uXCIpLFxyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihodG1sKSB7XHJcbiAgICAgICAgICAgIGdldFN1YlNlbGVjdChcIi5zb3VzbWFyY2hlXCIsIHRydWUsIGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8kKFwiLm5ldyAsIC5lZGl0XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmNvbXB0ZU1hc3NlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgIGdldFN1YlNlbGVjdChcIi5jb21wdGVSdWJyaXF1ZSwuY29tcHRlUG9zdGUsLmNvbXB0ZVwiLCBmYWxzZSwgXCJcIik7XHJcbi8vICAgIHZhciAkZm9ybSA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbi8vICAgIC8vIFNpbXVsYXRlIGZvcm0gZGF0YSwgYnV0IG9ubHkgaW5jbHVkZSB0aGUgc2VsZWN0ZWQgc3BvcnQgdmFsdWUuXHJcbi8vICAgIHZhciBkYXRhID0ge307XHJcbi8vICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4vLyAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgdXJsOiAkZm9ybS5hdHRyKFwiYWN0aW9uXCIpLFxyXG4vLyAgICAgICAgdHlwZTogJGZvcm0uYXR0cihcIm1ldGhvZFwiKSxcclxuLy8gICAgICAgIGRhdGE6IGRhdGEsXHJcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4vLyAgICAgICAgICAgIGdldFN1YlNlbGVjdChcIi5jb21wdGVSdWJyaXF1ZSwuY29tcHRlUG9zdGUsLmNvbXB0ZVwiLCB0cnVlLCBodG1sKTtcclxuLy8gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4vLyAgICAgICAgfSxcclxuLy8gICAgfSk7XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy99KTtcclxuLy9cclxuLy8kKFwiLm5ldyAsIC5lZGl0XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmNvbXB0ZVJ1YnJpcXVlXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgZ2V0U3ViU2VsZWN0KFwiLmNvbXB0ZVBvc3RlLC5jb21wdGVcIiwgZmFsc2UsIFwiXCIpO1xyXG4vLyAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4vLyAgICB2YXIgZGF0YSA9IHt9O1xyXG4vLyAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuLy8gICAgZGF0YVskKFwiLmNvbXB0ZU1hc3NlXCIpLmF0dHIoXCJuYW1lXCIpXSA9ICQoXCIuY29tcHRlTWFzc2VcIikudmFsKCk7XHJcbi8vICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbi8vICAgICQuYWpheCh7XHJcbi8vICAgICAgICB1cmw6ICRmb3JtLmF0dHIoXCJhY3Rpb25cIiksXHJcbi8vICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4vLyAgICAgICAgZGF0YTogZGF0YSxcclxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbi8vICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhodG1sKTtcclxuLy8gICAgICAgICAgICBnZXRTdWJTZWxlY3QoXCIuY29tcHRlUG9zdGUsLmNvbXB0ZVwiLCB0cnVlLCBodG1sKTtcclxuLy8gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4vLyAgICAgICAgfSxcclxuLy8gICAgfSk7XHJcbi8vfSk7XHJcbi8vXHJcbi8vJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5jb21wdGVQb3N0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgIGdldFN1YlNlbGVjdChcIi5jb21wdGVcIiwgZmFsc2UsIFwiXCIpO1xyXG4vLyAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4vLyAgICB2YXIgZGF0YSA9IHt9O1xyXG4vLyAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuLy8gICAgZGF0YVskKFwiLmNvbXB0ZU1hc3NlXCIpLmF0dHIoXCJuYW1lXCIpXSA9ICQoXCIuY29tcHRlTWFzc2VcIikudmFsKCk7XHJcbi8vICAgIGRhdGFbJChcIi5jb21wdGVSdWJyaXF1ZVwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLmNvbXB0ZVJ1YnJpcXVlXCIpLnZhbCgpO1xyXG4vLyAgICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4vLyAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgdXJsOiAkZm9ybS5hdHRyKFwiYWN0aW9uXCIpLFxyXG4vLyAgICAgICAgdHlwZTogJGZvcm0uYXR0cihcIm1ldGhvZFwiKSxcclxuLy8gICAgICAgIGRhdGE6IGRhdGEsXHJcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4vLyAgICAgICAgICAgIGdldFN1YlNlbGVjdChcIi5jb21wdGVcIiwgdHJ1ZSwgaHRtbCk7XHJcbi8vICAgICAgICAgICAgJChcIi5zZWwyXCIpLnNlbGVjdDIoKTtcclxuLy8gICAgICAgIH0sXHJcbi8vICAgIH0pO1xyXG4vL30pO1xyXG5cclxuXHJcblxyXG4kKFwiI19kZWxldGVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcblxyXG4gICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcblxyXG4gICAgaWYgKF9hcnJheV9pZHMpIHtcclxuXHJcblxyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9kZWxldGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgX2FycmF5X2lkcyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNncmlkJykuRGF0YVRhYmxlKCkuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2luZGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuZHVwcGxpcXVlclwiLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuICAgIC8vYWxlcnQoKTtcclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJpZF9yb3dcIikpO1xyXG5cclxuICAgIGlmIChfYXJyYXlfaWRzKSB7XHJcblxyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBEdXBwbGlxdWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jb3B5Jz48L2k+IE91aSwgRHVwcGxpcXVlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9kdXBwbGlxdWVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuJChcIiNfZHVwcGxpcXVlclwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuICAgIC8vYWxlcnQoKTtcclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuXHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgRHVwcGxpcXVlciBjZXR0ZSBkZW1hbmRlID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jb3B5Jz48L2k+IE91aSwgRHVwcGxpcXVlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9kdXBwbGlxdWVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4kKFwiI19kZXNhY3RpdmVyXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHJcblxyXG5cclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIGlmIChfYXJyYXlfaWRzKSB7XHJcblxyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBkZXNhY3RpdmVyIGNldHRlIGRlbWFuZGUgID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1iYW4nPjwvaT4gT3VpLCBEZXNhY3RpdmVyIVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9wcmVjb21tYW5kZV9kZW1tYW5kZV9kZXNhY3RpdmVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5fZGVzYWN0aXZlcl9wcmVjb21tYW5kZVwiLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuICAgIC8vYWxlcnQoKTtcclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJpZF9yb3dcIikpO1xyXG5cclxuICAgIGlmIChfYXJyYXlfaWRzKSB7XHJcblxyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBkZXNhY3RpdmVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1iYW4nPjwvaT4gT3VpLCBEZXNhY3RpdmVyIVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9wcmVjb21tYW5kZV9kZW1tYW5kZV9kZXNhY3RpdmVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuX2FubnVsZXJfcHJlY29tbWFuZGVcIiwgZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcbiAgICAvL2FsZXJ0KCk7XHJcblxyXG4gICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS5hdHRyKFwiaWRfcm93XCIpKTtcclxuXHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgYW5udWxlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYmFuJz48L2k+IE91aSwgQW5udWxlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfcHJlY29tbWFuZGVfZGVtbWFuZGVfYW5udWxlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBfYXJyYXlfaWRzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5fZGVsZXRlX2RlbW1hbmRlXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblxyXG4gICAgLy9hbGVydCgpO1xyXG5cclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImlkX3Jvd1wiKSk7XHJcblxyXG4gICAgaWYgKF9hcnJheV9pZHMpIHtcclxuXHJcblxyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9kZWxldGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgX2FycmF5X2lkcyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNncmlkJykuRGF0YVRhYmxlKCkuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbnZhciBmb3JtRGV0YWlscyA9IFtdO1xyXG52YXIgYXJyPSBbXTtcclxuXHJcbi8vICBmb3JtRGV0YWlscy5wdXNoKHtcclxuLy8gICAgICAgICAgICAgYXJ0aWNsZUlkOiAnMScsXHJcbi8vICAgICAgICAgICAgIHRpdHJlOiAnQVJNT0lSRSDCoEhBVVRFIEEgUklERUFVWCBFU0NBTU9UQUJMRVMnLFxyXG4vLyAgICAgICAgICAgICBjb2RlOiAnQVJUMDAwMDAxJyxcclxuLy8gICAgICAgICAgICAgdW5pdGU6ICcxMDAgTUwnLFxyXG4vLyAgICAgICAgICAgICB1bml0ZUlkOiAnMScsXHJcbi8vICAgICAgICAgICAgIHF1YW50aXRlOiAnMjAnLFxyXG4vLyAgICAgICAgICAgICBwcml4dW5pdGFpcmU6ICcxMDAnLFxyXG4vLyAgICAgICAgICAgICB0dmE6ICcwJyxcclxuLy8gICAgICAgICAgICAgcmVtaXNlOiAnMTAnLFxyXG4vLyAgICAgICAgICAgICBvYnNlcnZhdGlvbjogJ3Rlc3QgemlrbycsXHJcbi8vICAgICAgICAgICAgIG1vbnRhbnRSZW1pc2U6ICcwJyxcclxuLy8gICAgICAgICAgICAgcHJpeHR0YzogJzAnLFxyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuJCgnI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9tYXJjaGUnKS5vbignc2VsZWN0MjpzZWxlY3QnLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIERvIHNvbWV0aGluZ1xyXG4gIC8vIGFsZXJ0KCd0ZXN0Jyk7XHJcbiAgJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogJy9hY2hhdC9wcmVjb21tYW5kZS8nKyQodGhpcykudmFsKCkrJy9kZXRhaWwvbWFyY2hlJyxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuZGV0TWFyY2hlcy5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NyZWF0ZV9kZW1hbmRlXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJChcIiNjcmVhdGVfZGVtYW5kZVwiKS5sYXN0KCkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIi5kZXRfZm9yX25ld1wiKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgJChcIi5kZXRfZm9yX25ld1wiKS5hcHBlbmQocmVzdWx0Lmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgZm9ybURldGFpbHMgPSBbXTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXN1bHQuZGV0TWFyY2hlcy5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBfYXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURldGFpbHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVJZDogZWxlbWVudC5hcnRpY2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdHJlOiBlbGVtZW50LnRpdHJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBlbGVtZW50LmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdGVJZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXRlOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXh1bml0YWlyZTogZWxlbWVudC5wcml4dW5pdGFpcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR2YTogIGVsZW1lbnQudHZhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1pc2U6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YXRpb246IGVsZW1lbnQub2JzZXJ2YXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRhbnRSZW1pc2U6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpeHR0YzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdFJlc3RlOiBlbGVtZW50LnF0UmVzdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmNoZURldF9JZDogZWxlbWVudC5tYXJjaGVEZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EZXRhaWxzKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGV0TWFyY2hlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiaW5wdXRcIiwgXCIuZGV0X1F0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgY2hhbmdlc1xyXG4gICAgdmFyIGlucHV0VmFsID0kKHRoaXMpLnZhbCgpO1xyXG4gICAgdmFyIE1hcmNoZURldF9JZD0gJCh0aGlzKS5hdHRyKCdkYXRhLXBhcmVudCcpO1xyXG4gICAgZm9ybURldGFpbHMuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgX2Fycikge1xyXG4gICAgICAgICAgIGlmKGVsZW1lbnQubWFyY2hlRGV0X0lkID09PSBwYXJzZUludChNYXJjaGVEZXRfSWQpKXtcclxuICAgICAgICAgICAgICAgZWxlbWVudC5xdWFudGl0ZSA9IGlucHV0VmFsO1xyXG4gICAgICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4kKFwiI2NyZWF0ZV9kZW1hbmRlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICB2YXIgYnV0dG9uID0gJCh0aGlzKTtcclxuICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKFwiLmZvcm1cIikuYXR0cihcIm5hbWVcIik7XHJcblxyXG5cclxuICAgIC8vIHZhciB3YXJuaW5nID0gJ2xhIHF1YW50aXTDqSBkZW1hbmTDqWUgZG9pdCDDqnRyZSBpbmZlcmlldXIgb3UgZWdhbGUgw6AgbGEgcXVhbnRpdMOpIHJlc3RlJztcclxuICAgIC8vIHZhciB0ZXN0X3F0ID0gZmFsc2U7XHJcblxyXG4gICAgLy8gZm9ybURldGFpbHMuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgX2Fycikge1xyXG4gICAgLy8gICAgIGlmIChlbGVtZW50LnF0UmVzdGUgPCBlbGVtZW50LnF1YW50aXRlICkge1xyXG4gICAgLy8gICAgICAgICAgdGVzdF9xdD0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBpZih0ZXN0X3F0KXtcclxuICAgIC8vICAgICAgdG9hc3RyLndhcm5pbmcoIHdhcm5pbmcsICd3YXJuaW5nJywge3RpbWVPdXQ6IDQwMDAsIH0pO1xyXG4gICAgLy8gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgICBcclxuICAgICBcclxuXHJcbiAgICAvLyBmb3JtRGV0YWlscy5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBfYXJyKSB7XHJcbiAgICAvLyAgICAgaWYgKHBhcnNlSW50KGVsZW1lbnQucXVhbnRpdGUpIDwgMSApIHtcclxuICAgIC8vICAgICAgICAgZm9ybURldGFpbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gICBcclxuXHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhRGV0YWlsKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd6YWsnKTtcclxuICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgIC8vdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoJChcIiN0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJcIilbMF0pO1xyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHZhbC5uYW1lLCB2YWwudmFsdWUpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh2YWwubmFtZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBKU09OLnN0cmluZ2lmeShhbGxBcnRpY2xlcyk7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZm9ybURldGFpbHMpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdkZXRhaWwnLCBkYXRhKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnYWxsQXJ0aWNsZXMnLCBhcnRpY2xlcyk7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKFwiLmZvcm1cIik7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvblwiKSk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9pbnNlcnRcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY3VzdG9tRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2gocmVzdWx0LmN1c3RvbUVycm9ycywgZnVuY3Rpb24oaSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm0gI1wiICsgaSkuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjJyspXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgLy9kdW1wKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRvc3NpZXJFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiNlZGl0X2RlbWFuZGVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuICAgIC8vdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoJChcIiN0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJcIilbMF0pO1xyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHZhbC5uYW1lLCB2YWwudmFsdWUpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh2YWwubmFtZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGlkID0gZm9ybURhdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICAgIHZhciBzZWxlY3RvciA9ICQoXCIuZm9ybVwiKTtcclxuXHJcblxyXG5cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfdXBkYXRlXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG52YXIgYXJyYXlfZGV0YWlsID0gW107XHJcbnZhciBlcnJvcnNfZGV0YWlscyA9IFtdO1xyXG52YXIgZm9ybURhdGFEZXRhaWwgPSBbXTtcclxudmFyIG5hbWVEZXRhaWwgPSBcIlwiO1xyXG52YXIgZWRpdENvbHVtbiA9IG51bGw7XHJcbnZhciBlZGl0QXJ0aWNsZUNvbHVtbiA9IG51bGw7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGVycm9yc19kZXRhaWxzID0galF1ZXJ5LnBhcnNlSlNPTigkKCcuZXJyb3JzX2RldGFpbHMnKS5hdHRyKCdlcnJvcnMnKSk7XHJcbiAgICBuYW1lRGV0YWlsID0gJCgnLmVycm9yc19kZXRhaWxzJykuYXR0cignbmFtZScpO1xyXG4gICAgJCgnLmVycm9yc19kZXRhaWxzJykucmVtb3ZlKCk7XHJcblxyXG4gICAgLy8gb3Igd2l0aCBqUXVlcnlcclxuICAgIC8vdmFyIGlzQXV0aGVudGljYXRlZCA9ICQoJy5qcy11c2VyLXJhdGluZycpLmRhdGEoJ2lzQXV0aGVudGljYXRlZCcpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldEh0KHJvdykge1xyXG4gICAgcmV0dXJuIHJvdy5xdWFudGl0ZSAqIHJvdy5wcml4dW5pdGFpcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFR2YShyb3cpIHtcclxuICAgIHZhciBwcml4VHZhID0gKGdldEh0KHJvdykgKiByb3cudHZhKSAvIDEwMDtcclxuXHJcbiAgICBwcml4VHZhID0gcHJpeFR2YSAtICgocHJpeFR2YSAqIHJvdy5yZW1pc2UpIC8gMTAwKTtcclxuXHJcbiAgICByZXR1cm4gcHJpeFR2YTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVtaXNlKHJvdykge1xyXG4gICAgcmV0dXJuICgoZ2V0SHQocm93KSkgKiAocm93LnJlbWlzZSkgLyAxMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcml4VFRjKHJvdykge1xyXG4gICAgcmV0dXJuIHJvdy5wcml4dHRjID0gZ2V0SHQocm93KSArIGdldFR2YShyb3cpIC0gZ2V0UmVtaXNlKHJvdyk7XHJcbn1cclxuXHJcblxyXG5cclxuJChcIi5uZXdcIikub24oXCJjbGlja1wiLCBcIi5kZWxldGVfZWxlbWVudFwiLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuICAgIGZvcm1EYXRhRGV0YWlsLnNwbGljZSgkKHRoaXMpLmF0dHIoXCJpZFwiKSwgMSlcclxuICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keSB0clwiKS5yZW1vdmUoKTtcclxuICAgIGlmIChmb3JtRGF0YURldGFpbC5sZW5ndGggPCAxKSB7ICQoXCIjY3JlYXRlX2RlbWFuZGVcIikubGFzdCgpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7IH1cclxuXHJcbiAgICB2YXIgbGluZU5vID0gMTtcclxuICAgIHZhciBjbCA9IFwiXCI7XHJcbiAgICAkLmVhY2goZm9ybURhdGFEZXRhaWwsIGZ1bmN0aW9uKGksIHZhbHVlKSB7XHJcblxyXG4gICAgICAgIGlmIChsaW5lTm8gJSAyID09IDApIHtcclxuICAgICAgICAgICAgY2wgPSBcImltcGFpclwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJwYWlyXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHR2YSA9IHZhbHVlLnR2YSArIFwiICVcIjtcclxuICAgICAgICB2YXIgcmVtaXNlID0gdmFsdWUucmVtaXNlICsgXCIgJVwiO1xyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbiA9IHZhbHVlLm9ic2VydmF0aW9uO1xyXG4gICAgICAgIGlmICh2YWx1ZS50dmEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLm9ic2VydmF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2YXRpb24gPSBcIjx0ciBjbGFzcz1cIiArIGNsICsgXCI+PHRkPjwvdGQ+PHRkIGNvbHNwYW49JzknPjxiPkluZm9ybWF0aW9ucyBjb21wbGVtZW50YWlyZXMgOiA8L2I+XCIgKyBvYnNlcnZhdGlvbiArIFwiPC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgXCIgPHRyIGNsYXNzPVwiICsgY2wgKyBcIj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAoaSArIDEpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnRpdHJlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS51bml0ZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyID4gXCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5xdWFudGl0ZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD4gPHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcj5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI+XCIgK1xyXG4gICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcj5cIiArXHJcbiAgICAgICAgICAgIHJlbWlzZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyPlwiICtcclxuICAgICAgICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyJz48L2k+PC9hPiA8YSBjbGFzcz0nYnRuIGJ0bi13aGl0ZSBidG4teHMgdXBwZXIgZWRpdF9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtZWRpdCB0ZXh0LXByaW1hcnknPjwvaT48L2E+PC90ZD48L3RyPlwiICsgb2JzZXJ2YXRpb247XHJcbiAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbD50Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICBsaW5lTm8rKztcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLVxyXG5cclxudmFyIGFsbEFydGljbGVzID0gW107XHJcbnZhciBBcmljbGVTZWxlY3RlZCA9IFwiXCI7XHJcbnZhciBhY3Rpb24gPSBcImFqb3V0ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiByZW1wbGlyVGFibGUoKSB7XHJcblxyXG4gICAgdmFyIHRyID0gXCJcIjtcclxuICAgIGFsbEFydGljbGVzLnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIF9hcnIpIHtcclxuLy8gY29uc29sZS5sb2coZWxlbWVudCwnbmFqaW0nKTtcclxuICAgICAgICAgICAgdmFyIFByaXhfUXRlID0gcGFyc2VGbG9hdChlbGVtZW50LnByaXhVbnRhaXJlKSAqIHBhcnNlRmxvYXQoZWxlbWVudC5xdGUpO1xyXG4gICAgICAgICAgICB2YXIgUHJpeF9UdmEgPSBQcml4X1F0ZSAqIHBhcnNlRmxvYXQoZWxlbWVudC50dmEpIC8gMTAwOyAvLyBDYWxjdWxhdGUgVFZBIGFtb3VudFxyXG4gICAgICAgICAgICB2YXIgUHJpeF9SZW1pc2UgPSBwYXJzZUZsb2F0KGVsZW1lbnQucHJpeFVudGFpcmUpICogcGFyc2VGbG9hdChlbGVtZW50LnJlbWlzZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgTW9udGFudCA9IFByaXhfUXRlICsgUHJpeF9UdmEgLSBQcml4X1JlbWlzZTtcclxuXHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LkFyaWNsZVNlbGVjdGVkID09PSBBcmljbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LmFydGljbGUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0ciA9IHRyICsgJzx0ciBzdHlsZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiAgaWQ9XCJ0cl9hY3Rpb25zXycgKyBpbmRleCArICdcIj4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJhcnRpY2xlIHRleHQtY2VudGVyXCI+JyArIGVsZW1lbnQuYXJ0aWNsZSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cInF0ZSB0ZXh0LWNlbnRlclwiPicgKyBlbGVtZW50LnF0ZSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cInByaXhVbnRhaXJlIHRleHQtY2VudGVyXCI+JyArIGVsZW1lbnQucHJpeFVudGFpcmUgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJ0dmEgdGV4dC1jZW50ZXJcIj4nICsgZWxlbWVudC50dmEgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJyZW1pc2UgdGV4dC1jZW50ZXJcIj4nICsgZWxlbWVudC5yZW1pc2UgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJtb250YW50IHRleHQtY2VudGVyXCI+JyArIE1vbnRhbnQgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJpYmFuIHRleHQtY2VudGVyXCI+JyArIGVsZW1lbnQuaWJhbiArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cInN3aWZ0IHRleHQtY2VudGVyXCI+JyArIGVsZW1lbnQuc3dpZnQgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJiYW5xdWUgdGV4dC1jZW50ZXJcIj4nICsgZWxlbWVudC5iYW5xdWUgKyAnPC90ZD4nICtcclxuICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJhZHJlc3NlIHRleHQtY2VudGVyXCI+JyArIGVsZW1lbnQuYWRyZXNzZSArICc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgJzx0ZCBzdHlsZT1cIndpZHRoOiAxMSUgO1wiIGNsYXNzPVwidGV4dC1jZW50ZXIgdWFfdGVjaG5pcXVlXCIgPicgK1xyXG4gICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBidG4teHMgdXBwZXIgIHVhX2VkaXRcIiAgIGlkPVwiJyArIGluZGV4ICsgJ1wiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdCB0ZXh0LXByaW1hcnkgXCI+PC9pPjwvYT4gJyArXHJcbiAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciAgdWFfc3VwcGltZXJfbGlnbmVcIiBpZD1cIicgKyBpbmRleCArICdcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyIFwiPjwvaT48L2E+IDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAnPC90cj4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpYmFuKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIud2F2ZXMtcmlwcGxlXCIpLnJlbW92ZSgpO1xyXG4gICAgdmFyIGZvcm1UciA9ICQoJ3Rib2R5ID4gI3VhX3RlY2huaXF1ZV9mb3JtJykuaHRtbCgpO1xyXG4gICAgJCgnI3VhX3RlY2huaXF1ZV90YWJsZSA+IHRib2R5JykuaHRtbCh0cik7XHJcbiAgICAkKCcjdWFfdGVjaG5pcXVlX3RhYmxlID4gdGJvZHknKS5hcHBlbmQoJzx0ciBpZD1cInVhX3RlY2huaXF1ZV9mb3JtXCI+JyArIGZvcm1UciArICc8L3RyPicpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnVhX3RlY2huaXF1ZSA+IC5hZGRfZm9ybV91YVwiLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuXHJcbiAgICB2ZXJpZmllckZvcm0oKTtcclxuICAgIGlmICh2ZXJpZmllckZvcm0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uID09IFwiYWpvdXRlclwiKSB7XHJcbiAgICAgICAgdmFyIEFydGljbGUgPSB7fTtcclxuICAgICAgICBBcnRpY2xlWydhcnRpY2xlJ10gPSAkKCcjdWFfdGVjaG5pcXVlX2RldF9hcnRpY2xlJykudmFsKCk7XHJcbiAgICAgICAgQXJ0aWNsZVsncXRlJ10gPSAkKCcjdWFfdGVjaG5pcXVlX2RldF9xdGUnKS52YWwoKTtcclxuICAgICAgICBBcnRpY2xlWydwcml4VW50YWlyZSddID0gJCgnI3VhX3RlY2huaXF1ZV9kZXRfcHJpeFVudGFpcmUnKS52YWwoKTtcclxuICAgICAgICBBcnRpY2xlWyd0dmEnXSA9ICQoJyN1YV90ZWNobmlxdWVfZGV0X3R2YScpLnZhbCgpO1xyXG4gICAgICAgIEFydGljbGVbJ3JlbWlzZSddID0gJCgnI3VhX3RlY2huaXF1ZV9kZXRfcmVtaXNlJykudmFsKCk7XHJcbiAgICAgICAgQXJ0aWNsZVsncmVtaXNlJ10gPSAkKCcjdWFfdGVjaG5pcXVlX2RldF9yZW1pc2UnKS52YWwoKTtcclxuICAgICAgICBBcnRpY2xlWydpYmFuJ10gPSAkKCcjdWFfdGVjaG5pcXVlX2RldF9pYmFuJykudmFsKCk7XHJcbiAgICAgICAgQXJ0aWNsZVsnc3dpZnQnXSA9ICQoJyN1YV90ZWNobmlxdWVfZGV0X3N3aWZ0JykudmFsKCk7XHJcbiAgICAgICAgQXJ0aWNsZVsnYmFucXVlJ10gPSAkKCcjdWFfdGVjaG5pcXVlX2RldF9iYW5xdWUnKS52YWwoKTtcclxuICAgICAgICBBcnRpY2xlWydhZHJlc3NlJ10gPSAkKCcjdWFfdGVjaG5pcXVlX2RldF9hZHJlc3NlJykudmFsKCk7XHJcbiAgICAgICAgQXJ0aWNsZVsnQXJpY2xlU2VsZWN0ZWQnXSA9IEFyaWNsZVNlbGVjdGVkO1xyXG4gICAgICAgIGFsbEFydGljbGVzLnB1c2goQXJ0aWNsZSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS5hcnRpY2xlID0gJCgnI3VhX3RlY2huaXF1ZV9kZXRfYXJ0aWNsZScpLnZhbCgpO1xyXG4gICAgICAgIGFsbEFydGljbGVzW2FjdGlvbl0ucXRlID0gJCgnI3VhX3RlY2huaXF1ZV9kZXRfcXRlJykudmFsKCk7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS5wcml4VW50YWlyZSA9ICQoJyN1YV90ZWNobmlxdWVfZGV0X3ByaXhVbnRhaXJlJykudmFsKCk7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXNbYWN0aW9uXS50dmEgPSAkKCcjdWFfdGVjaG5pcXVlX2RldF90dmEnKS52YWwoKTtcclxuICAgICAgICBhbGxBcnRpY2xlc1thY3Rpb25dLnJlbWlzZSA9ICQoJyN1YV90ZWNobmlxdWVfZGV0X3JlbWlzZScpLnZhbCgpO1xyXG4gICAgICAgIGFsbEFydGljbGVzW2FjdGlvbl0uaWJhbiA9ICQoJyN1YV90ZWNobmlxdWVfZGV0X2liYW4nKS52YWwoKTtcclxuICAgICAgICBhbGxBcnRpY2xlc1thY3Rpb25dLnN3aWZ0ID0gJCgnI3VhX3RlY2huaXF1ZV9kZXRfc3dpZnQnKS52YWwoKTtcclxuICAgICAgICBhbGxBcnRpY2xlc1thY3Rpb25dLmJhbnF1ZSA9ICQoJyN1YV90ZWNobmlxdWVfZGV0X2JhbnF1ZScpLnZhbCgpO1xyXG4gICAgICAgIGFsbEFydGljbGVzW2FjdGlvbl0uYWRyZXNzZSA9ICQoJyN1YV90ZWNobmlxdWVfZGV0X2FkcmVzc2UnKS52YWwoKTtcclxuICAgICAgICBhY3Rpb24gPSBcImFqb3V0ZXJcIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVtcGxpclRhYmxlKCk7XHJcbiAgICAkKCcudWFfY29uZmlybWVyX2FubnVsZXInKS5mYWRlSW4oKTtcclxuICAgICQoJy5mZXJtZXJfdWFfdGVjaG5pcXVlX2RldCcpLmZhZGVPdXQoKTtcclxuXHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy51YV9zdXBwcmltZXJfYXJ0aWNsZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxBcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhbGxBcnRpY2xlc1tpXS5BcmljbGVTZWxlY3RlZCA9PT0gQXJpY2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgYWxsQXJ0aWNsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtcGxpclRhYmxlKCk7XHJcbiAgICAkKCcudWFfY29uZmlybWVyX2FubnVsZXInKS5mYWRlT3V0KCk7XHJcbiAgICAkKCcuZmVybWVyX3VhX3RlY2huaXF1ZV9kZXQnKS5mYWRlSW4oKTtcclxuXHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy51YV9jb25maXJtZXInLCBmdW5jdGlvbigpIHtcclxuICAgIC8vICQoJy51YV9zdWNjZXNzJykuZmFkZUluKCk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkKCcudWFfc3VjY2VzcycpLmZhZGVPdXQoKTtcclxuICAgIC8vIH0sIDMwMDApOyBcclxuICAgIHRvYXN0ci5zdWNjZXNzKCd2b3VzIGF2ZXogYmllbiBjb25maXJtw6knLCAnQ29uZmlybWF0aW9uJywge1xyXG4gICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICB9KTtcclxuICAgICQoXCIjTW9kYWxEb2N1bWVcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgJCgnLmZlcm1lcl91YV90ZWNobmlxdWVfZGV0JykuZmFkZU91dCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy51YV9lZGl0JywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgYWN0aW9uID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgcmVtcGxpclRhYmxlKCk7XHJcbiAgICB2YXIgaWRMaW5lID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgdmFyIEFydGljbGUgPSBhbGxBcnRpY2xlc1tpZExpbmVdO1xyXG5cclxuICAgICQoJyN1YV90ZWNobmlxdWVfZGV0X2FydGljbGUnKS52YWwoQXJ0aWNsZS5hcnRpY2xlKTtcclxuICAgICQoJyN1YV90ZWNobmlxdWVfZGV0X3F0ZScpLnZhbChBcnRpY2xlLnF0ZSk7XHJcbiAgICAkKCcjdWFfdGVjaG5pcXVlX2RldF9wcml4VW50YWlyZScpLnZhbChBcnRpY2xlLnByaXhVbnRhaXJlKTtcclxuICAgICQoJyN1YV90ZWNobmlxdWVfZGV0X3R2YScpLnZhbChBcnRpY2xlLnR2YSk7XHJcbiAgICAkKCcjdWFfdGVjaG5pcXVlX2RldF9yZW1pc2UnKS52YWwoQXJ0aWNsZS5yZW1pc2UpO1xyXG4gICAgJCgnI3VhX3RlY2huaXF1ZV9kZXRfaWJhbicpLnZhbChBcnRpY2xlLmliYW4pO1xyXG4gICAgJCgnI3VhX3RlY2huaXF1ZV9kZXRfc3dpZnQnKS52YWwoQXJ0aWNsZS5zd2lmdCk7XHJcbiAgICAkKCcjdWFfdGVjaG5pcXVlX2RldF9iYW5xdWUnKS52YWwoQXJ0aWNsZS5iYW5xdWUpO1xyXG4gICAgJCgnI3VhX3RlY2huaXF1ZV9kZXRfYWRyZXNzZScpLnZhbChBcnRpY2xlLmFkcmVzc2UpO1xyXG5cclxuICAgIHZhciBmb3JtVHIgPSAkKCd0Ym9keSA+ICN1YV90ZWNobmlxdWVfZm9ybScpLmdldCgpO1xyXG4gICAgJCgnI3RyX2FjdGlvbnNfJyArIGlkTGluZSkuYmVmb3JlKGZvcm1Ucik7XHJcbiAgICAkKCcjdHJfYWN0aW9uc18nICsgaWRMaW5lKS5yZW1vdmUoKTtcclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oJ2NsaWNrJywgJy51YV9zdXBwaW1lcl9saWduZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlkTGluZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIGFsbEFydGljbGVzLnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIF9hcnIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT0gaWRMaW5lKSB7XHJcbiAgICAgICAgICAgIGFsbEFydGljbGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZW1wbGlyVGFibGUoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiB2ZXJpZmllckZvcm0oKSB7XHJcbiAgICB2YXIgbWVzc2FnZSA9IFwiXCI7XHJcbiAgICAkKFwiI3VhX3RlY2huaXF1ZV9mb3JtIGlucHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGlmIChlbGVtZW50LnZhbCgpID09IFwiXCIpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyBcIiA8aSBjbGFzcz0nZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnPjwvaT4gdmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcHMgXCIgKyAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKS5wb3AoKSArIFwiPGJyPlwiO1xyXG4gICAgICAgICAgICAkKCcudWFfYWxlcnRfZGFuZ2VyJykuaHRtbChtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobWVzc2FnZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgJChcIiN1YV90ZWNobmlxdWVfZm9ybSBpbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdpZCcpICE9ICd1YV90ZWNobmlxdWVfZGV0X2FydGljbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gZWxlbWVudC52YWwoKTtcclxuICAgICAgICAgICAgICAgIHZhciBmbG9hdFZhbHVlcyA9IC9bKy1dPyhbMC05XSpbLl0pP1swLTldKy87XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwubWF0Y2goZmxvYXRWYWx1ZXMpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwubWF0Y2goZmxvYXRWYWx1ZXMpICYmICFpc05hTih2YWwpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArIFwiPGkgY2xhc3M9J2ZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJz48L2k+IHZldWlsbGV6IHNhaXNpciB1biBub21icmUgZGFucyBsZSBjaGFtcHMgXCIgKyAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKS5wb3AoKSArIFwiPGJyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy51YV9hbGVydF9kYW5nZXInKS5odG1sKG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAobWVzc2FnZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmZhZGVJbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcudWFfYWxlcnRfZGFuZ2VyJykuZmFkZU91dCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lc3NhZ2U7XHJcbn1cclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcuaW1wb3J0ZXJfY2FudmFzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjdWFfaW1wb3J0X21vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxufSk7XHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsICcuZmVybWVyX3VhX2ltcG9ydF9tb2RhbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3VhX2ltcG9ydF9tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbn0pO1xyXG5cclxuJCgnI2ZpbGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKTtcclxuICAgIHZhciB2YWx1ZSA9ICQodGhpcykudmFsKCkuc3BsaXQoXCIuXCIpO1xyXG4gICAgdmFyIGV4dGVudGlvbiA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xyXG4gICAgaWYgKGV4dGVudGlvbiAhPSAneGxzeCcpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcInZldWlsbGV6IGNob2lzaXIgdW4gZmljaGllciBjc3ZcIiwgXCJ3YXJuaW5nIFwiLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gYWxlcnQoJ3ppa28nKTtcclxuXHJcbiQoJyN1YV9pbXBvcnRfZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiaW1wb3J0X3VhX2RldFwiKSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGRhdGE6IG5ldyBGb3JtRGF0YSh0aGlzKSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KCdtZXNzYWdlJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubWVzc2FnZS50aXRsZSA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiV2FybmluZ1wiLCByZXN1bHQubWVzc2FnZS50ZXh0LCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgX2Fycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBBcnRpY2xlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJ0aWNsZVsnYXJ0aWNsZSddID0gZWxlbWVudC5hcnRpY2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIEFydGljbGVbJ3F0ZSddID0gZWxlbWVudC5xdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJ0aWNsZVsncHJpeFVudGFpcmUnXSA9IGVsZW1lbnQucHJpeFVudGFpcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJ0aWNsZVsndHZhJ10gPSBlbGVtZW50LnR2YTtcclxuICAgICAgICAgICAgICAgICAgICBBcnRpY2xlWydyZW1pc2UnXSA9IGVsZW1lbnQucmVtaXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIEFydGljbGVbJ2liYW4nXSA9IGVsZW1lbnQuaWJhbjtcclxuICAgICAgICAgICAgICAgICAgICBBcnRpY2xlWydzd2lmdCddID0gZWxlbWVudC5zd2lmdDtcclxuICAgICAgICAgICAgICAgICAgICBBcnRpY2xlWydiYW5xdWUnXSA9IGVsZW1lbnQuYmFucXVlO1xyXG4gICAgICAgICAgICAgICAgICAgIEFydGljbGVbJ2FkcmVzc2UnXSA9IGVsZW1lbnQuYWRyZXNzZTtcclxuICAgICAgICAgICAgICAgICAgICBBcnRpY2xlWydBcmljbGVTZWxlY3RlZCddID0gQXJpY2xlU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coQXJ0aWNsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQXJ0aWNsZXMucHVzaChBcnRpY2xlKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1wbGlyVGFibGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VhX2ltcG9ydF9tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJyNmaWxlJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiB2ZXJpZmllckZsb2F0KCkge1xyXG5cclxuICAgIC8vIHZhciBtZXNzYWdlID0gXCJcIjtcclxuICAgIC8vICQoXCIjdWFfdGVjaG5pcXVlX2Zvcm0gaW5wdXRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgaWYgKGVsZW1lbnQuYXR0cignaWQnKSAhPSAndWFfdGVjaG5pcXVlX2RldF9hcnRpY2xlJyl7XHJcbiAgICAvLyAgICAgICAgIGlmKGlzTmFOKHBhcnNlRmxvYXQoZWxlbWVudC52YWwoKSkpICApe1xyXG4gICAgLy8gICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyBcIjxpIGNsYXNzPSdmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc+PC9pPiB2ZXVpbGxleiBzYWlzaXIgdW4gbm9tYnJlIGRhbnMgbGUgY2hhbXBzIFwiICskKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKS5wb3AoKSArIFwiPGJyPlwiO1xyXG4gICAgLy8gICAgICAgICAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmh0bWwobWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyAkKFwiI3VhX3RlY2huaXF1ZV9mb3JtIGlucHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgIGlmIChlbGVtZW50LmF0dHIoJ2lkJykgIT0gJ3VhX3RlY2huaXF1ZV9kZXRfYXJ0aWNsZScpe1xyXG4gICAgLy8gICAgICAgICB2YXIgdmFsID0gZWxlbWVudC52YWwoKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC52YWwoKSk7XHJcbiAgICAvLyAgICAgICAgIHZhciBmbG9hdFZhbHVlcyA9ICAvWystXT8oWzAtOV0qWy5dKT9bMC05XSsvO1xyXG4gICAgLy8gICAgICAgICBpZiAodmFsLm1hdGNoKGZsb2F0VmFsdWVzKSAmJiAhaXNOYU4odmFsKSkge1xyXG4gICAgLy8gICAgICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgXCI8aSBjbGFzcz0nZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnPjwvaT4gdmV1aWxsZXogc2Fpc2lyIHVuIG5vbWJyZSBkYW5zIGxlIGNoYW1wcyBcIiArJCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykucG9wKCkgKyBcIjxicj5cIjtcclxuICAgIC8vICAgICAgICAgICAgICQoJy51YV9hbGVydF9kYW5nZXInKS5odG1sKG1lc3NhZ2UpO1xyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIGlmKG1lc3NhZ2UgIT0gXCJcIil7XHJcbiAgICAvLyAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmZhZGVJbigpO1xyXG4gICAgLy8gfWVsc2V7XHJcbiAgICAvLyAgICAgJCgnLnVhX2FsZXJ0X2RhbmdlcicpLmZhZGVPdXQoKTtcclxuICAgIC8vIH1cclxuICAgIC8vICByZXR1cm4gbWVzc2FnZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxudmFyIGFydGljbGVzRGV0ID0gW107XHJcblxyXG4vLyAtLS0tLS0tLS0tLVxyXG5cclxuJChcIi5uZXdcIikub24oXCJjbGlja1wiLCBcIi5kZXRhaWxfZm9ybVwiLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuICAgIHZhciBteWJ1dHRvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgdmFyIHRlc3QgPSBmYWxzZTtcclxuXHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICBBcmljbGVTZWxlY3RlZCA9ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZDtcclxuXHJcbiAgICAvLyBpZihBcmljbGVTZWxlY3RlZCA9PSAxICYmIHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSkgPiAxKSB7XHJcbiAgICAvLyAgICAgdG9hc3RyLmVycm9yKFxyXG4gICAgLy8gICAgICAgICAnVm91cyBuZSBwb3V2ZXogcGFzIHBhc3NlciAxIERIJyxcclxuICAgIC8vICAgICAgICAgJ0VycmV1cicsXHJcbiAgICAvLyAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9IFxyXG5cclxuICAgIHZhciB1bml0ZSA9ICQoJyNzZWxlY3QyLXRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF91bml0ZS1jb250YWluZXInICApLmF0dHIoJ3RpdGxlJyk7XHJcblxyXG4gICAgLy8gYWxlcnQobmFtZURldGFpbCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIGZhbHNlO1xyXG5cclxuXHJcbiAgICAkKCcuZXJyb3ItY2xhc3MtdGFiJykucmVtb3ZlKCk7XHJcbiAgICB2YXIgZmxhZyA9IDA7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybURhdGFEZXRhaWwubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKGZvcm1EYXRhRGV0YWlsW2luZGV4XS5hcnRpY2xlSWQgPT0gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkICYmIGVkaXRBcnRpY2xlQ29sdW1uICE9IGZvcm1EYXRhRGV0YWlsW2luZGV4XS5hcnRpY2xlSWQpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5DZSBhcnRpY2xlIGVzdCBkZWphIGV4aXN0ZTwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgdG9hc3RyLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ0NlIGFydGljbGUgZXN0IGRlamEgZXhpc3RlJyxcclxuICAgICAgICAgICAgICAgICdFcnJldXInLFxyXG4gICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlcnJvcnNfZGV0YWlscy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICB2YXIgbmFtZSA9IG5hbWVEZXRhaWwgKyAnWycgKyBlcnJvcnNfZGV0YWlsc1tpbmRleF0ucHJvcGVydHkgKyAnXSc7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJCgnW25hbWU9XCInICsgbmFtZURldGFpbCArICdbJyArIGVycm9yc19kZXRhaWxzW2luZGV4XS5wcm9wZXJ0eSArICddJyArICdcIl0nKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKGVycm9yc19kZXRhaWxzW2luZGV4XS5jYXVzZSA9PSBudWxsICYmIHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICAvLyAkKCdbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIGVycm9yc19kZXRhaWxzW2luZGV4XS5tZXNzYWdlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgIHRvYXN0ci5lcnJvcihcclxuICAgICAgICAgICAgICAgICBlcnJvcnNfZGV0YWlsc1tpbmRleF0ubWVzc2FnZSAsXHJcbiAgICAgICAgICAgICAgICAnRXJyZXVyJyxcclxuICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhZyA9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYWxlcnQgKCd6aWtvJyk7XHJcblxyXG5cclxuICAgIGlmICh1bml0ZSA9PSAnRScpIHtcclxuICAgICAgICAkKFwiI01vZGFsRG9jdW1lXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAkKCcudWFfY29uZmlybWVyX2FubnVsZXInKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgYXJ0aWNsZXNEZXQucHVzaChBcmljbGVTZWxlY3RlZCk7XHJcbiAgICAgICAgcmVtcGxpclRhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFydGljbGVzRGV0LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIF9hcnIpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gQXJpY2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnVhX2NvbmZpcm1lcl9hbm51bGVyJykuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVtcGxpclRhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsQXJ0aWNsZXMuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgX2Fycikge1xyXG4gICAgICAgIGlmIChlbGVtZW50LkFyaWNsZVNlbGVjdGVkID09IEFyaWNsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICQoJy51YV9jb25maXJtZXJfYW5udWxlcicpLmZhZGVJbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHJvdyA9IHtcclxuICAgICAgICBxdWFudGl0ZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19xdWFudGl0ZScpLnZhbCgpLFxyXG4gICAgICAgIHByaXh1bml0YWlyZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3ByaXh1bml0YWlyZScpLnZhbCgpKSxcclxuICAgICAgICB0dmE6ICQoJyMnICsgbmFtZURldGFpbCArICdfdHZhJykudmFsKCksXHJcbiAgICAgICAgcmVtaXNlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3JlbWlzZScpLnZhbCgpLFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlZGl0Q29sdW1uICE9IG51bGwpIHtcclxuICAgICAgICB2YXIgbXlzZWxlY3QgPSBteWJ1dHRvbi5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLnVuaXRlX2VkaXQgOnNlbGVjdGVkXCIpXHJcbiAgICAgICAgZm9ybURhdGFEZXRhaWxbZWRpdENvbHVtbl0gPSB7XHJcbiAgICAgICAgICAgIGFydGljbGVJZDogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICB0aXRyZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLnRleHQsXHJcbiAgICAgICAgICAgIGNvZGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlID8gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmNvZGUgOiBjb2RlLFxyXG4gICAgICAgICAgICB1bml0ZTogbXlzZWxlY3QudGV4dCgpLFxyXG4gICAgICAgICAgICB1bml0ZUlkOm15c2VsZWN0LnZhbCgpLFxyXG4gICAgICAgICAgICBxdWFudGl0ZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3F1YW50aXRlJykudmFsKCkpLFxyXG4gICAgICAgICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgICAgICAgIHR2YTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3R2YScpLnZhbCgpKSxcclxuICAgICAgICAgICAgcmVtaXNlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcmVtaXNlJykudmFsKCkpLFxyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbjogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19vYnNlcnZhdGlvbicpLnZhbCgpLFxyXG4gICAgICAgICAgICBtb250YW50UmVtaXNlOiBnZXRSZW1pc2Uocm93KSxcclxuICAgICAgICAgICAgcHJpeHR0YzogZ2V0UHJpeFRUYyhyb3cpLFxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZm9ybURhdGFEZXRhaWwucHVzaCh7XHJcbiAgICAgICAgICAgIGFydGljbGVJZDogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICB0aXRyZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLnRleHQsXHJcbiAgICAgICAgICAgIGNvZGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlID8gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmNvZGUgOiBjb2RlLFxyXG4gICAgICAgICAgICB1bml0ZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ191bml0ZScpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0LFxyXG4gICAgICAgICAgICB1bml0ZUlkOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3VuaXRlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICBxdWFudGl0ZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3F1YW50aXRlJykudmFsKCkpLFxyXG4gICAgICAgICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgICAgICAgIHR2YTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3R2YScpLnZhbCgpKSxcclxuICAgICAgICAgICAgcmVtaXNlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcmVtaXNlJykudmFsKCkpLFxyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbjogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19vYnNlcnZhdGlvbicpLnZhbCgpLFxyXG4gICAgICAgICAgICBtb250YW50UmVtaXNlOiBnZXRSZW1pc2Uocm93KSxcclxuICAgICAgICAgICAgcHJpeHR0YzogZ2V0UHJpeFRUYyhyb3cpLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxpbmVObyA9IDE7XHJcbiAgICB2YXIgY2wgPSBcIlwiO1xyXG4gICAgJChcIi5kZXRfZm9yXCIpXHJcbiAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgIC5hZnRlcihcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2FkLWVyXCI+PGRpdiBjbGFzcz1cImxkcy1lbGxpcHNpc1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj48L2Rpdj4nXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducygkKFwiLmFydGljbGVzXCIpLCBcIlwiKTtcclxuICAgICQoXCIudGFibGUtZGV0YWlsICsgdGFibGUgXCIpLnJlbW92ZUNsYXNzKCdyZW1vdmUnKTtcclxuICAgICQoJy50YWJsZS1kZXRhaWwgdGJvZHknKS5odG1sKCcnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhRGV0YWlsKVxyXG4gICAgJC5lYWNoKGZvcm1EYXRhRGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChsaW5lTm8gJSAyID09IDApIHtcclxuICAgICAgICAgICAgY2wgPSBcImltcGFpclwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJwYWlyXCJcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgdHZhID0gdmFsdWUudHZhICsgXCIgJVwiO1xyXG4gICAgICAgIHZhciByZW1pc2UgPSB2YWx1ZS5yZW1pc2UgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9uID0gdmFsdWUub2JzZXJ2YXRpb247XHJcbiAgICAgICAgaWYgKHZhbHVlLnR2YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHR2YSA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbiA9IFwiPHRyIGNsYXNzPVwiICsgY2wgKyBcIj48dGQ+PC90ZD48dGQgY29sc3Bhbj0nOSc+PGI+SW5mb3JtYXRpb25zIGNvbXBsZW1lbnRhaXJlcyA6IDwvYj5cIiArIG9ic2VydmF0aW9uICsgXCI8L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2F0ZWdvcmllXHJcbiAgICAgICAgdmFyIG15X3JvdyA9XHJcbiAgICAgICAgICAgIFwiIDx0ciBzdHlsZT0ndGV4dC1hbGlnbjpzdGFydCcgIGNsYXNzPVwiICsgY2wgKyBcIj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAoaSArIDEpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpzdGFydCcgPlwiKyB2YWx1ZS5hcnRpY2xlSWQgK1wiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246c3RhcnQnID5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcicgPlwiICtcclxuICAgICAgICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcicgPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+IDx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInID5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInID5cIiArXHJcbiAgICAgICAgICAgIHR2YSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJyA+XCIgK1xyXG4gICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcicgPlwiICtcclxuICAgICAgICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInID5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGRlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXInPjwvaT48L2E+IDxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBlZGl0X2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS1lZGl0IHRleHQtcHJpbWFyeSc+PC9pPjwvYT48L3RkPjwvdHI+XCIgKyBvYnNlcnZhdGlvbjtcclxuICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuYXBwZW5kKG15X3Jvdyk7XHJcbiAgICAgICAgbGluZU5vKys7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobXlfcm93KTtcclxuICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQoXCIjY3JlYXRlX2RlbWFuZGVcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHJcblxyXG4gICAgJCgnLmRldF9mb3IgaW5wdXQsLmRldF9mb3Igc2VsZWN0LC5kZXRfZm9yIHRleHRhcmVhJykudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAgIGVkaXRDb2x1bW4gPSBudWxsO1xyXG4gICAgZWRpdEFydGljbGVDb2x1bW4gPSBudWxsO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vdG9hc3RyLndhcm5pbmcoXCJDZXQgYXJ0aWNsZSBleGlzdGUgZGVqYSBcIiwgXCJ3YXJuaW5nIFwiLCB7dGltZU91dDogNDAwMH0pO1xyXG5cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXdcIikub24oXCJjbGlja1wiLCBcIi5lZGl0X2VsZW1lbnRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgZWRpdENvbHVtbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIGVkaXRBcnRpY2xlQ29sdW1uID0gZm9ybURhdGFEZXRhaWxbJCh0aGlzKS5hdHRyKCdpZCcpXVsnYXJ0aWNsZUlkJ107XHJcblxyXG4gICAgdmFyIGNsID0gXCJcIjtcclxuICAgIHZhciBsaW5lTm8gPSAxO1xyXG4gICAgJCgnLnRhYmxlLWRldGFpbCB0Ym9keScpLmh0bWwoJycpO1xyXG4gICAgJC5lYWNoKGZvcm1EYXRhRGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChsaW5lTm8gJSAyID09IDApIHtcclxuICAgICAgICAgICAgY2wgPSBcImltcGFpclwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJwYWlyXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHR2YSA9IHZhbHVlLnR2YSArIFwiICVcIjtcclxuICAgICAgICB2YXIgcmVtaXNlID0gdmFsdWUucmVtaXNlICsgXCIgJVwiO1xyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbiA9IHZhbHVlLm9ic2VydmF0aW9uO1xyXG4gICAgICAgIGlmICh2YWx1ZS50dmEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLm9ic2VydmF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2YXRpb24gPSBcIjx0ciBjbGFzcz1cIiArIGNsICsgXCI+PHRkPjwvdGQ+PHRkIGNvbHNwYW49JzknPjxiPkluZm9ybWF0aW9ucyBjb21wbGVtZW50YWlyZXMgOiA8L2I+XCIgKyBvYnNlcnZhdGlvbiArIFwiPC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NhdGVnb3JpZVxyXG4gICAgICAgIHZhciBteV9yb3cgPVxyXG4gICAgICAgICAgICBcIiA8dHIgY2xhc3M9XCIgKyBjbCArIFwiPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIChpICsgMSkgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOnN0YXJ0JyA+XCIrIHZhbHVlLmFydGljbGVJZCArXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpzdGFydCc+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnRpdHJlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcic+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5xdWFudGl0ZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD4gPHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcic+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dW5pdGFpcmUudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgIHR2YSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgIHJlbWlzZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLm1vbnRhbnRSZW1pc2UudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGRlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXInPjwvaT48L2E+IDxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBlZGl0X2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS1lZGl0IHRleHQtcHJpbWFyeSc+PC9pPjwvYT48L3RkPjwvdHI+XCIgKyBvYnNlcnZhdGlvbjtcclxuICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuYXBwZW5kKG15X3Jvdyk7XHJcbiAgICAgICAgbGluZU5vKys7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgdmFyIHJvd19pbmRleCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHZhciBjb2xfaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGV0YWlsOiBmb3JtRGF0YURldGFpbFskKHRoaXMpLmF0dHIoJ2lkJyldXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZWRpdF9kZXRhaWxfbmV3XCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAkKCcudGFibGUtZGV0YWlsIHRyJykuZXEocm93X2luZGV4KzEpLmFkZENsYXNzKCd0YWJsZS10ci1zdHlsZScpO1xyXG4gICAgICAgICAgICAkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEocm93X2luZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwidGFibGUtdHItc3R5bGVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKFwiPHRkIGNvbHNwYW49JzEwJz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoXHJcbiAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSkuZmluZChcIi5hcnRpY2xlc1wiKSxcclxuICAgICAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuYXJ0aWNsZXNcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWYtc2VsZWN0ZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8kKFwiLmxvYWQtZXJcIikuZmFkZU91dCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyAkKCcuZGV0X2ZvcicpLmZhZGVJbigyMDApXHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIi50YWJsZS1kZXRhaWwgKyB0YWJsZSBcIikuYWRkQ2xhc3MoJ3JlbW92ZScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgIGFsZXJ0KHJvd19pbmRleCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdmFyIHNsaCA9IHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmVtcHR5KCkuYXBwZW5kKFwiPHRkIHN0eWxlPSdkaXNwbGF5OiBub25lOyc+XCIgKyByZXN1bHQgKyBcIjwvdGQ+XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLy8kKCcudGFibGUtZGV0YWlsIHRib2R5IHRyOm5vdCguZWRpdC1kZXRhaWwpJykucmVtb3ZlKCk7XHJcblxyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGV0YWlsX2Zvcm1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIG15YnV0dG9uID0gJCh0aGlzKTtcclxuICAgICQoJy5lcnJvci1jbGFzcy10YWInKS5yZW1vdmUoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjX2lkXCIpLnZhbCgpO1xyXG4gICAgdmFyIGZsYWcgPSAwO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZvcm1EYXRhRGV0YWlsLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChmb3JtRGF0YURldGFpbFtpbmRleF0uYXJ0aWNsZUlkID09ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZCkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPkNlIGFydGljbGUgZXN0IGRlamEgZXhpc3RlPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICB0b2FzdHIuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnQ2UgYXJ0aWNsZSBlc3QgZGVqYSBleGlzdGUnLFxyXG4gICAgICAgICAgICAgICAgJ0VycmV1cicsXHJcbiAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBpZiAoKCQoJy5lZGl0LWRldGFpbFthcnRpY2xlPVwiJyArICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZCArICdcIl0nKS5hdHRyKCdhcnRpY2xlJykgPT0gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkKSAmJiAoJCh0aGlzKS5wYXJlbnRzKCcuZWRpdC1kZXRhaWwnKS5hdHRyKCdhcnRpY2xlJykgIT0gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkKSkge1xyXG4gICAgICAgIC8vIHJldHVybiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+Q2UgYXJ0aWNsZSBlc3QgZGVqYSBleGlzdGU8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgdG9hc3RyLmVycm9yKFxyXG4gICAgICAgICAgICAnQ2UgYXJ0aWNsZSBlc3QgZGVqYSBleGlzdGUnLFxyXG4gICAgICAgICAgICAnRXJyZXVyJyxcclxuICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVycm9yc19kZXRhaWxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIHZhciBuYW1lID0gbmFtZURldGFpbCArICdbJyArIGVycm9yc19kZXRhaWxzW2luZGV4XS5wcm9wZXJ0eSArICddJztcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKCdbbmFtZT1cIicgKyBuYW1lRGV0YWlsICsgJ1snICsgZXJyb3JzX2RldGFpbHNbaW5kZXhdLnByb3BlcnR5ICsgJ10nICsgJ1wiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoZXJyb3JzX2RldGFpbHNbaW5kZXhdLmNhdXNlID09IG51bGwgJiYgdmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgICAgIC8vICQoJ1tuYW1lPVwiJyArIG5hbWUgKyAnXCJdJykucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzX2RldGFpbHNbaW5kZXhdLm1lc3NhZ2UgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzX2RldGFpbHNbaW5kZXhdLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAnRXJyZXVyJyxcclxuICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhZyA9PSAxKSB7c2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHJvdyA9IHtcclxuICAgICAgICBxdWFudGl0ZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19xdWFudGl0ZScpLnZhbCgpLFxyXG4gICAgICAgIHByaXh1bml0YWlyZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3ByaXh1bml0YWlyZScpLnZhbCgpKSxcclxuICAgICAgICB0dmE6ICQoJyMnICsgbmFtZURldGFpbCArICdfdHZhJykudmFsKCksXHJcbiAgICAgICAgcmVtaXNlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3JlbWlzZScpLnZhbCgpLFxyXG4gICAgfVxyXG4gICAgZm9ybURhdGFEZXRhaWwgPSBbXTtcclxuICAgIHZhciBteXNlbGVjdCA9IG15YnV0dG9uLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIudW5pdGVfZWRpdCA6c2VsZWN0ZWRcIilcclxuICAgIGZvcm1EYXRhRGV0YWlsLnB1c2goe1xyXG4gICAgICAgIGlkOiAkKHRoaXMpLnBhcmVudHMoJy5lZGl0LWRldGFpbCcpLmF0dHIoJ2lkJyksXHJcbiAgICAgICAgYXJ0aWNsZUlkOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQsXHJcbiAgICAgICAgdGl0cmU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0LFxyXG4gICAgICAgIGNvZGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlLFxyXG4gICAgICAgIHVuaXRlOiBteXNlbGVjdC50ZXh0KCksXHJcbiAgICAgICAgdW5pdGVJZDogbXlzZWxlY3QudmFsKCksXHJcbiAgICAgICAgcXVhbnRpdGU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19xdWFudGl0ZScpLnZhbCgpKSxcclxuICAgICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgICAgdHZhOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfdHZhJykudmFsKCkpLFxyXG4gICAgICAgIHJlbWlzZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3JlbWlzZScpLnZhbCgpKSxcclxuICAgICAgICBvYnNlcnZhdGlvbjogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19vYnNlcnZhdGlvbicpLnZhbCgpLFxyXG4gICAgICAgIG1vbnRhbnRSZW1pc2U6IGdldFJlbWlzZShyb3cpLFxyXG4gICAgICAgIHByaXh0dGM6IGdldFByaXhUVGMocm93KSxcclxuICAgIH0pO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGFEZXRhaWwpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2RldGFpbCcsIGRhdGEpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVkZXRfaW5zZXJ0XCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIC8qICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICQoXCIuZGV0YWlsX2Zvcm1fZWRpdCAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy9sLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL3RvYXN0ci53YXJuaW5nKFwiQ2V0IGFydGljbGUgZXhpc3RlIGRlamEgXCIsIFwid2FybmluZyBcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZV9lbGVtZW50XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGZvcm1EYXRhRGV0YWlsLnNwbGljZSgkKHRoaXMpLmF0dHIoXCJpZFwiKSwgMSlcclxuICAgICQoJy5lZGl0IC50YWJsZS1kZXRhaWwgdGJvZHkgdHI6bm90KC5lZGl0LWRldGFpbCknKS5yZW1vdmUoKTtcclxuICAgIHZhciBjbCA9IFwiXCI7XHJcbiAgICB2YXIgbGluZU5vID0gMTtcclxuICAgICQuZWFjaChmb3JtRGF0YURldGFpbCwgZnVuY3Rpb24oaSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAobGluZU5vICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJpbXBhaXJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbCA9IFwicGFpclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIHJlbWlzZSA9IHZhbHVlLnJlbWlzZSArIFwiICVcIjtcclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgdHZhID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uID0gXCI8dHIgY2xhc3M9XCIgKyBjbCArIFwiPjx0ZD48L3RkPjx0ZCBjb2xzcGFuPSc5Jz48Yj5JbmZvcm1hdGlvbnMgY29tcGxlbWVudGFpcmVzIDogPC9iPlwiICsgb2JzZXJ2YXRpb24gKyBcIjwvdGQ+PC90cj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG15X3JvdyA9XHJcbiAgICAgICAgICAgIFwiIDx0ciBjbGFzcz1cIiArIGNsICsgXCI+PHRkPlwiICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpzdGFydCcgPlwiKyB2YWx1ZS5hcnRpY2xlSWQgK1wiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcic+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS51bml0ZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnF1YW50aXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPiA8dGQgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyJz5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgdHZhICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgcmVtaXNlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZCBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXInPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucHJpeHR0Yy50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD48YSBjbGFzcz0nYnRuIGJ0bi13aGl0ZSBidG4teHMgdXBwZXIgZGVsZXRlX2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS10cmFzaCB0ZXh0LWRhbmdlcic+PC9pPjwvYT4gPGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGVkaXRfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLWVkaXQgdGV4dC1wcmltYXJ5Jz48L2k+PC9hPjwvdGQ+PC90cj5cIiArIG9ic2VydmF0aW9uO1xyXG4gICAgICAgICQoXCIuZWRpdCAudGFibGUtZGV0YWlsIHRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG52YXIgZm9ybURhdGFEZXRhaWxFZGl0UmVtb3ZlID0gW107XHJcbiQoJy5lZGl0Jykub24oJ2NsaWNrJywgJy5kZXRhaWxfZm9ybV9kZWxldGUnLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XHJcblxyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9kZWxldGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5lZGl0LWRldGFpbFtpZD1cIicgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQuZGF0YSA9IFwiZXJyb3JcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvL2Zvcm1EYXRhRGV0YWlsRWRpdFJlbW92ZS5wdXNoKHtpZDogJCh0aGlzKS5hdHRyKCdpZCcpLHRva2VuOiQodGhpcykuYXR0cigndmFsdWUnKX0pO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm1EYXRhRGV0YWlsRWRpdFJlbW92ZSk7XHJcbiAgICB9KVxyXG4gICAgLypcclxuICAgICAqXHJcbiAgICAgKiBFZGl0IG9wZXJhdGlvbnNcclxuICAgICAqXHJcbiAgICAgKi9cclxuXHJcblxyXG5cclxuJChcIi5wZXJzb25hbGlzZVwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9wZXJzb25hbGlzZVwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuYWpvdXRcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfdXBsb2FkXCIsIHtcclxuICAgICAgICAgICAgaWQ6ICQodGhpcykuY2xvc2VzdChcImFcIikuYXR0cihcImlkXCIpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKFwiLmJvZDFcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfZG9zc2llcnNcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaG9peCBEb3Nzc2llclwiLFxyXG4gICAgICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZTFcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAkKFwic2VsZWN0LnNlbGVjdDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zcHIxXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kMVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5fdXBsb2FkXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgYWxlcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX3VwbG9hZFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1fZGVsZXRlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9IGR0YS5nZXQoXCJfdG9rZW5cIik7XHJcblxyXG4gICAgLy8gICAgdmFyIGlkID0gJChcImlucHV0W25hbWU9X2lkXVwiKS52YWwoKTtcclxuICAgIC8vICAgIHZhciB0b2tlbiA9ICQoXCJpbnB1dFtuYW1lPV90b2tlbl1cIikudmFsKCk7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVkZXRfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhID09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zd2FsKHJlc3VsdC5tZXNzYWdlLnRpdGxlLCByZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLypcclxuICpcclxuICogYWZmaWNoZXIgbGEgZm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gIGQndW4gbm91dmVhdSBhcnRpY2xlXHJcbiAqXHJcbiAqL1xyXG4kKFwiLmVkaXRcIikub24oXCJjbGlja1wiLCBcIi5kZXRhaWxfZWRpdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvL2FsZXJ0KCQodGhpcykuYXR0cignaWQnKSlcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHZhciByb3dfaW5kZXggPSAkKHRoaXMpLmNsb3Nlc3QoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuaW5kZXgoKTtcclxuICAgIHZhciBjb2xfaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9lZGl0X2RldGFpbFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gJCgnLnRhYmxlLWRldGFpbCB0cicpLmVxKHJvd19pbmRleCsxKS5hZGRDbGFzcygndGFibGUtdHItc3R5bGUnKTtcclxuICAgICAgICAgICAgJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKVxyXG4gICAgICAgICAgICAgICAgLmVxKHJvd19pbmRleClcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInRhYmxlLXRyLXN0eWxlXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChcIjx0ZCBjb2xzcGFuPScxMCc+XCIgKyByZXN1bHQgKyBcIjwvdGQ+XCIpO1xyXG4gICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmRldF9mb3JcIilcclxuICAgICAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgICAgIC5hZnRlcihcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWQtZXJcIj48ZGl2IGNsYXNzPVwibGRzLWVsbGlwc2lzXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKFxyXG4gICAgICAgICAgICAgICAgJCgkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmVxKHJvd19pbmRleCkpLmZpbmQoXCIuYXJ0aWNsZXNcIiksXHJcbiAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmFydGljbGVzXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImlmLXNlbGVjdGVkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vJChcIi5sb2FkLWVyXCIpLmZhZGVPdXQoKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgLy8gJCgnLmRldF9mb3InKS5mYWRlSW4oMjAwKVxyXG4gICAgICAgICAgICAkKFwiLmJvZFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiLnNwclwiKS5mYWRlSW4oKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVcIiksXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBLVERhdGF0YWJsZXNTZWFyY2hPcHRpb25zQWR2YW5jZWRTZWFyY2guaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgYWxlcnQocm93X2luZGV4KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB2YXIgc2xoID0gc2VsZWN0b3IucGFyZW50KCkucGFyZW50KCkuZW1wdHkoKS5hcHBlbmQoXCI8dGQgc3R5bGU9J2Rpc3BsYXk6IG5vbmU7Jz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIubmV3XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGV0YWlsX2VkaXRcIiwgZnVuY3Rpb24oZSkge1xyXG5cclxuXHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICB2YXIgcm93X2luZGV4ID0gJCh0aGlzKS5jbG9zZXN0KFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmluZGV4KCk7XHJcbiAgICB2YXIgY29sX2luZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZWRpdF9kZXRhaWxcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vICQoJy50YWJsZS1kZXRhaWwgdHInKS5lcShyb3dfaW5kZXgrMSkuYWRkQ2xhc3MoJ3RhYmxlLXRyLXN0eWxlJyk7XHJcbiAgICAgICAgICAgICQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIilcclxuICAgICAgICAgICAgICAgIC5lcShyb3dfaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJ0YWJsZS10ci1zdHlsZVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoXCI8dGQgY29sc3Bhbj0nMTAnPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgICAgJCgkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmVxKHJvd19pbmRleCkpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5kZXRfZm9yXCIpXHJcbiAgICAgICAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2FkLWVyXCI+PGRpdiBjbGFzcz1cImxkcy1lbGxpcHNpc1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducyhcclxuICAgICAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKS5maW5kKFwiLmFydGljbGVzXCIpLFxyXG4gICAgICAgICAgICAgICAgJCgkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmVxKHJvd19pbmRleCkpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5hcnRpY2xlc1wiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJpZi1zZWxlY3RlZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyQoXCIubG9hZC1lclwiKS5mYWRlT3V0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIC8vICQoJy5kZXRfZm9yJykuZmFkZUluKDIwMClcclxuICAgICAgICAgICAgJChcIi5ib2RcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChcIi5zcHJcIikuZmFkZUluKCk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgIGFsZXJ0KHJvd19pbmRleCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdmFyIHNsaCA9IHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmVtcHR5KCkuYXBwZW5kKFwiPHRkIHN0eWxlPSdkaXNwbGF5OiBub25lOyc+XCIgKyByZXN1bHQgKyBcIjwvdGQ+XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqXHJcbiAqIEVucmVnaXN0cmVyICBsYSBmb3JtdWxhaXJlIGRlIG1vZGlmaWNhdGlvbiAgZCdhcnRpY2xlXHJcbiAqXHJcbiAqL1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGR0YSk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl91cGRhdGVfZGV0YWlsXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLyphZmZpY2hlciBsYSBmb3JtdWxhaXJlIGQnYWpvdXQgZCd1biBub3V2ZWF1IGFydGljbGUgKi9cclxuXHJcbi8vJCgnLmVkaXQtbmV3LWFydGljbGUtYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgJCgnLmVkaXQtbmV3LWFydGljbGUnKS5zaG93KCk7XHJcbi8vICAgICQodGhpcykuaGlkZSgpO1xyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSk7XHJcblxyXG4kKFwiLm5ldy1hcnRpY2xlLWJ0blwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAkKFwiLnJlbW92ZS1pdGVtLWVkaXQtYWRkXCIpLnJlbW92ZUNsYXNzKCdyZW1vdmUtaXRlbS1lZGl0LWFkZCcpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLypBam91dGVyIHVuIG5vdXZlYXUgYXJ0aWNsZSBkYW5zIGxhIHBhZ2UgZGUgbW9kaWZpY2F0aW9uICovXHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1fYWRkX2FydGljbGVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgLy9hbGVydChcImhpXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGlkID0gJChcIiNfaWRcIikudmFsKCk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lZGV0X2luc2VydFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgLyogICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgJChcIi5kZXRhaWxfZm9ybV9lZGl0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLnNob3ctbWVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuYWN0aW9uc1wiKS5vbihcImNsaWNrXCIsIFwiLmNsb3NlLW1lXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vJCgnLmNsb3NlLW1lJykuY2xpY2soZnVuY3Rpb24gKGUpe1xyXG4gICAgJChcIi5hY3Rpb25zXCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqXHJcbiAqIGFmZmljaGVyIGxhIGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uICBkJ3VuIG5vdXZlYXUgYXJ0aWNsZVxyXG4gKlxyXG4gKi9cclxuXHJcbiQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJsZS4kKFwidHIuc2VsZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIG1lbSA9ICQoXCIjZGF0YV8xIC5pbnB1dC1ncm91cC5kYXRlXCIpLmRhdGVwaWNrZXIoe1xyXG4gICAgdG9kYXlCdG46IFwibGlua2VkXCIsXHJcbiAgICBrZXlib2FyZE5hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgZm9yY2VQYXJzZTogZmFsc2UsXHJcbiAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxyXG4gICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG59KTtcclxuXHJcbnZhciB5ZWFyc0FnbyA9IG5ldyBEYXRlKCk7XHJcbnllYXJzQWdvLnNldEZ1bGxZZWFyKHllYXJzQWdvLmdldEZ1bGxZZWFyKCkgLSAyMCk7XHJcblxyXG4kKFwiI3NlbGVjdG9yXCIpLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIHllYXJzQWdvKTtcclxuXHJcbiQoXCIuYWN0aW9uc1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtX3N0YXR1dFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfc3RhdHV0XCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybV9zdGF0dXQgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWwudGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnRpdGxlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRXJyZXVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuX3RfYWZmYWlyZV9xdWlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWZmYWlyZV9uZXdfcXVpY2tcIiksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJzdWJtaXRcIiwgXCIuZm9ybV90X2FmZmFpcmVfcXVpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpWzBdO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FmZmFpcmVfbmV3X3F1aWNrX2luc2VydFwiKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLlwiICsgc2VsZWN0b3IgKyBcIiAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwudGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfbmV3XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFmZmFpcmVcIikucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKFwiLmFmZmFpcmVcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfZWRpdFwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2VkaXRcIiwgeyBpZDogaWQgfSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI19zaG93XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX3Nob3dcIiwgeyBpZDogaWQgfSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI19zdGF0dXRcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX3N0YXR1dFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfYXJjaGl2ZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBBcmNoaXZlciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBBcmNoaXZlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9hcmNoaXZlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiwgXCIuX211bHRpcGxlX2FjdGlvbnNcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydCgpO1xyXG4gICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uMl06Y2hlY2tlZFwiKSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpO1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJfaW1wcmltZXJcIikge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9wZGZTaG93XCIpLFxyXG4gICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgd2luZG93Lm9wZW4ocmVzdWx0LCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIC8qICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgICQoXCIuX211bHRpcGxlX2FjdGlvbnNcIikudmFsKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICQoXCJib2R5ID4gLl9tdWx0aXBsZV9hY3Rpb25zIG9wdGlvblt2YWx1ZT0nJ11cIikuYXR0cignc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID09IFwiX2RlbGV0ZV9kZW1hbmRlXCIpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVkZXRfbXVsdGlwbGVfZGVsZXRlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5fbXVsdGlwbGVfYWN0aW9uc1wiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gXCJfZGVzYWN0aXZlclwiKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZGVzYWN0aXZlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtYmFuJz48L2k+IE91aSwgRGVzYWN0aXZlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfcHJlY29tbWFuZGVfZGVtbWFuZGVfZGVzYWN0aXZlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBfYXJyYXlfaWRzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuX211bHRpcGxlX2FjdGlvbnNcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIl9hcmNoaXZlclwiKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgQXJjaGl2ZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBBcmNoaXZlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9hcmNoaXZlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBfYXJyYXlfaWRzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLl9tdWx0aXBsZV9hY3Rpb25zXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChcIiNfZ2VuZXJlclwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZ2VuZXJlclwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vKiQoJy5hY3Rpb25zJykub24oJ3N1Ym1pdCcsICcuZm9ybV9nZW5lcmVyJywgZnVuY3Rpb24gKGUpIHtcclxuIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiBpZiAoaWQpIHtcclxuICQuYWpheCh7XHJcbiB0eXBlOiAnUE9TVCcsXHJcbiB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9nZW5lcmVyJywgeydpZCc6IGlkfSksXHJcbiBkYXRhOiBkdGEsXHJcbiBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiBjb250ZW50VHlwZTogZmFsc2UsXHJcbiBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gLy8gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0U3RhdHVzKTtcclxuIC8vICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xyXG4gaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiAkKFwiLmVycm9yc19saXN0XCIpLmh0bWwoXCJcIik7XHJcbiBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuIC8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAvLyAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KC9bW10sXS8pO1xyXG4gLy9cclxuIC8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZSk7XHJcbiBcclxuIFxyXG4gdmFyIHggPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gdmFyIHNlcGFyYXRvcnMgPSBbJ1xcXFxdJywgJ1xcXFxbJ107XHJcbiB2YXIgYXJyID0geC5zcGxpdChuZXcgUmVnRXhwKHNlcGFyYXRvcnMuam9pbignfCcpKSk7XHJcbiB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuIFxyXG4gJChcIi5lcnJvcnNfbGlzdFwiKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+XCIgKyBjb2x1bW5OYW1lICsgXCI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPiBcIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuIFxyXG4gXHJcbiB9KTtcclxuIFxyXG4gLy8gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gLy8gICAgICAgICAgICAgICAgICAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gLy8gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuIC8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuIC8vICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAvLyAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybV9nZW5lcmVyICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuIC8vICAgICAgICAgICAgICAgICAgICB9KTtcclxuIFxyXG4gfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiB9XHJcbiB9LFxyXG4gZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gfVxyXG4gfSk7XHJcbiB9IGVsc2Uge1xyXG4gdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiB9XHJcbiBcclxuIFxyXG4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gfSkqL1xyXG5cclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXHJcbiAgICBcImNsaWNrXCIsXHJcbiAgICBcIi50X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfYXBwbHlfdHJhbnNpdGlvbnNcIixcclxuICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRpdGxlXCIpO1xyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uID09ICdhcHJlc192YWxpZGVyX2NvbW1hbmRlcicpIHtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9hcHBseV9nZW5lcmVyXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlIC5ib2RcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zZWwyJykuc2VsZWN0MigpXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUyID0gJChcIi5ncmlkLXJlY2VwdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjIwJVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgLyosIHZpc2libGU6IHRydWUqLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgLyosIHZpc2libGU6IHRydWUqLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTIuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBnZW5lcmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGR0YS5hcHBlbmQoXCJpZFwiLCBpZCk7XHJcbiAgICAgICAgICAgIGR0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XHJcbiAgICAgICAgICAgIGR0YS5hcHBlbmQoXCJ0cmFuc2l0aW9uXCIsIHRyYW5zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDT05GSVJNQVRJT04gP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciBhIGwnZXRhdCAnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9hcHBseV90cmFuc2l0aW9uc1wiLCB7IGlkOiBpZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC52YWxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfYXBwbHlfZ2VuZXJlclwiLCB7IGlkOiByZXN1bHQuaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduZSBcIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuKTtcclxuXHJcbiQoXCIjX2ltcHJpbWVyXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJkZW1hbmRlSWRcIik7XHJcbiAgICAvLyB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuICAgIC8vYWxlcnQoaWQpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJwZGZfc2hvd1wiLCB7IGlkOiBpZCB9KTtcclxuICAgICAgICAvLyAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl9maWNoaWVyc1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgIGFsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIilbMF07XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpY2hpZXJzXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5fZGVsZXRlX2ZpY2hpZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maWNoaWVyc19kZWxldGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJJbXBvc3NpYmxlIGQnZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLCBcIndhcm5pbmdcIiwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8qJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIjdF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2FwcGx5X2dlbmVyZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2FwcGx5X2dlbmVyZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDb21tYW5kZSBub24gcmVuc2VpZ25lIFwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuICAgIH0gXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pOyovXHJcbnZhciBpY2VUaWVyVmFsaWRlID0gZmFsc2U7XHJcbnZhciBpZF90aWVycz1cIlwiO1xyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmJ0bi1tYWotaWNlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgYnV0dG9uID0gJChcIi5idG4tbWFqLWljZVwiKTtcclxuICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuICAgICQoXCIuZXJyb3ItY3VzdG9tXCIpLmhpZGUoKTtcclxuICAgICQoXCIuZXJyb3ItY3VzdG9tXCIpLmh0bWwoJycpO1xyXG4gICAgdmFyIGljZV90aWVycyA9ICQoXCIjaWNlLXRpZXJzXCIpLnZhbCgpO1xyXG4gICAgdmFyIG5vbV90aWVycyA9ICQoXCIjbm9tLXRpZXJzXCIpLnZhbCgpO1xyXG4gICAgdmFyIHRlbF90aWVycyA9ICQoXCIjdGVsLXRpZXJzXCIpLnZhbCgpO1xyXG4gICAgaWYgKGljZV90aWVycyAmJiAvXlxcZCskLy50ZXN0KGljZV90aWVycykgJiYgaWNlX3RpZXJzLmxlbmd0aD09MTUgJiYgaWRfdGllcnMgJiYgbm9tX3RpZXJzICYmIHRlbF90aWVycykge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJtaXNlX2Ffam91cl9pY2VcIiwge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkX3RpZXJzLCBpY2U6IGljZV90aWVyc1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbm9tX3RpZXJzOiBub21fdGllcnMsXHJcbiAgICAgICAgICAgICAgICB0ZWxfdGllcnM6IHRlbF90aWVycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWNlVGllclZhbGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZF90aWVycz1cIlwiO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICQoXCIuZm9ybV9nZW5lcmVyXCIpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNNb2RhbEFkZElDRVwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYoIWljZV90aWVycyl7XHJcbiAgICAgICAgICAgICQoXCIuaWNlX3RpZXJzXCIpLmh0bWwoXCI8aSBjbGFzcz0nZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJz48L2k+VmV1aWxsZXogcmVtcGxpciBjZSBjaGFtcC5cIik7XHJcbiAgICAgICAgICAgICQoXCIuaWNlX3RpZXJzXCIpLnNob3coKTtcclxuICAgICAgICAgICAgLy8gdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIElDRSBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoISAvXlxcZCskLy50ZXN0KGljZV90aWVycykgKXtcclxuICAgICAgICAgICAgJChcIi5pY2VfdGllcnNcIikuaHRtbChcIjxpIGNsYXNzPSdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnPjwvaT5WZXVpbGxleiBzYWlzaXIgZGVzIGNoaWZmcmVzLlwiKTtcclxuICAgICAgICAgICAgJChcIi5pY2VfdGllcnNcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAvLyB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IHNhaXNpciBkZXMgY2hpZmZyZXMgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpY2VfdGllcnMubGVuZ3RoIT0xNSl7XHJcbiAgICAgICAgICAgICQoXCIuaWNlX3RpZXJzXCIpLmh0bWwoXCI8aSBjbGFzcz0nZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJz48L2k+IElDRSBpbmNvcnJlY3QsIHbDqXJpZmllciBsJ0lDRSBzYWlzaTwvYj4uXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmljZV90aWVyc1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIC8vIHRvYXN0ci53YXJuaW5nKFwibGUgY2hhbXAgSUNFIGRvaXQgY29udGVuaXIgPGI+MTUgY2hpZmZyZXM8L2I+IFwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoIW5vbV90aWVycyl7XHJcbiAgICAgICAgJChcIi5ub21fdGllcnNcIikuaHRtbChcIjxpIGNsYXNzPSdmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnPjwvaT4gVmV1aWxsZXogcmVtcGxpciBjZSBjaGFtcC5cIik7XHJcbiAgICAgICAgJChcIi5ub21fdGllcnNcIikuc2hvdygpO1xyXG4gICAgICAgIC8vIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCBOb20gXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZighdGVsX3RpZXJzKXtcclxuICAgICAgICAkKFwiLnRlbF90aWVyc1wiKS5odG1sKFwiPGkgY2xhc3M9J2ZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc+PC9pPiBWZXVpbGxleiByZW1wbGlyIGNlIGNoYW1wLlwiKTtcclxuICAgICAgICAkKFwiLnRlbF90aWVyc1wiKS5zaG93KCk7XHJcbiAgICAgICAgLy8gdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIFRlbCBcIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyZXIoKSB7XHJcbiAgICAkKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtX2dlbmVyZXJcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiLmVycm9yLWN1c3RvbVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5lcnJvci1jdXN0b21cIikuaHRtbCgnJyk7XHJcbiAgICAgICAgaWYoIWljZVRpZXJWYWxpZGUpe1xyXG4gICAgICAgICAgICBpZF90aWVycyA9ICQoJyNmb3JtX2ZvdXJuaXNzZXVyJykudmFsKCk7XHJcbiAgICAgICAgICAgIGlmKCFpZF90aWVycyl7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IGNob2lzaXIgbGUgRm91cm5pc3NldXIgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJjaGVja0ljZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkX3RpZXJzLCBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdD09J2VtcHR5Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWVycyA9ICQoXCIjZm9ybV9mb3Vybmlzc2V1ciBvcHRpb246c2VsZWN0ZWRcIikudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI01vZGFsQWRkSUNFICNub21fdGllcnNcIikuaHRtbCh0aWVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNNb2RhbEFkZElDRSBpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjTW9kYWxBZGRJQ0VcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY2VUaWVyVmFsaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfdGllcnM9XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtX2dlbmVyZXJcIikudHJpZ2dlcignc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgICAgIHZhciBidXR0b24gPSAkKFwiLm15LWJ1dHRvbjJcIik7XHJcbiAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKVxyXG4gICAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcbiAgICAgICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgICAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gIGFsZXJ0KGlkKTtcclxuICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9hcHBseV9nZW5lcmVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3Jzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICQoXCIuZXJyb3JzX2xpc3RcIikuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChyZXN1bHQuZXJyb3JzcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0cldpZHRvdXRQcm9ncmVzcy53YXJuaW5nKHZhbHVlLCBcIndhcm5pbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxudmFyIHRhYmxlU2hvdyA9ICQoXCIjZGF0YXRhYmxlLXNob3dcIikuRGF0YVRhYmxlKHtcclxuICAgIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICAgIHNjcm9sbENvbGxhcHNlOiB0cnVlLFxyXG4gICAgcGFnaW5nOiBmYWxzZSxcclxuICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCIxMCVcIiB9LFxyXG4gICAgICAgIHsgd2lkdGg6IFwiMzUlXCIgfSxcclxuICAgICAgICB7IHdpZHRoOiBcIjIwJVwiIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICAgICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICBdLFxyXG4gICAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uKHJvdywgZGF0YSwgc3RhcnQsIGVuZCwgZGlzcGxheSkge1xyXG4gICAgICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICAgICAgICBkYXRhO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJChcIiNkYXRhdGFibGUtc2hvd1wiKS5hdHRyKFwiXCIpKTtcclxuICAgICAgICB2YXIgdG90YWwsIHBhZ2VUb3RhbDtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICAgICAgdmFyIGludFZhbCA9IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSBcInN0cmluZ1wiID9cclxuICAgICAgICAgICAgICAgIGkucmVwbGFjZSgvW1xcJCxdL2csIFwiXCIpICogMSA6XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgaSA9PT0gXCJudW1iZXJcIiA/XHJcbiAgICAgICAgICAgICAgICBpIDpcclxuICAgICAgICAgICAgICAgIDA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gVG90YWwgb3ZlciBhbGwgcGFnZXNcclxuICAgICAgICB0b3RhbCA9IGFwaVxyXG4gICAgICAgICAgICAuY29sdW1uKDcpXHJcbiAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgLy8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuICAgICAgICBwYWdlVG90YWwgPSBhcGlcclxuICAgICAgICAgICAgLmNvbHVtbig3LCB7IHBhZ2U6IFwiY3VycmVudFwiIH0pXHJcbiAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGZvb3RlclxyXG4gICAgICAgIC8qICQoYXBpLmNvbHVtbigxKS5mb290ZXIoKSlcclxuICAgICAgICAgLmh0bWwoXHJcbiAgICAgICAgIFwiVG90YWwgSFQgOiBcIiArXHJcbiAgICAgICAgICQoXCIjZGF0YXRhYmxlLXNob3dcIikuYXR0cihcImRhdGEtaHRcIikgK1xyXG4gICAgICAgICBcIjxici8+XCIgK1xyXG4gICAgICAgICBcIlRvdGFsIFRWQSA6IFwiICtcclxuICAgICAgICAgJChcIiNkYXRhdGFibGUtc2hvd1wiKS5hdHRyKFwiZGF0YS10dmFcIikgK1xyXG4gICAgICAgICBcIjxici8+XCIgK1xyXG4gICAgICAgICBcIlRvdGFsIFJlbWlzZSA6IFwiICtcclxuICAgICAgICAgJChcIiNkYXRhdGFibGUtc2hvd1wiKS5hdHRyKFwiZGF0YS1yZW1pc2VcIikgK1xyXG4gICAgICAgICBcIjxici8+XCIgK1xyXG4gICAgICAgICBcIlRvdGFsIFRUQyA6IFwiICtcclxuICAgICAgICAgJChcIiNkYXRhdGFibGUtc2hvd1wiKS5hdHRyKFwiZGF0YS10dGNcIilcclxuICAgICAgICAgKVxyXG4gICAgICAgICAuYWRkQ2xhc3MoXCJyaWdodC10aFwiKTtcclxuICAgICAgICAgJChhcGkuY29sdW1uKDIpLmZvb3RlcigpKVxyXG4gICAgICAgICAuaHRtbChcclxuICAgICAgICAgXCJUb3RhbCBIVCA6IFwiICtcclxuICAgICAgICAgJChcIiNkYXRhdGFibGUtc2hvd1wiKS5hdHRyKFwiZGF0YS1odFwiKSArXHJcbiAgICAgICAgIFwiPGJyLz5cIiArXHJcbiAgICAgICAgIFwiVG90YWwgVFZBIDogXCIgK1xyXG4gICAgICAgICAkKFwiI2RhdGF0YWJsZS1zaG93XCIpLmF0dHIoXCJkYXRhLXR2YVwiKSArXHJcbiAgICAgICAgIFwiPGJyLz5cIiArXHJcbiAgICAgICAgIFwiVG90YWwgUmVtaXNlIDogXCIgK1xyXG4gICAgICAgICAkKFwiI2RhdGF0YWJsZS1zaG93XCIpLmF0dHIoXCJkYXRhLXJlbWlzZVwiKSArXHJcbiAgICAgICAgIFwiPGJyLz5cIiArXHJcbiAgICAgICAgIFwiVG90YWwgVFRDIDogXCIgK1xyXG4gICAgICAgICAkKFwiI2RhdGF0YWJsZS1zaG93XCIpLmF0dHIoXCJkYXRhLXR0Y1wiKVxyXG4gICAgICAgICApXHJcbiAgICAgICAgIC5hZGRDbGFzcyhcInJpZ2h0LXRoXCIpOyovXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbnZhciB0YWJsZVNob3cgPSAkKFwiI2RhdGF0YWJsZS1zaG93MlwiKS5EYXRhVGFibGUoe1xyXG4gICAgc2Nyb2xsWTogXCIyMDBweFwiLFxyXG4gICAgc2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcbiAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgYXV0b1dpZHRoOiBmYWxzZSxcclxufSk7XHJcbnZhciBoID0gXCIzMDBcIjtcclxudmFyIHcgPSBcIjEwMDBcIjtcclxuJChcIi5yc1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgbGVmdCA9IHNjcmVlbi53aWR0aCAvIDIgLSB3IC8gMjtcclxuICAgIHZhciB0b3AgPSBzY3JlZW4uaGVpZ2h0IC8gMiAtIGggLyAyO1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlXCIpO1xyXG4gICAgdmFyIHdpbiA9IHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIiwgXCJ3aWR0aD1cIiArIHcgKyBcIiwgaGVpZ2h0PTMwMFwiKTtcclxuXHJcbiAgICB3aW4ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgY2xpY2tlZENsYXNzID0gZS50YXJnZXQuY2xhc3NOYW1lO1xyXG4gICAgICAgIHZhciBjbGlja2VkSUQgPSBlLnRhcmdldC5pZDtcclxuXHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLnBhcmVudCgpLmF0dHIoXCJjbGFzc1wiKSA9PSBcInRyIGFjdGl2ZS1zZWFyY2hcIikge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNlbDJcIikuZmluZChcclxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblt2YWx1ZT0nXCIgKyAkKGUudGFyZ2V0KS5wYXJlbnQoKS5hdHRyKFwiaWRcIikgKyBcIiddXCJcclxuICAgICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZWwyXCIpLnZhbCgkKGUudGFyZ2V0KS5wYXJlbnQoKS5hdHRyKFwiaWRcIikpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICB3aW4uY2xvc2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIERPTSBPcHRpb24gYW5kIHByZS1zZWxlY3QgYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IG5ldyBPcHRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuYXR0cihcInRleHRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCkuYXR0cihcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBpdCB0byB0aGUgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNlbDJcIikuYXBwZW5kKG5ld09wdGlvbikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgICAgIHdpbi5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcblxyXG4kKFwiLnRhYi1zZWFyY2ggdGJvZHkgdHJcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLnRhYi1zZWFyY2ggdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmUtc2VhcmNoXCIpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZS1zZWFyY2hcIik7XHJcbn0pO1xyXG4kKFwiLnRhYi1zZWFyY2ggdGhlYWQgdGhcIikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgLy8kKFwiLmRkbENoYW1wc1wiKS5hcHBlbmQobmV3IE9wdGlvbigkKCB0aGlzICkudGV4dCgpLCBpbmRleCkpXHJcbiAgICB2YXIgbyA9IG5ldyBPcHRpb24oJCh0aGlzKS50ZXh0KCksIGluZGV4KTtcclxuICAgIC8vLyBqcXVlcmlmeSB0aGUgRE9NIG9iamVjdCAnbycgc28gd2UgY2FuIHVzZSB0aGUgaHRtbCBtZXRob2RcclxuICAgICQobykuaHRtbCgkKHRoaXMpLnRleHQoKSk7XHJcbiAgICAkKFwiLmRkbENoYW1wc1wiKS5hcHBlbmQobyk7XHJcbn0pO1xyXG4kKFwiLm50bVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgJChcIiNEaXZfcmVjaGVyY2hlVGFiTGlzdGVcIikuZmFkZUluKCk7XHJcbn0pO1xyXG4kKFwiI2xpZW5GZXJtZXJSZWNoZXJjaGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI0Rpdl9yZWNoZXJjaGVUYWJMaXN0ZVwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLm50bVwiKS5mYWRlSW4oKTtcclxufSk7XHJcblxyXG4kKFwiI2xpZW5SZWNoZXJjaGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAvL2FsZXJ0KCQoJy5kZGxDaGFtcHMnKS52YWwoKSlcclxuICAgIHZhciBpbnB1dCwgZmlsdGVyLCB0YWJsZSwgdHIsIHRkLCBpLCB0eHRWYWx1ZTtcclxuICAgIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUlucHV0XCIpO1xyXG4gICAgZmlsdGVyID0gaW5wdXQudmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItc2VhclwiKTtcclxuICAgIHRyID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRkID0gdHJbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVskKFwiLmRkbENoYW1wc1wiKS52YWwoKV07XHJcbiAgICAgICAgaWYgKHRkKSB7XHJcbiAgICAgICAgICAgIHR4dFZhbHVlID0gdGQudGV4dENvbnRlbnQgfHwgdGQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICBpZiAodHh0VmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdHJbaV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cltpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChcIiNEaXZfcmVjaGVyY2hlVGFiTGlzdGVcIikuZHJhZ2dhYmxlKCk7XHJcblxyXG4kKFwiLm1vZGFsQWN0aXZhdGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmJvZFwiKS5lbXB0eSgpO1xyXG4gICAgJChcIi5zcHJcIikuZmFkZUluKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVcIiksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgIEtURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaC5pbml0KCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChcIi5zZWFyY2gtY3VzdG9tXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICAkKFwiLmJvZFwiKS5lbXB0eSgpO1xyXG4gICAgJChcIi5zcHJcIikuZmFkZUluKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImN1c3RvbV9zZWFyY2hfZmluZF9ieV9lbnRpdHlcIiksXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgIEtURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaC5pbml0KCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pO1xyXG52YXIgY29kZSA9IG51bGw7XHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIja3RfdGFibGVfMSB0Ym9keSB0clwiLCBmdW5jdGlvbigpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5hdHRyKFwidW5pdGVcIikpXHJcbiAgICBjb2RlID0gJCh0aGlzKS5hdHRyKFwiY29kZVwiKTtcclxuICAgIGlmIChcclxuICAgICAgICB3aW5kb3cuZWxlbWVudC5maW5kKFxyXG4gICAgICAgICAgICBcIm9wdGlvblt2YWx1ZT0nXCIgKyAkKHRoaXMpLmF0dHIoXCJpZFwiKSArIFwiJ11cIlxyXG4gICAgICAgICkubGVuZ3RoXHJcbiAgICApIHtcclxuICAgICAgICB3aW5kb3cuZWxlbWVudC52YWwoJCh0aGlzKS5hdHRyKFwiaWRcIikpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgJChcIi5wcml4dW5pdGFpcmVcIikudmFsKCQodGhpcykuYXR0cihcInB1XCIpKTtcclxuXHJcbiAgICAgICAgJChcIi50dmFcIikudmFsKCQodGhpcykuYXR0cihcInR2YVwiKSk7XHJcbiAgICAgICAgJChcIi5yZW1pc2VcIikudmFsKCQodGhpcykuYXR0cihcInJlbWlzZVwiKSk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJ1bml0ZVwiKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgRE9NIE9wdGlvbiBhbmQgcHJlLXNlbGVjdCBieSBkZWZhdWx0XHJcbiAgICAgICAgdmFyIG5ld09wdGlvbiA9IG5ldyBPcHRpb24oXHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cihcInRleHRcIiksXHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIHNlbGVjdFxyXG5cclxuICAgICAgICB3aW5kb3cuZWxlbWVudC5hcHBlbmQobmV3T3B0aW9uKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICQoXCIucHJpeHVuaXRhaXJlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJwdVwiKSk7XHJcbiAgICAgICAgJChcIi50dmFcIikudmFsKCQodGhpcykuYXR0cihcInR2YVwiKSk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJ1bml0ZVwiKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAkKFwiLnJlbWlzZVwiKS52YWwoJCh0aGlzKS5hdHRyKFwicmVtaXNlXCIpKTtcclxuICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuY2Rfb3AyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy9hbGVydCgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoXCJ1bml0ZVwiKSlcclxuICAgIGlmIChcclxuICAgICAgICB3aW5kb3cuZWxlbWVudC5maW5kKFxyXG4gICAgICAgICAgICBcIm9wdGlvblt2YWx1ZT0nXCIgKyAkKHRoaXMpLmF0dHIoXCJpZFwiKSArIFwiJ11cIlxyXG4gICAgICAgICkubGVuZ3RoXHJcbiAgICApIHtcclxuICAgICAgICB3aW5kb3cuZWxlbWVudC52YWwoJCh0aGlzKS5hdHRyKFwiaWRcIikpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgJChcIi5wcml4dW5pdGFpcmVcIikudmFsKCQodGhpcykuYXR0cihcInB1XCIpKTtcclxuXHJcbiAgICAgICAgJChcIi50dmFcIikudmFsKCQodGhpcykuYXR0cihcInR2YVwiKSk7XHJcbiAgICAgICAgJChcIi5yZW1pc2VcIikudmFsKCQodGhpcykuYXR0cihcInJlbWlzZVwiKSk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJ1bml0ZVwiKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgRE9NIE9wdGlvbiBhbmQgcHJlLXNlbGVjdCBieSBkZWZhdWx0XHJcbiAgICAgICAgdmFyIG5ld09wdGlvbiA9IG5ldyBPcHRpb24oXHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cihcInRleHRcIiksXHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cihcImlkXCIpLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIHNlbGVjdFxyXG4gICAgICAgIHdpbmRvdy5lbGVtZW50LmFwcGVuZChuZXdPcHRpb24pLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgJChcIi5wcml4dW5pdGFpcmVcIikudmFsKCQodGhpcykuYXR0cihcInB1XCIpKTtcclxuICAgICAgICAkKFwiLnR2YVwiKS52YWwoJCh0aGlzKS5hdHRyKFwidHZhXCIpKTtcclxuICAgICAgICAkKFwiLnNlbGVjdDJfdW5pdGVcIikudmFsKCQodGhpcykuYXR0cihcInVuaXRlXCIpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICQoXCIucmVtaXNlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJyZW1pc2VcIikpO1xyXG4gICAgICAgICQoXCIjZXhhbXBsZU1vZGFsUHJldmlld1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyokKFwiLmFydGljbGVcIikub24oJ3NlbGVjdDI6b3BlbmluZycsZnVuY3Rpb24oZSl7XHJcbiAkKFwiLmFydGljbGVcIikuc2VsZWN0MihcImRhdGFcIiwgbnVsbClcclxuIH0pKi9cclxuLypcclxuICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkJywgZnVuY3Rpb24gKGUpIHsgXHJcbiBcclxuICQuYWpheCh7XHJcbiB0eXBlOiAnUE9TVCcsXHJcbiB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVfdGVybScse3Rlcm06JCh0aGlzKS52YWwoKX0pLFxyXG4gcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gY29udGVudFR5cGU6IGZhbHNlLFxyXG4gc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuIC8vJChcIi5hcnRpY2xlXCIpLnNlbGVjdDIoXCJkYXRhXCIsIHJlc3VsdCwgdHJ1ZSk7XHJcbiAkKFwiLmFydGljbGVcIikuc2VsZWN0Mih7XHJcbiBkYXRhOiByZXN1bHQucmVzdWx0c1xyXG4gfSlcclxuIH1cclxuIH0pXHJcbiAvL2UucHJldmVudERlZmF1bHQoKTtcclxuIC8vcmV0dXJuIHRydWU7XHJcbiB9KVxyXG4gXHJcbiBcclxuICovXHJcblxyXG4oXCJ1c2Ugc3RyaWN0XCIpO1xyXG52YXIgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgJC5mbi5kYXRhVGFibGUuQXBpLnJlZ2lzdGVyKFwiY29sdW1uKCkudGl0bGUoKVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gJCh0aGlzLmhlYWRlcigpKS50ZXh0KCkudHJpbSgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdDtcclxuICAgICAgICAgICAgKHQgPSAkKFwiI2t0X3RhYmxlXzFcIikuRGF0YVRhYmxlKHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVfdGFibGVcIiksIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcGFnZUxlbmd0aDogMjUsXHJcbiAgICAgICAgICAgICAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnYXJ0LmlkJywgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnYXJ0LmNvZGUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICdhcnQudGl0cmUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICd0YWIuYWJyZXZpYXRpb24nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICduMS5kZXNpZ25hdGlvbicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgbmFtZTogJ24yLmRlc2lnbmF0aW9uJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCBuYW1lOiAnbjMuZGVzaWduYXRpb24nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIG5hbWU6ICduNC5kZXNpZ25hdGlvbicgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAnY3JlYXRlZFJvdyc6IGZ1bmN0aW9uKHJvdywgZGF0YSwgZGF0YUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChyb3cpLmF0dHIoJ3RleHQnLCBkYXRhWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cigncHUnLCBkYXRhWzhdKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cigndHZhJywgZGF0YVs5XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vdW5pdGVcclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cigndW5pdGUnLCBkYXRhWzEwXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChyb3cpLmF0dHIoJ2NvZGUnLCBkYXRhWzExXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChyb3cpLmF0dHIoJ3JlbWlzZScsIGRhdGFbMTJdKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gZml4ZWRIZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiSW5mbzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgdC5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24oZSwgc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0KTtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICQuZWFjaChzdC5jb2x1bW5zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIGlmICh2YWx1ZS5zZWFyY2guc2VhcmNoICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgJCgnLnJlbW92ZS1maWx0ZXInKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzAsIDEsIDMsIDIsIDQsIDUsIDYsIDddLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAvL0N1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbMiwgNCwgNSwgNiwgN10sIFtdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0pKCk7XHJcbiQuZXh0ZW5kKHRydWUsICQuZm4uZGF0YVRhYmxlLmRlZmF1bHRzLm9MYW5ndWFnZS5vUGFnaW5hdGUsIHtcclxuICAgIHNOZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgPjwvaT4nLFxyXG4gICAgc1ByZXZpb3VzOiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiA+PC9pPicsXHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmRldF9mb3JcIilcclxuICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgLmFmdGVyKFxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWQtZXJcIj48ZGl2IGNsYXNzPVwibGRzLWVsbGlwc2lzXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICAgICApO1xyXG4gICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoJChcIi5hcnRpY2xlc1wiKSwgXCJcIik7XHJcbn0pO1xyXG5cclxuLy9wcm9qZXRcclxuXHJcbiQoXCIudHlwZV9jb21tYW5kZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIpID09IFwiQUNDXCIgfHwgJCh0aGlzKS52YWwoKSA9PSAzKSB7XHJcbiAgICAgICAgJChcIi5jbHRcIikudG9nZ2xlQ2xhc3MoXCJub25lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmNsdFwiKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChcIi5keW5hbWlxdWVfZG9jdW1lbnRcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coICQodGhpcykuYXR0cignZGF0YS1pZCcpKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2RvY3VtZW50X2R5bmFtaXF1ZV9mb3JtXCIsIHtcclxuICAgICAgICAgICAgaWQ6ICQodGhpcykuYXR0cihcImRhdGEtaWRcIiksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5zY29sdW1uXzBcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmFjdGlvbiAsLnNjb2x1bW5fMFwiKS5wcm9wKFwiY2hlY2tlZFwiLCAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAgIC8vICAgICQoJy5fbXVsdGlwbGVfYWN0aW9ucycpLnRvZ2dsZSgkKCcuYWN0aW9uJykuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFjdGlvblwiLCBmdW5jdGlvbigpIHtcclxuICAgIC8vY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdkYXRhLXR5cGUnKSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIpID09IFwiZGVzY3JpcHRpb25EZXRhaWxcIikge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgJChcIi50aXRyZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIpID09IFwidGl0cmVcIikge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJChcIi5kZXNjcmlwdGlvbkRldGFpbFwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiNteUJ0blwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZGlzcCA9ICQoXCIuc2hvd19tb3JlX2hpc3RvcmlxdWVcIikuY3NzKFwiZGlzcGxheVwiKTtcclxuICAgIGlmIChkaXNwID09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgJChcIi5zZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuc2VcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcbiAgICAvLyAkKFwiLnNlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIC8vIGFsZXJ0KCQoJy5zaG93X21vcmVfaGlzdG9yaXF1ZScpLmNzcyggXCJkaXNwbGF5XCIgKSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy9hZGQtcGx1c1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hZGQtcGx1c1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAkKFwiYm9keVwiKS5maW5kKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikucmVtb3ZlKCk7XHJcbiAgICAkKFwiI3dyYXBwZXJcIikuYXBwZW5kKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiYWN0aW9ucyBtb2RhbCBmYWRlIHJpZ2h0XCIgaWQ9XCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxQcmV2aWV3TGFiZWxcIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgZGF0YS1iYWNrZHJvcD1cImZhbHNlXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZyBtb2RhbC1mdWxsLWhlaWdodCBtb2RhbC1taWRkbGUgbW9kYWwtcmlnaHQgXCIgc3R5bGU9XCJtYXgtd2lkdGg6NTAwIHB4O1wiIHJvbGU9XCJkb2N1bWVudFwiPjxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPjxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxQcmV2aWV3TGFiZWxcIj5QYXJ0ZW5haXJlPC9oNT48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IGJvLTBcIj48ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgc3ByXCI+PGJyLz48ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYm9kXCI+PC9kaXY+IDwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICk7XHJcbiAgICB3aW5kb3cudGhpc0VsZW0gPSAkKHRoaXMpO1xyXG4gICAgdmFyIHJvdXRlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1yb3V0ZVwiKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKHJvdXRlKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgJChcIi5ib2RcIikuZmluZChcIi5mb3JtXCIpLmFkZENsYXNzKHJvdXRlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uKHQsIGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vZHVsZS5leHBvcnRzID0gZSgpKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmUoW1wic3BpblwiXSwgZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodC5MYWRkYSA9IGUodC5TcGlubmVyKSk7XHJcbiAgICAgICAgICAgICAgICB9KSh0aGlzLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGUodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA9PT0gdm9pZCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJMYWRkYSBidXR0b24gdGFyZ2V0IG11c3QgYmUgZGVmaW5lZC5cIiksIHZvaWQgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5xdWVyeVNlbGVjdG9yKFwiLmxhZGRhLWxhYmVsXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImxhZGRhLWxhYmVsXCI+JyArIHQuaW5uZXJIVE1MICsgXCI8L3NwYW4+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGkodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuLmNsYXNzTmFtZSA9IFwibGFkZGEtc3Bpbm5lclwiKSwgdC5hcHBlbmRDaGlsZChuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldEF0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3BpbihuKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFmdGVyOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQociksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQociksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxZTMpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGluZygpID8gdGhpcy5zdG9wKCkgOiB0aGlzLnN0YXJ0KCksIHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9ncmVzczogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gTWF0aC5tYXgoTWF0aC5taW4oZSwgMSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQucXVlcnlTZWxlY3RvcihcIi5sYWRkYS1wcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PT0gZSAmJiBuICYmIG4ucGFyZW50Tm9kZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4uY2xhc3NOYW1lID0gXCJsYWRkYS1wcm9ncmVzc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5hcHBlbmRDaGlsZChuKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4uc3R5bGUud2lkdGggPSAoZSB8fCAwKSAqIHQub2Zmc2V0V2lkdGggKyBcInB4XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3AoKSwgdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wKCksIHQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIiksIHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnB1c2goYSksIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBuKHQsIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IG4gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID0gYShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHQpKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5ub2RlTmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSBbdF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbyA9IHIubGVuZ3RoOyBvID4gaTsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlKHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnN0YXJ0QWZ0ZXIoMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIG4udGltZW91dCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xlYXJUaW1lb3V0KG8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG8gPSBzZXRUaW1lb3V0KGEuc3RvcCwgbi50aW1lb3V0KSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4uY2FsbGJhY2sgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jYWxsYmFjay5hcHBseShudWxsLCBbYV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgITFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDAsIGUgPSBvLmxlbmd0aDsgZSA+IHQ7IHQrKylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9bdF0uc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaShlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByID4gMzIgJiYgKHIgKj0gMC44KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaGFzQXR0cmlidXRlKFwiZGF0YS1zcGlubmVyLXNpemVcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID0gcGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNwaW5uZXItc2l6ZVwiKSwgMTApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaGFzQXR0cmlidXRlKFwiZGF0YS1zcGlubmVyLWNvbG9yXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcGlubmVyLWNvbG9yXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAwLjIgKiByLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IDAuNiAqIGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gNyA+IGEgPyAyIDogMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuIHx8IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXM6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYSh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSBbXSwgbiA9IDA7IHQubGVuZ3RoID4gbjsgbisrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHRbbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBiaW5kOiBuLCBjcmVhdGU6IGUsIHN0b3BBbGw6IHIgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIExhZGRhLmJpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIikpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgICAgICAgICAgICAgIC8vIGwuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vTGFkZGEuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLmJvZFwiKS5vbihcInN1Ym1pdFwiLCBcIi5cIiArIHJvdXRlLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGNsYXNzZXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5maW5kKFwiYnV0dG9uXCIpXHJcbiAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIilcclxuICAgICAgICAgICAgLnN1YnN0cihcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcImJ1dHRvblwiKS5maXJzdCgpLmF0dHIoXCJjbGFzc1wiKS5sYXN0SW5kZXhPZihcIiBcIikgKyAxXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KClbMF0pXHJcbiAgICAgICAgdmFyIGNsYXNzU2VsZWN0b3IxID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAuZmluZChcImJ1dHRvblwiKVxyXG4gICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIpXHJcbiAgICAgICAgICAgIC5zdWJzdHIoXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCJidXR0b25cIikuZmlyc3QoKS5hdHRyKFwiY2xhc3NcIikubGFzdEluZGV4T2YoXCIgXCIpICsgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHZhciBjbGFzc1NlbGVjdG9yMiA9ICQodGhpcylcclxuICAgICAgICAgICAgLmZpbmQoXCJidXR0b25cIilcclxuICAgICAgICAgICAgLmVxKDEpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIilcclxuICAgICAgICAgICAgLnN1YnN0cigkKHRoaXMpLmZpbmQoXCJidXR0b25cIikuZXEoMSkuYXR0cihcImNsYXNzXCIpLmxhc3RJbmRleE9mKFwiIFwiKSArIDEpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY2xhc3NlcylcclxuICAgICAgICBpZiAoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5oYXNDbGFzcyhjbGFzc2VzKSkge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KGNsYXNzU2VsZWN0b3IxKVxyXG5cclxuICAgICAgICAgICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGNsYXNzU2VsZWN0b3IxKSk7XHJcbiAgICAgICAgICAgIC8vIHZhciAkbCA9ICQoXCIuYnV0dG9uLXNhdmUtcGFydGVuYWlyZVwiKS5sYWRkYSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgICAgICAgICAvLyRsLmxhZGRhKFwic3RhcnRcIik7XHJcbiAgICAgICAgICAgIHZhciBnb3RvID0gMTtcclxuICAgICAgICAgICAgLy9sLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQoKVxyXG4gICAgICAgICAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3NTZWxlY3RvcjIpKTtcclxuICAgICAgICAgICAgdmFyIGdvdG8gPSAwO1xyXG4gICAgICAgICAgICAvL2wuc3RhcnQoKTtcclxuICAgICAgICAgICAgb2JqW1wic2hvd01vZHVsZVwiXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmltcG9ydChcImxhZGRhXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAvLyBhbGVydCgpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBMYWRkYS5iaW5kKCAnYnV0dG9uJywgeyB0aW1lb3V0OiAyMDAwIH0gKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIC8vIEJpbmQgcHJvZ3Jlc3MgYnV0dG9ucyBhbmQgc2ltdWxhdGUgbG9hZGluZyBwcm9ncmVzc1xyXG4gICAgICAgICBMYWRkYS5iaW5kKCAnYnV0dG9uJywge1xyXG4gICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG4gICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIHByb2dyZXNzID0gTWF0aC5taW4oIHByb2dyZXNzICsgTWF0aC5yYW5kb20oKSAqIDAuMSwgMSApO1xyXG4gICAgICAgICBpbnN0YW5jZS5zZXRQcm9ncmVzcyggcHJvZ3Jlc3MgKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGlmKCBwcm9ncmVzcyA9PT0gMSApIHtcclxuICAgICAgICAgaW5zdGFuY2Uuc3RvcCgpO1xyXG4gICAgICAgICBjbGVhckludGVydmFsKCBpbnRlcnZhbCApO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIH0sIDIwMCApO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIH0gKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9KTsqL1xyXG4gICAgICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgLy92YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcInBhcnRlbmFpcmVJZFwiKTtcclxuXHJcbiAgICAgICAgb2JqW1wicm91dGVcIl0gPSBcInVfcF9wYXJ0ZW5haXJlX25ld1wiO1xyXG4gICAgICAgIG9ialtcImRhdGFcIl0gPSBkdGE7XHJcbiAgICAgICAgb2JqW1wicGFyYW1ldHJlXCJdID0gbnVsbDtcclxuICAgICAgICBvYmpbXCJsXCJdID0gbDtcclxuICAgICAgICBvYmpbXCJmb3JtX25hbWVcIl0gPSBmb3JtX25hbWU7XHJcbiAgICAgICAgb2JqW1wic2VsZWN0b3JcIl0gPSBzZWxlY3RvcjtcclxuICAgICAgICBvYmpbXCJyZWxvYWRUYWJsZVwiXSA9IHRydWU7XHJcbiAgICAgICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG5cclxuICAgICAgICBvYmpbXCJub21Nb2RhbFwiXSA9IFwiTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiO1xyXG4gICAgICAgIG9ialtcInRhYmxlXCJdID0gdGFibGU7XHJcbiAgICAgICAgb2JqW1wiYXV0b1RyaWdnZXJcIl0gPSBnb3RvO1xyXG4gICAgICAgIG9ialtcInRyaWdnZXJDbGFzc1wiXSA9IFwiYWRkXCI7XHJcbiAgICAgICAgb2JqW1wicmVmcmVzaFNlbGVjdFwiXSA9IHRydWU7XHJcbiAgICAgICAgb2JqW1wic2VsZWN0RWxlbWVudFwiXSA9IHdpbmRvdy50aGlzRWxlbTtcclxuICAgICAgICBvYmpbXCJTaG93Rm9ybUVycm9yc1wiXSA9IFNob3dGb3JtRXJyb3JzO1xyXG4gICAgICAgIG9ialtcImxhZGRhXCJdID0gTGFkZGE7XHJcbiAgICAgICAgYXV0b0Z1bmN0aW9uQWpheC5hdXRvQWpheFJlbmRlckNvbnRyb2xsZXIob2JqKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKClcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4vL2FsZXJ0KCQoXCIjX2lkXCIpLnZhbCgpKTtcclxuLyppZiAoJChcIiNfaWRcIikudmFsKCkgPT0gXCJcIikge1xyXG4gJChcclxuIFwiI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9zb3VzcHJvamV0LnNlbDJcIlxyXG4gKSAvKmh0bWwoXHJcbiBcIjxvcHRpb24+Q2hvaXggc291cyBwcm9qZXQ8L29wdGlvbj5cIlxyXG4gKVxyXG4gLnNlbGVjdDIoXCJ2YWxcIiwgXCJcIik7XHJcbiAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gfSovXHJcbiQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9wcm9qZXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAvL2FsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gICAgZ2V0U3ViU2VsZWN0KFwiI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9zb3VzcHJvamV0XCIsIGZhbHNlLCBcIlwiLCBcIlwiKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG5cclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInNvdXNfcHJvamV0X3NlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIGlkOiAkKHRoaXMpLnZhbCgpID09IFwiXCIgfHwgJCh0aGlzKS52YWwoKSA9PT0gbnVsbCA/IC0xIDogJCh0aGlzKS52YWwoKSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggc291cyBwcm9qZXRcIixcclxuICAgICAgICB9KSxcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9zb3VzcHJvamV0XCIpLmh0bWwocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICBnZXRTdWJTZWxlY3QoXCIjdF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX3NvdXNwcm9qZXRcIiwgdHJ1ZSwgXCJcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyAkKFwiLnR0XCIpLmZvY3VzKCk7XHJcblxyXG52YXIgb2JqMiA9IG5ldyBPYmplY3QoKTtcclxub2JqMltcImRvc3NpZXJfcGF0aFwiXSA9IFwiY2hhbmdlX2Rvc3NpZXJfcHJlY29tbWFuZGVfcG9wdXBcIjtcclxubGlzdEFjdGlvbnMubGlzdEFjdGlvbnMob2JqMik7XHJcblxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcucGRmX2J5X2NvZGUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICB3aW5kb3cub3BlbihSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2RvY3VtZW50X29sZF9zeXNcIiwge1xyXG4gICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKVxyXG4gICAgfSksICdfYmxhbmsnKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmltcHJpbWVfZG9jdW1lbnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZigkKHRoaXMpLmF0dHIoXCJkYXRhLXZhbGlkZVwiKSA9PSAwKSAge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKCdpbXBvc3NpYmxlIGRcXCdpbXByaW1lciBsZSBkb2N1bWVudCwgbWFucXVlIGRlIHNpZ25hdHVyZSEnLCAnRXJyZXVyJywge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgd2luZG93Lm9wZW4oJCh0aGlzKS5hdHRyKCdocmVmJyksICdfYmxhbmsnKTtcclxufSk7XHJcblxyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKVxyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nIGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGRlbGV0ZUNhYihvYmopIHtcclxuXHJcbiAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gIC8vICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgIC8vY29uc29sZS5sb2coaWQgKyAnICcgKyB0b2tlbik7XHJcbiAgICBcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqWydyZWRpcmVjdGlvbiddPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JlZGlyZWN0aW9uJ10pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGRlbGV0ZURlbWFuZGUob2JqKSB7XHJcblxyXG4gICAgLy8gdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgIC8vICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgIFxyXG4gICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgfSxcclxuICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKG9ialsncm91dGUnXSwgeydpZCc6IG9ialsnaWQnXSwgJ3Rva2VuJzogb2JqWyd0b2tlbiddfSksXHJcbiAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqWydyZWRpcmVjdGlvbiddPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JlZGlyZWN0aW9uJ10pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgIH0pO1xyXG4gfVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==