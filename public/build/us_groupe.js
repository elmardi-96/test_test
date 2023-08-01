(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/components/us_groupe.js":
/*!*******************************************!*\
  !*** ./assets/js/components/us_groupe.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");









var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.setRoutingData(routes);

/*js tree*/
__webpack_require__(/*! ./../../css/plugins/jsTree/style.min.css */ "./assets/css/plugins/jsTree/style.min.css");
__webpack_require__(/*! ./../../js/plugins/jsTree/jstree.min.js */ "./assets/js/plugins/jsTree/jstree.min.js");
__webpack_require__(/*! ./../../css/plugins/switchery/switchery.css */ "./assets/css/plugins/switchery/switchery.css");
__webpack_require__(/*! ./../../js/plugins/switchery/switchery.js */ "./assets/js/plugins/switchery/switchery.js");
$(".new , .edit").on("submit", "form", function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.activeElement);
  l.start();
});

/*message notification  swal*/

var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-white btn-xs sySweetStyle",
    cancelButton: "btn btn-warning btn-xs sySweetStyle"
  },
  buttonsStyling: false
});

/*initial object js tree*/

$("#container").jstree();

/*select 2*/
var select2_users = $(".select2_users").select2({
  placeholder: "Utilisateurs Sans groupe",
  allowClear: true
});
var table = $("#grid").DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_list"),
    // json datasource
    type: "get"
  },
  deferRender: true,
  stateSave: true,
  lengthMenu: [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
  pageLength: 15,
  //    "order": [[0, "desc"]],
  columns: [{
    orderable: false,
    width: "5%",
    searchable: true,
    targets: [0]
  }, {
    orderable: true,
    width: "25%"
  }, {
    orderable: true,
    width: "25%"
  }, {
    orderable: true,
    width: "25%"
  }, {
    orderable: true,
    width: "54%"
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
});

/* lien vers la livraison */
$("#grid tbody").on("click", ".cd_op", function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_edit", {
    id: $(this).closest("tr").attr("id")
  });
  window.location.href = url;
});
jQuery.each($('.toastr-msg'), function (i, val) {
  console.log($(this).attr('data-toastr'));
  console.log($(this).text());
  if ($(this).attr('data-toastr') == "success") {
    toastr.success("Succées", $(this).text(), {
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
$(".new").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  console.log(e.type);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("usGroupe_insert"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.empty) {
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
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  //  console.log(api.data())

  console.log(st);
  if (st != null) {
    $.each(st.columns, function (key, value) {
      if (value.search.search != "") {
        $(".remove-filter").show();
        return false;
      }
    });

    /* recupérer les valeurs déja saisie dans le filtre */

    $(".search_column1").val(st.columns[1].search.search);
    $(".search_column2").val(st.columns[2].search.search);
    $(".search_column3 option[value='" + st.columns[3].search.search + "']").attr("selected", "selected");
    $(".search_column6").val(st.columns[6].search.search);
  }
});

/*column 1 de datatble search*/

var search_column1 = $(".search_column1").datepicker({
  todayBtn: "linked",
  keyboardNavigation: true,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true,
  language: "fr"
});
search_column1.on("changeDate", function (e) {
  table.columns(1).search(this.value).draw();
});
$(".search_column1_clear").click(function () {
  $(".search_column1").datepicker("setDate", null).datepicker("fill");
});
$(".search_column2").on("keyup", function () {
  table.columns(2).search(this.value).draw();
});
$(".search_column3").on("change", function () {
  table.columns(3).search(this.value).draw();
});
$(".search_column6").on("change", function () {
  table.columns(6).search(this.value).draw();
});
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
$("body").on("change", ".list_actions", function () {
  var _action = [];
  $.each($("input[name=_action]:checked"), function () {
    _action.push($(this).val());
  });
  $.ajax({
    type: "DELETE",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternedet_delete_list"),
    data: {
      _action: _action
    },
    //        processData: false,
    //        contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      //            if (result.errors) {
      //                $('.errors-list').remove();
      //                jQuery.each(result.errors.violations, function (i, val) {
      //                    var column = val.propertyPath;
      //                    var columnName = column.split('.');
      //                    $("." + selector + " #" + form_name + "_" + columnName[1]).after(("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>"));
      //                });
      //            } else if (result.empty) {
      //                toastr.warning(result.message.text, result.message.title, {timeOut: 4000})
      //                // $('.message-success').html("<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      //            } else if (result.data) {
      //                toastr.success(result.message.text, result.message.title, {timeOut: 4000})
      //                $(".form")[0].reset();
      //                $(".new .table-detail tbody").hide();
      //                $('.new-article-btn').show();
      //                $(".new .table-detail > tbody tr").not(":last").remove();
      //                //    $('.message-success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button><strong>" + result.message.title + "</strong> " + result.message.text + "</strong>.</div>")
      //            }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error("Erreur", errorThrown, {
        timeOut: 4000
      });
    }
  });

  //  alert("My favourite sports are: " + favorite.join(", "));
});

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

  //console.log(data);

  //console.log($form.attr("method"));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    data: data,
    success: function success(html) {
      // console.log(html);
      $(".compteRubrique").replaceWith($(html).find(".compteRubrique"));
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
    }
  });
});
var array_detail = [];
$(".new").on("submit", ".detail_form", function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var selector = $(this).attr("class").split(" ")[0];
  console.log(selector);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternedet_new"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.data) {
        $(".detail_form")[0].reset();
        $(".errors-list").remove();
        $(".article").focus();
        //                console.log(result);
        var lineNo = 1;
        array_detail.push(result.data);
        $(".new .table-detail > tbody").empty();
        $.each(array_detail, function (i, value) {
          var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + value.tva + "</td><td>" + value.prixttc + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
          $(".new .table-detail > tbody").append(my_row);
          lineNo++;
        });
        $("#t_achatdemandeinternecab_detail").val(JSON.stringify(array_detail));
      }
    }
  });
  e.preventDefault();
});
$(".new").on("click", ".delete_element", function (e) {
  console.log($(this).attr("id"));
  array_detail.splice($(this).attr("id"), 1);
  console.log(array_detail);
  $(".new .table-detail > tbody tr").remove();
  $.each(array_detail, function (i, value) {
    var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + value.tva + "</td><td>" + value.prixttc + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
    $(".new .table-detail >tbody").append(my_row);
  });
});

/*
 *
 * Edit operations
 *
 */

