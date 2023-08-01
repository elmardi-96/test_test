(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tfacturefrscabacompte"],{

/***/ "./assets/js/components/module_achat/tfacturefrscabacompte.js":
/*!********************************************************************!*\
  !*** ./assets/js/components/module_achat/tfacturefrscabacompte.js ***!
  \********************************************************************/
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
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");









var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.setRoutingData(routes);





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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("ua_t_facturefrscab_list") + location.search,
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("datatables_langue"),
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__["CustomSearchText"](api, [1, 3, 4, 6, 7, 8, 9, 10, 11, 12], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__["CustomSearchDate"](api, [2], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__["CustomSearchSelect"](api, [5], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__["CustomSearchCheckbox"](api, [0], []);
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
$(".action_head").click(function () {
  $(".action ,.action_head").prop("checked", $(this).prop("checked"));
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
});
$("body").on("click", ".action", function () {
  $(".list_actions_bloc").toggle($(".action").filter(":checked").length >= 1);
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("ua_t_facture_statut", {
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
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("ua_t_facture_statut", {
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
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("ua_t_facturefrscab_Paiement", {
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
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("ua_t_facturefrscab_consulte", {
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
      var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("pdf_show_facture", {
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
  $(".edit").on("submit", ".form", function (e) {
    //alert('d')
    var form_name = $(this).attr("name");
    var dta = new FormData(this);
    var selector = $(this);
    // Create a new instance of ladda for the specified button

    var id = $("#_id").val();

    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.querySelector(".my-button"));

    // Start loading
    l.start();
    // console.log(test);
    //console.log(e.type);
    // alert(id);
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_UaTFacturefrscab_update_acompte", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        l.stop();
        if (result.errors) {
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_10__["ShowFormErrors"])(selector, form_name, result.errors);
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
  $(".edit").on("submit", ".detail_form_add_article", function (e) {
    //alert();
    var dta = new FormData(this);
    var form_name = $(this).attr("name");
    var id = $("#_id").val();
    var selector = $(this);

    // Create a new instance of ladda for the specified button
    var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

    // Start loading
    l.start();
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_factureavoir_insert", {
        id: id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        //  console.log(result);
        if (result.errors) {
          l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_10__["ShowFormErrors"])(selector, form_name, result.errors);
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("ua_t_facturefrscab_apply_transitions", {
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
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("ua_t_facturefrscab_avoir_insert", {
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
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_11__["deleteCab"])(obj);
  e.preventDefault();
});
var table2 = $("#grid2").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("ua_t_facturefrscab_acompte_list") + location.search,
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("datatables_langue"),
    processing: true
  }
  // fixedHeader: true,
});

table2.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__["CustomSearchText"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__["CustomSearchDate"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__["CustomSearchSelect"](api, [], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_12__["CustomSearchCheckbox"](api, [0], []);
});
$("body").on("click", "#_acompte", function (e) {
  //alert();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_uatfacture_add_acompte_popup"),
    success: function success(result) {
      $(".bod").html(result).hide();
      $("#ModalDocumentDynamique").modal("show");
      $(".sel2").select2();
      setTimeout(function () {
        $(".spr").hide();
        $(".bod").fadeIn();
      }, 600);
    }
  });
  e.preventDefault();
});
$("body").on("submit", ".save_form_acompte", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this);
  //var id = $('#test').data("factureId");

  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.querySelector(".my-button2"));

  // Start loading
  l.start();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_uatfacture_add_acompte_popup"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.code == 403) {
        l.stop();
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      }
      if (result.errors) {
        //  console.log(result.errors);
        l.stop();
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_10__["ShowFormErrors"])(selector, form_name, result.errors);
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

        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_UaTFacturefrscab_update_acompte", {
          id: result.data
        });
        window.location.href = url;

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
_functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_13__["listActions"](obj2);
$(".parvenue").select2();
if ($(".parvenue").select2('data') && $(".parvenue").select2('data')[0].text.indexOf('non parvenue') !== -1) {
  $('.dateDoc,.refDoc').hide().removeClass('classShow');
} else {
  $('.dateDoc,.refDoc').show().addClass('classShow');
}
$('.parvenue').on('select2:selecting', function (e) {
  //alert()
  if (e.params.args.data.text.indexOf('non parvenue') !== -1) {
    $('.dateDoc,.refDoc').hide().removeClass('classShow');
  } else {
    $('.dateDoc,.refDoc').show().addClass('classShow');
  }
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

},[["./assets/js/components/module_achat/tfacturefrscabacompte.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~tfacturefrscabacompte",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfYWNoYXQvdGZhY3R1cmVmcnNjYWJhY29tcHRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mdW5jdGlvbnMvZGVsZXRlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducyIsImVsZW1lbnQiLCJhdHQiLCJmbiIsInNlbGVjdDIiLCJhbWQiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJhcmdzIiwib3ZlckNoYXJzIiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwibWVzc2FnZSIsImlucHV0VG9vU2hvcnQiLCJyZW1haW5pbmdDaGFycyIsIm1pbmltdW0iLCJsb2FkaW5nTW9yZSIsIm1heGltdW1TZWxlY3RlZCIsIm5vUmVzdWx0cyIsInNlYXJjaGluZyIsIndpbmRvdyIsImF0dHIiLCJhamF4IiwidHlwZSIsInVybCIsImdlbmVyYXRlIiwic2VsZWN0ZWQiLCJlbnRpdHkiLCJjb2x1bW4iLCJ0aGVuIiwiZGF0YSIsInByZXBlbmQiLCJsYW5ndWFnZSIsInJlc3VsdHMiLCJtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsImRyb3Bkb3duQ3NzQ2xhc3MiLCJ2YWwiLCJ0cmlnZ2VyIiwiZmFkZU91dCIsInJlbW92ZSIsImZhZGVJbiIsIm9uIiwiZSIsInNlYXJjaCIsImFmdGVyIiwidHlwZVdhdGNoIiwiaGlnaGxpZ2h0Iiwid2FpdCIsImNhcHR1cmVMZW5ndGgiLCJjYWxsYmFjayIsInZhbHVlbm5uIiwiaGlkZSIsImRhdGFUeXBlIiwidGVybSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJlbXB0eSIsImZvY3VzIiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwicHJpeEFjaGF0IiwidHZhIiwidW5pdGUiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxvY2F0aW9uIiwiZGVmZXJSZW5kZXIiLCJzdGF0ZVNhdmUiLCJsZW5ndGhNZW51IiwicGFnZUxlbmd0aCIsIm9yZGVyIiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsIndpZHRoIiwic2VhcmNoYWJsZSIsInRhcmdldHMiLCJ2aXNpYmxlIiwiZG9tIiwiYnV0dG9ucyIsInRleHQiLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwicmVsb2FkIiwicHJvY2Vzc2luZyIsInNldHRpbmdzIiwiYXBpIiwiZGF0YVRhYmxlIiwiQXBpIiwic3QiLCJsb2FkZWQiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJjbGljayIsInByZXZlbnREZWZhdWx0IiwicHJvcCIsInRvZ2dsZSIsImZpbHRlciIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsImNoYW5nZSIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImRvY3VtZW50IiwicmVhZHkiLCJpZCIsInJvdyIsImh0bWwiLCJ0b2dnbGVDbGFzcyIsImVycm9yIiwianFYSFIiLCJkdGEiLCJGb3JtRGF0YSIsImZvcm1fbmFtZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJlcnJvcnMiLCJqUXVlcnkiLCJlYWNoIiwidmlvbGF0aW9ucyIsImkiLCJwcm9wZXJ0eVBhdGgiLCJjb2x1bW5OYW1lIiwic3BsaXQiLCJ0aXRsZSIsImNvZGUiLCJocmVmIiwib3BlbiIsInNlbGVjdG9yIiwibCIsIkxhZGRhIiwicXVlcnlTZWxlY3RvciIsInN0YXJ0Iiwic3RvcCIsIlNob3dGb3JtRXJyb3JzIiwic2hvdyIsImFjdGl2ZUVsZW1lbnQiLCJ0cmFuc2l0aW9uIiwiYXBwZW5kIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidmFsdWUiLCJyZXNwb25zZUpTT04iLCJ0YWJsZVNob3ciLCJzY3JvbGxZIiwic2Nyb2xsQ29sbGFwc2UiLCJwYWdpbmciLCJhdXRvV2lkdGgiLCJzdWJtaXQiLCJrZXkiLCJ0b2FzdHJXaWR0b3V0UHJvZ3Jlc3MiLCJmb290ZXJDYWxsYmFjayIsImVuZCIsImRpc3BsYXkiLCJ0b3RhbCIsInBhZ2VUb3RhbCIsImludFZhbCIsInJlcGxhY2UiLCJyZWR1Y2UiLCJhIiwiYiIsInBhZ2UiLCJmb290ZXIiLCJNYXRoIiwicm91bmQiLCJ0b0ZpeGVkIiwidHJpZ2dlckhhbmRsZXIiLCJ0b2tlbiIsIm9iaiIsInJvdXRlIiwicmVkaXJlY3Rpb24iLCJkZWxldGVDYWIiLCJ0YWJsZTIiLCJtb2RhbCIsInNldFRpbWVvdXQiLCJvYmoyIiwiT2JqZWN0IiwibGlzdEFjdGlvbnMiLCJpbmRleE9mIiwiZGVsZXRlRGVtYW5kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQzdHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUNtQztBQUVYO0FBRW1DO0FBQ3RCO0FBQ3BDO0FBQy9CSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUMxQ0MsV0FBVyxFQUFFO0lBQ1hDLGFBQWEsRUFBRSxtQ0FB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TSxDQUFDbUQsUUFBUSxDQUFDaUUsSUFBSSxHQUFHaEgsR0FBRztZQUM5QjtVQUVKLENBQUMsTUFBTSxJQUFJK0IsTUFBTSxDQUFDZ0YsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUMzQjNFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTixNQUFNLENBQUMzQyxPQUFPLENBQUN5RSxJQUFJLEVBQUU5QixNQUFNLENBQUMzQyxPQUFPLENBQUMwSCxLQUFLLEVBQUU7Y0FBQ3hFLE9BQU8sRUFBRTtZQUFJLENBQUMsQ0FBQztVQUM5RTtRQUNKLENBQUM7UUFDRHlELEtBQUssRUFBRSxlQUFVQyxLQUFLLEVBQUVoRSxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUM3Q0csTUFBTSxDQUFDQyxPQUFPLENBQUMyRCxLQUFLLENBQUNzQyxZQUFZLENBQUNsSixPQUFPLENBQUN5RSxJQUFJLEVBQUVtQyxLQUFLLENBQUNzQyxZQUFZLENBQUNsSixPQUFPLENBQUMwSCxLQUFLLEVBQUU7WUFBQ3hFLE9BQU8sRUFBRTtVQUFJLENBQUMsQ0FBQztRQUN0RztNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQyIsImZpbGUiOiJ0ZmFjdHVyZWZyc2NhYmFjb21wdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuaW1wb3J0ICogYXMgbGlzdEFjdGlvbnMgZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG5nbG9iYWwuJCA9ICQ7XHJcblxyXG5jb25zdCBTd2FsID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGVcIixcclxuICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gIH0sXHJcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKGVsZW1lbnQsIGF0dCkge1xyXG4gICQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKFwic2VsZWN0Mi9pMThuL2ZyXCIsIFtdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBSdXNzaWFuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvckxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0VG9vTG9uZzogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDRg9C00LDQu9C40YLQtSBcIiArIG92ZXJDaGFycyArIFwiINGB0LjQvNCy0L7Qu1wiO1xyXG4gICAgICAgIGlmIChvdmVyQ2hhcnMgPj0gMiAmJiBvdmVyQ2hhcnMgPD0gNCkge1xyXG4gICAgICAgICAgbWVzc2FnZSArPSBcItCwXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdmVyQ2hhcnMgPj0gNSkge1xyXG4gICAgICAgICAgbWVzc2FnZSArPSBcItC+0LJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlID1cclxuICAgICAgICAgIFwiVGFwZXogXCIgK1xyXG4gICAgICAgICAgcmVtYWluaW5nQ2hhcnMgK1xyXG4gICAgICAgICAgXCIgY2FyYWN0w6hyZSBvdSBwbHVzIHBvdXIgZmFpcmUgZGVzIHJlY2hlcmNoZXNcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG4gICAgICB9LFxyXG4gICAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcItCS0Ysg0LzQvtC20LXRgtC1INCy0YvQsdGA0LDRgtGMIFwiICsgYXJncy5tYXhpbXVtICsgXCIg0Y3Qu9C10LzQtdC90YJcIjtcclxuXHJcbiAgICAgICAgaWYgKGFyZ3MubWF4aW11bSA+PSAyICYmIGFyZ3MubWF4aW11bSA8PSA0KSB7XHJcbiAgICAgICAgICBtZXNzYWdlICs9IFwi0LBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubWF4aW11bSA+PSA1KSB7XHJcbiAgICAgICAgICBtZXNzYWdlICs9IFwi0L7QslwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIG5vUmVzdWx0czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImF1Y3VuIHJlc3VsdGF0IHRyb3V2ZVwiO1xyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJSZWNoZXJjaGVy4oCmXCI7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHdpbmRvdy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB3aW5kb3cuYXR0ID0gXCJjdXJyZW50X3NlbGVjdF9cIiArIGF0dDtcclxuICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZmluZF9hcnRpY2xlX3Rlcm1cIiwge1xyXG4gICAgICAgIHNlbGVjdGVkOiBhdHQsXHJcbiAgICAgICAgZW50aXR5OiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIiksXHJcbiAgICAgICAgY29sdW1uOiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1jb2x1bW5cIiksXHJcbiAgICAgIH0pLFxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB3aW5kb3cuZWxlbWVudFxyXG4gICAgICAgIC5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkPVwiXCI+PC9vcHRpb24+JylcclxuICAgICAgICAuc2VsZWN0Mih7XHJcbiAgICAgICAgICAvL2FsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICBsYW5ndWFnZTogXCJmclwiLFxyXG4gICAgICAgICAgZGF0YTogZGF0YS5yZXN1bHRzLFxyXG4gICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xLFxyXG4gICAgICAgICAgZHJvcGRvd25Dc3NDbGFzczogd2luZG93LmF0dCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC52YWwoYXR0KVxyXG4gICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAkKFwiLmxvYWQtZXJcIikuZmFkZU91dCg3MCkucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIuZGV0X2ZvclwiKS5mYWRlSW4oNzApO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIHRvYXN0ci53YXJuaW5nKCdpbXBvc3NpYmxlIGRlIGNoYXJnZXIgbFxcJ2VudGl0ZXInLCAnRXJyZXVyJywge3RpbWVPdXQ6IDQwMDB9KVxyXG4gIH1cclxuICAvL2FwcGx5IHRvIHNlbGVjdDJcclxuICB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6b3BlblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJCh0aGlzKSlcclxuXHJcbiAgICB3aW5kb3cuZWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuXHJcbiAgICAvL2FsZXJ0KClcclxuICAgICQoXCIudHRwXCIpLnJlbW92ZSgpO1xyXG4gICAgJChcIi5zZWxlY3QyLXNlYXJjaC0taGlkZVwiKS5hZnRlcihcclxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duIHR0cFwiPjxpbnB1dCBjbGFzcz1cInR0IHNlbGVjdDItc2VhcmNoX19maWVsZFwiIHR5cGU9XCJzZWFyY2hcIiB0YWJpbmRleD1cIjBcIiBhdXRvY29tcGxldGU9XCJvblwiIGF1dG9jb3JyZWN0PVwib25cIiBhdXRvY2FwaXRhbGl6ZT1cIm9uXCIgc3BlbGxjaGVjaz1cInRydWVcIiByb2xlPVwidGV4dGJveFwiIC8+PC9zcGFuPidcclxuICAgICk7XHJcbiAgICAkKFwiLnR0XCIpLnR5cGVXYXRjaCh7XHJcbiAgICAgIGhpZ2hsaWdodDogZmFsc2UsXHJcbiAgICAgIHdhaXQ6IDEwMCxcclxuICAgICAgY2FwdHVyZUxlbmd0aDogMixcclxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZW5ubiwgZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZSlcclxuICAgICAgICAkKFwiLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnNlbGVjdDItcmVzdWx0c1wiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgJzxwIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIj5SZWNoZXJjaGVy4oCmPC9wPidcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuc2VhcmNoID0gdmFsdWVubm47XHJcbiAgICAgICAgLy9hbGVydCgodmFsdWVubm4pKVxyXG4gICAgICAgIGlmICh3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIikpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgICAgIFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVybTogdmFsdWVubm4sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogYXR0LFxyXG4gICAgICAgICAgICAgICAgZW50aXR5OiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1lbnRpdHlcIiksXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWNvbHVtblwiKSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlbm5uID09ICQoXCIudHRcIikudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgICAgICAgICAgIC5wcmVwZW5kKCc8b3B0aW9uIHNlbGVjdGVkPVwiXCI+PC9vcHRpb24+JylcclxuICAgICAgICAgICAgICAgICAgLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9hbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQucmVzdWx0cyxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmVsZW1lbnQuc2VsZWN0MihcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KHZhbHVlbm5uKVxyXG4gICAgICAgICAgICAgICAgJChcIi50dFwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgJChcIi50dFwiKS52YWwod2luZG93LnNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiaW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGwnZW50aXRlclwiLCBcIkVycmV1clwiLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmVsZW1lbnQub24oXCJzZWxlY3QyOmNsb3NlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLnR0XCIpLnZhbCh3aW5kb3cuc2VhcmNoKTtcclxuICB9KTtcclxuICB3aW5kb3cuZWxlbWVudC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KClcclxuICAgIHZhciBkYXRhID0gZS5wYXJhbXMuZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgJChcIi5wcml4dW5pdGFpcmVcIikudmFsKGRhdGEucHJpeEFjaGF0KTtcclxuICAgICQoXCIudHZhXCIpLnZhbChkYXRhLnR2YSk7XHJcbiAgICAkKFwiLnNlbGVjdDJfdW5pdGVcIikudmFsKGRhdGEudW5pdGUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VsZWN0Mi1jb250YWluZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8kKCcuc2VsZWN0Mi1zZWFyY2gtLWhpZGUnKS5hZnRlcignPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24gdHRwXCI+PGlucHV0IGNsYXNzPVwidHQgc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiMFwiIGF1dG9jb21wbGV0ZT1cIm9uXCIgYXV0b2NvcnJlY3Q9XCJvblwiIGF1dG9jYXBpdGFsaXplPVwib25cIiBzcGVsbGNoZWNrPVwidHJ1ZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgLz48L3NwYW4+Jyk7XHJcbiAgICAkKFwiLnR0XCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICB9KTtcclxufVxyXG5cclxudmFyIHRhYmxlID0gJChcIiNncmlkXCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2xpc3RcIikgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgdHlwZTogXCJnZXRcIixcclxuICB9LFxyXG4gIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICBsZW5ndGhNZW51OiBbXHJcbiAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gIF0sXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgb3JkZXI6IFtbMCwgXCJhc2NcIl1dLFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1JVwiLCBzZWFyY2hhYmxlOiB0cnVlLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB2aXNpYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IHRydWUgfSxcclxuICBdLFxyXG4gIC8vIGRvbTogJ2xCZnJ0aXAnLFxyXG4gIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgYnV0dG9uczogW1xyXG4gICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH0sXHJcbiAgLy8gZml4ZWRIZWFkZXI6IHRydWUsXHJcbn0pO1xyXG50YWJsZS5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcblxyXG4gIC8vY29uc29sZS5sb2coc3QpO1xyXG4gIC8vaWYgKHN0ICE9IG51bGwpIHtcclxuICAvLyAgICAkLmVhY2goc3QuY29sdW1ucywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAvLyAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gIC8vICAgICAgICAgICAgJCgnLnJlbW92ZS1maWx0ZXInKS5zaG93KCk7XHJcbiAgLy8gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gICAgICAgIH1cclxuICAvLyAgICB9KTtcclxuICAvL31cclxuXHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoXHJcbiAgICBhcGksXHJcbiAgICBbMSwgMywgNCwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0sXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbMl0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzVdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG4vKmNvbHVtbiAxIGRlIGRhdGF0YmxlIHNlYXJjaCovXHJcblxyXG4kKFwiLnJlbW92ZS1maWx0ZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG4kKFwiLmFjdGlvbl9oZWFkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmFjdGlvbiAsLmFjdGlvbl9oZWFkXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbn0pO1xyXG5cclxuLyogICQoJyNncmlkJykub24oJ2NsaWNrJywgJy5zdGF0dXRfb3AnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuIHZhciBuYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ3JvbCcpOyAqL1xyXG4vL2FsZXJ0KG5hbWUrXCJcIitpZCk7XHJcbiQoXCIuc2VsZWN0Ml9kZW1vXzNcIikuc2VsZWN0Mih7XHJcbiAgcGxhY2Vob2xkZXI6IFwiQWN0aW9uXCIsXHJcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcclxufSk7XHJcblxyXG4kKFwiLmFjdGlvbl9oZWFkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmFjdGlvbiAsLmFjdGlvbl9oZWFkXCIpLnByb3AoXCJjaGVja2VkXCIsICQodGhpcykucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbn0pO1xyXG5cclxuJChcIi5saXN0X2FjdGlvbnNcIikuY2hhbmdlKGZ1bmN0aW9uIChlKSB7fSk7XHJcbiQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFibGUuJChcInRyLnNlbGVjdGVkXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvL2FsZXJ0KDEpXHJcbiAgLyogIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgIFxyXG4gICAgICQoJyNncmlkJykuc2hvdyg1MDApO1xyXG4gICAgIH0pOyovXHJcbiAgLy8gY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMhISEnKTtcclxuICAkKFwiI19zdGF0dXRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlX3N0YXR1dFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuYWN0aW9uc1wiKS5vbihcImNsaWNrXCIsIFwiLmNsb3NlLW1lXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyQoJy5jbG9zZS1tZScpLmNsaWNrKGZ1bmN0aW9uIChlKXtcclxuICAgICQoXCIuYWN0aW9uc1wiKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuICAkKFwiLmFjdGlvbnNcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV9zdGF0dXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlX3N0YXR1dFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0U3RhdHVzKTtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICQoXCIuZm9ybV9zdGF0dXQgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgIHZhbC50aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3BlcmF0aW9uXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgJChcIiNfZGVtYW5kZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfUGFpZW1lbnRcIiwgeyBpZDogaWQgfSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjX3Nob3dcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2NvbnN1bHRlXCIsIHsgaWQ6IGlkIH0pO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcGVyYXRpb25cIixcclxuICAgICAgICBcIndhcm5pbmdcIixcclxuICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI19pbXByaW1lclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuXHJcbiAgICB2YXIgaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcImZhY3R1cmVJZFwiKTtcclxuICAgIC8vIGFsZXJ0KGlkKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInBkZl9zaG93X2ZhY3R1cmVcIiwgeyBpZDogaWQgfSk7XHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9wZXJhdGlvblwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvL2FsZXJ0KCdkJylcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcblxyXG4gICAgdmFyIGlkID0gJChcIiNfaWRcIikudmFsKCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlc3QpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgLy8gYWxlcnQoaWQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfVWFURmFjdHVyZWZyc2NhYl91cGRhdGVfYWNvbXB0ZVwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgZGF0YTogZHRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuZGV0X2ZvclwiKVxyXG4gICAgICAuaGlkZSgpXHJcbiAgICAgIC5hZnRlcihcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWQtZXJcIj48ZGl2IGNsYXNzPVwibGRzLWVsbGlwc2lzXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PidcclxuICAgICAgKTtcclxuICAgIGNyZWF0ZV9jdXN0b21fZHJvcGRvd25zKCQoXCIuYXJ0aWNsZXNcIiksIFwiXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLm5ldy1hcnRpY2xlLWJ0blwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpXHJcbiAgICAkKFwiLmVkaXQtbmV3LWFydGljbGVcIikuc2hvdygpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZm9ybV9hZGRfYXJ0aWNsZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy9hbGVydCgpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgdmFyIGlkID0gJChcIiNfaWRcIikudmFsKCk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmdcclxuICAgIGwuc3RhcnQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2ZhY3R1cmVhdm9pcl9pbnNlcnRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgIC8qICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtX2VkaXQgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcigoXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnVhX3RfZmFjdHVyZWZyc2NhYl9hcHBseV90cmFuc2l0aW9uc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cihcImRhdGEtdGl0bGVcIik7XHJcbiAgICB2YXIgdHJhbnNpdGlvbiA9ICQodGhpcykuYXR0cihcImRhdGEtdHJhbnNpdGlvblwiKTtcclxuXHJcbiAgICBkdGEuYXBwZW5kKFwiaWRcIiwgaWQpO1xyXG4gICAgZHRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcclxuICAgIGR0YS5hcHBlbmQoXCJ0cmFuc2l0aW9uXCIsIHRyYW5zaXRpb24pO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAgIC5maXJlKHtcclxuICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgICBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciBhIGwnZXRhdCAnXCIgK1xyXG4gICAgICAgICAgICB0aXRsZSArXHJcbiAgICAgICAgICAgIFwiJyBwb3VyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpICFcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2FwcGx5X3RyYW5zaXRpb25zXCIsIHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAvKnZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX1BhaWVtZW50XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RyLndhcm5pbmcoXCJGYWN0dXJlIG5vbiByZW5zZWlnbmUgXCIsIFwid2FybmluZ1wiLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlU2hvdyA9ICQoXCIjZGF0YXRhYmxlLXNob3dcIikuRGF0YVRhYmxlKHtcclxuICBzY3JvbGxZOiBcIjIwMHB4XCIsXHJcbiAgc2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcbiAgcGFnaW5nOiBmYWxzZSxcclxuICBhdXRvV2lkdGg6IGZhbHNlLFxyXG59KTtcclxuXHJcbiQoXCIuX2dlbmVyZXJfZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBpZCA9ICQoXCJpbnB1dFtuYW1lPV9pZF1cIikudmFsKCk7XHJcblxyXG4gIC8vYWxlcnQoKTtcclxuICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b24yXCIpKTtcclxuXHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1YV90X2ZhY3R1cmVmcnNjYWJfYXZvaXJfaW5zZXJ0XCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAvLyQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChcIi5uZXdcIikub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAkLmVhY2gocmVzdWx0LmVycm9ycywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgIHRvYXN0cldpZHRvdXRQcm9ncmVzcy53YXJuaW5nKHZhbHVlLCBcIndhcm5pbmdcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICBsLnN0b3AoKTtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvdzJcIikuRGF0YVRhYmxlKHtcclxuICBzY3JvbGxZOiBcIjIwMHB4XCIsXHJcbiAgc2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcbiAgcGFnaW5nOiBmYWxzZSxcclxuICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gIGZvb3RlckNhbGxiYWNrOiBmdW5jdGlvbiAocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgZGF0YTtcclxuICAgIHZhciB0b3RhbCwgcGFnZVRvdGFsO1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgdmFyIGludFZhbCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8gaS5yZXBsYWNlKC9bXFwkLF0vZywgXCJcIikgKiAxXHJcbiAgICAgICAgOiB0eXBlb2YgaSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gaVxyXG4gICAgICAgIDogMDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVG90YWwgb3ZlciBhbGwgcGFnZXNcclxuICAgIHRvdGFsID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNClcclxuICAgICAgLmRhdGEoKVxyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgLy8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuICAgIHBhZ2VUb3RhbCA9IGFwaVxyXG4gICAgICAuY29sdW1uKDQsIHsgcGFnZTogXCJjdXJyZW50XCIgfSlcclxuICAgICAgLmRhdGEoKVxyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGZvb3RlclxyXG4gICAgJChhcGkuY29sdW1uKDEpLmZvb3RlcigpKS5odG1sKFxyXG4gICAgICBcIlRvdGFsIDogXCIgKyAoTWF0aC5yb3VuZChwYWdlVG90YWwgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpXHJcbiAgICApO1xyXG4gIH0sXHJcbn0pO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgLy8kKCdib2R5Jykub24oJ2NoYW5nZScsICcucGFpZW1lbnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vJCgnLnBhaWVtZW50JykuYmluZCgnbG9hZCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgJChcIi5wYWllbWVudFwiKVxyXG4gICAgLm9uKFwiY2hhbmdlIHJpZ2h0bm93XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gMikge1xyXG4gICAgICAgICQoXCIuYmxvY19jaGVxdWVcIikuc2hvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjdW5pdl90X3JlZ2xlbWVudF9kYXRlRWNoZWFuY2VcIikudmFsKG51bGwpO1xyXG4gICAgICAgICQoXCIjdW5pdl90X3JlZ2xlbWVudF9yZWZlcmVuY2VcIikudmFsKG51bGwpO1xyXG4gICAgICAgICQoXCIuYmxvY19jaGVxdWVcIikuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IDEgfHwgJCh0aGlzKS52YWwoKSA9PSA0KSB7XHJcbiAgICAgICAgJChcIi5ibG9jX2JhbnF1ZVwiKS5oaWRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5ibG9jX2JhbnF1ZVwiKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSlcclxuICAgIC50cmlnZ2VySGFuZGxlcihcInJpZ2h0bm93XCIpO1xyXG59KTtcclxuXHJcbiQoXCIjX2RlbGV0ZV9mYWN0dXJlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRva2VuXCIpO1xyXG4gIHZhciBvYmogPSB7XHJcbiAgICByb3V0ZTogXCJ0X1VhVEZhY3R1cmVmcnNjYWJfZGVsZXRlX2ZhY3R1cmVcIixcclxuICAgIHJlZGlyZWN0aW9uOiBcInVhX3RfZmFjdHVyZV9pbmRleFwiLFxyXG4gICAgdG9rZW46IHRva2VuLFxyXG4gICAgaWQ6IGlkLFxyXG4gIH07XHJcbiAgZGVsZXRlQ2FiKG9iaik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbnZhciB0YWJsZTIgPSAkKFwiI2dyaWQyXCIpLkRhdGFUYWJsZSh7XHJcbiAgYWpheDoge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidWFfdF9mYWN0dXJlZnJzY2FiX2Fjb21wdGVfbGlzdFwiKSArIGxvY2F0aW9uLnNlYXJjaCwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICB0eXBlOiBcImdldFwiLFxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMF0sXHJcbiAgXSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBvcmRlcjogW1swLCBcImFzY1wiXV0sXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjUlXCIsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHZpc2libGU6IHRydWUgfSxcclxuICBdLFxyXG4gIC8vIGRvbTogJ2xCZnJ0aXAnLFxyXG4gIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gIGRvbTogJzxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcImY+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxuICAvLyBmaXhlZEhlYWRlcjogdHJ1ZSxcclxufSk7XHJcbnRhYmxlMi5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgbGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG4gIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcblxyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KFxyXG4gICAgYXBpLFxyXG4gICAgW10sXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbXSwgW10pO1xyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNfYWNvbXB0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X3VhdGZhY3R1cmVfYWRkX2Fjb21wdGVfcG9wdXBcIiksXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgICQoXCIjTW9kYWxEb2N1bWVudER5bmFtaXF1ZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgfSwgNjAwKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsIFwiLnNhdmVfZm9ybV9hY29tcHRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy9hbGVydCgpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAvL3ZhciBpZCA9ICQoJyN0ZXN0JykuZGF0YShcImZhY3R1cmVJZFwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uMlwiKSk7XHJcblxyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfdWF0ZmFjdHVyZV9hZGRfYWNvbXB0ZV9wb3B1cFwiKSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgLy8kKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoXCIubmV3XCIpLm9mZnNldCgpLnRvcH0sIDUwMCk7XHJcbiAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gJCgnLm1lc3NhZ2Utc3VjY2VzcycpLmh0bWwoXCI8ZGl2IGNsYXNzPSdhbGVydCBhbGVydC13YXJuaW5nJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J2FsZXJ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+w5c8L2J1dHRvbj48c3Ryb25nPlwiICsgcmVzdWx0Lm1lc3NhZ2UudGl0bGUgKyBcIjwvc3Ryb25nPiBcIiArIHJlc3VsdC5tZXNzYWdlLnRleHQgKyBcIjwvc3Ryb25nPi48L2Rpdj5cIilcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIC8vdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8kKFwiI01vZGFsRG9jdW1lbnREeW5hbWlxdWVcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIC8vbC5zdG9wKCk7XHJcblxyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidF9VYVRGYWN0dXJlZnJzY2FiX3VwZGF0ZV9hY29tcHRlXCIsIHtcclxuICAgICAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG5cclxuICAgICAgICAvLyAgICAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxudmFyIG9iajIgPSBuZXcgT2JqZWN0KCk7XHJcbmxpc3RBY3Rpb25zLmxpc3RBY3Rpb25zKG9iajIpO1xyXG5cclxuXHJcblxyXG5cclxuJChcIi5wYXJ2ZW51ZVwiKS5zZWxlY3QyKCk7XHJcbmlmKCQoXCIucGFydmVudWVcIikuc2VsZWN0MignZGF0YScpICYmICQoXCIucGFydmVudWVcIikuc2VsZWN0MignZGF0YScpWzBdLnRleHQuaW5kZXhPZignbm9uIHBhcnZlbnVlJykgIT09IC0xKXtcclxuICAgICQoJy5kYXRlRG9jLC5yZWZEb2MnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ2NsYXNzU2hvdycpOyBcclxufWVsc2V7XHJcbiAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuc2hvdygpLmFkZENsYXNzKCdjbGFzc1Nob3cnKTsgIFxyXG59XHJcblxyXG4kKCcucGFydmVudWUnKS5vbignc2VsZWN0MjpzZWxlY3RpbmcnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAvL2FsZXJ0KClcclxuICAgIGlmKGUucGFyYW1zLmFyZ3MuZGF0YS50ZXh0LmluZGV4T2YoJ25vbiBwYXJ2ZW51ZScpICE9PSAtMSl7XHJcbiAgICAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdjbGFzc1Nob3cnKTsgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAkKCcuZGF0ZURvYywucmVmRG9jJykuc2hvdygpLmFkZENsYXNzKCdjbGFzc1Nob3cnKTsgIFxyXG4gICAgfVxyXG59KTtcclxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVDYWIob2JqKSB7XHJcblxyXG4gICAvLyB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGlkICsgJyAnICsgdG9rZW4pO1xyXG4gICAgXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcblxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyb3V0ZSddLCB7J2lkJzogb2JqWydpZCddLCAndG9rZW4nOiBvYmpbJ3Rva2VuJ119KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBkZWxldGVEZW1hbmRlKG9iaikge1xyXG5cclxuICAgIC8vIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAvLyAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAgLy9jb25zb2xlLmxvZyhpZCArICcgJyArIHRva2VuKTtcclxuICAgICBcclxuICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgJC5hamF4KHtcclxuIFxyXG4gICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShvYmpbJ3JvdXRlJ10sIHsnaWQnOiBvYmpbJ2lkJ10sICd0b2tlbic6IG9ialsndG9rZW4nXX0pLFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialsncmVkaXJlY3Rpb24nXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob2JqWydyZWRpcmVjdGlvbiddKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICB9KTtcclxuIH1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=