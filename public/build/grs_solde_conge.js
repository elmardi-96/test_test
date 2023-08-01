(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grs_solde_conge"],{

/***/ "./assets/js/components/parametrage/grs_solde_conge.js":
/*!*************************************************************!*\
  !*** ./assets/js/components/parametrage/grs_solde_conge.js ***!
  \*************************************************************/
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
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7__);







var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.setRoutingData(routes);
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('grs_solde_conge_list') + location.search,
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 15, 25, 50, 100, 200, -1], [10, 15, 25, 50, 100, 200, "All"]],
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
    "width": "15%"
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table.on('init.dt', function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  //  console.log(api.data())

  console.log(st);
  if (st != null) {
    $.each(st.columns, function (key, value) {
      if (value.search.search != "") {
        $('.remove-filter').show();
        return false;
      }
    });

    /* recupérer les valeurs déja saisie dans le filtre */

    $(".search_column1").val(st.columns[1].search.search);
    $(".search_column2").val(st.columns[2].search.search);
    $(".search_column3 option[value='" + st.columns[3].search.search + "']").attr("selected", "selected");
    $(".search_column4").val(st.columns[4].search.search);
    $(".search_column5").val(st.columns[5].search.search);
    $(".search_column6").val(st.columns[6].search.search);
  }
});

/*column 1 de datatble search*/

var search_column1 = $('.search_column1').datepicker({
  todayBtn: "linked",
  keyboardNavigation: true,
  forceParse: false,
  calendarWeeks: true,
  autoclose: true,
  language: 'fr'
});
search_column1.on('changeDate', function (e) {
  table.columns(1).search(this.value).draw();
});
$('.search_column1_clear').click(function () {
  $('.search_column1').datepicker('setDate', null).datepicker('fill');
});
$('.search_column2').on('keyup', function () {
  table.columns(2).search(this.value).draw();
});
$('.search_column3').on('change', function () {
  table.columns(3).search(this.value).draw();
});
$('.search_column4').on('keyup', function () {
  table.columns(4).search(this.value).draw();
});
$('.search_column5').on('keyup', function () {
  table.columns(5).search(this.value).draw();
});
$('.search_column6').on('keyup', function () {
  table.columns(6).search(this.value).draw();
});

/* $('.search_column6').on('change', function () {
 table.columns(6).search(this.value).draw();
 }); */

$('.remove-filter').click(function (e) {
  table.state.clear();
  window.location.reload();
  e.preventDefault();
});
$('.action_head').click(function () {
  console.log($('.action').filter(':checked').length);
  $(".action ,.action_head").prop('checked', $(this).prop("checked"));
  $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});
