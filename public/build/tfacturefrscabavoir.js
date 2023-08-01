(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tfacturefrscabavoir"],{

/***/ "./assets/js/components/module_achat/tfacturefrscabavoir.js":
/*!******************************************************************!*\
  !*** ./assets/js/components/module_achat/tfacturefrscabavoir.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");










var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.setRoutingData(routes);





global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
        //alert((valuennn))
        if (window.element.attr("data-entity")) {
          $.ajax({
            dataType: "json",
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
    $(".tt").val(window.search);
  });
  window.element.on("select2:select", function (e) {
    //alert()
    var data = e.params.data;
    console.log(data);
    $(".prixunitaire").val(data.prixAchat);
    $(".tva").val(data.tva);
    $(".select2_unite").val(data.unite).trigger("change");
  });
  $("body").on("click", ".select2-container", function () {
    //$('.select2-search--hide').after('<span class="select2-search select2-search--dropdown ttp"><input class="tt select2-search__field" type="search" tabindex="0" autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true" role="textbox" /></span>');
    $(".tt").trigger("focus");
  });
}
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_list") + location.search,
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
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "asc"]],
  columns: [{
    orderable: true,
    width: "5%",
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    visible: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true,
    visible: true
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
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("datatables_langue"),
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchText"](api, [1, 3, 4, 6, 7, 8, 9, 10, 11, 12], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchDate"](api, [2], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchSelect"](api, [5], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchCheckbox"](api, [0], []);
});
/*column 1 de datatble search*/

$(".remove-filter").click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});
$(".action_head").click(function () {
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
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
$("#grid tbody").on("click", "tr", function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    table.$("tr.selected").removeClass("selected");
    $(this).addClass("selected");
  }
});
$(document).ready(function () {
  //alert(1)
  /*  document.addEventListener("DOMContentLoaded", function (event) {
     
     $('#grid').show(500);
     });*/
  // console.log('Hello Webpack Encore! Edit me in assets/js/app.js!!!');
  $("#_statut").click(function (e) {
    var id = table.row(".selected").id();
    if (id) {
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facture_statut", {
          id: id
        }),
        success: function success(result, textStatus, errorThrown) {
          $(".actions").html(result);
          $(".actions").toggleClass("sidebar-open");
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facture_statut", {
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
  $("#_demande").click(function (e) {
    var id = table.row(".selected").id();
    if (id) {
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_Paiement", {
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
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_consulte", {
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
    //  var id = table.row('.selected').id();

    var id = $("#test").data("factureId");
    // alert(id);
    if (id) {
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("pdf_show_facture", {
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
  $(".new").on("submit", ".form", function (e) {
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this).attr("class").split(" ")[0];
    var id = $("#test").data("factureId");

    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_15__["create"](document.querySelector(".my-button2"));

    // Start loading
    l.start();
    // console.log(test);
    //console.log(e.type);
    // alert(id);
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facture_insert", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
        if (result.errors) {
          //  console.log(result.errors);
          $(".errors-list").remove();
          jQuery.each(result.errors.violations, function (i, val) {
            l.stop();
            var column = val.propertyPath;
            var columnName = column.split(".");
            $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
          });
        } else if (result.empty) {
          l.stop();
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });

          // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
        } else if (result.data) {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          $(".form")[0].reset();
          $(".new .table-detail tbody").hide();
          $(".new-article-btn").show();
          $(".new .table-detail > tbody tr").not(":last").remove();
          l.stop();
          location.reload();
          //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
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

  ///////////////////////////////////////////////////

  $(document).ready(function () {
    $(".det_for").hide().after('<div class="load-er"><div class="lds-ellipsis"><div></div><div></div></div></div>');
    create_custom_dropdowns($(".articles"), "");
  });
  $(".new-article-btn").click(function (e) {
    //alert()
    $(".edit-new-article").show();
    $(this).hide();
    e.preventDefault();
  });
  $("body").on("submit", ".detail_form_add_article", function (e) {
    //alert();
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var id = $("#_id").val();
    var selector = $(this);

    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_15__["create"](document.activeElement);

    // Start loading
    l.start();
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("t_factureavoir_insert", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        //  console.log(result);
        if (result.errors) {
          l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
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

  ///////////////////////////////////////////////////

  $("body").on("click", ".ua_t_facturefrscab_apply_transitions", function (e) {
    var dta = new FormData();
    var id = $(this).attr("data-id");
    var title = $(this).attr("data-title");
    var transition = $(this).attr("data-transition");
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_apply_transitions", {
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
                toastr.success(result.message.text, result.message.title, {
                  timeOut: 4000
                });
                /*var url = Routing.generate("ua_t_facturefrscab_Paiement", {
                  id: result.id,
                });*/
                //window.location.href = url;
                location.reload();
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
      toastr.warning("Facture non renseigne ", "warning", {
        timeOut: 4000
      });
    }
    e.preventDefault();
  });
});
var tableShow = $("#datatable-show").DataTable({
  scrollY: "200px",
  scrollCollapse: true,
  paging: false,
  autoWidth: false
});
$("._generer_form").submit(function (e) {
  var dta = new FormData(this);
  var id = $("input[name=_id]").val();

  //alert();
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_15__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_avoir_insert", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        $.each(result.errors, function (key, value) {
          toastrWidtoutProgress.warning(value, "warning");
        });
        l.stop();
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        l.stop();
        location.reload();
      } else if (result.empty) {
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
var tableShow = $("#datatable-show2").DataTable({
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
    total = api.column(4).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Total over this page
    pageTotal = api.column(4, {
      page: "current"
    }).data().reduce(function (a, b) {
      return intVal(a) + intVal(b);
    }, 0);

    // Update footer
    $(api.column(1).footer()).html("Total : " + (Math.round(pageTotal * 100) / 100).toFixed(2));
  }
});
$(document).ready(function () {
  //$('body').on('change', '.paiement', function (e) {
  //$('.paiement').bind('load',function(){

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
    //  console.log($(this).val());
  }).triggerHandler("rightnow");
});
$("#_delete_facture").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var obj = {
    route: "t_UaTFacturefrscab_delete_facture",
    redirection: "ua_t_facture_index",
    token: token,
    id: id
  };
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_13__["deleteCab"])(obj);
  e.preventDefault();
});
var table2 = $("#grid2").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_avoir_list") + location.search,
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200], [10, 15, 25, 50, 100, 200]],
  pageLength: 15,
  order: [[0, "asc"]],
  columns: [{
    orderable: true,
    width: "5%",
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    visible: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true
  }, {
    orderable: true,
    visible: true
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});

table2.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchText"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchSelect"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_14__["CustomSearchCheckbox"](api, [0], []);
});
$("body").on("click", "#_avoir", function (e) {
  //alert()

  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("t_uatfacture_add_avoir_popup"),
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
$(".edit").on("submit", ".form", function (e) {
  //alert('d')
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button

  var id = $("#_id").val();

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_15__["create"](document.querySelector(".my-button"));

  // Start loading
  l.start();
  // console.log(test);
  //console.log(e.type);
  // alert(id);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("t_UaTFacturefrscab_update_avoir", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
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
      if (result.code == 403) {
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
$("._facture").on("submit", ".form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_15__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("t_uatfacture_add_avoir_popup"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });

        // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      } else if (result.data) {
        table2.ajax.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $("#ModalDocumentDynamique").modal("hide");
        l.stop();

        //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
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
var obj2 = new Object();
//obj2["dossier_path"] = "change_dossier_facture_popup";
_functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_12__["listActions"](obj2);
$(".parvenue").select2();
if ($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1) {
  $('.dateDoc,.refDoc').hide().removeClass('classShow');
} else {
  $('.dateDoc,.refDoc').show().addClass('classShow');
}
$('.parvenue').on('select2:selecting', function (e) {
  if (e.params.args.data.text.indexOf('non parvenue') !== -1) {
    $('.dateDoc,.refDoc').hide().removeClass('classShow');
  } else {
    $('.dateDoc,.refDoc').show().addClass('classShow');
  }
});
$("body").on("submit", ".save_facture_generer", function (e) {
  //alert($('#id').attr('value'));
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_15__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_generer", {
      id: $('#id').attr('value')
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        location.reload();
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        l.stop();
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
$("body").on("submit", ".detail_edit", function (e) {
  //alert()
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  var row_index = $(this).closest(".table-detail > tbody  > tr").index();
  //var col_index = $(this).index();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_edit_detail", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("t_achatdemandeinternecab_find_article"),
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
$("body").on("submit", ".detail_form", function (e) {
  var dta = new FormData(this);
  console.log(dta);
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  var selector = $(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_15__["create"](document.activeElement);
  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_update_detail", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_11__["ShowFormErrors"])(selector, form_name, result.errors);
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
$("body").on("submit", ".detail_form_delete", function (e) {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.generate("ua_t_facturefrscab_avoir_article_delete", {
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

},[["./assets/js/components/module_achat/tfacturefrscabavoir.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~tfacturefrscabavoir",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYWNoYXQvdGZhY3R1cmVmcnNjYWJhdm9pci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2RlbGV0ZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMiLCJlbGVtZW50IiwiYXR0IiwiZm4iLCJzZWxlY3QyIiwiYW1kIiwiZGVmaW5lIiwiZXJyb3JMb2FkaW5nIiwiaW5wdXRUb29Mb25nIiwiYXJncyIsIm92ZXJDaGFycyIsImlucHV0IiwibGVuZ3RoIiwibWF4aW11bSIsIm1lc3NhZ2UiLCJpbnB1dFRvb1Nob3J0IiwicmVtYWluaW5nQ2hhcnMiLCJtaW5pbXVtIiwibG9hZGluZ01vcmUiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJ3aW5kb3ciLCJhdHRyIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJnZW5lcmF0ZSIsInNlbGVjdGVkIiwiZW50aXR5IiwiY29sdW1uIiwidGhlbiIsImRhdGEiLCJwcmVwZW5kIiwibGFuZ3VhZ2UiLCJyZXN1bHRzIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJkcm9wZG93bkNzc0NsYXNzIiwidmFsIiwidHJpZ2dlciIsImZhZGVPdXQiLCJyZW1vdmUiLCJmYWRlSW4iLCJvbiIsImUiLCJzZWFyY2giLCJhZnRlciIsInR5cGVXYXRjaCIsImhpZ2hsaWdodCIsIndhaXQiLCJjYXB0dXJlTGVuZ3RoIiwiY2FsbGJhY2siLCJ2YWx1ZW5ubiIsImhpZGUiLCJkYXRhVHlwZSIsInRlcm0iLCJzdWNjZXNzIiwicmVzdWx0IiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiZW1wdHkiLCJmb2N1cyIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0IiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInByaXhBY2hhdCIsInR2YSIsInVuaXRlIiwidGFibGUiLCJEYXRhVGFibGUiLCJsb2NhdGlvbiIsImJlZm9yZVNlbmQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldHRpbmdzIiwianFYSFIiLCJhYm9ydCIsImRlZmVyUmVuZGVyIiwic3RhdGVTYXZlIiwibGVuZ3RoTWVudSIsInBhZ2VMZW5ndGgiLCJvcmRlciIsImNvbHVtbnMiLCJvcmRlcmFibGUiLCJ3aWR0aCIsInNlYXJjaGFibGUiLCJ0YXJnZXRzIiwidmlzaWJsZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsInJlbG9hZCIsInByb2Nlc3NpbmciLCJhcGkiLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJwcm9wIiwidG9nZ2xlIiwiZmlsdGVyIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwiY2hhbmdlIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkIiwicm93IiwiaHRtbCIsInRvZ2dsZUNsYXNzIiwiZXJyb3IiLCJkdGEiLCJGb3JtRGF0YSIsImZvcm1fbmFtZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJlcnJvcnMiLCJqUXVlcnkiLCJlYWNoIiwidmlvbGF0aW9ucyIsImkiLCJwcm9wZXJ0eVBhdGgiLCJjb2x1bW5OYW1lIiwic3BsaXQiLCJ0aXRsZSIsImNvZGUiLCJocmVmIiwib3BlbiIsInNlbGVjdG9yIiwibCIsIkxhZGRhIiwicXVlcnlTZWxlY3RvciIsInN0YXJ0Iiwic3RvcCIsInJlc2V0Iiwic2hvdyIsIm5vdCIsImFjdGl2ZUVsZW1lbnQiLCJTaG93Rm9ybUVycm9ycyIsInRyYW5zaXRpb24iLCJhcHBlbmQiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ2YWx1ZSIsInJlc3BvbnNlSlNPTiIsInRhYmxlU2hvdyIsInNjcm9sbFkiLCJzY3JvbGxDb2xsYXBzZSIsInBhZ2luZyIsImF1dG9XaWR0aCIsInN1Ym1pdCIsImtleSIsInRvYXN0cldpZHRvdXRQcm9ncmVzcyIsImZvb3RlckNhbGxiYWNrIiwiZW5kIiwiZGlzcGxheSIsInRvdGFsIiwicGFnZVRvdGFsIiwiaW50VmFsIiwicmVwbGFjZSIsInJlZHVjZSIsImEiLCJiIiwicGFnZSIsImZvb3RlciIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJ0cmlnZ2VySGFuZGxlciIsInRva2VuIiwib2JqIiwicm91dGUiLCJyZWRpcmVjdGlvbiIsImRlbGV0ZUNhYiIsInRhYmxlMiIsIm1vZGFsIiwic2V0VGltZW91dCIsIm9iajIiLCJPYmplY3QiLCJsaXN0QWN0aW9ucyIsImluZGV4T2YiLCJnZXQiLCJyb3dfaW5kZXgiLCJjbG9zZXN0IiwiaW5kZXgiLCJlcSIsImZpbmQiLCJLVERhdGF0YWJsZXNTZWFyY2hPcHRpb25zQWR2YW5jZWRTZWFyY2giLCJpbml0IiwiZGVsZXRlRGVtYW5kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxtSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUNtQztBQUNFO0FBRWI7QUFFbUM7QUFFMUQ7QUFDL0JJLE1BQU0s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QUU7VUFBSSxDQUFDLENBQUM7UUFDdEc7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQztBQUNOLEMiLCJmaWxlIjoidGZhY3R1cmVmcnNjYWJhdm9pci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uXCIpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanNcIjtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gXCIuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzXCI7XHJcbmltcG9ydCAqIGFzIGxpc3RBY3Rpb25zIGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGVcIixcclxuICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKGVsZW1lbnQsIGF0dCkge1xyXG4gICQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKFwic2VsZWN0Mi9pMThuL2ZyXCIsIFtdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBSdXNzaWFuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvckxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0VG9vTG9uZzogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDRg9C00LDQu9C40YLQtSBcIiArIG92ZXJDaGFycyArIFwiINGB0LjQvNCy0L7Qu1wiO1xyXG4gICAgICAgIGlmIChvdmVyQ2hhcnMgPj0gMiAmJiBvdmVyQ2hhcnMgPD0gNCkge1xyXG4gICAgICAgICAgbWVzc2FnZSArPSBcItCwXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdmVyQ2hhcnMgPj0gNSkge1xyXG4gICAgICAgICAgbWVzc2FnZSArPSBcItC+0LJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlID1cclxuICAgICAgICAgIFwiVGFwZXogXCIgK1xyXG4gICAgICAgICAgcmVtYWluaW5nQ2hhcnMgK1xyXG4gICAgICAgICAgXCIgY2FyYWN0w6hyZSBvdSBwbHVzIHBvdXIgZmFpcmUgZGVzIHJlY2hlcmNoZXNcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG4gICAgICB9LFxyXG4gICAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCS0Ysg0LzQvtC20LXRgtC1INCy0YvQsdGA0LDRgtGMIFwiICsgYXJncy5tYXhpbXVtICsgXCIg0Y3Qu9C10LzQtdC90YJcIjtcclxuXHJcbiAgICAgICAgaWYgKGFyZ3MubWF4aW11bSA+PSAyICYmIGFyZ3MubWF4aW11bSA8PSA0KSB7XHJcbiAgICAgICAgICBtZXNzYWdlICs9IFwi0LBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubWF4aW11bSA+PSA1KSB7XHJcbiAgICAgICAgICBtZXNzYWdlICs9IFwi0L7QslwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIG5vUmVzdWx0czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImF1Y3VuIHJlc3VsdGF0IHRyb3V2ZVwiO1xyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJSZWNoZXJjaGVy4oCmXCI7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHdpbmRvdy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB3aW5kb3cuYXR0ID0gXCJjdXJyZW50X3NlbGVjdF9cIiArIGF0dDtcclxuICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlX3Rlcm1cIiwge1xyXG4gICAgICAgIHNlbGVjdGVkOiBhdHQsXHJcbiAgICAgICAgZW50aXR5OiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIiksXHJcbiAgICAgICAgY29sdW1uOiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1jb2x1bW5cIiksXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB3aW5kb3cuZWxlbWVudFxyXG4gICAgICAgIC5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkPVwiXCI+PC9vcHRpb24+JylcclxuICAgICAgICAuc2VsZWN0Mih7XHJcbiAgICAgICAgICAvL2FsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICBsYW5ndWFnZTogXCJmclwiLFxyXG4gICAgICAgICAgZGF0YTogZGF0YS5yZXN1bHRzLFxyXG4gICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xLFxyXG4gICAgICAgICAgZHJvcGRvd25Dc3NDbGFzczogd2luZG93LmF0dCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC52YWwoYXR0KVxyXG4gICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAkKFwiLmxvYWQtZXJcIikuZmFkZU91dCg3MCkucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIuZGV0X2ZvclwiKS5mYWRlSW4oNzApO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIHRvYXN0ci53YXJuaW5nKCdpbXBvc3NpYmxlIGRlIGNoYXJnZXIgbFxcJ2VudGl0ZXInLCAnRXJyZXVyJywge3RpbWVPdXQ6IDQwMDB9KVxyXG4gIH1cclxuICAvL2FwcGx5IHRvIHNlbGVjdDJcclxuICB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6b3BlblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJCh0aGlzKSlcclxuXHJcbiAgICB3aW5kb3cuZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuXHJcbiAgICAvL2FsZXJ0KClcclxuICAgICQoXCIudHRwXCIpLnJlbW92ZSgpO1xyXG4gICAgJChcIi5zZWxlY3QyLXNlYXJjaC0taGlkZVwiKS5hZnRlcihcclxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duIHR0cFwiPjxpbnB1dCBjbGFzcz1cInR0IHNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIjBcIiBhdXRvY29tcGxldGU9XCJvblwiIGF1dG9jb3JyZWN0PVwib25cIiBhdXRvY2FwaXRhbGl6ZT1cIm9uXCIgc3BlbGxjaGVjaz1cInRydWVcIiByb2xlPVwidGV4dGJveFwiIC8+PC9zcGFuPidcclxuICAgICk7XHJcbiAgICAkKFwiLnR0XCIpLnR5cGVXYXRjaCh7XHJcbiAgICAgIGhpZ2hsaWdodDogZmFsc2UsXHJcbiAgICAgIHdhaXQ6IDEwMCxcclxuICAgICAgY2FwdHVyZUxlbmd0aDogMixcclxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZW5ubiwgZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZSlcclxuICAgICAgICAkKFwiLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnNlbGVjdDItcmVzdWx0c1wiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgJzxwIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIj5SZWNoZXJjaGVy4oCmPC9wPidcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuc2VhcmNoID0gdmFsdWVubm47XHJcbiAgICAgICAgLy9hbGVydCgodmFsdWVubm4pKVxyXG4gICAgICAgIGlmICh3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIikpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgICAgIFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVybTogdmFsdWVubm4sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogYXR0LFxyXG4gICAgICAgICAgICAgICAgZW50aXR5OiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIiksXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWNvbHVtblwiKSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlbm5uID09ICQoXCIudHRcIikudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgICAgICAgICAgIC5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkPVwiXCI+PC9vcHRpb24+JylcclxuICAgICAgICAgICAgICAgICAgLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9hbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQucmVzdWx0cyxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmVsZW1lbnQuc2VsZWN0MihcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KHZhbHVlbm5uKVxyXG4gICAgICAgICAgICAgICAgJChcIi50dFwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgJChcIi50dFwiKS52YWwod2luZG93LnNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiaW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGwnZW50aXRlclwiLCBcIkVycmV1clwiLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmVsZW1lbnQub24oXCJzZWxlY3QyOmNsb3NlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuICB9KTtcclxuICB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KClcclxuICAgIHZhciBkYXRhID0gZS5wYXJhbXMuZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgJChcIi5wcml4dW5pdGFpcmVcIikudmFsKGRhdGEucHJpeEFjaGF0KTtcclxuICAgICQoXCIudHZhXCIpLnZhbChkYXRhLnR2YSk7XHJcbiAgICAkKFwiLnNlbGVjdDJfdW5pdGVcIikudmFsKGRhdGEudW5pdGUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VsZWN0Mi1jb250YWluZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8kKCcuc2VsZWN0Mi1zZWFyY2gtLWhpZGUnKS5hZnRlcignPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24gdHRwXCI+PGlucHV0IGNsYXNzPVwidHQgc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiMFwiIGF1dG9jb21wbGV0ZT1cIm9uXCIgYXV0b2NvcnJlY3Q9XCJvblwiIGF1dG9jYXBpdGFsaXplPVwib25cIiBzcGVsbGNoZWNrPVwidHJ1ZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgLz48L3NwYW4+Jyk7XHJcbiAgICAkKFwiLnR0XCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICB9KTtcclxufVxyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2xpc3RcIikgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgdHlwZTogXCJnZXRcIixcclxuICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGFibGUuaGFzT3duUHJvcGVydHkoJ3NldHRpbmdzJykpIHtcclxuICAgICAgICAgIHZhciBzZXR0aW5ncyA9IHRhYmxlLnNldHRpbmdzKCk7XHJcbiAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBvcmRlcjogW1swLCBcImFzY1wiXV0sXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgdmlzaWJsZTogdHJ1ZSB9LFxyXG4gIF0sXHJcbiAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxuICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgbGV0IHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG4gIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhzdCk7XHJcbiAgLy9pZiAoc3QgIT0gbnVsbCkge1xyXG4gIC8vICAgICQuZWFjaChzdC5jb2x1bW5zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gIC8vICAgICAgICBpZiAodmFsdWUuc2VhcmNoLnNlYXJjaCAhPSBcIlwiKSB7XHJcbiAgLy8gICAgICAgICAgICAkKCcucmVtb3ZlLWZpbHRlcicpLnNob3coKTtcclxuICAvLyAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAvLyAgICAgICAgfVxyXG4gIC8vICAgIH0pO1xyXG4gIC8vfVxyXG5cclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChcclxuICAgIGFwaSxcclxuICAgIFsxLCAzLCA0LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSxcclxuICAgIFtdXHJcbiAgKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFsyXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbNV0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcbi8qY29sdW1uIDEgZGUgZGF0YXRibGUgc2VhcmNoKi9cclxuXHJcbiQoXCIucmVtb3ZlLWZpbHRlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoXCIuYWN0aW9uX2hlYWRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQoXCIuYWN0aW9uICwuYWN0aW9uX2hlYWRcIikucHJvcChcImNoZWNrZWRcIiwgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcbiAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG59KTtcclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hY3Rpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcblxyXG4vKiAgJCgnI2dyaWQnKS5vbignY2xpY2snLCAnLnN0YXR1dF9vcCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gdmFyIG5hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuIHZhciBpZCA9ICQodGhpcykuYXR0cigncm9sJyk7ICovXHJcbi8vYWxlcnQobmFtZStcIlwiK2lkKTtcclxuJChcIi5zZWxlY3QyX2RlbW9fM1wiKS5zZWxlY3QyKHtcclxuICBwbGFjZWhvbGRlcjogXCJBY3Rpb25cIixcclxuICBhbGxvd0NsZWFyOiB0cnVlLFxyXG59KTtcclxuXHJcbiQoXCIubGlzdF9hY3Rpb25zXCIpLmNoYW5nZShmdW5jdGlvbiAoZSkge30pO1xyXG4kKFwiI2dyaWQgdGJvZHlcIikub24oXCJjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhYmxlLiQoXCJ0ci5zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgLy9hbGVydCgxKVxyXG4gIC8qICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICBcclxuICAgICAkKCcjZ3JpZCcpLnNob3coNTAwKTtcclxuICAgICB9KTsqL1xyXG4gIC8vIGNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzISEhJyk7XHJcbiAgJChcIiNfc3RhdHV0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZV9zdGF0dXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmFjdGlvbnNcIikub24oXCJjbGlja1wiLCBcIi5jbG9zZS1tZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8kKCcuY2xvc2UtbWUnKS5jbGljayhmdW5jdGlvbiAoZSl7XHJcbiAgICAkKFwiLmFjdGlvbnNcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgJChcIi5hY3Rpb25zXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1fc3RhdHV0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZV9zdGF0dXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2codGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAkKFwiLmZvcm1fc3RhdHV0ICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICB2YWwudGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG4gICQoXCIjX2RlbWFuZGVcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX1BhaWVtZW50XCIsIHsgaWQ6IGlkIH0pO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICBcIndhcm5pbmdcIixcclxuICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI19zaG93XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZWZyc2NhYl9jb25zdWx0ZVwiLCB7IGlkOiBpZCB9KTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgJChcIiNfaW1wcmltZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcblxyXG4gICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJmYWN0dXJlSWRcIik7XHJcbiAgICAvLyBhbGVydChpZCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJwZGZfc2hvd19mYWN0dXJlXCIsIHsgaWQ6IGlkIH0pO1xyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICBcIndhcm5pbmdcIixcclxuICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLm5ld1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIilbMF07XHJcbiAgICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcImZhY3R1cmVJZFwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlc3QpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgLy8gYWxlcnQoaWQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZV9pbnNlcnRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgJChcIi5cIiArIHNlbGVjdG9yICsgXCIgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXdhcm5pbmcnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuZm9ybVwiKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCB0Ym9keVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiLm5ldy1hcnRpY2xlLWJ0blwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHkgdHJcIikubm90KFwiOmxhc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgLy8gICAgJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1zdWNjZXNzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAuaGlkZSgpXHJcbiAgICAgIC5hZnRlcihcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWQtZXJcIj48ZGl2IGNsYXNzPVwibGRzLWVsbGlwc2lzXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICAgKTtcclxuICAgIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKCQoXCIuYXJ0aWNsZXNcIiksIFwiXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLm5ldy1hcnRpY2xlLWJ0blwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICAkKFwiLmVkaXQtbmV3LWFydGljbGVcIikuc2hvdygpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtX2FkZF9hcnRpY2xlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KCk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICB2YXIgaWQgPSAkKFwiI19pZFwiKS52YWwoKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfZmFjdHVyZWF2b2lyX2luc2VydFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgZGF0YTogZHRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgLyogICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICQoXCIuZGV0YWlsX2Zvcm1fZWRpdCAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIudWFfdF9mYWN0dXJlZnJzY2FiX2FwcGx5X3RyYW5zaXRpb25zXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10aXRsZVwiKTtcclxuICAgIHZhciB0cmFuc2l0aW9uID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10cmFuc2l0aW9uXCIpO1xyXG5cclxuICAgIGR0YS5hcHBlbmQoXCJpZFwiLCBpZCk7XHJcbiAgICBkdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xyXG4gICAgZHRhLmFwcGVuZChcInRyYW5zaXRpb25cIiwgdHJhbnNpdGlvbik7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgIFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgcGFzc2VyIGEgbCdldGF0ICdcIiArXHJcbiAgICAgICAgICAgIHRpdGxlICtcclxuICAgICAgICAgICAgXCInIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkgIVwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm9uICFcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfYXBwbHlfdHJhbnNpdGlvbnNcIiwge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIC8qdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfUGFpZW1lbnRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcIkZhY3R1cmUgbm9uIHJlbnNlaWduZSBcIiwgXCJ3YXJuaW5nXCIsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvd1wiKS5EYXRhVGFibGUoe1xyXG4gIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICBwYWdpbmc6IGZhbHNlLFxyXG4gIGF1dG9XaWR0aDogZmFsc2UsXHJcbn0pO1xyXG5cclxuJChcIi5fZ2VuZXJlcl9mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIGlkID0gJChcImlucHV0W25hbWU9X2lkXVwiKS52YWwoKTtcclxuXHJcbiAgLy9hbGVydCgpO1xyXG4gIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG5cclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZWZyc2NhYl9hdm9pcl9pbnNlcnRcIiwgeyBpZDogaWQgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICQuZWFjaChyZXN1bHQuZXJyb3JzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgdG9hc3RyV2lkdG91dFByb2dyZXNzLndhcm5pbmcodmFsdWUsIFwid2FybmluZ1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbnZhciB0YWJsZVNob3cgPSAkKFwiI2RhdGF0YWJsZS1zaG93MlwiKS5EYXRhVGFibGUoe1xyXG4gIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICBwYWdpbmc6IGZhbHNlLFxyXG4gIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIChyb3csIGRhdGEsIHN0YXJ0LCBlbmQsIGRpc3BsYXkpIHtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICBkYXRhO1xyXG4gICAgdmFyIHRvdGFsLCBwYWdlVG90YWw7XHJcbiAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICB2YXIgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgPyBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDFcclxuICAgICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBpXHJcbiAgICAgICAgOiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUb3RhbCBvdmVyIGFsbCBwYWdlc1xyXG4gICAgdG90YWwgPSBhcGlcclxuICAgICAgLmNvbHVtbig0KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBUb3RhbCBvdmVyIHRoaXMgcGFnZVxyXG4gICAgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNCwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZm9vdGVyXHJcbiAgICAkKGFwaS5jb2x1bW4oMSkuZm9vdGVyKCkpLmh0bWwoXHJcbiAgICAgIFwiVG90YWwgOiBcIiArIChNYXRoLnJvdW5kKHBhZ2VUb3RhbCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcclxuICAgICk7XHJcbiAgfSxcclxufSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvLyQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5wYWllbWVudCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8kKCcucGFpZW1lbnQnKS5iaW5kKCdsb2FkJyxmdW5jdGlvbigpe1xyXG5cclxuICAkKFwiLnBhaWVtZW50XCIpXHJcbiAgICAub24oXCJjaGFuZ2UgcmlnaHRub3dcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAyKSB7XHJcbiAgICAgICAgJChcIi5ibG9jX2NoZXF1ZVwiKS5zaG93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiN1bml2X3RfcmVnbGVtZW50X2RhdGVFY2hlYW5jZVwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgJChcIiN1bml2X3RfcmVnbGVtZW50X3JlZmVyZW5jZVwiKS52YWwobnVsbCk7XHJcbiAgICAgICAgJChcIi5ibG9jX2NoZXF1ZVwiKS5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gMSB8fCAkKHRoaXMpLnZhbCgpID09IDQpIHtcclxuICAgICAgICAkKFwiLmJsb2NfYmFucXVlXCIpLmhpZGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmJsb2NfYmFucXVlXCIpLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgICAvLyAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9KVxyXG4gICAgLnRyaWdnZXJIYW5kbGVyKFwicmlnaHRub3dcIik7XHJcbn0pO1xyXG5cclxuJChcIiNfZGVsZXRlX2ZhY3R1cmVcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcbiAgdmFyIG9iaiA9IHtcclxuICAgIHJvdXRlOiBcInRfVWFURmFjdHVyZWZyc2NhYl9kZWxldGVfZmFjdHVyZVwiLFxyXG4gICAgcmVkaXJlY3Rpb246IFwidWFfdF9mYWN0dXJlX2luZGV4XCIsXHJcbiAgICB0b2tlbjogdG9rZW4sXHJcbiAgICBpZDogaWQsXHJcbiAgfTtcclxuICBkZWxldGVDYWIob2JqKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlMiA9ICQoXCIjZ3JpZDJcIikuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZWZyc2NhYl9hdm9pcl9saXN0XCIpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgdHlwZTogXCJnZXRcIixcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICBdLFxyXG4gIHBhZ2VMZW5ndGg6IDE1LFxyXG4gIG9yZGVyOiBbWzAsIFwiYXNjXCJdXSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICAgIHtvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXX0sXHJcbiAgICAgIHtvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IHRydWV9LFxyXG4gICAgICB7b3JkZXJhYmxlOiB0cnVlfSxcclxuICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgIHtvcmRlcmFibGU6IHRydWV9LFxyXG4gICAgICB7b3JkZXJhYmxlOiB0cnVlfSxcclxuICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgIHtvcmRlcmFibGU6IHRydWV9LFxyXG4gICAgICB7b3JkZXJhYmxlOiB0cnVlfSxcclxuICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgIHtvcmRlcmFibGU6IHRydWV9LFxyXG4gICAgICB7b3JkZXJhYmxlOiB0cnVlfSxcclxuICAgICAge29yZGVyYWJsZTogdHJ1ZX0sXHJcbiAgICAgIHtvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IHRydWV9LFxyXG4gIF0sXHJcbiAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgZG9tOiAnPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiZj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgLy8gZml4ZWRIZWFkZXI6IHRydWUsXHJcbn0pO1xyXG50YWJsZTIub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChcclxuICAgICAgICAgIGFwaSxcclxuICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgW11cclxuICAgICAgICAgICk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNfYXZvaXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KClcclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF91YXRmYWN0dXJlX2FkZF9hdm9pcl9wb3B1cFwiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2RcIikuaHRtbChyZXN1bHQpLmhpZGUoKTtcclxuICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5zcHJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuYm9kXCIpLmZhZGVJbigpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoJ2QnKVxyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcblxyXG4gIHZhciBpZCA9ICQoXCIjX2lkXCIpLnZhbCgpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG5cclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHRlc3QpO1xyXG4gIC8vY29uc29sZS5sb2coZS50eXBlKTtcclxuICAvLyBhbGVydChpZCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9VYVRGYWN0dXJlZnJzY2FiX3VwZGF0ZV9hdm9pclwiLCB7IGlkOiBpZCB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0gXHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKFwiLl9mYWN0dXJlXCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvL2FsZXJ0KCk7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIC8vdmFyIGlkID0gJCgnI3Rlc3QnKS5kYXRhKFwiZmFjdHVyZUlkXCIpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24yXCIpKTtcclxuXHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF91YXRmYWN0dXJlX2FkZF9hdm9pcl9wb3B1cFwiKSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgLy8kKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoXCIubmV3XCIpLm9mZnNldCgpLnRvcH0sIDUwMCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXdhcm5pbmcnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNNb2RhbERvY3VtZW50RHluYW1pcXVlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgLy8gICAgJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC1zdWNjZXNzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG52YXIgb2JqMiA9IG5ldyBPYmplY3QoKTtcclxuLy9vYmoyW1wiZG9zc2llcl9wYXRoXCJdID0gXCJjaGFuZ2VfZG9zc2llcl9mYWN0dXJlX3BvcHVwXCI7XHJcbmxpc3RBY3Rpb25zLmxpc3RBY3Rpb25zKG9iajIpO1xyXG5cclxuXHJcbiQoXCIucGFydmVudWVcIikuc2VsZWN0MigpO1xyXG5pZigkKFwiLnBhcnZlbnVlXCIpLnNlbGVjdDIoJ2RhdGEnKSAmJiAkKFwiLnBhcnZlbnVlXCIpLnNlbGVjdDIoJ2RhdGEnKVswXS50ZXh0LmluZGV4T2YoJ25vbiBwYXJ2ZW51ZScpICE9PSAtMSl7XHJcbiAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdjbGFzc1Nob3cnKTsgXHJcbn1lbHNle1xyXG4gICAgJCgnLmRhdGVEb2MsLnJlZkRvYycpLnNob3coKS5hZGRDbGFzcygnY2xhc3NTaG93Jyk7ICBcclxufVxyXG5cclxuJCgnLnBhcnZlbnVlJykub24oJ3NlbGVjdDI6c2VsZWN0aW5nJywgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYoZS5wYXJhbXMuYXJncy5kYXRhLnRleHQuaW5kZXhPZignbm9uIHBhcnZlbnVlJykgIT09IC0xKXtcclxuICAgICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ2NsYXNzU2hvdycpOyBcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5zaG93KCkuYWRkQ2xhc3MoJ2NsYXNzU2hvdycpOyAgXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLnNhdmVfZmFjdHVyZV9nZW5lcmVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgkKCcjaWQnKS5hdHRyKCd2YWx1ZScpKTtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgLy92YXIgaWQgPSAkKCcjdGVzdCcpLmRhdGEoXCJmYWN0dXJlSWRcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LWJ1dHRvbjJcIikpO1xyXG5cclxuICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2dlbmVyZXJcIix7aWQ6JCgnI2lkJykuYXR0cigndmFsdWUnKX0pLFxyXG4gICAgICBkYXRhOiBkdGEsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHt0aW1lT3V0OiA0MDAwfSk7XHJcbiAgICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKVxyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICB2YXIgcm93X2luZGV4ID0gJCh0aGlzKS5jbG9zZXN0KFwiLnRhYmxlLWRldGFpbCA+IHRib2R5ICA+IHRyXCIpLmluZGV4KCk7XHJcbiAgLy92YXIgY29sX2luZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVhX3RfZmFjdHVyZWZyc2NhYl9lZGl0X2RldGFpbFwiLCB7IGlkOiBpZCB9KSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgLy8gJCgnLnRhYmxlLWRldGFpbCB0cicpLmVxKHJvd19pbmRleCsxKS5hZGRDbGFzcygndGFibGUtdHItc3R5bGUnKTtcclxuICAgICAgJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKVxyXG4gICAgICAgIC5lcShyb3dfaW5kZXgpXHJcbiAgICAgICAgLmFkZENsYXNzKFwidGFibGUtdHItc3R5bGVcIilcclxuICAgICAgICAuaHRtbChcIjx0ZCBjb2xzcGFuPScxMCc+XCIgKyByZXN1bHQgKyBcIjwvdGQ+XCIpO1xyXG4gICAgICAkKCQoXCIudGFibGUtZGV0YWlsID4gdGJvZHkgID4gdHJcIikuZXEocm93X2luZGV4KSlcclxuICAgICAgICAuZmluZChcIi5kZXRfZm9yXCIpXHJcbiAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgIC5hZnRlcihcclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICk7XHJcbiAgICAgIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKFxyXG4gICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKS5maW5kKFwiLmFydGljbGVzXCIpLFxyXG4gICAgICAgICQoJChcIi50YWJsZS1kZXRhaWwgPiB0Ym9keSAgPiB0clwiKS5lcShyb3dfaW5kZXgpKVxyXG4gICAgICAgICAgLmZpbmQoXCIuYXJ0aWNsZXNcIilcclxuICAgICAgICAgIC5hdHRyKFwiaWYtc2VsZWN0ZWRcIilcclxuICAgICAgKTtcclxuICAgICAgLy8kKFwiLmxvYWQtZXJcIikuZmFkZU91dCgpLnJlbW92ZSgpO1xyXG4gICAgICAvLyAkKCcuZGV0X2ZvcicpLmZhZGVJbigyMDApXHJcbiAgICAgICQoXCIuYm9kXCIpLmVtcHR5KCk7XHJcbiAgICAgICQoXCIuc3ByXCIpLmZhZGVJbigpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlXCIpLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICAgICBLVERhdGF0YWJsZXNTZWFyY2hPcHRpb25zQWR2YW5jZWRTZWFyY2guaW5pdCgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5ib2RcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL1xyXG4gICAgICAvLyAgICBhbGVydChyb3dfaW5kZXgpO1xyXG4gICAgICAvLyAgICAgICAgICAgIHZhciBzbGggPSBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5lbXB0eSgpLmFwcGVuZChcIjx0ZCBzdHlsZT0nZGlzcGxheTogbm9uZTsnPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGR0YSk7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX3VwZGF0ZV9kZXRhaWxcIiwgeyBpZDogaWQgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgLyogICQoJy5lcnJvcnMtbGlzdCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgJChcIi5kZXRhaWxfZm9ybSAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1fZGVsZXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgdmFyIHRva2VuID0gZHRhLmdldChcIl90b2tlblwiKTtcclxuICAvLyAgICB2YXIgaWQgPSAkKFwiaW5wdXRbbmFtZT1faWRdXCIpLnZhbCgpO1xyXG4gIC8vICAgIHZhciB0b2tlbiA9ICQoXCJpbnB1dFtuYW1lPV90b2tlbl1cIikudmFsKCk7XHJcbiAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAuZmlyZSh7XHJcbiAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2F2b2lyX2FydGljbGVfZGVsZXRlXCIsIHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgLy8gc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdC5kYXRhID0gXCJlcnJvclwiKSkge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvL3N3YWwocmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7IiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVDYWIob2JqKSB7XHJcblxyXG4gICAvLyB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcblxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyb3V0ZSddLCB7J2lkJzogb2JqWydpZCddLCAndG9rZW4nOiBvYmpbJ3Rva2VuJ119KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVEZW1hbmRlKG9iaikge1xyXG5cclxuICAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAgLy9jb25zb2xlLmxvZyhpZCArICcgJyArIHRva2VuKTtcclxuICAgICBcclxuICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgJC5hamF4KHtcclxuIFxyXG4gICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICB9KTtcclxuIH1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=