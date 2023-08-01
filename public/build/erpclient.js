(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["erpclient"],{

/***/ "./assets/js/components/erp_client/erp_client.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/erp_client/erp_client.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");












var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.setRoutingData(routes);
//plugins/steps/jquery.steps.css
__webpack_require__(/*! ../../../../assets/js/plugins/steps/jquery.steps.css */ "./assets/js/plugins/steps/jquery.steps.css");
__webpack_require__(/*! ../../../../assets/js/plugins/steps/jquery.steps.min.js */ "./assets/js/plugins/steps/jquery.steps.min.js");
__webpack_require__(/*! ../../../../assets/js/plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




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
        return "aucun résultat trouvé";
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
            url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("t_achatdemandeinternecab_find_article_term", {
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
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("erp_client_list") + location.search,
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  order: [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "3%",
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: "10%"
  }, {
    orderable: true,
    width: "10%"
  }, {
    orderable: true,
    width: "15%"
  }, {
    orderable: true,
    width: "20%"
  }, {
    orderable: true,
    width: "20%"
  }, {
    orderable: true,
    width: "10%"
  }, {
    orderable: true,
    width: "10%"
  }, {
    orderable: true,
    width: "10%"
  }, {
    orderable: true,
    width: "10%"
  }, {
    orderable: true,
    width: "10%"
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
  }],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("datatables_langue"),
    processing: true
  },
  fixedHeader: true
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
  lengthMenu: [[10, 15, 25, 50, 100, 200, 20000000], [10, 15, 25, 50, 100, 200, "All"]],
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("datatables_langue"),
    processing: true
  },
  fixedHeader: true
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
        aLengthMenu: [[25, 50, 100, 200, -1], [25, 50, 100, 200, "All"]],
        iDisplayLength: 25,
        dom: 'f<"html5buttons btn-group"B>lTgtip',
        columns: [{
          orderable: true,
          width: "5%",
          searchable: true,
          targets: [0]
        }, {
          orderable: true,
          width: "10%"
        }, {
          orderable: true,
          width: "85%"
        }, {
          orderable: true,
          width: "85%"
        }],
        buttons: ["columnsToggle", {
          text: "Restaurer",
          className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
          action: function action(e, dt, node, config) {
            table.state.clear();
            window.location.reload();
          }
        }],
        language: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("datatables_langue"),
          processing: true
        },
        fixedHeader: true,
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

        _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchText"](api, [0, 1, 3], []);
        _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchSelect"](api, [2], []);
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("t_achatdemandeinternecab_find_article"),
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
$("body").on("click", ".cd_op", function () {
  if (window.element.find("option[value='" + $(this).parent().parent().attr("id") + "']").length) {
    window.element.val($(this).parent().parent().attr("id")).trigger("change");
    $(".prixunitaire").val($(this).parent().parent().attr("pu"));
    $(".tva").val($(this).parent().parent().attr("tva"));
    $("#exampleModalPreview").modal("hide");
  } else {
    // Create a DOM Option and pre-select by default
    var newOption = new Option($(this).parent().parent().attr("text"), $(this).parent().parent().attr("id"), true, true);
    // Append it to the select
    window.element.append(newOption).trigger("change");
    $(".prixunitaire").val($(this).parent().parent().attr("pu"));
    $(".tva").val($(this).parent().parent().attr("tva"));
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
  console.log(type);
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

  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchText"](api, [1, 2, 3, 4, 5], []);
  //CustomSearchDatatable.CustomSearchDate(api, [2], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchSelect"](api, [6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_15__["CustomSearchCheckbox"](api, [0], []);
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
$(".actions").on("click", ".close-me", function (e) {
  //$('.close-me').click(function (e){
  $(".actions").removeClass("sidebar-open");
  e.preventDefault();
});
var array_detail = [];
$(document).ready(function (e) {
  //array_detail
  var details = $("#test").data("details");
  var person = [];
  $.each(details, function (i, value) {
    /* person ['code']=value.code;
     person ['id']=value.id;
     person ['montantRemise']=value.montantRemise;
     person ['observation']=value.observation;
     person ['prixttc']=value.prixttc;
     person ['prixunitaire']=value.prixunitaire;
     person ['quantite']=value.quantite;
     person ['remise']=value.remise;
     person ['titre']=value.titre;
     person ['tva']=value.tva;
     person ['unite']=value.unite;
     person ['unite_id']=value.unite_id;*/
    //alert(value.id);

    array_detail.push({
      'code': value.code,
      'id': value.id,
      'montantRemise': value.montantRemise,
      'observation': value.observation,
      'prixttc': value.prixttc,
      'prixunitaire': value.prixunitaire,
      'quantite': value.quantite,
      'remise': value.remise,
      'titre': value.titre,
      'tva': value.tva,
      'unite': value.unite,
      'unite_id': value.unite_id
    });
  });
  $("#uv_deviscab_detail").val(JSON.stringify(array_detail));

  //console.log(array_detail)

  //console.log(array_detail);
  //alert();
  // $('table tr td ').each()
});

