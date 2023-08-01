(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grs_paie_cnss"],{

/***/ "./assets/js/components/module_ressource_humaine/grs_paie_cnss.js":
/*!************************************************************************!*\
  !*** ./assets/js/components/module_ressource_humaine/grs_paie_cnss.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global, jQuery) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");



var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");




_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.setRoutingData(routes);
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_cnss_list') + location.search,
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[25, 50, 100, 200, 400], [25, 50, 100, 200, "All"]],
  "columns": [{
    "orderable": false,
    "searchable": true,
    "width": "1px",
    "targets": [0]
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }],
  "order": [[0, "desc"]],
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
table.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchText"](api, [1, 2], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchDate"](api, [3], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_7__["CustomSearchSelect"](api, [4, 5, 6, 7], []);
  //  CustomSearchDatatable.CustomSearchCheckbox(api, [0], []);
});

/* lien vers la livraison */
$('#grid tbody').on('click', '.cd_op', function () {
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_cnss_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
$(".select2").select2();
var table = $('#datatable-show').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_cnss_employe_list', {
      'id': $("#_id").val()
    }) + location.search,
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 25, 50, 100, 200, 400], [10, 25, 50, 100, 200, "All"]],
  "columns": [{
    "orderable": false,
    "searchable": true,
    "width": "1px",
    "targets": [0]
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }],
  "order": [[0, "desc"]],
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
var table1 = $('#datatable-show2').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_cnss_detail_employe_list', {
      'id': $("#_id").val()
    }) + location.search,
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 25, 50, 100, 200, 400], [10, 25, 50, 100, 200, "All"]],
  "columns": [{
    "orderable": false,
    "searchable": true,
    "width": "1px",
    "targets": [0]
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }],
  "order": [[0, "desc"]],
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
var table2 = $('#datatable-generer').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_cnss_detail_employe_list_generer', {
      'id': $("#_id").val()
    }) + location.search,
    // json datasource
    type: "get"
  },
  "deferRender": true,
  "stateSave": true,
  "lengthMenu": [[10, 25, 50, 100, 200, 400], [10, 25, 50, 100, 200, "All"]],
  "columns": [{
    "orderable": false,
    "searchable": true,
    "width": "1px",
    "targets": [0]
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }, {
    "orderable": false,
    "width": "10px",
    "targets": 0
  }
  // { "orderable": false, "width": "5px", "targets": 0 },
  ],

  "order": [[0, "desc"]],
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
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('datatables_langue'),
    "processing": true
  },
  fixedHeader: true
});
$('.edit').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);
  l.start();
  var id = dta.get("_id");

  //alert(id);
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_cnss_edit", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      // alert();
      l.stop();
      if (result.errors) {
        //   $('.erreur_liste').remove();

        $('.erreur_liste').remove();
        //$("span").remove( ".erreur_liste" );
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__["ShowFormErrors"])(selector, form_name, result.errors);
        $('.error-class-tab').each(function (index) {
          //  alert(index);
          //  alert(arr.indexOf($(this).parents('.tab-pane').attr('id')));
          if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
            $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class=" erreur_liste label badge-danger">Erreur!</span>');
          }
          arr = $(this).parents('.tab-pane').attr('id');
        });
        arr = [];
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        // var url = Routing.generate('grs_employe_index');
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
$('input[name="grs_employe[user]"]:radio').change(function () {
  $('#optionOneDiv').toggle(this.id == 'grs_employe_user_0');
  if (this.id == 'grs_employe_user_1') {
    $(".bloc_investissement").css("display", "block");
  }
});
$('.new').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);
  l.start();
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_cnss_new'),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.empty) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code = 200) {
        // alert( result.message.data);
        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_cnss_show', {
          'id': result.message.data
        });
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
$('.employe').on('submit', '.form', function (e) {
  var form_name = $(this).attr('name');
  var dta = new FormData(this);
  var selector = $(this);
  // Create a new instance of ladda for the specified button
  var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);
  l.start();
  var id = dta.get("_id");
  // alert(id );
  $.ajax({
    type: 'POST',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_cnss_emp", {
      id: id
    }),
    data: dta,
    processData: false,
    contentType: false,
    success: function success(result) {
      l.stop();
      if (result.errors) {
        Object(_ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_5__["ShowFormErrors"])(selector, form_name, result.errors);
      } else if (result.code == 403) {
        toastr.warning(result.message.text, result.message.title, {
          timeOut: 4000
        });
      } else if (result.code == 200) {
        // alert( result.message.data);

        toastr.success(result.message.text, result.message.title, {
          timeOut: 4000
        });
        //   table1.ajax.reload();
        // $('#grs_paiedet_employe').val('');
        // $('#grs_paiedet_montant').val('');
        // $('#grs_paiedet_description').val('');
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
$('.error-class-tab').each(function (index) {
  //alert(arr.indexOf($(this).parents('.tab-pane').attr('id')))
  if (arr.indexOf($(this).parents('.tab-pane').attr('id')) == -1) {
    $("a[href$='#" + $(this).parents('.tab-pane').attr('id') + "']").append('<span class="label badge-danger">Erreur!</span>');
  }
  arr = $(this).parents('.tab-pane').attr('id');
});
$("#_edit").click(function (e) {
  var id = table.row(".selected").id();
  if (id) {
    var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_employe_edit", {
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
$('body').on('change', '.paiement', function () {
  //alert($(this).val());
  if ($(this).val() == 2) {
    $('.bloc_cheque').show();
  } else {
    $('.bloc_cheque').hide();
  }
  // $("#valid").css("display", "block");
});

$("body").on("click", ".grs_paie_apply_transitions", function (e) {
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
      text: "Voulez vous vraiment passer à l'état '" + title + "' pour cet enregistrement ?",
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_cnss_apply_transitions", {
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
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_cnss_generer", {
                id: result.id
              });
              window.location.href = url;
              //   location.reload();
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
    toastr.warning("Commande non renseigné ", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
$("#datatable-show tbody").on("click", ".add_emp", function () {
  var emp = $(this).closest("tr").attr("id");
  var paie = $("#_id").val();

  // alert(id);
  if (emp) {
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_cnss_add_employe", {
        id: paie,
        emp: emp
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        //  console.log(result);
        if (result.code == 200) {
          toastr.success(result.message.text, result.message.title, {
            timeOut: 4000
          });
          table.ajax.reload();
          table2.ajax.reload();
          // location.reload();
        } else if (result.code == 403) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        }
      }
    });
  }
});
$("#datatable-show2 tbody").on("click", ".del_emp", function () {
  var emp = $(this).closest("tr").attr("id");
  var paie = $("#_id").val();

  // alert(id);
  if (emp) {
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
          type: "GET",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_cnss_delete_employe", {
            id: paie,
            emp: emp
          }),
          processData: false,
          contentType: false,
          success: function success(result) {
            //  console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });

              //  table.ajax.reload();
              // table1.ajax.reload();
              location.reload();
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            }
          }
        });
      }
    });
  }
});
$(".employe").on("change", function (e) {
  if ($(this).val()) {
    // alert($(this).val());
    $.ajax({
      type: "GET",
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_cnss_montant_employe", {
        id: $(this).val()
      }),
      processData: false,
      contentType: false,
      success: function success(result) {
        //  console.log(result);
        if (result.code == 200) {
          $('#grs_paiedet_montant').val(result.message.montant);
        } else if (result.code == 403) {
          toastr.warning(result.message.text, result.message.title, {
            timeOut: 4000
          });
        }
      }
    });
  }
});
$("#_delete").click(function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var obj = {
    route: "grs_cnss_delete",
    redirection: "grs_cnss_index",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_4__["deleteCab"])(obj);
  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ })

},[["./assets/js/components/module_ressource_humaine/grs_paie_cnss.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfcmVzc291cmNlX2h1bWFpbmUvZ3JzX3BhaWVfY25zcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwidHlwZSIsImRvbSIsImJ1dHRvbnMiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInN0YXRlIiwiY2xlYXIiLCJ3aW5kb3ciLCJyZWxvYWQiLCJmaXhlZEhlYWRlciIsIm9uIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiZGF0YSIsIkN1c3RvbVNlYXJjaERhdGF0YWJsZSIsImNsb3Nlc3QiLCJhdHRyIiwiaHJlZiIsInNlbGVjdDIiLCJ2YWwiLCJ0YWJsZTEiLCJ0YWJsZTIiLCJmb3JtX25hbWUiLCJkdGEiLCJGb3JtRGF0YSIsInNlbGVjdG9yIiwibCIsIkxhZGRhIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3RhcnQiLCJpZCIsImdldCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic3RvcCIsImVycm9ycyIsInJlbW92ZSIsIlNob3dGb3JtRXJyb3JzIiwiZWFjaCIsImluZGV4IiwiYXJyIiwiaW5kZXhPZiIsInBhcmVudHMiLCJhcHBlbmQiLCJlbXB0eSIsInRvYXN0ciIsIndhcm5pbmciLCJtZXNzYWdlIiwidGl0bGUiLCJ0aW1lT3V0IiwiY29kZSIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJwcmV2ZW50RGVmYXVsdCIsImpRdWVyeSIsImkiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlIiwidG9nZ2xlIiwiY3NzIiwiY2xpY2siLCJyb3ciLCJzaG93IiwiaGlkZSIsInRyYW5zaXRpb24iLCJmaXJlIiwic2hvd0NsYXNzIiwicG9wdXAiLCJwb3NpdGlvbiIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwidmFsdWUiLCJyZXNwb25zZUpTT04iLCJlbXAiLCJwYWllIiwibW9udGFudCIsInRva2VuIiwib2JqIiwicm91dGUiLCJyZWRpcmVjdGlvbiIsImRlbGV0ZUNhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdGQUEwQyxDQUFDO0FBQzJDO0FBQ3ZEO0FBQ3REQSxtQkFBTyxDQUFDLDBHQUErQyxDQUFDO0FBQ1M7QUFDbEM7QUFDMEQ7QUFDakI7QUFFeEVDLGtIQUFPLENBQUNDLGNBQWMsQ0FBQ0gsTUFBTSxDQUFDO0FBRzlCSSxNQUFNLENBQUNDLENBQUMsR0FBR0EsQ0FBQztBQUVaLElBQU1DLElBQUksR0FBR0wsbUJBQU8sQ0FBQyx1RUFBYSxDQUFDO0FBQ25DLElBQU1NLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUN4Q0MsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbERDLFlBQVksRUFBRTtFQUNsQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFFRixJQUFJQyxLQUFLLEdBQUdSLENBQUMsQ0FBQyxPQUFPLENBQUMs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MEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHdFQUF3RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiZ3JzX3BhaWVfY25zcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcclxuaW1wb3J0IHsgZGVsZXRlQ2FiIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2RlbGV0ZS5qcyc7XHJcbnJlcXVpcmUoJy4uLy4uL3BsdWdpbnMvdmFsaWRhdGUvanF1ZXJ5LnZhbGlkYXRlLm1pbi5qcycpO1xyXG5pbXBvcnQgeyBTaG93Rm9ybUVycm9ycyB9IGZyb20gJy4uLy4uL01hbmFnZW1lbnRFcnJvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmltcG9ydCAqIGFzIEN1c3RvbVNlYXJjaERhdGF0YWJsZSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50U2VhcmNoRGF0YXRhYmxlL2N1c3RvbVNlYXJjaC5qcyc7XHJcbmltcG9ydCAqIGFzIGF1dG9GdW5jdGlvbkFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hdXRvRnVuY3Rpb25BamF4LmpzXCI7XHJcblxyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5cclxuZ2xvYmFsLiQgPSAkO1xyXG5cclxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gU3dhbC5taXhpbih7XHJcbiAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdoaXRlIGJ0bi14cyBzeVN3ZWV0U3R5bGUnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4td2FybmluZyBidG4teHMgc3lTd2VldFN0eWxlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxudmFyIHRhYmxlID0gJCgnI2dyaWQnKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ3JzX2Nuc3NfbGlzdCcpICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1syNSwgNTAsIDEwMCwgMjAwLCA0MDBdLCBbMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1sgMCwgXCJkZXNjXCIgXV0sXHJcbiAgICAvLyBkb206ICdsQmZydGlwJyxcclxuICAgIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcbnRhYmxlLm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuICAgIGxldCBhcGkgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKHNldHRpbmdzKTtcclxuICAgIGxldCBzdCA9IGFwaS5zdGF0ZS5sb2FkZWQoKTtcclxuICAgIGxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hUZXh0KGFwaSwgWzEsMixdLCBbXSk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoRGF0ZShhcGksIFszXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFs0LDUsNiw3XSwgW10pO1xyXG4gICAgLy8gIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hDaGVja2JveChhcGksIFswXSwgW10pO1xyXG59KTtcclxuXHJcblxyXG5cclxuLyogbGllbiB2ZXJzIGxhIGxpdnJhaXNvbiAqL1xyXG4kKCcjZ3JpZCB0Ym9keScpLm9uKCdjbGljaycsICcuY2Rfb3AnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ3JzX2Nuc3NfZWRpdCcsIHsgJ2lkJzogJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufSk7XHJcblxyXG4kKFwiLnNlbGVjdDJcIikuc2VsZWN0MigpO1xyXG5cclxudmFyIHRhYmxlID0gJCgnI2RhdGF0YWJsZS1zaG93JykuRGF0YVRhYmxlKHtcclxuICBcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19jbnNzX2VtcGxveWVfbGlzdCcseyAnaWQnOiAkKFwiI19pZFwiKS52YWwoKSB9KSArIGxvY2F0aW9uLnNlYXJjaCwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTAsMjUsIDUwLCAxMDAsIDIwMCwgNDAwXSwgWzEwLDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIF0sXHJcbiAgICBcIm9yZGVyXCI6IFtbIDAsIFwiZGVzY1wiIF1dLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG52YXIgdGFibGUxID0gJCgnI2RhdGF0YWJsZS1zaG93MicpLkRhdGFUYWJsZSh7XHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdncnNfY25zc19kZXRhaWxfZW1wbG95ZV9saXN0Jyx7ICdpZCc6ICQoXCIjX2lkXCIpLnZhbCgpIH0pICsgbG9jYXRpb24uc2VhcmNoLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgfSxcclxuICAgIFwiZGVmZXJSZW5kZXJcIjogdHJ1ZSxcclxuICAgIFwic3RhdGVTYXZlXCI6IHRydWUsXHJcbiAgICBcImxlbmd0aE1lbnVcIjogW1sxMCwyNSwgNTAsIDEwMCwgMjAwLCA0MDBdLCBbMTAsMjUsIDUwLCAxMDAsIDIwMCwgXCJBbGxcIl1dLFxyXG5cclxuICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJzZWFyY2hhYmxlXCI6IHRydWUsIFwid2lkdGhcIjogXCIxcHhcIiwgXCJ0YXJnZXRzXCI6IFswXSB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LCAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICBdLCBcclxuICAgIFwib3JkZXJcIjogW1sgMCwgXCJkZXNjXCIgXV0sXHJcbiAgICAvLyBkb206ICdsQmZydGlwJyxcclxuICAgIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcbiAgICBcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuICBcclxuXHJcblxyXG52YXIgdGFibGUyID0gJCgnI2RhdGF0YWJsZS1nZW5lcmVyJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19jbnNzX2RldGFpbF9lbXBsb3llX2xpc3RfZ2VuZXJlcicseyAnaWQnOiAkKFwiI19pZFwiKS52YWwoKSB9KSArIGxvY2F0aW9uLnNlYXJjaCwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTAsMjUsIDUwLCAxMDAsIDIwMCwgNDAwXSwgWzEwLDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAvLyB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiNXB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICBdLFxyXG4gICAgXCJvcmRlclwiOiBbWyAwLCBcImRlc2NcIiBdXSxcclxuICAgIC8vIGRvbTogJ2xCZnJ0aXAnLFxyXG4gICAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcuZWRpdCcpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gICBcclxuICAgIC8vYWxlcnQoaWQpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZ3JzX2Nuc3NfZWRpdFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgLy8gYWxlcnQoKTtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG4gICAgICAgICAgICAgLy8gICAkKCcuZXJyZXVyX2xpc3RlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBcdFxyXG5cclxuICAgICAgICAgICAgICQoJy5lcnJldXJfbGlzdGUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgIC8vJChcInNwYW5cIikucmVtb3ZlKCBcIi5lcnJldXJfbGlzdGVcIiApO1xyXG4gICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgICAkKCcuZXJyb3ItY2xhc3MtdGFiJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgLy8gIGFsZXJ0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgLy8gIGFsZXJ0KGFyci5pbmRleE9mKCQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKSkpO1xyXG4gICAgICAgICAgICAgICAgIGlmIChhcnIuaW5kZXhPZigkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJykpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICQoXCJhW2hyZWYkPScjXCIgKyAkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJykgKyBcIiddXCIpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCIgZXJyZXVyX2xpc3RlIGxhYmVsIGJhZGdlLWRhbmdlclwiPkVycmV1ciE8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGFyciA9ICQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGFyciA9IFtdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgICAgLy8gdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19lbXBsb3llX2luZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5qUXVlcnkuZWFjaCgkKCcudG9hc3RyLW1zZycpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykpO1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10b2FzdHInKSA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY8OpZXNcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJ3YXJuaW5nXCIpIHtcclxuICAgICAgICB0b2FzdHIud2FybmluZyhcIldhcm5pbmdcIiwgJCh0aGlzKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiZXJyZXVyXCIsICQodGhpcykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH1cclxufSk7XHJcbmpRdWVyeS5lYWNoKCQoJy5mb3JtLWVycm9ycyBsaScpLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKHRoaXMpLnRleHQoKSk7XHJcbn0pO1xyXG4vKmNoZWNrIHRoZSBmb3JtIGVycm9ycyovXHJcbmNvbnNvbGUubG9nKCQoJy5mb3JtLWVycm9ycycpLnRleHQoKSk7XHJcbmlmICgkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCkgIT0gJycpIHtcclxuICAgIHRvYXN0ci5lcnJvcihcImVycmV1clwiLCAkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCksIHsgdGltZU91dDogNDAwMCB9KVxyXG59XHJcbiQoJ2lucHV0W25hbWU9XCJncnNfZW1wbG95ZVt1c2VyXVwiXTpyYWRpbycpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjb3B0aW9uT25lRGl2JykudG9nZ2xlKHRoaXMuaWQgPT0gJ2dyc19lbXBsb3llX3VzZXJfMCcpO1xyXG4gICAgaWYgKHRoaXMuaWQgPT0gJ2dyc19lbXBsb3llX3VzZXJfMScpIHtcclxuICAgICAgJChcIi5ibG9jX2ludmVzdGlzc2VtZW50XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKCcubmV3Jykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19jbnNzX25ldycpLFxyXG4gICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG5cclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lbXB0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ3JzX2Nuc3Nfc2hvdycseydpZCc6cmVzdWx0Lm1lc3NhZ2UuZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAvLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJy5lbXBsb3llJykub24oJ3N1Ym1pdCcsICcuZm9ybScsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgdmFyIGZvcm1fbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9ICQodGhpcyk7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGFkZGEgZm9yIHRoZSBzcGVjaWZpZWQgYnV0dG9uXHJcbiAgICB2YXIgbCA9IExhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGwuc3RhcnQoKTtcclxuICAgIHZhciBpZCA9IGR0YS5nZXQoXCJfaWRcIik7XHJcbiAgLy8gYWxlcnQoaWQgKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImdyc19jbnNzX2VtcFwiLCB7IGlkOiBpZCB9KSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgcmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGU9PTQwMykge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydCggcmVzdWx0Lm1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAvLyAgIHRhYmxlMS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAvLyAkKCcjZ3JzX3BhaWVkZXRfZW1wbG95ZScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgIC8vICQoJyNncnNfcGFpZWRldF9tb250YW50JykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgLy8gJCgnI2dyc19wYWllZGV0X2Rlc2NyaXB0aW9uJykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4kKCcuZXJyb3ItY2xhc3MtdGFiJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgIC8vYWxlcnQoYXJyLmluZGV4T2YoJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpKSlcclxuICAgIGlmIChhcnIuaW5kZXhPZigkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJykpID09IC0xKSB7XHJcbiAgICAgICAgJChcImFbaHJlZiQ9JyNcIiArICQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKSArIFwiJ11cIikuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImxhYmVsIGJhZGdlLWRhbmdlclwiPkVycmV1ciE8L3NwYW4+Jyk7XHJcbiAgICB9XHJcbiAgICBhcnIgPSAkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJyk7XHJcbn0pXHJcbiQoXCIjX2VkaXRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgaWQgPSB0YWJsZS5yb3coXCIuc2VsZWN0ZWRcIikuaWQoKTtcclxuICBpZiAoaWQpIHtcclxuICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZ3JzX2VtcGxveWVfZWRpdFwiLCB7IGlkOiBpZCB9KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgXCJWZXVpbGxleiBSZW5zZWlnbmVyIHVuZSBsaWduZSBwb3VyIGVmZmVjdHVlciBjZXR0ZSBvcMOpcmF0aW9uXCIsXHJcbiAgICAgIFwid2FybmluZ1wiLFxyXG4gICAgICB7IHRpbWVPdXQ6IDQwMDAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5wYWllbWVudCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWxlcnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAyKSB7XHJcbiAgICAgICAgJCgnLmJsb2NfY2hlcXVlJykuc2hvdygpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmJsb2NfY2hlcXVlJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gJChcIiN2YWxpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXHJcbiAgICBcImNsaWNrXCIsXHJcbiAgICBcIi5ncnNfcGFpZV9hcHBseV90cmFuc2l0aW9uc1wiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRpdGxlXCIpO1xyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10cmFuc2l0aW9uXCIpO1xyXG5cclxuICAgICAgICBkdGEuYXBwZW5kKFwiaWRcIiwgaWQpO1xyXG4gICAgICAgIGR0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XHJcbiAgICAgICAgZHRhLmFwcGVuZChcInRyYW5zaXRpb25cIiwgdHJhbnNpdGlvbik7XHJcblxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgcGFzc2VyIMOgIGwnw6l0YXQgJ1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInIHBvdXIgY2V0IGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncnNfY25zc19hcHBseV90cmFuc2l0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOiBpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHJlc3VsdC52YWxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JzX2Nuc3NfZ2VuZXJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IHJlc3VsdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduw6kgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuJChcIiNkYXRhdGFibGUtc2hvdyB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZF9lbXBcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgZW1wPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIik7XHJcbiAgdmFyIHBhaWU9ICAkKFwiI19pZFwiKS52YWwoKTtcclxuIFxyXG4gICAvLyBhbGVydChpZCk7XHJcbiAgICBpZihlbXApe1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImdyc19jbnNzX2FkZF9lbXBsb3llXCIsIHtpZDogcGFpZSAsIGVtcDplbXB9KSxcclxuICAgICAgIFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgdGFibGUyLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQuY29kZSA9PSA0MDMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn1cclxufSk7XHJcblxyXG5cclxuJChcIiNkYXRhdGFibGUtc2hvdzIgdGJvZHlcIikub24oXCJjbGlja1wiLCBcIi5kZWxfZW1wXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgZW1wPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIik7XHJcbiAgICB2YXIgcGFpZT0gICQoXCIjX2lkXCIpLnZhbCgpO1xyXG5cclxuICAgICAvLyBhbGVydChpZCk7XHJcbiAgICAgIGlmKGVtcCl7XHJcblxyXG4gICAgICAgIFxyXG4gIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gIC5maXJlKHtcclxuICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgfSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJncnNfY25zc19kZWxldGVfZW1wbG95ZVwiLCB7aWQ6IHBhaWUgLCBlbXA6ZW1wfSksXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlMS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LmNvZGUgPT0gNDAzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAgIFxyXG4gIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgJChcIi5lbXBsb3llXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgIC8vIGFsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZ3JzX2Nuc3NfbW9udGFudF9lbXBsb3llXCIsIHtpZDogJCh0aGlzKS52YWwoKX0pLFxyXG4gICAgICAgXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZ3JzX3BhaWVkZXRfbW9udGFudCcpLnZhbChyZXN1bHQubWVzc2FnZS5tb250YW50KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LmNvZGUgPT0gNDAzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKFwiI19kZWxldGVcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgICB2YXIgdG9rZW4gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXRva2VuXCIpO1xyXG4gIFxyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgcm91dGU6IFwiZ3JzX2Nuc3NfZGVsZXRlXCIsXHJcbiAgICAgIHJlZGlyZWN0aW9uOiBcImdyc19jbnNzX2luZGV4XCIsXHJcbiAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgfTtcclxuICAgIC8vIGFsZXJ0KCk7XHJcbiAgICBkZWxldGVDYWIob2JqKTtcclxuICBcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcblxyXG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUtaW5kZXhvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSB1bmN1cnJ5VGhpcyhbXS5pbmRleE9mKTtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIG5hdGl2ZUluZGV4T2YoWzFdLCAxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHZhciBmcm9tSW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCkgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=