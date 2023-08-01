(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tcommandefrscab"],{

/***/ "./assets/js/components/module_achat/tcommandefrscab.js":
/*!**************************************************************!*\
  !*** ./assets/js/components/module_achat/tcommandefrscab.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _ref;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }























var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.setRoutingData(routes);





var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
global.$ = $;
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
  window.element.on("select2:close", function (e) {
    $("#uat_commandefrsdet_quantite").focus();
  });
  window.element.on("select2:select", function (e) {
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
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("commandefrscab_list") + location.search,
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
  pageLength: 15,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    searchable: true,
    className: 'td-check-cmd pd-cmd',
    width: "10%",
    targets: [0],
    name: 'tab.id'
  }, {
    orderable: true,
    width: "20%",
    className: "td-code-cmd pd-cmd",
    name: 'tab.code'
  }, {
    orderable: true,
    width: "10%",
    name: 'tab.datecommande',
    className: 'pd-cmd'
  }, {
    orderable: true,
    width: "15%",
    name: 'tab.refDocAsso',
    className: 'pd-cmd'
  }, {
    orderable: true,
    className: "td-observation-cmd pd-cmd",
    width: "30%",
    name: 'tab.observation'
  }, {
    orderable: true,
    width: "5%",
    name: 'tab.fournisseur',
    className: 'pd-cmd'
  }, {
    orderable: true,
    className: "mnt-format td-ht pd-cmd",
    width: "10%",
    name: 'tab.ht'
  }, {
    orderable: true,
    className: "colonne-gras td-tva pd-cmd",
    width: "10%",
    name: 'tab.tva'
  }, {
    orderable: true,
    className: "mnt-format td-ttc pd-cmd",
    width: "10%",
    name: 'tab.ttc'
  }, {
    orderable: true,
    className: "colonne-gras pd-cmd",
    width: "10%",
    name: 'tab.dem_code'
  }, {
    orderable: false,
    className: "br pd-cmd",
    width: "10%"
  }, {
    orderable: false,
    className: "fac pd-cmd",
    width: "10%"
  }, {
    orderable: false,
    className: "rg pd-cmd",
    width: "10%"
  }, {
    orderable: false,
    className: "rg pd-cmd",
    width: "10%"
  }, (_ref = {
    orderable: false,
    className: "statut pd-cmd",
    width: "50px"
  }, _defineProperty(_ref, "width", "10%"), _defineProperty(_ref, "name", 'tab.position_actuel'), _ref), {
    orderable: false,
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
  // scrollX: true,
});

var select2_dossiers = $(".select2_livraison").select2({
  placeholder: "Choix Livraison",
  allowClear: true
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__["CustomSearchText"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__["CustomSearchSelect"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__["CustomSearchCheckbox"](api, [0], []);
});
/*column 1 de datatble search*/

$(".remove-filter").click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});

/*  $('#grid').on('click', '.statut_op', function (event) {
 var name = $(this).attr('name');
 var id = $(this).attr('rol'); */
