(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signature"],{

/***/ "./assets/js/components/signature/signature.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/signature/signature.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/delete.js */ "./assets/js/functions/delete.js");
/* harmony import */ var _ManagementErrors_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ManagementErrors/index.js */ "./assets/js/ManagementErrors/index.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ManagementSearchDatatable/customSearch.js */ "./assets/js/ManagementSearchDatatable/customSearch.js");
/* harmony import */ var _functions_autoFunctionAjax_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../functions/autoFunctionAjax.js */ "./assets/js/functions/autoFunctionAjax.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_10__);




var routes = __webpack_require__(/*! ../../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


__webpack_require__(/*! ../../plugins/validate/jquery.validate.min.js */ "./assets/js/plugins/validate/jquery.validate.min.js");





_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.setRoutingData(routes);
global.$ = $;
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
var dossier = "";
var radiosigner = $('.radiosigner:checked').val();
console.log("radiosigner");
$('body').on('change', '#usmodel', function () {
  var id = $(this).val();
  $.ajax({
    type: 'GET',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.generate('getSousModuleByDossierAndModule', {
      'module': id,
      'dossier': $('#dossier').val()
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      $("#sous_model").html(result);
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
    }
  });
});
var module_id;
$('body').on('click', '.module', function () {
  module_id = $(this).attr('id');
});
var sous_module_id;
var dossierMod;
function nombre_signer_nosigner(sous_module_id, dossierMod) {
  if (!dossierMod) {
    dossierMod = "tout";
  }
  $.ajax({
    type: 'GET',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.generate('nombre_signer_nosigner', {
      'sousModule': sous_module_id,
      'dossier': dossierMod
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      // alert(tr_alimentation_list_index.data().count())
      $(".radiosasigner_count").text(result.totalRecordsASigne);
      $(".radioseninstance_count").text(result.totalRecordsNoSigne);
      $(".modul" + sous_module_id).text(result.sideNoSigne);
      $(".extraction").attr('href', "/signature/export/" + sous_module_id);
      $(".extraction_detail").attr('href', "/signature/export/detail/" + sous_module_id);
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
    }
  });
  return;
}
function doc_module_nosigner(sous_module_id) {
  $.ajax({
    type: 'GET',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.generate('doc_module_nosigner', {
      'sousModule': sous_module_id
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      // alert(tr_alimentation_list_index.data().count())
      $("#dossier").html(result);
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
    }
  });
  return;
}
$('body').on('click', '.sous-module', function () {
  // alert(  $(this).attr('id') );
  $(".msg_rubrique").css("display", "none");
  $(".table_rubrique").css("display", "block");
  // console.log('najim');
  sous_module_id = $(this).attr('id');
  // dossierMod= $('#dossier').val();
  dossierMod = "tout";
  $(".sous-module").removeClass('active');
  $(this).addClass('active');
  if (sous_module_id != "") {
    // console.log(dossierMod);
    nombre_signer_nosigner(sous_module_id, dossierMod);
    doc_module_nosigner(sous_module_id);
    tr_alimentation_list_index.column(0).search(sous_module_id + "-" + dossierMod).draw();
  }
  // tr_alimentation_list_index.column(0).search("").draw();
});

$('body').on('change', '#dossier', function () {
  var id = $(this).val();
  dossierMod = $('#dossier').val();
  if (sous_module_id != "") {
    tr_alimentation_list_index.column(0).search(sous_module_id + "-" + $('#dossier').val()).draw();
    nombre_signer_nosigner(sous_module_id, $('#dossier').val());
    return;
  }
  tr_alimentation_list_index.column(0).search("").draw();

  // $.ajax({
  //   type: 'GET',
  //   url: Routing.generate('getModuleByDossierAndUser', {'dossier': id}),
  //   processData: false,
  //   contentType: false,
  //   success: function (result) {
  //     $("#usmodel").html(result);
  //   },
  //   error: function (jqXHR, textStatus, errorThrown) {
  //     toastr.error('Erreur', errorThrown, { timeOut: 4000 });
  //   },
  // });
});

// $('#usmodel').on('change', function () {
//   var usmodel_id = $(this).val();
// //alert(usmodel_id);
//   $.ajax({
//       url: "/signature/usmodel",
//       method: 'POST',
//       data: {usmodel_id: usmodel_id},
//       success: function (result) {
//       $("#sous_model").empty().html(result)

//       }
//   });
// });
// $('#Filter').on('change', function () {
//   var usmodel_id = $(this).val();
// alert(usmodel_id);
//   $.ajax({
//       url: "/signature/Filter",
//       method: 'POST',
//       data: {usmodel_id: usmodel_id},
//       success: function (result) {
//       $("#sous_model").empty().html(result)

//       }
//   });
// });

// alert('test');

var tr_alimentation_list_index = $('#signature').DataTable({
  ajax: {
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.generate('sigature_list'),
    // json datasource
    type: "get"
  },
  "serverSide": true,
  // "scrollX": true,  
  "deferRender": true,
  "stateSave": false,
  "lengthMenu": [[15, 25, 50, 100, 200], [15, 25, 50, 100, 200]],
  "pageLength": 15,
  "order": [[8, "desc"]],
  'columnDefs': [{
    'targets': 0,
    'searchable': false,
    'orderable': false,
    'className': 'dt-body-center',
    'render': function render(data, type, full, meta) {
      return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
    }
  }],
  //   'columnDefs': [
  //     {  'orderable': false,
  //        'className': 'select-checkbox',
  //        'targets': 0,
  //        'render': function(data, type, row, meta){
  //           if(type === 'display'){
  //              data = '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>';
  //           }

  //           return data;
  //        },
  //        'checkboxes': {
  //           'selectRow': true,
  //           'selectAllRender': '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>'
  //        }
  //     }
  //  ],
  'select': 'multi',
  "columns": [{
    searchable: true,
    width: '3%',
    targets: [0],
    name: "cab.id"
  }, {
    width: '5%',
    name: "cab.id"
  }, {
    width: '5%',
    name: "Dossier"
  }, {
    width: '20%',
    name: "code"
  }, {
    width: '5%',
    name: "date"
  }, {
    width: '5%',
    name: "cab.position_actuel"
  }, {
    width: '5%',
    name: "user.nom"
  }, {
    width: '20%',
    name: "description"
  }, {
    width: '20%',
    name: "pp.societe"
  }, {
    width: '5%',
    name: "montant"
  }, {
    orderable: false,
    width: '5%',
    name: "status"
  }, {
    orderable: false,
    width: '5%'
  }],
  // "initComplete": function(setting, json) {
  //   // alert(tr_alimentation_list_index.data().count())
  // },
  dom: 'f<"html5buttons btn-group"B>lTgtip',
  buttons: ['columnsToggle', {
    text: 'Restaurer',
    className: "btn btn-flat btn-restaurer btn-xs btn-xs-table",
    action: function action(e, dt, node, config) {
      table.state.clear();
      window.location.reload();
    }
  }],
  // "drawCallback": function( settings ) {
  //   if(radiosigner=="radiosasigner") {
  //     // alert(tr_alimentation_list_index.data().count())
  //     $(".radiosasigner_count").text(tr_alimentation_list_index.page.info().recordsTotal)
  //     $(".radioseninstance_count").text(0)
  //   } else {
  //     $(".radiosasigner_count").text(0)
  //     $(".radioseninstance_count").text(tr_alimentation_list_index.page.info().recordsTotal)
  //   }
  // },
  "language": {
    "url": _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.generate('datatables_langue'),
    "processing": true
  }
});

// Check if select All button is checked set checked class to all rows in table page
$('body').on('click', '#select_all', function () {
  if ($(this).prop('checked')) {
    $('#signature > tbody > tr').each(function (index, tr) {
      var input = $(tr).find('td:eq(0) > input').not(':disabled');
      input.addClass('checked');
    });
  } else {
    $('#signature > tbody > tr').each(function (index, tr) {
      var input = $(tr).find('td:eq(0) > input').not(':disabled');
      input.removeClass('checked');
    });
  }

  // Get all rows with search applied
  var rows = tr_alimentation_list_index.rows({
    'search': 'applied'
  }).nodes();
  // Check/uncheck checkboxes for all rows in the table
  $('input[type="checkbox"]:not(:disabled)', rows).prop('checked', this.checked);
});

// Handle click on checkbox to set state of "Select all" control 
$('body #signature tbody').on('change', 'input[type="checkbox"]:not(:disabled)', function () {
  // If checkbox is not checked
  if (!this.checked) {
    var el = $('#select_all').get(0);
    // If "Select all" control is checked and has 'indeterminate' property
    if (el && el.checked && 'indeterminate' in el) {
      // Set visual state of "Select all" control
      // as 'indeterminate'
      el.indeterminate = true;
    }
  }
});

//Handle checkbox in row if hasClass checked then remove is else add it
$('body').on('click', '.check', function () {
  if ($(this).hasClass('checked')) {
    $(this).removeClass('checked');
  } else {
    $(this).addClass('checked');
  }
});
tr_alimentation_list_index.on("init.dt", function (e, settings) {
  var api = new $.fn.dataTable.Api(settings);
  var st = api.state.loaded();
  var data = api.data();
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__["CustomSearchText"](api, [1, 3, 5, 6], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__["CustomSearchDate"](api, [4], []);
  _ManagementSearchDatatable_customSearch_js__WEBPACK_IMPORTED_MODULE_8__["CustomSearchSelect"](api, [2], []);
  $(".radiosasigner_count").val(tr_alimentation_list_index.data().count());
});
$('body').on('change', '#sous_model', function () {
  var id = $(this).val();
  if (id != "") {
    tr_alimentation_list_index.column(0).search(id + "-" + $('#dossier').val()).draw();
    return;
  }
  tr_alimentation_list_index.column(0).search("").draw();
});
$('body').on('change', '#filter', function () {
  var id = $(this).val();
  if (id != "") {
    tr_alimentation_list_index.column(1).search(id).draw();
    return;
  }
  tr_alimentation_list_index.column(1).search("").draw();
});
var permission = false;
$('body').on('click', '.radiosigner', function () {
  radiosigner = $(this).val();
  // alert(radiosigner)
  // alert('cccc')
  // $(".radiosignerlabel").removeClass("font-weight-bold");
  if (radiosigner == "radiosasigner") {
    // alert('test')
    permission = false;
    $(".radioseninstancelabel").removeClass("font-weight-bold");
    $(".radiosasignerlabel").addClass("font-weight-bold");
    tr_alimentation_list_index.column(2).search(radiosigner).draw();
  } else {
    permission = true;
    $(".radiosasignerlabel").removeClass("font-weight-bold");
    $(".radioseninstancelabel").addClass("font-weight-bold");
    // $("#radiosignerlabel").css("font-weight","lighter !important");
    // $("#radioseninstancelabel").css("font-weight","bold !important");
    tr_alimentation_list_index.column(2).search(radiosigner).draw();
  }
  if (radiosigner != "") {
    tr_alimentation_list_index.column(2).search(radiosigner).draw();
    return;
  }
  tr_alimentation_list_index.column(2).search("").draw();
});
$("body").on('click', ".detail_button", function (e) {
  // alert($('#dossier').val());
  e.preventDefault();
  var id = $(this).attr('data-id');
  $.ajax({
    type: 'GET',
    url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.generate('signature_details', {
      'demande': id,
      'sousModule': sous_module_id
    }),
    processData: false,
    contentType: false,
    success: function success(result) {
      $(".bod1").html(result).show();
      $(".spr1").hide();
      $("#lettrage").modal("show");
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      toastr.error('Erreur', errorThrown, {
        timeOut: 4000
      });
    }
  });
});
var demandesachat = [];
// $('body').on('click', '.checked ', function () {
//   const input = $(this);
//   // console.log(input.attr('data-id'));
//   if (input.is(':checked')) {
//     demandesachat.push(input.attr('data-id'));
//   } else {
//     const index = demandesachat.indexOf(input.attr('data-id'));
//     demandesachat.splice(index, 1);
//   }
// });
$('.select2').select2();
$('body').on('click', '.signature', function (e) {
  var icon = $('.signature i');

  // if (permission) {
  //   alert('true')
  // }else{
  //   alert('false')
  // }
  // return
  demandesachat = [];
  $('#signature > tbody > tr').each(function (index, tr) {
    var idRow = $(tr).attr('id');
    var isChecked = $(tr).find('td:eq(0) > input').hasClass('checked');
    if (isChecked) {
      demandesachat.push(idRow);
    }
  });
  if (demandesachat.length > 0 && $('#dossier').val() != '') {
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: 'Confirmation ?',
      text: 'Voulez vous vraiment Valider cet enregistrement ?',
      type: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui, Valider",
      cancelButtonText: "<i class='fa fa-times'></i> No, Annuler!"
    }).then(function (result) {
      if (result.value) {
        icon.removeClass('fa-user-pen').addClass('fa-spinner fa-spin');
        $('.signature').addClass('disabled').attr('disabled', true);
        var dta = new FormData();
        dta.append('demandesachat', JSON.stringify(demandesachat));
        dta.append('module', sous_module_id);
        dta.append('permission', permission);
        $.ajax({
          type: 'POST',
          url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_4___default.a.generate('check_signature'),
          data: dta,
          processData: false,
          contentType: false,
          success: function success(result) {
            if (result.code == 200) {
              nombre_signer_nosigner(sous_module_id, $('#dossier').val());
              demandesachat = [];
              tr_alimentation_list_index.ajax.reload(function () {
                icon.addClass('fa-user-pen').removeClass('fa-spinner fa-spin');
                $('.signature').removeClass('disabled').attr('disabled', false);
              });
              toastr.success(result.message.text, result.message.title, {
                timeOut: 5000
              });
              $("." + result.modul).text(result.count);
              // icon.addClass('fa-user-pen').removeClass('fa-spinner fa-spin')
              // $('.signature').removeClass('disabled').attr('disabled', false)
            } else if (result.code == 500) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
            } else if (result.code == 404) {
              toastr.warning(result.message.text, result.message.title, {
                timeOut: 4000
              });
              icon.addClass('fa-user-pen').removeClass('fa-spinner fa-spin');
              $('.signature').removeClass('disabled').attr('disabled', false);
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            icon.addClass('fa-user-pen').removeClass('fa-spinner fa-spin');
            $('.signature').removeClass('disabled').attr('disabled', false);
            toastr.error('Erreur', errorThrown, {
              timeOut: 4000
            });
          }
        });
      }
    });
  } else {
    toastr.warning('Veuillez choisir au moins une ligne et un dossier!!', 'warning', {
      timeOut: 4000
    });
  }
  e.preventDefault();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/components/signature/signature.js","runtime","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archive~archiveV1~cb_f~f95ebfa8","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~ed69996f","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~cb_fabrication~charge~~9a6c121e","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~4dd48de1","vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~cb_fabrication~charge~comm~67edc0e4","vendors~Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformatio~0fd408b7","vendors~alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~bb98a265",0,7,"Vtfacturefrscab~alimentation~alimentationCaisse~cb_fabrication~charge~commande_transformation~compte~b2dd80ce","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~f989f165","alimentation~alimentationCaisse~charge~compte~compte_consolides~eci~ecriturecomptable_charge~ecritur~d422791e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zaWduYXR1cmUvc2lnbmF0dXJlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCJnbG9iYWwiLCIkIiwiU3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJkb3NzaWVyIiwicmFkaW9zaWduZXIiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwib24iLCJpZCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZ2VuZXJhdGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwidG9hc3RyIiwidGltZU91dCIsIm1vZHVsZV9pZCIsImF0dHIiLCJzb3VzX21vZHVsZV9pZCIsImRvc3NpZXJNb2QiLCJub21icmVfc2lnbmVyX25vc2lnbmVyIiwidGV4dCIsInRvdGFsUmVjb3Jkc0FTaWduZSIsInRvdGFsUmVjb3Jkc05vU2lnbmUiLCJzaWRlTm9TaWduZSIsImRvY19tb2R1bGVfbm9zaWduZXIiLCJjc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXgiLCJjb2x1bW4iLCJzZWFyY2giLCJkcmF3IiwiRGF0YVRhYmxlIiwiZGF0YSIsImZ1bGwiLCJtZXRhIiwic2VhcmNoYWJsZSIsIndpZHRoIiwidGFyZ2V0cyIsIm5hbWUiLCJvcmRlcmFibGUiLCJkb20iLCJidXR0b25zIiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiZSIsImR0Iiwibm9kZSIsImNvbmZpZyIsInRhYmxlIiwic3RhdGUiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicHJvcCIsImVhY2giLCJpbmRleCIsInRyIiwiaW5wdXQiLCJmaW5kIiwibm90Iiwicm93cyIsIm5vZGVzIiwiY2hlY2tlZCIsImVsIiwiZ2V0IiwiaW5kZXRlcm1pbmF0ZSIsImhhc0NsYXNzIiwic2V0dGluZ3MiLCJhcGkiLCJmbiIsImRhdGFUYWJsZSIsIkFwaSIsInN0IiwibG9hZGVkIiwiQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIiwiY291bnQiLCJwZXJtaXNzaW9uIiwicHJldmVudERlZmF1bHQiLCJzaG93IiwiaGlkZSIsIm1vZGFsIiwiZGVtYW5kZXNhY2hhdCIsInNlbGVjdDIiLCJpY29uIiwiaWRSb3ciLCJpc0NoZWNrZWQiLCJwdXNoIiwibGVuZ3RoIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwidmFsdWUiLCJkdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb2RlIiwibWVzc2FnZSIsIm1vZHVsIiwid2FybmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0ZBQTBDLENBQUM7QUFDMkM7QUFDdkQ7QUFDdERBLG1CQUFPLENBQUMsMEdBQStDLENBQUM7QUFDUztBQUNsQztBQUMwRDtBQUNqQjtBQUN2QztBQUVqQ0Msa0hBQU8sQ0FBQ0MsY0FBYyxDQUFDSCxNQUFNLENBQUM7QUFFOUJJLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0FBQ1osSUFBTUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTU0sd0JBQXdCLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQzFDQyxXQUFXLEVBQUU7SUFDWEMsYUFBYSxFQUFFLG1DQUFt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LENBQUMsQ0FBQyxDIiwiZmlsZSI6InNpZ25hdHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5pbXBvcnQgeyBkZWxldGVDYWIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZGVsZXRlLmpzJztcclxucmVxdWlyZSgnLi4vLi4vcGx1Z2lucy92YWxpZGF0ZS9qcXVlcnkudmFsaWRhdGUubWluLmpzJyk7XHJcbmltcG9ydCB7IFNob3dGb3JtRXJyb3JzIH0gZnJvbSAnLi4vLi4vTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyc7XHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuaW1wb3J0ICogYXMgQ3VzdG9tU2VhcmNoRGF0YXRhYmxlIGZyb20gJy4uLy4uL01hbmFnZW1lbnRTZWFyY2hEYXRhdGFibGUvY3VzdG9tU2VhcmNoLmpzJztcclxuaW1wb3J0ICogYXMgYXV0b0Z1bmN0aW9uQWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2F1dG9GdW5jdGlvbkFqYXguanNcIjtcclxuaW1wb3J0IHsgd2FybmluZyB9IGZyb20gJ3RvYXN0cic7XHJcblxyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcblxyXG5nbG9iYWwuJCA9ICQ7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBTd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4td2hpdGUgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZScsXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxubGV0IGRvc3NpZXIgPSBcIlwiO1xyXG5sZXQgcmFkaW9zaWduZXIgPSAkKCcucmFkaW9zaWduZXI6Y2hlY2tlZCcpLnZhbCgpO1xyXG5cclxuY29uc29sZS5sb2coXCJyYWRpb3NpZ25lclwiKTtcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnI3VzbW9kZWwnLCAgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBpZCA9ICQodGhpcykudmFsKClcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dldFNvdXNNb2R1bGVCeURvc3NpZXJBbmRNb2R1bGUnLCB7J21vZHVsZSc6IGlkLCAnZG9zc2llcic6ICQoJyNkb3NzaWVyJykudmFsKCl9KSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIiNzb3VzX21vZGVsXCIpLmh0bWwocmVzdWx0KTtcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbnZhciBtb2R1bGVfaWQgO1xyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJy5tb2R1bGUnLCAgZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kdWxlX2lkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG59KTtcclxuXHJcbnZhciBzb3VzX21vZHVsZV9pZDtcclxudmFyIGRvc3NpZXJNb2Q7XHJcbmZ1bmN0aW9uIG5vbWJyZV9zaWduZXJfbm9zaWduZXIoc291c19tb2R1bGVfaWQsZG9zc2llck1vZCApe1xyXG4gICBpZighZG9zc2llck1vZCl7XHJcbiAgICBkb3NzaWVyTW9kPVwidG91dFwiXHJcbiAgIH1cclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ25vbWJyZV9zaWduZXJfbm9zaWduZXInLCB7J3NvdXNNb2R1bGUnOiBzb3VzX21vZHVsZV9pZCwgJ2Rvc3NpZXInOiBkb3NzaWVyTW9kfSksXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgLy8gYWxlcnQodHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXguZGF0YSgpLmNvdW50KCkpXHJcbiAgICAgICAgJChcIi5yYWRpb3Nhc2lnbmVyX2NvdW50XCIpLnRleHQocmVzdWx0LnRvdGFsUmVjb3Jkc0FTaWduZSlcclxuICAgICAgICAkKFwiLnJhZGlvc2VuaW5zdGFuY2VfY291bnRcIikudGV4dChyZXN1bHQudG90YWxSZWNvcmRzTm9TaWduZSlcclxuICAgICAgICAkKFwiLm1vZHVsXCIrc291c19tb2R1bGVfaWQpLnRleHQocmVzdWx0LnNpZGVOb1NpZ25lKVxyXG4gICAgICAgIFxyXG4gICAgICAkKFwiLmV4dHJhY3Rpb25cIikuYXR0cignaHJlZicsIFwiL3NpZ25hdHVyZS9leHBvcnQvXCIrc291c19tb2R1bGVfaWQpXHJcbiAgICAgICQoXCIuZXh0cmFjdGlvbl9kZXRhaWxcIikuYXR0cignaHJlZicsIFwiL3NpZ25hdHVyZS9leHBvcnQvZGV0YWlsL1wiK3NvdXNfbW9kdWxlX2lkKVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyJywgZXJyb3JUaHJvd24sIHsgdGltZU91dDogNDAwMCB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiBcclxuICByZXR1cm47XHJcblxyXG59XHJcbmZ1bmN0aW9uIGRvY19tb2R1bGVfbm9zaWduZXIoc291c19tb2R1bGVfaWQpe1xyXG4gICBcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RvY19tb2R1bGVfbm9zaWduZXInLCB7J3NvdXNNb2R1bGUnOiBzb3VzX21vZHVsZV9pZH0pLFxyXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4LmRhdGEoKS5jb3VudCgpKVxyXG4gICAgICAgICQoXCIjZG9zc2llclwiKS5odG1sKHJlc3VsdClcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gXHJcbiAgcmV0dXJuO1xyXG5cclxufVxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuc291cy1tb2R1bGUnLCAgZnVuY3Rpb24gKCkge1xyXG4gIFxyXG4gIC8vIGFsZXJ0KCAgJCh0aGlzKS5hdHRyKCdpZCcpICk7XHJcbiAgJChcIi5tc2dfcnVicmlxdWVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgJChcIi50YWJsZV9ydWJyaXF1ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgLy8gY29uc29sZS5sb2coJ25hamltJyk7XHJcbiAgc291c19tb2R1bGVfaWQgPSAgJCh0aGlzKS5hdHRyKCdpZCcpIDtcclxuICAvLyBkb3NzaWVyTW9kPSAkKCcjZG9zc2llcicpLnZhbCgpO1xyXG4gIGRvc3NpZXJNb2Q9IFwidG91dFwiO1xyXG4gICQoXCIuc291cy1tb2R1bGVcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcclxuXHJcbiAgaWYoc291c19tb2R1bGVfaWQgIT0gXCJcIil7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkb3NzaWVyTW9kKTtcclxuICAgIG5vbWJyZV9zaWduZXJfbm9zaWduZXIoc291c19tb2R1bGVfaWQsZG9zc2llck1vZCk7XHJcbiAgICBkb2NfbW9kdWxlX25vc2lnbmVyKHNvdXNfbW9kdWxlX2lkKTtcclxuICAgIHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4LmNvbHVtbigwKS5zZWFyY2goc291c19tb2R1bGVfaWQrXCItXCIrZG9zc2llck1vZCkuZHJhdygpO1xyXG4gICAgXHJcbiAgfVxyXG4gIC8vIHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4LmNvbHVtbigwKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICBcclxufSk7XHJcblxyXG5cclxuXHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJyNkb3NzaWVyJywgIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgaWQgPSAkKHRoaXMpLnZhbCgpXHJcbiAgZG9zc2llck1vZD0gJCgnI2Rvc3NpZXInKS52YWwoKTtcclxuICBpZihzb3VzX21vZHVsZV9pZCAhPSBcIlwiKXtcclxuICAgIHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4LmNvbHVtbigwKS5zZWFyY2goc291c19tb2R1bGVfaWQrXCItXCIrJCgnI2Rvc3NpZXInKS52YWwoKSkuZHJhdygpO1xyXG4gICAgbm9tYnJlX3NpZ25lcl9ub3NpZ25lcihzb3VzX21vZHVsZV9pZCwkKCcjZG9zc2llcicpLnZhbCgpKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXguY29sdW1uKDApLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgXHJcbiAgLy8gJC5hamF4KHtcclxuICAvLyAgIHR5cGU6ICdHRVQnLFxyXG4gIC8vICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXRNb2R1bGVCeURvc3NpZXJBbmRVc2VyJywgeydkb3NzaWVyJzogaWR9KSxcclxuICAvLyAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAvLyAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAvLyAgICAgJChcIiN1c21vZGVsXCIpLmh0bWwocmVzdWx0KTtcclxuICAvLyAgIH0sXHJcbiAgLy8gICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gIC8vICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1cicsIGVycm9yVGhyb3duLCB7IHRpbWVPdXQ6IDQwMDAgfSk7XHJcbiAgLy8gICB9LFxyXG4gIC8vIH0pO1xyXG4gIFxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gJCgnI3VzbW9kZWwnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgIHZhciB1c21vZGVsX2lkID0gJCh0aGlzKS52YWwoKTtcclxuLy8gLy9hbGVydCh1c21vZGVsX2lkKTtcclxuLy8gICAkLmFqYXgoe1xyXG4vLyAgICAgICB1cmw6IFwiL3NpZ25hdHVyZS91c21vZGVsXCIsXHJcbi8vICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4vLyAgICAgICBkYXRhOiB7dXNtb2RlbF9pZDogdXNtb2RlbF9pZH0sXHJcbi8vICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuLy8gICAgICAgJChcIiNzb3VzX21vZGVsXCIpLmVtcHR5KCkuaHRtbChyZXN1bHQpXHJcblxyXG4vLyAgICAgICB9XHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG4vLyAkKCcjRmlsdGVyJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuLy8gICB2YXIgdXNtb2RlbF9pZCA9ICQodGhpcykudmFsKCk7XHJcbi8vIGFsZXJ0KHVzbW9kZWxfaWQpO1xyXG4vLyAgICQuYWpheCh7XHJcbi8vICAgICAgIHVybDogXCIvc2lnbmF0dXJlL0ZpbHRlclwiLFxyXG4vLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuLy8gICAgICAgZGF0YToge3VzbW9kZWxfaWQ6IHVzbW9kZWxfaWR9LFxyXG4vLyAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbi8vICAgICAgICQoXCIjc291c19tb2RlbFwiKS5lbXB0eSgpLmh0bWwocmVzdWx0KVxyXG5cclxuLy8gICAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9KTtcclxuXHJcbi8vIGFsZXJ0KCd0ZXN0Jyk7XHJcblxyXG52YXIgdHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXggPSAkKCcjc2lnbmF0dXJlJykuRGF0YVRhYmxlKHtcclxuICBhamF4OiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc2lnYXR1cmVfbGlzdCcpLCAvLyBqc29uIGRhdGFzb3VyY2VcclxuICAgICAgdHlwZTogXCJnZXRcIlxyXG4gIH0sXHJcbiAgXCJzZXJ2ZXJTaWRlXCI6IHRydWUsXHJcbiAgLy8gXCJzY3JvbGxYXCI6IHRydWUsICBcclxuICBcImRlZmVyUmVuZGVyXCI6IHRydWUsXHJcbiAgXCJzdGF0ZVNhdmVcIjogZmFsc2UsXHJcbiAgXCJsZW5ndGhNZW51XCI6IFtbMTUsIDI1LCA1MCwgMTAwLCAyMDBdLCBbMTUsIDI1LCA1MCwgMTAwLCAyMDBdXSxcclxuICBcInBhZ2VMZW5ndGhcIjogMTUsXHJcbiAgXCJvcmRlclwiOiBbXHJcbiAgICAgIFs4LCBcImRlc2NcIl1cclxuICBdLFxyXG4gIFxyXG4gICdjb2x1bW5EZWZzJzogW3tcclxuICAgICd0YXJnZXRzJzogMCxcclxuICAgICdzZWFyY2hhYmxlJzogZmFsc2UsXHJcbiAgICAnb3JkZXJhYmxlJzogZmFsc2UsXHJcbiAgICAnY2xhc3NOYW1lJzogJ2R0LWJvZHktY2VudGVyJyxcclxuICAgICdyZW5kZXInOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSl7XHJcbiAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImlkW11cIiB2YWx1ZT1cIicgKyAkKCc8ZGl2Lz4nKS50ZXh0KGRhdGEpLmh0bWwoKSArICdcIj4nO1xyXG4gICAgfVxyXG4gfV0sXHJcbi8vICAgJ2NvbHVtbkRlZnMnOiBbXHJcbi8vICAgICB7ICAnb3JkZXJhYmxlJzogZmFsc2UsXHJcbi8vICAgICAgICAnY2xhc3NOYW1lJzogJ3NlbGVjdC1jaGVja2JveCcsXHJcbi8vICAgICAgICAndGFyZ2V0cyc6IDAsXHJcbi8vICAgICAgICAncmVuZGVyJzogZnVuY3Rpb24oZGF0YSwgdHlwZSwgcm93LCBtZXRhKXtcclxuLy8gICAgICAgICAgIGlmKHR5cGUgPT09ICdkaXNwbGF5Jyl7XHJcbi8vICAgICAgICAgICAgICBkYXRhID0gJzxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImR0LWNoZWNrYm94ZXNcIj48bGFiZWw+PC9sYWJlbD48L2Rpdj4nO1xyXG4vLyAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4vLyAgICAgICAgfSxcclxuLy8gICAgICAgICdjaGVja2JveGVzJzoge1xyXG4vLyAgICAgICAgICAgJ3NlbGVjdFJvdyc6IHRydWUsXHJcbi8vICAgICAgICAgICAnc2VsZWN0QWxsUmVuZGVyJzogJzxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImR0LWNoZWNrYm94ZXNcIj48bGFiZWw+PC9sYWJlbD48L2Rpdj4nXHJcbi8vICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICBdLFxyXG4gJ3NlbGVjdCc6ICdtdWx0aScsXHJcbiAgXCJjb2x1bW5zXCI6IFtcclxuICAgIHsgc2VhcmNoYWJsZTogdHJ1ZSwgd2lkdGg6ICczJScsIHRhcmdldHM6IFswXSAsIG5hbWU6XCJjYWIuaWRcIn0sXHJcbiAgICB7IHdpZHRoOiAnNSUnLCBuYW1lOlwiY2FiLmlkXCIgfSxcclxuICAgIHsgd2lkdGg6ICc1JScgLCBuYW1lOlwiRG9zc2llclwifSxcclxuICAgIHsgd2lkdGg6ICcyMCUnLCBuYW1lOlwiY29kZVwifSxcclxuICAgIHsgd2lkdGg6ICc1JScsIG5hbWU6XCJkYXRlXCJ9LFxyXG4gICAgeyB3aWR0aDogJzUlJywgbmFtZTpcImNhYi5wb3NpdGlvbl9hY3R1ZWxcIn0sXHJcbiAgICB7IHdpZHRoOiAnNSUnLCBuYW1lOlwidXNlci5ub21cIn0sXHJcbiAgICB7IHdpZHRoOiAnMjAlJywgbmFtZTpcImRlc2NyaXB0aW9uXCJ9LFxyXG4gICAgeyB3aWR0aDogJzIwJScsIG5hbWU6XCJwcC5zb2NpZXRlXCJ9LFxyXG4gICAgeyB3aWR0aDogJzUlJywgbmFtZTpcIm1vbnRhbnRcIn0sXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2Usd2lkdGg6ICc1JScsIG5hbWU6XCJzdGF0dXNcIn0sXHJcbiAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHdpZHRoOiAnNSUnIH0sXHJcbiAgXSxcclxuICAvLyBcImluaXRDb21wbGV0ZVwiOiBmdW5jdGlvbihzZXR0aW5nLCBqc29uKSB7XHJcbiAgLy8gICAvLyBhbGVydCh0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5kYXRhKCkuY291bnQoKSlcclxuICAvLyB9LFxyXG4gIGRvbTogJ2Y8XCJodG1sNWJ1dHRvbnMgYnRuLWdyb3VwXCJCPmxUZ3RpcCcsXHJcbiAgYnV0dG9uczogW1xyXG4gICAgICAnY29sdW1uc1RvZ2dsZScsXHJcbiAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdSZXN0YXVyZXInLFxyXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tZmxhdCBidG4tcmVzdGF1cmVyIGJ0bi14cyBidG4teHMtdGFibGVcIixcclxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKGUsIGR0LCBub2RlLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICB0YWJsZS5zdGF0ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICB9LFxyXG4gIF0sXHJcblxyXG4gIC8vIFwiZHJhd0NhbGxiYWNrXCI6IGZ1bmN0aW9uKCBzZXR0aW5ncyApIHtcclxuICAvLyAgIGlmKHJhZGlvc2lnbmVyPT1cInJhZGlvc2FzaWduZXJcIikge1xyXG4gIC8vICAgICAvLyBhbGVydCh0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5kYXRhKCkuY291bnQoKSlcclxuICAvLyAgICAgJChcIi5yYWRpb3Nhc2lnbmVyX2NvdW50XCIpLnRleHQodHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXgucGFnZS5pbmZvKCkucmVjb3Jkc1RvdGFsKVxyXG4gIC8vICAgICAkKFwiLnJhZGlvc2VuaW5zdGFuY2VfY291bnRcIikudGV4dCgwKVxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgJChcIi5yYWRpb3Nhc2lnbmVyX2NvdW50XCIpLnRleHQoMClcclxuICAvLyAgICAgJChcIi5yYWRpb3Nlbmluc3RhbmNlX2NvdW50XCIpLnRleHQodHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXgucGFnZS5pbmZvKCkucmVjb3Jkc1RvdGFsKVxyXG4gIC8vICAgfVxyXG4gIC8vIH0sXHJcbiAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgIFwidXJsXCI6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RhdGF0YWJsZXNfbGFuZ3VlJyksXHJcbiAgICAgIFwicHJvY2Vzc2luZ1wiOiB0cnVlXHJcbiAgfSxcclxuXHJcbn0pO1xyXG5cclxuIC8vIENoZWNrIGlmIHNlbGVjdCBBbGwgYnV0dG9uIGlzIGNoZWNrZWQgc2V0IGNoZWNrZWQgY2xhc3MgdG8gYWxsIHJvd3MgaW4gdGFibGUgcGFnZVxyXG4gJCgnYm9keScpLm9uKCdjbGljaycsICcjc2VsZWN0X2FsbCcsIGZ1bmN0aW9uKCl7XHJcbiAgXHJcbiAgaWYoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpe1xyXG4gICAgJCgnI3NpZ25hdHVyZSA+IHRib2R5ID4gdHInKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCB0cikge1xyXG4gICAgICB2YXIgaW5wdXQgPSAkKHRyKS5maW5kKCd0ZDplcSgwKSA+IGlucHV0Jykubm90KCc6ZGlzYWJsZWQnKVxyXG4gICAgICAgIGlucHV0LmFkZENsYXNzKCdjaGVja2VkJylcclxuICAgIH0pXHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICAkKCcjc2lnbmF0dXJlID4gdGJvZHkgPiB0cicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHRyKSB7XHJcbiAgICAgIHZhciBpbnB1dCA9ICQodHIpLmZpbmQoJ3RkOmVxKDApID4gaW5wdXQnKS5ub3QoJzpkaXNhYmxlZCcpXHJcbiAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEdldCBhbGwgcm93cyB3aXRoIHNlYXJjaCBhcHBsaWVkXHJcbiAgdmFyIHJvd3MgPSB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5yb3dzKHsgJ3NlYXJjaCc6ICdhcHBsaWVkJyB9KS5ub2RlcygpO1xyXG4gIC8vIENoZWNrL3VuY2hlY2sgY2hlY2tib3hlcyBmb3IgYWxsIHJvd3MgaW4gdGhlIHRhYmxlXHJcbiAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpJywgcm93cykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcbiAgXHJcbn0pO1xyXG5cclxuLy8gSGFuZGxlIGNsaWNrIG9uIGNoZWNrYm94IHRvIHNldCBzdGF0ZSBvZiBcIlNlbGVjdCBhbGxcIiBjb250cm9sIFxyXG4kKCdib2R5ICNzaWduYXR1cmUgdGJvZHknKS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKScsIGZ1bmN0aW9uKCl7XHJcbiAgLy8gSWYgY2hlY2tib3ggaXMgbm90IGNoZWNrZWRcclxuICBpZighdGhpcy5jaGVja2VkKXtcclxuICAgICB2YXIgZWwgPSAkKCcjc2VsZWN0X2FsbCcpLmdldCgwKTtcclxuICAgICAvLyBJZiBcIlNlbGVjdCBhbGxcIiBjb250cm9sIGlzIGNoZWNrZWQgYW5kIGhhcyAnaW5kZXRlcm1pbmF0ZScgcHJvcGVydHlcclxuICAgICBpZihlbCAmJiBlbC5jaGVja2VkICYmICgnaW5kZXRlcm1pbmF0ZScgaW4gZWwpKXtcclxuICAgICAgICAvLyBTZXQgdmlzdWFsIHN0YXRlIG9mIFwiU2VsZWN0IGFsbFwiIGNvbnRyb2xcclxuICAgICAgICAvLyBhcyAnaW5kZXRlcm1pbmF0ZSdcclxuICAgICAgICBlbC5pbmRldGVybWluYXRlID0gdHJ1ZTtcclxuICAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vSGFuZGxlIGNoZWNrYm94IGluIHJvdyBpZiBoYXNDbGFzcyBjaGVja2VkIHRoZW4gcmVtb3ZlIGlzIGVsc2UgYWRkIGl0XHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnLmNoZWNrJywgZnVuY3Rpb24oKXtcclxuICBpZigkKHRoaXMpLmhhc0NsYXNzKCdjaGVja2VkJykpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnY2hlY2tlZCcpXHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGVja2VkJylcclxuICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbnRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4Lm9uKFwiaW5pdC5kdFwiLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxubGV0IGFwaSA9IG5ldyAkLmZuLmRhdGFUYWJsZS5BcGkoc2V0dGluZ3MpO1xyXG5sZXQgc3QgPSBhcGkuc3RhdGUubG9hZGVkKCk7XHJcbmxldCBkYXRhID0gYXBpLmRhdGEoKTtcclxuQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFRleHQoYXBpLCBbMSwgMywgNSAsNl0sIFtdKTtcclxuQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaERhdGUoYXBpLCBbNF0sIFtdKTtcclxuQ3VzdG9tU2VhcmNoRGF0YXRhYmxlLkN1c3RvbVNlYXJjaFNlbGVjdChhcGksIFsyXSwgW10pO1xyXG4kKFwiLnJhZGlvc2FzaWduZXJfY291bnRcIikudmFsKHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4LmRhdGEoKS5jb3VudCgpKVxyXG5cclxufSk7XHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywgJyNzb3VzX21vZGVsJywgIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgaWQgPSAkKHRoaXMpLnZhbCgpXHJcbiAgaWYoaWQgIT0gXCJcIil7XHJcbiAgICB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5jb2x1bW4oMCkuc2VhcmNoKGlkK1wiLVwiKyQoJyNkb3NzaWVyJykudmFsKCkpLmRyYXcoKTtcclxuICAgXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4LmNvbHVtbigwKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnI2ZpbHRlcicsICBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgbGV0IGlkID0gJCh0aGlzKS52YWwoKVxyXG4gIGlmKGlkICE9IFwiXCIpe1xyXG4gICAgdHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXguY29sdW1uKDEpLnNlYXJjaChpZCkuZHJhdygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5jb2x1bW4oMSkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxufSk7XHJcbmxldCBwZXJtaXNzaW9uID0gZmFsc2VcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcucmFkaW9zaWduZXInLCAgZnVuY3Rpb24gKCkge1xyXG4gIHJhZGlvc2lnbmVyID0gJCh0aGlzKS52YWwoKVxyXG4gIC8vIGFsZXJ0KHJhZGlvc2lnbmVyKVxyXG4gICAgLy8gYWxlcnQoJ2NjY2MnKVxyXG4gICAgLy8gJChcIi5yYWRpb3NpZ25lcmxhYmVsXCIpLnJlbW92ZUNsYXNzKFwiZm9udC13ZWlnaHQtYm9sZFwiKTtcclxuICBpZiAocmFkaW9zaWduZXIgPT0gXCJyYWRpb3Nhc2lnbmVyXCIpIHtcclxuICAgIC8vIGFsZXJ0KCd0ZXN0JylcclxuICAgIHBlcm1pc3Npb24gPSBmYWxzZTtcclxuICAgICQoXCIucmFkaW9zZW5pbnN0YW5jZWxhYmVsXCIpLnJlbW92ZUNsYXNzKFwiZm9udC13ZWlnaHQtYm9sZFwiKTtcclxuICAgICQoXCIucmFkaW9zYXNpZ25lcmxhYmVsXCIpLmFkZENsYXNzKFwiZm9udC13ZWlnaHQtYm9sZFwiKTtcclxuICAgIHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4LmNvbHVtbigyKS5zZWFyY2gocmFkaW9zaWduZXIpLmRyYXcoKTtcclxuICB9ZWxzZXtcclxuICAgIHBlcm1pc3Npb24gPSB0cnVlXHJcbiAgICAkKFwiLnJhZGlvc2FzaWduZXJsYWJlbFwiKS5yZW1vdmVDbGFzcyhcImZvbnQtd2VpZ2h0LWJvbGRcIik7XHJcbiAgICAkKFwiLnJhZGlvc2VuaW5zdGFuY2VsYWJlbFwiKS5hZGRDbGFzcyhcImZvbnQtd2VpZ2h0LWJvbGRcIik7XHJcbiAgICAvLyAkKFwiI3JhZGlvc2lnbmVybGFiZWxcIikuY3NzKFwiZm9udC13ZWlnaHRcIixcImxpZ2h0ZXIgIWltcG9ydGFudFwiKTtcclxuICAgIC8vICQoXCIjcmFkaW9zZW5pbnN0YW5jZWxhYmVsXCIpLmNzcyhcImZvbnQtd2VpZ2h0XCIsXCJib2xkICFpbXBvcnRhbnRcIik7XHJcbiAgICB0cl9hbGltZW50YXRpb25fbGlzdF9pbmRleC5jb2x1bW4oMikuc2VhcmNoKHJhZGlvc2lnbmVyKS5kcmF3KCk7XHJcbiAgfVxyXG4gIGlmKHJhZGlvc2lnbmVyICE9IFwiXCIpe1xyXG4gICAgdHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXguY29sdW1uKDIpLnNlYXJjaChyYWRpb3NpZ25lcikuZHJhdygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJfYWxpbWVudGF0aW9uX2xpc3RfaW5kZXguY29sdW1uKDIpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbn0pO1xyXG5cclxuXHJcbiQoXCJib2R5XCIpLm9uKCdjbGljaycsXCIuZGV0YWlsX2J1dHRvblwiLCBmdW5jdGlvbihlKSAge1xyXG4gIC8vIGFsZXJ0KCQoJyNkb3NzaWVyJykudmFsKCkpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogJ0dFVCcsXHJcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3NpZ25hdHVyZV9kZXRhaWxzJywgeydkZW1hbmRlJzogaWQsICdzb3VzTW9kdWxlJzogc291c19tb2R1bGVfaWR9KSxcclxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgJChcIi5ib2QxXCIpLmh0bWwocmVzdWx0KS5zaG93KCk7XHJcbiAgICAgICQoXCIuc3ByMVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjbGV0dHJhZ2VcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBcclxufSlcclxuXHJcbmxldCBkZW1hbmRlc2FjaGF0ID0gW107XHJcbi8vICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmNoZWNrZWQgJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhpbnB1dC5hdHRyKCdkYXRhLWlkJykpO1xyXG4vLyAgIGlmIChpbnB1dC5pcygnOmNoZWNrZWQnKSkge1xyXG4vLyAgICAgZGVtYW5kZXNhY2hhdC5wdXNoKGlucHV0LmF0dHIoJ2RhdGEtaWQnKSk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGNvbnN0IGluZGV4ID0gZGVtYW5kZXNhY2hhdC5pbmRleE9mKGlucHV0LmF0dHIoJ2RhdGEtaWQnKSk7XHJcbi8vICAgICBkZW1hbmRlc2FjaGF0LnNwbGljZShpbmRleCwgMSk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuJCgnLnNlbGVjdDInKS5zZWxlY3QyKClcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuc2lnbmF0dXJlJywgZnVuY3Rpb24gKGUpIHtcclxuICBcclxuICBcclxuICBjb25zdCBpY29uID0gJCgnLnNpZ25hdHVyZSBpJylcclxuICAgXHJcbiAgLy8gaWYgKHBlcm1pc3Npb24pIHtcclxuICAvLyAgIGFsZXJ0KCd0cnVlJylcclxuICAvLyB9ZWxzZXtcclxuICAvLyAgIGFsZXJ0KCdmYWxzZScpXHJcbiAgLy8gfVxyXG4gIC8vIHJldHVyblxyXG4gIGRlbWFuZGVzYWNoYXQgPSBbXTtcclxuICBcclxuICAkKCcjc2lnbmF0dXJlID4gdGJvZHkgPiB0cicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHRyKSB7ICAgICBcclxuICAgIHZhciBpZFJvdyA9ICQodHIpLmF0dHIoJ2lkJykgXHJcbiAgICB2YXIgaXNDaGVja2VkID0gJCh0cikuZmluZCgndGQ6ZXEoMCkgPiBpbnB1dCcpLmhhc0NsYXNzKCdjaGVja2VkJylcclxuICAgICBcclxuICAgIGlmKGlzQ2hlY2tlZCl7XHJcbiAgICAgIGRlbWFuZGVzYWNoYXQucHVzaChpZFJvdyk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9KTtcclxuICBcclxuICBpZiAoZGVtYW5kZXNhY2hhdC5sZW5ndGggPiAwICYmICQoJyNkb3NzaWVyJykudmFsKCkgIT0gJycpIHtcclxuICAgIHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9uc1xyXG4gICAgICAuZmlyZSh7XHJcbiAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24gPycsXHJcbiAgICAgICAgdGV4dDogJ1ZvdWxleiB2b3VzIHZyYWltZW50IFZhbGlkZXIgY2V0IGVucmVnaXN0cmVtZW50ID8nLFxyXG4gICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpLCBWYWxpZGVyXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gTm8sIEFubnVsZXIhXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS11c2VyLXBlbicpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgICAgJCgnLnNpZ25hdHVyZScpLmFkZENsYXNzKCdkaXNhYmxlZCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgIGxldCBkdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgIGR0YS5hcHBlbmQoJ2RlbWFuZGVzYWNoYXQnLCBKU09OLnN0cmluZ2lmeShkZW1hbmRlc2FjaGF0KSk7XHJcbiAgICAgICAgICBkdGEuYXBwZW5kKCdtb2R1bGUnLCBzb3VzX21vZHVsZV9pZCk7XHJcbiAgICAgICAgICBkdGEuYXBwZW5kKCdwZXJtaXNzaW9uJywgcGVybWlzc2lvbik7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnY2hlY2tfc2lnbmF0dXJlJyksXHJcbiAgICAgICAgICAgIGRhdGE6IGR0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlX3NpZ25lcl9ub3NpZ25lcihzb3VzX21vZHVsZV9pZCwkKCcjZG9zc2llcicpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGRlbWFuZGVzYWNoYXQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyX2FsaW1lbnRhdGlvbl9saXN0X2luZGV4LmFqYXgucmVsb2FkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXVzZXItcGVuJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWduYXR1cmUnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLlwiK3Jlc3VsdC5tb2R1bCkudGV4dChyZXN1bHQuY291bnQpXHJcbiAgICAgICAgICAgICAgICAvLyBpY29uLmFkZENsYXNzKCdmYS11c2VyLXBlbicpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgICAgICAgICAgLy8gJCgnLnNpZ25hdHVyZScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuY29kZSA9PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKHJlc3VsdC5tZXNzYWdlLnRleHQsIHJlc3VsdC5tZXNzYWdlLnRpdGxlLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVPdXQ6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhyZXN1bHQubWVzc2FnZS50ZXh0LCByZXN1bHQubWVzc2FnZS50aXRsZSwge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS11c2VyLXBlbicpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lnbmF0dXJlJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXVzZXItcGVuJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgICAgJCgnLnNpZ25hdHVyZScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJldXInLCBlcnJvclRocm93biwgeyB0aW1lT3V0OiA0MDAwIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXHJcbiAgICAgICdWZXVpbGxleiBjaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZSBldCB1biBkb3NzaWVyISEnLFxyXG4gICAgICAnd2FybmluZycsXHJcbiAgICAgIHtcclxuICAgICAgICB0aW1lT3V0OiA0MDAwLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9