$(".edit").on("submit", ".form", function (e) {
  var form_name = $(this).attr("name");
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_update", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      $(".errors-list").remove();
      if (result.errors) {
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".form #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
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

  console.log(id);
  swal({
    title: "Confirmation ?",
    text: "Voulez vous vraiment supprimer cet enregistrement ?",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "Oui, supprimer!",
    cancelButtonText: "No, Annuler!",
    closeOnConfirm: true,
    closeOnCancel: true
  }, function (isConfirm) {
    if (isConfirm) {
      $.ajax({
        type: "DELETE",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_delete", {
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
            selector.parent().parent().hide();
            // swal(result.message.title, result.message.text, result.message.success);
            //location.reload();
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

$(".edit").on("submit", ".detail_edit", function (e) {
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get("_id");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternecab_edit_detail", {
      id: id
    }),
    success: function success(result) {
      var slh = selector.parent().parent().empty().append("<td colspan='7'>" + result + "</td>");
      // slh.append(result)
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
  var form_name = $(this).attr("name");
  var id = dta.get("_id");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternecab_update_detail", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".detail_form #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
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

/*afficher la formulaire d'ajout d'un nouveau article */

//$('.edit-new-article-btn').click(function (e) {
//    $('.edit-new-article').show();
//    $(this).hide();
//    e.preventDefault();
//});

$(".new-article-btn").click(function (e) {
  $(".edit-new-article").show();
  $(this).hide();
  e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$(".edit").on("submit", ".detail_form_add_article", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = dta.get("_id_cab");
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternedet_insert", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        $(".errors-list").remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split(".");
          console.log(columnName[1]);
          $(".detail_form_edit #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
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
$(".show-me").click(function (e) {
  $(".actions").toggleClass("sidebar-open");
  e.preventDefault();
});
$(".actions").on("click", ".close-me", function (e) {
  //$('.close-me').click(function (e){
  $(".actions").removeClass("sidebar-open");
  e.preventDefault();
});
$(".statut_action").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternecab_statut", {
        id: id
      }),
      success: function success(result) {
        $(".actions").html(result);
        $(".actions").toggleClass("sidebar-open");
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#show_action").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternecab_show", {
      id: id
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
$("#edit_action").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_edit", {
      id: id
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
$(".actions").on("submit", ".form_statut", function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr("name");
  var id = table.row(".selected").id();
  if (id) {
    $.ajax({
      type: "POST",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternecab_statut", {
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
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$(document).on("click", "._t_affaire_quick", function (e) {
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_affaire_new_quick"),
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_affaire_new_quick_insert"),
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("t_achatdemandeinternecab_new"),
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
$("._permission").click(function (e) {
  var groupe_id = table.row(".selected").id();
  if (groupe_id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_modules", {
      groupe_id: groupe_id
    });
    window.location.href = url;
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("._utilisateur").click(function (e) {
  // var groupe_id = table.row('.selected').id();
  var groupe_id = $("#test").data("groupeId");
  //  alert(groupe_id);
  if (groupe_id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_utilisateurs", {
      groupe_id: groupe_id
    });
    window.location.href = url;
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("._users_groupe").submit(function (e) {
  var form_name = $(this).attr("name");
  var dta = new FormData(this);
  var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".my-button"));
  //    // Start loading
  l.start();
  var selector = $(this).attr("class").split(" ")[0];
  console.log(selector);
  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_utilisateurs", {
      groupe_id: dta.get("form[_groupe]")
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      // l.stop();
      if (result.errors) {
        $("." + selector + " #form_user").after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + result.message.text + "</span></span></span>");
      } else if (result.code == 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        location.reload();
      }
    }
  });
  e.preventDefault();
});
$("._user_groupe_delete").click(function (e) {
  var id = $(this).attr("id");
  console.log(id);
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: "animatedSwal flipInX faster"
    },
    position: "top",
    title: "Confirmation ?",
    text: "Voulez-vous vraiment supprimer cet utilisateur de ce groupe ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-trash'></i> Oui, Supprimer!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        type: "DELETE",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_delete_user_from_groupe", {
          id: id
        }),
        success: function success(result) {
          console.log(result);
          if (result.code == 200) {
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            location.reload();
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
var permissions = $(".permissions").select2({
  placeholder: "Permissions",
  allowClear: true
});
$(".Toogle").bootstrapToggle();
$(function () {
  $(".select_all_permissions").change(function () {
    console.log($(this).attr("id"));
    var sousModuleSelected = ".ToogleSousModuleSelect_" + $(this).attr("id");
    //        $('.ToogleSousModule').removeClass('ToogleSousModule');
    //        var module_id = $(this).attr('id');
    if ($(this).prop("checked")) {
      //           $(".selected > option").prop("selected","selected");
      //            $(".selected").trigger("change");

      var optionValues = [];
      $(sousModuleSelected + " option").each(function () {
        optionValues.push($(this).val());
      });
      $(sousModuleSelected).val(optionValues).trigger("change");
    } else {
      $(sousModuleSelected).val(null).trigger("change");
    }
  });
  $(".ToogleModule").change(function () {
    $(".ToogleSousModule").removeClass("ToogleSousModule");
    var module_id = $(this).attr("id");
    if ($(this).prop("checked")) {
      //            $('.ToogleSousModule_' + module_id).not($(this)).each(function (key, val) {
      //                $(val).bootstrapToggle('on');
      //            });
    } else {
      $(".ToogleSousModule_" + module_id).not($(this)).each(function (key, val) {
        $(val).bootstrapToggle("off");
      });
    }
  });
  $(".ToogleSousModule").change(function () {
    var str = $(this).attr("id");
    var res = str.split("_");
    var module = res[0];
    var sousModule = res[1];
    console.log("ici");
    if ($(this).prop("checked") == true) {
      $(".ToogleSousModuleSelect_" + sousModule).prop("disabled", false);
    } else {
      $(".ToogleSousModuleSelect_" + sousModule).prop("disabled", true);
    }
  });
});
$(".form-permission").submit(function (e) {
  //$('.new').on('submit', '.form', function (e) {
  //    var form_name = $(this).attr('name');
  var dta = new FormData(this);
  //    var selector = $(this).attr('class').split(' ')[0];

  $.ajax({
    type: "POST",
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_permission_insert"),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      //$('body,html').animate({scrollTop: $(".new").offset().top}, 500);
      if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        setTimeout(function () {
          location.reload();
        }, 2000);
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
$('.usgroupeselect2').on('select2:selecting', function (e) {
  console.log('Selecting: ', e.params.args.data);
  $('#external-events').html('<div class="using_json m-l-15"></div>');
  if (e.params.args.data.id == '') {
    $('.message2').show();
  } else {
    $('.message2').hide();
    $(".using_json").jstree({
      core: {
        data: {
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_permission_modules_groupe", {
            groupe: $("#_id").val(),
            dossier: e.params.args.data.id
          }),
          dataType: "json"
        },
        check_callback: true
      },
      types: {
        root: {
          icon: "glyphicon glyphicon-folder-close"
        },
        child: {
          icon: "glyphicon glyphicon-folder-open"
        },
        "default": {}
      },
      checkbox: {
        keep_selected_style: true,
        whole_node: true,
        // to avoid checking the box just clicking the node
        tie_selection: false
      },
      plugins: ["search", "themes", "types", "checkbox"]
    }).bind("loaded.jstree", function (event, data) {
      var arr = [];
      //console.log(data.instance.get_checked())
      //console.log(data)
      //console.log($("#using_json").jstree(true).get_selected())
      $.each($(".using_json").jstree("get_checked", true), function (i) {
        //arr[]
        //console.log(this)
        if (this.id.indexOf("ope_Link_") >= 0) {
          arr[i] = this.li_attr;
        }
      });
      window.all = arr;
      /* var result = $(this).jstree("get_selected", true);
      //console.log($("#using_json").jstree("get_selected").text())
      window.all = result
        .filter((node) => {
          return node.state.disabled == false;
        })
        .map((checked) => {
          if (checked.id.indexOf("ope_Link_") >= 0) {
            return checked.li_attr;
          }
        });*/
      console.log(arr);
    }).on("select_node.jstree", function (e, data) {
      console.log(data);
      //ope_Link_
      var str = data.node.id;
      console.log(data);
      if (data.node.id.indexOf("ope_Link_") >= 0) {
        //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
      }
    });
  }
});
var arry = [];
var i = 0;

/* .on("uncheck_node.jstree", function (e, data) {
    /*alert(data.node.id + ' ' + data.node.text +
        (data.node.state.checked ? ' CHECKED': ' NOT CHECKED'))
    console.log(data.node);
    alert(
      data.node.id +
        " " +
        data.node.text +
        (data.node.state.checked ? " CHECKED" : " NOT CHECKED")
    );
    $.map(data.node.children_d, function (i) {
      console.log(i);
      if (i.indexOf("ope_Link_") == 0) {
      }
    });
    if (data.node.id.indexOf("ope_Link_") >= 0) {
      //'sousModule': $('#'+str).attr('data-sous-module'),'module': $('#'+str).attr('data-module'),'operation': $('#'+str).attr('data-operation'),'dossier': $('#'+str).attr('data-dossier'),
      alert(
        data.node.id +
          " " +
          data.node.text +
          (data.node.state.checked ? " CHECKED" : " NOT CHECKED")
      );
    }
  });*/

$("#new_groupe").on("click", function (e) {
  var l = ladda__WEBPACK_IMPORTED_MODULE_10__["create"](document.querySelector(".my-button"));
  var checkedNodes = [];
  $.each($(".using_json").jstree("get_checked", true), function (i) {
    if (this.id != "" || this.id != null) {
      if (this.id.indexOf("ope_Link_") >= 0) {
        checkedNodes[i] = this.li_attr;
      }
    }
  });
  swalWithBootstrapButtons.fire({
    showClass: {
      popup: "animatedSwal flipInX faster"
    },
    position: "top",
    title: "Confirmation ?",
    text: "Voulez vous vraiment ajouter ces permissions ?",
    type: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "<i class='fa fa-plus'></i> Enregistrer!",
    cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
  }).then(function (result) {
    if (result.value) {
      l.start();
      $.ajax({
        type: "POST",
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_permission_operations", {
          groupe: $("#_id").val(),
          token: $("#_id").attr("data-token"),
          dossier: $('.usgroupeselect2').val()
        }),
        data: {
          data: checkedNodes,
          all: window.all
        },
        success: function success(result) {
          console.log(result);
          if (result.code == 200) {
            // table.ajax.reload();
            //   alert();
            window.all = checkedNodes;
            checkedNodes = null;
            // l.stop();
            toastr.success(result.message.text, result.message.title, {
              timeOut: 4000
            });
            var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_permission_modules_list", {
              group: $("#_id").val()
            });
            window.location.href = url;
            //$(".using_json").jstree(true).refresh();
            //table2.ajax.reload();
          } else if (result.code == 403) {
            l.stop();
            toastr.warning(result.message.text, result.message.title, {
              timeOut: 4000
            });
          }
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
  e.preventDefault();
});
var table2 = $("#grid2").DataTable({
  paging: true,
  "order": [],
  language: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("datatables_langue"),
    processing: true
  }
});
$(".using_json2").jstree({
  core: {
    data: {
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate("us_groupe_permission_modules_groupe_operation", {
        groupe: $("#_id").val()
      }),
      dataType: "json"
    }
    //check_callback: true,
  },

  types: {
    root: {
      icon: "glyphicon glyphicon-folder-close"
    },
    child: {
      icon: "glyphicon glyphicon-folder-open"
    },
    "default": {}
  },
  plugins: ["search", "themes", "types"]
});

/*
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                toastr.error("Erreur", errorThrown, {timeOut: 4000})
            }
        });
        e.preventDefault();
    });*/

$('#_delete').click(function (e) {
  var id = $("#test").data("groupeId");
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate('us_groupe_delete', {
            'id': id
          }),
          success: function success(result) {
            console.log(result);
            if (result.code == 200) {
              // table.ajax.reload();
              //   alert();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate('us_groupe_index');
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
$('#using_json').jstree({
  core: {
    data: {
      "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate('us_groupe_permission_modules_groupe', {
        groupe: $("#_id").val()
      }),
      "dataType": "json"
    }
  },
  types: {
    "root": {
      "icon": "glyphicon glyphicon-folder-close"
    },
    "child": {
      "icon": "glyphicon glyphicon-folder-open"
    },
    "default": {}
  },
  /* "checkbox": {
       "keep_selected_style": true,
       whole_node: true, // to avoid checking the box just clicking the node 
       tie_selection: true
   },*/
  plugins: ["search", "themes", "types"]
}).on("select_node.jstree", function (e, data) {
  console.log(data);
  //ope_Link_
  if (data.node.id.indexOf("ope_Link_") >= 0) {
    var checkBoxes = $("#" + data.node.id).find('input');
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
  }
});
$('.using_json3').jstree({
  core: {
    data: {
      "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.generate('us_groupe_permission_modules_groupe_list_with_group', {
        groupe: $("#_id").val()
      }),
      "dataType": "json"
    }
  },
  types: {
    "root": {
      "icon": "glyphicon glyphicon-folder-close"
    },
    "child": {
      "icon": "glyphicon glyphicon-folder-open"
    },
    "default": {}
  },
  /* "checkbox": {
       "keep_selected_style": true,
       whole_node: true, // to avoid checking the box just clicking the node 
       tie_selection: true
   },*/
  plugins: ["search", "themes", "types"]
}).on("select_node.jstree", function (e, data) {
  console.log(data);
  //ope_Link_
  if (data.node.id.indexOf("ope_Link_") >= 0) {
    var checkBoxes = $("#" + data.node.id).find('input');
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/components/us_groupe.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1",17,14,6,7,16,19,18]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy91c19ncm91cGUuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIiQiLCJvbiIsImUiLCJsIiwiTGFkZGEiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwianN0cmVlIiwic2VsZWN0Ml91c2VycyIsInNlbGVjdDIiLCJwbGFjZWhvbGRlciIsImFsbG93Q2xlYXIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkZWZlclJlbmRlciIsInN0YXRlU2F2ZSIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsIndpZHRoIiwic2VhcmNoYWJsZSIsInRhcmdldHMiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImxhbmd1YWdlIiwicHJvY2Vzc2luZyIsImlkIiwiY2xvc2VzdCIsImF0dHIiLCJocmVmIiwialF1ZXJ5IiwiZWFjaCIsImkiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwidG9hc3RyIiwic3VjY2VzcyIsInRpbWVPdXQiLCJ3YXJuaW5nIiwiZXJyb3IiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwic3BsaXQiLCJkYXRhIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsInJlc3VsdCIsImVycm9ycyIsInJlbW92ZSIsInZpb2xhdGlvbnMiLCJjb2x1bW4iLCJwcm9wZXJ0eVBhdGgiLCJjb2x1bW5OYW1lIiwiYWZ0ZXIiLCJ0aXRsZSIsImVtcHR5IiwibWVzc2FnZSIsInJlc2V0IiwiaGlkZSIsInNob3ciLCJub3QiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInByZXZlbnREZWZhdWx0Iiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwia2V5IiwidmFsdWUiLCJzZWFyY2giLCJzZWFyY2hfY29sdW1uMSIsImRhdGVwaWNrZXIiLCJ0b2RheUJ0biIsImtleWJvYXJkTmF2aWdhdGlvbiIsImZvcmNlUGFyc2UiLCJjYWxlbmRhcldlZWtzIiwiYXV0b2Nsb3NlIiwiZHJhdyIsImNsaWNrIiwiZmlsdGVyIiwibGVuZ3RoIiwicHJvcCIsInRvZ2dsZSIsIl9hY3Rpb24iLCJwdXNoIiwiY2hhbmdlIiwiJGZvcm0iLCJodG1sIiwicmVwbGFjZVdpdGgiLCJmaW5kIiwiYXJyYXlfZGV0YWlsIiwiZm9jdXMiLCJsaW5lTm8iLCJteV9yb3ciLCJhcnRpY2xlIiwicXVhbnRpdGUiLCJwcml4dW5pdGFpcmUiLCJ0dmEiLCJwcml4dHRjIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNwbGljZSIsImdldCIsInRva2VuIiwic3dhbCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjbG9zZU9uQ29uZmlybSIsImNsb3NlT25DYW5jZWwiLCJpc0NvbmZpcm0iLCJwYXJlbnQiLCJzbGgiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwicm93IiwiY29kZSIsImdyb3VwZV9pZCIsInN1Ym1pdCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDbG9zZUJ1dHRvbiIsInRoZW4iLCJyZXNwb25zZUpTT04iLCJwZXJtaXNzaW9ucyIsImJvb3RzdHJhcFRvZ2dsZSIsInNvdXNNb2R1bGVTZWxlY3RlZCIsIm9wdGlvblZhbHVlcyIsInRyaWdnZXIiLCJtb2R1bGVfaWQiLCJzdHIiLCJyZXMiLCJtb2R1bGUiLCJzb3VzTW9kdWxlIiwic2V0VGltZW91dCIsInBhcmFtcyIsImFyZ3MiLCJjb3JlIiwiZ3JvdXBlIiwiZG9zc2llciIsImRhdGFUeXBlIiwiY2hlY2tfY2FsbGJhY2siLCJ0eXBlcyIsInJvb3QiLCJpY29uIiwiY2hpbGQiLCJjaGVja2JveCIsImtlZXBfc2VsZWN0ZWRfc3R5bGUiLCJ3aG9sZV9ub2RlIiwidGllX3NlbGVjdGlvbiIsInBsdWdpbnMiLCJiaW5kIiwiZXZlbnQiLCJhcnIiLCJpbmRleE9mIiwibGlfYXR0ciIsImFsbCIsImFycnkiLCJjaGVja2VkTm9kZXMiLCJncm91cCIsInN0b3AiLCJ0YWJsZTIiLCJwYWdpbmciLCJjaGVja0JveGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw2RUFBdUMsQ0FBQztBQUMyQztBQUMxR0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFQztBQUMvQjtBQUNBQyxtQkFBTyxDQUFDLDJGQUEwQyxDQUFDO0FBQ25EQSxtQkFBTyxDQUFDLHlGQUF5QyxDQUFDO0FBRWxEQSxtQkFBTyxDQUFDLGlHQUE2QyxDQUFDO0FBQ3REQSxtQkFBTyxDQUFDLDZGQUEyQyxDQUFDO0FBRXBERyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVVDLENBQUMsRUFBRTtFQUNsRCxJQUFJQyxDQUFDLEdBQUdDLDZDQUFZLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDO0VBQzVDSCxDQUFDLENBQUNJLEtBQUssRUFBRTtBQUNYLENBQUMsQ0FBQzs7QUFFRjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdYLG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNWSx3QkFBd0Is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QUFVLEVBQUU7SUFDaEI7RUFDSixDQUFDO0VBQ0R5SCxLQUFLLEVBQUU7SUFDSCxNQUFNLEVBQUU7TUFDSixNQUFNLEVBQUU7SUFDWixDQUFDO0lBQ0QsT0FBTyxFQUFFO01BQ0wsTUFBTSxFQUFFO0lBQ1osQ0FBQztJQUNELFNBQVMsRUFBRSxDQUNYO0VBRUosQ0FBQztFQUNGO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7RUFDUVEsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPO0FBQ3pDLENBQUMsQ0FBQyxDQUFDekwsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFVBQVVDLENBQUMsRUFBRW9FLElBQUksRUFBRTtFQUU1Q1osT0FBTyxDQUFDQyxHQUFHLENBQUNXLElBQUksQ0FBQztFQUNqQjtFQUNBLElBQUlBLElBQUksQ0FBQzdCLElBQUksQ0FBQ1MsRUFBRSxDQUFDNEksT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUMzQyxJQUFJUyxVQUFVLEdBQUd2TSxDQUFDLENBQUMsR0FBRyxHQUFDc0UsSUFBSSxDQUFDN0IsSUFBSSxDQUFDUyxFQUFFLENBQUMsQ0FBQ3VFLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbEQ4RSxVQUFVLENBQUN0RixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUNzRixVQUFVLENBQUN0RixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDeEQ7QUFHSCxDQUFDLENBQUMsQyIsImZpbGUiOiJ1c19ncm91cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvblwiKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSBcIi4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzXCI7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gXCJsYWRkYVwiO1xyXG4vKmpzIHRyZWUqL1xyXG5yZXF1aXJlKFwiLi8uLi8uLi9jc3MvcGx1Z2lucy9qc1RyZWUvc3R5bGUubWluLmNzc1wiKTtcclxucmVxdWlyZShcIi4vLi4vLi4vanMvcGx1Z2lucy9qc1RyZWUvanN0cmVlLm1pbi5qc1wiKTtcclxuXHJcbnJlcXVpcmUoXCIuLy4uLy4uL2Nzcy9wbHVnaW5zL3N3aXRjaGVyeS9zd2l0Y2hlcnkuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi8uLi8uLi9qcy9wbHVnaW5zL3N3aXRjaGVyeS9zd2l0Y2hlcnkuanNcIik7XHJcblxyXG4kKFwiLm5ldyAsIC5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiZm9ybVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gIGwuc3RhcnQoKTtcclxufSk7XHJcblxyXG4vKm1lc3NhZ2Ugbm90aWZpY2F0aW9uICBzd2FsKi9cclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gIGN1c3RvbUNsYXNzOiB7XHJcbiAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZVwiLFxyXG4gICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlXCIsXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxuLyppbml0aWFsIG9iamVjdCBqcyB0cmVlKi9cclxuXHJcbiQoXCIjY29udGFpbmVyXCIpLmpzdHJlZSgpO1xyXG5cclxuLypzZWxlY3QgMiovXHJcbnZhciBzZWxlY3QyX3VzZXJzID0gJChcIi5zZWxlY3QyX3VzZXJzXCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIlV0aWxpc2F0ZXVycyBTYW5zIGdyb3VwZVwiLFxyXG4gIGFsbG93Q2xlYXI6IHRydWUsXHJcbn0pO1xyXG52YXIgdGFibGUgPSAkKFwiI2dyaWRcIikuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1c19ncm91cGVfbGlzdFwiKSwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICB0eXBlOiBcImdldFwiLFxyXG4gIH0sXHJcbiAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gIGxlbmd0aE1lbnU6IFtcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIC0xXSxcclxuICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdLFxyXG4gIF0sXHJcbiAgcGFnZUxlbmd0aDogMTUsXHJcbiAgLy8gICAgXCJvcmRlclwiOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgY29sdW1uczogW1xyXG4gICAgeyBvcmRlcmFibGU6IGZhbHNlLCB3aWR0aDogXCI1JVwiLCBzZWFyY2hhYmxlOiB0cnVlLCB0YXJnZXRzOiBbMF0gfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCIyNSVcIiB9LFxyXG4gICAgeyBvcmRlcmFibGU6IHRydWUsIHdpZHRoOiBcIjI1JVwiIH0sXHJcbiAgICB7IG9yZGVyYWJsZTogdHJ1ZSwgd2lkdGg6IFwiMjUlXCIgfSxcclxuICAgIHsgb3JkZXJhYmxlOiB0cnVlLCB3aWR0aDogXCI1NCVcIiB9LFxyXG4gIF0sXHJcbiAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICBidXR0b25zOiBbXHJcbiAgICBcImNvbHVtbnNUb2dnbGVcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJSZXN0YXVyZXJcIixcclxuICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhbmd1YWdlOiB7XHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJkYXRhdGFibGVzX2xhbmd1ZVwiKSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcblxyXG4vKiBsaWVuIHZlcnMgbGEgbGl2cmFpc29uICovXHJcbiQoXCIjZ3JpZCB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNkX29wXCIsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInVzX2dyb3VwZV9lZGl0XCIsIHtcclxuICAgIGlkOiAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIiksXHJcbiAgfSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuXHJcbmpRdWVyeS5lYWNoKCQoJy50b2FzdHItbXNnJyksIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxuICBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY8OpZXNcIiwgJCh0aGlzKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSlcclxuICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcIndhcm5pbmdcIikge1xyXG4gICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgJCh0aGlzKS50ZXh0KCksIHt0aW1lT3V0OiA0MDAwfSlcclxuICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcImVycm9yXCIpIHtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQodGhpcykudGV4dCgpLCB7dGltZU91dDogNDAwMH0pXHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4kKFwiLm5ld1wiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIilbMF07XHJcbiAgY29uc29sZS5sb2coZS50eXBlKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1c0dyb3VwZV9pbnNlcnRcIiksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICQoXCIuXCIgKyBzZWxlY3RvciArIFwiICNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZVsxXSkuYWZ0ZXIoXHJcbiAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2Vycm9ycy1saXN0IGludmFsaWQtZmVlZGJhY2sgZC1ibG9jayc+PHNwYW4gY2xhc3M9J2QtYmxvY2snPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1pY29uIGJhZGdlIGJhZGdlLWRhbmdlciB0ZXh0LXVwcGVyY2FzZSc+RXJyZXVyPC9zcGFuPiA8c3BhbiBjbGFzcz0nZm9ybS1lcnJvci1tZXNzYWdlJz5cIiArXHJcbiAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vICQoJy5tZXNzYWdlLXN1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtd2FybmluZyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPsOXPC9idXR0b24+PHN0cm9uZz5cIiArIHJlc3VsdC5tZXNzYWdlLnRpdGxlICsgXCI8L3N0cm9uZz4gXCIgKyByZXN1bHQubWVzc2FnZS50ZXh0ICsgXCI8L3N0cm9uZz4uPC9kaXY+XCIpXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLmZvcm1cIilbMF0ucmVzZXQoKTtcclxuICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsIHRib2R5XCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLm5ldy1hcnRpY2xlLWJ0blwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLm5vdChcIjpsYXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vICAgICQoJy5tZXNzYWdlLXN1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPsOXPC9idXR0b24+PHN0cm9uZz5cIiArIHJlc3VsdC5tZXNzYWdlLnRpdGxlICsgXCI8L3N0cm9uZz4gXCIgKyByZXN1bHQubWVzc2FnZS50ZXh0ICsgXCI8L3N0cm9uZz4uPC9kaXY+XCIpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICB2YXIgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgdmFyIHN0ID0gYXBpLnN0YXRlLmxvYWRlZCgpO1xyXG5cclxuICB2YXIgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgLy8gIGNvbnNvbGUubG9nKGFwaS5kYXRhKCkpXHJcblxyXG4gIGNvbnNvbGUubG9nKHN0KTtcclxuICBpZiAoc3QgIT0gbnVsbCkge1xyXG4gICAgJC5lYWNoKHN0LmNvbHVtbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZS5zZWFyY2guc2VhcmNoICE9IFwiXCIpIHtcclxuICAgICAgICAkKFwiLnJlbW92ZS1maWx0ZXJcIikuc2hvdygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogcmVjdXDDqXJlciBsZXMgdmFsZXVycyBkw6lqYSBzYWlzaWUgZGFucyBsZSBmaWx0cmUgKi9cclxuXHJcbiAgICAkKFwiLnNlYXJjaF9jb2x1bW4xXCIpLnZhbChzdC5jb2x1bW5zWzFdLnNlYXJjaC5zZWFyY2gpO1xyXG4gICAgJChcIi5zZWFyY2hfY29sdW1uMlwiKS52YWwoc3QuY29sdW1uc1syXS5zZWFyY2guc2VhcmNoKTtcclxuICAgICQoXHJcbiAgICAgIFwiLnNlYXJjaF9jb2x1bW4zIG9wdGlvblt2YWx1ZT0nXCIgKyBzdC5jb2x1bW5zWzNdLnNlYXJjaC5zZWFyY2ggKyBcIiddXCJcclxuICAgICkuYXR0cihcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKFwiLnNlYXJjaF9jb2x1bW42XCIpLnZhbChzdC5jb2x1bW5zWzZdLnNlYXJjaC5zZWFyY2gpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKmNvbHVtbiAxIGRlIGRhdGF0YmxlIHNlYXJjaCovXHJcblxyXG52YXIgc2VhcmNoX2NvbHVtbjEgPSAkKFwiLnNlYXJjaF9jb2x1bW4xXCIpLmRhdGVwaWNrZXIoe1xyXG4gIHRvZGF5QnRuOiBcImxpbmtlZFwiLFxyXG4gIGtleWJvYXJkTmF2aWdhdGlvbjogdHJ1ZSxcclxuICBmb3JjZVBhcnNlOiBmYWxzZSxcclxuICBjYWxlbmRhcldlZWtzOiB0cnVlLFxyXG4gIGF1dG9jbG9zZTogdHJ1ZSxcclxuICBsYW5ndWFnZTogXCJmclwiLFxyXG59KTtcclxuc2VhcmNoX2NvbHVtbjEub24oXCJjaGFuZ2VEYXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdGFibGUuY29sdW1ucygxKS5zZWFyY2godGhpcy52YWx1ZSkuZHJhdygpO1xyXG59KTtcclxuJChcIi5zZWFyY2hfY29sdW1uMV9jbGVhclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5zZWFyY2hfY29sdW1uMVwiKS5kYXRlcGlja2VyKFwic2V0RGF0ZVwiLCBudWxsKS5kYXRlcGlja2VyKFwiZmlsbFwiKTtcclxufSk7XHJcblxyXG4kKFwiLnNlYXJjaF9jb2x1bW4yXCIpLm9uKFwia2V5dXBcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKHRoaXMudmFsdWUpLmRyYXcoKTtcclxufSk7XHJcblxyXG4kKFwiLnNlYXJjaF9jb2x1bW4zXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbn0pO1xyXG5cclxuJChcIi5zZWFyY2hfY29sdW1uNlwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdGFibGUuY29sdW1ucyg2KS5zZWFyY2godGhpcy52YWx1ZSkuZHJhdygpO1xyXG59KTtcclxuXHJcbiQoXCIucmVtb3ZlLWZpbHRlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLmFjdGlvbl9oZWFkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICBjb25zb2xlLmxvZygkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGgpO1xyXG4gICQoXCIuYWN0aW9uICwuYWN0aW9uX2hlYWRcIikucHJvcChcImNoZWNrZWRcIiwgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcbiAgJChcIi5saXN0X2FjdGlvbnNfYmxvY1wiKS50b2dnbGUoJChcIi5hY3Rpb25cIikuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IDEpO1xyXG59KTtcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmxpc3RfYWN0aW9uc19ibG9jXCIpLnRvZ2dsZSgkKFwiLmFjdGlvblwiKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPj0gMSk7XHJcbn0pO1xyXG5cclxuJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiwgXCIubGlzdF9hY3Rpb25zXCIsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgX2FjdGlvbiA9IFtdO1xyXG4gICQuZWFjaCgkKFwiaW5wdXRbbmFtZT1fYWN0aW9uXTpjaGVja2VkXCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfYWN0aW9uLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgfSk7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lZGV0X2RlbGV0ZV9saXN0XCIpLFxyXG4gICAgZGF0YTogeyBfYWN0aW9uIH0sXHJcbiAgICAvLyAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgLy8kKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoXCIubmV3XCIpLm9mZnNldCgpLnRvcH0sIDUwMCk7XHJcbiAgICAgIC8vICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgLy8gICAgICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgJChcIi5cIiArIHNlbGVjdG9yICsgXCIgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcigoXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgLy8gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAvLyAgICAgICAgICAgICAgICAvLyAkKCcubWVzc2FnZS1zdWNjZXNzJykuaHRtbChcIjxkaXYgY2xhc3M9J2FsZXJ0IGFsZXJ0LXdhcm5pbmcnPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nYWxlcnQnIGFyaWEtaGlkZGVuPSd0cnVlJz7DlzwvYnV0dG9uPjxzdHJvbmc+XCIgKyByZXN1bHQubWVzc2FnZS50aXRsZSArIFwiPC9zdHJvbmc+IFwiICsgcmVzdWx0Lm1lc3NhZ2UudGV4dCArIFwiPC9zdHJvbmc+LjwvZGl2PlwiKVxyXG4gICAgICAvLyAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgLy8gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgLy8gICAgICAgICAgICAgICAgJChcIi5mb3JtXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgdGJvZHlcIikuaGlkZSgpO1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAkKCcubmV3LWFydGljbGUtYnRuJykuc2hvdygpO1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHkgdHJcIikubm90KFwiOmxhc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgIC8vICAgICQoJy5tZXNzYWdlLXN1Y2Nlc3MnKS5odG1sKFwiPGRpdiBjbGFzcz0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdhbGVydCcgYXJpYS1oaWRkZW49J3RydWUnPsOXPC9idXR0b24+PHN0cm9uZz5cIiArIHJlc3VsdC5tZXNzYWdlLnRpdGxlICsgXCI8L3N0cm9uZz4gXCIgKyByZXN1bHQubWVzc2FnZS50ZXh0ICsgXCI8L3N0cm9uZz4uPC9kaXY+XCIpXHJcbiAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gIGFsZXJ0KFwiTXkgZmF2b3VyaXRlIHNwb3J0cyBhcmU6IFwiICsgZmF2b3JpdGUuam9pbihcIiwgXCIpKTtcclxufSk7XHJcblxyXG4kKFwiLnNlbGVjdDJfZGVtb18zXCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIkFjdGlvblwiLFxyXG4gIGFsbG93Q2xlYXI6IHRydWUsXHJcbn0pO1xyXG5cclxuJChcIi5saXN0X2FjdGlvbnNcIikuY2hhbmdlKGZ1bmN0aW9uIChlKSB7fSk7XHJcblxyXG4kKFwiLm5ldyAsIC5lZGl0XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmNvbXB0ZU1hc3NlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICAvLyBTaW11bGF0ZSBmb3JtIGRhdGEsIGJ1dCBvbmx5IGluY2x1ZGUgdGhlIHNlbGVjdGVkIHNwb3J0IHZhbHVlLlxyXG4gIHZhciBkYXRhID0ge307XHJcbiAgZGF0YVskKHRoaXMpLmF0dHIoXCJuYW1lXCIpXSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIC8vY29uc29sZS5sb2coJGZvcm0uYXR0cihcIm1ldGhvZFwiKSk7XHJcbiAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiAkZm9ybS5hdHRyKFwiYWN0aW9uXCIpLFxyXG4gICAgdHlwZTogJGZvcm0uYXR0cihcIm1ldGhvZFwiKSxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgJChcIi5jb21wdGVSdWJyaXF1ZVwiKS5yZXBsYWNlV2l0aCgkKGh0bWwpLmZpbmQoXCIuY29tcHRlUnVicmlxdWVcIikpO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5jb21wdGVSdWJyaXF1ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICB2YXIgZGF0YSA9IHt9O1xyXG4gIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gIGRhdGFbJChcIi5jb21wdGVNYXNzZVwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLmNvbXB0ZU1hc3NlXCIpLnZhbCgpO1xyXG4gIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICQoXCIuY29tcHRlUG9zdGVcIikucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKFwiLmNvbXB0ZVBvc3RlXCIpKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIi5uZXcgLCAuZWRpdFwiKS5vbihcImNoYW5nZVwiLCBcIi5jb21wdGVQb3N0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKTtcclxuICB2YXIgZGF0YSA9IHt9O1xyXG4gIGRhdGFbJCh0aGlzKS5hdHRyKFwibmFtZVwiKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gIGRhdGFbJChcIi5jb21wdGVNYXNzZVwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLmNvbXB0ZU1hc3NlXCIpLnZhbCgpO1xyXG4gIGRhdGFbJChcIi5jb21wdGVSdWJyaXF1ZVwiKS5hdHRyKFwibmFtZVwiKV0gPSAkKFwiLmNvbXB0ZVJ1YnJpcXVlXCIpLnZhbCgpO1xyXG4gIC8vIFN1Ym1pdCBkYXRhIHZpYSBBSkFYIHRvIHRoZSBmb3JtJ3MgYWN0aW9uIHBhdGguXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgIHR5cGU6ICRmb3JtLmF0dHIoXCJtZXRob2RcIiksXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICQoXCIuY29tcHRlXCIpLnJlcGxhY2VXaXRoKCQoaHRtbCkuZmluZChcIi5jb21wdGVcIikpO1xyXG4gICAgfSxcclxuICB9KTtcclxufSk7XHJcblxyXG52YXIgYXJyYXlfZGV0YWlsID0gW107XHJcbiQoXCIubmV3XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIilbMF07XHJcbiAgY29uc29sZS5sb2coc2VsZWN0b3IpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9uZXdcIiksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgJChcIi5cIiArIHNlbGVjdG9yICsgXCIgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICB2YWwudGl0bGUgK1xyXG4gICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAkKFwiLmRldGFpbF9mb3JtXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiLmFydGljbGVcIikuZm9jdXMoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGxldCBsaW5lTm8gPSAxO1xyXG4gICAgICAgIGFycmF5X2RldGFpbC5wdXNoKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuZW1wdHkoKTtcclxuICAgICAgICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgICAgICAgIHZhciBteV9yb3cgPVxyXG4gICAgICAgICAgICBcIiA8dHI+PHRkPlwiICtcclxuICAgICAgICAgICAgKGkgKyAxKSArXHJcbiAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICB2YWx1ZS5hcnRpY2xlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnF1YW50aXRlICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh1bml0YWlyZSArXHJcbiAgICAgICAgICAgIFwiPC90ZD4gPHRkPlwiICtcclxuICAgICAgICAgICAgdmFsdWUudHZhICtcclxuICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgIHZhbHVlLnByaXh0dGMgK1xyXG4gICAgICAgICAgICBcIjwvdGQ+PHRkPjxhIGNsYXNzPSdkZWxldGVfZWxlbWVudCcgaWQ9XCIgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgXCI+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoIHRleHQtbmF2eSc+PC9pPjwvYT48L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuYXBwZW5kKG15X3Jvdyk7XHJcbiAgICAgICAgICBsaW5lTm8rKztcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9kZXRhaWxcIikudmFsKEpTT04uc3RyaW5naWZ5KGFycmF5X2RldGFpbCkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLm5ld1wiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZV9lbGVtZW50XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKFwiaWRcIikpO1xyXG4gIGFycmF5X2RldGFpbC5zcGxpY2UoJCh0aGlzKS5hdHRyKFwiaWRcIiksIDEpO1xyXG4gIGNvbnNvbGUubG9nKGFycmF5X2RldGFpbCk7XHJcbiAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLnJlbW92ZSgpO1xyXG4gICQuZWFjaChhcnJheV9kZXRhaWwsIGZ1bmN0aW9uIChpLCB2YWx1ZSkge1xyXG4gICAgdmFyIG15X3JvdyA9XHJcbiAgICAgIFwiIDx0cj48dGQ+XCIgK1xyXG4gICAgICAoaSArIDEpICtcclxuICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgIHZhbHVlLmFydGljbGUgK1xyXG4gICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgdmFsdWUucXVhbnRpdGUgK1xyXG4gICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgdmFsdWUucHJpeHVuaXRhaXJlICtcclxuICAgICAgXCI8L3RkPiA8dGQ+XCIgK1xyXG4gICAgICB2YWx1ZS50dmEgK1xyXG4gICAgICBcIjwvdGQ+PHRkPlwiICtcclxuICAgICAgdmFsdWUucHJpeHR0YyArXHJcbiAgICAgIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2RlbGV0ZV9lbGVtZW50JyBpZD1cIiArXHJcbiAgICAgIGkgK1xyXG4gICAgICBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1uYXZ5Jz48L2k+PC9hPjwvdGQ+PC90cj5cIjtcclxuICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPnRib2R5XCIpLmFwcGVuZChteV9yb3cpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqXHJcbiAqIEVkaXQgb3BlcmF0aW9uc1xyXG4gKlxyXG4gKi9cclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXNfZ3JvdXBlX3VwZGF0ZVwiLCB7IGlkOiBpZCB9KSxcclxuICAgIGRhdGE6IGR0YSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAkKFwiLmZvcm0gI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICB2YWwudGl0bGUgK1xyXG4gICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtX2RlbGV0ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gIHZhciB0b2tlbiA9IGR0YS5nZXQoXCJfdG9rZW5cIik7XHJcbiAgLy8gICAgdmFyIGlkID0gJChcImlucHV0W25hbWU9X2lkXVwiKS52YWwoKTtcclxuICAvLyAgICB2YXIgdG9rZW4gPSAkKFwiaW5wdXRbbmFtZT1fdG9rZW5dXCIpLnZhbCgpO1xyXG5cclxuICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgc3dhbChcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk91aSwgc3VwcHJpbWVyIVwiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCBBbm51bGVyIVwiLFxyXG4gICAgICBjbG9zZU9uQ29uZmlybTogdHJ1ZSxcclxuICAgICAgY2xvc2VPbkNhbmNlbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbiAoaXNDb25maXJtKSB7XHJcbiAgICAgIGlmIChpc0NvbmZpcm0pIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVzX2dyb3VwZV9kZWxldGVcIiwgeyBpZDogaWQsIHRva2VuOiB0b2tlbiB9KSxcclxuICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBzZWxlY3Rvci5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgLy8gc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2Uuc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0LmRhdGEgPSBcImVycm9yXCIpKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UuZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqXHJcbiAqIGFmZmljaGVyIGxhIGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uICBkJ3VuIG5vdXZlYXUgYXJ0aWNsZVxyXG4gKlxyXG4gKi9cclxuXHJcbiQoXCIuZWRpdFwiKS5vbihcInN1Ym1pdFwiLCBcIi5kZXRhaWxfZWRpdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfZWRpdF9kZXRhaWxcIiwgeyBpZDogaWQgfSksXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIHZhciBzbGggPSBzZWxlY3RvclxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgLmFwcGVuZChcIjx0ZCBjb2xzcGFuPSc3Jz5cIiArIHJlc3VsdCArIFwiPC90ZD5cIik7XHJcbiAgICAgIC8vIHNsaC5hcHBlbmQocmVzdWx0KVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqXHJcbiAqIEVucmVnaXN0cmVyICBsYSBmb3JtdWxhaXJlIGRlIG1vZGlmaWNhdGlvbiAgZCdhcnRpY2xlXHJcbiAqXHJcbiAqL1xyXG5cclxuJChcIi5lZGl0XCIpLm9uKFwic3VibWl0XCIsIFwiLmRldGFpbF9mb3JtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl91cGRhdGVfZGV0YWlsXCIsIHsgaWQ6IGlkIH0pLFxyXG4gICAgZGF0YTogZHRhLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgJChcIi5kZXRhaWxfZm9ybSAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKFxyXG4gICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbC50aXRsZSArXHJcbiAgICAgICAgICAgICAgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vKmFmZmljaGVyIGxhIGZvcm11bGFpcmUgZCdham91dCBkJ3VuIG5vdXZlYXUgYXJ0aWNsZSAqL1xyXG5cclxuLy8kKCcuZWRpdC1uZXctYXJ0aWNsZS1idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAkKCcuZWRpdC1uZXctYXJ0aWNsZScpLnNob3coKTtcclxuLy8gICAgJCh0aGlzKS5oaWRlKCk7XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy99KTtcclxuXHJcbiQoXCIubmV3LWFydGljbGUtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIi5lZGl0LW5ldy1hcnRpY2xlXCIpLnNob3coKTtcclxuICAkKHRoaXMpLmhpZGUoKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLypBam91dGVyIHVuIG5vdXZlYXUgYXJ0aWNsZSBkYW5zIGxhIHBhZ2UgZGUgbW9kaWZpY2F0aW9uICovXHJcblxyXG4kKFwiLmVkaXRcIikub24oXCJzdWJtaXRcIiwgXCIuZGV0YWlsX2Zvcm1fYWRkX2FydGljbGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRfY2FiXCIpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9pbnNlcnRcIiwgeyBpZDogaWQgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgJChcIi5lcnJvcnMtbGlzdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAkKFwiLmRldGFpbF9mb3JtX2VkaXQgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICtcclxuICAgICAgICAgICAgICB2YWwudGl0bGUgK1xyXG4gICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuc2hvdy1tZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5hY3Rpb25zXCIpLm9uKFwiY2xpY2tcIiwgXCIuY2xvc2UtbWVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvLyQoJy5jbG9zZS1tZScpLmNsaWNrKGZ1bmN0aW9uIChlKXtcclxuICAkKFwiLmFjdGlvbnNcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuc3RhdHV0X2FjdGlvblwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gIGlmIChpZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9zdGF0dXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAkKFwiLmFjdGlvbnNcIikuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICQoXCIuYWN0aW9uc1wiKS50b2dnbGVDbGFzcyhcInNpZGViYXItb3BlblwiKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI3Nob3dfYWN0aW9uXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcblxyXG4gIGlmIChpZCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FjaGF0ZGVtYW5kZWludGVybmVjYWJfc2hvd1wiLCB7IGlkOiBpZCB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiI2VkaXRfYWN0aW9uXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcblxyXG4gIGlmIChpZCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1c19ncm91cGVfZWRpdFwiLCB7IGlkOiBpZCB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLmFjdGlvbnNcIikub24oXCJzdWJtaXRcIiwgXCIuZm9ybV9zdGF0dXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBpZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gIGlmIChpZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInRfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9zdGF0dXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2codGV4dFN0YXR1cyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvclRocm93bik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uTmFtZVsxXSk7XHJcbiAgICAgICAgICAgICQoXCIuZm9ybV9zdGF0dXQgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcihcclxuICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgdmFsLnRpdGxlICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj48L3NwYW4+XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLW9wZW5cIik7XHJcbiAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLFxyXG4gICAgICBcIndhcm5pbmdcIixcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5fdF9hZmZhaXJlX3F1aWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hZmZhaXJlX25ld19xdWlja1wiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5hY3Rpb25zXCIpLmh0bWwocmVzdWx0KTtcclxuICAgICAgJChcIi5hY3Rpb25zXCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJzdWJtaXRcIiwgXCIuZm9ybV90X2FmZmFpcmVfcXVpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ0X2FmZmFpcmVfbmV3X3F1aWNrX2luc2VydFwiKSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAkKFwiLmVycm9ycy1saXN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgdmFyIGNvbHVtbiA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAkKFwiLlwiICsgc2VsZWN0b3IgKyBcIiAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKFxyXG4gICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICAgIHZhbC50aXRsZSArXHJcbiAgICAgICAgICAgICAgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKFwic2lkZWJhci1vcGVuXCIpO1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX25ld1wiKSxcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICQoXCIuYWZmYWlyZVwiKS5yZXBsYWNlV2l0aCgkKGh0bWwpLmZpbmQoXCIuYWZmYWlyZVwiKSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKFwiLl9wZXJtaXNzaW9uXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGdyb3VwZV9pZCA9IHRhYmxlLnJvdyhcIi5zZWxlY3RlZFwiKS5pZCgpO1xyXG4gIGlmIChncm91cGVfaWQpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXNfZ3JvdXBlX21vZHVsZXNcIiwgeyBncm91cGVfaWQ6IGdyb3VwZV9pZCB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uIFwiLFxyXG4gICAgICBcIndhcm5pbmdcIixcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJChcIi5fdXRpbGlzYXRldXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyB2YXIgZ3JvdXBlX2lkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gIHZhciBncm91cGVfaWQgPSAkKFwiI3Rlc3RcIikuZGF0YShcImdyb3VwZUlkXCIpO1xyXG4gIC8vICBhbGVydChncm91cGVfaWQpO1xyXG4gIGlmIChncm91cGVfaWQpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwidXNfZ3JvdXBlX3V0aWxpc2F0ZXVyc1wiLCB7XHJcbiAgICAgIGdyb3VwZV9pZDogZ3JvdXBlX2lkLFxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvbiBcIixcclxuICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuX3VzZXJzX2dyb3VwZVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktYnV0dG9uXCIpKTtcclxuICAvLyAgICAvLyBTdGFydCBsb2FkaW5nXHJcbiAgbC5zdGFydCgpO1xyXG4gIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcclxuICBjb25zb2xlLmxvZyhzZWxlY3Rvcik7XHJcblxyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVzX2dyb3VwZV91dGlsaXNhdGV1cnNcIiwge1xyXG4gICAgICBncm91cGVfaWQ6IGR0YS5nZXQoXCJmb3JtW19ncm91cGVdXCIpLFxyXG4gICAgfSksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIC8vIGwuc3RvcCgpO1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICQoXCIuXCIgKyBzZWxlY3RvciArIFwiICNmb3JtX3VzZXJcIikuYWZ0ZXIoXHJcbiAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgK1xyXG4gICAgICAgICAgICByZXN1bHQubWVzc2FnZS50ZXh0ICtcclxuICAgICAgICAgICAgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoXCIuX3VzZXJfZ3JvdXBlX2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuXHJcbiAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAuZmlyZSh7XHJcbiAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgdGV4dDogXCJWb3VsZXotdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IHV0aWxpc2F0ZXVyIGRlIGNlIGdyb3VwZSA/XCIsXHJcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1c19ncm91cGVfZGVsZXRlX3VzZXJfZnJvbV9ncm91cGVcIiwge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCxcclxuICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSxcclxuICAgICAgICAgICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG52YXIgcGVybWlzc2lvbnMgPSAkKFwiLnBlcm1pc3Npb25zXCIpLnNlbGVjdDIoe1xyXG4gIHBsYWNlaG9sZGVyOiBcIlBlcm1pc3Npb25zXCIsXHJcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcclxufSk7XHJcblxyXG4kKFwiLlRvb2dsZVwiKS5ib290c3RyYXBUb2dnbGUoKTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICQoXCIuc2VsZWN0X2FsbF9wZXJtaXNzaW9uc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKFwiaWRcIikpO1xyXG4gICAgdmFyIHNvdXNNb2R1bGVTZWxlY3RlZCA9IFwiLlRvb2dsZVNvdXNNb2R1bGVTZWxlY3RfXCIgKyAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgIC8vICAgICAgICAkKCcuVG9vZ2xlU291c01vZHVsZScpLnJlbW92ZUNsYXNzKCdUb29nbGVTb3VzTW9kdWxlJyk7XHJcbiAgICAvLyAgICAgICAgdmFyIG1vZHVsZV9pZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIGlmICgkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgIC8vICAgICAgICAgICAkKFwiLnNlbGVjdGVkID4gb3B0aW9uXCIpLnByb3AoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7XHJcbiAgICAgIC8vICAgICAgICAgICAgJChcIi5zZWxlY3RlZFwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG5cclxuICAgICAgdmFyIG9wdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgJChzb3VzTW9kdWxlU2VsZWN0ZWQgKyBcIiBvcHRpb25cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb3B0aW9uVmFsdWVzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChzb3VzTW9kdWxlU2VsZWN0ZWQpLnZhbChvcHRpb25WYWx1ZXMpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHNvdXNNb2R1bGVTZWxlY3RlZCkudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuVG9vZ2xlTW9kdWxlXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLlRvb2dsZVNvdXNNb2R1bGVcIikucmVtb3ZlQ2xhc3MoXCJUb29nbGVTb3VzTW9kdWxlXCIpO1xyXG4gICAgdmFyIG1vZHVsZV9pZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgaWYgKCQodGhpcykucHJvcChcImNoZWNrZWRcIikpIHtcclxuICAgICAgLy8gICAgICAgICAgICAkKCcuVG9vZ2xlU291c01vZHVsZV8nICsgbW9kdWxlX2lkKS5ub3QoJCh0aGlzKSkuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWwpIHtcclxuICAgICAgLy8gICAgICAgICAgICAgICAgJCh2YWwpLmJvb3RzdHJhcFRvZ2dsZSgnb24nKTtcclxuICAgICAgLy8gICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuVG9vZ2xlU291c01vZHVsZV9cIiArIG1vZHVsZV9pZClcclxuICAgICAgICAubm90KCQodGhpcykpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGtleSwgdmFsKSB7XHJcbiAgICAgICAgICAkKHZhbCkuYm9vdHN0cmFwVG9nZ2xlKFwib2ZmXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiLlRvb2dsZVNvdXNNb2R1bGVcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzdHIgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgIHZhciByZXMgPSBzdHIuc3BsaXQoXCJfXCIpO1xyXG4gICAgdmFyIG1vZHVsZSA9IHJlc1swXTtcclxuICAgIHZhciBzb3VzTW9kdWxlID0gcmVzWzFdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaWNpXCIpO1xyXG4gICAgaWYgKCQodGhpcykucHJvcChcImNoZWNrZWRcIikgPT0gdHJ1ZSkge1xyXG4gICAgICAkKFwiLlRvb2dsZVNvdXNNb2R1bGVTZWxlY3RfXCIgKyBzb3VzTW9kdWxlKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5Ub29nbGVTb3VzTW9kdWxlU2VsZWN0X1wiICsgc291c01vZHVsZSkucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIuZm9ybS1wZXJtaXNzaW9uXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG4gIC8vJCgnLm5ldycpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIC8vICAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzBdO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1c19ncm91cGVfcGVybWlzc2lvbl9pbnNlcnRcIiksXHJcbiAgICBkYXRhOiBkdGEsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIC8vJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKFwiLm5ld1wiKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgICBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnLnVzZ3JvdXBlc2VsZWN0MicpLm9uKCdzZWxlY3QyOnNlbGVjdGluZycsIGZ1bmN0aW9uKGUpIHtcclxuICBjb25zb2xlLmxvZygnU2VsZWN0aW5nOiAnICwgZS5wYXJhbXMuYXJncy5kYXRhKTtcclxuICAkKCcjZXh0ZXJuYWwtZXZlbnRzJykuaHRtbCgnPGRpdiBjbGFzcz1cInVzaW5nX2pzb24gbS1sLTE1XCI+PC9kaXY+Jyk7XHJcbiAgaWYoIGUucGFyYW1zLmFyZ3MuZGF0YS5pZCA9PSAnJyl7XHJcbiAgICAkKCcubWVzc2FnZTInKS5zaG93KCk7XHJcbiAgfVxyXG4gZWxzZXtcclxuICAkKCcubWVzc2FnZTInKS5oaWRlKCk7XHJcbiAgJChcIi51c2luZ19qc29uXCIpXHJcbiAgLmpzdHJlZSh7XHJcbiAgICBjb3JlOiB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJ1c19ncm91cGVfcGVybWlzc2lvbl9tb2R1bGVzX2dyb3VwZVwiLCB7XHJcbiAgICAgICAgICBncm91cGU6ICQoXCIjX2lkXCIpLnZhbCgpLFxyXG4gICAgICAgICAgZG9zc2llcjplLnBhcmFtcy5hcmdzLmRhdGEuaWRcclxuICAgICAgICB9KSxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoZWNrX2NhbGxiYWNrOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHR5cGVzOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBpY29uOiBcImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLWNsb3NlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoaWxkOiB7XHJcbiAgICAgICAgaWNvbjogXCJnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1vcGVuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHQ6IHt9LFxyXG4gICAgfSxcclxuICAgIGNoZWNrYm94OiB7XHJcbiAgICAgIGtlZXBfc2VsZWN0ZWRfc3R5bGU6IHRydWUsXHJcbiAgICAgIHdob2xlX25vZGU6IHRydWUsIC8vIHRvIGF2b2lkIGNoZWNraW5nIHRoZSBib3gganVzdCBjbGlja2luZyB0aGUgbm9kZVxyXG4gICAgICB0aWVfc2VsZWN0aW9uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXCJzZWFyY2hcIiwgXCJ0aGVtZXNcIiwgXCJ0eXBlc1wiLCBcImNoZWNrYm94XCJdLFxyXG4gIH0pXHJcbiAgLmJpbmQoXCJsb2FkZWQuanN0cmVlXCIsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xyXG4gICAgdmFyIGFyciA9IFtdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhLmluc3RhbmNlLmdldF9jaGVja2VkKCkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvL2NvbnNvbGUubG9nKCQoXCIjdXNpbmdfanNvblwiKS5qc3RyZWUodHJ1ZSkuZ2V0X3NlbGVjdGVkKCkpXHJcbiAgICAkLmVhY2goJChcIi51c2luZ19qc29uXCIpLmpzdHJlZShcImdldF9jaGVja2VkXCIsIHRydWUpLCBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAvL2FycltdXHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuICAgICAgaWYgKHRoaXMuaWQuaW5kZXhPZihcIm9wZV9MaW5rX1wiKSA+PSAwKSB7XHJcbiAgICAgICAgYXJyW2ldID0gdGhpcy5saV9hdHRyO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWxsID0gYXJyO1xyXG4gICAgLyogdmFyIHJlc3VsdCA9ICQodGhpcykuanN0cmVlKFwiZ2V0X3NlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZygkKFwiI3VzaW5nX2pzb25cIikuanN0cmVlKFwiZ2V0X3NlbGVjdGVkXCIpLnRleHQoKSlcclxuICAgIHdpbmRvdy5hbGwgPSByZXN1bHRcclxuICAgICAgLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBub2RlLnN0YXRlLmRpc2FibGVkID09IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKChjaGVja2VkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNrZWQuaWQuaW5kZXhPZihcIm9wZV9MaW5rX1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gY2hlY2tlZC5saV9hdHRyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7Ki9cclxuICAgIGNvbnNvbGUubG9nKGFycik7XHJcbiAgfSlcclxuICAub24oXCJzZWxlY3Rfbm9kZS5qc3RyZWVcIiwgZnVuY3Rpb24gKGUsIGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy9vcGVfTGlua19cclxuICAgIHZhciBzdHIgPSBkYXRhLm5vZGUuaWQ7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBpZiAoZGF0YS5ub2RlLmlkLmluZGV4T2YoXCJvcGVfTGlua19cIikgPj0gMCkge1xyXG4gICAgICAvLydzb3VzTW9kdWxlJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLXNvdXMtbW9kdWxlJyksJ21vZHVsZSc6ICQoJyMnK3N0cikuYXR0cignZGF0YS1tb2R1bGUnKSwnb3BlcmF0aW9uJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLW9wZXJhdGlvbicpLCdkb3NzaWVyJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLWRvc3NpZXInKSxcclxuICAgIH1cclxuICB9KTtcclxuIH1cclxuXHJcbiBcclxuXHJcbn0pO1xyXG5cclxudmFyIGFycnkgPSBbXTtcclxudmFyIGkgPSAwO1xyXG5cclxuXHJcbi8qIC5vbihcInVuY2hlY2tfbm9kZS5qc3RyZWVcIiwgZnVuY3Rpb24gKGUsIGRhdGEpIHtcclxuICAgIC8qYWxlcnQoZGF0YS5ub2RlLmlkICsgJyAnICsgZGF0YS5ub2RlLnRleHQgK1xyXG4gICAgICAgIChkYXRhLm5vZGUuc3RhdGUuY2hlY2tlZCA/ICcgQ0hFQ0tFRCc6ICcgTk9UIENIRUNLRUQnKSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEubm9kZSk7XHJcbiAgICBhbGVydChcclxuICAgICAgZGF0YS5ub2RlLmlkICtcclxuICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgZGF0YS5ub2RlLnRleHQgK1xyXG4gICAgICAgIChkYXRhLm5vZGUuc3RhdGUuY2hlY2tlZCA/IFwiIENIRUNLRURcIiA6IFwiIE5PVCBDSEVDS0VEXCIpXHJcbiAgICApO1xyXG4gICAgJC5tYXAoZGF0YS5ub2RlLmNoaWxkcmVuX2QsIGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgICBpZiAoaS5pbmRleE9mKFwib3BlX0xpbmtfXCIpID09IDApIHtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGF0YS5ub2RlLmlkLmluZGV4T2YoXCJvcGVfTGlua19cIikgPj0gMCkge1xyXG4gICAgICAvLydzb3VzTW9kdWxlJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLXNvdXMtbW9kdWxlJyksJ21vZHVsZSc6ICQoJyMnK3N0cikuYXR0cignZGF0YS1tb2R1bGUnKSwnb3BlcmF0aW9uJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLW9wZXJhdGlvbicpLCdkb3NzaWVyJzogJCgnIycrc3RyKS5hdHRyKCdkYXRhLWRvc3NpZXInKSxcclxuICAgICAgYWxlcnQoXHJcbiAgICAgICAgZGF0YS5ub2RlLmlkICtcclxuICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgIGRhdGEubm9kZS50ZXh0ICtcclxuICAgICAgICAgIChkYXRhLm5vZGUuc3RhdGUuY2hlY2tlZCA/IFwiIENIRUNLRURcIiA6IFwiIE5PVCBDSEVDS0VEXCIpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7Ki9cclxuXHJcbiQoXCIjbmV3X2dyb3VwZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1idXR0b25cIikpO1xyXG4gIHZhciBjaGVja2VkTm9kZXMgPSBbXTtcclxuICAkLmVhY2goJChcIi51c2luZ19qc29uXCIpLmpzdHJlZShcImdldF9jaGVja2VkXCIsIHRydWUpLCBmdW5jdGlvbiAoaSkge1xyXG4gICAgaWYgKHRoaXMuaWQgIT0gXCJcIiB8fCB0aGlzLmlkICE9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMuaWQuaW5kZXhPZihcIm9wZV9MaW5rX1wiKSA+PSAwKSB7XHJcbiAgICAgICAgY2hlY2tlZE5vZGVzW2ldID0gdGhpcy5saV9hdHRyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgLmZpcmUoe1xyXG4gICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgYWpvdXRlciBjZXMgcGVybWlzc2lvbnMgP1wiLFxyXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtcGx1cyc+PC9pPiBFbnJlZ2lzdHJlciFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgbC5zdGFydCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcInVzX2dyb3VwZV9wZXJtaXNzaW9uX29wZXJhdGlvbnNcIiwge1xyXG4gICAgICAgICAgICBncm91cGU6ICQoXCIjX2lkXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICB0b2tlbjogJChcIiNfaWRcIikuYXR0cihcImRhdGEtdG9rZW5cIiksXHJcbiAgICAgICAgICAgIGRvc3NpZXI6JCgnLnVzZ3JvdXBlc2VsZWN0MicpLnZhbCgpXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGRhdGE6IHsgZGF0YTogY2hlY2tlZE5vZGVzLCBhbGw6IHdpbmRvdy5hbGwgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIC8vIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgLy8gICBhbGVydCgpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5hbGwgPSBjaGVja2VkTm9kZXM7XHJcbiAgICAgICAgICAgICAgY2hlY2tlZE5vZGVzID0gbnVsbDtcclxuICAgICAgICAgICAgICAvLyBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInVzX2dyb3VwZV9wZXJtaXNzaW9uX21vZHVsZXNfbGlzdFwiLHtcclxuICAgICAgICAgICAgICAgIGdyb3VwOiAkKFwiI19pZFwiKS52YWwoKVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgIC8vJChcIi51c2luZ19qc29uXCIpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgLy90YWJsZTIuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxudmFyIHRhYmxlMiA9ICQoXCIjZ3JpZDJcIikuRGF0YVRhYmxlKHtcclxuICBwYWdpbmc6IHRydWUsXHJcbiAgXCJvcmRlclwiOiBbXSxcclxuICBsYW5ndWFnZToge1xyXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZGF0YXRhYmxlc19sYW5ndWVcIiksXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuJChcIi51c2luZ19qc29uMlwiKVxyXG4gIC5qc3RyZWUoe1xyXG4gICAgY29yZToge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwidXNfZ3JvdXBlX3Blcm1pc3Npb25fbW9kdWxlc19ncm91cGVfb3BlcmF0aW9uXCIsIHtcclxuICAgICAgICAgIGdyb3VwZTogJChcIiNfaWRcIikudmFsKCksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvL2NoZWNrX2NhbGxiYWNrOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHR5cGVzOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBpY29uOiBcImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLWNsb3NlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoaWxkOiB7XHJcbiAgICAgICAgaWNvbjogXCJnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1vcGVuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHQ6IHt9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcInNlYXJjaFwiLCBcInRoZW1lc1wiLCBcInR5cGVzXCJdLFxyXG4gIH0pXHJcblxyXG4vKlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTsqL1xyXG5cclxuICAgICQoJyNfZGVsZXRlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIGlkID0gJChcIiN0ZXN0XCIpLmRhdGEoXCJncm91cGVJZFwiKTtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNfZ3JvdXBlX2RlbGV0ZScsIHsgJ2lkJzogaWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFsZXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCd1c19ncm91cGVfaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgICQoJyN1c2luZ19qc29uJylcclxuICAgIC5qc3RyZWUoe1xyXG4gICAgICAgIGNvcmU6IHtcclxuICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgndXNfZ3JvdXBlX3Blcm1pc3Npb25fbW9kdWxlc19ncm91cGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgIGdyb3VwZTogJChcIiNfaWRcIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIFwiZGF0YVR5cGVcIjogXCJqc29uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZXM6IHtcclxuICAgICAgICAgICAgXCJyb290XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLWNsb3NlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjaGlsZFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogXCJnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1vcGVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgLyogXCJjaGVja2JveFwiOiB7XHJcbiAgICAgICAgICAgIFwia2VlcF9zZWxlY3RlZF9zdHlsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICB3aG9sZV9ub2RlOiB0cnVlLCAvLyB0byBhdm9pZCBjaGVja2luZyB0aGUgYm94IGp1c3QgY2xpY2tpbmcgdGhlIG5vZGUgXHJcbiAgICAgICAgICAgIHRpZV9zZWxlY3Rpb246IHRydWVcclxuICAgICAgICB9LCovXHJcbiAgICAgICAgcGx1Z2luczogW1wic2VhcmNoXCIsIFwidGhlbWVzXCIsIFwidHlwZXNcIiBdXHJcbiAgICB9KS5vbihcInNlbGVjdF9ub2RlLmpzdHJlZVwiLCBmdW5jdGlvbiAoZSwgZGF0YSkge1xyXG5cclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAvL29wZV9MaW5rX1xyXG4gICAgICAgaWYgKGRhdGEubm9kZS5pZC5pbmRleE9mKFwib3BlX0xpbmtfXCIpID49IDApIHtcclxuICAgICAgICB2YXIgY2hlY2tCb3hlcyA9ICQoXCIjXCIrZGF0YS5ub2RlLmlkKS5maW5kKCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrQm94ZXMucHJvcChcImNoZWNrZWRcIiwgIWNoZWNrQm94ZXMucHJvcChcImNoZWNrZWRcIikpO1xyXG4gICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgJCgnLnVzaW5nX2pzb24zJylcclxuICAgIC5qc3RyZWUoe1xyXG4gICAgICAgIGNvcmU6IHtcclxuICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgndXNfZ3JvdXBlX3Blcm1pc3Npb25fbW9kdWxlc19ncm91cGVfbGlzdF93aXRoX2dyb3VwJywge1xyXG4gICAgICAgICAgICAgICAgICBncm91cGU6ICQoXCIjX2lkXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBcImRhdGFUeXBlXCI6IFwianNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGVzOiB7XHJcbiAgICAgICAgICAgIFwicm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogXCJnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1jbG9zZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY2hpbGRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mb2xkZXItb3BlblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgIC8qIFwiY2hlY2tib3hcIjoge1xyXG4gICAgICAgICAgICBcImtlZXBfc2VsZWN0ZWRfc3R5bGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgd2hvbGVfbm9kZTogdHJ1ZSwgLy8gdG8gYXZvaWQgY2hlY2tpbmcgdGhlIGJveCBqdXN0IGNsaWNraW5nIHRoZSBub2RlIFxyXG4gICAgICAgICAgICB0aWVfc2VsZWN0aW9uOiB0cnVlXHJcbiAgICAgICAgfSwqL1xyXG4gICAgICAgIHBsdWdpbnM6IFtcInNlYXJjaFwiLCBcInRoZW1lc1wiLCBcInR5cGVzXCIgXVxyXG4gICAgfSkub24oXCJzZWxlY3Rfbm9kZS5qc3RyZWVcIiwgZnVuY3Rpb24gKGUsIGRhdGEpIHtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgLy9vcGVfTGlua19cclxuICAgICAgIGlmIChkYXRhLm5vZGUuaWQuaW5kZXhPZihcIm9wZV9MaW5rX1wiKSA+PSAwKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrQm94ZXMgPSAkKFwiI1wiK2RhdGEubm9kZS5pZCkuZmluZCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja0JveGVzLnByb3AoXCJjaGVja2VkXCIsICFjaGVja0JveGVzLnByb3AoXCJjaGVja2VkXCIpKTtcclxuICAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=