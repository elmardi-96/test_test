(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grs_paie"],{

/***/ "./assets/js/components/module_ressource_humaine/grs_paie.js":
/*!*******************************************************************!*\
  !*** ./assets/js/components/module_ressource_humaine/grs_paie.js ***!
  \*******************************************************************/
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_paie_list') + location.search,
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
  var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_paie_edit', {
    'id': $(this).closest('tr').attr('id')
  });
  window.location.href = url;
});
$(".select2").select2();
var table = $('#datatable-show').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_paie_employe_list', {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_paie_detail_employe_list', {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_paie_detail_employe_list_generer', {
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
  //   { "orderable": false, "width": "10px", "targets": 0 },
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_edit", {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_paie_new'),
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
        var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate('grs_paie_show', {
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
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_emp", {
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
        //  table1.ajax.reload();
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

$(".bod").on("click", "._delete", function (e) {
  var id = $(this).attr("data-id");
  var token = $(this).attr("data-token");
  var charge = $(this).attr("data-charge");
  if (id) {
    var obj = new Object();
    obj["route"] = "grs_employe_delete";
    obj["id"] = id;
    obj["token"] = token;
    obj["char"] = charge;
    obj["redirection"] = true;
    obj["modal"] = true;
    obj["hideModule"] = true;
    obj["nomModal"] = "ModalDocumentDynamique";
    obj["table"] = table;
    _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_8__["autoAjaxDelete3Param"](obj);
  } else {
    toastr.warning("Veuillez Renseigner une ligne pour effectuer cette opération", "warning", {
      timeOut: 4000
    });
  }
  e.preventDefault();
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_apply_transitions", {
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
              var url = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_emp", {
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_add_employe", {
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
          table1.ajax.reload();
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
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_delete_employe", {
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

              //table.ajax.reload();
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
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_montant_employe", {
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
  //alert(id)

  var obj = {
    route: "grs_paie_delete",
    redirection: "grs_paie_index",
    token: token,
    id: id
  };
  // alert();
  Object(_functions_delete_js__WEBPACK_IMPORTED_MODULE_4__["deleteCab"])(obj);
  e.preventDefault();
});
$("#_add_employers").click(function (e) {
  var paie = $("#_id").val();

  // alert(paie);
  if (paie) {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Vous voulez vraiment ajouter l’ensemble des employés  ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Non !"
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "GET",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_add_employers", {
            id: paie
          }),
          processData: false,
          contentType: false,
          success: function success(result) {
            //  console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });

              //table.ajax.reload();
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
  e.preventDefault();
});
$("#_generer_employers").click(function (e) {
  var paie = $("#_id").val();

  // alert(paie);
  if (paie) {
    var l = ladda__WEBPACK_IMPORTED_MODULE_6__["create"](document.activeElement);
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: "animatedSwal flipInX faster"
      },
      position: "top",
      title: "Confirmation ?",
      text: "Vous voulez vraiment Générer l’ensemble des employés ? ",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Non !"
    }).then(function (result) {
      if (result.value) {
        l.start();
        $.ajax({
          type: "GET",
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.generate("grs_paie_generer_employers", {
            id: paie
          }),
          processData: false,
          contentType: false,
          success: function success(result) {
            //  console.log(result);
            if (result.code == 200) {
              toastr.success(result.message.text, result.message.title, {
                timeOut: 4000
              });

              //table.ajax.reload();
              // table1.ajax.reload();
              l.stop();
              location.reload();
            } else if (result.code == 403) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
              l.stop();
            }
          }
        });
      }
    });
  }
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

},[["./assets/js/components/module_ressource_humaine/grs_paie.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2R1bGVfcmVzc291cmNlX2h1bWFpbmUvZ3JzX3BhaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZ2xvYmFsIiwiJCIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGFibGUiLCJEYXRhVGFibGUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInR5cGUiLCJkb20iLCJidXR0b25zIiwidGV4dCIsImNsYXNzTmFtZSIsImFjdGlvbiIsImUiLCJkdCIsIm5vZGUiLCJjb25maWciLCJzdGF0ZSIsImNsZWFyIiwid2luZG93IiwicmVsb2FkIiwiZml4ZWRIZWFkZXIiLCJvbiIsInNldHRpbmdzIiwiYXBpIiwiZm4iLCJkYXRhVGFibGUiLCJBcGkiLCJzdCIsImxvYWRlZCIsImRhdGEiLCJDdXN0b21TZWFyY2hEYXRhdGFibGUiLCJjbG9zZXN0IiwiYXR0ciIsImhyZWYiLCJzZWxlY3QyIiwidmFsIiwidGFibGUxIiwidGFibGUyIiwiZm9ybV9uYW1lIiwiZHRhIiwiRm9ybURhdGEiLCJzZWxlY3RvciIsImwiLCJMYWRkYSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXJ0IiwiaWQiLCJnZXQiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsInN0b3AiLCJlcnJvcnMiLCJyZW1vdmUiLCJTaG93Rm9ybUVycm9ycyIsImVhY2giLCJpbmRleCIsImFyciIsImluZGV4T2YiLCJwYXJlbnRzIiwiYXBwZW5kIiwiZW1wdHkiLCJ0b2FzdHIiLCJ3YXJuaW5nIiwibWVzc2FnZSIsInRpdGxlIiwidGltZU91dCIsImNvZGUiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicHJldmVudERlZmF1bHQiLCJqUXVlcnkiLCJpIiwiY29uc29sZSIsImxvZyIsImNoYW5nZSIsInRvZ2dsZSIsImNzcyIsImNsaWNrIiwicm93Iiwic2hvdyIsImhpZGUiLCJ0b2tlbiIsImNoYXJnZSIsIm9iaiIsIk9iamVjdCIsImF1dG9GdW5jdGlvbkFqYXgiLCJ0cmFuc2l0aW9uIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInZhbHVlIiwicmVzcG9uc2VKU09OIiwiZW1wIiwicGFpZSIsIm1vbnRhbnQiLCJyb3V0ZSIsInJlZGlyZWN0aW9uIiwiZGVsZXRlQ2FiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDdkQ7QUFDdERBLG1CQUFPLENBQUMsMEdBQStDLENBQUM7QUFDUztBQUNsQztBQUMwRDtBQUNqQjtBQUV4RUMsa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFHOUJJLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0FBRVosSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3hDQyxXQUFXLEVBQUU7SUFDVEMsYUFBYSxFQUFFLG1DQUFtQztJQUNsREMsWUFBWSxFQUFFO0VBQ2xCLENBQUM7RUFDREMsY0FBYyxFQUFFO0FBQ3BCLENBQUMsQ0FBQztBQUVGLElBQUlD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cmVxdWlyZSgnLi4vLi4vLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XHJcbmltcG9ydCB7IGRlbGV0ZUNhYiB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9kZWxldGUuanMnO1xyXG5yZXF1aXJlKCcuLi8uLi9wbHVnaW5zL3ZhbGlkYXRlL2pxdWVyeS52YWxpZGF0ZS5taW4uanMnKTtcclxuaW1wb3J0IHsgU2hvd0Zvcm1FcnJvcnMgfSBmcm9tICcuLi8uLi9NYW5hZ2VtZW50RXJyb3JzL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgTGFkZGEgZnJvbSAnbGFkZGEnO1xyXG5pbXBvcnQgKiBhcyBDdXN0b21TZWFyY2hEYXRhdGFibGUgZnJvbSAnLi4vLi4vTWFuYWdlbWVudFNlYXJjaERhdGF0YWJsZS9jdXN0b21TZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBhdXRvRnVuY3Rpb25BamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvYXV0b0Z1bmN0aW9uQWpheC5qc1wiO1xyXG5cclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xyXG5cclxuXHJcbmdsb2JhbC4kID0gJDtcclxuXHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbnZhciB0YWJsZSA9ICQoJyNncmlkJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19wYWllX2xpc3QnKSArIGxvY2F0aW9uLnNlYXJjaCwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMjUsIDUwLCAxMDAsIDIwMCwgNDAwXSwgWzI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIF0sXHJcbiAgICBcIm9yZGVyXCI6IFtbIDAsIFwiZGVzY1wiIF1dLFxyXG4gICAgLy8gZG9tOiAnbEJmcnRpcCcsXHJcbiAgICAvL2RvbTogJzxcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJCbGY+cnQ8XCJib3R0b21cImlwPjxcImNsZWFyXCI+JyxcclxuICAgIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICAgJ2NvbHVtbnNUb2dnbGUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhdXJlcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWZsYXQgYnRuLXJlc3RhdXJlciBidG4teHMgYnRuLXhzLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnN0YXRlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJ1cmxcIjogUm91dGluZy5nZW5lcmF0ZSgnZGF0YXRhYmxlc19sYW5ndWUnKSxcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpeGVkSGVhZGVyOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG50YWJsZS5vbihcImluaXQuZHRcIiwgZnVuY3Rpb24gKGUsIHNldHRpbmdzKSB7XHJcbiAgICBsZXQgYXBpID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaShzZXR0aW5ncyk7XHJcbiAgICBsZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbiAgICBsZXQgZGF0YSA9IGFwaS5kYXRhKCk7XHJcbiAgICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoVGV4dChhcGksIFsxLDIsXSwgW10pO1xyXG4gICAgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbM10sIFtdKTtcclxuICAgIEN1c3RvbVNlYXJjaERhdGF0YWJsZS5DdXN0b21TZWFyY2hTZWxlY3QoYXBpLCBbNCw1LDYsN10sIFtdKTtcclxuICAgIC8vICBDdXN0b21TZWFyY2hEYXRhdGFibGUuQ3VzdG9tU2VhcmNoQ2hlY2tib3goYXBpLCBbMF0sIFtdKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8qIGxpZW4gdmVycyBsYSBsaXZyYWlzb24gKi9cclxuJCgnI2dyaWQgdGJvZHknKS5vbignY2xpY2snLCAnLmNkX29wJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19wYWllX2VkaXQnLCB7ICdpZCc6ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpIH0pO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIuc2VsZWN0MlwiKS5zZWxlY3QyKCk7XHJcbnZhciB0YWJsZSA9ICQoJyNkYXRhdGFibGUtc2hvdycpLkRhdGFUYWJsZSh7XHJcbiAgXHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdncnNfcGFpZV9lbXBsb3llX2xpc3QnLHsgJ2lkJzogJChcIiNfaWRcIikudmFsKCkgfSkgKyBsb2NhdGlvbi5zZWFyY2gsIC8vIGpzb24gZGF0YXNvdXJjZVxyXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWZlclJlbmRlclwiOiB0cnVlLFxyXG4gICAgXCJzdGF0ZVNhdmVcIjogdHJ1ZSxcclxuICAgIFwibGVuZ3RoTWVudVwiOiBbWzEwLDI1LCA1MCwgMTAwLCAyMDAsIDQwMF0sIFsxMCwyNSwgNTAsIDEwMCwgMjAwLCBcIkFsbFwiXV0sXHJcblxyXG4gICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcInNlYXJjaGFibGVcIjogdHJ1ZSwgXCJ3aWR0aFwiOiBcIjFweFwiLCBcInRhcmdldHNcIjogWzBdIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICBdLFxyXG4gICAgXCJvcmRlclwiOiBbWyAwLCBcImRlc2NcIiBdXSxcclxuICAgIC8vIGRvbTogJ2xCZnJ0aXAnLFxyXG4gICAgLy9kb206ICc8XCJkdC1idXR0b25zIGJ0bi1ncm91cFwiQmxmPnJ0PFwiYm90dG9tXCJpcD48XCJjbGVhclwiPicsXHJcbiAgICBkb206ICdmPFwiaHRtbDVidXR0b25zIGJ0bi1ncm91cFwiQj5sVGd0aXAnLFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAgICdjb2x1bW5zVG9nZ2xlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1mbGF0IGJ0bi1yZXN0YXVyZXIgYnRuLXhzIGJ0bi14cy10YWJsZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChlLCBkdCwgbm9kZSwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaXhlZEhlYWRlcjogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxudmFyIHRhYmxlMSA9ICQoJyNkYXRhdGFibGUtc2hvdzInKS5EYXRhVGFibGUoe1xyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ3JzX3BhaWVfZGV0YWlsX2VtcGxveWVfbGlzdCcseyAnaWQnOiAkKFwiI19pZFwiKS52YWwoKSB9KSArIGxvY2F0aW9uLnNlYXJjaCwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTAsMjUsIDUwLCAxMDAsIDIwMCwgNDAwXSwgWzEwLDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSwgICAgICBcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1sgMCwgXCJkZXNjXCIgXV0sXHJcbiAgICAvLyBkb206ICdsQmZydGlwJyxcclxuICAgIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcblxyXG52YXIgdGFibGUyID0gJCgnI2RhdGF0YWJsZS1nZW5lcmVyJykuRGF0YVRhYmxlKHtcclxuICAgIGFqYXg6IHtcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dyc19wYWllX2RldGFpbF9lbXBsb3llX2xpc3RfZ2VuZXJlcicseyAnaWQnOiAkKFwiI19pZFwiKS52YWwoKSB9KSArIGxvY2F0aW9uLnNlYXJjaCwgLy8ganNvbiBkYXRhc291cmNlXHJcbiAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgIH0sXHJcbiAgICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgICBcInN0YXRlU2F2ZVwiOiB0cnVlLFxyXG4gICAgXCJsZW5ndGhNZW51XCI6IFtbMTAsMjUsIDUwLCAxMDAsIDIwMCwgNDAwXSwgWzEwLDI1LCA1MCwgMTAwLCAyMDAsIFwiQWxsXCJdXSxcclxuXHJcbiAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwic2VhcmNoYWJsZVwiOiB0cnVlLCBcIndpZHRoXCI6IFwiMXB4XCIsIFwidGFyZ2V0c1wiOiBbMF0gfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ3aWR0aFwiOiBcIjEwcHhcIiwgXCJ0YXJnZXRzXCI6IDAgfSxcclxuICAgICAgICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgIHsgXCJvcmRlcmFibGVcIjogZmFsc2UsIFwid2lkdGhcIjogXCIxMHB4XCIsIFwidGFyZ2V0c1wiOiAwIH0sXHJcbiAgICAgLy8gICB7IFwib3JkZXJhYmxlXCI6IGZhbHNlLCBcIndpZHRoXCI6IFwiMTBweFwiLCBcInRhcmdldHNcIjogMCB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgXSxcclxuICAgIFwib3JkZXJcIjogW1sgMCwgXCJkZXNjXCIgXV0sXHJcbiAgICAvLyBkb206ICdsQmZydGlwJyxcclxuICAgIC8vZG9tOiAnPFwiZHQtYnV0dG9ucyBidG4tZ3JvdXBcIkJsZj5ydDxcImJvdHRvbVwiaXA+PFwiY2xlYXJcIj4nLFxyXG4gICAgZG9tOiAnZjxcImh0bWw1YnV0dG9ucyBidG4tZ3JvdXBcIkI+bFRndGlwJyxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUmVzdGF1cmVyJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoZSwgZHQsIG5vZGUsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc3RhdGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcInVybFwiOiBSb3V0aW5nLmdlbmVyYXRlKCdkYXRhdGFibGVzX2xhbmd1ZScpLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZml4ZWRIZWFkZXI6IHRydWUsXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJCgnLmVkaXQnKS5vbignc3VibWl0JywgJy5mb3JtJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICB2YXIgZm9ybV9uYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICB2YXIgZHRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKTtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsYWRkYSBmb3IgdGhlIHNwZWNpZmllZCBidXR0b25cclxuICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgbC5zdGFydCgpO1xyXG4gICAgdmFyIGlkID0gZHRhLmdldChcIl9pZFwiKTtcclxuICAgXHJcbiAgICAvL2FsZXJ0KGlkKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImdyc19wYWllX2VkaXRcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgIC8vIGFsZXJ0KCk7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgIC8vICAgJCgnLmVycmV1cl9saXN0ZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgXHRcclxuXHJcbiAgICAgICAgICAgICAkKCcuZXJyZXVyX2xpc3RlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAvLyQoXCJzcGFuXCIpLnJlbW92ZSggXCIuZXJyZXVyX2xpc3RlXCIgKTtcclxuICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgJCgnLmVycm9yLWNsYXNzLXRhYicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgIC8vICBhbGVydChpbmRleCk7XHJcbiAgICAgICAgICAgICAgIC8vICBhbGVydChhcnIuaW5kZXhPZigkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJykpKTtcclxuICAgICAgICAgICAgICAgICBpZiAoYXJyLmluZGV4T2YoJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAkKFwiYVtocmVmJD0nI1wiICsgJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpICsgXCInXVwiKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiIGVycmV1cl9saXN0ZSBsYWJlbCBiYWRnZS1kYW5nZXJcIj5FcnJldXIhPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBhcnIgPSAkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBhcnIgPSBbXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAgIC8vIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdncnNfZW1wbG95ZV9pbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyXCIsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxualF1ZXJ5LmVhY2goJCgnLnRvYXN0ci1tc2cnKSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpKTtcclxuICAgIGNvbnNvbGUubG9nKCQodGhpcykudGV4dCgpKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9hc3RyJykgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2PDqWVzXCIsICQodGhpcykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwid2FybmluZ1wiKSB7XHJcbiAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJXYXJuaW5nXCIsICQodGhpcykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLXRvYXN0cicpID09IFwiZXJyb3JcIikge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcImVycmV1clwiLCAkKHRoaXMpLnRleHQoKSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICB9XHJcbn0pO1xyXG5qUXVlcnkuZWFjaCgkKCcuZm9ybS1lcnJvcnMgbGknKSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJCh0aGlzKS50ZXh0KCkpO1xyXG59KTtcclxuLypjaGVjayB0aGUgZm9ybSBlcnJvcnMqL1xyXG5jb25zb2xlLmxvZygkKCcuZm9ybS1lcnJvcnMnKS50ZXh0KCkpO1xyXG5pZiAoJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpICE9ICcnKSB7XHJcbiAgICB0b2FzdHIuZXJyb3IoXCJlcnJldXJcIiwgJCgnLmZvcm0tZXJyb3JzJykudGV4dCgpLCB7IHRpbWVPdXQ6IDQwMDAgfSlcclxufVxyXG4kKCdpbnB1dFtuYW1lPVwiZ3JzX2VtcGxveWVbdXNlcl1cIl06cmFkaW8nKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI29wdGlvbk9uZURpdicpLnRvZ2dsZSh0aGlzLmlkID09ICdncnNfZW1wbG95ZV91c2VyXzAnKTtcclxuICAgIGlmICh0aGlzLmlkID09ICdncnNfZW1wbG95ZV91c2VyXzEnKSB7XHJcbiAgICAgICQoXCIuYmxvY19pbnZlc3Rpc3NlbWVudFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJCgnLm5ldycpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdncnNfcGFpZV9uZXcnKSxcclxuICAgICAgICBkYXRhOiBkdGEsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBTaG93Rm9ybUVycm9ycyhzZWxlY3RvciwgZm9ybV9uYW1lLCByZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZW1wdHkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCByZXN1bHQubWVzc2FnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ3JzX3BhaWVfc2hvdycseydpZCc6cmVzdWx0Lm1lc3NhZ2UuZGF0YX0pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgLy8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXJcIiwgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKCcuZW1wbG95ZScpLm9uKCdzdWJtaXQnLCAnLmZvcm0nLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIHZhciBmb3JtX25hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcclxuICAgIHZhciBkdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGxhZGRhIGZvciB0aGUgc3BlY2lmaWVkIGJ1dHRvblxyXG4gICAgdmFyIGwgPSBMYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICBsLnN0YXJ0KCk7XHJcbiAgICB2YXIgaWQgPSBkdGEuZ2V0KFwiX2lkXCIpO1xyXG4gIC8vIGFsZXJ0KGlkICk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJncnNfcGFpZV9lbXBcIiwgeyBpZDogaWQgfSksXHJcbiAgICAgICAgZGF0YTogZHRhLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuIFxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xyXG5cclxuICAgICAgICAgICAgICAgIFNob3dGb3JtRXJyb3JzKHNlbGVjdG9yLCBmb3JtX25hbWUsIHJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlPT00MDMpIHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoIHJlc3VsdC5tZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICAgIC8vICB0YWJsZTEuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgLy8gJCgnI2dyc19wYWllZGV0X2VtcGxveWUnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAvLyAkKCcjZ3JzX3BhaWVkZXRfbW9udGFudCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgIC8vICQoJyNncnNfcGFpZWRldF9kZXNjcmlwdGlvbicpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1clwiLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxuJCgnLmVycm9yLWNsYXNzLXRhYicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAvL2FsZXJ0KGFyci5pbmRleE9mKCQodGhpcykucGFyZW50cygnLnRhYi1wYW5lJykuYXR0cignaWQnKSkpXHJcbiAgICBpZiAoYXJyLmluZGV4T2YoJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpKSA9PSAtMSkge1xyXG4gICAgICAgICQoXCJhW2hyZWYkPScjXCIgKyAkKHRoaXMpLnBhcmVudHMoJy50YWItcGFuZScpLmF0dHIoJ2lkJykgKyBcIiddXCIpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJsYWJlbCBiYWRnZS1kYW5nZXJcIj5FcnJldXIhPC9zcGFuPicpO1xyXG4gICAgfVxyXG4gICAgYXJyID0gJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKS5hdHRyKCdpZCcpO1xyXG59KVxyXG4kKFwiI19lZGl0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGlkID0gdGFibGUucm93KFwiLnNlbGVjdGVkXCIpLmlkKCk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICB2YXIgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcImdyc19lbXBsb3llX2VkaXRcIiwgeyBpZDogaWQgfSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgIFwiVmV1aWxsZXogUmVuc2VpZ25lciB1bmUgbGlnbmUgcG91ciBlZmZlY3R1ZXIgY2V0dGUgb3DDqXJhdGlvblwiLFxyXG4gICAgICBcIndhcm5pbmdcIixcclxuICAgICAgeyB0aW1lT3V0OiA0MDAwIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsICcucGFpZW1lbnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL2FsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkgPT0gMikge1xyXG4gICAgICAgICQoJy5ibG9jX2NoZXF1ZScpLnNob3coKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5ibG9jX2NoZXF1ZScpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIC8vICQoXCIjdmFsaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxufSk7XHJcblxyXG5cclxuJChcIi5ib2RcIikub24oXCJjbGlja1wiLCBcIi5fZGVsZXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgdmFyIHRva2VuID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10b2tlblwiKTtcclxuICAgIHZhciBjaGFyZ2UgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWNoYXJnZVwiKTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIG9ialtcInJvdXRlXCJdID0gXCJncnNfZW1wbG95ZV9kZWxldGVcIjtcclxuICAgICAgICBvYmpbXCJpZFwiXSA9IGlkO1xyXG4gICAgICAgIG9ialtcInRva2VuXCJdID0gdG9rZW47XHJcbiAgICAgICAgb2JqW1wiY2hhclwiXSA9IGNoYXJnZTtcclxuICAgICAgICBvYmpbXCJyZWRpcmVjdGlvblwiXSA9IHRydWU7XHJcbiAgICAgICAgb2JqW1wibW9kYWxcIl0gPSB0cnVlO1xyXG4gICAgICAgIG9ialtcImhpZGVNb2R1bGVcIl0gPSB0cnVlO1xyXG4gICAgICAgIG9ialtcIm5vbU1vZGFsXCJdID0gXCJNb2RhbERvY3VtZW50RHluYW1pcXVlXCI7XHJcbiAgICAgICAgb2JqW1widGFibGVcIl0gPSB0YWJsZTtcclxuICAgICAgICBhdXRvRnVuY3Rpb25BamF4LmF1dG9BamF4RGVsZXRlM1BhcmFtKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIlZldWlsbGV6IFJlbnNlaWduZXIgdW5lIGxpZ25lIHBvdXIgZWZmZWN0dWVyIGNldHRlIG9ww6lyYXRpb25cIixcclxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHsgdGltZU91dDogNDAwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKFxyXG4gICAgXCJjbGlja1wiLFxyXG4gICAgXCIuZ3JzX3BhaWVfYXBwbHlfdHJhbnNpdGlvbnNcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGR0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10aXRsZVwiKTtcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9ICQodGhpcykuYXR0cihcImRhdGEtdHJhbnNpdGlvblwiKTtcclxuXHJcbiAgICAgICAgZHRhLmFwcGVuZChcImlkXCIsIGlkKTtcclxuICAgICAgICBkdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xyXG4gICAgICAgIGR0YS5hcHBlbmQoXCJ0cmFuc2l0aW9uXCIsIHRyYW5zaXRpb24pO1xyXG5cclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiBcImFuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uID9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZvdWxleiB2b3VzIHZyYWltZW50IHBhc3NlciDDoCBsJ8OpdGF0ICdcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJyBwb3VyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiBOb24gIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JzX3BhaWVfYXBwbHlfdHJhbnNpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDogaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChyZXN1bHQudmFsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyc19wYWllX2VtcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IHJlc3VsdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5yZXNwb25zZUpTT04ubWVzc2FnZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLnJlc3BvbnNlSlNPTi5tZXNzYWdlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lT3V0OiA0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ29tbWFuZGUgbm9uIHJlbnNlaWduw6kgXCIsIFwid2FybmluZ1wiLCB7dGltZU91dDogNDAwMH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5cclxuJChcIiNkYXRhdGFibGUtc2hvdyB0Ym9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZF9lbXBcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgZW1wPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIik7XHJcbiAgdmFyIHBhaWU9ICAkKFwiI19pZFwiKS52YWwoKTtcclxuIFxyXG4gICAvLyBhbGVydChpZCk7XHJcbiAgICBpZihlbXApe1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImdyc19wYWllX2FkZF9lbXBsb3llXCIsIHtpZDogcGFpZSAsIGVtcDplbXB9KSxcclxuICAgICAgIFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGFibGUxLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQuY29kZSA9PSA0MDMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn1cclxufSk7XHJcblxyXG5cclxuJChcIiNkYXRhdGFibGUtc2hvdzIgdGJvZHlcIikub24oXCJjbGlja1wiLCBcIi5kZWxfZW1wXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgZW1wPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIik7XHJcbiAgICB2YXIgcGFpZT0gICQoXCIjX2lkXCIpLnZhbCgpO1xyXG5cclxuICAgICAvLyBhbGVydChpZCk7XHJcbiAgICAgIGlmKGVtcCl7XHJcblxyXG4gICAgICAgIFxyXG4gIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gIC5maXJlKHtcclxuICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICBwb3B1cDogXCJhbmltYXRlZFN3YWwgZmxpcEluWCBmYXN0ZXJcIixcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNldCBlbnJlZ2lzdHJlbWVudCA/XCIsXHJcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPiBPdWksIFN1cHByaW1lciFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgfSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJncnNfcGFpZV9kZWxldGVfZW1wbG95ZVwiLCB7aWQ6IHBhaWUgLCBlbXA6ZW1wfSksXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlMS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LmNvZGUgPT0gNDAzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAgIFxyXG4gIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgJChcIi5lbXBsb3llXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgIC8vIGFsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZ3JzX3BhaWVfbW9udGFudF9lbXBsb3llXCIsIHtpZDogJCh0aGlzKS52YWwoKX0pLFxyXG4gICAgICAgXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZ3JzX3BhaWVkZXRfbW9udGFudCcpLnZhbChyZXN1bHQubWVzc2FnZS5tb250YW50KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LmNvZGUgPT0gNDAzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbiQoXCIjX2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuICAgIHZhciB0b2tlbiA9ICQodGhpcykuYXR0cihcImRhdGEtdG9rZW5cIik7XHJcbiAgICAvL2FsZXJ0KGlkKVxyXG4gIFxyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgcm91dGU6IFwiZ3JzX3BhaWVfZGVsZXRlXCIsXHJcbiAgICAgIHJlZGlyZWN0aW9uOiBcImdyc19wYWllX2luZGV4XCIsXHJcbiAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgfTtcclxuICAgIC8vIGFsZXJ0KCk7XHJcbiAgICBkZWxldGVDYWIob2JqKTtcclxuICBcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgICAkKFwiI19hZGRfZW1wbG95ZXJzXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgIFxyXG4gICAgICB2YXIgcGFpZT0gICQoXCIjX2lkXCIpLnZhbCgpO1xyXG4gIFxyXG4gICAgICAvLyBhbGVydChwYWllKTtcclxuICAgICAgICBpZihwYWllKXtcclxuICAgICAgICAgXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgIC5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91cyB2b3VsZXogdnJhaW1lbnQgYWpvdXRlciBs4oCZZW5zZW1ibGUgZGVzIGVtcGxvecOpcyAgP1wiLFxyXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIjxpIGNsYXNzPSdmYSBmYS1jaGVjayc+PC9pPiBPdWkgIVwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IE5vbiAhXCIsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gIFxyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImdyc19wYWllX2FkZF9lbXBsb3llcnNcIiwge2lkOiBwYWllfSksXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAvL3RhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlMS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQuY29kZSA9PSA0MDMpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcocmVzdWx0Lm1lc3NhZ2UudGV4dCwgcmVzdWx0Lm1lc3NhZ2UudGl0bGUsIHsgdGltZU91dDogNDAwMCB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgICBcclxuICAgICQoXCIjX2dlbmVyZXJfZW1wbG95ZXJzXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgIFxyXG4gICAgICB2YXIgcGFpZT0gICQoXCIjX2lkXCIpLnZhbCgpO1xyXG4gIFxyXG4gICAgICAvLyBhbGVydChwYWllKTtcclxuICAgICAgICBpZihwYWllKXtcclxuICAgICAgICAgIHZhciBsID0gTGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnNcclxuICAgIC5maXJlKHtcclxuICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgcG9wdXA6IFwiYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91cyB2b3VsZXogdnJhaW1lbnQgR8OpbsOpcmVyIGzigJllbnNlbWJsZSBkZXMgZW1wbG95w6lzID8gXCIsXHJcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSAhXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm9uICFcIixcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICBsLnN0YXJ0KCk7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiZ3JzX3BhaWVfZ2VuZXJlcl9lbXBsb3llcnNcIiwge2lkOiBwYWllfSksXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAvL3RhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlMS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQuY29kZSA9PSA0MDMpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwgeyB0aW1lT3V0OiA0MDAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUtaW5kZXhvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSB1bmN1cnJ5VGhpcyhbXS5pbmRleE9mKTtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIG5hdGl2ZUluZGV4T2YoWzFdLCAxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBORUdBVElWRV9aRVJPIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHZhciBmcm9tSW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCkgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=