$('body').on('click', '.action', function () {
  $('.list_actions_bloc').toggle($('.action').filter(':checked').length >= 1);
});
$(".select2_demo_3").select2({
  placeholder: "Action",
  allowClear: true
});
$('.list_actions').change(function (e) {});
$('.new , .edit').on('change', '.dossier', function (e) {
  var $form = $(this).closest('form');
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr('name')] = $(this).val();
  console.log(data);
  //alert($form.attr('action'));
  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: data,
    success: function success(html) {
      // console.log(html); 
      $('.compteMasse').replaceWith($(html).find('.compteMasse'));
    }
  });
  e.preventDefault();
});
$('.new , .edit').on('change', '.compteMasse', function (e) {
  var $form = $(this).closest('form');
  // Simulate form data, but only include the selected sport value.
  var data = {};
  data[$(this).attr('name')] = $(this).val();
  data[$('.dossier').attr('name')] = $('.dossier').val();
  console.log(data);
  //alert($form.attr('action'));
  console.log($form.attr('method'));
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: data,
    success: function success(html) {
      // console.log(html); 
      $('.compteRubrique').replaceWith($(html).find('.compteRubrique'));
    }
  });
  e.preventDefault();
});
$('.new , .edit').on('change', '.compteRubrique', function () {
  var $form = $(this).closest('form');
  var data = {};
  data[$('.dossier').attr('name')] = $('.dossier').val();
  data[$('.compteMasse').attr('name')] = $('.compteMasse').val();
  data[$(this).attr('name')] = $(this).val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: data,
    success: function success(html) {
      $('.comptePoste').replaceWith($(html).find('.comptePoste'));
    }
  });
});
$('.new , .edit').on('change', '.comptePoste', function () {
  var $form = $(this).closest('form');
  var data = {};
  data[$(this).attr('name')] = $(this).val();
  data[$('.compteMasse').attr('name')] = $('.compteMasse').val();
  data[$('.compteRubrique').attr('name')] = $('.compteRubrique').val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: data,
    success: function success(html) {
      console.log(html);
      $('.compte').replaceWith($(html).find('.compte'));
    }
  });
});
$('.new , .edit').on('change', '.compte', function () {
  var $form = $(this).closest('form');
  var data = {};
  data[$(this).attr('name')] = $(this).val();
  data[$('.compteMasse').attr('name')] = $('.compteMasse').val();
  data[$('.compteRubrique').attr('name')] = $('.compteRubrique').val();
  data[$('.comptePoste').attr('name')] = $('.comptePoste').val();
  // Submit data via AJAX to the form's action path.
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: data,
    success: function success(html) {
      console.log(html);
      $('.compte').replaceWith($(html).find('.compte'));
    }
  });
});
var array_detail = [];
$('.new').on('submit', '.detail_form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this).attr('class').split(' ')[0];
  console.log(selector);
  // alert()
  var exsit = 0;
  $.each(array_detail, function (i, value) {
    if ($('#t_achatdemandeinternedet_article').val() == value.article.id) {
      exsit = 1;
    }
  });
  if (exsit == 0) {
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('u_p_partenaire_new'),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result) {
        if (result.errors) {
          $('.errors-list').remove();
          jQuery.each(result.errors.violations, function (i, val) {
            var column = val.propertyPath;
            var columnName = column.split('.');
            console.log(".edit-new-article #" + form_name + "_" + columnName[1]);
            $(".edit-new-article #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
          });
        } else if (result.data) {
          $(".detail_form")[0].reset();
          $(".errors-list").remove();
          $('.article').focus();
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
            var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article.titre + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + tva + "</td><td>" + value.prixttc + "</td><td>" + observation + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
            $(".new .table-detail > tbody").append(my_row);
            lineNo++;
          });
          $("#t_achatdemandeinternecab_detail").val(JSON.stringify(array_detail));
        }
      }
    });
  } else {
    toastr.warning("Ce produit exsite déjà ", "Error! ", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('.new').on('click', '.delete_element', function (e) {
  console.log($(this).attr('id'));
  array_detail.splice($(this).attr('id'), 1);
  console.log(array_detail);
  $(".new .table-detail > tbody tr").remove();
  $.each(array_detail, function (i, value) {
    var my_row = " <tr><td>" + (i + 1) + "</td><td>" + value.article + "</td><td>" + value.quantite + "</td><td>" + value.prixunitaire + "</td> <td>" + value.tva + "</td><td>" + value.prixttc + "</td><td><a class='delete_element' id=" + i + "><i class='fa fa-trash text-navy'></i></a></td></tr>";
    $(".new .table-detail >tbody").append(my_row);
  });
});
$('.edit').on('submit', '.detail_form_delete', function (e) {
  var dta = new FormData(this);
  var selector = $(this);
  var id = dta.get('_id');
  var token = dta.get('_token');
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
        type: 'DELETE',
        url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternedet_delete', {
          'id': id,
          'token': token
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

$('.edit').on('submit', '.detail_edit', function (e) {
  var selector = $(this);
  var dta = new FormData(this);
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternecab_edit_detail', {
      'id': id
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

$('.edit').on('submit', '.detail_form', function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr('name');
  var id = dta.get('_id');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternecab_update_detail', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        $('.errors-list').remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split('.');
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

$('.new-article-btn').click(function (e) {
  $('.edit-new-article').show();
  $(this).hide();
  e.preventDefault();
});

/*Ajouter un nouveau article dans la page de modification */

$('.edit').on('submit', '.detail_form_add_article', function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr('name');
  var id = dta.get('_id_cab');
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternedet_insert', {
      'id': id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      console.log(result);
      if (result.errors) {
        $('.errors-list').remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split('.');
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
$('.show-me').click(function (e) {
  $(".actions").toggleClass('sidebar-open');
  e.preventDefault();
});
$('.actions').on('click', '.close-me', function (e) {
  //$('.close-me').click(function (e){ 
  $(".actions").removeClass('sidebar-open');
  e.preventDefault();
});

/*
 * 
 * afficher la formulaire de modification  d'un nouveau article 
 * 
 */

$('#grid tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    table.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
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
$('.actions').on('submit', '.form_statut', function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr('name');
  var id = table.row('.selected').id();
  if (id) {
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('grs_solde_conge_statut', {
        'id': id
      }),
      data: dta,
      processData: false,
      contentType: false,
      success: function success(result, textStatus, errorThrown) {
        //            console.log(result);
        //            console.log(textStatus);
        //            console.log(errorThrown);
        if (result.errors) {
          $('.errors-list').remove();
          jQuery.each(result.errors.violations, function (i, val) {
            var column = val.propertyPath;
            var columnName = column.split('.');
            // console.log(columnName[1]);
            $(".form_statut #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
          });
        } else if (result.code == 200) {
          table.ajax.reload();
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          $(".actions").empty().removeClass('sidebar-open');
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
$(document).on('click', '._t_affaire_quick', function (e) {
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_affaire_new_quick'),
    success: function success(result) {
      $('.actions').html(result);
      $(".actions").toggleClass('sidebar-open');
    }
  });
  e.preventDefault();
});
$(document).on('submit', '.form_t_affaire_quick', function (e) {
  var dta = new FormData(this);
  var form_name = $(this).attr('name');
  var selector = $(this).attr('class').split(' ')[0];
  $.ajax({
    type: 'POST',
    data: dta,
    processData: false,
    contentType: false,
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_affaire_new_quick_insert'),
    success: function success(result) {
      if (result.errors) {
        $('.errors-list').remove();
        jQuery.each(result.errors.violations, function (i, val) {
          var column = val.propertyPath;
          var columnName = column.split('.');
          $("." + selector + " #" + form_name + "_" + columnName[1]).after("<span class='errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
        });
      } else if (result.data) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        $(".actions").empty().removeClass('sidebar-open');
        var data = {};
        $.ajax({
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternecab_new'),
          type: "POST",
          data: data,
          success: function success(html) {
            $('.affaire').replaceWith($(html).find('.affaire'));
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
$('#_edit').click(function (e) {
  var id = table.row('.selected').id();
  // alert(id);
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('grs_solde_conge_edit', {
      'id': id
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
$('#_show').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('grs_solde_conge_show', {
      'id': id
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
$('#_imprimer').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('pdf_show', {
      'id': id
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
$('#_statut').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    $.ajax({
      type: 'POST',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('grs_solde_conge_statut', {
        'id': id
      }),
      success: function success(result) {
        $('.actions').html(result);
        $(".actions").toggleClass('sidebar-open');
      }
    });
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('#_archiver').click(function (e) {
  var id = table.row('.selected').id();
  if (id) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
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
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternecab_archive', {
            'id': id
          }),
          success: function success(result) {
            if (result.code == 200) {
              table.ajax.reload();
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });
              $(".actions").empty().removeClass('sidebar-open');
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
$('#_delete').click(function (e) {
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
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'DELETE',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('grs_solde_conge_delete', {
            'id': id
          }),
          success: function success(result) {
            console.log(result);
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
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$('body').on('change', '._multiple_actions', function () {
  var _array_ids = [];
  $.each($("input[name=_action]:checked"), function () {
    _array_ids.push($(this).val());
  });
  console.log($(this).val());
  if ($(this).val() == '_imprimer') {
    $.ajax({
      type: 'GET',
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternedet_multiple_pdfShow'),
      data: {
        _array_ids: _array_ids
      },
      success: function success(result) {
        //  window.open(result, '_blank');
        console.log(result);
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
    $('._multiple_actions').val('');
  }

  // $("body > ._multiple_actions option[value='']").attr('selected', 'selected'); 

  console.log($(this).val());
  if ($(this).val() == '_delete') {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
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
          type: 'DELETE',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternedet_multiple_delete'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            console.log(result);
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
        $('._multiple_actions').val('');
      }
    });
  }
  if ($(this).val() == '_archiver') {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
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
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_7___default.a.generate('t_achatdemandeinternedet_multiple_archiver'),
          data: {
            _array_ids: _array_ids
          },
          success: function success(result) {
            console.log(result);
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
        $('._multiple_actions').val('');
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


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

/***/ "./node_modules/core-js/internals/delete-property-or-throw.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/delete-property-or-throw.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ })

},[["./assets/js/components/parametrage/grs_solde_conge.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e",7]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJhbWV0cmFnZS9ncnNfc29sZGVfY29uZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWxldGUtcHJvcGVydHktb3ItdGhyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc3BsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJTd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwidHlwZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJyZWxvYWQiLCJmaXhlZEhlYWRlciIsIm9uIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlYWNoIiwiY29sdW1ucyIsImtleSIsInZhbHVlIiwic2hvdyIsInZhbCIsImF0dHIiLCJzZWFyY2hfY29sdW1uMSIsImRhdGVwaWNrZXIiLCJ0b2RheUJ0biIsImtleWJvYXJkTmF2aWdhdGlvbiIsImZvcmNlUGFyc2UiLCJjYWxlbmRhcldlZWtzIiwiYXV0b2Nsb3NlIiwibGFuZ3VhZ2UiLCJkcmF3IiwiY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlciIsImxlbmd0aCIsInByb3AiLCJ0b2dnbGUiLCJzZWxlY3QyIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwiY2hhbmdlIiwiJGZvcm0iLCJjbG9zZXN0Iiwic3VjY2VzcyIsImh0bWwiLCJyZXBsYWNlV2l0aCIsImZpbmQiLCJhcnJheV9kZXRhaWwiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwic3BsaXQiLCJleHNpdCIsImkiLCJhcnRpY2xlIiwiaWQiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwicmVzdWx0IiwiZXJyb3JzIiwicmVtb3ZlIiwialF1ZXJ5IiwidmlvbGF0aW9ucyIsImNvbHVtbiIsInByb3BlcnR5UGF0aCIsImNvbHVtbk5hbWUiLCJhZnRlciIsInRpdGxlIiwicmVzZXQiLCJmb2N1cyIsImxpbmVObyIsInB1c2giLCJlbXB0eSIsInR2YSIsIm9ic2VydmF0aW9uIiwibXlfcm93IiwidGl0cmUiLCJxdWFudGl0ZSIsInByaXh1bml0YWlyZSIsInByaXh0dGMiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidG9hc3RyIiwid2FybmluZyIsInRpbWVPdXQiLCJzcGxpY2UiLCJnZXQiLCJ0b2tlbiIsInN3YWwiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY2xvc2VPbkNvbmZpcm0iLCJjbG9zZU9uQ2FuY2VsIiwiaXNDb25maXJtIiwibWVzc2FnZSIsInBhcmVudCIsImhpZGUiLCJlcnJvciIsInNsaCIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwibWVtIiwieWVhcnNBZ28iLCJEYXRlIiwic2V0RnVsbFllYXIiLCJnZXRGdWxsWWVhciIsInJvdyIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImNvZGUiLCJqcVhIUiIsImRvY3VtZW50IiwiaHJlZiIsImZpcmUiLCJzaG93Q2xhc3MiLCJwb3B1cCIsInBvc2l0aW9uIiwic2hvd0Nsb3NlQnV0dG9uIiwidGhlbiIsInJlc3BvbnNlSlNPTiIsIl9hcnJheV9pZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFFN0dDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBRzlCLElBQU1JLElBQUksR0FBR0gsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1JLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFHRixJQUFJQyxLQUFL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O0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyx3QkFBd0IsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDbkUsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Imdyc19zb2xkZV9jb25nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcblxyXG52YXIgdGFibGUgPSAkKCcjZ3JpZCcpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdncnNfc29sZGVfY29uZ2VfbGlzdCcpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAsIC0xXSwgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG4gICAgXCJwYWdlTGVuZ3RoXCI6IDE1LFxyXG4gICAgXCJvcmRlclwiOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHtcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjMlXCIsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcInRhcmdldHNcIjogWzBdfSxcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwJVwifSxcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjEwJVwifSxcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjE1JVwifSxcclxuICAgICAgICB7XCJvcmRlcmFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjE1JVwifSxcclxuICAgIF0sXHJcbiAgICAvLyBkb206ICdsQmZydGlwJyxcclxuICAgIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnRhYmxlLm9uKCdpbml0LmR0JywgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgICB2YXIgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICB2YXIgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcblxyXG4gICAgdmFyIGRhdGEgPSBhcGkuZGF0YSgpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKGFwaS5kYXRhKCkpXHJcblxyXG4gICAgY29uc29sZS5sb2coc3QpO1xyXG4gICAgaWYgKHN0ICE9IG51bGwpIHtcclxuICAgICAgICAkLmVhY2goc3QuY29sdW1ucywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnNlYXJjaC5zZWFyY2ggIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgJCgnLnJlbW92ZS1maWx0ZXInKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvKiByZWN1cMOpcmVyIGxlcyB2YWxldXJzIGTDqWphIHNhaXNpZSBkYW5zIGxlIGZpbHRyZSAqL1xyXG5cclxuICAgICAgICAkKFwiLnNlYXJjaF9jb2x1bW4xXCIpLnZhbChzdC5jb2x1bW5zWzFdLnNlYXJjaC5zZWFyY2gpO1xyXG4gICAgICAgICQoXCIuc2VhcmNoX2NvbHVtbjJcIikudmFsKHN0LmNvbHVtbnNbMl0uc2VhcmNoLnNlYXJjaCk7XHJcbiAgICAgICAgJChcIi5zZWFyY2hfY29sdW1uMyBvcHRpb25bdmFsdWU9J1wiICsgc3QuY29sdW1uc1szXS5zZWFyY2guc2VhcmNoICsgXCInXVwiKS5hdHRyKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKFwiLnNlYXJjaF9jb2x1bW40XCIpLnZhbChzdC5jb2x1bW5zWzRdLnNlYXJjaC5zZWFyY2gpO1xyXG4gICAgICAgICQoXCIuc2VhcmNoX2NvbHVtbjVcIikudmFsKHN0LmNvbHVtbnNbNV0uc2VhcmNoLnNlYXJjaCk7XHJcbiAgICAgICAgJChcIi5zZWFyY2hfY29sdW1uNlwiKS52YWwoc3QuY29sdW1uc1s2XS5zZWFyY2guc2VhcmNoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qY29sdW1uIDEgZGUgZGF0YXRibGUgc2VhcmNoKi9cclxuXHJcbnZhciBzZWFyY2hfY29sdW1uMSA9ICQoJy5zZWFyY2hfY29sdW1uMScpLmRhdGVwaWNrZXIoe1xyXG4gICAgdG9kYXlCdG46IFwibGlua2VkXCIsXHJcbiAgICBrZXlib2FyZE5hdmlnYXRpb246IHRydWUsXHJcbiAgICBmb3JjZVBhcnNlOiBmYWxzZSxcclxuICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXHJcbiAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICBsYW5ndWFnZTogJ2ZyJyxcclxuXHJcbn0pO1xyXG5zZWFyY2hfY29sdW1uMS5vbignY2hhbmdlRGF0ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbn0pO1xyXG4kKCcuc2VhcmNoX2NvbHVtbjFfY2xlYXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc2VhcmNoX2NvbHVtbjEnKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbnVsbCkuZGF0ZXBpY2tlcignZmlsbCcpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnLnNlYXJjaF9jb2x1bW4yJykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2godGhpcy52YWx1ZSkuZHJhdygpO1xyXG59KTtcclxuXHJcbiQoJy5zZWFyY2hfY29sdW1uMycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbn0pO1xyXG5cclxuJCgnLnNlYXJjaF9jb2x1bW40Jykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuY29sdW1ucyg0KS5zZWFyY2godGhpcy52YWx1ZSkuZHJhdygpO1xyXG59KTtcclxuJCgnLnNlYXJjaF9jb2x1bW41Jykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuY29sdW1ucyg1KS5zZWFyY2godGhpcy52YWx1ZSkuZHJhdygpO1xyXG59KTtcclxuJCgnLnNlYXJjaF9jb2x1bW42Jykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuY29sdW1ucyg2KS5zZWFyY2godGhpcy52YWx1ZSkuZHJhdygpO1xyXG59KTtcclxuXHJcbi8qICQoJy5zZWFyY2hfY29sdW1uNicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiB0YWJsZS5jb2x1bW5zKDYpLnNlYXJjaCh0aGlzLnZhbHVlKS5kcmF3KCk7XHJcbiB9KTsgKi9cclxuXHJcblxyXG4kKCcucmVtb3ZlLWZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnLmFjdGlvbl9oZWFkJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJCgnLmFjdGlvbicpLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGgpO1xyXG4gICAgJChcIi5hY3Rpb24gLC5hY3Rpb25faGVhZFwiKS5wcm9wKCdjaGVja2VkJywgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcbiAgICAkKCcubGlzdF9hY3Rpb25zX2Jsb2MnKS50b2dnbGUoJCgnLmFjdGlvbicpLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPj0gMSk7XHJcblxyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmFjdGlvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5saXN0X2FjdGlvbnNfYmxvYycpLnRvZ2dsZSgkKCcuYWN0aW9uJykuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA+PSAxKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuJChcIi5zZWxlY3QyX2RlbW9fM1wiKS5zZWxlY3QyKHtcclxuICAgIHBsYWNlaG9sZGVyOiBcIkFjdGlvblwiLFxyXG4gICAgYWxsb3dDbGVhcjogdHJ1ZVxyXG59KTtcclxuXHJcbiQoJy5saXN0X2FjdGlvbnMnKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcubmV3ICwgLmVkaXQnKS5vbignY2hhbmdlJywgJy5kb3NzaWVyJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuICAgIC8vIFNpbXVsYXRlIGZvcm0gZGF0YSwgYnV0IG9ubHkgaW5jbHVkZSB0aGUgc2VsZWN0ZWQgc3BvcnQgdmFsdWUuXHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZGF0YVskKHRoaXMpLmF0dHIoJ25hbWUnKV0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy9hbGVydCgkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcbiAgICBjb25zb2xlLmxvZygkZm9ybS5hdHRyKCdtZXRob2QnKSk7XHJcbiAgICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaHRtbCk7IFxyXG4gICAgICAgICAgICAoJCgnLmNvbXB0ZU1hc3NlJykucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKCcuY29tcHRlTWFzc2UnKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKCcubmV3ICwgLmVkaXQnKS5vbignY2hhbmdlJywgJy5jb21wdGVNYXNzZScsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgdmFyICRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XHJcbiAgICAvLyBTaW11bGF0ZSBmb3JtIGRhdGEsIGJ1dCBvbmx5IGluY2x1ZGUgdGhlIHNlbGVjdGVkIHNwb3J0IHZhbHVlLlxyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGFbJCh0aGlzKS5hdHRyKCduYW1lJyldID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGRhdGFbJCgnLmRvc3NpZXInKS5hdHRyKCduYW1lJyldID0gJCgnLmRvc3NpZXInKS52YWwoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vYWxlcnQoJGZvcm0uYXR0cignYWN0aW9uJykpO1xyXG4gICAgY29uc29sZS5sb2coJGZvcm0uYXR0cignbWV0aG9kJykpO1xyXG4gICAgLy8gU3VibWl0IGRhdGEgdmlhIEFKQVggdG8gdGhlIGZvcm0ncyBhY3Rpb24gcGF0aC5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAkZm9ybS5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGh0bWwpOyBcclxuICAgICAgICAgICAgKCQoJy5jb21wdGVSdWJyaXF1ZScpLnJlcGxhY2VXaXRoKCQoaHRtbCkuZmluZCgnLmNvbXB0ZVJ1YnJpcXVlJykpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJCgnLm5ldyAsIC5lZGl0Jykub24oJ2NoYW5nZScsICcuY29tcHRlUnVicmlxdWUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuICAgIHZhciBkYXRhID0ge307XHJcblxyXG4gICAgZGF0YVskKCcuZG9zc2llcicpLmF0dHIoJ25hbWUnKV0gPSAkKCcuZG9zc2llcicpLnZhbCgpO1xyXG4gICAgZGF0YVskKCcuY29tcHRlTWFzc2UnKS5hdHRyKCduYW1lJyldID0gJCgnLmNvbXB0ZU1hc3NlJykudmFsKCk7XHJcbiAgICBkYXRhWyQodGhpcykuYXR0cignbmFtZScpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuXHJcbiAgICAgICAgICAgICgkKCcuY29tcHRlUG9zdGUnKS5yZXBsYWNlV2l0aCgkKGh0bWwpLmZpbmQoJy5jb21wdGVQb3N0ZScpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcubmV3ICwgLmVkaXQnKS5vbignY2hhbmdlJywgJy5jb21wdGVQb3N0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciAkZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGFbJCh0aGlzKS5hdHRyKCduYW1lJyldID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGRhdGFbJCgnLmNvbXB0ZU1hc3NlJykuYXR0cignbmFtZScpXSA9ICQoJy5jb21wdGVNYXNzZScpLnZhbCgpO1xyXG4gICAgZGF0YVskKCcuY29tcHRlUnVicmlxdWUnKS5hdHRyKCduYW1lJyldID0gJCgnLmNvbXB0ZVJ1YnJpcXVlJykudmFsKCk7XHJcbiAgICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICAgICAgICgkKCcuY29tcHRlJykucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKCcuY29tcHRlJykpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKCcubmV3ICwgLmVkaXQnKS5vbignY2hhbmdlJywgJy5jb21wdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuICAgIHZhciBkYXRhID0ge307XHJcbiAgICBkYXRhWyQodGhpcykuYXR0cignbmFtZScpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBkYXRhWyQoJy5jb21wdGVNYXNzZScpLmF0dHIoJ25hbWUnKV0gPSAkKCcuY29tcHRlTWFzc2UnKS52YWwoKTtcclxuICAgIGRhdGFbJCgnLmNvbXB0ZVJ1YnJpcXVlJykuYXR0cignbmFtZScpXSA9ICQoJy5jb21wdGVSdWJyaXF1ZScpLnZhbCgpO1xyXG4gICAgZGF0YVskKCcuY29tcHRlUG9zdGUnKS5hdHRyKCduYW1lJyldID0gJCgnLmNvbXB0ZVBvc3RlJykudmFsKCk7XHJcbiAgICAvLyBTdWJtaXQgZGF0YSB2aWEgQUpBWCB0byB0aGUgZm9ybSdzIGFjdGlvbiBwYXRoLlxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICAgICAgICgkKCcuY29tcHRlJykucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKCcuY29tcHRlJykpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbnZhciBhcnJheV9kZXRhaWwgPSBbXTtcclxuJCgnLm5ldycpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yKTtcclxuICAgIC8vIGFsZXJ0KClcclxuICAgIHZhciBleHNpdCA9IDA7XHJcbiAgICAkLmVhY2goYXJyYXlfZGV0YWlsLCBmdW5jdGlvbiAoaSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoJCgnI3RfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9hcnRpY2xlJykudmFsKCkgPT0gdmFsdWUuYXJ0aWNsZS5pZCkge1xyXG4gICAgICAgICAgICBleHNpdCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXhzaXQgPT0gMCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1X3BfcGFydGVuYWlyZV9uZXcnKSxcclxuICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4uc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLmVkaXQtbmV3LWFydGljbGUgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZWRpdC1uZXctYXJ0aWNsZSAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5kZXRhaWxfZm9ybVwiKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZXJyb3JzLWxpc3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmFydGljbGUnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVObyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlfZGV0YWlsLnB1c2gocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubmV3IC50YWJsZS1kZXRhaWwgPiB0Ym9keVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChhcnJheV9kZXRhaWwsIGZ1bmN0aW9uIChpLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHZhID0gdmFsdWUudHZhICsgJyAlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9ic2VydmF0aW9uID0gdmFsdWUub2JzZXJ2YXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50dmEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHZhID0gJy0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5vYnNlcnZhdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZhdGlvbiA9ICctJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXlfcm93ID0gXCIgPHRyPjx0ZD5cIiArIChpICsgMSkgKyBcIjwvdGQ+PHRkPlwiICsgdmFsdWUuYXJ0aWNsZS50aXRyZSArIFwiPC90ZD48dGQ+XCIgKyB2YWx1ZS5xdWFudGl0ZSArIFwiPC90ZD48dGQ+XCIgKyB2YWx1ZS5wcml4dW5pdGFpcmUgKyBcIjwvdGQ+IDx0ZD5cIiArIHR2YSArIFwiPC90ZD48dGQ+XCIgKyB2YWx1ZS5wcml4dHRjICsgXCI8L3RkPjx0ZD5cIiArIG9ic2VydmF0aW9uICsgXCI8L3RkPjx0ZD48YSBjbGFzcz0nZGVsZXRlX2VsZW1lbnQnIGlkPVwiICsgaSArIFwiPjxpIGNsYXNzPSdmYSBmYS10cmFzaCB0ZXh0LW5hdnknPjwvaT48L2E+PC90ZD48L3RyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID4gdGJvZHlcIikuYXBwZW5kKG15X3Jvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVObysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX2RldGFpbFwiKS52YWwoSlNPTi5zdHJpbmdpZnkoYXJyYXlfZGV0YWlsKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJDZSBwcm9kdWl0IGV4c2l0ZSBkw6lqw6AgXCIsIFwiRXJyb3IhIFwiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5uZXcnKS5vbignY2xpY2snLCAnLmRlbGV0ZV9lbGVtZW50JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignaWQnKSk7XHJcbiAgICBhcnJheV9kZXRhaWwuc3BsaWNlKCQodGhpcykuYXR0cignaWQnKSwgMSk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheV9kZXRhaWwpO1xyXG4gICAgJChcIi5uZXcgLnRhYmxlLWRldGFpbCA+IHRib2R5IHRyXCIpLnJlbW92ZSgpO1xyXG4gICAgJC5lYWNoKGFycmF5X2RldGFpbCwgZnVuY3Rpb24gKGksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG15X3JvdyA9IFwiIDx0cj48dGQ+XCIgKyAoaSArIDEpICsgXCI8L3RkPjx0ZD5cIiArIHZhbHVlLmFydGljbGUgKyBcIjwvdGQ+PHRkPlwiICsgdmFsdWUucXVhbnRpdGUgKyBcIjwvdGQ+PHRkPlwiICsgdmFsdWUucHJpeHVuaXRhaXJlICsgXCI8L3RkPiA8dGQ+XCIgKyB2YWx1ZS50dmEgKyBcIjwvdGQ+PHRkPlwiICsgdmFsdWUucHJpeHR0YyArIFwiPC90ZD48dGQ+PGEgY2xhc3M9J2RlbGV0ZV9lbGVtZW50JyBpZD1cIiArIGkgKyBcIj48aSBjbGFzcz0nZmEgZmEtdHJhc2ggdGV4dC1uYXZ5Jz48L2k+PC9hPjwvdGQ+PC90cj5cIjtcclxuICAgICAgICAkKFwiLm5ldyAudGFibGUtZGV0YWlsID50Ym9keVwiKS5hcHBlbmQobXlfcm93KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZGV0YWlsX2Zvcm1fZGVsZXRlJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoJ19pZCcpO1xyXG4gICAgdmFyIHRva2VuID0gZHRhLmdldCgnX3Rva2VuJyk7XHJcbiAgICAvLyAgICB2YXIgaWQgPSAkKFwiaW5wdXRbbmFtZT1faWRdXCIpLnZhbCgpO1xyXG4gICAgLy8gICAgdmFyIHRva2VuID0gJChcImlucHV0W25hbWU9X3Rva2VuXVwiKS52YWwoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICBzd2FsKHtcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPdWksIHN1cHByaW1lciFcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIGNsb3NlT25Db25maXJtOiB0cnVlLFxyXG4gICAgICAgIGNsb3NlT25DYW5jZWw6IHRydWVcclxuICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpc0NvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0NvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0X2FjaGF0ZGVtYW5kZWludGVybmVkZXRfZGVsZXRlJywgeydpZCc6IGlkLCAndG9rZW4nOiB0b2tlbn0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzd2FsKHJlc3VsdC5tZXNzYWdlLnRpdGxlLCByZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS5zdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YSA9IFwiZXJyb3JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3dhbChyZXN1bHQubWVzc2FnZS50aXRsZSwgcmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qXHJcbiAqIFxyXG4gKiBhZmZpY2hlciBsYSBmb3JtdWxhaXJlIGRlIG1vZGlmaWNhdGlvbiAgZCd1biBub3V2ZWF1IGFydGljbGUgXHJcbiAqIFxyXG4gKi9cclxuXHJcbiQoJy5lZGl0Jykub24oJ3N1Ym1pdCcsICcuZGV0YWlsX2VkaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KCdfaWQnKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9lZGl0X2RldGFpbCcsIHsnaWQnOiBpZH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdmFyIHNsaCA9IHNlbGVjdG9yLnBhcmVudCgpLnBhcmVudCgpLmVtcHR5KCkuYXBwZW5kKFwiPHRkIGNvbHNwYW49JzcnPlwiICsgcmVzdWx0ICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgICAgLy8gc2xoLmFwcGVuZChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLypcclxuICogXHJcbiAqIEVucmVnaXN0cmVyICBsYSBmb3JtdWxhaXJlIGRlIG1vZGlmaWNhdGlvbiAgZCdhcnRpY2xlIFxyXG4gKiBcclxuICovXHJcblxyXG5cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5kZXRhaWxfZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl91cGRhdGVfZGV0YWlsJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZGV0YWlsX2Zvcm0gI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcigoXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qYWZmaWNoZXIgbGEgZm9ybXVsYWlyZSBkJ2Fqb3V0IGQndW4gbm91dmVhdSBhcnRpY2xlICovXHJcblxyXG4vLyQoJy5lZGl0LW5ldy1hcnRpY2xlLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICQoJy5lZGl0LW5ldy1hcnRpY2xlJykuc2hvdygpO1xyXG4vLyAgICAkKHRoaXMpLmhpZGUoKTtcclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL30pO1xyXG5cclxuXHJcblxyXG4kKCcubmV3LWFydGljbGUtYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICQoJy5lZGl0LW5ldy1hcnRpY2xlJykuc2hvdygpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLypBam91dGVyIHVuIG5vdXZlYXUgYXJ0aWNsZSBkYW5zIGxhIHBhZ2UgZGUgbW9kaWZpY2F0aW9uICovXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmRldGFpbF9mb3JtX2FkZF9hcnRpY2xlJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldCgnX2lkX2NhYicpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd0X2FjaGF0ZGVtYW5kZWludGVybmVkZXRfaW5zZXJ0JywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQuZXJyb3JzLnZpb2xhdGlvbnMsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gdmFsLnByb3BlcnR5UGF0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbk5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZGV0YWlsX2Zvcm1fZWRpdCAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxufSk7XHJcblxyXG4kKCcuc2hvdy1tZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoJ3NpZGViYXItb3BlbicpXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG4kKCcuYWN0aW9ucycpLm9uKCdjbGljaycsICcuY2xvc2UtbWUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8kKCcuY2xvc2UtbWUnKS5jbGljayhmdW5jdGlvbiAoZSl7IFxyXG4gICAgJChcIi5hY3Rpb25zXCIpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuXHJcblxyXG5cclxuLypcclxuICogXHJcbiAqIGFmZmljaGVyIGxhIGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uICBkJ3VuIG5vdXZlYXUgYXJ0aWNsZSBcclxuICogXHJcbiAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYmxlLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIG1lbSA9ICQoJyNkYXRhXzEgLmlucHV0LWdyb3VwLmRhdGUnKS5kYXRlcGlja2VyKHtcclxuICAgIHRvZGF5QnRuOiBcImxpbmtlZFwiLFxyXG4gICAga2V5Ym9hcmROYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgIGZvcmNlUGFyc2U6IGZhbHNlLFxyXG4gICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuICAgIGF1dG9jbG9zZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciB5ZWFyc0FnbyA9IG5ldyBEYXRlKCk7XHJcbnllYXJzQWdvLnNldEZ1bGxZZWFyKHllYXJzQWdvLmdldEZ1bGxZZWFyKCkgLSAyMCk7XHJcblxyXG4kKCcjc2VsZWN0b3InKS5kYXRlcGlja2VyKCdzZXREYXRlJywgeWVhcnNBZ28pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnLmFjdGlvbnMnKS5vbignc3VibWl0JywgJy5mb3JtX3N0YXR1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19zb2xkZV9jb25nZV9zdGF0dXQnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2codGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LmVycm9ycy52aW9sYXRpb25zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2x1bW5OYW1lWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtX3N0YXR1dCAjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWVbMV0pLmFmdGVyKChcIjxzcGFuIGNsYXNzPSdlcnJvcnMtbGlzdCBpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2snPjxzcGFuIGNsYXNzPSdkLWJsb2NrJz4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItaWNvbiBiYWRnZSBiYWRnZS1kYW5nZXIgdGV4dC11cHBlcmNhc2UnPkVycmV1cjwvc3Bhbj4gPHNwYW4gY2xhc3M9J2Zvcm0tZXJyb3ItbWVzc2FnZSc+XCIgKyB2YWwudGl0bGUgKyBcIjwvc3Bhbj48L3NwYW4+PC9zcGFuPlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hY3Rpb25zXCIpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuX3RfYWZmYWlyZV9xdWljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfYWZmYWlyZV9uZXdfcXVpY2snKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoJy5hY3Rpb25zJykuaHRtbChyZXN1bHQpO1xyXG4gICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCAnLmZvcm1fdF9hZmZhaXJlX3F1aWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKVswXTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF9hZmZhaXJlX25ld19xdWlja19pbnNlcnQnKSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdC5lcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSB2YWwucHJvcGVydHlQYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5cIiArIHNlbGVjdG9yICsgXCIgI1wiICsgZm9ybV9uYW1lICsgXCJfXCIgKyBjb2x1bW5OYW1lWzFdKS5hZnRlcigoXCI8c3BhbiBjbGFzcz0nZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikuZW1wdHkoKS5yZW1vdmVDbGFzcygnc2lkZWJhci1vcGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF9hY2hhdGRlbWFuZGVpbnRlcm5lY2FiX25ldycpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCQoJy5hZmZhaXJlJykucmVwbGFjZVdpdGgoJChodG1sKS5maW5kKCcuYWZmYWlyZScpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJCgnI19lZGl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIC8vIGFsZXJ0KGlkKTtcclxuICAgIGlmIChpZCkge1xyXG5cclxuICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ3JzX3NvbGRlX2NvbmdlX2VkaXQnLCB7J2lkJzogaWR9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJyNfc2hvdycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19zb2xkZV9jb25nZV9zaG93JywgeydpZCc6IGlkfSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcbiQoJyNfaW1wcmltZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdwZGZfc2hvdycsIHsnaWQnOiBpZH0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuJCgnI19zdGF0dXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gdGFibGUucm93KCcuc2VsZWN0ZWQnKS5pZCgpO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19zb2xkZV9jb25nZV9zdGF0dXQnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmFjdGlvbnMnKS5odG1sKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFjdGlvbnNcIikudG9nZ2xlQ2xhc3MoJ3NpZGViYXItb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKCcjX2FyY2hpdmVyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9IHRhYmxlLnJvdygnLnNlbGVjdGVkJykuaWQoKTtcclxuICAgIGlmIChpZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucy5maXJlKHtcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IEFyY2hpdmVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1hcmNoaXZlJz48L2k+IE91aSwgQXJjaGl2ZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfYWNoYXRkZW1hbmRlaW50ZXJuZWNhYl9hcmNoaXZlJywgeydpZCc6IGlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYWN0aW9uc1wiKS5lbXB0eSgpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLCBcIndhcm5pbmdcIiwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKCcjX2RlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLmlkKCk7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+IE91aSwgU3VwcHJpbWVyIVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBObywgQW5udWxlciFcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19zb2xkZV9jb25nZV9kZWxldGUnLCB7J2lkJzogaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoanFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGV4dCwganFYSFIucmVzcG9uc2VKU09OLm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIiwgXCJ3YXJuaW5nXCIsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5fbXVsdGlwbGVfYWN0aW9ucycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfYXJyYXlfaWRzID0gW107XHJcbiAgICAkLmVhY2goJChcImlucHV0W25hbWU9X2FjdGlvbl06Y2hlY2tlZFwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9hcnJheV9pZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS52YWwoKSk7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAnX2ltcHJpbWVyJykge1xyXG5cclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF9hY2hhdGRlbWFuZGVpbnRlcm5lZGV0X211bHRpcGxlX3BkZlNob3cnKSxcclxuICAgICAgICAgICAgZGF0YToge19hcnJheV9pZHN9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIHdpbmRvdy5vcGVuKHJlc3VsdCwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIC8qICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgICQoJy5fbXVsdGlwbGVfYWN0aW9ucycpLnZhbCgnJyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAkKFwiYm9keSA+IC5fbXVsdGlwbGVfYWN0aW9ucyBvcHRpb25bdmFsdWU9JyddXCIpLmF0dHIoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7IFxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID09ICdfZGVsZXRlJykge1xyXG5cclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgbGlzdGUgP1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT4gT3VpLCBTdXBwcmltZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndF9hY2hhdGRlbWFuZGVpbnRlcm5lZGV0X211bHRpcGxlX2RlbGV0ZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHt0aW1lT3V0OiA0MDAwfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRleHQsIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLCB7dGltZU91dDogNDAwMH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuX211bHRpcGxlX2FjdGlvbnMnKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gJ19hcmNoaXZlcicpIHtcclxuICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJWb3VsZXogdm91cyB2cmFpbWVudCBBcmNoaXZlciBjZXR0ZSBsaXN0ZSA/XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1hcmNoaXZlJz48L2k+IE91aSwgQXJjaGl2ZXIhXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vLCBBbm51bGVyIVwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3RfYWNoYXRkZW1hbmRlaW50ZXJuZWRldF9tdWx0aXBsZV9hcmNoaXZlcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtfYXJyYXlfaWRzfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LCBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50aXRsZSwge3RpbWVPdXQ6IDQwMDB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnLl9tdWx0aXBsZV9hY3Rpb25zJykudmFsKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KTsiLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBQKSB7XG4gIGlmICghZGVsZXRlIE9bUF0pIHRocm93ICRUeXBlRXJyb3IoJ0Nhbm5vdCBkZWxldGUgcHJvcGVydHkgJyArIHRyeVRvU3RyaW5nKFApICsgJyBvZiAnICsgdHJ5VG9TdHJpbmcoTykpO1xufTtcbiIsInZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWxldGUtcHJvcGVydHktb3ItdGhyb3cnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc3BsaWNlJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zcGxpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc3BsaWNlXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBzcGxpY2U6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQgLyogLCAuLi5pdGVtcyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhY3R1YWxTdGFydCA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuKTtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgaW5zZXJ0Q291bnQsIGFjdHVhbERlbGV0ZUNvdW50LCBBLCBrLCBmcm9tLCB0bztcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBpbnNlcnRDb3VudCA9IGFjdHVhbERlbGV0ZUNvdW50ID0gMDtcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgaW5zZXJ0Q291bnQgPSAwO1xuICAgICAgYWN0dWFsRGVsZXRlQ291bnQgPSBsZW4gLSBhY3R1YWxTdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zZXJ0Q291bnQgPSBhcmd1bWVudHNMZW5ndGggLSAyO1xuICAgICAgYWN0dWFsRGVsZXRlQ291bnQgPSBtaW4obWF4KHRvSW50ZWdlck9ySW5maW5pdHkoZGVsZXRlQ291bnQpLCAwKSwgbGVuIC0gYWN0dWFsU3RhcnQpO1xuICAgIH1cbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgaW5zZXJ0Q291bnQgLSBhY3R1YWxEZWxldGVDb3VudCk7XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCBhY3R1YWxEZWxldGVDb3VudCk7XG4gICAgZm9yIChrID0gMDsgayA8IGFjdHVhbERlbGV0ZUNvdW50OyBrKyspIHtcbiAgICAgIGZyb20gPSBhY3R1YWxTdGFydCArIGs7XG4gICAgICBpZiAoZnJvbSBpbiBPKSBjcmVhdGVQcm9wZXJ0eShBLCBrLCBPW2Zyb21dKTtcbiAgICB9XG4gICAgQS5sZW5ndGggPSBhY3R1YWxEZWxldGVDb3VudDtcbiAgICBpZiAoaW5zZXJ0Q291bnQgPCBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgZm9yIChrID0gYWN0dWFsU3RhcnQ7IGsgPCBsZW4gLSBhY3R1YWxEZWxldGVDb3VudDsgaysrKSB7XG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQ7XG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50O1xuICAgICAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgICAgIGVsc2UgZGVsZXRlUHJvcGVydHlPclRocm93KE8sIHRvKTtcbiAgICAgIH1cbiAgICAgIGZvciAoayA9IGxlbjsgayA+IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50ICsgaW5zZXJ0Q291bnQ7IGstLSkgZGVsZXRlUHJvcGVydHlPclRocm93KE8sIGsgLSAxKTtcbiAgICB9IGVsc2UgaWYgKGluc2VydENvdW50ID4gYWN0dWFsRGVsZXRlQ291bnQpIHtcbiAgICAgIGZvciAoayA9IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50OyBrID4gYWN0dWFsU3RhcnQ7IGstLSkge1xuICAgICAgICBmcm9tID0gayArIGFjdHVhbERlbGV0ZUNvdW50IC0gMTtcbiAgICAgICAgdG8gPSBrICsgaW5zZXJ0Q291bnQgLSAxO1xuICAgICAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgICAgIGVsc2UgZGVsZXRlUHJvcGVydHlPclRocm93KE8sIHRvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChrID0gMDsgayA8IGluc2VydENvdW50OyBrKyspIHtcbiAgICAgIE9bayArIGFjdHVhbFN0YXJ0XSA9IGFyZ3VtZW50c1trICsgMl07XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50ICsgaW5zZXJ0Q291bnQpO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZURhdGVUb1N0cmluZyA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXSk7XG52YXIgdGhpc1RpbWVWYWx1ZSA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VGltZSk7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9IElOVkFMSURfREFURSkge1xuICBkZWZpbmVCdWlsdEluKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpc1RpbWVWYWx1ZSh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyBuYXRpdmVEYXRlVG9TdHJpbmcodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IGlzTnVsbE9yVW5kZWZpbmVkKHJlZ2V4cCkgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=