$(".new").on("submit", ".detail_form", function (e) {
  //alert();
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(".det_for");
  var exsit = 0;
  $.each(array_detail, function (i, value) {
    if ($("#uv_devisdet_article").val() == value.id) {
      exsit = 1;
    }
  });
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  if (exsit == 0) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("uv_deviscab_detail"),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        console.log(result);
        if (result.errors) {
          l.stop();
          Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
        } else if (result.data) {
          l.stop();
          $(".detail_form")[0].reset();
          $(".errors-list").remove();
          $(".article").focus();
          //    console.log(result);
          var lineNo = 1;
          console.log(array_detail);
          array_detail.push(result.data);

          //  console.log(array_detail);

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
            var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.code + " - " + value.titre + "</td><td>" + value.unite + "</td><td>" + value.quantite + "</td> <td>" + value.prixunitaire + "</td><td>" + tva + "</td><td>" + remise + "</td><td>" + value.montantRemise + "</td><td>" + value.prixttc + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
            $(".new .table-detail > tbody").append(my_row);
            lineNo++;
          });
          $(".select2_unite").val(null).trigger("change");
          //  console.log(JSON.stringify(array_detail));
          $("#uv_deviscab_detail").val(JSON.stringify(array_detail));
          // console.log(array_detail);
          //   console.log($("#uv_deviscab_detail").val());
          $(".article").val(null).trigger("change");
        }
      }
    });
  } else {
    toastr.warning("Cet article existe déjà ", "warning ", {
      timeOut: 4000
    });
    l.stop();
  }
  e.preventDefault();
});
$(".new").on("click", ".delete_element", function (e) {
  // alert();
  console.log(array_detail);
  array_detail.splice($(this).attr("id"), 1);
  console.log(array_detail);
  var lineNo = 1;
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

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("erp_client_new_devis", {
    id: $(this).closest("tr").attr("id")
  });
  window.location.href = url;
});
$(".new").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var id = dta.get("_id");
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_14__["create"](document.activeElement);

  // Start loading
  l.start();
  //alert();
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("erp_client_insert_devis", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_13__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_12___default.a.generate("erp_client");
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/erp_client/erp_client.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265","vendors~erpclient~uventecommande~uventedevis",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e","erpclient~uventecommande~uventedevis"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9lcnBfY2xpZW50L2VycF9jbGllbnQuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsImNyZWF0ZV9jdXN0b21fZHJvcGRvd25zIiwiZWxlbWVudCIsImF0dCIsIiQiLCJmbiIsInNlbGVjdDIiLCJhbWQiLCJkZWZpbmUiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJhcmdzIiwib3ZlckNoYXJzIiwiaW5wdXQiLCJsZW5ndGgiLCJtYXhpbXVtIiwibWVzc2FnZSIsImlucHV0VG9vU2hvcnQiLCJyZW1haW5pbmdDaGFycyIsIm1pbmltdW0iLCJsb2FkaW5nTW9yZSIsIm1heGltdW1TZWxlY3RlZCIsIm5vUmVzdWx0cyIsInNlYXJjaGluZyIsIndpbmRvdyIsImF0dHIiLCJhamF4IiwidHlwZSIsInVybCIsImdlbmVyYXRlIiwic2VsZWN0ZWQiLCJlbnRpdHkiLCJjb2x1bW4iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwcmVwZW5kIiwibGFuZ3VhZ2UiLCJyZXN1bHRzIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJkcm9wZG93bkNzc0NsYXNzIiwidmFsIiwidHJpZ2dlciIsImZhZGVPdXQiLCJyZW1vdmUiLCJmYWRlSW4iLCJvbiIsImUiLCJhZnRlciIsInR5cGVXYXRjaCIsImhpZ2hsaWdodCIsIndhaXQiLCJjYXB0dXJlTGVuZ3RoIiwiY2FsbGJhY2siLCJ2YWx1ZW5ubiIsImhpZGUiLCJzZWFyY2giLCJkYXRhVHlwZSIsInRlcm0iLCJzdWNjZXNzIiwicmVzdWx0IiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiZW1wdHkiLCJmb2N1cyIsInRvYXN0ciIsIndhcm5pbmciLCJ0aW1lT3V0IiwicGFyYW1zIiwicHJpeEFjaGF0IiwidHZhIiwicmVtaXNlIiwidW5pdGUiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInRhYmxlIiwiRGF0YVRhYmxlIiwibG9jYXRpb24iLCJkZWZlclJlbmRlciIsInN0YXRlU2F2ZSIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwib3JkZXIiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwid2lkdGgiLCJzZWFyY2hhYmxlIiwidGFyZ2V0cyIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZHQiLCJub2RlIiwiY29uZmlnIiwic3RhdGUiLCJjbGVhciIsInJlbG9hZCIsInByb2Nlc3NpbmciLCJmaXhlZEhlYWRlciIsInN0ZXBzIiwiYm9keVRhZyIsIm9uU3RlcENoYW5naW5nIiwiZXZlbnQiLCJjdXJyZW50SW5kZXgiLCJuZXdJbmRleCIsIk51bWJlciIsImZvcm0iLCJyZW1vdmVDbGFzcyIsInZhbGlkYXRlIiwic2V0dGluZ3MiLCJpZ25vcmUiLCJ2YWxpZCIsIm9uU3RlcENoYW5nZWQiLCJwcmlvckluZGV4Iiwib25GaW5pc2hpbmciLCJvbkZpbmlzaGVkIiwic3VibWl0IiwiZXJyb3JQbGFjZW1lbnQiLCJlcnJvciIsImJlZm9yZSIsInJ1bGVzIiwiY29uZmlybSIsImVxdWFsVG8iLCJ0YWJsZVNob3ciLCJzY3JvbGxZIiwic2Nyb2xsQ29sbGFwc2UiLCJwYWdpbmciLCJhdXRvV2lkdGgiLCJmb290ZXJDYWxsYmFjayIsInJvdyIsInN0YXJ0IiwiZW5kIiwiZGlzcGxheSIsImFwaSIsInRvdGFsIiwicGFnZVRvdGFsIiwiaW50VmFsIiwiaSIsInJlcGxhY2UiLCJyZWR1Y2UiLCJhIiwiYiIsInBhZ2UiLCJmb290ZXIiLCJodG1sIiwiTWF0aCIsInJvdW5kIiwidG9GaXhlZCIsInRhYmxlU2hvdzMiLCJzY3JvbGxYIiwidGFibGUyIiwidGFibGVTaG93NCIsImRvY3VtZW50IiwicmVhZHkiLCJLVERhdGF0YWJsZXNTZWFyY2hPcHRpb25zQWR2YW5jZWRTZWFyY2giLCJkYXRhVGFibGUiLCJBcGkiLCJyZWdpc3RlciIsImhlYWRlciIsInRyaW0iLCJpbml0IiwidCIsImFMZW5ndGhNZW51IiwiaURpc3BsYXlMZW5ndGgiLCJiSW5mbyIsInN0IiwibG9hZGVkIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJvTGFuZ3VhZ2UiLCJvUGFnaW5hdGUiLCJzTmV4dCIsInNQcmV2aW91cyIsImNsaWNrIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInNldFRpbWVvdXQiLCJmaW5kIiwicGFyZW50IiwibW9kYWwiLCJuZXdPcHRpb24iLCJPcHRpb24iLCJhcHBlbmQiLCJnZXRTdWJTZWxlY3QiLCJteWNsYXNzIiwibXlib29sZWFuIiwibXljb250ZW50IiwicHJvcCIsImFycmF5Iiwic3BsaXQiLCJsIiwicmVwbGFjZVdpdGgiLCJ0b2dnbGVDbGFzcyIsImFkZENsYXNzIiwiY3NzIiwiJGZvcm0iLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJoYXNDbGFzcyIsImFycmF5X2RldGFpbCIsImRldGFpbHMiLCJwZXJzb24iLCJlYWNoIiwidmFsdWUiLCJwdXNoIiwiY29kZSIsImlkIiwibW9udGFudFJlbWlzZSIsIm9ic2VydmF0aW9uIiwicHJpeHR0YyIsInByaXh1bml0YWlyZSIsInF1YW50aXRlIiwidGl0cmUiLCJ1bml0ZV9pZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwiZXhzaXQiLCJMYWRkYSIsImFjdGl2ZUVsZW1lbnQiLCJlcnJvcnMiLCJzdG9wIiwiU2hvd0Zvcm1FcnJvcnMiLCJyZXNldCIsImxpbmVObyIsIm15X3JvdyIsInNwbGljZSIsInNob3ciLCJocmVmIiwiZ2V0IiwidGl0bGUiLCJqcVhIUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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QyxHQUFHLEdBQUc3QixtSEFBTyxDQUFDOEIsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN4Q0wsTUFBTSxDQUFDMkQsUUFBUSxDQUFDK0osSUFBSSxHQUFHdE4sR0FBRztRQUMxQjtNQUNGO0lBQ0YsQ0FBQzs7SUFDRGtHLEtBQUssRUFBRSxlQUFVdUgsS0FBSyxFQUFFdkwsVUFBVSxFQUFFQyxXQUFXLEVBQUU7TUFDL0N3SSxDQUFDLENBQUNvQyxJQUFJLEVBQUU7TUFDUnpLLE1BQU0sQ0FBQzRELEtBQUssQ0FBQyxRQUFRLEVBQUUvRCxXQUFXLEVBQUU7UUFBRUssT0FBTyxFQUFFO01BQUssQ0FBQyxDQUFDO0lBQ3hEO0VBQ0YsQ0FBQyxDQUFDO0VBQ0ZwQixDQUFDLENBQUM4SixjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiZXJwY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb25cIik7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qc1wiO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbi8vcGx1Z2lucy9zdGVwcy9qcXVlcnkuc3RlcHMuY3NzXHJcbnJlcXVpcmUoXCIuLi8uLi8uLi8uLi9hc3NldHMvanMvcGx1Z2lucy9zdGVwcy9qcXVlcnkuc3RlcHMuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2pzL3BsdWdpbnMvc3RlcHMvanF1ZXJ5LnN0ZXBzLm1pbi5qc1wiKTtcclxucmVxdWlyZShcIi4uLy4uLy4uLy4uL2Fzc2V0cy9qcy9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanNcIik7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSBcIi4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanNcIjtcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSBcImxhZGRhXCI7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tIFwiLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanNcIjtcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanNcIjtcclxuZnVuY3Rpb24gY3JlYXRlX2N1c3RvbV9kcm9wZG93bnMoZWxlbWVudCwgYXR0KSB7XHJcbiAgJC5mbi5zZWxlY3QyLmFtZC5kZWZpbmUoXCJzZWxlY3QyL2kxOG4vZnJcIiwgW10sIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFJ1c3NpYW5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yTG9hZGluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgICAgfSxcclxuICAgICAgaW5wdXRUb29Mb25nOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHZhciBvdmVyQ2hhcnMgPSBhcmdzLmlucHV0Lmxlbmd0aCAtIGFyZ3MubWF4aW11bTtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINGD0LTQsNC70LjRgtC1IFwiICsgb3ZlckNoYXJzICsgXCIg0YHQuNC80LLQvtC7XCI7XHJcbiAgICAgICAgaWYgKG92ZXJDaGFycyA+PSAyICYmIG92ZXJDaGFycyA8PSA0KSB7XHJcbiAgICAgICAgICBtZXNzYWdlICs9IFwi0LBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKG92ZXJDaGFycyA+PSA1KSB7XHJcbiAgICAgICAgICBtZXNzYWdlICs9IFwi0L7QslwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgfSxcclxuICAgICAgaW5wdXRUb29TaG9ydDogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICB2YXIgcmVtYWluaW5nQ2hhcnMgPSBhcmdzLm1pbmltdW0gLSBhcmdzLmlucHV0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgXCJUYXBleiBcIiArXHJcbiAgICAgICAgICByZW1haW5pbmdDaGFycyArXHJcbiAgICAgICAgICBcIiBjYXJhY3TDqHJlIG91IHBsdXMgcG91ciBmYWlyZSBkZXMgcmVjaGVyY2hlc1wiO1xyXG5cclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgfSxcclxuICAgICAgbG9hZGluZ01vcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJ0ZXN0XCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1heGltdW1TZWxlY3RlZDogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IFwi0JLRiyDQvNC+0LbQtdGC0LUg0LLRi9Cx0YDQsNGC0YwgXCIgKyBhcmdzLm1heGltdW0gKyBcIiDRjdC70LXQvNC10L3RglwiO1xyXG5cclxuICAgICAgICBpZiAoYXJncy5tYXhpbXVtID49IDIgJiYgYXJncy5tYXhpbXVtIDw9IDQpIHtcclxuICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQsFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5tYXhpbXVtID49IDUpIHtcclxuICAgICAgICAgIG1lc3NhZ2UgKz0gXCLQvtCyXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgfSxcclxuICAgICAgbm9SZXN1bHRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYXVjdW4gcsOpc3VsdGF0IHRyb3V2w6lcIjtcclxuICAgICAgfSxcclxuICAgICAgc2VhcmNoaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiUmVjaGVyY2hlcuKAplwiO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuICB3aW5kb3cuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgd2luZG93LmF0dCA9IFwiY3VycmVudF9zZWxlY3RfXCIgKyBhdHQ7XHJcbiAgaWYgKHdpbmRvdy5lbGVtZW50LmF0dHIoXCJkYXRhLWVudGl0eVwiKSkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZV90ZXJtXCIsIHtcclxuICAgICAgICBzZWxlY3RlZDogYXR0LFxyXG4gICAgICAgIGVudGl0eTogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpLFxyXG4gICAgICAgIGNvbHVtbjogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtY29sdW1uXCIpLFxyXG4gICAgICB9KSxcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHdpbmRvdy5lbGVtZW50XHJcbiAgICAgICAgLnByZXBlbmQoJzxvcHRpb24gc2VsZWN0ZWQ9XCJcIj48L29wdGlvbj4nKVxyXG4gICAgICAgIC5zZWxlY3QyKHtcclxuICAgICAgICAgIC8vYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhLnJlc3VsdHMsXHJcbiAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzOiB3aW5kb3cuYXR0LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnZhbChhdHQpXHJcbiAgICAgICAgLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICQoXCIubG9hZC1lclwiKS5mYWRlT3V0KDcwKS5yZW1vdmUoKTtcclxuICAgICAgJChcIi5kZXRfZm9yXCIpLmZhZGVJbig3MCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gdG9hc3RyLndhcm5pbmcoJ2ltcG9zc2libGUgZGUgY2hhcmdlciBsXFwnZW50aXRlcicsICdFcnJldXInLCB7dGltZU91dDogNDAwMH0pXHJcbiAgfVxyXG4gIC8vYXBwbHkgdG8gc2VsZWN0MlxyXG4gIHdpbmRvdy5lbGVtZW50Lm9uKFwic2VsZWN0MjpvcGVuXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpKTtcclxuXHJcbiAgICB3aW5kb3cuZWxlbWVudCA9ICQodGhpcyk7XHJcblxyXG4gICAgLy9hbGVydCgpXHJcbiAgICAkKFwiLnR0cFwiKS5yZW1vdmUoKTtcclxuICAgICQoXCIgLnNlbGVjdDItc2VhcmNoLS1oaWRlXCIpLmFmdGVyKFxyXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24gdHRwXCI+PGlucHV0IGNsYXNzPVwidHQgc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiMFwiIGF1dG9jb21wbGV0ZT1cIm9uXCIgYXV0b2NvcnJlY3Q9XCJvblwiIGF1dG9jYXBpdGFsaXplPVwib25cIiBzcGVsbGNoZWNrPVwidHJ1ZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgLz48L3NwYW4+J1xyXG4gICAgKTtcclxuICAgICQoXCIudHRcIikudHlwZVdhdGNoKHtcclxuICAgICAgaGlnaGxpZ2h0OiBmYWxzZSxcclxuICAgICAgd2FpdDogMTAwLFxyXG4gICAgICBjYXB0dXJlTGVuZ3RoOiAyLFxyXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlbm5uLCBlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5zZWxlY3QyLXJlc3VsdHNcIikucHJlcGVuZChcclxuICAgICAgICAgICc8cCBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCI+UmVjaGVyY2hlcuKApjwvcD4nXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgd2luZG93LnNlYXJjaCA9IHZhbHVlbm5uO1xyXG4gICAgICAgIC8vYWxlcnQoKHZhbHVlbm5uKSlcclxuICAgICAgICBpZiAod2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgICBcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9maW5kX2FydGljbGVfdGVybVwiLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlcm06IHZhbHVlbm5uLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGF0dCxcclxuICAgICAgICAgICAgICAgIGVudGl0eTogd2luZG93LmVsZW1lbnQuYXR0cihcImRhdGEtZW50aXR5XCIpLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uOiB3aW5kb3cuZWxlbWVudC5hdHRyKFwiZGF0YS1jb2x1bW5cIiksXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZW5ubiA9PSAkKFwiLnR0XCIpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgICAucHJlcGVuZCgnPG9wdGlvbiBzZWxlY3RlZD1cIlwiPjwvb3B0aW9uPicpXHJcbiAgICAgICAgICAgICAgICAgIC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJmclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0LnJlc3VsdHMsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC52YWwoYXR0KVxyXG4gICAgICAgICAgICAgICAgICAudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5lbGVtZW50LnNlbGVjdDIoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9hbGVydCh0aGlzLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLy9hbGVydCh2YWx1ZW5ubilcclxuICAgICAgICAgICAgICAgICQoXCIudHRcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICQoXCIudHRcIikudmFsKHdpbmRvdy5zZWFyY2gpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhcImltcG9zc2libGUgZGUgY2hhcmdlciBsJ2VudGl0ZXJcIiwgXCJFcnJldXJcIiwge1xyXG4gICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5lbGVtZW50Lm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vYWxlcnQoKVxyXG4gICAgdmFyIGRhdGEgPSBlLnBhcmFtcy5kYXRhO1xyXG4gICAgJChcIi5wcml4dW5pdGFpcmVcIikudmFsKGRhdGEucHJpeEFjaGF0KTtcclxuICAgICQoXCIudHZhXCIpLnZhbChkYXRhLnR2YSk7XHJcbiAgICAkKFwiLnJlbWlzZVwiKS52YWwoZGF0YS5yZW1pc2UpO1xyXG5cclxuICAgIFxyXG4gICAgJChcIi5zZWxlY3QyX3VuaXRlXCIpLnZhbChkYXRhLnVuaXRlKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnNlbGVjdDItY29udGFpbmVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIudHRcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gIH0pO1xyXG59XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gIGN1c3RvbUNsYXNzOiB7XHJcbiAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxuXHJcbnZhciB0YWJsZSA9ICQoXCIjZ3JpZFwiKS5EYXRhVGFibGUoe1xyXG4gIGFqYXg6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImVycF9jbGllbnRfbGlzdFwiKSArIGxvY2F0aW9uLnNlYXJjaCwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICB0eXBlOiBcImdldFwiLFxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIC0xXSxcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdLFxyXG4gIF0sXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICBjb2x1bW5zOiBbXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiBcIjMlXCIsIHNlYXJjaGFibGU6IHRydWUsIHRhcmdldHM6IFswXSB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTAlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxNSVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjIwJVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMjAlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxMCVcIiB9LFxyXG4gICBcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxMCVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTAlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIxMCVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjEwJVwiIH0sXHJcbiAgXSxcclxuICAvLyBkb206ICdsQmZydGlwJyxcclxuICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIFwiY29sdW1uc1RvZ2dsZVwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlJlc3RhdXJlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG4gIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoXCIud2l6YXJkLWJpZ1wiKVxyXG4gIC5zdGVwcyh7XHJcbiAgICBib2R5VGFnOiBcImZpZWxkc2V0XCIsXHJcbiAgICBvblN0ZXBDaGFuZ2luZzogZnVuY3Rpb24gKGV2ZW50LCBjdXJyZW50SW5kZXgsIG5ld0luZGV4KSB7XHJcbiAgICAgIC8vIEFsd2F5cyBhbGxvdyBnb2luZyBiYWNrd2FyZCBldmVuIGlmIHRoZSBjdXJyZW50IHN0ZXAgY29udGFpbnMgaW52YWxpZCBmaWVsZHMhXHJcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPiBuZXdJbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGb3JiaWQgc3VwcHJlc3NpbmcgXCJXYXJuaW5nXCIgc3RlcCBpZiB0aGUgdXNlciBpcyB0byB5b3VuZ1xyXG4gICAgICBpZiAobmV3SW5kZXggPT09IDMgJiYgTnVtYmVyKCQoXCIjYWdlXCIpLnZhbCgpKSA8IDE4KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAvLyBDbGVhbiB1cCBpZiB1c2VyIHdlbnQgYmFja3dhcmQgYmVmb3JlXHJcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPCBuZXdJbmRleCkge1xyXG4gICAgICAgIC8vIFRvIHJlbW92ZSBlcnJvciBzdHlsZXNcclxuICAgICAgICAkKFwiLmJvZHk6ZXEoXCIgKyBuZXdJbmRleCArIFwiKSBsYWJlbC5lcnJvclwiLCBmb3JtKS5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiLmJvZHk6ZXEoXCIgKyBuZXdJbmRleCArIFwiKSAuZXJyb3JcIiwgZm9ybSkucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRGlzYWJsZSB2YWxpZGF0aW9uIG9uIGZpZWxkcyB0aGF0IGFyZSBkaXNhYmxlZCBvciBoaWRkZW4uXHJcbiAgICAgIGZvcm0udmFsaWRhdGUoKS5zZXR0aW5ncy5pZ25vcmUgPSBcIjpkaXNhYmxlZCw6aGlkZGVuXCI7XHJcblxyXG4gICAgICAvLyBTdGFydCB2YWxpZGF0aW9uOyBQcmV2ZW50IGdvaW5nIGZvcndhcmQgaWYgZmFsc2VcclxuICAgICAgcmV0dXJuIGZvcm0udmFsaWQoKTtcclxuICAgIH0sXHJcbiAgICBvblN0ZXBDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCwgcHJpb3JJbmRleCkge1xyXG4gICAgICAvLyBTdXBwcmVzcyAoc2tpcCkgXCJXYXJuaW5nXCIgc3RlcCBpZiB0aGUgdXNlciBpcyBvbGQgZW5vdWdoLlxyXG4gICAgICBpZiAoY3VycmVudEluZGV4ID09PSAyICYmIE51bWJlcigkKFwiI2FnZVwiKS52YWwoKSkgPj0gMTgpIHtcclxuICAgICAgICAkKHRoaXMpLnN0ZXBzKFwibmV4dFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU3VwcHJlc3MgKHNraXApIFwiV2FybmluZ1wiIHN0ZXAgaWYgdGhlIHVzZXIgaXMgb2xkIGVub3VnaCBhbmQgd2FudHMgdG8gdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IDIgJiYgcHJpb3JJbmRleCA9PT0gMykge1xyXG4gICAgICAgICQodGhpcykuc3RlcHMoXCJwcmV2aW91c1wiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRmluaXNoaW5nOiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCkge1xyXG4gICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAvLyBEaXNhYmxlIHZhbGlkYXRpb24gb24gZmllbGRzIHRoYXQgYXJlIGRpc2FibGVkLlxyXG4gICAgICAvLyBBdCB0aGlzIHBvaW50IGl0J3MgcmVjb21tZW5kZWQgdG8gZG8gYW4gb3ZlcmFsbCBjaGVjayAobWVhbiBpZ25vcmluZyBvbmx5IGRpc2FibGVkIGZpZWxkcylcclxuICAgICAgZm9ybS52YWxpZGF0ZSgpLnNldHRpbmdzLmlnbm9yZSA9IFwiOmRpc2FibGVkXCI7XHJcblxyXG4gICAgICAvLyBTdGFydCB2YWxpZGF0aW9uOyBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbiBpZiBmYWxzZVxyXG4gICAgICByZXR1cm4gZm9ybS52YWxpZCgpO1xyXG4gICAgfSxcclxuICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChldmVudCwgY3VycmVudEluZGV4KSB7XHJcbiAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIC8vIFN1Ym1pdCBmb3JtIGlucHV0XHJcbiAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgLnZhbGlkYXRlKHtcclxuICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiAoZXJyb3IsIGVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudC5iZWZvcmUoZXJyb3IpO1xyXG4gICAgfSxcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgIGNvbmZpcm06IHtcclxuICAgICAgICBlcXVhbFRvOiBcIiNwYXNzd29yZFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxudmFyIHRhYmxlU2hvdyA9ICQoXCIjZGF0YXRhYmxlLXNob3cyXCIpLkRhdGFUYWJsZSh7XHJcbiAgc2Nyb2xsWTogXCIyMDBweFwiLFxyXG4gIHNjcm9sbENvbGxhcHNlOiB0cnVlLFxyXG4gIHBhZ2luZzogZmFsc2UsXHJcbiAgYXV0b1dpZHRoOiBmYWxzZSxcclxufSk7XHJcblxyXG52YXIgdGFibGVTaG93ID0gJChcIiNkYXRhdGFibGUtc2hvd1wiKS5EYXRhVGFibGUoe1xyXG4gIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICBwYWdpbmc6IGZhbHNlLFxyXG4gIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjEwJVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjM1JVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjIwJVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIgfSxcclxuICBdLFxyXG4gIGZvb3RlckNhbGxiYWNrOiBmdW5jdGlvbiAocm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5KSB7XHJcbiAgICB2YXIgYXBpID0gdGhpcy5hcGkoKSxcclxuICAgICAgZGF0YTtcclxuICAgIHZhciB0b3RhbCwgcGFnZVRvdGFsO1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBmb3JtYXR0aW5nIHRvIGdldCBpbnRlZ2VyIGRhdGEgZm9yIHN1bW1hdGlvblxyXG4gICAgdmFyIGludFZhbCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgaSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8gaS5yZXBsYWNlKC9bXFwkLF0vZywgXCJcIikgKiAxXHJcbiAgICAgICAgOiB0eXBlb2YgaSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gaVxyXG4gICAgICAgIDogMDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVG90YWwgb3ZlciBhbGwgcGFnZXNcclxuICAgIHRvdGFsID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNylcclxuICAgICAgLmRhdGEoKVxyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgLy8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuICAgIHBhZ2VUb3RhbCA9IGFwaVxyXG4gICAgICAuY29sdW1uKDcsIHsgcGFnZTogXCJjdXJyZW50XCIgfSlcclxuICAgICAgLmRhdGEoKVxyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGludFZhbChhKSArIGludFZhbChiKTtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGZvb3RlclxyXG4gICAgJChhcGkuY29sdW1uKDEpLmZvb3RlcigpKS5odG1sKFxyXG4gICAgICBcIlRvdGFsIDogXCIgKyAoTWF0aC5yb3VuZChwYWdlVG90YWwgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpXHJcbiAgICApO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy92YXIgdGFibGVTaG93MyA9ICQoXCIjZGF0YXRhYmxlLXNob3czXCIpLkRhdGFUYWJsZSh7IHBhZ2luZzogZmFsc2UgfSk7XHJcblxyXG52YXIgdGFibGVTaG93MyA9ICQoXCIuZGF0YXRhYmxlLXNob3czXCIpLkRhdGFUYWJsZSh7XHJcbiAgbGVuZ3RoTWVudTogW1xyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgMjAwMDAwMDBdLFxyXG4gICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl0sXHJcbiAgXSxcclxuICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICBwYWdlTGVuZ3RoOiAxNSxcclxuICBzY3JvbGxYOiB0cnVlLFxyXG4gIGNvbHVtbnM6IFtcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IHdpZHRoOiBcIjEwJVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIH0sXHJcbiAgICB7IHdpZHRoOiBcIjUlXCIsIG9yZGVyYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyB3aWR0aDogXCI1JVwiLCBvcmRlcmFibGU6IHRydWUgfSxcclxuICAgIHsgd2lkdGg6IFwiNSVcIiwgb3JkZXJhYmxlOiB0cnVlIC8qLCB2aXNpYmxlOiB0cnVlKi8gfSxcclxuICBdLFxyXG4gIHBhZ2luZzogZmFsc2UsXHJcblxyXG4gIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgYnV0dG9uczogW1xyXG4gICAgXCJjb2x1bW5zVG9nZ2xlXCIsXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiUmVzdGF1cmVyXCIsXHJcbiAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICB0YWJsZTIuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbGFuZ3VhZ2U6IHtcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImRhdGF0YWJsZXNfbGFuZ3VlXCIpLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICB9LFxyXG4gIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG59KTtcclxuXHJcbnZhciB0YWJsZVNob3c0ID0gJChcIi5kYXRhdGFibGUtc2hvdzRcIikuRGF0YVRhYmxlKHsgcGFnaW5nOiBmYWxzZSB9KTtcclxuXHJcbnZhciB0YWJsZVNob3cgPSAkKFwiI2RhdGF0YWJsZS1zaG93OVwiKS5EYXRhVGFibGUoe1xyXG4gIHNjcm9sbFk6IFwiMjAwcHhcIixcclxuICBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcclxuICBwYWdpbmc6IGZhbHNlLFxyXG4gIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIChyb3csIGRhdGEsIHN0YXJ0LCBlbmQsIGRpc3BsYXkpIHtcclxuICAgIHZhciBhcGkgPSB0aGlzLmFwaSgpLFxyXG4gICAgICBkYXRhO1xyXG4gICAgdmFyIHRvdGFsLCBwYWdlVG90YWw7XHJcbiAgICAvLyBSZW1vdmUgdGhlIGZvcm1hdHRpbmcgdG8gZ2V0IGludGVnZXIgZGF0YSBmb3Igc3VtbWF0aW9uXHJcbiAgICB2YXIgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgPyBpLnJlcGxhY2UoL1tcXCQsXS9nLCBcIlwiKSAqIDFcclxuICAgICAgICA6IHR5cGVvZiBpID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBpXHJcbiAgICAgICAgOiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUb3RhbCBvdmVyIGFsbCBwYWdlc1xyXG4gICAgdG90YWwgPSBhcGlcclxuICAgICAgLmNvbHVtbig1KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBUb3RhbCBvdmVyIHRoaXMgcGFnZVxyXG4gICAgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgIC5jb2x1bW4oNSwgeyBwYWdlOiBcImN1cnJlbnRcIiB9KVxyXG4gICAgICAuZGF0YSgpXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gaW50VmFsKGEpICsgaW50VmFsKGIpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZm9vdGVyXHJcbiAgICAkKGFwaS5jb2x1bW4oMSkuZm9vdGVyKCkpLmh0bWwoXHJcbiAgICAgIFwiVG90YWwgOiBcIiArIChNYXRoLnJvdW5kKHBhZ2VUb3RhbCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMilcclxuICAgICk7XHJcbiAgfSxcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5kZXRfZm9yXCIpXHJcbiAgICAuaGlkZSgpXHJcbiAgICAuYWZ0ZXIoXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwibG9hZC1lclwiPjxkaXYgY2xhc3M9XCJsZHMtZWxsaXBzaXNcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG4gICAgKTtcclxuICBjcmVhdGVfY3VzdG9tX2Ryb3Bkb3ducygkKFwiLmFydGljbGVzXCIpLCBcIlwiKTtcclxufSk7XHJcblxyXG4oXCJ1c2Ugc3RyaWN0XCIpO1xyXG52YXIgS1REYXRhdGFibGVzU2VhcmNoT3B0aW9uc0FkdmFuY2VkU2VhcmNoID0gKGZ1bmN0aW9uICgpIHtcclxuICAkLmZuLmRhdGFUYWJsZS5BcGkucmVnaXN0ZXIoXCJjb2x1bW4oKS50aXRsZSgpXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkKHRoaXMuaGVhZGVyKCkpLnRleHQoKS50cmltKCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHQ7XHJcbiAgICAgICh0ID0gJChcIiNrdF90YWJsZV8xXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgYUxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgIFsyNSwgNTAsIDEwMCwgMjAwLCAtMV0sXHJcbiAgICAgICAgICBbMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpRGlzcGxheUxlbmd0aDogMjUsXHJcbiAgICAgICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiNSVcIiwgc2VhcmNoYWJsZTogdHJ1ZSwgdGFyZ2V0czogWzBdIH0sXHJcbiAgICAgICAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMTAlXCIgfSxcclxuICAgICAgICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI4NSVcIiB9LFxyXG4gICAgICAgICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjg1JVwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuICAgICAgICBiSW5mbzogZmFsc2UsXHJcbiAgICAgIH0pKSxcclxuICAgICAgICB0Lm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICAgICAgICAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgICAgICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgICAgICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0KTtcclxuICAgICAgICAgIC8vaWYgKHN0ICE9IG51bGwpIHtcclxuICAgICAgICAgIC8vICAgICQuZWFjaChzdC5jb2x1bW5zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgLy8gICAgICAgIGlmICh2YWx1ZS5zZWFyY2guc2VhcmNoICE9IFwiXCIpIHtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgJCgnLnJlbW92ZS1maWx0ZXInKS5zaG93KCk7XHJcbiAgICAgICAgICAvLyAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgICAvLyAgICB9KTtcclxuICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzAsIDEsIDNdLCBbXSk7XHJcbiAgICAgICAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzJdLCBbXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pKCk7XHJcbiQuZXh0ZW5kKHRydWUsICQuZm4uZGF0YVRhYmxlLmRlZmF1bHRzLm9MYW5ndWFnZS5vUGFnaW5hdGUsIHtcclxuICBzTmV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiID48L2k+JyxcclxuICBzUHJldmlvdXM6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiID48L2k+JyxcclxufSk7XHJcblxyXG4kKFwiLm1vZGFsQWN0aXZhdGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQoXCIuYm9kXCIpLmVtcHR5KCk7XHJcbiAgJChcIi5zcHJcIikuZmFkZUluKCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2ZpbmRfYXJ0aWNsZVwiKSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICQoXCIuYm9kXCIpLmh0bWwocmVzdWx0KS5oaWRlKCk7XHJcbiAgICAgIEtURGF0YXRhYmxlc1NlYXJjaE9wdGlvbnNBZHZhbmNlZFNlYXJjaC5pbml0KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc3ByXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmJvZFwiKS5mYWRlSW4oKTtcclxuICAgICAgfSwgNjAwKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5jZF9vcFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKFxyXG4gICAgd2luZG93LmVsZW1lbnQuZmluZChcclxuICAgICAgXCJvcHRpb25bdmFsdWU9J1wiICsgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5hdHRyKFwiaWRcIikgKyBcIiddXCJcclxuICAgICkubGVuZ3RoXHJcbiAgKSB7XHJcbiAgICB3aW5kb3cuZWxlbWVudC52YWwoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5hdHRyKFwiaWRcIikpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAkKFwiLnByaXh1bml0YWlyZVwiKS52YWwoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5hdHRyKFwicHVcIikpO1xyXG4gICAgJChcIi50dmFcIikudmFsKCQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cihcInR2YVwiKSk7XHJcbiAgICAkKFwiI2V4YW1wbGVNb2RhbFByZXZpZXdcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBDcmVhdGUgYSBET00gT3B0aW9uIGFuZCBwcmUtc2VsZWN0IGJ5IGRlZmF1bHRcclxuICAgIHZhciBuZXdPcHRpb24gPSBuZXcgT3B0aW9uKFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoXCJ0ZXh0XCIpLFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoXCJpZFwiKSxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIC8vIEFwcGVuZCBpdCB0byB0aGUgc2VsZWN0XHJcbiAgICB3aW5kb3cuZWxlbWVudC5hcHBlbmQobmV3T3B0aW9uKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChcIi5wcml4dW5pdGFpcmVcIikudmFsKCQodGhpcykucGFyZW50KCkucGFyZW50KCkuYXR0cihcInB1XCIpKTtcclxuICAgICQoXCIudHZhXCIpLnZhbCgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoXCJ0dmFcIikpO1xyXG4gICAgJChcIiNleGFtcGxlTW9kYWxQcmV2aWV3XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3ViU2VsZWN0KG15Y2xhc3MsIG15Ym9vbGVhbiwgbXljb250ZW50KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhteWNvbnRlbnQpXHJcbiAgaWYgKG15Ym9vbGVhbikge1xyXG4gICAgJChteWNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKG15Y2xhc3MpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICQobXljbGFzcylcclxuICAgICAgLnBhcmVudCgpXHJcbiAgICAgIC5maW5kKFwiLnNlbGVjdDIgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvd1wiKVxyXG4gICAgICAuaHRtbCgnPGkgY2xhc3M9XCJpLWxvYWQgZmEgZmEtcmVmcmVzaFwiPjwvaT4nKTtcclxuICB9XHJcbiAgaWYgKG15Y29udGVudCkge1xyXG4gICAgdmFyIGFycmF5ID0gbXljbGFzcy5zcGxpdChcIixcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCQobXljb250ZW50KS5maW5kKGFycmF5W2ldKSk7XHJcbiAgICAgICQoYXJyYXlbaV0pLnJlcGxhY2VXaXRoKCQobXljb250ZW50KS5maW5kKGFycmF5W2ldKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kKFwiLnR5cGVfY29tbWFuZGVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIpID09IFwiUFJKXCIgfHwgJCh0aGlzKS52YWwoKSA9PSA1KSB7XHJcbiAgICAkKFwiLnByXCIpLnRvZ2dsZUNsYXNzKFwibm9uZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJChcIi5wclwiKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCIuZm9ybVwiKS5vbihcImNoYW5nZVwiLCBcIi50eXBlX2NvbW1hbmRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIHR5cGUgPSAkKFwib3B0aW9uOnNlbGVjdGVkXCIsIHRoaXMpLmF0dHIoXCJkYXRhLXR5cGVcIik7XHJcblxyXG4gIGNvbnNvbGUubG9nKHR5cGUpO1xyXG5cclxuICAkKFwiLmJsb2NfY2hvaXhcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblxyXG4gIGlmICh0eXBlID09IFwiQ01EXCIpIHtcclxuICAgICQoXCIuYmxvY19yZWZlcmVuY2VfZGV2aXNfY2xpZW50XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJNUlwiKSB7XHJcbiAgICAkKFwiLmJsb2NfbWFyY2hlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHlwZSA9PSBcIlBSSlwiKSB7XHJcbiAgICAkKFwiLmJsb2NfcHJvamV0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5tYXJjaGVzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICBnZXRTdWJTZWxlY3QoXCIuc291c21hcmNoZVwiLCBmYWxzZSwgXCJcIik7XHJcbiAgLy8gU2ltdWxhdGUgZm9ybSBkYXRhLCBidXQgb25seSBpbmNsdWRlIHRoZSBzZWxlY3RlZCBzcG9ydCB2YWx1ZS5cclxuICB2YXIgZGF0YSA9IHt9O1xyXG4gIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAvLyAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy9hbGVydCgkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcbiAgLy8gIGNvbnNvbGUubG9nKCRmb3JtLmF0dHIoJ21ldGhvZCcpKTtcclxuICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6ICRmb3JtLmF0dHIoXCJhY3Rpb25cIiksXHJcbiAgICB0eXBlOiAkZm9ybS5hdHRyKFwibWV0aG9kXCIpLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgIGdldFN1YlNlbGVjdChcIi5zb3VzbWFyY2hlXCIsIHRydWUsIGh0bWwpO1xyXG4gICAgICAkKFwiLnNlbDJcIikuc2VsZWN0MigpO1xyXG4gICAgICAvLyQoJy5zb3VzbWFyY2hlJykucGFyZW50KCkuZmluZCgnLnNlbGVjdDIgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiJykubm90KCc6Zmlyc3QnKS5oaWRlKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5wcm9qZXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG4gIGdldFN1YlNlbGVjdChcIi5zb3VzcHJvamV0XCIsIGZhbHNlLCBcIlwiKTtcclxuICAvLyBTaW11bGF0ZSBmb3JtIGRhdGEsIGJ1dCBvbmx5IGluY2x1ZGUgdGhlIHNlbGVjdGVkIHNwb3J0IHZhbHVlLlxyXG4gIHZhciBkYXRhID0ge307XHJcbiAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gIC8vICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvL2FsZXJ0KCRmb3JtLmF0dHIoJ2FjdGlvbicpKTtcclxuICAvLyAgY29uc29sZS5sb2coJGZvcm0uYXR0cignbWV0aG9kJykpO1xyXG4gIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgZ2V0U3ViU2VsZWN0KFwiLnNvdXNwcm9qZXRcIiwgdHJ1ZSwgaHRtbCk7XHJcbiAgICAgICQoXCIuc2VsMlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgIC8vJCgnLnNvdXNtYXJjaGUnKS5wYXJlbnQoKS5maW5kKCcuc2VsZWN0MiAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IGInKS5ub3QoJzpmaXJzdCcpLmhpZGUoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxudGFibGUub24oXCJpbml0LmR0XCIsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG4gIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgbGV0IGRhdGEgPSBhcGkuZGF0YSgpO1xyXG5cclxuICAvL2NvbnNvbGUubG9nKHN0KTtcclxuICAvL2lmIChzdCAhPSBudWxsKSB7XHJcbiAgLy8gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgLy8gICAgICAgIGlmICh2YWx1ZS5zZWFyY2guc2VhcmNoICE9IFwiXCIpIHtcclxuICAvLyAgICAgICAgICAgICQoJy5yZW1vdmUtZmlsdGVyJykuc2hvdygpO1xyXG4gIC8vICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIC8vICAgICAgICB9XHJcbiAgLy8gICAgfSk7XHJcbiAgLy99XHJcblxyXG4gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsMiwgMywgNCw1XSwgW10pO1xyXG4gIC8vQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbMl0sIFtdKTtcclxuICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoU2VsZWN0KGFwaSwgWzZdLCBbXSk7XHJcbiAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaENoZWNrYm94KGFwaSwgWzBdLCBbXSk7XHJcbn0pO1xyXG5cclxuLypjb2x1bW4gMSBkZSBkYXRhdGJsZSBzZWFyY2gqL1xyXG5cclxuJChcIi5yZW1vdmUtZmlsdGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuYWN0aW9uX2hlYWRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCk7XHJcbiAgJChcIi5hY3Rpb24gLC5hY3Rpb25faGVhZFwiKS5wcm9wKFwiY2hlY2tlZFwiLCAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hY3Rpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubGlzdF9hY3Rpb25zX2Jsb2NcIikudG9nZ2xlKCQoXCIuYWN0aW9uXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcblxyXG4kKFwiI2dyaWQgdGJvZHlcIikub24oXCJjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhYmxlLiQoXCJ0ci5zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiLmFjdGlvbnNcIikub24oXCJjbGlja1wiLCBcIi5jbG9zZS1tZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vJCgnLmNsb3NlLW1lJykuY2xpY2soZnVuY3Rpb24gKGUpe1xyXG4gICQoXCIuYWN0aW9uc1wiKS5yZW1vdmVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG52YXIgYXJyYXlfZGV0YWlsID0gW107XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGUpIHtcclxuXHJcbiBcclxuXHJcbiAgLy9hcnJheV9kZXRhaWxcclxuICB2YXIgZGV0YWlscyA9ICQoXCIjdGVzdFwiKS5kYXRhKFwiZGV0YWlsc1wiKTtcclxuICB2YXIgcGVyc29uID1bXTtcclxuICBcclxuICAkLmVhY2goZGV0YWlscywgZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcblxyXG4gICBcclxuXHJcbiAgIC8qIHBlcnNvbiBbJ2NvZGUnXT12YWx1ZS5jb2RlO1xyXG4gICAgcGVyc29uIFsnaWQnXT12YWx1ZS5pZDtcclxuICAgIHBlcnNvbiBbJ21vbnRhbnRSZW1pc2UnXT12YWx1ZS5tb250YW50UmVtaXNlO1xyXG4gICAgcGVyc29uIFsnb2JzZXJ2YXRpb24nXT12YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgIHBlcnNvbiBbJ3ByaXh0dGMnXT12YWx1ZS5wcml4dHRjO1xyXG4gICAgcGVyc29uIFsncHJpeHVuaXRhaXJlJ109dmFsdWUucHJpeHVuaXRhaXJlO1xyXG4gICAgcGVyc29uIFsncXVhbnRpdGUnXT12YWx1ZS5xdWFudGl0ZTtcclxuICAgIHBlcnNvbiBbJ3JlbWlzZSddPXZhbHVlLnJlbWlzZTtcclxuICAgIHBlcnNvbiBbJ3RpdHJlJ109dmFsdWUudGl0cmU7XHJcbiAgICBwZXJzb24gWyd0dmEnXT12YWx1ZS50dmE7XHJcbiAgICBwZXJzb24gWyd1bml0ZSddPXZhbHVlLnVuaXRlO1xyXG4gICAgcGVyc29uIFsndW5pdGVfaWQnXT12YWx1ZS51bml0ZV9pZDsqL1xyXG4vL2FsZXJ0KHZhbHVlLmlkKTtcclxuXHJcbmFycmF5X2RldGFpbC5wdXNoKHsnY29kZSc6dmFsdWUuY29kZSwnaWQnOnZhbHVlLmlkLCdtb250YW50UmVtaXNlJzp2YWx1ZS5tb250YW50UmVtaXNlLCdvYnNlcnZhdGlvbic6dmFsdWUub2JzZXJ2YXRpb24sXHJcbidwcml4dHRjJzp2YWx1ZS5wcml4dHRjLCdwcml4dW5pdGFpcmUnOnZhbHVlLnByaXh1bml0YWlyZSwncXVhbnRpdGUnOnZhbHVlLnF1YW50aXRlLCdyZW1pc2UnOnZhbHVlLnJlbWlzZSwndGl0cmUnOnZhbHVlLnRpdHJlICwndHZhJzp2YWx1ZS50dmEgLCAndW5pdGUnOnZhbHVlLnVuaXRlICwgJ3VuaXRlX2lkJzp2YWx1ZS51bml0ZV9pZH0pO1xyXG4gIH0pO1xyXG4gICQoXCIjdXZfZGV2aXNjYWJfZGV0YWlsXCIpLnZhbChKU09OLnN0cmluZ2lmeShhcnJheV9kZXRhaWwpKTtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhhcnJheV9kZXRhaWwpXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuXHJcbiBcclxuICBcclxuIFxyXG4gIC8vY29uc29sZS5sb2coYXJyYXlfZGV0YWlsKTtcclxuICAvL2FsZXJ0KCk7XHJcbiAvLyAkKCd0YWJsZSB0ciB0ZCAnKS5lYWNoKClcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4kKFwiLm5ld1wiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vYWxlcnQoKTtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQoXCIuZGV0X2ZvclwiKTtcclxuXHJcbiAgdmFyIGV4c2l0ID0gMDtcclxuICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgIGlmICgkKFwiI3V2X2RldmlzZGV0X2FydGljbGVcIikudmFsKCkgPT0gdmFsdWUuaWQpIHtcclxuICAgICAgZXhzaXQgPSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgLy8gU3RhcnQgbG9hZGluZ1xyXG4gIGwuc3RhcnQoKTtcclxuICBpZiAoZXhzaXQgPT0gMCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInV2X2RldmlzY2FiX2RldGFpbFwiKSxcclxuICAgICAgZGF0YTogZHRhLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAkKFwiLmVycm9ycy1saXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIi5hcnRpY2xlXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgbGV0IGxpbmVObyA9IDE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheV9kZXRhaWwpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhcnJheV9kZXRhaWwucHVzaChyZXN1bHQuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhhcnJheV9kZXRhaWwpO1xyXG5cclxuICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgJC5lYWNoKGFycmF5X2RldGFpbCwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhdGlvbiA9IHZhbHVlLm9ic2VydmF0aW9uO1xyXG4gICAgICAgICAgICB2YXIgcmVtaXNlID0gdmFsdWUucmVtaXNlICsgXCIgJVwiO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICB0dmEgPSBcIi1cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIG9ic2VydmF0aW9uID0gXCItXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG15X3JvdyA9XHJcbiAgICAgICAgICAgICAgXCIgPHRyPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgKGkgKyAxKSArXHJcbiAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgdmFsdWUuY29kZSArXHJcbiAgICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbHVlLnVuaXRlICtcclxuICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICB2YWx1ZS5xdWFudGl0ZSArXHJcbiAgICAgICAgICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZSArXHJcbiAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgdHZhICtcclxuICAgICAgICAgICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgICAgICAgICByZW1pc2UgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbHVlLm1vbnRhbnRSZW1pc2UgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbHVlLnByaXh0dGMgK1xyXG4gICAgICAgICAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2RlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtbmF2eSc+PC9pPjwvYT48L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgICAgICAgICAgbGluZU5vKys7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuc2VsZWN0Ml91bml0ZVwiKS52YWwobnVsbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYXJyYXlfZGV0YWlsKSk7XHJcbiAgICAgICAgICAkKFwiI3V2X2RldmlzY2FiX2RldGFpbFwiKS52YWwoSlNPTi5zdHJpbmdpZnkoYXJyYXlfZGV0YWlsKSk7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFycmF5X2RldGFpbCk7XHJcbiAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZygkKFwiI3V2X2RldmlzY2FiX2RldGFpbFwiKS52YWwoKSk7XHJcbiAgICAgICAgICAkKFwiLmFydGljbGVcIikudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFwiQ2V0IGFydGljbGUgZXhpc3RlIGTDqWrDoCBcIiwgXCJ3YXJuaW5nIFwiLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICBsLnN0b3AoKTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIubmV3XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGVsZXRlX2VsZW1lbnRcIiwgZnVuY3Rpb24gKGUpIHtcclxuIC8vIGFsZXJ0KCk7XHJcbiAgY29uc29sZS5sb2coYXJyYXlfZGV0YWlsKTtcclxuICBhcnJheV9kZXRhaWwuc3BsaWNlKCQodGhpcykuYXR0cihcImlkXCIpLCAxKTtcclxuICBjb25zb2xlLmxvZyhhcnJheV9kZXRhaWwpO1xyXG4gIGxldCBsaW5lTm8gPSAxO1xyXG4gICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keSB0clwiKS5yZW1vdmUoKTtcclxuICBcclxuICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgIHZhciB0dmEgPSB2YWx1ZS50dmEgKyBcIiAlXCI7XHJcbiAgICB2YXIgb2JzZXJ2YXRpb24gPSB2YWx1ZS5vYnNlcnZhdGlvbjtcclxuICAgIHZhciByZW1pc2UgPSB2YWx1ZS5yZW1pc2UgKyBcIiAlXCI7XHJcbiAgICBpZiAodmFsdWUudHZhID09IG51bGwpIHtcclxuICAgICAgdHZhID0gXCItXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUub2JzZXJ2YXRpb24gPT0gbnVsbCkge1xyXG4gICAgICBvYnNlcnZhdGlvbiA9IFwiLVwiO1xyXG4gICAgfVxyXG4gICAgdmFyIG15X3JvdyA9XHJcbiAgICAgIFwiIDx0cj48dGQ+XCIgK1xyXG4gICAgICAoaSArIDEpICtcclxuICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgIHZhbHVlLmNvZGUgK1xyXG4gICAgICBcIiAtIFwiICtcclxuICAgICAgdmFsdWUudGl0cmUgK1xyXG4gICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgdmFsdWUudW5pdGUgK1xyXG4gICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICBcIjwvdGQ+IDx0ZD5cIiArXHJcbiAgICAgIHZhbHVlLnByaXh1bml0YWlyZS50b0ZpeGVkKDIpICtcclxuICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgIHR2YSArXHJcbiAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICByZW1pc2UgK1xyXG4gICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgdmFsdWUubW9udGFudFJlbWlzZS50b0ZpeGVkKDIpICtcclxuICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgIHZhbHVlLnByaXh0dGMudG9GaXhlZCgyKSArXHJcbiAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2RlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgIGkgK1xyXG4gICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1uYXZ5Jz48L2k+PC9hPjwvdGQ+PC90cj5cIjtcclxuICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgIGxpbmVObysrO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIubmV3LWFydGljbGUtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIi5lZGl0LW5ldy1hcnRpY2xlXCIpLnNob3coKTtcclxuICAkKHRoaXMpLmhpZGUoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKFwiI2dyaWQgdGJvZHlcIikub24oXCJjbGlja1wiLCBcIi5jZF9vcFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJlcnBfY2xpZW50X25ld19kZXZpc1wiLCB7XHJcbiAgICBpZDogJCh0aGlzKS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpLFxyXG4gIH0pO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG59KTtcclxuXHJcbiQoXCIubmV3XCIpLm9uKFwic3VibWl0XCIsIFwiLmZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gIC8vIFN0YXJ0IGxvYWRpbmdcclxuICBsLnN0YXJ0KCk7XHJcbi8vYWxlcnQoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJlcnBfY2xpZW50X2luc2VydF9kZXZpc1wiLCB7IGlkOiBpZCB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgbC5zdG9wKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVtcHR5KSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcImVycF9jbGllbnRcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIGwuc3RvcCgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==