//alert(name+""+id);
$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true
});
$(".list_actions").change(function (e) {});
$(".new , .edit").on("change", ".compteMasse", function (e) {
  var $form = $(this).closest("form");
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr("name")] = $(this).val();
  console.log(data);
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
      $(".compteRubrique").parent().find(".select2").not(":first").hide();
    }
  });
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
      $(".compteRubrique").parent().find(".select2").not(":first").hide();
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
      $(".comptePoste").parent().find(".select2").not(":first").hide();
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
      $(".compte").parent().find(".select2").not(":first").hide();
    }
  });
});
$(".new").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_insert"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_commandefrscab_show", {
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

//
$(".new_acompte").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_acompte_new"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });

        // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      } else if (result.data) {
        //table2.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //$("#ModalDocumentDynamique").modal("hide");
        //l.stop();

        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_facturefrscab_consulte_acompte", {
          id: result.data
        });
        window.location.href = url;

        //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
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
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(".det_for");
  // console.log(selector);
  // alert()
  var exsit = 0;
  $.each(array_detail, function (i, value) {
    if ($("#uat_commandefrsdet_article").val() == value.id) {
      exsit = 1;
    }
  });
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);

  // Start loading
  l.start();
  if (exsit == 0) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrsdet_new"),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        if (result.errors) {
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
          l.stop();
        } else if (result.data) {
          $(".detail_form")[0].reset();
          $(".errors-list").remove();
          $(".article").focus();
          //                console.log(result);
          var _lineNo = 1;
          array_detail.push(result.data);
          $(".new .table-detail > tbody").empty();
          $.each(array_detail, function (i, value) {
            var tva = value.tva + " %";
            var remise = value.remise + " %";
            var observation = value.observation;
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
          l.stop();
          $(".select2_unite").val(null).trigger("change");
          $(".articles").val(null).trigger("change");
          $("#uat_commandefrscab_detail").val(JSON.stringify(array_detail));
        }
      }
    });
  } else {
    l.stop();
    toastr.warning("Ce produit exsite deja ", "Error! ", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$(".new").on("click", ".delete_element", function (e) {
  array_detail.splice($(this).attr("id"), 1);
  $(".new .table-detail > tbody tr").remove();
  $.each(array_detail, function (i, value) {
    var tva = value.tva + " %";
    var remise = value.remise + " %";
    var observation = value.observation;
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

/*
 *
 * Edit operations
 *
 */

$(".edit").on("submit", ".form", function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);
  l.start();
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_update", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $(".errors-list").remove();
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
        /* jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
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
$(".bod2").on("submit", ".form_type", function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);
  l.start();
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_type_show", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $(".errors-list").remove();
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
        /* jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".form #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
      } else if (result.code == 200) {
        // l.stop();
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrsdet_delete", {
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

///*
// *
// * afficher la formulaire de modification  d'un nouveau article
// *
// */
//
//$('.edit').on('submit', '.detail_edit', function (e) {
//    var selector = $(this);
//    var dta = new FormData(this);
//    var id = dta.get('_id');
//
//    $.ajax({
//        type: 'POST',
//        url: Routing.generate('ua_t_commandefrsdet_edit_detail', {'id': id}),
//        success: function (result) {
//            var slh = selector.parent().parent().empty().append("<td colspan='9'>" + result + "</td>");
//            // slh.append(result)
//        }
//    });
//
//    e.preventDefault();
//});

/*
 *
 * afficher la formulaire de modification  d'un nouveau article
 *
 */

$(".edit").on("submit", ".detail_edit", function (e) {
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  //var col_index = $(this).index();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrsdet_edit_detail", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_achatdemandeinternecab_find_article"),
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
      //
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
  console.log(dta);
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrsdet_update_detail", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
        /*  $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
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
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = dta.get("_id_cab");
  var selector = $(this);

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrsdet_insert", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
        /*  $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 console.log(columnName[1]);
                 $(".edit #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
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

//$('#grid tbody').on('click', 'tr', function () {
//    console.log('here');
//    if ($(this).hasClass('selected')) {
//        $(this).removeClass('selected');
//    } else {
//        table.$('tr.selected').removeClass('selected');
//        $(this).addClass('selected');
//    }
//});

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
  var selector = $(this).attr("class").split(" ")[0];
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_statut", {
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
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
          /* $('.errors-list').remove();
                     jQuery.each(result.errors.violations, function (i, val) {
                     var column = val.propertyPath;
                     var columnName = column.split('.');
                     // console.log(columnName[1]);
                     $(".form_statut #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                     });*/
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
$(".actions").on("submit", ".form_statut", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  var selector = $(this).attr("class").split(" ")[0];
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_check", {
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
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
          /*  $('.errors-list').remove();
                     jQuery.each(result.errors.violations, function (i, val) {
                     var column = val.propertyPath;
                     var columnName = column.split('.');
                     // console.log(columnName[1]);
                     $(".form_statut #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                     });*/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_affaire_new_quick"),
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_affaire_new_quick_insert"),
    success: function success(result) {
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
        /*   $('.errors-list').remove();
                 jQuery.each(result.errors.violations, function (i, val) {
                 var column = val.propertyPath;
                 var columnName = column.split('.');
                 $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                 });*/
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $(".actions").empty().removeClass("sidebar-open");
        var data = {};
        $.ajax({
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_achatdemandeinternecab_new"),
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
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_commandefrscab_edit", {
      id: id
    });
    // window.location.href = url;
    alert('Operation non autorie');
    // console.log(url)
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation2", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#_show").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_commandefrscab_show", {
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
$("#_imprimer").click(function (e) {
  // var id = table.row('.selected').id();
  var id = $("#test").data("commandeId");
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_commandefrscab_document_pdf", {
      id: id
    });
    // window.location.href = url;
    window.open(url, "_blank");
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_statut", {
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
$("#_check").click(function (e) {
  //  var id = table.row('.selected').id();
  //var id = dta.get('_id');
  var id = $("#test").data("commandeId");
  //  alert();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_check", {
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
$(".actions").on("submit", ".form_check", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  // var id = table.row('.selected').id();
  var id = $("#test").data("commandeId");
  var selector = $(this).attr("class").split(" ")[0];
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_check", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
        if (result.errors) {
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
          /*   $('.errors-list').remove();
                     jQuery.each(result.errors.violations, function (i, val) {
                     var column = val.propertyPath;
                     var columnName = column.split('.');
                     $(".form_statut #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
                     });*/
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_commandefrscab_archive", {
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
/*$('#_imprimer').click(function (e) {
 var id = table.row('.selected').id();
 
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
 cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!",
 }).then((result) => {
 if (result.value) {
 var url = Routing.generate('vpdf_show', {'id': id});
 // window.location.href = url;
 window.open(url, '_blank');
 // console.log(url)
 }
 });
 } else {
 toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {timeOut: 4000})
 }
 e.preventDefault();
 });*/

$(".generer").click(function (e) {
  //  var id = table.row('.selected').id();
  var id = $("#test").data("commandeId");
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_apply_generer", {
      id: id
    });
    window.location.href = url;
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette operation", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
function generer() {
  $("._generer_form").submit(function (e) {
    var dta = new FormData(this);
    var id = $("input[name=_id]").val();

    //alert();
    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.querySelector(".my-button2"));

    // Start loading
    l.start();
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_generer_insert", {
        id: id
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
          // l.stop();
          $("#MyModal").modal("hide");
          location.reload();
        } else if (result.empty) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        } else if (result.code == 404) {
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
}
$("#_exporter").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("phpofficeExporter"),
    success: function success(result) {
      $(".actions").html(result);
      $(".actions").toggleClass("sidebar-open");
    }
  });
  e.preventDefault();
});
$(".actions").on("submit", ".form_exporter", function (e) {
  //alert();
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  //var id = table.row('.selected').id();
  e.preventDefault();
  var selector = $(this).attr("class").split(" ")[0];
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("phpofficeExporter"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result, textStatus, errorThrown) {
      //console.log(result);
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
      } else {
        //alert();
        e.currentTarget.submit();
        // $(".form_exporter").unbind( "submit" ).submit();
      }
    },

    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });
});
$("body").on("submit", "._fichiers", function (e) {
  //  alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  var id = dta.get("_id");
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_fichiers", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_fichiers_delete", {
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
$(".form_generer_facture").on("submit", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  //var id = table.row('.selected').id();
  var id = $("#test").data("commandeId");
  //   alert(id);
  var selector = $(this).attr("class").split(" ")[0];
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_facture_show", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
        if (result.code == 403) {
          //  alert();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        }
        if (result.errors) {
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
          /* $(".errors_list").html("");
                     jQuery.each(result.errors.violations, function (i, val) {
                     var x = val.propertyPath;
                     var separators = ['\\]', '\\['];
                     var arr = x.split(new RegExp(separators.join('|')));
                     var columnName = arr[1];
                     $(".errors_list").append(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>" + columnName + "</span> <span class='form-error-message'> " + val.title + "</span></span></span>"));
                     });*/
        } else if (result.code == 200) {
          table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          $(".actions").empty().removeClass("sidebar-open");
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
var tableShow = $("#datatable-show").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false
});
var tableShow3 = $("#datatable-show3").DataTable({
  paging: false
});
var tableShow4 = $(".datatable-show4").DataTable({
  paging: false
});
var tableShow2 = $("#datatable-show2").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false
});
$(document).ready(function () {
  $(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
  create_custom_dropdowns($(".articles"), "");
});
$(".modalActivate").click(function () {
  $(".bod").empty();
  $(".spr").fadeIn();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_achatdemandeinternecab_find_article"),
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_achatdemandeinternecab_find_article_table"),
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
          console.log(data);
          $(row).attr('text', data[2]);
          $(row).attr('pu', data[8]);
          $(row).attr('tva', data[9]);
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("datatables_langue"),
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

        _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_25__["CustomSearchText"](api, [0, 1, 3, 2, 4, 5, 6, 7], []);
        //CustomSearchDatatable.CustomSearchSelect(api, [2], []);
      });
    }
  };
}();

$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
  sNext: '<i class="fa fa-chevron-right" ></i>',
  sPrevious: '<i class="fa fa-chevron-left" ></i>'
});
$(".acompte").on("submit", ".form_acompte", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_acompte", {
      id: $(".commande_id").val()
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
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
  e.preventDefault();
});
$(".pourcentage").keyup(function (e) {
  if ($.isNumeric($(".montantCommande").val()) || $(".montantCommande").val() > 0) {
    if ($.isNumeric($(this).val()) && $(this).val() > 0 && $(this).val() <= 100) {
      $(".montant").val($(".montantCommande").val() * $(this).val() / 100);
    } else {
      toastr.warning("Valeur incorrect ", "Erreur", {
        timeOut: 4000
      });
      $(this).val(null);
      $(".montant").val(null);
    }
  } else {
    toastr.warning("Impossible de generer un accompte sur un motant inferieur ou egale a zero ", "Erreur", {
      timeOut: 4000
    });
  }
});
//
//$('#grid-reception').on
//$('.aLivrer').keyup(function (e) {

$("#grid-reception").on("keyup", ".aLivrer", function (e) {
  var total = 0;
  $(".aLivrer").each(function (d, j) {
    var tva = $(this).attr("data-tva") / 100 + 1;
    total += tva * $(this).attr("data-prixUnitaire") * $(this).val();
  });
  var myNumeral = numeral(total);
  $(".total").html(myNumeral.format("0.00"));
  $(".montantReception").val(myNumeral.format("0.00"));
  e.preventDefault();
});
$(".paiement").on("change rightnow", function () {
  if ($(this).val() == 2) {
    $(".bloc_cheque").show();
  } else {
    $("#univ_t_reglement_dateEcheance").val(null);
    $("#univ_t_reglement_reference").val(null);
    $(".bloc_cheque").hide();
  }
  if ($(this).val() == 1 || $(this).val() == 4) {
    $(".bloc_banque").hide();
  } else {
    $(".bloc_banque").show();
  }
  console.log($(this).val());
}).triggerHandler("rightnow");
$("._delete_acompte").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  console.log(id + " " + token);
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_delete_acompte", {
          id: id,
          token: token
        }),
        success: function success(result) {
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
  e.preventDefault();
});
$("body").on("click", ".ua_t_commandefrscab_apply_transitions", function (e) {
  var dta = new FormData();
  var id = $(this).attr("data-id");
  var title = $(this).attr("data-title");
  var transition = $(this).attr("data-transition");
  if (transition == 'apres_valider_livrer') {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_livraison_show", {
        id: id
      }),
      success: function success(result) {
        $("#livraisonPopUp .bod").html(result);
        $('.sel2').select2();
        $("#livraisonPopUp").modal("show");
        var table2 = $(".grid-reception").DataTable({
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("datatables_langue"),
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_type_show", {
        id: id
      }),
      success: function success(result) {
        $("#typePopUp .bod2").html(result);
        $('.sel2').select2();
        $("#typePopUp").modal("show");
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_apply_transitions", {
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
                var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_livraison_show", {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});

$("._delete_livraison").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  //alert(id+" token " +token);
  var obj = {
    route: "t_UaTLivraisonfrscab_delete_livraison",
    redirection: null,
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_27__["deleteCab"])(obj);
  e.preventDefault();
});
var obj2 = new Object();
obj2["dossier_path"] = "change_dossier_popup";
_functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_26__["listActions"](obj2);

/*****pour ajout d'article */

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
$(".new").on("click", ".detail_form", function (e) {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_edit_detail_new", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_achatdemandeinternecab_find_article"),
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
$("#create_commande").click(function (e) {
  var button = $(this);
  button.prop("disabled", true);
  var form_name = $(".form").attr("name");

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
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.querySelector(".my-button"));
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_insert"),
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
        button.prop("disabled", false);
        // $('#'+)
      } else if (result.errors) {
        //dump(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
        button.prop("disabled", false);
      } else if (result.data) {
        // alert(result.data.id);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_commandefrscab_show", {
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
$(".ajout").click(function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_upload", {
      id: $(this).closest("a").attr("id")
    }),
    success: function success(result) {
      $(".bod").html(result).hide();
      var select2_dossiers = $(".select2_dossiers").select2({
        placeholder: "Choix Dosssier",
        allowClear: true
      });
      $("#ModalDocumentDynamique").modal("show");
      $("select.select2").select2();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.querySelector(".my-button"));
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_upload", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        l.stop();
        //console.log(result.errors);
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
      }
      if (result.code == 200) {
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
$("#edit_commande").click(function (e) {
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_update", {
      id: id
    }),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
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
$(".edit").on("click", ".detail_form", function (e) {
  // alert();
  $('.error-class-tab').remove();
  var id = $("#_id").val();
  var flag = 0;
  for (var index = 0; index < formDataDetail.length; index++) {
    if (formDataDetail[index].articleId == $('#' + nameDetail + '_article').select2('data')[0].id) {
      return $('#' + nameDetail + '_article').parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>");
    }
  }
  if ($('.edit-detail[article="' + $('#' + nameDetail + '_article').select2('data')[0].id + '"]').attr('article') == $('#' + nameDetail + '_article').select2('data')[0].id && $(this).parents('.edit-detail').attr('article') != $('#' + nameDetail + '_article').select2('data')[0].id) {
    return $('#' + nameDetail + '_article').parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>Ce article est deja existe</span></span></span>");
  }
  for (var _index2 = 0; _index2 < errors_details.length; _index2++) {
    var name = nameDetail + '[' + errors_details[_index2].property + ']';
    var value = $('[name="' + nameDetail + '[' + errors_details[_index2].property + ']' + '"]').val();
    if (errors_details[_index2].cause == null && value == '') {
      flag = 1;
      $('[name="' + name + '"]').parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors_details[_index2].message + "</span></span></span>");
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
  formDataDetail = [];
  formDataDetail.push({
    id: $(this).parents('.edit-detail').attr('id'),
    articleId: $('#' + nameDetail + '_article').select2('data')[0].id,
    titre: $('#' + nameDetail + '_article').select2('data')[0].text,
    code: $('#' + nameDetail + '_article').select2('data')[0].code,
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
  var formData = new FormData();
  var data = JSON.stringify(formDataDetail);
  formData.append('detail', data);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrsdet_insert", {
      id: id
    }),
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      //  console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_24__["ShowFormErrors"])(selector, form_name, result.errors);
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrsdet_delete", {
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

$(".edit").on("click", ".detail_edit", function (e) {
  //alert($(this).attr('id'))
  var id = $(this).attr('id');
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  var col_index = $(this).index();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrsdet_edit_detail", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("t_achatdemandeinternecab_find_article"),
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
$("body").on("click", "._desactiver_commande", function (e) {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_desactiver"),
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
$("#_cloturer_commande").click(function (e) {
  //  alert();

  var _array_ids = [];
  _array_ids.push($(this).attr("data-id"));
  if (_array_ids) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Voulez vous vraiment cloturer cette commande ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui, cloturer!",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "POST",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_cloturer"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              location.reload();
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
$("#_avance_commande").click(function (e) {
  $('#avancepop').modal('show');
});
$(".avance_save").on('submit', function (e) {
  e.preventDefault();
  var data = new FormData($(this)[0]);
  var l = ladda__WEBPACK_IMPORTED_MODULE_28__["create"](document.activeElement);
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: "animatedSwal flipInX faster"
    },
    position: "top",
    title: "Confirmation ?",
    text: "Voulez vous vraiment creé un avance pour cette commande ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-check'></i> Oui!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      l.start();
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_avance"),
        data: data,
        processData: false,
        contentType: false,
        success: function success(result) {
          // console.log(result);
          if (result.code == 200) {
            location.reload();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
          }
          l.stop();
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
});
$("#_desactiver_commande").click(function (e) {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_desactiver"),
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
$('body').on('click', '.pdf_by_code', function (e) {
  window.open(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_document_old_sys", {
    id: $(this).attr('data-id')
  }), '_blank');
});
$("#_delete_commande").click(function (e) {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_commande_delete"),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            // console.log(result);
            if (result.code == 200) {
              // $('#grid').DataTable().ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_index");
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
  }
  e.preventDefault();
});
$("body").on("click", "._delete_commande", function (e) {
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate("ua_t_commandefrscab_commande_delete"),
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
$('body').on('change', '.list_actions', function () {
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });
  if ($(this).val() == '_fusionnement' && _array_ids != null) {
    //alert(_array_ids);

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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_23___default.a.generate('commande_generer_fusionnement'),
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

            // $(".action ,.scolumn_0").prop('checked', false);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/components/module_achat/tcommandefrscab.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~tcommandefrscab",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYWNoYXQvdGNvbW1hbmRlZnJzY2FiLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mdW5jdGlvbnMvZGVsZXRlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJudW1lcmFsIiwiZ2xvYmFsIiwiJCIsImNyZWF0ZV9jdXN0b21fZHJvcGRvd25zIiwiZWxlbWVudCIsImF0dCIsImZuIiwic2VsZWN0MiIsImFtZCIsImRlZmluZSIsImVycm9yTG9hZGluZyIsImlucHV0VG9vTG9uZyIsImFyZ3MiLCJvdmVyQ2hhcnMiLCJpbnB1dCIsImxlbmd0aCIsIm1heGltdW0iLCJtZXNzYWdlIiwiaW5wdXRUb29TaG9ydCIsInJlbWFpbmluZ0NoYXJzIiwibWluaW11bSIsImxvYWRpbmdNb3JlIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwid2luZG93IiwiYXR0ciIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZ2VuZXJhdGUiLCJzZWxlY3RlZCIsImVudGl0eSIsImNvbHVtbiIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInByZXBlbmQiLCJsYW5ndWFnZSIsInJlc3VsdHMiLCJtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsImRyb3Bkb3duQ3NzQ2xhc3MiLCJ2YWwiLCJ0cmlnZ2VyIiwiZmFkZU91dCIsInJlbW92ZSIsImZhZGVJbiIsIm9uIiwiZSIsImFmdGVyIiwidHlwZVdhdGNoIiwiaGlnaGxpZ2h0Iiwid2FpdCIsImNhcHR1cmVMZW5ndGgiLCJjYWxsYmFjayIsInZhbHVlbm5uIiwiaGlkZSIsInNlYXJjaCIsImRhdGFUeXBlIiwidGVybSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJlbXB0eSIsImZvY3VzIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJwYXJhbXMiLCJwcml4QWNoYXQiLCJ0dmEiLCJyZW1pc2UiLCJ1bml0ZSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJsb2NhdGlvbiIsImJlZm9yZVNlbmQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldHRpbmdzIiwianFYSFIiLCJhYm9ydCIsImRlZmVyUmVuZGVyIiwic2VydmVyU2lkZSIsInBhZ2VMZW5ndGgiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwic2VhcmNoYWJsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwidGFyZ2V0cyIsIm5hbWUiLCJjb2x1bW5EZWZzIiwicmVuZGVyIiwidCIsImEiLCJsIiwicyIsImZvckVhY2giLCJsaW5rIiwiX3JvdXRlX2xpbmsiLCJpZCIsInRpdHJlIiwiaWRDcyIsImljb24iLCJkb20iLCJidXR0b25zIiwidGV4dCIsImFjdGlvbiIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJyZWxvYWQiLCJwcm9jZXNzaW5nIiwic2VsZWN0Ml9kb3NzaWVycyIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsImFwaSIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZSIsIiRmb3JtIiwiY2xvc2VzdCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsImZpbmQiLCJwYXJlbnQiLCJub3QiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwiTGFkZGEiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdG9wIiwiZXJyb3JzIiwiU2hvd0Zvcm1FcnJvcnMiLCJ0aXRsZSIsImhyZWYiLCJlcnJvciIsImNvZGUiLCJhcnJheV9kZXRhaWwiLCJleHNpdCIsImVhY2giLCJpIiwidmFsdWUiLCJyZXNldCIsImxpbmVObyIsInB1c2giLCJvYnNlcnZhdGlvbiIsIm15X3JvdyIsInF1YW50aXRlIiwicHJpeHVuaXRhaXJlIiwidG9GaXhlZCIsIm1vbnRhbnRSZW1pc2UiLCJwcml4dHRjIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNwbGljZSIsImdldCIsInRva2VuIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0Iiwicm93X2luZGV4IiwiaW5kZXgiLCJlcSIsImFkZENsYXNzIiwiS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoIiwiaW5pdCIsInNldFRpbWVvdXQiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwibWVtIiwiZGF0ZXBpY2tlciIsInRvZGF5QnRuIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwiZm9yY2VQYXJzZSIsImNhbGVuZGFyV2Vla3MiLCJhdXRvY2xvc2UiLCJ5ZWFyc0FnbyIsIkRhdGUiLCJzZXRGdWxsWWVhciIsImdldEZ1bGxZZWFyIiwicm93Iiwic3BsaXQiLCJhbGVydCIsIm9wZW4iLCJyZXNwb25zZUpTT04iLCJnZW5lcmVyIiwic3VibWl0IiwicXVlcnlTZWxlY3RvciIsImtleSIsInRvYXN0cldpZHRvdXRQcm9ncmVzcyIsIm1vZGFsIiwiY3VycmVudFRhcmdldCIsInRhYmxlU2hvdyIsInNjcm9sbFkiLCJzY3JvbGxDb2xsYXBzZSIsInBhZ2luZyIsInRhYmxlU2hvdzMiLCJ0YWJsZVNob3c0IiwidGFibGVTaG93MiIsImF1dG9XaWR0aCIsInJlYWR5IiwibmV3T3B0aW9uIiwiT3B0aW9uIiwicmVnaXN0ZXIiLCJoZWFkZXIiLCJ0cmltIiwiZGF0YUluZGV4IiwiYkluZm8iLCJleHRlbmQiLCJkZWZhdWx0cyIsIm9MYW5ndWFnZSIsIm9QYWdpbmF0ZSIsInNOZXh0Iiwic1ByZXZpb3VzIiwia2V5dXAiLCJpc051bWVyaWMiLCJ0b3RhbCIsImQiLCJqIiwibXlOdW1lcmFsIiwiZm9ybWF0Iiwic2hvdyIsInRyaWdnZXJIYW5kbGVyIiwidHJhbnNpdGlvbiIsInRhYmxlMiIsImluZm8iLCJzY3JvbGxYIiwib2JqIiwicm91dGUiLCJyZWRpcmVjdGlvbiIsImRlbGV0ZUNhYiIsIm9iajIiLCJPYmplY3QiLCJsaXN0QWN0aW9ucyIsImVycm9yc19kZXRhaWxzIiwiZm9ybURhdGFEZXRhaWwiLCJuYW1lRGV0YWlsIiwiZWRpdENvbHVtbiIsImVkaXRBcnRpY2xlQ29sdW1uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsInBhcnNlSlNPTiIsImdldEh0IiwiZ2V0VHZhIiwicHJpeFR2YSIsImdldFJlbWlzZSIsImdldFByaXhUVGMiLCJmbGFnIiwiYXJ0aWNsZUlkIiwicHJvcGVydHkiLCJjYXVzZSIsInBhcnNlRmxvYXQiLCJ1bml0ZUlkIiwiY2wiLCJjb2xfaW5kZXgiLCJkZXRhaWwiLCJsYXN0IiwiYnV0dG9uIiwicHJvcCIsImZvcm1EYXRhIiwic2VyaWFsaXplQXJyYXkiLCJjdXN0b21FcnJvcnMiLCJwYXJlbnRzIiwiZm9ybURhdGFEZXRhaWxFZGl0UmVtb3ZlIiwiX2FycmF5X2lkcyIsImRlbGV0ZURlbWFuZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxtSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUdXO0FBQ2dEO0FBQ3RCO0FBSWhDO0FBRUo7QUFDL0IsSUFBSUksT0FBTyxHQUFHSCxtQkFBTyxDQUFDLGtEQUFTLENBQUM7QUFDaENJLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0FBR1osU0FBU0MsdUJBQXVCLENBQUNDLE9BQU8sRUFBRUMsR0FBRyxFQUFFO0VBQzNDSCxDQUFDLENBQUNJLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsWUFBVztJQUN0RDtJQUNBLE9BQU87TUFDSEMsWUFBWSxFQUFFLHdCQUFXO1FBQ3JCLE9BQU8sTUFBTTtNQUNqQixDQUFDO01BQ0RDLFlBQVksRUFBRSxzQkFBU0MsSUFBSSxFQUFFO1FBQ3pCLElBQUlDLFNBQVMsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUNDLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxPQUFPO1FBQ2hELElBQUlDLE9BQU8sR0FBRyxzQkFBc0IsR0FBR0osU0FBUyxHQUFHLFNBQVM7UUFDNUQsSUFBSUEsU0FBUyxJQUFJLENBQUMsSUFBSUEsU0FBUyxJQUFJLENBQUMsRUFBRTtVQUNsQ0ksT0FBTyxJQUFJLEdBQUc7UUFDbEIsQ0FBQyxNQUFNLElBQUlKLFNBQVMsSUFBSSxDQUFDLEVBQUU7VUFDdkJJLE9BQU8sSUFBSSxJQUFJO1FBQ25CO1FBQ0EsT0FBT0EsT0FBTztNQUNsQixDQUFDO01BQ0RDLGFBQWEsRUFBRSx1QkFBU04sSUFBSSxFQUFFO1FBQzFCLElBQUlPLGNBQWMsR0FBR1AsSUFBSSxDQUFDUSxPQUFPLEdBQUdSLElBQUksQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNO1FBRXJELElBQUlFLE9BQU8sR0FDUCxRQUFRLEdBQ1JFLGNBQWMsR0FDZCw4Q0FBOEM7UUFFbEQsT0FBT0YsT0FBTztNQUNsQixDQUFDO01BQ0RJLFdBQVcsRUFBRSx1QkFBVztRQUNwQixPQUFPLE1BQU07TUFDakIsQ0FBQztNQUNEQyxlQUFlLEVBQUUseUJBQVNWLElBQUksRUFBRTtRQUM1QixJQUFJSyxPQUFPLEdBQUcsb0JBQW9CLEdBQUdMLElBQUksQ0FBQ0ksT0FBTyxHQUFHLFVBQVU7UUFFOUQsSUFBSUosSUFBSSxDQUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJSixJQUFJLENBQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUU7VUFDeENDLE9BQU8sSUFBSSxHQUFHO1FBQ2xCLENBQUMsTUFBTSxJQUFJTCxJQUFJLENBQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUU7VUFDMUJDLE9BQU8sSUFBSSxJQUFJO1FBQ25CO1FBRUEsT0FBT0EsT0FBTztNQUNsQixDQUFDO01BQ0RNLFNBQVMsRUFBRSxxQkFBVztRQUNsQixPQUFPLHVCQUF1QjtNQUNsQyxDQUFDO01BQ0RDLFNBQVMsRUFBRSxxQkFBVztRQUNsQixPQUFPLGFBQWE7TUFDeEI7SUFDSixDQUFDO0VBQ0wsQ0FBQyxDQUFDO0VBQ0ZDLE1BQU0sQ0FBQ3JCLE9BQU8sR0FBR0EsT0FBTztFQUN4QnFCLE1BQU0sQ0FBQ3BCLEdBQUcsR0FBRyxpQkFBaUIsR0FBR0EsR0FBRztFQUNwQyxJQUFJb0IsTUFBTSxDQUFDckIsT0FBTyxDQUFDc0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0lBQ3BDeEIsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO01BQ0hDLElBQUksRUFBRSxLQUFLO01BQ1hDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsNENBQTRDLEVBQUU7UUFDaEVDLFFBQVEsRUFBRTFCLEdBQUc7UUFDYjJCLE1BQU0sRUFBRVAsTUFBTSxDQUFDckIsT0FBTyxDQUFDc0IsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMxQ08sTUFBTSxFQUFFUixNQUFNLENBQUNyQixPQUFPLENBQUNzQixJQUFJLENBQUMsYUFBYTtNQUM3QyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUNRLElBQUksQ0FBQyxVQUFTQyxJQUFJLEVBQUU7TUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7TUFDakJWLE1BQU0sQ0FBQ3JCLE9BQU8sQ0FDVGtDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUN4Qy9CLE9BQU8sQ0FBQztRQUNMO1FBQ0FnQyxRQUFRLEVBQUUsSUFBSTtRQUNkSixJQUFJLEVBQUVBLElBQUksQ0FBQ0ssT0FBTztRQUNsQkMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQzNCQyxnQkFBZ0IsRUFBRWpCLE1BQU0sQ0FBQ3BCO01BQzdCLENBQUMsQ0FBQyxDQUNEc0MsR0FBRyxDQUFDdEMsR0FBRyxDQUFDLENBQ1J1QyxPQUFPLENBQUMsUUFBUSxDQUFDO01BQ3RCMUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDMkMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7TUFDbEM1QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM2QyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQzVCLENBQUMsQ0FBQztFQUNOLENBQUMsTUFBTTtJQUNIO0VBQUE7RUFFSjtFQUNBdEIsTUFBTSxDQUFDckIsT0FBTyxDQUFDNEMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFTQyxDQUFDLEVBQUU7SUFDMUNiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCdUIsTUFBTSxDQUFDckIsT0FBTyxHQUFHRixDQUFDLENBQUMsSUFBSSxDQUFDOztJQUV4QjtJQUNBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM0QyxNQUFNLEVBQUU7SUFDbEI1QyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ2dELEtBQUssQ0FDN0IsZ09BQWdPLENBQ25PO0lBQ0RoRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUNpRCxTQUFTLENBQUM7TUFDZkMsU0FBUyxFQUFFLEtBQUs7TUFDaEJDLElBQUksRUFBRSxHQUFHO01BQ1RDLGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxRQUFRLEVBQUUsa0JBQVNDLFFBQVEsRUFBRVAsQ0FBQyxFQUFFO1FBQzVCYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksQ0FBQyxDQUFDO1FBQ2QvQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3VELElBQUksRUFBRTtRQUNwQ3ZELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDb0MsT0FBTyxDQUN6QixvREFBb0QsQ0FDdkQ7UUFFRGIsTUFBTSxDQUFDaUMsTUFBTSxHQUFHRixRQUFRO1FBQ3hCO1FBQ0EsSUFBSS9CLE1BQU0sQ0FBQ3JCLE9BQU8sQ0FBQ3NCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtVQUNwQ3hCLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztZQUNIZ0MsUUFBUSxFQUFFLE1BQU07WUFDaEI5QixHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUNqQiw0Q0FBNEMsRUFBRTtjQUMxQzhCLElBQUksRUFBRUosUUFBUTtjQUNkekIsUUFBUSxFQUFFMUIsR0FBRztjQUNiMkIsTUFBTSxFQUFFUCxNQUFNLENBQUNyQixPQUFPLENBQUNzQixJQUFJLENBQUMsYUFBYSxDQUFDO2NBQzFDTyxNQUFNLEVBQUVSLE1BQU0sQ0FBQ3JCLE9BQU8sQ0FBQ3NCLElBQUksQ0FBQyxhQUFhO1lBQzdDLENBQUMsQ0FDSjtZQUNEbUMsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO2NBQy9DLElBQUlSLFFBQVEsSUFBSXRELENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRSxFQUFFO2dCQUM1QmxCLE1BQU0sQ0FBQ3JCLE9BQU8sQ0FDVDZELEtBQUssRUFBRSxDQUNQM0IsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQ3hDL0IsT0FBTyxDQUFDO2tCQUNMZ0MsUUFBUSxFQUFFLElBQUk7a0JBQ2Q7a0JBQ0FFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztrQkFDM0JOLElBQUksRUFBRTJCLE1BQU0sQ0FBQ3RCO2dCQUNqQixDQUFDLENBQUMsQ0FDREcsR0FBRyxDQUFDdEMsR0FBRyxDQUFDLENBQ1J1QyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN0Qm5CLE1BQU0sQ0FBQ3JCLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDOUI7Z0JBQ0E7Z0JBQ0FMLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQ2dFLEtBQUssRUFBRTtnQkFDaEJoRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUN5QyxHQUFHLENBQUNsQixNQUFNLENBQUNpQyxNQUFNLENBQUM7Y0FDL0I7WUFDSjtVQUNKLENBQUMsQ0FBQztRQUNOLENBQUMsTUFBTTtVQUNIUyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSxRQUFRLEVBQUU7WUFDeERDLE9BQU8sRUFBRTtVQUNiLENBQUMsQ0FBQztRQUNOO01BQ0o7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRjVDLE1BQU0sQ0FBQ3JCLE9BQU8sQ0FBQzRDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQzNDL0MsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNnRSxLQUFLLEVBQUU7RUFFN0MsQ0FBQyxDQUFDO0VBSUZ6QyxNQUFNLENBQUNyQixPQUFPLENBQUM0QyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQzVDLElBQUlkLElBQUksR0FBR2MsQ0FBQyxDQUFDcUIsTUFBTSxDQUFDbkMsSUFBSTtJQUN4QmpDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3lDLEdBQUcsQ0FBQ1IsSUFBSSxDQUFDb0MsU0FBUyxDQUFDO0lBQ3RDckUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDeUMsR0FBRyxDQUFDUixJQUFJLENBQUNxQyxHQUFHLENBQUM7SUFDdkJ0RSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUN5QyxHQUFHLENBQUNSLElBQUksQ0FBQ3NDLE1BQU0sQ0FBQztJQUM3QnZFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDeUMsR0FBRyxDQUFDUixJQUFJLENBQUN1QyxLQUFLLENBQUMsQ0FBQzlCLE9BQU8sQ0FBQyxRQUFRLENBQUM7RUFDekQsQ0FBQyxDQUFDO0VBRUYxQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM4QyxFQUFFLENBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVc7SUFDbkQ5QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMwQyxPQUFPLENBQUMsT0FBTyxDQUFDO0VBQzdCLENBQUMsQ0FBQztBQUNOO0FBQ0EsSUFBTStCLElBQUksR0FBRzlFLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNK0Usd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUVGLElBQUlDLEtBQUssR0FBR2hGLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ2lGLFNBQVMsQ0FBQztFQUM3QnhELElBQUksRUFBRTtJQUNGRSxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUdzRCxRQUFRLENBQUMxQixNQUFNO0lBQUU7SUFDaEU5QixJQUFJLEVBQUUsS0FBSztJQUNYeUQsVUFBVSxFQUFFLHNCQUFXO01BQ25CLElBQUlILEtBQUssQ0FBQ0ksY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2xDLElBQUlDLFFBQVEsR0FBR0wsS0FBSyxDQUFDSyxRQUFRLEVBQUU7UUFDL0IsSUFBSUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUU7VUFDbkJELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLEVBQUU7UUFDN0I7TUFDSjtJQUNKO0VBQ0osQ0FBQztFQUNEQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsVUFBVSxFQUFFLElBQUk7RUFDaEJDLFVBQVUsRUFBRSxFQUFFO0VBQ2RDLFVBQVUsRUFBRSxDQUNSLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUM3QjtFQUNEQyxLQUFLLEVBQUUsQ0FDSCxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FDZDtFQUNEQyxPQUFPLEVBQUUsQ0FBQztJQUNGQyxTQUFTLEVBQUUsS0FBSztJQUNoQkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFNBQVMsRUFBRSxxQkFBcUI7SUFDaENDLEtBQUssRUFBRSxLQUFLO0lBQ1pDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNaQyxJQUFJLEVBQUU7RUFDVixDQUFDLEVBQ0Q7SUFDSUwsU0FBUyxFQUFFLElBQUk7SUFDZkcsS0FBSyxFQUFFLEtBQUs7SUFDWkQsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQkcsSUFBSSxFQUFFO0VBQ1YsQ0FBQyxFQUNEO0lBQ0lMLFNBQVMsRUFBRSxJQUFJO0lBQ2ZHLEtBQUssRUFBRSxLQUFLO0lBQ1pFLElBQUksRUFBRSxrQkFBa0I7SUFDeEJILFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJRixTQUFTLEVBQUUsSUFBSTtJQUNmRyxLQUFLLEVBQUUsS0FBSztJQUNaRSxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCSCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSUYsU0FBUyxFQUFFLElBQUk7SUFDZkUsU0FBUyxFQUFFLDJCQUEyQjtJQUN0Q0MsS0FBSyxFQUFFLEtBQUs7SUFDWkUsSUFBSSxFQUFFO0VBQ1YsQ0FBQyxFQUNEO0lBQ0lMLFNBQVMsRUFBRSxJQUFJO0lBQ2ZHLEtBQUssRUFBRSxJQUFJO0lBQ1hFLElBQUksRUFBRSxpQkFBaUI7SUFDdkJILFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJRixTQUFTLEVBQUUsSUFBSTtJQUNmRSxTQUFTLEVBQUUseUJBQXlCO0lBQ3BDQyxLQUFLLEVBQUUsS0FBSztJQUNaRSxJQUFJLEVBQUU7RUFDVixDQUFDLEVBQ0Q7SUFDSUwsU0FBUyxFQUFFLElBQUk7SUFDZkUsU0FBUyxFQUFFLDRCQUE0QjtJQUN2Q0MsS0FBSyxFQUFFLEtBQUs7SUFDWkUsSUFBSSxFQUFFO0VBQ1YsQ0FBQyxFQUNEO0lBQ0lMLFNBQVMsRUFBRSxJQUFJO0lBQ2ZFLFNBQVMsRUFBRSwwQkFBMEI7SUFDckNDLEtBQUssRUFBRSxLQUFLO0lBQ1pFLElBQUksRUFBRTtFQUNWLENBQUMsRUFDRDtJQUNJTCxTQUFTLEVBQUUsSUFBSTtJQUNmRSxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDQyxLQUFLLEVBQUUsS0FBSztJQUNaRSxJQUFJLEVBQUU7RUFDVixDQUFDLEVBQ0Q7SUFDSUwsU0FBUyxFQUFFLEtBQUs7SUFDaEJFLFNBQVMsRUFBRSxXQUFXO0lBQ3RCQyxLQUFLLEVBQUU7RUFDWCxDQUFDLEVBQ0Q7SUFDSUgsU0FBUyxFQUFFLEtBQUs7SUFDaEJFLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCQyxLQUFLLEVBQUU7RUFDWCxDQUFDLEVBQ0Q7SUFDSUgsU0FBUyxFQUFFLEtBQUs7SUFDaEJFLFNBQVMsRUFBRSxXQUFXO0lBQ3RCQyxLQUFLLEVBQUU7RUFDWCxDQUFDLEVBQ0Q7SUFDSUgsU0FBUyxFQUFFLEtBQUs7SUFDaEJFLFNBQVMsRUFBRSxXQUFXO0lBQ3RCQyxLQUFLLEVBQUU7RUFDWCxDQUFDO0lBRUdILFNBQVMsRUFBRSxLQUFLO0lBQ2hCRSxTQUFTLEVBQUUsZUFBZTtJQUMxQkMsS0FBSyxFQUFFO0VBQU0sa0NBQ04sS0FBSyxpQ0FDTixxQkFBcUIsVUFFL0I7SUFDSUgsU0FBUyxFQUFFLEtBQUs7SUFDaEJDLFVBQVUsRUFBRSxLQUFLO0lBQ2pCRSxLQUFLLEVBQUU7RUFDWCxDQUFDLENBQ0o7RUFDREcsVUFBVSxFQUFFLENBQUM7SUFDVEwsVUFBVSxFQUFFLEtBQUs7SUFDakJHLE9BQU8sRUFBRSxFQUFFO0lBQ1hHLE1BQU0sRUFBRSxnQkFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ3pCLElBQUl4RSxJQUFJLEdBQUcsRUFBRTtNQUNicUUsQ0FBQyxDQUFDSSxPQUFPLENBQUMsVUFBQXhHLE9BQU8sRUFBSTtRQUNqQixJQUFJeUcsSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJekcsT0FBTyxDQUFDMEcsV0FBVyxFQUFFO1VBQ3JCRCxJQUFJLEdBQUcsUUFBUSxHQUFHekcsT0FBTyxDQUFDMEcsV0FBVyxHQUFHLEdBQUc7UUFDL0M7UUFDQTNFLElBQUksR0FBR0EsSUFBSSxHQUFHLFNBQVMsR0FBRzBFLElBQUksR0FBRyxxQkFBcUIsR0FBR3pHLE9BQU8sQ0FBQ2lHLElBQUksR0FBRyxhQUFhLEdBQUdqRyxPQUFPLENBQUMyRyxFQUFFLEdBQUcsZ0JBQWdCLEdBQUczRyxPQUFPLENBQUM0RyxLQUFLLEdBQUcsMEJBQTBCLEdBQUc1RyxPQUFPLFNBQU0sR0FBRyxHQUFHLEdBQUdBLE9BQU8sQ0FBQzZHLElBQUksR0FBRyxrQkFBa0IsR0FBRzdHLE9BQU8sQ0FBQzhHLElBQUksR0FBRyxVQUFVLEdBQUc5RyxPQUFPLENBQUM0RyxLQUFLLEdBQUcsV0FBVztNQUMxUixDQUFDLENBQUM7TUFFRixPQUFPLDQwQkFBNDBCLEdBQUc3RSxJQUFJLEdBQUcsMEJBQTBCO0lBRTMzQjtFQUNKLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQWdGLEdBQUcsRUFBRSxtQ0FBbUM7RUFDeENDLE9BQU8sRUFBRSxDQUNMLGVBQWUsRUFDZjtJQUNJQyxJQUFJLEVBQUUsV0FBVztJQUNqQm5CLFNBQVMsRUFBRSxnREFBZ0Q7SUFDM0RvQixNQUFNLEVBQUUsZ0JBQVNyRSxDQUFDLEVBQUVzRSxFQUFFLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFO01BQ2xDdkMsS0FBSyxDQUFDd0MsS0FBSyxDQUFDQyxLQUFLLEVBQUU7TUFDbkJsRyxNQUFNLENBQUMyRCxRQUFRLENBQUN3QyxNQUFNLEVBQUU7SUFDNUI7RUFDSixDQUFDLENBQ0o7RUFDRHJGLFFBQVEsRUFBRTtJQUNOVixHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDO0lBQzFDK0YsVUFBVSxFQUFFO0VBQ2hCO0VBQ0E7RUFDQTtBQUNKLENBQUMsQ0FBQzs7QUFDRixJQUFJQyxnQkFBZ0IsR0FBRzVILENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDSyxPQUFPLENBQUM7RUFDbkR3SCxXQUFXLEVBQUUsaUJBQWlCO0VBQzlCQyxVQUFVLEVBQUU7QUFDaEIsQ0FBQyxDQUFDO0FBRUY5QyxLQUFLLENBQUNsQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVNDLENBQUMsRUFBRXNDLFFBQVEsRUFBRTtFQUN0QyxJQUFJMEMsR0FBRyxHQUFHLElBQUkvSCxDQUFDLENBQUNJLEVBQUUsQ0FBQzRILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDNUMsUUFBUSxDQUFDO0VBQzFDLElBQUk2QyxFQUFFLEdBQUdILEdBQUcsQ0FBQ1AsS0FBSyxDQUFDVyxNQUFNLEVBQUU7RUFDM0IsSUFBSWxHLElBQUksR0FBRzhGLEdBQUcsQ0FBQzlGLElBQUksRUFBRTs7RUFFckI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBbUcsNEZBQXNDLENBQUNMLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBQ25ESyw4RkFBd0MsQ0FBQ0wsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDckRLLGdHQUEwQyxDQUFDTCxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDNUQsQ0FBQyxDQUFDO0FBQ0Y7O0FBRUEvSCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3FJLEtBQUssQ0FBQyxVQUFTdEYsQ0FBQyxFQUFFO0VBQ2xDaUMsS0FBSyxDQUFDd0MsS0FBSyxDQUFDQyxLQUFLLEVBQUU7RUFDbkJsRyxNQUFNLENBQUMyRCxRQUFRLENBQUN3QyxNQUFNLEVBQUU7RUFDeEIzRSxDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDOztBQU1GO0FBQ0E7QUFDQTtBQUNBO0FBQ0F0SSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0ssT0FBTyxDQUFDO0VBQ3pCd0gsV0FBVyxFQUFFLFFBQVE7RUFDckJDLFVBQVUsRUFBRTtBQUNoQixDQUFDLENBQUM7QUFFRjlILENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3VJLE1BQU0sQ0FBQyxVQUFTeEYsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXpDL0MsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQ3ZELElBQUl5RixLQUFLLEdBQUd4SSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5SSxPQUFPLENBQUMsTUFBTSxDQUFDO0VBQ25DO0VBQ0EsSUFBSXhHLElBQUksR0FBRyxDQUFDLENBQUM7RUFDYkEsSUFBSSxDQUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUd4QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5QyxHQUFHLEVBQUU7RUFFMUNQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7RUFFakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUcsS0FBSyxDQUFDaEgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0F4QixDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEUsR0FBRyxFQUFFNkcsS0FBSyxDQUFDaEgsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QkUsSUFBSSxFQUFFOEcsS0FBSyxDQUFDaEgsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMxQlMsSUFBSSxFQUFFQSxJQUFJO0lBQ1YwQixPQUFPLEVBQUUsaUJBQVMrRSxJQUFJLEVBQUU7TUFDcEI7TUFDQTFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDMkksV0FBVyxDQUFDM0ksQ0FBQyxDQUFDMEksSUFBSSxDQUFDLENBQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO01BQ2pFNUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDSyxPQUFPLEVBQUU7TUFDcEJMLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDNkksTUFBTSxFQUFFLENBQUNELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDdkYsSUFBSSxFQUFFO0lBQ3ZFO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZSLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRnRJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUN2RCxJQUFJeUYsS0FBSyxHQUFHeEksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUksT0FBTyxDQUFDLE1BQU0sQ0FBQztFQUNuQztFQUNBLElBQUl4RyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0VBQ2JBLElBQUksQ0FBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUMsR0FBRyxFQUFFO0VBRTFDUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0VBQ2pCO0VBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUcsS0FBSyxDQUFDaEgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0F4QixDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEUsR0FBRyxFQUFFNkcsS0FBSyxDQUFDaEgsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QkUsSUFBSSxFQUFFOEcsS0FBSyxDQUFDaEgsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMxQlMsSUFBSSxFQUFFQSxJQUFJO0lBQ1YwQixPQUFPLEVBQUUsaUJBQVMrRSxJQUFJLEVBQUU7TUFDcEI7TUFDQTFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDMkksV0FBVyxDQUFDM0ksQ0FBQyxDQUFDMEksSUFBSSxDQUFDLENBQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO01BQ2pFNUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDSyxPQUFPLEVBQUU7TUFDcEJMLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDNkksTUFBTSxFQUFFLENBQUNELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDdkYsSUFBSSxFQUFFO0lBQ3ZFO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZSLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRnRJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsWUFBVztFQUN6RCxJQUFJMEYsS0FBSyxHQUFHeEksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUksT0FBTyxDQUFDLE1BQU0sQ0FBQztFQUNuQyxJQUFJeEcsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUNiQSxJQUFJLENBQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBR3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRTtFQUMxQ1IsSUFBSSxDQUFDakMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUd4QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUN5QyxHQUFHLEVBQUU7RUFDOUQ7RUFDQXpDLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIRSxHQUFHLEVBQUU2RyxLQUFLLENBQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCRSxJQUFJLEVBQUU4RyxLQUFLLENBQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzFCUyxJQUFJLEVBQUVBLElBQUk7SUFDVjBCLE9BQU8sRUFBRSxpQkFBUytFLElBQUksRUFBRTtNQUNwQnhHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUcsSUFBSSxDQUFDO01BQ2pCMUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDMkksV0FBVyxDQUFDM0ksQ0FBQyxDQUFDMEksSUFBSSxDQUFDLENBQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztNQUMzRDVJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0ssT0FBTyxFQUFFO01BQ3BCTCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM2SSxNQUFNLEVBQUUsQ0FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUN2RixJQUFJLEVBQUU7SUFDcEU7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRnZELENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLFlBQVc7RUFDdEQsSUFBSTBGLEtBQUssR0FBR3hJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lJLE9BQU8sQ0FBQyxNQUFNLENBQUM7RUFDbkMsSUFBSXhHLElBQUksR0FBRyxDQUFDLENBQUM7RUFDYkEsSUFBSSxDQUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUd4QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5QyxHQUFHLEVBQUU7RUFDMUNSLElBQUksQ0FBQ2pDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHeEIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDeUMsR0FBRyxFQUFFO0VBQzlEUixJQUFJLENBQUNqQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHeEIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUN5QyxHQUFHLEVBQUU7RUFDcEU7RUFDQXpDLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIRSxHQUFHLEVBQUU2RyxLQUFLLENBQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCRSxJQUFJLEVBQUU4RyxLQUFLLENBQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzFCUyxJQUFJLEVBQUVBLElBQUk7SUFDVjBCLE9BQU8sRUFBRSxpQkFBUytFLElBQUksRUFBRTtNQUNwQnhHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUcsSUFBSSxDQUFDO01BQ2pCMUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDMkksV0FBVyxDQUFDM0ksQ0FBQyxDQUFDMEksSUFBSSxDQUFDLENBQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztNQUNqRDVJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0ssT0FBTyxFQUFFO01BQ3BCTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM2SSxNQUFNLEVBQUUsQ0FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUN2RixJQUFJLEVBQUU7SUFDL0Q7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRnZELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUN4QyxJQUFJZ0csU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUNwQyxJQUFJd0gsR0FBRyxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUIsSUFBSUMsUUFBUSxHQUFHbEosQ0FBQyxDQUFDLElBQUksQ0FBQztFQUN0QjtFQUNBLElBQUl3RyxDQUFDLEdBQUcyQyw2Q0FBWSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQztFQUM1QzdDLENBQUMsQ0FBQzhDLEtBQUssRUFBRTtFQUNUdEosQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsNEJBQTRCLENBQUM7SUFDbkRLLElBQUksRUFBRStHLEdBQUc7SUFDVE8sV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7TUFDdEI0QyxDQUFDLENBQUNpRCxJQUFJLEVBQUU7TUFDUixJQUFJN0YsTUFBTSxDQUFDOEYsTUFBTSxFQUFFO1FBQ2ZDLGtGQUFjLENBQUNULFFBQVEsRUFBRUgsU0FBUyxFQUFFbkYsTUFBTSxDQUFDOEYsTUFBTSxDQUFDO01BQ3RELENBQUMsTUFBTSxJQUFJOUYsTUFBTSxDQUFDRyxLQUFLLEVBQUU7UUFDckJFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7VUFDdER6RixPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7TUFDTixDQUFDLE1BQU0sSUFBSVAsTUFBTSxDQUFDM0IsSUFBSSxFQUFFO1FBQ3BCZ0MsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtVQUN0RHpGLE9BQU8sRUFBRTtRQUNiLENBQUMsQ0FBQztRQUVGLElBQUl4QyxHQUFHLEdBQUcvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLHVCQUF1QixFQUFFO1VBQ2hEaUYsRUFBRSxFQUFFakQsTUFBTSxDQUFDM0IsSUFBSSxDQUFDNEU7UUFDcEIsQ0FBQyxDQUFDO1FBQ0Z0RixNQUFNLENBQUMyRCxRQUFRLENBQUMyRSxJQUFJLEdBQUdsSSxHQUFHO01BQzlCO0lBQ0osQ0FBQztJQUNEbUksS0FBSyxFQUFFLGVBQVN4RSxLQUFLLEVBQUV6QixVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUM1QzBDLENBQUMsQ0FBQ2lELElBQUksRUFBRTtNQUNSeEYsTUFBTSxDQUFDNkYsS0FBSyxDQUFDLFFBQVEsRUFBRWhHLFdBQVcsRUFBRTtRQUNoQ0ssT0FBTyxFQUFFO01BQ2IsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7RUFDRnBCLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7O0FBRUY7QUFDQXRJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNoRCxJQUFJZ0csU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUNwQyxJQUFJd0gsR0FBRyxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUIsSUFBSUMsUUFBUSxHQUFHbEosQ0FBQyxDQUFDLElBQUksQ0FBQztFQUN0QjtFQUNBLElBQUl3RyxDQUFDLEdBQUcyQyw2Q0FBWSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQztFQUM1QzdDLENBQUMsQ0FBQzhDLEtBQUssRUFBRTtFQUNUdEosQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsaUNBQWlDLENBQUM7SUFDeERLLElBQUksRUFBRStHLEdBQUc7SUFDVE8sV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7TUFDdEI0QyxDQUFDLENBQUNpRCxJQUFJLEVBQUU7TUFDUixJQUFJN0YsTUFBTSxDQUFDbUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUNwQnZELENBQUMsQ0FBQ2lELElBQUksRUFBRTtRQUNSeEYsTUFBTSxDQUFDQyxPQUFPLENBQUNOLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtVQUN0RHpGLE9BQU8sRUFBRTtRQUNiLENBQUMsQ0FBQztNQUNOO01BQ0EsSUFBSVAsTUFBTSxDQUFDOEYsTUFBTSxFQUFFO1FBQ2Y7UUFDQWxELENBQUMsQ0FBQ2lELElBQUksRUFBRTtRQUNSRSxrRkFBYyxDQUFDVCxRQUFRLEVBQUVILFNBQVMsRUFBRW5GLE1BQU0sQ0FBQzhGLE1BQU0sQ0FBQztNQUN0RCxDQUFDLE1BQU0sSUFBSTlGLE1BQU0sQ0FBQ0csS0FBSyxFQUFFO1FBQ3JCeUMsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1J4RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDOztRQUVGO01BQ0osQ0FBQyxNQUFNLElBQUlQLE1BQU0sQ0FBQzNCLElBQUksRUFBRTtRQUNwQjtRQUNBZ0MsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtVQUN0RHpGLE9BQU8sRUFBRTtRQUNiLENBQUMsQ0FBQztRQUNGO1FBQ0E7O1FBRUEsSUFBSXhDLEdBQUcsR0FBRy9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMscUNBQXFDLEVBQUU7VUFDOURpRixFQUFFLEVBQUVqRCxNQUFNLENBQUMzQjtRQUNmLENBQUMsQ0FBQztRQUNGVixNQUFNLENBQUMyRCxRQUFRLENBQUMyRSxJQUFJLEdBQUdsSSxHQUFHOztRQUUxQjtNQUNKO0lBQ0osQ0FBQzs7SUFDRG1JLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7TUFDNUMwQyxDQUFDLENBQUNpRCxJQUFJLEVBQUU7TUFDUnhGLE1BQU0sQ0FBQzZGLEtBQUssQ0FBQyxRQUFRLEVBQUVoRyxXQUFXLEVBQUU7UUFDaENLLE9BQU8sRUFBRTtNQUNiLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsSUFBSTBCLFlBQVksR0FBRyxFQUFFO0FBQ3JCaEssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQy9DLElBQUlnRyxTQUFTLEdBQUcvSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsTUFBTSxDQUFDO0VBQ3BDLElBQUl3SCxHQUFHLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQztFQUM1QixJQUFJQyxRQUFRLEdBQUdsSixDQUFDLENBQUMsVUFBVSxDQUFDO0VBQzVCO0VBQ0E7RUFDQSxJQUFJaUssS0FBSyxHQUFHLENBQUM7RUFDYmpLLENBQUMsQ0FBQ2tLLElBQUksQ0FBQ0YsWUFBWSxFQUFFLFVBQVNHLENBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQ3BDLElBQUlwSyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRSxJQUFJMkgsS0FBSyxDQUFDdkQsRUFBRSxFQUFFO01BQ3BEb0QsS0FBSyxHQUFHLENBQUM7SUFDYjtFQUNKLENBQUMsQ0FBQztFQUNGO0VBQ0EsSUFBSXpELENBQUMsR0FBRzJDLDZDQUFZLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDOztFQUU1QztFQUNBN0MsQ0FBQyxDQUFDOEMsS0FBSyxFQUFFO0VBQ1QsSUFBSVcsS0FBSyxJQUFJLENBQUMsRUFBRTtJQUNaakssQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO01BQ0hDLElBQUksRUFBRSxNQUFNO01BQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMseUJBQXlCLENBQUM7TUFDaERLLElBQUksRUFBRStHLEdBQUc7TUFDVE8sV0FBVyxFQUFFLEtBQUs7TUFDbEJDLFdBQVcsRUFBRSxLQUFLO01BQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7UUFDdEIsSUFBSUEsTUFBTSxDQUFDOEYsTUFBTSxFQUFFO1VBQ2ZDLGtGQUFjLENBQUNULFFBQVEsRUFBRUgsU0FBUyxFQUFFbkYsTUFBTSxDQUFDOEYsTUFBTSxDQUFDO1VBQ2xEbEQsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1osQ0FBQyxNQUFNLElBQUk3RixNQUFNLENBQUMzQixJQUFJLEVBQUU7VUFDcEJqQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNxSyxLQUFLLEVBQUU7VUFDNUJySyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM0QyxNQUFNLEVBQUU7VUFDMUI1QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNnRSxLQUFLLEVBQUU7VUFDckI7VUFDQSxJQUFJc0csT0FBTSxHQUFHLENBQUM7VUFDZE4sWUFBWSxDQUFDTyxJQUFJLENBQUMzRyxNQUFNLENBQUMzQixJQUFJLENBQUM7VUFDOUJqQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQytELEtBQUssRUFBRTtVQUN2Qy9ELENBQUMsQ0FBQ2tLLElBQUksQ0FBQ0YsWUFBWSxFQUFFLFVBQVNHLENBQUMsRUFBRUMsS0FBSyxFQUFFO1lBQ3BDLElBQUk5RixHQUFHLEdBQUc4RixLQUFLLENBQUM5RixHQUFHLEdBQUcsSUFBSTtZQUMxQixJQUFJQyxNQUFNLEdBQUc2RixLQUFLLENBQUM3RixNQUFNLEdBQUcsSUFBSTtZQUNoQyxJQUFJaUcsV0FBVyxHQUFHSixLQUFLLENBQUNJLFdBQVc7WUFDbkMsSUFBSUosS0FBSyxDQUFDOUYsR0FBRyxJQUFJLElBQUksRUFBRTtjQUNuQkEsR0FBRyxHQUFHLEdBQUc7WUFDYjtZQUNBLElBQUk4RixLQUFLLENBQUNJLFdBQVcsSUFBSSxJQUFJLEVBQUU7Y0FDM0JBLFdBQVcsR0FBRyxHQUFHO1lBQ3JCO1lBQ0EsSUFBSUMsTUFBTSxHQUNOLFdBQVcsSUFDVk4sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUNQLFdBQVcsR0FDWEMsS0FBSyxDQUFDTCxJQUFJLEdBQ1YsS0FBSyxHQUNMSyxLQUFLLENBQUN0RCxLQUFLLEdBQ1gsV0FBVyxHQUNYc0QsS0FBSyxDQUFDNUYsS0FBSyxHQUNYLFdBQVcsR0FDWDRGLEtBQUssQ0FBQ00sUUFBUSxHQUNkLFlBQVksR0FDWk4sS0FBSyxDQUFDTyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FDN0IsV0FBVyxHQUNYdEcsR0FBRyxHQUNILFdBQVcsR0FDWEMsTUFBTSxHQUNOLFdBQVcsR0FDWDZGLEtBQUssQ0FBQ1MsYUFBYSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQzlCLFdBQVcsR0FDWFIsS0FBSyxDQUFDVSxPQUFPLENBQUNGLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FDeEIsd0NBQXdDLEdBQ3hDVCxDQUFDLEdBQ0Qsc0RBQXNEO1lBQzFEbkssQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMrSyxNQUFNLENBQUNOLE1BQU0sQ0FBQztZQUM5Q0gsT0FBTSxFQUFFO1VBQ1osQ0FBQyxDQUFDO1VBQ0Y5RCxDQUFDLENBQUNpRCxJQUFJLEVBQUU7VUFDUnpKLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDeUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1VBQy9DMUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDeUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1VBQzFDMUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUN5QyxHQUFHLENBQUN1SSxJQUFJLENBQUNDLFNBQVMsQ0FBQ2pCLFlBQVksQ0FBQyxDQUFDO1FBQ3JFO01BQ0o7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSHhELENBQUMsQ0FBQ2lELElBQUksRUFBRTtJQUNSeEYsTUFBTSxDQUFDQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsU0FBUyxFQUFFO01BQ2pEQyxPQUFPLEVBQUU7SUFDYixDQUFDLENBQUM7RUFDTjtFQUNBcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDakRpSCxZQUFZLENBQUNrQixNQUFNLENBQUNsTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBRTFDeEIsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUM0QyxNQUFNLEVBQUU7RUFDM0M1QyxDQUFDLENBQUNrSyxJQUFJLENBQUNGLFlBQVksRUFBRSxVQUFTRyxDQUFDLEVBQUVDLEtBQUssRUFBRTtJQUNwQyxJQUFJOUYsR0FBRyxHQUFHOEYsS0FBSyxDQUFDOUYsR0FBRyxHQUFHLElBQUk7SUFDMUIsSUFBSUMsTUFBTSxHQUFHNkYsS0FBSyxDQUFDN0YsTUFBTSxHQUFHLElBQUk7SUFDaEMsSUFBSWlHLFdBQVcsR0FBR0osS0FBSyxDQUFDSSxXQUFXO0lBQ25DLElBQUlKLEtBQUssQ0FBQzlGLEdBQUcsSUFBSSxJQUFJLEVBQUU7TUFDbkJBLEdBQUcsR0FBRyxHQUFHO0lBQ2I7SUFDQSxJQUFJOEYsS0FBSyxDQUFDSSxXQUFXLElBQUksSUFBSSxFQUFFO01BQzNCQSxXQUFXLEdBQUcsR0FBRztJQUNyQjtJQUNBLElBQUlDLE1BQU0sR0FDTixXQUFXLElBQ1ZOLENBQUMsR0FBRyxDQUFDLENBQUMsR0FDUCxXQUFXLEdBQ1hDLEtBQUssQ0FBQ0wsSUFBSSxHQUNWLEtBQUssR0FDTEssS0FBSyxDQUFDdEQsS0FBSyxHQUNYLFdBQVcsR0FDWHNELEtBQUssQ0FBQzVGLEtBQUssR0FDWCxXQUFXLEdBQ1g0RixLQUFLLENBQUNNLFFBQVEsR0FDZCxZQUFZLEdBQ1pOLEtBQUssQ0FBQ08sWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQzdCLFdBQVcsR0FDWHRHLEdBQUcsR0FDSCxXQUFXLEdBQ1hDLE1BQU0sR0FDTixXQUFXLEdBQ1g2RixLQUFLLENBQUNTLGFBQWEsQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUM5QixXQUFXLEdBQ1hSLEtBQUssQ0FBQ1UsT0FBTyxDQUFDRixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQ3hCLHdDQUF3QyxHQUN4Q1QsQ0FBQyxHQUNELHNEQUFzRDtJQUMxRG5LLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDK0ssTUFBTSxDQUFDTixNQUFNLENBQUM7SUFDOUNILE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBdEssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQ3pDLElBQUl5RCxDQUFDLEdBQUcyQyw2Q0FBWSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQztFQUM1QzdDLENBQUMsQ0FBQzhDLEtBQUssRUFBRTtFQUNULElBQUlQLFNBQVMsR0FBRy9JLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDcEMsSUFBSTBILFFBQVEsR0FBR2xKLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFDdEIsSUFBSWdKLEdBQUcsR0FBRyxJQUFJQyxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQzVCLElBQUlwQyxFQUFFLEdBQUdtQyxHQUFHLENBQUNtQyxHQUFHLENBQUMsS0FBSyxDQUFDO0VBQ3ZCbkwsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7TUFDaERpRixFQUFFLEVBQUVBO0lBQ1IsQ0FBQyxDQUFDO0lBQ0Y1RSxJQUFJLEVBQUUrRyxHQUFHO0lBQ1RPLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQjdGLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO01BQ3RCNUQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDNEMsTUFBTSxFQUFFO01BQzFCLElBQUlnQixNQUFNLENBQUM4RixNQUFNLEVBQUU7UUFDZmxELENBQUMsQ0FBQ2lELElBQUksRUFBRTtRQUNSRSxrRkFBYyxDQUFDVCxRQUFRLEVBQUVILFNBQVMsRUFBRW5GLE1BQU0sQ0FBQzhGLE1BQU0sQ0FBQztRQUNsRDtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ1ksQ0FBQyxNQUFNLElBQUk5RixNQUFNLENBQUMzQixJQUFJLEVBQUU7UUFDcEJ1RSxDQUFDLENBQUNpRCxJQUFJLEVBQUU7UUFDUnhGLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7VUFDdER6RixPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7TUFDTjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBSUZ0SSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFFOUMsSUFBSXlELENBQUMsR0FBRzJDLDZDQUFZLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDO0VBQzVDN0MsQ0FBQyxDQUFDOEMsS0FBSyxFQUFFO0VBQ1QsSUFBSVAsU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUNwQyxJQUFJMEgsUUFBUSxHQUFHbEosQ0FBQyxDQUFDLElBQUksQ0FBQztFQUN0QixJQUFJZ0osR0FBRyxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUIsSUFBSXBDLEVBQUUsR0FBR21DLEdBQUcsQ0FBQ21DLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDdkJuTCxDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEMsSUFBSSxFQUFFLE1BQU07SUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtNQUNuRGlGLEVBQUUsRUFBRUE7SUFDUixDQUFDLENBQUM7SUFDRjVFLElBQUksRUFBRStHLEdBQUc7SUFDVE8sV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7TUFDdEI1RCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM0QyxNQUFNLEVBQUU7TUFDMUIsSUFBSWdCLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtRQUNmbEQsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1JFLGtGQUFjLENBQUNULFFBQVEsRUFBRUgsU0FBUyxFQUFFbkYsTUFBTSxDQUFDOEYsTUFBTSxDQUFDO1FBQ2xEO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDWSxDQUFDLE1BQU0sSUFBSTlGLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDM0I7UUFDQTlGLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7VUFDdER6RixPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7UUFDRmUsUUFBUSxDQUFDd0MsTUFBTSxFQUFFO01BQ3JCLENBQUMsTUFDSSxJQUFJOUQsTUFBTSxDQUFDbUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUN6QnZELENBQUMsQ0FBQ2lELElBQUksRUFBRTtRQUNSeEYsTUFBTSxDQUFDQyxPQUFPLENBQUNOLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtVQUN0RHpGLE9BQU8sRUFBRTtRQUNiLENBQUMsQ0FBQztNQUNOO0lBQ0o7RUFDSixDQUFDLENBQUM7RUFDRnBCLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFJRnRJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQ3ZELElBQUlpRyxHQUFHLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQztFQUM1QixJQUFJQyxRQUFRLEdBQUdsSixDQUFDLENBQUMsSUFBSSxDQUFDO0VBQ3RCLElBQUk2RyxFQUFFLEdBQUdtQyxHQUFHLENBQUNtQyxHQUFHLENBQUMsS0FBSyxDQUFDO0VBQ3ZCLElBQUlDLEtBQUssR0FBR3BDLEdBQUcsQ0FBQ21DLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDN0I7RUFDQTtFQUNBekcsd0JBQXdCLENBQ25CMkcsSUFBSSxDQUFDO0lBQ0ZDLFNBQVMsRUFBRTtNQUNQQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0RDLFFBQVEsRUFBRSxLQUFLO0lBQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCekMsSUFBSSxFQUFFLDhDQUE4QztJQUNwRHpGLElBQUksRUFBRSxTQUFTO0lBQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCQyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsaUJBQWlCLEVBQUUsNkNBQTZDO0lBQ2hFQyxnQkFBZ0IsRUFBRTtFQUN0QixDQUFDLENBQUMsQ0FDRDVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO0lBQ2QsSUFBSUEsTUFBTSxDQUFDd0csS0FBSyxFQUFFO01BQ2RwSyxDQUFDLENBQUN5QixJQUFJLENBQUM7UUFDSEMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtVQUNoRGlGLEVBQUUsRUFBRUEsRUFBRTtVQUNOdUUsS0FBSyxFQUFFQTtRQUNYLENBQUMsQ0FBQztRQUNGbkosSUFBSSxFQUFFK0csR0FBRztRQUNUTyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEI3RixPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtVQUN0QjtVQUNBLElBQUlBLE1BQU0sQ0FBQzNCLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDMUJnQyxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2NBQ3REekYsT0FBTyxFQUFFO1lBQ2IsQ0FBQyxDQUFDO1lBQ0Y7WUFDQTtZQUNBZSxRQUFRLENBQUN3QyxNQUFNLEVBQUU7VUFDckIsQ0FBQyxNQUFNLElBQUs5RCxNQUFNLENBQUMzQixJQUFJLEdBQUcsT0FBTyxFQUFHO1lBQ2hDZ0MsTUFBTSxDQUFDNkYsS0FBSyxDQUFDbEcsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2NBQ3BEekYsT0FBTyxFQUFFO1lBQ2IsQ0FBQyxDQUFDO1lBQ0Y7VUFDSjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7O0VBRU5wQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUF0SSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDaEQsSUFBSW1HLFFBQVEsR0FBR2xKLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFDdEIsSUFBSWdKLEdBQUcsR0FBRyxJQUFJQyxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQzVCLElBQUlwQyxFQUFFLEdBQUdtQyxHQUFHLENBQUNtQyxHQUFHLENBQUMsS0FBSyxDQUFDO0VBRXZCLElBQUlVLFNBQVMsR0FBRzdMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lJLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDcUQsS0FBSyxFQUFFO0VBQ3RFO0VBQ0E5TCxDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEMsSUFBSSxFQUFFLE1BQU07SUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRTtNQUNyRGlGLEVBQUUsRUFBRUE7SUFDUixDQUFDLENBQUM7SUFDRmxELE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO01BQ3RCO01BQ0E1RCxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FDM0IrTCxFQUFFLENBQUNGLFNBQVMsQ0FBQyxDQUNiRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FDMUJ0RCxJQUFJLENBQUMsbUJBQW1CLEdBQUc5RSxNQUFNLEdBQUcsT0FBTyxDQUFDO01BQ2pENUQsQ0FBQyxDQUFDQSxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQytMLEVBQUUsQ0FBQ0YsU0FBUyxDQUFDLENBQUMsQ0FDNUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQ2hCckYsSUFBSSxFQUFFLENBQ05QLEtBQUssQ0FDRixtRkFBbUYsQ0FDdEY7TUFDTC9DLHVCQUF1QixDQUNuQkQsQ0FBQyxDQUFDQSxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQytMLEVBQUUsQ0FBQ0YsU0FBUyxDQUFDLENBQUMsQ0FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsRUFDbkU1SSxDQUFDLENBQUNBLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDK0wsRUFBRSxDQUFDRixTQUFTLENBQUMsQ0FBQyxDQUNoRGpELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDakJwSCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQ3ZCO01BQ0Q7TUFDQTtNQUNBeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDK0QsS0FBSyxFQUFFO01BQ2pCL0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDNkMsTUFBTSxFQUFFO01BRWxCN0MsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO1FBQ0hDLElBQUksRUFBRSxNQUFNO1FBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsdUNBQXVDLENBQUM7UUFDOUQySCxXQUFXLEVBQUUsS0FBSztRQUNsQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEI3RixPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7VUFDL0M5RCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMwSSxJQUFJLENBQUM5RSxNQUFNLENBQUMsQ0FBQ0wsSUFBSSxFQUFFO1VBQzdCMEksdUNBQXVDLENBQUNDLElBQUksRUFBRTtVQUM5Q0MsVUFBVSxDQUFDLFlBQVc7WUFDbEJuTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1RCxJQUFJLEVBQUU7WUFDaEJ2RCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM2QyxNQUFNLEVBQUU7VUFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNYO01BQ0osQ0FBQyxDQUFDO01BQ0Y7TUFDQTtNQUNBO01BQ0E7SUFDSjtFQUNKLENBQUMsQ0FBQzs7RUFFRkUsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBdEksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQ2hELElBQUlpRyxHQUFHLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQztFQUU1Qi9HLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNkcsR0FBRyxDQUFDO0VBQ2hCLElBQUlELFNBQVMsR0FBRy9JLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDcEMsSUFBSXFGLEVBQUUsR0FBR21DLEdBQUcsQ0FBQ21DLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDdkIsSUFBSWpDLFFBQVEsR0FBR2xKLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFDdEIsSUFBSXdHLENBQUMsR0FBRzJDLDZDQUFZLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDO0VBQzVDO0VBQ0E3QyxDQUFDLENBQUM4QyxLQUFLLEVBQUU7RUFDVHRKLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLG1DQUFtQyxFQUFFO01BQ3ZEaUYsRUFBRSxFQUFFQTtJQUNSLENBQUMsQ0FBQztJQUNGNUUsSUFBSSxFQUFFK0csR0FBRztJQUNUTyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsV0FBVyxFQUFFLEtBQUs7SUFDbEI3RixPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtNQUN0QjFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUIsTUFBTSxDQUFDO01BQ25CLElBQUlBLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtRQUNmbEQsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1JFLGtGQUFjLENBQUNULFFBQVEsRUFBRUgsU0FBUyxFQUFFbkYsTUFBTSxDQUFDOEYsTUFBTSxDQUFDO1FBQ2xEO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNZLENBQUMsTUFBTSxJQUFJOUYsTUFBTSxDQUFDM0IsSUFBSSxFQUFFO1FBQ3BCdUUsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1J4RixNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO1FBQ0ZlLFFBQVEsQ0FBQ3dDLE1BQU0sRUFBRTtNQUNyQixDQUFDLE1BQU0sSUFBSTlELE1BQU0sQ0FBQ0csS0FBSyxFQUFFO1FBQ3JCeUMsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1J4RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO01BQ047SUFDSjtFQUNKLENBQUMsQ0FBQztFQUNGcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQzs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBdEksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUNwQy9DLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDb00sV0FBVyxDQUFDLHNCQUFzQixDQUFDO0VBQzlEcE0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDdUQsSUFBSSxFQUFFO0VBQ2RSLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7O0FBRUY7O0FBRUF0SSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUM1RCxJQUFJaUcsR0FBRyxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUIsSUFBSUYsU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUNwQyxJQUFJcUYsRUFBRSxHQUFHbUMsR0FBRyxDQUFDbUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUMzQixJQUFJakMsUUFBUSxHQUFHbEosQ0FBQyxDQUFDLElBQUksQ0FBQzs7RUFFdEI7RUFDQSxJQUFJd0csQ0FBQyxHQUFHMkMsNkNBQVksQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUM7O0VBRTVDO0VBQ0E3QyxDQUFDLENBQUM4QyxLQUFLLEVBQUU7RUFDVHRKLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLDRCQUE0QixFQUFFO01BQ2hEaUYsRUFBRSxFQUFFQTtJQUNSLENBQUMsQ0FBQztJQUNGNUUsSUFBSSxFQUFFK0csR0FBRztJQUNUTyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsV0FBVyxFQUFFLEtBQUs7SUFDbEI3RixPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtNQUN0QjFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUIsTUFBTSxDQUFDO01BQ25CLElBQUlBLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtRQUNmbEQsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1JFLGtGQUFjLENBQUNULFFBQVEsRUFBRUgsU0FBUyxFQUFFbkYsTUFBTSxDQUFDOEYsTUFBTSxDQUFDO1FBQ2xEO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNZLENBQUMsTUFBTSxJQUFJOUYsTUFBTSxDQUFDM0IsSUFBSSxFQUFFO1FBQ3BCdUUsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1J4RixNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO1FBQ0ZlLFFBQVEsQ0FBQ3dDLE1BQU0sRUFBRTtNQUNyQixDQUFDLE1BQU0sSUFBSTlELE1BQU0sQ0FBQ0csS0FBSyxFQUFFO1FBQ3JCeUMsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1J4RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO01BQ047SUFDSjtFQUNKLENBQUMsQ0FBQztFQUVGcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDcUksS0FBSyxDQUFDLFVBQVN0RixDQUFDLEVBQUU7RUFDNUIvQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNxTSxXQUFXLENBQUMsY0FBYyxDQUFDO0VBQ3pDdEosQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQy9DO0VBQ0EvQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNvTSxXQUFXLENBQUMsY0FBYyxDQUFDO0VBQ3pDckosQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJZ0UsR0FBRyxHQUFHdE0sQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUN1TSxVQUFVLENBQUM7RUFDaERDLFFBQVEsRUFBRSxRQUFRO0VBQ2xCQyxrQkFBa0IsRUFBRSxLQUFLO0VBQ3pCQyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLFNBQVMsRUFBRTtBQUNmLENBQUMsQ0FBQztBQUVGLElBQUlDLFFBQVEsR0FBRyxJQUFJQyxJQUFJLEVBQUU7QUFDekJELFFBQVEsQ0FBQ0UsV0FBVyxDQUFDRixRQUFRLENBQUNHLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUVqRGhOLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ3VNLFVBQVUsQ0FBQyxTQUFTLEVBQUVNLFFBQVEsQ0FBQztBQUU5QzdNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNuRCxJQUFJaUcsR0FBRyxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUIsSUFBSUYsU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUNwQyxJQUFJcUYsRUFBRSxHQUFHN0IsS0FBSyxDQUFDaUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDcEcsRUFBRSxFQUFFO0VBQ3BDLElBQUlxQyxRQUFRLEdBQUdsSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMwTCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2xELElBQUlyRyxFQUFFLEVBQUU7SUFDSjdHLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztNQUNIQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLDRCQUE0QixFQUFFO1FBQ2hEaUYsRUFBRSxFQUFFQTtNQUNSLENBQUMsQ0FBQztNQUNGNUUsSUFBSSxFQUFFK0csR0FBRztNQUNUTyxXQUFXLEVBQUUsS0FBSztNQUNsQkMsV0FBVyxFQUFFLEtBQUs7TUFDbEI3RixPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7UUFDL0M7UUFDQTtRQUNBO1FBQ0EsSUFBSUYsTUFBTSxDQUFDOEYsTUFBTSxFQUFFO1VBQ2ZDLGtGQUFjLENBQUNULFFBQVEsRUFBRUgsU0FBUyxFQUFFbkYsTUFBTSxDQUFDOEYsTUFBTSxDQUFDO1VBQ2xEO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtRQUNnQixDQUFDLE1BQU0sSUFBSTlGLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7VUFDM0IvRSxLQUFLLENBQUN2RCxJQUFJLENBQUNpRyxNQUFNLEVBQUU7VUFDbkJ6RCxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1lBQ3REekYsT0FBTyxFQUFFO1VBQ2IsQ0FBQyxDQUFDO1VBQ0ZuRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMrRCxLQUFLLEVBQUUsQ0FBQ3FJLFdBQVcsQ0FBQyxjQUFjLENBQUM7VUFDakQ7UUFDSjtNQUNKLENBQUM7O01BQ0R0QyxLQUFLLEVBQUUsZUFBU3hFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQzVDRyxNQUFNLENBQUM2RixLQUFLLENBQUMsUUFBUSxFQUFFaEcsV0FBVyxFQUFFO1VBQ2hDSyxPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsTUFBTTtJQUNIRixNQUFNLENBQUNDLE9BQU8sQ0FDViw4REFBOEQsRUFDOUQsU0FBUyxFQUFFO01BQ1BDLE9BQU8sRUFBRTtJQUNiLENBQUMsQ0FDSjtFQUNMO0VBRUFwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBQ0Z0SSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDbkQsSUFBSWlHLEdBQUcsR0FBRyxJQUFJQyxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQzVCLElBQUlGLFNBQVMsR0FBRy9JLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDcEMsSUFBSXFGLEVBQUUsR0FBRzdCLEtBQUssQ0FBQ2lJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQ3BHLEVBQUUsRUFBRTtFQUNwQyxJQUFJcUMsUUFBUSxHQUFHbEosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDMEwsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNsRCxJQUFJckcsRUFBRSxFQUFFO0lBQ0o3RyxDQUFDLENBQUN5QixJQUFJLENBQUM7TUFDSEMsSUFBSSxFQUFFLE1BQU07TUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtRQUMvQ2lGLEVBQUUsRUFBRUE7TUFDUixDQUFDLENBQUM7TUFDRjVFLElBQUksRUFBRStHLEdBQUc7TUFDVE8sV0FBVyxFQUFFLEtBQUs7TUFDbEJDLFdBQVcsRUFBRSxLQUFLO01BQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQy9DO1FBQ0E7UUFDQTtRQUNBLElBQUlGLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtVQUNmQyxrRkFBYyxDQUFDVCxRQUFRLEVBQUVILFNBQVMsRUFBRW5GLE1BQU0sQ0FBQzhGLE1BQU0sQ0FBQztVQUNsRDtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFDZ0IsQ0FBQyxNQUFNLElBQUk5RixNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO1VBQzNCL0UsS0FBSyxDQUFDdkQsSUFBSSxDQUFDaUcsTUFBTSxFQUFFO1VBQ25CekQsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtZQUN0RHpGLE9BQU8sRUFBRTtVQUNiLENBQUMsQ0FBQztVQUNGbkUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDK0QsS0FBSyxFQUFFLENBQUNxSSxXQUFXLENBQUMsY0FBYyxDQUFDO1VBQ2pEO1FBQ0o7TUFDSixDQUFDOztNQUNEdEMsS0FBSyxFQUFFLGVBQVN4RSxLQUFLLEVBQUV6QixVQUFVLEVBQUVDLFdBQVcsRUFBRTtRQUM1Q0csTUFBTSxDQUFDNkYsS0FBSyxDQUFDLFFBQVEsRUFBRWhHLFdBQVcsRUFBRTtVQUNoQ0ssT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSEYsTUFBTSxDQUFDQyxPQUFPLENBQ1YsOERBQThELEVBQzlELFNBQVMsRUFBRTtNQUNQQyxPQUFPLEVBQUU7SUFDYixDQUFDLENBQ0o7RUFDTDtFQUVBcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDb0osUUFBUSxDQUFDLENBQUN0RyxFQUFFLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNyRC9DLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQzVDK0IsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7TUFDdEI1RCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMwSSxJQUFJLENBQUM5RSxNQUFNLENBQUM7TUFDMUI1RCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNxTSxXQUFXLENBQUMsY0FBYyxDQUFDO0lBQzdDO0VBQ0osQ0FBQyxDQUFDO0VBQ0Z0SixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUZ0SSxDQUFDLENBQUNvSixRQUFRLENBQUMsQ0FBQ3RHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQzFELElBQUlpRyxHQUFHLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQztFQUM1QixJQUFJRixTQUFTLEdBQUcvSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsTUFBTSxDQUFDO0VBQ3BDLElBQUkwSCxRQUFRLEdBQUdsSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMwTCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2xEbE4sQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pPLElBQUksRUFBRStHLEdBQUc7SUFDVE8sV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCN0gsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQztJQUNuRCtCLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO01BQ3RCLElBQUlBLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtRQUNmQyxrRkFBYyxDQUFDVCxRQUFRLEVBQUVILFNBQVMsRUFBRW5GLE1BQU0sQ0FBQzhGLE1BQU0sQ0FBQztRQUNsRDtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ1ksQ0FBQyxNQUFNLElBQUk5RixNQUFNLENBQUMzQixJQUFJLEVBQUU7UUFDcEJnQyxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO1FBQ0ZuRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMrRCxLQUFLLEVBQUUsQ0FBQ3FJLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFFakQsSUFBSW5LLElBQUksR0FBRyxDQUFDLENBQUM7UUFFYmpDLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztVQUNIRSxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLDhCQUE4QixDQUFDO1VBQ3JERixJQUFJLEVBQUUsTUFBTTtVQUNaTyxJQUFJLEVBQUVBLElBQUk7VUFDVjBCLE9BQU8sRUFBRSxpQkFBUytFLElBQUksRUFBRTtZQUNwQjFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzJJLFdBQVcsQ0FBQzNJLENBQUMsQ0FBQzBJLElBQUksQ0FBQyxDQUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7VUFDdkQ7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUM7SUFDRGtCLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7TUFDNUNHLE1BQU0sQ0FBQzZGLEtBQUssQ0FBQyxRQUFRLEVBQUVoRyxXQUFXLEVBQUU7UUFDaENLLE9BQU8sRUFBRTtNQUNiLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUZ0SSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUMxQixJQUFJOEQsRUFBRSxHQUFHN0IsS0FBSyxDQUFDaUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDcEcsRUFBRSxFQUFFO0VBQ3BDLElBQUlBLEVBQUUsRUFBRTtJQUNKLElBQUlsRixHQUFHLEdBQUcvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLHVCQUF1QixFQUFFO01BQ2hEaUYsRUFBRSxFQUFFQTtJQUNSLENBQUMsQ0FBQztJQUNGO0lBQ0FzRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7SUFDOUI7RUFDSixDQUFDLE1BQU07SUFDSGxKLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWLCtEQUErRCxFQUMvRCxTQUFTLEVBQUU7TUFDUEMsT0FBTyxFQUFFO0lBQ2IsQ0FBQyxDQUNKO0VBQ0w7RUFDQXBCLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRnRJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ3FJLEtBQUssQ0FBQyxVQUFTdEYsQ0FBQyxFQUFFO0VBQzFCLElBQUk4RCxFQUFFLEdBQUc3QixLQUFLLENBQUNpSSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUNwRyxFQUFFLEVBQUU7RUFFcEMsSUFBSUEsRUFBRSxFQUFFO0lBQ0osSUFBSWxGLEdBQUcsR0FBRy9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7TUFDaERpRixFQUFFLEVBQUVBO0lBQ1IsQ0FBQyxDQUFDO0lBQ0Z0RixNQUFNLENBQUMyRCxRQUFRLENBQUMyRSxJQUFJLEdBQUdsSSxHQUFHO0lBQzFCO0VBQ0osQ0FBQyxNQUFNO0lBQ0hzQyxNQUFNLENBQUNDLE9BQU8sQ0FDViw4REFBOEQsRUFDOUQsU0FBUyxFQUFFO01BQ1BDLE9BQU8sRUFBRTtJQUNiLENBQUMsQ0FDSjtFQUNMO0VBQ0FwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBQ0Z0SSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUM5QjtFQUNBLElBQUk4RCxFQUFFLEdBQUc3RyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNpQyxJQUFJLENBQUMsWUFBWSxDQUFDO0VBQ3RDLElBQUk0RSxFQUFFLEVBQUU7SUFDSixJQUFJbEYsR0FBRyxHQUFHL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtNQUN4RGlGLEVBQUUsRUFBRUE7SUFDUixDQUFDLENBQUM7SUFDRjtJQUNBdEYsTUFBTSxDQUFDNkwsSUFBSSxDQUFDekwsR0FBRyxFQUFFLFFBQVEsQ0FBQztJQUMxQjtFQUNKLENBQUMsTUFBTTtJQUNIc0MsTUFBTSxDQUFDQyxPQUFPLENBQ1YsOERBQThELEVBQzlELFNBQVMsRUFBRTtNQUNQQyxPQUFPLEVBQUU7SUFDYixDQUFDLENBQ0o7RUFDTDtFQUNBcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDcUksS0FBSyxDQUFDLFVBQVN0RixDQUFDLEVBQUU7RUFDNUIsSUFBSThELEVBQUUsR0FBRzdCLEtBQUssQ0FBQ2lJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQ3BHLEVBQUUsRUFBRTtFQUNwQyxJQUFJQSxFQUFFLEVBQUU7SUFDSjdHLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztNQUNIQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLDRCQUE0QixFQUFFO1FBQ2hEaUYsRUFBRSxFQUFFQTtNQUNSLENBQUMsQ0FBQztNQUNGbEQsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7UUFDdEI1RCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMwSSxJQUFJLENBQUM5RSxNQUFNLENBQUM7UUFDMUI1RCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNxTSxXQUFXLENBQUMsY0FBYyxDQUFDO01BQzdDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxNQUFNO0lBQ0hwSSxNQUFNLENBQUNDLE9BQU8sQ0FDViw4REFBOEQsRUFDOUQsU0FBUyxFQUFFO01BQ1BDLE9BQU8sRUFBRTtJQUNiLENBQUMsQ0FDSjtFQUNMO0VBRUFwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBQ0Z0SSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUMzQjtFQUNBO0VBQ0EsSUFBSThELEVBQUUsR0FBRzdHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ2lDLElBQUksQ0FBQyxZQUFZLENBQUM7RUFDdEM7RUFDQSxJQUFJNEUsRUFBRSxFQUFFO0lBQ0o3RyxDQUFDLENBQUN5QixJQUFJLENBQUM7TUFDSEMsSUFBSSxFQUFFLE1BQU07TUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtRQUMvQ2lGLEVBQUUsRUFBRUE7TUFDUixDQUFDLENBQUM7TUFDRmxELE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO1FBQ3RCNUQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDMEksSUFBSSxDQUFDOUUsTUFBTSxDQUFDO1FBQzFCNUQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDcU0sV0FBVyxDQUFDLGNBQWMsQ0FBQztNQUM3QztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsTUFBTTtJQUNIcEksTUFBTSxDQUFDQyxPQUFPLENBQ1YsOERBQThELEVBQzlELFNBQVMsRUFBRTtNQUNQQyxPQUFPLEVBQUU7SUFDYixDQUFDLENBQ0o7RUFDTDtFQUVBcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQ2xELElBQUlpRyxHQUFHLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQztFQUM1QixJQUFJRixTQUFTLEdBQUcvSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsTUFBTSxDQUFDO0VBQ3BDO0VBQ0EsSUFBSXFGLEVBQUUsR0FBRzdHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ2lDLElBQUksQ0FBQyxZQUFZLENBQUM7RUFDdEMsSUFBSWlILFFBQVEsR0FBR2xKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzBMLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbEQsSUFBSXJHLEVBQUUsRUFBRTtJQUNKN0csQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO01BQ0hDLElBQUksRUFBRSxNQUFNO01BQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsMkJBQTJCLEVBQUU7UUFDL0NpRixFQUFFLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO01BQ0Y1RSxJQUFJLEVBQUUrRyxHQUFHO01BQ1RPLFdBQVcsRUFBRSxLQUFLO01BQ2xCQyxXQUFXLEVBQUUsS0FBSztNQUNsQjdGLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtRQUMvQyxJQUFJRixNQUFNLENBQUM4RixNQUFNLEVBQUU7VUFDZkMsa0ZBQWMsQ0FBQ1QsUUFBUSxFQUFFSCxTQUFTLEVBQUVuRixNQUFNLENBQUM4RixNQUFNLENBQUM7VUFDbEQ7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtRQUNnQixDQUFDLE1BQU0sSUFBSTlGLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7VUFDM0IvRSxLQUFLLENBQUN2RCxJQUFJLENBQUNpRyxNQUFNLEVBQUU7VUFDbkJ6RCxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1lBQ3REekYsT0FBTyxFQUFFO1VBQ2IsQ0FBQyxDQUFDO1VBQ0ZuRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMrRCxLQUFLLEVBQUUsQ0FBQ3FJLFdBQVcsQ0FBQyxjQUFjLENBQUM7VUFDakQ7UUFDSjtNQUNKLENBQUM7O01BQ0R0QyxLQUFLLEVBQUUsZUFBU3hFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQzVDRyxNQUFNLENBQUM2RixLQUFLLENBQUMsUUFBUSxFQUFFaEcsV0FBVyxFQUFFO1VBQ2hDSyxPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsTUFBTTtJQUNIRixNQUFNLENBQUNDLE9BQU8sQ0FDViw4REFBOEQsRUFDOUQsU0FBUyxFQUFFO01BQ1BDLE9BQU8sRUFBRTtJQUNiLENBQUMsQ0FDSjtFQUNMO0VBRUFwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUZ0SSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUM5QixJQUFJOEQsRUFBRSxHQUFHN0IsS0FBSyxDQUFDaUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDcEcsRUFBRSxFQUFFO0VBQ3BDLElBQUlBLEVBQUUsRUFBRTtJQUNKbkMsd0JBQXdCLENBQ25CMkcsSUFBSSxDQUFDO01BQ0ZDLFNBQVMsRUFBRTtRQUNQQyxLQUFLLEVBQUU7TUFDWCxDQUFDO01BQ0RDLFFBQVEsRUFBRSxLQUFLO01BQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCekMsSUFBSSxFQUFFLG9EQUFvRDtNQUMxRHpGLElBQUksRUFBRSxTQUFTO01BQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO01BQ3RCQyxlQUFlLEVBQUUsSUFBSTtNQUNyQkMsaUJBQWlCLEVBQUUsOENBQThDO01BQ2pFQyxnQkFBZ0IsRUFBRTtJQUN0QixDQUFDLENBQUMsQ0FDRDVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO01BQ2QsSUFBSUEsTUFBTSxDQUFDd0csS0FBSyxFQUFFO1FBQ2RwSyxDQUFDLENBQUN5QixJQUFJLENBQUM7VUFDSEMsSUFBSSxFQUFFLE1BQU07VUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtZQUM5Q2lGLEVBQUUsRUFBRUE7VUFDUixDQUFDLENBQUM7VUFDRmxELE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO1lBQ3RCLElBQUlBLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7Y0FDcEIvRSxLQUFLLENBQUN2RCxJQUFJLENBQUNpRyxNQUFNLEVBQUU7Y0FDbkJ6RCxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2dCQUN0RHpGLE9BQU8sRUFBRTtjQUNiLENBQUMsQ0FBQztjQUNGbkUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDK0QsS0FBSyxFQUFFLENBQUNxSSxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3JEO1VBQ0osQ0FBQztVQUNEdEMsS0FBSyxFQUFFLGVBQVN4RSxLQUFLLEVBQUV6QixVQUFVLEVBQUVDLFdBQVcsRUFBRTtZQUM1Q0csTUFBTSxDQUFDQyxPQUFPLENBQ1ZvQixLQUFLLENBQUMrSCxZQUFZLENBQUN0TSxPQUFPLENBQUNvRyxJQUFJLEVBQy9CN0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDNkksS0FBSyxFQUFFO2NBQzlCekYsT0FBTyxFQUFFO1lBQ2IsQ0FBQyxDQUNKO1VBQ0w7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNWLENBQUMsTUFBTTtJQUNIRixNQUFNLENBQUNDLE9BQU8sQ0FDViw4REFBOEQsRUFDOUQsU0FBUyxFQUFFO01BQ1BDLE9BQU8sRUFBRTtJQUNiLENBQUMsQ0FDSjtFQUNMO0VBRUFwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQXRJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ3FJLEtBQUssQ0FBQyxVQUFTdEYsQ0FBQyxFQUFFO0VBQzVCO0VBQ0EsSUFBSThELEVBQUUsR0FBRzdHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ2lDLElBQUksQ0FBQyxZQUFZLENBQUM7RUFDdEMsSUFBSTRFLEVBQUUsRUFBRTtJQUNKLElBQUlsRixHQUFHLEdBQUcvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLG1DQUFtQyxFQUFFO01BQzVEaUYsRUFBRSxFQUFFQTtJQUNSLENBQUMsQ0FBQztJQUNGdEYsTUFBTSxDQUFDMkQsUUFBUSxDQUFDMkUsSUFBSSxHQUFHbEksR0FBRztFQUM5QixDQUFDLE1BQU07SUFDSHNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWLDhEQUE4RCxFQUM5RCxTQUFTLEVBQUU7TUFDUEMsT0FBTyxFQUFFO0lBQ2IsQ0FBQyxDQUNKO0VBQ0w7RUFFQXBCLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRixTQUFTZ0YsT0FBTyxHQUFHO0VBQ2Z0TixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3VOLE1BQU0sQ0FBQyxVQUFTeEssQ0FBQyxFQUFFO0lBQ25DLElBQUlpRyxHQUFHLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QixJQUFJcEMsRUFBRSxHQUFHN0csQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUN5QyxHQUFHLEVBQUU7O0lBRW5DO0lBQ0E7SUFDQSxJQUFJK0QsQ0FBQyxHQUFHMkMsNkNBQVksQ0FBQ0MsUUFBUSxDQUFDb0UsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztJQUUzRDtJQUNBaEgsQ0FBQyxDQUFDOEMsS0FBSyxFQUFFO0lBQ1R0SixDQUFDLENBQUN5QixJQUFJLENBQUM7TUFDSEMsSUFBSSxFQUFFLE1BQU07TUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRTtRQUN4RGlGLEVBQUUsRUFBRUE7TUFDUixDQUFDLENBQUM7TUFDRjVFLElBQUksRUFBRStHLEdBQUc7TUFDVE8sV0FBVyxFQUFFLEtBQUs7TUFDbEJDLFdBQVcsRUFBRSxLQUFLO01BQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7UUFDdEI7UUFDQSxJQUFJQSxNQUFNLENBQUM4RixNQUFNLEVBQUU7VUFDZnhILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUIsTUFBTSxDQUFDOEYsTUFBTSxDQUFDO1VBRTFCMUosQ0FBQyxDQUFDa0ssSUFBSSxDQUFDdEcsTUFBTSxDQUFDOEYsTUFBTSxFQUFFLFVBQVMrRCxHQUFHLEVBQUVyRCxLQUFLLEVBQUU7WUFDdkNzRCxxQkFBcUIsQ0FBQ3hKLE9BQU8sQ0FBQ2tHLEtBQUssRUFBRSxTQUFTLENBQUM7VUFDbkQsQ0FBQyxDQUFDO1VBQ0Y1RCxDQUFDLENBQUNpRCxJQUFJLEVBQUU7UUFDWixDQUFDLE1BQU0sSUFBSTdGLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7VUFDM0I5RixNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1lBQ3REekYsT0FBTyxFQUFFO1VBQ2IsQ0FBQyxDQUFDO1VBQ0Y7VUFDQW5FLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzJOLEtBQUssQ0FBQyxNQUFNLENBQUM7VUFDM0J6SSxRQUFRLENBQUN3QyxNQUFNLEVBQUU7UUFDckIsQ0FBQyxNQUFNLElBQUk5RCxNQUFNLENBQUNHLEtBQUssRUFBRTtVQUNyQnlDLENBQUMsQ0FBQ2lELElBQUksRUFBRTtVQUNSeEYsTUFBTSxDQUFDQyxPQUFPLENBQUNOLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtZQUN0RHpGLE9BQU8sRUFBRTtVQUNiLENBQUMsQ0FBQztRQUNOLENBQUMsTUFDSSxJQUFJUCxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO1VBQ3pCdkQsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1VBQ1J4RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1lBQ3REekYsT0FBTyxFQUFFO1VBQ2IsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0QyRixLQUFLLEVBQUUsZUFBU3hFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQzVDMEMsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1J4RixNQUFNLENBQUM2RixLQUFLLENBQUMsUUFBUSxFQUFFaEcsV0FBVyxFQUFFO1VBQ2hDSyxPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztJQUNGcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0VBQ3RCLENBQUMsQ0FBQztBQUNOO0FBS0F0SSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUM5Qi9DLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDO0lBQzFDK0IsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7TUFDdEI1RCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMwSSxJQUFJLENBQUM5RSxNQUFNLENBQUM7TUFDMUI1RCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNxTSxXQUFXLENBQUMsY0FBYyxDQUFDO0lBQzdDO0VBQ0osQ0FBQyxDQUFDO0VBQ0Z0SixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUZ0SSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNyRDtFQUNBLElBQUlpRyxHQUFHLEdBQUcsSUFBSUMsUUFBUSxDQUFDLElBQUksQ0FBQztFQUM1QixJQUFJRixTQUFTLEdBQUcvSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsTUFBTSxDQUFDO0VBQ3BDO0VBQ0F1QixDQUFDLENBQUN1RixjQUFjLEVBQUU7RUFDbEIsSUFBSVksUUFBUSxHQUFHbEosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDMEwsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUVsRGxOLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDO0lBQzFDSyxJQUFJLEVBQUUrRyxHQUFHO0lBQ1RPLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQjdGLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUMvQztNQUNBLElBQUlGLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtRQUNmQyxrRkFBYyxDQUFDVCxRQUFRLEVBQUVILFNBQVMsRUFBRW5GLE1BQU0sQ0FBQzhGLE1BQU0sQ0FBQztNQUN0RCxDQUFDLE1BQU07UUFDSDtRQUNBM0csQ0FBQyxDQUFDNkssYUFBYSxDQUFDTCxNQUFNLEVBQUU7UUFDeEI7TUFDSjtJQUNKLENBQUM7O0lBQ0R6RCxLQUFLLEVBQUUsZUFBU3hFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQzVDRyxNQUFNLENBQUM2RixLQUFLLENBQUMsUUFBUSxFQUFFaEcsV0FBVyxFQUFFO1FBQ2hDSyxPQUFPLEVBQUU7TUFDYixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGbkUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQzdDO0VBQ0EsSUFBSWdHLFNBQVMsR0FBRy9JLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDcEMsSUFBSXdILEdBQUcsR0FBRyxJQUFJQyxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQzVCLElBQUlDLFFBQVEsR0FBR2xKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzBMLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbEQsSUFBSXJHLEVBQUUsR0FBR21DLEdBQUcsQ0FBQ21DLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDdkIsSUFBSTNFLENBQUMsR0FBRzJDLDZDQUFZLENBQUNDLFFBQVEsQ0FBQ29FLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztFQUMxRDtFQUNBaEgsQ0FBQyxDQUFDOEMsS0FBSyxFQUFFO0VBQ1R0SixDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEMsSUFBSSxFQUFFLE1BQU07SUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyw4QkFBOEIsRUFBRTtNQUNsRGlGLEVBQUUsRUFBRUE7SUFDUixDQUFDLENBQUM7SUFDRjVFLElBQUksRUFBRStHLEdBQUc7SUFDVE8sV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7TUFDdEIsSUFBSUEsTUFBTSxDQUFDOEYsTUFBTSxFQUFFO1FBQ2Y7UUFDQUMsa0ZBQWMsQ0FBQ1QsUUFBUSxFQUFFSCxTQUFTLEVBQUVuRixNQUFNLENBQUM4RixNQUFNLENBQUM7TUFDdEQ7TUFDQSxJQUFJOUYsTUFBTSxDQUFDbUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUNwQjlGLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7VUFDdER6RixPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7UUFDRmUsUUFBUSxDQUFDd0MsTUFBTSxFQUFFO01BQ3JCLENBQUMsTUFBTSxJQUFJOUQsTUFBTSxDQUFDbUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUMzQjlGLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7VUFDdER6RixPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUM7SUFDRDJGLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7TUFDNUNHLE1BQU0sQ0FBQzZGLEtBQUssQ0FBQyxRQUFRLEVBQUVoRyxXQUFXLEVBQUU7UUFDaENLLE9BQU8sRUFBRTtNQUNiLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUZ0SSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3FJLEtBQUssQ0FBQyxVQUFTdEYsQ0FBQyxFQUFFO0VBQ3BDLElBQUk4RCxFQUFFLEdBQUc3RyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDO0VBRTNCLElBQUlxRixFQUFFLEVBQUU7SUFDSm5DLHdCQUF3QixDQUNuQjJHLElBQUksQ0FBQztNQUNGQyxTQUFTLEVBQUU7UUFDUEMsS0FBSyxFQUFFO01BQ1gsQ0FBQztNQUNEQyxRQUFRLEVBQUUsS0FBSztNQUNmNUIsS0FBSyxFQUFFLGdCQUFnQjtNQUN2QnpDLElBQUksRUFBRSxxREFBcUQ7TUFDM0R6RixJQUFJLEVBQUUsU0FBUztNQUNmK0osZ0JBQWdCLEVBQUUsSUFBSTtNQUN0QkMsZUFBZSxFQUFFLElBQUk7TUFDckJDLGlCQUFpQixFQUFFLDZDQUE2QztNQUNoRUMsZ0JBQWdCLEVBQUU7SUFDdEIsQ0FBQyxDQUFDLENBQ0Q1SixJQUFJLENBQUMsVUFBQzRCLE1BQU0sRUFBSztNQUNkLElBQUlBLE1BQU0sQ0FBQ3dHLEtBQUssRUFBRTtRQUNkcEssQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO1VBQ0hDLElBQUksRUFBRSxRQUFRO1VBQ2RDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMscUNBQXFDLEVBQUU7WUFDekRpRixFQUFFLEVBQUVBO1VBQ1IsQ0FBQyxDQUFDO1VBQ0ZsRCxPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtZQUN0QjtZQUNBLElBQUlBLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7Y0FDcEI5RixNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2dCQUN0RHpGLE9BQU8sRUFBRTtjQUNiLENBQUMsQ0FBQztjQUNGZSxRQUFRLENBQUN3QyxNQUFNLEVBQUU7WUFDckIsQ0FBQyxNQUFNLElBQUk5RCxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2NBQzNCOUYsTUFBTSxDQUFDQyxPQUFPLENBQUNOLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtnQkFDdER6RixPQUFPLEVBQUU7Y0FDYixDQUFDLENBQUM7WUFDTjtVQUNKLENBQUM7VUFDRDJGLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7WUFDNUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWb0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDb0csSUFBSSxFQUMvQjdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtjQUM5QnpGLE9BQU8sRUFBRTtZQUNiLENBQUMsQ0FDSjtVQUNMO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDVixDQUFDLE1BQU07SUFDSEYsTUFBTSxDQUFDQyxPQUFPLENBQUMsd0NBQXdDLEVBQUUsU0FBUyxFQUFFO01BQ2hFQyxPQUFPLEVBQUU7SUFDYixDQUFDLENBQUM7RUFDTjtFQUNBcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNoRCxJQUFJaUcsR0FBRyxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUIsSUFBSUYsU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUNwQztFQUNBLElBQUlxRixFQUFFLEdBQUc3RyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNpQyxJQUFJLENBQUMsWUFBWSxDQUFDO0VBQ3RDO0VBQ0EsSUFBSWlILFFBQVEsR0FBR2xKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzBMLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbEQsSUFBSXJHLEVBQUUsRUFBRTtJQUNKN0csQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO01BQ0hDLElBQUksRUFBRSxNQUFNO01BQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsa0NBQWtDLEVBQUU7UUFDdERpRixFQUFFLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO01BQ0Y1RSxJQUFJLEVBQUUrRyxHQUFHO01BQ1RPLFdBQVcsRUFBRSxLQUFLO01BQ2xCQyxXQUFXLEVBQUUsS0FBSztNQUNsQjdGLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtRQUMvQyxJQUFJRixNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO1VBQ3BCO1VBQ0E5RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1lBQ3REekYsT0FBTyxFQUFFO1VBQ2IsQ0FBQyxDQUFDO1FBQ047UUFDQSxJQUFJUCxNQUFNLENBQUM4RixNQUFNLEVBQUU7VUFDZkMsa0ZBQWMsQ0FBQ1QsUUFBUSxFQUFFSCxTQUFTLEVBQUVuRixNQUFNLENBQUM4RixNQUFNLENBQUM7VUFDbEQ7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFDZ0IsQ0FBQyxNQUFNLElBQUk5RixNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO1VBQzNCL0UsS0FBSyxDQUFDdkQsSUFBSSxDQUFDaUcsTUFBTSxFQUFFO1VBQ25CekQsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtZQUN0RHpGLE9BQU8sRUFBRTtVQUNiLENBQUMsQ0FBQztVQUNGbkUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDK0QsS0FBSyxFQUFFLENBQUNxSSxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3JEO01BQ0osQ0FBQztNQUNEdEMsS0FBSyxFQUFFLGVBQVN4RSxLQUFLLEVBQUV6QixVQUFVLEVBQUVDLFdBQVcsRUFBRTtRQUM1Q0csTUFBTSxDQUFDNkYsS0FBSyxDQUFDLFFBQVEsRUFBRWhHLFdBQVcsRUFBRTtVQUNoQ0ssT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSEYsTUFBTSxDQUFDQyxPQUFPLENBQ1YsOERBQThELEVBQzlELFNBQVMsRUFBRTtNQUNQQyxPQUFPLEVBQUU7SUFDYixDQUFDLENBQ0o7RUFDTDtFQUVBcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGLElBQUl1RixTQUFTLEdBQUc3TixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ2lGLFNBQVMsQ0FBQztFQUMzQzZJLE9BQU8sRUFBRSxPQUFPO0VBQ2hCQyxjQUFjLEVBQUUsSUFBSTtFQUNwQkMsTUFBTSxFQUFFO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBSUMsVUFBVSxHQUFHak8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNpRixTQUFTLENBQUM7RUFDN0MrSSxNQUFNLEVBQUU7QUFDWixDQUFDLENBQUM7QUFDRixJQUFJRSxVQUFVLEdBQUdsTyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ2lGLFNBQVMsQ0FBQztFQUM3QytJLE1BQU0sRUFBRTtBQUNaLENBQUMsQ0FBQztBQUNGLElBQUlHLFVBQVUsR0FBR25PLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDaUYsU0FBUyxDQUFDO0VBQzdDNkksT0FBTyxFQUFFLE9BQU87RUFDaEJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxNQUFNLEVBQUUsS0FBSztFQUNiSSxTQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRnBPLENBQUMsQ0FBQ29KLFFBQVEsQ0FBQyxDQUFDaUYsS0FBSyxDQUFDLFlBQVc7RUFDekJyTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQ1J1RCxJQUFJLEVBQUUsQ0FDTlAsS0FBSyxDQUNGLG1GQUFtRixDQUN0RjtFQUNML0MsdUJBQXVCLENBQUNELENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBRUZBLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDcUksS0FBSyxDQUFDLFlBQVc7RUFDakNySSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMrRCxLQUFLLEVBQUU7RUFDakIvRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM2QyxNQUFNLEVBQUU7RUFDbEI3QyxDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEMsSUFBSSxFQUFFLE1BQU07SUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyx1Q0FBdUMsQ0FBQztJQUM5RDJILFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQjdGLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUMvQzlELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzBJLElBQUksQ0FBQzlFLE1BQU0sQ0FBQyxDQUFDTCxJQUFJLEVBQUU7TUFDN0IwSSx1Q0FBdUMsQ0FBQ0MsSUFBSSxFQUFFO01BQzlDQyxVQUFVLENBQUMsWUFBVztRQUNsQm5NLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VELElBQUksRUFBRTtRQUNoQnZELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzZDLE1BQU0sRUFBRTtNQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1g7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFDRixJQUFJa0gsSUFBSSxHQUFHLElBQUk7QUFDZi9KLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsWUFBVztFQUNyRDtFQUNBaUgsSUFBSSxHQUFHL0osQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUMzQixJQUNJRCxNQUFNLENBQUNyQixPQUFPLENBQUMwSSxJQUFJLENBQ2YsZ0JBQWdCLEdBQUc1SSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUMvQyxDQUFDWCxNQUFNLEVBQ1Y7SUFDRVUsTUFBTSxDQUFDckIsT0FBTyxDQUFDdUMsR0FBRyxDQUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUNrQixPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3hEMUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDeUMsR0FBRyxDQUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDeUMsR0FBRyxDQUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDeUMsR0FBRyxDQUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDeEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUN5QyxHQUFHLENBQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQ2tCLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDaEUxQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQzJOLEtBQUssQ0FBQyxNQUFNLENBQUM7RUFFM0MsQ0FBQyxNQUFNO0lBQ0g7SUFDQSxJQUFJVyxTQUFTLEdBQUcsSUFBSUMsTUFBTSxDQUN0QnZPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDcEJ4QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ2xCLElBQUksRUFDSixJQUFJLENBQ1A7SUFDRDtJQUNBRCxNQUFNLENBQUNyQixPQUFPLENBQUM2SyxNQUFNLENBQUN1RCxTQUFTLENBQUMsQ0FBQzVMLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDbEQxQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUN5QyxHQUFHLENBQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUN4QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN5QyxHQUFHLENBQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEN4QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3lDLEdBQUcsQ0FBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDa0IsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNoRTFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ3lDLEdBQUcsQ0FBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4Q3hCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDMk4sS0FBSyxDQUFDLE1BQU0sQ0FBQztFQUMzQztBQUNKLENBQUMsQ0FBQztBQUNELFlBQVk7QUFDYixJQUFJMUIsdUNBQXVDLEdBQUksWUFBVztFQUN0RGpNLENBQUMsQ0FBQ0ksRUFBRSxDQUFDNEgsU0FBUyxDQUFDQyxHQUFHLENBQUN1RyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsWUFBVztJQUN2RCxPQUFPeE8sQ0FBQyxDQUFDLElBQUksQ0FBQ3lPLE1BQU0sRUFBRSxDQUFDLENBQUN0SCxJQUFJLEVBQUUsQ0FBQ3VILElBQUksRUFBRTtFQUN6QyxDQUFDLENBQUM7RUFDRixPQUFPO0lBQ0h4QyxJQUFJLEVBQUUsZ0JBQVc7TUFDYixJQUFJNUYsQ0FBQztNQUNKQSxDQUFDLEdBQUd0RyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNpRixTQUFTLENBQUM7UUFHNUJ4RCxJQUFJLEVBQUU7VUFDRkUsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyw2Q0FBNkMsQ0FBQztVQUFFO1VBQ3RFRixJQUFJLEVBQUU7UUFDVixDQUFDO1FBQ0Q4RCxXQUFXLEVBQUUsSUFBSTtRQUNqQkMsVUFBVSxFQUFFLElBQUk7UUFDaEJFLFVBQVUsRUFBRSxDQUNSLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUM3QjtRQUNERCxVQUFVLEVBQUUsRUFBRTtRQUNkdUIsR0FBRyxFQUFFLG9DQUFvQztRQUN6Q3BCLE9BQU8sRUFBRSxDQUFDO1VBQ0ZDLFNBQVMsRUFBRSxJQUFJO1VBQ2ZLLElBQUksRUFBRSxRQUFRO1VBQ2RGLEtBQUssRUFBRTtRQUNYLENBQUMsRUFDRDtVQUNJSCxTQUFTLEVBQUUsSUFBSTtVQUNmSyxJQUFJLEVBQUU7UUFDVixDQUFDLEVBQ0Q7VUFDSUwsU0FBUyxFQUFFLElBQUk7VUFDZkssSUFBSSxFQUFFO1FBQ1YsQ0FBQyxFQUNEO1VBQ0lMLFNBQVMsRUFBRSxJQUFJO1VBQ2ZLLElBQUksRUFBRTtRQUNWLENBQUMsRUFDRDtVQUNJTCxTQUFTLEVBQUUsSUFBSTtVQUNmSyxJQUFJLEVBQUU7UUFDVixDQUFDLEVBQ0Q7VUFDSUwsU0FBUyxFQUFFLElBQUk7VUFDZkssSUFBSSxFQUFFO1FBQ1YsQ0FBQyxFQUNEO1VBQ0lMLFNBQVMsRUFBRSxJQUFJO1VBQ2ZLLElBQUksRUFBRTtRQUNWLENBQUMsRUFDRDtVQUNJTCxTQUFTLEVBQUUsSUFBSTtVQUNmSyxJQUFJLEVBQUU7UUFDVixDQUFDLENBQ0o7UUFDRCxZQUFZLEVBQUUsb0JBQVM4RyxHQUFHLEVBQUVoTCxJQUFJLEVBQUUwTSxTQUFTLEVBQUU7VUFDekN6TSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO1VBRWpCakMsQ0FBQyxDQUFDaU4sR0FBRyxDQUFDLENBQUN6TCxJQUFJLENBQUMsTUFBTSxFQUFFUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDNUJqQyxDQUFDLENBQUNpTixHQUFHLENBQUMsQ0FBQ3pMLElBQUksQ0FBQyxJQUFJLEVBQUVTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUMxQmpDLENBQUMsQ0FBQ2lOLEdBQUcsQ0FBQyxDQUFDekwsSUFBSSxDQUFDLEtBQUssRUFBRVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzNCakMsQ0FBQyxDQUFDaU4sR0FBRyxDQUFDLENBQUN6TCxJQUFJLENBQUMsT0FBTyxFQUFFUyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7VUFFOUJqQyxDQUFDLENBQUNpTixHQUFHLENBQUMsQ0FBQ3pMLElBQUksQ0FBQyxNQUFNLEVBQUVTLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUM3QmpDLENBQUMsQ0FBQ2lOLEdBQUcsQ0FBQyxDQUFDekwsSUFBSSxDQUFDLFFBQVEsRUFBRVMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRGlGLE9BQU8sRUFBRSxDQUNMLGVBQWUsRUFDZjtVQUNJQyxJQUFJLEVBQUUsV0FBVztVQUNqQm5CLFNBQVMsRUFBRSxnREFBZ0Q7VUFDM0RvQixNQUFNLEVBQUUsZ0JBQVNyRSxDQUFDLEVBQUVzRSxFQUFFLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFO1lBQ2xDdkMsS0FBSyxDQUFDd0MsS0FBSyxDQUFDQyxLQUFLLEVBQUU7WUFDbkJsRyxNQUFNLENBQUMyRCxRQUFRLENBQUN3QyxNQUFNLEVBQUU7VUFDNUI7UUFDSixDQUFDLENBQ0o7UUFDRHJGLFFBQVEsRUFBRTtVQUNOVixHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1VBQzFDK0YsVUFBVSxFQUFFO1FBQ2hCLENBQUM7UUFDRDtRQUNBaUgsS0FBSyxFQUFFO01BQ1gsQ0FBQyxDQUFDLEVBQ0Z0SSxDQUFDLENBQUN4RCxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVNDLENBQUMsRUFBRXNDLFFBQVEsRUFBRTtRQUNsQyxJQUFJMEMsR0FBRyxHQUFHLElBQUkvSCxDQUFDLENBQUNJLEVBQUUsQ0FBQzRILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDNUMsUUFBUSxDQUFDO1FBQzFDLElBQUk2QyxFQUFFLEdBQUdILEdBQUcsQ0FBQ1AsS0FBSyxDQUFDVyxNQUFNLEVBQUU7UUFDM0IsSUFBSWxHLElBQUksR0FBRzhGLEdBQUcsQ0FBQzlGLElBQUksRUFBRTs7UUFFckI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBbUcsNEZBQXNDLENBQUNMLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDekU7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUc7O0FBQ0ovSCxDQUFDLENBQUM2TyxNQUFNLENBQUMsSUFBSSxFQUFFN08sQ0FBQyxDQUFDSSxFQUFFLENBQUM0SCxTQUFTLENBQUM4RyxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFO0VBQ3hEQyxLQUFLLEVBQUUsc0NBQXNDO0VBQzdDQyxTQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRmxQLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNwRCxJQUFJZ0csU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztFQUNwQyxJQUFJd0gsR0FBRyxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUIsSUFBSUMsUUFBUSxHQUFHbEosQ0FBQyxDQUFDLElBQUksQ0FBQztFQUN0QixJQUFJd0csQ0FBQyxHQUFHMkMsNkNBQVksQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUM7RUFDNUM3QyxDQUFDLENBQUM4QyxLQUFLLEVBQUU7RUFDVHRKLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLDZCQUE2QixFQUFFO01BQ2pEaUYsRUFBRSxFQUFFN0csQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDeUMsR0FBRztJQUM3QixDQUFDLENBQUM7SUFDRlIsSUFBSSxFQUFFK0csR0FBRztJQUNUTyxXQUFXLEVBQUUsS0FBSztJQUNsQkMsV0FBVyxFQUFFLEtBQUs7SUFDbEI3RixPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtNQUN0QjRDLENBQUMsQ0FBQ2lELElBQUksRUFBRTtNQUNSLElBQUk3RixNQUFNLENBQUM4RixNQUFNLEVBQUU7UUFDZkMsa0ZBQWMsQ0FBQ1QsUUFBUSxFQUFFSCxTQUFTLEVBQUVuRixNQUFNLENBQUM4RixNQUFNLENBQUM7TUFDdEQsQ0FBQyxNQUFNLElBQUk5RixNQUFNLENBQUNHLEtBQUssRUFBRTtRQUNyQkUsTUFBTSxDQUFDQyxPQUFPLENBQUNOLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtVQUN0RHpGLE9BQU8sRUFBRTtRQUNiLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBTSxJQUFJUCxNQUFNLENBQUMzQixJQUFJLEVBQUU7UUFDcEJnQyxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO1FBRUZlLFFBQVEsQ0FBQ3dDLE1BQU0sRUFBRTtNQUNyQjtJQUNKLENBQUM7SUFDRG9DLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7TUFDNUMwQyxDQUFDLENBQUNpRCxJQUFJLEVBQUU7TUFDUnhGLE1BQU0sQ0FBQzZGLEtBQUssQ0FBQyxRQUFRLEVBQUVoRyxXQUFXLEVBQUU7UUFDaENLLE9BQU8sRUFBRTtNQUNiLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUZ0SSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNtUCxLQUFLLENBQUMsVUFBU3BNLENBQUMsRUFBRTtFQUNoQyxJQUNJL0MsQ0FBQyxDQUFDb1AsU0FBUyxDQUFDcFAsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUN5QyxHQUFHLEVBQUUsQ0FBQyxJQUN4Q3pDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDeUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNqQztJQUNFLElBQ0l6QyxDQUFDLENBQUNvUCxTQUFTLENBQUNwUCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5QyxHQUFHLEVBQUUsQ0FBQyxJQUMxQnpDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFDakJ6QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5QyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQ3RCO01BQ0V6QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUN5QyxHQUFHLENBQUV6QyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRSxHQUFHekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUMsR0FBRyxFQUFFLEdBQUksR0FBRyxDQUFDO0lBQzFFLENBQUMsTUFBTTtNQUNId0IsTUFBTSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxFQUFFO1FBQzFDQyxPQUFPLEVBQUU7TUFDYixDQUFDLENBQUM7TUFDRm5FLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lDLEdBQUcsQ0FBQyxJQUFJLENBQUM7TUFDakJ6QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUN5QyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQyxNQUFNO0lBQ0h3QixNQUFNLENBQUNDLE9BQU8sQ0FDViw0RUFBNEUsRUFDNUUsUUFBUSxFQUFFO01BQ05DLE9BQU8sRUFBRTtJQUNiLENBQUMsQ0FDSjtFQUNMO0FBQ0osQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBOztBQUVBbkUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM4QyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDckQsSUFBSXNNLEtBQUssR0FBRyxDQUFDO0VBQ2JyUCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNrSyxJQUFJLENBQUMsVUFBU29GLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQzlCLElBQUlqTCxHQUFHLEdBQUd0RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDNUM2TixLQUFLLElBQUkvSyxHQUFHLEdBQUd0RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBR3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRTtFQUNwRSxDQUFDLENBQUM7RUFDRixJQUFJK00sU0FBUyxHQUFHMVAsT0FBTyxDQUFDdVAsS0FBSyxDQUFDO0VBQzlCclAsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDMEksSUFBSSxDQUFDOEcsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDMUN6UCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3lDLEdBQUcsQ0FBQytNLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3BEMU0sQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUNUOEMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFlBQVc7RUFDOUIsSUFBSTlDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtJQUNwQnpDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzBQLElBQUksRUFBRTtFQUM1QixDQUFDLE1BQU07SUFDSDFQLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDeUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUM3Q3pDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDeUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUMxQ3pDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ3VELElBQUksRUFBRTtFQUM1QjtFQUNBLElBQUl2RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5QyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUl6QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5QyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUU7SUFDMUN6QyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUN1RCxJQUFJLEVBQUU7RUFDNUIsQ0FBQyxNQUFNO0lBQ0h2RCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMwUCxJQUFJLEVBQUU7RUFDNUI7RUFDQXhOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUMsR0FBRyxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQ0RrTixjQUFjLENBQUMsVUFBVSxDQUFDO0FBRS9CM1AsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUNwQyxJQUFJOEQsRUFBRSxHQUFHN0csQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQztFQUNoQyxJQUFJNEosS0FBSyxHQUFHcEwsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLFlBQVksQ0FBQztFQUN0Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUMwRSxFQUFFLEdBQUcsR0FBRyxHQUFHdUUsS0FBSyxDQUFDO0VBQzdCMUcsd0JBQXdCLENBQ25CMkcsSUFBSSxDQUFDO0lBQ0ZDLFNBQVMsRUFBRTtNQUNQQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0RDLFFBQVEsRUFBRSxLQUFLO0lBQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCekMsSUFBSSxFQUFFLHFEQUFxRDtJQUMzRHpGLElBQUksRUFBRSxTQUFTO0lBQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCQyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsaUJBQWlCLEVBQUUsNkNBQTZDO0lBQ2hFQyxnQkFBZ0IsRUFBRTtFQUN0QixDQUFDLENBQUMsQ0FDRDVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO0lBQ2QsSUFBSUEsTUFBTSxDQUFDd0csS0FBSyxFQUFFO01BQ2RwSyxDQUFDLENBQUN5QixJQUFJLENBQUM7UUFDSEMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRTtVQUN4RGlGLEVBQUUsRUFBRUEsRUFBRTtVQUNOdUUsS0FBSyxFQUFFQTtRQUNYLENBQUMsQ0FBQztRQUNGekgsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7VUFDdEIsSUFBSUEsTUFBTSxDQUFDbUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNwQjlGLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7Y0FDdER6RixPQUFPLEVBQUU7WUFDYixDQUFDLENBQUM7WUFDRmUsUUFBUSxDQUFDd0MsTUFBTSxFQUFFO1VBQ3JCLENBQUMsTUFBTSxJQUFJOUQsTUFBTSxDQUFDbUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUMzQjlGLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7Y0FDdER6RixPQUFPLEVBQUU7WUFDYixDQUFDLENBQUM7VUFDTjtRQUNKLENBQUM7UUFDRDJGLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7VUFDNUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWb0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDb0csSUFBSSxFQUMvQjdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtZQUM5QnpGLE9BQU8sRUFBRTtVQUNiLENBQUMsQ0FDSjtRQUNMO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7RUFFTnBCLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRnRJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQ3hFLElBQUlpRyxHQUFHLEdBQUcsSUFBSUMsUUFBUSxFQUFFO0VBQ3hCLElBQUlwQyxFQUFFLEdBQUc3RyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsU0FBUyxDQUFDO0VBQ2hDLElBQUlvSSxLQUFLLEdBQUc1SixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsWUFBWSxDQUFDO0VBQ3RDLElBQUlvTyxVQUFVLEdBQUc1UCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsaUJBQWlCLENBQUM7RUFFaEQsSUFBSW9PLFVBQVUsSUFBSSxzQkFBc0IsRUFBRTtJQUN0QzVQLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztNQUNIQyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLG9DQUFvQyxFQUFFO1FBQ3hEaUYsRUFBRSxFQUFFQTtNQUNSLENBQUMsQ0FBQztNQUNGbEQsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7UUFDdEI1RCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQzBJLElBQUksQ0FBQzlFLE1BQU0sQ0FBQztRQUN0QzVELENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0ssT0FBTyxFQUFFO1FBQ3BCTCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzJOLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSWtDLE1BQU0sR0FBRzdQLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDaUYsU0FBUyxDQUFDO1VBQ3hDM0QsU0FBUyxFQUFFLEtBQUs7VUFBRTBNLE1BQU0sRUFBRSxLQUFLO1VBQUU4QixJQUFJLEVBQUUsS0FBSztVQUFhOztVQUV6RGpLLE9BQU8sRUFBRSxDQUFDO1lBQ0ZJLEtBQUssRUFBRSxJQUFJO1lBQ1hILFNBQVMsRUFBRSxJQUFJO1lBQ2ZDLFVBQVUsRUFBRSxJQUFJO1lBQ2hCRyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1VBQ2YsQ0FBQyxFQUNEO1lBQ0lELEtBQUssRUFBRSxJQUFJO1lBQ1hILFNBQVMsRUFBRTtVQUNmLENBQUMsRUFDRDtZQUNJRyxLQUFLLEVBQUUsS0FBSztZQUNaSCxTQUFTLEVBQUU7VUFDZixDQUFDLEVBQ0Q7WUFDSUcsS0FBSyxFQUFFLElBQUk7WUFDWEgsU0FBUyxFQUFFO1VBQ2YsQ0FBQyxFQUNEO1lBQ0lHLEtBQUssRUFBRSxJQUFJO1lBQ1hILFNBQVMsRUFBRTtVQUNmLENBQUMsRUFDRDtZQUNJRyxLQUFLLEVBQUUsSUFBSTtZQUNYSCxTQUFTLEVBQUU7VUFDZixDQUFDLEVBQ0Q7WUFDSUcsS0FBSyxFQUFFLElBQUk7WUFDWEgsU0FBUyxFQUFFO1VBQ2YsQ0FBQyxFQUNEO1lBQ0lHLEtBQUssRUFBRSxJQUFJO1lBQ1hILFNBQVMsRUFBRTtVQUNmLENBQUMsRUFDRDtZQUNJRyxLQUFLLEVBQUUsSUFBSTtZQUNYSCxTQUFTLEVBQUU7VUFDZixDQUFDLEVBQ0Q7WUFDSUcsS0FBSyxFQUFFLElBQUk7WUFDWEgsU0FBUyxFQUFFO1VBQ2YsQ0FBQyxFQUNEO1lBQ0lHLEtBQUssRUFBRSxJQUFJO1lBQ1hILFNBQVMsRUFBRTtVQUNmLENBQUMsRUFDRDtZQUNJRyxLQUFLLEVBQUUsSUFBSTtZQUNYSCxTQUFTLEVBQUUsSUFBSSxDQUFDO1VBQ3BCLENBQUMsRUFDRDtZQUNJRyxLQUFLLEVBQUUsSUFBSTtZQUNYSCxTQUFTLEVBQUUsS0FBSyxDQUFDO1VBQ3JCLENBQUMsQ0FDSjs7VUFFRG1CLEdBQUcsRUFBRSxvQ0FBb0M7VUFDekNDLE9BQU8sRUFBRSxDQUNMLGVBQWUsRUFDZjtZQUNJQyxJQUFJLEVBQUUsV0FBVztZQUNqQm5CLFNBQVMsRUFBRSxnREFBZ0Q7WUFDM0RvQixNQUFNLEVBQUUsZ0JBQVNyRSxDQUFDLEVBQUVzRSxFQUFFLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFO2NBQ2xDc0ksTUFBTSxDQUFDckksS0FBSyxDQUFDQyxLQUFLLEVBQUU7Y0FDcEJsRyxNQUFNLENBQUMyRCxRQUFRLENBQUN3QyxNQUFNLEVBQUU7WUFDNUI7VUFDSixDQUFDLENBQ0o7VUFDRHJGLFFBQVEsRUFBRTtZQUNOVixHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1lBQzFDK0YsVUFBVSxFQUFFO1VBQ2hCO1VBQ0E7UUFDSixDQUFDLENBQUM7O1FBQ0YyRixPQUFPLEVBQUU7TUFDYjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsTUFBTSxJQUFJc0MsVUFBVSxJQUFJLHFCQUFxQixFQUFFO0lBQzVDNVAsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO01BQ0hDLElBQUksRUFBRSxNQUFNO01BQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsK0JBQStCLEVBQUU7UUFDbkRpRixFQUFFLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO01BQ0ZsRCxPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtRQUN0QjVELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDMEksSUFBSSxDQUFDOUUsTUFBTSxDQUFDO1FBQ2xDNUQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDSyxPQUFPLEVBQUU7UUFDcEJMLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzJOLEtBQUssQ0FBQyxNQUFNLENBQUM7TUFHakM7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDSDNFLEdBQUcsQ0FBQytCLE1BQU0sQ0FBQyxJQUFJLEVBQUVsRSxFQUFFLENBQUM7SUFDcEJtQyxHQUFHLENBQUMrQixNQUFNLENBQUMsT0FBTyxFQUFFbkIsS0FBSyxDQUFDO0lBQzFCWixHQUFHLENBQUMrQixNQUFNLENBQUMsWUFBWSxFQUFFNkUsVUFBVSxDQUFDO0lBRXBDLElBQUkvSSxFQUFFLEVBQUU7TUFDSm5DLHdCQUF3QixDQUNuQjJHLElBQUksQ0FBQztRQUNGQyxTQUFTLEVBQUU7VUFDUEMsS0FBSyxFQUFFO1FBQ1gsQ0FBQztRQUNEQyxRQUFRLEVBQUUsS0FBSztRQUNmNUIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QnpDLElBQUksRUFBRSx3Q0FBd0MsR0FDMUN5QyxLQUFLLEdBQ0wsNkJBQTZCO1FBQ2pDbEksSUFBSSxFQUFFLFNBQVM7UUFDZitKLGdCQUFnQixFQUFFLElBQUk7UUFDdEJDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxpQkFBaUIsRUFBRSxtQ0FBbUM7UUFDdERDLGdCQUFnQixFQUFFO01BQ3RCLENBQUMsQ0FBQyxDQUNENUosSUFBSSxDQUFDLFVBQUM0QixNQUFNLEVBQUs7UUFDZCxJQUFJQSxNQUFNLENBQUN3RyxLQUFLLEVBQUU7VUFDZHBLLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztZQUNIQyxJQUFJLEVBQUUsTUFBTTtZQUNaTyxJQUFJLEVBQUUrRyxHQUFHO1lBQ1RPLFdBQVcsRUFBRSxLQUFLO1lBQ2xCQyxXQUFXLEVBQUUsS0FBSztZQUNsQjdILEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsdUNBQXVDLEVBQUU7Y0FDM0RpRixFQUFFLEVBQUVBO1lBQ1IsQ0FBQyxDQUFDO1lBQ0ZsRCxPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtjQUN0QixJQUFJQSxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUNwQjlGLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7a0JBQ3REekYsT0FBTyxFQUFFO2dCQUNiLENBQUMsQ0FBQztnQkFFRmUsUUFBUSxDQUFDd0MsTUFBTSxFQUFFO2NBQ3JCO2NBRUEsSUFBSTlELE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ3BCO2dCQUNBOUYsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtrQkFDdER6RixPQUFPLEVBQUU7Z0JBQ2IsQ0FBQyxDQUFDO2dCQUNGLElBQUl4QyxHQUFHLEdBQUcvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUN0QixvQ0FBb0MsRUFBRTtrQkFDbENpRixFQUFFLEVBQUVqRCxNQUFNLENBQUNpRDtnQkFDZixDQUFDLENBQ0o7Z0JBQ0R0RixNQUFNLENBQUMyRCxRQUFRLENBQUMyRSxJQUFJLEdBQUdsSSxHQUFHO2NBQzlCO2NBRUEsSUFBSWlDLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ3BCOUYsTUFBTSxDQUFDQyxPQUFPLENBQUNOLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtrQkFDdER6RixPQUFPLEVBQUU7Z0JBQ2IsQ0FBQyxDQUFDO2NBQ047WUFFSixDQUFDO1lBQ0QyRixLQUFLLEVBQUUsZUFBU3hFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO2NBQzVDRyxNQUFNLENBQUNDLE9BQU8sQ0FDVm9CLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQ29HLElBQUksRUFDL0I3QixLQUFLLENBQUMrSCxZQUFZLENBQUN0TSxPQUFPLENBQUM2SSxLQUFLLEVBQUU7Z0JBQzlCekYsT0FBTyxFQUFFO2NBQ2IsQ0FBQyxDQUNKO1lBQ0w7VUFDSixDQUFDLENBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQztJQUNWLENBQUMsTUFBTTtNQUNIRixNQUFNLENBQUNDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxTQUFTLEVBQUU7UUFDakRDLE9BQU8sRUFBRTtNQUNiLENBQUMsQ0FBQztJQUNOO0VBQ0o7RUFHQXBCLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRixJQUFJdUgsTUFBTSxHQUFHN1AsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNpRixTQUFTLENBQUM7RUFDeENVLFVBQVUsRUFBRSxDQUNSLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUM3QjtFQUNESCxXQUFXLEVBQUUsSUFBSTtFQUNqQkUsVUFBVSxFQUFFLEVBQUU7RUFDZHFLLE9BQU8sRUFBRSxJQUFJO0VBQ2JsSyxPQUFPLEVBQUUsQ0FBQztJQUNGSSxLQUFLLEVBQUUsSUFBSTtJQUNYSCxTQUFTLEVBQUUsSUFBSTtJQUNmQyxVQUFVLEVBQUUsSUFBSTtJQUNoQkcsT0FBTyxFQUFFLENBQUMsQ0FBQztFQUNmLENBQUMsRUFDRDtJQUNJRCxLQUFLLEVBQUUsSUFBSTtJQUNYSCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSUcsS0FBSyxFQUFFLEtBQUs7SUFDWkgsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxFQUNEO0lBQ0lHLEtBQUssRUFBRSxJQUFJO0lBQ1hILFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJRyxLQUFLLEVBQUUsSUFBSTtJQUNYSCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSUcsS0FBSyxFQUFFLElBQUk7SUFDWEgsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxFQUNEO0lBQ0lHLEtBQUssRUFBRSxJQUFJO0lBQ1hILFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJRyxLQUFLLEVBQUUsSUFBSTtJQUNYSCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSUcsS0FBSyxFQUFFLElBQUk7SUFDWEgsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxFQUNEO0lBQ0lHLEtBQUssRUFBRSxJQUFJO0lBQ1hILFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJRyxLQUFLLEVBQUUsSUFBSTtJQUNYSCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSUcsS0FBSyxFQUFFLElBQUk7SUFDWEgsU0FBUyxFQUFFLElBQUksQ0FBQztFQUNwQixDQUFDLEVBQ0Q7SUFDSUcsS0FBSyxFQUFFLElBQUk7SUFDWEgsU0FBUyxFQUFFLElBQUksQ0FBQztFQUNwQixDQUFDLENBQ0o7O0VBQ0RrSSxNQUFNLEVBQUUsS0FBSztFQUViL0csR0FBRyxFQUFFLG9DQUFvQztFQUN6Q0MsT0FBTyxFQUFFLENBQ0wsZUFBZSxFQUNmO0lBQ0lDLElBQUksRUFBRSxXQUFXO0lBQ2pCbkIsU0FBUyxFQUFFLGdEQUFnRDtJQUMzRG9CLE1BQU0sRUFBRSxnQkFBU3JFLENBQUMsRUFBRXNFLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7TUFDbENzSSxNQUFNLENBQUNySSxLQUFLLENBQUNDLEtBQUssRUFBRTtNQUNwQmxHLE1BQU0sQ0FBQzJELFFBQVEsQ0FBQ3dDLE1BQU0sRUFBRTtJQUM1QjtFQUNKLENBQUMsQ0FDSjtFQUNEckYsUUFBUSxFQUFFO0lBQ05WLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7SUFDMUMrRixVQUFVLEVBQUU7RUFDaEI7RUFDQTtBQUNKLENBQUMsQ0FBQzs7QUFFRjNILENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDcUksS0FBSyxDQUFDLFVBQVN0RixDQUFDLEVBQUU7RUFDdEMsSUFBSThELEVBQUUsR0FBRzdHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxTQUFTLENBQUM7RUFDaEMsSUFBSTRKLEtBQUssR0FBR3BMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxZQUFZLENBQUM7RUFDdEM7RUFDQSxJQUFJd08sR0FBRyxHQUFHO0lBQ05DLEtBQUssRUFBRSx1Q0FBdUM7SUFDOUNDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCOUUsS0FBSyxFQUFFQSxLQUFLO0lBQ1p2RSxFQUFFLEVBQUVBO0VBQ1IsQ0FBQztFQUNEO0VBQ0FzSix1RUFBUyxDQUFDSCxHQUFHLENBQUM7RUFFZGpOLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFNRixJQUFJOEgsSUFBSSxHQUFHLElBQUlDLE1BQU0sRUFBRTtBQUN2QkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLHNCQUFzQjtBQUM3Q0UsMkVBQXVCLENBQUNGLElBQUksQ0FBQzs7QUFJN0I7O0FBR0EsSUFBSXBHLFlBQVksR0FBRyxFQUFFO0FBQ3JCLElBQUl1RyxjQUFjLEdBQUcsRUFBRTtBQUN2QixJQUFJQyxjQUFjLEdBQUcsRUFBRTtBQUN2QixJQUFJQyxVQUFVLEdBQUcsRUFBRTtBQUNuQixJQUFJQyxVQUFVLEdBQUcsSUFBSTtBQUNyQixJQUFJQyxpQkFBaUIsR0FBRyxJQUFJO0FBQzVCdkgsUUFBUSxDQUFDd0gsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyREwsY0FBYyxHQUFHTSxNQUFNLENBQUNDLFNBQVMsQ0FBQzlRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ3RFaVAsVUFBVSxHQUFHelEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUN3QixJQUFJLENBQUMsTUFBTSxDQUFDO0VBQzlDeEIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM0QyxNQUFNLEVBQUU7O0VBRTdCO0VBQ0E7QUFDSixDQUFDLENBQUM7O0FBRUYsU0FBU21PLEtBQUssQ0FBQzlELEdBQUcsRUFBRTtFQUNoQixPQUFPQSxHQUFHLENBQUN2QyxRQUFRLEdBQUd1QyxHQUFHLENBQUN0QyxZQUFZO0FBQzFDO0FBRUEsU0FBU3FHLE1BQU0sQ0FBQy9ELEdBQUcsRUFBRTtFQUNqQixJQUFJZ0UsT0FBTyxHQUFJRixLQUFLLENBQUM5RCxHQUFHLENBQUMsR0FBR0EsR0FBRyxDQUFDM0ksR0FBRyxHQUFJLEdBQUc7RUFFMUMyTSxPQUFPLEdBQUdBLE9BQU8sR0FBS0EsT0FBTyxHQUFHaEUsR0FBRyxDQUFDMUksTUFBTSxHQUFJLEdBQUk7RUFFbEQsT0FBTzBNLE9BQU87QUFDbEI7QUFFQSxTQUFTQyxTQUFTLENBQUNqRSxHQUFHLEVBQUU7RUFDcEIsT0FBUzhELEtBQUssQ0FBQzlELEdBQUcsQ0FBQyxHQUFLQSxHQUFHLENBQUMxSSxNQUFPLEdBQUcsR0FBRztBQUM3QztBQUVBLFNBQVM0TSxVQUFVLENBQUNsRSxHQUFHLEVBQUU7RUFDckIsT0FBT0EsR0FBRyxDQUFDbkMsT0FBTyxHQUFHaUcsS0FBSyxDQUFDOUQsR0FBRyxDQUFDLEdBQUcrRCxNQUFNLENBQUMvRCxHQUFHLENBQUMsR0FBR2lFLFNBQVMsQ0FBQ2pFLEdBQUcsQ0FBQztBQUNsRTtBQUNBak4sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBSTlDL0MsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM0QyxNQUFNLEVBQUU7RUFDOUIsSUFBSXdPLElBQUksR0FBRyxDQUFDO0VBQ1osS0FBSyxJQUFJdEYsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHMEUsY0FBYyxDQUFDM1AsTUFBTSxFQUFFaUwsS0FBSyxFQUFFLEVBQUU7SUFDeEQsSUFBSTBFLGNBQWMsQ0FBQzFFLEtBQUssQ0FBQyxDQUFDdUYsU0FBUyxJQUFJclIsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3dHLEVBQUUsSUFBSThKLGlCQUFpQixJQUFJSCxjQUFjLENBQUMxRSxLQUFLLENBQUMsQ0FBQ3VGLFNBQVMsRUFBRTtNQUNuSixPQUFPclIsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQzVILE1BQU0sRUFBRSxDQUFDa0MsTUFBTSxDQUFFLDZQQUE2UCxDQUFFO0lBQzVUO0VBRUo7RUFDQSxLQUFLLElBQUllLE1BQUssR0FBRyxDQUFDLEVBQUVBLE1BQUssR0FBR3lFLGNBQWMsQ0FBQzFQLE1BQU0sRUFBRWlMLE1BQUssRUFBRSxFQUFFO0lBQ3hELElBQUkzRixJQUFJLEdBQUdzSyxVQUFVLEdBQUcsR0FBRyxHQUFHRixjQUFjLENBQUN6RSxNQUFLLENBQUMsQ0FBQ3dGLFFBQVEsR0FBRyxHQUFHO0lBQ2xFLElBQUlsSCxLQUFLLEdBQUdwSyxDQUFDLENBQUMsU0FBUyxHQUFHeVEsVUFBVSxHQUFHLEdBQUcsR0FBR0YsY0FBYyxDQUFDekUsTUFBSyxDQUFDLENBQUN3RixRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDN08sR0FBRyxFQUFFO0lBRS9GLElBQUk4TixjQUFjLENBQUN6RSxNQUFLLENBQUMsQ0FBQ3lGLEtBQUssSUFBSSxJQUFJLElBQUluSCxLQUFLLElBQUksRUFBRSxFQUFFO01BQ3BEZ0gsSUFBSSxHQUFHLENBQUM7TUFDUnBSLENBQUMsQ0FBQyxTQUFTLEdBQUdtRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMwQyxNQUFNLEVBQUUsQ0FBQ2tDLE1BQU0sQ0FBRSw4TUFBOE0sR0FBR3dGLGNBQWMsQ0FBQ3pFLE1BQUssQ0FBQyxDQUFDL0ssT0FBTyxHQUFHLHVCQUF1QixDQUFFO0lBQzFUO0VBQ0o7RUFDQSxJQUFJcVEsSUFBSSxJQUFJLENBQUMsRUFBRTtJQUNYLE9BQU8sS0FBSztFQUNoQjtFQUNBLElBQUluRSxHQUFHLEdBQUc7SUFDTnZDLFFBQVEsRUFBRTFLLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUNoTyxHQUFHLEVBQUU7SUFDakRrSSxZQUFZLEVBQUU2RyxVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLGVBQWUsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7SUFDckU2QixHQUFHLEVBQUV0RSxDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDaE8sR0FBRyxFQUFFO0lBQ3ZDOEIsTUFBTSxFQUFFdkUsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQ2hPLEdBQUc7RUFDL0MsQ0FBQztFQUNELElBQUlpTyxVQUFVLElBQUksSUFBSSxFQUFFO0lBQ3BCRixjQUFjLENBQUNFLFVBQVUsQ0FBQyxHQUFHO01BQ3pCVyxTQUFTLEVBQUVyUixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDcFEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDd0csRUFBRTtNQUNqRUMsS0FBSyxFQUFFOUcsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzhHLElBQUk7TUFDL0Q0QyxJQUFJLEVBQUUvSixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDcFEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMEosSUFBSSxHQUFHL0osQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzBKLElBQUksR0FBR0EsSUFBSTtNQUNoSXZGLEtBQUssRUFBRXhFLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUNwUSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM4RyxJQUFJO01BQzdEc0ssT0FBTyxFQUFFelIsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3dHLEVBQUU7TUFDN0Q2RCxRQUFRLEVBQUU4RyxVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7TUFDN0RrSSxZQUFZLEVBQUU2RyxVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLGVBQWUsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7TUFDckU2QixHQUFHLEVBQUVrTixVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7TUFDbkQ4QixNQUFNLEVBQUVpTixVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7TUFDekQrSCxXQUFXLEVBQUV4SyxDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLGNBQWMsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFO01BQ3ZEb0ksYUFBYSxFQUFFcUcsU0FBUyxDQUFDakUsR0FBRyxDQUFDO01BQzdCbkMsT0FBTyxFQUFFcUcsVUFBVSxDQUFDbEUsR0FBRztJQUMzQixDQUFDO0VBQ0wsQ0FBQyxNQUFNO0lBQ0h1RCxjQUFjLENBQUNqRyxJQUFJLENBQUM7TUFDaEI4RyxTQUFTLEVBQUVyUixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDcFEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDd0csRUFBRTtNQUNqRUMsS0FBSyxFQUFFOUcsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzhHLElBQUk7TUFDL0Q0QyxJQUFJLEVBQUUvSixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDcFEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMEosSUFBSSxHQUFHL0osQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzBKLElBQUksR0FBR0EsSUFBSTtNQUNoSXZGLEtBQUssRUFBRXhFLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUNwUSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM4RyxJQUFJO01BQzdEc0ssT0FBTyxFQUFFelIsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3dHLEVBQUU7TUFDN0Q2RCxRQUFRLEVBQUU4RyxVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7TUFDN0RrSSxZQUFZLEVBQUU2RyxVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLGVBQWUsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7TUFDckU2QixHQUFHLEVBQUVrTixVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7TUFDbkQ4QixNQUFNLEVBQUVpTixVQUFVLENBQUN4UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFLENBQUM7TUFDekQrSCxXQUFXLEVBQUV4SyxDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLGNBQWMsQ0FBQyxDQUFDaE8sR0FBRyxFQUFFO01BQ3ZEb0ksYUFBYSxFQUFFcUcsU0FBUyxDQUFDakUsR0FBRyxDQUFDO01BQzdCbkMsT0FBTyxFQUFFcUcsVUFBVSxDQUFDbEUsR0FBRztJQUMzQixDQUFDLENBQUM7RUFDTjtFQUVBLElBQUkzQyxNQUFNLEdBQUcsQ0FBQztFQUNkLElBQUlvSCxFQUFFLEdBQUcsRUFBRTtFQUNYMVIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUNSdUQsSUFBSSxFQUFFLENBQ05QLEtBQUssQ0FDRixtRkFBbUYsQ0FDdEY7RUFFTC9DLHVCQUF1QixDQUFDRCxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQzNDQSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ29NLFdBQVcsQ0FBQyxRQUFRLENBQUM7RUFDakRwTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzBJLElBQUksQ0FBQyxFQUFFLENBQUM7RUFDakMxSSxDQUFDLENBQUNrSyxJQUFJLENBQUNzRyxjQUFjLEVBQUUsVUFBU3JHLENBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQ3RDLElBQUlFLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO01BQ2pCb0gsRUFBRSxHQUFHLFFBQVE7SUFDakIsQ0FBQyxNQUFNO01BQ0hBLEVBQUUsR0FBRyxNQUFNO0lBQ2Y7SUFDQSxJQUFJcE4sR0FBRyxHQUFHOEYsS0FBSyxDQUFDOUYsR0FBRyxHQUFHLElBQUk7SUFDMUIsSUFBSUMsTUFBTSxHQUFHNkYsS0FBSyxDQUFDN0YsTUFBTSxHQUFHLElBQUk7SUFDaEMsSUFBSWlHLFdBQVcsR0FBR0osS0FBSyxDQUFDSSxXQUFXO0lBQ25DLElBQUlKLEtBQUssQ0FBQzlGLEdBQUcsSUFBSSxJQUFJLEVBQUU7TUFDbkJBLEdBQUcsR0FBRyxHQUFHO0lBQ2I7SUFDQSxJQUFJOEYsS0FBSyxDQUFDSSxXQUFXLElBQUksRUFBRSxFQUFFO01BQ3pCQSxXQUFXLEdBQUcsWUFBWSxHQUFHa0gsRUFBRSxHQUFHLGtFQUFrRSxHQUFHbEgsV0FBVyxHQUFHLFlBQVk7SUFDckk7SUFDQTtJQUNBLElBQUlDLE1BQU0sR0FDTixhQUFhLEdBQUdpSCxFQUFFLEdBQUcsT0FBTyxJQUMzQnZILENBQUMsR0FBRyxDQUFDLENBQUMsR0FDUCxXQUFXLEdBQ1hDLEtBQUssQ0FBQ0wsSUFBSSxHQUNWLEtBQUssR0FDTEssS0FBSyxDQUFDdEQsS0FBSyxHQUNYLFdBQVcsR0FDWHNELEtBQUssQ0FBQzVGLEtBQUssR0FDWCxXQUFXLEdBQ1g0RixLQUFLLENBQUNNLFFBQVEsR0FDZCxZQUFZLEdBQ1pOLEtBQUssQ0FBQ08sWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQzdCLFdBQVcsR0FDWHRHLEdBQUcsR0FDSCxXQUFXLEdBQ1hDLE1BQU0sR0FDTixXQUFXLEdBQ1g2RixLQUFLLENBQUNTLGFBQWEsQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUM5QixXQUFXLEdBQ1hSLEtBQUssQ0FBQ1UsT0FBTyxDQUFDRixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQ3hCLG1FQUFtRSxHQUNuRVQsQ0FBQyxHQUNELHFHQUFxRyxHQUNyR0EsQ0FBQyxHQUNELHdEQUF3RCxHQUFHSyxXQUFXO0lBQzFFeEssQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMrSyxNQUFNLENBQUNOLE1BQU0sQ0FBQztJQUM5Q0gsTUFBTSxFQUFFO0VBQ1osQ0FBQyxDQUFDO0VBSUZ0SyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ29NLFdBQVcsQ0FBQyxVQUFVLENBQUM7RUFHN0NwTSxDQUFDLENBQUMsa0RBQWtELENBQUMsQ0FBQ3lDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUVqRmdPLFVBQVUsR0FBRyxJQUFJO0VBQ2pCQyxpQkFBaUIsR0FBRyxJQUFJOztFQUV4Qjs7RUFHQTVOLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRnRJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUMvQzJOLFVBQVUsR0FBRzFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxJQUFJLENBQUM7RUFDL0JtUCxpQkFBaUIsR0FBR0gsY0FBYyxDQUFDeFEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0VBRW5FLElBQUlrUSxFQUFFLEdBQUcsRUFBRTtFQUNYLElBQUlwSCxNQUFNLEdBQUcsQ0FBQztFQUNkdEssQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMwSSxJQUFJLENBQUMsRUFBRSxDQUFDO0VBQ2pDMUksQ0FBQyxDQUFDa0ssSUFBSSxDQUFDc0csY0FBYyxFQUFFLFVBQVNyRyxDQUFDLEVBQUVDLEtBQUssRUFBRTtJQUN0QyxJQUFJRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNqQm9ILEVBQUUsR0FBRyxRQUFRO0lBQ2pCLENBQUMsTUFBTTtNQUNIQSxFQUFFLEdBQUcsTUFBTTtJQUNmO0lBQ0EsSUFBSXBOLEdBQUcsR0FBRzhGLEtBQUssQ0FBQzlGLEdBQUcsR0FBRyxJQUFJO0lBQzFCLElBQUlDLE1BQU0sR0FBRzZGLEtBQUssQ0FBQzdGLE1BQU0sR0FBRyxJQUFJO0lBQ2hDLElBQUlpRyxXQUFXLEdBQUdKLEtBQUssQ0FBQ0ksV0FBVztJQUNuQyxJQUFJSixLQUFLLENBQUM5RixHQUFHLElBQUksSUFBSSxFQUFFO01BQ25CQSxHQUFHLEdBQUcsR0FBRztJQUNiO0lBQ0EsSUFBSThGLEtBQUssQ0FBQ0ksV0FBVyxJQUFJLEVBQUUsRUFBRTtNQUN6QkEsV0FBVyxHQUFHLFlBQVksR0FBR2tILEVBQUUsR0FBRyxrRUFBa0UsR0FBR2xILFdBQVcsR0FBRyxZQUFZO0lBQ3JJO0lBQ0E7SUFDQSxJQUFJQyxNQUFNLEdBQ04sYUFBYSxHQUFHaUgsRUFBRSxHQUFHLE9BQU8sSUFDM0J2SCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQ1AsV0FBVyxHQUNYQyxLQUFLLENBQUNMLElBQUksR0FDVixLQUFLLEdBQ0xLLEtBQUssQ0FBQ3RELEtBQUssR0FDWCxXQUFXLEdBQ1hzRCxLQUFLLENBQUM1RixLQUFLLEdBQ1gsV0FBVyxHQUNYNEYsS0FBSyxDQUFDTSxRQUFRLEdBQ2QsWUFBWSxHQUNaTixLQUFLLENBQUNPLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUM3QixXQUFXLEdBQ1h0RyxHQUFHLEdBQ0gsV0FBVyxHQUNYQyxNQUFNLEdBQ04sV0FBVyxHQUNYNkYsS0FBSyxDQUFDUyxhQUFhLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FDOUIsV0FBVyxHQUNYUixLQUFLLENBQUNVLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUN4QixtRUFBbUUsR0FDbkVULENBQUMsR0FDRCxxR0FBcUcsR0FDckdBLENBQUMsR0FDRCx3REFBd0QsR0FBR0ssV0FBVztJQUMxRXhLLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDK0ssTUFBTSxDQUFDTixNQUFNLENBQUM7SUFDOUNILE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FBQztFQUdGLElBQUl6RCxFQUFFLEdBQUc3RyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDO0VBQzNCLElBQUlxSyxTQUFTLEdBQUc3TCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ2xDLElBQUltUSxTQUFTLEdBQUczUixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM4TCxLQUFLLEVBQUU7RUFDL0I5TCxDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEMsSUFBSSxFQUFFLE1BQU07SUFDWk8sSUFBSSxFQUFFO01BQ0YyUCxNQUFNLEVBQUVwQixjQUFjLENBQUN4USxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFDREcsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxxQ0FBcUMsRUFBRTtNQUN6RGlGLEVBQUUsRUFBRUE7SUFDUixDQUFDLENBQUM7SUFDRmxELE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO01BQ3RCO01BQ0E1RCxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FDM0IrTCxFQUFFLENBQUNGLFNBQVMsQ0FBQyxDQUNiRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FDMUJ0RCxJQUFJLENBQUMsbUJBQW1CLEdBQUc5RSxNQUFNLEdBQUcsT0FBTyxDQUFDO01BQ2pENUQsQ0FBQyxDQUFDQSxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQytMLEVBQUUsQ0FBQ0YsU0FBUyxDQUFDLENBQUMsQ0FDNUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQ2hCckYsSUFBSSxFQUFFLENBQ05QLEtBQUssQ0FDRixtRkFBbUYsQ0FDdEY7TUFDTC9DLHVCQUF1QixDQUNuQkQsQ0FBQyxDQUFDQSxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQytMLEVBQUUsQ0FBQ0YsU0FBUyxDQUFDLENBQUMsQ0FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsRUFDbkU1SSxDQUFDLENBQUNBLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDK0wsRUFBRSxDQUFDRixTQUFTLENBQUMsQ0FBQyxDQUNoRGpELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDakJwSCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQ3ZCO01BQ0Q7TUFDQTtNQUNBeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDK0QsS0FBSyxFQUFFO01BQ2pCL0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDNkMsTUFBTSxFQUFFO01BSWxCN0MsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO1FBQ0hDLElBQUksRUFBRSxNQUFNO1FBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsdUNBQXVDLENBQUM7UUFDOUQySCxXQUFXLEVBQUUsS0FBSztRQUNsQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEI3RixPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7VUFDL0M5RCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMwSSxJQUFJLENBQUM5RSxNQUFNLENBQUMsQ0FBQ0wsSUFBSSxFQUFFO1VBQzdCMEksdUNBQXVDLENBQUNDLElBQUksRUFBRTtVQUM5Q0MsVUFBVSxDQUFDLFlBQVc7WUFDbEJuTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1RCxJQUFJLEVBQUU7WUFDaEJ2RCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM2QyxNQUFNLEVBQUU7VUFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNYO01BQ0osQ0FBQyxDQUFDO01BQ0Y3QyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ2dNLFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFFOUMsT0FBTyxJQUFJO01BQ1g7TUFDQTtNQUNBO0lBQ0o7RUFDSixDQUFDLENBQUM7O0VBRUZqSixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBR0Z0SSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM4QyxFQUFFLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUVqRCxJQUFJdUgsTUFBTSxHQUFHLENBQUM7RUFDZCxJQUFJb0gsRUFBRSxHQUFHLEVBQUU7RUFDWGxCLGNBQWMsQ0FBQ3RGLE1BQU0sQ0FBQ2xMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDNUN4QixDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQzRDLE1BQU0sRUFBRTtFQUMzQyxJQUFJNE4sY0FBYyxDQUFDM1AsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUMzQmIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM2UixJQUFJLEVBQUUsQ0FBQzdGLFFBQVEsQ0FBQyxVQUFVLENBQUM7RUFDckQ7RUFJQWhNLENBQUMsQ0FBQ2tLLElBQUksQ0FBQ3NHLGNBQWMsRUFBRSxVQUFTckcsQ0FBQyxFQUFFQyxLQUFLLEVBQUU7SUFDdEMsSUFBSUUsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDakJvSCxFQUFFLEdBQUcsUUFBUTtJQUNqQixDQUFDLE1BQU07TUFDSEEsRUFBRSxHQUFHLE1BQU07SUFDZjtJQUNBLElBQUlwTixHQUFHLEdBQUc4RixLQUFLLENBQUM5RixHQUFHLEdBQUcsSUFBSTtJQUMxQixJQUFJQyxNQUFNLEdBQUc2RixLQUFLLENBQUM3RixNQUFNLEdBQUcsSUFBSTtJQUNoQyxJQUFJaUcsV0FBVyxHQUFHSixLQUFLLENBQUNJLFdBQVc7SUFDbkMsSUFBSUosS0FBSyxDQUFDOUYsR0FBRyxJQUFJLElBQUksRUFBRTtNQUNuQkEsR0FBRyxHQUFHLEdBQUc7SUFDYjtJQUNBLElBQUk4RixLQUFLLENBQUNJLFdBQVcsSUFBSSxFQUFFLEVBQUU7TUFDekJBLFdBQVcsR0FBRyxZQUFZLEdBQUdrSCxFQUFFLEdBQUcsa0VBQWtFLEdBQUdsSCxXQUFXLEdBQUcsWUFBWTtJQUNySTtJQUNBLElBQUlDLE1BQU0sR0FDTixhQUFhLEdBQUdpSCxFQUFFLEdBQUcsT0FBTyxJQUMzQnZILENBQUMsR0FBRyxDQUFDLENBQUMsR0FDUCxXQUFXLEdBQ1hDLEtBQUssQ0FBQ0wsSUFBSSxHQUNWLEtBQUssR0FDTEssS0FBSyxDQUFDdEQsS0FBSyxHQUNYLFdBQVcsR0FDWHNELEtBQUssQ0FBQzVGLEtBQUssR0FDWCxXQUFXLEdBQ1g0RixLQUFLLENBQUNNLFFBQVEsR0FDZCxZQUFZLEdBQ1pOLEtBQUssQ0FBQ08sWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQzdCLFdBQVcsR0FDWHRHLEdBQUcsR0FDSCxXQUFXLEdBQ1hDLE1BQU0sR0FDTixXQUFXLEdBQ1g2RixLQUFLLENBQUNTLGFBQWEsQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUM5QixXQUFXLEdBQ1hSLEtBQUssQ0FBQ1UsT0FBTyxDQUFDRixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQ3hCLG1FQUFtRSxHQUNuRVQsQ0FBQyxHQUNELHdEQUF3RCxHQUFHSyxXQUFXO0lBQzFFeEssQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMrSyxNQUFNLENBQUNOLE1BQU0sQ0FBQztJQUM1Q0gsTUFBTSxFQUFFO0VBQ1osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBSUZ0SyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3FJLEtBQUssQ0FBQyxVQUFTdEYsQ0FBQyxFQUFFO0VBQ3BDLElBQUkrTyxNQUFNLEdBQUc5UixDQUFDLENBQUMsSUFBSSxDQUFDO0VBQ3BCOFIsTUFBTSxDQUFDQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztFQUM3QixJQUFJaEosU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7RUFLdkM7RUFDQTs7RUFHQSxJQUFJd1EsUUFBUSxHQUFHLElBQUkvSSxRQUFRLEVBQUU7RUFDN0IsSUFBSTdFLE1BQU0sR0FBR3BFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ2lTLGNBQWMsRUFBRTtFQUV4Q2pTLENBQUMsQ0FBQ2tLLElBQUksQ0FBQzlGLE1BQU0sRUFBRSxVQUFTK0YsQ0FBQyxFQUFFMUgsR0FBRyxFQUFFO0lBQzVCdVAsUUFBUSxDQUFDakgsTUFBTSxDQUFDdEksR0FBRyxDQUFDMEQsSUFBSSxFQUFFMUQsR0FBRyxDQUFDMkgsS0FBSyxDQUFDO0lBQ3BDO0VBRUosQ0FBQyxDQUFDOztFQUVGLElBQU1uSSxJQUFJLEdBQUcrSSxJQUFJLENBQUNDLFNBQVMsQ0FBQ3VGLGNBQWMsQ0FBQztFQUMzQ3dCLFFBQVEsQ0FBQ2pILE1BQU0sQ0FBQyxRQUFRLEVBQUU5SSxJQUFJLENBQUM7RUFJL0IsSUFBSWlILFFBQVEsR0FBR2xKLENBQUMsQ0FBQyxPQUFPLENBQUM7RUFDekIsSUFBSXdHLENBQUMsR0FBRzJDLDZDQUFZLENBQUNDLFFBQVEsQ0FBQ29FLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztFQUMxRGhILENBQUMsQ0FBQzhDLEtBQUssRUFBRTtFQUNUdEosQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsNEJBQTRCLENBQUM7SUFDbkRLLElBQUksRUFBRStQLFFBQVE7SUFDZHpJLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQjdGLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO01BQ3RCO01BQ0E1RCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM0QyxNQUFNLEVBQUU7TUFDMUIsSUFBSWdCLE1BQU0sQ0FBQ3NPLFlBQVksRUFBRTtRQUNyQmxTLENBQUMsQ0FBQ2tLLElBQUksQ0FBQ3RHLE1BQU0sQ0FBQ3NPLFlBQVksRUFBRSxVQUFTL0gsQ0FBQyxFQUFFQyxLQUFLLEVBQUU7VUFDM0NwSyxDQUFDLENBQUMsU0FBUyxHQUFHbUssQ0FBQyxDQUFDLENBQUNuSCxLQUFLLENBQ2xCLDJMQUEyTCxHQUMzTG9ILEtBQUssR0FDTCx1QkFBdUIsQ0FDMUI7UUFDTCxDQUFDLENBQUM7UUFDRjBILE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7UUFDOUI7TUFDSixDQUFDLE1BQU0sSUFBSW5PLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtRQUN0QjtRQUNBQyxrRkFBYyxDQUFDVCxRQUFRLEVBQUVILFNBQVMsRUFBRW5GLE1BQU0sQ0FBQzhGLE1BQU0sQ0FBQztNQUN0RCxDQUFDLE1BQU0sSUFBSTlGLE1BQU0sQ0FBQ0csS0FBSyxFQUFFO1FBQ3JCRSxNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO1FBQ0YyTixNQUFNLENBQUNDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQ2xDLENBQUMsTUFBTSxJQUFJbk8sTUFBTSxDQUFDM0IsSUFBSSxFQUFFO1FBQ3BCO1FBQ0FnQyxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO1FBQ0YsSUFBSXhDLEdBQUcsR0FBRy9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7VUFDaERpRixFQUFFLEVBQUVqRCxNQUFNLENBQUMzQixJQUFJLENBQUM0RTtRQUNwQixDQUFDLENBQUM7UUFDRnRGLE1BQU0sQ0FBQzJELFFBQVEsQ0FBQzJFLElBQUksR0FBR2xJLEdBQUc7TUFDOUI7SUFDSixDQUFDO0lBQ0RtSSxLQUFLLEVBQUUsZUFBU3hFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQzVDMEMsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO01BQ1J4RixNQUFNLENBQUM2RixLQUFLLENBQUMsUUFBUSxFQUFFaEcsV0FBVyxFQUFFO1FBQ2hDSyxPQUFPLEVBQUU7TUFDYixDQUFDLENBQUM7TUFDRjJOLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7SUFDbEM7RUFDSixDQUFDLENBQUM7RUFDRmhQLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFJRnRJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ3FJLEtBQUssQ0FBQyxVQUFTdEYsQ0FBQyxFQUFFO0VBQzFCL0MsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7TUFDaERpRixFQUFFLEVBQUU3RyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5SSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUNqSCxJQUFJLENBQUMsSUFBSTtJQUN0QyxDQUFDLENBQUM7SUFDRm1DLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO01BQ3RCNUQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDMEksSUFBSSxDQUFDOUUsTUFBTSxDQUFDLENBQUNMLElBQUksRUFBRTtNQUM3QixJQUFJcUUsZ0JBQWdCLEdBQUc1SCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0ssT0FBTyxDQUFDO1FBQ2xEd0gsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QkMsVUFBVSxFQUFFO01BQ2hCLENBQUMsQ0FBQztNQUNGOUgsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMyTixLQUFLLENBQUMsTUFBTSxDQUFDO01BQzFDM04sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNLLE9BQU8sRUFBRTtNQUM3QjhMLFVBQVUsQ0FBQyxZQUFXO1FBQ2xCbk0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUQsSUFBSSxFQUFFO1FBQ2hCdkQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDNkMsTUFBTSxFQUFFO01BQ3RCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWDtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGN0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQzNDO0VBQ0EsSUFBSWdHLFNBQVMsR0FBRy9JLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDcEMsSUFBSXdILEdBQUcsR0FBRyxJQUFJQyxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQzVCLElBQUlDLFFBQVEsR0FBR2xKLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFDdEIsSUFBSTZHLEVBQUUsR0FBR21DLEdBQUcsQ0FBQ21DLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFFdkIsSUFBSTNFLENBQUMsR0FBRzJDLDZDQUFZLENBQUNDLFFBQVEsQ0FBQ29FLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztFQUMxRDtFQUNBaEgsQ0FBQyxDQUFDOEMsS0FBSyxFQUFFO0VBQ1R0SixDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEMsSUFBSSxFQUFFLE1BQU07SUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtNQUNoRGlGLEVBQUUsRUFBRUE7SUFDUixDQUFDLENBQUM7SUFDRjVFLElBQUksRUFBRStHLEdBQUc7SUFDVE8sV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7TUFDdEIsSUFBSUEsTUFBTSxDQUFDOEYsTUFBTSxFQUFFO1FBQ2ZsRCxDQUFDLENBQUNpRCxJQUFJLEVBQUU7UUFDUjtRQUNBRSxrRkFBYyxDQUFDVCxRQUFRLEVBQUVILFNBQVMsRUFBRW5GLE1BQU0sQ0FBQzhGLE1BQU0sQ0FBQztNQUN0RDtNQUNBLElBQUk5RixNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO1FBQ3BCOUYsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtVQUN0RHpGLE9BQU8sRUFBRTtRQUNiLENBQUMsQ0FBQztRQUNGZSxRQUFRLENBQUN3QyxNQUFNLEVBQUU7TUFDckIsQ0FBQyxNQUFNLElBQUk5RCxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO1FBQzNCdkQsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1J4RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDO0lBQ0QyRixLQUFLLEVBQUUsZUFBU3hFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO01BQzVDRyxNQUFNLENBQUM2RixLQUFLLENBQUMsUUFBUSxFQUFFaEcsV0FBVyxFQUFFO1FBQ2hDSyxPQUFPLEVBQUU7TUFDYixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQztFQUNGcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUNGdEksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQU1sQyxJQUFJZ0csU0FBUyxHQUFHL0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7RUFFdkM7RUFDQTs7RUFHQSxJQUFJd1EsUUFBUSxHQUFHLElBQUkvSSxRQUFRLEVBQUU7RUFDN0IsSUFBSTdFLE1BQU0sR0FBR3BFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ2lTLGNBQWMsRUFBRTtFQUV4Q2pTLENBQUMsQ0FBQ2tLLElBQUksQ0FBQzlGLE1BQU0sRUFBRSxVQUFTK0YsQ0FBQyxFQUFFMUgsR0FBRyxFQUFFO0lBQzVCdVAsUUFBUSxDQUFDakgsTUFBTSxDQUFDdEksR0FBRyxDQUFDMEQsSUFBSSxFQUFFMUQsR0FBRyxDQUFDMkgsS0FBSyxDQUFDO0lBQ3BDO0VBRUosQ0FBQyxDQUFDOztFQUVGLElBQUl2RCxFQUFFLEdBQUdtTCxRQUFRLENBQUM3RyxHQUFHLENBQUMsS0FBSyxDQUFDO0VBRTVCLElBQUlqQyxRQUFRLEdBQUdsSixDQUFDLENBQUMsT0FBTyxDQUFDO0VBSXpCLElBQUl3RyxDQUFDLEdBQUcyQyw2Q0FBWSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQztFQUM1QztFQUNBN0MsQ0FBQyxDQUFDOEMsS0FBSyxFQUFFO0VBQ1R0SixDQUFDLENBQUN5QixJQUFJLENBQUM7SUFDSEMsSUFBSSxFQUFFLE1BQU07SUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtNQUNoRGlGLEVBQUUsRUFBRUE7SUFDUixDQUFDLENBQUM7SUFDRjVFLElBQUksRUFBRStQLFFBQVE7SUFDZHpJLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxXQUFXLEVBQUUsS0FBSztJQUNsQjdGLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO01BQ3RCNEMsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO01BQ1IsSUFBSTdGLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtRQUNmQyxrRkFBYyxDQUFDVCxRQUFRLEVBQUVILFNBQVMsRUFBRW5GLE1BQU0sQ0FBQzhGLE1BQU0sQ0FBQztNQUN0RCxDQUFDLE1BQU0sSUFBSTlGLE1BQU0sQ0FBQzNCLElBQUksRUFBRTtRQUNwQmdDLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7VUFDdER6RixPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7TUFDTixDQUFDLE1BQU0sSUFBSVAsTUFBTSxDQUFDRyxLQUFLLEVBQUU7UUFDckJ5QyxDQUFDLENBQUNpRCxJQUFJLEVBQUU7UUFDUnhGLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7VUFDdER6RixPQUFPLEVBQUU7UUFDYixDQUFDLENBQUM7TUFDTjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0VBQ0ZwQixDQUFDLENBQUN1RixjQUFjLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBR0Z0SSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM4QyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDL0M7RUFDQS9DLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDNEMsTUFBTSxFQUFFO0VBQzlCLElBQUlpRSxFQUFFLEdBQUc3RyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN5QyxHQUFHLEVBQUU7RUFDeEIsSUFBSTJPLElBQUksR0FBRyxDQUFDO0VBQ1osS0FBSyxJQUFJdEYsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHMEUsY0FBYyxDQUFDM1AsTUFBTSxFQUFFaUwsS0FBSyxFQUFFLEVBQUU7SUFDeEQsSUFBSTBFLGNBQWMsQ0FBQzFFLEtBQUssQ0FBQyxDQUFDdUYsU0FBUyxJQUFJclIsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3dHLEVBQUUsRUFBRTtNQUMzRixPQUFPN0csQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQzVILE1BQU0sRUFBRSxDQUFDa0MsTUFBTSxDQUFFLDZQQUE2UCxDQUFFO0lBQzVUO0VBSUo7RUFDQSxJQUFLL0ssQ0FBQyxDQUFDLHdCQUF3QixHQUFHQSxDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDcFEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDd0csRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJeEIsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3dHLEVBQUUsSUFBTTdHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ21TLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzNRLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSXhCLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUNwUSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUN3RyxFQUFHLEVBQUU7SUFDeFIsT0FBTzdHLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUM1SCxNQUFNLEVBQUUsQ0FBQ2tDLE1BQU0sQ0FBRSw2UEFBNlAsQ0FBRTtFQUM1VDtFQUNBLEtBQUssSUFBSWUsT0FBSyxHQUFHLENBQUMsRUFBRUEsT0FBSyxHQUFHeUUsY0FBYyxDQUFDMVAsTUFBTSxFQUFFaUwsT0FBSyxFQUFFLEVBQUU7SUFDeEQsSUFBSTNGLElBQUksR0FBR3NLLFVBQVUsR0FBRyxHQUFHLEdBQUdGLGNBQWMsQ0FBQ3pFLE9BQUssQ0FBQyxDQUFDd0YsUUFBUSxHQUFHLEdBQUc7SUFDbEUsSUFBSWxILEtBQUssR0FBR3BLLENBQUMsQ0FBQyxTQUFTLEdBQUd5USxVQUFVLEdBQUcsR0FBRyxHQUFHRixjQUFjLENBQUN6RSxPQUFLLENBQUMsQ0FBQ3dGLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM3TyxHQUFHLEVBQUU7SUFFL0YsSUFBSThOLGNBQWMsQ0FBQ3pFLE9BQUssQ0FBQyxDQUFDeUYsS0FBSyxJQUFJLElBQUksSUFBSW5ILEtBQUssSUFBSSxFQUFFLEVBQUU7TUFDcERnSCxJQUFJLEdBQUcsQ0FBQztNQUNScFIsQ0FBQyxDQUFDLFNBQVMsR0FBR21HLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQzBDLE1BQU0sRUFBRSxDQUFDa0MsTUFBTSxDQUFFLDhNQUE4TSxHQUFHd0YsY0FBYyxDQUFDekUsT0FBSyxDQUFDLENBQUMvSyxPQUFPLEdBQUcsdUJBQXVCLENBQUU7SUFDMVQ7RUFDSjtFQUNBLElBQUlxUSxJQUFJLElBQUksQ0FBQyxFQUFFO0lBQ1gsT0FBTyxLQUFLO0VBQ2hCO0VBQ0EsSUFBSW5FLEdBQUcsR0FBRztJQUNOdkMsUUFBUSxFQUFFMUssQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQ2hPLEdBQUcsRUFBRTtJQUNqRGtJLFlBQVksRUFBRTZHLFVBQVUsQ0FBQ3hSLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsZUFBZSxDQUFDLENBQUNoTyxHQUFHLEVBQUUsQ0FBQztJQUNyRTZCLEdBQUcsRUFBRXRFLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUNoTyxHQUFHLEVBQUU7SUFDdkM4QixNQUFNLEVBQUV2RSxDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDaE8sR0FBRztFQUMvQyxDQUFDO0VBQ0QrTixjQUFjLEdBQUcsRUFBRTtFQUNuQkEsY0FBYyxDQUFDakcsSUFBSSxDQUFDO0lBQ2hCMUQsRUFBRSxFQUFFN0csQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDbVMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDM1EsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QzZQLFNBQVMsRUFBRXJSLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUNwUSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUN3RyxFQUFFO0lBQ2pFQyxLQUFLLEVBQUU5RyxDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDcFEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOEcsSUFBSTtJQUMvRDRDLElBQUksRUFBRS9KLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUNwUSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMwSixJQUFJO0lBQzlEdkYsS0FBSyxFQUFFeEUsQ0FBQyxDQUFDLEdBQUcsR0FBR3lRLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQ3BRLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzhHLElBQUk7SUFDN0RzSyxPQUFPLEVBQUV6UixDQUFDLENBQUMsR0FBRyxHQUFHeVEsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDcFEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDd0csRUFBRTtJQUM3RDZELFFBQVEsRUFBRThHLFVBQVUsQ0FBQ3hSLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUNoTyxHQUFHLEVBQUUsQ0FBQztJQUM3RGtJLFlBQVksRUFBRTZHLFVBQVUsQ0FBQ3hSLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsZUFBZSxDQUFDLENBQUNoTyxHQUFHLEVBQUUsQ0FBQztJQUNyRTZCLEdBQUcsRUFBRWtOLFVBQVUsQ0FBQ3hSLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUNoTyxHQUFHLEVBQUUsQ0FBQztJQUNuRDhCLE1BQU0sRUFBRWlOLFVBQVUsQ0FBQ3hSLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUNoTyxHQUFHLEVBQUUsQ0FBQztJQUN6RCtILFdBQVcsRUFBRXhLLENBQUMsQ0FBQyxHQUFHLEdBQUd5USxVQUFVLEdBQUcsY0FBYyxDQUFDLENBQUNoTyxHQUFHLEVBQUU7SUFDdkRvSSxhQUFhLEVBQUVxRyxTQUFTLENBQUNqRSxHQUFHLENBQUM7SUFDN0JuQyxPQUFPLEVBQUVxRyxVQUFVLENBQUNsRSxHQUFHO0VBQzNCLENBQUMsQ0FBQztFQUNGLElBQUkrRSxRQUFRLEdBQUcsSUFBSS9JLFFBQVEsRUFBRTtFQUM3QixJQUFNaEgsSUFBSSxHQUFHK0ksSUFBSSxDQUFDQyxTQUFTLENBQUN1RixjQUFjLENBQUM7RUFDM0N3QixRQUFRLENBQUNqSCxNQUFNLENBQUMsUUFBUSxFQUFFOUksSUFBSSxDQUFDO0VBQy9CakMsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO0lBQ0hDLElBQUksRUFBRSxNQUFNO0lBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7TUFDaERpRixFQUFFLEVBQUVBO0lBQ1IsQ0FBQyxDQUFDO0lBQ0Y1RSxJQUFJLEVBQUUrUCxRQUFRO0lBQ2R6SSxXQUFXLEVBQUUsS0FBSztJQUNsQkMsV0FBVyxFQUFFLEtBQUs7SUFDbEI3RixPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtNQUN0QjtNQUNBLElBQUlBLE1BQU0sQ0FBQzhGLE1BQU0sRUFBRTtRQUNmbEQsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1JFLGtGQUFjLENBQUNULFFBQVEsRUFBRUgsU0FBUyxFQUFFbkYsTUFBTSxDQUFDOEYsTUFBTSxDQUFDO1FBQ2xEO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNZLENBQUMsTUFBTSxJQUFJOUYsTUFBTSxDQUFDM0IsSUFBSSxFQUFFO1FBQ3BCO1FBQ0FnQyxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO1FBQ0ZlLFFBQVEsQ0FBQ3dDLE1BQU0sRUFBRTtNQUNyQixDQUFDLE1BQU0sSUFBSTlELE1BQU0sQ0FBQ0csS0FBSyxFQUFFO1FBQ3JCeUMsQ0FBQyxDQUFDaUQsSUFBSSxFQUFFO1FBQ1J4RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO1VBQ3REekYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDO01BQ047SUFDSjtFQUNKLENBQUMsQ0FBQzs7RUFHRjs7RUFHQXBCLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRnRJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQ2xEeU4sY0FBYyxDQUFDdEYsTUFBTSxDQUFDbEwsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM1Q3hCLENBQUMsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDNEMsTUFBTSxFQUFFO0VBQzVENUMsQ0FBQyxDQUFDa0ssSUFBSSxDQUFDc0csY0FBYyxFQUFFLFVBQVNyRyxDQUFDLEVBQUVDLEtBQUssRUFBRTtJQUN0QyxJQUFJRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNqQm9ILEVBQUUsR0FBRyxRQUFRO0lBQ2pCLENBQUMsTUFBTTtNQUNIQSxFQUFFLEdBQUcsTUFBTTtJQUNmO0lBQ0EsSUFBSXBOLEdBQUcsR0FBRzhGLEtBQUssQ0FBQzlGLEdBQUcsR0FBRyxJQUFJO0lBQzFCLElBQUlDLE1BQU0sR0FBRzZGLEtBQUssQ0FBQzdGLE1BQU0sR0FBRyxJQUFJO0lBQ2hDLElBQUlpRyxXQUFXLEdBQUdKLEtBQUssQ0FBQ0ksV0FBVztJQUNuQyxJQUFJSixLQUFLLENBQUM5RixHQUFHLElBQUksSUFBSSxFQUFFO01BQ25CQSxHQUFHLEdBQUcsR0FBRztJQUNiO0lBQ0EsSUFBSThGLEtBQUssQ0FBQ0ksV0FBVyxJQUFJLEVBQUUsRUFBRTtNQUN6QkEsV0FBVyxHQUFHLFlBQVksR0FBR2tILEVBQUUsR0FBRyxrRUFBa0UsR0FBR2xILFdBQVcsR0FBRyxZQUFZO0lBQ3JJO0lBQ0EsSUFBSUMsTUFBTSxHQUNOLFdBQVcsR0FDWCxXQUFXLEdBQ1hMLEtBQUssQ0FBQ0wsSUFBSSxHQUNWLEtBQUssR0FDTEssS0FBSyxDQUFDdEQsS0FBSyxHQUNYLFdBQVcsR0FDWHNELEtBQUssQ0FBQzVGLEtBQUssR0FDWCxXQUFXLEdBQ1g0RixLQUFLLENBQUNNLFFBQVEsR0FDZCxZQUFZLEdBQ1pOLEtBQUssQ0FBQ08sWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQzdCLFdBQVcsR0FDWHRHLEdBQUcsR0FDSCxXQUFXLEdBQ1hDLE1BQU0sR0FDTixXQUFXLEdBQ1g2RixLQUFLLENBQUNTLGFBQWEsQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUM5QixXQUFXLEdBQ1hSLEtBQUssQ0FBQ1UsT0FBTyxDQUFDRixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQ3hCLG1FQUFtRSxHQUNuRVQsQ0FBQyxHQUNELHdEQUF3RCxHQUFHSyxXQUFXO0lBQzFFeEssQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMrSyxNQUFNLENBQUNOLE1BQU0sQ0FBQztFQUNqRCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFDRixJQUFJMkgsd0JBQXdCLEdBQUcsRUFBRTtBQUNqQ3BTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzhDLEVBQUUsQ0FBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBRXRELElBQUk4RCxFQUFFLEdBQUc3RyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDO0VBQzNCLElBQUk0SixLQUFLLEdBQUdwTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsT0FBTyxDQUFDO0VBRWpDa0Qsd0JBQXdCLENBQ25CMkcsSUFBSSxDQUFDO0lBQ0ZDLFNBQVMsRUFBRTtNQUNQQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0RDLFFBQVEsRUFBRSxLQUFLO0lBQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCekMsSUFBSSxFQUFFLDhDQUE4QztJQUNwRHpGLElBQUksRUFBRSxTQUFTO0lBQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCQyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsaUJBQWlCLEVBQUUsNkNBQTZDO0lBQ2hFQyxnQkFBZ0IsRUFBRTtFQUN0QixDQUFDLENBQUMsQ0FDRDVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO0lBQ2QsSUFBSUEsTUFBTSxDQUFDd0csS0FBSyxFQUFFO01BQ2RwSyxDQUFDLENBQUN5QixJQUFJLENBQUM7UUFDSEMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtVQUNoRGlGLEVBQUUsRUFBRUEsRUFBRTtVQUNOdUUsS0FBSyxFQUFFQTtRQUNYLENBQUMsQ0FBQztRQUNGbkosSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSc0gsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7VUFDdEI7VUFDQSxJQUFJQSxNQUFNLENBQUMzQixJQUFJLElBQUksU0FBUyxFQUFFO1lBQzFCakMsQ0FBQyxDQUFDLG1CQUFtQixHQUFHQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUNvQixNQUFNLEVBQUU7WUFDM0RxQixNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2NBQ3REekYsT0FBTyxFQUFFO1lBQ2IsQ0FBQyxDQUFDO1lBQ0Y7WUFDQTtZQUNBZSxRQUFRLENBQUN3QyxNQUFNLEVBQUU7VUFDckIsQ0FBQyxNQUFNLElBQUs5RCxNQUFNLENBQUMzQixJQUFJLEdBQUcsT0FBTyxFQUFHO1lBQ2hDZ0MsTUFBTSxDQUFDNkYsS0FBSyxDQUFDbEcsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2NBQ3BEekYsT0FBTyxFQUFFO1lBQ2IsQ0FBQyxDQUFDO1lBQ0Y7VUFDSjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7O0VBRU5wQixDQUFDLENBQUN1RixjQUFjLEVBQUU7RUFDbEI7O0VBRUE7QUFDSixDQUFDLENBQUM7O0FBRUZ0SSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM4QyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDL0M7RUFDQSxJQUFJOEQsRUFBRSxHQUFHN0csQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLElBQUksQ0FBQztFQUMzQixJQUFJcUssU0FBUyxHQUFHN0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUksT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUNxRCxLQUFLLEVBQUU7RUFDdEUsSUFBSTZGLFNBQVMsR0FBRzNSLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzhMLEtBQUssRUFBRTtFQUMvQjlMLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztJQUNIQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLGlDQUFpQyxFQUFFO01BQ3JEaUYsRUFBRSxFQUFFQTtJQUNSLENBQUMsQ0FBQztJQUNGbEQsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7TUFDdEI7TUFDQTVELENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUMzQitMLEVBQUUsQ0FBQ0YsU0FBUyxDQUFDLENBQ2JHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMxQnRELElBQUksQ0FBQyxtQkFBbUIsR0FBRzlFLE1BQU0sR0FBRyxPQUFPLENBQUM7TUFDakQ1RCxDQUFDLENBQUNBLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDK0wsRUFBRSxDQUFDRixTQUFTLENBQUMsQ0FBQyxDQUM1Q2pELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDaEJyRixJQUFJLEVBQUUsQ0FDTlAsS0FBSyxDQUNGLG1GQUFtRixDQUN0RjtNQUNML0MsdUJBQXVCLENBQ25CRCxDQUFDLENBQUNBLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDK0wsRUFBRSxDQUFDRixTQUFTLENBQUMsQ0FBQyxDQUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUNuRTVJLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMrTCxFQUFFLENBQUNGLFNBQVMsQ0FBQyxDQUFDLENBQ2hEakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUNqQnBILElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDdkI7TUFDRDtNQUNBO01BQ0F4QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMrRCxLQUFLLEVBQUU7TUFDakIvRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM2QyxNQUFNLEVBQUU7TUFFbEI3QyxDQUFDLENBQUN5QixJQUFJLENBQUM7UUFDSEMsSUFBSSxFQUFFLE1BQU07UUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyx1Q0FBdUMsQ0FBQztRQUM5RDJILFdBQVcsRUFBRSxLQUFLO1FBQ2xCQyxXQUFXLEVBQUUsS0FBSztRQUNsQjdGLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUMvQzlELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzBJLElBQUksQ0FBQzlFLE1BQU0sQ0FBQyxDQUFDTCxJQUFJLEVBQUU7VUFDN0IwSSx1Q0FBdUMsQ0FBQ0MsSUFBSSxFQUFFO1VBQzlDQyxVQUFVLENBQUMsWUFBVztZQUNsQm5NLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VELElBQUksRUFBRTtZQUNoQnZELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzZDLE1BQU0sRUFBRTtVQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ1g7TUFDSixDQUFDLENBQUM7TUFDRixPQUFPLElBQUk7TUFDWDtNQUNBO01BQ0E7SUFDSjtFQUNKLENBQUMsQ0FBQzs7RUFFRkUsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGdEksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFHdkQ7O0VBRUEsSUFBSXNQLFVBQVUsR0FBRyxFQUFFO0VBRW5CQSxVQUFVLENBQUM5SCxJQUFJLENBQUN2SyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7RUFFeEMsSUFBSTZRLFVBQVUsRUFBRTtJQUdaM04sd0JBQXdCLENBQ25CMkcsSUFBSSxDQUFDO01BQ0ZDLFNBQVMsRUFBRTtRQUNQQyxLQUFLLEVBQUU7TUFDWCxDQUFDO01BQ0RDLFFBQVEsRUFBRSxLQUFLO01BQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCekMsSUFBSSxFQUFFLCtDQUErQztNQUNyRHpGLElBQUksRUFBRSxTQUFTO01BQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO01BQ3RCQyxlQUFlLEVBQUUsSUFBSTtNQUNyQkMsaUJBQWlCLEVBQUUsNENBQTRDO01BQy9EQyxnQkFBZ0IsRUFBRTtJQUN0QixDQUFDLENBQUMsQ0FDRDVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO01BQ2QsSUFBSUEsTUFBTSxDQUFDd0csS0FBSyxFQUFFO1FBQ2RwSyxDQUFDLENBQUN5QixJQUFJLENBQUM7VUFDSEMsSUFBSSxFQUFFLE1BQU07VUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQztVQUN2REssSUFBSSxFQUFFO1lBQ0ZvUSxVQUFVLEVBQVZBO1VBQ0osQ0FBQztVQUNEMU8sT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7WUFDdEI7WUFDQSxJQUFJQSxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2NBRXBCL0UsS0FBSyxDQUFDdkQsSUFBSSxDQUFDaUcsTUFBTSxFQUFFO2NBQ25CekQsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtnQkFDdER6RixPQUFPLEVBQUU7Y0FDYixDQUFDLENBQUM7WUFHTjtVQUNKLENBQUM7VUFDRDJGLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7WUFDNUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWb0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDb0csSUFBSSxFQUMvQjdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtjQUM5QnpGLE9BQU8sRUFBRTtZQUNiLENBQUMsQ0FDSjtVQUNMO1FBQ0osQ0FBQyxDQUFDO01BRU47SUFDSixDQUFDLENBQUM7RUFFVjtBQU1KLENBQUMsQ0FBQztBQUtGbkUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUN2Qzs7RUFFQSxJQUFJc1AsVUFBVSxHQUFHLEVBQUU7RUFFbkJBLFVBQVUsQ0FBQzlILElBQUksQ0FBQ3ZLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztFQUV4QyxJQUFJNlEsVUFBVSxFQUFFO0lBR1ozTix3QkFBd0IsQ0FDbkIyRyxJQUFJLENBQUM7TUFDRkMsU0FBUyxFQUFFO1FBQ1BDLEtBQUssRUFBRTtNQUNYLENBQUM7TUFDREMsUUFBUSxFQUFFLEtBQUs7TUFDZjVCLEtBQUssRUFBRSxnQkFBZ0I7TUFDdkJ6QyxJQUFJLEVBQUUsZ0RBQWdEO01BQ3REekYsSUFBSSxFQUFFLFNBQVM7TUFDZitKLGdCQUFnQixFQUFFLElBQUk7TUFDdEJDLGVBQWUsRUFBRSxJQUFJO01BQ3JCQyxpQkFBaUIsRUFBRSw0Q0FBNEM7TUFDL0RDLGdCQUFnQixFQUFFO0lBQ3RCLENBQUMsQ0FBQyxDQUNENUosSUFBSSxDQUFDLFVBQUM0QixNQUFNLEVBQUs7TUFDZCxJQUFJQSxNQUFNLENBQUN3RyxLQUFLLEVBQUU7UUFDZHBLLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztVQUNIQyxJQUFJLEVBQUUsTUFBTTtVQUNaQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLDhCQUE4QixDQUFDO1VBQ3JESyxJQUFJLEVBQUU7WUFBRW9RLFVBQVUsRUFBVkE7VUFBVyxDQUFDO1VBQ3BCMU8sT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7WUFDdEI7WUFDQSxJQUFJQSxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2NBRXBCN0UsUUFBUSxDQUFDd0MsTUFBTSxFQUFFO2NBQ2pCekQsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtnQkFDdER6RixPQUFPLEVBQUU7Y0FDYixDQUFDLENBQUM7WUFHTjtVQUNKLENBQUM7VUFDRDJGLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7WUFDNUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWb0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDb0csSUFBSSxFQUMvQjdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtjQUFFekYsT0FBTyxFQUFFO1lBQUssQ0FBQyxDQUN0RDtVQUNMO1FBQ0osQ0FBQyxDQUFDO01BRU47SUFDSixDQUFDLENBQUM7RUFFVjtBQU1KLENBQUMsQ0FBQztBQUNGbkUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNxSSxLQUFLLENBQUMsVUFBU3RGLENBQUMsRUFBRTtFQUNyQy9DLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzJOLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBQ0YzTixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM4QyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUN2Q0EsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0VBQ2pCLElBQUlyRyxJQUFJLEdBQUcsSUFBSWdILFFBQVEsQ0FBQ2pKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUVwQyxJQUFJd0csQ0FBQyxHQUFHMkMsNkNBQVksQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUM7RUFHeEMzRSx3QkFBd0IsQ0FDbkIyRyxJQUFJLENBQUM7SUFDRkMsU0FBUyxFQUFFO01BQ1BDLEtBQUssRUFBRTtJQUNYLENBQUM7SUFDREMsUUFBUSxFQUFFLEtBQUs7SUFDZjVCLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkJ6QyxJQUFJLEVBQUUsMkRBQTJEO0lBQ2pFekYsSUFBSSxFQUFFLFNBQVM7SUFDZitKLGdCQUFnQixFQUFFLElBQUk7SUFDdEJDLGVBQWUsRUFBRSxJQUFJO0lBQ3JCQyxpQkFBaUIsRUFBRSxrQ0FBa0M7SUFDckRDLGdCQUFnQixFQUFFO0VBQ3RCLENBQUMsQ0FBQyxDQUNENUosSUFBSSxDQUFDLFVBQUM0QixNQUFNLEVBQUs7SUFDZCxJQUFJQSxNQUFNLENBQUN3RyxLQUFLLEVBQUU7TUFDZDVELENBQUMsQ0FBQzhDLEtBQUssRUFBRTtNQUNUdEosQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO1FBQ0hDLElBQUksRUFBRSxNQUFNO1FBQ1pDLEdBQUcsRUFBRS9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsNEJBQTRCLENBQUM7UUFDbkRLLElBQUksRUFBRUEsSUFBSTtRQUNWc0gsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCN0YsT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7VUFDdEI7VUFDQSxJQUFJQSxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO1lBRXBCN0UsUUFBUSxDQUFDd0MsTUFBTSxFQUFFO1lBQ2pCekQsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtjQUN0RHpGLE9BQU8sRUFBRTtZQUNiLENBQUMsQ0FBQztVQUdOO1VBQ0FxQyxDQUFDLENBQUNpRCxJQUFJLEVBQUU7UUFDWixDQUFDO1FBQ0RLLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7VUFDNUMwQyxDQUFDLENBQUNpRCxJQUFJLEVBQUU7VUFDUnhGLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWb0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDb0csSUFBSSxFQUMvQjdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtZQUFFekYsT0FBTyxFQUFFO1VBQUssQ0FBQyxDQUN0RDtRQUNMO01BQ0osQ0FBQyxDQUFDO0lBRU47RUFDSixDQUFDLENBQUM7QUFJZCxDQUFDLENBQUM7QUFLRm5FLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDcUksS0FBSyxDQUFDLFVBQVN0RixDQUFDLEVBQUU7RUFFekM7O0VBRUEsSUFBSXNQLFVBQVUsR0FBRyxFQUFFO0VBRW5CQSxVQUFVLENBQUM5SCxJQUFJLENBQUN2SyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7RUFFeEMsSUFBSTZRLFVBQVUsRUFBRTtJQUdaM04sd0JBQXdCLENBQ25CMkcsSUFBSSxDQUFDO01BQ0ZDLFNBQVMsRUFBRTtRQUNQQyxLQUFLLEVBQUU7TUFDWCxDQUFDO01BQ0RDLFFBQVEsRUFBRSxLQUFLO01BQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCekMsSUFBSSxFQUFFLCtDQUErQztNQUNyRHpGLElBQUksRUFBRSxTQUFTO01BQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO01BQ3RCQyxlQUFlLEVBQUUsSUFBSTtNQUNyQkMsaUJBQWlCLEVBQUUsNENBQTRDO01BQy9EQyxnQkFBZ0IsRUFBRTtJQUN0QixDQUFDLENBQUMsQ0FDRDVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO01BQ2QsSUFBSUEsTUFBTSxDQUFDd0csS0FBSyxFQUFFO1FBQ2RwSyxDQUFDLENBQUN5QixJQUFJLENBQUM7VUFDSEMsSUFBSSxFQUFFLE1BQU07VUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQztVQUN2REssSUFBSSxFQUFFO1lBQ0ZvUSxVQUFVLEVBQVZBO1VBQ0osQ0FBQztVQUNEMU8sT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7WUFDdEI7WUFDQSxJQUFJQSxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2NBRXBCL0UsS0FBSyxDQUFDdkQsSUFBSSxDQUFDaUcsTUFBTSxFQUFFO2NBQ25CekQsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtnQkFDdER6RixPQUFPLEVBQUU7Y0FDYixDQUFDLENBQUM7WUFHTjtVQUNKLENBQUM7VUFDRDJGLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7WUFDNUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWb0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDb0csSUFBSSxFQUMvQjdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtjQUM5QnpGLE9BQU8sRUFBRTtZQUNiLENBQUMsQ0FDSjtVQUNMO1FBQ0osQ0FBQyxDQUFDO01BRU47SUFDSixDQUFDLENBQUM7RUFFVjtBQU1KLENBQUMsQ0FBQztBQUVGbkUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQzlDeEIsTUFBTSxDQUFDNkwsSUFBSSxDQUFDeE4sbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUNqRWlGLEVBQUUsRUFBRTdHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxTQUFTO0VBQzlCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQztBQUNqQixDQUFDLENBQUM7QUFHRnhCLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDcUksS0FBSyxDQUFDLFVBQVN0RixDQUFDLEVBQUU7RUFJckMsSUFBSXNQLFVBQVUsR0FBRyxFQUFFO0VBRW5CQSxVQUFVLENBQUM5SCxJQUFJLENBQUN2SyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDeEM7RUFDQSxJQUFJNlEsVUFBVSxFQUFFO0lBR1ozTix3QkFBd0IsQ0FDbkIyRyxJQUFJLENBQUM7TUFDRkMsU0FBUyxFQUFFO1FBQ1BDLEtBQUssRUFBRTtNQUNYLENBQUM7TUFDREMsUUFBUSxFQUFFLEtBQUs7TUFDZjVCLEtBQUssRUFBRSxnQkFBZ0I7TUFDdkJ6QyxJQUFJLEVBQUUsdURBQXVEO01BQzdEekYsSUFBSSxFQUFFLFNBQVM7TUFDZitKLGdCQUFnQixFQUFFLElBQUk7TUFDdEJDLGVBQWUsRUFBRSxJQUFJO01BQ3JCQyxpQkFBaUIsRUFBRSw2Q0FBNkM7TUFDaEVDLGdCQUFnQixFQUFFO0lBQ3RCLENBQUMsQ0FBQyxDQUNENUosSUFBSSxDQUFDLFVBQUM0QixNQUFNLEVBQUs7TUFDZCxJQUFJQSxNQUFNLENBQUN3RyxLQUFLLEVBQUU7UUFDZHBLLENBQUMsQ0FBQ3lCLElBQUksQ0FBQztVQUNIQyxJQUFJLEVBQUUsUUFBUTtVQUNkQyxHQUFHLEVBQUUvQixtSEFBTyxDQUFDZ0MsUUFBUSxDQUFDLHFDQUFxQyxDQUFDO1VBQzVESyxJQUFJLEVBQUU7WUFDRm9RLFVBQVUsRUFBVkE7VUFDSixDQUFDO1VBQ0QxTyxPQUFPLEVBQUUsaUJBQVNDLE1BQU0sRUFBRTtZQUN0QjtZQUNBLElBQUlBLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7Y0FFcEI7Y0FDQTlGLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7Z0JBQ3REekYsT0FBTyxFQUFFO2NBQ2IsQ0FBQyxDQUFDO2NBQ0YsSUFBSXhDLEdBQUcsR0FBRy9CLG1IQUFPLENBQUNnQyxRQUFRLENBQUMsMkJBQTJCLENBQUM7Y0FDdkRMLE1BQU0sQ0FBQzJELFFBQVEsQ0FBQzJFLElBQUksR0FBR2xJLEdBQUc7WUFFOUIsQ0FBQyxNQUFNLElBQUlpQyxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2NBQzNCOUYsTUFBTSxDQUFDQyxPQUFPLENBQUNOLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtnQkFDdER6RixPQUFPLEVBQUU7Y0FDYixDQUFDLENBQUM7WUFDTjtVQUNKLENBQUM7VUFDRDJGLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7WUFDNUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWb0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDb0csSUFBSSxFQUMvQjdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtjQUM5QnpGLE9BQU8sRUFBRTtZQUNiLENBQUMsQ0FDSjtVQUNMO1FBQ0osQ0FBQyxDQUFDO01BRU47SUFDSixDQUFDLENBQUM7RUFFVjtFQUlBcEIsQ0FBQyxDQUFDdUYsY0FBYyxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUlGdEksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFHbkQ7O0VBRUEsSUFBSXNQLFVBQVUsR0FBRyxFQUFFO0VBRW5CQSxVQUFVLENBQUM5SCxJQUFJLENBQUN2SyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7RUFFeEMsSUFBSTZRLFVBQVUsRUFBRTtJQUdaM04sd0JBQXdCLENBQ25CMkcsSUFBSSxDQUFDO01BQ0ZDLFNBQVMsRUFBRTtRQUNQQyxLQUFLLEVBQUU7TUFDWCxDQUFDO01BQ0RDLFFBQVEsRUFBRSxLQUFLO01BQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCekMsSUFBSSxFQUFFLDhDQUE4QztNQUNwRHpGLElBQUksRUFBRSxTQUFTO01BQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO01BQ3RCQyxlQUFlLEVBQUUsSUFBSTtNQUNyQkMsaUJBQWlCLEVBQUUsNkNBQTZDO01BQ2hFQyxnQkFBZ0IsRUFBRTtJQUN0QixDQUFDLENBQUMsQ0FDRDVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO01BQ2QsSUFBSUEsTUFBTSxDQUFDd0csS0FBSyxFQUFFO1FBQ2RwSyxDQUFDLENBQUN5QixJQUFJLENBQUM7VUFDSEMsSUFBSSxFQUFFLFFBQVE7VUFDZEMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxxQ0FBcUMsQ0FBQztVQUM1REssSUFBSSxFQUFFO1lBQ0ZvUSxVQUFVLEVBQVZBO1VBQ0osQ0FBQztVQUNEMU8sT0FBTyxFQUFFLGlCQUFTQyxNQUFNLEVBQUU7WUFDdEI7WUFDQSxJQUFJQSxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2NBRXBCL0osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDaUYsU0FBUyxFQUFFLENBQUN4RCxJQUFJLENBQUNpRyxNQUFNLEVBQUU7Y0FDcEN6RCxNQUFNLENBQUNOLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2dCQUN0RHpGLE9BQU8sRUFBRTtjQUNiLENBQUMsQ0FBQztZQUdOLENBQUMsTUFBTSxJQUFJUCxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2NBQzNCOUYsTUFBTSxDQUFDQyxPQUFPLENBQUNOLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtnQkFDdER6RixPQUFPLEVBQUU7Y0FDYixDQUFDLENBQUM7WUFDTjtVQUNKLENBQUM7VUFDRDJGLEtBQUssRUFBRSxlQUFTeEUsS0FBSyxFQUFFekIsVUFBVSxFQUFFQyxXQUFXLEVBQUU7WUFDNUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUNWb0IsS0FBSyxDQUFDK0gsWUFBWSxDQUFDdE0sT0FBTyxDQUFDb0csSUFBSSxFQUMvQjdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtjQUM5QnpGLE9BQU8sRUFBRTtZQUNiLENBQUMsQ0FDSjtVQUNMO1FBQ0osQ0FBQyxDQUFDO01BRU47SUFDSixDQUFDLENBQUM7RUFFVjtBQU1KLENBQUMsQ0FBQztBQUdGbkUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsWUFBVztFQUMvQyxJQUFJdVAsVUFBVSxHQUFHLEVBQUU7RUFFbkJyUyxDQUFDLENBQUNrSyxJQUFJLENBQUNsSyxDQUFDLENBQUMsNkJBQTZCLENBQUMsRUFBRSxZQUFXO0lBQ2hEcVMsVUFBVSxDQUFDOUgsSUFBSSxDQUFDdkssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUMsR0FBRyxFQUFFLENBQUM7RUFDbEMsQ0FBQyxDQUFDO0VBR0YsSUFBSXpDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lDLEdBQUcsRUFBRSxJQUFJLGVBQWUsSUFBSTRQLFVBQVUsSUFBSSxJQUFJLEVBQUU7SUFHeEQ7O0lBU0EzTix3QkFBd0IsQ0FBQzJHLElBQUksQ0FBQztNQUMxQkMsU0FBUyxFQUFFO1FBQ1BDLEtBQUssRUFBRTtNQUNYLENBQUM7TUFDREMsUUFBUSxFQUFFLEtBQUs7TUFDZjVCLEtBQUssRUFBRSxnQkFBZ0I7TUFDdkJ6QyxJQUFJLEVBQUUsc0RBQXNEO01BQzVEekYsSUFBSSxFQUFFLFNBQVM7TUFDZitKLGdCQUFnQixFQUFFLElBQUk7TUFDdEJDLGVBQWUsRUFBRSxJQUFJO01BQ3JCQyxpQkFBaUIsRUFBRSxtQ0FBbUM7TUFDdERDLGdCQUFnQixFQUFFO0lBQ3RCLENBQUMsQ0FBQyxDQUFDNUosSUFBSSxDQUFDLFVBQUM0QixNQUFNLEVBQUs7TUFDaEIsSUFBSUEsTUFBTSxDQUFDd0csS0FBSyxFQUFFO1FBQ2RwSyxDQUFDLENBQUN5QixJQUFJLENBQUM7VUFDSEMsSUFBSSxFQUFFLE1BQU07VUFDWkMsR0FBRyxFQUFFL0IsbUhBQU8sQ0FBQ2dDLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQztVQUN0REssSUFBSSxFQUFFO1lBQUVvUSxVQUFVLEVBQVZBO1VBQVcsQ0FBQztVQUNwQjFPLE9BQU8sRUFBRSxpQkFBU0MsTUFBTSxFQUFFO1lBQ3RCLElBQUlBLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7Y0FDcEI5RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2dCQUFFekYsT0FBTyxFQUFFO2NBQUssQ0FBQyxDQUFDO1lBQ2hGLENBQUMsTUFBTSxJQUFJUCxNQUFNLENBQUNtRyxJQUFJLElBQUksR0FBRyxFQUFFO2NBRTNCOUYsTUFBTSxDQUFDTixPQUFPLENBQUNDLE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQ29HLElBQUksRUFBRXZELE1BQU0sQ0FBQzdDLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtnQkFBRXpGLE9BQU8sRUFBRTtjQUFLLENBQUMsQ0FBQztjQUU1RWEsS0FBSyxDQUFDdkQsSUFBSSxDQUFDaUcsTUFBTSxFQUFFO1lBQ3ZCOztZQUVBO1VBQ0o7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUdOO0FBSUosQ0FBQyxDQUFDOztBQUNGMUgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDbkRBLENBQUMsQ0FBQ3VGLGNBQWMsRUFBRTtFQUNsQixJQUFHdEksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRztJQUNsQ3lDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLDBEQUEwRCxFQUFFLFFBQVEsRUFBRTtNQUFDQyxPQUFPLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFDckc7RUFDSjtFQUNBNUMsTUFBTSxDQUFDNkwsSUFBSSxDQUFDcE4sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQztBQUMvQyxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7OztBQ3pwSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU05QixNQUFNLEdBQUdDLG1CQUFPLENBQUMsNkVBQXVDLENBQUM7QUFDMkM7QUFDMUdDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBQzlCLElBQU0rRSxJQUFJLEdBQUc5RSxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTStFLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFLTSxTQUFTb0wsU0FBUyxDQUFDSCxHQUFHLEVBQUU7RUFFN0I7RUFDRDtFQUNFOztFQUVBdEwsd0JBQXdCLENBQUMyRyxJQUFJLENBQUM7SUFDMUJDLFNBQVMsRUFBRTtNQUNQQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0RDLFFBQVEsRUFBRSxLQUFLO0lBQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCekMsSUFBSSxFQUFFLHFEQUFxRDtJQUMzRHpGLElBQUksRUFBRSxTQUFTO0lBQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCQyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsaUJBQWlCLEVBQUUsNkNBQTZDO0lBQ2hFQyxnQkFBZ0IsRUFBRTtFQUN0QixDQUFDLENBQUMsQ0FBQzVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO0lBQ2hCLElBQUlBLE1BQU0sQ0FBQ3dHLEtBQUssRUFBRTtNQUNkcEssQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO1FBRUhDLElBQUksRUFBRSxRQUFRO1FBQ2RDLEdBQUcsRUFBRS9CLGtIQUFPLENBQUNnQyxRQUFRLENBQUNvTyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7VUFBQyxJQUFJLEVBQUVBLEdBQUcsQ0FBQyxJQUFJLENBQUM7VUFBRSxPQUFPLEVBQUVBLEdBQUcsQ0FBQyxPQUFPO1FBQUMsQ0FBQyxDQUFDO1FBQzdFck0sT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7VUFDdkIsSUFBSUEsTUFBTSxDQUFDbUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNwQjlGLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7Y0FBQ3pGLE9BQU8sRUFBRTtZQUFJLENBQUMsQ0FBQztZQUMxRSxJQUFHNkwsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFFLElBQUksRUFBQztjQUN4QnpPLE1BQU0sQ0FBQzJELFFBQVEsQ0FBQ3dDLE1BQU0sRUFBRTtZQUM1QixDQUFDLE1BQUk7Y0FDRCxJQUFJL0YsR0FBRyxHQUFHL0Isa0hBQU8sQ0FBQ2dDLFFBQVEsQ0FBQ29PLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztjQUM5Q3pPLE1BQU0sQ0FBQzJELFFBQVEsQ0FBQzJFLElBQUksR0FBR2xJLEdBQUc7WUFDOUI7VUFFSixDQUFDLE1BQU0sSUFBSWlDLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDM0I5RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2NBQUN6RixPQUFPLEVBQUU7WUFBSSxDQUFDLENBQUM7VUFDOUU7UUFDSixDQUFDO1FBQ0QyRixLQUFLLEVBQUUsZUFBVXhFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1VBQzdDRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ29CLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQ29HLElBQUksRUFBRTdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtZQUFDekYsT0FBTyxFQUFFO1VBQUksQ0FBQyxDQUFDO1FBQ3RHO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7QUFDTjtBQUdRLFNBQVNtTyxhQUFhLENBQUN0QyxHQUFHLEVBQUU7RUFFaEM7RUFDRDtFQUNFOztFQUVBdEwsd0JBQXdCLENBQUMyRyxJQUFJLENBQUM7SUFDMUJDLFNBQVMsRUFBRTtNQUNQQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0RDLFFBQVEsRUFBRSxLQUFLO0lBQ2Y1QixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCekMsSUFBSSxFQUFFLHFEQUFxRDtJQUMzRHpGLElBQUksRUFBRSxTQUFTO0lBQ2YrSixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCQyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsaUJBQWlCLEVBQUUsNkNBQTZDO0lBQ2hFQyxnQkFBZ0IsRUFBRTtFQUN0QixDQUFDLENBQUMsQ0FBQzVKLElBQUksQ0FBQyxVQUFDNEIsTUFBTSxFQUFLO0lBQ2hCLElBQUlBLE1BQU0sQ0FBQ3dHLEtBQUssRUFBRTtNQUNkcEssQ0FBQyxDQUFDeUIsSUFBSSxDQUFDO1FBRUhDLElBQUksRUFBRSxRQUFRO1FBQ2RDLEdBQUcsRUFBRS9CLGtIQUFPLENBQUNnQyxRQUFRLENBQUNvTyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7VUFBQyxJQUFJLEVBQUVBLEdBQUcsQ0FBQyxJQUFJLENBQUM7VUFBRSxPQUFPLEVBQUVBLEdBQUcsQ0FBQyxPQUFPO1FBQUMsQ0FBQyxDQUFDO1FBQzdFck0sT0FBTyxFQUFFLGlCQUFVQyxNQUFNLEVBQUU7VUFDdkIsSUFBSUEsTUFBTSxDQUFDbUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNwQjlGLE1BQU0sQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUM3QyxPQUFPLENBQUNvRyxJQUFJLEVBQUV2RCxNQUFNLENBQUM3QyxPQUFPLENBQUM2SSxLQUFLLEVBQUU7Y0FBQ3pGLE9BQU8sRUFBRTtZQUFJLENBQUMsQ0FBQztZQUMxRSxJQUFHNkwsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFFLElBQUksRUFBQztjQUN4QnpPLE1BQU0sQ0FBQzJELFFBQVEsQ0FBQ3dDLE1BQU0sRUFBRTtZQUM1QixDQUFDLE1BQUk7Y0FDRCxJQUFJL0YsR0FBRyxHQUFHL0Isa0hBQU8sQ0FBQ2dDLFFBQVEsQ0FBQ29PLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztjQUM5Q3pPLE1BQU0sQ0FBQzJELFFBQVEsQ0FBQzJFLElBQUksR0FBR2xJLEdBQUc7WUFDOUI7VUFFSixDQUFDLE1BQU0sSUFBSWlDLE1BQU0sQ0FBQ21HLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDM0I5RixNQUFNLENBQUNDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDN0MsT0FBTyxDQUFDb0csSUFBSSxFQUFFdkQsTUFBTSxDQUFDN0MsT0FBTyxDQUFDNkksS0FBSyxFQUFFO2NBQUN6RixPQUFPLEVBQUU7WUFBSSxDQUFDLENBQUM7VUFDOUU7UUFDSixDQUFDO1FBQ0QyRixLQUFLLEVBQUUsZUFBVXhFLEtBQUssRUFBRXpCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1VBQzdDRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ29CLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQ29HLElBQUksRUFBRTdCLEtBQUssQ0FBQytILFlBQVksQ0FBQ3RNLE9BQU8sQ0FBQzZJLEtBQUssRUFBRTtZQUFDekYsT0FBTyxFQUFFO1VBQUksQ0FBQyxDQUFDO1FBQ3RHO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7QUFDTixDIiwiZmlsZSI6InRjb21tYW5kZWZyc2NhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQge1xyXG4gICAgU2hvd0Zvcm1FcnJvcnNcclxufSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzXCI7XHJcbmltcG9ydCAqIGFzIGxpc3RBY3Rpb25zIGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGRlbGV0ZUNhYlxyXG59IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tIFwibGFkZGFcIjtcclxudmFyIG51bWVyYWwgPSByZXF1aXJlKFwibnVtZXJhbFwiKTtcclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKGVsZW1lbnQsIGF0dCkge1xyXG4gICAgJC5mbi5zZWxlY3QyLmFtZC5kZWZpbmUoXCJzZWxlY3QyL2kxOG4vZnJcIiwgW10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFJ1c3NpYW5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvckxvYWRpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdmVyQ2hhcnMgPSBhcmdzLmlucHV0Lmxlbmd0aCAtIGFyZ3MubWF4aW11bTtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0YPQtNCw0LvQuNGC0LUgXCIgKyBvdmVyQ2hhcnMgKyBcIiDRgdC40LzQstC+0LtcIjtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVyQ2hhcnMgPj0gMiAmJiBvdmVyQ2hhcnMgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQsFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyQ2hhcnMgPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQvtCyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5wdXRUb29TaG9ydDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGFwZXogXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0NoYXJzICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBjYXJhY3TDqHJlIG91IHBsdXMgcG91ciBmYWlyZSBkZXMgcmVjaGVyY2hlc1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkaW5nTW9yZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1heGltdW1TZWxlY3RlZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCS0Ysg0LzQvtC20LXRgtC1INCy0YvQsdGA0LDRgtGMIFwiICsgYXJncy5tYXhpbXVtICsgXCIg0Y3Qu9C10LzQtdC90YJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5tYXhpbXVtID49IDIgJiYgYXJncy5tYXhpbXVtIDw9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwi0LBcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5tYXhpbXVtID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IFwi0L7QslwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub1Jlc3VsdHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYXVjdW4gcmVzdWx0YXQgdHJvdXZlXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWNoZXJjaGVy4oCmXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgd2luZG93LmF0dCA9IFwiY3VycmVudF9zZWxlY3RfXCIgKyBhdHQ7XHJcbiAgICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBhdHQsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHk6IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtY29sdW1uXCIpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9hbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YS5yZXN1bHRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzOiB3aW5kb3cuYXR0LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC52YWwoYXR0KVxyXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICQoXCIubG9hZC1lclwiKS5mYWRlT3V0KDcwKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIi5kZXRfZm9yXCIpLmZhZGVJbig3MCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRvYXN0ci53YXJuaW5nKCdpbXBvc3NpYmxlIGRlIGNoYXJnZXIgbFxcJ2VudGl0ZXInLCAnRXJyZXVyJywge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG4gICAgLy9hcHBseSB0byBzZWxlY3QyXHJcbiAgICB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6b3BlblwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5lbGVtZW50ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9hbGVydCgpXHJcbiAgICAgICAgJChcIi50dHBcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiAuc2VsZWN0Mi1zZWFyY2gtLWhpZGVcIikuYWZ0ZXIoXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93biB0dHBcIj48aW5wdXQgY2xhc3M9XCJ0dCBzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCIwXCIgYXV0b2NvbXBsZXRlPVwib25cIiBhdXRvY29ycmVjdD1cIm9uXCIgYXV0b2NhcGl0YWxpemU9XCJvblwiIHNwZWxsY2hlY2s9XCJ0cnVlXCIgcm9sZT1cInRleHRib3hcIiAvPjwvc3Bhbj4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLnR0XCIpLnR5cGVXYXRjaCh7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgIHdhaXQ6IDEwMCxcclxuICAgICAgICAgICAgY2FwdHVyZUxlbmd0aDogMixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHZhbHVlbm5uLCBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZWxlY3QyLXJlc3VsdHNcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvblwiPlJlY2hlcmNoZXLigKY8L3A+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2VhcmNoID0gdmFsdWVubm47XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCh2YWx1ZW5ubikpXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVfdGVybVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybTogdmFsdWVubm4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGF0dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWNvbHVtblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlbm5uID09ICQoXCIudHRcIikudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQucmVzdWx0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50LnNlbGVjdDIoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWxlcnQodGhpcy52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KHZhbHVlbm5uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIudHRcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJpbXBvc3NpYmxlIGRlIGNoYXJnZXIgbCdlbnRpdGVyXCIsIFwiRXJyZXVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5lbGVtZW50Lm9uKFwic2VsZWN0MjpjbG9zZVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJChcIiN1YXRfY29tbWFuZGVmcnNkZXRfcXVhbnRpdGVcIikuZm9jdXMoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIHdpbmRvdy5lbGVtZW50Lm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gZS5wYXJhbXMuZGF0YTtcclxuICAgICAgICAkKFwiLnByaXh1bml0YWlyZVwiKS52YWwoZGF0YS5wcml4QWNoYXQpO1xyXG4gICAgICAgICQoXCIudHZhXCIpLnZhbChkYXRhLnR2YSk7XHJcbiAgICAgICAgJChcIi5yZW1pc2VcIikudmFsKGRhdGEucmVtaXNlKTtcclxuICAgICAgICAkKFwiLnNlbGVjdDJfdW5pdGVcIikudmFsKGRhdGEudW5pdGUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNlbGVjdDItY29udGFpbmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIudHRcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTtcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImNvbW1hbmRlZnJzY2FiX2xpc3RcIikgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJsZS5oYXNPd25Qcm9wZXJ0eSgnc2V0dGluZ3MnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gdGFibGUuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgcGFnZUxlbmd0aDogMTUsXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgb3JkZXI6IFtcclxuICAgICAgICBbMCwgXCJkZXNjXCJdXHJcbiAgICBdLFxyXG4gICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGQtY2hlY2stY21kIHBkLWNtZCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxyXG4gICAgICAgICAgICB0YXJnZXRzOiBbMF0sXHJcbiAgICAgICAgICAgIG5hbWU6ICd0YWIuaWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZC1jb2RlLWNtZCBwZC1jbWRcIixcclxuICAgICAgICAgICAgbmFtZTogJ3RhYi5jb2RlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxyXG4gICAgICAgICAgICBuYW1lOiAndGFiLmRhdGVjb21tYW5kZScsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BkLWNtZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxNSVcIixcclxuICAgICAgICAgICAgbmFtZTogJ3RhYi5yZWZEb2NBc3NvJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGQtY21kJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZC1vYnNlcnZhdGlvbi1jbWQgcGQtY21kXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjMwJVwiLFxyXG4gICAgICAgICAgICBuYW1lOiAndGFiLm9ic2VydmF0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgIG5hbWU6ICd0YWIuZm91cm5pc3NldXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwZC1jbWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXQgdGQtaHQgcGQtY21kXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxyXG4gICAgICAgICAgICBuYW1lOiAndGFiLmh0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJjb2xvbm5lLWdyYXMgdGQtdHZhIHBkLWNtZFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgICAgICAgbmFtZTogJ3RhYi50dmEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm1udC1mb3JtYXQgdGQtdHRjIHBkLWNtZFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgICAgICAgbmFtZTogJ3RhYi50dGMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImNvbG9ubmUtZ3JhcyBwZC1jbWRcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgIG5hbWU6ICd0YWIuZGVtX2NvZGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJiciBwZC1jbWRcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZhYyBwZC1jbWRcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJnIHBkLWNtZFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMCVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmcgcGQtY21kXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdGF0dXQgcGQtY21kXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgIG5hbWU6ICd0YWIucG9zaXRpb25fYWN0dWVsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiNSVcIlxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgY29sdW1uRGVmczogW3tcclxuICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICB0YXJnZXRzOiAxNSxcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKHQsIGEsIGwsIHMpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBcIlwiO1xyXG4gICAgICAgICAgICB0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluayA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5fcm91dGVfbGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBcImhyZWY9J1wiICsgZWxlbWVudC5fcm91dGVfbGluayArIFwiJ1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEgKyBcIjxsaT48YSBcIiArIGxpbmsgKyBcIiAgZGF0YS10cmFuc2l0aW9uPSdcIiArIGVsZW1lbnQubmFtZSArIFwiJyBkYXRhLWlkPSdcIiArIGVsZW1lbnQuaWQgKyBcIicgZGF0YS10aXRsZT0nXCIgKyBlbGVtZW50LnRpdHJlICsgXCInIGNsYXNzPSdkcm9wZG93bi1pdGVtICBcIiArIGVsZW1lbnQuY2xhc3MgKyBcIiBcIiArIGVsZW1lbnQuaWRDcyArIFwiJyA+PGkgY2xhc3M9J2ZhIFwiICsgZWxlbWVudC5pY29uICsgXCInID48L2k+IFwiICsgZWxlbWVudC50aXRyZSArIFwiPC9hPjwvbGk+XCJcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAnXFx0PGRpdiBjbGFzcz1cImRyb3Bkb3duIGRyb3Bkb3duLWlubGluZSBjZW50ZXJcIj4gXFx0IDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIlwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj4gXFx0IDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tbWRcIj4gXFx0ICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHZlcnNpb249XCIxLjFcIiBjbGFzcz1cInN2Zy1jb2xvclwiPiA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPiA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIvPiA8Y2lyY2xlIGZpbGw9XCIjMDAwMDAwXCIgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIyXCIvPiA8Y2lyY2xlIGZpbGw9XCIjMDAwMDAwXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMlwiLz4gPGNpcmNsZSBmaWxsPVwiIzAwMDAwMFwiIGN4PVwiMTlcIiBjeT1cIjEyXCIgcj1cIjJcIi8+IDwvZz48L3N2Zz4gXFx0IDwvc3Bhbj4gXFx0IDwvYT4gPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1zbSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+IFxcdCA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51IHNob3cgZHJwLWxpc3RcIiB4LXBsYWNlbWVudD1cImJvdHRvbS1zdGFydFwiPiA8bGkgY2xhc3M9XCJuYXZpLWhlYWRlciBmb250LXdlaWdodC1ib2xkZXIgdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLXhzIHRleHQtcHJpbWFyeSBwYi0yXCI+Q2hvaXNpciBvcGVyYXRpb24gOjwvbGk+JyArIGRhdGEgKyAnIDwvdWw+IDwvZGl2PiBcXHQ8L2Rpdj5cXHQnO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XSxcclxuICAgIC8vIGRvbTogJ2xCZnJ0aXAnLFxyXG4gICAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgICBkb206ICc8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJmPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgLy8gZml4ZWRIZWFkZXI6IHRydWUsXHJcbiAgICAvLyBzY3JvbGxYOiB0cnVlLFxyXG59KTtcclxudmFyIHNlbGVjdDJfZG9zc2llcnMgPSAkKFwiLnNlbGVjdDJfbGl2cmFpc29uXCIpLnNlbGVjdDIoe1xyXG4gICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggTGl2cmFpc29uXCIsXHJcbiAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbihlLCBzZXR0aW5ncykge1xyXG4gICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coc3QpO1xyXG4gICAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gICAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAgIC8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFtdLCBbXSk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcbi8qY29sdW1uIDEgZGUgZGF0YXRibGUgc2VhcmNoKi9cclxuXHJcbiQoXCIucmVtb3ZlLWZpbHRlclwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiAgJCgnI2dyaWQnKS5vbignY2xpY2snLCAnLnN0YXR1dF9vcCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gdmFyIG5hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuIHZhciBpZCA9ICQodGhpcykuYXR0cigncm9sJyk7ICovXHJcbi8vYWxlcnQobmFtZStcIlwiK2lkKTtcclxuJChcIi5zZWxlY3QyX2RlbW9fM1wiKS5zZWxlY3QyKHtcclxuICAgIHBsYWNlaG9sZGVyOiBcIkFjdGlvblwiLFxyXG4gICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxufSk7XHJcblxyXG4kKFwiLmxpc3RfYWN0aW9uc1wiKS5jaGFuZ2UoZnVuY3Rpb24oZSkge30pO1xyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5jb21wdGVNYXNzZVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gICAgLy8gU2ltdWxhdGUgZm9ybSBkYXRhLCBidXQgb25seSBpbmNsdWRlIHRoZSBzZWxlY3RlZCBzcG9ydCB2YWx1ZS5cclxuICAgIHZhciBkYXRhID0ge307XHJcbiAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkZm9ybS5hdHRyKFwibWV0aG9kXCIpKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgICAgICAgJChcIi5jb21wdGVSdWJyaXF1ZVwiKS5yZXBsYWNlV2l0aCgkKGh0bWwpLmZpbmQoXCIuY29tcHRlUnVicmlxdWVcIikpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbXB0ZVJ1YnJpcXVlXCIpLnBhcmVudCgpLmZpbmQoXCIuc2VsZWN0MlwiKS5ub3QoXCI6Zmlyc3RcIikuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLm5ldyAsIC5lZGl0XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmNvbXB0ZU1hc3NlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciAkZm9ybSA9ICQodGhpcykuY2xvc2VzdChcImZvcm1cIik7XHJcbiAgICAvLyBTaW11bGF0ZSBmb3JtIGRhdGEsIGJ1dCBvbmx5IGluY2x1ZGUgdGhlIHNlbGVjdGVkIHNwb3J0IHZhbHVlLlxyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy9hbGVydCgkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcbiAgICBjb25zb2xlLmxvZygkZm9ybS5hdHRyKFwibWV0aG9kXCIpKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgICAgICAgJChcIi5jb21wdGVSdWJyaXF1ZVwiKS5yZXBsYWNlV2l0aCgkKGh0bWwpLmZpbmQoXCIuY29tcHRlUnVicmlxdWVcIikpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbXB0ZVJ1YnJpcXVlXCIpLnBhcmVudCgpLmZpbmQoXCIuc2VsZWN0MlwiKS5ub3QoXCI6Zmlyc3RcIikuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLm5ldyAsIC5lZGl0XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmNvbXB0ZVJ1YnJpcXVlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICAgIHZhciBkYXRhID0ge307XHJcbiAgICBkYXRhWyQodGhpcykuYXR0cihcIm5hbWVcIildID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGRhdGFbJChcIi5jb21wdGVNYXNzZVwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLmNvbXB0ZU1hc3NlXCIpLnZhbCgpO1xyXG4gICAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkZm9ybS5hdHRyKFwiYWN0aW9uXCIpLFxyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihodG1sKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbXB0ZVBvc3RlXCIpLnJlcGxhY2VXaXRoKCQoaHRtbCkuZmluZChcIi5jb21wdGVQb3N0ZVwiKSk7XHJcbiAgICAgICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29tcHRlUG9zdGVcIikucGFyZW50KCkuZmluZChcIi5zZWxlY3QyXCIpLm5vdChcIjpmaXJzdFwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoXCIubmV3ICwgLmVkaXRcIikub24oXCJjaGFuZ2VcIiwgXCIuY29tcHRlUG9zdGVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgZGF0YVskKFwiLmNvbXB0ZU1hc3NlXCIpLmF0dHIoXCJuYW1lXCIpXSA9ICQoXCIuY29tcHRlTWFzc2VcIikudmFsKCk7XHJcbiAgICBkYXRhWyQoXCIuY29tcHRlUnVicmlxdWVcIikuYXR0cihcIm5hbWVcIildID0gJChcIi5jb21wdGVSdWJyaXF1ZVwiKS52YWwoKTtcclxuICAgIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgICAgICAgJChcIi5jb21wdGVcIikucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKFwiLmNvbXB0ZVwiKSk7XHJcbiAgICAgICAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIuY29tcHRlXCIpLnBhcmVudCgpLmZpbmQoXCIuc2VsZWN0MlwiKS5ub3QoXCI6Zmlyc3RcIikuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKFwiLm5ld1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9pbnNlcnRcIiksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2NvbW1hbmRlZnJzY2FiX3Nob3dcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy9cclxuJChcIi5uZXdfYWNvbXB0ZVwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9hY29tcHRlX25ld1wiKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICQoJy5tZXNzYWdlLXN1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtd2FybmluZyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPsOXPC9idXR0b24+PHN0cm9uZz5cIiArIHJlc3VsdC5tZXNzYWdlLnRpdGxlICsgXCI8L3N0cm9uZz4gXCIgKyByZXN1bHQubWVzc2FnZS50ZXh0ICsgXCI8L3N0cm9uZz4uPC9kaXY+XCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vbC5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfY29uc3VsdGVfYWNvbXB0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbnZhciBhcnJheV9kZXRhaWwgPSBbXTtcclxuJChcIi5uZXdcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIi5kZXRfZm9yXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0b3IpO1xyXG4gICAgLy8gYWxlcnQoKVxyXG4gICAgdmFyIGV4c2l0ID0gMDtcclxuICAgICQuZWFjaChhcnJheV9kZXRhaWwsIGZ1bmN0aW9uKGksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCQoXCIjdWF0X2NvbW1hbmRlZnJzZGV0X2FydGljbGVcIikudmFsKCkgPT0gdmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgZXhzaXQgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgaWYgKGV4c2l0ID09IDApIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2RldF9uZXdcIiksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmFydGljbGVcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lTm8gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5X2RldGFpbC5wdXNoKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHZhID0gdmFsdWUudHZhICsgXCIgJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtaXNlID0gdmFsdWUucmVtaXNlICsgXCIgJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR2YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YXRpb24gPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDx0cj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgKyAxKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50aXRyZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucHJpeHVuaXRhaXJlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5tb250YW50UmVtaXNlLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD48YSBjbGFzcz0nZGVsZXRlX2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtbmF2eSc+PC9pPjwvYT48L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU5vKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbChudWxsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYXJ0aWNsZXNcIikudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiN1YXRfY29tbWFuZGVmcnNjYWJfZGV0YWlsXCIpLnZhbChKU09OLnN0cmluZ2lmeShhcnJheV9kZXRhaWwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDZSBwcm9kdWl0IGV4c2l0ZSBkZWphIFwiLCBcIkVycm9yISBcIiwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXdcIikub24oXCJjbGlja1wiLCBcIi5kZWxldGVfZWxlbWVudFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBhcnJheV9kZXRhaWwuc3BsaWNlKCQodGhpcykuYXR0cihcImlkXCIpLCAxKTtcclxuXHJcbiAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHkgdHJcIikucmVtb3ZlKCk7XHJcbiAgICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIHJlbWlzZSA9IHZhbHVlLnJlbWlzZSArIFwiICVcIjtcclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgdHZhID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBteV9yb3cgPVxyXG4gICAgICAgICAgICBcIiA8dHI+PHRkPlwiICtcclxuICAgICAgICAgICAgKGkgKyAxKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnRpdHJlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnF1YW50aXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dW5pdGFpcmUudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgcmVtaXNlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLm1vbnRhbnRSZW1pc2UudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtbmF2eSc+PC9pPjwvYT48L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gICAgICAgIGxpbmVObysrO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLypcclxuICpcclxuICogRWRpdCBvcGVyYXRpb25zXHJcbiAqXHJcbiAqL1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl91cGRhdGVcIiwge1xyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAvKiBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLmJvZDJcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV90eXBlXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX3R5cGVfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKFwiLmVycm9ycy1saXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIC8qIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm0gI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcigoXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1fZGVsZXRlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9IGR0YS5nZXQoXCJfdG9rZW5cIik7XHJcbiAgICAvLyAgICB2YXIgaWQgPSAkKFwiaW5wdXRbbmFtZT1faWRdXCIpLnZhbCgpO1xyXG4gICAgLy8gICAgdmFyIHRva2VuID0gJChcImlucHV0W25hbWU9X3Rva2VuXVwiKS52YWwoKTtcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNkZXRfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhID09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zd2FsKHJlc3VsdC5tZXNzYWdlLnRpdGxlLCByZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8vKlxyXG4vLyAqXHJcbi8vICogYWZmaWNoZXIgbGEgZm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gIGQndW4gbm91dmVhdSBhcnRpY2xlXHJcbi8vICpcclxuLy8gKi9cclxuLy9cclxuLy8kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9lZGl0JywgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuLy8gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuLy8gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbi8vXHJcbi8vICAgICQuYWpheCh7XHJcbi8vICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbi8vICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VhX3RfY29tbWFuZGVmcnNkZXRfZWRpdF9kZXRhaWwnLCB7J2lkJzogaWR9KSxcclxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgICAgICB2YXIgc2xoID0gc2VsZWN0b3IucGFyZW50KCkucGFyZW50KCkuZW1wdHkoKS5hcHBlbmQoXCI8dGQgY29sc3Bhbj0nOSc+XCIgKyByZXN1bHQgKyBcIjwvdGQ+XCIpO1xyXG4vLyAgICAgICAgICAgIC8vIHNsaC5hcHBlbmQocmVzdWx0KVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICB9KTtcclxuLy9cclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL30pO1xyXG5cclxuLypcclxuICpcclxuICogYWZmaWNoZXIgbGEgZm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gIGQndW4gbm91dmVhdSBhcnRpY2xlXHJcbiAqXHJcbiAqL1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9lZGl0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuXHJcbiAgICB2YXIgcm93X2luZGV4ID0gJCh0aGlzKS5jbG9zZXN0KFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmluZGV4KCk7XHJcbiAgICAvL3ZhciBjb2xfaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNkZXRfZWRpdF9kZXRhaWxcIiwge1xyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gJCgnLnRhYmxlLWRldGFpbCB0cicpLmVxKHJvd19pbmRleCsxKS5hZGRDbGFzcygndGFibGUtdHItc3R5bGUnKTtcclxuICAgICAgICAgICAgJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKVxyXG4gICAgICAgICAgICAgICAgLmVxKHJvd19pbmRleClcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInRhYmxlLXRyLXN0eWxlXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChcIjx0ZCBjb2xzcGFuPScxMCc+XCIgKyByZXN1bHQgKyBcIjwvdGQ+XCIpO1xyXG4gICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmRldF9mb3JcIilcclxuICAgICAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgICAgIC5hZnRlcihcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWQtZXJcIj48ZGl2IGNsYXNzPVwibGRzLWVsbGlwc2lzXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKFxyXG4gICAgICAgICAgICAgICAgJCgkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmVxKHJvd19pbmRleCkpLmZpbmQoXCIuYXJ0aWNsZXNcIiksXHJcbiAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiLmFydGljbGVzXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImlmLXNlbGVjdGVkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vJChcIi5sb2FkLWVyXCIpLmZhZGVPdXQoKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgLy8gJCgnLmRldF9mb3InKS5mYWRlSW4oMjAwKVxyXG4gICAgICAgICAgICAkKFwiLmJvZFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiLnNwclwiKS5mYWRlSW4oKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVcIiksXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBLVERhdGF0YWJsZXNTZWFyY2hPcHRpb25zQWR2YW5jZWRTZWFyY2guaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICBhbGVydChyb3dfaW5kZXgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIHZhciBzbGggPSBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5lbXB0eSgpLmFwcGVuZChcIjx0ZCBzdHlsZT0nZGlzcGxheTogbm9uZTsnPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vKlxyXG4gKlxyXG4gKiBFbnJlZ2lzdHJlciAgbGEgZm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gIGQnYXJ0aWNsZVxyXG4gKlxyXG4gKi9cclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZm9ybVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGR0YSk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNkZXRfdXBkYXRlX2RldGFpbFwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIC8qICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLyphZmZpY2hlciBsYSBmb3JtdWxhaXJlIGQnYWpvdXQgZCd1biBub3V2ZWF1IGFydGljbGUgKi9cclxuXHJcbi8vJCgnLmVkaXQtbmV3LWFydGljbGUtYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgJCgnLmVkaXQtbmV3LWFydGljbGUnKS5zaG93KCk7XHJcbi8vICAgICQodGhpcykuaGlkZSgpO1xyXG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vfSk7XHJcblxyXG4kKFwiLm5ldy1hcnRpY2xlLWJ0blwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAkKFwiLnJlbW92ZS1pdGVtLWVkaXQtYWRkXCIpLnJlbW92ZUNsYXNzKCdyZW1vdmUtaXRlbS1lZGl0LWFkZCcpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLypBam91dGVyIHVuIG5vdXZlYXUgYXJ0aWNsZSBkYW5zIGxhIHBhZ2UgZGUgbW9kaWZpY2F0aW9uICovXHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1fYWRkX2FydGljbGVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZF9jYWJcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2RldF9pbnNlcnRcIiwge1xyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAvKiAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5lZGl0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuc2hvdy1tZVwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5hY3Rpb25zXCIpLm9uKFwiY2xpY2tcIiwgXCIuY2xvc2UtbWVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8kKCcuY2xvc2UtbWUnKS5jbGljayhmdW5jdGlvbiAoZSl7XHJcbiAgICAkKFwiLmFjdGlvbnNcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLypcclxuICpcclxuICogYWZmaWNoZXIgbGEgZm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gIGQndW4gbm91dmVhdSBhcnRpY2xlXHJcbiAqXHJcbiAqL1xyXG5cclxuLy8kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgY29uc29sZS5sb2coJ2hlcmUnKTtcclxuLy8gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcclxuLy8gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbi8vICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICB0YWJsZS4kKCd0ci5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4vLyAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuLy8gICAgfVxyXG4vL30pO1xyXG5cclxudmFyIG1lbSA9ICQoXCIjZGF0YV8xIC5pbnB1dC1ncm91cC5kYXRlXCIpLmRhdGVwaWNrZXIoe1xyXG4gICAgdG9kYXlCdG46IFwibGlua2VkXCIsXHJcbiAgICBrZXlib2FyZE5hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgZm9yY2VQYXJzZTogZmFsc2UsXHJcbiAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxyXG4gICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG59KTtcclxuXHJcbnZhciB5ZWFyc0FnbyA9IG5ldyBEYXRlKCk7XHJcbnllYXJzQWdvLnNldEZ1bGxZZWFyKHllYXJzQWdvLmdldEZ1bGxZZWFyKCkgLSAyMCk7XHJcblxyXG4kKFwiI3NlbGVjdG9yXCIpLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIHllYXJzQWdvKTtcclxuXHJcbiQoXCIuYWN0aW9uc1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtX3N0YXR1dFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX3N0YXR1dFwiLCB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2codGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtX3N0YXR1dCAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJChcIi5hY3Rpb25zXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fc3RhdHV0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpWzBdO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfY2hlY2tcIiwge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm1fc3RhdHV0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5fdF9hZmZhaXJlX3F1aWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hZmZhaXJlX25ld19xdWlja1wiKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtX3RfYWZmYWlyZV9xdWlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIilbMF07XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWZmYWlyZV9uZXdfcXVpY2tfaW5zZXJ0XCIpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAvKiAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLlwiICsgc2VsZWN0b3IgKyBcIiAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfbmV3XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFmZmFpcmVcIikucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKFwiLmFmZmFpcmVcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIjX2VkaXRcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInRfY29tbWFuZGVmcnNjYWJfZWRpdFwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgIGFsZXJ0KCdPcGVyYXRpb24gbm9uIGF1dG9yaWUnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvbjJcIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfc2hvd1wiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInRfY29tbWFuZGVmcnNjYWJfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwid2FybmluZ1wiLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJChcIiNfaW1wcmltZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJjb21tYW5kZUlkXCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2NvbW1hbmRlZnJzY2FiX2RvY3VtZW50X3BkZlwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfc3RhdHV0XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfc3RhdHV0XCIsIHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuJChcIiNfY2hlY2tcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIC8vdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcImNvbW1hbmRlSWRcIik7XHJcbiAgICAvLyAgYWxlcnQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX2NoZWNrXCIsIHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuYWN0aW9uc1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtX2NoZWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIC8vIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIHZhciBpZCA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiY29tbWFuZGVJZFwiKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX2NoZWNrXCIsIHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiAgICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm1fc3RhdHV0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIiNfYXJjaGl2ZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBBcmNoaXZlciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWFyY2hpdmUnPjwvaT4gT3VpLCBBcmNoaXZlciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfY29tbWFuZGVmcnNjYWJfYXJjaGl2ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBcIndhcm5pbmdcIiwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4vKiQoJyNfaW1wcmltZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gXHJcbiBpZiAoaWQpIHtcclxuIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuIHNob3dDbGFzczoge1xyXG4gcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiB9LFxyXG4gcG9zaXRpb246ICd0b3AnLFxyXG4gdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiB0eXBlOiBcIndhcm5pbmdcIixcclxuIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3ZwZGZfc2hvdycsIHsnaWQnOiBpZH0pO1xyXG4gLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuIC8vIGNvbnNvbGUubG9nKHVybClcclxuIH1cclxuIH0pO1xyXG4gfSBlbHNlIHtcclxuIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiB9XHJcbiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiB9KTsqL1xyXG5cclxuXHJcbiQoXCIuZ2VuZXJlclwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJjb21tYW5kZUlkXCIpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX2FwcGx5X2dlbmVyZXJcIiwge1xyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwid2FybmluZ1wiLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmVyKCkge1xyXG4gICAgJChcIi5fZ2VuZXJlcl9mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICB2YXIgaWQgPSAkKFwiaW5wdXRbbmFtZT1faWRdXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgICAgICBsLnN0YXJ0KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfZ2VuZXJlcl9pbnNlcnRcIiwge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHJlc3VsdC5lcnJvcnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyV2lkdG91dFByb2dyZXNzLndhcm5pbmcodmFsdWUsIFwid2FybmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI015TW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuJChcIiNfZXhwb3J0ZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJwaHBvZmZpY2VFeHBvcnRlclwiKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLmFjdGlvbnNcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV9leHBvcnRlclwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICAvL3ZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInBocG9mZmljZUV4cG9ydGVyXCIpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKFwiLmZvcm1fZXhwb3J0ZXJcIikudW5iaW5kKCBcInN1Ym1pdFwiICkuc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5fZmljaGllcnNcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gIGFsZXJ0KCk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIilbMF07XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX2ZpY2hpZXJzXCIsIHtcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5fZGVsZXRlX2ZpY2hpZXJcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfZmljaGllcnNfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJJbXBvc3NpYmxlIGQnZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLCBcIndhcm5pbmdcIiwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuZm9ybV9nZW5lcmVyX2ZhY3R1cmVcIikub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgLy92YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiAgICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcImNvbW1hbmRlSWRcIik7XHJcbiAgICAvLyAgIGFsZXJ0KGlkKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX2ZhY3R1cmVfc2hvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgYWxlcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiAkKFwiLmVycm9yc19saXN0XCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JzID0gWydcXFxcXScsICdcXFxcWyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oJ3wnKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBhcnJbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmVycm9yc19saXN0XCIpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5cIiArIGNvbHVtbk5hbWUgKyBcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+IFwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwid2FybmluZ1wiLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvd1wiKS5EYXRhVGFibGUoe1xyXG4gICAgc2Nyb2xsWTogXCIyMDBweFwiLFxyXG4gICAgc2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcbiAgICBwYWdpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbnZhciB0YWJsZVNob3czID0gJChcIiNkYXRhdGFibGUtc2hvdzNcIikuRGF0YVRhYmxlKHtcclxuICAgIHBhZ2luZzogZmFsc2VcclxufSk7XHJcbnZhciB0YWJsZVNob3c0ID0gJChcIi5kYXRhdGFibGUtc2hvdzRcIikuRGF0YVRhYmxlKHtcclxuICAgIHBhZ2luZzogZmFsc2VcclxufSk7XHJcbnZhciB0YWJsZVNob3cyID0gJChcIiNkYXRhdGFibGUtc2hvdzJcIikuRGF0YVRhYmxlKHtcclxuICAgIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICAgIHNjcm9sbENvbGxhcHNlOiB0cnVlLFxyXG4gICAgcGFnaW5nOiBmYWxzZSxcclxuICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmRldF9mb3JcIilcclxuICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgLmFmdGVyKFxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWQtZXJcIj48ZGl2IGNsYXNzPVwibGRzLWVsbGlwc2lzXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICAgICApO1xyXG4gICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoJChcIi5hcnRpY2xlc1wiKSwgXCJcIik7XHJcbn0pO1xyXG5cclxuJChcIi5tb2RhbEFjdGl2YXRlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5ib2RcIikuZW1wdHkoKTtcclxuICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlXCIpLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICBLVERhdGF0YWJsZXNTZWFyY2hPcHRpb25zQWR2YW5jZWRTZWFyY2guaW5pdCgpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxudmFyIGNvZGUgPSBudWxsO1xyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2t0X3RhYmxlXzEgdGJvZHkgdHJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAvL2FsZXJ0KCQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cihcInVuaXRlXCIpKVxyXG4gICAgY29kZSA9ICQodGhpcykuYXR0cihcImNvZGVcIik7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LmVsZW1lbnQuZmluZChcclxuICAgICAgICAgICAgXCJvcHRpb25bdmFsdWU9J1wiICsgJCh0aGlzKS5hdHRyKFwiaWRcIikgKyBcIiddXCJcclxuICAgICAgICApLmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgICAgd2luZG93LmVsZW1lbnQudmFsKCQodGhpcykuYXR0cihcImlkXCIpKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICQoXCIucHJpeHVuaXRhaXJlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJwdVwiKSk7XHJcblxyXG4gICAgICAgICQoXCIudHZhXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJ0dmFcIikpO1xyXG4gICAgICAgICQoXCIucmVtaXNlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJyZW1pc2VcIikpO1xyXG4gICAgICAgICQoXCIuc2VsZWN0Ml91bml0ZVwiKS52YWwoJCh0aGlzKS5hdHRyKFwidW5pdGVcIikpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIERPTSBPcHRpb24gYW5kIHByZS1zZWxlY3QgYnkgZGVmYXVsdFxyXG4gICAgICAgIHZhciBuZXdPcHRpb24gPSBuZXcgT3B0aW9uKFxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJ0ZXh0XCIpLFxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gQXBwZW5kIGl0IHRvIHRoZSBzZWxlY3RcclxuICAgICAgICB3aW5kb3cuZWxlbWVudC5hcHBlbmQobmV3T3B0aW9uKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICQoXCIucHJpeHVuaXRhaXJlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJwdVwiKSk7XHJcbiAgICAgICAgJChcIi50dmFcIikudmFsKCQodGhpcykuYXR0cihcInR2YVwiKSk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJ1bml0ZVwiKSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAkKFwiLnJlbWlzZVwiKS52YWwoJCh0aGlzKS5hdHRyKFwicmVtaXNlXCIpKTtcclxuICAgICAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG59KTtcclxuKFwidXNlIHN0cmljdFwiKTtcclxudmFyIEtURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaCA9IChmdW5jdGlvbigpIHtcclxuICAgICQuZm4uZGF0YVRhYmxlLkFwaS5yZWdpc3RlcihcImNvbHVtbigpLnRpdGxlKClcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuICQodGhpcy5oZWFkZXIoKSkudGV4dCgpLnRyaW0oKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHQ7XHJcbiAgICAgICAgICAgICh0ID0gJChcIiNrdF90YWJsZV8xXCIpLkRhdGFUYWJsZSh7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlX3RhYmxlXCIpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBwYWdlTGVuZ3RoOiAyNSxcclxuICAgICAgICAgICAgICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhcnQuaWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FydC5jb2RlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhcnQudGl0cmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RhYi5hYnJldmlhdGlvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbjEuZGVzaWduYXRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ24yLmRlc2lnbmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICduMy5kZXNpZ25hdGlvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbjQuZGVzaWduYXRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAnY3JlYXRlZFJvdyc6IGZ1bmN0aW9uKHJvdywgZGF0YSwgZGF0YUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChyb3cpLmF0dHIoJ3RleHQnLCBkYXRhWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cigncHUnLCBkYXRhWzhdKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cigndHZhJywgZGF0YVs5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChyb3cpLmF0dHIoJ3VuaXRlJywgZGF0YVsxMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cignY29kZScsIGRhdGFbMTFdKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHJvdykuYXR0cigncmVtaXNlJywgZGF0YVsxMl0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0Lm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbihlLCBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coc3QpO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMCwgMSwgMywgMiwgNCwgNSwgNiwgN10sIFtdKTtcclxuICAgICAgICAgICAgICAgIC8vQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFsyXSwgW10pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufSkoKTtcclxuJC5leHRlbmQodHJ1ZSwgJC5mbi5kYXRhVGFibGUuZGVmYXVsdHMub0xhbmd1YWdlLm9QYWdpbmF0ZSwge1xyXG4gICAgc05leHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIiA+PC9pPicsXHJcbiAgICBzUHJldmlvdXM6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiID48L2k+JyxcclxufSk7XHJcblxyXG4kKFwiLmFjb21wdGVcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV9hY29tcHRlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9hY29tcHRlXCIsIHtcclxuICAgICAgICAgICAgaWQ6ICQoXCIuY29tbWFuZGVfaWRcIikudmFsKCksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5wb3VyY2VudGFnZVwiKS5rZXl1cChmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgJC5pc051bWVyaWMoJChcIi5tb250YW50Q29tbWFuZGVcIikudmFsKCkpIHx8XHJcbiAgICAgICAgJChcIi5tb250YW50Q29tbWFuZGVcIikudmFsKCkgPiAwXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICQuaXNOdW1lcmljKCQodGhpcykudmFsKCkpICYmXHJcbiAgICAgICAgICAgICQodGhpcykudmFsKCkgPiAwICYmXHJcbiAgICAgICAgICAgICQodGhpcykudmFsKCkgPD0gMTAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQoXCIubW9udGFudFwiKS52YWwoKCQoXCIubW9udGFudENvbW1hbmRlXCIpLnZhbCgpICogJCh0aGlzKS52YWwoKSkgLyAxMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmFsZXVyIGluY29ycmVjdCBcIiwgXCJFcnJldXJcIiwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS52YWwobnVsbCk7XHJcbiAgICAgICAgICAgICQoXCIubW9udGFudFwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgXCJJbXBvc3NpYmxlIGRlIGdlbmVyZXIgdW4gYWNjb21wdGUgc3VyIHVuIG1vdGFudCBpbmZlcmlldXIgb3UgZWdhbGUgYSB6ZXJvIFwiLFxyXG4gICAgICAgICAgICBcIkVycmV1clwiLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuLy9cclxuLy8kKCcjZ3JpZC1yZWNlcHRpb24nKS5vblxyXG4vLyQoJy5hTGl2cmVyJykua2V5dXAoZnVuY3Rpb24gKGUpIHtcclxuXHJcbiQoXCIjZ3JpZC1yZWNlcHRpb25cIikub24oXCJrZXl1cFwiLCBcIi5hTGl2cmVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAkKFwiLmFMaXZyZXJcIikuZWFjaChmdW5jdGlvbihkLCBqKSB7XHJcbiAgICAgICAgbGV0IHR2YSA9ICQodGhpcykuYXR0cihcImRhdGEtdHZhXCIpIC8gMTAwICsgMTtcclxuICAgICAgICB0b3RhbCArPSB0dmEgKiAkKHRoaXMpLmF0dHIoXCJkYXRhLXByaXhVbml0YWlyZVwiKSAqICQodGhpcykudmFsKCk7XHJcbiAgICB9KTtcclxuICAgIHZhciBteU51bWVyYWwgPSBudW1lcmFsKHRvdGFsKTtcclxuICAgICQoXCIudG90YWxcIikuaHRtbChteU51bWVyYWwuZm9ybWF0KFwiMC4wMFwiKSk7XHJcbiAgICAkKFwiLm1vbnRhbnRSZWNlcHRpb25cIikudmFsKG15TnVtZXJhbC5mb3JtYXQoXCIwLjAwXCIpKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLnBhaWVtZW50XCIpXHJcbiAgICAub24oXCJjaGFuZ2UgcmlnaHRub3dcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gMikge1xyXG4gICAgICAgICAgICAkKFwiLmJsb2NfY2hlcXVlXCIpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI3VuaXZfdF9yZWdsZW1lbnRfZGF0ZUVjaGVhbmNlXCIpLnZhbChudWxsKTtcclxuICAgICAgICAgICAgJChcIiN1bml2X3RfcmVnbGVtZW50X3JlZmVyZW5jZVwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgICAgICQoXCIuYmxvY19jaGVxdWVcIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAxIHx8ICQodGhpcykudmFsKCkgPT0gNCkge1xyXG4gICAgICAgICAgICAkKFwiLmJsb2NfYmFucXVlXCIpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiLmJsb2NfYmFucXVlXCIpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KVxyXG4gICAgLnRyaWdnZXJIYW5kbGVyKFwicmlnaHRub3dcIik7XHJcblxyXG4kKFwiLl9kZWxldGVfYWNvbXB0ZVwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuICAgIGNvbnNvbGUubG9nKGlkICsgXCIgXCIgKyB0b2tlbik7XHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9kZWxldGVfYWNvbXB0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIudWFfdF9jb21tYW5kZWZyc2NhYl9hcHBseV90cmFuc2l0aW9uc1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10aXRsZVwiKTtcclxuICAgIHZhciB0cmFuc2l0aW9uID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10cmFuc2l0aW9uXCIpO1xyXG5cclxuICAgIGlmICh0cmFuc2l0aW9uID09ICdhcHJlc192YWxpZGVyX2xpdnJlcicpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9saXZyYWlzb25fc2hvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNsaXZyYWlzb25Qb3BVcCAuYm9kXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICQoJy5zZWwyJykuc2VsZWN0MigpXHJcbiAgICAgICAgICAgICAgICAkKFwiI2xpdnJhaXNvblBvcFVwXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZTIgPSAkKFwiLmdyaWQtcmVjZXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSwgcGFnaW5nOiBmYWxzZSwgaW5mbzogZmFsc2UsICAgICAgICAgICAgLy8gc2Nyb2xsWDogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWUgLyosIHZpc2libGU6IHRydWUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSAvKiwgdmlzaWJsZTogdHJ1ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlMi5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmVyKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24gPT0gJ2FwcmVzX2NyZWVyX3ZhbGlkZXInKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfdHlwZV9zaG93XCIsIHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3R5cGVQb3BVcCAuYm9kMlwiKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2VsMicpLnNlbGVjdDIoKVxyXG4gICAgICAgICAgICAgICAgJChcIiN0eXBlUG9wVXBcIikubW9kYWwoXCJzaG93XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGR0YS5hcHBlbmQoXCJpZFwiLCBpZCk7XHJcbiAgICAgICAgZHRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcclxuICAgICAgICBkdGEuYXBwZW5kKFwidHJhbnNpdGlvblwiLCB0cmFuc2l0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBwYXNzZXIgYSBsJ2V0YXQgJ1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIicgcG91ciBjZXQgZW5yZWdpc3RyZW1lbnQgP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9hcHBseV90cmFuc2l0aW9uc1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChyZXN1bHQudmFsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVhX3RfY29tbWFuZGVmcnNjYWJfbGl2cmFpc29uX3Nob3dcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduZSBcIiwgXCJ3YXJuaW5nXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlMiA9ICQoXCIuZ3JpZC1yZWNlcHRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHBhZ2VMZW5ndGg6IDE1LFxyXG4gICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGNvbHVtbnM6IFt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGFyZ2V0czogWzBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIyMCVcIixcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICAgICAgICBvcmRlcmFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICAgICAgICBvcmRlcmFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUlXCIsXHJcbiAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogXCI1JVwiLFxyXG4gICAgICAgICAgICBvcmRlcmFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlIC8qLCB2aXNpYmxlOiB0cnVlKi9cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgICAgICAgb3JkZXJhYmxlOiB0cnVlIC8qLCB2aXNpYmxlOiB0cnVlKi9cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIHBhZ2luZzogZmFsc2UsXHJcblxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUyLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgLy8gZml4ZWRIZWFkZXI6IHRydWUsXHJcbn0pO1xyXG5cclxuJChcIi5fZGVsZXRlX2xpdnJhaXNvblwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuICAgIC8vYWxlcnQoaWQrXCIgdG9rZW4gXCIgK3Rva2VuKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgICAgcm91dGU6IFwidF9VYVRMaXZyYWlzb25mcnNjYWJfZGVsZXRlX2xpdnJhaXNvblwiLFxyXG4gICAgICAgIHJlZGlyZWN0aW9uOiBudWxsLFxyXG4gICAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgICBpZDogaWQsXHJcbiAgICB9O1xyXG4gICAgLy8gYWxlcnQoKTtcclxuICAgIGRlbGV0ZUNhYihvYmopO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIG9iajIgPSBuZXcgT2JqZWN0KCk7XHJcbm9iajJbXCJkb3NzaWVyX3BhdGhcIl0gPSBcImNoYW5nZV9kb3NzaWVyX3BvcHVwXCI7XHJcbmxpc3RBY3Rpb25zLmxpc3RBY3Rpb25zKG9iajIpO1xyXG5cclxuXHJcblxyXG4vKioqKipwb3VyIGFqb3V0IGQnYXJ0aWNsZSAqL1xyXG5cclxuXHJcbnZhciBhcnJheV9kZXRhaWwgPSBbXTtcclxudmFyIGVycm9yc19kZXRhaWxzID0gW107XHJcbnZhciBmb3JtRGF0YURldGFpbCA9IFtdO1xyXG52YXIgbmFtZURldGFpbCA9IFwiXCI7XHJcbnZhciBlZGl0Q29sdW1uID0gbnVsbDtcclxudmFyIGVkaXRBcnRpY2xlQ29sdW1uID0gbnVsbDtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgZXJyb3JzX2RldGFpbHMgPSBqUXVlcnkucGFyc2VKU09OKCQoJy5lcnJvcnNfZGV0YWlscycpLmF0dHIoJ2Vycm9ycycpKTtcclxuICAgIG5hbWVEZXRhaWwgPSAkKCcuZXJyb3JzX2RldGFpbHMnKS5hdHRyKCduYW1lJyk7XHJcbiAgICAkKCcuZXJyb3JzX2RldGFpbHMnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAvLyBvciB3aXRoIGpRdWVyeVxyXG4gICAgLy92YXIgaXNBdXRoZW50aWNhdGVkID0gJCgnLmpzLXVzZXItcmF0aW5nJykuZGF0YSgnaXNBdXRoZW50aWNhdGVkJyk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0SHQocm93KSB7XHJcbiAgICByZXR1cm4gcm93LnF1YW50aXRlICogcm93LnByaXh1bml0YWlyZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHZhKHJvdykge1xyXG4gICAgdmFyIHByaXhUdmEgPSAoZ2V0SHQocm93KSAqIHJvdy50dmEpIC8gMTAwO1xyXG5cclxuICAgIHByaXhUdmEgPSBwcml4VHZhIC0gKChwcml4VHZhICogcm93LnJlbWlzZSkgLyAxMDApO1xyXG5cclxuICAgIHJldHVybiBwcml4VHZhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZW1pc2Uocm93KSB7XHJcbiAgICByZXR1cm4gKChnZXRIdChyb3cpKSAqIChyb3cucmVtaXNlKSAvIDEwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByaXhUVGMocm93KSB7XHJcbiAgICByZXR1cm4gcm93LnByaXh0dGMgPSBnZXRIdChyb3cpICsgZ2V0VHZhKHJvdykgLSBnZXRSZW1pc2Uocm93KTtcclxufVxyXG4kKFwiLm5ld1wiKS5vbihcImNsaWNrXCIsIFwiLmRldGFpbF9mb3JtXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblxyXG5cclxuICAgICQoJy5lcnJvci1jbGFzcy10YWInKS5yZW1vdmUoKTtcclxuICAgIHZhciBmbGFnID0gMDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb3JtRGF0YURldGFpbC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBpZiAoZm9ybURhdGFEZXRhaWxbaW5kZXhdLmFydGljbGVJZCA9PSAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQgJiYgZWRpdEFydGljbGVDb2x1bW4gIT0gZm9ybURhdGFEZXRhaWxbaW5kZXhdLmFydGljbGVJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPkNlIGFydGljbGUgZXN0IGRlamEgZXhpc3RlPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVycm9yc19kZXRhaWxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIHZhciBuYW1lID0gbmFtZURldGFpbCArICdbJyArIGVycm9yc19kZXRhaWxzW2luZGV4XS5wcm9wZXJ0eSArICddJztcclxuICAgICAgICB2YXIgdmFsdWUgPSAkKCdbbmFtZT1cIicgKyBuYW1lRGV0YWlsICsgJ1snICsgZXJyb3JzX2RldGFpbHNbaW5kZXhdLnByb3BlcnR5ICsgJ10nICsgJ1wiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoZXJyb3JzX2RldGFpbHNbaW5kZXhdLmNhdXNlID09IG51bGwgJiYgdmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgICAgICQoJ1tuYW1lPVwiJyArIG5hbWUgKyAnXCJdJykucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzX2RldGFpbHNbaW5kZXhdLm1lc3NhZ2UgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZsYWcgPT0gMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciByb3cgPSB7XHJcbiAgICAgICAgcXVhbnRpdGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfcXVhbnRpdGUnKS52YWwoKSxcclxuICAgICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgICAgdHZhOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3R2YScpLnZhbCgpLFxyXG4gICAgICAgIHJlbWlzZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19yZW1pc2UnKS52YWwoKSxcclxuICAgIH1cclxuICAgIGlmIChlZGl0Q29sdW1uICE9IG51bGwpIHtcclxuICAgICAgICBmb3JtRGF0YURldGFpbFtlZGl0Q29sdW1uXSA9IHtcclxuICAgICAgICAgICAgYXJ0aWNsZUlkOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQsXHJcbiAgICAgICAgICAgIHRpdHJlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0udGV4dCxcclxuICAgICAgICAgICAgY29kZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmNvZGUgPyAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uY29kZSA6IGNvZGUsXHJcbiAgICAgICAgICAgIHVuaXRlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3VuaXRlJykuc2VsZWN0MignZGF0YScpWzBdLnRleHQsXHJcbiAgICAgICAgICAgIHVuaXRlSWQ6ICQoJyMnICsgbmFtZURldGFpbCArICdfdW5pdGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQsXHJcbiAgICAgICAgICAgIHF1YW50aXRlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcXVhbnRpdGUnKS52YWwoKSksXHJcbiAgICAgICAgICAgIHByaXh1bml0YWlyZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3ByaXh1bml0YWlyZScpLnZhbCgpKSxcclxuICAgICAgICAgICAgdHZhOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfdHZhJykudmFsKCkpLFxyXG4gICAgICAgICAgICByZW1pc2U6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19yZW1pc2UnKS52YWwoKSksXHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX29ic2VydmF0aW9uJykudmFsKCksXHJcbiAgICAgICAgICAgIG1vbnRhbnRSZW1pc2U6IGdldFJlbWlzZShyb3cpLFxyXG4gICAgICAgICAgICBwcml4dHRjOiBnZXRQcml4VFRjKHJvdyksXHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybURhdGFEZXRhaWwucHVzaCh7XHJcbiAgICAgICAgICAgIGFydGljbGVJZDogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICB0aXRyZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLnRleHQsXHJcbiAgICAgICAgICAgIGNvZGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlID8gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmNvZGUgOiBjb2RlLFxyXG4gICAgICAgICAgICB1bml0ZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ191bml0ZScpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0LFxyXG4gICAgICAgICAgICB1bml0ZUlkOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3VuaXRlJykuc2VsZWN0MignZGF0YScpWzBdLmlkLFxyXG4gICAgICAgICAgICBxdWFudGl0ZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3F1YW50aXRlJykudmFsKCkpLFxyXG4gICAgICAgICAgICBwcml4dW5pdGFpcmU6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ19wcml4dW5pdGFpcmUnKS52YWwoKSksXHJcbiAgICAgICAgICAgIHR2YTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3R2YScpLnZhbCgpKSxcclxuICAgICAgICAgICAgcmVtaXNlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcmVtaXNlJykudmFsKCkpLFxyXG4gICAgICAgICAgICBvYnNlcnZhdGlvbjogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19vYnNlcnZhdGlvbicpLnZhbCgpLFxyXG4gICAgICAgICAgICBtb250YW50UmVtaXNlOiBnZXRSZW1pc2Uocm93KSxcclxuICAgICAgICAgICAgcHJpeHR0YzogZ2V0UHJpeFRUYyhyb3cpLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxpbmVObyA9IDE7XHJcbiAgICB2YXIgY2wgPSBcIlwiO1xyXG4gICAgJChcIi5kZXRfZm9yXCIpXHJcbiAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgIC5hZnRlcihcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2FkLWVyXCI+PGRpdiBjbGFzcz1cImxkcy1lbGxpcHNpc1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj48L2Rpdj4nXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducygkKFwiLmFydGljbGVzXCIpLCBcIlwiKTtcclxuICAgICQoXCIudGFibGUtZGV0YWlsICsgdGFibGUgXCIpLnJlbW92ZUNsYXNzKCdyZW1vdmUnKTtcclxuICAgICQoJy50YWJsZS1kZXRhaWwgdGJvZHknKS5odG1sKCcnKTtcclxuICAgICQuZWFjaChmb3JtRGF0YURldGFpbCwgZnVuY3Rpb24oaSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAobGluZU5vICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJpbXBhaXJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbCA9IFwicGFpclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIHJlbWlzZSA9IHZhbHVlLnJlbWlzZSArIFwiICVcIjtcclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgdHZhID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uID0gXCI8dHIgY2xhc3M9XCIgKyBjbCArIFwiPjx0ZD48L3RkPjx0ZCBjb2xzcGFuPSc5Jz48Yj5JbmZvcm1hdGlvbnMgY29tcGxlbWVudGFpcmVzIDogPC9iPlwiICsgb2JzZXJ2YXRpb24gKyBcIjwvdGQ+PC90cj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jYXRlZ29yaWVcclxuICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgXCIgPHRyIGNsYXNzPVwiICsgY2wgKyBcIj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAoaSArIDEpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+IDx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHR2YSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGRlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXInPjwvaT48L2E+IDxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBlZGl0X2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS1lZGl0IHRleHQtcHJpbWFyeSc+PC9pPjwvYT48L3RkPjwvdHI+XCIgKyBvYnNlcnZhdGlvbjtcclxuICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuYXBwZW5kKG15X3Jvdyk7XHJcbiAgICAgICAgbGluZU5vKys7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQoXCIjY3JlYXRlX2NvbW1hbmRlXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cclxuICAgICQoJy5kZXRfZm9yIGlucHV0LC5kZXRfZm9yIHNlbGVjdCwuZGV0X2ZvciB0ZXh0YXJlYScpLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcbiAgICBlZGl0Q29sdW1uID0gbnVsbDtcclxuICAgIGVkaXRBcnRpY2xlQ29sdW1uID0gbnVsbDtcclxuXHJcbiAgICAvL3RvYXN0ci53YXJuaW5nKFwiQ2V0IGFydGljbGUgZXhpc3RlIGRlamEgXCIsIFwid2FybmluZyBcIiwge3RpbWVPdXQ6IDQwMDB9KTtcclxuXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIubmV3XCIpLm9uKFwiY2xpY2tcIiwgXCIuZWRpdF9lbGVtZW50XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGVkaXRDb2x1bW4gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICBlZGl0QXJ0aWNsZUNvbHVtbiA9IGZvcm1EYXRhRGV0YWlsWyQodGhpcykuYXR0cignaWQnKV1bJ2FydGljbGVJZCddO1xyXG5cclxuICAgIHZhciBjbCA9IFwiXCI7XHJcbiAgICB2YXIgbGluZU5vID0gMTtcclxuICAgICQoJy50YWJsZS1kZXRhaWwgdGJvZHknKS5odG1sKCcnKTtcclxuICAgICQuZWFjaChmb3JtRGF0YURldGFpbCwgZnVuY3Rpb24oaSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAobGluZU5vICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJpbXBhaXJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbCA9IFwicGFpclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgdmFyIHJlbWlzZSA9IHZhbHVlLnJlbWlzZSArIFwiICVcIjtcclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgdHZhID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmF0aW9uID0gXCI8dHIgY2xhc3M9XCIgKyBjbCArIFwiPjx0ZD48L3RkPjx0ZCBjb2xzcGFuPSc5Jz48Yj5JbmZvcm1hdGlvbnMgY29tcGxlbWVudGFpcmVzIDogPC9iPlwiICsgb2JzZXJ2YXRpb24gKyBcIjwvdGQ+PC90cj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jYXRlZ29yaWVcclxuICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgXCIgPHRyIGNsYXNzPVwiICsgY2wgKyBcIj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAoaSArIDEpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+IDx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHR2YSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGRlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXInPjwvaT48L2E+IDxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBlZGl0X2VsZW1lbnQnIGlkPVwiICtcclxuICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgIFwiPjxpIGNsYXNzPSdmYSBmYS1lZGl0IHRleHQtcHJpbWFyeSc+PC9pPjwvYT48L3RkPjwvdHI+XCIgKyBvYnNlcnZhdGlvbjtcclxuICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuYXBwZW5kKG15X3Jvdyk7XHJcbiAgICAgICAgbGluZU5vKys7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgdmFyIHJvd19pbmRleCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHZhciBjb2xfaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGV0YWlsOiBmb3JtRGF0YURldGFpbFskKHRoaXMpLmF0dHIoJ2lkJyldXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX2VkaXRfZGV0YWlsX25ld1wiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAkKCcudGFibGUtZGV0YWlsIHRyJykuZXEocm93X2luZGV4KzEpLmFkZENsYXNzKCd0YWJsZS10ci1zdHlsZScpO1xyXG4gICAgICAgICAgICAkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEocm93X2luZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwidGFibGUtdHItc3R5bGVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKFwiPHRkIGNvbHNwYW49JzEwJz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoXHJcbiAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSkuZmluZChcIi5hcnRpY2xlc1wiKSxcclxuICAgICAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuYXJ0aWNsZXNcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWYtc2VsZWN0ZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8kKFwiLmxvYWQtZXJcIikuZmFkZU91dCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyAkKCcuZGV0X2ZvcicpLmZhZGVJbigyMDApXHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNwclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIi50YWJsZS1kZXRhaWwgKyB0YWJsZSBcIikuYWRkQ2xhc3MoJ3JlbW92ZScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgIGFsZXJ0KHJvd19pbmRleCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdmFyIHNsaCA9IHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmVtcHR5KCkuYXBwZW5kKFwiPHRkIHN0eWxlPSdkaXNwbGF5OiBub25lOyc+XCIgKyByZXN1bHQgKyBcIjwvdGQ+XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKFwiLm5ld1wiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZV9lbGVtZW50XCIsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICB2YXIgbGluZU5vID0gMTtcclxuICAgIHZhciBjbCA9IFwiXCI7XHJcbiAgICBmb3JtRGF0YURldGFpbC5zcGxpY2UoJCh0aGlzKS5hdHRyKFwiaWRcIiksIDEpXHJcbiAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHkgdHJcIikucmVtb3ZlKCk7XHJcbiAgICBpZiAoZm9ybURhdGFEZXRhaWwubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICQoXCIjY3JlYXRlX2NvbW1hbmRlXCIpLmxhc3QoKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgJC5lYWNoKGZvcm1EYXRhRGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChsaW5lTm8gJSAyID09IDApIHtcclxuICAgICAgICAgICAgY2wgPSBcImltcGFpclwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJwYWlyXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHR2YSA9IHZhbHVlLnR2YSArIFwiICVcIjtcclxuICAgICAgICB2YXIgcmVtaXNlID0gdmFsdWUucmVtaXNlICsgXCIgJVwiO1xyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbiA9IHZhbHVlLm9ic2VydmF0aW9uO1xyXG4gICAgICAgIGlmICh2YWx1ZS50dmEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLm9ic2VydmF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2YXRpb24gPSBcIjx0ciBjbGFzcz1cIiArIGNsICsgXCI+PHRkPjwvdGQ+PHRkIGNvbHNwYW49JzknPjxiPkluZm9ybWF0aW9ucyBjb21wbGVtZW50YWlyZXMgOiA8L2I+XCIgKyBvYnNlcnZhdGlvbiArIFwiPC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgXCIgPHRyIGNsYXNzPVwiICsgY2wgKyBcIj48dGQ+XCIgK1xyXG4gICAgICAgICAgICAoaSArIDEpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+IDx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHR2YSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2J0biBidG4td2hpdGUgYnRuLXhzIHVwcGVyIGRlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXInPjwvaT48L2E+PC90ZD48L3RyPlwiICsgb2JzZXJ2YXRpb247XHJcbiAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbD50Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICBsaW5lTm8rKztcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIiNjcmVhdGVfY29tbWFuZGVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJChcIi5mb3JtXCIpLmF0dHIoXCJuYW1lXCIpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgIC8vIHZhciBkdGEgPSBuZXcgRm9ybURhdGEoJChcIiN0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJcIilbMF0pO1xyXG5cclxuXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciBwYXJhbXMgPSAkKCcuZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHZhbC5uYW1lLCB2YWwudmFsdWUpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyh2YWwubmFtZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhRGV0YWlsKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdkZXRhaWwnLCBkYXRhKTtcclxuXHJcblxyXG5cclxuICAgIHZhciBzZWxlY3RvciA9ICQoXCIuZm9ybVwiKTtcclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9pbnNlcnRcIiksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY3VzdG9tRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2gocmVzdWx0LmN1c3RvbUVycm9ycywgZnVuY3Rpb24oaSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm0gI1wiICsgaSkuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjJyspXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgLy9kdW1wKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2NvbW1hbmRlZnJzY2FiX3Nob3dcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiLmFqb3V0XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl91cGxvYWRcIiwge1xyXG4gICAgICAgICAgICBpZDogJCh0aGlzKS5jbG9zZXN0KFwiYVwiKS5hdHRyKFwiaWRcIiksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3QyX2Rvc3NpZXJzID0gJChcIi5zZWxlY3QyX2Rvc3NpZXJzXCIpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvaXggRG9zc3NpZXJcIixcclxuICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAkKFwic2VsZWN0LnNlbGVjdDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLl91cGxvYWRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICBhbGVydCgpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX3VwbG9hZFwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoXCIjZWRpdF9jb21tYW5kZVwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmb3JtX25hbWUgPSAkKFwiLmZvcm1cIikuYXR0cihcIm5hbWVcIik7XHJcblxyXG4gICAgLy92YXIgcGFyYW1zID0gJCgnLmZvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xyXG4gICAgLy8gdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYlwiKVswXSk7XHJcblxyXG5cclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgdmFyIHBhcmFtcyA9ICQoJy5mb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICAkLmVhY2gocGFyYW1zLCBmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodmFsLm5hbWUsIHZhbC52YWx1ZSk7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHZhbC5uYW1lKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgaWQgPSBmb3JtRGF0YS5nZXQoXCJfaWRcIik7XHJcblxyXG4gICAgdmFyIHNlbGVjdG9yID0gJChcIi5mb3JtXCIpO1xyXG5cclxuXHJcblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfdXBkYXRlXCIsIHtcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJjbGlja1wiLCBcIi5kZXRhaWxfZm9ybVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyBhbGVydCgpO1xyXG4gICAgJCgnLmVycm9yLWNsYXNzLXRhYicpLnJlbW92ZSgpO1xyXG4gICAgdmFyIGlkID0gJChcIiNfaWRcIikudmFsKCk7XHJcbiAgICB2YXIgZmxhZyA9IDA7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybURhdGFEZXRhaWwubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKGZvcm1EYXRhRGV0YWlsW2luZGV4XS5hcnRpY2xlSWQgPT0gJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+Q2UgYXJ0aWNsZSBlc3QgZGVqYSBleGlzdGU8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGlmICgoJCgnLmVkaXQtZGV0YWlsW2FydGljbGU9XCInICsgJCgnIycgKyBuYW1lRGV0YWlsICsgJ19hcnRpY2xlJykuc2VsZWN0MignZGF0YScpWzBdLmlkICsgJ1wiXScpLmF0dHIoJ2FydGljbGUnKSA9PSAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQpICYmICgkKHRoaXMpLnBhcmVudHMoJy5lZGl0LWRldGFpbCcpLmF0dHIoJ2FydGljbGUnKSAhPSAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnBhcmVudCgpLmFwcGVuZCgoXCI8c3BhbiBjbGFzcz0nICBlcnJvci1jbGFzcy10YWIgIGVycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5DZSBhcnRpY2xlIGVzdCBkZWphIGV4aXN0ZTwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXJyb3JzX2RldGFpbHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lRGV0YWlsICsgJ1snICsgZXJyb3JzX2RldGFpbHNbaW5kZXhdLnByb3BlcnR5ICsgJ10nO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQoJ1tuYW1lPVwiJyArIG5hbWVEZXRhaWwgKyAnWycgKyBlcnJvcnNfZGV0YWlsc1tpbmRleF0ucHJvcGVydHkgKyAnXScgKyAnXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChlcnJvcnNfZGV0YWlsc1tpbmRleF0uY2F1c2UgPT0gbnVsbCAmJiB2YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICAgICAgJCgnW25hbWU9XCInICsgbmFtZSArICdcIl0nKS5wYXJlbnQoKS5hcHBlbmQoKFwiPHNwYW4gY2xhc3M9JyAgZXJyb3ItY2xhc3MtdGFiICBlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyBlcnJvcnNfZGV0YWlsc1tpbmRleF0ubWVzc2FnZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhZyA9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHJvdyA9IHtcclxuICAgICAgICBxdWFudGl0ZTogJCgnIycgKyBuYW1lRGV0YWlsICsgJ19xdWFudGl0ZScpLnZhbCgpLFxyXG4gICAgICAgIHByaXh1bml0YWlyZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3ByaXh1bml0YWlyZScpLnZhbCgpKSxcclxuICAgICAgICB0dmE6ICQoJyMnICsgbmFtZURldGFpbCArICdfdHZhJykudmFsKCksXHJcbiAgICAgICAgcmVtaXNlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3JlbWlzZScpLnZhbCgpLFxyXG4gICAgfVxyXG4gICAgZm9ybURhdGFEZXRhaWwgPSBbXTtcclxuICAgIGZvcm1EYXRhRGV0YWlsLnB1c2goe1xyXG4gICAgICAgIGlkOiAkKHRoaXMpLnBhcmVudHMoJy5lZGl0LWRldGFpbCcpLmF0dHIoJ2lkJyksXHJcbiAgICAgICAgYXJ0aWNsZUlkOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX2FydGljbGUnKS5zZWxlY3QyKCdkYXRhJylbMF0uaWQsXHJcbiAgICAgICAgdGl0cmU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0LFxyXG4gICAgICAgIGNvZGU6ICQoJyMnICsgbmFtZURldGFpbCArICdfYXJ0aWNsZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5jb2RlLFxyXG4gICAgICAgIHVuaXRlOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3VuaXRlJykuc2VsZWN0MignZGF0YScpWzBdLnRleHQsXHJcbiAgICAgICAgdW5pdGVJZDogJCgnIycgKyBuYW1lRGV0YWlsICsgJ191bml0ZScpLnNlbGVjdDIoJ2RhdGEnKVswXS5pZCxcclxuICAgICAgICBxdWFudGl0ZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3F1YW50aXRlJykudmFsKCkpLFxyXG4gICAgICAgIHByaXh1bml0YWlyZTogcGFyc2VGbG9hdCgkKCcjJyArIG5hbWVEZXRhaWwgKyAnX3ByaXh1bml0YWlyZScpLnZhbCgpKSxcclxuICAgICAgICB0dmE6IHBhcnNlRmxvYXQoJCgnIycgKyBuYW1lRGV0YWlsICsgJ190dmEnKS52YWwoKSksXHJcbiAgICAgICAgcmVtaXNlOiBwYXJzZUZsb2F0KCQoJyMnICsgbmFtZURldGFpbCArICdfcmVtaXNlJykudmFsKCkpLFxyXG4gICAgICAgIG9ic2VydmF0aW9uOiAkKCcjJyArIG5hbWVEZXRhaWwgKyAnX29ic2VydmF0aW9uJykudmFsKCksXHJcbiAgICAgICAgbW9udGFudFJlbWlzZTogZ2V0UmVtaXNlKHJvdyksXHJcbiAgICAgICAgcHJpeHR0YzogZ2V0UHJpeFRUYyhyb3cpLFxyXG4gICAgfSk7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YURldGFpbClcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGV0YWlsJywgZGF0YSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNkZXRfaW5zZXJ0XCIsIHtcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgLyogICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgJChcIi5kZXRhaWxfZm9ybV9lZGl0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoKFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArIHZhbC50aXRsZSArIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCIpKTtcclxuICAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvL2wuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vdG9hc3RyLndhcm5pbmcoXCJDZXQgYXJ0aWNsZSBleGlzdGUgZGVqYSBcIiwgXCJ3YXJuaW5nIFwiLCB7dGltZU91dDogNDAwMH0pO1xyXG5cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGVsZXRlX2VsZW1lbnRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgZm9ybURhdGFEZXRhaWwuc3BsaWNlKCQodGhpcykuYXR0cihcImlkXCIpLCAxKVxyXG4gICAgJCgnLmVkaXQgLnRhYmxlLWRldGFpbCB0Ym9keSB0cjpub3QoLmVkaXQtZGV0YWlsKScpLnJlbW92ZSgpO1xyXG4gICAgJC5lYWNoKGZvcm1EYXRhRGV0YWlsLCBmdW5jdGlvbihpLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChsaW5lTm8gJSAyID09IDApIHtcclxuICAgICAgICAgICAgY2wgPSBcImltcGFpclwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsID0gXCJwYWlyXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHR2YSA9IHZhbHVlLnR2YSArIFwiICVcIjtcclxuICAgICAgICB2YXIgcmVtaXNlID0gdmFsdWUucmVtaXNlICsgXCIgJVwiO1xyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbiA9IHZhbHVlLm9ic2VydmF0aW9uO1xyXG4gICAgICAgIGlmICh2YWx1ZS50dmEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLm9ic2VydmF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2YXRpb24gPSBcIjx0ciBjbGFzcz1cIiArIGNsICsgXCI+PHRkPjwvdGQ+PHRkIGNvbHNwYW49JzknPjxiPkluZm9ybWF0aW9ucyBjb21wbGVtZW50YWlyZXMgOiA8L2I+XCIgKyBvYnNlcnZhdGlvbiArIFwiPC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXlfcm93ID1cclxuICAgICAgICAgICAgXCIgPHRyPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5jb2RlICtcclxuICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnRpdHJlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnF1YW50aXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dW5pdGFpcmUudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB0dmEgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgcmVtaXNlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLm1vbnRhbnRSZW1pc2UudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5wcml4dHRjLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdidG4gYnRuLXdoaXRlIGJ0bi14cyB1cHBlciBkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtZGFuZ2VyJz48L2k+PC9hPjwvdGQ+PC90cj5cIiArIG9ic2VydmF0aW9uO1xyXG4gICAgICAgICQoXCIuZWRpdCAudGFibGUtZGV0YWlsIHRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG52YXIgZm9ybURhdGFEZXRhaWxFZGl0UmVtb3ZlID0gW107XHJcbiQoJy5lZGl0Jykub24oJ2NsaWNrJywgJy5kZXRhaWxfZm9ybV9kZWxldGUnLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xyXG5cclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNkZXRfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5lZGl0LWRldGFpbFtpZD1cIicgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zd2FsKHJlc3VsdC5tZXNzYWdlLnRpdGxlLCByZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2Zvcm1EYXRhRGV0YWlsRWRpdFJlbW92ZS5wdXNoKHtpZDogJCh0aGlzKS5hdHRyKCdpZCcpLHRva2VuOiQodGhpcykuYXR0cigndmFsdWUnKX0pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coZm9ybURhdGFEZXRhaWxFZGl0UmVtb3ZlKTtcclxufSlcclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcImNsaWNrXCIsIFwiLmRldGFpbF9lZGl0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS5hdHRyKCdpZCcpKVxyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgdmFyIHJvd19pbmRleCA9ICQodGhpcykuY2xvc2VzdChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5pbmRleCgpO1xyXG4gICAgdmFyIGNvbF9pbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2RldF9lZGl0X2RldGFpbFwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAkKCcudGFibGUtZGV0YWlsIHRyJykuZXEocm93X2luZGV4KzEpLmFkZENsYXNzKCd0YWJsZS10ci1zdHlsZScpO1xyXG4gICAgICAgICAgICAkKFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEocm93X2luZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwidGFibGUtdHItc3R5bGVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKFwiPHRkIGNvbHNwYW49JzEwJz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLmFmdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoXHJcbiAgICAgICAgICAgICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSkuZmluZChcIi5hcnRpY2xlc1wiKSxcclxuICAgICAgICAgICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIuYXJ0aWNsZXNcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWYtc2VsZWN0ZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8kKFwiLmxvYWQtZXJcIikuZmFkZU91dCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyAkKCcuZGV0X2ZvcicpLmZhZGVJbigyMDApXHJcbiAgICAgICAgICAgICQoXCIuYm9kXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZVwiKSxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5odG1sKHJlc3VsdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIEtURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaC5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICBhbGVydChyb3dfaW5kZXgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIHZhciBzbGggPSBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5lbXB0eSgpLmFwcGVuZChcIjx0ZCBzdHlsZT0nZGlzcGxheTogbm9uZTsnPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLl9kZXNhY3RpdmVyX2NvbW1hbmRlXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblxyXG4gICAgLy9hbGVydCgpO1xyXG5cclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcblxyXG4gICAgX2FycmF5X2lkcy5wdXNoKCQodGhpcykuYXR0cihcImRhdGEtaWRcIikpO1xyXG5cclxuICAgIGlmIChfYXJyYXlfaWRzKSB7XHJcblxyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBkZXNhY3RpdmVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1iYW4nPjwvaT4gT3VpLCBEZXNhY3RpdmVyIVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9kZXNhY3RpdmVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYXJyYXlfaWRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKFwiI19jbG90dXJlcl9jb21tYW5kZVwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgYWxlcnQoKTtcclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuXHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgY2xvdHVyZXIgY2V0dGUgY29tbWFuZGUgP1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSwgY2xvdHVyZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX2Nsb3R1cmVyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4kKFwiI19hdmFuY2VfY29tbWFuZGVcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgJCgnI2F2YW5jZXBvcCcpLm1vZGFsKCdzaG93Jyk7XHJcbn0pO1xyXG4kKFwiLmF2YW5jZV9zYXZlXCIpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIFxyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBjcmXDqSB1biBhdmFuY2UgcG91ciBjZXR0ZSBjb21tYW5kZSA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpIVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfYXZhbmNlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKFwiI19kZXNhY3RpdmVyX2NvbW1hbmRlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAvL2FsZXJ0KCk7XHJcblxyXG4gICAgdmFyIF9hcnJheV9pZHMgPSBbXTtcclxuXHJcbiAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcblxyXG4gICAgaWYgKF9hcnJheV9pZHMpIHtcclxuXHJcblxyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGRlc2FjdGl2ZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWJhbic+PC9pPiBPdWksIERlc2FjdGl2ZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2NvbW1hbmRlZnJzY2FiX2Rlc2FjdGl2ZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hcnJheV9pZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLnBkZl9ieV9jb2RlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgd2luZG93Lm9wZW4oUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfZG9jdW1lbnRfb2xkX3N5c1wiLCB7XHJcbiAgICAgICAgaWQ6ICQodGhpcykuYXR0cignZGF0YS1pZCcpXHJcbiAgICB9KSwgJ19ibGFuaycpO1xyXG59KVxyXG5cclxuXHJcbiQoXCIjX2RlbGV0ZV9jb21tYW5kZVwiKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgIC8vYWxlcnQoX2FycmF5X2lkcyk7XHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9jb21tYW5kZV9kZWxldGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hcnJheV9pZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKCcjZ3JpZCcpLkRhdGFUYWJsZSgpLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInVhX3RfY29tbWFuZGVmcnNjYWJfaW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuX2RlbGV0ZV9jb21tYW5kZVwiLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cclxuICAgIC8vYWxlcnQoKTtcclxuXHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuXHJcbiAgICBpZiAoX2FycmF5X2lkcykge1xyXG5cclxuXHJcbiAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgIC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGxpc3RlID9cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9jb21tYW5kZWZyc2NhYl9jb21tYW5kZV9kZWxldGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hcnJheV9pZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZ3JpZCcpLkRhdGFUYWJsZSgpLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcubGlzdF9hY3Rpb25zJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgX2FycmF5X2lkcyA9IFtdO1xyXG5cclxuICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uXTpjaGVja2VkXCIpLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBfYXJyYXlfaWRzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gJ19mdXNpb25uZW1lbnQnICYmIF9hcnJheV9pZHMgIT0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgLy9hbGVydChfYXJyYXlfaWRzKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGZ1c2lvbm5lciBjZXMgZW5yZWdpc3RyZW1lbnRzID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSAhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnY29tbWFuZGVfZ2VuZXJlcl9mdXNpb25uZW1lbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IF9hcnJheV9pZHMgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkKFwiLmFjdGlvbiAsLnNjb2x1bW5fMFwiKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufSk7XHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmltcHJpbWVfZG9jdW1lbnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZigkKHRoaXMpLmF0dHIoXCJkYXRhLXZhbGlkZVwiKSA9PSAwKSAge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKCdpbXBvc3NpYmxlIGRcXCdpbXByaW1lciBsZSBkb2N1bWVudCwgbWFucXVlIGRlIHNpZ25hdHVyZSEnLCAnRXJyZXVyJywge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgd2luZG93Lm9wZW4oJCh0aGlzKS5hdHRyKCdocmVmJyksICdfYmxhbmsnKTtcclxufSk7IiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVDYWIob2JqKSB7XHJcblxyXG4gICAvLyB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcblxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyb3V0ZSddLCB7J2lkJzogb2JqWydpZCddLCAndG9rZW4nOiBvYmpbJ3Rva2VuJ119KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVEZW1hbmRlKG9iaikge1xyXG5cclxuICAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAgLy9jb25zb2xlLmxvZyhpZCArICcgJyArIHRva2VuKTtcclxuICAgICBcclxuICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgJC5hamF4KHtcclxuIFxyXG4gICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICB9KTtcclxuIH1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=